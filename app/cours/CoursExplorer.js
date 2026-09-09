"use client";

import { useEffect } from "react";
import { chromeScript } from "../_shared/chrome";
import { coursCardHtml } from "../_shared/coursCard";

// Hydrates the server-rendered /cours page: header behavior (theme toggle,
// mobile nav, dua banner...) plus the category chip filter, only replacing
// the grid's innerHTML once the visitor actually filters — the initial
// unfiltered list stays exactly what the server sent (mirrors
// ConcoursExplorer.js / BlogExplorer.js). The module cards are plain
// <a href="/cours/[id]"> links (see app/_shared/coursCard.js) so no click
// interception is needed beyond the filter itself.
export default function CoursExplorer({ initialData }) {
  useEffect(() => {
    chromeScript();

    const ALL = initialData || [];
    let activeCategory = "";

    const $ = (sel) => document.querySelector(sel);

    function renderGrid() {
      const filtered = activeCategory ? ALL.filter((m) => m.category === activeCategory) : ALL;

      const countEl = $("#coursResultsCount");
      if (countEl) countEl.textContent = `${filtered.length} module${filtered.length > 1 ? "s" : ""}`;

      const grid = $("#coursModuleGrid");
      if (!grid) return;
      if (filtered.length === 0) {
        grid.innerHTML = `<div class="empty-state">Aucun cours ne correspond à ce filtre.</div>`;
        return;
      }
      grid.innerHTML = filtered.map(coursCardHtml).join("");
    }

    function setActiveChip(code) {
      document.querySelectorAll(".cours-cat-chip").forEach((chip) => {
        chip.classList.toggle("active", chip.dataset.category === code);
      });
    }

    document.querySelectorAll(".cours-cat-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        activeCategory = chip.dataset.category || "";
        setActiveChip(activeCategory);
        renderGrid();
      });
    });

    // Prefills from ?category= so a direct link (e.g. an internal link from
    // an article) lands on the filtered view instead of the full list.
    const categoryParam = new URLSearchParams(window.location.search).get("category");
    if (categoryParam) {
      activeCategory = categoryParam;
      setActiveChip(categoryParam);
      renderGrid();
    }
  }, [initialData]);

  return null;
}
