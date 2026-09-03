"use client";

import { useEffect } from "react";
import { chromeScript } from "../_shared/chrome";
import { downloadConcoursPdf } from "../_shared/concoursPdf";
import { FILIERE_CATEGORIES, categoryOptions, subFiliereOptions } from "../../lib/taxonomy";
import { concoursCardHtml } from "../_shared/concoursCard";

// Hydrates the server-rendered /concours page: fills the filter <select>s,
// wires the download buttons on the already-visible cards, and only
// replaces the grid's innerHTML once the visitor actually filters/searches
// — the initial unfiltered list stays exactly what the server sent.
export default function ConcoursExplorer({ initialData }) {
  useEffect(() => {
    chromeScript();

    const ALL = initialData || [];
    let filtered = ALL;

    const $ = (sel) => document.querySelector(sel);

    function uniq(arr) {
      return [...new Set(arr)].filter(Boolean).sort();
    }

    function fillSelect(sel, values) {
      const el = $(sel);
      values.forEach((v) => {
        const opt = document.createElement("option");
        opt.value = v;
        opt.textContent = v;
        el.appendChild(opt);
      });
    }

    function fillFiliereSelect(categorieCode) {
      const el = $("#filterFiliere");
      el.innerHTML = '<option value="">Toutes les filières</option>';
      if (categorieCode) {
        subFiliereOptions(categorieCode).forEach((o) => {
          const opt = document.createElement("option");
          opt.value = o.value;
          opt.textContent = o.label;
          el.appendChild(opt);
        });
        return;
      }
      FILIERE_CATEGORIES.forEach((cat) => {
        const group = document.createElement("optgroup");
        group.label = cat.label;
        cat.sousFilieres.forEach((s) => {
          const opt = document.createElement("option");
          opt.value = s;
          opt.textContent = s;
          group.appendChild(opt);
        });
        el.appendChild(group);
      });
    }

    function normalizeModuleKey(s) {
      return String(s || "")
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .toLowerCase()
        .trim()
        .replace(/\s+/g, " ");
    }

    function fillModuleSelect() {
      const el = $("#filterModule");
      el.innerHTML = '<option value="">Tous les modules</option>';

      const byKey = new Map();
      ALL.forEach((c) => {
        const code = c.categorie || "";
        (c.modules || []).forEach((raw) => {
          const key = normalizeModuleKey(raw);
          if (!key) return;
          if (!byKey.has(key)) byKey.set(key, { forms: new Map(), catCounts: new Map() });
          const entry = byKey.get(key);
          entry.forms.set(raw, (entry.forms.get(raw) || 0) + 1);
          entry.catCounts.set(code, (entry.catCounts.get(code) || 0) + 1);
        });
      });

      const byCategorie = {};
      byKey.forEach((entry) => {
        const display = [...entry.forms.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "fr"))[0][0];
        const home = [...entry.catCounts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))[0][0];
        if (!byCategorie[home]) byCategorie[home] = [];
        byCategorie[home].push(display);
      });

      FILIERE_CATEGORIES.forEach((cat) => {
        const mods = byCategorie[cat.code];
        if (!mods || !mods.length) return;
        const group = document.createElement("optgroup");
        group.label = cat.label;
        mods
          .sort((a, b) => a.localeCompare(b, "fr"))
          .forEach((m) => {
            const opt = document.createElement("option");
            opt.value = m;
            opt.textContent = m;
            group.appendChild(opt);
          });
        el.appendChild(group);
      });
      const uncategorized = byCategorie[""];
      if (uncategorized && uncategorized.length) {
        const group = document.createElement("optgroup");
        group.label = "Autres";
        uncategorized
          .sort((a, b) => a.localeCompare(b, "fr"))
          .forEach((m) => {
            const opt = document.createElement("option");
            opt.value = m;
            opt.textContent = m;
            group.appendChild(opt);
          });
        el.appendChild(group);
      }
    }

    function wireDownloadButtons() {
      document.querySelectorAll("#grid .card").forEach((card) => {
        const btn = card.querySelector(".card-dl");
        if (!btn || btn.dataset.wired === "1") return;
        btn.dataset.wired = "1";
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          const id = card.dataset.id;
          const c = ALL.find((x) => x.id === id);
          if (c) downloadConcoursPdf(c);
        });
      });
    }

    function renderGrid() {
      $("#resultsCount").textContent = `${filtered.length} résultat${filtered.length > 1 ? "s" : ""}`;
      const grid = $("#grid");
      if (filtered.length === 0) {
        grid.innerHTML = `<div class="empty-state">Aucun concours ne correspond à ces filtres.</div>`;
        return;
      }
      grid.innerHTML = filtered.map(concoursCardHtml).join("");
      wireDownloadButtons();
    }

    function applyFilters() {
      const ville = $("#filterVille").value;
      const categorie = $("#filterCategorie").value;
      const filiere = $("#filterFiliere").value;
      const etab = $("#filterEtab").value;
      const annee = $("#filterAnnee").value;
      const module = $("#filterModule").value;
      const q = $("#searchInput").value.trim().toLowerCase();

      filtered = ALL.filter((c) => {
        if (ville && c.ville !== ville) return false;
        if (categorie && c.categorie !== categorie) return false;
        if (filiere && c.filiere !== filiere) return false;
        if (etab && c.etablissement !== etab) return false;
        if (annee && String(c.annee) !== annee) return false;
        if (module) {
          const key = normalizeModuleKey(module);
          if (!(c.modules || []).some((m) => normalizeModuleKey(m) === key)) return false;
        }
        if (q) {
          const hay = [c.ville, c.etablissement, c.filiere, c.master_reel, c.annee, c.notions_cles, c.enonce_md, (c.modules || []).join(" ")]
            .join(" ")
            .toLowerCase();
          if (!hay.includes(q)) return false;
        }
        return true;
      });

      renderGrid();
    }

    function initFilters() {
      const villes = uniq(ALL.map((c) => c.ville));
      const etabs = uniq(ALL.map((c) => c.etablissement));
      const annees = uniq(ALL.map((c) => c.annee)).sort((a, b) => String(b).localeCompare(String(a)));

      fillSelect("#filterVille", villes);
      const catEl = $("#filterCategorie");
      categoryOptions().forEach((o) => {
        const opt = document.createElement("option");
        opt.value = o.value;
        opt.textContent = o.label;
        catEl.appendChild(opt);
      });
      fillFiliereSelect("");
      fillSelect("#filterEtab", etabs);
      fillSelect("#filterAnnee", annees);
      fillModuleSelect();

      $("#filterCategorie").addEventListener("change", () => {
        fillFiliereSelect($("#filterCategorie").value);
        applyFilters();
      });
      ["#filterVille", "#filterFiliere", "#filterEtab", "#filterAnnee", "#filterModule"].forEach((id) => {
        $(id).addEventListener("change", applyFilters);
      });
      $("#searchInput").addEventListener("input", applyFilters);
      $("#resetBtn").addEventListener("click", () => {
        ["#filterVille", "#filterCategorie", "#filterEtab", "#filterAnnee", "#filterModule"].forEach((id) => ($(id).value = ""));
        fillFiliereSelect("");
        $("#searchInput").value = "";
        applyFilters();
      });
    }

    initFilters();
    wireDownloadButtons();

    const statPill = document.getElementById("statPill");
    if (statPill) statPill.textContent = `${ALL.length} concours`;

    // Prefills from ?q= so a direct link (e.g. Google's sitelinks search
    // box) lands on filtered results instead of the full list.
    const q = new URLSearchParams(window.location.search).get("q");
    if (q) {
      $("#searchInput").value = q;
      applyFilters();
    }
  }, [initialData]);

  return null;
}
