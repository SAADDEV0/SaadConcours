"use client";

import { useEffect } from "react";
import { chromeScript } from "../../_shared/chrome";

// This page is server-rendered for SEO (see page.js) and deliberately does
// NOT show the questions themselves — it's a landing page describing the
// QCM, the actual interactive quiz stays in the /evaluation SPA reader.
// "Commencer" hands off to it via ?open=<id>, which app/evaluation/page.js
// picks up on mount to auto-load this quiz.
export default function EvaluationDetailClient({ quiz }) {
  useEffect(() => {
    chromeScript();
  }, [quiz.id]);

  return (
    <div className="cd-actions">
      <a className="dl-btn" style={{ textDecoration: "none" }} href={`/evaluation?open=${encodeURIComponent(quiz.id)}`}>
        ✅ Commencer l'évaluation
      </a>
      <a
        className="reset-btn"
        style={{ width: "auto", textDecoration: "none", display: "inline-flex", alignItems: "center" }}
        href="/evaluation"
      >
        ← Retour à toutes les évaluations
      </a>
    </div>
  );
}
