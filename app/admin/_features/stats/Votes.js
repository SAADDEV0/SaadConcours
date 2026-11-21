"use client";

import { useMemo, useState } from "react";
import Icon from "../../_ui/Icon";
import { Seg, SectionTitle } from "../../_ui/kit";
import { downloadText } from "../../_lib/api";
import { matchQuery, num } from "../../_lib/format";
import { labelForPath } from "../../_lib/labels";
import { SITE, toCsv } from "./shared";

// Avis « Ce chapitre t'a été utile ? 👍 / 👎 » laissés en bas des chapitres
// (app/_shared/AvisUtile.js). Compteurs depuis le lancement, sans période :
// un avis vaut pour le chapitre tel qu'il est, pas pour un jour donné.
// « À revoir d'abord » met en tête les chapitres où les 👎 pèsent le plus.

// En dessous, trop peu d'avis pour conclure (pastille grise).
const MIN_AVIS = 3;

// « À revoir d'abord » : chapitres assez notés, du plus faible % utile au plus
// fort (à égalité, le plus de 👎 d'abord) ; puis les peu notés, par nombre de 👎.
function pireDabord(a, b) {
  const sa = a.total >= MIN_AVIS;
  const sb = b.total >= MIN_AVIS;
  if (sa !== sb) return sa ? -1 : 1;
  if (sa && a.rate !== b.rate) return a.rate - b.rate;
  return b.down - a.down || b.total - a.total;
}

export function VotesTab({ votes, content }) {
  const [sort, setSort] = useState("worst");
  const [q, setQ] = useState("");

  const rows = useMemo(
    () =>
      votes.map((v) => {
        const total = v.up + v.down;
        return { ...v, total, rate: total ? v.up / total : 0, label: labelForPath(v.path, content) };
      }),
    [votes, content]
  );

  const list = useMemo(() => {
    const out = rows.filter((r) => matchQuery(`${r.label} ${r.path}`, q));
    if (sort === "worst") return out.sort(pireDabord);
    if (sort === "best") return out.sort((a, b) => b.up - a.up || b.rate - a.rate);
    return out.sort((a, b) => b.total - a.total);
  }, [rows, q, sort]);

  const up = rows.reduce((s, r) => s + r.up, 0);
  const down = rows.reduce((s, r) => s + r.down, 0);

  function exportCsv() {
    downloadText(`avis-chapitres-${new Date().toISOString().slice(0, 10)}.csv`, toCsv(["chapitre", "adresse", "utile", "pas vraiment", "% utile"], list.map((r) => [r.label, `${SITE}${r.path}`, r.up, r.down, Math.round(r.rate * 100)])), "text/csv");
  }

  return (
    <section className="ax-card">
      <SectionTitle aside={`${num(up)} 👍 · ${num(down)} 👎 depuis le lancement`}>Ce que les élèves pensent des chapitres</SectionTitle>
      <div className="ax-toolbar">
        <Seg
          ariaLabel="Tri"
          value={sort}
          onChange={setSort}
          options={[
            { value: "worst", label: "À revoir d'abord" },
            { value: "best", label: "Les plus utiles" },
            { value: "total", label: "Les plus notés" },
          ]}
        />
        <div className="ax-search">
          <Icon name="search" size="sm" />
          <input className="ax-input" placeholder="Filtrer les chapitres…" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <button type="button" className="ax-btn icon" onClick={exportCsv} disabled={!list.length} aria-label="Exporter (CSV)" title="Exporter (CSV)">
          <Icon name="download" size="sm" />
        </button>
      </div>
      {list.length ? (
        <ul className="ax-list">
          {list.map((r) => (
            <li key={r.path}>
              <span className="ax-list-main">
                <span className="ax-list-title">{r.label || r.path}</span>
                <span className="ax-list-meta">{r.path}</span>
              </span>
              <span className={`ax-pill ${r.total < MIN_AVIS ? "" : r.rate >= 0.8 ? "green" : r.rate >= 0.5 ? "amber" : "red"}`} title={r.total < MIN_AVIS ? "Trop peu d'avis pour conclure" : undefined}>
                {Math.round(r.rate * 100)} % utile
              </span>
              <span className="ax-num">{num(r.up)} 👍</span>
              <span className="ax-num">{num(r.down)} 👎</span>
              <a className="ax-btn ghost icon sm" href={`${SITE}${r.path}`} target="_blank" rel="noopener noreferrer" aria-label="Ouvrir">
                <Icon name="external" size="sm" />
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="ax-muted">{q ? "Aucun chapitre ne correspond." : "Aucun avis pour l'instant : ils arrivent quand les élèves cliquent sur 👍 ou 👎 en bas d'un chapitre."}</p>
      )}
    </section>
  );
}
