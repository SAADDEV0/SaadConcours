"use client";

// The look presets the admin's PDF studio offers ("Modèles"), plus the
// canonical default value for every setting the studio owns.
//
// A template is just a patch of those same settings — applying one writes
// its values into the studio's unsaved form state, and "Enregistrer comme
// modèle" snapshots the current state back into a custom template stored on
// the settings object (`pdfTemplates`). Nothing here is special-cased in the
// renderer: a custom template and a built-in one are the same shape.

import {
  PDF_BORDER_INSET_RANGE,
  PDF_BORDER_WIDTH_RANGE,
  PDF_COVER_ACCENT_BAR_RANGE,
  PDF_COVER_LOGO_SIZE_RANGE,
  PDF_COVER_RULE_WIDTH_RANGE,
  PDF_COVER_TITLE_SIZE_RANGE,
  PDF_MARGIN_MM_RANGE,
  PDF_WATERMARK_OPACITY_RANGE,
} from "./pdfTheme";

// Every key the studio edits, with the value a brand-new install has. Also
// what "Réinitialiser" restores, so a reset lands on exactly the same state
// as a fresh install rather than some other arbitrary baseline.
//
// Deliberately excludes `pdfLogoDataUrl`: the uploaded logo is the admin's
// own asset, not part of a look, so neither applying a template nor
// resetting the styling should silently throw it away.
export const DEFAULT_PDF_SETTINGS = {
  // Marque
  pdfLogoPosition: "left",
  pdfAccentColor: "#4f46e5",
  pdfTextColor: "#1a1d27",
  // Texte
  pdfFontFamily: "helvetica",
  pdfFontSize: "normal",
  pdfLineSpacing: "normal",
  pdfHeadings: {},
  pdfHeadingRule: false,
  // Mise en page
  pdfMarginMm: PDF_MARGIN_MM_RANGE.default,
  pdfShowHeader: true,
  pdfHeaderRule: true,
  pdfShowPageNumbers: false,
  pdfBorderEnabled: false,
  pdfBorderColor: "#4f46e5",
  pdfBorderWidth: PDF_BORDER_WIDTH_RANGE.default,
  pdfBorderInset: PDF_BORDER_INSET_RANGE.default,
  // Filigrane
  pdfWatermarkEnabled: true,
  pdfWatermarkText: "SaadConcours",
  pdfWatermarkOpacity: PDF_WATERMARK_OPACITY_RANGE.default,
  pdfWatermarkStyle: "brand",
  pdfWatermarkRotation: 45,
  // Pied de page
  pdfFooterText: "",
  pdfShowSocialFooter: true,
  // Page de garde
  pdfCoverPageEnabled: false,
  pdfCoverAlign: "center",
  pdfCoverCleanPage: true,
  pdfCoverBackgroundColor: "",
  pdfCoverAccentBar: false,
  pdfCoverAccentBarHeight: PDF_COVER_ACCENT_BAR_RANGE.default,
  pdfCoverShowLogo: true,
  pdfCoverLogoSize: PDF_COVER_LOGO_SIZE_RANGE.default,
  pdfCoverShowEyebrow: true,
  pdfCoverEyebrowColor: "",
  pdfCoverTitleSize: PDF_COVER_TITLE_SIZE_RANGE.default,
  pdfCoverTitleColor: "",
  pdfCoverShowDescription: true,
  pdfCoverSubtitleColor: "",
  pdfCoverShowDate: false,
  pdfCoverShowRule: true,
  pdfCoverRuleWidth: PDF_COVER_RULE_WIDTH_RANGE.default,
  pdfCoverShowTagline: true,
  pdfCoverTagline: "SaadConcours",
  pdfCoverTaglineColor: "",
  pdfCoverTextScale: 1,
  // Positions (drag-and-drop) — empty = every element at its default spot
  pdfLayout: {},
  pdfCoverLayout: {},
};

export const PDF_TEMPLATE_KEYS = Object.keys(DEFAULT_PDF_SETTINGS);

function template(id, name, blurb, values) {
  return { id, name, blurb, builtIn: true, values: { ...DEFAULT_PDF_SETTINGS, ...values } };
}

