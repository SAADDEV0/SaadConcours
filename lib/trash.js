// Corbeille de l'admin : chaque élément supprimé (concours, cours, QCM,
// article, annonce) y est gardé tel qu'il était, pour pouvoir le restaurer
// d'un clic. Sans elle, « supprimer » était définitif — la seule façon de
// récupérer un concours effacé par erreur était de fouiller l'historique Git.
//
// Même forme KV-ou-mémoire que lib/auditLog.js : liste plafonnée, la plus
// récente en tête.

import { kvConfigured, getKv } from "./redis";

const KEY = "admin:trash";
const MAX_ENTRIES = 60;
// Un élément plus gros (concours avec un très long corrigé) reste restaurable
// depuis l'historique Git ; on ne le garde pas en KV pour ne pas dépasser la
// taille maximale d'une valeur.
const MAX_ITEM_BYTES = 400_000;

const MEM = (globalThis.__scTrash ||= { entries: [] });

export const TRASH_COLLECTIONS = ["concours", "cours", "quiz", "blog", "news", "boutique"];

export async function pushTrash(entries) {
  const rows = [];
  for (const e of entries || []) {
    if (!TRASH_COLLECTIONS.includes(e?.collection) || !e.item?.id) continue;
    const json = JSON.stringify({
      key: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
      at: new Date().toISOString(),
      collection: e.collection,
      item: e.item,
    });
    if (json.length <= MAX_ITEM_BYTES) rows.push(json);
  }
  if (!rows.length) return;
  try {
    if (kvConfigured()) {
      const kv = await getKv();
      await kv.lpush(KEY, ...rows);
      await kv.ltrim(KEY, 0, MAX_ENTRIES - 1);
      return;
    }
    MEM.entries = [...rows, ...MEM.entries].slice(0, MAX_ENTRIES);
  } catch (err) {
    console.error("trash write failed", err);
  }
}

export async function listTrash() {
  try {
    const rows = kvConfigured() ? await (await getKv()).lrange(KEY, 0, MAX_ENTRIES - 1) : MEM.entries;
    return rows.map((r) => (typeof r === "string" ? JSON.parse(r) : r));
  } catch (err) {
    console.error("trash read failed", err);
    return [];
  }
}

// Retire des entrées (après restauration, ou vidage). `keys` vide = tout.
export async function removeTrash(keys) {
  const all = await listTrash();
  const keep = keys?.length ? all.filter((e) => !keys.includes(e.key)) : [];
  const rows = keep.map((e) => JSON.stringify(e));
  if (kvConfigured()) {
    const kv = await getKv();
    await kv.del(KEY);
    if (rows.length) await kv.rpush(KEY, ...rows);
    return;
  }
  MEM.entries = rows;
}
