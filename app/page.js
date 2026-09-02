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
  {
    href: "/blog",
    icon: "📰",
    title: "Blog",
    desc: "Méthode, matières à préparer et conseils pour réussir ton concours d'accès au Master.",
    color: "red",
  },
];

const MARKUP = `
${chromeHtml({ active: "home", showSearch: false })}

<div class="home-view">
  <section class="home-hero">
    <h1 class="home-hero-title">Prépare ton concours d'accès au Master 🎓</h1>
    <p class="home-hero-sub">
      Sujets réels, fiches de cours et QCM d'auto-évaluation pour les Masters économie-gestion
      (Finance & Audit, Management & RH, Marketing & Commerce, Économie Appliquée, Data & Économétrie)
      des universités marocaines.
    </p>
  </section>

  <div id="homeBannerAd"></div>

  <section class="home-recent" id="homeRecent" style="display:none;">
    <div class="home-alert-head">
      <span class="home-alert-title">🆕 Derniers concours ajoutés</span>
      <a class="home-alert-link" href="/concours">Voir tout →</a>
    </div>
    <div class="cd-related-grid" id="homeRecentGrid"></div>
  </section>

  <section class="urgent-alert" id="urgentAlert" style="display:none;">
    <div class="urgent-alert-head">
      <span class="urgent-alert-title">⏰ <strong id="urgentCount"></strong> concours ferment bientôt</span>
      <a class="home-alert-link" href="/news">Voir tout →</a>
    </div>
    <div class="urgent-alert-list" id="urgentAlertList"></div>
    <form class="alert-subscribe-form" id="alertForm">
      <input type="email" id="alertEmail" placeholder="Ton email pour être alerté avant la clôture" required>
      <button type="submit">🔔 M'alerter</button>
    </form>
    <div class="alert-form-msg" id="alertFormMsg"></div>
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

    function daysUntil(dateStr) {
      if (!dateStr) return null;
      const diffMs = new Date(dateStr + "T00:00:00") - new Date(new Date().toDateString());
      return Math.round(diffMs / 86400000);
    }

    fetch("/api/concours")
      .then((r) => r.json())
      .then((concours) => {
        // Storage appends new entries to the end of the array (see
        // lib/store.js addItem) - same "tail = most recent" logic as the
        // admin dashboard's "Derniers concours ajoutés" widget.
        const recentConcours = concours.slice(-4).reverse();
        if (!recentConcours.length) return;
        const grid = $("#homeRecentGrid");
        grid.innerHTML = "";
        recentConcours.forEach((c) => {
          const a = document.createElement("a");
          a.className = "cd-related-item";
          a.href = `/concours/${encodeURIComponent(c.id)}`;
          a.innerHTML = `
            <div class="cd-related-title">${escapeHtml(c.etablissement)} — ${escapeHtml(c.ville)} — ${escapeHtml(String(c.annee))}</div>
            <div class="cd-related-sub">${escapeHtml(c.master_reel || c.filiere || "")}</div>
            ${c.date_ajout ? `<div class="cd-related-date">🗓️ Ajouté le ${escapeHtml(c.date_ajout)}</div>` : ""}
          `;
          grid.appendChild(a);
        });
        $("#homeRecent").style.display = "block";
      })
      .catch(() => {});

    Promise.all([
      fetch("/api/news").then((r) => r.json()),
      fetch("/api/settings")
        .then((r) => r.json())
        .catch(() => null),
    ])
      .then(([rawData, settings]) => {
        if (settings?.adsEnabled && settings?.adsHomeBannerEnabled && settings?.adsPublisherId && settings?.adsHomeBannerSlot) {
          const holder = $("#homeBannerAd");
          holder.innerHTML = `
            <div class="ad-slot" aria-label="Publicité">
              <span class="ad-slot-label">Publicité</span>
              <ins class="adsbygoogle" style="display:block" data-ad-client="${settings.adsPublisherId}" data-ad-slot="${settings.adsHomeBannerSlot}" data-ad-format="auto" data-full-width-responsive="true"></ins>
            </div>
          `;
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }

        // Same établissement visibility filter as /news, so the "closing
        // soon" count here always matches what students actually see when
        // they click through - showing 11 here and 3 there would look broken.
        const visibles = settings?.newsEtablissementsVisibles || [];
        const data = visibles.length ? rawData.filter((i) => visibles.includes(i.etablissement)) : rawData;
        const open = data.filter((i) => !i.cloture);

        const urgent = open
          .filter((i) => i.date_limite && daysUntil(i.date_limite) >= 0 && daysUntil(i.date_limite) <= 7)
          .sort((a, b) => daysUntil(a.date_limite) - daysUntil(b.date_limite));
        if (urgent.length) {
          $("#urgentCount").textContent = urgent.length;
          const uList = $("#urgentAlertList");
          uList.innerHTML = "";
          urgent.slice(0, 5).forEach((item) => {
            const row = document.createElement("div");
            row.className = "urgent-alert-item";
            row.innerHTML = `
              <span>${escapeHtml(item.titre)}${item.ville ? " · " + escapeHtml(item.ville) : ""}</span>
              <span class="urgent-alert-date">${escapeHtml(item.date_limite)}</span>
            `;
            uList.appendChild(row);
          });
          $("#urgentAlert").style.display = "block";
        }

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

    const alertForm = $("#alertForm");
    // Guard against React StrictMode's dev-only double effect invoke
    // double-registering this submit listener (same fix as the cours
    // reading-theme picker) - a toggle would silently break, and a submit
    // listener firing twice would submit the subscribe request twice.
    if (alertForm && alertForm.dataset.wired !== "1") {
      alertForm.dataset.wired = "1";
      alertForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = $("#alertEmail").value.trim();
        const msg = $("#alertFormMsg");
        fetch("/api/alerts/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        })
          .then((r) => r.json().then((data) => ({ ok: r.ok, data })))
          .then(({ ok, data }) => {
            msg.textContent = ok ? "✅ Inscrit ! Tu recevras un email avant la clôture." : data.error || "Erreur.";
            msg.className = "alert-form-msg" + (ok ? " ok" : " error");
            if (ok) alertForm.reset();
          })
          .catch(() => {
            msg.textContent = "Erreur réseau, réessaie.";
            msg.className = "alert-form-msg error";
          });
      });
    }
  }, []);

  return <div ref={containerRef} dangerouslySetInnerHTML={{ __html: MARKUP }} />;
}
