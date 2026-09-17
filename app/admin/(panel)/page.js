"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import WidgetGrid from "@/app/admin/_components/dashboard/WidgetGrid";
import CustomizePanel from "@/app/admin/_components/dashboard/CustomizePanel";
import Skeleton from "@/app/admin/_components/ui/Skeleton";
import { useDashboardLayout } from "@/app/admin/_lib/useDashboardLayout";
import { DASHBOARD_SECTIONS, widgetById } from "@/app/admin/_lib/widgets";

export default function DashboardPage() {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState("");
  const [extra, setExtra] = useState({ settings: null, emailConfigured: null, filiereCounts: null });
  const [subscribers, setSubscribers] = useState(null);
  const [customizeOpen, setCustomizeOpen] = useState(false);
  const [clock, setClock] = useState("");
  const layout = useDashboardLayout();

  // Academic year runs Sept→Aug — derived from today's date, not stored
  // anywhere, so it's always correct without a settings field to maintain.
  const academicYear = (() => {
    const now = new Date();
    const y = now.getFullYear();
    return now.getMonth() >= 8 ? `${y}/${y + 1}` : `${y - 1}/${y}`;
  })();

  // "Actualisé à HH:MM" used to be a clock ticking on its own while the
  // stats were only ever fetched once on mount — it looked like a live
  // dashboard but wasn't. Now the label is stamped from an actual refetch
  // (every 60s), so it always reflects when the numbers on screen were
  // really last pulled from KV/GitHub, not just the current time.
  useEffect(() => {
    let cancelled = false;
    function loadStats() {
      fetch("/api/admin/stats")
        .then((res) => {
          if (!res.ok) throw new Error("Erreur lors du chargement des statistiques.");
          return res.json();
        })
        .then((data) => {
          if (cancelled) return;
          setStats(data);
          setClock(new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }));
        })
        .catch((e) => !cancelled && setError(e.message));
    }
    loadStats();
    const id = setInterval(loadStats, 60000);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    fetch("/api/admin/subscribers")
      .then((r) => r.json())
      .then(setSubscribers)
      .catch(() => setSubscribers({ count: 0, history: [], recent: [] }));

    Promise.all([
      fetch("/api/settings").then((r) => r.json()).catch(() => null),
      fetch("/api/admin/email-status").then((r) => r.json()).catch(() => null),
      fetch("/api/admin/taxonomy").then((r) => r.json()).catch(() => null),
    ]).then(([settings, emailStatus, taxonomy]) => {
      setExtra({
        settings,
        emailConfigured: emailStatus ? emailStatus.configured : null,
        filiereCounts: taxonomy ? taxonomy.counts : null,
      });
    });
  }, []);

  const greeting = (() => {
    const h = new Date().getHours();
    if (h < 12) return "Bonjour";
    if (h < 18) return "Bon après-midi";
    return "Bonsoir";
  })();

  if (error) {
    return (
      <div className="admin-card">
        <div className="admin-error">{error}</div>
      </div>
    );
  }

  // Only show a quick-nav pill for a section that actually has at least one
  // visible widget — otherwise it would jump to an empty gap on the page.
  const visibleSections = DASHBOARD_SECTIONS.filter((s) =>
    layout.visibleOrder.some((id) => widgetById(id)?.section === s.id)
  );

  return (
    <>
      {!stats ? (
        <div className="admin-card">
          <Skeleton lines={5} />
        </div>
      ) : (
        <>
          {/* v4 masthead: no boxed hero and no separate <PageHeader> — the
              greeting IS the page title, with the actions as a toolbar rule
              under it. */}
          <div className="dash-hero">
            <div>
              <div className="dash-hero-session">
                <span className="dash-hero-session-dot" /> Session {academicYear}
                {clock && ` · Actualisé à ${clock}`}
              </div>
              <h1 className="dash-hero-greeting">
                {greeting} 👋 <em>voici l&apos;état du site</em> au{" "}
                {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long" })}.
              </h1>
              {visibleSections.length > 1 && (
                <nav className="dash-quicknav" aria-label="Sections du tableau de bord">
                  {visibleSections.map((s) => (
                    <a key={s.id} href={`#dash-${s.id}`} className="dash-quicknav-pill">
                      {s.icon} {s.label}
                    </a>
                  ))}
                </nav>
              )}
            </div>
            <div className="dash-quick-actions">
              <button type="button" className="admin-btn secondary" onClick={() => setCustomizeOpen(true)}>
                ⚙️ Personnaliser
              </button>
            </div>
          </div>

          <WidgetGrid visibleOrder={layout.visibleOrder} hide={layout.hide} ctx={{ stats, extra, subscribers }} />
        </>
      )}

      <CustomizePanel open={customizeOpen} onClose={() => setCustomizeOpen(false)} layout={layout} />
    </>
  );
}
