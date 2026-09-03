"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

// Lazy: the five resource lists only load on first focus, then every
// keystroke just re-filters what's already in memory - no per-keystroke
// network calls, and no results until there's real data to match against.
const RESOURCE_ROUTES = {
  concours: "/admin/concours",
  cours: "/admin/cours",
  quiz: "/admin/evaluation",
  news: "/admin/concours-ouverts",
  blog: "/admin/blog",
};

export default function GlobalSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState({ concours: [], cours: [], quiz: [], news: [], blog: [] });
  const boxRef = useRef(null);

  async function ensureLoaded() {
    if (loaded) return;
    setLoaded(true);
    try {
      const [c, co, q, n, b] = await Promise.all([
        fetch("/api/concours").then((r) => r.json()),
        fetch("/api/cours").then((r) => r.json()),
        fetch("/api/quiz").then((r) => r.json()),
        fetch("/api/news").then((r) => r.json()),
        fetch("/api/blog").then((r) => r.json()),
      ]);
      setData({ concours: c || [], cours: co || [], quiz: q || [], news: n || [], blog: b || [] });
    } catch {
      setLoaded(false);
    }
  }

  useEffect(() => {
    function onDocClick(e) {
      if (boxRef.current && !boxRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const q = query.trim().toLowerCase();
  const results =
    q.length >= 2
      ? [
          ...data.concours
            .filter((i) => `${i.etablissement} ${i.ville} ${i.filiere}`.toLowerCase().includes(q))
            .slice(0, 4)
            .map((i) => ({ kind: "concours", icon: "📚", title: i.etablissement, sub: `${i.ville} · ${i.annee}`, id: i.id })),
          ...data.cours
            .filter((i) => `${i.title} ${i.module}`.toLowerCase().includes(q))
            .slice(0, 4)
            .map((i) => ({ kind: "cours", icon: "📖", title: i.title, sub: i.module, id: i.id })),
          ...data.quiz
            .filter((i) => `${i.title} ${i.module}`.toLowerCase().includes(q))
            .slice(0, 4)
            .map((i) => ({ kind: "quiz", icon: "📝", title: i.title, sub: i.module, id: i.id })),
          ...data.news
            .filter((i) => `${i.titre} ${i.etablissement} ${i.ville}`.toLowerCase().includes(q))
            .slice(0, 4)
            .map((i) => ({ kind: "news", icon: "🆕", title: i.titre, sub: [i.etablissement, i.ville].filter(Boolean).join(" · "), id: i.id })),
          ...data.blog
            .filter((i) => `${i.title}`.toLowerCase().includes(q))
            .slice(0, 4)
            .map((i) => ({ kind: "blog", icon: "📰", title: i.title, sub: i.available ? "Publié" : "Brouillon", id: i.id })),
        ].slice(0, 10)
      : [];

  function goTo(r) {
    router.push(`${RESOURCE_ROUTES[r.kind]}?edit=${encodeURIComponent(r.id)}`);
    setOpen(false);
    setQuery("");
  }

  return (
    <div className="admin-search" ref={boxRef}>
      <span className="admin-search-icon">🔍</span>
      <input
        value={query}
        onFocus={() => {
          ensureLoaded();
          setOpen(true);
        }}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        placeholder="Rechercher un concours, un cours, une news..."
      />
      {open && q.length >= 2 && (
        <div className="admin-search-dropdown">
          {results.length ? (
            results.map((r, i) => (
              <button key={i} type="button" className="admin-search-result" onClick={() => goTo(r)}>
                <span className="admin-search-result-icon">{r.icon}</span>
                <span className="admin-search-result-text">
                  <span className="admin-search-result-title">{r.title}</span>
                  <span className="admin-search-result-sub">{r.sub}</span>
                </span>
              </button>
            ))
          ) : (
            <div className="admin-search-empty">Aucun résultat pour « {query} ».</div>
          )}
        </div>
      )}
    </div>
  );
}
