// Carrousel « extrait » d'un concours, pour Instagram et Facebook :
//   1. l'affiche du studio (master, faculté, année) ;
//   2. l'énoncé, mis en page sur des feuilles blanches lisibles ;
//   3. une dernière image : « cherche sur Google : saadconcours … ».
//
// Le sujet est donné dans le post, le corrigé reste sur le site. Un sujet
// trop long n'est pas découpé en plusieurs posts : on s'arrête proprement au
// début d'un exercice (ou d'une question), et la dernière image renvoie vers
// le site pour la suite du sujet et le corrigé.
//
// Format portrait 1080×1350 pour toutes les images : Instagram recadre tout
// le carrousel au format de la première.

import { formatQCM } from "@/app/_shared/concoursFormat";
import { convertMathSpansToPlainText } from "@/app/_shared/latexPlainText";
import { FONT, FORMATS, drawLogo, drawVisual, fitTitle, normalizeStyle, paintBackground, roundRect, wrap } from "./visual";
import { googleQuery } from "./captions";

export const CAROUSEL_FORMAT = FORMATS.find((f) => f.key === "portrait");
// Pages d'énoncé au maximum : avec l'affiche et l'image Google, 10 images.
export const MAX_EXTRAIT_SLIDES = 8;

const W = 1080;
const H = 1350;
const MARGIN = 48;
const PAPER_Y = 150;
const PAPER_H = H - PAPER_Y - 104;
const PAD = 46;
const TEXT_W = W - 2 * MARGIN - 2 * PAD;
const AVAIL = PAPER_H - 2 * PAD;

const BODY = 31;
const LH = 44;
const INK = "#1f2433";
const HEAD_INK = "#3730a3";
const RULE = "#d6d9e6";

// Début d'une partie : c'est là qu'on peut couper un sujet trop long.
const SECTION_RE = /^(exercice|partie|dossier|[ée]preuve|question|volet|cas|sujet|annexe|section|document|probl[eè]me|th[eè]me|[IVX]{1,4}\s*[.\-–)]|\d{1,3}\s*[.)\-–]\s)/i;

/* ------------------------------ Texte enrichi ------------------------------ */

