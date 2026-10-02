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
  { n: 4, titre: "Analyse financière et investissement", sous: "FR, BFR, trésorerie, effet de levier, CMPC, VAN", tombe: "Tout le questionnaire C : TN, levier, VAN à flux constants" },
  { n: 5, titre: "Fiscalité", sous: "IS, TVA, réintégrations : des calculs qui rapportent des points sûrs" },
  { n: 6, titre: "Audit et contrôle interne", sous: "Le cœur du master : risque d'audit, démarche, indépendance", tombe: "Peu à l'écrit, beaucoup à l'entretien" },
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
  const titre = q.titre ? `<div class="rinfo"><span class="rtit">${q.titre}</span><span class="rans">Posé en ${q.ans}</span></div>` : "";
  const retenir = q.retenir ? `<div class="retenir"><b>À retenir :</b> ${q.retenir}</div>` : "";
  return `<div class="qcm${q.titre ? " rq" : ""}">
  ${titre}<div class="qh"><span class="qn">QCM ${p}.${i + 1}</span><span class="qs">${q.src}</span><span class="badge ${cls}">${label}</span></div>
  <div class="qq">${esc(q.q)}</div>
  <div class="opts${Object.values(q.o).every((t) => t.length <= 42) ? " two" : ""}">${opts}</div>
  <div class="rep"><div class="rt">✔ ${rep}</div><div class="rx">${esc(q.ex)}</div></div>
  ${retenir}
</div>`;
}

// Énoncés posés au moins deux fois (ACGSI 2017, 2022, 2023 ; AIF 2025/26 B et C), vérifiés dans les extraits.
const RETOMBE = [
  ["IS avec stock évalué au prix de vente et arrhes (AZERTY / AZ AGRO)", "2017 · 2022 · 2023", "643 900 + 52 700 − 28 000 − 25 000 = 643 600, puis × le taux du sujet", "ACGSI 2023 · Fiscalité · Q5"],
  ["Cotisation minimale à deux taux (PIMPOM / CFAFI)", "2017 · 2022 · 2023", "0,25 % sur sucre, farine, huile, beurre + 0,5 % sur le reste, sans production stockée ni écart passif", "ACGSI 2017 · Fiscalité · Q20"],
  ["Crédit-bail : 8 000 par mois, véhicule de 450 000", "2017 · 2022 · 2023", "« tourisme » → 60 000 ; « transport de personnel » → 96 000", "ACGSI 2022 · Fiscalité · Q8"],
  ["Critère taxe / redevance", "2017 · 2022 · AIF B", "L'équivalence (la lettre change à chaque fois)", "AIF 2025/26 · Quest. B · Q20"],
  ["Véhicule en dégressif, cumul « avant inventaire »", "2017 · 2022 · 2023", "Dès le 1er jour du mois : 400 000 × 40 % × 3/12 = 40 000", "ACGSI 2022 · Techn. comptables · Q6"],
  ["L'exploitant paie une dépense personnelle", "2017 · 2022 · 2023", "Débit compte de l'exploitant, crédit banque", "ACGSI 2022 · Techn. comptables · Q7"],
  ["Facture n° 245, TVA au régime des encaissements", "2017 · 2023", "Seule la part payée dans le mois : 999", "ACGSI 2023 · Techn. fiscales · Q15"],
  ["Titres de participation : coût 245 000, provision 32 000, valeur 250 000", "2017 · 2022", "Reprise totale des 32 000", "ACGSI 2022 · Techn. comptables · Q11"],
  ["Voiture de tourisme plafonnée", "2017 · 2023 · AIF B et C", "Base 300 000 TTC, 20 % par an, prorata en mois", "AIF 2025/26 · Quest. B · Q33"],
  ["Coût d'achat d'une commande (TTC, transport, réception, unité d'œuvre)", "2022 · 2023 · AIF B", "Prix HT + frais : 2 615 (ACGSI) ; 3 933,50 (AIF)", "AIF 2025/26 · Quest. B · Q9"],
  ["Emprunt de 500 000 au 1er juillet, intérêts annuels 36 000", "2022 · 2023", "18 000 d'intérêts courus au 31/12", "ACGSI 2022 · Techn. comptables · Q4"],
  ["Valeur d'entrée d'une machine", "2022 · 2023", "Installation + transport + essais : 205 000 ; formation exclue", "ACGSI 2022 · Techn. comptables · Q8"],
  ["Hôtel de 50 chambres, imputation rationnelle", "2022 · 2023", "105 000 en imputation rationnelle ; −595 000 en résultat réel", "ACGSI 2022 · Techn. comptables · Q16"],
  ["Bénéfice distribuable avec report à nouveau débiteur", "2017 · AIF B", "RN − report débiteur − réserve légale", "AIF 2025/26 · Quest. B · Q3"],
  ["Cadeaux publicitaires", "2022 · 2023 · AIF C", "≤ 100 DH TTC et sigle ; sinon on réintègre le TTC", "AIF 2025/26 · Quest. C · Q33"],
  ["Exercice de rattachement des charges déductibles", "2023 · AIF B", "Celui de l'engagement, quelle que soit la date de paiement", "AIF 2025/26 · Quest. B · Q25"],
  ["Frais de mission du directeur commercial", "AIF B et C", "Aucun retraitement", "AIF 2025/26 · Quest. B · Q28"],
];

