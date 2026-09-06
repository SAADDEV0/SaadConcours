"use client";

// The A4 canvas both editor tabs draw on: a live, to-scale mock of the page
// the PDF code will actually produce, with every movable element as a
// draggable node.
//
// The whole point is that what's dragged here lands in the same spot in the
// PDF, so the geometry below deliberately mirrors the draw code rather than
// approximating it:
//   * one measured `pxPerMm` (ResizeObserver on the sheet) converts the
//     draw code's millimetres and points into CSS pixels, so zooming can't
//     desynchronize the two;
//   * each node's anchor point is whatever the corresponding draw call
//     anchors on — the *center* of the header block (pdfTheme.js converts a
//     dragged center back to a top-left corner), the first *baseline* of the
//     footer/page number, the *top* edge of every cover block (pdfCover.js).
// Getting that wrong is invisible in the editor and obvious in the PDF.

import { useCallback, useLayoutEffect, useRef, useState } from "react";
import {
  PAGE_H_MM,
  PAGE_W_MM,
  PDF_BORDER_INSET_RANGE,
  PDF_BORDER_WIDTH_RANGE,
  PDF_CONTENT_ELEMENTS,
  PDF_COVER_ELEMENTS,
  PDF_COVER_DEFAULT_POSITIONS,
  PDF_FONT_SIZE_PRESETS,
  PDF_HEADING_SIZE_PRESETS,
  PDF_LINE_SPACING_PRESETS,
  PDF_MARGIN_PRESETS,
  PDF_WATERMARK_OPACITY_RANGE,
  isHex,
} from "@/app/_shared/pdfTheme";
import { COVER_BASE_SIZES, COVER_LINE_RATIO } from "@/app/_shared/pdfCover";

const PT_TO_MM = 0.3528;
// pdfCover.js steps COVER_LINE_RATIO millimetres per point of font size
// between baselines; as a CSS unitless line-height that's the same ratio
// divided by the mm-per-point of the font itself.
const COVER_LINE_HEIGHT = COVER_LINE_RATIO / PT_TO_MM;
// How close (in % of the page) a drag must get to a guide before it snaps.
const SNAP_PCT = 1.2;
const ZOOM_STEPS = [0.55, 0.7, 0.85, 1, 1.2, 1.45, 1.75];
const BASE_PAGE_PX = 460;

const FONT_STACKS = {
  helvetica: "Helvetica, Arial, sans-serif",
  times: "Georgia, 'Times New Roman', Times, serif",
  courier: "'Courier New', Courier, ui-monospace, monospace",
};

const SAMPLE_PARAGRAPH =
  "Le fonds de roulement mesure les ressources stables dont dispose l'entreprise une fois ses emplois durables financés. Un FR positif traduit un équilibre financier sain à long terme.";

export function fontStack(family) {
  return FONT_STACKS[family] || FONT_STACKS.helvetica;
}

export function marginMmOf(settings) {
  return Number.isFinite(settings?.pdfMarginMm)
    ? settings.pdfMarginMm
    : PDF_MARGIN_PRESETS[settings?.pdfMargins] || PDF_MARGIN_PRESETS.normal;
}

export function colorOr(value, fallback) {
  return isHex(value) ? value : fallback;
}

