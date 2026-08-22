"use client";

import { useEffect, useRef } from "react";
import { chromeHtml, chromeScript, footerHtml } from "../_shared/chrome";

const MARKUP = `
${chromeHtml({ active: "news", showSearch: false })}

<div class="nw-view">
  <h2 class="eval-title">🆕 Concours ouverts</h2>
  <p class="eval-sub">Masters économie-gestion (ENCG, FSJES, FEG/FSEG) actuellement ouverts, mis à jour automatiquement depuis <a href="https://www.almaster-maroc.com/" target="_blank" rel="noopener">almaster-maroc.com</a> toutes les ~6 heures.</p>

  <div class="nw-toolbar">
    <div class="nw-search">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
      <input type="text" id="nwSearch" placeholder="Rechercher (établissement, ville, titre...)">
    </div>
    <div class="nw-chip-row" id="nwEtabChips"></div>
    <label class="nw-toggle">
      <input type="checkbox" id="nwShowClosed">
      Afficher les clôturés
    </label>
  </div>

  <div class="nw-stats" id="nwStats"></div>

  <div class="nw-grid" id="nwGrid"></div>
</div>

${footerHtml()}
`;

const NEWS_SOON_DAYS = 21;

export default function NewsPage() {
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

    let newsItems = [];
    let etabFilter = "Tous";
    let showClosed = false;

    function daysUntil(dateStr) {
      if (!dateStr) return null;
      const diffMs = new Date(dateStr + "T00:00:00") - new Date(new Date().toDateString());
      return Math.round(diffMs / 86400000);
    }

    function urgency(item) {
      if (!item.date_limite) return "none";
      const d = daysUntil(item.date_limite);
      if (d < 0) return "closed";
      if (d <= 7) return "urgent";
      if (d <= NEWS_SOON_DAYS) return "soon";
      return "ok";
    }

    function etabGroup(etab) {
      if (etab === "FSJES") return "FSJES";
      if (etab === "ENCG") return "ENCG";
      if (etab === "FEG" || etab === "FSEG") return "FEG/FSEG";
      return "Autre";
    }

    function etabColorClass(etab) {
      const g = etabGroup(etab);
      if (g === "FSJES") return "blue";
      if (g === "ENCG") return "violet";
      if (g === "FEG/FSEG") return "green";
      return "neutral";
    }

    function loadNews() {
      fetch("/api/news")
        .then((r) => r.json())
        .then((data) => {
          newsItems = data;
          renderChips();
          render();
        })
        .catch(() => {
          $("#nwGrid").innerHTML = `<div class="empty-state">Impossible de charger les concours ouverts.</div>`;
        });
    }

    function renderChips() {
      const groups = ["Tous", "FSJES", "ENCG", "FEG/FSEG", "Autre"];
      const wrap = $("#nwEtabChips");
      wrap.innerHTML = "";
      groups.forEach((g) => {
        const chip = document.createElement("span");
        chip.className = "chip" + (g === etabFilter ? " active" : "");
        chip.textContent = g;
        chip.addEventListener("click", () => {
          etabFilter = g;
          renderChips();
          render();
        });
        wrap.appendChild(chip);
      });
    }

    function urgencyLabel(item) {
      const u = urgency(item);
      if (u === "none") return `<span class="nw-badge">📅 Date limite non précisée</span>`;
      const label = `📅 ${escapeHtml(item.date_limite)}`;
      const d = daysUntil(item.date_limite);
      if (u === "closed") return `<span class="nw-badge nw-closed">${label} (clôturé)</span>`;
      if (u === "urgent") return `<span class="nw-badge nw-urgent">${label} — J-${d}</span>`;
      if (u === "soon") return `<span class="nw-badge nw-soon">${label} — J-${d}</span>`;
      return `<span class="nw-badge nw-ok">${label}</span>`;
    }

    function newsCard(item) {
      const card = document.createElement("div");
      card.className = `nw-card nw-u-${urgency(item)} etab-${etabColorClass(item.etablissement)}`;
      card.innerHTML = `
        <div class="nw-card-head">
          <span class="news-etab-chip">${escapeHtml(item.etablissement || "Autre")}</span>
          ${item.ville ? `<span class="news-ville">📍 ${escapeHtml(item.ville)}</span>` : ""}
          ${item.filiere ? `<span class="news-filiere-chip">${escapeHtml(item.filiere)}</span>` : ""}
        </div>
        <div class="news-card-title">${escapeHtml(item.titre)}</div>
        <div class="nw-card-bottom">
          ${urgencyLabel(item)}
          <div class="nw-card-actions">
            <a class="dl-btn" style="text-decoration:none;" href="${escapeHtml(item.lien_inscription || item.source)}" target="_blank" rel="noopener">S'inscrire</a>
            <a class="reset-btn" style="width:auto; text-decoration:none; display:inline-flex; align-items:center;" href="${escapeHtml(item.source)}" target="_blank" rel="noopener">🔗 Source</a>
          </div>
        </div>
      `;
      return card;
    }

    function render() {
      const q = $("#nwSearch").value.trim().toLowerCase();
      const grid = $("#nwGrid");
      const statsWrap = $("#nwStats");

      let items = newsItems.filter((i) => showClosed || !i.cloture);
      if (etabFilter !== "Tous") items = items.filter((i) => etabGroup(i.etablissement) === etabFilter);
      if (q) {
        items = items.filter((i) =>
          [i.titre, i.etablissement, i.ville, i.filiere].join(" ").toLowerCase().includes(q)
        );
      }

      const urgencyOrder = { urgent: 0, soon: 1, ok: 2, none: 3, closed: 4 };
      items = [...items].sort((a, b) => {
        const ua = urgencyOrder[urgency(a)];
        const ub = urgencyOrder[urgency(b)];
        if (ua !== ub) return ua - ub;
        if (ua <= 1) return daysUntil(a.date_limite) - daysUntil(b.date_limite);
        return (b.date_publication || "").localeCompare(a.date_publication || "");
      });

      const open = newsItems.filter((i) => !i.cloture);
      const urgentCount = open.filter((i) => urgency(i) === "urgent").length;
      statsWrap.innerHTML = `
        <span class="stat-pill">${open.length} concours ouvert${open.length > 1 ? "s" : ""}</span>
        ${urgentCount ? `<span class="stat-pill nw-stat-urgent">🔥 ${urgentCount} clôture${urgentCount > 1 ? "nt" : ""} sous 7 jours</span>` : ""}
      `;

      grid.innerHTML = "";
      if (!items.length) {
        grid.innerHTML = `<div class="empty-state">Aucun concours ne correspond à ces filtres.</div>`;
        return;
      }
      items.forEach((item) => grid.appendChild(newsCard(item)));
    }

    $("#nwSearch").addEventListener("input", render);
    $("#nwShowClosed").addEventListener("change", (e) => {
      showClosed = e.target.checked;
      render();
    });

    loadNews();
  }, []);

  return <div ref={containerRef} dangerouslySetInnerHTML={{ __html: MARKUP }} />;
}
