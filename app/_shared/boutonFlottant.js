// Bouton flottant en bas à droite de toutes les pages publiques (celles qui ont
// le pied de page). Personnalisable dans la console, Réglages › Général ›
// Bouton flottant : réseau (logo et couleur), lien, texte, couleur.
//
// Réglages lus au build par app/layout.js, qui pose le bouton :
//   whatsappFabEnabled  false = masqué (absent = affiché)
//   fabNetwork          clé de FAB_RESEAUX (défaut "whatsapp")
//   fabLink             lien saisi ; vide = lien par défaut du réseau (ci-dessous)
//   fabLabel            texte à côté du logo ; absent = « Cahiers de préparation »,
//                       "" = logo seul (rond)
//   fabColor            couleur #rrggbb ; vide = couleur du réseau
//
// Aucun import serveur : la console (aperçu) et le layout utilisent ce module.

import { WHATSAPP_NUMERO } from "../../lib/boutique";

export const FAB_TEXTE_DEFAUT = "Cahiers de préparation";
const WHATSAPP_MESSAGE = "Bonjour, je souhaite acheter le cahier de préparation du module : ";
const WA_DEFAUT = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const SVG = (inner, attrs = 'fill="currentColor"') => `<svg viewBox="0 0 24 24" ${attrs} aria-hidden="true">${inner}</svg>`;

