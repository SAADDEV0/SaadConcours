"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import WidgetGrid from "@/app/admin/_components/dashboard/WidgetGrid";
import CustomizePanel from "@/app/admin/_components/dashboard/CustomizePanel";
import RangePicker from "@/app/admin/_components/dashboard/RangePicker";
import InsightsBar from "@/app/admin/_components/dashboard/InsightsBar";
import Icon from "@/app/admin/_components/ui/Icon";
import { useDashboardLayout } from "@/app/admin/_lib/useDashboardLayout";
import { useDashboardData } from "@/app/admin/_lib/useDashboardData";
import { useLocalStorage } from "@/app/admin/_lib/useLocalStorage";
import { DASHBOARD_SECTIONS, widgetById, groupsForWidgets } from "@/app/admin/_lib/widgets";
import { buildInsights } from "@/app/admin/_lib/insights";
import { resolveRange, DEFAULT_PRESET } from "@/lib/dateRange";
import { timeAgoFr } from "@/app/admin/_lib/format";

// Groups that feed the page chrome (insight bar, tab badges) rather than one
// tab's widgets — always requested, whichever tab is open.
const ALWAYS_GROUPS = ["kpis", "todo"];

export default function DashboardPage() {
  const layout = useDashboardLayout();
  const [rangeState, setRangeState] = useLocalStorage("sc_admin_range", { preset: DEFAULT_PRESET });
  const [activeTab, setActiveTab] = useLocalStorage("sc_admin_tab", "overview");
  const [customizeOpen, setCustomizeOpen] = useState(false);
  const [dismissedInsights, setDismissedInsights] = useState([]);
  const [extra, setExtra] = useState({ settings: null, emailConfigured: null, filiereCounts: null });
  const [subscribers, setSubscribers] = useState(null);

  const range = useMemo(() => resolveRange(rangeState), [rangeState]);

  // Academic year runs Sept→Aug — derived from today's date, not stored
  // anywhere, so it's always correct without a settings field to maintain.
  const academicYear = (() => {
    const now = new Date();
    const y = now.getFullYear();
    return now.getMonth() >= 8 ? `${y}/${y + 1}` : `${y - 1}/${y}`;
  })();

  const sections = DASHBOARD_SECTIONS;
  const currentSection = sections.find((s) => s.id === activeTab) || sections[0];

  const visibleInTab = useMemo(
    () => layout.visibleOrder.filter((id) => widgetById(id)?.section === currentSection.id),
    [layout.visibleOrder, currentSection.id]
  );

  // Only what the open tab renders, plus the two groups the chrome needs.
  const groups = useMemo(
    () => [...new Set([...ALWAYS_GROUPS, ...groupsForWidgets(visibleInTab)])],
    [visibleInTab]
  );

  const { data, errors, retry, refreshAll, lastUpdated, isPending, isInitialLoading, isRefreshing } =
    useDashboardData(range, groups);

  // Settings / email status / taxonomy have their own endpoints and don't move
  // with the period, so they're fetched once rather than on every poll.
  useEffect(() => {
    let cancelled = false;
    fetch("/api/admin/subscribers")
      .then((r) => r.json())
      .then((d) => !cancelled && setSubscribers(d))
      .catch(() => !cancelled && setSubscribers({ count: 0, history: [], recent: [] }));

    Promise.all([
      fetch("/api/settings").then((r) => r.json()).catch(() => null),
      fetch("/api/admin/email-status").then((r) => r.json()).catch(() => null),
      fetch("/api/admin/taxonomy").then((r) => r.json()).catch(() => null),
    ]).then(([settings, emailStatus, taxonomy]) => {
      if (cancelled) return;
      setExtra({
        settings,
        emailConfigured: emailStatus ? emailStatus.configured : null,
        filiereCounts: taxonomy ? taxonomy.counts : null,
      });
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const greeting = (() => {
    const h = new Date().getHours();
    if (h < 12) return "Bonjour";
    if (h < 18) return "Bon après-midi";
    return "Bonsoir";
  })();

  const insights = useMemo(
    () =>
      buildInsights({
        range,
        kpis: data.kpis,
        todo: data.todo,
        content: data.content,
        extra,
        subscribers,
      }).filter((i) => !dismissedInsights.includes(i.id)),
    [range, data.kpis, data.todo, data.content, extra, subscribers, dismissedInsights]
  );

  // A badge on the tab, not a number buried three screens down — "à traiter"
  // is the one count that should be visible without opening its section.
  const todoCount =
    (data.todo?.newsExpiringSoon?.length || 0) + (data.kpis?.counts?.concoursSansCorrige ? 1 : 0);

  const ctx = {
    range,
    groups: data,
    errors,
    retry,
    isPending,
    isInitialLoading,
    extra,
    subscribers,
  };

  return (
    <>
      {/* The masthead carries the controls that scope the whole page — the
          period picker and the refresh — instead of spending the most
          valuable strip on screen on a greeting alone. */}
      <div className="dash-hero">
        <div className="dash-hero-text">
          <div className="dash-hero-session">
            <span className="dash-hero-session-dot" aria-hidden="true" /> Session {academicYear}
            {lastUpdated && (
              <>
                {" · "}
                <span title={new Date(lastUpdated).toLocaleString("fr-FR")}>
                  actualisé {timeAgoFr(lastUpdated)}
                </span>
              </>
            )}
          </div>
          <h1 className="dash-hero-greeting">
            {greeting} <em>voici l&apos;état du site</em>
          </h1>
        </div>

        <div className="dash-hero-controls">
          <RangePicker range={range} onChange={setRangeState} busy={isRefreshing} />
          <div className="dash-quick-actions">
            <button
              type="button"
              className="admin-icon-btn"
              onClick={refreshAll}
              title="Actualiser maintenant"
              aria-label="Actualiser maintenant"
              disabled={isRefreshing}
            >
              <Icon name="refresh" size={16} className={isRefreshing ? "spin" : undefined} />
            </button>
            <button type="button" className="admin-btn secondary" onClick={() => setCustomizeOpen(true)}>
              <Icon name="sliders" size={15} /> Personnaliser
            </button>
            <Link className="admin-btn" href="/admin/concours/import">
              <Icon name="plus" size={15} /> Importer des concours
            </Link>
          </div>
        </div>
      </div>

      <InsightsBar insights={insights} onDismiss={(id) => setDismissedInsights((d) => [...d, id])} />

      {/* Tabs, not anchor pills. Jump links were a symptom of a page too long
          to read; tabs make each section a real destination and let the data
          layer request only that section's groups. */}
      <div className="dash-tabs" role="tablist" aria-label="Sections du tableau de bord">
        {sections.map((s) => {
          const selected = s.id === currentSection.id;
          const count = s.id === "todo" ? todoCount : 0;
          return (
            <button
              key={s.id}
              type="button"
              role="tab"
              id={`dash-tab-${s.id}`}
              aria-selected={selected}
              aria-controls={`dash-panel-${s.id}`}
              tabIndex={selected ? 0 : -1}
              className={"dash-tab" + (selected ? " active" : "")}
              onClick={() => setActiveTab(s.id)}
              onKeyDown={(e) => {
                if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
                e.preventDefault();
                const i = sections.findIndex((x) => x.id === currentSection.id);
                const next = sections[(i + (e.key === "ArrowRight" ? 1 : sections.length - 1)) % sections.length];
                setActiveTab(next.id);
                document.getElementById(`dash-tab-${next.id}`)?.focus();
              }}
            >
              <Icon name={s.icon} size={15} />
              {s.label}
              {count > 0 && <span className="dash-tab-badge">{count}</span>}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`dash-panel-${currentSection.id}`}
        aria-labelledby={`dash-tab-${currentSection.id}`}
        tabIndex={-1}
      >
        <WidgetGrid section={currentSection} ids={visibleInTab} hide={layout.hide} ctx={ctx} />
      </div>

      <CustomizePanel open={customizeOpen} onClose={() => setCustomizeOpen(false)} layout={layout} />
    </>
  );
}
