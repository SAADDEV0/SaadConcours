"use client";

import { useEffect } from "react";

function norm(s) {
  return String(s || "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

// Filtre les sections prérendues de /boutique (niveau, semestre, recherche)
// sans rechargement : comme sur /cours, toutes les cartes restent dans le HTML
// servi et le filtre ne fait que les masquer.
export default function BoutiqueExplorer({ initialData }) {
  useEffect(() => {
    const ALL = initialData || [];
    let niveau = new URLSearchParams(location.search).get("niveau") || "";
    let semestre = "";
    const groupes = [...document.querySelectorAll(".bac-group[data-groupe]")];
    const search = document.getElementById("shopSearch");
    const count = document.getElementById("shopCount");
    const empty = document.getElementById("shopEmpty");
    const chipsNiveau = [...document.querySelectorAll("#shopNiveaux [data-niveau]")];
    const chipsSemestre = [...document.querySelectorAll("#shopSemestres [data-semestre]")];
    if (!groupes.length) return undefined;

    function apply() {
      const terms = norm(search?.value).split(/\s+/).filter(Boolean);
      const list = ALL.filter((p) => {
        if (niveau && p.niveau !== niveau) return false;
        if (semestre && p.semestre !== semestre) return false;
        if (!terms.length) return true;
        const hay = norm([p.titre, p.sousTitre, p.matiere, (p.sommaire || []).join(" "), (p.pointsForts || []).join(" ")].join(" "));
        return terms.every((t) => hay.includes(t));
      });
      const ids = new Set(list.map((p) => p.id));
      groupes.forEach((g) => {
        const cartes = [...g.querySelectorAll(".shop-card")];
        cartes.forEach((c) => {
          c.hidden = !ids.has(c.dataset.id);
        });
        g.hidden = cartes.every((c) => c.hidden);
      });
      if (empty) empty.hidden = list.length > 0;
      if (count) count.textContent = `${list.length} cahier${list.length > 1 ? "s" : ""}`;
      chipsNiveau.forEach((c) => c.classList.toggle("active", c.dataset.niveau === niveau));
      chipsSemestre.forEach((c) => c.classList.toggle("active", c.dataset.semestre === semestre));
    }

    const onNiveau = (e) => {
      niveau = e.currentTarget.dataset.niveau;
      apply();
    };
    const onSemestre = (e) => {
      semestre = e.currentTarget.dataset.semestre;
      apply();
    };
    chipsNiveau.forEach((c) => c.addEventListener("click", onNiveau));
    chipsSemestre.forEach((c) => c.addEventListener("click", onSemestre));
    search?.addEventListener("input", apply);
    if (niveau) apply();
    return () => {
      chipsNiveau.forEach((c) => c.removeEventListener("click", onNiveau));
      chipsSemestre.forEach((c) => c.removeEventListener("click", onSemestre));
      search?.removeEventListener("input", apply);
    };
  }, [initialData]);
  return null;
}
