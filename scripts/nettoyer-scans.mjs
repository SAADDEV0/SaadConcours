// Nettoie des scans de sujets récupérés sur d'autres sites puis les filigrane SaadConcours :
// efface les filigranes clairs ou colorés (texte en diagonale), la ligne « www.fsjesmaster.com »
// en bas de page et les bords sombres (table, ombre), recadre sur le texte, puis appelle filigraner().
// Usage : node scripts/nettoyer-scans.mjs [--source=<dossier>] [--sortie=<dossier>] <public/images/…/x.webp> […]
//   --source : lit l'original dans ce dossier (à plat, même nom de fichier) au lieu du chemin donné.
//   --sortie : écrit dans ce dossier (à plat) au lieu d'écraser le fichier, pour un aperçu.
// Les images qui portent déjà l'étiquette saadconcours.space sont ignorées : relancer le script sur
// un fichier déjà traité ne superpose pas deux filigranes.
// Cas que la détection rate : scripts/nettoyer-scans.exceptions.json, par nom de fichier :
//   { "x_p1.webp": { "seuil": 235, "encre": true, "bande": false, "effacer": [[x0, y0, x1, y1]], "ignorer": true } }
//   seuil : clair au-delà duquel un pixel devient papier (défaut 238 ; plus bas = efface mieux le filigrane, mais aussi le texte pâle)
//   encre : efface aussi les annotations au stylo bleu (soulignements, ratures, chiffres en marge)
//   bande : false pour ne pas chercher la ligne du bas ; seuilBande : score suffisant pour la marque
//   (défaut 0,45 ; 0,33 pour les scans flous dont la marque a été vérifiée à l'œil) ; effacer : zones à blanchir, en fractions 0–1
//   de l'image nettoyée avant recadrage ; ignorer : laisser l'image telle quelle.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { filigraner } from "./filigrane-scans.mjs";

// Au-dessous de 235, le texte fin des réponses de QCM disparaît avec le filigrane (CCA Agadir 2019).
const SEUIL = 238;
const EXCEPTIONS = JSON.parse(fs.readFileSync(new URL("./nettoyer-scans.exceptions.json", import.meta.url), "utf8"));

// Couleurs des filigranes (rose/magenta, bleu clair, jaune) : l'encre des sujets est noire.
function couleurFiligrane(r, g, b) {
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  if (max - min < 45) return false;
  if (r > 170 && b > g + 25) return true;
  if (b > r + 35 && max > 140) return true;
  if (r > 170 && g > 160 && b < Math.min(r, g) - 50) return true;
  return false;
}

// Étiquette indigo en bas à droite = déjà filigrané par filigrane-scans.mjs.
async function dejaFiligrane(source) {
  const { width: w, height: h } = await sharp(source).metadata();
  const rw = Math.round(w * 0.3), rh = Math.round(h * 0.06);
  const { data, info } = await sharp(source).extract({ left: w - rw, top: h - rh, width: rw, height: rh })
    .removeAlpha().raw().toBuffer({ resolveWithObject: true });
  let n = 0;
  for (let i = 0; i < data.length; i += 3) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    if (b > 180 && r < 130 && g < 120 && b - r > 80) n++;
  }
  return n / (info.width * info.height) > 0.15;
}

