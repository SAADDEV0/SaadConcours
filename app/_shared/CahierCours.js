// Annonce du cahier de préparation d'un module : page du module (complète,
// avec son h2) et fin des pages de chapitre (`compact`). Un simple <a> vers la
// fiche /boutique/<id> : la page reste statique, sans appel au Worker, et le
// clic « Commander » reste compté sur la fiche.
// Cahier en arabe (`langue: "ar"`, ex. قانون الأسرة) : annonce en arabe, de droite à gauche.
import { accrocheCourte, deModule, formatPrix, produitImage } from "../../lib/boutique";
import { Icon } from "./icons";

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
