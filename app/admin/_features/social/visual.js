// Visuel de publication dessiné sur un <canvas>, aux couleurs du site
// (dégradé indigo → violet, cartes arrondies, pastilles).

export const FORMATS = [
  { key: "carre", label: "Carré", hint: "Instagram, Facebook", w: 1080, h: 1080 },
  { key: "portrait", label: "Portrait", hint: "Instagram (4:5)", w: 1080, h: 1350 },
  { key: "story", label: "Story", hint: "Stories, Reels, WhatsApp", w: 1080, h: 1920 },
  { key: "paysage", label: "Paysage", hint: "Facebook, LinkedIn, X", w: 1200, h: 630 },
];

// `light` : fond clair (texte foncé) ; `ink` : texte du bouton d'appel à
// l'action ; `halo` : couleur de la tache lumineuse du fond.
export const THEMES = [
  { key: "brand", label: "Signature", bg: ["#312e81", "#6d28d9"], card: "rgba(255,255,255,0.08)", text: "#ffffff", dim: "rgba(255,255,255,0.78)", accent: "#fbbf24", chip: "rgba(255,255,255,0.14)", ink: "#3730a3", halo: "#a855f7" },
  { key: "nuit", label: "Nuit", bg: ["#0b1020", "#1b2140"], card: "rgba(255,255,255,0.05)", text: "#f8fafc", dim: "rgba(226,232,240,0.75)", accent: "#4f8cff", chip: "rgba(79,140,255,0.18)", ink: "#3730a3", halo: "#a855f7" },
  { key: "clair", label: "Clair", light: true, bg: ["#f5f6f9", "#e8ecff"], card: "#ffffff", text: "#1a1d27", dim: "#5a6072", accent: "#2f6fed", chip: "#dce7ff", ink: "#ffffff", halo: "#a5b4fc" },
  { key: "urgent", label: "Urgent", bg: ["#7f1d1d", "#c2410c"], card: "rgba(255,255,255,0.09)", text: "#ffffff", dim: "rgba(255,255,255,0.82)", accent: "#fde047", chip: "rgba(255,255,255,0.16)", ink: "#b91c1c", halo: "#a855f7" },
  { key: "emeraude", label: "Émeraude", bg: ["#064e3b", "#0f766e"], card: "rgba(255,255,255,0.08)", text: "#ffffff", dim: "rgba(255,255,255,0.8)", accent: "#fde68a", chip: "rgba(255,255,255,0.14)", ink: "#065f46", halo: "#34d399" },
  { key: "ocean", label: "Océan", bg: ["#0c4a6e", "#0284c7"], card: "rgba(255,255,255,0.08)", text: "#ffffff", dim: "rgba(255,255,255,0.8)", accent: "#fbbf24", chip: "rgba(255,255,255,0.15)", ink: "#075985", halo: "#67e8f9" },
  { key: "rose", label: "Framboise", bg: ["#831843", "#db2777"], card: "rgba(255,255,255,0.08)", text: "#ffffff", dim: "rgba(255,255,255,0.82)", accent: "#fde047", chip: "rgba(255,255,255,0.15)", ink: "#9d174d", halo: "#f9a8d4" },
  { key: "noir", label: "Noir & or", bg: ["#0a0a0a", "#27272a"], card: "rgba(255,255,255,0.06)", text: "#fafafa", dim: "rgba(250,250,250,0.72)", accent: "#facc15", chip: "rgba(250,204,21,0.16)", ink: "#18181b", halo: "#facc15" },
];

// Thème « Perso » : ses couleurs sont dans le style (`custom`).
export const CUSTOM_THEME = { key: "perso", label: "Perso" };

export const PATTERNS = [
  { value: "halo", label: "Halo" },
  { value: "points", label: "Points" },
  { value: "grille", label: "Grille" },
  { value: "vagues", label: "Vagues" },
  { value: "uni", label: "Uni" },
];

export const TITLE_SIZES = [
  { value: "s", label: "S", k: 0.84 },
  { value: "m", label: "M", k: 1 },
  { value: "l", label: "L", k: 1.16 },
];

// Réglages de mise en page communs au visuel seul et au carrousel. Ils
// partent aussi avec une publication automatique : le robot dessine alors
// exactement ce que l'aperçu montrait.
export const DEFAULT_STYLE = {
  pattern: "halo",
  align: "left",
  titleSize: "m",
  brand: true, // logo + « SaadConcours »
  url: true, // adresse en pied de visuel
  bullets: true, // points forts cochés
  watermark: true, // grand emoji en filigrane
  emoji: "", // filigrane personnalisé
  badge: "", // pastille en coin (« NOUVEAU », « GRATUIT »…)
  footer: "", // texte du pied, à la place de l'adresse du site
  maxPages: 8, // pages d'énoncé au maximum dans un carrousel
  custom: { bg0: "#1e3a8a", bg1: "#7c3aed", accent: "#fbbf24" },
};

