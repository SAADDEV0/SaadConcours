"use client";

// Everything the generated PDFs (fiche de cours, énoncé/corrigé de concours,
// PDF d'évaluation) share about *how they look*: the option vocabulary the
// admin's PDF studio edits, the resolver that turns saved settings into a
// ready-to-draw `branding` object, and the page furniture drawn on top of
// every document (header, footer, watermark, border).
//
// The cover page lives in its own module (pdfCover.js) since none of it
// applies to content pages; the built-in look presets live in
// pdfTemplates.js.
//
// Was app/_shared/pdfWatermark.js — renamed once it stopped being about
// watermarks and became the whole PDF theme layer.

import { PDF_VERSE_THEMES } from "./quranVerses";

const SITE_URL = "https://www.saadconcours.space";
const SITE_HOST = "saadconcours.space";

// Social keys the PDF studio can toggle into the footer — kept separate from
// chrome.js's SOCIAL_NETWORKS (which carries inline SVG icons for the site's
// own footer) since jsPDF only draws text, not arbitrary SVG. Order matches
// app/admin/_lib/settingsFields.js's SOCIAL_FIELDS.
const PDF_SOCIAL_FIELDS = [
  { key: "facebook", label: "Facebook" },
  { key: "instagram", label: "Instagram" },
  { key: "whatsapp", label: "WhatsApp" },
  { key: "tiktok", label: "TikTok" },
  { key: "youtube", label: "YouTube" },
  { key: "telegram", label: "Telegram" },
];

export const DEFAULT_ACCENT_HEX = "#4f46e5";
export const DEFAULT_TEXT_HEX = "#1a1d27";
const DEFAULT_ACCENT_RGB = [79, 70, 229];
const DEFAULT_TEXT_RGB = [26, 29, 39];

// A4, the only page size everything renders at — exported so the studio's
// canvas can compute its guides against the same numbers the draw code uses.
export const PAGE_W_MM = 210;
export const PAGE_H_MM = 297;

// ---- option vocabulary (single source of truth for UI + rendering) ----

export const PDF_FONT_OPTIONS = [
  { value: "helvetica", label: "Helvetica" },
  { value: "times", label: "Times" },
  { value: "courier", label: "Courier" },
];

export const PDF_WATERMARK_STYLE_OPTIONS = [
  { value: "brand", label: "Logo + texte" },
  { value: "diagonal", label: "Diagonale" },
  { value: "tiled", label: "Quadrillage" },
];

export const PDF_FONT_SIZE_OPTIONS = [
  { value: "small", label: "Petite" },
  { value: "normal", label: "Normale" },
  { value: "large", label: "Grande" },
];

export const PDF_LINE_SPACING_OPTIONS = [
  { value: "compact", label: "Compact" },
  { value: "normal", label: "Normal" },
  { value: "relaxed", label: "Aéré" },
];

export const PDF_HEADING_SIZE_OPTIONS = [
  { value: "small", label: "Petite" },
  { value: "normal", label: "Normale" },
  { value: "large", label: "Grande" },
];

export const PDF_HEADING_LEVELS = [
  { key: "h1", label: "Titre H1" },
  { key: "h2", label: "Titre H2" },
  { key: "h3", label: "Titre H3" },
];

export const PDF_LOGO_POSITION_OPTIONS = [
  { value: "left", label: "Gauche" },
  { value: "center", label: "Centre" },
  { value: "right", label: "Droite" },
];

export const PDF_COVER_ALIGN_OPTIONS = [
  { value: "center", label: "Centré" },
  { value: "left", label: "Aligné à gauche" },
];

export const PDF_PAGE_NUMBER_STYLE_OPTIONS = [
  { value: "n/N", label: "1 / 5" },
  { value: "page-n/N", label: "Page 1 / 5" },
  { value: "page-n", label: "Page 1" },
  { value: "n", label: "1" },
];

// How a markdown blockquote (the cours' « À retenir », the concours' notes)
// is set apart from body text.
export const PDF_QUOTE_STYLE_OPTIONS = [
  { value: "bar", label: "Barre d'accent" },
  { value: "box", label: "Encadré teinté" },
  { value: "plain", label: "Retrait simple" },
];

// Kept only so settings saved before the exact-mm slider existed still
// resolve to the margin they always had.
export const PDF_MARGIN_PRESETS = { compact: 13, normal: 18, large: 24 };

export const PDF_MARGIN_MM_RANGE = { min: 8, max: 35, default: 18 };
export const PDF_BORDER_WIDTH_RANGE = { min: 0.2, max: 2, step: 0.1, default: 0.5 };
export const PDF_BORDER_INSET_RANGE = { min: 2, max: 15, default: 6 };
export const PDF_COVER_LOGO_SIZE_RANGE = { min: 8, max: 70, default: 30 };
export const PDF_COVER_TITLE_SIZE_RANGE = { min: 12, max: 40, default: 22 };
export const PDF_COVER_ACCENT_BAR_RANGE = { min: 2, max: 40, default: 10 };
export const PDF_COVER_RULE_WIDTH_RANGE = { min: 10, max: 150, default: 40 };
// The old range (0.02–0.3, default 0.05) could only produce watermarks
// somewhere between faint and invisible — and since the studio's preview
// used to *inflate* the opacity to keep it visible on screen, a setting of
// 2% looked fine in the editor and printed as nothing at all. The floor is
// now 4% (enabled has to mean visible) and the ceiling 60% for anyone who
// wants an unmistakable one.
export const PDF_WATERMARK_OPACITY_RANGE = { min: 0.04, max: 0.6, step: 0.01, default: 0.08 };
export const PDF_COVER_TEXT_SCALE_RANGE = { min: 0.8, max: 1.5, step: 0.05, default: 1 };

// Point size of the Quran verse opening each PDF (pdfVerse.js) — Arabic with
// full tashkeel reads small next to Latin text at the same size, hence
// bigger values than the body text presets.
export const PDF_VERSE_SIZE_PRESETS = { small: 13, normal: 15, large: 17.5 };

// Base body-text point size — everything else (headings, table cells) scales
// proportionally to whichever of these the admin picks.
export const PDF_FONT_SIZE_PRESETS = { small: 9.5, normal: 10.5, large: 11.5 };

