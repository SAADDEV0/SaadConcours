"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { isUrgentNews } from "../../_lib/newsUtils";

function daysLeft(item) {
  return Math.round(
    (new Date(item.date_limite + "T00:00:00") - new Date(new Date().toDateString())) / 86400000
  );
}

function dueLabel(days) {
  if (days <= 0) return "Ferme aujourd'hui";
  if (days === 1) return "Ferme demain";
  return `Ferme dans ${days} j`;
}

export default function NotificationBell() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    fetch("/api/news")
      .then((r) => r.json())
      .then((data) => {
        const urgent = (data || [])
          .filter(isUrgentNews)
          .sort((a, b) => daysLeft(a) - daysLeft(b));
        setItems(urgent);
      })
      .catch(() => setItems([]));
  }, []);

  useEffect(() => {
    if (!open) return;
    function onDocClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  function goToItem(item) {
    router.push(`/admin/concours-ouverts?edit=${encodeURIComponent(item.id)}`);
    setOpen(false);
  }

  const count = items.length;

  return (
    <div className="admin-bell-menu" ref={ref}>
      <button
        className="admin-icon-btn admin-bell"
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        title="Concours qui ferment dans les 7 jours"
      >
        🔔
        {Boolean(count) && <span className="admin-bell-dot">{count > 9 ? "9+" : count}</span>}
      </button>
      {open && (
        <div className="admin-bell-dropdown">
          <div className="admin-bell-dropdown-title">Échéances proches</div>
          {items.length ? (
            <>
              {items.slice(0, 6).map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="admin-bell-item"
                  onClick={() => goToItem(item)}
                >
                  <span className="admin-bell-item-text">
                    <span className="admin-bell-item-title">{item.titre}</span>
                    <span className="admin-bell-item-sub">
                      {[item.etablissement, item.ville].filter(Boolean).join(" · ")}
                    </span>
                  </span>
                  <span className="admin-bell-item-due">{dueLabel(daysLeft(item))}</span>
                </button>
              ))}
              <button
                type="button"
                className="admin-bell-dropdown-footer"
                onClick={() => {
                  router.push("/admin/concours-ouverts");
                  setOpen(false);
                }}
              >
                Voir tout →
              </button>
            </>
          ) : (
            <div className="admin-bell-empty">Aucune échéance dans les 7 prochains jours.</div>
          )}
        </div>
      )}
    </div>
  );
}
