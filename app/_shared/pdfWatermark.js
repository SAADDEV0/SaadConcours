"use client";

const SITE_URL = "https://www.saadconcours.space";
const SITE_HOST = "saadconcours.space";

// Social keys the admin's "Personnalisation PDF" panel can toggle into the
// footer — kept separate from chrome.js's SOCIAL_NETWORKS (which carries
// inline SVG icons for the site's own footer) since jsPDF only draws text,
// not arbitrary SVG. Order matches app/admin/page.js's SOCIAL_FIELDS.
const PDF_SOCIAL_FIELDS = [
  { key: "facebook", label: "Facebook" },
  { key: "instagram", label: "Instagram" },
  { key: "whatsapp", label: "WhatsApp" },
  { key: "tiktok", label: "TikTok" },
  { key: "youtube", label: "YouTube" },
  { key: "telegram", label: "Telegram" },
];

// Fills a quad (4 points, in perimeter order) as two triangles — jsPDF has
// no native polygon-fill primitive for straight-edged shapes.
function fillQuad(doc, p1, p2, p3, p4) {
  doc.triangle(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1], "F");
  doc.triangle(p1[0], p1[1], p3[0], p3[1], p4[0], p4[1], "F");
}

// Graduation cap + open book mark, drawn with plain vector shapes (no image
// file needed) — mirrors the real logo (app/_shared/chrome.js) point for
// point, using the same 64x64 layout scaled down to `size`. Used as the
// default header/watermark logo whenever the admin hasn't uploaded a
// custom one.
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

// Resolves the admin's PDF branding choices (app/admin's "Personnalisation
// PDF" card, saved on the settings object) into a ready-to-draw shape —
// pre-loads the custom logo's dimensions once so addSiteHeader/addWatermark
// don't each need to be async and re-decode it per page.
export async function resolvePdfBranding(settings = {}) {
  const branding = {
    logo: null, // { dataUrl, format, width, height } or null = use the default vector mark
    logoPosition: settings.pdfLogoPosition === "center" || settings.pdfLogoPosition === "right"
      ? settings.pdfLogoPosition
      : "left",
    watermarkEnabled: settings.pdfWatermarkEnabled !== false,
    watermarkText: (settings.pdfWatermarkText || "SaadConcours").trim() || "SaadConcours",
    watermarkOpacity: Number.isFinite(settings.pdfWatermarkOpacity)
      ? Math.min(0.3, Math.max(0.02, settings.pdfWatermarkOpacity))
      : 0.05,
    showSocialFooter: settings.pdfShowSocialFooter !== false,
    socials: PDF_SOCIAL_FIELDS.filter((f) => settings[f.key]).map((f) => ({ ...f, url: settings[f.key] })),
  };

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

// Faint, upright "SaadConcours" lockup — logo above wordmark, both centered
// and unrotated — stamped once per page of a jsPDF document. Kept upright
// (rather than diagonal) so the icon and text line up as one unit instead of
// a rotated wordmark next to a mark that visually doesn't match its angle.
// Called once, right before doc.save(), after all content (and page breaks)
// has already been added — jsPDF only exposes the final page count once the
// document is fully built.
export function addWatermark(doc, branding = {}) {
  if (branding.watermarkEnabled === false) return;
  const text = branding.watermarkText || "SaadConcours";
  const opacity = branding.watermarkOpacity ?? 0.05;

  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    const pageW = doc.internal.pageSize.getWidth();
    const pageH = doc.internal.pageSize.getHeight();
    doc.saveGraphicsState();
    doc.setGState(new doc.GState({ opacity }));

    const markSize = 26;
    if (branding.logo) {
      const w = markSize;
      const h = (branding.logo.height / branding.logo.width) * w;
      doc.addImage(branding.logo.dataUrl, branding.logo.format, pageW / 2 - w / 2, pageH / 2 - 30, w, h);
    } else {
      drawWatermarkLogo(doc, pageW / 2 - markSize / 2, pageH / 2 - 30, markSize);
    }

    doc.setFont(undefined, "bold");
    doc.setFontSize(30);
    doc.setTextColor(79, 70, 229);
    doc.text(text, pageW / 2, pageH / 2 + 6, { align: "center" });
    doc.restoreGraphicsState();
  }
}

// Branded header on every page — logo + "SaadConcours" wordmark + clickable
// URL by default, or just the admin's uploaded logo image when one is set,
// with a thin rule underneath — so a printed or forwarded PDF is
// unmistakably sourced from the site. `branding.logoPosition` controls
// whether the block sits at the left margin, centered, or at the right
// margin.
export function addSiteHeader(doc, branding = {}) {
  const pageCount = doc.internal.getNumberOfPages();
  const pageW = doc.internal.pageSize.getWidth();
  const marginX = 18;
  const position = branding.logoPosition || "left";

  const iconSize = 7;
  let blockW;
  let drawBlock; // (x) => void — draws the header block with its left edge at x

  if (branding.logo) {
    const h = 9;
    const w = (branding.logo.width / branding.logo.height) * h;
    blockW = w;
    drawBlock = (x) => {
      doc.addImage(branding.logo.dataUrl, branding.logo.format, x, 4, w, h);
    };
  } else {
    doc.setFont(undefined, "bold");
    doc.setFontSize(12);
    const textW = doc.getTextWidth("Saad") + doc.getTextWidth("Concours");
    blockW = iconSize + 2.5 + textW;
    drawBlock = (x) => {
      const iconY = 5;
      drawLogoMark(doc, x, iconY, iconSize);
      const textX = x + iconSize + 2.5;
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
    };
  }

  const blockX = position === "center" ? (pageW - blockW) / 2 : position === "right" ? pageW - marginX - blockW : marginX;

  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    drawBlock(blockX);
    doc.setDrawColor(225, 228, 235);
    doc.setLineWidth(0.2);
    doc.line(marginX, 16.5, pageW - marginX, 16.5);
  }
}

// Small clickable "site + social links" line stamped at the bottom of every
// page — the admin's "Personnalisation PDF" toggle controls whether this
// appears at all. Kept to plain text links (no icons) since jsPDF has no
// SVG support and rasterizing an icon per network per page isn't worth it.
export function addFooterSocial(doc, branding = {}) {
  if (branding.showSocialFooter === false) return;
  const parts = [{ label: SITE_HOST, url: SITE_URL }, ...(branding.socials || []).map((s) => ({ label: s.label, url: s.url }))];

  const pageCount = doc.internal.getNumberOfPages();
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const marginX = 18;
  const y = pageH - 10;

  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setDrawColor(225, 228, 235);
    doc.setLineWidth(0.2);
    doc.line(marginX, y - 3.5, pageW - marginX, y - 3.5);

    doc.setFont(undefined, "normal");
    doc.setFontSize(7.5);
    const sep = "   ·   ";
    const sepW = doc.getTextWidth(sep);
    const totalW = parts.reduce((sum, p, idx) => sum + doc.getTextWidth(p.label) + (idx > 0 ? sepW : 0), 0);
    let x = (pageW - totalW) / 2;
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
}
