"use client";

import { useEffect } from "react";
import { useToast } from "../ui/ToastProvider";

const STORAGE_KEY = "sc_admin_last_subscriber_ts";
const POLL_MS = 45000;

// Silent background watcher, mounted once in AdminShell — polls the real
// subscriber list while the admin panel is open and pops a toast the moment
// a genuinely new email shows up. The first-ever poll only sets a baseline
// (no toast), so reopening the panel after days away doesn't dump a flood of
// toasts for everyone who already subscribed.
export default function SubscriberAlerts() {
  const toast = useToast();

  useEffect(() => {
    let cancelled = false;

    async function poll() {
      try {
        const res = await fetch("/api/admin/subscribers");
        if (!res.ok) return;
        const data = await res.json();
        const recent = data.recent || [];
        if (!recent.length) return;

        const stored = window.localStorage.getItem(STORAGE_KEY);
        const lastSeen = stored ? Number(stored) : null;

        if (lastSeen === null) {
          window.localStorage.setItem(STORAGE_KEY, String(recent[0].subscribedAt));
          return;
        }

        const newer = recent.filter((r) => r.subscribedAt > lastSeen).sort((a, b) => a.subscribedAt - b.subscribedAt);
        if (newer.length && !cancelled) {
          newer.forEach((r) => {
            toast.success(`🎉 Nouvel abonné aux alertes : ${r.email}`, { duration: 7000 });
          });
          window.localStorage.setItem(STORAGE_KEY, String(newer[newer.length - 1].subscribedAt));
        }
      } catch {
        // best-effort — a failed poll just tries again next interval
      }
    }

    poll();
    const timer = setInterval(poll, POLL_MS);
    return () => {
      cancelled = true;
      clearInterval(timer);
    };
  }, [toast]);

  return null;
}
