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

// Every api.github.com call goes through here.
//
// The User-Agent matters and is not optional: GitHub's REST API rejects
// requests without one with a 403 (not a 401 — the token is fine, the
// request shape is not). Node's fetch sets a default User-Agent, so this
// went unnoticed for as long as the site only ran on Node. Cloudflare
// Workers' fetch sends no User-Agent at all, so every authenticated call
// — settings, corrigé listings, and all admin writes — failed with 403
// the moment the site ran on a Worker.
//
// raw.githubusercontent.com is unaffected: it is a CDN, not the API, which
// is why public page data kept loading while the admin paths broke.
function apiHeaders(extra) {
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "SaadConcours",
    ...extra,
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  return headers;
}

export function githubWriteConfigured() {
  return Boolean(process.env.GITHUB_TOKEN);
}

// Raw content, no auth required, served off GitHub's CDN. Previously used
// Next's fetch data cache (next: {revalidate: 120}) to avoid re-fetching on
// every request, but that cache has a hard 2MB entry-size limit — once
// concours.json crossed that (50-entry imports pushed it to ~2.8MB), Next
// silently failed to store fresh fetches and kept serving whatever smaller
// snapshot was last cached, no matter how many times the site redeployed.
// GitHub's raw CDN already caches the file at the edge, so there's no need
// for a second caching layer here — just always fetch fresh.
export async function readGithubFile(path) {
  const full = repoPath(path);
  const url = `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}/${full}`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`readGithubFile ${full} failed: ${res.status}`);
  return res.text();
}

// Lists file names in a repo directory (e.g. data/corriges/) via the
// Contents API — returns [] for a missing directory instead of throwing.
// Used to know which concours already have a corrigé committed to the
// repo without fetching every file's content just to check existence.
export async function listGithubDir(path) {
  const full = repoPath(path);
  const url = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${full}?ref=${BRANCH}`;
  const res = await fetch(url, { headers: apiHeaders(), next: { revalidate: 120 } });
  if (res.status === 404) return [];
  if (!res.ok) throw new Error(`listGithubDir ${full} failed: ${res.status}`);
  const data = await res.json();
  return Array.isArray(data) ? data.map((entry) => entry.name) : [];
}

// Returns undefined (not an error) when the file doesn't exist yet — the
// Contents API create-vs-update decision hinges on whether a sha is sent.
async function getFileSha(path) {
  const url = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${path}?ref=${BRANCH}`;
  const res = await fetch(url, {
    headers: apiHeaders(),
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
//
// Demandé en `application/vnd.github.raw` : avec le type JSON par défaut,
// l'API renvoie un `content` vide pour tout fichier de plus de 1 Mo — et
// concours.json en pèse 3. Chaque écriture de concours lisait donc une
// chaîne vide, et JSON.parse("") faisait échouer la sauvegarde.
export async function readGithubFileFresh(path) {
  const full = repoPath(path);
  const url = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${full}?ref=${BRANCH}`;
  const res = await fetch(url, {
    headers: apiHeaders({ Accept: "application/vnd.github.raw" }),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`readGithubFileFresh ${full} failed: ${res.status}`);
  return res.text();
}

// Writes are commits, so a stale sha means someone else (or another
// request) touched the file in between — retry once with a fresh sha
// before giving up, rather than silently losing the write.
async function putGithubFile(full, base64Content, message) {
  const url = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${full}`;
  for (let attempt = 0; attempt < 2; attempt++) {
    const sha = await getFileSha(full);
    const res = await fetch(url, {
      method: "PUT",
      headers: apiHeaders({ "Content-Type": "application/json" }),
      body: JSON.stringify({ message, content: base64Content, sha, branch: BRANCH }),
    });
    if (res.ok) return res.json();
    if (res.status === 409 && attempt === 0) continue; // stale sha, retry once
    const err = await res.text();
    throw new Error(`putGithubFile ${full} failed: ${res.status} ${err}`);
  }
}

export async function writeGithubFile(path, content, message) {
  return putGithubFile(repoPath(path), Buffer.from(content, "utf-8").toString("base64"), message);
}

// Same as writeGithubFile but for binary content (images) that's already
// base64-encoded by the caller — encoding it as UTF-8 first would corrupt
// the bytes.
export async function writeGithubBinaryFile(path, base64Content, message) {
  return putGithubFile(repoPath(path), base64Content, message);
}
