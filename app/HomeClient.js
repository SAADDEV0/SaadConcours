"use client";

import { useEffect } from "react";
import { chromeScript } from "./_shared/chrome";

// Hydrates the server-rendered homepage: header behavior (theme toggle,
// mobile nav, dua banner...) plus the AdSense home banner, which has nothing
// to crawl. `settings` is passed down from the server component instead of
// re-fetched here.
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
  }, [settings]);

  return null;
}
