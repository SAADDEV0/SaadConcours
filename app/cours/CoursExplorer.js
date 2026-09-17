"use client";

import { useEffect } from "react";
import { chromeScript } from "../_shared/chrome";
import { coursCardHtml } from "../_shared/coursCard";

// Hydrates the server-rendered /cours page: header behavior (theme toggle,
// mobile nav, dua banner...) plus the sidebar filters, only replacing the
// grid's innerHTML once the visitor actually filters — the initial
// unfiltered list stays exactly what the server sent (mirrors
// ConcoursExplorer.js, same .layout/.filters sidebar pattern). The module
// cards are plain <a href="/cours/[id]"> links (see app/_shared/coursCard.js)
// so no click interception is needed beyond the filter itself.
//
// Filters mirror the Licence Fondamentale SEG structure: parcours (Gestion /
// Économie — a course with no parcours is "commun" and matches both),
// semestre (S1..S6, each its own dropdown line) and filière (relevant for
// S5/S6, scoped to the active parcours like #filterFiliere depends on
// #filterCategorie in ConcoursExplorer.js — always clickable, never
// disabled), plus the pre-existing matière (category). Like parcours, a
// course with no filière is "commun" and matches every filière of its
// parcours (needed for S5/S6 modules shared across several filières, e.g.
// "Management Stratégique" taught in both MRH et Marketing & Actions
// Commerciales per the official FSJESJ programme).
export default function CoursExplorer({ initialData }) {
  useEffect(() => {
    chromeScript();

    const ALL = initialData || [];
    let filtered = ALL;

    const $ = (sel) => document.querySelector(sel);

    // Filière options are scoped to the active parcours (hidden, not
    // disabled) — the select itself always stays clickable.
    function updateFiliereOptions() {
      const filiereSel = $("#filterFiliere");
      if (!filiereSel) return;
      const parcours = $("#filterParcours")?.value || "";
      Array.from(filiereSel.options).forEach((opt) => {
        if (!opt.value) return;
        const optParcours = opt.dataset.parcours || "";
        const visible = !parcours || optParcours === parcours;
        opt.hidden = !visible;
        if (!visible && filiereSel.value === opt.value) filiereSel.value = "";
      });
    }

    function renderGrid() {
      const countEl = $("#coursResultsCount");
      if (countEl) countEl.textContent = `${filtered.length} module${filtered.length > 1 ? "s" : ""}`;

      const grid = $("#coursModuleGrid");
      if (!grid) return;
      if (filtered.length === 0) {
        grid.innerHTML = `<div class="empty-state">Aucun cours ne correspond à ces filtres.</div>`;
        return;
      }
      grid.innerHTML = filtered.map(coursCardHtml).join("");
    }

    function applyFilters() {
      const parcours = $("#filterParcours")?.value || "";
      const semestre = $("#filterSemestre")?.value || "";
      const filiere = $("#filterFiliere")?.value || "";
      const categorie = $("#filterCategorie")?.value || "";
      const q = ($("#coursSearchInput")?.value || "").trim().toLowerCase();

      filtered = ALL.filter((m) => {
        // A course with no parcours/filière is "commun" — always matches,
        // whichever parcours or filière is currently selected (mirrors the
        // parcours guard: a S5/S6 module shared by several filières, e.g.
        // "Management Stratégique" in both MRH et MAC, is tagged filiere: ""
        // rather than arbitrarily picked to one — it must stay visible under
        // every filière filter of its parcours, not just when none is set).
        if (parcours && m.parcours && m.parcours !== parcours) return false;
        if (semestre && m.semestre !== semestre) return false;
        if (filiere && m.filiere && m.filiere !== filiere) return false;
        if (categorie && m.category !== categorie) return false;
        if (q) {
          const hay = [m.module, m.title, m.description].join(" ").toLowerCase();
          if (!hay.includes(q)) return false;
        }
        return true;
      });

      renderGrid();
    }

    function initFilters() {
      $("#filterParcours")?.addEventListener("change", () => {
        updateFiliereOptions();
        applyFilters();
      });
      ["#filterSemestre", "#filterFiliere", "#filterCategorie"].forEach((id) => $(id)?.addEventListener("change", applyFilters));
      $("#coursSearchInput")?.addEventListener("input", applyFilters);

      $("#coursResetBtn")?.addEventListener("click", () => {
        ["#filterParcours", "#filterSemestre", "#filterFiliere", "#filterCategorie"].forEach((id) => {
          const el = $(id);
          if (el) el.value = "";
        });
        const input = $("#coursSearchInput");
        if (input) input.value = "";
        updateFiliereOptions();
        applyFilters();
      });

      updateFiliereOptions();
    }

    initFilters();

    // Prefills from ?parcours=/?semestre=/?filiere=/?category=/?q= so a
    // direct link (e.g. from an internal article or a filière landing card)
    // lands on the filtered view instead of the full list.
    const params = new URLSearchParams(window.location.search);
    const parcoursParam = params.get("parcours");
    const semestreParam = params.get("semestre");
    const filiereParam = params.get("filiere");
    const categoryParam = params.get("category");
    const qParam = params.get("q");
    if (parcoursParam && $("#filterParcours")) $("#filterParcours").value = parcoursParam;
    updateFiliereOptions();
    if (semestreParam && $("#filterSemestre")) $("#filterSemestre").value = semestreParam;
    if (filiereParam && $("#filterFiliere")) $("#filterFiliere").value = filiereParam;
    if (categoryParam && $("#filterCategorie")) $("#filterCategorie").value = categoryParam;
    if (qParam && $("#coursSearchInput")) $("#coursSearchInput").value = qParam;
    if (parcoursParam || semestreParam || filiereParam || categoryParam || qParam) applyFilters();
  }, [initialData]);

  return null;
}
