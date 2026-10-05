"use client";

// The Quran verse the admin's PDF studio can put at the top of every
// generated PDF — one verse per document, drawn at random from the themes
// chosen in the studio (quranVerses.js), in Arabic only, followed by the
// surah name and verse number.
//
// jsPDF's built-in fonts only encode CP1252 (see sanitizePdfText), so Arabic
// can't go through doc.text() at all — and embedding a TTF wouldn't be
// enough either: jsPDF does no contextual shaping and no mark positioning,
// which a fully vowelled verse can't do without. The browser does both, so it
// typesets the verse on a canvas in a Quranic font (Amiri Quran) and the PDF
// receives that canvas as a ~300 dpi image: exact letterforms and tashkeel,
// at the cost of the verse not being selectable text.

import { tintRgb } from "./pdfTheme";
import { pickVerse, verseReference } from "./quranVerses";

const FONT_FAMILY = "SC Amiri Quran";
const FONT_URL = "https://cdn.jsdelivr.net/npm/@fontsource/amiri-quran@5.3.0/files/amiri-quran-arabic-400-normal.woff2";
// If the web font can't be fetched, the system's own Arabic font still
// shapes the verse correctly — just less elegantly.
const FONT_STACK = `"${FONT_FAMILY}", "Amiri Quran", "Amiri", "Traditional Arabic", "Noto Naskh Arabic", "Geeza Pro", serif`;
const PX_PER_MM = 12; // ≈ 305 dpi once placed in the PDF
const PT_TO_MM = 25.4 / 72;
// Waqf signs (ۖ ۗ ۚ …) stand as their own space-separated token in this
// text: each is kept glued to the word before it so a line never starts
// with one.
const MARK_ONLY_RE = /^[ۖ-ۭ]+$/;
// Right-to-left mark around each line: without it, a browser that ignores
// ctx.direction would resolve the ornate brackets at the line ends as
// left-to-right and draw them on the wrong side.
const RLM = "‏";

let fontLoad = null;
function ensureQuranFont() {
  if (!fontLoad) {
    fontLoad = (async () => {
      const face = new FontFace(FONT_FAMILY, `url(${FONT_URL}) format("woff2")`);
      await face.load();
      document.fonts.add(face);
    })().catch(() => {
      fontLoad = null; // try again on the next PDF; this one uses the fallback font
    });
  }
  return fontLoad;
}

function verseTokens(text) {
  const out = [];
  for (const word of String(text).split(/\s+/).filter(Boolean)) {
    if (MARK_ONLY_RE.test(word) && out.length) out[out.length - 1] += ` ${word}`;
    else out.push(word);
  }
  return out;
}

