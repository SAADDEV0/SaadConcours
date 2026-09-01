"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/* -------------------------------------------------------------------
 * Turns a concours or an actu "concours ouvert" into a ready-to-post
 * Instagram/Facebook/WhatsApp text + a share image, generated client-side
 * on a <canvas> (no image-generation dependency, no server round-trip).
 * Deliberately "generate, you post" rather than auto-posting — there's no
 * Instagram/Facebook API wiring here, just making each manual post take
 * 10 seconds instead of being its own small writing/design task.
 * ---------------------------------------------------------------- */

const SITE_URL = "https://www.saadconcours.space";

// Presets instead of raw width/height inputs — the actual choice that
// matters is "which platform/placement am I posting this to", the pixel
// dimensions are just what falls out of that. Each format re-renders the
// same layout at a different canvas size (see drawCard's proportional units).
const FORMATS = [
  { key: "carre", label: "Carré", sub: "Post Instagram / Facebook", width: 1080, height: 1080 },
  { key: "portrait", label: "Portrait", sub: "Post Instagram (recommandé)", width: 1080, height: 1350 },
  { key: "story", label: "Story", sub: "Story IG/FB · Statut WhatsApp", width: 1080, height: 1920 },
  { key: "paysage", label: "Paysage", sub: "Partage lien Facebook", width: 1200, height: 630 },
];

function daysUntil(dateStr) {
  if (!dateStr) return null;
  return Math.round((new Date(dateStr + "T00:00:00") - new Date(new Date().toDateString())) / 86400000);
}

function joinLoc(a, b) {
  return [a, b].filter(Boolean).join(" — ");
}

function formatDateFr(dateStr) {
  if (!dateStr) return null;
  try {
    return new Date(dateStr + "T00:00:00").toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" });
  } catch {
    return dateStr;
  }
}

/* ------------------------------ SEO hashtags ------------------------------
 * A handful of specific, relevant tags beats thirty generic ones (both for
 * Instagram's own ranking and for not looking spammy) — always the same 3
 * brand/category tags, plus whatever's specific to this item (filière,
 * établissement, ville), capped at 8 total.
 * ------------------------------------------------------------------------ */