// Multiplies both the line height *and* the gap left after each
// paragraph/heading/list item — "aéré" doesn't just spread lines within a
// paragraph, it also opens up the space between blocks, or the page reads as
// unevenly spaced.
export const PDF_LINE_SPACING_PRESETS = { compact: 0.85, normal: 1, relaxed: 1.25 };

// Per-level heading overrides multiply the level's own base size
// (coursPdf.js: 15/13/11.5pt for H1/H2/H3; concoursPdf.js: 12pt for every
// "#{2,4}" markdown heading) rather than replacing it, so bumping the global
// "Taille du texte" preset still scales headings the way it always did.
export const PDF_HEADING_SIZE_PRESETS = { small: 0.85, normal: 1, large: 1.2 };

// Elements the studio's "Contenu" canvas can drag, and where each one sits
// when it hasn't been moved — expressed as percentages of the page's own
// width/height (not mm) so a saved position holds up at any paper size.
export const PDF_CONTENT_ELEMENTS = [
  { key: "logo", label: "Logo", icon: "🏷️" },
  { key: "watermark", label: "Filigrane", icon: "💧" },
  { key: "footer", label: "Pied de page", icon: "📎" },
  { key: "pageNumber", label: "Numéro de page", icon: "#" },
];

// Elements the studio's "Page de garde" canvas can drag. Unlike the content
// page these are *all* absolutely positioned (there's no text flow on a
// cover), which is what lets the editor be truly WYSIWYG.
export const PDF_COVER_ELEMENTS = [
  { key: "logo", label: "Logo" },
  { key: "eyebrow", label: "Sur-titre" },
  { key: "title", label: "Titre" },
  { key: "subtitle", label: "Description" },
  { key: "date", label: "Date" },
  { key: "rule", label: "Trait" },
  { key: "tagline", label: "Mention" },
];

// Top-edge anchors (see pdfCover.js on why `yPct` is a block's top, not its
// baseline) chosen to reproduce the hand-positioned cover the three builders
// used to draw at 70/118/132/…mm on A4.
export const PDF_COVER_DEFAULT_POSITIONS = {
  logo: { xPct: 50, yPct: 23.6 },
  eyebrow: { xPct: 50, yPct: 38.6 },
  title: { xPct: 50, yPct: 42.2 },
  subtitle: { xPct: 50, yPct: 48.5 },
  date: { xPct: 50, yPct: 56 },
  rule: { xPct: 50, yPct: 62 },
  tagline: { xPct: 50, yPct: 88.9 },
};

// ---- text safety ------------------------------------------------------

// jsPDF's built-in fonts (Helvetica/Times/Courier) can only encode WinAnsi
// (CP1252). Handed a single character outside it, jsPDF re-encodes the
// *whole* string as UTF-16 — and the standard fonts then draw it byte by
// byte. A line like "VNA = 1 750 000 − 1 312 500" (that's U+2212, the real
// minus sign the content actually uses) comes out as spaced-out characters
// with the minus showing as a quote (U+2212 = 0x22 0x12 → '"' + a control
// byte), and since every character now takes two glyphs the line renders
// about twice as wide as splitTextToSize measured it — so it also runs off
// the right margin. Both symptoms, one cause.
//
// Hence: every string that reaches doc.text() goes through
// sanitizePdfText() first. Characters with a sensible ASCII/Latin-1
// equivalent are transliterated (a minus stays a minus, an arrow becomes
// "->"), the rest are dropped rather than left to corrupt their line.
const PDF_TEXT_REPLACEMENTS = {
  // Arrows and relations — by far the most common offenders in the corrigés.
  "−": "-", "‐": "-", "‑": "-", "−": "-", "﹘": "-",
  "→": "->", "➜": "->", "➔": "->", "⇒": "=>", "⟹": "=>", "⟶": "->",
  "←": "<-", "⟵": "<-", "↔": "<->", "⇔": "<=>", "↑": "^", "↓": "v",
  "≈": "~=", "≃": "~=", "≅": "~=", "≤": "<=", "⩽": "<=", "≥": ">=", "⩾": ">=",
  "≠": "!=", "≡": "==", "∝": "prop. a",
  // Maths
  "∞": "infini", "√": "racine", "∑": "somme", "∏": "produit", "∫": "integrale",
  "∈": " dans ", "∉": " hors de ", "∀": "pour tout", "∃": "il existe", "∅": "vide",
  "∂": "d", "∆": "Delta", "·": "·", "⋅": "·", "∙": "·", "•": "•", "‰": "‰",
  // Greek — spelled out, the way coursPdf.js already renders \alpha & co.
  "α": "alpha", "β": "beta", "γ": "gamma", "Γ": "Gamma", "δ": "delta", "Δ": "Delta",
  "ε": "epsilon", "ζ": "zeta", "η": "eta", "θ": "theta", "Θ": "Theta", "ι": "iota",
  "κ": "kappa", "λ": "lambda", "Λ": "Lambda", "μ": "mu", "ν": "nu", "ξ": "xi",
  "π": "pi", "Π": "Pi", "ρ": "rho", "σ": "sigma", "Σ": "Sigma", "τ": "tau",
  "υ": "upsilon", "φ": "phi", "Φ": "Phi", "χ": "chi", "ψ": "psi", "ω": "omega", "Ω": "Omega",
  // Sub/superscripts (¹²³ and ° are already CP1252 and pass through).
  "₀": "_0", "₁": "_1", "₂": "_2", "₃": "_3", "₄": "_4", "₅": "_5", "₆": "_6",
  "₇": "_7", "₈": "_8", "₉": "_9", "ₙ": "_n", "ₜ": "_t", "ᵢ": "_i", "ⱼ": "_j", "ₖ": "_k",
  "⁰": "^0", "⁴": "^4", "⁵": "^5", "⁶": "^6", "⁷": "^7", "⁸": "^8", "⁹": "^9",
  "ᵉ": "e", "ᵗ": "t", "ⁿ": "n",
  // Boxes and marks used as bullets in the quiz/cours content.
  "☐": "[ ]", "☑": "[x]", "☒": "[x]", "✓": "v", "✔": "v", "✗": "x", "✘": "x",
  // Spacing oddities that would otherwise trip the UTF-16 switch.
  " ": " ", " ": " ", " ": " ", " ": " ", "​": "", "️": "",
  "̄": "", "́": "", "̀": "",
};

