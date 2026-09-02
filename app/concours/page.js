"use client";

import { useEffect, useRef } from "react";
import { chromeHtml, chromeScript, footerHtml, spinnerHtml } from "../_shared/chrome";
import { downloadConcoursPdf } from "../_shared/concoursPdf";
import { FILIERE_CATEGORIES, categoryOptions, subFiliereOptions } from "../../lib/taxonomy";

const MARKUP = `
${chromeHtml({ active: "concours", showSearch: true })}

<div class="layout" id="viewConcours">
  <aside class="filters">
    <h3>Filtrer</h3>
    <div class="filter-group">
      <label style="font-size:.8rem;color:var(--text-dim);">Ville</label>
      <select id="filterVille"><option value="">Toutes les villes</option></select>
    </div>
    <div class="filter-group">
      <label style="font-size:.8rem;color:var(--text-dim);">Catégorie</label>
      <select id="filterCategorie"><option value="">Toutes les catégories</option></select>
    </div>
    <div class="filter-group">
      <label style="font-size:.8rem;color:var(--text-dim);">Filière</label>
      <select id="filterFiliere"><option value="">Toutes les filières</option></select>
    </div>
    <div class="filter-group">
      <label style="font-size:.8rem;color:var(--text-dim);">Établissement</label>
      <select id="filterEtab"><option value="">Tous les établissements</option></select>
    </div>
    <div class="filter-group">
      <label style="font-size:.8rem;color:var(--text-dim);">Année</label>
      <select id="filterAnnee"><option value="">Toutes les années</option></select>
    </div>
    <div class="filter-group">
      <label style="font-size:.8rem;color:var(--text-dim);">Module requis</label>
      <select id="filterModule"><option value="">Tous les modules</option></select>
    </div>
    <button class="reset-btn" id="resetBtn">✕ Réinitialiser les filtres</button>
  </aside>

  <main>
    <h1 class="concours-h1">Concours d'accès aux Masters — sujets réels</h1>
    <div class="results-header">
      <div class="results-count" id="resultsCount"></div>
    </div>
    <div class="grid" id="grid">${spinnerHtml("Chargement des concours...")}</div>
  </main>
</div>

${footerHtml()}
`;

