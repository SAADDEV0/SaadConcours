"use client";

import { useEffect, useState } from "react";
import Icon from "../../_ui/Icon";
import { Switch } from "../../_ui/kit";

// Briques du Studio PDF. Volontairement locales : le reste de la console n'a
// pas besoin d'un sélecteur de couleur avec validation ni d'un curseur avec
// remise à zéro.

export const ACCENT_PRESETS = ["#4f46e5", "#2563eb", "#0f766e", "#059669", "#b45309", "#be123c", "#9f1239", "#7c3aed", "#334155"];
export const TEXT_PRESETS = ["#1a1d27", "#111827", "#0f172a", "#1c1917", "#27272a", "#374151"];
export const BACKGROUND_PRESETS = ["#ffffff", "#faf5ee", "#eef2ff", "#ecfdf5", "#0f172a", "#0f766e", "#1e3a8a", "#4c1d95", "#881337"];

const HEX_RE = /^#[0-9a-f]{6}$/i;

// Accepte « #abc », « abc », « #AABBCC » ; renvoie « #aabbcc » ou null.
export function normalizeHex(input) {
  let t = String(input || "").trim();
  if (!t) return null;
  if (!t.startsWith("#")) t = `#${t}`;
  if (/^#[0-9a-f]{3}$/i.test(t)) t = `#${[...t.slice(1)].map((c) => c + c).join("")}`;
  return HEX_RE.test(t) ? t.toLowerCase() : null;
}

function luminance(hex) {
  const n = parseInt(hex.slice(1), 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// Rapport de contraste WCAG entre deux couleurs hexadécimales (1 à 21).
export function contrastRatio(a, b) {
  if (!HEX_RE.test(a || "") || !HEX_RE.test(b || "")) return 21;
  const [l1, l2] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
}

export function Panel({ title, lead, children }) {
  return (
    <>
      <div className="ax-ps-panel-head">
        <h2>{title}</h2>
        {lead && <p>{lead}</p>}
      </div>
      {children}
    </>
  );
}

export function Group({ title, aside, children }) {
  return (
    <section className="ax-ps-group">
      {(title || aside) && (
        <div className="ax-ps-group-head">
          {title && <h3>{title}</h3>}
          {aside}
        </div>
      )}
      {children}
    </section>
  );
}

export function Row({ label, hint, aside, children }) {
  return (
    <div className="ax-ps-row">
      {(label || aside) && (
        <div className="ax-ps-row-head">
          {label && <span>{label}</span>}
          {aside}
        </div>
      )}
      {children}
      {hint && <span className="ax-hint">{hint}</span>}
    </div>
  );
}

export function SwitchRow({ label, hint, checked, onChange, children }) {
  return (
    <div className="ax-ps-switch">
      <Switch checked={checked} onChange={onChange} label={label} />
      {hint && <span className="ax-hint">{hint}</span>}
      {checked && children && <div className="ax-ps-sub">{children}</div>}
    </div>
  );
}

const fmtNum = (v, step) => String(Number(v).toFixed(step < 1 ? (step < 0.1 ? 2 : 1) : 0)).replace(".", ",");

// Curseur avec valeur affichée et, dès qu'on s'écarte du réglage d'origine,
// un bouton pour y revenir.
export function RangeRow({ label, value, onChange, range, unit = "", format, defaultValue, hint }) {
  const step = range.step || 1;
  const v = Number.isFinite(Number(value)) ? Number(value) : range.default;
  const reset = defaultValue !== undefined && Math.abs(v - defaultValue) > 1e-9;
  return (
    <Row
      label={label}
      hint={hint}
      aside={
        <span className="ax-ps-value">
          {reset && (
            <button type="button" className="ax-ps-reset" onClick={() => onChange(defaultValue)} title="Revenir à la valeur d'origine" aria-label={`${label} : valeur d'origine`}>
              <Icon name="restore" size="sm" />
            </button>
          )}
          <output>{format ? format(v) : `${fmtNum(v, step)}${unit}`}</output>
        </span>
      }
    >
      <input className="ax-ps-range" type="range" min={range.min} max={range.max} step={step} value={v} onChange={(e) => onChange(Number(e.target.value))} aria-label={label} />
    </Row>
  );
}

// Couleur : pastille (sélecteur natif), saisie hexadécimale validée — une
// valeur à moitié tapée n'est jamais enregistrée — et nuancier optionnel.
// `allowEmpty` : la couleur peut rester « automatique » (repli sur `fallback`).
export function ColorInput({ value, onChange, fallback = "#4f46e5", allowEmpty, presets, label }) {
  const [draft, setDraft] = useState(value || "");
  useEffect(() => setDraft(value || ""), [value]);
  const shown = HEX_RE.test(value || "") ? value : HEX_RE.test(fallback || "") ? fallback : "#000000";

  function commit(raw) {
    const hex = normalizeHex(raw);
    if (hex) {
      if (hex !== value) onChange(hex);
      setDraft(hex);
    } else if (!String(raw).trim() && allowEmpty) {
      if (value) onChange("");
      setDraft("");
    } else {
      setDraft(value || "");
    }
  }

  return (
    <div className="ax-ps-color-wrap">
      <div className="ax-ps-color">
        <label className="ax-ps-swatch" style={{ background: shown }} title="Choisir une couleur">
          <input type="color" value={shown} onChange={(e) => onChange(e.target.value)} aria-label={label ? `${label} : sélecteur` : "Sélecteur de couleur"} />
        </label>
        <input
          className="ax-input sm ax-mono"
          value={draft}
          spellCheck={false}
          placeholder={allowEmpty ? `Auto · ${fallback}` : fallback}
          aria-label={label ? `${label} : code hexadécimal` : "Code hexadécimal"}
          onChange={(e) => {
            setDraft(e.target.value);
            if (/^#?[0-9a-f]{6}$/i.test(e.target.value.trim())) commit(e.target.value);
          }}
          onBlur={(e) => commit(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              commit(e.currentTarget.value);
            }
          }}
        />
        {allowEmpty && value && (
          <button type="button" className="ax-btn ghost xs" onClick={() => onChange("")} title="Revenir à la couleur automatique">
            Auto
          </button>
        )}
      </div>
      {presets && (
        <div className="ax-ps-presets" role="group" aria-label="Nuancier">
          {presets.map((p) => (
            <button key={p} type="button" className={p === (value || "").toLowerCase() ? "on" : ""} style={{ background: p }} onClick={() => onChange(p)} title={p} aria-label={p} />
          ))}
        </div>
      )}
    </div>
  );
}

export function ColorRow({ label, hint, ...props }) {
  return (
    <Row label={label} hint={hint}>
      <ColorInput label={label} {...props} />
    </Row>
  );
}

export function ContrastWarning({ fg, bg, min = 3, children }) {
  const ratio = contrastRatio(fg, bg);
  if (ratio >= min) return null;
  return (
    <p className="ax-ps-warn">
      <Icon name="alert" size="sm" />
      <span>
        {children} <em>(contraste {ratio.toFixed(1).replace(".", ",")}:1)</em>
      </span>
    </p>
  );
}

// ---- Logo ----------------------------------------------------------------

const MAX_LOGO_INPUT = 8 * 1024 * 1024;
const LOGO_MAX_PX = 600;

function readAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(String(r.result));
    r.onerror = () => reject(new Error("Lecture du fichier impossible."));
    r.readAsDataURL(file);
  });
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Image illisible."));
    img.src = src;
  });
}

