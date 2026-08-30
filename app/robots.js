// The "*" rule already covers everyone, but AI answer-engine crawlers are
// listed explicitly too (some check for a named rule before falling back
// to the wildcard) — this content is meant to be cited by ChatGPT/
// Perplexity/Google AI Overviews, not just ranked by classic search.
const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "CCBot",
];

export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/admin", "/api/"] },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/", disallow: ["/admin", "/api/"] })),
    ],
    sitemap: "https://www.saadconcours.space/sitemap.xml",
  };
}
