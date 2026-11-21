import { getAllPrepa } from "@/lib/store";
import { isPrepaPublie, prepaOption, prepaOptionOuverte, prepaSlug } from "@/lib/prepa";
import { buildOgImage, ogImageSize, ogImageContentType } from "../../../_shared/ogImage";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Cours de prépa SaadConcours";

// Prérendue au build — voir app/concours/[id]/opengraph-image.js.
export const dynamic = "force-static";
export const revalidate = false;
export const dynamicParams = false;

async function publies() {
  return (await getAllPrepa()).filter((c) => isPrepaPublie(c) && prepaOptionOuverte(c.option));
}

export async function generateStaticParams() {
  try {
    return (await publies()).map((c) => ({ option: c.option, id: prepaSlug(c) }));
  } catch {
    return [];
  }
}

export default async function Image(props) {
  const { option, id } = await props.params;
  const c = (await publies()).find((x) => x.option === option && prepaSlug(x) === id);
  if (!c) return buildOgImage({ eyebrow: "SaadConcours", title: "Fiche introuvable" });
  return buildOgImage({ kind: "cours", eyebrow: `${prepaOption(c.option).long} · CNAEM`, title: c.module });
}
