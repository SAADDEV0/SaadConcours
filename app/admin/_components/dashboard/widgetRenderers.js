import Link from "next/link";
import StatCard from "./StatCard";
import HeroStat from "./HeroStat";
import WidgetCard from "./WidgetCard";
import AreaChart from "./AreaChart";
import TimeSeriesChart from "./TimeSeriesChart";
import DonutChart from "./DonutChart";
import BarList from "./BarList";
import TodoCard from "./TodoCard";
import EmptyState from "../ui/EmptyState";
import Skeleton from "../ui/Skeleton";
import Icon from "../ui/Icon";
import { timeAgoFr, dateTimeFr, formatNumber, countLabel } from "../../_lib/format";
import { buildTodoItems } from "../../_lib/todo";
import { widgetById } from "../../_lib/widgets";

const CATEGORIE_COLORS = ["var(--accent)", "var(--green)", "var(--amber)", "var(--violet)", "var(--red)", "var(--text-faint)"];

// Hover detail for a "recherche sans résultat" row: the exact date + hour of
// every occurrence still inside the event log's rolling window (see
// searchMissStats in /api/admin/stats). The tally on the right counts every
// miss ever recorded, so it can exceed the number of dated lines — say so
// explicitly instead of letting the two numbers silently disagree.
function searchMissTimesTitle(r) {
  if (!r.times?.length) return "Recherches comptées avant le suivi des dates — aucune date disponible.";
  const lines = r.times.map((t) => `• ${dateTimeFr(new Date(t).getTime())}`);
  const older = r.count - r.times.length;
  if (older > 0) lines.push(`• + ${older} plus ancienne${older > 1 ? "s" : ""} (hors historique)`);
  return lines.join("\n");
}

/* --------------------------------------------------------------------------
 * Renders one dashboard widget by id, given the shared fetch context. Kept
 * separate from the (serializable) registry in _lib/widgets.js so that file
 * can stay a plain data list reusable by the "Personnaliser" panel.
 *
 * `ctx` is { range, groups, extra, subscribers, isInitialLoading } — data
 * arrives per API group now, so each widget reads only its own group and
 * shows a skeleton while just that group is still in flight, instead of the
 * whole page waiting on one monolithic payload.
 * ------------------------------------------------------------------------ */
