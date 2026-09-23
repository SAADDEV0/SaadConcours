// Contenu rédigé des chapitres du Bac : un module par matière, indexé par
// slug de chapitre (voir lib/bacProgramme.js). Chaque chapitre :
// { cours, exercices, resume } en Markdown (+ LaTeX $...$) et
// qcm: [{ q, choix: [...], bonne: index, explication }].

import egs1 from "./2bac/egs-1.js";
import egs2 from "./2bac/egs-2.js";
import egs3 from "./2bac/egs-3.js";
import eoae1 from "./2bac/eoae-1.js";
import eoae2 from "./2bac/eoae-2.js";
import compta1 from "./2bac/compta-1.js";
import compta2 from "./2bac/compta-2.js";
import compta3 from "./2bac/compta-3.js";
import droit1 from "./2bac/droit-1.js";
import droit2 from "./2bac/droit-2.js";
import info from "./2bac/info.js";
import maths1 from "./2bac/maths-1.js";
import maths2 from "./2bac/maths-2.js";
import philo from "./2bac/philo.js";
import anglais from "./2bac/anglais.js";

const CONTENU = {
  "2bac/economie-generale-statistiques": { ...egs1, ...egs2, ...egs3 },
  "2bac/economie-organisation-administrative-entreprises": { ...eoae1, ...eoae2 },
  "2bac/comptabilite-mathematiques-financieres": { ...compta1, ...compta2, ...compta3 },
  "2bac/droit": { ...droit1, ...droit2 },
  "2bac/informatique-de-gestion": info,
  "2bac/mathematiques": { ...maths1, ...maths2 },
  "2bac/philosophie": philo,
  "2bac/anglais": anglais,
};

export function bacChapitreContenu(niveau, matiere, chapitre) {
  return CONTENU[`${niveau}/${matiere}`]?.[chapitre] || null;
}

export function bacMatiereContenu(niveau, matiere) {
  return CONTENU[`${niveau}/${matiere}`] || {};
}
