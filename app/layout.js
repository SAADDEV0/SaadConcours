// Feuilles du site public, une seule couche : jetons et chrome (globals.css),
// composants de contenu (bac.css, partagés par tous les espaces malgré leur
// préfixe historique bac-*), composants propres aux listes, fiches et
// boutique (space.css). Aucune ne redessine une autre.
import "./globals.css";
import "./bac/bac.css";
import "./_shared/space.css";
import Script from "next/script";
import { IBM_Plex_Sans_Arabic, Literata, Noto_Naskh_Arabic, Plus_Jakarta_Sans } from "next/font/google";
import DuaToast from "./_shared/DuaToast";
import { getSettings } from "@/lib/store";
import { adsForPlacement, partnerAdsOptions, publicPartnerAdsConfig, reservationCss } from "./_shared/partnerAds";

// Police du site, téléchargée au build et servie par le site lui-même
// (next/font) : pas de requête vers Google au chargement, pas de saut de
// mise en page (métriques de repli ajustées), exposée en --font-sans.
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

// Police de lecture des textes longs (cours, énoncés, corrigés, articles),
// dessinée pour la lecture sur écran. Pas de préchargement : la plupart des
// pages (listes, accueil) n'en affichent pas une ligne.
const literata = Literata({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  display: "swap",
  preload: false,
  variable: "--font-read",
});

// Polices arabes (cours de droit en arabe…) : IBM Plex Sans Arabic pour
// l'interface, Noto Naskh Arabic pour la lecture des textes longs.
// Pas de préchargement : seules les pages en arabe les affichent.
const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: false,
  variable: "--font-ar-sans",
});

const naskhArabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: false,
  variable: "--font-ar-read",
});

const SITE_URL = "https://www.saadconcours.space";
const SITE_NAME = "SaadConcours";
// ≤ 65 et ≤ 155 caractères : voir app/_shared/seoText.js.
// FSJES (requête des élèves) : économie-gestion, et droit depuis le 2026-10-17.
const SITE_TITLE = "SaadConcours — Cours Bac, FSJES, droit et concours Master";
const SITE_DESCRIPTION =
  "Cours gratuits du Bac SEG, de la Licence FSJES en économie-gestion et en droit, QCM et sujets réels des concours Master au Maroc corrigés.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: "%s | SaadConcours" },
  description: SITE_DESCRIPTION,
  keywords: [
    "cours bac sciences économiques", "2 bac sciences économiques et gestion", "cours comptabilité bac maroc", "exercices corrigés bac eco",
    "cours fsjes", "licence économie gestion maroc", "cours s1 fsjes", "exercices corrigés fsjes",
    "cours droit fsjes", "licence droit maroc", "cours droit s1", "droit constitutionnel s1", "cours droit en arabe", "دروس القانون s1", "محاضرات القانون",
    "concours master maroc", "master économie gestion maroc", "concours accès master fsjes encg", "sujets concours master",
  ],
  alternates: { canonical: "/" },
  // Real favicon files (Google's favicon crawler wants a stable image URL of
  // at least 48x48, not a data: URI). Static files in public/ since
  // 2026-10-28: as Next routes (app/icon.js, app/apple-icon.js, app/icon-*,
  // app/manifest.js) they were served by the Worker on every request. They
  // were drawn by buildAppIcon (app/_shared/appIcon.js) : redraw them from
  // there if the logo changes.
  icons: {
    icon: [{ url: "/icon.png", sizes: "64x64", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: { index: true, follow: true },
  verification: { google: "psUjgmpZoBIvwFbyh0gIAS6cYM0MzeOU9Apw_swXJ7g" },
  other: { "google-adsense-account": "ca-pub-5993944156610700" },
  // iOS Safari ignores the web manifest for "Add to Home Screen" and reads
  // these specific meta tags instead — apple-touch-icon itself comes from
  // `icons.apple` above.
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "black-translucent",
  },
};

// Barre du navigateur mobile de la couleur du fond de page (papier / nuit),
// d'après le système ; chromeScript() la recale sur le thème choisi (voir
// syncThemeColor). Et viewport-fit=cover pour que la barre d'onglets du bas
// tienne compte de la zone de geste des téléphones
// (env(safe-area-inset-bottom)).
export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f7f9" },
    { media: "(prefers-color-scheme: dark)", color: "#13141f" },
  ],
  viewportFit: "cover",
};

const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  areaServed: { "@type": "Country", name: "Maroc" },
  // Ce que couvre le site, pour que Google ne le range pas en « économie-gestion » seulement.
  knowsAbout: ["Économie", "Gestion", "Comptabilité", "Finance", "Droit", "Droit privé", "Droit public", "Concours Master"],
  knowsLanguage: ["fr", "ar"],
};

// Nom du site affiché par Google au-dessus des résultats. Plus de
// potentialAction/SearchAction : Google a retiré la « sitelinks search box »
// en novembre 2024 et n'en lit plus le balisage. Le ?q= de /concours
// (ConcoursExplorer.js) reste utilisable dans un lien.
const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

// Réglages des liens du pied de page (SOCIAL_NETWORKS, app/_shared/chrome.js).
const SOCIAL_KEYS = ["facebook", "instagram", "whatsapp", "tiktok", "youtube", "telegram", "email"];

