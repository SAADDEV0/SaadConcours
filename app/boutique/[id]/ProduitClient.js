"use client";

import { useEffect, useRef, useState } from "react";
import ChromeInit from "../../_shared/ChromeInit";
import { queueTrackEvent } from "../../_shared/chrome";
import { Icon } from "../../_shared/icons";

// Même panneau WhatsApp / Facebook / Telegram / copier le lien que sur les
// concours et le blog : un étudiant partage la fiche du cahier à son groupe.
export function ShareButton({ titre, prix }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

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
  const encodedText = encodeURIComponent(`${titre}${prix ? ` · ${prix}` : ""} sur SaadConcours`);

  return (
    <div className="share-wrap" ref={wrapRef}>
      <button type="button" className="reset-btn share-btn" onClick={() => setOpen((o) => !o)}>
        <Icon name="share" size={18} />
        Partager
      </button>
      {open && (
        <div className="share-panel">
          <a className="share-opt" href={`https://wa.me/?text=${encodedText}%20${encodedUrl}`} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
            <Icon name="message" size={18} />
            WhatsApp
          </a>
          <a className="share-opt" href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
            <Icon name="users" size={18} />
            Facebook
          </a>
          <a className="share-opt" href={`https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
            <Icon name="send" size={18} />
            Telegram
          </a>
          <button type="button" className="share-opt" onClick={copyLink}>
            <Icon name="link" size={18} />
            Copier le lien
          </button>
        </div>
      )}
    </div>
  );
}

// Compte une vue de la fiche (une fois par session) et chaque clic sur
// « Commander » : c'est ce qui permet de voir dans l'admin quels cahiers
// attirent et lesquels donnent lieu à une demande sur WhatsApp.
export default function ProduitClient({ id }) {
  useEffect(() => {
    try {
      const key = "sc_shop:" + id;
      if (!sessionStorage.getItem(key)) {
        sessionStorage.setItem(key, "1");
        queueTrackEvent({ t: "shop", id, type: "view" });
      }
    } catch {
      queueTrackEvent({ t: "shop", id, type: "view" });
    }
    const onClick = (e) => {
      const a = e.target.closest?.("[data-shop-buy]");
      if (a) queueTrackEvent({ t: "shop", id, type: "click" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [id]);
  return <ChromeInit />;
}
