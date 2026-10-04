"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Icon from "../../_ui/Icon";
import { Alert, Empty, Field, Hero, Seg, SectionTitle, Skeleton, Tabs, useTab } from "../../_ui/kit";
import { Dialog, useConfirm, useToast } from "../../_ui/feedback";
import { useJson, useCorrigeFiles } from "../../_lib/content";
import { COLLECTIONS } from "../../_lib/collections";
import { assetUrl } from "../../_lib/repo";
import { api } from "../../_lib/api";
import { dateTimeFr, daysUntil, matchQuery, timeAgo } from "../../_lib/format";
import { CONTENT_KINDS, PLATFORMS, TONES, captionFor, carouselCaption, countFor, factsFor, googleQuery, intentUrl, trackedUrl } from "./captions";
import { FORMATS, THEMES, canvasBlob, drawVisual, loadImage } from "./visual";
import { MAX_EXTRAIT_SLIDES, buildCarousel } from "./carousel";
import { blobBytes, downloadBlob, makeZip } from "./zip";

const MODES = [
  { value: "visuel", label: "Visuel seul" },
  { value: "carrousel", label: "Carrousel extrait" },
];

const hasCorrigeOf = (item, corrigeFiles) => Boolean(item.corrige_md) || Boolean(corrigeFiles?.has(item.id));

