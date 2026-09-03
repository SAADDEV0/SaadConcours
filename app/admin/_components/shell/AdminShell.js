"use client";

import { useState } from "react";
import BrandLogo from "@/app/_shared/BrandLogo";
import SidebarNav from "./SidebarNav";
import Topbar from "./Topbar";
import { Scrim, useMobileDrawer } from "./MobileDrawer";
import SubscriberAlerts from "./SubscriberAlerts";
import { ToastProvider } from "../ui/ToastProvider";
import { ConfirmProvider } from "../ui/ConfirmProvider";
import { useLocalStorage } from "../../_lib/useLocalStorage";

export default function AdminShell({ children }) {
  const [navOpen, setNavOpen] = useState(false);
  const [railExpanded, setRailExpanded] = useLocalStorage("sc_admin_sidebar_expanded", false);
  useMobileDrawer(navOpen, setNavOpen);

  return (
    <ToastProvider>
      <ConfirmProvider>
        <SubscriberAlerts />
        <div className="admin-shell">
          <Scrim open={navOpen} onClose={() => setNavOpen(false)} />
          <aside
            className={"admin-sidebar" + (navOpen ? " open" : "") + (railExpanded ? " expanded" : "")}
            aria-hidden={!navOpen && undefined}
          >
            <div className="u-row u-between">
              <a className="admin-brand" href="/">
                <BrandLogo className="admin-brand-logo" gradientId="adminSidebarLogoGrad" />
                <span>
                  <span className="brand-saad">Saad</span>
                  <span className="brand-concours">Concours</span>
                </span>
                <span className="admin-brand-tag">Admin</span>
              </a>
              <button type="button" className="admin-drawer-close" onClick={() => setNavOpen(false)} aria-label="Fermer le menu">
                ✕
              </button>
            </div>

            <SidebarNav onNavigate={() => setNavOpen(false)} />

            <button
              type="button"
              className="admin-rail-toggle"
              onClick={() => setRailExpanded((v) => !v)}
              title={railExpanded ? "Réduire le menu" : "Étendre le menu"}
            >
              <span>{railExpanded ? "«" : "»"}</span>
              <span>{railExpanded ? "Réduire" : "Étendre"}</span>
            </button>

            <div className="admin-sidebar-footer">
              <a className="admin-profile-card" href="/">
                <span className="admin-avatar">A</span>
                <span className="admin-profile-text">
                  <strong>Admin</strong>
                  <span>Voir le site ↗</span>
                </span>
              </a>
            </div>
          </aside>

          <main className="admin-main">
            <Topbar onOpenDrawer={() => setNavOpen(true)} />
            <div className="admin-content">{children}</div>
          </main>
        </div>
      </ConfirmProvider>
    </ToastProvider>
  );
}
