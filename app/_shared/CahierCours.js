// Annonce du cahier de préparation d'un module : page du module (complète,
// avec son h2) et fin des pages de chapitre (`compact`). Un simple <a> vers la
// fiche /boutique/<id> : la page reste statique, sans appel au Worker, et le
// clic « Commander » reste compté sur la fiche.
// Cahier en arabe (`langue: "ar"`, ex. قانون الأسرة) : annonce en arabe, de droite à gauche.
import { accrocheCourte, deModule, formatPrix, produitImage } from "../../lib/boutique";
import { Icon } from "./icons";

// Bandeau d'une ligne, sous le titre d'un chapitre et en tête de la page du
// module : sur téléphone la colonne latérale passe sous tout le contenu et
// l'annonce de fin de chapitre n'est vue que par ceux qui lisent jusqu'au
// bout. Le bandeau entier est un seul lien (grande cible au doigt).
export function CahierBandeau({ cahier, module }) {
  if (!cahier) return null;
  const href = `/boutique/${encodeURIComponent(cahier.id)}`;
  const cover = produitImage(cahier.couverture);
  const ar = cahier.langue === "ar";
  const prix = formatPrix(cahier.prix, cahier.devise);
  return (
    <a className="sp-cahier-bandeau" href={href} dir={ar ? "rtl" : undefined} lang={ar ? "ar" : undefined}>
      {cover && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={cover} alt="" width={40} height={53} loading="lazy" decoding="async" />
      )}
      <span className="sp-cahier-bandeau-body">
        <strong>
          {ar ? "دفتر التحضير" : `Cahier de préparation ${deModule(module)}`} · <span className="sp-nowrap">{prix}</span>
        </strong>
        <span>{ar ? cahier.sousTitre : accrocheCourte(cahier)}</span>
      </span>
      <span className="sp-cahier-bandeau-cta">
        {ar ? "اطلع عليه" : "Voir"} <Icon name={ar ? "arrow-left" : "arrow-right"} size={16} />
      </span>
    </a>
  );
}

// Carte de la colonne latérale (sticky sur ordinateur) : couverture, titre,
// prix et bouton, au lieu d'un simple lien texte.
export function CahierSide({ cahier }) {
  if (!cahier) return null;
  const href = `/boutique/${encodeURIComponent(cahier.id)}`;
  const cover = produitImage(cahier.couverture);
  const ar = cahier.langue === "ar";
  return (
    <div className="bac-side-card sp-cahier-side" dir={ar ? "rtl" : undefined} lang={ar ? "ar" : undefined}>
      <div className="bac-side-title">{ar ? "حضّر امتحانك" : "Préparer l'examen"}</div>
      <a className="sp-cahier-side-row" href={href}>
        {cover && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={cover} alt="" width={52} height={69} loading="lazy" decoding="async" />
        )}
        <span>
          <strong>{cahier.titre}</strong>
          <em>{formatPrix(cahier.prix, cahier.devise)} · PDF</em>
        </span>
      </a>
      <a className="sp-btn primary sp-cahier-side-btn" href={href}>
        {ar ? "اطلع على الدفتر" : "Voir le cahier"} <Icon name={ar ? "arrow-left" : "arrow-right"} size={16} />
      </a>
    </div>
  );
}

export default function CahierCours({ cahier, module, compact = false }) {
  if (!cahier) return null;
  const href = `/boutique/${encodeURIComponent(cahier.id)}`;
  const cover = produitImage(cahier.couverture);
  const Titre = compact ? "strong" : "h2";
  const ar = cahier.langue === "ar";
  const t = ar
    ? {
        kicker: "حضّر امتحانك",
        note: "الدرس يبقى مجانيا هنا. الدفتر يضيف التدريب والمنهجية في ملف PDF واحد.",
        voir: "اطلع على الدفتر",
        // 3 à 10 (et 103 à 110…) : pluriel ; sinon singulier (11 صفحة، 110 صفحات، 112 صفحة)
        pages: (n) => ` · ${n} ${n % 100 >= 3 && n % 100 <= 10 ? "صفحات" : "صفحة"}`,
        envoi: " · يرسل PDF عبر واتساب",
      }
    : {
        kicker: "Prépare ton examen",
        note: "Le cours reste gratuit ici. Le cahier ajoute l'entraînement et la méthode, dans un seul PDF.",
        voir: `Voir le cahier ${deModule(module)}`,
        pages: (n) => ` · ${n} pages`,
        envoi: " · PDF envoyé sur WhatsApp",
      };
  return (
    <section id={compact ? undefined : "cahier"} className={`sp-cahier${compact ? " compact" : ""}`} dir={ar ? "rtl" : undefined} lang={ar ? "ar" : undefined}>
      {cover && (
        <a className="sp-cahier-cover" href={href}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={cover} alt={`Couverture : ${cahier.titre}`} width={96} height={128} loading="lazy" decoding="async" />
        </a>
      )}
      <div className="sp-cahier-body">
        <span className="sp-cahier-kicker">{t.kicker}</span>
        <Titre className="sp-cahier-title">{cahier.titre}</Titre>
        <p>{compact ? accrocheCourte(cahier) : cahier.sousTitre}</p>
        {!compact && <p className="sp-cahier-note">{t.note}</p>}
        <div className="sp-cahier-foot">
          <a className="sp-btn primary" href={href}>
            {t.voir} <Icon name={ar ? "arrow-left" : "arrow-right"} size={18} />
          </a>
          <span className="sp-cahier-prix">
            <strong>{formatPrix(cahier.prix, cahier.devise)}</strong>
            {cahier.pages ? t.pages(cahier.pages) : ""}
            {t.envoi}
          </span>
        </div>
      </div>
    </section>
  );
}
