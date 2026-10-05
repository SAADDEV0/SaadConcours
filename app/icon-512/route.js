import { buildAppIcon } from "../_shared/appIcon";

// Prérendue au build : sans cette ligne, Next 15 rend un GET de route handler
// à chaque requête, donc le Worker redessinait le PNG à chaque appel.
export const dynamic = "force-static";

export async function GET() {
  return buildAppIcon(512);
}
