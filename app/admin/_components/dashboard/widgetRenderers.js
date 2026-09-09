import Link from "next/link";
import StatCard from "./StatCard";
import WidgetCard from "./WidgetCard";
import AreaChart from "./AreaChart";
import DonutChart from "./DonutChart";
import BarList from "./BarList";
import TodoCard from "./TodoCard";
import EmptyState from "../ui/EmptyState";
import { trendFromSeries, dayLabelShort, dayLabelMed, timeAgoFr } from "../../_lib/format";
import { buildTodoItems } from "../../_lib/todo";

const CATEGORIE_COLORS = ["var(--accent)", "var(--green)", "var(--amber)", "var(--violet)", "var(--red)", "var(--text-faint)"];

// Renders one dashboard widget by id, given the shared fetch context. Kept
// separate from the (serializable) registry in _lib/widgets.js so that file
// can stay a plain data list reusable by the "Personnaliser" panel.
export function renderWidget(id, ctx, onDismiss) {
  const { stats, extra, subscribers } = ctx;

  // The two subscriber widgets only need `subscribers`, not `stats` (which
  // can still be loading) — render them independently so the audience
  // section isn't blocked on the (separate) stats fetch.
  if (id === "chart.subscriberGrowth") {
    if (!subscribers) return null;
    const hasHistory = subscribers.history?.some((p) => p.count > 0);
    return (
      <WidgetCard key={id} title="Croissance des abonnés" sub="Total d'abonnés aux alertes, 14 derniers jours" href="/admin/alertes/abonnes" onDismiss={onDismiss}>
        {hasHistory ? (
          <AreaChart points={subscribers.history.map((p) => ({ label: dayLabelMed(p.date), value: p.count }))} formatValue={(v) => `${v} abonnés`} />
        ) : (
          <EmptyState icon="📈" message="Pas encore assez de données pour tracer une courbe." />
        )}
      </WidgetCard>
    );
  }
  if (id === "list.newSubscribers") {
    if (!subscribers) return null;
    return (
      <WidgetCard key={id} title="🎉 Derniers abonnés" sub={`${subscribers.count} abonné${subscribers.count > 1 ? "s" : ""} au total`} href="/admin/alertes/abonnes" onDismiss={onDismiss}>
        {subscribers.recent?.length ? (
          <ul className="dash-list">
            {subscribers.recent.map((r) => (
              <li key={r.email} className="dash-list-subscriber">
                <span className="dash-list-subscriber-email">{r.email}</span>
                <span className="dash-list-date">{timeAgoFr(r.subscribedAt)}</span>
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState icon="📭" message="Aucun nouvel abonné suivi pour l'instant." />
        )}
      </WidgetCard>
    );
  }

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
    case "kpi.blog":
      return <StatCard key={id} icon="✍️" tone="violet" label="Articles de blog" value={stats.counts.blog} onDismiss={onDismiss} />;
    case "kpi.filieres":
      return (
        <StatCard
          key={id}
          icon="🎯"
          tone="violet"
          label="Filières couvertes"
          value={`${stats.counts.filieresCouvertes}/${stats.counts.filieresTotal}`}
          sub="Sous-filières avec au moins un concours"
          onDismiss={onDismiss}
        />
      );
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
    case "chart.visits7d": {
      const visitsPoints = (stats.visitsLast7Days || []).map(([day, n]) => ({ label: dayLabelShort(day), value: n }));
      const hasVisits = visitsPoints.some((p) => p.value > 0);
      return (
        <WidgetCard key={id} title="Visiteurs" sub="Pages vues, 7 derniers jours" onDismiss={onDismiss}>
          {hasVisits ? (
            <AreaChart points={visitsPoints} formatValue={(v) => `${v} visite${v > 1 ? "s" : ""}`} />
          ) : (
            <EmptyState icon="👁️" message="Pas encore assez de visites suivies pour tracer une courbe." />
          )}
        </WidgetCard>
      );
    }
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

    case "chart.visitSources": {
      const labels = {
        direct: "Direct",
        google: "Google",
        facebook: "Facebook",
        instagram: "Instagram",
        twitter: "Twitter / X",
        whatsapp: "WhatsApp",
        tiktok: "TikTok",
        youtube: "YouTube",
        bing: "Bing",
        autre: "Autre",
      };
      const colors = ["var(--accent)", "var(--green)", "var(--amber)", "var(--red, #ef4444)", "var(--violet, #8b5cf6)", "var(--border)"];
      const sources = stats.visitSources || [];
      return (
        <WidgetCard key={id} title="Sources de visiteurs" sub="D'où viennent les visiteurs (referrer / utm_source)" onDismiss={onDismiss}>
          {sources.length ? (
            <DonutChart
              segments={sources.map(({ member, score }, i) => ({
                label: labels[member] || member,
                value: score,
                color: colors[i % colors.length],
              }))}
              centerLabel="visites"
            />
          ) : (
            <EmptyState icon="🌐" message="Pas encore assez de données sur les sources de visiteurs." />
          )}
        </WidgetCard>
      );
    }

    case "list.topPages": {
      const pages = stats.topPages || [];
      return (
        <WidgetCard key={id} title="Vues par page" sub="Nombre de visites, page par page" onDismiss={onDismiss}>
          {pages.length ? (
            <ol className="stat-rank-list">
              {pages.map((p) => (
                <li key={p.path}>
                  <span>{p.label}</span>
                  <strong>
                    {p.views} vue{p.views > 1 ? "s" : ""}
                  </strong>
                </li>
              ))}
            </ol>
          ) : (
            <EmptyState icon="📄" message="Pas encore de données — reviens après quelques visites sur le site." />
          )}
        </WidgetCard>
      );
    }

    case "chart.concoursByCategorie": {
      const rows = stats.concoursByCategorie || [];
      return (
        <WidgetCard key={id} title="Concours par filière" sub="Répartition du catalogue par catégorie" href="/admin/concours/filieres" onDismiss={onDismiss}>
          {rows.length ? (
            <BarList
              items={rows.map((r, i) => ({ label: r.label, value: r.count, color: CATEGORIE_COLORS[i % CATEGORIE_COLORS.length] }))}
              formatValue={(v) => `${v} concours`}
            />
          ) : (
            <EmptyState icon="🗂️" message="Aucun concours pour l'instant." />
          )}
        </WidgetCard>
      );
    }
    case "chart.concoursGrowth": {
      const rows = stats.concoursGrowth || [];
      const points = rows.map((r) => ({ label: r.label, value: r.count }));
      const hasGrowth = points.some((p) => p.value > 0);
      return (
        <WidgetCard key={id} title="Croissance du catalogue" sub="Concours ajoutés par mois, 6 derniers mois" onDismiss={onDismiss}>
          {hasGrowth ? (
            <AreaChart points={points} formatValue={(v) => `${v} concours ajouté${v > 1 ? "s" : ""}`} />
          ) : (
            <EmptyState icon="📈" message="Pas encore de concours ajoutés sur cette période." />
          )}
        </WidgetCard>
      );
    }

    case "list.topAds": {
      const ads = stats.topAds || [];
      return (
        <WidgetCard
          key={id}
          title="Performance des bannières partenaires"
          sub="Vues et clics par bannière"
          href="/admin/reglages/partenaires"
          onDismiss={onDismiss}
        >
          {ads.length ? (
            <BarList items={ads.map((a) => ({ label: a.label, value: a.views, color: "var(--accent)" }))} formatValue={(v) => `${v} vues`} />
          ) : (
            <EmptyState icon="📣" message="Aucune bannière partenaire suivie pour l'instant." />
          )}
        </WidgetCard>
      );
    }

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
    case "list.topPdf": {
      const items = stats.topPdf || [];
      return (
        <WidgetCard key={id} title="PDF les plus téléchargés" onDismiss={onDismiss}>
          {items.length ? (
            <ol className="stat-rank-list">
              {items.map((p) => (
                <li key={`${p.kind}:${p.id}`}>
                  <span>{p.label}</span>
                  <strong>
                    {p.downloads} téléchargement{p.downloads > 1 ? "s" : ""}
                  </strong>
                </li>
              ))}
            </ol>
          ) : (
            <div className="empty-state">Pas encore de données — reviens après quelques téléchargements de PDF.</div>
          )}
        </WidgetCard>
      );
    }
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
