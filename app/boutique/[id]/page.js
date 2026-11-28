import { notFound } from "next/navigation";
import { marked } from "marked";
import { getAllBoutique, getAllCours, getAllDroit, getSettings } from "@/lib/store";
import ChaineWhatsapp from "../../_shared/ChaineWhatsapp";
import { chromeHtml, footerHtml } from "../../_shared/chrome";
import { renderMarkdownWithMath } from "../../_shared/mathMarkdown";
import MathScripts from "../../_shared/MathScripts";
import { boutiqueCardHtml } from "../../_shared/boutiqueCard";
import { fitTitle, clampDescription } from "../../_shared/seoText";
import { accrocheCourte, boutiqueNiveau, commandeHref, contenuCahier, coursLieHref, formatPrix, isProduitAchetable, isProduitVisible, produitImage, remisePct, trierProduits } from "../../../lib/boutique";
import { fsjesModule } from "../../../lib/fsjesChapitres";
import { droitModule, droitOuvert, isDroitPublie } from "../../../lib/droit";
import ProduitClient, { ShareButton } from "./ProduitClient";
import { Icon } from "../../_shared/icons";

const SITE_URL = "https://www.saadconcours.space";

// Cours FSJES et modules de Droit publiés : un cahier peut être lié à l'un ou à l'autre.
async function coursLies() {
  const [cours, droit] = await Promise.all([getAllCours().catch(() => []), droitOuvert() ? getAllDroit().catch(() => []) : []]);
  return [...cours, ...droit.filter(isDroitPublie).map((c) => ({ ...c, espace: "droit" }))];
}

async function findProduit(id) {
  const [boutique, coursList] = await Promise.all([getAllBoutique(), coursLies()]);
  const list = boutique.filter(isProduitVisible);
  const p = list.find((x) => x.id === id) || null;
  return { p, list, coursList, cours: coursDe(p, coursList) };
}

// Le cours gratuit du même module, s'il est publié.
function coursDe(p, coursList) {
  return coursList.find((c) => c.id === p?.cours && c.available) || null;
}

// La requête des étudiants d'abord : « cahier de préparation » + module +
// semestre. Sans le suffixe du modèle de app/layout.js, pour garder ces 65
// caractères au nom du module (seoText.js).
function titreSeo(p, cours) {
  if (!cours) return p.titre;
  if (p.langue === "ar") {
    const nom = `دفتر التحضير ${p.matiere} ${cours.semestre}`;
    return fitTitle([`${nom} PDF`, nom, p.titre]);
  }
  const nom = `Cahier de préparation ${p.matiere} ${cours.semestre}`;
  return fitTitle([`${nom} FSJES`, nom, p.titre]);
}

function descriptionSeo(p, cours) {
  const accroche = accrocheCourte(p);
  if (!cours || !accroche) return clampDescription(p.sousTitre || `Cahier de préparation ${boutiqueNiveau(p.niveau)?.long || ""} en PDF.`);
  if (p.langue === "ar") return clampDescription(`دفتر التحضير لامتحان ${p.matiere} (${cours.semestre}) بصيغة PDF بثمن ${formatPrix(p.prix, p.devise)}: ${p.sousTitre} يطلب عبر واتساب.`);
  return clampDescription(`${p.matiere} (Licence FSJES ${cours.semestre}) : cahier de préparation en PDF à ${formatPrix(p.prix, p.devise)}, ${accroche}. En français simple, commande sur WhatsApp.`);
}

// Arabe : 3 à 10 (et 103 à 110…) au pluriel, sinon au singulier (110 صفحات، 98 صفحة).
const accordAr = (n, pluriel, singulier) => (n % 100 >= 3 && n % 100 <= 10 ? pluriel : singulier);

