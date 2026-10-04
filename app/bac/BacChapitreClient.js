"use client";

import { useEffect, useState } from "react";
import { chromeScript } from "../_shared/chrome";
import { renderMathWhenReady } from "../_shared/mathMarkdown";
import { markChapterRead } from "../_shared/progress";

// Commun aux chapitres Bac et Licence FSJES.
// editId : "niveau/matiere/chapitre". Le raccourci d'édition n'est affiché que
// sur le navigateur de l'administrateur (marqué par l'admin, voir AdminShell) ;
// l'éditeur lui-même reste protégé par la connexion.
export default function BacChapitreClient({ editId }) {
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    chromeScript();
    document.querySelectorAll(".bac-tab-panel .cours-content").forEach((el) => renderMathWhenReady(el));
    try {
      setAdmin(localStorage.getItem("sc_no_track") === "1");
    } catch {}

    // Progression : ce chapitre est noté comme lu (coches dans les listes de
    // chapitres et bouton « Reprendre », voir ProgressMarks).
    const titre = document.querySelector(".bac-chap-hero h1")?.textContent?.trim();
    markChapterRead(window.location.pathname, titre);

    // Onglets collants : changer d'onglet après avoir lu loin dans le cours
    // laissait l'élève au milieu du nouvel onglet. On remonte au début du
    // contenu, juste sous la barre d'onglets.
    const tabs = document.querySelector(".bac-tabs");
    const bar = tabs?.querySelector(".bac-tab-labels");
    const onChange = (e) => {
      if (!e.target.classList?.contains("bac-tab-input") || !bar) return;
      const header = document.querySelector("header.site-header");
      // Remonter fait réapparaître le header (chrome.js) : on le compte toujours.
      const headerH = header ? header.offsetHeight : 0;
      const top = tabs.getBoundingClientRect().top + window.scrollY - headerH - 8;
      if (window.scrollY > top) window.scrollTo({ top, behavior: "smooth" });
    };
    tabs?.addEventListener("change", onChange);
    return () => tabs?.removeEventListener("change", onChange);
  }, []);

  if (!admin || !editId) return null;
  return (
    <a className="bac-edit-fab" href={`/admin/bac/modifier?id=${encodeURIComponent(editId)}`}>
      ✏️ Modifier ce chapitre
    </a>
  );
}
