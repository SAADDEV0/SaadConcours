// Histoire de la Pensée Économique (S3, parcours Économie) — compléments par chapitre :
// description SEO, résumé, exercices 2 et 3, QCM. Module ajouté le 2026-11-15 ; il reprend
// et développe les anciens chapitres 8 et 9 d'introeco_cours (301 dans public/_redirects).
const md = String.raw;

const chapitres = {
  1: {
    titre: "Objet et méthodes de l'histoire de la pensée économique",
    description: "Histoire de la pensée économique : faits et idées, approches absolutiste et relativiste, écoles et paradigmes de Kuhn, grandes périodes et fils conducteurs.",
    resume: md`
## L'essentiel — Objet et méthodes de l'HPE

- **HPE** : étude de la formation et de la transformation des idées et théories sur la production, l'échange et la répartition des richesses.
- **Faits et idées** sont liés : l'or d'Amérique explique le mercantilisme, 1929 explique Keynes ; Ricardo inspire l'abolition des lois sur le blé (1846).
- Trois niveaux : pensée économique (morale, religieuse), **économie politique** (Montchrestien, 1615), **analyse économique** (outils et modèles).
- **Absolutisme** (Schumpeter, *Histoire de l'analyse économique*, 1954) : la science progresse. **Relativisme** : chaque théorie répond à son époque. Distinction popularisée par Blaug (1962).
- **École** : auteurs partageant méthode, hypothèses et conclusions ; **courant** : ensemble plus large ; **orthodoxie** contre **hétérodoxies**.
- **Paradigme** (Kuhn, 1962) : cadre partagé ; une révolution naît d'**anomalies** (révolutions marginaliste et keynésienne).
- Périodes : Antiquité et Moyen Âge, mercantilisme, physiocratie, classiques (1776-1848), Marx, marginalistes (1871), Keynes (1936), débats depuis 1970.
- **Fils conducteurs** : source de la richesse, théorie de la valeur, répartition, équilibre du marché, monnaie, rôle de l'État.
- Méthode : situer, nommer avec ouvrage et date, répondre aux fils conducteurs, dégager les recommandations, évaluer.
`,
    exercices: md`
### Exercice 2 — Associer contexte et théorie

Associez chaque contexte historique à la théorie qu'il a fait naître et à son auteur principal : 1) l'afflux d'or et d'argent d'Amérique et la hausse des prix au XVI<sup>e</sup> siècle ; 2) le chômage de masse des années 1930 ; 3) les manufactures anglaises de la fin du XVIII<sup>e</sup> siècle ; 4) la misère ouvrière du milieu du XIX<sup>e</sup> siècle ; 5) la stagflation des années 1970.

<details><summary>Voir le corrigé</summary>

1) Première théorie quantitative de la monnaie : Jean Bodin (1568). 2) La demande effective et le chômage involontaire : Keynes, *Théorie générale* (1936). 3) La division du travail et la richesse fondée sur le travail : Smith, *Richesse des nations* (1776). 4) La plus-value et la critique du capitalisme : Marx, *Le Capital* (1867). 5) Le taux de chômage naturel et le monétarisme : Friedman (1968), puis les anticipations rationnelles de Lucas.

Dans chaque cas, l'idée naît d'un problème que la théorie précédente expliquait mal : c'est le lien entre histoire des faits et histoire des idées.

</details>

### Exercice 3 — Construire un tableau comparatif

Construisez un tableau qui compare les mercantilistes, les classiques et Keynes selon trois critères : la source de la richesse, le rôle de l'État et la place de la monnaie. Rédigez ensuite une phrase de conclusion qui dégage l'évolution d'ensemble.

<details><summary>Voir le corrigé</summary>

| Critère | Mercantilistes | Classiques | Keynes |
|---|---|---|---|
| Source de la richesse | Les métaux précieux accumulés | Le travail et sa division | La production, déterminée par la demande effective |
| Rôle de l'État | Interventionniste et protectionniste, au service du prince | Limité au régalien et aux travaux publics | Soutien actif de la demande en cas de sous-emploi |
| Monnaie | Richesse en elle-même | Simple voile, neutre | Active : elle agit sur le taux d'intérêt et l'emploi |

Conclusion : on passe d'une richesse **stock** accumulée par l'État à une richesse **flux** produite par le marché, puis à l'idée que ce flux dépend de la demande et peut justifier une intervention publique ; la monnaie, d'abord richesse, devient neutre avant de redevenir active avec Keynes.

</details>
`,
    qcm: [
      { q: "L'expression économie politique apparaît pour la première fois dans un ouvrage de :", choix: ["Montchrestien", "Adam Smith", "Quesnay", "Jean Bodin"], bonne: 0, explication: "Traicté de l'œconomie politique, 1615." },
      { q: "L'approche absolutiste de l'histoire de la pensée économique considère que :", choix: ["Chaque théorie ne vaut que pour son époque", "La science progresse et corrige les erreurs passées", "Les idées sont déterminées par la religion", "Les faits n'ont aucun lien avec les idées"], bonne: 1, explication: "Elle juge les auteurs au regard de la théorie actuelle." },
      { q: "La notion de paradigme a été proposée par :", choix: ["Karl Marx", "Thomas Kuhn", "Mark Blaug", "John Stuart Mill"], bonne: 1, explication: "La structure des révolutions scientifiques, 1962." },
      { q: "L'Histoire de l'analyse économique est l'œuvre de :", choix: ["Joseph Schumpeter", "Alfred Marshall", "John Maynard Keynes", "Léon Walras"], bonne: 0, explication: "Publiée en 1954, après la mort de l'auteur." },
      { q: "La révolution marginaliste se situe dans les années :", choix: ["1770", "1870", "1930", "1970"], bonne: 1, explication: "Jevons et Menger en 1871, Walras en 1874." },
      { q: "Un courant qui conteste la pensée dominante d'une époque est qualifié de :", choix: ["Orthodoxe", "Hétérodoxe", "Classique", "Scolastique"], bonne: 1, explication: "Marxistes, institutionnalistes et post-keynésiens en sont des exemples." },
      { q: "L'école classique couvre approximativement la période :", choix: ["1615-1758", "1776-1848", "1871-1936", "1936-1975"], bonne: 1, explication: "De Smith à John Stuart Mill." },
      { q: "Selon Kuhn, une révolution scientifique survient lorsque :", choix: ["Un auteur célèbre meurt", "Des anomalies inexpliquées s'accumulent", "L'État l'impose", "Les données disparaissent"], bonne: 1, explication: "Le chômage de masse des années 1930 en est un exemple pour l'économie." },
      { q: "L'abolition des lois sur le blé en Angleterre, en 1846, doit beaucoup aux idées de :", choix: ["Malthus", "Ricardo", "Colbert", "Quesnay"], bonne: 1, explication: "Ricardo défendait l'importation de blé bon marché pour éviter la baisse des profits." },
      { q: "Le mot économie vient du grec oikos nomos, qui signifie :", choix: ["La loi du marché", "La règle de la maison", "Le gouvernement de la nature", "L'art du commerce"], bonne: 1, explication: "Xénophon décrit ainsi la gestion d'un domaine agricole." },
    ],
  },

  2: {
    titre: "Avant l'économie politique : Antiquité, scolastique et pensée arabo-musulmane",
    description: "Aristote et la chrématistique, juste prix et usure chez Thomas d'Aquin, Oresme, Abu Yusuf, Ibn Taymiyya, Al-Maqrizi et l'analyse d'Ibn Khaldoun.",
    resume: md`
## L'essentiel — Avant l'économie politique

- Avant le XVI<sup>e</sup> siècle, l'économie est **normative** : branche de la morale, de la religion et du droit.
- **Xénophon** : l'*Économique*, gestion de la maison ; **Platon** (*La République*) : division du travail dans la cité.
- **Aristote** : économique contre **chrématistique** ; valeur d'usage et valeur d'échange ; monnaie unité de mesure mais stérile, condamnation de l'intérêt.
- **Thomas d'Aquin** (*Somme théologique*) : **juste prix** et interdiction de l'**usure**, avec des exceptions progressives.
- **Oresme** (*Traité des monnaies*, vers 1360) : contre les mutations monétaires ; la mauvaise monnaie chasse la bonne (future loi de Gresham).
- Pensée musulmane : interdiction du **riba**, zakat, contrôle des marchés par la **hisba** et le *muhtasib*.
- **Abu Yusuf** (*Kitab al-Kharaj*) : impôt foncier modéré ; **Ibn Taymiyya** : les prix dépendent de l'offre et de la demande ; **Al-Maqrizi** : inflation due à la monnaie de cuivre.
- **Ibn Khaldoun** (*Muqaddima*, 1377) : travail source de la valeur, division du travail, villes et demande, impôt et recettes, cycle des dynasties et *'asabiyya*.
- Recettes fiscales : $R = t \times B(t)$ ; au-delà d'un certain taux, hausser l'impôt réduit les recettes (repris par Laffer).
`,
    exercices: md`
### Exercice 2 — Aristote et la chrématistique

Classez chaque activité selon Aristote (économique ou chrématistique) et justifiez : 1) un agriculteur de la région de Meknès vend son surplus d'olives pour acheter des outils ; 2) un marchand achète des épices pour les revendre le plus cher possible, sans autre but que s'enrichir ; 3) un prêteur exige 20 % d'intérêt sur un prêt de monnaie ; 4) une famille stocke le blé nécessaire à l'année. Expliquez ensuite pourquoi Aristote juge la monnaie stérile.

<details><summary>Voir le corrigé</summary>

1) **Économique** : l'échange sert à acquérir des biens nécessaires à la maison, il est limité par les besoins. 2) **Chrématistique** : l'enrichissement est recherché pour lui-même, sans limite. 3) **Chrématistique**, dans sa forme la plus condamnable : l'intérêt fait naître de l'argent à partir de l'argent. 4) **Économique** : gestion mesurée des biens nécessaires à la vie.

Pour Aristote, la monnaie a été inventée pour faciliter les échanges et mesurer les biens ; elle ne produit rien par elle-même. Exiger un intérêt revient à lui faire « engendrer » de la monnaie, ce qui est contre sa nature. Cette idée inspire la condamnation de l'usure au Moyen Âge.

</details>

### Exercice 3 — Ibn Taymiyya et les prix

Pendant un mois de Ramadan, le prix de la viande monte fortement sur le souk d'une ville. Un premier marchand n'a rien changé à ses pratiques ; un second a stocké toute la viande disponible pour la revendre plus cher. 1) Selon Ibn Taymiyya, la hausse du prix est-elle injuste dans le premier cas ? 2) Dans quel cas l'autorité peut-elle fixer le prix ? 3) Quel rôle joue le *muhtasib* ?

<details><summary>Voir le corrigé</summary>

1) Non. Pour Ibn Taymiyya, quand la demande augmente ou que l'offre diminue, le prix monte sans que le marchand commette d'injustice : c'est la volonté de Dieu exprimée par les conditions du marché. Le premier marchand vend au prix courant.

2) Lorsque le prix résulte d'un **abus** : accaparement, monopole, entente entre marchands, refus de vendre alors que les gens en ont besoin. C'est le cas du second marchand, qui organise lui-même la rareté. La fixation du prix (*tas'ir*) devient alors légitime pour imposer un prix équitable.

3) Le *muhtasib* surveille les marchés dans le cadre de la **hisba** : il contrôle les poids et les mesures, la qualité des produits, combat les fraudes et les accaparements. C'est une forme ancienne de régulation des marchés, que l'on peut rapprocher du rôle actuel du Conseil de la concurrence.

</details>
`,
    qcm: [
      { q: "Aristote appelle chrématistique :", choix: ["La gestion mesurée de la maison", "L'art de s'enrichir sans limite", "La division du travail", "L'impôt foncier"], bonne: 1, explication: "Il la condamne, notamment le prêt à intérêt." },
      { q: "La doctrine du juste prix est associée à :", choix: ["Thomas d'Aquin", "Jean Bodin", "Adam Smith", "Al-Maqrizi"], bonne: 0, explication: "Somme théologique, XIIIe siècle." },
      { q: "Nicolas Oresme condamne surtout :", choix: ["Le commerce extérieur", "Les mutations monétaires du prince", "La division du travail", "La propriété privée"], bonne: 1, explication: "La manipulation de la monnaie est un impôt déguisé." },
      { q: "Le Kitab al-Kharaj d'Abu Yusuf porte sur :", choix: ["La monnaie de cuivre", "L'impôt foncier", "Le commerce maritime", "Les corporations"], bonne: 1, explication: "Il conseille un impôt modéré et proportionné à la récolte." },
      { q: "Pour Ibn Taymiyya, la hausse d'un prix due à une baisse de l'offre est :", choix: ["Toujours injuste", "Légitime, sans faute du marchand", "Interdite par la hisba", "Le signe d'une mauvaise monnaie"], bonne: 1, explication: "La fixation des prix n'est justifiée qu'en cas d'abus." },
      { q: "Al-Maqrizi explique la crise de l'Égypte mamelouke par :", choix: ["Une guerre extérieure", "La multiplication d'une monnaie de cuivre dépréciée", "La baisse de la population", "Les droits de douane"], bonne: 1, explication: "Une analyse précoce de l'inflation d'origine monétaire." },
      { q: "La Muqaddima d'Ibn Khaldoun est achevée en :", choix: ["1258", "1377", "1492", "1615"], bonne: 1, explication: "Introduction à son histoire universelle." },
      { q: "Selon Ibn Khaldoun, la source de la valeur des biens est :", choix: ["L'or", "La terre", "Le travail humain", "La décision du prince"], bonne: 2, explication: "Une idée reprise par les classiques." },
      { q: "Ibn Khaldoun a notamment servi à la cour de :", choix: ["Fès", "Bagdad", "Cordoue", "Damas"], bonne: 0, explication: "La cour mérinide, avant de finir sa vie au Caire." },
      { q: "Dans un royaume où B = 1000 × (1 − t), les recettes fiscales sont maximales pour un taux de :", choix: ["30 %", "50 %", "70 %", "90 %"], bonne: 1, explication: "R = 1000t − 1000t², maximale pour t = 0,5." },
    ],
  },

  3: {
    titre: "Le mercantilisme : richesse, métaux précieux et puissance de l'État",
    description: "Mercantilisme : bullionisme espagnol, colbertisme, Thomas Mun et balance du commerce, Bodin et la hausse des prix, critique de Hume et néomercantilisme.",
    resume: md`
## L'essentiel — Le mercantilisme

- Contexte (XVI<sup>e</sup>-XVIII<sup>e</sup>) : grandes découvertes, or d'Amérique, États-nations, capitalisme marchand.
- Richesse = **métaux précieux** ; elle sert la **puissance du prince**.
- Commerce extérieur = **jeu à somme nulle** ; objectif : un **excédent de la balance du commerce**.
- Interventionnisme : droits de douane, subventions, manufactures, marine, colonies ; populationnisme et salaires bas.
- **Bullionisme** (Espagne) ; **industrialisme** ou colbertisme (France, Colbert à partir de 1665) ; **commercialisme** (Angleterre, Mun, Actes de navigation de 1651).
- **Mun** (*England's Treasure by Forraign Trade*, publié en 1664) : compte la balance **globale**, pas chaque échange.
- **Bodin** (1568) : l'abondance des métaux fait monter les prix, première théorie quantitative ; plus tard $M \times V = P \times T$ (Fisher, 1911).
- **Hume** (1752) : excédent → entrée d'or → hausse des prix → baisse des exportations → disparition de l'excédent.
- Taux de couverture $= X / M \times 100$.
- Héritages : réserves de change en mois d'importations, politiques industrielles, néomercantilisme.
`,
    exercices: md`
### Exercice 2 — Colbertisme et balance commerciale

Un royaume importe chaque année 200 000 pièces de drap à 5 onces d'argent la pièce et exporte 300 000 tonneaux de vin à 3 onces le tonneau. Colbert crée une manufacture royale qui remplace la moitié des importations de drap. 1) Calculez le solde commercial avant la réforme. 2) Calculez-le après la création de la manufacture, sans autre changement. 3) Quelle limite Hume opposerait-il à ce raisonnement ?

<details><summary>Voir le corrigé</summary>

1) Importations : $200\,000 \times 5 = 1\,000\,000$ onces. Exportations : $300\,000 \times 3 = 900\,000$ onces. Solde : $900\,000 - 1\,000\,000 = -100\,000$ onces : la balance est **déficitaire**, l'argent sort du royaume.

2) Importations de drap divisées par deux : $100\,000 \times 5 = 500\,000$ onces. Solde : $900\,000 - 500\,000 = +400\,000$ onces : la balance devient **excédentaire** de 400 000 onces.

3) L'entrée de 400 000 onces augmente la masse monétaire, donc les prix intérieurs (théorie quantitative). Le vin et le drap du royaume deviennent plus chers : les exportations baissent, la contrebande et les importations reprennent, et l'excédent se réduit. Un excédent ne peut pas être durable.

</details>

### Exercice 3 — Mercantilisme d'hier et d'aujourd'hui

Pour chaque mesure, dites si elle relève d'une logique mercantiliste et nuancez : 1) un pays fixe un objectif de réserves de change couvrant plusieurs mois d'importations ; 2) un pays interdit totalement la sortie d'or de son territoire ; 3) un pays subventionne l'installation d'usines automobiles exportatrices ; 4) un pays relève fortement ses droits de douane sur tous les produits importés pour réduire son déficit.

<details><summary>Voir le corrigé</summary>

1) Partiellement : comme les mercantilistes, on veut disposer de moyens de paiement extérieurs, mais l'objectif est la **sécurité** des paiements et la stabilité du change, non l'accumulation pour elle-même. Bank Al-Maghrib suit cet indicateur.

2) Oui, c'est le **bullionisme** espagnol du XVI<sup>e</sup> siècle. Il a échoué : l'or accumulé a fait monter les prix et a fini par repartir.

3) Partiellement : c'est une politique industrielle proche du **colbertisme** (développer des industries exportatrices), mais elle vise l'emploi, la valeur ajoutée et l'intégration dans les chaînes de valeur mondiales. Le Maroc l'a pratiquée avec ses plans industriels.

4) Oui, c'est une logique protectionniste mercantiliste. Elle risque des représailles des partenaires, renchérit les biens importés pour les consommateurs et les entreprises, et ne règle pas les causes du déficit (compétitivité, épargne insuffisante).

</details>
`,
    qcm: [
      { q: "Pour les mercantilistes, la richesse d'une nation repose sur :", choix: ["La terre", "Les métaux précieux", "Le travail des ouvriers", "L'utilité des biens"], bonne: 1, explication: "L'or et l'argent font la puissance du prince." },
      { q: "Le bullionisme est la forme de mercantilisme pratiquée surtout en :", choix: ["Angleterre", "France", "Espagne", "Hollande"], bonne: 2, explication: "L'Espagne cherchait à garder l'or venu d'Amérique." },
      { q: "Le colbertisme privilégie :", choix: ["Le commerce maritime de réexportation", "Les manufactures exportatrices", "L'agriculture", "La libre circulation des grains"], bonne: 1, explication: "Manufactures royales, règlements de qualité, droits de douane." },
      { q: "Thomas Mun défend l'exportation d'argent vers l'Inde parce que :", choix: ["L'or n'a aucune valeur", "Seule compte la balance globale du commerce", "Il faut appauvrir l'Angleterre", "Le commerce est un jeu à somme positive pour tous"], bonne: 1, explication: "Les épices achetées sont revendues plus cher en Europe." },
      { q: "Pour les mercantilistes, le commerce international est :", choix: ["Un jeu à somme nulle", "Toujours avantageux pour tous", "Inutile", "Interdit"], bonne: 0, explication: "Ce qu'un pays gagne, un autre le perd." },
      { q: "Jean Bodin attribue la hausse des prix du XVIe siècle principalement à :", choix: ["Les mutations monétaires", "L'abondance des métaux d'Amérique", "Les mauvaises récoltes", "Les guerres"], bonne: 1, explication: "Réponse aux paradoxes de M. de Malestroit, 1568." },
      { q: "Le mécanisme des prix et des flux d'espèces est dû à :", choix: ["David Hume", "Thomas Mun", "Jean-Baptiste Colbert", "Antoine de Montchrestien"], bonne: 0, explication: "Essai De la balance du commerce, 1752." },
      { q: "Selon Hume, un excédent commercial durable est :", choix: ["Facile à maintenir", "Impossible, car l'entrée d'or fait monter les prix", "Le but de tout pays", "Indépendant de la monnaie"], bonne: 1, explication: "Les exportations baissent et l'excédent disparaît." },
      { q: "Un pays exporte pour 420 et importe pour 360. Son taux de couverture est d'environ :", choix: ["85,7 %", "116,7 %", "60 %", "140 %"], bonne: 1, explication: "420 / 360 × 100 ≈ 116,7 %." },
      { q: "Le terme mercantilisme a été donné :", choix: ["Par les mercantilistes eux-mêmes", "Par leurs critiques, dont Adam Smith", "Par Colbert", "Par l'Église"], bonne: 1, explication: "Smith parlait du système mercantile." },
    ],
  },

  4: {
    titre: "Les physiocrates et les précurseurs du libéralisme",
    description: "Boisguilbert, Cantillon, Quesnay et le Tableau économique de 1758 : produit net, trois classes, ordre naturel, laisser-faire, impôt unique et Turgot.",
    resume: md`
## L'essentiel — Les physiocrates

- Précurseurs : **Petty** (arithmétique politique), **Boisguilbert** (*Le Détail de la France*, 1695), **Cantillon** (*Essai*, publié en 1755 : entrepreneur, effet Cantillon).
- **Quesnay** (1694-1774), première **école** de pensée : Mirabeau, Mercier de la Rivière, Dupont de Nemours.
- **Ordre naturel** : lois voulues par la Providence, découvertes par la raison ; propriété et liberté.
- Seule la terre est productive : elle dégage un **produit net** ; industrie et commerce sont **stériles**.
- Trois classes : **productive** (fermiers), **propriétaires** (perçoivent la rente), **stérile** (artisans, commerçants).
- *Tableau économique* (1758) : production 5, avances annuelles 2, entretien des avances primitives 1, d'où produit net $= 5 - 2 - 1 = 2$ milliards.
- Premier **circuit économique** : les dépenses des uns sont les revenus des autres ; ancêtre de Marx, Leontief et la comptabilité nationale.
- Politique : liberté du commerce des grains, « **laissez faire, laissez passer** » (Gournay), **impôt unique** sur le produit net.
- **Turgot** (*Réflexions*, 1766) : réformes de 1774-1776, rendements décroissants.
`,
    exercices: md`
### Exercice 2 — Le circuit de Quesnay avec une rente plus forte

Les propriétaires d'un royaume perçoivent 3 milliards de rente et les dépensent pour moitié auprès de la classe productive et pour moitié auprès de la classe stérile. La classe stérile dépense tout ce qu'elle reçoit auprès de la classe productive. La classe productive achète 1 milliard de produits manufacturés. 1) Calculez les recettes de la classe stérile. 2) Calculez les recettes monétaires de la classe productive. 3) Vérifiez que la classe productive peut verser à nouveau 3 milliards de rente.

<details><summary>Voir le corrigé</summary>

1) Classe stérile : ventes aux propriétaires $1{,}5$ + ventes à la classe productive $1$ = **2,5 milliards**.

2) Classe productive : ventes aux propriétaires $1{,}5$ + ventes à la classe stérile $2{,}5$ = **4 milliards**.

3) Elle dépense 1 milliard en produits manufacturés et dispose de $4 - 1 = 3$ milliards : elle peut verser à nouveau 3 milliards de rente aux propriétaires. Le circuit se reproduit, à condition que la production agricole permette de livrer les biens correspondants.

</details>

### Exercice 3 — Physiocrates contre mercantilistes

Comparez les physiocrates et les mercantilistes sur quatre points : la source de la richesse, le commerce des grains, le rôle de l'État, la fiscalité. Concluez sur ce que Smith retiendra des physiocrates.

<details><summary>Voir le corrigé</summary>

| Critère | Mercantilistes | Physiocrates |
|---|---|---|
| Source de la richesse | Les métaux précieux, le commerce extérieur | La terre, seule source de produit net |
| Commerce des grains | Encadré, grains bon marché pour garder des salaires bas | Libre, pour un « bon prix » rémunérateur pour les fermiers |
| Rôle de l'État | Interventionniste : manufactures, douanes, colonies | Laisser-faire, mais garantie de la propriété et travaux publics |
| Fiscalité | Multiples droits et taxes | Impôt unique sur le produit net |

Smith retiendra des physiocrates l'idée d'un **ordre naturel** que le marché réalise, la critique du mercantilisme, la notion de **surplus** et le **circuit** ; mais il étendra la productivité au travail des manufactures et du commerce.

</details>
`,
    qcm: [
      { q: "Le Tableau économique de Quesnay date de :", choix: ["1695", "1758", "1776", "1817"], bonne: 1, explication: "Une version simplifiée, la Formule, paraît en 1766." },
      { q: "Pour les physiocrates, le produit net est créé par :", choix: ["L'industrie", "Le commerce", "L'agriculture", "La monnaie"], bonne: 2, explication: "Seule la terre produit plus qu'elle ne consomme." },
      { q: "Dans le Tableau économique, les artisans et les commerçants forment :", choix: ["La classe productive", "La classe stérile", "La classe des propriétaires", "Le tiers état"], bonne: 1, explication: "Ils transforment ou déplacent la richesse sans l'accroître." },
      { q: "Le produit net est perçu par :", choix: ["Les fermiers", "Les propriétaires fonciers", "Les artisans", "Les marchands"], bonne: 1, explication: "Sous forme de rente." },
      { q: "Avec une production de 5, des avances annuelles de 2 et un entretien des avances primitives de 1, le produit net vaut :", choix: ["2", "3", "4", "5"], bonne: 0, explication: "5 − 2 − 1 = 2 milliards." },
      { q: "La formule laissez faire, laissez passer est attribuée à :", choix: ["Quesnay", "Gournay", "Smith", "Turgot"], bonne: 1, explication: "Vincent de Gournay, intendant du commerce." },
      { q: "Les physiocrates recommandent :", choix: ["De nombreuses taxes indirectes", "Un impôt unique sur le produit net", "Un impôt sur les salaires", "Aucun impôt"], bonne: 1, explication: "Taxer les autres classes revient à taxer la terre indirectement." },
      { q: "L'Essai sur la nature du commerce en général est l'œuvre de :", choix: ["Boisguilbert", "Cantillon", "Petty", "Mirabeau"], bonne: 1, explication: "Rédigé vers 1730, publié en 1755." },
      { q: "Turgot, contrôleur général des finances, a notamment :", choix: ["Créé des manufactures royales", "Libéré le commerce des grains et supprimé les corporations", "Instauré l'impôt sur le revenu", "Fondé la Banque de France"], bonne: 1, explication: "Réformes de 1774-1776, avant son renvoi." },
      { q: "Les avances primitives correspondent :", choix: ["Au capital circulant", "Au capital fixe comme le bétail et les outils", "À la rente", "Aux salaires des artisans"], bonne: 1, explication: "Les avances annuelles, elles, sont le capital circulant." },
    ],
  },

  5: {
    titre: "Adam Smith et la fondation de l'économie politique classique",
    description: "Adam Smith et la Richesse des nations (1776) : division du travail, main invisible, valeur-travail, prix naturel, répartition, accumulation et rôle de l'État.",
    resume: md`
## L'essentiel — Adam Smith

- **Smith** (1723-1790) : *Théorie des sentiments moraux* (1759), *Richesse des nations* (1776), au début de la révolution industrielle.
- La richesse est le **flux annuel** de biens produits par le **travail**, non le stock d'or.
- **Division du travail** : manufacture d'épingles, 10 ouvriers produisent 48 000 épingles par jour ; causes : habileté, gain de temps, machines.
- Elle naît du penchant à l'échange et est **limitée par l'étendue du marché** ; danger d'abrutissement, d'où l'instruction publique.
- **Main invisible** : l'intérêt personnel, sous **concurrence**, sert l'intérêt général ; méfiance envers les ententes et les monopoles.
- **Paradoxe de l'eau et du diamant** ; travail **incorporé** et travail **commandé**.
- **Prix naturel** = salaires + profits + rentes à leur taux naturel ; le **prix de marché** gravite autour.
- Trois classes : salaires, profits, rentes ; croissance par l'**accumulation** et l'épargne ; travail productif et improductif.
- État : défense, justice, travaux et institutions publics ; impôt : égalité, certitude, commodité, économie.
- Libre-échange fondé sur l'**avantage absolu**.
`,
    exercices: md`
### Exercice 2 — Étendue du marché et division du travail

Dans un village isolé de l'Atlas, un menuisier vend 50 chaises par an et doit aussi fabriquer des tables, des portes et des coffres pour vivre. Une nouvelle route relie le village à Marrakech, où il peut vendre 1 000 chaises par an. 1) Selon Smith, comment la route change-t-elle l'organisation du travail du menuisier ? 2) Quel principe de Smith est illustré ? 3) Citez deux autres facteurs qui, selon la même logique, favorisent la division du travail.

<details><summary>Voir le corrigé</summary>

1) Avec un débouché de 1 000 chaises, le menuisier peut se **spécialiser** dans les chaises, puis diviser leur fabrication entre plusieurs ouvriers (découpe, assemblage, finition) : la productivité augmente grâce à l'habileté, au gain de temps et à des outils adaptés.

2) La division du travail est **limitée par l'étendue du marché** : on ne se spécialise que si l'on peut écouler sa production.

3) Le développement des transports (ports, canaux, routes), le commerce extérieur qui élargit les débouchés, la croissance des villes et de la population, la monnaie qui facilite les échanges.

</details>

### Exercice 3 — Smith, défenseur de l'égoïsme ?

Un étudiant écrit : « Pour Smith, chacun doit suivre son seul intérêt et l'État ne doit rien faire. » Corrigez cette phrase en trois arguments.

<details><summary>Voir le corrigé</summary>

1) L'intérêt personnel ne sert l'intérêt général que s'il est soumis à la **concurrence** : Smith dénonce les ententes entre marchands et les monopoles.

2) Il s'exerce dans un cadre **moral** : dans la *Théorie des sentiments moraux* (1759), Smith fonde la vie sociale sur la sympathie et la justice ; l'échange suppose la confiance et le respect des règles.

3) L'État a trois **devoirs** : la défense, la justice et les travaux et institutions publics (routes, ports, instruction du peuple). Smith propose même des règles pour un bon impôt. Smith est libéral, mais pas partisan d'un État absent.

</details>
`,
    qcm: [
      { q: "La Richesse des nations est publiée en :", choix: ["1759", "1776", "1798", "1817"], bonne: 1, explication: "Recherches sur la nature et les causes de la richesse des nations." },
      { q: "Dans la manufacture d'épingles, 10 ouvriers produisent environ :", choix: ["480 épingles par jour", "4 800 épingles par jour", "48 000 épingles par jour", "480 000 épingles par jour"], bonne: 2, explication: "Soit 4 800 par ouvrier." },
      { q: "Selon Smith, la division du travail est limitée par :", choix: ["La quantité d'or", "L'étendue du marché", "La fertilité des terres", "Le nombre de propriétaires"], bonne: 1, explication: "On ne se spécialise que si l'on peut vendre." },
      { q: "Pour Smith, la main invisible fonctionne à condition :", choix: ["Qu'il y ait des monopoles", "Qu'il y ait de la concurrence", "Que l'État fixe les prix", "Que la monnaie soit abondante"], bonne: 1, explication: "Il se méfie des ententes entre marchands." },
      { q: "Le prix naturel selon Smith comprend :", choix: ["Les salaires uniquement", "Les salaires, les profits et les rentes à leur taux naturel", "L'utilité marginale", "Le seul coût du travail incorporé"], bonne: 1, explication: "Le prix de marché gravite autour." },
      { q: "Le paradoxe de l'eau et du diamant oppose :", choix: ["Valeur d'usage et valeur d'échange", "Travail productif et improductif", "Prix naturel et prix de production", "Profit et rente"], bonne: 0, explication: "L'eau est très utile mais bon marché." },
      { q: "Parmi les devoirs de l'État selon Smith figure :", choix: ["La fixation des salaires", "La justice", "La gestion des manufactures", "Le contrôle des prix"], bonne: 1, explication: "Avec la défense et les travaux et institutions publics." },
      { q: "La maxime fiscale de certitude signifie que :", choix: ["Chacun paie selon ses facultés", "Le montant et la date de l'impôt sont connus", "L'impôt coûte peu à percevoir", "L'impôt est payé au moment le plus commode"], bonne: 1, explication: "Les quatre maximes : égalité, certitude, commodité, économie." },
      { q: "Pour Smith, un domestique fournit un travail :", choix: ["Productif", "Improductif", "Stérile au sens des physiocrates", "Commandé"], bonne: 1, explication: "Il ne se fixe pas dans un objet vendable." },
      { q: "Smith défend le libre-échange avec la théorie de :", choix: ["L'avantage comparatif", "L'avantage absolu", "La demande réciproque", "Les industries naissantes"], bonne: 1, explication: "Ricardo la généralisera avec l'avantage comparatif." },
    ],
  },

  6: {
    titre: "Les classiques après Smith : Malthus, Say, Ricardo et Mill",
    description: "Malthus et la population, loi des débouchés de Say, rente différentielle et avantage comparatif de Ricardo, état stationnaire, Mill, Sismondi et List.",
    resume: md`
## L'essentiel — Malthus, Say, Ricardo, Mill

- **Malthus** (*Essai sur le principe de population*, 1798) : population en progression **géométrique**, subsistances en progression **arithmétique** ; freins destructifs et préventifs (contrainte morale, 1803) ; critique des lois sur les pauvres.
- Malthus (*Principes*, 1820) admet une **surproduction générale** par insuffisance de la demande : précurseur de Keynes.
- **Say** (*Traité*, 1803) : valeur-utilité, rôle de l'entrepreneur, **loi des débouchés** (« les produits s'échangent contre des produits ») ; monnaie voile.
- **Ricardo** (*Principes*, 1817) : valeur-travail incorporé ; **rente différentielle** fixée par la terre marginale, prix $p = \text{coût} / Q_{\text{marginale}}$.
- Hausse du prix du blé → hausse des salaires en monnaie et des rentes → baisse des profits → **état stationnaire** ; d'où l'abolition des *Corn Laws* (1846).
- **Avantage comparatif** : Angleterre (drap 100 h, vin 120 h), Portugal (drap 90 h, vin 80 h) ; chacun gagne à se spécialiser.
- Équivalence ricardienne (Barro, 1974) : emprunt ou impôt, même effet si les impôts futurs sont anticipés.
- **Mill** (*Principes*, 1848) : lois de la production et de la répartition, **demande réciproque**, état stationnaire positif.
- Critiques : **Sismondi** (1819, sous-consommation), **List** (1841, protectionnisme éducateur des industries naissantes).
`,
    exercices: md`
### Exercice 2 — Les progressions de Malthus

Une population de 10 millions d'habitants double tous les 25 ans, tandis que la production de subsistances, suffisante au départ pour 10 millions de personnes, permet de nourrir 10 millions de personnes de plus à chaque période de 25 ans. 1) Calculez la population et la capacité alimentaire après 25, 50, 75 et 100 ans. 2) Que conclut Malthus ? 3) Donnez deux raisons pour lesquelles sa prédiction ne s'est pas réalisée dans les pays industrialisés.

<details><summary>Voir le corrigé</summary>

1) Population : 20, 40, 80 puis 160 millions. Capacité alimentaire : 20, 30, 40 puis 50 millions de personnes. Après 100 ans, $160 - 50 = 110$ millions de personnes ne pourraient pas être nourries.

2) La population se heurte inévitablement aux limites des subsistances : misère, famines et épidémies jouent le rôle de freins, sauf si les hommes adoptent des freins préventifs (mariage tardif, chasteté). Les aides aux pauvres aggravent le problème.

3) Les gains de productivité agricole (engrais, mécanisation, irrigation, semences sélectionnées) ont fait croître la production bien plus vite qu'une progression arithmétique, et la **transition démographique** a fait baisser la fécondité avec l'urbanisation, la scolarisation des filles et la hausse du niveau de vie.

</details>

### Exercice 3 — Say contre Malthus

En 1820, une partie des négociants anglais ne trouve plus d'acheteurs. 1) Comment Say explique-t-il cette situation ? 2) Comment Malthus l'explique-t-il ? 3) Lequel des deux Keynes donnera-t-il raison en 1936, et pourquoi ?

<details><summary>Voir le corrigé</summary>

1) Pour **Say**, il ne peut s'agir que d'une surproduction **partielle** : certains secteurs ont trop produit, d'autres pas assez. Toute production distribue des revenus qui seront dépensés en d'autres produits ; les prix et les capitaux se déplacent et le déséquilibre se corrige.

2) Pour **Malthus**, une surproduction **générale** est possible : si les capitalistes épargnent trop et que les ouvriers sont pauvres, la demande totale ne suffit pas à acheter toute la production. Il faut des dépenses, notamment celles des propriétaires fonciers, pour soutenir les débouchés.

3) Keynes donne raison à **Malthus** : il le présente comme un précurseur de la **demande effective**. Une partie du revenu épargnée n'est pas forcément investie, la demande peut être insuffisante, et la loi de Say ne tient pas dans une économie monétaire.

</details>
`,
    qcm: [
      { q: "Pour Malthus, la population tend à croître selon une progression :", choix: ["Arithmétique", "Géométrique", "Constante", "Décroissante"], bonne: 1, explication: "Elle doublerait environ tous les 25 ans." },
      { q: "La contrainte morale chez Malthus est :", choix: ["Un frein destructif", "Un frein préventif", "Une loi sur les pauvres", "Un impôt"], bonne: 1, explication: "Retarder le mariage, ajoutée en 1803." },
      { q: "La loi des débouchés affirme que :", choix: ["La demande crée l'offre", "Les produits s'échangent contre des produits", "La monnaie est la vraie richesse", "La surproduction générale est inévitable"], bonne: 1, explication: "Say, Traité d'économie politique, 1803." },
      { q: "Chez Ricardo, le prix du blé est déterminé par le coût sur :", choix: ["La terre la plus fertile", "La terre la moins fertile cultivée", "La moyenne des terres", "Les terres non cultivées"], bonne: 1, explication: "La terre marginale ne paie pas de rente." },
      { q: "Trois terres coûtant 600 DH produisent 100, 80 et 60 quintaux, toutes cultivées. La rente de la terre de 100 quintaux est :", choix: ["150 DH", "200 DH", "400 DH", "600 DH"], bonne: 2, explication: "Prix 600 / 60 = 10 DH ; rente (100 − 60) × 10 = 400 DH." },
      { q: "L'état stationnaire chez Ricardo résulte :", choix: ["De la hausse des profits", "De la baisse des profits qui arrête l'accumulation", "De l'excès de monnaie", "Du libre-échange"], bonne: 1, explication: "Les rentes et les salaires montent avec le prix du blé." },
      { q: "Dans l'exemple de Ricardo, l'Angleterre a un avantage comparatif dans :", choix: ["Le vin", "Le drap", "Les deux biens", "Aucun bien"], bonne: 1, explication: "Le drap y coûte 0,83 unité de vin contre 1,125 au Portugal." },
      { q: "La théorie des valeurs internationales fondée sur la demande réciproque est due à :", choix: ["Ricardo", "John Stuart Mill", "Malthus", "Say"], bonne: 1, explication: "Principes d'économie politique, 1848." },
      { q: "Le protectionnisme éducateur a été défendu par :", choix: ["Sismondi", "Friedrich List", "Jean-Baptiste Say", "David Hume"], bonne: 1, explication: "Système national d'économie politique, 1841." },
      { q: "Les lois sur le blé (Corn Laws) ont été abolies en :", choix: ["1817", "1846", "1867", "1871"], bonne: 1, explication: "Une victoire des idées de Ricardo." },
    ],
  },

  7: {
    titre: "Karl Marx et la critique de l'économie politique",
    description: "Marx : matérialisme historique, valeur-travail, force de travail et plus-value, composition organique, taux de profit, schémas de reproduction et crises.",
    resume: md`
## L'essentiel — Karl Marx

- Contexte : question sociale ; socialistes utopiques (Saint-Simon, Fourier, Owen), Proudhon (1840).
- **Marx** (1818-1883) : *Manifeste* (1848, avec Engels), *Contribution* (1859), *Le Capital* (livre I 1867 ; II 1885 et III 1894 par Engels).
- **Matérialisme historique** : forces productives, rapports de production, modes de production ; infrastructure et superstructure ; lutte des classes.
- Valeur = **temps de travail socialement nécessaire** ; M-A-M contre A-M-A'.
- La **force de travail** est une marchandise : sa valeur est le salaire, son usage crée plus de valeur ; la différence est la **plus-value**.
- $W = c + v + pl$ ; taux de plus-value $e = pl / v$ ; composition organique $q = c / v$ ; taux de profit $r = pl / (c + v) = e / (q + 1)$.
- Plus-value **absolue** (allonger la journée) et **relative** (gains de productivité).
- Accumulation, mécanisation, **armée industrielle de réserve** ; **baisse tendancielle du taux de profit** et contre-tendances.
- Reproduction simple : $v_1 + pl_1 = c_2$ ; élargie : $v_1 + pl_1 > c_2$ ; crises de disproportion et de surproduction.
- Livre III : **prix de production** et problème de la transformation ; héritage : théories de la dépendance (Samir Amin, Aziz Belal).
`,
    exercices: md`
### Exercice 2 — Plus-value absolue et relative

Un ouvrier travaille 10 heures par jour. La valeur des biens nécessaires à son entretien est produite en 5 heures. 1) Calculez le surtravail et le taux de plus-value. 2) La journée passe à 12 heures sans changement de salaire. Calculez le nouveau taux. Quel type de plus-value ? 3) Revenons à 10 heures. Grâce à des gains de productivité dans l'agriculture et le textile, la valeur des biens nécessaires à l'ouvrier est produite en 4 heures. Calculez le nouveau taux. Quel type de plus-value ?

<details><summary>Voir le corrigé</summary>

1) Surtravail : $10 - 5 = 5$ heures. Taux : $\dfrac{5}{5} = 100\,\%$.

2) Surtravail : $12 - 5 = 7$ heures. Taux : $\dfrac{7}{5} = 140\,\%$. C'est une **plus-value absolue**, obtenue en allongeant la journée.

3) Surtravail : $10 - 4 = 6$ heures. Taux : $\dfrac{6}{4} = 150\,\%$. C'est une **plus-value relative** : la journée ne change pas, mais le temps de travail nécessaire baisse grâce à la productivité dans les biens consommés par les ouvriers.

</details>

### Exercice 3 — Deux branches, deux taux de profit

Deux branches ont le même taux de plus-value de 100 %. Branche textile : $c = 200$, $v = 200$. Branche sidérurgie : $c = 800$, $v = 200$. 1) Calculez la plus-value, la valeur produite et le taux de profit de chaque branche. 2) Calculez le taux de profit moyen de l'économie. 3) Expliquez le problème que Marx traite dans le livre III du *Capital*.

<details><summary>Voir le corrigé</summary>

1) Textile : $pl = 200$, valeur $= 200 + 200 + 200 = 600$, taux de profit $= \dfrac{200}{400} = 50\,\%$. Sidérurgie : $pl = 200$, valeur $= 800 + 200 + 200 = 1\,200$, taux de profit $= \dfrac{200}{1\,000} = 20\,\%$.

2) Taux moyen : $\dfrac{200 + 200}{400 + 1\,000} = \dfrac{400}{1\,400} \approx 28{,}6\,\%$.

3) Si les marchandises se vendaient à leur valeur, les capitaux fuiraient la sidérurgie pour le textile. La concurrence égalise les taux de profit : chaque branche vend à un **prix de production** égal à son capital avancé augmenté du profit moyen, soit environ $400 \times 1{,}286 \approx 514$ pour le textile et $1\,000 \times 1{,}286 \approx 1\,286$ pour la sidérurgie. Les prix s'écartent des valeurs, mais la somme reste égale : $514 + 1\,286 = 1\,800 = 600 + 1\,200$. C'est le **problème de la transformation** des valeurs en prix de production.

</details>
`,
    qcm: [
      { q: "Le livre I du Capital paraît en :", choix: ["1848", "1859", "1867", "1894"], bonne: 2, explication: "Les livres II et III sont publiés par Engels." },
      { q: "Pour Marx, la valeur d'une marchandise est déterminée par :", choix: ["Son utilité marginale", "Le temps de travail socialement nécessaire", "Le prix du marché", "La quantité d'or"], bonne: 1, explication: "Dans les conditions normales de production." },
      { q: "Ce que l'ouvrier vend au capitaliste est, selon Marx :", choix: ["Son travail", "Sa force de travail", "Son produit", "Son capital"], bonne: 1, explication: "La force de travail crée plus de valeur qu'elle n'en coûte." },
      { q: "Le capital variable correspond :", choix: ["Aux machines", "Aux matières premières", "Aux salaires", "Aux bâtiments"], bonne: 2, explication: "Seule partie du capital qui crée une valeur nouvelle." },
      { q: "Avec c = 600, v = 200 et pl = 200, le taux de profit est :", choix: ["20 %", "25 %", "33 %", "100 %"], bonne: 1, explication: "200 / (600 + 200) = 25 %." },
      { q: "La composition organique du capital est le rapport :", choix: ["pl / v", "c / v", "pl / (c + v)", "v / c"], bonne: 1, explication: "Elle augmente avec la mécanisation." },
      { q: "Allonger la journée de travail sans hausse de salaire accroît :", choix: ["La plus-value relative", "La plus-value absolue", "Le capital constant", "La rente"], bonne: 1, explication: "La plus-value relative vient des gains de productivité." },
      { q: "La condition de la reproduction simple est :", choix: ["c1 = c2", "v1 + pl1 = c2", "v2 + pl2 = c1", "pl1 = pl2"], bonne: 1, explication: "Livre II du Capital." },
      { q: "L'armée industrielle de réserve désigne :", choix: ["Les soldats de l'État", "Les chômeurs qui pèsent sur les salaires", "Les capitalistes", "Les paysans"], bonne: 1, explication: "Elle naît du remplacement des ouvriers par des machines." },
      { q: "Le Manifeste du parti communiste est écrit avec :", choix: ["Proudhon", "Engels", "Saint-Simon", "Owen"], bonne: 1, explication: "Publié en 1848." },
    ],
  },

  8: {
    titre: "La révolution marginaliste et l'école néoclassique",
    description: "Jevons, Menger, Walras et l'utilité marginale ; paradoxe de l'eau et du diamant, équilibre général, Marshall, optimum de Pareto, productivité marginale.",
    resume: md`
## L'essentiel — Marginalistes et néoclassiques

- Précurseurs : **Cournot** (1838, demande, monopole), **Dupuit** (1844, surplus), **Gossen** (1854, utilité décroissante).
- Fondateurs : **Jevons** (1871), **Menger** (1871, école autrichienne), **Walras** (1874, école de Lausanne).
- **Valeur-utilité** : la valeur dépend de l'**utilité marginale**, décroissante, donc de la rareté.
- Paradoxe de l'eau et du diamant résolu par l'utilité marginale, non l'utilité totale.
- Optimum du consommateur : $Um_A / p_A = Um_B / p_B$ sous la contrainte $p_A q_A + p_B q_B = R$.
- **Walras** : équilibre général, loi de Walras (somme des demandes nettes nulle), numéraire, **tâtonnement** et commissaire-priseur ; existence démontrée par Arrow et Debreu (1954).
- **Marshall** (*Principes*, 1890) : équilibre partiel, ciseaux de l'offre et de la demande, élasticité, surplus, courte et longue période.
- **Pareto** (1906) : utilité ordinale, **optimum** ; **Edgeworth** (1881) : courbes d'indifférence.
- **Clark** (1899) : chaque facteur payé selon sa **productivité marginale** ; **Pigou** (1920) : externalités et taxe.
- Hypothèses : individualisme méthodologique, rationalité, CPP, chômage volontaire, monnaie neutre.
`,
    exercices: md`
### Exercice 2 — L'utilité marginale du thé

Un étudiant boit des verres de thé pendant une soirée de révision. Utilité totale : 1 verre : 10 ; 2 verres : 18 ; 3 verres : 24 ; 4 verres : 27 ; 5 verres : 28 ; 6 verres : 26. 1) Calculez l'utilité marginale de chaque verre. 2) Comment évolue-t-elle ? 3) Combien de verres l'étudiant devrait-il boire au maximum si le thé est gratuit ? 4) Expliquez avec cette notion le paradoxe de l'eau et du diamant.

<details><summary>Voir le corrigé</summary>

1) Utilités marginales : 10 ; 8 ; 6 ; 3 ; 1 ; −2.

2) Elle est **décroissante** (première loi de Gossen) et devient même négative au sixième verre.

3) Cinq verres : tant que l'utilité marginale est positive, un verre gratuit supplémentaire augmente la satisfaction totale ; le sixième la réduit.

4) La valeur d'un bien dépend de son utilité marginale, non de son utilité totale. L'eau, abondante, est consommée jusqu'à ce que sa dernière unité ait une faible utilité : son prix est bas. Le diamant, rare, garde une utilité marginale élevée : son prix est élevé.

</details>

### Exercice 3 — La loi de Walras

Une économie compte trois marchés : le blé, le tissu et le travail. Aux prix annoncés par le commissaire-priseur, la demande nette (demande moins offre) de blé vaut +30 en valeur et celle de tissu −10. 1) Selon la loi de Walras, quelle est la demande nette sur le marché du travail ? 2) Comment le commissaire-priseur modifie-t-il les prix ? 3) Pourquoi suffit-il d'équilibrer deux marchés sur trois ?

<details><summary>Voir le corrigé</summary>

1) La somme des demandes nettes en valeur est nulle : $30 - 10 + D_{\text{travail}} = 0$, donc $D_{\text{travail}} = -20$ : il y a un **excès d'offre** de travail de 20.

2) Il **augmente** le prix du blé (excès de demande), **baisse** celui du tissu et le salaire (excès d'offre), puis annonce les nouveaux prix ; aucun échange n'a lieu tant que l'équilibre n'est pas atteint (tâtonnement).

3) Chaque agent finance ses achats par ses ventes : si deux marchés sont équilibrés, la loi de Walras impose que la demande nette du troisième soit nulle. Avec un numéraire (prix fixé à 1), il reste deux prix relatifs à déterminer avec deux équations indépendantes.

</details>
`,
    qcm: [
      { q: "La Théorie de l'économie politique de Jevons et les Principes de Menger paraissent en :", choix: ["1848", "1871", "1874", "1890"], bonne: 1, explication: "Walras suit en 1874." },
      { q: "Pour les marginalistes, la valeur d'un bien dépend de :", choix: ["La quantité de travail", "Son utilité marginale", "Son coût en or", "La décision de l'État"], bonne: 1, explication: "Donc de sa rareté par rapport aux besoins." },
      { q: "L'école de Lausanne a été fondée par :", choix: ["Menger", "Walras", "Marshall", "Jevons"], bonne: 1, explication: "Pareto lui succède." },
      { q: "Le fondateur de l'école autrichienne est :", choix: ["Carl Menger", "Friedrich Hayek", "Léon Walras", "Vilfredo Pareto"], bonne: 0, explication: "Principes d'économie, 1871." },
      { q: "L'image des ciseaux pour l'offre et la demande est due à :", choix: ["Walras", "Marshall", "Pareto", "Cournot"], bonne: 1, explication: "Principes d'économie, 1890." },
      { q: "Une situation où l'on ne peut améliorer le sort d'un agent sans détériorer celui d'un autre est :", choix: ["Un équilibre de sous-emploi", "Un optimum de Pareto", "Une rente différentielle", "Un état stationnaire"], bonne: 1, explication: "L'optimum ne dit rien de la justice de la répartition." },
      { q: "Le consommateur est à l'optimum lorsque :", choix: ["Les utilités marginales sont égales", "Les utilités marginales pondérées par les prix sont égales", "Les utilités totales sont égales", "Il consomme autant de chaque bien"], bonne: 1, explication: "Deuxième loi de Gossen, sous la contrainte de budget." },
      { q: "Selon John Bates Clark, le salaire réel est égal :", choix: ["Au minimum de subsistance", "À la productivité marginale du travail", "À la plus-value", "Au prix du blé"], bonne: 1, explication: "The Distribution of Wealth, 1899." },
      { q: "La taxe destinée à corriger une externalité négative est associée à :", choix: ["Pigou", "Pareto", "Edgeworth", "Menger"], bonne: 0, explication: "L'économie du bien-être, 1920." },
      { q: "Dans le tâtonnement walrasien, les échanges ont lieu :", choix: ["À tout prix", "Uniquement aux prix d'équilibre", "Avant l'annonce des prix", "Seulement sur le marché du travail"], bonne: 1, explication: "Le commissaire-priseur ajuste les prix avant tout échange." },
    ],
  },

  9: {
    titre: "Keynes et la révolution keynésienne",
    description: "Keynes et la Théorie générale (1936) : critique de la loi de Say, demande effective, chômage involontaire, préférence pour la liquidité, multiplicateur.",
    resume: md`
## L'essentiel — Keynes

- **Keynes** (1883-1946) : *Les conséquences économiques de la paix* (1919) ; critique du retour à l'étalon-or (1925).
- Crise de 1929 : chômage massif et durable, anomalie pour la théorie dominante.
- *Théorie générale de l'emploi, de l'intérêt et de la monnaie* (1936) : le plein-emploi n'est qu'un cas particulier.
- Rejet de la **loi de Say** : l'épargne n'est pas forcément investie ; le salaire est un coût **et** un revenu.
- **Demande effective** anticipée par les entrepreneurs : elle fixe production et emploi ; **équilibre de sous-emploi**, **chômage involontaire**.
- Consommation : propension marginale $c = \Delta C / \Delta Y$ entre 0 et 1 ; investissement : efficacité marginale du capital contre taux d'intérêt, incertitude et esprits animaux.
- Taux d'intérêt : prix de la liquidité (transaction, précaution, spéculation) ; monnaie **active** ; trappe à liquidité.
- Multiplicateur (Kahn, 1931) : $k = 1 / (1 - c)$, $\Delta Y = k \times \Delta G$ ; relance budgétaire et monétaire ; **paradoxe de l'épargne**.
- Bretton Woods (1944) ; synthèse : Hicks (IS-LM, 1937), Samuelson (1948), Phillips (1958).
- Post-keynésiens : Robinson, Kaldor, Kalecki (1933), Minsky (instabilité financière).
`,
    exercices: md`
### Exercice 2 — Baisse des salaires : deux lectures

Dans une économie en récession, le gouvernement envisage une baisse générale de 10 % des salaires pour réduire le chômage. 1) Présentez le raisonnement néoclassique en faveur de cette mesure. 2) Présentez la critique de Keynes. 3) Quelle politique Keynes propose-t-il à la place ?

<details><summary>Voir le corrigé</summary>

1) Pour les néoclassiques, le chômage vient d'un **salaire réel trop élevé** : à ce salaire, l'offre de travail dépasse la demande. Baisser les salaires rend l'embauche rentable jusqu'à ce que la productivité marginale du travail égale le salaire réel ; le marché du travail revient au plein-emploi.

2) Pour Keynes, le salaire est aussi un **revenu** : une baisse générale réduit la consommation, donc les ventes anticipées par les entreprises, donc la production et l'emploi. Si les prix baissent aussi, le salaire réel peut ne pas baisser, et la déflation alourdit les dettes. Le niveau de l'emploi dépend de la **demande effective**, non du marché du travail.

3) Il propose de **soutenir la demande** : hausse des dépenses publiques (travaux publics), même financées par le déficit, et baisse des taux d'intérêt pour encourager l'investissement, avec un effet multiplicateur sur la production et l'emploi.

</details>

### Exercice 3 — Le multiplicateur en étapes

Le gouvernement lance 12 milliards de DH de travaux publics. La propension marginale à consommer est de 0,75. 1) Calculez le multiplicateur et la hausse finale de la production. 2) Décrivez les trois premières étapes du processus. 3) Pourquoi le multiplicateur est-il plus faible dans une économie ouverte comme le Maroc ?

<details><summary>Voir le corrigé</summary>

1) $k = \dfrac{1}{1 - 0{,}75} = 4$ ; $\Delta Y = 4 \times 12 = 48$ milliards de DH.

2) Étape 1 : les 12 milliards deviennent des revenus (salaires, profits des entreprises de BTP). Étape 2 : les bénéficiaires en consomment 75 %, soit $0{,}75 \times 12 = 9$ milliards, qui deviennent des revenus pour d'autres entreprises. Étape 3 : ces revenus sont consommés à 75 %, soit $0{,}75 \times 9 = 6{,}75$ milliards. Au total : $12 + 9 + 6{,}75 + \dots = 12 \times 4 = 48$ milliards.

3) Une partie des revenus distribués est dépensée en **importations**, qui créent des revenus à l'étranger et non dans le pays : cette « fuite » réduit le multiplicateur. Les impôts et l'épargne en sont d'autres fuites.

</details>
`,
    qcm: [
      { q: "La Théorie générale de Keynes est publiée en :", choix: ["1919", "1929", "1936", "1944"], bonne: 2, explication: "Théorie générale de l'emploi, de l'intérêt et de la monnaie." },
      { q: "Pour Keynes, le niveau de l'emploi dépend :", choix: ["Du salaire réel", "De la demande effective", "De la quantité d'or", "Du progrès technique"], bonne: 1, explication: "La demande anticipée par les entrepreneurs." },
      { q: "Le chômage involontaire est un concept de :", choix: ["Walras", "Keynes", "Friedman", "Say"], bonne: 1, explication: "Il s'oppose au chômage volontaire des néoclassiques." },
      { q: "Le multiplicateur a été formalisé d'abord par :", choix: ["Richard Kahn", "John Hicks", "Paul Samuelson", "Irving Fisher"], bonne: 0, explication: "Article de 1931." },
      { q: "Si la propension marginale à consommer vaut 0,8, le multiplicateur vaut :", choix: ["0,2", "1,25", "5", "8"], bonne: 2, explication: "1 / (1 − 0,8) = 5." },
      { q: "Pour Keynes, le taux d'intérêt est :", choix: ["Le prix qui égalise épargne et investissement", "Le prix de la renonciation à la liquidité", "Fixé par la loi de Say", "Sans effet sur l'investissement"], bonne: 1, explication: "Il se forme sur le marché de la monnaie." },
      { q: "Les trois motifs de détention de la monnaie sont :", choix: ["Production, échange, épargne", "Transaction, précaution, spéculation", "Consommation, investissement, impôt", "Or, argent, cuivre"], bonne: 1, explication: "Préférence pour la liquidité." },
      { q: "Le paradoxe de l'épargne montre que :", choix: ["Épargner plus enrichit toujours la nation", "Une hausse générale de l'épargne peut réduire le revenu sans accroître l'épargne totale", "L'épargne crée l'investissement", "La monnaie est neutre"], bonne: 1, explication: "Un sophisme de composition." },
      { q: "Le modèle IS-LM a été proposé par :", choix: ["Keynes", "Hicks", "Phillips", "Kalecki"], bonne: 1, explication: "Mr. Keynes and the Classics, 1937." },
      { q: "L'hypothèse d'instabilité financière est due à :", choix: ["Hyman Minsky", "Joan Robinson", "Alvin Hansen", "Milton Friedman"], bonne: 0, explication: "Très relue après la crise de 2008." },
    ],
  },

  10: {
    titre: "Les débats contemporains : monétaristes, nouveaux classiques et hétérodoxes",
    description: "Stagflation, Friedman et chômage naturel, Lucas et anticipations rationnelles, nouveaux keynésiens, Schumpeter, Hayek, institutionnalistes et comportementaux.",
    resume: md`
## L'essentiel — Les débats contemporains

- Années 1970 : **stagflation** après les chocs pétroliers ; la courbe de Phillips ne fonctionne plus.
- **Friedman** (Nobel 1976) : crise de 1929 et contraction monétaire (1963) ; l'inflation est un phénomène monétaire ; revenu permanent.
- **Chômage naturel** (1968) et anticipations **adaptatives** : $\pi_t = \pi^a_t - a\,(u_t - u^*)$ ; courbe de Phillips verticale à long terme ; **règle** monétaire.
- **Lucas** (Nobel 1995) : anticipations **rationnelles** (Muth, 1961), inefficacité des politiques anticipées, critique de Lucas (1976).
- **Kydland et Prescott** : incohérence temporelle (1977) et banque centrale indépendante (loi 40-17 sur Bank Al-Maghrib, 2019) ; cycles réels (1982).
- Économie de l'offre : **Laffer**, baisses d'impôts.
- **Nouveaux keynésiens** : coûts de menu, salaire d'efficience, rationnement du crédit (Stiglitz et Weiss, 1981) ; rôle de la politique à court terme.
- **Schumpeter** (1911, 1942) : entrepreneur innovateur, **destruction créatrice** ; **Hayek** (Nobel 1974) : marché comme processus de découverte, *La route de la servitude* (1944).
- Hétérodoxies : institutionnalisme (Veblen, Galbraith ; Coase, North, Williamson), développement (Rostow, Prebisch-Singer, Amin, Sen), régulation (Aglietta, Boyer), comportementale (Simon, Kahneman, Thaler), communs (Ostrom), inégalités (Piketty).
`,
    exercices: md`
### Exercice 2 — Classer les politiques par courant

Indiquez quel courant défendrait chaque mesure et pourquoi : 1) augmenter les dépenses publiques en pleine récession ; 2) fixer une règle de croissance de la masse monétaire de 3 % par an ; 3) baisser fortement l'impôt sur les sociétés pour encourager la production ; 4) supprimer le salaire minimum pour réduire le chômage ; 5) concevoir une épargne retraite par défaut, dont on peut sortir, pour contrer la procrastination ; 6) confier la gestion d'une nappe phréatique à une association d'usagers qui fixe ses propres règles.

<details><summary>Voir le corrigé</summary>

1) **Keynésien** : soutenir la demande effective pour réduire le chômage involontaire, grâce à l'effet multiplicateur.

2) **Monétariste** (Friedman) : une règle stable évite l'inflation et l'instabilité causées par une politique discrétionnaire.

3) **Économie de l'offre** (Laffer) : des impôts plus faibles incitent à produire et à investir, et peuvent même augmenter les recettes si les taux étaient trop élevés.

4) **Néoclassique** : le salaire minimum empêche le marché du travail de s'équilibrer au salaire d'équilibre.

5) **Économie comportementale** (Thaler) : un « coup de pouce » (*nudge*) tient compte des biais des agents sans les contraindre.

6) **Ostrom** : des communautés d'usagers peuvent gérer durablement une ressource partagée grâce à des règles qu'elles élaborent et contrôlent elles-mêmes, sans privatisation ni gestion par l'État.

</details>

### Exercice 3 — Schumpeter et la destruction créatrice

Dans les années 2010, le paiement mobile et les plateformes de livraison se développent au Maroc, tandis que certaines activités traditionnelles reculent. 1) Comment Schumpeter analyserait-il ce phénomène ? 2) Quels sont, selon lui, les cinq types d'innovation ? 3) Pourquoi Schumpeter n'est-il ni un néoclassique ni un keynésien ?

<details><summary>Voir le corrigé</summary>

1) C'est la **destruction créatrice** : des entrepreneurs innovateurs introduisent de nouveaux produits et de nouvelles organisations, obtiennent un profit temporaire, sont imités en « grappes », et les activités anciennes reculent. Le capitalisme évolue par ces vagues d'innovation, sources de croissance et de cycles.

2) Un nouveau produit, une nouvelle méthode de production, l'ouverture d'un nouveau marché, une nouvelle source de matières premières, une nouvelle organisation de la production.

3) Il ne raisonne pas à l'**équilibre** comme les néoclassiques : pour lui, l'innovation rompt sans cesse l'équilibre, et la concurrence par l'innovation compte plus que la concurrence par les prix. Il n'est pas keynésien car il explique les cycles par l'**offre** et l'innovation, non par l'insuffisance de la demande.

</details>
`,
    qcm: [
      { q: "La stagflation associe :", choix: ["Croissance et déflation", "Stagnation et inflation", "Plein-emploi et inflation", "Croissance et chômage nul"], bonne: 1, explication: "Elle a fragilisé les politiques keynésiennes dans les années 1970." },
      { q: "Le taux de chômage naturel est un concept de :", choix: ["Keynes", "Friedman", "Walras", "Marx"], bonne: 1, explication: "La relance ne peut pas le réduire durablement." },
      { q: "Selon Friedman, la courbe de Phillips de long terme est :", choix: ["Horizontale", "Verticale", "Décroissante", "Inexistante à court terme"], bonne: 1, explication: "Au niveau du chômage naturel." },
      { q: "Les anticipations rationnelles sont associées à :", choix: ["Robert Lucas", "John Hicks", "Thorstein Veblen", "Alfred Marshall"], bonne: 0, explication: "Idée de Muth (1961), développée par Lucas." },
      { q: "Les anticipations adaptatives consistent à :", choix: ["Utiliser toute l'information disponible", "Corriger ses prévisions à partir des erreurs passées", "Suivre les annonces du gouvernement", "Ne jamais anticiper"], bonne: 1, explication: "C'est l'hypothèse de Friedman." },
      { q: "Le salaire d'efficience est une explication du chômage proposée par :", choix: ["Les nouveaux keynésiens", "Les physiocrates", "Les mercantilistes", "Les nouveaux classiques"], bonne: 0, explication: "Payer plus que l'équilibre motive les salariés." },
      { q: "La destruction créatrice est un concept de :", choix: ["Hayek", "Schumpeter", "Galbraith", "Ostrom"], bonne: 1, explication: "Capitalisme, socialisme et démocratie, 1942." },
      { q: "La route de la servitude est l'œuvre de :", choix: ["Milton Friedman", "Friedrich Hayek", "Ludwig von Mises", "Joseph Schumpeter"], bonne: 1, explication: "Publiée en 1944." },
      { q: "La consommation ostentatoire a été analysée par :", choix: ["Veblen", "Pareto", "Friedman", "Ricardo"], bonne: 0, explication: "Théorie de la classe de loisir, 1899." },
      { q: "Elinor Ostrom a reçu le prix Nobel pour ses travaux sur :", choix: ["La monnaie", "La gestion des biens communs", "Les cycles réels", "Le commerce international"], bonne: 1, explication: "Prix Nobel 2009." },
    ],
  },
};

export default chapitres;
