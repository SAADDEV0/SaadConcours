"use client";

import { useEffect } from "react";
import { chromeScript } from "../../_shared/chrome";
import { downloadCoursPdf } from "../../_shared/coursPdf";

// This page is server-rendered for SEO (see page.js), but the header's
// theme toggle / social links and the KaTeX math render are client-only
// behavior shared with every other page — this just wires that up the same
// way, plus the PDF download button. Mirrors ConcoursDetailClient.js.
export default function CoursDetailClient({ cours }) {
  useEffect(() => {
    chromeScript();

    if (window.renderMathInElement) {
      document.querySelectorAll(".enonce-content").forEach((el) => {
        window.renderMathInElement(el, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
          ],
          throwOnError: false,
        });
      });
    }
  }, [cours.id]);

  return (
    <div className="cd-actions">
      <button className="dl-btn" onClick={() => downloadCoursPdf(cours)}>
        ⬇ Télécharger en PDF
      </button>
      <a className="reset-btn" style={{ width: "auto", textDecoration: "none", display: "inline-flex", alignItems: "center" }} href="/cours">
        ← Retour à tous les cours
      </a>
    </div>
  );
}
