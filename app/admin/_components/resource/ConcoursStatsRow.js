"use client";

import { useEffect, useState } from "react";
import StatCard from "../dashboard/StatCard";
import Skeleton from "../ui/Skeleton";

// Real KPI row above the Concours table/pipeline — every number comes
// straight from /api/admin/stats (the same endpoint the dashboard uses)
// instead of the candidature/seuil tracking the original mockup implied,
// which this catalogue doesn't do. Only the two groups these four tiles need
// are requested, so opening the concours list no longer pays for the raw
// visitor logs or the ad-performance reads.
export default function ConcoursStatsRow() {
  const [data, setData] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/admin/stats?groups=kpis,todo")
      .then((r) => {
        if (!r.ok) throw new Error("stats indisponibles");
        return r.json();
      })
      .then((json) => !cancelled && setData(json.groups || {}))
      .catch(() => !cancelled && setFailed(true));
    return () => {
      cancelled = true;
    };
  }, []);

  // A failed KPI strip shouldn't leave a permanent skeleton pulsing above the
  // table the admin actually came here to use — it just disappears.
  if (failed) return null;

  if (!data) {
    return (
      <div className="admin-card" style={{ marginBottom: 18 }}>
        <Skeleton lines={2} />
      </div>
    );
  }

  const counts = data.kpis?.counts || {};
  const expiring = data.todo?.newsExpiringSoon?.length ?? 0;

  return (
    <div className="stat-grid" style={{ marginBottom: 18 }}>
      <StatCard
        icon="book"
        tone="accent"
        label="Concours au catalogue"
        value={counts.concours}
        sub={`${counts.concoursAvecCorrige ?? 0} avec corrigé`}
      />
      <StatCard icon="checkCircle" tone="green" label="Avec corrigé" value={counts.concoursAvecCorrige} />
      <StatCard
        icon="sparkles"
        tone="amber"
        label="Concours ouverts actifs"
        value={counts.newsOuvertes}
        sub={`${counts.news ?? 0} au total`}
        href="/admin/concours-ouverts"
      />
      <StatCard
        icon="calendarClock"
        tone="violet"
        label="Ferment sous 15 jours"
        value={expiring}
        href="/admin/concours-ouverts"
      />
    </div>
  );
}
