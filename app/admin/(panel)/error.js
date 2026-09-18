"use client";

import { useEffect } from "react";
import Link from "next/link";
import Icon from "@/app/admin/_components/ui/Icon";

// Route-level safety net for the whole admin panel. Without one, a single
// unhandled render error anywhere under (panel) — a widget reading a field
// the API stopped returning, a malformed date — takes the entire admin to a
// blank screen with nothing but a console trace. Scoped to the route group
// so the shell (rail, topbar) stays mounted around it.
export default function AdminPanelError({ error, reset }) {
  useEffect(() => {
    // The only place this ever surfaces otherwise is the user's devtools.
    console.error("admin panel error", error);
  }, [error]);

  return (
    <div className="admin-card admin-route-error">
      <div className="admin-route-error-icon" aria-hidden="true">
        <Icon name="alertTriangle" size={26} />
      </div>
      <h1>Cette page n&apos;a pas pu s&apos;afficher</h1>
      <p>
        Une erreur est survenue pendant le rendu. Le reste du panneau fonctionne toujours — tu peux réessayer, ou
        revenir au tableau de bord.
      </p>
      {error?.digest && (
        <p className="admin-route-error-digest">
          Référence : <code>{error.digest}</code>
        </p>
      )}
      <div className="admin-route-error-actions">
        <button type="button" className="admin-btn" onClick={reset}>
          <Icon name="refresh" size={15} /> Réessayer
        </button>
        <Link className="admin-btn secondary" href="/admin">
          <Icon name="dashboard" size={15} /> Tableau de bord
        </Link>
      </div>
    </div>
  );
}
