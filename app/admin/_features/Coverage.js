"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Icon from "../_ui/Icon";
import { Alert, Empty, Hero, SectionTitle, Seg, Skeleton } from "../_ui/kit";
import { useConfirm, useToast } from "../_ui/feedback";
import { useCollection } from "../_lib/content";
import { mutateJson } from "../_lib/repo";
import { FILIERE_CATEGORIES } from "@/lib/taxonomy";
import { CONCOURS_NIVEAUX, niveauOf } from "@/lib/concoursNiveaux";
import { normalize, num, plural } from "../_lib/format";

const KNOWN = new Set(FILIERE_CATEGORIES.flatMap((c) => c.sousFilieres));

// Même valeur écrite de plusieurs façons (« Meknès » / « Meknes »,
// « Kénitra » / « Kenitra ») : chaque variante devient une entrée à part dans
// les filtres du site. Regroupées ici par forme normalisée.
function variantsOf(list, key) {
  const groups = new Map();
  for (const c of list) {
    const v = String(c[key] ?? "").trim();
    if (!v) continue;
    const k = normalize(v).replace(/[^a-z0-9]/g, "");
    if (!groups.has(k)) groups.set(k, new Map());
    const g = groups.get(k);
    g.set(v, (g.get(v) || 0) + 1);
  }
  return [...groups.values()]
    .filter((g) => g.size > 1)
    .map((g) => [...g.entries()].sort((a, b) => b[1] - a[1]));
}

