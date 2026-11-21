// Écrit lib/datesContenu.json : pour chaque page de cours (Licence FSJES,
// Droit, 2ème Bac), l'empreinte de son contenu et le jour où il a changé pour
// la dernière fois. Le sitemap s'en sert comme `lastmod` (lib/datesContenu.js).
//
//   npm run dates:contenu
//
// À lancer après tout ajout ou toute modification de cours, avant le commit
// (recettes de BANQUE_PROMPTS.md). Il rejoue l'historique Git : il faut donc
// un clone complet, pas le checkout superficiel du CI — d'où un script lancé
// à la main et un fichier commité, plutôt qu'une étape de build.
//
// Méthode : à chaque commit qui touche les données d'un cours (public/data/
// cours.json, droit.json) ou ses compléments (lib/fsjesContenu, lib/droitContenu,
// lib/bacContenu), le module est redécoupé en chapitres avec le code actuel
// (decouperModule) et les fichiers de l'époque ; un chapitre dont l'empreinte
// change prend la date du commit. Un contenu modifié et pas encore commité
// prend la date du jour.

import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import { decouperModule, fsjesModule, fsjesChapitreHref } from "../lib/fsjesChapitres.js";
import { droitModule, droitModuleHref, droitChapitreHref } from "../lib/droit.js";
import { prepaModule, prepaModuleHref, prepaChapitreHref } from "../lib/prepa.js";
import { BAC_NIVEAUX, bacMatieres, bacChapitreHref } from "../lib/bacProgramme.js";
import { bacMatiereContenu } from "../lib/bacContenu/index.js";
import { empreinte, valeurChapitre, valeurModule, valeurBac } from "../lib/datesContenu.js";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SORTIE = join(ROOT, "lib", "datesContenu.json");
const AUJOURDHUI = new Date().toISOString().slice(0, 10);

const git = (...args) => execFileSync("git", args, { cwd: ROOT, encoding: "utf8", maxBuffer: 256 * 1024 * 1024 });

if (git("rev-parse", "--is-shallow-repository").trim() === "true") {
  console.error("Clone superficiel : l'historique manque, dates impossibles à calculer. Rien n'est écrit.");
  process.exit(1);
}

// --- Lecture de l'historique --------------------------------------------

function commits(...chemins) {
  return git("log", "--reverse", "--format=%H %cs", "--", ...chemins)
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((l) => {
      const [sha, date] = l.split(" ");
      return { sha, date };
    });
}

// Blobs des fichiers sous `chemins` à un commit : chemin → id de blob.
function blobs(sha, ...chemins) {
  const out = new Map();
  for (const l of git("ls-tree", "-r", sha, "--", ...chemins).split("\n")) {
    const m = l.match(/^\d+ blob ([0-9a-f]+)\t(.+)$/);
    if (m) out.set(m[2], m[1]);
  }
  return out;
}

const texteBlob = (id) => git("cat-file", "blob", id);

// Fichier de compléments d'une époque : écrit tel quel dans un dossier
// temporaire et importé (ces fichiers n'importent rien eux-mêmes).
const TMP = join(tmpdir(), `sc-dates-${process.pid}`);
mkdirSync(TMP, { recursive: true });
const modulesImportes = new Map();
async function importerBlob(id) {
  if (!modulesImportes.has(id)) {
    const f = join(TMP, `${id}.mjs`);
    writeFileSync(f, texteBlob(id));
    modulesImportes.set(id, (await import(pathToFileURL(f).href)).default);
  }
  return modulesImportes.get(id);
}

// Table d'un index.js de compléments (`const SUPPLEMENTS = {…}` ou
// `const CONTENU = {…}`) : clé → liste des fichiers fusionnés, dans l'ordre.
function lireIndex(texte, dossier) {
  const fichiers = new Map();
  for (const m of texte.matchAll(/^import\s+(\w+)\s+from\s+"\.\/([^"]+)";/gm)) fichiers.set(m[1], `${dossier}/${m[2]}`);
  const bloc = texte.match(/const (?:SUPPLEMENTS|CONTENU) = \{([\s\S]*?)\n\};/);
  const table = new Map();
  if (!bloc) return table;
  for (const l of bloc[1].split("\n")) {
    const m = l.match(/^\s*"?([\w\-/]+)"?\s*:\s*(.+?),?\s*$/);
    if (!m) continue;
    const noms = m[2].startsWith("{") ? [...m[2].matchAll(/\.\.\.(\w+)/g)].map((x) => x[1]) : [m[2]];
    table.set(m[1], noms.map((n) => fichiers.get(n)).filter(Boolean));
  }
  return table;
}

// --- Rejeu : Licence FSJES et Droit ------------------------------------

