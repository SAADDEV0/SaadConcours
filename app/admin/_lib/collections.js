"use client";

// Description de chaque type de contenu géré par la console : où il vit,
// comment il s'affiche en liste, quels champs l'éditeur propose, comment un
// identifiant se fabrique, et quels fichiers secondaires accompagnent une
// sauvegarde (miroirs Markdown des concours). Une seule source pour la liste,
// l'éditeur, la recherche globale, la corbeille et le studio social.

import { FILIERE_CATEGORIES, categoryOf, categoryLabel } from "@/lib/taxonomy";
import {
  COURS_CATEGORIES,
  coursCategoryLabel,
  LICENCE_PARCOURS,
  LICENCE_SEMESTRES,
  licenceFilieresFor,
  licenceParcoursLabel,
  licenceSemestreLabel,
} from "@/lib/coursTaxonomy";
import { CONCOURS_NIVEAUX, LICENCE_EXCELLENCE, niveauOf } from "@/lib/concoursNiveaux";
import { BOUTIQUE_NIVEAUX, BOUTIQUE_BADGES, BOUTIQUE_DEVISES, boutiqueNiveau, formatPrix } from "@/lib/boutique";
import { BLOG_CATEGORIES, categoryLabel as blogCategoryLabel } from "@/lib/blogTaxonomy";
import { normalize, randomId, slugify, todayIso, wordCount, daysUntil } from "./format";

export const SITE = "https://www.saadconcours.space";

// Identifiant de concours : « 2024_Rabat_FSJES_Agdal_CCA », même convention
// que les 260 existants (sans accents ni espaces).
function idPart(s) {
  return normalize(s)
    .replace(/\(.*?\)/g, " ")
    .split(/[^a-z0-9]+/)
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join("_")
    .slice(0, 40);
}

function sigleOf(c) {
  const m = String(c.master_reel || c.filiere || "").match(/\(([A-Za-z0-9&\- ]{2,12})\)/);
  return m ? m[1].replace(/[^A-Za-z0-9]/g, "") : "";
}

export function suggestConcoursId(c) {
  return [c.annee || "0000", idPart(c.ville) || "Ville", idPart(c.etablissement) || "Etab", sigleOf(c)]
    .filter(Boolean)
    .join("_")
    .slice(0, 120);
}

export function villeFolder(ville) {
  return (
    normalize(ville)
      .split(/[^a-z0-9]+/)
      .filter(Boolean)
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join("") || "Divers"
  );
}

export function uniqueId(base, taken) {
  let id = base;
  let n = 2;
  while (taken.has(id)) id = `${base}_${n++}`;
  return id;
}

const opt = (list, v = "code", l = "label") => list.map((x) => ({ value: x[v], label: x[l] }));

/* ------------------------------ Qualité ------------------------------ */

// Chaque contrôle : { ok, label, level } — level "red" = bloque la
// publication, "amber" = recommandé. Affiché dans l'éditeur et agrégé en score
// dans la liste.
function checks(list) {
  return list.map(([ok, label, level = "amber"]) => ({ ok: Boolean(ok), label, level }));
}

export function scoreOf(checkList) {
  if (!checkList.length) return 100;
  return Math.round((checkList.filter((c) => c.ok).length / checkList.length) * 100);
}

/* ------------------------------ Concours ------------------------------ */

