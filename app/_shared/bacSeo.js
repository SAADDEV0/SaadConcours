// Meta description des chapitres du Bac (/bac/<niveau>/<matière>/<chapitre>).
//
// Jusqu'en novembre 2026, les 93 chapitres partageaient une seule phrase
// (« <Matière> 2ème Bac : <Titre>. Cours, exercices corrigés, résumé et QCM. ») :
// rien dans l'extrait ne disait ce que le chapitre enseigne. La description dit
// maintenant les notions du chapitre, tirées des titres de sections de son
// cours (## d'abord, puis ###), avant de rappeler ce que contient la page. Elle
// tient en 155 caractères (seoText.js) sans couper une notion.
import { DESCRIPTION_MAX, clampDescription } from "./seoText";

// Titres qui ne disent rien du sujet du chapitre (français, anglais, arabe).
const GENERIQUE =
  /^(introduction|conclusion|résumé|synthèse|à retenir|retenir|exercices?|exemples?|applications?|qcm|définitions?|rappels?|méthode|méthodologie|remarques?|pour aller plus loin|vocabulary|functions|reading|writing|tips|تأطير إشكالي|خلاصة|تركيب|مقدمة)(?=$|[\s:,.])/i;

// Numérotation en tête : « I. », « 2) », « 1.3 - », « A. », « المحور الأول: ».
const NUMERO = /^(?:[IVXLC]+|\d+(?:\.\d+)*|[A-Ha-h])\s*[.)\-–—:]\s*|^\d+(?:\.\d+)+\s+|^المحور\s+\S+\s*[:：]\s*/;
const ARABE = /[؀-ۿ]/;

function nettoie(brut, titre) {
  let s = brut
    .replace(/[*_`#]/g, "")
    .replace(/^\p{Extended_Pictographic}️?\s*/u, "")
    .replace(NUMERO, "")
    // « theme: Humour » (anglais) répète le titre du chapitre.
    .replace(/^theme\s*:\s*/i, "")
    // Précision longue entre parenthèses ; un sigle (« (CNSS) », « (TP et TVP) ») reste.
    .replace(/\s*\(([^)]{13,})\)/g, "")
    .replace(/\s*[:：]\s*$/, "")
    .trim();
  if (s.toLocaleLowerCase("fr") === String(titre).toLocaleLowerCase("fr")) s = "";
  return s;
}

export function notionsDuCours(cours, titre = "") {
  if (typeof cours !== "string") return [];
  const vues = new Set();
  const garde = (niveau) => {
    const out = [];
    for (const [, brut] of cours.matchAll(new RegExp(`^${niveau}\\s+(.+)$`, "gm"))) {
      const s = nettoie(brut, titre);
      if (!s || s.length > 60 || GENERIQUE.test(s)) continue;
      const cle = s.toLocaleLowerCase("fr");
      if (vues.has(cle)) continue;
      vues.add(cle);
      out.push(s);
    }
    return out;
  };
  // Les grandes parties (##) disent le plan ; les sous-parties (###) complètent.
  return [...garde("##"), ...garde("###")];
}

// Minuscule en début de notion au milieu d'une phrase (« Le PIB » → « le PIB »,
// « L'offre » → « l'offre »), sauf sigle (« PIB », « CPP ») et nom propre de
// plusieurs mots (« Bank Al-Maghrib », « Michael Porter » : second mot en capitale).
function enMinuscule(s) {
  if (/^L['’]/.test(s)) return `l${s.slice(1)}`;
  if (/^\S+\s+\p{Lu}/u.test(s)) return s;
  return /^\p{Lu}\p{Ll}/u.test(s) ? s[0].toLocaleLowerCase("fr") + s.slice(1) : s;
}

const point = (s) => (/[.?!…]$/.test(s) ? s : `${s}.`);

export function descriptionChapitreBac(m, niv, titre, cours) {
  // « Amortissements : définition, taux et cumul » : pas un second « : » derrière.
  const debut = `${titre} (${m.court} ${niv.label})${titre.includes(":") ? " —" : " :"} `;
  const notions = notionsDuCours(cours, titre).map(enMinuscule);
  const sep = notions.some((n) => ARABE.test(n)) ? "، " : ", ";
  const essais = [];
  for (const fin of [" Cours, exercices corrigés, résumé et QCM.", " Cours, exercices et QCM."]) {
    for (let n = Math.min(notions.length, 6); n >= 2; n--) essais.push([n, fin]);
  }
  essais.push([1, " Cours, exercices corrigés, résumé et QCM."], [1, " Cours, exercices et QCM."]);
  for (const [n, fin] of essais) {
    if (n > notions.length) continue;
    const d = `${debut}${point(notions.slice(0, n).join(sep))}${fin}`;
    if (d.length <= DESCRIPTION_MAX) return d;
  }
  return clampDescription(`${m.nom} ${niv.label} : ${titre}. Cours, exercices corrigés, résumé et QCM.`);
}
