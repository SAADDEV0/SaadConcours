"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/* -------------------------------------------------------------------
 * Turns a concours or an actu "concours ouvert" into a ready-to-post
 * Instagram/Facebook/WhatsApp text + a square share image, generated
 * client-side on a <canvas> (no image-generation dependency, no server
 * round-trip). Deliberately "generate, you post" rather than auto-posting —
 * there's no Instagram/Facebook API wiring here, just making each manual
 * post take 10 seconds instead of being its own small writing task.
 * ---------------------------------------------------------------- */

const SITE_URL = "https://www.saadconcours.space";

function daysUntil(dateStr) {
  if (!dateStr) return null;
  return Math.round((new Date(dateStr + "T00:00:00") - new Date(new Date().toDateString())) / 86400000);
}

function buildText(kind, item) {
  if (kind === "concours") {
    const lines = [
      "📚 Nouveau sujet disponible sur SaadConcours",
      "",
      `${item.etablissement || ""}${item.ville ? " — " + item.ville : ""}`,
      item.filiere || "",
      item.annee ? `Session ${item.annee}` : "",
      "",
      item.corrige_md ? "✅ Corrigé indicatif inclus" : "Sujet avec énoncé complet",
      "",
      `👉 ${SITE_URL}/concours/${item.id}`,
      "",
      "Gratuit, sans compte, sans pub. #ConcoursMaroc #MasterMaroc",
    ];
    return lines.filter((l) => l !== "").join("\n");
  }
  const days = daysUntil(item.date_limite);
  const urgent = days !== null && days >= 0 && days <= 7;
  const lines = urgent
    ? [
        `⏰ Ça ferme dans ${days} jour${days > 1 ? "s" : ""} !`,
        "",
        item.titre || "",
        `${item.etablissement || ""}${item.ville ? " — " + item.ville : ""}`,
        `Date limite : ${item.date_limite || "—"}`,
        "",
        `👉 ${SITE_URL}/news`,
        "",
        "#ConcoursMaroc #MasterMaroc",
      ]
    : [
        "🆕 Concours ouvert aux inscriptions",
        "",
        item.titre || "",
        `${item.etablissement || ""}${item.ville ? " — " + item.ville : ""}`,
        item.date_limite ? `Date limite : ${item.date_limite}` : "",
        "",
        `👉 ${SITE_URL}/news`,
        "",
        "#ConcoursMaroc #MasterMaroc",
      ];
  return lines.filter((l) => l !== "").join("\n");
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

function drawCard(canvas, kind, item) {
  const ctx = canvas.getContext("2d");
  const W = canvas.width;
  const H = canvas.height;

  const grad = ctx.createLinearGradient(0, 0, W, H);
  grad.addColorStop(0, "#4f46e5");
  grad.addColorStop(1, "#7c3aed");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // Soft decorative circle, purely visual.
  ctx.fillStyle = "rgba(255,255,255,0.08)";
  ctx.beginPath();
  ctx.arc(W * 0.85, H * 0.12, 220, 0, Math.PI * 2);
  ctx.fill();

  const days = kind === "news" ? daysUntil(item.date_limite) : null;
  const urgent = days !== null && days >= 0 && days <= 7;

  // Eyebrow badge
  ctx.fillStyle = "rgba(255,255,255,0.16)";
  const badgeText = kind === "concours" ? "NOUVEAU SUJET" : urgent ? `FERME DANS ${days} J` : "CONCOURS OUVERT";
  ctx.font = "700 30px system-ui, sans-serif";
  const badgeW = ctx.measureText(badgeText).width + 56;
  ctx.beginPath();
  ctx.roundRect(70, 90, badgeW, 60, 30);
  ctx.fill();
  ctx.fillStyle = "#fff";
  ctx.textBaseline = "middle";
  ctx.fillText(badgeText, 70 + 28, 90 + 30);

  // Title (établissement / titre)
  ctx.fillStyle = "#fff";
  ctx.font = "800 62px system-ui, sans-serif";
  const title = kind === "concours" ? item.etablissement || item.id : item.titre || "";
  const titleLines = wrapLines(ctx, title, W - 140).slice(0, 3);
  let y = 260;
  titleLines.forEach((line) => {
    ctx.fillText(line, 70, y);
    y += 72;
  });

  // Meta line (ville / filière / année, or date limite)
  ctx.font = "500 38px system-ui, sans-serif";
  ctx.fillStyle = "rgba(255,255,255,0.88)";
  const meta =
    kind === "concours"
      ? [item.ville, item.filiere, item.annee].filter(Boolean).join("  ·  ")
      : [item.etablissement, item.ville].filter(Boolean).join("  ·  ");
  const metaLines = wrapLines(ctx, meta, W - 140).slice(0, 2);
  y += 14;
  metaLines.forEach((line) => {
    ctx.fillText(line, 70, y);
    y += 50;
  });

  if (kind === "news" && item.date_limite) {
    ctx.font = "700 40px system-ui, sans-serif";
    ctx.fillStyle = urgent ? "#ffe28a" : "#fff";
    ctx.fillText(`Date limite : ${item.date_limite}`, 70, y + 30);
  }

  // Footer wordmark
  ctx.font = "800 40px system-ui, sans-serif";
  ctx.fillStyle = "#fff";
  ctx.fillText("SaadConcours", 70, H - 130);
  ctx.font = "500 30px system-ui, sans-serif";
  ctx.fillStyle = "rgba(255,255,255,0.75)";
  ctx.fillText("saadconcours.space — gratuit, sans compte", 70, H - 85);
}

export default function SocialGeneratorPanel() {
  const [concours, setConcours] = useState([]);
  const [news, setNews] = useState([]);
  const [tab, setTab] = useState("concours");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
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
    drawCard(canvasRef.current, tab, selected);
  }, [selected, tab]);

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
    link.download = `saadconcours-${tab}-${selected?.id || "post"}.png`;
    link.href = canvasRef.current.toDataURL("image/png");
    link.click();
  }

  return (
    <div>
      <div className="admin-card">
        <h2 style={{ marginTop: 0, fontSize: "1.05rem" }}>📣 Générateur de post</h2>
        <p className="admin-image-hint" style={{ marginBottom: 16 }}>
          Choisis un concours ou une actu "concours ouvert", récupère un texte prêt à coller et une image carrée
          générée automatiquement — pour Instagram, Facebook ou le canal WhatsApp.
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
        <div className="social-gen-result">
          <div className="admin-card">
            <h2 style={{ marginTop: 0, fontSize: "1.05rem" }}>Texte</h2>
            <textarea readOnly style={{ minHeight: 220, fontFamily: "monospace", fontSize: ".85rem" }} value={text} />
            <div className="admin-row-actions" style={{ marginTop: 10 }}>
              <button type="button" className="admin-btn" onClick={copyText}>
                {copied ? "✓ Copié" : "Copier le texte"}
              </button>
            </div>
          </div>

          <div className="admin-card">
            <h2 style={{ marginTop: 0, fontSize: "1.05rem" }}>Image (1080×1080)</h2>
            <canvas ref={canvasRef} width={1080} height={1080} className="social-gen-canvas" />
            <div className="admin-row-actions" style={{ marginTop: 10 }}>
              <button type="button" className="admin-btn" onClick={downloadImage}>
                ⬇ Télécharger l'image
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