const PDF_TEXT_REPLACE_RE = new RegExp(`[${Object.keys(PDF_TEXT_REPLACEMENTS).join("")}]`, "gu");
// What survives untouched: printable ASCII, the Latin-1 supplement, and the
// CP1252 extras (curly quotes, dashes, œ/Œ, €, …) jsPDF encodes natively.
const CP1252_EXTRAS = "€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ";
const PDF_TEXT_ALLOWED_RE = new RegExp(`[^\\n\\x20-\\x7E\\xA0-\\xFF${CP1252_EXTRAS}]`, "gu");

// Makes any string safe to hand to doc.text(). Also collapses the runs of
// blanks a dropped emoji leaves behind, so removing decoration doesn't
// leave a visible gap mid-sentence.
export function sanitizePdfText(input) {
  if (input === null || input === undefined) return "";
  return String(input)
    .replace(PDF_TEXT_REPLACE_RE, (ch) => PDF_TEXT_REPLACEMENTS[ch] ?? "")
    .replace(PDF_TEXT_ALLOWED_RE, "")
    .replace(/[ \t]{2,}/g, " ");
}

// ---- small helpers ----------------------------------------------------

export function hexToRgb(hex, fallback = null) {
  const m = /^#?([0-9a-f]{6})$/i.exec(String(hex || "").trim());
  if (!m) return fallback;
  const n = parseInt(m[1], 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export function isHex(value) {
  return /^#[0-9a-f]{6}$/i.test(String(value || "").trim());
}

// Blends an RGB triplet toward white — `amount` is how much of the color is
// kept (0.08 = a faint tint). Used for the tinted blockquote box.
export function tintRgb(rgb, amount) {
  return rgb.map((c) => Math.round(255 - (255 - c) * amount));
}

export function formatPageNumber(style, n, total) {
  switch (style) {
    case "page-n/N":
      return `Page ${n} / ${total}`;
    case "page-n":
      return `Page ${n}`;
    case "n":
      return String(n);
    default:
      return `${n} / ${total}`;
  }
}

// Shortens `text` with an ellipsis until it fits `maxW` mm in the current
// font — for single-line furniture (the running title) that must never wrap.
function fitText(doc, text, maxW) {
  if (doc.getTextWidth(text) <= maxW) return text;
  let t = text;
  while (t.length > 1 && doc.getTextWidth(`${t}…`) > maxW) t = t.slice(0, -1);
  return `${t.trimEnd()}…`;
}

function clamp(value, min, max, fallback) {
  return Number.isFinite(value) ? Math.min(max, Math.max(min, value)) : fallback;
}

function pickOption(options, value, fallback) {
  return options.some((o) => o.value === value) ? value : fallback;
}

function parsePosition(pos) {
  if (!pos || typeof pos !== "object") return null;
  const xPct = Number(pos.xPct);
  const yPct = Number(pos.yPct);
  if (!Number.isFinite(xPct) || !Number.isFinite(yPct)) return null;
  return { xPct: Math.min(100, Math.max(0, xPct)), yPct: Math.min(100, Math.max(0, yPct)) };
}

// Fills a quad (4 points, in perimeter order) as two triangles — jsPDF has
// no native polygon-fill primitive for straight-edged shapes.
function fillQuad(doc, p1, p2, p3, p4) {
  doc.triangle(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1], "F");
  doc.triangle(p1[0], p1[1], p3[0], p3[1], p4[0], p4[1], "F");
}

// Graduation cap + open book mark, drawn with plain vector shapes (no image
// file needed) — mirrors the real logo (app/_shared/chrome.js) point for
// point, using the same 64x64 layout scaled down to `size`. Used as the
// default header/watermark/cover logo whenever no custom one is uploaded.
export function drawLogoMark(doc, x, y, size, color = DEFAULT_ACCENT_RGB) {
  const s = size / 64;
  const p = (fx, fy) => [x + fx * s, y + fy * s];

  doc.setFillColor(...color);
  doc.roundedRect(x, y, size, size, 16 * s, 16 * s, "F");

  // Cap: flattened diamond viewed from above.
  doc.setFillColor(255, 255, 255);
  fillQuad(doc, p(32, 13), p(49, 21), p(32, 29), p(15, 21));

  // Tassel.
  doc.setDrawColor(255, 255, 255);
  doc.setLineWidth(Math.max(0.35, size * 0.03));
  const [tx1, ty1] = p(49, 21);
  const [tx2, ty2] = p(51, 31);
  doc.line(tx1, ty1, tx2, ty2);
  doc.setFillColor(251, 191, 36); // #fbbf24
  const [kx, ky] = p(51, 32.5);
  doc.circle(kx, ky, Math.max(0.3, size * 0.03), "F");

  // Open book: two pages meeting at a spine.
  doc.setFillColor(255, 255, 255);
  fillQuad(doc, p(32, 42), p(13, 37), p(13, 48), p(32, 54));
  fillQuad(doc, p(32, 42), p(51, 37), p(51, 48), p(32, 54));
  doc.setDrawColor(...color);
  doc.setLineWidth(Math.max(0.2, size * 0.017));
  const [sx1, sy1] = p(32, 42);
  const [sx2, sy2] = p(32, 54);
  doc.line(sx1, sy1, sx2, sy2);
}

// Single-color, background-free version of the mark for the "brand"
// watermark style: a solid badge would read as an opaque block sitting on
// top of the page content, so this draws just the cap + book linework.
function drawWatermarkLogo(doc, x, y, size, color = DEFAULT_ACCENT_RGB) {
  const s = size / 64;
  const p = (fx, fy) => [x + fx * s, y + fy * s];

  doc.setFillColor(...color);
  fillQuad(doc, p(32, 13), p(49, 21), p(32, 29), p(15, 21));

  doc.setDrawColor(...color);
  doc.setLineWidth(Math.max(0.4, size * 0.025));
  const [tx1, ty1] = p(49, 21);
  const [tx2, ty2] = p(51, 31);
  doc.line(tx1, ty1, tx2, ty2);
  const [kx, ky] = p(51, 32.5);
  doc.circle(kx, ky, Math.max(0.5, size * 0.025), "F");

  // Two pages with a visible gap at the spine, instead of a separate line,
  // since there's no solid background left for a contrasting line to sit on.
  fillQuad(doc, p(29, 42), p(12, 37), p(12, 48), p(29, 54));
  fillQuad(doc, p(35, 42), p(52, 37), p(52, 48), p(35, 54));
}

// Reads a data: URL's declared MIME subtype into the format string jsPDF's
// addImage() expects ("image/jpeg" -> "JPEG"). Defaults to PNG, the format
// FileReader.readAsDataURL + <canvas> re-encoding both produce.
function dataUrlFormat(dataUrl) {
  const m = /^data:image\/(\w+);/.exec(dataUrl || "");
  const ext = (m ? m[1] : "png").toUpperCase();
  return ext === "JPG" ? "JPEG" : ext;
}

// Loads a data: URL through an <img> just to read its natural pixel size —
// addImage() needs the aspect ratio up front to avoid stretching a
// custom-uploaded logo.
export function getImageDimensions(dataUrl) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight });
    img.onerror = reject;
    img.src = dataUrl;
  });
}

