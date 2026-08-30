"use client";

import { useEffect } from "react";
import { chromeScript } from "../../_shared/chrome";

// This page is server-rendered for SEO (see page.js) - the header's theme
// toggle / social links and the KaTeX math render are client-only behavior
// shared with every other page, wired up the same way as CoursDetailClient.
export default function BlogDetailClient({ post }) {
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
  }, [post.id]);

  return (
    <div className="cd-actions">
      <a className="reset-btn" style={{ width: "auto", textDecoration: "none", display: "inline-flex", alignItems: "center" }} href="/blog">
        ← Retour au blog
      </a>
    </div>
  );
}
