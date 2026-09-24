"use client";

import { useEffect, useState } from "react";
import ContentList from "./ContentList";
import Icon from "../_ui/Icon";
import { api } from "../_lib/api";
import { num } from "../_lib/format";

// Boutique : les cahiers vendus sur Gumroad. La liste affiche, pour chaque
// cahier, les vues de sa fiche et les clics sur « Acheter » (départs vers
// Gumroad) — Gumroad, lui, compte les ventes.
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
        eyebrow: "Contenu · Boutique Gumroad",
        title: "Cahiers de préparation",
        text: "Chaque cahier a sa fiche sur /boutique : couverture, sommaire, prix. Le bouton « Acheter » envoie sur Gumroad, qui encaisse et livre le PDF.",
        newLabel: "Nouveau cahier",
      }}
      extraActions={
        <>
          <a className="ax-btn" href="https://www.saadconcours.space/boutique" target="_blank" rel="noopener noreferrer">
            <Icon name="external" size="sm" /> Voir la boutique
          </a>
          <a className="ax-btn" href="https://app.gumroad.com/products" target="_blank" rel="noopener noreferrer">
            <Icon name="bag" size="sm" /> Gumroad
          </a>
        </>
      }
      heroStats={(list) => {
        if (!shop) return [];
        const views = list.reduce((s, p) => s + (shop.views?.[p.id] || 0), 0);
        const clicks = list.reduce((s, p) => s + (shop.clicks?.[p.id] || 0), 0);
        return [
          { value: num(views), label: "vues des fiches" },
          { value: num(clicks), label: "départs vers Gumroad" },
        ];
      }}
    />
  );
}
