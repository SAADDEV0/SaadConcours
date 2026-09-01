"use client";

// Builds and downloads the fiche-de-cours PDF. Shared between the
// interactive reader (app/cours/page.js) and the dedicated per-fiche SEO
// page (app/cours/[id]/page.js) so there's one place that knows how to lay
// this out instead of two copies drifting apart — mirrors _shared/concoursPdf.js.

import { trackPdfDownload } from "./chrome";
import { addWatermark, addSiteHeader, addFooterSocial, resolvePdfBranding } from "./pdfWatermark";

function stripInlineMd(s) {
  return s.replace(/\*\*/g, "").replace(/\$\$?/g, "").trim();
}

export async function downloadCoursPdf(cours) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const marginX = 18;
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const maxWidth = pageW - marginX * 2;
  const bottomLimit = pageH - 18;
  let y = 26;

  function ensureSpace(need) {
    if (y + need > bottomLimit) {
      doc.addPage();
      y = 26;
    }
  }

  function addWrappedLine(text, opts = {}) {
    const { bold = false, size = 10.5, gapAfter = 1.6, color = [20, 20, 25] } = opts;
    doc.setFont(undefined, bold ? "bold" : "normal");
    doc.setFontSize(size);
    doc.setTextColor(...color);
    const clean = stripInlineMd(text);
    if (!clean) {
      y += 2;
      return;
    }
    const wrapped = doc.splitTextToSize(clean, maxWidth);
    for (const wl of wrapped) {
      ensureSpace(size * 0.42);
      doc.text(wl, marginX, y);
      y += size * 0.42;
    }
    y += gapAfter;
  }

  function addTable(rows) {
    const cleanRows = rows.map((r) => r.map((cell) => stripInlineMd(cell)));
    ensureSpace(20);
    doc.autoTable({
      startY: y,
      margin: { left: marginX, right: marginX },
      head: [cleanRows[0]],
      body: cleanRows.slice(1),
      styles: { fontSize: 8.5, cellPadding: 2, overflow: "linebreak" },
      headStyles: { fillColor: [79, 140, 255], textColor: 255 },
      theme: "grid",
    });
    y = doc.lastAutoTable.finalY + 4;
  }

  const src = (cours.content || "").split("\n");
  let i = 0;
  while (i < src.length) {
    const line = src[i];

    if (/^\s*$/.test(line)) {
      y += 2;
      i++;
      continue;
    }

    if (/^```/.test(line.trim())) {
      i++;
      const codeLines = [];
      while (i < src.length && !/^```/.test(src[i].trim())) {
        codeLines.push(src[i]);
        i++;
      }
      i++;
      codeLines.forEach((cl) => addWrappedLine(cl, { size: 9, color: [80, 80, 90] }));
      y += 1.5;
      continue;
    }

    if (/^\|/.test(line.trim())) {
      const rows = [];
      while (i < src.length && /^\|/.test(src[i].trim())) {
        const cells = src[i]
          .trim()
          .replace(/^\||\|$/g, "")
          .split("|")
          .map((s) => s.trim());
        if (!/^:?-+:?$/.test(cells.join(""))) rows.push(cells);
        i++;
      }
      if (rows.length) addTable(rows);
      continue;
    }

    const h1M = line.match(/^#\s+(.*)$/);
    if (h1M) {
      ensureSpace(12);
      addWrappedLine(h1M[1], { bold: true, size: 15, gapAfter: 3 });
      i++;
      continue;
    }

    const h2M = line.match(/^##\s+(.*)$/);
    if (h2M) {
      y += 2;
      ensureSpace(10);
      addWrappedLine(h2M[1], { bold: true, size: 13, gapAfter: 2.5 });
      i++;
      continue;
    }

    const h3M = line.match(/^###\s+(.*)$/);
    if (h3M) {
      ensureSpace(9);
      addWrappedLine(h3M[1], { bold: true, size: 11.5, gapAfter: 2 });
      i++;
      continue;
    }

    const bulletM = line.match(/^\s*-\s+(.*)$/);
    if (bulletM) {
      addWrappedLine("• " + bulletM[1]);
      i++;
      continue;
    }

    addWrappedLine(line);
    i++;
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