// Annotations au stylo bleu d'un ancien lecteur (soulignements, ratures, chiffres en marge) : trop
// foncées pour couleurFiligrane. Sur l'encre imprimée, b − max(r, g) reste entre −7 et 9 (quelques
// pixels isolés montent à 12 par la compression) ; le stylo va de 10 à 85, avec un cœur très foncé
// qui retombe vers 8. On garde donc les taches nettement bleues d'au moins 12 px, on les prolonge de
// 2 px dans les pixels encore un peu bleus, puis d'1 px de liseré gris laissé par la compression,
// sans mordre sur l'encre noire voisine (précédent : AIFF Kénitra 2025).
function encreBleue(data, w, h) {
  const bleu = (j) => data[j * 3 + 2] - Math.max(data[j * 3], data[j * 3 + 1]);
  const voisins = (j, f) => {
    const x = j % w, y = (j / w) | 0;
    for (let dy = -1; dy <= 1; dy++)
      for (let dx = -1; dx <= 1; dx++) {
        const u = x + dx, v = y + dy;
        if ((dx || dy) && u >= 0 && v >= 0 && u < w && v < h) f(v * w + u);
      }
  };
  const trait = new Uint8Array(w * h);
  const vu = new Uint8Array(w * h);
  let front = [];
  for (let s = 0; s < w * h; s++) {
    if (vu[s] || bleu(s) <= 12) continue;
    const tache = [s];
    vu[s] = 1;
    for (let i = 0; i < tache.length; i++)
      voisins(tache[i], (k) => { if (!vu[k] && bleu(k) > 12) { vu[k] = 1; tache.push(k); } });
    if (tache.length < 12) continue;
    for (const j of tache) { trait[j] = 1; front.push(j); }
  }
  for (let pas = 0; pas < 1; pas++) {
    const suivant = [];
    for (const j of front) voisins(j, (k) => { if (!trait[k] && bleu(k) > 8) { trait[k] = 1; suivant.push(k); } });
    front = suivant;
  }
  const masque = trait.slice();
  for (let y = 1; y < h - 1; y++)
    for (let x = 1; x < w - 1; x++) {
      const j = y * w + x;
      if (trait[j] || !(trait[j - 1] || trait[j + 1] || trait[j - w] || trait[j + w])) continue;
      if (Math.min(data[j * 3], data[j * 3 + 1], data[j * 3 + 2]) > 110) masque[j] = 1;
    }
  return masque;
}

// Sous un trait de stylo qui raye une ligne du sujet, l'encre imprimée est perdue : on la rebouche
// quand elle reprend des deux côtés du trait (au-dessus et au-dessous, ou à gauche et à droite, à
// moins de `portee` px), sinon le pixel devient papier.
function reboucher(L, masque, w, h, portee = 7) {
  const sortie = Buffer.from(L);
  const cherche = (x, y, dx, dy) => {
    for (let k = 1; k <= portee; k++) {
      const u = x + dx * k, v = y + dy * k;
      if (u < 0 || v < 0 || u >= w || v >= h) return 255;
      if (!masque[v * w + u]) return L[v * w + u];
    }
    return 255;
  };
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) {
      const j = y * w + x;
      if (!masque[j]) continue;
      const vertical = Math.max(cherche(x, y, 0, -1), cherche(x, y, 0, 1));
      const horizontal = Math.max(cherche(x, y, -1, 0), cherche(x, y, 1, 0));
      const v = Math.min(vertical, horizontal);
      sortie[j] = v < 140 ? v : 255;
    }
  return sortie;
}

// Niveaux de gris, éclairage égalisé (division par le fond estimé), puis tout ce qui est plus clair
// que `seuil` devient blanc : le filigrane en diagonale, plus pâle que l'encre, disparaît.
async function niveaux(source, seuil, encre = false) {
  const { data, info } = await sharp(source).rotate().flatten({ background: "#fff" }).removeAlpha()
    .raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = info;
  let L = Buffer.alloc(w * h);
  for (let i = 0, j = 0; j < w * h; i += 3, j++) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    L[j] = couleurFiligrane(r, g, b) ? 255 : Math.round(0.299 * r + 0.587 * g + 0.114 * b);
  }
  if (encre) L = reboucher(L, encreBleue(data, w, h), w, h);
  // Fond : réduction, médiane (efface le texte), flou, retour à la taille.
  const fond = await sharp(L, { raw: { width: w, height: h, channels: 1 } })
    .resize(Math.max(40, Math.round(w / 6)), Math.max(40, Math.round(h / 6)), { fit: "fill" })
    .median(9).blur(4).resize(w, h, { fit: "fill", kernel: "cubic" }).extractChannel(0).raw().toBuffer();
  const noir = 60;
  for (let j = 0; j < w * h; j++) {
    const n = Math.min(255, (L[j] * 255) / Math.max(fond[j], 40));
    const v = n >= seuil ? 1 : n <= noir ? 0 : (n - noir) / (seuil - noir);
    L[j] = Math.round(255 * Math.pow(v, 1.2));
  }
  return { b: L, w, h };
}

