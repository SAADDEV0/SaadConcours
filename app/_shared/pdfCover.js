"use client";

// The optional cover page every generated PDF can open with — one
// implementation shared by the fiche de cours, the énoncé/corrigé de
// concours and the PDF d'évaluation (each used to carry its own near-identical
// 70-line copy, which is why the three drifted apart).
//
// Every block is absolutely positioned from `branding.cover.positions`
// (percentages of the page), so the admin's PDF studio can lay the cover out
// by dragging instead of just toggling parts of a fixed template on and off.
// Anchor semantics are deliberately the same as CSS so the studio's canvas
// and this file agree pixel for pixel: `xPct` is the block's alignment edge
// (its horizontal center when centered, its left edge when left-aligned) and
// `yPct` is the *top* of the block, not the first baseline.

import { drawLogoMark, PDF_COVER_DEFAULT_POSITIONS } from "./pdfTheme";

const PT_TO_MM = 0.3528;
// Distance from the top of a line box down to its baseline, and from one
// line's top to the next — both as a multiple of the point size, in mm.
// Matches the 22pt/9mm step the hand-written covers used before.
export const COVER_ASCENT_RATIO = 0.30;
export const COVER_LINE_RATIO = 0.42;

// Point sizes of every non-title block, before `branding.cover.textScale`.
export const COVER_BASE_SIZES = {
  eyebrow: 11,
  subtitle: 11,
  date: 9.5,
  tagline: 9.5,
};

export function coverAscentMM(sizePt) {
  return sizePt * COVER_ASCENT_RATIO;
}

export function coverLineHeightMM(sizePt) {
  return sizePt * COVER_LINE_RATIO;
}

export function coverPosition(cover, key) {
  return cover?.positions?.[key] || PDF_COVER_DEFAULT_POSITIONS[key];
}

// The three documents feed different fields into the same cover shape, so
// each builder hands over an already-resolved content object rather than its
// own domain model.
//   eyebrow  — small uppercase line above the title (module, "CONCOURS", …)
//   title    — the big line(s)
//   subtitle — zero or more description lines under the title
//   date     — pre-formatted; omitted entirely when the block is off
export function drawCoverPage(doc, branding, content = {}) {
  const cover = branding.cover || {};
  const font = branding.fontFamily || "helvetica";
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const marginX = branding.marginX ?? 18;
  const align = cover.align === "left" ? "left" : "center";
  const scale = cover.textScale || 1;
  const maxWidth = pageW - marginX * 2;

  const xOf = (key) => (coverPosition(cover, key).xPct / 100) * pageW;
  const yOf = (key) => (coverPosition(cover, key).yPct / 100) * pageH;

  // Text is drawn from the block's top edge: convert to the baseline jsPDF
  // wants, then step one line height per wrapped line.
  const drawText = (key, lines, { size, bold = false, color, italic = false }) => {
    const list = (Array.isArray(lines) ? lines : [lines]).filter((l) => String(l || "").trim());
    if (!list.length) return;
    doc.setFont(font, bold ? "bold" : italic ? "italic" : "normal");
    doc.setFontSize(size);
    doc.setTextColor(...color);
    const x = xOf(key);
    // Wrapping width shrinks near the edges so a left-aligned or dragged
    // block never runs off the page.
    const avail = align === "left" ? Math.max(30, pageW - marginX - x) : Math.max(30, Math.min(x - marginX, pageW - marginX - x) * 2);
    let y = yOf(key) + coverAscentMM(size);
    for (const line of list) {
      for (const wrapped of doc.splitTextToSize(String(line), Math.min(avail, maxWidth))) {
        doc.text(wrapped, x, y, { align });
        y += coverLineHeightMM(size);
      }
    }
  };

  if (cover.backgroundColor) {
    doc.setFillColor(...cover.backgroundColor);
    doc.rect(0, 0, pageW, pageH, "F");
  }

  if (cover.accentBar) {
    doc.setFillColor(...branding.accentColor);
    doc.rect(0, 0, pageW, cover.accentBarHeight ?? 10, "F");
  }

  if (cover.showLogo !== false && (cover.logoSize ?? 30) > 0) {
    const size = cover.logoSize ?? 30;
    const x = xOf("logo") - (align === "left" ? 0 : size / 2);
    const y = yOf("logo");
    if (branding.logo) {
      const h = (branding.logo.height / branding.logo.width) * size;
      doc.addImage(branding.logo.dataUrl, branding.logo.format, x, y, size, h);
    } else {
      drawLogoMark(doc, x, y, size, branding.accentColor);
    }
  }

  if (cover.showEyebrow !== false && content.eyebrow) {
    drawText("eyebrow", String(content.eyebrow).toUpperCase(), {
      size: COVER_BASE_SIZES.eyebrow * scale,
      bold: true,
      color: cover.eyebrowColor || branding.accentColor,
    });
  }

  drawText("title", content.title, {
    size: cover.titleSize ?? 22,
    bold: true,
    color: cover.titleColor || branding.textColor,
  });

  if (cover.showDescription !== false) {
    drawText("subtitle", content.subtitle || [], {
      size: COVER_BASE_SIZES.subtitle * scale,
      color: cover.subtitleColor || [100, 104, 116],
    });
  }

  if (cover.showDate && content.date) {
    drawText("date", content.date, {
      size: COVER_BASE_SIZES.date * scale,
      color: [140, 144, 155],
    });
  }

  if (cover.showRule !== false) {
    const width = cover.ruleWidth ?? 40;
    const x = xOf("rule");
    const y = yOf("rule");
    const x1 = align === "left" ? x : x - width / 2;
    doc.setDrawColor(...branding.accentColor);
    doc.setLineWidth(0.6);
    doc.line(x1, y, x1 + width, y);
  }

  if (cover.showTagline !== false && cover.tagline) {
    drawText("tagline", cover.tagline, {
      size: COVER_BASE_SIZES.tagline * scale,
      color: cover.taglineColor || [150, 154, 165],
    });
  }
}

// Draws the cover on the document's current (first) page and opens a fresh
// page for the content, or does nothing when covers are off. Returns true
// when a cover was drawn, so callers can reset their own cursor.
export function maybeDrawCoverPage(doc, branding, content) {
  if (!branding.coverPageEnabled) return false;
  drawCoverPage(doc, branding, content);
  doc.addPage();
  return true;
}

export function coverDateString() {
  return new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" });
}
