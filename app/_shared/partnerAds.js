// Bannières partenaires — les publicités "maison" (annonceurs qui contactent
// Saad directement), par opposition à Google AdSense (app/_shared/AdSlot.js).
// Rien à voir avec AdSense : pas de script tiers, juste une image ou un
// encart texte servis depuis nos propres réglages, avec un lien de
// destination et un compteur d'affichages/clics maison.
//
// Le modèle vit dans data/settings.json sous `partnerAds` (+ l'interrupteur
// général `partnerAdsEnabled`), édité depuis /admin/reglages/partenaires.
// Chaque entrée :
//   { id, name, image, link, title, description, cta, placements: [],
//     active, startDate, endDate, contact, note }
// `contact` et `note` sont privés — /api/settings les retire avant de
// répondre au site public (voir app/api/settings/route.js).

export const PARTNER_PLACEMENTS = [
  {
    key: "header",
    label: "Haut de page",
    desc: "Bandeau sous le menu, sur toutes les pages. Format 970×120 (hauteur limitée à 110 px, 70 px sur mobile).",
  },
  {
    key: "sidebar",
    label: "Colonne latérale",
    desc:
      "Sous les filtres de la page Concours, et en rail flottant à droite sur les grands écrans " +
      "(≥ 1600 px), là où la marge est réellement libre. Format 160×600 ou 300×600.",
  },
  {
    key: "footer",
    label: "Bas de page",
    desc: "Bandeau avant le pied de page, sur toutes les pages. Format 970×120. Chargé en différé.",
  },
];

export const PARTNER_PLACEMENT_KEYS = PARTNER_PLACEMENTS.map((p) => p.key);

export function placementLabel(key) {
  return PARTNER_PLACEMENTS.find((p) => p.key === key)?.label || key;
}

export function todayIso() {
  return new Date().toISOString().slice(0, 10);
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

export function adsForPlacement(settings, placement, today = todayIso()) {
  if (!settings || settings.partnerAdsEnabled === false) return [];
  const list = Array.isArray(settings.partnerAds) ? settings.partnerAds : [];
  return list.filter((ad) => (ad.placements || []).includes(placement) && isAdLive(ad, today));
}

// Un chemin stocké en "images/partenaires/x.png" est servi depuis /public ;
// une URL absolue (bannière hébergée par l'annonceur) passe telle quelle.
export function adImageSrc(image) {
  if (!image) return "";
  if (/^(https?:)?\/\//.test(image) || image.startsWith("data:")) return image;
  return image.startsWith("/") ? image : "/" + image;
}

// Les zones arrivent vides dans le HTML et ne sont remplies qu'une fois
// /api/settings revenu : sans rien, l'insertion de la bannière pousse toute la
// page vers le bas — un décalage de mise en page bien réel, et c'est là le seul
// vrai risque de performance d'une publicité (CLS, qui compte pour le
// référencement).
//
// D'où ce CSS émis côté serveur, dans le HTML initial, uniquement quand un
// annonceur cible effectivement la zone : un ::before réserve exactement la
// boîte que la bannière viendra occuper (même largeur max, même ratio, mêmes
// plafonds de hauteur), et le :empty le fait disparaître à l'instant précis où
// la bannière est insérée. Zéro réservation quand il n'y a pas d'annonceur.
export function reservationCss(placement, ads) {
  if (!ads.length) return "";
  const sized = ads.find((a) => a.image && a.w && a.h);
  const ratio = sized ? `${Number(sized.w)}/${Number(sized.h)}` : "970/120";
  // .pa-zone.pa-zone-x l'emporte sur le .pa-zone:empty{display:none} de
  // globals.css sans dépendre de l'ordre d'injection des feuilles par Next.
  const zone = `.pa-zone.pa-zone-${placement}:empty`;
  // Le padding doit être réservé lui aussi, sinon la zone passe de 112 à
  // 126px au remplissage et on a rétabli 14px de décalage.
  const padding = placement === "header" ? "14px 20px 0" : "0 20px";
  return (
    `${zone}{display:block;padding:${padding};}` +
    `${zone}::before{content:"";display:block;max-width:970px;margin:0 auto;aspect-ratio:${ratio};max-height:112px;}` +
    `@media (max-width:700px){${zone}::before{max-height:72px;}}`
  );
}

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

// Rendu en chaîne HTML (et non en JSX) parce que tout le chrome du site est
// injecté ainsi — voir app/_shared/chrome.js. Réutilisé tel quel par
// l'aperçu du panel admin.
export function partnerAdHtml(ad, placement) {
  const href = safeAdLink(ad.link);
  const tag = href ? "a" : "div";
  const attrs = href
    ? ` href="${esc(href)}" target="_blank" rel="noopener sponsored"`
    : "";
  const src = adImageSrc(ad.image);
  const alt = esc(ad.alt || ad.name || "Publicité");

  // Perf, in order of what actually costs something:
  //  - width/height (captured by the admin when the visual is chosen) let the
  //    browser reserve the box before the bytes arrive — no layout shift, which
  //    is the one thing an ad can do to wreck a Core Web Vitals score.
  //  - fetchpriority="low" keeps a banner from competing with the page's own
  //    LCP image or fonts. An ad is never the reason someone came here.
  //  - lazy only below the fold. The header banner and the sidebar are visible
  //    on arrival, so deferring them just makes them pop in late.
  const dims = ad.w && ad.h ? ` width="${Number(ad.w)}" height="${Number(ad.h)}"` : "";
  const loading = placement === "footer" ? "lazy" : "eager";

  const body = src
    ? `<img src="${esc(src)}" alt="${alt}"${dims} loading="${loading}" decoding="async" fetchpriority="low">`
    : `<span class="pa-text">
        <span class="pa-text-title">${esc(ad.title || ad.name)}</span>
        ${ad.description ? `<span class="pa-text-desc">${esc(ad.description)}</span>` : ""}
        ${href ? `<span class="pa-text-cta">${esc(ad.cta || "En savoir plus")} →</span>` : ""}
      </span>`;

  return `<${tag} class="pa-banner pa-banner-${esc(placement)}${src ? "" : " pa-banner-text"}" data-ad-id="${esc(ad.id)}"${attrs}>
    <span class="pa-tag">Sponsorisé</span>
    ${body}
  </${tag}>`;
}
