"use client";

// Builds and downloads the fiche-de-cours PDF as real, selectable/copyable
// text — not a rasterized screenshot. An earlier version snapshotted the
// *entire* on-page KaTeX rendering with html2canvas: it looked right but
// every letter was a pixel, so nothing in the PDF could be copied or
// searched. This version parses the markdown with the same `marked`
// tokenizer the live page uses and draws headings/paragraphs/lists/tables
// as native jsPDF text (correct bold/italic per run, not just stripped).
//
// LaTeX ($...$ / $$...$$) gets the same "readable plain text" fallback as
// before (fractions as a/b, exponents/subscripts, spelled-out Greek — see
// latexToPlainText), but each formula is *also* typeset for real: MathJax
// renders it to SVG (pure vector paths, no browser layout/CSS involved —
// unlike KaTeX's HTML+CSS output, which is what made an html2canvas-based
// attempt at this hang on this exact content) and svg2pdf.js draws that
// SVG straight into the PDF as vector graphics — see pdfMath.js. So the PDF
// shows an actual fraction bar / exponent /
// boxed formula matching the site instead of the ASCII approximation, at
// print quality (it's vector, not a raster snapshot). The plain text stays
// as the fallback if a formula's render fails, and table cells still use
// plain text only (autotable doesn't have a clean spot to draw an inline
// SVG per cell).
import { trackPdfDownload } from "./chrome";
import { addPageFurniture, contentBounds, drawQuoteLine, loadPdfSettings, pdfFileName, resolvePdfBranding, sanitizePdfText } from "./pdfTheme";
import { coverDateString, maybeDrawCoverPage } from "./pdfCover";
import { drawPdfVerse } from "./pdfVerse";
import { latexToPlainText } from "./latexPlainText";
import { MATH_RE, PT_TO_MM, fitMathSvg, mathLineMetrics, prerenderMathSvgs, stashMath } from "./pdfMath";
import { ensureCoursPdfScripts } from "./pdfScripts";
import { ARABIC_FONT, hasArabic, loadArabicPdfFont } from "./pdfArabic";

// Decorative emoji (📐💡🗺️✏️✅) in the markdown source are astral-plane
// characters (surrogate pairs in UTF-16) — marked's regex-based inline
// tokenizer isn't surrogate-pair-aware and can silently drop the character
// immediately after one while tokenizing, which showed up as two words
// losing their separating space wherever an emoji used to sit between
// them. Stripping emoji before marked ever sees the source avoids that
// entirely, rather than trying to clean up after marked's own tokens.
function stripEmojiFromSource(md) {
  return md.replace(/[\u{1F000}-\u{1FFFF}☀-➿️‍]/gu, "");
}

// Transliterates/strips everything jsPDF's built-in fonts can't encode —
// the source's decorative emoji (📐💡🗺️✏️✅), but also the real minus signs
// and arrows the corrigés are full of, which used to flip whole lines into
// UTF-16 (see sanitizePdfText in pdfTheme.js). Kept as a thin alias so the
// call sites below still read as "make this drawable".
// An Arabic module keeps its Arabic letters (the flag rides on the math
// store, which every parsing helper below already receives).
const stripUnsupportedGlyphs = (text, store) => sanitizePdfText(text, { arabic: !!store?.arabic });

