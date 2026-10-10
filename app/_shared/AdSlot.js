import { adConfig } from "./adPlacements";

// Bloc Google AdSense rendu au build (page statique). N'affiche rien tant que
// l'emplacement n'est pas activé avec un ID de bloc dans la console : un
// emplacement non configuré ne laisse aucun cadre vide.
//
// La hauteur réservée (format de l'emplacement, voir adPlacements.js) évite
// tout saut de mise en page quand l'annonce arrive ; si Google n'a rien à
// servir (data-ad-status="unfilled"), le bloc se replie (globals.css).
export default function AdSlot({ settings, placement, className = "" }) {
  const ad = adConfig(settings, placement);
  if (!ad) return null;
  return (
    <aside
      className={`ad-slot ad-slot-${ad.format}${className ? ` ${className}` : ""}`}
      aria-label="Publicité"
      data-ad-placement={ad.key}
      style={{ "--ad-reserve-m": `${ad.reserve.mobile}px`, "--ad-reserve-d": `${ad.reserve.desktop}px` }}
    >
      <span className="ad-slot-label">Publicité</span>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={ad.publisherId}
        data-ad-slot={ad.slot}
        data-ad-format={ad.adFormat}
        data-full-width-responsive="true"
      />
      {/* eslint-disable-next-line react/no-danger */}
      <script dangerouslySetInnerHTML={{ __html: "(adsbygoogle = window.adsbygoogle || []).push({});" }} />
    </aside>
  );
}