const concours = {
  key: "concours",
  path: "data/concours.json",
  label: "Concours",
  singular: "concours",
  article: "le concours",
  icon: "book",
  emoji: "📝",
  href: "/admin/concours",
  publicUrl: (c) => `${SITE}/concours/${encodeURIComponent(c.id)}`,
  hydrate: (c) => ({ ...c, niveau: niveauOf(c) }),
  title: (c) => [niveauOf(c) === LICENCE_EXCELLENCE ? "⭐" : "", c.etablissement, c.annee].filter(Boolean).join(" · ") || c.id,
  subtitle: (c) => [c.master_reel || c.filiere, c.ville].filter(Boolean).join(" — "),
  isPublished: (c) => c.statut !== "brouillon",
  setPublished: (c, on) => {
    const next = { ...c };
    if (on) delete next.statut;
    else next.statut = "brouillon";
    return next;
  },
  searchText: (c) => [c.id, c.etablissement, c.ville, c.annee, c.filiere, c.master_reel, c.notions_cles, (c.modules || []).join(" ")].join(" "),
  deepSearchText: (c) => `${c.enonce_md || ""} ${c.corrige_md || ""}`,
  sortOptions: [
    { value: "recent", label: "Ajout récent", fn: (a, b) => String(b.date_ajout || "").localeCompare(String(a.date_ajout || "")) },
    { value: "annee", label: "Année (récente)", fn: (a, b) => String(b.annee).localeCompare(String(a.annee)) },
    { value: "etab", label: "Établissement", fn: (a, b) => String(a.etablissement).localeCompare(String(b.etablissement), "fr") },
    { value: "score", label: "Qualité (faible d'abord)", fn: null },
  ],
  filters: [
    { key: "niveau", label: "Niveau", options: CONCOURS_NIVEAUX.map((n) => ({ value: n.code, label: `${n.icon} ${n.label}` })), get: (c) => niveauOf(c) },
    { key: "categorie", label: "Catégorie", options: opt(FILIERE_CATEGORIES), get: (c) => c.categorie },
    { key: "annee", label: "Année", dynamic: true, get: (c) => c.annee },
    { key: "ville", label: "Ville", dynamic: true, get: (c) => c.ville },
    {
      key: "corrige",
      label: "Corrigé",
      options: [
        { value: "oui", label: "Avec corrigé" },
        { value: "non", label: "Sans corrigé" },
      ],
      get: (c, ctx) => (c.corrige_md || ctx?.corrigeFiles?.has(c.id) ? "oui" : "non"),
    },
    {
      key: "scans",
      label: "Scans",
      options: [
        { value: "oui", label: "Avec scans" },
        { value: "non", label: "Sans scan" },
      ],
      get: (c) => ((c.images || []).length ? "oui" : "non"),
    },
    {
      key: "statut",
      label: "Statut",
      options: [
        { value: "publie", label: "Publié" },
        { value: "brouillon", label: "Brouillon" },
      ],
      get: (c) => (c.statut === "brouillon" ? "brouillon" : "publie"),
    },
  ],
  columns: [
    { key: "annee", label: "Année", width: 70, render: (c) => <strong>{c.annee}</strong> },
    { key: "ville", label: "Ville", render: (c) => c.ville || "—" },
    { key: "categorie", label: "Catégorie", render: (c) => <span className="ax-pill">{c.categorie || "—"}</span>, title: (c) => categoryLabel(c.categorie) },
  ],
  empty: () => ({
    niveau: "master",
    annee: String(new Date().getFullYear()),
    ville: "",
    etablissement: "",
    categorie: "",
    filiere: "",
    master_reel: "",
    difficulte: "",
    modules: [],
    notions_cles: "",
    enonce_md: "",
    corrige_md: "",
    source: "",
    images: [],
  }),
  groups: [
    {
      title: "Identification",
      fields: [
        {
          key: "niveau",
          label: "Niveau du concours",
          type: "select",
          options: CONCOURS_NIVEAUX.map((n) => ({ value: n.code, label: `${n.icon} ${n.long}` })),
        },
        { key: "annee", label: "Année du concours", type: "text", required: true, placeholder: "2025", width: "sm" },
        { key: "ville", label: "Ville", type: "text", required: true, placeholder: "Rabat", suggest: "ville" },
        { key: "etablissement", label: "Établissement", type: "text", required: true, placeholder: "FSJES Agdal", suggest: "etablissement" },
        {
          key: "categorie",
          label: "Catégorie",
          type: "select",
          options: opt(FILIERE_CATEGORIES),
          onChange: (form) => ({ ...form, filiere: "" }),
        },
        {
          key: "filiere",
          label: "Filière (filtre du site)",
          type: "select",
          optionsFor: (form) => {
            const cat = FILIERE_CATEGORIES.find((c) => c.code === form.categorie);
            return (cat ? cat.sousFilieres : FILIERE_CATEGORIES.flatMap((c) => c.sousFilieres)).map((s) => ({ value: s, label: s }));
          },
          onChange: (form) => ({ ...form, categorie: categoryOf(form.filiere) || form.categorie }),
        },
        { key: "master_reel", label: "Intitulé officiel du master", type: "text", placeholder: "Tel qu'écrit sur le sujet", full: true },
      ],
    },
    {
      title: "Énoncé",
      fields: [{ key: "enonce_md", label: "Énoncé (Markdown + LaTeX)", type: "markdown", required: true, full: true, rows: 22 }],
    },
    {
      title: "Corrigé",
      hint: "Rédigé par IA et relu : le site l'affiche avec un bandeau d'avertissement.",
      fields: [{ key: "corrige_md", label: "Corrigé (Markdown + LaTeX)", type: "markdown", full: true, rows: 22 }],
    },
    {
      title: "Scans du sujet",
      fields: [{ key: "images", label: "Images", type: "images", full: true }],
    },
    {
      title: "Détails",
      fields: [
        { key: "modules", label: "Modules évalués", type: "tags", placeholder: "Ajouter un module…", suggest: "modules", full: true },
        { key: "notions_cles", label: "Notions clés", type: "textarea", rows: 3, full: true },
        {
          key: "difficulte",
          label: "Difficulté",
          type: "select",
          options: ["1/5", "2/5", "3/5", "4/5", "5/5"].map((v) => ({ value: v, label: "★".repeat(Number(v[0])) + ` (${v})` })),
        },
        { key: "source", label: "Source", type: "textarea", rows: 3, full: true, hint: "Lien ou origine du sujet." },
      ],
    },
  ],
  prepare(item, { isNew, list }) {
    const out = { ...item, annee: String(item.annee ?? "").trim() };
    // Master = absence du champ, comme les 260 premières fiches.
    if (out.niveau !== LICENCE_EXCELLENCE) delete out.niveau;
    if (out.filiere && !out.categorie) out.categorie = categoryOf(out.filiere) || "";
    if (!out.date_ajout && isNew) out.date_ajout = todayIso();
    out.modules = (out.modules || []).map((m) => String(m).trim()).filter(Boolean);
    if (isNew && !out.id) out.id = uniqueId(suggestConcoursId(out), new Set(list.map((x) => x.id)));
    return out;
  },
  // Miroirs lisibles dans le dépôt (public/data/extraits et corriges), écrits
  // dans le MÊME commit que concours.json. Un corrigé vidé supprime aussi son
  // miroir : sinon le site continuait de l'afficher (il lit ce fichier quand
  // corrige_md est vide).
  sideFiles(next, prev) {
    const files = [];
    const md = (t) => (t.endsWith("\n") ? t : t + "\n");
    if (next) {
      if (next.enonce_md && next.enonce_md !== prev?.enonce_md) files.push({ path: `data/extraits/${next.id}.md`, text: md(next.enonce_md) });
      if (next.corrige_md && next.corrige_md !== prev?.corrige_md) files.push({ path: `data/corriges/${next.id}.md`, text: md(next.corrige_md) });
      if (!next.corrige_md && prev?.corrige_md) files.push({ path: `data/corriges/${next.id}.md`, delete: true });
    } else if (prev) {
      if (prev.enonce_md) files.push({ path: `data/extraits/${prev.id}.md`, delete: true });
      if (prev.corrige_md) files.push({ path: `data/corriges/${prev.id}.md`, delete: true });
    }
    return files;
  },
  quality(c, ctx) {
    const hasCorrige = Boolean(c.corrige_md) || ctx?.corrigeFiles?.has(c.id);
    return checks([
      [c.annee && /^\d{4}/.test(c.annee), "Année renseignée", "red"],
      [c.ville && c.etablissement, "Ville et établissement", "red"],
      [(c.enonce_md || "").length > 200, "Énoncé transcrit", "red"],
      [c.filiere && c.categorie, "Filière et catégorie (filtres du site)"],
      [c.master_reel, "Intitulé officiel du master"],
      [hasCorrige, "Corrigé disponible"],
      [(c.images || []).length > 0, "Scans du sujet"],
      [c.source, "Source citée"],
      [(c.modules || []).length > 0, "Modules évalués"],
    ]);
  },
  auditLabel: (c) => [c.etablissement, c.ville, c.annee && `(${c.annee})`].filter(Boolean).join(" — "),
  suggestId: suggestConcoursId,
  imageFolder: (item, baseId) => `images/${villeFolder(item.ville)}/${baseId}`,
};

