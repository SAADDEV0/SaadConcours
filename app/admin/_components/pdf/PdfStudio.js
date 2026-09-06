"use client";

// The admin's PDF studio — one screen that owns everything about how the
// site's generated PDFs look.
//
// Three tabs, because the old single scrolling form mixed three genuinely
// different jobs:
//   Modèles       — pick (or save) a whole look at once
//   Page de garde — its own canvas: the cover is freely laid out, nothing flows
//   Contenu       — the pages carrying the document itself
// Each tab pairs an inspector with a live A4 canvas whose drag positions
// land exactly where the PDF will draw them (see PdfCanvas.js).
//
// Nothing is written to /api/settings until "Enregistrer" — the canvas, the
// templates and the preview all read the same unsaved form state, so trying
// things out is free. The one exception is the custom-template list, which
// is persisted the moment a template is created or deleted so a snapshot
// can't be lost by navigating away.

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import PdfPreviewModal from "../ui/PdfPreviewModal";
import { useToast } from "../ui/ToastProvider";
import { useConfirm } from "../ui/ConfirmProvider";
import { MAX_LOGO_BYTES } from "../../_lib/settingsFields";
import { PDF_COVER_ELEMENTS } from "@/app/_shared/pdfTheme";
import { coverDateString } from "@/app/_shared/pdfCover";
import {
  BUILT_IN_PDF_TEMPLATES,
  DEFAULT_PDF_SETTINGS,
  PDF_TEMPLATE_KEYS,
  normalizeCustomTemplates,
  pickTemplateValues,
  templateMatches,
} from "@/app/_shared/pdfTemplates";
import PdfCanvas from "./PdfCanvas";
import ContentPanel from "./ContentPanel";
import CoverPanel from "./CoverPanel";
import TemplateGallery from "./TemplateGallery";
import "./pdf-studio.css";

// Everything this screen may write back to /api/settings. `pdfLogoDataUrl`
// and `pdfTemplates` sit outside PDF_TEMPLATE_KEYS on purpose: the uploaded
// logo is an asset rather than a look, and the template list must survive
// applying a template.
const OWNED_KEYS = [...PDF_TEMPLATE_KEYS, "pdfLogoDataUrl", "pdfTemplates"];

const TABS = [
  { key: "templates", icon: "✨", label: "Modèles" },
  { key: "cover", icon: "🪄", label: "Page de garde" },
  { key: "content", icon: "📄", label: "Contenu" },
];

