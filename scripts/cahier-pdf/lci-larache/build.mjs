// Construit le cahier de préparation Master LCI (FP Larache) en PDF.
//   node scripts/cahier-pdf/lci-larache/build.mjs public/cahiers/cahier-preparation-master-lci-fp-larache.pdf
// Contenu : qcm.mjs (les 140 QCM des sessions 2024 et 2025, par partie) et fiches.mjs (mémo + fiches).
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

// Noms des sujets, en toutes lettres partout dans le cahier.
const S = { y24: "LCI 2024", y25: "LCI 2025" };

const PARTIES = [
  { n: 1, titre: "Logistique et supply chain", sous: "Cross-docking, JAT, Kanban, stock de sécurité, vocabulaire portuaire : le cœur du master" },
  { n: 2, titre: "Commerce international et douane", sous: "Incoterms, documents, transitaire, zone franche, balance commerciale" },
  { n: 3, titre: "Contrôle de gestion, stocks et recherche opérationnelle", sous: "Centres d'analyse, ABC, Wilson, écarts, programmation linéaire" },
  { n: 4, titre: "Finance d'entreprise et mathématiques financières", sous: "Bilans, FRF et BFG, modes de financement, intérêts simples et composés", tombe: "Uniquement dans le sujet 2024" },
  { n: 5, titre: "Statistique, probabilités et estimation", sous: "Tableau statistique, indices, estimateurs, dénombrement" },
  { n: 6, titre: "Économie, Maroc et marketing international", sous: "Microéconomie, politiques économiques, Bank Al-Maghrib, économie marocaine, marketing" },
  { n: 7, titre: "Anglais", sous: "Grammaire de base (2024) et vocabulaire de la logistique (2025) : des points rapides" },
];

const CONF = {
  S: ["RÉPONSE SÛRE", "sure"],
  P: ["PROBABLE", "prob"],
  V: ["À VÉRIFIER", "verif"],
};

