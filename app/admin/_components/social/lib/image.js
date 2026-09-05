import { daysUntil, estimateReadingTime, formatDateFr, hasCorrige } from "./contentTypes";

// Presets instead of raw width/height inputs — la vraie question c'est
// "pour quelle plateforme/placement je poste", les pixels ne sont que ce
// qui en découle. Chaque format redessine la même mise en page à une
// taille de canvas différente (voir drawCard, tout est en unités
// proportionnelles).
export const FORMATS = [
  { key: "carre", label: "Carré", sub: "Post Instagram / Facebook", width: 1080, height: 1080 },
  { key: "portrait", label: "Portrait", sub: "Post Instagram (recommandé)", width: 1080, height: 1350 },
  { key: "story", label: "Story", sub: "Story IG/FB · Statut WhatsApp", width: 1080, height: 1920 },
  { key: "paysage", label: "Paysage", sub: "Partage lien Facebook", width: 1200, height: 630 },
];

export const THEMES = {
  concours: { grad: ["#4338ca", "#7c3aed", "#c026d3"], accent: "#a21caf" },
  news: { grad: ["#c2410c", "#ea580c", "#f59e0b"], accent: "#9a3412" },
  blog: { grad: ["#0e7490", "#0891b2", "#06b6d4"], accent: "#0e7490" },
  evaluation: { grad: ["#15803d", "#16a34a", "#22c55e"], accent: "#065f46" },
};

