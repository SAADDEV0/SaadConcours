// Cours de Droit (Licence FSJES) : public/data/droit.json, une fiche par
// module. Même convention de Markdown que les cours FSJES (« # CHAPITRE N —
// TITRE », exercices, annexe : lib/fsjesChapitres.js), découpée par le même
// code ; seuls les compléments et les adresses changent.
//
// L'espace reste fermé tant que DROIT_LANCE (lib/contenusPublies.mjs) est à
// false : aucune page n'est générée en production, même avec des modules
// publiés. `npm run dev` les affiche pour la relecture.
import { decouperModule, fsjesModuleIcon } from "./fsjesChapitres.js";
import { droitSupplement } from "./droitContenu/index.js";
import { contenuOuvert } from "./espaces.js";

export function droitModule(cours) {
  return decouperModule(cours, { ns: "droit", supplement: droitSupplement });
}

// Un module n'a de page que publié (`available`) et découpé en chapitres :
// une fiche sans « # CHAPITRE » serait une page vide (règle AdSense,
// BANQUE_PROMPTS §1.6). Même règle dans lib/contenusPublies.mjs.
export function isDroitPublie(cours) {
  return Boolean(cours?.available) && !cours.renvoi && droitModule(cours).chapitres.length > 0;
}

// Module dont la matière a déjà un cours dans la Licence FSJES (introduction
// à l'étude du droit, droit des sociétés…) : pas de cours de Droit en plus,
// sa carte renvoie au cours FSJES (`renvoi` = id dans cours.json). Un seul
// cours par matière sur le site (règle AdSense, BANQUE_PROMPTS K5), comme
// encgRenvois (lib/encg.js). Rend les fiches dont la cible est publiée, avec
// ce cours en `cible`.
export function droitRenvois(droit, coursFsjes) {
  const cibles = new Map(coursFsjes.filter((c) => c.available).map((c) => [c.id, c]));
  return droit.filter((c) => c.available && cibles.has(c.renvoi)).map((c) => ({ ...c, cible: cibles.get(c.renvoi) }));
}

// L'espace est-il ouvert (lancé, ou aperçu de `next dev`) ? Sans lui, aucune
// page /droit n'existe, ni dans le sitemap, ni dans la recherche.
export function droitOuvert() {
  return contenuOuvert("droit-cours");
}

export function droitModuleHref(cours) {
  return `/droit/${encodeURIComponent(cours.id)}`;
}

export function droitChapitreHref(cours, chapitre) {
  return `${droitModuleHref(cours)}/${chapitre.slug}`;
}

export const droitModuleIcon = fsjesModuleIcon;
