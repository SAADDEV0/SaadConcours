"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import BrandLogo from "@/app/_shared/BrandLogo";
import Icon from "./Icon";
import { FeedbackProvider } from "./feedback";
import CommandPalette from "./CommandPalette";
import DeployStatus from "./DeployStatus";
import { NAV, SUBPAGES, activeItem } from "../_lib/nav";
import { confirmLeave, useHotkey, useOnClickOutside } from "../_lib/hooks";
import { getCached, loadJson, subscribeRepo } from "../_lib/repo";
import { daysUntil } from "../_lib/format";

function useTheme() {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    setTheme(document.documentElement.getAttribute("data-theme") || "dark");
  }, []);
  function toggle() {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // stockage indisponible : le choix vaut pour cette page seulement
    }
    setTheme(next);
  }
  return { theme, toggle };
}

// Pastilles du menu : brouillons de concours, annonces qui ferment bientôt.
function useBadges() {
  const [badges, setBadges] = useState({});
  useEffect(() => {
    function compute() {
      const concours = getCached("data/concours.json")?.data;
      const news = getCached("data/news.json")?.data;
      setBadges({
        concours: Array.isArray(concours) ? { n: concours.filter((c) => c.statut === "brouillon").length, tone: "", title: "brouillons" } : null,
        news: Array.isArray(news)
          ? {
              n: news.filter((n) => {
                const d = daysUntil(n.date_limite);
                return !n.cloture && d !== null && d >= 0 && d <= 3;
              }).length,
              tone: "warn",
              title: "ferment sous 3 jours",
            }
          : null,
      });
    }
    compute();
    loadJson("data/news.json").catch(() => {});
    return subscribeRepo(compute);
  }, []);
  return badges;
}

function Sidebar({ open, onNavigate, onSearch }) {
  const pathname = usePathname();
  const current = activeItem(pathname);
  const badges = useBadges();
  const router = useRouter();

  async function logout() {
    if (!confirmLeave()) return;
    await fetch("/api/admin/logout", { method: "POST" }).catch(() => {});
    router.replace("/admin/login");
  }

  return (
    <nav className={`ax-side${open ? " open" : ""}`} aria-label="Navigation de la console">
      <Link href="/admin" className="ax-brand" onClick={(e) => (confirmLeave() ? onNavigate() : e.preventDefault())}>
        <BrandLogo gradientId="axBrandGrad" />
        <span>
          <span className="ax-brand-name">
            Saad<b>Concours</b>
          </span>
          <span className="ax-brand-sub">Console d&apos;administration</span>
        </span>
      </Link>
      <button type="button" className="ax-search-btn" onClick={onSearch}>
        <Icon name="search" size="sm" />
        <span>Rechercher…</span>
        <span className="ax-kbd">Ctrl K</span>
      </button>
      {NAV.map((section, i) => (
        <div className="ax-nav-group" key={section.label || i}>
          {section.label && <div className="ax-nav-label">{section.label}</div>}
          {section.items.map((item) => {
            const badge = item.badge ? badges[item.badge] : null;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`ax-nav-item${current?.href === item.href ? " active" : ""}`}
                aria-current={current?.href === item.href ? "page" : undefined}
                onClick={(e) => (confirmLeave() ? onNavigate() : e.preventDefault())}
              >
                <Icon name={item.icon} />
                {item.label}
                {badge?.n > 0 && (
                  <span className={`ax-nav-count ${badge.tone}`} title={`${badge.n} ${badge.title}`}>
                    {badge.n}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      ))}
      <div className="ax-side-foot">
        <a className="ax-nav-item" href="https://www.saadconcours.space" target="_blank" rel="noopener noreferrer">
          <Icon name="external" />
          Voir le site
        </a>
        <button type="button" className="ax-nav-item" style={{ border: "none", background: "none", font: "inherit", cursor: "pointer", width: "100%" }} onClick={logout}>
          <Icon name="logout" />
          Se déconnecter
        </button>
      </div>
    </nav>
  );
}

function AccountMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const router = useRouter();
  useOnClickOutside(ref, () => setOpen(false), open);
  async function logout(all) {
    if (!confirmLeave()) return;
    await fetch("/api/admin/logout", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ all }) }).catch(() => {});
    router.replace("/admin/login");
  }
  return (
    <div className="ax-menu" ref={ref}>
      <button type="button" className="ax-btn icon sm" onClick={() => setOpen((o) => !o)} aria-label="Compte" aria-expanded={open}>
        <Icon name="shield" />
      </button>
      {open && (
        <div className="ax-menu-pop">
          <div className="ax-menu-head">Session administrateur</div>
          <Link className="ax-menu-item" href="/admin/reglages?onglet=systeme" onClick={() => setOpen(false)}>
            <Icon name="settings" size="sm" /> Système & sécurité
          </Link>
          <div className="ax-menu-sep" />
          <button type="button" className="ax-menu-item" onClick={() => logout(false)}>
            <Icon name="logout" size="sm" /> Se déconnecter
          </button>
          <button type="button" className="ax-menu-item danger" onClick={() => logout(true)}>
            <Icon name="shield" size="sm" /> Déconnecter tous les appareils
          </button>
        </div>
      )}
    </div>
  );
}

