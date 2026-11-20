"use client";

import { useEffect, useState } from "react";
import { queueTrackEvent } from "./chrome";

// « Ce chapitre t'a été utile ? 👍 / 👎 », une ligne discrète en bas d'un
// chapitre, une fois la lecture finie (pas de pop-up, pas de bandeau : voir
// ChaineWhatsapp.js). Le vote part dans le lot des statistiques
// (/api/track/batch, lib/analytics.js › trackVote) : aucun appel au Worker en
// plus, et la page reste statique. Un vote par page et par navigateur, gardé
// dans localStorage ; changer d'avis déplace le vote au lieu d'en ajouter un.

const TEXTES = {
  fr: { q: "Ce chapitre t'a été utile ?", up: "Oui", down: "Pas vraiment", merci: "Merci ! Ton avis aide à améliorer les cours." },
  ar: { q: "هل كان هذا الدرس مفيدا لك؟", up: "نعم", down: "ليس كثيرا", merci: "شكرا! رأيك يساعدنا على تحسين الدروس." },
};

const POUCE = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 10v11H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3Zm0 0 4-7a2.5 2.5 0 0 1 3 2.6L13.5 9H19a2 2 0 0 1 2 2.3l-1.2 7.5A2.5 2.5 0 0 1 17.3 21H7" />
  </svg>
);

export default function AvisUtile({ lang = "fr" }) {
  const t = TEXTES[lang] || TEXTES.fr;
  const ar = lang === "ar";
  const [vote, setVote] = useState(null);
  const [merci, setMerci] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem("sc_vote:" + location.pathname);
      if (v === "up" || v === "down") setVote(v);
    } catch {}
  }, []);

  function voter(v) {
    if (v === vote) return;
    const prev = vote;
    setVote(v);
    setMerci(true);
    try {
      localStorage.setItem("sc_vote:" + location.pathname, v);
    } catch {}
    queueTrackEvent(prev ? { t: "vote", path: location.pathname, v, prev } : { t: "vote", path: location.pathname, v });
  }

  return (
    <div className="avis-utile" dir={ar ? "rtl" : undefined} lang={ar ? "ar" : undefined}>
      <span className="avis-utile-q">{merci ? t.merci : t.q}</span>
      <span className="avis-utile-btns">
        {["up", "down"].map((v) => (
          <button key={v} type="button" className={`avis-utile-btn avis-utile-${v}`} aria-pressed={vote === v} onClick={() => voter(v)}>
            {POUCE}
            {v === "up" ? t.up : t.down}
          </button>
        ))}
      </span>
    </div>
  );
}
