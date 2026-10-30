// Relie chaque module de cours FSJES aux sujets de concours qui comportent une
// épreuve dans ce module — affiché sur la page du module et sur ses chapitres.
//
// Pourquoi : les pages concours n'étaient liées que depuis /concours (3,8 Mo)
// et entre elles. Search Console (septembre 2026) en montrait 209 « détectées,
// actuellement non indexées » : Google connaissait l'URL par le sitemap mais ne
// venait pas la lire, faute de liens depuis des pages qu'il visite. Les ~190
// pages de cours leur en donnent.
//
// Lu sur le checkout (fs), une fois par processus, et non via
// getPublicConcours() : ces pages sont prérendues au build, et chacune aurait
// retéléchargé les 3,3 Mo de concours.json depuis GitHub (194 fois en CI).
// Le build tourne sur le commit déployé, les données sont donc les mêmes.

import fs from "node:fs";
import path from "node:path";
import { isMasterDroit } from "./concoursNiveaux.js";
import { contenuOuvert } from "./espaces.js";
import { droitIdArabe, droitModuleHref, droitOuvert } from "./droit.js";

// Les libellés d'épreuve de concours.json sont libres (238 variantes) : on
// les reconnaît par mots-clés, sur un texte sans accents ni ponctuation.
const MOTIFS = {
  comptagen1_cours: /comptabilite generale|comptabilite des operations courantes/,
  comptaana_cours: /comptabilite analytique|comptabilite de gestion|seuil de rentabilite/,
  comptasoc_cours: /comptabilite des societes/,
  comptaapprof_cours: /comptabilite approfondie/,
  controlegestion_cours: /controle de gestion/,
  analysefin_cours: /analyse financiere|diagnostic financier|gestion financiere|finance d entreprise|plan de financement|gestion de tresorerie/,
  mathfin_cours: /mathematiques financieres|evaluation de projets d investissement/,
  choixinvest_cours: /choix d investissement|investissement et (de )?financement|modes? de financement|plan de financement|evaluation de projets d investissement|cout du capital|gestion financiere|finance d entreprise|politique financiere/,
  fiscalite_cours: /fiscalit|\btva\b/,
  audit_cours: /\baudit\b/,
  marketing_cours: /marketing|etudes de marche|strategie de marque|comportement du consommateur/,
  grh_cours: /ressources humaines|\bgrh\b|gpec|droit du travail|gestion sociale|\bsirh\b/,
  managementstrat_cours: /management strategique|strategie d entreprise|strategie et management|strategie et structures/,
  introgestion_cours: /theories? des organisations|management des organisations|management et organisations?|management general|^management$/,
  managementorg_cours: /theories? des organisations|management (des|et) (theories des )?organisations?|management theories des organisations|management general|^management$|culture generale (economique et )?manageriale|culture generale du management|comportement organisationnel/,
  // Module du tronc commun (S2) : mêmes épreuves de management général que
  // l'introduction à la gestion et le management des organisations.
  managementfond_cours: /management fondamental|fondements du management|principes de management|management general|^management$|management (des|et) organisations?|culture generale (economique et )?manageriale|culture generale du management/,
  droitsocietes_cours: /droit des societes|droit commercial/,
  // Épreuves de culture juridique des Masters de droit (sources du droit,
  // règle de droit) : programme de l'introduction à l'étude du droit.
  introdroit_cours: /introduction (a l etude )?du droit|culture juridique|sources du droit/,
  // Le droit des affaires (S5) englobe le droit commercial et le droit des
  // sociétés : leurs épreuves de concours portent sur les deux modules.
  droitaffaires_cours: /droit des affaires|droit commercial|droit des societes|entreprises en difficulte|effets de commerce|droit bancaire/,
  // Module d'ouverture du parcours Économie (S1) : les épreuves d'économie
  // générale ou d'analyse économique reprennent son programme (circuit,
  // monnaie, marché et État, pensée économique, croissance et développement).
  introeco_cours: /economie generale|analyse economique|sciences economiques|^economie$|culture (generale )?economique|culture economique generale|economie du developpement/,
  micro_cours: /microeconomie|theorie de la production/,
  // Macroéconomie 1 (S1) : mesure de l'activité ; Macroéconomie 2 (S2) :
  // modèle keynésien, IS-LM, offre et demande globales. Un libellé
  // « Macroéconomie » seul couvre les deux modules.
  macro1_cours: /macroeconomie|comptabilite nationale|agregats macroeconomiques|circuit economique/,
  macro_cours: /macroeconomie|modele keynesien|is lm|economie monetaire|monnaie et politique monetaire|politique economique/,
  // Un libellé « Statistiques » seul couvre les trois modules ; « statistique
  // inférentielle » relève de l'échantillonnage (estimation, tests).
  stats_cours: /statisti(?!que inferentielle)|series chronologiques/,
  probas_cours: /probabilit|^statistiques?$/,
  echantillonnage_cours: /echantillonnage|estimation|statistique inferentielle|intervalle de confiance|tests? d hypotheses|^statistiques?$/,
  econometrie_cours: /econometrie/,
  // Les épreuves de culture générale des concours portent surtout sur
  // l'économie et l'actualité marocaines.
  ecomaroc_cours: /economie marocaine|economie du maroc|^culture generale$|culture generale economique|actualite economique/,
  maths_cours: /analyse mathematique|algebre|^mathematiques$|mathematiques appliquees/,
  languessoft_cours: /anglais|communication professionnelle|langue et expression/,
  // Filière Économie internationale et logistique (S5) : les épreuves
  // d'économie internationale couvrent à la fois le versant monétaire et
  // institutionnel (introecoint) et les théories de l'échange (theoriescomint).
  introecoint_cours: /economie internationale|relations economiques internationales|organisations internationales|politique de change|economie monetaire internationale/,
  theoriescomint_cours: /commerce international|economie internationale|relations economiques internationales/,
  droitdouanier_cours: /douan|incoterms/,
  iaeconum_cours: /intelligence artificielle|economie numerique|big data|economie du savoir|transformation digitale|strategie digitale/,
  // Filière Économétrie appliquée (S5) : son « Économie internationale »
  // relève d'introecoint et theoriescomint, son économétrie d'econometrie.
  microapprof_cours: /microeconomie|economie industrielle|theorie des jeux|economie publique|equilibre general/,
  iaro_cours: /recherche operationnelle|programmation lineaire|aide a la decision|intelligence artificielle/,
  comptanat_cours: /comptabilite nationale|agregats macroeconomiques|tableau entrees sorties/,
};

