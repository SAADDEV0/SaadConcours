// Convertit des photos de sujets en webp filigranés SaadConcours.
// Usage : node scripts/filigrane-scans.mjs [--rotation=90] [--recadrer] <source> <destination.webp> [<source> <destination.webp> …]
//   --rotation=N : tourne la photo de N degrés (sens horaire) avant tout traitement (photo prise de travers).
//   --recadrer   : ne garde que la feuille blanche (supprime la table, le sol, les doigts autour).
// Toujours partir de la photo d'origine : refiligraner un webp déjà marqué superpose deux filigranes.
import sharp from "sharp";

const TEXTE = "saadconcours.space";
const LARGEUR_MAX = 1600;

function echapper(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
}

// Texte en diagonale répété sur toute l'image (discret, pour ne pas gêner la lecture)
// et bandeau plein en bas à droite (lisible, pour que la marque survive à un recadrage partiel).
function filigraneSvg(w, h) {
  const taille = Math.round(Math.max(w, h) / 30);
  const pasX = taille * 13;
  const pasY = taille * 6;
  const diag = Math.ceil(Math.hypot(w, h));
  const lignes = [];
  for (let y = -diag; y < diag; y += pasY) {
    const decalage = (Math.round(y / pasY) % 2) * (pasX / 2);
    for (let x = -diag; x < diag; x += pasX) {
      lignes.push(`<text x="${x + decalage}" y="${y}">${echapper(TEXTE)}</text>`);
    }
  }
  const tag = Math.round(Math.max(w, h) / 55);
  const tagW = Math.round(tag * 11.5);
  const tagH = Math.round(tag * 1.9);
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <g transform="translate(${w / 2} ${h / 2}) rotate(-30)" font-family="Arial, Helvetica, sans-serif" font-weight="700"
     font-size="${taille}" fill="#4f46e5" fill-opacity="0.13">${lignes.join("")}</g>
  <rect x="${w - tagW - tag}" y="${h - tagH - tag}" width="${tagW}" height="${tagH}" rx="${tag / 2}" fill="#4f46e5" fill-opacity="0.85"/>
  <text x="${w - tag - tagW / 2}" y="${h - tag - tagH / 2}" dominant-baseline="central" text-anchor="middle"
        font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="${tag}" fill="#fff">${echapper(TEXTE)}</text>
</svg>`);
}

// Cadre de la feuille : lignes et colonnes dont la majorité des pixels sont clairs et peu saturés
// (papier), par opposition à une table, un sol ou une main. Recherche depuis le centre vers les bords,
// pour s'arrêter au bord de la feuille même si un autre objet clair traîne plus loin.
async function cadreFeuille(buffer) {
  const { data, info } = await sharp(buffer).raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h, channels: c } = info;
  const papier = (i) => {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    return min > 80 && max - min < 45;
  };
  const lignes = new Array(h).fill(0);
  const colonnes = new Array(w).fill(0);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (papier((y * w + x) * c)) {
        lignes[y]++;
        colonnes[x]++;
      }
    }
  }
  const bornes = (compte, longueur) => {
    const seuil = longueur * 0.35;
    let a = Math.floor(compte.length / 2);
    let b = a;
    while (a > 0 && compte[a - 1] >= seuil) a--;
    while (b < compte.length - 1 && compte[b + 1] >= seuil) b++;
    return [a, b];
  };
  const [y0, y1] = bornes(lignes, w);
  const [x0, x1] = bornes(colonnes, h);
  // Rogner un peu vers l'intérieur : le bord d'une feuille photographiée en biais laisse un liseré de table.
  const marge = Math.round(Math.min(x1 - x0, y1 - y0) * 0.012);
  return { left: x0 + marge, top: y0 + marge, width: x1 - x0 - 2 * marge, height: y1 - y0 - 2 * marge };
}

export async function filigraner(source, destination, { rotation = 0, recadrer = false } = {}) {
  let buffer = await sharp(source).rotate().rotate(rotation).png().toBuffer();
  if (recadrer) buffer = await sharp(buffer).extract(await cadreFeuille(buffer)).png().toBuffer();
  const { data, info } = await sharp(buffer)
    .resize({ width: LARGEUR_MAX, withoutEnlargement: true })
    .toBuffer({ resolveWithObject: true });
  await sharp(data)
    .composite([{ input: filigraneSvg(info.width, info.height), top: 0, left: 0 }])
    .webp({ quality: 80 })
    .toFile(destination);
  return info;
}

const options = { rotation: 0, recadrer: false };
const fichiers = [];
for (const arg of process.argv.slice(2)) {
  if (arg === "--recadrer") options.recadrer = true;
  else if (arg.startsWith("--rotation=")) options.rotation = Number(arg.slice("--rotation=".length)) || 0;
  else fichiers.push(arg);
}
if (fichiers.length === 0 || fichiers.length % 2 !== 0) {
  console.error("Usage : node scripts/filigrane-scans.mjs [--rotation=90] [--recadrer] <source> <destination.webp> [...]");
  process.exit(1);
}
for (let i = 0; i < fichiers.length; i += 2) {
  const info = await filigraner(fichiers[i], fichiers[i + 1], options);
  console.log(`${fichiers[i + 1]} (${info.width}×${info.height})`);
}