function toHashtag(s) {
  const cleaned = String(s || "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim();
  if (!cleaned) return null;
  return (
    "#" +
    cleaned
      .split(" ")
      .filter(Boolean)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join("")
  );
}

function buildHashtags(kind, item) {
  const tags = new Set(["#ConcoursMaroc", "#MasterMaroc", "#EtudiantMaroc"]);
  const filiereTag = toHashtag(item.filiere);
  if (filiereTag) tags.add(filiereTag);
  const etabTag = toHashtag(item.etablissement);
  if (etabTag) tags.add(etabTag);
  const villeTag = toHashtag(item.ville);
  if (villeTag) tags.add("#Concours" + villeTag.slice(1));
  if (kind === "concours" && item.master_reel && tags.size < 8) {
    const masterTag = toHashtag(item.master_reel);
    if (masterTag) tags.add(masterTag);
  }
  return [...tags].slice(0, 8);
}

function buildText(kind, item) {
  const hashtags = buildHashtags(kind, item).join(" ");
  if (kind === "concours") {
    const lines = [
      "📚 Nouveau sujet disponible sur SaadConcours",
      "",
      joinLoc(item.etablissement, item.ville),
      item.filiere || null,
      item.annee ? `Session ${item.annee}` : null,
      "",
      item.corrige_md ? "✅ Corrigé indicatif inclus" : "Sujet avec énoncé complet",
      "",
      `👉 ${SITE_URL}/concours/${item.id}`,
      "",
      "Gratuit, sans compte, sans pub.",
      "",
      hashtags,
    ];
    return lines.filter((l) => l !== null && l !== undefined).join("\n");
  }

  const days = daysUntil(item.date_limite);
  const urgent = days !== null && days >= 0 && days <= 7;
  // date_publication is when the posting was picked up (by the scraper or
  // added manually) — the closest real, already-collected proxy for
  // "quand les inscriptions ont ouvert" without inventing a field/value
  // that isn't actually known.
  const openLine = item.date_publication ? `Ouvert depuis le ${formatDateFr(item.date_publication)}` : null;
  const limitLine = item.date_limite ? `Date limite : ${formatDateFr(item.date_limite)}` : null;

  const lines = [
    urgent ? `⏰ Ça ferme dans ${days} jour${days > 1 ? "s" : ""} !` : "🆕 Concours ouvert aux inscriptions",
    "",
    item.titre || "",
    joinLoc(item.etablissement, item.ville),
    openLine,
    limitLine,
    "",
    `👉 ${SITE_URL}/news`,
    "",
    hashtags,
  ];
  return lines.filter((l) => l !== null && l !== undefined).join("\n");
}

function wrapLines(ctx, text, maxWidth) {
  const words = text.split(" ");
  const lines = [];
  let line = "";
  for (const word of words) {
    const test = line ? line + " " + word : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines;
}

/* --------------------------------- Image ---------------------------------
 * Every position/size is a fraction of `unit` (the shorter canvas side) so
 * the exact same drawing code produces a good result at 1080x1080,
 * 1080x1920 (story) or 1200x630 (landscape) without per-format branches.
 * ------------------------------------------------------------------------ */

function drawCard(canvas, kind, item) {
  const ctx = canvas.getContext("2d");
  const W = canvas.width;
  const H = canvas.height;
  const unit = Math.min(W, H);
  const pad = Math.round(unit * 0.075);

  const grad = ctx.createLinearGradient(0, 0, W, H);
  grad.addColorStop(0, "#4338ca");
  grad.addColorStop(0.55, "#7c3aed");
  grad.addColorStop(1, "#c026d3");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // Two soft decorative circles — kept minimal on purpose ("attractive but
  // simple" means restraint, not more shapes).
  ctx.fillStyle = "rgba(255,255,255,0.08)";
  ctx.beginPath();
  ctx.arc(W * 0.92, H * 0.05, unit * 0.24, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(W * 0.02, H, unit * 0.2, 0, Math.PI * 2);
  ctx.fill();

  // Bottom scrim so the footer stays legible regardless of where the
  // gradient lands at that height.
  const scrim = ctx.createLinearGradient(0, H * 0.8, 0, H);
  scrim.addColorStop(0, "rgba(0,0,0,0)");
  scrim.addColorStop(1, "rgba(0,0,0,0.3)");
  ctx.fillStyle = scrim;
  ctx.fillRect(0, H * 0.8, W, H * 0.2);

  const days = kind === "news" ? daysUntil(item.date_limite) : null;
  const urgent = days !== null && days >= 0 && days <= 7;

  let y = pad + unit * 0.06;
  ctx.textBaseline = "alphabetic";

  // Eyebrow badge
  const badgeText = kind === "concours" ? "NOUVEAU SUJET" : urgent ? `FERME DANS ${days} J` : "CONCOURS OUVERT";
  ctx.font = `700 ${Math.round(unit * 0.028)}px system-ui, sans-serif`;
  const badgeH = unit * 0.052;
  const badgeW = ctx.measureText(badgeText).width + unit * 0.05;
  ctx.fillStyle = urgent ? "#fff" : "rgba(255,255,255,0.18)";
  ctx.beginPath();
  ctx.roundRect(pad, y, badgeW, badgeH, badgeH / 2);
  ctx.fill();
  ctx.fillStyle = urgent ? "#a21caf" : "#fff";
  ctx.fillText(badgeText, pad + unit * 0.025, y + badgeH * 0.65);
  y += badgeH + unit * 0.06;

  // Title
  ctx.fillStyle = "#fff";
  ctx.font = `800 ${Math.round(unit * 0.066)}px system-ui, sans-serif`;
  ctx.shadowColor = "rgba(0,0,0,0.18)";
  ctx.shadowBlur = unit * 0.012;
  const title = kind === "concours" ? item.etablissement || item.id : item.titre || "";
  const titleLines = wrapLines(ctx, title, W - pad * 2).slice(0, 3);
  const titleLH = unit * 0.08;
  titleLines.forEach((line) => {
    y += titleLH;
    ctx.fillText(line, pad, y);
  });
  ctx.shadowBlur = 0;
  y += unit * 0.02;

  // Meta pills (filière / ville / année, or établissement / ville)
  const pillItems = kind === "concours" ? [item.filiere, item.ville, item.annee].filter(Boolean) : [item.etablissement, item.ville].filter(Boolean);
  if (pillItems.length) {
    y += unit * 0.045;
    ctx.font = `600 ${Math.round(unit * 0.032)}px system-ui, sans-serif`;
    let x = pad;
    const pillH = unit * 0.052;
    pillItems.slice(0, 3).forEach((txt) => {
      const w = ctx.measureText(txt).width + unit * 0.045;
      if (x + w > W - pad) return;
      ctx.fillStyle = "rgba(255,255,255,0.16)";
      ctx.beginPath();
      ctx.roundRect(x, y, w, pillH, pillH / 2);
      ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.fillText(txt, x + unit * 0.022, y + pillH * 0.66);
      x += w + unit * 0.02;
    });
    y += pillH;
  }

  // Dates — for a "concours ouvert" post, when it opened matters as much
  // as when it closes (see buildText for why date_publication stands in
  // for "date d'ouverture").
  if (kind === "news") {
    const openStr = item.date_publication ? formatDateFr(item.date_publication) : null;
    const limitStr = item.date_limite ? formatDateFr(item.date_limite) : null;
    ctx.font = `700 ${Math.round(unit * 0.038)}px system-ui, sans-serif`;
    if (openStr) {
      y += unit * 0.07;
      ctx.fillStyle = "rgba(255,255,255,0.92)";
      ctx.fillText(`📅 Ouvert depuis le ${openStr}`, pad, y);
    }
    if (limitStr) {
      y += unit * 0.055;
      ctx.fillStyle = urgent ? "#ffe28a" : "#fff";
      ctx.fillText(`⏰ Date limite : ${limitStr}`, pad, y);
    }
  }

  // Footer wordmark, pinned near the bottom regardless of how tall the
  // canvas is (story format has a lot of empty space above this by design).
  const footerY = H - pad - unit * 0.01;
  ctx.font = `800 ${Math.round(unit * 0.042)}px system-ui, sans-serif`;
  ctx.fillStyle = "#fff";
  ctx.fillText("SaadConcours", pad, footerY - unit * 0.045);
  ctx.font = `500 ${Math.round(unit * 0.028)}px system-ui, sans-serif`;
  ctx.fillStyle = "rgba(255,255,255,0.82)";
  ctx.fillText("saadconcours.space — gratuit, sans compte", pad, footerY);
}

/* ------------------------------ Platform previews ------------------------------ */

function FacebookPreview({ imgSrc, text }) {
  const caption = text.split("\n").filter(Boolean).slice(0, 3).join(" ");
  return (
    <div className="pf-mock pf-mock-fb">
      <div className="pf-mock-head">
        <div className="pf-mock-avatar">S</div>
        <div>
          <div className="pf-mock-name">SaadConcours</div>
          <div className="pf-mock-time">à l'instant · 🌐</div>
        </div>
      </div>
      <div className="pf-mock-caption">{caption}</div>
      {imgSrc && <img className="pf-mock-image" src={imgSrc} alt="" />}
      <div className="pf-mock-actions">
        <span>👍 J'aime</span>
        <span>💬 Commenter</span>
        <span>↗ Partager</span>
      </div>
    </div>
  );
}

function InstagramPreview({ imgSrc, text }) {
  const caption = text.split("\n").filter(Boolean).slice(0, 2).join(" ");
  return (
    <div className="pf-mock pf-mock-ig">
      <div className="pf-mock-head">
        <div className="pf-mock-avatar">S</div>
        <div>
          <div className="pf-mock-name">saadconcours.space</div>
        </div>
        <div className="pf-mock-more">•••</div>
      </div>
      {imgSrc && <img className="pf-mock-image square" src={imgSrc} alt="" />}
      <div className="pf-mock-icons">
        <span>♡</span>
        <span>💬</span>
        <span>➤</span>
        <span className="pf-mock-icons-save">🔖</span>
      </div>
      <div className="pf-mock-caption">
        <strong>saadconcours.space</strong> {caption}
      </div>
    </div>
  );
}

function WhatsAppPreview({ imgSrc, text }) {
  const caption = text.split("\n").filter(Boolean).slice(0, 2).join(" ");
  return (
    <div className="pf-mock pf-mock-wa">
      <div className="pf-mock-wa-bubble">
        {imgSrc && <img className="pf-mock-image" src={imgSrc} alt="" />}
        <div className="pf-mock-wa-caption">{caption}</div>
        <div className="pf-mock-wa-meta">14:32 ✓✓</div>
      </div>
    </div>
  );
}

export default function SocialGeneratorPanel() {
  const [concours, setConcours] = useState([]);
  const [news, setNews] = useState([]);
  const [tab, setTab] = useState("concours");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [format, setFormat] = useState(FORMATS[0]);
  const [imgSrc, setImgSrc] = useState(null);
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    fetch("/api/concours").then((r) => r.json()).then((d) => setConcours(d || []));
    fetch("/api/news").then((r) => r.json()).then((d) => setNews((d || []).filter((n) => !n.cloture)));
  }, []);

  const list = tab === "concours" ? concours : news;
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const src = [...list].reverse(); // most recently added first
    if (!q) return src.slice(0, 25);
    return src
      .filter((i) => `${i.etablissement || ""} ${i.ville || ""} ${i.titre || ""} ${i.filiere || ""}`.toLowerCase().includes(q))
      .slice(0, 25);
  }, [list, query]);

  const text = selected ? buildText(tab, selected) : "";

  useEffect(() => {
    if (!selected || !canvasRef.current) return;
    const canvas = canvasRef.current;
    canvas.width = format.width;
    canvas.height = format.height;
    drawCard(canvas, tab, selected);
    setImgSrc(canvas.toDataURL("image/png"));
  }, [selected, tab, format]);

  function pick(item) {
    setSelected(item);
    setCopied(false);
  }

  async function copyText() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API unavailable (non-HTTPS/local) — the textarea below is
      // still selectable/copyable by hand as a fallback.
    }
  }

  function downloadImage() {
    if (!canvasRef.current) return;
    const link = document.createElement("a");
    link.download = `saadconcours-${tab}-${format.key}-${selected?.id || "post"}.png`;
    link.href = canvasRef.current.toDataURL("image/png");
    link.click();
  }

  return (
    <div>
      <div className="admin-card">
        <h2 style={{ marginTop: 0, fontSize: "1.05rem" }}>📣 Générateur de post</h2>
        <p className="admin-image-hint" style={{ marginBottom: 16 }}>
          Choisis un concours ou une actu "concours ouvert", récupère un texte prêt à coller (avec hashtags pertinents)
          et une image générée automatiquement — pour Instagram, Facebook ou le canal WhatsApp.
        </p>

        <div className="admin-view-toggle" style={{ marginBottom: 14 }}>
          <button
            type="button"
            className={"admin-view-toggle-btn" + (tab === "concours" ? " active" : "")}
            onClick={() => {
              setTab("concours");
              setSelected(null);
            }}
          >
            📚 Concours
          </button>
          <button
            type="button"
            className={"admin-view-toggle-btn" + (tab === "news" ? " active" : "")}
            onClick={() => {
              setTab("news");
              setSelected(null);
            }}
          >
            🆕 Concours ouverts
          </button>
        </div>

        <input
          className="admin-search-input"
          style={{ width: "100%", marginBottom: 10 }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher..."
        />

        <div className="picker-list">
          {filtered.map((item) => (
            <label className="picker-row" key={item.id} onClick={() => pick(item)}>
              <span className="picker-row-main">
                <span className="picker-row-title">{tab === "concours" ? item.etablissement : item.titre}</span>
                <span className="picker-row-meta">
                  {tab === "concours"
                    ? [item.ville, item.filiere, item.annee].filter(Boolean).join(" · ")
                    : [item.etablissement, item.ville].filter(Boolean).join(" · ")}
                </span>
              </span>
              {tab === "news" && <span className="picker-row-date">{item.date_limite || "—"}</span>}
            </label>
          ))}
          {!filtered.length && <div className="empty-state">Aucun résultat.</div>}
        </div>
      </div>

      {selected && (
        <>
          <div className="social-gen-result">
            <div className="admin-card">
              <h2 style={{ marginTop: 0, fontSize: "1.05rem" }}>Texte (avec tags SEO)</h2>
              <textarea readOnly style={{ minHeight: 220, fontFamily: "monospace", fontSize: ".85rem" }} value={text} />
              <div className="admin-row-actions" style={{ marginTop: 10 }}>
                <button type="button" className="admin-btn" onClick={copyText}>
                  {copied ? "✓ Copié" : "Copier le texte"}
                </button>
              </div>
            </div>

            <div className="admin-card">
              <h2 style={{ marginTop: 0, fontSize: "1.05rem" }}>
                Image ({format.width}×{format.height})
              </h2>
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
              </div>
            </div>
          </div>

          <div className="admin-card" style={{ marginTop: 18 }}>
            <h2 style={{ marginTop: 0, fontSize: "1.05rem" }}>Aperçu sur les réseaux</h2>
            <p className="admin-image-hint" style={{ marginBottom: 16 }}>
              Rendu approximatif — la mise en page réelle varie légèrement selon l'app et l'appareil.
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
        </>
      )}
    </div>
  );
}
