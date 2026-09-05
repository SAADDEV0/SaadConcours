"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useConfirm } from "../ui/ConfirmProvider";
import { useToast } from "../ui/ToastProvider";
import { useLocalStorage } from "../../_lib/useLocalStorage";
import { CONTENT_TYPES, typeMetaFor, formatDateFr } from "./lib/contentTypes";
import { buildHashtags } from "./lib/hashtags";
import { buildText, VARIANTS } from "./lib/textVariants";
import { FORMATS, drawCard } from "./lib/image";
import { seoChecks } from "./lib/seo";
import { HISTORY_KEY, addHistoryEntry, removeHistoryEntry, lastPublished } from "./lib/history";
import { shareNative, whatsappWebUrl, instagramUrl } from "./lib/share";
import PostPicker from "./PostPicker";
import HistoryPanel from "./HistoryPanel";
import ScheduleModal from "./ScheduleModal";
import { FacebookPreview, InstagramPreview, WhatsAppPreview } from "./PlatformPreview";

/* -------------------------------------------------------------------
 * V3 — Toujours "tu génères, tu postes toi-même" (pas d'API Instagram/
 * Facebook de publication automatisée branchée en dehors de la Page FB),
 * mais organisé en deux colonnes (sélection à gauche, résultat à droite en
 * onglets internes) plutôt qu'en cartes empilées, avec : texte éditable +
 * variantes de ton, hashtags ajustables à la main, un historique local
 * (déjà publié ? déjà généré ?) et un partage natif (Web Share API) qui
 * pousse l'image + le texte directement dans WhatsApp/toute app installée
 * via la feuille de partage du système. Le détail de génération (texte,
 * image canvas, hashtags, SEO) vit dans ./lib — ce fichier n'orchestre que
 * l'état et l'UI.
 * ---------------------------------------------------------------- */

const RIGHT_TABS = [
  { key: "texte", icon: "📝", label: "Texte" },
  { key: "image", icon: "🖼️", label: "Image" },
  { key: "apercu", icon: "👀", label: "Aperçus" },
  { key: "historique", icon: "🗂️", label: "Historique" },
];

function EmptyPrompt() {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">👈</div>
      Choisis un concours, une actu, un article ou une évaluation dans la liste à gauche.
    </div>
  );
}

