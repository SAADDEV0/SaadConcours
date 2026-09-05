import { SITE_URL } from "./contentTypes";
import { MAX_HASHTAGS } from "./hashtags";

/* --------------------------- Vérification SEO/format --------------------------- */

export function seoChecks(text, hashtagCount) {
  const chars = text.trim().length;
  const hasLink = text.includes(SITE_URL);
  return [
    {
      ok: chars > 0 && chars <= 2200,
      label: `${chars} caractères`,
      hint:
        chars > 2200
          ? "Dépasse la limite d'un caption Instagram (2200 caractères) — le texte sera coupé."
          : chars < 60
          ? "Un peu court : ajoute un peu de contexte pour donner envie de cliquer."
          : "Longueur adaptée à Instagram/Facebook.",
    },
    {
      ok: hashtagCount >= 5 && hashtagCount <= MAX_HASHTAGS,
      label: `${hashtagCount} hashtags`,
      hint:
        hashtagCount < 5
          ? "Ajoute quelques hashtags pertinents pour gagner en portée."
          : "Bon équilibre entre portée et pertinence.",
    },
    {
      ok: hasLink,
      label: "Lien inclus",
      hint: hasLink ? "Le lien vers la page est bien présent dans le texte." : "Aucun lien détecté — vérifie le texte généré.",
    },
  ];
}

/* ------------------------------ Aperçu plateformes ------------------------------
 * Chaque appli tronque les captions différemment — on reproduit
 * approximativement ces seuils pour que l'aperçu ressemble à ce que verra
 * réellement un visiteur avant de cliquer sur "... voir plus".
 * ------------------------------------------------------------------------ */

export function truncateCaption(text, limit) {
  const clean = text.trim();
  if (clean.length <= limit) return { shown: clean, truncated: false };
  let cut = clean.slice(0, limit);
  const lastBreak = Math.max(cut.lastIndexOf("\n"), cut.lastIndexOf(" "));
  if (lastBreak > limit * 0.6) cut = cut.slice(0, lastBreak);
  return { shown: cut, truncated: true };
}
