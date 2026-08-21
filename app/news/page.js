"use client";

import { useEffect, useRef } from "react";
import { chromeHtml, chromeScript, pub } from "../_shared/chrome";

const MARKUP = `
${chromeHtml({ active: "news", showSearch: false })}

<div class="eval-view" id="viewNews">
  <h2 class="eval-title">🆕 Concours ouverts</h2>
  <p class="eval-sub">Masters économie-gestion (ENCG, FSJES, FEG/FSEG) actuellement ouverts, mis à jour automatiquement depuis <a href="https://www.almaster-maroc.com/" target="_blank" rel="noopener">almaster-maroc.com</a> toutes les ~6 heures.</p>
  <div class="news-stats" id="newsStats"></div>

  <div class="news-columns">
    <div class="news-column">
      <h3 class="news-col-title">🆕 Derniers masters ouverts</h3>
      <div class="grid" id="newsRecentGrid"></div>
    </div>
    <div class="news-column">
      <h3 class="news-col-title">⏳ Bientôt fermés</h3>
      <div class="grid" id="newsSoonGrid"></div>
    </div>
  </div>

  <div id="newsClosedWrap" style="display:none; margin-top:26px;">
    <button class="reset-btn" id="newsShowClosedBtn" style="width:auto; padding:8px 14px;">Voir aussi les concours clôturés</button>
    <div class="grid" id="newsClosedGrid" style="display:none; margin-top:14px;"></div>
  </div>
</div>

<footer>Base de données collaborative de sujets de concours réels — sans corrigés. Sources citées dans chaque fiche.</footer>
`;

const NEWS_SOON_DAYS = 21;
const NEWS_MAX_RECENT = 10;

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

    let newsItems = null;

    function loadNews() {
      fetch(pub("data/news.json"))
        .then((r) => r.json())
        .then((data) => {
          newsItems = data;
          renderNews();
        })
        .catch(() => {
          newsItems = [];
          $("#newsRecentGrid").innerHTML = `<div class="empty-state">Impossible de charger les concours ouverts.</div>`;
          $("#newsSoonGrid").innerHTML = "";
        });
    }

    function daysUntil(dateStr) {
      if (!dateStr) return null;
      const diffMs = new Date(dateStr + "T00:00:00") - new Date(new Date().toDateString());
      return Math.round(diffMs / 86400000);
    }

    function newsBadge(item) {
      if (!item.date_limite) return `<span class="news-badge">📅 Date limite non précisée</span>`;
      const d = daysUntil(item.date_limite);
      const label = `📅 Date limite : ${escapeHtml(item.date_limite)}`;
      if (d < 0) return `<span class="news-badge closed">${label} (clôturé)</span>`;
      if (d <= 7) return `<span class="news-badge urgent">${label} — J-${d}</span>`;
      if (d <= 21) return `<span class="news-badge soon">${label}</span>`;
      return `<span class="news-badge ok">${label}</span>`;
    }

    function etabColor(etab) {
      if (etab === "FSJES") return "blue";
      if (etab === "ENCG") return "violet";
      if (etab === "FEG" || etab === "FSEG") return "green";
      return "neutral";
    }

    function newsCard(item) {
      const card = document.createElement("div");
      card.className = `card news-card etab-${etabColor(item.etablissement)}`;
      card.style.cursor = "default";
      card.innerHTML = `
        <div class="news-card-head">
          <span class="news-etab-chip">${escapeHtml(item.etablissement || "Autre")}</span>
          ${item.ville ? `<span class="news-ville">📍 ${escapeHtml(item.ville)}</span>` : ""}
          ${item.filiere ? `<span class="news-filiere-chip">${escapeHtml(item.filiere)}</span>` : ""}
        </div>
        <div class="news-card-title">${escapeHtml(item.titre)}</div>
        <div class="card-bottom">${newsBadge(item)}</div>
        <div style="display:flex; gap:8px; margin-top:10px; flex-wrap:wrap;">
          <a class="dl-btn" style="text-decoration:none;" href="${escapeHtml(item.lien_inscription || item.source)}" target="_blank" rel="noopener">S'inscrire</a>
          <a class="reset-btn" style="width:auto; text-decoration:none; display:inline-flex; align-items:center;" href="${escapeHtml(item.source)}" target="_blank" rel="noopener">🔗 Source</a>
        </div>
      `;
      return card;
    }

    function renderNews() {
      const recentGrid = $("#newsRecentGrid");
      const soonGrid = $("#newsSoonGrid");
      const statsWrap = $("#newsStats");
      recentGrid.innerHTML = "";
      soonGrid.innerHTML = "";
      statsWrap.innerHTML = "";

      if (!newsItems.length) {
        recentGrid.innerHTML = `<div class="empty-state">Aucun concours ouvert détecté pour le moment. Revenez plus tard — cette liste se met à jour automatiquement depuis almaster-maroc.com.</div>`;
        $("#newsClosedWrap").style.display = "none";
        return;
      }

      const open = newsItems.filter((i) => !i.cloture);
      const closed = newsItems.filter((i) => i.cloture);

      const recent = [...open]
        .sort((a, b) => (b.date_publication || "").localeCompare(a.date_publication || ""))
        .slice(0, NEWS_MAX_RECENT);

      const soon = open
        .filter((i) => i.date_limite && daysUntil(i.date_limite) <= NEWS_SOON_DAYS)
        .sort((a, b) => (a.date_limite || "").localeCompare(b.date_limite || ""));

      statsWrap.innerHTML = `
        <span class="stat-pill">${open.length} concours ouvert${open.length > 1 ? "s" : ""}</span>
        <span class="stat-pill">${soon.length} bientôt fermé${soon.length > 1 ? "s" : ""}</span>
      `;

      if (!recent.length) {
        recentGrid.innerHTML = `<div class="empty-state">Aucun concours ouvert pour le moment.</div>`;
      } else {
        recent.forEach((item) => recentGrid.appendChild(newsCard(item)));
      }

      if (!soon.length) {
        soonGrid.innerHTML = `<div class="news-empty-block"><span class="news-empty-icon">⏳</span>Aucun concours avec une date limite connue à moins de ${NEWS_SOON_DAYS} jours pour l'instant.</div>`;
      } else {
        soon.forEach((item) => soonGrid.appendChild(newsCard(item)));
      }

      $("#newsClosedWrap").style.display = closed.length ? "block" : "none";
      $("#newsClosedGrid").innerHTML = "";
      closed.forEach((item) => $("#newsClosedGrid").appendChild(newsCard(item)));
    }

    $("#newsShowClosedBtn").addEventListener("click", () => {
      const grid = $("#newsClosedGrid");
      const showing = grid.style.display === "grid";
      grid.style.display = showing ? "none" : "grid";
      $("#newsShowClosedBtn").textContent = showing ? "Voir aussi les concours clôturés" : "Masquer les concours clôturés";
    });

    loadNews();
  }, []);

  return <div ref={containerRef} dangerouslySetInnerHTML={{ __html: MARKUP }} />;
}
