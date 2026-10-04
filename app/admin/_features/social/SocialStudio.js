"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Icon from "../../_ui/Icon";
import { Alert, BarList, Empty, Field, Hero, Seg, SectionTitle, Skeleton, Switch, Tabs, TagsInput, useTab } from "../../_ui/kit";
import { Dialog, useConfirm, useToast } from "../../_ui/feedback";
import { useJson, useCorrigeFiles } from "../../_lib/content";
import { COLLECTIONS } from "../../_lib/collections";
import { assetUrl } from "../../_lib/repo";
import { api } from "../../_lib/api";
import { dateTimeFr, daysUntil, matchQuery, timeAgo } from "../../_lib/format";
import { CONTENT_KINDS, PLATFORMS, TONES, captionFor, carouselCaption, countFor, factsFor, googleQuery, hashtagsFor, intentUrl, trackedUrl } from "./captions";
import { CUSTOM_THEME, DEFAULT_STYLE, FORMATS, PATTERNS, THEMES, TITLE_SIZES, canvasBlob, customTheme, drawVisual, loadImage, normalizeStyle, resolveTheme, styleDiff } from "./visual";
import { buildCarousel, carouselBullets } from "./carousel";
import { blobBytes, downloadBlob, makeZip } from "./zip";

const MODES = [
  { value: "visuel", label: "Visuel seul" },
  { value: "carrousel", label: "Carrousel extrait" },
];

const ALIGNS = [
  { value: "left", label: "Gauche" },
  { value: "center", label: "Centré" },
];

const PREVIEWS = [
  { value: "image", label: "Image" },
  { value: "instagram", label: "Instagram" },
  { value: "facebook", label: "Facebook" },
];

const BADGES = ["NOUVEAU", "GRATUIT", "CORRIGÉ", "🔥 TOP"];

// Réglages retenus d'une visite à l'autre, sur cet appareil.
const PREFS_KEY = "sc-social-prefs";

const hasCorrigeOf = (item, corrigeFiles) => Boolean(item.corrige_md) || Boolean(corrigeFiles?.has(item.id));

// Fichiers d'un carrousel dans le ZIP : images numérotées + textes à coller.
async function carouselFiles(dir, item, { canvases, truncated }, { tone, outro, tags, corrigeFiles }) {
  const opts = { tone, outro, tags, truncated, ctx: { corrigeFiles } };
  const files = [];
  for (let k = 0; k < canvases.length; k++) files.push({ name: `${dir}/${String(k + 1).padStart(2, "0")}.png`, data: await blobBytes(await canvasBlob(canvases[k])) });
  files.push({ name: `${dir}/instagram.txt`, data: carouselCaption("instagram", item, opts) });
  files.push({ name: `${dir}/facebook.txt`, data: carouselCaption("facebook", item, opts) });
  files.push({ name: `${dir}/facebook-premier-commentaire.txt`, data: `Le corrigé détaillé ici 👉 ${trackedUrl("concours", item, "facebook")}` });
  return files;
}

const BATCH_README = `Carrousels SaadConcours
=======================

Un dossier par concours :
- 01.png, 02.png… : les images, dans l'ordre (affiche, sujet, recherche Google) ;
- instagram.txt / facebook.txt : le texte à coller ;
- facebook-premier-commentaire.txt : le lien, à poster en premier commentaire.

Publier ou programmer : Meta Business Suite (business.facebook.com) >
Créer une publication > cocher Facebook et Instagram > ajouter les images
du dossier > coller le texte > Programmer.
`;

const TABS = [
  { key: "composer", label: "Composer", icon: "edit" },
  { key: "planning", label: "Planning & historique", icon: "calendar" },
];

function PlatformLogo({ p }) {
  return (
    <span className="ax-net-logo" style={{ background: p.gradient || p.color }}>
      {p.short}
    </span>
  );
}

function useSocialLog() {
  const [entries, setEntries] = useState(null);
  const load = () => api("/api/admin/social").then((d) => setEntries(d.entries || [])).catch(() => setEntries([]));
  useEffect(() => {
    load();
  }, []);
  return { entries, reload: load, setEntries };
}

function useSavedStyles() {
  const [styles, setStyles] = useState([]);
  useEffect(() => {
    api("/api/admin/social/styles")
      .then((d) => setStyles(d.styles || []))
      .catch(() => setStyles([]));
  }, []);
  return [styles, setStyles];
}

/* ------------------------------ Dates ------------------------------ */

// Valeur d'un <input type="datetime-local"> à l'heure locale.
const toLocalInput = (d) => new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
const localDay = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

function at(daysAhead, h, m = 0) {
  const d = new Date();
  d.setDate(d.getDate() + daysAhead);
  d.setHours(h, m, 0, 0);
  return d;
}

// Raccourcis de date, aux heures où les étudiants sont en ligne.
function quickDates() {
  const now = new Date();
  const list = [{ label: "Dans 1 h", date: new Date(Math.ceil((now.getTime() + 3600000) / 900000) * 900000) }];
  if (now.getHours() < 19) list.push({ label: "Ce soir 20 h", date: at(0, 20) });
  list.push({ label: "Demain 12 h 30", date: at(1, 12, 30) }, { label: "Demain 18 h", date: at(1, 18) }, { label: "Demain 21 h", date: at(1, 21) });
  const sat = (6 - now.getDay() + 7) % 7 || 7;
  list.push({ label: "Samedi 11 h", date: at(sat, 11) });
  return list;
}

function QuickDates({ value, onPick }) {
  const list = useMemo(quickDates, []);
  return (
    <div className="ax-chips" style={{ marginBottom: 10 }}>
      {list.map((q) => {
        const v = toLocalInput(q.date);
        return (
          <button key={q.label} type="button" className={`ax-toggle-chip${value === v ? " on" : ""}`} onClick={() => onPick(v)}>
            {q.label}
          </button>
        );
      })}
    </div>
  );
}

function PlanDialog({ onClose, onSave, platform, auto = false, initial, title }) {
  const [when, setWhen] = useState(() => toLocalInput(initial ? new Date(initial) : at(1, 18)));
  const [note, setNote] = useState("");
  const past = Date.parse(when) < Date.now() - 60000;
  return (
    <Dialog
      title={title || `Planifier sur ${platform.label}`}
      onClose={onClose}
      footer={
        <>
          <button type="button" className="ax-btn" onClick={onClose}>
            Annuler
          </button>
          <button type="button" className="ax-btn primary" onClick={() => onSave(new Date(when).toISOString(), note)} disabled={!when}>
            <Icon name="calendar" size="sm" /> {initial ? "Reprogrammer" : "Planifier"}
          </button>
        </>
      }
    >
      <p style={{ marginTop: 0 }}>
        {auto
          ? "Le robot publie le carrousel tout seul à cette heure-là (à 15 minutes près), avec le lien en premier commentaire sur Facebook."
          : "La publication apparaîtra dans le calendrier et sur le tableau de bord le jour J. Tu la publieras toi-même : le studio te redonne le texte et l'image."}
      </p>
      <QuickDates value={when} onPick={setWhen} />
      <Field label="Date et heure" hint={past ? "Date passée : la publication partira au prochain passage du robot." : undefined}>
        <input type="datetime-local" className="ax-input" value={when} onChange={(e) => setWhen(e.target.value)} />
      </Field>
      {!auto && !initial && (
        <Field label="Note (facultatif)">
          <input className="ax-input" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Ex. relancer 2 jours avant la clôture" />
        </Field>
      )}
    </Dialog>
  );
}

const RHYTHMS = [
  { value: "24", label: "1 / jour" },
  { value: "12", label: "2 / jour" },
  { value: "48", label: "1 / 2 jours" },
  { value: "168", label: "1 / semaine" },
];

// Programme une sélection en série : un concours toutes les N heures.
function SeriesDialog({ items, again, onClose, onSave }) {
  const [start, setStart] = useState(() => toLocalInput(at(1, 18)));
  const [every, setEvery] = useState("24");
  const dates = useMemo(() => {
    const t0 = Date.parse(start);
    if (Number.isNaN(t0)) return [];
    return items.map((_, k) => new Date(t0 + k * Number(every) * 3600000).toISOString());
  }, [start, every, items]);
  return (
    <Dialog
      title={`Programmer ${items.length} concours en série`}
      onClose={onClose}
      footer={
        <>
          <button type="button" className="ax-btn" onClick={onClose}>
            Annuler
          </button>
          <button type="button" className="ax-btn primary" onClick={() => onSave(dates)} disabled={!dates.length}>
            <Icon name="calendar" size="sm" /> Programmer les {items.length}
          </button>
        </>
      }
    >
      <p style={{ marginTop: 0 }}>Un carrousel à la fois sur Instagram et Facebook, publié par le robot, avec le style choisi dans le studio.</p>
      <Field label="Premier envoi">
        <QuickDates value={start} onPick={setStart} />
        <input type="datetime-local" className="ax-input" value={start} onChange={(e) => setStart(e.target.value)} />
      </Field>
      <Field label="Rythme">
        <Seg value={every} onChange={setEvery} options={RHYTHMS} />
      </Field>
      <ol className="ax-series">
        {items.map((c, k) => (
          <li key={c.id}>
            <span>{c.title}</span>
            <span className="ax-hint">{dates[k] ? dateTimeFr(dates[k]) : "—"}</span>
          </li>
        ))}
      </ol>
      {again.length > 0 && <p style={{ color: "var(--danger, #c0392b)", marginBottom: 0 }}>⚠️ Déjà publié ou en cours, sera publié une deuxième fois : {again.join(", ")}</p>}
    </Dialog>
  );
}

