import { notFound } from "next/navigation";
import { marked } from "marked";
import { getAllBlog } from "@/lib/store";
import { chromeHtml, footerHtml } from "../../_shared/chrome";
import BlogDetailClient from "./BlogDetailClient";

const SITE_URL = "https://www.saadconcours.space";

async function findPost(id) {
  const list = await getAllBlog();
  return { p: list.find((x) => x.id === id) || null, list };
}

function getRelatedPosts(list, current, limit = 4) {
  return list.filter((x) => x.id !== current.id && x.available).slice(0, limit);
}

export async function generateMetadata({ params }) {
  const { p } = await findPost(params.id);
  if (!p || !p.available) return {};

  const url = `${SITE_URL}/blog/${p.id}`;

  return {
    title: p.title,
    description: p.excerpt,
    alternates: { canonical: url },
    openGraph: { type: "article", title: p.title, description: p.excerpt, url, publishedTime: p.publishedAt },
    twitter: { card: "summary_large_image", title: p.title, description: p.excerpt },
  };
}

export async function generateStaticParams() {
  try {
    const list = await getAllBlog();
    return list.filter((p) => p.available).map((p) => ({ id: p.id }));
  } catch {
    return [];
  }
}

export default async function BlogDetailPage({ params }) {
  const { p, list } = await findPost(params.id);
  if (!p || !p.available) notFound();

  const contentHtml = marked.parse(p.content || "");
  const url = `${SITE_URL}/blog/${p.id}`;
  const related = getRelatedPosts(list, p);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.title,
    description: p.excerpt,
    url,
    datePublished: p.publishedAt,
    author: { "@type": "Organization", name: "SaadConcours", url: SITE_URL },
    publisher: { "@type": "Organization", name: "SaadConcours", url: SITE_URL },
    mainEntityOfPage: url,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: p.title, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "blog", showSearch: false }) }} />

      <div className="cd-view">
        <nav className="cd-breadcrumb">
          <a href="/">Accueil</a> <span>/</span> <a href="/blog">Blog</a> <span>/</span> <span>{p.title}</span>
        </nav>

        <div className="cd-head">
          <h1>{p.title}</h1>
          <div className="cd-tags">
            <span className="info-tag">📅 {p.publishedAt}</span>
          </div>
        </div>

        <div className="cd-card">
          <div className="enonce-content" dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>

        <BlogDetailClient post={p} />

        {related.length > 0 && (
          <div className="cd-card cd-related">
            <h2>À lire aussi</h2>
            <div className="cd-related-grid">
              {related.map((r) => (
                <a key={r.id} className="cd-related-item" href={`/blog/${r.id}`}>
                  <div className="cd-related-title">{r.title}</div>
                  <div className="cd-related-sub">{r.publishedAt}</div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />
    </>
  );
}
