"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function AvatarMenu() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  async function onLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div className="admin-avatar-menu" ref={ref}>
      <button type="button" className="admin-avatar-trigger" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span className="admin-avatar">A</span>
        <span className="admin-avatar-chevron">▾</span>
      </button>
      {open && (
        <div className="admin-avatar-dropdown">
          <a className="admin-avatar-dropdown-item" href="/">
            ↗ Voir le site
          </a>
          <button type="button" className="admin-avatar-dropdown-item danger" onClick={onLogout}>
            ⏻ Déconnexion
          </button>
        </div>
      )}
    </div>
  );
}
