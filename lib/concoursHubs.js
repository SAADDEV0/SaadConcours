// Pages « hub » des concours : une par ville (/concours/ville/<slug>) et une
// par type de master (/concours/master/<slug>). Créées le 2026-10-29, après
// l'audit du même jour : les requêtes qui rapportent (« concours master FSJES
// Agadir », « concours master CCA ») étaient servies par deux familles
// d'articles faits sur le même gabarit (« FSJES X : concours Master, filières
// et conseils » ×10, « Les matières à préparer pour le master X » ×14), aux
// chiffres figés le jour de leur rédaction (« 6 sujets » à Agadir, qui en
// compte 38). Un hub est calculé sur la base à chaque build : liste complète
// des sujets, filières, établissements, cours à réviser. L'article qu'il
// remplace y est repris en fin de page, daté, et son adresse redirige en 301
// (public/_redirects).
//
// Un hub n'existe qu'à partir de MIN_SUJETS sujets publiés : en dessous, ce
// serait une page mince (règle AdSense, BANQUE_PROMPTS §1.6).

import { isLicenceExcellence, isMaster, isMasterDroit } from "./concoursNiveaux.js";

export const MIN_SUJETS = 5;

// Une entrée par sous-filière de lib/taxonomy.js. `article` : id dans
// blog.json de l'article « matières à préparer » fusionné dans le hub.
export const MASTER_HUBS = [
  { slug: "cca", filiere: "Comptabilité, Contrôle & Audit (CCA)", nom: "Master CCA", long: "Comptabilité, contrôle et audit", article: "les_matieres_a_preparer_pour_le_master_cca" },
  { slug: "finance", filiere: "Finance d'Entreprise & Ingénierie Financière", nom: "Master Finance", long: "Finance d'entreprise et ingénierie financière", article: "les_matieres_a_preparer_pour_le_master_finance" },
  { slug: "banque-assurance", filiere: "Banque, Assurance & Marchés Financiers", nom: "Master Banque et Assurance", long: "Banque, assurance et marchés financiers", article: "les_matieres_a_preparer_pour_le_master_banque_assurance_marches_financiers" },
  { slug: "fiscalite", filiere: "Fiscalité & Gestion Financière", nom: "Master Fiscalité", long: "Fiscalité et gestion financière", article: "les_matieres_a_preparer_pour_le_master_fiscalite_gestion_financiere" },
  { slug: "actuariat", filiere: "Actuariat & Ingénierie Mathématique-Financière", nom: "Master Actuariat", long: "Actuariat et ingénierie mathématique et financière", article: "les_matieres_a_preparer_pour_le_master_actuariat" },
  { slug: "management-strategique", filiere: "Management Stratégique & Gestion des Organisations", nom: "Master Management stratégique", long: "Management stratégique et gestion des organisations" },
  { slug: "grh", filiere: "Gestion des Ressources Humaines (GRH)", nom: "Master GRH", long: "Gestion des ressources humaines", article: "les_matieres_a_preparer_pour_le_master_grh" },
  { slug: "entrepreneuriat", filiere: "Entrepreneuriat & Management de Projets", nom: "Master Entrepreneuriat", long: "Entrepreneuriat et management de projets", article: "les_matieres_a_preparer_pour_le_master_entrepreneuriat" },
  { slug: "management-public", filiere: "Management Public & Gouvernance Territoriale", nom: "Master Management public", long: "Management public et gouvernance territoriale" },
  { slug: "marketing", filiere: "Marketing & Stratégie Commerciale", nom: "Master Marketing", long: "Marketing et stratégie commerciale", article: "les_matieres_a_preparer_pour_le_master_marketing_strategie_commerciale" },
  { slug: "marketing-digital", filiere: "Marketing Digital & E-Commerce", nom: "Master Marketing digital", long: "Marketing digital et e-commerce" },
  { slug: "commerce-international", filiere: "Commerce International", nom: "Master Commerce international", long: "Commerce international", article: "les_matieres_a_preparer_pour_le_master_commerce_international" },
  { slug: "logistique", filiere: "Logistique & Supply Chain Management", nom: "Master Logistique", long: "Logistique et supply chain management", article: "les_matieres_a_preparer_pour_le_master_logistique_supply_chain" },
  { slug: "analyse-politiques-economiques", filiere: "Analyse et Politiques Économiques (APE)", nom: "Master Analyse et politiques économiques", long: "Analyse et politiques économiques" },
  { slug: "economie-internationale", filiere: "Économie Internationale & Développement", nom: "Master Économie internationale", long: "Économie internationale et développement", article: "les_matieres_a_preparer_pour_le_master_economie_internationale_developpement" },
  { slug: "economie-sociale-solidaire", filiere: "Économie Sociale et Solidaire (ESS)", nom: "Master Économie sociale et solidaire", long: "Économie sociale et solidaire" },
  { slug: "economie-verte", filiere: "Économie Verte & Développement Durable", nom: "Master Économie verte", long: "Économie verte et développement durable" },
  { slug: "econometrie", filiere: "Économétrie & Modélisation Économique", nom: "Master Économétrie", long: "Économétrie et modélisation économique", article: "les_matieres_a_preparer_pour_le_master_econometrie" },
  { slug: "data-science", filiere: "Data Science, IA & Business Analytics", nom: "Master Data science", long: "Data science, IA et business analytics" },
  { slug: "droit-des-affaires", filiere: "Droit des Affaires & de l'Entreprise", nom: "Master Droit des affaires", long: "Droit des affaires et de l'entreprise", article: "les_matieres_a_preparer_pour_le_master_droit_des_affaires" },
  { slug: "contentieux-arbitrage", filiere: "Contentieux, Justice & Modes Alternatifs", nom: "Master Contentieux et arbitrage", long: "Contentieux, justice et modes alternatifs" },
  { slug: "droit-civil-famille-immobilier", filiere: "Droit Civil, Famille & Immobilier", nom: "Master Droit civil, famille et immobilier", long: "Droit civil, famille et immobilier" },
  { slug: "droit-public-science-politique", filiere: "Droit Public & Science Politique", nom: "Master Droit public et science politique", long: "Droit public et science politique" },
];