const esc = (s) => s.replace(/&(?![a-z]+;|#\d+;)/g, "&amp;");

// ── comptages par session
const all = Object.values(QCM).flat();
const isY = (y) => (q) => q.src.startsWith(y);
const nTotal = all.length;
const n24 = all.filter(isY(S.y24)).length;
const n25 = all.filter(isY(S.y25)).length;
const nSure = all.filter((q) => q.conf === "S").length;

const toc = [];
const mark = (key) => `<span class="mk">ZZ${key}ZZ</span>`;

function qcmBlock(p, i, q) {
  const [label, cls] = CONF[q.conf];
  const opts = Object.entries(q.o).map(([l, t]) => {
    const good = q.ok.includes(l);
    return `<div class="opt${good ? " good" : ""}"><span class="l">${l}</span><span class="t">${esc(t)}</span>${good ? '<span class="chk">✓</span>' : ""}</div>`;
  }).join("");
  const rep = q.ok.length > 1 ? `Réponses : ${q.ok.split("").join(", ")}` : `Réponse : ${q.ok}`;
  const titre = q.titre
    ? `<div class="rinfo"><span class="rtit">${q.titre}</span><span class="rans">2024 et 2025</span></div><div class="rsuj"><b>Posée dans :</b> ${q.sujets}</div>`
    : "";
  const retenir = q.retenir ? `<div class="retenir"><b>À retenir :</b> ${q.retenir}</div>` : "";
  return `<div class="qcm${q.titre ? " rq" : ""}">
  ${titre}<div class="qh"><span class="qn">QCM ${p}.${i + 1}</span><span class="qs">${q.src}</span><span class="badge ${cls}">${label}</span></div>
  <div class="qq">${esc(q.q)}</div>
  <div class="opts${Object.values(q.o).every((t) => t.length <= 42) ? " two" : ""}">${opts}</div>
  <div class="rep"><div class="rt">✔ ${rep}</div><div class="rx">${esc(q.ex)}</div></div>
  ${retenir}
</div>`;
}

// Notions posées dans les deux sessions, vérifiées dans les énoncés (2026-10-08).
// [titre, où elle est posée (question et bonne lettre), règle à retenir, QCM affiché]
const RETOMBE = [
  ["Cross-docking", "LCI 2024 Q33 (D) · LCI 2025 Q1 (D)", "Quai à quai, sans stockage intermédiaire", "LCI 2025 · Q1"],
  ["Rôle des Incoterms", "LCI 2024 Q37 (C) · LCI 2025 Q8 (A)", "Frais, risques et formalités entre vendeur et acheteur ; ni prix ni paiement", "LCI 2025 · Q8"],
  ["Suivi des expéditions en temps réel", "LCI 2024 Q39 (C) · LCI 2025 Q9 (D)", "GPS ; la RFID et le code-barres ne tracent qu'au passage d'un lecteur", "LCI 2025 · Q9"],
  ["Excédent de la balance commerciale", "LCI 2024 Q40 (D) · LCI 2025 Q10 (A)", "Exportations supérieures aux importations ; le Maroc est en déficit structurel (2025 Q57)", "LCI 2024 · Q40"],
  ["Utilité d'une zone franche", "LCI 2024 Q41 (C) · LCI 2025 Q11 (B)", "Opérations en suspension de droits de douane", "LCI 2025 · Q11"],
  ["Juste-à-temps", "LCI 2024 Q35 (A) · LCI 2025 Q36, en anglais (B)", "Réduire stocks et gaspillages en produisant selon la demande", "LCI 2024 · Q35"],
  ["Flux tirés et flux poussés", "LCI 2024 Q42, pull et push (C) · LCI 2025 Q7, Kanban (C)", "Pull et Kanban = demande réelle ; push = prévisions", "LCI 2024 · Q42"],
  ["Stock de sécurité", "LCI 2024 Q79 (B) · LCI 2025 Q4 (A)", "Couvre les aléas ; dépend de la variabilité de la demande et du délai", "LCI 2025 · Q4"],
  ["Modèle de Wilson", "LCI 2024 Q73, EOQ (A) · LCI 2025 Q18 (B)", "Quantité économique ; optimum quand coût de possession = coût de passation", "LCI 2025 · Q18"],
  ["Estimateur sans biais", "LCI 2024 Q24 (C) · LCI 2025 Q33 (B)", "E(T) = θ : espérance égale au paramètre", "LCI 2024 · Q24"],
  ["Efficacité d'un estimateur", "LCI 2024 Q26 et Q28 · LCI 2025 Q32 (B)", "Plus efficace = variance plus faible ; Cramér-Rao = borne inférieure", "LCI 2025 · Q32"],
  ["Objectif de la politique monétaire", "LCI 2024 Q63 (B) · LCI 2025 Q45 (C)", "Stabilité des prix, par le contrôle de la masse monétaire et des taux", "LCI 2025 · Q45"],
  ["Bank Al-Maghrib", "LCI 2024 Q64, régulation bancaire (B) · LCI 2025 Q48, nom (B)", "Banque centrale : politique monétaire et supervision des banques", "LCI 2024 · Q64"],
];

// Chaque notion qui retombe est donnée en entier en tête du cahier et retirée de sa partie.
const RQ = RETOMBE.map(([titre, sujets, retenir, src]) => {
  const found = all.filter((x) => x.src === src);
  if (found.length !== 1) throw new Error(`Référence ${src} : ${found.length} QCM`);
  return { ...found[0], titre, sujets, retenir };
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
  const full = QCM[p.n];
  const a = full.filter(isY(S.y24)).length;
  const b = full.filter(isY(S.y25)).length;
  const r = full.filter((q) => moved.has(q.src)).length;
  const origine = [
    list.filter(isY(S.y24)).length && `${list.filter(isY(S.y24)).length} du sujet ${S.y24}`,
    list.filter(isY(S.y25)).length && `${list.filter(isY(S.y25)).length} du sujet ${S.y25}`,
  ].filter(Boolean).join(", ");
  const tombe = [
    `${a + b} question${a + b > 1 ? "s" : ""} sur ${nTotal} dans les deux sujets (${Math.round(((a + b) / nTotal) * 100)} %) : ${a} en 2024, ${b} en 2025`,
    r && `${r} notion${r > 1 ? "s" : ""} de ce thème retombe${r > 1 ? "nt" : ""} d'une session à l'autre : voir p. ${pg("R")}`,
    p.tombe,
  ].filter(Boolean).join(" · ");
  toc.push({ key: `P${p.n}`, label: `Partie ${p.n} · ${p.titre}`, level: 1 });
  toc.push({ key: `Q${p.n}`, label: `QCM corrigés · ${p.titre}`, level: 2 });
  return `<section class="partie">
  <div class="ph"><div class="pnum">${p.n}</div><div><h1>${mark(`P${p.n}`)}${p.titre}</h1><div class="psous">${p.sous}</div></div></div>
  <div class="tombe"><b>Ce qui tombe :</b> ${tombe}</div>
  ${FICHES[p.n]}
  <h2 class="qtitre">${mark(`Q${p.n}`)}QCM corrigés · ${p.titre}</h2>
  <p class="qintro">${list.length} QCM : ${origine}. Une seule réponse juste par question, comme le jour du concours. Cache la zone verte, réponds, puis vérifie.</p>
  ${list.map((q, i) => qcmBlock(p.n, i, q)).join("\n")}
  ${grille(p.n, list)}
</section>`;
}

function html(pages) {
  PAGES = pages;
  toc.length = 0;
  toc.push({ key: "W", label: "Bienvenue dans ton cahier", level: 1 });
  toc.push({ key: "R", label: `Les ${RETOMBE.length} notions qui retombent`, level: 1 });
  toc.push({ key: "M", label: "Partie 0 · Mémo express", level: 1 });
  toc.push({ key: "PG", label: "Les 12 pièges classiques de ces concours", level: 2 });
  const corps = PARTIES.map(partie).join("\n");
  toc.push({ key: "F", label: "Bravo, tu as terminé !", level: 1 });
  const sommaire = toc.map((t) => `<div class="toc l${t.level}"><span class="tl">${t.label}</span><span class="dots"></span><span class="tp">${pg(t.key)}</span></div>`).join("");

  return `<!doctype html><html lang="fr"><head><meta charset="utf-8">
<title>Cahier de préparation · Master Logistique et Commerce International · FP Larache</title>
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
  <div class="c-master">Logistique et Commerce International</div>
  <div class="c-fac">Faculté Polydisciplinaire de Larache</div>
  <div class="c-line">Fiches de cours · Formules LaTeX · QCM corrigés par thème</div>
  <div class="c-line">Les 140 questions des concours LCI 2024 et 2025, toutes corrigées et expliquées</div>
  <div class="c-stats">
    <div><b>7</b><span>parties de cours</span></div>
    <div><b>${nTotal}</b><span>QCM corrigés</span></div>
    <div><b>2</b><span>sujets complets</span></div>
    <div><b>${RETOMBE.length}</b><span>notions qui retombent</span></div>
  </div>
  <div class="c-prog"><div class="c-pt">AU PROGRAMME</div>
    <ul><li>Les notions qui retombent</li><li>Mémo express et pièges classiques</li>${PARTIES.map((p) => `<li>${p.titre}</li>`).join("")}</ul></div>
  <div class="c-by">Ce cahier a été entièrement conçu et rédigé par <b>saadconcours.space</b><br>${SITE}</div>
  <div class="c-foot">Édition 2026 · Document officiel saadconcours.space · Reproduction et revente interdites</div>
</section>

<section class="page dedicace">
  <div class="d-top">Dédicace</div>
  <div class="d-pour">Ce cahier a été rédigé pour</div>
  <div class="d-noms">Mohamed<span>&amp;</span>Ayoub</div>
  <div class="d-txt">qui passent le concours du Master Logistique et Commerce International de la Faculté Polydisciplinaire de Larache. Il est ouvert à tous les candidats, mais il a d'abord été pensé pour eux deux.</div>
  <div class="d-chance">Bonne chance, les amis !</div>
</section>

<section class="page welcome">
  <div class="ph"><div class="pnum star">★</div><div><h1>${mark("W")}Bienvenue dans ton cahier</h1><div class="psous">À lire avant de commencer</div></div></div>
  <p>Ce cahier de préparation a été entièrement conçu par saadconcours.space pour t'accompagner vers la réussite du concours d'accès au <b>Master Logistique et Commerce International (LCI)</b> de la Faculté Polydisciplinaire de Larache (Université Abdelmalek Essaâdi). Il est pensé pour les deux derniers jours : d'abord les notions que le jury repose d'une session à l'autre, puis, par thème, une fiche de cours, les formules en LaTeX et les QCM corrigés et expliqués. <b>Tous les QCM viennent des deux sujets du master</b> : aucune question d'un autre master ni d'une autre faculté.</p>
  <div class="encadre"><b>Ce qui t'attend.</b> Après une présélection sur dossier, les candidats retenus passent un <b>test écrit</b> (un QCM d'une heure, sans document), puis un <b>entretien oral</b>. Vérifie la date, l'heure et la salle sur l'avis officiel de la faculté.</div>
  <h3 class="sous">Les sujets utilisés</h3>
  <table class="tab">
  <thead><tr><th>Sujet</th><th>Format</th><th>Dans ce cahier</th></tr></thead>
  <tbody>
  <tr><td>${S.y24} (année universitaire 2024/2025)</td><td>80 QCM en 60 minutes, une seule réponse juste, plan comptable non autorisé ; aucun barème négatif indiqué</td><td>${n24} QCM</td></tr>
  <tr><td>${S.y25} (année universitaire 2025/2026, épreuve du 15/11/2025)</td><td>60 QCM en 1 heure, cinq parties, une seule réponse juste ; +1 par bonne réponse, 0 sinon</td><td>${n25} QCM</td></tr>
  </tbody></table>
  <p class="note">Le master LCI de Larache n'a connu que ces deux sessions : ce cahier contient donc l'intégralité des questions connues. Le sujet 2025 a recentré l'épreuve sur la logistique et le contrôle de gestion, et abandonné l'analyse financière du sujet 2024 ; garde quand même la partie 4 pour l'oral et pour le cas où elle reviendrait.</p>
  <div class="leg"><span class="badge sure">RÉPONSE SÛRE</span> définition ou calcul vérifié <span class="badge prob">PROBABLE</span> énoncé ou cours discutable <span class="badge verif">À VÉRIFIER</span> deux lectures possibles</div>
  <h3 class="sous">Ton plan de révision en 2 jours</h3>
  <table class="tab plan">
  <thead><tr><th>Quand</th><th>Quoi</th><th>Pages</th></tr></thead>
  <tbody>
  <tr><td>J-2 matin (1 h 30)</td><td>Les notions qui retombent, puis le mémo express et les 12 pièges</td><td>${pg("R")} et ${pg("M")}</td></tr>
  <tr><td>J-2 après-midi (3 h)</td><td>Logistique, puis commerce international : fiche, puis QCM en cachant la zone verte</td><td>${pg("P1")} et ${pg("P2")}</td></tr>
  <tr><td>J-2 soir (1 h)</td><td>Anglais (rapide), puis refais les QCM ratés et note les règles oubliées</td><td>${pg("P7")}</td></tr>
  <tr><td>J-1 matin (2 h 30)</td><td>Contrôle de gestion et stocks, puis statistique et estimation</td><td>${pg("P3")} et ${pg("P5")}</td></tr>
  <tr><td>J-1 après-midi (2 h)</td><td>Économie marocaine et marketing, puis finance d'entreprise</td><td>${pg("P6")} et ${pg("P4")}</td></tr>
  <tr><td>J-1 soir (30 min)</td><td>Relis seulement : notions qui retombent, mémo, ta feuille d'erreurs. Dors tôt.</td><td>${pg("R")}</td></tr>
  </tbody></table>
  <p class="note">Le jour J, tu as une minute par question au plus (45 secondes en 2024). Traite d'abord les questions de cours et d'anglais, puis reviens aux calculs. Aucun des deux sujets ne retire de point pour une mauvaise réponse : ne laisse aucune case vide.</p>
  <div class="encadre"><b>Document officiel saadconcours.space.</b> La Faculté Polydisciplinaire de Larache ne publie pas de corrigé : les réponses sont rédigées par SaadConcours, vérifiées une par une, avec un niveau de confiance pour chaque question. Reproduction et revente interdites.</div>
</section>

<section class="page">
  <h1 class="sommaire-t">Sommaire</h1>
  ${sommaire}
</section>

<section class="partie">
  <div class="ph"><div class="pnum star">♻</div><div><h1>${mark("R")}Les ${RETOMBE.length} notions qui retombent</h1><div class="psous">Posées en 2024 et de nouveau en 2025 par le jury du master LCI : commence par elles.</div></div></div>
  <div class="encadre"><b>Règle d'or.</b> Le jury reprend ses questions presque mot pour mot, mais la bonne réponse change de lettre : Incoterms en C puis en A, GPS en C puis en D, excédent commercial en D puis en A. Retiens la notion, jamais la lettre. Sous chaque titre, les deux questions où la notion est posée, avec la bonne lettre de chacune ; le QCM affiché est l'une des deux.</div>
  ${RQ.map((q, i) => qcmBlock("R", i, q)).join("\n")}
  ${grille("R", RQ)}
</section>

<section class="partie">
  <div class="ph"><div class="pnum">0</div><div><h1>${mark("M")}Mémo express</h1><div class="psous">Les définitions et réflexes qui rapportent le plus de points</div></div></div>
  ${MEMO.replace('<h3 class="sous">Les 12', `<h3 class="sous">${mark("PG")}Les 12`)}
</section>

${corps}

<section class="page fin">
  <div class="ph"><div class="pnum star">★</div><div><h1>${mark("F")}Bravo, tu as terminé !</h1><div class="psous">Un dernier réflexe avant le concours</div></div></div>
  <p>Tu viens de parcourir <b>${nTotal} QCM corrigés</b> (${n24} du sujet ${S.y24} et ${n25} du sujet ${S.y25}), les ${RETOMBE.length} notions qui retombent et 7 fiches de cours. ${nSure} réponses sur ${nTotal} sont classées « réponse sûre ». La veille : relis seulement les notions qui retombent (p. ${pg("R")}), le mémo express (p. ${pg("M")}) et les QCM marqués « PROBABLE » et « À VÉRIFIER ». <b>Mohamed, Ayoub : c'est à vous de jouer. Bonne chance !</b></p>
  <div class="encadre"><b>Retrouve plus de ressources</b><br>Les sujets LCI 2024 et 2025, avec leurs scans et leurs corrigés complets, sont en ligne sur le site, ainsi que les annales des autres masters de logistique et de commerce international (Tanger, Tétouan, Mohammedia, Guelmim…).<br>Site web : <b>${SITE}</b></div>
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
  const h = path.join(os.tmpdir(), "cahier-lci-build.html");
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

const pass1 = path.join(os.tmpdir(), "cahier-lci-build.pass1.pdf");
await render(null, pass1);
const pages = pagesOf(pass1);
const missing = toc.filter((t) => !(t.key in pages)).map((t) => t.key);
if (missing.length) console.warn("Marqueurs introuvables :", missing.join(", "));
await render(pages, OUT);
console.log(JSON.stringify({ nTotal, n24, n25, nSure, pages }, null, 0));
