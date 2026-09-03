"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isUrgentNews } from "../../_lib/newsUtils";

export default function NotificationBell() {
  const router = useRouter();
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch("/api/news")
      .then((r) => r.json())
      .then((data) => setCount((data || []).filter(isUrgentNews).length))
      .catch(() => setCount(0));
  }, []);

  return (
    <button
      className="admin-icon-btn admin-bell"
      type="button"
      onClick={() => router.push("/admin/concours-ouverts")}
      title="Concours qui ferment dans les 7 jours"
    >
      🔔
      {Boolean(count) && <span className="admin-bell-dot">{count > 9 ? "9+" : count}</span>}
    </button>
  );
}
