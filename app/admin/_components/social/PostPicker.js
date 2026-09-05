"use client";

import { CONTENT_TYPES } from "./lib/contentTypes";
import { THEMES } from "./lib/image";

// Colonne de gauche : onglets de type de contenu + recherche + liste.
// Reste "sticky" côté panel principal (voir SocialGeneratorPanel) pour
// rester visible pendant qu'on regarde le résultat à droite.
export default function PostPicker({ tab, onSwitchTab, query, onQueryChange, filtered, meta, selectedId, onPick, badgeFor }) {
  return (
    <div className="admin-card social-picker-card">
      <h2 className="admin-section-title">📣 Générateur de post</h2>
      <p className="admin-image-hint" style={{ marginBottom: 16 }}>
        Choisis un concours, une actu, un article de blog ou une évaluation : texte prêt à coller (avec hashtags SEO) +
        image générée automatiquement, pour Instagram, Facebook ou WhatsApp.
      </p>

      <div className="admin-view-toggle social-gen-tabs" style={{ marginBottom: 14 }}>
        {CONTENT_TYPES.map((t) => (
          <button
            type="button"
            key={t.key}
            className={"admin-view-toggle-btn" + (tab === t.key ? " active" : "")}
            style={tab === t.key ? { background: THEMES[t.key].grad[1] } : undefined}
            onClick={() => onSwitchTab(t.key)}
          >
            {t.tabIcon} {t.tabLabel}
          </button>
        ))}
      </div>

      <input
        className="admin-search-input"
        style={{ width: "100%", marginBottom: 10 }}
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Rechercher..."
      />

      <div className="picker-list">
        {filtered === null && <div className="empty-state">Chargement...</div>}
        {filtered !== null &&
          filtered.map((item) => {
            const badge = badgeFor ? badgeFor(item) : null;
            return (
              <label
                className={"picker-row" + (item.id === selectedId ? " active" : "")}
                key={item.id}
                onClick={() => onPick(item)}
              >
                <span className="picker-row-main">
                  <span className="picker-row-title">
                    {meta.listTitle(item)}
                    {badge && (
                      <span className="picker-row-badge" title={badge}>
                        ⚠️
                      </span>
                    )}
                  </span>
                  <span className="picker-row-meta">{meta.listMeta(item)}</span>
                </span>
                {meta.listRight(item) && <span className="picker-row-date">{meta.listRight(item)}</span>}
              </label>
            );
          })}
        {filtered !== null && !filtered.length && <div className="empty-state">Aucun résultat.</div>}
      </div>
    </div>
  );
}