export default function Coverage() {
  const { list: all, loading, col } = useCollection("concours");
  const [niveau, setNiveau] = useState("tous");
  const list = useMemo(() => (all && niveau !== "tous" ? all.filter((c) => niveauOf(c) === niveau) : all), [all, niveau]);
  const toast = useToast();
  const confirm = useConfirm();
  const [busy, setBusy] = useState(false);

  const years = useMemo(() => {
    if (!list) return [];
    const ys = [...new Set(list.map((c) => String(c.annee).slice(0, 4)).filter((y) => /^\d{4}$/.test(y)))].sort().reverse();
    return ys.slice(0, 14);
  }, [list]);

  const matrix = useMemo(() => {
    if (!list) return null;
    const m = new Map();
    for (const c of list) {
      const key = `${c.filiere}|${String(c.annee).slice(0, 4)}`;
      m.set(key, (m.get(key) || 0) + 1);
    }
    return m;
  }, [list]);

  const outside = useMemo(() => {
    if (!list) return [];
    const m = new Map();
    for (const c of list) if (c.filiere && !KNOWN.has(c.filiere)) m.set(c.filiere, (m.get(c.filiere) || 0) + 1);
    return [...m.entries()];
  }, [list]);

  const villes = useMemo(() => (list ? variantsOf(list, "ville") : []), [list]);
  const etabs = useMemo(() => (list ? variantsOf(list, "etablissement") : []), [list]);

  async function harmonize(field, variants, canonical) {
    const others = variants.map(([v]) => v).filter((v) => v !== canonical);
    const n = variants.filter(([v]) => v !== canonical).reduce((s, [, k]) => s + k, 0);
    const ok = await confirm({
      title: `Harmoniser en « ${canonical} » ?`,
      body: `${plural(n, "concours")} passeront de ${others.map((o) => `« ${o} »`).join(", ")} à « ${canonical} ». Un seul commit.`,
      confirmLabel: "Harmoniser",
    });
    if (!ok) return;
    setBusy(true);
    try {
      await mutateJson(col.path, (all) => {
        let count = 0;
        const next = all.map((c) => {
          if (others.includes(String(c[field] ?? "").trim())) {
            count++;
            return { ...c, [field]: canonical };
          }
          return c;
        });
        return {
          data: count ? next : null,
          message: `Harmonise ${field} : ${others.join(", ")} → ${canonical} (${count})`,
          audit: { action: "update", resource: "concours", label: `${field} harmonisé en « ${canonical} » (${count})` },
        };
      });
      toast.success("Données harmonisées", `« ${canonical} » partout.`);
    } catch (err) {
      toast.error("Échec", err.message);
    } finally {
      setBusy(false);
    }
  }

  if (loading || !list) return <Skeleton rows={8} height={40} />;

  const byCategory = FILIERE_CATEGORIES.map((cat) => ({
    ...cat,
    total: list.filter((c) => c.categorie === cat.code).length,
  }));
  const max = Math.max(1, ...byCategory.map((c) => c.total));

  return (
    <>
      <Hero
        icon="🗺️"
        eyebrow="Concours · Pilotage"
        title="Couverture & qualité des données"
        actions={<Seg ariaLabel="Niveau" value={niveau} onChange={setNiveau} options={[{ value: "tous", label: "Tous" }, ...CONCOURS_NIVEAUX.map((n) => ({ value: n.code, label: `${n.icon} ${n.label}` }))]} />}
      >
        Où le site est riche, où il manque des sujets, et les incohérences qui éclatent les filtres publics en doublons.
      </Hero>

      <div className="ax-grid c3 ax-section">
        {byCategory.map((c) => (
          <Link key={c.code} href={`/admin/concours?categorie=${c.code}`} className="ax-stat">
            <div className="ax-stat-label">{c.code}</div>
            <div className="ax-stat-value">{num(c.total)}</div>
            <div className="ax-stat-foot">{c.label}</div>
            <div className="ax-progress ax-mt">
              <span style={{ width: `${(c.total / max) * 100}%` }} />
            </div>
          </Link>
        ))}
      </div>

      <section className="ax-card ax-section">
        <SectionTitle aside="nombre de sujets par filière et par année">Matrice de couverture</SectionTitle>
        <div className="ax-matrix">
          <table>
            <thead>
              <tr>
                <th>Filière</th>
                {years.map((y) => (
                  <th key={y}>{y}</th>
                ))}
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {FILIERE_CATEGORIES.map((cat) => [
                <tr key={cat.code}>
                  <th colSpan={years.length + 2} style={{ paddingTop: 12, color: "var(--ax-accent-ink)" }}>
                    {cat.label}
                  </th>
                </tr>,
                ...cat.sousFilieres.map((sf) => {
                  const total = list.filter((c) => c.filiere === sf).length;
                  return (
                    <tr key={sf}>
                      <th title={sf} style={{ maxWidth: 280, overflow: "hidden", textOverflow: "ellipsis" }}>
                        {sf}
                      </th>
                      {years.map((y) => {
                        const n = matrix.get(`${sf}|${y}`) || 0;
                        return (
                          <td key={y} className={`cell c${Math.min(3, n)}`} title={`${sf} · ${y} : ${n}`}>
                            {n || "·"}
                          </td>
                        );
                      })}
                      <td className="cell" style={{ fontWeight: 800 }}>
                        {total}
                      </td>
                    </tr>
                  );
                }),
              ])}
            </tbody>
          </table>
        </div>
        <p className="ax-hint ax-mt">Les cases vides sont les sujets à chercher en priorité : chaque année manquante est une requête Google sans réponse du site.</p>
      </section>

      <div className="ax-grid c2 ax-section">
        <section className="ax-card">
          <SectionTitle>Villes écrites de plusieurs façons</SectionTitle>
          {villes.length ? (
            <VariantList groups={villes} onPick={(g, v) => harmonize("ville", g, v)} busy={busy} />
          ) : (
            <Alert tone="ok">Aucune incohérence.</Alert>
          )}
        </section>
        <section className="ax-card">
          <SectionTitle>Établissements écrits de plusieurs façons</SectionTitle>
          {etabs.length ? (
            <VariantList groups={etabs} onPick={(g, v) => harmonize("etablissement", g, v)} busy={busy} />
          ) : (
            <Alert tone="ok">Aucune incohérence.</Alert>
          )}
        </section>
      </div>

      <section className="ax-card">
        <SectionTitle>Filières hors nomenclature</SectionTitle>
        {outside.length ? (
          <ul className="ax-list">
            {outside.map(([f, n]) => (
              <li key={f}>
                <span className="ax-list-main">
                  <span className="ax-list-title">{f}</span>
                  <span className="ax-list-meta">{plural(n, "concours")} — n&apos;apparaît dans aucun filtre du site</span>
                </span>
                <Link className="ax-btn xs" href={`/admin/concours?q=${encodeURIComponent(f)}`}>
                  Corriger
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <Empty icon="✅" title="Toutes les filières sont reconnues">Chaque concours tombe dans un filtre du site.</Empty>
        )}
      </section>
    </>
  );
}

function VariantList({ groups, onPick, busy }) {
  return (
    <ul className="ax-list">
      {groups.map((g) => (
        <li key={g[0][0]} style={{ flexWrap: "wrap" }}>
          <span className="ax-list-main">
            <span className="ax-list-title">{g.map(([v, n]) => `${v} (${n})`).join(" · ")}</span>
            <span className="ax-list-meta">Garder :</span>
          </span>
          <span className="ax-btn-row">
            {g.map(([v]) => (
              <button key={v} type="button" className="ax-btn xs" disabled={busy} onClick={() => onPick(g, v)}>
                <Icon name="check" size="sm" /> {v}
              </button>
            ))}
          </span>
        </li>
      ))}
    </ul>
  );
}
