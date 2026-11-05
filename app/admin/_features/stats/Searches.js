"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Icon from "../../_ui/Icon";
import { Seg, SectionTitle } from "../../_ui/kit";
import { api, downloadText } from "../../_lib/api";
import { useToast } from "../../_ui/feedback";
import { matchQuery, num, timeAgo } from "../../_lib/format";
import { toCsv } from "./shared";

// Recherches sans résultat. « Depuis le lancement » : le classement complet
// (compteur par terme). « Période » et « 7 jours » : recomptés à partir du
// journal des 200 dernières recherches, seul endroit où elles sont datées.
export function SearchesTab({ data, onDismissed }) {
  const toast = useToast();
  const [scope, setScope] = useState("all");
  const [q, setQ] = useState("");
  const [dismissed, setDismissed] = useState(() => new Set());
  const [busy, setBusy] = useState("");
  // Figé à l'ouverture de l'onglet : « 7 derniers jours » ne bouge pas pendant la lecture.
  const [now] = useState(() => Date.now());

  const log = useMemo(() => data.searchLog || [], [data.searchLog]);
  const lastSeen = useMemo(() => {
    const out = new Map();
    for (const e of log) if (!out.has(e.query)) out.set(e.query, e.at);
    return out;
  }, [log]);
  const week = useMemo(() => {
    const from = now - 7 * 86400e3;
    return countLog(log.filter((e) => new Date(e.at).getTime() >= from));
  }, [log, now]);

  const rows = useMemo(() => {
    if (scope === "all") return (data.searchMisses || []).map((s) => ({ term: String(s.member), count: s.score }));
    if (scope === "7d") return [...week.entries()].map(([term, count]) => ({ term, count })).sort((a, b) => b.count - a.count);
    const from = `${data.range.from}T00:00:00Z`;
    const to = `${data.range.to}T23:59:59.999Z`;
    return [...countLog(log.filter((e) => e.at >= from && e.at <= to)).entries()].map(([term, count]) => ({ term, count })).sort((a, b) => b.count - a.count);
  }, [scope, data.searchMisses, data.range, log, week]);

  const list = rows.filter((r) => !dismissed.has(r.term) && matchQuery(r.term, q));
  const oldest = log.length ? log[log.length - 1].at : null;

  async function dismiss(term) {
    setBusy(term);
    try {
      await api("/api/admin/metrics", { method: "POST", body: { action: "dismiss-search", query: term } });
      setDismissed((s) => new Set(s).add(term));
      onDismissed?.(term);
      toast?.success(`« ${term} » retiré de la liste`, "Il y revient s'il est de nouveau cherché sans résultat.");
    } catch (e) {
      toast?.error(`Impossible de retirer « ${term} »`, e.message);
    } finally {
      setBusy("");
    }
  }

  function exportCsv() {
    downloadText(`recherches-sans-resultat-${new Date().toISOString().slice(0, 10)}.csv`, toCsv(["terme", "recherches", "7 derniers jours", "dernière fois"], list.map((r) => [r.term, r.count, week.get(r.term) || 0, lastSeen.get(r.term) || ""])), "text/csv");
  }

  return (
    <section className="ax-card">
      <SectionTitle aside="tapées dans la recherche des concours, sans aucun résultat">Ce que les visiteurs cherchent et ne trouvent pas</SectionTitle>
      <div className="ax-toolbar">
        <Seg
          ariaLabel="Période"
          value={scope}
          onChange={setScope}
          options={[
            { value: "all", label: "Depuis le lancement" },
            { value: "period", label: `Période (${data.range.short || data.range.label})` },
            { value: "7d", label: "7 derniers jours" },
          ]}
        />
        <div className="ax-search">
          <Icon name="search" size="sm" />
          <input className="ax-input" placeholder="Filtrer les termes…" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <button type="button" className="ax-btn icon" onClick={exportCsv} disabled={!list.length} aria-label="Exporter (CSV)" title="Exporter (CSV)">
          <Icon name="download" size="sm" />
        </button>
      </div>
      {scope !== "all" && oldest && (
        <p className="ax-muted ax-small">
          Recompté sur les {num(log.length)} dernières recherches enregistrées (depuis {timeAgo(oldest).replace("il y a ", "")}).
        </p>
      )}
      {list.length ? (
        <ul className="ax-list">
          {list.map((s) => (
            <li key={s.term}>
              <span className="ax-list-main">
                <span className="ax-list-title">« {s.term} »</span>
                <span className="ax-list-meta">
                  {lastSeen.has(s.term) ? `dernière fois ${timeAgo(lastSeen.get(s.term))}` : "ancien"}
                  {week.get(s.term) ? ` · ${num(week.get(s.term))} cette semaine` : ""}
                </span>
              </span>
              <span className="ax-num">{num(s.count)}×</span>
              <Link className="ax-btn xs" href={`/admin/concours?q=${encodeURIComponent(s.term)}`}>
                Vérifier
              </Link>
              <Link className="ax-btn xs primary" href="/admin/concours/editer?nouveau=1">
                Créer
              </Link>
              {scope === "all" && (
                <button type="button" className="ax-btn xs ghost" onClick={() => dismiss(s.term)} disabled={busy === s.term} aria-label={`Marquer « ${s.term} » comme traité`} title="Le contenu existe maintenant, ou c'était une faute de frappe : retirer le terme du classement">
                  <Icon name={busy === s.term ? "loader" : "check"} size="sm" /> Traité
                </button>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="ax-muted">{q ? "Aucun terme ne correspond." : scope === "all" ? "Aucune recherche infructueuse enregistrée." : "Aucune recherche infructueuse sur cette période."}</p>
      )}
    </section>
  );
}

function countLog(entries) {
  const out = new Map();
  for (const e of entries) out.set(String(e.query), (out.get(String(e.query)) || 0) + 1);
  return out;
}
