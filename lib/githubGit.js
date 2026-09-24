// Couche Git du panneau d'administration (console v6).
//
// Pourquoi une deuxième couche à côté de lib/github.js :
//
//   1. L'API Contents renvoie un `content` VIDE pour tout fichier de plus de
//      1 Mo. concours.json pèse 3,1 Mo : chaque lecture « fraîche » avant une
//      écriture recevait une chaîne vide, et chaque ajout/modification/
//      suppression de concours depuis l'ancien admin échouait.
//   2. Le Worker n'a que 10 ms de CPU par requête. Parser 3 Mo de JSON,
//      le re-sérialiser puis l'encoder en base64 côté serveur dépasse ce
//      budget à lui seul (Error 1102).
//   3. Une sauvegarde de concours faisait jusqu'à trois commits (JSON +
//      extrait + corrigé), donc trois déploiements lancés puis annulés.
//
// La nouvelle répartition : le navigateur de l'admin lit les fichiers
// directement sur le CDN de GitHub (par hash de commit, donc toujours exact),
// fait la modification lui-même, et n'envoie au Worker que des flux déjà
// encodés. Le Worker se contente de relayer ces flux vers l'API Git Data
// (aucun parsing) puis de créer UN commit qui regroupe tous les fichiers,
// avec contrôle de concurrence : si un fichier a changé depuis la lecture,
// le commit est refusé (409) au lieu d'écraser la modification de quelqu'un
// d'autre (le robot almaster, un autre onglet…).
//
// Sans GITHUB_TOKEN (développement local), tout est servi depuis le disque
// avec une surcouche en mémoire pour les écritures : le dépôt local n'est
// jamais modifié.

import fs from "fs";
import path from "path";
import crypto from "crypto";

const OWNER = "SAADDEV0";
const REPO = "SaadConcours";
const BRANCH = "main";
const API = `https://api.github.com/repos/${OWNER}/${REPO}`;

// Tout ce que l'admin a le droit d'écrire vit sous public/data ou
// public/images. Le chemin est toujours relatif à public/.
const ALLOWED_ROOTS = ["data/", "images/"];

export function gitConfigured() {
  return Boolean(process.env.GITHUB_TOKEN);
}

export function repoInfo() {
  return { owner: OWNER, repo: REPO, branch: BRANCH };
}

// Refuse tout ce qui pourrait sortir de public/data ou public/images.
export function safePublicPath(p) {
  const clean = String(p || "").replace(/\\/g, "/").replace(/^\/+/, "");
  if (!clean || clean.length > 300) return null;
  if (clean.split("/").some((seg) => !seg || seg === "." || seg === "..")) return null;
  if (!ALLOWED_ROOTS.some((root) => clean.startsWith(root))) return null;
  if (!/^[\w\-./@À-ÿ]+$/.test(clean)) return null;
  return clean;
}

function headers(extra) {
  const h = {
    Accept: "application/vnd.github+json",
    // Obligatoire : l'API GitHub répond 403 sans User-Agent, et le fetch des
    // Workers n'en envoie pas (voir lib/github.js).
    "User-Agent": "SaadConcours-admin",
    "X-GitHub-Api-Version": "2022-11-28",
    ...extra,
  };
  if (process.env.GITHUB_TOKEN) h.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  return h;
}

async function gh(pathname, init = {}) {
  const res = await fetch(`${API}${pathname}`, { ...init, headers: headers(init.headers), cache: "no-store" });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    const err = new Error(`GitHub ${init.method || "GET"} ${pathname} → ${res.status} ${text.slice(0, 200)}`);
    err.status = res.status;
    throw err;
  }
  return res.status === 204 ? null : res.json();
}

/* ------------------------------ Mode local ------------------------------ */

const LOCAL = (globalThis.__scAdminGit ||= { files: new Map(), blobs: new Map(), commit: 0 });

function gitBlobSha(buffer) {
  return crypto
    .createHash("sha1")
    .update(Buffer.concat([Buffer.from(`blob ${buffer.length}\0`), buffer]))
    .digest("hex");
}

function localRead(p) {
  if (LOCAL.files.has(p)) return LOCAL.files.get(p);
  const file = path.join(process.cwd(), "public", p);
  try {
    return fs.readFileSync(file);
  } catch {
    return null;
  }
}

/* ------------------------------ Lecture ------------------------------ */

function localListDir(dir) {
  const names = new Set();
  try {
    for (const f of fs.readdirSync(path.join(process.cwd(), "public", dir))) names.add(f);
  } catch {
    // dossier absent : liste vide
  }
  for (const [p, buf] of LOCAL.files) {
    if (!p.startsWith(dir + "/") || p.slice(dir.length + 1).includes("/")) continue;
    const name = p.slice(dir.length + 1);
    if (buf === null) names.delete(name);
    else names.add(name);
  }
  return [...names].sort();
}