export default function SocialGeneratorPanel() {
  const [tab, setTab] = useState("concours");
  const [raw, setRaw] = useState({ concours: null, news: null, blog: null, evaluation: null });
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [format, setFormat] = useState(FORMATS[0]);
  const [variant, setVariant] = useState(0);
  const [hashtags, setHashtags] = useState([]);
  const [hashtagInput, setHashtagInput] = useState("");
  const [textOverride, setTextOverride] = useState(null);
  const [rightTab, setRightTab] = useState("texte");
  const [imgSrc, setImgSrc] = useState(null);
  const [copied, setCopied] = useState(false);
  const [sharing, setSharing] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [publishResult, setPublishResult] = useState(null); // { ok, url, error }
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [history, setHistory] = useLocalStorage(HISTORY_KEY, []);
  const canvasRef = useRef(null);
  const confirm = useConfirm();
  const toast = useToast();

  useEffect(() => {
    CONTENT_TYPES.forEach((t) => {
      fetch(t.endpoint)
        .then((r) => r.json())
        .then((d) => setRaw((prev) => ({ ...prev, [t.key]: Array.isArray(d) ? d : [] })))
        .catch(() => setRaw((prev) => ({ ...prev, [t.key]: [] })));
    });
  }, []);

  const meta = typeMetaFor(tab);
  const list = raw[tab];

  const filtered = useMemo(() => {
    if (!list) return null;
    const q = query.trim().toLowerCase();
    let src = meta.filterAvailable(list);
    src = meta.reverseForRecent ? [...src].reverse() : [...src];
    if (!q) return src.slice(0, 25);
    return src.filter((i) => meta.searchText(i).toLowerCase().includes(q)).slice(0, 25);
  }, [list, query, meta]);

  const generatedText = useMemo(
    () => (selected ? buildText(tab, selected, { variant, hashtags: hashtags.join(" ") }) : ""),
    [tab, selected, variant, hashtags]
  );
  const text = textOverride ?? generatedText;
  const checks = selected ? seoChecks(text, hashtags.length) : [];

  useEffect(() => {
    if (!selected || !canvasRef.current) return;
    const canvas = canvasRef.current;
    canvas.width = format.width;
    canvas.height = format.height;
    drawCard(canvas, tab, selected);
    setImgSrc(canvas.toDataURL("image/png"));
    setPublishResult(null);
  }, [selected, tab, format]);

  function switchTab(key) {
    setTab(key);
    setSelected(null);
    setHashtags([]);
    setVariant(0);
    setTextOverride(null);
    setQuery("");
    setCopied(false);
    setPublishResult(null);
  }

  function pick(item) {
    setSelected(item);
    setVariant(0);
    setHashtags(buildHashtags(tab, item));
    setTextOverride(null);
    setCopied(false);
    setPublishResult(null);
  }

  function selectVariant(idx) {
    setVariant(idx);
    setTextOverride(null);
  }

  function addHashtag() {
    const rawTag = hashtagInput.trim();
    if (!rawTag) return;
    let t = rawTag.startsWith("#") ? rawTag : "#" + rawTag;
    t = t.replace(/\s+/g, "");
    if (t.length > 1 && !hashtags.includes(t)) setHashtags((prev) => [...prev, t]);
    setHashtagInput("");
  }

  function removeHashtag(t) {
    setHashtags((prev) => prev.filter((h) => h !== t));
  }

  function badgeFor(item) {
    const dup = lastPublished(history, tab, item.id);
    return dup ? `Déjà publié le ${formatDateFr(dup.createdAt?.slice(0, 10))}` : null;
  }

  function pushHistory(status, extra) {
    if (!selected) return;
    setHistory((prev) =>
      addHistoryEntry(prev, {
        kind: tab,
        itemId: selected.id,
        itemLabel: meta.listTitle(selected),
        formatKey: format.key,
        formatLabel: format.label,
        variant,
        status,
        ...extra,
      })
    );
  }

  async function copyText() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      pushHistory("copie");
    } catch {
      // API clipboard indisponible (non-HTTPS/local) — le textarea reste
      // sélectionnable/copiable à la main en secours.
    }
  }

  function triggerDownload() {
    if (!canvasRef.current || !selected) return;
    const link = document.createElement("a");
    link.download = `saadconcours-${tab}-${format.key}-${selected.id}.png`;
    link.href = canvasRef.current.toDataURL("image/png");
    link.click();
  }

  function downloadImage() {
    triggerDownload();
    pushHistory("telecharge");
  }

  // Ouvre la feuille de partage native (mobile ou desktop récent) avec
  // l'image + le texte déjà attachés — WhatsApp y apparaît comme cible
  // dès que l'app/l'extension est installée, il ne reste qu'à choisir le
  // contact. Se rabat automatiquement sur le mode "copier + télécharger +
  // ouvrir WhatsApp Web" quand le navigateur ne supporte pas le partage de
  // fichiers (voir lib/share.js pour le pourquoi il n'existe pas de mieux).
  async function handleShare() {
    if (!canvasRef.current || !selected || sharing) return;
    setSharing(true);
    try {
      const filename = `saadconcours-${tab}-${format.key}-${selected.id}.png`;
      const result = await shareNative({ canvas: canvasRef.current, text, filename });
      if (result === "shared") {
        pushHistory("partage");
        toast.success("Partagé.");
      } else if (result === "unsupported") {
        await handleWhatsappFallback();
      }
    } finally {
      setSharing(false);
    }
  }

  async function handleWhatsappFallback() {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // pas grave — le texte reste visible/copiable depuis l'onglet Texte
    }
    triggerDownload();
    pushHistory("partage");
    window.open(whatsappWebUrl(text), "_blank", "noopener,noreferrer");
    toast.info("Texte copié et image téléchargée — ajoute l'image en pièce jointe dans WhatsApp.");
  }

  async function handleInstagram() {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // idem
    }
    triggerDownload();
    pushHistory("telecharge");
    window.open(instagramUrl(), "_blank", "noopener,noreferrer");
    toast.info("Texte copié et image téléchargée — colle-les dans un nouveau post Instagram.");
  }

  // Publie directement sur la Page Facebook (API Graph côté serveur — voir
  // app/api/admin/publish-facebook/route.js). Action publique et
  // irréversible une fois envoyée, donc confirmation explicite avant l'appel
  // réseau plutôt qu'un simple clic — et un avertissement en plus si ce
  // même contenu a déjà été publié une fois (voir lib/history.js).
  async function publishToFacebook() {
    if (!imgSrc || !text || publishing || !selected) return;
    const dup = lastPublished(history, tab, selected.id);
    const ok = await confirm({
      title: "Publier sur Facebook ?",
      body: dup
        ? `⚠️ Ce contenu a déjà été publié le ${formatDateFr(dup.createdAt?.slice(0, 10))}. Publier quand même ? Le post sera immédiatement visible sur la Page Facebook de SaadConcours.`
        : "Ce post sera immédiatement visible sur la Page Facebook de SaadConcours.",
      confirmLabel: "Publier",
    });
    if (!ok) return;
    setPublishing(true);
    setPublishResult(null);
    try {
      const res = await fetch("/api/admin/publish-facebook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageBase64: imgSrc, caption: text }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.error) {
        setPublishResult({ ok: false, error: data.error || "Échec de la publication." });
      } else {
        setPublishResult({ ok: true, url: data.url });
        pushHistory("publie", { url: data.url || null });
      }
    } catch {
      setPublishResult({ ok: false, error: "Impossible de joindre le serveur." });
    } finally {
      setPublishing(false);
    }
  }

  function confirmSchedule(iso) {
    pushHistory("programme", { scheduledFor: iso });
    setScheduleOpen(false);
    toast.success("Programmé — retrouve-le dans l'onglet Historique.");
  }

  function reopenFromHistory(entry) {
    const items = raw[entry.kind];
    const item = (items || []).find((i) => i.id === entry.itemId);
    if (!item) {
      toast.error("Ce contenu n'existe plus (supprimé depuis).");
      return;
    }
    setTab(entry.kind);
    setQuery("");
    setSelected(item);
    setVariant(entry.variant ?? 0);
    setHashtags(buildHashtags(entry.kind, item));
    setTextOverride(null);
    const fmt = FORMATS.find((f) => f.key === entry.formatKey) || FORMATS[0];
    setFormat(fmt);
    setCopied(false);
    setPublishResult(null);
    setRightTab("texte");
  }

  return (
    <div className="social-gen-layout">
      <div className="social-gen-sidebar">
        <PostPicker
          tab={tab}
          onSwitchTab={switchTab}
          query={query}
          onQueryChange={setQuery}
          filtered={filtered}
          meta={meta}
          selectedId={selected?.id}
          onPick={pick}
          badgeFor={badgeFor}
        />
      </div>

      <div className="social-gen-main">
        <div className="admin-card">
          <div className="admin-view-toggle social-gen-tabs">
            {RIGHT_TABS.map((t) => (
              <button
                type="button"
                key={t.key}
                className={"admin-view-toggle-btn" + (rightTab === t.key ? " active" : "")}
                onClick={() => setRightTab(t.key)}
              >
                {t.icon} {t.label}
                {t.key === "historique" && history.length > 0 ? ` (${history.length})` : ""}
              </button>
            ))}
          </div>

          {/* Les 4 panneaux restent montés en permanence (juste masqués en CSS)
              plutôt que démontés par onglet — le <canvas> a besoin d'exister
              dans le DOM dès qu'un contenu est sélectionné pour que l'effet
              de dessin (qui ne dépend que de selected/tab/format, pas de
              rightTab) puisse toujours l'atteindre, même si l'onglet actif
              au moment de la sélection n'est pas "Image". */}
          <div style={{ display: rightTab === "texte" ? "" : "none" }}>
            {selected ? (
              <div className="social-gen-pane">
                <div className="social-variant-row">
                  {VARIANTS.map((v, i) => (
                    <button
                      type="button"
                      key={v.key}
                      className={"social-variant-btn" + (variant === i ? " active" : "")}
                      onClick={() => selectVariant(i)}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>

                <textarea
                  className="social-gen-textarea"
                  style={{ minHeight: 240, fontFamily: "monospace", fontSize: ".85rem" }}
                  value={text}
                  onChange={(e) => setTextOverride(e.target.value)}
                />

                <div className="social-hashtag-editor">
                  {hashtags.map((h) => (
                    <span className="social-hashtag-chip" key={h}>
                      {h}
                      <button type="button" onClick={() => removeHashtag(h)} aria-label={`Retirer ${h}`}>
                        ×
                      </button>
                    </span>
                  ))}
                  <input
                    className="social-hashtag-input"
                    placeholder="+ ajouter un tag"
                    value={hashtagInput}
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

                <div className="seo-checks">
                  {checks.map((c) => (
                    <span key={c.label} className={"seo-check-chip" + (c.ok ? " ok" : " warn")} title={c.hint}>
                      {c.ok ? "✅" : "⚠️"} {c.label}
                    </span>
                  ))}
                </div>

                <div className="admin-row-actions" style={{ marginTop: 10 }}>
                  <button type="button" className="admin-btn" onClick={copyText}>
                    {copied ? "✓ Copié" : "Copier le texte"}
                  </button>
                  {textOverride !== null && (
                    <button type="button" className="admin-btn secondary" onClick={() => setTextOverride(null)}>
                      ↺ Réinitialiser
                    </button>
                  )}
                  <button type="button" className="admin-btn secondary" onClick={() => setScheduleOpen(true)}>
                    🕒 Programmer
                  </button>
                </div>
              </div>
            ) : (
              <EmptyPrompt />
            )}
          </div>

          <div style={{ display: rightTab === "image" ? "" : "none" }}>
            {selected ? (
              <div className="social-gen-pane">
                <h3 className="social-pane-subtitle">
                  Image ({format.width}×{format.height})
                </h3>
                <div className="format-picker">
                  {FORMATS.map((f) => (
                    <button
                      type="button"
                      key={f.key}
                      className={"format-picker-btn" + (f.key === format.key ? " active" : "")}
                      onClick={() => setFormat(f)}
                    >
                      <strong>{f.label}</strong>
                      <span>{f.sub}</span>
                    </button>
                  ))}
                </div>
                <canvas
                  ref={canvasRef}
                  width={format.width}
                  height={format.height}
                  className="social-gen-canvas"
                  style={{ aspectRatio: `${format.width} / ${format.height}` }}
                />
                <div className="admin-row-actions" style={{ marginTop: 10 }}>
                  <button type="button" className="admin-btn" onClick={downloadImage}>
                    ⬇ Télécharger l'image
                  </button>
                  <button type="button" className="admin-btn share-btn" onClick={handleShare} disabled={sharing}>
                    {sharing ? "Partage..." : "📤 Partager"}
                  </button>
                  <button type="button" className="admin-btn wa-btn" onClick={handleWhatsappFallback}>
                    🟢 WhatsApp
                  </button>
                  <button type="button" className="admin-btn ig-btn" onClick={handleInstagram}>
                    📸 Instagram
                  </button>
                  <button type="button" className="admin-btn fb-publish-btn" onClick={publishToFacebook} disabled={publishing}>
                    {publishing ? "Publication..." : "📘 Publier sur Facebook"}
                  </button>
                </div>
                <p className="admin-image-hint" style={{ marginTop: 8 }}>
                  « Partager » ouvre le sélecteur natif (WhatsApp, Messages...) avec l'image et le texte déjà attachés
                  quand le navigateur le permet. Sinon, texte copié + image téléchargée automatiquement : il ne reste
                  qu'à joindre l'image dans la conversation.
                </p>
                {publishResult && (
                  <p className={"fb-publish-result" + (publishResult.ok ? " ok" : " error")}>
                    {publishResult.ok ? (
                      <>
                        ✅ Publié sur la Page Facebook.{" "}
                        {publishResult.url && (
                          <a href={publishResult.url} target="_blank" rel="noopener noreferrer">
                            Voir le post ↗
                          </a>
                        )}
                      </>
                    ) : (
                      <>⚠️ {publishResult.error}</>
                    )}
                  </p>
                )}
              </div>
            ) : (
              <EmptyPrompt />
            )}
          </div>

          <div style={{ display: rightTab === "apercu" ? "" : "none" }}>
            {selected ? (
              <div className="social-gen-pane">
                <p className="admin-image-hint" style={{ marginBottom: 16 }}>
                  Rendu approximatif (troncature de la légende incluse) — la mise en page réelle varie légèrement selon
                  l'app et l'appareil.
                </p>
                <div className="social-preview-grid">
                  <div className="social-preview-col">
                    <div className="social-preview-label">Facebook</div>
                    <FacebookPreview imgSrc={imgSrc} text={text} />
                  </div>
                  <div className="social-preview-col">
                    <div className="social-preview-label">Instagram</div>
                    <InstagramPreview imgSrc={imgSrc} text={text} />
                  </div>
                  <div className="social-preview-col">
                    <div className="social-preview-label">WhatsApp</div>
                    <WhatsAppPreview imgSrc={imgSrc} text={text} />
                  </div>
                </div>
              </div>
            ) : (
              <EmptyPrompt />
            )}
          </div>

          <div style={{ display: rightTab === "historique" ? "" : "none" }}>
            <HistoryPanel
              history={history}
              onReopen={reopenFromHistory}
              onRemove={(id) => setHistory((prev) => removeHistoryEntry(prev, id))}
              onCancelSchedule={(id) => setHistory((prev) => removeHistoryEntry(prev, id))}
            />
          </div>
        </div>
      </div>

      <ScheduleModal
        open={scheduleOpen}
        onClose={() => setScheduleOpen(false)}
        onConfirm={confirmSchedule}
        itemLabel={selected ? meta.listTitle(selected) : ""}
      />
    </div>
  );
}
