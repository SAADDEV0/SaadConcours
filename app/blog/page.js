import { getAllBlog } from "@/lib/store";
import { chromeHtml, footerHtml } from "../_shared/chrome";
import ChromeInit from "../_shared/ChromeInit";
import BlogExplorer from "./BlogExplorer";
import { blogCardHtml } from "../_shared/blogCard";
import { BLOG_CATEGORIES } from "../../lib/blogTaxonomy";

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

      <div className="cd-view" style={{ maxWidth: 920 }}>
        <h1 className="eval-title">📰 Blog</h1>
        <p className="eval-sub">Méthode, matières à préparer et conseils pour réussir ton concours d'accès au Master au Maroc.</p>

        {categoryCounts.length > 0 && (
          <div className="blog-filter-bar">
            <div className="chip-list" id="blogCategoryChips">
              {categoryCounts.map((c) => (
                <button key={c.code} type="button" className="chip blog-cat-chip" data-category={c.code}>
                  {c.emoji} {c.label} ({c.count})
                </button>
              ))}
            </div>
            <div className="blog-filter-controls">
              <div className="search-box blog-search-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <input type="text" id="blogSearchInput" placeholder="Rechercher un article..." />
              </div>
              <button type="button" className="reset-btn" id="blogResetBtn" style={{ width: "auto" }}>
                Réinitialiser
              </button>
            </div>
            <div className="results-count" id="blogResultsCount">
              {posts.length} article{posts.length > 1 ? "s" : ""}
            </div>
          </div>
        )}

        {posts.length ? (
          <div className="grid" id="blogGrid" style={{ marginTop: 16 }} dangerouslySetInnerHTML={{ __html: posts.map(blogCardHtml).join("") }} />
        ) : (
          <div className="empty-state">Aucun article publié pour l'instant.</div>
        )}
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />
    </>
  );
}
