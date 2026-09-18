"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Icon from "../ui/Icon";

export default function AvatarMenu() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  async function logout(all) {
    setBusy(true);
    try {
      await fetch("/api/admin/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ all }),
      });
    } finally {
      setBusy(false);
      router.push("/admin/login");
      router.refresh();
    }
  }

  return (
    <div className="admin-avatar-menu" ref={ref}>
      <button
        type="button"
        className="admin-avatar-trigger"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label="Menu du compte"
      >
        <span className="admin-avatar">A</span>
        <span className="admin-avatar-chevron" aria-hidden="true">
          <Icon name="chevronDown" size={13} />
        </span>
      </button>
      {open && (
        <div className="admin-avatar-dropdown">
          <a className="admin-avatar-dropdown-item" href="/">
            <Icon name="externalLink" size={14} /> Voir le site
          </a>
          <button type="button" className="admin-avatar-dropdown-item" disabled={busy} onClick={() => logout(false)}>
            <Icon name="logOut" size={14} /> Déconnexion
          </button>
          {/* The session used to be a constant that never expired, so a copy
              taken elsewhere stayed valid forever. This is the button that
              makes that recoverable. */}
          <button type="button" className="admin-avatar-dropdown-item danger" disabled={busy} onClick={() => logout(true)}>
            <Icon name="shield" size={14} /> Déconnecter tous les appareils
          </button>
        </div>
      )}
    </div>
  );
}
