"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Icon from "../_ui/Icon";
import { Alert, ErrorState, Menu, Seg, Skeleton } from "../_ui/kit";
import { useConfirm, usePrompt, useToast } from "../_ui/feedback";
import { useJson } from "../_lib/content";
import { mutateJson } from "../_lib/repo";
import { SETTINGS_PATH } from "../_lib/settings";
import { useDebounced, useHotkey, useLocalStorage, useUnsavedGuard } from "../_lib/hooks";
import { dateFr } from "../_lib/format";
import {
  BUILT_IN_PDF_TEMPLATES,
  DEFAULT_PDF_SETTINGS,
  PDF_TEMPLATE_KEYS,
  normalizeCustomTemplates,
  pickTemplateValues,
  templateMatches,
} from "@/app/_shared/pdfTemplates";
import {
  PDF_BORDER_INSET_RANGE,
  PDF_BORDER_WIDTH_RANGE,
  PDF_CONTENT_ELEMENTS,
  PDF_COVER_ACCENT_BAR_RANGE,
  PDF_COVER_ALIGN_OPTIONS,
  PDF_COVER_DEFAULT_POSITIONS,
  PDF_COVER_ELEMENTS,
  PDF_COVER_LOGO_SIZE_RANGE,
  PDF_COVER_RULE_WIDTH_RANGE,
  PDF_COVER_TEXT_SCALE_RANGE,
  PDF_COVER_TITLE_SIZE_RANGE,
  PDF_FONT_OPTIONS,
  PDF_FONT_SIZE_OPTIONS,
  PDF_HEADING_LEVELS,
  PDF_HEADING_SIZE_OPTIONS,
  PDF_LINE_SPACING_OPTIONS,
  PDF_LOGO_POSITION_OPTIONS,
  PDF_MARGIN_MM_RANGE,
  PDF_MARGIN_PRESETS,
  PDF_PAGE_NUMBER_STYLE_OPTIONS,
  PDF_QUOTE_STYLE_OPTIONS,
  PDF_WATERMARK_OPACITY_RANGE,
  PDF_WATERMARK_STYLE_OPTIONS,
} from "@/app/_shared/pdfTheme";
import PdfViewer, { HandleLayer } from "./pdf/PdfViewer";
import {
  ACCENT_PRESETS,
  BACKGROUND_PRESETS,
  TEXT_PRESETS,
  ColorInput,
  ColorRow,
  ContrastWarning,
  Group,
  Panel,
  RangeRow,
  Row,
  SwitchRow,
  prepareLogo,
} from "./pdf/controls";
import { DOC_TYPES, buildPreviewPdf } from "./pdf/preview";
import { SAMPLE_CONCOURS, SAMPLE_COURS, SAMPLE_QUIZ } from "./pdf/samples";

// Studio PDF v3.
//
// v2 avait eu raison sur l'essentiel : l'aperçu est le vrai PDF, produit par
// le moteur du site (coursPdf / concoursPdf / evaluationPdf) avec les
// réglages non enregistrés. v3 garde ce principe et corrige ce qui gênait :
//  - l'aperçu est dessiné page par page (PDF.js) au lieu d'être confié au
//    lecteur du navigateur — zoom, planche de pages, position de lecture
//    conservée, et des repères qu'on fait glisser directement sur la page
//    (logo, filigrane, pied de page, numéro, éléments de la couverture) ;
//  - les trois PDF du site se prévisualisent (cours, concours, évaluation) ;
//  - les réglages sont rangés par onglets, avec un point sur ceux modifiés.

const OWNED = [...PDF_TEMPLATE_KEYS, "pdfLogoDataUrl", "pdfTemplates"];
const COVER_KEYS = PDF_TEMPLATE_KEYS.filter((k) => k.startsWith("pdfCover") && k !== "pdfCoverLayout");

const TABS = [
  { key: "modeles", label: "Modèles", icon: "sparkles", title: "Modèles", keys: ["pdfTemplates"] },
  { key: "identite", label: "Identité", icon: "palette", title: "Identité", keys: ["pdfLogoDataUrl", "pdfLogoPosition", "pdfAccentColor", "pdfTextColor"] },
  { key: "texte", label: "Texte", icon: "type", title: "Texte", keys: ["pdfFontFamily", "pdfFontSize", "pdfLineSpacing", "pdfHeadings", "pdfHeadingRule", "pdfQuoteStyle"] },
  { key: "page", label: "Page", icon: "page", title: "Page", keys: ["pdfMarginMm", "pdfBorderEnabled", "pdfBorderColor", "pdfBorderWidth", "pdfBorderInset"] },
  {
    key: "entete",
    label: "En-tête",
    icon: "panels",
    title: "En-tête et pied de page",
    keys: ["pdfShowHeader", "pdfHeaderRule", "pdfHeaderTitle", "pdfShowPageNumbers", "pdfPageNumberStyle", "pdfFooterText", "pdfShowSocialFooter"],
  },
  {
    key: "filigrane",
    label: "Filigrane",
    icon: "droplet",
    title: "Filigrane",
    keys: ["pdfWatermarkEnabled", "pdfWatermarkText", "pdfWatermarkOpacity", "pdfWatermarkStyle", "pdfWatermarkRotation"],
  },
  { key: "couverture", label: "Couverture", icon: "book", title: "Page de garde", keys: COVER_KEYS },
  { key: "positions", label: "Positions", icon: "move", title: "Positions", keys: ["pdfLayout", "pdfCoverLayout"] },
];

const ZOOMS = [0.5, 0.75, 1, 1.25, 1.5, 2];
const DEFAULT_VIEW = { zoom: "fit", guides: false, handles: true };
const round1 = (v) => Math.round(v * 10) / 10;

function downloadBlob(blob, name) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10000);
}

// Le logo par défaut (chapeau + livre), dessiné comme dans le PDF
// (pdfTheme.js, drawLogoMark), à la couleur d'accent en cours.
function BrandMark({ color, size = 34 }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden="true">
      <rect width="64" height="64" rx="16" fill={color} />
      <path d="M32 13 49 21 32 29 15 21Z" fill="#fff" />
      <path d="M49 21 51 31" stroke="#fff" strokeWidth="2" />
      <circle cx="51" cy="32.5" r="2" fill="#fbbf24" />
      <path d="M32 42 13 37 13 48 32 54ZM32 42 51 37 51 48 32 54Z" fill="#fff" />
      <path d="M32 42V54" stroke={color} strokeWidth="1.2" />
    </svg>
  );
}

