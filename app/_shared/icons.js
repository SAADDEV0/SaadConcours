// Jeu d'icônes du site : SVG au trait, grille 24×24, trait 1,8, coins
// arrondis. Remplace les emoji, dont le rendu changeait d'un système à
// l'autre (Windows, Android, iOS) et jurait avec un logo vectoriel.
//
// Deux usages :
// - iconHtml(nom | emoji) → chaîne SVG, pour le balisage construit en
//   chaînes (cartes, header, chrome.js) ;
// - <Icon name="…" /> ou <Icon e={emoji} />, pour le JSX.
// Les données (matières, catégories, modules) gardent leurs emoji :
// EMOJI_ICON les traduit à l'affichage, sans toucher aux fichiers de données.

const P = {
  book: '<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 21.5A2.5 2.5 0 0 1 6.5 19H20v3H6.5"/><path d="M8 7h8"/>',
  "book-open": '<path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/>',
  library: '<path d="M4 3h4v18H4zM10 3h4v18h-4z"/><path d="m16 4.5 3.8-1 3 17.4-3.8 1z"/>',
  grad: '<path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11.2V16c1.8 1.6 3.8 2.4 6 2.4s4.2-.8 6-2.4v-4.8"/><path d="M22 9v6"/>',
  star: '<path d="m12 2.8 2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z"/>',
  pen: '<path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4z"/><path d="m14.5 5.5 3 3"/>',
  "file-pen": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="m9.5 17.5 1-3 4.6-4.6a1.4 1.4 0 0 1 2 2l-4.6 4.6z"/>',
  clipboard: '<rect x="5" y="4" width="14" height="18" rx="2"/><path d="M9 2h6v4H9z"/><path d="m9 12 2 2 4-4M9 18h6"/>',
  news: '<path d="M4 4h13v15a2 2 0 0 0 2 2H6a2 2 0 0 1-2-2z"/><path d="M17 8h3v11a2 2 0 0 1-2 2"/><path d="M8 8h5M8 12h5M8 16h3"/>',
  school: '<path d="M3 21h18"/><path d="M5 21V11l7-5 7 5v10"/><path d="M10 21v-5h4v5"/><path d="M12 6V2.5l3 1.2-3 1.3"/>',
  building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
  pin: '<path d="M20 10c0 5.5-8 12-8 12S4 15.5 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  calendar: '<rect x="3" y="4.5" width="18" height="17" rx="2"/><path d="M8 2.5v4M16 2.5v4M3 10h18"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  "check-circle": '<circle cx="12" cy="12" r="9.5"/><path d="m8 12.2 2.8 2.8L16.5 9.3"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-4.5-4.5L6 21"/>',
  eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  "eye-off": '<path d="M10.7 5.1A9.8 9.8 0 0 1 12 5c6.4 0 10 7 10 7a17 17 0 0 1-2.2 3.2M6.6 6.6C3.7 8.4 2 12 2 12s3.6 7 10 7a9.6 9.6 0 0 0 5.4-1.6"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2M2 2l20 20"/>',
  alert: '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
  share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',
  message: '<path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.6A8.4 8.4 0 1 1 21 11.5z"/>',
  send: '<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>',
  download: '<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/>',
  "file-pdf": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M12 11v6m0 0-2.5-2.5M12 17l2.5-2.5"/>',
  clock: '<circle cx="12" cy="12" r="9.5"/><path d="M12 7v5l3 2"/>',
  refresh: '<path d="M21 12a9 9 0 0 1-15.3 6.4L3 16"/><path d="M3 21v-5h5"/><path d="M3 12a9 9 0 0 1 15.3-6.4L21 8"/><path d="M21 3v5h-5"/>',
  trend: '<path d="m3 17 6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
  chart: '<path d="M3 3v18h18"/><path d="M8 16v-4M12.5 16V8M17 16v-7"/>',
  calculator: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15v3M8 18.5h4"/>',
  scale: '<path d="M12 3v18M7 21h10M4 7h16"/><path d="m4 7-2.5 6a3 3 0 0 0 5 0z"/><path d="m20 7-2.5 6a3 3 0 0 0 5 0z"/>',
  laptop: '<rect x="4" y="4" width="16" height="11" rx="1.5"/><path d="M2 19h20l-1.5-4h-17z"/>',
  ruler: '<path d="M21.3 15.3 8.7 2.7a1 1 0 0 0-1.4 0L2.7 7.3a1 1 0 0 0 0 1.4l12.6 12.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z"/><path d="m7.5 10.5 2-2M10.5 13.5l2-2M13.5 16.5l2-2"/>',
  globe: '<circle cx="12" cy="12" r="9.5"/><path d="M2.5 12h19M12 2.5a14.5 14.5 0 0 1 0 19 14.5 14.5 0 0 1 0-19z"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
  "moon-star": '<path d="M19 13.8A7.5 7.5 0 1 1 10.2 5a6 6 0 0 0 8.8 8.8z"/><path d="m18 3 .8 1.7 1.7.8-1.7.8L18 8l-.8-1.7-1.7-.8 1.7-.8z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  bulb: '<path d="M9 18h6M10 21.5h4"/><path d="M12 2.5a6.5 6.5 0 0 0-4 11.6c.7.6 1 1.3 1 2.1V17h6v-.8c0-.8.3-1.5 1-2.1a6.5 6.5 0 0 0-4-11.6z"/>',
  receipt: '<path d="M5 2.5h14v19l-2.3-1.5-2.4 1.5-2.3-1.5-2.3 1.5-2.4-1.5L5 21.5z"/><path d="M9 7.5h6M9 11.5h6M9 15.5h3"/>',
  coins: '<circle cx="9" cy="9" r="6.5"/><path d="M14.8 6.8a6.5 6.5 0 1 1-8 8"/><path d="M9 6.5v5M7.5 8h3"/>',
  hash: '<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',
  compass: '<circle cx="12" cy="12" r="9.5"/><path d="m15.8 8.2-2.1 5.5-5.5 2.1 2.1-5.5z"/>',
  megaphone: '<path d="M3 10v4a1 1 0 0 0 1 1h3l8 5V4L7 9H4a1 1 0 0 0-1 1z"/><path d="M18.5 8.5a5 5 0 0 1 0 7"/>',
  languages: '<path d="M4 5h8M8 3v2c0 4-2 7.5-5 9"/><path d="M5.5 9c1 2.5 3.2 4.5 5.5 5.5"/><path d="m12 21 4.5-10 4.5 10M13.5 17.5h6"/>',
  search: '<circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.5-4.5"/>',
  target: '<circle cx="12" cy="12" r="9.5"/><circle cx="12" cy="12" r="5.5"/><circle cx="12" cy="12" r="1.5"/>',
  backpack: '<path d="M5 10a7 7 0 0 1 14 0v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"/><path d="M9 3.5V3a3 3 0 0 1 6 0v.5M8 22v-6h8v6M8 12h8"/>',
  trophy: '<path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M7 6H4v1.5A3.5 3.5 0 0 0 7.5 11M17 6h3v1.5a3.5 3.5 0 0 1-3.5 3.5M12 14v4M8 21h8M9.5 18h5"/>',
  cart: '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.7 12.2a1.5 1.5 0 0 0 1.5 1.3h8.6a1.5 1.5 0 0 0 1.5-1.2L21 8H6"/>',
  lock: '<rect x="4" y="11" width="16" height="10.5" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  phone: '<rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18h2"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/>',
  folder: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2.5h8a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  "credit-card": '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>',
  zap: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
  dice: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 8h.01M16 8h.01M12 12h.01M8 16h.01M16 16h.01"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M2 13h20"/>',
  crane: '<path d="M4 21h16M7 21V4l13 3M7 4 3 7h4"/><path d="M17 6.5V12M15.5 12h3v2.5h-3z"/>',
  home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20h5v-6h4v6h5V9.5"/>',
  "arrow-right": '<path d="M5 12h14M13 6l6 6-6 6"/>',
  "arrow-left": '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  "chevron-right": '<path d="m9 6 6 6-6 6"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  sliders: '<path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/>',
  "chevron-down": '<path d="m6 9 6 6 6-6"/>',
  filter: '<path d="M3 5h18l-7 8.5V19l-4 2v-7.5z"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  sparkles: '<path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 15v4M17 17h4"/>',
  heart: '<path d="M20.4 4.6a5.5 5.5 0 0 0-7.8 0L12 5.2l-.6-.6a5.5 5.5 0 0 0-7.8 7.8L12 20.8l8.4-8.4a5.5 5.5 0 0 0 0-7.8z"/>',
  layers: '<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 12 10 5 10-5M2 17l10 5 10-5"/>',
  users: '<circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0M16 3.5a4 4 0 0 1 0 8M22 21a7 7 0 0 0-4.5-6.5"/>',
};