function NameDialog({ onClose, onSave, initial = "" }) {
  const [name, setName] = useState(initial);
  return (
    <Dialog
      title="Enregistrer ce style"
      onClose={onClose}
      footer={
        <>
          <button type="button" className="ax-btn" onClick={onClose}>
            Annuler
          </button>
          <button type="button" className="ax-btn primary" onClick={() => onSave(name.trim())} disabled={!name.trim()}>
            <Icon name="save" size="sm" /> Enregistrer
          </button>
        </>
      }
    >
      <p style={{ marginTop: 0 }}>Thème, couleurs, mise en page, ton et fin de texte. Retrouvé sur tous tes appareils. Un nom déjà pris remplace l&apos;ancien style.</p>
      <Field label="Nom">
        <input
          className="ax-input"
          value={name}
          maxLength={60}
          autoFocus
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && name.trim() && onSave(name.trim())}
          placeholder="Ex. Ramadan, Rentrée, Urgent clôture"
        />
      </Field>
    </Dialog>
  );
}

/* ------------------------------ Suivi ------------------------------ */

// Suivi des concours sur Instagram et Facebook, d'après l'historique (KV) :
// date de publication par réseau, publication en cours, dernier échec.
function trackConcours(entries) {
  const m = new Map();
  for (const e of entries || []) {
    if (e.kind !== "concours" || (e.platform !== "instagram" && e.platform !== "facebook")) continue;
    const t = m.get(e.itemId) || { published: {}, pending: false, failed: "" };
    if (e.status === "published") {
      if (!t.published[e.platform] || e.date > t.published[e.platform]) t.published[e.platform] = e.date;
    } else if (e.status === "planned" && e.auto) t.pending = true;
    else if (e.status === "failed") t.failed = e.result || "Échec";
    m.set(e.itemId, t);
  }
  return m;
}

const isDone = (t) => Boolean(t && (t.published.instagram || t.published.facebook));

function TrackPill({ t }) {
  if (!t) return null;
  if (t.pending) return <span className="ax-pill" title="Publication en cours ou programmée">⏳</span>;
  if (isDone(t)) {
    const nets = [t.published.instagram && "IG", t.published.facebook && "FB"].filter(Boolean).join(" ");
    const when = [t.published.instagram && `Instagram : ${dateTimeFr(t.published.instagram)}`, t.published.facebook && `Facebook : ${dateTimeFr(t.published.facebook)}`].filter(Boolean).join("\n");
    return <span className="ax-pill green" title={`Déjà publié\n${when}`}>✓ {nets}</span>;
  }
  if (t.failed) return <span className="ax-pill red" title={`Échec : ${t.failed}`}>⚠</span>;
  return null;
}

const MAX_SELECTION = 20;
const SHOW = [
  { value: "todo", label: "À publier" },
  { value: "done", label: "Publiés" },
  { value: "all", label: "Tous" },
];

/* ------------------------------ Aperçu réseau ------------------------------ */

// Le post tel qu'il apparaît dans le fil : sert surtout à voir où le réseau
// coupe le texte (« … plus »).
function FeedMock({ platform, src, caption, n = 0, total = 1, onPrev, onNext }) {
  const [more, setMore] = useState(false);
  const cut = platform === "instagram" ? 125 : 260;
  const long = caption.length > cut;
  const text = long && !more ? caption.slice(0, cut).replace(/\s+\S*$/, "") : caption;
  const body = (
    <p className="ax-mock-text">
      {platform === "instagram" && <strong>saadconcours </strong>}
      {text}
      {long && !more && (
        <button type="button" className="ax-mock-more" onClick={() => setMore(true)}>
          … plus
        </button>
      )}
    </p>
  );
  return (
    <div className={`ax-mock ${platform}`}>
      <div className="ax-mock-head">
        <span className="ax-mock-avatar">S</span>
        <span>
          <strong>{platform === "instagram" ? "saadconcours" : "SaadConcours"}</strong>
          <small>{platform === "instagram" ? "Maroc" : "À l'instant · 🌍"}</small>
        </span>
        <Icon name="more" size="sm" />
      </div>
      {platform === "facebook" && body}
      <div className="ax-mock-media">
        {src ? <img src={src} alt="" /> : <div className="ax-skel" style={{ aspectRatio: "4 / 5" }} />}
        {total > 1 && n > 0 && (
          <button type="button" className="ax-mock-nav prev" onClick={onPrev} aria-label="Image précédente">
            <Icon name="chevronLeft" size="sm" />
          </button>
        )}
        {total > 1 && n < total - 1 && (
          <button type="button" className="ax-mock-nav next" onClick={onNext} aria-label="Image suivante">
            <Icon name="chevronRight" size="sm" />
          </button>
        )}
        {total > 1 && platform === "instagram" && (
          <span className="ax-mock-count">
            {n + 1}/{total}
          </span>
        )}
      </div>
      {platform === "instagram" ? (
        <>
          <div className="ax-mock-actions">
            <span>♡</span>
            <span>💬</span>
            <span>➤</span>
            {total > 1 && (
              <span className="ax-mock-dots">
                {Array.from({ length: total }, (_, k) => (
                  <i key={k} className={k === n ? "on" : ""} />
                ))}
              </span>
            )}
          </div>
          {body}
        </>
      ) : (
        <div className="ax-mock-actions fb">
          <span>👍 J&apos;aime</span>
          <span>💬 Commenter</span>
          <span>↗ Partager</span>
        </div>
      )}
    </div>
  );
}

/* ------------------------------ Style ------------------------------ */

function ThemePicker({ value, onChange, style }) {
  const all = [...THEMES, { ...customTheme(style.custom), ...CUSTOM_THEME }];
  return (
    <div className="ax-swatches" role="radiogroup" aria-label="Thème">
      {all.map((t) => (
        <button
          key={t.key}
          type="button"
          role="radio"
          aria-checked={value === t.key}
          className={`ax-swatch${value === t.key ? " on" : ""}`}
          onClick={() => onChange(t.key)}
          title={t.label}
        >
          <span className="dot" style={{ background: `linear-gradient(135deg, ${t.bg[0]}, ${t.bg[1]})` }}>
            <i style={{ background: t.accent }} />
          </span>
          <span className="lbl">{t.label}</span>
        </button>
      ))}
    </div>
  );
}

function ColorField({ label, value, onChange }) {
  return (
    <label className="ax-colorfield">
      <input type="color" className="ax-color-input" value={value} onChange={(e) => onChange(e.target.value)} aria-label={label} />
      <span>{label}</span>
    </label>
  );
}

function Group({ title, children, open = false }) {
  return (
    <details className="ax-studio-group" open={open}>
      <summary>{title}</summary>
      <div className="ax-studio-group-body">{children}</div>
    </details>
  );
}

/* ------------------------------ Textes par réseau ------------------------------ */

// Conseil affiché sous le texte de chaque réseau.
const NET_TIPS = {
  facebook: (carousel) => (carousel ? "Le lien part en premier commentaire : Facebook montre moins les posts qui contiennent un lien." : "Facebook ajoute tout seul l'aperçu du lien."),
  instagram: () => "Les liens ne sont pas cliquables : on renvoie vers la bio. 30 hashtags au maximum.",
  whatsapp: () => "*gras* et _italique_ s'affichent à la façon WhatsApp.",
  telegram: () => "Partagé avec l'aperçu de la page.",
  linkedin: () => "Ton sobre : 3 à 5 hashtags suffisent.",
  x: () => "Un lien compte toujours pour 23 caractères.",
};