// Vignette d'un modèle : sa couverture (si elle en a une) et une page de
// contenu, dessinées en CSS avec ses propres couleurs.
function TemplateThumb({ v }) {
  const accent = v.pdfAccentColor || DEFAULT_PDF_SETTINGS.pdfAccentColor;
  const text = v.pdfTextColor || DEFAULT_PDF_SETTINGS.pdfTextColor;
  const coverBg = v.pdfCoverBackgroundColor || "#ffffff";
  const left = v.pdfCoverAlign === "left";
  const serif = v.pdfFontFamily === "times";
  return (
    <span className="ax-ps-thumb" aria-hidden="true">
      {v.pdfCoverPageEnabled && (
        <span className={`ax-ps-mini cover${left ? " left" : ""}`} style={{ background: coverBg }}>
          {v.pdfCoverAccentBar && <i className="band" style={{ background: accent, height: `${Math.max(5, (v.pdfCoverAccentBarHeight / 297) * 100)}%` }} />}
          {v.pdfCoverShowLogo !== false && <i className="logo" style={{ background: accent }} />}
          <i className="t1" style={{ background: v.pdfCoverTitleColor || text }} />
          <i className="t2" style={{ background: v.pdfCoverSubtitleColor || "#9ca3af" }} />
          {v.pdfCoverShowRule !== false && <i className="rule" style={{ background: accent }} />}
        </span>
      )}
      <span className={`ax-ps-mini${serif ? " serif" : ""}`}>
        {v.pdfBorderEnabled && <i className="frame" style={{ borderColor: v.pdfBorderColor || accent }} />}
        {v.pdfShowHeader !== false && (
          <i className="head">
            <b style={{ background: accent }} />
            {v.pdfHeaderTitle && <s />}
          </i>
        )}
        <i className="h1" style={{ background: v.pdfHeadings?.h1?.color || text }} />
        <i className="p" style={{ background: text }} />
        <i className="p short" style={{ background: text }} />
        {v.pdfQuoteStyle !== "plain" && <i className={`q${v.pdfQuoteStyle === "box" ? " box" : ""}`} style={{ borderColor: accent, background: v.pdfQuoteStyle === "box" ? `${accent}22` : "transparent" }} />}
        <i className="tbl" style={{ background: accent }} />
        <i className="p" style={{ background: text }} />
        {v.pdfWatermarkEnabled !== false && <i className="wm" style={{ color: accent }}>SC</i>}
      </span>
    </span>
  );
}

function Guides({ g, cover }) {
  const vMargin = (g.marginX * 210) / 297; // la marge en mm, rapportée à la hauteur
  return (
    <div className="ax-ps-guides" aria-hidden="true">
      <div
        className="box"
        style={{
          left: `${g.marginX}%`,
          right: `${g.marginX}%`,
          top: `${cover ? vMargin : Math.max(0, g.top - 1.4)}%`,
          bottom: `${cover ? vMargin : 100 - g.bottom}%`,
        }}
      />
      <div className="v" style={{ left: "50%" }} />
      <div className="h" style={{ top: "50%" }} />
    </div>
  );
}