const HTML_ENTITIES = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'", "&apos;": "'", "&nbsp;": " " };
function unescapeEntities(s) {
  return s.replace(/&(amp|lt|gt|quot|#39|apos|nbsp);/g, (m) => HTML_ENTITIES[m] || m);
}

// ---- markdown tokens -> styled text runs -----------------------------

const INLINE_TYPES = new Set(["text", "strong", "em", "codespan", "del", "link", "image", "br", "escape", "html"]);

function getInlineTokens(token) {
  if (!token) return [];
  if (Array.isArray(token.tokens)) {
    if (token.tokens.every((t) => INLINE_TYPES.has(t.type))) return token.tokens;
    return token.tokens.flatMap((t) => (t.type === "list" ? [] : getInlineTokens(t)));
  }
  return [{ type: "text", text: token.text || "" }];
}

function splitMathSegments(rawText, store) {
  const text = unescapeEntities(rawText);
  const parts = [];
  let lastIndex = 0;
  const re = new RegExp(MATH_RE.source, "g");
  let m;
  while ((m = re.exec(text))) {
    if (m.index > lastIndex) parts.push({ math: false, text: stripUnsupportedGlyphs(text.slice(lastIndex, m.index), store) });
    const entry = store[Number(m[1])];
    parts.push({ math: true, display: entry.display, svg: entry.svg, text: stripUnsupportedGlyphs(latexToPlainText(entry.raw), store) });
    lastIndex = m.index + m[0].length;
  }
  if (lastIndex < text.length) parts.push({ math: false, text: stripUnsupportedGlyphs(text.slice(lastIndex), store) });
  return parts;
}

function flattenInline(tokens, style, store, runs) {
  for (const t of tokens) {
    if (t.type === "strong") {
      flattenInline(getInlineTokens(t), { ...style, bold: true }, store, runs);
    } else if (t.type === "em") {
      flattenInline(getInlineTokens(t), { ...style, italic: true }, store, runs);
    } else if (t.type === "del") {
      flattenInline(getInlineTokens(t), style, store, runs);
    } else if (t.type === "codespan") {
      runs.push({ text: stripUnsupportedGlyphs(unescapeEntities(t.text), store), bold: style.bold, italic: style.italic, code: true });
    } else if (t.type === "link" || t.type === "image") {
      flattenInline(getInlineTokens(t), style, store, runs);
    } else if (t.type === "text" && Array.isArray(t.tokens) && t.tokens.length) {
      // A tight list item's content is a block-level "text" token whose .text
      // is the raw markdown ("**Études** : …") and whose .tokens hold the
      // parsed strong/em runs — reading .text printed the "**" in the PDF.
      flattenInline(t.tokens, style, store, runs);
    } else {
      splitMathSegments(t.text || "", store).forEach((seg) => {
        runs.push({ text: seg.text, bold: style.bold, italic: style.italic || seg.math, math: seg.math, display: seg.display, svg: seg.svg });
      });
    }
  }
  return runs;
}

function runsToPlainText(runs) {
  return runs.map((r) => r.text).join("");
}

// Builds the fiche-de-cours jsPDF document without saving it — shared by
// downloadCoursPdf (the public "download" button) and the admin's PDF
// studio, which shows the *same* document in its preview instead of
// triggering a file download. `brandingOverride`, when given, skips loading
// the saved settings entirely — the studio previews its own unsaved form
// state instead of what's currently persisted.
export async function buildCoursPdf(cours, brandingOverride) {
  let branding = brandingOverride;
  const scriptsReady = ensureCoursPdfScripts();
  if (!branding) branding = await resolvePdfBranding(await loadPdfSettings());
  await scriptsReady;

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  // Module en arabe (cours de droit…) : police arabe embarquée et mise en page
  // de droite à gauche — lignes calées à droite, retraits et barre de
  // citation côté droit, colonnes des tableaux inversées (see pdfArabic.js).
  // The header logo, footer and page numbers keep the branding font.
  const rtl = cours.langue === "ar" || hasArabic(cours.module) || hasArabic(cours.title);
  if (rtl) {
    await loadArabicPdfFont(doc);
    branding = { ...branding, arabicFont: ARABIC_FONT };
  }
  const bodyFont = rtl ? ARABIC_FONT : branding.fontFamily || "helvetica";
  const baseFontSize = branding.fontSize || 10.5;
  const fontScale = baseFontSize / 10.5; // headings/tables/code scale proportionally to the chosen body size
  const lineSpacing = branding.lineSpacing || 1;
  const marginX = branding.marginX ?? 18;
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const maxWidth = pageW - marginX * 2;
  const { top: topY, bottom: bottomLimit } = contentBounds(branding, pageH);
  let y = topY;

  // Title/module cover page, drawn on the document's first page before any
  // content (see pdfCover.js) — the main fiche then starts fresh on page 2.
  if (
    maybeDrawCoverPage(doc, branding, {
      eyebrow: cours.module,
      title: cours.title,
      subtitle: [cours.description],
      date: coverDateString(),
    })
  ) {
    y = topY;
  }
  y = await drawPdfVerse(doc, branding, y);

  function ensureSpace(need) {
    if (y + need > bottomLimit) {
      doc.addPage();
      y = topY;
    }
  }

  // Draws a paragraph's styled runs with word wrap. Renders each stretch of
  // *consecutive same-style* words as a single doc.text() call rather than
  // positioning word-by-word — jsPDF's built-in Helvetica AFM metrics
  // under-measure some accented capitals (É, È...), so summing per-word
  // getTextWidth() and manually placing the next word visually glues words
  // together (verified: a single doc.text("MOT ACCENTUÉ") call spaces
  // correctly since the PDF's own font resolution handles it, but
  // reconstructing that gap from two separate positioned calls does not).
  // getTextWidth is still used for wrap *decisions* — worst case a line
  // wraps a hair early/late, which is harmless next to visibly fused words.
  async function writeRuns(runs, opts = {}) {
    const { size = baseFontSize, indent = 0, color = branding.textColor, gapAfter = 3, font = bodyFont, quote = null } = opts;
    const x0 = marginX + indent;
    const usableWidth = maxWidth - indent;
    const lineHeight = (size * 0.42 + 1.3) * lineSpacing;

    const setStyle = (w) => {
      const style = w.bold && w.italic ? "bolditalic" : w.bold ? "bold" : w.italic ? "italic" : "normal";
      doc.setFont(w.code && !rtl ? "courier" : font, style);
      doc.setFontSize(size);
    };
    const sameStyle = (a, b) => a.bold === b.bold && a.italic === b.italic && a.code === b.code;

    const words = [];
    runs.forEach((run) => {
      // A formula that rendered to real vector math becomes one atomic
      // "word" (never split/merged like text) — the surrounding runs still
      // carry their own leading/trailing whitespace, so spacing around it
      // is unaffected.
      if (run.svg) {
        words.push({ isSvg: true, svg: fitMathSvg(run.svg, usableWidth), space: false });
        return;
      }
      const italic = !!(run.italic || run.math);
      run.text.split(/(\s+)/).forEach((p) => {
        if (p === "") return;
        if (/^\s+$/.test(p)) {
          if (words.length) words[words.length - 1].space = true;
          return;
        }
        words.push({ text: p, bold: !!run.bold, italic, code: !!run.code, space: false });
      });
    });
    if (!words.length) return;

    doc.setFont(font, "normal");
    doc.setFontSize(size);
    const spaceW = doc.getTextWidth(" ");

    let line = [];
    let lineWidth = 0;

    async function flushLine() {
      if (!line.length) return;
      // A formula taller than a text line (a fraction, a boxed formula)
      // needs the line to reserve extra room on both sides, or it bleeds into
      // its neighbours — it still sits on the same baseline as the
      // surrounding text.
      const { extraTop, height: effLineHeight } = mathLineMetrics(line.filter((w) => w.isSvg).map((w) => w.svg), lineHeight);
      // Checked here rather than at the call sites: the *last* line of a
      // paragraph used to be flushed without any space check, so a paragraph
      // ending near the bottom of a page drew its final line into the
      // margin, over the footer. Doing it once, right before the line is
      // actually drawn, also covers the taller-than-usual formula lines.
      ensureSpace(extraTop + effLineHeight);
      y += extraTop;
      // Inside a blockquote, the accent bar / tinted band of this line goes
      // down first so the text is drawn on top of it (see drawQuoteLine).
      if (quote) {
        const top = y - size * PT_TO_MM * 0.78 - extraTop;
        const height = effLineHeight + extraTop;
        if (rtl) drawQuoteLine(doc, branding, { x: marginX, top, height, width: quote.right - marginX, barRight: true });
        else drawQuoteLine(doc, branding, { x: quote.x, top, height, width: marginX + maxWidth - quote.x });
      }
      doc.setTextColor(...color);
      if (rtl) {
        await drawLineRtl();
      } else {
        await drawLineLtr();
      }
      y += effLineHeight;
      line = [];
      lineWidth = 0;
    }

    // Consecutive same-style words of the line, merged into one string —
    // `end` is the index of the last word taken.
    function segmentAt(i) {
      let j = i;
      let text = line[i].text;
      while (!line[j].isSvg && line[j].space && j + 1 < line.length && !line[j + 1].isSvg && sameStyle(line[j], line[j + 1])) {
        j++;
        text += " " + line[j].text;
      }
      return { text, end: j };
    }

    // Right to left: segments are placed from the right edge leftwards, each
    // one put in visual order by the doc.text() wrapper of pdfArabic.js. The
    // embedded font's metrics are exact, so no anti-drift padding here.
    async function drawLineRtl() {
      let x = marginX + maxWidth - indent;
      let i = 0;
      while (i < line.length) {
        if (line[i].isSvg) {
          const { svg } = line[i];
          x -= svg.wMM;
          await doc.svg(svg.svg.cloneNode(true), { x, y: y - svg.ascentMM, width: svg.wMM, height: svg.hMM });
          x -= line[i].space ? spaceW : 0;
          i++;
          continue;
        }
        const { text, end } = segmentAt(i);
        setStyle(line[i]);
        x -= doc.getTextWidth(text);
        doc.text(text, x, y);
        x -= line[end].space ? spaceW : 0;
        i = end + 1;
      }
    }

    async function drawLineLtr() {
      let x = x0;
      let i = 0;
      while (i < line.length) {
        if (line[i].isSvg) {
          const { svg } = line[i];
          await doc.svg(svg.svg.cloneNode(true), { x, y: y - svg.ascentMM, width: svg.wMM, height: svg.hMM });
          x += svg.wMM + (line[i].space ? spaceW : 0);
          i++;
          continue;
        }
        const { text: segText, end: j } = segmentAt(i);
        setStyle(line[i]);
        doc.text(segText, x, y);
        const segW = doc.getTextWidth(segText);
        // jsPDF's own AFM metrics (used for this measurement) aren't always
        // identical to the font a given PDF viewer substitutes for
        // "Helvetica" at render time — over a long same-style run the two
        // can drift by close to a full space width, visually fusing the
        // next (differently-styled) segment onto this one. A margin
        // proportional to the run's own length absorbs that drift; it's a
        // few hundredths of a mm on short runs, imperceptible either way.
        x += segW + (line[j].space ? spaceW + segW * 0.015 + 0.15 : 0);
        i = j + 1;
      }
    }

    // Gap actually consumed to the left of `w` when the line is drawn —
    // including the anti-drift padding flushLine adds after each segment.
    // Measuring without it is what let a full line end up a couple of
    // millimetres past the right margin: the wrap decision thought the line
    // fit, then drawing spread it wider than measured.
    const gapBefore = (wWidth) => spaceW + wWidth * 0.015 + 0.15;

    for (const w of words) {
      let wWidth;
      if (w.isSvg) {
        wWidth = w.svg.wMM;
      } else {
        setStyle(w);
        wWidth = doc.getTextWidth(w.text);
      }
      // Only break where the source has a space: a word glued to the previous
      // one across a style change ("**mot**)") stays on its line instead of
      // sending a lone ")" to the next.
      const prev = line[line.length - 1];
      const canBreak = prev && (prev.space || prev.isSvg || w.isSvg);
      if (canBreak && lineWidth + gapBefore(wWidth) + wWidth > usableWidth) {
        await flushLine();
      }
      lineWidth += (line.length ? gapBefore(wWidth) : 0) + wWidth;
      line.push(w);
    }
    await flushLine();
    y += gapAfter * lineSpacing;
  }

  function addTable(table, indent = 0) {
    // Right to left, the first column is drawn on the right.
    const order = (cells) => (rtl ? [...cells].reverse() : cells);
    const head = [order(table.header).map((cell) => runsToPlainText(flattenInline(getInlineTokens(cell), {}, table.__store, [])))];
    const body = table.rows.map((row) => order(row).map((cell) => runsToPlainText(flattenInline(getInlineTokens(cell), {}, table.__store, []))));
    const columnStyles = {};
    order(table.header).forEach((cell, idx) => {
      if (cell.align) columnStyles[idx] = { halign: rtl && cell.align === "left" ? "right" : cell.align };
    });
    ensureSpace(20);
    doc.autoTable({
      startY: y,
      // top/bottom matter for a table long enough to break across pages:
      // autotable's own default is 40mm, so a continued table used to start
      // and stop at a completely different margin than the text around it.
      margin: { left: marginX + indent, right: marginX, top: topY, bottom: pageH - bottomLimit },
      head,
      body,
      styles: { font: bodyFont, fontSize: 8.5 * fontScale, cellPadding: 2, overflow: "linebreak", textColor: branding.textColor, halign: rtl ? "right" : "left" },
      headStyles: { fillColor: branding.accentColor, textColor: 255 },
      columnStyles,
      theme: "grid",
    });
    y = doc.lastAutoTable.finalY + 4;
  }

  async function renderBlock(token, ctx = {}) {
    const indent = ctx.indent || 0;
    const color = ctx.color || branding.textColor;
    switch (token.type) {
      case "heading": {
        const runs = flattenInline(getInlineTokens(token), {}, ctx.store, []).map((r) => ({ ...r, bold: true }));
        const headingStyle = branding.headings[`h${token.depth}`];
        const baseSizes = { 1: 15, 2: 13, 3: 11.5 };
        const baseSize = baseSizes[token.depth] || 11;
        const size = baseSize * fontScale * (headingStyle ? headingStyle.sizeScale : 1);
        // The thin rule above each H2 is opt-in ("Trait avant les titres H2"
        // in the PDF studio, off by default): on a fiche with a section
        // every few paragraphs it reads as a line cutting the page in two
        // rather than as a divider. The extra breathing room above an H2
        // stays either way — that part never looked like a stray mark.
        if (token.depth === 2) {
          y += 2;
          ensureSpace(11);
          if (branding.headingRule) {
            doc.setDrawColor(220, 224, 232);
            doc.setLineWidth(0.2);
            doc.line(marginX + indent, y - 4, marginX + maxWidth, y - 4);
          }
        } else {
          ensureSpace(size * 0.6);
        }
        await writeRuns(runs, {
          size,
          indent,
          color: headingStyle ? headingStyle.color : branding.textColor,
          font: headingStyle && !rtl ? headingStyle.fontFamily : bodyFont,
          gapAfter: token.depth === 1 ? 3 : 2.2,
        });
        break;
      }
      case "paragraph": {
        const runs = flattenInline(getInlineTokens(token), {}, ctx.store, []);
        if (runs.length === 1 && runs[0].math && runs[0].display) {
          const availWidth = maxWidth - indent;
          if (runs[0].svg) {
            const svg = runs[0].svg;
            const w = Math.min(svg.wMM, availWidth);
            const h = (svg.hMM * w) / svg.wMM;
            ensureSpace(h + 6);
            y += 1.5;
            await doc.svg(svg.svg.cloneNode(true), { x: marginX + indent + (availWidth - w) / 2, y, width: w, height: h });
            y += h + 6.5; // y is the next text's baseline: its letters rise about 3mm back up
            break;
          }
          ensureSpace(14);
          y += 1.5;
          const displaySize = 12 * fontScale;
          doc.setFont(bodyFont, "italic");
          doc.setFontSize(displaySize);
          doc.setTextColor(...branding.textColor);
          const w = doc.getTextWidth(runs[0].text);
          if (w <= availWidth) {
            doc.text(runs[0].text, marginX + indent + availWidth / 2, y, { align: "center" });
            y += (displaySize * 0.42 + 4) * lineSpacing;
            break;
          }
        }
        await writeRuns(runs, { indent, color, gapAfter: 3, quote: ctx.quote });
        break;
      }
      case "list": {
        for (const [idx, item] of token.items.entries()) {
          const bullet = token.ordered ? `${(token.start || 1) + idx}. ` : "•  ";
          const runs = flattenInline(getInlineTokens(item), {}, ctx.store, []);
          runs.unshift({ text: bullet });
          await writeRuns(runs, { indent: indent + 4, color, gapAfter: 1.5, quote: ctx.quote });
          const nestedLists = (item.tokens || []).filter((t) => t.type === "list");
          for (const nested of nestedLists) {
            await renderBlock(nested, { ...ctx, indent: indent + 8 });
          }
        }
        y += 1.5;
        break;
      }
      case "blockquote": {
        // The bar sits 1mm into the quote's 6mm indent. A nested quote keeps
        // the outer one's bar: one bar reads cleaner than a staircase.
        const quote = ctx.quote || (rtl ? { right: marginX + maxWidth - indent - 1 } : { x: marginX + indent + 1 });
        for (const child of token.tokens || []) {
          await renderBlock(child, { ...ctx, indent: indent + 6, color: [95, 100, 112], quote });
        }
        y += 1;
        break;
      }
      case "table": {
        token.__store = ctx.store;
        addTable(token, indent);
        break;
      }
      case "code": {
        ensureSpace(10);
        const codeSize = 9 * fontScale;
        const lineH = (codeSize * 0.42 + 1.2) * lineSpacing;
        doc.setFont("courier", "normal");
        doc.setFontSize(codeSize);
        doc.setTextColor(70, 74, 84);
        unescapeEntities(token.text || "").split("\n").forEach((line) => {
          const wrapped = doc.splitTextToSize(sanitizePdfText(line) || " ", maxWidth - indent);
          wrapped.forEach((wl) => {
            ensureSpace(lineH);
            doc.text(wl, marginX + indent, y);
            y += lineH;
          });
        });
        y += 2;
        break;
      }
      case "hr": {
        ensureSpace(6);
        doc.setDrawColor(180, 184, 196);
        doc.setLineWidth(0.3);
        doc.line(marginX, y, marginX + maxWidth, y);
        y += 5;
        break;
      }
      default:
        break;
    }
  }

  const { text: stashed, store } = stashMath(stripEmojiFromSource(cours.content || ""));
  store.arabic = rtl;
  await prerenderMathSvgs(store);
  const tokens = window.marked.lexer(stashed);
  for (const t of tokens) {
    await renderBlock(t, { store });
  }

  addPageFurniture(doc, branding, { title: cours.title || cours.module });
  return doc;
}

export async function downloadCoursPdf(cours) {
  const doc = await buildCoursPdf(cours);
  doc.save(pdfFileName(cours.module || cours.title, cours.id));
  trackPdfDownload("cours", cours.id);
}
