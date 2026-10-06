// Contrôle de mise en page des QCM (fiches concours) : liste les sujets dont
// les propositions ne s'afficheront pas en cases (classe qcm-opt), comme sur
// le concours blanc GFCF Agdal 2026.
// Usage : node scripts/audit-qcm.mjs [<id> …]
//   sans argument : tous les concours ; avec des id : seulement ceux-là, en détail.
// Deux listes :
//   1. « QCM sans cases » : sujet qui se dit QCM (énoncé ou notions_cles) ou qui
//      a des options lettrées, mais aucune option en case. Cause habituelle :
//      options sans lettre (« / », ☐, tirets), ou options manquantes.
//   2. « options hors case » : QCM reconnu, mais certaines options lettrées restent
//      des puces ordinaires (deux options collées sur une ligne, lettre isolée…).
//      Les sous-questions en retrait d'un exercice (« a) Pour un meuble vendu ») y
//      figurent aussi : elles sont normales.
import fs from "node:fs";
import { formatQCM } from "../app/_shared/concoursFormat.js";

const ids = process.argv.slice(2);
const data = JSON.parse(fs.readFileSync(new URL("../public/data/concours.json", import.meta.url), "utf8"));
const OPTION = /^\s*- \*\*[a-j][).:]\*\* /;
const sansCases = [];
const horsCase = [];

for (const c of data) {
  if (ids.length && !ids.includes(c.id)) continue;
  const md = c.enonce_md || "";
  if (!md) continue;
  const out = formatQCM(md, { tagChoices: true }).split("\n");
  const enCase = out.filter((l) => l.includes("<!--c-->")).length;
  const lettrees = out.filter((l) => OPTION.test(l));
  const ditQcm = /\bqcm\b|choix multiples?/i.test(md + " " + (c.notions_cles || ""));
  if (enCase === 0 && (ditQcm || lettrees.length >= 8)) {
    sansCases.push(`${c.id}  (options lettrées : ${lettrees.length}${ditQcm ? ", se dit QCM" : ""})`);
  } else if (enCase > 0) {
    const reste = out.map((l, i) => [l, out[i - 1] || ""]).filter(([l]) => OPTION.test(l) && !l.includes("<!--c-->"));
    if (reste.length) {
      horsCase.push(`${c.id}  (${reste.length})`);
      if (ids.length) for (const [l, avant] of reste) horsCase.push(`    ${avant.slice(0, 70)}\n      → ${l.slice(0, 90)}`);
    }
  }
}

console.log(`QCM sans cases : ${sansCases.length}`);
for (const l of sansCases) console.log("  " + l);
console.log(`\nQCM avec options hors case : ${horsCase.filter((l) => !l.startsWith(" ")).length}`);
for (const l of horsCase) console.log("  " + l);
