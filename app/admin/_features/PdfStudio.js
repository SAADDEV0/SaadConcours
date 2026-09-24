"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Icon from "../_ui/Icon";
import { Alert, ErrorState, Hero, Seg, Skeleton, Switch } from "../_ui/kit";
import { useConfirm, usePrompt, useToast } from "../_ui/feedback";
import { useJson } from "../_lib/content";
import { mutateJson } from "../_lib/repo";
import { SETTINGS_PATH } from "../_lib/settings";
import { useDebounced, useHotkey, useUnsavedGuard } from "../_lib/hooks";
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
  PDF_COVER_ACCENT_BAR_RANGE,
  PDF_COVER_ELEMENTS,
  PDF_COVER_LOGO_SIZE_RANGE,
  PDF_COVER_RULE_WIDTH_RANGE,
  PDF_COVER_TEXT_SCALE_RANGE,
  PDF_COVER_TITLE_SIZE_RANGE,
  PDF_COVER_DEFAULT_POSITIONS,
  PDF_CONTENT_ELEMENTS,
  PDF_FONT_OPTIONS,
  PDF_FONT_SIZE_OPTIONS,
  PDF_HEADING_LEVELS,
  PDF_HEADING_SIZE_OPTIONS,
  PDF_LINE_SPACING_OPTIONS,
  PDF_LOGO_POSITION_OPTIONS,
  PDF_MARGIN_MM_RANGE,
  PDF_WATERMARK_OPACITY_RANGE,
  PDF_WATERMARK_STYLE_OPTIONS,
  PDF_COVER_ALIGN_OPTIONS,
} from "@/app/_shared/pdfTheme";

// Studio PDF v2.
//
// L'ancien studio simulait la page sur un canevas HTML qui imitait le rendu
// de jsPDF ; ce qu'on voyait n'était pas exactement ce que le site
// produisait. Ici l'aperçu EST le vrai PDF : le moteur du site (coursPdf.js)
// le génère à chaque réglage, avec les réglages non enregistrés, sur un
// exemple ou sur un vrai cours du site.

const OWNED = [...PDF_TEMPLATE_KEYS, "pdfLogoDataUrl", "pdfTemplates"];
const MAX_LOGO = 400 * 1024;
const CONTENT_DEFAULTS = { logo: { xPct: 10, yPct: 5 }, watermark: { xPct: 50, yPct: 50 }, footer: { xPct: 50, yPct: 96 }, pageNumber: { xPct: 90, yPct: 96 } };

const SAMPLE = {
  id: "apercu-studio-pdf",
  module: "Analyse financière",
  title: "Exemple de fiche — Studio PDF",
  description: "Aperçu généré avec les réglages en cours (non enregistrés).",
  content: `# Analyse financière\n\n## 1. Le bilan fonctionnel\n\nLe bilan fonctionnel classe les postes par **cycle** (investissement, financement, exploitation). Le fonds de roulement se calcule ainsi : $FRNG = Ressources\\ stables - Emplois\\ stables$.\n\n- Ressources stables : capitaux propres, dettes financières\n- Emplois stables : immobilisations brutes\n- Besoin en fonds de roulement : $BFR = Actif\\ circulant - Passif\\ circulant$\n\n### Exemple chiffré\n\n| Indicateur | Montant (DH) |\n| --- | --- |\n| FRNG | 1 200 000 |\n| BFR | 800 000 |\n| Trésorerie nette | 400 000 |\n\n> La trésorerie nette est égale à $FRNG - BFR$.\n\n## 2. Les soldes intermédiaires de gestion\n\nLa valeur ajoutée mesure la richesse créée : $$VA = Production + Marge\\ commerciale - Consommations$$\n\n1. Marge commerciale\n2. Production de l'exercice\n3. Excédent brut d'exploitation\n`,
};

function readFile(file) {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(String(r.result));
    r.onerror = reject;
    r.readAsDataURL(file);
  });
}

function Row({ label, children, hint }) {
  return (
    <div className="ax-field" style={{ marginBottom: 12 }}>
      <label className="ax-label">{label}</label>
      {children}
      {hint && <span className="ax-hint">{hint}</span>}
    </div>
  );
}

