"use client";

import { useEffect } from "react";
import { chromeScript, queueTrackEvent } from "../_shared/chrome";
import { downloadConcoursPdf } from "../_shared/concoursPdf";
import { FILIERE_CATEGORIES, categoryOptions, subFiliereOptions } from "../../lib/taxonomy";
import { concoursCardHtml, compareConcoursRecents, anneeNum } from "../_shared/concoursCard";
import { difficulteNote } from "../_shared/format";

// Tris proposés par le <select id="sortSelect"> (ConcoursListing.js).
// « recents » est l'ordre dans lequel le serveur a déjà rendu la grille.
const SORTS = {
  recents: compareConcoursRecents,
  ajouts: (a, b) => String(b.date_ajout || "").localeCompare(String(a.date_ajout || "")) || compareConcoursRecents(a, b),
  // Années non datées toujours en fin de liste, quel que soit le sens.
  anciens: (a, b) => (anneeNum(a) < 0) - (anneeNum(b) < 0) || anneeNum(a) - anneeNum(b) || compareConcoursRecents(a, b),
  facile: (a, b) => (difficulteNote(a.difficulte) ?? 9) - (difficulteNote(b.difficulte) ?? 9) || compareConcoursRecents(a, b),
  difficile: (a, b) => (difficulteNote(b.difficulte) ?? 0) - (difficulteNote(a.difficulte) ?? 0) || compareConcoursRecents(a, b),
};

// Hydrates the server-rendered /concours page: fills the filter <select>s,
// wires the download buttons on the already-visible cards, and only
// replaces the grid's innerHTML once the visitor actually filters/searches
// — the initial unfiltered list stays exactly what the server sent.
export default function ConcoursExplorer({ initialData, pageSize = 24 }) {
  useEffect(() => {
    chromeScript();

    const ALL = initialData || [];
    let filtered = ALL;
    // Nombre de cartes visibles : remis à une page à chaque filtre ou tri.
    let shown = pageSize;

    const $ = (sel) => document.querySelector(sel);

    // initialData ne porte que les données des cartes (concoursListItem) :
    // le texte des sujets (énoncé, notions clés) n'est chargé qu'au
    // premier PDF, depuis le fichier statique que
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

    // Badge du bouton « Filtres », bouton « Voir les N résultats » de la
    // feuille (téléphone) et pastilles des filtres actifs au-dessus de la
    // liste : un filtre posé reste visible, et se retire d'un geste.
    function syncFilterPanel() {
      const label = `${filtered.length} résultat${filtered.length > 1 ? "s" : ""}`;
      const actifs = FILTER_SELECTS.filter((id) => $(id).value);
      document.querySelectorAll(".sp-filter-badge").forEach((b) => {
        b.textContent = String(actifs.length);
        b.hidden = actifs.length === 0;
      });
      $("#filterApply").textContent = filtered.length ? `Voir les ${label}` : "Aucun résultat";
      const chips = $("#activeFilters");
      if (chips) {
        chips.innerHTML = actifs
          .map((id) => {
            const el = $(id);
            const text = el.options[el.selectedIndex]?.textContent || el.value;
            return `<button type="button" class="sp-active-chip" data-clear="${id}" aria-label="Retirer le filtre ${text.replace(/"/g, "&quot;")}">${text.replace(/</g, "&lt;")}<svg class="ic" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg></button>`;
          })
          .join("");
      }
    }

    // Bouton « Voir plus » : caché quand toutes les cartes sont visibles.
    function syncMore() {
      const restants = Math.max(0, filtered.length - shown);
      $("#moreWrap").hidden = restants === 0;
      $("#moreCount").textContent = `(${restants} restant${restants > 1 ? "s" : ""})`;
    }

    function renderGrid() {
      $("#resultsCount").textContent = `${filtered.length} résultat${filtered.length > 1 ? "s" : ""}`;
      syncFilterPanel();
      const grid = $("#grid");
      shown = pageSize;
      if (filtered.length === 0) {
        grid.innerHTML = `<div class="sp-empty sp-rows-empty">Aucun sujet ne correspond. Essaie un autre mot, ou retire un filtre.</div>`;
        syncMore();
        return;
      }
      grid.innerHTML = filtered.map((c, i) => concoursCardHtml(c, { hidden: i >= shown })).join("");
      wireDownloadButtons();
      syncMore();
    }

    // Les cartes suivantes sont déjà dans la grille, en `hidden` : on les
    // révèle par paquets sans rien re-rendre, et le focus passe sur la
    // première carte révélée pour que le clavier enchaîne naturellement.
    $("#moreBtn").onclick = () => {
      const caches = [...document.querySelectorAll("#grid > a[hidden]")].slice(0, pageSize);
      caches.forEach((el) => el.removeAttribute("hidden"));
      shown += caches.length;
      syncMore();
      caches[0]?.focus({ preventScroll: true });
    };

    function sortFiltered() {
      const cmp = SORTS[$("#sortSelect").value] || SORTS.recents;
      filtered = [...filtered].sort(cmp);
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
        // La recherche ne porte que sur le titre du master (celui affiché sur
        // la carte), la faculté et la ville : pas sur l'énoncé, les notions
        // ni les modules.
        if (q) {
          const hay = searchNormalize([c.master_reel || c.filiere, c.etablissement, c.ville].join(" "));
          const tokens = searchTokens(q);
          if (!tokens.every((t) => hay.includes(t))) return false;
        }
        return true;
      });

      sortFiltered();
      renderGrid();

      if (q.length >= 2 && filtered.length === 0) reportSearchMissDebounced(q);
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
      // Le filtrage est instantané : « Entrée » ferme seulement le clavier mobile.
      $("#listSearchForm").addEventListener("submit", (e) => {
        e.preventDefault();
        $("#searchInput").blur();
      });
      $("#sortSelect").addEventListener("change", () => {
        sortFiltered();
        renderGrid();
      });
      $("#resetBtn").addEventListener("click", () => {
        ["#filterVille", "#filterCategorie", "#filterEtab", "#filterAnnee", "#filterModule"].forEach((id) => ($(id).value = ""));
        fillFiliereSelect("");
        $("#searchInput").value = "";
        applyFilters();
      });
      // Pastille d'un filtre actif : la toucher retire ce filtre. Propriété
      // plutôt qu'addEventListener : l'effet tourne deux fois en StrictMode.
      $("#activeFilters").onclick = (e) => {
        const chip = e.target.closest("[data-clear]");
        if (!chip) return;
        const id = chip.getAttribute("data-clear");
        $(id).value = "";
        if (id === "#filterCategorie") fillFiliereSelect("");
        applyFilters();
      };
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
  }, [initialData, pageSize]);

  return null;
}
