"use client";

// Le dépôt GitHub vu depuis le navigateur de l'admin.
//
// Lecture : on demande au Worker le commit de tête et le hash de chaque
// fichier (quelques Ko), puis on télécharge le fichier nous-mêmes sur le CDN
// de GitHub, adressé par commit. Le Worker ne voit jamais les 3 Mo de
// concours.json.
//
// Écriture : la modification est une fonction pure (liste → liste) appliquée
// ici, sur une copie fraîche. Le résultat est envoyé en blob, puis UN commit
// regroupe tous les fichiers touchés (JSON + miroirs Markdown + images), avec
// le hash lu au départ comme garde-fou. Si quelqu'un d'autre (le robot
// almaster, un autre onglet) a modifié le fichier entre-temps, GitHub refuse
// (409) : on recharge et on ré-applique la même modification, une fois.

import { api, ApiError } from "./api";

const cache = new Map(); // path -> { data, sha, commit, at }
const listeners = new Set();
let localMode = null;

export const REPO_RAW = "https://raw.githubusercontent.com/SAADDEV0/SaadConcours";

function notify(path) {
  for (const fn of listeners) fn(path);
}

export function subscribeRepo(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function getCached(path) {
  return cache.get(path) || null;
}

export function isLocalMode() {
  return localMode;
}

// URL d'affichage d'un fichier de public/ (images) : la version la plus
// récente de main, visible avant même que le déploiement ne soit terminé.
export function assetUrl(p) {
  if (!p) return "";
  if (/^(https?:|data:|blob:)/.test(p)) return p;
  const clean = p.replace(/^\/+/, "");
  if (localMode) return `/${clean}`;
  return `${REPO_RAW}/main/public/${clean}`;
}

export async function fetchHead(paths = [], dirs = []) {
  const qs = new URLSearchParams();
  if (paths.length) qs.set("paths", paths.join(","));
  if (dirs.length) qs.set("dirs", dirs.join(","));
  const head = await api(`/api/admin/repo/head?${qs}`);
  localMode = Boolean(head.local);
  return head;
}

async function download(path, meta) {
  try {
    const res = await fetch(meta.url, { cache: meta.url.startsWith("http") ? "force-cache" : "no-store" });
    if (res.ok) return await res.text();
  } catch {
    // CDN injoignable (réseau filtrant…) : repli sur le Worker ci-dessous.
  }
  const res = await fetch(`/api/admin/repo/raw?path=${encodeURIComponent(path)}`, { cache: "no-store" });
  if (res.status === 401) throw new ApiError("Session expirée.", 401);
  if (!res.ok) throw new ApiError(`Lecture de ${path} impossible (${res.status}).`, res.status);
  return res.text();
}

const inflight = new Map();

// Charge un fichier JSON de public/. Le cache est réutilisé s'il a moins de
// `maxAge` ms ; au-delà, un appel « head » suffit à savoir s'il est à jour.
export function loadJson(path, { force = false, maxAge = 45000, fallback } = {}) {
  const hit = cache.get(path);
  if (hit && !force && Date.now() - hit.at < maxAge) return Promise.resolve(hit);
  const key = path + (force ? ":force" : "");
  if (inflight.has(key)) return inflight.get(key);
  const p = (async () => {
    const head = await fetchHead([path]);
    const meta = head.files[path];
    if (!meta) {
      if (fallback !== undefined) {
        const entry = { data: structuredClone(fallback), sha: null, commit: head.commit, at: Date.now() };
        cache.set(path, entry);
        notify(path);
        return entry;
      }
      throw new ApiError(`Fichier introuvable : ${path}`, 404);
    }
    const current = cache.get(path);
    if (current && current.sha === meta.sha) {
      current.at = Date.now();
      return current;
    }
    const text = await download(path, meta);
    const entry = { data: JSON.parse(text), sha: meta.sha, commit: head.commit, at: Date.now() };
    cache.set(path, entry);
    notify(path);
    return entry;
  })().finally(() => inflight.delete(key));
  inflight.set(key, p);
  return p;
}

/* ------------------------------ Écriture ------------------------------ */

export function utf8ToBase64(str) {
  const bytes = new TextEncoder().encode(str);
  return bytesToBase64(bytes);
}

export function bytesToBase64(bytes) {
  let bin = "";
  const CHUNK = 0x8000;
  for (let i = 0; i < bytes.length; i += CHUNK) bin += String.fromCharCode.apply(null, bytes.subarray(i, i + CHUNK));
  return btoa(bin);
}

async function uploadBlob(base64) {
  const res = await fetch("/api/admin/repo/blob", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // Assemblé ici pour que le Worker n'ait qu'à relayer le flux.
    body: `{"encoding":"base64","content":"${base64}"}`,
  });
  if (res.status === 401) throw new ApiError("Session expirée.", 401);
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new ApiError(data.error || `Envoi impossible (${res.status})`, res.status);
  return data.sha;
}

