"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Icon from "../_ui/Icon";
import { Empty, ErrorState, Hero, Menu, ScoreRing, Skeleton } from "../_ui/kit";
import { useConfirm, useToast } from "../_ui/feedback";
import { useCollection, useCorrigeFiles, deleteItems, setPublished } from "../_lib/content";
import { scoreOf } from "../_lib/collections";
import { matchQuery, normalize, num, plural } from "../_lib/format";
import { useDebounced, useLocalStorage } from "../_lib/hooks";
import { downloadText } from "../_lib/api";

const PAGE = 60;

function toCsv(rows) {
  const cell = (v) => {
    const s = Array.isArray(v) ? v.join(" | ") : typeof v === "object" && v !== null ? JSON.stringify(v) : String(v ?? "");
    return /[",\n;]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const keys = [...new Set(rows.flatMap((r) => Object.keys(r)))].filter((k) => !/_md$|^content$|^questions$/.test(k));
  return "﻿" + [keys.join(","), ...rows.map((r) => keys.map((k) => cell(r[k])).join(","))].join("\n") + "\n";
}

export default function ContentList({ collectionKey, hero, extraActions, onOpen, heroStats, extraCtx }) {
  const { col, list, loading, error, reload } = useCollection(collectionKey);
  const corrigeFiles = useCorrigeFiles();
  const sp = useSearchParams();
  const toast = useToast();
  const confirm = useConfirm();

  const [q, setQ] = useState(sp.get("q") || "");
  const [deep, setDeep] = useState(false);
  const [filters, setFilters] = useState(() => Object.fromEntries(col.filters.map((f) => [f.key, sp.get(f.key) || ""])));
  const [sort, setSort] = useLocalStorage(`ax-sort-${col.key}`, col.sortOptions[0].value);
  const [limit, setLimit] = useState(PAGE);
  const [selected, setSelected] = useState(() => new Set());
  const [busy, setBusy] = useState(false);
  const query = useDebounced(q, 180);

  const ctx = useMemo(() => ({ ...extraCtx, corrigeFiles: corrigeFiles || new Set() }), [corrigeFiles, extraCtx]);

  const rows = useMemo(() => {
    if (!list) return [];
    return list.map((item) => {
      const quality = col.quality(item, ctx);
      return { item, quality, score: scoreOf(quality), published: col.isPublished(item) };
    });
  }, [list, col, ctx]);

  const dynamicOptions = useMemo(() => {
    const out = {};
    for (const f of col.filters) {
      if (!f.dynamic) continue;
      const counts = new Map();
      for (const { item } of rows) {
        const raw = f.get(item, ctx);
        const v = raw === null || raw === undefined ? "" : String(raw).trim();
        if (v) counts.set(v, (counts.get(v) || 0) + 1);
      }
      out[f.key] = [...counts.entries()]
        .sort((a, b) => (f.key === "annee" ? String(b[0]).localeCompare(String(a[0])) : String(a[0]).localeCompare(String(b[0]), "fr")))
        .map(([value, n]) => ({ value, label: `${value} (${n})` }));
    }
    return out;
  }, [rows, col, ctx]);

  const filtered = useMemo(() => {
    const out = rows.filter(({ item }) => {
      for (const f of col.filters) {
        const want = filters[f.key];
        if (want !== "" && want !== undefined && String(f.get(item, ctx) ?? "").trim() !== want) return false;
      }
      if (!query.trim()) return true;
      const text = col.searchText(item) + (deep && col.deepSearchText ? " " + col.deepSearchText(item) : "");
      return matchQuery(text, query);
    });
    const opt = col.sortOptions.find((o) => o.value === sort) || col.sortOptions[0];
    if (opt.value === "score") out.sort((a, b) => a.score - b.score);
    else if (opt.fn) out.sort((a, b) => opt.fn(a.item, b.item));
    return out;
  }, [rows, filters, query, deep, sort, col, ctx]);

  useEffect(() => setLimit(PAGE), [query, filters, sort]);

  const visible = filtered.slice(0, limit);
  const activeFilters = Object.values(filters).filter(Boolean).length + (query ? 1 : 0);
  const allVisibleSelected = visible.length > 0 && visible.every((r) => selected.has(r.item.id));
  const stats = useMemo(() => {
    const total = rows.length;
    const pub = rows.filter((r) => r.published).length;
    const avg = total ? Math.round(rows.reduce((s, r) => s + r.score, 0) / total) : 0;
    return { total, pub, drafts: total - pub, avg };
  }, [rows]);

  function toggleAll() {
    setSelected((s) => {
      const n = new Set(s);
      if (allVisibleSelected) visible.forEach((r) => n.delete(r.item.id));
      else visible.forEach((r) => n.add(r.item.id));
      return n;
    });
  }

  async function run(label, fn) {
    setBusy(true);
    try {
      const res = await fn();
      toast.success(label, "Enregistré sur GitHub · visible sur le site dans ~4 min.");
      setSelected(new Set());
      return res;
    } catch (err) {
      toast.error("Échec de l'opération", err.message);
    } finally {
      setBusy(false);
    }
  }

  async function bulkDelete(ids) {
    const ok = await confirm({
      title: ids.length > 1 ? `Supprimer ${plural(ids.length, col.singular)} ?` : `Supprimer ${col.article} ?`,
      body: "Les éléments partent dans la corbeille (Activité › Corbeille) et peuvent être restaurés.",
      confirmLabel: "Supprimer",
      tone: "danger",
      typeToConfirm: ids.length >= 5 ? "SUPPRIMER" : undefined,
    });
    if (!ok) return;
    await run(`${plural(ids.length, col.singular)} supprimé${ids.length > 1 ? "s" : ""}`, () => deleteItems(col.key, ids));
  }

  const editHref = (item) => (onOpen ? null : `${col.href}/editer?id=${encodeURIComponent(item.id)}`);

  return (
    <>
      <Hero
        icon={hero.icon}
        eyebrow={hero.eyebrow}
        title={hero.title}
        actions={
          <>
            {extraActions}
            {onOpen ? (
              <button type="button" className="ax-btn primary" onClick={() => onOpen(null)}>
                <Icon name="plus" /> {hero.newLabel}
              </button>
            ) : (
              <Link className="ax-btn primary" href={`${col.href}/editer?nouveau=1`}>
                <Icon name="plus" /> {hero.newLabel}
              </Link>
            )}
          </>
        }
        stats={
          list
            ? [
                { value: num(stats.total), label: "au total" },
                { value: num(stats.pub), label: col.key === "news" ? "ouverts" : "publiés" },
                ...(stats.drafts ? [{ value: num(stats.drafts), label: col.key === "news" ? "clôturés" : "brouillons" }] : []),
                { value: `${stats.avg} %`, label: "de complétude moyenne" },
                ...(heroStats ? heroStats(list, ctx) : []),
              ]
            : []
        }
      >
        {hero.text}
      </Hero>

      {error && <ErrorState error={error} onRetry={reload} />}

      <div className="ax-toolbar">
        <div className="ax-search">
          <Icon name="search" size="sm" />
          <input className="ax-input" value={q} onChange={(e) => setQ(e.target.value)} placeholder={`Rechercher dans ${list ? num(list.length) : "…"} ${col.label.toLowerCase()}…`} aria-label="Rechercher" />
        </div>
        {col.filters.map((f) => {
          const options = f.dynamic ? dynamicOptions[f.key] || [] : f.options;
          return (
            <select key={f.key} className="ax-select" value={filters[f.key]} onChange={(e) => setFilters((s) => ({ ...s, [f.key]: e.target.value }))} aria-label={f.label}>
              <option value="">{f.label} : tous</option>
              {options.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          );
        })}
        <select className="ax-select" value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Trier">
          {col.sortOptions.map((o) => (
            <option key={o.value} value={o.value}>
              Tri : {o.label}
            </option>
          ))}
        </select>
        {col.deepSearchText && (
          <label className="ax-check" title="Cherche aussi dans l'énoncé, le corrigé ou le contenu complet">
            <input type="checkbox" checked={deep} onChange={(e) => setDeep(e.target.checked)} /> Plein texte
          </label>
        )}
        {activeFilters > 0 && (
          <button
            type="button"
            className="ax-btn ghost sm"
            onClick={() => {
              setQ("");
              setFilters(Object.fromEntries(col.filters.map((f) => [f.key, ""])));
            }}
          >
            <Icon name="x" size="sm" /> Réinitialiser
          </button>
        )}
        <span className="ax-count ax-right">{list ? `${num(filtered.length)} résultat${filtered.length > 1 ? "s" : ""}` : ""}</span>
        <Menu
          items={[
            { icon: "download", label: "Exporter la sélection filtrée (JSON)", onClick: () => downloadText(`${col.key}-${filtered.length}.json`, JSON.stringify(filtered.map((r) => r.item), null, 2)) },
            { icon: "download", label: "Exporter la sélection filtrée (CSV)", onClick: () => downloadText(`${col.key}-${filtered.length}.csv`, toCsv(filtered.map((r) => r.item)), "text/csv") },
            "-",
            { icon: "refresh", label: "Recharger depuis GitHub", onClick: reload },
          ]}
        />
      </div>

      {selected.size > 0 && (
        <div className="ax-bulkbar">
          {plural(selected.size, "sélectionné")}
          <button type="button" className="ax-btn sm" disabled={busy} onClick={() => run("Publication effectuée", () => setPublished(col.key, [...selected], true))}>
            <Icon name="eye" size="sm" /> {col.key === "news" ? "Rouvrir" : "Publier"}
          </button>
          <button type="button" className="ax-btn sm" disabled={busy} onClick={() => run("Passé en brouillon", () => setPublished(col.key, [...selected], false))}>
            <Icon name="eyeOff" size="sm" /> {col.key === "news" ? "Clôturer" : "Dépublier"}
          </button>
          <button type="button" className="ax-btn sm" onClick={() => downloadText(`${col.key}-selection.json`, JSON.stringify(list.filter((x) => selected.has(x.id)), null, 2))}>
            <Icon name="download" size="sm" /> Exporter
          </button>
          <button type="button" className="ax-btn sm danger" disabled={busy} onClick={() => bulkDelete([...selected])}>
            <Icon name="trash" size="sm" /> Supprimer
          </button>
          <span className="ax-right ax-muted" style={{ fontWeight: 600, fontSize: "0.78rem" }}>
            {busy ? "Enregistrement…" : "Un seul commit pour toute la sélection"}
          </span>
          <button type="button" className="ax-btn ghost sm" onClick={() => setSelected(new Set())}>
            Désélectionner
          </button>
        </div>
      )}

      {loading && !list ? (
        <Skeleton rows={8} height={52} />
      ) : list && !filtered.length ? (
        <Empty icon={activeFilters ? "🔎" : col.emoji} title={activeFilters ? "Aucun résultat" : `Aucun ${col.singular} pour l'instant`}>
          {activeFilters ? "Essaie d'élargir la recherche ou de retirer un filtre." : null}
        </Empty>
      ) : (
        list && (
          <div className="ax-table-wrap">
            <table className="ax-table">
              <thead>
                <tr>
                  <th className="w-check">
                    <input type="checkbox" checked={allVisibleSelected} onChange={toggleAll} aria-label="Tout sélectionner" />
                  </th>
                  <th>Titre</th>
                  {col.columns.map((c) => (
                    <th key={c.key} className="ax-hide-sm" style={c.width ? { width: c.width } : undefined}>
                      {c.label}
                    </th>
                  ))}
                  <th>Statut</th>
                  <th className="ax-hide-sm">Qualité</th>
                  <th className="w-actions">
                    <span className="ax-sr">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {visible.map(({ item, score, published, quality }) => {
                  const href = editHref(item);
                  const missing = quality.filter((c) => !c.ok).map((c) => c.label);
                  return (
                    <tr key={item.id} className={selected.has(item.id) ? "selected" : undefined}>
                      <td className="w-check">
                        <input
                          type="checkbox"
                          checked={selected.has(item.id)}
                          onChange={() =>
                            setSelected((s) => {
                              const n = new Set(s);
                              if (n.has(item.id)) n.delete(item.id);
                              else n.add(item.id);
                              return n;
                            })
                          }
                          aria-label={`Sélectionner ${col.title(item)}`}
                        />
                      </td>
                      <td style={{ maxWidth: 520 }}>
                        {href ? (
                          <Link className="ax-cell-title" href={href}>
                            {col.title(item)}
                          </Link>
                        ) : (
                          <button type="button" className="ax-cell-title" style={{ border: "none", background: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer", textAlign: "left" }} onClick={() => onOpen(item)}>
                            {col.title(item)}
                          </button>
                        )}
                        <span className="ax-cell-sub">{col.subtitle(item) || item.id}</span>
                      </td>
                      {col.columns.map((c) => (
                        <td key={c.key} className="ax-hide-sm" title={c.title ? c.title(item) : undefined}>
                          {c.render(item, ctx)}
                        </td>
                      ))}
                      <td>
                        {published ? (
                          <span className="ax-pill green">
                            <span className="ax-dot" /> {col.key === "news" ? "Ouvert" : "Publié"}
                          </span>
                        ) : (
                          <span className="ax-pill">{col.key === "news" ? "Clôturé" : "Brouillon"}</span>
                        )}
                      </td>
                      <td className="ax-hide-sm" title={missing.length ? `À compléter : ${missing.join(", ")}` : "Complet"}>
                        <ScoreRing score={score} />
                      </td>
                      <td className="w-actions">
                        <span className="ax-row-actions">
                          {href ? (
                            <Link className="ax-btn ghost icon sm" href={href} aria-label="Modifier" title="Modifier">
                              <Icon name="edit" size="sm" />
                            </Link>
                          ) : (
                            <button type="button" className="ax-btn ghost icon sm" onClick={() => onOpen(item)} aria-label="Modifier" title="Modifier">
                              <Icon name="edit" size="sm" />
                            </button>
                          )}
                          <Menu
                            items={[
                              published && col.key !== "news" && { icon: "external", label: "Voir sur le site", href: col.publicUrl(item), external: true },
                              col.key !== "news" && { icon: "copy", label: "Dupliquer", href: `${col.href}/editer?nouveau=1&depuis=${encodeURIComponent(item.id)}` },
                              { icon: "share", label: "Préparer un post", href: `/admin/social?type=${col.key}&id=${encodeURIComponent(item.id)}` },
                              {
                                icon: published ? "eyeOff" : "eye",
                                label: published ? (col.key === "news" ? "Clôturer" : "Passer en brouillon") : col.key === "news" ? "Rouvrir" : "Publier",
                                onClick: () => run(published ? "Dépublié" : "Publié", () => setPublished(col.key, [item.id], !published)),
                              },
                              "-",
                              { icon: "trash", label: "Supprimer", danger: true, onClick: () => bulkDelete([item.id]) },
                            ]}
                          />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {filtered.length > limit && (
              <div className="ax-more">
                <button type="button" className="ax-btn" onClick={() => setLimit((l) => l + PAGE)}>
                  Afficher {Math.min(PAGE, filtered.length - limit)} de plus ({num(filtered.length - limit)} restants)
                </button>
              </div>
            )}
          </div>
        )
      )}
      {list && query && !deep && col.deepSearchText && (
        <p className="ax-hint ax-mt">
          Astuce : coche « Plein texte » pour chercher aussi dans {collectionKey === "concours" ? "les énoncés et corrigés" : "le contenu complet"} (« {normalize(query)} »).
        </p>
      )}
    </>
  );
}
