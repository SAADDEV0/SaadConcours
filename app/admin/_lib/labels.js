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

export function labelForPdfItem(member, content = {}) {
  const [kind, ...rest] = String(member).split(":");
  const id = rest.join(":");
  if (kind === "concours") return concoursLabel(find(content.concours, id)) || id;
  if (kind === "cours") return find(content.cours, id)?.module || id;
  if (kind === "evaluation") return find(content.quiz, id)?.title || id;
  return member;
}
