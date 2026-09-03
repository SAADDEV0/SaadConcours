"use client";

import { useEffect, useState } from "react";
import { MAX_LOGO_BYTES } from "../../_lib/settingsFields";
import { useToast } from "../ui/ToastProvider";

const OWN_KEYS = ["pdfLogoDataUrl", "pdfLogoPosition", "pdfWatermarkEnabled", "pdfWatermarkText", "pdfWatermarkOpacity", "pdfShowSocialFooter"];

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function PdfSettingsForm() {
  const [form, setForm] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [logoError, setLogoError] = useState("");
  const toast = useToast();

  useEffect(() => {
    fetch("/api/settings")
      .then((r) => r.json())
      .then(setForm)
      .catch(() => setError("Erreur lors du chargement des réglages."));
  }, []);

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
      toast.success("Réglages PDF enregistrés.");
    } finally {
      setSaving(false);
    }
  }

  async function handleLogoUpload(file) {
    setLogoError("");
    if (!file) return;
    if (file.size > MAX_LOGO_BYTES) {
      setLogoError(`Image trop lourde (${Math.round(file.size / 1024)} Ko) — 400 Ko max, le logo est stocké tel quel dans les réglages.`);
      return;
    }
    try {
      const dataUrl = await readFileAsDataUrl(file);
      setForm({ ...form, pdfLogoDataUrl: dataUrl });
    } catch {
      setLogoError("Échec de la lecture du fichier.");
    }
  }

  if (!form) return <div className="admin-card">Chargement...</div>;

  return (
    <form onSubmit={onSubmit}>
      <div className="admin-card">
        <h2 className="admin-section-title">Personnalisation des PDF</h2>
        <p className="admin-image-hint" style={{ marginBottom: 16 }}>
          Contrôle l'apparence des fiches de cours et énoncés/corrigés téléchargés en PDF depuis le site : logo
          d'en-tête, filigrane, et lien vers tes réseaux sociaux en pied de page.
        </p>

        <div className="admin-field">
          <label>Logo d'en-tête</label>
          {form.pdfLogoDataUrl ? (
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <img
                src={form.pdfLogoDataUrl}
                alt="Logo PDF actuel"
                style={{ height: 32, maxWidth: 160, objectFit: "contain", background: "#fff", borderRadius: 6, padding: 4 }}
              />
              <button type="button" className="admin-link-btn" onClick={() => setForm({ ...form, pdfLogoDataUrl: "" })}>
                Retirer (revenir au logo par défaut)
              </button>
            </div>
          ) : (
            <div className="admin-image-hint" style={{ marginBottom: 8 }}>
              Aucun logo personnalisé — le logo vectoriel SaadConcours par défaut est utilisé.
            </div>
          )}
          <input
            type="file"
            accept="image/png,image/jpeg,image/webp"
            onChange={(e) => handleLogoUpload(e.target.files && e.target.files[0])}
          />
          <p className="admin-image-hint">PNG/JPEG/WebP, 400 Ko max. Un fond transparent (PNG) rend mieux dans l'en-tête.</p>
          {logoError && <div className="admin-error">{logoError}</div>}
        </div>

        <div className="admin-field">
          <label>Position du logo</label>
          <select
            value={form.pdfLogoPosition || "left"}
            onChange={(e) => setForm({ ...form, pdfLogoPosition: e.target.value })}
          >
            <option value="left">Gauche</option>
            <option value="center">Centre</option>
            <option value="right">Droite</option>
          </select>
        </div>

        <label className="admin-switch-row">
          <span className="admin-switch-row-label">Afficher un filigrane sur les pages</span>
          <span className="admin-switch">
            <input
              type="checkbox"
              checked={form.pdfWatermarkEnabled !== false}
              onChange={(e) => setForm({ ...form, pdfWatermarkEnabled: e.target.checked })}
            />
            <span className="admin-switch-thumb" aria-hidden="true" />
          </span>
        </label>

        {form.pdfWatermarkEnabled !== false && (
          <>
            <div className="admin-field">
              <label>Texte du filigrane</label>
              <input
                value={form.pdfWatermarkText || ""}
                placeholder="SaadConcours"
                onChange={(e) => setForm({ ...form, pdfWatermarkText: e.target.value })}
              />
            </div>
            <div className="admin-field">
              <label>Opacité du filigrane ({Math.round((form.pdfWatermarkOpacity ?? 0.05) * 100)}%)</label>
              <input
                type="range"
                min="0.02"
                max="0.3"
                step="0.01"
                value={form.pdfWatermarkOpacity ?? 0.05}
                onChange={(e) => setForm({ ...form, pdfWatermarkOpacity: Number(e.target.value) })}
              />
            </div>
          </>
        )}

        <label className="admin-switch-row">
          <span className="admin-switch-row-label">Afficher le site et les réseaux sociaux (onglet Général) en pied de page des PDF</span>
          <span className="admin-switch">
            <input
              type="checkbox"
              checked={form.pdfShowSocialFooter !== false}
              onChange={(e) => setForm({ ...form, pdfShowSocialFooter: e.target.checked })}
            />
            <span className="admin-switch-thumb" aria-hidden="true" />
          </span>
        </label>
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
