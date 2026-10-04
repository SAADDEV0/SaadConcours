"use client";

import { useEffect } from "react";
import { chromeScript } from "../_shared/chrome";
import { evalBestScores, loadEvalAnswers } from "../_shared/progress";

// Hydrates the server-rendered /evaluation page's header behavior (theme
// toggle, mobile nav, dua banner...). The module cards are plain
// <a href="/evaluation/[id]"> links (see app/_shared/evalCard.js) so no
// click interception is needed — mirrors ConcoursExplorer.js's chromeScript()
// call. Also redirects any old ?open=<id> link (from the previous
// list-page-SPA quiz) straight to the quiz's real page.
export default function EvaluationExplorer() {
  useEffect(() => {
    chromeScript();

    const openId = new URLSearchParams(window.location.search).get("open");
    if (openId) {
      window.location.replace(`/evaluation/${encodeURIComponent(openId)}`);
    }

    // Meilleur score de l'élève, ou série commencée, sur chaque carte.
    const best = evalBestScores();
    document.querySelectorAll("[data-best]").forEach((el) => {
      const id = el.dataset.best;
      const b = best[id];
      const enCours = Object.keys(loadEvalAnswers(id)).length;
      if (b) {
        el.textContent = `Meilleur score : ${b.pct} %`;
        el.classList.add(b.pct >= 50 ? "ok" : "ko");
      } else if (enCours) {
        el.textContent = `En cours · ${enCours} répondue${enCours > 1 ? "s" : ""}`;
      } else return;
      el.hidden = false;
    });
  }, []);

  return null;
}
