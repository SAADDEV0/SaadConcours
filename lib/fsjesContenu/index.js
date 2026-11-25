// Compléments rédigés des cours FSJES, chapitre par chapitre (numéro du
// "# CHAPITRE N" dans public/data/cours.json) : titre, résumé, QCM et
// exercices corrigés supplémentaires. Le cours et le premier exercice
// viennent du Markdown du module (voir lib/fsjesChapitres.js).
// Chaque chapitre : { titre, description, resume, exercices, qcm: [{ q, choix, bonne, explication }] }.
// `titre` fixe l'URL du chapitre (slug) : ne pas le changer sur un chapitre publié.
// `description` : meta description du chapitre (≈ 150 caractères, propre au chapitre).

import algebre from "./algebre.js";
import analysefin from "./analysefin.js";
import audit from "./audit.js";
import cgsocial from "./cgsocial.js";
import choixinvest from "./choixinvest.js";
import comptaana from "./comptaana.js";
import comptaapprof from "./comptaapprof.js";
import comptagen1 from "./comptagen1.js";
import comptagen2 from "./comptagen2.js";
import comptanat from "./comptanat.js";
import comptasoc from "./comptasoc.js";
import controlegestion from "./controlegestion.js";
import crm from "./crm.js";
import droitaffaires from "./droitaffaires.js";
import droitdouanier from "./droitdouanier.js";
import droitsocietes from "./droitsocietes.js";
import echantillonnage from "./echantillonnage.js";
import ecoentreprise from "./ecoentreprise.js";
import ecommerce from "./ecommerce.js";
import econometrie from "./econometrie.js";
import ecomaroc from "./ecomaroc.js";
import entrepreneuriat from "./entrepreneuriat.js";
import etudemarche from "./etudemarche.js";
import fiscalite from "./fiscalite.js";
import fiscalite2 from "./fiscalite2.js";
import grh from "./grh.js";
import histpensee from "./histpensee.js";
import iaeconum from "./iaeconum.js";
import iaro from "./iaro.js";
import introdroit from "./introdroit.js";
import introeco from "./introeco.js";
import introecoint from "./introecoint.js";
import introgestion from "./introgestion.js";
import languessoft from "./languessoft.js";
import logistiqueint from "./logistiqueint.js";
import macro from "./macro.js";
import macro1 from "./macro1.js";
import managementfond from "./managementfond.js";
import managementorg from "./managementorg.js";
import managementstrat from "./managementstrat.js";
import marketing from "./marketing.js";
import marketingint from "./marketingint.js";
import marketingop from "./marketingop.js";
import mathfin from "./mathfin.js";
import maths from "./maths.js";
import micro from "./micro.js";
import micro2 from "./micro2.js";
import microapprof from "./microapprof.js";
import probas from "./probas.js";
import rologistique from "./rologistique.js";
import silogistique from "./silogistique.js";
import sociologieorg from "./sociologieorg.js";
import stats from "./stats.js";
import theoriescomint from "./theoriescomint.js";

// Clé : id du module dans public/data/cours.json.
const SUPPLEMENTS = {
  algebre_cours: algebre,
  analysefin_cours: analysefin,
  audit_cours: audit,
  choixinvest_cours: choixinvest,
  comptaana_cours: comptaana,
  comptaapprof_cours: comptaapprof,
  comptagen1_cours: comptagen1,
  comptagen2_cours: comptagen2,
  comptanat_cours: comptanat,
  cgsocial_cours: cgsocial,
  comptasoc_cours: comptasoc,
  controlegestion_cours: controlegestion,
  crm_cours: crm,
  droitaffaires_cours: droitaffaires,
  droitdouanier_cours: droitdouanier,
  droitsocietes_cours: droitsocietes,
  echantillonnage_cours: echantillonnage,
  ecoentreprise_cours: ecoentreprise,
  ecommerce_cours: ecommerce,
  econometrie_cours: econometrie,
  ecomaroc_cours: ecomaroc,
  entrepreneuriat_cours: entrepreneuriat,
  etudemarche_cours: etudemarche,
  fiscalite_cours: fiscalite,
  fiscalite2_cours: fiscalite2,
  grh_cours: grh,
  histpensee_cours: histpensee,
  iaeconum_cours: iaeconum,
  iaro_cours: iaro,
  introdroit_cours: introdroit,
  introeco_cours: introeco,
  introecoint_cours: introecoint,
  introgestion_cours: introgestion,
  languessoft_cours: languessoft,
  logistiqueint_cours: logistiqueint,
  macro_cours: macro,
  macro1_cours: macro1,
  managementfond_cours: managementfond,
  managementorg_cours: managementorg,
  managementstrat_cours: managementstrat,
  marketing_cours: marketing,
  marketingint_cours: marketingint,
  marketingop_cours: marketingop,
  mathfin_cours: mathfin,
  maths_cours: maths,
  micro_cours: micro,
  micro2_cours: micro2,
  microapprof_cours: microapprof,
  probas_cours: probas,
  rologistique_cours: rologistique,
  silogistique_cours: silogistique,
  sociologieorg_cours: sociologieorg,
  stats_cours: stats,
  theoriescomint_cours: theoriescomint,
};

export function fsjesSupplement(id) {
  return SUPPLEMENTS[id] || null;
}
