"use client";

import { useEffect } from "react";
import { chromeScript } from "../_shared/chrome";

// Hydrates the server-rendered /cours page: header behavior plus the filter
// bar. Every module card is already in the HTML (real <a href="/cours/[id]">
// links for crawlers); filtering only toggles `hidden` on the cards and on
// the semester sections left empty.
//
// Filters mirror the Licence Fondamentale SEG structure: semestre (S1..S6),
// parcours (Gestion / Économie — a module with no parcours is "commun" and
// matches both), filière (S5/S6, options scoped to the active parcours —
// hidden, never disabled; a module with no filière is shared by every
// filière of its parcours, e.g. "Management Stratégique" in both MRH and
// MAC) and matière, plus a text search that also covers chapter titles.
export default function CoursExplorer() {
  useEffect(() => {
    chromeScript();

    const $ = (sel) => document.querySelector(sel);
    const cards = Array.from(document.querySelectorAll(".bac-mat-card[data-search]"));
    const groupes = Array.from(document.querySelectorAll(".bac-group[data-groupe]"));
    const semBtns = Array.from(document.querySelectorAll("#coursFilters [data-semestre]"));
    let semestre = "";

    function updateFiliereOptions() {
      const filiereSel = $("#filterFiliere");
      if (!filiereSel) return;
      const parcours = $("#filterParcours")?.value || "";
      Array.from(filiereSel.options).forEach((opt) => {
        if (!opt.value) return;
        const visible = !parcours || (opt.dataset.parcours || "") === parcours;
        opt.hidden = !visible;
        if (!visible && filiereSel.value === opt.value) filiereSel.value = "";
      });
    }

    function applyFilters() {
      const parcours = $("#filterParcours")?.value || "";
      const filiere = $("#filterFiliere")?.value || "";
      const categorie = $("#filterCategorie")?.value || "";
      const q = ($("#coursSearchInput")?.value || "").trim().toLowerCase();

      semBtns.forEach((b) => b.classList.toggle("active", b.dataset.semestre === semestre));

      let n = 0;
      cards.forEach((card) => {
        const d = card.dataset;
        const ok =
          (!parcours || !d.parcours || d.parcours === parcours) &&
          (!semestre || d.semestre === semestre) &&
          (!filiere || !d.filiere || d.filiere === filiere) &&
          (!categorie || d.category === categorie) &&
          (!q || d.search.includes(q));
        card.hidden = !ok;
        if (ok) n++;
      });
      groupes.forEach((g) => {
        g.hidden = !g.querySelector(".bac-mat-card:not([hidden])");
      });

      const countEl = $("#coursResultsCount");
      if (countEl) countEl.textContent = `${n} module${n > 1 ? "s" : ""}`;
      const empty = $("#coursEmpty");
      if (empty) empty.hidden = n > 0;
    }

    semBtns.forEach((b) =>
      b.addEventListener("click", () => {
        semestre = b.dataset.semestre || "";
        applyFilters();
      })
    );
    $("#filterParcours")?.addEventListener("change", () => {
      updateFiliereOptions();
      applyFilters();
    });
    ["#filterFiliere", "#filterCategorie"].forEach((id) => $(id)?.addEventListener("change", applyFilters));
    $("#coursSearchInput")?.addEventListener("input", applyFilters);
    $("#coursResetBtn")?.addEventListener("click", () => {
      ["#filterParcours", "#filterFiliere", "#filterCategorie", "#coursSearchInput"].forEach((id) => {
        const el = $(id);
        if (el) el.value = "";
      });
      semestre = "";
      updateFiliereOptions();
      applyFilters();
    });

    // Prefills from ?parcours=/?semestre=/?filiere=/?category=/?q= so a
    // direct link (e.g. from an internal article) lands on the filtered view.
    const params = new URLSearchParams(window.location.search);
    const set = (id, v) => {
      const el = $(id);
      if (v && el) el.value = v;
    };
    set("#filterParcours", params.get("parcours"));
    updateFiliereOptions();
    set("#filterFiliere", params.get("filiere"));
    set("#filterCategorie", params.get("category"));
    set("#coursSearchInput", params.get("q"));
    semestre = params.get("semestre") || "";
    if (["parcours", "semestre", "filiere", "category", "q"].some((k) => params.get(k))) applyFilters();
  }, []);

  return null;
}