const SAMPLE_COURS = {
  id: "apercu-editeur-pdf",
  module: "Analyse financière",
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

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function snapshot(form) {
  if (!form) return "";
  return JSON.stringify(Object.fromEntries(OWNED_KEYS.map((k) => [k, form[k] ?? null])));
}

export default function PdfStudio() {
  const [form, setForm] = useState(null);
  const [saved, setSaved] = useState(""); // snapshot of the last persisted state
  const [tab, setTab] = useState("content");
  const [selected, setSelected] = useState(null);
  const [saving, setSaving] = useState(false);
  const [logoError, setLogoError] = useState("");
  const [previewUrl, setPreviewUrl] = useState(null);
  const [previewLoading, setPreviewLoading] = useState(false);
  const [previewError, setPreviewError] = useState("");
  const toast = useToast();
  const confirm = useConfirm();
  const previewUrlRef = useRef(null);

  useEffect(() => {
    fetch("/api/settings")
      .then((r) => r.json())
      .then((data) => {
        setForm(data);
        setSaved(snapshot(data));
      })
      .catch(() => toast.error("Impossible de charger les réglages PDF."));
  }, [toast]);

  const dirty = form ? snapshot(form) !== saved : false;

  // Leaving with unsaved styling loses it silently otherwise — the canvas
  // looks identical whether or not the last change was persisted.
  useEffect(() => {
    if (!dirty) return;
    const onLeave = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", onLeave);
    return () => window.removeEventListener("beforeunload", onLeave);
  }, [dirty]);

  useEffect(() => () => {
    if (previewUrlRef.current) URL.revokeObjectURL(previewUrlRef.current);
  }, []);

  const set = useCallback((key, value) => setForm((prev) => ({ ...prev, [key]: value })), []);

  const setHeading = useCallback((level, field, value) => {
    setForm((prev) => ({
      ...prev,
      pdfHeadings: { ...prev.pdfHeadings, [level]: { ...(prev.pdfHeadings?.[level] || {}), [field]: value } },
    }));
  }, []);

  const layoutKey = tab === "cover" ? "pdfCoverLayout" : "pdfLayout";

  const moveElement = useCallback(
    (key, pos) => setForm((prev) => ({ ...prev, [layoutKey]: { ...prev[layoutKey], [key]: pos } })),
    [layoutKey]
  );

  const resetElement = useCallback(
    (key) =>
      setForm((prev) => {
        const next = { ...(prev[layoutKey] || {}) };
        delete next[key];
        return { ...prev, [layoutKey]: next };
      }),
    [layoutKey]
  );

  const templates = useMemo(
    () => [...BUILT_IN_PDF_TEMPLATES, ...normalizeCustomTemplates(form?.pdfTemplates)],
    [form?.pdfTemplates]
  );
  const activeTemplateId = useMemo(() => (form ? templates.find((t) => templateMatches(t, form))?.id : null), [templates, form]);

  function applyTemplate(tpl) {
    setForm((prev) => ({ ...prev, ...tpl.values }));
    setSelected(null);
    toast.success(`Modèle « ${tpl.name} » appliqué — enregistre pour le confirmer.`);
  }

  // Templates are persisted on their own so a snapshot survives navigating
  // away; `patch` carries only the template list, never the unsaved styling.
  async function persistTemplates(list, successMessage) {
    setForm((prev) => ({ ...prev, pdfTemplates: list }));
    try {
      const res = await fetch("/api/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pdfTemplates: list }),
      });
      if (!res.ok) throw new Error("save failed");
      const data = await res.json();
      // Re-baseline only the template list: everything else may still be
      // dirty and must stay flagged as such.
      setSaved((prev) => {
        try {
          const parsed = JSON.parse(prev || "{}");
          return JSON.stringify({ ...parsed, pdfTemplates: data.pdfTemplates ?? list });
        } catch {
          return prev;
        }
      });
      toast.success(successMessage);
    } catch {
      toast.error("Échec de l'enregistrement du modèle.");
    }
  }

  function saveAsTemplate(name) {
    const list = [
      ...normalizeCustomTemplates(form.pdfTemplates),
      {
        id: `perso-${Date.now().toString(36)}`,
        name,
        blurb: "Modèle enregistré depuis tes réglages.",
        createdAt: new Date().toISOString(),
        values: pickTemplateValues(form),
      },
    ];
    persistTemplates(list, `Modèle « ${name} » créé.`);
  }

  async function deleteTemplate(tpl) {
    const ok = await confirm({
      title: `Supprimer le modèle « ${tpl.name} » ?`,
      body: "Le style actuel n'est pas modifié — seul le modèle enregistré disparaît.",
      confirmLabel: "Supprimer",
      tone: "danger",
    });
    if (!ok) return;
    persistTemplates(
      normalizeCustomTemplates(form.pdfTemplates).filter((t) => t.id !== tpl.id),
      "Modèle supprimé."
    );
  }

  async function handleLogoUpload(file) {
    setLogoError("");
    if (!file) return;
    if (file.size > MAX_LOGO_BYTES) {
      setLogoError(`Image trop lourde (${Math.round(file.size / 1024)} Ko) — 400 Ko max, le logo est stocké tel quel dans les réglages.`);
      return;
    }
    try {
      set("pdfLogoDataUrl", await readFileAsDataUrl(file));
    } catch {
      setLogoError("Échec de la lecture du fichier.");
    }
  }

  async function handleReset() {
    const ok = await confirm({
      title: "Réinitialiser l'apparence des PDF ?",
      body: "Couleurs, polices, filigrane, cadre, page de garde, titres et positions reviennent aux valeurs par défaut. Le logo importé et tes modèles enregistrés sont conservés. Rien n'est encore enregistré — recharge la page pour annuler.",
      confirmLabel: "Réinitialiser",
      tone: "danger",
    });
    if (!ok) return;
    setForm((prev) => ({ ...prev, ...DEFAULT_PDF_SETTINGS }));
    setSelected(null);
    toast.success("Réglages réinitialisés — pense à Enregistrer pour confirmer.");
  }

  async function handleSave() {
    setSaving(true);
    try {
      const patch = Object.fromEntries(OWNED_KEYS.filter((k) => form[k] !== undefined).map((k) => [k, form[k]]));
      const res = await fetch("/api/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patch),
      });
      if (!res.ok) throw new Error("save failed");
      const data = await res.json();
      setForm(data);
      setSaved(snapshot(data));
      toast.success("Apparence des PDF enregistrée.");
    } catch {
      toast.error("Échec de l'enregistrement.");
    } finally {
      setSaving(false);
    }
  }

  function closePreview() {
    if (previewUrlRef.current) URL.revokeObjectURL(previewUrlRef.current);
    previewUrlRef.current = null;
    setPreviewUrl(null);
  }

  // Previews the *unsaved* state, so every tweak on this screen shows its
  // real effect before committing to "Enregistrer".
  async function handlePreview() {
    setPreviewError("");
    // jsPDF/marked/MathJax load via <Script strategy="afterInteractive"> in
    // the root layout — right after first paint they can still be mid-load,
    // and buildCoursPdf throws destructuring window.jspdf. Catching that up
    // front gives an actionable message instead of a generic failure.
    if (!window.jspdf || !window.marked) {
      setPreviewError("Les bibliothèques PDF sont encore en cours de chargement — réessaie dans quelques secondes.");
      return;
    }
    setPreviewLoading(true);
    try {
      const [{ buildCoursPdf }, { resolvePdfBranding }] = await Promise.all([
        import("@/app/_shared/coursPdf"),
        import("@/app/_shared/pdfTheme"),
      ]);
      const branding = await resolvePdfBranding(form);
      const doc = await buildCoursPdf(SAMPLE_COURS, branding);
      const url = doc.output("bloburl");
      previewUrlRef.current = url;
      setPreviewUrl(url);
    } catch (err) {
      console.error("Échec de la génération de l'aperçu PDF :", err);
      setPreviewError(`Échec de la génération de l'aperçu.${err?.message ? ` (${err.message})` : ""}`);
    } finally {
      setPreviewLoading(false);
    }
  }

  if (!form) return <div className="admin-card">Chargement de l'éditeur PDF…</div>;

  const coverSample = {
    eyebrow: SAMPLE_COURS.module,
    title: "Les amortissements et les provisions",
    subtitle: "Fiche de synthèse — chapitre 4",
    date: coverDateString(),
  };
  const movedCovers = PDF_COVER_ELEMENTS.filter((el) => form.pdfCoverLayout?.[el.key]).length;

  return (
    <div className="pdfx">
      <div className="pdfx-bar">
        <div className="pdfx-bar-title">
          <span className="pdfx-bar-mark" aria-hidden="true">
            🎨
          </span>
          <div>
            <h1 className="pdfx-bar-heading">Éditeur PDF</h1>
            <div className="pdfx-bar-sub">Cours · Concours · Évaluation</div>
          </div>
        </div>
        <span className={"pdfx-pill " + (dirty ? "is-dirty" : "is-saved")}>{dirty ? "● Modifications non enregistrées" : "✓ À jour"}</span>
        <div className="pdfx-bar-spacer" />
        <div className="pdfx-bar-actions">
          <button type="button" className="admin-btn secondary" onClick={handleReset}>
            ↺ Réinitialiser
          </button>
          <button type="button" className="admin-btn secondary" onClick={handlePreview} disabled={previewLoading}>
            {previewLoading ? "Génération…" : "👁 Aperçu PDF"}
          </button>
          <button type="button" className="admin-btn" onClick={handleSave} disabled={saving || !dirty}>
            {saving ? "Enregistrement…" : "Enregistrer"}
          </button>
        </div>
      </div>

      {previewError && <div className="admin-error">{previewError}</div>}

      <div className="pdfx-tabs" role="tablist">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            aria-selected={tab === t.key}
            className={"pdfx-tab" + (tab === t.key ? " active" : "")}
            onClick={() => {
              setTab(t.key);
              setSelected(null);
            }}
          >
            <span className="pdfx-tab-icon" aria-hidden="true">
              {t.icon}
            </span>
            {t.label}
          </button>
        ))}
      </div>

      {tab === "templates" ? (
        <TemplateGallery
          templates={templates}
          activeId={activeTemplateId}
          onApply={applyTemplate}
          onSave={saveAsTemplate}
          onDelete={deleteTemplate}
        />
      ) : (
        <div className="pdfx-work">
          {tab === "cover" ? (
            <CoverPanel
              settings={form}
              set={set}
              movedCount={movedCovers}
              onResetLayout={() => setForm((prev) => ({ ...prev, pdfCoverLayout: {} }))}
            />
          ) : (
            <ContentPanel settings={form} set={set} setHeading={setHeading} onLogoUpload={handleLogoUpload} logoError={logoError} />
          )}

          <div className="pdfx-stage-wrap">
            <PdfCanvas
              mode={tab === "cover" ? "cover" : "content"}
              settings={form}
              positions={form[layoutKey] || {}}
              sample={coverSample}
              selected={selected}
              onSelect={setSelected}
              onMove={moveElement}
              onReset={resetElement}
            />
          </div>
        </div>
      )}

      <PdfPreviewModal url={previewUrl} title="Aperçu PDF — exemple de fiche" onClose={closePreview} />
    </div>
  );
}
