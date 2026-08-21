"use client";

import { useEffect, useRef } from "react";
import { chromeHtml, chromeScript, pub } from "../_shared/chrome";

const MARKUP = `
${chromeHtml({ active: "cours", showSearch: false })}

<div class="cours-view" id="viewCours">

  <div id="coursModuleList">
    <h2 class="eval-title">📖 Cours par module</h2>
    <p class="eval-sub">Fiches de cours synthétiques : définitions, formules et points clés à retenir, par module.</p>
    <div class="grid" id="coursModuleGrid"></div>
  </div>

  <div id="coursReaderWrap" style="display:none;">
    <div class="eval-toolbar">
      <button class="reset-btn" id="coursBack">← Modules</button>
      <div class="eval-progress" id="coursReaderMeta"></div>
      <button class="dl-btn" id="coursPdfBtn">⬇ Télécharger en PDF</button>
    </div>
    <div class="cours-reader">
      <aside class="cours-toc" id="coursToc"></aside>
      <div class="cours-content" id="coursContent"></div>
    </div>
  </div>

</div>

<footer>Base de données collaborative de sujets de concours réels — sans corrigés. Sources citées dans chaque fiche.</footer>
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

    let coursRegistry = [];
    let coursCurrent = null;

    function loadCoursRegistry() {
      fetch(pub("data/cours/registry.json"))
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
      fetch(pub(meta.file))
        .then((r) => r.text())
        .then((md) => {
          coursCurrent = { meta, md };
          $("#coursModuleList").style.display = "none";
          $("#coursReaderWrap").style.display = "block";
          $("#coursReaderMeta").textContent = meta.module;
          renderCoursContent(md);
          window.scrollTo({ top: 0, behavior: "smooth" });
        })
        .catch(() => {
          $("#coursContent").innerHTML = `<div class="empty-state">Impossible de charger ce cours.</div>`;
        });
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

    $("#coursPdfBtn").addEventListener("click", () => {
      if (!coursCurrent) return;
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF({ unit: "mm", format: "a4" });
      const marginX = 18;
      const pageW = doc.internal.pageSize.getWidth();
      const pageH = doc.internal.pageSize.getHeight();
      const maxWidth = pageW - marginX * 2;
      const bottomLimit = pageH - 18;
      let y = 20;

      function ensureSpace(need) {
        if (y + need > bottomLimit) {
          doc.addPage();
          y = 20;
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

      doc.save(`${coursCurrent.meta.id}.pdf`);
    });

    loadCoursRegistry();
  }, []);

  return <div ref={containerRef} dangerouslySetInnerHTML={{ __html: MARKUP }} />;
}
