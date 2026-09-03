"use client";

import { STATUT_OPTIONS, statutValue } from "../../_lib/statut";

/* A concours moves brouillon -> sujet_publie -> corrige_en_cours -> pret as
 * it's worked on, tracked in a plain "statut" field on the concours object
 * itself (nothing new to sync). Existing concours predating this field have
 * no `statut` at all — treated as "pret" (not "brouillon"), since they're
 * already live on the public site; only new/imported entries default to
 * "brouillon" (see addConcours/addConcoursBulk in lib/store.js). */

export default function ConcoursPipeline({ list, onEdit, onDelete, onChangeStatut }) {
  return (
    <div className="pipeline-board">
      {STATUT_OPTIONS.map((col) => {
        const items = list.filter((i) => statutValue(i) === col.value);
        return (
          <div className="pipeline-col" key={col.value}>
            <div className="pipeline-col-head">
              <span>{col.label}</span>
              <span className="pipeline-col-count">{items.length}</span>
            </div>
            <div className="pipeline-col-body">
              {items.length ? (
                items.map((item) => (
                  <div className="pipeline-card" key={item.id}>
                    <div className="pipeline-card-title" onClick={() => onEdit(item)}>
                      {item.etablissement || item.id}
                    </div>
                    <div className="pipeline-card-meta">
                      {[item.ville, item.filiere, item.annee].filter(Boolean).join(" · ")}
                    </div>
                    <div className="pipeline-card-actions">
                      <select
                        className="pipeline-move-select"
                        value={col.value}
                        onChange={(e) => onChangeStatut(item.id, e.target.value)}
                      >
                        {STATUT_OPTIONS.map((o) => (
                          <option key={o.value} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                      <button type="button" className="admin-icon-btn danger" title="Supprimer" onClick={() => onDelete(item.id)}>
                        🗑️
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="pipeline-col-empty">Vide</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
