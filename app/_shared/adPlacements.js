// Emplacements publicitaires Google AdSense — la seule liste à toucher pour
// ajouter, retirer ou déplacer un bloc.
//
// Les pages posent <AdSlot placement="…" settings={settings} /> ; la console
// (Monétisation › Google AdSense) construit son formulaire et son plan des
// emplacements depuis cette même liste. Rien n'est affiché tant que
// l'interrupteur global (adsEnabled + adsPublisherId) ET celui de
// l'emplacement ne sont pas allumés avec un ID de bloc.
//
// Règles de placement (expérience de lecture d'abord, puis revenus) :
// - jamais au-dessus du titre (H1) ni entre le titre et le début du contenu
//   sur téléphone : l'élève doit voir ce qu'il est venu chercher ;
// - un bloc entre deux parties naturelles (énoncé / corrigé, cours / sujets
//   liés, fin d'article), jamais au milieu d'un paragraphe ou d'un QCM ;
// - au plus 3 blocs par page, colonne latérale comprise ;
// - la colonne latérale (300 px, collante) n'existe que sur grand écran, à
//   côté d'un contenu long (fiche concours, article) ;
// - chaque bloc réserve sa hauteur (`reserve`) : rien ne saute quand l'annonce
//   arrive (CLS), et un bloc sans annonce se replie (data-ad-status=unfilled).
//
// `enabledKey` / `slotKey` : champs de settings.json. Les cinq premiers
// gardent leurs anciens noms pour que les réglages déjà saisis restent
// valables.
//
// `format` : horizontal (bannière responsive), rectangle (dans le contenu),
// vertical (colonne latérale).

export const AD_FORMATS = {
  horizontal: { label: "Bannière responsive", adFormat: "auto", reserve: { mobile: 280, desktop: 120 } },
  rectangle: { label: "Rectangle dans le contenu", adFormat: "auto", reserve: { mobile: 280, desktop: 280 } },
  vertical: { label: "Colonne latérale 300 × 600", adFormat: "vertical", reserve: { mobile: 0, desktop: 600 } },
};

export const AD_PLACEMENTS = [
  {
    key: "home_mid",
    page: "Accueil",
    title: "Entre deux espaces",
    desc: "Après la section Licence, entre deux blocs de liens.",
    format: "horizontal",
    enabledKey: "adsHomeBannerEnabled",
    slotKey: "adsHomeBannerSlot",
  },
  {
    key: "concours_mid",
    page: "Fiche concours",
    title: "Entre énoncé et corrigé",
    desc: "Après l'énoncé et les scans, avant le corrigé.",
    format: "rectangle",
    enabledKey: "adsConcoursMidEnabled",
    slotKey: "adsConcoursMidSlot",
  },
  {
    key: "concours_bottom",
    page: "Fiche concours",
    title: "Fin de fiche",
    desc: "Après le corrigé, avant les matières à réviser et les concours similaires.",
    format: "horizontal",
    enabledKey: "adsConcoursBottomEnabled",
    slotKey: "adsConcoursBottomSlot",
  },
  {
    key: "cours_chapitre",
    page: "Chapitre de cours",
    title: "Sous le chapitre",
    desc: "Sous les onglets Cours / Exercices / Résumé / QCM, avant les sujets liés.",
    format: "horizontal",
    enabledKey: "adsCoursChapitreEnabled",
    slotKey: "adsCoursChapitreSlot",
  },
  {
    key: "cours_module",
    page: "Module de cours",
    title: "Sous la liste des chapitres",
    desc: "Après le sommaire du module, avant sa synthèse.",
    format: "horizontal",
    enabledKey: "adsCoursModuleEnabled",
    slotKey: "adsCoursModuleSlot",
  },
  {
    key: "sidebar",
    page: "Fiches et articles (grand écran)",
    title: "Colonne latérale",
    desc: "Colonne de droite collante, sous le résumé de la fiche. Ordinateur seulement.",
    format: "vertical",
    enabledKey: "adsSidebarEnabled",
    slotKey: "adsSidebarSlot",
  },
  {
    key: "list_bottom",
    page: "Listes (concours, blog, QCM)",
    title: "Sous la liste",
    desc: "Après les résultats, avant le bouton « Voir plus » et le texte de présentation.",
    format: "horizontal",
    enabledKey: "adsListBottomEnabled",
    slotKey: "adsListBottomSlot",
  },
  {
    key: "article_bottom",
    page: "Article de blog",
    title: "Fin d'article",
    desc: "Après le dernier paragraphe, avant les articles liés.",
    format: "rectangle",
    enabledKey: "adsArticleBottomEnabled",
    slotKey: "adsArticleBottomSlot",
  },
];

export function adPlacement(key) {
  return AD_PLACEMENTS.find((p) => p.key === key) || null;
}

// Réglages AdSense d'un emplacement, ou null s'il ne doit rien afficher.
export function adConfig(settings, key) {
  const p = adPlacement(key);
  if (!p || !settings?.adsEnabled || !settings?.adsPublisherId) return null;
  const slot = String(settings[p.slotKey] || "").trim();
  if (!settings[p.enabledKey] || !slot) return null;
  return { ...p, ...AD_FORMATS[p.format], publisherId: settings.adsPublisherId, slot };
}

// Tous les champs de settings.json lus par les emplacements (console).
export const AD_SETTING_KEYS = ["adsEnabled", "adsPublisherId", ...AD_PLACEMENTS.flatMap((p) => [p.enabledKey, p.slotKey])];
