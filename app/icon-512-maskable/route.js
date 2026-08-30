import { buildAppIcon } from "../_shared/appIcon";

export async function GET() {
  return buildAppIcon(512, { maskable: true });
}