function Crumbs() {
  const pathname = usePathname();
  const item = activeItem(pathname);
  const sub = SUBPAGES[pathname];
  if (!item) return <div className="ax-crumbs" />;
  return (
    <div className="ax-crumbs">
      {sub ? (
        <>
          <Link href={item.href} onClick={(e) => !confirmLeave() && e.preventDefault()}>
            {item.label}
          </Link>
          <Icon name="chevronRight" size="sm" />
          <strong>{sub}</strong>
        </>
      ) : (
        <strong>{item.label}</strong>
      )}
    </div>
  );
}

export default function Shell({ children }) {
  const [navOpen, setNavOpen] = useState(false);
  const [palette, setPalette] = useState(false);
  const { theme, toggle } = useTheme();
  const pathname = usePathname();

  useHotkey("mod+k", () => setPalette((p) => !p), { allowInInputs: true });
  useHotkey("/", () => setPalette(true));

  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  return (
    <FeedbackProvider>
      <div className="ax">
        <a className="ax-skip" href="#ax-content">
          Aller au contenu
        </a>
        <div className="ax-shell">
          <div className={`ax-scrim${navOpen ? " open" : ""}`} onClick={() => setNavOpen(false)} />
          <Sidebar open={navOpen} onNavigate={() => setNavOpen(false)} onSearch={() => setPalette(true)} />
          <div className="ax-main">
            <header className="ax-top">
              <button type="button" className="ax-btn icon sm ax-menu-btn" onClick={() => setNavOpen(true)} aria-label="Ouvrir le menu">
                <Icon name="menu" />
              </button>
              <Crumbs />
              <div className="ax-top-actions">
                <DeployStatus />
                <button type="button" className="ax-btn icon sm" onClick={() => setPalette(true)} aria-label="Rechercher (Ctrl K)" title="Rechercher (Ctrl K)">
                  <Icon name="search" />
                </button>
                <button type="button" className="ax-btn icon sm" onClick={toggle} aria-label="Changer de thème" title="Thème clair / sombre">
                  <Icon name={theme === "light" ? "moon" : "sun"} />
                </button>
                <AccountMenu />
              </div>
            </header>
            <main className="ax-content" id="ax-content" tabIndex={-1}>
              <Suspense fallback={<PageSkeleton />}>{children}</Suspense>
            </main>
          </div>
        </div>
        <CommandPalette open={palette} onClose={() => setPalette(false)} />
      </div>
    </FeedbackProvider>
  );
}

export function PageSkeleton() {
  return (
    <div className="ax-stack" aria-busy="true" aria-label="Chargement">
      <div className="ax-skel" style={{ height: 120, borderRadius: 18 }} />
      <div className="ax-grid c4">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="ax-skel" style={{ height: 96, borderRadius: 18 }} />
        ))}
      </div>
      <div className="ax-skel" style={{ height: 320, borderRadius: 18 }} />
    </div>
  );
}
