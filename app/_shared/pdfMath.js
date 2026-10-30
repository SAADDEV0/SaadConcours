"use client";

// Real typesetting of LaTeX formulas in the PDF exports, shared by coursPdf.js
// and concoursPdf.js. MathJax's SVG output is pure vector paths computed
// straight from font metrics — no browser layout/CSS pass involved — so it's
// both fast and immune to the CSS-parsing/layout edge cases a DOM-screenshot
// approach (e.g. html2canvas rendering KaTeX's HTML+CSS output) runs into.
// svg2pdf.js then draws that SVG straight into the PDF as vector graphics:
// print quality at any zoom, not a raster snapshot.
//
// A formula that can't be rendered keeps entry.svg undefined, and the caller
// falls back to latexToPlainText() — same for a table cell, where autotable
// has no clean spot for an inline SVG.

import { replaceInlineMath, wrapAccentedMathWords } from "./latexPlainText";

const MATH_OPEN = "";
const MATH_CLOSE = "";
export const MATH_RE = new RegExp(`${MATH_OPEN}(\\d+)${MATH_CLOSE}`, "g");

// Pulls $...$ / $$...$$ spans out of the source before it gets parsed (same
// reasoning as mathMarkdown.js's protectMath: marked would otherwise mangle
// underscores/asterisks inside the LaTeX, and concoursPdf.js's line parser
// would split a table on the pipe of "$|x|$") and remembers whether each was
// a display ($$) or inline ($) span so a paragraph that's *only* a display
// equation can later be centered like the on-page reader does, instead of
// flowing like body text.
//
// Windows line endings are normalized here as well: "\r" hides a blank line
// from the math matching, and hides "## Titre\r" from concoursPdf.js's
// heading/bullet patterns (a dot doesn't match it).
export function stashMath(md) {
  const store = [];
  // Content authors sometimes write a French word straight into a bare
  // subscript/superscript ("V_n^{début}") instead of "V_n^{\text{début}}" —
  // wrapAccentedMathWords fixes that up front so both the MathJax SVG below
  // and the plain-text fallback (latexToPlainText, which just unwraps
  // \text{} either way) see the corrected source.
  const stash = (raw, display) => `${MATH_OPEN}${store.push({ raw: wrapAccentedMathWords(raw), display }) - 1}${MATH_CLOSE}`;
  // Display blocks get forced onto their own blank-line-separated paragraph:
  // the source sometimes has two $$...$$ back to back with only a single
  // newline between them (or text right after), and without the blank
  // lines here marked merges them into one paragraph — losing the
  // separator entirely and gluing the two formulas' words together.
  const text = String(md ?? "")
    .replace(/\r\n?/g, "\n")
    .replace(/\$\$[\s\S]+?\$\$/g, (m) => `\n\n${stash(m, true)}\n\n`);
  return { text: replaceInlineMath(text, (m) => stash(m, false)), store };
}

// MathJax's SVG uses a fixed 1000-unit em for every formula (like a font's
// unitsPerEm — the viewBox extent varies per formula because it's cropped
// to that formula's own ink, not because the unit scale changes), so one
// mm-per-unit ratio derived from our target point size gives every formula
// consistent, correct-looking scale relative to the surrounding jsPDF text.
const MATHJAX_UNITS_PER_EM = 1000;
export const PT_TO_MM = 25.4 / 72;

function stripMathDelimiters(raw) {
  const s = raw.trim();
  if (s.startsWith("$$") && s.endsWith("$$")) return s.slice(2, -2);
  if (s.startsWith("$") && s.endsWith("$")) return s.slice(1, -1);
  return s;
}

// MathJax has no math-mode glyph for "€" and throws on it (only \text{} can
// measure it). Tried second, so a "€" already inside \text{} is left alone.
async function tex2svg(tex, display) {
  try {
    return await window.MathJax.tex2svgPromise(tex, { display });
  } catch {
    return window.MathJax.tex2svgPromise(tex.replace(/€/g, "\\text{€}"), { display });
  }
}

// fontCache must be "none" in the MathJax config (see pdfScripts.js) — any
// caching mode defines repeated glyphs once in a <defs> and references them
// via <use>, and svg2pdf.js can't resolve that for an SVG that's never
// attached to a live document (confirmed for both "local" and "global").
// "none" makes every glyph a fully inline path, larger but reliable.
async function renderMathToSvg(raw, display) {
  if (!window.MathJax?.tex2svgPromise) return null;
  // svg2pdf.js patches jsPDF.API.svg — without this check, prerendering would
  // succeed here but the later doc.svg(...) draw call would throw "doc.svg is
  // not a function" and abort the whole PDF. Bailing out to null here instead
  // routes this formula through the plain-text fallback, same as any other
  // MathJax failure.
  if (typeof window.jspdf?.jsPDF?.API?.svg !== "function") return null;
  try {
    const node = await tex2svg(stripMathDelimiters(raw), display);
    const svg = node.querySelector("svg");
    if (!svg) return null;
    const viewBox = (svg.getAttribute("viewBox") || "").trim().split(/\s+/).map(Number);
    if (viewBox.length !== 4 || viewBox.some(Number.isNaN)) return null;
    const [, minY, vbWidth, vbHeight] = viewBox;
    const fontSizePt = display ? 12 : 10.5; // matches the display-block/body text sizes of the PDFs
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
// runs, and attaches it as `entry.svg` — left undefined on failure so
// downstream rendering falls back to the plain-text conversion. Safe to run
// concurrently: tex2svgPromise never touches the live DOM.
export async function prerenderMathSvgs(store) {
  await window.MathJax?.startup?.promise;
  await Promise.all(
    store.map(async (entry) => {
      const svg = await renderMathToSvg(entry.raw, entry.display);
      if (svg) entry.svg = svg;
    })
  );
}

// Same formula, shrunk to fit `maxWidth` — nothing in MathJax's output can
// wrap, so a long inline calculation would otherwise run off the page.
export function fitMathSvg(svg, maxWidth) {
  if (svg.wMM <= maxWidth) return svg;
  const k = maxWidth / svg.wMM;
  return { svg: svg.svg, wMM: maxWidth, hMM: svg.hMM * k, ascentMM: svg.ascentMM * k };
}

// Vertical room for a line of text holding formulas. A fraction or a sum
// reaches well above and below the text around it, so the line starts lower
// (`extraTop`) and takes more height — it used to only grow downwards, and the
// top of the formula landed on the line above. 0.75 is the share of a line
// height the text itself keeps free on the side of the neighbouring line.
export function mathLineMetrics(svgs, lineHeight) {
  const ascent = Math.max(0, ...svgs.map((s) => s.ascentMM));
  const descent = Math.max(0, ...svgs.map((s) => s.hMM - s.ascentMM));
  return {
    extraTop: Math.max(0, ascent - lineHeight * 0.75),
    height: Math.max(lineHeight, descent + lineHeight * 0.75),
  };
}
