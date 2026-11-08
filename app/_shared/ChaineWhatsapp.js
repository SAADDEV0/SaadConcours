// Une ligne discrète « Suivre la chaîne WhatsApp », tout en bas d'un chapitre ou
// d'un article, une fois la lecture finie. Ni pop-up, ni bouton flottant, ni
// bandeau en haut de page : la chaîne annonce tout le site (cours, cahiers et
// prix, sujets corrigés), elle ne doit gêner personne (demande de Saad, 2026-11-08).
// Un simple lien : aucun appel au Worker. Rien ne s'affiche tant que le lien de
// la chaîne n'est pas saisi dans la console (Réglages › Réseaux sociaux › WhatsApp).

const CHAINE_RE = /^https:\/\/(www\.)?whatsapp\.com\/channel\//;

export function lienChaine(settings) {
  const v = String(settings?.whatsapp || "");
  return CHAINE_RE.test(v) ? v : null;
}

export const ICONE_WHATSAPP = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.3-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.6-.6-2.7-1.2-4.5-3.9-4.6-4.1-.1-.2-1.1-1.5-1.1-2.8s.7-2 .9-2.3c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.6.7 1.9.8 2 .1.2.1.4 0 .6-.1.2-.2.4-.3.5-.2.2-.3.4-.1.7.2.3.9 1.4 1.9 2.3 1.3 1.2 2.4 1.5 2.7 1.7.3.2.5.1.7-.1.2-.2.8-.9 1-1.2.2-.3.4-.3.7-.2.3.1 1.8.8 2.1.9.3.2.5.2.6.4.1.2.1.9-.1 1.5Z" />
  </svg>
);

export default function ChaineWhatsapp({ settings, ar = false }) {
  const href = lienChaine(settings);
  if (!href) return null;
  return (
    <p className="chaine-wa" dir={ar ? "rtl" : undefined} lang={ar ? "ar" : undefined}>
      {ICONE_WHATSAPP}
      <span>
        {ar
          ? "الدروس الجديدة والدفاتر والمباريات: تابع قناة SaadConcours على واتساب."
          : "Nouveaux cours, cahiers et sujets corrigés : suis la chaîne WhatsApp SaadConcours."}
      </span>
      <a href={href} target="_blank" rel="noopener">
        {ar ? "متابعة القناة" : "Suivre la chaîne"}
      </a>
    </p>
  );
}
