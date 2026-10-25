// Données de l'application mobile (dossier mobile/, Flutter).
//
// L'appli ne passe jamais par le Worker (10 ms de CPU, voir README) : elle lit
// des JSON statiques publiés avec les assets, sous /app-data/v1/. Ce script
// les génère depuis les mêmes sources que le site, au moment du build
// (« prebuild » de package.json) :
//   public/data/*.json      concours, cours FSJES/ENCG, QCM, blog, réglages
//   lib/bacProgramme.js     programme du Bac + lib/bacContenu (contenu rédigé)
//   lib/fsjesChapitres.js   découpage des cours en chapitres, comme le site
//
// Sortie :
//   manifest.json           empreinte de chaque index (l'appli ne retélécharge
//                           que ce qui a changé)
//   taxonomy.json           filières, niveaux, catégories, semestres
//   concours.json, cours.json, bac.json, quiz.json, blog.json
//                           index légers (listes, filtres, recherche)
//   d/<empreinte>.json      détail d'un élément (énoncé, corrigé, chapitres…),
//                           nommé par son contenu : immuable, mis en cache
//                           pour toujours par l'appli.
//
// Mêmes règles que le site public : pas de brouillon, pas de module non
// publié, scans retirés si « scansMasques », jamais de mention de l'IA, et la
// `source` d'un concours reste réservée à la console (notes internes, retirées
// du site public depuis le 2026-09-26).
//
// Lancer à la main : node scripts/build-app-data.mjs

import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { BAC_GROUPES, BAC_MATIERES_PUBLIEES, BAC_NIVEAUX } from "../lib/bacProgramme.js";
import { bacMatiereContenu } from "../lib/bacContenu/index.js";
import { fsjesModule, fsjesModuleIcon } from "../lib/fsjesChapitres.js";
import { encgModule } from "../lib/encg.js";
import { ENCG_LANCE, TAALIM_LANCE } from "../lib/contenusPublies.mjs";
import { FILIERE_CATEGORIES } from "../lib/taxonomy.js";
import { CONCOURS_NIVEAUX } from "../lib/concoursNiveaux.js";
import { COURS_CATEGORIES, LICENCE_FILIERES, LICENCE_PARCOURS, LICENCE_SEMESTRES, coursSortComparator } from "../lib/coursTaxonomy.js";
import { BLOG_CATEGORIES } from "../lib/blogTaxonomy.js";
import { wrapAccentedMathWords } from "../app/_shared/latexPlainText.js";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DATA = join(ROOT, "public", "data");
const OUT = join(ROOT, "public", "app-data", "v1");

const readJson = (name, fallback) => {
  const p = join(DATA, name);
  return existsSync(p) ? JSON.parse(readFileSync(p, "utf8")) : fallback;
};

const hash = (s) => createHash("sha1").update(s).digest("hex").slice(0, 16);

rmSync(OUT, { recursive: true, force: true });
mkdirSync(join(OUT, "d"), { recursive: true });

// Un détail = un fichier nommé par son empreinte. Renvoie le nom à inscrire
// dans l'index (champ `d`).
function writeDetail(obj) {
  const s = JSON.stringify(obj);
  const h = hash(s);
  writeFileSync(join(OUT, "d", `${h}.json`), s);
  return h;
}

const manifestFiles = {};
function writeIndex(name, obj) {
  const s = JSON.stringify(obj);
  writeFileSync(join(OUT, name), s);
  manifestFiles[name] = hash(s);
}

// Même traitement que le site (app/_shared/mathMarkdown.js) : un mot accentué
// en indice/exposant passe en \text{}, sinon la formule est mal composée.
function md(text) {
  if (!text) return "";
  return String(text)
    .replace(/\r\n/g, "\n")
    .replace(/\$\$[\s\S]+?\$\$/g, (m) => wrapAccentedMathWords(m))
    .replace(/\$(?:\\\$|[^$])+?\$/g, (m) => (m.includes("\n\n") ? m : wrapAccentedMathWords(m)));
}

// Les QCM du site existent sous deux formes ({q, choix, bonne} pour le Bac et
// les cours, {question, options[letter], correct[]} pour les évaluations) :
// l'appli n'en connaît qu'une.
function qcmCours(list) {
  return (list || []).map((x) => ({
    q: md(x.q),
    choix: (x.choix || []).map(md),
    bonnes: [x.bonne],
    explication: md(x.explication || ""),
  }));
}

function qcmEvaluation(list) {
  return (list || []).map((x) => {
    const letters = (x.options || []).map((o) => o.letter);
    return {
      q: md(x.question),
      choix: (x.options || []).map((o) => md(o.text)),
      bonnes: (x.correct || []).map((l) => letters.indexOf(l)).filter((i) => i >= 0),
      explication: md(x.justification || ""),
      chapitre: x.chapter || "",
    };
  });
}

