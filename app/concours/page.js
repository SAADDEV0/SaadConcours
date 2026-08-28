"use client";

import { useEffect, useRef } from "react";
import { chromeHtml, chromeScript, pub, footerHtml, trackConcoursView } from "../_shared/chrome";
import { downloadConcoursPdf } from "../_shared/concoursPdf";
import { formatQCM } from "../_shared/concoursFormat";

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
      <div class="chip-list" id="moduleChips"></div>
    </div>
    <button class="reset-btn" id="resetBtn">✕ Réinitialiser les filtres</button>
  </aside>

  <main>
    <h1 class="concours-h1">Concours d'accès aux Masters — sujets réels</h1>
    <div class="results-header">
      <div class="results-count" id="resultsCount"></div>
    </div>
    <div class="grid" id="grid"></div>
  </main>
</div>

${footerHtml()}

<div class="modal-overlay" id="modalOverlay">
  <div class="modal">
    <div class="modal-header">
      <div>
        <h2 id="modalTitle"></h2>
        <div class="sub" id="modalSub"></div>
      </div>
      <div class="modal-actions">
        <button class="dl-btn" id="modalDownload" title="Télécharger l'énoncé (PDF)">⬇ Télécharger</button>
        <button class="close-btn" id="modalClose">✕</button>
      </div>
    </div>
    <div class="modal-body">
      <div class="info-row" id="modalInfoRow"></div>
      <div class="tab-bar">
        <button class="tab-btn active" data-tab="enonce">📝 Énoncé</button>
        <button class="tab-btn" data-tab="corrige" id="tabBtnCorrige" style="display:none;">✅ Corrigé</button>
        <button class="tab-btn" data-tab="images">🖼️ Extrait réel</button>
        <button class="tab-btn" data-tab="source">🔗 Source</button>
      </div>
      <div class="tab-panel active" id="panel-enonce"><div class="enonce-content" id="enonceContent"></div></div>
      <div class="tab-panel" id="panel-corrige">
        <div class="corrige-disclaimer">⚠️ Corrigé indicatif (relecture humaine non garantie) — vérifie les calculs avant de t'y fier pour réviser.</div>
        <div class="enonce-content" id="corrigeContent"></div>
      </div>
      <div class="tab-panel" id="panel-images"><div class="image-gallery" id="imageGallery"></div></div>
      <div class="tab-panel" id="panel-source"><div class="source-box" id="sourceContent"></div></div>
    </div>
  </div>
</div>

