"use client";

import { useEffect } from "react";
import { chromeScript, trackConcoursView } from "../../_shared/chrome";
import { downloadConcoursPdf } from "../../_shared/concoursPdf";

// This page is server-rendered for SEO (see page.js), but the header's
// theme toggle / social links / visit tracking and the KaTeX math render
// are all client-only behavior shared with every other page — this just
// wires that up the same way, plus the PDF download button and marking
// this concours as viewed for the admin's "most viewed" stat.
export default function ConcoursDetailClient({ concours }) {
  useEffect(() => {
    chromeScript();
    trackConcoursView(concours.id);

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
  }, [concours.id]);

  return (
    <div className="cd-actions">
      <button className="dl-btn" onClick={() => downloadConcoursPdf(concours)}>
        ⬇ Télécharger en PDF
      </button>
      <a className="reset-btn" style={{ width: "auto", textDecoration: "none", display: "inline-flex", alignItems: "center" }} href="/concours">
        ← Retour à tous les concours
      </a>
    </div>
  );
}
