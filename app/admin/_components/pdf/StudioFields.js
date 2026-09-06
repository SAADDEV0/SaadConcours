"use client";

// The PDF studio's control vocabulary. Every inspector row is one of these
// six, which is what keeps a panel definition readable as a list of settings
// instead of forty lines of markup each.

import { useId, useState } from "react";
import { isHex } from "@/app/_shared/pdfTheme";

export function Field({ label, value, hint, children }) {
  return (
    <div className="pdfx-field">
      {label && (
        <span className="pdfx-label">
          {label}
          {value !== undefined && <span className="pdfx-label-value">{value}</span>}
        </span>
      )}
      {children}
      {hint && <span className="pdfx-help">{hint}</span>}
    </div>
  );
}

export function SelectField({ label, hint, value, options, onChange }) {
  return (
    <Field label={label} hint={hint}>
      <select className="pdfx-select" value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </Field>
  );
}

// Same data as SelectField, but for 2–3 short options where seeing all of
// them at once beats opening a dropdown (alignment, font size…).
export function SegmentedField({ label, hint, value, options, onChange }) {
  return (
    <Field label={label} hint={hint}>
      <div className="pdfx-seg" role="group">
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            className={"pdfx-seg-btn" + (value === o.value ? " active" : "")}
            onClick={() => onChange(o.value)}
            aria-pressed={value === o.value}
          >
            {o.label}
          </button>
        ))}
      </div>
    </Field>
  );
}

export function SliderField({ label, hint, value, min, max, step = 1, format, onChange }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <Field label={label} hint={hint} value={format ? format(value) : value}>
      <input
        type="range"
        className="pdfx-range"
        style={{ "--pdfx-fill": `${pct}%` }}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </Field>
  );
}

export function TextField({ label, hint, value, placeholder, onChange }) {
  return (
    <Field label={label} hint={hint}>
      <input className="pdfx-input" value={value || ""} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
    </Field>
  );
}

// `fallback` is what the color picker shows while the field is empty — an
// empty value means "inherit" (the accent/text color, or no background at
// all), which a native <input type="color"> has no way to represent.
export function ColorField({ label, hint, value, fallback = "#4f46e5", clearable = false, onChange }) {
  return (
    <Field label={label} hint={hint}>
      <div className="pdfx-color">
        <input
          type="color"
          className="pdfx-swatch"
          value={isHex(value) ? value : fallback}
          onChange={(e) => onChange(e.target.value)}
          aria-label={label}
        />
        <input
          className="pdfx-input"
          value={value || ""}
          placeholder={clearable ? "Par défaut" : fallback}
          onChange={(e) => onChange(e.target.value)}
        />
        {clearable && value ? (
          <button type="button" className="pdfx-color-clear" onClick={() => onChange("")} title="Revenir à la couleur par défaut">
            ✕
          </button>
        ) : null}
      </div>
    </Field>
  );
}

export function SwitchField({ label, hint, checked, onChange }) {
  return (
    <label className="pdfx-switch">
      <span className="pdfx-switch-text">
        <span className="pdfx-switch-label">{label}</span>
        {hint && <span className="pdfx-switch-hint">{hint}</span>}
      </span>
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <span className="pdfx-switch-track">
        <span className="pdfx-switch-knob" />
      </span>
    </label>
  );
}

// Collapsible inspector group. Open by default for the section an admin
// most likely came for; the rest fold away so the panel stays scannable.
export function Section({ icon, title, badge, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  return (
    <div className={"pdfx-sec" + (open ? " open" : "")}>
      <button type="button" className="pdfx-sec-head" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls={id}>
        <span className="pdfx-sec-icon" aria-hidden="true">
          {icon}
        </span>
        {title}
        {badge && <span className="pdfx-sec-count">{badge}</span>}
        <span className="pdfx-sec-chevron" aria-hidden="true">
          ▶
        </span>
      </button>
      {open && (
        <div className="pdfx-sec-body" id={id}>
          {children}
        </div>
      )}
    </div>
  );
}