// ---------------------------------------------------------------- Concours
// Mêmes règles que lib/store.js (getPublicConcours) et la fiche concours.
const settings = readJson("settings.json", {});
const scansMasques = Boolean(settings.scansMasques);

function estSujetOfficiel(c) {
  return !/concours ?blanc|entra[iî]nement|reconstitution|non officiel/i.test(`${c.id} ${c.master_reel || ""}`);
}

function officielDe(c) {
  const etab = String(c.etablissement || "").trim();
  const article = /^[aeiouéèêh]/i.test(etab) ? "l'" : "la ";
  const session = /^\d{4}/.test(String(c.annee)) ? `, session ${c.annee}` : "";
  if (!c.ville || etab.includes(c.ville)) return `du concours de ${article}${etab}${session}.`;
  const lieu = etab.endsWith(")") ? `${etab.slice(0, -1)}, ${c.ville})` : `${etab} (${c.ville})`;
  return `du concours de ${article}${lieu}${session}.`;
}

function corrigeOf(c) {
  if (c.corrige_md) return c.corrige_md;
  const p = join(DATA, "corriges", `${c.id}.md`);
  return existsSync(p) ? readFileSync(p, "utf8") : "";
}

// Espace Taalim caché (TAALIM_LANCE) : ses sujets restent hors de l'appli.
const concours = readJson("concours.json", [])
  .filter((c) => c.statut !== "brouillon" && (TAALIM_LANCE || c.niveau !== "taalim"))
  .map((c) => {
    const corrige = corrigeOf(c);
    const images = scansMasques ? [] : c.images || [];
    const d = writeDetail({
      enonce: md(c.enonce_md),
      corrige: md(corrige),
      images,
    });
    return {
      id: c.id,
      annee: String(c.annee || ""),
      ville: c.ville || "",
      etablissement: c.etablissement || "",
      filiere: c.filiere || "",
      master: c.master_reel || c.filiere || "",
      categorie: c.categorie || "",
      niveau: c.niveau || "master",
      modules: Array.isArray(c.modules) ? c.modules : [],
      difficulte: c.difficulte || "",
      notions: c.notions_cles || "",
      corrige: Boolean(corrige),
      scans: images.length,
      officiel: estSujetOfficiel(c) ? officielDe(c) : "",
      ajout: c.date_ajout || "",
      d,
    };
  })
  .sort((a, b) => b.annee.localeCompare(a.annee) || a.etablissement.localeCompare(b.etablissement, "fr"));

writeIndex("concours.json", concours);

// ---------------------------------------------------------- Cours (Licence)
function moduleIndex(cours, decoupe, espace) {
  const d = writeDetail({
    annexe: md(decoupe.annexe),
    chapitres: decoupe.chapitres.map((ch) => ({
      numero: ch.numero,
      titre: ch.titre,
      slug: ch.slug,
      partie: ch.partie?.titre || "",
      cours: md(ch.cours),
      exercices: md(ch.exercices),
      resume: md(ch.resume),
      qcm: qcmCours(ch.qcm),
    })),
  });
  return {
    id: cours.id,
    espace,
    module: cours.module || "",
    titre: cours.title || cours.module || "",
    description: cours.description || "",
    categorie: cours.category || "",
    parcours: cours.parcours || "",
    filiere: cours.filiere || "",
    semestre: cours.semestre || "",
    icon: fsjesModuleIcon(cours),
    chapitres: decoupe.chapitres.map((ch) => ({
      numero: ch.numero,
      titre: ch.titre,
      slug: ch.slug,
      partie: ch.partie?.titre || "",
      exercices: ch.nbExercices,
      resume: Boolean(ch.resume),
      qcm: (ch.qcm || []).length,
    })),
    annexe: Boolean(decoupe.annexe),
    d,
  };
}

const coursIndex = [];
for (const c of readJson("cours.json", []).filter((x) => x.available).sort(coursSortComparator)) {
  const decoupe = fsjesModule(c);
  if (decoupe.chapitres.length) coursIndex.push(moduleIndex(c, decoupe, "licence"));
}
// Espace ENCG caché (ENCG_LANCE) : ses modules restent hors de l'appli aussi.
for (const c of ENCG_LANCE ? readJson("encg.json", []).filter((x) => x.available) : []) {
  const decoupe = encgModule(c);
  if (decoupe.chapitres.length) coursIndex.push(moduleIndex(c, decoupe, "encg"));
}
writeIndex("cours.json", coursIndex);

// --------------------------------------------------------------------- Bac
// Version enregistrée depuis la console (public/data/bac.json) si elle
// existe, sinon le contenu du code — comme lib/bacContenuEffectif.js.
const bacEdits = readJson("bac.json", []);
const nationaux = JSON.parse(readFileSync(join(ROOT, "lib", "bacNationaux.json"), "utf8"));

