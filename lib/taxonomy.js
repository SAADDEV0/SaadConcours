// Filière taxonomy — single source of truth for the whole site.
//
// Two levels: 5 catégories, each split into 3-4 sous-filières. A concours'
// `categorie` field holds the catégorie code (e.g. "FCA"), and its `filiere`
// field holds the exact sous-filière label below (e.g. "Comptabilité,
// Contrôle & Audit (CCA)") — that pairing is what app/admin/page.js's
// cascading select enforces and what lib/store.js derives automatically
// when only `filiere` is supplied (bulk import, API writes).
export const FILIERE_CATEGORIES = [
  {
    code: "FCA",
    label: "Finance, Comptabilité & Audit",
    sousFilieres: [
      "Finance d'Entreprise & Ingénierie Financière",
      "Comptabilité, Contrôle & Audit (CCA)",
      "Banque, Assurance & Marchés Financiers",
      "Fiscalité & Gestion Financière",
    ],
  },
  {
    code: "MRH",
    label: "Management & Ressources Humaines",
    sousFilieres: [
      "Management Stratégique & Gestion des Organisations",
      "Gestion des Ressources Humaines (GRH)",
      "Entrepreneuriat & Management de Projets",
      "Management Public & Gouvernance Territoriale",
    ],
  },
  {
    code: "MCL",
    label: "Marketing, Commerce & Logistique",
    sousFilieres: [
      "Marketing & Stratégie Commerciale",
      "Marketing Digital & E-Commerce",
      "Commerce International",
      "Logistique & Supply Chain Management",
    ],
  },
  {
    code: "EAPP",
    label: "Économie Appliquée & Politiques Publiques",
    sousFilieres: [
      "Analyse et Politiques Économiques (APE)",
      "Économie Internationale & Développement",
      "Économie Sociale et Solidaire (ESS)",
      "Économie Verte & Développement Durable",
    ],
  },
  {
    code: "EDMQ",
    label: "Économétrie, Data & Méthodes Quantitatives",
    sousFilieres: [
      "Économétrie & Modélisation Économique",
      "Data Science, IA & Business Analytics",
      "Actuariat & Ingénierie Mathématique-Financière",
    ],
  },
];

export function categoryOptions() {
  return FILIERE_CATEGORIES.map((c) => ({ value: c.code, label: c.label }));
}

export function subFilieresFor(categoryCode) {
  return FILIERE_CATEGORIES.find((c) => c.code === categoryCode)?.sousFilieres || [];
}

export function subFiliereOptions(categoryCode) {
  return subFilieresFor(categoryCode).map((s) => ({ value: s, label: s }));
}

// Reverse lookup used to auto-fill `categorie` wherever only `filiere` is
// supplied (bulk import rows, direct API writes) — see lib/store.js.
export function categoryOf(sousFiliere) {
  return FILIERE_CATEGORIES.find((c) => c.sousFilieres.includes(sousFiliere))?.code || null;
}

export function categoryLabel(code) {
  return FILIERE_CATEGORIES.find((c) => c.code === code)?.label || code || "";
}

export function allSousFilieres() {
  return FILIERE_CATEGORIES.flatMap((c) => c.sousFilieres);
}
