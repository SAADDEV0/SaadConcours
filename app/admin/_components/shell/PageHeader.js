"use client";

import { usePathname } from "next/navigation";
import { findActiveTrail } from "../../_lib/nav";

// v4 page header: a mono eyebrow (icon + section) over a large display title.
// The breadcrumb that used to sit here moved into the topbar, so the page
// opens on its own name instead of repeating where it lives. The eyebrow
// names the real nav section ("Contenu", "Diffusion"…) rather than a generic
// label — it is read from the nav tree, so it can't drift out of sync.
export default function PageHeader({ icon, title, subtitle, actions, kicker }) {
  const pathname = usePathname();
  const { section } = findActiveTrail(pathname, null);

  return (
    <div className="admin-page-head">
      <div className="admin-page-head-main">
        <div className="admin-page-eyebrow">
          {icon && <span aria-hidden="true">{icon}</span>}
          <span className="ad-kicker">{kicker || section?.label || "Pilotage"}</span>
        </div>
        <h1 className="admin-page-title">{title}</h1>
        {subtitle && <div className="admin-page-subtitle">{subtitle}</div>}
      </div>
      {actions && <div className="dash-quick-actions">{actions}</div>}
    </div>
  );
}