// Le logo est intégré à chaque PDF *et* stocké dans settings.json, que le
// site relit souvent : il est ramené à 600 px de côté au plus et converti
// en PNG (transparence conservée) — ou en JPEG sur fond blanc si le PNG
// reste lourd (une photo). Au passage, WebP et SVG, que jsPDF ne sait pas
// intégrer, deviennent utilisables.
export async function prepareLogo(file) {
  if (!/^image\/(png|jpeg|webp|svg\+xml)$/.test(file.type)) throw new Error("Formats acceptés : PNG, JPG, WebP ou SVG.");
  if (file.size > MAX_LOGO_INPUT) throw new Error("Fichier trop lourd (8 Mo maximum).");
  const img = await loadImage(await readAsDataUrl(file));
  const w0 = img.naturalWidth || 512;
  const h0 = img.naturalHeight || 512;
  const scale = Math.min(1, LOGO_MAX_PX / Math.max(w0, h0));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(w0 * scale));
  canvas.height = Math.max(1, Math.round(h0 * scale));
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  let dataUrl = canvas.toDataURL("image/png");
  if (dataUrl.length > 300 * 1024) {
    ctx.globalCompositeOperation = "destination-over";
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    dataUrl = canvas.toDataURL("image/jpeg", 0.88);
  }
  return { dataUrl, width: canvas.width, height: canvas.height, kb: Math.round((dataUrl.length * 3) / 4 / 1024) };
}
