"use client";

import { useEffect, useRef, useState } from "react";
import { chromeScript } from "../../_shared/chrome";
import { renderMathWhenReady } from "../../_shared/mathMarkdown";
import { categoryLabel } from "../../../lib/blogTaxonomy";

// Same WhatsApp/Facebook/Telegram panel as ConcoursDetailClient's
// ShareButton, reused here so blog posts (the content most likely to get
// shared into study group chats) get the same sharing behavior.
// Exported separately so page.js can place it at the top of the page
// (next to the title) instead of only in the bottom action bar.
export function ShareButton({ post }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  function shareText() {
    return `${post.title} — ${categoryLabel(post.category)} sur SaadConcours`;
  }

  function handleClick() {
    setOpen((o) => !o);
  }

  function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => setOpen(false));
  }

  useEffect(() => {
    if (!open) return;
    function onDocClick(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [open]);

  const url = typeof window !== "undefined" ? window.location.href : "";
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(shareText());

  return (
    <div className="share-wrap" ref={wrapRef}>
      <button type="button" className="reset-btn share-btn" onClick={handleClick}>
        🔗 Partager
      </button>
      {open && (
        <div className="share-panel">
          <a
            className="share-opt"
            href={`https://wa.me/?text=${encodedText}%20${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            💬 WhatsApp
          </a>
          <a
            className="share-opt"
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            📘 Facebook
          </a>
          <a
            className="share-opt"
            href={`https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            ✈️ Telegram
          </a>
          <button type="button" className="share-opt" onClick={copyLink}>
            🔗 Copier le lien
          </button>
        </div>
      )}
    </div>
  );
}

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
