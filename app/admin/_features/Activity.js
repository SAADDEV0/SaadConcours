"use client";

import { useEffect, useState } from "react";
import Icon from "../_ui/Icon";
import { Alert, Empty, ErrorState, Hero, Skeleton, Tabs, useTab } from "../_ui/kit";
import { useConfirm, useToast } from "../_ui/feedback";
import { api } from "../_lib/api";
import { restoreItem } from "../_lib/content";
import { COLLECTIONS } from "../_lib/collections";
import { dateTimeFr, plural, timeAgo } from "../_lib/format";

const TABS = [
  { key: "journal", label: "Journal", icon: "activity" },
  { key: "deploiements", label: "Mises en ligne", icon: "zap" },
  { key: "historique", label: "Historique GitHub", icon: "git" },
  { key: "corbeille", label: "Corbeille", icon: "trash" },
];

const TONES = { green: "green", red: "red", amber: "amber", violet: "violet", accent: "", faint: "faint" };

function duration(a, b) {
  const s = Math.max(0, Math.round((new Date(b) - new Date(a)) / 1000));
  return s < 60 ? `${s} s` : `${Math.floor(s / 60)} min ${String(s % 60).padStart(2, "0")}`;
}

export default function Activity() {
  const [tab, setTab] = useTab(TABS);
  const [data, setData] = useState(null);
  const [trash, setTrash] = useState(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(null);
  const toast = useToast();
  const confirm = useConfirm();

  function load() {
    setError("");
    api("/api/admin/activity").then(setData).catch((e) => setError(e.message));
    api("/api/admin/trash").then((d) => setTrash(d.entries)).catch(() => setTrash([]));
  }
  useEffect(load, []);

  async function restore(entry) {
    const col = COLLECTIONS[entry.collection];
    setBusy(entry.key);
    try {
      const restored = await restoreItem(entry.collection, entry.item);
      await api("/api/admin/trash", { method: "DELETE", body: { keys: [entry.key] } });
      setTrash((t) => t.filter((e) => e.key !== entry.key));
      toast.success(`${col.title(restored)} restauré`, restored.id !== entry.item.id ? `Nouvel identifiant : ${restored.id}` : "De retour sur le site au prochain déploiement.");
    } catch (err) {
      toast.error("Restauration impossible", err.message);
    } finally {
      setBusy(null);
    }
  }

  async function purge(entry) {
    const ok = await confirm({
      title: entry ? "Effacer définitivement ?" : "Vider la corbeille ?",
      body: entry ? "Il restera récupérable dans l'historique GitHub, mais plus d'ici." : `${plural(trash.length, "élément")} ne pourront plus être restaurés d'un clic.`,
      confirmLabel: entry ? "Effacer" : "Vider",
      tone: "danger",
    });
    if (!ok) return;
    await api("/api/admin/trash", { method: "DELETE", body: entry ? { keys: [entry.key] } : { all: true } });
    setTrash((t) => (entry ? t.filter((e) => e.key !== entry.key) : []));
  }

  const deploys = Array.isArray(data?.deploys) ? data.deploys : null;
  const commits = Array.isArray(data?.commits) ? data.commits : null;

  return (
    <>
      <Hero
        icon="🧭"
        eyebrow="Pilotage · Traçabilité"
        title="Activité & corbeille"
        actions={
          <button type="button" className="ax-btn" onClick={load}>
            <Icon name="refresh" size="sm" /> Actualiser
          </button>
        }
      >
        Qui a changé quoi et quand, où en est la mise en ligne, et tout ce qui a été supprimé — restaurable d&apos;un clic.
      </Hero>
      <Tabs tabs={TABS.map((t) => (t.key === "corbeille" && trash ? { ...t, count: trash.length } : t))} value={tab} onChange={setTab} />
      {error && <ErrorState error={error} onRetry={load} />}
      {!data && !error && <Skeleton rows={8} />}

      {data && tab === "journal" && (
        <section className="ax-card">
          {data.audit.length ? (
            <ul className="ax-timeline">
              {data.audit.map((e, i) => {
                const a = data.vocabulary.actions[e.action] || { label: e.action, tone: "accent" };
                return (
                  <li key={i}>
                    <span className={`ax-timeline-dot ${TONES[a.tone] || ""}`} />
                    <div className="ax-timeline-title">
                      {a.label} · {data.vocabulary.resources[e.resource] || e.resource}
                      {e.label ? ` — ${e.label}` : ""}
                    </div>
                    <div className="ax-timeline-meta">
                      {dateTimeFr(e.at)} ({timeAgo(e.at)}){e.id ? ` · ${e.id}` : ""}
                      {e.detail ? ` · ${e.detail}` : ""}
                      {e.ip ? ` · ${e.ip}` : ""}
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <Empty icon="📭" title="Journal vide">Les connexions, créations, modifications et suppressions apparaîtront ici.</Empty>
          )}
        </section>
      )}

      {data && tab === "deploiements" && (
        <section className="ax-card">
          {!deploys ? (
            <Alert tone="warn" title="État des déploiements indisponible">
              {data.deploys?.error || "GitHub Actions ne répond pas."}
            </Alert>
          ) : (
            <ul className="ax-list">
              {deploys.map((d) => {
                const tone = d.status !== "completed" ? "amber" : d.conclusion === "success" ? "green" : d.conclusion === "cancelled" ? "" : "red";
                const label = d.status !== "completed" ? "En cours" : { success: "En ligne", failure: "Échec", cancelled: "Remplacé" }[d.conclusion] || d.conclusion;
                return (
                  <li key={d.id}>
                    <span className={`ax-pill ${tone}`}>
                      {d.status !== "completed" && <span className="ax-dot pulse" />} {label}
                    </span>
                    <span className="ax-list-main">
                      <span className="ax-list-title">{d.title}</span>
                      <span className="ax-list-meta">
                        {dateTimeFr(d.createdAt)} · {d.status === "completed" ? `durée ${duration(d.createdAt, d.updatedAt)}` : `démarré ${timeAgo(d.createdAt)}`} · {d.sha.slice(0, 7)}
                      </span>
                    </span>
                    <a className="ax-btn ghost icon sm" href={d.url} target="_blank" rel="noopener noreferrer" aria-label="Voir sur GitHub">
                      <Icon name="external" size="sm" />
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
          <p className="ax-hint ax-mt">
            « Remplacé » : un nouvel enregistrement est arrivé pendant le déploiement, qui a été annulé au profit du suivant — c&apos;est normal, le dernier contient tout.
          </p>
        </section>
      )}

      {data && tab === "historique" && (
        <section className="ax-card">
          {!data.gitConfigured && <Alert tone="info">Mode local : pas d&apos;accès en écriture à GitHub, les commits ci-dessous sont ceux du dépôt en ligne.</Alert>}
          {!commits ? (
            <Alert tone="warn">{data.commits?.error || "Historique indisponible."}</Alert>
          ) : (
            <ul className="ax-list">
              {commits.map((c) => (
                <li key={c.sha}>
                  <Icon name="git" size="sm" />
                  <span className="ax-list-main">
                    <a className="ax-list-title" href={c.url} target="_blank" rel="noopener noreferrer">
                      {c.message}
                    </a>
                    <span className="ax-list-meta">
                      {c.author} · {dateTimeFr(c.date)} · {c.sha.slice(0, 7)}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      {tab === "corbeille" && trash && (
        <section className="ax-card">
          {!trash.length ? (
            <Empty icon="🗑️" title="Corbeille vide">Ce que tu supprimes (concours, cours, articles, annonces…) atterrit ici et reste restaurable.</Empty>
          ) : (
            <>
              <div className="ax-card-head">
                <span className="ax-muted">{plural(trash.length, "élément")} · les 60 dernières suppressions sont conservées</span>
                <button type="button" className="ax-btn sm danger" onClick={() => purge(null)}>
                  Vider la corbeille
                </button>
              </div>
              <ul className="ax-list">
                {trash.map((e) => {
                  const col = COLLECTIONS[e.collection];
                  return (
                    <li key={e.key}>
                      <Icon name={col?.icon || "file"} />
                      <span className="ax-list-main">
                        <span className="ax-list-title">{col ? col.title(e.item) : e.item.id}</span>
                        <span className="ax-list-meta">
                          {col?.label} · supprimé {timeAgo(e.at)} · {e.item.id}
                        </span>
                      </span>
                      <button type="button" className="ax-btn sm" disabled={busy === e.key} onClick={() => restore(e)}>
                        <Icon name={busy === e.key ? "loader" : "restore"} size="sm" /> Restaurer
                      </button>
                      <button type="button" className="ax-btn ghost icon sm" aria-label="Effacer définitivement" onClick={() => purge(e)}>
                        <Icon name="x" size="sm" />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </section>
      )}
    </>
  );
}
