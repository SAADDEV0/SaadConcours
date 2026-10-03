// Construit le cahier de préparation Master CCA (FSJES Aïn Chock) en PDF.
//   node scripts/cahier-pdf/cca-ain-chock/build.mjs public/cahiers/cahier-preparation-master-cca-fsjes-ain-chock.pdf
// Contenu : qcm.mjs (QCM par partie) et fiches.mjs (mémo + fiches) ; mise en page : style.css.
// Même moteur que le cahier AIF (scripts/cahier-pdf/aif-ain-chock) : Edge headless (print.mjs),
// deux passes pour remplir le sommaire. Relecture : node snap.mjs <pdf> <dossier> 1,2,8.
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
  { n: 1, titre: "Comptabilité générale et approfondie", sous: "Importations, coûts d'entrée, amortissements, devises, régularisations : le plus gros bloc des annales" },
  { n: 2, titre: "Comptabilité des sociétés", sous: "Capital, libération, réserve légale, premier dividende" },
  { n: 3, titre: "Normes IFRS", sous: "Les différences avec le CGNC et les normes à connaître", tombe: "Aucune question dans les sujets connus : module annoncé par les candidats de 2026" },
  { n: 4, titre: "Comptabilité analytique et contrôle de gestion", sous: "Coûts complets, charges de substitution, seuil de rentabilité, budgets, écarts" },
  { n: 5, titre: "Fiscalité", sous: "Réintégrations, intérêts d'associés, cotisation minimale, prorata de TVA : les points les plus sûrs" },
  { n: 6, titre: "Audit", sous: "Assertions, commissaire aux comptes, démarche : utile aussi pour l'oral", tombe: "Une question de cours en 2024 ; module annoncé par les candidats de 2026" },
];

const CONF = {
  S: ["RÉPONSE SÛRE", "sure"],
  P: ["PROBABLE", "prob"],
  V: ["À VÉRIFIER", "verif"],
  E: ["ENTRAÎNEMENT", "ent"],
};