// Emoji présents dans les données (matières Bac, catégories, modules,
// rubriques…) → icône. Le sélecteur de variante U+FE0F est ignoré.
const EMOJI_ICON = {
  "📘": "book", "📗": "book", "📙": "book", "📕": "book", "📒": "book", "📓": "book", "📔": "book",
  "📖": "book-open", "📚": "library", "🎓": "grad", "⭐": "star", "🌟": "star",
  "📝": "file-pen", "✏": "pen", "✍": "pen", "📰": "news",
  "🏫": "school", "🏢": "building", "🏗": "crane", "📍": "pin", "📅": "calendar", "🗓": "calendar",
  "✅": "check-circle", "✔": "check", "🖼": "image", "👁": "eye", "👀": "eye", "🙈": "eye-off", "⚠": "alert",
  "🔗": "link", "💬": "message", "✈": "send", "⬇": "download", "📥": "download",
  "⏱": "clock", "🔄": "refresh", "📈": "trend", "📊": "chart", "🧮": "calculator", "⚖": "scale",
  "💻": "laptop", "📐": "ruler", "🌍": "globe", "🌎": "globe", "🕌": "moon-star", "🤔": "bulb", "💡": "bulb",
  "🧾": "receipt", "💰": "coins", "🔢": "hash", "🧭": "compass", "📣": "megaphone", "🗣": "languages",
  "🔍": "search", "🔎": "search", "🎯": "target", "🎒": "backpack", "🏆": "trophy", "🛒": "cart",
  "🔒": "lock", "📱": "phone", "📄": "file", "🗂": "folder", "💳": "credit-card", "⚡": "zap",
  "🎲": "dice", "💼": "briefcase", "🏠": "home",
  "📌": "pin", "🗺": "compass", "❌": "x", "🧠": "bulb", "♻": "refresh",
};

