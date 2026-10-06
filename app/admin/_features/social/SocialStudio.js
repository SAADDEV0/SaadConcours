"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Icon from "../../_ui/Icon";
import { Alert, BarList, Empty, Field, Menu, Seg, SectionTitle, Skeleton, Switch, TagsInput, useTab } from "../../_ui/kit";
import { Dialog, useConfirm, useToast } from "../../_ui/feedback";
import { Group, Panel, Row } from "../pdf/controls";
import { useJson, useCorrigeFiles } from "../../_lib/content";
import { COLLECTIONS } from "../../_lib/collections";
import { assetUrl } from "../../_lib/repo";
import { api } from "../../_lib/api";
import { dateTimeFr, daysUntil, matchQuery, timeAgo } from "../../_lib/format";
import { CONTENT_KINDS, PLATFORMS, TONES, captionFor, carouselCaption, countFor, factsFor, googleQuery, hashtagsFor, intentUrl, trackedUrl } from "./captions";
import { CUSTOM_THEME, DEFAULT_STYLE, FORMATS, PATTERNS, THEMES, TITLE_SIZES, canvasBlob, customTheme, drawVisual, loadImage, normalizeStyle, resolveTheme, styleDiff } from "./visual";
import { buildCarousel, carouselBullets, carouselPlan, mathSpans, mathSvgEntry, scanPaths, sourceFor } from "./carousel";
import { ensureMathScripts } from "@/app/_shared/pdfScripts";
import { wrapAccentedMathWords } from "@/app/_shared/latexPlainText";
import { blobBytes, downloadBlob, makeZip } from "./zip";

const MODES = [
  { value: "carrousel", label: "Carrousel" },
  { value: "visuel", label: "Visuel seul" },
];

