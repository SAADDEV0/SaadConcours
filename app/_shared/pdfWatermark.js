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

const DEFAULT_ACCENT_HEX = "#4f46e5";
const DEFAULT_ACCENT_RGB = [79, 70, 229];
const DEFAULT_TEXT_HEX = "#1a1d27";
const DEFAULT_TEXT_RGB = [26, 29, 39];
export const PDF_FONT_FAMILIES = [
  { value: "helvetica", label: "Helvetica (par défaut)" },
  { value: "times", label: "Times" },
  { value: "courier", label: "Courier (machine à écrire)" },
];
export const PDF_WATERMARK_STYLES = [
  { value: "brand", label: "Logo + texte, centré (par défaut)" },
  { value: "diagonal", label: "Texte en diagonale, centré" },
  { value: "tiled", label: "Texte répété en quadrillage" },
];
// Kept only so settings saved before the exact-mm slider existed still
// resolve to the same margin they always had.
export const PDF_MARGIN_PRESETS = {
  compact: 13,
  normal: 18,
  large: 24,
};
export const PDF_MARGIN_MM_RANGE = { min: 8, max: 35, default: 18 };
export const PDF_BORDER_WIDTH_RANGE = { min: 0.2, max: 2, step: 0.1, default: 0.5 };
export const PDF_BORDER_INSET_RANGE = { min: 2, max: 15, default: 6 };
// Base body-text point size — everything else (headings, table cells) scales
// proportionally to whichever of these the admin picks.
export const PDF_FONT_SIZE_PRESETS = {
  small: 9.5,
  normal: 10.5,
  large: 11.5,
};
// Multiplies both the line height *and* the gap left after each
// paragraph/heading/list item — "aéré" doesn't just spread lines within a
// paragraph, it also opens up the space between blocks, or the page reads as
// unevenly spaced.
export const PDF_LINE_SPACING_PRESETS = {
  compact: 0.85,
  normal: 1,
  relaxed: 1.25,
};
// Per-level heading overrides (police/taille/couleur) — multiplies the
// level's own base size (coursPdf.js: 15/13/11.5pt for H1/H2/H3;
// concoursPdf.js: 12pt for every "#{2,4}" markdown heading regardless of
// depth) rather than replacing it, so bumping the global "Taille du texte"
// preset still scales headings the way it always did.
export const PDF_HEADING_LEVELS = ["h1", "h2", "h3"];
export const PDF_HEADING_SIZE_PRESETS = {
  small: 0.85,
  normal: 1,
  large: 1.2,
};