/* ------------------------------ Cours Licence ------------------------------ */

const cours = {
  key: "cours",
  path: "data/cours.json",
  label: "Cours Licence",
  singular: "cours",
  article: "le cours",
  icon: "notebook",
  emoji: "📚",
  href: "/admin/cours",
  publicUrl: (c) => `${SITE}/cours/${encodeURIComponent(c.id)}`,
  title: (c) => c.module || c.title || c.id,
  subtitle: (c) => [licenceSemestreLabel(c.semestre), c.parcours ? licenceParcoursLabel(c.parcours) : "Tronc commun", coursCategoryLabel(c.category)].filter(Boolean).join(" · "),
  isPublished: (c) => Boolean(c.available),
  setPublished: (c, on) => ({ ...c, available: on }),
  searchText: (c) => [c.id, c.module, c.title, c.description, c.semestre].join(" "),
  deepSearchText: (c) => c.content || "",
  sortOptions: [
    { value: "semestre", label: "Semestre", fn: (a, b) => String(a.semestre || "Z").localeCompare(String(b.semestre || "Z")) || String(a.module).localeCompare(String(b.module), "fr") },
    { value: "module", label: "Module (A→Z)", fn: (a, b) => String(a.module).localeCompare(String(b.module), "fr") },
    { value: "longueur", label: "Longueur", fn: (a, b) => (b.content || "").length - (a.content || "").length },
  ],
  filters: [
    { key: "semestre", label: "Semestre", options: opt(LICENCE_SEMESTRES), get: (c) => c.semestre },
    { key: "category", label: "Catégorie", options: COURS_CATEGORIES.map((c) => ({ value: c.code, label: `${c.emoji} ${c.label}` })), get: (c) => c.category },
    { key: "parcours", label: "Parcours", options: [{ value: "", label: "Tronc commun" }, ...opt(LICENCE_PARCOURS)], get: (c) => c.parcours || "" },
  ],
  columns: [
    { key: "semestre", label: "Semestre", width: 80, render: (c) => <span className="ax-pill accent">{c.semestre || "—"}</span> },
    { key: "category", label: "Catégorie", render: (c) => coursCategoryLabel(c.category) || "—" },
    { key: "len", label: "Longueur", render: (c) => <span className="ax-muted">{Math.round(wordCount(c.content) / 100) / 10} k mots</span> },
  ],
  empty: () => ({ module: "", title: "", description: "", category: "", parcours: "", semestre: "", filiere: "", content: "", available: false }),
  groups: [
    {
      title: "Présentation",
      fields: [
        { key: "module", label: "Module", type: "text", required: true, placeholder: "Analyse financière" },
        { key: "title", label: "Titre de la fiche", type: "text", required: true, placeholder: "Cours — Analyse financière" },
        { key: "description", label: "Description (SEO et cartes)", type: "textarea", rows: 2, full: true, counter: [120, 160] },
        { key: "category", label: "Catégorie", type: "select", options: COURS_CATEGORIES.map((c) => ({ value: c.code, label: `${c.emoji} ${c.label}` })) },
        { key: "semestre", label: "Semestre", type: "select", options: opt(LICENCE_SEMESTRES) },
        { key: "parcours", label: "Parcours", type: "select", options: [{ value: "", label: "Tronc commun" }, ...opt(LICENCE_PARCOURS)], onChange: (f) => ({ ...f, filiere: "" }) },
        {
          key: "filiere",
          label: "Filière (S5-S6)",
          type: "select",
          optionsFor: (f) => [{ value: "", label: "—" }, ...licenceFilieresFor(f.parcours).map((x) => ({ value: x.code, label: x.label }))],
        },
      ],
    },
    {
      title: "Contenu",
      hint: "Chaque titre « ## » devient une page chapitre sur le site (/cours/<module>/<chapitre>).",
      fields: [{ key: "content", label: "Cours complet (Markdown + LaTeX)", type: "markdown", required: true, full: true, rows: 28 }],
    },
  ],
  prepare(item, { isNew, list }) {
    const out = { ...item };
    if (isNew && !out.id) out.id = uniqueId(slugify(out.module, "_") + "_cours", new Set(list.map((x) => x.id)));
    return out;
  },
  quality(c) {
    const chapitres = (String(c.content || "").match(/^## /gm) || []).length;
    return checks([
      [c.module && c.title, "Module et titre", "red"],
      [wordCount(c.content) > 400, "Contenu rédigé", "red"],
      [chapitres >= 2, `Découpage en chapitres (${chapitres} titre${chapitres > 1 ? "s" : ""} « ## »)`],
      [c.description && c.description.length >= 80, "Description d'au moins 80 caractères"],
      [c.category, "Catégorie"],
      [c.semestre, "Semestre"],
    ]);
  },
  auditLabel: (c) => c.title || c.module,
};

/* ------------------------------ Évaluations ------------------------------ */

const quiz = {
  key: "quiz",
  path: "data/quiz.json",
  label: "Évaluations",
  singular: "évaluation",
  article: "l'évaluation",
  icon: "quiz",
  emoji: "✅",
  href: "/admin/evaluations",
  publicUrl: (q) => `${SITE}/evaluation/${encodeURIComponent(q.id)}`,
  title: (q) => q.title || q.module || q.id,
  subtitle: (q) => `${q.module || ""} · ${(q.questions || []).length} questions`,
  isPublished: (q) => Boolean(q.available),
  setPublished: (q, on) => ({ ...q, available: on }),
  searchText: (q) => [q.id, q.module, q.title, q.description].join(" "),
  deepSearchText: (q) => (q.questions || []).map((x) => x.question).join(" "),
  sortOptions: [
    { value: "module", label: "Module (A→Z)", fn: (a, b) => String(a.module).localeCompare(String(b.module), "fr") },
    { value: "taille", label: "Nombre de questions", fn: (a, b) => (b.questions || []).length - (a.questions || []).length },
  ],
  filters: [],
  columns: [{ key: "nb", label: "Questions", render: (q) => <strong>{(q.questions || []).length}</strong> }],
  empty: () => ({ module: "", title: "", description: "", questions: [], available: false }),
  groups: [
    {
      title: "Présentation",
      fields: [
        { key: "module", label: "Module", type: "text", required: true, placeholder: "Analyse financière" },
        { key: "title", label: "Titre", type: "text", required: true, placeholder: "Concours blanc — Analyse financière" },
        { key: "description", label: "Description", type: "textarea", rows: 2, full: true },
      ],
    },
    { title: "Questions", fields: [{ key: "questions", label: "Questions", type: "questions", full: true }] },
  ],
  prepare(item, { isNew, list }) {
    const out = { ...item };
    out.questions = (out.questions || []).map((q, i) => ({ ...q, id: i + 1 }));
    out.chapters = [...new Set(out.questions.map((q) => q.chapter).filter(Boolean))];
    if (isNew && !out.id) out.id = uniqueId(slugify(out.module, "_") + "_" + randomId(6), new Set(list.map((x) => x.id)));
    return out;
  },
  quality(q) {
    const qs = q.questions || [];
    const sansReponse = qs.filter((x) => !(x.correct || []).length).length;
    const sansJustif = qs.filter((x) => !x.justification).length;
    return checks([
      [q.module && q.title, "Module et titre", "red"],
      [qs.length >= 10, `Au moins 10 questions (${qs.length})`],
      [sansReponse === 0, sansReponse ? `${sansReponse} question(s) sans bonne réponse` : "Chaque question a sa bonne réponse", "red"],
      [sansJustif === 0, sansJustif ? `${sansJustif} question(s) sans justification` : "Justifications rédigées"],
      [q.description, "Description"],
    ]);
  },
  auditLabel: (q) => q.title || q.module,
};

/* ------------------------------ Blog ------------------------------ */

const blog = {
  key: "blog",
  path: "data/blog.json",
  label: "Blog",
  singular: "article",
  article: "l'article",
  icon: "news",
  emoji: "✍️",
  href: "/admin/blog",
  publicUrl: (b) => `${SITE}/blog/${encodeURIComponent(b.id)}`,
  title: (b) => b.title || b.id,
  subtitle: (b) => [blogCategoryLabel(b.category), b.publishedAt].filter(Boolean).join(" · "),
  isPublished: (b) => Boolean(b.available),
  setPublished: (b, on) => ({ ...b, available: on }),
  searchText: (b) => [b.id, b.title, b.excerpt].join(" "),
  deepSearchText: (b) => b.content || "",
  sortOptions: [
    { value: "date", label: "Date de publication", fn: (a, b) => String(b.publishedAt || "").localeCompare(String(a.publishedAt || "")) },
    { value: "titre", label: "Titre (A→Z)", fn: (a, b) => String(a.title).localeCompare(String(b.title), "fr") },
  ],
  filters: [{ key: "category", label: "Rubrique", options: BLOG_CATEGORIES.map((c) => ({ value: c.code, label: `${c.emoji} ${c.label}` })), get: (b) => b.category }],
  columns: [
    { key: "category", label: "Rubrique", render: (b) => blogCategoryLabel(b.category) },
    { key: "publishedAt", label: "Date", render: (b) => <span className="ax-muted ax-nowrap">{b.publishedAt || "—"}</span> },
  ],
  empty: () => ({ title: "", excerpt: "", category: "", content: "", publishedAt: todayIso(), available: false }),
  groups: [
    {
      title: "Article",
      fields: [
        { key: "title", label: "Titre", type: "text", required: true, full: true, counter: [40, 65] },
        // Résultat Google seulement (app/blog/[id]/page.js) ; le H1 garde le titre.
        { key: "seoTitle", label: "Titre Google (si le titre dépasse 65 caractères)", type: "text", full: true, counter: [40, 65] },
        { key: "excerpt", label: "Résumé (description SEO)", type: "textarea", rows: 2, required: true, full: true, counter: [120, 160] },
        { key: "category", label: "Rubrique", type: "select", options: BLOG_CATEGORIES.map((c) => ({ value: c.code, label: `${c.emoji} ${c.label}` })) },
        { key: "publishedAt", label: "Date de publication", type: "date" },
      ],
    },
    { title: "Contenu", fields: [{ key: "content", label: "Contenu (Markdown)", type: "markdown", required: true, full: true, rows: 26 }] },
  ],
  prepare(item, { isNew, list }) {
    const out = { ...item };
    if (!out.publishedAt) out.publishedAt = todayIso();
    if (isNew && !out.id) out.id = uniqueId(slugify(out.title, "_") || randomId(8), new Set(list.map((x) => x.id)));
    return out;
  },
  quality(b) {
    const words = wordCount(b.content);
    return checks([
      [b.title, "Titre", "red"],
      [
        (b.seoTitle || b.title || "").length <= 65,
        `Titre Google de 65 caractères max (${(b.seoTitle || b.title || "").length}) : sinon remplir « Titre Google »`,
      ],
      [b.excerpt && b.excerpt.length >= 110 && b.excerpt.length <= 170, `Résumé SEO entre 110 et 170 caractères (${(b.excerpt || "").length})`],
      [words >= 600, `Au moins 600 mots (${words})`],
      [(String(b.content || "").match(/^## /gm) || []).length >= 2, "Structuré en sections « ## »"],
      [b.category, "Rubrique", "red"],
      [/\]\(\/(concours|cours|evaluation|bac|blog)/.test(b.content || ""), "Liens internes vers le site"],
    ]);
  },
  auditLabel: (b) => b.title,
};

/* ------------------------------ Concours ouverts (news) ------------------------------ */

const news = {
  key: "news",
  path: "data/news.json",
  label: "Concours ouverts",
  singular: "annonce",
  article: "l'annonce",
  icon: "megaphone",
  emoji: "📣",
  href: "/admin/annonces",
  publicUrl: () => `${SITE}/news`,
  title: (n) => n.titre || n.id,
  subtitle: (n) => [n.etablissement, n.ville, n.date_limite && `limite ${n.date_limite}`].filter(Boolean).join(" · "),
  isPublished: (n) => !n.cloture,
  setPublished: (n, on) => ({ ...n, cloture: !on }),
  searchText: (n) => [n.titre, n.etablissement, n.ville, n.filiere].join(" "),
  sortOptions: [
    { value: "pub", label: "Publication récente", fn: (a, b) => String(b.date_publication || "").localeCompare(String(a.date_publication || "")) },
    { value: "limite", label: "Date limite proche", fn: (a, b) => String(a.date_limite || "9999").localeCompare(String(b.date_limite || "9999")) },
  ],
  filters: [
    { key: "etablissement", label: "Établissement", dynamic: true, get: (n) => n.etablissement || "" },
    {
      key: "etat",
      label: "État",
      options: [
        { value: "ouvert", label: "Ouvert" },
        { value: "bientot", label: "Ferme sous 7 j" },
        { value: "cloture", label: "Clôturé" },
      ],
      get: (n) => {
        if (n.cloture) return "cloture";
        const d = daysUntil(n.date_limite);
        return d !== null && d >= 0 && d <= 7 ? "bientot" : "ouvert";
      },
    },
  ],
  columns: [
    { key: "etablissement", label: "Étab.", render: (n) => n.etablissement || "—" },
    {
      key: "date_limite",
      label: "Date limite",
      render: (n) => {
        const d = daysUntil(n.date_limite);
        if (!n.date_limite) return <span className="ax-muted">—</span>;
        const tone = n.cloture || d < 0 ? "" : d <= 3 ? "red" : d <= 7 ? "amber" : "green";
        return <span className={`ax-pill ${tone}`}>{n.date_limite}{d !== null && d >= 0 && !n.cloture ? ` · J-${d}` : ""}</span>;
      },
    },
  ],
  empty: () => ({ titre: "", etablissement: "", ville: "", filiere: "", date_limite: "", cloture: false, lien_inscription: "", source: "", date_publication: todayIso() }),
  groups: [
    {
      title: "Annonce",
      fields: [
        { key: "titre", label: "Titre", type: "text", required: true, full: true },
        { key: "etablissement", label: "Établissement (sigle)", type: "text", placeholder: "FSJES, ENCG, FEG…", suggest: "etablissementNews" },
        { key: "ville", label: "Ville", type: "text" },
        { key: "filiere", label: "Filière", type: "text" },
        { key: "date_limite", label: "Date limite", type: "date" },
        { key: "date_publication", label: "Date de publication", type: "date" },
        { key: "lien_inscription", label: "Lien d'inscription", type: "url", full: true },
        { key: "source", label: "Source", type: "url", required: true, full: true },
        { key: "cloture", label: "Clôturé", type: "switch" },
      ],
    },
  ],
  prepare(item, { isNew, list }) {
    const out = { ...item };
    for (const k of ["ville", "filiere", "date_limite", "etablissement"]) if (out[k] === "") out[k] = null;
    if (isNew && !out.id) out.id = uniqueId(randomId(16), new Set(list.map((x) => x.id)));
    return out;
  },
  quality(n) {
    return checks([
      [n.titre, "Titre", "red"],
      [n.source, "Source", "red"],
      [n.etablissement, "Établissement (filtre de la page publique)"],
      [n.date_limite, "Date limite"],
      [n.lien_inscription, "Lien d'inscription"],
    ]);
  },
  auditLabel: (n) => n.titre,
};

/* ------------------------------ Boutique (Gumroad) ------------------------------ */

const GUMROAD_RE = /^https:\/\/([\w-]+\.)?gumroad\.com\//i;

const boutique = {
  key: "boutique",
  path: "data/boutique.json",
  label: "Boutique",
  singular: "cahier",
  article: "le cahier",
  icon: "bag",
  emoji: "🛒",
  href: "/admin/boutique",
  publicUrl: (p) => `${SITE}/boutique/${encodeURIComponent(p.id)}`,
  title: (p) => p.titre || p.id,
  subtitle: (p) => [boutiqueNiveau(p.niveau)?.label, p.matiere, formatPrix(p.prix, p.devise)].filter(Boolean).join(" · "),
  isPublished: (p) => Boolean(p.available),
  setPublished: (p, on) => ({ ...p, available: on }),
  searchText: (p) => [p.id, p.titre, p.sousTitre, p.matiere, (p.sommaire || []).join(" ")].join(" "),
  deepSearchText: (p) => p.description || "",
  sortOptions: [
    { value: "recent", label: "Ajout récent", fn: (a, b) => String(b.dateAjout || "").localeCompare(String(a.dateAjout || "")) },
    { value: "prix", label: "Prix croissant", fn: (a, b) => Number(a.prix || 0) - Number(b.prix || 0) },
    { value: "titre", label: "Titre (A→Z)", fn: (a, b) => String(a.titre).localeCompare(String(b.titre), "fr") },
  ],
  filters: [{ key: "niveau", label: "Niveau", options: BOUTIQUE_NIVEAUX.map((n) => ({ value: n.code, label: `${n.icon} ${n.label}` })), get: (p) => p.niveau }],
  columns: [
    { key: "niveau", label: "Niveau", render: (p) => boutiqueNiveau(p.niveau)?.label || "—" },
    {
      key: "prix",
      label: "Prix",
      render: (p) => (
        <span className="ax-nowrap">
          <strong>{formatPrix(p.prix, p.devise)}</strong>
          {Number(p.prixBarre) > Number(p.prix) && (
            <s className="ax-muted" style={{ marginLeft: 6 }}>
              {formatPrix(p.prixBarre, p.devise)}
            </s>
          )}
        </span>
      ),
    },
    {
      key: "stats",
      label: "Vues → clics",
      render: (p, ctx) => {
        const v = ctx?.shop?.views?.[p.id] || 0;
        const c = ctx?.shop?.clicks?.[p.id] || 0;
        return (
          <span className="ax-muted ax-nowrap" title="Vues de la fiche → clics sur « Acheter » (départs vers Gumroad)">
            {v} → {c}
            {v ? ` (${Math.round((c / v) * 100)} %)` : ""}
          </span>
        );
      },
    },
  ],
  empty: () => ({
    titre: "",
    sousTitre: "",
    niveau: "master",
    matiere: "",
    description: "",
    sommaire: [],
    pointsForts: [],
    prix: "",
    prixBarre: "",
    devise: "MAD",
    pages: "",
    format: "PDF",
    couverture: "",
    apercu: "",
    gumroadUrl: "",
    paiementDirect: true,
    badge: "",
    vedette: false,
    available: false,
  }),
  imageKey: "couverture",
  singleImage: true,
  imageFolder: (item, baseId) => `images/boutique/${baseId}`,
  suggestId: (p) => slugify(p.titre) || "cahier",
  groups: [
    {
      title: "Le cahier",
      fields: [
        { key: "titre", label: "Titre", type: "text", required: true, full: true, placeholder: "Cahier de préparation — Master CCA", counter: [30, 70] },
        { key: "sousTitre", label: "Accroche (une phrase)", type: "text", full: true, placeholder: "200 QCM corrigés et 10 sujets blancs pour réussir le concours" },
        { key: "niveau", label: "Niveau", type: "select", required: true, options: BOUTIQUE_NIVEAUX.map((n) => ({ value: n.code, label: `${n.icon} ${n.long}` })) },
        { key: "matiere", label: "Matière / filière", type: "text", placeholder: "Comptabilité, Audit…", suggest: "matiere" },
        { key: "badge", label: "Badge", type: "select", options: BOUTIQUE_BADGES.map((b) => ({ value: b, label: b })) },
        { key: "vedette", label: "Mis en avant (en tête de la boutique et sur l'accueil)", type: "switch" },
      ],
    },
    {
      title: "Prix et paiement Gumroad",
      hint: "Le paiement et la livraison du PDF se font sur Gumroad : indique ici le même prix que sur Gumroad.",
      fields: [
        { key: "prix", label: "Prix", type: "number", required: true, placeholder: "149" },
        { key: "prixBarre", label: "Prix barré (avant promo)", type: "number", placeholder: "199" },
        { key: "devise", label: "Devise", type: "select", options: BOUTIQUE_DEVISES.map((d) => ({ value: d.code, label: d.label })) },
        { key: "gumroadUrl", label: "Lien du produit Gumroad", type: "url", required: true, full: true, hint: "Ex. https://saadconcours.gumroad.com/l/cahier-cca" },
        { key: "paiementDirect", label: "Ouvrir directement le paiement (sinon la page produit Gumroad)", type: "switch", full: true },
      ],
    },
    { title: "Couverture", fields: [{ key: "couverture", label: "Couverture", type: "cover", full: true }] },
    {
      title: "Présentation",
      fields: [
        { key: "description", label: "Description (Markdown)", type: "markdown", required: true, full: true, rows: 14 },
        { key: "pointsForts", label: "Points forts (liste à puces)", type: "tags", full: true, placeholder: "Ajouter un point fort…" },
        { key: "sommaire", label: "Sommaire (un chapitre par ligne)", type: "lines", full: true, rows: 8 },
        { key: "pages", label: "Nombre de pages", type: "number" },
        { key: "format", label: "Format", type: "text", placeholder: "PDF" },
        { key: "apercu", label: "Lien vers un extrait gratuit (optionnel)", type: "url", full: true },
      ],
    },
  ],
  prepare(item, { isNew, list }) {
    const out = { ...item };
    for (const k of ["prix", "prixBarre", "pages"]) out[k] = out[k] === "" || out[k] === null || out[k] === undefined ? null : Number(out[k]);
    out.sommaire = (out.sommaire || []).map((s) => String(s).trim()).filter(Boolean);
    if (!out.dateAjout && isNew) out.dateAjout = todayIso();
    if (isNew && !out.id) out.id = uniqueId(slugify(out.titre) || randomId(8), new Set(list.map((x) => x.id)));
    return out;
  },
  quality(p) {
    return checks([
      [p.titre, "Titre", "red"],
      [Number(p.prix) > 0, "Prix", "red"],
      [GUMROAD_RE.test(p.gumroadUrl || ""), "Lien Gumroad valide (https://…gumroad.com/…)", "red"],
      [p.couverture, "Couverture"],
      [(p.description || "").length > 200, "Description détaillée (200 caractères et plus)"],
      [(p.sommaire || []).length >= 3, "Sommaire (au moins 3 lignes)"],
      [(p.pointsForts || []).length >= 2, "Au moins 2 points forts"],
      [p.pages, "Nombre de pages"],
    ]);
  },
  auditLabel: (p) => p.titre,
};

export const COLLECTIONS = { concours, cours, quiz, blog, news, boutique };
export const COLLECTION_LIST = [concours, cours, quiz, blog, news, boutique];

export function collectionByKey(key) {
  return COLLECTIONS[key] || null;
}
