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
import introductionSciencePolitique from "./introduction-science-politique-s1.js";
import introductionEtudeDroitMusulman from "./introduction-etude-droit-musulman-s1.js";
import sociologieDroit from "./sociologie-droit-s1.js";
import introductionEtudeDroitAr from "./introduction-etude-droit-ar-s1.js";
import introductionEtudeChariaAr from "./introduction-etude-charia-ar-s1.js";
import theorieGeneraleDroitConstitutionnelAr from "./theorie-generale-droit-constitutionnel-ar-s1.js";

const SUPPLEMENTS = {
  "theorie-generale-droit-constitutionnel-ar-s1": theorieGeneraleDroitConstitutionnelAr,
  "introduction-etude-charia-ar-s1": introductionEtudeChariaAr,
  "introduction-etude-droit-ar-s1": introductionEtudeDroitAr,
  "sociologie-droit-s1": sociologieDroit,
  "introduction-etude-droit-musulman-s1": introductionEtudeDroitMusulman,
  "introduction-science-politique-s1": introductionSciencePolitique,
  "theorie-generale-droit-constitutionnel-s1": theorieGeneraleDroitConstitutionnel,
};

export function droitSupplement(id) {
  return SUPPLEMENTS[id] || null;
}
