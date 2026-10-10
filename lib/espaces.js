// Registre des espaces du site — la seule liste à toucher pour ajouter une
// section.
//
// Le header, le menu du téléphone, la barre d'espace (sous le header), le
// pied de page et le « Je prépare… » de l'accueil lisent tous ce fichier. Aucun de ces composants ne connaît les
// espaces par leur nom.
//
// Un espace = un public (lycéen, étudiant de licence, candidat au master…),
// pas un type de contenu. Chaque espace a :
//   key       identifiant stable (retenu dans le navigateur : sc_espace) ;
//   label     nom court du header (« Licence ») ;
//   long      nom complet (barre d'espace, menu, pied de page) ;
//   audience  à qui il s'adresse (« Lycée »), au-dessus du titre de sa
//             section sur l'accueil ;
//   couleur   couleur de repère de l'espace : indigo, orange, teal, gold,
//             rose ou sky (classes .esp-c-* de globals.css). Jamais rouge ni vert,
//             réservés aux corrections et aux bonnes réponses ;
//   desc      une ligne sous le nom (menu, accueil) ; peut être une fonction
//             des contenus publiés (Set), quand les onglets s'ouvrent un à un ;
//   hub       page d'entrée de l'espace ;
//   tabs      onglets de la barre d'espace : { label, href, keys, contenu? }
//             où `keys` sont les valeurs de `active` passées à chromeHtml()
//             par les pages de cet onglet, et `contenu` la clé de
//             lib/contenusPublies.mjs sans laquelle l'onglet reste caché ;
//   cours / sujets / entrainement
//             destinations des onglets « Cours », « Sujets » et « QCM » de
//             la barre du bas, plus lus depuis son retrait (2026-10-10) ;
//   enabled   false pour retirer l'espace du site. Un espace vide (aucun
//             onglet visible) n'apparaît nulle part, même à true : une
//             rubrique « bientôt » est exactement ce que la relecture
//             AdSense sanctionne (BANQUE_PROMPTS §1.6).
//
// Recette complète pour ajouter un espace : BANQUE_PROMPTS.md, « Ajouter une
// section ».

export const ESPACES = [
  {
    key: "bac",
    label: "Bac",
    long: "Bac Éco & Gestion",
    audience: "Lycée",
    couleur: "orange",
    desc: "Cours du 2ᵉ Bac chapitre par chapitre, exercices corrigés et examens nationaux.",
    hub: "/bac/2bac",
    tabs: [{ label: "Cours et examens nationaux", href: "/bac/2bac", keys: ["bac"] }],
    cours: "/bac/2bac",
    sujets: "/bac/2bac#examens",
    entrainement: "/bac/2bac",
    enabled: true,
  },
  {
    // École nationale de commerce et de gestion : le concours d'accès après
    // le Bac (TAFEM) puis les cours du cycle, S1 à S10. Les sujets vivent
    // dans concours.json avec niveau: "post_bac" (lib/concoursNiveaux.js),
    // les cours dans public/data/encg.json (lib/encg.js). Chaque onglet
    // n'apparaît qu'avec son contenu publié (champ `contenu`).
    key: "encg",
    label: "ENCG",
    long: "ENCG",
    audience: "École de commerce, après le Bac",
    couleur: "sky",
    desc: (ouverts) =>
      ouverts.has("concours-post-bac") && ouverts.has("encg-cours")
        ? "Sujets réels du concours TAFEM, puis les cours de l'ENCG du S1 au S10, module par module."
        : ouverts.has("concours-post-bac")
          ? "Sujets réels du concours d'accès TAFEM, avec corrigés détaillés."
          : "Cours de l'ENCG du S1 au S10, module par module, avec exercices corrigés.",
    hub: "/encg",
    tabs: [
      { label: "Concours TAFEM", href: "/concours/post-bac", keys: ["concours-pb"], contenu: "concours-post-bac" },
      { label: "Cours S1 → S10", href: "/encg", keys: ["encg"], contenu: "encg-cours" },
    ],
    cours: "/encg",
    sujets: "/concours/post-bac",
    entrainement: "/evaluation",
    enabled: true,
  },
  {
    key: "licence",
    label: "Licence",
    long: "Licence FSJES",
    audience: "Université",
    couleur: "teal",
    desc: "Cours du S1 au S6 module par module, exercices corrigés et QCM.",
    hub: "/cours",
    tabs: [
      { label: "Cours S1 → S6", href: "/cours", keys: ["cours"] },
      { label: "QCM par module", href: "/evaluation", keys: [] },
    ],
    cours: "/cours",
    sujets: "/concours/licence-excellence",
    entrainement: "/evaluation",
    enabled: true,
  },
  {
    // Concours d'accès en S5 après le DEUG : un public à part (il a fini ses
    // cours de tronc commun et prépare une sélection), d'où son espace.
    key: "excellence",
    label: "Licence d'excellence",
    long: "Concours Licence d'excellence",
    audience: "Après le DEUG",
    couleur: "gold",
    desc: "Sujets réels des concours d'accès en S5 (FSJES, FP, EST), avec corrigés détaillés.",
    hub: "/concours/licence-excellence",
    tabs: [
      { label: "Sujets de concours", href: "/concours/licence-excellence", keys: ["concours-le"] },
      { label: "Réviser le DEUG (cours S1 → S4)", href: "/cours", keys: [] },
    ],
    cours: "/cours",
    sujets: "/concours/licence-excellence",
    entrainement: "/evaluation",
    enabled: true,
  },
  {
    key: "master",
    label: "Master",
    long: "Concours Master",
    audience: "Après la licence",
    couleur: "indigo",
    desc: "Sujets réels des concours d'accès des FSJES et ENCG, avec corrigés détaillés.",
    hub: "/concours",
    tabs: [
      { label: "Sujets de concours", href: "/concours", keys: ["concours"] },
      { label: "Concours blancs (QCM)", href: "/evaluation", keys: [] },
      { label: "Guides de préparation", href: "/blog", keys: [] },
    ],
    cours: "/cours",
    sujets: "/concours",
    entrainement: "/evaluation",
    enabled: true,
  },
];

