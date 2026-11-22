"use client";

import { useMemo, useState } from "react";
import { Icon } from "../_shared/icons";

// Recherche dans le plan comptable, entièrement dans le navigateur : la liste
// (≈ 580 lignes) est posée dans la page au build, aucun appel au Worker.
// Un nombre cherche par début de numéro (« 61 » → classe 6, rubrique 61…),
// un texte cherche tous ses mots dans l'intitulé, sans tenir compte des accents.

const MAX = 40;

function sansAccents(s) {
  return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

export default function PcgeRecherche({ liste, autofocus = false }) {
  const [q, setQ] = useState("");
  const index = useMemo(() => liste.map(([code, titre, href]) => ({ code, titre, href, n: sansAccents(titre) })), [liste]);

  const terme = q.trim();
  const resultats = useMemo(() => {
    if (!terme) return [];
    if (/^\d+$/.test(terme)) return index.filter((x) => x.code.startsWith(terme));
    const mots = sansAccents(terme).split(/\s+/).filter(Boolean);
    return index.filter((x) => mots.every((m) => x.n.includes(m)));
  }, [terme, index]);

  return (
    <div className="pcge-search" role="search">
      <label className="pcge-search-box">
        <Icon name="search" size={20} />
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Un numéro (6111) ou un mot (clients, TVA, amortissement…)"
          aria-label="Chercher un compte dans le plan comptable"
          autoComplete="off"
          inputMode="search"
          autoFocus={autofocus}
        />
      </label>
      {!terme && <p className="pcge-search-hint">Exemples : 3421, 4455, « banque », « TVA récupérable », « dotations ».</p>}
      {terme && (
        <ul className="pcge-results" aria-live="polite">
          {resultats.length === 0 && <li className="pcge-results-empty">Aucun compte ne correspond à « {terme} ».</li>}
          {resultats.slice(0, MAX).map((x) => (
            <li key={x.code}>
              <a href={x.href}>
                <span className="pcge-code">{x.code}</span>
                <span>{x.titre}</span>
                <span className="pcge-res-classe">Classe {x.code[0]}</span>
              </a>
            </li>
          ))}
          {resultats.length > MAX && <li className="pcge-results-empty">{resultats.length - MAX} autres résultats : précise ta recherche.</li>}
        </ul>
      )}
    </div>
  );
}
