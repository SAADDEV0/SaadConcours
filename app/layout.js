import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { getSettings } from "@/lib/store";

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
        {adsEnabled && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${settings.adsPublisherId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
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
        <Script src="https://cdn.jsdelivr.net/npm/svg2pdf.js@2.2.3/dist/svg2pdf.umd.min.js" strategy="afterInteractive" />
        {/* Used only by the cours PDF export to typeset formulas as real
           vector paths (see app/_shared/coursPdf.js) — KaTeX (above) stays
           the on-page renderer. fontCache must be "none": with caching on
           ("local" or the "global"/default mode), repeated glyphs are
           defined once in a <defs> and referenced via <use>, and svg2pdf.js
           fails to resolve that reference for a formula's SVG that was
           never attached to a live document (which ours never is —
           tex2svgPromise's result is handed to svg2pdf.js directly) —
           confirmed both modes silently draw broken/blank glyphs even when
           briefly attached to the DOM first. "none" makes every glyph a
           fully inline path with no <use> involved, at the cost of a
           larger PDF (no glyph reuse) — the only mode that's actually
           reliable here. This config script must run before mathjax itself
           parses it, hence beforeInteractive. */}
        <Script id="mathjax-config" strategy="beforeInteractive">
          {`window.MathJax = { svg: { fontCache: "none" }, startup: { typeset: false } };`}
        </Script>
        <Script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
