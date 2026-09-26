import { permanentRedirect } from "next/navigation";

// En production, /bac est redirigé en 301 par public/_redirects, avant le
// Worker. Ce redirect ne sert qu'en local (next dev) ou si la règle manquait :
// permanent (308) plutôt que le 307 temporaire de redirect().
export default function BacIndex() {
  permanentRedirect("/bac/2bac");
}
