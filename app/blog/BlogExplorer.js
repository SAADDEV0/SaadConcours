"use client";

import { useEffect } from "react";
import { blogCardHtml } from "../_shared/blogCard";

const PAGE_SIZE = 9;

// Hydrates the server-rendered /blog page: wires up the category chips,
// search box and pagination, only replacing the grid's innerHTML once the
// visitor actually filters/paginates — the initial unfiltered list stays
// exactly what the server sent (same approach as ConcoursExplorer, kept for
// SEO: crawlers see every post in the first response regardless of JS).
// Pagination (not infinite scroll) so a given page stays a stable, linkable
// state instead of an ever-growing DOM. Chrome behavior (theme toggle, dua
// banner...) is already wired separately by <ChromeInit /> on the page.
export default function BlogExplorer({ initialData }) {
  useEffect(() => {
    const ALL = initialData || [];
    let filtered = ALL;
    let activeCategory = "";
    let currentPage = 1;

    const $ = (sel) => document.querySelector(sel);

    function renderPagination() {
      const pager = $("#blogPagination");
      if (!pager) return;
      const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
      if (totalPages <= 1) {
        pager.innerHTML = "";
        return;
      }

      const pageBtn = (n, label, disabled, active) =>
        `<button type="button" class="chip blog-page-btn${active ? " active" : ""}" data-page="${n}" ${disabled ? "disabled" : ""}>${label}</button>`;

      let html = "";
      html += pageBtn(currentPage - 1, "← Précédent", currentPage <= 1, false);
      for (let n = 1; n <= totalPages; n++) {
        html += pageBtn(n, String(n), false, n === currentPage);
      }
      html += pageBtn(currentPage + 1, "Suivant →", currentPage >= totalPages, false);

      pager.innerHTML = html;
      pager.querySelectorAll(".blog-page-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const n = Number(btn.dataset.page);
          if (!n || n === currentPage) return;
          currentPage = n;
          renderGrid();
          $("#blogGrid")?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });
    }

    function renderGrid() {
      const countEl = $("#blogResultsCount");
      if (countEl) countEl.textContent = `${filtered.length} article${filtered.length > 1 ? "s" : ""}`;

      const grid = $("#blogGrid");
      if (!grid) return;
      if (filtered.length === 0) {
        grid.innerHTML = `<div class="empty-state">Aucun article ne correspond à ces filtres.</div>`;
        renderPagination();
        return;
      }

      const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
      if (currentPage > totalPages) currentPage = totalPages;
      const start = (currentPage - 1) * PAGE_SIZE;
      const pageItems = filtered.slice(start, start + PAGE_SIZE);

      grid.innerHTML = pageItems.map(blogCardHtml).join("");
      renderPagination();
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

      currentPage = 1;
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

    const statPill = document.getElementById("statPill");
    if (statPill) statPill.textContent = `${ALL.length} article${ALL.length > 1 ? "s" : ""}`;

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

    // Always render through the paginated path (even unfiltered) so the
    // first page only ever shows PAGE_SIZE cards, not the full list the
    // server sent — that full list stays in the initial HTML for crawlers,
    // JS just slices it down for the visible/interactive view.
    applyFilters();
  }, [initialData]);

  return null;
}
