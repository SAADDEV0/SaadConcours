import crypto from "crypto";
import fs from "fs";
import path from "path";
import { readGithubFile, readGithubFileFresh, writeGithubFile, githubWriteConfigured, listGithubDir } from "./github";
import { FILIERE_CATEGORIES, categoryOf } from "./taxonomy";

function readLocalJson(relPath) {
  const file = path.join(process.cwd(), "public", relPath);
  return JSON.parse(fs.readFileSync(file, "utf-8"));
}

function slugify(s) {
  return String(s || "item")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 80);
}

function randomId() {
  return crypto.randomBytes(8).toString("hex");
}

// Generic GitHub-backed collection: public/data/<relPath> is a single JSON
// array and IS the database — reads come straight from the raw file on
// GitHub (fast, CDN-served, no auth needed), writes commit back to that
// same file via the Contents API. No separate KV store to drift out of
// sync with the repo. Without GITHUB_TOKEN configured (e.g. local dev),
// falls back to reading the local checkout, with an in-memory overlay for
// writes so the admin UI still works locally without touching disk.
function makeStore(relPath, label) {
  let memoryFallback = null;
  return {
    async getAll() {
      if (githubWriteConfigured()) {
        return JSON.parse(await readGithubFile(relPath));
      }
      if (!memoryFallback) memoryFallback = readLocalJson(relPath);
      return memoryFallback;
    },
    // Bypasses the read cache — required before any read-modify-write so a
    // mutation can never act on a stale list (e.g. deleting an item added
    // moments earlier, before the cache window expired).
    async getAllFresh() {
      if (githubWriteConfigured()) {
        return JSON.parse(await readGithubFileFresh(relPath));
      }
      if (!memoryFallback) memoryFallback = readLocalJson(relPath);
      return memoryFallback;
    },
    async saveAll(list, message) {
      if (githubWriteConfigured()) {
        await writeGithubFile(relPath, JSON.stringify(list, null, 2) + "\n", message || `Update ${label}`);
        return;
      }
      memoryFallback = list;
    },
  };
}

async function addItem(store, entry, defaultId, label) {
  const list = await store.getAllFresh();
  if (!entry.id) entry.id = defaultId(entry);
  const next = [...list, entry];
  await store.saveAll(next, `Add ${label}: ${entry.id}`);
  return entry;
}

async function updateItem(store, id, patch, label) {
  const list = await store.getAllFresh();
  const idx = list.findIndex((c) => c.id === id);
  if (idx === -1) return null;
  const updated = { ...list[idx], ...patch, id };
  const next = [...list];
  next[idx] = updated;
  await store.saveAll(next, `Update ${label}: ${id}`);
  return updated;
}

async function deleteItem(store, id, label) {
  const list = await store.getAllFresh();
  const next = list.filter((c) => c.id !== id);
  if (next.length === list.length) return false;
  await store.saveAll(next, `Delete ${label}: ${id}`);
  return true;
}

/* ---------------------------- Concours ---------------------------- */

const concoursStore = makeStore("data/concours.json", "concours");

// Keeps public/data/extraits/<id>.md and public/data/corriges/<id>.md (the
// human-browsable mirrors) in sync whenever an admin edit touches
// enonce_md/corrige_md, so the repo never silently drifts from the site.
async function syncConcoursMirrors(entry) {
  if (!githubWriteConfigured()) return;
  if (entry.enonce_md) {
    const text = entry.enonce_md.endsWith("\n") ? entry.enonce_md : entry.enonce_md + "\n";
    await writeGithubFile(`data/extraits/${entry.id}.md`, text, `Sync extrait: ${entry.id}`);
  }
  if (entry.corrige_md) {
    const text = entry.corrige_md.endsWith("\n") ? entry.corrige_md : entry.corrige_md + "\n";
    await writeGithubFile(`data/corriges/${entry.id}.md`, text, `Sync corrigé: ${entry.id}`);
  }
}

export async function getAllConcours() {
  return concoursStore.getAll();
}

// Fills `categorie` from `filiere` via the taxonomy reverse lookup whenever
// a caller supplies only `filiere` — the admin form now sends both (see
// CONCOURS_CONFIG's cascading select in app/admin/page.js), but bulk import
// rows and direct API writes historically only set `filiere`, and every
// public filter (app/concours/page.js) and coverage view depends on
// `categorie` being present to group correctly.
function withDerivedCategorie(entry) {
  if (entry.filiere && !entry.categorie) {
    const code = categoryOf(entry.filiere);
    if (code) return { ...entry, categorie: code };
  }
  return entry;
}

export async function addConcours(entry) {
  entry = withDerivedCategorie(entry);
  if (!entry.date_ajout) entry.date_ajout = new Date().toISOString().slice(0, 10);
  const created = await addItem(concoursStore, entry, (e) =>
    `${e.annee || "0000"}_${e.ville || "ville"}_${e.etablissement || "etab"}`.replace(/\s+/g, "_").slice(0, 120)
  , "concours");
  await syncConcoursMirrors(created);
  return created;
}