// Masters de droit (niveau master_droit) : leurs épreuves mènent aussi aux
// cours de Droit (public/data/droit.json), par module en français ; un sujet
// en arabe (`langue: "ar"`) mène au même module en arabe (droitIdArabe). Les
// modules en renvoi vers un cours FSJES (droit commercial, droit des
// sociétés…) n'ont pas de page : leur version française passe par MOTIFS.
const MOTIFS_DROIT = {
  "introduction-etude-droit-s1": /introduction (a l etude )?du droit|culture juridique|sources du droit/,
  "sociologie-droit-s1": /sociologie (du droit|juridique)/,
  "theorie-generale-droit-constitutionnel-s1": /droit constitutionnel/,
  "introduction-science-politique-s1": /science politique|sciences politiques|communication politique/,
  "theorie-generale-obligations-s2": /obligations|contrats|droit civil|responsabilite civile/,
  "droit-commercial-fondamental-s2": /droit commercial|droit des affaires|fonds de commerce|commercant/,
  "droit-penal-general-s2": /droit penal|sciences criminelles|droit criminel/,
  "introduction-relations-internationales-s2": /relations internationales|geopolitique/,
  "organisation-administrative-s2": /organisation administrative|droit administratif|collectivites territoriales|gestion publique territoriale/,
  "droit-famille-s3": /droit de la famille|code de la famille|statut personnel|successions/,
  "droit-social-s3": /droit social|droit du travail/,
  "finances-publiques-s3": /finances publiques/,
  "action-administrative-s3": /action administrative|service public|marches publics/,
  "droit-societes-s4": /droit des societes|entreprises en difficulte|difficultes de l entreprise/,
  "organisation-judiciaire-s4": /organisation judiciaire|procedure civile|modes alternatifs|arbitrage|mediation|contentieux judiciaire/,
  "droit-foncier-s4": /droit foncier|immatriculation fonciere|droits reels|droit immobilier|urbanisme/,
  "contentieux-administratif-s4": /contentieux administratif|justice administrative/,
  "droits-homme-libertes-publiques-s4": /droits de l homme|libertes publiques/,
  "droit-international-public-s3": /droit international public/,
  "histoire-idees-politiques-s4": /idees politiques|pensee politique/,
};
// Modules qui n'existent qu'en arabe.
const MOTIFS_DROIT_AR = {
  "droit-procedures-ar-s4": /procedure civile|procedure penale|procedures judiciaires|voies d execution/,
};

