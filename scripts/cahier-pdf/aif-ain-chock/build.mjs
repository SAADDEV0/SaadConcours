// Construit le cahier de préparation Master AIF (FSJES Aïn Chock) en PDF.
//   node scripts/cahier-pdf/aif-ain-chock/build.mjs public/cahiers/cahier-preparation-master-aif-fsjes-ain-chock.pdf
// Contenu : qcm.mjs (QCM par partie) et fiches.mjs (mémo + fiches) ; mise en page : style.css.
// Rendu par Edge headless (print.mjs, KaTeX chargé depuis jsDelivr), en deux passes : la
// première repère avec pdftotext la page de chaque titre, la seconde remplit le sommaire.
// Relecture visuelle : node snap.mjs <pdf> <dossier> 1,2,8 (PNG via pdf.js).
// Pour un autre master : copier ce dossier, réécrire qcm.mjs, fiches.mjs et les textes de build.mjs.
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { printPdf } from "./print.mjs";
import { QCM } from "./qcm.mjs";
import { MEMO, FICHES } from "./fiches.mjs";

const OUT = process.argv[2] || "cahier.pdf";
const SITE = "https://www.saadconcours.space/";

const PARTIES = [
  { n: 1, titre: "Comptabilité générale", sous: "Principes, immobilisations, créances, régularisations : le plus gros bloc des annales" },
  { n: 2, titre: "Comptabilité des sociétés", sous: "Capital, libération, affectation du résultat, dividendes" },
  { n: 3, titre: "Comptabilité analytique et contrôle de gestion", sous: "Coûts, seuil de rentabilité, imputation rationnelle, écarts" },
  { n: 4, titre: "Analyse financière et investissement", sous: "FR, BFR, trésorerie, effet de levier, CMPC, VAN" },
  { n: 5, titre: "Fiscalité", sous: "IS, TVA, réintégrations : des calculs qui rapportent des points sûrs" },
  { n: 6, titre: "Audit et contrôle interne", sous: "Le cœur du master : risque d'audit, démarche, indépendance" },
];

const CONF = {
  S: ["RÉPONSE SÛRE", "sure"],
  P: ["PROBABLE", "prob"],
  V: ["À VÉRIFIER", "verif"],
  E: ["ENTRAÎNEMENT", "ent"],
};

