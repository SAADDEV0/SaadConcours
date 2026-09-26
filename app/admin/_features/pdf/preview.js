"use client";

import { trimMarkdown } from "./samples";

// Génère l'aperçu du Studio PDF avec le moteur du site — les mêmes
// fonctions que les boutons « Télécharger PDF » des pages publiques, mais
// avec les réglages non enregistrés du studio. Renvoie aussi de quoi poser
// les repères : où le moteur a placé chaque élément, et la zone de texte.

export const DOC_TYPES = [
  { value: "cours", label: "Cours", title: "Fiche de cours (formules, tableaux, citations)" },
  { value: "concours", label: "Concours", title: "Énoncé et corrigé d'un concours" },
  { value: "evaluation", label: "Évaluation", title: "QCM d'évaluation avec les réponses" },
];

const QUIZ_PREVIEW_QUESTIONS = 12;

export async function buildPreviewPdf({ type, source, full, values }) {
  const { contentBounds, firstFurniturePage, pdfFurnitureAnchors, resolvePdfBranding } = await import("@/app/_shared/pdfTheme");
  const branding = await resolvePdfBranding(values);

  let doc;
  if (type === "concours") {
    const { buildConcoursPdf } = await import("@/app/_shared/concoursPdf");
    // Sans les scans : ils pèsent lourd et ne dépendent d'aucun réglage.
    doc = await buildConcoursPdf(source, branding, { images: false });
  } else if (type === "evaluation") {
    const { buildEvaluationPdf } = await import("@/app/_shared/evaluationPdf");
    const questions = full ? source.questions : source.questions.slice(0, QUIZ_PREVIEW_QUESTIONS);
    doc = await buildEvaluationPdf({ quiz: source, questions }, branding);
  } else {
    const { buildCoursPdf } = await import("@/app/_shared/coursPdf");
    doc = await buildCoursPdf(full ? source : { ...source, content: trimMarkdown(source.content) }, branding);
  }

  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const bounds = contentBounds(branding, pageH);
  return {
    bytes: doc.output("arraybuffer"),
    pageCount: doc.internal.getNumberOfPages(),
    anchors: pdfFurnitureAnchors(doc, branding),
    // Tout en % de la page, comme les positions enregistrées.
    guides: {
      marginX: (branding.marginX / pageW) * 100,
      top: (bounds.top / pageH) * 100,
      bottom: (bounds.bottom / pageH) * 100,
    },
    coverEnabled: branding.coverPageEnabled,
    firstContentPage: firstFurniturePage(branding),
  };
}
