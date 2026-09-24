// Planning et historique des publications sur les réseaux sociaux.
//
// L'ancien studio gardait cet historique dans le localStorage du navigateur :
// publier depuis le téléphone ne se voyait pas sur l'ordinateur, et vider le
// cache effaçait tout. Il vit maintenant en KV, partagé par tous les appareils
// de l'admin. Un seul document JSON (quelques centaines d'entrées au plus) :
// lu et réécrit en entier, ce qui reste trivial à cette taille.

import { kvConfigured, getKv } from "./redis";

const KEY = "admin:social:plan";
const MAX_ENTRIES = 400;
const MEM = (globalThis.__scSocialPlan ||= { entries: [] });

export const SOCIAL_STATUSES = ["planned", "published"];

async function readAll() {
  if (!kvConfigured()) return MEM.entries;
  const kv = await getKv();
  const raw = await kv.get(KEY);
  if (!raw) return [];
  return Array.isArray(raw) ? raw : JSON.parse(raw);
}

async function writeAll(entries) {
  const trimmed = entries.slice(0, MAX_ENTRIES);
  if (!kvConfigured()) {
    MEM.entries = trimmed;
    return;
  }
  const kv = await getKv();
  await kv.set(KEY, JSON.stringify(trimmed));
}

function clean(e) {
  const str = (v, n) => (typeof v === "string" ? v.slice(0, n) : "");
  return {
    id: str(e.id, 40) || `s_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
    kind: str(e.kind, 20),
    itemId: str(e.itemId, 160),
    title: str(e.title, 200),
    platform: str(e.platform, 20),
    status: SOCIAL_STATUSES.includes(e.status) ? e.status : "published",
    date: str(e.date, 30) || new Date().toISOString(),
    caption: str(e.caption, 3000),
    url: str(e.url, 400),
    note: str(e.note, 300),
  };
}

export async function listSocial() {
  const all = await readAll();
  return [...all].sort((a, b) => String(b.date).localeCompare(String(a.date)));
}

export async function upsertSocial(entry) {
  const all = await readAll();
  const next = clean(entry);
  const i = all.findIndex((e) => e.id === next.id);
  const list = i === -1 ? [next, ...all] : all.map((e, j) => (j === i ? { ...e, ...next } : e));
  await writeAll(list);
  return next;
}

export async function removeSocial(id) {
  const all = await readAll();
  const list = all.filter((e) => e.id !== id);
  await writeAll(list);
  return list.length !== all.length;
}