// Taches sombres denses reliées au bord (table, sol, ombre) : le texte, lui, est clairsemé.
function effacerBords(b, w, h) {
  const vu = new Uint8Array(w * h);
  const pile = new Int32Array(w * h);
  const departs = [];
  for (let x = 0; x < w; x++) departs.push(x, (h - 1) * w + x);
  for (let y = 0; y < h; y++) departs.push(y * w, y * w + w - 1);
  for (const s of departs) {
    if (vu[s] || b[s] >= 128) continue;
    const px = [];
    let top = 0, x0 = w, x1 = 0, y0 = h, y1 = 0;
    pile[top++] = s;
    vu[s] = 1;
    while (top) {
      const j = pile[--top];
      px.push(j);
      const x = j % w, y = (j / w) | 0;
      if (x < x0) x0 = x;
      if (x > x1) x1 = x;
      if (y < y0) y0 = y;
      if (y > y1) y1 = y;
      const voisins = [x > 0 ? j - 1 : -1, x < w - 1 ? j + 1 : -1, y > 0 ? j - w : -1, y < h - 1 ? j + w : -1];
      for (const k of voisins) if (k >= 0 && !vu[k] && b[k] < 128) { vu[k] = 1; pile[top++] = k; }
    }
    const aire = (x1 - x0 + 1) * (y1 - y0 + 1);
    if (px.length > w * h * 0.002 && px.length / aire > 0.25) for (const j of px) b[j] = 255;
  }
}

// Ligne « www.fsjesmaster.com » : les lettres sont étirées horizontalement pour former des blocs
// (une ligne de texte = un bloc). Les blocs du bas de page qui ont les proportions de la marque
// (10,8 à 12,5 fois plus larges que hauts) sont comparés au modèle nettoyer-scans.fsjesmaster.png,
// recalé au pixel près (position et échelle). Sur les essais, la vraie marque obtient 0,47 à 0,68 ;
// une ligne de sujet aux mêmes proportions ne dépasse pas 0,41.
const MODELE = await sharp(fileURLToPath(new URL("./nettoyer-scans.fsjesmaster.png", import.meta.url)))
  .extractChannel(0).raw().toBuffer({ resolveWithObject: true });
const RAPPORT_MODELE = MODELE.info.height / MODELE.info.width;
const SEUIL_BANDE = 0.45;
const modeles = new Map();

// Modèle redimensionné, centré, avec sa norme (mis en cache par taille).
async function modele(w, h) {
  const cle = `${w}x${h}`;
  if (!modeles.has(cle)) {
    const { width, height } = MODELE.info;
    const d = await sharp(MODELE.data, { raw: { width, height, channels: 1 } })
      .resize(w, h, { fit: "fill" }).extractChannel(0).raw().toBuffer();
    const moyenne = d.reduce((s, v) => s + v, 0) / d.length;
    const c = Float32Array.from(d, (v) => v - moyenne);
    modeles.set(cle, { c, norme: Math.sqrt(c.reduce((s, v) => s + v * v, 0)) });
  }
  return modeles.get(cle);
}

// Corrélation normalisée entre le modèle (tw×th) et l'image à la position (x, y).
function correlation(b, w, m, tw, th, x, y) {
  let si = 0, sii = 0, sim = 0;
  for (let j = 0; j < th; j++) {
    const r = (y + j) * w + x, rm = j * tw;
    for (let i = 0; i < tw; i++) {
      const v = b[r + i];
      si += v; sii += v * v; sim += v * m.c[rm + i];
    }
  }
  const variance = sii - (si * si) / (tw * th);
  return variance < 1 ? 0 : sim / (Math.sqrt(variance) * m.norme);
}

