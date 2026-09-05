/* ------------------------------ SEO hashtags ------------------------------
 * Quelques tags précis et pertinents battent trente tags génériques (pour le
 * classement Instagram comme pour ne pas avoir l'air spammy) : un socle de 3
 * tags de marque/catégorie par type de contenu, complété par ce qui est
 * spécifique à l'item (filière, établissement, ville, module...), puis
 * quelques tags de portée plus large tant qu'il reste de la place — total
 * plafonné à MAX_HASHTAGS. L'admin peut ensuite retirer/ajouter des tags à
 * la main (voir SocialGeneratorPanel) ; ceci ne fournit que la proposition
 * de départ.
 * ------------------------------------------------------------------------ */

export const MAX_HASHTAGS = 10;

export const HASHTAG_POOLS = {
  concours: ["#ConcoursMaroc", "#MasterMaroc", "#EtudiantMaroc", "#EtudesMaroc", "#ConcoursAccesMaster"],
  news: ["#ConcoursMaroc", "#InscriptionOuverte", "#MasterMaroc", "#EtudiantMaroc", "#OpportuniteEtudes"],
  blog: ["#ConseilsEtudes", "#MethodeDeTravail", "#MasterMaroc", "#ConcoursMaroc", "#ReussiteEtudiante"],
  evaluation: ["#QCM", "#RevisionMaster", "#EntrainementConcours", "#ConcoursMaroc", "#MasterMaroc"],
};

// Petits mots vides français exclus des hashtags — "AuditEtFiscale" lit
// moins bien et n'apporte rien à la découvrabilité vs "AuditFiscale".
const HASHTAG_STOPWORDS = new Set(["et", "de", "des", "du", "la", "le", "les", "en", "au", "aux", "d", "l"]);
// Un hashtag composé de trop de mots (souvent un intitulé long recopié tel
// quel, ex. master_reel) a l'air spammy et personne ne le cherche — mieux
// vaut l'omettre que le générer.
const HASHTAG_MAX_LEN = 28;

export function toHashtag(s) {
  const cleaned = String(s || "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim();
  if (!cleaned) return null;
  const tag =
    "#" +
    cleaned
      .split(" ")
      .filter(Boolean)
      .filter((w) => !HASHTAG_STOPWORDS.has(w.toLowerCase()))
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join("");
  return tag.length > 1 && tag.length <= HASHTAG_MAX_LEN ? tag : null;
}

export function buildHashtags(kind, item) {
  const pool = HASHTAG_POOLS[kind];
  const tags = new Set(pool.slice(0, 3));

  function addSpecific(val, mapFn) {
    if (tags.size >= MAX_HASHTAGS) return;
    const t = mapFn ? mapFn(val) : toHashtag(val);
    if (t) tags.add(t);
  }

  if (kind === "concours") {
    addSpecific(item.filiere);
    addSpecific(item.etablissement);
    if (item.ville && tags.size < MAX_HASHTAGS) {
      const v = toHashtag(item.ville);
      if (v) tags.add("#Concours" + v.slice(1));
    }
    addSpecific(item.master_reel);
  } else if (kind === "news") {
    addSpecific(item.etablissement);
    if (item.ville && tags.size < MAX_HASHTAGS) {
      const v = toHashtag(item.ville);
      if (v) tags.add("#Concours" + v.slice(1));
    }
    addSpecific(item.filiere);
  } else if (kind === "evaluation") {
    addSpecific(item.module);
  }

  for (const t of pool.slice(3)) {
    if (tags.size >= MAX_HASHTAGS) break;
    tags.add(t);
  }
  return [...tags].slice(0, MAX_HASHTAGS);
}
