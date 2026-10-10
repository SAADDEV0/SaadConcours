// Niveau d'un concours : à quelle étape du parcours il donne accès. Un seul
// fichier de concours (concours.json), un champ `niveau` : une entrée sans
// `niveau` est un concours de Master (les 260 premières fiches ont été
// saisies avant l'arrivée des autres niveaux).
//
// Ajouter un niveau (ex. concours post-bac ENCG/ISCAE) : une entrée ici, puis
// la page de liste sur le modèle de app/concours/licence-excellence/page.js et
// l'espace correspondant dans lib/espaces.js. La console (sélecteur « Niveau
// du concours », filtres, couverture) lit cette liste sans autre retouche.
//
// Les filières restent celles de lib/taxonomy.js : une licence d'excellence
// « Comptabilité, Contrôle et Audit » se range dans la même sous-filière que
// le master CCA, ce qui garde les filtres et le formulaire admin communs.
export const MASTER = "master";
export const LICENCE_EXCELLENCE = "licence_excellence";
export const POST_BAC = "post_bac";

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
    // ENCG (TAFEM), ISCAE… en économie et gestion uniquement. Page de liste à
    // créer avec les premiers sujets (voir lib/espaces.js, espace « postbac »).
    code: POST_BAC,
    label: "Post-bac",
    long: "Concours d'accès post-bac (ENCG, ISCAE)",
    href: "/concours/post-bac",
    sub: "Après le Bac (ENCG, ISCAE)",
    educationalLevel: "Bac",
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