export async function updateConcours(id, patch) {
  if (patch.filiere && !patch.categorie) {
    const code = categoryOf(patch.filiere);
    if (code) patch = { ...patch, categorie: code };
  }
  const updated = await updateItem(concoursStore, id, patch, "concours");
  if (updated) await syncConcoursMirrors(updated);
  return updated;
}

export async function deleteConcours(id) {
  return deleteItem(concoursStore, id, "concours");
}

// Bulk create — one saveAll() call, so importing 50 concours is one commit
// instead of 50, unlike addConcours() looped from the client. entries are
// plain concours objects (same shape addConcours accepts); id/date_ajout/
// statut default the same way, with id collisions within the batch (or
// against the existing list) resolved by suffixing _2, _3, ...
export async function addConcoursBulk(entries) {
  const list = await concoursStore.getAllFresh();
  const today = new Date().toISOString().slice(0, 10);
  const taken = new Set(list.map((c) => c.id));
  const next = [...list];
  const created = [];
  for (const raw of entries) {
    const entry = withDerivedCategorie({ ...raw });
    if (!entry.date_ajout) entry.date_ajout = today;
    if (!entry.statut) entry.statut = "brouillon";
    if (!entry.id) {
      entry.id = `${entry.annee || "0000"}_${entry.ville || "ville"}_${entry.etablissement || "etab"}`
        .replace(/\s+/g, "_")
        .slice(0, 120);
    }
    let id = entry.id;
    let n = 2;
    while (taken.has(id)) id = `${entry.id}_${n++}`;
    entry.id = id;
    taken.add(id);
    next.push(entry);
    created.push(entry);
  }
  if (!created.length) return [];
  await concoursStore.saveAll(next, `Import groupé: ${created.length} concours`);
  // Best-effort mirror sync per entry (rare bulk op — fine to be sequential).
  for (const entry of created) await syncConcoursMirrors(entry);
  return created;
}

// Legacy safety net — `filiere` used to be pure free text, so this still
// catches any value that slipped in outside the fixed taxonomy below (a raw
// API write, an old import) and lets the admin merge it into a canonical
// sous-filière. New entries go through the cascading select in
// app/admin/page.js (CONCOURS_CONFIG) or get auto-derived (withDerivedCategorie
// above), so this should normally come back empty.
export async function getFiliereCounts() {
  const list = await concoursStore.getAll();
  const known = new Set(FILIERE_CATEGORIES.flatMap((c) => c.sousFilieres));
  const counts = {};
  for (const c of list) {
    const f = (c.filiere || "").trim();
    if (!f || known.has(f)) continue;
    counts[f] = (counts[f] || 0) + 1;
  }
  return counts;
}

// Coverage grid for the "Filières" admin tab: every catégorie × sous-filière
// pair from the fixed taxonomy, with its real concours count (0 included) —
// how Saad sees which of the new filières still need content as he expands
// past FCA/MRH.
export async function getTaxonomyCoverage() {
  const list = await concoursStore.getAll();
  const counts = {};
  for (const c of list) {
    const f = (c.filiere || "").trim();
    if (f) counts[f] = (counts[f] || 0) + 1;
  }
  return FILIERE_CATEGORIES.map((cat) => ({
    code: cat.code,
    label: cat.label,
    total: cat.sousFilieres.reduce((sum, s) => sum + (counts[s] || 0), 0),
    sousFilieres: cat.sousFilieres.map((s) => ({ label: s, count: counts[s] || 0 })),
  }));
}

export async function renameFiliere(oldName, newName) {
  const clean = String(newName || "").trim();
  if (!clean) throw new Error("Nouveau nom de filière requis.");
  const target = String(oldName || "").trim().toLowerCase();
  const list = await concoursStore.getAllFresh();
  let count = 0;
  const next = list.map((c) => {
    if ((c.filiere || "").trim().toLowerCase() === target) {
      count++;
      return { ...c, filiere: clean };
    }
    return c;
  });
  if (count) await concoursStore.saveAll(next, `Filières : renommer "${oldName}" → "${clean}" (${count})`);
  return count;
}

/* ------------------------- Corrigés (GitHub folder) -------------------------
 * public/data/corriges/<id>.md is written by syncConcoursMirrors whenever an
 * admin saves corrige_md, but corrigés can also land there directly (bulk
 * import, manual commit) without ever being copied into concours.json's
 * corrige_md field. These helpers let callers treat that folder as a source
 * of truth when corrige_md is empty, instead of treating "no corrige_md" as
 * "no corrigé".
 */

const CORRIGES_DIR = "data/corriges";

function localCorrigesDir() {
  return path.join(process.cwd(), "public", CORRIGES_DIR);
}