// `social` : réglage « Réseaux sociaux » utilisé quand aucun lien n'est saisi.
export const FAB_RESEAUX = [
  {
    key: "whatsapp",
    label: "WhatsApp",
    color: "#25d366",
    ph: "https://wa.me/212… ou numéro",
    icon: SVG('<path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.3-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.6-.6-2.7-1.2-4.5-3.9-4.6-4.1-.1-.2-1.1-1.5-1.1-2.8s.7-2 .9-2.3c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.6.7 1.9.8 2 .1.2.1.4 0 .6-.1.2-.2.4-.3.5-.2.2-.3.4-.1.7.2.3.9 1.4 1.9 2.3 1.3 1.2 2.4 1.5 2.7 1.7.3.2.5.1.7-.1.2-.2.8-.9 1-1.2.2-.3.4-.3.7-.2.3.1 1.8.8 2.1.9.3.2.5.2.6.4.1.2.1.9-.1 1.5Z"/>'),
  },
  {
    key: "telegram",
    label: "Telegram",
    color: "#229ed9",
    social: "telegram",
    ph: "https://t.me/toncanal",
    icon: SVG('<path d="m21.9 4.5-3.2 15.3c-.2 1.1-.9 1.3-1.8.8l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.3-5 9.3-8.4c.4-.4-.1-.6-.6-.2L6.2 13 1.3 11.5c-1.1-.3-1.1-1.1.2-1.6L20.5 3c.9-.3 1.7.2 1.4 1.5Z"/>'),
  },
  {
    key: "facebook",
    label: "Facebook",
    color: "#1877f2",
    social: "facebook",
    ph: "https://facebook.com/tapage",
    icon: SVG('<path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.06 5.66 21.2 10.44 22v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22C18.34 21.2 22 17.06 22 12.06Z"/>'),
  },
  {
    key: "messenger",
    label: "Messenger",
    color: "#0084ff",
    ph: "https://m.me/tapage",
    icon: SVG('<path d="M12 2C6.4 2 2 6.1 2 11.7c0 2.9 1.2 5.5 3.3 7.2V22l3-1.7c1.2.3 2.4.5 3.7.5 5.6 0 10-4.1 10-9.6S17.6 2 12 2Zm1 12.9-2.6-2.7-5 2.7 5.5-5.8 2.6 2.7 4.9-2.7-5.4 5.8Z"/>'),
  },
  {
    key: "instagram",
    label: "Instagram",
    color: "#e1306c",
    gradient: "linear-gradient(45deg,#f58529,#dd2a7b 55%,#8134af)",
    social: "instagram",
    ph: "https://instagram.com/toncompte",
    icon: SVG('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/>', 'fill="none" stroke="currentColor" stroke-width="1.8"'),
  },
  {
    key: "tiktok",
    label: "TikTok",
    color: "#111111",
    social: "tiktok",
    ph: "https://tiktok.com/@toncompte",
    icon: SVG('<path d="M16.6 5.8c-.9-.9-1.4-2.1-1.4-3.4h-3.3v13.3c0 1.5-1.2 2.7-2.7 2.7a2.7 2.7 0 0 1 0-5.4c.3 0 .5 0 .8.1v-3.4a6.1 6.1 0 0 0-.8-.1 6.1 6.1 0 1 0 6.1 6.1V9.4a7.4 7.4 0 0 0 4.4 1.4V7.5c-1.2 0-2.3-.6-3.1-1.7Z"/>'),
  },
  {
    key: "youtube",
    label: "YouTube",
    color: "#ff0000",
    social: "youtube",
    ph: "https://youtube.com/@tachaine",
    icon: SVG('<path d="M21.6 7.2s-.2-1.5-.8-2.1c-.8-.8-1.7-.8-2.1-.9C15.9 4 12 4 12 4s-3.9 0-6.7.2c-.4 0-1.3.1-2.1.9-.6.6-.8 2.1-.8 2.1S2.2 9 2.2 10.7v1.9c0 1.7.2 3.5.2 3.5s.2 1.5.8 2.1c.8.8 1.9.8 2.3.9 1.7.2 7 .2 7 .2s3.9 0 6.7-.2c.4 0 1.3-.1 2.1-.9.6-.6.8-2.1.8-2.1s.2-1.7.2-3.5v-1.9c0-1.7-.2-3.5-.2-3.5ZM9.9 14.6V8.8l5.4 2.9-5.4 2.9Z"/>'),
  },
  {
    key: "email",
    label: "Email",
    color: "#4f46e5",
    social: "email",
    ph: "contact@saadconcours.space",
    icon: SVG('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>', 'fill="none" stroke="currentColor" stroke-width="1.8"'),
  },
  {
    key: "phone",
    label: "Téléphone",
    color: "#0f766e",
    ph: "+212 6 …",
    icon: SVG('<path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z"/>'),
  },
  {
    key: "link",
    label: "Autre lien",
    color: "#4f46e5",
    ph: "https://…",
    icon: SVG('<path d="M10 14a5 5 0 0 0 7.1 0l3-3a5 5 0 0 0-7.1-7.1l-1.1 1.1"/><path d="M14 10a5 5 0 0 0-7.1 0l-3 3a5 5 0 0 0 7.1 7.1l1.1-1.1"/>', 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"'),
  },
];

const PAR_CLE = Object.fromEntries(FAB_RESEAUX.map((r) => [r.key, r]));
const COULEUR_RE = /^#[0-9a-f]{6}$/i;
const EMAIL_RE = /^[^\s@<>"]+@[^\s@<>"]+\.[a-z]{2,}$/i;
const TEL_RE = /^\+?[\d\s.-]{8,}$/;

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Lien saisi → lien sûr (https, mailto, tel), ou null s'il est invalide.
function normaliserLien(brut, reseau) {
  const v = String(brut || "").trim();
  if (!v) return null;
  if (reseau === "email" || (EMAIL_RE.test(v) && !/^https?:/i.test(v))) {
    const mail = v.replace(/^mailto:/i, "");
    return EMAIL_RE.test(mail) ? `mailto:${mail}` : null;
  }
  if (TEL_RE.test(v)) {
    const chiffres = v.replace(/[^\d]/g, "");
    if (reseau === "whatsapp") return `https://wa.me/${chiffres}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    return `tel:+${chiffres}`;
  }
  if (/^tel:\+?[\d]{6,}$/i.test(v.replace(/[\s.-]/g, ""))) return v.replace(/[\s.-]/g, "");
  if (/^https?:\/\/[^\s"<>]+$/i.test(v)) return v;
  if (/^[\w-]+(\.[\w-]+)+(\/[^\s"<>]*)?$/.test(v)) return `https://${v}`;
  return null;
}

// Ce que le bouton affiche, ou null quand il ne doit pas apparaître (masqué,
// ou aucun lien utilisable).
export function fabConfig(settings) {
  if (settings?.whatsappFabEnabled === false) return null;
  const reseau = PAR_CLE[settings?.fabNetwork] || PAR_CLE.whatsapp;
  let href = normaliserLien(settings?.fabLink, reseau.key);
  if (!href && String(settings?.fabLink || "").trim()) return null; // lien saisi mais invalide
  if (!href && reseau.social) href = normaliserLien(settings?.[reseau.social], reseau.key);
  if (!href && reseau.key === "whatsapp") href = WA_DEFAUT;
  if (!href) return null;
  const label = settings?.fabLabel == null ? FAB_TEXTE_DEFAUT : String(settings.fabLabel).trim();
  const couleur = COULEUR_RE.test(settings?.fabColor || "") ? settings.fabColor : "";
  return {
    reseau,
    href,
    label,
    bg: couleur || reseau.gradient || reseau.color,
    ring: couleur || reseau.color,
  };
}

// Le bouton en HTML. `apercu` : version posée dans la page (console), pas fixée.
export function fabHtml(settings, { apercu = false } = {}) {
  const c = fabConfig(settings);
  if (!c) return "";
  const titre = c.label ? `${c.label} : ${c.reseau.label}` : c.reseau.label;
  const externe = /^https?:/.test(c.href) ? ' target="_blank" rel="noopener"' : "";
  const classes = ["wa-fab", c.label ? "" : "wa-fab-rond", apercu ? "wa-fab-apercu" : ""].filter(Boolean).join(" ");
  return `<a class="${classes}" href="${esc(c.href)}"${externe} aria-label="${esc(titre)}" title="${esc(titre)}" style="--fab-bg:${esc(c.bg)};--fab-ring:${esc(c.ring)}">${c.reseau.icon}${c.label ? `<span class="wa-fab-label">${esc(c.label)}</span>` : ""}</a>`;
}
