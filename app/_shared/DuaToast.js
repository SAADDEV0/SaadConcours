"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Petit rappel (du'a courte) dans un coin de l'écran. Conçu pour ne gêner ni
// AdSense ni le SEO :
// - pas de voile ni de modale, rien n'est bloqué : une carte de ~300px qu'on
//   ferme d'un clic et qui disparaît seule après AUTO_HIDE_MS ;
// - jamais sur la première page vue (pas d'interstitiel à l'arrivée depuis
//   Google), une seule fois par jour et par navigateur ;
// - rendu côté client uniquement et en position:fixed : absent du HTML
//   indexé, aucun décalage de mise en page (CLS) ;
// - z-index sous les annonces ancrées d'AdSense, qui restent au-dessus.
const DUAS = [
  "اللهم يسر ولا تعسر",
  "رب زدني علما",
  "رب اشرح لي صدري ويسر لي أمري",
  "اللهم لا سهل إلا ما جعلته سهلا",
  "حسبنا الله ونعم الوكيل",
  "لا حول ولا قوة إلا بالله",
  "سبحان الله وبحمده",
];

const DAY_KEY = "duaToastDay";
const VIEWS_KEY = "duaToastViews";
const MIN_VIEWS = 2;
const SHOW_DELAY_MS = 3000;
const AUTO_HIDE_MS = 6000;
const QUIET_PATHS = ["/a-propos", "/contact", "/confidentialite", "/mentions-legales", "/faq"];

// Police Amiri chargée seulement quand le rappel va s'afficher : elle était
// liée en <link> bloquant dans le <head> de chaque page, pour une carte que
// la plupart des visites ne montrent jamais.
function loadAmiri() {
  if (document.getElementById("amiri-font")) return;
  const link = document.createElement("link");
  link.id = "amiri-font";
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap";
  document.head.appendChild(link);
}

function today() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

export default function DuaToast() {
  const pathname = usePathname();
  const [dua, setDua] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (dua || !pathname || pathname.startsWith("/admin")) return;
    let views;
    try {
      if (localStorage.getItem(DAY_KEY) === today()) return;
      views = (parseInt(sessionStorage.getItem(VIEWS_KEY), 10) || 0) + 1;
      sessionStorage.setItem(VIEWS_KEY, String(views));
    } catch {
      return;
    }
    if (views < MIN_VIEWS || QUIET_PATHS.includes(pathname)) return;
    loadAmiri();
    const t = setTimeout(() => {
      try {
        localStorage.setItem(DAY_KEY, today());
      } catch {
        // Stockage indisponible : on l'affiche quand même pour cette page.
      }
      const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
      setDua(DUAS[dayOfYear % DUAS.length]);
      setOpen(true);
    }, SHOW_DELAY_MS);
    return () => clearTimeout(t);
  }, [pathname, dua]);

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => setOpen(false), AUTO_HIDE_MS);
    return () => clearTimeout(t);
  }, [open]);

  if (!dua) return null;
  return (
    <aside className={`dua-toast${open ? " is-open" : ""}`} role="status" aria-hidden={!open}>
      <button type="button" className="dua-toast-close" aria-label="Fermer" onClick={() => setOpen(false)}>
        ×
      </button>
      <p className="dua-toast-ar" dir="rtl" lang="ar">{dua}</p>
    </aside>
  );
}