// files : [{ path, text } | { path, base64 } | { path, delete: true }]
export async function commitFiles({ files, expect = {}, message, audit, trash }) {
  const changes = [];
  const shas = {};
  // Envois en parallèle, trois à la fois (les images d'un concours).
  const queue = files.filter((f) => !f.delete);
  let i = 0;
  async function worker() {
    while (i < queue.length) {
      const f = queue[i++];
      const b64 = f.base64 ?? utf8ToBase64(f.text);
      shas[f.path] = await uploadBlob(b64);
    }
  }
  await Promise.all([worker(), worker(), worker()]);
  for (const f of files) changes.push({ path: f.path, sha: f.delete ? null : shas[f.path] });

  try {
    const result = await api("/api/admin/repo/commit", { method: "POST", body: { changes, expect, message, audit, trash } });
    recordCommit(result.commit);
    return { ...result, shas };
  } catch (err) {
    if (err.status === 409) err.conflict = true;
    throw err;
  }
}

// Lecture fraîche → modification pure → commit, avec une nouvelle tentative
// automatique en cas de conflit.
//
// mutate(data) renvoie { data, files?, audit?, trash?, result? } :
//   data  : nouveau contenu du fichier JSON (null = ne pas l'écrire)
//   files : fichiers supplémentaires du même commit (miroirs, images…)
export async function mutateJson(path, mutate, { message, fallback } = {}) {
  let lastErr;
  for (let attempt = 0; attempt < 2; attempt++) {
    const base = await loadJson(path, { force: true, fallback });
    const out = mutate(structuredClone(base.data)) || {};
    const files = [...(out.files || [])];
    const writeMain = out.data !== null && out.data !== undefined;
    const text = writeMain ? JSON.stringify(out.data, null, 2) + "\n" : null;
    if (writeMain) files.unshift({ path, text });
    if (!files.length) return { result: out.result, unchanged: true };
    try {
      const res = await commitFiles({
        files,
        expect: writeMain ? { [path]: base.sha, ...(out.expect || {}) } : out.expect || {},
        message: out.message || message,
        audit: out.audit,
        trash: out.trash,
      });
      if (writeMain) {
        cache.set(path, { data: out.data, sha: res.shas[path], commit: res.commit, at: Date.now() });
        notify(path);
      }
      return { result: out.result, commit: res.commit };
    } catch (err) {
      lastErr = err;
      if (!err.conflict) throw err;
    }
  }
  throw new ApiError(
    "Le fichier a été modifié ailleurs pendant l'enregistrement, et la nouvelle tentative a échoué aussi. Recharge la page et réessaie.",
    409,
    lastErr?.data
  );
}

/* ------------------------------ Suivi des commits ------------------------------ */

// Le dernier commit fait depuis cet onglet, pour que l'indicateur de mise en
// ligne sache qu'un déploiement va démarrer avant même que GitHub Actions ne
// l'ait listé.
const commitListeners = new Set();
let lastCommit = null;

function recordCommit(sha) {
  lastCommit = { sha, at: Date.now() };
  for (const fn of commitListeners) fn(lastCommit);
}

export function onCommit(fn) {
  commitListeners.add(fn);
  return () => commitListeners.delete(fn);
}

export function getLastCommit() {
  return lastCommit;
}


// Pour les enregistrements faits par une route serveur (Cours Bac, réglages
// via l'ancienne API) : prévient l'indicateur de mise en ligne.
export function markCommitted() {
  recordCommit("serveur");
}
