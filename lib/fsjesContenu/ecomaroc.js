// Économie du Maroc (S3) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
// Chiffres sourcés (HCP, Bank Al-Maghrib, MEF, Office des changes), dernières données connues en septembre 2026.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Les structures et les ressources de l'économie marocaine",
    description: "Position géographique, population et urbanisation (RGPH 2024), phosphates, eau et énergie, PIB en valeur et en volume, structure sectorielle et régions.",
    resume: md`
## L'essentiel — Structures et ressources de l'économie marocaine

- Pays à **revenu intermédiaire de la tranche inférieure**, économie émergente et ouverte ; atout majeur : la position entre l'Europe et l'Afrique (Tanger Med, 2007).
- **RGPH 2024** : 36 828 330 habitants ; croissance de 0,85 % par an (2014-2024) ; taux d'urbanisation de 62,8 % ; fécondité sous le seuil de renouvellement.
- **Fenêtre démographique** : beaucoup d'actifs potentiels ; une chance si l'économie crée assez d'emplois.
- Ressources : environ 70 % des réserves mondiales de **phosphates** (OCP, 99,8 milliards de DH exportés en 2025), mer, soleil et vent.
- Contraintes : **stress hydrique** et sécheresses répétées ; **dépendance énergétique** aux importations d'hydrocarbures.
- **PIB** = somme des valeurs ajoutées + impôts nets sur les produits ; $1 + g_{valeur} = (1 + g_{volume})(1 + g_{prix})$.
- 2024 : PIB de 1 614,57 milliards de DH courants (+ 8,7 %), croissance en volume de 4,4 %, soit environ 43 800 DH par habitant.
- Structure : services plus de la moitié du PIB ; agriculture environ un dixième du PIB mais 25 % de l'emploi ; forte **dualité** et secteur informel important.
- **12 régions** depuis 2015 ; Casablanca-Settat produit près d'un tiers du PIB.
`,
    exercices: md`
### Exercice 2 — Productivité relative des secteurs

Le tableau suivant donne une répartition **simplifiée, à but pédagogique**, de la valeur ajoutée et de l'emploi par grand secteur (en %) :

| Secteur | Part de la valeur ajoutée | Part de l'emploi |
|---|---:|---:|
| Agriculture, forêt, pêche | 11 | 25,0 |
| Industrie, mines, énergie, BTP | 29 | 25,8 |
| Services | 60 | 49,2 |

1. Calculez la productivité relative de chaque secteur (part de la valeur ajoutée / part de l'emploi).
2. Interprétez le résultat obtenu pour l'agriculture.
3. Que se passe-t-il pour la productivité moyenne de l'économie quand des actifs quittent l'agriculture pour l'industrie ?

<details><summary>Voir le corrigé</summary>

**1)** Agriculture : $11 / 25 = \mathbf{0{,}44}$ ; industrie : $29 / 25{,}8 \approx \mathbf{1{,}12}$ ; services : $60 / 49{,}2 \approx \mathbf{1{,}22}$.

**2)** Un actif agricole produit en moyenne 44 % de la valeur ajoutée d'un actif moyen de l'économie : petites exploitations, faible mécanisation, cultures pluviales soumises aux aléas climatiques, sous-emploi rural.

**3)** Le déplacement de main-d'œuvre d'un secteur peu productif vers un secteur plus productif augmente la productivité moyenne, même si la productivité de chaque secteur ne change pas : c'est l'**effet de réallocation**, moteur classique du développement. Encore faut-il que l'industrie et les services modernes créent assez d'emplois pour absorber l'exode rural, sinon les actifs se retrouvent dans l'informel urbain.

</details>

### Exercice 3 — Question de synthèse : atouts et contraintes

**Sujet** : « Présentez les principaux atouts et les principales contraintes structurelles de l'économie marocaine. »

Rédigez une introduction, un plan en deux parties et une conclusion.

<details><summary>Voir le corrigé</summary>

**Introduction** : définir l'économie émergente, situer le Maroc (revenu intermédiaire, 36,8 millions d'habitants en 2024, économie diversifiée) ; problématique : ses atouts suffisent-ils à compenser des contraintes qui freinent une croissance forte et inclusive ?

**I. Des atouts réels**
- A. Une position géographique stratégique (proximité de l'Europe, Tanger Med, porte de l'Afrique) et des accords de libre-échange.
- B. Des ressources spécifiques : phosphates (environ 70 % des réserves mondiales), potentiel solaire et éolien, ressources halieutiques, patrimoine touristique.
- C. Une population jeune et de plus en plus urbaine (fenêtre démographique).

**II. Des contraintes structurelles**
- A. La dépendance au climat : stress hydrique, sécheresses, agriculture pluviale qui fait varier la croissance.
- B. La dépendance énergétique et le déficit commercial qui en résulte.
- C. La dualité de l'économie : faible productivité agricole, poids de l'informel, disparités régionales, chômage des jeunes.

**Conclusion** : les atouts sont valorisés par les stratégies sectorielles et le Nouveau modèle de développement ; la levée des contraintes passe par la gestion de l'eau, la transition énergétique, l'éducation et la création d'emplois formels.

</details>
`,
    qcm: [
      { q: "Selon le RGPH 2024, la population légale du Maroc est d'environ :", choix: ["30,5 millions", "33,8 millions", "36,8 millions", "40,2 millions"], bonne: 2, explication: "36 828 330 habitants au 1er septembre 2024." },
      { q: "Le taux d'urbanisation du Maroc en 2024 est de :", choix: ["51,2 %", "62,8 %", "70,4 %", "45,0 %"], bonne: 1, explication: "Contre 60,4 % en 2014." },
      { q: "Entre 2014 et 2024, la population a augmenté en moyenne de :", choix: ["0,85 % par an", "1,25 % par an", "2,1 % par an", "0,2 % par an"], bonne: 0, explication: "Le rythme ralentit : 1,25 % par an entre 2004 et 2014." },
      { q: "Le Maroc détient environ quelle part des réserves mondiales de phosphates ?", choix: ["10 %", "30 %", "70 %", "95 %"], bonne: 2, explication: "Réserves exploitées par le groupe OCP." },
      { q: "L'organisme qui établit les comptes nationaux au Maroc est :", choix: ["Bank Al-Maghrib", "Le HCP", "L'Office des changes", "La Cour des comptes"], bonne: 1, explication: "Le Haut-Commissariat au Plan publie aussi l'IPC et les chiffres de l'emploi." },
      { q: "Le PIB en valeur augmente de 8,7 % et le PIB en volume de 4,4 %. Les prix ont augmenté d'environ :", choix: ["13,1 %", "4,3 %", "4,1 %", "2 %"], bonne: 2, explication: "1,087 / 1,044 − 1 ≈ 4,1 %." },
      { q: "En 2025, la part de l'agriculture, forêt et pêche dans l'emploi est d'environ :", choix: ["5 %", "25 %", "50 %", "70 %"], bonne: 1, explication: "Alors que son poids dans le PIB est bien plus faible." },
      { q: "Depuis la régionalisation avancée de 2015, le Maroc compte :", choix: ["16 régions", "12 régions", "10 régions", "8 régions"], bonne: 1, explication: "Chaque région a un conseil élu." },
      { q: "La principale contrainte naturelle de l'agriculture marocaine est :", choix: ["Le manque de terres", "Le stress hydrique et l'irrégularité des pluies", "Le froid", "L'absence de littoral"], bonne: 1, explication: "Les sécheresses répétées pèsent sur les récoltes." },
      { q: "Le PIB par habitant mesure :", choix: ["Le revenu de chaque ménage", "Le niveau de production moyen par habitant", "Les inégalités", "Le taux de pauvreté"], bonne: 1, explication: "C'est une moyenne qui ne dit rien de la répartition." },
    ],
  },

  2: {
    titre: "L'évolution de l'économie marocaine depuis l'indépendance",
    description: "Planification, marocanisation, crise de la dette de 1983, ajustement structurel, ouverture, stratégies sectorielles et Nouveau modèle de développement.",
    resume: md`
## L'essentiel — L'évolution de l'économie marocaine

- **1956-1973** : construction des institutions (Banque du Maroc, dirham et CDG en 1959), planification indicative, **politique des barrages** (1967), **marocanisation** (1973).
- **1973-1983** : boom puis rechute des phosphates, chocs pétroliers, dépenses publiques et **endettement extérieur** ; hausse des taux d'intérêt mondiaux ; **crise de la dette en 1983**.
- **PAS 1983-1993** : stabilisation (FMI : déficits, dévaluations, subventions) et ajustement structurel (Banque mondiale : libéralisation, privatisations, réforme financière).
- Réforme fiscale : **TVA 1986**, **IS 1987**, **IGR 1990** ; privatisations (loi 39-89) ; dirham convertible pour les opérations courantes en 1993.
- Bilan du PAS : équilibres rétablis, coût social élevé, croissance faible et dépendante des pluies.
- **Ouverture** : accords de Marrakech créant l'OMC (1994), accord d'association avec l'UE (signé en 1996, en vigueur en 2000), ALE avec les États-Unis (2004, en vigueur en 2006).
- **Depuis 2005** : grands chantiers (Tanger Med 2007, LGV 2018), stratégies sectorielles (Émergence, Plan Maroc Vert, Halieutis, énergie), INDH (2005).
- **NMD (2021)** : horizon 2035, doubler le PIB par habitant ; protection sociale généralisée (loi-cadre 09-21), charte de l'investissement (loi-cadre 03-22), Fonds Mohammed VI pour l'investissement.
`,
    exercices: md`
### Exercice 2 — Classer les événements dans leur phase

Rattachez chaque événement à l'une des phases : (a) construction de l'économie nationale, (b) crise de la dette, (c) ajustement structurel, (d) ouverture, (e) grands chantiers et stratégies sectorielles, (f) Nouveau modèle de développement.

1. Création de l'impôt sur les sociétés.
2. Lancement de l'INDH.
3. Émission du dirham.
4. Recours au FMI faute de devises pour payer la dette.
5. Entrée en vigueur de l'accord d'association avec l'Union européenne.
6. Loi-cadre sur la généralisation de la protection sociale.
7. Politique des barrages.
8. Mise en service du port de Tanger Med.

<details><summary>Voir le corrigé</summary>

| Événement | Date | Phase |
|---|---|---|
| 1. Impôt sur les sociétés | 1987 | (c) ajustement structurel (réforme fiscale) |
| 2. INDH | 2005 | (e) grands chantiers et stratégies sectorielles |
| 3. Émission du dirham | 1959 | (a) construction de l'économie nationale |
| 4. Recours au FMI | 1983 | (b) crise de la dette |
| 5. Accord d'association UE | 2000 | (d) ouverture |
| 6. Loi-cadre 09-21 | 2021 | (f) Nouveau modèle de développement |
| 7. Politique des barrages | 1967 | (a) construction de l'économie nationale |
| 8. Tanger Med | 2007 | (e) grands chantiers et stratégies sectorielles |

</details>

### Exercice 3 — Question de synthèse : le programme d'ajustement structurel

**Sujet** : « Le programme d'ajustement structurel au Maroc (1983-1993) : causes, contenu et bilan. »

Proposez un plan détaillé.

<details><summary>Voir le corrigé</summary>

**Introduction** : définir l'ajustement structurel (programme de réformes conditionnant l'aide du FMI et de la Banque mondiale) ; le Maroc y entre en 1983 et en sort en 1993.

**I. Une crise de la dette aux causes internes et externes**
- A. Causes externes : rechute des prix des phosphates après 1975, chocs pétroliers, hausse des taux d'intérêt et du dollar au début des années 1980.
- B. Causes internes : investissements publics et subventions financés par l'endettement extérieur (plan 1973-1977), sécheresses.

**II. Le contenu du programme**
- A. La stabilisation : réduction du déficit budgétaire, baisse des subventions, dévaluations, encadrement du crédit.
- B. Les réformes structurelles : libéralisation des prix et du commerce, réforme fiscale (TVA, IS, IGR), privatisations (loi 39-89), réforme financière, convertibilité courante du dirham.

**III. Un bilan contrasté**
- A. Des résultats financiers : réduction des déficits, retour de la confiance des créanciers, économie plus ouverte.
- B. Des coûts sociaux et des limites : recul des services publics, chômage des diplômés, pauvreté, croissance faible et dépendante des pluies, qui justifieront les politiques sociales et sectorielles des décennies suivantes.

</details>
`,
    qcm: [
      { q: "Le dirham a été émis pour la première fois en :", choix: ["1956", "1959", "1973", "1987"], bonne: 1, explication: "La même année que la création de la Banque du Maroc et de la CDG." },
      { q: "La marocanisation de 1973 visait à :", choix: ["Privatiser les entreprises publiques", "Transférer à des Marocains la majorité du capital d'entreprises de certains secteurs", "Nationaliser les banques étrangères", "Créer le dirham"], bonne: 1, explication: "À ne pas confondre avec les privatisations de la loi 39-89." },
      { q: "La politique des barrages a été lancée en :", choix: ["1956", "1967", "1983", "2008"], bonne: 1, explication: "Objectif : un million d'hectares irrigués." },
      { q: "Le Maroc entre dans un programme d'ajustement structurel en :", choix: ["1975", "1983", "1993", "2000"], bonne: 1, explication: "À la suite de la crise de la dette extérieure." },
      { q: "Parmi ces causes, laquelle a contribué à la crise de la dette de 1983 ?", choix: ["La baisse des taux d'intérêt mondiaux", "La rechute des prix des phosphates après le boom de 1974", "Un excédent commercial", "La création de la TVA"], bonne: 1, explication: "Les recettes attendues n'ont pas duré alors que les dépenses et la dette augmentaient." },
      { q: "La TVA a été introduite au Maroc en :", choix: ["1986", "1990", "1996", "2005"], bonne: 0, explication: "Suivie de l'IS en 1987 et de l'IGR en 1990." },
      { q: "La loi 39-89 porte sur :", choix: ["Le statut de Bank Al-Maghrib", "Le transfert d'entreprises publiques au secteur privé", "La protection sociale", "Les marchés publics"], bonne: 1, explication: "C'est la loi des privatisations." },
      { q: "L'accord d'association entre le Maroc et l'Union européenne est entré en vigueur en :", choix: ["1994", "1996", "2000", "2006"], bonne: 2, explication: "Il avait été signé en 1996." },
      { q: "L'INDH a été lancée en :", choix: ["1999", "2005", "2011", "2021"], bonne: 1, explication: "Initiative nationale pour le développement humain." },
      { q: "Le Nouveau modèle de développement fixe notamment pour objectif à l'horizon 2035 de :", choix: ["Doubler le PIB par habitant", "Supprimer l'impôt sur le revenu", "Fixer le dirham à l'euro", "Nationaliser l'industrie"], bonne: 0, explication: "Rapport de la Commission spéciale présenté en 2021." },
    ],
  },

  3: {
    titre: "La croissance économique au Maroc et ses déterminants",
    description: "Croissance effective et potentielle, dépendance à la pluie, demande intérieure, paradoxe de l'investissement (ICOR), comptabilité de Solow et contributions.",
    resume: md`
## L'essentiel — La croissance économique au Maroc

- **Croissance** : variation du PIB en **volume** ; croissance effective ou potentielle ; ne pas la confondre avec le **développement**.
- Profil marocain : rythme modéré, **forte volatilité** liée à l'agriculture pluviale, sensibilité aux chocs extérieurs.
- HCP : **4,4 % en 2024**, **4,9 % en 2025** (valeur ajoutée agricole + 8,2 %, non agricole + 3,9 %) ; récolte céréalière d'environ 44 millions de quintaux en 2025.
- Suivre la **croissance non agricole**, plus régulière, pour juger la tendance de fond.
- Demande : $PIB = C + I + (X - M)$ ; consommation des ménages première composante ; demande extérieure nette généralement négative.
- **Investissement** autour de 30 % du PIB mais croissance modérée : **ICOR** = taux d'investissement / taux de croissance, élevé au Maroc.
- Offre : $g_Y = \alpha g_K + (1 - \alpha) g_L + g_A$ ; croissance surtout tirée par le **capital**, faible **PGF**.
- Freins : capital humain, faible activité féminine (environ une femme sur cinq), informel, climat des affaires.
- **Contribution** d'un secteur = poids en $N - 1$ × taux de croissance (en points) ; la somme des contributions donne la croissance du PIB.
`,
    exercices: md`
### Exercice 2 — La croissance vue par la demande

Données **simplifiées, à but pédagogique** (volumes, indice PIB $N - 1$ = 1 000) :

| Composante | Valeur en $N - 1$ | Croissance en $N$ |
|---|---:|---:|
| Consommation finale | 740 | + 4 % |
| Investissement | 300 | + 3 % |
| Exportations | 400 | + 6 % |
| Importations | 440 | + 7 % |

1. Vérifiez l'équilibre $PIB = C + I + X - M$ en $N - 1$.
2. Calculez le PIB de $N$ et le taux de croissance.
3. Calculez la contribution de chaque composante et celle de la demande extérieure nette. Quel est le moteur de la croissance ?

<details><summary>Voir le corrigé</summary>

**1)** $740 + 300 + 400 - 440 = 1\,000$ ✔.

**2)** $PIB_N = 769{,}6 + 309 + 424 - 470{,}8 = \mathbf{1\,031{,}8}$ : croissance de **3,18 %**.

**3)** Consommation : $0{,}74 \times 4 = 2{,}96$ points ; investissement : $0{,}30 \times 3 = 0{,}90$ point ; exportations : $0{,}40 \times 6 = 2{,}40$ points ; importations : $-0{,}44 \times 7 = -3{,}08$ points. Demande extérieure nette : $2{,}40 - 3{,}08 = \mathbf{-0{,}68}$ point. La croissance est tirée par la **demande intérieure** (3,86 points), dont une partie « fuit » vers les importations. C'est le schéma habituel de l'économie marocaine : quand la demande intérieure accélère, les importations d'équipements, d'énergie et de biens de consommation augmentent aussi.

</details>

### Exercice 3 — Question de synthèse

**Sujet** : « Pourquoi la croissance économique marocaine est-elle à la fois volatile et insuffisante ? »

Proposez un plan détaillé.

<details><summary>Voir le corrigé</summary>

**Introduction** : définir la croissance ; rappeler les chiffres récents (4,4 % en 2024, 4,9 % en 2025) et l'objectif du NMD (doubler le PIB par habitant d'ici 2035, ce qui suppose une croissance durablement plus forte).

**I. Une croissance volatile**
- A. Le poids de l'agriculture pluviale : les récoltes céréalières font varier la croissance de plusieurs points d'une année à l'autre.
- B. La sensibilité aux chocs extérieurs : demande européenne, prix de l'énergie, tourisme, crise sanitaire de 2020.

**II. Une croissance insuffisante**
- A. Un investissement élevé mais peu efficace (ICOR élevé, poids de l'investissement public).
- B. Une faible productivité globale des facteurs : capital humain, informel, petite taille des entreprises.
- C. Un potentiel de main-d'œuvre sous-utilisé : faible taux d'activité féminin, chômage des jeunes.

**Conclusion** : les réponses passent par la gestion de l'eau et la diversification agricole, l'investissement privé productif (charte de 2022), l'éducation et l'emploi des femmes.

</details>
`,
    qcm: [
      { q: "La croissance économique se mesure par la variation du PIB :", choix: ["En valeur", "En volume", "Par habitant uniquement", "En devises"], bonne: 1, explication: "Le volume neutralise l'effet des prix." },
      { q: "Selon le HCP, la croissance du Maroc en 2025 a été de :", choix: ["1,5 %", "3,2 %", "4,9 %", "7,2 %"], bonne: 2, explication: "Contre 4,4 % en 2024." },
      { q: "La principale cause de la volatilité de la croissance marocaine est :", choix: ["Le tourisme", "L'agriculture pluviale", "Le secteur bancaire", "Les phosphates"], bonne: 1, explication: "Les récoltes céréalières dépendent de la pluviométrie." },
      { q: "L'ICOR se calcule comme :", choix: ["Croissance / investissement", "Taux d'investissement / taux de croissance", "Investissement / consommation", "PIB / capital"], bonne: 1, explication: "Un ICOR élevé traduit une faible efficacité de l'investissement." },
      { q: "Le taux d'investissement du Maroc est d'environ :", choix: ["10 % du PIB", "20 % du PIB", "30 % du PIB", "50 % du PIB"], bonne: 2, explication: "Un niveau élevé qui contraste avec une croissance modérée." },
      { q: "Un secteur pesant 20 % du PIB croît de 5 %. Sa contribution à la croissance est de :", choix: ["5 points", "1 point", "0,25 point", "20 points"], bonne: 1, explication: "0,20 × 5 = 1 point." },
      { q: "Dans la comptabilité de la croissance, la PGF représente :", choix: ["La part des salaires", "La croissance non expliquée par l'accumulation du capital et du travail", "Le taux d'investissement", "La croissance démographique"], bonne: 1, explication: "Elle reflète l'efficacité de la combinaison des facteurs." },
      { q: "Dans l'équilibre emplois-ressources, le PIB est égal à :", choix: ["C + I + X + M", "C + I + X − M", "C − I + X", "C + I − X"], bonne: 1, explication: "Les importations sont une ressource, retranchée pour obtenir le PIB." },
      { q: "Pour juger la tendance de fond de l'économie marocaine, on suit surtout :", choix: ["La croissance agricole", "La croissance non agricole", "Le cours du phosphate", "Le nombre de touristes"], bonne: 1, explication: "Elle est moins affectée par les aléas climatiques." },
      { q: "Parmi ces freins à la croissance marocaine, lequel est souvent cité ?", choix: ["Un taux d'activité féminin très élevé", "Une faible participation des femmes au marché du travail", "Une absence totale d'investissement", "Une inflation durablement supérieure à 20 %"], bonne: 1, explication: "Environ une femme sur cinq est active." },
    ],
  },

  4: {
    titre: "L'agriculture et la pêche au Maroc",
    description: "Place de l'agriculture, dualisme irrigué-pluvial, Plan Maroc Vert, Génération Green 2020-2030, politique de l'eau, pêche et stratégie Halieutis, corrigés.",
    resume: md`
## L'essentiel — Agriculture et pêche

- L'agriculture : environ un dixième du PIB mais **25 % de l'emploi** (2025), sécurité alimentaire, exportations (agrumes, tomates, fruits rouges) et agro-industrie.
- SAU d'environ 8,7 millions d'hectares, dominée par les **céréales pluviales** ; l'élevage dépend des récoltes.
- **Dualisme** : agriculture irriguée moderne (minoritaire en surface, majoritaire en valeur ajoutée et en exportations) contre agriculture pluviale de petites exploitations ; foncier complexe (terres collectives, guich, habous, melk).
- **Plan Maroc Vert (2008-2020)** : pilier I (haute valeur ajoutée, agrégation) et pilier II (agriculture solidaire) ; Fonds de développement agricole, goutte-à-goutte, loi 04-12.
- Bilan du PMV : hausse de la valeur ajoutée et des exportations, mais inégalités et surexploitation des nappes.
- **Génération Green 2020-2030** : priorité à l'humain (classe moyenne agricole, jeunes entrepreneurs, terres collectives) et durabilité (doubler valeur ajoutée et exportations agricoles d'ici 2030).
- **Eau** : programme national 2020-2027 (barrages, interconnexion Sebou-Bouregreg en 2023, **dessalement**, eaux usées épurées).
- **Pêche** : premier producteur de poisson d'Afrique, sardine ; **Halieutis (2009)** : durabilité, performance, compétitivité, aquaculture.
- Récolte céréalière : environ 44 millions de quintaux en 2024-2025, près de 90 millions attendus en 2025-2026.
`,
    exercices: md`
### Exercice 2 — L'agrégation agricole

Un agrégateur de la filière laitière du Gharb collecte le lait de 400 petits éleveurs. Avant l'agrégation, chaque éleveur vendait 3 000 litres par an à un intermédiaire, à 3,5 DH le litre. Grâce à l'encadrement technique (alimentation, génétique) fourni par l'agrégateur, la production passe à 4 200 litres par éleveur, achetés 4 DH le litre. (Données **simplifiées, à but pédagogique**.)

1. Calculez le chiffre d'affaires annuel d'un éleveur avant et après l'agrégation, et sa variation en %.
2. Décomposez cette hausse entre effet volume et effet prix.
3. Quels avantages l'agrégateur retire-t-il du dispositif ? Quels risques pour les petits éleveurs ?

<details><summary>Voir le corrigé</summary>

**1)** Avant : $3\,000 \times 3{,}5 = \mathbf{10\,500}$ DH ; après : $4\,200 \times 4 = \mathbf{16\,800}$ DH ; hausse de **60 %**.

**2)** Effet volume : $4\,200 / 3\,000 = 1{,}4$ (+ 40 %) ; effet prix : $4 / 3{,}5 \approx 1{,}143$ (+ 14,3 %) ; $1{,}4 \times 1{,}143 = 1{,}6$ ✔.

**3)** L'agrégateur sécurise son approvisionnement en quantité et en qualité, sans acheter de terres ni de cheptel, et bénéficie des subventions prévues pour les projets d'agrégation. Les éleveurs accèdent à la technique, à un débouché garanti et à un meilleur prix. Le risque est la **dépendance** envers un acheteur unique qui fixe les normes et, en partie, le prix : la loi 04-12 encadre pour cette raison le contrat d'agrégation.

</details>

### Exercice 3 — Question de synthèse

**Sujet** : « Du Plan Maroc Vert à Génération Green : continuités et ruptures de la politique agricole marocaine. »

Proposez un plan détaillé.

<details><summary>Voir le corrigé</summary>

**Introduction** : poids de l'agriculture (emploi, croissance, sécurité alimentaire) ; deux stratégies successives, 2008-2020 et 2020-2030.

**I. Le Plan Maroc Vert : une agriculture moteur de croissance**
- A. Deux piliers : modernisation à haute valeur ajoutée (agrégation, investissement privé) et agriculture solidaire.
- B. Des résultats : valeur ajoutée, exportations, arboriculture, économie d'eau à la parcelle.
- C. Des limites : inégalités, petite paysannerie peu bénéficiaire, pression sur les nappes.

**II. Génération Green : l'humain et la durabilité**
- A. Continuité : filières, agrégation, modernisation et objectif de doubler valeur ajoutée et exportations d'ici 2030.
- B. Ruptures : classe moyenne agricole, jeunes entrepreneurs et terres collectives, protection sociale, distribution modernisée.
- C. Un défi commun : l'eau, désormais au centre (dessalement, interconnexion des bassins, cultures adaptées).

**Conclusion** : la politique agricole passe d'une logique de production à une logique de revenus ruraux et de résilience climatique.

</details>
`,
    qcm: [
      { q: "Le Plan Maroc Vert a été lancé en :", choix: ["2000", "2008", "2014", "2020"], bonne: 1, explication: "Il a couvert la période 2008-2020." },
      { q: "Le pilier II du Plan Maroc Vert concernait :", choix: ["L'agriculture à haute valeur ajoutée", "L'agriculture solidaire des petits agriculteurs", "La pêche hauturière", "Les phosphates"], bonne: 1, explication: "Projets de reconversion et produits du terroir." },
      { q: "L'agrégation agricole consiste à :", choix: ["Regrouper les terres collectives", "Faire encadrer et acheter la production de petits agriculteurs par un opérateur", "Nationaliser les exploitations", "Supprimer l'irrigation"], bonne: 1, explication: "Encadrée par la loi 04-12." },
      { q: "La stratégie qui succède au Plan Maroc Vert est :", choix: ["Halieutis", "Génération Green 2020-2030", "Vision 2020", "Plan Émergence"], bonne: 1, explication: "Elle met l'accent sur l'humain et la durabilité." },
      { q: "La principale culture en surface au Maroc est :", choix: ["Les agrumes", "Les céréales", "La vigne", "La canne à sucre"], bonne: 1, explication: "Cultivées surtout en pluvial." },
      { q: "La stratégie de développement de la pêche lancée en 2009 s'appelle :", choix: ["Azur", "Halieutis", "Noor", "Rawaj"], bonne: 1, explication: "Durabilité, performance, compétitivité." },
      { q: "L'espèce emblématique de la pêche marocaine, dont le pays est l'un des premiers producteurs mondiaux, est :", choix: ["Le thon rouge", "La sardine", "Le saumon", "La morue"], bonne: 1, explication: "Base d'une importante industrie de la conserve." },
      { q: "La récolte céréalière de la campagne 2024-2025 a été d'environ :", choix: ["20 millions de quintaux", "44 millions de quintaux", "90 millions de quintaux", "115 millions de quintaux"], bonne: 1, explication: "Après plusieurs années de sécheresse." },
      { q: "L'« autoroute de l'eau » mise en service en 2023 relie les bassins :", choix: ["Du Souss et du Drâa", "Du Sebou et du Bouregreg", "De la Moulouya et de l'Oum Er-Rbia", "Du Tensift et du Ziz"], bonne: 1, explication: "Elle sécurise l'eau potable de l'axe Rabat-Casablanca." },
      { q: "Le dualisme agricole désigne :", choix: ["La coexistence d'une agriculture moderne et d'une agriculture traditionnelle", "Deux récoltes par an", "L'égalité entre régions", "La double tutelle ministérielle"], bonne: 0, explication: "Il explique les écarts de productivité et de revenus." },
    ],
  },

  5: {
    titre: "L'industrie, les mines et l'énergie au Maroc",
    description: "Plan Émergence, Plan d'accélération industrielle, automobile et aéronautique, taux d'intégration, groupe OCP, dépendance énergétique et énergies renouvelables.",
    resume: md`
## L'essentiel — Industrie, mines et énergie

- Industrie manufacturière autour de 15 % du PIB ; passage du textile et de l'agroalimentaire aux **chaînes de valeur mondiales** (automobile, aéronautique, électronique, batteries).
- **Plan Émergence (2005)** : « métiers mondiaux du Maroc » ; **PAI (2014-2020)** : **écosystèmes** autour de locomotives, objectifs de 500 000 emplois et 23 % du PIB (non atteint) ; plan de relance 2021-2023 (substitution des importations).
- Instruments : zones d'accélération industrielle (Tanger Automotive City, Atlantic Free Zone), primes de la charte de l'investissement, formation, Tanger Med.
- **Automobile** : premier secteur exportateur (environ 154,5 milliards de DH en 2025, près d'un tiers des exportations) ; Renault (Tanger, Casablanca), Stellantis (Kénitra) ; premier producteur d'Afrique ; enjeu du **taux d'intégration**.
- **OCP** (1920, SA en 2008) : remontée de la chaîne de valeur vers l'acide phosphorique et les engrais (Jorf Lasfar, Safi) ; 99,8 milliards de DH exportés en 2025.
- **Dépendance énergétique** : facture importée, sensibilité aux prix mondiaux, arrêt du gazoduc Maghreb-Europe fin 2021.
- **Stratégie 2009** : MASEN, Noor Ouarzazate, éolien ; 4 851 MW renouvelables fin 2025 ; objectif de plus de 52 % de la puissance installée en 2030 ; hydrogène vert (« Offre Maroc », 2024).
- Décompensation des carburants en 2015 ; butane encore subventionné, en réduction progressive.
`,
    exercices: md`
### Exercice 2 — Le solde en devises d'une filière exportatrice

Une filière de câblage automobile exporte pour 10 milliards de DH par an et importe pour 6,5 milliards de DH de cuivre et de composants. Un plan d'intégration permet de produire localement 1,5 milliard de DH de composants jusque-là importés, sans changer les exportations. (Données **simplifiées, à but pédagogique**.)

1. Calculez le taux d'intégration locale et le solde en devises avant le plan.
2. Mêmes calculs après le plan.
3. Pourquoi l'intégration locale est-elle au cœur de la logique des écosystèmes industriels ?

<details><summary>Voir le corrigé</summary>

**1)** Avant : intégration $(10 - 6{,}5)/10 = \mathbf{35\,\%}$ ; solde en devises $10 - 6{,}5 = \mathbf{3{,}5}$ milliards de DH.

**2)** Après : importations $6{,}5 - 1{,}5 = 5$ ; intégration $(10 - 5)/10 = \mathbf{50\,\%}$ ; solde $\mathbf{5}$ milliards de DH, soit + 43 %.

**3)** L'écosystème attire autour d'une locomotive (le constructeur) des fournisseurs de rang 1 et 2 installés au Maroc : les composants produits localement remplacent des importations, créent des emplois et de la valeur ajoutée, et améliorent la balance commerciale. C'est aussi ce qui rend la présence du constructeur plus durable, car sa chaîne d'approvisionnement est ancrée dans le pays.

</details>

### Exercice 3 — Question de synthèse

**Sujet** : « La transition énergétique au Maroc : enjeux et moyens. »

Proposez un plan détaillé.

<details><summary>Voir le corrigé</summary>

**Introduction** : dépendance énergétique (l'essentiel de l'énergie est importé) ; stratégie lancée en 2009 ; objectif de plus de 52 % de renouvelables dans la puissance installée en 2030.

**I. Des enjeux multiples**
- A. Économiques : réduire la facture énergétique et le déficit commercial, stabiliser les coûts pour l'industrie.
- B. Budgétaires : alléger les subventions (décompensation de 2015, butane).
- C. Stratégiques et environnementaux : sécurité d'approvisionnement (gazoduc arrêté fin 2021), engagements climatiques, décarbonation des exportations vers l'Europe.

**II. Les moyens mobilisés**
- A. Les grands projets : MASEN, Noor Ouarzazate, parcs éoliens ; 4 851 MW renouvelables fin 2025.
- B. Les nouveaux leviers : hydrogène vert (« Offre Maroc »), dessalement alimenté par les renouvelables, interconnexions électriques, gazoduc Afrique atlantique.
- C. Les limites : intermittence et stockage, réseau, financement, rythme d'installation à doubler pour atteindre les objectifs de 2030.

**Conclusion** : la transition est à la fois une contrainte (coûts, investissements) et une opportunité industrielle (énergie verte compétitive pour l'industrie exportatrice).

</details>
`,
    qcm: [
      { q: "Le Plan Émergence a été lancé en :", choix: ["1994", "2005", "2014", "2021"], bonne: 1, explication: "Il a défini les « métiers mondiaux du Maroc »." },
      { q: "Le Plan d'accélération industrielle (2014-2020) organise l'industrie en :", choix: ["Coopératives", "Écosystèmes", "Offices publics", "Zones rurales"], bonne: 1, explication: "Autour de locomotives et de leurs fournisseurs." },
      { q: "Le premier secteur exportateur du Maroc est :", choix: ["Le textile", "L'automobile", "L'agriculture", "Le tourisme"], bonne: 1, explication: "Environ un tiers des exportations de biens en 2025." },
      { q: "L'usine Stellantis au Maroc est située à :", choix: ["Tanger", "Kénitra", "Agadir", "Oujda"], bonne: 1, explication: "Inaugurée en 2019, dans l'Atlantic Free Zone." },
      { q: "Le taux d'intégration locale mesure :", choix: ["La part des exportations dans le PIB", "La part de la valeur d'un produit réalisée dans le pays", "Le nombre d'usines", "Le taux de change"], bonne: 1, explication: "Plus il est élevé, plus la valeur ajoutée reste au pays." },
      { q: "Les grands complexes chimiques de l'OCP se trouvent à :", choix: ["Jorf Lasfar et Safi", "Tanger et Tétouan", "Fès et Meknès", "Oujda et Nador"], bonne: 0, explication: "Ils transforment le phosphate en acide phosphorique et en engrais." },
      { q: "L'agence chargée des grands projets d'énergie solaire est :", choix: ["L'ONCF", "MASEN", "L'ANRT", "La CDG"], bonne: 1, explication: "Elle porte notamment le complexe Noor Ouarzazate." },
      { q: "L'objectif de la stratégie énergétique pour 2030 est une part des renouvelables dans la puissance installée de :", choix: ["Plus de 20 %", "Plus de 52 %", "100 %", "10 %"], bonne: 1, explication: "La capacité renouvelable atteignait 4 851 MW fin 2025." },
      { q: "La décompensation de 2015 a supprimé les subventions :", choix: ["Au gaz butane", "À l'essence et au gasoil", "Au sucre", "À la farine"], bonne: 1, explication: "Le butane est resté subventionné." },
      { q: "Une filière exporte 100 et importe 40 de composants. Son taux d'intégration est de :", choix: ["40 %", "60 %", "140 %", "2,5"], bonne: 1, explication: "(100 − 40) / 100." },
    ],
  },

  6: {
    titre: "Les services au Maroc : tourisme, logistique et numérique",
    description: "Poids du tertiaire, tourisme (Vision 2010 et 2020, record de 19,8 millions d'arrivées en 2025), commerce, Tanger Med, offshoring et Maroc Digital 2030.",
    resume: md`
## L'essentiel — Les services au Maroc

- Le tertiaire : plus de la moitié du PIB et **49,2 % de l'emploi** (2025) ; services marchands et non marchands ; productivités très inégales.
- **Tourisme** : grand pourvoyeur de devises ; Vision 2010 (2001, Plan Azur), Vision 2020 (2010), feuille de route 2023-2026 et horizon de 26 millions de touristes en 2030.
- Record de **19,8 millions d'arrivées en 2025** (+ 14 %), après 17,4 millions en 2024 ; recettes voyages de plus de 124 milliards de DH à fin novembre 2025 (+ 19 %) ; les MRE sont inclus dans les arrivées.
- Fragilités : dépendance à quelques marchés européens, concentration sur Marrakech et Agadir, sensibilité aux crises.
- **Commerce** : domination du commerce de proximité, montée de la grande distribution (plan Rawaj) et du commerce électronique.
- **Logistique** : Tanger Med (2007), hub de transbordement ; Nador West Med, Dakhla Atlantique ; LGV Al Boraq (2018) ; Agence marocaine de développement de la logistique.
- **Offshoring** et **Maroc Digital 2030** (2024) ; **Casablanca Finance City** (2010).
- Coupe du monde 2030 : accélérateur d'investissements (stades, aéroports, transports, hôtellerie).
`,
    exercices: md`
### Exercice 2 — Arrivées et nuitées

Une destination reçoit 1,2 million d'arrivées dans l'année, dont 40 % de MRE qui logent pour la plupart dans leur famille. Les touristes étrangers passent en moyenne 4,5 nuits dans les hébergements classés ; les MRE, 0,5 nuit. (Données **fictives**.)

1. Calculez le nombre d'arrivées de touristes étrangers et de MRE.
2. Calculez le nombre de nuitées dans les hébergements classés et la durée moyenne de séjour de l'ensemble des arrivées.
3. Pourquoi l'indicateur des nuitées est-il complémentaire de celui des arrivées ?

<details><summary>Voir le corrigé</summary>

**1)** MRE : $1{,}2 \times 0{,}4 = \mathbf{0{,}48}$ million ; étrangers : $\mathbf{0{,}72}$ million.

**2)** Nuitées : $0{,}72 \times 4{,}5 + 0{,}48 \times 0{,}5 = 3{,}24 + 0{,}24 = \mathbf{3{,}48}$ millions. Durée moyenne : $3{,}48 / 1{,}2 = \mathbf{2{,}9}$ nuits.

**3)** Les arrivées comptent les personnes qui entrent sur le territoire ; les nuitées mesurent l'activité réelle des hôtels et donc les retombées économiques. Une hausse des arrivées portée par les MRE remplit peu les hôtels, alors qu'une hausse des séjours de touristes étrangers se traduit directement en chiffre d'affaires pour l'hébergement.

</details>

### Exercice 3 — Question de synthèse

**Sujet** : « Le tourisme est-il un moteur fiable de la croissance marocaine ? »

Proposez un plan détaillé.

<details><summary>Voir le corrigé</summary>

**Introduction** : place du tourisme (devises, emplois, secteurs liés) ; record de 19,8 millions d'arrivées en 2025 ; horizon de 26 millions en 2030.

**I. Un moteur réel**
- A. Une source majeure de devises qui compense une partie du déficit commercial (chapitre 9).
- B. Un secteur à fort effet d'entraînement : hôtellerie, restauration, transport, artisanat, BTP.
- C. Des stratégies continues (Vision 2010, Vision 2020, feuille de route 2023-2026) et de grands événements (CAN 2025, Coupe du monde 2030).

**II. Un moteur fragile**
- A. La vulnérabilité aux chocs : effondrement de 2020, crises géopolitiques, concurrence d'autres destinations.
- B. La concentration des marchés et des destinations, la saisonnalité et l'emploi précaire.
- C. Les fuites : importations induites, pression sur l'eau et l'environnement.

**Conclusion** : un moteur puissant mais à diversifier (marchés, produits, régions) et à intégrer davantage aux productions locales.

</details>
`,
    qcm: [
      { q: "En 2025, le Maroc a accueilli environ :", choix: ["12,9 millions de touristes", "17,4 millions de touristes", "19,8 millions de touristes", "26 millions de touristes"], bonne: 2, explication: "Un record, en hausse de 14 % sur 2024." },
      { q: "La Vision 2010 du tourisme visait :", choix: ["5 millions de touristes", "10 millions de touristes", "20 millions de touristes", "26 millions de touristes"], bonne: 1, explication: "Lancée en 2001, avec les stations balnéaires du Plan Azur." },
      { q: "Les arrivées touristiques comptabilisées au Maroc incluent :", choix: ["Seulement les touristes étrangers", "Les touristes étrangers et les Marocains résidant à l'étranger", "Seulement les nuitées hôtelières", "Les voyageurs d'affaires marocains"], bonne: 1, explication: "Les MRE en représentent une part importante." },
      { q: "Le port de Tanger Med a été mis en service en :", choix: ["1995", "2007", "2015", "2020"], bonne: 1, explication: "Il est devenu un grand hub de transbordement." },
      { q: "La ligne à grande vitesse Al Boraq relie depuis 2018 :", choix: ["Rabat et Fès", "Tanger et Casablanca", "Casablanca et Marrakech", "Agadir et Marrakech"], bonne: 1, explication: "Son extension vers Marrakech est en cours." },
      { q: "La stratégie numérique lancée en 2024 s'appelle :", choix: ["Maroc Numeric 2013", "Maroc Digital 2030", "Vision 2020", "Rawaj"], bonne: 1, explication: "Digitalisation des services publics et économie numérique." },
      { q: "Casablanca Finance City a été créée en :", choix: ["2000", "2010", "2018", "2023"], bonne: 1, explication: "Pour faire de Casablanca une place financière régionale." },
      { q: "Un service non marchand est :", choix: ["Vendu à un prix couvrant son coût", "Fourni gratuitement ou presque et financé par l'impôt", "Toujours exporté", "Toujours informel"], bonne: 1, explication: "Éducation et santé publiques, administration." },
      { q: "Le plan de développement du commerce intérieur s'appelle :", choix: ["Azur", "Rawaj", "Halieutis", "Noor"], bonne: 1, explication: "Il a accompagné la modernisation de la distribution." },
      { q: "Un hôtel de 100 chambres vend 25 550 nuitées-chambres sur l'année. Son taux d'occupation est de :", choix: ["50 %", "70 %", "25 %", "35 %"], bonne: 1, explication: "25 550 / (100 × 365) = 70 %." },
    ],
  },

  7: {
    titre: "Les finances publiques et la politique budgétaire au Maroc",
    description: "Loi organique 130-13, recettes et dépenses de l'État, compensation, réforme fiscale 69-19, déficit de 3,5 % en 2025, dette du Trésor et soutenabilité.",
    resume: md`
## L'essentiel — Finances publiques et politique budgétaire

- **LOF 130-13** (2015) : budget par programmes et performance, programmation triennale, sincérité, **règle d'or** (l'emprunt ne finance que l'investissement et le principal de la dette).
- Loi de finances : **budget général**, **SEGMA**, **comptes spéciaux du Trésor**.
- Recettes : TVA (premier impôt), IS, IR, droits de douane, TIC, recettes non fiscales ; fiscalité très **indirecte** et base **étroite**.
- Dépenses : masse salariale, investissement, service de la dette, **compensation** (butane, sucre, farine) ; nouvelle charge structurelle de la **protection sociale**.
- Réformes : TVA 1986, IS 1987, IGR 1990, CGI (2007), **loi-cadre 69-19** (2021) : IS vers un taux unique de 20 %, réduction des taux de TVA (LF 2024), barème de l'IR révisé (LF 2025, seuil à 40 000 DH).
- Solde primaire = solde budgétaire + intérêts ; déficit = flux, dette = stock.
- **2025** : déficit de 3,5 % du PIB (60,5 milliards de DH), dette du Trésor de 67,2 % du PIB ; LF 2026 : déficit visé de 3 %, dette de 65,9 %.
- Dynamique : $d_{t+1} = d_t (1 + r)/(1 + g) - sp$ ; **solde primaire stabilisant** $sp^* = d (r - g)/(1 + g)$.
`,
    exercices: md`
### Exercice 2 — Pression fiscale et structure des recettes

Un budget **simplifié, à but pédagogique** présente les recettes fiscales suivantes (milliards de DH) : TVA 110, IS 70, IR 60, droits de douane 20, TIC et autres impôts indirects 50. Le PIB vaut 1 700 milliards de DH.

1. Calculez le total des recettes fiscales et la pression fiscale.
2. Calculez la part des impôts directs (IS + IR) et des impôts indirects.
3. Pourquoi une fiscalité reposant surtout sur les impôts indirects est-elle jugée peu redistributive ?

<details><summary>Voir le corrigé</summary>

**1)** Total : $110 + 70 + 60 + 20 + 50 = \mathbf{310}$ milliards de DH ; pression fiscale : $310 / 1\,700 \approx \mathbf{18{,}2\,\%}$ du PIB.

**2)** Directs : $130 / 310 \approx \mathbf{41{,}9\,\%}$ ; indirects : $180 / 310 \approx \mathbf{58{,}1\,\%}$.

**3)** Les impôts indirects frappent la consommation au même taux quel que soit le revenu ; or les ménages modestes consomment une plus grande part de leur revenu que les ménages aisés : la charge fiscale pèse donc proportionnellement plus sur eux. L'IR progressif est au contraire redistributif, mais sa base reste étroite (salariés du secteur formel surtout).

</details>

### Exercice 3 — Question de synthèse

**Sujet** : « Les marges de manœuvre budgétaires de l'État marocain. »

Proposez un plan détaillé.

<details><summary>Voir le corrigé</summary>

**Introduction** : définir la politique budgétaire ; rappeler le cadre (LOF 130-13) et la trajectoire (déficit de 3,5 % en 2025, objectif de 3 % en 2026, dette du Trésor de 67,2 % du PIB).

**I. Des marges contraintes**
- A. Des dépenses rigides : masse salariale, service de la dette, compensation, montée en charge de la protection sociale.
- B. Des recettes limitées par une base fiscale étroite et le poids de l'informel.
- C. Une dette élevée, dont la soutenabilité dépend de l'écart entre taux d'intérêt et croissance.

**II. Des leviers pour les élargir**
- A. La réforme fiscale (loi-cadre 69-19) : élargissement de l'assiette, rationalisation des exonérations, lutte contre la fraude.
- B. Le ciblage des aides : passage des subventions générales (compensation) aux aides directes (registre social unifié, aide sociale directe).
- C. Les financements innovants et la mobilisation de l'investissement privé (charte de l'investissement, partenariats public-privé).

**Conclusion** : l'enjeu est de financer à la fois l'État social et l'investissement tout en poursuivant la baisse du taux d'endettement.

</details>
`,
    qcm: [
      { q: "La loi organique relative à la loi de finances en vigueur au Maroc est la :", choix: ["Loi 39-89", "Loi organique 130-13", "Loi 40-17", "Loi-cadre 09-21"], bonne: 1, explication: "Adoptée en 2015, elle a introduit la budgétisation par la performance." },
      { q: "La « règle d'or » de la LOF prévoit que les emprunts financent seulement :", choix: ["Les salaires", "L'investissement et le remboursement du principal de la dette", "La compensation", "Les intérêts"], bonne: 1, explication: "Le fonctionnement ne doit pas être financé par l'emprunt." },
      { q: "Le premier impôt en recettes au Maroc est :", choix: ["L'IS", "L'IR", "La TVA", "Les droits de douane"], bonne: 2, explication: "C'est un impôt indirect sur la consommation." },
      { q: "Le solde primaire est égal au solde budgétaire :", choix: ["Moins les intérêts de la dette", "Plus les intérêts de la dette", "Plus le remboursement du principal", "Moins l'investissement"], bonne: 1, explication: "Il exclut la charge des intérêts héritée du passé." },
      { q: "En 2025, le déficit budgétaire du Maroc a été de :", choix: ["1,5 % du PIB", "3,5 % du PIB", "5,5 % du PIB", "7,1 % du PIB"], bonne: 1, explication: "60,5 milliards de DH, contre 3,8 % en 2024." },
      { q: "La dette du Trésor représentait fin 2025 environ :", choix: ["45 % du PIB", "67 % du PIB", "90 % du PIB", "120 % du PIB"], bonne: 1, explication: "67,2 % selon le ministère de l'Économie et des Finances." },
      { q: "La réforme fiscale en cours est encadrée par la :", choix: ["Loi-cadre 69-19", "Loi 04-12", "Loi 103-12", "Loi organique 113-14"], bonne: 0, explication: "Issue des Assises de la fiscalité de 2019." },
      { q: "La Caisse de compensation subventionne encore notamment :", choix: ["L'essence et le gasoil", "Le gaz butane, le sucre et la farine", "L'électricité industrielle", "Les billets d'avion"], bonne: 1, explication: "Les carburants ont été décompensés en 2015." },
      { q: "Si la croissance nominale dépasse le taux d'intérêt de la dette :", choix: ["La dette augmente forcément", "Un léger déficit primaire peut être compatible avec un ratio de dette stable", "Le déficit est interdit", "Le taux de change baisse"], bonne: 1, explication: "Le solde primaire stabilisant est alors négatif." },
      { q: "Le déficit budgétaire est :", choix: ["Un stock", "Un flux annuel", "Une recette", "Un taux d'intérêt"], bonne: 1, explication: "La dette est le stock accumulé des déficits." },
    ],
  },

  8: {
    titre: "Le système financier et la politique monétaire au Maroc",
    description: "Banques, Bourse de Casablanca, AMMC et ACAPS, statut de Bank Al-Maghrib (loi 40-17), taux directeur à 2,25 %, inflation et régime de change du dirham.",
    resume: md`
## L'essentiel — Système financier et politique monétaire

- Financement surtout **intermédié** (banques) ; régulateurs : **Bank Al-Maghrib** (banques, loi 103-12), **AMMC** (marché des capitaux), **ACAPS** (assurances) ; banques participatives depuis 2017.
- Secteur bancaire concentré, solide, présent en Afrique ; faiblesses : crédit aux TPE-PME, inclusion financière.
- **BAM** (Banque du Maroc créée en 1959) : statut de la **loi 40-17** (2019), indépendance, objectif principal de **stabilité des prix**, supervision bancaire, réserves de change (442,9 milliards de DH fin 2025, plus de 5 mois d'importations).
- Instruments : **taux directeur** (avances à 7 jours), réserve monétaire, open market, facilités permanentes ; effets différés.
- Inflation (HCP) : 6,6 % en 2022, 6,1 % en 2023, 0,9 % en 2024, 0,8 % en 2025.
- Taux directeur : relevé jusqu'à 3 % (mars 2023), puis 2,75 % (juin 2024), 2,50 % (décembre 2024), **2,25 %** (mars 2025), maintenu depuis.
- Taux réel : $(1 + i)/(1 + \pi) - 1 \approx i - \pi$ ; négatif en 2023, positif en 2025.
- Dirham rattaché à un **panier 60 % euro / 40 % dollar** ; bande élargie de ± 0,3 % à ± 2,5 % (2018) puis ± 5 % (2020) ; horizon : **ciblage d'inflation**.
`,
    exercices: md`
### Exercice 2 — La transmission d'une baisse du taux directeur

Une PME de Fès emprunte 2 millions de DH sur un an pour financer son stock. Sa banque lui applique le taux directeur augmenté d'une marge de 3,5 points. (Données **simplifiées, à but pédagogique**.)

1. Calculez le coût annuel des intérêts avec un taux directeur de 3 %, puis de 2,25 %.
2. Calculez l'économie réalisée en DH et en %.
3. Pourquoi la baisse du taux directeur ne se transmet-elle pas toujours intégralement aux taux des crédits ?

<details><summary>Voir le corrigé</summary>

**1)** À 3 % : taux du crédit de 6,5 %, intérêts $2\,000\,000 \times 0{,}065 = \mathbf{130\,000}$ DH. À 2,25 % : taux de 5,75 %, intérêts $\mathbf{115\,000}$ DH.

**2)** Économie : **15 000 DH**, soit $15\,000 / 130\,000 \approx$ **11,5 %** du coût des intérêts.

**3)** Les banques fixent leurs taux en fonction de leur propre coût de ressources (rémunération des dépôts, liquidité), du **risque** de l'emprunteur (les PME sont jugées plus risquées) et de la concurrence. Si le risque de crédit augmente ou si la liquidité bancaire est tendue, elles peuvent maintenir leurs marges : la transmission est alors partielle et lente.

</details>

### Exercice 3 — Question de synthèse

**Sujet** : « Bank Al-Maghrib face à l'inflation de 2022-2023. »

Proposez un plan détaillé.

<details><summary>Voir le corrigé</summary>

**Introduction** : missions de BAM (loi 40-17, stabilité des prix) ; inflation de 6,6 % en 2022 et 6,1 % en 2023, retombée à 0,8 % en 2025.

**I. Une inflation d'une nature particulière**
- A. Une inflation importée : énergie, céréales, intrants après 2021-2022.
- B. Une inflation d'offre : la sécheresse a fait monter les prix alimentaires.
- C. Le risque de diffusion aux salaires et aux anticipations.

**II. Une réponse graduelle**
- A. Des hausses du taux directeur (jusqu'à 3 % en mars 2023) pour ancrer les anticipations, sans casser la croissance.
- B. Un taux réel resté négatif : une politique restrictive mesurée, complétée par les mesures budgétaires (subventions du butane, aides aux transporteurs).
- C. Le desserrement de 2024-2025 (jusqu'à 2,25 %), une fois l'inflation revenue sous 1 %.

**Conclusion** : l'épisode montre les limites de la politique monétaire face aux chocs d'offre et plaide pour la poursuite de la flexibilisation du change et le ciblage d'inflation.

</details>
`,
    qcm: [
      { q: "Le statut actuel de Bank Al-Maghrib résulte de la :", choix: ["Loi 103-12", "Loi 40-17", "Loi 43-12", "Loi organique 130-13"], bonne: 1, explication: "Entrée en vigueur en 2019, elle renforce l'indépendance de la banque centrale." },
      { q: "L'objectif principal de Bank Al-Maghrib est :", choix: ["Le plein emploi", "La stabilité des prix", "L'équilibre budgétaire", "La croissance des exportations"], bonne: 1, explication: "Elle contribue aussi à la stabilité financière." },
      { q: "Le taux directeur de Bank Al-Maghrib depuis mars 2025 est de :", choix: ["1,5 %", "2,25 %", "3 %", "4,5 %"], bonne: 1, explication: "Après trois baisses successives depuis juin 2024." },
      { q: "Selon le HCP, l'inflation au Maroc a été de 6,6 % en :", choix: ["2020", "2022", "2024", "2025"], bonne: 1, explication: "Puis 6,1 % en 2023." },
      { q: "Le panier de rattachement du dirham est composé de :", choix: ["50 % euro, 50 % dollar", "60 % euro, 40 % dollar", "100 % euro", "40 % euro, 60 % dollar"], bonne: 1, explication: "Reflet de la structure des échanges extérieurs." },
      { q: "Depuis mars 2020, la bande de fluctuation du dirham est de :", choix: ["± 0,3 %", "± 2,5 %", "± 5 %", "± 10 %"], bonne: 2, explication: "Elle avait été portée à ± 2,5 % en janvier 2018." },
      { q: "Le régulateur du marché des capitaux au Maroc est :", choix: ["L'ACAPS", "L'AMMC", "La CDG", "L'Office des changes"], bonne: 1, explication: "Autorité marocaine du marché des capitaux." },
      { q: "Taux directeur de 3 % et inflation de 6 %. Le taux réel est d'environ :", choix: ["+ 9 %", "+ 3 %", "− 3 %", "0 %"], bonne: 2, explication: "Taux réel ≈ taux nominal − inflation." },
      { q: "L'indice phare de la Bourse de Casablanca est le :", choix: ["CAC 40", "MASI", "IPC", "TUNINDEX"], bonne: 1, explication: "Moroccan All Shares Index." },
      { q: "Le ciblage d'inflation consiste à :", choix: ["Fixer le dirham à l'euro", "Annoncer une cible d'inflation et utiliser le taux d'intérêt pour l'atteindre", "Contrôler tous les prix", "Financer le Trésor"], bonne: 1, explication: "C'est l'horizon de la réforme du régime de change." },
    ],
  },

  9: {
    titre: "Le commerce extérieur et la balance des paiements du Maroc",
    description: "Exportations, importations, déficit commercial et taux de couverture de 57 % en 2025, accords de libre-échange, tourisme, transferts des MRE, IDE et réserves.",
    resume: md`
## L'essentiel — Commerce extérieur et balance des paiements

- Économie ouverte, **déficit commercial structurel** : en 2025, exportations de 469,1 et importations de 822,2 milliards de DH, **déficit de 353,1 milliards de DH**.
- **Taux de couverture** $= X / M$ : 57 % en 2025 (59,9 % en 2024).
- Exportations industrialisées : automobile (environ un tiers), phosphates et dérivés (environ un cinquième), agroalimentaire, textile, aéronautique.
- Importations : énergie, biens d'équipement, demi-produits et composants, céréales, biens de consommation ; premier partenaire : l'**Union européenne** (Espagne, France).
- Accords : UE (en vigueur en 2000, statut avancé en 2008), États-Unis (2006), Turquie (2006), Agadir (2007), ZLECAf (signée en 2018).
- **Balance des paiements** : compte courant (biens, services, revenus, transferts), compte de capital, compte financier (IDE, portefeuille, prêts, réserves).
- Compensation du déficit : **tourisme** (138,6 milliards de DH en 2025) et **transferts des MRE** (122 milliards de DH) ; déficit courant de **2,4 % du PIB** en 2025.
- Financement : **IDE** (flux net d'environ 28,4 milliards de DH en 2025, + 74,3 %), emprunts ; **réserves** de 442,9 milliards de DH ; ligne de crédit modulable du FMI.
`,
    exercices: md`
### Exercice 2 — L'effet d'un choc pétrolier

Une économie **fictive** simplifiée importe pour 100 milliards de DH d'énergie, pour 400 milliards d'autres biens, et exporte pour 300 milliards. Le prix de l'énergie augmente de 30 %, les volumes restant inchangés.

1. Calculez le solde commercial et le taux de couverture avant le choc.
2. Mêmes calculs après le choc.
3. Quels mécanismes de la balance des paiements peuvent amortir ce choc ? Quel rôle jouent les réserves de change ?

<details><summary>Voir le corrigé</summary>

**1)** Importations : 500 ; solde : $300 - 500 = \mathbf{-200}$ ; couverture : $300 / 500 = \mathbf{60\,\%}$.

**2)** Énergie : $100 \times 1{,}3 = 130$ ; importations : 530 ; solde : $\mathbf{-230}$ ; couverture : $300 / 530 \approx \mathbf{56{,}6\,\%}$. Un choc de prix sur un seul poste creuse le déficit de 15 %.

**3)** Les excédents des services (tourisme) et des transferts (MRE) limitent l'effet sur le compte courant ; le reste doit être financé par des entrées de capitaux (IDE, emprunts). Les **réserves de change** permettent de payer les importations pendant la durée du choc sans dévaluation brutale ni restriction des importations. À plus long terme, seule la réduction de la dépendance énergétique (renouvelables, efficacité énergétique) supprime la vulnérabilité.

</details>

### Exercice 3 — Question de synthèse

**Sujet** : « Le déficit commercial du Maroc est-il un problème ? »

Proposez un plan détaillé.

<details><summary>Voir le corrigé</summary>

**Introduction** : définir le solde commercial et le taux de couverture ; chiffres 2025 (déficit de 353,1 milliards de DH, couverture de 57 %).

**I. Un déficit en partie « sain »**
- A. Il finance l'investissement : biens d'équipement et composants des industries exportatrices.
- B. Il est largement compensé par le tourisme et les transferts des MRE : déficit courant de 2,4 % du PIB seulement.
- C. Il est financé en partie par des IDE, stables et porteurs de technologie.

**II. Des fragilités réelles**
- A. La dépendance énergétique et alimentaire expose le pays aux chocs de prix.
- B. La concentration des exportations (automobile, phosphates) et des débouchés (Europe).
- C. La dépendance à des ressources non commerciales (MRE, tourisme), sensibles à la conjoncture européenne et aux crises.

**Conclusion** : l'enjeu n'est pas de supprimer le déficit, mais de le rendre moins vulnérable : intégration locale, transition énergétique, diversification des produits et des marchés (Afrique, Amériques).

</details>
`,
    qcm: [
      { q: "Le taux de couverture se calcule par :", choix: ["M / X", "X / M", "X − M", "(X + M) / PIB"], bonne: 1, explication: "Il indique la part des importations payée par les exportations." },
      { q: "En 2025, le taux de couverture des échanges de biens du Maroc était d'environ :", choix: ["35 %", "57 %", "80 %", "105 %"], bonne: 1, explication: "Contre 59,9 % en 2024." },
      { q: "Le déficit commercial du Maroc en 2025 s'élève à environ :", choix: ["53 milliards de DH", "153 milliards de DH", "353 milliards de DH", "822 milliards de DH"], bonne: 2, explication: "822,2 − 469,1 = 353,1 milliards de DH." },
      { q: "Le premier partenaire commercial du Maroc est :", choix: ["La Chine", "L'Union européenne", "Les États-Unis", "L'Afrique subsaharienne"], bonne: 1, explication: "Avec l'Espagne et la France au premier rang." },
      { q: "L'accord de libre-échange avec les États-Unis est entré en vigueur en :", choix: ["2000", "2006", "2012", "2018"], bonne: 1, explication: "Il avait été signé en 2004." },
      { q: "Les transferts des MRE sont enregistrés dans :", choix: ["Le compte financier", "Le compte des transactions courantes", "Le compte de capital", "Les réserves de change"], bonne: 1, explication: "Ce sont des transferts courants." },
      { q: "En 2025, les transferts des MRE ont atteint environ :", choix: ["62 milliards de DH", "92 milliards de DH", "122 milliards de DH", "222 milliards de DH"], bonne: 2, explication: "Contre 118,9 milliards de DH en 2024." },
      { q: "Le déficit du compte courant du Maroc en 2025 était de :", choix: ["0,5 % du PIB", "2,4 % du PIB", "10 % du PIB", "20 % du PIB"], bonne: 1, explication: "Grâce au tourisme et aux transferts des MRE." },
      { q: "Un investissement direct étranger correspond à :", choix: ["Un simple placement en actions", "Une participation durable dans une entreprise, avec une influence sur sa gestion", "Un prêt du FMI", "Un transfert d'un MRE"], bonne: 1, explication: "À distinguer de l'investissement de portefeuille." },
      { q: "L'accord d'Agadir lie le Maroc à :", choix: ["L'Union européenne", "L'Égypte, la Jordanie et la Tunisie", "Les États-Unis", "La Turquie"], bonne: 1, explication: "Accord de libre-échange entre pays arabes méditerranéens." },
    ],
  },

  10: {
    titre: "Emploi, développement humain et protection sociale au Maroc",
    description: "Taux d'activité, chômage de 13 % en 2025, chômage des jeunes et des femmes, ANAPEC, Awrach, Intelaka, INDH, IDH et protection sociale (loi-cadre 09-21).",
    resume: md`
## L'essentiel — Emploi, développement humain et protection sociale

- Indicateurs BIT (enquête du HCP) : taux d'**activité** = actifs / 15 ans et plus ; taux de **chômage** = chômeurs / actifs ; taux d'**emploi** = occupés / 15 ans et plus ; **sous-emploi**.
- **2025** : chômage de **13 %** (1 621 000 chômeurs), urbain 16,4 %, rural 6,6 %, femmes 20,5 %, hommes 10,8 %, 15-24 ans 37,2 % ; taux d'activité de 43,5 % ; sous-emploi de 10,9 %.
- Services : 49,2 % de l'emploi ; agriculture : 25 %, avec 41 000 emplois perdus en 2025.
- Causes : croissance peu riche en emplois, exode rural, inadéquation formation-emploi, informel, faible activité des femmes.
- Politiques : **ANAPEC**, Idmaj, Taehil, **Intelaka** (2020), Forsa, **Awrach** (2022), auto-entrepreneur, cités des métiers et des compétences.
- **Développement humain** (IDH du PNUD : santé, éducation, revenu) : le Maroc est dans la catégorie « moyen » ; recul de la pauvreté multidimensionnelle entre 2014 et 2024.
- **INDH** (2005), troisième phase depuis 2019 centrée sur le capital humain.
- **Loi-cadre 09-21** (2021) : AMO généralisée (fin 2022), allocations familiales et aide sociale directe (fin 2023), retraite, indemnité pour perte d'emploi ; ciblage par le **Registre social unifié** (loi 72-18).
`,
    exercices: md`
### Exercice 2 — Chômage et taux d'activité

Une région **fictive** compte 2 millions de personnes de 15 ans et plus, dont 900 000 actifs et 117 000 chômeurs. L'année suivante, la population de 15 ans et plus est inchangée ; 30 000 chômeurs découragés cessent de chercher un emploi et aucun emploi n'est créé.

1. Calculez le taux d'activité, le taux de chômage et le taux d'emploi la première année.
2. Mêmes calculs l'année suivante.
3. Le chômage a baissé. Est-ce une bonne nouvelle ?

<details><summary>Voir le corrigé</summary>

**1)** Activité : $900 / 2\,000 = \mathbf{45\,\%}$ ; chômage : $117 / 900 = \mathbf{13\,\%}$ ; emploi : $783 / 2\,000 = \mathbf{39{,}15\,\%}$.

**2)** Actifs : 870 000 ; chômeurs : 87 000. Activité : $870 / 2\,000 = \mathbf{43{,}5\,\%}$ ; chômage : $87 / 870 = \mathbf{10\,\%}$ ; emploi : $783 / 2\,000 = \mathbf{39{,}15\,\%}$, inchangé.

**3)** Non : le chômage baisse de 3 points sans qu'aucun emploi ne soit créé ; les chômeurs découragés sont simplement sortis de la population active. C'est pourquoi il faut toujours lire le taux de chômage avec le **taux d'activité** et le **taux d'emploi**.

</details>

### Exercice 3 — Question de synthèse

**Sujet** : « La généralisation de la protection sociale au Maroc : objectifs, moyens et défis. »

Proposez un plan détaillé.

<details><summary>Voir le corrigé</summary>

**Introduction** : définir la protection sociale ; rappeler la loi-cadre 09-21 (2021), chantier prioritaire du Nouveau modèle de développement.

**I. Des objectifs ambitieux**
- A. Couvrir l'ensemble de la population contre le risque maladie (AMO, fin du RAMED).
- B. Soutenir les familles par une aide directe (allocations familiales, aide sociale directe depuis fin 2023).
- C. Étendre la retraite et l'indemnité pour perte d'emploi.

**II. Des moyens nouveaux**
- A. Le ciblage par le Registre social unifié (loi 72-18) et le score socio-économique.
- B. Un financement mixte : cotisations, budget de l'État, redéploiement des dépenses de compensation.

**III. Des défis**
- A. Financer durablement le système, avec une base de cotisants étroite du fait de l'informel.
- B. Assurer une offre de soins suffisante (hôpitaux, médecins) pour donner un contenu réel à la couverture.
- C. Éviter les effets de seuil du ciblage et intégrer les travailleurs indépendants.

**Conclusion** : un tournant vers un État social, dont la réussite dépend de la croissance, de l'emploi formel et de la réforme de la santé.

</details>
`,
    qcm: [
      { q: "Selon le HCP, le taux de chômage au Maroc en 2025 était de :", choix: ["9,2 %", "13 %", "16,4 %", "20,5 %"], bonne: 1, explication: "En baisse de 0,3 point par rapport à 2024." },
      { q: "Le taux de chômage se calcule en rapportant les chômeurs à :", choix: ["La population totale", "La population active", "La population de 15 ans et plus", "Les actifs occupés"], bonne: 1, explication: "Population active = actifs occupés + chômeurs." },
      { q: "En 2025, le taux de chômage des jeunes de 15 à 24 ans était de :", choix: ["13 %", "20,5 %", "37,2 %", "50 %"], bonne: 2, explication: "C'est la seule catégorie d'âge où il a augmenté." },
      { q: "Le chômage rural est plus faible que le chômage urbain notamment parce que :", choix: ["Il n'y a pas d'actifs en milieu rural", "Le sous-emploi agricole y est massif", "Les salaires y sont plus élevés", "Le HCP ne mesure pas le rural"], bonne: 1, explication: "Beaucoup de ruraux travaillent peu, sans être comptés comme chômeurs." },
      { q: "Le programme Awrach, lancé en 2022, vise :", choix: ["À financer des emplois temporaires et durables pour des personnes peu qualifiées", "À privatiser des entreprises publiques", "À réformer la TVA", "À subventionner le butane"], bonne: 0, explication: "Chantiers publics et emplois durables." },
      { q: "L'INDH a été lancée en :", choix: ["1999", "2005", "2015", "2021"], bonne: 1, explication: "Sa troisième phase, depuis 2019, cible le capital humain." },
      { q: "La loi-cadre relative à la protection sociale est la :", choix: ["Loi-cadre 69-19", "Loi-cadre 09-21", "Loi-cadre 03-22", "Loi 72-18"], bonne: 1, explication: "Adoptée en 2021." },
      { q: "Le ciblage des aides sociales repose sur :", choix: ["Le Registre social unifié", "Le RGPH", "Le registre du commerce", "La carte grise"], bonne: 0, explication: "Institué par la loi 72-18." },
      { q: "L'IDH combine :", choix: ["PIB, inflation et chômage", "Espérance de vie, éducation et revenu par habitant", "Exportations et importations", "Dette et déficit"], bonne: 1, explication: "Indicateur publié par le PNUD." },
      { q: "Une baisse du taux de chômage accompagnée d'une baisse du taux d'activité peut signifier :", choix: ["Une forte création d'emplois", "Le découragement de chômeurs qui sortent de la population active", "Une hausse des salaires", "Une erreur de calcul"], bonne: 1, explication: "Il faut lire le chômage avec le taux d'emploi." },
    ],
  },
};

export default chapitres;