// ---- settings -> branding --------------------------------------------

// The saved settings every public PDF is styled with. /api/settings runs on
// the Worker, and on a cold isolate it can answer with an Error 1102 page
// instead of JSON (README, « une page publique n'invoque pas le Worker ») —
// the PDF then silently came out in the default look, without the cover or
// the colors the admin chose. The static copy deployed with the site
// (/data/settings.json, served from the edge) is the fallback: at worst it's
// the version of the last deploy, never the factory defaults.
export async function loadPdfSettings() {
  for (const url of ["/api/settings", "/data/settings.json"]) {
    try {
      const res = await fetch(url);
      if (!res.ok) continue;
      const data = await res.json();
      if (data && typeof data === "object" && !Array.isArray(data)) return data;
    } catch {
      // next source
    }
  }
  return {};
}

// Resolves the admin's saved PDF settings (or the studio's in-progress,
// unsaved form state when called from its live preview) into a
// ready-to-draw shape — pre-loads the custom logo's dimensions once so the
// draw helpers don't each need to be async, and normalizes every option to a
// safe default so callers never null-check.
export async function resolvePdfBranding(settings = {}) {
  const accentColor = hexToRgb(settings.pdfAccentColor, DEFAULT_ACCENT_RGB);
  const textColor = hexToRgb(settings.pdfTextColor, DEFAULT_TEXT_RGB);
  const fontFamily = pickOption(PDF_FONT_OPTIONS, settings.pdfFontFamily, "helvetica");

  const branding = {
    logo: null, // { dataUrl, format, width, height } or null = default vector mark
    logoPosition: pickOption(PDF_LOGO_POSITION_OPTIONS, settings.pdfLogoPosition, "left"),
    accentColor,
    accentHex: isHex(settings.pdfAccentColor) ? settings.pdfAccentColor : DEFAULT_ACCENT_HEX,
    textColor,
    textHex: isHex(settings.pdfTextColor) ? settings.pdfTextColor : DEFAULT_TEXT_HEX,
    fontFamily,
    fontSize: PDF_FONT_SIZE_PRESETS[settings.pdfFontSize] || PDF_FONT_SIZE_PRESETS.normal,
    fontSizePreset: pickOption(PDF_FONT_SIZE_OPTIONS, settings.pdfFontSize, "normal"),
    lineSpacing: PDF_LINE_SPACING_PRESETS[settings.pdfLineSpacing] || PDF_LINE_SPACING_PRESETS.normal,
    lineSpacingPreset: pickOption(PDF_LINE_SPACING_OPTIONS, settings.pdfLineSpacing, "normal"),
    // pdfMarginMm (the studio's exact-mm slider) wins when present;
    // pdfMargins (the old 3-preset select) is only read for settings saved
    // before the slider existed.
    marginX: Number.isFinite(settings.pdfMarginMm)
      ? clamp(settings.pdfMarginMm, PDF_MARGIN_MM_RANGE.min, PDF_MARGIN_MM_RANGE.max, PDF_MARGIN_MM_RANGE.default)
      : PDF_MARGIN_PRESETS[settings.pdfMargins] || PDF_MARGIN_PRESETS.normal,
    // The thin rule the fiche-de-cours used to draw above *every* H2 —
    // now opt-in, since on a document with many sections it reads as a
    // stray line cutting the page in two rather than as a section divider.
    headingRule: settings.pdfHeadingRule === true,
    quoteStyle: pickOption(PDF_QUOTE_STYLE_OPTIONS, settings.pdfQuoteStyle, "bar"),
    borderEnabled: settings.pdfBorderEnabled === true,
    borderColor: hexToRgb(settings.pdfBorderColor, DEFAULT_ACCENT_RGB),
    borderColorHex: isHex(settings.pdfBorderColor) ? settings.pdfBorderColor : DEFAULT_ACCENT_HEX,
    borderWidth: clamp(settings.pdfBorderWidth, PDF_BORDER_WIDTH_RANGE.min, PDF_BORDER_WIDTH_RANGE.max, PDF_BORDER_WIDTH_RANGE.default),
    borderInset: clamp(settings.pdfBorderInset, PDF_BORDER_INSET_RANGE.min, PDF_BORDER_INSET_RANGE.max, PDF_BORDER_INSET_RANGE.default),
    showPageNumbers: settings.pdfShowPageNumbers === true,
    pageNumberStyle: pickOption(PDF_PAGE_NUMBER_STYLE_OPTIONS, settings.pdfPageNumberStyle, "n/N"),
    showHeader: settings.pdfShowHeader !== false,
    headerRule: settings.pdfHeaderRule !== false,
    // Document title repeated in the header, opposite the logo ("titre
    // courant") — each builder hands the title to addPageFurniture.
    headerTitle: settings.pdfHeaderTitle === true,
    coverPageEnabled: settings.pdfCoverPageEnabled === true,
    // Admin-typed strings get the same treatment as document content — an
    // em-dash or an arrow pasted into the footer would corrupt its line the
    // same way (see sanitizePdfText).
    footerText: sanitizePdfText(settings.pdfFooterText).trim(),
    watermarkEnabled: settings.pdfWatermarkEnabled !== false,
    watermarkText: sanitizePdfText(settings.pdfWatermarkText || "SaadConcours").trim() || "SaadConcours",
    watermarkOpacity: clamp(settings.pdfWatermarkOpacity, PDF_WATERMARK_OPACITY_RANGE.min, PDF_WATERMARK_OPACITY_RANGE.max, PDF_WATERMARK_OPACITY_RANGE.default),
    watermarkStyle: pickOption(PDF_WATERMARK_STYLE_OPTIONS, settings.pdfWatermarkStyle, "brand"),
    watermarkRotation: clamp(settings.pdfWatermarkRotation, -90, 90, 45),
    showSocialFooter: settings.pdfShowSocialFooter !== false,
    socials: PDF_SOCIAL_FIELDS.filter((f) => settings[f.key]).map((f) => ({ ...f, url: settings[f.key] })),
    positions: {
      logo: parsePosition(settings.pdfLayout?.logo),
      watermark: parsePosition(settings.pdfLayout?.watermark),
      footer: parsePosition(settings.pdfLayout?.footer),
      pageNumber: parsePosition(settings.pdfLayout?.pageNumber),
    },
  };

  // Cover page — its own sub-object (and its own editor tab in the studio)
  // since none of it applies outside that one page. Every text block carries
  // its own absolute position, so the studio can lay the cover out visually
  // instead of just toggling parts of a fixed template on and off.
  const coverPositions = {};
  for (const el of PDF_COVER_ELEMENTS) {
    coverPositions[el.key] = parsePosition(settings.pdfCoverLayout?.[el.key]) || PDF_COVER_DEFAULT_POSITIONS[el.key];
  }
  branding.cover = {
    enabled: branding.coverPageEnabled,
    align: pickOption(PDF_COVER_ALIGN_OPTIONS, settings.pdfCoverAlign, "center"),
    backgroundColor: hexToRgb(settings.pdfCoverBackgroundColor, null),
    backgroundColorHex: isHex(settings.pdfCoverBackgroundColor) ? settings.pdfCoverBackgroundColor : "",
    accentBar: settings.pdfCoverAccentBar === true,
    accentBarHeight: clamp(settings.pdfCoverAccentBarHeight, PDF_COVER_ACCENT_BAR_RANGE.min, PDF_COVER_ACCENT_BAR_RANGE.max, PDF_COVER_ACCENT_BAR_RANGE.default),
    showLogo: settings.pdfCoverShowLogo !== false,
    logoSize: clamp(settings.pdfCoverLogoSize, PDF_COVER_LOGO_SIZE_RANGE.min, PDF_COVER_LOGO_SIZE_RANGE.max, PDF_COVER_LOGO_SIZE_RANGE.default),
    showEyebrow: settings.pdfCoverShowEyebrow !== false,
    eyebrowColor: hexToRgb(settings.pdfCoverEyebrowColor, accentColor),
    eyebrowColorHex: isHex(settings.pdfCoverEyebrowColor) ? settings.pdfCoverEyebrowColor : (isHex(settings.pdfAccentColor) ? settings.pdfAccentColor : DEFAULT_ACCENT_HEX),
    titleSize: clamp(settings.pdfCoverTitleSize, PDF_COVER_TITLE_SIZE_RANGE.min, PDF_COVER_TITLE_SIZE_RANGE.max, PDF_COVER_TITLE_SIZE_RANGE.default),
    titleColor: hexToRgb(settings.pdfCoverTitleColor, textColor),
    titleColorHex: isHex(settings.pdfCoverTitleColor) ? settings.pdfCoverTitleColor : (isHex(settings.pdfTextColor) ? settings.pdfTextColor : DEFAULT_TEXT_HEX),
    showDescription: settings.pdfCoverShowDescription !== false,
    subtitleColor: hexToRgb(settings.pdfCoverSubtitleColor, [100, 104, 116]),
    subtitleColorHex: isHex(settings.pdfCoverSubtitleColor) ? settings.pdfCoverSubtitleColor : "#646874",
    showDate: settings.pdfCoverShowDate === true,
    showRule: settings.pdfCoverShowRule !== false,
    ruleWidth: clamp(settings.pdfCoverRuleWidth, PDF_COVER_RULE_WIDTH_RANGE.min, PDF_COVER_RULE_WIDTH_RANGE.max, PDF_COVER_RULE_WIDTH_RANGE.default),
    showTagline: settings.pdfCoverShowTagline !== false,
    tagline: sanitizePdfText(settings.pdfCoverTagline || "SaadConcours").trim() || "SaadConcours",
    taglineColor: hexToRgb(settings.pdfCoverTaglineColor, [150, 154, 165]),
    taglineColorHex: isHex(settings.pdfCoverTaglineColor) ? settings.pdfCoverTaglineColor : "#969aa5",
    // One knob for every secondary line (sur-titre, description, date,
    // mention) — the title has its own size, the rest scale together rather
    // than adding four more sliders nobody would balance by hand.
    textScale: clamp(settings.pdfCoverTextScale, PDF_COVER_TEXT_SCALE_RANGE.min, PDF_COVER_TEXT_SCALE_RANGE.max, PDF_COVER_TEXT_SCALE_RANGE.default),
    // A cover with the running header, footer and watermark stamped on it
    // reads as "page 1 of the document" rather than as a cover — off by
    // default, but restorable for anyone who liked it that way.
    cleanPage: settings.pdfCoverCleanPage !== false,
    positions: coverPositions,
  };

  // Quran verse at the top of the first content page (pdfVerse.js). On
  // unless the studio switched it off, so it shows up without a settings
  // save; unknown themes are ignored, and an empty list means every theme
  // rather than silently no verse at all. `pinned` is only ever set by the
  // studio's preview, to show a chosen verse instead of a random one.
  const verseThemes = Array.isArray(settings.pdfVerseThemes)
    ? settings.pdfVerseThemes.filter((t) => PDF_VERSE_THEMES.some((o) => o.value === t))
    : [];
  branding.verse = {
    enabled: settings.pdfVerseEnabled !== false,
    themes: verseThemes.length ? verseThemes : PDF_VERSE_THEMES.map((t) => t.value),
    size: PDF_VERSE_SIZE_PRESETS[settings.pdfVerseSize] || PDF_VERSE_SIZE_PRESETS.normal,
    boxed: settings.pdfVerseBoxed !== false,
    pinned: null,
  };

  // Per-level (H1/H2/H3) overrides — unset fields fall back to the
  // document's own font family/text color, so a level nobody touched still
  // looks like ordinary body text at a bigger size.
  branding.headings = {};
  for (const { key } of PDF_HEADING_LEVELS) {
    const raw = settings.pdfHeadings?.[key];
    branding.headings[key] = {
      fontFamily: pickOption(PDF_FONT_OPTIONS, raw?.fontFamily, fontFamily),
      sizeScale: PDF_HEADING_SIZE_PRESETS[raw?.size] || PDF_HEADING_SIZE_PRESETS.normal,
      sizePreset: pickOption(PDF_HEADING_SIZE_OPTIONS, raw?.size, "normal"),
      color: hexToRgb(raw?.color, textColor),
      colorHex: isHex(raw?.color) ? raw.color : branding.textHex,
    };
  }

  if (settings.pdfLogoDataUrl) {
    try {
      const { width, height } = await getImageDimensions(settings.pdfLogoDataUrl);
      branding.logo = { dataUrl: settings.pdfLogoDataUrl, format: dataUrlFormat(settings.pdfLogoDataUrl), width, height };
    } catch {
      branding.logo = null; // corrupt/unreadable stored logo — fall back to the default mark
    }
  }

  return branding;
}


