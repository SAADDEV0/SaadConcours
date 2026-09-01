"use client";

import { useEffect, useState } from "react";

// Filière is free text on each concours (see app/concours/page.js — the
// public filter derives its options straight from the data, no hardcoded
// list to update). That's what makes adding Marketing/Logistique/RH etc.
// possible without touching code, but it also means nothing stops
// "Marketing" and "marketing" coexisting as two different filter values.
// This screen is the safety net: see every value in use, how many concours
// carry it, and merge near-duplicates into one canonical spelling.
const LOW_COVERAGE_THRESHOLD = 3;

export default function TaxonomyPanel() {
  const [counts, setCounts] = useState(null);
  const [error, setError] = useState("");
  const [renaming, setRenaming] = useState(null); // filiere name being renamed
  const [newName, setNewName] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");

  function load() {
    fetch("/api/admin/taxonomy")
      .then((r) => r.json())
      .then((data) => setCounts(data.counts || {}))
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
  if (!counts) return <div className="admin-card">Chargement...</div>;

  const rows = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const total = rows.reduce((s, [, n]) => s + n, 0);

  return (
    <div>
      <div className="admin-card">
        <h2 style={{ marginTop: 0, fontSize: "1.05rem" }}>🏷️ Filières</h2>
        <p className="admin-image-hint" style={{ marginBottom: 16 }}>
          {rows.length} filière{rows.length > 1 ? "s" : ""} en usage sur {total} concours. Une filière avec moins de{" "}
          {LOW_COVERAGE_THRESHOLD} concours est signalée en orange — objectif de couverture avant de la considérer
          "lancée".
        </p>

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
      </div>
    </div>
  );
}
