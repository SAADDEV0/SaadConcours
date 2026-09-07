"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useConfirm } from "../ui/ConfirmProvider";
import { useToast } from "../ui/ToastProvider";
import { useLocalStorage } from "../../_lib/useLocalStorage";
import { CONTENT_TYPES, formatDateFr, normalizeText, typeMetaFor, urlFor } from "./lib/contentTypes";
import { buildHashtags } from "./lib/hashtags";
import { buildText, VARIANTS } from "./lib/textVariants";
import { FORMATS, THEMES, drawCard } from "./lib/image";
import { seoChecks } from "./lib/seo";
import {
  HISTORY_KEY,
  addEntry,
  publicationIndex,
  publishedOn,
  readLegacyHistory,
  reminders as pendingReminders,
  removeEntry,
  updateEntry,
} from "./lib/history";
import { canvasToBlob, copyText as copyToClipboard, downloadBlob } from "./lib/share";
import { PLATFORMS, PlatformIcon, platformFor } from "./lib/platforms";
import ContentPicker from "./ContentPicker";
import ShareSheet from "./ShareSheet";
import HistoryPanel from "./HistoryPanel";
import ReminderModal from "./ReminderModal";
import { FacebookPreview, InstagramPreview, WhatsAppPreview } from "./PlatformPreview";
import "./social-studio.css";

/* ------------------------------ Studio de publication ------------------------------
 * Réécriture complète du générateur. Trois partis pris :
 *
 *  1. **Tout est manuel.** Plus aucune publication automatique (l'API Page
 *     Facebook a été retirée) : le studio fabrique le post, l'humain le
 *     publie. Ça évite un jeton Meta à maintenir et des posts partis sans
 *     relecture.
 *  2. **Image + texte voyagent ensemble.** Le bouton Partager ouvre la
 *     feuille de partage (voir ShareSheet) qui envoie le PNG *et* la légende
 *     d'un coup, au lieu de laisser recomposer le post à la main.
 *  3. **L'historique est par réseau.** Publier sur Facebook n'empêche pas de
 *     publier sur Instagram, mais republier au même endroit prévient.
 *
 * Ce fichier n'orchestre que l'état ; la génération (texte, image, hashtags,
 * SEO) vit dans ./lib, l'affichage dans les composants frères.
 * ------------------------------------------------------------------------ */

const VIEWS = [
  { key: "composer", icon: "✍️", label: "Composer" },
  { key: "apercu", icon: "👀", label: "Aperçus" },
  { key: "historique", icon: "🗂️", label: "Historique" },
];