const esc = (s) => s.replace(/&(?![a-z]+;|#\d+;)/g, "&amp;");

// ── comptages
const all = Object.values(QCM).flat();
const nAIF = all.filter((q) => q.src.startsWith("AIF")).length;
const nACGSI = all.filter((q) => q.src.startsWith("ACGSI")).length;
const nENT = all.filter((q) => q.conf === "E").length;
const nTotal = all.length;

// ── table des matières : marqueurs repérés dans le PDF de la 1re passe
const toc = []; // { key, label, level }
const mark = (key) => `<span class="mk">ZZ${key}ZZ</span>`;

function qcmBlock(p, i, q) {
  const [label, cls] = CONF[q.conf];
  const opts = Object.entries(q.o).map(([l, t]) => {
    const good = q.ok.includes(l);
    return `<div class="opt${good ? " good" : ""}"><span class="l">${l}</span><span class="t">${esc(t)}</span>${good ? '<span class="chk">✓</span>' : ""}</div>`;
  }).join("");
  const rep = q.ok.length > 1 ? `Réponses : ${q.ok.split("").join(", ")}` : `Réponse : ${q.ok}`;
  return `<div class="qcm">
  <div class="qh"><span class="qn">QCM ${p}.${i + 1}</span><span class="qs">${q.src}</span><span class="badge ${cls}">${label}</span></div>
  <div class="qq">${esc(q.q)}</div>
  <div class="opts${Object.values(q.o).every((t) => t.length <= 42) ? " two" : ""}">${opts}</div>
  <div class="rep"><div class="rt">✔ ${rep}</div><div class="rx">${esc(q.ex)}</div></div>
</div>`;
}

function grille(p, list) {
  const cells = list.map((q, i) => `<div class="g"><b>${p}.${i + 1}</b> ${q.ok}</div>`).join("");
  return `<div class="grille"><div class="gt">Grille de réponses rapide</div><div class="gg">${cells}</div></div>`;
}

function partie(p) {
  const list = QCM[p.n];
  const a = list.filter((q) => q.src.startsWith("AIF")).length;
  const g = list.filter((q) => q.src.startsWith("ACGSI")).length;
  const e = list.filter((q) => q.conf === "E").length;
  const origine = [
    a && `${a} des annales AIF 2025/26`,
    g && `${g} des annales ACGSI 2022-2023`,
    e && `${e} d'entraînement`,
  ].filter(Boolean).join(", ");
  toc.push({ key: `P${p.n}`, label: `Partie ${p.n} · ${p.titre}`, level: 1 });
  toc.push({ key: `Q${p.n}`, label: `QCM corrigés · ${p.titre}`, level: 2 });
  return `<section class="partie">
  <div class="ph"><div class="pnum">${p.n}</div><div><h1>${mark(`P${p.n}`)}${p.titre}</h1><div class="psous">${p.sous}</div></div></div>
  ${FICHES[p.n]}
  <h2 class="qtitre">${mark(`Q${p.n}`)}QCM corrigés · ${p.titre}</h2>
  <p class="qintro">${list.length} QCM : ${origine}. Le questionnaire C est à choix unique ; les sujets ACGSI notaient +1 par bonne réponse, −1 par mauvaise, 0 sans réponse. Cache la zone verte, réponds, puis vérifie.</p>
  ${list.map((q, i) => qcmBlock(p.n, i, q)).join("\n")}
  ${grille(p.n, list)}
</section>`;
}

function html(pages) {
  toc.length = 0;
  toc.push({ key: "W", label: "Bienvenue dans ton cahier", level: 1, pre: "Partie ★" });
  toc.push({ key: "M", label: "Partie 0 · Mémo express", level: 1 });
  toc.push({ key: "PG", label: "Les 12 pièges classiques de ces concours", level: 2 });
  const corps = PARTIES.map(partie).join("\n");
  toc.push({ key: "F", label: "Bravo, tu as terminé !", level: 1 });
  const pg = (k) => (pages ? pages[k] ?? "?" : "00");
  const sommaire = toc.map((t) => `<div class="toc l${t.level}"><span class="tl">${t.label}</span><span class="dots"></span><span class="tp">${pg(t.key)}</span></div>`).join("");

  return `<!doctype html><html lang="fr"><head><meta charset="utf-8">
<title>Cahier de préparation · Master Audit et Ingénierie Financière · FSJES Aïn Chock</title>
<meta name="author" content="saadconcours.space">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>
<style>${fs.readFileSync(new URL("./style.css", import.meta.url), "utf8")}</style>
</head><body>
<div class="wm" aria-hidden="true"><span>saadconcours.space</span><span>saadconcours.space</span><span>saadconcours.space</span></div>

<section class="cover">
  <div class="c-top">CONCOURS D'ACCÈS AU MASTER</div>
  <div class="c-title">CAHIER DE<br>PRÉPARATION</div>
  <div class="c-master">Audit et Ingénierie Financière</div>
  <div class="c-fac">FSJES Aïn Chock · Casablanca</div>
  <div class="c-line">Fiches de cours · Formules LaTeX · QCM corrigés par thème</div>
  <div class="c-line">Annales AIF 2025/26 (questionnaires B et C) et annales ACGSI 2022-2023</div>
  <div class="c-stats">
    <div><b>6</b><span>parties de cours</span></div>
    <div><b>${nTotal}</b><span>QCM corrigés</span></div>
    <div><b>4</b><span>sujets analysés</span></div>
    <div><b>LaTeX</b><span>formules bien visibles</span></div>
  </div>
  <div class="c-prog"><div class="c-pt">AU PROGRAMME</div>
    <ul><li>Mémo express et pièges classiques</li>${PARTIES.map((p) => `<li>${p.titre}</li>`).join("")}</ul></div>
  <div class="c-by">Ce cahier a été entièrement conçu et rédigé par <b>saadconcours.space</b><br>${SITE}</div>
  <div class="c-foot">Édition 2026 · Document officiel saadconcours.space · Reproduction et revente interdites</div>
</section>

<section class="page">
  <div class="ph"><div class="pnum star">★</div><div><h1>${mark("W")}Bienvenue dans ton cahier</h1><div class="psous">À lire avant de commencer</div></div></div>
  <p>Ce cahier de préparation a été entièrement conçu par saadconcours.space pour t'accompagner vers la réussite du concours d'accès au <b>Master Audit et Ingénierie Financière (AIF)</b> de la FSJES Aïn Chock (Université Hassan II, Casablanca). Il réunit, partie par partie, une fiche de cours claire, les formules écrites en LaTeX et les QCM des annales classés par thème, avec une correction expliquée pour chaque question.</p>
  <h3 class="sous">Les sujets utilisés</h3>
  <table class="tab">
  <thead><tr><th>Sujet</th><th>Format</th><th>Dans ce cahier</th></tr></thead>
  <tbody>
  <tr><td>AIF 2025/26 · questionnaire B</td><td>34 QCM ; aucun document autorisé</td><td>34 QCM</td></tr>
  <tr><td>AIF 2025/26 · questionnaire C</td><td>40 QCM à choix unique</td><td>40 QCM</td></tr>
  <tr><td>ACGSI 2022 (ancien master d'audit d'Aïn Chock)</td><td>Techniques comptables + fiscalité ; +1 / −1 / 0</td><td>${all.filter((q) => q.src.startsWith("ACGSI 2022")).length} QCM choisis</td></tr>
  <tr><td>ACGSI 2023</td><td>Deux épreuves de 45 minutes ; +1 / −1 / 0 ; calculatrice programmable interdite</td><td>${all.filter((q) => q.src.startsWith("ACGSI 2023")).length} QCM choisis</td></tr>
  </tbody></table>
  <p class="note">Pourquoi l'ACGSI ? Le jury d'Aïn Chock recycle ses énoncés : le coût d'approvisionnement, la voiture de tourisme, le critère taxe / redevance ou la date de rattachement des charges reviennent d'un sujet à l'autre, avec d'autres chiffres et d'autres lettres. Les durées des questionnaires AIF ne figurent pas sur les sujets récupérés.</p>
  <h3 class="sous">Légende des corrigés</h3>
  <table class="tab legende"><tbody>
  <tr><td><span class="badge sure">RÉPONSE SÛRE</span></td><td>Calcul vérifié ou règle sans ambiguïté.</td></tr>
  <tr><td><span class="badge prob">PROBABLE</span></td><td>Logique solide, mais énoncé ou cours discutable.</td></tr>
  <tr><td><span class="badge verif">À VÉRIFIER</span></td><td>Deux lectures possibles : confirme avec ton cours, ou laisse blanc le jour J.</td></tr>
  <tr><td><span class="badge ent">ENTRAÎNEMENT</span></td><td>Question rédigée par SaadConcours (audit), pas issue d'un sujet.</td></tr>
  </tbody></table>
  <h3 class="sous">Comment l'utiliser</h3>
  <ol>
    <li>Lis le mémo express, puis les parties 1 à 6 (fiche de cours et formules).</li>
    <li>À la fin de chaque partie, passe aux QCM du thème en cachant la zone verte.</li>
    <li>Pour chaque question, calcule ou raisonne d'abord, regarde les options ensuite.</li>
    <li>En cas de doute, laisse blanc : avec le barème −1, une mauvaise réponse coûte autant qu'une bonne rapporte.</li>
  </ol>
  <div class="encadre"><b>Document officiel saadconcours.space.</b> La FSJES Aïn Chock ne publie pas de corrigé : toutes les réponses de ce cahier sont rédigées par SaadConcours, établies par calcul et selon les règles du CGI, du CGNC et de la loi 17-95. Vérifie toujours avec ton cours, surtout pour les questions « PROBABLE » et « À VÉRIFIER ». Document personnel : toute reproduction ou revente sans l'accord de saadconcours.space est interdite.</div>
</section>

<section class="page">
  <h1 class="sommaire-t">Sommaire</h1>
  ${sommaire}
</section>

<section class="partie">
  <div class="ph"><div class="pnum">0</div><div><h1>${mark("M")}Mémo express</h1><div class="psous">Les chiffres et réflexes qui rapportent le plus de points</div></div></div>
  ${MEMO.replace('<h3 class="sous">Les 12', `<h3 class="sous">${mark("PG")}Les 12`)}
</section>

${corps}

<section class="page fin">
  <div class="ph"><div class="pnum star">★</div><div><h1>${mark("F")}Bravo, tu as terminé !</h1><div class="psous">Un dernier réflexe avant le jour J</div></div></div>
  <p>Tu viens de parcourir <b>${nTotal} QCM corrigés</b> (${nAIF} des annales AIF, ${nACGSI} des annales ACGSI, ${nENT} d'entraînement) et 7 fiches. Avant le concours : relis le mémo express, refais les QCM marqués « PROBABLE » et « À VÉRIFIER », et entraîne-toi à calculer avant de regarder les options.</p>
  <div class="encadre"><b>Retrouve plus de ressources</b><br>Les sujets AIF 2025/26 et ACGSI, avec leurs corrigés complets, sont en ligne sur le site, ainsi que les annales des autres masters d'Aïn Chock (CCA, Finance d'Entreprise et de Marché, BFID…).<br>Site web : <b>${SITE}</b></div>
  <p class="copy">© 2026 saadconcours.space · Tous droits réservés. Ce document est destiné à un usage personnel. Toute reproduction, diffusion ou revente sans autorisation écrite est interdite.</p>
</section>

<script>
window.__errors = [];
document.addEventListener("DOMContentLoaded", () => {
  renderMathInElement(document.body, {
    delimiters: [{ left: "$$", right: "$$", display: true }, { left: "$", right: "$", display: false }],
    throwOnError: false,
    errorCallback: (m) => window.__errors.push(String(m)),
  });
  document.querySelectorAll(".katex-error").forEach((e) => window.__errors.push(e.title || e.textContent));
  document.fonts.ready.then(() => { window.__ready = true; });
});
</script>
</body></html>`;
}

// En-tête et pied de page : margin boxes @page de style.css (absents de la couverture).
async function render(pages, file) {
  const h = path.join(os.tmpdir(), "cahier-build.html");
  let src = html(pages);
  if (pages) src = src.replace(/<span class="mk">ZZ\w+ZZ<\/span>/g, "");
  fs.writeFileSync(h, src);
  await printPdf(h, file);
}

function pagesOf(file) {
  const txt = execFileSync("pdftotext", ["-enc", "UTF-8", file, "-"], { encoding: "utf8", maxBuffer: 64 << 20 });
  const pages = {};
  txt.split("\f").forEach((t, i) => {
    for (const m of t.matchAll(/ZZ(\w+?)ZZ/g)) if (!(m[1] in pages)) pages[m[1]] = i + 1;
  });
  return pages;
}

const pass1 = path.join(os.tmpdir(), "cahier-build.pass1.pdf");
await render(null, pass1);
const pages = pagesOf(pass1);
const missing = toc.filter((t) => !(t.key in pages)).map((t) => t.key);
if (missing.length) console.warn("Marqueurs introuvables :", missing.join(", "));
await render(pages, OUT);
console.log(JSON.stringify({ nTotal, nAIF, nACGSI, nENT, pages }, null, 0));
