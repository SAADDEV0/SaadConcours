"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Icon from "../ui/Icon";
import { FLAT_NAV } from "../../_lib/nav";

/* --------------------------------------------------------------------------
 * Command palette. What this replaces was an inline input with a dropdown:
 * no keyboard shortcut, no arrow-key navigation (you could see results but
 * only reach them with the mouse), no indication of *why* a row matched, no
 * debounce, and it could only find content — never a page.
 *
 * ⌘K / Ctrl-K is the standard for this in every tool an admin already uses,
 * so it needs no discovery. The five content lists still load lazily on first
 * open and are filtered in memory afterwards — no request per keystroke.
 * ------------------------------------------------------------------------ */

const RESOURCE_ROUTES = {
  concours: "/admin/concours",
  cours: "/admin/cours",
  quiz: "/admin/evaluation",
  news: "/admin/concours-ouverts",
  blog: "/admin/blog",
};

const KIND_META = {
  nav: { icon: "arrowRight", group: "Aller à" },
  action: { icon: "sparkles", group: "Actions" },
  concours: { icon: "book", group: "Concours" },
  cours: { icon: "notebook", group: "Cours" },
  quiz: { icon: "clipboard", group: "Évaluations" },
  news: { icon: "megaphone", group: "Concours ouverts" },
  blog: { icon: "newspaper", group: "Blog" },
};

const ACTIONS = [
  { id: "act-import", label: "Importer des concours en masse", href: "/admin/concours/import", icon: "plus" },
  { id: "act-compose", label: "Composer un envoi d'alerte", href: "/admin/alertes/composer", icon: "mail" },
  { id: "act-pdf", label: "Ouvrir l'éditeur PDF", href: "/admin/pdf-editor", icon: "palette" },
  { id: "act-site", label: "Voir le site public", href: "/", icon: "externalLink" },
];

// Accent-insensitive, case-insensitive: "evaluation" has to find
// "Évaluation", and an admin typing fast doesn't reach for the accent key.
function normalize(s) {
  return String(s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

// Splits a label around the matched run so the palette can show *why* a row
// is in the list — without this, a fuzzy-looking result set reads as random.
function Highlight({ text, query }) {
  const hay = normalize(text);
  const needle = normalize(query);
  const at = needle ? hay.indexOf(needle) : -1;
  if (at === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, at)}
      <mark>{text.slice(at, at + needle.length)}</mark>
      {text.slice(at + needle.length)}
    </>
  );
}