// Article « FSJES <ville> : concours Master, filières et conseils » fusionné
// dans le hub de la ville (seulement s'il était publié).
const ARTICLES_VILLE = {
  casablanca: "fsjes_casablanca_concours_master_filieres_et_conseils",
  rabat: "fsjes_rabat_concours_master_filieres_et_conseils",
  agadir: "fsjes_agadir_concours_master_filieres_et_conseils",
  meknes: "fsjes_meknes_concours_master_filieres_et_conseils",
  fes: "fsjes_fes_concours_master_filieres_et_conseils",
  mohammedia: "fsjes_mohammedia_concours_master_filieres_et_conseils",
  marrakech: "fsjes_marrakech_concours_master_filieres_et_conseils",
  settat: "fsjes_settat_concours_master_filieres_et_conseils",
  kenitra: "fsjes_kenitra_concours_master_filieres_et_conseils",
  sale: "fsjes_sale_concours_master_filieres_et_conseils",
};

export function slugVille(ville) {
  return String(ville || "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const villeHref = (ville) => `/concours/ville/${slugVille(ville)}`;
export const masterHref = (hub) => `/concours/master/${hub.slug}`;

// Un hub de master ne liste que les concours de master (économie-gestion et
// droit) : une licence d'excellence CCA n'est pas un master CCA.
const estMaster = (c) => isMaster(c) || isMasterDroit(c);

// Hubs publiés, calculés sur la liste publique (getPublicConcours).
export function masterHubs(concours) {
  return MASTER_HUBS.map((h) => ({ ...h, sujets: concours.filter((c) => estMaster(c) && c.filiere === h.filiere) })).filter(
    (h) => h.sujets.length >= MIN_SUJETS
  );
}

// Les villes, avec tous les niveaux (master, master de droit, licence
// d'excellence) : un étudiant d'Agadir cherche tout ce qui se passe à Agadir.
export function villeHubs(concours) {
  const parVille = new Map();
  for (const c of concours) {
    if (!c.ville) continue;
    if (!parVille.has(c.ville)) parVille.set(c.ville, []);
    parVille.get(c.ville).push(c);
  }
  return [...parVille.entries()]
    .filter(([, sujets]) => sujets.length >= MIN_SUJETS)
    .map(([ville, sujets]) => ({ ville, slug: slugVille(ville), sujets, article: ARTICLES_VILLE[slugVille(ville)] || null }))
    .sort((a, b) => b.sujets.length - a.sujets.length || a.ville.localeCompare(b.ville, "fr"));
}

export function masterHubDuConcours(hubs, c) {
  return estMaster(c) ? hubs.find((h) => h.filiere === c.filiere) || null : null;
}

// Articles fusionnés : id → adresse du hub. Sert à la liste du blog et au
// sitemap (l'article n'y figure plus) et aux liens réécrits dans blog.json.
export function articlesFusionnes(concours) {
  const out = new Map();
  for (const h of masterHubs(concours)) if (h.article) out.set(h.article, masterHref(h));
  for (const v of villeHubs(concours)) if (v.article) out.set(v.article, villeHref(v.ville));
  return out;
}

// Chiffres d'une liste de sujets, pour le texte et les statistiques du hub.
export function chiffres(sujets) {
  const annees = sujets.map((c) => Number(c.annee)).filter((n) => n > 1990);
  const compte = (f) => {
    const m = new Map();
    for (const c of sujets) {
      const k = f(c);
      if (k) m.set(k, (m.get(k) || 0) + 1);
    }
    return [...m.entries()].sort((a, b) => b[1] - a[1] || String(a[0]).localeCompare(String(b[0]), "fr"));
  };
  const diffs = sujets.map((c) => parseInt(String(c.difficulte || ""), 10)).filter((n) => n >= 1 && n <= 5);
  return {
    total: sujets.length,
    anneeMin: annees.length ? Math.min(...annees) : null,
    anneeMax: annees.length ? Math.max(...annees) : null,
    etablissements: compte((c) => c.etablissement),
    villes: compte((c) => c.ville),
    filieres: compte((c) => c.filiere),
    niveaux: {
      master: sujets.filter(isMaster).length,
      droit: sujets.filter(isMasterDroit).length,
      excellence: sujets.filter(isLicenceExcellence).length,
    },
    difficulte: diffs.length ? Math.round((diffs.reduce((a, b) => a + b, 0) / diffs.length) * 10) / 10 : null,
  };
}
