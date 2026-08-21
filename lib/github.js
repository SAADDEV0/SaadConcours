// Thin wrapper around the GitHub Contents API. Once GITHUB_TOKEN is set,
// this repo's public/data/*.json files become the single source of truth:
// reads come from the raw file (fast, CDN-cached, no auth needed), writes
// go through the Contents API and land as a real commit on `main`. No
// GITHUB_TOKEN configured (e.g. local dev) means read-only access to the
// live repo content, matching how the KV-less fallback used to work.

const OWNER = "SAADDEV0";
const REPO = "SaadConcours";
const BRANCH = "main";

// Callers pass paths relative to public/ (e.g. "data/concours.json"), same
// as the old fs-based readLocalJson — this is where that gets reconciled
// with the repo's actual layout.
function repoPath(publicRelativePath) {
  return `public/${publicRelativePath}`;
}

export function githubWriteConfigured() {
  return Boolean(process.env.GITHUB_TOKEN);
}

// Raw content, no auth required, served off GitHub's CDN. concours.json
// alone is 600+ KB, and a cache miss here costs several seconds (fetch +
// parse a large JSON body inside the function) — a short revalidate window
// meant almost every request paid that cost. Content only changes via
// admin writes, which are infrequent, so a few minutes of staleness is a
// good trade for consistently fast reads.
export async function readGithubFile(path) {
  const full = repoPath(path);
  const url = `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}/${full}`;
  const res = await fetch(url, { next: { revalidate: 120 } });
  if (!res.ok) throw new Error(`readGithubFile ${full} failed: ${res.status}`);
  return res.text();
}

// Returns undefined (not an error) when the file doesn't exist yet — the
// Contents API create-vs-update decision hinges on whether a sha is sent.
async function getFileSha(path) {
  const url = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${path}?ref=${BRANCH}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
    },
    cache: "no-store",
  });
  if (res.status === 404) return undefined;
  if (!res.ok) throw new Error(`getFileSha ${path} failed: ${res.status}`);
  const data = await res.json();
  return data.sha;
}

// Same content as readGithubFile, but always current — goes through the
// authenticated Contents API with no caching instead of the raw CDN URL.
// Used right before a write (add/update/delete) so a read-modify-write
// sequence can't act on data that's stale because of the read cache.
export async function readGithubFileFresh(path) {
  const full = repoPath(path);
  const url = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${full}?ref=${BRANCH}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
    },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`readGithubFileFresh ${full} failed: ${res.status}`);
  const data = await res.json();
  return Buffer.from(data.content, "base64").toString("utf-8");
}

// Writes are commits, so a stale sha means someone else (or another
// request) touched the file in between — retry once with a fresh sha
// before giving up, rather than silently losing the write.
export async function writeGithubFile(path, content, message) {
  const full = repoPath(path);
  const url = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${full}`;
  for (let attempt = 0; attempt < 2; attempt++) {
    const sha = await getFileSha(full);
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
        content: Buffer.from(content, "utf-8").toString("base64"),
        sha,
        branch: BRANCH,
      }),
    });
    if (res.ok) return res.json();
    if (res.status === 409 && attempt === 0) continue; // stale sha, retry once
    const err = await res.text();
    throw new Error(`writeGithubFile ${full} failed: ${res.status} ${err}`);
  }
}