const esc = (s) => s.replace(/&(?![a-z]+;|#\d+;)/g, "&amp;");

// ── comptages par origine
const cat = (q) =>
  q.conf === "E" ? "ENT"
  : q.src.startsWith("Reconstitution") ? "REC"
  : q.src.startsWith("CCA FC 2022") ? "FC"
  : q.src.startsWith("CCA 2024") ? "Y24"
  : "ADA";
const all = Object.values(QCM).flat();
const count = (c, list = all) => list.filter((q) => cat(q) === c).length;
const nTotal = all.length;
const n24 = count("Y24"), nFC = count("FC"), nREC = count("REC"), nADA = count("ADA"), nENT = count("ENT");
const SESSIONS = ["Y24", "FC", "REC"];
const nSessions = all.filter((q) => SESSIONS.includes(cat(q))).length;

const toc = [];
const mark = (key) => `<span class="mk">ZZ${key}ZZ</span>`;
const ref = (q) => q.key || q.src;

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

// Trames posées au moins deux fois par le jury d'Aïn Chock (CCA 2017 → 2024), vérifiées dans les énoncés.
// A et B = sujets CCA non datés ; Rec. = reconstitution non officielle 2022/23.
const RETOMBE = [
  ["Coût d'un matériel importé en euros", "2017 · 2018 · 2019 FI · A · B · FC 2022 · Rec.", "Cours du dédouanement + transport + port + droits d'entrée ; TVA récupérable exclue", "Reconstitution 2022/23 · Q5"],
  ["Règlement du fournisseur étranger : perte de change", "2017 · 2018 · 2019 FI · A · B · FC 2022 · Rec.", "Devises × (cours du paiement − cours d'entrée), en 6331 ou 7331", "Reconstitution 2022/23 · Q6"],
  ["Frais engagés pour choisir le fournisseur", "2019 · 2019 FI · A · B", "Mission, voyage, honoraires de choix : charges, jamais coût", "R-mission"],
  ["Intérêts des comptes courants d'associés", "2017 · 2018 · 2019 FI · A · B · FC 2022 · 2024 · Rec.", "Taux fiscal de l'année + avances plafonnées au capital libéré, période par période", "CCA FC 2022 · Q9"],
  ["Dons : fondations, œuvres sociales, associations", "2017 · 2018 · 2019 FI · A · B · FC 2022 · 2024 · Rec.", "Fondations : 100 % ; œuvres sociales : 2 ‰ du CA ; association non reconnue : réintégrée", "CCA FC 2022 · Q7"],
  ["Reprises de provisions", "2017 · 2018 · 2019 FI · 2020 · A · B · FC 2022", "Provision non déductible à l'origine : reprise déduite ; sinon imposable", "CCA FC 2022 · Q11"],
  ["Voiture de tourisme et dotation omise", "2020 · FC 2022 · Rec.", "300 000 TTC × 20 % par an ; rattrapage d'une dotation omise réintégré", "Reconstitution 2022/23 · Q12"],
  ["Produit financier comptabilisé net d'une retenue", "2018 · 2020 · FC 2022 · Rec.", "Comptabilisé net : réintégrer brut − net ; comptabilisé brut : rien", "Reconstitution 2022/23 · Q13"],
  ["Cotisation minimale contre IS", "9 sujets sur 10", "Base sans produits de cession ; impôt exigible = max (IS ; CM)", "Reconstitution 2022/23 · Q9"],
  ["Écarts de conversion passif", "2019 · 2020 · A · B", "Celui de N réintégré, celui de N-1 déduit", "R-ecp"],
  ["Taxe professionnelle payée en retard", "2017 · 2019 FI · B", "Principal déductible ; pénalité et majoration réintégrées", "R-tp"],
  ["Prorata de déduction de la TVA", "2017 · A · 2024 · Rec.", "Numérateur TTC ; indemnités sans contrepartie exclues", "Reconstitution 2022/23 · Q14"],
  ["Créance en euros à l'inventaire", "2024 · Rec.", "Écart de conversion actif + provision ; la perte n'est réalisée qu'au règlement", "CCA 2024 · Q23"],
  ["Réserve légale avec report à nouveau débiteur", "2024 · Rec.", "5 % après le report débiteur, plafond de 10 % du capital", "CCA 2024 · Q16"],
  ["Premier dividende", "2024 · Rec.", "Capital libéré et non remboursé, prorata pour les libérations de l'année", "CCA 2024 · Q21"],
  ["Régime suspensif de la TVA", "2024 · Rec.", "Exportateurs, plafond du CA export de N-1, attestation par fournisseur", "R-susp"],
  ["Principes du CGNC", "2017 · 2019 · 2020 · A · B · FC 2022 · Rec.", "Sept principes ; régularité, sincérité, image fidèle", "Reconstitution 2022/23 · Q1"],
];

// Chaque trame qui retombe est donnée en entier en tête du cahier et retirée de sa partie.
const RQ = RETOMBE.map(([titre, ans, retenir, r]) => {
  const found = all.filter((x) => ref(x) === r);
  if (found.length !== 1) throw new Error(`Référence ${r} : ${found.length} QCM`);
  return { ...found[0], titre, ans, retenir };
});
const moved = new Set(RETOMBE.map((r) => r[3]));
const PART = Object.fromEntries(Object.entries(QCM).map(([p, l]) => [p, l.filter((q) => !moved.has(ref(q)))]));

let PAGES = null;
const pg = (k) => (PAGES ? PAGES[k] ?? "?" : "00");

function grille(p, list) {
  const cells = list.map((q, i) => `<div class="g"><b>${p}.${i + 1}</b> ${q.ok}</div>`).join("");
  return `<div class="grille"><div class="gt">Grille de réponses rapide</div><div class="gg">${cells}</div></div>`;
}

function partie(p) {
  const list = PART[p.n];
  const full = QCM[p.n];
  const s = full.filter((q) => SESSIONS.includes(cat(q))).length;
  const r = full.filter((q) => moved.has(ref(q))).length;
  const origine = [
    count("Y24", list) && `${count("Y24", list)} du sujet 2024`,
    count("FC", list) && `${count("FC", list)} du sujet FC 2022`,
    count("REC", list) && `${count("REC", list)} de la reconstitution 2022/23`,
    count("ADA", list) && `${count("ADA", list)} d'épreuves rédigées 2017-2020 mises en QCM`,
    count("ENT", list) && `${count("ENT", list)} d'entraînement`,
  ].filter(Boolean).join(", ");
  const tombe = s
    ? `${s} question${s > 1 ? "s" : ""} sur ${nSessions} dans les QCM 2024, FC 2022 et la reconstitution 2022/23 (${Math.round((s / nSessions) * 100)} %)`
    : "";
  toc.push({ key: `P${p.n}`, label: `Partie ${p.n} · ${p.titre}`, level: 1 });
  toc.push({ key: `Q${p.n}`, label: `QCM corrigés · ${p.titre}`, level: 2 });
  return `<section class="partie">
  <div class="ph"><div class="pnum">${p.n}</div><div><h1>${mark(`P${p.n}`)}${p.titre}</h1><div class="psous">${p.sous}</div></div></div>
  <div class="tombe"><b>Ce qui tombe :</b> ${[tombe, r && `${r} trame${r > 1 ? "s" : ""} de ce thème retombe${r > 1 ? "nt" : ""} d'une année à l'autre : voir p. ${pg("R")}`, p.tombe].filter(Boolean).join(" · ")}</div>
  ${FICHES[p.n]}
  <h2 class="qtitre">${mark(`Q${p.n}`)}QCM corrigés · ${p.titre}</h2>
  <p class="qintro">${list.length} QCM : ${origine}. Dans les sujets 2024 et FC 2022, une ou plusieurs propositions peuvent être justes ; la reconstitution 2022/23 n'en a qu'une. Cache la zone verte, réponds, puis vérifie.</p>
  ${list.map((q, i) => qcmBlock(p.n, i, q)).join("\n")}
  ${grille(p.n, list)}
</section>`;
}

function html(pages) {
  PAGES = pages;
  toc.length = 0;
  toc.push({ key: "W", label: "Bienvenue dans ton cahier", level: 1 });
  toc.push({ key: "R", label: `Les ${RETOMBE.length} trames qui retombent`, level: 1 });
  toc.push({ key: "M", label: "Partie 0 · Mémo express", level: 1 });
  toc.push({ key: "PG", label: "Les 12 pièges classiques de ces concours", level: 2 });
  const corps = PARTIES.map(partie).join("\n");
  toc.push({ key: "F", label: "Bravo, tu as terminé !", level: 1 });
  const sommaire = toc.map((t) => `<div class="toc l${t.level}"><span class="tl">${t.label}</span><span class="dots"></span><span class="tp">${pg(t.key)}</span></div>`).join("");

  return `<!doctype html><html lang="fr"><head><meta charset="utf-8">
<title>Cahier de préparation · Master Comptabilité, Contrôle et Audit · FSJES Aïn Chock</title>
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
  <div class="c-master">Comptabilité, Contrôle et Audit</div>
  <div class="c-fac">FSJES Aïn Chock · Casablanca</div>
  <div class="c-line">Fiches de cours · Formules LaTeX · QCM corrigés par thème</div>
  <div class="c-line">QCM 2024 et FC 2022, reconstitution 2022/23, épreuves 2017-2020 mises en QCM, normes IFRS</div>
  <div class="c-stats">
    <div><b>6</b><span>parties de cours</span></div>
    <div><b>${nTotal}</b><span>QCM corrigés</span></div>
    <div><b>10</b><span>sujets exploités</span></div>
    <div><b>${RETOMBE.length}</b><span>trames qui retombent</span></div>
  </div>
  <div class="c-prog"><div class="c-pt">AU PROGRAMME</div>
    <ul><li>Les trames qui retombent</li><li>Mémo express et pièges classiques</li>${PARTIES.map((p) => `<li>${p.titre}</li>`).join("")}</ul></div>
  <div class="c-by">Ce cahier a été entièrement conçu et rédigé par <b>saadconcours.space</b><br>${SITE}</div>
  <div class="c-foot">Édition 2026 · Document officiel saadconcours.space · Reproduction et revente interdites</div>
</section>

<section class="page welcome">
  <div class="ph"><div class="pnum star">★</div><div><h1>${mark("W")}Bienvenue dans ton cahier</h1><div class="psous">À lire avant de commencer</div></div></div>
  <p>Ce cahier de préparation a été entièrement conçu par saadconcours.space pour t'accompagner vers la réussite du concours d'accès au <b>Master Comptabilité, Contrôle et Audit (CCA)</b> de la FSJES Aïn Chock (Université Hassan II, Casablanca). Il est pensé pour les deux derniers jours : d'abord les trames que le jury repose, puis, par thème, une fiche de cours, les formules en LaTeX et les QCM corrigés et expliqués.</p>
  <div class="encadre"><b>Le format a changé.</b> Jusqu'en 2020, l'écrit du CCA était une épreuve rédigée de 2 heures. Depuis, c'est un <b>QCM</b> : 14 questions en formation continue en 2022, une trentaine en 2024. D'après les candidats de la session 2026, la sélection se fait sur dossier, puis par un écrit en QCM sur la comptabilité (approfondie), les <b>normes IFRS</b>, le contrôle de gestion, la fiscalité et l'audit ; un oral est possible. Vérifie ces informations sur l'avis officiel de la faculté.</div>
  <h3 class="sous">Les sujets utilisés</h3>
  <table class="tab">
  <thead><tr><th>Sujet</th><th>Format</th><th>Dans ce cahier</th></tr></thead>
  <tbody>
  <tr><td>CCA 2024</td><td>QCM à trois propositions, une ou plusieurs justes, plus deux questions de cours ; énoncé connu par un document de correction</td><td>${n24} QCM</td></tr>
  <tr><td>CCA formation continue 2022</td><td>14 QCM (a, b, c), 1 h 40 ; plusieurs propositions erronées</td><td>${nFC} QCM</td></tr>
  <tr><td>Reconstitution 2022/23</td><td>25 QCM à réponse unique ; <b>reconstitution non officielle</b>, pas le sujet de la faculté</td><td>${nREC} QCM</td></tr>
  <tr><td>CCA 2017, 2018, 2019, 2019 FI, 2020 FC, sujets A et B</td><td>Épreuves rédigées de 2 h (comptabilité + fiscalité), transformées en QCM par SaadConcours</td><td>${nADA} QCM</td></tr>
  <tr><td>Entraînement SaadConcours</td><td>IFRS, audit, contrôle de gestion, sociétés</td><td>${nENT} QCM</td></tr>
  </tbody></table>
  <p class="note">Pourquoi garder les épreuves rédigées ? Le jury d'Aïn Chock recycle ses trames : importation d'un matériel en euros, intérêts d'associés, dons, reprises de provisions et cotisation minimale reviennent dans presque tous les sujets depuis 2017, et ils sont encore dans les QCM de 2022 et 2024. Pour ces questions « adaptées en QCM », l'énoncé vient du sujet et les propositions sont écrites par SaadConcours.</p>
  <div class="leg"><span class="badge sure">RÉPONSE SÛRE</span> calcul vérifié <span class="badge prob">PROBABLE</span> énoncé ou cours discutable <span class="badge verif">À VÉRIFIER</span> sujet erroné ou deux lectures <span class="badge ent">ENTRAÎNEMENT</span> rédigée par SaadConcours</div>
  <h3 class="sous">Ton plan de révision en 2 jours</h3>
  <table class="tab plan">
  <thead><tr><th>Quand</th><th>Quoi</th><th>Pages</th></tr></thead>
  <tbody>
  <tr><td>J-2 matin (1 h 30)</td><td>Les trames qui retombent, puis le mémo express et les 12 pièges</td><td>${pg("R")} et ${pg("M")}</td></tr>
  <tr><td>J-2 après-midi (3 h)</td><td>Fiscalité, puis comptabilité générale : fiche, puis QCM en cachant la zone verte</td><td>${pg("P5")} et ${pg("P1")}</td></tr>
  <tr><td>J-2 soir (1 h)</td><td>Refais les QCM ratés et note sur une feuille les règles oubliées</td><td>Grilles de fin de partie</td></tr>
  <tr><td>J-1 matin (2 h 30)</td><td>Normes IFRS, puis comptabilité analytique et contrôle de gestion</td><td>${pg("P3")} et ${pg("P4")}</td></tr>
  <tr><td>J-1 après-midi (2 h)</td><td>Comptabilité des sociétés, puis audit (utile aussi pour l'oral)</td><td>${pg("P2")} et ${pg("P6")}</td></tr>
  <tr><td>J-1 soir (30 min)</td><td>Relis seulement : trames qui retombent, mémo, ta feuille d'erreurs. Dors tôt.</td><td>${pg("R")}</td></tr>
  </tbody></table>
  <p class="note">Pour chaque QCM : calcule ou raisonne d'abord, regarde les options ensuite. Les sujets récupérés n'annoncent pas de points négatifs ; si ta copie en prévoit, laisse blanc en cas de doute.</p>
  <div class="encadre"><b>Document officiel saadconcours.space.</b> La FSJES Aïn Chock ne publie pas de corrigé : les réponses sont rédigées par SaadConcours, par calcul et selon le CGI, le CGNC, la loi 17-95 et les normes IFRS. Reproduction et revente interdites.</div>
</section>

<section class="page">
  <h1 class="sommaire-t">Sommaire</h1>
  ${sommaire}
</section>

<section class="partie">
  <div class="ph"><div class="pnum star">♻</div><div><h1>${mark("R")}Les ${RETOMBE.length} trames qui retombent</h1><div class="psous">Énoncés posés au moins deux fois par le jury du CCA d'Aïn Chock, de 2017 à 2024 : commence par eux.</div></div></div>
  <div class="encadre"><b>Règle d'or.</b> Le jury garde la trame et change les montants, les noms et les dates. Retiens la méthode, jamais le chiffre, et lis chaque mot clé : « HT » ou « TTC », « brut » ou « net », « au nom de la société », « réintégrée à l'époque ». Dans la colonne « Posé en », A et B désignent les deux sujets CCA non datés, et « Rec. » la reconstitution 2022/23.</div>
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
  <p>Tu viens de parcourir <b>${nTotal} QCM corrigés</b> (${n24} du sujet 2024, ${nFC} du sujet FC 2022, ${nREC} de la reconstitution 2022/23, ${nADA} tirés des épreuves rédigées et ${nENT} d'entraînement), les ${RETOMBE.length} trames qui retombent et 6 fiches de cours. La veille : relis seulement les trames qui retombent (p. ${pg("R")}), le mémo express (p. ${pg("M")}) et les QCM marqués « PROBABLE » et « À VÉRIFIER ».</p>
  <div class="encadre"><b>Retrouve plus de ressources</b><br>Les sujets CCA d'Aïn Chock de 2017 à 2022 sont en ligne avec leurs corrigés complets, ainsi que les annales des masters ACGSI et AIF de la même faculté.<br>Site web : <b>${SITE}</b></div>
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

async function render(pages, file) {
  const h = path.join(os.tmpdir(), "cahier-cca-build.html");
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

const pass1 = path.join(os.tmpdir(), "cahier-cca-build.pass1.pdf");
await render(null, pass1);
const pages = pagesOf(pass1);
const missing = toc.filter((t) => !(t.key in pages)).map((t) => t.key);
if (missing.length) console.warn("Marqueurs introuvables :", missing.join(", "));
await render(pages, OUT);
console.log(JSON.stringify({ nTotal, n24, nFC, nREC, nADA, nENT, pages }, null, 0));