// Hash du commit de tête + hash de blob de chaque fichier demandé, lus sur
// le même commit : le contenu téléchargé ensuite par le navigateur (par hash
// de commit) correspond exactement au `sha` renvoyé ici. `dirs` liste en
// plus le nom des fichiers de quelques dossiers (ex. data/corriges).
export async function readHead(paths, dirs = []) {
  const clean = paths.map(safePublicPath).filter(Boolean);
  const cleanDirs = dirs.map((d) => safePublicPath(d + "/x")?.slice(0, -2)).filter(Boolean);
  if (!gitConfigured()) {
    const files = {};
    for (const p of clean) {
      const buf = localRead(p);
      files[p] = buf ? { sha: gitBlobSha(buf), size: buf.length, url: `/api/admin/repo/raw?path=${encodeURIComponent(p)}` } : null;
    }
    const listings = Object.fromEntries(cleanDirs.map((d) => [d, localListDir(d)]));
    return { commit: `local-${LOCAL.commit}`, local: true, files, dirs: listings };
  }

  const ref = await gh(`/git/ref/heads/${BRANCH}`);
  const commit = ref.object.sha;
  // Un appel « trees » par dossier distinct : quelques Ko de JSON, quel que
  // soit le poids des fichiers eux-mêmes.
  const treeDirs = [...new Set([...clean.map((p) => p.split("/").slice(0, -1).join("/")), ...cleanDirs])];
  const entries = new Map();
  await Promise.all(
    treeDirs.map(async (dir) => {
      try {
        const tree = await gh(`/git/trees/${commit}:${encodeURI(`public/${dir}`)}`);
        for (const e of tree.tree || []) entries.set(`${dir}/${e.path}`, e);
      } catch (err) {
        if (err.status !== 404) throw err;
      }
    })
  );
  const files = {};
  for (const p of clean) {
    const e = entries.get(p);
    files[p] = e && e.type === "blob"
      ? {
          sha: e.sha,
          size: e.size,
          // Adressé par commit : immuable, donc sans risque de servir une
          // version en cache plus ancienne que `sha`.
          url: `https://raw.githubusercontent.com/${OWNER}/${REPO}/${commit}/public/${encodeURI(p)}`,
        }
      : null;
  }
  const listings = {};
  for (const d of cleanDirs) {
    listings[d] = [...entries.keys()]
      .filter((k) => k.startsWith(d + "/") && entries.get(k).type === "blob")
      .map((k) => k.slice(d.length + 1))
      .sort();
  }
  return { commit, local: false, files, dirs: listings };
}

// Flux brut d'un fichier (mode local, ou repli si le CDN de GitHub est
// injoignable depuis le navigateur). Jamais parsé côté serveur.
export async function streamRaw(p) {
  const clean = safePublicPath(p);
  if (!clean) return null;
  if (!gitConfigured()) {
    const buf = localRead(clean);
    return buf ? new Response(buf) : null;
  }
  const res = await fetch(`${API}/contents/${encodeURI(`public/${clean}`)}?ref=${BRANCH}`, {
    headers: headers({ Accept: "application/vnd.github.raw" }),
    cache: "no-store",
  });
  if (!res.ok) return null;
  return new Response(res.body);
}

/* ------------------------------ Écriture ------------------------------ */

