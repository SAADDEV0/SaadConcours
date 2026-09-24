// Petits utilitaires d'affichage et de texte partagés par toute la console.

export function normalize(s) {
  return String(s ?? "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

// Recherche tolérante : tous les mots de la requête doivent apparaître, sans
// tenir compte des accents ni de la casse.
export function matchQuery(haystack, query) {
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  if (!terms.length) return true;
  const h = normalize(haystack);
  return terms.every((t) => h.includes(t));
}

export function slugify(s, sep = "-") {
  return normalize(s)
    .replace(/[^a-z0-9]+/g, sep)
    .replace(new RegExp(`^\\${sep}+|\\${sep}+$`, "g"), "")
    .slice(0, 80);
}

export function randomId(n = 16) {
  const bytes = crypto.getRandomValues(new Uint8Array(Math.ceil(n / 2)));
  return [...bytes].map((b) => b.toString(16).padStart(2, "0")).join("").slice(0, n);
}

export function todayIso() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

const nf = typeof Intl !== "undefined" ? new Intl.NumberFormat("fr-FR") : null;
export function num(n) {
  if (n === null || n === undefined || Number.isNaN(n)) return "—";
  return nf ? nf.format(n) : String(n);
}

export function compact(n) {
  if (n === null || n === undefined) return "—";
  if (n < 1000) return String(n);
  if (n < 1e6) return `${(n / 1000).toFixed(n < 10000 ? 1 : 0).replace(".", ",")} k`;
  return `${(n / 1e6).toFixed(1).replace(".", ",")} M`;
}

export function dateFr(value, opts = { day: "numeric", month: "short", year: "numeric" }) {
  if (!value) return "—";
  const d = typeof value === "number" ? new Date(value) : /^\d{4}-\d{2}-\d{2}$/.test(value) ? new Date(value + "T12:00:00") : new Date(value);
  if (Number.isNaN(d.getTime())) return String(value);
  return d.toLocaleDateString("fr-FR", opts);
}

export function dateTimeFr(value) {
  if (!value) return "—";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return String(value);
  return d.toLocaleString("fr-FR", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
}

export function timeAgo(value) {
  if (!value) return "";
  const t = typeof value === "number" ? value : new Date(value).getTime();
  const s = Math.round((Date.now() - t) / 1000);
  if (s < 45) return "à l'instant";
  const m = Math.round(s / 60);
  if (m < 60) return `il y a ${m} min`;
  const h = Math.round(m / 60);
  if (h < 24) return `il y a ${h} h`;
  const d = Math.round(h / 24);
  if (d < 30) return `il y a ${d} j`;
  const mo = Math.round(d / 30);
  if (mo < 12) return `il y a ${mo} mois`;
  return `il y a ${Math.round(mo / 12)} an${mo >= 24 ? "s" : ""}`;
}

// Jours restants avant une date AAAA-MM-JJ (négatif si passée).
export function daysUntil(iso) {
  if (!iso || !/^\d{4}-\d{2}-\d{2}/.test(iso)) return null;
  const [y, m, d] = iso.slice(0, 10).split("-").map(Number);
  const target = Date.UTC(y, m - 1, d);
  const now = new Date();
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((target - today) / 86400000);
}

export function plural(n, one, many) {
  return `${num(n)} ${n > 1 ? many || one + "s" : one}`;
}

export function truncate(s, n) {
  const str = String(s || "");
  return str.length > n ? str.slice(0, n - 1).trimEnd() + "…" : str;
}

export function wordCount(md) {
  return String(md || "").split(/\s+/).filter(Boolean).length;
}

export function bytes(n) {
  if (!n && n !== 0) return "—";
  if (n < 1024) return `${n} o`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(0)} Ko`;
  return `${(n / 1024 / 1024).toFixed(1).replace(".", ",")} Mo`;
}

export function pctDelta(curr, prev) {
  if (!prev) return curr ? 100 : 0;
  return Math.round(((curr - prev) / prev) * 1000) / 10;
}
