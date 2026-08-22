"use client";

import { useEffect, useRef } from "react";
import { chromeHtml, chromeScript, pub, trackPdfDownload, trackConcoursView } from "../_shared/chrome";
import { addWatermark, addSiteHeader } from "../_shared/pdfWatermark";

const MARKUP = `
${chromeHtml({ active: "concours", showSearch: true })}

<div class="layout" id="viewConcours">
  <aside class="filters">
    <h3>Filtrer</h3>
    <div class="filter-group">
      <label style="font-size:.8rem;color:var(--text-dim);">Ville</label>
      <select id="filterVille"><option value="">Toutes les villes</option></select>
    </div>
    <div class="filter-group">
      <label style="font-size:.8rem;color:var(--text-dim);">Filière</label>
      <select id="filterFiliere"><option value="">Toutes les filières</option></select>
    </div>
    <div class="filter-group">
      <label style="font-size:.8rem;color:var(--text-dim);">Établissement</label>
      <select id="filterEtab"><option value="">Tous les établissements</option></select>
    </div>
    <div class="filter-group">
      <label style="font-size:.8rem;color:var(--text-dim);">Année</label>
      <select id="filterAnnee"><option value="">Toutes les années</option></select>
    </div>
    <div class="filter-group">
      <label style="font-size:.8rem;color:var(--text-dim);">Module requis</label>
      <div class="chip-list" id="moduleChips"></div>
    </div>
    <button class="reset-btn" id="resetBtn">✕ Réinitialiser les filtres</button>
  </aside>

  <main>
    <div class="results-header">
      <div class="results-count" id="resultsCount"></div>
    </div>
    <div class="grid" id="grid"></div>
  </main>
</div>

<footer>Base de données collaborative de sujets de concours réels — sans corrigés. Sources citées dans chaque fiche.</footer>

<div class="modal-overlay" id="modalOverlay">
  <div class="modal">
    <div class="modal-header">
      <div>
        <h2 id="modalTitle"></h2>
        <div class="sub" id="modalSub"></div>
      </div>
      <div class="modal-actions">
        <button class="dl-btn" id="modalDownload" title="Télécharger l'énoncé (PDF)">⬇ Télécharger</button>
        <button class="close-btn" id="modalClose">✕</button>
      </div>
    </div>
    <div class="modal-body">
      <div class="info-row" id="modalInfoRow"></div>
      <div class="tab-bar">
        <button class="tab-btn active" data-tab="enonce">📝 Énoncé</button>
        <button class="tab-btn" data-tab="corrige" id="tabBtnCorrige" style="display:none;">✅ Corrigé</button>
        <button class="tab-btn" data-tab="images">🖼️ Extrait réel</button>
        <button class="tab-btn" data-tab="source">🔗 Source</button>
      </div>
      <div class="tab-panel active" id="panel-enonce"><div class="enonce-content" id="enonceContent"></div></div>
      <div class="tab-panel" id="panel-corrige">
        <div class="corrige-disclaimer">⚠️ Corrigé indicatif (relecture humaine non garantie) — vérifie les calculs avant de t'y fier pour réviser.</div>
        <div class="enonce-content" id="corrigeContent"></div>
      </div>
      <div class="tab-panel" id="panel-images"><div class="image-gallery" id="imageGallery"></div></div>
      <div class="tab-panel" id="panel-source"><div class="source-box" id="sourceContent"></div></div>
    </div>
  </div>
</div>

<div class="lightbox" id="lightbox"><img id="lightboxImg" src="" alt=""></div>
`;

