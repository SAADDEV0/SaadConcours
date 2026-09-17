"use client";

import { useEffect } from "react";
import { chromeScript } from "../_shared/chrome";
import { etabGroup, newsCardHtml } from "../_shared/newsCard";

// Hydrates the server-rendered /news page: header behavior (theme toggle,
// mobile nav, dua banner...) plus the search box / établissement chips /
// "afficher les clôturés" toggle, only replacing the grid's innerHTML once
// the visitor actually filters — the initial open-and-sorted list stays
// exactly what the server sent (mirrors ConcoursExplorer.js /
// CoursExplorer.js). initialData includes closed entries too, needed for
// the "afficher les clôturés" toggle.
export default function NewsExplorer({ initialData }) {
  useEffect(() => {
    chromeScript();

    const ALL = initialData || [];
    let etabFilter = "Tous";
    let showClosed = false;

    const $ = (sel) => document.querySelector(sel);

    function render() {
      const q = ($("#nwSearch")?.value || "").trim().toLowerCase();
      const grid = $("#nwGrid");
      if (!grid) return;

      let items = ALL.filter((i) => showClosed || !i.cloture);
      if (etabFilter !== "Tous") items = items.filter((i) => etabGroup(i.etablissement) === etabFilter);
      if (q) {
        items = items.filter((i) => [i.titre, i.etablissement, i.ville, i.filiere].join(" ").toLowerCase().includes(q));
      }

      if (!items.length) {
        grid.innerHTML = `<div class="empty-state">Aucun concours ne correspond à ces filtres.</div>`;
        return;
      }
      grid.innerHTML = items.map(newsCardHtml).join("");
    }

    $("#nwEtabChips")
      ?.querySelectorAll(".chip")
      .forEach((chip) => {
        chip.addEventListener("click", () => {
          etabFilter = chip.dataset.group;
          $("#nwEtabChips")
            .querySelectorAll(".chip")
            .forEach((c) => c.classList.toggle("active", c === chip));
          render();
        });
      });

    $("#nwSearch")?.addEventListener("input", render);
    $("#nwShowClosed")?.addEventListener("change", (e) => {
      showClosed = e.target.checked;
      render();
    });

    const alertForm = $("#alertForm");
    // Guard against React StrictMode's dev-only double effect invoke
    // double-registering this listener - a submit would fire the subscribe
    // request twice otherwise (same fix as the cours reading-theme picker).
    if (alertForm && alertForm.dataset.wired !== "1") {
      alertForm.dataset.wired = "1";
      alertForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = $("#alertEmail").value.trim();
        const msg = $("#alertFormMsg");
        fetch("/api/alerts/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        })
          .then((r) => r.json().then((data) => ({ ok: r.ok, data })))
          .then(({ ok, data }) => {
            msg.textContent = ok ? "✅ Inscrit ! Tu recevras un email avant la clôture." : data.error || "Erreur.";
            msg.className = "alert-form-msg" + (ok ? " ok" : " error");
            if (ok) alertForm.reset();
          })
          .catch(() => {
            msg.textContent = "Erreur réseau, réessaie.";
            msg.className = "alert-form-msg error";
          });
      });
    }

    if (new URLSearchParams(window.location.search).get("desabonne") === "1") {
      const msg = $("#alertFormMsg");
      if (msg) {
        msg.textContent = "Tu as bien été désabonné des alertes.";
        msg.className = "alert-form-msg ok";
      }
    }
  }, [initialData]);

  return null;
}
