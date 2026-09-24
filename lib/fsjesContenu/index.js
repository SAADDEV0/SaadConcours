// Compléments rédigés des cours FSJES, chapitre par chapitre (numéro du
// "# CHAPITRE N" dans public/data/cours.json) : titre, résumé, QCM et
// exercices corrigés supplémentaires. Le cours et le premier exercice
// viennent du Markdown du module (voir lib/fsjesChapitres.js).
// Chaque chapitre : { titre, description, resume, exercices, qcm: [{ q, choix, bonne, explication }] }.
// `titre` fixe l'URL du chapitre (slug) : ne pas le changer sur un chapitre publié.
// `description` : meta description du chapitre (≈ 150 caractères, propre au chapitre).

import analysefin from "./analysefin.js";
import audit from "./audit.js";
import comptaana from "./comptaana.js";
import comptaapprof from "./comptaapprof.js";
import comptagen1 from "./comptagen1.js";
import comptasoc from "./comptasoc.js";
import controlegestion from "./controlegestion.js";
import droitsocietes from "./droitsocietes.js";
import econometrie from "./econometrie.js";
import fiscalite from "./fiscalite.js";
import grh from "./grh.js";
import introdroit from "./introdroit.js";
import introgestion from "./introgestion.js";
import languessoft from "./languessoft.js";
import macro from "./macro.js";
import managementstrat from "./managementstrat.js";
import marketing from "./marketing.js";
import mathfin from "./mathfin.js";
import maths from "./maths.js";
import micro from "./micro.js";
import stats from "./stats.js";

// Clé : id du module dans public/data/cours.json.
const SUPPLEMENTS = {
  analysefin_cours: analysefin,
  audit_cours: audit,
  comptaana_cours: comptaana,
  comptaapprof_cours: comptaapprof,
  comptagen1_cours: comptagen1,
  comptasoc_cours: comptasoc,
  controlegestion_cours: controlegestion,
  droitsocietes_cours: droitsocietes,
  econometrie_cours: econometrie,
  fiscalite_cours: fiscalite,
  grh_cours: grh,
  introdroit_cours: introdroit,
  introgestion_cours: introgestion,
  languessoft_cours: languessoft,
  macro_cours: macro,
  managementstrat_cours: managementstrat,
  marketing_cours: marketing,
  mathfin_cours: mathfin,
  maths_cours: maths,
  micro_cours: micro,
  stats_cours: stats,
};

export function fsjesSupplement(id) {
  return SUPPLEMENTS[id] || null;
}
