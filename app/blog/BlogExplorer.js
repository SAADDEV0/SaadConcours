"use client";

import { useEffect } from "react";
import { blogCardHtml } from "../_shared/blogCard";

// Hydrates the server-rendered /blog page: wires up the category chips and
// search box, only replacing the grid's innerHTML once the visitor actually
// filters — the initial unfiltered list stays exactly what the server sent
// (same approach as ConcoursExplorer, kept for SEO: crawlers see every post
// in the first response regardless of JS). Chrome behavior (theme toggle,
// dua banner...) is already wired separately by <ChromeInit /> on the page.
export default function BlogExplorer({ initialData }) {
  useEffect(() => {
    const ALL = initialData || [];
    let filtered = ALL;
    let activeCategory = "";

    const $ = (sel) => document.querySelector(sel);

    function renderGrid() {
      const countEl = $("#blogResultsCount");
      if (countEl) countEl.textContent = `${filtered.length} article${filtered.length > 1 ? "s" : ""}`;
      const grid = $("#blogGrid");
      if (!grid) return;
      if (filtered.length === 0) {
        grid.innerHTML = `<div class="empty-state">Aucun article ne correspond à ces filtres.</div>`;
        return;
      }
      grid.innerHTML = filtered.map(blogCardHtml).join("");
    }

    function applyFilters() {
      const q = ($("#blogSearchInput")?.value || "").trim().toLowerCase();

      filtered = ALL.filter((p) => {
        if (activeCategory && p.category !== activeCategory) return false;
        if (q) {
          const hay = [p.title, p.excerpt, p.content].join(" ").toLowerCase();
          if (!hay.includes(q)) return false;
        }
        return true;
      });

      renderGrid();
    }

    function setActiveChip(code) {
      document.querySelectorAll(".blog-cat-chip").forEach((chip) => {
        chip.classList.toggle("active", chip.dataset.category === code);
      });
    }

    document.querySelectorAll(".blog-cat-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        activeCategory = activeCategory === chip.dataset.category ? "" : chip.dataset.category;
        setActiveChip(activeCategory);
        applyFilters();
      });
    });

    $("#blogSearchInput")?.addEventListener("input", applyFilters);

    $("#blogResetBtn")?.addEventListener("click", () => {
      activeCategory = "";
      setActiveChip("");
      const input = $("#blogSearchInput");
      if (input) input.value = "";
      applyFilters();
    });

    // Prefills from ?category= or ?q= so a direct link (e.g. an internal
    // link from another article, or a Google sitelinks search box) lands
    // on the filtered view instead of the full list.
    const params = new URLSearchParams(window.location.search);
    const qParam = params.get("q");
    const categoryParam = params.get("category");
    if (categoryParam) {
      activeCategory = categoryParam;
      setActiveChip(categoryParam);
    }
    if (qParam) {
      const input = $("#blogSearchInput");
      if (input) input.value = qParam;
    }
    if (qParam || categoryParam) applyFilters();
  }, [initialData]);

  return null;
}
