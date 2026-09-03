"use client";

import { useEffect, useMemo, useState } from "react";
import { SOCIAL_FIELDS, NEWS_ETABLISSEMENTS } from "../../_lib/settingsFields";
import { useToast } from "../ui/ToastProvider";

const OWN_KEYS = [...SOCIAL_FIELDS.map((f) => f.key), "newsEtablissementsVisibles"];

export default function GeneralSettingsForm() {
  const [form, setForm] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [newsItems, setNewsItems] = useState(null);
  const toast = useToast();

  useEffect(() => {
    fetch("/api/settings")
      .then((r) => r.json())
      .then(setForm)
      .catch(() => setError("Erreur lors du chargement des réglages."));
    // Loaded separately, just to compute the per-établissement counts below
    // the checkboxes — a failure here shouldn't block the settings form.
    fetch("/api/news")
      .then((r) => r.json())
      .then((data) => setNewsItems(Array.isArray(data) ? data : []))
      .catch(() => setNewsItems([]));
  }, []);

  const newsCounts = useMemo(() => {
    const byEtab = {};
    let sansEtablissement = 0;
    for (const item of newsItems || []) {
      if (item.etablissement) byEtab[item.etablissement] = (byEtab[item.etablissement] || 0) + 1;
      else sansEtablissement++;
    }
    return { byEtab, sansEtablissement, total: (newsItems || []).length };
  }, [newsItems]);

  async function onSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      const patch = Object.fromEntries(OWN_KEYS.map((k) => [k, form[k]]));
      const res = await fetch("/api/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patch),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Erreur lors de l'enregistrement.");
        return;
      }
      setForm(data);
      toast.success("Réglages enregistrés.");
    } finally {
      setSaving(false);
    }
  }

  function toggleEtablissement(sigle) {
    const current = form.newsEtablissementsVisibles || [];
    const next = current.includes(sigle) ? current.filter((s) => s !== sigle) : [...current, sigle];
    setForm({ ...form, newsEtablissementsVisibles: next });
  }

  if (!form) return <div className="admin-card">Chargement...</div>;

  const visibles = form.newsEtablissementsVisibles || [];

  return (
    <form onSubmit={onSubmit}>
      <div className="admin-card">
        <h2 className="admin-section-title">Réseaux sociaux</h2>
        <p className="admin-image-hint" style={{ marginBottom: 16 }}>
          Laisse un champ vide pour ne pas afficher l'icône correspondante dans le pied de page du site.
        </p>
        {SOCIAL_FIELDS.map((f) => (
          <div className="admin-field" key={f.key}>
            <label>{f.label}</label>
            <input
              value={form[f.key] || ""}
              placeholder={f.placeholder}
              onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
            />
          </div>
        ))}
      </div>

      <div className="admin-card" style={{ marginTop: 18 }}>
        <h2 className="admin-section-title">Concours ouverts affichés (News)</h2>
        <p className="admin-image-hint" style={{ marginBottom: 16 }}>
          Le scraper récupère désormais toutes les publications almaster-maroc.com. Choisis ici quels
          établissements apparaissent sur la page publique "Concours ouverts" — aucune case cochée = tout afficher.
        </p>
        <div className="settings-chip-grid">
          {NEWS_ETABLISSEMENTS.map((sigle) => (
            <label className="settings-chip" key={sigle}>
              <input type="checkbox" checked={visibles.includes(sigle)} onChange={() => toggleEtablissement(sigle)} />
              {sigle} {newsItems && <span className="admin-image-hint">({newsCounts.byEtab[sigle] || 0})</span>}
            </label>
          ))}
        </div>
        {visibles.length > 0 && (
          <button
            type="button"
            className="admin-link-btn"
            style={{ marginTop: 12 }}
            onClick={() => setForm({ ...form, newsEtablissementsVisibles: [] })}
          >
            Tout afficher (retirer le filtre)
          </button>
        )}
        {newsItems && (
          <p className="admin-image-hint" style={{ marginTop: 12 }}>
            Avec cette sélection :{" "}
            <strong>
              {visibles.length
                ? visibles.reduce((sum, sigle) => sum + (newsCounts.byEtab[sigle] || 0), 0)
                : newsCounts.total}{" "}
              / {newsCounts.total}
            </strong>{" "}
            concours affichés sur la page publique.
            {newsCounts.sansEtablissement > 0 && (
              <>
                {" "}
                {newsCounts.sansEtablissement} concours supplémentaires n'ont aucun établissement reconnu par le
                scraper — ils restent masqués quelle que soit la sélection ci-dessus.
              </>
            )}
          </p>
        )}
      </div>

      <div className="admin-form-actions">
        <button className="admin-btn" type="submit" disabled={saving}>
          {saving ? "Enregistrement..." : "Enregistrer"}
        </button>
        {error && <div className="admin-error">{error}</div>}
      </div>
    </form>
  );
}