// The vertical band flowing text may occupy. Horizontally the content area
// is simply `marginX` on both sides; vertically it's the same margin, except
// where the running header or footer strip sits at its default spot and
// would otherwise be written over.
//
// `top` is the *baseline* of the first line, so the header reserve has to
// clear the tallest first line a page can start with, not just body text: at
// 20mm a 15pt H1 (bigger with "Grande") had its capitals touching the header
// rule at 16.5mm. 24mm leaves ~2.5mm under the rule for the largest heading.
export function contentBounds(branding, pageH) {
  const marginX = branding.marginX ?? 18;
  const headerInPlace = branding.showHeader !== false && !branding.positions?.logo;
  const footerInPlace = footerVisible(branding) && !branding.positions?.footer;
  return {
    top: Math.max(marginX, headerInPlace ? 24 : 0),
    bottom: pageH - Math.max(marginX, footerInPlace ? 16 : 0),
  };
}

// First page the running header/footer/watermark/border apply to: page 2
// when a "clean" cover page occupies page 1, page 1 otherwise. Every
// per-page loop below starts here so the cover keeps its own layout instead
// of being overprinted by document furniture.
export function firstFurniturePage(branding) {
  return branding.coverPageEnabled && branding.cover?.cleanPage !== false ? 2 : 1;
}

