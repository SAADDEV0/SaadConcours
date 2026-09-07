"use client";

import { useMemo, useState } from "react";
import { ACTIONS, isDue } from "./lib/history";
import { PLATFORMS, PlatformIcon, platformFor } from "./lib/platforms";
import { CONTENT_TYPES } from "./lib/contentTypes";

/* --------------------------------- Historique ---------------------------------
 * Sert à répondre à « qu'est-ce qui est déjà sorti, et où ? » sans avoir à se
 * souvenir : bandeau de compteurs par réseau, filtres, et journal groupé par
 * jour. Une ligne « publié » peut être retirée — c'est le seul moyen de
 * corriger un « J'ai publié » cliqué par erreur, sinon l'avertissement de
 * doublon resterait faux pour toujours.
 * ------------------------------------------------------------------------ */

function dayKey(iso) {
  return String(iso || "").slice(0, 10);
}

function dayLabel(key) {
  const today = new Date().toISOString().slice(0, 10);
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  if (key === today) return "Aujourd'hui";
  if (key === yesterday) return "Hier";
  try {
    return new Date(key + "T00:00:00").toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  } catch {
    return key;
  }
}

function timeLabel(iso) {
  try {
    return new Date(iso).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
  } catch {
    return "";
  }
}

function dueLabel(iso) {
  try {
    return new Date(iso).toLocaleString("fr-FR", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
  } catch {
    return iso;
  }
}

export default function HistoryPanel({ history, reminders, onReopen, onRemove, onDoneReminder, onClear }) {
  const [platformFilter, setPlatformFilter] = useState("all");
  const [publishedOnly, setPublishedOnly] = useState(true);

  const stats = useMemo(() => {
    const map = {};
    for (const e of history) {
      if (e.action !== "publie") continue;
      map[e.platform] = (map[e.platform] || 0) + 1;
    }
    return map;
  }, [history]);

  const rows = useMemo(
    () =>
      history.filter(
        (e) =>
          e.action !== "rappel" &&
          (platformFilter === "all" || e.platform === platformFilter) &&
          (!publishedOnly || e.action === "publie")
      ),
    [history, platformFilter, publishedOnly]
  );

  const days = useMemo(() => {
    const out = [];
    let current = null;
    for (const e of rows) {
      const key = dayKey(e.at);
      if (!current || current.key !== key) {
        current = { key, rows: [] };
        out.push(current);
      }
      current.rows.push(e);
    }
    return out;
  }, [rows]);

  const totalPublished = Object.values(stats).reduce((a, b) => a + b, 0);

  return (
    <div className="sgx-history">
      <div className="sgx-history-stats">
        <div className="sgx-stat sgx-stat-total">
          <strong>{totalPublished}</strong>
          <span>publication{totalPublished > 1 ? "s" : ""}</span>
        </div>
        {PLATFORMS.filter((p) => stats[p.key]).map((p) => (
          <div className="sgx-stat" key={p.key} style={{ "--tile": p.gradient || p.color }}>
            <span className="sgx-stat-icon">
              <PlatformIcon platform={p.key} size={14} />
            </span>
            <strong>{stats[p.key]}</strong>
            <span>{p.label}</span>
          </div>
        ))}
      </div>

      {reminders.length > 0 && (
        <div className="sgx-history-block">
          <h3 className="sgx-history-heading">🕒 Rappels</h3>
          {reminders.map((e) => (
            <div className={"sgx-history-row reminder" + (isDue(e) ? " due" : "")} key={e.id}>
              <span className="sgx-history-chip" style={{ background: "var(--amber)" }}>
                🕒
              </span>
              <button type="button" className="sgx-history-main" onClick={() => onReopen(e)}>
                <span className="sgx-history-title">{e.itemLabel}</span>
                <span className="sgx-history-meta">
                  {isDue(e) ? "À publier maintenant · " : "Prévu le "}
                  {dueLabel(e.dueAt)}
                </span>
              </button>
              <div className="sgx-history-actions">
                <button type="button" className="admin-icon-btn" title="Reprendre" onClick={() => onReopen(e)}>
                  ↻
                </button>
                <button type="button" className="admin-icon-btn" title="Marquer comme fait" onClick={() => onDoneReminder(e.id)}>
                  ✓
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="sgx-history-filters">
        <button
          type="button"
          className={"sgx-chip" + (platformFilter === "all" ? " active" : "")}
          onClick={() => setPlatformFilter("all")}
        >
          Tous les réseaux
        </button>
        {PLATFORMS.filter((p) => stats[p.key]).map((p) => (
          <button
            key={p.key}
            type="button"
            className={"sgx-chip" + (platformFilter === p.key ? " active" : "")}
            onClick={() => setPlatformFilter(p.key)}
          >
            {p.label}
          </button>
        ))}
        <label className={"sgx-chip sgx-chip-toggle" + (publishedOnly ? " active" : "")}>
          <input type="checkbox" checked={publishedOnly} onChange={(e) => setPublishedOnly(e.target.checked)} />
          Publications seulement
        </label>
        {history.length > 0 && (
          <button type="button" className="sgx-linkbtn danger" onClick={onClear}>
            Vider l'historique
          </button>
        )}
      </div>

      {!days.length && (
        <div className="empty-state">
          <div className="empty-state-icon">🗂️</div>
          {history.length
            ? "Rien avec ce filtre."
            : "Aucun post enregistré pour l'instant. Partage un contenu et confirme « J'ai publié »."}
        </div>
      )}

      {days.map((day) => (
        <div className="sgx-history-block" key={day.key}>
          <h3 className="sgx-history-heading">{dayLabel(day.key)}</h3>
          {day.rows.map((e) => {
            const p = platformFor(e.platform);
            const action = ACTIONS[e.action] || ACTIONS.prepare;
            const type = CONTENT_TYPES.find((t) => t.key === e.kind);
            return (
              <div className="sgx-history-row" key={e.id}>
                <span className="sgx-history-chip" style={{ background: p.gradient || p.color }}>
                  <PlatformIcon platform={p.key} size={13} />
                </span>
                <button type="button" className="sgx-history-main" onClick={() => onReopen(e)}>
                  <span className="sgx-history-title">{e.itemLabel}</span>
                  <span className="sgx-history-meta">
                    {action.icon} {action.label} · {p.label} · {timeLabel(e.at)}
                    {type ? ` · ${type.tabLabel}` : ""}
                  </span>
                </button>
                <div className="sgx-history-actions">
                  <button type="button" className="admin-icon-btn" title="Reprendre ce post" onClick={() => onReopen(e)}>
                    ↻
                  </button>
                  <button
                    type="button"
                    className="admin-icon-btn danger"
                    title="Retirer de l'historique"
                    onClick={() => onRemove(e.id)}
                  >
                    🗑
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
