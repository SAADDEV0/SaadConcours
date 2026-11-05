"use client";

import { useMemo } from "react";
import { BarList, Delta, Seg, SectionTitle } from "../../_ui/kit";
import { useLocalStorage } from "../../_lib/hooks";
import { dateFr, num } from "../../_lib/format";
import { CHANNELS, Columns, DEVICE_COLORS, DEVICE_LABELS, Heatmap, SplitBar, WEEKDAYS, WEEKDAYS_SHORT, channelOf, countryName, deltaOf, groupChannels, pct, peakSlot, share, sourceLabel, sumScores } from "./shared";

/* ------------------------------ Acquisition ------------------------------ */

// D'où viennent les visites : canaux, sources, assistants IA, pays, villes,
// appareils. « Sur la période » vient des compteurs v2 ; « Depuis le
// lancement » des anciens classements (première visite de chaque navigateur
// pour les sources, première page de chaque session pour les villes).
export function AcquisitionTab({ data }) {
  const b = data.breakdown;
  const started = Boolean(b) && data.metrics.coverage.started;
  const [stored, setScope] = useLocalStorage("ax-acq-scope", "period");
  const scope = started ? stored : "all";
  const period = scope === "period";

  const sources = period ? b.sources : data.sources || [];
  const prevSources = period && b.prevComparable ? b.prevSources : null;
  const cities = period ? b.cities : data.cities || [];
  const total = sumScores(sources);
  const channels = groupChannels(sources);
  const prevChannels = prevSources ? Object.fromEntries(groupChannels(prevSources).map((c) => [c.key, c.value])) : null;
  const prevBySource = prevSources ? new Map(prevSources.map((s) => [s.member, s.score])) : null;
  const ai = sources.filter((s) => channelOf(s.member) === "ai");
  const cityTotal = sumScores(cities);

  return (
    <>
      <div className="ax-toolbar ax-section">
        <Seg
          ariaLabel="Période des classements"
          value={scope}
          onChange={setScope}
          options={[
            { value: "period", label: `Sur la période (${data.range.short || data.range.label})`, title: started ? undefined : `Disponible à partir du ${dateFr(data.metrics.coverage.since)}` },
            { value: "all", label: "Depuis le lancement" },
          ]}
        />
        <span className="ax-muted ax-small">{period ? `${num(total)} visites avec une source connue` : "sources : première venue de chaque navigateur · villes : début de chaque visite"}</span>
      </div>

      <section className="ax-card ax-section">
        <SectionTitle aside={prevChannels ? "évolution vs période précédente" : null}>Canaux d&apos;acquisition</SectionTitle>
        <SplitBar items={channels.map((c) => ({ key: c.key, label: c.label, value: c.value, color: c.color }))} />
        {prevChannels && channels.length > 0 && (
          <ul className="ax-inline-deltas">
            {channels.map((c) => (
              <li key={c.key}>
                {c.label} <Delta value={deltaOf(c.value, prevChannels[c.key] || 0)} />
              </li>
            ))}
          </ul>
        )}
      </section>

      <div className="ax-grid c2 ax-section">
        <section className="ax-card">
          <SectionTitle aside={`${num(sources.length)} sources`}>Sources</SectionTitle>
          <BarList
            limit={20}
            items={sources.map((s) => ({
              key: s.member,
              label: `${sourceLabel(s.member)} · ${pct(share(s.score, total), 0)}${prevBySource ? ` (${fmtDelta(deltaOf(s.score, prevBySource.get(s.member) || 0))})` : ""}`,
              value: s.score,
              color: CHANNELS.find((c) => c.key === channelOf(s.member))?.color,
            }))}
          />
        </section>
        <div className="ax-stack">
          <section className="ax-card">
            <SectionTitle aside="ChatGPT, Gemini, Perplexity…">Assistants IA</SectionTitle>
            {ai.length ? (
              <BarList items={ai.map((s) => ({ key: s.member, label: sourceLabel(s.member), value: s.score, color: "#a855f7" }))} />
            ) : (
              <p className="ax-muted ax-small">Aucune visite venue d&apos;un assistant IA {period ? "sur la période" : "pour l'instant"}. Les pages citées par les IA apparaîtront ici (llms.txt et données structurées aident).</p>
            )}
          </section>
          <section className="ax-card">
            <SectionTitle aside={period ? "sur la période" : "non mesurés avant la v2"}>Appareils</SectionTitle>
            {period ? (
              <SplitBar items={b.devices.map((d) => ({ key: d.member, label: DEVICE_LABELS[d.member] || d.member, value: d.score, color: DEVICE_COLORS[d.member] }))} />
            ) : (
              <p className="ax-muted ax-small">Les appareils (mobile, tablette, ordinateur) sont mesurés à partir du {dateFr(data.metrics.coverage.since)} : choisir « Sur la période ».</p>
            )}
          </section>
        </div>
      </div>

      <div className="ax-grid c2">
        <section className="ax-card">
          <SectionTitle aside={period ? "sur la période" : "non mesurés avant la v2"}>Pays</SectionTitle>
          {period ? (
            <BarList limit={15} items={b.countries.map((c) => ({ key: c.member, label: `${countryName(c.member)} · ${pct(share(c.score, sumScores(b.countries)), 0)}`, value: c.score }))} />
          ) : (
            <p className="ax-muted ax-small">Les pays sont comptés à partir du {dateFr(data.metrics.coverage.since)}.</p>
          )}
        </section>
        <section className="ax-card">
          <SectionTitle aside={`${num(cities.length)} villes`}>Villes</SectionTitle>
          <BarList limit={20} items={cities.map((c) => ({ key: c.member, label: `${c.member === "Inconnue" ? "Ville inconnue" : c.member} · ${pct(share(c.score, cityTotal), 0)}`, value: c.score }))} />
        </section>
      </div>
    </>
  );
}

