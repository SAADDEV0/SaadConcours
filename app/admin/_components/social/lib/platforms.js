/* ------------------------------- Plateformes -------------------------------
 * Tout est publié à la main : aucune API de publication n'est appelée depuis
 * ce projet. Le rôle du studio est donc de rendre le geste manuel aussi court
 * que possible — un clic prépare *l'image ET le texte ensemble* et ouvre le
 * bon composeur.
 *
 * Deux chemins existent, dans cet ordre :
 *
 *  1. `navigator.share({ files, text })` (Web Share API niveau 2). Là le post
 *     part vraiment "complet" : la feuille de partage du système propose
 *     Facebook / Instagram / WhatsApp… et l'app s'ouvre avec l'image déjà
 *     attachée et la légende déjà remplie. Disponible sur mobile
 *     (Android/iOS) et sur Chrome/Edge desktop (Windows/ChromeOS).
 *
 *  2. Sinon (Firefox, Chrome Linux…), aucun standard web ne permet de pousser
 *     un fichier vers un site tiers — donc on prépare tout d'un coup : image
 *     copiée dans le presse-papiers *et* téléchargée, texte copié, composeur
 *     ouvert avec la légende pré-remplie quand la plateforme le permet (URL
 *     d'intention). `prefill` dit justement lesquelles l'acceptent : Facebook
 *     et Instagram ne l'acceptent pas, c'est une limite de leur côté, pas un
 *     manque ici.
 * ------------------------------------------------------------------------ */

export const PLATFORMS = [
  {
    key: "facebook",
    label: "Facebook",
    color: "#1877F2",
    // Le composeur Facebook n'accepte ni texte ni image pré-remplis depuis
    // une URL (sharer.php ne partage qu'un lien nu). On ouvre donc l'accueil,
    // où le champ « Exprimez-vous » accepte un Ctrl+V d'image et de texte.
    openUrl: () => "https://www.facebook.com/",
    prefill: false,
    hint: "Colle le texte, puis l'image (ou glisse le fichier téléchargé).",
  },
  {
    key: "instagram",
    label: "Instagram",
    color: "#DD2A7B",
    gradient: "linear-gradient(135deg,#f58529,#dd2a7b 55%,#515bd4)",
    openUrl: () => "https://www.instagram.com/",
    prefill: false,
    hint: "Nouvelle publication → choisis l'image téléchargée, colle la légende.",
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    color: "#25D366",
    openUrl: ({ text }) => `https://wa.me/?text=${encodeURIComponent(text)}`,
    prefill: true,
    hint: "Le texte est déjà rempli — ajoute l'image en pièce jointe.",
  },
  {
    key: "telegram",
    label: "Telegram",
    color: "#2AABEE",
    openUrl: ({ text, url }) =>
      `https://t.me/share/url?url=${encodeURIComponent(url || "")}&text=${encodeURIComponent(text)}`,
    prefill: true,
    hint: "Choisis le canal, le texte est déjà rempli.",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    color: "#0A66C2",
    openUrl: ({ text }) => `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(text)}`,
    prefill: true,
    hint: "Le composeur s'ouvre avec le texte — ajoute l'image avec 📷.",
  },
  {
    key: "x",
    label: "X (Twitter)",
    color: "#0f1419",
    openUrl: ({ text }) => `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
    prefill: true,
    hint: "280 caractères max : le texte sera probablement à raccourcir.",
  },
  {
    key: "autre",
    label: "Autre / hors ligne",
    color: "#6b7280",
    openUrl: () => null,
    prefill: false,
    hint: "Image téléchargée + texte copié, à utiliser où tu veux.",
  },
];

export function platformFor(key) {
  return PLATFORMS.find((p) => p.key === key) || PLATFORMS[PLATFORMS.length - 1];
}

/* --------------------------------- Icônes ---------------------------------
 * Glyphes dessinés en SVG plutôt qu'en emoji : les emojis de marque n'existent
 * pas (📘 n'est pas le logo Facebook) et rendent différemment sur chaque OS.
 * ------------------------------------------------------------------------ */

const PATHS = {
  facebook: <path d="M13.5 21.5v-8h2.7l.4-3.1h-3.1V8.5c0-.9.25-1.5 1.55-1.5h1.65V4.2a22 22 0 0 0-2.4-.13c-2.38 0-4.02 1.46-4.02 4.13v2.3H7.6v3.1h2.68v8z" />,
  instagram: (
    <>
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5.2" fill="none" stroke="currentColor" strokeWidth="1.9" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.9" />
      <circle cx="17.1" cy="6.9" r="1.3" />
    </>
  ),
  whatsapp: (
    <>
      <path
        d="M12 3.4a8.6 8.6 0 0 0-7.3 13.1l-1.2 4.1 4.2-1.1A8.6 8.6 0 1 0 12 3.4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M9.4 8.3c.15-.35.3-.36.55-.37h.46c.15 0 .35 0 .53.42l.62 1.5c.09.22.03.42-.07.58l-.32.42c-.14.18-.2.35-.09.55.28.5 1.13 1.4 1.85 1.75.2.1.37.08.52-.08l.42-.44c.15-.16.33-.17.5-.09l1.4.7c.33.16.34.34.34.5v.44c0 .27-.1.45-.5.6-.42.16-1.12.26-1.76.1-1.4-.35-3.16-1.94-3.86-3.34-.44-.8-.62-1.68-.5-2.29z" />
    </>
  ),
  telegram: <path d="M21.3 4.4 2.9 11.3c-.9.34-.9 1.1.02 1.4l4.5 1.4 1.72 5.2c.2.6.5.72 1 .32l2.5-2.02 4.6 3.4c.83.5 1.35.2 1.55-.8l2.96-13.4c.22-1-.4-1.5-1.45-1.1zM8.6 13.6l8.5-5.3c.4-.24.77-.1.47.16l-7.1 6.4-.28 3z" />,
  linkedin: (
    <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5.01 2.5 2.5 0 0 0 0-5.01zM3.1 20.9h3.8V9.7H3.1zm6.2 0h3.8v-6.2c0-1.63.9-2.4 1.94-2.4 1.02 0 1.66.75 1.66 2.4v6.2h3.8v-6.86c0-3.3-1.76-4.83-4.1-4.83-1.9 0-2.77 1.05-3.26 1.8V9.7H9.3z" />
  ),
  x: <path d="M17.4 3h3.24l-7.08 8.09L21.9 21h-6.52l-5.1-6.23L4.42 21H1.18l7.57-8.65L1.4 3h6.68l4.6 5.7zM16.26 19.2h1.8L7.2 4.7H5.27z" />,
  autre: (
    <path d="M18 15.2a2.8 2.8 0 0 0-1.94.78l-6.02-3.03a2.9 2.9 0 0 0 0-1.9l6.02-3.03a2.8 2.8 0 1 0-.86-2.02c0 .33.06.65.16.94L9.34 9.97a2.8 2.8 0 1 0 0 4.06l6.02 3.03c-.1.29-.16.6-.16.94a2.8 2.8 0 1 0 2.8-2.8z" />
  ),
};

export function PlatformIcon({ platform, size = 20 }) {
  const key = typeof platform === "string" ? platform : platform?.key;
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" focusable="false">
      {PATHS[key] || PATHS.autre}
    </svg>
  );
}
