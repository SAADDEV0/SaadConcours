// Cours de l'ENCG (École nationale de commerce et de gestion), du S1 au S10 :
// cinq années de deux semestres. Partagé par les pages publiques (app/encg),
// la console (app/admin/_lib/collections.js) et le sitemap.
//
// Les matières reprennent les catégories des cours FSJES (lib/coursTaxonomy.js) :
// mêmes teintes, mêmes filtres. Les options de spécialisation des dernières
// années changent d'une ENCG à l'autre : le champ `option` est un texte libre
// (« Audit et contrôle de gestion »), proposé dans la console à partir des
// valeurs déjà saisies, plutôt qu'une liste fermée qui serait fausse pour
// une partie des écoles.
export { COURS_CATEGORIES as ENCG_CATEGORIES, coursCategoryInfo as encgCategoryInfo, coursCategoryLabel as encgCategoryLabel } from "./coursTaxonomy";

export const ENCG_SEMESTRES = Array.from({ length: 10 }, (_, i) => ({
  code: `S${i + 1}`,
  label: `Semestre ${i + 1}`,
  annee: Math.floor(i / 2) + 1,
}));

export const ENCG_ANNEES = [1, 2, 3, 4, 5].map((n) => ({
  code: n,
  label: n === 1 ? "1ʳᵉ année" : `${n}ᵉ année`,
  semestres: ENCG_SEMESTRES.filter((s) => s.annee === n).map((s) => s.code),
}));

export function encgSemestreInfo(code) {
  return ENCG_SEMESTRES.find((s) => s.code === code) || null;
}

export function encgSemestreLabel(code) {
  return encgSemestreInfo(code)?.label || "";
}

export function encgAnneeLabel(code) {
  const s = encgSemestreInfo(code);
  return s ? ENCG_ANNEES[s.annee - 1].label : "";
}

// S1 → S10, puis les modules sans semestre ; ordre alphabétique dans un
// semestre (même règle que coursSortComparator pour la Licence).
const ORDRE = ENCG_SEMESTRES.map((s) => s.code);

export function encgSortComparator(a, b) {
  const ai = a.semestre ? ORDRE.indexOf(a.semestre) : ORDRE.length;
  const bi = b.semestre ? ORDRE.indexOf(b.semestre) : ORDRE.length;
  if (ai !== bi) return ai - bi;
  return (a.module || "").localeCompare(b.module || "", "fr");
}