const HEX = /^#[0-9a-f]{6}$/i;
const oneOf = (v, list, def) => (list.includes(v) ? v : def);
const short = (v, n) => (typeof v === "string" ? v.slice(0, n) : "");

// Style complet et sûr à partir de n'importe quoi (stockage, requête).
export function normalizeStyle(s) {
  const d = DEFAULT_STYLE;
  const src = s && typeof s === "object" ? s : {};
  const bool = (k) => (typeof src[k] === "boolean" ? src[k] : d[k]);
  const c = src.custom || {};
  return {
    pattern: oneOf(src.pattern, PATTERNS.map((p) => p.value), d.pattern),
    align: oneOf(src.align, ["left", "center"], d.align),
    titleSize: oneOf(src.titleSize, TITLE_SIZES.map((t) => t.value), d.titleSize),
    brand: bool("brand"),
    url: bool("url"),
    bullets: bool("bullets"),
    watermark: bool("watermark"),
    emoji: short(src.emoji, 8),
    badge: short(src.badge, 24),
    footer: short(src.footer, 40),
    maxPages: Math.max(1, Math.min(8, Math.round(Number(src.maxPages) || d.maxPages))),
    custom: {
      bg0: HEX.test(c.bg0) ? c.bg0 : d.custom.bg0,
      bg1: HEX.test(c.bg1) ? c.bg1 : d.custom.bg1,
      accent: HEX.test(c.accent) ? c.accent : d.custom.accent,
    },
  };
}

// Seulement ce qui diffère du style par défaut : c'est ce qu'on stocke.
export function styleDiff(s) {
  const n = normalizeStyle(s);
  const out = {};
  for (const [k, v] of Object.entries(n)) if (JSON.stringify(v) !== JSON.stringify(DEFAULT_STYLE[k])) out[k] = v;
  return out;
}

