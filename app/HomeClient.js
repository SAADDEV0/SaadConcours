"use client";

import { useEffect } from "react";
import { chromeScript } from "./_shared/chrome";

// Hydrates the server-rendered homepage: header behavior (theme toggle,
// mobile nav, dua banner...) plus the two bits that have nothing to crawl
// and so were never worth server-rendering — the alert subscribe form and
// the partner banner ad. `settings` is passed down from the server
// component instead of re-fetched here, since app/page.js already needs it
// for the "concours récemment ouverts" section.
export default function HomeClient({ settings }) {
  useEffect(() => {
    chromeScript();

    if (settings?.adsEnabled && settings?.adsHomeBannerEnabled && settings?.adsPublisherId && settings?.adsHomeBannerSlot) {
      const holder = document.getElementById("homeBannerAd");
      if (holder) {
        holder.innerHTML = `
          <div class="ad-slot" aria-label="Publicité">
            <span class="ad-slot-label">Publicité</span>
            <ins class="adsbygoogle" style="display:block" data-ad-client="${settings.adsPublisherId}" data-ad-slot="${settings.adsHomeBannerSlot}" data-ad-format="auto" data-full-width-responsive="true"></ins>
          </div>
        `;
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    }

    const alertForm = document.getElementById("alertForm");
    // Guard against React StrictMode's dev-only double effect invoke
    // double-registering this submit listener (same fix as the cours
    // reading-theme picker) - a submit listener firing twice would submit
    // the subscribe request twice.
    if (alertForm && alertForm.dataset.wired !== "1") {
      alertForm.dataset.wired = "1";
      alertForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("alertEmail").value.trim();
        const msg = document.getElementById("alertFormMsg");
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
  }, [settings]);

  return null;
}
