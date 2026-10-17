// Droit pénal spécial (Droit S3) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Le droit pénal spécial : objet et méthode de qualification",
    description: "Droit pénal spécial marocain : livre III du Code pénal, lois spéciales, méthode de qualification, conflits de qualifications et circonstances aggravantes.",
    resume: md`
## L'essentiel — Objet et méthode

- **Droit pénal spécial** : étude des infractions particulières (éléments, circonstances, peines) ; indissociable du droit pénal général.
- Sources : **livre III du Code pénal** (sûreté de l'État, ordre public, sécurité publique, famille et mœurs, personnes, biens) et lois spéciales (52-05, 88-13, 09-08, 27-14, 103-13, 43-05, 03-03, Code de commerce, douanes, impôts).
- **Qualification** : rattacher un fait à un texte en vérifiant chaque élément (interprétation stricte, article 3).
- Étapes : faits, textes, élément légal, élément matériel, élément moral, circonstances, peine et catégorie, participants.
- **Concours idéal** : qualification la plus grave (article 118) ; **qualifications incompatibles** (meurtre / homicide involontaire ; vol / recel de la même chose) ; **texte spécial** prime le texte général ; **requalification** par le juge.
- Circonstances aggravantes **réelles** (préméditation, arme, effraction, nuit, réunion) et **personnelles** (qualité de l'auteur ou de la victime, vulnérabilité) ; certaines transforment le délit en crime.
- **Excuse de provocation** (articles 416 à 418) : réduit la peine (article 423) ; ≠ légitime défense.
- Tentative d'escroquerie et d'abus de confiance punie (article 546).
`,
    exercices: md`
### Exercice 2 — Quel titre du Code pénal ?

Rattachez chaque infraction à la valeur protégée : 1) la corruption d'un fonctionnaire ; 2) le viol ; 3) l'escroquerie ; 4) l'association de malfaiteurs ; 5) la diffamation ; 6) l'espionnage.

<details><summary>Voir le corrigé</summary>

1) Ordre public (fonctionnement de l'administration). 2) Ordre des familles et moralité publique. 3) Biens. 4) Sécurité publique. 5) Personnes (honneur), avec des règles spéciales dans la loi 88-13 sur la presse lorsqu'elle est commise par voie de presse. 6) Sûreté de l'État.

</details>

### Exercice 3 — Texte général ou spécial ?

Un agent de la Trésorerie détourne 200 000 DH de fonds publics qu'il détenait en raison de ses fonctions. Le parquet hésite entre l'abus de confiance (article 547) et le détournement de deniers publics (article 241). Quelle qualification retenir et pourquoi ?

<details><summary>Voir le corrigé</summary>

Les deux textes visent le fait de détourner des fonds remis à titre précaire. Mais l'article 241 vise spécialement le détournement commis par un fonctionnaire de deniers publics qu'il détient en raison de ses fonctions : il constitue le texte spécial, qui prime le texte général de l'abus de confiance (specialia generalibus derogant). Il faut retenir le détournement de deniers publics, puni de peines beaucoup plus lourdes, criminelles au-delà d'un certain montant.

</details>
`,
    qcm: [
      { q: "Le droit pénal spécial étudie :", choix: ["Les règles communes à toutes les infractions", "Les infractions particulières et leurs peines", "La procédure pénale", "La criminologie"], bonne: 1, explication: "Le droit pénal général fixe les règles communes." },
      { q: "Les infractions sont regroupées dans le livre III du Code pénal selon :", choix: ["L'ordre alphabétique", "La valeur sociale protégée", "La date de création", "La gravité seulement"], bonne: 1, explication: "Sûreté de l'État, ordre public, personnes, biens…" },
      { q: "En cas de concours idéal, on retient :", choix: ["Toutes les qualifications cumulées", "La qualification la plus grave", "La qualification la plus douce", "Aucune qualification"], bonne: 1, explication: "Article 118 du Code pénal." },
      { q: "Le meurtre et l'homicide involontaire pour un même fait sont :", choix: ["Cumulables", "Incompatibles", "Identiques", "Des contraventions"], bonne: 1, explication: "Ils supposent des éléments moraux opposés." },
      { q: "Lorsqu'un texte spécial et un texte général s'appliquent :", choix: ["Le texte général l'emporte", "Le texte spécial l'emporte", "Le juge choisit librement", "Aucun ne s'applique"], bonne: 1, explication: "Specialia generalibus derogant." },
      { q: "L'usage d'une arme est une circonstance aggravante :", choix: ["Personnelle", "Réelle", "Atténuante", "Inexistante"], bonne: 1, explication: "Liée à l'acte, elle s'applique à tous les participants." },
      { q: "La qualité de fonctionnaire de l'auteur est une circonstance :", choix: ["Réelle", "Personnelle", "Atténuante", "Justificative"], bonne: 1, explication: "Liée à la qualité de l'auteur." },
      { q: "L'excuse de provocation :", choix: ["Supprime l'infraction", "Réduit la peine", "Aggrave la peine", "Transforme le délit en crime"], bonne: 1, explication: "Articles 416 et 423." },
      { q: "La tentative d'escroquerie est punissable en vertu :", choix: ["De l'article 114 seulement", "D'un texte spécial (article 546)", "De la coutume", "Elle ne l'est pas"], bonne: 1, explication: "La tentative de délit exige un texte." },
      { q: "Le juge pénal peut-il modifier la qualification retenue par le parquet ?", choix: ["Non, jamais", "Oui, en respectant les droits de la défense", "Seulement en appel", "Seulement pour les contraventions"], bonne: 1, explication: "Il doit donner aux faits leur exacte qualification." },
    ],
  },

  2: {
    titre: "Les atteintes à la vie",
    description: "Atteintes à la vie en droit marocain : meurtre (article 392), assassinat, parricide, infanticide, empoisonnement, coups mortels et homicide involontaire.",
    resume: md`
## L'essentiel — Atteintes à la vie

- **Meurtre** (article 392) : acte positif, mort d'une personne vivante, causalité, **intention de tuer** (arme, zone visée, violence) ; **réclusion perpétuelle** ; mobile indifférent.
- Meurtre lié à un autre crime ou destiné à faciliter un délit : **mort** (article 392, alinéa 2).
- **Assassinat** (article 393) : meurtre avec **préméditation** (article 394 : dessein formé avant l'action) ou **guet-apens** (article 395 : attente de la victime) ; mort.
- **Parricide** (article 396) : meurtre d'un ascendant ; mort.
- **Infanticide** (article 397) : meurtre d'un nouveau-né ; la mère : réclusion de **5 à 10 ans** (atténuation personnelle).
- **Empoisonnement** (article 398) : infraction **formelle**, consommée quelles que soient les suites ; mort.
- **Coups mortels** (article 403) : intention de frapper sans intention de tuer (praeterintentionnel) ; réclusion de **10 à 20 ans**.
- **Homicide involontaire** (article 432) : maladresse, imprudence, négligence, inobservation des règlements ; emprisonnement de **3 mois à 5 ans** ; aggravation en cas d'ivresse ou de fuite (article 434).
- Tentative de meurtre punie comme le meurtre (article 114) ; peine de mort non exécutée depuis 1993.
`,
    exercices: md`
### Exercice 2 — Quelle qualification ?

Qualifiez : 1) un chasseur tire sur un buisson qui bouge et tue un berger ; 2) un fils tue son père à coups de bâton au cours d'une dispute ; 3) une infirmière administre volontairement une dose mortelle d'insuline à un patient âgé, qui survit ; 4) un individu tue un témoin pour l'empêcher de le dénoncer pour un vol.

<details><summary>Voir le corrigé</summary>

1) Homicide involontaire (imprudence), article 432. 2) Parricide (article 396) si l'intention de tuer est établie (violence et répétition des coups) ; sinon coups mortels (article 403), la qualité d'ascendant de la victime aggravant la peine. 3) Empoisonnement (article 398), consommé malgré la survie. 4) Meurtre aggravé (article 392, alinéa 2) : meurtre destiné à assurer l'impunité de l'auteur d'un délit, puni de mort.

</details>

### Exercice 3 — Meurtre ou coups mortels ?

À partir de quels indices le juge peut-il retenir l'intention de donner la mort dans les situations suivantes : a) un coup de couteau dans le ventre ; b) un coup de poing au visage ; c) plusieurs coups de barre de fer sur la tête d'une personne à terre ; d) une gifle suivie d'une chute mortelle ?

<details><summary>Voir le corrigé</summary>

a) Le couteau et la zone vitale visée laissent présumer une intention de tuer, que l'auteur peut tenter de contredire : meurtre probable. b) Un coup de poing unique au visage révèle une intention de frapper : coups mortels si la mort survient. c) La répétition des coups, l'arme et la tête visée sur une victime sans défense révèlent l'intention de tuer : meurtre. d) La gifle n'est pas de nature à donner la mort : coups mortels (article 403), la mort résultant de la chute.

</details>
`,
    qcm: [
      { q: "Le meurtre est puni de :", choix: ["La réclusion de 10 à 20 ans", "La réclusion perpétuelle", "L'emprisonnement de 5 ans", "L'amende"], bonne: 1, explication: "Article 392 du Code pénal." },
      { q: "L'élément qui distingue le meurtre des coups mortels est :", choix: ["L'arme", "L'intention de donner la mort", "Le lieu", "La qualité de la victime"], bonne: 1, explication: "Animus necandi." },
      { q: "L'assassinat est un meurtre commis avec :", choix: ["Imprudence", "Préméditation ou guet-apens", "Provocation", "Légitime défense"], bonne: 1, explication: "Article 393." },
      { q: "Le guet-apens consiste à :", choix: ["Former un dessein avant l'action", "Attendre la victime pour l'agresser", "Empoisonner la victime", "Fuir après le crime"], bonne: 1, explication: "Article 395." },
      { q: "Le parricide est le meurtre :", choix: ["D'un enfant", "D'un ascendant", "D'un conjoint", "D'un fonctionnaire"], bonne: 1, explication: "Article 396." },
      { q: "La mère auteur d'un infanticide encourt :", choix: ["La mort", "La réclusion de 5 à 10 ans", "Une amende", "Aucune peine"], bonne: 1, explication: "Article 397, atténuation personnelle." },
      { q: "L'empoisonnement est consommé :", choix: ["Seulement si la victime meurt", "Par l'administration de la substance, quelles qu'en soient les suites", "Seulement en cas d'aveu", "Après un délai d'un an"], bonne: 1, explication: "Infraction formelle (article 398)." },
      { q: "Les coups mortels sans intention de donner la mort sont punis de :", choix: ["La réclusion de 10 à 20 ans", "La mort", "L'emprisonnement d'un mois", "L'amende seule"], bonne: 0, explication: "Article 403." },
      { q: "L'homicide involontaire est prévu à l'article :", choix: ["392", "403", "432", "505"], bonne: 2, explication: "Imprudence, négligence, inobservation des règlements." },
      { q: "La tentative de meurtre est :", choix: ["Non punissable", "Punie comme le meurtre consommé", "Une contravention", "Punie d'une simple amende"], bonne: 1, explication: "Article 114 : tentative de crime." },
    ],
  },

  3: {
    titre: "Les atteintes à l'intégrité physique et à la liberté",
    description: "Violences volontaires (articles 400 à 404), loi 103-13 sur les violences faites aux femmes, blessures involontaires, menaces, séquestration et torture.",
    resume: md`
## L'essentiel — Intégrité physique et liberté

- **Violences volontaires** : coups, blessures, voies de fait ; volonté de l'acte, pas nécessairement du résultat.
- Gradation : incapacité de **20 jours au plus** (article 400, délit) ; **plus de 20 jours** (article 401, délit, 1 à 3 ans) ; **infirmité permanente** (article 402, crime, 5 à 10 ans) ; **mort** (article 403, 10 à 20 ans).
- Aggravations : préméditation, guet-apens, arme ; victime ascendant, **conjoint ou ex-conjoint, fiancé**, femme enceinte, enfant, personne vulnérable (article 404) ; agents publics (articles 263 et suivants).
- **Loi 103-13** (en vigueur en septembre 2018) : définition de la violence (physique, psychologique, sexuelle, économique), **harcèlement sexuel** dans l'espace public et par messages (article 503-1-1), mariage forcé (503-2-1), expulsion du domicile, atteintes à la vie privée (447-1 à 447-3), **mesures de protection** (interdiction de contact), cellules d'accueil.
- **Blessures involontaires** (article 433) ; aggravation en cas d'ivresse ou de fuite (article 434).
- **Menaces** (articles 425 à 429) : écrite ou verbale, avec ordre ou condition ; extorsion (article 537).
- **Séquestration** (article 436) : crime, **infraction continue**, aggravée par la durée, la violence, la rançon ; enlèvement de mineur (articles 471 et suivants).
- **Torture** (article 231-1, loi de 2006) : souffrance aiguë infligée par un fonctionnaire ou avec son accord, pour obtenir des aveux, punir ou intimider ; 5 à 15 ans ; article 22 de la Constitution.
`,
    exercices: md`
### Exercice 2 — Quel article ?

Indiquez l'article applicable : 1) un coup de poing causant 8 jours d'incapacité ; 2) des coups causant la perte d'un œil ; 3) des coups causant 30 jours d'incapacité à une femme enceinte dont la grossesse était visible ; 4) un automobiliste distrait blesse un cycliste, qui a 45 jours d'incapacité.

<details><summary>Voir le corrigé</summary>

1) Article 400 (incapacité de vingt jours au plus). 2) Article 402 (infirmité permanente), crime. 3) Article 401 (plus de vingt jours), aggravé par l'article 404 (femme enceinte, grossesse apparente). 4) Article 433 (blessures involontaires par inattention), le cas échéant aggravé par le Code de la route.

</details>

### Exercice 3 — Les mesures de protection

Une femme victime de violences répétées de son conjoint porte plainte. Quelles mesures de protection le procureur ou le juge peuvent-ils ordonner en application de la loi 103-13 ? Quels acteurs peuvent l'accompagner ?

<details><summary>Voir le corrigé</summary>

Peuvent être ordonnées : l'interdiction pour l'auteur d'entrer en contact avec la victime ou de s'approcher d'elle et de ses enfants, l'interdiction de résider au domicile conjugal ou le retour de la victime au domicile, l'obligation pour l'auteur de suivre un traitement psychologique adapté, la remise des armes, et la notification à l'agresseur de l'interdiction de disposer des biens communs. La victime peut être accompagnée par les cellules de prise en charge des femmes victimes de violences installées dans les tribunaux, les hôpitaux, la police et la gendarmerie, et par des associations ; elle peut demander l'aide juridictionnelle.

</details>
`,
    qcm: [
      { q: "Les violences ayant entraîné une incapacité de plus de 20 jours relèvent de l'article :", choix: ["400", "401", "402", "403"], bonne: 1, explication: "Délit plus sévèrement puni." },
      { q: "Les violences ayant causé une infirmité permanente sont :", choix: ["Un délit", "Un crime", "Une contravention", "Non punissables"], bonne: 1, explication: "Article 402 : réclusion de 5 à 10 ans." },
      { q: "La loi relative à la lutte contre la violence à l'égard des femmes est la loi :", choix: ["103-13", "70-03", "27-14", "09-08"], bonne: 0, explication: "En vigueur depuis septembre 2018." },
      { q: "Le harcèlement sexuel dans l'espace public est réprimé depuis :", choix: ["1962", "2004", "2018", "2023"], bonne: 2, explication: "Article 503-1-1, loi 103-13." },
      { q: "Les violences sur le conjoint sont :", choix: ["Une circonstance atténuante", "Une circonstance aggravante", "Sans effet sur la peine", "Une cause d'irresponsabilité"], bonne: 1, explication: "Article 404 modifié." },
      { q: "La séquestration est une infraction :", choix: ["Instantanée", "Continue", "D'habitude", "Contraventionnelle"], bonne: 1, explication: "Elle dure tant que dure la détention." },
      { q: "La demande de rançon lors d'une séquestration :", choix: ["Est sans effet", "Aggrave la peine", "Supprime l'infraction", "Transforme le crime en délit"], bonne: 1, explication: "Articles 438 et suivants." },
      { q: "La torture a été introduite dans le Code pénal en :", choix: ["1962", "1993", "2006", "2018"], bonne: 2, explication: "Articles 231-1 et suivants." },
      { q: "La torture au sens de l'article 231-1 suppose l'intervention :", choix: ["D'un fonctionnaire ou son accord", "D'un mineur", "D'une entreprise", "D'un juge"], bonne: 0, explication: "Ou à son instigation ou avec son consentement." },
      { q: "Les blessures involontaires sont réprimées par l'article :", choix: ["400", "432", "433", "436"], bonne: 2, explication: "Maladresse, imprudence, négligence." },
    ],
  },

  4: {
    titre: "Les atteintes aux mœurs, à la famille, à l'honneur et à la vie privée",
    description: "Viol, attentat à la pudeur, harcèlement sexuel, traite (loi 27-14), abandon de famille, diffamation et injure (loi 88-13), atteintes à la vie privée.",
    resume: md`
## L'essentiel — Mœurs, famille, honneur, vie privée

- **Viol** (article 486) : relation sexuelle imposée sans consentement ; réclusion de **5 à 10 ans** ; **10 à 20 ans** si victime mineure, incapable, handicapée ou enceinte ; aggravations selon l'auteur (article 487) et les séquelles (article 488) ; réforme de 2014 (fin de l'impunité par mariage).
- **Attentat à la pudeur** : sans violence sur mineur (article 484, 2 à 5 ans) ; avec violence (article 485, 5 à 10 ans, 10 à 20 ans si mineur) ; outrage public à la pudeur (article 483).
- **Harcèlement sexuel** : abus d'autorité (article 503-1) ; espace public et messages (article 503-1-1, loi 103-13).
- Exploitation sexuelle, proxénétisme, pornographie infantile (articles 497 et suivants, 503-2) ; articles 490 et 491 débattus dans la réforme.
- **Traite** (loi **27-14**, 2016, articles 448-1 et suivants) : recrutement, transport, hébergement par contrainte ou tromperie aux fins d'exploitation ; pour l'enfant, sans exigence de contrainte.
- **Abandon de famille** (article 480) : plus d'un mois sans payer la pension fixée par jugement ; abandon du domicile familial (article 479).
- **Diffamation** (imputation d'un fait précis) / **injure** (expression outrageante) : Code pénal (articles 442 à 444) et loi **88-13** (presse, amendes, prescription courte).
- **Vie privée** (articles 447-1 à 447-3) : captation et diffusion de paroles ou d'images privées, montages ; aggravations (conjoint, ex-conjoint, fiancé, mineur) ; loi 09-08.
`,
    exercices: md`
### Exercice 2 — Diffamation ou injure ?

Qualifiez : 1) « Le directeur de l'hôpital a falsifié les comptes de l'établissement l'an dernier » ; 2) « Ce juge est un incapable » ; 3) « La pharmacienne du quartier vend des médicaments périmés depuis janvier » ; 4) un message traitant un voisin d'« animal ».

<details><summary>Voir le corrigé</summary>

1) Diffamation : imputation d'un fait précis (falsification des comptes), relatif aux fonctions. 2) Injure : expression outrageante sans fait précis ; si elle vise un magistrat dans l'exercice de ses fonctions, elle peut aussi constituer un outrage (articles 263 et suivants). 3) Diffamation : fait précis portant atteinte à la considération professionnelle. 4) Injure.

</details>

### Exercice 3 — Traite ou exploitation ?

Une jeune fille de 15 ans, originaire d'un village de l'Atlas, est recrutée par un intermédiaire qui promet à ses parents un emploi bien payé à Casablanca. Elle est placée comme domestique dans une famille, sans salaire, privée de ses papiers et enfermée. Qualifiez les faits.

<details><summary>Voir le corrigé</summary>

Les faits constituent une traite des êtres humains (article 448-1, loi 27-14) : recrutement et transfert d'une personne, par la tromperie (promesse d'emploi), aux fins d'exploitation (servitude domestique, travail forcé). La victime étant mineure, l'infraction est constituée même sans contrainte, et la minorité aggrave la peine. L'intermédiaire et la famille employeuse peuvent être poursuivis. Les faits violent aussi la loi 19-12 sur les travailleurs domestiques (âge minimum, salaire) et peuvent constituer une séquestration.

</details>
`,
    qcm: [
      { q: "Le viol est réprimé par l'article :", choix: ["484", "486", "490", "503-1"], bonne: 1, explication: "Réclusion de 5 à 10 ans." },
      { q: "Le viol d'une mineure est puni de :", choix: ["La réclusion de 5 à 10 ans", "La réclusion de 10 à 20 ans", "Une amende", "L'emprisonnement d'un an"], bonne: 1, explication: "Circonstance aggravante." },
      { q: "L'attentat à la pudeur sans violence sur un mineur relève de l'article :", choix: ["483", "484", "485", "486"], bonne: 1, explication: "Emprisonnement de 2 à 5 ans." },
      { q: "La loi relative à la traite des êtres humains est la loi :", choix: ["27-14", "103-13", "88-13", "19-12"], bonne: 0, explication: "Adoptée en 2016." },
      { q: "Lorsque la victime de la traite est un enfant, l'infraction suppose :", choix: ["Une contrainte", "Seulement le recrutement aux fins d'exploitation", "Le consentement des parents", "Un passage de frontière"], bonne: 1, explication: "Pas d'exigence de moyens de contrainte." },
      { q: "L'abandon de famille suppose un défaut de paiement de la pension pendant plus de :", choix: ["Une semaine", "Un mois", "Six mois", "Un an"], bonne: 1, explication: "Article 480." },
      { q: "La diffamation consiste à :", choix: ["Utiliser une expression outrageante sans fait précis", "Imputer un fait précis portant atteinte à l'honneur", "Menacer de mort", "Diffuser une image privée"], bonne: 1, explication: "L'injure ne contient aucun fait." },
      { q: "La loi relative à la presse et à l'édition est la loi :", choix: ["88-13", "09-08", "31-13", "103-13"], bonne: 0, explication: "Adoptée en 2016." },
      { q: "La diffusion sans consentement de photos prises dans un lieu privé est réprimée par l'article :", choix: ["447-1", "448-1", "480", "503-2"], bonne: 0, explication: "Loi 103-13." },
      { q: "Le harcèlement sexuel par messages électroniques est réprimé par l'article :", choix: ["503-1-1", "486", "442", "231-1"], bonne: 0, explication: "Introduit par la loi 103-13." },
    ],
  },

  5: {
    titre: "Les atteintes aux biens par soustraction : le vol et le recel",
    description: "Vol en droit pénal marocain (article 505) : soustraction, chose d'autrui, intention, vols aggravés, vols entre proches, extorsion, chantage et recel.",
    resume: md`
## L'essentiel — Vol et recel

- **Vol** (article 505) : **soustraction frauduleuse de la chose d'autrui** ; emprisonnement de **1 à 5 ans** et amende.
- **Soustraction** : appréhension sans la volonté de la victime ; pas de soustraction en cas de remise volontaire (sauf remise purement matérielle).
- **Chose mobilière** ; énergie assimilée (article 521) ; immeubles exclus, éléments détachés inclus.
- **Appartenant à autrui** : chose perdue ≠ chose abandonnée.
- **Intention frauduleuse** : volonté de s'approprier ; erreur exclusive ; mobile indifférent ; tentative punie (article 539).
- **Vols aggravés** (articles 507 à 510) : violence, **arme** (même non utilisée), effraction, escalade, fausses clés, maison habitée, **nuit**, pluralité, qualité de l'auteur (domestique, salarié), catastrophe ; souvent **criminels** en cas de cumul.
- **Vols entre proches** (articles 534 à 536) : réparation civile ou poursuite sur plainte ; ne profite pas aux tiers.
- **Extorsion** (article 537) : remise obtenue par force, violence ou contrainte ; crime.
- **Chantage** (article 538) : remise obtenue sous menace de révélations ; sextorsion.
- **Recel** (article 571) : recevoir, détenir, transmettre une chose provenant d'un crime ou délit, en le sachant ; peine du crime d'origine si les circonstances étaient connues (article 572) ; infraction **continue** et distincte ; ≠ complicité (intervention postérieure).
`,
    exercices: md`
### Exercice 2 — Vol ou non ?

Le vol est-il constitué ? 1) Un client sort d'un magasin avec un téléphone sans le payer ; 2) un passant ramasse un portefeuille contenant une carte d'identité et le garde ; 3) un étudiant reprend le vélo qu'il croit être le sien, identique à celui d'un camarade ; 4) un individu récupère des meubles déposés sur le trottoir par un voisin qui déménage et les abandonne ; 5) un locataire branche son appartement sur le compteur du voisin.

<details><summary>Voir le corrigé</summary>

1) Oui : soustraction frauduleuse d'une marchandise. 2) Oui : la chose perdue appartient à autrui et le propriétaire est identifiable ; l'appropriation est frauduleuse. 3) Non : l'erreur sur la propriété exclut l'intention frauduleuse (mais il devra restituer). 4) Non : les meubles sont des choses abandonnées. 5) Oui : la soustraction frauduleuse d'énergie électrique est assimilée au vol (article 521).

</details>

### Exercice 3 — Recel ou complicité ?

Qualifiez : a) avant un cambriolage, Mehdi promet aux voleurs de cacher les objets dans son garage, ce qu'il fait ensuite ; b) Nora achète un téléviseur neuf à 500 DH dans la rue, à un inconnu, sans facture ; c) Ali, sans rien savoir, garde un sac pour un ami ; il apprend ensuite que le sac contient des objets volés et le garde encore un mois.

<details><summary>Voir le corrigé</summary>

a) Complicité du vol : l'aide a été promise avant l'infraction et l'a facilitée. b) Recel probable : la connaissance de l'origine frauduleuse se déduit du prix dérisoire et des conditions de l'achat. c) Recel à compter du moment où Ali a appris l'origine des objets et a continué à les détenir (infraction continue) ; avant, il n'avait pas d'intention.

</details>
`,
    qcm: [
      { q: "Le vol est défini par l'article :", choix: ["486", "505", "540", "571"], bonne: 1, explication: "Soustraction frauduleuse de la chose d'autrui." },
      { q: "Le vol simple est puni de :", choix: ["La réclusion de 10 à 20 ans", "L'emprisonnement de 1 à 5 ans et l'amende", "Une simple amende", "La réclusion perpétuelle"], bonne: 1, explication: "Article 505." },
      { q: "Il n'y a pas soustraction lorsque :", choix: ["La chose est enlevée la nuit", "La victime a remis volontairement la chose", "Le voleur est armé", "La chose est de faible valeur"], bonne: 1, explication: "On recherche alors l'escroquerie ou l'abus de confiance." },
      { q: "Une chose abandonnée :", choix: ["Peut être volée", "Ne peut pas être volée", "Appartient à l'État", "Est toujours perdue"], bonne: 1, explication: "Elle n'appartient plus à personne." },
      { q: "Le port d'une arme non utilisée lors d'un vol :", choix: ["Est sans effet", "Aggrave le vol", "Supprime l'infraction", "Transforme le vol en escroquerie"], bonne: 1, explication: "Article 507." },
      { q: "La soustraction d'énergie électrique est :", choix: ["Non punissable", "Assimilée au vol", "Un abus de confiance", "Une contravention de police"], bonne: 1, explication: "Article 521." },
      { q: "L'extorsion se distingue du vol par :", choix: ["L'absence de violence", "Une remise obtenue par la contrainte", "Le caractère immobilier de la chose", "L'absence de victime"], bonne: 1, explication: "Article 537." },
      { q: "Obtenir de l'argent sous la menace de révélations est :", choix: ["Une escroquerie", "Un chantage", "Un recel", "Un abus de confiance"], bonne: 1, explication: "Article 538." },
      { q: "Le recel est une infraction :", choix: ["Instantanée", "Continue", "Contraventionnelle", "Non punissable"], bonne: 1, explication: "Elle dure tant que dure la détention." },
      { q: "Celui qui promet avant le vol de cacher les objets volés est :", choix: ["Receleur seulement", "Complice du vol", "Victime", "Non punissable"], bonne: 1, explication: "L'aide promise avant facilite l'infraction." },
    ],
  },

  6: {
    titre: "Les atteintes aux biens par fraude : escroquerie, abus de confiance, faux et infractions informatiques",
    description: "Escroquerie (article 540), abus de confiance (article 547), chèque sans provision (loi 71-24), faux et usage de faux, infractions informatiques (loi 07-03).",
    resume: md`
## L'essentiel — Fraudes

- **Escroquerie** (article 540) : affirmations fallacieuses, dissimulation de faits vrais, exploitation de l'erreur, en principe corroborées (mise en scène, faux documents, fausse qualité) ; **remise** ; préjudice ; intention ; **1 à 5 ans** ; aggravée (appel au public, personne publique, dirigeant) ; tentative punie (article 546).
- **Abus de confiance** (article 547) : **remise régulière à titre précaire** (dépôt, mandat, travail), puis **détournement** ou dissipation de mauvaise foi ; **6 mois à 3 ans** ; aggravé pour salarié, officier public, mandataire de justice (articles 549 et 550).
- Distinction : vol (pas de remise) / escroquerie (remise obtenue par tromperie) / abus de confiance (remise régulière puis trahison).
- Textes spéciaux : détournement de deniers publics (article 241), abus de biens sociaux (loi 17-95, article 384).
- Exemples d'escroquerie : faux intermédiaire pour un emploi public, vente en ligne fictive, hameçonnage, placements pyramidaux.
- **Chèque** (Code de commerce, articles 316 et suivants) : sans provision, retrait de provision, opposition irrégulière, acceptation d'un chèque de garantie ; réforme par la loi **71-24** (2026) : priorité au paiement, extinction de l'action.
- **Faux** (article 351) : altération frauduleuse de la vérité dans un écrit probatoire ; écriture publique par fonctionnaire (crime, articles 352-353) ; par particulier (article 354) ; commerce et banque (357) ; écriture privée (358) ; documents administratifs (360 et suivants) ; **usage de faux** distinct.
- **Informatique** (loi **07-03**, articles 607-3 à 607-11) : accès ou maintien frauduleux, entrave, modification de données, falsification de documents informatisés, outils ; lois 09-08 et 05-20 ; convention de Budapest.
`,
    exercices: md`
### Exercice 2 — Vol, escroquerie ou abus de confiance ?

Qualifiez : 1) un garagiste à qui l'on a confié une voiture pour réparation la vend ; 2) un faux agent de la compagnie d'électricité se fait remettre 800 DH pour une « régularisation urgente » en présentant un faux badge ; 3) un client profite de l'inattention d'un vendeur pour prendre un parfum ; 4) un associé à qui ses partenaires ont confié 100 000 DH pour acheter du matériel les place sur son compte personnel et les dépense.

<details><summary>Voir le corrigé</summary>

1) Abus de confiance : remise régulière pour réparation, puis détournement. 2) Escroquerie : fausse qualité corroborée par un faux badge, remise d'argent. 3) Vol : soustraction sans remise. 4) Abus de confiance : fonds remis pour un emploi déterminé et détournés ; s'il s'agit d'un dirigeant de société anonyme utilisant les biens de la société, l'abus de biens sociaux (loi 17-95) peut être retenu.

</details>

### Exercice 3 — Le faux et son auteur

Classez par ordre de gravité et qualifiez : a) un adoul qui mentionne dans un acte de mariage la présence de témoins absents ; b) un particulier qui imite la signature de son voisin sur une reconnaissance de dette ; c) un commerçant qui fabrique de fausses factures pour obtenir un crédit bancaire ; d) un particulier qui falsifie un acte de naissance pour se rajeunir.

<details><summary>Voir le corrigé</summary>

a) Crime de faux en écriture authentique commis par un officier public dans l'exercice de ses fonctions (faux intellectuel), le plus grave. d) Crime de faux en écriture publique ou authentique commis par un particulier (article 354). c) Faux en écriture de commerce ou de banque (article 357), délit aggravé, et éventuellement escroquerie envers la banque. b) Faux en écriture privée (article 358), délit. L'utilisation de chacun de ces actes constitue en outre un usage de faux.

</details>
`,
    qcm: [
      { q: "L'escroquerie est définie par l'article :", choix: ["505", "540", "547", "571"], bonne: 1, explication: "Tromperie et remise." },
      { q: "Dans l'escroquerie, la remise est obtenue :", choix: ["Par la violence", "Par la tromperie", "Régulièrement à titre précaire", "Sans la volonté de la victime"], bonne: 1, explication: "Affirmations fallacieuses corroborées." },
      { q: "L'abus de confiance suppose :", choix: ["Une soustraction", "Une remise régulière à titre précaire suivie d'un détournement", "Une violence", "Un faux document"], bonne: 1, explication: "Article 547." },
      { q: "L'abus de confiance commis par un salarié au préjudice de son employeur est :", choix: ["Excusé", "Aggravé", "Non punissable", "Une escroquerie"], bonne: 1, explication: "Article 549." },
      { q: "Le régime pénal du chèque sans provision a été réformé par la loi :", choix: ["71-24", "15-95", "43-22", "17-95"], bonne: 0, explication: "En vigueur en 2026." },
      { q: "Le faux en écriture authentique commis par un fonctionnaire dans ses fonctions est :", choix: ["Une contravention", "Un délit", "Un crime", "Non punissable"], bonne: 2, explication: "Articles 352 et 353." },
      { q: "L'usage de faux est :", choix: ["Absorbé par le faux", "Une infraction distincte", "Non punissable", "Une circonstance aggravante du vol"], bonne: 1, explication: "Puni des mêmes peines que le faux." },
      { q: "Les atteintes aux systèmes de traitement automatisé des données ont été introduites par la loi :", choix: ["07-03", "09-08", "05-20", "53-05"], bonne: 0, explication: "Articles 607-3 à 607-11." },
      { q: "Utiliser le mot de passe d'autrui pour entrer dans un système informatique constitue :", choix: ["Un accès frauduleux", "Un vol simple", "Une escroquerie toujours", "Rien"], bonne: 0, explication: "Article 607-3." },
      { q: "La loi relative à la cybersécurité est la loi :", choix: ["05-20", "07-03", "31-13", "88-13"], bonne: 0, explication: "Adoptée en 2020." },
    ],
  },

  7: {
    titre: "Les atteintes à la chose publique : corruption, détournement, blanchiment et terrorisme",
    description: "Corruption passive et active, trafic d'influence, détournement de deniers publics, concussion, blanchiment (loi 43-05) et terrorisme (loi 03-03).",
    resume: md`
## L'essentiel — Probité et ordre public

- Constitution : articles 36, 155, 158, 167 ; **INPPLC** (loi 46-19) ; convention des Nations unies contre la corruption (2007).
- **Fonctionnaire public** au sens pénal (article 224) : toute personne investie d'une fonction ou d'un mandat au service public, y compris les élus.
- **Corruption passive** (article 248) : solliciter ou agréer un avantage pour accomplir ou s'abstenir d'un acte de la fonction, juste ou injuste ; 2 à 5 ans ; aggravations (article 249).
- **Corruption active** (article 251) : proposer ou céder ; infractions **autonomes**, consommées par la sollicitation ou la proposition ; protection des dénonciateurs (loi 37-10).
- **Trafic d'influence** (article 250) : monnayer une influence réelle ou supposée, sans pouvoir de décision propre.
- **Détournement de deniers publics** (article 241) : fonds détenus en raison des fonctions ; **crime** (5 à 20 ans) ; **délit** sous **100 000 DH** (article 242) ; texte spécial de l'abus de confiance.
- **Concussion** (article 243) : percevoir ce qui n'est pas dû en le présentant comme dû.
- Abus de fonction : atteintes arbitraires à la liberté (articles 225 et suivants), **prise illégale d'intérêts** (article 245), favoritisme ; enrichissement illicite en débat.
- **Blanchiment** (loi **43-05**, articles 574-1 et suivants) : convertir, transférer, dissimuler, détenir le produit d'une infraction ; personnes morales ; déclaration de soupçon à l'**ANRF** ; sortie de la liste grise du GAFI en 2023.
- **Terrorisme** (loi **03-03**, articles 218-1 et suivants) : infractions en relation avec une entreprise visant l'atteinte grave à l'ordre public par la terreur ; apologie, financement, ralliement à l'étranger (loi 86-14) ; procédure dérogatoire ; programme Moussalaha.
`,
    exercices: md`
### Exercice 2 — Corruption, trafic d'influence ou concussion ?

Qualifiez : 1) un agent de police demande 200 DH à un automobiliste pour ne pas dresser de procès-verbal ; 2) un agent d'une administration exige 100 DH de « frais de dossier » inexistants, qu'il présente comme prévus par la loi, et les garde ; 3) une personne promet, contre 50 000 DH, de faire réussir un candidat au concours de la magistrature grâce à ses relations ; 4) un entrepreneur offre un voyage au président d'une commission d'appel d'offres pour obtenir un marché.

<details><summary>Voir le corrigé</summary>

1) Corruption passive de l'agent (article 248) ; si l'automobiliste paie, corruption active. 2) Concussion (article 243) : somme présentée comme due. 3) Trafic d'influence (article 250) : influence supposée, sans pouvoir de décision. 4) Corruption active de l'entrepreneur (article 251), et corruption passive du président s'il accepte ; s'y ajoutent les règles des marchés publics.

</details>

### Exercice 3 — Les étapes du blanchiment

Un trafiquant de stupéfiants dépose de petites sommes en espèces sur plusieurs comptes, puis les transfère vers une société-écran à l'étranger, qui achète ensuite un hôtel à Marrakech. Identifiez les étapes classiques du blanchiment et la qualification.

<details><summary>Voir le corrigé</summary>

Placement : introduction des espèces dans le système financier par des dépôts fractionnés. Empilement (dispersion) : transferts successifs vers une société-écran à l'étranger pour brouiller la trace de l'origine. Intégration : réinvestissement dans une activité légale (achat de l'hôtel). Chaque opération réalisée en connaissance de l'origine illicite des fonds constitue un blanchiment (article 574-1, loi 43-05), aggravé par l'habitude et l'utilisation de structures organisées ; les banques devaient effectuer des déclarations de soupçon auprès de l'ANRF ; l'hôtel peut être confisqué.

</details>
`,
    qcm: [
      { q: "La corruption passive est réprimée par l'article :", choix: ["241", "248", "250", "251"], bonne: 1, explication: "Solliciter ou agréer un avantage." },
      { q: "La corruption passive est consommée :", choix: ["Seulement si l'acte est accompli", "Dès la sollicitation", "Seulement si l'acte est injuste", "Seulement en cas de paiement"], bonne: 1, explication: "Infraction autonome." },
      { q: "Le trafic d'influence suppose :", choix: ["Un pouvoir de décision propre", "L'abus d'une influence réelle ou supposée", "La violence", "Un faux document"], bonne: 1, explication: "Article 250." },
      { q: "Le détournement de deniers publics supérieur à 100 000 DH est :", choix: ["Une contravention", "Un délit", "Un crime", "Non punissable"], bonne: 2, explication: "Article 241 ; en dessous, article 242." },
      { q: "La concussion consiste à :", choix: ["Recevoir un don pour un acte de la fonction", "Percevoir ce qui n'est pas dû en le présentant comme dû", "Monnayer une influence", "Dissimuler des fonds"], bonne: 1, explication: "Article 243." },
      { q: "La notion pénale de fonctionnaire public est définie à l'article :", choix: ["224", "231-1", "540", "574-1"], bonne: 0, explication: "Conception large." },
      { q: "La loi relative à la lutte contre le blanchiment de capitaux est la loi :", choix: ["43-05", "03-03", "46-19", "37-10"], bonne: 0, explication: "Articles 574-1 et suivants." },
      { q: "Les déclarations de soupçon sont adressées à :", choix: ["Bank Al-Maghrib", "L'Autorité nationale du renseignement financier", "La Cour des comptes", "La DGI"], bonne: 1, explication: "ANRF." },
      { q: "La loi relative à la lutte contre le terrorisme est la loi :", choix: ["03-03", "43-05", "86-14", "27-14"], bonne: 0, explication: "Adoptée après les attentats du 16 mai 2003." },
      { q: "Le fait de rejoindre un groupe terroriste à l'étranger a été incriminé par la loi :", choix: ["86-14", "03-03", "103-13", "07-03"], bonne: 0, explication: "Article 218-1-1, 2015." },
    ],
  },
};

export default chapitres;
