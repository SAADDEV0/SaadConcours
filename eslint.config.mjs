import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

// Configuration « flat » d'ESLint 9, qui remplace .eslintrc.json depuis le
// passage à Next.js 16 (2026-10-22) : `next lint` n'existe plus et
// eslint-config-next 16 ne se charge plus qu'en flat config. `npm run lint`
// passe donc par la CLI d'ESLint, sur les mêmes dossiers que `next lint`
// (app/ et lib/, voir package.json).
export default defineConfig([
  ...nextVitals,
  globalIgnores([".next/", ".open-next/", ".wrangler/", "mobile/", "video/", "graphify-out/", "public/"]),
  {
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_", ignoreRestSiblings: true }],
      "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],
      "@next/next/no-img-element": "off",

      // Both of these were warnings under eslint-config-next 14 and became
      // errors in 15, which fails the build. Restoring the previous severity
      // rather than changing 25 call sites, because the <a> tags are the point:
      // listings and cards are rendered as server HTML strings so crawlers get
      // real <a href> links in the first response (see app/concours/page.js).
      // Swapping them for <Link> would mean rebuilding that as client
      // components and losing the SEO property the whole design exists for.
      // And on Cloudflare a <Link> prefetches the page's RSC payload, which
      // is not published as a static asset: every prefetch would invoke the
      // Worker and spend the free plan's daily quota (2026-10-28).
      "@next/next/no-html-link-for-pages": "warn",
      "@next/next/no-page-custom-font": "warn",

      // Nouvelles règles du React Compiler, apportées par
      // eslint-plugin-react-hooks 7 (eslint-config-next 16) en « error » :
      // 47 occurrences, toutes dans des composants client (console /admin
      // surtout), sur du code qui tournait sans souci. Même choix que
      // ci-dessus : avertissement plutôt que réécriture de 30 fichiers dans
      // une montée de version. Le site n'active pas le React Compiler.
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/refs": "warn",
      "react-hooks/purity": "warn",
      "react-hooks/use-memo": "warn",
    },
  },
  // ESLint 9 signale par défaut les commentaires eslint-disable devenus
  // inutiles (34, surtout des react/no-danger, règle que la config Next
  // n'active pas) ; ESLint 8 ne le faisait pas.
  { linterOptions: { reportUnusedDisableDirectives: "off" } },
]);
