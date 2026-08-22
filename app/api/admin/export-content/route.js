import { NextResponse } from "next/server";
import { getAllConcours, getAllCours, getAllQuiz, getAllNews } from "@/lib/store";
import { getSettings } from "@/lib/store";

export const dynamic = "force-dynamic";

// Full content backup — everything the admin manages (concours, cours,
// quiz, news, settings), not just the aggregated analytics. GitHub already
// has this as commit history, but a single downloadable snapshot is the
// simple "I want my data" button the admin dashboard was missing.
export async function GET() {
  const [concours, cours, quiz, news, settings] = await Promise.all([
    getAllConcours(),
    getAllCours(),
    getAllQuiz(),
    getAllNews(),
    getSettings(),
  ]);

  const generatedAt = new Date().toISOString();
  const payload = { generatedAt, concours, cours, quiz, news, settings };

  return new NextResponse(JSON.stringify(payload, null, 2), {
    headers: {
      "Content-Type": "application/json",
      "Content-Disposition": `attachment; filename="saadconcours-contenu-${generatedAt.slice(0, 10)}.json"`,
    },
  });
}
