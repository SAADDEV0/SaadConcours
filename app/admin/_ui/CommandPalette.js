"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Icon from "./Icon";
import { FLAT_NAV } from "../_lib/nav";
import { COLLECTION_LIST } from "../_lib/collections";
import { getCached, loadJson, subscribeRepo } from "../_lib/repo";
import { matchQuery } from "../_lib/format";
import { confirmLeave } from "../_lib/hooks";

const ACTIONS = [
  { id: "new-concours", label: "Nouveau concours", icon: "plus", href: "/admin/concours/editer?nouveau=1", keywords: "ajouter créer" },
  { id: "import", label: "Importer des concours (JSON / CSV)", icon: "upload", href: "/admin/concours/import", keywords: "import groupé" },
  { id: "new-cours", label: "Nouveau cours Licence", icon: "plus", href: "/admin/cours/editer?nouveau=1", keywords: "ajouter créer" },
  { id: "new-quiz", label: "Nouvelle évaluation (QCM)", icon: "plus", href: "/admin/evaluations/editer?nouveau=1", keywords: "ajouter qcm" },
  { id: "new-blog", label: "Nouvel article de blog", icon: "plus", href: "/admin/blog/editer?nouveau=1", keywords: "ajouter écrire" },
  { id: "new-news", label: "Nouvelle annonce de concours ouvert", icon: "plus", href: "/admin/annonces/editer?nouveau=1", keywords: "news ajouter" },
  { id: "new-cahier", label: "Nouveau cahier à vendre (boutique Gumroad)", icon: "bag", href: "/admin/boutique/editer?nouveau=1", keywords: "vendre produit gumroad" },
  { id: "social", label: "Préparer une publication réseaux sociaux", icon: "share", href: "/admin/social", keywords: "facebook instagram partager" },
  { id: "export", label: "Exporter les abonnés (CSV)", icon: "download", href: "/api/admin/subscribers?format=csv", external: true, keywords: "emails" },
  { id: "trash", label: "Ouvrir la corbeille", icon: "trash", href: "/admin/activite?onglet=corbeille", keywords: "restaurer supprimé" },
  { id: "site", label: "Voir le site public", icon: "external", href: "https://www.saadconcours.space", external: true, keywords: "ouvrir" },
];

export default function CommandPalette({ open, onClose }) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const [, bump] = useState(0);
  const listRef = useRef(null);

  // Charge (ou rafraîchit) tout le contenu à l'ouverture pour que la
  // recherche porte sur l'ensemble du site.
  useEffect(() => {
    if (!open) return undefined;
    setQ("");
    setActive(0);
    for (const c of COLLECTION_LIST) loadJson(c.path).catch(() => {});
    return subscribeRepo(() => bump((n) => n + 1));
  }, [open]);

  const results = useMemo(() => {
    const out = [];
    const query = q.trim();
    const nav = FLAT_NAV.filter((n) => matchQuery(`${n.label} ${n.group}`, query)).map((n) => ({
      id: n.href,
      group: "Aller à",
      label: n.label,
      meta: n.group,
      icon: n.icon,
      href: n.href,
    }));
    const actions = ACTIONS.filter((a) => matchQuery(`${a.label} ${a.keywords}`, query)).map((a) => ({ ...a, group: "Actions" }));
    if (!query) return [...actions.slice(0, 6), ...nav];
    out.push(...nav.slice(0, 4), ...actions.slice(0, 4));
    for (const col of COLLECTION_LIST) {
      const list = getCached(col.path)?.data;
      if (!Array.isArray(list)) continue;
      const hits = [];
      for (const item of list) {
        if (matchQuery(col.searchText(item), query)) hits.push(item);
        if (hits.length >= 6) break;
      }
      for (const item of hits) {
        out.push({
          id: `${col.key}:${item.id}`,
          group: col.label,
          label: col.title(item),
          meta: col.subtitle(item),
          icon: col.icon,
          href: `${col.href}/editer?id=${encodeURIComponent(item.id)}`,
        });
      }
    }
    return out;
  }, [q]);

  useEffect(() => {
    setActive(0);
  }, [q]);

  useEffect(() => {
    listRef.current?.querySelector(".ax-palette-item.active")?.scrollIntoView({ block: "nearest" });
  }, [active]);

  if (!open) return null;

  function run(item) {
    if (!item) return;
    onClose();
    if (item.external) {
      window.open(item.href, "_blank", "noopener");
      return;
    }
    if (!confirmLeave()) return;
    router.push(item.href);
  }

  let lastGroup = null;
  return (
    <div className="ax-overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="ax-palette" role="dialog" aria-modal="true" aria-label="Recherche et commandes">
        <div className="ax-palette-input">
          <Icon name="search" />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Rechercher un concours, un cours, une page, une action…"
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setActive((a) => Math.min(results.length - 1, a + 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActive((a) => Math.max(0, a - 1));
              } else if (e.key === "Enter") {
                e.preventDefault();
                run(results[active]);
              } else if (e.key === "Escape") onClose();
            }}
          />
          <span className="ax-kbd">Échap</span>
        </div>
        <div className="ax-palette-list" ref={listRef}>
          {!results.length && <div className="ax-empty" style={{ margin: 10 }}>Aucun résultat pour « {q} ».</div>}
          {results.map((r, i) => {
            const head = r.group !== lastGroup ? <div className="ax-palette-group">{r.group}</div> : null;
            lastGroup = r.group;
            return (
              <div key={r.id}>
                {head}
                <div className={`ax-palette-item${i === active ? " active" : ""}`} onMouseEnter={() => setActive(i)} onClick={() => run(r)}>
                  <Icon name={r.icon || "chevronRight"} />
                  <span className="ax-palette-main">
                    <span className="ax-palette-title">{r.label}</span>
                    {r.meta && <span className="ax-palette-meta">{r.meta}</span>}
                  </span>
                  {r.external && <Icon name="external" size="sm" />}
                </div>
              </div>
            );
          })}
        </div>
        <div className="ax-palette-foot">
          <span>
            <span className="ax-kbd">↑</span> <span className="ax-kbd">↓</span> naviguer
          </span>
          <span>
            <span className="ax-kbd">Entrée</span> ouvrir
          </span>
          <span className="ax-right">Ctrl K partout dans la console</span>
        </div>
      </div>
    </div>
  );
}
