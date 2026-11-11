"use client";

import { useEffect, useMemo, useState } from "react";
import Icon from "../../_ui/Icon";
import { ErrorState, Seg, SectionTitle, Skeleton, Stat } from "../../_ui/kit";
import { api, downloadText } from "../../_lib/api";
import { useLocalStorage } from "../../_lib/hooks";
import { dateFr, matchQuery, num } from "../../_lib/format";
import { labelForPath } from "../../_lib/labels";
import { DEVICE_LABELS, SITE, countryName, duration, sourceLabel, toCsv } from "./shared";

const PAGE = 30;
const DUR_SINCE = "2026-11-11";

const SORTS = [
  { value: "recent", label: "Les plus récents" },
  { value: "long", label: "Les plus longs" },
  { value: "pages", label: "Le plus de pages" },
];

const MIN_DURS = [
  { value: 0, label: "Toutes les visites" },
  { value: 10, label: "10 s et plus" },
  { value: 60, label: "1 min et plus" },
  { value: 300, label: "5 min et plus" },
];

// Clés de jour en UTC, comme côté serveur (lib/dateRange.js).
function utcDay(offset = 0) {
  return new Date(Date.now() - offset * 86400e3).toISOString().slice(0, 10);
}

function timeFr(iso) {
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? "—" : d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
}

function median(values) {
  if (!values.length) return null;
  const s = [...values].sort((a, b) => a - b);
  const mid = Math.floor(s.length / 2);
  return s.length % 2 ? s[mid] : Math.round((s[mid - 1] + s[mid]) / 2);
}