function footerVisible(branding) {
  return branding.showSocialFooter !== false || Boolean(branding.footerText) || Boolean(branding.showPageNumbers);
}

// ---- geometry shared by the draw code and the studio ------------------
//
// The admin's PDF studio puts a draggable handle on each piece of furniture.
// For a handle to sit exactly on what gets printed, the studio asks these
// same functions where things are (pdfFurnitureAnchors) instead of keeping
// its own copy of the numbers — the previous studio guessed a default spot
// for each element, so switching a position on made the element jump.

const HEADER_ICON_MM = 7;

// Size of the running header's brand block and a function drawing it with
// its top-left corner at (x, y): the uploaded logo, or the vector mark +
// "SaadConcours" wordmark + clickable site URL.
function headerBlock(doc, branding) {
  const font = branding.fontFamily || "helvetica";
  const accent = branding.accentColor || DEFAULT_ACCENT_RGB;
  if (branding.logo) {
    const h = 9;
    const w = (branding.logo.width / branding.logo.height) * h;
    return { w, h, draw: (x, y) => doc.addImage(branding.logo.dataUrl, branding.logo.format, x, y, w, h) };
  }
  doc.setFont(font, "bold");
  doc.setFontSize(12);
  const textW = doc.getTextWidth("Saad") + doc.getTextWidth("Concours");
  return {
    w: HEADER_ICON_MM + 2.5 + textW,
    h: HEADER_ICON_MM + 4.5, // icon + the URL line drawn below it
    draw: (x, y) => {
      const iconY = y + 1;
      drawLogoMark(doc, x, iconY, HEADER_ICON_MM, accent);
      const textX = x + HEADER_ICON_MM + 2.5;
      doc.setFont(font, "bold");
      doc.setFontSize(12);
      doc.setTextColor(25, 28, 35);
      doc.text("Saad", textX, iconY + HEADER_ICON_MM * 0.65);
      const saadW = doc.getTextWidth("Saad");
      doc.setTextColor(...accent);
      doc.text("Concours", textX + saadW, iconY + HEADER_ICON_MM * 0.65);

      doc.setFont(font, "normal");
      doc.setFontSize(7.5);
      doc.setTextColor(130, 138, 155);
      doc.textWithLink(SITE_HOST, textX, iconY + HEADER_ICON_MM + 2.2, { url: SITE_URL });
    },
  };
}

// Top-left corner of the header block. A custom position is the block's
// *center* (the studio's handle is centered on it), converted back here.
function headerBlockOrigin(branding, block, pageW, pageH) {
  const customPos = branding.positions?.logo;
  if (customPos) {
    return { x: (customPos.xPct / 100) * pageW - block.w / 2, y: (customPos.yPct / 100) * pageH - block.h / 2 };
  }
  const marginX = branding.marginX ?? 18;
  const position = branding.logoPosition || "left";
  const x = position === "center" ? (pageW - block.w) / 2 : position === "right" ? pageW - marginX - block.w : marginX;
  return { x, y: 4 };
}

function watermarkCenter(branding, pageW, pageH) {
  const pos = branding.positions?.watermark;
  return pos ? { x: (pos.xPct / 100) * pageW, y: (pos.yPct / 100) * pageH } : { x: pageW / 2, y: pageH / 2 };
}

// Horizontal center and first baseline of the footer block.
function footerOrigin(branding, pageW, pageH) {
  const pos = branding.positions?.footer;
  return pos ? { x: (pos.xPct / 100) * pageW, y: (pos.yPct / 100) * pageH } : { x: pageW / 2, y: pageH - 10 };
}

