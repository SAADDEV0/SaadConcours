"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useToast } from "../ui/ToastProvider";
import Modal from "../ui/Modal";
import { isUrgentNews } from "../../_lib/newsUtils";

const OWN_KEYS = ["newsAlertsEnabled", "newsAlertsSubject", "newsAlertsMessage", "newsAlertsFromName"];

export default function EmailSettingsForm() {
  const [form, setForm] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [emailConfigured, setEmailConfigured] = useState(null);
  const [urgentNews, setUrgentNews] = useState(null);
  const [preview, setPreview] = useState(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewLoading, setPreviewLoading] = useState(false);
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
    fetch("/api/news")
      .then((r) => r.json())
      .then((data) => setUrgentNews((data || []).filter(isUrgentNews)))
      .catch(() => setUrgentNews([]));
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

  async function openPreview() {
    if (!urgentNews?.length) return;
    setPreviewOpen(true);
    setPreviewLoading(true);
    try {
      const res = await fetch("/api/admin/preview-digest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          newsIds: urgentNews.map((i) => i.id),
          message: form.newsAlertsMessage,
          subject: form.newsAlertsSubject,
        }),
      });
      setPreview(await res.json());
    } catch {
      setPreview(null);
    } finally {
      setPreviewLoading(false);
    }
  }

  const urgentCount = urgentNews?.length ?? null;

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
          <h2 className="admin-section-title">🔔 Alerte automatique quotidienne</h2>
          <p className="admin-image-hint" style={{ marginBottom: 16 }}>
            Envoie chaque jour un email récapitulatif aux abonnés pour les concours ouverts qui ferment dans les 7
            jours, via le compte Gmail configuré côté serveur — sans ça, l'envoi ne fait rien.
          </p>

          <label className="admin-switch-row">
            <span className="admin-switch-row-label">
              Envoyer les alertes automatiques
              <span className="admin-switch-row-hint">À enregistrer avec le bouton en bas de page pour prendre effet.</span>
            </span>
            <span className="admin-switch">
              <input
                type="checkbox"
                checked={Boolean(form.newsAlertsEnabled)}
                onChange={(e) => setForm({ ...form, newsAlertsEnabled: e.target.checked })}
              />
              <span className="admin-switch-thumb" aria-hidden="true" />
            </span>
          </label>

          <div className="email-live-hint">
            {urgentCount === null ? (
              "Vérification des concours qui ferment bientôt..."
            ) : urgentCount > 0 ? (
              <>
                📅 <strong>{urgentCount} concours</strong> ferme{urgentCount > 1 ? "nt" : ""} d'ici 7 jours — c'est ce
                que la prochaine alerte automatique enverrait aujourd'hui.
              </>
            ) : (
              "📅 Aucun concours ne ferme dans les 7 prochains jours — l'alerte automatique n'enverrait rien aujourd'hui."
            )}
            {urgentCount > 0 && (
              <button type="button" className="admin-link-btn" onClick={openPreview} style={{ marginLeft: 10 }}>
                👁 Aperçu
              </button>
            )}
          </div>
        </div>

        <div className="admin-card">
          <h2 className="admin-section-title">✏️ Contenu de l'email</h2>
          <p className="admin-image-hint" style={{ marginBottom: 16 }}>
            Ces valeurs servent aussi de point de départ par défaut pour un envoi ponctuel depuis{" "}
            <Link href="/admin/alertes/composer">Composer un envoi</Link>.
          </p>

          <div className="admin-field">
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

          <div className="admin-field" style={{ marginBottom: 0 }}>
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

      <Modal open={previewOpen} onClose={() => setPreviewOpen(false)} labelledBy="settings-preview-title">
        <div className="email-preview-modal">
          <h2 className="admin-modal-title" id="settings-preview-title">
            👁 Aperçu de l'alerte automatique
          </h2>
          {previewLoading ? (
            <div className="admin-image-hint">Chargement de l'aperçu...</div>
          ) : preview ? (
            <div className="digest-preview">
              <div className="digest-preview-bar">
                Objet : <strong>{preview.subject}</strong> · {preview.itemCount} concours inclus
              </div>
              <div className="digest-preview-body" dangerouslySetInnerHTML={{ __html: preview.html }} />
            </div>
          ) : (
            <div className="admin-error">Erreur lors du chargement de l'aperçu.</div>
          )}
          <div className="admin-modal-actions">
            <button type="button" className="admin-btn secondary" onClick={() => setPreviewOpen(false)}>
              Fermer
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