// Ce que montrent les pages du carrousel entre l'affiche et l'image Google.
const SOURCES = [
  { value: "scan", label: "Scans", title: "Les pages scannées du sujet original" },
  { value: "enonce", label: "Énoncé", title: "Le texte de l'énoncé, remis en page" },
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

// Sections du panneau de gauche (même rail que le Studio PDF).
const RAIL = [
  { key: "sujet", label: "Sujet", icon: "list", title: "Choisir ce qu'on publie" },
  { key: "contenu", label: "Contenu", icon: "file", title: "Type de post et textes de l'affiche" },
  { key: "style", label: "Style", icon: "palette", title: "Couleurs, mise en page, habillage" },
  { key: "legende", label: "Légende", icon: "type", title: "Texte du post pour chaque réseau" },
];

// Réglages retenus d'une visite à l'autre, sur cet appareil.
const PREFS_KEY = "sc-social-prefs";

const hasCorrigeOf = (item, corrigeFiles) => Boolean(item.corrige_md) || Boolean(corrigeFiles?.has(item.id));
const masterOf = (c) => c.master_reel || c.filiere || c.id;

// Pages scannées, gardées en mémoire : changer de style ne les recharge pas.
const scanCache = new Map();
function loadScans(paths) {
  return Promise.all(
    paths.map((p) => {
      if (!scanCache.has(p)) scanCache.set(p, loadImage(assetUrl(p)).then((img) => img || (scanCache.delete(p), null)));
      return scanCache.get(p);
    })
  );
}

// Formules de l'énoncé composées par MathJax (celui du Studio PDF), une à la
// fois (MathJax ne supporte pas les appels simultanés), gardées en mémoire.
const mathCache = new Map();
let mathQueue = Promise.resolve();
function typeset(tex, display) {
  const run = mathQueue.then(async () => {
    const node = await window.MathJax.tex2svgPromise(wrapAccentedMathWords(tex), { display });
    const svg = node.querySelector("svg");
    if (!svg || node.querySelector("[data-mjx-error], merror")) return null;
    const entry = mathSvgEntry(svg.outerHTML);
    const img = entry && (await loadImage(`data:image/svg+xml;charset=utf-8,${encodeURIComponent(entry.svg)}`));
    return img ? { ...entry, img } : null;
  });
  mathQueue = run.catch(() => null);
  return run.catch(() => null);
}
async function loadMath(item, style) {
  if (sourceFor(item, style) !== "enonce") return undefined;
  const spans = mathSpans(item.enonce_md);
  if (!spans.length) return undefined;
  try {
    await ensureMathScripts();
    await window.MathJax?.startup?.promise;
  } catch {
    return undefined; // MathJax injoignable : formules en texte brut
  }
  if (!window.MathJax?.tex2svgPromise) return undefined;
  const map = new Map();
  for (const { key, tex, display } of spans) {
    if (!mathCache.has(key)) mathCache.set(key, typeset(tex, display));
    const entry = await mathCache.get(key);
    if (entry) map.set(key, entry);
  }
  return map;
}

// Carrousel d'un concours avec les textes automatiques de l'affiche (envoi groupé).
async function buildFor(c, { theme, style, corrigeFiles }) {
  const scans = sourceFor(c, style) === "scan" ? await loadScans(scanPaths(c, style)) : undefined;
  const math = await loadMath(c, style);
  return buildCarousel(c, { theme, style, facts: factsFor("concours", c, { corrigeFiles }), hasCorrige: hasCorrigeOf(c, corrigeFiles), scans, math });
}

// Fichiers d'un carrousel dans le ZIP : images numérotées + textes à coller.
async function carouselFiles(dir, item, { canvases, truncated, source }, { tone, outro, tags, corrigeFiles, captions }) {
  const opts = { tone, outro, tags, truncated, scan: source === "scan", ctx: { corrigeFiles } };
  const files = [];
  for (let k = 0; k < canvases.length; k++) files.push({ name: `${dir}/${String(k + 1).padStart(2, "0")}.png`, data: await blobBytes(await canvasBlob(canvases[k])) });
  files.push({ name: `${dir}/instagram.txt`, data: captions?.instagram ?? carouselCaption("instagram", item, opts) });
  files.push({ name: `${dir}/facebook.txt`, data: captions?.facebook ?? carouselCaption("facebook", item, opts) });
  files.push({ name: `${dir}/facebook-premier-commentaire.txt`, data: `Le corrigé détaillé ici 👉 ${trackedUrl("concours", item, "facebook")}` });
  return files;
}

const BATCH_README = `Carrousels SaadConcours
=======================

Un dossier par concours :
- 01.png, 02.png… : les images, dans l'ordre (affiche, pages du sujet, recherche Google) ;
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

const WHENS = [
  { value: "now", label: "Maintenant" },
  { value: "series", label: "En série" },
];

/* ------------------------------ Envoi groupé ------------------------------ */

// Relecture d'une sélection avant envoi au robot : le texte Instagram et
// Facebook de chaque concours (automatique, ou retouché ici), le ton et la
// fin de texte communs, et le moment (tout de suite, ou un toutes les N heures).
function BulkDialog({ items, track, style, initialTone, initialOutro, corrigeFiles, onClose, onSend }) {
  const [when, setWhen] = useState("now");
  const [start, setStart] = useState(() => toLocalInput(at(1, 18)));
  const [every, setEvery] = useState("24");
  const [tone, setTone] = useState(initialTone);
  const [outro, setOutro] = useState(initialOutro);
  const [edits, setEdits] = useState({});
  const [active, setActive] = useState(items[0]?.id);
  const [net, setNet] = useState("instagram");
  const plans = useMemo(() => new Map(items.map((c) => [c.id, carouselPlan(c, style)])), [items, style]);
  const dates = useMemo(() => {
    if (when !== "series") return null;
    const t0 = Date.parse(start);
    if (Number.isNaN(t0)) return [];
    return items.map((_, k) => new Date(t0 + k * Number(every) * 3600000).toISOString());
  }, [when, start, every, items]);

  const auto = (c, p) => {
    const pl = plans.get(c.id) || {};
    return carouselCaption(p, c, { tone, outro, truncated: pl.truncated, scan: pl.source === "scan", ctx: { corrigeFiles } });
  };
  const cur = items.find((c) => c.id === active) || items[0];
  const edited = (c, p) => edits[c.id]?.[p] != null;
  const text = cur ? (edited(cur, net) ? edits[cur.id][net] : auto(cur, net)) : "";
  const pf = PLATFORMS.find((p) => p.key === net);
  const n = countFor(net, text);
  const again = items.filter((c) => isDone(track.get(c.id)) || track.get(c.id)?.pending);
  const editedCount = items.filter((c) => edits[c.id] && Object.keys(edits[c.id]).length).length;

  function setText(v) {
    setEdits((e) => ({ ...e, [cur.id]: { ...e[cur.id], [net]: v } }));
  }
  function resetText() {
    setEdits((e) => {
      const { [net]: _, ...rest } = e[cur.id] || {};
      const next = { ...e };
      if (Object.keys(rest).length) next[cur.id] = rest;
      else delete next[cur.id];
      return next;
    });
  }

  return (
    <Dialog
      size="xwide"
      title={`Publier ${items.length} concours`}
      onClose={onClose}
      footer={
        <>
          <span className="ax-hint ax-bulk-foot-note">
            {editedCount ? `${editedCount} texte${editedCount > 1 ? "s" : ""} retouché${editedCount > 1 ? "s" : ""} · ` : ""}les autres sont écrits par le robot avec ce ton et cette fin de texte.
          </span>
          <button type="button" className="ax-btn" onClick={onClose}>
            Annuler
          </button>
          <button type="button" className="ax-btn primary" disabled={when === "series" && !dates?.length} onClick={() => onSend({ dates, tone, outro, captions: edits })}>
            <Icon name={when === "now" ? "send" : "calendar"} size="sm" /> {when === "now" ? `Publier les ${items.length}` : `Programmer les ${items.length}`}
          </button>
        </>
      }
    >
      <div className="ax-bulk-opts">
        <Field label="Quand">
          <Seg value={when} onChange={setWhen} options={WHENS} ariaLabel="Quand" />
        </Field>
        {when === "series" && (
          <>
            <Field label="Premier envoi">
              <input type="datetime-local" className="ax-input sm" value={start} onChange={(e) => setStart(e.target.value)} />
            </Field>
            <Field label="Rythme">
              <Seg value={every} onChange={setEvery} options={RHYTHMS} ariaLabel="Rythme" />
            </Field>
          </>
        )}
        <Field label="Ton des textes">
          <Seg value={tone} onChange={setTone} options={TONES} ariaLabel="Ton" />
        </Field>
      </div>
      {when === "series" && <QuickDates value={start} onPick={setStart} />}

      <div className="ax-bulk">
        <ol className="ax-bulk-list">
          {items.map((c, k) => {
            const pl = plans.get(c.id) || {};
            const warn = again.includes(c);
            return (
              <li key={c.id}>
                <button type="button" className={c.id === cur?.id ? "on" : ""} onClick={() => setActive(c.id)}>
                  <span className="n">{k + 1}</span>
                  <span className="b">
                    <span className="t">{masterOf(c)}</span>
                    <span className="m">
                      {[c.etablissement, c.annee].filter(Boolean).join(" · ")}
                      {dates?.[k] ? ` · ${dateTimeFr(dates[k])}` : ""}
                    </span>
                    <span className="tags">
                      <span className="ax-pill">{pl.source === "scan" ? "scans" : "énoncé"}</span>
                      {edits[c.id] && <span className="ax-pill accent">texte retouché</span>}
                      {warn && (
                        <span className="ax-pill amber" title="Déjà publié ou en cours : sera publié une deuxième fois">
                          déjà publié
                        </span>
                      )}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        {cur && (
          <div className="ax-bulk-edit">
            <div className="ax-bulk-head">
              <div style={{ minWidth: 0 }}>
                <strong>{masterOf(cur)}</strong>
                <span className="ax-hint">{[cur.etablissement, cur.ville, cur.annee].filter(Boolean).join(" · ")}</span>
              </div>
              <Seg
                value={net}
                onChange={setNet}
                ariaLabel="Réseau"
                options={["instagram", "facebook"].map((k) => ({ value: k, label: `${PLATFORMS.find((p) => p.key === k).label}${edited(cur, k) ? " •" : ""}` }))}
              />
            </div>
            <textarea className="ax-cap-text" rows={13} value={text} spellCheck onChange={(e) => setText(e.target.value)} aria-label={`Texte ${pf.label}`} />
            <div className="ax-cap-meter">
              <div className="ax-cap-bar">
                <span style={{ width: `${Math.min(1, n / pf.limit) * 100}%`, background: n > pf.limit ? "var(--red)" : pf.color }} />
              </div>
              <span className={n > pf.limit ? "over" : ""}>
                {n.toLocaleString("fr-FR")} / {pf.limit.toLocaleString("fr-FR")}
              </span>
            </div>
            <div className="ax-bulk-row">
              {edited(cur, net) ? (
                <button type="button" className="ax-btn ghost xs" onClick={resetText}>
                  <Icon name="restore" size="sm" /> Revenir au texte automatique
                </button>
              ) : (
                <span className="ax-hint">Texte automatique : écris dedans pour le retoucher.</span>
              )}
              <span className="ax-hint ax-right">{NET_TIPS[net]?.(true)}</span>
            </div>
            <Field label="Fin de texte commune" hint="Ajoutée à la fin de tous les textes automatiques, avant les hashtags.">
              <textarea className="ax-textarea" rows={2} value={outro} onChange={(e) => setOutro(e.target.value)} placeholder="Ex. 📲 Abonne-toi pour recevoir chaque nouveau sujet !" />
            </Field>
          </div>
        )}
      </div>
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
      <p style={{ marginTop: 0 }}>Thème, couleurs, mise en page, sujet montré, ton et fin de texte. Retrouvé sur tous tes appareils. Un nom déjà pris remplace l&apos;ancien style.</p>
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

// Un éditeur, une pastille par réseau : tient dans le panneau de gauche, à
// côté de l'aperçu du post dans le fil.
function CaptionEditor({ net, onNet, captions, edited, published, isCarousel, onChange, onReset, onCopy, onOpen, onShare, onPlan, onDone }) {
  const p = PLATFORMS.find((x) => x.key === net) || PLATFORMS[0];
  const text = captions[p.key] || "";
  const n = countFor(p.key, text);
  const ratio = Math.min(1, n / p.limit);
  const over = n > p.limit;
  const rows = Math.max(10, Math.min(20, text.split("\n").length + 2));
  return (
    <div className="ax-cap2">
      <div className="ax-net-pick" role="tablist" aria-label="Réseau">
        {PLATFORMS.map((x) => {
          const c = countFor(x.key, captions[x.key] || "");
          return (
            <button key={x.key} type="button" role="tab" aria-selected={x.key === p.key} className={x.key === p.key ? "on" : ""} onClick={() => onNet(x.key)} title={x.label} aria-label={x.label}>
              <PlatformLogo p={x} />
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

      <div className="ax-cap-meta">
        <strong>{p.label}</strong>
        {edited[p.key] != null ? (
          <button type="button" className="ax-btn ghost xs" onClick={() => onReset(p.key)} title="Revenir au texte automatique">
            <Icon name="restore" size="sm" /> Auto
          </button>
        ) : (
          <span className="ax-hint">texte automatique</span>
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
          <span style={{ width: `${ratio * 100}%`, background: over ? "var(--red)" : ratio > 0.85 ? "var(--amber)" : p.color }} />
        </div>
        <span className={over ? "over" : ""}>
          {n.toLocaleString("fr-FR")} / {p.limit.toLocaleString("fr-FR")}
        </span>
      </div>
      <p className="ax-cap-tip">
        <Icon name="info" size="sm" /> {NET_TIPS[p.key]?.(isCarousel)}
      </p>

      <div className="ax-cap2-actions">
        <button type="button" className="ax-btn sm" onClick={() => onCopy(p)}>
          <Icon name="copy" size="sm" /> Copier
        </button>
        <button type="button" className="ax-btn sm" onClick={() => onOpen(p)} title="Copie le texte et ouvre le réseau">
          <Icon name="external" size="sm" /> Ouvrir
        </button>
        <button type="button" className="ax-btn sm" onClick={() => onShare(p)} title="Partage natif (téléphone) : image(s) + texte">
          <Icon name="share" size="sm" /> Partager
        </button>
        <button type="button" className="ax-btn sm" onClick={() => onPlan(p)} title="Noter une publication à faire à la main">
          <Icon name="calendar" size="sm" /> Planifier
        </button>
        <button type="button" className="ax-btn sm wide" onClick={() => onDone(p)} title="Publié à la main : l'inscrire dans l'historique">
          <Icon name="check" size="sm" /> Marquer publié sur {p.label}
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
  const [rail, setRail] = useState("sujet");
  const [autoPlan, setAutoPlan] = useState(false);
  const [bulk, setBulk] = useState(false);
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
  const [building, setBuilding] = useState(false);
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

  const isCarousel = kind === "concours" && mode === "carrousel";
  const track = useMemo(() => trackConcours(log.entries), [log.entries]);
  const candidates = useMemo(() => {
    if (!Array.isArray(list)) return [];
    const pub = list.filter((x) => col.isPublished(x));
    const sorted =
      kind === "news"
        ? [...pub].sort((a, b) => String(a.date_limite || "9999").localeCompare(String(b.date_limite || "9999"))).filter((n) => daysUntil(n.date_limite) === null || daysUntil(n.date_limite) >= 0)
        : [...pub].reverse();
    const shown =
      isCarousel && show !== "all"
        ? sorted.filter((x) => {
            const t = track.get(x.id);
            return show === "done" ? isDone(t) : !isDone(t) && !t?.pending;
          })
        : sorted;
    return shown.filter((x) => matchQuery(col.searchText(x), q)).slice(0, 80);
  }, [list, kind, q, col, isCarousel, show, track]);
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
  }, [tone, mode, outro, tags, style.source]);

  // Carrousel : les scans se chargent d'abord (gardés en mémoire ensuite).
  useEffect(() => {
    if (!isCarousel || !facts || !item) {
      setCarousel(null);
      return;
    }
    let alive = true;
    (async () => {
      const wantScans = sourceFor(item, style) === "scan";
      setBuilding(true);
      const scans = wantScans ? await loadScans(scanPaths(item, style)) : undefined;
      const math = await loadMath(item, style);
      if (!alive) return;
      const built = buildCarousel(item, { theme, style, facts, ctaOverride: override.cta, bulletsOverride: override.bullets, hasCorrige: hasCorrigeOf(item, corrigeFiles), scans, math });
      setCarousel({ ...built, itemId: item.id, thumbs: built.canvases.map((c) => c.toDataURL("image/png")) });
      setSlide((s) => Math.min(s, built.canvases.length - 1));
      setBuilding(false);
    })();
    return () => {
      alive = false;
    };
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
      if (e.target.closest?.("input, textarea, select, [contenteditable], .ax-overlay") || e.altKey || e.ctrlKey || e.metaKey) return;
      if (e.key === "ArrowRight") setSlide((s) => Math.min(slides - 1, s + 1));
      if (e.key === "ArrowLeft") setSlide((s) => Math.max(0, s - 1));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isCarousel, slides]);

  const truncated = Boolean(carousel?.truncated);
  const scanShown = carousel?.source === "scan";
  const captions = useMemo(() => {
    if (!item) return {};
    const opts = { tone, outro, tags: tags ?? undefined, ctx: { corrigeFiles } };
    const auto = (p) => (isCarousel && (p === "instagram" || p === "facebook") ? carouselCaption(p, item, { ...opts, truncated, scan: scanShown }) : captionFor(p, kind, item, opts));
    return Object.fromEntries(PLATFORMS.map((p) => [p.key, texts[p.key] ?? auto(p.key)]));
  }, [item, kind, tone, outro, tags, texts, corrigeFiles, isCarousel, truncated, scanShown]);

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
    // Textes retouchés dans le studio : ce sont eux qu'on veut coller.
    const files = await carouselFiles(dir, item, carousel, { tone, outro, tags: tags ?? undefined, corrigeFiles, captions: { instagram: captions.instagram, facebook: captions.facebook } });
    downloadBlob(makeZip(files), `${dir}.zip`);
  }
  async function downloadSlide() {
    const blob = await canvasBlob(carousel.canvases[slide]);
    downloadBlob(blob, `saadconcours-${String(item.id).slice(0, 50)}-${String(slide + 1).padStart(2, "0")}.png`);
  }
  // Publication automatique (GitHub Actions → Meta) : seuls les textes
  // retouchés à la main partent d'ici ; sinon le robot écrit le texte d'après
  // son propre rendu (sujet complet ou coupé, scans ou énoncé), avec le ton
  // et les hashtags choisis ici.
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
  const canCarousel = (x) => Boolean(sourceFor(x, style));
  function toggleSelect(id) {
    if (!selected.includes(id) && selected.length >= MAX_SELECTION) return toast.info(`${MAX_SELECTION} concours au maximum par envoi`);
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  }
  // Coche d'un coup les premiers concours de la liste affichée.
  function selectVisible() {
    const ids = candidates.filter(canCarousel).map((x) => x.id);
    setSelected((s) => [...new Set([...s, ...ids])].slice(0, MAX_SELECTION));
  }
  const selectedItems = useMemo(() => (Array.isArray(list) ? selected.map((id) => list.find((c) => c.id === id)).filter(Boolean) : []), [selected, list]);

  // Envoi groupé, après relecture des textes (BulkDialog) : un texte retouché
  // part tel quel, les autres sont écrits par le robot avec ce ton et cette fin.
  async function sendSelection({ dates, tone: bTone, outro: bOutro, captions: edits }) {
    try {
      const res = await api("/api/admin/social/publish", {
        method: "POST",
        body: {
          theme: themeKey,
          design: { ...designFor({ withItem: false }), tone: bTone, outro: bOutro || undefined },
          items: selectedItems.map((c, k) => ({ id: c.id, title: col.title(c), date: dates?.[k], captions: edits[c.id] || {} })),
        },
      });
      log.setEntries((e) => [...res.entries, ...(e || [])]);
      const n = selectedItems.length;
      setSelected([]);
      setBulk(false);
      if (dates) toast.success(`${n} concours programmés`, `Du ${dateTimeFr(dates[0])} au ${dateTimeFr(dates[dates.length - 1])}.`);
      else toast.success(`${n} concours en cours de publication`, res.woken ? "En ligne d'ici quelques minutes. Suivi : ⏳ puis ✓ dans la liste." : "Le robot les publie à son prochain passage (15 minutes au plus).");
    } catch (err) {
      toast.error("Publication impossible", err.message);
    }
  }
  async function zipSelection() {
    const files = [{ name: "LISEZ-MOI.txt", data: BATCH_README }];
    for (let k = 0; k < selectedItems.length; k++) {
      const c = selectedItems[k];
      const built = await buildFor(c, { theme, style, corrigeFiles });
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
  // Remet l'apparence par défaut, sans toucher au sujet montré (scans / énoncé).
  function resetStyle() {
    setThemeKey("brand");
    setStyle((s) => normalizeStyle({ source: s.source }));
    setStyleId("");
  }
  async function pickPhoto(file) {
    if (!file) return;
    const url = URL.createObjectURL(file);
    const img = await loadImage(url);
    if (img) setPhoto(img);
    else toast.error("Image illisible", "Choisis un fichier JPEG, PNG ou WebP.");
  }
  function pickRail(k) {
    setRail(k);
    // La légende se relit dans le fil, là où le réseau la coupe.
    if (k === "legende" && preview === "image") setPreview(net === "facebook" ? "facebook" : "instagram");
  }

  const defaultBullets = facts ? (isCarousel ? carouselBullets(item, { truncated, hasCorrige: hasCorrigeOf(item, corrigeFiles), scan: scanShown }) : facts.bullets || []) : [];
  const bulletsText = (override.bullets ?? defaultBullets).join("\n");
  const styleChanged = themeKey !== "brand" || Object.keys(styleDiff({ ...style, source: DEFAULT_STYLE.source })).length > 0;
  const currentSrc = isCarousel ? carousel?.thumbs[slide] : visualSrc;
  const fallback = isCarousel && carousel && carousel.itemId === item?.id && carousel.source !== style.source;

  /* ---- Panneaux ---- */

  function renderSujet() {
    return (
      <div className="ax-ss-sujet">
        <div className="ax-chips ax-ss-kinds" role="radiogroup" aria-label="Type de contenu">
          {CONTENT_KINDS.map((k) => (
            <button key={k.key} type="button" role="radio" aria-checked={kind === k.key} className={`ax-toggle-chip${kind === k.key ? " on" : ""}`} onClick={() => (setKind(k.key), setItemId(""), setQ(""), setSelected([]))}>
              {k.label}
            </button>
          ))}
        </div>
        <div className="ax-search">
          <Icon name="search" size="sm" />
          <input className="ax-input sm" placeholder="Master, faculté, ville, année…" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Rechercher" />
        </div>
        {isCarousel && (
          <div className="ax-ss-filter">
            <Seg value={show} onChange={setShow} options={SHOW} ariaLabel="Filtre" />
            <span className="ax-hint" title="Concours publiés sur Instagram ou Facebook">
              {doneCount} / {totalCount} publiés
            </span>
          </div>
        )}
        <div className="ax-ss-list">
          {!Array.isArray(list) ? (
            <Skeleton rows={6} height={48} />
          ) : !candidates.length ? (
            <p className="ax-muted">Rien à publier ici.</p>
          ) : (
            candidates.map((x) => {
              const on = item?.id === x.id;
              const concours = kind === "concours";
              const done = (log.entries || []).some((e) => e.kind === kind && e.itemId === x.id && e.status === "published");
              const src = isCarousel ? sourceFor(x, style) : null;
              return (
                <div key={x.id} className={`ax-ss-row${on ? " on" : ""}`}>
                  {isCarousel && <input type="checkbox" checked={selected.includes(x.id)} onChange={() => toggleSelect(x.id)} aria-label={`Sélectionner ${col.title(x)}`} disabled={!src} />}
                  <button type="button" className="ax-ss-item" onClick={() => setItemId(x.id)} aria-current={on || undefined}>
                    <span className="t">{concours ? masterOf(x) : col.title(x)}</span>
                    <span className="m">{concours ? [x.etablissement, x.annee, x.ville].filter(Boolean).join(" · ") : col.subtitle(x)}</span>
                  </button>
                  {isCarousel && style.source === "scan" && src === "enonce" && (
                    <span className="ax-pill" title="Pas de scan : le carrousel montrera l'énoncé">
                      texte
                    </span>
                  )}
                  {isCarousel ? <TrackPill t={track.get(x.id)} /> : done && <span className="ax-pill green" title="Déjà publié sur au moins un réseau">✓</span>}
                </div>
              );
            })
          )}
        </div>
        {isCarousel && (
          <div className="ax-ss-bulk">
            <div className="ax-ss-bulk-count">
              <span>
                <strong>{selected.length}</strong> sélectionné{selected.length > 1 ? "s" : ""}
                <span className="ax-hint"> · {MAX_SELECTION} max</span>
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
            </div>
            <div className="ax-ss-bulk-actions">
              <button type="button" className="ax-btn sm icon" onClick={zipSelection} disabled={!selected.length} title="Images et textes en ZIP, pour publier à la main" aria-label="Télécharger la sélection en ZIP">
                <Icon name="download" size="sm" />
              </button>
              <button type="button" className="ax-btn primary sm" onClick={() => setBulk(true)} disabled={!selected.length}>
                <Icon name="send" size="sm" /> Relire et publier{selected.length ? ` ${selected.length}` : ""}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  function renderContenu() {
    return (
      <Panel title="Contenu" lead="Le type de post et les textes écrits sur l'affiche (première image).">
        {kind === "concours" && (
          <Group title="Publication">
            <Row label="Type de post" hint={isCarousel ? "Affiche, pages du sujet, puis « cherche sur Google ». Portrait 4:5." : "Une seule image, au format de ton choix."}>
              <Seg value={mode} onChange={setMode} options={MODES} ariaLabel="Type de post" />
            </Row>
            {isCarousel && (
              <>
                <Row label="Sujet montré" hint="Aussi en haut de l'aperçu. Sans scan, le carrousel montre l'énoncé (et inversement).">
                  <Seg value={style.source} onChange={(v) => setSt({ source: v })} options={SOURCES} ariaLabel="Sujet montré" />
                </Row>
                <Row label={style.source === "scan" ? "Pages scannées au maximum" : "Pages d'énoncé au maximum"} aside={<strong>{style.maxPages}</strong>} hint="Moins de pages = un post plus court ; la suite est sur le site.">
                  <input type="range" min={1} max={8} value={style.maxPages} onChange={(e) => setSt({ maxPages: Number(e.target.value) })} className="ax-range" />
                </Row>
              </>
            )}
          </Group>
        )}
        {!isCarousel && (
          <Group title="Format">
            <Seg value={format} onChange={setFormat} options={FORMATS.map((f) => ({ value: f.key, label: f.label, title: f.hint }))} ariaLabel="Format" />
          </Group>
        )}
        {facts && (
          <Group
            title="Textes de l'affiche"
            aside={
              Object.keys(override).length > 0 ? (
                <button type="button" className="ax-btn ghost xs" onClick={() => setOverride({})}>
                  <Icon name="restore" size="sm" /> Automatique
                </button>
              ) : null
            }
          >
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
          </Group>
        )}
      </Panel>
    );
  }

  function renderStyle() {
    return (
      <Panel title="Style" lead="Retenu sur cet appareil ; enregistre-le pour le retrouver partout.">
        <Group
          title="Styles enregistrés"
          aside={
            styleChanged ? (
              <button type="button" className="ax-btn ghost xs" onClick={resetStyle}>
                <Icon name="restore" size="sm" /> Par défaut
              </button>
            ) : null
          }
        >
          <div className="ax-style-bar">
            <select className="ax-input sm" value={styleId} onChange={(e) => applyStyle(e.target.value)} aria-label="Styles enregistrés">
              <option value="">{savedStyles.length ? "Choisir un style…" : "Aucun style enregistré"}</option>
              {savedStyles.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
            <button type="button" className="ax-btn sm" onClick={() => setNaming(true)} title="Enregistrer le style actuel">
              <Icon name="save" size="sm" /> Enregistrer
            </button>
            {styleId && (
              <button type="button" className="ax-btn ghost icon sm" onClick={deleteStyle} aria-label="Supprimer ce style">
                <Icon name="trash" size="sm" />
              </button>
            )}
          </div>
        </Group>

        <Group title="Couleurs et fond">
          <ThemePicker value={themeKey} onChange={(k) => (setThemeKey(k), setStyleId(""))} style={style} />
          {themeKey === CUSTOM_THEME.key && (
            <div className="ax-colorrow">
              <ColorField label="Haut" value={style.custom.bg0} onChange={(v) => setSt({ custom: { ...style.custom, bg0: v } })} />
              <ColorField label="Bas" value={style.custom.bg1} onChange={(v) => setSt({ custom: { ...style.custom, bg1: v } })} />
              <ColorField label="Accent" value={style.custom.accent} onChange={(v) => setSt({ custom: { ...style.custom, accent: v } })} />
            </div>
          )}
          <Row label="Motif">
            <Seg value={style.pattern} onChange={(v) => setSt({ pattern: v })} options={PATTERNS} ariaLabel="Motif" />
          </Row>
          {!isCarousel && (
            <Row label="Photo de fond" hint="Voilée aux couleurs du thème. Reste sur cet appareil.">
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
            </Row>
          )}
        </Group>

        <Group title="Mise en page">
          <Row label="Alignement">
            <Seg value={style.align} onChange={(v) => setSt({ align: v })} options={ALIGNS} ariaLabel="Alignement" />
          </Row>
          <Row label="Taille du titre">
            <Seg value={style.titleSize} onChange={(v) => setSt({ titleSize: v })} options={TITLE_SIZES.map((t) => ({ value: t.value, label: t.label }))} ariaLabel="Taille du titre" />
          </Row>
          <div className="ax-switches">
            <Switch checked={style.brand} onChange={(v) => setSt({ brand: v })} label="Logo" />
            <Switch checked={style.url} onChange={(v) => setSt({ url: v })} label="Pied de page" />
            <Switch checked={style.bullets} onChange={(v) => setSt({ bullets: v })} label="Points forts" />
            <Switch checked={style.watermark} onChange={(v) => setSt({ watermark: v })} label="Filigrane" />
          </div>
        </Group>

        <Group title="Habillage">
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
      </Panel>
    );
  }

  function renderLegende() {
    return (
      <Panel title="Légende" lead="Le texte du post pour chaque réseau, avec un lien suivi (utm_source). Modifiable à la main.">
        <Group title="Pour tous les réseaux">
          <Row label="Ton">
            <Seg value={tone} onChange={setTone} options={TONES} ariaLabel="Ton" />
          </Row>
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
        </Group>
        {item && (
          <Group title="Par réseau">
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
          </Group>
        )}
      </Panel>
    );
  }

  const panels = { sujet: renderSujet, contenu: renderContenu, style: renderStyle, legende: renderLegende };
  const activeRail = RAIL.find((r) => r.key === rail) || RAIL[0];
  const pagesLabel = carousel ? `${carousel.extraitPages} page${carousel.extraitPages > 1 ? "s" : ""} ${scanShown ? `scannée${carousel.extraitPages > 1 ? "s" : ""}` : "d'énoncé"}` : "";

  return (
    <div className="ax-ss">
      <aside className="ax-ps-side" aria-label="Réglages du post">
        <nav className="ax-ps-rail" role="tablist" aria-label="Sections">
          {RAIL.map((r) => (
            <button key={r.key} type="button" role="tab" aria-selected={rail === r.key} className={rail === r.key ? "on" : ""} onClick={() => pickRail(r.key)} title={r.title}>
              <Icon name={r.icon} />
              <span>{r.label}</span>
              {r.key === "sujet" && selected.length > 0 && <i className="ax-ss-rail-count">{selected.length}</i>}
              {r.key === "legende" && Object.keys(texts).length > 0 && <i className="ax-ps-mod" aria-label="modifié" />}
            </button>
          ))}
        </nav>
        <div className={`ax-ps-body${rail === "sujet" ? " ax-ss-body-list" : ""}`} role="tabpanel" aria-label={activeRail.title}>
          {panels[activeRail.key]()}
        </div>
      </aside>

      <section className="ax-ps-view ax-ss-view" aria-label="Aperçu du post">
        <div className="ax-ps-toolbar">
          {isCarousel && <Seg value={style.source} onChange={(v) => setSt({ source: v })} options={SOURCES} ariaLabel="Sujet montré" />}
          <Seg value={preview} onChange={setPreview} options={PREVIEWS} ariaLabel="Aperçu" />
          <div className="ax-ps-tools">
            {building && (
              <span className="ax-hint ax-inline">
                <Icon name="loader" size="sm" /> Préparation…
              </span>
            )}
            {isCarousel && carousel && (
              <span className="ax-hint ax-nowrap" title="← → pour feuilleter">
                {slide + 1} / {carousel.canvases.length}
              </span>
            )}
            {item && (
              <a className="ax-btn sm icon" href={col.publicUrl(item)} target="_blank" rel="noopener noreferrer" title="Voir la page sur le site" aria-label="Voir la page sur le site">
                <Icon name="external" size="sm" />
              </a>
            )}
          </div>
        </div>

        {!item ? (
          <div className="ax-ss-stage">
            <Empty icon={<Icon name="megaphone" size="lg" />} title="Choisis un contenu à publier" />
          </div>
        ) : (
          <>
            <div className={`ax-ss-stage${preview !== "image" ? " feed" : ""}`}>
              {preview !== "image" ? (
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
              ) : isCarousel ? (
                carousel ? (
                  <>
                    <img src={carousel.thumbs[slide]} alt={`Image ${slide + 1}`} className="ax-ss-main" />
                    {slide > 0 && (
                      <button type="button" className="ax-stage-arrow prev" onClick={() => setSlide((s) => s - 1)} aria-label="Image précédente">
                        <Icon name="chevronLeft" />
                      </button>
                    )}
                    {slide < slides - 1 && (
                      <button type="button" className="ax-stage-arrow next" onClick={() => setSlide((s) => s + 1)} aria-label="Image suivante">
                        <Icon name="chevronRight" />
                      </button>
                    )}
                  </>
                ) : (
                  <div className="ax-skel ax-ss-skel" />
                )
              ) : null}
              {!isCarousel && <canvas ref={canvasRef} className="ax-ss-main" style={preview !== "image" ? { display: "none" } : undefined} />}
            </div>

            {isCarousel && carousel && (
              <div className="ax-carousel-strip ax-ss-strip">
                {carousel.thumbs.map((src, k) => (
                  <button key={k} type="button" className={`ax-carousel-thumb${k === slide ? " on" : ""}`} onClick={() => setSlide(k)} aria-label={`Image ${k + 1}`}>
                    <img src={src} alt="" />
                    <span>{k + 1}</span>
                  </button>
                ))}
              </div>
            )}

            <div className="ax-ss-actions">
              {isCarousel ? (
                <>
                  <p className="ax-ss-info">
                    {carousel ? (
                      <>
                        {carousel.canvases.length} images · {pagesLabel} · {truncated ? "sujet coupé, la suite est sur le site" : "sujet complet"}
                        {fallback && <span className="ax-ss-warn">{style.source === "scan" ? "Pas de scan pour ce concours : énoncé utilisé." : "Pas d'énoncé pour ce concours : scans utilisés."}</span>}
                        <span className="ax-ss-sub">Recherche Google : « {googleQuery(item)} »</span>
                      </>
                    ) : (
                      "Préparation des images…"
                    )}
                  </p>
                  <div className="ax-ss-buttons">
                    <Menu
                      label="Télécharger, copier"
                      items={[
                        { label: "Tout en ZIP (images + textes)", icon: "download", onClick: downloadCarousel, disabled: !carousel },
                        { label: `Télécharger l'image ${slide + 1}`, icon: "image", onClick: downloadSlide, disabled: !carousel },
                        { label: `Copier l'image ${slide + 1}`, icon: "copy", onClick: copyImage, disabled: !carousel },
                        "-",
                        { label: "Copier le lien du 1er commentaire Facebook", icon: "link", onClick: copyComment },
                      ]}
                    />
                    <button type="button" className="ax-btn" onClick={() => setAutoPlan(true)} disabled={!carousel}>
                      <Icon name="calendar" size="sm" /> Programmer
                    </button>
                    <button type="button" className="ax-btn primary" onClick={publishNow} disabled={!carousel}>
                      <Icon name="send" size="sm" /> Publier sur Instagram + Facebook
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <p className="ax-ss-info">
                    {fmt.label} · {fmt.w} × {fmt.h} px<span className="ax-ss-sub">{fmt.hint}</span>
                  </p>
                  <div className="ax-ss-buttons">
                    <Menu
                      label="Plus d'actions"
                      items={[
                        { label: "Tous les formats en ZIP (+ textes)", icon: "layers", onClick: downloadAllFormats },
                        { label: "Copier l'image", icon: "copy", onClick: copyImage },
                      ]}
                    />
                    <button type="button" className="ax-btn primary" onClick={download}>
                      <Icon name="download" size="sm" /> Télécharger l&apos;image
                    </button>
                  </div>
                </>
              )}
            </div>
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
      {bulk && selectedItems.length > 0 && (
        <BulkDialog items={selectedItems} track={track} style={style} initialTone={tone} initialOutro={outro} corrigeFiles={corrigeFiles} onClose={() => setBulk(false)} onSend={sendSelection} />
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
              Rien de planifié. Depuis le composer : « Programmer » un post, ou « Relire et publier » une sélection en série.
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
      <div className="ax-editor-head">
        <div className="ax-editor-title">
          <h1>Studio social</h1>
          <p>
            <span>Carrousels et visuels pour Instagram, Facebook et les autres réseaux : publiés par le robot, programmés, ou à la main.</span>
          </p>
        </div>
        <Seg
          value={tab}
          onChange={setTab}
          ariaLabel="Vue"
          options={TABS.map((t) => ({
            value: t.key,
            label: (
              <span className="ax-inline">
                <Icon name={t.icon} size="sm" /> {t.label}
                {t.key === "planning" && planned > 0 && <span className="ax-pill">{planned}</span>}
              </span>
            ),
          }))}
        />
      </div>
      {tab === "composer" ? <Composer log={log} /> : <Planning log={log} />}
    </>
  );
}
