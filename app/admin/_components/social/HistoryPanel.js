"use client";

import { formatDateFr } from "./lib/contentTypes";

const STATUS_LABELS = {
  genere: { icon: "👁", text: "Généré" },
  copie: { icon: "📋", text: "Texte copié" },
  telecharge: { icon: "⬇️", text: "Image téléchargée" },
  partage: { icon: "📤", text: "Partagé" },
  publie: { icon: "✅", text: "Publié sur Facebook" },
  programme: { icon: "🕒", text: "Programmé" },
};

function formatDateTimeFr(iso) {
  if (!iso) return "—";
  try {
    return new Date(iso).toLocaleString("fr-FR", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
  } catch {
    return iso;
  }
}

// Historique local (localStorage, voir lib/history.js) des posts générés,
// copiés, téléchargés, partagés ou publiés — et des rappels "programmés"
// pour plus tard. Pas d'auto-publication à l'heure dite (voir le
// commentaire dans lib/history.js) : "programmer" ici veut dire "me le
// remettre sous les yeux", pas "publier tout seul sans validation".
export default function HistoryPanel({ history, onReopen, onRemove, onCancelSchedule }) {
  const scheduled = history.filter((e) => e.status === "programme");
  const rest = history.filter((e) => e.status !== "programme");

  if (!history.length) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">🗂️</div>
        Aucun post généré pour l'instant. Choisis un contenu à gauche pour commencer.
      </div>
    );
  }

  return (
    <div className="social-history">
      {scheduled.length > 0 && (
        <div className="social-history-section">
          <h3 className="social-history-heading">🕒 Programmés</h3>
          <div className="social-history-list">
            {scheduled.map((e) => (
              <div className="social-history-row scheduled" key={e.id}>
                <div className="social-history-row-main" onClick={() => onReopen(e)}>
                  <span className="social-history-row-title">{e.itemLabel}</span>
                  <span className="social-history-row-meta">
                    Prévu pour le {formatDateTimeFr(e.scheduledFor)} · {e.formatLabel}
                  </span>
                </div>
                <div className="social-history-row-actions">
                  <button type="button" className="admin-icon-btn" title="Reprendre ce post" onClick={() => onReopen(e)}>
                    ↻
                  </button>
                  <button
                    type="button"
                    className="admin-icon-btn danger"
                    title="Annuler la programmation"
                    onClick={() => onCancelSchedule(e.id)}
                  >
                    🗑
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {rest.length > 0 && (
        <div className="social-history-section">
          <h3 className="social-history-heading">Récents</h3>
          <div className="social-history-list">
            {rest.map((e) => {
              const status = STATUS_LABELS[e.status] || STATUS_LABELS.genere;
              return (
                <div className="social-history-row" key={e.id}>
                  <div className="social-history-row-main" onClick={() => onReopen(e)}>
                    <span className="social-history-row-title">{e.itemLabel}</span>
                    <span className="social-history-row-meta">
                      {status.icon} {status.text} · {formatDateFr(e.createdAt?.slice(0, 10))}
                      {e.url && (
                        <>
                          {" · "}
                          <a href={e.url} target="_blank" rel="noopener noreferrer" onClick={(ev) => ev.stopPropagation()}>
                            Voir ↗
                          </a>
                        </>
                      )}
                    </span>
                  </div>
                  <div className="social-history-row-actions">
                    <button type="button" className="admin-icon-btn" title="Reprendre ce post" onClick={() => onReopen(e)}>
                      ↻
                    </button>
                    <button type="button" className="admin-icon-btn danger" title="Retirer de l'historique" onClick={() => onRemove(e.id)}>
                      🗑
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
