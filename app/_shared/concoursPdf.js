"use client";

// Builds and downloads the énoncé/corrigé PDF for a concours. Shared
// between the interactive modal (app/concours/page.js) and the dedicated
// per-concours SEO page (app/concours/[id]/page.js) so there's one place
// that knows how to lay this out instead of two copies drifting apart.

import { pub, trackPdfDownload } from "./chrome";
import { addWatermark, addSiteHeader, addFooter, addPageBorder, resolvePdfBranding } from "./pdfWatermark";

function stripInlineMd(s) {
  return s.replace(/\*\*/g, "").replace(/\$\$?/g, "").trim();
}

async function loadImageAsDataURL(src) {
  const res = await fetch(src);
  const blob = await res.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

function getImageDimensions(dataUrl) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve({ width: img.width, height: img.height });
    img.onerror = reject;
    img.src = dataUrl;
  });
}

export async function downloadConcoursPdf(c) {
  let settings = {};
  try {
    settings = await (await fetch("/api/settings")).json();
  } catch {
    // best-effort: fall back to the default vector logo/watermark, no socials
  }
  const branding = await resolvePdfBranding(settings);

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
  const topY = marginX + 8;
  const bottomLimit = pageH - marginX - 2;
  let y = topY;

  function ensureSpace(need) {
    if (y + need > bottomLimit) {
      doc.addPage();
      y = topY;
    }
  }

  function addWrappedLine(text, opts = {}) {
    const { bold = false, size = baseFontSize, indent = 0, gapAfter = 1.6, color = branding.textColor, font } = opts;
    doc.setFont(font || undefined, bold ? "bold" : "normal");
    doc.setFontSize(size);
    doc.setTextColor(...color);
    const clean = stripInlineMd(text);
    if (!clean) {
      y += 2 * lineSpacing;
      return;
    }
    const wrapped = doc.splitTextToSize(clean, maxWidth - indent);
    for (const wl of wrapped) {
      ensureSpace(size * 0.42 * lineSpacing);
      doc.text(wl, marginX + indent, y);
      y += size * 0.42 * lineSpacing;
    }
    y += gapAfter * lineSpacing;
  }

  function addPrefixedLine(prefix, rest, opts = {}) {
    const { indent = 0, bullet = false, size = baseFontSize, gapAfter = 1.8 } = opts;
    const lineStep = size * 0.42 * lineSpacing;
    doc.setFontSize(size);
    doc.setTextColor(...branding.textColor);
    const bx = marginX + indent + (bullet ? 4 : 0);
    const availW = maxWidth - indent - (bullet ? 4 : 0);
    const prefixClean = stripInlineMd(prefix);
    const restClean = stripInlineMd(rest);

    doc.setFont(undefined, "bold");
    // A QCM stem is often written entirely inside "**...**" with no trailing
    // plain text, so the "prefix" alone can be longer than one line — wrap
    // it too instead of drawing it as a single unbroken doc.text() call.
    const prefixLines = prefixClean ? doc.splitTextToSize(prefixClean, availW) : [];

    ensureSpace(lineStep);
    if (bullet) {
      doc.setFont(undefined, "normal");
      doc.text("•", marginX + indent, y);
    }
    doc.setFont(undefined, "bold");

    if (prefixLines.length > 1) {
      for (let i = 0; i < prefixLines.length; i++) {
        if (i > 0) ensureSpace(lineStep);
        doc.text(prefixLines[i], bx, y);
        y += lineStep;
      }
      if (restClean) {
        doc.setFont(undefined, "normal");
        const wrapped = doc.splitTextToSize(restClean, availW);
        for (const wl of wrapped) {
          ensureSpace(lineStep);
          doc.text(wl, bx, y);
          y += lineStep;
        }
      }
    } else {
      const prefixW = prefixClean ? doc.getTextWidth(prefixClean + " ") : 0;
      const wrapped = restClean ? doc.splitTextToSize(restClean, availW - prefixW) : [];
      if (prefixClean) doc.text(prefixClean, bx, y);
      doc.setFont(undefined, "normal");
      if (wrapped[0]) doc.text(wrapped[0], bx + prefixW, y);
      y += lineStep;
      for (let i = 1; i < wrapped.length; i++) {
        ensureSpace(lineStep);
        doc.text(wrapped[i], bx, y);
        y += lineStep;
      }
    }
    y += gapAfter * lineSpacing;
  }

  function addTable(rows) {
    const cleanRows = rows.map((r) => r.map((cell) => stripInlineMd(cell)));
    ensureSpace(20);
    doc.autoTable({
      startY: y,
      margin: { left: marginX, right: marginX },
      head: [cleanRows[0]],
      body: cleanRows.slice(1),
      styles: { font: bodyFont, fontSize: 8.5 * fontScale, cellPadding: 2, overflow: "linebreak", textColor: branding.textColor },
      headStyles: { fillColor: branding.accentColor, textColor: 255 },
      theme: "grid",
    });
    y = doc.lastAutoTable.finalY + 4;
  }

  addWrappedLine(`${c.etablissement} — ${c.annee}`, { bold: true, size: 15 * fontScale, gapAfter: 2 });
  addWrappedLine(`${c.master_reel || c.filiere} · ${c.ville}${c.difficulte ? " · Difficulté : " + c.difficulte : ""}`, {
    size: baseFontSize,
    color: [90, 90, 100],
    gapAfter: 3,
  });
  doc.setDrawColor(200, 200, 210);
  doc.line(marginX, y, pageW - marginX, y);
  y += 7;

  function renderMarkdown(md) {
    const src = (md || "").split("\n");
    let i = 0;
    while (i < src.length) {
      const line = src[i];

      if (/^\s*$/.test(line) || /^\s*---+\s*$/.test(line)) {
        y += 2.4;
        i++;
        continue;
      }

      if (/^>/.test(line.trim())) {
        addWrappedLine(line.replace(/^>\s*/, ""), { size: 9.5 * fontScale, color: [150, 110, 30], gapAfter: 2.5 });
        i++;
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

      const headingM = line.match(/^(#{2,4})\s+(.*)$/);
      if (headingM) {
        y += 2;
        // This markdown dialect only ever uses "##" through "####" (no H1),
        // so depth 2 maps to the admin's "H2" style, 3 to "H3"; a stray "####"
        // (depth 4) has no configured level and just uses the plain default.
        const headingStyle = branding.headings[`h${headingM[1].length}`];
        const size = (headingStyle ? 12 * headingStyle.sizeScale : 12) * fontScale;
        addWrappedLine(headingM[2], {
          bold: true,
          size,
          color: headingStyle ? headingStyle.color : branding.textColor,
          font: headingStyle ? headingStyle.fontFamily : undefined,
          gapAfter: 2.5,
        });
        i++;
        continue;
      }

      const bulletM = line.match(/^\s*-\s+\*\*([^*]+)\*\*\s*(.*)$/);
      if (bulletM) {
        addPrefixedLine(bulletM[1], bulletM[2], { indent: 4, bullet: true });
        i++;
        continue;
      }
      const bulletPlainM = line.match(/^\s*-\s+(.*)$/);
      if (bulletPlainM) {
        addPrefixedLine("•", bulletPlainM[1], { indent: 4 });
        i++;
        continue;
      }

      const stemM = line.match(/^\*\*([^*]+)\*\*\s*(.*)$/);
      if (stemM) {
        y += 1.5;
        addPrefixedLine(stemM[1], stemM[2], { size: baseFontSize, gapAfter: 2 });
        i++;
        continue;
      }

      addWrappedLine(line);
      i++;
    }
  }

  renderMarkdown(c.enonce_md || "Énoncé non disponible.");

  y += 4;
  ensureSpace(14);
  doc.setDrawColor(200, 200, 210);
  doc.line(marginX, y, pageW - marginX, y);
  y += 6;
  addWrappedLine("Source", { bold: true, size: 10 * fontScale });
  addWrappedLine(c.source || "non précisée", { size: 9 * fontScale, color: [110, 110, 120] });

  // c.corrige_md is empty when the corrigé exists only as a raw file in the
  // repo's data/corriges/ folder (see lib/store.js getCorrigeFile) — fetch
  // it on demand rather than silently leaving it out of the PDF.
  let corrigeMd = c.corrige_md;
  if (!corrigeMd && c.id) {
    try {
      const res = await fetch(`/api/concours/${encodeURIComponent(c.id)}/corrige`);
      if (res.ok) corrigeMd = (await res.json()).corrige_md;
    } catch {
      // best-effort: PDF is still useful without the corrigé
    }
  }

  if (corrigeMd) {
    doc.addPage();
    y = topY;
    doc.setFont(undefined, "bold");
    doc.setFontSize(14 * fontScale);
    doc.setTextColor(...branding.textColor);
    doc.text("Corrigé", marginX, y);
    y += 6;
    addWrappedLine("Corrigé indicatif (relecture humaine non garantie) — vérifie les calculs avant de t'y fier.", {
      size: 8.5 * fontScale,
      color: [180, 120, 20],
      gapAfter: 3,
    });
    doc.setDrawColor(200, 200, 210);
    doc.line(marginX, y, pageW - marginX, y);
    y += 6;
    renderMarkdown(corrigeMd);
  }

  for (const imgPath of c.images || []) {
    try {
      const dataUrl = await loadImageAsDataURL(pub(imgPath));
      const { width, height } = await getImageDimensions(dataUrl);
      doc.addPage();
      const availW = pageW - marginX * 2;
      const availH = pageH - 32;
      const scale = Math.min(availW / width, availH / height, 1);
      const imgW = width * scale;
      const imgH = height * scale;
      const x = (pageW - imgW) / 2;
      doc.setFont(undefined, "bold");
      doc.setFontSize(10);
      doc.setTextColor(90, 90, 100);
      doc.text("Extrait scanné", marginX, 15);
      const format = (dataUrl.match(/data:image\/(\w+);/) || [])[1]?.toUpperCase() || "JPEG";
      doc.addImage(dataUrl, format === "JPG" ? "JPEG" : format, x, 20, imgW, imgH);
    } catch (err) {
      // Skip images that fail to load rather than aborting the whole PDF.
    }
  }

  addWatermark(doc, branding);
  addPageBorder(doc, branding);
  addSiteHeader(doc, branding);
  addFooter(doc, branding);
  doc.save(`${c.id}.pdf`);
  trackPdfDownload("concours", c.id);
}
