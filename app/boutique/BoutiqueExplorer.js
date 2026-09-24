"use client";

import { useEffect } from "react";
import { boutiqueCardHtml } from "../_shared/boutiqueCard";

function norm(s) {
  return String(s || "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

// Filtre la grille prérendue de /boutique (niveau + recherche), sans
// rechargement. La grille initiale reste celle du serveur tant que le
// visiteur ne filtre pas.
export default function BoutiqueExplorer({ initialData }) {
  useEffect(() => {
    const ALL = initialData || [];
    let niveau = new URLSearchParams(location.search).get("niveau") || "";
    const grid = document.getElementById("shopGrid");
    const search = document.getElementById("shopSearch");
    const count = document.getElementById("shopCount");
    const chips = [...document.querySelectorAll("#shopNiveaux [data-niveau]")];
    if (!grid) return undefined;

    function apply() {
      const terms = norm(search?.value).split(/\s+/).filter(Boolean);
      const list = ALL.filter((p) => {
        if (niveau && p.niveau !== niveau) return false;
        if (!terms.length) return true;
        const hay = norm([p.titre, p.sousTitre, p.matiere, (p.sommaire || []).join(" "), (p.pointsForts || []).join(" ")].join(" "));
        return terms.every((t) => hay.includes(t));
      });
      grid.innerHTML = list.length ? list.map(boutiqueCardHtml).join("") : `<div class="sp-empty">Aucun cahier ne correspond à ta recherche.</div>`;
      if (count) count.textContent = `${list.length} cahier${list.length > 1 ? "s" : ""}`;
      chips.forEach((c) => c.classList.toggle("active", c.dataset.niveau === niveau));
    }

    const onChip = (e) => {
      niveau = e.currentTarget.dataset.niveau;
      apply();
    };
    chips.forEach((c) => c.addEventListener("click", onChip));
    search?.addEventListener("input", apply);
    if (niveau) apply();
    return () => {
      chips.forEach((c) => c.removeEventListener("click", onChip));
      search?.removeEventListener("input", apply);
    };
  }, [initialData]);
  return null;
}
