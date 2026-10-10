"use client";

import { useEffect } from "react";
import { chromeScript, ESPACE_KEY } from "./_shared/chrome";

// Hydrate l'accueil prérendu : comportements du chrome (thème, menu, barre
// d'onglets…), et repère « Ton espace » sur la ligne de « Je prépare… » que
// le visiteur a choisie la dernière fois. Le choix lui-même est retenu par
// chrome.js (clic sur un lien [data-espace]).
function marquerEspace() {
  let key = null;
  try {
    key = localStorage.getItem(ESPACE_KEY);
  } catch {}
  document.querySelectorAll(".home-chooser a[data-espace]").forEach((a) => {
    a.classList.toggle("is-mine", a.dataset.espace === key);
  });
}

export default function HomeClient() {
  useEffect(() => {
    chromeScript();
    marquerEspace();
    const onClick = (e) => {
      if (e.target.closest?.("[data-espace]")) setTimeout(marquerEspace, 0);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