function hexToRgb(hex, fallback) {
  const m = /^#?([0-9a-f]{6})$/i.exec(String(hex || "").trim());
  if (!m) return fallback;
  const n = parseInt(m[1], 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

// Elements the admin's drag-and-drop "Éditeur PDF" page can reposition —
// stored as percentages of the page's own width/height (not mm) so a saved
// position holds up whether the layout draws on an A4 page or, later, any
// other paper size. Absent/invalid entries fall back to the fixed layout
// this file used before the editor existed.
export const PDF_LAYOUT_ELEMENTS = ["logo", "watermark", "footer", "pageNumber"];

function parsePosition(pos) {
  if (!pos || typeof pos !== "object") return null;
  const xPct = Number(pos.xPct);
  const yPct = Number(pos.yPct);
  if (!Number.isFinite(xPct) || !Number.isFinite(yPct)) return null;
  return { xPct: Math.min(100, Math.max(0, xPct)), yPct: Math.min(100, Math.max(0, yPct)) };
}

// Fills a quad (4 points, in perimeter order) as two triangles — jsPDF has
// no native polygon-fill primitive for straight-edged shapes.
function fillQuad(doc, p1, p2, p3, p4) {
  doc.triangle(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1], "F");
  doc.triangle(p1[0], p1[1], p3[0], p3[1], p4[0], p4[1], "F");
}

// Graduation cap + open book mark, drawn with plain vector shapes (no image
// file needed) — mirrors the real logo (app/_shared/chrome.js) point for
// point, using the same 64x64 layout scaled down to `size`. Used as the
// default header/watermark/cover-page logo whenever the admin hasn't
// uploaded a custom one. `color` (RGB triplet) is the admin's chosen accent
// color — defaults to the site's own indigo.
export function drawLogoMark(doc, x, y, size, color = DEFAULT_ACCENT_RGB) {
  const s = size / 64;
  const p = (fx, fy) => [x + fx * s, y + fy * s];

  doc.setFillColor(...color);
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
  doc.setDrawColor(...color);
  doc.setLineWidth(Math.max(0.2, size * 0.017));
  const [sx1, sy1] = p(32, 42);
  const [sx2, sy2] = p(32, 54);
  doc.line(sx1, sy1, sx2, sy2);
}

// Single-color, background-free version of the logo mark for the "brand"
// watermark style: a solid badge would read as an opaque block sitting on
// top of the page content, so this draws just the cap + book linework in
// the admin's accent color, sized to sit directly above the wordmark.
function drawWatermarkLogo(doc, x, y, size, color = DEFAULT_ACCENT_RGB) {
  const s = size / 64;
  const p = (fx, fy) => [x + fx * s, y + fy * s];

  doc.setFillColor(...color);
  fillQuad(doc, p(32, 13), p(49, 21), p(32, 29), p(15, 21));

  doc.setDrawColor(...color);
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
// PDF" page, saved on the settings object — or the in-progress, unsaved
// form state when called from that page's own live preview) into a
// ready-to-draw shape — pre-loads the custom logo's dimensions once so
// addSiteHeader/addWatermark don't each need to be async and re-decode it
// per page, and normalizes every option to a safe default so callers never
// need to null-check.
export async function resolvePdfBranding(settings = {}) {
  const branding = {
    logo: null, // { dataUrl, format, width, height } or null = use the default vector mark
    logoPosition: settings.pdfLogoPosition === "center" || settings.pdfLogoPosition === "right"
      ? settings.pdfLogoPosition
      : "left",
    accentColor: hexToRgb(settings.pdfAccentColor, DEFAULT_ACCENT_RGB),
    accentHex: hexToRgb(settings.pdfAccentColor, null) ? settings.pdfAccentColor : DEFAULT_ACCENT_HEX,
    textColor: hexToRgb(settings.pdfTextColor, DEFAULT_TEXT_RGB),
    textHex: hexToRgb(settings.pdfTextColor, null) ? settings.pdfTextColor : DEFAULT_TEXT_HEX,
    fontFamily: PDF_FONT_FAMILIES.some((f) => f.value === settings.pdfFontFamily) ? settings.pdfFontFamily : "helvetica",
    fontSize: PDF_FONT_SIZE_PRESETS[settings.pdfFontSize] || PDF_FONT_SIZE_PRESETS.normal,
    fontSizePreset: PDF_FONT_SIZE_PRESETS[settings.pdfFontSize] ? settings.pdfFontSize : "normal",
    lineSpacing: PDF_LINE_SPACING_PRESETS[settings.pdfLineSpacing] || PDF_LINE_SPACING_PRESETS.normal,
    lineSpacingPreset: PDF_LINE_SPACING_PRESETS[settings.pdfLineSpacing] ? settings.pdfLineSpacing : "normal",
    // pdfMarginMm (exact value from the Éditeur PDF slider) wins when
    // present; pdfMargins (the old 3-preset select) is only read for
    // settings saved before the slider existed.
    marginX: Number.isFinite(settings.pdfMarginMm)
      ? Math.min(PDF_MARGIN_MM_RANGE.max, Math.max(PDF_MARGIN_MM_RANGE.min, settings.pdfMarginMm))
      : PDF_MARGIN_PRESETS[settings.pdfMargins] || PDF_MARGIN_PRESETS.normal,
    borderEnabled: settings.pdfBorderEnabled === true,
    borderColor: hexToRgb(settings.pdfBorderColor, DEFAULT_ACCENT_RGB),
    borderColorHex: hexToRgb(settings.pdfBorderColor, null) ? settings.pdfBorderColor : DEFAULT_ACCENT_HEX,
    borderWidth: Number.isFinite(settings.pdfBorderWidth)
      ? Math.min(PDF_BORDER_WIDTH_RANGE.max, Math.max(PDF_BORDER_WIDTH_RANGE.min, settings.pdfBorderWidth))
      : PDF_BORDER_WIDTH_RANGE.default,
    borderInset: Number.isFinite(settings.pdfBorderInset)
      ? Math.min(PDF_BORDER_INSET_RANGE.max, Math.max(PDF_BORDER_INSET_RANGE.min, settings.pdfBorderInset))
      : PDF_BORDER_INSET_RANGE.default,
    showPageNumbers: settings.pdfShowPageNumbers === true,
    coverPageEnabled: settings.pdfCoverPageEnabled === true,
    footerText: String(settings.pdfFooterText || "").trim(),
    watermarkEnabled: settings.pdfWatermarkEnabled !== false,
    watermarkText: (settings.pdfWatermarkText || "SaadConcours").trim() || "SaadConcours",
    watermarkOpacity: Number.isFinite(settings.pdfWatermarkOpacity)
      ? Math.min(0.3, Math.max(0.02, settings.pdfWatermarkOpacity))
      : 0.05,
    watermarkStyle: PDF_WATERMARK_STYLES.some((s) => s.value === settings.pdfWatermarkStyle) ? settings.pdfWatermarkStyle : "brand",
    watermarkRotation: Number.isFinite(settings.pdfWatermarkRotation)
      ? Math.max(-90, Math.min(90, settings.pdfWatermarkRotation))
      : 45,
    showSocialFooter: settings.pdfShowSocialFooter !== false,
    socials: PDF_SOCIAL_FIELDS.filter((f) => settings[f.key]).map((f) => ({ ...f, url: settings[f.key] })),
    positions: {
      logo: parsePosition(settings.pdfLayout?.logo),
      watermark: parsePosition(settings.pdfLayout?.watermark),
      footer: parsePosition(settings.pdfLayout?.footer),
      pageNumber: parsePosition(settings.pdfLayout?.pageNumber),
    },
  };

  // Cover page (buildCoursPdf's optional first page, drawn when
  // branding.coverPageEnabled) — kept as its own sub-object rather than
  // more top-level fields since none of this applies outside that one page.
  branding.cover = {
    backgroundColor: hexToRgb(settings.pdfCoverBackgroundColor, null),
    backgroundColorHex: hexToRgb(settings.pdfCoverBackgroundColor, null) ? settings.pdfCoverBackgroundColor : "",
    accentBar: settings.pdfCoverAccentBar === true,
    showDescription: settings.pdfCoverShowDescription !== false,
    showDate: settings.pdfCoverShowDate === true,
    tagline: (settings.pdfCoverTagline || "SaadConcours").trim() || "SaadConcours",
  };

  // Per-level (H1/H2/H3) overrides — unset fields fall back to the document's
  // own font family/text color, so a heading level nobody touched still
  // looks like ordinary body text at a bigger size, not some hardcoded look.
  branding.headings = {};
  for (const level of PDF_HEADING_LEVELS) {
    const raw = settings.pdfHeadings?.[level];
    branding.headings[level] = {
      fontFamily: PDF_FONT_FAMILIES.some((f) => f.value === raw?.fontFamily) ? raw.fontFamily : branding.fontFamily,
      sizeScale: PDF_HEADING_SIZE_PRESETS[raw?.size] || PDF_HEADING_SIZE_PRESETS.normal,
      sizePreset: PDF_HEADING_SIZE_PRESETS[raw?.size] ? raw.size : "normal",
      color: hexToRgb(raw?.color, branding.textColor),
      colorHex: hexToRgb(raw?.color, null) ? raw.color : branding.textHex,
    };
  }

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

// "brand" watermark: the default look — small upright logo mark above the
// upright wordmark, both centered on (cx, cy), unrotated, as one unit.
// (cx, cy) defaults to the page center but can be dragged elsewhere via the
// admin's "Éditeur PDF" page — see addWatermark's `customPos` handling.
function drawBrandWatermark(doc, branding, text, cx, cy) {
  const markSize = 26;
  if (branding.logo) {
    const w = markSize;
    const h = (branding.logo.height / branding.logo.width) * w;
    doc.addImage(branding.logo.dataUrl, branding.logo.format, cx - w / 2, cy - 30, w, h);
  } else {
    drawWatermarkLogo(doc, cx - markSize / 2, cy - 30, markSize, branding.accentColor);
  }
  doc.setFont(branding.fontFamily, "bold");
  doc.setFontSize(30);
  doc.setTextColor(...branding.accentColor);
  doc.text(text, cx, cy + 6, { align: "center" });
}

// "diagonal" watermark: a single classic rotated stamp through (cx, cy) —
// no logo, just large text, the way most "DRAFT"/"CONFIDENTIEL" stationery
// watermarks look.
function drawDiagonalWatermark(doc, branding, text, cx, cy) {
  doc.setFont(branding.fontFamily, "bold");
  doc.setFontSize(34);
  doc.setTextColor(...branding.accentColor);
  doc.text(text, cx, cy, { align: "center", angle: branding.watermarkRotation });
}

// "tiled" watermark: the same rotated text repeated in a loose grid across
// the full page — content that spills past the page edge is clipped by the
// page boundary itself, same as any other PDF drawing.
function drawTiledWatermark(doc, branding, text, pageW, pageH) {
  doc.setFont(branding.fontFamily, "bold");
  doc.setFontSize(15);
  doc.setTextColor(...branding.accentColor);
  const stepX = 68;
  const stepY = 50;
  for (let gy = 0; gy < pageH + stepY; gy += stepY) {
    for (let gx = 0; gx < pageW + stepX; gx += stepX) {
      doc.text(text, gx, gy, { align: "center", angle: branding.watermarkRotation });
    }
  }
}

// Faint watermark stamped once per page of a jsPDF document. Called once,
// right before doc.save(), after all content (and page breaks) has already
// been added — jsPDF only exposes the final page count once the document is
// fully built. `branding.watermarkStyle` picks between the upright
// logo+wordmark lockup, a single rotated stamp, or a repeated tiled pattern
// (see the three draw* helpers above).
export function addWatermark(doc, branding = {}) {
  if (branding.watermarkEnabled === false) return;
  const text = branding.watermarkText || "SaadConcours";
  const opacity = branding.watermarkOpacity ?? 0.05;
  const style = branding.watermarkStyle || "brand";
  // "tiled" repeats across the whole page by design, so a single anchor
  // point wouldn't mean anything for it — only "brand"/"diagonal" honor a
  // custom drag position.
  const customPos = branding.positions && branding.positions.watermark;

  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    const pageW = doc.internal.pageSize.getWidth();
    const pageH = doc.internal.pageSize.getHeight();
    const cx = customPos ? (customPos.xPct / 100) * pageW : pageW / 2;
    const cy = customPos ? (customPos.yPct / 100) * pageH : pageH / 2;
    doc.saveGraphicsState();
    doc.setGState(new doc.GState({ opacity }));
    if (style === "tiled") drawTiledWatermark(doc, branding, text, pageW, pageH);
    else if (style === "diagonal") drawDiagonalWatermark(doc, branding, text, cx, cy);
    else drawBrandWatermark(doc, branding, text, cx, cy);
    doc.restoreGraphicsState();
  }
}

// Branded header on every page — logo + "SaadConcours" wordmark + clickable
// URL by default, or just the admin's uploaded logo image when one is set,
// with a thin rule underneath — so a printed or forwarded PDF is
// unmistakably sourced from the site. `branding.logoPosition` controls
// whether the block sits at the left margin, centered, or at the right
// margin; `branding.accentColor`/`branding.fontFamily` control the wordmark
// and mark's look.
export function addSiteHeader(doc, branding = {}) {
  const pageCount = doc.internal.getNumberOfPages();
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const marginX = branding.marginX ?? 18;
  const position = branding.logoPosition || "left";
  const font = branding.fontFamily || "helvetica";
  const accent = branding.accentColor || DEFAULT_ACCENT_RGB;
  const customPos = branding.positions && branding.positions.logo;

  const iconSize = 7;
  let blockW;
  let blockH;
  let drawBlock; // (x, y) => void — draws the header block with its top-left corner at (x, y)

  if (branding.logo) {
    const h = 9;
    const w = (branding.logo.width / branding.logo.height) * h;
    blockW = w;
    blockH = h;
    drawBlock = (x, y) => {
      doc.addImage(branding.logo.dataUrl, branding.logo.format, x, y, w, h);
    };
  } else {
    doc.setFont(font, "bold");
    doc.setFontSize(12);
    const textW = doc.getTextWidth("Saad") + doc.getTextWidth("Concours");
    blockW = iconSize + 2.5 + textW;
    blockH = iconSize + 4.5; // icon + the URL line drawn below it
    drawBlock = (x, y) => {
      const iconY = y + 1;
      drawLogoMark(doc, x, iconY, iconSize, accent);
      const textX = x + iconSize + 2.5;
      doc.setFont(font, "bold");
      doc.setFontSize(12);
      doc.setTextColor(25, 28, 35);
      doc.text("Saad", textX, iconY + iconSize * 0.65);
      const saadW = doc.getTextWidth("Saad");
      doc.setTextColor(...accent);
      doc.text("Concours", textX + saadW, iconY + iconSize * 0.65);

      doc.setFont(font, "normal");
      doc.setFontSize(7.5);
      doc.setTextColor(130, 138, 155);
      doc.textWithLink(SITE_HOST, textX, iconY + iconSize + 2.2, { url: SITE_URL });
    };
  }

  // The admin's "Éditeur PDF" drag handle represents the *center* of this
  // block (it's rendered with a CSS translate(-50%, -50%)) — a custom
  // position has to be converted from that center point back to the
  // top-left corner drawBlock expects, or the logo ends up visibly offset
  // down-and-right from wherever it was actually dropped.
  const blockX = customPos
    ? (customPos.xPct / 100) * pageW - blockW / 2
    : position === "center" ? (pageW - blockW) / 2 : position === "right" ? pageW - marginX - blockW : marginX;
  const blockY = customPos ? (customPos.yPct / 100) * pageH - blockH / 2 : 4;

  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    drawBlock(blockX, blockY);
    // The thin rule under the header assumes the logo sits near the top —
    // once it's been dragged elsewhere on the page, a fixed line at 16.5mm
    // would just read as a stray mark unrelated to it.
    if (!customPos) {
      doc.setDrawColor(225, 228, 235);
      doc.setLineWidth(0.2);
      doc.line(marginX, 16.5, pageW - marginX, 16.5);
    }
  }
}

// Bottom-of-page strip stamped once per page: an optional custom mention
// line, the "site + social links" line (the admin's "Afficher le site et
// les réseaux sociaux" toggle controls this part), and optional "N / total"
// page numbers — stacked in that order so any subset can be toggled off
// independently without leaving a gap. Kept to plain text/links (no icons)
// since jsPDF has no SVG support and rasterizing an icon per network per
// page isn't worth it.
export function addFooter(doc, branding = {}) {
  const showSocial = branding.showSocialFooter !== false;
  const customText = (branding.footerText || "").trim();
  const showPageNumbers = !!branding.showPageNumbers;
  if (!showSocial && !customText && !showPageNumbers) return;

  const font = branding.fontFamily || "helvetica";
  const pageCount = doc.internal.getNumberOfPages();
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const marginX = branding.marginX ?? 18;
  const footerPos = branding.positions && branding.positions.footer;
  const pageNumPos = branding.positions && branding.positions.pageNumber;

  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    let y = footerPos ? (footerPos.yPct / 100) * pageH : pageH - 10;
    const centerX = footerPos ? (footerPos.xPct / 100) * pageW : pageW / 2;

    // Same reasoning as the header rule: only draw it when the block is
    // still sitting at its default bottom-of-page spot.
    if ((showSocial || customText) && !footerPos) {
      doc.setDrawColor(225, 228, 235);
      doc.setLineWidth(0.2);
      doc.line(marginX, y - 3.5, pageW - marginX, y - 3.5);
    }

    if (customText) {
      doc.setFont(font, "italic");
      doc.setFontSize(7.5);
      doc.setTextColor(140, 144, 155);
      doc.text(customText, centerX, y, { align: "center" });
      y += 4.5;
    }

    if (showSocial) {
      const parts = [{ label: SITE_HOST, url: SITE_URL }, ...(branding.socials || []).map((s) => ({ label: s.label, url: s.url }))];
      doc.setFont(font, "normal");
      doc.setFontSize(7.5);
      const sep = "   ·   ";
      const sepW = doc.getTextWidth(sep);
      const totalW = parts.reduce((sum, p, idx) => sum + doc.getTextWidth(p.label) + (idx > 0 ? sepW : 0), 0);
      let x = centerX - totalW / 2;
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

    if (showPageNumbers) {
      doc.setFont(font, "normal");
      doc.setFontSize(7.5);
      doc.setTextColor(170, 174, 185);
      if (pageNumPos) {
        doc.text(`${i} / ${pageCount}`, (pageNumPos.xPct / 100) * pageW, (pageNumPos.yPct / 100) * pageH, { align: "center" });
      } else {
        doc.text(`${i} / ${pageCount}`, pageW - marginX, pageH - 6, { align: "right" });
      }
    }
  }
}

// Decorative rectangle framing every page, inset from the physical page
// edge by `branding.borderInset` — independent of `branding.marginX` (the
// content-safe area body text wraps to), since a page border sits outside
// the text block, not at its edge.
export function addPageBorder(doc, branding = {}) {
  if (!branding.borderEnabled) return;
  const inset = branding.borderInset ?? PDF_BORDER_INSET_RANGE.default;
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    const pageW = doc.internal.pageSize.getWidth();
    const pageH = doc.internal.pageSize.getHeight();
    doc.setDrawColor(...(branding.borderColor || DEFAULT_ACCENT_RGB));
    doc.setLineWidth(branding.borderWidth ?? PDF_BORDER_WIDTH_RANGE.default);
    doc.rect(inset, inset, pageW - inset * 2, pageH - inset * 2);
  }
}
