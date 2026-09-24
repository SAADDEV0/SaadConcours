"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Icon from "../_ui/Icon";
import { Alert, Empty, ErrorState, Field, Hero, Seg, SectionTitle, Skeleton, Sparkline, Switch, Tabs, useTab } from "../_ui/kit";
import { Drawer, useConfirm, useToast } from "../_ui/feedback";
import { useSettingsForm, SETTINGS_PATH } from "../_lib/settings";
import { useJson } from "../_lib/content";
import { assetUrl, mutateJson, bytesToBase64 } from "../_lib/repo";
import { api } from "../_lib/api";
import { prepareImage } from "../_ui/ImagesField";
import { num, slugify, todayIso } from "../_lib/format";
import {
  PARTNER_PLACEMENTS,
  PARTNER_SECTIONS,
  PARTNER_DEVICES,
  LABEL_POSITIONS,
  DEFAULT_LABEL,
  DEFAULT_ROTATION_SEC,
  isAdLive,
  adHref,
  adWeight,
  partnerAdHtml,
  partnerAdsOptions,
  placementLabel,
  safeAdLink,
  sectionLabel,
} from "@/app/_shared/partnerAds";

const TABS = [
  { key: "partenaires", label: "Bannières partenaires", icon: "megaphone" },
  { key: "adsense", label: "Google AdSense", icon: "coins" },
];

const SLOTS = [
  { enabledKey: "adsHomeBannerEnabled", slotKey: "adsHomeBannerSlot", title: "Accueil — bannière", desc: "Sous le titre de la page d'accueil." },
  { enabledKey: "adsConcoursMidEnabled", slotKey: "adsConcoursMidSlot", title: "Fiche concours — entre énoncé et corrigé", desc: "Un seul bloc entre les deux sections." },
  { enabledKey: "adsConcoursBottomEnabled", slotKey: "adsConcoursBottomSlot", title: "Fiche concours — bas de page", desc: "Après les scans, avant les concours similaires." },
];

function AdSense() {
  const keys = useMemo(() => ["adsEnabled", "adsPublisherId", ...SLOTS.flatMap((s) => [s.enabledKey, s.slotKey])], []);
  const s = useSettingsForm(keys);
  const toast = useToast();
  if (s.error) return <ErrorState error={s.error} onRetry={s.reload} />;
  if (!s.form) return <Skeleton rows={5} />;
  const pubOk = !s.form.adsPublisherId || /^ca-pub-\d{10,}$/.test(s.form.adsPublisherId);
  return (
    <div className="ax-grid main-side">
      <section className="ax-card">
        <SectionTitle>Emplacements</SectionTitle>
        {SLOTS.map((slot) => (
          <div key={slot.slotKey} className="ax-card pad-sm" style={{ marginBottom: 10, background: "var(--bg)" }}>
            <Switch checked={s.form[slot.enabledKey]} onChange={(v) => s.set(slot.enabledKey, v)} label={slot.title} />
            <p className="ax-hint" style={{ margin: "6px 0 8px" }}>{slot.desc}</p>
            <input className="ax-input sm ax-mono" placeholder="ID du bloc (data-ad-slot), ex. 1234567890" value={s.form[slot.slotKey] || ""} onChange={(e) => s.set(slot.slotKey, e.target.value.trim())} disabled={!s.form[slot.enabledKey]} />
          </div>
        ))}
      </section>
      <aside className="ax-stack">
        <section className="ax-card">
          <SectionTitle>Compte</SectionTitle>
          <Switch checked={s.form.adsEnabled} onChange={(v) => s.set("adsEnabled", v)} label="AdSense actif sur le site" />
          <Field label="Identifiant éditeur" error={pubOk ? "" : "Format attendu : ca-pub-XXXXXXXXXXXXXXXX"}>
            <input className="ax-input ax-mono" style={{ marginTop: 10 }} value={s.form.adsPublisherId || ""} onChange={(e) => s.set("adsPublisherId", e.target.value.trim())} />
          </Field>
          <button
            type="button"
            className="ax-btn primary block"
            disabled={!s.dirty || s.saving || !pubOk}
            onClick={async () => {
              try {
                await s.save("AdSense");
                toast.success("AdSense enregistré", "Actif sur le site après le prochain déploiement.");
              } catch (err) {
                toast.error("Échec", err.message);
              }
            }}
          >
            <Icon name="save" /> Enregistrer
          </button>
        </section>
        <Alert tone="info">Le fichier ads.txt du site doit contenir le même identifiant éditeur, sinon Google limite la diffusion.</Alert>
      </aside>
    </div>
  );
}

/* ----------------------------- Bannières ----------------------------- */

