"use client";

import { useEffect, useState } from "react";

// Filière is a fixed 2-level taxonomy now (lib/taxonomy.js: 5 catégories ×
// 3-4 sous-filières each) — the concours form's cascading select only lets
// the admin pick from that list, so "Marketing" vs "marketing" duplicates
// can't happen for new entries. This screen shows real coverage per
// sous-filière (the plan for expanding past FCA/MRH) plus a legacy merge
// tool for any value that predates the fixed list or slipped in via bulk
// import/API with something unrecognized.
const LOW_COVERAGE_THRESHOLD = 3;

export default function TaxonomyPanel() {
  const [counts, setCounts] = useState(null);
  const [coverage, setCoverage] = useState(null);
  const [error, setError] = useState("");
  const [renaming, setRenaming] = useState(null); // filiere name being renamed
  const [newName, setNewName] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");

  function load() {
    fetch("/api/admin/taxonomy")
      .then((r) => r.json())
      .then((data) => {
        setCounts(data.counts || {});
        setCoverage(data.coverage || []);
      })
      .catch(() => setError("Erreur lors du chargement des filières."));
  }

  useEffect(load, []);

  function startRename(name) {
    setRenaming(name);
    setNewName(name);
    setMsg("");
  }

  async function submitRename(e) {
    e.preventDefault();
    if (!renaming) return;
    setBusy(true);
    setMsg("");
    try {
      const res = await fetch("/api/admin/taxonomy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ oldName: renaming, newName }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMsg(data.error || "Erreur lors du renommage.");
        return;
      }
      setMsg(`"${renaming}" → "${newName}" appliqué à ${data.updated} concours.`);
      setRenaming(null);
      load();
    } finally {
      setBusy(false);
    }
  }

  if (error) return <div className="admin-card"><div className="admin-error">{error}</div></div>;
  if (!counts || !coverage) return <div className="admin-card">Chargement...</div>;

  const rows = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const grandTotal = coverage.reduce((s, cat) => s + cat.total, 0);

  return (
    <div>
      <div className="admin-card">
        <h2 style={{ marginTop: 0, fontSize: "1.05rem" }}>🏷️ Couverture des filières</h2>
        <p className="admin-image-hint" style={{ marginBottom: 16 }}>
          {grandTotal} concours répartis sur les 5 catégories de la taxonomie. Une sous-filière avec moins de{" "}
          {LOW_COVERAGE_THRESHOLD} concours (y compris 0) est signalée en orange — c'est le plan de collecte pour
          élargir au-delà de Finance/Compta/Audit.
        </p>
        <div className="taxonomy-coverage">
          {coverage.map((cat) => (
            <div className="taxonomy-cat" key={cat.code}>
              <div className="taxonomy-cat-head">
                <span className="taxonomy-cat-label">{cat.label}</span>
                <span className="taxonomy-cat-total">{cat.total} concours</span>
              </div>
              <div className="taxonomy-list">
                {cat.sousFilieres.map((s) => (
                  <div className="taxonomy-row" key={s.label}>
                    <span className="taxonomy-name">{s.label}</span>
                    <span className={"taxonomy-count" + (s.count < LOW_COVERAGE_THRESHOLD ? " taxonomy-gap" : "")}>
                      {s.count} concours{s.count < LOW_COVERAGE_THRESHOLD ? " ⚠️" : ""}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="admin-card" style={{ marginTop: 18 }}>
        <h2 style={{ marginTop: 0, fontSize: "1.05rem" }}>Valeurs hors taxonomie</h2>
        <p className="admin-image-hint" style={{ marginBottom: 16 }}>
          Filière/concours n'ayant pas de correspondance exacte dans la taxonomie fixe ci-dessus — normalement vide,
          puisque le formulaire concours n'autorise plus que les sous-filières listées : ça ne peut arriver que via
          un import groupé ou un écrit direct sur l'API avec une valeur non reconnue.
        </p>
        {rows.length === 0 ? (
          <p className="admin-msg">Aucune valeur libre détectée — tous les concours utilisent la taxonomie fixe.</p>
        ) : (
          <>
            <div className="taxonomy-list">
              {rows.map(([name, count]) => (
                <div className="taxonomy-row" key={name}>
                  {renaming === name ? (
                    <form onSubmit={submitRename} className="taxonomy-rename-form">
                      <input value={newName} onChange={(e) => setNewName(e.target.value)} autoFocus />
                      <button type="submit" className="admin-btn" disabled={busy}>
                        {busy ? "..." : "Appliquer"}
                      </button>
                      <button type="button" className="admin-btn secondary" onClick={() => setRenaming(null)}>
                        Annuler
                      </button>
                    </form>
                  ) : (
                    <>
                      <span className="taxonomy-name">{name}</span>
                      <span className={"taxonomy-count" + (count < LOW_COVERAGE_THRESHOLD ? " taxonomy-gap" : "")}>
                        {count} concours{count < LOW_COVERAGE_THRESHOLD ? " ⚠️" : ""}
                      </span>
                      <button type="button" className="admin-link-btn" onClick={() => startRename(name)}>
                        Renommer / fusionner
                      </button>
                    </>
                  )}
                </div>
              ))}
            </div>
            {msg && <div className="admin-msg" style={{ marginTop: 12 }}>{msg}</div>}
            <p className="admin-image-hint" style={{ marginTop: 16 }}>
              Renommer une filière vers un nom déjà existant fusionne les deux automatiquement (tous les concours
              basculent sous le nom cible, en un seul commit).
            </p>
          </>
        )}
      </div>
    </div>
  );
}
