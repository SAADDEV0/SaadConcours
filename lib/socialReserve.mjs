// Réserve des publications lointaines (Instagram + Facebook).
//
// La file du Studio (`admin:social:plan`) est un seul document JSON, relu et
// réécrit en entier par le Worker. À 380 entrées, /api/admin/social tombait
// en 1102 quatre fois sur cinq (mesuré le 2026-11-01). Elle ne garde donc que
// les jours qui viennent et le mois écoulé. Le reste vit à côté, en deux
// structures que le Worker lit ou écrit sans parser de document :
//   - RESERVE_KEY, un ZSET : score = date de publication, membre = une ligne
//     courte par contenu. Le même contenu renvoyé après un 503 retombe sur le
//     même membre : pas de doublon ;
//   - DONE_KEY, un HASH : ce qui a été publié il y a plus d'un mois, pour que
//     le Studio ne le repropose pas.
// Le robot (scripts/social/publier.mjs) déplace les entrées de l'un à l'autre
// à chaque passage, sur GitHub : aucune charge pour Cloudflare.
// Fichier sans dépendance : importé par le Worker et par le robot.

export const ROBOT_KINDS = ["concours", "boutique", "cours", "blog"];

export const RESERVE_KEY = "admin:social:reserve";
export const DESIGNS_KEY = "admin:social:designs";
export const DONE_KEY = "admin:social:done";

const DAY = 86400000;
// Au-delà de cet horizon, une publication va en réserve.
export const HORIZON_MS = 3 * DAY;
// Publié depuis plus longtemps : sort de la file pour le HASH.
export const KEEP_PUBLISHED_MS = 30 * DAY;
// Publié depuis plus longtemps : la file oublie le texte du post.
export const LIGHT_AFTER_MS = 3 * DAY;

// Les réglages du Studio sont communs à tout un lot : ils sont rangés une
// fois dans DESIGNS_KEY, et chaque ligne de la réserve n'en porte que la clé.
export function designKey(design) {
  const s = JSON.stringify(design || {});
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 0x01000193);
  return (h >>> 0).toString(36);
}

export const reserveMember = ({ kind, itemId, theme, design }) => [kind, designKey(design), theme || "brand", itemId].join("|");

export function parseMember(member) {
  const [kind, design, theme, ...rest] = String(member).split("|");
  return { kind, design, theme, itemId: rest.join("|") };
}

export const contentKey = (kind, itemId) => `${kind}|${itemId}`;