// Crée un blob Git. Le corps de la requête est DÉJÀ le JSON attendu par
// GitHub ({"encoding":"base64","content":"…"}), assemblé par le navigateur :
// le Worker le relaie en flux sans jamais le lire, donc ne dépense
// quasiment aucun CPU quelle que soit la taille du fichier.
export async function createBlobFromStream(body, length = 0) {
  if (!gitConfigured()) {
    const json = JSON.parse(await new Response(body).text());
    const buf = Buffer.from(String(json.content || ""), "base64");
    const sha = gitBlobSha(buf);
    LOCAL.blobs.set(sha, buf);
    return { sha, size: buf.length };
  }

  // Sur Workers, un flux de longueur connue part avec un Content-Length au
  // lieu d'un envoi fragmenté (chunked) : plus sûr côté GitHub.
  let stream = body;
  if (length > 0 && typeof FixedLengthStream !== "undefined") {
    // eslint-disable-next-line no-undef
    const fixed = new FixedLengthStream(length);
    body.pipeTo(fixed.writable).catch(() => {});
    stream = fixed.readable;
  }
  const res = await fetch(`${API}/git/blobs`, {
    method: "POST",
    headers: headers({ "Content-Type": "application/json" }),
    body: stream,
    duplex: "half",
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    const err = new Error(`GitHub blob → ${res.status} ${text.slice(0, 200)}`);
    err.status = res.status;
    throw err;
  }
  const json = await res.json();
  return { sha: json.sha };
}

export class ConflictError extends Error {
  constructor(paths) {
    super("Le contenu a changé depuis son chargement.");
    this.paths = paths;
    this.status = 409;
  }
}

// Un seul commit pour tous les fichiers d'une opération.
//   changes : [{ path, sha }]      sha = blob déjà créé, ou null = supprimer
//   expect  : { [path]: sha|null } hash lu par le navigateur avant de modifier
export async function commitChanges({ changes, expect = {}, message }) {
  const list = changes
    .map((c) => ({ path: safePublicPath(c.path), sha: c.sha ?? null }))
    .filter((c) => c.path);
  if (!list.length) throw Object.assign(new Error("Aucun fichier à enregistrer."), { status: 400 });
  const msg = String(message || "Mise à jour depuis l'admin").slice(0, 300);

  if (!gitConfigured()) {
    const conflicts = Object.entries(expect).filter(([p, sha]) => {
      const buf = localRead(safePublicPath(p) || "");
      return (buf ? gitBlobSha(buf) : null) !== (sha || null);
    });
    if (conflicts.length) throw new ConflictError(conflicts.map(([p]) => p));
    for (const c of list) {
      if (c.sha === null) LOCAL.files.set(c.path, null);
      else {
        const buf = LOCAL.blobs.get(c.sha);
        if (!buf) throw Object.assign(new Error(`Blob inconnu : ${c.sha}`), { status: 400 });
        LOCAL.files.set(c.path, buf);
      }
    }
    LOCAL.commit += 1;
    return { commit: `local-${LOCAL.commit}`, message: msg };
  }

  // Deux tentatives : si un autre commit (robot almaster…) arrive entre la
  // lecture de la tête et la mise à jour de la branche, on recommence sur la
  // nouvelle tête — à condition que NOS fichiers n'aient pas changé.
  for (let attempt = 0; attempt < 3; attempt++) {
    const ref = await gh(`/git/ref/heads/${BRANCH}`);
    const parent = ref.object.sha;
    const parentCommit = await gh(`/git/commits/${parent}`);

    const expectPaths = Object.keys(expect).map(safePublicPath).filter(Boolean);
    if (expectPaths.length) {
      const head = await readHeadAt(parent, expectPaths);
      const conflicts = expectPaths.filter((p) => (head[p] || null) !== (expect[p] || null));
      if (conflicts.length) throw new ConflictError(conflicts);
    }

    const tree = await gh(`/git/trees`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        base_tree: parentCommit.tree.sha,
        tree: list.map((c) => ({ path: `public/${c.path}`, mode: "100644", type: "blob", sha: c.sha })),
      }),
    });
    const commit = await gh(`/git/commits`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: msg, tree: tree.sha, parents: [parent] }),
    });
    try {
      await gh(`/git/refs/heads/${BRANCH}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sha: commit.sha, force: false }),
      });
      return { commit: commit.sha, message: msg };
    } catch (err) {
      // 422 « not a fast forward » : la branche a bougé entre-temps.
      if (err.status === 422 && attempt < 2) continue;
      throw err;
    }
  }
  throw new Error("La branche change trop vite, réessaie dans un instant.");
}

async function readHeadAt(commit, paths) {
  const dirs = [...new Set(paths.map((p) => p.split("/").slice(0, -1).join("/")))];
  const out = {};
  await Promise.all(
    dirs.map(async (dir) => {
      try {
        const tree = await gh(`/git/trees/${commit}:${encodeURI(`public/${dir}`)}`);
        for (const e of tree.tree || []) out[`${dir}/${e.path}`] = e.sha;
      } catch (err) {
        if (err.status !== 404) throw err;
      }
    })
  );
  return out;
}

/* ------------------------------ Historique ------------------------------ */

// Derniers commits qui touchent public/data ou public/images : le vrai
// historique du contenu, qui survit à tout (contrairement au journal d'audit
// KV, fenêtre glissante de 300 entrées).
export async function recentCommits(limit = 30) {
  if (!gitConfigured()) return [];
  const list = await gh(`/commits?sha=${BRANCH}&path=public&per_page=${Math.min(100, limit)}`);
  return list.map((c) => ({
    sha: c.sha,
    message: c.commit.message.split("\n")[0],
    author: c.commit.author?.name || c.author?.login || "",
    date: c.commit.author?.date || c.commit.committer?.date,
    url: c.html_url,
  }));
}

// Dernières exécutions du workflow de déploiement Cloudflare : répond à la
// question « ma modification est-elle en ligne ? ». Le jeton peut ne pas
// avoir la permission Actions ; le dépôt étant public, on retente sans.
export async function recentDeploys(limit = 6) {
  const url = `${API}/actions/workflows/deploy-cloudflare.yml/runs?branch=${BRANCH}&per_page=${limit}`;
  let res = await fetch(url, { headers: headers(), cache: "no-store" });
  if (res.status === 403 || res.status === 401) {
    const h = headers();
    delete h.Authorization;
    res = await fetch(url, { headers: h, cache: "no-store" });
  }
  if (!res.ok) throw Object.assign(new Error(`GitHub Actions → ${res.status}`), { status: res.status });
  const json = await res.json();
  return (json.workflow_runs || []).map((r) => ({
    id: r.id,
    status: r.status, // queued | in_progress | completed
    conclusion: r.conclusion, // success | failure | cancelled | null
    title: r.display_title || r.head_commit?.message?.split("\n")[0] || "",
    sha: r.head_sha,
    createdAt: r.created_at,
    updatedAt: r.updated_at,
    url: r.html_url,
  }));
}