function fmtDelta(d) {
  if (d === null) return "nouveau";
  if (d === 0) return "=";
  return `${d > 0 ? "+" : "−"}${String(Math.abs(Math.round(d))).replace(".", ",")} %`;
}

/* ------------------------------ Horaires ------------------------------ */

// Quand les visiteurs viennent : jour × heure (heure du Maroc), par heure, par
// jour de la semaine. Sert surtout à choisir l'heure des publications.
export function HoursTab({ data }) {
  const b = data.breakdown;
  const heat = useMemo(() => b?.heat || Array.from({ length: 7 }, () => Array(24).fill(0)), [b]);
  const byHour = Array.from({ length: 24 }, (_, h) => heat.reduce((s, row) => s + row[h], 0));
  const byDay = heat.map((row) => row.reduce((a, v) => a + v, 0));
  const total = byDay.reduce((a, v) => a + v, 0);
  const peak = peakSlot(heat);
  const bestHour = total ? byHour.indexOf(Math.max(...byHour)) : null;
  const bestDay = total ? byDay.indexOf(Math.max(...byDay)) : null;
  // Créneaux de 3 h : plus parlant qu'une heure isolée pour planifier.
  const blocks = Array.from({ length: 8 }, (_, i) => ({ from: i * 3, value: byHour.slice(i * 3, i * 3 + 3).reduce((a, v) => a + v, 0) }));
  const bestBlock = total ? blocks.reduce((x, y) => (y.value > x.value ? y : x)) : null;

  if (!data.metrics.coverage.started || !b) {
    return <p className="ax-muted ax-card">Les horaires de visite sont mesurés à partir du {dateFr(data.metrics.coverage.since)}.</p>;
  }

  return (
    <>
      <div className="ax-grid c3 ax-section">
        <div className="ax-stat">
          <div className="ax-stat-label">Créneau le plus fréquenté</div>
          <div className="ax-stat-value">{peak ? `${WEEKDAYS[peak.d]} ${peak.h} h` : "—"}</div>
          <div className="ax-stat-foot">{peak ? `${num(peak.v)} visites commencées sur la période` : "pas encore de données"}</div>
        </div>
        <div className="ax-stat">
          <div className="ax-stat-label">Tranche horaire la plus active</div>
          <div className="ax-stat-value">{bestBlock ? `${bestBlock.from} h – ${bestBlock.from + 3} h` : "—"}</div>
          <div className="ax-stat-foot">{bestBlock ? `${pct(share(bestBlock.value, total), 0)} des visites · publier vers ${Math.max(0, bestBlock.from - 1)} h` : ""}</div>
        </div>
        <div className="ax-stat">
          <div className="ax-stat-label">Jour le plus actif</div>
          <div className="ax-stat-value">{bestDay !== null ? WEEKDAYS[bestDay] : "—"}</div>
          <div className="ax-stat-foot">{bestDay !== null ? `${pct(share(byDay[bestDay], total), 0)} des visites de la semaine` : ""}</div>
        </div>
      </div>
      <section className="ax-card ax-section">
        <SectionTitle aside={`heure du Maroc · ${data.range.label}`}>Jour × heure</SectionTitle>
        <Heatmap heat={heat} />
      </section>
      <div className="ax-grid c2">
        <section className="ax-card">
          <SectionTitle aside="visites commencées">Par heure</SectionTitle>
          <Columns values={byHour} labels={byHour.map((_, h) => (h % 3 === 0 ? String(h) : ""))} highlight={bestHour} title={(h, v) => `${h} h – ${h + 1} h : ${num(v)} visites (${pct(share(v, total), 0)})`} />
        </section>
        <section className="ax-card">
          <SectionTitle aside="visites commencées">Par jour de la semaine</SectionTitle>
          <Columns values={byDay} labels={WEEKDAYS_SHORT} highlight={bestDay} title={(d, v) => `${WEEKDAYS[d]} : ${num(v)} visites (${pct(share(v, total), 0)})`} />
        </section>
      </div>
    </>
  );
}
