// Cours ENCG : public/data/encg.json, une fiche par module, écrite depuis la
// console (Contenu › Cours ENCG). Même convention de Markdown que les cours
// FSJES (« # CHAPITRE N — TITRE », exercices, annexe : lib/fsjesChapitres.js),
// découpée par le même code ; seuls les compléments et les adresses changent.
//
// L'espace est caché tant que ENCG_LANCE (lib/contenusPublies.mjs) est à
// false : aucune page de module ni lien en production, même publiés.
import { decouperModule, fsjesModuleIcon } from "./fsjesChapitres.js";
import { encgSupplement } from "./encgContenu/index.js";
import { contenuOuvert } from "./espaces.js";

// L'onglet des cours ENCG est-il ouvert (lancé et publié, ou aperçu de
// `next dev`) ? Sans lui, ni page /encg, ni sitemap, ni recherche.
export function encgOuvert() {
  return contenuOuvert("encg-cours");
}

export function encgModule(cours) {
  return decouperModule(cours, { ns: "encg", supplement: encgSupplement });
}

// Un module n'a de page que publié (`available`) et découpé en chapitres :
// une fiche sans « # CHAPITRE » serait une page vide (règle AdSense,
// BANQUE_PROMPTS §1.6). Même règle dans next.config.mjs (espace ouvert ou non).
export function isEncgPublie(cours) {
  return Boolean(cours?.available) && !cours.renvoi && encgModule(cours).chapitres.length > 0;
}

// Module commun avec la Licence : il n'a pas de cours ENCG, sa carte renvoie
// au cours FSJES (`renvoi` = id dans cours.json). Un seul cours par matière
// sur le site, jamais deux versions proches (règle AdSense, BANQUE_PROMPTS K4).
// Rend les fiches dont le cours FSJES cible est publié, avec ce cours en `cible`.
export function encgRenvois(encg, coursFsjes) {
  const cibles = new Map(coursFsjes.filter((c) => c.available).map((c) => [c.id, c]));
  return encg.filter((c) => c.available && cibles.has(c.renvoi)).map((c) => ({ ...c, cible: cibles.get(c.renvoi) }));
}

export function encgModuleHref(cours) {
  return `/encg/${encodeURIComponent(cours.id)}`;
}

export function encgChapitreHref(cours, chapitre) {
  return `${encgModuleHref(cours)}/${chapitre.slug}`;
}

export const encgModuleIcon = fsjesModuleIcon;
