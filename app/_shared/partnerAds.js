// Bannières partenaires — les publicités "maison" (annonceurs qui contactent
// Saad directement), par opposition à Google AdSense (app/_shared/AdSlot.js).
// Rien à voir avec AdSense : pas de script tiers, juste une image ou un
// encart texte servis depuis nos propres réglages, avec un lien de
// destination et un compteur d'affichages/clics maison.
//
// Le modèle vit dans data/settings.json sous `partnerAds` (+ l'interrupteur
// général `partnerAdsEnabled` et les réglages communs `partnerAdsRotationSec`,
// `partnerAdsLabel`, `partnerAdsLabelPosition`), édité depuis
// /admin/monetisation. Chaque entrée :
//   { id, name, image, w, h, imageMobile, mw, mh, logo, link, alt, title,
//     description, cta, colors: { bg, fg, accent }, placements: [],
//     sections: [], device, weight, utm, utmCampaign, active, startDate,
//     endDate, contact, note }
// `contact` et `note` sont privés : seuls les champs de publicAd() sortent
// vers le site public (HTML prérendu et /api/settings).
//
// La configuration publique est inscrite dans chaque page au build (voir
// app/layout.js) : les bannières s'affichent dès l'hydratation, sans attendre
// ni dépendre d'un appel au Worker. Chaque enregistrement depuis la console
// redéploie le site, qui repart donc avec la configuration à jour.

export const PARTNER_PLACEMENTS = [
  {
    key: "header",
    label: "Haut de page",
    desc: "Bandeau sous le menu, sur toutes les pages. Visuel 970×120 (ou 728×90), et 640×200 pour mobile.",
  },
  {
    key: "inline",
    label: "Dans le contenu",
    desc:
      "Au cœur de la page : sur une fiche concours entre l'énoncé et le corrigé, sur un article de blog juste " +
      "après le texte. Visuel 970×250 ou 728×90, et 600×500 (300×250) pour mobile.",
  },
  {
    key: "rail_left",
    label: "Colonne gauche",
    desc:
      "Rail fixe dans la marge gauche — accueil, fiches concours et articles de blog uniquement. N'apparaît que " +
      "sur les écrans assez larges pour l'accueillir sans toucher au contenu (jamais sur mobile). Visuel 160×600.",
  },
  {
    key: "rail_right",
    label: "Colonne droite",
    desc: "Comme la colonne gauche, côté droit. Les deux peuvent être utilisées en même temps.",
  },
  {
    key: "footer",
    label: "Bas de page",
    desc: "Bandeau avant le pied de page, sur toutes les pages. Mêmes formats que le haut de page.",
  },
];

export const PARTNER_PLACEMENT_KEYS = PARTNER_PLACEMENTS.map((p) => p.key);

// Rubriques du site qu'une bannière peut cibler. La clé est posée sur la page
// par chromeHtml() (data-pa-section), à partir de l'onglet actif du menu.
export const PARTNER_SECTIONS = [
  { key: "home", label: "Accueil" },
  { key: "concours", label: "Concours Master" },
  { key: "concours-le", label: "Licence d'excellence" },
  { key: "cours", label: "Cours Licence FSJES" },
  { key: "bac", label: "Cours Bac" },
  { key: "eval", label: "Évaluation (QCM)" },
  { key: "blog", label: "Blog" },
  { key: "boutique", label: "Boutique" },
  { key: "info", label: "Pages d'information (À propos, FAQ, Contact…)" },
];

const SECTION_KEYS = PARTNER_SECTIONS.map((s) => s.key);

// Onglet actif du menu (chromeHtml) → rubrique ciblable.
export function sectionOfNav(active) {
  if (SECTION_KEYS.includes(active)) return active;
  return "info";
}

export const PARTNER_DEVICES = [
  { key: "all", label: "Ordinateur et mobile" },
  { key: "desktop", label: "Ordinateur uniquement" },
  { key: "mobile", label: "Mobile uniquement" },
];

// Même seuil que le CSS des bannières (globals.css) : en dessous, c'est le
// visuel mobile qui s'affiche et les bannières « ordinateur uniquement » se
// taisent.
export const MOBILE_MAX_WIDTH = 700;
export const MOBILE_QUERY = `(max-width: ${MOBILE_MAX_WIDTH}px)`;

