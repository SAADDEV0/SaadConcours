"use client";

// Inspector for the "Page de garde" tab. The cover is a separate document
// surface with its own rules — every block is freely positioned, nothing
// flows — so it gets its own canvas and its own settings rather than a
// couple of checkboxes buried in the content panel.

import {
  PDF_COVER_ACCENT_BAR_RANGE,
  PDF_COVER_ALIGN_OPTIONS,
  PDF_COVER_LOGO_SIZE_RANGE,
  PDF_COVER_RULE_WIDTH_RANGE,
  PDF_COVER_TEXT_SCALE_RANGE,
  PDF_COVER_TITLE_SIZE_RANGE,
} from "@/app/_shared/pdfTheme";
import { ColorField, SegmentedField, SliderField, SwitchField, Section, TextField } from "./StudioFields";

export default function CoverPanel({ settings, set, onResetLayout, movedCount }) {
  const enabled = settings.pdfCoverPageEnabled === true;

  return (
    <div className="pdfx-panel">
      <div className="pdfx-panel-head">
        <div>
          <h2 className="pdfx-panel-title">Page de garde</h2>
          <div className="pdfx-panel-hint">
            Première page de chaque PDF. Le sur-titre, le titre et la description sont remplis automatiquement selon le
            document (module et titre du cours, établissement et année du concours, module de l'évaluation).
          </div>
        </div>
      </div>
      <div className="pdfx-panel-body">
        <div style={{ paddingTop: 14 }}>
          <SwitchField
            label="Ajouter une page de garde"
            hint="Aux fiches de cours, énoncés/corrigés de concours et PDF d'évaluation."
            checked={enabled}
            onChange={(v) => set("pdfCoverPageEnabled", v)}
          />
        </div>

        {!enabled ? (
          <div className="pdfx-empty" style={{ marginTop: 14 }}>
            Page de garde désactivée — les PDF commencent directement par le contenu.
          </div>
        ) : (
          <>
            <Section icon="🧭" title="Disposition" defaultOpen>
              <SegmentedField
                label="Alignement"
                hint="Change le point d'ancrage de chaque bloc : son centre, ou son bord gauche."
                value={settings.pdfCoverAlign || "center"}
                options={PDF_COVER_ALIGN_OPTIONS}
                onChange={(v) => set("pdfCoverAlign", v)}
              />
              <SwitchField
                label="Page de garde épurée"
                hint="Pas d'en-tête, de pied de page, de filigrane ni de cadre sur la couverture — seulement ce qui est placé ci-contre."
                checked={settings.pdfCoverCleanPage !== false}
                onChange={(v) => set("pdfCoverCleanPage", v)}
              />
              {movedCount > 0 && (
                <button type="button" className="admin-btn secondary" onClick={onResetLayout}>
                  ↺ Replacer les {movedCount} bloc(s) déplacé(s)
                </button>
              )}
            </Section>

            <Section icon="🎨" title="Fond et bandeau">
              <ColorField
                label="Couleur de fond"
                hint="Vide = page blanche. Pense à éclaircir les textes si tu choisis un fond sombre."
                value={settings.pdfCoverBackgroundColor}
                fallback="#ffffff"
                clearable
                onChange={(v) => set("pdfCoverBackgroundColor", v)}
              />
              <SwitchField
                label="Bandeau d'accent en haut"
                checked={settings.pdfCoverAccentBar === true}
                onChange={(v) => set("pdfCoverAccentBar", v)}
              />
              {settings.pdfCoverAccentBar === true && (
                <SliderField
                  label="Hauteur du bandeau"
                  value={settings.pdfCoverAccentBarHeight ?? PDF_COVER_ACCENT_BAR_RANGE.default}
                  min={PDF_COVER_ACCENT_BAR_RANGE.min}
                  max={PDF_COVER_ACCENT_BAR_RANGE.max}
                  format={(v) => `${v} mm`}
                  onChange={(v) => set("pdfCoverAccentBarHeight", v)}
                />
              )}
            </Section>

            <Section icon="🏷️" title="Logo">
              <SwitchField
                label="Afficher le logo"
                checked={settings.pdfCoverShowLogo !== false}
                onChange={(v) => set("pdfCoverShowLogo", v)}
              />
              {settings.pdfCoverShowLogo !== false && (
                <SliderField
                  label="Taille du logo"
                  value={settings.pdfCoverLogoSize ?? PDF_COVER_LOGO_SIZE_RANGE.default}
                  min={PDF_COVER_LOGO_SIZE_RANGE.min}
                  max={PDF_COVER_LOGO_SIZE_RANGE.max}
                  format={(v) => `${v} mm`}
                  onChange={(v) => set("pdfCoverLogoSize", v)}
                />
              )}
            </Section>

            <Section icon="✍️" title="Textes" defaultOpen>
              <SliderField
                label="Taille du titre"
                value={settings.pdfCoverTitleSize ?? PDF_COVER_TITLE_SIZE_RANGE.default}
                min={PDF_COVER_TITLE_SIZE_RANGE.min}
                max={PDF_COVER_TITLE_SIZE_RANGE.max}
                format={(v) => `${v} pt`}
                onChange={(v) => set("pdfCoverTitleSize", v)}
              />
              <ColorField
                label="Couleur du titre"
                value={settings.pdfCoverTitleColor}
                fallback="#1a1d27"
                clearable
                onChange={(v) => set("pdfCoverTitleColor", v)}
              />
              <SliderField
                label="Taille des autres textes"
                hint="Sur-titre, description, date et mention — proportionnellement."
                value={settings.pdfCoverTextScale ?? 1}
                min={PDF_COVER_TEXT_SCALE_RANGE.min}
                max={PDF_COVER_TEXT_SCALE_RANGE.max}
                step={PDF_COVER_TEXT_SCALE_RANGE.step}
                format={(v) => `${Math.round(v * 100)} %`}
                onChange={(v) => set("pdfCoverTextScale", v)}
              />

              <SwitchField
                label="Sur-titre"
                hint="Module du cours, « Concours », module de l'évaluation — en majuscules."
                checked={settings.pdfCoverShowEyebrow !== false}
                onChange={(v) => set("pdfCoverShowEyebrow", v)}
              />
              {settings.pdfCoverShowEyebrow !== false && (
                <ColorField
                  label="Couleur du sur-titre"
                  value={settings.pdfCoverEyebrowColor}
                  fallback="#4f46e5"
                  clearable
                  onChange={(v) => set("pdfCoverEyebrowColor", v)}
                />
              )}

              <SwitchField
                label="Description"
                checked={settings.pdfCoverShowDescription !== false}
                onChange={(v) => set("pdfCoverShowDescription", v)}
              />
              {settings.pdfCoverShowDescription !== false && (
                <ColorField
                  label="Couleur de la description"
                  value={settings.pdfCoverSubtitleColor}
                  fallback="#646874"
                  clearable
                  onChange={(v) => set("pdfCoverSubtitleColor", v)}
                />
              )}

              <SwitchField
                label="Date de génération"
                checked={settings.pdfCoverShowDate === true}
                onChange={(v) => set("pdfCoverShowDate", v)}
              />
            </Section>

            <Section icon="➖" title="Trait et mention">
              <SwitchField label="Trait décoratif" checked={settings.pdfCoverShowRule !== false} onChange={(v) => set("pdfCoverShowRule", v)} />
              {settings.pdfCoverShowRule !== false && (
                <SliderField
                  label="Longueur du trait"
                  value={settings.pdfCoverRuleWidth ?? PDF_COVER_RULE_WIDTH_RANGE.default}
                  min={PDF_COVER_RULE_WIDTH_RANGE.min}
                  max={PDF_COVER_RULE_WIDTH_RANGE.max}
                  format={(v) => `${v} mm`}
                  onChange={(v) => set("pdfCoverRuleWidth", v)}
                />
              )}
              <SwitchField
                label="Mention en bas de page"
                checked={settings.pdfCoverShowTagline !== false}
                onChange={(v) => set("pdfCoverShowTagline", v)}
              />
              {settings.pdfCoverShowTagline !== false && (
                <>
                  <TextField
                    label="Texte de la mention"
                    value={settings.pdfCoverTagline}
                    placeholder="SaadConcours"
                    onChange={(v) => set("pdfCoverTagline", v)}
                  />
                  <ColorField
                    label="Couleur de la mention"
                    value={settings.pdfCoverTaglineColor}
                    fallback="#969aa5"
                    clearable
                    onChange={(v) => set("pdfCoverTaglineColor", v)}
                  />
                </>
              )}
            </Section>
          </>
        )}
      </div>
    </div>
  );
}
