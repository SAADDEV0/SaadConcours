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

// Raw content, no auth required, served off GitHub's CDN. Small revalidate
// window so a write is visible to the next read almost immediately without
// hammering GitHub on every request.
export async function readGithubFile(path) {
  const full = repoPath(path);
  const url = `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}/${full}`;
  const res = await fetch(url, { next: { revalidate: 10 } });
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
