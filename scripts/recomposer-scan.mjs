// Prépare une photo de sujet avant nettoyer-scans.mjs quand un tiers y a posé un filigrane en lettres
// BLANCHES opaques (« Prof … », « whatsapp : 06… ») ou un logo dans un cadre blanc, par-dessus le texte.
// Usage : node scripts/recomposer-scan.mjs <photo d'origine> <sortie.webp> <config.json>
// Config (coordonnées en pixels de la photo d'origine) :
//   blanc  : [[x0, y0, x1, y1], …] rectangles des lettres blanches. Masque = pixels plus clairs que
//            max(papier + 10, (papier + 255) / 2), papier mesuré colonne par colonne juste au-dessus et
//            au-dessous du rectangle, + liseré de 3 px ; rebouché par le papier voisin, et les traits de
//            tableau sombres des deux côtés sont prolongés.
//   trame  : [{ zone, source }] zone remplie en répétant `source` (fond d'un encadré tramé sans texte).
//   aplat  : [{ zone, temoin }] zone remplie de la couleur papier du témoin.
//   bandes : [{ x0, x1, yh: [y à x0, y à x1], yb: [...], gauche, droite }] cellule ou ligne entre deux
//            droites inclinées, vidée à la couleur papier interpolée entre deux témoins.
//   traits : [[x1, y1, x2, y2], …] lignes de tableau à redessiner.
//   textes : [{ x, y, taille, texte, gras, largeur, angle }] texte du sujet recomposé en Times New Roman
//            (y = ligne de base, largeur = longueur mesurée sur la photo, angle = inclinaison en degrés).
// Variable MASQUE=<fichier.png> : écrit le masque pour le contrôler.
// Précédent : CCA FSJES Fès 2024 (filigrane « Prof … » sur le titre du tableau et le T.A.F).
import sharp from "sharp";
import fs from "node:fs";
const [src, out, cfgFile] = process.argv.slice(2);
const cfg = JSON.parse(fs.readFileSync(cfgFile, "utf8"));
const { data, info } = await sharp(src).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const w = info.width, h = info.height;
const lum = (j) => 0.299 * data[j * 3] + 0.587 * data[j * 3 + 1] + 0.114 * data[j * 3 + 2];
const pct = (arr, p) => { arr.sort((a, b) => a - b); return arr[Math.floor(arr.length * p)]; };
// couleur papier : 70e centile autour d'un rectangle (anneau de 25 px)
function papier(x0, y0, x1, y1) {
  const L = [], px = [];
  for (let y = Math.max(0, y0 - 25); y <= Math.min(h - 1, y1 + 25); y++)
    for (let x = Math.max(0, x0 - 25); x <= Math.min(w - 1, x1 + 25); x++) {
      if (x >= x0 && x <= x1 && y >= y0 && y <= y1) continue;
      const j = y * w + x; L.push(lum(j)); px.push(j);
    }
  const s = L.slice(); const p = pct(s, 0.7);
  // couleur moyenne des pixels proches du 70e centile
  let r = 0, g = 0, b = 0, n = 0;
  for (let i = 0; i < px.length; i++) if (Math.abs(L[i] - p) < 4) { const j = px[i]; r += data[j*3]; g += data[j*3+1]; b += data[j*3+2]; n++; }
  return { L: p, c: [r / n, g / n, b / n] };
}
const masque = new Uint8Array(w * h);
// seuil local : papier mesuré colonne par colonne au-dessus et au-dessous du rectangle (éclairage inégal)
for (const [x0, y0, x1, y1] of cfg.blanc ?? []) {
  for (let x = x0; x <= x1; x += 10) {
    const L = [];
    for (const [ya, yb] of [[y0 - 25, y0 - 1], [y1 + 1, y1 + 25]])
      for (let y = Math.max(0, ya); y <= Math.min(h - 1, yb); y++)
        for (let u = Math.max(0, x - 40); u <= Math.min(w - 1, x + 40); u++) L.push(lum(y * w + u));
    const p = pct(L, 0.7);
    for (let y = y0; y <= y1; y++) for (let u = x; u < Math.min(x + 10, x1 + 1); u++) { const j = y * w + u; if (lum(j) > Math.max(p + 10, (p + 255) / 2)) masque[j] = 1; }
  }
}
// liseré
const D = cfg.lisere ?? 3;
const m2 = masque.slice();
for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) if (masque[y * w + x])
  for (let dy = -D; dy <= D; dy++) for (let dx = -D; dx <= D; dx++) { const u = x + dx, v = y + dy; if (u >= 0 && v >= 0 && u < w && v < h) m2[v * w + u] = 1; }
