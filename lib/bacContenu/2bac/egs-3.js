// Économie générale & Statistiques — 2ème Bac (chapitres 11 à 17).
const md = String.raw;

export default {
  "les-fondements-theoriques-des-echanges-exterieurs": {
    cours: md`
## Introduction

Aucun pays ne produit tout ce dont il a besoin. Pourquoi les nations échangent-elles entre elles, et qui gagne à l'échange ? Plusieurs théories répondent à ces questions.

## I. Les raisons de l'échange international

- **Inégale répartition des ressources naturelles** (phosphates au Maroc, pétrole ailleurs) ;
- **Différences de climat** (produits agricoles) ;
- **Différences de technologie et de savoir-faire** ;
- **Différences de coûts de production** ;
- **Recherche de débouchés** et de diversité pour les consommateurs.

## II. Les théories libérales du libre-échange

### 1. Adam Smith : l'avantage absolu (1776)

Chaque pays doit se **spécialiser** dans la production du bien pour lequel il est **le plus efficace** (coût de production le plus faible en travail) et importer les autres. Limite : un pays qui n'a **aucun** avantage absolu serait exclu de l'échange.

### 2. David Ricardo : l'avantage comparatif (1817)

Même un pays moins efficace dans toutes les productions a intérêt à échanger. Il doit se spécialiser dans le bien pour lequel son **désavantage est le plus faible** (ou son avantage relatif le plus fort).

**Exemple de Ricardo** (quantité de travail, en heures, pour produire une unité) :

| | Drap | Vin |
|---|---|---|
| Angleterre | 100 | 120 |
| Portugal | 90 | 80 |

- Le Portugal a un avantage absolu dans les **deux** biens.
- Coût relatif du vin (en drap) : Portugal $\frac{80}{90} \approx 0{,}89$ ; Angleterre $\frac{120}{100} = 1{,}2$ → le Portugal a un **avantage comparatif dans le vin**.
- Coût relatif du drap (en vin) : Angleterre $\frac{100}{120} \approx 0{,}83$ ; Portugal $\frac{90}{80} = 1{,}125$ → l'Angleterre a un **avantage comparatif dans le drap**.

**Gain de la spécialisation** : sans échange, les deux pays utilisent $100 + 120 + 90 + 80 = 390$ heures pour produire 2 draps et 2 vins. Avec spécialisation, l'Angleterre produit 2 draps (200 h) et le Portugal 2 vins (160 h) : $360$ heures seulement. **Le monde économise 30 heures de travail.**

### 3. Le théorème HOS (Heckscher, Ohlin, Samuelson)

Chaque pays se spécialise dans les productions qui utilisent intensivement le **facteur de production dont il est le mieux doté** :

- pays riches en **main-d'œuvre** → produits intensifs en travail (textile) ;
- pays riches en **capital** → produits intensifs en capital (aéronautique).

## III. Les théories protectionnistes

### 1. Les mercantilistes (XVIe–XVIIIe siècles)

La richesse d'une nation repose sur l'accumulation de **métaux précieux** : il faut **exporter plus qu'importer** (excédent commercial).

### 2. Friedrich List : le protectionnisme éducateur (1841)

Les **industries naissantes** doivent être **protégées temporairement** de la concurrence étrangère le temps de devenir compétitives, puis la protection est levée.

### 3. Les arguments contemporains

Protéger l'emploi, les secteurs stratégiques (alimentation, énergie), lutter contre le **dumping** et la concurrence déloyale.

## IV. Les nouvelles théories

- **Échange intra-branche** : les pays riches échangent des produits similaires mais **différenciés** (voitures contre voitures) ;
- **Économies d'échelle** : produire en grande quantité réduit les coûts unitaires ;
- **Avantages construits** : un avantage peut être **créé** par l'État et les entreprises (recherche, formation, infrastructures). L'exemple de l'industrie automobile et aéronautique au Maroc l'illustre.
`,
    exercices: md`
### Exercice 1 — Avantage comparatif (données fictives)

Heures de travail nécessaires pour produire une unité :

| | Tomates | Tissus |
|---|---|---|
| Pays A | 10 | 20 |
| Pays B | 30 | 25 |

Sans échange, chaque pays produit 1 unité de chaque bien.

1. Quel pays a un avantage absolu dans chaque bien ?
2. Déterminez les avantages comparatifs.
3. Calculez le gain de la spécialisation pour produire au total 2 unités de chaque bien.

<details><summary>Voir le corrigé</summary>

1. Le **pays A** a un avantage absolu dans les deux biens (10 < 30 et 20 < 25).
2. Coût relatif des tomates (en tissus) : A $= \frac{10}{20} = 0{,}5$ ; B $= \frac{30}{25} = 1{,}2$ → **A** a l'avantage comparatif dans les **tomates**.
   Coût relatif des tissus (en tomates) : A $= \frac{20}{10} = 2$ ; B $= \frac{25}{30} \approx 0{,}83$ → **B** a l'avantage comparatif dans les **tissus**.
3. Sans spécialisation : A utilise $10 + 20 = 30$ h et B $30 + 25 = 55$ h, soit $85$ h au total.
   Avec spécialisation : A produit 2 tomates ($2 \times 10 = 20$ h) et B produit 2 tissus ($2 \times 25 = 50$ h), soit $70$ h.
   **Gain : $85 - 70 = 15$ heures de travail.** Les deux pays y gagnent (A économise 10 h, B économise 5 h), même si B n'a aucun avantage absolu : c'est la thèse de Ricardo.

</details>

### Exercice 2 — Question de cours

Expliquez la différence entre la théorie de Smith et celle de Ricardo, puis présentez l'argument de F. List.

<details><summary>Voir le corrigé</summary>

- **Smith** : spécialisation selon l'**avantage absolu** ; un pays sans avantage absolu ne peut pas participer à l'échange.
- **Ricardo** : spécialisation selon l'**avantage comparatif** ; tous les pays gagnent à l'échange, même le moins efficace.
- **List** : protectionnisme **éducateur** et **temporaire** pour permettre aux industries naissantes de devenir compétitives.

</details>
`,
    resume: md`
## L'essentiel — Fondements des échanges

- **Raisons** : ressources, climat, technologie, coûts, débouchés.
- **Smith** : avantage **absolu** → spécialisation dans ce qu'on produit le moins cher.
- **Ricardo** : avantage **comparatif** → spécialisation là où le désavantage est le plus faible ; tout le monde gagne.
- **HOS** : spécialisation selon la **dotation factorielle** (travail / capital).
- **Mercantilistes** : excédent commercial, accumuler l'or.
- **List** : **protectionnisme éducateur** et temporaire des industries naissantes.
- **Nouvelles théories** : échange intra-branche, économies d'échelle, **avantages construits**.
`,
    qcm: [
      { q: "La théorie des avantages comparatifs est due à :", choix: ["Adam Smith", "David Ricardo", "Friedrich List", "Keynes"], bonne: 1, explication: "Ricardo, Principes de l'économie politique et de l'impôt (1817)." },
      { q: "Selon HOS, un pays abondant en main-d'œuvre se spécialise dans :", choix: ["Les produits intensifs en capital", "Les produits intensifs en travail", "Les services financiers", "Aucune production"], bonne: 1, explication: "Il utilise le facteur dont il est le mieux doté." },
      { q: "Le protectionnisme éducateur vise à :", choix: ["Fermer définitivement les frontières", "Protéger temporairement les industries naissantes", "Accumuler de l'or", "Supprimer les exportations"], bonne: 1, explication: "C'est la thèse de F. List." },
      { q: "Pour les mercantilistes, la richesse repose sur :", choix: ["Le travail", "L'accumulation de métaux précieux", "La terre", "Le capital humain"], bonne: 1, explication: "D'où la recherche d'un excédent commercial." },
      { q: "L'échange de voitures entre deux pays industrialisés est un échange :", choix: ["Inter-branche", "Intra-branche", "Mercantiliste", "Protectionniste"], bonne: 1, explication: "Produits similaires mais différenciés." },
    ],
  },

  "mesure-et-analyse-des-echanges-exterieurs": {
    cours: md`
## Introduction

Pour connaître la place d'un pays dans les échanges internationaux, on utilise un document comptable, la **balance des paiements**, et des **indicateurs** calculés à partir des exportations, des importations et du PIB. Au Maroc, la balance des paiements est établie par l'**Office des changes**.

## I. La balance des paiements

> La **balance des paiements** est un document statistique qui enregistre l'ensemble des **opérations** réalisées pendant une période entre les **résidents** et les **non-résidents**.

Elle est présentée selon le 6ᵉ manuel du FMI (MBP6) :

### 1. Le compte des transactions courantes

| Composante | Contenu |
|---|---|
| **Biens** | Exportations et importations de marchandises (balance commerciale) |
| **Services** | Voyages (tourisme), transport, services aux entreprises, sous-traitance… |
| **Revenus primaires** | Revenus du travail et des investissements (intérêts, dividendes) |
| **Revenus secondaires** | Transferts courants : transferts des MRE, dons, aides |

### 2. Le compte de capital

Transferts en capital (remises de dettes, dons d'investissement) et acquisitions ou cessions d'actifs non financiers non produits (brevets, marques).

### 3. Le compte financier

- **Investissements directs étrangers (IDE)** : prise de contrôle ou participation durable (au moins 10 % du capital) ;
- **Investissements de portefeuille** : achats d'actions et d'obligations sans contrôle ;
- **Autres investissements** : prêts, crédits commerciaux, dépôts ;
- **Avoirs de réserve** : réserves de change détenues par Bank Al-Maghrib.

La balance des paiements est **toujours équilibrée comptablement** (principe de la partie double) : un déficit courant est financé par des entrées de capitaux ou une baisse des réserves.

## II. Les soldes

- **Solde de la balance commerciale** $= X_{\text{biens}} - M_{\text{biens}}$ ;
- **Solde du compte courant** $=$ biens $+$ services $+$ revenus primaires $+$ revenus secondaires.

Le Maroc a une **balance commerciale structurellement déficitaire** (importations d'énergie, de biens d'équipement, de céréales), en partie compensée par l'excédent des **voyages** (tourisme) et par les **transferts des MRE**.

## III. Les indicateurs du commerce extérieur

| Indicateur | Formule | Signification |
|---|---|---|
| **Taux de couverture** | $\frac{X}{M} \times 100$ | Part des importations financée par les exportations ($< 100$ : déficit) |
| **Taux d'ouverture** | $\frac{(X + M) / 2}{PIB} \times 100$ | Degré d'insertion de l'économie dans les échanges |
| **Taux de dépendance (propension à importer)** | $\frac{M}{PIB} \times 100$ | Dépendance vis-à-vis de l'étranger |
| **Taux d'effort à l'exportation** | $\frac{X}{PIB} \times 100$ | Part de la production vendue à l'étranger |
| **Termes de l'échange** | $\frac{\text{indice des prix des } X}{\text{indice des prix des } M} \times 100$ | $> 100$ : amélioration ; $< 100$ : détérioration |

### Lecture des termes de l'échange

Si l'indice est de 95, il faut **exporter davantage** pour acheter la même quantité d'importations : les termes de l'échange se sont **détériorés** de 5 %.

## IV. La structure des échanges

L'analyse porte aussi sur :

- la **structure par produits** : produits bruts, demi-produits, produits finis, énergie, alimentation ;
- la **structure géographique** : principaux clients et fournisseurs (l'Union européenne est le premier partenaire commercial du Maroc).

La diversification des exportations (automobile, aéronautique, phosphates et dérivés, agroalimentaire, textile) réduit la vulnérabilité du pays.
`,
    exercices: md`
### Exercice 1 — Indicateurs (données fictives, en milliards de DH)

Exportations de biens et services : 450 ; importations de biens et services : 640 ; PIB : 1 400.

1. Calculez le solde commercial et le taux de couverture.
2. Calculez le taux d'ouverture et la propension à importer.
3. Interprétez les résultats.

<details><summary>Voir le corrigé</summary>

1. Solde $= 450 - 640 = -190$ Mds DH (**déficit**). Taux de couverture $= \frac{450}{640} \times 100 \approx 70{,}3\%$.
2. Taux d'ouverture $= \frac{(450 + 640)/2}{1\,400} \times 100 \approx 38{,}9\%$ ; propension à importer $= \frac{640}{1\,400} \times 100 \approx 45{,}7\%$.
3. Les exportations ne couvrent que 70,3 % des importations. L'économie est assez **ouverte** et **dépendante** de l'extérieur.

</details>

### Exercice 2 — Termes de l'échange (données fictives)

Entre 2023 et 2024, l'indice des prix des exportations passe à 104 et celui des importations à 110 (base 100 en 2023).

1. Calculez les termes de l'échange en 2024.
2. Interprétez.

<details><summary>Voir le corrigé</summary>

1. $TE = \frac{104}{110} \times 100 \approx 94{,}5$.
2. $TE < 100$ : les termes de l'échange se sont **détériorés** d'environ 5,5 % : les prix des importations ont augmenté plus vite que ceux des exportations ; le pays doit exporter davantage pour importer la même quantité.

</details>

### Exercice 3 — Classer les opérations

Dans quel compte de la balance des paiements enregistre-t-on : a) l'argent envoyé par un MRE à sa famille ; b) les dépenses de touristes étrangers à Marrakech ; c) le rachat de 40 % d'une entreprise marocaine par une société étrangère ; d) les dividendes versés à des actionnaires étrangers ?

<details><summary>Voir le corrigé</summary>

a) Compte courant — **revenus secondaires** ; b) Compte courant — **services (voyages)** ; c) Compte financier — **investissement direct étranger** ; d) Compte courant — **revenus primaires**.

</details>
`,
    resume: md`
## L'essentiel — Mesure des échanges

- **Balance des paiements** (Office des changes) : opérations résidents / non-résidents.
- **Compte courant** : biens, services, revenus primaires, revenus secondaires (transferts MRE).
- **Compte de capital** et **compte financier** (IDE ≥ 10 %, portefeuille, autres, réserves).
- **Taux de couverture** $= \frac{X}{M} \times 100$
- **Taux d'ouverture** $= \frac{(X+M)/2}{PIB} \times 100$
- **Propension à importer** $= \frac{M}{PIB} \times 100$ ; **effort à l'exportation** $= \frac{X}{PIB} \times 100$
- **Termes de l'échange** $= \frac{\text{indice prix X}}{\text{indice prix M}} \times 100$ ($<100$ : détérioration)
- Maroc : balance commerciale déficitaire, compensée en partie par le tourisme et les transferts MRE.
`,
    qcm: [
      { q: "Les transferts des MRE sont enregistrés dans :", choix: ["La balance commerciale", "Les revenus secondaires du compte courant", "Le compte financier", "Les avoirs de réserve"], bonne: 1, explication: "Ce sont des transferts courants sans contrepartie." },
      { q: "Un taux de couverture de 60 % signifie que :", choix: ["Les exportations dépassent les importations", "Les exportations financent 60 % des importations", "Le PIB baisse de 60 %", "Les importations représentent 60 % du PIB"], bonne: 1, explication: "X/M × 100 = 60 : déficit commercial." },
      { q: "Des termes de l'échange égaux à 108 indiquent :", choix: ["Une détérioration", "Une amélioration", "Un déficit", "Une inflation"], bonne: 1, explication: "Les prix des exportations augmentent plus vite que ceux des importations." },
      { q: "Un IDE correspond à une participation d'au moins :", choix: ["1 %", "10 %", "50 %", "100 %"], bonne: 1, explication: "Le seuil de 10 % traduit une influence durable sur la gestion." },
      { q: "Au Maroc, la balance des paiements est établie par :", choix: ["Le HCP", "L'Office des changes", "La douane", "Le ministère du Commerce"], bonne: 1, explication: "L'Office des changes publie la balance des paiements." },
    ],
  },

  "l-ouverture-de-l-economie": {
    cours: md`
## Introduction

Un pays peut choisir d'**ouvrir** son économie aux échanges ou de la **protéger**. Entre libre-échange et protectionnisme, la plupart des pays adoptent des positions intermédiaires.

## I. Le libre-échange

> Le **libre-échange** est une politique qui supprime les obstacles à la circulation des biens, des services et des capitaux entre pays.

### Avantages

- Gains de spécialisation (Ricardo) et **baisse des prix** pour les consommateurs ;
- Plus grand **choix** de produits ;
- **Économies d'échelle** grâce à des marchés plus grands ;
- Stimulation de la **concurrence** et de l'innovation ;
- Attraction des **investissements étrangers**.

### Inconvénients

- Disparition des entreprises non compétitives et **pertes d'emplois** ;
- **Dépendance** vis-à-vis de l'étranger ;
- Aggravation possible du **déficit commercial**.

## II. Le protectionnisme

> Le **protectionnisme** est l'ensemble des mesures qui visent à protéger la production nationale de la concurrence étrangère.

### Les instruments

| Instruments tarifaires | Instruments non tarifaires |
|---|---|
| **Droits de douane** (sur les importations) | **Quotas / contingentements** (limite de quantité) |
| | **Normes** techniques, sanitaires et environnementales |
| | **Subventions** aux producteurs nationaux et aux exportations |
| | Procédures administratives lourdes, **dévaluation** de la monnaie |

### Avantages et limites

- **Avantages** : protéger l'emploi, les industries naissantes, les secteurs stratégiques ; lutter contre le **dumping**.
- **Limites** : prix plus élevés pour les consommateurs, risque de **représailles** (guerre commerciale), moins d'innovation.

## III. L'organisation des échanges internationaux

### 1. Du GATT à l'OMC

- **GATT** (1947) : accord pour réduire progressivement les droits de douane ;
- **OMC** (Organisation mondiale du commerce), créée le 1ᵉʳ janvier 1995 après les accords de **Marrakech** (1994). Principes : **non-discrimination** (clause de la nation la plus favorisée), réduction des obstacles, règlement des différends.

### 2. L'intégration régionale

| Forme | Contenu |
|---|---|
| Zone de libre-échange | Suppression des droits de douane entre membres |
| Union douanière | + tarif extérieur commun |
| Marché commun | + libre circulation des facteurs (travail, capital) |
| Union économique et monétaire | + politiques communes et monnaie unique (ex. zone euro) |

## IV. L'ouverture de l'économie marocaine

Le Maroc a fait le choix de l'**ouverture** :

- **Programme d'ajustement structurel** (1983) puis libéralisation du commerce extérieur ;
- Membre fondateur de l'**OMC** (1995) ;
- **Accords de libre-échange** : Union européenne (accord d'association entré en vigueur en 2000), AELE, États-Unis (2006), Turquie (2006), accord d'Agadir avec la Tunisie, l'Égypte et la Jordanie ;
- Participation à la **Zone de libre-échange continentale africaine (ZLECAf)** ;
- Promotion des **zones d'accélération industrielle** et attraction des IDE.

**Bilan** : hausse des échanges et des IDE (automobile, aéronautique), mais **déficit commercial** persistant et concurrence forte pour certains secteurs (textile).
`,
    exercices: md`
### Exercice 1 — Identifier les instruments

Tarifaire ou non tarifaire ? a) Taxe de 40 % sur les voitures importées ; b) interdiction d'importer plus de 10 000 tonnes d'un produit ; c) exigence d'un certificat sanitaire ; d) aide publique aux exportateurs.

<details><summary>Voir le corrigé</summary>

a) **Tarifaire** (droit de douane) ; b) **Non tarifaire** (quota) ; c) **Non tarifaire** (norme) ; d) **Non tarifaire** (subvention).

</details>

### Exercice 2 — Dissertation courte

« Le libre-échange profite à tous les pays. » Discutez.

<details><summary>Voir le corrigé</summary>

- **Introduction** : définir libre-échange et protectionnisme ; poser la question des gains et des perdants.
- **I. Arguments favorables** : spécialisation (Ricardo), baisse des prix, concurrence, économies d'échelle, IDE (exemple de l'automobile au Maroc).
- **II. Limites** : destruction d'emplois dans les secteurs non compétitifs, déficit commercial, dépendance ; justification d'un protectionnisme éducateur (List).
- **Conclusion** : les gains existent mais sont inégalement répartis ; une ouverture progressive et accompagnée est préférable.

</details>
`,
    resume: md`
## L'essentiel — L'ouverture de l'économie

- **Libre-échange** : suppression des obstacles ; + baisse des prix, concurrence, économies d'échelle ; − emplois menacés, dépendance.
- **Protectionnisme** : tarifaire (droits de douane) ; non tarifaire (quotas, normes, subventions, dévaluation).
- **GATT (1947) → OMC (1995, accords de Marrakech 1994)**.
- **Intégration régionale** : ZLE → union douanière → marché commun → UEM.
- **Maroc** : PAS (1983), OMC, ALE avec l'UE, les États-Unis, la Turquie, l'AELE, accord d'Agadir, ZLECAf ; déficit commercial persistant.
`,
    qcm: [
      { q: "Un quota est un instrument :", choix: ["Tarifaire", "Non tarifaire", "Monétaire", "Budgétaire"], bonne: 1, explication: "Il limite la quantité importée." },
      { q: "L'OMC a été créée en :", choix: ["1947", "1995", "2000", "1983"], bonne: 1, explication: "Le 1er janvier 1995, après les accords de Marrakech." },
      { q: "Une union douanière ajoute à la zone de libre-échange :", choix: ["Une monnaie unique", "Un tarif extérieur commun", "La libre circulation des personnes", "Un budget commun"], bonne: 1, explication: "Les membres appliquent les mêmes droits aux pays tiers." },
      { q: "Le dumping consiste à :", choix: ["Vendre à l'étranger à un prix inférieur au coût ou au prix national", "Taxer les importations", "Limiter les exportations", "Dévaluer la monnaie"], bonne: 0, explication: "C'est une pratique jugée déloyale." },
      { q: "L'accord d'Agadir lie le Maroc à :", choix: ["L'UE", "La Tunisie, l'Égypte et la Jordanie", "Les États-Unis", "La Turquie"], bonne: 1, explication: "Accord de libre-échange entre pays arabes méditerranéens." },
    ],
  },

  "la-croissance-et-le-developpement": {
    cours: md`
## Introduction

Un pays peut produire plus sans que sa population vive mieux. D'où la distinction entre **croissance** et **développement**.

## I. La croissance économique

> Selon François Perroux, la **croissance** est « l'augmentation soutenue, pendant une ou plusieurs périodes longues, d'un indicateur de dimension : pour une nation, le produit global brut ou net, en termes réels ».

- C'est une notion **quantitative**, mesurée par le **taux de croissance du PIB réel**.
- À distinguer de l'**expansion** : hausse de la production de courte durée.

### Les facteurs de la croissance

- **Facteur travail** : quantité (population active) et qualité (formation, santé) ;
- **Facteur capital** : investissements en machines, infrastructures ;
- **Progrès technique** et innovation ;
- **Institutions** : stabilité, sécurité juridique, bonne gouvernance.

Au Maroc, la croissance reste sensible aux **conditions climatiques**, à cause du poids de l'agriculture (valeur ajoutée agricole dépendante des pluies).

## II. Le développement

> Selon Perroux, le **développement** est « la combinaison des changements mentaux et sociaux d'une population qui la rendent apte à faire croître, cumulativement et durablement, son produit réel global ».

- C'est une notion **qualitative** et de **long terme** : amélioration de la santé, de l'éducation, du niveau de vie, réduction de la pauvreté et des inégalités.
- **La croissance est une condition nécessaire mais non suffisante** du développement : une croissance peut exister sans développement (richesse accaparée par une minorité).

### La mesure du développement

- **IDH** (PNUD) : espérance de vie, éducation, RNB par habitant en PPA ; entre 0 et 1 ;
- **Indice de pauvreté multidimensionnelle** ;
- **Indicateurs sociaux** : taux d'alphabétisation, mortalité infantile, accès à l'eau et à l'électricité.

## III. Les caractéristiques du sous-développement

| Domaine | Caractéristiques |
|---|---|
| **Économique** | Faible revenu par habitant, poids de l'agriculture traditionnelle, secteur informel important, dépendance aux exportations de produits primaires, endettement |
| **Démographique** | Forte natalité, population jeune, exode rural, urbanisation non maîtrisée |
| **Social** | Analphabétisme, faible accès aux soins, inégalités, pauvreté |
| **Structurel** | **Dualisme** (secteur moderne à côté d'un secteur traditionnel), désarticulation de l'économie |

## IV. Le développement durable

> Selon le rapport **Brundtland** (1987), le **développement durable** est « un développement qui répond aux besoins du présent sans compromettre la capacité des générations futures de répondre aux leurs ».

Il repose sur **trois piliers** : **économique** (efficacité), **social** (équité), **environnemental** (préservation).

Au Maroc : Stratégie nationale de développement durable, développement des énergies renouvelables (complexe solaire Noor à Ouarzazate), programme d'économie d'eau.
`,
    exercices: md`
### Exercice 1 — Croissance ou développement ?

Classez chaque indicateur : a) hausse du PIB réel de 3 % ; b) baisse de la mortalité infantile ; c) hausse de la production de ciment ; d) hausse du taux de scolarisation des filles ; e) hausse de l'espérance de vie.

<details><summary>Voir le corrigé</summary>

**Croissance** (quantitatif) : a, c. **Développement** (qualitatif) : b, d, e.

</details>

### Exercice 2 — Taux de croissance annuel moyen (données fictives)

Le PIB réel d'un pays passe de 800 à 1 000 Mds DH en 5 ans.

1. Calculez le taux de croissance global.
2. Calculez le taux de croissance annuel moyen.

<details><summary>Voir le corrigé</summary>

1. $\frac{1\,000 - 800}{800} \times 100 = 25\%$.
2. $t_m = \left( \sqrt[5]{\frac{1\,000}{800}} - 1 \right) \times 100 = (1{,}25^{0{,}2} - 1) \times 100 \approx 4{,}56\%$ par an.

(On n'utilise pas $25\% / 5 = 5\%$ car les hausses se cumulent.)

</details>
`,
    resume: md`
## L'essentiel — Croissance et développement

- **Croissance (Perroux)** : augmentation soutenue et durable du produit réel ; **quantitative** ; mesurée par le taux de croissance du PIB réel.
- **Facteurs** : travail, capital, progrès technique, institutions.
- **Développement (Perroux)** : changements mentaux et sociaux ; **qualitatif** ; long terme.
- La croissance est **nécessaire mais pas suffisante** au développement.
- **Mesure** : IDH (santé, éducation, niveau de vie), IPM, indicateurs sociaux.
- **Sous-développement** : faible revenu, dualisme, informel, démographie, pauvreté, dépendance.
- **Développement durable (Brundtland, 1987)** : économique, social, environnemental.
`,
    qcm: [
      { q: "La croissance économique est une notion :", choix: ["Qualitative", "Quantitative", "Sociale", "Démographique"], bonne: 1, explication: "Elle mesure l'augmentation de la production." },
      { q: "La définition du développement durable vient du rapport :", choix: ["Kaldor", "Brundtland", "Rostow", "Perroux"], bonne: 1, explication: "Rapport de 1987 de la Commission des Nations unies." },
      { q: "Le dualisme désigne :", choix: ["Deux monnaies", "La coexistence d'un secteur moderne et d'un secteur traditionnel", "Deux partis politiques", "Un double budget"], bonne: 1, explication: "C'est une caractéristique structurelle du sous-développement." },
      { q: "Une croissance sans développement est possible si :", choix: ["La richesse est très inégalement répartie", "L'IDH augmente fortement", "La pauvreté recule", "L'éducation progresse"], bonne: 0, explication: "La production augmente sans amélioration générale du bien-être." },
      { q: "Les trois piliers du développement durable sont :", choix: ["Économique, social, environnemental", "Travail, capital, terre", "Prix, emploi, croissance", "Offre, demande, prix"], bonne: 0, explication: "Efficacité, équité, préservation." },
    ],
  },

  "les-theories-du-sous-developpement": {
    cours: md`
## Introduction

Pourquoi certains pays sont-ils restés sous-développés ? Deux grandes familles de théories s'opposent : les **théories libérales**, qui voient le sous-développement comme un **retard**, et les **théories structuralistes et de la dépendance**, qui y voient le résultat de la **domination**.

## I. Les théories libérales : le sous-développement comme retard

### 1. Walt Whitman Rostow : les étapes de la croissance (1960)

Tous les pays passent par **cinq étapes** :

1. **La société traditionnelle** : agriculture dominante, faible productivité ;
2. **Les conditions préalables au démarrage** : hausse de l'épargne, esprit d'entreprise, infrastructures ;
3. **Le décollage (take-off)** : forte hausse de l'investissement (plus de 10 % du revenu national), industrialisation rapide ;
4. **La marche vers la maturité** : diversification industrielle, progrès technique ;
5. **L'ère de la consommation de masse** : production de biens de consommation durables.

Le sous-développement est donc une **étape de retard** ; les pays pauvres rattraperont les pays riches en suivant le même chemin.

**Critiques** : vision **linéaire** et unique du développement, inspirée de l'histoire occidentale, qui ignore la domination et le contexte historique (colonisation).

### 2. Ragnar Nurkse : le cercle vicieux de la pauvreté

$$\text{Faible revenu} \rightarrow \text{faible épargne} \rightarrow \text{faible investissement} \rightarrow \text{faible productivité} \rightarrow \text{faible revenu}$$

Un pays est pauvre… parce qu'il est pauvre. Pour sortir du cercle, il faut un **effort d'investissement massif** (« croissance équilibrée ») et l'apport de capitaux extérieurs.

### 3. Le dualisme (Arthur Lewis)

L'économie est coupée en deux : un **secteur moderne** (industrie, capitaliste) et un **secteur traditionnel** (agriculture de subsistance) disposant d'une main-d'œuvre abondante. Le développement consiste à transférer la main-d'œuvre vers le secteur moderne.

## II. Les théories structuralistes et de la dépendance

### 1. L'analyse centre-périphérie (Raúl Prebisch, CEPAL)

Le monde est divisé entre :

- un **centre** (pays industrialisés) qui exporte des produits manufacturés ;
- une **périphérie** (pays du Sud) spécialisée dans les **produits primaires**.

**Thèse de la détérioration des termes de l'échange** (Prebisch-Singer) : sur le long terme, les prix des produits primaires augmentent moins vite que ceux des produits manufacturés ; les pays de la périphérie doivent exporter toujours plus pour importer autant.

### 2. Les théories de la dépendance et de l'échange inégal

- **Samir Amin**, **André Gunder Frank** : le sous-développement est le **produit** du développement du centre ; la colonisation puis la domination économique ont orienté les économies du Sud vers les besoins du Nord (« le développement du sous-développement »).
- **Arghiri Emmanuel** : l'**échange inégal** ; à travail égal, les salaires plus faibles du Sud entraînent un transfert de valeur vers le Nord.

### 3. Les conséquences

Le sous-développement n'est pas un retard mais une **situation structurelle** : la solution passe par la **rupture** avec la dépendance ou par des politiques volontaristes d'industrialisation.

## III. Synthèse

| | Théories libérales | Théories de la dépendance |
|---|---|---|
| Nature du sous-développement | Retard | Domination, dépendance |
| Causes | **Internes** (manque de capital, d'épargne) | **Externes** (colonisation, échange inégal) |
| Solutions | Ouverture, investissement, aide extérieure | Rupture, industrialisation autocentrée |
| Auteurs | Rostow, Nurkse, Lewis | Prebisch, Amin, Frank, Emmanuel |
`,
    exercices: md`
### Exercice 1 — Associer auteurs et thèses

Associez : Rostow, Nurkse, Prebisch, Samir Amin, A. Emmanuel — aux thèses : a) échange inégal ; b) étapes de la croissance ; c) centre-périphérie et détérioration des termes de l'échange ; d) cercle vicieux de la pauvreté ; e) développement autocentré et dépendance.

<details><summary>Voir le corrigé</summary>

Rostow → **b** ; Nurkse → **d** ; Prebisch → **c** ; Samir Amin → **e** ; A. Emmanuel → **a**.

</details>

### Exercice 2 — Termes de l'échange sur longue période (données fictives)

L'indice des prix des exportations d'un pays exportateur de produits primaires passe de 100 à 115 en 10 ans, tandis que celui de ses importations de produits manufacturés passe de 100 à 140.

1. Calculez les termes de l'échange à la fin de la période.
2. Quelle théorie ce résultat illustre-t-il ?

<details><summary>Voir le corrigé</summary>

1. $TE = \frac{115}{140} \times 100 \approx 82{,}1$ : détérioration d'environ 17,9 %.
2. La thèse de **Prebisch-Singer** sur la **détérioration des termes de l'échange** des pays de la périphérie.

</details>
`,
    resume: md`
## L'essentiel — Théories du sous-développement

- **Libérales (retard, causes internes)** :
  - **Rostow** : 5 étapes (société traditionnelle, préalables, décollage, maturité, consommation de masse) ;
  - **Nurkse** : cercle vicieux de la pauvreté ;
  - **Lewis** : dualisme secteur moderne / traditionnel.
- **Dépendance (domination, causes externes)** :
  - **Prebisch** : centre-périphérie, détérioration des termes de l'échange ;
  - **Amin, Frank** : développement du sous-développement ;
  - **Emmanuel** : échange inégal.
- Solutions libérales : investissement, ouverture ; solutions structuralistes : rupture, industrialisation autocentrée.
`,
    qcm: [
      { q: "Le « take-off » correspond, chez Rostow, à :", choix: ["La société traditionnelle", "Le décollage", "La consommation de masse", "La maturité"], bonne: 1, explication: "3e étape, marquée par une forte hausse de l'investissement." },
      { q: "Le cercle vicieux de la pauvreté est une thèse de :", choix: ["Prebisch", "Nurkse", "Amin", "Keynes"], bonne: 1, explication: "Faible revenu → faible épargne → faible investissement → faible revenu." },
      { q: "Pour les théoriciens de la dépendance, le sous-développement est dû à :", choix: ["Un simple retard", "La domination des pays du centre", "Le manque de ressources naturelles", "Le climat"], bonne: 1, explication: "Causes externes : colonisation, échange inégal." },
      { q: "La thèse de la détérioration des termes de l'échange concerne :", choix: ["Les pays exportateurs de produits primaires", "Les pays exportateurs de services", "Les pays sans commerce", "Les pays de la zone euro"], bonne: 0, explication: "Prix des produits primaires en hausse plus lente que les produits manufacturés." },
      { q: "Quelle critique adresse-t-on à Rostow ?", choix: ["Sa vision linéaire inspirée de l'Occident", "Son rejet de l'investissement", "Son refus de l'industrialisation", "Son protectionnisme"], bonne: 0, explication: "Il suppose un chemin unique pour tous les pays." },
    ],
  },

  "les-strategies-de-developpement": {
    cours: md`
## Introduction

Après les indépendances, les pays du Sud ont adopté différentes **stratégies** pour sortir du sous-développement. Elles se distinguent par le rôle donné au **marché intérieur** ou au **marché mondial**.

## I. Les stratégies introverties (tournées vers le marché intérieur)

### 1. L'industrialisation par substitution aux importations (ISI)

**Principe** : produire localement les biens auparavant importés, en commençant par les biens de consommation simples (textile, agroalimentaire), puis en remontant vers les biens intermédiaires et d'équipement. Le marché intérieur est **protégé** par des droits de douane.

- **Exemples** : Amérique latine (Brésil, Argentine, Mexique) dans les années 1950-1970.
- **Avantages** : création d'un tissu industriel, économie de devises, emplois.
- **Limites** : étroitesse du marché intérieur, dépendance aux importations de biens d'équipement, entreprises peu compétitives car protégées, endettement.

### 2. Les industries industrialisantes

**Principe** (Gérard Destanne de Bernis) : investir d'abord dans les **industries lourdes** (sidérurgie, pétrochimie, mécanique) qui entraîneront le reste de l'économie par effet d'**entraînement**.

- **Exemple** : Algérie dans les années 1970.
- **Limites** : coûts très élevés, agriculture délaissée, faible efficacité, dépendance aux recettes pétrolières.

### 3. Le développement autocentré

Rupture avec le marché mondial, satisfaction prioritaire des besoins de la population locale, mobilisation des ressources internes (thèse de Samir Amin).

## II. Les stratégies extraverties (tournées vers le marché mondial)

### 1. La spécialisation dans les produits primaires

Exporter des matières premières (minerais, pétrole, produits agricoles) pour financer le développement. **Limites** : instabilité des cours, détérioration des termes de l'échange, faible diversification.

### 2. L'industrialisation par promotion (substitution) des exportations (IPE)

**Principe** : produire pour le **marché mondial** en valorisant ses avantages comparatifs (main-d'œuvre bon marché au départ), puis remonter vers des produits à plus forte valeur ajoutée.

- **Exemples** : les « **dragons** » asiatiques (Corée du Sud, Taïwan, Hong Kong, Singapour), puis la Chine.
- **Avantages** : accès à un marché mondial immense, entrée de devises, apprentissage technologique, forte croissance.
- **Limites** : dépendance à la demande mondiale, vulnérabilité aux crises, bas salaires au départ.

## III. Le Consensus de Washington et l'ajustement structurel

Dans les années 1980, face à la crise de la dette, le **FMI** et la **Banque mondiale** imposent des **programmes d'ajustement structurel (PAS)** : réduction des déficits, privatisations, libéralisation du commerce et des prix, dévaluation.

## IV. Le cas du Maroc

| Période | Orientation |
|---|---|
| Années 1960-1970 | Substitution aux importations, marocanisation (1973), plans quinquennaux |
| 1983-1993 | **Programme d'ajustement structurel** |
| Depuis les années 1990-2000 | Ouverture, privatisations, accords de libre-échange, stratégies sectorielles (Plan Émergence, Plan Maroc Vert, Plan d'accélération industrielle) |
| 2005 | **Initiative nationale pour le développement humain (INDH)** |
| 2021 | **Nouveau modèle de développement (NMD)** ; généralisation de la protection sociale |

Le Maroc combine aujourd'hui **ouverture** (exportations automobiles et aéronautiques, zones industrielles) et **politiques sociales** de développement humain.
`,
    exercices: md`
### Exercice 1 — Identifier la stratégie

a) Un pays taxe fortement les importations de chaussures pour développer sa propre production ; b) un pays attire des usines étrangères qui exportent vers l'Europe ; c) un pays investit massivement dans la sidérurgie pour entraîner les autres industries.

<details><summary>Voir le corrigé</summary>

a) **ISI** (substitution aux importations) ; b) **Promotion des exportations** ; c) **Industries industrialisantes**.

</details>

### Exercice 2 — Comparaison

Comparez l'ISI et la promotion des exportations dans un tableau (principe, exemples, avantages, limites).

<details><summary>Voir le corrigé</summary>

| | ISI | Promotion des exportations |
|---|---|---|
| Principe | Produire localement ce qu'on importait, marché protégé | Produire pour le marché mondial |
| Exemples | Brésil, Argentine, Mexique | Corée du Sud, Taïwan, Chine |
| Avantages | Économie de devises, tissu industriel | Débouchés immenses, devises, croissance forte |
| Limites | Marché étroit, faible compétitivité, dette | Dépendance à la demande mondiale, bas salaires |

</details>
`,
    resume: md`
## L'essentiel — Stratégies de développement

- **Introverties** :
  - **ISI** : produire ce qu'on importait, marché protégé (Amérique latine) ; limites : marché étroit, peu compétitif ;
  - **Industries industrialisantes** (de Bernis) : industrie lourde d'abord (Algérie) ;
  - **Développement autocentré** (Amin).
- **Extraverties** :
  - exportation de **produits primaires** (instabilité des cours) ;
  - **promotion des exportations** (dragons asiatiques, Chine).
- **PAS** (FMI, Banque mondiale, années 1980).
- **Maroc** : ISI et marocanisation → PAS (1983) → ouverture et plans sectoriels → INDH (2005) → NMD (2021).
`,
    qcm: [
      { q: "L'ISI consiste à :", choix: ["Exporter des matières premières", "Produire localement les biens auparavant importés", "Supprimer l'industrie", "Importer davantage"], bonne: 1, explication: "Industrialisation par substitution aux importations." },
      { q: "Les « dragons » asiatiques ont suivi une stratégie de :", choix: ["Substitution aux importations", "Promotion des exportations", "Développement autocentré", "Industries industrialisantes"], bonne: 1, explication: "Corée du Sud, Taïwan, Hong Kong, Singapour." },
      { q: "Les industries industrialisantes ont été appliquées notamment par :", choix: ["La Corée du Sud", "L'Algérie", "Le Brésil", "Singapour"], bonne: 1, explication: "Dans les années 1970, selon la thèse de G. Destanne de Bernis." },
      { q: "Le PAS a été appliqué au Maroc à partir de :", choix: ["1973", "1983", "2005", "2021"], bonne: 1, explication: "Programme d'ajustement structurel de 1983 à 1993." },
      { q: "L'INDH a été lancée en :", choix: ["1983", "1995", "2005", "2021"], bonne: 2, explication: "Initiative nationale pour le développement humain, lancée en 2005." },
    ],
  },

  "la-mondialisation": {
    cours: md`
## Introduction

Les économies du monde sont de plus en plus **interdépendantes** : on parle de **mondialisation**.

> La **mondialisation** est le processus d'**intégration croissante** des économies nationales dans un marché mondial, par l'intensification des échanges de biens, de services, de capitaux, de technologies et d'informations.

## I. Les dimensions de la mondialisation

### 1. La mondialisation commerciale

Forte croissance des échanges de marchandises et de services, plus rapide que celle de la production mondiale, grâce à la baisse des droits de douane (GATT, OMC) et des coûts de transport (conteneurs).

### 2. La mondialisation financière

Selon Henri Bourguinat, elle repose sur les « **3 D** » :

- **Déréglementation** : suppression du contrôle des changes et des capitaux ;
- **Désintermédiation** : les entreprises se financent directement sur les marchés financiers ;
- **Décloisonnement** : suppression des frontières entre les marchés (monétaire, financier, des changes) et entre pays.

### 3. La mondialisation productive

Les **firmes multinationales (FMN)** organisent leur production à l'échelle mondiale : **décomposition internationale du processus productif** (DIPP), délocalisations, sous-traitance, investissements directs étrangers.

## II. Les acteurs de la mondialisation

| Acteur | Rôle |
|---|---|
| **Firmes multinationales** | Production mondiale, IDE, échanges intra-firmes |
| **États** | Ouverture, accords commerciaux, attraction des investissements |
| **OMC** | Règles du commerce international |
| **FMI** | Stabilité monétaire et financière, aide aux pays en difficulté |
| **Banque mondiale** | Financement de projets de développement |
| **Blocs régionaux** | UE, ALENA/ACEUM, ZLECAf… |

## III. Les effets de la mondialisation

| Effets positifs | Effets négatifs |
|---|---|
| Diffusion des technologies et des savoirs | Concurrence accrue, faillites, délocalisations |
| Baisse des prix, plus de choix | Hausse des inégalités entre et dans les pays |
| Croissance des pays émergents (Chine, Inde) | Instabilité financière et **contagion** des crises (2008) |
| Entrée d'IDE et création d'emplois | Atteintes à l'environnement, dumping social |
| | Uniformisation culturelle |

## IV. La mondialisation et le Maroc

- **Atouts** : position géographique (proximité de l'Europe, porte de l'Afrique), port de **Tanger Med**, stabilité, accords de libre-échange ;
- **Intégration** dans les chaînes de valeur mondiales : automobile (Renault, Stellantis), aéronautique, offshoring ;
- **Défis** : concurrence des pays à bas coûts, déficit commercial, formation des compétences, économie informelle.

## V. Mondialisation et régionalisation

La **régionalisation** (intégration régionale) n'est pas opposée à la mondialisation : elle en est souvent une **étape**. Les pays se regroupent pour peser davantage dans les négociations internationales.

Les mouvements **altermondialistes** réclament une mondialisation plus juste et plus respectueuse de l'environnement.
`,
    exercices: md`
### Exercice 1 — Les 3 D

Associez chaque situation à l'un des « 3 D » : a) une entreprise émet des obligations au lieu d'emprunter à sa banque ; b) un pays supprime le contrôle des changes ; c) un investisseur marocain peut acheter des titres sur plusieurs places financières mondiales.

<details><summary>Voir le corrigé</summary>

a) **Désintermédiation** ; b) **Déréglementation** ; c) **Décloisonnement**.

</details>

### Exercice 2 — Question de synthèse

Montrez, en vous appuyant sur l'exemple du Maroc, que la mondialisation présente à la fois des opportunités et des risques.

<details><summary>Voir le corrigé</summary>

- **Opportunités** : IDE et emplois dans l'automobile et l'aéronautique, développement de Tanger Med, accès à de nouveaux marchés grâce aux accords de libre-échange, transferts de technologie.
- **Risques** : concurrence pour le textile et certains produits agricoles, déficit commercial, dépendance à la demande européenne, vulnérabilité aux crises internationales (2008, Covid-19, hausse des prix de l'énergie).
- **Conclusion** : l'enjeu est de tirer profit de l'ouverture tout en renforçant la compétitivité, la formation et la protection sociale.

</details>
`,
    resume: md`
## L'essentiel — La mondialisation

- **Définition** : intégration croissante des économies dans un marché mondial.
- **Dimensions** : commerciale, financière (**3 D** de Bourguinat : déréglementation, désintermédiation, décloisonnement), productive (FMN, DIPP, IDE).
- **Acteurs** : FMN, États, OMC, FMI, Banque mondiale, blocs régionaux.
- **Effets +** : technologies, baisse des prix, croissance des émergents, IDE.
- **Effets −** : délocalisations, inégalités, contagion des crises, environnement.
- **Maroc** : Tanger Med, automobile, aéronautique ; défis : compétitivité, déficit commercial.
- **Régionalisation** : étape de la mondialisation.
`,
    qcm: [
      { q: "Les « 3 D » de la mondialisation financière sont dus à :", choix: ["Keynes", "Henri Bourguinat", "Rostow", "Ricardo"], bonne: 1, explication: "Déréglementation, désintermédiation, décloisonnement." },
      { q: "La désintermédiation signifie que les entreprises :", choix: ["Empruntent davantage aux banques", "Se financent directement sur les marchés financiers", "Ferment leurs usines", "Refusent les IDE"], bonne: 1, explication: "Elles émettent actions et obligations." },
      { q: "La DIPP désigne :", choix: ["La division internationale du processus productif", "Une taxe douanière", "Un indicateur de pauvreté", "Un accord commercial"], bonne: 0, explication: "Les étapes de la production sont réparties entre plusieurs pays." },
      { q: "Quel est un effet négatif de la mondialisation ?", choix: ["La diffusion des technologies", "La contagion des crises financières", "La baisse des prix", "L'accès à plus de produits"], bonne: 1, explication: "La crise de 2008 s'est propagée au monde entier." },
      { q: "Tanger Med illustre :", choix: ["Le protectionnisme", "L'insertion du Maroc dans la mondialisation", "Le développement autocentré", "La déflation"], bonne: 1, explication: "Grand port logistique relié aux chaînes de valeur mondiales." },
    ],
  },
};
