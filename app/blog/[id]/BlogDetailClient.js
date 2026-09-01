"use client";

import { useEffect } from "react";
import { chromeScript } from "../../_shared/chrome";
import { renderMathWhenReady } from "../../_shared/mathMarkdown";

// This page is server-rendered for SEO (see page.js) - the header's theme
// toggle / social links and the KaTeX math render are client-only behavior
// shared with every other page, wired up the same way as CoursDetailClient.
export default function BlogDetailClient({ post }) {
  useEffect(() => {
    chromeScript();
    document.querySelectorAll(".enonce-content").forEach(renderMathWhenReady);
  }, [post.id]);

  return (
    <div className="cd-actions">
      <a className="reset-btn" style={{ width: "auto", textDecoration: "none", display: "inline-flex", alignItems: "center" }} href="/blog">
        ← Retour au blog
      </a>
    </div>
  );
}