export const BUILT_IN_PDF_TEMPLATES = [
  template("epure", "Épuré", "Rien que le texte : ni filigrane, ni cadre, ni page de garde.", {
    pdfWatermarkEnabled: false,
    pdfHeaderRule: true,
    pdfMarginMm: 20,
  }),
  template("signature", "Signature", "L'identité SaadConcours : indigo, filigrane discret, page de garde.", {
    pdfShowPageNumbers: true,
    pdfCoverPageEnabled: true,
    pdfCoverAccentBar: true,
    pdfWatermarkOpacity: 0.08,
  }),
  template("academique", "Académique", "Times, marges larges, cadre fin — un rendu de mémoire universitaire.", {
    pdfAccentColor: "#1e3a8a",
    pdfTextColor: "#111827",
    pdfFontFamily: "times",
    pdfMarginMm: 24,
    pdfShowPageNumbers: true,
    pdfBorderEnabled: true,
    pdfBorderColor: "#1e3a8a",
    pdfBorderWidth: 0.4,
    pdfBorderInset: 8,
    pdfWatermarkStyle: "diagonal",
    pdfWatermarkOpacity: 0.07,
    pdfCoverPageEnabled: true,
    pdfCoverTitleSize: 24,
    pdfCoverRuleWidth: 60,
  }),
  template("concours-pro", "Concours Pro", "Page de garde pleine couleur, filigrane en quadrillage.", {
    pdfAccentColor: "#0f766e",
    pdfShowPageNumbers: true,
    pdfWatermarkStyle: "tiled",
    pdfWatermarkOpacity: 0.07,
    pdfCoverPageEnabled: true,
    pdfCoverBackgroundColor: "#0f766e",
    pdfCoverTitleColor: "#ffffff",
    pdfCoverEyebrowColor: "#99f6e4",
    pdfCoverSubtitleColor: "#ccfbf1",
    pdfCoverTaglineColor: "#99f6e4",
    pdfCoverShowLogo: true,
    pdfCoverLogoSize: 26,
    pdfCoverShowDate: true,
  }),
  template("nuit", "Nuit", "Couverture sombre et contrastée, contenu clair et lisible.", {
    pdfAccentColor: "#6366f1",
    pdfShowPageNumbers: true,
    pdfWatermarkOpacity: 0.07,
    pdfCoverPageEnabled: true,
    pdfCoverBackgroundColor: "#0f172a",
    pdfCoverTitleColor: "#f8fafc",
    pdfCoverEyebrowColor: "#a5b4fc",
    pdfCoverSubtitleColor: "#cbd5e1",
    pdfCoverTaglineColor: "#64748b",
    pdfCoverAccentBar: true,
    pdfCoverAccentBarHeight: 6,
    pdfCoverTitleSize: 26,
  }),
  template("revision", "Révision compacte", "Petite police, interligne serré, plus de contenu par page.", {
    pdfFontSize: "small",
    pdfLineSpacing: "compact",
    pdfMarginMm: 12,
    pdfShowPageNumbers: true,
    pdfHeadingRule: true,
    pdfWatermarkEnabled: false,
    pdfShowSocialFooter: false,
    pdfFooterText: "Fiche de révision — SaadConcours",
  }),
];

// Custom templates are stored on the settings object as
// { id, name, blurb, values }. Anything malformed (hand-edited JSON, an old
// shape) is dropped rather than crashing the gallery.
export function normalizeCustomTemplates(raw) {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((t) => t && typeof t === "object" && typeof t.id === "string" && t.values && typeof t.values === "object")
    .map((t) => ({
      id: t.id,
      name: String(t.name || "Modèle").slice(0, 60),
      blurb: String(t.blurb || "").slice(0, 140),
      builtIn: false,
      createdAt: t.createdAt || null,
      values: pickTemplateValues(t.values),
    }));
}

// Keeps a template to the keys the studio actually owns — a snapshot taken
// from the live form would otherwise carry unrelated settings (social links,
// ad slots…) and applying it would quietly overwrite them.
export function pickTemplateValues(source = {}) {
  const values = {};
  for (const key of PDF_TEMPLATE_KEYS) {
    values[key] = source[key] === undefined ? DEFAULT_PDF_SETTINGS[key] : source[key];
  }
  return values;
}

// Cheap "is this template the one currently applied" check for the gallery's
// active state — compares only the keys a template carries, JSON-deep since
// every value is a primitive, a plain object or an array.
export function templateMatches(template, current) {
  return PDF_TEMPLATE_KEYS.every(
    (key) => JSON.stringify(template.values[key] ?? null) === JSON.stringify(current?.[key] ?? DEFAULT_PDF_SETTINGS[key] ?? null)
  );
}
