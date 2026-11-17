// Marketing International (S6) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Du marketing national au marketing international",
    description: "Définition et degrés du marketing international, motivations proactives et réactives, étapes, modèle d'Uppsala, born globals et orientations EPRG de Perlmutter.",
    resume: md`
## L'essentiel — Le marketing international

- **Marketing international** : démarche marketing appliquée à plusieurs pays, avec leurs différences d'environnement, de culture et de concurrence.
- Degrés : **domestique**, **d'exportation**, **multidomestique**, **global**.
- Motivations **proactives** : croissance, avantage concurrentiel, économies d'échelle, volonté des dirigeants, incitations publiques.
- Motivations **réactives** : saturation, concurrence étrangère, surcapacités, commandes spontanées, suivi d'un client, saisonnalité.
- Étapes : export occasionnel → export régulier par intermédiaires → filiale de vente → production à l'étranger → multinationale ou globale.
- **Uppsala** (Johanson et Vahlne, 1977) : engagement progressif, d'abord vers les pays proches par la **distance psychique**.
- **Born globals** : entreprises internationales dès leur création (numérique, niches technologiques).
- **EPRG** (Perlmutter, 1969) : ethnocentrique, polycentrique, régiocentrique, géocentrique.
- Taux d'exportation = CA export / CA total ; « penser global, agir local ».
`,
    exercices: md`
### Exercice 2 — Identifier l'orientation EPRG

Associez chaque comportement à une orientation EPRG :
a) Une banque marocaine crée une direction « Afrique de l'Ouest » qui définit des offres communes pour ses filiales de l'UEMOA.
b) Un fabricant de chaussures de Fès vend en Europe les mêmes modèles qu'au Maroc, avec le même catalogue.
c) Un groupe agroalimentaire laisse chaque filiale choisir ses recettes, ses marques et sa publicité.
d) Une entreprise recrute ses dirigeants dans tous les pays et conçoit une plateforme produit mondiale, déclinée localement.

<details><summary>Voir le corrigé</summary>

a) **Régiocentrique** : la région (UEMOA, monnaie et règles communes) est l'unité de décision.
b) **Ethnocentrique** : le marché national sert de modèle.
c) **Polycentrique** : chaque pays est traité comme unique.
d) **Géocentrique** : vision mondiale, talents de toutes origines, adaptation seulement où c'est utile.

</details>

### Exercice 3 — Uppsala ou born global ?

Une start-up de Rabat développe un logiciel de gestion de flottes de camions. Dès sa première année, elle a des clients au Sénégal, en France et au Canada, trouvés par sa plateforme en ligne.

1. Son parcours suit-il le modèle d'Uppsala ?
2. Quels facteurs expliquent ce cas ?
3. Quelles difficultés risque-t-elle de rencontrer ?

<details><summary>Voir le corrigé</summary>

1. Non : elle n'a pas suivi d'étapes progressives ni commencé par un seul pays proche ; c'est une entreprise **née globale**.
2. Produit **numérique** (pas de transport, coût marginal faible), vente et support **en ligne**, marché de niche international, fondateurs souvent formés à l'international, langue française partagée avec une partie des clients.
3. Ressources limitées pour servir plusieurs pays (support, mises à jour réglementaires locales), règles différentes de protection des données, encaissement des paiements en devises, concurrence de grands éditeurs, besoin de partenaires locaux pour les gros clients.

</details>
`,
    qcm: [
      { q: "Le modèle d'Uppsala décrit une internationalisation :", choix: ["Immédiate dans tous les pays", "Progressive, guidée par l'apprentissage et la distance psychique", "Imposée par l'État", "Limitée aux multinationales"], bonne: 1, explication: "Johanson et Vahlne, 1977." },
      { q: "La distance psychique désigne :", choix: ["Le nombre de kilomètres", "Les différences de langue, de culture et de pratiques des affaires", "Le coût du transport", "Le taux de change"], bonne: 1, explication: "Elle peut différer de la distance géographique." },
      { q: "Écouler une surcapacité de production à l'étranger est une motivation :", choix: ["Proactive", "Réactive", "Géocentrique", "Juridique"], bonne: 1, explication: "L'entreprise répond à une contrainte." },
      { q: "Une entreprise qui exploite à l'étranger un savoir-faire unique a une motivation :", choix: ["Réactive", "Proactive", "Polycentrique", "Passive"], bonne: 1, explication: "Elle choisit de valoriser un avantage." },
      { q: "Le modèle EPRG est dû à :", choix: ["Porter", "Perlmutter", "Hofstede", "Vernon"], bonne: 1, explication: "1969." },
      { q: "L'orientation qui traite chaque pays comme unique est :", choix: ["Ethnocentrique", "Polycentrique", "Régiocentrique", "Géocentrique"], bonne: 1, explication: "Filiales autonomes et marketing adapté." },
      { q: "Une born global est une entreprise :", choix: ["Née dans une multinationale", "Internationale dès sa création", "Qui n'exporte jamais", "Publique"], bonne: 1, explication: "Fréquente dans le numérique." },
      { q: "Le marketing multidomestique consiste à :", choix: ["Vendre le même produit partout", "Adapter le marketing de chaque filiale à son pays", "Ne vendre qu'au Maroc", "Exporter sans intermédiaire"], bonne: 1, explication: "Proche de l'orientation polycentrique." },
      { q: "Une entreprise de 40 millions de DH de CA dont 10 millions à l'export a un taux d'exportation de :", choix: ["10 %", "25 %", "40 %", "4 %"], bonne: 1, explication: "10 / 40 = 25 %." },
      { q: "La formule « penser global, agir local » correspond surtout à l'orientation :", choix: ["Ethnocentrique", "Polycentrique", "Géocentrique", "Domestique"], bonne: 2, explication: "Vision mondiale, adaptation où c'est utile." },
    ],
  },
  2: {
    titre: "L'environnement international et la culture",
    description: "PESTEL international, barrières non tarifaires, risque pays (politique, transfert, change), culture et marketing, dimensions de Hofstede et contexte de Hall.",
    resume: md`
## L'essentiel — Environnement et culture

- **PESTEL** d'un pays : politique, économique, socioculturel, technologique, environnemental, légal.
- Les **barrières non tarifaires** (normes, étiquetage, certifications) pèsent souvent plus que les droits de douane.
- **Risque pays** : politique, économique, de **transfert**, de change, juridique ; réponses : mode d'entrée léger, crédit documentaire confirmé, assurance-crédit, devise forte.
- Score de risque pondéré = somme (note × poids) ; plus il est faible, moins le pays est risqué.
- **Culture** : valeurs, croyances, normes et comportements appris et partagés ; langue, religion, esthétique, habitudes de consommation.
- **Hofstede** : distance hiérarchique, individualisme/collectivisme, masculinité/féminité, contrôle de l'incertitude, orientation long terme, indulgence/retenue.
- Limites : moyennes nationales, sous-cultures, évolution dans le temps.
- **Hall** : contexte **fort** (implicite, relation d'abord) ou **faible** (explicite, contrat d'abord) ; temps **monochrone** ou **polychrone**.
- Éviter le **critère d'auto-référence** : juger l'étranger avec ses propres normes.
`,
    exercices: md`
### Exercice 2 — Lire des dimensions culturelles

Pour chacune des situations, indiquez la dimension de Hofstede en jeu et une conséquence marketing :
a) Les clients d'un pays demandent systématiquement des garanties longues, des certificats et l'avis d'experts avant d'acheter un appareil nouveau.
b) Dans un pays, les publicités montrent surtout une réussite personnelle et la compétition.
c) Les achats importants d'un ménage se décident en famille élargie.
d) Les consommateurs achètent volontiers des marques de luxe qui affichent leur statut.

<details><summary>Voir le corrigé</summary>

a) **Contrôle de l'incertitude** élevé : multiplier garanties, labels, démonstrations, témoignages d'experts ; lancer l'innovation prudemment.
b) **Masculinité** : messages de performance, de réussite, de supériorité du produit.
c) **Collectivisme** : communication centrée sur la famille, bouche-à-oreille, offres familiales.
d) **Distance hiérarchique** forte : marques de prestige, signes extérieurs de statut, recommandations de personnalités.

</details>

### Exercice 3 — Risque de transfert

Un exportateur marocain de matériel agricole a vendu 2 500 000 DH à un client solvable d'un pays dont la banque centrale rationne les devises. Le client a déposé l'équivalent en monnaie locale à sa banque, mais le transfert est bloqué depuis 8 mois.

1. De quel risque s'agit-il ?
2. Quelles protections l'exportateur aurait-il pu prendre ?

<details><summary>Voir le corrigé</summary>

1. **Risque de transfert** (de non-transfert), composante du risque pays : le client a payé, mais les devises ne sortent pas du pays.
2. Un **crédit documentaire confirmé** par une banque marocaine ou d'un pays sûr (la banque confirmante paie même si le transfert est bloqué) ; une **assurance-crédit** export couvrant le risque politique et de non-transfert ; un acompte important à la commande ; une facturation par tranches.

</details>
`,
    qcm: [
      { q: "Les normes techniques et les règles d'étiquetage sont des :", choix: ["Droits de douane", "Barrières non tarifaires", "Subventions", "Taux de change"], bonne: 1, explication: "Elles peuvent bloquer un produit autant qu'un droit élevé." },
      { q: "Le risque de transfert correspond à :", choix: ["L'insolvabilité du client", "Le blocage des paiements en devises par les autorités du pays", "La perte en mer", "Une grève"], bonne: 1, explication: "Le client peut avoir payé en monnaie locale." },
      { q: "Le critère d'auto-référence consiste à :", choix: ["Juger un marché étranger avec ses propres références culturelles", "Consulter des experts locaux", "Faire une étude de marché", "Traduire un slogan"], bonne: 0, explication: "Source fréquente d'erreurs." },
      { q: "Hofstede a construit son modèle à partir d'enquêtes dans :", choix: ["Les universités", "Les filiales d'IBM", "Les ambassades", "Les banques centrales"], bonne: 1, explication: "Enquêtes auprès de salariés de nombreux pays." },
      { q: "Une forte acceptation des inégalités de pouvoir correspond à :", choix: ["Un individualisme élevé", "Une distance hiérarchique forte", "Une orientation court terme", "Une féminité élevée"], bonne: 1, explication: "Les marques de statut y sont valorisées." },
      { q: "Dans une culture à contexte fort selon Hall :", choix: ["Tout est écrit dans le contrat", "La relation et l'implicite comptent beaucoup", "La ponctualité est absolue", "Les messages sont très détaillés"], bonne: 1, explication: "La confiance précède le contrat." },
      { q: "Le temps polychrone se caractérise par :", choix: ["Une chose à la fois et une ponctualité stricte", "Plusieurs activités menées en parallèle et des horaires souples", "L'absence de rendez-vous", "Le travail de nuit"], bonne: 1, explication: "Opposé au temps monochrone." },
      { q: "Une limite du modèle de Hofstede est :", choix: ["Il ne compte qu'une dimension", "Il décrit des moyennes nationales qui masquent les sous-cultures", "Il ne concerne que l'Asie", "Il est interdit en marketing"], bonne: 1, explication: "Un pays contient plusieurs cultures." },
      { q: "Les petits formats à bas prix unitaire répondent surtout :", choix: ["À une contrainte de pouvoir d'achat et d'achat quotidien", "À une norme européenne", "À une forte distance hiérarchique", "Au risque de change"], bonne: 0, explication: "Fréquent en Afrique de l'Ouest." },
      { q: "Pour se protéger du risque pays sur une vente, on peut exiger :", choix: ["Une remise documentaire", "Un crédit documentaire confirmé", "Un paiement à 90 jours", "Un chèque"], bonne: 1, explication: "La banque confirmante s'engage." },
    ],
  },
  3: {
    titre: "Les études de marché internationales et la sélection des pays",
    description: "Sources documentaires (Trade Map, Office des changes, AMDIE), études terrain à l'étranger, distance CAGE, grille pondérée de sélection et potentiel de marché.",
    resume: md`
## L'essentiel — Études et sélection des pays

- L'étude internationale sert d'abord à **choisir** peu de pays et à fixer un ordre d'entrée.
- **Données secondaires** : ITC (Trade Map, Market Access Map), Comtrade, Banque mondiale, FMI, Office des changes, AMDIE, chambres de commerce ; vérifier la comparabilité (codes SH, années, monnaies).
- Terrain : équivalence **conceptuelle** et **linguistique** (double traduction), échantillonnage, biais culturels de réponse, coût.
- **CAGE** (Ghemawat) : distance culturelle, administrative, géographique, économique.
- Démarche en **entonnoir** : présélection, évaluation approfondie, choix et vérification terrain.
- $\text{Score} = \sum \text{poids} \times \text{note}$, poids de somme 1, notes orientées « plus = mieux ».
- Tester la **sensibilité** du classement aux poids.
- **Consommation apparente** = production + importations − exportations.
- Potentiel = consommation apparente × part visée × prix moyen.
`,
    exercices: md`
### Exercice 2 — Consommation apparente et tendance

Pour un pays, les données des huiles d'olive sont (en tonnes) :

| Année | Production | Importations | Exportations |
|---|---|---|---|
| 2023 | 5 000 | 18 000 | 3 000 |
| 2025 | 4 500 | 24 500 | 2 000 |

1. Calculez la consommation apparente des deux années et son taux de croissance.
2. Calculez la part des importations dans la consommation en 2025. Que conclure pour un exportateur marocain ?

<details><summary>Voir le corrigé</summary>

1. 2023 : 5 000 + 18 000 − 3 000 = **20 000 t** ; 2025 : 4 500 + 24 500 − 2 000 = **27 000 t**. Croissance sur deux ans : 27 000 / 20 000 − 1 = **35 %**, soit environ 16,2 % par an ($\sqrt{1{,}35} - 1$).
2. Part des importations = 24 500 / 27 000 = **90,7 %** (en admettant que les importations sont consommées sur place). Le marché grandit et dépend presque entièrement des importations : il est attractif. Il faut vérifier sur Trade Map qui sont les fournisseurs actuels et le droit appliqué à l'huile marocaine.

</details>

### Exercice 3 — Distance CAGE

Comparez, selon les quatre dimensions CAGE, la distance entre le Maroc et (a) le Sénégal, (b) le Canada, pour un fabricant marocain de produits cosmétiques.

<details><summary>Voir le corrigé</summary>

| Dimension | Sénégal | Canada |
|---|---|---|
| Culturelle | Faible : langue française, religion majoritaire commune, liens anciens | Moyenne : français au Québec, diaspora marocaine, mais culture nord-américaine |
| Administrative | Moyenne : pas d'accord de libre-échange bilatéral complet, mais coopération étroite et cadre de la ZLECAf | Moyenne à forte : normes cosmétiques strictes, enregistrement des produits |
| Géographique | Moyenne : liaison routière par la Mauritanie, liaisons maritimes et aériennes | Forte : traversée de l'Atlantique |
| Économique | Moyenne : pouvoir d'achat plus faible, petits formats | Forte côté revenus, mais clients exigeants et concurrence internationale |

Le Sénégal apparaît **plus proche** au total ; le Canada peut convenir à une offre premium ciblant la diaspora et le Québec.

</details>
`,
    qcm: [
      { q: "Trade Map est un outil de :", choix: ["L'OMC", "L'ITC (Centre du commerce international)", "Bank Al-Maghrib", "La CCI"], bonne: 1, explication: "Statistiques d'importation et d'exportation par produit." },
      { q: "La consommation apparente se calcule par :", choix: ["Production + exportations − importations", "Production + importations − exportations", "Importations seules", "Production × prix"], bonne: 1, explication: "Estimation de ce qui est consommé dans le pays." },
      { q: "La double traduction d'un questionnaire vise :", choix: ["À réduire son coût", "À vérifier l'équivalence linguistique", "À doubler l'échantillon", "À éviter les sondages"], bonne: 1, explication: "On retraduit vers la langue d'origine." },
      { q: "Le cadre CAGE est dû à :", choix: ["Ghemawat", "Hofstede", "Kotler", "Perlmutter"], bonne: 0, explication: "2001." },
      { q: "Dans CAGE, un accord de libre-échange réduit la distance :", choix: ["Culturelle", "Administrative", "Géographique", "Économique"], bonne: 1, explication: "Elle inclut les institutions et accords." },
      { q: "La première étape de la sélection des pays est :", choix: ["La signature d'un contrat", "La présélection pour éliminer les pays inaccessibles", "La création d'une filiale", "La fixation du prix"], bonne: 1, explication: "Démarche en entonnoir." },
      { q: "Dans une grille pondérée, les poids doivent :", choix: ["Être tous égaux", "Avoir une somme égale à 1 (100 %)", "Être négatifs pour les risques", "Dépasser 1"], bonne: 1, explication: "On oriente les notes dans le même sens." },
      { q: "Un pays avec 4 de note sur un critère pesant 25 % y obtient :", choix: ["0,25", "1", "4", "4,25"], bonne: 1, explication: "4 × 0,25 = 1." },
      { q: "Tester la sensibilité d'une grille consiste à :", choix: ["Changer de pays", "Modifier les poids pour voir si le classement change", "Supprimer un critère", "Doubler les notes"], bonne: 1, explication: "Un classement instable rend la décision fragile." },
      { q: "Les statistiques du commerce extérieur marocain sont publiées par :", choix: ["L'Office des changes", "L'ONSSA", "L'AMMC", "La CNSS"], bonne: 0, explication: "Par produit et par pays." },
    ],
  },
  4: {
    titre: "Les modes d'entrée sur les marchés étrangers",
    description: "Exportation indirecte et directe, agent ou importateur, licence, franchise, coentreprise, filiale, paradigme OLI et seuil de rentabilité d'une filiale de vente.",
    resume: md`
## L'essentiel — Les modes d'entrée

- Trois familles : **exportation**, **accords contractuels**, **investissement direct** ; engagement, contrôle et risque croissants.
- Export **indirect** : négociant, centrale d'achat, **consortium** d'exportateurs, **portage** ; peu de risque, aucun contrôle.
- **Agent** : mandataire, négocie au nom de l'exportateur, **commission** ; **importateur** : achète, stocke, revend, **marge**, supporte l'impayé.
- Bureau de représentation (prospection), succursale, **filiale de vente** (société locale).
- **Licence** (droit d'exploiter brevet ou marque contre redevance) ; **franchise** (marque + savoir-faire + assistance) ; sous-traitance internationale.
- **Coentreprise** : capital et contrôle partagés avec un partenaire local ; **filiale** créée ou acquise : contrôle total.
- **OLI** (Dunning) : avantage spécifique, avantage de localisation, intérêt à internaliser.
- Critères : ressources, contrôle, risque, potentiel, obstacles à l'importation, flexibilité.
- $\text{Seuil} = \dfrac{\text{coûts fixes de la filiale}}{\text{taux variable intermédiaire} - \text{taux variable filiale}}$
`,
    exercices: md`
### Exercice 2 — Licence ou filiale de production ?

Un fabricant marocain de peintures veut servir un pays d'Afrique de l'Ouest qui applique un droit d'importation élevé. Option 1 : licence à un fabricant local, redevance de 5 % sur des ventes prévues de 40 millions de DH par an. Option 2 : filiale de production : investissement de 30 millions de DH, résultat annuel attendu de 6 millions de DH.

1. Calculez le revenu annuel de la licence et le délai de récupération de l'investissement de la filiale (sans actualisation).
2. Citez deux risques de chaque option et formulez une recommandation.

<details><summary>Voir le corrigé</summary>

1. Licence : 40 000 000 × 5 % = **2 000 000 DH** par an, sans investissement. Filiale : délai de récupération = 30 / 6 = **5 ans**, puis 6 millions de DH par an.
2. Licence : le licencié peut devenir un **concurrent** à la fin du contrat ; contrôle limité de la **qualité** et de l'image de marque. Filiale : **risque pays** sur un investissement lourd (change, transfert des dividendes, instabilité) ; besoin de **compétences** de gestion à distance. Recommandation : si le marché est jugé stable et grand, la filiale (éventuellement en **coentreprise** avec un distributeur local pour partager le risque) ; sinon, commencer par la licence avec des clauses de qualité et de non-concurrence, et une option de rachat.

</details>

### Exercice 3 — Classer des modes d'entrée

Classez du moins engageant au plus engageant, et dites à quelle famille appartient chacun : filiale de vente ; vente à un négociant casablancais qui exporte ; franchise ; agent commercial à Lyon ; rachat d'une usine au Sénégal ; coentreprise avec un groupe ivoirien.

<details><summary>Voir le corrigé</summary>

1. Vente à un négociant casablancais (**export indirect**).
2. Agent commercial à Lyon (**export direct**).
3. Franchise (**accord contractuel**).
4. Filiale de vente (**IDE** commercial).
5. Coentreprise avec un groupe ivoirien (**IDE** partagé).
6. Rachat d'une usine au Sénégal (**IDE** de production, contrôle total).

On peut discuter l'ordre entre la filiale de vente et la coentreprise : la coentreprise de production engage plus de capitaux, mais le contrôle est partagé.

</details>
`,
    qcm: [
      { q: "L'agent commercial :", choix: ["Achète et revend la marchandise", "Négocie au nom et pour le compte de l'exportateur contre une commission", "Est une filiale", "Est un licencié"], bonne: 1, explication: "Il ne devient pas propriétaire." },
      { q: "Avec un importateur-distributeur, le risque d'impayé des clients finaux est supporté par :", choix: ["L'exportateur", "L'importateur", "L'agent", "La banque centrale"], bonne: 1, explication: "Il achète et revend en son nom." },
      { q: "Un consortium d'exportation est :", choix: ["Un groupement de PME qui mutualisent leur prospection à l'export", "Une banque", "Une filiale de production", "Un contrat de licence"], bonne: 0, explication: "Forme d'exportation indirecte ou concertée." },
      { q: "La franchise appartient à la famille des :", choix: ["Exportations indirectes", "Accords contractuels", "Investissements directs", "Ventes en ligne"], bonne: 1, explication: "Marque, savoir-faire et assistance contre redevances." },
      { q: "Le principal risque d'une licence est :", choix: ["L'investissement trop lourd", "La création d'un futur concurrent", "L'absence de redevance", "Le risque de change nul"], bonne: 1, explication: "Le licencié s'approprie le savoir-faire." },
      { q: "Une coentreprise se caractérise par :", choix: ["Un capital détenu à 100 % par l'exportateur", "Un capital et un contrôle partagés avec un partenaire", "L'absence de société", "Une simple commission"], bonne: 1, explication: "Joint venture." },
      { q: "Dans le paradigme OLI, le I signifie :", choix: ["Inflation", "Internalisation", "Innovation", "Importation"], bonne: 1, explication: "Intérêt à garder l'activité en interne." },
      { q: "Des droits d'importation élevés dans le pays cible poussent plutôt vers :", choix: ["L'exportation directe", "La production locale (licence ou IDE)", "L'exportation indirecte", "Le portage"], bonne: 1, explication: "Avantage de localisation." },
      { q: "Une filiale de vente coûte 900 000 DH fixes et fait économiser 6 % du CA par rapport à un agent. Le seuil est :", choix: ["5,4 millions de DH", "9 millions de DH", "15 millions de DH", "54 millions de DH"], bonne: 2, explication: "900 000 / 0,06 = 15 000 000." },
      { q: "Le mode d'entrée qui offre le contrôle le plus élevé est :", choix: ["L'agent", "La licence", "La filiale à 100 %", "Le négociant"], bonne: 2, explication: "Au prix de l'engagement le plus lourd." },
    ],
  },
  5: {
    titre: "Le produit et la marque à l'international",
    description: "Standardisation ou adaptation, adaptations obligatoires et volontaires, stratégies de Keegan, cycle de Vernon, marque, système de Madrid et effet d'origine.",
    resume: md`
## L'essentiel — Produit et marque

- **Standardisation** (économies d'échelle, image cohérente, Levitt 1983) ou **adaptation** (goûts, normes, pouvoir d'achat) : en pratique, on combine.
- Adaptations **obligatoires** : normes techniques et sanitaires, étiquetage, langue, halal ; **volontaires** : goût, format, design, gamme.
- **Keegan** : extension directe ; adaptation de la communication ; adaptation du produit ; double adaptation ; invention.
- **Vernon** (1966) : le produit passe du pays innovateur aux pays développés puis aux pays à bas coûts ; phases différentes selon les marchés.
- Marque **globale**, marques **locales**, portefeuille mixte, marque de **distributeur**.
- Protection **territoriale** : dépôt à l'**OMPIC** au Maroc, **système de Madrid** (OMPI) pour l'étranger ; déposer avant de lancer.
- **Effet pays d'origine** : l'image du pays influence la qualité perçue et le prix accepté.
- Signes d'origine marocains : argane, safran de Taliouine, clémentine de Berkane ; certifications bio, équitable, halal.
- Adapter si le supplément de marge couvre le **coût d'adaptation**.
`,
    exercices: md`
### Exercice 2 — Choisir une stratégie de Keegan

Indiquez la stratégie de Keegan adaptée à chaque cas :
a) Un éditeur marocain de logiciels de paie vend la même application en Tunisie, avec la même publicité en français.
b) Un fabricant de climatiseurs renforce ses compresseurs pour les pays du Golfe, sans changer sa publicité sur le confort.
c) Une marque de thé à la menthe vendue au Maroc comme boisson de l'hospitalité est présentée en Europe comme boisson « détox ».
d) Une entreprise conçoit pour l'Afrique rurale une lampe solaire à bas prix qui recharge aussi les téléphones.

<details><summary>Voir le corrigé</summary>

a) **Extension directe** (produit et communication identiques), à condition d'adapter les règles de paie tunisiennes, ce qui est en réalité une adaptation obligatoire du produit.
b) **Adaptation du produit**, communication identique.
c) **Adaptation de la communication**, produit identique.
d) **Invention** d'un produit pour un besoin spécifique.

</details>

### Exercice 3 — Protéger une marque

Une marque marocaine de cosmétiques, « Tafsout », vend depuis trois ans au Maroc. Elle découvre qu'un distributeur a déposé « Tafsout » en Espagne il y a six mois.

1. Pourquoi ce dépôt est-il possible ?
2. Que peut faire l'entreprise et que devait-elle faire avant ?

<details><summary>Voir le corrigé</summary>

1. La protection d'une marque est **territoriale** : le dépôt à l'OMPIC ne protège qu'au Maroc. En Espagne, le premier déposant est en principe titulaire.
2. Elle peut contester le dépôt (opposition ou action en nullité pour mauvaise foi si elle prouve que le distributeur connaissait sa marque), négocier un rachat, ou lancer ses produits sous un autre nom. Elle aurait dû faire une **demande internationale par le système de Madrid** (ou un dépôt de marque de l'Union européenne) avant de prospecter l'Europe, et prévoir dans ses contrats de distribution une clause interdisant le dépôt de sa marque.

</details>
`,
    qcm: [
      { q: "Theodore Levitt a défendu en 1983 :", choix: ["L'adaptation systématique", "La standardisation favorisée par la mondialisation des goûts", "Le protectionnisme", "Les marques locales"], bonne: 1, explication: "The Globalization of Markets." },
      { q: "Traduire l'étiquette dans la langue officielle du pays est une adaptation :", choix: ["Volontaire", "Obligatoire", "Inutile", "Publicitaire"], bonne: 1, explication: "Imposée par la réglementation." },
      { q: "Garder le produit et changer la publicité correspond chez Keegan à :", choix: ["L'extension directe", "L'adaptation de la communication", "La double adaptation", "L'invention"], bonne: 1, explication: "Même produit, autre usage ou autre motivation." },
      { q: "Le cycle de vie international du produit est dû à :", choix: ["Vernon", "Keegan", "Levitt", "Dunning"], bonne: 0, explication: "1966." },
      { q: "Au Maroc, une marque se dépose auprès de :", choix: ["L'AMMC", "L'OMPIC", "L'ONSSA", "L'ADII"], bonne: 1, explication: "Office marocain de la propriété industrielle et commerciale." },
      { q: "Le système de Madrid permet :", choix: ["De déposer une marque dans de nombreux pays par une demande unique", "D'obtenir un crédit documentaire", "De classer les marchandises", "De fixer les droits de douane"], bonne: 0, explication: "Géré par l'OMPI." },
      { q: "Une marque de distributeur appartient :", choix: ["Au fabricant", "À l'enseigne qui vend le produit", "À l'État", "À l'importateur seulement"], bonne: 1, explication: "Le fabricant n'a pas de notoriété propre." },
      { q: "L'effet pays d'origine désigne :", choix: ["Le droit de douane selon l'origine", "L'influence de l'image du pays sur la perception du produit", "Le certificat EUR.1", "Le pays de livraison"], bonne: 1, explication: "Il joue sur la qualité perçue et le prix." },
      { q: "Une adaptation coûte 300 000 DH fixes et 2 DH par unité ; la marge unitaire passe de 10 à 8 DH. Elle est rentable si :", choix: ["Les ventes adaptées dépassent les ventes standard", "8 × ventes adaptées − 300 000 dépasse 10 × ventes standard", "Les ventes doublent toujours", "La marge unitaire augmente"], bonne: 1, explication: "On compare les marges totales." },
      { q: "Concevoir un produit nouveau pour un besoin propre à un marché correspond à :", choix: ["L'extension", "L'invention", "L'adaptation de la communication", "La marque globale"], bonne: 1, explication: "Cinquième stratégie de Keegan." },
    ],
  },
  6: {
    titre: "Le prix à l'international",
    description: "Facteurs du prix export, escalade des prix, remontée d'un prix cible au prix départ usine, risque de change, dumping, marché gris et prix de transfert.",
    resume: md`
## L'essentiel — Le prix à l'international

- Facteurs propres : coûts d'export, pouvoir d'achat, concurrence locale, réglementation, **change** et inflation.
- Prix d'export au **coût marginal** possible si le marché national couvre les fixes, sous réserve de l'antidumping.
- **Escalade des prix** : transport, droits, TVA et marges successives (chaque marge sur un prix qui inclut les précédentes).
- Limiter l'escalade : circuit plus court, origine préférentielle, assemblage local, transport optimisé, version de base.
- Remontée : diviser par (1 + TVA), par (1 + marge) de chaque intermédiaire, par (1 + droit), puis retrancher le transport : **EXW maximal**.
- Facturer en dirhams (pas de risque pour l'exportateur) ou en devise (risque de change) ; **vente à terme**, options, clauses d'indexation.
- **Dumping** : prix export < valeur normale ; droits antidumping (OMC) si dommage.
- **Marché gris** : importations parallèles dues aux écarts de prix ; **corridor de prix**.
- **Prix de transfert** entre sociétés d'un groupe : principe de **pleine concurrence**.
`,
    exercices: md`
### Exercice 2 — Mesurer l'escalade

Un fabricant de Casablanca vend des chaussures 200 DH départ usine. Transport et assurance : 15 DH. Droit de douane : 8 % de la valeur CIF. Importateur : marge de 25 % ; détaillant : marge de 40 %. TVA : 20 %.

1. Calculez le prix TTC au consommateur et le coefficient d'escalade.
2. Quel serait le prix TTC si l'importateur vendait directement en ligne au consommateur avec une marge de 45 %, sans détaillant ?

<details><summary>Voir le corrigé</summary>

1. CIF = 215 DH ; avec droit : 215 × 1,08 = 232,20 DH ; importateur : 232,20 × 1,25 = 290,25 DH ; détaillant : 290,25 × 1,40 = 406,35 DH ; TTC : 406,35 × 1,20 = **487,62 DH**. Coefficient = 487,62 / 200 = **2,44**.
2. 232,20 × 1,45 = 336,69 DH HT ; TTC : 336,69 × 1,20 = **404,03 DH**, soit 83,59 DH de moins pour le consommateur.

</details>

### Exercice 3 — Risque de change

Un exportateur facture 100 000 euros payables dans 3 mois. Cours au comptant à la signature : 1 euro = 10,90 DH. Sa banque lui propose une vente à terme à 3 mois à 10,85 DH.

1. Combien encaissera-t-il avec la vente à terme ?
2. Comparez avec l'absence de couverture si, à l'échéance, l'euro vaut 10,70 DH, puis 11,05 DH. Conclusion ?

<details><summary>Voir le corrigé</summary>

1. 100 000 × 10,85 = **1 085 000 DH**, connus dès la signature.
2. Sans couverture : à 10,70, il encaisse 1 070 000 DH (15 000 DH de moins qu'avec le terme) ; à 11,05, il encaisse 1 105 000 DH (20 000 DH de plus). La vente à terme supprime à la fois la perte et le gain possibles : elle sert à **garantir** la marge prévue au moment du prix, pas à spéculer.

</details>
`,
    qcm: [
      { q: "L'escalade des prix est due notamment :", choix: ["À la baisse des droits de douane", "À l'accumulation du transport, des droits, de la TVA et des marges successives", "Au taux de change fixe", "À la vente en ligne"], bonne: 1, explication: "Chaque marge porte sur un prix déjà augmenté." },
      { q: "Pour remonter d'un prix de vente à un prix d'achat avec une marge de 25 % sur le coût d'achat, on :", choix: ["Retranche 25 %", "Divise par 1,25", "Multiplie par 0,25", "Ajoute 25 %"], bonne: 1, explication: "Prix de vente = prix d'achat × 1,25." },
      { q: "Le moyen le plus direct de réduire l'escalade est :", choix: ["Ajouter un grossiste", "Raccourcir le circuit de distribution", "Augmenter le fret", "Facturer en dollars"], bonne: 1, explication: "Chaque intermédiaire ajoute une marge." },
      { q: "Facturer en dirhams fait supporter le risque de change :", choix: ["À l'exportateur marocain", "À l'acheteur étranger", "À la banque centrale", "Au transporteur"], bonne: 1, explication: "L'acheteur paie dans une monnaie qui n'est pas la sienne." },
      { q: "La vente à terme de devises permet à l'exportateur :", choix: ["De spéculer à la hausse", "De fixer dès la signature le cours auquel il convertira ses devises", "D'éviter la TVA", "De réduire les droits de douane"], bonne: 1, explication: "Couverture du risque de change." },
      { q: "Le dumping est une vente à l'export :", choix: ["À un prix supérieur au prix national", "À un prix inférieur à la valeur normale", "Sans facture", "En devises"], bonne: 1, explication: "Il peut entraîner des droits antidumping." },
      { q: "Les importations parallèles sont favorisées par :", choix: ["Des prix identiques partout", "De grands écarts de prix entre pays", "Les droits antidumping", "Le crédit documentaire"], bonne: 1, explication: "D'où le corridor de prix." },
      { q: "Les prix de transfert concernent :", choix: ["Les ventes entre sociétés indépendantes", "Les échanges entre sociétés d'un même groupe dans des pays différents", "Les frais de transport", "Les prix de détail"], bonne: 1, explication: "Ils doivent respecter la pleine concurrence." },
      { q: "Un produit à 50 DH EXW coûte 120 DH au consommateur étranger. Le coefficient d'escalade est :", choix: ["0,42", "1,2", "2,4", "70"], bonne: 2, explication: "120 / 50 = 2,4." },
      { q: "Fixer le prix d'export au coût marginal est possible si :", choix: ["Les coûts fixes sont déjà couverts par le marché national", "L'entreprise n'a aucun client national", "Le pays importateur l'impose", "Le dirham s'apprécie"], bonne: 0, explication: "Sous réserve des règles antidumping." },
    ],
  },
  7: {
    titre: "Distribution et communication internationales",
    description: "Circuits de distribution à l'étranger, choix et contrats d'intermédiaires, salons et coût par contact, e-export, communication standardisée ou adaptée.",
    resume: md`
## L'essentiel — Distribution et communication

- Le circuit local diffère du circuit marocain : grande distribution, commerce traditionnel, distributeurs familiaux.
- Décisions : **longueur**, **couverture** (intensive, sélective, exclusive), **contrôle**.
- Sélection des intermédiaires : connaissance du marché, couverture, solidité, moyens, produits complémentaires, motivation.
- Contrat : territoire, **exclusivité contre objectifs**, obligations, prix et paiement, marque, durée et résiliation, **droit applicable et arbitrage**.
- **Salon** : préparer les rendez-vous, qualifier, relancer ; coût par contact qualifié = coût / contacts qualifiés.
- Contribution = clients × CA moyen × taux de marge − coût du salon.
- **E-export** : site propre, places de marché (commission), réseaux sociaux ; logistique des petits colis, retours, TVA du pays de destination.
- Communication **standardisée**, **adaptée** ou **modèle-cadre** (plateforme commune déclinée localement).
- Contraintes : langue, réglementation publicitaire, médias disponibles, codes culturels ; marque pays **Morocco Now** (AMDIE, 2022).
`,
    exercices: md`
### Exercice 2 — Couverture du marché

Pour chaque produit marocain exporté, proposez une couverture (intensive, sélective, exclusive) et justifiez : a) biscuits vendus en Afrique de l'Ouest ; b) tapis berbères haut de gamme vendus à Paris ; c) pièces de rechange pour engins agricoles au Sénégal.

<details><summary>Voir le corrigé</summary>

a) **Intensive** : produit de consommation courante, achat d'impulsion, présence maximale dans les boutiques de quartier et les marchés.
b) **Exclusive** ou très **sélective** : image de luxe, besoin de conseil et de mise en scène, prix élevé ; quelques galeries et décorateurs.
c) **Sélective** : quelques distributeurs spécialisés capables de stocker, conseiller et assurer le service après-vente dans les régions agricoles.

</details>

### Exercice 3 — Place de marché ou site propre ?

Une marque de babouches de Marrakech vend en ligne en Europe. Prix de vente moyen : 400 DH. Sur une place de marché : commission de 15 % et frais logistiques de 60 DH par paire, 3 000 paires par an prévues. Sur son site : publicité en ligne de 180 000 DH par an et frais logistiques de 75 DH par paire, 2 000 paires prévues. Coût de fabrication : 120 DH par paire.

1. Calculez la marge annuelle de chaque solution.
2. Quels autres critères comptent ?

<details><summary>Voir le corrigé</summary>

1. Place de marché : marge unitaire = 400 − 60 − 120 − 15 % × 400 = 400 − 60 − 120 − 60 = 160 DH ; total = 3 000 × 160 = **480 000 DH**. Site propre : marge unitaire = 400 − 75 − 120 = 205 DH ; total = 2 000 × 205 − 180 000 = 410 000 − 180 000 = **230 000 DH**. La place de marché est plus rentable à ces volumes.
2. Le site propre construit la **marque** et la relation directe (données clients, fidélisation, prix maîtrisés) ; la place de marché impose ses règles, peut changer ses commissions et met le produit à côté de concurrents. Beaucoup d'entreprises combinent les deux.

</details>
`,
    qcm: [
      { q: "Une couverture exclusive consiste à :", choix: ["Vendre dans tous les points de vente", "Confier une zone à un seul distributeur", "Vendre uniquement en ligne", "Ne pas exporter"], bonne: 1, explication: "Adaptée aux produits de luxe ou techniques." },
      { q: "Accorder une exclusivité sans objectif minimal risque :", choix: ["D'augmenter les ventes", "Que le distributeur gèle le marché", "De supprimer la TVA", "De réduire le fret"], bonne: 1, explication: "L'exclusivité se lie à des objectifs." },
      { q: "La clause de droit applicable fixe :", choix: ["Le prix", "La loi qui régit le contrat", "Le territoire", "Le mode de transport"], bonne: 1, explication: "Avec le tribunal compétent ou l'arbitrage." },
      { q: "Un salon de 150 000 DH qui donne 50 contacts qualifiés coûte par contact qualifié :", choix: ["300 DH", "3 000 DH", "30 000 DH", "7 500 DH"], bonne: 1, explication: "150 000 / 50." },
      { q: "Le pavillon national dans un salon permet surtout aux PME :", choix: ["D'éviter les visas", "De réduire le coût du stand et de gagner en visibilité", "De supprimer les droits de douane", "De vendre sans contrat"], bonne: 1, explication: "Organisé par l'organisme de promotion des exportations." },
      { q: "Une place de marché se rémunère principalement par :", choix: ["Une commission sur les ventes", "Un droit de douane", "Une redevance de licence", "La TVA"], bonne: 0, explication: "Elle apporte du trafic." },
      { q: "Le modèle-cadre en communication internationale consiste à :", choix: ["Tout standardiser", "Tout adapter", "Garder une plateforme commune déclinée localement", "Supprimer la publicité"], bonne: 2, explication: "Pattern standardization." },
      { q: "Avant de diffuser un slogan à l'étranger, il faut surtout :", choix: ["Le traduire mot à mot", "Tester son sens et ses connotations localement", "Le raccourcir", "Le mettre en majuscules"], bonne: 1, explication: "Une traduction littérale peut être maladroite." },
      { q: "La marque Morocco Now a été lancée par :", choix: ["L'ONMT", "L'AMDIE", "L'OMPIC", "Bank Al-Maghrib"], bonne: 1, explication: "En 2022, pour l'investissement et l'export." },
      { q: "Un des principaux défis logistiques de l'e-export est :", choix: ["La gestion des retours", "Le vrac", "L'affrètement au voyage", "Le crédit documentaire"], bonne: 0, explication: "Avec la TVA du pays de destination." },
    ],
  },
};

export default chapitres;