function rgb(hex) {
  const n = parseInt(String(hex).slice(1), 16) || 0;
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
export function luminance(hex) {
  const [r, g, b] = rgb(hex).map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
const rgba = (hex, a) => `rgba(${rgb(hex).join(",")},${a})`;

// Couleurs du thème « Perso » : le texte passe en foncé si le fond est clair.
export function customTheme({ bg0, bg1, accent } = DEFAULT_STYLE.custom) {
  const light = (luminance(bg0) + luminance(bg1)) / 2 > 0.4;
  return {
    key: "perso",
    label: "Perso",
    light,
    bg: [bg0, bg1],
    card: light ? "#ffffff" : "rgba(255,255,255,0.08)",
    text: light ? "#14161f" : "#ffffff",
    dim: light ? "rgba(20,22,31,0.72)" : "rgba(255,255,255,0.8)",
    accent,
    chip: light ? rgba(accent, 0.2) : "rgba(255,255,255,0.15)",
    ink: light ? "#ffffff" : bg0,
    halo: light ? "#ffffff" : bg1,
  };
}

export function resolveTheme(key, style) {
  if (key === CUSTOM_THEME.key) return customTheme(normalizeStyle(style).custom);
  return THEMES.find((t) => t.key === key) || THEMES[0];
}

export const FONT = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Segoe UI Emoji", "Noto Color Emoji"`;

export function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

export function wrap(ctx, text, maxWidth, maxLines) {
  const words = String(text || "").split(/\s+/).filter(Boolean);
  const lines = [];
  let line = "";
  for (const w of words) {
    const test = line ? `${line} ${w}` : w;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = w;
      if (lines.length === maxLines) break;
    } else line = test;
  }
  if (lines.length < maxLines && line) lines.push(line);
  if (lines.length === maxLines && words.join(" ").length > lines.join(" ").length) {
    let last = lines[maxLines - 1];
    while (ctx.measureText(last + "…").width > maxWidth && last.length > 1) last = last.slice(0, -1);
    lines[maxLines - 1] = last.replace(/\s+\S*$/, "") + "…";
  }
  return lines;
}

// Ajuste la taille du titre pour qu'il tienne dans `maxLines` lignes.
export function fitTitle(ctx, text, maxWidth, maxLines, start, min) {
  let size = start;
  for (; size > min; size -= 4) {
    ctx.font = `800 ${size}px ${FONT}`;
    const lines = wrap(ctx, text, maxWidth, maxLines + 1);
    if (lines.length <= maxLines) return { size, lines };
  }
  ctx.font = `800 ${min}px ${FONT}`;
  return { size: min, lines: wrap(ctx, text, maxWidth, maxLines) };
}

export function drawLogo(ctx, x, y, s) {
  const g = ctx.createLinearGradient(x, y, x + s, y + s);
  g.addColorStop(0, "#4f46e5");
  g.addColorStop(1, "#a855f7");
  ctx.fillStyle = g;
  roundRect(ctx, x, y, s, s, s * 0.25);
  ctx.fill();
  const k = s / 64;
  ctx.fillStyle = "#fff";
  ctx.beginPath();
  ctx.moveTo(x + 32 * k, y + 13 * k);
  ctx.lineTo(x + 49 * k, y + 21 * k);
  ctx.lineTo(x + 32 * k, y + 29 * k);
  ctx.lineTo(x + 15 * k, y + 21 * k);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(x + 32 * k, y + 42 * k);
  ctx.lineTo(x + 13 * k, y + 37 * k);
  ctx.lineTo(x + 13 * k, y + 48 * k);
  ctx.lineTo(x + 32 * k, y + 54 * k);
  ctx.moveTo(x + 32 * k, y + 42 * k);
  ctx.lineTo(x + 51 * k, y + 37 * k);
  ctx.lineTo(x + 51 * k, y + 48 * k);
  ctx.lineTo(x + 32 * k, y + 54 * k);
  ctx.fill();
  ctx.fillStyle = "#fbbf24";
  ctx.beginPath();
  ctx.arc(x + 51 * k, y + 32.5 * k, 2.4 * k, 0, Math.PI * 2);
  ctx.fill();
}

// Dégradé du thème + motif décoratif : le fond commun à tous les visuels.
export function paintBackground(ctx, w, h, t, pattern = "halo") {
  const bg = ctx.createLinearGradient(0, 0, w, h);
  bg.addColorStop(0, t.bg[0]);
  bg.addColorStop(1, t.bg[1]);
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);
  if (pattern === "uni") return;

  ctx.save();
  ctx.globalAlpha = t.light ? 0.35 : 0.22;
  const halo = ctx.createRadialGradient(w * 0.9, h * 0.1, 10, w * 0.9, h * 0.1, w * 0.6);
  halo.addColorStop(0, t.halo || "#a855f7");
  halo.addColorStop(1, "transparent");
  ctx.fillStyle = halo;
  ctx.fillRect(0, 0, w, h);
  ctx.restore();

  const ink = t.light ? "#1a1d27" : "#ffffff";
  ctx.save();
  if (pattern === "points") {
    ctx.fillStyle = ink;
    ctx.globalAlpha = 0.09;
    const step = 44;
    for (let y = step / 2; y < h; y += step)
      for (let x = step / 2; x < w; x += step) {
        ctx.beginPath();
        ctx.arc(x, y, 2.6, 0, Math.PI * 2);
        ctx.fill();
      }
  } else if (pattern === "grille") {
    ctx.strokeStyle = ink;
    ctx.globalAlpha = 0.07;
    ctx.lineWidth = 1.5;
    const step = 72;
    ctx.beginPath();
    for (let x = step; x < w; x += step) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
    }
    for (let y = step; y < h; y += step) {
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
    }
    ctx.stroke();
  } else if (pattern === "vagues") {
    ctx.fillStyle = ink;
    for (let k = 0; k < 3; k++) {
      ctx.globalAlpha = 0.05 + k * 0.015;
      const base = h * (0.8 + k * 0.065);
      const amp = h * 0.028;
      ctx.beginPath();
      ctx.moveTo(0, h);
      for (let x = 0; x <= w; x += 12) ctx.lineTo(x, base + Math.sin((x / w) * Math.PI * 2 + k * 1.3) * amp);
      ctx.lineTo(w, h);
      ctx.closePath();
      ctx.fill();
    }
  }
  ctx.restore();
}

// Photo choisie par l'admin, recadrée pour couvrir tout le visuel, puis voilée
// aux couleurs du thème pour que le texte reste lisible.
function paintPhoto(ctx, w, h, img, t) {
  const r = Math.max(w / img.width, h / img.height);
  const iw = img.width * r;
  const ih = img.height * r;
  ctx.drawImage(img, (w - iw) / 2, (h - ih) / 2, iw, ih);
  const veil = ctx.createLinearGradient(0, 0, 0, h);
  veil.addColorStop(0, rgba(t.bg[0], t.light ? 0.78 : 0.7));
  veil.addColorStop(1, rgba(t.bg[1], t.light ? 0.92 : 0.9));
  ctx.fillStyle = veil;
  ctx.fillRect(0, 0, w, h);
}

