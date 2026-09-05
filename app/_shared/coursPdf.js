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
// SVG straight into the PDF as vector graphics — see renderMathToSvg /
// prerenderMathSvgs. So the PDF shows an actual fraction bar / exponent /
// boxed formula matching the site instead of the ASCII approximation, at
// print quality (it's vector, not a raster snapshot). The plain text stays
// as the fallback if a formula's render fails, and table cells still use
// plain text only (autotable doesn't have a clean spot to draw an inline
// SVG per cell).
import { trackPdfDownload } from "./chrome";
import { addWatermark, addSiteHeader, addFooterSocial, resolvePdfBranding } from "./pdfWatermark";

const MATH_OPEN = "";
const MATH_CLOSE = "";
const MATH_RE = new RegExp(`${MATH_OPEN}(\\d+)${MATH_CLOSE}`, "g");

// Pulls $...$ / $$...$$ spans out of the markdown source before it reaches
// marked() (same reasoning as mathMarkdown.js's protectMath: marked would
// otherwise mangle underscores/asterisks inside the LaTeX) and remembers
// whether each was a display ($$) or inline ($) span so a paragraph that's
// *only* a display equation can later be centered like the on-page reader
// does, instead of flowing like body text.
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

function stashMath(md) {
  const store = [];
  const stash = (raw, display) => `${MATH_OPEN}${store.push({ raw, display }) - 1}${MATH_CLOSE}`;
  // Display blocks get forced onto their own blank-line-separated paragraph:
  // the source sometimes has two $$...$$ back to back with only a single
  // newline between them (or text right after), and without the blank
  // lines here marked merges them into one paragraph — losing the
  // separator entirely and gluing the two formulas' words together.
  let text = stripEmojiFromSource(md || "").replace(/\$\$[\s\S]+?\$\$/g, (m) => `\n\n${stash(m, true)}\n\n`);
  text = text.replace(/\$(?:\\\$|[^$])+?\$/g, (m) => (m.includes("\n\n") ? m : stash(m, false)));
  return { text, store };
}

// ---- LaTeX -> readable plain text -----------------------------------
// Not a typesetter: no real fraction bars or radicals. But it keeps the
// text selectable/copyable/searchable, which matters more for a fiche
// students copy formulas out of than pixel-perfect math layout.

function extractBraceArg(str, i) {
  let depth = 0;
  for (let j = i; j < str.length; j++) {
    if (str[j] === "{") depth++;
    else if (str[j] === "}") {
      depth--;
      if (depth === 0) return [str.slice(i + 1, j), j + 1];
    }
  }
  return [str.slice(i + 1), str.length];
}

function replaceCommand(str, cmd, argCount, build) {
  const needle = "\\" + cmd;
  let out = "";
  let i = 0;
  while (i < str.length) {
    const nextLetter = str[i + needle.length] || "";
    if (str.startsWith(needle, i) && !/[a-zA-Z]/.test(nextLetter)) {
      let j = i + needle.length;
      const args = [];
      for (let k = 0; k < argCount; k++) {
        while (str[j] === " ") j++;
        if (str[j] === "{") {
          const [arg, next] = extractBraceArg(str, j);
          args.push(arg);
          j = next;
        } else if (/[a-zA-Z0-9]/.test(str[j] || "")) {
          args.push(str[j]);
          j++;
        } else {
          args.push("");
        }
      }
      out += build(args.map((a) => latexToPlainText(a, true)));
      i = j;
    } else {
      out += str[i];
      i++;
    }
  }
  return out;
}

function isSimpleToken(s) {
  return /^[A-Za-z0-9]+$/.test(s);
}
function formatFraction(a, b) {
  const A = isSimpleToken(a) ? a : `(${a})`;
  const B = isSimpleToken(b) ? b : `(${b})`;
  return `${A}/${B}`;
}

