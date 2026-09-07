"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Modal from "../ui/Modal";
import { CONTENT_TYPES, queryTerms, matchesTerms } from "./lib/contentTypes";
import { publishedOn } from "./lib/history";
import { PLATFORMS, PlatformIcon, platformFor } from "./lib/platforms";

/* --------------------------- Sélecteur de contenu ---------------------------
 * L'ancienne version affichait 25 résultats dans une liste haute de 280px,
 * coincée dans une colonne latérale — impraticable dès qu'il y a des centaines
 * de concours. Ici c'est une palette plein écran (façon ⌘K) : recherche
 * prioritaire, tous les types cherchés en même temps, résultats groupés par
 * type, navigation au clavier, et un filtre « pas encore publié » qui est la
 * vraie question quand on cherche quoi poster ensuite.
 * ------------------------------------------------------------------------ */

const RESULT_CAP = 400;

export default function ContentPicker({ open, onClose, entries, loading, pubIndex, onPick, selectedKey }) {
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState("all");
  const [onlyUnpublished, setOnlyUnpublished] = useState(false);
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    // Recherche remise à zéro à chaque ouverture (les filtres, eux, sont un
    // choix de travail qu'on garde) : rouvrir le sélecteur veut dire
    // « cherche autre chose », pas « reprends ma recherche précédente ».
    setQuery("");
    setActive(0);
    // L'autofocus doit attendre que Modal ait pris le focus sur la boîte de
    // dialogue elle-même, sinon il est immédiatement écrasé.
    const t = setTimeout(() => inputRef.current?.focus(), 0);
    return () => clearTimeout(t);
  }, [open]);

  const terms = useMemo(() => queryTerms(query), [query]);

  const { groups, total, capped } = useMemo(() => {
    const out = [];
    let count = 0;
    let cut = false;
    for (const type of CONTENT_TYPES) {
      if (kind !== "all" && kind !== type.key) continue;
      const rows = [];
      for (const entry of entries) {
        if (entry.kind !== type.key) continue;
        if (terms.length && !matchesTerms(entry.search, terms)) continue;
        if (onlyUnpublished && publishedOn(pubIndex, entry.kind, entry.id)) continue;
        count += 1;
        if (rows.length + out.reduce((n, g) => n + g.rows.length, 0) >= RESULT_CAP) {
          cut = true;
          continue;
        }
        rows.push(entry);
      }
      if (rows.length) out.push({ type, rows });
    }
    return { groups: out, total: count, capped: cut };
  }, [entries, terms, kind, onlyUnpublished, pubIndex]);

  // Liste aplatie = ce que voit le clavier ; les en-têtes de groupe ne sont
  // pas sélectionnables.
  const flat = useMemo(() => groups.flatMap((g) => g.rows), [groups]);

  // Toute modification des critères remet la sélection clavier sur le premier
  // résultat : la garder en place pointerait sur un autre contenu qu'avant,
  // et « taper puis Entrée » choisirait alors la mauvaise ligne.
  useEffect(() => {
    setActive(0);
  }, [query, kind, onlyUnpublished]);

  // Filet de sécurité si la liste raccourcit sans que les critères changent
  // (rechargement des contenus) : l'index clavier ne doit jamais sortir.
  useEffect(() => {
    setActive((a) => (a >= flat.length ? 0 : a));
  }, [flat.length]);

  useEffect(() => {
    if (!open) return;
    const el = listRef.current?.querySelector(`[data-idx="${active}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [active, open]);

  const counts = useMemo(() => {
    const map = { all: 0 };
    for (const entry of entries) {
      map[entry.kind] = (map[entry.kind] || 0) + 1;
      map.all += 1;
    }
    return map;
  }, [entries]);

  function choose(entry) {
    onPick(entry);
    onClose();
  }

  function onKeyDown(e) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, flat.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (flat[active]) choose(flat[active]);
    }
  }

  if (!open) return null;

  let idx = -1;

  return (
    <Modal open={open} onClose={onClose} labelledBy="sgx-picker-title">
      <div className="sgx-picker" onKeyDown={onKeyDown}>
        <div className="sgx-picker-head">
          <h2 className="admin-modal-title" id="sgx-picker-title">
            Choisir un contenu à publier
          </h2>
          <button type="button" className="admin-icon-btn" onClick={onClose} aria-label="Fermer">
            ✕
          </button>
        </div>

        <div className="sgx-picker-search">
          <span aria-hidden="true">🔎</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un établissement, une ville, une filière, un titre…"
            aria-label="Rechercher un contenu"
          />
          {query && (
            <button type="button" className="sgx-picker-clear" onClick={() => setQuery("")} aria-label="Effacer">
              ✕
            </button>
          )}
        </div>

        <div className="sgx-picker-filters">
          <button
            type="button"
            className={"sgx-chip" + (kind === "all" ? " active" : "")}
            onClick={() => setKind("all")}
          >
            Tout <em>{counts.all || 0}</em>
          </button>
          {CONTENT_TYPES.map((t) => (
            <button
              key={t.key}
              type="button"
              className={"sgx-chip" + (kind === t.key ? " active" : "")}
              onClick={() => setKind(t.key)}
            >
              {t.tabIcon} {t.tabLabel} <em>{counts[t.key] || 0}</em>
            </button>
          ))}
          <label className={"sgx-chip sgx-chip-toggle" + (onlyUnpublished ? " active" : "")}>
            <input
              type="checkbox"
              checked={onlyUnpublished}
              onChange={(e) => setOnlyUnpublished(e.target.checked)}
            />
            Jamais publié
          </label>
        </div>

        <div className="sgx-picker-list" ref={listRef}>
          {loading && <div className="empty-state">Chargement des contenus…</div>}
          {!loading && !flat.length && (
            <div className="empty-state">
              <div className="empty-state-icon">🔍</div>
              Aucun résultat{query ? ` pour « ${query} »` : ""}.
            </div>
          )}
          {groups.map((group) => (
            <div className="sgx-picker-group" key={group.type.key}>
              <div className="sgx-picker-group-head">
                {group.type.tabIcon} {group.type.tabLabel}
                <em>{group.rows.length}</em>
              </div>
              {group.rows.map((entry) => {
                idx += 1;
                const i = idx;
                const published = publishedOn(pubIndex, entry.kind, entry.id);
                return (
                  <button
                    type="button"
                    key={`${entry.kind}:${entry.id}`}
                    data-idx={i}
                    className={
                      "sgx-picker-row" +
                      (i === active ? " active" : "") +
                      (selectedKey === `${entry.kind}:${entry.id}` ? " current" : "")
                    }
                    onMouseEnter={() => setActive(i)}
                    onClick={() => choose(entry)}
                  >
                    <span className="sgx-picker-row-body">
                      <span className="sgx-picker-row-title">{entry.title}</span>
                      {entry.meta && <span className="sgx-picker-row-meta">{entry.meta}</span>}
                    </span>
                    <span className="sgx-picker-row-side">
                      {published && (
                        <span className="sgx-dots" title={publishedTitle(published)}>
                          {PLATFORMS.filter((p) => published[p.key]).map((p) => (
                            <span key={p.key} className="sgx-dot" style={{ background: p.color }}>
                              <PlatformIcon platform={p.key} size={10} />
                            </span>
                          ))}
                        </span>
                      )}
                      {entry.right && <span className="sgx-picker-row-right">{entry.right}</span>}
                    </span>
                  </button>
                );
              })}
            </div>
          ))}
          {capped && (
            <p className="sgx-picker-cap">
              {total} résultats — seuls les {RESULT_CAP} premiers sont affichés, affine ta recherche.
            </p>
          )}
        </div>

        <div className="sgx-picker-foot">
          <span>
            <kbd>↑</kbd> <kbd>↓</kbd> naviguer · <kbd>Entrée</kbd> choisir · <kbd>Échap</kbd> fermer
          </span>
          <span>
            {flat.length} affiché{flat.length > 1 ? "s" : ""}
          </span>
        </div>
      </div>
    </Modal>
  );
}

function publishedTitle(published) {
  return (
    "Déjà publié sur : " +
    Object.keys(published)
      .map((k) => platformFor(k).label)
      .join(", ")
  );
}