function cleanInline(s) {
  return convertMathSpansToPlainText(s)
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<\/?[a-z][^>]*>/gi, "")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\\\*/g, "\u0001")
    .replace(/\\([_#|\\])/g, "$1")
    .replace(/[ \t]+/g, " ")
    // « 83 444 634 » ne se coupe jamais en fin de ligne.
    .replace(/(\d) (?=\d{3}(?!\d))/g, "$1 ")
    .trim();
}

// Morceaux de texte avec leur style : **gras**, *italique* ou _italique_.
function runsOf(s) {
  const out = [];
  let bold = false;
  for (const part of cleanInline(s).split("**")) {
    if (part) {
      let last = 0;
      for (const m of part.matchAll(/(^|[\s(«])[*_](?=\S)([^*_\n]+?)(?<=\S)[*_](?=$|[\s).,;:!?»])/g)) {
        const start = m.index + m[1].length;
        if (start > last) out.push({ t: part.slice(last, start), b: bold });
        out.push({ t: m[2], b: bold, i: true });
        last = m.index + m[0].length;
      }
      if (last < part.length) out.push({ t: part.slice(last), b: bold });
    }
    bold = !bold;
  }
  return out.map((r) => ({ ...r, t: r.t.replace(/\u0001/g, "*") }));
}

const plain = (runs) => runs.map((r) => r.t).join("");

function fontFor(r, size, { bold = false, mono = false } = {}) {
  if (mono) return `500 ${size}px Consolas, "Courier New", monospace`;
  return `${r.i ? "italic " : ""}${r.b || bold ? 700 : 400} ${size}px ${FONT}`;
}

// Coupe des morceaux stylés en lignes de largeur `maxW`.
function wrapRuns(ctx, runs, maxW, size, opts) {
  const words = [];
  for (const r of runs) for (const t of r.t.split(/([ \t\n]+)/)) if (t) words.push({ ...r, t: /^[ \t\n]+$/.test(t) ? " " : t });
  const lines = [];
  let line = [];
  let x = 0;
  const push = () => {
    while (line.length && line[line.length - 1].t === " ") x -= line.pop().w;
    lines.push(line);
    line = [];
    x = 0;
  };
  for (const w of words) {
    ctx.font = fontFor(w, size, opts);
    if (w.t === " ") {
      if (line.length) {
        const sw = ctx.measureText(" ").width;
        line.push({ ...w, w: sw });
        x += sw;
      }
      continue;
    }
    let ww = ctx.measureText(w.t).width;
    if (x + ww > maxW && line.length) push();
    // Mot plus large que la ligne (formule, URL) : coupé au caractère.
    let rest = w.t;
    while (ww > maxW && rest.length > 1) {
      let k = rest.length - 1;
      while (k > 1 && ctx.measureText(rest.slice(0, k)).width > maxW - x) k--;
      line.push({ ...w, t: rest.slice(0, k), w: ctx.measureText(rest.slice(0, k)).width });
      push();
      rest = rest.slice(k);
      ctx.font = fontFor(w, size, opts);
      ww = ctx.measureText(rest).width;
    }
    line.push({ ...w, t: rest, w: ww });
    x += ww;
  }
  if (line.length) push();
  return lines.length ? lines : [[]];
}

function drawLine(ctx, line, x, y, size, color, opts) {
  ctx.textBaseline = "top";
  ctx.fillStyle = color;
  for (const w of line) {
    ctx.font = fontFor(w, size, opts);
    ctx.fillText(w.t, x, y);
    x += w.w;
  }
}

/* ------------------------------ Blocs → unités ------------------------------ */
// Une « unité » est une tranche insécable de hauteur connue (une ligne, un
// titre, une ligne de tableau) : la pagination empile les unités page à page.

function parseRow(line) {
  return line.trim().replace(/^\||\|$/g, "").split("|").map((s) => s.trim());
}

function tableUnits(ctx, rows) {
  const cols = Math.max(...rows.map((r) => r.length));
  const size = cols > 7 ? 19 : cols > 5 ? 21 : 24;
  const lh = Math.round(size * 1.3);
  const cellPad = 10;
  const cells = rows.map((r) => Array.from({ length: cols }, (_, c) => runsOf(r[c] || "")));
  // Chaque colonne reçoit au moins la largeur de son mot le plus long (pas de
  // mot coupé), puis la place restante au prorata de sa largeur naturelle.
  const measureCol = (c, fn) =>
    Math.max(
      40,
      ...cells.map((r, i) => {
        ctx.font = fontFor({}, size, { bold: i === 0 });
        return fn(plain(r[c])) + 2 * cellPad + 2;
      })
    );
  const minW = Array.from({ length: cols }, (_, c) => measureCol(c, (s) => Math.max(0, ...s.split(/[ \t\n]+/).map((w) => ctx.measureText(w).width))));
  const natural = Array.from({ length: cols }, (_, c) => Math.max(minW[c], Math.min(TEXT_W * 0.55, measureCol(c, (s) => ctx.measureText(s).width))));
  const minSum = minW.reduce((a, b) => a + b, 0);
  const natSum = natural.reduce((a, b) => a + b, 0);
  const widths =
    minSum >= TEXT_W
      ? minW.map((m) => (m * TEXT_W) / minSum)
      : natSum <= TEXT_W
        ? natural.map((n) => (n * TEXT_W) / natSum)
        : minW.map((m, c) => m + ((natural[c] - m) * (TEXT_W - minSum)) / (natSum - minSum));

  const table = {};
  const units = cells.map((r, i) => {
    const wrapped = r.map((runs, c) => wrapRuns(ctx, runs, widths[c] - 2 * cellPad, size, { bold: i === 0 }));
    const h = Math.max(...wrapped.map((l) => l.length)) * lh + 2 * cellPad - 4;
    return {
      kind: "row",
      table,
      h,
      draw(ctx, x, y) {
        if (i === 0) {
          ctx.fillStyle = "#eef0ff";
          ctx.fillRect(x, y, TEXT_W, h);
        }
        ctx.strokeStyle = RULE;
        ctx.lineWidth = 1.5;
        ctx.strokeRect(x, y, TEXT_W, h);
        let cx = x;
        wrapped.forEach((lines, c) => {
          if (c) {
            ctx.beginPath();
            ctx.moveTo(cx, y);
            ctx.lineTo(cx, y + h);
            ctx.stroke();
          }
          lines.forEach((l, k) => drawLine(ctx, l, cx + cellPad, y + cellPad + k * lh, size, i === 0 ? HEAD_INK : INK, { bold: i === 0 }));
          cx += widths[c];
        });
      },
    };
  });
  table.header = units[0];
  return units;
}

function textUnits(ctx, runs, { indent = 0, marker, size = BODY, lh = LH, color = INK, bold = false, mono = false, quote = false, section = false }) {
  const lines = wrapRuns(ctx, runs, TEXT_W - indent, size, { bold, mono });
  return lines.map((line, k) => ({
    kind: "text",
    sectionStart: section && k === 0,
    h: lh,
    draw(ctx, x, y) {
      if (quote) {
        ctx.fillStyle = "#e3c27a";
        ctx.fillRect(x + 2, y + 2, 5, lh - 4);
      }
      if (marker && k === 0) {
        ctx.font = `700 ${size}px ${FONT}`;
        ctx.fillStyle = HEAD_INK;
        ctx.textBaseline = "top";
        ctx.textAlign = "right";
        ctx.fillText(marker, x + indent - 12, y);
        ctx.textAlign = "left";
      }
      drawLine(ctx, line, x + indent, y + (lh - size) / 2 - 2, size, color, { bold, mono });
    },
  }));
}

function buildUnits(ctx, md) {
  const lines = formatQCM(md || "").split("\n");
  const units = [];
  const gap = (h) => units.push({ kind: "gap", h });
  let inFence = false;

  for (let n = 0; n < lines.length; n++) {
    const raw = lines[n];
    if (/^\s*(```|~~~)/.test(raw)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) {
      units.push(...textUnits(ctx, [{ t: raw }], { size: 24, lh: 32, mono: true }));
      continue;
    }
    if (!raw.trim()) {
      gap(16);
      continue;
    }
    if (/^\s*(-{3,}|\*{3,}|_{3,})\s*$/.test(raw)) {
      units.push({
        kind: "rule",
        h: 28,
        draw(ctx, x, y) {
          ctx.fillStyle = RULE;
          ctx.fillRect(x, y + 13, TEXT_W, 2);
        },
      });
      continue;
    }
    if (/^\s*\|/.test(raw)) {
      const rows = [];
      while (n < lines.length && /^\s*\|/.test(lines[n])) {
        const cells = parseRow(lines[n]);
        if (!/^[\s:|-]*$/.test(cells.join(""))) rows.push(cells);
        n++;
      }
      n--;
      if (rows.length) {
        gap(10);
        units.push(...tableUnits(ctx, rows));
        gap(14);
      }
      continue;
    }
    const h = raw.match(/^\s*(#{1,6})\s+(.*)$/);
    if (h) {
      const depth = h[1].length;
      const size = depth <= 2 ? 36 : depth === 3 ? 33 : 31;
      const lh = Math.round(size * 1.28);
      const wrapped = wrapRuns(ctx, runsOf(h[2]), TEXT_W, size, { bold: true });
      gap(18);
      units.push({
        kind: "heading",
        sectionStart: true,
        h: wrapped.length * lh + 8,
        draw(ctx, x, y) {
          wrapped.forEach((l, k) => drawLine(ctx, l, x, y + k * lh, size, HEAD_INK, { bold: true }));
        },
      });
      continue;
    }
    const li = raw.match(/^(\s*)([-*+]|\d{1,2}[.)])\s+(.*)$/);
    if (li) {
      const depth = Math.min(2, Math.floor(li[1].replace(/\t/g, "  ").length / 2));
      const marker = /^\d/.test(li[2]) ? li[2] : depth ? "◦" : "•";
      // Une question numérotée est aussi un bon endroit pour couper.
      units.push(...textUnits(ctx, runsOf(li[3]), { indent: 40 + depth * 34, marker, section: !depth && /^\d/.test(li[2]) }));
      continue;
    }
    const q = raw.match(/^\s*>\s?(.*)$/);
    if (q) {
      units.push(...textUnits(ctx, runsOf(q[1]), { indent: 24, color: "#7a5a12", quote: true }));
      continue;
    }
    const runs = runsOf(raw);
    units.push(...textUnits(ctx, runs, { section: SECTION_RE.test(plain(runs).trim()) }));
  }
  units.forEach((u, i) => (u.idx = i));
  return units;
}

/* ------------------------------ Pagination ------------------------------ */

function paginate(units) {
  const pages = [];
  let cur = [];
  let used = 0;
  const flush = () => {
    while (cur.length && cur[cur.length - 1].kind === "gap") cur.pop();
    if (cur.length) pages.push(cur);
    cur = [];
    used = 0;
  };
  for (let i = 0; i < units.length; i++) {
    const u = units[i];
    if (u.kind === "gap") {
      if (!cur.length) continue;
      const prev = cur[cur.length - 1];
      if (prev.kind === "gap") {
        if (u.h > prev.h) {
          used += u.h - prev.h;
          cur[cur.length - 1] = u;
        }
        continue;
      }
      if (used + u.h > AVAIL) {
        flush();
        continue;
      }
      cur.push(u);
      used += u.h;
      continue;
    }
    // Un titre ne reste jamais seul en bas de page.
    let need = u.h;
    if (u.kind === "heading") {
      let j = i + 1;
      while (j < units.length && units[j].kind === "gap") j++;
      if (j < units.length) need += units[j].h;
    }
    if (used + need > AVAIL && cur.length) flush();
    // Tableau coupé entre deux pages : on répète l'en-tête.
    if (!cur.length && u.kind === "row" && u.table.header !== u) {
      cur.push(u.table.header);
      used += u.table.header.h;
    }
    cur.push(u);
    used += u.h;
  }
  flush();
  return pages;
}

// Pages d'énoncé du carrousel, et si le sujet a dû être coupé.
export function planExtrait(ctx, md, max = MAX_EXTRAIT_SLIDES) {
  const units = buildUnits(ctx, md);
  const pages = paginate(units);
  if (pages.length <= max) return { pages, truncated: false };

  const lastIdx = Math.max(...pages.slice(0, max).flat().map((u) => u.idx));
  // Coupe au dernier début de partie qui garde au moins 40 % du contenu affiché.
  let cut = -1;
  for (const u of units) if (u.sectionStart && u.idx > lastIdx * 0.4 && u.idx <= lastIdx) cut = u.idx;
  if (cut < 0) {
    cut = lastIdx + 1;
    while (cut > 1 && units[cut - 1].kind === "heading") cut--;
  }
  return { pages: paginate(units.filter((u) => u.idx < cut)).slice(0, max), truncated: true };
}

/* ------------------------------ Dessin ------------------------------ */

function header(ctx, t, label, st) {
  ctx.textBaseline = "middle";
  ctx.textAlign = "left";
  if (st.brand) {
    drawLogo(ctx, MARGIN, 44, 58);
    ctx.fillStyle = t.text;
    ctx.font = `800 30px ${FONT}`;
    ctx.fillText("SaadConcours", MARGIN + 74, 73);
  }
  if (label) {
    ctx.font = `700 26px ${FONT}`;
    const w = ctx.measureText(label).width + 36;
    ctx.fillStyle = t.chip;
    roundRect(ctx, W - MARGIN - w, 50, w, 46, 23);
    ctx.fill();
    ctx.fillStyle = t.text;
    ctx.fillText(label, W - MARGIN - w + 18, 73);
  }
}

function drawExtraitSlide(canvas, { theme: t, st, kicker, page, n, total, footRight }) {
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  paintBackground(ctx, W, H, t, st.pattern);
  header(ctx, t, `${n} / ${total}`, st);

  ctx.font = `600 25px ${FONT}`;
  ctx.fillStyle = t.dim;
  ctx.textBaseline = "middle";
  ctx.fillText(wrap(ctx, kicker, W - 2 * MARGIN, 1)[0] || "", MARGIN, 124);

  ctx.save();
  ctx.shadowColor = "rgba(0,0,0,.28)";
  ctx.shadowBlur = 28;
  ctx.shadowOffsetY = 8;
  ctx.fillStyle = "#ffffff";
  roundRect(ctx, MARGIN, PAPER_Y, W - 2 * MARGIN, PAPER_H, 26);
  ctx.fill();
  ctx.restore();
  if (t.light) {
    ctx.strokeStyle = RULE;
    ctx.lineWidth = 2;
    roundRect(ctx, MARGIN, PAPER_Y, W - 2 * MARGIN, PAPER_H, 26);
    ctx.stroke();
  }

  let y = PAPER_Y + PAD;
  for (const u of page) {
    if (u.draw) u.draw(ctx, MARGIN + PAD, y);
    y += u.h;
  }

  const fy = PAPER_Y + PAPER_H + 52;
  ctx.textBaseline = "middle";
  ctx.font = `600 26px ${FONT}`;
  ctx.fillStyle = t.dim;
  ctx.textAlign = "left";
  if (st.url) ctx.fillText(st.footer || "saadconcours.space", MARGIN, fy);
  ctx.font = `800 28px ${FONT}`;
  ctx.fillStyle = t.light ? t.accent : t.text;
  ctx.textAlign = "right";
  ctx.fillText(footRight, W - MARGIN, fy);
  ctx.textAlign = "left";
}

function drawSearchIcon(ctx, x, y, s, color) {
  ctx.strokeStyle = color;
  ctx.lineWidth = s * 0.14;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.arc(x + s * 0.42, y + s * 0.42, s * 0.3, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x + s * 0.64, y + s * 0.64);
  ctx.lineTo(x + s * 0.92, y + s * 0.92);
  ctx.stroke();
}

function drawGoogleSlide(canvas, { theme: t, st, query, truncated, hasCorrige, n, total }) {
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  paintBackground(ctx, W, H, t, st.pattern);
  header(ctx, t, `${n} / ${total}`, st);
  const pad = 72;
  const maxW = W - 2 * pad;

  let y = 300;
  ctx.font = `700 34px ${FONT}`;
  ctx.fillStyle = t.accent;
  ctx.textBaseline = "top";
  ctx.fillText(truncated ? "Ce n'est que le début…" : "Tu as fini le sujet ?", pad, y);
  y += 70;

  const title = truncated ? (hasCorrige ? "La suite du sujet et le corrigé détaillé" : "La suite du sujet") : hasCorrige ? "Le corrigé détaillé de ce sujet" : "D'autres sujets corrigés";
  const { size, lines } = fitTitle(ctx, title, maxW, 3, 80, 52);
  ctx.fillStyle = t.text;
  for (const l of lines) {
    ctx.font = `800 ${size}px ${FONT}`;
    ctx.fillText(l, pad, y);
    y += size * 1.14;
  }
  y += 26;
  ctx.font = `500 36px ${FONT}`;
  ctx.fillStyle = t.dim;
  ctx.fillText("Gratuit, sur notre site. Cherche sur Google :", pad, y);
  y += 80;

  // Barre de recherche.
  const bh = 124;
  ctx.save();
  ctx.shadowColor = "rgba(0,0,0,.3)";
  ctx.shadowBlur = 30;
  ctx.shadowOffsetY = 8;
  ctx.fillStyle = "#ffffff";
  roundRect(ctx, pad - 12, y, maxW + 24, bh, bh / 2);
  ctx.fill();
  ctx.restore();
  drawSearchIcon(ctx, pad + 22, y + bh / 2 - 24, 48, "#5f6368");
  let qs = 38;
  const qMax = maxW - 110;
  for (; qs > 22; qs -= 2) {
    ctx.font = `700 ${qs}px ${FONT}`;
    if (ctx.measureText(query).width <= qMax) break;
  }
  ctx.fillStyle = "#1a1d27";
  ctx.textBaseline = "middle";
  ctx.fillText(wrap(ctx, query, qMax, 1)[0] || query, pad + 92, y + bh / 2 + 1);
  y += bh + 70;

  ctx.textBaseline = "top";
  ctx.font = `600 34px ${FONT}`;
  ctx.fillStyle = t.text;
  ctx.fillText("ou directement : saadconcours.space", pad, y);
  y += 56;
  ctx.font = `700 34px ${FONT}`;
  ctx.fillStyle = t.accent;
  ctx.fillText("🔗 Lien en bio ou en commentaire", pad, y);

  ctx.font = `600 28px ${FONT}`;
  ctx.fillStyle = t.dim;
  ctx.textBaseline = "alphabetic";
  ctx.fillText("Abonne-toi pour ne rater aucun sujet 🔔", pad, H - 84);
}

/* ------------------------------ Assemblage ------------------------------ */

// Points forts de l'affiche du carrousel, quand l'admin ne les a pas retouchés.
export function carouselBullets(item, { truncated, hasCorrige }) {
  return [truncated ? "Le début du sujet dans ce post" : "Le sujet complet dans ce post", hasCorrige ? "Corrigé détaillé gratuit sur le site" : null, item.difficulte ? `Difficulté : ${item.difficulte}` : null].filter(Boolean);
}

// Construit toutes les images du carrousel. `facts` : textes de l'affiche
// (ceux du studio, retouches comprises) ; `ctaOverride` / `bulletsOverride` :
// bouton et points forts retouchés ; `style` : mise en page (visual.js).
// `createCanvas` : fourni par le script de publication automatique (Node), qui
// n'a pas de `document`.
export function buildCarousel(item, { theme, facts, ctaOverride, bulletsOverride, hasCorrige, style, createCanvas = () => document.createElement("canvas") }) {
  const st = normalizeStyle(style);
  const measure = createCanvas().getContext("2d");
  const { pages, truncated } = planExtrait(measure, item.enonce_md || "", st.maxPages);
  const total = pages.length + 2;
  const kicker = [facts.kicker, item.etablissement].filter(Boolean).join(" · ");

  const cover = createCanvas();
  drawVisual(cover, {
    format: CAROUSEL_FORMAT,
    theme,
    style: st,
    facts: {
      ...facts,
      bullets: bulletsOverride || carouselBullets(item, { truncated, hasCorrige }),
      cta: ctaOverride || "Glisse pour voir le sujet",
    },
  });

  const slides = pages.map((page, k) => {
    const c = createCanvas();
    const last = k === pages.length - 1;
    drawExtraitSlide(c, { theme, st, kicker, page, n: k + 2, total, footRight: !last ? "Suite →" : truncated ? "La suite →" : "Le corrigé →" });
    return c;
  });

  const end = createCanvas();
  drawGoogleSlide(end, { theme, st, query: googleQuery(item), truncated, hasCorrige, n: total, total });

  return { canvases: [cover, ...slides, end], truncated, extraitPages: pages.length };
}