// Meilleur recalage du modèle sur le bloc : échelle 45 à 140 % de sa largeur (le bloc peut contenir
// du texte voisin, ou seulement une partie de la marque), toutes positions.
async function recaler(b, w, h, bloc) {
  const bw = bloc.x1 - bloc.x0 + 1, milieu = (bloc.y0 + bloc.y1) / 2;
  let meilleur = { score: 0 };
  for (let e = 0.45; e <= 1.4; e += 0.025) {
    const tw = Math.round(bw * e), th = Math.max(5, Math.round(tw * RAPPORT_MODELE));
    // La marque couvre 35 à 88 % de la largeur de la page ; plus étroit, ce sont des bouts de mots.
    if (tw < w * 0.28) continue;
    const m = await modele(tw, th);
    const d = Math.max(3, Math.round(th * 0.25));
    const yMin = Math.min(bloc.y0, Math.round(milieu - th / 2)) - d, yMax = Math.max(bloc.y1 - th, Math.round(milieu - th / 2)) + d;
    for (let y = Math.max(0, yMin); y <= Math.min(h - th, yMax); y += 2)
      for (let x = Math.max(0, bloc.x0 - d); x <= Math.min(w - tw, Math.max(bloc.x0, bloc.x1 + 1 - tw) + d); x += 2) {
        const score = correlation(b, w, m, tw, th, x, y);
        if (score > meilleur.score) meilleur = { score, x0: x, y0: y, x1: x + tw - 1, y1: y + th - 1, m, tw, th };
      }
  }
  if (!meilleur.m) return meilleur;
  // Ajustement fin d'un pixel autour du meilleur point du balayage en pas de 2.
  const { m, tw, th } = meilleur;
  const x0 = meilleur.x0, y0 = meilleur.y0;
  for (let y = Math.max(0, y0 - 1); y <= Math.min(h - th, y0 + 1); y++)
    for (let x = Math.max(0, x0 - 1); x <= Math.min(w - tw, x0 + 1); x++) {
      const score = correlation(b, w, m, tw, th, x, y);
      if (score > meilleur.score) Object.assign(meilleur, { score, x0: x, y0: y, x1: x + tw - 1, y1: y + th - 1 });
    }
  return { score: meilleur.score, x0: meilleur.x0, y0: meilleur.y0, x1: meilleur.x1, y1: meilleur.y1 };
}

async function chercherBande(b, w, h, seuil) {
  const haut = Math.floor(h * 0.45), H = h - haut;
  const encre = new Uint8Array(w * H);
  for (let j = 0; j < w * H; j++) encre[j] = b[haut * w + j] < 140 ? 1 : 0;
  const blocs = new Map();
  for (const ecart of [0.006, 0.012, 0.02, 0.035]) {
    const trou = Math.max(2, Math.round(w * ecart));
    const etire = encre.slice();
    for (let y = 0; y < H; y++) {
      let dernier = -1;
      for (let x = 0; x < w; x++) {
        if (!encre[y * w + x]) continue;
        if (dernier >= 0 && x - dernier - 1 <= trou) etire.fill(1, y * w + dernier + 1, y * w + x);
        dernier = x;
      }
    }
    const vu = new Uint8Array(w * H);
    for (let s = 0; s < w * H; s++) {
      if (!etire[s] || vu[s]) continue;
      let x0 = w, x1 = 0, y0 = H, y1 = 0;
      const pile = [s];
      vu[s] = 1;
      while (pile.length) {
        const j = pile.pop(), x = j % w, y = (j / w) | 0;
        if (x < x0) x0 = x;
        if (x > x1) x1 = x;
        if (y < y0) y0 = y;
        if (y > y1) y1 = y;
        for (const k of [x > 0 ? j - 1 : -1, x < w - 1 ? j + 1 : -1, y > 0 ? j - w : -1, y < H - 1 ? j + w : -1])
          if (k >= 0 && etire[k] && !vu[k]) { vu[k] = 1; pile.push(k); }
      }
      // Une marque collée à la ligne du dessus forme un seul bloc avec elle : on le recoupe aux
      // creux d'encre entre les lignes, puis on resserre chaque morceau sur sa largeur réelle.
      const profil = [];
      for (let y = y0; y <= y1; y++) {
        let n = 0;
        for (let x = x0; x <= x1; x++) n += encre[y * w + x];
        profil.push(n);
      }
      const creux = Math.max(...profil) * 0.12;
      for (let a = 0; a < profil.length;) {
        if (profil[a] <= creux) { a++; continue; }
        let z = a;
        while (z + 1 < profil.length && profil[z + 1] > creux) z++;
        const ya = y0 + a, yz = y0 + z;
        a = z + 1;
        let xa = x1, xz = x0;
        for (let y = ya; y <= yz; y++)
          for (let x = x0; x <= x1; x++) if (encre[y * w + x]) { if (x < xa) xa = x; if (x > xz) xz = x; }
        const bw = xz - xa + 1, bh = yz - ya + 1, rapport = bw / bh;
        if (bh < 5 || rapport < 7 || rapport > 30 || bw < w * 0.12) continue;
        const cle = `${xa},${ya},${xz},${yz}`;
        if (blocs.has(cle)) continue;
        blocs.set(cle, { x0: xa, y0: haut + ya, x1: xz, y1: haut + yz });
      }
    }
  }
  let meilleur = null;
  for (const bloc of blocs.values()) {
    const r = await recaler(b, w, h, bloc);
    if (!meilleur || r.score > meilleur.score) meilleur = r;
  }
  return meilleur && meilleur.score >= seuil ? meilleur : null;
}