export async function getCorrigeIds() {
  if (githubWriteConfigured()) {
    const files = await listGithubDir(CORRIGES_DIR);
    return new Set(files.filter((f) => f.endsWith(".md")).map((f) => f.slice(0, -3)));
  }
  try {
    const files = fs.readdirSync(localCorrigesDir());
    return new Set(files.filter((f) => f.endsWith(".md")).map((f) => f.slice(0, -3)));
  } catch {
    return new Set();
  }
}

export async function getCorrigeFile(id) {
  if (githubWriteConfigured()) {
    try {
      return await readGithubFile(`${CORRIGES_DIR}/${id}.md`);
    } catch {
      return null;
    }
  }
  try {
    return fs.readFileSync(path.join(localCorrigesDir(), `${id}.md`), "utf-8");
  } catch {
    return null;
  }
}

/* ------------------------------ Cours ------------------------------ */

const coursStore = makeStore("data/cours.json", "cours");

export async function getAllCours() {
  return coursStore.getAll();
}

export async function addCours(entry) {
  return addItem(coursStore, entry, (e) => slugify(e.module) + "_cours", "cours");
}

export async function updateCours(id, patch) {
  return updateItem(coursStore, id, patch, "cours");
}

export async function deleteCours(id) {
  return deleteItem(coursStore, id, "cours");
}

/* ---------------------------- Évaluation ---------------------------- */

const quizStore = makeStore("data/quiz.json", "quiz");

// The admin editor drives each question's chapter directly (no separate
// "chapters" field), so chapters is always derived from the question set
// rather than trusted from the caller — it can't drift out of sync.
function withDerivedChapters(entry) {
  const chapters = [...new Set((entry.questions || []).map((q) => q.chapter).filter(Boolean))];
  return { ...entry, chapters };
}

export async function getAllQuiz() {
  return quizStore.getAll();
}

export async function addQuiz(entry) {
  return addItem(quizStore, withDerivedChapters(entry), (e) => slugify(e.module) + "_" + randomId().slice(0, 6), "quiz");
}

export async function updateQuiz(id, patch) {
  return updateItem(quizStore, id, withDerivedChapters(patch), "quiz");
}

export async function deleteQuiz(id) {
  return deleteItem(quizStore, id, "quiz");
}

/* ------------------------------- News -------------------------------
 * News is also just public/data/news.json now — the same file
 * scripts/fetch_almaster.py commits to on its ~6h schedule. Admin
 * add/delete commit straight to that file too (append / filter-out), so
 * there's a single history instead of a KV overlay shadowing the file.
 */

const newsStore = makeStore("data/news.json", "news");

export async function getAllNews() {
  const list = await newsStore.getAll();
  return [...list].sort((a, b) => (b.date_publication || "").localeCompare(a.date_publication || ""));
}

export async function addNews(entry) {
  if (!entry.id) entry.id = randomId();
  return addItem(newsStore, entry, (e) => e.id, "news");
}

export async function deleteNews(id) {
  return deleteItem(newsStore, id, "news");
}

/* ------------------------------- Blog ------------------------------- */

const blogStore = makeStore("data/blog.json", "blog");

export async function getAllBlog() {
  const list = await blogStore.getAll();
  return [...list].sort((a, b) => (b.publishedAt || "").localeCompare(a.publishedAt || ""));
}

export async function addBlog(entry) {
  if (!entry.publishedAt) entry.publishedAt = new Date().toISOString().slice(0, 10);
  return addItem(blogStore, entry, (e) => slugify(e.title) || randomId(), "blog");
}

export async function updateBlog(id, patch) {
  return updateItem(blogStore, id, patch, "blog");
}

export async function deleteBlog(id) {
  return deleteItem(blogStore, id, "blog");
}

/* ----------------------------- Site settings -----------------------------
 * A single JSON object (not a list) — social links, contact info, whatever
 * site-wide config the admin should be able to edit without a deploy.
 * Same GitHub-as-DB read/write pattern as everything else, just without
 * the list helpers (addItem/updateItem) since there's only ever one entry.
 */

const SETTINGS_PATH = "data/settings.json";
let settingsMemoryFallback = null;

// Always reads fresh (bypasses the 120s cache readGithubFile uses for the
// big list files) — settings.json is tiny and read infrequently, and a
// stale read here means an admin who just saved and reloaded the page
// sees their own change appear to have been silently discarded.
export async function getSettings() {
  if (githubWriteConfigured()) {
    return JSON.parse(await readGithubFileFresh(SETTINGS_PATH));
  }
  if (!settingsMemoryFallback) settingsMemoryFallback = readLocalJson(SETTINGS_PATH);
  return settingsMemoryFallback;
}

export async function updateSettings(patch) {
  const current = githubWriteConfigured()
    ? JSON.parse(await readGithubFileFresh(SETTINGS_PATH))
    : settingsMemoryFallback || readLocalJson(SETTINGS_PATH);
  const next = { ...current, ...patch };
  if (githubWriteConfigured()) {
    await writeGithubFile(SETTINGS_PATH, JSON.stringify(next, null, 2) + "\n", "Update settings");
  } else {
    settingsMemoryFallback = next;
  }
  return next;
}
