import { WHATSAPP_NUMERO } from "./chrome";

// Deux appels sous les sujets (fiche concours, hubs) : envoyer le sujet qu'on
// vient de passer, et suivre la chaîne WhatsApp. Le premier fait grandir la
// part des sujets reçus directement des candidats (23 sur 387 au 2026-10-29,
// le reste venant d'autres sites) ; le second construit une audience qui ne
// dépend pas de Google. Deux liens simples : aucun appel au Worker.
//
// La chaîne n'apparaît qu'une fois son adresse saisie dans la console
// (Réglages › Réseaux sociaux › WhatsApp : le lien de la chaîne,
// https://whatsapp.com/channel/…).
export default function CommunauteCta({ settings, sujet = "" }) {
  const chaine = /^https:\/\/(www\.)?whatsapp\.com\/channel\//.test(String(settings?.whatsapp || "")) ? settings.whatsapp : null;
  const message = `Bonjour, je vous envoie le sujet du concours${sujet ? ` ${sujet}` : ""} : `;
  const envoi = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(message)}`;
  return (
    <section className="cta-communaute" aria-label="Participer">
      <div>
        <strong>Tu viens de passer un concours ?</strong>
        <span>
          Envoie-nous le sujet en photo ou en PDF : il est retranscrit et corrigé ici, pour les candidats de l&apos;année
          suivante.
        </span>
        <a className="sp-btn" href={envoi} target="_blank" rel="noopener">
          Envoyer le sujet sur WhatsApp
        </a>
      </div>
      {chaine && (
        <div>
          <strong>La chaîne WhatsApp SaadConcours</strong>
          <span>Les nouveaux sujets corrigés et les dates des concours, directement sur ton téléphone.</span>
          <a className="sp-btn" href={chaine} target="_blank" rel="noopener">
            Rejoindre la chaîne
          </a>
        </div>
      )}
    </section>
  );
}
