"use client";

import { useEffect, useState } from "react";
import ContentList from "./ContentList";
import Icon from "../_ui/Icon";
import { api } from "../_lib/api";
import { num } from "../_lib/format";

// Boutique : les cahiers commandés sur WhatsApp. La liste affiche, pour chaque
// cahier, les vues de sa fiche et les clics sur « Commander » (départs vers
// WhatsApp) ; les ventes se comptent dans les conversations WhatsApp.
export default function BoutiquePage() {
  const [shop, setShop] = useState(null);
  useEffect(() => {
    api("/api/admin/metrics?preset=30d")
      .then((d) => setShop(d.shop || { views: {}, clicks: {} }))
      .catch(() => setShop({ views: {}, clicks: {} }));
  }, []);
  return (
    <ContentList
      collectionKey="boutique"
      extraCtx={shop ? { shop } : undefined}
      hero={{
        icon: "🛒",
        eyebrow: "Contenu · Boutique (commande WhatsApp)",
        title: "Cahiers de préparation",
        text: "Chaque cahier a sa fiche sur /boutique : couverture, sommaire, prix. Le bouton « Commander » ouvre WhatsApp avec le nom du cahier ; le paiement et l’envoi du PDF se font à la main dans la conversation.",
        newLabel: "Nouveau cahier",
      }}
      extraActions={
        <>
          <a className="ax-btn" href="https://www.saadconcours.space/boutique" target="_blank" rel="noopener noreferrer">
            <Icon name="external" size="sm" /> Voir la boutique
          </a>
        </>
      }
      heroStats={(list) => {
        if (!shop) return [];
        const views = list.reduce((s, p) => s + (shop.views?.[p.id] || 0), 0);
        const clicks = list.reduce((s, p) => s + (shop.clicks?.[p.id] || 0), 0);
        return [
          { value: num(views), label: "vues des fiches" },
          { value: num(clicks), label: "départs vers WhatsApp" },
        ];
      }}
    />
  );
}
