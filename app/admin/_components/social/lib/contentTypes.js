/* ------------------------------ Content types ------------------------------
 * Un seul générateur, quatre sources de contenu. Chaque type sait comment se
 * lister (recherche/tri), se lier (URL publique) et se raconter (texte +
 * image) — le reste des composants reste générique.
 * ---------------------------------------------------------------------- */

export const SITE_URL = "https://www.saadconcours.space";

export const CONTENT_TYPES = [
  {
    key: "concours",
    tabIcon: "📚",
    tabLabel: "Concours",
    endpoint: "/api/concours",
    // getAllConcours() renvoie la liste dans l'ordre du fichier (ajout en
    // fin de tableau) donc il faut inverser pour avoir le plus récent en
    // premier.
    reverseForRecent: true,
    filterAvailable: (list) => list,
    searchText: (i) => `${i.etablissement || ""} ${i.ville || ""} ${i.filiere || ""} ${i.annee || ""}`,
    listTitle: (i) => i.etablissement || i.id,
    listMeta: (i) => [i.ville, i.filiere, i.annee].filter(Boolean).join(" · "),
    listRight: () => null,
  },
  {
    key: "news",
    tabIcon: "🆕",
    tabLabel: "Concours ouverts",
    endpoint: "/api/news",
    // getAllNews() trie déjà par date_publication décroissante — inverser
    // ici remettrait les plus anciens en premier (c'était un vrai bug côté
    // v1 : le tri était annulé par un .reverse() en trop).
    reverseForRecent: false,
    filterAvailable: (list) => list.filter((n) => !n.cloture),
    searchText: (i) => `${i.titre || ""} ${i.etablissement || ""} ${i.ville || ""} ${i.filiere || ""}`,
    listTitle: (i) => i.titre,
    listMeta: (i) => [i.etablissement, i.ville].filter(Boolean).join(" · "),
    listRight: (i) => i.date_limite || "—",
  },
  {
    key: "blog",
    tabIcon: "📰",
    tabLabel: "Blog",
    endpoint: "/api/blog",
    // getAllBlog() trie déjà par publishedAt décroissant — même raison que
    // "news" ci-dessus, pas de .reverse() ici.
    reverseForRecent: false,
    // Seuls les articles publiés (available) ont une page publique — pas
    // question de générer un post qui pointe vers un brouillon en 404.
    filterAvailable: (list) => list.filter((b) => b.available),
    searchText: (i) => `${i.title || ""} ${i.excerpt || ""}`,
    listTitle: (i) => i.title,
    listMeta: (i) => truncate(i.excerpt, 70),
    listRight: (i) => i.publishedAt || "—",
  },
  {
    key: "evaluation",
    tabIcon: "📝",
    tabLabel: "Évaluation",
    endpoint: "/api/quiz",
    // getAllQuiz() renvoie l'ordre brut du fichier, comme concours.
    reverseForRecent: true,
    // Même logique que blog : une évaluation non "available" n'est pas
    // ouvrable sur /evaluation/[id].
    filterAvailable: (list) => list.filter((q) => q.available),
    searchText: (i) => `${i.title || ""} ${i.module || ""} ${i.description || ""}`,
    listTitle: (i) => i.title || i.module,
    listMeta: (i) => `${i.module || ""} · ${(i.questions || []).length} questions`,
    listRight: () => null,
  },
];

export function typeMetaFor(key) {
  return CONTENT_TYPES.find((t) => t.key === key);
}

export function urlFor(kind, item) {
  if (kind === "concours") return `${SITE_URL}/concours/${item.id}`;
  if (kind === "news") return `${SITE_URL}/news/${item.id}`;
  if (kind === "blog") return `${SITE_URL}/blog/${item.id}`;
  return `${SITE_URL}/evaluation/${item.id}`;
}

export function hasCorrige(item) {
  // corrige_from_github est calculé côté API (/api/concours) quand un
  // corrigé existe dans data/corriges/ sans être recopié dans le champ
  // corrige_md — l'ignorer faisait dire "sujet sans corrigé" à tort.
  return Boolean(item.corrige_md || item.corrige_from_github);
}

/* --------------------------------- Utils --------------------------------- */

export function daysUntil(dateStr) {
  if (!dateStr) return null;
  return Math.round((new Date(dateStr + "T00:00:00") - new Date(new Date().toDateString())) / 86400000);
}

export function joinLoc(a, b) {
  return [a, b].filter(Boolean).join(" — ");
}

export function formatDateFr(dateStr) {
  if (!dateStr) return null;
  try {
    return new Date(dateStr + "T00:00:00").toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" });
  } catch {
    return dateStr;
  }
}

export function truncate(s, n) {
  const str = String(s || "");
  return str.length > n ? str.slice(0, n - 1).trimEnd() + "…" : str;
}

export function difficultyStars(d) {
  const m = String(d || "").match(/(\d+)\s*\/\s*(\d+)/);
  if (!m) return null;
  const total = parseInt(m[2], 10) || 5;
  const n = Math.min(parseInt(m[1], 10) || 0, total);
  return "★".repeat(n) + "☆".repeat(Math.max(0, total - n));
}

export function estimateReadingTime(markdown) {
  const words = String(markdown || "")
    .replace(/[#*_>`|-]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