// Pastille en coin (« NOUVEAU », « GRATUIT »…), centrée sur la hauteur `cy`.
export function drawBadge(ctx, t, text, right, cy, scale = 1) {
  if (!text) return;
  ctx.save();
  ctx.font = `800 ${26 * scale}px ${FONT}`;
  const bw = ctx.measureText(text).width + 40 * scale;
  const bh = 50 * scale;
  ctx.fillStyle = t.accent;
  roundRect(ctx, right - bw, cy - bh / 2, bw, bh, bh / 2);
  ctx.fill();
  ctx.fillStyle = luminance(HEX.test(t.accent) ? t.accent : "#fbbf24") > 0.4 ? "#14161f" : "#ffffff";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.fillText(text, right - bw / 2, cy + 1);
  ctx.restore();
}

// Coche tracée à la main : le glyphe « ✓ » manque dans certaines polices et
// sortait en carré vide sur les visuels publiés.
function drawCheck(ctx, x, y, scale, color) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 5 * scale;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.moveTo(x + 2 * scale, y + 19 * scale);
  ctx.lineTo(x + 12 * scale, y + 29 * scale);
  ctx.lineTo(x + 30 * scale, y + 9 * scale);
  ctx.stroke();
  ctx.restore();
}

export function drawVisual(canvas, { format, theme, facts, cover, style, photo }) {
  const st = normalizeStyle(style);
  const { w, h } = format;
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  const t = theme;
  const land = w > h;
  const pad = land ? 64 : 84;
  const scale = land ? 0.8 : h > 1500 ? 1.15 : 1;
  const center = st.align === "center" && !(cover && land);
  const k = TITLE_SIZES.find((x) => x.value === st.titleSize)?.k || 1;

  paintBackground(ctx, w, h, t, st.pattern);
  if (photo) paintPhoto(ctx, w, h, photo, t);

  // Grand emoji en filigrane.
  if (st.watermark) {
    ctx.save();
    ctx.globalAlpha = 0.12;
    ctx.font = `${Math.round(h * 0.34)}px ${FONT}`;
    ctx.textAlign = "right";
    ctx.textBaseline = "bottom";
    ctx.translate(w - pad * 0.4, h - pad * 0.2);
    ctx.rotate(-0.14);
    ctx.fillText(st.emoji || facts.emoji || "🎓", 0, 0);
    ctx.restore();
  }

  // En-tête : logo + marque, pastille en coin.
  const logo = 64 * scale;
  if (st.brand) {
    ctx.font = `800 ${34 * scale}px ${FONT}`;
    const bw = logo + 18 + ctx.measureText("SaadConcours").width;
    const bx = center && !st.badge ? (w - bw) / 2 : pad;
    drawLogo(ctx, bx, pad, logo);
    ctx.fillStyle = t.text;
    ctx.textBaseline = "middle";
    ctx.textAlign = "left";
    ctx.fillText("SaadConcours", bx + logo + 18, pad + logo / 2);
  }
  drawBadge(ctx, t, st.badge, w - pad, pad + logo / 2, scale);

  // Couverture de cahier (boutique) : à droite en paysage, en bas sinon.
  let contentRight = w - pad;
  if (cover && land) {
    const ch = h - pad * 2;
    const cw = ch * 0.75;
    ctx.save();
    ctx.shadowColor = "rgba(0,0,0,.35)";
    ctx.shadowBlur = 30;
    roundRect(ctx, w - pad - cw, pad, cw, ch, 18);
    ctx.clip();
    ctx.drawImage(cover, w - pad - cw, pad, cw, ch);
    ctx.restore();
    contentRight = w - pad - cw - 40;
  }

  let y = (st.brand || st.badge ? pad + logo : pad) + (land ? 44 : 90) * scale;
  const maxW = contentRight - pad;
  const xFor = (width) => (center ? pad + (maxW - width) / 2 : pad);

  // Sur-titre en pastille.
  if (facts.kicker) {
    ctx.font = `700 ${28 * scale}px ${FONT}`;
    const kw = Math.min(maxW, ctx.measureText(facts.kicker).width + 44);
    const kx = xFor(kw);
    ctx.fillStyle = t.chip;
    roundRect(ctx, kx, y, kw, 54 * scale, 27 * scale);
    ctx.fill();
    ctx.fillStyle = t.light ? t.accent : t.text;
    ctx.textBaseline = "middle";
    ctx.textAlign = "left";
    ctx.fillText(wrap(ctx, facts.kicker, kw - 40, 1)[0] || "", kx + 22, y + 27 * scale);
    y += 54 * scale + 34 * scale;
  }

  // Titre.
  const titleLines = land ? 3 : 4;
  const { size, lines } = fitTitle(ctx, facts.title, maxW, titleLines, Math.round((land ? 64 : 84) * (h > 1500 ? 1.1 : 1) * k), Math.round(40 * k));
  ctx.fillStyle = t.text;
  ctx.textBaseline = "top";
  ctx.textAlign = "left";
  for (const l of lines) {
    ctx.font = `800 ${size}px ${FONT}`;
    ctx.fillText(l, xFor(ctx.measureText(l).width), y);
    y += size * 1.14;
  }

  // Sous-titre.
  if (facts.subtitle) {
    y += 14 * scale;
    ctx.font = `500 ${34 * scale}px ${FONT}`;
    ctx.fillStyle = t.dim;
    for (const l of wrap(ctx, facts.subtitle, maxW, land ? 2 : 3)) {
      ctx.fillText(l, xFor(ctx.measureText(l).width), y);
      y += 44 * scale;
    }
  }

  // Points forts.
  const bullets = st.bullets ? (facts.bullets || []).filter(Boolean).slice(0, land ? 2 : 4) : [];
  if (bullets.length && !land) {
    y += 30 * scale;
    ctx.font = `600 ${31 * scale}px ${FONT}`;
    const texts = bullets.map((b) => wrap(ctx, b, maxW - 50, 1)[0] || "");
    // Centré : la liste forme un bloc, coches alignées.
    const x = xFor(48 * scale + Math.max(...texts.map((s) => ctx.measureText(s).width)));
    for (const text of texts) {
      drawCheck(ctx, x, y, scale, t.accent);
      ctx.fillStyle = t.text;
      ctx.fillText(text, x + 48 * scale, y);
      y += 50 * scale;
    }
  }

  // Couverture en format vertical.
  if (cover && !land) {
    const room = h - pad - 150 * scale - y;
    if (room > 240) {
      const chh = Math.min(room - 30, h * 0.36);
      const cww = chh * 0.75;
      const cx = xFor(cww);
      ctx.save();
      ctx.shadowColor = "rgba(0,0,0,.35)";
      ctx.shadowBlur = 30;
      roundRect(ctx, cx, y + 20, cww, chh, 18);
      ctx.clip();
      ctx.drawImage(cover, cx, y + 20, cww, chh);
      ctx.restore();
    }
  }

  // Bouton d'appel à l'action + adresse.
  const bh = 86 * scale;
  const by = h - pad - bh - (center && st.url ? 40 * scale : 0);
  if (facts.cta) {
    ctx.font = `800 ${32 * scale}px ${FONT}`;
    const label = `${facts.cta}  →`;
    const bw = Math.min(maxW, ctx.measureText(label).width + 70);
    const bx = xFor(bw);
    const g = ctx.createLinearGradient(bx, by, bx + bw, by + bh);
    if (t.light) {
      g.addColorStop(0, t.accent);
      g.addColorStop(1, t.key === "clair" ? "#7c5cff" : t.accent);
    } else {
      g.addColorStop(0, "#ffffff");
      g.addColorStop(1, "#eef0ff");
    }
    ctx.fillStyle = g;
    roundRect(ctx, bx, by, bw, bh, bh / 2);
    ctx.fill();
    ctx.fillStyle = t.ink || "#3730a3";
    ctx.textBaseline = "middle";
    ctx.textAlign = "left";
    ctx.fillText(wrap(ctx, label, bw - 60, 1)[0] || "", bx + 35, by + bh / 2);
  }
  if (st.url && !(cover && land)) {
    ctx.font = `600 ${26 * scale}px ${FONT}`;
    ctx.fillStyle = t.dim;
    ctx.textAlign = center ? "center" : "right";
    ctx.textBaseline = "alphabetic";
    ctx.fillText(st.footer || "saadconcours.space", center ? w / 2 : w - pad, h - pad * 0.55);
  }
  ctx.textAlign = "left";
}

export function loadImage(src) {
  return new Promise((resolve) => {
    if (!src) return resolve(null);
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

export function canvasBlob(canvas) {
  return new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
}