// jsPDF's built-in fonts (Helvetica/Times/Courier) only cover WinAnsi —
// essentially ASCII plus the Latin-1 supplement. Anything outside that
// (Greek letters, ≤/≥/≠, →, √, superscript/subscript block characters)
// renders as a missing-glyph box instead of the intended symbol, which
// looks worse than not having "pretty" math at all. Everything below is
// deliberately spelled out or given an ASCII-safe fallback instead of
// reaching for the "correct" Unicode symbol.
function wrapIfComplex(g) {
  return isSimpleToken(g) ? g : `(${g})`;
}
function replaceSupSub(s) {
  s = s.replace(/\^\{([^{}]*)\}/g, (m, g) => `^${wrapIfComplex(g)}`);
  s = s.replace(/\^([A-Za-z0-9])/g, (m, g) => `^${g}`);
  s = s.replace(/_\{([^{}]*)\}/g, (m, g) => `_${wrapIfComplex(g)}`);
  s = s.replace(/_([A-Za-z0-9])/g, (m, g) => `_${g}`);
  return s;
}

const SYMBOLS = {
  // × ÷ ± · are in Latin-1, safe to keep as real symbols.
  "\\times": "×", "\\cdot": "·", "\\div": "÷", "\\pm": "±", "\\mp": "-+",
  "\\leq": "<=", "\\geq": ">=", "\\neq": "!=", "\\approx": "~=", "\\equiv": "==", "\\infty": "l'infini",
  "\\rightarrow": "->", "\\to": "->", "\\Rightarrow": "=>", "\\leftrightarrow": "<->",
  "\\alpha": "alpha", "\\beta": "beta", "\\gamma": "gamma", "\\Gamma": "Gamma", "\\delta": "delta", "\\Delta": "Delta",
  "\\epsilon": "epsilon", "\\theta": "theta", "\\lambda": "lambda", "\\mu": "mu", "\\pi": "pi", "\\sigma": "sigma",
  "\\Sigma": "Sigma", "\\tau": "tau", "\\phi": "phi", "\\varphi": "phi", "\\omega": "omega", "\\Omega": "Omega",
  "\\%": "%", "\\$": "$", "\\_": "_", "\\&": "&", "\\#": "#",
  "\\quad": "  ", "\\qquad": "    ", "\\,": " ", "\\;": " ", "\\!": "", "\\ ": " ",
  "\\{": "{", "\\}": "}", "\\[": "[", "\\]": "]",
};

// Strips anything outside WinAnsi (plus a few common curly-quote/dash
// punctuation marks jsPDF also renders fine) — mainly the markdown source's
// decorative emoji (📐💡🗺️✏️✅), which would otherwise show up as tofu boxes.
function stripUnsupportedGlyphs(s) {
  return s.replace(/[^ -ÿ‘’“”–—…]/gu, "").replace(/[ \t]+/g, " ");
}

