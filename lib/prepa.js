// Cours de la prépa ECT / ECS (classes préparatoires économiques et commerciales,
// accès aux ENCG par le CNAEM) : public/data/prepa.json, une fiche par cours.
// Séparés des cours de la Licence FSJES (/cours) et du Droit (/droit), et l'option
// ECT séparée de l'option ECS (décision de Saad, 2026-11-21 : « courses are
// completely separated, don't mix stuff, not the same link for everything ») :
// adresses /prepa/<option>/<cours>/<chapitre>, données et compléments à part.
// Même convention de Markdown que les autres cours (« # CHAPITRE N — TITRE »,
// exercices, annexe : lib/fsjesChapitres.js), découpée par le même code.
//
// Fiche : { id, option: "ect" | "ecs", module, title, description, available, content }.
// L'id est unique sur tout le fichier et finit par l'option (« analyse-ect ») :
// il sert de clé aux compléments (lib/prepaContenu) et à l'historique des dates
// (scripts/dates-contenu.mjs) ; l'adresse le reprend sans ce suffixe.
import { decouperModule, fsjesModuleIcon } from "./fsjesChapitres.js";
import { prepaSupplement } from "./prepaContenu/index.js";
import { contenuOuvert } from "./espaces.js";

export const PREPA_OPTIONS = [
  { code: "ect", court: "ECT", long: "Prépa ECT", intitule: "Option technologique (ECT)" },
  { code: "ecs", court: "ECS", long: "Prépa ECS", intitule: "Option scientifique (ECS)" },
];

export function prepaOption(code) {
  return PREPA_OPTIONS.find((o) => o.code === code) || null;
}

export function prepaModule(cours) {
  return decouperModule(cours, { ns: "prepa", supplement: prepaSupplement });
}

// Un cours n'a de page que publié et découpé en chapitres (règle AdSense,
// BANQUE_PROMPTS §1.6), avec une option connue. Même règle dans lib/contenusPublies.mjs.
export function isPrepaPublie(cours) {
  return Boolean(cours?.available) && Boolean(prepaOption(cours.option)) && prepaModule(cours).chapitres.length > 0;
}

// L'onglet « Cours ECT » (ou ECS) de l'espace Prépa est-il ouvert ?
export function prepaOptionOuverte(code) {
  return contenuOuvert(`prepa-cours-${code}`);
}

export function prepaSlug(cours) {
  return String(cours.id).replace(new RegExp(`-${cours.option}$`), "");
}

export function prepaOptionHref(code) {
  return `/prepa/${code}`;
}

export function prepaModuleHref(cours) {
  return `${prepaOptionHref(cours.option)}/${encodeURIComponent(prepaSlug(cours))}`;
}

export function prepaChapitreHref(cours, chapitre) {
  return `${prepaModuleHref(cours)}/${chapitre.slug}`;
}

export const prepaModuleIcon = fsjesModuleIcon;
