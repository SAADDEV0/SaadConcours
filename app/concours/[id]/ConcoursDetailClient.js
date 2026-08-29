"use client";

import { useEffect, useRef, useState } from "react";
import { chromeScript, trackConcoursView } from "../../_shared/chrome";
import { downloadConcoursPdf } from "../../_shared/concoursPdf";

// Native share sheet on mobile (navigator.share); desktop browsers mostly
// don't implement it, so they fall back to a small panel with direct
// share links - WhatsApp first since that's where these PDFs actually
// circulate among Moroccan students.
function ShareButton({ concours }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  function shareText() {
    const master = concours.master_reel || concours.filiere;
    return `${concours.etablissement} — ${concours.ville} — ${concours.annee}${
      master ? " · " + master : ""
    } — sujet de concours réel avec corrigé sur SaadConcours`;
  }

  async function handleClick() {
    if (navigator.share) {
      try {
        await navigator.share({ title: shareText(), url: window.location.href });
      } catch {
        // user cancelled the native share sheet - nothing to do
      }
      return;
    }
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
      <ShareButton concours={concours} />
      <a className="reset-btn" style={{ width: "auto", textDecoration: "none", display: "inline-flex", alignItems: "center" }} href="/concours">
        ← Retour à tous les concours
      </a>
    </div>
  );
}
