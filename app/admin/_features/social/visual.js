// Visuel de publication dessiné sur un <canvas>, aux couleurs du site
// (dégradé indigo → violet, cartes arrondies, pastilles).

export const FORMATS = [
  { key: "carre", label: "Carré", hint: "Instagram, Facebook", w: 1080, h: 1080 },
  { key: "portrait", label: "Portrait", hint: "Instagram (4:5)", w: 1080, h: 1350 },
  { key: "story", label: "Story", hint: "Stories, Reels, WhatsApp", w: 1080, h: 1920 },
  { key: "paysage", label: "Paysage", hint: "Facebook, LinkedIn, X", w: 1200, h: 630 },
];

export const THEMES = [
  { key: "brand", label: "Signature", bg: ["#312e81", "#6d28d9"], card: "rgba(255,255,255,0.08)", text: "#ffffff", dim: "rgba(255,255,255,0.78)", accent: "#fbbf24", chip: "rgba(255,255,255,0.14)" },
  { key: "nuit", label: "Nuit", bg: ["#0b1020", "#1b2140"], card: "rgba(255,255,255,0.05)", text: "#f8fafc", dim: "rgba(226,232,240,0.75)", accent: "#4f8cff", chip: "rgba(79,140,255,0.18)" },
  { key: "clair", label: "Clair", bg: ["#f5f6f9", "#e8ecff"], card: "#ffffff", text: "#1a1d27", dim: "#5a6072", accent: "#2f6fed", chip: "#dce7ff" },
  { key: "urgent", label: "Urgent", bg: ["#7f1d1d", "#c2410c"], card: "rgba(255,255,255,0.09)", text: "#ffffff", dim: "rgba(255,255,255,0.82)", accent: "#fde047", chip: "rgba(255,255,255,0.16)" },
];