function wrapLines(ctx, text, maxWidth) {
  const words = String(text || "").split(" ");
  const lines = [];
  let line = "";
  for (const word of words) {
    const test = line ? line + " " + word : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines;
}

// ctx.roundRect() n'existe que depuis Chrome 99 / Safari 16.4 — on dessine
// le chemin à la main pour que l'image se génère pareil sur n'importe quel
// navigateur utilisé côté admin.
function roundedRect(ctx, x, y, w, h, r) {
  const rad = Math.max(0, Math.min(r, w / 2, h / 2));
  ctx.beginPath();
  ctx.moveTo(x + rad, y);
  ctx.arcTo(x + w, y, x + w, y + h, rad);
  ctx.arcTo(x + w, y + h, x, y + h, rad);
  ctx.arcTo(x, y + h, x, y, rad);
  ctx.arcTo(x, y, x + w, y, rad);
  ctx.closePath();
}

// Même tracé que le logo du site (toque de diplômé + livre ouvert, voir
// app/_shared/appIcon.js) redessiné en vecteur plutôt que chargé comme
// image — pas de chargement asynchrone à attendre avant de dessiner le
// canvas, et un rendu net à n'importe quelle résolution.
function drawLogoMark(ctx, cx, cy, size, color, accentColor) {
  const s = size / 64;
  const ox = cx - size / 2;
  const oy = cy - size / 2;
  const pt = (x, y) => [ox + x * s, oy + y * s];
  const poly = (points) => {
    ctx.beginPath();
    points.forEach(([x, y], i) => {
      const [px, py] = pt(x, y);
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    });
    ctx.closePath();
    ctx.fill();
  };

  ctx.save();
  ctx.fillStyle = color;

  // Toque de diplômé
  poly([
    [32, 13],
    [49, 21],
    [32, 29],
    [15, 21],
  ]);

  // Pompon
  ctx.strokeStyle = color;
  ctx.lineWidth = Math.max(1, 2 * s);
  ctx.lineCap = "round";
  ctx.beginPath();
  const [tx0, ty0] = pt(49, 21);
  const [tx1, ty1] = pt(51, 31);
  ctx.moveTo(tx0, ty0);
  ctx.lineTo(tx1, ty1);
  ctx.stroke();
  ctx.fillStyle = accentColor;
  const [bx, by] = pt(51, 32.5);
  ctx.beginPath();
  ctx.arc(bx, by, Math.max(1, 2 * s), 0, Math.PI * 2);
  ctx.fill();

  // Livre ouvert
  ctx.fillStyle = color;
  poly([
    [32, 42],
    [13, 37],
    [13, 48],
    [32, 54],
  ]);
  poly([
    [32, 42],
    [51, 37],
    [51, 48],
    [32, 54],
  ]);
  ctx.strokeStyle = accentColor;
  ctx.lineWidth = Math.max(1, 1.2 * s);
  ctx.beginPath();
  const [sx0, sy0] = pt(32, 42);
  const [sx1, sy1] = pt(32, 54);
  ctx.moveTo(sx0, sy0);
  ctx.lineTo(sx1, sy1);
  ctx.stroke();

  ctx.restore();
}

/* --------------------------------- Image ---------------------------------
 * Chaque position/taille est une fraction de `unit` (le plus petit côté du
 * canvas) donc le même code de dessin produit un bon résultat en 1080x1080,
 * 1080x1920 (story) ou 1200x630 (paysage) sans branches par format. Un
 * dégradé + badge dédiés par type de contenu (concours/news/blog/
 * évaluation) pour que l'image donne d'un coup d'œil le type de post.
 * ------------------------------------------------------------------------ */

export function drawCard(canvas, kind, item) {
  const ctx = canvas.getContext("2d");
  const W = canvas.width;
  const H = canvas.height;
  const unit = Math.min(W, H);
  const pad = Math.round(unit * 0.075);
  // Format Story (1080x1920) : Instagram/WhatsApp couvrent le haut (avatar +
  // bouton fermer) et le bas (barre de réponse) de l'interface — on réserve
  // une "zone de sécurité" en plus du padding normal pour ces deux formats
  // très allongés, quel que soit leur libellé exact.
  const isTall = H / W >= 1.5;
  const safeTop = isTall ? unit * 0.09 : 0;
  const safeBottom = isTall ? unit * 0.1 : 0;
  const theme = THEMES[kind];

  const grad = ctx.createLinearGradient(0, 0, W, H);
  grad.addColorStop(0, theme.grad[0]);
  grad.addColorStop(0.55, theme.grad[1]);
  grad.addColorStop(1, theme.grad[2]);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // Deux cercles décoratifs discrets — volontairement minimal ("attractif
  // mais simple" veut dire retenue, pas plus de formes).
  ctx.fillStyle = "rgba(255,255,255,0.08)";
  ctx.beginPath();
  ctx.arc(W * 0.92, H * 0.05, unit * 0.24, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(W * 0.02, H, unit * 0.2, 0, Math.PI * 2);
  ctx.fill();

  // Voile en bas pour garder le footer lisible quel que soit l'endroit où
  // tombe le dégradé à cette hauteur.
  const scrim = ctx.createLinearGradient(0, H * 0.8, 0, H);
  scrim.addColorStop(0, "rgba(0,0,0,0)");
  scrim.addColorStop(1, "rgba(0,0,0,0.32)");
  ctx.fillStyle = scrim;
  ctx.fillRect(0, H * 0.8, W, H * 0.2);

  // Sceau de marque, coin haut-droit — repère visuel constant même quand le
  // titre est long et pousse tout le reste vers le bas. Même logo que le
  // favicon/l'icône PWA du site (toque + livre), pas une simple lettre.
  const sealR = unit * 0.055;
  const sealCx = W - pad - sealR;
  const sealCy = pad + sealR + safeTop;
  ctx.fillStyle = "rgba(255,255,255,0.16)";
  ctx.beginPath();
  ctx.arc(sealCx, sealCy, sealR, 0, Math.PI * 2);
  ctx.fill();
  drawLogoMark(ctx, sealCx, sealCy, sealR * 1.85, "#fff", "#fbbf24");

  const days = kind === "news" ? daysUntil(item.date_limite) : null;
  const urgent = days !== null && days >= 0 && days <= 7;

  let y = pad + unit * 0.06 + safeTop;
  ctx.textBaseline = "alphabetic";

  // Badge en évidence
  const BADGES = {
    concours: "NOUVEAU SUJET",
    news: urgent ? `FERME DANS ${days} J` : "CONCOURS OUVERT",
    blog: "NOUVEL ARTICLE",
    evaluation: "QCM GRATUIT",
  };
  const badgeText = BADGES[kind];
  ctx.font = `700 ${Math.round(unit * 0.028)}px system-ui, sans-serif`;
  const badgeH = unit * 0.052;
  const badgeW = ctx.measureText(badgeText).width + unit * 0.05;
  ctx.fillStyle = urgent ? "#fff" : "rgba(255,255,255,0.18)";
  roundedRect(ctx, pad, y, badgeW, badgeH, badgeH / 2);
  ctx.fill();
  ctx.fillStyle = urgent ? theme.accent : "#fff";
  ctx.fillText(badgeText, pad + unit * 0.025, y + badgeH * 0.65);
  y += badgeH + unit * 0.06;

  // Titre
  ctx.fillStyle = "#fff";
  ctx.font = `800 ${Math.round(unit * 0.066)}px system-ui, sans-serif`;
  ctx.shadowColor = "rgba(0,0,0,0.18)";
  ctx.shadowBlur = unit * 0.012;
  const TITLES = {
    concours: item.etablissement || item.id,
    news: item.titre || "",
    blog: item.title || "",
    evaluation: item.title || item.module || "",
  };
  const titleLines = wrapLines(ctx, TITLES[kind], W - pad * 2).slice(0, 3);
  const titleLH = unit * 0.08;
  titleLines.forEach((line) => {
    y += titleLH;
    ctx.fillText(line, pad, y);
  });
  ctx.shadowBlur = 0;
  y += unit * 0.02;

  // Pastilles méta
  const nbQ = (item.questions || []).length;
  const nbCh = (item.chapters || []).length;
  const PILLS = {
    concours: [item.filiere, item.ville, item.annee].filter(Boolean),
    news: [item.etablissement, item.ville].filter(Boolean),
    blog: [`⏱ ${estimateReadingTime(item.content)} min`, item.publishedAt ? formatDateFr(item.publishedAt) : null].filter(Boolean),
    evaluation: [item.module, nbQ ? `${nbQ} questions` : null, nbCh ? `${nbCh} chapitres` : null].filter(Boolean),
  };
  const pillItems = PILLS[kind];
  if (pillItems.length) {
    y += unit * 0.045;
    ctx.font = `600 ${Math.round(unit * 0.032)}px system-ui, sans-serif`;
    let x = pad;
    const pillH = unit * 0.052;
    pillItems.slice(0, 3).forEach((txt) => {
      const w = ctx.measureText(txt).width + unit * 0.045;
      if (x + w > W - pad) return;
      ctx.fillStyle = "rgba(255,255,255,0.16)";
      roundedRect(ctx, x, y, w, pillH, pillH / 2);
      ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.fillText(txt, x + unit * 0.022, y + pillH * 0.66);
      x += w + unit * 0.02;
    });
    y += pillH;
  }

  // Bloc additionnel, spécifique au type de contenu.
  if (kind === "news") {
    const openStr = item.date_publication ? formatDateFr(item.date_publication) : null;
    const limitStr = item.date_limite ? formatDateFr(item.date_limite) : null;
    ctx.font = `700 ${Math.round(unit * 0.038)}px system-ui, sans-serif`;
    if (openStr) {
      y += unit * 0.07;
      ctx.fillStyle = "rgba(255,255,255,0.92)";
      ctx.fillText(`📅 Ouvert depuis le ${openStr}`, pad, y);
    }
    if (limitStr) {
      y += unit * 0.055;
      ctx.fillStyle = urgent ? "#ffe28a" : "#fff";
      ctx.fillText(`⏰ Date limite : ${limitStr}`, pad, y);
    }
  } else if (kind === "blog" && item.excerpt) {
    y += unit * 0.06;
    ctx.font = `500 ${Math.round(unit * 0.034)}px system-ui, sans-serif`;
    ctx.fillStyle = "rgba(255,255,255,0.92)";
    const excerptLines = wrapLines(ctx, item.excerpt, W - pad * 2).slice(0, isTall ? 6 : 3);
    excerptLines.forEach((line) => {
      y += unit * 0.048;
      ctx.fillText(line, pad, y);
    });
  } else if (kind === "evaluation") {
    y += unit * 0.07;
    ctx.font = `700 ${Math.round(unit * 0.038)}px system-ui, sans-serif`;
    ctx.fillStyle = "rgba(255,255,255,0.92)";
    ctx.fillText("✅ Corrigé + score instantané", pad, y);
  } else if (kind === "concours") {
    y += unit * 0.07;
    ctx.font = `700 ${Math.round(unit * 0.038)}px system-ui, sans-serif`;
    ctx.fillStyle = "rgba(255,255,255,0.92)";
    ctx.fillText(hasCorrige(item) ? "✅ Corrigé indicatif inclus" : "📄 Énoncé complet disponible", pad, y);
  }

  // Footer, toujours ancré en bas quelle que soit la hauteur du canvas
  // (le format story a beaucoup d'espace vide au-dessus, volontairement).
  const footerY = H - pad - unit * 0.01 - safeBottom;
  ctx.font = `800 ${Math.round(unit * 0.042)}px system-ui, sans-serif`;
  ctx.fillStyle = "#fff";
  ctx.fillText("SaadConcours", pad, footerY - unit * 0.045);
  ctx.font = `500 ${Math.round(unit * 0.028)}px system-ui, sans-serif`;
  ctx.fillStyle = "rgba(255,255,255,0.82)";
  ctx.fillText("saadconcours.space — gratuit, sans compte", pad, footerY);
}