function wrapWords(ctx, words, maxW) {
  const lines = [];
  let line = "";
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (line && ctx.measureText(next).width > maxW) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

// Same number of lines as a greedy wrap, but at the narrowest width that
// still allows it — a centered verse then reads as a balanced block instead
// of one full line followed by a lone word.
function balancedWrap(ctx, words, maxW) {
  const greedy = wrapWords(ctx, words, maxW);
  if (greedy.length < 2) return greedy;
  let lo = maxW / greedy.length;
  let hi = maxW;
  for (let i = 0; i < 14; i++) {
    const mid = (lo + hi) / 2;
    if (wrapWords(ctx, words, mid).length > greedy.length) lo = mid;
    else hi = mid;
  }
  return wrapWords(ctx, words, hi);
}

const css = (rgb) => `rgb(${rgb.join(",")})`;

function renderVerseImage(verse, { widthMm, sizePt, textColor, accentColor }) {
  const fontPx = sizePt * PT_TO_MM * PX_PER_MM;
  const refPx = fontPx * 0.6;
  const verseFont = `${fontPx}px ${FONT_STACK}`;
  const refFont = `${refPx}px ${FONT_STACK}`;
  const canvas = document.createElement("canvas");
  const maxW = Math.ceil(widthMm * PX_PER_MM);

  const setup = (ctx) => {
    ctx.direction = "rtl";
    ctx.textAlign = "center";
    ctx.textBaseline = "alphabetic";
    ctx.font = verseFont;
    return ctx;
  };

  // Measure first (the canvas has to be sized before drawing, and resizing
  // it resets the context).
  let ctx = setup(canvas.getContext("2d"));
  const words = verseTokens(verse.text);
  words[0] = `﴿${words[0]}`;
  words[words.length - 1] = `${words[words.length - 1]}﴾`;
  const lines = balancedWrap(ctx, words, maxW).map((l) => `${RLM}${l}${RLM}`);
  const reference = `${RLM}${verseReference(verse)}${RLM}`;

  // Line pitch from the real ink, not a fixed ratio: Amiri sets the waqf
  // signs (ۖ ۚ …) high above the gap between two words, the way a mushaf
  // does, and a fixed line height cut them off the top of the first line.
  // The tallest/deepest line sets the pitch for all of them, so the block
  // stays evenly spaced. The floors cover browsers without ink metrics.
  const ink = (text, size) => {
    const m = ctx.measureText(text);
    return {
      w: m.width,
      asc: Math.max(m.actualBoundingBoxAscent || 0, size * 0.95),
      desc: Math.max(m.actualBoundingBoxDescent || 0, size * 0.45),
    };
  };
  const verseInk = lines.map((l) => ink(l, fontPx));
  ctx.font = refFont;
  const refInk = ink(reference, refPx);
  const asc = Math.max(...verseInk.map((m) => m.asc));
  const desc = Math.max(...verseInk.map((m) => m.desc));
  const pitch = asc + desc + fontPx * 0.2;
  const pad = fontPx * 0.12;
  const refBaseline = pad + asc + (lines.length - 1) * pitch + desc + fontPx * 0.3 + refInk.asc;

  // Cropped to the text itself (plus room for the overhanging marks): every
  // pixel ends up in the PDF.
  const width = Math.min(maxW, Math.ceil(Math.max(...verseInk.map((m) => m.w), refInk.w) + fontPx * 0.6));
  canvas.width = width;
  canvas.height = Math.ceil(refBaseline + refInk.desc + pad);

  ctx = setup(canvas.getContext("2d"));
  const cx = width / 2;
  ctx.fillStyle = css(textColor);
  lines.forEach((line, i) => ctx.fillText(line, cx, pad + asc + i * pitch));
  ctx.font = refFont;
  ctx.fillStyle = css(accentColor);
  ctx.fillText(reference, cx, refBaseline);

  return { dataUrl: canvas.toDataURL("image/png"), wMm: canvas.width / PX_PER_MM, hMm: canvas.height / PX_PER_MM };
}

// Draws the verse block at the top of the first content page and returns the
// baseline the document's own first line should use instead of `y`. Called
// by each builder right after the (optional) cover page. Any failure just
// leaves the verse out — it must never cost the visitor their PDF.
export async function drawPdfVerse(doc, branding, y) {
  const opts = branding.verse;
  if (!opts?.enabled || typeof document === "undefined") return y;
  const verse = opts.pinned || pickVerse(opts.themes);
  if (!verse) return y;

  try {
    await ensureQuranFont();
    const pageW = doc.internal.pageSize.getWidth();
    const marginX = branding.marginX ?? 18;
    const accent = branding.accentColor;
    const boxW = pageW - marginX * 2;
    const padX = opts.boxed ? 10 : 0;
    const padY = opts.boxed ? 2.5 : 0;
    const img = renderVerseImage(verse, {
      widthMm: boxW - padX * 2,
      sizePt: opts.size,
      textColor: branding.textColor,
      accentColor: accent,
    });

    // `y` is the first text baseline of the page; the block's top edge sits
    // a few mm above it, i.e. just under the running header.
    const top = y - 4;
    const boxH = img.hMm + padY * 2;
    if (opts.boxed) {
      doc.setFillColor(...tintRgb(accent, 0.06));
      doc.setDrawColor(...tintRgb(accent, 0.3));
      doc.setLineWidth(0.3);
      doc.roundedRect(marginX, top, boxW, boxH, 3, 3, "FD");
    }
    // "FAST" = flate-compressed: jsPDF otherwise stores a transparent PNG's
    // pixels raw, which made a 20 KB PDF weigh 1.5 MB.
    doc.addImage(img.dataUrl, "PNG", (pageW - img.wMm) / 2, top + padY, img.wMm, img.hMm, undefined, "FAST");

    let bottom = top + boxH;
    if (!opts.boxed) {
      // Without the box, a short accent rule sets the verse apart from the
      // document below it.
      doc.setDrawColor(...accent);
      doc.setLineWidth(0.4);
      doc.line(pageW / 2 - 15, bottom + 1, pageW / 2 + 15, bottom + 1);
      bottom += 1;
    }
    return bottom + 11;
  } catch {
    return y;
  }
}
