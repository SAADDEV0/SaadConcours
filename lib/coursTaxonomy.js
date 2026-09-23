// Cours category taxonomy — shared between the server-rendered index
// (app/cours/page.js), the client-side filter (app/cours/CoursExplorer.js)
// and the admin editor (app/admin/_lib/resourceConfigs.js). Mirrors
// lib/blogTaxonomy.js's shape/usage.

// hue : teinte de la matière dans l'espace cours (même rôle que --mat-h
// dans lib/bacProgramme.js).
export const COURS_CATEGORIES = [
  { code: "compta", label: "Comptabilité & Audit", emoji: "📗", hue: 152 },
  { code: "finance", label: "Finance", emoji: "💰", hue: 42 },
  { code: "economie", label: "Économie", emoji: "📈", hue: 210 },
  { code: "quant", label: "Statistiques & Économétrie", emoji: "🔢", hue: 265 },
  { code: "management", label: "Management & RH", emoji: "🧭", hue: 22 },
  { code: "marketing", label: "Marketing", emoji: "📣", hue: 330 },
  { code: "droit", label: "Fiscalité & Droit", emoji: "⚖️", hue: 0 },
  // Modules transversaux du tronc commun (langues, soft skills / MTU) : pas
  // de programme national unifié, chaque faculté fixe le sien — d'où une
  // catégorie à part plutôt qu'un rattachement forcé à "management".
  { code: "methodo", label: "Méthodologie & Langues", emoji: "🗣️", hue: 185 },
];

export function coursCategoryInfo(code) {
  return COURS_CATEGORIES.find((c) => c.code === code) || null;
}

export function coursCategoryLabel(code) {
  return coursCategoryInfo(code)?.label || "";
}

export function coursCategoryOptions() {
  return COURS_CATEGORIES.map((c) => ({ value: c.code, label: `${c.emoji} ${c.label}` }));
}

// Licence Fondamentale Sciences Économiques & Gestion (système marocain) —
// tronc commun S1-S4 séparé en 2 parcours d'entrée, puis spécialisation par
// filière en S5-S6. Un cours "commun" (ex: Micro/Macro/Stats) apparaît dans
// les deux parcours au filtrage — voir applyFilters() dans CoursExplorer.js.
export const LICENCE_PARCOURS = [
  { code: "gestion", label: "Gestion" },
  { code: "economie", label: "Économie" },
];

// Chaque semestre est sa propre ligne (pas de regroupement "S1 - S2" en une
// seule option) — le filtre public liste les 6 semestres individuellement.
export const LICENCE_SEMESTRES = [
  { code: "S1", label: "Semestre 1" },
  { code: "S2", label: "Semestre 2" },
  { code: "S3", label: "Semestre 3" },
  { code: "S4", label: "Semestre 4" },
  { code: "S5", label: "Semestre 5", specialisation: true },
  { code: "S6", label: "Semestre 6", specialisation: true },
];

export const LICENCE_FILIERES = [
  { code: "mrh", label: "Management des Ressources Humaines", parcours: "gestion" },
  { code: "gff", label: "Gestion Financière et Fiscale", parcours: "gestion" },
  { code: "mac", label: "Marketing & Actions Commerciales", parcours: "gestion" },
  { code: "tba", label: "Techniques de Banque et Assurance", parcours: "gestion" },
  { code: "eco_appliquee", label: "Économétrie Appliquée", parcours: "economie" },
  { code: "eil", label: "Économie Internationale et Logistique", parcours: "economie" },
];

export function licenceParcoursLabel(code) {
  return LICENCE_PARCOURS.find((p) => p.code === code)?.label || "";
}

export function licenceSemestreInfo(code) {
  return LICENCE_SEMESTRES.find((s) => s.code === code) || null;
}

export function licenceSemestreLabel(code) {
  return licenceSemestreInfo(code)?.label || "";
}

export function licenceFilieresFor(parcoursCode) {
  return LICENCE_FILIERES.filter((f) => f.parcours === parcoursCode);
}

export function licenceFiliereLabel(code) {
  return LICENCE_FILIERES.find((f) => f.code === code)?.label || "";
}

export function licenceParcoursOptions() {
  return [{ value: "", label: "— Commun aux deux parcours —" }, ...LICENCE_PARCOURS.map((p) => ({ value: p.code, label: p.label }))];
}

export function licenceSemestreOptions() {
  return [{ value: "", label: "— Non classé —" }, ...LICENCE_SEMESTRES.map((s) => ({ value: s.code, label: s.label }))];
}

export function licenceFiliereOptions(parcoursCode) {
  return [{ value: "", label: "— Tronc commun / non spécifique —" }, ...licenceFilieresFor(parcoursCode).map((f) => ({ value: f.code, label: f.label }))];
}

// Orders modules the way a student actually progresses through the Licence:
// S1 → S6, unclassified last, alphabetical within a semester. Used both for
// the server-rendered initial grid (app/cours/page.js) and the client-side
// filtered grid (CoursExplorer.js) so the section reads as an organized
// curriculum rather than an arbitrary editorial list.
const SEMESTRE_ORDER = LICENCE_SEMESTRES.map((s) => s.code);

export function coursSortComparator(a, b) {
  const ai = a.semestre ? SEMESTRE_ORDER.indexOf(a.semestre) : SEMESTRE_ORDER.length;
  const bi = b.semestre ? SEMESTRE_ORDER.indexOf(b.semestre) : SEMESTRE_ORDER.length;
  if (ai !== bi) return ai - bi;
  return (a.module || "").localeCompare(b.module || "", "fr");
}
