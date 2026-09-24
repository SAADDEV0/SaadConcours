"use client";

import { useEffect } from "react";
import ChromeInit from "../../_shared/ChromeInit";
import { queueTrackEvent } from "../../_shared/chrome";

// Compte une vue de la fiche (une fois par session) et chaque clic sur
// « Acheter » : c'est ce qui permet de voir dans l'admin quels cahiers
// attirent et lesquels convertissent vers Gumroad.
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
