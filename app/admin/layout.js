import "./admin.css";
import MathScripts from "../_shared/MathScripts";
import { getSettings } from "@/lib/store";

// Jamais prérendue : scripts/prerender-to-assets.mjs refuse toute page /admin
// en HTML statique (les assets passent avant middleware.js). Jusqu'ici, la
// lecture de getSettings() par l'API GitHub rendait la console dynamique par
// effet de bord ; depuis qu'elle lit le checkout pendant le build, il faut le
// dire explicitement.
export const dynamic = "force-dynamic";

export const metadata = {
  title: { template: "%s · Console SaadConcours", absolute: "Console SaadConcours" },
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }) {
  // Le layout racine du site pose Google Analytics sur toutes les pages, admin
  // compris : chaque passage dans la console comptait comme une visite dans
  // GA. Ce drapeau officiel (« ga-disable-<ID> ») coupe la mesure avant que
  // gtag ne démarre, sans rendre les pages publiques dynamiques.
  const settings = await getSettings().catch(() => null);
  const gaId = settings?.gaEnabled && settings?.gaMeasurementId ? String(settings.gaMeasurementId) : "";
  return (
    <>
      {gaId && /^[A-Z0-9-]+$/.test(gaId) && (
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: `window["ga-disable-${gaId}"]=true;try{localStorage.setItem("sc_no_track","1")}catch(e){}` }}
        />
      )}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" precedence="default" />
      <MathScripts />
      {children}
    </>
  );
}
