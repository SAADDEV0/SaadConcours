"use client";

import { useEffect } from "react";
import { chromeScript } from "../_shared/chrome";
import { downloadCoursPdf } from "../_shared/coursPdf";
import { protectMath, renderMathWhenReady } from "../_shared/mathMarkdown";

// Hydrates the server-rendered /cours page: wires the reading-theme picker
// and the PDF button, and intercepts a plain click on a module card to open
// the inline reader (with its TOC + theme picker) instead of letting the
// browser navigate to /cours/[id] — that dedicated page still exists underneath
// the real <a href>, so JS-less visitors, crawlers, and ctrl/cmd/middle-click
// all still work. Mirrors ConcoursExplorer.js.
export default function CoursExplorer({ initialData }) {
  useEffect(() => {
    chromeScript();

    const ALL = initialData || [];
    const $ = (sel) => document.querySelector(sel);

    function escapeHtml(s) {
      return String(s ?? "").replace(
        /[&<>"']/g,
        (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m])
      );
    }

    /* -------------------- Reading theme picker (Obsidian-style) --------------------
     * Only .cours-content is restyled (see globals.css) - the picker just toggles a
     * data-md-theme attribute on .cours-reader and remembers the choice.
     */
    const COURS_THEMES = [
      { id: "default", label: "Thème du site", swatch: "linear-gradient(135deg,#1b1f2a,#4f8cff)" },
      { id: "sepia", label: "Sépia · Papier", swatch: "linear-gradient(135deg,#f4ecd8,#a8763e)" },
      { id: "nord", label: "Nord", swatch: "linear-gradient(135deg,#2e3440,#88c0d0)" },
      { id: "obsidian", label: "Obsidian", swatch: "linear-gradient(135deg,#1e1e2e,#c9a7ff)" },
      { id: "contrast", label: "Contraste élevé", swatch: "linear-gradient(135deg,#000000,#f5c518)" },
      { id: "night", label: "Nuit douce", swatch: "linear-gradient(135deg,#120e0c,#e0955c)" },
    ];
    const COURS_THEME_KEY = "cours_md_theme";

    function renderThemePanel(active) {
      const panel = $("#coursThemePanel");
      panel.innerHTML = COURS_THEMES.map(
        (t) => `
          <button type="button" class="cours-theme-opt${t.id === active ? " active" : ""}" data-theme-id="${t.id}">
            <span class="cours-theme-swatch" style="background:${t.swatch}"></span>
            ${escapeHtml(t.label)}
          </button>
        `
      ).join("");
      panel.querySelectorAll(".cours-theme-opt").forEach((btn) => {
        btn.addEventListener("click", () => applyCoursTheme(btn.dataset.themeId));
      });
    }

    function applyCoursTheme(id) {
      $("#coursReader").dataset.mdTheme = id;
      localStorage.setItem(COURS_THEME_KEY, id);
      renderThemePanel(id);
      $("#coursThemePanel").style.display = "none";
    }

    function initThemePicker() {
      const saved = localStorage.getItem(COURS_THEME_KEY) || "default";
      $("#coursReader").dataset.mdTheme = saved;
      renderThemePanel(saved);

      const btn = $("#coursThemeBtn");
      if (btn.dataset.wired === "1") return;
      btn.dataset.wired = "1";

      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const panel = $("#coursThemePanel");
        panel.style.display = panel.style.display === "none" ? "grid" : "none";
      });
      document.addEventListener("click", (e) => {
        if (!$("#coursThemePicker").contains(e.target)) {
          $("#coursThemePanel").style.display = "none";
        }
      });
    }

    let coursCurrent = null;

    function renderCoursModuleList() {
      $("#coursReaderWrap").style.display = "none";
      $("#coursModuleList").style.display = "block";
    }

    function loadCours(meta) {
      const md = meta.content || "";
      coursCurrent = { meta, md };
      $("#coursModuleList").style.display = "none";
      $("#coursReaderWrap").style.display = "block";
      $("#coursReaderMeta").textContent = meta.module;
      renderCoursContent(md);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function renderCoursContent(md) {
      let html = md;
      if (window.marked) {
        const { text, restore } = protectMath(md);
        html = restore(marked.parse(text));
      }
      const content = $("#coursContent");
      content.innerHTML = html;

      const toc = $("#coursToc");
      toc.innerHTML = '<div class="cours-toc-title">Sommaire</div>';
      const headings = content.querySelectorAll("h2, h3");
      headings.forEach((h, i) => {
        const id = "cours-h-" + i;
        h.id = id;
        const a = document.createElement("a");
        a.href = "#" + id;
        a.textContent = h.textContent;
        if (h.tagName === "H3") a.className = "toc-h3";
        a.addEventListener("click", (e) => {
          e.preventDefault();
          h.scrollIntoView({ behavior: "smooth", block: "start" });
        });
        toc.appendChild(a);
      });

      renderMathWhenReady(content);
    }

    function wireCards() {
      document.querySelectorAll("#coursModuleGrid a.eval-module-card").forEach((card) => {
        if (card.dataset.wired === "1") return;
        card.dataset.wired = "1";
        card.addEventListener("click", (e) => {
          if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
          const m = ALL.find((x) => x.id === card.dataset.id);
          if (!m) return;
          e.preventDefault();
          loadCours(m);
        });
      });
    }

    $("#coursBack").addEventListener("click", renderCoursModuleList);
    initThemePicker();
    wireCards();

    $("#coursPdfBtn").addEventListener("click", () => {
      if (!coursCurrent) return;
      downloadCoursPdf({ id: coursCurrent.meta.id, content: coursCurrent.md });
    });
  }, [initialData]);

  return null;
}
