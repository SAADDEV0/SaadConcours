"use client";

import { useEffect, useRef } from "react";
import { chromeHtml, chromeScript, footerHtml } from "./_shared/chrome";

const ACTIONS = [
  {
    href: "/concours",
    icon: "📚",
    title: "Concours",
    desc: "Sujets réels de concours d'accès aux Masters, filtrables par ville, filière, année.",
    color: "blue",
  },
  {
    href: "/cours",
    icon: "📖",
    title: "Cours",
    desc: "Fiches synthétiques par module : définitions, formules, points clés à retenir.",
    color: "violet",
  },
  {
    href: "/evaluation",
    icon: "📝",
    title: "Évaluation",
    desc: "QCM d'auto-évaluation par module, en conditions concours, avec correction.",
    color: "green",
  },
  {
    href: "/news",
    icon: "🆕",
    title: "Concours ouverts",
    desc: "Masters économie-gestion actuellement ouverts, mis à jour automatiquement.",
    color: "amber",
  },
];

const MARKUP = `
${chromeHtml({ active: "home", showSearch: false })}

<div class="home-view">
  <section class="home-hero">
    <h1 class="home-hero-title">Prépare ton concours d'accès au Master 🎓</h1>
    <p class="home-hero-sub">
      Sujets réels, fiches de cours et QCM d'auto-évaluation pour les Masters spécialisés
      (CCA, GFCF, Finance, Fiscalité, Audit) des universités marocaines.
    </p>
  </section>

  <section class="home-alert" id="homeAlert" style="display:none;">
    <div class="home-alert-head">
      <span class="home-alert-title">🔔 Concours récemment ouverts</span>
      <a class="home-alert-link" href="/news">Voir tout →</a>
    </div>
    <div class="home-alert-list" id="homeAlertList"></div>
  </section>

  <section class="home-actions">
    <h2 class="home-section-title">Que veux-tu faire ?</h2>
    <div class="home-actions-grid" id="homeActionsGrid"></div>
  </section>
</div>

${footerHtml()}
`;

export default function HomePage() {
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

    const grid = $("#homeActionsGrid");
    ACTIONS.forEach((a) => {
      const card = document.createElement("a");
      card.href = a.href;
      card.className = `home-action-card color-${a.color}`;
      card.innerHTML = `
        <div class="home-action-icon">${a.icon}</div>
        <div class="home-action-title">${a.title}</div>
        <div class="home-action-desc">${a.desc}</div>
        <div class="home-action-go">Ouvrir →</div>
      `;
      grid.appendChild(card);
    });

    fetch("/api/news")
      .then((r) => r.json())
      .then((data) => {
        const open = data.filter((i) => !i.cloture);
        const recent = [...open]
          .sort((a, b) => (b.date_publication || "").localeCompare(a.date_publication || ""))
          .slice(0, 3);
        if (!recent.length) return;

        const list = $("#homeAlertList");
        list.innerHTML = "";
        recent.forEach((item) => {
          const row = document.createElement("a");
          row.className = "home-alert-item";
          row.href = item.lien_inscription || item.source || "/news";
          row.target = "_blank";
          row.rel = "noopener";
          row.innerHTML = `
            <span class="home-alert-etab">${escapeHtml(item.etablissement || "Autre")}</span>
            <span class="home-alert-titre">${escapeHtml(item.titre)}</span>
            ${item.ville ? `<span class="home-alert-ville">📍 ${escapeHtml(item.ville)}</span>` : ""}
          `;
          list.appendChild(row);
        });
        $("#homeAlert").style.display = "block";
      })
      .catch(() => {});
  }, []);

  return <div ref={containerRef} dangerouslySetInnerHTML={{ __html: MARKUP }} />;
}