export function iconName(nameOrEmoji) {
  const k = String(nameOrEmoji || "").replace(/️/g, "").trim();
  if (P[k]) return k;
  return EMOJI_ICON[k] || null;
}

// Vrai si la valeur se traduit en icône (sinon on garde le texte d'origine).
export function hasIcon(nameOrEmoji) {
  return Boolean(iconName(nameOrEmoji));
}

export function iconHtml(nameOrEmoji, { size = 20, className = "ic", strokeWidth = 1.8, title } = {}) {
  const name = iconName(nameOrEmoji);
  if (!name) return String(nameOrEmoji ?? "");
  const label = title ? ` role="img" aria-label="${String(title).replace(/"/g, "&quot;")}"` : ' aria-hidden="true"';
  return `<svg class="${className}" viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"${label}>${P[name]}</svg>`;
}

// SVG en data-URI, pour un masque CSS (illustration des heros) : la couleur
// vient alors du thème (background), pas du fichier.
export function iconMaskUrl(nameOrEmoji) {
  const name = iconName(nameOrEmoji) || "book";
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${P[name]}</svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

// Composant JSX : <Icon name="pin" /> ou <Icon e={m.icon} />. Rendu côté
// serveur, sans JavaScript client. Une valeur sans icône connue est rendue
// telle quelle (aucune perte si une donnée utilise un emoji inattendu).
export function Icon({ name, e, size = 20, className = "ic", strokeWidth = 1.8, title }) {
  const key = name || e;
  if (!iconName(key)) return <span aria-hidden="true">{key}</span>;
  return (
    <span
      className="ic-wrap"
      dangerouslySetInnerHTML={{ __html: iconHtml(key, { size, className, strokeWidth, title }) }}
    />
  );
}
