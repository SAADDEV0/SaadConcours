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

// failed : publication automatique refusée par Meta (le motif est dans `result`).
export const SOCIAL_STATUSES = ["planned", "published", "failed"];

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
    // Publication automatique (GitHub Actions → API Meta) : thème du visuel
    // et réponse de Meta (identifiant du post, ou erreur).
    auto: e.auto === true,
    theme: str(e.theme, 20),
    result: str(e.result, 300),
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

// Plusieurs entrées en une lecture et une écriture : un lot de 60 concours
// sur deux réseaux ferait sinon 240 allers-retours vers KV dans une seule
// requête, bien au-delà des 50 sous-requêtes qu'un Worker gratuit autorise.
export async function upsertManySocial(entries) {
  const all = await readAll();
  const next = entries.map(clean);
  const ids = new Set(next.map((e) => e.id));
  await writeAll([...next, ...all.filter((e) => !ids.has(e.id))]);
  return next;
}

export async function removeSocial(id) {
  const all = await readAll();
  const list = all.filter((e) => e.id !== id);
  await writeAll(list);
  return list.length !== all.length;
}