// A custom page-number position is the label's center; the default spot is
// right-aligned on the margin.
function pageNumberPlacement(branding, pageW, pageH) {
  const pos = branding.positions?.pageNumber;
  if (pos) return { x: (pos.xPct / 100) * pageW, y: (pos.yPct / 100) * pageH, align: "center" };
  return { x: pageW - (branding.marginX ?? 18), y: pageH - 6, align: "right" };
}

// Page numbering skips a clean cover: the first content page is "1", not "2".
function pageNumbering(doc, branding) {
  const offset = firstFurniturePage(branding) - 1;
  return { offset, total: Math.max(1, doc.internal.getNumberOfPages() - offset) };
}

// Where each draggable element currently sits, as percentages of the page —
// the same anchor semantics as the saved `pdfLayout` positions, so a handle
// dropped where it already is changes nothing. Elements that are switched
// off are simply absent. Call on a finished document (fonts are measured).
export function pdfFurnitureAnchors(doc, branding) {
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const pct = (x, y) => ({ xPct: (x / pageW) * 100, yPct: (y / pageH) * 100 });
  const anchors = {};

  if (branding.showHeader !== false) {
    const block = headerBlock(doc, branding);
    const o = headerBlockOrigin(branding, block, pageW, pageH);
    anchors.logo = pct(o.x + block.w / 2, o.y + block.h / 2);
  }
  // "tiled" covers the whole page by design: there's no single spot to drag.
  if (branding.watermarkEnabled !== false && branding.watermarkStyle !== "tiled") {
    const c = watermarkCenter(branding, pageW, pageH);
    anchors.watermark = pct(c.x, c.y);
  }
  if (branding.showSocialFooter !== false || branding.footerText) {
    const f = footerOrigin(branding, pageW, pageH);
    anchors.footer = pct(f.x, f.y);
  }
  if (branding.showPageNumbers) {
    const { total } = pageNumbering(doc, branding);
    doc.setFont(branding.fontFamily || "helvetica", "normal");
    doc.setFontSize(7.5);
    const labelW = doc.getTextWidth(formatPageNumber(branding.pageNumberStyle, 1, total));
    const p = pageNumberPlacement(branding, pageW, pageH);
    anchors.pageNumber = pct(p.align === "right" ? p.x - labelW / 2 : p.x, p.y);
  }
  return anchors;
}

// ---- watermark --------------------------------------------------------

// "brand": small upright logo mark above the upright wordmark, both centered
// on (cx, cy) as one unit — the default look.
function drawBrandWatermark(doc, branding, text, cx, cy) {
  const markSize = 26;
  if (branding.logo) {
    const w = markSize;
    const h = (branding.logo.height / branding.logo.width) * w;
    doc.addImage(branding.logo.dataUrl, branding.logo.format, cx - w / 2, cy - 30, w, h);
  } else {
    drawWatermarkLogo(doc, cx - markSize / 2, cy - 30, markSize, branding.accentColor);
  }
  doc.setFont(branding.fontFamily, "bold");
  doc.setFontSize(30);
  doc.setTextColor(...branding.accentColor);
  doc.text(text, cx, cy + 6, { align: "center" });
}

// "diagonal": a single classic rotated stamp through (cx, cy) — no logo,
// the way most "DRAFT"/"CONFIDENTIEL" stationery watermarks look.
function drawDiagonalWatermark(doc, branding, text, cx, cy) {
  doc.setFont(branding.fontFamily, "bold");
  doc.setFontSize(34);
  doc.setTextColor(...branding.accentColor);
  doc.text(text, cx, cy, { align: "center", angle: branding.watermarkRotation });
}

// "tiled": the same rotated text repeated in a loose grid across the full
// page — anything past the page edge is clipped by the page itself.
function drawTiledWatermark(doc, branding, text, pageW, pageH) {
  doc.setFont(branding.fontFamily, "bold");
  doc.setFontSize(15);
  doc.setTextColor(...branding.accentColor);
  const stepX = 68;
  const stepY = 50;
  for (let gy = 0; gy < pageH + stepY; gy += stepY) {
    for (let gx = 0; gx < pageW + stepX; gx += stepX) {
      doc.text(text, gx, gy, { align: "center", angle: branding.watermarkRotation });
    }
  }
}

// Faint watermark stamped once per page. Called right before doc.save(),
// after all content (and page breaks) has been added — jsPDF only exposes
// the final page count once the document is fully built.
export function addWatermark(doc, branding = {}) {
  if (branding.watermarkEnabled === false) return;
  const text = branding.watermarkText || "SaadConcours";
  const opacity = branding.watermarkOpacity ?? 0.05;
  const style = branding.watermarkStyle || "brand";

  const pageCount = doc.internal.getNumberOfPages();
  for (let i = firstFurniturePage(branding); i <= pageCount; i++) {
    doc.setPage(i);
    const pageW = doc.internal.pageSize.getWidth();
    const pageH = doc.internal.pageSize.getHeight();
    const c = watermarkCenter(branding, pageW, pageH);
    doc.saveGraphicsState();
    doc.setGState(new doc.GState({ opacity }));
    if (style === "tiled") drawTiledWatermark(doc, branding, text, pageW, pageH);
    else if (style === "diagonal") drawDiagonalWatermark(doc, branding, text, c.x, c.y);
    else drawBrandWatermark(doc, branding, text, c.x, c.y);
    doc.restoreGraphicsState();
  }
}

// ---- header / footer / border ----------------------------------------

// Branded header on every content page — logo + "SaadConcours" wordmark +
// clickable URL by default, or just the uploaded logo image when one is set,
// with an optional thin rule underneath and, optionally, the document's
// title on the opposite side, so a printed or forwarded PDF is unmistakably
// sourced from the site.
export function addSiteHeader(doc, branding = {}, meta = {}) {
  if (branding.showHeader === false) return;
  const pageCount = doc.internal.getNumberOfPages();
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const marginX = branding.marginX ?? 18;
  const customPos = branding.positions?.logo;
  const block = headerBlock(doc, branding);
  const origin = headerBlockOrigin(branding, block, pageW, pageH);
  const runningTitle = branding.headerTitle ? sanitizePdfText(meta.title).replace(/\s+/g, " ").trim() : "";

  for (let i = firstFurniturePage(branding); i <= pageCount; i++) {
    doc.setPage(i);
    block.draw(origin.x, origin.y);
    if (runningTitle) drawRunningTitle(doc, branding, runningTitle, block, origin, pageW);
    // The rule under the header assumes the logo sits near the top — once
    // it's been dragged elsewhere, a fixed line at 16.5mm would just read as
    // a stray mark unrelated to it.
    if (!customPos && branding.headerRule !== false) {
      doc.setDrawColor(225, 228, 235);
      doc.setLineWidth(0.2);
      doc.line(marginX, 16.5, pageW - marginX, 16.5);
    }
  }
}