// Un seul grand éditeur, un onglet par réseau : plus lisible que six petites
// cartes avec barres de défilement.
function CaptionEditor({ net, onNet, captions, edited, published, isCarousel, onChange, onReset, onCopy, onOpen, onShare, onPlan, onDone }) {
  const p = PLATFORMS.find((x) => x.key === net) || PLATFORMS[0];
  const text = captions[p.key] || "";
  const n = countFor(p.key, text);
  const ratio = Math.min(1, n / p.limit);
  const over = n > p.limit;
  const rows = Math.max(9, Math.min(22, text.split("\n").length + 2));
  return (
    <div className="ax-card ax-cap">
      <div className="ax-cap-tabs" role="tablist" aria-label="Réseau">
        {PLATFORMS.map((x) => {
          const c = countFor(x.key, captions[x.key] || "");
          return (
            <button key={x.key} type="button" role="tab" aria-selected={x.key === p.key} className={`ax-cap-tab${x.key === p.key ? " on" : ""}`} onClick={() => onNet(x.key)}>
              <PlatformLogo p={x} />
              <span className="lbl">{x.label}</span>
              {published[x.key] ? (
                <span className="ax-cap-dot ok" title={`Publié ${timeAgo(published[x.key])}`}>
                  ✓
                </span>
              ) : c > x.limit ? (
                <span className="ax-cap-dot bad" title="Texte trop long">
                  !
                </span>
              ) : edited[x.key] != null ? (
                <span className="ax-cap-dot" title="Modifié à la main" />
              ) : null}
            </button>
          );
        })}
      </div>

      <div className="ax-cap-body">
        <div className="ax-cap-meta">
          <strong>{p.label}</strong>
          {edited[p.key] != null ? (
            <>
              <span className="ax-pill">modifié</span>
              <button type="button" className="ax-btn ghost xs" onClick={() => onReset(p.key)}>
                <Icon name="restore" size="sm" /> Texte automatique
              </button>
            </>
          ) : (
            <span className="ax-hint">texte automatique · modifiable</span>
          )}
          {published[p.key] && (
            <span className="ax-pill green ax-right" title={dateTimeFr(published[p.key])}>
              publié {timeAgo(published[p.key])}
            </span>
          )}
        </div>
        <textarea className="ax-cap-text" rows={rows} value={text} spellCheck onChange={(e) => onChange(p.key, e.target.value)} aria-label={`Texte ${p.label}`} />
        <div className="ax-cap-meter">
          <div className="ax-cap-bar">
            <span style={{ width: `${ratio * 100}%`, background: over ? "var(--red)" : ratio > 0.85 ? "#f59e0b" : p.color }} />
          </div>
          <span className={over ? "over" : ""}>
            {n.toLocaleString("fr-FR")} / {p.limit.toLocaleString("fr-FR")}
          </span>
        </div>
        <p className="ax-cap-tip">
          <Icon name="info" size="sm" /> {NET_TIPS[p.key]?.(isCarousel)}
        </p>
      </div>

      <div className="ax-cap-actions">
        <button type="button" className="ax-btn sm" onClick={() => onCopy(p)}>
          <Icon name="copy" size="sm" /> Copier
        </button>
        <button type="button" className="ax-btn sm" onClick={() => onOpen(p)} title="Copie le texte et ouvre le réseau">
          <Icon name="external" size="sm" /> Ouvrir {p.label}
        </button>
        <button type="button" className="ax-btn sm" onClick={() => onShare(p)} title="Partage natif (téléphone) : image(s) + texte">
          <Icon name="share" size="sm" /> Partager
        </button>
        <button type="button" className="ax-btn sm" onClick={() => onPlan(p)}>
          <Icon name="calendar" size="sm" /> Planifier
        </button>
        <button type="button" className="ax-btn primary sm ax-right" onClick={() => onDone(p)}>
          <Icon name="check" size="sm" /> Marquer publié
        </button>
      </div>
    </div>
  );
}

/* ------------------------------ Composer ------------------------------ */

