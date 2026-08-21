// Stamps a faint diagonal "SaadConcours" watermark across every page of a
// jsPDF document. Called once, right before doc.save(), after all content
// (and page breaks) has already been added — jsPDF only exposes the final
// page count once the document is fully built.
export function addWatermark(doc) {
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    const pageW = doc.internal.pageSize.getWidth();
    const pageH = doc.internal.pageSize.getHeight();
    doc.saveGraphicsState();
    doc.setGState(new doc.GState({ opacity: 0.08 }));
    doc.setFont(undefined, "bold");
    doc.setFontSize(46);
    doc.setTextColor(79, 140, 255);
    doc.text("SaadConcours", pageW / 2, pageH / 2, { align: "center", angle: 35 });
    doc.restoreGraphicsState();
  }
}

const SITE_URL = "https://saad-concours.vercel.app";
const SITE_HOST = "saad-concours.vercel.app";

// Small graduation-cap mark drawn with plain vector shapes (no image file
// needed) — a diamond "cap" over a rounded square, in the site's accent
// blue, echoing the real logo (app/_shared/chrome.js) closely enough to be
// recognizable at PDF-header size.
function drawLogoMark(doc, x, y, size) {
  doc.setFillColor(79, 140, 255);
  doc.roundedRect(x, y, size, size, 1.4, 1.4, "F");
  doc.setFillColor(255, 255, 255);
  const cx = x + size / 2;
  const cy = y + size / 2;
  const capW = size * 0.62;
  const capH = size * 0.28;
  // Cap top: a flattened diamond.
  doc.triangle(cx - capW / 2, cy, cx, cy - capH, cx + capW / 2, cy, "F");
  doc.triangle(cx - capW / 2, cy, cx, cy + capH, cx + capW / 2, cy, "F");
  // Tassel: a short vertical line off the right point.
  doc.setDrawColor(255, 255, 255);
  doc.setLineWidth(0.35);
  doc.line(cx + capW / 2 - 0.3, cy, cx + capW / 2 - 0.3, cy + size * 0.32);
}

// Branded header on every page: logo mark + "SaadConcours" wordmark (two-
// tone, matching the site) + clickable URL, with a thin rule underneath —
// so a printed or forwarded PDF is unmistakably sourced from the site.
export function addSiteHeader(doc) {
  const pageCount = doc.internal.getNumberOfPages();
  const pageW = doc.internal.pageSize.getWidth();
  const marginX = 18;
  const iconSize = 7;
  const iconX = marginX;
  const iconY = 5;

  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    drawLogoMark(doc, iconX, iconY, iconSize);

    const textX = iconX + iconSize + 2.5;
    doc.setFont(undefined, "bold");
    doc.setFontSize(12);
    doc.setTextColor(25, 28, 35);
    doc.text("Saad", textX, iconY + iconSize * 0.65);
    const saadW = doc.getTextWidth("Saad");
    doc.setTextColor(79, 140, 255);
    doc.text("Concours", textX + saadW, iconY + iconSize * 0.65);

    doc.setFont(undefined, "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(130, 138, 155);
    doc.textWithLink(SITE_HOST, textX, iconY + iconSize + 2.2, { url: SITE_URL });

    doc.setDrawColor(225, 228, 235);
    doc.setLineWidth(0.2);
    doc.line(marginX, iconY + iconSize + 4.5, pageW - marginX, iconY + iconSize + 4.5);
  }
}
