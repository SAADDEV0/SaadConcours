"use client";

import { useEffect, useState } from "react";
import StatCard from "../dashboard/StatCard";

// Shared context strip for the three Alertes email tabs (réglages / composer
// / abonnés) — so an admin lands on any of them already knowing "is sending
// even possible right now" and "is the daily alert on" instead of having to
// dig into réglages first.
export default function AlertesStatusBar() {
  const [data, setData] = useState(null);

  useEffect(() => {
    Promise.all([
      fetch("/api/settings").then((r) => r.json()),
      fetch("/api/admin/subscribers").then((r) => r.json()),
      fetch("/api/admin/email-status").then((r) => r.json()),
    ])
      .then(([settings, subscribers, status]) => setData({ settings, subscribers, status }))
      .catch(() => setData({ failed: true }));
  }, []);

  if (!data || data.failed) return null;
  const { settings, subscribers, status } = data;

  const weekAgo = Date.now() - 7 * 86400000;
  const newThisWeek = (subscribers.recent || []).filter((r) => r.subscribedAt >= weekAgo).length;
  const spark = subscribers.history?.some((p) => p.count > 0) ? subscribers.history.map((p) => p.count) : undefined;

  return (
    <div className="stat-grid" style={{ marginBottom: 18 }}>
      <StatCard
        icon="📬"
        tone="violet"
        label="Abonnés aux alertes"
        value={subscribers.count ?? 0}
        sub={newThisWeek > 0 ? `+${newThisWeek} cette semaine` : "Aucun nouvel abonné cette semaine"}
        spark={spark}
      />
      <StatCard
        icon={settings.newsAlertsEnabled ? "🔔" : "🔕"}
        tone={settings.newsAlertsEnabled ? "green" : "amber"}
        label="Alerte automatique"
        value={settings.newsAlertsEnabled ? "Activée" : "Désactivée"}
        sub="Envoi quotidien des concours qui ferment bientôt"
      />
      <StatCard
        icon={status.configured ? "✅" : "⚠️"}
        tone={status.configured ? "green" : "amber"}
        label="Envoi d'email"
        value={status.configured ? "Configuré" : "Non configuré"}
        sub={status.configured ? "Compte Gmail prêt à envoyer" : "GMAIL_USER / GMAIL_APP_PASSWORD manquants"}
      />
    </div>
  );
}
