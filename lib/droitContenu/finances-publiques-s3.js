// Finances publiques (Droit S3) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Les finances publiques : notion et sources",
    description: "Finances publiques marocaines : définition, conceptions classique et keynésienne, sources (Constitution, LOLF 130-13, CGI, loi 62-99) et acteurs.",
    resume: md`
## L'essentiel — Notion et sources

- **Finances publiques** : ressources, dépenses et gestion financière des personnes publiques (État, collectivités, établissements publics, organismes sociaux).
- Branches : droit budgétaire, droit fiscal, comptabilité publique, économie publique.
- Conception **classique** : État gendarme, neutralité, équilibre (J.-B. Say) ; conception **moderne** : interventionnisme, Keynes (1936), redistribution ; puis performance et soutenabilité.
- Constitution : article **39** (charges publiques), **71** (assiette, taux, recouvrement par la loi), **75** (loi de finances, décret d'ouverture des crédits si pas de vote au 31 décembre), **76** (loi de règlement), **77** (équilibre, irrecevabilité financière), **147-148** (Cour des comptes).
- **LOLF 130-13** (juin 2015, appliquée de 2016 à 2020) : programmation triennale, performance, sincérité, rôle du Parlement.
- Autres textes : décret 2-15-426, règlement général de comptabilité publique (1967), **CGI** (2007), loi 15-97 (recouvrement), loi **62-99** (juridictions financières), décret 2-22-431 (marchés), lois 47-06 et 07-20 (fiscalité locale).
- Acteurs : Conseil des ministres (orientations, article 49), chef du gouvernement, ministre des Finances, Parlement et commissions des finances, DGI, ADII, TGR, IGF, Cour des comptes.
- Recettes dominées par la TVA, l'IS et l'IR ; dépenses : salaires, investissement, compensation, dette.
`,
    exercices: md`
### Exercice 2 — Quelle source ?

Indiquez la source principale : 1) la date limite de dépôt du projet de loi de finances ; 2) le taux de la TVA ; 3) le principe selon lequel seule la loi crée l'impôt ; 4) la procédure de jugement des comptes des comptables publics ; 5) les règles de passation d'un marché de travaux d'un ministère.

<details><summary>Voir le corrigé</summary>

1) La LOLF 130-13. 2) Le Code général des impôts, modifié par les lois de finances. 3) La Constitution (articles 39 et 71). 4) La loi 62-99 formant code des juridictions financières. 5) Le décret 2-22-431 relatif aux marchés publics.

</details>

### Exercice 3 — Classique ou moderne ?

Classez les politiques suivantes selon la conception des finances publiques qu'elles illustrent : a) un plan de relance par de grands travaux d'infrastructure en période de récession ; b) une règle stricte d'équilibre budgétaire annuel ; c) un barème progressif de l'impôt sur le revenu ; d) une exonération fiscale pour les entreprises qui s'installent dans une zone d'accélération industrielle ; e) la réduction des dépenses publiques pour diminuer la dette.

<details><summary>Voir le corrigé</summary>

a) Moderne (keynésienne : relance par la dépense). b) Classique (équilibre). c) Moderne (redistribution). d) Moderne (interventionnisme fiscal, incitation). e) Classique ou néolibérale (maîtrise de la dépense et de la dette), aujourd'hui intégrée aux objectifs de soutenabilité.

</details>
`,
    qcm: [
      { q: "La loi organique relative à la loi de finances en vigueur est la loi :", choix: ["7-98", "130-13", "62-99", "15-97"], bonne: 1, explication: "Promulguée en 2015." },
      { q: "Selon l'article 71 de la Constitution, l'assiette et le taux des impôts relèvent :", choix: ["Du décret", "De la loi", "De l'arrêté ministériel", "De la coutume"], bonne: 1, explication: "Principe du consentement à l'impôt." },
      { q: "Si la loi de finances n'est pas votée au 31 décembre :", choix: ["Les services publics s'arrêtent", "Le gouvernement ouvre par décret les crédits nécessaires", "Le budget précédent est doublé", "Le Roi dissout le Parlement"], bonne: 1, explication: "Article 75 de la Constitution." },
      { q: "L'irrecevabilité financière des amendements est prévue à l'article :", choix: ["39", "71", "75", "77"], bonne: 3, explication: "Préservation de l'équilibre des finances." },
      { q: "Le Code général des impôts a été institué par la loi de finances pour :", choix: ["1998", "2007", "2015", "2023"], bonne: 1, explication: "Il est modifié chaque année." },
      { q: "Le code des juridictions financières est la loi :", choix: ["62-99", "130-13", "47-06", "41-90"], bonne: 0, explication: "Cour des comptes et cours régionales." },
      { q: "Les orientations générales du projet de loi de finances sont délibérées en :", choix: ["Conseil de gouvernement", "Conseil des ministres", "Commission des finances", "Conseil régional"], bonne: 1, explication: "Article 49 de la Constitution." },
      { q: "La conception keynésienne des finances publiques admet :", choix: ["Le déficit pour soutenir l'activité", "L'interdiction de tout impôt", "La suppression de l'État", "L'équilibre obligatoire chaque année"], bonne: 0, explication: "Instrument de politique économique." },
      { q: "La Cour des comptes est prévue aux articles :", choix: ["75 et 76", "147 et 148", "135 et 136", "161 et 162"], bonne: 1, explication: "Institution supérieure de contrôle." },
      { q: "La principale recette fiscale de l'État est en général :", choix: ["La taxe d'habitation", "La TVA", "Les droits de timbre", "La taxe professionnelle"], bonne: 1, explication: "Impôt indirect sur la consommation." },
    ],
  },

  2: {
    titre: "La loi de finances et les principes budgétaires",
    description: "Loi de finances au Maroc : catégories, budget général, SEGMA, comptes spéciaux du Trésor, annualité, unité, universalité, spécialité, sincérité.",
    resume: md`
## L'essentiel — Loi de finances et principes

- **Loi de finances** (article 1 de la LOLF) : prévoit, évalue, énonce et autorise les ressources et les charges de l'État pour l'année.
- Catégories (article 2) : loi de finances de l'**année**, lois **rectificatives**, loi de **règlement**.
- Structure : 1ʳᵉ partie (ressources, équilibre), 2ᵉ partie (crédits par ministère, programme, région).
- Composantes : **budget général**, **SEGMA**, **comptes spéciaux du Trésor** (affectation spéciale, opérations monétaires, prêts, avances).
- **Annualité** (article 3) : exceptions et aménagements (crédits d'engagement, reports, programmation triennale de l'article 5).
- **Unité** : document unique, aménagé par les SEGMA et les CST.
- **Universalité** : non-compensation et **non-affectation** (article 8) ; exceptions : CAS, fonds de concours, SEGMA.
- **Spécialité** : au niveau du **programme** ; virements, transferts, dépenses imprévues.
- **Équilibre** : soutenabilité ; **règle d'or** : l'emprunt finance l'investissement et le remboursement de la dette (article 20).
- Principes modernes : **sincérité** (article 10), **performance** (programmes, objectifs, indicateurs, projets et rapports de performance), transparence (rapports annexes), dimension régionale.
`,
    exercices: md`
### Exercice 2 — Quel principe ?

Indiquez le principe concerné : 1) l'État ne peut pas inscrire seulement le solde net entre les recettes et les dépenses d'un service ; 2) les autorisations de dépenses expirent le 31 décembre ; 3) toutes les recettes et les dépenses figurent dans la loi de finances ; 4) les crédits d'un programme ne peuvent servir à un autre objet ; 5) les prévisions de recettes doivent reposer sur des hypothèses réalistes.

<details><summary>Voir le corrigé</summary>

1) Universalité (non-compensation). 2) Annualité. 3) Unité. 4) Spécialité. 5) Sincérité (article 10 de la LOLF).

</details>

### Exercice 3 — La règle d'or

Un projet de loi de finances prévoit 380 milliards de dirhams de recettes ordinaires, 360 milliards de dépenses de fonctionnement et de dette (intérêts), 90 milliards de dépenses d'investissement et 30 milliards de remboursement du principal de la dette. Les emprunts prévus s'élèvent à 100 milliards. 1) Calculez le besoin de financement. 2) La règle d'or est-elle respectée ?

<details><summary>Voir le corrigé</summary>

1) Charges totales : 360 + 90 + 30 = 480 milliards ; recettes ordinaires : 380 milliards ; besoin de financement : 480 − 380 = 100 milliards, couvert par les emprunts. 2) La règle d'or exige que l'emprunt finance seulement l'investissement et le remboursement du principal : 90 + 30 = 120 milliards, supérieur aux 100 milliards empruntés. Les recettes ordinaires (380) couvrent intégralement les dépenses de fonctionnement et les intérêts (360), avec un excédent de 20 milliards consacré à l'investissement. La règle d'or est donc respectée.

</details>
`,
    qcm: [
      { q: "La loi qui constate les résultats définitifs de l'exécution du budget est :", choix: ["La loi de finances rectificative", "La loi de règlement", "La loi organique", "La loi de programmation"], bonne: 1, explication: "Article 76 de la Constitution." },
      { q: "Les SEGMA sont :", choix: ["Des établissements publics", "Des services de l'État gérés de manière autonome", "Des sociétés anonymes", "Des collectivités territoriales"], bonne: 1, explication: "Sans personnalité morale." },
      { q: "La règle de non-affectation relève du principe :", choix: ["D'annualité", "D'universalité", "De spécialité", "D'unité"], bonne: 1, explication: "Article 8 de la LOLF." },
      { q: "Les comptes d'affectation spéciale constituent une exception au principe :", choix: ["D'universalité", "De sincérité", "De publicité", "De séparation des pouvoirs"], bonne: 0, explication: "Recettes affectées à des dépenses." },
      { q: "Depuis la LOLF de 2015, la spécialité des crédits s'apprécie au niveau :", choix: ["De la ligne budgétaire", "Du programme", "Du ministère entier", "Du budget global"], bonne: 1, explication: "Plus de souplesse pour les gestionnaires." },
      { q: "La programmation budgétaire triennale est prévue à l'article :", choix: ["1 de la LOLF", "5 de la LOLF", "10 de la LOLF", "20 de la LOLF"], bonne: 1, explication: "Elle encadre l'annualité." },
      { q: "Le principe de sincérité est prévu à l'article :", choix: ["3 de la LOLF", "8 de la LOLF", "10 de la LOLF", "48 de la LOLF"], bonne: 2, explication: "Hypothèses réalistes." },
      { q: "Selon la règle d'or, l'emprunt peut financer :", choix: ["Les salaires", "Les dépenses d'investissement et le remboursement du principal de la dette", "Les subventions de fonctionnement", "Toutes les dépenses"], bonne: 1, explication: "Article 20 de la LOLF." },
      { q: "Le virement de crédits a lieu :", choix: ["Entre deux ministères", "Entre programmes d'un même ministère", "Entre deux années", "Entre l'État et une commune"], bonne: 1, explication: "Le transfert concerne deux ministères." },
      { q: "L'approche budgétaire axée sur la performance repose sur :", choix: ["Des moyens sans objectifs", "Des programmes, objectifs et indicateurs", "La suppression du Parlement", "Le budget de caisse seul"], bonne: 1, explication: "Projets et rapports de performance." },
    ],
  },

  3: {
    titre: "Les ressources publiques",
    description: "Ressources publiques au Maroc : notion d’impôt, classifications, IS, IR, TVA, droits d’enregistrement, recettes non fiscales, emprunt et dépenses fiscales.",
    resume: md`
## L'essentiel — Ressources publiques

- **Impôt** (Jèze) : prélèvement pécuniaire, obligatoire, par voie d'autorité, définitif, **sans contrepartie directe** ; créé par la loi (articles 39 et 71).
- Notions voisines : **taxe**, **redevance** (contrepartie proportionnelle), **cotisation sociale**, parafiscalité.
- Vocabulaire : assiette, fait générateur, liquidation, recouvrement, redevable légal, contribuable réel.
- Classifications : **direct / indirect**, revenu / consommation / capital, **proportionnel / progressif**, réel / personnel, État / local.
- **CGI** (2007) ; loi-cadre **69-19** (réforme fiscale, 2021).
- **IS** : bénéfices des sociétés ; convergence vers **20 %** (et 35 % pour les plus gros bénéfices) depuis 2023 ; cotisation minimale.
- **IR** : revenus des personnes physiques, **progressif**, retenue à la source sur les salaires ; barème révisé en 2025.
- **TVA** : impôt indirect sur la consommation, mécanisme de **déduction**, taux normal **20 %**, taux réduits et exonérations ; première recette fiscale.
- Droits d'enregistrement et de timbre ; douane et TIC (ADII) ; fiscalité locale (lois 47-06 et 07-20).
- Ressources non fiscales : domaine, dividendes des EEP, redevances, privatisations, financements innovants, dons.
- **Emprunt** : bons du Trésor (intérieur), institutions multilatérales et eurobonds (extérieur) ; soutenabilité de la dette ; **dépenses fiscales** (rapport annexé).
`,
    exercices: md`
### Exercice 2 — Impôt, taxe ou redevance ?

Qualifiez : 1) la somme payée au péage de l'autoroute Rabat-Casablanca ; 2) l'impôt sur le revenu retenu sur un salaire ; 3) la taxe de services communaux ; 4) la cotisation AMO prélevée sur le salaire ; 5) la TVA payée sur un téléphone.

<details><summary>Voir le corrigé</summary>

1) Redevance : contrepartie de l'utilisation d'un ouvrage. 2) Impôt direct et progressif. 3) Taxe locale liée aux services de la commune, sans proportion avec le service rendu. 4) Cotisation sociale, qui ouvre droit aux prestations de l'assurance maladie. 5) Impôt indirect et proportionnel sur la consommation.

</details>

### Exercice 3 — Impôt progressif

Un barème fictif d'impôt sur le revenu prévoit : 0 % jusqu'à 40 000 DH de revenu annuel ; 10 % de 40 001 à 60 000 DH ; 20 % de 60 001 à 80 000 DH ; 30 % au-delà. Calculez l'impôt dû pour un revenu annuel de 100 000 DH, puis le taux moyen d'imposition.

<details><summary>Voir le corrigé</summary>

Tranche 1 : 40 000 × 0 % = 0. Tranche 2 : 20 000 × 10 % = 2 000 DH. Tranche 3 : 20 000 × 20 % = 4 000 DH. Tranche 4 : 20 000 × 30 % = 6 000 DH. Impôt total : 12 000 DH. Taux moyen : 12 000 / 100 000 = 12 %, inférieur au taux marginal de 30 %. C'est le principe de la progressivité par tranches : chaque taux ne s'applique qu'à la fraction du revenu comprise dans sa tranche.

</details>
`,
    qcm: [
      { q: "L'impôt se caractérise notamment par :", choix: ["Une contrepartie directe", "L'absence de contrepartie directe", "Son caractère facultatif", "Son remboursement"], bonne: 1, explication: "Définition de Gaston Jèze." },
      { q: "Le péage d'autoroute est :", choix: ["Un impôt", "Une redevance", "Une cotisation sociale", "Un droit d'enregistrement"], bonne: 1, explication: "Contrepartie de l'utilisation d'un ouvrage." },
      { q: "La TVA est un impôt :", choix: ["Direct et progressif", "Indirect et proportionnel", "Direct et proportionnel", "Local"], bonne: 1, explication: "Supporté par le consommateur final." },
      { q: "Le taux normal de la TVA au Maroc est de :", choix: ["10 %", "14 %", "20 %", "25 %"], bonne: 2, explication: "Taux réduits pour certains produits." },
      { q: "L'impôt sur le revenu des salariés est :", choix: ["Payé une fois tous les cinq ans", "Retenu à la source par l'employeur", "Facultatif", "Proportionnel"], bonne: 1, explication: "Barème progressif." },
      { q: "La loi-cadre portant réforme fiscale est la loi :", choix: ["69-19", "130-13", "09-21", "47-06"], bonne: 0, explication: "Adoptée en 2021." },
      { q: "Le redevable légal de la TVA est :", choix: ["Le consommateur", "L'entreprise qui facture", "Le Parlement", "Bank Al-Maghrib"], bonne: 1, explication: "Le contribuable réel est le consommateur." },
      { q: "Les bons du Trésor sont :", choix: ["Des impôts", "Des titres d'emprunt de l'État", "Des subventions", "Des redevances"], bonne: 1, explication: "Émis par adjudication." },
      { q: "Une dépense fiscale est :", choix: ["Une dépense de l'administration fiscale", "Un manque à gagner résultant d'une mesure dérogatoire", "Un impôt nouveau", "Une amende"], bonne: 1, explication: "Exonérations, réductions, taux préférentiels." },
      { q: "Les dividendes versés à l'État par les entreprises publiques sont :", choix: ["Des recettes fiscales", "Des recettes non fiscales", "Des emprunts", "Des cotisations"], bonne: 1, explication: "Produits des participations de l'État." },
    ],
  },

  4: {
    titre: "Les dépenses publiques",
    description: "Dépenses publiques au Maroc : classifications, nomenclature par programmes (LOLF), masse salariale, compensation, investissement, dette et efficacité.",
    resume: md`
## L'essentiel — Dépenses publiques

- **Dépense publique** : fonctionnement, investissement, transferts, intervention, dette ; « loi de Wagner » (croissance de la part des dépenses publiques).
- Nature : **fonctionnement** (salaires, matériel), **investissement** (patrimoine, capacité productive), **dette** (intérêts en fonctionnement ; principal en trésorerie).
- Destination (fonctionnelle) ; caractère obligatoire ou facultatif ; transferts.
- Nomenclature LOLF : **chapitres**, **programmes** (objectifs, indicateurs, article 39), régions, **projets** (article 38) ; crédits de personnel **limitatifs** ; dépenses imprévues.
- **Masse salariale** : premier poste ; **compensation** (Caisse de 1941 : gaz butane, sucre, farine ; décompensation des carburants en 2013-2015 ; réforme progressive du butane depuis 2024 avec l'aide sociale directe).
- Investissement : budget général, CST, SEGMA, EEP, collectivités (effort global) ; question de l'efficacité.
- Outils : programmation triennale, performance, **budget sensible au genre** (depuis 2005), marchés publics (décret 2-22-431), PPP (loi 86-12), évaluation (article 70 de la Constitution).
- Effets économiques : **multiplicateur** keynésien / **effet d'éviction** ; qualité de la dépense.
`,
    exercices: md`
### Exercice 2 — Fonctionnement ou investissement ?

Classez : 1) le salaire d'un médecin d'un hôpital public ; 2) la construction d'un barrage ; 3) l'achat de médicaments pour l'année ; 4) l'achat d'un scanner pour un hôpital ; 5) les intérêts d'un emprunt ; 6) la subvention annuelle versée à une université pour son fonctionnement.

<details><summary>Voir le corrigé</summary>

1) Fonctionnement (personnel). 2) Investissement. 3) Fonctionnement (consommables). 4) Investissement (équipement durable). 5) Dette, classée en fonctionnement. 6) Fonctionnement (transfert à un établissement public).

</details>

### Exercice 3 — L'effet multiplicateur

Dans une économie, la propension marginale à consommer est de 0,8. L'État augmente ses dépenses d'investissement de 10 milliards de DH. Selon le modèle keynésien simple (sans impôts ni importations), de combien le revenu national augmente-t-il ? Quelles limites ce calcul présente-t-il ?

<details><summary>Voir le corrigé</summary>

Le multiplicateur est égal à 1 / (1 − 0,8) = 1 / 0,2 = 5. Le revenu augmente de 10 × 5 = 50 milliards de DH. Limites : le modèle ignore les impôts et les importations (une partie de la dépense profite à l'étranger, ce qui réduit fortement le multiplicateur dans une économie ouverte comme celle du Maroc), l'effet d'éviction lié au financement par l'emprunt, les capacités de production disponibles et les délais de réalisation.

</details>
`,
    qcm: [
      { q: "La construction d'un hôpital est une dépense :", choix: ["De fonctionnement", "D'investissement", "De transfert", "De dette"], bonne: 1, explication: "Elle augmente le patrimoine public." },
      { q: "Les intérêts de la dette sont classés en :", choix: ["Dépenses d'investissement", "Dépenses de fonctionnement", "Recettes", "Opérations de trésorerie"], bonne: 1, explication: "Le principal relève de la trésorerie." },
      { q: "Selon la LOLF, les crédits sont présentés par :", choix: ["Lignes budgétaires sans objectifs", "Chapitres, programmes, régions et projets", "Villes uniquement", "Fonctionnaires"], bonne: 1, explication: "Articles 38 et 39." },
      { q: "Un programme budgétaire est associé à :", choix: ["Des objectifs et des indicateurs", "Une simple enveloppe sans suivi", "Un seul fonctionnaire", "Une loi organique"], bonne: 0, explication: "Article 39 de la LOLF." },
      { q: "La Caisse de compensation subventionne notamment :", choix: ["L'essence", "Le gaz butane, le sucre et la farine", "L'électricité industrielle", "Les voitures"], bonne: 1, explication: "Les carburants ont été décompensés." },
      { q: "La décompensation des carburants a eu lieu :", choix: ["En 1980", "Entre 2013 et 2015", "En 2022", "Jamais"], bonne: 1, explication: "Réforme de la compensation." },
      { q: "Le budget sensible au genre est annexé au projet de loi de finances depuis :", choix: ["1998", "2005", "2015", "2021"], bonne: 1, explication: "Le Maroc est un pionnier." },
      { q: "Les partenariats public-privé sont régis par la loi :", choix: ["86-12", "54-05", "130-13", "69-00"], bonne: 0, explication: "Modifiée en 2020." },
      { q: "L'effet d'éviction signifie que :", choix: ["La dépense publique crée toujours de la croissance", "L'emprunt public peut réduire l'investissement privé", "L'État évite de dépenser", "Les impôts baissent"], bonne: 1, explication: "Par la hausse des taux d'intérêt." },
      { q: "La « loi de Wagner » affirme que :", choix: ["La dépense publique diminue avec le développement", "La part des dépenses publiques tend à augmenter avec le développement", "L'impôt doit être unique", "Le budget doit être équilibré"], bonne: 1, explication: "Fin du XIXᵉ siècle." },
    ],
  },

  5: {
    titre: "La procédure budgétaire : préparation et vote de la loi de finances",
    description: "Procédure budgétaire au Maroc : lettre de cadrage, Conseil des ministres, dépôt le 20 octobre, vote par les deux Chambres, article 77 et Cour constitutionnelle.",
    resume: md`
## L'essentiel — Procédure budgétaire

- Le gouvernement **prépare**, le Parlement **examine et vote** ; prédominance de l'exécutif, rôle du Parlement renforcé par la LOLF.
- Préparation : hypothèses et programmation triennale, **lettre de cadrage** du chef du gouvernement, propositions des ministères, conférences budgétaires, arbitrages.
- Avant le **31 juillet** : présentation du cadre général aux commissions des finances (article 47 de la LOLF).
- **Orientations générales** en **Conseil des ministres** (article 49) ; projet adopté en **Conseil de gouvernement** (article 92).
- **Dépôt** à la Chambre des représentants au plus tard le **20 octobre** (article 48 de la LOLF), avec de nombreux rapports annexes.
- Examen : commission des finances, commissions permanentes, séance plénière ; **première partie votée avant la seconde** (article 50 de la LOLF) ; vote par chapitre et programme ; dernier mot à la Chambre des représentants.
- Limites : **irrecevabilité financière** (article 77), **vote bloqué** (article 83), délais courts, crédits ouverts par **décret** si pas de vote au 31 décembre (article 75).
- **Cour constitutionnelle** (article 132) : saisine par le Roi, le chef du gouvernement, les présidents des Chambres, un cinquième des députés ou 40 conseillers ; cavaliers budgétaires.
- Promulgation (article 50 de la Constitution), publication au Bulletin officiel, entrée en vigueur le 1er janvier.
`,
    exercices: md`
### Exercice 2 — Remettre dans l'ordre

Classez dans l'ordre chronologique : a) vote par la Chambre des conseillers ; b) délibération des orientations en Conseil des ministres ; c) lettre de cadrage du chef du gouvernement ; d) dépôt à la Chambre des représentants ; e) présentation du cadre général aux commissions des finances ; f) promulgation ; g) adoption du projet en Conseil de gouvernement ; h) vote par la Chambre des représentants.

<details><summary>Voir le corrigé</summary>

c) lettre de cadrage ; e) présentation du cadre général (avant le 31 juillet) ; b) orientations en Conseil des ministres ; g) adoption en Conseil de gouvernement ; d) dépôt (au plus tard le 20 octobre) ; h) vote par la Chambre des représentants ; a) vote par la Chambre des conseillers ; f) promulgation.

</details>

### Exercice 3 — Dissertation : plan détaillé

Proposez un plan pour le sujet : « Le Parlement marocain et la loi de finances : un pouvoir réel ? »

<details><summary>Voir le corrigé</summary>

*Introduction* : consentement à l'impôt, articles 75 à 77 de la Constitution, LOLF 130-13 ; problématique : le Parlement décide-t-il vraiment du budget ?
**I. Un pouvoir financier consacré et renforcé** — A. Le vote de la loi de finances et le consentement à l'impôt ; la priorité de la Chambre des représentants. B. Les apports de la LOLF : information anticipée (31 juillet), documents annexes, vote par programme, performance, loi de règlement.
**II. Un pouvoir encadré** — A. Les contraintes juridiques : irrecevabilité de l'article 77, vote bloqué, délais, ouverture des crédits par décret. B. Les contraintes politiques et techniques : fait majoritaire, faiblesse des moyens d'expertise, prédominance du ministère des Finances.
*Conclusion* : un pouvoir de contrôle et d'influence plus qu'un pouvoir de décision ; le contrôle de l'exécution et l'évaluation des politiques publiques sont les leviers d'avenir.

</details>
`,
    qcm: [
      { q: "Le projet de loi de finances est déposé en premier :", choix: ["À la Chambre des conseillers", "À la Chambre des représentants", "À la Cour constitutionnelle", "Au Conseil économique, social et environnemental"], bonne: 1, explication: "Article 75 de la Constitution." },
      { q: "La date limite de dépôt du projet de loi de finances est le :", choix: ["31 juillet", "20 octobre", "30 novembre", "31 décembre"], bonne: 1, explication: "Article 48 de la LOLF." },
      { q: "Les orientations générales du projet de loi de finances sont délibérées en :", choix: ["Conseil de gouvernement", "Conseil des ministres", "Commission des finances", "Cour des comptes"], bonne: 1, explication: "Article 49 de la Constitution." },
      { q: "Avant le 31 juillet, le ministre des Finances présente aux commissions des finances :", choix: ["La loi de règlement", "Le cadre général d'élaboration du projet", "Le budget des communes", "Les comptes de la CNSS"], bonne: 1, explication: "Article 47 de la LOLF." },
      { q: "La seconde partie de la loi de finances ne peut être discutée avant :", choix: ["Le vote de la première partie", "La promulgation", "L'avis de la Cour des comptes", "Le 1er janvier"], bonne: 0, explication: "Article 50 de la LOLF." },
      { q: "Le vote bloqué est prévu à l'article :", choix: ["77 de la Constitution", "83 de la Constitution", "92 de la Constitution", "132 de la Constitution"], bonne: 1, explication: "Un seul vote sur tout ou partie du texte." },
      { q: "Une disposition de la loi de finances étrangère aux ressources et charges de l'État est :", choix: ["Un cavalier budgétaire", "Une dépense fiscale", "Un compte spécial", "Une loi de règlement"], bonne: 0, explication: "Elle peut être censurée." },
      { q: "Peuvent saisir la Cour constitutionnelle de la loi de finances :", choix: ["Dix députés", "Un cinquième des membres de la Chambre des représentants", "Le wali de Rabat", "Le gouverneur de Bank Al-Maghrib"], bonne: 1, explication: "Ou 40 membres de la Chambre des conseillers (article 132)." },
      { q: "En cas de désaccord persistant entre les deux Chambres, le dernier mot revient à :", choix: ["La Chambre des conseillers", "La Chambre des représentants", "Le Conseil des ministres", "La Cour des comptes"], bonne: 1, explication: "Chambre élue au suffrage universel direct." },
      { q: "La loi de finances entre en vigueur :", choix: ["Le 20 octobre", "Le 1er janvier", "Le 31 juillet", "Le jour du vote à la Chambre des représentants"], bonne: 1, explication: "Après promulgation et publication." },
    ],
  },

  6: {
    titre: "L'exécution du budget",
    description: "Exécution du budget au Maroc : ordonnateurs et comptables, engagement, liquidation, ordonnancement, paiement, recouvrement (loi 15-97), TGR et loi 61-99.",
    resume: md`
## L'essentiel — Exécution du budget

- **Séparation ordonnateur / comptable** (règlement général de comptabilité publique de 1967) : fonctions incompatibles.
- **Ordonnateur** : prescrit recettes et dépenses (ministres, sous-ordonnateurs, présidents des collectivités) ; **comptable** : encaisse, paie, conserve les fonds (TGR).
- Dépenses : **engagement** (dans la limite des crédits), **liquidation** (service fait, montant), **ordonnancement** (ordre de payer), **paiement** (par le comptable).
- Règle du **service fait** ; contrôle du comptable sur la **régularité**, pas sur l'opportunité ; suspension ; réquisition dans les cas prévus.
- Réforme de **2006** : contrôle des engagements intégré à la **TGR** ; contrôle modulé de la dépense ; gestion intégrée de la dépense (GID).
- Recettes : constatation, liquidation, émission, **recouvrement** (spontané ou forcé).
- **Loi 15-97** (recouvrement) : avis sans frais, commandement, saisie, vente ; privilège ; prescription de 4 ans.
- **Loi 61-99** : responsabilité des ordonnateurs, contrôleurs et comptables ; comptable **personnellement et pécuniairement** responsable (débet).
- Comptabilités : budgétaire, **générale en droits constatés** (LOLF, certification par la Cour des comptes), analytique.
- **Marchés publics** : décret **2-22-431** (2023) : liberté d'accès, égalité, transparence, dématérialisation, PME, préférence nationale.
`,
    exercices: md`
### Exercice 2 — Quelle phase ?

Identifiez la phase : 1) la signature d'un contrat de nettoyage des bureaux ; 2) la vérification de la facture et du procès-verbal de réception ; 3) l'émission d'un ordre de paiement ; 4) le virement au fournisseur par le trésorier ; 5) l'émission du rôle de la taxe sur les terrains urbains non bâtis ; 6) la saisie du compte bancaire d'un contribuable défaillant.

<details><summary>Voir le corrigé</summary>

1) Engagement de la dépense. 2) Liquidation. 3) Ordonnancement. 4) Paiement. 5) Émission (ordonnancement) de la recette. 6) Recouvrement forcé (loi 15-97).

</details>

### Exercice 3 — Contrôle de régularité ou d'opportunité ?

Le trésorier refuse de payer : a) une facture sans attestation de service fait ; b) l'achat de mobilier de bureau qu'il juge trop luxueux ; c) un mandat signé par un agent qui n'est pas ordonnateur ; d) une dépense imputée sur un programme qui n'y correspond pas. Dans quels cas son refus est-il fondé ?

<details><summary>Voir le corrigé</summary>

a) Fondé : absence de service fait (validité de la créance). b) Non fondé : le comptable ne contrôle pas l'opportunité de la dépense ; il pourrait seulement signaler la situation. c) Fondé : défaut de qualité de l'ordonnateur. d) Fondé : inexacte imputation budgétaire (spécialité des crédits).

</details>
`,
    qcm: [
      { q: "L'agent qui prescrit l'exécution des dépenses est :", choix: ["Le comptable", "L'ordonnateur", "Le contrôleur fiscal", "Le juge"], bonne: 1, explication: "Ministre ou sous-ordonnateur." },
      { q: "La séparation des ordonnateurs et des comptables vise surtout à :", choix: ["Accélérer les paiements", "Prévenir les erreurs et les détournements", "Supprimer les contrôles", "Réduire les impôts"], bonne: 1, explication: "Chacun contrôle l'autre." },
      { q: "La phase qui crée l'obligation de l'organisme public est :", choix: ["L'engagement", "La liquidation", "L'ordonnancement", "Le paiement"], bonne: 0, explication: "Signature du marché ou du bon de commande." },
      { q: "La liquidation consiste à :", choix: ["Payer le créancier", "Vérifier la réalité de la dette et en fixer le montant", "Créer un impôt", "Voter le budget"], bonne: 1, explication: "Au vu du service fait." },
      { q: "Le paiement est effectué par :", choix: ["L'ordonnateur", "Le comptable public", "Le Parlement", "Le fournisseur"], bonne: 1, explication: "Après contrôle de régularité." },
      { q: "Le contrôle des engagements de dépenses a été intégré à la TGR en :", choix: ["1967", "1998", "2006", "2015"], bonne: 2, explication: "Contrôle unique de la dépense." },
      { q: "Le code de recouvrement des créances publiques est la loi :", choix: ["15-97", "61-99", "62-99", "130-13"], bonne: 0, explication: "Adoptée en 2000." },
      { q: "La loi relative à la responsabilité des ordonnateurs, contrôleurs et comptables est la loi :", choix: ["61-99", "15-97", "69-00", "86-12"], bonne: 0, explication: "Adoptée en 2002." },
      { q: "Le comptable public est responsable :", choix: ["Seulement disciplinairement", "Personnellement et pécuniairement", "Jamais", "Seulement si l'ordonnateur l'accepte"], bonne: 1, explication: "Mise en débet possible." },
      { q: "Les marchés publics sont régis par le décret :", choix: ["2-22-431", "2-15-426", "2-17-618", "2-04-469"], bonne: 0, explication: "Du 8 mars 2023." },
    ],
  },

  7: {
    titre: "Le contrôle des finances publiques",
    description: "Contrôle des finances publiques au Maroc : contrôles administratifs (TGR, IGF, IGAT), contrôle parlementaire, loi de règlement et Cour des comptes.",
    resume: md`
## L'essentiel — Contrôle des finances publiques

- Objectifs : respect de l'autorisation, régularité, performance ; reddition des comptes (articles 1 et 154 à 160 de la Constitution).
- Classifications : **a priori / a posteriori** ; **régularité / performance** ; **administratif / parlementaire / juridictionnel**.
- Contrôles administratifs : comptables et **TGR**, **IGF**, inspections ministérielles, **IGAT**, contrôle financier des EEP (loi 69-00), audit interne.
- Contrôle parlementaire : questions (article 100), commissions d'enquête (article 67), auditions (article 102), évaluation des politiques publiques (articles 70 et 101), rapport annuel de la Cour des comptes (article 148).
- **Loi de règlement** (article 76 ; articles 65-66 de la LOLF) : résultats définitifs, rapport de la Cour des comptes, déclaration générale de conformité.
- **Cour des comptes** (article 147) : institution supérieure de contrôle, indépendante ; loi **62-99** ; procureur général du Roi ; **cours régionales des comptes** pour les collectivités (article 149).
- Attributions juridictionnelles : **jugement des comptes** (débet ou décharge du comptable), **discipline budgétaire et financière** (amendes) — détaillées au S4.
- Attributions non juridictionnelles : contrôle de la gestion, emploi des fonds publics, assistance au Parlement et au gouvernement, certification des comptes de l'État, **déclarations de patrimoine** (article 158), comptes des partis.
- Faits pénaux transmis au ministère public.
`,
    exercices: md`
### Exercice 2 — Quel organe ?

Indiquez l'organe compétent : 1) contrôler les comptes d'une commune ; 2) auditer un projet financé par la Banque mondiale dans un ministère ; 3) juger les comptes du trésorier ministériel de l'Éducation ; 4) interroger le ministre des Finances sur le dépassement des dépenses de compensation ; 5) contrôler la gestion d'un établissement public national.

<details><summary>Voir le corrigé</summary>

1) La cour régionale des comptes (et l'IGAT pour l'inspection administrative). 2) L'Inspection générale des finances. 3) La Cour des comptes (jugement des comptes). 4) Le Parlement (questions, commission des finances). 5) La Cour des comptes (contrôle de la gestion), sans préjudice du contrôle financier de l'État (loi 69-00).

</details>

### Exercice 3 — Dissertation : plan détaillé

Proposez un plan pour le sujet : « La Cour des comptes, gardienne des finances publiques ? »

<details><summary>Voir le corrigé</summary>

*Introduction* : création en 1979, constitutionnalisation, article 147 de 2011, loi 62-99 ; problématique : la Cour protège-t-elle efficacement les deniers publics ?
**I. Une institution aux missions étendues** — A. Une juridiction : jugement des comptes et discipline budgétaire et financière, sanctions personnelles des comptables et ordonnateurs. B. Un organe d'assistance et d'évaluation : contrôle de la gestion, rapports publics, assistance au Parlement, certification des comptes, déclarations de patrimoine, comptes des partis.
**II. Une efficacité dépendante de son environnement** — A. Les limites : moyens humains face au nombre d'organismes, suites inégales données aux recommandations, lenteur des poursuites pénales. B. Les leviers de renforcement : publicité des rapports, coopération avec le Parlement et l'Instance nationale de la probité, culture de la performance issue de la LOLF.
*Conclusion* : une gardienne essentielle, dont l'action suppose l'appui du Parlement, du gouvernement et de l'opinion publique.

</details>
`,
    qcm: [
      { q: "Le contrôle exercé par le comptable avant paiement est un contrôle :", choix: ["A posteriori", "A priori", "Parlementaire", "Juridictionnel"], bonne: 1, explication: "Avant l'opération." },
      { q: "L'Inspection générale des finances est rattachée :", choix: ["Au Parlement", "Au ministère des Finances", "À la Cour des comptes", "Au ministère de l'Intérieur"], bonne: 1, explication: "Contrôle administratif." },
      { q: "La loi de règlement est prévue à l'article :", choix: ["75 de la Constitution", "76 de la Constitution", "147 de la Constitution", "158 de la Constitution"], bonne: 1, explication: "Elle constate les résultats définitifs." },
      { q: "La Cour des comptes est définie comme l'institution supérieure de contrôle des finances publiques par l'article :", choix: ["70", "100", "147", "149"], bonne: 2, explication: "Constitution de 2011." },
      { q: "Le code des juridictions financières est la loi :", choix: ["61-99", "62-99", "15-97", "130-13"], bonne: 1, explication: "Adoptée en 2002." },
      { q: "Les comptes des collectivités territoriales relèvent :", choix: ["De la Cour de cassation", "Des cours régionales des comptes", "Du tribunal de commerce", "Du Conseil de la concurrence"], bonne: 1, explication: "Article 149 de la Constitution." },
      { q: "Le débet est prononcé contre :", choix: ["Un comptable public", "Un parlementaire", "Un contribuable", "Un juge"], bonne: 0, explication: "Remboursement sur ses deniers personnels." },
      { q: "La discipline budgétaire et financière permet de sanctionner par des amendes :", choix: ["Les seuls contribuables", "Les ordonnateurs, contrôleurs et comptables", "Les partis politiques seulement", "Les fournisseurs"], bonne: 1, explication: "Infractions aux règles d'exécution." },
      { q: "Le contrôle des déclarations de patrimoine est confié à la Cour des comptes par l'article :", choix: ["148", "154", "158", "167"], bonne: 2, explication: "Constitution de 2011." },
      { q: "Lorsque la Cour des comptes découvre une infraction pénale :", choix: ["Elle la juge elle-même", "Elle transmet le dossier au ministère public", "Elle l'ignore", "Elle saisit le Parlement uniquement"], bonne: 1, explication: "Par le procureur général près la Cour." },
    ],
  },
};

export default chapitres;