export default function ConcoursPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    chromeScript();

    let ALL = [];
    let filtered = [];
    let activeModule = "";
    let currentModalConcours = null;

    const root = containerRef.current;
    const $ = (sel) => root.querySelector(sel);
    const $$ = (sel) => root.querySelectorAll(sel);

    function uniq(arr) {
      return [...new Set(arr)].filter(Boolean).sort();
    }

    function escapeHtml(s) {
      return String(s ?? "").replace(
        /[&<>"']/g,
        (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m])
      );
    }

    function fillSelect(sel, values) {
      const el = $(sel);
      values.forEach((v) => {
        const opt = document.createElement("option");
        opt.value = v;
        opt.textContent = v;
        el.appendChild(opt);
      });
    }

    function initFilters() {
      const villes = uniq(ALL.map((c) => c.ville));
      const filieres = uniq(ALL.map((c) => c.filiere));
      const etabs = uniq(ALL.map((c) => c.etablissement));
      const annees = uniq(ALL.map((c) => c.annee)).sort((a, b) => String(b).localeCompare(String(a)));
      const modules = uniq(ALL.flatMap((c) => c.modules || []));

      fillSelect("#filterVille", villes);
      fillSelect("#filterFiliere", filieres);
      fillSelect("#filterEtab", etabs);
      fillSelect("#filterAnnee", annees);

      const chipWrap = $("#moduleChips");
      modules.forEach((m) => {
        const chip = document.createElement("span");
        chip.className = "chip";
        chip.textContent = m;
        chip.addEventListener("click", () => {
          activeModule = activeModule === m ? "" : m;
          $$(".chip").forEach((c) => c.classList.toggle("active", c.textContent === activeModule));
          applyFilters();
        });
        chipWrap.appendChild(chip);
      });

      ["#filterVille", "#filterFiliere", "#filterEtab", "#filterAnnee"].forEach((id) => {
        $(id).addEventListener("change", applyFilters);
      });
      $("#searchInput").addEventListener("input", applyFilters);
      $("#resetBtn").addEventListener("click", () => {
        ["#filterVille", "#filterFiliere", "#filterEtab", "#filterAnnee"].forEach((id) => ($(id).value = ""));
        $("#searchInput").value = "";
        activeModule = "";
        $$(".chip").forEach((c) => c.classList.remove("active"));
        applyFilters();
      });
    }

    function applyFilters() {
      const ville = $("#filterVille").value;
      const filiere = $("#filterFiliere").value;
      const etab = $("#filterEtab").value;
      const annee = $("#filterAnnee").value;
      const q = $("#searchInput").value.trim().toLowerCase();

      filtered = ALL.filter((c) => {
        if (ville && c.ville !== ville) return false;
        if (filiere && c.filiere !== filiere) return false;
        if (etab && c.etablissement !== etab) return false;
        if (annee && String(c.annee) !== annee) return false;
        if (activeModule && !(c.modules || []).includes(activeModule)) return false;
        if (q) {
          const hay = [c.ville, c.etablissement, c.filiere, c.annee, c.notions_cles, c.enonce_md, (c.modules || []).join(" ")]
            .join(" ")
            .toLowerCase();
          if (!hay.includes(q)) return false;
        }
        return true;
      });

      renderGrid();
    }

    function renderGrid() {
      $("#statPill").textContent = `${ALL.length} concours`;
      $("#resultsCount").textContent = `${filtered.length} résultat${filtered.length > 1 ? "s" : ""}`;
      const grid = $("#grid");
      grid.innerHTML = "";
      if (filtered.length === 0) {
        grid.innerHTML = `<div class="empty-state">Aucun concours ne correspond à ces filtres.</div>`;
        return;
      }
      filtered.forEach((c) => {
        const card = document.createElement("div");
        card.className = "card";
        const hasImg = (c.images || []).length > 0;
        const hasCorrige = Boolean(c.corrige_md);
        card.innerHTML = `
          <div class="card-top">
            <div class="card-title">${escapeHtml(c.etablissement)}</div>
            <div style="display:flex; align-items:center; gap:6px; flex-shrink:0;">
              <div class="card-year">${escapeHtml(String(c.annee))}</div>
              <button class="card-dl" title="Télécharger l'énoncé (PDF)">⬇</button>
            </div>
          </div>
          <div class="card-meta">📍 ${escapeHtml(c.ville)} · ${escapeHtml(c.filiere)}</div>
          <div class="card-modules">${(c.modules || [])
            .slice(0, 4)
            .map((m) => `<span class="mod-tag">${escapeHtml(m)}</span>`)
            .join("")}${(c.modules || []).length > 4 ? `<span class="mod-tag">+${c.modules.length - 4}</span>` : ""}</div>
          <div class="card-bottom">
            <span class="diff-badge">Difficulté : ${escapeHtml(c.difficulte || "?")}</span>
            <span style="display:flex; gap:6px;">
              ${hasCorrige ? '<span class="corrige-badge">✅ corrigé</span>' : ""}
              ${hasImg ? '<span class="img-badge">🖼️ scan réel</span>' : ""}
            </span>
          </div>
        `;
        card.addEventListener("click", () => openModal(c));
        card.querySelector(".card-dl").addEventListener("click", (e) => {
          e.stopPropagation();
          downloadEnonce(c);
        });
        grid.appendChild(card);
      });
    }

    function formatQCM(md) {
      if (!md) return md;
      const lines = md.split("\n");
      const out = [];
      const order = "abcde";

      for (let line of lines) {
        const markerRe = /\b([A-Ea-e])[.:]\s+/g;
        const matches = [...line.matchAll(markerRe)];

        if (matches.length >= 3) {
          const letters = matches.map((m) => m[1].toLowerCase());
          let pos = -1,
            seqOk = letters[0] === "a";
          for (const l of letters) {
            const idx = order.indexOf(l);
            if (idx <= pos) {
              seqOk = false;
              break;
            }
            pos = idx;
          }
          if (seqOk) {
            const stem = line.slice(0, matches[0].index).trim();
            if (stem) out.push(stem);
            for (let i = 0; i < matches.length; i++) {
              const start = matches[i].index + matches[i][0].length;
              const end = i + 1 < matches.length ? matches[i + 1].index : line.length;
              let txt = line
                .slice(start, end)
                .trim()
                .replace(/[;.]\s*$/, "")
                .trim();
              out.push(`- **${matches[i][1].toLowerCase()}.** ${txt}`);
            }
            continue;
          }
        }

        const singleM = line.match(/^\s*([A-Ea-e])[.:]\s+(.+)$/);
        if (singleM) {
          out.push(`- **${singleM[1].toLowerCase()}.** ${singleM[2].trim()}`);
          continue;
        }

        out.push(line);
      }
      return out.join("\n");
    }

    function openLightbox(src) {
      $("#lightboxImg").src = src;
      $("#lightbox").classList.add("open");
    }
    function closeLightbox() {
      $("#lightbox").classList.remove("open");
    }

    function openModal(c) {
      currentModalConcours = c;
      trackConcoursView(c.id);
      $("#modalTitle").textContent = `${c.etablissement} — ${c.annee}`;
      $("#modalSub").textContent = `${c.filiere} · ${c.ville}`;
      $("#modalInfoRow").innerHTML = `
        <span class="info-tag">📍 ${escapeHtml(c.ville)}</span>
        <span class="info-tag">🏫 ${escapeHtml(c.etablissement)}</span>
        <span class="info-tag">🎓 ${escapeHtml(c.filiere)}</span>
        <span class="info-tag">📅 ${escapeHtml(String(c.annee))}</span>
        <span class="info-tag">⭐ ${escapeHtml(c.difficulte || "?")}</span>
      `;

      const formattedEnonce = formatQCM(c.enonce_md);
      const enonceHtml = window.marked ? marked.parse(formattedEnonce || "*Énoncé non disponible.*") : formattedEnonce || "";
      $("#enonceContent").innerHTML = enonceHtml;

      const hasCorrige = Boolean(c.corrige_md);
      $("#tabBtnCorrige").style.display = hasCorrige ? "" : "none";
      $("#corrigeContent").innerHTML = hasCorrige
        ? window.marked
          ? marked.parse(c.corrige_md)
          : c.corrige_md
        : "";

      const gallery = $("#imageGallery");
      gallery.innerHTML = "";
      if ((c.images || []).length) {
        c.images.forEach((src) => {
          const img = document.createElement("img");
          img.src = pub(src);
          img.loading = "lazy";
          img.addEventListener("click", () => openLightbox(pub(src)));
          gallery.appendChild(img);
        });
      } else {
        gallery.innerHTML = "<div class=\"no-images\">Image source non récupérable (lien d'origine inaccessible).</div>";
      }

      $("#sourceContent").innerHTML = window.marked ? marked.parse(c.source || "") : c.source || "";

      $$(".tab-btn").forEach((b) => b.classList.toggle("active", b.dataset.tab === "enonce"));
      $$(".tab-panel").forEach((p) => p.classList.toggle("active", p.id === "panel-enonce"));

      $("#modalOverlay").classList.add("open");
      document.body.style.overflow = "hidden";

      if (window.renderMathInElement) {
        renderMathInElement($("#enonceContent"), {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
          ],
          throwOnError: false,
        });
      }
    }

    function closeModal() {
      $("#modalOverlay").classList.remove("open");
      document.body.style.overflow = "";
    }

    function stripInlineMd(s) {
      return s.replace(/\*\*/g, "").replace(/\$\$?/g, "").trim();
    }

    async function loadImageAsDataURL(src) {
      const res = await fetch(src);
      const blob = await res.blob();
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    }

    function getImageDimensions(dataUrl) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve({ width: img.width, height: img.height });
        img.onerror = reject;
        img.src = dataUrl;
      });
    }

    async function downloadEnonce(c) {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF({ unit: "mm", format: "a4" });
      const marginX = 18;
      const pageW = doc.internal.pageSize.getWidth();
      const pageH = doc.internal.pageSize.getHeight();
      const maxWidth = pageW - marginX * 2;
      const bottomLimit = pageH - 20;
      let y = 26;

      function ensureSpace(need) {
        if (y + need > bottomLimit) {
          doc.addPage();
          y = 26;
        }
      }

      function addWrappedLine(text, opts = {}) {
        const { bold = false, size = 10.5, indent = 0, gapAfter = 1.6, color = [20, 20, 25] } = opts;
        doc.setFont(undefined, bold ? "bold" : "normal");
        doc.setFontSize(size);
        doc.setTextColor(...color);
        const clean = stripInlineMd(text);
        if (!clean) {
          y += 2;
          return;
        }
        const wrapped = doc.splitTextToSize(clean, maxWidth - indent);
        for (const wl of wrapped) {
          ensureSpace(size * 0.42);
          doc.text(wl, marginX + indent, y);
          y += size * 0.42;
        }
        y += gapAfter;
      }

      function addPrefixedLine(prefix, rest, opts = {}) {
        const { indent = 0, bullet = false, size = 10.5, gapAfter = 1.8 } = opts;
        doc.setFontSize(size);
        const bx = marginX + indent + (bullet ? 4 : 0);
        doc.setFont(undefined, "bold");
        const prefixClean = stripInlineMd(prefix);
        const prefixW = doc.getTextWidth(prefixClean + " ");
        const restClean = stripInlineMd(rest);
        const wrapped = doc.splitTextToSize(restClean, maxWidth - indent - prefixW - (bullet ? 4 : 0));
        ensureSpace(size * 0.42);
        if (bullet) {
          doc.setFont(undefined, "normal");
          doc.text("•", marginX + indent, y);
        }
        doc.setFont(undefined, "bold");
        doc.text(prefixClean, bx, y);
        doc.setFont(undefined, "normal");
        if (wrapped[0]) doc.text(wrapped[0], bx + prefixW, y);
        y += size * 0.42;
        for (let i = 1; i < wrapped.length; i++) {
          ensureSpace(size * 0.42);
          doc.text(wrapped[i], bx, y);
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

      doc.setFont(undefined, "bold");
      doc.setFontSize(15);
      doc.setTextColor(20, 20, 25);
      doc.text(`${c.etablissement} — ${c.annee}`, marginX, y);
      y += 7;
      doc.setFont(undefined, "normal");
      doc.setFontSize(10.5);
      doc.setTextColor(90, 90, 100);
      doc.text(`${c.filiere} · ${c.ville}${c.difficulte ? " · Difficulté : " + c.difficulte : ""}`, marginX, y);
      y += 5;
      doc.setDrawColor(200, 200, 210);
      doc.line(marginX, y, pageW - marginX, y);
      y += 7;

      function renderMarkdown(md) {
        const src = (md || "").split("\n");
        let i = 0;
        while (i < src.length) {
          const line = src[i];

          if (/^\s*$/.test(line) || /^\s*---+\s*$/.test(line)) {
            y += 2.4;
            i++;
            continue;
          }

          if (/^>/.test(line.trim())) {
            addWrappedLine(line.replace(/^>\s*/, ""), { size: 9.5, color: [150, 110, 30], gapAfter: 2.5 });
            i++;
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

          const headingM = line.match(/^(#{2,4})\s+(.*)$/);
          if (headingM) {
            y += 2;
            addWrappedLine(headingM[2], { bold: true, size: 12, gapAfter: 2.5 });
            i++;
            continue;
          }

          const bulletM = line.match(/^\s*-\s+\*\*([^*]+)\*\*\s*(.*)$/);
          if (bulletM) {
            addPrefixedLine(bulletM[1], bulletM[2], { indent: 4, bullet: true });
            i++;
            continue;
          }
          const bulletPlainM = line.match(/^\s*-\s+(.*)$/);
          if (bulletPlainM) {
            addPrefixedLine("•", bulletPlainM[1], { indent: 4 });
            i++;
            continue;
          }

          const stemM = line.match(/^\*\*([^*]+)\*\*\s*(.*)$/);
          if (stemM) {
            y += 1.5;
            addPrefixedLine(stemM[1], stemM[2], { size: 10.5, gapAfter: 2 });
            i++;
            continue;
          }

          addWrappedLine(line);
          i++;
        }
      }

      renderMarkdown(c.enonce_md || "Énoncé non disponible.");

      y += 4;
      ensureSpace(14);
      doc.setDrawColor(200, 200, 210);
      doc.line(marginX, y, pageW - marginX, y);
      y += 6;
      addWrappedLine("Source", { bold: true, size: 10 });
      addWrappedLine(c.source || "non précisée", { size: 9, color: [110, 110, 120] });

      if (c.corrige_md) {
        doc.addPage();
        y = 26;
        doc.setFont(undefined, "bold");
        doc.setFontSize(14);
        doc.setTextColor(20, 20, 25);
        doc.text("Corrigé", marginX, y);
        y += 6;
        addWrappedLine(
          "Corrigé indicatif (relecture humaine non garantie) — vérifie les calculs avant de t'y fier.",
          { size: 8.5, color: [180, 120, 20], gapAfter: 3 }
        );
        doc.setDrawColor(200, 200, 210);
        doc.line(marginX, y, pageW - marginX, y);
        y += 6;
        renderMarkdown(c.corrige_md);
      }

      for (const imgPath of c.images || []) {
        try {
          const dataUrl = await loadImageAsDataURL(pub(imgPath));
          const { width, height } = await getImageDimensions(dataUrl);
          doc.addPage();
          const availW = pageW - marginX * 2;
          const availH = pageH - 32;
          const scale = Math.min(availW / width, availH / height, 1);
          const imgW = width * scale;
          const imgH = height * scale;
          const x = (pageW - imgW) / 2;
          doc.setFont(undefined, "bold");
          doc.setFontSize(10);
          doc.setTextColor(90, 90, 100);
          doc.text("Extrait scanné", marginX, 15);
          const format = (dataUrl.match(/data:image\/(\w+);/) || [])[1]?.toUpperCase() || "JPEG";
          doc.addImage(dataUrl, format === "JPG" ? "JPEG" : format, x, 20, imgW, imgH);
        } catch (err) {
          // Skip images that fail to load rather than aborting the whole PDF.
        }
      }

      addWatermark(doc);
      addSiteHeader(doc);
      doc.save(`${c.id}.pdf`);
      trackPdfDownload("concours", c.id);
    }

    $("#modalClose").addEventListener("click", closeModal);
    $("#modalOverlay").addEventListener("click", (e) => {
      if (e.target.id === "modalOverlay") closeModal();
    });
    $("#modalDownload").addEventListener("click", () => {
      if (currentModalConcours) downloadEnonce(currentModalConcours);
    });
    $$(".tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        $$(".tab-btn").forEach((b) => b.classList.remove("active"));
        $$(".tab-panel").forEach((p) => p.classList.remove("active"));
        btn.classList.add("active");
        $("#panel-" + btn.dataset.tab).classList.add("active");
      });
    });
    $("#lightbox").addEventListener("click", closeLightbox);

    function onKeydown(e) {
      if (e.key === "Escape") {
        closeModal();
        closeLightbox();
      }
    }
    document.addEventListener("keydown", onKeydown);

    fetch("/api/concours")
      .then((r) => r.json())
      .then((data) => {
        ALL = data;
        initFilters();
        applyFilters();
      })
      .catch((err) => {
        $("#grid").innerHTML = `<div class="empty-state">Erreur de chargement des données : ${err}</div>`;
      });

    return () => {
      document.removeEventListener("keydown", onKeydown);
    };
  }, []);

  return <div ref={containerRef} dangerouslySetInnerHTML={{ __html: MARKUP }} />;
}