// Dernière empreinte vue et sa date, par « id#numéro » (chapitre) ou
// « id#module » (fiche du module).
async function rejouerCours(donnees, dossier) {
  const vu = new Map();
  const signatures = new Map();
  let entrees = [];
  let blobDonnees = null;
  for (const [i, { sha, date }] of commits(donnees, dossier).entries()) {
    const b = blobs(sha, donnees, dossier);
    if (!b.get(donnees)) continue; // fichier de données pas encore créé
    if (b.get(donnees) !== blobDonnees) {
      blobDonnees = b.get(donnees);
      const json = JSON.parse(texteBlob(blobDonnees));
      entrees = Array.isArray(json) ? json : Object.values(json);
    }
    const index = b.get(`${dossier}/index.js`) ? lireIndex(texteBlob(b.get(`${dossier}/index.js`)), dossier) : new Map();
    for (const c of entrees) {
      const fichiers = (index.get(c.id) || []).map((f) => b.get(f)).filter(Boolean);
      // Rien de changé pour ce cours depuis le commit précédent : on passe.
      const sig = empreinte(c) + ":" + fichiers.join(",");
      if (signatures.get(c.id) === sig) continue;
      signatures.set(c.id, sig);
      const supp = fichiers.length ? await importerBlob(fichiers[0]) : null;
      const mod = decouperModule(c, { ns: `historique-${dossier}-${i}`, supplement: () => supp });
      const noter = (cle, h) => {
        if (vu.get(cle)?.h !== h) vu.set(cle, { h, d: date });
      };
      noter(`${c.id}#module`, empreinte(valeurModule(c, mod.annexe)));
      for (const ch of mod.chapitres) noter(`${c.id}#${ch.numero}`, empreinte(valeurChapitre(ch)));
    }
  }
  return vu;
}

// --- Rejeu : 2ème Bac ---------------------------------------------------

async function rejouerBac() {
  const dossier = "lib/bacContenu";
  const vu = new Map();
  for (const { sha, date } of commits(dossier)) {
    const b = blobs(sha, dossier);
    if (!b.get(`${dossier}/index.js`)) continue;
    const index = lireIndex(texteBlob(b.get(`${dossier}/index.js`)), dossier);
    for (const [cle, fichiers] of index) {
      const contenu = {};
      for (const f of fichiers) if (b.get(f)) Object.assign(contenu, await importerBlob(b.get(f)));
      for (const [slug, ch] of Object.entries(contenu)) {
        const h = empreinte(valeurBac(ch));
        if (vu.get(`${cle}/${slug}`)?.h !== h) vu.set(`${cle}/${slug}`, { h, d: date });
      }
    }
  }
  return vu;
}

// --- Contenu actuel → dates -------------------------------------------

const dates = {};
let commites = 0;
let duJour = 0;
function dater(chemin, valeur, historique) {
  const h = empreinte(valeur);
  if (historique?.h === h) {
    dates[chemin] = { h, d: historique.d };
    commites++;
  } else {
    // Modifié depuis le dernier commit (ou jamais commité) : en ligne au
    // prochain déploiement, donc aujourd'hui.
    dates[chemin] = { h, d: AUJOURDHUI };
    duJour++;
  }
}

const lireJson = (f) => {
  const j = JSON.parse(readFileSync(join(ROOT, f), "utf8"));
  return Array.isArray(j) ? j : Object.values(j);
};

for (const [donnees, dossier, decouper, hrefModule, hrefChapitre] of [
  ["public/data/cours.json", "lib/fsjesContenu", fsjesModule, (c) => `/cours/${c.id}`, fsjesChapitreHref],
  ["public/data/droit.json", "lib/droitContenu", droitModule, droitModuleHref, droitChapitreHref],
  ["public/data/prepa.json", "lib/prepaContenu", prepaModule, prepaModuleHref, prepaChapitreHref],
]) {
  const historique = await rejouerCours(donnees, dossier);
  for (const c of lireJson(donnees)) {
    const mod = decouper(c);
    dater(`${hrefModule(c)}#module`, valeurModule(c, mod.annexe), historique.get(`${c.id}#module`));
    for (const ch of mod.chapitres) dater(hrefChapitre(c, ch), valeurChapitre(ch), historique.get(`${c.id}#${ch.numero}`));
  }
}

// Bac : contenu du code, remplacé chapitre par chapitre par les versions
// enregistrées depuis la console (public/data/bac.json, comme
// lib/bacContenuEffectif.js), qui portent leur propre date.
const historiqueBac = await rejouerBac();
const editions = new Map(lireJson("public/data/bac.json").map((e) => [e.id, e]));
for (const n of BAC_NIVEAUX.filter((x) => x.available)) {
  for (const m of bacMatieres(n.code)) {
    const code = bacMatiereContenu(n.code, m.slug);
    for (const c of m.chapitres) {
      const e = editions.get(`${n.code}/${m.slug}/${c.slug}`);
      if (e) {
        const { cours = "", exercices = "", resume = "", qcm = [] } = e;
        if (!cours && !exercices && !resume && !qcm.length) continue;
        const valeur = { cours, exercices, resume, qcm };
        dates[bacChapitreHref(m, c)] = { h: empreinte(valeurBac(valeur)), d: String(e.updatedAt || AUJOURDHUI).slice(0, 10) };
        continue;
      }
      if (code[c.slug]) dater(bacChapitreHref(m, c), valeurBac(code[c.slug]), historiqueBac.get(`${n.code}/${m.slug}/${c.slug}`));
    }
  }
}

rmSync(TMP, { recursive: true, force: true });

const trie = Object.fromEntries(Object.keys(dates).sort().map((k) => [k, dates[k]]));
writeFileSync(SORTIE, JSON.stringify(trie, null, 0).replace(/\},"/g, '},\n"') + "\n");
console.log(`lib/datesContenu.json : ${Object.keys(trie).length} pages datées (${commites} par l'historique Git, ${duJour} modifiées depuis le dernier commit → ${AUJOURDHUI}).`);
