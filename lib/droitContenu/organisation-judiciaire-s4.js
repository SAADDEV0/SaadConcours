// Organisation judiciaire (Droit S4) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Les sources et les principes fondamentaux de l'organisation judiciaire",
    description: "Organisation judiciaire marocaine : sources (titre VII, loi 38-15), histoire, indépendance, égalité, gratuité, publicité, double degré et procès équitable.",
    resume: md`
## L'essentiel — Sources et principes

- **Organisation judiciaire** : structure, composition, compétence des juridictions, statut des magistrats et des auxiliaires ; ≠ procédure.
- Sources : Constitution, **titre VII** (articles 107 à 128) ; lois organiques **100-13** (CSPJ) et **106-13** (statut des magistrats) ; loi **38-15** (2022) ; loi **33-17** (président du ministère public) ; lois 41-90, 53-95, 80-03, 42-10 ; codes de procédure ; lois des professions.
- Histoire : cadis et capitulations ; protectorat (juridictions françaises, chérifiennes, coutumières) ; Cour suprême (1957) ; **unification de 1965** ; réforme de 1974 ; tribunaux administratifs (1993) et de commerce (1997) ; Charte de 2013 ; CSPJ (2017).
- **Indépendance** (article 107, Roi garant) ; interdiction des interventions, saisine du CSPJ par le juge (article 109) ; inamovibilité (article 108) ; le juge applique la loi (article 110) ; impartialité, récusation.
- Égalité ; **accès à la justice** (article 118) ; **gratuité** pour les plus démunis (article 121) ≠ absence de frais.
- **Publicité** des audiences (article 123), jugements au nom du Roi (article 124), **motivation** (article 125).
- **Double degré** de juridiction ; cassation = contrôle du droit ; collégialité / juge unique.
- **Procès équitable** et **délai raisonnable** (article 120), présomption d'innocence (article 23), exécution des jugements (article 126), réparation de l'erreur judiciaire (article 122).
`,
    exercices: md`
### Exercice 2 — Quel principe ?

Indiquez le principe constitutionnel concerné : 1) un ministre demande à un juge de retarder un jugement ; 2) un justiciable démuni ne peut pas payer un avocat ; 3) un jugement ne contient aucune explication de la décision ; 4) une procédure civile dure neuf ans sans raison particulière ; 5) un tribunal tient toutes ses audiences à huis clos.

<details><summary>Voir le corrigé</summary>

1) Indépendance du pouvoir judiciaire, interdiction des interventions (articles 107 et 109). 2) Accès à la justice et gratuité pour les plus démunis, assistance judiciaire (articles 118 et 121). 3) Motivation des jugements (article 125). 4) Délai raisonnable (article 120). 5) Publicité des audiences, sauf exceptions prévues par la loi (article 123).

</details>

### Exercice 3 — Dissertation : plan détaillé

Proposez un plan pour le sujet : « L'indépendance du pouvoir judiciaire dans la Constitution de 2011 ».

<details><summary>Voir le corrigé</summary>

*Introduction* : de l'« autorité » judiciaire au « pouvoir » judiciaire ; article 107 ; problématique : quelles garanties et quelles limites ?
**I. Une indépendance consacrée** — A. L'indépendance organique : le CSPJ (article 113), l'inamovibilité (article 108), le statut des magistrats par loi organique, l'indépendance du ministère public depuis 2017. B. L'indépendance fonctionnelle : interdiction des interventions, saisine du CSPJ par le juge menacé (article 109), soumission du juge à la seule loi (article 110).
**II. Une indépendance encadrée** — A. Les contrepoids : responsabilité disciplinaire, inspection, devoir de réserve, déontologie, droit des justiciables à un procès équitable (article 120). B. Les défis : moyens matériels, délais, perception de l'opinion, relations entre le CSPJ, la Présidence du ministère public et le ministère de la Justice (gestion administrative et financière).
*Conclusion* : une indépendance juridiquement solide, dont l'effectivité dépend de la culture judiciaire et des moyens.

</details>
`,
    qcm: [
      { q: "Le titre de la Constitution consacré au pouvoir judiciaire est le titre :", choix: ["V", "VII", "IX", "XII"], bonne: 1, explication: "Articles 107 à 128." },
      { q: "La loi relative à l'organisation judiciaire en vigueur est la loi :", choix: ["38-15", "41-90", "53-95", "22-01"], bonne: 0, explication: "Adoptée en 2022." },
      { q: "La loi d'unification, de marocanisation et d'arabisation de la justice date de :", choix: ["1957", "1965", "1974", "1993"], bonne: 1, explication: "26 janvier 1965." },
      { q: "Le garant de l'indépendance du pouvoir judiciaire est :", choix: ["Le chef du gouvernement", "Le Roi", "Le ministre de la Justice", "Le Parlement"], bonne: 1, explication: "Article 107." },
      { q: "Le juge dont l'indépendance est menacée doit saisir :", choix: ["Le ministre de la Justice", "Le Conseil supérieur du pouvoir judiciaire", "La Cour constitutionnelle", "Le Médiateur"], bonne: 1, explication: "Article 109." },
      { q: "La gratuité de la justice signifie que :", choix: ["Il n'existe aucun frais", "Les juges ne sont pas payés par les parties et l'aide est prévue pour les démunis", "Les avocats sont gratuits", "Les jugements ne sont pas motivés"], bonne: 1, explication: "Article 121." },
      { q: "Les jugements sont rendus :", choix: ["Au nom du peuple", "Au nom du Roi et en vertu de la loi", "Au nom du gouvernement", "Au nom du juge"], bonne: 1, explication: "Article 124." },
      { q: "La Cour de cassation contrôle :", choix: ["Les faits et le droit", "Le droit seulement", "Les faits seulement", "L'opportunité des lois"], bonne: 1, explication: "Ce n'est pas un troisième degré." },
      { q: "Le droit à un jugement dans un délai raisonnable est consacré par l'article :", choix: ["23", "118", "120", "126"], bonne: 2, explication: "Procès équitable et droits de la défense." },
      { q: "La réparation des dommages causés par une erreur judiciaire incombe à :", choix: ["Le juge personnellement", "L'État", "La partie gagnante", "L'avocat"], bonne: 1, explication: "Article 122." },
    ],
  },

  2: {
    titre: "Le Conseil supérieur du pouvoir judiciaire et le statut des magistrats",
    description: "CSPJ (articles 113 à 116, loi organique 100-13) et statut des magistrats (loi organique 106-13) : recrutement, droits, devoirs, discipline et recours.",
    resume: md`
## L'essentiel — CSPJ et magistrats

- Ancien Conseil supérieur de la magistrature (ministre de la Justice vice-président) → **CSPJ** (Constitution de 2011, loi organique **100-13**, installé en **avril 2017**), autonomie administrative et financière (article 116).
- Composition (article 115) : **présidé par le Roi** ; premier président de la Cour de cassation (**président délégué**), procureur général du Roi, président de la première chambre, 4 élus des cours d'appel, 6 élus du premier degré (représentation des femmes), Médiateur, président du CNDH, 5 personnalités nommées (dont une proposée par le Conseil supérieur des oulémas).
- Attributions (article 113) : nomination, avancement, retraite, discipline ; rapports, avis, code de déontologie.
- Recours pour excès de pouvoir contre ses décisions individuelles devant la chambre administrative de la Cour de cassation (article 114).
- Recrutement : concours d'**attachés de justice**, deux ans à l'**Institut supérieur de la magistrature** ; nomination par **dahir** (article 57) ; recrutement direct limité.
- Droits : **inamovibilité** du siège (article 108), liberté d'expression avec **devoir de réserve** et associations professionnelles (article 111) ; partis et syndicats **interdits**.
- Devoirs (loi organique **106-13**) : indépendance, impartialité, application de la loi (article 110), célérité, réserve, secret, probité, déclaration de patrimoine (article 158), résidence ; parquet : instructions écrites légales.
- Discipline devant le CSPJ : avertissement à révocation ; suspension ; Inspection générale des affaires judiciaires ; prise à partie ; erreur judiciaire (article 122).
- Ministère de la Justice : gestion administrative et financière, greffe, numérique.
`,
    exercices: md`
### Exercice 2 — Qui décide ?

Indiquez l'autorité compétente : 1) la promotion d'un juge au grade supérieur ; 2) la construction d'un nouveau tribunal ; 3) la sanction disciplinaire d'un juge du siège ; 4) la direction de l'action publique dans une affaire de corruption ; 5) la nomination d'un attaché de justice comme magistrat.

<details><summary>Voir le corrigé</summary>

1) Le CSPJ (article 113). 2) Le ministère de la Justice (gestion administrative et financière des juridictions). 3) Le CSPJ, après une procédure contradictoire. 4) Le parquet, sous l'autorité du président du ministère public (procureur général du Roi près la Cour de cassation, loi 33-17). 5) Le Roi, par dahir, sur proposition du CSPJ (article 57).

</details>

### Exercice 3 — Faute disciplinaire ou non ?

Le comportement constitue-t-il une faute disciplinaire ? a) Un juge publie un article scientifique sur la jurisprudence de la Cour de cassation ; b) un juge ne rédige pas ses jugements pendant plusieurs mois sans raison ; c) un juge adhère à un parti politique ; d) un procureur refuse d'exécuter une instruction écrite et légale de son supérieur ; e) un juge accepte un cadeau de valeur d'un avocat.

<details><summary>Voir le corrigé</summary>

a) Non : liberté d'expression compatible avec le devoir de réserve. b) Oui : retard injustifié et répété, manquement au devoir de célérité, pouvant aller jusqu'au déni de justice. c) Oui : interdiction de l'article 111, alinéa 2. d) Oui en principe : le magistrat du parquet doit se conformer aux instructions écrites légales (article 110, alinéa 2), sous réserve de la liberté de parole à l'audience. e) Oui : atteinte à la probité et à l'impartialité, pouvant constituer une corruption.

</details>
`,
    qcm: [
      { q: "Le CSPJ est présidé par :", choix: ["Le ministre de la Justice", "Le Roi", "Le chef du gouvernement", "Le président de la Cour constitutionnelle"], bonne: 1, explication: "Article 115." },
      { q: "Le président délégué du CSPJ est :", choix: ["Le procureur général du Roi près la Cour de cassation", "Le premier président de la Cour de cassation", "Le Médiateur", "Le ministre de la Justice"], bonne: 1, explication: "Article 115." },
      { q: "La loi organique relative au CSPJ est la loi :", choix: ["100-13", "106-13", "38-15", "33-17"], bonne: 0, explication: "Installé en 2017." },
      { q: "Les magistrats des juridictions de premier degré élisent au CSPJ :", choix: ["Deux représentants", "Quatre représentants", "Six représentants", "Dix représentants"], bonne: 2, explication: "Quatre pour les cours d'appel." },
      { q: "Les décisions individuelles du CSPJ peuvent faire l'objet :", choix: ["D'aucun recours", "D'un recours pour excès de pouvoir", "D'un appel devant le Parlement", "D'un référendum"], bonne: 1, explication: "Article 114." },
      { q: "Les futurs magistrats sont formés à :", choix: ["L'Institut royal de l'administration territoriale", "L'Institut supérieur de la magistrature", "L'ENCG", "L'Académie diplomatique"], bonne: 1, explication: "Deux ans de formation des attachés de justice." },
      { q: "L'inamovibilité est garantie aux juges du siège par l'article :", choix: ["107", "108", "111", "114"], bonne: 1, explication: "Mutation, suspension, révocation selon la loi." },
      { q: "Les magistrats peuvent-ils adhérer à un syndicat ?", choix: ["Oui", "Non", "Seulement les procureurs", "Seulement à la retraite"], bonne: 1, explication: "Article 111, alinéa 2." },
      { q: "Le statut des magistrats est fixé par la loi organique :", choix: ["100-13", "106-13", "113-14", "130-13"], bonne: 1, explication: "Adoptée en 2016." },
      { q: "Depuis 2017, le ministère de la Justice est chargé principalement :", choix: ["De la carrière des magistrats", "De la gestion administrative et financière des juridictions", "De la direction du parquet", "Du jugement des affaires"], bonne: 1, explication: "Bâtiments, budget, greffe, numérique." },
    ],
  },

  3: {
    titre: "Les juridictions de droit commun : tribunaux de première instance et cours d'appel",
    description: "Juridictions de droit commun au Maroc : tribunal de première instance, section de la famille, sections de proximité (loi 42-10) et cour d'appel.",
    resume: md`
## L'essentiel — Juridictions de droit commun

- **Droit commun** = plénitude de juridiction (toute affaire non attribuée à une autre juridiction) ≠ juridiction **spécialisée** (compétence d'attribution).
- Deux degrés : **TPI** puis **cour d'appel** ; au sommet, la **Cour de cassation** ; création, siège et ressort fixés par **décret** (loi **38-15**, 2022, remplace le dahir de 1974).
- Compétence **matérielle** (nature, montant) + compétence **territoriale** (domicile du défendeur, article 27 CPC ; lieu de l'infraction).
- **TPI** : président, juges, **procureur du Roi** ; juge unique ou collégialité ; chambres civile, sociale, immobilière, pénale ; juges des référés, de l'instruction, des mineurs, de l'application des peines, de l'exécution.
- Compétence du TPI : civil, social, commercial de droit commun ; **délits et contraventions** ; premier et dernier ressort sous un seuil, à charge d'appel au-delà.
- **Section de la famille** (2004) : statut personnel et successions ; parquet partie principale (article 3 du Code de la famille) ; section du TPI.
- **Sections de proximité** (loi **42-10**, 2011) : juge unique professionnel, sans parquet ; actions personnelles et mobilières jusqu'à **5 000 DH** (hors famille, immobilier, travail, expulsion) ; contraventions simples ; procédure orale et gratuite ; **dernier ressort**.
- **Cour d'appel** : premier président, conseillers, **procureur général du Roi** ; collégialité ; appel des TPI (effet dévolutif) ; **crimes** en premier degré (chambre criminelle) et en appel (chambre criminelle d'appel) ; chambres des crimes financiers.
`,
    exercices: md`
### Exercice 2 — Vrai ou faux ?

1) Le tribunal de première instance juge les crimes. 2) La section de la famille est une juridiction autonome. 3) Le juge de proximité statue avec l'assistance du ministère public. 4) La cour d'appel rejuge l'affaire en fait et en droit. 5) Un litige de 4 000 dirhams sur un bail d'habitation avec demande d'expulsion relève de la section de proximité.

<details><summary>Voir le corrigé</summary>

1) Faux : les crimes relèvent de la chambre criminelle de la cour d'appel ; le TPI juge les délits et contraventions. 2) Faux : c'est une section du tribunal de première instance. 3) Faux : il statue seul, assisté d'un greffier, sans parquet. 4) Vrai : c'est l'effet dévolutif de l'appel. 5) Faux : l'expulsion et les litiges immobiliers sont exclus de la compétence de proximité ; le TPI est compétent.

</details>

### Exercice 3 — Le parcours d'une affaire pénale

Un individu est arrêté pour escroquerie (délit), puis l'enquête révèle qu'il a aussi commis un homicide volontaire. Décrivez le parcours des deux affaires, du premier degré à la cassation.

<details><summary>Voir le corrigé</summary>

L'escroquerie, délit, relève du procureur du Roi près le TPI et de la chambre correctionnelle du TPI ; appel devant la chambre correctionnelle d'appel de la cour d'appel ; pourvoi en cassation. L'homicide volontaire, crime, relève du procureur général du Roi près la cour d'appel ; instruction obligatoire par le juge d'instruction près la cour d'appel ; jugement par la chambre criminelle de premier degré ; appel devant la chambre criminelle d'appel ; pourvoi en cassation. En cas de connexité, les deux affaires peuvent être jointes devant la juridiction la plus élevée, la chambre criminelle.

</details>
`,
    qcm: [
      { q: "Une juridiction de droit commun est une juridiction qui :", choix: ["Ne juge que les affaires que la loi lui attribue expressément", "Connaît de toutes les affaires non attribuées à une autre juridiction", "Ne juge que les affaires pénales", "Statue toujours en dernier ressort"], bonne: 1, explication: "Plénitude de juridiction." },
      { q: "La loi relative à l'organisation judiciaire qui a remplacé le dahir de 1974 est la loi :", choix: ["42-10", "38-15", "53-95", "41-90"], bonne: 1, explication: "Adoptée en 2022." },
      { q: "Le chef du parquet près le tribunal de première instance est :", choix: ["Le procureur général du Roi", "Le procureur du Roi", "Le premier président", "Le juge d'instruction"], bonne: 1, explication: "Le procureur général du Roi est près la cour d'appel." },
      { q: "Les crimes sont jugés en premier degré par :", choix: ["La chambre correctionnelle du TPI", "La chambre criminelle de la cour d'appel", "La section de proximité", "La Cour de cassation"], bonne: 1, explication: "Avec appel devant la chambre criminelle d'appel." },
      { q: "Les sections de la justice de la famille ont été créées en :", choix: ["1974", "1993", "2004", "2011"], bonne: 2, explication: "Avec le Code de la famille." },
      { q: "Les sections de proximité ont été créées par la loi :", choix: ["42-10", "38-15", "33-17", "28-08"], bonne: 0, explication: "Elles remplacent les juridictions communales et d'arrondissement." },
      { q: "Le plafond de compétence civile du juge de proximité est de :", choix: ["1 000 dirhams", "5 000 dirhams", "20 000 dirhams", "50 000 dirhams"], bonne: 1, explication: "Actions personnelles et mobilières." },
      { q: "Les jugements des sections de proximité sont rendus :", choix: ["À charge d'appel", "En dernier ressort", "Sous réserve de confirmation par la cour d'appel", "Sans force exécutoire"], bonne: 1, explication: "Seule une demande d'annulation limitée est possible." },
      { q: "Dans les affaires du Code de la famille, le ministère public est :", choix: ["Absent", "Partie principale", "Simple témoin", "Juge"], bonne: 1, explication: "Article 3 du Code de la famille." },
      { q: "L'effet dévolutif de l'appel signifie que :", choix: ["La cour d'appel ne contrôle que le droit", "L'affaire est rejugée en fait et en droit", "Le jugement est annulé automatiquement", "L'exécution est toujours possible"], bonne: 1, explication: "La cassation, elle, ne juge que le droit." },
    ],
  },

  4: {
    titre: "Les juridictions spécialisées : commerce, administratif, militaire et financier",
    description: "Juridictions spécialisées au Maroc : tribunaux de commerce (loi 53-95), tribunaux administratifs (41-90, 80-03), tribunal militaire et Cour des comptes.",
    resume: md`
## L'essentiel — Juridictions spécialisées

- Raisons : technicité, célérité, État de droit (discours du 8 mai 1990) ; **spécialisation au sein de l'unité** : même corps de magistrats (CSPJ), cassation unique ; sections spécialisées possibles dans les TPI (loi 38-15).
- **Commerce** (loi **53-95**, 1997) : tribunaux de commerce, **cours d'appel de commerce** (Casablanca, Fès, Marrakech) ; collégialité ; parquet.
- Compétence (article 5) : contrats commerciaux, actions entre commerçants, effets de commerce, litiges entre associés, fonds de commerce, **procédures collectives**, propriété industrielle ; seuil minimal ; option du non-commerçant ; arbitrage possible ; président : référés et injonctions de payer.
- **Administratif** : tribunaux administratifs (loi **41-90**, installés en 1994, sept tribunaux) ; **commissaire royal de la loi et du droit** (indépendant) ; **cours administratives d'appel** (loi **80-03**, Rabat et Marrakech) ; cassation devant la chambre administrative.
- Compétence (article 8) : excès de pouvoir, contrats administratifs, responsabilité publique (sauf **véhicules** → juge judiciaire), élections, fiscalité, fonctionnaires et pensions, expropriation.
- **Militaire** (loi **108-13**, 2014) : plus de **civils**, ni de mineurs ; militaires pour infractions militaires ; appel et cassation ; président magistrat judiciaire.
- **Financier** : Cour des comptes et cours régionales (articles 147-148, loi **62-99**) : jugement des comptes, discipline budgétaire, contrôle ; corps distinct. La Cour constitutionnelle n'est pas une juridiction judiciaire.
- **Conflits** : incompétence matérielle d'ordre public ; jugement séparé et recours rapide (article 13 de la loi 41-90, article 8 de la loi 53-95) ; à défaut de texte → droit commun.
`,
    exercices: md`
### Exercice 2 — Classez les affaires

Indiquez la juridiction compétente : 1) un litige sur un marché public de travaux ; 2) le redressement judiciaire d'une SA ; 3) la contestation d'une taxe d'habitation ; 4) un chèque sans provision entre deux commerçants (action civile en paiement) ; 5) la contestation des résultats d'une élection communale.

<details><summary>Voir le corrigé</summary>

1) Tribunal administratif : contrat administratif (article 8 de la loi 41-90). 2) Tribunal de commerce : procédures collectives (article 5 de la loi 53-95). 3) Tribunal administratif : contentieux fiscal. 4) Tribunal de commerce pour l'action civile relative à un effet de commerce ; l'émission de chèque sans provision, si elle constitue une infraction pénale, relève de la juridiction répressive (TPI). 5) Tribunal administratif : contentieux électoral local (les élections législatives relèvent de la Cour constitutionnelle).

</details>

### Exercice 3 — Question de cours

En une quinzaine de lignes, répondez : « Le Maroc connaît-il un dualisme juridictionnel ? »

<details><summary>Voir le corrigé</summary>

Il existe des juridictions administratives distinctes (tribunaux administratifs depuis 1994, cours administratives d'appel depuis 2006), avec un commissaire royal de la loi et du droit et des règles de procédure propres : cela rapproche le Maroc du modèle dualiste. Mais l'unité demeure : les magistrats administratifs appartiennent au corps unique géré par le CSPJ, et la Cour de cassation, par sa chambre administrative, est la juridiction suprême de tous les ordres, il n'existe pas de Conseil d'État. On parle donc d'une spécialisation au sein d'un ordre unifié, parfois qualifiée de dualité incomplète. La Constitution de 2011 (article 114) évoque la plus haute juridiction administrative, ce qui laisse ouverte la possibilité d'une évolution vers une haute juridiction administrative autonome.

</details>
`,
    qcm: [
      { q: "Les tribunaux de commerce ont été créés par la loi :", choix: ["41-90", "53-95", "80-03", "108-13"], bonne: 1, explication: "Promulguée en 1997." },
      { q: "Les cours d'appel de commerce siègent à :", choix: ["Rabat, Tanger, Agadir", "Casablanca, Fès, Marrakech", "Oujda, Meknès, Laâyoune", "Rabat seulement"], bonne: 1, explication: "Trois cours d'appel de commerce." },
      { q: "Les litiges entre associés d'une société commerciale relèvent :", choix: ["Du tribunal administratif", "Du tribunal de commerce", "De la section de proximité", "De la Cour des comptes"], bonne: 1, explication: "Article 5 de la loi 53-95." },
      { q: "Les tribunaux administratifs ont été créés par la loi :", choix: ["41-90", "53-95", "62-99", "42-10"], bonne: 0, explication: "Installés en 1994." },
      { q: "Le commissaire royal de la loi et du droit :", choix: ["Représente l'administration", "Présente en toute indépendance ses conclusions", "Juge seul les affaires", "Exécute les jugements"], bonne: 1, explication: "Il est magistrat." },
      { q: "Les cours administratives d'appel ont été créées par la loi :", choix: ["80-03", "41-90", "38-15", "33-17"], bonne: 0, explication: "En 2006, à Rabat et Marrakech." },
      { q: "Les dommages causés par un véhicule d'une personne publique relèvent :", choix: ["Du tribunal administratif", "Du juge judiciaire", "Du tribunal militaire", "De la Cour des comptes"], bonne: 1, explication: "Exception de l'article 8 de la loi 41-90." },
      { q: "Depuis la loi 108-13, le tribunal militaire :", choix: ["Juge les civils en temps de paix", "Ne juge plus les civils", "Juge les mineurs", "N'existe plus"], bonne: 1, explication: "Réforme de 2014." },
      { q: "Le Code des juridictions financières est la loi :", choix: ["62-99", "53-95", "106-13", "28-08"], bonne: 0, explication: "Cour des comptes et cours régionales." },
      { q: "L'incompétence matérielle devant les juridictions spécialisées :", choix: ["Ne peut jamais être soulevée", "Est d'ordre public et peut être relevée d'office", "Ne peut être soulevée qu'en cassation", "Est réglée par le ministre de la Justice"], bonne: 1, explication: "Jugement séparé et recours rapide." },
    ],
  },

  5: {
    titre: "La Cour de cassation : organisation, pourvoi et rôle d'unification",
    description: "Cour de cassation marocaine : histoire (Cour suprême de 1957, loi 58-11), chambres, pourvoi, cas d'ouverture, renvoi et unification du droit.",
    resume: md`
## L'essentiel — Cour de cassation

- **Cour suprême** (dahir du 27 septembre 1957) → **Cour de cassation** (loi **58-11**, 2011) ; siège à Rabat ; juridiction suprême de tout l'ordre judiciaire.
- **Juge du droit**, pas troisième degré ; premier président = président délégué du CSPJ ; procureur général du Roi = président du ministère public.
- Six chambres : civile, famille et successions, commerciale, administrative, sociale, pénale ; sections ; formation de **cinq** magistrats ; **chambres réunies** ou toutes chambres réunies pour les questions de principe.
- Parquet général : procureur général du Roi et avocats généraux ; conclusions ; pourvoi **dans l'intérêt de la loi**.
- Pourvoi = voie **extraordinaire** contre les décisions en **dernier ressort** ; délai de **30 jours** en civil (article 358 CPC), 10 jours en pénal ; **avocat agréé** obligatoire.
- Non suspensif en civil (article 361 CPC), sauf statut personnel, faux incident, immatriculation foncière ; suspensif en pénal.
- Cas d'ouverture (article **359** CPC) : violation de la loi, violation d'une règle de procédure préjudiciable, incompétence, excès de pouvoir, défaut de base légale ou de motifs ; pas de contrôle des faits (appréciation souveraine).
- Issue : rejet ; **cassation avec renvoi** (juridiction de renvoi liée sur le point de droit, article 369 CPC) ou sans renvoi.
- Attributions particulières : recours contre le CSPJ (article 114), prise à partie, règlement de juges, renvoi pour suspicion légitime, révision pénale ; **unification** de la jurisprudence.
`,
    exercices: md`
### Exercice 2 — Recevable ou non ?

Le moyen de cassation est-il recevable ? 1) La cour d'appel aurait dû croire le témoin A plutôt que le témoin B ; 2) l'arrêt n'est pas motivé ; 3) le tribunal de commerce a jugé un litige relevant du tribunal administratif ; 4) le demandeur soulève pour la première fois en cassation un argument de fait jamais discuté devant les juges du fond ; 5) la cour d'appel a appliqué l'article d'un dahir abrogé.

<details><summary>Voir le corrigé</summary>

1) Irrecevable : appréciation souveraine des preuves. 2) Recevable : défaut de motifs (article 359 CPC). 3) Recevable : incompétence. 4) Irrecevable : moyen nouveau mélangé de fait. 5) Recevable : violation de la loi.

</details>

### Exercice 3 — Commentaire guidé

La Cour de cassation, chambres réunies, affirme : « la juridiction de renvoi est tenue de se conformer au point de droit tranché par la Cour de cassation ». Expliquez la portée de cette règle.

<details><summary>Voir le corrigé</summary>

La règle (article 369 CPC) garantit l'efficacité du contrôle de la Cour : sans elle, les juges du fond pourraient résister indéfiniment et le procès ne prendrait jamais fin. Elle ne porte que sur le point de droit jugé : la juridiction de renvoi conserve son pouvoir d'appréciation des faits et peut statuer sur les autres questions. Le fait que la solution émane des chambres réunies renforce son autorité pour l'ensemble des juridictions et contribue à l'unification de la jurisprudence.

</details>
`,
    qcm: [
      { q: "La Cour suprême a été créée en :", choix: ["1956", "1957", "1965", "1974"], bonne: 1, explication: "Dahir du 27 septembre 1957." },
      { q: "La Cour suprême est devenue Cour de cassation par la loi :", choix: ["58-11", "38-15", "100-13", "42-10"], bonne: 0, explication: "En 2011." },
      { q: "La Cour de cassation est :", choix: ["Un troisième degré de juridiction", "Juge du droit", "Juge des faits", "Une juridiction administrative autonome"], bonne: 1, explication: "Elle ne rejuge pas les faits." },
      { q: "En principe, les arrêts de la Cour de cassation sont rendus par :", choix: ["Un juge unique", "Trois magistrats", "Cinq magistrats", "Quinze magistrats"], bonne: 2, explication: "Sauf chambres réunies." },
      { q: "Le délai de pourvoi en cassation en matière civile est en principe de :", choix: ["Dix jours", "Quinze jours", "Trente jours", "Deux mois"], bonne: 2, explication: "Article 358 du Code de procédure civile." },
      { q: "En matière civile, le pourvoi en cassation est en principe :", choix: ["Suspensif", "Non suspensif", "Interdit", "Facultatif pour l'avocat"], bonne: 1, explication: "Article 361 du CPC, sauf exceptions." },
      { q: "Les cas d'ouverture à cassation sont énumérés par l'article :", choix: ["27 CPC", "359 CPC", "369 CPC", "124 de la Constitution"], bonne: 1, explication: "Violation de la loi, procédure, incompétence, excès de pouvoir, motifs." },
      { q: "Après cassation, l'affaire est en principe :", choix: ["Jugée par la Cour de cassation", "Renvoyée devant une juridiction du fond", "Classée sans suite", "Soumise au CSPJ"], bonne: 1, explication: "Même juridiction autrement composée ou autre juridiction." },
      { q: "Le pourvoi dans l'intérêt de la loi :", choix: ["Profite au condamné", "Ne profite ni ne nuit aux parties", "Est formé par l'avocat", "Est jugé par la Cour constitutionnelle"], bonne: 1, explication: "Il sert l'unité du droit." },
      { q: "Les recours contre les décisions individuelles du CSPJ sont portés devant :", choix: ["La chambre administrative de la Cour de cassation", "Le tribunal administratif de Rabat", "La Cour constitutionnelle", "Le Parlement"], bonne: 0, explication: "Article 114 de la Constitution." },
    ],
  },

  6: {
    titre: "Le ministère public et les auxiliaires de justice",
    description: "Ministère public marocain (loi 33-17, président du ministère public), greffe, avocats (28-08), notaires, adouls, commissaires judiciaires et experts.",
    resume: md`
## L'essentiel — Parquet et auxiliaires

- **Ministère public** (magistrats debout) : procureur général du Roi près la Cour de cassation (**président du ministère public**) ; procureurs généraux du Roi près les cours d'appel ; **procureurs du Roi** près les TPI.
- Principes : **hiérarchie** et instructions écrites légales (article 110) ; **indivisibilité** ; **irrécusabilité** ; indépendance vis-à-vis du siège ; liberté de parole à l'audience.
- **Loi 33-17** (2017) : l'action publique passe du ministre de la Justice au président du ministère public (installé le 6 octobre 2017) ; rapport annuel au CSPJ ; débat sur le contrôle démocratique.
- Fonctions pénales : plaintes, direction de la police judiciaire, **opportunité des poursuites**, réquisitions, recours, exécution des peines ; civiles : **partie principale** (famille, article 3 du Code de la famille) ou **partie jointe** (affaires communicables, article 9 CPC).
- **Greffe** : assiste le juge, procès-verbaux, registres, copies exécutoires, notification ; personnel relevant du ministère de la Justice.
- **Avocat** (loi **28-08**) : examen d'aptitude, stage, barreau, **bâtonnier** ; représentation obligatoire dans de nombreuses procédures ; secret professionnel ; ancienneté requise pour la cassation.
- **Notaire** (loi **32-09**) : actes authentiques ; **adouls** (loi **16-03**) : témoignages, statut personnel, successions, homologation par le juge du notariat, ouverts aux femmes depuis 2018.
- **Commissaire judiciaire** (loi **81-03**) : notification et exécution ; **expert judiciaire** (loi **45-00**) : rapport technique qui ne lie pas le juge ; traducteurs agréés (loi 50-00).
`,
    exercices: md`
### Exercice 2 — Qui fait quoi ?

Associez chaque tâche à son auteur : 1) décider du classement sans suite d'une plainte pour vol ; 2) recevoir l'acte de mariage de deux Marocains ; 3) procéder à la saisie des meubles d'un débiteur condamné ; 4) plaider devant la chambre commerciale de la Cour de cassation ; 5) délivrer la copie exécutoire d'un jugement.

<details><summary>Voir le corrigé</summary>

1) Le procureur du Roi près le TPI (opportunité des poursuites). 2) Deux adouls, l'acte étant homologué par le juge du notariat. 3) Le commissaire judiciaire, sous le contrôle du juge de l'exécution. 4) Un avocat agréé près la Cour de cassation (ancienneté requise). 5) Le greffe de la juridiction qui a rendu la décision.

</details>

### Exercice 3 — Discussion

« Le président du ministère public n'est responsable ni devant le Parlement ni devant le gouvernement. » Présentez les arguments pour et contre ce choix de la loi 33-17.

<details><summary>Voir le corrigé</summary>

Pour : l'indépendance de l'action publique à l'égard de l'exécutif, cohérente avec l'article 107 de la Constitution ; la fin des interventions politiques dans les dossiers individuels ; l'alignement sur l'idée d'un pouvoir judiciaire unifié. Contre : la politique pénale est une politique publique qui devrait relever d'une autorité responsable devant les élus ; le risque d'un parquet sans contrôle démocratique ; la difficulté de coordonner politique pénale et législation pénale préparée par le gouvernement. Éléments d'équilibre : rapport annuel au CSPJ rendu public, possibilité de débat parlementaire sur ce rapport, contrôle juridictionnel des actes de poursuite.

</details>
`,
    qcm: [
      { q: "Le chef du ministère public depuis 2017 est :", choix: ["Le ministre de la Justice", "Le procureur général du Roi près la Cour de cassation", "Le premier président de la Cour de cassation", "Le chef du gouvernement"], bonne: 1, explication: "Loi 33-17." },
      { q: "Le principe d'indivisibilité du parquet signifie que :", choix: ["Le parquet ne peut être divisé en chambres", "Chaque membre représente le parquet tout entier", "Le parquet ne peut être récusé", "Le parquet est indépendant du siège"], bonne: 1, explication: "Un substitut peut en remplacer un autre." },
      { q: "Près le tribunal de première instance, le parquet est dirigé par :", choix: ["Le procureur général du Roi", "Le procureur du Roi", "Le juge d'instruction", "Le bâtonnier"], bonne: 1, explication: "Assisté de substituts." },
      { q: "Dans les affaires du Code de la famille, le parquet est :", choix: ["Partie jointe", "Partie principale", "Absent", "Juge"], bonne: 1, explication: "Article 3 du Code de la famille." },
      { q: "La profession d'avocat est régie par la loi :", choix: ["28-08", "32-09", "16-03", "81-03"], bonne: 0, explication: "Barreaux, bâtonnier, conseil de l'ordre." },
      { q: "Les notaires sont régis par la loi :", choix: ["32-09", "16-03", "45-00", "50-00"], bonne: 0, explication: "Actes authentiques." },
      { q: "La profession d'adoul a été ouverte aux femmes en :", choix: ["2004", "2011", "2018", "2022"], bonne: 2, explication: "Décision annoncée en 2018." },
      { q: "L'acte adoulaire devient authentique après :", choix: ["Son enregistrement fiscal", "L'homologation du juge du notariat", "Sa signature par un avocat", "Sa publication au Bulletin officiel"], bonne: 1, explication: "Loi 16-03." },
      { q: "La notification et l'exécution des jugements relèvent :", choix: ["Du notaire", "Du commissaire judiciaire", "De l'expert", "Du bâtonnier"], bonne: 1, explication: "Loi 81-03." },
      { q: "Le juge est-il lié par le rapport de l'expert judiciaire ?", choix: ["Oui, toujours", "Non, il apprécie librement en motivant", "Seulement en matière pénale", "Seulement en appel"], bonne: 1, explication: "Il peut ordonner une contre-expertise." },
    ],
  },

  7: {
    titre: "L'accès à la justice, les modes alternatifs et la modernisation judiciaire",
    description: "Accès à la justice au Maroc (article 118) : assistance judiciaire, arbitrage et médiation (loi 95-17), Charte de 2013, justice numérique et défis actuels.",
    resume: md`
## L'essentiel — Accès à la justice et modernisation

- **Article 118** : droit d'accès à la justice ; accès matériel (proximité, juges résidents, audiences foraines), financier (article 121), intellectuel (information, langues), effectif (délai raisonnable, article 120 ; exécution, article 126).
- Frais : **taxes judiciaires**, expertise, exécution, honoraires ; dispenses (pension alimentaire, certaines actions sociales).
- **Assistance judiciaire** (décret royal de 1966) : dispense des frais et avocat désigné ; demande au procureur du Roi ; avocat d'office obligatoire devant la chambre criminelle et pour les mineurs.
- **Loi 95-17** (2022) : texte autonome sur l'**arbitrage** et la **médiation conventionnelle** (remplace la loi 08-05 intégrée au CPC).
- Arbitrage : convention (clause compromissoire ou compromis), sentence avec **exequatur**, recours en annulation limité, Convention de New York (1958) ; médiation : accord des parties ; conciliation judiciaire (divorce, proximité, social) ; médiation pénale.
- **Médiateur** (article 162) et **CNDH** : institutions non juridictionnelles.
- **Charte de 2013** : six objectifs (indépendance, moralisation, protection des droits, efficacité, capacités, modernisation) ; textes de 2016 à 2022.
- **Justice numérique** : suivi des dossiers en ligne, dépôt et paiement électroniques, audiences à distance (2020), publication de la jurisprudence ; enjeux : fracture numérique, données (loi 09-08), droits de la défense.
- Défis : charge, délais, **exécution contre l'administration**, confiance, formation, coordination des trois acteurs, usage de l'amazighe (loi organique 26-16).
`,
    exercices: md`
### Exercice 2 — Arbitrage, médiation ou conciliation ?

Qualifiez : 1) deux sociétés désignent trois personnes qui rendront une décision obligatoire sur leur litige ; 2) un tiers aide deux voisins à trouver un accord, sans rien leur imposer ; 3) le juge de la famille tente de réconcilier les époux avant de statuer sur le divorce ; 4) le procureur du Roi propose à l'auteur d'une dégradation légère de réparer le dommage pour éviter les poursuites ; 5) un citoyen saisit l'institution du Médiateur contre une administration qui ne répond pas à sa demande.

<details><summary>Voir le corrigé</summary>

1) Arbitrage (loi 95-17), sentence soumise à l'exequatur pour son exécution. 2) Médiation conventionnelle. 3) Conciliation judiciaire obligatoire en matière de divorce. 4) Médiation pénale. 5) Recours non juridictionnel devant le Médiateur (article 162 de la Constitution).

</details>

### Exercice 3 — Dissertation : plan détaillé

Proposez un plan pour le sujet : « La réforme de la justice au Maroc depuis 2011 : bilan et perspectives ».

<details><summary>Voir le corrigé</summary>

*Introduction* : la Constitution de 2011 érige la justice en pouvoir ; la Charte de 2013 ; problématique : la réforme a-t-elle rendu la justice plus indépendante et plus accessible ?
**I. Une refondation institutionnelle** — A. L'indépendance consacrée : CSPJ (lois organiques 100-13 et 106-13), président du ministère public (loi 33-17). B. Une organisation rationalisée : loi 38-15, sections spécialisées, sections de proximité, juridictions spécialisées.
**II. Une effectivité encore inachevée** — A. Les progrès de l'accès : assistance judiciaire, modes alternatifs (loi 95-17), justice numérique. B. Les défis : délais, exécution des jugements contre l'administration, moyens, coordination des acteurs, confiance des citoyens.
*Conclusion* : la réforme textuelle est largement accomplie ; l'enjeu est désormais la qualité du service rendu au justiciable.

</details>
`,
    qcm: [
      { q: "Le droit d'accès à la justice est garanti par l'article :", choix: ["107", "118", "121", "126"], bonne: 1, explication: "Pour la défense des droits et intérêts protégés par la loi." },
      { q: "La gratuité de la justice pour les plus démunis est prévue par l'article :", choix: ["118", "120", "121", "123"], bonne: 2, explication: "Mise en œuvre par l'assistance judiciaire." },
      { q: "La demande d'assistance judiciaire est adressée :", choix: ["Au bâtonnier", "Au procureur du Roi", "Au ministre de la Justice", "Au CSPJ"], bonne: 1, explication: "Un bureau d'assistance judiciaire statue." },
      { q: "La loi relative à l'arbitrage et à la médiation conventionnelle est la loi :", choix: ["95-17", "08-05", "38-15", "53-95"], bonne: 0, explication: "Adoptée en 2022, texte autonome." },
      { q: "Pour être exécutée, une sentence arbitrale doit recevoir :", choix: ["Une homologation du CSPJ", "L'exequatur", "Un visa du Médiateur", "Une confirmation de la Cour constitutionnelle"], bonne: 1, explication: "Délivré par le président de la juridiction compétente." },
      { q: "Dans la médiation, le tiers :", choix: ["Tranche le litige par une décision obligatoire", "Aide les parties à trouver un accord", "Représente l'une des parties", "Exécute le jugement"], bonne: 1, explication: "L'arbitre, lui, tranche." },
      { q: "La Charte de la réforme du système judiciaire a été présentée en :", choix: ["2011", "2013", "2017", "2022"], bonne: 1, explication: "Après un dialogue national." },
      { q: "Le nombre d'objectifs stratégiques de la Charte de 2013 est de :", choix: ["Trois", "Quatre", "Six", "Dix"], bonne: 2, explication: "De l'indépendance à la modernisation." },
      { q: "Les jugements définitifs s'imposent à tous selon l'article :", choix: ["118", "122", "124", "126"], bonne: 3, explication: "Fondement du droit à l'exécution." },
      { q: "L'institution qui reçoit les plaintes des citoyens contre l'administration est :", choix: ["Le Médiateur", "La Cour des comptes", "Le CSPJ", "Le tribunal militaire"], bonne: 0, explication: "Article 162 de la Constitution." },
    ],
  },
};

export default chapitres;
