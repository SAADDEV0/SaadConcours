"use client";

import { useEffect, useState } from "react";
import StatCard from "../dashboard/StatCard";
import Skeleton from "../ui/Skeleton";

// Real KPI row above the Concours table/pipeline — same shape as the
// mockup's 4-card strip, but every number comes straight from
// /api/admin/stats (the same endpoint the dashboard uses) instead of the
// candidature/seuil tracking the mockup implied, which this catalogue
// doesn't do.
export default function ConcoursStatsRow() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch("/api/admin/stats")
      .then((r) => r.json())
      .then(setStats)
      .catch(() => setStats(null));
  }, []);

  if (!stats) {
    return (
      <div className="admin-card" style={{ marginBottom: 18 }}>
        <Skeleton lines={2} />
      </div>
    );
  }

  return (
    <div className="stat-grid" style={{ marginBottom: 18 }}>
      <StatCard icon="📚" tone="indigo" label="Concours au catalogue" value={stats.counts.concours} sub={`${stats.counts.concoursAvecCorrige} avec corrigé`} />
      <StatCard icon="✅" tone="green" label="Avec corrigé" value={stats.counts.concoursAvecCorrige} />
      <StatCard icon="🆕" tone="amber" label="Concours ouverts actifs" value={stats.counts.newsOuvertes} sub={`${stats.counts.news} au total`} />
      <StatCard icon="⏰" tone="violet" label="Ferment sous 15 jours" value={stats.newsExpiringSoon?.length ?? 0} />
    </div>
  );
}
