const SITE_URL = "https://saad-concours.vercel.app";
const SITE_HOST = "saad-concours.vercel.app";

// Fills a quad (4 points, in perimeter order) as two triangles — jsPDF has
// no native polygon-fill primitive for straight-edged shapes.
function fillQuad(doc, p1, p2, p3, p4) {
  doc.triangle(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1], "F");
  doc.triangle(p1[0], p1[1], p3[0], p3[1], p4[0], p4[1], "F");
}

// Graduation cap + open book mark, drawn with plain vector shapes (no image
// file needed) — mirrors the real logo (app/_shared/chrome.js) point for
// point, using the same 64x64 layout scaled down to `size`.
function drawLogoMark(doc, x, y, size) {
  const s = size / 64;
  const p = (fx, fy) => [x + fx * s, y + fy * s];

  doc.setFillColor(79, 70, 229); // #4f46e5
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
  doc.setDrawColor(79, 70, 229);
  doc.setLineWidth(Math.max(0.2, size * 0.017));
  const [sx1, sy1] = p(32, 42);
  const [sx2, sy2] = p(32, 54);
  doc.line(sx1, sy1, sx2, sy2);
}

// Single-color, background-free version of the logo mark for the watermark:
// a solid badge would read as an opaque block sitting on top of the page
// content, so this draws just the cap + book linework in the wordmark's own
// color, sized to sit directly above it — one small, faint, upright unit
// instead of a large rotated shape competing with the text underneath it.
function drawWatermarkLogo(doc, x, y, size) {
  const s = size / 64;
  const p = (fx, fy) => [x + fx * s, y + fy * s];

  doc.setFillColor(79, 70, 229);
  fillQuad(doc, p(32, 13), p(49, 21), p(32, 29), p(15, 21));

  doc.setDrawColor(79, 70, 229);
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

// Faint, upright "SaadConcours" lockup — logo above wordmark, both centered
// and unrotated — stamped once per page of a jsPDF document. Kept upright
// (rather than diagonal) so the icon and text line up as one unit instead of
// a rotated wordmark next to a mark that visually doesn't match its angle.
// Called once, right before doc.save(), after all content (and page breaks)
// has already been added — jsPDF only exposes the final page count once the
// document is fully built.
export function addWatermark(doc) {
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    const pageW = doc.internal.pageSize.getWidth();
    const pageH = doc.internal.pageSize.getHeight();
    doc.saveGraphicsState();
    doc.setGState(new doc.GState({ opacity: 0.05 }));

    const markSize = 26;
    drawWatermarkLogo(doc, pageW / 2 - markSize / 2, pageH / 2 - 30, markSize);

    doc.setFont(undefined, "bold");
    doc.setFontSize(30);
    doc.setTextColor(79, 70, 229);
    doc.text("SaadConcours", pageW / 2, pageH / 2 + 6, { align: "center" });
    doc.restoreGraphicsState();
  }
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
    doc.setTextColor(79, 70, 229);
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
