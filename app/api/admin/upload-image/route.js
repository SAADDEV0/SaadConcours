import { NextResponse } from "next/server";
import { writeGithubBinaryFile, githubWriteConfigured } from "@/lib/github";

const MAX_BYTES = 8 * 1024 * 1024;
const ALLOWED_EXT = ["png", "jpg", "jpeg", "webp", "gif"];

function safeSegment(s) {
  return String(s || "")
    .trim()
    .replace(/[\\/]/g, "-")
    .replace(/\s+/g, "_")
    // A segment of "." or ".." would climb out of images/ once joined into
    // the repo path handed to the Contents API.
    .replace(/^\.+/, "");
}

// Write access is gated by middleware.js (admin cookie required).
export async function POST(req) {
  if (!githubWriteConfigured()) {
    return NextResponse.json({ error: "GITHUB_TOKEN non configuré." }, { status: 501 });
  }

  const body = await req.json();
  const { ville, concoursId, folder, filename, dataBase64 } = body || {};
  // Two shapes: the original concours upload (images/<ville>/<id>/<file>) and
  // a flat images/<folder>/<file> used by anything not attached to a concours
  // — today the partner ad banners (images/partenaires/...).
  if (!filename || !dataBase64 || (!folder && (!ville || !concoursId))) {
    return NextResponse.json({ error: "Champs manquants." }, { status: 400 });
  }

  const ext = (filename.split(".").pop() || "").toLowerCase();
  if (!ALLOWED_EXT.includes(ext)) {
    return NextResponse.json({ error: `Extension non supportée: .${ext}` }, { status: 400 });
  }

  const approxBytes = (dataBase64.length * 3) / 4;
  if (approxBytes > MAX_BYTES) {
    return NextResponse.json({ error: "Image trop volumineuse (8 Mo max)." }, { status: 400 });
  }

  const nameSeg = safeSegment(filename);
  const repoRelPath = folder
    ? `images/${safeSegment(folder)}/${nameSeg}`
    : `images/${safeSegment(ville)}/${safeSegment(concoursId)}/${nameSeg}`;

  await writeGithubBinaryFile(repoRelPath, dataBase64, `Add image: ${repoRelPath}`);

  return NextResponse.json({ path: repoRelPath });
}
