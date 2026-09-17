import WidgetCard from "./WidgetCard";

// One period's numbers — visits + PDF downloads, with a trend badge (vs the
// equal-length period right before it) for every period except "hier" which
// has no shorter unit to compare against. `conversionPct` (pdf/visites, not
// a real per-visitor funnel — see lib/analytics.js conversionPct) is the
// cheapest engagement signal available without session tracking.
function TimelinePeriod({ label, sub, visits, pdf, visitsDeltaPct, pdfDeltaPct, conversionPct }) {
  const hasDelta = typeof visitsDeltaPct === "number";
  return (
    <div className="timeline-period">
      <div className="timeline-period-head">
        <span className="timeline-period-label">{label}</span>
        <span className="timeline-period-sub">{sub}</span>
      </div>
      <div className="timeline-period-rows">
        <div className="timeline-period-row">
          <span className="timeline-period-metric">👁️ Visites</span>
          <span className="timeline-period-value">{visits}</span>
          {hasDelta && (
            <span className={"stat-card-trend " + (visitsDeltaPct >= 0 ? "up" : "down")}>
              {visitsDeltaPct >= 0 ? "↗" : "↘"} {Math.abs(visitsDeltaPct)}%
            </span>
          )}
        </div>
        <div className="timeline-period-row">
          <span className="timeline-period-metric">📄 PDF</span>
          <span className="timeline-period-value">{pdf}</span>
          {hasDelta && (
            <span className={"stat-card-trend " + (pdfDeltaPct >= 0 ? "up" : "down")}>
              {pdfDeltaPct >= 0 ? "↗" : "↘"} {Math.abs(pdfDeltaPct)}%
            </span>
          )}
        </div>
        {typeof conversionPct === "number" && (
          <div className="timeline-period-conversion">{conversionPct}% visites → PDF</div>
        )}
      </div>
    </div>
  );
}

export default function TimelineCard({ timeline, onDismiss }) {
  return (
    <WidgetCard
      title="Chronologie"
      sub="Visites et téléchargements PDF par période — variation vs la période précédente de même longueur"
      onDismiss={onDismiss}
    >
      <div className="timeline-grid">
        <TimelinePeriod label="Hier" sub="vs aujourd'hui non inclus" visits={timeline.yesterday.visits} pdf={timeline.yesterday.pdf} />
        <TimelinePeriod
          label="7 derniers jours"
          sub="vs les 7 jours précédents"
          visits={timeline.week.visits}
          pdf={timeline.week.pdf}
          visitsDeltaPct={timeline.week.visitsDeltaPct}
          pdfDeltaPct={timeline.week.pdfDeltaPct}
          conversionPct={timeline.week.conversionPct}
        />
        <TimelinePeriod
          label="30 derniers jours"
          sub="vs les 30 jours précédents"
          visits={timeline.month.visits}
          pdf={timeline.month.pdf}
          visitsDeltaPct={timeline.month.visitsDeltaPct}
          pdfDeltaPct={timeline.month.pdfDeltaPct}
          conversionPct={timeline.month.conversionPct}
        />
        <TimelinePeriod
          label="12 derniers mois"
          sub="vs les 12 mois précédents"
          visits={timeline.year.visits}
          pdf={timeline.year.pdf}
          visitsDeltaPct={timeline.year.visitsDeltaPct}
          pdfDeltaPct={timeline.year.pdfDeltaPct}
          conversionPct={timeline.year.conversionPct}
        />
      </div>
    </WidgetCard>
  );
}
