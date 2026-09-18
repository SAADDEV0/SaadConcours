"use client";

import { useEffect } from "react";
import Link from "next/link";

// Public-site error boundary. The admin has its own under (panel); this one
// covers everything a visitor can reach, so a broken page shows the site's
// own voice instead of Next's default stack-trace screen.
export default function SiteError({ error, reset }) {
  useEffect(() => {
    console.error("site error", error);
  }, [error]);

  return (
    <main className="container" style={{ padding: "80px 0", textAlign: "center", maxWidth: 560 }}>
      <h1 style={{ fontSize: "1.6rem", marginBottom: 12 }}>Une erreur est survenue</h1>
      <p style={{ color: "var(--muted, #667)", marginBottom: 24 }}>
        La page n&apos;a pas pu s&apos;afficher correctement. Réessaie dans un instant — si le problème persiste,
        signale-le nous.
      </p>
      <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
        <button type="button" className="btn" onClick={reset}>
          Réessayer
        </button>
        <Link className="btn secondary" href="/">
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