function PositionRows({ elements, layout, current, visible, onSet, onReset }) {
  return (
    <div className="ax-ps-pos">
      {elements.map((el) => {
        const custom = layout?.[el.key];
        const pos = custom || current[el.key];
        const shown = visible(el.key);
        return (
          <div key={el.key} className={`ax-ps-pos-row${shown ? "" : " off"}`}>
            <div className="ax-ps-pos-main">
              <strong>{el.label}</strong>
              <span>{!shown ? "Masqué" : custom ? "Personnalisée" : "Par défaut"}</span>
            </div>
            {shown && custom ? (
              <>
                {["xPct", "yPct"].map((axis) => (
                  <label key={axis} className="ax-ps-num">
                    <span>{axis === "xPct" ? "X" : "Y"}</span>
                    <input
                      type="number"
                      min={0}
                      max={100}
                      step={0.5}
                      value={round1(custom[axis])}
                      onChange={(e) => {
                        const n = Number(e.target.value);
                        if (Number.isFinite(n)) onSet(el.key, { ...custom, [axis]: Math.min(100, Math.max(0, n)) });
                      }}
                      aria-label={`${el.label} : ${axis === "xPct" ? "horizontal" : "vertical"} (%)`}
                    />
                  </label>
                ))}
                <button type="button" className="ax-btn ghost icon sm" onClick={() => onReset(el.key)} title="Position par défaut" aria-label={`${el.label} : position par défaut`}>
                  <Icon name="restore" size="sm" />
                </button>
              </>
            ) : (
              shown &&
              pos && (
                <button type="button" className="ax-btn xs" onClick={() => onSet(el.key, { xPct: round1(pos.xPct), yPct: round1(pos.yPct) })}>
                  Ajuster
                </button>
              )
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function PdfStudio() {
  const { data: settings, loading, error, reload } = useJson(SETTINGS_PATH);
  const toast = useToast();
  const confirm = useConfirm();
  const prompt = usePrompt();
  const [form, setForm] = useState(null);
  const [saved, setSaved] = useState(null);
  const [history, setHistory] = useState({ past: [], future: [] });
  const [saving, setSaving] = useState(false);
  const [tab, setTab] = useLocalStorage("ax-pdf-tab", "modeles");
  const [docType, setDocType] = useLocalStorage("ax-pdf-doc", "cours");
  const [sourceIds, setSourceIds] = useLocalStorage("ax-pdf-sources", {});
  const [storedView, setView] = useLocalStorage("ax-pdf-view", DEFAULT_VIEW);
  const [full, setFull] = useState(false);
  const [preview, setPreview] = useState(null);
  const [rendering, setRendering] = useState(false);
  const [renderError, setRenderError] = useState("");
  const [viewerDown, setViewerDown] = useState(false);
  const [frameUrl, setFrameUrl] = useState(null);
  const [logoBusy, setLogoBusy] = useState(false);
  const lastKey = useRef({ key: null, at: 0 });
  const formRef = useRef(null);
  const importRef = useRef(null);
  formRef.current = form;
  const view = { ...DEFAULT_VIEW, ...(storedView && typeof storedView === "object" ? storedView : {}) };
  const type = DOC_TYPES.some((d) => d.value === docType) ? docType : "cours";

  // ---- Documents de l'aperçu ----
  const coursData = useJson(type === "cours" ? "data/cours.json" : null);
  const concoursData = useJson(type === "concours" ? "data/concours.json" : null);
  const quizData = useJson(type === "evaluation" ? "data/quiz.json" : null);
  const coursList = useMemo(() => (Array.isArray(coursData.data) ? coursData.data.filter((c) => c.available !== false && c.content) : []), [coursData.data]);
  const concoursList = useMemo(
    () =>
      Array.isArray(concoursData.data)
        ? concoursData.data.filter((c) => c.enonce_md).sort((a, b) => (b.annee || 0) - (a.annee || 0) || String(a.etablissement).localeCompare(String(b.etablissement), "fr"))
        : [],
    [concoursData.data]
  );
  const quizList = useMemo(() => (Array.isArray(quizData.data) ? quizData.data.filter((q) => q.questions?.length) : []), [quizData.data]);
  const sourceId = (sourceIds && typeof sourceIds === "object" && sourceIds[type]) || "exemple";
  const list = type === "concours" ? concoursList : type === "evaluation" ? quizList : coursList;
  const listLoading = type === "concours" ? concoursData.loading : type === "evaluation" ? quizData.loading : coursData.loading;
  const source = useMemo(() => {
    const found = sourceId !== "exemple" && list.find((x) => String(x.id) === sourceId);
    if (found) return found;
    return type === "concours" ? SAMPLE_CONCOURS : type === "evaluation" ? SAMPLE_QUIZ : SAMPLE_COURS;
  }, [list, sourceId, type]);
  // Tant que la liste n'est pas chargée, on n'affiche pas l'exemple à la
  // place du document choisi.
  const sourcePending = sourceId !== "exemple" && !list.length && listLoading;

  // ---- Formulaire ----
  const pick = useCallback((src) => {
    const f = Object.fromEntries(OWNED.map((k) => [k, src?.[k] ?? (k in DEFAULT_PDF_SETTINGS ? DEFAULT_PDF_SETTINGS[k] : null)]));
    // Réglages enregistrés avant le curseur de marges : l'ancien préréglage
    // reste la valeur de départ, sinon l'aperçu ne montrerait pas le site.
    if (!Number.isFinite(src?.pdfMarginMm) && PDF_MARGIN_PRESETS[src?.pdfMargins]) f.pdfMarginMm = PDF_MARGIN_PRESETS[src.pdfMargins];
    return f;
  }, []);

  useEffect(() => {
    if (settings && !form) {
      const f = pick(settings);
      setForm(f);
      setSaved(JSON.stringify(f));
    }
  }, [settings, form, pick]);

  const dirty = Boolean(form) && JSON.stringify(form) !== saved;
  useUnsavedGuard(dirty && !saving);
  const savedObj = useMemo(() => (saved ? JSON.parse(saved) : null), [saved]);

  // Chaque modification passe par ici : historique annuler/rétablir, les
  // gestes continus (curseur, saisie, flèches) regroupés en une seule étape.
  const push = useCallback((snapshot) => setHistory((h) => ({ past: [...h.past.slice(-80), snapshot], future: [] })), []);
  const set = useCallback(
    (key, value) => {
      const now = Date.now();
      const coalesce = lastKey.current.key === key && now - lastKey.current.at < 700;
      lastKey.current = { key, at: now };
      if (!coalesce && formRef.current) push(formRef.current);
      setForm((f) => ({ ...f, [key]: value }));
    },
    [push]
  );
  const applyValues = useCallback(
    (values) => {
      lastKey.current = { key: null, at: 0 };
      if (formRef.current) push(formRef.current);
      setForm((f) => ({ ...f, ...values }));
    },
    [push]
  );
  function undo() {
    if (!history.past.length) return;
    setHistory({ past: history.past.slice(0, -1), future: [formRef.current, ...history.future] });
    lastKey.current = { key: null, at: 0 };
    setForm(history.past[history.past.length - 1]);
  }
  function redo() {
    if (!history.future.length) return;
    setHistory({ past: [...history.past, formRef.current], future: history.future.slice(1) });
    lastKey.current = { key: null, at: 0 };
    setForm(history.future[0]);
  }
  useHotkey("mod+z", undo);
  useHotkey("mod+shift+z", redo);
  useHotkey("mod+y", redo);

  async function save() {
    if (!form || saving) return;
    const snapshot = form;
    setSaving(true);
    try {
      await mutateJson(SETTINGS_PATH, (cur) => ({
        data: { ...cur, ...snapshot },
        message: "Studio PDF : apparence des PDF",
        audit: { action: "settings", resource: "pdf", label: "Apparence des PDF" },
      }));
      setSaved(JSON.stringify(snapshot));
      toast.success("Apparence des PDF enregistrée", "Les PDF téléchargés sur le site l'appliquent dès maintenant.");
    } catch (err) {
      toast.error("Enregistrement impossible", err.message);
    } finally {
      setSaving(false);
    }
  }
  useHotkey("mod+s", save, { allowInInputs: true, enabled: dirty });

  // ---- Aperçu ----
  // Une génération à la fois : un réglage modifié pendant un rendu relance
  // un rendu à la fin de celui-ci, avec les valeurs les plus récentes.
  const latest = useRef(null);
  latest.current = form ? { type, source, full, values: { ...settings, ...form } } : null;
  const busy = useRef(false);
  const again = useRef(false);
  const runBuild = useCallback(async () => {
    if (busy.current) {
      again.current = true;
      return;
    }
    busy.current = true;
    setRendering(true);
    try {
      do {
        again.current = false;
        const params = latest.current;
        if (!params) break;
        const t0 = performance.now();
        try {
          const res = await buildPreviewPdf(params);
          if (!again.current) {
            setPreview({ ...res, ms: performance.now() - t0 });
            setRenderError("");
          }
        } catch (err) {
          if (!again.current) setRenderError(err?.message || String(err));
        }
      } while (again.current);
    } finally {
      busy.current = false;
      setRendering(false);
    }
  }, []);
  const renderInput = form && !sourcePending ? `${JSON.stringify(form)}|${type}|${source.id}|${full}` : "";
  const renderKey = useDebounced(renderInput, 400);
  useEffect(() => {
    if (renderKey) runBuild();
  }, [renderKey, runBuild]);

  // Repli si PDF.js ne se charge pas : le lecteur PDF du navigateur.
  useEffect(() => {
    if (!viewerDown || !preview) return undefined;
    const url = URL.createObjectURL(new Blob([preview.bytes], { type: "application/pdf" }));
    setFrameUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [viewerDown, preview]);

  const f = form || DEFAULT_PDF_SETTINGS;
  const customTemplates = useMemo(() => normalizeCustomTemplates(form?.pdfTemplates), [form?.pdfTemplates]);

  if (error) return <ErrorState error={error} onRetry={reload} />;
  if (loading || !form) return <Skeleton rows={6} height={90} />;

  const headings = f.pdfHeadings || {};
  const coverBg = f.pdfCoverBackgroundColor || "#ffffff";
  const dirtyTab = (t) => savedObj && t.keys.some((k) => JSON.stringify(f[k] ?? null) !== JSON.stringify(savedObj[k] ?? null));
  const setView2 = (patch) => setView({ ...view, ...patch });

  // ---- Modèles et thème ----
  async function saveAsTemplate() {
    const name = await prompt({ title: "Enregistrer comme modèle", body: "Le modèle garde tous les réglages actuels, sauf le logo.", placeholder: "Nom du modèle", required: true, confirmLabel: "Créer" });
    if (!name?.trim()) return;
    const t = { id: `perso-${Date.now().toString(36)}`, name: name.trim().slice(0, 60), blurb: "Modèle enregistré depuis le studio.", createdAt: new Date().toISOString(), values: pickTemplateValues(form) };
    applyValues({ pdfTemplates: [...(form.pdfTemplates || []), t] });
    toast.info("Modèle ajouté", "Enregistre pour le conserver.");
  }
  function patchTemplate(id, patch) {
    applyValues({ pdfTemplates: (form.pdfTemplates || []).map((t) => (t.id === id ? { ...t, ...patch } : t)) });
  }
  async function renameTemplate(t) {
    const name = await prompt({ title: "Renommer le modèle", defaultValue: t.name, required: true, confirmLabel: "Renommer" });
    if (name?.trim()) patchTemplate(t.id, { name: name.trim().slice(0, 60) });
  }
  async function updateTemplate(t) {
    if (await confirm({ title: `Mettre à jour « ${t.name} » ?`, body: "Le modèle prend les réglages affichés en ce moment.", confirmLabel: "Mettre à jour" })) {
      patchTemplate(t.id, { values: pickTemplateValues(form), createdAt: new Date().toISOString() });
    }
  }
  async function deleteTemplate(t) {
    if (await confirm({ title: `Supprimer « ${t.name} » ?`, body: "Le modèle disparaît au prochain enregistrement.", confirmLabel: "Supprimer", tone: "danger" })) {
      applyValues({ pdfTemplates: (form.pdfTemplates || []).filter((x) => x.id !== t.id) });
    }
  }
  function exportTheme() {
    const payload = { format: "saadconcours-pdf-theme", version: 1, exportedAt: new Date().toISOString(), values: pickTemplateValues(form), logo: form.pdfLogoDataUrl || undefined };
    downloadBlob(new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" }), `theme-pdf-saadconcours-${new Date().toISOString().slice(0, 10)}.json`);
  }
  async function importTheme(file) {
    try {
      const data = JSON.parse(await file.text());
      const values = data?.values && typeof data.values === "object" ? data.values : data;
      if (!values || typeof values !== "object" || !PDF_TEMPLATE_KEYS.some((k) => k in values)) throw new Error("format");
      const patch = pickTemplateValues(values);
      if (typeof data.logo === "string" && data.logo.startsWith("data:image/")) patch.pdfLogoDataUrl = data.logo;
      applyValues(patch);
      toast.success("Thème importé", "Vérifie l'aperçu, puis enregistre.");
    } catch {
      toast.error("Import impossible", "Ce fichier n'est pas un thème exporté par le Studio PDF.");
    }
  }
  async function resetLook() {
    if (await confirm({ title: "Revenir à l'apparence d'origine ?", body: "Le logo et tes modèles sont conservés. Rien n'est publié avant « Enregistrer ».", confirmLabel: "Réinitialiser" })) {
      applyValues({ ...DEFAULT_PDF_SETTINGS });
    }
  }
  async function onLogo(file) {
    setLogoBusy(true);
    try {
      const logo = await prepareLogo(file);
      set("pdfLogoDataUrl", logo.dataUrl);
      toast.info("Logo prêt", `${logo.width} × ${logo.height} px · ${logo.kb} Ko`);
    } catch (err) {
      toast.error("Logo refusé", err.message);
    } finally {
      setLogoBusy(false);
    }
  }

  // ---- Aperçu : téléchargement ----
  const previewBlob = () => new Blob([preview.bytes], { type: "application/pdf" });
  const downloadPreview = () => preview && downloadBlob(previewBlob(), `apercu-${type}-${source.id}.pdf`);
  function openPreview() {
    if (!preview) return;
    const url = URL.createObjectURL(previewBlob());
    window.open(url, "_blank", "noopener");
    setTimeout(() => URL.revokeObjectURL(url), 60000);
  }

  // ---- Repères ----
  const moveElement = (group, key, pos) => {
    const field = group === "cover" ? "pdfCoverLayout" : "pdfLayout";
    const next = { ...(formRef.current?.[field] || {}) };
    if (pos) next[key] = { xPct: round1(pos.xPct), yPct: round1(pos.yPct) };
    else delete next[key];
    set(field, next);
  };
  const anchors = preview?.anchors || {};
  const contentItems = PDF_CONTENT_ELEMENTS.filter((el) => anchors[el.key]).map((el) => {
    const custom = f.pdfLayout?.[el.key];
    const a = custom || anchors[el.key];
    return { key: el.key, label: el.label, xPct: a.xPct, yPct: a.yPct, custom: Boolean(custom) };
  });
  const coverVisible = (key) =>
    ({
      logo: f.pdfCoverShowLogo !== false,
      eyebrow: f.pdfCoverShowEyebrow !== false,
      title: true,
      subtitle: f.pdfCoverShowDescription !== false,
      date: f.pdfCoverShowDate === true,
      rule: f.pdfCoverShowRule !== false,
      tagline: f.pdfCoverShowTagline !== false,
    })[key];
  const coverItems = PDF_COVER_ELEMENTS.filter((el) => coverVisible(el.key)).map((el) => {
    const custom = f.pdfCoverLayout?.[el.key];
    const a = custom || PDF_COVER_DEFAULT_POSITIONS[el.key];
    return { key: el.key, label: el.label, xPct: a.xPct, yPct: a.yPct, custom: Boolean(custom) };
  });
  const g = preview?.guides;
  const coverOnPreview = Boolean(preview?.coverEnabled);
  const pageOffset = preview ? preview.firstContentPage - 1 : 0;
  const pageLabel = (i) => (coverOnPreview && i === 0 ? "Page de garde" : `Page ${i + 1 - pageOffset}`);
  const renderOverlay = (i, getRect) => {
    if (!preview) return null;
    const isCover = coverOnPreview && i === 0;
    const handlesHere = view.handles && (isCover || i === (coverOnPreview ? 1 : 0));
    return (
      <>
        {view.guides && g && <Guides g={g} cover={isCover} />}
        {handlesHere && (
          <HandleLayer
            items={isCover ? coverItems : contentItems}
            getRect={getRect}
            snapX={g ? [50, g.marginX, 100 - g.marginX] : [50]}
            snapY={[50]}
            onMove={(key, pos) => moveElement(isCover ? "cover" : "content", key, pos)}
            onReset={(key) => moveElement(isCover ? "cover" : "content", key, null)}
          />
        )}
      </>
    );
  };

  const zoomIndex = view.zoom === "fit" ? -1 : ZOOMS.indexOf(view.zoom);
  const zoomBy = (dir) => {
    if (view.zoom === "fit") return setView2({ zoom: dir > 0 ? 1 : 0.75 });
    const next = ZOOMS[Math.min(ZOOMS.length - 1, Math.max(0, zoomIndex + dir))];
    setView2({ zoom: next ?? 1 });
  };

  // ---- Panneaux ----
  function renderPanel() {
    switch (tab) {
      case "identite":
        return (
          <Panel title="Identité" lead="Le logo et les deux couleurs qui donnent leur ton à tous les PDF.">
            <Group title="Logo">
              <div className="ax-ps-logo">
                <div className="ax-ps-logo-preview">
                  {f.pdfLogoDataUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={f.pdfLogoDataUrl} alt="Logo des PDF" />
                  ) : (
                    <span className="ax-ps-logo-default">
                      <BrandMark color={f.pdfAccentColor} />
                      <span>
                        Saad<b style={{ color: f.pdfAccentColor }}>Concours</b>
                        <small>Logo par défaut</small>
                      </span>
                    </span>
                  )}
                </div>
                <div className="ax-btn-row">
                  <label className={`ax-btn sm${logoBusy ? " disabled" : ""}`}>
                    <Icon name={logoBusy ? "loader" : "upload"} size="sm" /> {f.pdfLogoDataUrl ? "Remplacer" : "Importer un logo"}
                    <input
                      type="file"
                      accept="image/png,image/jpeg,image/webp,image/svg+xml"
                      hidden
                      disabled={logoBusy}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        e.target.value = "";
                        if (file) onLogo(file);
                      }}
                    />
                  </label>
                  {f.pdfLogoDataUrl && (
                    <button type="button" className="ax-btn ghost sm" onClick={() => set("pdfLogoDataUrl", "")}>
                      Revenir au logo par défaut
                    </button>
                  )}
                </div>
                <span className="ax-hint">PNG, JPG, WebP ou SVG. Redimensionné automatiquement (600 px au plus) : il est intégré à chaque PDF.</span>
              </div>
              <Row label="Place dans l'en-tête" hint="Ou fais glisser le repère « Logo » sur l'aperçu.">
                <Seg
                  value={f.pdfLogoPosition}
                  onChange={(v) => {
                    // Choisir une place annule un logo déplacé à la main,
                    // sinon le bouton semblerait ne rien faire.
                    const { logo, ...rest } = f.pdfLayout || {};
                    applyValues(logo ? { pdfLogoPosition: v, pdfLayout: rest } : { pdfLogoPosition: v });
                  }}
                  options={PDF_LOGO_POSITION_OPTIONS}
                  ariaLabel="Place du logo"
                />
              </Row>
            </Group>
            <Group title="Couleurs">
              <ColorRow label="Couleur d'accent" hint="Titres de la couverture, en-têtes de tableau, citations, filigrane." value={f.pdfAccentColor} onChange={(v) => set("pdfAccentColor", v)} fallback="#4f46e5" presets={ACCENT_PRESETS} />
              <ContrastWarning fg="#ffffff" bg={f.pdfAccentColor}>
                Le texte blanc des en-têtes de tableau sera peu lisible sur cet accent.
              </ContrastWarning>
              <ColorRow label="Couleur du texte" value={f.pdfTextColor} onChange={(v) => set("pdfTextColor", v)} fallback="#1a1d27" presets={TEXT_PRESETS} />
              <ContrastWarning fg={f.pdfTextColor} bg="#ffffff" min={4.5}>
                Texte trop clair pour être lu confortablement sur une page blanche.
              </ContrastWarning>
            </Group>
          </Panel>
        );

      case "texte":
        return (
          <Panel title="Texte" lead="Police, taille et rythme du texte, puis le style des titres.">
            <Group title="Corps du texte">
              <Row label="Police">
                <Seg value={f.pdfFontFamily} onChange={(v) => set("pdfFontFamily", v)} options={PDF_FONT_OPTIONS} ariaLabel="Police" />
              </Row>
              <Row label="Taille">
                <Seg value={f.pdfFontSize} onChange={(v) => set("pdfFontSize", v)} options={PDF_FONT_SIZE_OPTIONS} ariaLabel="Taille du texte" />
              </Row>
              <Row label="Interligne" hint="Espace aussi les paragraphes, les titres et les listes.">
                <Seg value={f.pdfLineSpacing} onChange={(v) => set("pdfLineSpacing", v)} options={PDF_LINE_SPACING_OPTIONS} ariaLabel="Interligne" />
              </Row>
            </Group>
            <Group title="Titres">
              <div className="ax-ps-headings">
                {PDF_HEADING_LEVELS.map((h) => {
                  const cur = headings[h.key] || {};
                  const setH = (patch) => {
                    const next = { ...cur, ...patch };
                    for (const k of Object.keys(next)) if (next[k] === "" || next[k] == null) delete next[k];
                    set("pdfHeadings", { ...headings, [h.key]: next });
                  };
                  return (
                    <div key={h.key} className="ax-ps-heading">
                      <span className="lvl">{h.key.toUpperCase()}</span>
                      <select className="ax-select sm" value={cur.size || "normal"} onChange={(e) => setH({ size: e.target.value === "normal" ? "" : e.target.value })} aria-label={`${h.label} : taille`}>
                        {PDF_HEADING_SIZE_OPTIONS.map((o) => (
                          <option key={o.value} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                      <select className="ax-select sm" value={cur.fontFamily || ""} onChange={(e) => setH({ fontFamily: e.target.value })} aria-label={`${h.label} : police`}>
                        <option value="">Idem texte</option>
                        {PDF_FONT_OPTIONS.map((o) => (
                          <option key={o.value} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                      <div className="ax-ps-heading-color">
                        <ColorInput label={`${h.label} : couleur`} value={cur.color || ""} onChange={(v) => setH({ color: v })} fallback={f.pdfTextColor} allowEmpty />
                      </div>
                    </div>
                  );
                })}
              </div>
              <span className="ax-hint">Dans les concours, les titres « ## » suivent H2 et « ### » suivent H3.</span>
              <SwitchRow label="Trait fin au-dessus des titres H2" checked={f.pdfHeadingRule} onChange={(v) => set("pdfHeadingRule", v)} />
            </Group>
            <Group title="Citations et encadrés">
              <Row hint="Les « À retenir » des cours et les consignes des concours (lignes qui commencent par « > »).">
                <Seg value={f.pdfQuoteStyle} onChange={(v) => set("pdfQuoteStyle", v)} options={PDF_QUOTE_STYLE_OPTIONS} ariaLabel="Style des citations" />
              </Row>
            </Group>
          </Panel>
        );

      case "page":
        return (
          <Panel title="Page" lead="Marges et cadre des pages de contenu.">
            <Group title="Marges">
              <RangeRow label="Marges" value={f.pdfMarginMm} range={PDF_MARGIN_MM_RANGE} unit=" mm" defaultValue={DEFAULT_PDF_SETTINGS.pdfMarginMm} onChange={(v) => set("pdfMarginMm", v)} hint="Même valeur à gauche, à droite, en haut et en bas. Active « Repères » sur l'aperçu pour voir la zone de texte." />
            </Group>
            <Group title="Cadre">
              <SwitchRow label="Cadre décoratif autour des pages" checked={f.pdfBorderEnabled} onChange={(v) => set("pdfBorderEnabled", v)}>
                <ColorRow label="Couleur" value={f.pdfBorderColor} onChange={(v) => set("pdfBorderColor", v)} fallback={f.pdfAccentColor} presets={ACCENT_PRESETS} />
                <RangeRow label="Épaisseur" value={f.pdfBorderWidth} range={PDF_BORDER_WIDTH_RANGE} unit=" mm" defaultValue={PDF_BORDER_WIDTH_RANGE.default} onChange={(v) => set("pdfBorderWidth", v)} />
                <RangeRow label="Distance au bord" value={f.pdfBorderInset} range={PDF_BORDER_INSET_RANGE} unit=" mm" defaultValue={PDF_BORDER_INSET_RANGE.default} onChange={(v) => set("pdfBorderInset", v)} />
              </SwitchRow>
            </Group>
          </Panel>
        );

      case "entete":
        return (
          <Panel title="En-tête et pied de page" lead="Ce qui se répète en haut et en bas de chaque page de contenu.">
            <Group title="En-tête">
              <SwitchRow label="En-tête de marque sur chaque page" checked={f.pdfShowHeader} onChange={(v) => set("pdfShowHeader", v)}>
                <SwitchRow label="Trait sous l'en-tête" checked={f.pdfHeaderRule} onChange={(v) => set("pdfHeaderRule", v)} />
                <SwitchRow label="Titre du document à l'opposé du logo" hint="Le titre du cours, du concours ou de l'évaluation, en petit, raccourci s'il est trop long." checked={f.pdfHeaderTitle} onChange={(v) => set("pdfHeaderTitle", v)} />
              </SwitchRow>
            </Group>
            <Group title="Pied de page">
              <SwitchRow label="Adresse du site et réseaux sociaux" hint="Liens cliquables ; les réseaux viennent des Réglages." checked={f.pdfShowSocialFooter} onChange={(v) => set("pdfShowSocialFooter", v)} />
              <Row label="Mention" hint="Ligne en italique au-dessus des liens, par exemple « Fiche de révision — SaadConcours ». Vide : pas de ligne.">
                <input className="ax-input sm" value={f.pdfFooterText || ""} maxLength={120} onChange={(e) => set("pdfFooterText", e.target.value)} placeholder="Aucune mention" />
              </Row>
            </Group>
            <Group title="Numéros de page">
              <SwitchRow label="Numéroter les pages" hint="La page de garde n'est pas comptée." checked={f.pdfShowPageNumbers} onChange={(v) => set("pdfShowPageNumbers", v)}>
                <Seg value={f.pdfPageNumberStyle} onChange={(v) => set("pdfPageNumberStyle", v)} options={PDF_PAGE_NUMBER_STYLE_OPTIONS} ariaLabel="Format des numéros" />
              </SwitchRow>
            </Group>
          </Panel>
        );

      case "filigrane":
        return (
          <Panel title="Filigrane" lead="Marque discrète imprimée sous le texte de chaque page de contenu.">
            <SwitchRow label="Filigrane actif" checked={f.pdfWatermarkEnabled} onChange={(v) => set("pdfWatermarkEnabled", v)}>
              <Row label="Texte">
                <input className="ax-input sm" value={f.pdfWatermarkText || ""} maxLength={40} onChange={(e) => set("pdfWatermarkText", e.target.value)} placeholder="SaadConcours" />
              </Row>
              <Row
                label="Disposition"
                hint={f.pdfWatermarkStyle === "tiled" ? "Le quadrillage couvre toute la page : il n'a pas de position." : "Fais glisser le repère « Filigrane » sur l'aperçu pour le déplacer."}
              >
                <Seg value={f.pdfWatermarkStyle} onChange={(v) => set("pdfWatermarkStyle", v)} options={PDF_WATERMARK_STYLE_OPTIONS} ariaLabel="Disposition du filigrane" />
              </Row>
              <RangeRow label="Opacité" value={f.pdfWatermarkOpacity} range={PDF_WATERMARK_OPACITY_RANGE} format={(v) => `${Math.round(v * 100)} %`} defaultValue={PDF_WATERMARK_OPACITY_RANGE.default} onChange={(v) => set("pdfWatermarkOpacity", v)} hint="Entre 6 et 10 % : visible à l'impression sans gêner la lecture." />
              {f.pdfWatermarkStyle !== "brand" && (
                <RangeRow label="Rotation" value={f.pdfWatermarkRotation} range={{ min: -90, max: 90, step: 1, default: 45 }} unit="°" defaultValue={45} onChange={(v) => set("pdfWatermarkRotation", v)} />
              )}
            </SwitchRow>
          </Panel>
        );

      case "couverture":
        return (
          <Panel title="Page de garde" lead="Première page du PDF : module, titre, description. Chaque élément se déplace aussi sur l'aperçu.">
            <SwitchRow label="Ajouter une page de garde" checked={f.pdfCoverPageEnabled} onChange={(v) => set("pdfCoverPageEnabled", v)} />
            {f.pdfCoverPageEnabled && (
              <>
                <Group title="Mise en page">
                  <Row label="Alignement">
                    <Seg value={f.pdfCoverAlign} onChange={(v) => set("pdfCoverAlign", v)} options={PDF_COVER_ALIGN_OPTIONS} ariaLabel="Alignement de la couverture" />
                  </Row>
                  <ColorRow label="Fond" value={f.pdfCoverBackgroundColor} onChange={(v) => set("pdfCoverBackgroundColor", v)} fallback="#ffffff" allowEmpty presets={BACKGROUND_PRESETS} />
                  <SwitchRow label="Page épurée" hint="Sans en-tête, pied de page, cadre ni filigrane." checked={f.pdfCoverCleanPage} onChange={(v) => set("pdfCoverCleanPage", v)} />
                  <SwitchRow label="Bandeau d'accent en haut" checked={f.pdfCoverAccentBar} onChange={(v) => set("pdfCoverAccentBar", v)}>
                    <RangeRow label="Hauteur" value={f.pdfCoverAccentBarHeight} range={PDF_COVER_ACCENT_BAR_RANGE} unit=" mm" defaultValue={PDF_COVER_ACCENT_BAR_RANGE.default} onChange={(v) => set("pdfCoverAccentBarHeight", v)} />
                  </SwitchRow>
                </Group>
                <Group title="Éléments">
                  <SwitchRow label="Logo" checked={f.pdfCoverShowLogo} onChange={(v) => set("pdfCoverShowLogo", v)}>
                    <RangeRow label="Taille" value={f.pdfCoverLogoSize} range={PDF_COVER_LOGO_SIZE_RANGE} unit=" mm" defaultValue={PDF_COVER_LOGO_SIZE_RANGE.default} onChange={(v) => set("pdfCoverLogoSize", v)} />
                  </SwitchRow>
                  <SwitchRow label="Sur-titre" hint="Le module, « Concours » ou « Évaluation », en capitales." checked={f.pdfCoverShowEyebrow} onChange={(v) => set("pdfCoverShowEyebrow", v)} />
                  <SwitchRow label="Description" checked={f.pdfCoverShowDescription} onChange={(v) => set("pdfCoverShowDescription", v)} />
                  <SwitchRow label="Date de téléchargement" checked={f.pdfCoverShowDate} onChange={(v) => set("pdfCoverShowDate", v)} />
                  <SwitchRow label="Trait décoratif" checked={f.pdfCoverShowRule} onChange={(v) => set("pdfCoverShowRule", v)}>
                    <RangeRow label="Longueur" value={f.pdfCoverRuleWidth} range={PDF_COVER_RULE_WIDTH_RANGE} unit=" mm" defaultValue={PDF_COVER_RULE_WIDTH_RANGE.default} onChange={(v) => set("pdfCoverRuleWidth", v)} />
                  </SwitchRow>
                  <SwitchRow label="Mention en bas de page" checked={f.pdfCoverShowTagline} onChange={(v) => set("pdfCoverShowTagline", v)}>
                    <input className="ax-input sm" value={f.pdfCoverTagline || ""} maxLength={80} onChange={(e) => set("pdfCoverTagline", e.target.value)} placeholder="SaadConcours" aria-label="Texte de la mention" />
                  </SwitchRow>
                </Group>
                <Group title="Tailles">
                  <RangeRow label="Titre" value={f.pdfCoverTitleSize} range={PDF_COVER_TITLE_SIZE_RANGE} unit=" pt" defaultValue={PDF_COVER_TITLE_SIZE_RANGE.default} onChange={(v) => set("pdfCoverTitleSize", v)} />
                  <RangeRow label="Autres textes" value={f.pdfCoverTextScale} range={PDF_COVER_TEXT_SCALE_RANGE} format={(v) => `× ${String(v).replace(".", ",")}`} defaultValue={1} onChange={(v) => set("pdfCoverTextScale", v)} />
                </Group>
                <Group title="Couleurs">
                  <ColorRow label="Titre" value={f.pdfCoverTitleColor} onChange={(v) => set("pdfCoverTitleColor", v)} fallback={f.pdfTextColor} allowEmpty />
                  <ContrastWarning fg={f.pdfCoverTitleColor || f.pdfTextColor} bg={coverBg}>
                    Le titre se détache mal du fond.
                  </ContrastWarning>
                  <ColorRow label="Sur-titre" value={f.pdfCoverEyebrowColor} onChange={(v) => set("pdfCoverEyebrowColor", v)} fallback={f.pdfAccentColor} allowEmpty />
                  <ContrastWarning fg={f.pdfCoverEyebrowColor || f.pdfAccentColor} bg={coverBg}>
                    Le sur-titre se détache mal du fond.
                  </ContrastWarning>
                  <ColorRow label="Description" value={f.pdfCoverSubtitleColor} onChange={(v) => set("pdfCoverSubtitleColor", v)} fallback="#646874" allowEmpty />
                  <ContrastWarning fg={f.pdfCoverSubtitleColor || "#646874"} bg={coverBg}>
                    La description se détache mal du fond.
                  </ContrastWarning>
                  <ColorRow label="Mention" value={f.pdfCoverTaglineColor} onChange={(v) => set("pdfCoverTaglineColor", v)} fallback="#969aa5" allowEmpty />
                </Group>
              </>
            )}
          </Panel>
        );

      case "positions":
        return (
          <Panel title="Positions" lead="Le plus simple : fais glisser les repères directement sur l'aperçu. Ici, les valeurs exactes (en % de la page).">
            <Group
              title="Pages de contenu"
              aside={
                Object.keys(f.pdfLayout || {}).length > 0 && (
                  <button type="button" className="ax-btn ghost xs" onClick={() => applyValues({ pdfLayout: {} })}>
                    Tout par défaut
                  </button>
                )
              }
            >
              <PositionRows
                elements={PDF_CONTENT_ELEMENTS}
                layout={f.pdfLayout}
                current={anchors}
                visible={(k) => Boolean(anchors[k])}
                onSet={(k, pos) => moveElement("content", k, pos)}
                onReset={(k) => moveElement("content", k, null)}
              />
            </Group>
            <Group
              title="Page de garde"
              aside={
                Object.keys(f.pdfCoverLayout || {}).length > 0 && (
                  <button type="button" className="ax-btn ghost xs" onClick={() => applyValues({ pdfCoverLayout: {} })}>
                    Tout par défaut
                  </button>
                )
              }
            >
              {f.pdfCoverPageEnabled ? (
                <PositionRows
                  elements={PDF_COVER_ELEMENTS}
                  layout={f.pdfCoverLayout}
                  current={PDF_COVER_DEFAULT_POSITIONS}
                  visible={coverVisible}
                  onSet={(k, pos) => moveElement("cover", k, pos)}
                  onReset={(k) => moveElement("cover", k, null)}
                />
              ) : (
                <p className="ax-hint">La page de garde est désactivée (onglet Couverture).</p>
              )}
            </Group>
            <p className="ax-hint">Sur l&apos;aperçu : Maj pour déplacer sans aimantation, flèches pour ajuster au clavier, double-clic pour revenir à la position par défaut.</p>
          </Panel>
        );

      default:
        return (
          <Panel title="Modèles" lead="Un clic applique tout un ensemble de réglages (le logo est conservé). Rien n'est publié avant « Enregistrer ».">
            <div className="ax-ps-tpls">
              {[...BUILT_IN_PDF_TEMPLATES, ...customTemplates].map((t) => {
                const on = templateMatches(t, f);
                return (
                  <div key={t.id} className={`ax-ps-tpl${on ? " on" : ""}`}>
                    <button type="button" className="ax-ps-tpl-main" onClick={() => applyValues({ ...t.values })} aria-pressed={on} title={t.blurb || t.name}>
                      <TemplateThumb v={t.values} />
                      <strong>
                        {t.name}
                        {on && <Icon name="check" size="sm" />}
                      </strong>
                      <small>{t.builtIn ? t.blurb : `Modèle perso · ${dateFr(t.createdAt)}`}</small>
                    </button>
                    {!t.builtIn && (
                      <div className="ax-ps-tpl-menu">
                        <Menu
                          label={`Actions du modèle ${t.name}`}
                          items={[
                            { label: "Mettre à jour avec les réglages actuels", icon: "refresh", onClick: () => updateTemplate(t) },
                            { label: "Renommer", icon: "edit", onClick: () => renameTemplate(t) },
                            "-",
                            { label: "Supprimer", icon: "trash", danger: true, onClick: () => deleteTemplate(t) },
                          ]}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="ax-btn-row ax-mt">
              <button type="button" className="ax-btn sm" onClick={saveAsTemplate}>
                <Icon name="plus" size="sm" /> Enregistrer comme modèle
              </button>
            </div>
            <Group title="Thème complet">
              <p className="ax-hint" style={{ marginTop: 0 }}>
                Un fichier .json avec tous les réglages et le logo : pour garder une sauvegarde ou reprendre un thème ailleurs.
              </p>
              <div className="ax-btn-row">
                <button type="button" className="ax-btn sm" onClick={exportTheme}>
                  <Icon name="download" size="sm" /> Exporter
                </button>
                <button type="button" className="ax-btn sm" onClick={() => importRef.current?.click()}>
                  <Icon name="upload" size="sm" /> Importer…
                </button>
              </div>
            </Group>
          </Panel>
        );
    }
  }

  const activeTab = TABS.find((t) => t.key === tab) || TABS[0];
  const pageCountLabel = preview ? `${preview.pageCount} page${preview.pageCount > 1 ? "s" : ""}` : "";

  return (
    <>
      <div className="ax-editor-head">
        <div className="ax-editor-title">
          <h1>Studio PDF</h1>
          <p>
            <span>Apparence des PDF téléchargés sur le site : cours, concours et évaluations.</span>
            <span className={`ax-pill ${dirty ? "amber" : "green"}`}>
              <span className="ax-dot" /> {dirty ? "Modifications non enregistrées" : "Tout est enregistré"}
            </span>
          </p>
        </div>
        <div className="ax-btn-row">
          <button type="button" className="ax-btn icon" onClick={undo} disabled={!history.past.length} title="Annuler (Ctrl Z)" aria-label="Annuler">
            <Icon name="undo" />
          </button>
          <button type="button" className="ax-btn icon" onClick={redo} disabled={!history.future.length} title="Rétablir (Ctrl Y)" aria-label="Rétablir">
            <Icon name="redo" />
          </button>
          <Menu
            label="Plus d'actions"
            items={[
              { label: "Télécharger l'aperçu (PDF)", icon: "download", onClick: downloadPreview, disabled: !preview },
              { label: "Exporter le thème (.json)", icon: "share", onClick: exportTheme },
              { label: "Importer un thème…", icon: "upload", onClick: () => importRef.current?.click() },
              "-",
              { label: "Réinitialiser l'apparence", icon: "restore", danger: true, onClick: resetLook },
            ]}
          />
          <button type="button" className="ax-btn primary" onClick={save} disabled={!dirty || saving}>
            <Icon name={saving ? "loader" : "save"} /> {saving ? "Enregistrement…" : dirty ? "Enregistrer" : "Enregistré"}
          </button>
        </div>
        <input
          ref={importRef}
          type="file"
          accept="application/json,.json"
          hidden
          onChange={(e) => {
            const file = e.target.files?.[0];
            e.target.value = "";
            if (file) importTheme(file);
          }}
        />
      </div>

      <div className="ax-ps">
        <aside className="ax-ps-side" aria-label="Réglages des PDF">
          <nav className="ax-ps-rail" role="tablist" aria-label="Sections">
            {TABS.map((t) => (
              <button key={t.key} type="button" role="tab" aria-selected={activeTab.key === t.key} className={activeTab.key === t.key ? "on" : ""} onClick={() => setTab(t.key)} title={t.title}>
                <Icon name={t.icon} />
                <span>{t.label}</span>
                {dirtyTab(t) && <i className="ax-ps-mod" aria-label="modifié" />}
              </button>
            ))}
          </nav>
          <div className="ax-ps-body" role="tabpanel" aria-label={activeTab.title} key={activeTab.key}>
            {renderPanel()}
          </div>
        </aside>

        <section className="ax-ps-view" aria-label="Aperçu du PDF">
          <div className="ax-ps-toolbar">
            <Seg value={type} onChange={setDocType} options={DOC_TYPES} ariaLabel="Type de document" />
            <select className="ax-select sm ax-ps-source" value={sourceId} onChange={(e) => setSourceIds({ ...(sourceIds || {}), [type]: e.target.value })} aria-label="Document de l'aperçu">
              <option value="exemple">Exemple (montre tous les éléments)</option>
              {type === "cours" &&
                coursList.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.module}
                    {c.semestre ? ` (${c.semestre})` : ""}
                  </option>
                ))}
              {type === "concours" &&
                concoursList.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.annee} · {c.etablissement} — {c.master_reel || c.filiere}
                  </option>
                ))}
              {type === "evaluation" &&
                quizList.map((q) => (
                  <option key={q.id} value={String(q.id)}>
                    {q.title}
                  </option>
                ))}
            </select>
            <label className="ax-check ax-ps-full" title="Génère le document entier (plus lent). Sinon l'aperçu s'arrête au début.">
              <input type="checkbox" checked={full} onChange={(e) => setFull(e.target.checked)} /> Document entier
            </label>
            <div className="ax-ps-tools">
              <button type="button" className={`ax-btn sm icon${view.guides ? " on" : ""}`} aria-pressed={view.guides} onClick={() => setView2({ guides: !view.guides })} title="Repères : marges, zone de texte et axes">
                <Icon name="ruler" size="sm" />
              </button>
              <button type="button" className={`ax-btn sm icon${view.handles ? " on" : ""}`} aria-pressed={view.handles} onClick={() => setView2({ handles: !view.handles })} title="Déplacer les éléments sur l'aperçu">
                <Icon name="move" size="sm" />
              </button>
              <span className="ax-ps-zoom">
                <button type="button" className="ax-btn ghost icon sm" onClick={() => zoomBy(-1)} disabled={zoomIndex === 0} title="Zoom arrière" aria-label="Zoom arrière">
                  <Icon name="zoomOut" size="sm" />
                </button>
                <select className="ax-select sm" value={String(view.zoom)} onChange={(e) => setView2({ zoom: e.target.value === "fit" ? "fit" : Number(e.target.value) })} aria-label="Zoom">
                  <option value="fit">Ajusté</option>
                  {ZOOMS.map((z) => (
                    <option key={z} value={String(z)}>
                      {Math.round(z * 100)} %
                    </option>
                  ))}
                </select>
                <button type="button" className="ax-btn ghost icon sm" onClick={() => zoomBy(1)} disabled={zoomIndex === ZOOMS.length - 1} title="Zoom avant" aria-label="Zoom avant">
                  <Icon name="zoomIn" size="sm" />
                </button>
              </span>
              <button type="button" className="ax-btn sm icon" onClick={openPreview} disabled={!preview} title="Ouvrir dans un nouvel onglet" aria-label="Ouvrir dans un nouvel onglet">
                <Icon name="external" size="sm" />
              </button>
              <button type="button" className="ax-btn sm icon" onClick={downloadPreview} disabled={!preview} title="Télécharger ce PDF" aria-label="Télécharger ce PDF">
                <Icon name="download" size="sm" />
              </button>
            </div>
          </div>

          {renderError && (
            <div className="ax-ps-alert">
              <Alert tone="error" title="Aperçu impossible">
                {renderError}
              </Alert>
            </div>
          )}

          {viewerDown ? (
            frameUrl ? (
              <iframe className="ax-ps-frame" title="Aperçu du PDF" src={`${frameUrl}#view=FitH`} />
            ) : (
              <div className="ax-ps-scroll" />
            )
          ) : (
            <PdfViewer bytes={preview?.bytes} zoom={view.zoom} pageLabel={pageLabel} renderOverlay={renderOverlay} onUnavailable={() => setViewerDown(true)} />
          )}

          <div className="ax-ps-status" aria-live="polite">
            {rendering ? (
              <span className="ax-inline">
                <Icon name="loader" size="sm" /> Génération…
              </span>
            ) : preview ? (
              <span>
                {pageCountLabel} · {preview.ms < 1000 ? `${Math.round(preview.ms)} ms` : `${(preview.ms / 1000).toFixed(1).replace(".", ",")} s`}
              </span>
            ) : (
              <span>Préparation…</span>
            )}
            <span className="ax-muted">{dirty ? "Réglages non enregistrés" : "Réglages enregistrés"}</span>
            {!full && <span className="ax-muted ax-hide-sm">Début du document seulement</span>}
            <span className="ax-muted ax-right ax-hide-sm">Ctrl S enregistrer · Ctrl Z annuler</span>
          </div>
        </section>
      </div>
    </>
  );
}
