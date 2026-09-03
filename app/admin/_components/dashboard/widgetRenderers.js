import StatCard from "./StatCard";
import WidgetCard from "./WidgetCard";
import AreaChart from "./AreaChart";
import DonutChart from "./DonutChart";
import TodoCard from "./TodoCard";
import { trendFromSeries, dayLabelShort } from "../../_lib/format";
import { buildTodoItems } from "../../_lib/todo";

// Renders one dashboard widget by id, given the shared fetch context. Kept
// separate from the (serializable) registry in _lib/widgets.js so that file
// can stay a plain data list reusable by the "Personnaliser" panel.
export function renderWidget(id, ctx, onDismiss) {
  const { stats, extra } = ctx;
  if (!stats) return null;

  const pdfSeries = stats.pdfLast7Days.map(([, n]) => n);
  const pdfChartPoints = stats.pdfLast7Days.map(([day, n]) => ({ label: dayLabelShort(day), value: n }));
  const pdfThisWeek = stats.pdfLast7Days.reduce((sum, [, n]) => sum + n, 0);

  switch (id) {
    case "kpi.pdfToday":
      return (
        <StatCard
          key={id}
          icon="📄"
          tone="indigo"
          label="PDF téléchargés aujourd'hui"
          value={stats.pdfToday}
          spark={pdfSeries}
          trend={trendFromSeries(pdfSeries)}
          onDismiss={onDismiss}
        />
      );
    case "kpi.pdfWeek":
      return <StatCard key={id} icon="📈" tone="violet" label="PDF cette semaine" value={pdfThisWeek} spark={pdfSeries} onDismiss={onDismiss} />;
    case "kpi.pdfTotal":
      return <StatCard key={id} icon="🗂️" tone="indigo" label="PDF au total" value={stats.pdfTotal} onDismiss={onDismiss} />;
    case "kpi.visitsToday":
      return <StatCard key={id} icon="👁️" tone="amber" label="Visiteurs aujourd'hui" value={stats.visitsToday ?? 0} onDismiss={onDismiss} />;
    case "kpi.visitsTotal":
      return <StatCard key={id} icon="🌍" tone="amber" label="Visiteurs (total)" value={stats.totalVisits ?? "—"} onDismiss={onDismiss} />;
    case "kpi.concours":
      return (
        <StatCard
          key={id}
          icon="📚"
          tone="green"
          label="Concours"
          value={stats.counts.concours}
          sub={`${stats.counts.concoursAvecCorrige} avec corrigé`}
          onDismiss={onDismiss}
        />
      );
    case "kpi.cours":
      return <StatCard key={id} icon="📖" tone="green" label="Fiches de cours" value={stats.counts.cours} onDismiss={onDismiss} />;
    case "kpi.quiz":
      return <StatCard key={id} icon="📝" tone="green" label="Évaluations" value={stats.counts.quiz} onDismiss={onDismiss} />;
    case "kpi.newsOpen":
      return (
        <StatCard
          key={id}
          icon="🆕"
          tone="amber"
          label="Concours ouverts (news)"
          value={stats.counts.newsOuvertes}
          sub={`${stats.counts.news} au total`}
          onDismiss={onDismiss}
        />
      );

    case "chart.pdf7d":
      return (
        <WidgetCard key={id} title="Téléchargements" sub="Nombre de PDF téléchargés, 7 derniers jours" onDismiss={onDismiss}>
          <AreaChart points={pdfChartPoints} formatValue={(v) => `${v} PDF`} />
        </WidgetCard>
      );
    case "chart.pdfKind":
      return (
        <WidgetCard key={id} title="Répartition des téléchargements" sub="Par type de contenu" onDismiss={onDismiss}>
          <DonutChart
            segments={[
              { label: "Concours", value: stats.pdfByKind.concours || 0, color: "var(--accent)" },
              { label: "Cours", value: stats.pdfByKind.cours || 0, color: "var(--green)" },
              { label: "Évaluation", value: stats.pdfByKind.evaluation || 0, color: "var(--amber)" },
            ]}
            centerLabel="PDF"
          />
        </WidgetCard>
      );

    case "list.topConcours":
      return (
        <WidgetCard key={id} title="Concours les plus consultés" onDismiss={onDismiss}>
          {stats.topConcours.length ? (
            <ol className="stat-rank-list">
              {stats.topConcours.map((c) => (
                <li key={c.id}>
                  <span>{c.label}</span>
                  <strong>
                    {c.views} vue{c.views > 1 ? "s" : ""}
                  </strong>
                </li>
              ))}
            </ol>
          ) : (
            <div className="empty-state">Pas encore de données — reviens après quelques visites sur le site.</div>
          )}
        </WidgetCard>
      );
    case "list.sansCorrige":
      return (
        <WidgetCard key={id} title="⚠️ Concours sans corrigé" href="/admin/concours" onDismiss={onDismiss}>
          {stats.concoursSansCorrige.length ? (
            <ul className="dash-list">
              {stats.concoursSansCorrige.map((c) => (
                <li key={c.id}>{c.label}</li>
              ))}
            </ul>
          ) : (
            <div className="empty-state">Tous les concours ont un corrigé. 🎉</div>
          )}
        </WidgetCard>
      );
    case "list.expiring":
      return (
        <WidgetCard key={id} title="⏰ Concours ouverts qui ferment bientôt" href="/admin/concours-ouverts" onDismiss={onDismiss}>
          {stats.newsExpiringSoon.length ? (
            <ul className="dash-list">
              {stats.newsExpiringSoon.map((n) => (
                <li key={n.id}>
                  {n.titre} {n.ville ? `— ${n.ville}` : ""} <span className="dash-list-date">({n.date_limite})</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="empty-state">Rien ne ferme dans les 14 prochains jours.</div>
          )}
        </WidgetCard>
      );
    case "list.recent":
      return (
        <WidgetCard key={id} title="🕓 Derniers concours ajoutés" href="/admin/concours" onDismiss={onDismiss}>
          {stats.recentConcours.length ? (
            <ul className="dash-list">
              {stats.recentConcours.map((c) => (
                <li key={c.id}>
                  {c.label} {c.hasCorrige ? "✅" : ""}
                </li>
              ))}
            </ul>
          ) : (
            <div className="empty-state">Aucun concours pour l'instant.</div>
          )}
        </WidgetCard>
      );
    case "list.todo": {
      const items = buildTodoItems(extra);
      return items.length ? <TodoCard key={id} items={items} onDismiss={onDismiss} /> : null;
    }
    default:
      return null;
  }
}