// ---- the brand mark, as SVG ------------------------------------------
// Same 64×64 geometry as pdfTheme.js's drawLogoMark/drawWatermarkLogo, so
// the preview's logo is the logo, not a stand-in.
export function MarkSvg({ color = "#4f46e5", size = 24, variant = "solid", style }) {
  const common = { width: size, height: size, viewBox: "0 0 64 64", xmlns: "http://www.w3.org/2000/svg", style };
  if (variant === "line") {
    return (
      <svg {...common}>
        <polygon points="32,13 49,21 32,29 15,21" fill={color} />
        <line x1="49" y1="21" x2="51" y2="31" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <circle cx="51" cy="32.5" r="2" fill={color} />
        <polygon points="29,42 12,37 12,48 29,54" fill={color} />
        <polygon points="35,42 52,37 52,48 35,54" fill={color} />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect width="64" height="64" rx="16" fill={color} />
      <polygon points="32,13 49,21 32,29 15,21" fill="#fff" />
      <line x1="49" y1="21" x2="51" y2="31" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      <circle cx="51" cy="32.5" r="2" fill="#fbbf24" />
      <polygon points="32,42 13,37 13,48 32,54" fill="#fff" />
      <polygon points="32,42 51,37 51,48 32,54" fill="#fff" />
      <line x1="32" y1="42" x2="32" y2="54" stroke={color} strokeWidth="1.2" />
    </svg>
  );
}

// ---- drag / snap ------------------------------------------------------

function findSnap(value, targets) {
  return targets.find((t) => Math.abs(value - t.at) <= SNAP_PCT) || null;
}

function useDragPositions({ pageRef, onMove }) {
  const drag = useRef(null);
  const [snap, setSnap] = useState({ x: null, y: null });

  const start = useCallback((key, current, e) => {
    e.preventDefault();
    e.stopPropagation();
    const rect = pageRef.current?.getBoundingClientRect();
    if (!rect) return;
    // Remember where inside the element the pointer grabbed it, so the node
    // doesn't jump under the cursor on mouse-down.
    drag.current = {
      key,
      dx: current.xPct - ((e.clientX - rect.left) / rect.width) * 100,
      dy: current.yPct - ((e.clientY - rect.top) / rect.height) * 100,
    };
    e.currentTarget.setPointerCapture?.(e.pointerId);
  }, [pageRef]);

  const move = useCallback(
    (e, snaps) => {
      const state = drag.current;
      const rect = pageRef.current?.getBoundingClientRect();
      if (!state || !rect) return;
      let xPct = Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100 + state.dx));
      let yPct = Math.min(100, Math.max(0, ((e.clientY - rect.top) / rect.height) * 100 + state.dy));
      const xHit = findSnap(xPct, snaps.x);
      const yHit = findSnap(yPct, snaps.y);
      if (xHit) xPct = xHit.at;
      if (yHit) yPct = yHit.at;
      setSnap({ x: xHit?.at ?? null, y: yHit?.at ?? null });
      onMove(state.key, { xPct: Number(xPct.toFixed(2)), yPct: Number(yPct.toFixed(2)) });
    },
    [onMove, pageRef]
  );

  const end = useCallback(() => {
    drag.current = null;
    setSnap({ x: null, y: null });
  }, []);

  return { start, move, end, snap, dragging: drag };
}

// ---- node -------------------------------------------------------------

function Node({ elKey, label, style, moved, selected, disabled, onSelect, onPointerDown, onNudge, children }) {
  return (
    <div
      className={
        "pdfx-node" +
        (selected ? " selected" : "") +
        (moved ? " moved" : "") +
        (disabled ? " pdfx-node-off" : "")
      }
      style={style}
      role="button"
      tabIndex={0}
      aria-label={label}
      onPointerDown={onPointerDown}
      onFocus={() => onSelect(elKey)}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(elKey);
      }}
      onKeyDown={(e) => {
        const step = e.shiftKey ? 1 : 0.2;
        const delta = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] }[e.key];
        if (!delta) return;
        e.preventDefault();
        onNudge(elKey, delta[0], delta[1]);
      }}
      title={`${label} — glisser pour déplacer, flèches pour ajuster`}
    >
      <span className="pdfx-node-tag">{label}</span>
      {children}
    </div>
  );
}

// ======================================================================
//  Canvas
// ======================================================================

