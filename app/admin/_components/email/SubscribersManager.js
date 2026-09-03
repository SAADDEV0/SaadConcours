"use client";

import { useEffect, useState } from "react";
import AreaChart from "../dashboard/AreaChart";
import { dayLabelMed } from "../../_lib/format";
import { useConfirm } from "../ui/ConfirmProvider";
import { useToast } from "../ui/ToastProvider";

export default function SubscribersManager() {
  const [emails, setEmails] = useState(null);
  const [history, setHistory] = useState(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(null);
  const confirm = useConfirm();
  const toast = useToast();

  function load() {
    fetch("/api/admin/subscribers")
      .then((r) => r.json())
      .then((data) => {
        setEmails(data.emails || []);
        setHistory(data.history || []);
      })
      .catch(() => setError("Erreur lors du chargement des abonnés."));
  }

  useEffect(load, []);

  async function onDelete(email) {
    const ok = await confirm({ title: "Retirer cet abonné ?", body: email, confirmLabel: "Retirer", tone: "danger" });
    if (!ok) return;
    setBusy(email);
    try {
      await fetch("/api/admin/subscribers", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setEmails((prev) => prev.filter((e) => e !== email));
      toast.success("Abonné retiré.");
    } finally {
      setBusy(null);
    }
  }

  if (error) return <div className="admin-error">{error}</div>;
  if (emails === null) return <div className="admin-image-hint">Chargement des abonnés...</div>;

  const hasHistory = history && history.some((p) => p.count > 0);

  return (
    <div>
      <div className="admin-image-hint" style={{ marginBottom: 10 }}>
        {emails.length} abonné{emails.length > 1 ? "s" : ""} à l'alerte "concours qui ferme bientôt"
      </div>
      {hasHistory && (
        <div style={{ marginBottom: 16 }}>
          <AreaChart points={history.map((p) => ({ label: dayLabelMed(p.date), value: p.count }))} formatValue={(v) => `${v} abonnés`} />
        </div>
      )}
      {emails.length ? (
        <div className="subscriber-list">
          {emails.map((email) => (
            <div className="subscriber-row" key={email}>
              <span>{email}</span>
              <button
                type="button"
                className="admin-icon-btn danger"
                title="Retirer cet abonné"
                disabled={busy === email}
                onClick={() => onDelete(email)}
              >
                🗑️
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">Aucun abonné pour l'instant.</div>
      )}
    </div>
  );
}
