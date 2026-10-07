// Nettoie une photo de sujet grise, surlignée et annotée qui porte un filigrane d'un autre site,
// sans jamais éclaircir le texte (précédent : EMS Aït Melloul 2024, où nettoyer-scans.mjs avec
// "seuil": 200 rendait la page 1 illisible).
// Usage : node scripts/nettoyer-photo.mjs <photo> <sortie.png> ["x0,y0,x1,y1;…"] [blanc=200] [noir=130]
//   zones : rectangles en pixels de la photo à blanchir (ligne « www.fsjesmaster.com » du bas).
//   blanc : au-dessus, papier (le filigrane gris en diagonale ressort entre 200 et 220 après égalisation).
//   noir  : au-dessous, noir. Impression pâle : 212 / 165 garde tout le texte (le filigrane laisse des traces).
// Puis : node scripts/filigrane-scans.mjs <sortie.png> public/images/<ville>/<id>/<id>_pN.webp
// Étapes : canal max (efface le surligneur jaune), fond égalisé (90e centile par bloc de 24 px),
// stylo bleu effacé, courbe noir → blanc avec gamma 1,4 (fonce l'encre), netteté légère.
import sharp from "sharp";

const [, , src, out, zones, blanc = "200", noir = "130"] = process.argv;
if (!src || !out) {
  console.error("Usage : node scripts/nettoyer-photo.mjs <photo> <sortie.png> [zones] [blanc] [noir]");
  process.exit(1);
}
const BL = +blanc, NO = +noir;
const { data, info } = await sharp(src).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const w = info.width, h = info.height, N = w * h;

const L = new Uint8Array(N);
for (let j = 0; j < N; j++) L[j] = Math.max(data[3 * j], data[3 * j + 1], data[3 * j + 2]);

// Fond : 90e centile par bloc, max 3×3 puis moyenne 5×5 sur la grille, interpolation bilinéaire.
const B = 24, bw = Math.ceil(w / B), bh = Math.ceil(h / B);
const G = new Float32Array(bw * bh);
for (let by = 0; by < bh; by++)
  for (let bx = 0; bx < bw; bx++) {
    const v = [];
    for (let y = by * B; y < Math.min(h, by * B + B); y++)
      for (let x = bx * B; x < Math.min(w, bx * B + B); x++) v.push(L[y * w + x]);
    v.sort((a, b) => a - b);
    G[by * bw + bx] = v[Math.floor(v.length * 0.9)];
  }
const grille = (src, r, f) => {
  const o = new Float32Array(bw * bh);
  for (let y = 0; y < bh; y++)
    for (let x = 0; x < bw; x++) {
      const v = [];
      for (let dy = -r; dy <= r; dy++)
        for (let dx = -r; dx <= r; dx++) {
          const u = x + dx, t = y + dy;
          if (u >= 0 && t >= 0 && u < bw && t < bh) v.push(src[t * bw + u]);
        }
      o[y * bw + x] = f(v);
    }
  return o;
};
const fond = grille(grille(G, 1, (v) => Math.max(...v)), 2, (v) => v.reduce((a, b) => a + b, 0) / v.length);

// Stylo bleu : taches nettement bleues d'au moins 12 px, élargies d'1 px.
const bleu = (j) => data[3 * j + 2] - Math.max(data[3 * j], data[3 * j + 1]);
const stylo = new Uint8Array(N), vu = new Uint8Array(N);
for (let s = 0; s < N; s++) {
  if (vu[s] || bleu(s) <= 14) continue;
  const tache = [s];
  vu[s] = 1;
  for (let i = 0; i < tache.length; i++) {
    const x = tache[i] % w, y = (tache[i] / w) | 0;
    for (let dy = -1; dy <= 1; dy++)
      for (let dx = -1; dx <= 1; dx++) {
        const u = x + dx, v = y + dy;
        if (u < 0 || v < 0 || u >= w || v >= h) continue;
        const k = v * w + u;
        if (!vu[k] && bleu(k) > 14) { vu[k] = 1; tache.push(k); }
      }
  }
  if (tache.length >= 12) for (const j of tache) stylo[j] = 1;
}
const efface = stylo.slice();
for (let j = 0; j < N; j++)
  if (stylo[j]) {
    const x = j % w, y = (j / w) | 0;
    for (let dy = -1; dy <= 1; dy++)
      for (let dx = -1; dx <= 1; dx++) {
        const u = x + dx, v = y + dy;
        if (u >= 0 && v >= 0 && u < w && v < h && bleu(v * w + u) > 4) efface[v * w + u] = 1;
      }
  }

const R = new Uint8Array(N);
for (let y = 0; y < h; y++)
  for (let x = 0; x < w; x++) {
    const gx = Math.min(bw - 1.001, Math.max(0, x / B - 0.5)), gy = Math.min(bh - 1.001, Math.max(0, y / B - 0.5));
    const x0 = Math.floor(gx), y0 = Math.floor(gy), fx = gx - x0, fy = gy - y0;
    const x1 = Math.min(bw - 1, x0 + 1), y1 = Math.min(bh - 1, y0 + 1);
    const bg = fond[y0 * bw + x0] * (1 - fx) * (1 - fy) + fond[y0 * bw + x1] * fx * (1 - fy)
      + fond[y1 * bw + x0] * (1 - fx) * fy + fond[y1 * bw + x1] * fx * fy;
    const j = y * w + x;
    const r = efface[j] ? 255 : (255 * L[j]) / Math.max(1, bg);
    const t = Math.max(0, Math.min(1, (r - NO) / (BL - NO)));
    R[j] = Math.round(255 * Math.pow(t, 1.4));
  }
for (const zone of zones ? zones.split(";") : []) {
  const [a, b, c, d] = zone.split(",").map(Number);
  for (let y = b; y < Math.min(h, d); y++) for (let x = a; x < Math.min(w, c); x++) R[y * w + x] = 255;
}
await sharp(Buffer.from(R), { raw: { width: w, height: h, channels: 1 } }).sharpen({ sigma: 0.8 }).png().toFile(out);
console.log(`nettoyée  ${out}`);