// Small grey title on the side of the header the logo isn't on, shortened
// with an ellipsis rather than ever running into the logo.
function drawRunningTitle(doc, branding, title, block, origin, pageW) {
  const marginX = branding.marginX ?? 18;
  const logoInBand = origin.y < 18;
  const logoCenter = origin.x + block.w / 2;
  const onRight = logoCenter <= pageW / 2 + 1;
  const available = !logoInBand
    ? pageW - marginX * 2
    : onRight
      ? pageW - marginX - (origin.x + block.w) - 8
      : origin.x - marginX - 8;
  if (available < 25) return;
  doc.setFont(branding.fontFamily || "helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(130, 138, 155);
  const text = fitText(doc, title, available);
  const y = 11;
  if (onRight) doc.text(text, pageW - marginX, y, { align: "right" });
  else doc.text(text, marginX, y);
}

// Bottom-of-page strip stamped once per content page: an optional custom
// mention line, the "site + social links" line, and optional page numbers —
// stacked in that order so any subset can be toggled off without leaving a
// gap. Plain text/links only (jsPDF has no SVG support, and rasterizing an
// icon per network per page isn't worth it).
export function addFooter(doc, branding = {}) {
  const showSocial = branding.showSocialFooter !== false;
  const customText = (branding.footerText || "").trim();
  const showPageNumbers = !!branding.showPageNumbers;
  if (!showSocial && !customText && !showPageNumbers) return;

  const font = branding.fontFamily || "helvetica";
  const pageCount = doc.internal.getNumberOfPages();
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const marginX = branding.marginX ?? 18;
  const footerCustom = Boolean(branding.positions?.footer);
  const origin = footerOrigin(branding, pageW, pageH);
  const numberPlace = pageNumberPlacement(branding, pageW, pageH);
  const { offset, total } = pageNumbering(doc, branding);

  for (let i = firstFurniturePage(branding); i <= pageCount; i++) {
    doc.setPage(i);
    let y = origin.y;

    // Same reasoning as the header rule: only draw it while the block still
    // sits at its default bottom-of-page spot.
    if ((showSocial || customText) && !footerCustom) {
      doc.setDrawColor(225, 228, 235);
      doc.setLineWidth(0.2);
      doc.line(marginX, y - 3.5, pageW - marginX, y - 3.5);
    }

    if (customText) {
      doc.setFont(font, "italic");
      doc.setFontSize(7.5);
      doc.setTextColor(140, 144, 155);
      doc.text(customText, origin.x, y, { align: "center" });
      y += 4.5;
    }

    if (showSocial) {
      const parts = [{ label: SITE_HOST, url: SITE_URL }, ...(branding.socials || []).map((s) => ({ label: s.label, url: s.url }))];
      doc.setFont(font, "normal");
      doc.setFontSize(7.5);
      const sep = "   ·   ";
      const sepW = doc.getTextWidth(sep);
      const totalW = parts.reduce((sum, p, idx) => sum + doc.getTextWidth(p.label) + (idx > 0 ? sepW : 0), 0);
      let x = origin.x - totalW / 2;
      parts.forEach((p, idx) => {
        if (idx > 0) {
          doc.setTextColor(190, 194, 202);
          doc.text(sep, x, y);
          x += sepW;
        }
        doc.setTextColor(120, 128, 145);
        doc.textWithLink(p.label, x, y, { url: p.url });
        x += doc.getTextWidth(p.label);
      });
    }

    if (showPageNumbers) {
      doc.setFont(font, "normal");
      doc.setFontSize(7.5);
      doc.setTextColor(150, 154, 165);
      doc.text(formatPageNumber(branding.pageNumberStyle, i - offset, total), numberPlace.x, numberPlace.y, { align: numberPlace.align });
    }
  }
}

// Decorative rectangle framing every content page, inset from the physical
// page edge by `branding.borderInset` — independent of `branding.marginX`
// (the content-safe area body text wraps to), since a page border sits
// outside the text block, not at its edge.
export function addPageBorder(doc, branding = {}) {
  if (!branding.borderEnabled) return;
  const inset = branding.borderInset ?? PDF_BORDER_INSET_RANGE.default;
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = firstFurniturePage(branding); i <= pageCount; i++) {
    doc.setPage(i);
    const pageW = doc.internal.pageSize.getWidth();
    const pageH = doc.internal.pageSize.getHeight();
    doc.setDrawColor(...(branding.borderColor || DEFAULT_ACCENT_RGB));
    doc.setLineWidth(branding.borderWidth ?? PDF_BORDER_WIDTH_RANGE.default);
    doc.rect(inset, inset, pageW - inset * 2, pageH - inset * 2);
  }
}

// Everything a finished document needs stamped on top of it, in the one
// order that looks right (watermark underneath, border, then header/footer
// over both). `meta.title` feeds the optional running title in the header.
export function addPageFurniture(doc, branding = {}, meta = {}) {
  addWatermark(doc, branding);
  addPageBorder(doc, branding);
  addSiteHeader(doc, branding, meta);
  addFooter(doc, branding);
}

// Draws the accent bar / tinted band that marks one line of a blockquote,
// *before* the line's text so the tint sits underneath it. Line by line
// rather than one rectangle per quote: consecutive line boxes join up
// seamlessly, and a quote that breaks across pages is handled for free.
//   top/height — the line box, in mm; x — where the quote's bar sits;
//   width — the text column the tinted box has to cover.
export function drawQuoteLine(doc, branding, { x, top, height, width }) {
  const style = branding.quoteStyle || "bar";
  if (style === "plain") return;
  const accent = branding.accentColor || DEFAULT_ACCENT_RGB;
  if (style === "box") {
    doc.setFillColor(...tintRgb(accent, 0.08));
    doc.rect(x, top, width, height, "F");
  }
  doc.setFillColor(...accent);
  doc.rect(x, top, 0.9, height, "F");
}
