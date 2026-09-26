"use client";

import { useEffect, useRef, useState } from "react";
import { ensurePdfJs } from "@/app/_shared/pdfScripts";

// Visionneuse du Studio PDF. Le PDF généré par le moteur du site est dessiné
// page par page sur des <canvas> (PDF.js) au lieu d'être confié au lecteur
// PDF du navigateur dans une <iframe> : la mise en page reste la nôtre
// (zoom, planche de pages, position de lecture conservée d'un rendu à
// l'autre) et on peut poser les repères déplaçables exactement sur la page.
// Si PDF.js ne se charge pas, `onUnavailable` laisse le studio revenir à
// l'<iframe>.

export const A4_CSS_WIDTH = 794; // 210 mm à 96 dpi : le « 100 % »
const MAX_PAGES = 16;

export default function PdfViewer({ bytes, zoom = "fit", pageLabel, renderOverlay, onUnavailable, footer }) {
  const scrollRef = useRef(null);
  const canvases = useRef([]);
  const pageEls = useRef([]);
  const [width, setWidth] = useState(0);
  const [doc, setDoc] = useState(null); // { pdf, sizes: [{ w, h }], total }
  const docRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return undefined;
    const ro = new ResizeObserver(([entry]) => setWidth(Math.floor(entry.contentRect.width)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Nouveau PDF : chargé à côté de l'ancien, qui reste affiché jusqu'à ce
  // que le nouveau soit prêt — pas de page blanche entre deux réglages.
  useEffect(() => {
    if (!bytes) return undefined;
    let cancelled = false;
    (async () => {
      try {
        const lib = await ensurePdfJs();
        // pdf.js transfère le tampon à son worker : on lui en donne une copie,
        // l'original sert encore au bouton « Télécharger ».
        const pdf = await lib.getDocument({ data: new Uint8Array(bytes.slice(0)), isEvalSupported: false }).promise;
        const n = Math.min(pdf.numPages, MAX_PAGES);
        const sizes = [];
        for (let i = 1; i <= n; i++) {
          const vp = (await pdf.getPage(i)).getViewport({ scale: 1 });
          sizes.push({ w: vp.width, h: vp.height });
        }
        if (cancelled) {
          pdf.destroy();
          return;
        }
        const prev = docRef.current;
        docRef.current = pdf;
        setDoc({ pdf, sizes, total: pdf.numPages });
        if (prev) setTimeout(() => prev.destroy(), 0);
      } catch (err) {
        if (!cancelled) onUnavailable?.(err);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [bytes]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => () => docRef.current?.destroy(), []);

  const available = Math.max(240, width - 48);
  const cssWidth = zoom === "fit" ? Math.min(available, 980) : Math.round(A4_CSS_WIDTH * zoom);

  // Rendu des pages : chaque page est peinte hors écran puis recopiée d'un
  // coup sur son canvas visible, donc jamais de page à moitié dessinée.
  const ready = width > 0;
  useEffect(() => {
    if (!doc || !ready) return undefined;
    let cancelled = false;
    const tasks = [];
    (async () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      for (let i = 0; i < doc.sizes.length; i++) {
        if (cancelled) return;
        let page;
        try {
          page = await doc.pdf.getPage(i + 1);
        } catch {
          return; // document remplacé entre-temps
        }
        const viewport = page.getViewport({ scale: (cssWidth / doc.sizes[i].w) * dpr });
        const off = document.createElement("canvas");
        off.width = Math.ceil(viewport.width);
        off.height = Math.ceil(viewport.height);
        const task = page.render({ canvasContext: off.getContext("2d"), viewport });
        tasks.push(task);
        try {
          await task.promise;
        } catch {
          return;
        }
        if (cancelled) return;
        const target = canvases.current[i];
        if (!target) continue;
        target.width = off.width;
        target.height = off.height;
        target.getContext("2d").drawImage(off, 0, 0);
      }
    })();
    return () => {
      cancelled = true;
      tasks.forEach((t) => t.cancel?.());
    };
  }, [doc, cssWidth, ready]);

  return (
    <div className={`ax-ps-scroll${zoom === "fit" ? " fit" : ""}`} ref={scrollRef}>
      {doc ? (
        <div className="ax-ps-pages">
          {doc.sizes.map((s, i) => (
            <figure className="ax-ps-page-wrap" key={i}>
              <div className="ax-ps-page" ref={(el) => (pageEls.current[i] = el)} style={{ width: cssWidth, height: Math.round((cssWidth * s.h) / s.w) }}>
                <canvas ref={(el) => (canvases.current[i] = el)} aria-label={pageLabel ? pageLabel(i) : `Page ${i + 1}`} role="img" />
                {renderOverlay?.(i, () => pageEls.current[i]?.getBoundingClientRect())}
              </div>
              <figcaption>{pageLabel ? pageLabel(i) : `Page ${i + 1}`}</figcaption>
            </figure>
          ))}
          {doc.total > doc.sizes.length && (
            <p className="ax-ps-more">
              + {doc.total - doc.sizes.length} page{doc.total - doc.sizes.length > 1 ? "s" : ""} non affichée{doc.total - doc.sizes.length > 1 ? "s" : ""} — « Télécharger » donne le document entier.
            </p>
          )}
        </div>
      ) : (
        <div className="ax-ps-pages">
          <div className="ax-ps-page ax-skel" style={{ width: cssWidth, height: Math.round(cssWidth * 1.414) }} />
        </div>
      )}
      {footer}
    </div>
  );
}

// ---- Repères déplaçables -------------------------------------------------

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const round = (v) => Math.round(v * 10) / 10;
const pct = (v) => `${String(round(v)).replace(".", ",")} %`;

function snapTo(value, targets, threshold) {
  for (const t of targets) if (Math.abs(value - t) <= threshold) return { value: t, hit: true };
  return { value, hit: false };
}

// Calque posé sur une page : un repère par élément déplaçable, et les lignes
// d'aimantation pendant qu'on en fait glisser un.
//   items   — [{ key, label, xPct, yPct, custom }] (le point = l'ancre exacte
//             du moteur : centre du logo, ligne de base du pied de page…)
//   snapX/Y — lignes où un repère « colle » (centre, marges) ; Maj désactive.
export function HandleLayer({ items, getRect, snapX = [50], snapY = [50], onMove, onReset }) {
  const [guide, setGuide] = useState(null);
  return (
    <div className="ax-ps-overlay">
      {guide?.x != null && <div className="ax-ps-snap v" style={{ left: `${guide.x}%` }} />}
      {guide?.y != null && <div className="ax-ps-snap h" style={{ top: `${guide.y}%` }} />}
      {items.map((item) => (
        <Handle key={item.key} item={item} getRect={getRect} snapX={snapX} snapY={snapY} onMove={onMove} onReset={onReset} onGuide={setGuide} />
      ))}
    </div>
  );
}

function Handle({ item, getRect, snapX, snapY, onMove, onReset, onGuide }) {
  const [drag, setDrag] = useState(null);
  const session = useRef(null);
  const pos = drag || item;

  function onPointerDown(e) {
    if (e.button !== 0) return;
    const r = getRect();
    if (!r) return;
    e.preventDefault();
    e.currentTarget.focus();
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // pointeur déjà relâché : le glisser s'arrêtera au prochain pointerup
    }
    // On garde l'écart entre le pointeur et l'ancre : saisir le repère par
    // son étiquette ne le fait pas sauter sous le curseur.
    session.current = {
      r,
      dx: ((e.clientX - r.left) / r.width) * 100 - item.xPct,
      dy: ((e.clientY - r.top) / r.height) * 100 - item.yPct,
      last: null,
    };
    setDrag({ xPct: item.xPct, yPct: item.yPct });
  }

  function onPointerMove(e) {
    const s = session.current;
    if (!s) return;
    let x = clamp(((e.clientX - s.r.left) / s.r.width) * 100 - s.dx, 0, 100);
    let y = clamp(((e.clientY - s.r.top) / s.r.height) * 100 - s.dy, 0, 100);
    let gx = null;
    let gy = null;
    if (!e.shiftKey) {
      const sx = snapTo(x, snapX, 0.9);
      const sy = snapTo(y, snapY, 0.6);
      x = sx.value;
      y = sy.value;
      if (sx.hit) gx = x;
      if (sy.hit) gy = y;
    }
    s.last = { xPct: x, yPct: y };
    onGuide({ x: gx, y: gy });
    setDrag(s.last);
  }

  function onPointerUp() {
    const s = session.current;
    session.current = null;
    onGuide(null);
    setDrag(null);
    if (s?.last && (Math.abs(s.last.xPct - item.xPct) > 0.05 || Math.abs(s.last.yPct - item.yPct) > 0.05)) {
      onMove(item.key, { xPct: round(s.last.xPct), yPct: round(s.last.yPct) });
    }
  }

  function onKeyDown(e) {
    const step = e.shiftKey ? 2 : 0.5;
    const d = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] }[e.key];
    if (d) {
      e.preventDefault();
      onMove(item.key, { xPct: round(clamp(item.xPct + d[0], 0, 100)), yPct: round(clamp(item.yPct + d[1], 0, 100)) });
    } else if ((e.key === "Delete" || e.key === "Backspace") && item.custom) {
      e.preventDefault();
      onReset(item.key);
    }
  }

  return (
    <button
      type="button"
      className={`ax-ps-handle${item.custom ? " custom" : ""}${drag ? " dragging" : ""}${pos.xPct > 62 ? " flip" : ""}`}
      style={{ left: `${pos.xPct}%`, top: `${pos.yPct}%` }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onDoubleClick={() => item.custom && onReset(item.key)}
      onKeyDown={onKeyDown}
      aria-label={`${item.label} — ${item.custom ? `position personnalisée ${pct(item.xPct)}, ${pct(item.yPct)}` : "position par défaut"}. Flèches pour déplacer, Suppr pour revenir à la position par défaut.`}
      title={`${item.label} · glisser pour déplacer (Maj : sans aimantation)${item.custom ? " · double-clic : position par défaut" : ""}`}
    >
      <span className="dot" />
      <span className="tag">
        {item.label}
        {drag && (
          <em>
            {pct(pos.xPct)} · {pct(pos.yPct)}
          </em>
        )}
      </span>
    </button>
  );
}
