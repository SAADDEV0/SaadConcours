// EOAE — 2ème Bac, unité 1 : la stratégie et la croissance.
const md = String.raw;

export default {
  "metier-et-mission-de-l-entreprise": {
    cours: md`
## Introduction

Avant de définir sa stratégie, l'entreprise doit répondre à deux questions : **que sait-elle faire ?** (son **métier**) et **pourquoi existe-t-elle ?** (sa **mission**).

## I. Le métier de l'entreprise

> Le **métier** est l'ensemble des **savoir-faire** et des **compétences** que l'entreprise maîtrise et qui lui permettent de produire et de vendre un bien ou un service.

Le métier repose sur :

- des **compétences techniques** (maîtrise d'une technologie, d'un procédé) ;
- des **compétences commerciales** (connaissance des clients, réseau de distribution) ;
- des **compétences organisationnelles** (logistique, gestion).

Les **compétences distinctives (clés)** sont celles que l'entreprise maîtrise **mieux que ses concurrents** : elles sont la source de son **avantage concurrentiel**.

**Exemple** : le métier d'une compagnie aérienne est le **transport aérien** de passagers et de fret ; ses compétences clés peuvent être la maîtrise de la maintenance, la gestion d'un réseau de lignes, la qualité du service à bord.

### Le métier et les domaines d'activité stratégique (DAS)

Une entreprise peut exercer plusieurs activités. Un **DAS** est un **ensemble homogène de produits** qui s'adressent à un même marché, face aux mêmes concurrents, et qui utilisent les mêmes compétences. L'ensemble des DAS forme le **portefeuille d'activités** de l'entreprise.

## II. La mission de l'entreprise

> La **mission** est la **raison d'être** de l'entreprise : elle précise le rôle qu'elle veut jouer vis-à-vis de ses clients et de la société.

Elle répond aux questions :

- **Quels besoins** satisfaisons-nous ?
- **Pour quels clients** ?
- **Avec quelles valeurs** ?

La mission est souvent formulée dans une **déclaration** courte et diffusée à tous (site internet, rapport annuel).

**Exemple** : « Offrir à chaque famille marocaine des produits laitiers sains et accessibles, en soutenant les éleveurs locaux. »

## III. Métier, mission, vision et valeurs

| Notion | Question | Horizon |
|---|---|---|
| **Métier** | Que savons-nous faire ? | Actuel |
| **Mission** | Pourquoi existons-nous ? | Actuel et durable |
| **Vision** | Que voulons-nous devenir ? | Long terme |
| **Valeurs** | Quels principes guident nos actions ? | Permanent |

## IV. L'importance du métier et de la mission

- **Orienter la stratégie** : l'entreprise se développe de préférence autour de son métier ;
- **Donner du sens** et **mobiliser** le personnel ;
- **Construire l'image** de l'entreprise auprès des clients et des partenaires ;
- **Éviter la dispersion** : s'éloigner de son métier (diversification non liée) est risqué ; certaines entreprises choisissent de se **recentrer** sur leur métier de base.
`,
    exercices: md`
### Exercice 1 — Métier ou mission ?

Classez : a) « Maîtriser la fabrication de pièces de câblage automobile » ; b) « Rendre la mobilité accessible à tous » ; c) « Savoir-faire dans la distribution frigorifique » ; d) « Améliorer la santé des patients grâce à des médicaments de qualité ».

<details><summary>Voir le corrigé</summary>

a) **Métier** (savoir-faire technique) ; b) **Mission** (raison d'être) ; c) **Métier** ; d) **Mission**.

</details>

### Exercice 2 — Étude de cas

Une société marocaine produit des jus de fruits, puis se lance dans les eaux minérales et les boissons gazeuses. Elle possède un réseau de distribution couvrant tout le territoire.

1. Identifiez son métier et ses DAS.
2. Quelle compétence distinctive peut-elle mettre en avant ?
3. Proposez une formulation de sa mission.

<details><summary>Voir le corrigé</summary>

1. **Métier** : production et distribution de boissons. **DAS** : jus de fruits, eaux minérales, boissons gazeuses.
2. Son **réseau de distribution national** (compétence commerciale difficile à imiter).
3. Exemple : « Offrir aux consommateurs marocains des boissons de qualité, disponibles partout, à un prix accessible. »

</details>
`,
    resume: md`
## L'essentiel — Métier et mission

- **Métier** : savoir-faire et compétences (techniques, commerciales, organisationnelles).
- **Compétences distinctives** : mieux maîtrisées que les concurrents → **avantage concurrentiel**.
- **DAS** : ensemble homogène produits/marché/concurrents ; l'ensemble des DAS = **portefeuille d'activités**.
- **Mission** : raison d'être (quels besoins, quels clients, quelles valeurs).
- **Vision** : ce que l'entreprise veut devenir ; **valeurs** : principes d'action.
- Rôle : orienter la stratégie, mobiliser, construire l'image, éviter la dispersion (**recentrage**).
`,
    qcm: [
      { q: "Le métier de l'entreprise correspond à :", choix: ["Sa raison d'être", "Son savoir-faire et ses compétences", "Son chiffre d'affaires", "Sa forme juridique"], bonne: 1, explication: "Le métier = ce que l'entreprise sait faire." },
      { q: "La mission répond à la question :", choix: ["Comment produire ?", "Pourquoi l'entreprise existe-t-elle ?", "Combien produire ?", "Où s'implanter ?"], bonne: 1, explication: "C'est la raison d'être de l'entreprise." },
      { q: "Un DAS est :", choix: ["Un service administratif", "Un ensemble homogène de produits/marchés/concurrents", "Un document comptable", "Un contrat de travail"], bonne: 1, explication: "Domaine d'activité stratégique." },
      { q: "Une compétence distinctive :", choix: ["Est commune à tous les concurrents", "Procure un avantage concurrentiel", "Est toujours financière", "Ne concerne que les PME"], bonne: 1, explication: "Elle est mieux maîtrisée que par les concurrents." },
      { q: "Revenir à son activité principale s'appelle :", choix: ["La diversification", "Le recentrage", "L'intégration", "La concentration"], bonne: 1, explication: "L'entreprise se concentre sur son métier de base." },
    ],
  },

  "finalites-et-objectifs-de-l-entreprise": {
    cours: md`
## Introduction

Toute entreprise agit en fonction de **buts**. On distingue les **finalités**, orientations générales et durables, des **objectifs**, résultats précis à atteindre.

## I. Les finalités de l'entreprise

> Les **finalités** sont les **intentions générales** et **permanentes** de l'entreprise. Elles expriment sa vocation.

| Finalité | Contenu |
|---|---|
| **Économique** | Réaliser un **profit**, assurer la **pérennité** (survie), la **croissance**, la **rentabilité** |
| **Sociale** | Satisfaire le personnel : rémunération, conditions de travail, sécurité de l'emploi, épanouissement |
| **Sociétale** | Contribuer au bien-être de la société : respect de l'environnement, éthique, développement local |

La finalité **sociétale** correspond à la **responsabilité sociale (sociétale) des entreprises (RSE)**. Au Maroc, la CGEM attribue un **Label RSE** aux entreprises engagées.

Les finalités varient selon le type d'organisation : une entreprise privée recherche principalement le profit ; une entreprise publique vise aussi l'intérêt général ; une coopérative cherche à servir ses membres.

## II. Les objectifs de l'entreprise

> Les **objectifs** sont des **résultats précis, chiffrés et datés** que l'entreprise veut atteindre pour réaliser ses finalités.

### Les caractéristiques d'un bon objectif : SMART

- **S**pécifique (précis) ;
- **M**esurable (chiffré) ;
- **A**tteignable (accepté) ;
- **R**éaliste ;
- **T**emporellement défini (daté).

**Exemple** : « Augmenter le chiffre d'affaires de 10 % d'ici fin 2026 » est un objectif SMART ; « vendre plus » ne l'est pas.

### La hiérarchie des objectifs

| Niveau | Nature | Exemple |
|---|---|---|
| **Stratégiques** | Long terme, entreprise entière | Devenir leader national dans 5 ans |
| **Tactiques** | Moyen terme, par fonction | Augmenter la part de marché de 3 points |
| **Opérationnels** | Court terme, par service | Réduire les délais de livraison à 48 h ce trimestre |

## III. Les conflits d'objectifs et les parties prenantes

Les **parties prenantes** (*stakeholders*) sont les acteurs qui influencent l'entreprise ou sont concernés par ses décisions :

| Partie prenante | Attentes |
|---|---|
| **Actionnaires / associés** | Dividendes, valeur de l'entreprise |
| **Dirigeants** | Croissance, pouvoir, prestige |
| **Salariés** | Salaires, emploi, conditions de travail |
| **Clients** | Qualité, prix bas, service |
| **Fournisseurs** | Commandes régulières, paiement rapide |
| **État** | Impôts, emplois, respect des lois |
| **Société civile** | Protection de l'environnement, éthique |

Ces attentes peuvent être **contradictoires** : augmenter les salaires réduit les dividendes ; baisser les prix réduit la marge. L'entreprise doit **arbitrer** par la **négociation** et le **compromis**.
`,
    exercices: md`
### Exercice 1 — Finalités

Classez chaque énoncé : a) réaliser un bénéfice de 5 MDH ; b) réduire de 30 % les rejets polluants ; c) améliorer les conditions de travail dans l'atelier ; d) assurer la survie de l'entreprise face à la crise.

<details><summary>Voir le corrigé</summary>

a) **Économique** ; b) **Sociétale** ; c) **Sociale** ; d) **Économique** (pérennité).

</details>

### Exercice 2 — Objectifs SMART

Transformez en objectifs SMART : a) « Améliorer la satisfaction des clients » ; b) « Réduire les coûts ».

<details><summary>Voir le corrigé</summary>

a) « Porter le taux de clients satisfaits de 75 % à 85 % d'ici décembre 2026, mesuré par une enquête semestrielle. »
b) « Réduire le coût de production unitaire de 5 % au cours des 12 prochains mois. »

</details>

### Exercice 3 — Conflit d'intérêts

Les actionnaires d'une entreprise demandent une hausse des dividendes alors que les salariés réclament une augmentation des salaires. Expliquez ce conflit et proposez une solution.

<details><summary>Voir le corrigé</summary>

Le bénéfice est partagé entre la rémunération du capital (dividendes) et celle du travail (salaires) : ce qui est donné à l'un réduit la part de l'autre. **Solution** : négociation et compromis, par exemple une prime liée aux résultats (intéressement) et une hausse modérée des dividendes, ou un partage de gains de productivité.

</details>
`,
    resume: md`
## L'essentiel — Finalités et objectifs

- **Finalités** : intentions générales et durables — **économique** (profit, pérennité, croissance), **sociale** (personnel), **sociétale** (RSE, environnement).
- **Objectifs** : résultats précis, chiffrés, datés — **SMART**.
- **Hiérarchie** : stratégiques (long terme) → tactiques (moyen terme) → opérationnels (court terme).
- **Parties prenantes** : actionnaires, dirigeants, salariés, clients, fournisseurs, État, société civile.
- **Conflits d'objectifs** → arbitrage par la négociation et le compromis.
`,
    qcm: [
      { q: "La recherche du profit est une finalité :", choix: ["Sociale", "Économique", "Sociétale", "Opérationnelle"], bonne: 1, explication: "C'est la finalité économique." },
      { q: "Le « M » de SMART signifie :", choix: ["Motivant", "Mesurable", "Modeste", "Moderne"], bonne: 1, explication: "Un objectif doit être chiffré." },
      { q: "Un objectif opérationnel est :", choix: ["De long terme", "De court terme, fixé par service", "Défini par l'État", "Toujours financier"], bonne: 1, explication: "Il concerne l'action quotidienne." },
      { q: "La RSE correspond à la finalité :", choix: ["Économique", "Sociétale", "Financière", "Commerciale"], bonne: 1, explication: "Responsabilité sociétale envers l'environnement et la société." },
      { q: "Les clients attendent principalement de l'entreprise :", choix: ["Des dividendes", "Qualité et prix", "Des impôts", "Du pouvoir"], bonne: 1, explication: "Ce sont leurs attentes en tant que partie prenante." },
    ],
  },

  "la-planification-strategique": {
    cours: md`
## Introduction

Dans un environnement incertain, l'entreprise doit **anticiper** et **organiser** son avenir. La **planification stratégique** est la démarche qui lui permet de fixer ses orientations à long terme et de prévoir les moyens pour les atteindre.

## I. La démarche stratégique

La démarche comprend **quatre étapes** :

1. **Diagnostic stratégique** (analyse externe et interne) ;
2. **Choix stratégique** (options stratégiques) ;
3. **Mise en œuvre** (plans, budgets, organisation) ;
4. **Contrôle** (comparer les réalisations aux objectifs et corriger).

## II. Le diagnostic stratégique

### 1. Le diagnostic externe : opportunités et menaces

Il analyse l'**environnement** de l'entreprise :

- **Macro-environnement — modèle PESTEL** : **P**olitique, **É**conomique, **S**ocioculturel, **T**echnologique, **É**cologique, **L**égal ;
- **Micro-environnement** : clients, fournisseurs, concurrents.

**Les cinq forces de Porter** déterminent l'intensité concurrentielle d'un secteur :

1. la rivalité entre concurrents existants ;
2. la menace de nouveaux entrants ;
3. la menace des produits de substitution ;
4. le pouvoir de négociation des clients ;
5. le pouvoir de négociation des fournisseurs.

Le diagnostic externe fait apparaître des **opportunités** (O) à saisir et des **menaces** (T, *threats*) à éviter.

### 2. Le diagnostic interne : forces et faiblesses

Il analyse les **ressources** et les **compétences** de l'entreprise dans chaque fonction :

| Fonction | Exemples de forces / faiblesses |
|---|---|
| Commerciale | Part de marché, notoriété, réseau de distribution |
| Production | Capacité, technologie, qualité, coûts |
| Financière | Rentabilité, trésorerie, endettement |
| Humaine | Compétences, climat social, motivation |
| Organisation | Réactivité, système d'information |

### 3. La synthèse : la matrice SWOT

| | Positif | Négatif |
|---|---|---|
| **Interne** | **Forces** (*Strengths*) | **Faiblesses** (*Weaknesses*) |
| **Externe** | **Opportunités** (*Opportunities*) | **Menaces** (*Threats*) |

La stratégie cherche à **s'appuyer sur les forces** pour **saisir les opportunités**, et à **réduire les faiblesses** pour **faire face aux menaces**.

## III. Les niveaux de décision (classification d'Igor Ansoff)

| Décision | Horizon | Niveau hiérarchique | Exemple |
|---|---|---|---|
| **Stratégique** | Long terme | Direction générale | Lancer une nouvelle activité, s'implanter à l'étranger |
| **Tactique (administrative)** | Moyen terme | Directions fonctionnelles | Choisir un fournisseur, organiser un service |
| **Opérationnelle** | Court terme | Exécution | Planifier la production de la semaine |

## IV. Les plans

- **Plan stratégique** (3 à 5 ans) : grandes orientations ;
- **Plans opérationnels** (1 an) : traduction par fonction (plan de production, plan commercial, plan de financement) ;
- **Budgets** : prévisions chiffrées à court terme.

**Intérêts** : coordonner les actions, anticiper, mobiliser. **Limites** : rigidité face à un environnement changeant ; d'où la nécessité de plans **flexibles** et révisables.
`,
    exercices: md`
### Exercice 1 — SWOT

Une entreprise marocaine de textile présente les éléments suivants. Classez-les dans la matrice SWOT : a) main-d'œuvre qualifiée ; b) proximité du marché européen ; c) concurrence des pays asiatiques à bas coûts ; d) machines anciennes ; e) accords de libre-échange avec l'UE ; f) forte dépendance à un seul client.

<details><summary>Voir le corrigé</summary>

| | Positif | Négatif |
|---|---|---|
| Interne | a) main-d'œuvre qualifiée | d) machines anciennes ; f) dépendance à un client |
| Externe | b) proximité de l'Europe ; e) accords avec l'UE | c) concurrence asiatique |

</details>

### Exercice 2 — Niveaux de décision

Classez : a) fermer une usine et se retirer d'un marché ; b) fixer le planning des équipes du mois ; c) choisir un nouveau logiciel de paie ; d) racheter un concurrent.

<details><summary>Voir le corrigé</summary>

a) **Stratégique** ; b) **Opérationnelle** ; c) **Tactique** ; d) **Stratégique**.

</details>

### Exercice 3 — PESTEL

Donnez un exemple marocain pour chaque composante du PESTEL.

<details><summary>Voir le corrigé</summary>

- **P** : stabilité politique, politique de régionalisation avancée ;
- **É** : taux de croissance, inflation, taux directeur de BAM ;
- **S** : urbanisation, évolution des modes de consommation ;
- **T** : digitalisation, e-paiement ;
- **É** (écologique) : stress hydrique, énergies renouvelables ;
- **L** : Code du travail, loi sur la concurrence, réformes fiscales.

</details>
`,
    resume: md`
## L'essentiel — Planification stratégique

- **Démarche** : diagnostic → choix → mise en œuvre → contrôle.
- **Diagnostic externe** : **PESTEL** + **5 forces de Porter** → opportunités / menaces.
- **Diagnostic interne** : ressources et compétences par fonction → forces / faiblesses.
- **SWOT** : Forces, Faiblesses (interne) ; Opportunités, Menaces (externe).
- **Décisions (Ansoff)** : stratégiques (long terme), tactiques (moyen terme), opérationnelles (court terme).
- **Plans** : stratégique (3-5 ans), opérationnels (1 an), budgets.
`,
    qcm: [
      { q: "Dans la matrice SWOT, les opportunités relèvent du diagnostic :", choix: ["Interne", "Externe", "Financier", "Social"], bonne: 1, explication: "Elles viennent de l'environnement." },
      { q: "Lequel n'est pas une des 5 forces de Porter ?", choix: ["Menace des nouveaux entrants", "Pouvoir des fournisseurs", "Pouvoir des syndicats", "Menace des produits de substitution"], bonne: 2, explication: "Les syndicats ne font pas partie du modèle de Porter." },
      { q: "Une décision stratégique est prise :", choix: ["Par les exécutants, à court terme", "Par la direction générale, à long terme", "Par les clients", "Par l'État"], bonne: 1, explication: "Elle engage l'avenir de l'entreprise." },
      { q: "Le « L » de PESTEL signifie :", choix: ["Logistique", "Légal", "Local", "Libéral"], bonne: 1, explication: "L'environnement légal et réglementaire." },
      { q: "Une trésorerie abondante est :", choix: ["Une opportunité", "Une force", "Une menace", "Une faiblesse"], bonne: 1, explication: "C'est un élément interne positif." },
    ],
  },

  "les-options-strategiques": {
    cours: md`
## Introduction

Après le diagnostic, l'entreprise choisit sa **stratégie**, c'est-à-dire la manière d'utiliser ses ressources pour atteindre ses objectifs et obtenir un **avantage concurrentiel**.

## I. Les stratégies génériques de Michael Porter

| Stratégie | Principe | Exemple |
|---|---|---|
| **Domination par les coûts** | Produire moins cher que les concurrents grâce aux économies d'échelle et à l'effet d'expérience, et vendre à un prix bas | Enseigne de hard-discount |
| **Différenciation** | Proposer un produit perçu comme **unique** (qualité, design, marque, service) pour lequel le client accepte de payer plus cher | Marque de luxe, voiture haut de gamme |
| **Focalisation (concentration)** | Se concentrer sur un **segment** étroit (clientèle, région, produit), par les coûts ou par la différenciation | Fabricant de produits artisanaux haut de gamme |

## II. Les stratégies de développement par rapport au métier

### 1. La spécialisation

L'entreprise concentre ses ressources sur **un seul métier** ou un seul DAS.

- **Avantages** : maîtrise du métier, économies d'échelle, image claire ;
- **Inconvénients** : **forte dépendance** à un seul marché ; risque si le marché décline.

### 2. La diversification

L'entreprise se développe dans des **activités nouvelles**.

- **Diversification liée (concentrique)** : activités proches du métier initial (mêmes technologies ou mêmes clients) ;
- **Diversification non liée (conglomérale)** : activités sans lien avec le métier.

**Avantages** : répartition des risques, utilisation des ressources excédentaires, nouveaux relais de croissance. **Inconvénients** : dispersion, manque de compétences, coûts élevés.

### 3. L'intégration

L'entreprise prend en charge des activités situées **en amont ou en aval** de sa filière de production :

- **Intégration verticale en amont** : vers les fournisseurs (un fabricant de jus rachète des vergers) ;
- **Intégration verticale en aval** : vers les clients (un fabricant ouvre ses propres magasins) ;
- **Intégration horizontale** : rachat de concurrents au même stade.

**Avantages** : maîtrise des approvisionnements ou des débouchés, récupération des marges. **Inconvénients** : lourds investissements, rigidité.

### 4. L'externalisation (impartition)

L'entreprise **confie à une autre** une partie de ses activités : sous-traitance, franchise, concession. Elle se recentre sur son métier et réduit ses coûts fixes, mais devient dépendante de ses partenaires.

## III. L'internationalisation

S'étendre à l'étranger pour trouver de nouveaux débouchés, réduire les coûts ou accéder à des ressources.

| Mode | Engagement |
|---|---|
| **Exportation** (directe ou via intermédiaires) | Faible |
| **Accords** : licence, franchise, joint-venture | Moyen |
| **Implantation** : filiale commerciale ou de production (IDE) | Fort |

Exemples : des banques et groupes marocains se sont implantés en **Afrique subsaharienne** (banque, télécommunications, assurance).

## IV. Le recentrage

Abandonner des activités jugées **non stratégiques** ou non rentables pour se concentrer sur le **métier de base**. Il fait souvent suite à une diversification mal maîtrisée.
`,
    exercices: md`
### Exercice 1 — Identifier la stratégie

a) Un groupe laitier achète des fermes d'élevage ; b) un fabricant de biscuits lance des chocolats ; c) une banque crée une compagnie immobilière et une chaîne d'hôtels ; d) une entreprise confie son nettoyage à une société spécialisée ; e) une marque de vêtements ouvre ses propres boutiques.

<details><summary>Voir le corrigé</summary>

a) **Intégration verticale en amont** ; b) **Diversification liée** ; c) **Diversification conglomérale** ; d) **Externalisation (sous-traitance)** ; e) **Intégration verticale en aval**.

</details>

### Exercice 2 — Stratégies de Porter

Une entreprise de meubles propose des meubles en kit standardisés, vendus en grande quantité à bas prix. Une autre fabrique à la main des meubles en cèdre sculpté, vendus très cher à une clientèle aisée.

1. Identifiez la stratégie de chacune.
2. Quelles sont les conditions de réussite de chacune ?

<details><summary>Voir le corrigé</summary>

1. Première : **domination par les coûts**. Seconde : **focalisation par la différenciation** (segment étroit, produit unique).
2. Coûts : grands volumes, économies d'échelle, maîtrise des achats et de la logistique. Différenciation : savoir-faire reconnu, qualité constante, image de marque, clientèle prête à payer plus.

</details>
`,
    resume: md`
## L'essentiel — Options stratégiques

- **Porter** : domination par les coûts, différenciation, focalisation.
- **Spécialisation** : un seul métier ; + maîtrise ; − dépendance.
- **Diversification** : liée (proche du métier) ou conglomérale (sans lien) ; + répartition des risques ; − dispersion.
- **Intégration verticale** : amont (fournisseurs) / aval (clients) ; **horizontale** : concurrents.
- **Externalisation** : sous-traitance, franchise, concession.
- **Internationalisation** : exportation → accords → implantation (IDE).
- **Recentrage** : retour au métier de base.
`,
    qcm: [
      { q: "Un producteur de ciment qui rachète une carrière réalise :", choix: ["Une intégration en aval", "Une intégration en amont", "Une diversification", "Une externalisation"], bonne: 1, explication: "Il remonte vers ses fournisseurs de matières premières." },
      { q: "La différenciation consiste à :", choix: ["Vendre le moins cher possible", "Proposer un produit perçu comme unique", "Sous-traiter toute la production", "Réduire la gamme"], bonne: 1, explication: "Le client accepte de payer plus cher." },
      { q: "La diversification conglomérale concerne :", choix: ["Des activités proches du métier", "Des activités sans lien avec le métier", "Le rachat de fournisseurs", "L'exportation"], bonne: 1, explication: "Pas de synergie technologique ni commerciale." },
      { q: "L'implantation d'une filiale de production à l'étranger est :", choix: ["Une exportation", "Un investissement direct à l'étranger", "Une licence", "Une sous-traitance"], bonne: 1, explication: "Mode d'internationalisation le plus engageant." },
      { q: "Le principal risque de la spécialisation est :", choix: ["La dispersion", "La dépendance à un seul marché", "Le manque de compétences", "Des coûts trop faibles"], bonne: 1, explication: "Si le marché décline, l'entreprise est menacée." },
    ],
  },

  "la-croissance-de-l-entreprise": {
    cours: md`
## Introduction

La **croissance** de l'entreprise est l'augmentation durable de sa **taille**. Elle lui permet de réaliser des économies d'échelle, de gagner du pouvoir sur le marché et d'assurer sa pérennité.

## I. La mesure de la taille et de la croissance

| Critère | Intérêt |
|---|---|
| **Effectif** du personnel | Facile à connaître, mais dépend de l'automatisation |
| **Chiffre d'affaires** | Mesure l'activité commerciale |
| **Valeur ajoutée** | Mesure la richesse réellement créée |
| **Capitaux propres / total du bilan** | Mesure la puissance financière |
| **Part de marché** | Mesure le poids face aux concurrents |

$$\text{Taux de croissance} = \frac{\text{valeur}_{n} - \text{valeur}_{n-1}}{\text{valeur}_{n-1}} \times 100$$

$$\text{Part de marché} = \frac{\text{ventes de l'entreprise}}{\text{ventes totales du marché}} \times 100$$

## II. Les motivations de la croissance

- Réaliser des **économies d'échelle** (baisse du coût unitaire) ;
- Augmenter la **part de marché** et le pouvoir de négociation ;
- **Répartir les risques** ;
- Assurer la **pérennité** ;
- Prestige et pouvoir des dirigeants.

## III. Les modalités de la croissance

### 1. La croissance interne (organique)

> L'entreprise se développe **par ses propres moyens** : elle crée de nouvelles capacités de production (investissements en machines, bâtiments, recrutements).

| Avantages | Inconvénients |
|---|---|
| Indépendance et contrôle total | Croissance **lente** |
| Maintien de la culture d'entreprise | Besoin de **financement** important |
| Progressivité, risques maîtrisés | Difficile d'entrer sur un marché déjà saturé |

Financement : autofinancement, emprunt, augmentation de capital.

### 2. La croissance externe

> L'entreprise se développe en **acquérant** ou en **contrôlant** des entreprises **déjà existantes**.

Formes : **fusion**, **absorption**, **prise de participation**, **prise de contrôle** (achat de plus de 50 % du capital).

| Avantages | Inconvénients |
|---|---|
| Croissance **rapide** | Coût d'acquisition élevé |
| Acquisition de parts de marché, de technologies, de marques | Difficultés d'**intégration** (cultures différentes) |
| Réduction de la concurrence | Risque de licenciements et de conflits sociaux |
| Synergies | Contrôle des autorités de la concurrence |

### 3. La croissance contractuelle (conjointe)

Coopération entre entreprises **indépendantes** au moyen de **contrats** : sous-traitance, franchise, concession, alliances, joint-venture. Elle permet de croître sans investir lourdement.

## IV. Les limites de la croissance

- **Coûts de coordination** élevés dans les grandes structures ;
- **Rigidité** et lenteur des décisions ;
- **Risques financiers** (endettement) ;
- Réglementation de la **concurrence** (au Maroc : **loi n° 104-12** relative à la liberté des prix et de la concurrence et **Conseil de la concurrence**).
`,
    exercices: md`
### Exercice 1 — Mesure de la croissance (données fictives, en milliers de DH)

| | 2023 | 2024 |
|---|---|---|
| Chiffre d'affaires | 48 000 | 55 200 |
| Valeur ajoutée | 18 000 | 19 800 |
| Effectif | 240 | 250 |
| Ventes totales du marché | 400 000 | 420 000 |

1. Calculez le taux de croissance du CA, de la VA et de l'effectif.
2. Calculez la part de marché en 2023 et 2024.
3. Commentez.

<details><summary>Voir le corrigé</summary>

1. CA : $\frac{55\,200 - 48\,000}{48\,000} \times 100 = 15\%$ ; VA : $\frac{19\,800 - 18\,000}{18\,000} \times 100 = 10\%$ ; effectif : $\frac{250 - 240}{240} \times 100 \approx 4{,}17\%$.
2. 2023 : $\frac{48\,000}{400\,000} \times 100 = 12\%$ ; 2024 : $\frac{55\,200}{420\,000} \times 100 \approx 13{,}14\%$.
3. L'entreprise croît plus vite que son marché (+15 % contre +5 %) et gagne des parts de marché. La VA augmente moins vite que le CA : les consommations intermédiaires progressent davantage. L'effectif augmente peu : gains de **productivité**.

</details>

### Exercice 2 — Choisir un mode de croissance

Une entreprise veut entrer rapidement sur un nouveau marché très concurrentiel où les marques sont bien installées. Quel mode de croissance conseillez-vous ? Justifiez.

<details><summary>Voir le corrigé</summary>

La **croissance externe** (rachat d'une entreprise déjà présente) : elle permet d'acquérir **rapidement** une part de marché, une marque connue et un réseau de clients. La croissance interne serait trop lente sur un marché saturé. Il faudra toutefois prévoir le coût d'acquisition et réussir l'intégration.

</details>
`,
    resume: md`
## L'essentiel — La croissance de l'entreprise

- **Mesure** : effectif, CA, VA, capitaux propres, part de marché.
- **Taux de croissance** $= \frac{V_n - V_{n-1}}{V_{n-1}} \times 100$ ; **part de marché** $= \frac{\text{ventes entreprise}}{\text{ventes marché}} \times 100$.
- **Motivations** : économies d'échelle, part de marché, répartition des risques, pérennité.
- **Croissance interne** : par ses propres investissements ; + contrôle ; − lenteur.
- **Croissance externe** : fusion, absorption, prise de contrôle ; + rapidité ; − coût, intégration.
- **Croissance contractuelle** : sous-traitance, franchise, alliances.
- **Limites** : coordination, rigidité, endettement, droit de la concurrence (loi 104-12).
`,
    qcm: [
      { q: "La construction d'une nouvelle usine est une croissance :", choix: ["Externe", "Interne", "Contractuelle", "Conglomérale"], bonne: 1, explication: "L'entreprise crée elle-même de nouvelles capacités." },
      { q: "Le principal avantage de la croissance externe est :", choix: ["Son faible coût", "Sa rapidité", "L'absence de risque", "Le maintien de la culture"], bonne: 1, explication: "On acquiert des capacités déjà existantes." },
      { q: "Le critère qui mesure la richesse réellement créée est :", choix: ["Le chiffre d'affaires", "La valeur ajoutée", "L'effectif", "Le total du bilan"], bonne: 1, explication: "VA = production − consommations intermédiaires." },
      { q: "La franchise est une forme de croissance :", choix: ["Interne", "Contractuelle", "Externe", "Financière"], bonne: 1, explication: "Coopération par contrat entre entreprises indépendantes." },
      { q: "Si les ventes passent de 200 à 230, le taux de croissance est :", choix: ["30 %", "15 %", "13 %", "23 %"], bonne: 1, explication: "(230 − 200) / 200 × 100 = 15 %." },
    ],
  },

  "la-concentration-des-entreprises": {
    cours: md`
## Introduction

La **concentration** est le regroupement d'entreprises qui conduit à la formation d'unités économiques plus grandes. Elle résulte principalement de la **croissance externe**.

## I. Les types de concentration

| Type | Définition | Exemple |
|---|---|---|
| **Horizontale** | Regroupement d'entreprises qui fabriquent les **mêmes produits**, au même stade | Deux cimenteries |
| **Verticale** | Regroupement d'entreprises situées à des **stades successifs** d'une même filière | Un minotier et une boulangerie industrielle |
| **Conglomérale** | Regroupement d'entreprises aux activités **sans lien** entre elles | Un groupe présent dans la banque, l'immobilier et la distribution |

## II. Les techniques (formes juridiques) de concentration

### 1. La fusion

- **Fusion-réunion (fusion pure)** : deux sociétés ou plus **disparaissent** pour créer une **nouvelle** société.
  $A + B \rightarrow C$
- **Fusion-absorption** : une société **absorbe** une autre qui disparaît.
  $A + B \rightarrow A$

### 2. La prise de participation et le groupe

Une société achète une partie du capital d'une autre :

| Participation | Qualification |
|---|---|
| Moins de 10 % | Simple placement |
| De 10 % à 50 % | **Participation** |
| Plus de 50 % | **Filiale** (contrôle) |

Un **groupe** est un ensemble de sociétés juridiquement indépendantes mais contrôlées par une **société mère**. Une **holding** est une société dont l'activité principale est de détenir et gérer des participations dans d'autres sociétés.

### 3. Les accords de coopération

- **Groupement d'intérêt économique (GIE)** : mise en commun de moyens (achats, exportation) tout en restant indépendant ;
- **Joint-venture (filiale commune)** : deux entreprises créent ensemble une nouvelle société ;
- **Alliances stratégiques** et accords de partenariat.

## III. Les conséquences de la concentration

| Avantages | Inconvénients |
|---|---|
| Économies d'échelle, baisse des coûts | Risque de **position dominante** ou de monopole |
| Puissance financière, capacité de recherche | Hausse des prix pour les consommateurs |
| Compétitivité internationale | Suppressions d'emplois |
| Synergies | Difficultés de gestion d'un grand ensemble |

## IV. Le contrôle de la concentration au Maroc

La **loi n° 104-12** relative à la liberté des prix et de la concurrence :

- **interdit les ententes** anticoncurrentielles (cartels : accords sur les prix, partage des marchés) ;
- **interdit l'abus de position dominante** ;
- soumet les **opérations de concentration** importantes au **contrôle préalable** du **Conseil de la concurrence**, qui peut les autoriser, les soumettre à conditions ou les refuser.
`,
    exercices: md`
### Exercice 1 — Types de concentration

a) Une chaîne de supermarchés rachète une chaîne concurrente ; b) un fabricant de pneus rachète une plantation d'hévéas ; c) un groupe d'assurances rachète une société de production de films.

<details><summary>Voir le corrigé</summary>

a) **Horizontale** ; b) **Verticale** (amont) ; c) **Conglomérale**.

</details>

### Exercice 2 — Fusion et participations

1. Les sociétés X et Y disparaissent pour créer la société Z. De quelle opération s'agit-il ?
2. La société M détient 65 % de N, 30 % de P et 5 % de Q. Qualifiez chaque lien.

<details><summary>Voir le corrigé</summary>

1. **Fusion-réunion** (création d'une société nouvelle).
2. N : **filiale** (plus de 50 %) ; P : **participation** (entre 10 % et 50 %) ; Q : **simple placement** (moins de 10 %).

</details>
`,
    resume: md`
## L'essentiel — La concentration

- **Horizontale** (mêmes produits), **verticale** (stades successifs), **conglomérale** (sans lien).
- **Fusion-réunion** : $A + B \rightarrow C$ ; **fusion-absorption** : $A + B \rightarrow A$.
- **Participations** : < 10 % placement ; 10-50 % participation ; > 50 % filiale.
- **Groupe** (société mère + filiales), **holding**, **GIE**, **joint-venture**.
- **+** économies d'échelle, puissance ; **−** position dominante, prix élevés, emplois.
- **Maroc** : loi 104-12, Conseil de la concurrence (contrôle des concentrations, ententes, abus de position dominante).
`,
    qcm: [
      { q: "Le rachat d'un concurrent direct est une concentration :", choix: ["Verticale", "Horizontale", "Conglomérale", "Contractuelle"], bonne: 1, explication: "Mêmes produits, même stade." },
      { q: "Dans une fusion-absorption :", choix: ["Toutes les sociétés disparaissent", "La société absorbée disparaît", "Une nouvelle société est créée", "Aucune société ne disparaît"], bonne: 1, explication: "A + B → A." },
      { q: "Une société détenue à 70 % par une autre est :", choix: ["Une participation", "Une filiale", "Un GIE", "Une holding"], bonne: 1, explication: "Plus de 50 % du capital : contrôle." },
      { q: "Au Maroc, les opérations de concentration sont contrôlées par :", choix: ["Bank Al-Maghrib", "Le Conseil de la concurrence", "Le HCP", "La CNSS"], bonne: 1, explication: "En application de la loi 104-12." },
      { q: "Un cartel est :", choix: ["Une fusion autorisée", "Une entente interdite entre concurrents", "Une filiale commune", "Une holding"], bonne: 1, explication: "Accord sur les prix ou partage des marchés." },
    ],
  },
};
