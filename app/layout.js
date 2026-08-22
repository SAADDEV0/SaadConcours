import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "SaadConcours — Concours Masters Maroc (CCA · GFCF · Finance · Fiscalité · Audit)",
  description:
    "Base de données de concours d'accès aux Masters spécialisés (CCA, GFCF, Finance, Fiscalité, Audit) dans les universités marocaines.",
  icons: {
    icon:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%234f46e5'/%3E%3Cstop offset='1' stop-color='%23a855f7'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='64' height='64' rx='16' fill='url(%23g)'/%3E%3Cpolygon points='32,13 49,21 32,29 15,21' fill='white'/%3E%3Cline x1='49' y1='21' x2='51' y2='31' stroke='white' stroke-width='2' stroke-linecap='round'/%3E%3Ccircle cx='51' cy='32.5' r='2' fill='%23fbbf24'/%3E%3Cpolygon points='32,42 13,37 13,48 32,54' fill='white'/%3E%3Cpolygon points='32,42 51,37 51,48 32,54' fill='white'/%3E%3Cline x1='32' y1='42' x2='32' y2='54' stroke='%234f46e5' stroke-width='1.2'/%3E%3C/svg%3E",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" />
        <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
        <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/marked@11.1.1/marked.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/jspdf-autotable@3.8.2/dist/jspdf.plugin.autotable.min.js"></script>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