const normaliser = (s) =>
  String(s || "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

let index = null;

function construireIndex() {
  let liste = [];
  try {
    liste = JSON.parse(fs.readFileSync(path.join(process.cwd(), "public", "data", "concours.json"), "utf8"));
  } catch {
    return {};
  }
  // Même filtre que getPublicConcours (isConcoursPublic, lib/store.js) : un
  // brouillon n'est lié nulle part.
  const publics = liste.filter((c) => c?.statut !== "brouillon");
  const out = {};
  for (const [coursId, motif] of Object.entries(MOTIFS)) {
    out[coursId] = publics
      .filter((c) => (Array.isArray(c.modules) ? c.modules : []).some((m) => motif.test(normaliser(m))))
      // Plus récent d'abord ; les sujets non datés (« SD ») à la fin.
      .sort((a, b) => (Number(b.annee) || 0) - (Number(a.annee) || 0) || a.id.localeCompare(b.id))
      .map((c) => ({
        id: c.id,
        annee: c.annee,
        titre: c.master_reel || c.filiere || c.etablissement,
        etablissement: c.etablissement,
        ville: c.ville,
        categorie: c.categorie,
      }));
  }
  return out;
}

// Tous les sujets publiés qui ont une épreuve dans ce module de cours.
export function concoursDuModule(coursId) {
  if (!index) index = construireIndex();
  return index[coursId] || [];
}

// Une sélection différente par chapitre, pour que chaque sujet du module soit
// lié depuis au moins une page de chapitre et pas seulement les plus récents.
export function concoursDuChapitre(coursId, indexChapitre, n = 4) {
  const tous = concoursDuModule(coursId);
  if (tous.length <= n) return tous;
  const debut = (indexChapitre * n) % tous.length;
  return Array.from({ length: n }, (_, k) => tous[(debut + k) % tous.length]);
}

// Sens inverse : sur la fiche d'un concours, les modules de cours qui couvrent
// ses épreuves.
//
// Pourquoi : Search Console (9 octobre 2026) montrait 208 pages de cours sur
// 515 « détectées, actuellement non indexées », et 7 modules indexés sur 28.
// Les pages concours sont les plus indexées du site (89) et Google les
// réexplore souvent, mais aucune ne liait un module de cours : les liens
// n'allaient que des cours vers les concours.
//
// Même lecture sur le checkout que construireIndex, pour la même raison : sans
// elle, chacune des ~300 fiches prérendues retéléchargerait cours.json (2,9 Mo).
let modules = null;
let modulesDroit = null;

function lireJson(fichier) {
  try {
    return JSON.parse(fs.readFileSync(path.join(process.cwd(), "public", "data", fichier), "utf8"));
  } catch {
    return [];
  }
}

function lireModules() {
  return new Map(
    lireJson("cours.json")
      .filter((c) => c?.available)
      .map((c) => [c.id, { id: c.id, module: c.module, semestre: c.semestre, href: `/cours/${c.id}`, espace: "Cours Licence FSJES" }])
  );
}

// Un module de Droit n'a de page que publié et découpé en chapitres
// (isDroitPublie, lib/droit.js), et seulement quand l'espace est ouvert.
function lireModulesDroit() {
  if (!droitOuvert()) return new Map();
  return new Map(
    lireJson("droit.json")
      .filter((c) => c?.available && !c.renvoi && /^# CHAPITRE \d+/m.test(c.content || ""))
      .map((c) => [c.id, { id: c.id, module: c.module, semestre: c.semestre, href: droitModuleHref(c), espace: "Cours de Droit", langue: c.langue }])
  );
}

export function modulesDuConcours(concours, n = 6) {
  if (!modules) modules = lireModules();
  const epreuves = (Array.isArray(concours?.modules) ? concours.modules : []).map(normaliser);
  const out = [];
  const ajouter = (m) => m && !out.includes(m) && out.push(m);
  // Master de droit : les cours de Droit d'abord, dans la langue du sujet.
  if (isMasterDroit(concours)) {
    if (!modulesDroit) modulesDroit = lireModulesDroit();
    const arabe = concours.langue === "ar";
    for (const epreuve of epreuves) {
      for (const [id, motif] of Object.entries(MOTIFS_DROIT)) if (motif.test(epreuve)) ajouter(modulesDroit.get(arabe ? droitIdArabe(id) : id));
      if (arabe) for (const [id, motif] of Object.entries(MOTIFS_DROIT_AR)) if (motif.test(epreuve)) ajouter(modulesDroit.get(id));
    }
  }
  // Dans l'ordre des épreuves du sujet : la première matière du concours
  // donne le premier module proposé.
  for (const epreuve of epreuves) {
    for (const [coursId, motif] of Object.entries(MOTIFS)) {
      if (motif.test(epreuve)) ajouter(modules.get(coursId));
    }
  }
  return out.slice(0, n);
}
