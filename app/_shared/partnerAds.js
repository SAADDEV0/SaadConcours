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
    desc: "Bannière large juste sous le menu, sur toutes les pages du site.",
  },
  {
    key: "sidebar",
    label: "Colonne latérale",
    desc: "Encart vertical collé à droite. Visible uniquement sur grands écrans (≥ 1280 px).",
  },
  {
    key: "footer",
    label: "Bas de page",
    desc: "Bannière large juste avant le pied de page, sur toutes les pages du site.",
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

  // Lazy-loading only in the footer zone. The sidebar rail is a
  // max-height/overflow-y scroll container, so a lazy image there deadlocks:
  // the rail has no height until the image loads, and the image never loads
  // because a 0-height scrollport never intersects it. Header and sidebar are
  // both above the fold anyway.
  const loading = placement === "footer" ? "lazy" : "eager";

  const body = src
    ? `<img src="${esc(src)}" alt="${alt}" loading="${loading}">`
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
