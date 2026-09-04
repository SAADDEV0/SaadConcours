"use client";

import { useEffect } from "react";
import { chromeScript } from "../../_shared/chrome";
import { downloadCoursPdf } from "../../_shared/coursPdf";
import { renderMathWhenReady } from "../../_shared/mathMarkdown";

// This page is server-rendered for SEO (see page.js): the fiche's content
// (#coursContent) is already real HTML in the initial response. This just
// wires up the client-only extras on top of it — header behavior, KaTeX
// math render, the sommaire built from the (already-present) headings, the
// reading-theme picker, and the PDF button — same features the old /cours
// SPA reader had, now living on the real per-fiche URL. Mirrors
// ConcoursDetailClient.js / EvaluationDetailClient.js.
const COURS_THEMES = [
  { id: "default", label: "Thème du site", swatch: "linear-gradient(135deg,#1b1f2a,#4f8cff)" },
  { id: "sepia", label: "Sépia · Papier", swatch: "linear-gradient(135deg,#f4ecd8,#a8763e)" },
  { id: "nord", label: "Nord", swatch: "linear-gradient(135deg,#2e3440,#88c0d0)" },
  { id: "obsidian", label: "Obsidian", swatch: "linear-gradient(135deg,#1e1e2e,#c9a7ff)" },
  { id: "contrast", label: "Contraste élevé", swatch: "linear-gradient(135deg,#000000,#f5c518)" },
  { id: "night", label: "Nuit douce", swatch: "linear-gradient(135deg,#120e0c,#e0955c)" },
];
const COURS_THEME_KEY = "cours_md_theme";

function escapeHtml(s) {
  return String(s ?? "").replace(
    /[&<>"']/g,
    (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m])
  );
}

export default function CoursDetailClient({ cours }) {
  useEffect(() => {
    chromeScript();

    const content = document.getElementById("coursContent");
    renderMathWhenReady(content);

    const toc = document.getElementById("coursToc");
    if (toc && content) {
      toc.innerHTML = '<div class="cours-toc-title">Sommaire</div>';
      content.querySelectorAll("h2, h3").forEach((h, i) => {
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
    }

    function renderThemePanel(active) {
      const panel = document.getElementById("coursThemePanel");
      if (!panel) return;
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
      const reader = document.getElementById("coursReader");
      if (reader) reader.dataset.mdTheme = id;
      localStorage.setItem(COURS_THEME_KEY, id);
      renderThemePanel(id);
      const panel = document.getElementById("coursThemePanel");
      if (panel) panel.style.display = "none";
    }

    const reader = document.getElementById("coursReader");
    const saved = localStorage.getItem(COURS_THEME_KEY) || "default";
    if (reader) reader.dataset.mdTheme = saved;
    renderThemePanel(saved);

    const themeBtn = document.getElementById("coursThemeBtn");
    if (themeBtn && themeBtn.dataset.wired !== "1") {
      themeBtn.dataset.wired = "1";
      themeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const panel = document.getElementById("coursThemePanel");
        panel.style.display = panel.style.display === "none" ? "grid" : "none";
      });
      document.addEventListener("click", (e) => {
        const picker = document.getElementById("coursThemePicker");
        if (picker && !picker.contains(e.target)) {
          const panel = document.getElementById("coursThemePanel");
          if (panel) panel.style.display = "none";
        }
      });
    }
  }, [cours.id]);

  return (
    <div className="cd-actions">
      <button className="dl-btn" onClick={() => downloadCoursPdf(cours)}>
        ⬇ Télécharger en PDF
      </button>
      <a className="reset-btn" style={{ width: "auto", textDecoration: "none", display: "inline-flex", alignItems: "center" }} href="/cours">
        ← Retour à tous les cours
      </a>
    </div>
  );
}
