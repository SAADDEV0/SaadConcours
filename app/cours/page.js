"use client";

import { useEffect, useRef } from "react";
import { chromeHtml, chromeScript, footerHtml } from "../_shared/chrome";
import { downloadCoursPdf } from "../_shared/coursPdf";

const MARKUP = `
${chromeHtml({ active: "cours", showSearch: false })}

<div class="cours-view" id="viewCours">

  <div id="coursModuleList">
    <h1 class="eval-title">📖 Cours par module</h1>
    <p class="eval-sub">Fiches de cours synthétiques : définitions, formules et points clés à retenir, par module.</p>
    <div class="grid" id="coursModuleGrid"></div>
  </div>

  <div id="coursReaderWrap" style="display:none;">
    <div class="eval-toolbar">
      <button class="reset-btn" id="coursBack">← Modules</button>
      <div class="eval-progress" id="coursReaderMeta"></div>
      <div class="cours-theme-picker" id="coursThemePicker">
        <button class="cours-theme-btn" id="coursThemeBtn" type="button">🎨 Thème de lecture</button>
        <div class="cours-theme-panel" id="coursThemePanel" style="display:none;"></div>
      </div>
      <button class="dl-btn" id="coursPdfBtn">⬇ Télécharger en PDF</button>
    </div>
    <div class="cours-reader" id="coursReader">
      <aside class="cours-toc" id="coursToc"></aside>
      <div class="cours-content" id="coursContent"></div>
    </div>
  </div>

</div>

${footerHtml()}
`;

export default function CoursPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    chromeScript();

    const root = containerRef.current;
    const $ = (sel) => root.querySelector(sel);

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
      // Dev-mode React StrictMode re-runs this effect (mount/cleanup/mount),
      // and this file has no effect cleanup for any of its listeners - a
      // second addEventListener on a toggle handler would double-fire and
      // make the button appear to do nothing. Guard just this one since it's
      // the only new toggle-style handler in the file.
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

    let coursRegistry = [];
    let coursCurrent = null;

    function loadCoursRegistry() {
      fetch("/api/cours")
        .then((r) => r.json())
        .then((data) => {
          coursRegistry = data;
          renderCoursModuleList();
        })
        .catch(() => {
          $("#coursModuleGrid").innerHTML = `<div class="empty-state">Impossible de charger les cours.</div>`;
        });
    }

    function renderCoursModuleList() {
      $("#coursReaderWrap").style.display = "none";
      $("#coursModuleList").style.display = "block";
      const grid = $("#coursModuleGrid");
      grid.innerHTML = "";
      coursRegistry.forEach((m) => {
        const card = document.createElement("div");
        card.className = "eval-module-card" + (m.available ? "" : " disabled");
        card.innerHTML = `
          <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
            <div class="eval-module-name">${escapeHtml(m.module)}</div>
            ${m.available ? `<a class="card-dl" href="/cours/${encodeURIComponent(m.id)}" title="Ouvrir la page dédiée" onclick="event.stopPropagation()" style="text-decoration:none;">🔗</a>` : ""}
          </div>
          <div class="eval-module-desc">${escapeHtml(m.description || "")}</div>
          <div class="eval-module-meta">${m.available ? "Lire le cours" : "Bientôt disponible"}</div>
        `;
        if (m.available) {
          card.addEventListener("click", () => loadCours(m));
        }
        grid.appendChild(card);
      });
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
      const html = window.marked ? marked.parse(md) : md;
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

      if (window.renderMathInElement) {
        renderMathInElement(content, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
          ],
          throwOnError: false,
        });
      }
    }

    $("#coursBack").addEventListener("click", renderCoursModuleList);
    initThemePicker();

    $("#coursPdfBtn").addEventListener("click", () => {
      if (!coursCurrent) return;
      downloadCoursPdf({ id: coursCurrent.meta.id, content: coursCurrent.md });
    });

    loadCoursRegistry();
  }, []);

  return <div ref={containerRef} dangerouslySetInnerHTML={{ __html: MARKUP }} />;
}
