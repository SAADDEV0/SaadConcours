"use client";

import { useEffect } from "react";
import { chromeScript } from "../../_shared/chrome";

// This page is server-rendered for SEO (see page.js) - the header's theme
// toggle / social links are client-only behavior shared with every other
// page, wired up the same way as ConcoursDetailClient / CoursDetailClient.
export default function NewsDetailClient({ news }) {
  useEffect(() => {
    chromeScript();
  }, [news.id]);

  return (
    <div className="cd-actions">
      {!news.cloture && (
        <a className="dl-btn" style={{ textDecoration: "none" }} href={news.lien_inscription || news.source} target="_blank" rel="noopener noreferrer">
          S'inscrire
        </a>
      )}
      <a className="reset-btn" style={{ width: "auto", textDecoration: "none", display: "inline-flex", alignItems: "center" }} href={news.source} target="_blank" rel="noopener noreferrer">
        🔗 Source
      </a>
      <a className="reset-btn" style={{ width: "auto", textDecoration: "none", display: "inline-flex", alignItems: "center" }} href="/news">
        ← Retour aux concours ouverts
      </a>
    </div>
  );
}
