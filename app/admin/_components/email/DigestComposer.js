"use client";

import { useEffect, useMemo, useState } from "react";
import { isUrgentNews } from "../../_lib/newsUtils";

// One-off / test send, independent of the "Alertes automatiques" toggle and
// its persisted subject/message/sender defaults above - those stay exactly
// what the unattended daily cron uses. This composer pre-fills from them as
// a starting point but never writes back to settings.json, so tweaking the
// wording for a single campaign can't accidentally change what tomorrow's
// automatic run sends.
export default function DigestComposer({ settings }) {
  const [news, setNews] = useState(null);
  const [subscribers, setSubscribers] = useState(null);
  const [selectedNews, setSelectedNews] = useState(() => new Set());
  const [selectedEmails, setSelectedEmails] = useState(() => new Set());
  const [maxRecipients, setMaxRecipients] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [fromName, setFromName] = useState("");
  const [testEmail, setTestEmail] = useState("");
  const [preview, setPreview] = useState(null);
  const [previewLoading, setPreviewLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/news")
      .then((r) => r.json())
      .then((data) => {
        const open = (data || []).filter((i) => !i.cloture);
        setNews(open);
        setSelectedNews(new Set(open.filter(isUrgentNews).map((i) => i.id)));
      })
      .catch(() => setError("Erreur lors du chargement des concours."));
    fetch("/api/admin/subscribers")
      .then((r) => r.json())
      .then((data) => {
        const emails = data.emails || [];
        setSubscribers(emails);
        setSelectedEmails(new Set(emails));
      })
      .catch(() => setError("Erreur lors du chargement des abonnés."));
  }, []);

  useEffect(() => {
    if (!settings) return;
    setSubject(settings.newsAlertsSubject || "");
    setMessage(settings.newsAlertsMessage || "");
    setFromName(settings.newsAlertsFromName || "SaadConcours");
    setTestEmail(settings.email || "");
  }, [settings]);

  function toggleNews(id) {
    setSelectedNews((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
    setPreview(null);
    setResult(null);
  }

  function toggleEmail(email) {
    setSelectedEmails((prev) => {
      const next = new Set(prev);
      if (next.has(email)) next.delete(email);
      else next.add(email);
      return next;
    });
    setResult(null);
  }

  const cappedEmails = useMemo(() => {
    let list = [...selectedEmails];
    const max = parseInt(maxRecipients, 10);
    if (Number.isFinite(max) && max > 0) list = list.slice(0, max);
    return list;
  }, [selectedEmails, maxRecipients]);

  async function loadPreview() {
    setPreviewLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/preview-digest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newsIds: [...selectedNews], message, subject }),
      });
      setPreview(await res.json());
    } catch {
      setError("Erreur lors du chargement de l'aperçu.");
    } finally {
      setPreviewLoading(false);
    }
  }

  async function send(testOnly) {
    setError("");
    setResult(null);
    if (testOnly && !testEmail) {
      setError("Renseigne un email de test.");
      return;
    }
    if (!testOnly && !cappedEmails.length) {
      setError("Sélectionne au moins un destinataire.");
      return;
    }
    if (!selectedNews.size) {
      setError("Sélectionne au moins un concours à inclure.");
      return;
    }
    setSending(true);
    try {
      const body = { newsIds: [...selectedNews], subject, message, fromName };
      if (testOnly) body.testEmail = testEmail;
      else body.emails = cappedEmails;
      const res = await fetch("/api/admin/send-digest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Erreur lors de l'envoi.");
        return;
      }
      setResult({ ...data, test: testOnly });
    } catch {
      setError("Erreur réseau lors de l'envoi.");
    } finally {
      setSending(false);
    }
  }

  if (news === null || subscribers === null) {
    return <div className="admin-image-hint">Chargement du composeur...</div>;
  }

  return (
    <div>
      <p className="admin-image-hint" style={{ marginBottom: 16 }}>
        Envoi ponctuel, indépendant de l'alerte automatique quotidienne ci-dessus — rien ici n'est enregistré dans
        les réglages permanents.
      </p>

      <div className="admin-field">
        <div className="picker-toolbar">
          <label style={{ margin: 0 }}>Concours à inclure</label>
          <span className="picker-count">
            {selectedNews.size} / {news.length} sélectionné{selectedNews.size > 1 ? "s" : ""}
          </span>
        </div>
        {news.length ? (
          <div className="picker-list">
            {news.map((item) => (
              <label className="picker-row" key={item.id}>
                <input type="checkbox" checked={selectedNews.has(item.id)} onChange={() => toggleNews(item.id)} />
                <span className="picker-row-main">
                  <span className="picker-row-title">{item.titre}</span>
                  <span className="picker-row-meta">
                    {[item.etablissement, item.ville].filter(Boolean).join(" · ")}
                  </span>
                </span>
                <span className="picker-row-date">{item.date_limite || "—"}</span>
              </label>
            ))}
          </div>
        ) : (
          <div className="empty-state">Aucun concours ouvert pour l'instant.</div>
        )}
      </div>

      <div className="admin-field">
        <div className="picker-toolbar">
          <label style={{ margin: 0 }}>Destinataires</label>
          <span className="picker-actions">
            <button type="button" className="admin-link-btn" onClick={() => setSelectedEmails(new Set(subscribers))}>
              Tout cocher
            </button>
            <button type="button" className="admin-link-btn" onClick={() => setSelectedEmails(new Set())}>
              Tout décocher
            </button>
          </span>
        </div>
        {subscribers.length ? (
          <div className="picker-list">
            {subscribers.map((email) => (
              <label className="picker-row" key={email}>
                <input type="checkbox" checked={selectedEmails.has(email)} onChange={() => toggleEmail(email)} />
                <span className="picker-row-main" style={{ fontFamily: "monospace" }}>
                  {email}
                </span>
              </label>
            ))}
          </div>
        ) : (
          <div className="empty-state">Aucun abonné pour l'instant.</div>
        )}
      </div>

      <div className="admin-form-grid">
        <div className="admin-field">
          <label>Nombre maximum de destinataires (optionnel)</label>
          <input
            type="number"
            min="1"
            value={maxRecipients}
            placeholder="ex: 5 pour un premier essai"
            onChange={(e) => setMaxRecipients(e.target.value)}
          />
        </div>
        <div className="admin-field">
          <label>Email de test</label>
          <input value={testEmail} placeholder="toi@exemple.com" onChange={(e) => setTestEmail(e.target.value)} />
        </div>
      </div>
      <div className="admin-image-hint" style={{ marginTop: -8, marginBottom: 16 }}>
        {cappedEmails.length} destinataire{cappedEmails.length > 1 ? "s" : ""} recevront cet envoi
        {maxRecipients && selectedEmails.size > cappedEmails.length
          ? ` (plafonné, ${selectedEmails.size - cappedEmails.length} exclus)`
          : ""}
        .
      </div>

      <div className="admin-field">
        <label>Objet de cet envoi</label>
        <input value={subject} placeholder="Objet automatique si vide" onChange={(e) => setSubject(e.target.value)} />
      </div>
      <div className="admin-field">
        <label>Message pour cet envoi</label>
        <textarea style={{ minHeight: 80 }} value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <div className="admin-field">
        <label>Nom de l'expéditeur</label>
        <input value={fromName} onChange={(e) => setFromName(e.target.value)} />
      </div>
      <div className="admin-image-hint" style={{ marginBottom: 16 }}>
        Objet, message et nom ne modifient que cet envoi — pas les réglages permanents de l'alerte automatique.
        L'adresse d'envoi elle-même reste toujours le compte Gmail configuré côté serveur.
      </div>

      <div className="admin-row-actions" style={{ marginBottom: 12, flexWrap: "wrap" }}>
        <button
          type="button"
          className="admin-btn secondary"
          onClick={loadPreview}
          disabled={previewLoading || !selectedNews.size}
        >
          {previewLoading ? "Chargement..." : "👁 Aperçu"}
        </button>
        <button type="button" className="admin-btn secondary" onClick={() => send(true)} disabled={sending}>
          Envoyer un test à moi-même
        </button>
        <button type="button" className="admin-btn" onClick={() => send(false)} disabled={sending}>
          {sending ? "Envoi..." : `Envoyer maintenant (${cappedEmails.length})`}
        </button>
      </div>

      {error && <div className="admin-error">{error}</div>}
      {result && (
        <div className={result.sent > 0 ? "admin-msg" : "admin-error"}>
          {result.test
            ? result.sent > 0
              ? `Test envoyé à ${testEmail}.`
              : `Échec de l'envoi du test à ${testEmail}.`
            : `Envoyé à ${result.sent} / ${result.total} destinataire(s).${
                result.failed?.length ? ` Échecs : ${result.failed.join(", ")}.` : ""
              }`}
        </div>
      )}

      {preview && (
        <div className="digest-preview">
          <div className="digest-preview-bar">
            Objet : <strong>{preview.subject}</strong> · {preview.itemCount} concours inclus
          </div>
          <div className="digest-preview-body" dangerouslySetInnerHTML={{ __html: preview.html }} />
        </div>
      )}
    </div>
  );
}