function newAd() {
  return {
    id: `pa_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
    name: "",
    contact: "",
    image: "",
    w: "",
    h: "",
    imageMobile: "",
    mw: "",
    mh: "",
    logo: "",
    link: "",
    alt: "",
    title: "",
    description: "",
    cta: "",
    colors: { bg: "", fg: "", accent: "" },
    placements: ["header"],
    sections: [],
    device: "all",
    weight: 1,
    utm: false,
    utmCampaign: "",
    active: true,
    startDate: "",
    endDate: "",
    note: "",
  };
}

function statusOf(ad) {
  const today = todayIso();
  if (ad.active === false) return ["Désactivée", ""];
  if (!(ad.placements || []).length) return ["Sans emplacement", "amber"];
  if (ad.startDate && ad.endDate && ad.endDate < ad.startDate) return ["Dates incohérentes", "red"];
  if (ad.startDate && ad.startDate > today) return [`Programmée (${ad.startDate})`, "violet"];
  if (ad.endDate && ad.endDate < today) return ["Terminée", "red"];
  return isAdLive(ad, today) ? ["En diffusion", "green"] : ["Incomplète", "amber"];
}

function targetingSummary(ad) {
  const pages = (ad.sections || []).length ? ad.sections.map(sectionLabel).join(", ") : "Toutes les pages";
  const device = PARTNER_DEVICES.find((d) => d.key === (ad.device || "all"))?.label || "";
  return `${pages} · ${device}`;
}

// Les GIF (souvent animés) et SVG d'un annonceur partent tels quels :
// passer par le canvas figerait l'animation sur la première image. Le reste
// est converti en WebP comme toutes les images du site.
async function prepareAdImage(file) {
  const keep = /^image\/(gif|svg\+xml)$/.test(file.type);
  const prepared = keep
    ? (() => {
        const ext = file.type === "image/gif" ? "gif" : "svg";
        return file.arrayBuffer().then((buf) => ({ base64: bytesToBase64(new Uint8Array(buf)), ext, previewUrl: URL.createObjectURL(file) }));
      })()
    : prepareImage(file);
  const out = await prepared;
  const dims = await new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve({ w: img.naturalWidth, h: img.naturalHeight });
    img.onerror = () => resolve({});
    img.src = out.previewUrl;
  });
  return { ...out, ...dims };
}

// Format attendu par emplacement (largeur / hauteur) : un visuel hors format
// n'est jamais déformé, mais il est réduit et bordé de marges.
const FORMATS = {
  header: { min: 4, label: "un bandeau horizontal (970×120, 728×90)" },
  footer: { min: 4, label: "un bandeau horizontal (970×120, 728×90)" },
  inline: { min: 2.5, label: "un bandeau horizontal (970×250, 728×90)" },
  rail_left: { max: 0.6, label: "une colonne verticale (160×600, 300×600)" },
  rail_right: { max: 0.6, label: "une colonne verticale (160×600, 300×600)" },
};

function formatWarnings(ad, dims) {
  if (!dims?.w || !dims?.h) return [];
  const ratio = dims.w / dims.h;
  const bad = (ad.placements || []).filter((p) => {
    const f = FORMATS[p];
    return f && ((f.min && ratio < f.min) || (f.max && ratio > f.max));
  });
  return bad.map((p) => `${placementLabel(p)} attend ${FORMATS[p].label} — ce visuel fait ${dims.w}×${dims.h}.`);
}

/* ------------------------------- Aperçu -------------------------------
 * Rendu dans une iframe qui reprend les feuilles de style de la page : les
 * media queries s'y évaluent sur la largeur de l'iframe (375 px = vrai rendu
 * mobile), et la bannière est produite par le même partnerAdHtml() que le
 * site. Ce qu'on voit ici est ce que verra le visiteur. */

const MOCK_LINE = (w) => `<div style="height:10px;border-radius:6px;background:var(--border);opacity:.7;margin:0 0 10px;width:${w}%"></div>`;
const MOCK_CARD = (h = 90) =>
  `<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:18px;padding:18px 20px;margin:0 0 18px;min-height:${h}px">${MOCK_LINE(38)}${MOCK_LINE(92)}${MOCK_LINE(84)}${MOCK_LINE(60)}</div>`;
const MOCK_HEADER = `<div style="height:58px;border-bottom:1px solid var(--border);background:var(--bg-elev);display:flex;align-items:center;padding:0 20px;gap:10px;font-weight:800"><span style="width:28px;height:28px;border-radius:9px;background:linear-gradient(135deg,#4f46e5,#a855f7)"></span>SaadConcours</div>`;

function previewPage(unitHtml, placement, mobile) {
  const wrap = (inner) => `<div style="max-width:${mobile ? "none" : "900px"};margin:0 auto;padding:${mobile ? "16px" : "20px"}">${inner}</div>`;
  if (placement === "header") return MOCK_HEADER + `<div class="pa-zone pa-zone-header">${unitHtml}</div>` + wrap(MOCK_CARD());
  if (placement === "footer") return wrap(MOCK_CARD()) + `<div class="pa-zone pa-zone-footer">${unitHtml}</div><div style="height:40px"></div>`;
  if (placement === "inline") return wrap(MOCK_CARD(70) + `<div class="pa-zone pa-zone-inline">${unitHtml}</div>` + MOCK_CARD(70));
  // Colonne : le rail tel qu'il flotte à côté du contenu.
  return `<div style="display:flex;gap:16px;padding:16px;align-items:flex-start"><aside class="pa-rail" style="display:flex;position:static;width:160px;flex:none">${unitHtml}</aside><div style="flex:1;min-width:0">${MOCK_CARD(200)}${MOCK_CARD(160)}</div></div>`;
}

function SitePreview({ html, width, theme }) {
  const outer = useRef(null);
  const frame = useRef(null);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState(200);

  useEffect(() => {
    const el = outer.current;
    if (!el) return undefined;
    const ro = new ResizeObserver(() => setScale(Math.min(1, el.clientWidth / width)));
    ro.observe(el);
    return () => ro.disconnect();
  }, [width]);

  useEffect(() => {
    const doc = frame.current?.contentDocument;
    if (!doc) return undefined;
    const styles = [...document.querySelectorAll('link[rel="stylesheet"], style')].map((n) => n.outerHTML).join("");
    doc.open();
    doc.write(
      `<!doctype html><html lang="fr" data-theme="${theme}"><head><meta charset="utf-8">${styles}` +
        `<style>html,body{margin:0;background:var(--bg);color:var(--text);overflow:hidden}a{pointer-events:none}</style></head><body>${html}</body></html>`
    );
    doc.close();
    // Le <body> et non <html> : ce dernier ne descend jamais sous la hauteur
    // courante de l'iframe, qui ne pourrait alors que grandir.
    const measure = () => setHeight(Math.max(60, Math.ceil(doc.body.getBoundingClientRect().height)));
    measure();
    doc.querySelectorAll("img").forEach((img) => img.addEventListener("load", measure));
    const t = setTimeout(measure, 300);
    return () => clearTimeout(t);
  }, [html, theme]);

  return (
    <div ref={outer} className="ax-pa-stage" style={{ height: height * scale }}>
      <iframe
        ref={frame}
        title="Aperçu de la bannière"
        className="ax-pa-frame"
        style={{ width, height, transform: `scale(${scale})` }}
        tabIndex={-1}
      />
    </div>
  );
}

const PREVIEW_PLACEMENTS = [
  { value: "header", label: "Haut / bas de page" },
  { value: "inline", label: "Dans le contenu" },
  { value: "rail_left", label: "Colonne" },
];

function AdPreview({ ad, urls, options }) {
  const first = (ad.placements || [])[0] || "header";
  const [placement, setPlacement] = useState(first === "footer" ? "header" : first === "rail_right" ? "rail_left" : first);
  const [device, setDevice] = useState("desktop");
  const [theme, setTheme] = useState(() => (typeof document !== "undefined" && document.documentElement.dataset.theme === "light" ? "light" : "dark"));
  const isRail = placement === "rail_left";
  const mobile = device === "mobile" && !isRail;

  // En aperçu mobile, le visuel mobile remplace directement le visuel
  // principal : la <source media> se déciderait sur la largeur de la fenêtre
  // de la console, pas sur celle de l'aperçu.
  const shown = { ...ad, image: urls.image, logo: urls.logo, imageMobile: "" };
  if (mobile && urls.imageMobile) Object.assign(shown, { image: urls.imageMobile, w: ad.mw, h: ad.mh });
  const unit = partnerAdHtml(shown, placement, options);
  const width = isRail ? 560 : mobile ? 375 : placement === "inline" ? 900 : 1010;

  return (
    <div className="ax-pa-preview">
      <div className="ax-pa-preview-bar">
        <Seg ariaLabel="Emplacement" options={PREVIEW_PLACEMENTS} value={placement} onChange={setPlacement} />
        <Seg
          ariaLabel="Écran"
          options={[
            { value: "desktop", label: "Ordinateur" },
            { value: "mobile", label: "Mobile", title: isRail ? "Les colonnes ne s'affichent pas sur mobile" : undefined },
          ]}
          value={isRail ? "desktop" : device}
          onChange={setDevice}
        />
        <Seg
          ariaLabel="Thème"
          options={[
            { value: "dark", label: "Sombre" },
            { value: "light", label: "Clair" },
          ]}
          value={theme}
          onChange={setTheme}
        />
      </div>
      <SitePreview html={previewPage(unit, placement, mobile)} width={width} theme={theme} />
      <p className="ax-hint" style={{ margin: "6px 0 0" }}>
        {!(ad.placements || []).some((p) => p === placement || (placement === "header" && p === "footer") || (isRail && p === "rail_right")) &&
          "Emplacement non coché pour cette bannière : simple aperçu. "}
        {isRail
          ? "Colonne : visible seulement sur les grands écrans, dans la marge libre à côté du contenu."
          : mobile
            ? `Largeur mobile réelle (375 px)${ad.imageMobile || urls.imageMobile ? ", avec le visuel mobile" : ad.image ? " — sans visuel mobile, le visuel principal est réduit" : ""}.`
            : "Rendu ordinateur, réduit pour tenir dans le panneau."}
      </p>
    </div>
  );
}

/* ------------------------------ Éditeur ------------------------------ */

function ImagePicker({ label, hint, current, staged, onPick, onClear }) {
  const preview = staged?.previewUrl || (current ? assetUrl(current) : "");
  const dims = staged?.w ? `${staged.w}×${staged.h}` : "";
  return (
    <Field label={label} hint={hint}>
      <div className="ax-ad-preview">
        {preview ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={preview} alt="" />
        ) : (
          <span className="ax-muted">Aucune image</span>
        )}
      </div>
      <div className="ax-btn-row" style={{ marginTop: 8 }}>
        <label className="ax-btn sm">
          <Icon name="upload" size="sm" /> {preview ? "Remplacer" : "Choisir une image"}
          <input type="file" accept="image/*" hidden onChange={(e) => e.target.files[0] && onPick(e.target.files[0])} />
        </label>
        {preview && (
          <button type="button" className="ax-btn sm ghost" onClick={onClear}>
            <Icon name="x" size="sm" /> Retirer
          </button>
        )}
        {dims && <span className="ax-hint">{dims}</span>}
      </div>
    </Field>
  );
}

function ColorField({ label, value, fallback, onChange }) {
  return (
    <Field label={label}>
      <div className="ax-inline">
        <input type="color" className="ax-color" value={value || fallback} onChange={(e) => onChange(e.target.value)} aria-label={label} />
        {value ? (
          <button type="button" className="ax-btn sm ghost" onClick={() => onChange("")}>
            Thème du site
          </button>
        ) : (
          <span className="ax-hint">Thème du site</span>
        )}
      </div>
    </Field>
  );
}

function toggleIn(list, key, on) {
  const cur = list || [];
  return on ? [...new Set([...cur, key])] : cur.filter((x) => x !== key);
}

function AdEditor({ ad, options, onClose, onSaved }) {
  const [form, setForm] = useState(() => ({ ...newAd(), ...ad, colors: { bg: "", fg: "", accent: "", ...(ad.colors || {}) } }));
  // Visuels choisis mais pas encore envoyés : partent dans le même commit.
  const [staged, setStaged] = useState({});
  const [saving, setSaving] = useState(false);
  const toast = useToast();
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const setColor = (k, v) => setForm((f) => ({ ...f, colors: { ...f.colors, [k]: v } }));

  async function pick(kind, file) {
    try {
      const prepared = await prepareAdImage(file);
      setStaged((s) => ({ ...s, [kind]: prepared }));
    } catch (err) {
      toast.error("Image illisible", err.message);
    }
  }
  function clear(kind) {
    setStaged((s) => ({ ...s, [kind]: null }));
    if (kind === "image") setForm((f) => ({ ...f, image: "", w: "", h: "" }));
    if (kind === "imageMobile") setForm((f) => ({ ...f, imageMobile: "", mw: "", mh: "" }));
    if (kind === "logo") set("logo", "");
  }

  const urls = {
    image: staged.image?.previewUrl || (form.image ? assetUrl(form.image) : ""),
    imageMobile: staged.imageMobile?.previewUrl || (form.imageMobile ? assetUrl(form.imageMobile) : ""),
    logo: staged.logo?.previewUrl || (form.logo ? assetUrl(form.logo) : ""),
  };
  const previewAd = {
    ...form,
    w: staged.image?.w || form.w,
    h: staged.image?.h || form.h,
    mw: staged.imageMobile?.w || form.mw,
    mh: staged.imageMobile?.h || form.mh,
  };

  const errors = {};
  if (!form.name.trim()) errors.name = "Le nom de l'annonceur sert au suivi et au rapport.";
  if (form.link.trim() && !safeAdLink(form.link)) errors.link = "Lien invalide : https://…, un domaine (exemple.ma) ou mailto:…";
  if (form.startDate && form.endDate && form.endDate < form.startDate) errors.endDate = "La fin tombe avant le début : la bannière ne serait jamais diffusée.";
  if (!urls.image && !form.title.trim()) errors.content = "Ajoute un visuel ou, à défaut, un titre d'encart texte.";
  const warnings = urls.image ? formatWarnings(form, { w: previewAd.w, h: previewAd.h }) : [];
  const railOnly = (form.placements || []).length > 0 && form.placements.every((p) => p.startsWith("rail_"));
  if (railOnly && form.device === "mobile") warnings.push("Les colonnes ne s'affichent jamais sur mobile : avec « Mobile uniquement », cette bannière ne sera vue nulle part.");
  const ok = !Object.keys(errors).length;

  async function save() {
    setSaving(true);
    try {
      let next = { ...form, weight: adWeight(form) };
      const files = [];
      const base = `images/partenaires/${slugify(form.name || "banniere")}-${Date.now().toString(36)}`;
      const suffix = { image: "", imageMobile: "-mobile", logo: "-logo" };
      for (const kind of ["image", "imageMobile", "logo"]) {
        const img = staged[kind];
        if (!img) continue;
        const path = `${base}${suffix[kind]}.${img.ext}`;
        files.push({ path, base64: img.base64 });
        next[kind] = path;
        if (kind === "image") Object.assign(next, { w: img.w || "", h: img.h || "" });
        if (kind === "imageMobile") Object.assign(next, { mw: img.w || "", mh: img.h || "" });
      }
      await mutateJson(SETTINGS_PATH, (cur) => {
        const list = Array.isArray(cur.partnerAds) ? cur.partnerAds : [];
        const idx = list.findIndex((a) => a.id === next.id);
        return {
          data: { ...cur, partnerAds: idx === -1 ? [...list, next] : list.map((a, i) => (i === idx ? next : a)) },
          files,
          message: `Bannière partenaire : ${next.name || next.id}`,
          audit: { action: idx === -1 ? "create" : "update", resource: "settings", label: `Bannière « ${next.name || next.id} »` },
        };
      });
      toast.success("Bannière enregistrée", "En ligne au prochain déploiement (3 à 5 min).");
      onSaved();
    } catch (err) {
      toast.error("Enregistrement impossible", err.message);
    } finally {
      setSaving(false);
    }
  }

  const href = adHref({ ...form, link: form.link }, (form.placements || [])[0] || "header");

  return (
    <Drawer
      title={ad.name ? `Bannière « ${ad.name} »` : "Nouvelle bannière"}
      onClose={onClose}
      width={680}
      footer={
        <>
          <button type="button" className="ax-btn" onClick={onClose}>
            Annuler
          </button>
          <button type="button" className="ax-btn primary" disabled={saving || !ok} onClick={save} title={ok ? undefined : Object.values(errors)[0]}>
            <Icon name={saving ? "loader" : "save"} /> Enregistrer
          </button>
        </>
      }
    >
      <SectionTitle>Aperçu sur le site</SectionTitle>
      <AdPreview ad={previewAd} urls={urls} options={options} />
      {warnings.map((w) => (
        <Alert key={w} tone="warn">
          {w}
        </Alert>
      ))}
      {errors.content && <Alert tone="warn">{errors.content}</Alert>}

      <hr className="ax-sep" />
      <SectionTitle>Annonceur</SectionTitle>
      <Field label="Nom" required error={form.name.trim() ? "" : errors.name}>
        <input className="ax-input" value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Nom de l'école, du centre…" />
      </Field>
      <Field label="Lien de destination" error={errors.link} hint={href && href !== form.link.trim() ? `Lien réel : ${href}` : undefined}>
        <input className="ax-input" value={form.link} onChange={(e) => set("link", e.target.value)} placeholder="https://…" />
      </Field>
      <div className="ax-card pad-sm" style={{ background: "var(--bg)", marginBottom: 14 }}>
        <Switch checked={form.utm} onChange={(v) => set("utm", v)} label="Ajouter le suivi UTM au lien" />
        <p className="ax-hint" style={{ margin: "6px 0 8px" }}>
          L&apos;annonceur voit alors les visites venues de SaadConcours dans ses propres statistiques (Google Analytics…).
        </p>
        {form.utm && (
          <input className="ax-input sm" value={form.utmCampaign} onChange={(e) => set("utmCampaign", e.target.value)} placeholder={`Nom de campagne (par défaut : ${slugify(form.name || "partenaire")})`} />
        )}
      </div>

      <hr className="ax-sep" />
      <SectionTitle>Visuels</SectionTitle>
      <ImagePicker
        label="Visuel principal"
        hint="970×120 pour le haut/bas de page, 970×250 dans le contenu, 160×600 pour les colonnes. GIF animé accepté. Sans visuel, un encart texte est affiché."
        current={form.image}
        staged={staged.image}
        onPick={(f) => pick("image", f)}
        onClear={() => clear("image")}
      />
      {urls.image && (
        <ImagePicker
          label="Visuel mobile (facultatif)"
          hint="Remplace le visuel principal sur téléphone : 640×200 pour un bandeau, 600×500 dans le contenu. Sans lui, un bandeau 970×120 tombe à ~45 px de haut sur mobile, souvent illisible."
          current={form.imageMobile}
          staged={staged.imageMobile}
          onPick={(f) => pick("imageMobile", f)}
          onClear={() => clear("imageMobile")}
        />
      )}
      <Field label="Texte alternatif" hint="Décrit le visuel pour les lecteurs d'écran.">
        <input className="ax-input" value={form.alt} onChange={(e) => set("alt", e.target.value)} placeholder={form.name || "Nom de l'annonceur"} />
      </Field>

      <hr className="ax-sep" />
      <SectionTitle>{urls.image ? "Encart texte (si le visuel est retiré)" : "Encart texte"}</SectionTitle>
      <div className="ax-row">
        <Field label="Titre">
          <input className="ax-input" value={form.title} onChange={(e) => set("title", e.target.value)} />
        </Field>
        <Field label="Bouton">
          <input className="ax-input" value={form.cta} onChange={(e) => set("cta", e.target.value)} placeholder="En savoir plus" />
        </Field>
      </div>
      <Field label="Description">
        <textarea className="ax-textarea" rows={2} value={form.description} onChange={(e) => set("description", e.target.value)} />
      </Field>
      {!urls.image && (
        <>
          <ImagePicker label="Logo (facultatif)" hint="Carré, 104×104 ou plus." current={form.logo} staged={staged.logo} onPick={(f) => pick("logo", f)} onClear={() => clear("logo")} />
          <div className="ax-row">
            <ColorField label="Fond" value={form.colors.bg} fallback="#161922" onChange={(v) => setColor("bg", v)} />
            <ColorField label="Texte" value={form.colors.fg} fallback="#e8eaf0" onChange={(v) => setColor("fg", v)} />
            <ColorField label="Bouton" value={form.colors.accent} fallback="#4f8cff" onChange={(v) => setColor("accent", v)} />
          </div>
        </>
      )}

      <hr className="ax-sep" />
      <SectionTitle>Diffusion</SectionTitle>
      <Field label="Emplacements" error={(form.placements || []).length ? "" : "Aucun emplacement : la bannière ne s'affichera nulle part."}>
        <div className="ax-stack" style={{ gap: 8 }}>
          {PARTNER_PLACEMENTS.map((p) => (
            <label key={p.key} className="ax-check ax-check-desc">
              <input type="checkbox" checked={(form.placements || []).includes(p.key)} onChange={(e) => set("placements", toggleIn(form.placements, p.key, e.target.checked))} />
              <span>
                {p.label}
                <small>{p.desc}</small>
              </span>
            </label>
          ))}
        </div>
      </Field>
      <Field label="Pages" hint="Aucune case cochée = toutes les pages. Cible par exemple le blog et les concours pour une prépa Master.">
        <div className="ax-pa-checks">
          {PARTNER_SECTIONS.map((s) => (
            <label key={s.key} className="ax-check">
              <input type="checkbox" checked={(form.sections || []).includes(s.key)} onChange={(e) => set("sections", toggleIn(form.sections, s.key, e.target.checked))} />
              {s.label}
            </label>
          ))}
        </div>
      </Field>
      <div className="ax-row">
        <Field label="Appareils">
          <select className="ax-select" value={form.device || "all"} onChange={(e) => set("device", e.target.value)}>
            {PARTNER_DEVICES.map((d) => (
              <option key={d.key} value={d.key}>
                {d.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Part d'affichage" hint="Sur un emplacement partagé, poids 3 = reste affichée 3 fois plus longtemps qu'une bannière de poids 1.">
          <select className="ax-select" value={adWeight(form)} onChange={(e) => set("weight", Number(e.target.value))}>
            {[1, 2, 3, 4, 5].map((w) => (
              <option key={w} value={w}>
                {w === 1 ? "1 (normal)" : `${w}×`}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <div className="ax-row">
        <Field label="Début" hint="Vide = dès maintenant.">
          <input type="date" className="ax-input" value={form.startDate} onChange={(e) => set("startDate", e.target.value)} />
        </Field>
        <Field label="Fin" error={errors.endDate} hint="Vide = sans fin.">
          <input type="date" className="ax-input" value={form.endDate} onChange={(e) => set("endDate", e.target.value)} />
        </Field>
      </div>
      <Switch checked={form.active !== false} onChange={(v) => set("active", v)} label="Active" />

      <hr className="ax-sep" />
      <Alert tone="info">Contact et notes restent privés : le site public ne les reçoit jamais.</Alert>
      <Field label="Contact de l'annonceur">
        <input className="ax-input" value={form.contact} onChange={(e) => set("contact", e.target.value)} />
      </Field>
      <Field label="Notes (tarif, échéances…)">
        <textarea className="ax-textarea" rows={3} value={form.note} onChange={(e) => set("note", e.target.value)} />
      </Field>
    </Drawer>
  );
}

/* ------------------------- Réglages communs ------------------------- */

const OPTION_KEYS = ["partnerAdsRotationSec", "partnerAdsLabel", "partnerAdsLabelPosition"];

function PartnerOptions() {
  const s = useSettingsForm(OPTION_KEYS);
  const toast = useToast();
  if (!s.form) return null;
  const sec = s.form.partnerAdsRotationSec ?? DEFAULT_ROTATION_SEC;
  const secOk = Number(sec) >= 5 && Number(sec) <= 120;
  return (
    <section className="ax-card" style={{ marginBottom: 14 }}>
      <SectionTitle>Réglages communs</SectionTitle>
      <div className="ax-row">
        <Field label="Rotation (secondes)" error={secOk ? "" : "Entre 5 et 120 secondes."} hint="Quand plusieurs bannières partagent un emplacement.">
          <input type="number" min={5} max={120} className="ax-input" value={sec} onChange={(e) => s.set("partnerAdsRotationSec", e.target.value === "" ? "" : Number(e.target.value))} />
        </Field>
        <Field label="Mention" hint="Obligatoire : signale au visiteur qu'il s'agit d'une publicité.">
          <input className="ax-input" maxLength={24} value={s.form.partnerAdsLabel ?? ""} placeholder={DEFAULT_LABEL} onChange={(e) => s.set("partnerAdsLabel", e.target.value)} />
        </Field>
        <Field label="Position de la mention">
          <select className="ax-select" value={s.form.partnerAdsLabelPosition || "above"} onChange={(e) => s.set("partnerAdsLabelPosition", e.target.value)}>
            {LABEL_POSITIONS.map((p) => (
              <option key={p.key} value={p.key}>
                {p.label}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <button
        type="button"
        className="ax-btn primary sm"
        disabled={!s.dirty || s.saving || !secOk}
        onClick={async () => {
          try {
            await s.save("bannières partenaires");
            toast.success("Réglages enregistrés", "Appliqués au prochain déploiement.");
          } catch (err) {
            toast.error("Échec", err.message);
          }
        }}
      >
        <Icon name="save" size="sm" /> Enregistrer
      </button>
    </section>
  );
}

/* ------------------------------ Liste ------------------------------ */

function sumDays(days, kind, id, n) {
  return (days || []).slice(-n).reduce((t, d) => t + (d[kind]?.[id] || 0), 0);
}

function ctr(clicks, views) {
  return views ? `${((clicks / views) * 100).toFixed(1).replace(".", ",")} %` : "—";
}

function reportText(ad, stats) {
  const v = stats.views?.[ad.id] || 0;
  const c = stats.clicks?.[ad.id] || 0;
  const days = stats.days || [];
  const lines = [
    `Rapport de diffusion — ${ad.name || "Bannière"}`,
    `SaadConcours (www.saadconcours.space) · édité le ${todayIso()}`,
    "",
    `Campagne : ${ad.startDate ? `du ${ad.startDate}` : "depuis le lancement"}${ad.endDate ? ` au ${ad.endDate}` : ""}`,
    `Emplacements : ${(ad.placements || []).map(placementLabel).join(", ") || "—"}`,
    `Pages : ${targetingSummary(ad)}`,
    "",
    `Affichages (bannière vue à l'écran) : ${num(v)}`,
    `Clics : ${num(c)} — taux de clic ${ctr(c, v)}`,
    `7 derniers jours : ${num(sumDays(days, "views", ad.id, 7))} affichages, ${num(sumDays(days, "clicks", ad.id, 7))} clics`,
    `30 derniers jours : ${num(sumDays(days, "views", ad.id, 30))} affichages, ${num(sumDays(days, "clicks", ad.id, 30))} clics`,
  ];
  const detail = days.filter((d) => d.views?.[ad.id] || d.clicks?.[ad.id]);
  if (detail.length) {
    lines.push("", "Détail par jour :");
    for (const d of detail) lines.push(`  ${d.date} : ${num(d.views?.[ad.id] || 0)} affichages, ${num(d.clicks?.[ad.id] || 0)} clics`);
  }
  return lines.join("\n");
}

function AdCard({ ad, stats, onEdit, onDuplicate, onToggle, onDelete }) {
  const toast = useToast();
  const [label, tone] = statusOf(ad);
  const v = stats.views?.[ad.id] || 0;
  const c = stats.clicks?.[ad.id] || 0;
  const series = (stats.days || []).map((d) => d.views?.[ad.id] || 0);
  return (
    <section className="ax-card">
      <div className="ax-card-head">
        <strong>{ad.name || "Sans nom"}</strong>
        <span className={`ax-pill ${tone}`}>{label}</span>
      </div>
      <div className="ax-ad-preview" style={{ marginBottom: 10 }}>
        {ad.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={assetUrl(ad.image)} alt={ad.alt || ""} />
        ) : (
          <span className="ax-pa-textthumb" style={{ background: ad.colors?.bg || undefined, color: ad.colors?.fg || undefined }}>
            {ad.title || "—"}
          </span>
        )}
      </div>
      <dl className="ax-kv">
        <dt>Emplacements</dt>
        <dd>{(ad.placements || []).map(placementLabel).join(", ") || "—"}</dd>
        <dt>Ciblage</dt>
        <dd>
          {targetingSummary(ad)}
          {adWeight(ad) > 1 ? ` · part ${adWeight(ad)}×` : ""}
        </dd>
        {(ad.startDate || ad.endDate) && (
          <>
            <dt>Période</dt>
            <dd>
              {ad.startDate || "…"} → {ad.endDate || "…"}
            </dd>
          </>
        )}
        <dt>Affichages</dt>
        <dd>
          {num(v)} <span className="ax-muted">· 7 j : {num(sumDays(stats.days, "views", ad.id, 7))}</span>
        </dd>
        <dt>Clics</dt>
        <dd>
          {num(c)} <span className="ax-muted">· taux {ctr(c, v)}</span>
        </dd>
      </dl>
      {series.some(Boolean) && (
        <div className="ax-pa-spark" title="Affichages des 30 derniers jours">
          <Sparkline values={series} />
        </div>
      )}
      <div className="ax-btn-row ax-mt">
        <button type="button" className="ax-btn sm" onClick={onEdit}>
          <Icon name="edit" size="sm" /> Modifier
        </button>
        <button type="button" className="ax-btn sm" onClick={onToggle}>
          {ad.active === false ? "Activer" : "Désactiver"}
        </button>
        <button type="button" className="ax-btn sm icon" onClick={onDuplicate} title="Dupliquer" aria-label="Dupliquer">
          <Icon name="copy" size="sm" />
        </button>
        <button
          type="button"
          className="ax-btn sm icon"
          title="Copier le rapport pour l'annonceur"
          aria-label="Copier le rapport pour l'annonceur"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(reportText(ad, stats));
              toast.success("Rapport copié", "Colle-le dans un email ou un message à l'annonceur.");
            } catch {
              toast.error("Copie impossible", "Le navigateur a refusé l'accès au presse-papiers.");
            }
          }}
        >
          <Icon name="file" size="sm" />
        </button>
        <button type="button" className="ax-btn sm danger icon ax-right" onClick={onDelete} title="Supprimer" aria-label="Supprimer">
          <Icon name="trash" size="sm" />
        </button>
      </div>
    </section>
  );
}

function Partners() {
  const { data, loading, error, reload } = useJson(SETTINGS_PATH);
  const [editing, setEditing] = useState(null);
  const [stats, setStats] = useState({ views: {}, clicks: {}, days: [] });
  const toast = useToast();
  const confirm = useConfirm();
  useEffect(() => {
    api("/api/admin/metrics?scope=ads")
      .then((d) => setStats({ views: {}, clicks: {}, days: [], ...(d.ads || {}) }))
      .catch(() => {});
  }, []);

  if (error) return <ErrorState error={error} onRetry={reload} />;
  if (loading || !data) return <Skeleton rows={4} height={90} />;
  const ads = Array.isArray(data.partnerAds) ? data.partnerAds : [];
  const options = partnerAdsOptions(data);
  const live = ads.filter((a) => statusOf(a)[1] === "green").length;

  async function patch(fn, label) {
    try {
      await mutateJson(SETTINGS_PATH, (cur) => ({ data: fn(cur), message: `Bannières : ${label}`, audit: { action: "settings", resource: "settings", label } }));
      toast.success("Enregistré", "Visible sur le site au prochain déploiement.");
    } catch (err) {
      toast.error("Échec", err.message);
    }
  }

  const updateAd = (id, fn) => (cur) => ({ ...cur, partnerAds: (cur.partnerAds || []).map((a) => (a.id === id ? fn(a) : a)) });

  return (
    <>
      <div className="ax-card-head" style={{ flexWrap: "wrap", justifyContent: "flex-start" }}>
        <Switch checked={data.partnerAdsEnabled !== false} onChange={(v) => patch((c) => ({ ...c, partnerAdsEnabled: v }), v ? "activées" : "désactivées")} label="Diffusion des bannières partenaires" />
        <span className="ax-muted">
          {live} en diffusion sur {ads.length}
        </span>
        <button type="button" className="ax-btn primary ax-right" onClick={() => setEditing(newAd())}>
          <Icon name="plus" /> Nouvelle bannière
        </button>
      </div>
      {data.partnerAdsEnabled === false && ads.length > 0 && (
        <Alert tone="warn">La diffusion est coupée : aucune bannière ne s&apos;affiche sur le site, quels que soient leurs réglages.</Alert>
      )}
      <PartnerOptions />
      {!ads.length ? (
        <Empty icon="🪧" title="Aucune bannière">
          Vends de l&apos;espace à une école ou un centre de formation : la bannière s&apos;affiche en haut, en bas, dans le contenu ou dans les colonnes du site.
        </Empty>
      ) : (
        <div className="ax-grid auto">
          {ads.map((ad) => (
            <AdCard
              key={ad.id}
              ad={ad}
              stats={stats}
              onEdit={() => setEditing(ad)}
              onToggle={() => patch(updateAd(ad.id, (a) => ({ ...a, active: a.active === false })), `${ad.name} ${ad.active === false ? "activée" : "désactivée"}`)}
              onDuplicate={() => {
                const copy = { ...structuredClone(ad), id: newAd().id, name: `${ad.name || "Bannière"} (copie)`, active: false };
                patch((cur) => ({ ...cur, partnerAds: [...(cur.partnerAds || []), copy] }), `bannière ${ad.name} dupliquée`);
              }}
              onDelete={async () => {
                if (await confirm({ title: `Supprimer « ${ad.name} » ?`, confirmLabel: "Supprimer", tone: "danger" }))
                  patch((cur) => ({ ...cur, partnerAds: (cur.partnerAds || []).filter((a) => a.id !== ad.id) }), `bannière ${ad.name} supprimée`);
              }}
            />
          ))}
        </div>
      )}
      <p className="ax-hint ax-mt">
        Un affichage n&apos;est compté que si la bannière a été vue à l&apos;écran (au moins à moitié, onglet au premier plan). Plusieurs bannières sur le même
        emplacement tournent toutes les {options.rotationSec} secondes, selon leur part d&apos;affichage. La copie (<Icon name="copy" size="sm" />) arrive
        désactivée.
      </p>
      {editing && <AdEditor ad={editing} options={options} onClose={() => setEditing(null)} onSaved={() => setEditing(null)} />}
    </>
  );
}

export default function Monetisation() {
  const [tab, setTab] = useTab(TABS);
  return (
    <>
      <Hero icon="💰" eyebrow="Pilotage · Revenus" title="Monétisation">
        Les bannières de tes partenaires (vendues en direct) et les blocs Google AdSense. La boutique de cahiers se gère dans Contenu › Boutique.
      </Hero>
      <Tabs tabs={TABS} value={tab} onChange={setTab} />
      {tab === "partenaires" ? <Partners /> : <AdSense />}
    </>
  );
}