function Composer({ log }) {
  const sp = useSearchParams();
  const toast = useToast();
  const confirm = useConfirm();
  const [autoPlan, setAutoPlan] = useState(false);
  const [series, setSeries] = useState(false);
  const [selected, setSelected] = useState([]);
  const [show, setShow] = useState("todo");
  const corrigeFiles = useCorrigeFiles();
  const [kind, setKind] = useState(() => (CONTENT_KINDS.some((k) => k.key === sp.get("type")) ? sp.get("type") : "concours"));
  const [itemId, setItemId] = useState(sp.get("id") || "");
  const [q, setQ] = useState("");
  const [format, setFormat] = useState(FORMATS[0].key);
  const [themeKey, setThemeKey] = useState("brand");
  const [style, setStyle] = useState(DEFAULT_STYLE);
  const [tone, setTone] = useState("info");
  const [outro, setOutro] = useState("");
  const [tags, setTags] = useState(null);
  const [mode, setMode] = useState("carrousel");
  const [preview, setPreview] = useState("image");
  const [net, setNet] = useState("facebook");
  const [carousel, setCarousel] = useState(null);
  const [slide, setSlide] = useState(0);
  const [override, setOverride] = useState({});
  const [texts, setTexts] = useState({});
  const [planFor, setPlanFor] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [visualSrc, setVisualSrc] = useState("");
  const [savedStyles, setSavedStyles] = useSavedStyles();
  const [naming, setNaming] = useState(false);
  const [styleId, setStyleId] = useState("");
  const prefsLoaded = useRef(false);
  const canvasRef = useRef(null);
  const col = COLLECTIONS[kind];
  const { data: list } = useJson(col.path);

  // Derniers réglages utilisés sur cet appareil.
  useEffect(() => {
    try {
      const p = JSON.parse(localStorage.getItem(PREFS_KEY) || "null");
      if (p) {
        if (p.themeKey) setThemeKey(p.themeKey);
        if (p.style) setStyle(normalizeStyle(p.style));
        if (p.tone) setTone(p.tone);
        if (typeof p.outro === "string") setOutro(p.outro);
        if (p.mode) setMode(p.mode);
        if (p.format) setFormat(p.format);
      }
    } catch {
      // stockage indisponible : réglages par défaut
    }
    prefsLoaded.current = true;
  }, []);
  useEffect(() => {
    if (!prefsLoaded.current) return;
    try {
      localStorage.setItem(PREFS_KEY, JSON.stringify({ themeKey, style: styleDiff(style), tone, outro, mode, format }));
    } catch {
      // stockage indisponible : rien à retenir
    }
  }, [themeKey, style, tone, outro, mode, format]);

  const track = useMemo(() => trackConcours(log.entries), [log.entries]);
  const candidates = useMemo(() => {
    if (!Array.isArray(list)) return [];
    const pub = list.filter((x) => col.isPublished(x));
    const sorted =
      kind === "news"
        ? [...pub].sort((a, b) => String(a.date_limite || "9999").localeCompare(String(b.date_limite || "9999"))).filter((n) => daysUntil(n.date_limite) === null || daysUntil(n.date_limite) >= 0)
        : [...pub].reverse();
    const shown =
      kind === "concours" && mode === "carrousel" && show !== "all"
        ? sorted.filter((x) => {
            const t = track.get(x.id);
            return show === "done" ? isDone(t) : !isDone(t) && !t?.pending;
          })
        : sorted;
    return shown.filter((x) => matchQuery(col.searchText(x), q)).slice(0, 80);
  }, [list, kind, q, col, mode, show, track]);
  const doneCount = useMemo(() => (kind === "concours" && Array.isArray(list) ? list.filter((c) => col.isPublished(c) && isDone(track.get(c.id))).length : 0), [kind, list, col, track]);
  const totalCount = useMemo(() => (Array.isArray(list) ? list.filter((c) => col.isPublished(c)).length : 0), [list, col]);

  const item = useMemo(() => (Array.isArray(list) ? list.find((x) => x.id === itemId) : null) || candidates[0] || null, [list, itemId, candidates]);
  const published = useMemo(() => {
    const m = {};
    for (const e of log.entries || []) if (e.kind === kind && e.itemId === item?.id && e.status === "published") m[e.platform] = e.date;
    return m;
  }, [log.entries, kind, item]);

  const facts = useMemo(() => (item ? { ...factsFor(kind, item, { corrigeFiles }), ...override } : null), [item, kind, corrigeFiles, override]);
  const theme = useMemo(() => resolveTheme(themeKey, style), [themeKey, style]);
  const fmt = FORMATS.find((f) => f.key === format) || FORMATS[0];
  const isCarousel = kind === "concours" && mode === "carrousel";
  const setSt = (patch) => (setStyle((s) => normalizeStyle({ ...s, ...patch })), setStyleId(""));
  const autoTags = useMemo(() => (item ? hashtagsFor(kind, item) : []), [item, kind]);

  useEffect(() => {
    setOverride({});
    setTexts({});
    setTags(null);
    if (item && kind === "news" && factsFor(kind, item).urgent) setThemeKey("urgent");
  }, [item?.id, kind]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setTexts({});
  }, [tone, mode, outro, tags]);

  useEffect(() => {
    if (!isCarousel || !facts || !item) {
      setCarousel(null);
      return;
    }
    const built = buildCarousel(item, { theme, style, facts, ctaOverride: override.cta, bulletsOverride: override.bullets, hasCorrige: hasCorrigeOf(item, corrigeFiles) });
    setCarousel({ ...built, thumbs: built.canvases.map((c) => c.toDataURL("image/png")) });
    setSlide((s) => Math.min(s, built.canvases.length - 1));
  }, [isCarousel, item, facts, theme, style, override.cta, override.bullets, corrigeFiles]);

  useEffect(() => {
    setSlide(0);
  }, [item?.id]);

  useEffect(() => {
    if (isCarousel || !facts || !canvasRef.current) return;
    let alive = true;
    (async () => {
      const cover = kind === "boutique" && item.couverture ? await loadImage(assetUrl(item.couverture)) : null;
      if (!alive || !canvasRef.current) return;
      drawVisual(canvasRef.current, { format: fmt, theme, facts, cover, style, photo });
      setVisualSrc(canvasRef.current.toDataURL("image/png"));
    })();
    return () => {
      alive = false;
    };
  }, [facts, fmt, theme, style, photo, kind, item, isCarousel]);

  // ← / → pour feuilleter le carrousel (hors champs de saisie).
  const slides = carousel?.canvases.length || 0;
  useEffect(() => {
    if (!isCarousel || !slides) return;
    function onKey(e) {
      if (e.target.closest?.("input, textarea, select, [contenteditable]") || e.altKey || e.ctrlKey || e.metaKey) return;
      if (e.key === "ArrowRight") setSlide((s) => Math.min(slides - 1, s + 1));
      if (e.key === "ArrowLeft") setSlide((s) => Math.max(0, s - 1));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isCarousel, slides]);

  const truncated = Boolean(carousel?.truncated);
  const captions = useMemo(() => {
    if (!item) return {};
    const opts = { tone, outro, tags: tags ?? undefined, ctx: { corrigeFiles } };
    const auto = (p) => (isCarousel && (p === "instagram" || p === "facebook") ? carouselCaption(p, item, { ...opts, truncated }) : captionFor(p, kind, item, opts));
    return Object.fromEntries(PLATFORMS.map((p) => [p.key, texts[p.key] ?? auto(p.key)]));
  }, [item, kind, tone, outro, tags, texts, corrigeFiles, isCarousel, truncated]);

  // Réglages qui partent avec une publication automatique : le robot dessine
  // et écrit exactement ce que montre l'aperçu.
  function designFor({ withItem }) {
    const d = { style: styleDiff(style), tone, outro: outro || undefined };
    if (withItem) {
      if (Object.keys(override).length) d.facts = override;
      if (tags) d.tags = tags;
    }
    return d;
  }

  async function downloadCarousel() {
    const dir = `saadconcours-${String(item.id).slice(0, 60)}`;
    const files = await carouselFiles(dir, item, carousel, { tone, outro, tags: tags ?? undefined, corrigeFiles });
    // Textes retouchés dans le studio : ce sont eux qu'on veut coller.
    for (const f of files) {
      if (f.name.endsWith("/instagram.txt")) f.data = captions.instagram;
      if (f.name.endsWith("/facebook.txt")) f.data = captions.facebook;
    }
    downloadBlob(makeZip(files), `${dir}.zip`);
  }
  async function downloadSlide() {
    const blob = await canvasBlob(carousel.canvases[slide]);
    downloadBlob(blob, `saadconcours-${String(item.id).slice(0, 50)}-${String(slide + 1).padStart(2, "0")}.png`);
  }
  // Publication automatique (GitHub Actions → Meta) : seuls les textes
  // retouchés à la main partent d'ici ; sinon le robot écrit le texte d'après
  // son propre rendu (sujet complet ou coupé), avec le ton et les hashtags
  // choisis ici.
  async function queueAuto(date) {
    const edited = Object.fromEntries(["instagram", "facebook"].filter((p) => texts[p] != null).map((p) => [p, texts[p]]));
    try {
      const res = await api("/api/admin/social/publish", {
        method: "POST",
        body: { theme: themeKey, design: designFor({ withItem: false }), items: [{ id: item.id, title: col.title(item), date, captions: edited, design: designFor({ withItem: true }) }] },
      });
      log.setEntries((e) => [...res.entries, ...(e || [])]);
      if (date) toast.success("Publication programmée", `${dateTimeFr(date)} sur Instagram et Facebook, automatiquement.`);
      else toast.success("Publication lancée", res.woken ? "En ligne dans 2 à 3 minutes. Résultat dans « Planning & historique »." : "Elle part au prochain passage du robot (15 minutes au plus).");
    } catch (err) {
      toast.error("Publication impossible", err.message);
    }
  }
  function toggleSelect(id) {
    if (!selected.includes(id) && selected.length >= MAX_SELECTION) return toast.info(`${MAX_SELECTION} concours au maximum par envoi`);
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  }
  // Coche d'un coup les premiers concours de la liste affichée.
  function selectVisible() {
    const ids = candidates.filter((x) => String(x.enonce_md || "").trim()).map((x) => x.id);
    setSelected((s) => [...new Set([...s, ...ids])].slice(0, MAX_SELECTION));
  }
  const selectedItems = useMemo(() => (Array.isArray(list) ? selected.map((id) => list.find((c) => c.id === id)).filter(Boolean) : []), [selected, list]);
  const selectedAgain = selectedItems.filter((c) => isDone(track.get(c.id)) || track.get(c.id)?.pending);

  async function sendSelection(dates) {
    try {
      const res = await api("/api/admin/social/publish", {
        method: "POST",
        body: { theme: themeKey, design: designFor({ withItem: false }), items: selectedItems.map((c, k) => ({ id: c.id, title: col.title(c), date: dates?.[k] })) },
      });
      log.setEntries((e) => [...res.entries, ...(e || [])]);
      const n = selectedItems.length;
      setSelected([]);
      if (dates) toast.success(`${n} concours programmés`, `Du ${dateTimeFr(dates[0])} au ${dateTimeFr(dates[dates.length - 1])}.`);
      else toast.success(`${n} concours en cours de publication`, res.woken ? "En ligne d'ici quelques minutes. Suivi : ⏳ puis ✓ dans la liste." : "Le robot les publie à son prochain passage (15 minutes au plus).");
    } catch (err) {
      toast.error("Publication impossible", err.message);
    }
  }
  async function publishSelection() {
    if (!selectedItems.length) return;
    const ok = await confirm({
      title: `Publier ${selectedItems.length} concours ?`,
      body: (
        <>
          <p style={{ marginTop: 0 }}>Chacun en carrousel sur Instagram et sur Facebook, avec le lien en premier commentaire sur Facebook :</p>
          <ul style={{ margin: "0 0 8px", paddingLeft: 18 }}>
            {selectedItems.map((c) => (
              <li key={c.id}>
                {col.title(c)} · {c.etablissement} {c.annee}
              </li>
            ))}
          </ul>
          {selectedAgain.length > 0 && (
            <p style={{ color: "var(--danger, #c0392b)", marginBottom: 0 }}>
              ⚠️ Déjà publié ou en cours, sera publié une deuxième fois : {selectedAgain.map((c) => col.title(c)).join(", ")}
            </p>
          )}
        </>
      ),
      confirmLabel: `Publier les ${selectedItems.length}`,
    });
    if (ok) sendSelection();
  }
  async function zipSelection() {
    const files = [{ name: "LISEZ-MOI.txt", data: BATCH_README }];
    for (let k = 0; k < selectedItems.length; k++) {
      const c = selectedItems[k];
      const built = buildCarousel(c, { theme, style, facts: factsFor("concours", c, { corrigeFiles }), hasCorrige: hasCorrigeOf(c, corrigeFiles) });
      files.push(...(await carouselFiles(`${String(k + 1).padStart(2, "0")}_${c.id}`, c, built, { tone, outro, corrigeFiles })));
    }
    downloadBlob(makeZip(files), `saadconcours-carrousels-${localDay(new Date())}.zip`);
  }
  async function publishNow() {
    if (!(await confirm({ title: "Publier maintenant ?", body: `Le carrousel « ${col.title(item)} » sera publié sur Instagram et Facebook, avec le lien en premier commentaire sur Facebook.`, confirmLabel: "Publier" }))) return;
    queueAuto();
  }
  async function copyComment() {
    try {
      await navigator.clipboard.writeText(`Le corrigé détaillé ici 👉 ${trackedUrl("concours", item, "facebook")}`);
      toast.success("Commentaire copié", "Colle-le en premier commentaire sous le post Facebook.");
    } catch {
      toast.error("Copie impossible");
    }
  }

  const filename = item ? `saadconcours-${kind}-${String(item.id).slice(0, 40)}-${format}.png` : "visuel.png";

  async function download() {
    downloadBlob(await canvasBlob(canvasRef.current), filename);
  }
  // Les quatre formats d'un coup, avec les textes de chaque réseau.
  async function downloadAllFormats() {
    const cover = kind === "boutique" && item.couverture ? await loadImage(assetUrl(item.couverture)) : null;
    const dir = `saadconcours-${kind}-${String(item.id).slice(0, 40)}`;
    const files = [];
    for (const f of FORMATS) {
      const c = document.createElement("canvas");
      drawVisual(c, { format: f, theme, facts, cover, style, photo });
      files.push({ name: `${dir}/${f.key}-${f.w}x${f.h}.png`, data: await blobBytes(await canvasBlob(c)) });
    }
    for (const p of PLATFORMS) files.push({ name: `${dir}/${p.key}.txt`, data: captions[p.key] || "" });
    downloadBlob(makeZip(files), `${dir}.zip`);
  }
  async function copyImage() {
    try {
      const blob = await canvasBlob(isCarousel ? carousel.canvases[slide] : canvasRef.current);
      await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
      toast.success("Image copiée", "Colle-la directement dans le composeur du réseau.");
    } catch {
      toast.error("Copie impossible", "Ce navigateur ne permet pas de copier une image : télécharge-la.");
    }
  }
  async function shareNative(platformKey) {
    const canvases = isCarousel && (platformKey === "instagram" || platformKey === "facebook") ? carousel?.canvases || [] : [canvasRef.current].filter(Boolean);
    const files = [];
    for (let k = 0; k < canvases.length; k++) files.push(new File([await canvasBlob(canvases[k])], canvases.length > 1 ? `saadconcours-${String(k + 1).padStart(2, "0")}.png` : filename, { type: "image/png" }));
    const text = captions[platformKey];
    if (files.length && navigator.canShare?.({ files })) {
      try {
        await navigator.share({ files, text });
        return true;
      } catch {
        return false;
      }
    }
    toast.info("Partage natif indisponible", "Sur ordinateur : copie le texte, puis télécharge l'image.");
    return false;
  }
  async function record(platformKey, status = "published", date, note) {
    try {
      const entry = await api("/api/admin/social", {
        method: "POST",
        body: { kind, itemId: item.id, title: col.title(item), platform: platformKey, status, date: date || new Date().toISOString(), caption: captions[platformKey], url: trackedUrl(kind, item, platformKey), note },
      });
      log.setEntries((e) => [entry, ...(e || [])]);
      toast.success(status === "planned" ? "Publication planifiée" : "Marqué comme publié", PLATFORMS.find((p) => p.key === platformKey)?.label);
    } catch (err) {
      toast.error("Enregistrement impossible", err.message);
    }
  }
  async function copyText(p) {
    try {
      await navigator.clipboard.writeText(captions[p.key] || "");
      toast.success("Texte copié", p.label);
    } catch {
      toast.error("Copie impossible");
    }
  }
  async function open(p) {
    const text = captions[p.key];
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // presse-papiers refusé : le texte reste visible pour une copie manuelle
    }
    window.open(intentUrl(p.key, { text, url: trackedUrl(kind, item, p.key) }), "_blank", "noopener");
    toast.info(`Texte copié, ${p.label} ouvert`, p.key === "instagram" || p.key === "facebook" ? "Ajoute l'image téléchargée, colle le texte, publie." : "Vérifie et publie.");
  }

  /* ---- Styles enregistrés ---- */
  function applyStyle(id) {
    setStyleId(id);
    const s = savedStyles.find((x) => x.id === id);
    if (!s) return;
    const d = s.data || {};
    if (d.theme) setThemeKey(d.theme);
    setStyle(normalizeStyle(d.style));
    if (d.tone) setTone(d.tone);
    setOutro(typeof d.outro === "string" ? d.outro : "");
    toast.success("Style appliqué", s.name);
  }
  async function saveStyle(name) {
    try {
      const saved = await api("/api/admin/social/styles", { method: "POST", body: { name, data: { theme: themeKey, style: styleDiff(style), tone, outro } } });
      setSavedStyles((all) => [saved, ...all.filter((s) => s.id !== saved.id)]);
      setStyleId(saved.id);
      setNaming(false);
      toast.success("Style enregistré", saved.name);
    } catch (err) {
      toast.error("Enregistrement impossible", err.message);
    }
  }
  async function deleteStyle() {
    const s = savedStyles.find((x) => x.id === styleId);
    if (!s || !(await confirm({ title: `Supprimer le style « ${s.name} » ?`, confirmLabel: "Supprimer", tone: "danger" }))) return;
    try {
      await api(`/api/admin/social/styles?id=${encodeURIComponent(s.id)}`, { method: "DELETE" });
      setSavedStyles((all) => all.filter((x) => x.id !== s.id));
      setStyleId("");
    } catch (err) {
      toast.error("Suppression impossible", err.message);
    }
  }
  function resetStyle() {
    setThemeKey("brand");
    setStyle(DEFAULT_STYLE);
    setStyleId("");
  }
  async function pickPhoto(file) {
    if (!file) return;
    const url = URL.createObjectURL(file);
    const img = await loadImage(url);
    if (img) setPhoto(img);
    else toast.error("Image illisible", "Choisis un fichier JPEG, PNG ou WebP.");
  }

  const defaultBullets = facts ? (isCarousel ? carouselBullets(item, { truncated, hasCorrige: hasCorrigeOf(item, corrigeFiles) }) : facts.bullets || []) : [];
  const bulletsText = (override.bullets ?? defaultBullets).join("\n");
  const styleChanged = themeKey !== "brand" || Object.keys(styleDiff(style)).length > 0;
  const currentSrc = isCarousel ? carousel?.thumbs[slide] : visualSrc;

  return (
    <div className="ax-studio">
      <aside className="ax-card ax-studio-panel">
        <SectionTitle>1. Quoi publier ?</SectionTitle>
        <div className="ax-chips" style={{ marginBottom: 10 }}>
          {CONTENT_KINDS.map((k) => (
            <button key={k.key} type="button" className={`ax-toggle-chip${kind === k.key ? " on" : ""}`} onClick={() => (setKind(k.key), setItemId(""), setQ(""), setSelected([]))}>
              {k.emoji} {k.label}
            </button>
          ))}
        </div>
        <div className="ax-search" style={{ marginBottom: 8 }}>
          <Icon name="search" size="sm" />
          <input className="ax-input sm" placeholder="Rechercher…" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        {isCarousel && (
          <div className="ax-inline" style={{ justifyContent: "space-between", marginBottom: 8, gap: 8, display: "flex" }}>
            <Seg value={show} onChange={setShow} options={SHOW} />
            <span className="ax-hint" title="Concours publiés sur Instagram ou Facebook">
              {doneCount} / {totalCount} publiés
            </span>
          </div>
        )}
        <div className="ax-pick">
          {!Array.isArray(list) ? (
            <Skeleton rows={4} height={44} />
          ) : !candidates.length ? (
            <p className="ax-muted">Rien à publier dans cette catégorie.</p>
          ) : (
            candidates.map((x) => {
              const done = (log.entries || []).some((e) => e.kind === kind && e.itemId === x.id && e.status === "published");
              const button = (
                <button type="button" className={`ax-pick-item${item?.id === x.id ? " on" : ""}`} onClick={() => setItemId(x.id)}>
                  <span style={{ minWidth: 0, flex: 1 }}>
                    <span className="t">{col.title(x)}</span>
                    <span className="m">{col.subtitle(x)}</span>
                  </span>
                  {isCarousel ? <TrackPill t={track.get(x.id)} /> : done && <span className="ax-pill green" title="Déjà publié sur au moins un réseau">✓</span>}
                </button>
              );
              if (!isCarousel) return <div key={x.id}>{button}</div>;
              return (
                <div key={x.id} className="ax-pick-row">
                  <input type="checkbox" checked={selected.includes(x.id)} onChange={() => toggleSelect(x.id)} aria-label={`Sélectionner ${col.title(x)}`} disabled={!String(x.enonce_md || "").trim()} />
                  {button}
                </div>
              );
            })
          )}
        </div>
        {isCarousel && (
          <div className="ax-select-bar">
            <span>
              <strong>{selected.length}</strong> sélectionné{selected.length > 1 ? "s" : ""}
            </span>
            {selected.length > 0 ? (
              <button type="button" className="ax-btn ghost xs" onClick={() => setSelected([])}>
                Vider
              </button>
            ) : (
              <button type="button" className="ax-btn ghost xs" onClick={selectVisible} disabled={!candidates.length} title={`Cocher les ${MAX_SELECTION} premiers de la liste`}>
                Tout cocher
              </button>
            )}
            <span className="ax-right ax-inline" style={{ gap: 6 }}>
              <button type="button" className="ax-btn xs" onClick={zipSelection} disabled={!selected.length} title="Images et textes, pour publier à la main">
                <Icon name="download" size="sm" /> ZIP
              </button>
              <button type="button" className="ax-btn xs" onClick={() => setSeries(true)} disabled={!selected.length} title="Programmer la sélection en série (1 par jour…)">
                <Icon name="calendar" size="sm" /> Étaler
              </button>
              <button type="button" className="ax-btn primary sm" onClick={publishSelection} disabled={!selected.length}>
                <Icon name="share" size="sm" /> Publier {selected.length || ""}
              </button>
            </span>
          </div>
        )}

        <hr className="ax-sep" />
        <SectionTitle aside={styleChanged ? <button type="button" className="ax-btn ghost xs" onClick={resetStyle}><Icon name="restore" size="sm" /> Défaut</button> : null}>2. Style</SectionTitle>
        <div className="ax-style-bar">
          <select className="ax-input sm" value={styleId} onChange={(e) => applyStyle(e.target.value)} aria-label="Styles enregistrés">
            <option value="">{savedStyles.length ? "Styles enregistrés…" : "Aucun style enregistré"}</option>
            {savedStyles.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
          <button type="button" className="ax-btn sm" onClick={() => setNaming(true)} title="Enregistrer le style actuel">
            <Icon name="save" size="sm" />
          </button>
          {styleId && (
            <button type="button" className="ax-btn ghost icon sm" onClick={deleteStyle} aria-label="Supprimer ce style">
              <Icon name="trash" size="sm" />
            </button>
          )}
        </div>
        {kind === "concours" && (
          <Field label="Type de publication" hint={isCarousel ? `Affiche + énoncé (${style.maxPages} page${style.maxPages > 1 ? "s" : ""} max) + « cherche sur Google ». Format portrait 4:5.` : undefined}>
            <Seg value={mode} onChange={setMode} options={MODES} />
          </Field>
        )}
        {!isCarousel && (
          <Field label="Format">
            <Seg value={format} onChange={setFormat} options={FORMATS.map((f) => ({ value: f.key, label: f.label, title: f.hint }))} />
          </Field>
        )}

        <Group title="🎨 Couleurs et fond" open>
          <ThemePicker value={themeKey} onChange={(k) => (setThemeKey(k), setStyleId(""))} style={style} />
          {themeKey === CUSTOM_THEME.key && (
            <div className="ax-colorrow">
              <ColorField label="Haut" value={style.custom.bg0} onChange={(v) => setSt({ custom: { ...style.custom, bg0: v } })} />
              <ColorField label="Bas" value={style.custom.bg1} onChange={(v) => setSt({ custom: { ...style.custom, bg1: v } })} />
              <ColorField label="Accent" value={style.custom.accent} onChange={(v) => setSt({ custom: { ...style.custom, accent: v } })} />
            </div>
          )}
          <Field label="Motif">
            <Seg value={style.pattern} onChange={(v) => setSt({ pattern: v })} options={PATTERNS} />
          </Field>
          {!isCarousel && (
            <Field label="Photo de fond" hint="Voilée aux couleurs du thème. Reste sur cet appareil.">
              <div className="ax-inline">
                <label className="ax-btn sm">
                  <Icon name="image" size="sm" /> {photo ? "Changer" : "Choisir"}
                  <input type="file" accept="image/*" hidden onChange={(e) => (pickPhoto(e.target.files?.[0]), (e.target.value = ""))} />
                </label>
                {photo && (
                  <button type="button" className="ax-btn ghost sm" onClick={() => setPhoto(null)}>
                    <Icon name="x" size="sm" /> Retirer
                  </button>
                )}
              </div>
            </Field>
          )}
        </Group>

        <Group title="📐 Mise en page">
          <Field label="Alignement">
            <Seg value={style.align} onChange={(v) => setSt({ align: v })} options={ALIGNS} />
          </Field>
          <Field label="Taille du titre">
            <Seg value={style.titleSize} onChange={(v) => setSt({ titleSize: v })} options={TITLE_SIZES.map((t) => ({ value: t.value, label: t.label }))} />
          </Field>
          <div className="ax-switches">
            <Switch checked={style.brand} onChange={(v) => setSt({ brand: v })} label="Logo" />
            <Switch checked={style.url} onChange={(v) => setSt({ url: v })} label="Pied de page" />
            <Switch checked={style.bullets} onChange={(v) => setSt({ bullets: v })} label="Points forts" />
            <Switch checked={style.watermark} onChange={(v) => setSt({ watermark: v })} label="Filigrane" />
          </div>
          {isCarousel && (
            <Field label="Pages d'énoncé au maximum" aside={<strong>{style.maxPages}</strong>} hint="Moins de pages = un post plus court, la suite est sur le site.">
              <input type="range" min={1} max={8} value={style.maxPages} onChange={(e) => setSt({ maxPages: Number(e.target.value) })} className="ax-range" />
            </Field>
          )}
        </Group>

        <Group title="🏷️ Badge, filigrane, pied">
          <Field label="Badge en coin">
            <input className="ax-input sm" value={style.badge} maxLength={24} onChange={(e) => setSt({ badge: e.target.value })} placeholder="Aucun" />
            <div className="ax-chips" style={{ marginTop: 6 }}>
              {BADGES.map((b) => (
                <button key={b} type="button" className={`ax-toggle-chip${style.badge === b ? " on" : ""}`} onClick={() => setSt({ badge: style.badge === b ? "" : b })}>
                  {b}
                </button>
              ))}
            </div>
          </Field>
          {style.watermark && (
            <Field label="Emoji en filigrane">
              <input className="ax-input sm" value={style.emoji} maxLength={8} onChange={(e) => setSt({ emoji: e.target.value })} placeholder={facts?.emoji || "🎓"} />
            </Field>
          )}
          {style.url && (
            <Field label="Texte du pied de page">
              <input className="ax-input sm" value={style.footer} maxLength={40} onChange={(e) => setSt({ footer: e.target.value })} placeholder="saadconcours.space" />
            </Field>
          )}
        </Group>

        {facts && (
          <>
            <hr className="ax-sep" />
            <SectionTitle
              aside={
                Object.keys(override).length > 0 ? (
                  <button type="button" className="ax-btn ghost xs" onClick={() => setOverride({})}>
                    <Icon name="restore" size="sm" /> Auto
                  </button>
                ) : null
              }
            >
              3. Textes de l&apos;affiche
            </SectionTitle>
            <Field label="Sur-titre">
              <input className="ax-input sm" value={facts.kicker || ""} onChange={(e) => setOverride((o) => ({ ...o, kicker: e.target.value }))} />
            </Field>
            <Field label="Titre">
              <textarea className="ax-textarea" rows={2} value={facts.title || ""} onChange={(e) => setOverride((o) => ({ ...o, title: e.target.value }))} />
            </Field>
            <Field label="Sous-titre">
              <input className="ax-input sm" value={facts.subtitle || ""} onChange={(e) => setOverride((o) => ({ ...o, subtitle: e.target.value }))} />
            </Field>
            {style.bullets && (
              <Field label="Points forts" hint="Un par ligne, 4 au maximum.">
                <textarea
                  className="ax-textarea"
                  rows={3}
                  value={bulletsText}
                  onChange={(e) => setOverride((o) => ({ ...o, bullets: e.target.value.split("\n").slice(0, 4) }))}
                  onBlur={() => override.bullets && setOverride((o) => ({ ...o, bullets: o.bullets.map((b) => b.trim()).filter(Boolean) }))}
                />
              </Field>
            )}
            <Field label="Bouton">
              <input className="ax-input sm" value={isCarousel ? override.cta ?? "Glisse pour voir le sujet" : facts.cta || ""} onChange={(e) => setOverride((o) => ({ ...o, cta: e.target.value }))} />
            </Field>
          </>
        )}
      </aside>

      <section className="ax-stack">
        {!item ? (
          <Empty icon="📣" title="Choisis un contenu à publier" />
        ) : (
          <>
            <div className="ax-inline" style={{ justifyContent: "space-between", display: "flex", flexWrap: "wrap", gap: 8 }}>
              <Seg value={preview} onChange={setPreview} options={PREVIEWS} ariaLabel="Aperçu" />
              {isCarousel && carousel && (
                <span className="ax-hint">
                  Image {slide + 1} / {carousel.canvases.length} · ← → pour feuilleter
                </span>
              )}
            </div>

            {preview !== "image" ? (
              <div className="ax-social-stage">
                <FeedMock
                  key={`${preview}-${item.id}`}
                  platform={preview}
                  src={currentSrc}
                  caption={captions[preview] || ""}
                  n={isCarousel ? slide : 0}
                  total={isCarousel ? carousel?.canvases.length || 1 : 1}
                  onPrev={() => setSlide((s) => Math.max(0, s - 1))}
                  onNext={() => setSlide((s) => Math.min(slides - 1, s + 1))}
                />
              </div>
            ) : isCarousel ? (
              <div className="ax-social-stage ax-stage-nav">
                {carousel ? <img src={carousel.thumbs[slide]} alt={`Image ${slide + 1}`} className="ax-social-canvas ax-carousel-main" /> : <Skeleton rows={1} height={420} />}
                {carousel && slide > 0 && (
                  <button type="button" className="ax-stage-arrow prev" onClick={() => setSlide((s) => s - 1)} aria-label="Image précédente">
                    <Icon name="chevronLeft" />
                  </button>
                )}
                {carousel && slide < slides - 1 && (
                  <button type="button" className="ax-stage-arrow next" onClick={() => setSlide((s) => s + 1)} aria-label="Image suivante">
                    <Icon name="chevronRight" />
                  </button>
                )}
              </div>
            ) : null}
            {!isCarousel && (
              <div className="ax-social-stage" style={preview !== "image" ? { display: "none" } : undefined}>
                <canvas ref={canvasRef} className="ax-social-canvas" />
              </div>
            )}

            {isCarousel ? (
              <>
                {carousel && (
                  <>
                    <div className="ax-carousel-strip">
                      {carousel.thumbs.map((src, k) => (
                        <button key={k} type="button" className={`ax-carousel-thumb${k === slide ? " on" : ""}`} onClick={() => setSlide(k)} aria-label={`Image ${k + 1}`}>
                          <img src={src} alt="" />
                          <span>{k + 1}</span>
                        </button>
                      ))}
                    </div>
                    <p className="ax-hint" style={{ margin: 0 }}>
                      {carousel.canvases.length} images · {carousel.extraitPages} page{carousel.extraitPages > 1 ? "s" : ""} d&apos;énoncé
                      {carousel.truncated ? " · sujet long : coupé au début d'une partie, la suite est sur le site" : " · sujet complet"} · recherche Google : « {googleQuery(item)} »
                    </p>
                  </>
                )}
                <div className="ax-btn-row">
                  <button type="button" className="ax-btn primary" onClick={publishNow} disabled={!carousel}>
                    <Icon name="share" size="sm" /> Publier sur Instagram + Facebook
                  </button>
                  <button type="button" className="ax-btn" onClick={() => setAutoPlan(true)} disabled={!carousel}>
                    <Icon name="calendar" size="sm" /> Programmer
                  </button>
                  <button type="button" className="ax-btn" onClick={downloadCarousel} disabled={!carousel}>
                    <Icon name="download" size="sm" /> ZIP
                  </button>
                  <button type="button" className="ax-btn" onClick={downloadSlide} disabled={!carousel} title="Télécharger l'image affichée">
                    <Icon name="image" size="sm" /> Image {slide + 1}
                  </button>
                  <button type="button" className="ax-btn" onClick={copyImage} disabled={!carousel} title="Copier l'image affichée">
                    <Icon name="copy" size="sm" />
                  </button>
                  <button type="button" className="ax-btn" onClick={copyComment}>
                    <Icon name="link" size="sm" /> Lien 1er commentaire FB
                  </button>
                  <a className="ax-btn" href={col.publicUrl(item)} target="_blank" rel="noopener noreferrer">
                    <Icon name="external" size="sm" /> Voir la page
                  </a>
                </div>
              </>
            ) : (
              <div className="ax-btn-row">
                <button type="button" className="ax-btn primary" onClick={download}>
                  <Icon name="download" /> Télécharger l&apos;image
                </button>
                <button type="button" className="ax-btn" onClick={downloadAllFormats} title="Carré, portrait, story et paysage + les textes">
                  <Icon name="layers" size="sm" /> Tous les formats (ZIP)
                </button>
                <button type="button" className="ax-btn" onClick={copyImage}>
                  <Icon name="copy" size="sm" /> Copier l&apos;image
                </button>
                <a className="ax-btn" href={col.publicUrl(item)} target="_blank" rel="noopener noreferrer">
                  <Icon name="external" size="sm" /> Voir la page
                </a>
              </div>
            )}

            <SectionTitle aside="liens suivis par réseau (utm_source) · textes modifiables">4. Textes par réseau</SectionTitle>
            <div className="ax-card ax-caption-opts">
              <Field label="Ton">
                <Seg value={tone} onChange={setTone} options={TONES} />
              </Field>
              <Field label="Hashtags" hint={tags ? undefined : "Automatiques pour ce contenu. Entrée pour en ajouter, × pour en retirer."}>
                <TagsInput value={tags ?? autoTags} onChange={(v) => setTags(v.map((t) => (t.startsWith("#") ? t : `#${t.replace(/\s+/g, "")}`)))} placeholder="#ConcoursMaster" />
                {tags && (
                  <button type="button" className="ax-btn ghost xs" style={{ alignSelf: "flex-start" }} onClick={() => setTags(null)}>
                    <Icon name="restore" size="sm" /> Hashtags automatiques
                  </button>
                )}
              </Field>
              <Field label="Fin de texte" hint="Ajoutée à tous les posts, avant les hashtags. Retenue sur cet appareil.">
                <textarea className="ax-textarea" rows={2} value={outro} onChange={(e) => setOutro(e.target.value)} placeholder="Ex. 📲 Abonne-toi pour recevoir chaque nouveau sujet !" />
              </Field>
            </div>
            <CaptionEditor
              net={net}
              onNet={(k) => {
                setNet(k);
                // L'aperçu « fil » suit le réseau choisi.
                if (preview !== "image" && (k === "instagram" || k === "facebook")) setPreview(k);
              }}
              captions={captions}
              edited={texts}
              published={published}
              isCarousel={isCarousel}
              onChange={(k, v) => setTexts((t) => ({ ...t, [k]: v }))}
              onReset={(k) => setTexts(({ [k]: _, ...rest }) => rest)}
              onCopy={copyText}
              onOpen={open}
              onShare={async (p) => (await shareNative(p.key)) && record(p.key)}
              onPlan={setPlanFor}
              onDone={(p) => record(p.key)}
            />
          </>
        )}
      </section>
      {autoPlan && (
        <PlanDialog
          auto
          platform={{ label: "Instagram + Facebook" }}
          onClose={() => setAutoPlan(false)}
          onSave={(date) => {
            queueAuto(date);
            setAutoPlan(false);
          }}
        />
      )}
      {series && (
        <SeriesDialog
          items={selectedItems.map((c) => ({ id: c.id, title: col.title(c) }))}
          again={selectedAgain.map((c) => col.title(c))}
          onClose={() => setSeries(false)}
          onSave={(dates) => {
            sendSelection(dates);
            setSeries(false);
          }}
        />
      )}
      {planFor && (
        <PlanDialog
          platform={planFor}
          onClose={() => setPlanFor(null)}
          onSave={(date, note) => {
            record(planFor.key, "planned", date, note);
            setPlanFor(null);
          }}
        />
      )}
      {naming && <NameDialog initial={savedStyles.find((s) => s.id === styleId)?.name || ""} onClose={() => setNaming(false)} onSave={saveStyle} />}
    </div>
  );
}

