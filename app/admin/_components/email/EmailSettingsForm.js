"use client";

import { useEffect, useState } from "react";
import { useToast } from "../ui/ToastProvider";

const OWN_KEYS = ["newsAlertsEnabled", "newsAlertsSubject", "newsAlertsMessage", "newsAlertsFromName"];

export default function EmailSettingsForm() {
  const [form, setForm] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [emailConfigured, setEmailConfigured] = useState(null);
  const toast = useToast();

  useEffect(() => {
    fetch("/api/settings")
      .then((r) => r.json())
      .then(setForm)
      .catch(() => setError("Erreur lors du chargement des réglages email."));
    fetch("/api/admin/email-status")
      .then((r) => r.json())
      .then((data) => setEmailConfigured(data.configured))
      .catch(() => setEmailConfigured(null));
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
      toast.success("Réglages email enregistrés.");
    } finally {
      setSaving(false);
    }
  }

  if (!form) return <div className="admin-card">Chargement...</div>;

  return (
    <>
      {emailConfigured === false && (
        <div className="admin-card" style={{ marginBottom: 18, borderColor: "var(--red)" }}>
          <div className="admin-error" style={{ marginTop: 0 }}>
            ⚠️ GMAIL_USER / GMAIL_APP_PASSWORD ne sont pas configurés côté serveur — aucun email ne peut partir
            (alertes automatiques, envoi manuel, test) tant que ces variables d'environnement ne sont pas définies.
          </div>
        </div>
      )}

      <form onSubmit={onSubmit}>
        <div className="admin-card">
          <h2 className="admin-section-title">🔔 Alertes automatiques</h2>
          <p className="admin-image-hint" style={{ marginBottom: 16 }}>
            Envoie un email récapitulatif aux abonnés pour les concours ouverts qui ferment dans les 7 jours, via le
            compte Gmail configuré côté serveur (GMAIL_USER / GMAIL_APP_PASSWORD) — sans ça, l'envoi ne fait rien.
          </p>
          <label className="admin-checkbox-label">
            <input
              type="checkbox"
              checked={Boolean(form.newsAlertsEnabled)}
              onChange={(e) => setForm({ ...form, newsAlertsEnabled: e.target.checked })}
            />
            <span className="toggle-thumb" aria-hidden="true" />
            Envoyer les alertes automatiques (à enregistrer avec le bouton ci-dessous)
          </label>

          <div className="admin-field" style={{ marginTop: 16 }}>
            <label>Objet de l'email</label>
            <input
              value={form.newsAlertsSubject || ""}
              placeholder="ex: ⏰ Ces concours ferment cette semaine — vérifie vite"
              onChange={(e) => setForm({ ...form, newsAlertsSubject: e.target.value })}
            />
            <div className="admin-image-hint" style={{ marginTop: 4 }}>
              Vide = objet automatique (« ⏰ X concours ferment bientôt »).
            </div>
          </div>

          <div className="admin-field">
            <label>Message personnalisé (affiché en haut de l'email, avant la liste)</label>
            <textarea
              style={{ minHeight: 90 }}
              value={form.newsAlertsMessage || ""}
              placeholder="ex: Salam ! Voici les concours qui ferment bientôt — inscris-toi vite avant la clôture 👇"
              onChange={(e) => setForm({ ...form, newsAlertsMessage: e.target.value })}
            />
          </div>

          <div className="admin-field">
            <label>Nom de l'expéditeur</label>
            <input
              value={form.newsAlertsFromName || ""}
              placeholder="SaadConcours"
              onChange={(e) => setForm({ ...form, newsAlertsFromName: e.target.value })}
            />
            <div className="admin-image-hint" style={{ marginTop: 4 }}>
              L'adresse d'envoi elle-même est toujours celle du compte Gmail configuré côté serveur (Gmail
              n'autorise pas d'envoyer sous une autre adresse) — seul ce nom affiché est personnalisable.
            </div>
          </div>
        </div>

        <div className="admin-form-actions">
          <button className="admin-btn" type="submit" disabled={saving}>
            {saving ? "Enregistrement..." : "Enregistrer"}
          </button>
          {error && <div className="admin-error">{error}</div>}
        </div>
      </form>
    </>
  );
}
