// Longueurs visées dans les résultats Google. Au-delà, le titre est coupé
// (« … ») et la description tronquée là où Google le décide, souvent au
// milieu d'un mot. 65 et 155 caractères tiennent dans les ~600 px d'un titre
// et les ~920 px d'un extrait sur ordinateur.
//
// Attention au modèle « %s | SaadConcours » de app/layout.js : il ne
// s'applique qu'aux pages placées directement sous la racine (/faq,
// /a-propos…). Les layouts de section (/concours, /cours, /bac, /blog,
// /evaluation) posent un titre simple, ce qui coupe le modèle pour leurs
// pages : leur titre est donc affiché tel quel, sans suffixe.
export const TITLE_MAX = 65;
export const DESCRIPTION_MAX = 155;

const propre = (s) => String(s || "").replace(/\s+/g, " ").trim();

// Premier candidat qui tient dans la limite, du plus riche au plus court ;
// si aucun ne tient, le plus court (Google coupera, mais le moins possible).
export function fitTitle(candidates, max = TITLE_MAX) {
  const list = candidates.filter(Boolean).map(propre);
  return list.find((t) => t.length <= max) ?? list.reduce((a, b) => (b.length < a.length ? b : a));
}

// Coupe à la dernière phrase complète si elle garde l'essentiel du texte,
// sinon au dernier mot entier, avec « … ».
export function clampDescription(text, max = DESCRIPTION_MAX) {
  const t = propre(text);
  if (t.length <= max) return t;
  const debut = t.slice(0, max + 1);
  const finPhrase = Math.max(debut.lastIndexOf(". "), debut.lastIndexOf(" ! "), debut.lastIndexOf(" ? "));
  if (finPhrase >= max * 0.6) return debut.slice(0, finPhrase + 1).trim();
  const espace = debut.lastIndexOf(" ", max - 1);
  return `${debut.slice(0, espace > 0 ? espace : max - 1).replace(/[\s,;:—–(-]+$/, "")}…`;
}
