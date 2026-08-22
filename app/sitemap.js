import { getAllConcours } from "@/lib/store";

const SITE_URL = "https://www.saadconcours.space";

export default async function sitemap() {
  const staticRoutes = ["", "/concours", "/cours", "/evaluation", "/news"].map((path) => ({
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

  return [...staticRoutes, ...concoursRoutes];
}
