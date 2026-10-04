// Convertit des photos de sujets en webp filigranés SaadConcours.
// Usage : node scripts/filigrane-scans.mjs <source> <destination.webp> [<source> <destination.webp> …]
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

export async function filigraner(source, destination) {
  const base = sharp(source).rotate().resize({ width: LARGEUR_MAX, withoutEnlargement: true });
  const { data, info } = await base.toBuffer({ resolveWithObject: true });
  await sharp(data)
    .composite([{ input: filigraneSvg(info.width, info.height), top: 0, left: 0 }])
    .webp({ quality: 80 })
    .toFile(destination);
  return info;
}

const args = process.argv.slice(2);
if (args.length === 0 || args.length % 2 !== 0) {
  console.error("Usage : node scripts/filigrane-scans.mjs <source> <destination.webp> [...]");
  process.exit(1);
}
for (let i = 0; i < args.length; i += 2) {
  const info = await filigraner(args[i], args[i + 1]);
  console.log(`${args[i + 1]} (${info.width}×${info.height})`);
}