// Outils communs à tous les espaces : affichés à droite des espaces dans le
// header, dans leur propre groupe du menu.
export const OUTILS = [
  { key: "eval", label: "QCM", long: "QCM et concours blancs", desc: "S'entraîner module par module, corrigé à chaque question", href: "/evaluation" },
  { key: "blog", label: "Blog", long: "Méthode et orientation", desc: "Guides des facultés, méthode, choix du master", href: "/blog" },
];

// Contenus publiés, calculés au build (lib/contenusPublies.mjs, inscrits par
// next.config.mjs). Un onglet qui porte `contenu` n'apparaît que si ce
// contenu est publié ; un espace sans onglet visible n'apparaît pas, et son
// hub devient son premier onglet visible si le hub prévu n'en est pas un.
const OUVERTS = new Set(String(process.env.SC_CONTENUS || "").split(",").filter(Boolean));

function ouvrir(e) {
  if (!e.enabled) return null;
  const tabs = e.tabs.filter((t) => !t.contenu || OUVERTS.has(t.contenu));
  if (!tabs.length) return null;
  const hub = tabs.some((t) => t.href === e.hub) ? e.hub : tabs[0].href;
  return { ...e, tabs, hub, desc: typeof e.desc === "function" ? e.desc(OUVERTS) : e.desc };
}

export const ESPACES_ACTIFS = ESPACES.map(ouvrir).filter(Boolean);

// Un contenu à onglet (cours ENCG, sujets post-bac) est-il publié ?
export function contenuOuvert(cle) {
  return OUVERTS.has(cle);
}

// Espace d'une page, d'après le `active` passé à chromeHtml(). L'onglet
// d'origine d'une clé partagée (« eval » n'est l'onglet d'aucun espace en
// propre) reste sans espace : la page n'affiche pas de barre d'espace.
export function espaceOfActive(active) {
  if (!active) return null;
  return ESPACES_ACTIFS.find((e) => e.tabs.some((t) => t.keys.includes(active))) || null;
}

// Classe CSS qui pose les couleurs de l'espace (--esp, --esp-fill, --esp-tint).
export function espaceClass(espace) {
  return `esp-c-${espace?.couleur || "indigo"}`;
}

export function espaceByKey(key) {
  return ESPACES_ACTIFS.find((e) => e.key === key) || null;
}

// Espace déduit d'une adresse : sert à retenir l'espace du visiteur
// (sc_espace) quand il ouvre un hub, et à migrer l'ancien sc_cours.
export function espaceOfPath(path) {
  const p = String(path || "").replace(/\/+$/, "") || "/";
  let best = null;
  for (const e of ESPACES_ACTIFS) {
    for (const href of [e.hub, ...e.tabs.map((t) => t.href)]) {
      const h = href.split("#")[0];
      if (h === "/evaluation" || h === "/blog" || h === "/cours" && e.key !== "licence") continue; // partagés
      if ((p === h || p.startsWith(h + "/")) && (!best || h.length > best.len)) best = { e, len: h.length };
    }
  }
  return best?.e || null;
}
