"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import ThemeToggle from "@/app/_shared/ThemeToggle";
import GlobalSearch from "./GlobalSearch";
import NotificationBell from "./NotificationBell";
import AvatarMenu from "./AvatarMenu";
import { findActiveTrail } from "../../_lib/nav";

// Breadcrumbs live in the chrome in v4 (they used to be reprinted above every
// page title), so each page body can open straight on its own heading.
function CrumbsInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { section, item, child } = findActiveTrail(pathname, searchParams);

  return (
    <nav className="ad-crumbs" aria-label="Fil d'Ariane">
      <Link className="ad-crumb" href="/admin">
        Admin
      </Link>
      {/* Skip the group crumb when it repeats the item's own name — the
          "Réglages" group holds a single "Réglages" item. */}
      {section?.label && section.label !== item?.label && (
        <>
          <span className="ad-crumb-sep" aria-hidden="true">
            /
          </span>
          <span className="ad-crumb">{section.label}</span>
        </>
      )}
      {item && (
        <>
          <span className="ad-crumb-sep" aria-hidden="true">
            /
          </span>
          {child ? (
            <Link className="ad-crumb" href={item.href}>
              {item.label}
            </Link>
          ) : (
            <span className="ad-crumb current">{item.label}</span>
          )}
        </>
      )}
      {child && (
        <>
          <span className="ad-crumb-sep" aria-hidden="true">
            /
          </span>
          <span className="ad-crumb current">{child.label}</span>
        </>
      )}
    </nav>
  );
}

export default function Topbar({ onOpenDrawer }) {
  // Locale-dependent "today" — rendered after mount so the server and client
  // markup can't disagree.
  const [dateLabel, setDateLabel] = useState("");
  // The header is transparent over the canvas and only grows its hairline
  // once content has scrolled under it.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setDateLabel(new Date().toLocaleDateString("fr-FR", { weekday: "short", day: "numeric", month: "short" }));
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={"admin-topbar" + (scrolled ? " scrolled" : "")}>
      <button
        type="button"
        className="admin-hamburger"
        aria-label="Ouvrir le menu"
        aria-expanded={false}
        onClick={onOpenDrawer}
      >
        ☰
      </button>

      <Suspense fallback={<div className="ad-crumbs" />}>
        <CrumbsInner />
      </Suspense>

      <GlobalSearch />

      <div className="admin-topbar-right">
        {dateLabel && <span className="admin-topbar-date">{dateLabel}</span>}
        <NotificationBell />
        <ThemeToggle />
        <AvatarMenu />
      </div>
    </header>
  );
}
