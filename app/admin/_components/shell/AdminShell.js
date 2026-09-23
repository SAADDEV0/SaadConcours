"use client";

import { useEffect, useState } from "react";
import BrandLogo from "@/app/_shared/BrandLogo";
import RailNav from "./RailNav";
import ContextPanel from "./ContextPanel";
import Topbar from "./Topbar";
import { Scrim, useMobileDrawer } from "./MobileDrawer";
import SubscriberAlerts from "./SubscriberAlerts";
import { ToastProvider } from "../ui/ToastProvider";
import { ConfirmProvider } from "../ui/ConfirmProvider";
import { useLocalStorage } from "../../_lib/useLocalStorage";
import { useDashboardLayout } from "../../_lib/useDashboardLayout";
import Icon from "../ui/Icon";

// Admin v4 shell — icon rail + contextual panel + a transparent sticky
// header over the content column. On phones/tablets the rail and the panel
// slide in together as one drawer (.admin-drawer wraps both, so a single
// transform moves the whole navigation).
export default function AdminShell({ children }) {
  const [navOpen, setNavOpen] = useState(false);
  // Collapsing hides the context panel and gives its 226px back to the
  // content — the rail stays, so every destination is still one click away.
  // Persisted per browser, and only applied once read from storage so the
  // server and first client render agree.
  const [collapsed, setCollapsed, collapsedReady] = useLocalStorage("sc_admin_context_collapsed", false);
  // Density is a panel-wide setting chosen in the dashboard's "Personnaliser"
  // modal; applied here so it reaches every page, not just the dashboard.
  const { density } = useDashboardLayout();
  useMobileDrawer(navOpen, setNavOpen);
  const closeNav = () => setNavOpen(false);

  // Le navigateur de l'administrateur ne compte plus dans les statistiques
  // publiques (lu par queueTrackEvent dans app/_shared/chrome.js).
  useEffect(() => {
    try {
      localStorage.setItem("sc_no_track", "1");
    } catch {}
  }, []);

  // Ctrl/⌘+B — the shortcut every editor uses for this, so it needs no
  // discovery. Ignored while typing so it can't fight a text field.
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key !== "b" && e.key !== "B") return;
      if (!(e.ctrlKey || e.metaKey) || e.altKey) return;
      const el = document.activeElement;
      if (el && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName))) return;
      e.preventDefault();
      setCollapsed((v) => !v);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [setCollapsed]);

  return (
    <ToastProvider>
      <ConfirmProvider>
        <SubscriberAlerts />
        <div
          className={"admin-shell" + (collapsedReady && collapsed ? " context-collapsed" : "")}
          data-density={density}
        >
          {/* First focusable thing on the page: the rail is 10 links deep and
              tabbing past it on every navigation is the kind of friction only
              keyboard users pay. */}
          <a className="admin-skip-link" href="#admin-content">
            Aller au contenu
          </a>
          <Scrim open={navOpen} onClose={closeNav} />

          <div className={"admin-drawer" + (navOpen ? " open" : "")}>
            <nav className="ad-rail" aria-label="Navigation principale">
              <a className="ad-rail-logo" href="/" title="Voir le site">
                <BrandLogo gradientId="adminRailLogoGrad" from="#19c8a0" to="#49c7ff" />
              </a>
              <RailNav onNavigate={closeNav} />
              <div className="ad-rail-foot">
                <button
                  type="button"
                  className="ad-rail-item ad-rail-collapse"
                  onClick={() => setCollapsed((v) => !v)}
                  aria-label={collapsed ? "Afficher le panneau" : "Masquer le panneau"}
                  aria-pressed={collapsed}
                >
                  <Icon name={collapsed ? "chevronRight" : "chevronLeft"} size={16} />
                  <span className="ad-rail-tip">
                    {collapsed ? "Afficher le panneau" : "Masquer le panneau"}
                    <b className="ad-rail-tip-kbd">Ctrl B</b>
                  </span>
                </button>
                <button
                  type="button"
                  className="ad-rail-item admin-drawer-close"
                  onClick={closeNav}
                  aria-label="Fermer le menu"
                >
                  <Icon name="x" size={16} />
                </button>
              </div>
            </nav>

            <aside className="ad-context" aria-label="Navigation de section">
              <ContextPanel onNavigate={closeNav} />
            </aside>
          </div>

          <main className="admin-main">
            <Topbar onOpenDrawer={() => setNavOpen(true)} />
            <div className="admin-content" id="admin-content" tabIndex={-1}>
              {children}
            </div>
          </main>
        </div>
      </ConfirmProvider>
    </ToastProvider>
  );
}
