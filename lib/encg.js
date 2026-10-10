// Cours ENCG : public/data/encg.json, une fiche par module, écrite depuis la
// console (Contenu › Cours ENCG). Même convention de Markdown que les cours
// FSJES (« # CHAPITRE N — TITRE », exercices, annexe : lib/fsjesChapitres.js),
// découpée par le même code ; seuls les compléments et les adresses changent.
import { decouperModule, fsjesModuleIcon } from "./fsjesChapitres.js";
import { encgSupplement } from "./encgContenu/index.js";

export function encgModule(cours) {
  return decouperModule(cours, { ns: "encg", supplement: encgSupplement });
}

// Un module n'a de page que publié (`available`) et découpé en chapitres :
// une fiche sans « # CHAPITRE » serait une page vide (règle AdSense,
// BANQUE_PROMPTS §1.6). Même règle dans next.config.mjs (espace ouvert ou non).
export function isEncgPublie(cours) {
  return Boolean(cours?.available) && encgModule(cours).chapitres.length > 0;
}

export function encgModuleHref(cours) {
  return `/encg/${encodeURIComponent(cours.id)}`;
}

export function encgChapitreHref(cours, chapitre) {
  return `${encgModuleHref(cours)}/${chapitre.slug}`;
}

export const encgModuleIcon = fsjesModuleIcon;
