import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getSettings } from "@/lib/store";
import { adsForPlacement, reservationCss } from "./_shared/partnerAds";
import EmailGateModal from "./_shared/EmailGateModal";

const SITE_URL = "https://www.saadconcours.space";
const SITE_NAME = "SaadConcours";
const SITE_TITLE = "SaadConcours — Concours Masters Économie & Gestion au Maroc";
const SITE_DESCRIPTION =
  "Base de données gratuite de sujets de concours réels d'accès aux Masters économie-gestion (Finance, Comptabilité & Audit, Management & RH, Marketing & Commerce, Économie Appliquée, Data & Économétrie) dans les universités marocaines — énoncés, corrigés indicatifs, fiches de cours et QCM d'entraînement.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: "%s | SaadConcours" },
  description: SITE_DESCRIPTION,
  keywords: [
    "concours master maroc", "master économie gestion maroc", "master finance maroc", "master marketing maroc",
    "master management maroc", "ENCG concours", "FSJES master", "concours accès master maroc", "épreuves concours master",
  ],
  alternates: { canonical: "/" },
  // Real favicon/apple-icon files (app/icon.js, app/apple-icon.js) replace
  // the old inline data:image/svg+xml URI here — Next picks them up
  // automatically via its file convention, no manual `icons` needed.
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
  // these specific meta tags instead — apple-touch-icon itself already
  // comes from app/apple-icon.js.
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "black-translucent",
  },
};

export const viewport = {
  themeColor: "#4f46e5",
};

const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  areaServed: { "@type": "Country", name: "Maroc" },
};

// Lets Google show a search box directly in the SERP for site: queries
// ("sitelinks search box") — target actually works, see the ?q= handling
// added to app/concours/page.js.
const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/concours?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default async function RootLayout({ children }) {
  const settings = await getSettings().catch(() => null);
  const adsEnabled = Boolean(settings?.adsEnabled && settings?.adsPublisherId);
  const gaEnabled = Boolean(settings?.gaEnabled && settings?.gaMeasurementId);
  // Réservation d'espace pour les bannières partenaires (voir reservationCss).
  // Ne cible que le haut et le bas de page : la colonne latérale est posée dans
  // sa propre cellule ou en flottant, elle ne pousse rien.
  const partnerAdReservation = ["header", "footer"]
    .map((placement) => reservationCss(placement, adsForPlacement(settings, placement)))
    .join("");

  return (
    // suppressHydrationWarning: data-theme is stamped on by the pre-paint
    // script below, so it is always an "extra" attribute at hydration time.
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Applies the saved light/dark choice before the first paint.
           chromeScript() also sets data-theme, but only from a useEffect
           after hydration — so anyone reading in dark mode on a light OS got
           a full-page white flash on every single navigation, and the cours
           reader flashed the site palette before its reading theme landed. */}
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
        {partnerAdReservation && (
          <style
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: partnerAdReservation }}
          />
        )}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap" rel="stylesheet" />
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
        {children}
        <EmailGateModal />
        <Analytics />
        <SpeedInsights sampleRate={0.3} />
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
