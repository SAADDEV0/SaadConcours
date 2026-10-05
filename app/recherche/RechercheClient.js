"use client";

import { useEffect } from "react";
import { chromeScript, queueTrackEvent } from "../_shared/chrome";

// Familles de résultats, dans l'ordre d'affichage.
const GROUPES = [
  { k: "concours", titre: "Sujets de concours" },
  { k: "cours", titre: "Cours" },
  { k: "chapitre", titre: "Chapitres" },
  { k: "qcm", titre: "QCM d'entraînement" },
  { k: "article", titre: "Articles" },
];
const PAR_GROUPE = 6;


// Mots vides retirés de la requête : « management de commerce » doit
// trouver « Management du Commerce… » (même règle que ConcoursExplorer).
const STOPWORDS = new Set(["de", "du", "des", "le", "la", "les", "et", "un", "une", "au", "aux", "en", "d", "l"]);

function norm(s) {
  return String(s || "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

function tokens(q) {
  return norm(q)
    .split(/[^a-z0-9]+/)
    .filter((t) => t && !STOPWORDS.has(t));
}

function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// Surligne les mots cherchés dans un texte affiché, sans perdre ses accents :
// la correspondance se fait sur la version normalisée, caractère par
// caractère (NFD ne fait que retirer les diacritiques, la longueur suit).
function surligne(text, toks) {
  if (!toks.length) return esc(text);
  const src = String(text || "");
  const plain = norm(src);
  if (plain.length !== src.length) return esc(src);
  const marks = new Array(src.length).fill(false);
  for (const t of toks) {
    let i = plain.indexOf(t);
    while (i !== -1) {
      for (let j = i; j < i + t.length; j++) marks[j] = true;
      i = plain.indexOf(t, i + t.length);
    }
  }
  let out = "";
  let open = false;
  for (let i = 0; i < src.length; i++) {
    if (marks[i] && !open) {
      out += "<mark>";
      open = true;
    } else if (!marks[i] && open) {
      out += "</mark>";
      open = false;
    }
    out += esc(src[i]);
  }
  return out + (open ? "</mark>" : "");
}

export default function RechercheClient({ index }) {
  useEffect(() => {
    chromeScript();

    const items = (index || []).map((e) => ({ ...e, nt: norm(e.t), ns: norm(e.s), nx: norm(e.x) }));
    const input = document.getElementById("srInput");
    const status = document.getElementById("srStatus");
    const results = document.getElementById("srResults");
    if (!input || !results) return;
    const ouverts = new Set(); // groupes dépliés (« Voir les N »)
    let missTimer = null;
    let urlTimer = null;

    function score(e, toks) {
      let s = 0;
      for (const t of toks) {
        const inTitle = e.nt.indexOf(t);
        if (inTitle !== -1) s += inTitle === 0 || e.nt[inTitle - 1] === " " ? 6 : 4;
        else if (e.ns.includes(t)) s += 2;
        else if (e.nx.includes(t)) s += 1;
        else return 0;
      }
      return s;
    }

    // État sans recherche : celui rendu au serveur (page.js), gardé tel quel.
    const accueilHtml = results.innerHTML;
    function accueil() {
      status.textContent = "";
      results.innerHTML = accueilHtml;
    }

    function render() {
      const q = input.value.trim();
      const toks = tokens(q);
      if (!toks.length) {
        accueil();
        return;
      }
      const found = items
        .map((e) => ({ e, s: score(e, toks) }))
        .filter((r) => r.s > 0)
        .sort((a, b) => b.s - a.s || a.e.t.localeCompare(b.e.t, "fr"));
      clearTimeout(missTimer);
      if (!found.length) {
        status.textContent = "";
        results.innerHTML = `<div class="sr-empty"><p><strong>Aucun résultat pour « ${esc(q)} ».</strong></p><p>Vérifie l'orthographe, essaie un mot plus court (« CCA », « Agadir ») ou parcours les <a href="/concours">sujets de concours</a>.</p></div>`;
        if (q.length >= 2) missTimer = setTimeout(() => queueTrackEvent({ t: "search-miss", query: q.toLowerCase() }), 900);
        return;
      }
      status.textContent = `${found.length} résultat${found.length > 1 ? "s" : ""} pour « ${q} »`;
      results.innerHTML = GROUPES.map((g) => {
        const list = found.filter((r) => r.e.k === g.k);
        if (!list.length) return "";
        const shown = ouverts.has(g.k) ? list : list.slice(0, PAR_GROUPE);
        return `<section class="sr-group"><div class="sr-group-head"><h2>${g.titre}</h2><span>${list.length}</span></div>
          <div class="sp-rows">${shown
            .map(
              ({ e }) =>
                `<a class="sp-row" href="${esc(e.u)}"><span class="sp-row-main"><span class="sp-row-title">${surligne(e.t, toks)}</span><span class="sp-row-meta"><span>${surligne(e.s, toks)}</span></span></span></a>`
            )
            .join("")}</div>
          ${list.length > shown.length ? `<button type="button" class="sp-btn sr-more" data-more="${g.k}">Voir les ${list.length} ${g.titre.toLowerCase()}</button>` : ""}
        </section>`;
      }).join("");
    }

    function syncUrl() {
      clearTimeout(urlTimer);
      urlTimer = setTimeout(() => {
        const q = input.value.trim();
        const url = q ? `/recherche?q=${encodeURIComponent(q)}` : "/recherche";
        window.history.replaceState(null, "", url);
      }, 400);
    }

    const onInput = () => {
      ouverts.clear();
      render();
      syncUrl();
    };
    const onSubmit = (e) => {
      e.preventDefault();
      input.blur();
    };
    const onClick = (e) => {
      const more = e.target.closest("[data-more]");
      if (more) {
        ouverts.add(more.getAttribute("data-more"));
        render();
        return;
      }
      const sug = e.target.closest("[data-q]");
      if (sug) {
        e.preventDefault();
        input.value = sug.getAttribute("data-q");
        onInput();
      }
    };
    input.addEventListener("input", onInput);
    document.getElementById("srForm")?.addEventListener("submit", onSubmit);
    results.addEventListener("click", onClick);

    const q = new URLSearchParams(window.location.search).get("q") || "";
    input.value = q;
    render();
    // Arrivée par l'onglet « Recherche » : le clavier s'ouvre tout de suite.
    // Arrivée avec une requête (accueil, header) : les résultats d'abord.
    if (!q) input.focus({ preventScroll: true });

    return () => {
      input.removeEventListener("input", onInput);
      document.getElementById("srForm")?.removeEventListener("submit", onSubmit);
      results.removeEventListener("click", onClick);
      clearTimeout(missTimer);
      clearTimeout(urlTimer);
    };
  }, [index]);

  return null;
}
