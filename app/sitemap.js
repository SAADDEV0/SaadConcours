import { getAllConcours, getAllCours, getAllQuiz, getAllNews, getAllBlog } from "@/lib/store";

const SITE_URL = "https://www.saadconcours.space";

export default async function sitemap() {
  const staticRoutes = ["", "/concours", "/cours", "/evaluation", "/news", "/blog"].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: path === "" ? "daily" : "weekly",
    priority: path === "" ? 1 : 0.8,
  }));

  let concoursRoutes = [];
  try {
    const concours = await getAllConcours();
    concoursRoutes = concours.map((c) => ({
      url: `${SITE_URL}/concours/${c.id}`,
      changeFrequency: "monthly",
      priority: 0.6,
    }));
  } catch {
    // Sitemap generation shouldn't 500 the whole thing if the data source
    // is briefly unavailable — ship what we have (the static routes).
  }

  let coursRoutes = [];
  try {
    const cours = await getAllCours();
    coursRoutes = cours
      .filter((c) => c.available)
      .map((c) => ({
        url: `${SITE_URL}/cours/${c.id}`,
        changeFrequency: "monthly",
        priority: 0.6,
      }));
  } catch {
    // same fallback as concoursRoutes above
  }

  let quizRoutes = [];
  try {
    const quiz = await getAllQuiz();
    quizRoutes = quiz
      .filter((q) => q.available)
      .map((q) => ({
        url: `${SITE_URL}/evaluation/${q.id}`,
        changeFrequency: "monthly",
        priority: 0.6,
      }));
  } catch {
    // same fallback as concoursRoutes above
  }

  // Cloturé entries are excluded — they lose their search intent once
  // registrations close and risk 404ing once the scraper prunes them.
  let newsRoutes = [];
  try {
    const news = await getAllNews();
    newsRoutes = news
      .filter((n) => !n.cloture)
      .map((n) => ({
        url: `${SITE_URL}/news/${n.id}`,
        changeFrequency: "daily",
        priority: 0.5,
      }));
  } catch {
    // same fallback as concoursRoutes above
  }

  let blogRoutes = [];
  try {
    const blog = await getAllBlog();
    blogRoutes = blog
      .filter((p) => p.available)
      .map((p) => ({
        url: `${SITE_URL}/blog/${p.id}`,
        changeFrequency: "monthly",
        priority: 0.6,
      }));
  } catch {
    // same fallback as concoursRoutes above
  }

  return [...staticRoutes, ...concoursRoutes, ...coursRoutes, ...quizRoutes, ...newsRoutes, ...blogRoutes];
}