// La recherche se fait sur une copie de 700 px de large au plus : sur les scans de 2000 px, le
// recalage pleine résolution prenait plusieurs minutes par image.
async function bandeFsjesmaster(b, w, h, seuil = SEUIL_BANDE) {
  const LARGEUR = 700;
  if (w <= LARGEUR) return chercherBande(b, w, h, seuil);
  const k = w / LARGEUR, hr = Math.round(h / k);
  const petit = await sharp(b, { raw: { width: w, height: h, channels: 1 } })
    .resize(LARGEUR, hr, { fit: "fill" }).extractChannel(0).raw().toBuffer();
  const r = await chercherBande(petit, LARGEUR, hr, seuil);
  return r && { score: r.score, x0: Math.round(r.x0 * k), y0: Math.round(r.y0 * k), x1: Math.round(r.x1 * k), y1: Math.round(r.y1 * k) };
}

function blanchir(b, w, h, x0, y0, x1, y1) {
  for (let y = Math.max(0, y0); y <= Math.min(h - 1, y1); y++)
    for (let x = Math.max(0, x0); x <= Math.min(w - 1, x1); x++) b[y * w + x] = 255;
}

export async function nettoyer(source, exc = {}) {
  const { b, w, h } = await niveaux(source, exc.seuil ?? SEUIL, exc.encre);
  effacerBords(b, w, h);
  const bande = exc.bande === false ? null : await bandeFsjesmaster(b, w, h, exc.seuilBande);
  if (bande) {
    const m = Math.round((bande.y1 - bande.y0) * 0.6);
    blanchir(b, w, h, bande.x0 - m, bande.y0 - m, bande.x1 + m, bande.y1 + m);
  }
  for (const [x0, y0, x1, y1] of exc.effacer ?? [])
    blanchir(b, w, h, Math.round(x0 * w), Math.round(y0 * h), Math.round(x1 * w), Math.round(y1 * h));
  const brut = sharp(b, { raw: { width: w, height: h, channels: 1 } });
  const rogne = await brut.clone().trim({ background: "#ffffff", threshold: 60 }).png()
    .toBuffer({ resolveWithObject: true }).catch(() => null);
  const img = rogne ?? (await brut.png().toBuffer({ resolveWithObject: true }));
  const marge = Math.round(Math.max(img.info.width, img.info.height) * 0.03);
  const png = await sharp(img.data).extend({ top: marge, bottom: marge, left: marge, right: marge, background: "#ffffff" })
    .png().toBuffer();
  return { png, bande };
}

const args = process.argv.slice(2);
const opt = (nom) => args.find((a) => a.startsWith(`--${nom}=`))?.slice(nom.length + 3);
const source = opt("source"), sortie = opt("sortie");
const fichiers = args.filter((a) => !a.startsWith("--"));
if (!fichiers.length) {
  console.error("Usage : node scripts/nettoyer-scans.mjs [--source=<dossier>] [--sortie=<dossier>] <image> […]");
  process.exit(1);
}
for (const f of fichiers) {
  const nom = path.basename(f);
  const original = source ? path.join(source, nom) : f;
  const exc = EXCEPTIONS[nom] ?? {};
  if (exc.ignorer) { console.log(`ignorée   ${nom}`); continue; }
  if (await dejaFiligrane(original)) { console.log(`déjà fait ${nom}`); continue; }
  const { png, bande } = await nettoyer(fs.readFileSync(original), exc);
  await filigraner(png, sortie ? path.join(sortie, nom) : f);
  // La zone effacée est affichée pour pouvoir la relire (elle doit contenir la marque, pas le sujet).
  console.log(bande ? `bande     ${nom} ${bande.score.toFixed(3)} ${bande.x0},${bande.y0},${bande.x1},${bande.y1}` : `nettoyée  ${nom}`);
}
