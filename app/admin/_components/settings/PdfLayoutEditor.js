"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import PdfPreviewModal from "../ui/PdfPreviewModal";
import { useToast } from "../ui/ToastProvider";
import { useConfirm } from "../ui/ConfirmProvider";
import { PDF_MARGIN_PRESETS, PDF_MARGIN_MM_RANGE, PDF_BORDER_WIDTH_RANGE, PDF_BORDER_INSET_RANGE } from "@/app/_shared/pdfWatermark";
import BrandLogo from "@/app/_shared/BrandLogo";
import {
  MAX_LOGO_BYTES,
  PDF_FONT_OPTIONS,
  PDF_FONT_SIZE_OPTIONS,
  PDF_HEADING_LEVEL_LABELS,
  PDF_HEADING_SIZE_OPTIONS,
  PDF_LINE_SPACING_OPTIONS,
  PDF_WATERMARK_STYLE_OPTIONS,
} from "../../_lib/settingsFields";

// A4 in mm — the guide rectangle below is computed against this, matching
// the page size buildCoursPdf/downloadConcoursPdf actually render at.
const PAGE_W_MM = 210;
const PAGE_H_MM = 297;

// Starting position shown in the editor before anything's been dragged —
// mirrors pdfWatermark.js's fixed defaults closely enough to feel like "this
// is where it already is", without needing to reverse-engineer jsPDF's exact
// block-width math (the logo's text width, the footer's link list width...)
// just to place a drag handle.
const ELEMENTS = [
  {
    key: "logo",
    label: "Logo",
    icon: "🖼️",
    defaultPos: (s) =>
      s.pdfLogoPosition === "center" ? { xPct: 50, yPct: 3 } : s.pdfLogoPosition === "right" ? { xPct: 84, yPct: 3 } : { xPct: 9, yPct: 3 },
  },
  { key: "watermark", label: "Filigrane", icon: "💧", defaultPos: () => ({ xPct: 50, yPct: 50 }) },
  { key: "footer", label: "Pied de page", icon: "📎", defaultPos: () => ({ xPct: 50, yPct: 96 }) },
  { key: "pageNumber", label: "Numéro de page", icon: "#️⃣", defaultPos: () => ({ xPct: 92, yPct: 98 }) },
];

// All the flat (non-position) settings keys this page owns — `pdfLayout`
// (the drag positions) is saved alongside these but tracked in its own
// `layout` state since it's driven by pointer drags, not form inputs.
const OWN_KEYS = [
  "pdfLogoDataUrl",
  "pdfLogoPosition",
  "pdfAccentColor",
  "pdfTextColor",
  "pdfFontFamily",
  "pdfFontSize",
  "pdfLineSpacing",
  "pdfMargins",
  "pdfMarginMm",
  "pdfBorderEnabled",
  "pdfBorderColor",
  "pdfBorderWidth",
  "pdfBorderInset",
  "pdfShowPageNumbers",
  "pdfCoverPageEnabled",
  "pdfCoverBackgroundColor",
  "pdfCoverAccentBar",
  "pdfCoverShowDescription",
  "pdfCoverShowDate",
  "pdfCoverTagline",
  "pdfWatermarkEnabled",
  "pdfWatermarkText",
  "pdfWatermarkOpacity",
  "pdfWatermarkStyle",
  "pdfWatermarkRotation",
  "pdfFooterText",
  "pdfShowSocialFooter",
  "pdfHeadings",
];

// What "Réinitialiser" restores — mirrors every `?? fallback` already used
// below so the reset result is exactly what a brand-new install looks like,
// not some other arbitrary state.
const DEFAULT_FORM_VALUES = {
  pdfLogoDataUrl: "",
  pdfLogoPosition: "left",
  pdfAccentColor: "#4f46e5",
  pdfTextColor: "#1a1d27",
  pdfFontFamily: "helvetica",
  pdfFontSize: "normal",
  pdfLineSpacing: "normal",
  pdfMarginMm: PDF_MARGIN_PRESETS.normal,
  pdfBorderEnabled: false,
  pdfBorderColor: "#4f46e5",
  pdfBorderWidth: PDF_BORDER_WIDTH_RANGE.default,
  pdfBorderInset: PDF_BORDER_INSET_RANGE.default,
  pdfShowPageNumbers: false,
  pdfCoverPageEnabled: false,
  pdfCoverBackgroundColor: "",
  pdfCoverAccentBar: false,
  pdfCoverShowDescription: true,
  pdfCoverShowDate: false,
  pdfCoverTagline: "",
  pdfWatermarkEnabled: true,
  pdfWatermarkText: "SaadConcours",
  pdfWatermarkOpacity: 0.05,
  pdfWatermarkStyle: "brand",
  pdfWatermarkRotation: 45,
  pdfFooterText: "",
  pdfShowSocialFooter: true,
  pdfHeadings: {},
};

