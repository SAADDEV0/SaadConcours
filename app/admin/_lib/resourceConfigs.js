import { categoryOptions, subFiliereOptions, categoryLabel } from "@/lib/taxonomy";
import { STATUT_OPTIONS, statutLabel } from "./statut";

/* -------------------------------------------------------------------
 * Field-driven CRUD panel. Each resource (concours/cours/quiz/news) is
 * described by a small config below instead of a hand-written form, since
 * the four resources are structurally the same (list + add/edit form)
 * modulo which fields they have. "quiz-questions" is the one field type
 * with a dedicated widget (QuestionsEditor) instead of a plain input,
 * since raw-JSON editing of 100 nested questions is unusable.
 * ---------------------------------------------------------------- */

export const CONCOURS_CONFIG = {
  key: "concours",
  apiBase: "/api/concours",
  resourceLabel: "Concours",
  showIdField: true,
  idPlaceholder: "ex: 2024_Rabat_FSJES_Souissi_CCA",
  pipeline: true,
  fields: [
    { key: "annee", label: "Année", required: true },
    { key: "ville", label: "Ville", required: true },
    { key: "etablissement", label: "Établissement", required: true },
    { key: "categorie", label: "Catégorie", type: "select", options: categoryOptions() },
    {
      key: "filiere",
      label: "Filière (sous-catégorie utilisée pour le filtre du site)",
      type: "select",
      dependsOn: "categorie",
      optionsFor: subFiliereOptions,
    },
    { key: "statut", label: "Statut (pipeline de contenu)", type: "select", options: STATUT_OPTIONS },
    {
      key: "master_reel",
      label: "Nom réel du master (intitulé officiel écrit sur le sujet, ex: « Finance, Audit et Contrôle de Gestion »)",
      placeholder: "Laisser vide si l'intitulé n'apparaît pas sur le sujet",
    },
    { key: "difficulte", label: "Difficulté", placeholder: "ex: 3/5" },
    { key: "modules", label: "Modules requis (séparés par des virgules)", type: "list" },
    { key: "notions_cles", label: "Notions clés" },
    { key: "enonce_md", label: "Énoncé (Markdown)", type: "textarea", required: true, markdown: true },
    {
      key: "corrige_md",
      label: "Corrigé (Markdown, optionnel — indicatif, à vérifier avant publication)",
      type: "textarea",
      markdown: true,
    },
    { key: "source", label: "Source" },
    { key: "images", label: "Images", type: "image-list" },
  ],
  columns: [
    { key: "id", label: "ID", mono: true },
    { key: "etablissement", label: "Établissement" },
    { key: "ville", label: "Ville" },
    { key: "categorie", label: "Catégorie", render: (i) => categoryLabel(i.categorie) || "—" },
    { key: "filiere", label: "Filière" },
    { key: "master_reel", label: "Nom réel du master", render: (i) => i.master_reel || "—" },
    { key: "annee", label: "Année" },
    { key: "statut", label: "Statut", render: statutLabel },
    {
      // A concours counts as "having a corrigé" whether it's the reviewed
      // corrige_md field or a file already committed to data/corriges/ that
      // was never copied into it — both cases are already served to the
      // public site (see getCorrigeFile in lib/store.js), so both show ✅;
      // only the file-only case gets a small superscript so it's still
      // possible to spot which ones haven't been copied into the field yet.
      key: "corrige",
      label: "Corrigé",
      render: (i) => (i.corrige_md ? "✅" : i.corrige_from_github ? "✅ ᴳ" : "—"),
    },
    { key: "date_ajout", label: "Ajouté le", render: (i) => i.date_ajout || "—" },
  ],
  duplicateKeys: ["annee", "ville", "etablissement", "filiere"],
};

