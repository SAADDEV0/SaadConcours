"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// One-time, fully optional email prompt shown to first-time visitors.
// The choice (submitted email, or "skip") is remembered in localStorage so
// the same browser never sees it again — no cookie, no server-side gate,
// and it never blocks access to the content (Passer always works).
const STORAGE_KEY = "emailGateChoice";
// Never on the landing page view: a modal over the first page a visitor (or
// the AdSense reviewer) sees counts as an intrusive interstitial. It waits
// for the second page viewed, i.e. someone who is already browsing the site.
const VIEWS_KEY = "emailGateViews";
const MIN_VIEWS = 2;
// Pages people open to read the rules or reach us — no prompt over them.
const QUIET_PATHS = ["/a-propos", "/contact", "/confidentialite", "/faq"];

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function EmailGateModal() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | error
  const [error, setError] = useState("");

  const isAdmin = pathname?.startsWith("/admin");

  useEffect(() => {
    if (isAdmin) return;
    let views;
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
      views = (parseInt(localStorage.getItem(VIEWS_KEY), 10) || 0) + 1;
      localStorage.setItem(VIEWS_KEY, String(views));
    } catch {
      return;
    }
    if (views < MIN_VIEWS || QUIET_PATHS.includes(pathname)) return;
    const t = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(t);
  }, [isAdmin, pathname]);

  function close(choice) {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // localStorage indisponible (navigation privée...) — on masque quand
      // même la modale pour cette visite, tant pis si elle revient ensuite.
    }
    setVisible(false);
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setError("Adresse email invalide.");
      return;
    }
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/alerts/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok) {
        setError(data?.error || "Erreur, réessaie plus tard.");
        setStatus("error");
        return;
      }
      close("subscribed");
    } catch {
      setError("Erreur réseau, réessaie plus tard.");
      setStatus("error");
    }
  }

  if (!visible || isAdmin) return null;

  return (
    <div className="egm-backdrop" role="dialog" aria-modal="true" aria-labelledby="egm-title">
      <div className="egm-card">
        <h2 id="egm-title" className="egm-title">Reçois les nouveaux concours par email</h2>
        <p className="egm-subtitle">
          Facultatif — on t'envoie une alerte quand un nouveau concours ou une date limite approche.
          Tu peux ignorer et continuer directement sur le site.
        </p>
        <form onSubmit={onSubmit} className="egm-form">
          <input
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="ton.email@exemple.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="egm-input"
            disabled={status === "sending"}
          />
          <button type="submit" className="egm-submit" disabled={status === "sending"}>
            {status === "sending" ? "..." : "S'inscrire"}
          </button>
        </form>
        {error && <div className="egm-error">{error}</div>}
        <button type="button" className="egm-skip" onClick={() => close("skipped")}>
          Passer, voir le site sans m'inscrire
        </button>
      </div>
    </div>
  );
}