export const LABEL_POSITIONS = [
  { key: "above", label: "Au-dessus du visuel" },
  { key: "overlay", label: "Sur le visuel (coin haut gauche)" },
];

export const DEFAULT_ROTATION_SEC = 12;
export const DEFAULT_LABEL = "Sponsorisé";

// Réglages communs à toutes les bannières, bornés : ils viennent d'un champ
// libre du panel et finissent dans chaque page.
export function partnerAdsOptions(settings) {
  const sec = Number(settings?.partnerAdsRotationSec);
  const label = String(settings?.partnerAdsLabel || "").trim().slice(0, 24);
  return {
    rotationSec: Number.isFinite(sec) && sec >= 5 && sec <= 120 ? Math.round(sec) : DEFAULT_ROTATION_SEC,
    label: label || DEFAULT_LABEL,
    labelPosition: settings?.partnerAdsLabelPosition === "overlay" ? "overlay" : "above",
  };
}

export function placementLabel(key) {
  return PARTNER_PLACEMENTS.find((p) => p.key === key)?.label || key;
}

export function sectionLabel(key) {
  return PARTNER_SECTIONS.find((s) => s.key === key)?.label || key;
}

export function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

// Date du jour du visiteur (et non UTC) : une campagne qui finit le 31 doit
// tourner jusqu'à minuit heure du Maroc, pas s'arrêter à 1 h du matin.
export function localTodayIso(d = new Date()) {
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}

export function adWeight(ad) {
  const w = Math.round(Number(ad?.weight));
  return w >= 1 && w <= 5 ? w : 1;
}

// Une bannière est diffusable si elle est active, a de quoi s'afficher
// (image ou titre) et tombe dans sa fenêtre de diffusion. Les dates sont
// facultatives : vide = pas de borne de ce côté.
export function isAdLive(ad, today = todayIso()) {
  if (!ad || ad.active === false) return false;
  if (!ad.image && !ad.title) return false;
  if (ad.startDate && ad.startDate > today) return false;
  if (ad.endDate && ad.endDate < today) return false;
  return true;
}

export function adMatchesSection(ad, section) {
  const list = Array.isArray(ad.sections) ? ad.sections : [];
  return !list.length || !section || list.includes(section);
}

// device : "desktop" | "mobile" | undefined (= n'importe lequel)
export function adMatchesDevice(ad, device) {
  const d = ad.device || "all";
  return d === "all" || !device || d === device;
}

// `section` / `device` absents = pas de filtre : c'est ce que fait le build,
// qui ne connaît ni la page (le CSS de réservation est commun) ni l'écran.
export function adsForPlacement(settings, placement, { today = todayIso(), section, device } = {}) {
  if (!settings || settings.partnerAdsEnabled === false) return [];
  const list = Array.isArray(settings.partnerAds) ? settings.partnerAds : [];
  return list.filter(
    (ad) =>
      (ad.placements || []).includes(placement) &&
      isAdLive(ad, today) &&
      adMatchesSection(ad, section) &&
      adMatchesDevice(ad, device)
  );
}

// Champs publiables d'une bannière — liste blanche plutôt que retrait de
// `contact`/`note` : un champ privé ajouté plus tard au panel ne doit pas
// partir sur le site par défaut.
const PUBLIC_FIELDS = [
  "id", "name", "image", "w", "h", "imageMobile", "mw", "mh", "logo", "link", "alt", "title", "description",
  "cta", "colors", "placements", "sections", "device", "weight", "utm", "utmCampaign", "active", "startDate", "endDate",
];

// Valeurs par défaut omises : elles n'apprennent rien au site et chaque
// page embarque cette liste.
const DEFAULTS = { device: "all", weight: 1, utm: false, active: true };

export function publicAd(ad) {
  const out = {};
  for (const k of PUBLIC_FIELDS) {
    const v = ad[k];
    if (v === undefined || v === "" || DEFAULTS[k] === v) continue;
    if (Array.isArray(v) && !v.length && k !== "placements") continue;
    if (k === "colors" && !(v && (v.bg || v.fg || v.accent))) continue;
    out[k] = v;
  }
  return out;
}