export default function PdfCanvas({
  mode, // "content" | "cover"
  settings,
  positions, // pdfLayout (content) or pdfCoverLayout (cover)
  sample,
  selected,
  onSelect,
  onMove,
  onReset,
}) {
  const pageRef = useRef(null);
  const [zoom, setZoom] = useState(3); // index into ZOOM_STEPS
  const [showGrid, setShowGrid] = useState(false);
  const [pxPerMm, setPxPerMm] = useState(BASE_PAGE_PX / PAGE_W_MM);

  // One measured scale for the whole canvas — everything below is drawn in
  // real millimetres/points and converted here, so the mock stays faithful
  // at any zoom level or container width.
  useLayoutEffect(() => {
    const el = pageRef.current;
    if (!el) return;
    const update = () => setPxPerMm(el.getBoundingClientRect().width / PAGE_W_MM);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const mm = useCallback((v) => v * pxPerMm, [pxPerMm]);
  const pt = useCallback((v) => v * PT_TO_MM * pxPerMm, [pxPerMm]);
  const pctX = (v) => (v / PAGE_W_MM) * 100;
  const pctY = (v) => (v / PAGE_H_MM) * 100;

  const marginMm = marginMmOf(settings);
  const accent = colorOr(settings.pdfAccentColor, "#4f46e5");
  const text = colorOr(settings.pdfTextColor, "#1a1d27");
  const family = fontStack(settings.pdfFontFamily);

  const elements = mode === "cover" ? PDF_COVER_ELEMENTS : PDF_CONTENT_ELEMENTS;
  const defaultsFor = (key) => (mode === "cover" ? PDF_COVER_DEFAULT_POSITIONS[key] : null);
  const posOf = (key) => positions?.[key] || defaultsFor(key);

  const snaps = {
    x: [{ at: pctX(marginMm) }, { at: 50 }, { at: 100 - pctX(marginMm) }],
    y: [{ at: pctY(marginMm + 8) }, { at: 50 }, { at: 100 - pctY(marginMm) }],
  };

  const { start, move, end, snap } = useDragPositions({ pageRef, onMove });

  const nudge = (key, dx, dy) => {
    const current = posOf(key) || { xPct: 50, yPct: 50 };
    onMove(key, {
      xPct: Number(Math.min(100, Math.max(0, current.xPct + dx)).toFixed(2)),
      yPct: Number(Math.min(100, Math.max(0, current.yPct + dy)).toFixed(2)),
    });
  };

  const nodeProps = (key, label) => ({
    elKey: key,
    label,
    moved: Boolean(positions?.[key]),
    selected: selected === key,
    onSelect,
    onNudge: nudge,
    onPointerDown: (e) => {
      onSelect(key);
      start(key, posOf(key) || fallbackAnchor(key), e);
    },
  });

  // Where a not-yet-dragged content element lives, in page %, so grabbing it
  // for the first time doesn't teleport it to the cursor.
  function fallbackAnchor(key) {
    if (mode === "cover") return PDF_COVER_DEFAULT_POSITIONS[key];
    if (key === "logo") {
      const x = settings.pdfLogoPosition === "center" ? 50 : settings.pdfLogoPosition === "right" ? 100 - pctX(marginMm) - 8 : pctX(marginMm) + 8;
      return { xPct: x, yPct: pctY(4 + 5.75) };
    }
    if (key === "watermark") return { xPct: 50, yPct: 50 };
    if (key === "footer") return { xPct: 50, yPct: pctY(PAGE_H_MM - 10) };
    return { xPct: 100 - pctX(marginMm), yPct: pctY(PAGE_H_MM - 6) };
  }

  const selectedEl = elements.find((e) => e.key === selected);
  const selectedPos = selected ? posOf(selected) || fallbackAnchor(selected) : null;

  return (
    <div className="pdfx-stage">
      <div className="pdfx-stage-bar">
        <span className="pdfx-stage-name">
          {mode === "cover" ? "🪄 Page de garde" : "📄 Pages de contenu"}
          {mode === "cover" && settings.pdfCoverPageEnabled !== true && (
            <span style={{ fontWeight: 600, color: "var(--text-faint)" }}> — désactivée</span>
          )}
        </span>
        <div className="pdfx-stage-tools">
          <button
            type="button"
            className={"pdfx-icon-btn" + (showGrid ? " active" : "")}
            onClick={() => setShowGrid((v) => !v)}
            title="Afficher la grille"
          >
            ▦
          </button>
          <button type="button" className="pdfx-icon-btn" onClick={() => setZoom((z) => Math.max(0, z - 1))} title="Dézoomer">
            −
          </button>
          <span className="pdfx-zoom-value">{Math.round(ZOOM_STEPS[zoom] * 100)}%</span>
          <button
            type="button"
            className="pdfx-icon-btn"
            onClick={() => setZoom((z) => Math.min(ZOOM_STEPS.length - 1, z + 1))}
            title="Zoomer"
          >
            +
          </button>
        </div>
      </div>

      <div className="pdfx-canvas-scroll">
        <div
          className="pdfx-page"
          ref={pageRef}
          style={{ "--pdfx-page-w": `${Math.round(BASE_PAGE_PX * ZOOM_STEPS[zoom])}px` }}
          onPointerMove={(e) => move(e, snaps)}
          onPointerUp={end}
          onPointerCancel={end}
          onClick={() => onSelect(null)}
        >
          {showGrid && <div className="pdfx-grid-overlay" />}
          {snap.x !== null && <div className="pdfx-guide-line v" style={{ left: `${snap.x}%` }} />}
          {snap.y !== null && <div className="pdfx-guide-line h" style={{ top: `${snap.y}%` }} />}

          {mode === "cover"
            ? renderCover({ settings, sample, mm, pt, pctX, pctY, marginMm, accent, text, family, posOf, nodeProps })
            : renderContent({ settings, mm, pt, pctX, pctY, marginMm, accent, text, family, posOf, nodeProps })}
        </div>
      </div>

      {selectedEl ? (
        <div className="pdfx-selbar">
          <span className="pdfx-selbar-name">
            <span className="pdfx-selbar-dot" />
            {selectedEl.label}
          </span>
          <label className="pdfx-coord">
            X
            <input
              type="number"
              step="0.5"
              value={selectedPos?.xPct ?? 50}
              onChange={(e) => onMove(selected, { ...selectedPos, xPct: Math.min(100, Math.max(0, Number(e.target.value))) })}
            />
            %
          </label>
          <label className="pdfx-coord">
            Y
            <input
              type="number"
              step="0.5"
              value={selectedPos?.yPct ?? 50}
              onChange={(e) => onMove(selected, { ...selectedPos, yPct: Math.min(100, Math.max(0, Number(e.target.value))) })}
            />
            %
          </label>
          {positions?.[selected] && (
            <button type="button" className="admin-link-btn" onClick={() => onReset(selected)} style={{ marginLeft: "auto" }}>
              ↺ Position par défaut
            </button>
          )}
        </div>
      ) : (
        <div className="pdfx-stage-foot">
          <span>A4 · 210 × 297 mm — clique un élément pour le sélectionner, glisse-le pour le placer.</span>
          <span>Flèches = ajustement fin</span>
        </div>
      )}
    </div>
  );
}

// ======================================================================
//  Content page mock
// ======================================================================

function renderContent({ settings, mm, pt, pctX, pctY, marginMm, accent, text, family, posOf, nodeProps }) {
  const baseSize = PDF_FONT_SIZE_PRESETS[settings.pdfFontSize] || PDF_FONT_SIZE_PRESETS.normal;
  const fontScale = baseSize / 10.5;
  const spacing = PDF_LINE_SPACING_PRESETS[settings.pdfLineSpacing] || PDF_LINE_SPACING_PRESETS.normal;
  const lineHeightPx = (size) => mm((size * 0.42 + 1.3) * spacing);

  const heading = (level, base) => {
    const conf = settings.pdfHeadings?.[level] || {};
    const scale = PDF_HEADING_SIZE_PRESETS[conf.size] || 1;
    return {
      size: base * fontScale * scale,
      color: colorOr(conf.color, text),
      family: fontStack(conf.fontFamily || settings.pdfFontFamily),
    };
  };
  const h1 = heading("h1", 15);
  const h2 = heading("h2", 13);
  const h3 = heading("h3", 11.5);

  const logoPos = posOf("logo");
  const watermarkPos = posOf("watermark");
  const footerPos = posOf("footer");
  const numberPos = posOf("pageNumber");

  const headerLogoStyle = logoPos
    ? { left: `${logoPos.xPct}%`, top: `${logoPos.yPct}%`, transform: "translate(-50%, -50%)" }
    : settings.pdfLogoPosition === "center"
    ? { left: "50%", top: `${pctY(4)}%`, transform: "translateX(-50%)" }
    : settings.pdfLogoPosition === "right"
    ? { right: `${pctX(marginMm)}%`, top: `${pctY(4)}%` }
    : { left: `${pctX(marginMm)}%`, top: `${pctY(4)}%` };

  const showHeader = settings.pdfShowHeader !== false;
  const watermarkOn = settings.pdfWatermarkEnabled !== false;
  const wmStyle = settings.pdfWatermarkStyle || "brand";
  const wmText = settings.pdfWatermarkText || "SaadConcours";
  // Shown at its true value, deliberately: an earlier version boosted it so
  // the watermark stayed visible in the editor, which meant a watermark set
  // to 2% looked fine here and came out invisible in the PDF. If it can't be
  // seen on this page, it can't be seen on paper either.
  const wmOpacity = settings.pdfWatermarkOpacity ?? PDF_WATERMARK_OPACITY_RANGE.default;
  const wmScreenOpacity = wmOpacity;

  const footerParts = ["saadconcours.space", settings.facebook && "Facebook", settings.instagram && "Instagram", settings.whatsapp && "WhatsApp"].filter(Boolean);

  return (
    <>
      {/* margin guide */}
      <div
        className="pdfx-guide-margins"
        style={{
          left: `${pctX(marginMm)}%`,
          right: `${pctX(marginMm)}%`,
          top: `${pctY(marginMm + 8)}%`,
          bottom: `${pctY(marginMm)}%`,
        }}
      />

      {settings.pdfBorderEnabled === true && (
        <div
          className="pdfx-guide-border"
          style={{
            left: `${pctX(settings.pdfBorderInset ?? PDF_BORDER_INSET_RANGE.default)}%`,
            right: `${pctX(settings.pdfBorderInset ?? PDF_BORDER_INSET_RANGE.default)}%`,
            top: `${pctY(settings.pdfBorderInset ?? PDF_BORDER_INSET_RANGE.default)}%`,
            bottom: `${pctY(settings.pdfBorderInset ?? PDF_BORDER_INSET_RANGE.default)}%`,
            borderColor: colorOr(settings.pdfBorderColor, accent),
            borderWidth: Math.max(1, mm(settings.pdfBorderWidth ?? PDF_BORDER_WIDTH_RANGE.default)),
          }}
        />
      )}

      {/* tiled watermark ignores the drag position by design */}
      {watermarkOn && wmStyle === "tiled" && (
        <div className="pdfx-watermark-tiled" style={{ opacity: wmScreenOpacity }}>
          {Array.from({ length: 7 }).map((_, row) =>
            Array.from({ length: 4 }).map((__, col) => (
              <span
                key={`${row}-${col}`}
                style={{
                  left: `${pctX(col * 68)}%`,
                  top: `${pctY(row * 50)}%`,
                  fontFamily: family,
                  fontSize: pt(15),
                  color: accent,
                  transform: `translate(-50%, -50%) rotate(${-(settings.pdfWatermarkRotation ?? 45)}deg)`,
                }}
              >
                {wmText}
              </span>
            ))
          )}
        </div>
      )}

      {watermarkOn && wmStyle !== "tiled" && (
        <Node
          {...nodeProps("watermark", "Filigrane")}
          style={
            wmStyle === "brand"
              ? {
                  left: `${watermarkPos?.xPct ?? 50}%`,
                  top: `${(watermarkPos?.yPct ?? 50) - pctY(30)}%`,
                  transform: "translateX(-50%)",
                  opacity: wmScreenOpacity,
                }
              : {
                  left: `${watermarkPos?.xPct ?? 50}%`,
                  top: `${(watermarkPos?.yPct ?? 50) - pctY(34 * PT_TO_MM * 0.3)}%`,
                  transform: `translateX(-50%) rotate(${-(settings.pdfWatermarkRotation ?? 45)}deg)`,
                  opacity: wmScreenOpacity,
                }
          }
        >
          {wmStyle === "brand" ? (
            <div className="pdfx-watermark" style={{ fontFamily: family, color: accent }}>
              {settings.pdfLogoDataUrl ? (
                <img src={settings.pdfLogoDataUrl} alt="" style={{ width: mm(26), objectFit: "contain" }} />
              ) : (
                <MarkSvg color={accent} size={mm(26)} variant="line" />
              )}
              <span style={{ fontSize: pt(30), lineHeight: 1 }}>{wmText}</span>
            </div>
          ) : (
            <span style={{ fontFamily: family, color: accent, fontSize: pt(34), fontWeight: 800, whiteSpace: "nowrap" }}>{wmText}</span>
          )}
        </Node>
      )}

      {/* body text mock — real fonts, sizes, colors and spacing */}
      <div
        className="pdfx-body"
        style={{
          left: `${pctX(marginMm)}%`,
          right: `${pctX(marginMm)}%`,
          top: `${pctY(marginMm + 10)}%`,
          bottom: `${pctY(marginMm + 14)}%`,
          fontFamily: family,
          color: text,
        }}
      >
        <div style={{ fontFamily: h1.family, color: h1.color, fontSize: pt(h1.size), fontWeight: 700, lineHeight: 1.25 }}>
          Analyse financière
        </div>
        <p style={{ fontSize: pt(baseSize), lineHeight: `${lineHeightPx(baseSize)}px`, marginTop: mm(2.5) }}>{SAMPLE_PARAGRAPH}</p>

        <div style={{ marginTop: mm(3.5) }}>
          {settings.pdfHeadingRule === true && (
            <div style={{ height: 1, background: "#dcdfe8", marginBottom: mm(1.6) }} />
          )}
          <div style={{ fontFamily: h2.family, color: h2.color, fontSize: pt(h2.size), fontWeight: 700, lineHeight: 1.25 }}>
            1.2 Les pratiques de gestion
          </div>
        </div>
        <p style={{ fontSize: pt(baseSize), lineHeight: `${lineHeightPx(baseSize)}px`, marginTop: mm(1.6) }}>
          Le besoin en fonds de roulement représente le décalage de trésorerie né du cycle d'exploitation.
        </p>

        <table className="pdfx-mock-table" style={{ fontSize: pt(8.5 * fontScale), marginTop: mm(3) }}>
          <thead>
            <tr style={{ background: accent }}>
              <th>Indicateur</th>
              <th>Valeur</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fonds de roulement</td>
              <td>1 200</td>
            </tr>
            <tr>
              <td>Trésorerie nette</td>
              <td>400</td>
            </tr>
          </tbody>
        </table>

        <div
          style={{
            fontFamily: h3.family,
            color: h3.color,
            fontSize: pt(h3.size),
            fontWeight: 700,
            marginTop: mm(3.5),
            lineHeight: 1.25,
          }}
        >
          Sous-section
        </div>
        <div style={{ marginTop: mm(1.8), display: "flex", flexDirection: "column", gap: mm(1.4 * spacing), color: text }}>
          <div className="pdfx-fill-line" style={{ width: "100%" }} />
          <div className="pdfx-fill-line" style={{ width: "94%" }} />
          <div className="pdfx-fill-line" style={{ width: "78%" }} />
        </div>
      </div>

      {/* header block */}
      {showHeader && (
        <>
          <Node {...nodeProps("logo", "Logo d'en-tête")} style={headerLogoStyle}>
            {settings.pdfLogoDataUrl ? (
              <img src={settings.pdfLogoDataUrl} alt="" style={{ height: mm(9), objectFit: "contain", display: "block" }} />
            ) : (
              <div className="pdfx-mock-head">
                <MarkSvg color={accent} size={mm(7)} style={{ display: "block" }} />
                <div>
                  <div className="pdfx-mock-word" style={{ fontFamily: family, fontSize: pt(12) }}>
                    <span style={{ color: "#191c23" }}>Saad</span>
                    <span style={{ color: accent }}>Concours</span>
                  </div>
                  <div className="pdfx-mock-url" style={{ fontFamily: family, fontSize: pt(7.5) }}>
                    saadconcours.space
                  </div>
                </div>
              </div>
            )}
          </Node>
          {!logoPos && settings.pdfHeaderRule !== false && (
            <div
              className="pdfx-mock-rule"
              style={{ left: `${pctX(marginMm)}%`, right: `${pctX(marginMm)}%`, top: `${pctY(16.5)}%` }}
            />
          )}
        </>
      )}

      {/* footer block */}
      {(settings.pdfShowSocialFooter !== false || settings.pdfFooterText) && (
        <>
          {!footerPos && (
            <div
              className="pdfx-mock-rule"
              style={{ left: `${pctX(marginMm)}%`, right: `${pctX(marginMm)}%`, top: `${pctY(PAGE_H_MM - 13.5)}%` }}
            />
          )}
          <Node
            {...nodeProps("footer", "Pied de page")}
            style={{
              left: `${footerPos?.xPct ?? 50}%`,
              top: `${(footerPos?.yPct ?? pctY(PAGE_H_MM - 10)) - pctY(7.5 * PT_TO_MM * 0.75)}%`,
              transform: "translateX(-50%)",
            }}
          >
            <div className="pdfx-footer-block" style={{ fontFamily: family }}>
              {settings.pdfFooterText ? (
                <span style={{ fontSize: pt(7.5), fontStyle: "italic", color: "#8c909b" }}>{settings.pdfFooterText}</span>
              ) : null}
              {settings.pdfShowSocialFooter !== false && (
                <span style={{ fontSize: pt(7.5), color: "#788091" }}>{footerParts.join("   ·   ")}</span>
              )}
            </div>
          </Node>
        </>
      )}

      {settings.pdfShowPageNumbers === true && (
        <Node
          {...nodeProps("pageNumber", "Numéro de page")}
          style={{
            left: `${numberPos?.xPct ?? 100 - pctX(marginMm)}%`,
            top: `${(numberPos?.yPct ?? pctY(PAGE_H_MM - 6)) - pctY(7.5 * PT_TO_MM * 0.75)}%`,
            transform: numberPos ? "translateX(-50%)" : "translateX(-100%)",
          }}
        >
          <span style={{ fontFamily: family, fontSize: pt(7.5), color: "#aaaeb9" }}>1 / 4</span>
        </Node>
      )}
    </>
  );
}

// ======================================================================
//  Cover page mock
// ======================================================================

function renderCover({ settings, sample, mm, pt, pctX, pctY, marginMm, accent, text, family, posOf, nodeProps }) {
  const align = settings.pdfCoverAlign === "left" ? "left" : "center";
  const scale = settings.pdfCoverTextScale ?? 1;
  const titleSize = settings.pdfCoverTitleSize ?? 22;
  const logoSize = settings.pdfCoverLogoSize ?? 30;

  // Same available-width rule as pdfCover.js's drawText, so a line wraps at
  // the same word here as it does in the PDF.
  const widthFor = (xPct) => {
    const xMm = (xPct / 100) * PAGE_W_MM;
    const avail =
      align === "left"
        ? Math.max(30, PAGE_W_MM - marginMm - xMm)
        : Math.max(30, Math.min(xMm - marginMm, PAGE_W_MM - marginMm - xMm) * 2);
    return Math.min(avail, PAGE_W_MM - marginMm * 2);
  };

  const textNode = (key, label, content, { size, color, weight = 400 }) => {
    const pos = posOf(key);
    const width = widthFor(pos.xPct);
    return (
      <Node
        key={key}
        {...nodeProps(key, label)}
        style={{
          left: `${pos.xPct}%`,
          top: `${pos.yPct}%`,
          width: mm(width),
          transform: align === "center" ? "translateX(-50%)" : "none",
          textAlign: align,
        }}
      >
        <p
          className="pdfx-cover-text"
          style={{
            fontFamily: family,
            fontSize: pt(size),
            color,
            fontWeight: weight,
            lineHeight: COVER_LINE_HEIGHT,
          }}
        >
          {content}
        </p>
      </Node>
    );
  };

  const logoPos = posOf("logo");
  const rulePos = posOf("rule");
  const ruleWidth = settings.pdfCoverRuleWidth ?? 40;

  return (
    <>
      {settings.pdfCoverBackgroundColor && isHex(settings.pdfCoverBackgroundColor) && (
        <div style={{ position: "absolute", inset: 0, background: settings.pdfCoverBackgroundColor, zIndex: 0 }} />
      )}

      {settings.pdfCoverAccentBar === true && (
        <div
          className="pdfx-cover-bar"
          style={{ height: mm(settings.pdfCoverAccentBarHeight ?? 10), background: accent }}
        />
      )}

      <div
        className="pdfx-guide-margins"
        style={{ left: `${pctX(marginMm)}%`, right: `${pctX(marginMm)}%`, top: `${pctY(marginMm)}%`, bottom: `${pctY(marginMm)}%` }}
      />

      {settings.pdfCoverShowLogo !== false && logoSize > 0 && (
        <Node
          {...nodeProps("logo", "Logo")}
          style={{
            left: `${logoPos.xPct}%`,
            top: `${logoPos.yPct}%`,
            transform: align === "center" ? "translateX(-50%)" : "none",
          }}
        >
          {settings.pdfLogoDataUrl ? (
            <img src={settings.pdfLogoDataUrl} alt="" style={{ width: mm(logoSize), display: "block" }} />
          ) : (
            <MarkSvg color={accent} size={mm(logoSize)} style={{ display: "block" }} />
          )}
        </Node>
      )}

      {settings.pdfCoverShowEyebrow !== false &&
        textNode("eyebrow", "Sur-titre", (sample.eyebrow || "").toUpperCase(), {
          size: COVER_BASE_SIZES.eyebrow * scale,
          color: colorOr(settings.pdfCoverEyebrowColor, accent),
          weight: 700,
        })}

      {textNode("title", "Titre", sample.title, {
        size: titleSize,
        color: colorOr(settings.pdfCoverTitleColor, text),
        weight: 700,
      })}

      {settings.pdfCoverShowDescription !== false &&
        textNode("subtitle", "Description", sample.subtitle, {
          size: COVER_BASE_SIZES.subtitle * scale,
          color: colorOr(settings.pdfCoverSubtitleColor, "#646874"),
        })}

      {settings.pdfCoverShowDate === true &&
        textNode("date", "Date", sample.date, {
          size: COVER_BASE_SIZES.date * scale,
          color: "#8c909b",
        })}

      {settings.pdfCoverShowRule !== false && (
        <Node
          {...nodeProps("rule", "Trait")}
          style={{
            left: `${rulePos.xPct}%`,
            top: `${rulePos.yPct}%`,
            width: mm(ruleWidth),
            transform: align === "center" ? "translateX(-50%)" : "none",
          }}
        >
          <div className="pdfx-cover-rule" style={{ background: accent, height: Math.max(1.5, mm(0.6)) }} />
        </Node>
      )}

      {settings.pdfCoverShowTagline !== false &&
        textNode("tagline", "Mention", settings.pdfCoverTagline || "SaadConcours", {
          size: COVER_BASE_SIZES.tagline * scale,
          color: colorOr(settings.pdfCoverTaglineColor, "#969aa5"),
        })}
    </>
  );
}
