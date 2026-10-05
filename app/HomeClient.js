"use client";

import { useEffect } from "react";
import { chromeScript, COURS_SPACE_KEY } from "./_shared/chrome";

// Niveau choisi sur l'accueil (« Tu prépares quoi ? »), retenu dans le
// navigateur : l'élève qui revient retrouve directement son panneau.
const NIVEAU_KEY = "sc_niveau";
const NIVEAUX = ["bac", "licence", "master"];
// Le choix du niveau fixe aussi l'espace ouvert par l'onglet « Cours ».
const COURS_DU_NIVEAU = { bac: "/bac/2bac", licence: "/cours" };

function choisirNiveau(code, { focus = false, retenir = true } = {}) {
  if (!NIVEAUX.includes(code)) return;
  document.querySelectorAll(".home-level").forEach((tab) => {
    const on = tab.dataset.level === code;
    tab.setAttribute("aria-selected", on ? "true" : "false");
    tab.tabIndex = on ? 0 : -1;
    if (on && focus) tab.focus();
  });
  document.querySelectorAll(".home-panel").forEach((panel) => {
    panel.hidden = panel.dataset.panel !== code;
  });
  if (!retenir) return;
  try {
    localStorage.setItem(NIVEAU_KEY, code);
    if (COURS_DU_NIVEAU[code]) {
      localStorage.setItem(COURS_SPACE_KEY, COURS_DU_NIVEAU[code]);
      document.querySelectorAll("a[data-tab-cours]").forEach((a) => a.setAttribute("href", COURS_DU_NIVEAU[code]));
    }
  } catch {}
}

// Hydrates the server-rendered homepage: header behavior (theme toggle,
// menu, tab bar...), the level tabs, plus the AdSense home banner, which has
// nothing to crawl. `settings` is passed down from the server component
// instead of re-fetched here.
export default function HomeClient({ settings }) {
  useEffect(() => {
    chromeScript();

    try {
      const saved = localStorage.getItem(NIVEAU_KEY);
      if (saved) choisirNiveau(saved, { retenir: false });
    } catch {}

    const list = document.querySelector(".home-levels");
    const onClick = (e) => {
      const tab = e.target.closest(".home-level");
      if (tab) choisirNiveau(tab.dataset.level);
    };
    // Flèches gauche/droite entre les onglets (motif ARIA « tabs »).
    const onKey = (e) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      const current = NIVEAUX.indexOf(document.querySelector('.home-level[aria-selected="true"]')?.dataset.level);
      const next = NIVEAUX[(current + (e.key === "ArrowRight" ? 1 : NIVEAUX.length - 1)) % NIVEAUX.length];
      choisirNiveau(next, { focus: true });
      e.preventDefault();
    };
    list?.addEventListener("click", onClick);
    list?.addEventListener("keydown", onKey);

    if (settings?.adsEnabled && settings?.adsHomeBannerEnabled && settings?.adsPublisherId && settings?.adsHomeBannerSlot) {
      const holder = document.getElementById("homeBannerAd");
      if (holder) {
        holder.innerHTML = `
          <div class="ad-slot" aria-label="Publicité">
            <span class="ad-slot-label">Publicité</span>
            <ins class="adsbygoogle" style="display:block" data-ad-client="${settings.adsPublisherId}" data-ad-slot="${settings.adsHomeBannerSlot}" data-ad-format="auto" data-full-width-responsive="true"></ins>
          </div>
        `;
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    }

    return () => {
      list?.removeEventListener("click", onClick);
      list?.removeEventListener("keydown", onKey);
    };
  }, [settings]);

  return null;
}
