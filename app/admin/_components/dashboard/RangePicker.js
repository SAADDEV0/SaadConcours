"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "../ui/Icon";
import { RANGE_PRESETS, formatDayFr, isDayKey } from "@/lib/dateRange";

// The control the whole dashboard hangs off. Every series, total and delta on
// the page is scoped to what's selected here — before it existed each widget
// carried its own hard-coded window ("aujourd'hui", "7 derniers jours",
// "6 derniers mois") and the page simply could not answer "et le mois
// dernier ?".
//
// Presets are segmented buttons rather than a <select>: there are five, they
// are the answer 95% of the time, and one click beats two. The custom range
// lives behind the sixth button so it costs nothing until needed.
export default function RangePicker({ range, onChange, busy }) {
  const [customOpen, setCustomOpen] = useState(false);
  const [draft, setDraft] = useState({ from: range.from, to: range.to });
  const popRef = useRef(null);

  useEffect(() => {
    setDraft({ from: range.from, to: range.to });
  }, [range.from, range.to]);

  useEffect(() => {
    if (!customOpen) return;
    function onDocClick(e) {
      if (popRef.current && !popRef.current.contains(e.target)) setCustomOpen(false);
    }
    function onKey(e) {
      if (e.key === "Escape") setCustomOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [customOpen]);

  const isCustom = range.preset === "custom";
  const draftValid = isDayKey(draft.from) && isDayKey(draft.to) && draft.from <= draft.to;
  const today = new Date().toISOString().slice(0, 10);

  function applyCustom(e) {
    e.preventDefault();
    if (!draftValid) return;
    onChange({ preset: "custom", from: draft.from, to: draft.to });
    setCustomOpen(false);
  }

  return (
    <div className="range-picker">
      <div className="range-picker-segments" role="group" aria-label="Période analysée">
        {RANGE_PRESETS.map((p) => (
          <button
            key={p.id}
            type="button"
            className={"range-seg" + (range.preset === p.id ? " active" : "")}
            onClick={() => onChange({ preset: p.id })}
            aria-pressed={range.preset === p.id}
            title={p.label}
          >
            {p.short}
          </button>
        ))}
        <div className="range-picker-custom" ref={popRef}>
          <button
            type="button"
            className={"range-seg range-seg-custom" + (isCustom ? " active" : "")}
            onClick={() => setCustomOpen((v) => !v)}
            aria-expanded={customOpen}
            aria-pressed={isCustom}
            title="Période personnalisée"
          >
            <Icon name="calendarClock" size={14} />
            {isCustom ? range.label : "Perso."}
          </button>

          {customOpen && (
            <form className="range-pop" onSubmit={applyCustom}>
              <label className="range-pop-field">
                <span className="ad-kicker">Du</span>
                <input
                  type="date"
                  value={draft.from}
                  max={draft.to || today}
                  onChange={(e) => setDraft((d) => ({ ...d, from: e.target.value }))}
                />
              </label>
              <label className="range-pop-field">
                <span className="ad-kicker">Au</span>
                <input
                  type="date"
                  value={draft.to}
                  min={draft.from}
                  max={today}
                  onChange={(e) => setDraft((d) => ({ ...d, to: e.target.value }))}
                />
              </label>
              <button type="submit" className="admin-btn small" disabled={!draftValid}>
                Appliquer
              </button>
              {!draftValid && <p className="range-pop-hint">Choisis une date de début antérieure à la date de fin.</p>}
            </form>
          )}
        </div>
      </div>

      <div className="range-picker-meta">
        <span className="range-picker-dates">
          {formatDayFr(range.from, { day: "numeric", month: "short", year: "numeric" })} →{" "}
          {formatDayFr(range.to, { day: "numeric", month: "short", year: "numeric" })}
        </span>
        {/* The comparison baseline is never guessed — say out loud which
            window every delta badge on the page is measured against. */}
        <span className="range-picker-compare">
          comparé au {formatDayFr(range.prevFrom)} → {formatDayFr(range.prevTo)}
        </span>
        {busy && <span className="range-picker-busy" aria-live="polite">actualisation…</span>}
      </div>
    </div>
  );
}
