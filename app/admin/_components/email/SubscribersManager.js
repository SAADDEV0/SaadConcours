"use client";

import { useEffect, useMemo, useState } from "react";
import AreaChart from "../dashboard/AreaChart";
import EmptyState from "../ui/EmptyState";
import { dayLabelMed, timeAgoFr } from "../../_lib/format";
import { useConfirm } from "../ui/ConfirmProvider";
import { useToast } from "../ui/ToastProvider";

export default function SubscribersManager() {
  const [emails, setEmails] = useState(null);
  const [history, setHistory] = useState(null);
  const [recent, setRecent] = useState([]);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(null);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(() => new Set());
  const [bulkBusy, setBulkBusy] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [adding, setAdding] = useState(false);
  const [addError, setAddError] = useState("");
  const confirm = useConfirm();
  const toast = useToast();

  function load() {
    fetch("/api/admin/subscribers")
      .then((r) => r.json())
      .then((data) => {
        setEmails(data.emails || []);
        setHistory(data.history || []);
        setRecent(data.recent || []);
      })
      .catch(() => setError("Erreur lors du chargement des abonnés."));
  }

  useEffect(load, []);

  const recentMap = useMemo(() => new Map(recent.map((r) => [r.email, r.subscribedAt])), [recent]);

  const filtered = useMemo(() => {
    if (!emails) return [];
    const q = search.trim().toLowerCase();
    if (!q) return emails;
    return emails.filter((e) => e.toLowerCase().includes(q));
  }, [emails, search]);

  function toggleSelected(email) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(email)) next.delete(email);
      else next.add(email);
      return next;
    });
  }

  async function onAdd(e) {
    e.preventDefault();
    setAddError("");
    setAdding(true);
    try {
      const res = await fetch("/api/admin/subscribers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newEmail }),
      });
      const data = await res.json();
      if (!res.ok) {
        setAddError(data.error || "Erreur lors de l'ajout.");
        return;
      }
      setEmails((prev) => [...prev, data.email].sort());
      setNewEmail("");
      toast.success(`${data.email} ajouté aux abonnés.`);
    } catch {
      setAddError("Erreur réseau lors de l'ajout.");
    } finally {
      setAdding(false);
    }
  }

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
      setSelected((prev) => {
        const next = new Set(prev);
        next.delete(email);
        return next;
      });
      toast.success("Abonné retiré.");
    } finally {
      setBusy(null);
    }
  }

  async function onBulkDelete() {
    const count = selected.size;
    const ok = await confirm({
      title: `Retirer ${count} abonné${count > 1 ? "s" : ""} ?`,
      body: "Cette action ne peut pas être annulée.",
      confirmLabel: "Retirer",
      tone: "danger",
    });
    if (!ok) return;
    setBulkBusy(true);
    try {
      const targets = [...selected];
      await Promise.all(
        targets.map((email) =>
          fetch("/api/admin/subscribers", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
          })
        )
      );
      setEmails((prev) => prev.filter((e) => !selected.has(e)));
      setSelected(new Set());
      toast.success(`${count} abonné${count > 1 ? "s" : ""} retiré${count > 1 ? "s" : ""}.`);
    } finally {
      setBulkBusy(false);
    }
  }

  function exportCsv() {
    const list = selected.size ? [...selected] : filtered;
    const blob = new Blob([["email", ...list].join("\n")], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `abonnes-alertes-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  async function copyEmails() {
    const list = selected.size ? [...selected] : filtered;
    try {
      await navigator.clipboard.writeText(list.join(", "));
      toast.success(`${list.length} email${list.length > 1 ? "s" : ""} copié${list.length > 1 ? "s" : ""}.`);
    } catch {
      toast.error("Impossible de copier dans le presse-papiers.");
    }
  }

  if (error) return <div className="admin-error">{error}</div>;
  if (emails === null) return <div className="admin-image-hint">Chargement des abonnés...</div>;

  const hasHistory = history && history.some((p) => p.count > 0);
  const allFilteredSelected = filtered.length > 0 && filtered.every((e) => selected.has(e));

  return (
    <div>
      {hasHistory && (
        <div className="admin-card" style={{ marginBottom: 18 }}>
          <h2 className="admin-section-title">📈 Évolution sur 14 jours</h2>
          <AreaChart points={history.map((p) => ({ label: dayLabelMed(p.date), value: p.count }))} formatValue={(v) => `${v} abonnés`} />
        </div>
      )}

      <div className="admin-card">
        <h2 className="admin-section-title">➕ Ajouter un abonné</h2>
        <p className="admin-image-hint" style={{ marginBottom: 12 }}>
          Pour inscrire quelqu'un manuellement (ex : demande reçue par un autre canal).
        </p>
        <form onSubmit={onAdd} className="subscriber-add-row">
          <input
            className="admin-search-input"
            type="email"
            required
            value={newEmail}
            placeholder="etudiant@exemple.com"
            onChange={(e) => setNewEmail(e.target.value)}
          />
          <button className="admin-btn" type="submit" disabled={adding}>
            {adding ? "Ajout..." : "Ajouter"}
          </button>
        </form>
        {addError && <div className="admin-error">{addError}</div>}
      </div>

      <div className="admin-card">
        <div className="picker-toolbar" style={{ marginBottom: 14 }}>
          <h2 className="admin-section-title" style={{ marginBottom: 0 }}>
            📧 {emails.length} abonné{emails.length > 1 ? "s" : ""}
          </h2>
          <span className="picker-actions">
            <button type="button" className="admin-link-btn" onClick={copyEmails} disabled={!filtered.length}>
              📋 Copier
            </button>
            <button type="button" className="admin-link-btn" onClick={exportCsv} disabled={!filtered.length}>
              ⬇️ Exporter .csv
            </button>
          </span>
        </div>

        <div className="admin-toolbar" style={{ margin: "0 0 12px" }}>
          <input
            className="admin-search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher un email..."
          />
        </div>

        {filtered.length > 0 && (
          <label className="subscriber-select-all">
            <input
              type="checkbox"
              checked={allFilteredSelected}
              onChange={() => setSelected(allFilteredSelected ? new Set() : new Set(filtered))}
            />
            Tout sélectionner {search && `(${filtered.length} résultat${filtered.length > 1 ? "s" : ""})`}
          </label>
        )}

        {selected.size > 0 && (
          <div className="admin-bulkbar">
            <strong>{selected.size} sélectionné(s)</strong>
            <button type="button" className="admin-btn danger" disabled={bulkBusy} onClick={onBulkDelete}>
              Retirer la sélection
            </button>
            <button type="button" className="admin-btn secondary" disabled={bulkBusy} onClick={() => setSelected(new Set())}>
              Annuler la sélection
            </button>
          </div>
        )}

        {filtered.length ? (
          <div className="subscriber-list">
            {filtered.map((email) => {
              const subscribedAt = recentMap.get(email);
              return (
                <div className="subscriber-row" key={email}>
                  <input
                    type="checkbox"
                    checked={selected.has(email)}
                    onChange={() => toggleSelected(email)}
                  />
                  <span className="subscriber-row-email">{email}</span>
                  {subscribedAt && <span className="subscriber-row-badge">inscrit {timeAgoFr(subscribedAt)}</span>}
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
              );
            })}
          </div>
        ) : (
          <EmptyState
            icon="📭"
            title={search.trim() ? "Aucun résultat" : "Aucun abonné pour l'instant"}
            message={search.trim() ? "Essaie un autre terme de recherche." : "Les inscriptions apparaîtront ici."}
          />
        )}
      </div>
    </div>
  );
}
