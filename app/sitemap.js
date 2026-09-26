import { getPublicConcours, getAllCours, getAllQuiz, getAllBlog, getAllBoutique } from "@/lib/store";
import { isProduitVisible } from "@/lib/boutique";
import { findDuplicateBlogIds } from "@/lib/blogDuplicates";
import { BAC_NIVEAUX, bacMatieres, bacMatiereHref, bacChapitreHref } from "@/lib/bacProgramme";
import { getBacMatiereEffectif } from "@/lib/bacContenuEffectif";
import { fsjesModule, fsjesChapitreHref } from "@/lib/fsjesChapitres";
import { isLicenceExcellence } from "@/lib/concoursNiveaux";

const SITE_URL = "https://www.saadconcours.space";

// Prérendu au build, comme les pages (voir app/concours/page.js) : sans ces
// deux lignes, la lecture `no-store` de lib/github.js rend la route dynamique
// dès que GITHUB_TOKEN est défini — donc en CI, pas en local. Le build de
// déploiement ne produisait alors aucun sitemap.xml.body, et
// scripts/prerender-to-assets.mjs, qui publie ce fichier en asset statique,
// a refusé le déploiement du 2026-09-26.
export const dynamic = "force-static";
export const revalidate = false;

// Every date field in the datasets is a plain ISO "YYYY-MM-DD" string, so the
// newest one is just the lexicographic max — no Date parsing needed.
function latestDate(items, field) {
  let max = null;
  for (const item of items) {
    const value = item?.[field];
    if (value && (!max || value > max)) max = value;
  }
  return max;
}

export default async function sitemap() {
  // Fetched up front because the listing routes below now carry a real
  // lastModified derived from the freshest item they actually list — same
  // rule as the per-item entries: only emit a date when it's true.
  const [concours, cours, quiz, blog, boutique] = await Promise.all([
    getPublicConcours().catch(() => []),
    getAllCours().catch(() => []),
    getAllQuiz().catch(() => []),
    getAllBlog().catch(() => []),
    getAllBoutique().catch(() => []),
  ]);

  const concoursUpdated = latestDate(concours.filter((c) => !isLicenceExcellence(c)), "date_ajout");
  const licenceUpdated = latestDate(concours.filter(isLicenceExcellence), "date_ajout");
  const blogUpdated = latestDate(blog, "publishedAt");
  // The homepage surfaces the latest concours and the latest blog posts, so it
  // is as fresh as the freshest of them.
  const homeUpdated = [concoursUpdated, licenceUpdated, blogUpdated].filter(Boolean).sort().pop() || null;
  const produits = boutique.filter(isProduitVisible);

  // /cours, /evaluation, /faq, /a-propos, /contact and /confidentialite carry no lastModified on
  // purpose: their datasets have no date field (and the two legal/info pages
  // are hand-edited), so any value here would be invented.
  const staticRoutes = [
    { path: "", changeFrequency: "daily", priority: 1, lastModified: homeUpdated },
    { path: "/concours", changeFrequency: "weekly", priority: 0.9, lastModified: concoursUpdated },
    { path: "/concours/licence-excellence", changeFrequency: "weekly", priority: 0.8, lastModified: licenceUpdated },
    { path: "/blog", changeFrequency: "weekly", priority: 0.8, lastModified: blogUpdated },
    { path: "/cours", changeFrequency: "weekly", priority: 0.8 },
    { path: "/evaluation", changeFrequency: "weekly", priority: 0.8 },
    // Boutique vide = page « bientôt » : hors sitemap tant qu'aucun cahier n'est publié.
    ...(produits.length ? [{ path: "/boutique", changeFrequency: "weekly", priority: 0.7 }] : []),
    { path: "/faq", changeFrequency: "monthly", priority: 0.5 },
    { path: "/a-propos", changeFrequency: "monthly", priority: 0.5 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.3 },
    { path: "/confidentialite", changeFrequency: "yearly", priority: 0.2 },
    { path: "/mentions-legales", changeFrequency: "yearly", priority: 0.2 },
  ].map(({ path, changeFrequency, priority, lastModified }) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency,
    priority,
    ...(lastModified ? { lastModified } : {}),
  }));

  const concoursRoutes = concours.map((c) => ({
    url: `${SITE_URL}/concours/${c.id}`,
    changeFrequency: "monthly",
    priority: 0.6,
    // Only ~2/3 of entries carry date_ajout (backfilled later, not present
    // on the earliest imports) — omitting it for the rest rather than
    // guessing keeps every lastModified we do emit actually true, which
    // matters more to Google than covering every URL.
    ...(c.date_ajout ? { lastModified: c.date_ajout } : {}),
  }));

  // Un module = sa page sommaire + une page par chapitre (lib/fsjesChapitres.js).
  const coursRoutes = cours
    .filter((c) => c.available)
    .flatMap((c) => [
      { url: `${SITE_URL}/cours/${c.id}`, changeFrequency: "monthly", priority: 0.6 },
      ...fsjesModule(c).chapitres.map((ch) => ({ url: `${SITE_URL}${fsjesChapitreHref(c, ch)}`, changeFrequency: "monthly", priority: 0.5 })),
    ]);

  const quizRoutes = quiz
    .filter((q) => q.available)
    .map((q) => ({
      url: `${SITE_URL}/evaluation/${q.id}`,
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  // Near-duplicate posts are noindex'd on their page (lib/blogDuplicates.js);
  // listing them here would contradict that.
  const duplicateBlogIds = findDuplicateBlogIds(blog);
  const blogRoutes = blog
    .filter((p) => p.available && !duplicateBlogIds.has(p.id))
    .map((p) => ({
      url: `${SITE_URL}/blog/${p.id}`,
      changeFrequency: "monthly",
      priority: 0.6,
      ...(p.publishedAt ? { lastModified: p.publishedAt } : {}),
    }));

  // Espace Bac : niveaux publiés, leurs matières et les chapitres rédigés —
  // exactement les pages que le site génère (les examens nationaux sont
  // listés sur la page de la matière, ils n'ont plus de page à eux).
  const bacRoutes = [];
  for (const n of BAC_NIVEAUX.filter((x) => x.available)) {
    bacRoutes.push({ url: `${SITE_URL}/bac/${n.code}`, changeFrequency: "monthly", priority: 0.7 });
    for (const m of bacMatieres(n.code)) {
      const contenu = await getBacMatiereEffectif(n.code, m.slug);
      bacRoutes.push({ url: `${SITE_URL}${bacMatiereHref(m)}`, changeFrequency: "monthly", priority: 0.6 });
      for (const c of m.chapitres) {
        if (contenu[c.slug]) bacRoutes.push({ url: `${SITE_URL}${bacChapitreHref(m, c)}`, changeFrequency: "monthly", priority: 0.5 });
      }
    }
  }

  const boutiqueRoutes = produits.map((p) => ({
    url: `${SITE_URL}/boutique/${p.id}`,
    changeFrequency: "monthly",
    priority: 0.6,
    ...(p.dateAjout ? { lastModified: p.dateAjout } : {}),
  }));

  return [...staticRoutes, ...concoursRoutes, ...coursRoutes, ...quizRoutes, ...blogRoutes, ...boutiqueRoutes, ...bacRoutes];
}
