// Compléments rédigés des cours de la prépa ECT / ECS, chapitre par chapitre (numéro du
// « # CHAPITRE N » dans public/data/prepa.json) : même format que lib/fsjesContenu (titre,
// description, resume, exercices, qcm). Clé = id du cours dans prepa.json. `titre` fixe l'URL du
// chapitre : ne pas le changer sur un chapitre publié.

import analyseEct from "./analyse-ect.js";
import informatiqueGestionEct from "./informatique-gestion-ect.js";

const SUPPLEMENTS = {
  "analyse-ect": analyseEct,
  "informatique-gestion-ect": informatiqueGestionEct,
};

export function prepaSupplement(id) {
  return SUPPLEMENTS[id] || null;
}