function Range({ value, onChange, range, unit = "", format }) {
  const v = Number.isFinite(Number(value)) ? Number(value) : range.default;
  return (
    <div className="ax-range">
      <input type="range" min={range.min} max={range.max} step={range.step || 1} value={v} onChange={(e) => onChange(Number(e.target.value))} />
      <output>{format ? format(v) : `${v}${unit}`}</output>
    </div>
  );
}

function Color({ value, onChange, fallback = "#4f46e5", allowEmpty }) {
  return (
    <div className="ax-color">
      <input type="color" value={value || fallback} onChange={(e) => onChange(e.target.value)} />
      <input className="ax-input sm ax-mono" value={value || ""} placeholder={allowEmpty ? "automatique" : fallback} onChange={(e) => onChange(e.target.value.trim())} style={{ maxWidth: 130 }} />
      {allowEmpty && value && (
        <button type="button" className="ax-btn ghost xs" onClick={() => onChange("")}>
          Auto
        </button>
      )}
    </div>
  );
}

function Select({ value, onChange, options }) {
  return (
    <select className="ax-select sm" value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}

function Section({ title, icon, children, open }) {
  return (
    <details className="ax-acc" open={open}>
      <summary>
        <span>{icon}</span> {title}
        <Icon name="chevronDown" size="sm" className="chev" />
      </summary>
      <div className="ax-acc-body">{children}</div>
    </details>
  );
}

function Positions({ elements, layout = {}, defaults, onChange }) {
  return elements.map((el) => {
    const pos = layout[el.key];
    const on = Boolean(pos);
    const cur = pos || defaults[el.key] || { xPct: 50, yPct: 50 };
    return (
      <div key={el.key} className="ax-card pad-sm" style={{ background: "var(--bg)", marginBottom: 8 }}>
        <Switch
          checked={on}
          onChange={(v) => {
            const next = { ...layout };
            if (v) next[el.key] = cur;
            else delete next[el.key];
            onChange(next);
          }}
          label={`${el.icon ? el.icon + " " : ""}${el.label}${on ? "" : " — position par défaut"}`}
        />
        {on && (
          <div className="ax-mt" style={{ marginTop: 8 }}>
            <span className="ax-hint">Horizontal</span>
            <Range value={cur.xPct} range={{ min: 0, max: 100, step: 0.5 }} unit=" %" onChange={(x) => onChange({ ...layout, [el.key]: { ...cur, xPct: x } })} />
            <span className="ax-hint">Vertical</span>
            <Range value={cur.yPct} range={{ min: 0, max: 100, step: 0.5 }} unit=" %" onChange={(y) => onChange({ ...layout, [el.key]: { ...cur, yPct: y } })} />
          </div>
        )}
      </div>
    );
  });
}

export default function PdfStudio() {
  const { data: settings, loading, error, reload } = useJson(SETTINGS_PATH);
  const cours = useJson("data/cours.json");
  const toast = useToast();
  const confirm = useConfirm();
  const prompt = usePrompt();
  const [form, setForm] = useState(null);
  const [saved, setSaved] = useState(null);
  const [history, setHistory] = useState({ past: [], future: [] });
  const [sample, setSample] = useState("exemple");
  const [pdfUrl, setPdfUrl] = useState(null);
  const [rendering, setRendering] = useState(false);
  const [renderError, setRenderError] = useState("");
  const [saving, setSaving] = useState(false);
  const lastUrl = useRef(null);
  const lastKey = useRef({ key: null, at: 0 });

  const pick = useCallback((src) => Object.fromEntries(OWNED.map((k) => [k, src?.[k] ?? (k in DEFAULT_PDF_SETTINGS ? DEFAULT_PDF_SETTINGS[k] : null)])), []);

  useEffect(() => {
    if (settings && !form) {
      const f = pick(settings);
      setForm(f);
      setSaved(JSON.stringify(f));
    }
  }, [settings, form, pick]);

  const dirty = form && JSON.stringify(form) !== saved;
  useUnsavedGuard(Boolean(dirty) && !saving);

  // Chaque modification passe par ici : historique annuler/rétablir, les
  // gestes continus (curseur, saisie) regroupés en une seule étape.
  const formRef = useRef(null);
  formRef.current = form;
  const push = useCallback((snapshot) => {
    setHistory((h) => ({ past: [...h.past.slice(-60), snapshot], future: [] }));
  }, []);
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
    const prev = history.past[history.past.length - 1];
    setHistory({ past: history.past.slice(0, -1), future: [formRef.current, ...history.future] });
    lastKey.current = { key: null, at: 0 };
    setForm(prev);
  }
  function redo() {
    if (!history.future.length) return;
    const next = history.future[0];
    setHistory({ past: [...history.past, formRef.current], future: history.future.slice(1) });
    lastKey.current = { key: null, at: 0 };
    setForm(next);
  }
  useHotkey("mod+z", undo, { allowInInputs: false });
  useHotkey("mod+shift+z", redo, { allowInInputs: false });

  // ---- Aperçu réel ----
  const renderKey = useDebounced(form ? JSON.stringify(form) + "|" + sample : "", 650);
  useEffect(() => {
    if (!form || !renderKey) return;
    let cancelled = false;
    (async () => {
      setRendering(true);
      setRenderError("");
      try {
        const [{ buildCoursPdf }, { resolvePdfBranding }, { ensureCoursPdfScripts }] = await Promise.all([
          import("@/app/_shared/coursPdf"),
          import("@/app/_shared/pdfTheme"),
          import("@/app/_shared/pdfScripts"),
        ]);
        await ensureCoursPdfScripts();
        const branding = await resolvePdfBranding({ ...settings, ...form });
        const source = sample === "exemple" ? SAMPLE : (cours.data || []).find((c) => c.id === sample) || SAMPLE;
        // Un vrai cours peut faire 60 pages : on n'en garde que le début pour
        // que l'aperçu reste instantané.
        const doc = await buildCoursPdf({ ...source, content: String(source.content || "").slice(0, 9000) }, branding);
        if (cancelled) return;
        const url = URL.createObjectURL(doc.output("blob"));
        if (lastUrl.current) URL.revokeObjectURL(lastUrl.current);
        lastUrl.current = url;
        setPdfUrl(url);
      } catch (err) {
        if (!cancelled) setRenderError(err?.message || String(err));
      } finally {
        if (!cancelled) setRendering(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [renderKey]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => () => lastUrl.current && URL.revokeObjectURL(lastUrl.current), []);

  async function save() {
    setSaving(true);
    try {
      await mutateJson(SETTINGS_PATH, (cur) => ({
        data: { ...cur, ...form },
        message: "Studio PDF : apparence des PDF",
        audit: { action: "settings", resource: "pdf", label: "Apparence des PDF" },
      }));
      setSaved(JSON.stringify(form));
      toast.success("Apparence des PDF enregistrée", "Les PDF du site l'utilisent dès le prochain déploiement.");
    } catch (err) {
      toast.error("Enregistrement impossible", err.message);
    } finally {
      setSaving(false);
    }
  }
  useHotkey("mod+s", save, { allowInInputs: true, enabled: Boolean(dirty) });

  const customTemplates = useMemo(() => normalizeCustomTemplates(form?.pdfTemplates), [form?.pdfTemplates]);

  async function saveAsTemplate() {
    const name = await prompt({ title: "Enregistrer comme modèle", body: "Le modèle garde tous les réglages actuels (sauf le logo).", placeholder: "Nom du modèle", required: true, confirmLabel: "Créer" });
    if (!name) return;
    const t = { id: `perso-${Date.now().toString(36)}`, name: name.trim().slice(0, 60), blurb: "Modèle enregistré depuis le studio.", createdAt: new Date().toISOString(), values: pickTemplateValues(form) };
    set("pdfTemplates", [...(form.pdfTemplates || []), t]);
    toast.info("Modèle ajouté", "Enregistre pour le conserver.");
  }

  if (error) return <ErrorState error={error} onRetry={reload} />;
  if (loading || !form) return <Skeleton rows={6} height={90} />;
  const f = form;
  const headings = f.pdfHeadings || {};

  return (
    <>
      <Hero
        icon="🖨️"
        eyebrow="Diffusion · PDF téléchargés sur le site"
        title="Studio PDF"
        actions={
          <>
            <button type="button" className="ax-btn icon" onClick={undo} disabled={!history.past.length} title="Annuler (Ctrl Z)" aria-label="Annuler">
              <Icon name="undo" />
            </button>
            <button type="button" className="ax-btn icon" onClick={redo} disabled={!history.future.length} title="Rétablir (Ctrl Maj Z)" aria-label="Rétablir">
              <Icon name="redo" />
            </button>
            <button
              type="button"
              className="ax-btn"
              onClick={async () => {
                if (await confirm({ title: "Revenir aux réglages d'origine ?", body: "Le logo et tes modèles sont conservés.", confirmLabel: "Réinitialiser" })) applyValues({ ...DEFAULT_PDF_SETTINGS });
              }}
            >
              <Icon name="restore" size="sm" /> Réinitialiser
            </button>
            <button type="button" className="ax-btn primary" onClick={save} disabled={!dirty || saving}>
              <Icon name={saving ? "loader" : "save"} /> {dirty ? "Enregistrer" : "Enregistré"}
            </button>
          </>
        }
      >
        Tout ce que tu règles ici s&apos;applique aux PDF que les visiteurs téléchargent (cours, concours, évaluations). L&apos;aperçu à droite est un vrai PDF, régénéré à chaque réglage.
      </Hero>

      <div className="ax-studio">
        <aside className="ax-card ax-studio-panel">
          <Section title="Modèles" icon="✨" open>
            <div className="ax-tpl-grid">
              {[...BUILT_IN_PDF_TEMPLATES, ...customTemplates].map((t) => {
                const on = templateMatches(t, f);
                const v = t.values;
                return (
                  <button key={t.id} type="button" className={`ax-tpl${on ? " on" : ""}`} onClick={() => applyValues({ ...v })} title={t.blurb}>
                    <span className="ax-tpl-swatch" style={{ background: v.pdfCoverPageEnabled && v.pdfCoverBackgroundColor ? v.pdfCoverBackgroundColor : "#fff" }}>
                      <span style={{ position: "absolute", left: 8, right: 8, top: 10, height: 5, borderRadius: 3, background: v.pdfAccentColor }} />
                      <span style={{ position: "absolute", left: 8, right: 22, top: 20, height: 3, borderRadius: 3, background: v.pdfTextColor, opacity: 0.35 }} />
                      <span style={{ position: "absolute", left: 8, right: 30, top: 27, height: 3, borderRadius: 3, background: v.pdfTextColor, opacity: 0.35 }} />
                      {v.pdfBorderEnabled && <span style={{ position: "absolute", inset: 3, border: `1px solid ${v.pdfBorderColor}`, borderRadius: 5 }} />}
                    </span>
                    <strong>
                      {t.name}
                      {!t.builtIn && " ★"}
                    </strong>
                    <span>{t.builtIn ? t.blurb : `Perso · ${dateFr(t.createdAt)}`}</span>
                  </button>
                );
              })}
            </div>
            <div className="ax-btn-row ax-mt">
              <button type="button" className="ax-btn sm" onClick={saveAsTemplate}>
                <Icon name="plus" size="sm" /> Enregistrer comme modèle
              </button>
              {customTemplates.length > 0 && (
                <select
                  className="ax-select sm"
                  value=""
                  onChange={(e) => e.target.value && set("pdfTemplates", (f.pdfTemplates || []).filter((t) => t.id !== e.target.value))}
                  style={{ width: "auto" }}
                >
                  <option value="">Supprimer un modèle…</option>
                  {customTemplates.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.name}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </Section>

          <Section title="Identité" icon="🎨">
            <Row label="Logo" hint="PNG ou JPG, 400 Ko maximum. Sans logo, le chapeau SaadConcours est dessiné.">
              <div className="ax-btn-row">
                {f.pdfLogoDataUrl && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={f.pdfLogoDataUrl} alt="Logo" style={{ height: 38, borderRadius: 8, background: "#fff", padding: 3 }} />
                )}
                <label className="ax-btn sm">
                  <Icon name="upload" size="sm" /> {f.pdfLogoDataUrl ? "Remplacer" : "Choisir"}
                  <input
                    type="file"
                    accept="image/png,image/jpeg"
                    hidden
                    onChange={async (e) => {
                      const file = e.target.files[0];
                      e.target.value = "";
                      if (!file) return;
                      if (file.size > MAX_LOGO) return toast.error("Logo trop lourd", "400 Ko maximum : il est intégré à chaque PDF.");
                      set("pdfLogoDataUrl", await readFile(file));
                    }}
                  />
                </label>
                {f.pdfLogoDataUrl && (
                  <button type="button" className="ax-btn ghost sm" onClick={() => set("pdfLogoDataUrl", "")}>
                    Retirer
                  </button>
                )}
              </div>
            </Row>
            <Row label="Position du logo dans l'en-tête">
              <Seg value={f.pdfLogoPosition} onChange={(v) => set("pdfLogoPosition", v)} options={PDF_LOGO_POSITION_OPTIONS} />
            </Row>
            <Row label="Couleur d'accent (titres, traits)">
              <Color value={f.pdfAccentColor} onChange={(v) => set("pdfAccentColor", v)} />
            </Row>
            <Row label="Couleur du texte">
              <Color value={f.pdfTextColor} onChange={(v) => set("pdfTextColor", v)} fallback="#1a1d27" />
            </Row>
          </Section>

          <Section title="Texte" icon="🔤">
            <Row label="Police">
              <Seg value={f.pdfFontFamily} onChange={(v) => set("pdfFontFamily", v)} options={PDF_FONT_OPTIONS} />
            </Row>
            <Row label="Taille du texte">
              <Seg value={f.pdfFontSize} onChange={(v) => set("pdfFontSize", v)} options={PDF_FONT_SIZE_OPTIONS} />
            </Row>
            <Row label="Interligne">
              <Seg value={f.pdfLineSpacing} onChange={(v) => set("pdfLineSpacing", v)} options={PDF_LINE_SPACING_OPTIONS} />
            </Row>
            {PDF_HEADING_LEVELS.map((h) => {
              const cur = headings[h.key] || {};
              const setH = (patch) => set("pdfHeadings", { ...headings, [h.key]: { ...cur, ...patch } });
              return (
                <div key={h.key} className="ax-card pad-sm" style={{ background: "var(--bg)", marginBottom: 8 }}>
                  <strong style={{ fontSize: "0.84rem" }}>{h.label}</strong>
                  <div className="ax-btn-row" style={{ marginTop: 6 }}>
                    <Select value={cur.size || "normal"} onChange={(v) => setH({ size: v })} options={PDF_HEADING_SIZE_OPTIONS} />
                    <Select value={cur.fontFamily || f.pdfFontFamily} onChange={(v) => setH({ fontFamily: v })} options={PDF_FONT_OPTIONS} />
                  </div>
                  <div style={{ marginTop: 6 }}>
                    <Color value={cur.color || ""} onChange={(v) => setH({ color: v })} fallback={f.pdfTextColor} allowEmpty />
                  </div>
                </div>
              );
            })}
            <Switch checked={f.pdfHeadingRule} onChange={(v) => set("pdfHeadingRule", v)} label="Trait au-dessus des titres H2" />
          </Section>

          <Section title="Mise en page" icon="📐">
            <Row label="Marges">
              <Range value={f.pdfMarginMm} range={PDF_MARGIN_MM_RANGE} unit=" mm" onChange={(v) => set("pdfMarginMm", v)} />
            </Row>
            <div className="ax-stack" style={{ gap: 10 }}>
              <Switch checked={f.pdfShowHeader} onChange={(v) => set("pdfShowHeader", v)} label="En-tête de marque sur chaque page" />
              {f.pdfShowHeader && <Switch checked={f.pdfHeaderRule} onChange={(v) => set("pdfHeaderRule", v)} label="Trait sous l'en-tête" />}
              <Switch checked={f.pdfShowPageNumbers} onChange={(v) => set("pdfShowPageNumbers", v)} label="Numéros de page" />
              <Switch checked={f.pdfBorderEnabled} onChange={(v) => set("pdfBorderEnabled", v)} label="Cadre décoratif" />
            </div>
            {f.pdfBorderEnabled && (
              <div className="ax-mt">
                <Row label="Couleur du cadre">
                  <Color value={f.pdfBorderColor} onChange={(v) => set("pdfBorderColor", v)} />
                </Row>
                <Row label="Épaisseur">
                  <Range value={f.pdfBorderWidth} range={PDF_BORDER_WIDTH_RANGE} unit=" mm" onChange={(v) => set("pdfBorderWidth", v)} />
                </Row>
                <Row label="Distance au bord">
                  <Range value={f.pdfBorderInset} range={PDF_BORDER_INSET_RANGE} unit=" mm" onChange={(v) => set("pdfBorderInset", v)} />
                </Row>
              </div>
            )}
          </Section>

          <Section title="Filigrane" icon="💧">
            <Switch checked={f.pdfWatermarkEnabled} onChange={(v) => set("pdfWatermarkEnabled", v)} label="Filigrane actif" />
            {f.pdfWatermarkEnabled && (
              <div className="ax-mt">
                <Row label="Texte">
                  <input className="ax-input sm" value={f.pdfWatermarkText || ""} onChange={(e) => set("pdfWatermarkText", e.target.value)} />
                </Row>
                <Row label="Disposition">
                  <Seg value={f.pdfWatermarkStyle} onChange={(v) => set("pdfWatermarkStyle", v)} options={PDF_WATERMARK_STYLE_OPTIONS} />
                </Row>
                <Row label="Opacité">
                  <Range value={f.pdfWatermarkOpacity} range={PDF_WATERMARK_OPACITY_RANGE} format={(v) => `${Math.round(v * 100)} %`} onChange={(v) => set("pdfWatermarkOpacity", v)} />
                </Row>
                <Row label="Rotation">
                  <Range value={f.pdfWatermarkRotation} range={{ min: -90, max: 90, default: 45 }} unit="°" onChange={(v) => set("pdfWatermarkRotation", v)} />
                </Row>
              </div>
            )}
          </Section>

          <Section title="Pied de page" icon="📎">
            <Row label="Mention" hint="Ex. « Fiche de révision — SaadConcours ». Vide = adresse du site.">
              <input className="ax-input sm" value={f.pdfFooterText || ""} onChange={(e) => set("pdfFooterText", e.target.value)} />
            </Row>
            <Switch checked={f.pdfShowSocialFooter} onChange={(v) => set("pdfShowSocialFooter", v)} label="Réseaux sociaux en pied de page" />
          </Section>

          <Section title="Page de garde" icon="📘">
            <Switch checked={f.pdfCoverPageEnabled} onChange={(v) => set("pdfCoverPageEnabled", v)} label="Ajouter une page de garde" />
            {f.pdfCoverPageEnabled && (
              <div className="ax-mt">
                <Row label="Alignement">
                  <Seg value={f.pdfCoverAlign} onChange={(v) => set("pdfCoverAlign", v)} options={PDF_COVER_ALIGN_OPTIONS} />
                </Row>
                <Row label="Fond">
                  <Color value={f.pdfCoverBackgroundColor} onChange={(v) => set("pdfCoverBackgroundColor", v)} fallback="#ffffff" allowEmpty />
                </Row>
                <div className="ax-stack" style={{ gap: 10, marginBottom: 12 }}>
                  <Switch checked={f.pdfCoverCleanPage} onChange={(v) => set("pdfCoverCleanPage", v)} label="Page épurée (sans en-tête ni filigrane)" />
                  <Switch checked={f.pdfCoverAccentBar} onChange={(v) => set("pdfCoverAccentBar", v)} label="Bandeau d'accent en haut" />
                  {f.pdfCoverAccentBar && <Range value={f.pdfCoverAccentBarHeight} range={PDF_COVER_ACCENT_BAR_RANGE} unit=" mm" onChange={(v) => set("pdfCoverAccentBarHeight", v)} />}
                  <Switch checked={f.pdfCoverShowLogo} onChange={(v) => set("pdfCoverShowLogo", v)} label="Logo" />
                  {f.pdfCoverShowLogo && <Range value={f.pdfCoverLogoSize} range={PDF_COVER_LOGO_SIZE_RANGE} unit=" mm" onChange={(v) => set("pdfCoverLogoSize", v)} />}
                  <Switch checked={f.pdfCoverShowEyebrow} onChange={(v) => set("pdfCoverShowEyebrow", v)} label="Sur-titre (module)" />
                  <Switch checked={f.pdfCoverShowDescription} onChange={(v) => set("pdfCoverShowDescription", v)} label="Description" />
                  <Switch checked={f.pdfCoverShowDate} onChange={(v) => set("pdfCoverShowDate", v)} label="Date de génération" />
                  <Switch checked={f.pdfCoverShowRule} onChange={(v) => set("pdfCoverShowRule", v)} label="Trait décoratif" />
                  {f.pdfCoverShowRule && <Range value={f.pdfCoverRuleWidth} range={PDF_COVER_RULE_WIDTH_RANGE} unit=" mm" onChange={(v) => set("pdfCoverRuleWidth", v)} />}
                  <Switch checked={f.pdfCoverShowTagline} onChange={(v) => set("pdfCoverShowTagline", v)} label="Mention en bas" />
                </div>
                {f.pdfCoverShowTagline && (
                  <Row label="Texte de la mention">
                    <input className="ax-input sm" value={f.pdfCoverTagline || ""} onChange={(e) => set("pdfCoverTagline", e.target.value)} />
                  </Row>
                )}
                <Row label="Taille du titre">
                  <Range value={f.pdfCoverTitleSize} range={PDF_COVER_TITLE_SIZE_RANGE} unit=" pt" onChange={(v) => set("pdfCoverTitleSize", v)} />
                </Row>
                <Row label="Taille des autres textes">
                  <Range value={f.pdfCoverTextScale} range={PDF_COVER_TEXT_SCALE_RANGE} format={(v) => `× ${String(v).replace(".", ",")}`} onChange={(v) => set("pdfCoverTextScale", v)} />
                </Row>
                <Row label="Couleur du titre">
                  <Color value={f.pdfCoverTitleColor} onChange={(v) => set("pdfCoverTitleColor", v)} fallback={f.pdfTextColor} allowEmpty />
                </Row>
                <Row label="Couleur du sur-titre">
                  <Color value={f.pdfCoverEyebrowColor} onChange={(v) => set("pdfCoverEyebrowColor", v)} fallback={f.pdfAccentColor} allowEmpty />
                </Row>
                <Row label="Couleur de la description">
                  <Color value={f.pdfCoverSubtitleColor} onChange={(v) => set("pdfCoverSubtitleColor", v)} fallback="#646874" allowEmpty />
                </Row>
                <Row label="Couleur de la mention">
                  <Color value={f.pdfCoverTaglineColor} onChange={(v) => set("pdfCoverTaglineColor", v)} fallback="#969aa5" allowEmpty />
                </Row>
              </div>
            )}
          </Section>

          <Section title="Positions précises" icon="🎯">
            <p className="ax-hint" style={{ marginTop: 0 }}>Pages de contenu</p>
            <Positions elements={PDF_CONTENT_ELEMENTS} layout={f.pdfLayout || {}} defaults={CONTENT_DEFAULTS} onChange={(v) => set("pdfLayout", v)} />
            {f.pdfCoverPageEnabled && (
              <>
                <p className="ax-hint">Page de garde</p>
                <Positions elements={PDF_COVER_ELEMENTS} layout={f.pdfCoverLayout || {}} defaults={PDF_COVER_DEFAULT_POSITIONS} onChange={(v) => set("pdfCoverLayout", v)} />
              </>
            )}
          </Section>
        </aside>

        <section className="ax-stack">
          <div className="ax-toolbar ax-mb0">
            <label className="ax-label" htmlFor="pdf-sample">
              Aperçu sur
            </label>
            <select id="pdf-sample" className="ax-select" value={sample} onChange={(e) => setSample(e.target.value)} style={{ maxWidth: 360 }}>
              <option value="exemple">Fiche d&apos;exemple (titres, formules, tableau)</option>
              {(cours.data || [])
                .filter((c) => c.available)
                .map((c) => (
                  <option key={c.id} value={c.id}>
                    Cours : {c.module}
                  </option>
                ))}
            </select>
            <span className="ax-count">{rendering ? "Génération…" : dirty ? "Aperçu des réglages non enregistrés" : "Aperçu des réglages enregistrés"}</span>
            {pdfUrl && (
              <a className="ax-btn sm ax-right" href={pdfUrl} target="_blank" rel="noopener noreferrer">
                <Icon name="maximize" size="sm" /> Plein écran
              </a>
            )}
          </div>
          {renderError && <Alert tone="error" title="Aperçu impossible">{renderError}</Alert>}
          {pdfUrl ? (
            <iframe className="ax-pdf-frame" title="Aperçu du PDF" src={`${pdfUrl}#toolbar=1&view=FitH`} style={{ opacity: rendering ? 0.6 : 1 }} />
          ) : (
            <div className="ax-skel ax-pdf-frame" />
          )}
          <p className="ax-hint">Aperçu limité au début du document pour rester instantané. Ctrl S enregistre, Ctrl Z annule.</p>
        </section>
      </div>
    </>
  );
}