export const COURS_CONFIG = {
  key: "cours",
  apiBase: "/api/cours",
  resourceLabel: "Cours",
  fields: [
    { key: "module", label: "Module", required: true, placeholder: "ex: Analyse Financière" },
    { key: "title", label: "Titre de la fiche", required: true, placeholder: "ex: Bilan fonctionnel, SIG et ratios" },
    { key: "description", label: "Description" },
    { key: "content", label: "Contenu (Markdown)", type: "textarea", required: true, markdown: true },
    { key: "available", label: "Disponible", type: "checkbox" },
  ],
  columns: [
    { key: "id", label: "ID", mono: true },
    { key: "module", label: "Module" },
    { key: "title", label: "Titre" },
    { key: "available", label: "Disponible", render: (i) => (i.available ? "✅" : "—") },
  ],
};

export const QUIZ_CONFIG = {
  key: "quiz",
  apiBase: "/api/quiz",
  resourceLabel: "Évaluation",
  fields: [
    { key: "module", label: "Module", required: true, placeholder: "ex: Analyse Financière" },
    { key: "title", label: "Titre", required: true, placeholder: "ex: Concours Blanc — Analyse Financière" },
    { key: "description", label: "Description" },
    { key: "questions", label: "Questions", type: "quiz-questions" },
    { key: "available", label: "Disponible", type: "checkbox" },
  ],
  columns: [
    { key: "id", label: "ID", mono: true },
    { key: "module", label: "Module" },
    { key: "title", label: "Titre" },
    { key: "nb", label: "Questions", render: (i) => (i.questions || []).length },
    { key: "available", label: "Disponible", render: (i) => (i.available ? "✅" : "—") },
  ],
};

export const NEWS_CONFIG = {
  key: "news",
  apiBase: "/api/news",
  resourceLabel: "News",
  allowEdit: false,
  fields: [
    { key: "titre", label: "Titre", required: true },
    { key: "etablissement", label: "Établissement", placeholder: "ex: FSJES, ENCG, FEG" },
    { key: "ville", label: "Ville" },
    { key: "filiere", label: "Filière" },
    { key: "date_limite", label: "Date limite", placeholder: "AAAA-MM-JJ" },
    { key: "date_publication", label: "Date de publication", placeholder: "AAAA-MM-JJ" },
    { key: "cloture", label: "Clôturé", type: "checkbox" },
    { key: "lien_inscription", label: "Lien d'inscription" },
    { key: "source", label: "Source", required: true },
  ],
  columns: [
    { key: "titre", label: "Titre" },
    { key: "etablissement", label: "Étab." },
    { key: "ville", label: "Ville" },
    { key: "date_limite", label: "Date limite" },
    { key: "cloture", label: "Clôturé", render: (i) => (i.cloture ? "✅" : "—") },
  ],
};

export const BLOG_CONFIG = {
  key: "blog",
  apiBase: "/api/blog",
  resourceLabel: "Article",
  showIdField: true,
  idPlaceholder: "ex: matieres-a-preparer-master-fsjes (généré depuis le titre sinon)",
  fields: [
    { key: "title", label: "Titre", required: true, placeholder: "ex: Les matières à préparer pour les masters FSJES" },
    {
      key: "excerpt",
      label: "Résumé (utilisé comme description SEO et sur la liste des articles)",
      type: "textarea",
      required: true,
      placeholder: "1-2 phrases qui résument l'article.",
    },
    { key: "content", label: "Contenu (Markdown)", type: "textarea", required: true, markdown: true },
    { key: "publishedAt", label: "Date de publication (AAAA-MM-JJ, auto si vide)", placeholder: "2026-08-30" },
    { key: "available", label: "Publié", type: "checkbox" },
  ],
  columns: [
    { key: "id", label: "Slug", mono: true },
    { key: "title", label: "Titre" },
    { key: "publishedAt", label: "Publié le" },
    { key: "available", label: "Publié", render: (i) => (i.available ? "✅" : "🕓 Brouillon") },
  ],
  duplicateKeys: ["title"],
};

// Config objects hold functions (render, optionsFor) and so can't cross the
// server/client boundary as props — pages pass this map's string key
// instead, and ResourcePanel (a client component) resolves it here.
export const RESOURCE_CONFIGS = {
  concours: CONCOURS_CONFIG,
  cours: COURS_CONFIG,
  quiz: QUIZ_CONFIG,
  news: NEWS_CONFIG,
  blog: BLOG_CONFIG,
};