const FONT = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`;

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function wrap(ctx, text, maxWidth, maxLines) {
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
function fitTitle(ctx, text, maxWidth, maxLines, start, min) {
  let size = start;
  for (; size > min; size -= 4) {
    ctx.font = `800 ${size}px ${FONT}`;
    const lines = wrap(ctx, text, maxWidth, maxLines + 1);
    if (lines.length <= maxLines) return { size, lines };
  }
  ctx.font = `800 ${min}px ${FONT}`;
  return { size: min, lines: wrap(ctx, text, maxWidth, maxLines) };
}

function drawLogo(ctx, x, y, s) {
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

export function drawVisual(canvas, { format, theme, facts, cover }) {
  const { w, h } = format;
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  const t = theme;
  const land = w > h;
  const pad = land ? 64 : 84;
  const scale = land ? 0.8 : h > 1500 ? 1.15 : 1;

  const bg = ctx.createLinearGradient(0, 0, w, h);
  bg.addColorStop(0, t.bg[0]);
  bg.addColorStop(1, t.bg[1]);
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);

  // Halos décoratifs.
  ctx.globalAlpha = t.key === "clair" ? 0.35 : 0.22;
  const halo = ctx.createRadialGradient(w * 0.9, h * 0.1, 10, w * 0.9, h * 0.1, w * 0.6);
  halo.addColorStop(0, t.key === "clair" ? "#a5b4fc" : "#a855f7");
  halo.addColorStop(1, "transparent");
  ctx.fillStyle = halo;
  ctx.fillRect(0, 0, w, h);
  ctx.globalAlpha = 1;

  // Grand emoji en filigrane.
  ctx.save();
  ctx.globalAlpha = 0.12;
  ctx.font = `${Math.round(h * 0.34)}px ${FONT}`;
  ctx.textAlign = "right";
  ctx.textBaseline = "bottom";
  ctx.translate(w - pad * 0.4, h - pad * 0.2);
  ctx.rotate(-0.14);
  ctx.fillText(facts.emoji || "🎓", 0, 0);
  ctx.restore();

  // En-tête : logo + marque.
  const logo = 64 * scale;
  drawLogo(ctx, pad, pad, logo);
  ctx.fillStyle = t.text;
  ctx.font = `800 ${34 * scale}px ${FONT}`;
  ctx.textBaseline = "middle";
  ctx.textAlign = "left";
  ctx.fillText("SaadConcours", pad + logo + 18, pad + logo / 2);

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

  let y = pad + logo + (land ? 44 : 90) * scale;
  const maxW = contentRight - pad;

  // Sur-titre en pastille.
  if (facts.kicker) {
    ctx.font = `700 ${28 * scale}px ${FONT}`;
    const kw = Math.min(maxW, ctx.measureText(facts.kicker).width + 44);
    ctx.fillStyle = t.chip;
    roundRect(ctx, pad, y, kw, 54 * scale, 27 * scale);
    ctx.fill();
    ctx.fillStyle = t.key === "clair" ? t.accent : t.text;
    ctx.textBaseline = "middle";
    ctx.fillText(wrap(ctx, facts.kicker, kw - 40, 1)[0] || "", pad + 22, y + 27 * scale);
    y += 54 * scale + 34 * scale;
  }

  // Titre.
  const titleLines = land ? 3 : 4;
  const { size, lines } = fitTitle(ctx, facts.title, maxW, titleLines, Math.round((land ? 64 : 84) * (h > 1500 ? 1.1 : 1)), 40);
  ctx.fillStyle = t.text;
  ctx.textBaseline = "top";
  for (const l of lines) {
    ctx.font = `800 ${size}px ${FONT}`;
    ctx.fillText(l, pad, y);
    y += size * 1.14;
  }

  // Sous-titre.
  if (facts.subtitle) {
    y += 14 * scale;
    ctx.font = `500 ${34 * scale}px ${FONT}`;
    ctx.fillStyle = t.dim;
    for (const l of wrap(ctx, facts.subtitle, maxW, land ? 2 : 3)) {
      ctx.fillText(l, pad, y);
      y += 44 * scale;
    }
  }

  // Points forts.
  const bullets = (facts.bullets || []).slice(0, land ? 2 : 4);
  if (bullets.length && !land) {
    y += 30 * scale;
    for (const b of bullets) {
      ctx.font = `600 ${31 * scale}px ${FONT}`;
      ctx.fillStyle = t.accent;
      ctx.fillText("✓", pad, y);
      ctx.fillStyle = t.text;
      ctx.fillText(wrap(ctx, b, maxW - 50, 1)[0] || "", pad + 48 * scale, y);
      y += 50 * scale;
    }
  }

  // Couverture en format vertical.
  if (cover && !land) {
    const room = h - pad - 150 * scale - y;
    if (room > 240) {
      const chh = Math.min(room - 30, h * 0.36);
      const cww = chh * 0.75;
      ctx.save();
      ctx.shadowColor = "rgba(0,0,0,.35)";
      ctx.shadowBlur = 30;
      roundRect(ctx, pad, y + 20, cww, chh, 18);
      ctx.clip();
      ctx.drawImage(cover, pad, y + 20, cww, chh);
      ctx.restore();
    }
  }

  // Bouton d'appel à l'action + adresse.
  const bh = 86 * scale;
  const by = h - pad - bh;
  if (facts.cta) {
    ctx.font = `800 ${32 * scale}px ${FONT}`;
    const label = `${facts.cta}  →`;
    const bw = Math.min(maxW, ctx.measureText(label).width + 70);
    const g = ctx.createLinearGradient(pad, by, pad + bw, by + bh);
    if (t.key === "clair") {
      g.addColorStop(0, "#2f6fed");
      g.addColorStop(1, "#7c5cff");
    } else {
      g.addColorStop(0, "#ffffff");
      g.addColorStop(1, "#eef0ff");
    }
    ctx.fillStyle = g;
    roundRect(ctx, pad, by, bw, bh, bh / 2);
    ctx.fill();
    ctx.fillStyle = t.key === "clair" ? "#ffffff" : t.key === "urgent" ? "#b91c1c" : "#3730a3";
    ctx.textBaseline = "middle";
    ctx.fillText(wrap(ctx, label, bw - 60, 1)[0] || "", pad + 35, by + bh / 2);
  }
  ctx.font = `600 ${26 * scale}px ${FONT}`;
  ctx.fillStyle = t.dim;
  ctx.textAlign = "right";
  ctx.textBaseline = "alphabetic";
  if (!(cover && land)) ctx.fillText("saadconcours.space", w - pad, h - pad * 0.55);
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