export default function GlobalSearch() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [deferred, setDeferred] = useState("");
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ concours: [], cours: [], quiz: [], news: [], blog: [] });
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const ensureLoaded = useCallback(async () => {
    if (loaded || loading) return;
    setLoading(true);
    try {
      const [c, co, q, n, b] = await Promise.all([
        fetch("/api/concours").then((r) => r.json()),
        fetch("/api/cours").then((r) => r.json()),
        fetch("/api/quiz").then((r) => r.json()),
        fetch("/api/news").then((r) => r.json()),
        fetch("/api/blog").then((r) => r.json()),
      ]);
      setData({ concours: c || [], cours: co || [], quiz: q || [], news: n || [], blog: b || [] });
      setLoaded(true);
    } catch {
      // Leave `loaded` false so the next open retries instead of showing an
      // empty palette forever.
    } finally {
      setLoading(false);
    }
  }, [loaded, loading]);

  // ⌘K / Ctrl-K anywhere, plus "/" as the single-key shortcut when not
  // already typing — both ignored inside a field so they can't hijack input.
  useEffect(() => {
    function onKeyDown(e) {
      const el = document.activeElement;
      const typing = el && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName));
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "/" && !typing && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        setOpen(true);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) return;
    ensureLoaded();
    setActive(0);
    const t = setTimeout(() => inputRef.current?.focus(), 10);
    return () => clearTimeout(t);
  }, [open, ensureLoaded]);

  // Filtering is in-memory and cheap, but re-rendering 10 rows on every
  // keystroke while someone types a 20-character établissement name isn't.
  useEffect(() => {
    const t = setTimeout(() => setDeferred(query), 90);
    return () => clearTimeout(t);
  }, [query]);

  const results = useMemo(() => {
    const q = normalize(deferred.trim());
    const match = (...fields) => !q || normalize(fields.filter(Boolean).join(" ")).includes(q);

    // With no query the palette is a launcher, not a search box: show where
    // you can go rather than an empty panel telling you to type.
    const nav = FLAT_NAV.filter((n) => match(n.label, n.group)).map((n) => ({
      key: `nav:${n.key}`,
      kind: "nav",
      title: n.label,
      sub: n.group || "Navigation",
      href: n.href,
    }));
    const actions = ACTIONS.filter((a) => match(a.label)).map((a) => ({
      key: a.id,
      kind: "action",
      icon: a.icon,
      title: a.label,
      href: a.href,
    }));

    if (!q) return [...nav.slice(0, 6), ...actions];

    const take = (arr, n) => arr.slice(0, n);
    const content = [
      ...take(
        data.concours
          .filter((i) => match(i.etablissement, i.ville, i.filiere, i.annee, i.id))
          .map((i) => ({
            key: `concours:${i.id}`,
            kind: "concours",
            title: i.etablissement,
            sub: [i.ville, i.annee].filter(Boolean).join(" · "),
            href: `${RESOURCE_ROUTES.concours}?edit=${encodeURIComponent(i.id)}`,
          })),
        5
      ),
      ...take(
        data.cours
          .filter((i) => match(i.title, i.module))
          .map((i) => ({
            key: `cours:${i.id}`,
            kind: "cours",
            title: i.title,
            sub: i.module,
            href: `${RESOURCE_ROUTES.cours}?edit=${encodeURIComponent(i.id)}`,
          })),
        4
      ),
      ...take(
        data.quiz
          .filter((i) => match(i.title, i.module))
          .map((i) => ({
            key: `quiz:${i.id}`,
            kind: "quiz",
            title: i.title,
            sub: i.module,
            href: `${RESOURCE_ROUTES.quiz}?edit=${encodeURIComponent(i.id)}`,
          })),
        4
      ),
      ...take(
        data.news
          .filter((i) => match(i.titre, i.etablissement, i.ville))
          .map((i) => ({
            key: `news:${i.id}`,
            kind: "news",
            title: i.titre,
            sub: [i.etablissement, i.ville].filter(Boolean).join(" · "),
            href: `${RESOURCE_ROUTES.news}?edit=${encodeURIComponent(i.id)}`,
          })),
        4
      ),
      ...take(
        data.blog
          .filter((i) => match(i.title))
          .map((i) => ({
            key: `blog:${i.id}`,
            kind: "blog",
            title: i.title,
            sub: i.available ? "Publié" : "Brouillon",
            href: `${RESOURCE_ROUTES.blog}?edit=${encodeURIComponent(i.id)}`,
          })),
        3
      ),
    ];

    return [...nav.slice(0, 4), ...actions.slice(0, 2), ...content];
  }, [deferred, data]);

  useEffect(() => {
    setActive((a) => Math.min(a, Math.max(0, results.length - 1)));
  }, [results.length]);

  // Keep the highlighted row in view when arrowing through a long list.
  useEffect(() => {
    const el = listRef.current?.querySelector('[data-active="true"]');
    el?.scrollIntoView({ block: "nearest" });
  }, [active]);

  function go(item) {
    if (!item) return;
    setOpen(false);
    setQuery("");
    setDeferred("");
    router.push(item.href);
  }

  function onInputKeyDown(e) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => (results.length ? (a + 1) % results.length : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => (results.length ? (a - 1 + results.length) % results.length : 0));
    } else if (e.key === "Home") {
      e.preventDefault();
      setActive(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setActive(Math.max(0, results.length - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      go(results[active]);
    } else if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
    }
  }

  // Group headers are drawn between rows of different kinds, so the flat
  // (keyboard-navigable) list still reads as sections.
  let lastKind = null;

  return (
    <>
      <button type="button" className="admin-search-trigger" onClick={() => setOpen(true)}>
        <Icon name="search" size={15} />
        <span className="admin-search-trigger-label">Rechercher…</span>
        <kbd className="admin-search-kbd">⌘K</kbd>
      </button>

      {open && (
        <div className="cmdk-overlay" role="presentation" onMouseDown={() => setOpen(false)}>
          <div
            className="cmdk"
            role="dialog"
            aria-modal="true"
            aria-label="Recherche et navigation"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="cmdk-input-row">
              <Icon name="search" size={17} />
              <input
                ref={inputRef}
                className="cmdk-input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onInputKeyDown}
                placeholder="Rechercher un concours, un cours, une page…"
                role="combobox"
                aria-expanded="true"
                aria-controls="cmdk-list"
                aria-activedescendant={results[active] ? `cmdk-opt-${active}` : undefined}
                autoComplete="off"
                spellCheck="false"
              />
              {loading && <span className="cmdk-loading">chargement…</span>}
              <button type="button" className="cmdk-close" onClick={() => setOpen(false)} aria-label="Fermer">
                <Icon name="x" size={15} />
              </button>
            </div>

            <div className="cmdk-list" id="cmdk-list" role="listbox" ref={listRef}>
              {results.length ? (
                results.map((r, i) => {
                  const meta = KIND_META[r.kind];
                  const header = meta.group !== lastKind ? meta.group : null;
                  lastKind = meta.group;
                  return (
                    <div key={r.key}>
                      {header && <div className="cmdk-group">{header}</div>}
                      <button
                        type="button"
                        id={`cmdk-opt-${i}`}
                        role="option"
                        aria-selected={i === active}
                        data-active={i === active}
                        className={"cmdk-row" + (i === active ? " active" : "")}
                        onMouseEnter={() => setActive(i)}
                        onClick={() => go(r)}
                      >
                        <span className="cmdk-row-icon">
                          <Icon name={r.icon || meta.icon} size={15} />
                        </span>
                        <span className="cmdk-row-text">
                          <span className="cmdk-row-title">
                            <Highlight text={r.title} query={deferred} />
                          </span>
                          {r.sub && <span className="cmdk-row-sub">{r.sub}</span>}
                        </span>
                        <Icon name="arrowRight" size={13} className="cmdk-row-go" />
                      </button>
                    </div>
                  );
                })
              ) : (
                <div className="cmdk-empty">
                  {loading ? "Chargement du contenu…" : `Aucun résultat pour « ${query} ».`}
                </div>
              )}
            </div>

            <div className="cmdk-foot">
              <span>
                <kbd>↑</kbd>
                <kbd>↓</kbd> naviguer
              </span>
              <span>
                <kbd>↵</kbd> ouvrir
              </span>
              <span>
                <kbd>esc</kbd> fermer
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