export function renderWidget(id, ctx, onDismiss) {
  const { range, groups = {}, extra, subscribers } = ctx;
  const meta = widgetById(id);
  const group = meta?.group;

  // Group still loading and nothing cached to show: a skeleton in this
  // widget's own slab, not a page-wide spinner.
  if (group && !groups[group]) {
    return ctx.isInitialLoading?.(group) ? (
      <WidgetCard key={id} title={meta.label} stale>
        <Skeleton lines={4} />
      </WidgetCard>
    ) : null;
  }

  const kpis = groups.kpis;
  const metrics = kpis?.metrics;
  const audience = groups.audience;
  const content = groups.content;
  const todo = groups.todo;
  const perf = groups.perf;
  const logs = groups.logs;
  const stale = group ? Boolean(ctx.isPending?.(group)) : false;
  const periodLabel = range?.label ? range.label.toLowerCase() : "la période";
  const vsPrev = "vs période précédente de même longueur";

  switch (id) {
    /* ----------------------------- Vue d'ensemble ------------------------ */
    case "kpi.pdf": {
      if (!metrics) return null;
      const m = metrics.pdf;
      return (
        <HeroStat
          key={id}
          kicker={`Indicateur principal · ${periodLabel}`}
          label="Téléchargements PDF"
          value={m.total}
          trend={m.deltaPct}
          trendLabel={`${formatNumber(m.prev)} sur la période précédente`}
          points={m.points}
          formatValue={(v) => countLabel(v, "PDF", "PDF")}
          footer={[
            { label: "Moyenne / jour", value: m.perDay },
            { label: "Meilleur jour", value: m.best },
            { label: "Visites", value: metrics.visits.total },
            { label: "Total cumulé", value: kpis.totals.pdfTotal },
          ]}
          emptyMessage="Aucun téléchargement sur la période sélectionnée."
          onDismiss={onDismiss}
        />
      );
    }
    case "kpi.visits":
      return metrics ? (
        <StatCard
          key={id}
          icon="eye"
          tone="violet"
          label="Visiteurs"
          value={metrics.visits.total}
          sub={`${formatNumber(metrics.visits.perDay)} / jour en moyenne`}
          trend={metrics.visits.deltaPct}
          trendLabel={vsPrev}
          spark={metrics.visits.daily.map(([, n]) => n)}
          onDismiss={onDismiss}
        />
      ) : null;
    case "kpi.conversion":
      return metrics ? (
        <StatCard
          key={id}
          icon="target"
          tone="accent"
          label="Taux visites → PDF"
          value={`${formatNumber(metrics.conversionPct)} %`}
          sub={`${formatNumber(metrics.prevConversionPct)} % sur la période précédente`}
          onDismiss={onDismiss}
        />
      ) : null;
    case "kpi.pdfTotal":
      return kpis ? (
        <StatCard key={id} icon="files" tone="indigo" label="PDF au total" value={kpis.totals.pdfTotal} sub="depuis le lancement" onDismiss={onDismiss} />
      ) : null;
    case "kpi.visitsTotal":
      return kpis ? (
        <StatCard key={id} icon="globe" tone="amber" label="Visiteurs (tout temps)" value={kpis.totals.visitsTotal} onDismiss={onDismiss} />
      ) : null;
    case "kpi.concours":
      return kpis ? (
        <StatCard
          key={id}
          icon="book"
          tone="green"
          label="Concours"
          value={kpis.counts.concours}
          sub={`${formatNumber(kpis.counts.concoursAvecCorrige)} avec corrigé`}
          href={meta.href}
          onDismiss={onDismiss}
        />
      ) : null;
    case "kpi.cours":
      return kpis ? (
        <StatCard key={id} icon="notebook" tone="green" label="Fiches de cours" value={kpis.counts.cours} href={meta.href} onDismiss={onDismiss} />
      ) : null;
    case "kpi.quiz":
      return kpis ? (
        <StatCard key={id} icon="clipboard" tone="green" label="Évaluations" value={kpis.counts.quiz} href={meta.href} onDismiss={onDismiss} />
      ) : null;
    case "kpi.blog":
      return kpis ? (
        <StatCard key={id} icon="newspaper" tone="violet" label="Articles de blog" value={kpis.counts.blog} href={meta.href} onDismiss={onDismiss} />
      ) : null;
    case "kpi.sansCorrige":
      return kpis ? (
        <StatCard
          key={id}
          icon="alertTriangle"
          tone={kpis.counts.concoursSansCorrige > 0 ? "amber" : "green"}
          label="Concours sans corrigé"
          value={kpis.counts.concoursSansCorrige}
          sub={
            kpis.counts.concours
              ? `${Math.round((kpis.counts.concoursSansCorrige / kpis.counts.concours) * 100)} % du catalogue`
              : undefined
          }
          href={meta.href}
          onDismiss={onDismiss}
        />
      ) : null;
    case "kpi.filieres":
      return kpis ? (
        <StatCard
          key={id}
          icon="target"
          tone="violet"
          label="Filières couvertes"
          value={`${formatNumber(kpis.counts.filieresCouvertes)}/${formatNumber(kpis.counts.filieresTotal)}`}
          sub="Sous-filières avec au moins un concours"
          href={meta.href}
          onDismiss={onDismiss}
        />
      ) : null;
    case "kpi.newsOpen":
      return kpis ? (
        <StatCard
          key={id}
          icon="sparkles"
          tone="amber"
          label="Concours ouverts"
          value={kpis.counts.newsOuvertes}
          sub={`${formatNumber(kpis.counts.news)} au total`}
          href={meta.href}
          onDismiss={onDismiss}
        />
      ) : null;

    case "chart.traffic": {
      if (!metrics) return null;
      // Two series on one axis rather than two cards side by side: the whole
      // question is whether downloads track traffic, and that's unanswerable
      // when the curves live in separate boxes with separate scales.
      return (
        <WidgetCard
          key={id}
          title="Trafic et téléchargements"
          icon="activity"
          sub={`${range.label} — ${
            metrics.granularity === "day" ? "par jour" : metrics.granularity === "week" ? "par semaine" : "par mois"
          }`}
          stale={stale}
          onDismiss={onDismiss}
        >
          <TimeSeriesChart
            series={[
              { key: "visits", label: "Visites", color: "var(--cyan)", points: metrics.visits.points },
              { key: "pdf", label: "PDF", color: "var(--accent)", points: metrics.pdf.points },
            ]}
            height={240}
            emptyMessage="Aucune visite ni téléchargement suivi sur cette période."
          />
        </WidgetCard>
      );
    }

    case "state.system": {
      const settings = extra?.settings;
      const activePartnerAds = (settings?.partnerAds || []).length;
      const rows = [
        {
          label: "Alertes email",
          ok: extra?.emailConfigured === true,
          detail: extra?.emailConfigured === true ? "Configurées" : "Non configurées",
          href: "/admin/alertes",
        },
        {
          label: "Abonnés aux alertes",
          ok: (subscribers?.count || 0) > 0,
          detail: subscribers ? countLabel(subscribers.count, "abonné") : "…",
          href: "/admin/alertes/abonnes",
        },
        {
          label: "Bannières AdSense",
          ok: settings?.adsEnabled !== false,
          detail: settings?.adsEnabled !== false ? "Activées" : "Désactivées",
          href: "/admin/reglages/publicite",
        },
        {
          label: "Bannières partenaires",
          ok: settings?.partnerAdsEnabled !== false && activePartnerAds > 0,
          detail: `${formatNumber(activePartnerAds)} configurée${activePartnerAds > 1 ? "s" : ""}${
            settings?.partnerAdsEnabled === false ? " (désactivées)" : ""
          }`,
          href: "/admin/reglages/partenaires",
        },
      ];
      return (
        <WidgetCard key={id} title="État du système" icon="shield" sub="Signaux réels du site — pas de simulation" onDismiss={onDismiss}>
          {settings ? (
            <ul className="state-list">
              {rows.map((r) => (
                <li className="state-row" key={r.label}>
                  <span className={"state-dot" + (r.ok ? " ok" : " warn")} aria-hidden="true" />
                  <Link className="state-row-label" href={r.href}>
                    {r.label}
                  </Link>
                  {/* The dot is decorative; the state has to survive in text
                      for anyone who can't see the colour. */}
                  <span className="state-row-detail">
                    <span className="sr-only">{r.ok ? "État correct : " : "À vérifier : "}</span>
                    {r.detail}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <Skeleton lines={4} />
          )}
        </WidgetCard>
      );
    }

    case "list.activityFeed": {
      // A single real chronological feed merged from independent event
      // streams (PDF downloads, new alert subscribers, admin edits) — each
      // already timestamped by its own store, just interleaved here.
      const pdfEvents = (logs?.recentPdfDownloads || []).map((d) => ({
        at: d.at,
        icon: "download",
        color: "var(--accent)",
        text: `PDF téléchargé — ${d.label}`,
      }));
      const subEvents = (subscribers?.recent || []).map((r) => ({
        at: r.subscribedAt,
        icon: "userPlus",
        color: "var(--green)",
        text: `Nouvel abonné — ${r.email}`,
      }));
      const auditEvents = (logs?.auditLog || []).map((a) => ({
        at: a.at,
        icon: "pen",
        color: "var(--violet)",
        text: `${a.actionLabel} — ${a.resourceLabel}${a.label ? ` : ${a.label}` : ""}`,
      }));
      const feed = [...pdfEvents, ...subEvents, ...auditEvents]
        .filter((e) => e.at)
        .sort((a, b) => new Date(b.at) - new Date(a.at))
        .slice(0, 9);
      return (
        <WidgetCard
          key={id}
          title="Flux d'activité récent"
          icon="activity"
          sub="Téléchargements, abonnements et modifications, mélangés par horodatage"
          stale={stale}
          onDismiss={onDismiss}
        >
          {feed.length ? (
            <ul className="activity-feed">
              {feed.map((e, i) => (
                <li key={i} className="activity-feed-row">
                  <span className="activity-feed-icon" style={{ color: e.color }} aria-hidden="true">
                    <Icon name={e.icon} size={14} />
                  </span>
                  <span className="activity-feed-text">{e.text}</span>
                  <span className="activity-feed-time">{timeAgoFr(new Date(e.at).getTime())}</span>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState icon="clock" message="Pas encore d'activité suivie (actif surtout une fois déployé en production)." />
          )}
        </WidgetCard>
      );
    }

    /* -------------------------------- Audience --------------------------- */
    case "chart.subscriberGrowth": {
      if (!subscribers) return null;
      const hasHistory = subscribers.history?.some((p) => p.count > 0);
      return (
        <WidgetCard
          key={id}
          title="Croissance des abonnés"
          icon="trendingUp"
          sub="Total d'abonnés aux alertes, 14 derniers jours"
          href="/admin/alertes/abonnes"
          onDismiss={onDismiss}
        >
          {hasHistory ? (
            <AreaChart
              label="Abonnés"
              points={subscribers.history.map((p) => ({ label: p.date.slice(8) + "/" + p.date.slice(5, 7), full: p.date, value: p.count }))}
              formatValue={(v) => countLabel(v, "abonné")}
            />
          ) : (
            <EmptyState icon="trendingUp" message="Pas encore assez de données pour tracer une courbe." />
          )}
        </WidgetCard>
      );
    }
    case "list.newSubscribers": {
      if (!subscribers) return null;
      return (
        <WidgetCard
          key={id}
          title="Derniers abonnés"
          icon="userPlus"
          sub={countLabel(subscribers.count, "abonné") + " au total"}
          href="/admin/alertes/abonnes"
          onDismiss={onDismiss}
        >
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
            <EmptyState icon="inbox" message="Aucun nouvel abonné suivi pour l'instant." />
          )}
        </WidgetCard>
      );
    }
    case "chart.pdfKind":
      return kpis ? (
        <WidgetCard key={id} title="Répartition des téléchargements" icon="pieChart" sub="Par type de contenu, depuis le lancement" stale={stale} onDismiss={onDismiss}>
          <DonutChart
            segments={[
              { label: "Concours", value: kpis.pdfByKind.concours || 0, color: "var(--accent)" },
              { label: "Cours", value: kpis.pdfByKind.cours || 0, color: "var(--green)" },
              { label: "Évaluation", value: kpis.pdfByKind.evaluation || 0, color: "var(--amber)" },
            ]}
            centerLabel="PDF"
          />
        </WidgetCard>
      ) : null;

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
      const colors = ["var(--accent)", "var(--green)", "var(--amber)", "var(--red)", "var(--violet)", "var(--cyan)"];
      const sources = audience?.visitSources || [];
      return (
        <WidgetCard key={id} title="Sources de visiteurs" icon="globe" sub="D'où viennent les visiteurs (referrer / utm_source)" stale={stale} onDismiss={onDismiss}>
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
            <EmptyState icon="globe" message="Pas encore assez de données sur les sources de visiteurs." />
          )}
        </WidgetCard>
      );
    }

    case "chart.visitCities": {
      const cities = audience?.visitCities || [];
      return (
        <WidgetCard key={id} title="Villes des visiteurs" icon="mapPin" sub="Géolocalisation IP (Vercel), en production uniquement" stale={stale} onDismiss={onDismiss}>
          {cities.length ? (
            <BarList items={cities.map((c) => ({ label: c.city, value: c.visits }))} formatValue={(v) => countLabel(v, "visite")} />
          ) : (
            <EmptyState icon="mapPin" message="Pas encore de données de ville — actif seulement une fois le site déployé sur Vercel." />
          )}
        </WidgetCard>
      );
    }

    case "list.topPages": {
      const pages = audience?.topPages || [];
      return (
        <WidgetCard key={id} title="Vues par page" icon="list" sub="Nombre de visites, page par page" stale={stale} onDismiss={onDismiss}>
          {pages.length ? (
            <BarList items={pages.map((p) => ({ label: p.label, value: p.views }))} formatValue={(v) => countLabel(v, "vue")} />
          ) : (
            <EmptyState icon="file" message="Pas encore de données — reviens après quelques visites sur le site." />
          )}
        </WidgetCard>
      );
    }

    case "list.recentVisits": {
      const rows = logs?.recentVisits || [];
      return (
        <WidgetCard
          key={id}
          title="Derniers visiteurs"
          icon="users"
          sub="IP anonymisée et ville par visite, 30 dernières"
          collapsible
          count={rows.length}
          stale={stale}
          onDismiss={onDismiss}
        >
          {rows.length ? (
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Heure</th>
                    <th>Ville</th>
                    <th>IP (anonymisée)</th>
                    <th>Page</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={i}>
                      <td data-label="Heure">{timeAgoFr(new Date(r.at).getTime())}</td>
                      <td data-label="Ville">{r.city || "—"}</td>
                      <td data-label="IP">
                        <span className="admin-id-chip">{r.ip || "—"}</span>
                      </td>
                      <td data-label="Page">{r.label || r.path}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <EmptyState icon="users" message="Pas encore de visite suivie." />
          )}
        </WidgetCard>
      );
    }

    case "list.digestLog": {
      const rows = logs?.digestLog || [];
      const TYPE = { auto: { icon: "robot", label: "Auto (cron)" }, manuel: { icon: "pen", label: "Manuel" }, test: { icon: "flask", label: "Test" } };
      const STATUS = {
        sent: { icon: "check", label: "Envoyé", tone: "ok" },
        partial: { icon: "alertTriangle", label: "Partiel", tone: "warn" },
        failed: { icon: "x", label: "Échec", tone: "bad" },
        skipped: { icon: "skip", label: "Ignoré", tone: "muted" },
      };
      return (
        <WidgetCard
          key={id}
          title="Journal des envois d'email"
          icon="mail"
          sub="Composeur manuel, test, et cron quotidien — 20 derniers envois/tentatives"
          collapsible
          count={rows.length}
          stale={stale}
          onDismiss={onDismiss}
        >
          {rows.length ? (
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Heure</th>
                    <th>Type</th>
                    <th>Statut</th>
                    <th>Destinataires</th>
                    <th>Détail</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => {
                    const t = TYPE[r.type];
                    const s = STATUS[r.status];
                    return (
                      <tr key={i}>
                        <td data-label="Heure">{timeAgoFr(new Date(r.at).getTime())}</td>
                        <td data-label="Type">
                          <span className="admin-inline-icon">
                            {t && <Icon name={t.icon} size={13} />}
                            {t?.label || r.type}
                          </span>
                        </td>
                        <td data-label="Statut">
                          <span className={"admin-status-chip " + (s?.tone || "muted")}>
                            {s && <Icon name={s.icon} size={12} />}
                            {s?.label || r.status}
                          </span>
                        </td>
                        <td data-label="Destinataires">
                          {r.status === "skipped" ? "—" : `${formatNumber(r.sent)}/${formatNumber(r.total)}`}
                        </td>
                        <td data-label="Détail">{r.reason || r.subject || "—"}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <EmptyState icon="mail" message="Pas encore d'envoi suivi — le prochain envoi (manuel ou cron) apparaîtra ici." />
          )}
        </WidgetCard>
      );
    }

    /* --------------------------------- Contenu --------------------------- */
    case "chart.concoursByCategorie": {
      const rows = content?.concoursByCategorie || [];
      return (
        <WidgetCard key={id} title="Répartition par domaine" icon="pieChart" sub="Part du catalogue par catégorie de concours" href={meta.href} stale={stale} onDismiss={onDismiss}>
          {rows.length ? (
            <DonutChart
              segments={rows.map((r, i) => ({ label: r.label, value: r.count, color: CATEGORIE_COLORS[i % CATEGORIE_COLORS.length] }))}
              centerLabel="concours"
            />
          ) : (
            <EmptyState icon="folders" message="Aucun concours pour l'instant." />
          )}
        </WidgetCard>
      );
    }
    case "chart.concoursGrowth": {
      const points = content?.concoursGrowth || [];
      return (
        <WidgetCard
          key={id}
          title="Croissance du catalogue"
          icon="trendingUp"
          sub={`Concours ajoutés — ${range.label.toLowerCase()} (${formatNumber(content?.addedInRange || 0)} au total)`}
          stale={stale}
          onDismiss={onDismiss}
        >
          <AreaChart
            label="Concours ajoutés"
            color="var(--green)"
            points={points}
            formatValue={(v) => countLabel(v, "concours", "concours")}
            emptyMessage="Aucun concours ajouté sur cette période."
          />
        </WidgetCard>
      );
    }

    /* -------------------------------- À traiter -------------------------- */
    case "list.todo": {
      const items = buildTodoItems(extra);
      return items.length ? <TodoCard key={id} items={items} onDismiss={onDismiss} /> : null;
    }
    case "list.sansCorrige":
      return todo ? (
        <WidgetCard key={id} title="Concours sans corrigé" icon="alertTriangle" href={meta.href} stale={stale} onDismiss={onDismiss}>
          {todo.concoursSansCorrige.length ? (
            <ul className="dash-list">
              {todo.concoursSansCorrige.map((c) => (
                <li key={c.id}>
                  <Link href={`/admin/concours?edit=${encodeURIComponent(c.id)}`}>{c.label}</Link>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState icon="checkCircle" message="Tous les concours ont un corrigé." />
          )}
        </WidgetCard>
      ) : null;
    case "list.expiring":
      return todo ? (
        <WidgetCard key={id} title="Concours ouverts qui ferment bientôt" icon="calendarClock" href={meta.href} stale={stale} onDismiss={onDismiss}>
          {todo.newsExpiringSoon.length ? (
            <ul className="dash-list">
              {todo.newsExpiringSoon.map((n) => (
                <li key={n.id}>
                  <Link href={`/admin/concours-ouverts?edit=${encodeURIComponent(n.id)}`}>
                    {n.titre} {n.ville ? `— ${n.ville}` : ""}
                  </Link>{" "}
                  <span className="dash-list-date">({n.date_limite})</span>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState icon="checkCircle" message="Rien ne ferme dans les 14 prochains jours." />
          )}
        </WidgetCard>
      ) : null;
    case "list.searchMisses": {
      const rows = todo?.searchMisses || [];
      return (
        <WidgetCard
          key={id}
          title="Recherches sans résultat"
          icon="search"
          sub="Termes tapés dans la recherche /concours qui n'ont rien trouvé"
          stale={stale}
          onDismiss={onDismiss}
        >
          {rows.length ? (
            <ol className="stat-rank-list">
              {rows.map((r) => (
                <li key={r.query}>
                  <span className="search-miss-term">
                    « {r.query} »
                    <span className="search-miss-time" title={searchMissTimesTitle(r)}>
                      {r.lastAt ? `dernière ${timeAgoFr(new Date(r.lastAt).getTime())}` : "date non suivie"}
                    </span>
                  </span>
                  <strong>{countLabel(r.count, "recherche")}</strong>
                </li>
              ))}
            </ol>
          ) : (
            <EmptyState icon="search" message="Aucune recherche infructueuse suivie pour l'instant." />
          )}
        </WidgetCard>
      );
    }

    /* ------------------------------- Performance ------------------------- */
    case "list.topConcours": {
      const rows = perf?.topConcours || [];
      return (
        <WidgetCard key={id} title="Concours les plus consultés" icon="trophy" sub="Vues cumulées, depuis le lancement" stale={stale} onDismiss={onDismiss}>
          {rows.length ? (
            <BarList items={rows.map((c) => ({ label: c.label, value: c.views }))} formatValue={(v) => countLabel(v, "vue")} />
          ) : (
            <EmptyState icon="trophy" message="Pas encore de données — reviens après quelques visites sur le site." />
          )}
        </WidgetCard>
      );
    }
    case "list.topPdf": {
      const items = perf?.topPdf || [];
      const ICONS = { concours: "book", cours: "notebook", evaluation: "clipboard" };
      return (
        <WidgetCard key={id} title="PDF les plus téléchargés" icon="download" sub="Téléchargements cumulés, depuis le lancement" stale={stale} onDismiss={onDismiss}>
          {items.length ? (
            <ol className="stat-rank-list">
              {items.map((p) => (
                <li key={`${p.kind}:${p.id}`}>
                  <span className="admin-inline-icon">
                    <Icon name={ICONS[p.kind] || "file"} size={14} />
                    {p.label}
                  </span>
                  <strong>{countLabel(p.downloads, "téléchargement")}</strong>
                </li>
              ))}
            </ol>
          ) : (
            <EmptyState icon="download" message="Pas encore de données — reviens après quelques téléchargements de PDF." />
          )}
        </WidgetCard>
      );
    }
    case "chart.pdfCities": {
      const cities = perf?.pdfCities || [];
      return (
        <WidgetCard key={id} title="Villes des téléchargements PDF" icon="mapPin" sub="Géolocalisation IP (Vercel), en production uniquement" stale={stale} onDismiss={onDismiss}>
          {cities.length ? (
            <BarList
              items={cities.map((c) => ({ label: c.city, value: c.downloads, color: "var(--green)" }))}
              formatValue={(v) => countLabel(v, "téléchargement")}
            />
          ) : (
            <EmptyState icon="mapPin" message="Pas encore de données de ville — actif seulement une fois le site déployé sur Vercel." />
          )}
        </WidgetCard>
      );
    }
    case "list.recent":
      return perf ? (
        <WidgetCard key={id} title="Derniers concours ajoutés" icon="history" href={meta.href} stale={stale} onDismiss={onDismiss}>
          {perf.recentConcours.length ? (
            <ul className="dash-list">
              {perf.recentConcours.map((c) => (
                <li key={c.id}>
                  <Link href={`/admin/concours?edit=${encodeURIComponent(c.id)}`}>{c.label}</Link>
                  {c.hasCorrige && (
                    <span className="dash-list-flag" title="Corrigé disponible">
                      <Icon name="checkCircle" size={13} />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState icon="folders" message="Aucun concours pour l'instant." />
          )}
        </WidgetCard>
      ) : null;
    case "list.topAds": {
      const ads = perf?.topAds || [];
      return (
        <WidgetCard key={id} title="Performance des bannières partenaires" icon="megaphone" sub="Vues et clics par bannière" href={meta.href} stale={stale} onDismiss={onDismiss}>
          {ads.length ? (
            <BarList
              items={ads.map((a) => ({ label: a.label, value: a.views, ctr: a.ctr, clicks: a.clicks }))}
              formatValue={(v, it) => `${countLabel(v, "vue")} · ${formatNumber(it.ctr)} % CTR`}
            />
          ) : (
            <EmptyState icon="megaphone" message="Aucune bannière partenaire suivie pour l'instant." />
          )}
        </WidgetCard>
      );
    }
    case "list.recentPdfDownloads": {
      const rows = logs?.recentPdfDownloads || [];
      return (
        <WidgetCard
          key={id}
          title="Derniers téléchargements PDF"
          icon="download"
          sub="IP anonymisée et ville par téléchargement, 30 derniers"
          collapsible
          count={rows.length}
          stale={stale}
          onDismiss={onDismiss}
        >
          {rows.length ? (
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Heure</th>
                    <th>Ville</th>
                    <th>IP (anonymisée)</th>
                    <th>PDF</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={i}>
                      <td data-label="Heure">{timeAgoFr(new Date(r.at).getTime())}</td>
                      <td data-label="Ville">{r.city || "—"}</td>
                      <td data-label="IP">
                        <span className="admin-id-chip">{r.ip || "—"}</span>
                      </td>
                      <td data-label="PDF">{r.label}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <EmptyState icon="download" message="Pas encore de téléchargement suivi." />
          )}
        </WidgetCard>
      );
    }
    case "list.audit": {
      const rows = logs?.auditLog || [];
      return (
        <WidgetCard
          key={id}
          title="Journal des modifications"
          icon="history"
          sub="Créations, modifications et suppressions faites depuis le panneau"
          collapsible
          count={rows.length}
          stale={stale}
          onDismiss={onDismiss}
        >
          {rows.length ? (
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Quand</th>
                    <th>Action</th>
                    <th>Type</th>
                    <th>Élément</th>
                    <th>Détail</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={i}>
                      <td data-label="Quand" title={dateTimeFr(new Date(r.at).getTime())}>
                        {timeAgoFr(new Date(r.at).getTime())}
                      </td>
                      <td data-label="Action">
                        <span className={"admin-status-chip tone-" + r.actionTone}>{r.actionLabel}</span>
                      </td>
                      <td data-label="Type">{r.resourceLabel}</td>
                      <td data-label="Élément">{r.label || <span className="admin-id-chip">{r.id || "—"}</span>}</td>
                      <td data-label="Détail">{r.detail || "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <EmptyState
              icon="history"
              message="Aucune modification enregistrée pour l'instant — la prochaine action faite depuis le panneau apparaîtra ici."
            />
          )}
        </WidgetCard>
      );
    }

    default:
      return null;
  }
}
