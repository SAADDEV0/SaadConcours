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
import { QCM as TOUS } from "./qcm.mjs";
import { MEMO, FICHES } from "./fiches.mjs";

const OUT = process.argv[2] || "cahier.pdf";
const SITE = "https://www.saadconcours.space/";

// Le cahier n'utilise que des questions tirées des sujets CCA d'Aïn Chock (demande du 2026-10-03) :
// les QCM d'entraînement rédigés par SaadConcours (conf "E") restent dans qcm.mjs mais sont exclus.
const AVEC_ENTRAINEMENT = false;
const QCM = Object.fromEntries(Object.entries(TOUS).map(([p, l]) => [p, l.filter((q) => AVEC_ENTRAINEMENT || q.conf !== "E")]));

// Noms des sujets CCA, en toutes lettres partout dans le cahier.
const S = {
  y17: "CCA 2017", y18: "CCA 2018", y19: "CCA 2019", fi19: "CCA 2019 (formation initiale)",
  fc20: "CCA 2020 (formation continue)", nd1: "CCA non daté 1", nd2: "CCA non daté 2",
  fc22: "CCA 2022 (formation continue)", y24: "CCA 2024", rec: "CCA 2022/23 (reconstitution)",
};

const PARTIES = [
  { n: 1, titre: "Comptabilité générale et approfondie", sous: "Importations, coûts d'entrée, amortissements, devises, régularisations : le plus gros bloc des annales" },
  { n: 2, titre: "Comptabilité des sociétés", sous: "Capital, libération, réserve légale, premier dividende" },
  { n: 3, titre: "Normes IFRS", sous: "Fiche de cours : les différences avec le CGNC et les normes à connaître", tombe: "Aucune question dans les sujets CCA connus, mais module annoncé par la coordination du master" },
  { n: 4, titre: "Comptabilité analytique et contrôle de gestion", sous: "Coûts complets, charges de substitution, seuil de rentabilité, budgets" },
  { n: 5, titre: "Fiscalité", sous: "Réintégrations, intérêts d'associés, cotisation minimale, prorata de TVA : les points les plus sûrs" },
  { n: 6, titre: "Audit", sous: "Assertions, commissaire aux comptes, démarche : utile aussi pour l'oral", tombe: "Une question de cours dans le sujet CCA 2024 ; module annoncé par la coordination du master" },
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
  : q.src.startsWith("CCA 2022/23 (reconstitution)") ? "REC"
  : q.src.startsWith("CCA 2022 (formation continue)") ? "FC"
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
  const titre = q.titre
    ? `<div class="rinfo"><span class="rtit">${q.titre}</span><span class="rans">${q.sujets.length} sujets CCA</span></div><div class="rsuj"><b>Trame présente dans :</b> ${q.sujets.join(" · ")}</div>`
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

// Trames posées dans au moins deux sujets CCA d'Aïn Chock, vérifiées dans les énoncés (2026-10-03).
// [titre, sujets où la trame apparaît, règle à retenir, clé du QCM affiché (champ key de qcm.mjs)]
const RETOMBE = [
  ["Achat importé en euros : coût d'entrée", [S.y17, S.y18, S.fi19, S.nd1, S.nd2, S.fc22, S.rec], "Cours du dédouanement + transport + port + droits d'entrée ; TVA récupérable exclue", "R1"],
  ["Règlement du fournisseur étranger : perte ou gain de change", [S.y17, S.y18, S.fi19, S.nd1, S.nd2, S.fc22, S.rec], "Devises × (cours du paiement − cours d'entrée), en 6331 ou 7331", "R2"],
  ["Frais engagés pour choisir le fournisseur", [S.y19, S.fi19, S.nd1, S.nd2], "Mission, voyage, honoraires de choix : charges, jamais coût", "R3"],
  ["Intérêts des comptes courants d'associés", [S.y17, S.y18, S.fi19, S.nd1, S.nd2, S.fc22, S.y24, S.rec], "Taux fiscal de l'année + avances plafonnées au capital libéré, période par période", "R4"],
  ["Dons : fondations, œuvres sociales, associations", [S.y17, S.y18, S.fi19, S.nd1, S.nd2, S.fc22, S.y24, S.rec], "Fondations : 100 % ; œuvres sociales : 2 ‰ du CA ; association non reconnue : réintégrée", "R5"],
  ["Reprises de provisions", [S.y17, S.y18, S.fi19, S.fc20, S.nd1, S.nd2, S.fc22], "Provision non déductible à l'origine : reprise déduite ; sinon imposable", "R6"],
  ["Voiture de tourisme : plafond de 300 000 DH", [S.fc20, S.fc22, S.rec], "300 000 TTC × 20 % par an ; rattrapage d'une dotation omise réintégré", "R7"],
  ["Produit financier et retenue à la source", [S.y18, S.fc20, S.fc22, S.rec], "Comptabilisé net : réintégrer brut − net ; comptabilisé brut : rien", "R8"],
  ["Cotisation minimale contre IS", [S.y17, S.y18, S.y19, S.fi19, S.fc20, S.nd1, S.nd2, S.fc22, S.rec], "Base sans produits de cession ; impôt exigible = max (IS ; CM)", "R9"],
  ["Écarts de conversion passif", [S.y19, S.fc20, S.nd1, S.nd2], "Celui de N réintégré, celui de N-1 déduit", "R10"],
  ["Taxe professionnelle payée en retard", [S.y17, S.fi19, S.nd2], "Principal déductible ; pénalité et majoration réintégrées", "R11"],
  ["Prorata de déduction de la TVA", [S.y17, S.nd1, S.y24, S.rec], "Numérateur TTC ; indemnités sans contrepartie exclues", "R12"],
  ["Créance en euros à l'inventaire", [S.y24, S.rec], "Écart de conversion actif + provision ; la perte n'est réalisée qu'au règlement", "R13"],
  ["Réserve légale avec report à nouveau débiteur", [S.y24, S.rec], "5 % après le report débiteur, plafond de 10 % du capital", "R14"],
  ["Premier dividende", [S.y24, S.rec], "Capital libéré et non remboursé, prorata pour les libérations de l'année", "R15"],
  ["Régime suspensif de la TVA", [S.y24, S.rec], "Exportateurs, plafond du CA export de N-1, attestation par fournisseur", "R16"],
  ["Principes du CGNC (question de cours)", [S.y17, S.fc20, S.nd1, S.nd2, S.fc22, S.rec], "Sept principes ; régularité, sincérité, image fidèle", "R17"],
];

// Chaque trame qui retombe est donnée en entier en tête du cahier et retirée de sa partie.
const RQ = RETOMBE.map(([titre, sujets, retenir, r]) => {
  const found = all.filter((x) => ref(x) === r);
  if (found.length !== 1) throw new Error(`Référence ${r} : ${found.length} QCM`);
  return { ...found[0], titre, sujets, retenir };
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
    count("Y24", list) && `${count("Y24", list)} du ${S.y24}`,
    count("FC", list) && `${count("FC", list)} du ${S.fc22}`,
    count("REC", list) && `${count("REC", list)} du ${S.rec}`,
    count("ADA", list) && `${count("ADA", list)} tirés des épreuves rédigées CCA (2017 à 2020 et non datées) et mis en QCM`,
    count("ENT", list) && `${count("ENT", list)} d'entraînement`,
  ].filter(Boolean).join(", ");
  const tombe = s
    ? `${s} question${s > 1 ? "s" : ""} sur ${nSessions} dans les QCM ${S.y24}, ${S.fc22} et ${S.rec} (${Math.round((s / nSessions) * 100)} %)`
    : "";
  toc.push({ key: `P${p.n}`, label: `Partie ${p.n} · ${p.titre}`, level: 1 });
  if (list.length) toc.push({ key: `Q${p.n}`, label: `QCM corrigés · ${p.titre}`, level: 2 });
  const qcm = list.length
    ? `<h2 class="qtitre">${mark(`Q${p.n}`)}QCM corrigés · ${p.titre}</h2>
  <p class="qintro">${list.length} QCM : ${origine}. Dans les sujets CCA 2024 et 2022 (formation continue), une ou plusieurs propositions peuvent être justes ; la reconstitution 2022/23 n'en a qu'une. Cache la zone verte, réponds, puis vérifie.</p>
  ${list.map((q, i) => qcmBlock(p.n, i, q)).join("\n")}
  ${grille(p.n, list)}`
    : "";
  return `<section class="partie">
  <div class="ph"><div class="pnum">${p.n}</div><div><h1>${mark(`P${p.n}`)}${p.titre}</h1><div class="psous">${p.sous}</div></div></div>
  <div class="tombe"><b>Ce qui tombe :</b> ${[tombe, r && `${r} trame${r > 1 ? "s" : ""} de ce thème retombe${r > 1 ? "nt" : ""} d'un sujet CCA à l'autre : voir p. ${pg("R")}`, p.tombe].filter(Boolean).join(" · ")}</div>
  ${FICHES[p.n]}
  ${qcm}
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
  <div class="c-line">Uniquement des questions tirées des sujets du Master CCA d'Aïn Chock, de 2017 à 2024</div>
  <div class="c-stats">
    <div><b>6</b><span>parties de cours</span></div>
    <div><b>${nTotal}</b><span>QCM corrigés</span></div>
    <div><b>10</b><span>sujets CCA exploités</span></div>
    <div><b>${RETOMBE.length}</b><span>trames qui retombent</span></div>
  </div>
  <div class="c-prog"><div class="c-pt">AU PROGRAMME</div>
    <ul><li>Les trames qui retombent</li><li>Mémo express et pièges classiques</li>${PARTIES.map((p) => `<li>${p.titre}</li>`).join("")}</ul></div>
  <div class="c-by">Ce cahier a été entièrement conçu et rédigé par <b>saadconcours.space</b><br>${SITE}</div>
  <div class="c-foot">Édition 2026 · Document officiel saadconcours.space · Reproduction et revente interdites</div>
</section>

<section class="page welcome">
  <div class="ph"><div class="pnum star">★</div><div><h1>${mark("W")}Bienvenue dans ton cahier</h1><div class="psous">À lire avant de commencer</div></div></div>
  <p>Ce cahier de préparation a été entièrement conçu par saadconcours.space pour t'accompagner vers la réussite du concours d'accès au <b>Master Comptabilité, Contrôle et Audit (CCA)</b> de la FSJES Aïn Chock (Université Hassan II, Casablanca). Il est pensé pour les deux derniers jours : d'abord les trames que le jury repose, puis, par thème, une fiche de cours, les formules en LaTeX et les QCM corrigés et expliqués. <b>Tous les QCM viennent des sujets du Master CCA d'Aïn Chock</b> : aucune question d'un autre master ni d'une autre faculté.</p>
  <div class="encadre"><b>Ce qui t'attend.</b> Selon une note de la coordination du master (Mme Leila El Gnaoui et Mme Dounia Karimi), la sélection se fait d'abord <b>sur dossier</b> (notes), puis par un <b>concours écrit</b> qui porte, à un niveau approfondi, sur la comptabilité, les <b>normes IFRS</b>, le contrôle de gestion, la fiscalité et l'audit. Un <b>oral</b> est possible. Vérifie le calendrier sur l'avis officiel de la faculté.</div>
  <h3 class="sous">Format des épreuves</h3>
  <table class="tab">
  <thead><tr><th>Épreuve</th><th>Questions</th><th>Durée</th><th>Règle et consignes</th></tr></thead>
  <tbody>
  <tr><td>${S.y24}</td><td>Une trentaine de QCM + 2 questions de cours</td><td>Non indiquée</td><td>Trois propositions, une ou plusieurs justes</td></tr>
  <tr><td>${S.fc22}</td><td>14 QCM + 4 questions de cours</td><td>1 h 40 (1 h 45 sur la grille)</td><td>Propositions a, b, c, une ou plusieurs justes, à cocher sur une grille ; ni rature ni Blanco ; une copie rendue plus de 10 minutes après l'heure est considérée comme défaillante</td></tr>
  <tr><td>CCA 2017 à 2020</td><td>Épreuve rédigée : un cas de comptabilité, un cas d'IS, des questions de cours</td><td>2 h</td><td>Documents interdits (plan comptable autorisé en 2019) ; calculatrice personnelle</td></tr>
  </tbody></table>
  <p class="note">Les sujets récupérés n'indiquent pas de barème négatif. L'écrit est passé du rédigé au QCM après 2020 : les trames des épreuves rédigées se retrouvent pourtant dans les QCM de 2022 et 2024.</p>
  <h3 class="sous">Les sujets utilisés</h3>
  <table class="tab">
  <thead><tr><th>Sujet</th><th>Format</th><th>Dans ce cahier</th></tr></thead>
  <tbody>
  <tr><td>${S.y24}</td><td>QCM à trois propositions, une ou plusieurs justes, plus deux questions de cours ; énoncé connu par un document de correction</td><td>${n24} QCM</td></tr>
  <tr><td>${S.fc22}</td><td>14 QCM (a, b, c), 1 h 40 ; plusieurs propositions erronées</td><td>${nFC} QCM</td></tr>
  <tr><td>${S.rec}</td><td>Concours d'entraînement de 25 QCM à réponse unique, présenté comme une <b>reconstitution non officielle</b> de l'épreuve CCA 2022/2023 : pas le sujet de la faculté</td><td>${nREC} QCM</td></tr>
  <tr><td>${S.y17}, ${S.y18}, ${S.y19}, ${S.fi19}, ${S.fc20}, ${S.nd1}, ${S.nd2}</td><td>Épreuves rédigées de 2 h (comptabilité + fiscalité). Leurs exercices sont mis en QCM : l'énoncé vient du sujet, les propositions sont écrites par SaadConcours</td><td>${nADA} QCM</td></tr>
  </tbody></table>
  <p class="note">« ${S.nd1} » et « ${S.nd2} » sont deux sujets CCA de la faculté dont l'année n'est pas imprimée. Pourquoi garder les épreuves rédigées ? Le jury recycle ses trames : achat importé en euros, intérêts d'associés, dons, reprises de provisions et cotisation minimale reviennent dans presque tous les sujets CCA depuis 2017, et encore dans les QCM de 2022 et 2024.</p>
  <div class="leg"><span class="badge sure">RÉPONSE SÛRE</span> calcul vérifié <span class="badge prob">PROBABLE</span> énoncé ou cours discutable <span class="badge verif">À VÉRIFIER</span> sujet erroné ou deux lectures</div>
  <h3 class="sous">Ton plan de révision en 2 jours</h3>
  <table class="tab plan">
  <thead><tr><th>Quand</th><th>Quoi</th><th>Pages</th></tr></thead>
  <tbody>
  <tr><td>J-2 matin (1 h 30)</td><td>Les trames qui retombent, puis le mémo express et les 12 pièges</td><td>${pg("R")} et ${pg("M")}</td></tr>
  <tr><td>J-2 après-midi (3 h)</td><td>Fiscalité, puis comptabilité générale : fiche, puis QCM en cachant la zone verte</td><td>${pg("P5")} et ${pg("P1")}</td></tr>
  <tr><td>J-2 soir (1 h)</td><td>Refais les QCM ratés et note sur une feuille les règles oubliées</td><td>Grilles de fin de partie</td></tr>
  <tr><td>J-1 matin (2 h 30)</td><td>Fiche des normes IFRS, puis comptabilité analytique et contrôle de gestion</td><td>${pg("P3")} et ${pg("P4")}</td></tr>
  <tr><td>J-1 après-midi (2 h)</td><td>Comptabilité des sociétés, puis audit (utile aussi pour l'oral)</td><td>${pg("P2")} et ${pg("P6")}</td></tr>
  <tr><td>J-1 soir (30 min)</td><td>Relis seulement : trames qui retombent, mémo, ta feuille d'erreurs. Dors tôt.</td><td>${pg("R")}</td></tr>
  </tbody></table>
  <p class="note">Pour chaque QCM : calcule ou raisonne d'abord, regarde les options ensuite. Les sujets récupérés n'annoncent pas de points négatifs ; si ta copie en prévoit, laisse blanc en cas de doute.</p>
  <div class="encadre"><b>Document officiel saadconcours.space.</b> La FSJES Aïn Chock ne publie pas de corrigé : les réponses sont rédigées par SaadConcours, par calcul et selon le CGI, le CGNC et la loi 17-95. Reproduction et revente interdites.</div>
</section>

<section class="page">
  <h1 class="sommaire-t">Sommaire</h1>
  ${sommaire}
</section>

<section class="partie">
  <div class="ph"><div class="pnum star">♻</div><div><h1>${mark("R")}Les ${RETOMBE.length} trames qui retombent</h1><div class="psous">Énoncés posés dans au moins deux sujets du Master CCA d'Aïn Chock, de 2017 à 2024 : commence par eux.</div></div></div>
  <div class="encadre"><b>Règle d'or.</b> Le jury garde la trame et change les montants, les noms et les dates. Retiens la méthode, jamais le chiffre, et lis chaque mot clé : « HT » ou « TTC », « brut » ou « net », « au nom de la société », « réintégrée à l'époque ». Sous chaque titre, la liste des sujets CCA où la trame apparaît ; le QCM affiché est l'une de ces versions.</div>
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
  <p>Tu viens de parcourir <b>${nTotal} QCM corrigés</b> (${n24} du ${S.y24}, ${nFC} du ${S.fc22}, ${nREC} du ${S.rec} et ${nADA} tirés des épreuves rédigées CCA), tous issus des sujets du Master CCA, les ${RETOMBE.length} trames qui retombent et 6 fiches de cours. La veille : relis seulement les trames qui retombent (p. ${pg("R")}), le mémo express (p. ${pg("M")}) et les QCM marqués « PROBABLE » et « À VÉRIFIER ».</p>
  <div class="encadre"><b>Retrouve plus de ressources</b><br>Les sujets CCA d'Aïn Chock de 2017 à 2022 sont en ligne avec leurs corrigés complets.<br>Site web : <b>${SITE}</b></div>
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
