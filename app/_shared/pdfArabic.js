// Arabic text in the jsPDF exports (cours de droit en arabe…).
//
// jsPDF's built-in fonts only encode CP1252, so an Arabic module used to come
// out of "Télécharger PDF" with every Arabic letter stripped by
// sanitizePdfText — only the Latin bits (LMD, SARL, 104.12…) survived. Two
// things are needed instead:
//
// 1. A real TTF with Arabic glyphs, embedded in the PDF: Amiri (OFL,
//    self-hosted in public/fonts/pdf/ — it also covers Latin, digits and
//    punctuation, so mixed lines need no font switch).
// 2. Right-to-left layout. jsPDF's arabic plugin does contextual shaping
//    (initial/medial/final forms, lam-alef) correctly, but its bidi plugin
//    lays a whole line out left-to-right — words come out in reverse order.
//    So the line is put in visual order here (toVisual) and handed to jsPDF
//    flagged as already visual, which its bidi pass then leaves untouched.
//
// Tashkeel is dropped: jsPDF has no mark positioning, and course text is
// unvowelled anyway (the Quran verse, which needs it, is a canvas image —
// see pdfVerse.js).

export const ARABIC_FONT = "Amiri";
const FONT_FILES = { normal: "/fonts/pdf/Amiri-Regular.ttf", bold: "/fonts/pdf/Amiri-Bold.ttf" };

const AR = "؀-ۿݐ-ݿﭐ-﷿ﹰ-﻿";
const ARABIC_RE = new RegExp(`[${AR}]`);
const ARABIC_RUN_RE = new RegExp(`[${AR}]+|[^${AR}]+`, "g");
const TASHKEEL_RE = /[ً-ٰٟ]/g;
// A "strong" left-to-right character: Latin letters (with accents) and digits.
const LTR_RE = /[A-Za-z0-9À-ɏ]/;
const MIRROR = { "(": ")", ")": "(", "[": "]", "]": "[", "{": "}", "}": "{", "<": ">", ">": "<", "«": "»", "»": "«" };

export function hasArabic(text) {
  return ARABIC_RE.test(String(text || ""));
}

export function stripTashkeel(text) {
  return text.replace(TASHKEEL_RE, "");
}

const reverse = (s) => [...s].reverse().join("");
const mirror = (s) => [...s].map((c) => MIRROR[c] || c).join("");
// Neutral characters (brackets, colon, dash…) read in the line's direction:
// reversed and mirrored in a right-to-left line.
const neutralToVisual = (s) => mirror(reverse(s));

// One whitespace-free word that contains Arabic: its Arabic stretches are
// shaped then reversed, and the stretches themselves are laid out right to
// left ("2024،" → "،2024", "(الأول)" keeps its brackets on the right sides).
function arabicWordToVisual(doc, word) {
  return (word.match(ARABIC_RUN_RE) || [])
    .reverse()
    .map((run) => {
      if (ARABIC_RE.test(run)) return reverse(doc.processArabic(run));
      return LTR_RE.test(run) ? run : neutralToVisual(run);
    })
    .join("");
}

// Logical → visual order for a line of a right-to-left paragraph. Latin
// stretches ("SARL SA PESTEL", "(LMD)", "104.12") stay left-to-right inside
// the line; only the words around them are reordered. Strings without any
// Arabic are returned as they are.
export function toVisual(doc, text) {
  const str = String(text ?? "");
  if (!ARABIC_RE.test(str)) return str;
  const words = stripTashkeel(str).split(/\s+/).filter(Boolean);
  const kind = (w) => (ARABIC_RE.test(w) ? "ar" : LTR_RE.test(w) ? "ltr" : "neutral");
  const items = [];
  for (let i = 0; i < words.length; i++) {
    if (kind(words[i]) !== "ltr") {
      items.push(kind(words[i]) === "ar" ? arabicWordToVisual(doc, words[i]) : neutralToVisual(words[i]));
      continue;
    }
    // Latin group: Latin words plus any neutral words *between* two of them.
    let j = i;
    for (let k = i + 1; k < words.length && kind(words[k]) !== "ar"; k++) {
      if (kind(words[k]) === "ltr") j = k;
    }
    const group = words.slice(i, j + 1).join(" ");
    const [, lead, core, trail] = /^([^A-Za-z0-9À-ɏ]*)([\s\S]*?)([^A-Za-z0-9À-ɏ]*)$/.exec(group);
    items.push(neutralToVisual(trail) + core + neutralToVisual(lead));
    i = j;
  }
  return items.reverse().join(" ");
}

// The TTF files, fetched once per page and kept as jsPDF's binary strings.
let filesPromise = null;
function loadFontFiles() {
  if (!filesPromise) {
    filesPromise = Promise.all(
      Object.entries(FONT_FILES).map(async ([style, url]) => {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Police arabe introuvable : ${url}`);
        const bytes = new Uint8Array(await res.arrayBuffer());
        let bin = "";
        for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
        return [style, bin];
      })
    ).then(Object.fromEntries);
    filesPromise.catch(() => {
      filesPromise = null; // a failed fetch can be retried on the next click
    });
  }
  return filesPromise;
}

// Registers Amiri on `doc` (italic maps to the upright faces: Arabic has no
// true italic) and makes every doc.text()/getTextWidth() call on it lay
// Arabic out right to left — the autotable cells, the cover and the running
// title included, without each of them knowing about it.
export function enableArabic(doc, files) {
  const { normal, bold } = files;
  doc.addFileToVFS("Amiri-Regular.ttf", normal);
  doc.addFileToVFS("Amiri-Bold.ttf", bold);
  doc.addFont("Amiri-Regular.ttf", ARABIC_FONT, "normal");
  doc.addFont("Amiri-Regular.ttf", ARABIC_FONT, "italic");
  doc.addFont("Amiri-Bold.ttf", ARABIC_FONT, "bold");
  doc.addFont("Amiri-Bold.ttf", ARABIC_FONT, "bolditalic");

  const text = doc.text.bind(doc);
  const width = doc.getTextWidth.bind(doc);
  doc.text = (value, x, y, options, transform) => {
    if (typeof value !== "string" && !Array.isArray(value)) return text(value, x, y, options, transform);
    if (!(Array.isArray(value) ? value : [value]).some(hasArabic)) return text(value, x, y, options, transform);
    const visual = Array.isArray(value) ? value.map((v) => toVisual(doc, v)) : toVisual(doc, value);
    return text(visual, x, y, { ...options, isInputVisual: true, isOutputVisual: true }, transform);
  };
  doc.getTextWidth = (value) => width(toVisual(doc, value));
  return doc;
}

export async function loadArabicPdfFont(doc) {
  return enableArabic(doc, await loadFontFiles());
}
