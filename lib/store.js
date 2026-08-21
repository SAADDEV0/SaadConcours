import { kv } from "@vercel/kv";
import fs from "fs";
import path from "path";

const KEY = "concours";

function readSeed() {
  const file = path.join(process.cwd(), "public", "data", "concours.json");
  return JSON.parse(fs.readFileSync(file, "utf-8"));
}

// Local dev without Vercel KV configured: fall back to the static seed file
// (read-only in that mode — admin writes will just no-op on the in-memory copy).
let memoryFallback = null;
function kvConfigured() {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

export async function getAllConcours() {
  if (!kvConfigured()) {
    if (!memoryFallback) memoryFallback = readSeed();
    return memoryFallback;
  }
  let list = await kv.get(KEY);
  if (!list) {
    list = readSeed();
    await kv.set(KEY, list);
  }
  return list;
}

async function saveAll(list) {
  if (!kvConfigured()) {
    memoryFallback = list;
    return;
  }
  await kv.set(KEY, list);
}

export async function addConcours(entry) {
  const list = await getAllConcours();
  if (!entry.id) {
    entry.id = `${entry.annee || "0000"}_${entry.ville || "ville"}_${entry.etablissement || "etab"}`
      .replace(/\s+/g, "_")
      .slice(0, 120);
  }
  const next = [...list, entry];
  await saveAll(next);
  return entry;
}

export async function updateConcours(id, patch) {
  const list = await getAllConcours();
  const idx = list.findIndex((c) => c.id === id);
  if (idx === -1) return null;
  const updated = { ...list[idx], ...patch, id };
  const next = [...list];
  next[idx] = updated;
  await saveAll(next);
  return updated;
}

export async function deleteConcours(id) {
  const list = await getAllConcours();
  const next = list.filter((c) => c.id !== id);
  await saveAll(next);
  return next.length !== list.length;
}