export default function SocialStudio() {
  const [raw, setRaw] = useState(null); // { concours: [], news: [], … }
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null); // { kind, item }
  const [format, setFormat] = useState(FORMATS[0]);
  const [variant, setVariant] = useState(0);
  const [hashtags, setHashtags] = useState([]);
  const [hashtagInput, setHashtagInput] = useState("");
  const [textOverride, setTextOverride] = useState(null);
  const [view, setView] = useState("composer");
  const [imgSrc, setImgSrc] = useState(null);
  const [blob, setBlob] = useState(null);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [reminderOpen, setReminderOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useLocalStorage(HISTORY_KEY, []);
  const canvasRef = useRef(null);
  const migrated = useRef(false);
  const confirm = useConfirm();
  const toast = useToast();

  /* ------------------------------ Données ------------------------------ */

  const load = useCallback(() => {
    setLoading(true);
    Promise.all(
      CONTENT_TYPES.map((t) =>
        fetch(t.endpoint)
          .then((r) => (r.ok ? r.json() : []))
          .then((d) => [t.key, Array.isArray(d) ? d : []])
          .catch(() => [t.key, []])
      )
    ).then((pairs) => {
      setRaw(Object.fromEntries(pairs));
      setLoading(false);
    });
  }, []);

  useEffect(load, [load]);

  // Reprise de l'historique v1 (avant le passage à une entrée par réseau) —
  // une seule fois, et seulement si la v2 est encore vide, pour ne jamais
  // écraser des entrées récentes par des anciennes.
  useEffect(() => {
    if (migrated.current) return;
    migrated.current = true;
    setHistory((prev) => {
      if (prev.length) return prev;
      const legacy = readLegacyHistory();
      return legacy.length ? legacy : prev;
    });
  }, [setHistory]);

  // Une seule liste plate, cherchable d'un coup, avec le texte de recherche
  // déjà normalisé : le sélecteur n'a plus qu'à filtrer.
  const entries = useMemo(() => {
    if (!raw) return [];
    const out = [];
    for (const type of CONTENT_TYPES) {
      const list = type.filterAvailable(raw[type.key] || []);
      const ordered = type.reverseForRecent ? [...list].reverse() : list;
      for (const item of ordered) {
        out.push({
          kind: type.key,
          id: item.id,
          item,
          title: type.listTitle(item) || String(item.id),
          meta: type.listMeta(item),
          right: type.listRight(item),
          search: normalizeText(`${type.searchText(item)} ${type.listTitle(item) || ""}`),
        });
      }
    }
    return out;
  }, [raw]);

  const pubIndex = useMemo(() => publicationIndex(history), [history]);
  const reminders = useMemo(() => pendingReminders(history), [history]);

  /* ------------------------------ Post courant ------------------------------ */

  const kind = selected?.kind;
  const item = selected?.item;
  const meta = kind ? typeMetaFor(kind) : null;
  const theme = kind ? THEMES[kind] : null;

  const generatedText = useMemo(
    () => (item ? buildText(kind, item, { variant, hashtags: hashtags.join(" ") }) : ""),
    [kind, item, variant, hashtags]
  );
  const text = textOverride ?? generatedText;
  const checks = item ? seoChecks(text, hashtags.length) : [];
  const publishedHere = item ? publishedOn(pubIndex, kind, item.id) : null;
  const itemLabel = item && meta ? meta.listTitle(item) : "";
  const filename = item ? `saadconcours-${kind}-${format.key}-${item.id}.png` : "post.png";

  // Le canvas est redessiné à chaque changement de contenu/format, et le PNG
  // est produit dans la foulée : navigator.share() doit recevoir un fichier
  // *déjà prêt* au moment du clic, sinon l'attente de toBlob() consomme le
  // « geste utilisateur » et le partage natif est refusé par le navigateur.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!item || !canvas) {
      setImgSrc(null);
      setBlob(null);
      return;
    }
    let cancelled = false;
    canvas.width = format.width;
    canvas.height = format.height;
    drawCard(canvas, kind, item);
    setImgSrc(canvas.toDataURL("image/png"));
    canvasToBlob(canvas).then((b) => {
      if (!cancelled) setBlob(b);
    });
    return () => {
      cancelled = true;
    };
  }, [item, kind, format]);

  /* ------------------------------ Actions ------------------------------ */

  function pick(entry) {
    setSelected({ kind: entry.kind, item: entry.item });
    setVariant(0);
    setHashtags(buildHashtags(entry.kind, entry.item));
    setTextOverride(null);
    setCopied(false);
    setView("composer");
  }

  const track = useCallback(
    (action, platform, extra) => {
      if (!item) return;
      setHistory((prev) =>
        addEntry(prev, {
          kind,
          itemId: item.id,
          itemLabel: meta.listTitle(item),
          platform: platform || "autre",
          action,
          formatKey: format.key,
          variant,
          ...extra,
        })
      );
    },
    [item, kind, meta, format, variant, setHistory]
  );

  function addHashtag() {
    const value = hashtagInput.trim();
    if (!value) return;
    const tag = (value.startsWith("#") ? value : "#" + value).replace(/\s+/g, "");
    if (tag.length > 1 && !hashtags.includes(tag)) setHashtags((prev) => [...prev, tag]);
    setHashtagInput("");
  }

  async function handleCopyText() {
    const ok = await copyToClipboard(text);
    if (!ok) {
      toast.error("Copie impossible — sélectionne le texte à la main.");
      return;
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    track("copie", "autre");
  }

  function handleDownload() {
    if (!blob) return;
    downloadBlob(blob, filename);
    track("telecharge", "autre");
  }

  function handlePublished(platformKey) {
    track("publie", platformKey);
    setShareOpen(false);
    toast.success(`Enregistré comme publié sur ${platformFor(platformKey).label}.`);
  }

  function handleReminder(iso) {
    track("rappel", "autre", { dueAt: iso });
    setReminderOpen(false);
    toast.success("Rappel créé — visible dans l'historique.");
  }

  function reopen(entry) {
    const list = raw?.[entry.kind] || [];
    const found = list.find((i) => i.id === entry.itemId);
    if (!found) {
      toast.error("Ce contenu n'existe plus.");
      return;
    }
    setSelected({ kind: entry.kind, item: found });
    setVariant(entry.variant ?? 0);
    setHashtags(buildHashtags(entry.kind, found));
    setTextOverride(null);
    setFormat(FORMATS.find((f) => f.key === entry.formatKey) || FORMATS[0]);
    setCopied(false);
    setView("composer");
  }

  async function clearHistory() {
    const ok = await confirm({
      title: "Vider l'historique ?",
      body: "Les repères « déjà publié » de tous les réseaux seront perdus. Cette action est définitive.",
      confirmLabel: "Vider",
      tone: "danger",
    });
    if (ok) setHistory([]);
  }

  /* ------------------------------ Rendu ------------------------------ */

  const dueCount = reminders.filter((r) => new Date(r.dueAt).getTime() <= Date.now()).length;

  return (
    <div className="sgx">
      <header className="sgx-bar">
        <div className="sgx-bar-title">
          <span className="sgx-bar-mark">📣</span>
          <div>
            <h1>Studio de publication</h1>
            <p>Image + texte prêts à poster — publication manuelle, historique par réseau.</p>
          </div>
        </div>
        <div className="sgx-bar-actions">
          <div className="sgx-views">
            {VIEWS.map((v) => (
              <button
                type="button"
                key={v.key}
                className={"sgx-view-btn" + (view === v.key ? " active" : "")}
                onClick={() => setView(v.key)}
              >
                <span aria-hidden="true">{v.icon}</span> {v.label}
                {v.key === "historique" && dueCount > 0 && <em className="sgx-badge">{dueCount}</em>}
              </button>
            ))}
          </div>
          <button type="button" className="admin-icon-btn" title="Recharger les contenus" onClick={load}>
            ⟳
          </button>
        </div>
      </header>

      {/* Contenu sélectionné — toujours visible, quel que soit l'onglet. */}
      <section className={"sgx-target" + (item ? " filled" : "")}>
        {item ? (
          <>
            <span className="sgx-target-badge" style={{ background: theme.grad[1] }}>
              {meta.tabIcon} {meta.tabLabel}
            </span>
            <div className="sgx-target-body">
              <h2>{itemLabel}</h2>
              <p>{meta.listMeta(item)}</p>
            </div>
            <div className="sgx-target-side">
              {publishedHere ? (
                <span className="sgx-target-pubs">
                  {PLATFORMS.filter((p) => publishedHere[p.key]).map((p) => (
                    <span
                      key={p.key}
                      className="sgx-dot lg"
                      style={{ background: p.gradient || p.color }}
                      title={`Publié sur ${p.label} le ${formatDateFr(publishedHere[p.key].slice(0, 10))}`}
                    >
                      <PlatformIcon platform={p.key} size={12} />
                    </span>
                  ))}
                </span>
              ) : (
                <span className="sgx-target-fresh">jamais publié</span>
              )}
              <a className="sgx-linkbtn" href={urlFor(kind, item)} target="_blank" rel="noopener noreferrer">
                Voir la page ↗
              </a>
              <button type="button" className="admin-btn secondary" onClick={() => setPickerOpen(true)}>
                Changer
              </button>
            </div>
          </>
        ) : (
          <button type="button" className="sgx-target-empty" onClick={() => setPickerOpen(true)} disabled={loading}>
            <span className="sgx-target-empty-icon">＋</span>
            <span>
              <strong>{loading ? "Chargement des contenus…" : "Choisir un contenu à publier"}</strong>
              <em>Concours, concours ouverts, articles de blog, évaluations — recherche instantanée</em>
            </span>
          </button>
        )}
      </section>

      {/* Les vues restent montées (masquées en CSS) : le <canvas> doit exister
          dans le DOM pour être dessiné même si l'onglet actif est l'historique
          au moment où l'on choisit un contenu. */}
      <div className={view === "composer" ? "" : "sgx-hidden"}>
        <div className="sgx-grid">
          <section className="sgx-panel">
            <div className="sgx-panel-head">
              <h3>Visuel</h3>
              <span className="sgx-panel-note">
                {format.width}×{format.height}
              </span>
            </div>
            <div className="sgx-formats">
              {FORMATS.map((f) => (
                <button
                  type="button"
                  key={f.key}
                  className={"sgx-format" + (f.key === format.key ? " active" : "")}
                  onClick={() => setFormat(f)}
                >
                  <span className="sgx-format-shape" style={{ aspectRatio: `${f.width} / ${f.height}` }} />
                  <strong>{f.label}</strong>
                  <em>{f.sub}</em>
                </button>
              ))}
            </div>
            <div className="sgx-canvas-wrap">
              <canvas
                ref={canvasRef}
                width={format.width}
                height={format.height}
                className="sgx-canvas"
                style={{ aspectRatio: `${format.width} / ${format.height}` }}
              />
              {!item && <div className="sgx-canvas-placeholder">Aucun contenu sélectionné</div>}
            </div>
            <button type="button" className="admin-btn secondary sgx-full" onClick={handleDownload} disabled={!blob}>
              ⬇ Télécharger l'image
            </button>
          </section>

          <section className="sgx-panel">
            <div className="sgx-panel-head">
              <h3>Texte</h3>
              <span className="sgx-panel-note">{text.trim().length} caractères</span>
            </div>

            <div className="sgx-tones">
              {VARIANTS.map((v, i) => (
                <button
                  type="button"
                  key={v.key}
                  className={"sgx-chip" + (variant === i ? " active" : "")}
                  onClick={() => {
                    setVariant(i);
                    setTextOverride(null);
                  }}
                  disabled={!item}
                >
                  {v.label}
                </button>
              ))}
              {textOverride !== null && (
                <button type="button" className="sgx-linkbtn" onClick={() => setTextOverride(null)}>
                  ↺ Texte d'origine
                </button>
              )}
            </div>

            <textarea
              className="sgx-textarea"
              value={item ? text : ""}
              placeholder="Choisis un contenu pour générer le texte du post."
              disabled={!item}
              onChange={(e) => setTextOverride(e.target.value)}
            />

            <div className="sgx-hashtags">
              {hashtags.map((h) => (
                <span className="sgx-tag" key={h}>
                  {h}
                  <button type="button" onClick={() => setHashtags((prev) => prev.filter((x) => x !== h))} aria-label={`Retirer ${h}`}>
                    ×
                  </button>
                </span>
              ))}
              <input
                className="sgx-tag-input"
                placeholder="+ hashtag"
                value={hashtagInput}
                disabled={!item}
                onChange={(e) => setHashtagInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addHashtag();
                  }
                }}
                onBlur={addHashtag}
              />
            </div>

            {item && (
              <div className="sgx-checks">
                {checks.map((c) => (
                  <span key={c.label} className={"sgx-check" + (c.ok ? " ok" : " warn")} title={c.hint}>
                    {c.ok ? "✓" : "!"} {c.label}
                  </span>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>

      <div className={view === "apercu" ? "" : "sgx-hidden"}>
        <section className="sgx-panel">
          <div className="sgx-panel-head">
            <h3>Aperçus</h3>
            <span className="sgx-panel-note">rendu approximatif, troncature incluse</span>
          </div>
          {item ? (
            <div className="sgx-previews">
              <div>
                <div className="sgx-preview-label">Facebook</div>
                <FacebookPreview imgSrc={imgSrc} text={text} />
              </div>
              <div>
                <div className="sgx-preview-label">Instagram</div>
                <InstagramPreview imgSrc={imgSrc} text={text} />
              </div>
              <div>
                <div className="sgx-preview-label">WhatsApp</div>
                <WhatsAppPreview imgSrc={imgSrc} text={text} />
              </div>
            </div>
          ) : (
            <div className="empty-state">Choisis un contenu pour voir les aperçus.</div>
          )}
        </section>
      </div>

      <div className={view === "historique" ? "" : "sgx-hidden"}>
        <section className="sgx-panel">
          <HistoryPanel
            history={history}
            reminders={reminders}
            onReopen={reopen}
            onRemove={(id) => setHistory((prev) => removeEntry(prev, id))}
            onDoneReminder={(id) => setHistory((prev) => updateEntry(prev, id, { done: true }))}
            onClear={clearHistory}
          />
        </section>
      </div>

      {/* Barre d'action collée en bas : le geste principal (Partager) reste
          atteignable quelle que soit la position de défilement. */}
      <div className="sgx-actionbar">
        <div className="sgx-actionbar-info">
          {item ? (
            publishedHere ? (
              <>
                <span className="sgx-warn-dot" /> Déjà publié sur{" "}
                {PLATFORMS.filter((p) => publishedHere[p.key])
                  .map((p) => p.label)
                  .join(", ")}
              </>
            ) : (
              "Prêt à publier"
            )
          ) : (
            "Aucun contenu sélectionné"
          )}
        </div>
        <div className="sgx-actionbar-btns">
          <button type="button" className="admin-btn secondary" onClick={() => setReminderOpen(true)} disabled={!item}>
            🕒 Rappel
          </button>
          <button type="button" className="admin-btn secondary" onClick={handleCopyText} disabled={!item}>
            {copied ? "✓ Copié" : "📋 Copier le texte"}
          </button>
          <button type="button" className="admin-btn sgx-btn-share" onClick={() => setShareOpen(true)} disabled={!item || !blob}>
            📤 Partager (image + texte)
          </button>
        </div>
      </div>

      <ContentPicker
        open={pickerOpen}
        onClose={() => setPickerOpen(false)}
        entries={entries}
        loading={loading}
        pubIndex={pubIndex}
        onPick={pick}
        selectedKey={item ? `${kind}:${item.id}` : null}
      />

      <ShareSheet
        open={shareOpen}
        onClose={() => setShareOpen(false)}
        blob={blob}
        filename={filename}
        text={text}
        url={item ? urlFor(kind, item) : ""}
        itemLabel={itemLabel}
        published={publishedHere}
        onPublish={handlePublished}
        onTrack={track}
      />

      <ReminderModal
        open={reminderOpen}
        onClose={() => setReminderOpen(false)}
        onConfirm={handleReminder}
        itemLabel={itemLabel}
      />
    </div>
  );
}
