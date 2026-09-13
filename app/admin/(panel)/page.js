"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import PageHeader from "@/app/admin/_components/shell/PageHeader";
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

  // Client-only (locale/timezone-dependent) — computed after mount to avoid
  // a server/client render mismatch, same pattern as Topbar's date label.
  useEffect(() => {
    const tick = () => setClock(new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }));
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  // Academic year runs Sept→Aug — derived from today's date, not stored
  // anywhere, so it's always correct without a settings field to maintain.
  const academicYear = (() => {
    const now = new Date();
    const y = now.getFullYear();
    return now.getMonth() >= 8 ? `${y}/${y + 1}` : `${y - 1}/${y}`;
  })();

  useEffect(() => {
    fetch("/api/admin/stats")
      .then((res) => {
        if (!res.ok) throw new Error("Erreur lors du chargement des statistiques.");
        return res.json();
      })
      .then(setStats)
      .catch((e) => setError(e.message));

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
      <PageHeader
        icon="📊"
        title="Tableau de bord"
        actions={
          <button type="button" className="admin-btn secondary" onClick={() => setCustomizeOpen(true)}>
            ⚙️ Personnaliser
          </button>
        }
      />

      {!stats ? (
        <div className="admin-card">
          <Skeleton lines={5} />
        </div>
      ) : (
        <>
          <div className="dash-hero">
            <div>
              {clock && (
                <div className="dash-hero-session">
                  <span className="dash-hero-session-dot" /> Session {academicYear} · Actualisé à {clock}
                </div>
              )}
              <div className="dash-hero-greeting">
                {greeting} 👋 — voici l'état du site {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long" })}.
              </div>
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
              <Link className="admin-btn" href="/admin/concours">
                + Concours
              </Link>
              <Link className="admin-btn secondary" href="/admin/cours">
                + Cours
              </Link>
              <Link className="admin-btn secondary" href="/admin/evaluation">
                + Évaluation
              </Link>
              <Link className="admin-btn secondary" href="/admin/concours-ouverts">
                + News
              </Link>
              <a className="admin-btn secondary" href="/api/admin/export?format=json">
                ⬇ Export JSON
              </a>
              <a className="admin-btn secondary" href="/api/admin/export?format=csv">
                ⬇ Export CSV
              </a>
              <a className="admin-btn secondary" href="/api/admin/export-content">
                ⬇ Export contenu (JSON)
              </a>
            </div>
          </div>

          <WidgetGrid visibleOrder={layout.visibleOrder} hide={layout.hide} ctx={{ stats, extra, subscribers }} />
        </>
      )}

      <CustomizePanel open={customizeOpen} onClose={() => setCustomizeOpen(false)} layout={layout} />
    </>
  );
}
