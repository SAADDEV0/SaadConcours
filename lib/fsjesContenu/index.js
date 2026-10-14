// Compléments rédigés des cours FSJES, chapitre par chapitre (numéro du
// "# CHAPITRE N" dans public/data/cours.json) : titre, résumé, QCM et
// exercices corrigés supplémentaires. Le cours et le premier exercice
// viennent du Markdown du module (voir lib/fsjesChapitres.js).
// Chaque chapitre : { titre, description, resume, exercices, qcm: [{ q, choix, bonne, explication }] }.
// `titre` fixe l'URL du chapitre (slug) : ne pas le changer sur un chapitre publié.
// `description` : meta description du chapitre (≈ 150 caractères, propre au chapitre).

import analysefin from "./analysefin.js";
import audit from "./audit.js";
import choixinvest from "./choixinvest.js";
import comptaana from "./comptaana.js";
import comptaapprof from "./comptaapprof.js";
import comptagen1 from "./comptagen1.js";
import comptanat from "./comptanat.js";
import comptasoc from "./comptasoc.js";
import controlegestion from "./controlegestion.js";
import droitaffaires from "./droitaffaires.js";
import droitdouanier from "./droitdouanier.js";
import droitsocietes from "./droitsocietes.js";
import econometrie from "./econometrie.js";
import ecomaroc from "./ecomaroc.js";
import fiscalite from "./fiscalite.js";
import grh from "./grh.js";
import iaeconum from "./iaeconum.js";
import iaro from "./iaro.js";
import introdroit from "./introdroit.js";
import introeco from "./introeco.js";
import introecoint from "./introecoint.js";
import introgestion from "./introgestion.js";
import languessoft from "./languessoft.js";
import macro from "./macro.js";
import managementfond from "./managementfond.js";
import managementorg from "./managementorg.js";
import managementstrat from "./managementstrat.js";
import marketing from "./marketing.js";
import mathfin from "./mathfin.js";
import maths from "./maths.js";
import micro from "./micro.js";
import microapprof from "./microapprof.js";
import probas from "./probas.js";
import stats from "./stats.js";
import theoriescomint from "./theoriescomint.js";

// Clé : id du module dans public/data/cours.json.
const SUPPLEMENTS = {
  analysefin_cours: analysefin,
  audit_cours: audit,
  choixinvest_cours: choixinvest,
  comptaana_cours: comptaana,
  comptaapprof_cours: comptaapprof,
  comptagen1_cours: comptagen1,
  comptanat_cours: comptanat,
  comptasoc_cours: comptasoc,
  controlegestion_cours: controlegestion,
  droitaffaires_cours: droitaffaires,
  droitdouanier_cours: droitdouanier,
  droitsocietes_cours: droitsocietes,
  econometrie_cours: econometrie,
  ecomaroc_cours: ecomaroc,
  fiscalite_cours: fiscalite,
  grh_cours: grh,
  iaeconum_cours: iaeconum,
  iaro_cours: iaro,
  introdroit_cours: introdroit,
  introeco_cours: introeco,
  introecoint_cours: introecoint,
  introgestion_cours: introgestion,
  languessoft_cours: languessoft,
  macro_cours: macro,
  managementfond_cours: managementfond,
  managementorg_cours: managementorg,
  managementstrat_cours: managementstrat,
  marketing_cours: marketing,
  mathfin_cours: mathfin,
  maths_cours: maths,
  micro_cours: micro,
  microapprof_cours: microapprof,
  probas_cours: probas,
  stats_cours: stats,
  theoriescomint_cours: theoriescomint,
};

export function fsjesSupplement(id) {
  return SUPPLEMENTS[id] || null;
}
