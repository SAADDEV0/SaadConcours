"use client";

import { useEffect, useRef, useState } from "react";
import { chromeScript, trackConcoursView } from "../../_shared/chrome";
import { downloadConcoursPdf } from "../../_shared/concoursPdf";
import { renderMathWhenReady } from "../../_shared/mathMarkdown";

// Always opens our own WhatsApp/Facebook/Telegram panel instead of the
// native OS share sheet (navigator.share) - the native sheet hides which
// apps are offered behind the OS, and WhatsApp (where these PDFs actually
// circulate among Moroccan students) isn't guaranteed to be the first option.
// Exported separately so page.js can place it at the top of the page
// (next to the title) instead of only in the bottom action bar.
export function ShareButton({ concours }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  function shareText() {
    const master = concours.master_reel || concours.filiere;
    const location = `${concours.etablissement} — ${concours.ville} — ${concours.annee}`;
    return `${master ? master + " · " : ""}${location} — sujet de concours réel avec corrigé sur SaadConcours`;
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

// Exported separately, same reasoning as ShareButton — placed at the top
// of the page next to Partager instead of only in the bottom action bar.
export function DownloadPdfButton({ concours }) {
  return (
    <button className="dl-btn" onClick={() => downloadConcoursPdf(concours)}>
      ⬇ Télécharger en PDF
    </button>
  );
}

// This page is server-rendered for SEO (see page.js), but the header's
// theme toggle / social links / visit tracking and the KaTeX math render
// are all client-only behavior shared with every other page — this just
// wires that up the same way, plus marking this concours as viewed for
// the admin's "most viewed" stat.
export default function ConcoursDetailClient({ concours }) {
  useEffect(() => {
    chromeScript();
    trackConcoursView(concours.id);
    document.querySelectorAll(".enonce-content").forEach(renderMathWhenReady);

    // Le corrigé est replié (page.js) : l'onglet « Corrigé », ou un lien
    // arrivant directement sur #section-corrige, l'ouvre avant de défiler.
    const reveal = document.getElementById("corrigeReveal");
    const openIfCorrige = () => {
      if (reveal && window.location.hash === "#section-corrige") reveal.open = true;
    };
    openIfCorrige();
    window.addEventListener("hashchange", openIfCorrige);
    const tabCorrige = document.querySelector('.sp-anchor-tabs a[href="#section-corrige"]');
    const onTabCorrige = () => {
      if (reveal) reveal.open = true;
    };
    tabCorrige?.addEventListener("click", onTabCorrige);

    // Onglet de la section en cours de lecture mis en avant (la barre est
    // collante : sans cela rien n'indiquait où l'on se trouvait).
    const tabs = [...document.querySelectorAll(".sp-anchor-tabs a[href^='#']")];
    const sections = tabs.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
    let spy = null;
    if (sections.length && "IntersectionObserver" in window) {
      const visible = new Map();
      spy = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => visible.set(e.target.id, e.isIntersecting));
          const current = sections.find((s) => visible.get(s.id)) || null;
          tabs.forEach((a) => {
            const on = current && a.getAttribute("href") === `#${current.id}`;
            a.classList.toggle("active", Boolean(on));
            if (on) a.setAttribute("aria-current", "location");
            else a.removeAttribute("aria-current");
          });
        },
        { rootMargin: "-140px 0px -55% 0px" }
      );
      sections.forEach((s) => spy.observe(s));
    }

    return () => {
      window.removeEventListener("hashchange", openIfCorrige);
      tabCorrige?.removeEventListener("click", onTabCorrige);
      spy?.disconnect();
    };
  }, [concours.id]);

  return (
    <div className="cd-actions">
      <a className="reset-btn" style={{ width: "auto", textDecoration: "none", display: "inline-flex", alignItems: "center" }} href="/concours">
        ← Retour à tous les concours
      </a>
    </div>
  );
}
