// Niveau d'un concours : à quelle étape du parcours il donne accès. Un seul
// fichier de concours (concours.json), un champ `niveau` : une entrée sans
// `niveau` est un concours de Master (les 260 premières fiches ont été
// saisies avant l'arrivée des autres niveaux).
//
// Ajouter un niveau : une entrée ici, puis
// la page de liste sur le modèle de app/concours/licence-excellence/page.js et
// l'espace correspondant dans lib/espaces.js. La console (sélecteur « Niveau
// du concours », filtres, couverture) lit cette liste sans autre retouche.
//
// Les filières restent celles de lib/taxonomy.js : une licence d'excellence
// « Comptabilité, Contrôle et Audit » se range dans la même sous-filière que
// le master CCA, ce qui garde les filtres et le formulaire admin communs.
export const MASTER = "master";
export const LICENCE_EXCELLENCE = "licence_excellence";
export const MASTER_DROIT = "master_droit";
export const CNAEM = "cnaem";

export const CONCOURS_NIVEAUX = [
  {
    code: MASTER,
    label: "Master",
    long: "Concours d'accès au Master",
    href: "/concours",
    sub: "Après la licence (bac+3)",
    educationalLevel: "Master",
  },
  {
    code: LICENCE_EXCELLENCE,
    label: "Licence d'excellence",
    long: "Concours d'accès à la Licence d'excellence",
    href: "/concours/licence-excellence",
    sub: "Après le DEUG (accès en S5)",
    educationalLevel: "Licence",
  },
  {
    // Masters de droit des FSJES (et des facultés de droit qui en sont
    // issues : FSJP…). Même étape que le Master, mais un autre public, des
    // épreuves rédigées en français ou en arabe, et une liste à part :
    // app/concours/droit/page.js, onglet « Masters de droit » de l'espace
    // Master (lib/espaces.js), ouvert dès le premier sujet publié (2026-10-22).
    code: MASTER_DROIT,
    label: "Master Droit",
    long: "Concours d'accès au Master en droit",
    href: "/concours/droit",
    sub: "Après la licence en droit (bac+3)",
    educationalLevel: "Master",
  },
  {
    // Concours national d'accès aux écoles de management (les douze ENCG et
    // deux écoles privées associées), passé en fin de 2e année des classes
    // prépa économiques et commerciales, options ECT et ECS (2026-11-15).
    // Une fiche = une épreuve d'une session ; l'option est dans `filiere`
    // (catégorie CPGE de lib/taxonomy.js). Pas de ville : le concours est
    // national, il n'entre dans aucun hub de ville. Liste :
    // app/concours/cnaem/page.js, espace « Prépa ECT / ECS » (lib/espaces.js).
    code: CNAEM,
    label: "CNAEM",
    long: "Concours national d'accès aux écoles de management (CNAEM)",
    href: "/concours/cnaem",
    sub: "Après les classes prépa ECT et ECS (bac+2)",
    educationalLevel: "Classes préparatoires",
  },
];

const CODES = new Set(CONCOURS_NIVEAUX.map((n) => n.code));

export function niveauOf(c) {
  return CODES.has(c?.niveau) ? c.niveau : MASTER;
}

export function isLicenceExcellence(c) {
  return niveauOf(c) === LICENCE_EXCELLENCE;
}

export function isMaster(c) {
  return niveauOf(c) === MASTER;
}

export function isMasterDroit(c) {
  return niveauOf(c) === MASTER_DROIT;
}

export function isCnaem(c) {
  return niveauOf(c) === CNAEM;
}

// Option de la classe prépa d'une fiche CNAEM, lue dans `filiere`.
export function optionCnaem(c) {
  return /ECS|scientifique/i.test(c?.filiere || "")
    ? { court: "ECS", long: "option scientifique (ECS)" }
    : { court: "ECT", long: "option technologique (ECT)" };
}

export function niveauInfo(code) {
  return CONCOURS_NIVEAUX.find((n) => n.code === code) || CONCOURS_NIVEAUX[0];
}

// Admin : la valeur vide enregistre un concours de Master (comportement
// historique), pour ne pas forcer la retouche des anciennes fiches.
export function niveauOptions() {
  return [{ value: "", label: "Master" }, ...CONCOURS_NIVEAUX.slice(1).map((n) => ({ value: n.code, label: n.long }))];
}

export function niveauLabel(c) {
  return niveauInfo(niveauOf(c)).label;
}
