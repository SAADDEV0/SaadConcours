"use client";

import { useEffect, useState } from "react";
import Skeleton from "../ui/Skeleton";

// The mockup's "Santé Système" panel (SMS quota, CDN cache hit rate) has no
// real equivalent here — no SMS gateway, no CDN metrics to read. Shows the
// real operational signals this admin panel actually has instead.
export default function SystemHealthCard() {
  const [settings, setSettings] = useState(null);
  const [emailConfigured, setEmailConfigured] = useState(null);
  const [subscriberCount, setSubscriberCount] = useState(null);

  useEffect(() => {
    fetch("/api/settings").then((r) => r.json()).then(setSettings).catch(() => setSettings({}));
    fetch("/api/admin/email-status").then((r) => r.json()).then((d) => setEmailConfigured(Boolean(d?.configured))).catch(() => setEmailConfigured(false));
    fetch("/api/admin/subscribers").then((r) => r.json()).then((d) => setSubscriberCount(d?.count ?? 0)).catch(() => setSubscriberCount(0));
  }, []);

  if (!settings) {
    return (
      <div className="admin-card" style={{ marginBottom: 18 }}>
        <Skeleton lines={3} />
      </div>
    );
  }

  const activePartnerAds = (settings.partnerAds || []).length;
  const rows = [
    { label: "Alertes email", ok: emailConfigured === true, detail: emailConfigured === true ? "Configurées" : "Non configurées" },
    { label: "Abonnés aux alertes", ok: (subscriberCount || 0) > 0, detail: `${subscriberCount ?? "…"}` },
    { label: "AdSense", ok: settings.adsEnabled !== false, detail: settings.adsEnabled !== false ? "Actif" : "Inactif" },
    { label: "Bannières partenaires", ok: activePartnerAds > 0, detail: `${activePartnerAds}` },
  ];

  return (
    <div className="admin-card" style={{ marginBottom: 18 }}>
      <h2 className="admin-section-title" style={{ marginBottom: 10 }}>
        Santé du système
      </h2>
      <ul className="state-list">
        {rows.map((r) => (
          <li className="state-row" key={r.label}>
            <span className={"state-dot" + (r.ok ? " ok" : " warn")} />
            <span className="state-row-label">{r.label}</span>
            <span className="state-row-detail">{r.detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
