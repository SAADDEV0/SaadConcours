// Transforme les identifiants bruts des statistiques (chemins d'URL,
// « concours:<id> ») en titres lisibles, à partir du contenu déjà chargé
// dans le navigateur — le Worker n'a plus à charger 3 Mo pour ça.

import { bacPathLabel } from "@/lib/bacProgramme";

const STATIC = {
  "/": "Accueil",
  "/concours": "Concours (liste)",
  "/cours": "Cours Licence (liste)",
  "/evaluation": "Évaluations (liste)",
  "/news": "Concours ouverts",
  "/blog": "Blog (liste)",
  "/faq": "FAQ",
  "/bac": "Cours Bac (accueil)",
  "/a-propos": "À propos",
  "/contact": "Contact",
  "/confidentialite": "Confidentialité",
};

function find(list, id) {
  return Array.isArray(list) ? list.find((x) => x.id === id) : null;
}

export function concoursLabel(c) {
  return c ? `${c.etablissement} — ${c.ville} (${c.annee})` : null;
}

export function labelForPath(path, content = {}) {
  if (!path) return "";
  if (STATIC[path]) return STATIC[path];
  const [, section, id, sub] = String(path).split("/");
  const decoded = id ? decodeURIComponent(id) : "";
  if (section === "concours") return concoursLabel(find(content.concours, decoded)) || path;
  if (section === "cours") {
    const c = find(content.cours, decoded);
    return c ? `${c.module}${sub ? ` › ${decodeURIComponent(sub).replace(/-/g, " ")}` : ""}` : path;
  }
  if (section === "evaluation") return find(content.quiz, decoded)?.title || path;
  if (section === "blog") return find(content.blog, decoded)?.title || path;
  if (section === "bac") return bacPathLabel(path) || path;
  return path;
}

// Lien d'édition dans la console pour un chemin public, quand il existe.
export function adminHrefForPath(path) {
  const [, section, id] = String(path).split("/");
  if (!id) return null;
  const map = { concours: "/admin/concours", cours: "/admin/cours", evaluation: "/admin/evaluations", blog: "/admin/blog" };
  return map[section] ? `${map[section]}/editer?id=${id}` : null;
}

// Fiche détaillée d'une ligne du journal : titre (le master pour un concours),
// pastilles (établissement, ville, année…) et liens. `kind` donne l'icône.
function describeConcours(c, id) {
  if (!c) return { kind: "concours", title: id, tags: [] };
  return {
    kind: "concours",
    title: c.filiere || c.master_reel || c.etablissement,
    tags: [c.etablissement, c.ville, /^\d{4}$/.test(c.annee) ? c.annee : "année non précisée"].filter(Boolean),
  };
}

export function describePath(path, content = {}) {
  const [, section, id, sub] = String(path || "").split("/");
  const decoded = id ? decodeURIComponent(id) : "";
  const base = { href: path, edit: adminHrefForPath(path) };
  if (section === "concours" && decoded) return { ...base, ...describeConcours(find(content.concours, decoded), decoded) };
  if (section === "cours" && decoded) {
    const c = find(content.cours, decoded);
    return { ...base, kind: "cours", title: c?.module || decoded, tags: ["Cours", c?.semestre, sub && decodeURIComponent(sub).replace(/-/g, " ")].filter(Boolean) };
  }
  if (section === "evaluation" && decoded) return { ...base, kind: "quiz", title: find(content.quiz, decoded)?.title || decoded, tags: ["Évaluation"] };
  if (section === "blog" && decoded) return { ...base, kind: "blog", title: find(content.blog, decoded)?.title || decoded, tags: ["Article"] };
  if (section === "bac") return { ...base, kind: "bac", title: labelForPath(path, content), tags: ["Bac"] };
  return { ...base, kind: "page", title: labelForPath(path, content), tags: [] };
}

export function describePdf(kind, id, content = {}) {
  if (kind === "concours") return { href: `/concours/${id}`, edit: adminHrefForPath(`/concours/${id}`), ...describeConcours(find(content.concours, id), id) };
  if (kind === "cours") {
    const c = find(content.cours, id);
    return { href: `/cours/${id}`, edit: adminHrefForPath(`/cours/${id}`), kind: "cours", title: c?.module || id, tags: ["Cours", c?.semestre].filter(Boolean) };
  }
  if (kind === "evaluation") return { href: `/evaluation/${id}`, edit: adminHrefForPath(`/evaluation/${id}`), kind: "quiz", title: find(content.quiz, id)?.title || id, tags: ["Évaluation"] };
  return { kind: "page", title: `${kind}:${id}`, tags: [] };
}

export function labelForPdfItem(member, content = {}) {
  const [kind, ...rest] = String(member).split(":");
  const id = rest.join(":");
  if (kind === "concours") return concoursLabel(find(content.concours, id)) || id;
  if (kind === "cours") return find(content.cours, id)?.module || id;
  if (kind === "evaluation") return find(content.quiz, id)?.title || id;
  return member;
}
