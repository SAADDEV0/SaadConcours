"use client";

import { useEffect, useRef } from "react";
import { chromeHtml, chromeScript, footerHtml, trackPdfDownload } from "../_shared/chrome";
import { addWatermark, addSiteHeader } from "../_shared/pdfWatermark";

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
    function stripInlineMd(s) {
      return s.replace(/\*\*/g, "").replace(/\$\$?/g, "").trim();
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
          <div class="eval-module-name">${escapeHtml(m.module)}</div>
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
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF({ unit: "mm", format: "a4" });
      const marginX = 18;
      const pageW = doc.internal.pageSize.getWidth();
      const pageH = doc.internal.pageSize.getHeight();
      const maxWidth = pageW - marginX * 2;
      const bottomLimit = pageH - 18;
      let y = 26;

      function ensureSpace(need) {
        if (y + need > bottomLimit) {
          doc.addPage();
          y = 26;
        }
      }

      function addWrappedLine(text, opts = {}) {
        const { bold = false, size = 10.5, gapAfter = 1.6, color = [20, 20, 25] } = opts;
        doc.setFont(undefined, bold ? "bold" : "normal");
        doc.setFontSize(size);
        doc.setTextColor(...color);
        const clean = stripInlineMd(text);
        if (!clean) {
          y += 2;
          return;
        }
        const wrapped = doc.splitTextToSize(clean, maxWidth);
        for (const wl of wrapped) {
          ensureSpace(size * 0.42);
          doc.text(wl, marginX, y);
          y += size * 0.42;
        }
        y += gapAfter;
      }

      function addTable(rows) {
        const cleanRows = rows.map((r) => r.map((cell) => stripInlineMd(cell)));
        ensureSpace(20);
        doc.autoTable({
          startY: y,
          margin: { left: marginX, right: marginX },
          head: [cleanRows[0]],
          body: cleanRows.slice(1),
          styles: { fontSize: 8.5, cellPadding: 2, overflow: "linebreak" },
          headStyles: { fillColor: [79, 140, 255], textColor: 255 },
          theme: "grid",
        });
        y = doc.lastAutoTable.finalY + 4;
      }

      const src = coursCurrent.md.split("\n");
      let i = 0;
      while (i < src.length) {
        const line = src[i];

        if (/^\s*$/.test(line)) {
          y += 2;
          i++;
          continue;
        }

        if (/^```/.test(line.trim())) {
          i++;
          const codeLines = [];
          while (i < src.length && !/^```/.test(src[i].trim())) {
            codeLines.push(src[i]);
            i++;
          }
          i++;
          codeLines.forEach((cl) => addWrappedLine(cl, { size: 9, color: [80, 80, 90] }));
          y += 1.5;
          continue;
        }

        if (/^\|/.test(line.trim())) {
          const rows = [];
          while (i < src.length && /^\|/.test(src[i].trim())) {
            const cells = src[i]
              .trim()
              .replace(/^\||\|$/g, "")
              .split("|")
              .map((s) => s.trim());
            if (!/^:?-+:?$/.test(cells.join(""))) rows.push(cells);
            i++;
          }
          if (rows.length) addTable(rows);
          continue;
        }

        const h1M = line.match(/^#\s+(.*)$/);
        if (h1M) {
          ensureSpace(12);
          addWrappedLine(h1M[1], { bold: true, size: 15, gapAfter: 3 });
          i++;
          continue;
        }

        const h2M = line.match(/^##\s+(.*)$/);
        if (h2M) {
          y += 2;
          ensureSpace(10);
          addWrappedLine(h2M[1], { bold: true, size: 13, gapAfter: 2.5 });
          i++;
          continue;
        }

        const h3M = line.match(/^###\s+(.*)$/);
        if (h3M) {
          ensureSpace(9);
          addWrappedLine(h3M[1], { bold: true, size: 11.5, gapAfter: 2 });
          i++;
          continue;
        }

        const bulletM = line.match(/^\s*-\s+(.*)$/);
        if (bulletM) {
          addWrappedLine("• " + bulletM[1]);
          i++;
          continue;
        }

        addWrappedLine(line);
        i++;
      }

      addWatermark(doc);
      addSiteHeader(doc);
      doc.save(`${coursCurrent.meta.id}.pdf`);
      trackPdfDownload("cours", coursCurrent.meta.id);
    });

    loadCoursRegistry();
  }, []);

  return <div ref={containerRef} dangerouslySetInnerHTML={{ __html: MARKUP }} />;
}