const HTML_ENTITIES = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'", "&apos;": "'", "&nbsp;": " " };
function unescapeEntities(s) {
  return s.replace(/&(amp|lt|gt|quot|#39|apos|nbsp);/g, (m) => HTML_ENTITIES[m] || m);
}

function latexToPlainText(raw, inner = false) {
  let s = raw;
  if (!inner) {
    s = s.trim();
    if (s.startsWith("$$") && s.endsWith("$$")) s = s.slice(2, -2);
    else if (s.startsWith("$") && s.endsWith("$")) s = s.slice(1, -1);
  }
  s = s.replace(/\\left/g, "").replace(/\\right/g, "");
  s = replaceCommand(s, "dfrac", 2, ([a, b]) => formatFraction(a, b));
  s = replaceCommand(s, "tfrac", 2, ([a, b]) => formatFraction(a, b));
  s = replaceCommand(s, "frac", 2, ([a, b]) => formatFraction(a, b));
  s = s.replace(/\\sqrt\[([^\]]+)\]/g, (m, n) => `racine ${n}-ieme de `); // nth root marker, resolved right before the sqrt{...} below
  s = replaceCommand(s, "sqrt", 1, ([a]) => `sqrt(${a})`);
  s = replaceCommand(s, "text", 1, ([a]) => a);
  s = replaceCommand(s, "mathrm", 1, ([a]) => a);
  s = replaceCommand(s, "mathbf", 1, ([a]) => a);
  s = replaceCommand(s, "overline", 1, ([a]) => a);
  s = replaceCommand(s, "boxed", 1, ([a]) => a);
  for (const [k, v] of Object.entries(SYMBOLS)) s = s.split(k).join(v);
  s = replaceSupSub(s);
  s = s.replace(/\\([a-zA-Z]+)(?![a-zA-Z])(?=[0-9])/g, "$1 "); // unrecognized command glued to a following digit: keep a separating space
  s = s.replace(/\\([a-zA-Z]+)/g, "$1"); // unrecognized commands: drop the backslash, keep the name
  s = s.replace(/[{}]/g, "");
  s = s.replace(/[ \t]+/g, " ").trim();
  return s;
}

// ---- LaTeX -> real vector typesetting (MathJax SVG + svg2pdf.js) --------
// MathJax's SVG output is pure vector paths computed straight from font
// metrics — no browser layout/CSS pass involved — so it's both fast and
// immune to the CSS-parsing/layout edge cases a DOM-screenshot approach
// (e.g. html2canvas rendering KaTeX's HTML+CSS output) runs into. svg2pdf.js
// then draws that SVG straight into the PDF as vector graphics: print
// quality at any zoom, not a raster snapshot.
//
// MathJax's SVG uses a fixed 1000-unit em for every formula (like a font's
// unitsPerEm — the viewBox extent varies per formula because it's cropped
// to that formula's own ink, not because the unit scale changes), so one
// mm-per-unit ratio derived from our target point size gives every formula
// consistent, correct-looking scale relative to the surrounding jsPDF text.
const MATHJAX_UNITS_PER_EM = 1000;
const PT_TO_MM = 25.4 / 72;

function stripMathDelimiters(raw) {
  const s = raw.trim();
  if (s.startsWith("$$") && s.endsWith("$$")) return s.slice(2, -2);
  if (s.startsWith("$") && s.endsWith("$")) return s.slice(1, -1);
  return s;
}

// fontCache must be "none" in the MathJax config (see app/layout.js) — any
// caching mode defines repeated glyphs once in a <defs> and references them
// via <use>, and svg2pdf.js can't resolve that for an SVG that's never
// attached to a live document (confirmed for both "local" and "global").
// "none" makes every glyph a fully inline path, larger but reliable.
async function renderMathToSvg(raw, display) {
  if (!window.MathJax?.tex2svgPromise) return null;
  try {
    const node = await window.MathJax.tex2svgPromise(stripMathDelimiters(raw), { display });
    const svg = node.querySelector("svg");
    if (!svg) return null;
    const viewBox = (svg.getAttribute("viewBox") || "").trim().split(/\s+/).map(Number);
    if (viewBox.length !== 4 || viewBox.some(Number.isNaN)) return null;
    const [, minY, vbWidth, vbHeight] = viewBox;
    const fontSizePt = display ? 12 : 10.5; // matches the display-block/body text sizes used elsewhere in this file
    const mmPerUnit = (fontSizePt * PT_TO_MM) / MATHJAX_UNITS_PER_EM;
    return {
      svg,
      wMM: vbWidth * mmPerUnit,
      hMM: vbHeight * mmPerUnit,
      // distance from the SVG's top edge down to the text baseline, for
      // aligning it against surrounding jsPDF text (whose y is a baseline).
      ascentMM: -minY * mmPerUnit,
    };
  } catch {
    return null; // falls back to the plain-text rendering of this formula
  }
}

// Pre-renders every stashed formula to SVG *before* the jsPDF layout pass
// below runs, and attaches it as `entry.svg` — left undefined on failure so
// downstream rendering falls back to the plain-text conversion. Safe to run
// concurrently: tex2svgPromise never touches the live DOM.
async function prerenderMathSvgs(store) {
  await Promise.all(
    store.map(async (entry) => {
      const svg = await renderMathToSvg(entry.raw, entry.display);
      if (svg) entry.svg = svg;
    })
  );
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
    if (m.index > lastIndex) parts.push({ math: false, text: stripUnsupportedGlyphs(text.slice(lastIndex, m.index)) });
    const entry = store[Number(m[1])];
    parts.push({ math: true, display: entry.display, svg: entry.svg, text: stripUnsupportedGlyphs(latexToPlainText(entry.raw)) });
    lastIndex = m.index + m[0].length;
  }
  if (lastIndex < text.length) parts.push({ math: false, text: stripUnsupportedGlyphs(text.slice(lastIndex)) });
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
      runs.push({ text: stripUnsupportedGlyphs(unescapeEntities(t.text)), bold: style.bold, italic: style.italic, code: true });
    } else if (t.type === "link" || t.type === "image") {
      flattenInline(getInlineTokens(t), style, store, runs);
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

export async function downloadCoursPdf(cours) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const marginX = 18;
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const maxWidth = pageW - marginX * 2;
  const topY = 26;
  const bottomLimit = pageH - 18;
  let y = topY;

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
    const { size = 10.5, indent = 0, color = [26, 29, 39], gapAfter = 3 } = opts;
    const x0 = marginX + indent;
    const usableWidth = maxWidth - indent;
    const lineHeight = size * 0.42 + 1.3;

    const setStyle = (w) => {
      const style = w.bold && w.italic ? "bolditalic" : w.bold ? "bold" : w.italic ? "italic" : "normal";
      doc.setFont(w.code ? "courier" : "helvetica", style);
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
        words.push({ isSvg: true, svg: run.svg, space: false });
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

    doc.setFont("helvetica", "normal");
    doc.setFontSize(size);
    const spaceW = doc.getTextWidth(" ");

    ensureSpace(lineHeight);
    let line = [];
    let lineWidth = 0;

    async function flushLine() {
      if (!line.length) return;
      // A formula taller than a text line (a fraction, a boxed formula)
      // needs the line to reserve extra room, or it bleeds into the next
      // one — it still sits on the same baseline as the surrounding text,
      // it just extends further above it.
      const svgHeights = line.filter((w) => w.isSvg).map((w) => w.svg.hMM);
      const effLineHeight = svgHeights.length ? Math.max(lineHeight, ...svgHeights) + 0.8 : lineHeight;
      doc.setTextColor(...color);
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
        let j = i;
        let segText = line[i].text;
        while (!line[j].isSvg && line[j].space && j + 1 < line.length && !line[j + 1].isSvg && sameStyle(line[j], line[j + 1])) {
          j++;
          segText += " " + line[j].text;
        }
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
      y += effLineHeight;
      line = [];
      lineWidth = 0;
    }

    for (const w of words) {
      let wWidth;
      if (w.isSvg) {
        wWidth = w.svg.wMM;
      } else {
        setStyle(w);
        wWidth = doc.getTextWidth(w.text);
      }
      const addW = wWidth + (line.length ? spaceW : 0);
      if (lineWidth + addW > usableWidth && line.length) {
        await flushLine();
        ensureSpace(lineHeight);
      }
      line.push(w);
      lineWidth += (line.length > 1 ? spaceW : 0) + wWidth;
    }
    await flushLine();
    y += gapAfter;
  }

  function addTable(table, indent = 0) {
    const head = [table.header.map((cell) => runsToPlainText(flattenInline(getInlineTokens(cell), {}, table.__store, [])))];
    const body = table.rows.map((row) => row.map((cell) => runsToPlainText(flattenInline(getInlineTokens(cell), {}, table.__store, []))));
    const columnStyles = {};
    table.header.forEach((cell, idx) => {
      if (cell.align) columnStyles[idx] = { halign: cell.align };
    });
    ensureSpace(20);
    doc.autoTable({
      startY: y,
      margin: { left: marginX + indent, right: marginX },
      head,
      body,
      styles: { fontSize: 8.5, cellPadding: 2, overflow: "linebreak" },
      headStyles: { fillColor: [79, 140, 255], textColor: 255 },
      columnStyles,
      theme: "grid",
    });
    y = doc.lastAutoTable.finalY + 4;
  }

  async function renderBlock(token, ctx = {}) {
    const indent = ctx.indent || 0;
    const color = ctx.color || [26, 29, 39];
    switch (token.type) {
      case "heading": {
        const runs = flattenInline(getInlineTokens(token), {}, ctx.store, []).map((r) => ({ ...r, bold: true }));
        const sizes = { 1: 15, 2: 13, 3: 11.5 };
        const size = sizes[token.depth] || 11;
        if (token.depth === 2) {
          y += 2;
          ensureSpace(11);
          doc.setDrawColor(220, 224, 232);
          doc.setLineWidth(0.2);
          doc.line(marginX + indent, y - 4, marginX + maxWidth, y - 4);
        } else {
          ensureSpace(size * 0.6);
        }
        await writeRuns(runs, { size, indent, color: [20, 20, 25], gapAfter: token.depth === 1 ? 3 : 2.2 });
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
            y += h + 4;
            break;
          }
          ensureSpace(14);
          y += 1.5;
          doc.setFont("helvetica", "italic");
          doc.setFontSize(12);
          doc.setTextColor(20, 20, 25);
          const w = doc.getTextWidth(runs[0].text);
          if (w <= availWidth) {
            doc.text(runs[0].text, marginX + indent + availWidth / 2, y, { align: "center" });
            y += 12 * 0.42 + 4;
            break;
          }
        }
        await writeRuns(runs, { indent, color, gapAfter: 3 });
        break;
      }
      case "list": {
        for (const [idx, item] of token.items.entries()) {
          const bullet = token.ordered ? `${(token.start || 1) + idx}. ` : "•  ";
          const runs = flattenInline(getInlineTokens(item), {}, ctx.store, []);
          runs.unshift({ text: bullet });
          await writeRuns(runs, { indent: indent + 4, color, gapAfter: 1.5 });
          const nestedLists = (item.tokens || []).filter((t) => t.type === "list");
          for (const nested of nestedLists) {
            await renderBlock(nested, { ...ctx, indent: indent + 8 });
          }
        }
        y += 1.5;
        break;
      }
      case "blockquote": {
        for (const child of token.tokens || []) {
          await renderBlock(child, { ...ctx, indent: indent + 6, color: [95, 100, 112] });
        }
        break;
      }
      case "table": {
        token.__store = ctx.store;
        addTable(token, indent);
        break;
      }
      case "code": {
        ensureSpace(10);
        const lineH = 9 * 0.42 + 1.2;
        doc.setFont("courier", "normal");
        doc.setFontSize(9);
        doc.setTextColor(70, 74, 84);
        unescapeEntities(token.text || "").split("\n").forEach((line) => {
          const wrapped = doc.splitTextToSize(line || " ", maxWidth - indent);
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

  const { text: stashed, store } = stashMath(cours.content || "");
  await prerenderMathSvgs(store);
  const tokens = window.marked.lexer(stashed);
  for (const t of tokens) {
    await renderBlock(t, { store });
  }

  let branding = {};
  try {
    const settings = await (await fetch("/api/settings")).json();
    branding = await resolvePdfBranding(settings);
  } catch {
    // best-effort: fall back to the default vector logo/watermark, no socials
  }

  addWatermark(doc, branding);
  addSiteHeader(doc, branding);
  addFooterSocial(doc, branding);
  doc.save(`${cours.id}.pdf`);
  trackPdfDownload("cours", cours.id);
}
