// Économie générale & Statistiques — 2ème Bac (chapitres 6 à 10).
const md = String.raw;

export default {
  "les-dysfonctionnements-du-marche-l-inflation": {
    cours: md`
## Introduction

La stabilité des prix est un objectif majeur de la politique économique. Une hausse durable des prix réduit le pouvoir d'achat et perturbe les décisions des agents : c'est l'**inflation**.

## I. Définition et mesure

> L'**inflation** est une **hausse générale, durable et auto-entretenue** du niveau général des prix.

- *Générale* : elle touche l'ensemble des biens et services, pas un seul produit ;
- *Durable* : elle s'inscrit dans le temps ;
- *Auto-entretenue* : une hausse en provoque d'autres.

À l'inverse, la **déflation** est une baisse durable du niveau général des prix, et la **désinflation** est un **ralentissement** de l'inflation (les prix augmentent encore, mais moins vite).

### Mesure : l'indice des prix à la consommation (IPC)

Au Maroc, l'inflation est mesurée par le **HCP** à l'aide de l'**IPC**, qui suit l'évolution des prix d'un panier de biens et services consommés par les ménages.

$$\text{Taux d'inflation} = \frac{IPC_1 - IPC_0}{IPC_0} \times 100$$

### Le pouvoir d'achat

$$\text{Indice du pouvoir d'achat} = \frac{\text{indice du revenu nominal}}{\text{indice des prix}} \times 100$$

Si les prix augmentent plus vite que les revenus, le **pouvoir d'achat baisse**.

## II. Les formes de l'inflation

| Forme | Taux annuel (ordre de grandeur) |
|---|---|
| Inflation rampante (modérée) | Quelques % par an |
| Inflation galopante | Plus de 10 % par an |
| Hyperinflation | Des centaines, voire des milliers de % |
| Stagflation | Inflation + stagnation de l'activité et chômage |

## III. Les causes de l'inflation

### 1. L'inflation par la demande

La demande globale dépasse l'offre disponible : les producteurs ne peuvent pas augmenter rapidement la production, les **prix montent**. Causes : hausse des revenus, crédit facile, dépenses publiques élevées.

### 2. L'inflation par les coûts

Les entreprises répercutent sur leurs prix la hausse de leurs **coûts de production** : salaires, matières premières, énergie, taux d'intérêt. L'**inflation importée** en est une forme : hausse du prix des produits importés (pétrole, blé) ou dépréciation de la monnaie nationale.

### 3. L'inflation monétaire

Pour les **monétaristes** (Milton Friedman), « l'inflation est toujours et partout un phénomène monétaire » : elle résulte d'une croissance de la masse monétaire plus rapide que celle de la production.

### 4. L'inflation structurelle

Elle provient des **rigidités** de l'économie : monopoles, indexation des salaires sur les prix, circuits de distribution longs avec de nombreux intermédiaires.

## IV. Les conséquences de l'inflation

| Conséquences négatives | Conséquences « positives » |
|---|---|
| Baisse du pouvoir d'achat (salariés, retraités) | Allègement du poids réel des dettes (emprunteurs) |
| Perte de compétitivité-prix à l'exportation | Stimulation possible de l'activité à court terme |
| Découragement de l'épargne | Réduction de la dette publique réelle |
| Incertitude pour les entreprises | |

## V. La lutte contre l'inflation

- **Politique monétaire restrictive** : hausse du taux directeur par Bank Al-Maghrib pour freiner le crédit ;
- **Politique budgétaire de rigueur** : réduction du déficit public ;
- **Politique des revenus** : modération salariale ;
- **Mesures structurelles** : renforcement de la concurrence, lutte contre la spéculation, soutien de certains prix (Caisse de compensation pour le gaz butane, le sucre et la farine).
`,
    exercices: md`
### Exercice 1 — Taux d'inflation et pouvoir d'achat (données fictives)

| Année | IPC | Salaire mensuel moyen (DH) |
|---|---|---|
| 2023 | 104,0 | 5 000 |
| 2024 | 106,6 | 5 100 |

1. Calculez le taux d'inflation en 2024.
2. Calculez le taux de variation du salaire nominal.
3. Le pouvoir d'achat a-t-il augmenté ? Justifiez par un calcul.

<details><summary>Voir le corrigé</summary>

1. $\frac{106{,}6 - 104}{104} \times 100 = 2{,}5\%$.
2. $\frac{5\,100 - 5\,000}{5\,000} \times 100 = 2\%$.
3. Indice du salaire $= 102$ ; indice des prix $= \frac{106{,}6}{104} \times 100 = 102{,}5$.
   Indice du pouvoir d'achat $= \frac{102}{102{,}5} \times 100 \approx 99{,}51$ : le pouvoir d'achat a **baissé** d'environ 0,49 %, car les prix ont augmenté plus vite que le salaire.

</details>

### Exercice 2 — Identifier la cause

Quelle forme d'inflation illustre chaque situation ? a) Le prix mondial du pétrole double ; b) les banques accordent massivement des crédits à la consommation ; c) une grève entraîne une hausse générale des salaires répercutée sur les prix ; d) les produits agricoles passent par cinq intermédiaires avant le consommateur.

<details><summary>Voir le corrigé</summary>

a) Inflation par les coûts (**inflation importée**) ; b) Inflation **par la demande** (et monétaire) ; c) Inflation **par les coûts** (salaires) ; d) Inflation **structurelle** (circuits de distribution).

</details>
`,
    resume: md`
## L'essentiel — L'inflation

- **Définition** : hausse générale, durable et auto-entretenue du niveau des prix.
- **Déflation** : baisse durable des prix ; **désinflation** : ralentissement de l'inflation.
- **Mesure** : IPC (HCP) ; $\text{taux} = \frac{IPC_1 - IPC_0}{IPC_0} \times 100$.
- **Pouvoir d'achat** $= \frac{\text{indice revenu}}{\text{indice prix}} \times 100$.
- **Formes** : rampante, galopante, hyperinflation, stagflation.
- **Causes** : par la demande, par les coûts (dont importée), monétaire (Friedman), structurelle.
- **Conséquences** : baisse du pouvoir d'achat, perte de compétitivité ; allègement des dettes.
- **Remèdes** : hausse du taux directeur, rigueur budgétaire, modération salariale, concurrence, compensation.
`,
    qcm: [
      { q: "La désinflation correspond à :", choix: ["Une baisse des prix", "Un ralentissement de la hausse des prix", "Une hausse rapide des prix", "Une stagnation de la production"], bonne: 1, explication: "Les prix augmentent encore, mais à un rythme plus faible." },
      { q: "L'IPC passe de 110 à 113,3. Le taux d'inflation est de :", choix: ["3,3 %", "3 %", "13,3 %", "2,9 %"], bonne: 1, explication: "(113,3 − 110) / 110 × 100 = 3 %." },
      { q: "La hausse du prix du blé importé provoque une inflation :", choix: ["Par la demande", "Importée (par les coûts)", "Monétaire", "Structurelle"], bonne: 1, explication: "Le coût des produits importés augmente." },
      { q: "Pour lutter contre l'inflation, Bank Al-Maghrib peut :", choix: ["Baisser le taux directeur", "Augmenter le taux directeur", "Augmenter les dépenses publiques", "Supprimer les impôts"], bonne: 1, explication: "Un crédit plus cher freine la demande." },
      { q: "La stagflation associe :", choix: ["Croissance forte et inflation", "Inflation et stagnation économique", "Déflation et croissance", "Plein emploi et stabilité des prix"], bonne: 1, explication: "Elle a notamment marqué les années 1970 après les chocs pétroliers." },
    ],
  },

  "les-dysfonctionnements-du-marche-le-chomage": {
    cours: md`
## Introduction

Le chômage est l'un des principaux déséquilibres du **marché du travail**. Il traduit l'incapacité de l'économie à fournir un emploi à tous ceux qui en cherchent.

## I. Définition et mesure

### 1. Le chômeur au sens du BIT

Selon le **Bureau international du travail (BIT)**, repris par le **HCP**, est chômeur toute personne en âge de travailler (15 ans et plus au Maroc) qui remplit **trois conditions** :

1. être **sans emploi** pendant la période de référence ;
2. être **disponible** pour travailler ;
3. **rechercher activement** un emploi.

### 2. Les notions de population

- **Population active** = actifs occupés + chômeurs ;
- **Population inactive** : élèves, étudiants, retraités, femmes au foyer, personnes ne cherchant pas d'emploi.

### 3. Les indicateurs

$$\text{Taux de chômage} = \frac{\text{nombre de chômeurs}}{\text{population active}} \times 100$$

$$\text{Taux d'activité} = \frac{\text{population active}}{\text{population en âge de travailler}} \times 100$$

$$\text{Taux d'emploi} = \frac{\text{actifs occupés}}{\text{population en âge de travailler}} \times 100$$

Au Maroc, le chômage touche particulièrement les **jeunes**, les **diplômés** et les **femmes**, et il est plus élevé en **milieu urbain**. Le **sous-emploi** (travail insuffisant ou inadapté) complète l'analyse.

## II. Les formes du chômage

| Forme | Explication |
|---|---|
| **Frictionnel** | Temps nécessaire pour passer d'un emploi à un autre ; incompressible |
| **Conjoncturel (keynésien)** | Lié à un ralentissement de l'activité et à une demande insuffisante |
| **Structurel** | Inadéquation durable entre offre et demande de travail (qualifications, régions, secteurs) |
| **Technologique** | Remplacement du travail par des machines |
| **Saisonnier** | Lié aux saisons (agriculture, tourisme) |
| **Classique** | Coût du travail trop élevé par rapport à sa productivité |

## III. Les explications théoriques

### 1. L'analyse libérale (classique et néoclassique)

Le marché du travail est un marché comme les autres : le salaire réel ajuste l'offre et la demande de travail. Le chômage est **volontaire** ou dû à des **rigidités** (salaire minimum, syndicats, charges sociales) qui empêchent le salaire de baisser.

### 2. L'analyse keynésienne

Le niveau de l'emploi dépend de la **demande effective** anticipée par les entreprises. Le chômage est **involontaire** : même si les salaires baissent, une demande insuffisante empêche l'embauche. Baisser les salaires peut même aggraver le chômage en réduisant la consommation.

## IV. Les conséquences du chômage

- **Économiques** : perte de production, baisse de la consommation, coût pour les finances publiques ;
- **Sociales** : pauvreté, exclusion, perte de confiance, migration, tensions sociales.

## V. Les politiques de lutte contre le chômage

| Approche | Mesures |
|---|---|
| **Keynésienne (relance)** | Hausse des dépenses publiques, grands travaux, baisse des taux d'intérêt, soutien au pouvoir d'achat |
| **Libérale (offre)** | Baisse des charges sociales, flexibilité du marché du travail, allègements fiscaux |
| **Structurelle** | Formation professionnelle, adéquation formation-emploi, aide à la création d'entreprises |

**Au Maroc** : programmes de l'**ANAPEC** (Idmaj, Taehil), dispositifs d'appui à l'auto-emploi et à la création d'entreprises, statut de l'**auto-entrepreneur**, développement de la formation professionnelle (OFPPT).
`,
    exercices: md`
### Exercice 1 — Calcul des taux (données fictives, en milliers)

Population de 15 ans et plus : 27 500 ; actifs occupés : 10 600 ; chômeurs : 1 600.

1. Calculez la population active.
2. Calculez le taux de chômage, le taux d'activité et le taux d'emploi.
3. Calculez la population inactive.

<details><summary>Voir le corrigé</summary>

1. Population active $= 10\,600 + 1\,600 = 12\,200$ milliers.
2. Taux de chômage $= \frac{1\,600}{12\,200} \times 100 \approx 13{,}1\%$.
   Taux d'activité $= \frac{12\,200}{27\,500} \times 100 \approx 44{,}4\%$.
   Taux d'emploi $= \frac{10\,600}{27\,500} \times 100 \approx 38{,}5\%$.
3. Inactifs $= 27\,500 - 12\,200 = 15\,300$ milliers.

**Lecture :** sur 100 actifs, environ 13 sont au chômage.

</details>

### Exercice 2 — Qui est chômeur ?

Selon le BIT, les personnes suivantes sont-elles chômeuses ? a) Un étudiant à temps plein ; b) un diplômé sans emploi qui envoie des candidatures et peut commencer demain ; c) une personne sans emploi qui a renoncé à chercher ; d) un ouvrier qui travaille 10 heures par semaine.

<details><summary>Voir le corrigé</summary>

a) **Non** : inactif (non disponible). b) **Oui** : les 3 conditions sont réunies. c) **Non** : inactif, pas de recherche active (« chômeur découragé »). d) **Non** : il a un emploi ; il est en **sous-emploi**.

</details>
`,
    resume: md`
## L'essentiel — Le chômage

- **Chômeur (BIT)** : sans emploi + disponible + recherche active.
- **Population active** = actifs occupés + chômeurs.
- **Taux de chômage** $= \frac{\text{chômeurs}}{\text{pop. active}} \times 100$ ; **taux d'activité** $= \frac{\text{pop. active}}{\text{pop. en âge de travailler}} \times 100$.
- **Formes** : frictionnel, conjoncturel, structurel, technologique, saisonnier, classique.
- **Libéraux** : chômage volontaire / rigidités (salaire trop élevé).
- **Keynes** : chômage involontaire, dû à l'insuffisance de la demande effective.
- **Remèdes** : relance (Keynes), baisse du coût du travail et flexibilité (libéraux), formation (structurel).
- **Maroc** : ANAPEC, OFPPT, auto-entrepreneur.
`,
    qcm: [
      { q: "Selon le BIT, un chômeur doit :", choix: ["Être inscrit à l'ANAPEC", "Être sans emploi, disponible et en recherche active", "Avoir perdu son emploi", "Avoir un diplôme"], bonne: 1, explication: "Ce sont les trois conditions cumulatives du BIT." },
      { q: "La population active comprend :", choix: ["Les actifs occupés seulement", "Les actifs occupés et les chômeurs", "Toute la population de 15 ans et plus", "Les chômeurs et les inactifs"], bonne: 1, explication: "Actifs = personnes qui travaillent + personnes qui cherchent un emploi." },
      { q: "Le chômage lié à l'inadéquation des qualifications est :", choix: ["Frictionnel", "Structurel", "Conjoncturel", "Saisonnier"], bonne: 1, explication: "Il résulte d'un décalage durable entre offre et demande de travail." },
      { q: "Pour Keynes, le chômage est :", choix: ["Volontaire", "Involontaire et lié à la demande effective", "Dû au salaire minimum", "Toujours frictionnel"], bonne: 1, explication: "Les entreprises embauchent selon la demande anticipée." },
      { q: "Avec 1 200 chômeurs et 12 000 actifs occupés, le taux de chômage est :", choix: ["10 %", "≈ 9,1 %", "12 %", "≈ 11 %"], bonne: 1, explication: "1 200 / (12 000 + 1 200) × 100 ≈ 9,1 %." },
    ],
  },

  "la-politique-economique": {
    cours: md`
## Introduction

Face aux dysfonctionnements du marché (inflation, chômage, déséquilibres extérieurs), l'État mène une **politique économique**.

> La **politique économique** est l'ensemble des **décisions** prises par les pouvoirs publics, à l'aide d'**instruments**, pour atteindre des **objectifs** économiques et sociaux.

## I. Les objectifs de la politique économique

### Le carré magique de Kaldor

L'économiste Nicholas Kaldor a résumé les quatre grands objectifs de la politique conjoncturelle :

| Objectif | Indicateur |
|---|---|
| **Croissance économique** | Taux de croissance du PIB réel |
| **Plein emploi** | Taux de chômage |
| **Stabilité des prix** | Taux d'inflation |
| **Équilibre extérieur** | Solde de la balance des paiements (compte courant) |

Il est dit « magique » car il est très difficile d'atteindre les quatre objectifs **en même temps** : ils sont souvent **contradictoires**. Par exemple, une relance favorise la croissance et l'emploi mais peut créer de l'inflation et creuser le déficit extérieur (hausse des importations).

D'autres objectifs s'ajoutent : **réduction des inégalités**, **développement durable**, **équilibre des finances publiques**.

## II. Les types de politiques économiques

### 1. Selon l'horizon

| | Politique conjoncturelle | Politique structurelle |
|---|---|---|
| Horizon | Court terme | Moyen et long terme |
| But | Corriger les déséquilibres immédiats | Transformer les structures de l'économie |
| Exemples | Politique budgétaire, monétaire, de change | Politique industrielle, agricole, éducative, réformes fiscales, privatisations |

**Exemples de politiques structurelles au Maroc** : Plan Maroc Vert (2008) puis Génération Green 2020-2030 (agriculture), Plan d'accélération industrielle 2014-2020, Plan Azur (tourisme), Nouveau modèle de développement (2021).

### 2. Selon l'orientation

- **Politique de relance (expansionniste)** : stimuler la demande pour relancer la croissance et l'emploi (hausse des dépenses publiques, baisse des impôts, baisse des taux d'intérêt).
- **Politique de rigueur (restrictive, stabilisation)** : freiner la demande pour lutter contre l'inflation et réduire les déficits.

## III. Les instruments de la politique économique

| Instrument | Acteur au Maroc | Exemples |
|---|---|---|
| Politique **budgétaire** | Gouvernement, Parlement (loi de finances) | Dépenses publiques, impôts |
| Politique **monétaire** | Bank Al-Maghrib | Taux directeur, réserve monétaire |
| Politique **de change** | Bank Al-Maghrib et gouvernement | Régime de change, bande de fluctuation du dirham |
| Politique **des revenus** | Gouvernement, partenaires sociaux | SMIG, dialogue social |

## IV. Les grandes approches

- **Keynésiens** : l'État doit intervenir activement pour soutenir la demande globale (politique de la demande).
- **Libéraux** : l'État doit améliorer les conditions de l'**offre** (baisse des impôts, flexibilité, concurrence) et assurer la stabilité monétaire.
`,
    exercices: md`
### Exercice 1 — Carré magique (données fictives)

| Indicateur | Pays A | Pays B |
|---|---|---|
| Taux de croissance | 5 % | 1 % |
| Taux de chômage | 6 % | 14 % |
| Taux d'inflation | 7 % | 1,5 % |
| Solde courant (% du PIB) | −5 % | +1 % |

1. Quel pays est le plus proche des objectifs de croissance et d'emploi ?
2. Quels déséquilibres présente chaque pays ?
3. Proposez une politique adaptée à chaque pays.

<details><summary>Voir le corrigé</summary>

1. Le **pays A** (croissance forte, chômage faible).
2. **Pays A** : inflation élevée et déficit extérieur (signes de **surchauffe**). **Pays B** : croissance faible et chômage élevé (**stagnation**), mais prix stables et extérieur équilibré.
3. **Pays A** : politique de **rigueur** (hausse du taux directeur, réduction du déficit). **Pays B** : politique de **relance** (dépenses publiques, baisse des taux), possible grâce à une inflation faible.

</details>

### Exercice 2 — Conjoncturelle ou structurelle ?

Classez : a) baisse du taux directeur ; b) réforme du système éducatif ; c) hausse temporaire des dépenses d'investissement public ; d) stratégie de développement de l'industrie automobile ; e) hausse du SMIG.

<details><summary>Voir le corrigé</summary>

a) **Conjoncturelle** (monétaire) ; b) **Structurelle** ; c) **Conjoncturelle** (budgétaire) ; d) **Structurelle** (industrielle) ; e) **Conjoncturelle** (politique des revenus), avec des effets durables.

</details>
`,
    resume: md`
## L'essentiel — La politique économique

- **Définition** : décisions de l'État, avec des instruments, pour atteindre des objectifs.
- **Carré magique (Kaldor)** : croissance, plein emploi, stabilité des prix, équilibre extérieur — objectifs souvent **contradictoires**.
- **Conjoncturelle** (court terme) vs **structurelle** (long terme : Plan Maroc Vert, plan industriel, NMD).
- **Relance** (stimuler la demande) vs **rigueur** (freiner la demande, lutter contre l'inflation).
- **Instruments** : budgétaire, monétaire (BAM), change, revenus.
- **Keynésiens** : politique de la demande ; **libéraux** : politique de l'offre.
`,
    qcm: [
      { q: "Le carré magique de Kaldor ne comprend pas :", choix: ["La croissance", "Le plein emploi", "La réduction des impôts", "La stabilité des prix"], bonne: 2, explication: "Les 4 objectifs : croissance, emploi, prix, équilibre extérieur." },
      { q: "Une politique structurelle agit :", choix: ["À court terme", "À moyen et long terme", "Uniquement sur les prix", "Uniquement sur la monnaie"], bonne: 1, explication: "Elle transforme durablement les structures de l'économie." },
      { q: "Une politique de relance peut provoquer :", choix: ["Une baisse de l'inflation", "Une hausse des importations et de l'inflation", "Une hausse du chômage", "Un excédent commercial"], bonne: 1, explication: "La hausse de la demande attire des importations et peut faire monter les prix." },
      { q: "Au Maroc, la politique monétaire est conduite par :", choix: ["Le ministère des Finances", "Bank Al-Maghrib", "Le HCP", "Le Parlement"], bonne: 1, explication: "La banque centrale est chargée de la politique monétaire." },
      { q: "Le Plan Maroc Vert est un exemple de politique :", choix: ["Conjoncturelle", "Structurelle", "Monétaire", "De change"], bonne: 1, explication: "C'est une stratégie sectorielle de long terme pour l'agriculture." },
    ],
  },

  "la-politique-monetaire": {
    cours: md`
## Introduction

La monnaie joue un rôle central dans l'économie. La **politique monétaire** consiste, pour la banque centrale, à agir sur la **quantité de monnaie** et sur son **coût** (les taux d'intérêt) pour atteindre ses objectifs.

## I. La monnaie et la masse monétaire

### 1. Les fonctions de la monnaie

- **Intermédiaire des échanges** ;
- **Unité de compte** (mesure de la valeur) ;
- **Réserve de valeur**.

### 2. Les formes de la monnaie

- **Monnaie fiduciaire** : billets et pièces ;
- **Monnaie scripturale** : dépôts à vue sur les comptes bancaires, qui circulent par chèque, virement ou carte.

### 3. Les agrégats monétaires au Maroc (Bank Al-Maghrib)

Classés par **liquidité décroissante** :

| Agrégat | Composition |
|---|---|
| **M1** | Monnaie fiduciaire + monnaie scripturale (dépôts à vue) |
| **M2** | M1 + placements à vue (comptes sur carnet, comptes d'épargne) |
| **M3** | M2 + autres actifs monétaires (comptes à terme, bons à échéance fixe, dépôts en devises, titres d'OPCVM monétaires…) |

La **masse monétaire** au sens large correspond à **M3**.

### 4. La création monétaire

La monnaie est créée principalement par les **banques commerciales** lorsqu'elles accordent des **crédits** (« les crédits font les dépôts »). Elle est aussi créée lors de l'achat de devises ou du financement du Trésor. Le remboursement d'un crédit **détruit** de la monnaie.

## II. Bank Al-Maghrib et ses objectifs

**Bank Al-Maghrib (BAM)**, banque centrale du Maroc, est régie par la loi n° 40-17. Son **objectif principal** est la **stabilité des prix**. Elle contribue aussi à la stabilité du système financier.

Elle intervient à travers son **Conseil**, qui se réunit chaque trimestre pour décider notamment du niveau du **taux directeur**.

## III. Les instruments de la politique monétaire

| Instrument | Fonctionnement | Effet d'une hausse |
|---|---|---|
| **Taux directeur** | Taux auquel BAM prête des liquidités aux banques (avances à 7 jours) | Crédit plus cher → moins de crédits → moins de demande → moins d'inflation |
| **Réserve monétaire (obligatoire)** | Part des dépôts que les banques doivent déposer chez BAM | Les banques ont moins de liquidités à prêter |
| **Opérations d'open market** | BAM achète ou vend des titres, fournit ou retire des liquidités | Retrait de liquidités → resserrement |
| **Facilités permanentes** | Avances à 24 heures et facilité de dépôt | Encadrent les taux du marché monétaire |

## IV. Les types de politique monétaire

- **Politique monétaire expansive (accommodante)** : baisse du taux directeur, baisse de la réserve obligatoire, injection de liquidités → favorise le crédit, l'investissement, la consommation et la croissance ; risque d'inflation.
- **Politique monétaire restrictive** : hausse du taux directeur, hausse de la réserve obligatoire → freine le crédit et la demande → lutte contre l'inflation ; risque de ralentissement.

### Le mécanisme de transmission

$$\text{Taux directeur} \uparrow \Rightarrow \text{taux des crédits} \uparrow \Rightarrow \text{crédits} \downarrow \Rightarrow \text{demande} \downarrow \Rightarrow \text{inflation} \downarrow$$

## V. Les limites

- **Délais** : les effets n'apparaissent qu'après plusieurs mois ;
- **Trappe à liquidité** (Keynes) : quand les taux sont déjà très bas, les baisser encore est peu efficace ;
- L'inflation **importée** (pétrole, blé) est peu sensible à la politique monétaire nationale ;
- Le crédit dépend aussi de la **confiance** des agents.
`,
    exercices: md`
### Exercice 1 — Agrégats monétaires (données fictives, en milliards de DH)

Monnaie fiduciaire : 400 ; monnaie scripturale : 780 ; placements à vue : 190 ; autres actifs monétaires : 330.

1. Calculez M1, M2 et M3.
2. Quelle est la part de la monnaie fiduciaire dans M1 ?
3. M3 était de 1 600 l'année précédente : calculez son taux de variation.

<details><summary>Voir le corrigé</summary>

1. $M1 = 400 + 780 = 1\,180$ ; $M2 = 1\,180 + 190 = 1\,370$ ; $M3 = 1\,370 + 330 = 1\,700$ Mds DH.
2. $\frac{400}{1\,180} \times 100 \approx 33{,}9\%$.
3. $\frac{1\,700 - 1\,600}{1\,600} \times 100 = 6{,}25\%$ : la masse monétaire a augmenté de 6,25 %.

</details>

### Exercice 2 — Analyse d'une décision

Bank Al-Maghrib décide de relever son taux directeur de 50 points de base. Expliquez l'objectif de cette décision et ses effets attendus sur l'économie.

<details><summary>Voir le corrigé</summary>

- **Objectif** : lutter contre l'**inflation** (politique monétaire **restrictive**).
- **Effets attendus** : les banques se refinancent plus cher → elles augmentent les taux des crédits → les ménages empruntent moins pour consommer et les entreprises pour investir → la demande globale ralentit → la pression sur les prix diminue.
- **Risque** : ralentissement de la croissance et de l'emploi.

(50 points de base = 0,50 point de pourcentage.)

</details>
`,
    resume: md`
## L'essentiel — La politique monétaire

- **Fonctions de la monnaie** : intermédiaire des échanges, unité de compte, réserve de valeur.
- **Agrégats (BAM)** : $M1$ = fiduciaire + scripturale ; $M2 = M1$ + placements à vue ; $M3 = M2$ + autres actifs monétaires.
- **Création monétaire** : par les crédits bancaires ; le remboursement détruit la monnaie.
- **BAM** : objectif principal = **stabilité des prix** (loi 40-17).
- **Instruments** : taux directeur, réserve monétaire, open market, facilités permanentes.
- **Expansive** : taux ↓ → crédit ↑ → croissance ↑ (risque d'inflation).
- **Restrictive** : taux ↑ → crédit ↓ → inflation ↓ (risque de ralentissement).
- **Limites** : délais, trappe à liquidité, inflation importée.
`,
    qcm: [
      { q: "M2 est égal à :", choix: ["Monnaie fiduciaire + scripturale", "M1 + placements à vue", "M3 − M1", "M1 + dépôts en devises"], bonne: 1, explication: "M2 ajoute les comptes sur carnet et d'épargne à M1." },
      { q: "L'objectif principal de Bank Al-Maghrib est :", choix: ["Le plein emploi", "La stabilité des prix", "L'équilibre budgétaire", "La hausse des exportations"], bonne: 1, explication: "Fixé par la loi 40-17 portant statut de BAM." },
      { q: "Une baisse du taux directeur vise à :", choix: ["Freiner l'inflation", "Relancer le crédit et l'activité", "Augmenter l'épargne", "Réduire la masse monétaire"], bonne: 1, explication: "C'est une politique monétaire accommodante." },
      { q: "La monnaie est principalement créée par :", choix: ["L'impression de billets", "Les crédits accordés par les banques", "Les impôts", "L'épargne des ménages"], bonne: 1, explication: "Les crédits font les dépôts." },
      { q: "Une hausse de la réserve obligatoire :", choix: ["Augmente les liquidités des banques", "Réduit la capacité des banques à prêter", "Baisse les taux d'intérêt", "N'a aucun effet"], bonne: 1, explication: "Les banques doivent immobiliser davantage de fonds chez BAM." },
    ],
  },

  "la-politique-budgetaire": {
    cours: md`
## Introduction

La **politique budgétaire** consiste à utiliser le **budget de l'État** (recettes et dépenses publiques) pour agir sur l'activité économique.

## I. Le budget de l'État

### 1. La loi de finances

Au Maroc, le budget est présenté dans la **loi de finances (LF)**, préparée par le gouvernement et votée par le **Parlement** chaque année (loi organique n° 130-13 relative à la loi de finances). Elle prévoit et autorise les recettes et les dépenses de l'État pour l'année civile.

### 2. Les recettes publiques

- **Recettes fiscales** : impôts **directs** (IS, IR) et **indirects** (TVA, droits de douane, taxes intérieures de consommation) ; la TVA est la première recette fiscale ;
- **Recettes non fiscales** : revenus du domaine et des entreprises publiques, dons, produits des privatisations ;
- **Emprunts** (ressources de financement).

### 3. Les dépenses publiques

- **Dépenses de fonctionnement** : salaires des fonctionnaires, matériel, compensation ;
- **Dépenses d'investissement** : routes, barrages, écoles, hôpitaux ;
- **Service de la dette** : remboursement du capital et paiement des intérêts.

### 4. Le solde budgétaire

$$\text{Solde budgétaire} = \text{recettes} - \text{dépenses}$$

- Solde $> 0$ : **excédent** ; solde $< 0$ : **déficit** ; solde $= 0$ : équilibre.
- Il s'exprime souvent en **% du PIB** : $\frac{\text{solde}}{PIB} \times 100$.
- Le déficit est financé par l'**emprunt** (intérieur ou extérieur), ce qui augmente la **dette publique**.

## II. Les approches de la politique budgétaire

### 1. L'approche classique : la neutralité

Pour les libéraux, le budget doit être **équilibré** et le plus **réduit** possible. L'État ne doit pas perturber le marché ; l'emprunt public risque d'**évincer** l'investissement privé (**effet d'éviction**).

### 2. L'approche keynésienne : l'interventionnisme

Keynes justifie le **déficit budgétaire** en période de crise : l'État doit soutenir la demande globale.

**Le multiplicateur d'investissement** : une dépense publique supplémentaire $\Delta G$ entraîne une hausse plus que proportionnelle du revenu national :

$$\Delta Y = k \times \Delta G \qquad \text{avec} \qquad k = \frac{1}{1 - c}$$

où $c$ est la **propension marginale à consommer**. Exemple : si $c = 0{,}8$, alors $k = 5$ ; une dépense de 10 Mds DH peut accroître le revenu de 50 Mds DH.

## III. Les types de politique budgétaire

| | Relance (expansionniste) | Rigueur (restrictive) |
|---|---|---|
| Moyens | Hausse des dépenses publiques, baisse des impôts | Baisse des dépenses, hausse des impôts |
| Objectif | Croissance et emploi | Réduire l'inflation et le déficit |
| Risques | Déficit, dette, inflation, hausse des importations | Ralentissement, chômage |

## IV. Les limites de la politique budgétaire

- **Endettement** : les déficits accumulés augmentent la dette et le poids des intérêts ;
- **Effet d'éviction** : l'État emprunte l'épargne disponible au détriment des entreprises ;
- **Fuite par les importations** : en économie ouverte, une partie de la relance profite aux producteurs étrangers ;
- **Délais** de vote et de mise en œuvre ;
- **Rigidité** des dépenses (salaires, dette).
`,
    exercices: md`
### Exercice 1 — Solde budgétaire (données fictives, en milliards de DH)

Recettes fiscales : 290 ; recettes non fiscales : 40 ; dépenses de fonctionnement : 260 ; dépenses d'investissement : 105 ; intérêts de la dette : 35. PIB : 1 500.

1. Calculez les recettes et les dépenses totales.
2. Calculez le solde budgétaire et son poids dans le PIB.
3. Comment ce solde peut-il être financé ?

<details><summary>Voir le corrigé</summary>

1. Recettes $= 290 + 40 = 330$ ; dépenses $= 260 + 105 + 35 = 400$ Mds DH.
2. Solde $= 330 - 400 = -70$ Mds DH : **déficit**. Poids : $\frac{-70}{1\,500} \times 100 \approx -4{,}67\%$ du PIB.
3. Par l'**emprunt** intérieur (bons du Trésor) ou extérieur, ce qui augmente la dette publique.

</details>

### Exercice 2 — Multiplicateur

La propension marginale à consommer est de 0,75. L'État augmente ses investissements de 20 Mds DH.

1. Calculez le multiplicateur.
2. Calculez la variation du revenu national.
3. Pourquoi l'effet réel peut-il être plus faible ?

<details><summary>Voir le corrigé</summary>

1. $k = \frac{1}{1 - 0{,}75} = 4$.
2. $\Delta Y = 4 \times 20 = 80$ Mds DH.
3. Parce qu'une partie des revenus distribués est **épargnée**, **prélevée en impôts** ou dépensée en **importations** (fuites) ; l'effet d'éviction peut aussi réduire l'investissement privé.

</details>
`,
    resume: md`
## L'essentiel — La politique budgétaire

- **Loi de finances** : prévoit et autorise recettes et dépenses ; votée par le Parlement.
- **Recettes** : fiscales (IS, IR, TVA…), non fiscales ; **dépenses** : fonctionnement, investissement, service de la dette.
- **Solde budgétaire** = recettes − dépenses (en % du PIB) ; déficit → emprunt → dette.
- **Classiques** : budget équilibré, neutralité, effet d'éviction.
- **Keynes** : déficit utile en crise ; **multiplicateur** $k = \frac{1}{1-c}$, $\Delta Y = k \cdot \Delta G$.
- **Relance** : dépenses ↑, impôts ↓ ; **rigueur** : dépenses ↓, impôts ↑.
- **Limites** : dette, éviction, fuite par les importations, délais.
`,
    qcm: [
      { q: "La première recette fiscale de l'État marocain est :", choix: ["L'IR", "L'IS", "La TVA", "Les droits de douane"], bonne: 2, explication: "La TVA, impôt indirect sur la consommation." },
      { q: "Si c = 0,8, le multiplicateur vaut :", choix: ["0,8", "1,25", "5", "8"], bonne: 2, explication: "k = 1 / (1 − 0,8) = 5." },
      { q: "Le déficit budgétaire correspond à :", choix: ["Recettes > dépenses", "Dépenses > recettes", "Importations > exportations", "Épargne > investissement"], bonne: 1, explication: "Le solde budgétaire est négatif." },
      { q: "L'effet d'éviction signifie que :", choix: ["L'État évince les importations", "L'emprunt public réduit l'investissement privé", "Les impôts baissent", "La dette disparaît"], bonne: 1, explication: "L'État capte l'épargne et fait monter les taux." },
      { q: "Une politique budgétaire de relance consiste à :", choix: ["Augmenter les impôts", "Augmenter les dépenses publiques", "Réduire les investissements publics", "Relever le taux directeur"], bonne: 1, explication: "Elle soutient la demande globale." },
    ],
  },
};
