import { getAllBlog } from "@/lib/store";
import { chromeHtml, footerHtml } from "../_shared/chrome";
import ChromeInit from "../_shared/ChromeInit";
import BlogExplorer from "./BlogExplorer";
import { blogCardHtml } from "../_shared/blogCard";
import { BLOG_CATEGORIES } from "../../lib/blogTaxonomy";

// Served as prerendered HTML revalidated hourly instead of rendered per
// request. lib/github.js reads the data JSON with `cache: "no-store"` (
// concours.json is 2.59MB, past Next's 2MB fetch-cache entry limit), and a
// no-store fetch in the render path opts the whole route out of static
// generation -- confirmed by building with and without GITHUB_TOKEN, where
// these routes flip between `o` and `f`.
//
// No revalidation window at all: freshness comes from deploys, not ISR.
// Every admin edit commits to GitHub, which triggers a redeploy that rebuilds
// every page -- so an hourly revalidate was re-rendering pages that were
// already current and billing Fluid CPU for it.
export const dynamic = "force-static";
export const revalidate = false;

const SITE_URL = "https://www.saadconcours.space";

// Server-rendered (unlike /concours, /cours, /evaluation, /news which are
// client SPA readers) — a blog index has no interactive state, so there's
// no reason to ship it as a client fetch when it can just be crawlable HTML
// from the start. The category chips / search box are a client-side filter
// (BlogExplorer) layered on top — the full list below is what the server
// sends on the very first response, filters or no filters, JS or no JS.
export default async function BlogPage() {
  const all = await getAllBlog();
  const posts = all.filter((p) => p.available);

  const categoryCounts = BLOG_CATEGORIES.map((c) => ({
    ...c,
    count: posts.filter((p) => p.category === c.code).length,
  })).filter((c) => c.count > 0);

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog SaadConcours",
    url: `${SITE_URL}/blog`,
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${SITE_URL}/blog/${p.id}`,
      datePublished: p.publishedAt,
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "blog", showSearch: false }) }} />
      <ChromeInit />
      <BlogExplorer initialData={posts} />

      <div className="bac-space site-space">
        <div className="bac-wrap">
          <section className="bac-hero" style={{ "--hero-icon": '"📰"' }}>
            <div className="bac-eyebrow">Blog · Méthode et orientation</div>
            <h1>Le blog SaadConcours</h1>
            <p>
              Méthode, matières à préparer, guides des facultés et conseils pour réussir ton Bac, ta Licence et ton
              concours d'accès au Master au Maroc.
            </p>
            <div className="bac-hero-stats">
              <span className="bac-stat">
                <strong>{posts.length}</strong> article{posts.length > 1 ? "s" : ""}
              </span>
              <span className="bac-stat">
                <strong>{categoryCounts.length}</strong> rubriques
              </span>
            </div>
          </section>

          {categoryCounts.length > 0 && (
            <div className="sp-filters">
              <div className="bac-year-tabs" id="blogCategoryChips" role="group" aria-label="Rubriques">
                {categoryCounts.map((c) => (
                  <button key={c.code} type="button" className="bac-year-tab blog-cat-chip" data-category={c.code}>
                    {c.emoji} {c.label} <em>{c.count}</em>
                  </button>
                ))}
              </div>
              <input type="search" id="blogSearchInput" placeholder="Rechercher un article..." aria-label="Rechercher un article" />
              <button type="button" className="sp-reset" id="blogResetBtn">
                ✕ Réinitialiser
              </button>
              <span className="sp-count" id="blogResultsCount">
                {posts.length} article{posts.length > 1 ? "s" : ""}
              </span>
            </div>
          )}

          {posts.length ? (
            <>
              <div className="sp-card-grid" id="blogGrid" dangerouslySetInnerHTML={{ __html: posts.map(blogCardHtml).join("") }} />
              <div className="sp-pagination" id="blogPagination" />
            </>
          ) : (
            <div className="sp-empty">Aucun article publié pour l'instant.</div>
          )}
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />
    </>
  );
}
