// Niveau d'un concours : Master (bac+3 → M1) ou Licence d'excellence
// (DEUG, bac+2 → S5). Un seul fichier de concours, un champ `niveau` : une
// entrée sans `niveau` est un concours de Master (les 260 premières fiches
// ont été saisies avant l'arrivée des licences d'excellence).
//
// Les filières restent celles de lib/taxonomy.js : une licence d'excellence
// « Comptabilité, Contrôle et Audit » se range dans la même sous-filière que
// le master CCA, ce qui garde les filtres, les couleurs de carte et le
// formulaire admin communs aux deux niveaux.
export const LICENCE_EXCELLENCE = "licence_excellence";

export const CONCOURS_NIVEAUX = [
  {
    code: "master",
    label: "Master",
    long: "Concours d'accès au Master",
    href: "/concours",
    icon: "🎓",
    sub: "Après la licence (bac+3)",
  },
  {
    code: LICENCE_EXCELLENCE,
    label: "Licence d'excellence",
    long: "Concours d'accès à la Licence d'excellence",
    href: "/concours/licence-excellence",
    icon: "⭐",
    sub: "Après le DEUG (accès en S5)",
  },
];

export function niveauOf(c) {
  return c?.niveau === LICENCE_EXCELLENCE ? LICENCE_EXCELLENCE : "master";
}

export function isLicenceExcellence(c) {
  return niveauOf(c) === LICENCE_EXCELLENCE;
}

export function niveauInfo(code) {
  return CONCOURS_NIVEAUX.find((n) => n.code === code) || CONCOURS_NIVEAUX[0];
}

// Admin : la valeur vide enregistre un concours de Master (comportement
// historique), pour ne pas forcer la retouche des anciennes fiches.
export function niveauOptions() {
  return [
    { value: "", label: "Master" },
    { value: LICENCE_EXCELLENCE, label: "Licence d'excellence (accès en S5)" },
  ];
}

export function niveauLabel(c) {
  return niveauInfo(niveauOf(c)).label;
}
