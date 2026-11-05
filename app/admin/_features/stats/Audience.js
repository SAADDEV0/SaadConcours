"use client";

import { useEffect, useMemo, useState } from "react";
import Icon from "../../_ui/Icon";
import { BarList, Delta, LineChart, Seg, SectionTitle, Stat, Switch } from "../../_ui/kit";
import { api, downloadText } from "../../_lib/api";
import { useLocalStorage } from "../../_lib/hooks";
import { dateFr, num } from "../../_lib/format";
import { labelForPath, labelForPdfItem } from "../../_lib/labels";
import { formatDayFr } from "@/lib/dateRange";
import { Columns, CoverageNote, WEEKDAYS, countryName, deltaOf, groupChannels, pct, peakSlot, share, sourceLabel, sumScores, toCsv, DEVICE_LABELS } from "./shared";

const METRICS = [
  { value: "sessions", label: "Visites", color: "#4f8cff" },
  { value: "pageviews", label: "Pages vues", color: "#0ea5e9" },
  { value: "newVisitors", label: "Nouveaux visiteurs", color: "#f59e0b" },
  { value: "pdf", label: "PDF", color: "#a855f7" },
  { value: "all", label: "Tout", color: null },
];

export default function Audience({ data, content, onTab, onOpenPage }) {
  const m = data.metrics;
  const b = data.breakdown;
  const [metric, setMetric] = useLocalStorage("ax-stats-metric", "sessions");
  const [compare, setCompare] = useLocalStorage("ax-stats-compare", true);
  const [table, setTable] = useState(false);
  const def = METRICS.find((x) => x.value === metric) || METRICS[0];

  const series =
    def.value === "all"
      ? [
          { name: "Visites", color: "#4f8cff", area: true, points: m.sessions.points },
          { name: "Nouveaux visiteurs", color: "#f59e0b", points: m.newVisitors.points },
          { name: "PDF", color: "#a855f7", area: true, points: m.pdf.points },
        ]
      : [
          { name: def.label, color: def.color, area: true, points: m[def.value].points },
          ...(compare ? [{ name: "Période précédente", color: def.color, dashed: true, points: m[def.value].prevPoints }] : []),
        ];

  const insights = useInsights(data, content);
  const hasPeriodBreakdown = b && m.coverage.started;
  // Sur la période quand elle est mesurée, sinon depuis le lancement — et le
  // titre le dit.
  const periodSources = Boolean(hasPeriodBreakdown && b.sources.length);
  const periodCities = Boolean(hasPeriodBreakdown && b.cities.length);
  const sources = periodSources ? b.sources : data.sources || [];
  const cities = periodCities ? b.cities : data.cities || [];
  const detail = (scoped) => (
    <>
      {scoped ? "sur la période" : "depuis le lancement"} ·{" "}
      <button type="button" className="ax-link" onClick={() => onTab("acquisition")}>
        Détail
      </button>
    </>
  );

  function exportDays() {
    const rows = m.days.map((d) => [d.day, d.sessions, d.pageviews, d.newVisitors, d.pdf]);
    downloadText(`statistiques-jours-${data.range.from}-${data.range.to}.csv`, toCsv(["jour", "visites", "pages vues", "nouveaux visiteurs", "pdf"], rows), "text/csv");
  }

  return (
    <>
      <LiveStrip initial={data.live} content={content} onOpenPage={onOpenPage} />
      <CoverageNote coverage={m.coverage} />
      <div className="ax-grid c4 ax-section">
        <Stat
          icon="users"
          label="Visites"
          value={num(m.sessions.total)}
          foot={
            <>
              <Delta value={m.sessions.deltaPct} /> · {num(m.sessions.perDay)}/jour
            </>
          }
          spark={m.sessions.points.map((p) => p.value)}
        />
        <Stat
          icon="file"
          label="Pages vues"
          value={num(m.pageviews.total)}
          foot={
            <>
              <Delta value={m.pageviews.deltaPct} /> · {m.pagesPerVisit !== null ? `${String(m.pagesPerVisit).replace(".", ",")} pages/visite` : "—"}
            </>
          }
          spark={m.pageviews.points.map((p) => p.value)}
          color="#0ea5e9"
        />
        <Stat
          icon="sparkles"
          label="Nouveaux visiteurs"
          value={num(m.newVisitors.total)}
          foot={
            <>
              <Delta value={m.newVisitors.deltaPct} /> · {m.newPct !== null ? `${pct(m.newPct, 0)} des visites` : "1re venue d'un navigateur"}
            </>
          }
          spark={m.newVisitors.points.map((p) => p.value)}
          color="#f59e0b"
        />
        <Stat
          icon="download"
          label="PDF téléchargés"
          value={num(m.pdf.total)}
          foot={
            <>
              <Delta value={m.pdf.deltaPct} /> · {m.conversionPct !== null ? `${pct(m.conversionPct)} des visites` : `${num(m.pdf.perDay)}/jour`}
            </>
          }
          spark={m.pdf.points.map((p) => p.value)}
          color="#a855f7"
        />
      </div>

      <section className="ax-card ax-section">
        <SectionTitle aside={`${data.range.label}${compare && def.value !== "all" ? ` · comparé au ${formatDayFr(data.range.prevFrom)} → ${formatDayFr(data.range.prevTo)}` : ""}`}>Évolution</SectionTitle>
        <div className="ax-toolbar">
          <Seg ariaLabel="Courbe affichée" value={def.value} onChange={setMetric} options={METRICS.map((x) => ({ value: x.value, label: x.label }))} />
          {def.value !== "all" && <Switch checked={compare} onChange={setCompare} label="Comparer à la période précédente" />}
          <span className="ax-spacer" />
          <button type="button" className="ax-btn sm" onClick={() => setTable((t) => !t)} aria-expanded={table}>
            <Icon name="list" size="sm" /> {table ? "Masquer le détail" : "Détail jour par jour"}
          </button>
          <button type="button" className="ax-btn sm" onClick={exportDays}>
            <Icon name="download" size="sm" /> CSV
          </button>
        </div>
        <LineChart series={series} height={260} />
        {table && <DaysTable days={m.days} />}
      </section>

      <div className="ax-grid main-side ax-section">
        <section className="ax-card">
          <SectionTitle aside="calculés sur la période">Faits marquants</SectionTitle>
          {insights.length ? (
            <ul className="ax-insights">
              {insights.map((i) => (
                <li key={i.key} className={i.tone || ""}>
                  <span className="ax-insight-ic">
                    <Icon name={i.icon} size="sm" />
                  </span>
                  <span>
                    {i.text}
                    {i.tab && (
                      <button type="button" className="ax-link" onClick={() => onTab(i.tab)}>
                        {" "}
                        Voir
                      </button>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="ax-muted">Pas encore assez de données sur cette période.</p>
          )}
        </section>
        <div className="ax-stack">
          <section className="ax-card">
            <SectionTitle aside={detail(periodSources)}>Sources</SectionTitle>
            <BarList limit={6} items={sources.map((s) => ({ key: s.member, label: sourceLabel(s.member), value: s.score }))} />
          </section>
          <section className="ax-card">
            <SectionTitle aside={detail(periodCities)}>Villes</SectionTitle>
            <BarList limit={6} items={cities.map((s) => ({ key: s.member, label: s.member, value: s.score }))} />
          </section>
        </div>
      </div>
    </>
  );
}

function DaysTable({ days }) {
  const rows = [...days].reverse();
  const tot = days.reduce((a, d) => ({ sessions: a.sessions + d.sessions, pageviews: a.pageviews + d.pageviews, newVisitors: a.newVisitors + d.newVisitors, pdf: a.pdf + d.pdf }), { sessions: 0, pageviews: 0, newVisitors: 0, pdf: 0 });
  return (
    <div className="ax-table-wrap ax-mt">
      <table className="ax-table ax-table-num">
        <thead>
          <tr>
            <th>Jour</th>
            <th>Visites</th>
            <th>Pages vues</th>
            <th>Pages/visite</th>
            <th>Nouveaux</th>
            <th>PDF</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((d) => (
            <tr key={d.day}>
              <td>{formatDayFr(d.day, { weekday: "short", day: "numeric", month: "short" })}</td>
              <td>{num(d.sessions)}</td>
              <td>{num(d.pageviews)}</td>
              <td>{d.sessions ? String(Math.round((d.pageviews / d.sessions) * 10) / 10).replace(".", ",") : "—"}</td>
              <td>{num(d.newVisitors)}</td>
              <td>{num(d.pdf)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>{num(tot.sessions)}</td>
            <td>{num(tot.pageviews)}</td>
            <td>{tot.sessions ? String(Math.round((tot.pageviews / tot.sessions) * 10) / 10).replace(".", ",") : "—"}</td>
            <td>{num(tot.newVisitors)}</td>
            <td>{num(tot.pdf)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

/* ------------------------------ En direct ------------------------------ */

// Actualisé chaque minute tant que l'onglet du navigateur est visible.
function LiveStrip({ initial, content, onOpenPage }) {
  const [live, setLive] = useState(initial);
  const [error, setError] = useState(false);
  useEffect(() => {
    let alive = true;
    const tick = () => {
      if (document.hidden) return;
      api("/api/admin/metrics?scope=live")
        .then((d) => alive && (setLive(d.live), setError(false)))
        .catch(() => alive && setError(true));
    };
    const t = setInterval(tick, 60_000);
    const onVis = () => !document.hidden && tick();
    document.addEventListener("visibilitychange", onVis);
    return () => {
      alive = false;
      clearInterval(t);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);
  if (!live) return null;
  const vsYesterday = deltaOf(live.today.sessions, live.yesterday.sameHour);
  const hours = Array.from({ length: 24 }, (_, h) => `${h} h`);
  return (
    <section className="ax-card ax-section ax-live">
      <div className="ax-live-head">
        <span className={`ax-live-dot${error ? " off" : ""}`} aria-hidden="true" />
        <strong>En direct</strong>
        <span className="ax-muted ax-small">
          {error ? "actualisation impossible, nouvel essai dans 1 min" : `à jour ${new Date(live.at).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })} · actualisé chaque minute`}
        </span>
      </div>
      <div className="ax-live-grid">
        <div className="ax-live-kpi">
          <span className="ax-live-big">
            {live.active30Capped ? "≥ " : ""}
            {num(live.active30)}
          </span>
          <span>visite{live.active30 > 1 ? "s" : ""} commencée{live.active30 > 1 ? "s" : ""} ces 30 min</span>
          <span className="ax-muted ax-small">dont {num(live.active5)} ces 5 dernières minutes</span>
        </div>
        <div className="ax-live-kpi">
          <span className="ax-live-big">{num(live.today.sessions)}</span>
          <span>visites aujourd&apos;hui</span>
          <span className="ax-small">
            <Delta value={vsYesterday} /> <span className="ax-muted">vs hier à la même heure ({num(live.yesterday.sameHour)})</span>
          </span>
        </div>
        <div className="ax-live-kpi">
          <span className="ax-live-big">{num(live.today.pageviews)}</span>
          <span>pages vues aujourd&apos;hui</span>
          <span className="ax-muted ax-small">
            {num(live.today.pdf)} PDF · {num(live.today.newVisitors)} nouveaux visiteurs
          </span>
        </div>
        <div className="ax-live-chart">
          <Columns
            values={live.hoursToday}
            ghost={live.hoursYesterday}
            labels={hours.map((l, i) => (i % 6 === 0 ? String(i) : ""))}
            highlight={live.hour}
            height={74}
            title={(i, v) => `${hours[i]} : ${num(v)} visite${v > 1 ? "s" : ""} aujourd'hui · ${num(live.hoursYesterday[i])} hier`}
          />
          <span className="ax-muted ax-small">visites par heure · aujourd&apos;hui (plein) et hier (fond)</span>
        </div>
      </div>
      {live.activePages.length > 0 && (
        <div className="ax-live-pages">
          <span className="ax-muted ax-small">Pages d&apos;arrivée ces 30 min :</span>
          {live.activePages.map((p) => (
            <button key={p.member} type="button" className="ax-chip ax-chip-btn" onClick={() => onOpenPage(p.member)} title={p.member}>
              {labelForPath(p.member, content)} <b>{p.score}</b>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}

/* ------------------------------ Faits marquants ------------------------------ */

function useInsights(data, content) {
  return useMemo(() => {
    const m = data.metrics;
    const b = data.breakdown;
    const out = [];
    const add = (key, icon, text, extra = {}) => out.push({ key, icon, text, ...extra });

    const visits = m.sessions.total;
    if (m.sessions.deltaPct !== null && m.sessions.prev > 0 && Math.abs(m.sessions.deltaPct) >= 5)
      add("trend", m.sessions.deltaPct > 0 ? "arrowUp" : "arrowDown", `Visites ${m.sessions.deltaPct > 0 ? "en hausse" : "en baisse"} de ${pct(Math.abs(m.sessions.deltaPct), 0)} par rapport à la période précédente (${num(m.sessions.prev)} → ${num(visits)}).`, { tone: m.sessions.deltaPct > 0 ? "up" : "down" });

    const best = m.sessions.best || m.newVisitors.best;
    if (best && data.range.days > 1) add("best", "zap", `Meilleur jour : ${formatDayFr(best.day, { weekday: "long", day: "numeric", month: "long" })}, avec ${num(best.value)} ${m.sessions.best ? "visites" : "nouveaux visiteurs"}.`);

    if (b && visits > 0) {
      const ch = groupChannels(b.sources);
      const total = sumScores(b.sources);
      const top = b.sources[0];
      if (top && total) add("source", "globe", `${sourceLabel(top.member)} apporte ${pct(share(top.score, total), 0)} des visites.`, { tab: "acquisition" });
      const ai = ch.find((c) => c.key === "ai");
      if (ai && total) add("ai", "sparkles", `Les assistants IA (ChatGPT, Gemini…) amènent ${num(ai.value)} visite${ai.value > 1 ? "s" : ""} (${pct(share(ai.value, total))}).`, { tab: "acquisition" });
      const devTotal = sumScores(b.devices);
      const mobile = b.devices.find((d) => d.member === "m");
      if (mobile && devTotal >= 10) add("mobile", "layers", `${pct(share(mobile.score, devTotal), 0)} des visites se font sur ${DEVICE_LABELS.m.toLowerCase()} : vérifier les PDF et les pages sur téléphone en priorité.`, { tab: "acquisition" });
      const abroad = b.countries.filter((c) => c.member !== "MA");
      const ctTotal = sumScores(b.countries);
      if (abroad.length && ctTotal >= 10) add("abroad", "globe", `${pct(share(sumScores(abroad), ctTotal), 0)} des visites viennent de l'étranger (surtout ${countryName(abroad[0].member)}).`, { tab: "acquisition" });
      const peak = peakSlot(b.heat);
      if (peak) add("peak", "clock", `Pic d'affluence : le ${WEEKDAYS[peak.d].toLowerCase()} vers ${peak.h} h. Publier sur les réseaux un peu avant ce créneau.`, { tab: "horaires" });
      if (b.prevComparable) {
        const rising = b.pages.filter((p) => p.score - p.prev >= 5).sort((x, y) => y.score - y.prev - (x.score - x.prev))[0];
        if (rising) add("rising", "arrowUp", `En plus forte hausse : « ${labelForPath(rising.member, content)} » (${num(rising.prev)} → ${num(rising.score)} vues).`, { tab: "pages", tone: "up" });
      }
      const entry = b.entries[0];
      if (entry && visits >= 10) add("entry", "file", `Première porte d'entrée : « ${labelForPath(entry.member, content)} » (${pct(share(entry.score, visits), 0)} des visites y commencent).`, { tab: "pages" });
      const pdfTop = b.pdfItems[0];
      if (pdfTop) add("pdf", "download", `PDF le plus téléchargé : ${labelForPdfItem(pdfTop.member, content)} (${num(pdfTop.score)}).`, { tab: "pdf" });
    }

    if (m.conversionPct !== null && m.prevConversionPct !== null && Math.abs(m.conversionPct - m.prevConversionPct) >= 1)
      add("conv", "target", `Taux de téléchargement : ${pct(m.conversionPct)} des visites repartent avec un PDF (avant : ${pct(m.prevConversionPct)}).`);

    const from = `${data.range.from}T00:00:00Z`;
    const misses = (data.searchLog || []).filter((e) => e.at >= from);
    if (misses.length) {
      const terms = new Set(misses.map((e) => e.query));
      add("search", "search", `${num(misses.length)} recherche${misses.length > 1 ? "s" : ""} sans résultat sur la période (${num(terms.size)} terme${terms.size > 1 ? "s" : ""} différent${terms.size > 1 ? "s" : ""}) : du contenu à ajouter.`, { tab: "recherches", tone: "warn" });
    }
    if (!m.coverage.started) add("v2", "info", `Les visites, sources et horaires détaillés seront mesurés à partir du ${dateFr(m.coverage.since)}.`);
    return out;
  }, [data, content]);
}