export default function ConcoursPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    chromeScript();

    let ALL = [];
    let filtered = [];

    const root = containerRef.current;
    const $ = (sel) => root.querySelector(sel);
    const $$ = (sel) => root.querySelectorAll(sel);

    function uniq(arr) {
      return [...new Set(arr)].filter(Boolean).sort();
    }

    function escapeHtml(s) {
      return String(s ?? "").replace(
        /[&<>"']/g,
        (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m])
      );
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

    // Filière options depend on the chosen catégorie — narrowed to that
    // catégorie's 4 sous-filières once one is picked, or every sous-filière
    // grouped by catégorie (via <optgroup>) when browsing "Toutes les
    // catégories", so the full taxonomy is visible even for catégories with
    // no concours yet (MCL/EAPP/EDMQ, added ahead of their content).
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

    // Modules aren't part of the fixed taxonomy (they're free-form per
    // concours), so grouping is derived from the data itself: which
    // catégorie each module actually shows up under, rather than a static
    // mapping that would drift as new modules get added via /admin.
    function fillModuleSelect() {
      const el = $("#filterModule");
      el.innerHTML = '<option value="">Tous les modules</option>';
      const byCategorie = {};
      ALL.forEach((c) => {
        const code = c.categorie || "";
        (c.modules || []).forEach((m) => {
          if (!byCategorie[code]) byCategorie[code] = new Set();
          byCategorie[code].add(m);
        });
      });
      FILIERE_CATEGORIES.forEach((cat) => {
        const mods = byCategorie[cat.code];
        if (!mods || !mods.size) return;
        const group = document.createElement("optgroup");
        group.label = cat.label;
        [...mods].sort().forEach((m) => {
          const opt = document.createElement("option");
          opt.value = m;
          opt.textContent = m;
          group.appendChild(opt);
        });
        el.appendChild(group);
      });
      const uncategorized = byCategorie[""];
      if (uncategorized && uncategorized.size) {
        const group = document.createElement("optgroup");
        group.label = "Autres";
        [...uncategorized].sort().forEach((m) => {
          const opt = document.createElement("option");
          opt.value = m;
          opt.textContent = m;
          group.appendChild(opt);
        });
        el.appendChild(group);
      }
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
        if (module && !(c.modules || []).includes(module)) return false;
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

    // Cards navigate straight to the dedicated /concours/[id] page (full
    // énoncé/corrigé/extraits, share, PDF) instead of opening an in-page
    // preview modal — one place to browse a concours, not two.
    function goToConcours(id) {
      const bar = document.getElementById("topProgressBar");
      if (bar) bar.classList.add("loading");
      window.location.href = `/concours/${encodeURIComponent(id)}`;
    }

    function renderGrid() {
      $("#statPill").textContent = `${ALL.length} concours`;
      $("#resultsCount").textContent = `${filtered.length} résultat${filtered.length > 1 ? "s" : ""}`;
      const grid = $("#grid");
      grid.innerHTML = "";
      if (filtered.length === 0) {
        grid.innerHTML = `<div class="empty-state">Aucun concours ne correspond à ces filtres.</div>`;
        return;
      }
      filtered.forEach((c) => {
        const card = document.createElement("div");
        card.className = "card";
        const hasImg = (c.images || []).length > 0;
        const hasCorrige = Boolean(c.corrige_md || c.corrige_from_github);
        // Master name leads (same convention as the detail page H1) —
        // établissement/ville move into the meta line underneath.
        const masterLabel = c.master_reel || c.filiere || `${c.etablissement} — ${c.ville} — ${c.annee}`;
        card.innerHTML = `
          <div class="card-top">
            <div class="card-title">${escapeHtml(masterLabel)}</div>
            <div style="display:flex; align-items:center; gap:6px; flex-shrink:0;">
              <div class="card-year">${escapeHtml(String(c.annee))}</div>
              <button class="card-dl" title="Télécharger l'énoncé (PDF)">⬇</button>
            </div>
          </div>
          <div class="card-meta">🏫 ${escapeHtml(c.etablissement)} · 📍 ${escapeHtml(c.ville)}</div>
          <div class="card-modules">${(c.modules || [])
            .slice(0, 4)
            .map((m) => `<span class="mod-tag">${escapeHtml(m)}</span>`)
            .join("")}${(c.modules || []).length > 4 ? `<span class="mod-tag">+${c.modules.length - 4}</span>` : ""}</div>
          <div class="card-bottom">
            <span class="diff-badge">Difficulté : ${escapeHtml(c.difficulte || "?")}</span>
            <span style="display:flex; gap:6px;">
              ${hasCorrige ? '<span class="corrige-badge">✅ corrigé</span>' : ""}
              ${hasImg ? '<span class="img-badge">🖼️ scan réel</span>' : ""}
            </span>
          </div>
        `;
        card.addEventListener("click", () => goToConcours(c.id));
        card.querySelector("button.card-dl").addEventListener("click", (e) => {
          e.stopPropagation();
          downloadConcoursPdf(c);
        });
        grid.appendChild(card);
      });
    }

    fetch("/api/concours")
      .then((r) => r.json())
      .then((data) => {
        ALL = data;
        initFilters();
        // Prefills from ?q= so a direct link (e.g. Google's sitelinks search
        // box, powered by the WebSite/SearchAction JSON-LD in app/layout.js)
        // actually lands on filtered results instead of the full list.
        const q = new URLSearchParams(window.location.search).get("q");
        if (q) $("#searchInput").value = q;
        applyFilters();
      })
      .catch((err) => {
        $("#grid").innerHTML = `<div class="empty-state">Erreur de chargement des données : ${err}</div>`;
      });
  }, []);

  return <div ref={containerRef} dangerouslySetInnerHTML={{ __html: MARKUP }} />;
}