// Chaque question qui retombe est donnée en entier en tête du cahier et retirée de sa partie.
const RQ = RETOMBE.map(([titre, ans, retenir, src]) => {
  const q = all.find((x) => x.src === src);
  if (!q) throw new Error("QCM introuvable : " + src);
  return { ...q, titre, ans, retenir };
});
const moved = new Set(RETOMBE.map((r) => r[3]));
const PART = Object.fromEntries(Object.entries(QCM).map(([p, l]) => [p, l.filter((q) => !moved.has(q.src))]));

let PAGES = null;
const pg = (k) => (PAGES ? PAGES[k] ?? "?" : "00");

function grille(p, list) {
  const cells = list.map((q, i) => `<div class="g"><b>${p}.${i + 1}</b> ${q.ok}</div>`).join("");
  return `<div class="grille"><div class="gt">Grille de réponses rapide</div><div class="gg">${cells}</div></div>`;
}

function partie(p) {
  const list = PART[p.n];
  const a = QCM[p.n].filter((q) => q.src.startsWith("AIF")).length;
  const r = QCM[p.n].filter((q) => moved.has(q.src)).length;
  const g = list.filter((q) => q.src.startsWith("ACGSI")).length;
  const e = list.filter((q) => q.conf === "E").length;
  const origine = [
    a && `${a} des annales AIF 2025/26`,
    g && `${g} des annales ACGSI 2017-2023`,
    e && `${e} d'entraînement`,
  ].filter(Boolean).join(", ");
  toc.push({ key: `P${p.n}`, label: `Partie ${p.n} · ${p.titre}`, level: 1 });
  toc.push({ key: `Q${p.n}`, label: `QCM corrigés · ${p.titre}`, level: 2 });
  return `<section class="partie">
  <div class="ph"><div class="pnum">${p.n}</div><div><h1>${mark(`P${p.n}`)}${p.titre}</h1><div class="psous">${p.sous}</div></div></div>
  <div class="tombe"><b>Ce qui tombe :</b> ${a} question${a > 1 ? "s" : ""} sur 74 dans les annales AIF 2025/26 (${Math.round((a / 74) * 100)} %)${r ? ` · ${r} énoncé${r > 1 ? "s" : ""} de ce thème retombe${r > 1 ? "nt" : ""} d'une année à l'autre : voir p. ${pg("R")}` : ""}${p.tombe ? " · " + p.tombe : ""}</div>
  ${FICHES[p.n]}
  <h2 class="qtitre">${mark(`Q${p.n}`)}QCM corrigés · ${p.titre}</h2>
  <p class="qintro">${list.length} QCM : ${origine}. Le questionnaire C est à choix unique ; les sujets ACGSI notaient +1 par bonne réponse, −1 par mauvaise, 0 sans réponse. Cache la zone verte, réponds, puis vérifie.</p>
  ${list.map((q, i) => qcmBlock(p.n, i, q)).join("\n")}
  ${grille(p.n, list)}
</section>`;
}

