"use client";

// Builds and downloads the énoncé/corrigé PDF for a concours. Shared
// between the interactive modal (app/concours/page.js) and the dedicated
// per-concours SEO page (app/concours/[id]/page.js) so there's one place
// that knows how to lay this out instead of two copies drifting apart.

import { pub, trackPdfDownload } from "./chrome";
import { addWatermark, addSiteHeader } from "./pdfWatermark";

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
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const marginX = 18;
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const maxWidth = pageW - marginX * 2;
  const bottomLimit = pageH - 20;
  let y = 26;

  function ensureSpace(need) {
    if (y + need > bottomLimit) {
      doc.addPage();
      y = 26;
    }
  }

  function addWrappedLine(text, opts = {}) {
    const { bold = false, size = 10.5, indent = 0, gapAfter = 1.6, color = [20, 20, 25] } = opts;
    doc.setFont(undefined, bold ? "bold" : "normal");
    doc.setFontSize(size);
    doc.setTextColor(...color);
    const clean = stripInlineMd(text);
    if (!clean) {
      y += 2;
      return;
    }
    const wrapped = doc.splitTextToSize(clean, maxWidth - indent);
    for (const wl of wrapped) {
      ensureSpace(size * 0.42);
      doc.text(wl, marginX + indent, y);
      y += size * 0.42;
    }
    y += gapAfter;
  }

  function addPrefixedLine(prefix, rest, opts = {}) {
    const { indent = 0, bullet = false, size = 10.5, gapAfter = 1.8 } = opts;
    doc.setFontSize(size);
    const bx = marginX + indent + (bullet ? 4 : 0);
    doc.setFont(undefined, "bold");
    const prefixClean = stripInlineMd(prefix);
    const prefixW = doc.getTextWidth(prefixClean + " ");
    const restClean = stripInlineMd(rest);
    const wrapped = doc.splitTextToSize(restClean, maxWidth - indent - prefixW - (bullet ? 4 : 0));
    ensureSpace(size * 0.42);
    if (bullet) {
      doc.setFont(undefined, "normal");
      doc.text("•", marginX + indent, y);
    }
    doc.setFont(undefined, "bold");
    doc.text(prefixClean, bx, y);
    doc.setFont(undefined, "normal");
    if (wrapped[0]) doc.text(wrapped[0], bx + prefixW, y);
    y += size * 0.42;
    for (let i = 1; i < wrapped.length; i++) {
      ensureSpace(size * 0.42);
      doc.text(wrapped[i], bx, y);
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

  doc.setFont(undefined, "bold");
  doc.setFontSize(15);
  doc.setTextColor(20, 20, 25);
  doc.text(`${c.etablissement} — ${c.annee}`, marginX, y);
  y += 7;
  doc.setFont(undefined, "normal");
  doc.setFontSize(10.5);
  doc.setTextColor(90, 90, 100);
  doc.text(`${c.filiere} · ${c.ville}${c.difficulte ? " · Difficulté : " + c.difficulte : ""}`, marginX, y);
  y += 5;
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
        addWrappedLine(line.replace(/^>\s*/, ""), { size: 9.5, color: [150, 110, 30], gapAfter: 2.5 });
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
        addWrappedLine(headingM[2], { bold: true, size: 12, gapAfter: 2.5 });
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
        addPrefixedLine(stemM[1], stemM[2], { size: 10.5, gapAfter: 2 });
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
  addWrappedLine("Source", { bold: true, size: 10 });
  addWrappedLine(c.source || "non précisée", { size: 9, color: [110, 110, 120] });

  if (c.corrige_md) {
    doc.addPage();
    y = 26;
    doc.setFont(undefined, "bold");
    doc.setFontSize(14);
    doc.setTextColor(20, 20, 25);
    doc.text("Corrigé", marginX, y);
    y += 6;
    addWrappedLine("Corrigé indicatif (relecture humaine non garantie) — vérifie les calculs avant de t'y fier.", {
      size: 8.5,
      color: [180, 120, 20],
      gapAfter: 3,
    });
    doc.setDrawColor(200, 200, 210);
    doc.line(marginX, y, pageW - marginX, y);
    y += 6;
    renderMarkdown(c.corrige_md);
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

  addWatermark(doc);
  addSiteHeader(doc);
  doc.save(`${c.id}.pdf`);
  trackPdfDownload("concours", c.id);
}