// Textes de la fiche, en français ou en arabe selon la langue du cahier.
function textes(ar, c, p, cours) {
  if (ar) {
    return {
      chiffres: "الدفتر بالأرقام",
      pages: (n) => accordAr(n, "صفحات", "صفحة"),
      chapitres: (n) => accordAr(n, "محاور", "محورا"),
      qcm: "سؤالا متعدد الاختيارات مصححا",
      questions: "سؤالا مباشرا مع جواب نموذجي",
      exercices: (n) => (c.exercicesNazila ? accordAr(n, "نوازل محلولة", "نازلة محلولة") : accordAr(n, "حالات محلولة", "حالة محلولة")),
      examens: (n) => accordAr(n, "امتحانات تجريبية مصححة", "امتحانا تجريبيا مصححا"),
      termes: "مصطلحا بالعربية والفرنسية",
      points: "ماذا ستجد في الدفتر",
      parcours: "كيف صمم الدفتر",
      parcoursIntro: "يتبع الدفتر درس الكلية من البداية إلى النهاية، في ثلاث مراحل.",
      etapes: [
        ["قبل أن تبدأ", "تنظم مراجعتك وتتعلم مصطلحات المادة."],
        [`الدرس في ${c.chapitres} ${accordAr(c.chapitres, "محاور", "محورا")}`, "بترتيب درس الكلية، وكل محور بنفس التصميم."],
        ["استعدادا ليوم الامتحان", "تتدرب في ظروف الامتحان، ثم تراجع الأساسي ليلة الامتحان."],
      ],
      blocs: "في كل محور، نفس التصميم",
      blocsIntro: "كل المحاور مبنية بنفس الطريقة، فتعرف دائما أين تجد ما تبحث عنه.",
      reviser: "كيف تراجع بالدفتر",
      conseils: [
        c.planRevision && ["calendar", "برنامج في 14 أو 7 أيام", "في بداية الدفتر برنامج مراجعة يوما بيوم: 14 يوما إذا بدأت مبكرا، و7 أيام إذا اقترب الامتحان."],
        ["phone", "على الهاتف أو مطبوعا", `ملف PDF واحد${p.pages ? ` من ${p.pages} ${accordAr(p.pages, "صفحات", "صفحة")}` : ""}، يقرأ على الهاتف واللوحة والحاسوب، أو يطبع.`],
        cours && ["book-open", "مع الدرس المجاني", "اقرأ المحور على الموقع، ثم تدرب في الدفتر: أسئلة متعددة الاختيارات، وأسئلة مباشرة، وتطبيقات محلولة."],
      ].filter(Boolean),
      presentation: "تقديم مفصل",
      commander: "كيف تطلب الدفتر",
      etapesCommande: [
        ["message", "اطلب عبر واتساب", "الرسالة باسم الدفتر مكتوبة مسبقا."],
        ["coins", "ادفع", "نخبرك في المحادثة بطرق الأداء المتاحة."],
        ["send", "توصل بالدفتر", "يرسل إليك ملف PDF في محادثة واتساب بعد الأداء."],
      ],
      faq: "أسئلة متكررة",
      questionsFaq: [
        ["كيف أتوصل بالدفتر؟", "اضغط على زر الطلب عبر واتساب: الرسالة باسم الدفتر مكتوبة مسبقا. بعد الأداء، يرسل إليك ملف PDF في محادثة واتساب."],
        ["هل يمكنني طباعته؟", "نعم. الدفتر ملف PDF: تقرأه على هاتفك أو تطبعه. وهو مخصص لاستعمالك الشخصي."],
        ["ألا يكفي الدرس المجاني؟", "الدرس الكامل يبقى مجانيا على الموقع. الدفتر يضيف التدريب: أسئلة مصححة، وأسئلة مباشرة مع جواب نموذجي، وتطبيقات محلولة، وامتحانات تجريبية، مع منهجية الامتحان."],
        [
          "عندي مشكل في الطلب.",
          <>
            راسلنا على واتساب في الرقم <bdi dir="ltr">+212 7 13 87 53 27</bdi>، في محادثة الطلب نفسها.
          </>,
        ],
      ],
    };
  }
  return {
    chiffres: "Le cahier en chiffres",
    pages: () => "pages",
    chapitres: (n) => (n > 1 ? "chapitres du cours" : "chapitre"),
    qcm: "QCM corrigés et expliqués",
    questions: "questions de cours avec une réponse modèle",
    exercices: () => c.exercicesNom || "exercices corrigés",
    examens: (n) => (n > 1 ? "examens blancs corrigés" : "examen blanc corrigé"),
    termes: "mots expliqués, avec leur traduction arabe",
    points: "Ce que tu trouveras dedans",
    parcours: "Comment est fait le cahier",
    parcoursIntro: "Le cahier suit le cours de la fac du début à la fin, en trois temps.",
    etapes: [
      ["Avant de commencer", "Tu t'organises et tu apprends les mots du module."],
      [`Le cours en ${c.chapitres} chapitres`, "Dans l'ordre du cours, chaque chapitre construit sur le même plan."],
      ["Pour le jour de l'examen", "Tu t'entraînes comme le jour J, puis tu relis l'essentiel la veille."],
    ],
    blocs: "Dans chaque chapitre, le même plan",
    blocsIntro: "Tous les chapitres sont construits de la même façon : tu sais toujours où chercher.",
    reviser: "Comment réviser avec le cahier",
    conseils: [
      c.planRevision && ["calendar", "Un plan en 14 ou en 7 jours", "Au début du cahier, un plan de révision jour par jour : 14 jours si tu t'y prends tôt, 7 jours si l'examen approche."],
      ["phone", "Sur ton téléphone ou imprimé", `Un seul PDF${p.pages ? ` de ${p.pages} pages` : ""}, à lire sur téléphone, tablette ou ordinateur, ou à imprimer.`],
      cours && ["book-open", "Avec le cours gratuit", `Lis le chapitre sur le site, puis entraîne-toi dans le cahier : QCM, questions de cours et ${c.exercicesNom || "exercices corrigés"}.`],
    ].filter(Boolean),
    presentation: "Présentation détaillée",
    commander: "Comment commander",
    etapesCommande: [
      ["message", "Commande sur WhatsApp", "Le message avec le nom du cahier est déjà écrit."],
      ["coins", "Paie", "Nous t'indiquons dans la conversation les moyens de paiement disponibles."],
      ["send", "Reçois ton PDF", "Le cahier t'est envoyé dans la conversation WhatsApp après le paiement."],
    ],
    faq: "Questions fréquentes",
    questionsFaq: [
      ["Comment je reçois le cahier ?", "Clique sur « Commander sur WhatsApp » : le message avec le nom du cahier est déjà écrit. Après le paiement, le PDF t'est envoyé directement dans la conversation WhatsApp."],
      ["Je peux l'imprimer ?", "Oui. C'est un PDF : tu peux le lire sur ton téléphone ou l'imprimer. Il est réservé à ton usage personnel."],
      [
        "Le cours gratuit ne suffit pas ?",
        `Le cours complet reste gratuit sur le site. Le cahier y ajoute l'entraînement : QCM corrigés, questions de cours avec une réponse modèle, ${c.exercicesNom || "exercices corrigés"} et examens blancs, avec la méthode de l'épreuve.`,
      ],
      c.termes && ["Le cahier est-il en arabe ?", "Le cahier est en français simple, avec des phrases courtes. Chaque mot important est expliqué, et le lexique du début donne sa traduction en arabe."],
      [
        "J'ai un problème avec ma commande.",
        <>
          Écris-nous sur WhatsApp au +212 7 13 87 53 27, dans la conversation de ta commande, ou depuis la page <a href="/contact">Contact</a>.
        </>,
      ],
    ].filter(Boolean),
  };
}