// Fichiers d'un carrousel dans le ZIP : images numérotées + textes à coller.
async function carouselFiles(dir, item, { canvases, truncated }, { tone, corrigeFiles }) {
  const ctx = { corrigeFiles };
  const files = [];
  for (let k = 0; k < canvases.length; k++) files.push({ name: `${dir}/${String(k + 1).padStart(2, "0")}.png`, data: await blobBytes(await canvasBlob(canvases[k])) });
  files.push({ name: `${dir}/instagram.txt`, data: carouselCaption("instagram", item, { tone, truncated, ctx }) });
  files.push({ name: `${dir}/facebook.txt`, data: carouselCaption("facebook", item, { tone, truncated, ctx }) });
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

function PlanDialog({ onClose, onSave, platform, auto = false }) {
  const [when, setWhen] = useState(() => {
    const d = new Date(Date.now() + 86400000);
    d.setHours(18, 0, 0, 0);
    return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
  });
  const [note, setNote] = useState("");
  return (
    <Dialog
      title={`Planifier sur ${platform.label}`}
      onClose={onClose}
      footer={
        <>
          <button type="button" className="ax-btn" onClick={onClose}>
            Annuler
          </button>
          <button type="button" className="ax-btn primary" onClick={() => onSave(new Date(when).toISOString(), note)}>
            <Icon name="calendar" size="sm" /> Planifier
          </button>
        </>
      }
    >
      <p style={{ marginTop: 0 }}>
        {auto
          ? "Le robot publie le carrousel tout seul à cette heure-là (à 15 minutes près), avec le lien en premier commentaire sur Facebook."
          : "La publication apparaîtra dans le calendrier et sur le tableau de bord le jour J. Tu la publieras toi-même : le studio te redonne le texte et l'image."}
      </p>
      <Field label="Date et heure">
        <input type="datetime-local" className="ax-input" value={when} onChange={(e) => setWhen(e.target.value)} />
      </Field>
      {!auto && (
        <Field label="Note (facultatif)">
          <input className="ax-input" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Ex. relancer 2 jours avant la clôture" />
        </Field>
      )}
    </Dialog>
  );
}

const localDay = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

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
  if (t.pending) return <span className="ax-pill" title="Publication en cours">⏳</span>;
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

function Composer({ log }) {
  const sp = useSearchParams();
  const toast = useToast();
  const confirm = useConfirm();
  const [autoPlan, setAutoPlan] = useState(false);
  const [selected, setSelected] = useState([]);
  const [show, setShow] = useState("todo");
  const corrigeFiles = useCorrigeFiles();
  const [kind, setKind] = useState(() => (CONTENT_KINDS.some((k) => k.key === sp.get("type")) ? sp.get("type") : "concours"));
  const [itemId, setItemId] = useState(sp.get("id") || "");
  const [q, setQ] = useState("");
  const [format, setFormat] = useState(FORMATS[0].key);
  const [themeKey, setThemeKey] = useState("brand");
  const [tone, setTone] = useState("info");
  const [mode, setMode] = useState("carrousel");
  const [carousel, setCarousel] = useState(null);
  const [slide, setSlide] = useState(0);
  const [override, setOverride] = useState({});
  const [texts, setTexts] = useState({});
  const [planFor, setPlanFor] = useState(null);
  const canvasRef = useRef(null);
  const col = COLLECTIONS[kind];
  const { data: list } = useJson(col.path);

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
  const theme = THEMES.find((t) => t.key === themeKey) || THEMES[0];
  const fmt = FORMATS.find((f) => f.key === format);
  const isCarousel = kind === "concours" && mode === "carrousel";

  useEffect(() => {
    setOverride({});
    setTexts({});
    if (item && kind === "news" && factsFor(kind, item).urgent) setThemeKey("urgent");
  }, [item?.id, kind]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setTexts({});
  }, [tone, mode]);

  useEffect(() => {
    if (!isCarousel || !facts || !item) {
      setCarousel(null);
      return;
    }
    const built = buildCarousel(item, { theme, facts, ctaOverride: override.cta, hasCorrige: hasCorrigeOf(item, corrigeFiles) });
    setCarousel({ ...built, thumbs: built.canvases.map((c) => c.toDataURL("image/png")) });
    setSlide((s) => Math.min(s, built.canvases.length - 1));
  }, [isCarousel, item, facts, theme, override.cta, corrigeFiles]);

  useEffect(() => {
    setSlide(0);
  }, [item?.id]);

  useEffect(() => {
    if (isCarousel || !facts || !canvasRef.current) return;
    let alive = true;
    (async () => {
      const cover = kind === "boutique" && item.couverture ? await loadImage(assetUrl(item.couverture)) : null;
      if (alive) drawVisual(canvasRef.current, { format: fmt, theme, facts, cover });
    })();
    return () => {
      alive = false;
    };
  }, [facts, fmt, theme, kind, item, isCarousel]);

  const truncated = Boolean(carousel?.truncated);
  const captions = useMemo(() => {
    if (!item) return {};
    const auto = (p) =>
      isCarousel && (p === "instagram" || p === "facebook")
        ? carouselCaption(p, item, { tone, truncated, ctx: { corrigeFiles } })
        : captionFor(p, kind, item, { tone, ctx: { corrigeFiles } });
    return Object.fromEntries(PLATFORMS.map((p) => [p.key, texts[p.key] ?? auto(p.key)]));
  }, [item, kind, tone, texts, corrigeFiles, isCarousel, truncated]);

  async function downloadCarousel() {
    const dir = `saadconcours-${String(item.id).slice(0, 60)}`;
    const files = await carouselFiles(dir, item, carousel, { tone, corrigeFiles });
    // Textes retouchés dans le studio : ce sont eux qu'on veut coller.
    for (const f of files) {
      if (f.name.endsWith("/instagram.txt")) f.data = captions.instagram;
      if (f.name.endsWith("/facebook.txt")) f.data = captions.facebook;
    }
    downloadBlob(makeZip(files), `${dir}.zip`);
  }
  // Publication automatique (GitHub Actions → Meta) : seuls les textes
  // retouchés partent d'ici ; sinon le robot écrit le texte d'après son
  // propre rendu (sujet complet ou coupé).
  async function queueAuto(date) {
    const edited = Object.fromEntries(["instagram", "facebook"].filter((p) => texts[p] != null).map((p) => [p, texts[p]]));
    try {
      const res = await api("/api/admin/social/publish", { method: "POST", body: { theme: themeKey, items: [{ id: item.id, title: col.title(item), date, captions: edited }] } });
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
  async function publishSelection() {
    const items = selected.map((id) => list.find((c) => c.id === id)).filter(Boolean);
    if (!items.length) return;
    const again = items.filter((c) => isDone(track.get(c.id)) || track.get(c.id)?.pending);
    const ok = await confirm({
      title: `Publier ${items.length} concours ?`,
      body: (
        <>
          <p style={{ marginTop: 0 }}>Chacun en carrousel sur Instagram et sur Facebook, avec le lien en premier commentaire sur Facebook :</p>
          <ul style={{ margin: "0 0 8px", paddingLeft: 18 }}>
            {items.map((c) => (
              <li key={c.id}>
                {col.title(c)} · {c.etablissement} {c.annee}
              </li>
            ))}
          </ul>
          {again.length > 0 && (
            <p style={{ color: "var(--danger, #c0392b)", marginBottom: 0 }}>
              ⚠️ Déjà publié ou en cours, sera publié une deuxième fois : {again.map((c) => col.title(c)).join(", ")}
            </p>
          )}
        </>
      ),
      confirmLabel: `Publier les ${items.length}`,
    });
    if (!ok) return;
    try {
      const res = await api("/api/admin/social/publish", { method: "POST", body: { theme: themeKey, items: items.map((c) => ({ id: c.id, title: col.title(c) })) } });
      log.setEntries((e) => [...res.entries, ...(e || [])]);
      setSelected([]);
      toast.success(`${items.length} concours en cours de publication`, res.woken ? "En ligne d'ici quelques minutes. Suivi : ⏳ puis ✓ dans la liste." : "Le robot les publie à son prochain passage (15 minutes au plus).");
    } catch (err) {
      toast.error("Publication impossible", err.message);
    }
  }
  async function zipSelection() {
    const items = selected.map((id) => list.find((c) => c.id === id)).filter(Boolean);
    const files = [{ name: "LISEZ-MOI.txt", data: BATCH_README }];
    for (let k = 0; k < items.length; k++) {
      const c = items[k];
      const built = buildCarousel(c, { theme, facts: factsFor("concours", c, { corrigeFiles }), hasCorrige: hasCorrigeOf(c, corrigeFiles) });
      files.push(...(await carouselFiles(`${String(k + 1).padStart(2, "0")}_${c.id}`, c, built, { tone, corrigeFiles })));
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
    const blob = await canvasBlob(canvasRef.current);
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  }
  async function copyImage() {
    try {
      const blob = await canvasBlob(canvasRef.current);
      await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
      toast.success("Image copiée", "Colle-la directement dans le composeur du réseau.");
    } catch {
      toast.error("Copie impossible", "Ce navigateur ne permet pas de copier une image : télécharge-la.");
    }
  }
  async function shareNative(platformKey) {
    const blob = await canvasBlob(canvasRef.current);
    const file = new File([blob], filename, { type: "image/png" });
    const text = captions[platformKey];
    if (navigator.canShare?.({ files: [file] })) {
      try {
        await navigator.share({ files: [file], text });
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
          <div className="ax-inline" style={{ justifyContent: "space-between", marginBottom: 8, gap: 8 }}>
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
            {selected.length > 0 && (
              <button type="button" className="ax-btn ghost xs" onClick={() => setSelected([])}>
                Vider
              </button>
            )}
            <span className="ax-right ax-inline" style={{ gap: 6 }}>
              <button type="button" className="ax-btn xs" onClick={zipSelection} disabled={!selected.length} title="Images et textes, pour publier à la main">
                <Icon name="download" size="sm" /> ZIP
              </button>
              <button type="button" className="ax-btn primary sm" onClick={publishSelection} disabled={!selected.length}>
                <Icon name="share" size="sm" /> Publier {selected.length || ""}
              </button>
            </span>
          </div>
        )}

        <hr className="ax-sep" />
        <SectionTitle>2. Visuel</SectionTitle>
        {kind === "concours" && (
          <Field label="Type de publication" hint={isCarousel ? `Affiche + énoncé (${MAX_EXTRAIT_SLIDES} pages max) + « cherche sur Google ». Format portrait 4:5.` : undefined}>
            <Seg value={mode} onChange={setMode} options={MODES} />
          </Field>
        )}
        {!isCarousel && (
          <Field label="Format">
            <Seg value={format} onChange={setFormat} options={FORMATS.map((f) => ({ value: f.key, label: f.label, title: f.hint }))} />
          </Field>
        )}
        <Field label="Thème">
          <Seg value={themeKey} onChange={setThemeKey} options={THEMES.map((t) => ({ value: t.key, label: t.label }))} />
        </Field>
        {facts && (
          <>
            <Field label="Sur-titre">
              <input className="ax-input sm" value={facts.kicker || ""} onChange={(e) => setOverride((o) => ({ ...o, kicker: e.target.value }))} />
            </Field>
            <Field label="Titre">
              <textarea className="ax-textarea" rows={2} value={facts.title || ""} onChange={(e) => setOverride((o) => ({ ...o, title: e.target.value }))} />
            </Field>
            <Field label="Sous-titre">
              <input className="ax-input sm" value={facts.subtitle || ""} onChange={(e) => setOverride((o) => ({ ...o, subtitle: e.target.value }))} />
            </Field>
            <Field label="Bouton">
              <input className="ax-input sm" value={facts.cta || ""} onChange={(e) => setOverride((o) => ({ ...o, cta: e.target.value }))} />
            </Field>
            {Object.keys(override).length > 0 && (
              <button type="button" className="ax-btn ghost sm" onClick={() => setOverride({})}>
                <Icon name="restore" size="sm" /> Textes automatiques
              </button>
            )}
          </>
        )}
      </aside>

      <section className="ax-stack">
        {!item ? (
          <Empty icon="📣" title="Choisis un contenu à publier" />
        ) : (
          <>
            {isCarousel ? (
              <>
                <div className="ax-social-stage">{carousel ? <img src={carousel.thumbs[slide]} alt={`Image ${slide + 1}`} className="ax-social-canvas ax-carousel-main" /> : <Skeleton rows={1} height={420} />}</div>
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
                  <button type="button" className="ax-btn" onClick={copyComment}>
                    <Icon name="copy" size="sm" /> Lien pour le 1er commentaire Facebook
                  </button>
                  <a className="ax-btn" href={col.publicUrl(item)} target="_blank" rel="noopener noreferrer">
                    <Icon name="external" size="sm" /> Voir la page
                  </a>
                  <span className="ax-right ax-inline">
                    <span className="ax-hint">Ton</span>
                    <Seg value={tone} onChange={setTone} options={TONES} />
                  </span>
                </div>
              </>
            ) : (
            <>
            <div className="ax-social-stage">
              <canvas ref={canvasRef} className="ax-social-canvas" />
            </div>
            <div className="ax-btn-row">
              <button type="button" className="ax-btn primary" onClick={download}>
                <Icon name="download" /> Télécharger l&apos;image
              </button>
              <button type="button" className="ax-btn" onClick={copyImage}>
                <Icon name="copy" size="sm" /> Copier l&apos;image
              </button>
              <a className="ax-btn" href={col.publicUrl(item)} target="_blank" rel="noopener noreferrer">
                <Icon name="external" size="sm" /> Voir la page
              </a>
              <span className="ax-right ax-inline">
                <span className="ax-hint">Ton</span>
                <Seg value={tone} onChange={setTone} options={TONES} />
              </span>
            </div>
            </>
            )}

            <SectionTitle aside="liens suivis par réseau (utm_source) · textes modifiables">3. Textes par réseau</SectionTitle>
            <div className="ax-net-grid">
              {PLATFORMS.map((p) => {
                const text = captions[p.key] || "";
                const n = countFor(p.key, text);
                return (
                  <div className="ax-net" key={p.key}>
                    <div className="ax-net-head">
                      <PlatformLogo p={p} />
                      {p.label}
                      {published[p.key] && (
                        <span className="ax-pill green ax-right" title={dateTimeFr(published[p.key])}>
                          publié {timeAgo(published[p.key])}
                        </span>
                      )}
                    </div>
                    <textarea className="ax-textarea" value={text} onChange={(e) => setTexts((t) => ({ ...t, [p.key]: e.target.value }))} />
                    <div className="ax-net-foot">
                      <span className={`ax-net-count${n > p.limit ? " over" : ""}`}>
                        {n} / {p.limit}
                      </span>
                      <button type="button" className="ax-btn xs" title="Copier le texte et ouvrir le réseau" onClick={() => open(p)}>
                        <Icon name="external" size="sm" /> Ouvrir
                      </button>
                      <button type="button" className="ax-btn xs" title="Partage natif (téléphone) : image + texte" onClick={async () => (await shareNative(p.key)) && record(p.key)}>
                        <Icon name="share" size="sm" />
                      </button>
                      <button type="button" className="ax-btn xs" title="Planifier" onClick={() => setPlanFor(p)}>
                        <Icon name="calendar" size="sm" />
                      </button>
                      <button type="button" className="ax-btn xs primary" title="Marquer comme publié" onClick={() => record(p.key)}>
                        <Icon name="check" size="sm" />
                      </button>
                    </div>
                  </div>
                );
              })}
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
    </div>
  );
}

const WEEKDAYS = ["lun", "mar", "mer", "jeu", "ven", "sam", "dim"];

function Planning({ log }) {
  const toast = useToast();
  const confirm = useConfirm();
  const [month, setMonth] = useState(() => {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), 1);
  });
  const news = useJson("data/news.json");
  const entries = log.entries;

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
    for (const e of entries || []) {
      const d = new Date(e.date);
      const k = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
      if (!m.has(k)) m.set(k, []);
      m.get(k).push(e);
    }
    return m;
  }, [entries]);

  const planned = (entries || []).filter((e) => e.status === "planned").sort((a, b) => String(a.date).localeCompare(String(b.date)));
  const failed = (entries || []).filter((e) => e.status === "failed");
  const closing = (news.data || []).filter((n) => {
    const d = daysUntil(n.date_limite);
    return !n.cloture && d !== null && d >= 0 && d <= 5 && !(entries || []).some((e) => e.itemId === n.id);
  });

  async function markDone(e) {
    try {
      const saved = await api("/api/admin/social", { method: "POST", body: { ...e, status: "published", date: new Date().toISOString() } });
      log.setEntries((all) => all.map((x) => (x.id === e.id ? saved : x)));
      toast.success("Marqué comme publié");
    } catch (err) {
      toast.error("Échec", err.message);
    }
  }
  // Remet une publication automatique ratée dans la file, pour maintenant.
  async function retry(e) {
    try {
      const saved = await api("/api/admin/social", { method: "POST", body: { ...e, status: "planned", date: new Date().toISOString(), result: "" } });
      log.setEntries((all) => all.map((x) => (x.id === e.id ? saved : x)));
      toast.success("Remise en file", "Le robot réessaie à son prochain passage (15 minutes au plus).");
    } catch (err) {
      toast.error("Échec", err.message);
    }
  }
  async function remove(e) {
    if (!(await confirm({ title: "Retirer cette entrée ?", confirmLabel: "Retirer", tone: "danger" }))) return;
    await api(`/api/admin/social?id=${encodeURIComponent(e.id)}`, { method: "DELETE" });
    log.setEntries((all) => all.filter((x) => x.id !== e.id));
  }

  if (!entries) return <Skeleton rows={6} />;
  const today = new Date();
  return (
    <div className="ax-grid main-side">
      <section className="ax-card">
        <div className="ax-card-head">
          <button type="button" className="ax-btn icon sm" onClick={() => setMonth((m) => new Date(m.getFullYear(), m.getMonth() - 1, 1))} aria-label="Mois précédent">
            <Icon name="chevronLeft" />
          </button>
          <strong style={{ textTransform: "capitalize" }}>{month.toLocaleDateString("fr-FR", { month: "long", year: "numeric" })}</strong>
          <button type="button" className="ax-btn icon sm" onClick={() => setMonth((m) => new Date(m.getFullYear(), m.getMonth() + 1, 1))} aria-label="Mois suivant">
            <Icon name="chevronRight" />
          </button>
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
                {list.slice(0, 4).map((e) => {
                  const p = PLATFORMS.find((x) => x.key === e.platform);
                  return (
                    <button key={e.id} type="button" className={`ax-cal-ev ${e.status}`} style={{ background: p?.color || "#555" }} title={`${p?.label} · ${e.title}${e.status === "planned" ? (e.auto ? " (publication automatique)" : " (planifié)") : e.status === "failed" ? ` (échec : ${e.result})` : ""}`} onClick={() => (e.status === "planned" && !e.auto ? markDone(e) : null)}>
                      {e.title}
                    </button>
                  );
                })}
                {list.length > 4 && <span className="ax-hint">+{list.length - 4}</span>}
              </div>
            );
          })}
        </div>
        <p className="ax-hint ax-mt">Pointillés = planifié (clique pour marquer comme publié). Plein = publié. Historique partagé entre tous tes appareils.</p>
      </section>
      <aside className="ax-stack">
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
                  <PlatformLogo p={PLATFORMS.find((p) => p.key === e.platform) || PLATFORMS[0]} />
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
          <SectionTitle>À venir</SectionTitle>
          {!planned.length ? (
            <p className="ax-muted" style={{ margin: 0 }}>
              Rien de planifié. Depuis le composer, l&apos;icône 📅 d&apos;un réseau planifie une publication.
            </p>
          ) : (
            <ul className="ax-list">
              {planned.map((e) => (
                <li key={e.id}>
                  <PlatformLogo p={PLATFORMS.find((p) => p.key === e.platform) || PLATFORMS[0]} />
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
                  <PlatformLogo p={PLATFORMS.find((p) => p.key === e.platform) || PLATFORMS[0]} />
                  <span className="ax-list-main">
                    <span className="ax-list-title">{e.title}</span>
                    <span className="ax-list-meta">{timeAgo(e.date)}</span>
                  </span>
                  <button type="button" className="ax-btn ghost icon sm" aria-label="Retirer" onClick={() => remove(e)}>
                    <Icon name="x" size="sm" />
                  </button>
                </li>
              ))}
          </ul>
        </section>
      </aside>
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
        Choisis un contenu : le studio fabrique le visuel et un texte adapté à chaque réseau, avec un lien suivi pour savoir d&apos;où viennent tes visiteurs. Tu publies toi-même, en un clic.
      </Hero>
      <Tabs tabs={TABS.map((t) => (t.key === "planning" && planned ? { ...t, count: planned } : t))} value={tab} onChange={setTab} />
      {tab === "composer" ? <Composer log={log} /> : <Planning log={log} />}
    </>
  );
}
