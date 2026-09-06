"use client";

// Inspector for the "Contenu" tab — everything that applies to the pages
// carrying the actual document (never to the cover, which has its own tab).

import BrandLogo from "@/app/_shared/BrandLogo";
import {
  PDF_BORDER_INSET_RANGE,
  PDF_BORDER_WIDTH_RANGE,
  PDF_FONT_OPTIONS,
  PDF_FONT_SIZE_OPTIONS,
  PDF_HEADING_LEVELS,
  PDF_HEADING_SIZE_OPTIONS,
  PDF_LINE_SPACING_OPTIONS,
  PDF_LOGO_POSITION_OPTIONS,
  PDF_MARGIN_MM_RANGE,
  PDF_WATERMARK_STYLE_OPTIONS,
} from "@/app/_shared/pdfTheme";
import { marginMmOf } from "./PdfCanvas";
import { ColorField, Field, SegmentedField, SelectField, SliderField, SwitchField, Section, TextField } from "./StudioFields";

export default function ContentPanel({ settings, set, setHeading, onLogoUpload, logoError }) {
  const marginMm = marginMmOf(settings);
  const watermarkOn = settings.pdfWatermarkEnabled !== false;
  const headingsTouched = PDF_HEADING_LEVELS.filter(({ key }) => {
    const h = settings.pdfHeadings?.[key];
    return h && (h.fontFamily || h.color || (h.size && h.size !== "normal"));
  }).length;

  return (
    <div className="pdfx-panel">
      <div className="pdfx-panel-head">
        <div>
          <h2 className="pdfx-panel-title">Pages de contenu</h2>
          <div className="pdfx-panel-hint">
            S'applique aux fiches de cours, aux énoncés/corrigés de concours et aux PDF d'évaluation.
          </div>
        </div>
      </div>
      <div className="pdfx-panel-body">
        <Section icon="🎨" title="Marque et couleurs" defaultOpen>
          <div className="pdfx-upload">
            <div className="pdfx-upload-preview">
              {settings.pdfLogoDataUrl ? <img src={settings.pdfLogoDataUrl} alt="Logo PDF" /> : <BrandLogo gradientId="pdfxPanelLogo" />}
            </div>
            <div className="pdfx-upload-body">
              <input
                type="file"
                className="pdfx-file"
                accept="image/png,image/jpeg,image/webp"
                onChange={(e) => onLogoUpload(e.target.files && e.target.files[0])}
              />
              <div className="pdfx-help" style={{ marginTop: 6 }}>
                {settings.pdfLogoDataUrl ? (
                  <button type="button" className="admin-link-btn" onClick={() => set("pdfLogoDataUrl", "")}>
                    Retirer et revenir au logo SaadConcours
                  </button>
                ) : (
                  "PNG/JPEG/WebP, 400 Ko max. Sans logo, la marque vectorielle par défaut est utilisée."
                )}
              </div>
            </div>
          </div>
          {logoError && <div className="admin-error">{logoError}</div>}

          <SegmentedField
            label="Position de départ du logo"
            hint="Ignorée dès que le logo est glissé sur la page."
            value={settings.pdfLogoPosition || "left"}
            options={PDF_LOGO_POSITION_OPTIONS}
            onChange={(v) => set("pdfLogoPosition", v)}
          />

          <div className="pdfx-grid-2">
            <ColorField
              label="Couleur d'accent"
              value={settings.pdfAccentColor}
              fallback="#4f46e5"
              onChange={(v) => set("pdfAccentColor", v)}
            />
            <ColorField label="Couleur du texte" value={settings.pdfTextColor} fallback="#1a1d27" onChange={(v) => set("pdfTextColor", v)} />
          </div>
          <span className="pdfx-help">L'accent colore le logo vectoriel, le filigrane, les en-têtes de tableau et le trait de la page de garde.</span>
        </Section>

        <Section icon="🔤" title="Texte">
          <SelectField
            label="Police"
            value={settings.pdfFontFamily || "helvetica"}
            options={PDF_FONT_OPTIONS}
            onChange={(v) => set("pdfFontFamily", v)}
          />
          <SegmentedField
            label="Taille du texte"
            value={settings.pdfFontSize || "normal"}
            options={PDF_FONT_SIZE_OPTIONS}
            onChange={(v) => set("pdfFontSize", v)}
          />
          <SegmentedField
            label="Interligne"
            value={settings.pdfLineSpacing || "normal"}
            options={PDF_LINE_SPACING_OPTIONS}
            onChange={(v) => set("pdfLineSpacing", v)}
          />
        </Section>

        <Section icon="🅷" title="Titres" badge={headingsTouched ? `${headingsTouched} personnalisé(s)` : null}>
          <span className="pdfx-help">
            Un champ laissé par défaut garde l'apparence du texte courant, juste plus grand.
          </span>
          {PDF_HEADING_LEVELS.map(({ key, label }) => {
            const h = settings.pdfHeadings?.[key] || {};
            return (
              <div key={key} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span className="pdfx-label">{label}</span>
                <div className="pdfx-grid-2">
                  <Field>
                    <select className="pdfx-select" value={h.fontFamily || ""} onChange={(e) => setHeading(key, "fontFamily", e.target.value)}>
                      <option value="">Police du texte</option>
                      {PDF_FONT_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field>
                    <select className="pdfx-select" value={h.size || "normal"} onChange={(e) => setHeading(key, "size", e.target.value)}>
                      {PDF_HEADING_SIZE_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>
                <ColorField value={h.color} fallback="#1a1d27" clearable onChange={(v) => setHeading(key, "color", v)} />
              </div>
            );
          })}
          <SwitchField
            label="Trait avant les titres H2"
            hint="Ligne fine séparant chaque grande partie. Désactivée par défaut : sur une fiche à sections courtes elle ressemble à un trait qui coupe la page."
            checked={settings.pdfHeadingRule === true}
            onChange={(v) => set("pdfHeadingRule", v)}
          />
        </Section>

        <Section icon="📐" title="Mise en page">
          <SliderField
            label="Marge du texte"
            hint="Distance entre le bord de la page et le texte — visible comme la zone pointillée sur l'aperçu."
            value={marginMm}
            min={PDF_MARGIN_MM_RANGE.min}
            max={PDF_MARGIN_MM_RANGE.max}
            format={(v) => `${v} mm`}
            onChange={(v) => set("pdfMarginMm", v)}
          />
          <SwitchField
            label="Numéroter les pages"
            hint='"1 / 4" en bas à droite, sauf si le bloc est déplacé sur la page.'
            checked={settings.pdfShowPageNumbers === true}
            onChange={(v) => set("pdfShowPageNumbers", v)}
          />
          <SwitchField
            label="Cadre décoratif"
            hint="Rectangle fin tout autour de chaque page de contenu."
            checked={settings.pdfBorderEnabled === true}
            onChange={(v) => set("pdfBorderEnabled", v)}
          />
          {settings.pdfBorderEnabled === true && (
            <>
              <ColorField label="Couleur du cadre" value={settings.pdfBorderColor} fallback="#4f46e5" onChange={(v) => set("pdfBorderColor", v)} />
              <SliderField
                label="Épaisseur"
                value={settings.pdfBorderWidth ?? PDF_BORDER_WIDTH_RANGE.default}
                min={PDF_BORDER_WIDTH_RANGE.min}
                max={PDF_BORDER_WIDTH_RANGE.max}
                step={PDF_BORDER_WIDTH_RANGE.step}
                format={(v) => `${Number(v).toFixed(1)} mm`}
                onChange={(v) => set("pdfBorderWidth", v)}
              />
              <SliderField
                label="Distance du bord"
                value={settings.pdfBorderInset ?? PDF_BORDER_INSET_RANGE.default}
                min={PDF_BORDER_INSET_RANGE.min}
                max={PDF_BORDER_INSET_RANGE.max}
                format={(v) => `${v} mm`}
                onChange={(v) => set("pdfBorderInset", v)}
              />
            </>
          )}
        </Section>

        <Section icon="💧" title="Filigrane">
          <SwitchField
            label="Filigrane sur les pages"
            checked={watermarkOn}
            onChange={(v) => set("pdfWatermarkEnabled", v)}
          />
          {watermarkOn && (
            <>
              <TextField label="Texte" value={settings.pdfWatermarkText} placeholder="SaadConcours" onChange={(v) => set("pdfWatermarkText", v)} />
              <SegmentedField
                label="Disposition"
                hint={
                  settings.pdfWatermarkStyle === "tiled"
                    ? "Le motif couvre toute la page — la position glissée est ignorée."
                    : "Le filigrane suit la position glissée sur l'aperçu."
                }
                value={settings.pdfWatermarkStyle || "brand"}
                options={PDF_WATERMARK_STYLE_OPTIONS}
                onChange={(v) => set("pdfWatermarkStyle", v)}
              />
              {settings.pdfWatermarkStyle !== "brand" && (
                <SliderField
                  label="Rotation"
                  value={settings.pdfWatermarkRotation ?? 45}
                  min={-90}
                  max={90}
                  step={5}
                  format={(v) => `${v}°`}
                  onChange={(v) => set("pdfWatermarkRotation", v)}
                />
              )}
              <SliderField
                label="Opacité"
                hint="L'aperçu écran renforce légèrement le filigrane pour qu'il reste visible à cette taille."
                value={settings.pdfWatermarkOpacity ?? 0.05}
                min={0.02}
                max={0.3}
                step={0.01}
                format={(v) => `${Math.round(v * 100)} %`}
                onChange={(v) => set("pdfWatermarkOpacity", v)}
              />
            </>
          )}
        </Section>

        <Section icon="📎" title="En-tête et pied de page">
          <SwitchField
            label="En-tête de marque"
            hint="Logo + wordmark + adresse du site, en haut de chaque page de contenu."
            checked={settings.pdfShowHeader !== false}
            onChange={(v) => set("pdfShowHeader", v)}
          />
          {settings.pdfShowHeader !== false && (
            <SwitchField
              label="Trait sous l'en-tête"
              checked={settings.pdfHeaderRule !== false}
              onChange={(v) => set("pdfHeaderRule", v)}
            />
          )}
          <TextField
            label="Mention personnalisée"
            hint="Ligne en italique juste au-dessus des liens, en bas de page."
            value={settings.pdfFooterText}
            placeholder="ex : Document réservé aux abonnés — ne pas diffuser"
            onChange={(v) => set("pdfFooterText", v)}
          />
          <SwitchField
            label="Site et réseaux sociaux"
            hint="Reprend les liens de l'onglet Réglages · Général."
            checked={settings.pdfShowSocialFooter !== false}
            onChange={(v) => set("pdfShowSocialFooter", v)}
          />
        </Section>
      </div>
    </div>
  );
}