/* ------------------------------ Planning ------------------------------ */

const WEEKDAYS = ["lun", "mar", "mer", "jeu", "ven", "sam", "dim"];

function Planning({ log }) {
  const toast = useToast();
  const confirm = useConfirm();
  const [month, setMonth] = useState(() => {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), 1);
  });
  const [net, setNet] = useState("all");
  const [moving, setMoving] = useState(null);
  const news = useJson("data/news.json");
  const all = log.entries;
  const entries = useMemo(() => (all || []).filter((e) => net === "all" || e.platform === net), [all, net]);

  const days = useMemo(() => {
    const start = new Date(month);
    start.setDate(1 - ((start.getDay() + 6) % 7));
    return Array.from({ length: 42 }, (_, i) => {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      return d;
    });
  }, [month]);

  const byDay = useMemo(() => {
    const m = new Map();
    for (const e of entries) {
      const d = new Date(e.date);
      const k = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
      if (!m.has(k)) m.set(k, []);
      m.get(k).push(e);
    }
    return m;
  }, [entries]);

  // Bilan : publications sur 7 et 30 jours, par réseau.
  const stats = useMemo(() => {
    const now = Date.now();
    const pub = (all || []).filter((e) => e.status === "published");
    const since = (d) => pub.filter((e) => now - Date.parse(e.date) <= d * 86400000);
    const last30 = since(30);
    return {
      week: since(7).length,
      month: last30.length,
      queue: (all || []).filter((e) => e.status === "planned").length,
      failed: (all || []).filter((e) => e.status === "failed").length,
      byNet: PLATFORMS.map((p) => ({ key: p.key, label: p.label, value: last30.filter((e) => e.platform === p.key).length, color: p.color })).filter((x) => x.value).sort((a, b) => b.value - a.value),
    };
  }, [all]);

  const planned = entries.filter((e) => e.status === "planned").sort((a, b) => String(a.date).localeCompare(String(b.date)));
  const failed = entries.filter((e) => e.status === "failed");
  const closing = (news.data || []).filter((n) => {
    const d = daysUntil(n.date_limite);
    return !n.cloture && d !== null && d >= 0 && d <= 5 && !(all || []).some((e) => e.itemId === n.id);
  });

  // Met à jour une ou plusieurs entrées, puis un seul message.
  async function save(list, patch, msg, detail) {
    try {
      const saved = new Map();
      for (const e of list) saved.set(e.id, await api("/api/admin/social", { method: "POST", body: { ...e, ...patch } }));
      log.setEntries((cur) => cur.map((x) => saved.get(x.id) || x));
      toast.success(msg, detail);
    } catch (err) {
      toast.error("Échec", err.message);
    }
  }
  const markDone = (e) => save([e], { status: "published", date: new Date().toISOString() }, "Marqué comme publié");
  // Remet une publication automatique ratée dans la file, pour maintenant.
  const retry = (e) => save([e], { status: "planned", date: new Date().toISOString(), result: "" }, "Remise en file", "Le robot réessaie à son prochain passage (15 minutes au plus).");
  // Reprogramme une publication automatique avec sa jumelle : Instagram et
  // Facebook d'un même concours partent ensemble.
  function reschedule(e, date) {
    const twins = e.auto ? (all || []).filter((x) => x.status === "planned" && x.auto && x.itemId === e.itemId && x.date === e.date) : [e];
    save(twins.length ? twins : [e], { date }, "Reprogrammé", dateTimeFr(date));
  }
  async function remove(e) {
    if (!(await confirm({ title: "Retirer cette entrée ?", confirmLabel: "Retirer", tone: "danger" }))) return;
    await api(`/api/admin/social?id=${encodeURIComponent(e.id)}`, { method: "DELETE" });
    log.setEntries((list) => list.filter((x) => x.id !== e.id));
  }
  // Annule tout ce qui est programmé et pas encore parti.
  async function clearQueue() {
    const list = planned;
    if (!list.length || !(await confirm({ title: `Annuler ${list.length} publication${list.length > 1 ? "s" : ""} programmée${list.length > 1 ? "s" : ""} ?`, body: net === "all" ? "Tous réseaux confondus." : `Seulement ${PLATFORMS.find((p) => p.key === net)?.label}.`, confirmLabel: "Tout annuler", tone: "danger" }))) return;
    for (const e of list) await api(`/api/admin/social?id=${encodeURIComponent(e.id)}`, { method: "DELETE" });
    const ids = new Set(list.map((e) => e.id));
    log.setEntries((cur) => cur.filter((x) => !ids.has(x.id)));
    toast.success("File vidée");
  }

  if (!all) return <Skeleton rows={6} />;
  const today = new Date();
  const p = (key) => PLATFORMS.find((x) => x.key === key) || PLATFORMS[0];
  return (
    <div className="ax-grid main-side">
      <section className="ax-card">
        <div className="ax-card-head" style={{ flexWrap: "wrap", gap: 8 }}>
          <button type="button" className="ax-btn icon sm" onClick={() => setMonth((m) => new Date(m.getFullYear(), m.getMonth() - 1, 1))} aria-label="Mois précédent">
            <Icon name="chevronLeft" />
          </button>
          <strong style={{ textTransform: "capitalize" }}>{month.toLocaleDateString("fr-FR", { month: "long", year: "numeric" })}</strong>
          <button type="button" className="ax-btn icon sm" onClick={() => setMonth((m) => new Date(m.getFullYear(), m.getMonth() + 1, 1))} aria-label="Mois suivant">
            <Icon name="chevronRight" />
          </button>
          <button type="button" className="ax-btn ghost xs" onClick={() => setMonth(new Date(today.getFullYear(), today.getMonth(), 1))}>
            Aujourd&apos;hui
          </button>
          <div className="ax-chips ax-right">
            <button type="button" className={`ax-toggle-chip${net === "all" ? " on" : ""}`} onClick={() => setNet("all")}>
              Tous
            </button>
            {PLATFORMS.map((x) => (
              <button key={x.key} type="button" className={`ax-toggle-chip${net === x.key ? " on" : ""}`} onClick={() => setNet(x.key)} title={x.label}>
                {x.short}
              </button>
            ))}
          </div>
        </div>
        <div className="ax-cal">
          {WEEKDAYS.map((d) => (
            <div key={d} className="ax-cal-h">
              {d}
            </div>
          ))}
          {days.map((d) => {
            const k = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
            const list = byDay.get(k) || [];
            const isToday = d.toDateString() === today.toDateString();
            return (
              <div key={k} className={`ax-cal-d${d.getMonth() !== month.getMonth() ? " out" : ""}${isToday ? " today" : ""}`}>
                <div className="ax-cal-n">{d.getDate()}</div>
                {list.slice(0, 4).map((e) => (
                  <button
                    key={e.id}
                    type="button"
                    className={`ax-cal-ev ${e.status}`}
                    style={{ background: p(e.platform).color }}
                    title={`${p(e.platform).label} · ${e.title}${e.status === "planned" ? (e.auto ? " (publication automatique : clique pour reprogrammer)" : " (planifié : clique pour marquer comme publié)") : e.status === "failed" ? ` (échec : ${e.result})` : ""}`}
                    onClick={() => (e.status === "planned" ? (e.auto ? setMoving(e) : markDone(e)) : null)}
                  >
                    {e.title}
                  </button>
                ))}
                {list.length > 4 && <span className="ax-hint">+{list.length - 4}</span>}
              </div>
            );
          })}
        </div>
        <p className="ax-hint ax-mt">Pointillés = planifié (clique pour marquer comme publié, ou reprogrammer une publication automatique). Plein = publié. Historique partagé entre tous tes appareils.</p>
      </section>
      <aside className="ax-stack">
        <section className="ax-card">
          <SectionTitle>Bilan</SectionTitle>
          <div className="ax-mini-stats">
            <div>
              <strong>{stats.week}</strong>
              <span>7 jours</span>
            </div>
            <div>
              <strong>{stats.month}</strong>
              <span>30 jours</span>
            </div>
            <div>
              <strong>{stats.queue}</strong>
              <span>en file</span>
            </div>
            <div className={stats.failed ? "bad" : ""}>
              <strong>{stats.failed}</strong>
              <span>échecs</span>
            </div>
          </div>
          {stats.byNet.length > 0 && (
            <div className="ax-mt">
              <BarList items={stats.byNet} />
            </div>
          )}
        </section>
        {closing.length > 0 && (
          <Alert tone="warn" title="À relayer d'urgence">
            {closing.map((n) => (
              <div key={n.id}>
                • {n.titre} (J-{daysUntil(n.date_limite)})
              </div>
            ))}
          </Alert>
        )}
        {failed.length > 0 && (
          <section className="ax-card">
            <SectionTitle>Échecs de publication</SectionTitle>
            <ul className="ax-list">
              {failed.map((e) => (
                <li key={e.id}>
                  <PlatformLogo p={p(e.platform)} />
                  <span className="ax-list-main">
                    <span className="ax-list-title">{e.title}</span>
                    <span className="ax-list-meta" style={{ color: "var(--danger, #c0392b)" }}>
                      {e.result || "Erreur inconnue"}
                    </span>
                  </span>
                  <button type="button" className="ax-btn xs" onClick={() => retry(e)}>
                    Réessayer
                  </button>
                  <button type="button" className="ax-btn ghost icon sm" aria-label="Retirer" onClick={() => remove(e)}>
                    <Icon name="x" size="sm" />
                  </button>
                </li>
              ))}
            </ul>
          </section>
        )}
        <section className="ax-card">
          <SectionTitle
            aside={
              planned.length > 1 ? (
                <button type="button" className="ax-btn ghost xs" onClick={clearQueue}>
                  Tout annuler
                </button>
              ) : null
            }
          >
            À venir
          </SectionTitle>
          {!planned.length ? (
            <p className="ax-muted" style={{ margin: 0 }}>
              Rien de planifié. Depuis le composer, « Programmer » ou « Étaler » une sélection.
            </p>
          ) : (
            <ul className="ax-list">
              {planned.map((e) => (
                <li key={e.id}>
                  <PlatformLogo p={p(e.platform)} />
                  <span className="ax-list-main">
                    <span className="ax-list-title">{e.title}</span>
                    <span className="ax-list-meta">
                      {dateTimeFr(e.date)}
                      {e.note ? ` · ${e.note}` : ""}
                    </span>
                  </span>
                  {e.auto ? (
                    <span className="ax-pill" title="Publié automatiquement par le robot">
                      auto
                    </span>
                  ) : (
                    <button type="button" className="ax-btn xs" onClick={() => markDone(e)}>
                      Publié
                    </button>
                  )}
                  <button type="button" className="ax-btn ghost icon sm" aria-label="Reprogrammer" title="Reprogrammer" onClick={() => setMoving(e)}>
                    <Icon name="clock" size="sm" />
                  </button>
                  <button type="button" className="ax-btn ghost icon sm" aria-label="Retirer" onClick={() => remove(e)}>
                    <Icon name="x" size="sm" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
        <section className="ax-card">
          <SectionTitle>Dernières publications</SectionTitle>
          <ul className="ax-list">
            {entries
              .filter((e) => e.status === "published")
              .slice(0, 12)
              .map((e) => (
                <li key={e.id}>
                  <PlatformLogo p={p(e.platform)} />
                  <span className="ax-list-main">
                    <span className="ax-list-title">{e.title}</span>
                    <span className="ax-list-meta">{timeAgo(e.date)}</span>
                  </span>
                  {e.url && (
                    <a className="ax-btn ghost icon sm" href={e.url} target="_blank" rel="noopener noreferrer" aria-label="Voir la page">
                      <Icon name="external" size="sm" />
                    </a>
                  )}
                  <button type="button" className="ax-btn ghost icon sm" aria-label="Retirer" onClick={() => remove(e)}>
                    <Icon name="x" size="sm" />
                  </button>
                </li>
              ))}
          </ul>
        </section>
      </aside>
      {moving && (
        <PlanDialog
          title={`Reprogrammer « ${moving.title} »`}
          platform={p(moving.platform)}
          auto={moving.auto}
          initial={moving.date}
          onClose={() => setMoving(null)}
          onSave={(date) => {
            reschedule(moving, date);
            setMoving(null);
          }}
        />
      )}
    </div>
  );
}

export default function SocialStudio() {
  const [tab, setTab] = useTab(TABS);
  const log = useSocialLog();
  const planned = (log.entries || []).filter((e) => e.status === "planned").length;
  return (
    <>
      <Hero icon="📣" eyebrow="Diffusion · Réseaux sociaux" title="Studio social">
        Choisis un contenu, règle le style (thème, couleurs, mise en page, badge) et le ton : le studio fabrique le visuel et un texte adapté à chaque réseau, avec un lien suivi. Publie en un clic, programme, ou étale une sélection sur plusieurs jours.
      </Hero>
      <Tabs tabs={TABS.map((t) => (t.key === "planning" && planned ? { ...t, count: planned } : t))} value={tab} onChange={setTab} />
      {tab === "composer" ? <Composer log={log} /> : <Planning log={log} />}
    </>
  );
}