function html(pages) {
  PAGES = pages;
  toc.length = 0;
  toc.push({ key: "W", label: "Bienvenue dans ton cahier", level: 1, pre: "Partie ★" });
  toc.push({ key: "R", label: `Les ${RETOMBE.length} questions qui retombent`, level: 1 });
  toc.push({ key: "M", label: "Partie 0 · Mémo express", level: 1 });
  toc.push({ key: "PG", label: "Les 12 pièges classiques de ces concours", level: 2 });
  const corps = PARTIES.map(partie).join("\n");
  toc.push({ key: "F", label: "Bravo, tu as terminé !", level: 1 });
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
  <div class="c-badge">Spécial révision J-2 · J-1</div>
  <div class="c-title">CAHIER DE<br>PRÉPARATION</div>
  <div class="c-master">Audit et Ingénierie Financière</div>
  <div class="c-fac">FSJES Aïn Chock · Casablanca</div>
  <div class="c-line">Fiches de cours · Formules LaTeX · QCM corrigés par thème</div>
  <div class="c-line">Annales AIF 2025/26 (questionnaires B et C) et annales ACGSI 2017, 2022, 2023</div>
  <div class="c-stats">
    <div><b>6</b><span>parties de cours</span></div>
    <div><b>${nTotal}</b><span>QCM corrigés</span></div>
    <div><b>5</b><span>sujets corrigés</span></div>
    <div><b>${RETOMBE.length}</b><span>questions qui retombent</span></div>
  </div>
  <div class="c-prog"><div class="c-pt">AU PROGRAMME</div>
    <ul><li>Les questions qui retombent</li><li>Mémo express et pièges classiques</li>${PARTIES.map((p) => `<li>${p.titre}</li>`).join("")}</ul></div>
  <div class="c-by">Ce cahier a été entièrement conçu et rédigé par <b>saadconcours.space</b><br>${SITE}</div>
  <div class="c-foot">Édition 2026 · Document officiel saadconcours.space · Reproduction et revente interdites</div>
</section>

<section class="page welcome">
  <div class="ph"><div class="pnum star">★</div><div><h1>${mark("W")}Bienvenue dans ton cahier</h1><div class="psous">À lire avant de commencer</div></div></div>
  <p>Ce cahier de préparation a été entièrement conçu par saadconcours.space pour t'accompagner vers la réussite du concours d'accès au <b>Master Audit et Ingénierie Financière (AIF)</b> de la FSJES Aïn Chock (Université Hassan II, Casablanca). Il est pensé pour les deux derniers jours : les questions que le jury repose, puis, par thème, une fiche de cours, les formules en LaTeX et les QCM des annales corrigés et expliqués.</p>
  <h3 class="sous">Les sujets utilisés</h3>
  <table class="tab">
  <thead><tr><th>Sujet</th><th>Format</th><th>Dans ce cahier</th></tr></thead>
  <tbody>
  <tr><td>AIF 2025/26 · questionnaire B</td><td>34 QCM ; aucun document autorisé</td><td>34 QCM</td></tr>
  <tr><td>AIF 2025/26 · questionnaire C</td><td>40 QCM à choix unique</td><td>40 QCM</td></tr>
  <tr><td>ACGSI 2017 (ancien master d'audit d'Aïn Chock)</td><td>1 h 30 ; +1 / −1 / 0 ; plan comptable et calculatrice programmable interdits</td><td>${all.filter((q) => q.src.startsWith("ACGSI 2017")).length} QCM choisi</td></tr>
  <tr><td>ACGSI 2022</td><td>Techniques comptables + fiscalité ; +1 / −1 / 0</td><td>${all.filter((q) => q.src.startsWith("ACGSI 2022")).length} QCM choisis</td></tr>
  <tr><td>ACGSI 2023</td><td>Deux épreuves de 45 minutes ; +1 / −1 / 0 ; calculatrice programmable interdite</td><td>${all.filter((q) => q.src.startsWith("ACGSI 2023")).length} QCM choisis</td></tr>
  </tbody></table>
  <p class="note">Pourquoi l'ACGSI ? C'est l'ancien master d'audit d'Aïn Chock, et son jury recycle ses énoncés : ${RETOMBE.length} questions reviennent au moins deux fois entre 2017 et 2025, souvent avec les mêmes chiffres et d'autres lettres. Les durées des questionnaires AIF ne figurent pas sur les sujets récupérés.</p>
  <div class="leg"><span class="badge sure">RÉPONSE SÛRE</span> calcul vérifié <span class="badge prob">PROBABLE</span> énoncé ou cours discutable <span class="badge verif">À VÉRIFIER</span> deux lectures, laisse blanc si doute <span class="badge ent">ENTRAÎNEMENT</span> rédigée par SaadConcours</div>
  <h3 class="sous">Ton plan de révision en 2 jours</h3>
  <table class="tab plan">
  <thead><tr><th>Quand</th><th>Quoi</th><th>Pages</th></tr></thead>
  <tbody>
  <tr><td>J-2 matin (1 h 30)</td><td>Les questions qui retombent, puis le mémo express et les 12 pièges</td><td>${pg("R")} et ${pg("M")}</td></tr>
  <tr><td>J-2 après-midi (3 h)</td><td>Fiscalité, puis comptabilité générale : fiche, puis QCM en cachant la zone verte</td><td>${pg("P5")} et ${pg("P1")}</td></tr>
  <tr><td>J-2 soir (1 h)</td><td>Refais les QCM ratés et note sur une feuille les règles oubliées</td><td>Grilles de fin de partie</td></tr>
  <tr><td>J-1 matin (2 h 30)</td><td>Analytique et contrôle de gestion, puis comptabilité des sociétés</td><td>${pg("P3")} et ${pg("P2")}</td></tr>
  <tr><td>J-1 après-midi (2 h)</td><td>Analyse financière, puis audit (utile aussi pour l'entretien)</td><td>${pg("P4")} et ${pg("P6")}</td></tr>
  <tr><td>J-1 soir (30 min)</td><td>Relis seulement : questions qui retombent, mémo, ta feuille d'erreurs. Dors tôt.</td><td>${pg("R")}</td></tr>
  </tbody></table>
  <p class="note">Pour chaque QCM : calcule ou raisonne d'abord, regarde les options ensuite. En cas de doute, laisse blanc : avec un barème à −1, une mauvaise réponse coûte autant qu'une bonne rapporte.</p>
  <div class="encadre"><b>Document officiel saadconcours.space.</b> La FSJES Aïn Chock ne publie pas de corrigé : les réponses sont rédigées par SaadConcours, par calcul et selon le CGI, le CGNC et la loi 17-95. Reproduction et revente interdites.</div>
</section>

<section class="page">
  <h1 class="sommaire-t">Sommaire</h1>
  ${sommaire}
</section>

<section class="partie">
  <div class="ph"><div class="pnum star">♻</div><div><h1>${mark("R")}Les ${RETOMBE.length} questions qui retombent</h1><div class="psous">Énoncés posés au moins deux fois par le jury d'Aïn Chock, de l'ACGSI 2017 à l'AIF 2025/26 : commence par eux.</div></div></div>
  <div class="encadre"><b>Règle d'or.</b> Le jury garde l'énoncé et change les chiffres, la date ou l'ordre des lettres. Retiens la méthode, jamais la lettre, et lis chaque mot clé : « tourisme » ou « transport de personnel », « avant inventaire », « HT » ou « TTC ».</div>
  ${RQ.map((q, i) => qcmBlock("R", i, q)).join("\n")}
  ${grille("R", RQ)}
</section>

<section class="partie">
  <div class="ph"><div class="pnum">0</div><div><h1>${mark("M")}Mémo express</h1><div class="psous">Les chiffres et réflexes qui rapportent le plus de points</div></div></div>
  ${MEMO.replace('<h3 class="sous">Les 12', `<h3 class="sous">${mark("PG")}Les 12`)}
</section>

${corps}

<section class="page fin">
  <div class="ph"><div class="pnum star">★</div><div><h1>${mark("F")}Bravo, tu as terminé !</h1><div class="psous">Un dernier réflexe avant le concours</div></div></div>
  <p>Tu viens de parcourir <b>${nTotal} QCM corrigés</b> (${nAIF} des annales AIF, ${nACGSI} des annales ACGSI, ${nENT} d'entraînement), les ${RETOMBE.length} questions qui retombent et 6 fiches de cours. La veille : relis seulement la page des questions qui retombent (p. ${pg("R")}), le mémo express (p. ${pg("M")}) et les QCM marqués « PROBABLE » et « À VÉRIFIER ».</p>
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
