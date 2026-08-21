import crypto from "crypto";
import fs from "fs";
import path from "path";
import { readGithubFile, writeGithubFile, githubWriteConfigured } from "./github";

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
  const list = await store.getAll();
  if (!entry.id) entry.id = defaultId(entry);
  const next = [...list, entry];
  await store.saveAll(next, `Add ${label}: ${entry.id}`);
  return entry;
}

async function updateItem(store, id, patch, label) {
  const list = await store.getAll();
  const idx = list.findIndex((c) => c.id === id);
  if (idx === -1) return null;
  const updated = { ...list[idx], ...patch, id };
  const next = [...list];
  next[idx] = updated;
  await store.saveAll(next, `Update ${label}: ${id}`);
  return updated;
}

async function deleteItem(store, id, label) {
  const list = await store.getAll();
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

export async function addConcours(entry) {
  const created = await addItem(concoursStore, entry, (e) =>
    `${e.annee || "0000"}_${e.ville || "ville"}_${e.etablissement || "etab"}`.replace(/\s+/g, "_").slice(0, 120)
  , "concours");
  await syncConcoursMirrors(created);
  return created;
}

export async function updateConcours(id, patch) {
  const updated = await updateItem(concoursStore, id, patch, "concours");
  if (updated) await syncConcoursMirrors(updated);
  return updated;
}

export async function deleteConcours(id) {
  return deleteItem(concoursStore, id, "concours");
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
