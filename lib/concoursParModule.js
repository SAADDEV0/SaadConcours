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
  fiscalite_cours: /fiscalit|\btva\b/,
  audit_cours: /\baudit\b/,
  marketing_cours: /marketing|etudes de marche|strategie de marque|comportement du consommateur/,
  grh_cours: /ressources humaines|\bgrh\b|gpec|droit du travail|gestion sociale|\bsirh\b/,
  managementstrat_cours: /management strategique|strategie d entreprise|strategie et management|strategie et structures/,
  introgestion_cours: /theories? des organisations|management des organisations|management et organisations?|management general|^management$/,
  droitsocietes_cours: /droit des societes|droit commercial/,
  micro_cours: /microeconomie|theorie de la production/,
  macro_cours: /macroeconomie|modele keynesien|comptabilite nationale|economie monetaire|monnaie et politique monetaire/,
  stats_cours: /statisti|probabilit|echantillonnage|series chronologiques/,
  econometrie_cours: /econometrie/,
  maths_cours: /analyse mathematique|algebre|^mathematiques$|mathematiques appliquees/,
  languessoft_cours: /anglais|communication professionnelle|langue et expression/,
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
  // Même filtre que getPublicConcours : un brouillon n'est lié nulle part.
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
