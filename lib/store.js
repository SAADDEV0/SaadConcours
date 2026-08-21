import { kv } from "@vercel/kv";
import crypto from "crypto";
import fs from "fs";
import path from "path";

function kvConfigured() {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

function readJson(relPath) {
  const file = path.join(process.cwd(), "public", relPath);
  return JSON.parse(fs.readFileSync(file, "utf-8"));
}

function readText(relPath) {
  const file = path.join(process.cwd(), "public", relPath);
  return fs.readFileSync(file, "utf-8");
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

// Generic KV-backed collection: seeded once from a static file, then KV is
// the source of truth. Falls back to an in-memory copy in local dev without
// Vercel KV configured (read/write works within the same server process).
function makeStore(key, seedFn) {
  let memoryFallback = null;
  return {
    async getAll() {
      if (!kvConfigured()) {
        if (!memoryFallback) memoryFallback = seedFn();
        return memoryFallback;
      }
      let list = await kv.get(key);
      if (!list) {
        list = seedFn();
        await kv.set(key, list);
      }
      return list;
    },
    async saveAll(list) {
      if (!kvConfigured()) {
        memoryFallback = list;
        return;
      }
      await kv.set(key, list);
    },
  };
}

async function addItem(store, entry, defaultId) {
  const list = await store.getAll();
  if (!entry.id) entry.id = defaultId(entry);
  const next = [...list, entry];
  await store.saveAll(next);
  return entry;
}

async function updateItem(store, id, patch) {
  const list = await store.getAll();
  const idx = list.findIndex((c) => c.id === id);
  if (idx === -1) return null;
  const updated = { ...list[idx], ...patch, id };
  const next = [...list];
  next[idx] = updated;
  await store.saveAll(next);
  return updated;
}

async function deleteItem(store, id) {
  const list = await store.getAll();
  const next = list.filter((c) => c.id !== id);
  await store.saveAll(next);
  return next.length !== list.length;
}

/* ---------------------------- Concours ---------------------------- */

const concoursStore = makeStore("concours", () => readJson("data/concours.json"));

export async function getAllConcours() {
  return concoursStore.getAll();
}

export async function addConcours(entry) {
  return addItem(concoursStore, entry, (e) =>
    `${e.annee || "0000"}_${e.ville || "ville"}_${e.etablissement || "etab"}`.replace(/\s+/g, "_").slice(0, 120)
  );
}

export async function updateConcours(id, patch) {
  return updateItem(concoursStore, id, patch);
}

export async function deleteConcours(id) {
  return deleteItem(concoursStore, id);
}

/* ------------------------------ Cours ------------------------------ */

function seedCours() {
  const registry = readJson("data/cours/registry.json");
  return registry
    .filter((m) => m.file)
    .map((m) => ({
      id: m.id,
      module: m.module,
      title: m.title,
      description: m.description || "",
      content: readText(m.file),
      available: true,
    }));
}

const coursStore = makeStore("cours", seedCours);

export async function getAllCours() {
  return coursStore.getAll();
}

export async function addCours(entry) {
  return addItem(coursStore, entry, (e) => slugify(e.module) + "_cours");
}

export async function updateCours(id, patch) {
  return updateItem(coursStore, id, patch);
}

export async function deleteCours(id) {
  return deleteItem(coursStore, id);
}

/* ---------------------------- Évaluation ---------------------------- */

function seedQuiz() {
  const registry = readJson("data/quiz/registry.json");
  return registry
    .filter((m) => m.file)
    .map((m) => {
      const data = readJson(m.file);
      return {
        id: m.id,
        module: m.module,
        title: m.title,
        description: data.description || "",
        chapters: data.chapters || [],
        questions: data.questions || [],
        available: true,
      };
    });
}

const quizStore = makeStore("quiz", seedQuiz);

export async function getAllQuiz() {
  return quizStore.getAll();
}

export async function addQuiz(entry) {
  return addItem(quizStore, entry, (e) => slugify(e.module) + "_" + randomId().slice(0, 6));
}

export async function updateQuiz(id, patch) {
  return updateItem(quizStore, id, patch);
}

export async function deleteQuiz(id) {
  return deleteItem(quizStore, id);
}

/* ------------------------------- News -------------------------------
 * News stays driven by scripts/fetch_almaster.py, which commits fresh
 * scraped entries straight into public/data/news.json on a schedule. So
 * unlike the other resources, KV here only holds an admin overlay
 * (manually-added entries + a deny-list of deleted ids) on top of that
 * file, read fresh on every request — the automatic updates keep working,
 * and admin add/delete take effect without waiting for a redeploy.
 */

const NEWS_MANUAL_KEY = "news_manual";
const NEWS_DELETED_KEY = "news_deleted";
let newsManualFallback = null;
let newsDeletedFallback = null;

async function getNewsManual() {
  if (!kvConfigured()) return newsManualFallback || (newsManualFallback = []);
  return (await kv.get(NEWS_MANUAL_KEY)) || [];
}
async function saveNewsManual(list) {
  if (!kvConfigured()) {
    newsManualFallback = list;
    return;
  }
  await kv.set(NEWS_MANUAL_KEY, list);
}
async function getNewsDeleted() {
  if (!kvConfigured()) return newsDeletedFallback || (newsDeletedFallback = []);
  return (await kv.get(NEWS_DELETED_KEY)) || [];
}
async function saveNewsDeleted(list) {
  if (!kvConfigured()) {
    newsDeletedFallback = list;
    return;
  }
  await kv.set(NEWS_DELETED_KEY, list);
}

export async function getAllNews() {
  const staticList = readJson("data/news.json");
  const manual = await getNewsManual();
  const deleted = new Set(await getNewsDeleted());
  const byId = new Map();
  for (const item of [...staticList, ...manual]) byId.set(item.id, item);
  for (const id of deleted) byId.delete(id);
  return Array.from(byId.values()).sort((a, b) =>
    (b.date_publication || "").localeCompare(a.date_publication || "")
  );
}

export async function addNews(entry) {
  if (!entry.id) entry.id = randomId();
  const manual = await getNewsManual();
  await saveNewsManual([...manual, entry]);
  return entry;
}

export async function deleteNews(id) {
  const deleted = await getNewsDeleted();
  if (!deleted.includes(id)) await saveNewsDeleted([...deleted, id]);
  const manual = await getNewsManual();
  const filtered = manual.filter((n) => n.id !== id);
  if (filtered.length !== manual.length) await saveNewsManual(filtered);
  return true;
}
