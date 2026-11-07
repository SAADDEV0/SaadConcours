import "./admin.css";
import MathScripts from "../_shared/MathScripts";
import { getSettings } from "@/lib/store";

// Prérendue au build depuis le 2026-11-07, comme les pages publiques : la
// console est une coquille client (toutes ses données passent par
// /api/admin/*), et la rendre à la demande obligeait à démarrer le Worker
// Next.js de 19 Mo, ce qui finissait en Error 1102 sur un isolate froid.
// scripts/prerender-to-assets.mjs publie ces pages dans les assets, et le
// Worker d'entrée (worker/index.js) ne les sert qu'après avoir vérifié la
// session (`run_worker_first` de wrangler.jsonc). Ne pas y lire cookies(),
// headers() ni searchParams côté serveur : la page redeviendrait dynamique et
// le build la refuserait.

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
