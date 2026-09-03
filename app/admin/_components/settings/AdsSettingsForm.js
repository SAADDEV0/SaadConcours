"use client";

import { useEffect, useState } from "react";
import { useToast } from "../ui/ToastProvider";

const SLOTS = [
  {
    enabledKey: "adsHomeBannerEnabled",
    slotKey: "adsHomeBannerSlot",
    title: "Bannière — page d'accueil",
    desc: "Affichée sous le titre d'accueil, avant les alertes de concours.",
  },
  {
    enabledKey: "adsConcoursMidEnabled",
    slotKey: "adsConcoursMidSlot",
    title: "Fiche concours — entre l'énoncé et le corrigé",
    desc: "Un seul bloc, entre les sections Énoncé et Corrigé.",
  },
  {
    enabledKey: "adsConcoursBottomEnabled",
    slotKey: "adsConcoursBottomSlot",
    title: "Fiche concours — bas de page",
    desc: "Après les extraits scannés, avant la source et les concours similaires.",
  },
];

const OWN_KEYS = ["adsEnabled", "adsPublisherId", ...SLOTS.flatMap((s) => [s.enabledKey, s.slotKey])];

export default function AdsSettingsForm() {
  const [form, setForm] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
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
      toast.success("Réglages publicité enregistrés.");
    } finally {
      setSaving(false);
    }
  }

  if (!form) return <div className="admin-card">Chargement...</div>;

  return (
    <form onSubmit={onSubmit}>
      <div className="admin-card">
        <h2 className="admin-section-title">Publicités (Google AdSense)</h2>
        <p className="admin-image-hint" style={{ marginBottom: 16 }}>
          Contrôle l'affichage des annonces sur le site. L'interrupteur général charge (ou non) le script AdSense
          sur tout le site — garde-le activé pendant la validation de ton compte par Google. Chaque emplacement
          ci-dessous reste invisible tant que tu n'as pas renseigné son ID d'emplacement ("ad slot") créé dans
          ton tableau de bord AdSense.
        </p>

        <label className="admin-checkbox-label">
          <input
            type="checkbox"
            checked={form.adsEnabled !== false}
            onChange={(e) => setForm({ ...form, adsEnabled: e.target.checked })}
          />
          <span className="toggle-thumb" aria-hidden="true" />
          Activer Google AdSense sur le site (interrupteur général)
        </label>

        <div className="admin-field" style={{ marginTop: 16 }}>
          <label>ID éditeur AdSense (ca-pub-...)</label>
          <input
            value={form.adsPublisherId || ""}
            placeholder="ca-pub-XXXXXXXXXXXXXXXX"
            onChange={(e) => setForm({ ...form, adsPublisherId: e.target.value })}
          />
        </div>

        {SLOTS.map((slot) => (
          <div key={slot.enabledKey} style={{ border: "1px solid var(--border)", borderRadius: 8, padding: 14, marginBottom: 12 }}>
            <label className="admin-checkbox-label" style={{ marginBottom: 4 }}>
              <input
                type="checkbox"
                checked={Boolean(form[slot.enabledKey])}
                onChange={(e) => setForm({ ...form, [slot.enabledKey]: e.target.checked })}
              />
              <span className="toggle-thumb" aria-hidden="true" />
              {slot.title}
            </label>
            <p className="admin-image-hint" style={{ margin: "0 0 10px" }}>
              {slot.desc}
            </p>
            <div className="admin-field" style={{ marginBottom: 0 }}>
              <label>ID d'emplacement (ad slot)</label>
              <input
                value={form[slot.slotKey] || ""}
                placeholder="1234567890"
                disabled={!form[slot.enabledKey]}
                onChange={(e) => setForm({ ...form, [slot.slotKey]: e.target.value })}
              />
            </div>
          </div>
        ))}

        <p className="admin-image-hint">
          Aucune annonce n'est placée à côté ou déclenchée par le bouton "Télécharger" — les règles AdSense
          interdisent les annonces déclenchées par un clic ou trop proches d'un bouton d'action, sous peine de
          suspension du compte.
        </p>
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