// Une icône par bloc du plan de chapitre, d'après ses mots.
function iconeBloc(titre) {
  const t = titre.toLowerCase();
  if (/essentiel|خلاصة/.test(t)) return "book-open";
  if (/définition|تعريف/.test(t)) return "pen";
  if (/formule|compte|chiffre/.test(t)) return "calculator";
  if (/auteur|مؤلف|رواد/.test(t)) return "users";
  if (/article|texte|règle|repère|مواد|نصوص|فصول/.test(t)) return "scale";
  if (/schéma|خطاطة/.test(t)) return "layers";
  if (/piège|فخاخ/.test(t)) return "alert";
  if (/qcm|متعدد/.test(t)) return "check-circle";
  if (/question|أسئلة/.test(t)) return "message";
  if (/cas|نازل|حال/.test(t)) return "briefcase";
  return "file-pen";
}

function iconePartie(titre) {
  const t = titre.toLowerCase();
  if (/plan de révision|برنامج/.test(t)) return "calendar";
  if (/mots|termes|lexique|مصطلح/.test(t)) return "languages";
  if (/méthod|منهجية/.test(t)) return "compass";
  if (/examen|امتحان/.test(t) && !/veille|ليلة/.test(t)) return "clipboard";
  if (/mémo|veille|ملخص/.test(t)) return "bulb";
  return "file";
}