function bacChapitre(m, slug) {
  const edit = bacEdits.find((e) => e.id === `${m.niveau}/${m.slug}/${slug}`);
  if (edit && (edit.cours || edit.exercices || edit.resume || edit.qcm?.length)) return edit;
  return bacMatiereContenu(m.niveau, m.slug)[slug] || null;
}

const bacIndex = [];
for (const m of BAC_MATIERES_PUBLIEES) {
  const contenus = {};
  for (const ch of m.chapitres) {
    const c = bacChapitre(m, ch.slug);
    if (c && (c.cours || c.exercices || c.resume || c.qcm?.length)) {
      contenus[ch.slug] = {
        cours: md(c.cours),
        exercices: md(c.exercices),
        resume: md(c.resume),
        qcm: qcmCours(c.qcm),
      };
    }
  }
  const examens = m.niveau === "2bac" ? nationaux.filter((e) => e.matiere === m.slug) : [];
  if (!Object.keys(contenus).length && !examens.length) continue;
  bacIndex.push({
    niveau: m.niveau,
    slug: m.slug,
    nom: m.nom,
    court: m.court || m.nom,
    icon: m.icon || "📘",
    groupe: m.groupe || "",
    rtl: m.lang === "ar",
    description: m.description || "",
    examen: m.examen ? { label: m.examen.label, badge: m.examen.badge } : null,
    chapitres: m.chapitres
      .filter((ch) => contenus[ch.slug])
      .map((ch) => ({
        numero: ch.numero,
        titre: ch.titre,
        slug: ch.slug,
        semestre: ch.semestre,
        unite: ch.unite,
        qcm: contenus[ch.slug].qcm.length,
        exercices: Boolean(contenus[ch.slug].exercices),
        resume: Boolean(contenus[ch.slug].resume),
      })),
    examens: examens
      .map((e) => ({
        filiere: e.filiere,
        annee: e.annee,
        session: e.session,
        docs: (e.docs || []).map((doc) => ({
          type: doc.type,
          file: doc.file,
          part: doc.part || "",
          langue: doc.langue || "",
        })),
      }))
      .sort((a, b) => b.annee - a.annee || a.session.localeCompare(b.session)),
    d: writeDetail(contenus),
  });
}
writeIndex("bac.json", { niveaux: BAC_NIVEAUX.filter((n) => n.available).map(({ code, label }) => ({ code, label })), groupes: BAC_GROUPES, matieres: bacIndex });

// --------------------------------------------------------- Évaluations QCM
const quiz = readJson("quiz.json", [])
  .filter((q) => q.available)
  .map((q) => {
    const questions = qcmEvaluation(q.questions);
    return {
      id: q.id,
      module: q.module || "",
      titre: q.title || q.module || "",
      description: q.description || "",
      chapitres: q.chapters || [],
      questions: questions.length,
      d: writeDetail({ questions }),
    };
  });
writeIndex("quiz.json", quiz);

// -------------------------------------------------------------------- Blog
const blog = readJson("blog.json", [])
  .filter((p) => p.available)
  .map((p) => ({
    id: p.id,
    titre: p.title,
    extrait: p.excerpt || "",
    categorie: p.category || "",
    date: p.publishedAt || "",
    maj: p.updatedAt || "",
    d: writeDetail({ content: md(p.content) }),
  }))
  .sort((a, b) => b.date.localeCompare(a.date));
writeIndex("blog.json", blog);

// --------------------------------------------------------------- Taxonomie
writeIndex("taxonomy.json", {
  filieres: FILIERE_CATEGORIES.map(({ code, label, sousFilieres }) => ({ code, label, sousFilieres })),
  niveaux: CONCOURS_NIVEAUX.map(({ code, label, long, sub }) => ({ code, label, long, sub })),
  coursCategories: COURS_CATEGORIES,
  semestres: LICENCE_SEMESTRES,
  parcours: LICENCE_PARCOURS,
  licenceFilieres: LICENCE_FILIERES,
  blogCategories: BLOG_CATEGORIES.map(({ code, label, emoji }) => ({ code, label, emoji })),
  liens: {
    email: settings.email || "",
    facebook: settings.facebook || "",
    instagram: settings.instagram || "",
  },
});

writeFileSync(
  join(OUT, "manifest.json"),
  JSON.stringify({ version: 1, generatedAt: new Date().toISOString(), files: manifestFiles }, null, 1)
);

console.log(
  `app-data: ${concours.length} concours, ${coursIndex.length} modules, ${bacIndex.length} matières Bac, ` +
    `${quiz.length} évaluations, ${blog.length} articles → public/app-data/v1`
);
