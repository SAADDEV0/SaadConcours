// Découpe un module de cours FSJES (public/data/cours.json, un seul Markdown
// par module, modifiable depuis l'admin) en chapitres, sur le modèle de
// l'espace Bac : pour chaque chapitre, le cours, les exercices corrigés
// (l'exercice du Markdown + ceux de lib/fsjesContenu), un résumé et un QCM.
// Les cours ENCG (public/data/encg.json) suivent la même convention et passent
// par decouperModule() avec leurs propres compléments (lib/encg.js).
//
// Le Markdown suit une convention fixe :
//   # CHAPITRE N — TITRE          début d'un chapitre
//   ## ⚡ RÉSUMÉ                   facultatif : onglet Résumé du chapitre
//   ## ✏️ EXERCICE N / ## ✅ CORRECTION N
//   # PARTIE N — TITRE            regroupement facultatif de chapitres
//   # 🧾 … / # 📝 … / ## 📐 …      formulaire final et conseils (annexe)
import { fsjesSupplement } from "./fsjesContenu/index.js";

const CHAPITRE_RE = /^# CHAPITRE (\d+)\s*[—–-]\s*(.+)$/;
const PARTIE_RE = /^# PARTIE (\d+)\s*[—–-]\s*(.+)$/;
const ANNEXE_RE = /^(# 🧾|# 📝|## 📐)/;
const EXERCICE_RE = /^## ✏️\s*EXERCICE\s*\d*\s*(.*)$/;
const CORRECTION_RE = /^## ✅\s*CORRECTION/;
const RESUME_RE = /^## ⚡/;

export function slugifyTitre(s) {
  return String(s || "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

// Titre de secours quand lib/fsjesContenu ne donne pas le titre rédigé : le
// Markdown écrit les titres de chapitre en capitales.
function casseTitre(t) {
  const bas = t.toLocaleLowerCase("fr");
  return bas.charAt(0).toLocaleUpperCase("fr") + bas.slice(1);
}

function nettoyer(md) {
  return md
    .split("\n")
    .filter((l) => !/^\*Document de révision/.test(l.trim()))
    .join("\n")
    .replace(/^(\s*---\s*\n)+/, "")
    .replace(/(\n\s*---\s*)+\s*$/, "")
    .trim();
}

// "## ✏️ EXERCICE 3 — Entreprise AMAL" + "## ✅ CORRECTION 3" → exercice
// numéroté dans le chapitre, corrigé replié comme dans l'espace Bac.
function exercicesMarkdown(lignes, depart) {
  const blocs = [];
  let cur = null;
  let zone = null;
  for (const l of lignes) {
    const ex = l.match(EXERCICE_RE);
    if (ex) {
      cur = { sousTitre: ex[1].replace(/^[—–-]\s*/, "").trim(), enonce: [], corrige: [] };
      blocs.push(cur);
      zone = "enonce";
      continue;
    }
    if (CORRECTION_RE.test(l) && cur) {
      zone = "corrige";
      continue;
    }
    if (cur) cur[zone].push(l);
  }
  return blocs.map((b, i) => {
    const titre = `### Exercice ${depart + i}${b.sousTitre ? ` — ${b.sousTitre}` : ""}`;
    const enonce = nettoyer(b.enonce.join("\n"));
    const corrige = nettoyer(b.corrige.join("\n"));
    return corrige ? `${titre}\n\n${enonce}\n\n<details><summary>Voir le corrigé</summary>\n\n${corrige}\n\n</details>` : `${titre}\n\n${enonce}`;
  });
}

function parseModule(content) {
  const lignes = String(content || "").replace(/\r\n/g, "\n").split("\n");
  const chapitres = [];
  const annexe = [];
  let cur = null;
  let enAnnexe = false;
  let partie = null;

  for (const l of lignes) {
    const p = l.match(PARTIE_RE);
    if (p) {
      partie = { numero: Number(p[1]), titre: casseTitre(p[2].trim()) };
      continue;
    }
    const c = l.match(CHAPITRE_RE);
    if (c) {
      cur = { numero: Number(c[1]), titreBrut: c[2].trim(), partie, lignes: [] };
      chapitres.push(cur);
      enAnnexe = false;
      continue;
    }
    if (cur && ANNEXE_RE.test(l)) enAnnexe = true;
    if (enAnnexe) annexe.push(l);
    else if (cur) cur.lignes.push(l);
  }

  return { chapitres, annexe: nettoyer(annexe.join("\n")) };
}

// « ## ⚡ RÉSUMÉ » dans un chapitre : tout jusqu'au prochain exercice (ou à la
// fin du chapitre) part dans l'onglet Résumé, le titre lui-même en moins.
// Permet de rédiger un résumé depuis la console, sans fichier de compléments.
function extraireResume(lignes) {
  const debut = lignes.findIndex((l) => RESUME_RE.test(l));
  if (debut === -1) return { lignes, resume: "" };
  let fin = lignes.findIndex((l, i) => i > debut && (EXERCICE_RE.test(l) || CORRECTION_RE.test(l)));
  if (fin === -1) fin = lignes.length;
  return { lignes: [...lignes.slice(0, debut), ...lignes.slice(fin)], resume: nettoyer(lignes.slice(debut + 1, fin).join("\n")) };
}

// Mémo par contenu : la même fiche est découpée par plusieurs pages
// (index, module, chapitres, sitemap) pendant un même build. `ns` sépare les
// cours FSJES des cours ENCG, qui ont leurs propres compléments.
const cache = new Map();

export function decouperModule(cours, { ns, supplement }) {
  if (!cours) return null;
  const cle = `${ns}:${cours.id}:${cours.content?.length || 0}`;
  if (cache.has(cle)) return cache.get(cle);

  const { chapitres: bruts, annexe } = parseModule(cours.content);
  const supp = supplement(cours.id) || {};
  const vus = new Set();

  const chapitres = bruts.map((b) => {
    const s = supp[b.numero] || {};
    const { lignes, resume } = extraireResume(b.lignes);
    const idxEx = lignes.findIndex((l) => EXERCICE_RE.test(l));
    const coursMd = nettoyer((idxEx === -1 ? lignes : lignes.slice(0, idxEx)).join("\n"));
    const exos = idxEx === -1 ? [] : exercicesMarkdown(lignes.slice(idxEx), 1);
    const exercices = [...exos, s.exercices ? nettoyer(s.exercices) : ""].filter(Boolean).join("\n\n");
    const titre = s.titre || casseTitre(b.titreBrut);
    let slug = slugifyTitre(titre) || `chapitre-${b.numero}`;
    if (vus.has(slug)) slug = `${slug}-${b.numero}`;
    vus.add(slug);
    return {
      numero: b.numero,
      titre,
      slug,
      // Meta description propre au chapitre (lib/fsjesContenu), sinon la
      // page en compose une générique.
      description: s.description || "",
      partie: b.partie,
      cours: coursMd,
      exercices,
      nbExercices: (exercices.match(/^### Exercice/gm) || []).length,
      resume: s.resume ? nettoyer(s.resume) : resume,
      qcm: s.qcm || [],
    };
  });

  const out = { chapitres, annexe };
  cache.set(cle, out);
  return out;
}

export function fsjesModule(cours) {
  return decouperModule(cours, { ns: "fsjes", supplement: fsjesSupplement });
}

export function fsjesChapitreHref(cours, chapitre) {
  return `/cours/${encodeURIComponent(cours.id)}/${chapitre.slug}`;
}

// Emoji en tête du Markdown ("# 📗 COMPTABILITÉ ANALYTIQUE — …").
export function fsjesModuleIcon(cours, fallback = "📖") {
  const m = String(cours?.content || "").match(/^#\s+(\p{Extended_Pictographic}️?)/u);
  return m ? m[1] : fallback;
}