<div class="lightbox" id="lightbox"><img id="lightboxImg" src="" alt=""></div>
`;

export default function ConcoursPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    chromeScript();

    let ALL = [];
    let filtered = [];
    let activeModule = "";
    let currentModalConcours = null;

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

    function initFilters() {
      const villes = uniq(ALL.map((c) => c.ville));
      const filieres = uniq(ALL.map((c) => c.filiere));
      const etabs = uniq(ALL.map((c) => c.etablissement));
      const annees = uniq(ALL.map((c) => c.annee)).sort((a, b) => String(b).localeCompare(String(a)));
      const modules = uniq(ALL.flatMap((c) => c.modules || []));

      fillSelect("#filterVille", villes);
      fillSelect("#filterFiliere", filieres);
      fillSelect("#filterEtab", etabs);
      fillSelect("#filterAnnee", annees);

      const chipWrap = $("#moduleChips");
      modules.forEach((m) => {
        const chip = document.createElement("span");
        chip.className = "chip";
        chip.textContent = m;
        chip.addEventListener("click", () => {
          activeModule = activeModule === m ? "" : m;
          $$(".chip").forEach((c) => c.classList.toggle("active", c.textContent === activeModule));
          applyFilters();
        });
        chipWrap.appendChild(chip);
      });

      ["#filterVille", "#filterFiliere", "#filterEtab", "#filterAnnee"].forEach((id) => {
        $(id).addEventListener("change", applyFilters);
      });
      $("#searchInput").addEventListener("input", applyFilters);
      $("#resetBtn").addEventListener("click", () => {
        ["#filterVille", "#filterFiliere", "#filterEtab", "#filterAnnee"].forEach((id) => ($(id).value = ""));
        $("#searchInput").value = "";
        activeModule = "";
        $$(".chip").forEach((c) => c.classList.remove("active"));
        applyFilters();
      });
    }

    function applyFilters() {
      const ville = $("#filterVille").value;
      const filiere = $("#filterFiliere").value;
      const etab = $("#filterEtab").value;
      const annee = $("#filterAnnee").value;
      const q = $("#searchInput").value.trim().toLowerCase();

      filtered = ALL.filter((c) => {
        if (ville && c.ville !== ville) return false;
        if (filiere && c.filiere !== filiere) return false;
        if (etab && c.etablissement !== etab) return false;
        if (annee && String(c.annee) !== annee) return false;
        if (activeModule && !(c.modules || []).includes(activeModule)) return false;
        if (q) {
          const hay = [c.ville, c.etablissement, c.filiere, c.annee, c.notions_cles, c.enonce_md, (c.modules || []).join(" ")]
            .join(" ")
            .toLowerCase();
          if (!hay.includes(q)) return false;
        }
        return true;
      });

      renderGrid();
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
        card.innerHTML = `
          <div class="card-top">
            <div class="card-title">${escapeHtml(c.etablissement)}</div>
            <div style="display:flex; align-items:center; gap:6px; flex-shrink:0;">
              <div class="card-year">${escapeHtml(String(c.annee))}</div>
              <a class="card-dl card-link" href="/concours/${encodeURIComponent(c.id)}" title="Ouvrir la page dédiée" onclick="event.stopPropagation()" style="text-decoration:none; display:inline-flex; align-items:center; justify-content:center;">🔗</a>
              <button class="card-dl" title="Télécharger l'énoncé (PDF)">⬇</button>
            </div>
          </div>
          <div class="card-meta">📍 ${escapeHtml(c.ville)} · ${escapeHtml(c.filiere)}</div>
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
        card.addEventListener("click", () => openModal(c));
        card.querySelector("button.card-dl").addEventListener("click", (e) => {
          e.stopPropagation();
          downloadConcoursPdf(c);
        });
        grid.appendChild(card);
      });
    }

    function openLightbox(src) {
      $("#lightboxImg").src = src;
      $("#lightbox").classList.add("open");
    }
    function closeLightbox() {
      $("#lightbox").classList.remove("open");
    }

    // corrige_md is empty when the corrigé exists only as a raw file in the
    // repo's data/corriges/ folder (corrige_from_github, set by GET
    // /api/concours) — render immediately if we already have it, otherwise
    // fetch it lazily so the list load itself doesn't pay for every
    // concours' corrigé content up front.
    function applyCorrige(corrigeMd, c) {
      const render = (md) => {
        const hasCorrige = Boolean(md);
        $("#tabBtnCorrige").style.display = hasCorrige ? "" : "none";
        $("#corrigeContent").innerHTML = hasCorrige ? (window.marked ? marked.parse(md) : md) : "";
      };
      render(corrigeMd);
      if (!corrigeMd && c.corrige_from_github) {
        fetch(`/api/concours/${encodeURIComponent(c.id)}/corrige`)
          .then((res) => (res.ok ? res.json() : null))
          .then((data) => {
            if (data && data.corrige_md && currentModalConcours === c) render(data.corrige_md);
          })
          .catch(() => {});
      }
    }

    function openModal(c) {
      currentModalConcours = c;
      trackConcoursView(c.id);
      $("#modalTitle").textContent = `${c.etablissement} — ${c.annee}`;
      $("#modalSub").textContent = `${c.filiere} · ${c.ville}`;
      $("#modalInfoRow").innerHTML = `
        <span class="info-tag">📍 ${escapeHtml(c.ville)}</span>
        <span class="info-tag">🏫 ${escapeHtml(c.etablissement)}</span>
        <span class="info-tag">🎓 ${escapeHtml(c.filiere)}</span>
        <span class="info-tag">📅 ${escapeHtml(String(c.annee))}</span>
        <span class="info-tag">⭐ ${escapeHtml(c.difficulte || "?")}</span>
      `;

      const formattedEnonce = formatQCM(c.enonce_md);
      const enonceHtml = window.marked ? marked.parse(formattedEnonce || "*Énoncé non disponible.*") : formattedEnonce || "";
      $("#enonceContent").innerHTML = enonceHtml;

      applyCorrige(c.corrige_md, c);

      const gallery = $("#imageGallery");
      gallery.innerHTML = "";
      if ((c.images || []).length) {
        c.images.forEach((src) => {
          const img = document.createElement("img");
          img.src = pub(src);
          img.alt = `Extrait scanné — ${c.etablissement} ${c.ville} ${c.annee}`;
          img.loading = "lazy";
          img.addEventListener("click", () => openLightbox(pub(src)));
          gallery.appendChild(img);
        });
      } else {
        gallery.innerHTML = "<div class=\"no-images\">Image source non récupérable (lien d'origine inaccessible).</div>";
      }

      $("#sourceContent").innerHTML = window.marked ? marked.parse(c.source || "") : c.source || "";

      $$(".tab-btn").forEach((b) => b.classList.toggle("active", b.dataset.tab === "enonce"));
      $$(".tab-panel").forEach((p) => p.classList.toggle("active", p.id === "panel-enonce"));

      $("#modalOverlay").classList.add("open");
      document.body.style.overflow = "hidden";

      if (window.renderMathInElement) {
        renderMathInElement($("#enonceContent"), {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
          ],
          throwOnError: false,
        });
      }
    }

    function closeModal() {
      $("#modalOverlay").classList.remove("open");
      document.body.style.overflow = "";
    }


    $("#modalClose").addEventListener("click", closeModal);
    $("#modalOverlay").addEventListener("click", (e) => {
      if (e.target.id === "modalOverlay") closeModal();
    });
    $("#modalDownload").addEventListener("click", () => {
      if (currentModalConcours) downloadConcoursPdf(currentModalConcours);
    });
    $$(".tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        $$(".tab-btn").forEach((b) => b.classList.remove("active"));
        $$(".tab-panel").forEach((p) => p.classList.remove("active"));
        btn.classList.add("active");
        $("#panel-" + btn.dataset.tab).classList.add("active");
      });
    });
    $("#lightbox").addEventListener("click", closeLightbox);

    function onKeydown(e) {
      if (e.key === "Escape") {
        closeModal();
        closeLightbox();
      }
    }
    document.addEventListener("keydown", onKeydown);

    fetch("/api/concours")
      .then((r) => r.json())
      .then((data) => {
        ALL = data;
        initFilters();
        applyFilters();
      })
      .catch((err) => {
        $("#grid").innerHTML = `<div class="empty-state">Erreur de chargement des données : ${err}</div>`;
      });

    return () => {
      document.removeEventListener("keydown", onKeydown);
    };
  }, []);

  return <div ref={containerRef} dangerouslySetInnerHTML={{ __html: MARKUP }} />;
}
