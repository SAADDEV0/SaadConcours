"use client";

import { useEffect } from "react";
import { chromeScript, queueTrackEvent } from "../_shared/chrome";
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

    // initialData ne porte que les données des cartes (concoursListItem) :
    // le texte des sujets (énoncé, notions clés) n'est chargé qu'à la
    // première recherche ou au premier PDF, depuis le fichier statique que
    // Cloudflare sert sans invoquer le Worker (~1 Mo compressé, une fois).
    let fullById = null;
    let fullPromise = null;
    function loadFull() {
      if (!fullPromise) {
        fullPromise = fetch("/data/concours.json")
          .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
          .then((list) => {
            fullById = new Map(list.map((c) => [c.id, c]));
            return fullById;
          })
          .catch(() => {
            fullPromise = null;
            return null;
          });
      }
      return fullPromise;
    }

    // Debounced: only reports a search term once the visitor has paused
    // typing (~1s), so a term is tallied once per real search, not once per
    // keystroke while it's still being composed. See lib/analytics.js
    // trackSearchMiss — this is the dashboard's only signal for "content
    // visitors are looking for but the catalogue doesn't have".
    let searchMissTimer = null;
    function reportSearchMissDebounced(query) {
      clearTimeout(searchMissTimer);
      searchMissTimer = setTimeout(() => {
        queueTrackEvent({ t: "search-miss", query });
      }, 900);
    }

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

    function stripDiacritics(s) {
      return String(s || "")
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "");
    }

    function normalizeModuleKey(s) {
      return stripDiacritics(s)
        .toLowerCase()
        .trim()
        .replace(/\s+/g, " ");
    }

    // French stopwords dropped from search tokens: without this, typing
    // "management de commerce" never matches a title stored as "Management
    // du Commerce..." because "de" isn't a substring of "du".
    const SEARCH_STOPWORDS = new Set(["de", "du", "des", "le", "la", "les", "et", "un", "une", "au", "aux", "en"]);

    function searchNormalize(s) {
      return stripDiacritics(s).toLowerCase();
    }

    // Splits the query into significant words so "rabat agdal" matches a
    // record where "Rabat" (ville) and "Agdal" (etablissement) are stored in
    // separate fields, not just adjacent in one string.
    function searchTokens(q) {
      const tokens = searchNormalize(q)
        .split(/[^a-z0-9]+/)
        .filter((t) => t.length >= 2 && !SEARCH_STOPWORDS.has(t));
      if (tokens.length) return tokens;
      const fallback = searchNormalize(q).trim();
      return fallback ? [fallback] : [];
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
      document.querySelectorAll("#grid [data-id]").forEach((card) => {
        const btn = card.querySelector(".card-dl");
        if (!btn || btn.dataset.wired === "1") return;
        btn.dataset.wired = "1";
        btn.addEventListener("click", async (e) => {
          e.preventDefault();
          e.stopPropagation();
          const id = card.dataset.id;
          const c = (await loadFull())?.get(id);
          // Fichier injoignable : la fiche du sujet a son propre bouton PDF.
          if (c) downloadConcoursPdf(c);
          else window.location.href = `/concours/${encodeURIComponent(id)}`;
        });
      });
    }

    const FILTER_SELECTS = ["#filterVille", "#filterCategorie", "#filterFiliere", "#filterEtab", "#filterAnnee", "#filterModule"];

    // Libellés du panneau mobile (bouton replié, badge des filtres actifs,
    // bouton « Voir les N résultats ») : invisibles sur ordinateur.
    function syncFilterPanel() {
      const label = `${filtered.length} résultat${filtered.length > 1 ? "s" : ""}`;
      const actifs = FILTER_SELECTS.filter((id) => $(id).value).length;
      document.querySelectorAll(".sp-filter-badge").forEach((b) => {
        b.textContent = String(actifs);
        b.hidden = actifs === 0;
      });
      $(".sp-filter-count").textContent = label;
      $("#filterApply").textContent = filtered.length ? `Voir les ${label}` : "Aucun résultat";
    }

    function renderGrid() {
      $("#resultsCount").textContent = `${filtered.length} résultat${filtered.length > 1 ? "s" : ""}`;
      syncFilterPanel();
      const grid = $("#grid");
      if (filtered.length === 0) {
        grid.innerHTML = `<div class="sp-empty">Aucun concours ne correspond à ces filtres.</div>`;
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
      // Named moduleFilter, not `module`: a bare `module` binding collides
      // with the CommonJS free variable the bundler injects, which webpack
      // flags (@next/next/no-assign-module-variable) as a real hazard.
      const moduleFilter = $("#filterModule").value;
      const q = $("#searchInput").value.trim().toLowerCase();

      filtered = ALL.filter((c) => {
        if (ville && c.ville !== ville) return false;
        if (categorie && c.categorie !== categorie) return false;
        if (filiere && c.filiere !== filiere) return false;
        if (etab && c.etablissement !== etab) return false;
        if (annee && String(c.annee) !== annee) return false;
        if (moduleFilter) {
          const key = normalizeModuleKey(moduleFilter);
          if (!(c.modules || []).some((m) => normalizeModuleKey(m) === key)) return false;
        }
        if (q) {
          const full = fullById?.get(c.id);
          const hay = searchNormalize(
            [c.ville, c.etablissement, c.filiere, c.master_reel, c.annee, full?.notions_cles, full?.enonce_md, (c.modules || []).join(" ")].join(" ")
          );
          const tokens = searchTokens(q);
          if (!tokens.every((t) => hay.includes(t))) return false;
        }
        return true;
      });

      renderGrid();

      // Premier mot tapé : les résultats sur les métadonnées s'affichent tout
      // de suite, puis la recherche repasse dans les énoncés une fois chargés.
      if (q && !fullById) {
        loadFull().then((loaded) => {
          if (loaded && $("#searchInput").value.trim()) applyFilters();
        });
      }

      // Un « aucun résultat » n'est compté qu'une fois les énoncés fouillés,
      // sinon il signalerait comme absent un sujet qui est dans la base.
      if (q.length >= 2 && filtered.length === 0 && fullById) reportSearchMissDebounced(q);
      else clearTimeout(searchMissTimer);
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

    // Panneau de filtres mobile (voir ConcoursListing.js / space.css). Handlers
    // posés en propriétés et non via addEventListener : l'effet tourne deux
    // fois en StrictMode (dev), et un double écouteur sur le bouton replierait
    // aussitôt ce qu'il vient d'ouvrir.
    const filterCard = $("#filterCard");
    const filterToggle = $("#filterToggle");
    const filterFab = $("#filterFab");

    function setFilterPanelOpen(open) {
      filterCard.classList.toggle("is-open", open);
      filterToggle.setAttribute("aria-expanded", String(open));
    }

    // Place le haut de la carte des filtres juste sous le header collant.
    function scrollToFilterPanel() {
      const header = document.querySelector("header.site-header");
      const top = filterCard.getBoundingClientRect().top + window.scrollY - (header ? header.offsetHeight : 0) - 12;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    }

    filterToggle.onclick = () => setFilterPanelOpen(!filterCard.classList.contains("is-open"));
    $("#filterApply").onclick = () => {
      setFilterPanelOpen(false);
      scrollToFilterPanel();
    };
    filterFab.onclick = () => {
      setFilterPanelOpen(true);
      scrollToFilterPanel();
    };

    // Le bouton flottant n'apparaît qu'une fois la carte des filtres sortie
    // de l'écran par le haut, c.-à-d. quand on est descendu dans la liste.
    let filterObserver = null;
    if ("IntersectionObserver" in window) {
      filterObserver = new IntersectionObserver(([entry]) => {
        filterFab.classList.toggle("is-visible", !entry.isIntersecting && entry.boundingClientRect.top < 0);
      });
      filterObserver.observe(filterCard);
    }

    initFilters();
    wireDownloadButtons();

    const statPill = document.getElementById("statPill");
    if (statPill) statPill.textContent = `${ALL.length} concours`;

    // Prefills from ?q= so a direct link lands on filtered results instead
    // of the full list.
    const q = new URLSearchParams(window.location.search).get("q");
    if (q) {
      $("#searchInput").value = q;
      applyFilters();
    }

    return () => filterObserver?.disconnect();
  }, [initialData]);

  return null;
}
