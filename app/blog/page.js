import { getAllBlog } from "@/lib/store";
import { chromeHtml, footerHtml } from "../_shared/chrome";
import ChromeInit from "../_shared/ChromeInit";

// Server-rendered (unlike /concours, /cours, /evaluation, /news which are
// client SPA readers) — a blog index has no interactive state, so there's
// no reason to ship it as a client fetch when it can just be crawlable HTML
// from the start.
export default async function BlogPage() {
  const all = await getAllBlog();
  const posts = all.filter((p) => p.available);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "blog", showSearch: false }) }} />
      <ChromeInit />

      <div className="cd-view" style={{ maxWidth: 920 }}>
        <h1 className="eval-title">📰 Blog</h1>
        <p className="eval-sub">Méthode, matières à préparer et conseils pour réussir ton concours d'accès au Master au Maroc.</p>

        {posts.length ? (
          <div className="grid" style={{ marginTop: 20 }}>
            {posts.map((p) => (
              <a key={p.id} className="eval-module-card" href={`/blog/${p.id}`} style={{ textDecoration: "none" }}>
                <div className="eval-module-name">{p.title}</div>
                <div className="eval-module-desc">{p.excerpt}</div>
                <div className="eval-module-meta">{p.publishedAt}</div>
              </a>
            ))}
          </div>
        ) : (
          <div className="empty-state">Aucun article publié pour l'instant.</div>
        )}
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />
    </>
  );
}