export default async function RootLayout({ children }) {
  const settings = await getSettings().catch(() => null);
  const adsEnabled = Boolean(settings?.adsEnabled && settings?.adsPublisherId);
  const gaEnabled = Boolean(settings?.gaEnabled && settings?.gaMeasurementId);
  // Réservation d'espace pour les bannières partenaires (voir reservationCss).
  // Haut, bas de page et zone « dans le contenu » : les colonnes latérales
  // flottent dans la marge, elles ne poussent rien.
  const { labelPosition } = partnerAdsOptions(settings);
  const partnerAdReservation = ["header", "inline", "footer"]
    .map((placement) => reservationCss(placement, adsForPlacement(settings, placement), { labelPosition }))
    .join("");
  // Configuration publique des bannières, inscrite dans la page : le site les
  // affiche dès l'hydratation sans appeler le Worker (voir chrome.js). Pas de
  // balise du tout quand les réglages n'ont pas pu être lus au build — le
  // navigateur se rabat alors sur /data/settings.json. « < » échappé : le JSON
  // ne doit jamais pouvoir fermer la balise <script>.
  // Bouton WhatsApp flottant (posé par footerHtml) masqué depuis les réglages.
  const hideWhatsappFab = settings?.whatsappFabEnabled === false;
  const partnerAdsJson = settings
    ? JSON.stringify(publicPartnerAdsConfig(settings) || { partnerAdsEnabled: false }).replace(/</g, "\\u003c")
    : null;
  // Liens du pied de page (réseaux sociaux), inscrits dans la page comme les
  // bannières : avant le 2026-10-28, chaque page vue les demandait à
  // /api/settings, donc au Worker (quota du plan gratuit).
  const socialJson = settings
    ? JSON.stringify(Object.fromEntries(SOCIAL_KEYS.filter((k) => settings[k]).map((k) => [k, settings[k]]))).replace(/</g, "\\u003c")
    : null;

  return (
    // suppressHydrationWarning: data-theme is stamped on by the pre-paint
    // script below, so it is always an "extra" attribute at hydration time.
    // data-scroll-behavior: globals.css sets scroll-behavior:smooth on <html>;
    // since Next 16 the router only switches it off during a navigation when
    // this attribute asks it to, as Next 15 always did (instant jump to top).
    <html lang="fr" data-scroll-behavior="smooth" className={`${jakarta.variable} ${literata.variable} ${plexArabic.variable} ${naskhArabic.variable}`} suppressHydrationWarning>
      <head>
        {/* Applies the saved light/dark choice before the first paint.
           chromeScript() also sets data-theme, but only from a useEffect
           after hydration — so anyone reading in dark mode on a light OS got
           a full-page white flash on every single navigation. */}
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme")||(window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");document.documentElement.setAttribute("data-theme",t);}catch(e){}`,
          }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSON_LD) }}
        />
        {/* katex.min.css is injected client-side by chromeScript() instead of
           linked here — a render-blocking stylesheet on every single page
           (most of which show no math at all) was hurting LCP site-wide. */}
        {hideWhatsappFab && <style>{".wa-fab{display:none!important}"}</style>}
        {partnerAdReservation && (
          <style
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: partnerAdReservation }}
          />
        )}
        {adsEnabled && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${settings.adsPublisherId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
        {gaEnabled && (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${settings.gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-gtag" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${settings.gaMeasurementId}');`}
            </Script>
          </>
        )}
      </head>
      <body>
        {partnerAdsJson && (
          <script
            id="sc-partner-ads"
            type="application/json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: partnerAdsJson }}
          />
        )}
        {socialJson && (
          <script
            id="sc-social"
            type="application/json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: socialJson }}
          />
        )}
        {children}
        <DuaToast />
        {/* <EmailGateModal /> (app/_shared/EmailGateModal.js) retirée le
           2026-09-24 pour la demande AdSense : une modale qui recouvre la
           page à la 2e vue est un interstitiel intrusif, et elle promettait
           des alertes email que le site n'envoie plus. Le composant reste en
           place ; le réimporter ici suffit à la remettre. */}
        {/* <Analytics /> et <SpeedInsights /> retirés le 2026-09-21 : leurs
           scripts vivent sous /_vercel/*, qui n'existe pas sur Cloudflare.
           Ils partaient donc en 404 SERVIS PAR LE WORKER (x-opennext: 1) —
           2 à 3 invocations gâchées par page vue, chacune pouvant tomber sur
           un isolate froid et rendre une Error 1102. Coût réel, bénéfice nul.
           L'audience est déjà mesurée par lib/analytics.js et, si un
           gaMeasurementId est réglé, par le script GA ci-dessus. */}
        {/* marked/jsPDF/jsPDF-AutoTable/svg2pdf.js/MathJax used to load here
           unconditionally on every route — ~250KB+ of PDF-export/typesetting
           JS paid for by every listing page, the blog, /news, /faq and all
           of /admin, even though none of it runs until a "Télécharger PDF" /
           "Aperçu PDF" click. They now load on demand from that click
           instead, see app/_shared/pdfScripts.js (which also owns the
           MathJax fontCache config previously set here) — the admin PDF
           buttons already had a defensive `if (!window.jspdf) "réessaie
           dans quelques secondes"` check, proof the eager load never
           actually guaranteed availability by the time it was needed, just
           usually won the race. KaTeX (page-display math, separate from
           this PDF-typesetting MathJax) moved the same way, see
           app/_shared/MathScripts.js. */}
      </body>
    </html>
  );
}
