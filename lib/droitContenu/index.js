// Compléments rédigés des cours de Droit, chapitre par chapitre (numéro du
// "# CHAPITRE N" dans public/data/droit.json) : même format que
// lib/fsjesContenu (titre, description, resume, exercices, qcm). Le cours et
// le premier exercice viennent du Markdown du module ; un résumé peut aussi
// s'écrire dans le Markdown (« ## ⚡ RÉSUMÉ », voir lib/fsjesChapitres.js).
//
// Ajouter un fichier : `import obligations from "./droit-des-obligations-s2.js";`
// puis `"droit-des-obligations-s2": obligations` dans SUPPLEMENTS (clé = id du
// module dans droit.json). `titre` fixe l'URL du chapitre : ne pas le changer
// sur un chapitre publié. Un titre en arabe donne l'adresse chapitre-N.

import theorieGeneraleDroitConstitutionnel from "./theorie-generale-droit-constitutionnel-s1.js";

const SUPPLEMENTS = {
  "theorie-generale-droit-constitutionnel-s1": theorieGeneraleDroitConstitutionnel,
};

export function droitSupplement(id) {
  return SUPPLEMENTS[id] || null;
}
