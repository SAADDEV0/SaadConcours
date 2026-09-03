"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "@/app/_shared/ThemeToggle";
import GlobalSearch from "./GlobalSearch";
import NotificationBell from "./NotificationBell";
import AvatarMenu from "./AvatarMenu";

export default function Topbar({ onOpenDrawer }) {
  // Computed client-side only (locale-dependent "today") — avoid a
  // server/client mismatch by rendering it after mount instead of during
  // the initial render.
  const [dateLabel, setDateLabel] = useState("");
  useEffect(() => {
    setDateLabel(new Date().toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" }));
  }, []);

  return (
    <div className="admin-topbar">
      <button
        type="button"
        className="admin-hamburger"
        aria-label="Ouvrir le menu"
        aria-expanded={false}
        onClick={onOpenDrawer}
      >
        ☰
      </button>
      <GlobalSearch />
      <div className="admin-topbar-right">
        {dateLabel && <span className="admin-topbar-date">{dateLabel}</span>}
        <NotificationBell />
        <ThemeToggle />
        <AvatarMenu />
      </div>
    </div>
  );
}
