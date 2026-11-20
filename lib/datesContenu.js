// Date de dernière modification des pages de cours (Licence FSJES, Droit,
// 2ème Bac), pour le `lastmod` du sitemap.
//
// Ces contenus n'ont pas de champ date (contrairement aux concours et aux
// articles) : leur date vient de l'historique Git, rejoué chapitre par
// chapitre par `npm run dates:contenu` (scripts/dates-contenu.mjs), qui écrit
// lib/datesContenu.json : pour chaque page, l'empreinte de son contenu et le
// jour où ce contenu a changé pour la dernière fois.
//
// Une date n'est donnée que si l'empreinte enregistrée est celle du contenu
// actuel. Un chapitre modifié depuis le dernier passage du script (console
// /admin, recette oubliée) perd son `lastmod` au lieu d'en garder un faux,
// jusqu'au prochain `npm run dates:contenu`. Même règle que le reste du
// sitemap : pas de date plutôt qu'une date inventée.
//
// Le fichier JSON n'est pas importé ici : le script, qui l'écrit, importe ce
// module sous Node (où un import de JSON exige un attribut) et doit tourner
// avant que le fichier existe. app/sitemap.js l'importe et le passe.

// FNV-1a 32 bits sur le JSON : déterministe, sans dépendance, assez court
// pour un fichier de dates lisible. Une collision ne coûterait qu'un lastmod
// resté à l'ancienne date.
export function empreinte(valeur) {
  const s = JSON.stringify(valeur) ?? "";
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(36);
}

// Ce qu'affiche une page de chapitre (Licence FSJES et Droit) : tout l'objet
// produit par decouperModule (cours, exercices, résumé, QCM, titre…).
export const valeurChapitre = (ch) => ch;

// Ce qu'affiche la page d'un module en plus de ses chapitres : sa fiche et
// son annexe. Les chapitres comptent à part (leur propre date).
export function valeurModule(cours, annexe) {
  const { content: _content, ...fiche } = cours;
  return { fiche, annexe: annexe || "" };
}

// Chapitre du 2ème Bac : l'objet { cours, exercices, resume, qcm } du code.
export const valeurBac = (contenu) => contenu;

// Date du contenu `valeur` publié à `cle` (chemin de la page, ou
// « chemin#module » pour la fiche d'un module) d'après `table`
// (lib/datesContenu.json), ou null si elle n'est pas sûre.
export function dateContenu(table, cle, valeur) {
  const e = table[cle];
  return e && e.h === empreinte(valeur) ? e.d : null;
}

// Page qui rassemble plusieurs contenus datés (module = fiche + chapitres) :
// la plus récente de leurs dates, seulement si toutes sont connues.
export function plusRecente(dates) {
  if (!dates.length || dates.some((d) => !d)) return null;
  return dates.reduce((a, b) => (b > a ? b : a));
}
