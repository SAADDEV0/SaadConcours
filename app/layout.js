import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

const SITE_URL = "https://www.saadconcours.space";
const SITE_NAME = "SaadConcours";
const SITE_TITLE = "SaadConcours — Concours Masters Maroc (CCA · GFCF · Finance · Fiscalité · Audit)";
const SITE_DESCRIPTION =
  "Base de données gratuite de sujets de concours réels d'accès aux Masters spécialisés (CCA, GFCF, Finance, Fiscalité, Audit) dans les universités marocaines — énoncés, corrigés indicatifs, fiches de cours et QCM d'entraînement.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: "%s | SaadConcours" },
  description: SITE_DESCRIPTION,
  keywords: [
    "concours master maroc", "master CCA", "master GFCF", "master finance maroc",
    "ENCG concours", "FSJES master", "concours accès master maroc", "épreuves concours master",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%234f46e5'/%3E%3Cstop offset='1' stop-color='%23a855f7'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='64' height='64' rx='16' fill='url(%23g)'/%3E%3Cpolygon points='32,13 49,21 32,29 15,21' fill='white'/%3E%3Cline x1='49' y1='21' x2='51' y2='31' stroke='white' stroke-width='2' stroke-linecap='round'/%3E%3Ccircle cx='51' cy='32.5' r='2' fill='%23fbbf24'/%3E%3Cpolygon points='32,42 13,37 13,48 32,54' fill='white'/%3E%3Cpolygon points='32,42 51,37 51,48 32,54' fill='white'/%3E%3Cline x1='32' y1='42' x2='32' y2='54' stroke='%234f46e5' stroke-width='1.2'/%3E%3C/svg%3E",
  },
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

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <Analytics />
        {/* afterInteractive (Next's managed equivalent of `defer`) instead of
           raw <script defer> tags in <head> — same load timing, but Next
           dedupes/schedules them instead of the browser blindly fetching
           4 external bundles on every route regardless of whether it uses them. */}
        <Script src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js" strategy="afterInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js" strategy="afterInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/marked@11.1.1/marked.min.js" strategy="afterInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js" strategy="afterInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/jspdf-autotable@3.8.2/dist/jspdf.plugin.autotable.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
