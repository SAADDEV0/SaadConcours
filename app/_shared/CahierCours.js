// Annonce du cahier de préparation d'un module : page du module (complète,
// avec son h2) et fin des pages de chapitre (`compact`). Un simple <a> vers la
// fiche /boutique/<id> : la page reste statique, sans appel au Worker, et le
// clic « Commander » reste compté sur la fiche.
import { accrocheCourte, deModule, formatPrix, produitImage } from "../../lib/boutique";
import { Icon } from "./icons";

export default function CahierCours({ cahier, module, compact = false }) {
  if (!cahier) return null;
  const href = `/boutique/${encodeURIComponent(cahier.id)}`;
  const cover = produitImage(cahier.couverture);
  const Titre = compact ? "strong" : "h2";
  return (
    <section id={compact ? undefined : "cahier"} className={`sp-cahier${compact ? " compact" : ""}`}>
      {cover && (
        <a className="sp-cahier-cover" href={href}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={cover} alt={`Couverture : ${cahier.titre}`} width={96} height={128} loading="lazy" decoding="async" />
        </a>
      )}
      <div className="sp-cahier-body">
        <span className="sp-cahier-kicker">Prépare ton examen</span>
        <Titre className="sp-cahier-title">{cahier.titre}</Titre>
        <p>{compact ? accrocheCourte(cahier) : cahier.sousTitre}</p>
        {!compact && <p className="sp-cahier-note">Le cours reste gratuit ici. Le cahier ajoute l&apos;entraînement et la méthode, dans un seul PDF.</p>}
        <div className="sp-cahier-foot">
          <a className="sp-btn primary" href={href}>
            Voir le cahier {deModule(module)} <Icon name="arrow-right" size={18} />
          </a>
          <span className="sp-cahier-prix">
            <strong>{formatPrix(cahier.prix, cahier.devise)}</strong>
            {cahier.pages ? ` · ${cahier.pages} pages` : ""} · PDF envoyé sur WhatsApp
          </span>
        </div>
      </div>
    </section>
  );
}