export const dynamic = "force-static";
export const revalidate = false;

export async function generateStaticParams() {
  try {
    return (await getAllBoutique()).filter(isProduitVisible).map((p) => ({ id: p.id }));
  } catch {
    return [];
  }
}

export async function generateMetadata(props) {
  const { id } = await props.params;
  const { p, cours } = await findProduit(id);
  if (!p) return {};
  const url = `${SITE_URL}/boutique/${p.id}`;
  const title = titreSeo(p, cours);
  const description = descriptionSeo(p, cours);
  const image = p.couverture ? `${SITE_URL}${produitImage(p.couverture)}` : undefined;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { type: "website", title, description, url, images: [image || "/opengraph-image"] },
    twitter: { card: "summary_large_image", title, description, ...(image ? { images: [image] } : {}) },
  };
}

export default async function ProduitPage(props) {
  const { id } = await props.params;
  const { p, list, coursList, cours } = await findProduit(id);
  if (!p) notFound();
  const settings = await getSettings().catch(() => null);
  // Cahier en arabe : titre, accroche, points forts, présentation et sommaire de droite à gauche.
  const rtl = p.langue === "ar" ? { dir: "rtl", lang: "ar" } : {};

  const niv = boutiqueNiveau(p.niveau);
  const url = `${SITE_URL}/boutique/${p.id}`;
  const achetable = isProduitAchetable(p);
  const href = commandeHref(p);
  const remise = remisePct(p);
  const cover = produitImage(p.couverture);
  const descriptionHtml = renderMarkdownWithMath(marked, p.description || "");
  const ar = p.langue === "ar";
  const c = contenuCahier(p);
  const t = textes(ar, c, p, cours);
  const chiffres = [
    p.pages && ["file", p.pages, t.pages(p.pages)],
    c.chapitres > 0 && ["layers", c.chapitres, t.chapitres(c.chapitres)],
    c.qcm && ["check-circle", c.qcm, t.qcm],
    c.questions && ["message", c.questions, t.questions],
    c.exercices && ["briefcase", c.exercices, t.exercices(c.exercices)],
    c.examens && ["clipboard", c.examens, t.examens(c.examens)],
    c.termes && ["languages", c.termes, t.termes],
  ].filter(Boolean);
  // Même langue et même filière (FSJES ou Droit) d'abord, puis même semestre :
  // ceux que l'étudiant passe en même temps.
  const proche = (x) => {
    const cx = coursDe(x, coursList);
    return (
      4 * Number((x.langue || "fr") === (p.langue || "fr")) +
      2 * Number(Boolean(cours) && Boolean(cx) && (cx.espace || "") === (cours.espace || "")) +
      Number(x.niveau === p.niveau) +
      Number(Boolean(cours) && cx?.semestre === cours.semestre)
    );
  };
  const autres = trierProduits(list.filter((x) => x.id !== p.id))
    .sort((a, b) => proche(b) - proche(a))
    .slice(0, 3);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.titre,
    description: p.sousTitre || p.titre,
    url,
    ...(cover ? { image: `${SITE_URL}${cover}` } : {}),
    brand: { "@type": "Brand", name: "SaadConcours" },
    category: "Livre numérique / cahier de préparation",
    ...(achetable
      ? {
          offers: {
            "@type": "Offer",
            price: Number(p.prix),
            priceCurrency: p.devise || "MAD",
            availability: "https://schema.org/InStock",
            url,
          },
        }
      : {}),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Boutique", item: `${SITE_URL}/boutique` },
      { "@type": "ListItem", position: 3, name: p.titre, item: url },
    ],
  };

  return (
    <>
      <MathScripts />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "boutique" }) }} />
      <ProduitClient id={p.id} />

      <div className="bac-space">
        <div className="bac-wrap">
          <nav className="cd-breadcrumb">
            <a href="/">Accueil</a> <span>/</span> <a href="/boutique">Boutique</a> <span>/</span> <span>{p.titre}</span>
          </nav>

          <div className="shop-detail">
            <div className="shop-detail-cover">
              {cover ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={cover} alt={`Couverture : ${p.titre}`} />
              ) : (
                <span className="shop-cover-ph" aria-hidden="true">
                  <Icon e={niv?.icon || "book"} size={64} strokeWidth={1.4} />
                </span>
              )}
              {p.badge && <span className="shop-badge">{p.badge}</span>}
            </div>

            <div className="shop-detail-main">
              <div className="bac-eyebrow">
                {niv ? (
                  <a href={`/boutique?niveau=${niv.code}`}>
                    {niv.long}
                  </a>
                ) : (
                  "Cahier de préparation"
                )}
                {p.matiere ? ` · ${p.matiere}` : ""}
              </div>
              <h1 {...rtl}>{p.titre}</h1>
              {p.sousTitre && (
                <p className="shop-detail-sub" {...rtl}>
                  {p.sousTitre}
                </p>
              )}

              <div className="shop-buybox">
                <div className="shop-buybox-price">
                  {achetable ? (
                    <>
                      <strong>{formatPrix(p.prix, p.devise)}</strong>
                      {remise > 0 && (
                        <>
                          <s>{formatPrix(p.prixBarre, p.devise)}</s>
                          <span className="shop-remise static">−{remise} %</span>
                        </>
                      )}
                    </>
                  ) : (
                    <strong className="shop-soon">Bientôt disponible</strong>
                  )}
                </div>
                {achetable && (
                  <a className="sp-btn primary shop-buy" href={href} target="_blank" rel="noopener" data-shop-buy={p.id}>
                    <Icon name="message" size={18} />
                    Commander sur WhatsApp
                  </a>
                )}
                <ShareButton titre={p.titre} prix={achetable ? formatPrix(p.prix, p.devise) : ""} />
                {p.apercu && (
                  <a className="sp-btn" href={p.apercu} target="_blank" rel="noopener">
                    <Icon name="eye" size={18} />
                    Voir un extrait gratuit
                  </a>
                )}
                <ul className="shop-reassure">
                  <li>
                    <Icon name="message" size={15} /> Le message avec le nom du cahier est déjà écrit
                  </li>
                  <li>
                    <Icon name="send" size={15} /> PDF envoyé sur WhatsApp après le paiement
                  </li>
                  <li>
                    <Icon name="phone" size={15} /> Lisible sur téléphone, tablette et ordinateur
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {chiffres.length > 2 && (
            <section className="bac-group" {...rtl}>
              <h2 className="bac-section-title">{t.chiffres}</h2>
              <ul className="shop-chiffres">
                {chiffres.map(([icon, n, label]) => (
                  <li key={icon}>
                    <Icon name={icon} size={20} />
                    <strong>{n}</strong>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {(p.pointsForts || []).length > 0 && (
            <section className="bac-group" {...rtl}>
              <h2 className="bac-section-title">{t.points}</h2>
              <ul className="shop-points">
                {p.pointsForts.map((pt) => (
                  <li key={pt}>
                    <Icon name="check-circle" size={17} />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {c.temps ? (
            <section className="bac-group" {...rtl}>
              <h2 className="bac-section-title">{t.parcours}</h2>
              <p className="shop-intro">{t.parcoursIntro}</p>
              <ol className="shop-parcours">
                {[c.temps.avant, c.temps.chapitres, c.temps.apres].map((lignes, i) =>
                  lignes.length ? (
                    <li key={i} className={i === 1 ? "is-cours" : undefined}>
                      <span className="shop-parcours-num" aria-hidden="true">
                        {i + 1}
                      </span>
                      <div className="shop-parcours-body">
                        <h3>{t.etapes[i][0]}</h3>
                        <p>{t.etapes[i][1]}</p>
                        <ul className={i === 1 ? "shop-chapitres" : "shop-parties"}>
                          {lignes.map((l) => (
                            <li key={l.titre}>
                              {i === 1 ? <span className="shop-chap-num">{l.num}</span> : <Icon name={iconePartie(l.titre)} size={17} />}
                              <span>
                                {i !== 1 && l.type ? <em>{`${l.type} ${l.num} · `}</em> : null}
                                {l.titre}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ) : null
                )}
              </ol>
            </section>
          ) : (
            (p.sommaire || []).length > 0 && (
              <section className="bac-group" {...rtl}>
                <h2 className="bac-section-title">{ar ? "الفهرس" : "Sommaire"}</h2>
                <ul className="shop-parties shop-sommaire">
                  {p.sommaire.map((s, i) => (
                    <li key={i}>
                      <Icon name={iconePartie(s)} size={17} />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )
          )}

          {c.blocs.length > 2 && (
            <section className="bac-group" {...rtl}>
              <h2 className="bac-section-title">{t.blocs}</h2>
              <p className="shop-intro">{t.blocsIntro}</p>
              <ol className="shop-blocs">
                {c.blocs.map((b, i) => (
                  <li key={b.titre}>
                    <span className="shop-bloc-head">
                      <Icon name={iconeBloc(b.titre)} size={18} />
                      <em>{i + 1}</em>
                    </span>
                    <strong>{b.titre}</strong>
                    {b.detail && <span>{b.detail}</span>}
                  </li>
                ))}
              </ol>
            </section>
          )}

          <section className="bac-group" {...rtl}>
            <h2 className="bac-section-title">{t.reviser}</h2>
            <div className="shop-conseils">
              {t.conseils.map(([icon, titre, texte]) => (
                <div key={titre}>
                  <Icon name={icon} size={22} />
                  <strong>{titre}</strong>
                  <span>{texte}</span>
                </div>
              ))}
            </div>
          </section>

          {p.description && (
            <section className="bac-group" {...rtl}>
              <h2 className="bac-section-title">{t.presentation}</h2>
              <div className="cd-card">
                <div className="enonce-content" dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
              </div>
            </section>
          )}

          {achetable && (
            <section className="shop-commande" {...rtl}>
              <h2>{t.commander}</h2>
              <ol className="shop-commande-etapes">
                {t.etapesCommande.map(([icon, titre, texte], i) => (
                  <li key={titre}>
                    <span className="shop-commande-num" aria-hidden="true">
                      {i + 1}
                    </span>
                    <span>
                      <strong>
                        <Icon name={icon} size={16} /> {titre}
                      </strong>
                      <span>{texte}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <div className="shop-cta-bottom">
                <div>
                  <strong>{p.titre}</strong>
                  <span dir="ltr">{formatPrix(p.prix, p.devise)} · PDF envoyé sur WhatsApp</span>
                </div>
                <a className="sp-btn primary shop-buy" href={href} target="_blank" rel="noopener" data-shop-buy={p.id}>
                  <Icon name="message" size={18} />
                  Commander sur WhatsApp
                </a>
              </div>
            </section>
          )}

          <section className="sp-about shop-faq" {...rtl}>
            <h2>{t.faq}</h2>
            {t.questionsFaq.map(([q, r]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{r}</p>
              </details>
            ))}
          </section>

          {cours && (
            <section className="bac-group">
              <h2 className="bac-section-title">Le cours gratuit de ce module</h2>
              <a className="bac-mat-card" href={coursLieHref(cours)}>
                <span className="bac-mat-body">
                  <span className="bac-mat-name" dir={cours.langue === "ar" ? "rtl" : undefined}>
                    {cours.module} ({cours.semestre})
                  </span>
                  <span className="bac-mat-desc sp-desc-clamp" dir={cours.langue === "ar" ? "rtl" : undefined}>
                    {cours.description}
                  </span>
                  <span className="bac-mat-meta">
                    <span>{(cours.espace === "droit" ? droitModule(cours) : fsjesModule(cours)).chapitres.length} chapitres</span>
                    <span className="bac-dot">·</span>
                    <span>Cours, exercices corrigés, résumé et QCM</span>
                  </span>
                </span>
              </a>
            </section>
          )}

          {autres.length > 0 && (
            <section className="bac-group">
              <h2 className="bac-section-title">Autres cahiers</h2>
              <div className="shop-grid" dangerouslySetInnerHTML={{ __html: autres.map(boutiqueCardHtml).join("") }} />
            </section>
          )}

          <ChaineWhatsapp settings={settings} texte="Les nouveaux cahiers et leurs prix sont annoncés en premier sur la chaîne WhatsApp SaadConcours." />
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />
    </>
  );
}