// Ce que chaque page embarque : uniquement les bannières encore diffusables
// ou programmées (une bannière désactivée ou terminée n'a rien à faire dans
// le HTML public), débarrassées de leurs champs privés.
export function publicPartnerAdsConfig(settings, today = todayIso()) {
  if (!settings || settings.partnerAdsEnabled === false) return null;
  const list = Array.isArray(settings.partnerAds) ? settings.partnerAds : [];
  const ads = list
    .filter((ad) => ad && ad.active !== false && (ad.image || ad.title) && !(ad.endDate && ad.endDate < today))
    .filter((ad) => (ad.placements || []).length)
    .map(publicAd);
  if (!ads.length) return null;
  // Mêmes clés que settings.json : le navigateur relit ces réglages avec
  // partnerAdsOptions(), qu'ils viennent d'ici ou de /api/settings.
  const { rotationSec, label, labelPosition } = partnerAdsOptions(settings);
  return {
    partnerAdsEnabled: true,
    partnerAds: ads,
    partnerAdsRotationSec: rotationSec,
    partnerAdsLabel: label,
    partnerAdsLabelPosition: labelPosition,
  };
}

// Un chemin stocké en "images/partenaires/x.png" est servi depuis /public ;
// une URL absolue (bannière hébergée par l'annonceur) passe telle quelle,
// comme les aperçus locaux du panel (blob:).
export function adImageSrc(image) {
  if (!image) return "";
  if (/^(https?:)?\/\//.test(image) || /^(data|blob):/.test(image)) return image;
  return image.startsWith("/") ? image : "/" + image;
}

/* ---------------------------- Rotation --------------------------------
 * Tourniquet pondéré « lisse » (celui de nginx) : chaque bannière revient en
 * proportion exacte de son poids, et les passages sont entrelacés — un poids
 * 3 contre 1 donne A A B A, jamais A A A B. Le point de départ est tiré au
 * sort pour qu'un visiteur qui repart vite ne voie pas toujours le même
 * annonceur. */
export function rotationOrder(ads) {
  const n = ads.length;
  if (n <= 1) return ads.map((_, i) => i);
  const weights = ads.map(adWeight);
  const total = weights.reduce((a, b) => a + b, 0);
  const current = new Array(n).fill(0);
  const order = [];
  for (let step = 0; step < total; step++) {
    let best = 0;
    for (let i = 0; i < n; i++) {
      current[i] += weights[i];
      if (current[i] > current[best]) best = i;
    }
    current[best] -= total;
    order.push(best);
  }
  return order;
}

/* ------------------------ Réservation d'espace ------------------------
 * Les zones arrivent vides dans le HTML et ne sont remplies qu'à
 * l'hydratation : sans rien, l'insertion de la bannière pousse toute la page
 * vers le bas — un décalage de mise en page bien réel, et c'est là le seul
 * vrai risque de performance d'une publicité (CLS, qui compte pour le
 * référencement).
 *
 * D'où ce CSS émis côté serveur, dans le HTML initial, uniquement quand un
 * annonceur cible effectivement la zone : ::before réserve la ligne de la
 * mention « Sponsorisé » (quand elle est au-dessus du visuel) et ::after
 * exactement la boîte de la bannière (même largeur max, même ratio, même
 * bordure, mêmes plafonds de hauteur) ; :empty les fait disparaître à
 * l'instant précis où la bannière est insérée. La réservation suit le ciblage
 * : par taille d'écran (media query) et par rubrique (:has sur le marqueur de
 * page) — une bannière réservée au blog ne creuse pas de trou sur l'accueil.
 * Zéro réservation quand il n'y a pas d'annonceur. */

// Doit rester aligné sur globals.css (bloc « Bannières partenaires »).
const ZONE_BOX = {
  header: { pad: ["14px 20px 0", "12px 16px 0"], maxH: [120, 120] },
  footer: { pad: ["0 20px", "0 16px"], maxH: [120, 120] },
  inline: { pad: ["0", "0"], maxH: [250, 300] },
};
export const TEXT_AD_MIN_H = [88, 112]; // [ordinateur, mobile]
const LABEL_LINE_H = 16;
const LABEL_GAP = 4;

function refRatio(ads, mobile) {
  const ref = ads.find((a) => a.image);
  if (!ref) return null;
  if (mobile && ref.imageMobile && ref.mw && ref.mh) return `${Number(ref.mw)}/${Number(ref.mh)}`;
  if (ref.w && ref.h) return `${Number(ref.w)}/${Number(ref.h)}`;
  return "970/120";
}

export function reservationCss(placement, ads, { labelPosition = "above" } = {}) {
  const box = ZONE_BOX[placement];
  if (!box || !ads.length) return "";
  let css = "";
  [false, true].forEach((mobile, d) => {
    const eligible = ads.filter((a) => adMatchesDevice(a, mobile ? "mobile" : "desktop"));
    if (!eligible.length) return;
    const everywhere = eligible.some((a) => !(Array.isArray(a.sections) && a.sections.length));
    const sections = everywhere ? [] : [...new Set(eligible.flatMap((a) => a.sections))].filter((s) => SECTION_KEYS.includes(s));
    // .pa-zone.pa-zone-x l'emporte sur le .pa-zone:empty{display:none} de
    // globals.css sans dépendre de l'ordre d'injection des feuilles par Next.
    const base = `.pa-zone.pa-zone-${placement}:empty`;
    const sel = (pseudo = "") =>
      sections.length
        ? sections.map((s) => `:root:has(#topProgressBar[data-pa-section="${s}"]) ${base}${pseudo}`).join(",")
        : base + pseudo;
    const ratio = refRatio(eligible, mobile);
    let rules =
      `${sel()}{display:block;padding:${box.pad[d]};}` +
      (labelPosition === "above"
        ? `${sel("::before")}{content:"";display:block;max-width:970px;margin:0 auto ${LABEL_GAP}px;height:${LABEL_LINE_H}px;}`
        : "");
    // Une bannière image : la boîte de contenu suit le ratio du visuel,
    // bordure de 1 px comprise (box-sizing:content-box, comme l'image dans
    // son cadre). Un encart texte : sa hauteur minimale fixe.
    rules += ratio
      ? `${sel("::after")}{content:"";display:block;box-sizing:content-box;max-width:968px;margin:0 auto;border:1px solid transparent;aspect-ratio:${ratio};max-height:${box.maxH[d]}px;}`
      : `${sel("::after")}{content:"";display:block;max-width:970px;margin:0 auto;height:${TEXT_AD_MIN_H[d]}px;}`;
    css += `@media ${mobile ? `(max-width:${MOBILE_MAX_WIDTH}px)` : `(min-width:${MOBILE_MAX_WIDTH + 1}px)`}{${rules}}`;
  });
  return css;
}

/* ------------------------------- Rendu -------------------------------- */

function esc(s) {
  return String(s ?? "").replace(
    /[&<>"']/g,
    (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m])
  );
}

// Seuls http(s) et mailto: sont acceptés comme destination — le lien vient
// d'un champ libre du panel, et un `javascript:` collé là s'exécuterait sur
// chaque page du site.
export function safeAdLink(link) {
  const raw = String(link || "").trim();
  if (!raw) return "";
  if (/^https?:\/\//i.test(raw) || /^mailto:/i.test(raw)) return raw;
  if (/^[\w.-]+\.[a-z]{2,}(\/|$)/i.test(raw)) return "https://" + raw;
  return "";
}

function slug(s) {
  return String(s || "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

// Paramètres UTM ajoutés au lien quand l'annonceur le souhaite : c'est ce qui
// lui permet de voir, dans ses propres statistiques, les visites venues de
// SaadConcours. Un paramètre déjà présent dans le lien n'est jamais écrasé.
export function adHref(ad, placement) {
  const href = safeAdLink(ad.link);
  if (!href || !ad.utm || !/^https?:/i.test(href)) return href;
  try {
    const url = new URL(href);
    const params = {
      utm_source: "saadconcours",
      utm_medium: "banniere",
      utm_campaign: slug(ad.utmCampaign || ad.name) || "partenaire",
      utm_content: placement,
    };
    for (const [k, v] of Object.entries(params)) if (!url.searchParams.has(k)) url.searchParams.set(k, v);
    return url.toString();
  } catch {
    return href;
  }
}

const HEX = /^#[0-9a-f]{6}$/i;

// Texte blanc ou noir sur la couleur du bouton : celui des deux qui contraste
// le plus (0,179 = luminance où les deux contrastes s'égalisent — un bouton
// ambre ou vert clair appelle du texte foncé).
function readableOn(hex) {
  const n = parseInt(hex.slice(1), 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) => {
    const x = c / 255;
    return x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b > 0.179 ? "#111827" : "#ffffff";
}

function colorVars(colors) {
  if (!colors) return "";
  const vars = [];
  if (HEX.test(colors.bg || "")) vars.push(`--pa-bg:${colors.bg}`);
  if (HEX.test(colors.fg || "")) vars.push(`--pa-fg:${colors.fg}`);
  if (HEX.test(colors.accent || "")) vars.push(`--pa-accent:${colors.accent}`, `--pa-accent-fg:${readableOn(colors.accent)}`);
  return vars.length ? ` style="${vars.join(";")}"` : "";
}

// Rendu en chaîne HTML (et non en JSX) parce que tout le chrome du site est
// injecté ainsi — voir app/_shared/chrome.js. Réutilisé tel quel par
// l'aperçu du panel admin, qui passe ses propres URL d'images.
//
// Structure : .pa-unit (mention + bannière) > .pa-banner (le lien).
export function partnerAdHtml(ad, placement, { label = DEFAULT_LABEL, labelPosition = "above" } = {}) {
  const href = adHref(ad, placement);
  const tag = href ? "a" : "div";
  const attrs = href ? ` href="${esc(href)}" target="_blank" rel="noopener sponsored"` : "";
  const src = adImageSrc(ad.image);
  const alt = esc(ad.alt || ad.name || "Publicité");
  const isRail = placement === "rail_left" || placement === "rail_right";

  // Perf, in order of what actually costs something:
  //  - width/height (captured by the admin when the visual is chosen) let the
  //    browser reserve the box before the bytes arrive — no layout shift, which
  //    is the one thing an ad can do to wreck a Core Web Vitals score. The
  //    mobile <source> carries its own, so each screen gets the right ratio.
  //  - fetchpriority="low" keeps a banner from competing with the page's own
  //    LCP image or fonts. An ad is never the reason someone came here.
  //  - lazy only below the fold. The header banner and the rails are visible
  //    on arrival, so deferring them just makes them pop in late.
  const dims = ad.w && ad.h ? ` width="${Number(ad.w)}" height="${Number(ad.h)}"` : "";
  const loading = placement === "footer" || placement === "inline" ? "lazy" : "eager";
  const mobileSrc = !isRail && ad.imageMobile ? adImageSrc(ad.imageMobile) : "";
  const mobileDims = ad.mw && ad.mh ? ` width="${Number(ad.mw)}" height="${Number(ad.mh)}"` : "";

  let body;
  if (src) {
    const img = `<img src="${esc(src)}" alt="${alt}"${dims} loading="${loading}" decoding="async" fetchpriority="low">`;
    body = mobileSrc
      ? `<picture><source media="${MOBILE_QUERY}" srcset="${esc(mobileSrc)}"${mobileDims}>${img}</picture>`
      : img;
  } else {
    const logo = ad.logo ? `<img class="pa-text-logo" src="${esc(adImageSrc(ad.logo))}" alt="" width="52" height="52" loading="${loading}" decoding="async">` : "";
    body =
      logo +
      `<span class="pa-text"><span class="pa-text-title">${esc(ad.title || ad.name)}</span>` +
      (ad.description ? `<span class="pa-text-desc">${esc(ad.description)}</span>` : "") +
      `</span>` +
      (href ? `<span class="pa-text-cta">${esc(ad.cta || "En savoir plus")} →</span>` : "");
  }

  const pos = labelPosition === "overlay" ? "overlay" : "above";
  return (
    `<div class="pa-unit pa-unit-${esc(placement)} pa-label-${pos}" data-ad-id="${esc(ad.id)}">` +
    `<span class="pa-tag">${esc(label)}</span>` +
    `<${tag} class="pa-banner${src ? "" : " pa-banner-text"}"${attrs}${src ? "" : colorVars(ad.colors)}>${body}</${tag}>` +
    `</div>`
  );
}
