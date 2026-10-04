// Styles enregistrés du Studio social (thème, mise en page, ton, hashtags,
// fin de texte), partagés entre tous les appareils de l'admin comme le
// planning. Un seul petit document JSON en KV.

import { kvConfigured, getKv } from "./redis";

const KEY = "admin:social:styles";
const MAX_STYLES = 30;
const MEM = (globalThis.__scSocialStyles ||= { styles: [] });

function clean(s) {
  const str = (v, n) => (typeof v === "string" ? v.slice(0, n) : "");
  const data = s?.data && typeof s.data === "object" && !Array.isArray(s.data) ? s.data : {};
  const json = JSON.stringify(data);
  return {
    id: str(s?.id, 40) || `st_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
    name: str(s?.name, 60).trim() || "Sans nom",
    data: json.length <= 3000 ? JSON.parse(json) : {},
    updatedAt: new Date().toISOString(),
  };
}

export async function listStyles() {
  if (!kvConfigured()) return MEM.styles;
  const kv = await getKv();
  const raw = await kv.get(KEY);
  if (!raw) return [];
  return Array.isArray(raw) ? raw : JSON.parse(raw);
}

async function writeAll(styles) {
  const trimmed = styles.slice(0, MAX_STYLES);
  if (!kvConfigured()) {
    MEM.styles = trimmed;
    return;
  }
  const kv = await getKv();
  await kv.set(KEY, JSON.stringify(trimmed));
}

// Même nom = mise à jour du style existant.
export async function saveStyle(style) {
  const all = await listStyles();
  const next = clean(style);
  const i = all.findIndex((s) => s.id === next.id || s.name.toLowerCase() === next.name.toLowerCase());
  if (i !== -1) next.id = all[i].id;
  const list = i === -1 ? [next, ...all] : all.map((s, j) => (j === i ? next : s));
  await writeAll(list);
  return next;
}

export async function removeStyle(id) {
  const all = await listStyles();
  const list = all.filter((s) => s.id !== id);
  await writeAll(list);
  return list.length !== all.length;
}
