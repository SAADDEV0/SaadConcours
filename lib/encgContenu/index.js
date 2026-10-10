// Compléments rédigés des cours ENCG, chapitre par chapitre (numéro du
// "# CHAPITRE N" dans public/data/encg.json) : même format que
// lib/fsjesContenu (titre, description, resume, exercices, qcm). Le cours et
// le premier exercice viennent du Markdown du module ; un résumé peut aussi
// s'écrire dans le Markdown (« ## ⚡ RÉSUMÉ », voir lib/fsjesChapitres.js).
// Un QCM de chapitre ne s'écrit qu'ici.
//
// Ajouter un fichier : `import compta from "./comptabilite-generale-s1.js";`
// puis `"comptabilite-generale-s1": compta` dans SUPPLEMENTS (clé = id du
// module dans encg.json). `titre` fixe l'URL du chapitre : ne pas le changer
// sur un chapitre publié.

const SUPPLEMENTS = {};

export function encgSupplement(id) {
  return SUPPLEMENTS[id] || null;
}