const SAMPLE_COURS = {
  id: "apercu-editeur-pdf",
  module: "Aperçu de l'éditeur PDF",
  title: "Exemple — vérifie tes réglages et positions",
  description: "PDF de test généré avec les réglages et la disposition actuels (pas encore enregistrés).",
  content: `# Titre H1 — Analyse Financière

## Introduction (H2)

Ceci est un paragraphe d'exemple pour visualiser le rendu du **texte en gras**, de l'*italique*, et d'une formule : $E = mc^2$.

- Premier point de la liste
- Deuxième point avec une fraction $\\dfrac{a}{b}$
- Troisième point

### Sous-section (H3)

Un paragraphe sous un titre H3, pour vérifier sa taille et sa couleur.

## Tableau récapitulatif (H2)

| Indicateur | Valeur |
| --- | --- |
| Fonds de roulement | 1 200 |
| Besoin en fonds de roulement | 800 |
| Trésorerie nette | 400 |

> Une citation d'exemple pour vérifier le rendu des blockquotes.
`,
};

// How close (in % of page width/height) a drag needs to get to a guide line
// before it snaps to it — small enough to stay easy to nudge off of, large
// enough to actually catch a slightly-off drag.
const SNAP_PCT = 1.5;

function findSnap(value, targets) {
  return targets.find((t) => Math.abs(value - t.at) <= SNAP_PCT) || null;
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function updateHeadingField(form, setForm, level, field, value) {
  setForm({
    ...form,
    pdfHeadings: {
      ...form.pdfHeadings,
      [level]: { ...(form.pdfHeadings?.[level] || {}), [field]: value },
    },
  });
}

export default function PdfLayoutEditor() {
  const [form, setForm] = useState(null);
  const [layout, setLayout] = useState({});
  const [saving, setSaving] = useState(false);
  const [logoError, setLogoError] = useState("");
  const [previewUrl, setPreviewUrl] = useState(null);
  const [previewLoading, setPreviewLoading] = useState(false);
  const [previewError, setPreviewError] = useState("");
  const [snap, setSnap] = useState({ x: null, y: null });
  const pageRef = useRef(null);
  const dragKeyRef = useRef(null);
  const toast = useToast();
  const confirm = useConfirm();

  useEffect(() => {
    fetch("/api/settings")
      .then((r) => r.json())
      .then((data) => {
        setForm(data);
        setLayout(data.pdfLayout || {});
      });
  }, []);

  // Dashed guide showing the actual content-safe area at the current
  // "Marges" preset — the margin sides are symmetric in
  // buildCoursPdf/downloadConcoursPdf, but the top keeps extra room for the
  // header block (topY = marginX + 8) while the bottom doesn't. Also doubles
  // as the set of x/y values a drag can snap to, alongside the page center.
  const marginMm = Number.isFinite(form?.pdfMarginMm)
    ? form.pdfMarginMm
    : PDF_MARGIN_PRESETS[form?.pdfMargins] || PDF_MARGIN_PRESETS.normal;

  const guide = useMemo(() => {
    const topMm = marginMm + 8;
    const leftPct = (marginMm / PAGE_W_MM) * 100;
    const topPct = (topMm / PAGE_H_MM) * 100;
    const bottomPct = (marginMm / PAGE_H_MM) * 100;
    return {
      marginMm,
      leftPct,
      rightPct: leftPct,
      topPct,
      bottomPct,
      xSnaps: [
        { id: "left", at: leftPct },
        { id: "center-x", at: 50 },
        { id: "right", at: 100 - leftPct },
      ],
      ySnaps: [
        { id: "top", at: topPct },
        { id: "center-y", at: 50 },
        { id: "bottom", at: 100 - bottomPct },
      ],
    };
  }, [form]);

  function positionFor(el) {
    return layout[el.key] || el.defaultPos(form || {});
  }

  // The logo chip shows the *actual* mark used on every PDF/the site itself
  // (the admin's uploaded logo, or else the real vector cap+book mark) —
  // not a generic 🖼️ placeholder — so what's dragged here matches what
  // renders.
  function renderChipIcon(el) {
    if (el.key === "logo") {
      if (form?.pdfLogoDataUrl) {
        return <img src={form.pdfLogoDataUrl} alt="" className="pdf-layout-chip-logo-img" />;
      }
      return <BrandLogo className="pdf-layout-chip-logo-svg" gradientId="pdfLayoutChipLogoGrad" />;
    }
    return <span className="pdf-layout-chip-icon">{el.icon}</span>;
  }

  function handlePointerDown(key, e) {
    e.preventDefault();
    dragKeyRef.current = key;
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e) {
    const key = dragKeyRef.current;
    if (!key || !pageRef.current) return;
    const rect = pageRef.current.getBoundingClientRect();
    let xPct = Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100));
    let yPct = Math.min(100, Math.max(0, ((e.clientY - rect.top) / rect.height) * 100));

    const xHit = findSnap(xPct, guide.xSnaps);
    const yHit = findSnap(yPct, guide.ySnaps);
    if (xHit) xPct = xHit.at;
    if (yHit) yPct = yHit.at;
    setSnap({ x: xHit?.id || null, y: yHit?.id || null });

    setLayout((prev) => ({ ...prev, [key]: { xPct, yPct } }));
  }

  function handlePointerUp() {
    dragKeyRef.current = null;
    setSnap({ x: null, y: null });
  }

  function resetElement(key) {
    setLayout((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  // Restores every field this page owns to its out-of-the-box default —
  // logo position, colors, fonts, watermark, border, cover page, headings —
  // and clears every dragged position. Only touches unsaved state; nothing
  // is persisted until "Enregistrer" is clicked afterwards, so this is easy
  // to back out of by just reloading the page.
  async function handleResetAll() {
    const ok = await confirm({
      title: "Réinitialiser tous les réglages PDF ?",
      body: "Logo, couleurs, polices, filigrane, bordure, page de garde, titres et positions glissées reviennent à leurs valeurs par défaut. Rien n'est encore enregistré — tu peux encore annuler en rechargeant la page, ou enregistrer pour confirmer.",
      confirmLabel: "Réinitialiser",
      tone: "danger",
    });
    if (!ok) return;
    setForm((prev) => ({ ...prev, ...DEFAULT_FORM_VALUES }));
    setLayout({});
    toast.success("Réglages réinitialisés — pense à Enregistrer pour confirmer.");
  }

  async function handleLogoUpload(file) {
    setLogoError("");
    if (!file) return;
    if (file.size > MAX_LOGO_BYTES) {
      setLogoError(`Image trop lourde (${Math.round(file.size / 1024)} Ko) — 400 Ko max, le logo est stocké tel quel dans les réglages.`);
      return;
    }
    try {
      const dataUrl = await readFileAsDataUrl(file);
      setForm({ ...form, pdfLogoDataUrl: dataUrl });
    } catch {
      setLogoError("Échec de la lecture du fichier.");
    }
  }

  async function handleSave() {
    setSaving(true);
    try {
      const patch = { ...Object.fromEntries(OWN_KEYS.map((k) => [k, form[k]])), pdfLayout: layout };
      const res = await fetch("/api/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patch),
      });
      const data = await res.json();
      if (!res.ok) throw new Error("save failed");
      setForm(data);
      setLayout(data.pdfLayout || {});
      toast.success("Réglages PDF enregistrés.");
    } catch {
      toast.error("Échec de l'enregistrement.");
    } finally {
      setSaving(false);
    }
  }

  function closePreview() {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
  }

  // Previews the *unsaved* form state + drag positions (not what's
  // persisted), so tweaking anything on this page shows its real effect
  // before committing to "Enregistrer".
  async function handlePreview() {
    setPreviewError("");
    // jsPDF/marked/MathJax load via <Script strategy="afterInteractive"> in
    // the root layout — on a slow connection or right after first paint they
    // can still be mid-load, and buildCoursPdf throws immediately trying to
    // destructure window.jspdf. Catching that up front gives an actionable
    // message instead of the generic failure below.
    if (!window.jspdf || !window.marked) {
      setPreviewError("Les bibliothèques PDF sont encore en cours de chargement — réessaie dans quelques secondes.");
      return;
    }
    setPreviewLoading(true);
    try {
      const [{ buildCoursPdf }, { resolvePdfBranding }] = await Promise.all([
        import("@/app/_shared/coursPdf"),
        import("@/app/_shared/pdfWatermark"),
      ]);
      const branding = await resolvePdfBranding({ ...form, pdfLayout: layout });
      const doc = await buildCoursPdf(SAMPLE_COURS, branding);
      setPreviewUrl(doc.output("bloburl"));
    } catch (err) {
      console.error("Échec de la génération de l'aperçu PDF :", err);
      setPreviewError(`Échec de la génération de l'aperçu.${err?.message ? ` (${err.message})` : ""}`);
    } finally {
      setPreviewLoading(false);
    }
  }

  if (!form) return <div className="admin-card">Chargement...</div>;

  const watermarkStyle = form.pdfWatermarkStyle || "brand";

  return (
    <>
      <div className="admin-card">
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <p className="admin-image-hint pdf-layout-hint" style={{ margin: 0 }}>
            Compose ici l'apparence de tous les PDF générés par le site (fiches de cours, énoncés et corrigés de
            concours, PDF d'évaluation) : glisse le logo, le filigrane, le pied de page et le numéro de page sur la
            page, puis règle couleurs, polices, filigrane et mise en page. Le contenu lui-même reste en Markdown —
            seule l'habillage est personnalisable ici.
          </p>
          <div className="pdf-layout-toolbar-actions">
            <button type="button" className="admin-btn secondary" onClick={handleResetAll}>
              ↺ Réinitialiser
            </button>
            <button type="button" className="admin-btn secondary" onClick={handlePreview} disabled={previewLoading}>
              {previewLoading ? "Génération..." : "👁 Aperçu"}
            </button>
            <button type="button" className="admin-btn" onClick={handleSave} disabled={saving}>
              {saving ? "Enregistrement..." : "Enregistrer"}
            </button>
          </div>
        </div>
        {previewError && <div className="admin-error" style={{ marginTop: 10 }}>{previewError}</div>}
      </div>

      <div className="admin-card">
        <h2 className="admin-section-title">Positionnement</h2>
        <div className="pdf-layout-stage">
          <div className="pdf-layout-page" ref={pageRef} onPointerMove={handlePointerMove} onPointerUp={handlePointerUp}>
            {form.pdfBorderEnabled === true && (
              <div
                className="pdf-layout-guide-border"
                style={{
                  left: `${((form.pdfBorderInset ?? PDF_BORDER_INSET_RANGE.default) / PAGE_W_MM) * 100}%`,
                  right: `${((form.pdfBorderInset ?? PDF_BORDER_INSET_RANGE.default) / PAGE_W_MM) * 100}%`,
                  top: `${((form.pdfBorderInset ?? PDF_BORDER_INSET_RANGE.default) / PAGE_H_MM) * 100}%`,
                  bottom: `${((form.pdfBorderInset ?? PDF_BORDER_INSET_RANGE.default) / PAGE_H_MM) * 100}%`,
                  borderColor: /^#[0-9a-f]{6}$/i.test(form.pdfBorderColor || "") ? form.pdfBorderColor : "#4f46e5",
                }}
              />
            )}
            <div className={"pdf-layout-guide-center-v" + (snap.x === "center-x" ? " is-active" : "")} />
            <div className={"pdf-layout-guide-center-h" + (snap.y === "center-y" ? " is-active" : "")} />
            <div
              className={
                "pdf-layout-guide-margins" +
                (snap.x === "left" || snap.x === "right" || snap.y === "top" || snap.y === "bottom" ? " is-active" : "")
              }
              style={{
                left: `${guide.leftPct}%`,
                right: `${guide.rightPct}%`,
                top: `${guide.topPct}%`,
                bottom: `${guide.bottomPct}%`,
              }}
            />
            <div className="pdf-layout-guide-label">Zone de contenu — marges « {guide.marginMm} mm »</div>
            {ELEMENTS.map((el) => {
              const pos = positionFor(el);
              const custom = Boolean(layout[el.key]);
              return (
                <div
                  key={el.key}
                  className={"pdf-layout-chip" + (custom ? " is-custom" : "")}
                  style={{ left: `${pos.xPct}%`, top: `${pos.yPct}%` }}
                  onPointerDown={(e) => handlePointerDown(el.key, e)}
                  title="Glisser pour repositionner"
                >
                  {renderChipIcon(el)}
                  <span className="pdf-layout-chip-label">{el.label}</span>
                  {custom && (
                    <button
                      type="button"
                      className="pdf-layout-chip-reset"
                      onPointerDown={(e) => e.stopPropagation()}
                      onClick={() => resetElement(el.key)}
                      title="Revenir à la position par défaut"
                    >
                      ↺
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <p className="pdf-layout-page-format">Format A4 · 210 × 297 mm — mêmes proportions que le PDF généré</p>
      </div>

      <div className="admin-card">
        <h2 className="admin-section-title">Marque</h2>

        <div className="admin-field">
          <label>Logo d'en-tête</label>
          {form.pdfLogoDataUrl ? (
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <img
                src={form.pdfLogoDataUrl}
                alt="Logo PDF actuel"
                style={{ height: 32, maxWidth: 160, objectFit: "contain", background: "#fff", borderRadius: 6, padding: 4 }}
              />
              <button type="button" className="admin-link-btn" onClick={() => setForm({ ...form, pdfLogoDataUrl: "" })}>
                Retirer (revenir au logo par défaut)
              </button>
            </div>
          ) : (
            <div className="admin-image-hint" style={{ marginBottom: 8 }}>
              Aucun logo personnalisé — le logo vectoriel SaadConcours par défaut est utilisé.
            </div>
          )}
          <input
            type="file"
            accept="image/png,image/jpeg,image/webp"
            onChange={(e) => handleLogoUpload(e.target.files && e.target.files[0])}
          />
          <p className="admin-image-hint">PNG/JPEG/WebP, 400 Ko max. Un fond transparent (PNG) rend mieux dans l'en-tête.</p>
          {logoError && <div className="admin-error">{logoError}</div>}
        </div>

        <div className="admin-form-grid">
          <div className="admin-field">
            <label>Position de départ du logo</label>
            <select
              value={form.pdfLogoPosition || "left"}
              onChange={(e) => setForm({ ...form, pdfLogoPosition: e.target.value })}
            >
              <option value="left">Gauche</option>
              <option value="center">Centre</option>
              <option value="right">Droite</option>
            </select>
            <p className="admin-image-hint">Ignorée une fois le logo glissé ci-dessus.</p>
          </div>

          <div className="admin-field">
            <label>Couleur d'accent</label>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <input
                type="color"
                value={/^#[0-9a-f]{6}$/i.test(form.pdfAccentColor || "") ? form.pdfAccentColor : "#4f46e5"}
                onChange={(e) => setForm({ ...form, pdfAccentColor: e.target.value })}
                style={{ width: 44, height: 36, padding: 2, cursor: "pointer" }}
              />
              <input
                value={form.pdfAccentColor || ""}
                placeholder="#4f46e5"
                onChange={(e) => setForm({ ...form, pdfAccentColor: e.target.value })}
                style={{ maxWidth: 120 }}
              />
            </div>
            <p className="admin-image-hint">Utilisée pour le logo vectoriel, le filigrane et les en-têtes de tableau.</p>
          </div>
        </div>
      </div>

      <div className="admin-card">
        <h2 className="admin-section-title">Texte</h2>

        <div className="admin-form-grid">
          <div className="admin-field">
            <label>Police</label>
            <select
              value={form.pdfFontFamily || "helvetica"}
              onChange={(e) => setForm({ ...form, pdfFontFamily: e.target.value })}
            >
              {PDF_FONT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          <div className="admin-field">
            <label>Taille du texte</label>
            <select
              value={form.pdfFontSize || "normal"}
              onChange={(e) => setForm({ ...form, pdfFontSize: e.target.value })}
            >
              {PDF_FONT_SIZE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          <div className="admin-field">
            <label>Espacement des lignes</label>
            <select
              value={form.pdfLineSpacing || "normal"}
              onChange={(e) => setForm({ ...form, pdfLineSpacing: e.target.value })}
            >
              {PDF_LINE_SPACING_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          <div className="admin-field">
            <label>Couleur du texte</label>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <input
                type="color"
                value={/^#[0-9a-f]{6}$/i.test(form.pdfTextColor || "") ? form.pdfTextColor : "#1a1d27"}
                onChange={(e) => setForm({ ...form, pdfTextColor: e.target.value })}
                style={{ width: 44, height: 36, padding: 2, cursor: "pointer" }}
              />
              <input
                value={form.pdfTextColor || ""}
                placeholder="#1a1d27"
                onChange={(e) => setForm({ ...form, pdfTextColor: e.target.value })}
                style={{ maxWidth: 120 }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="admin-card">
        <h2 className="admin-section-title">Titres (H1, H2, H3)</h2>
        <p className="admin-image-hint" style={{ marginBottom: 12 }}>
          Personnalise la police, la taille et la couleur de chaque niveau de titre indépendamment du texte
          courant. Un champ laissé par défaut garde l'apparence du texte normal, juste plus grand.
        </p>

        {PDF_HEADING_LEVEL_LABELS.map(({ key, label }) => {
          const heading = form.pdfHeadings?.[key] || {};
          return (
            <div key={key} className="pdf-heading-row">
              <div className="pdf-heading-row-label">{label}</div>
              <div className="admin-field">
                <label>Police</label>
                <select
                  value={heading.fontFamily || ""}
                  onChange={(e) => updateHeadingField(form, setForm, key, "fontFamily", e.target.value)}
                >
                  <option value="">Comme le texte courant</option>
                  {PDF_FONT_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="admin-field">
                <label>Taille</label>
                <select
                  value={heading.size || "normal"}
                  onChange={(e) => updateHeadingField(form, setForm, key, "size", e.target.value)}
                >
                  {PDF_HEADING_SIZE_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="admin-field">
                <label>Couleur</label>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <input
                    type="color"
                    value={/^#[0-9a-f]{6}$/i.test(heading.color || "") ? heading.color : "#1a1d27"}
                    onChange={(e) => updateHeadingField(form, setForm, key, "color", e.target.value)}
                    style={{ width: 44, height: 36, padding: 2, cursor: "pointer" }}
                  />
                  <input
                    value={heading.color || ""}
                    placeholder="Comme le texte"
                    onChange={(e) => updateHeadingField(form, setForm, key, "color", e.target.value)}
                    style={{ maxWidth: 120 }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="admin-card">
        <h2 className="admin-section-title">Filigrane</h2>

        <label className="admin-switch-row">
          <span className="admin-switch-row-label">Afficher un filigrane sur les pages</span>
          <span className="admin-switch">
            <input
              type="checkbox"
              checked={form.pdfWatermarkEnabled !== false}
              onChange={(e) => setForm({ ...form, pdfWatermarkEnabled: e.target.checked })}
            />
            <span className="admin-switch-thumb" aria-hidden="true" />
          </span>
        </label>

        {form.pdfWatermarkEnabled !== false && (
          <>
            <div className="admin-field">
              <label>Texte du filigrane</label>
              <input
                value={form.pdfWatermarkText || ""}
                placeholder="SaadConcours"
                onChange={(e) => setForm({ ...form, pdfWatermarkText: e.target.value })}
              />
            </div>

            <div className="admin-field">
              <label>Disposition</label>
              <select value={watermarkStyle} onChange={(e) => setForm({ ...form, pdfWatermarkStyle: e.target.value })}>
                {PDF_WATERMARK_STYLE_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              {watermarkStyle === "brand" && (
                <p className="admin-image-hint">Le filigrane suit la position glissée ci-dessus.</p>
              )}
              {watermarkStyle === "tiled" && (
                <p className="admin-image-hint">Le motif répété couvre toute la page — la position glissée est ignorée.</p>
              )}
            </div>

            {watermarkStyle !== "brand" && (
              <div className="admin-field">
                <label>Rotation ({form.pdfWatermarkRotation ?? 45}°)</label>
                <input
                  type="range"
                  min="-90"
                  max="90"
                  step="5"
                  value={form.pdfWatermarkRotation ?? 45}
                  onChange={(e) => setForm({ ...form, pdfWatermarkRotation: Number(e.target.value) })}
                />
              </div>
            )}

            <div className="admin-field">
              <label>Opacité ({Math.round((form.pdfWatermarkOpacity ?? 0.05) * 100)}%)</label>
              <input
                type="range"
                min="0.02"
                max="0.3"
                step="0.01"
                value={form.pdfWatermarkOpacity ?? 0.05}
                onChange={(e) => setForm({ ...form, pdfWatermarkOpacity: Number(e.target.value) })}
              />
            </div>
          </>
        )}
      </div>

      <div className="admin-card">
        <h2 className="admin-section-title">Mise en page</h2>

        <div className="admin-field">
          <label>Marge du texte ({marginMm} mm)</label>
          <input
            type="range"
            min={PDF_MARGIN_MM_RANGE.min}
            max={PDF_MARGIN_MM_RANGE.max}
            step="1"
            value={marginMm}
            onChange={(e) => setForm({ ...form, pdfMarginMm: Number(e.target.value) })}
          />
          <p className="admin-image-hint">Distance entre le bord de la page et le texte courant — visible comme la zone pointillée ci-dessus.</p>
        </div>

        <label className="admin-switch-row">
          <span className="admin-switch-row-label">Numéroter les pages ("1 / 4" en bas à droite, sauf déplacé ci-dessus)</span>
          <span className="admin-switch">
            <input
              type="checkbox"
              checked={form.pdfShowPageNumbers === true}
              onChange={(e) => setForm({ ...form, pdfShowPageNumbers: e.target.checked })}
            />
            <span className="admin-switch-thumb" aria-hidden="true" />
          </span>
        </label>

      </div>

      <div className="admin-card">
        <h2 className="admin-section-title">Page de garde</h2>

        <label className="admin-switch-row">
          <span className="admin-switch-row-label">Ajouter une page de garde aux fiches de cours, énoncés/corrigés de concours et PDF d'évaluation</span>
          <span className="admin-switch">
            <input
              type="checkbox"
              checked={form.pdfCoverPageEnabled === true}
              onChange={(e) => setForm({ ...form, pdfCoverPageEnabled: e.target.checked })}
            />
            <span className="admin-switch-thumb" aria-hidden="true" />
          </span>
        </label>

        {form.pdfCoverPageEnabled === true && (
          <>
            <div className="admin-form-grid">
              <div className="admin-field">
                <label>Couleur de fond (optionnelle)</label>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <input
                    type="color"
                    value={/^#[0-9a-f]{6}$/i.test(form.pdfCoverBackgroundColor || "") ? form.pdfCoverBackgroundColor : "#ffffff"}
                    onChange={(e) => setForm({ ...form, pdfCoverBackgroundColor: e.target.value })}
                    style={{ width: 44, height: 36, padding: 2, cursor: "pointer" }}
                  />
                  <input
                    value={form.pdfCoverBackgroundColor || ""}
                    placeholder="Blanc (par défaut)"
                    onChange={(e) => setForm({ ...form, pdfCoverBackgroundColor: e.target.value })}
                    style={{ maxWidth: 140 }}
                  />
                  {form.pdfCoverBackgroundColor && (
                    <button type="button" className="admin-link-btn" onClick={() => setForm({ ...form, pdfCoverBackgroundColor: "" })}>
                      Retirer
                    </button>
                  )}
                </div>
              </div>

              <div className="admin-field">
                <label>Mention en bas de page</label>
                <input
                  value={form.pdfCoverTagline || ""}
                  placeholder="Fiche de cours — SaadConcours"
                  onChange={(e) => setForm({ ...form, pdfCoverTagline: e.target.value })}
                />
              </div>
            </div>

            <label className="admin-switch-row">
              <span className="admin-switch-row-label">Bandeau de couleur (accent) en haut de la page de garde</span>
              <span className="admin-switch">
                <input
                  type="checkbox"
                  checked={form.pdfCoverAccentBar === true}
                  onChange={(e) => setForm({ ...form, pdfCoverAccentBar: e.target.checked })}
                />
                <span className="admin-switch-thumb" aria-hidden="true" />
              </span>
            </label>

            <label className="admin-switch-row">
              <span className="admin-switch-row-label">Afficher la description du cours sous le titre</span>
              <span className="admin-switch">
                <input
                  type="checkbox"
                  checked={form.pdfCoverShowDescription !== false}
                  onChange={(e) => setForm({ ...form, pdfCoverShowDescription: e.target.checked })}
                />
                <span className="admin-switch-thumb" aria-hidden="true" />
              </span>
            </label>

            <label className="admin-switch-row">
              <span className="admin-switch-row-label">Afficher la date de génération</span>
              <span className="admin-switch">
                <input
                  type="checkbox"
                  checked={form.pdfCoverShowDate === true}
                  onChange={(e) => setForm({ ...form, pdfCoverShowDate: e.target.checked })}
                />
                <span className="admin-switch-thumb" aria-hidden="true" />
              </span>
            </label>
          </>
        )}
      </div>

      <div className="admin-card">
        <h2 className="admin-section-title">Bordure de page</h2>

        <label className="admin-switch-row">
          <span className="admin-switch-row-label">Afficher un cadre décoratif autour de chaque page</span>
          <span className="admin-switch">
            <input
              type="checkbox"
              checked={form.pdfBorderEnabled === true}
              onChange={(e) => setForm({ ...form, pdfBorderEnabled: e.target.checked })}
            />
            <span className="admin-switch-thumb" aria-hidden="true" />
          </span>
        </label>

        {form.pdfBorderEnabled === true && (
          <div className="admin-form-grid">
            <div className="admin-field">
              <label>Couleur</label>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <input
                  type="color"
                  value={/^#[0-9a-f]{6}$/i.test(form.pdfBorderColor || "") ? form.pdfBorderColor : "#4f46e5"}
                  onChange={(e) => setForm({ ...form, pdfBorderColor: e.target.value })}
                  style={{ width: 44, height: 36, padding: 2, cursor: "pointer" }}
                />
                <input
                  value={form.pdfBorderColor || ""}
                  placeholder="#4f46e5"
                  onChange={(e) => setForm({ ...form, pdfBorderColor: e.target.value })}
                  style={{ maxWidth: 120 }}
                />
              </div>
            </div>
            <div className="admin-field">
              <label>Épaisseur ({(form.pdfBorderWidth ?? PDF_BORDER_WIDTH_RANGE.default).toFixed(1)} mm)</label>
              <input
                type="range"
                min={PDF_BORDER_WIDTH_RANGE.min}
                max={PDF_BORDER_WIDTH_RANGE.max}
                step={PDF_BORDER_WIDTH_RANGE.step}
                value={form.pdfBorderWidth ?? PDF_BORDER_WIDTH_RANGE.default}
                onChange={(e) => setForm({ ...form, pdfBorderWidth: Number(e.target.value) })}
              />
            </div>
            <div className="admin-field">
              <label>Distance du bord ({form.pdfBorderInset ?? PDF_BORDER_INSET_RANGE.default} mm)</label>
              <input
                type="range"
                min={PDF_BORDER_INSET_RANGE.min}
                max={PDF_BORDER_INSET_RANGE.max}
                step="1"
                value={form.pdfBorderInset ?? PDF_BORDER_INSET_RANGE.default}
                onChange={(e) => setForm({ ...form, pdfBorderInset: Number(e.target.value) })}
              />
            </div>
          </div>
        )}
      </div>

      <div className="admin-card">
        <h2 className="admin-section-title">Pied de page</h2>

        <div className="admin-field">
          <label>Mention personnalisée (optionnelle)</label>
          <input
            value={form.pdfFooterText || ""}
            placeholder="ex: Document réservé aux abonnés SaadConcours — ne pas diffuser"
            onChange={(e) => setForm({ ...form, pdfFooterText: e.target.value })}
          />
        </div>

        <label className="admin-switch-row">
          <span className="admin-switch-row-label">Afficher le site et les réseaux sociaux (onglet Général) en pied de page des PDF</span>
          <span className="admin-switch">
            <input
              type="checkbox"
              checked={form.pdfShowSocialFooter !== false}
              onChange={(e) => setForm({ ...form, pdfShowSocialFooter: e.target.checked })}
            />
            <span className="admin-switch-thumb" aria-hidden="true" />
          </span>
        </label>
      </div>

      <PdfPreviewModal url={previewUrl} title="Aperçu PDF" onClose={closePreview} />
    </>
  );
}
