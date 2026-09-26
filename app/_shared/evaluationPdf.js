"use client";

// Builds and downloads the PDF of an évaluation (QCM with the correct
// answers highlighted). Lived inline in EvaluationDetailClient.js until the
// admin's PDF studio needed to preview it too — one builder, two callers,
// same reasoning as coursPdf.js / concoursPdf.js.

import { trackPdfDownload } from "./chrome";
import { addPageFurniture, contentBounds, loadPdfSettings, resolvePdfBranding, sanitizePdfText } from "./pdfTheme";
import { coverDateString, maybeDrawCoverPage } from "./pdfCover";
import { convertMathSpansToPlainText } from "./latexPlainText";
import { ensureEvaluationPdfScripts } from "./pdfScripts";

const ALL_CHAPTERS = "Tous";

function questionCount(n) {
  return `${n} question${n > 1 ? "s" : ""}`;
}

// `chapter` is the chapter the visitor filtered on ("Tous" = the whole quiz);
// `questions` the questions actually shown for it.
export async function buildEvaluationPdf({ quiz, questions, chapter = ALL_CHAPTERS }, brandingOverride) {
  const qs = questions || quiz.questions || [];
  const chapterLabel = chapter === ALL_CHAPTERS ? "Tous les chapitres" : chapter;
  const [settings] = await Promise.all([brandingOverride ? null : loadPdfSettings(), ensureEvaluationPdfScripts()]);
  const branding = brandingOverride || (await resolvePdfBranding(settings));

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const bodyFont = branding.fontFamily || "helvetica";
  doc.setFont(bodyFont, "normal"); // ambient default — every doc.setFont(undefined, style) call below keeps this family
  const baseFontSize = branding.fontSize || 10.5;
  const fontScale = baseFontSize / 10.5;
  const lineSpacing = branding.lineSpacing || 1;
  const marginX = branding.marginX ?? 18;
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const maxWidth = pageW - marginX * 2;
  const { top: topY, bottom: bottomLimit } = contentBounds(branding, pageH);
  let y = topY;

  // Title cover page, drawn on the document's first page before the
  // questions (see pdfCover.js).
  if (
    maybeDrawCoverPage(doc, branding, {
      eyebrow: quiz.module || "Évaluation",
      title: quiz.title,
      subtitle: [quiz.description, `${chapterLabel} — ${questionCount(qs.length)}`],
      date: coverDateString(),
    })
  ) {
    y = topY;
  }

  function ensureSpace(need) {
    if (y + need > bottomLimit) {
      doc.addPage();
      y = topY;
    }
  }

  // Questions and answers come straight from the quiz JSON, which uses real
  // minus signs, arrows and Greek letters — sanitizePdfText keeps a single
  // one of them from flipping its line into UTF-16 (spaced-out characters,
  // twice as wide as measured, spilling off the page).
  //
  // Some questions/options/justifications also carry **bold** markdown and
  // $...$ LaTeX: convertMathSpansToPlainText gives formulas the same
  // readable-plain-text fallback coursPdf.js uses; bold is stripped rather
  // than rendered (each line is drawn as a single run, the same
  // simplification concoursPdf.js's plain body text uses).
  function wrapText(text, size, bold, indent, color, font) {
    doc.setFont(font || undefined, bold ? "bold" : "normal");
    doc.setFontSize(size);
    doc.setTextColor(...color);
    const clean = convertMathSpansToPlainText(String(text ?? "")).replace(/\*\*/g, "");
    const wrapped = doc.splitTextToSize(sanitizePdfText(clean), maxWidth - indent);
    for (const wl of wrapped) {
      ensureSpace(size * 0.42 * lineSpacing);
      doc.text(wl, marginX + indent, y);
      y += size * 0.42 * lineSpacing;
    }
  }

  wrapText(quiz.title, 15 * fontScale, true, 0, branding.textColor);
  y += 1;
  doc.setDrawColor(200, 200, 210);
  doc.line(marginX, y, pageW - marginX, y);
  y += 6;
  wrapText(`Module : ${quiz.module} — ${chapterLabel} — ${questionCount(qs.length)} — Généré depuis SaadConcours`, 9 * fontScale, false, 0, [120, 120, 130]);
  y += 6;

  qs.forEach((q, idx) => {
    ensureSpace(14);
    wrapText(`Q${idx + 1}. ${q.question}`, 11 * fontScale, true, 0, branding.textColor);
    y += 1.5;
    q.options.forEach((o) => {
      const isCorrect = q.correct.includes(o.letter);
      ensureSpace(9);
      wrapText(`${o.letter}. ${o.text}`, 9.5 * fontScale, false, 5, isCorrect ? [30, 140, 90] : [70, 70, 80]);
    });
    y += 1;
    ensureSpace(9);
    const correctLetters = q.correct.join(", ").toUpperCase();
    wrapText(
      `${q.correct.length > 1 ? "Réponses correctes" : "Réponse correcte"} : ${correctLetters}${q.justification ? " — " + q.justification : ""}`,
      9 * fontScale,
      true,
      0,
      [30, 140, 90]
    );
    y += 5;
  });

  addPageFurniture(doc, branding, { title: quiz.title });
  return doc;
}

export async function downloadEvaluationPdf({ quiz, questions, chapter = ALL_CHAPTERS }) {
  const doc = await buildEvaluationPdf({ quiz, questions, chapter });
  doc.save(`${quiz.id}_${chapter.replace(/[^a-zA-Z0-9]+/g, "_").slice(0, 30)}.pdf`);
  trackPdfDownload("evaluation", quiz.id);
}
