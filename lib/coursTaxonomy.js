// Cours category taxonomy — shared between the server-rendered index
// (app/cours/page.js), the client-side filter (app/cours/CoursExplorer.js)
// and the admin editor (app/admin/_lib/resourceConfigs.js). Mirrors
// lib/blogTaxonomy.js's shape/usage.

export const COURS_CATEGORIES = [
  { code: "compta", label: "Comptabilité & Audit", emoji: "📗" },
  { code: "finance", label: "Finance", emoji: "💰" },
  { code: "economie", label: "Économie", emoji: "📈" },
  { code: "quant", label: "Statistiques & Économétrie", emoji: "🔢" },
  { code: "management", label: "Management & RH", emoji: "🧭" },
  { code: "marketing", label: "Marketing", emoji: "📣" },
  { code: "droit", label: "Fiscalité & Droit", emoji: "⚖️" },
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