// Chaque visite d'un jour : quand, d'où, combien de temps, et le parcours page
// par page avec le temps passé sur chacune.
export function VisitorsTab({ content }) {
  const today = utcDay(0);
  const [day, setDay] = useState(today);
  const [sort, setSort] = useLocalStorage("ax-visitors-sort", "recent");
  const [minDur, setMinDur] = useLocalStorage("ax-visitors-min", 0);
  const [q, setQ] = useState("");
  const [limit, setLimit] = useState(PAGE);
  const [open, setOpen] = useState(() => new Set());
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [nonce, setNonce] = useState(0);

  useEffect(() => {
    const ctrl = new AbortController();
    setData(null);
    setError("");
    api(`/api/admin/metrics?scope=visitors&day=${day}`, { signal: ctrl.signal })
      .then((d) => setData(d.visitors || []))
      .catch((e) => e.name !== "AbortError" && setError(e.message));
    return () => ctrl.abort();
  }, [day, nonce]);

  const rows = useMemo(() => {
    if (!data) return [];
    const withLabels = data.map((v) => ({
      ...v,
      pages: v.pages.map(([path, s]) => ({ path, s, label: labelForPath(path, content) })),
    }));
    const filtered = withLabels.filter((v) => v.dur >= Number(minDur || 0) && matchQuery(`${v.city || ""} ${countryName(v.country)} ${sourceLabel(v.src || "")} ${v.pages.map((p) => `${p.label} ${p.path}`).join(" ")}`, q));
    if (sort === "long") filtered.sort((a, b) => b.dur - a.dur);
    else if (sort === "pages") filtered.sort((a, b) => b.pages.length - a.pages.length || b.dur - a.dur);
    return filtered;
  }, [data, content, sort, minDur, q]);

  const durs = (data || []).map((v) => v.dur);
  const total = durs.reduce((a, b) => a + b, 0);
  const avg = durs.length ? Math.round(total / durs.length) : null;
  const pagesAvg = data?.length ? Math.round((data.reduce((a, v) => a + v.pages.length, 0) / data.length) * 10) / 10 : null;

  function toggle(sid) {
    setOpen((old) => {
      const next = new Set(old);
      if (next.has(sid)) next.delete(sid);
      else next.add(sid);
      return next;
    });
  }

  function exportCsv() {
    const head = ["début", "dernière activité", "durée (s)", "pages", "ville", "pays", "source", "appareil", "parcours"];
    const lines = rows.map((v) => [v.at, v.last || "", v.dur, v.pages.length, v.city || "", v.country || "", v.src || "", DEVICE_LABELS[v.dv] || "", v.pages.map((p) => `${SITE}${p.path} (${p.s} s)`).join(" > ")]);
    downloadText(`visiteurs-${day}.csv`, toCsv(head, lines), "text/csv");
  }

  const dayOptions = [
    { value: utcDay(0), label: "Aujourd'hui" },
    { value: utcDay(1), label: "Hier" },
    { value: utcDay(2), label: "Avant-hier" },
  ];
  const preset = dayOptions.some((o) => o.value === day) ? day : "other";

  return (
    <>
      <section className="ax-card ax-section">
        <SectionTitle aside={`gardé 35 jours · mesuré depuis le ${dateFr(DUR_SINCE)}`}>Chaque visiteur</SectionTitle>
        <div className="ax-toolbar">
          <Seg ariaLabel="Jour" value={preset} onChange={(v) => v !== "other" && (setDay(v), setLimit(PAGE))} options={[...dayOptions, { value: "other", label: "Autre jour", title: "Choisir une date à droite" }]} />
          <input type="date" className="ax-input" value={day} min={DUR_SINCE} max={today} onChange={(e) => e.target.value && (setDay(e.target.value), setLimit(PAGE))} aria-label="Jour" />
          <span className="ax-spacer" />
          <button type="button" className="ax-btn icon" onClick={() => setNonce((n) => n + 1)} aria-label="Actualiser" title="Actualiser">
            <Icon name="refresh" size="sm" />
          </button>
        </div>
        <p className="ax-muted ax-small" style={{ margin: 0 }}>
          Temps actif seulement : l&apos;onglet est visible et le visiteur fait défiler, touche ou bouge la souris (au-delà de 5 min sans geste, le compteur s&apos;arrête). Une visite = un onglet ; 30 min au plus par page.
        </p>
      </section>

      {error && <ErrorState error={error} onRetry={() => setNonce((n) => n + 1)} />}
      {!data && !error && <Skeleton rows={6} height={56} />}

      {data && (
        <>
          <div className="ax-grid c4 ax-section">
            <Stat icon="users" label="Visites mesurées" value={num(data.length)} foot={dateFr(day, { weekday: "long", day: "numeric", month: "long" })} />
            <Stat icon="clock" label="Durée moyenne" value={duration(avg)} foot={`médiane ${duration(median(durs))}`} color="#0d9488" />
            <Stat icon="file" label="Pages par visite" value={pagesAvg === null ? "—" : String(pagesAvg).replace(".", ",")} foot="en moyenne" color="#0ea5e9" />
            <Stat icon="activity" label="Temps total" value={duration(total)} foot="toutes visites confondues" color="#f59e0b" />
          </div>

          <section className="ax-card ax-section">
            <div className="ax-toolbar">
              <div className="ax-search">
                <Icon name="search" size="sm" />
                <input className="ax-input" placeholder="Ville, source, page visitée…" value={q} onChange={(e) => (setQ(e.target.value), setLimit(PAGE))} />
              </div>
              <select className="ax-select" value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Trier">
                {SORTS.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
              <select className="ax-select" value={minDur} onChange={(e) => (setMinDur(Number(e.target.value)), setLimit(PAGE))} aria-label="Durée minimale">
                {MIN_DURS.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
              <button type="button" className="ax-btn icon" onClick={exportCsv} disabled={!rows.length} aria-label="Exporter (CSV)" title="Exporter (CSV)">
                <Icon name="download" size="sm" />
              </button>
            </div>

            {!rows.length ? (
              <p className="ax-muted">{data.length ? "Aucune visite ne correspond." : day < DUR_SINCE ? "Le temps passé n'était pas encore mesuré ce jour-là." : "Aucune visite mesurée ce jour-là pour l'instant."}</p>
            ) : (
              <ul className="ax-list">
                {rows.slice(0, limit).map((v) => {
                  const isOpen = open.has(v.sid);
                  const where = [v.city && v.city !== "Inconnue" ? v.city : null, v.country && v.country !== "MA" ? countryName(v.country) : null].filter(Boolean).join(", ") || (v.country ? countryName(v.country) : "Lieu inconnu");
                  const first = v.pages[0];
                  return (
                    <li key={v.sid} style={{ flexWrap: "wrap" }}>
                      <span className="ax-muted" style={{ width: 48 }}>
                        {timeFr(v.at)}
                      </span>
                      <button type="button" className="ax-list-main ax-list-open" onClick={() => toggle(v.sid)} aria-expanded={isOpen} title="Voir le parcours">
                        <span className="ax-list-title">
                          {where} · {v.pages.length} page{v.pages.length > 1 ? "s" : ""}
                        </span>
                        <span className="ax-list-meta">
                          {[v.src ? sourceLabel(v.src) : null, DEVICE_LABELS[v.dv] || null, first ? `entrée : ${first.label}` : null].filter(Boolean).join(" · ")}
                        </span>
                      </button>
                      <span className="ax-num" title="Temps actif sur le site">
                        {duration(v.dur)}
                      </span>
                      <span style={{ display: "inline-flex", transform: isOpen ? "rotate(180deg)" : undefined }}>
                        <Icon name="chevronDown" size="sm" />
                      </span>
                      {isOpen && (
                        <ol style={{ flexBasis: "100%", margin: "8px 0 4px", paddingInlineStart: 64, display: "grid", gap: 6 }}>
                          {v.pages.map((p, i) => (
                            <li key={`${p.path}-${i}`} style={{ display: "flex", gap: 10, alignItems: "baseline", border: 0, padding: 0 }}>
                              <span className="ax-muted ax-small" style={{ width: 18 }}>
                                {i + 1}.
                              </span>
                              <a href={`${SITE}${p.path}`} target="_blank" rel="noopener noreferrer" style={{ flex: 1, minWidth: 0, overflowWrap: "anywhere" }}>
                                {p.label}
                                <span className="ax-muted ax-small"> {p.path}</span>
                              </a>
                              <b className="ax-small" style={{ whiteSpace: "nowrap" }}>
                                {duration(p.s)}
                              </b>
                            </li>
                          ))}
                        </ol>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
            {rows.length > limit && (
              <div className="ax-more">
                <button type="button" className="ax-btn" onClick={() => setLimit((l) => l + PAGE)}>
                  Afficher plus ({num(rows.length - limit)} restantes)
                </button>
              </div>
            )}
          </section>
        </>
      )}
    </>
  );
}