if (process.env.MASQUE) await sharp(Buffer.from(m2.map((v) => v * 255)), { raw: { width: w, height: h, channels: 1 } }).png().toFile(process.env.MASQUE);
// rebouchage : traits (lignes de tableau) prolongés si sombres des deux côtés, sinon papier
const P = 60;
const outb = Buffer.from(data);
const loc = cfg.blanc.map(([x0, y0, x1, y1]) => ({ r: [x0 - D, y0 - D, x1 + D, y1 + D], p: papier(x0, y0, x1, y1) }));
for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
  const j = y * w + x; if (!m2[j]) continue;
  const pp = loc.find((l) => x >= l.r[0] && x <= l.r[2] && y >= l.r[1] && y <= l.r[3])?.p ?? loc[0].p;
  const cherche = (dx, dy) => { for (let k = 1; k <= P; k++) { const u = x + dx * k, v = y + dy * k; if (u < 0 || v < 0 || u >= w || v >= h) return null; if (!m2[v * w + u]) return v * w + u; } return null; };
  const sombre = (a, b) => a != null && b != null && lum(a) < pp.L - 70 && lum(b) < pp.L - 70;
  const l = cherche(-1, 0), r = cherche(1, 0), t = cherche(0, -1), bo = cherche(0, 1);
  // papier local : moyenne des voisins non masqués les plus clairs (pas l'encre)
  const vs = [l, r, t, bo].filter((k) => k != null);
  const top = Math.max(...vs.map(lum));
  const clairs = vs.filter((k) => lum(k) > top - 25);
  let c = clairs.length ? [0, 1, 2].map((k) => clairs.reduce((s, q) => s + data[q * 3 + k], 0) / clairs.length) : pp.c;
  if (sombre(l, r)) c = [0, 1, 2].map((k) => (data[l * 3 + k] + data[r * 3 + k]) / 2);
  else if (sombre(t, bo)) c = [0, 1, 2].map((k) => (data[t * 3 + k] + data[bo * 3 + k]) / 2);
  for (let k = 0; k < 3; k++) outb[j * 3 + k] = Math.round(c[k]);
}
// aplats (logo, texte à recomposer) : couleur papier mesurée sur un rectangle témoin
// trame : zone remplie en répétant un morceau de fond sans texte (encadré tramé)
for (const { zone, source: [a, b, c2, d] } of cfg.trame ?? []) {
  const sw = c2 - a + 1, sh = d - b + 1;
  for (let y = zone[1]; y <= zone[3]; y++) for (let x = zone[0]; x <= zone[2]; x++) {
    const u = a + ((x - zone[0]) % sw), v = b + ((y - zone[1]) % sh);
    for (let k = 0; k < 3; k++) outb[(y * w + x) * 3 + k] = data[(v * w + u) * 3 + k];
  }
}
for (const { zone, temoin } of cfg.aplat ?? []) {
  const [a, b, c2, d] = temoin; const L = [];
  for (let y = b; y <= d; y++) for (let x = a; x <= c2; x++) L.push(y * w + x);
  const col = [0, 1, 2].map((k) => pct(L.map((j) => data[j * 3 + k]), 0.6));
  for (let y = zone[1]; y <= zone[3]; y++) for (let x = zone[0]; x <= zone[2]; x++) for (let k = 0; k < 3; k++) outb[(y * w + x) * 3 + k] = col[k];
}
// bandes entre deux lignes inclinées (cellules de tableau à recomposer) : couleur papier interpolée
// de gauche à droite entre deux témoins. yh/yb : [y à x0, y à x1].
for (const z of cfg.bandes ?? []) {
  const coul = ([a, b, c2, d]) => { const L = []; for (let y = b; y <= d; y++) for (let x = a; x <= c2; x++) L.push(y * w + x);
    return [0, 1, 2].map((k) => pct(L.map((j) => data[j * 3 + k]), 0.75)); };
  const cg = coul(z.gauche), cd = coul(z.droite ?? z.gauche);
  for (let x = z.x0; x <= z.x1; x++) {
    const t = (x - z.x0) / Math.max(1, z.x1 - z.x0);
    const ya = Math.round(z.yh[0] + t * (z.yh[1] - z.yh[0])), yb = Math.round(z.yb[0] + t * (z.yb[1] - z.yb[0]));
    for (let y = ya; y <= yb; y++) for (let k = 0; k < 3; k++) outb[(y * w + x) * 3 + k] = Math.round(cg[k] + t * (cd[k] - cg[k]));
  }
}
let img = sharp(outb, { raw: { width: w, height: h, channels: 3 } });
if (cfg.textes?.length || cfg.traits?.length) {
  const tr = (cfg.traits ?? []).map(([a, b, c2, d]) => `<line x1="${a}" y1="${b}" x2="${c2}" y2="${d}" stroke="#333" stroke-width="2.2"/>`).join("");
  const t = tr + cfg.textes.map((t) => `<text x="${t.x}" y="${t.y}" font-family="Times New Roman" font-weight="${t.gras ? "bold" : "normal"}" font-size="${t.taille}" fill="#2b2b2b"${t.angle ? ` transform="rotate(${t.angle} ${t.x} ${t.y})"` : ""}${t.largeur ? ` textLength="${t.largeur}" lengthAdjust="spacingAndGlyphs"` : ""}>${t.texte}</text>`).join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">${t}</svg>`;
  img = sharp(await img.png().toBuffer()).composite([{ input: Buffer.from(svg) }]);
}
await img.webp({ quality: 95 }).toFile(out);
