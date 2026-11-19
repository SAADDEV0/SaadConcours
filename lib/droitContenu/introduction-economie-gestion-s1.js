// Introduction à l'économie et à la gestion (Droit public S1) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
// Module propre à la Licence de Droit : il réunit en un seul cours ce que la Licence Économie et Gestion
// enseigne dans deux modules (introeco_cours, introgestion_cours), avec un angle juridique.
const md = String.raw;

const chapitres = {
  1: {
    titre: "L'économie : objet, rareté et choix",
    description: "Économie pour juristes : besoins et biens, rareté, coût d'opportunité, frontière des possibilités de production, micro et macro, droit et économie.",
    resume: md`
## L'essentiel — Rareté et choix

- **Science économique** : étude de l'usage de ressources limitées pour satisfaire des besoins nombreux (Robbins, 1932).
- **Besoins** primaires ou secondaires, individuels ou collectifs ; ils évoluent avec le revenu et la technique.
- **Biens** libres ou économiques ; matériels ou services ; de consommation ou de production ; privés ou publics.
- **Bien public** : personne ne peut en être exclu ; le marché le produit mal, d'où l'intervention publique.
- **Rareté** = ressources insuffisantes pour tous les besoins, donc obligation de choisir.
- **Coût d'opportunité** = valeur de la meilleure option abandonnée = quantité de B perdue ÷ quantité de A gagnée.
- **FPP** : sur la frontière = efficace ; à l'intérieur = gaspillage ; à l'extérieur = impossible ; déplacement vers l'extérieur = croissance.
- Microéconomie / macroéconomie ; analyse positive (ce qui est) / normative (ce qui devrait être).
- Constitution : art. 35 (propriété, liberté d'entreprendre), art. 39 (charges publiques), art. 77 (équilibre des finances).
- Droit économique ; analyse économique du droit (Coase, 1960 ; Posner).
`,
    exercices: md`
### Exercice 2 — Positif ou normatif ?

Classez chaque phrase : 1) « Le taux de chômage des jeunes urbains dépasse celui des adultes. » 2) « L'État devrait supprimer la subvention du gaz butane. » 3) « Une hausse du prix du tabac réduit peu sa consommation. » 4) « Les études de droit sont plus utiles que les études d'économie. » 5) « La loi de finances prévoit une hausse des dépenses d'investissement. »

<details><summary>Voir le corrigé</summary>

1) Positif : un fait mesurable par le HCP. 2) Normatif : une recommandation (« devrait »). 3) Positif : une relation vérifiable par des données (élasticité, chapitre 4). 4) Normatif : un jugement de valeur. 5) Positif : il suffit de lire le texte voté.

</details>

### Exercice 3 — L'agriculteur du Gharb

Un agriculteur dispose de 30 hectares. Un hectare produit 6 tonnes de betterave à sucre ou 3 tonnes de blé. 1) Calculez les productions maximales. 2) Calculez le coût d'opportunité d'une tonne de blé. 3) La combinaison 90 tonnes de betterave et 50 tonnes de blé est-elle possible ? 4) Une nouvelle semence double le rendement du blé. Que devient la frontière ?

<details><summary>Voir le corrigé</summary>

1) Betterave : 30 × 6 = **180 tonnes** ; blé : 30 × 3 = **90 tonnes**. 2) Une tonne de blé occupe 1/3 d'hectare, qui aurait produit 6 ÷ 3 = **2 tonnes de betterave** : c'est son coût d'opportunité. 3) 90 tonnes de betterave occupent 15 hectares ; 50 tonnes de blé en occupent 50 ÷ 3 ≈ 16,7. Total : 31,7 hectares > 30 : combinaison **impossible**. 4) Le maximum de blé passe à 180 tonnes, celui de la betterave ne change pas : la frontière **pivote** vers l'extérieur sur l'axe du blé, et le coût d'opportunité d'une tonne de blé tombe à 1 tonne de betterave.

</details>
`,
    qcm: [
      { q: "Selon la définition de Robbins (1932), l'économie étudie surtout :", choix: ["L'emploi de moyens rares pour des fins multiples", "L'histoire des banques", "Les règles du commerce international", "La comptabilité des entreprises"], bonne: 0, explication: "Rareté des moyens, multiplicité des fins : il faut choisir." },
      { q: "Choisir des vacances plutôt qu'un stage rémunéré a un coût d'opportunité égal :", choix: ["Au prix des vacances", "Au revenu du stage auquel on renonce", "À zéro", "Aux impôts payés"], bonne: 1, explication: "Ce n'est pas une dépense, mais un renoncement." },
      { q: "Un point situé à l'intérieur de la frontière des possibilités de production traduit :", choix: ["Une situation impossible", "Une production efficace", "Des ressources inemployées", "Une croissance économique"], bonne: 2, explication: "On pourrait produire plus des deux biens." },
      { q: "L'éclairage public d'une rue est un exemple de :", choix: ["Bien libre", "Bien public", "Bien de production", "Bien intermédiaire"], bonne: 1, explication: "Personne ne peut être exclu de son usage." },
      { q: "La macroéconomie étudie :", choix: ["Le comportement d'un consommateur", "Le prix d'un seul produit", "Les grands agrégats d'un pays", "La gestion d'une seule entreprise"], bonne: 2, explication: "Production, chômage, inflation, commerce extérieur." },
      { q: "La phrase « il faut augmenter les impôts des plus riches » relève de l'analyse :", choix: ["Positive", "Normative", "Comptable", "Statistique"], bonne: 1, explication: "Elle exprime un jugement de valeur." },
      { q: "L'article 35 de la Constitution de 2011 garantit notamment :", choix: ["Le droit de grève", "La liberté d'entreprendre et la libre concurrence", "L'indépendance de Bank Al-Maghrib", "Le vote de la loi de finances"], bonne: 1, explication: "Il garantit aussi le droit de propriété." },
      { q: "Selon l'article 39 de la Constitution, les charges publiques sont supportées :", choix: ["Également par tous", "En proportion des facultés contributives de chacun", "Par les seules entreprises", "Selon le lieu de résidence"], bonne: 1, explication: "Seule la loi peut les créer et les répartir." },
      { q: "Le déplacement de la frontière des possibilités de production vers l'extérieur traduit :", choix: ["Une crise", "Une hausse des prix", "Une croissance des capacités de production", "Une hausse du chômage"], bonne: 2, explication: "Plus de ressources ou une meilleure technique." },
      { q: "L'analyse économique du droit est associée à :", choix: ["Ronald Coase et Richard Posner", "Adam Smith et David Ricardo", "Henri Fayol et Frederick Taylor", "Karl Marx et Friedrich Engels"], bonne: 0, explication: "Courant né aux États-Unis dans les années 1960." },
    ],
  },

  2: {
    titre: "Les grands courants de la pensée économique",
    description: "Pensée économique pour juristes : Ibn Khaldoun, mercantilistes, Smith, Ricardo, Marx, néoclassiques, Keynes, Friedman, et leur trace dans la Constitution.",
    resume: md`
## L'essentiel — Les grands courants

- **Ibn Khaldoun** (*Muqaddima*, 1377) : travail et division des tâches ; un impôt trop lourd fait baisser les recettes.
- **Mercantilistes** (XVIᵉ-XVIIIᵉ s.) : richesse = or ; exporter plus, importer moins (Colbert).
- **Physiocrates** (Quesnay, 1758) : seule la terre crée un surplus ; « laissez faire, laissez passer ».
- **Smith** (1776) : division du travail, main invisible, État limité aux fonctions régaliennes.
- **Ricardo** (1817) : avantages comparatifs ; **Say** (1803) : l'offre crée sa propre demande.
- **Marx** (*Le Capital*, 1867) : plus-value, exploitation, lutte des classes ; le droit relève de la superstructure.
- **Néoclassiques** (Jevons, Menger, Walras, 1874) : utilité marginale, rationalité, équilibre général.
- **Keynes** (1936) : demande effective, sous-emploi durable, intervention de l'État, multiplicateur.
- **Friedman** et les monétaristes : l'inflation vient de la monnaie ; Hayek : le marché coordonne l'information.
- Constitution de 2011 : héritage libéral (art. 35, 36), social (art. 31), prudence budgétaire (art. 77).
`,
    exercices: md`
### Exercice 2 — Qui a dit quoi ?

Associez chaque idée à un auteur : 1) un pays gagne à se spécialiser dans ce qu'il produit relativement le mieux ; 2) le niveau de production dépend de la demande effective ; 3) l'ouvrier produit plus de valeur qu'il n'en reçoit ; 4) la richesse vient de l'or accumulé ; 5) la valeur d'un bien dépend de l'utilité de la dernière unité.

<details><summary>Voir le corrigé</summary>

1) Ricardo (1817), avantages comparatifs. 2) Keynes (1936). 3) Marx (1867), plus-value. 4) Mercantilistes. 5) Néoclassiques, Walras, Jevons ou Menger (révolution marginaliste, années 1870).

</details>

### Exercice 3 — Plan de dissertation

Sujet : « Le marché peut-il se passer de l'État ? » Proposez une problématique et un plan en deux parties, avec deux auteurs et un texte marocain par partie.

<details><summary>Voir le corrigé</summary>

**Problématique** : le marché coordonne-t-il seul les décisions économiques, ou a-t-il besoin d'un cadre et d'interventions publiques ?

**I. Le marché, un mécanisme qui se suffit en grande partie.** Smith (1776) : la main invisible ; Hayek : le marché transmet l'information mieux qu'un planificateur. Texte : article 35 de la Constitution (liberté d'entreprendre, libre concurrence).

**II. Un marché qui a besoin de l'État pour fonctionner et se corriger.** Keynes (1936) : le marché peut rester en sous-emploi ; Coase et les institutionnalistes : sans droit de propriété ni contrats exécutés, pas de marché. Textes : article 36 et article 166 (sanction des abus, Conseil de la concurrence), article 31 (droits sociaux).

**Conclusion** : le marché ne peut se passer de l'État, mais le débat porte sur le degré d'intervention.

</details>
`,
    qcm: [
      { q: "La Muqaddima (1377) est l'œuvre de :", choix: ["Ibn Rushd", "Ibn Khaldoun", "Ibn Battuta", "Al-Farabi"], bonne: 1, explication: "Il y relie prospérité, travail et fiscalité." },
      { q: "Pour les mercantilistes, la richesse d'une nation repose sur :", choix: ["La terre", "Le travail", "L'accumulation de métaux précieux", "L'utilité marginale"], bonne: 2, explication: "D'où la recherche d'un excédent commercial." },
      { q: "La « main invisible » est une idée de :", choix: ["Keynes", "Marx", "Adam Smith", "Walras"], bonne: 2, explication: "Son livre de 1776 sur la richesse des nations." },
      { q: "La théorie des avantages comparatifs est due à :", choix: ["David Ricardo", "Jean-Baptiste Say", "François Quesnay", "Milton Friedman"], bonne: 0, explication: "Principes de l'économie politique et de l'impôt, 1817." },
      { q: "Selon la loi des débouchés de Say :", choix: ["La demande crée l'offre", "L'offre crée sa propre demande", "Les prix sont fixés par l'État", "La monnaie crée l'inflation"], bonne: 1, explication: "Une crise générale de surproduction serait impossible." },
      { q: "Pour Marx, la plus-value est :", choix: ["La hausse du prix d'un immeuble", "La valeur créée par l'ouvrier au-delà de son salaire", "Un impôt sur les bénéfices", "Le profit d'un commerçant honnête"], bonne: 1, explication: "Elle est captée par le capitaliste : c'est l'exploitation." },
      { q: "Keynes publie son grand livre sur l'emploi et la monnaie en :", choix: ["1867", "1913", "1936", "1974"], bonne: 2, explication: "Keynes la publie après la crise de 1929." },
      { q: "Pour Keynes, en cas de chômage durable, l'État doit :", choix: ["Ne rien faire", "Relancer la demande", "Supprimer la monnaie", "Augmenter fortement les impôts"], bonne: 1, explication: "Dépenses publiques, baisse d'impôts ou des taux." },
      { q: "Les monétaristes, autour de Friedman, expliquent l'inflation par :", choix: ["Une création excessive de monnaie", "La hausse des salaires seulement", "Le manque de concurrence", "La sécheresse"], bonne: 0, explication: "La banque centrale doit maîtriser la masse monétaire." },
      { q: "Le Maroc lance les privatisations par une loi de :", choix: ["1959", "1989", "2011", "2019"], bonne: 1, explication: "Loi 39-89, après le programme d'ajustement structurel de 1983." },
    ],
  },

  3: {
    titre: "Agents, circuit économique et agrégats nationaux",
    description: "Agents économiques et comptabilité nationale : secteurs institutionnels, circuit, valeur ajoutée, PIB par trois approches, croissance réelle, développement.",
    resume: md`
## L'essentiel — Agents et agrégats

- Cinq **secteurs institutionnels** : ménages, sociétés non financières, sociétés financières, administrations publiques, ISBLSM ; plus le **reste du monde**.
- L'économiste classe selon la **fonction**, pas selon la forme juridique.
- **Circuit** : à chaque flux réel correspond un flux monétaire inverse ; la dépense de l'un est le revenu de l'autre.
- **VA** = production − consommations intermédiaires ; les machines ne sont pas des consommations intermédiaires.
- **PIB** : production réalisée sur le territoire par des unités résidentes ; établi au Maroc par le HCP.
- PIB (dépenses) = consommation finale + FBCF + variation des stocks + exportations − importations.
- **PIB réel** = PIB nominal ÷ (1 + hausse des prix) ; croissance = (n − n−1) ÷ n−1 × 100.
- **Croissance** (quantitative) ≠ **développement** (qualitatif : santé, éducation, emploi).
- Indicateurs : IDH (PNUD), Gini, pauvreté ; développement durable (Brundtland, 1987).
- Liens juridiques : loi de finances (art. 75, loi organique 130-13) ; art. 31 et 35 (développement durable, justice sociale).
`,
    exercices: md`
### Exercice 2 — Classer les agents

Indiquez le secteur institutionnel : 1) la CNSS ; 2) une banque de Casablanca ; 3) un menuisier qui travaille seul à Safi ; 4) une association qui distribue des paniers alimentaires ; 5) l'OCP ; 6) une commune.

<details><summary>Voir le corrigé</summary>

1) Administrations publiques (sécurité sociale). 2) Sociétés financières. 3) Ménages (entrepreneur individuel). 4) Institutions sans but lucratif au service des ménages. 5) Sociétés non financières, malgré la participation de l'État : elle vend sa production. 6) Administrations publiques.

</details>

### Exercice 3 — PIB par la production

Un pays fictif compte trois branches (en milliards de DH) : agriculture (production 180, consommations intermédiaires 60) ; industrie (production 520, CI 340) ; services (production 610, CI 210). Les impôts sur les produits nets de subventions s'élèvent à 90. 1) Calculez la VA de chaque branche. 2) Calculez le PIB. 3) Calculez la part de l'agriculture dans la VA totale. 4) Une sécheresse réduit la VA agricole de 15 %. Quel est l'effet sur le PIB, toutes choses égales par ailleurs ?

<details><summary>Voir le corrigé</summary>

1) Agriculture : 180 − 60 = **120** ; industrie : 520 − 340 = **180** ; services : 610 − 210 = **400**. 2) PIB = 120 + 180 + 400 + 90 = **790 milliards de DH**. 3) 120 ÷ 700 × 100 ≈ **17,1 %** de la VA totale. 4) Perte : 120 × 0,15 = **18 milliards de DH** ; nouveau PIB : 772, soit une baisse de 18 ÷ 790 × 100 ≈ **2,3 %**. On voit pourquoi la pluviométrie pèse sur la croissance marocaine.

</details>
`,
    qcm: [
      { q: "La valeur ajoutée se calcule ainsi :", choix: ["Chiffre d'affaires + achats", "Production − consommations intermédiaires", "Bénéfice − impôts", "Salaires + dividendes"], bonne: 1, explication: "Elle retire ce qui a été acheté à d'autres producteurs." },
      { q: "Quelle institution publie le PIB du Maroc ?", choix: ["Bank Al-Maghrib", "Le Haut-Commissariat au Plan", "La Cour des comptes", "Le Conseil de la concurrence"], bonne: 1, explication: "Le HCP publie aussi l'inflation et le chômage." },
      { q: "Dans le calcul du PIB par les dépenses, les importations sont :", choix: ["Ajoutées", "Retranchées", "Ignorées", "Multipliées par deux"], bonne: 1, explication: "Elles ont été produites à l'étranger." },
      { q: "Une machine achetée par une usine est classée en :", choix: ["Consommation intermédiaire", "Formation brute de capital fixe", "Consommation finale", "Variation des stocks"], bonne: 1, explication: "Elle sert pendant plusieurs années." },
      { q: "Le secteur institutionnel dont la ressource principale est l'impôt est :", choix: ["Les ménages", "Les sociétés financières", "Les administrations publiques", "Le reste du monde"], bonne: 2, explication: "Elles produisent des services non marchands." },
      { q: "Le PIB nominal augmente de 6 % et les prix de 2 %. La croissance réelle est d'environ :", choix: ["8 %", "6 %", "4 %", "2 %"], bonne: 2, explication: "1,06 divisé par 1,02, moins 1, donne environ 3,9 %." },
      { q: "L'IDH combine :", choix: ["Revenu, santé et éducation", "Inflation, chômage et croissance", "Exportations et importations", "Impôts et dépenses publiques"], bonne: 0, explication: "Indicateur du PNUD." },
      { q: "Le développement durable est défini par :", choix: ["Le rapport Brundtland de 1987", "La Constitution de 1962", "Le traité de Rome", "La loi 9-88"], bonne: 0, explication: "Penser aux besoins d'aujourd'hui et à ceux des générations à venir." },
      { q: "Le PIB par habitant ne mesure pas :", choix: ["Le niveau de production moyen", "La répartition des revenus", "La production rapportée à la population", "Un ordre de grandeur du niveau de vie"], bonne: 1, explication: "C'est une moyenne qui masque les inégalités." },
      { q: "La loi organique relative à la loi de finances porte le numéro :", choix: ["130-13", "104-12", "17-95", "114-13"], bonne: 0, explication: "Loi organique de 2015." },
    ],
  },

  4: {
    titre: "Le marché, les prix et le droit de la concurrence",
    description: "Marché et concurrence pour juristes : offre, demande, équilibre, élasticité, prix plafond, structures de marché, loi 104-12 et Conseil de la concurrence.",
    resume: md`
## L'essentiel — Marché et concurrence

- **Marché** : rencontre d'offreurs et de demandeurs, formation d'un prix (biens, travail, capitaux, changes).
- Demande décroissante, offre croissante ; un changement de prix fait **glisser** sur la courbe, un autre facteur la **déplace**.
- **Équilibre** : Qd = Qs ; un excès d'offre fait baisser le prix, un excès de demande le fait monter.
- **Élasticité-prix** e = (ΔQ ÷ ΔP) × (P ÷ Q) ; |e| < 1 : inélastique (une hausse de prix augmente la recette).
- **Prix plafond** sous l'équilibre : pénurie ; **prix plancher** au-dessus : excédent.
- Caisse de compensation : butane, sucre, farine nationale ; réforme et aides directes.
- Structures : concurrence pure et parfaite (5 conditions), concurrence monopolistique, oligopole, monopole.
- Constitution : art. 35 (libre concurrence), art. 36 (abus sanctionnés), art. 166 (Conseil de la concurrence).
- **Loi 104-12** : liberté des prix par principe ; interdiction des ententes et des abus de position dominante ; contrôle des concentrations ; **loi 20-13** : Conseil de la concurrence.
- Carburants : transaction de 1,84 milliard de DH (23 novembre 2023).
`,
    exercices: md`
### Exercice 2 — Déplacement ou glissement ?

Sur le marché de la tomate, dites si la courbe d'offre ou de demande se déplace (et dans quel sens), ou s'il s'agit d'un glissement : 1) une vague de froid détruit une partie des serres du Souss ; 2) le prix de la tomate baisse et les ménages en achètent davantage ; 3) le prix des engrais augmente ; 4) une campagne fait connaître les bienfaits de la tomate ; 5) les revenus des ménages augmentent.

<details><summary>Voir le corrigé</summary>

1) L'offre se déplace vers la gauche (moins de production à chaque prix). 2) Glissement le long de la courbe de demande. 3) L'offre se déplace vers la gauche (coûts plus élevés). 4) La demande se déplace vers la droite (goûts). 5) La demande se déplace vers la droite, pour un bien normal.

</details>

### Exercice 3 — Une concentration à contrôler

Deux distributeurs de produits laitiers, qui détiennent 35 % et 30 % du marché national, annoncent leur fusion. 1) Quelle structure de marché en résulterait ? 2) Quels risques pour les consommateurs ? 3) Quelle autorité intervient et sur quel fondement ? 4) Être en position dominante est-il interdit ?

<details><summary>Voir le corrigé</summary>

1) Une entreprise détenant 65 % du marché, face à quelques concurrents : un **oligopole** très concentré, proche du monopole. 2) Hausse des prix, baisse de la qualité ou du choix, pression sur les éleveurs fournisseurs. 3) Le **Conseil de la concurrence** (article 166 de la Constitution, loi 20-13) contrôle les opérations de concentration prévues par la **loi 104-12** : il peut les autoriser, les soumettre à conditions (cession d'activités) ou les interdire. 4) Non : la position dominante n'est pas interdite en soi ; c'est son **abus** qui est sanctionné (loi 104-12, article 36 de la Constitution).

</details>
`,
    qcm: [
      { q: "Quand le prix d'un bien baisse, en général :", choix: ["La courbe de demande se déplace vers la gauche", "La quantité demandée augmente", "L'offre augmente", "La demande disparaît"], bonne: 1, explication: "On glisse le long de la courbe de demande." },
      { q: "Le prix d'équilibre est le prix pour lequel :", choix: ["L'État est satisfait", "La quantité offerte égale la quantité demandée", "Le profit est maximal", "Les coûts sont nuls"], bonne: 1, explication: "Il n'y a ni pénurie ni excédent." },
      { q: "Avec Qd = 900 − 10P et Qs = 100 + 30P, le prix d'équilibre est :", choix: ["10", "20", "30", "40"], bonne: 1, explication: "800 = 40P, donc P = 20 et Q = 700." },
      { q: "Une demande dont l'élasticité-prix vaut −0,4 est :", choix: ["Élastique", "Inélastique", "Parfaitement élastique", "Positive"], bonne: 1, explication: "Sa valeur absolue est inférieure à 1." },
      { q: "Si l'État impose un prix maximum inférieur au prix d'équilibre, on observe :", choix: ["Un excédent", "Une pénurie", "Aucun effet", "Une baisse de la demande"], bonne: 1, explication: "La quantité demandée dépasse la quantité offerte." },
      { q: "Un marché avec quelques vendeurs seulement est :", choix: ["Un monopole", "Un oligopole", "Une concurrence pure et parfaite", "Un monopsone"], bonne: 1, explication: "Exemple : distribution de carburants." },
      { q: "Selon la loi 104-12, le principe est :", choix: ["La fixation des prix par l'État", "La liberté des prix déterminés par la concurrence", "L'interdiction des bénéfices", "Le contrôle de tous les prix par les communes"], bonne: 1, explication: "La réglementation des prix reste une exception." },
      { q: "Le Conseil de la concurrence est prévu par l'article de la Constitution :", choix: ["31", "77", "147", "166"], bonne: 3, explication: "Institution indépendante de régulation de la concurrence." },
      { q: "Ce qui est sanctionné par le droit de la concurrence, c'est :", choix: ["Le fait d'être leader", "L'abus de position dominante", "La baisse des prix", "La publicité"], bonne: 1, explication: "La position dominante en elle-même n'est pas interdite." },
      { q: "Le dossier des carburants s'est clos en novembre 2023 par une transaction de :", choix: ["184 millions de DH", "1,84 milliard de DH", "18,4 milliards de DH", "184 milliards de DH"], bonne: 1, explication: "Décision du 23 novembre 2023." },
    ],
  },

  5: {
    titre: "Monnaie, inflation et politiques économiques",
    description: "Monnaie et politiques économiques : création monétaire, Bank Al-Maghrib (loi 40-17), inflation, chômage, politiques monétaire et budgétaire.",
    resume: md`
## L'essentiel — Monnaie et politiques

- Trois fonctions de la monnaie : **intermédiaire des échanges**, **unité de compte**, **réserve de valeur**.
- La monnaie scripturale domine ; les banques créent la monnaie en accordant des crédits (« les crédits font les dépôts »).
- **Bank Al-Maghrib** (1959 ; loi 40-17 de 2019) : stabilité des prix, politique monétaire, réserves de change, supervision bancaire (loi 103-12).
- Dirham arrimé à un panier euro-dollar ; bande de fluctuation élargie à ±5 % en mars 2020.
- **Inflation** = (IPC n − IPC n−1) ÷ IPC n−1 × 100 ; causes : demande, coûts, monnaie ; 6,6 % au Maroc en 2022.
- Évolution réelle = (1 + taux nominal) ÷ (1 + inflation) − 1 ; l'inflation favorise les emprunteurs, pénalise les épargnants.
- **Chômage** (BIT) : sans emploi, disponible, en recherche ; taux = chômeurs ÷ actifs × 100 ; 13,3 % en 2024.
- Carré magique de Kaldor : croissance, plein emploi, stabilité des prix, équilibre extérieur.
- Politique monétaire (taux directeur) ; politique budgétaire (dépenses, impôts) ; multiplicateur k = 1 ÷ (1 − c).
- Constitution : art. 39 (légalité de l'impôt), 75 (loi de finances), 77 (équilibre), 147-148 (Cour des comptes).
`,
    exercices: md`
### Exercice 2 — Le crédit crée la monnaie

Une banque accorde un crédit de 300 000 DH à un transporteur d'Agadir, qui paie aussitôt un camion à un concessionnaire client d'une autre banque. 1) La masse monétaire augmente-t-elle au moment du crédit ? 2) Que se passe-t-il lors du paiement du camion ? 3) Que se passe-t-il quand le crédit est remboursé ? 4) Quel instrument Bank Al-Maghrib utilise-t-elle pour freiner le crédit ?

<details><summary>Voir le corrigé</summary>

1) Oui : la banque inscrit 300 000 DH sur le compte du transporteur ; cette monnaie scripturale est nouvelle. 2) La monnaie change de compte (et de banque) : la masse monétaire ne change pas. 3) Le remboursement détruit la monnaie créée. 4) Le **taux directeur** : en le relevant, la banque centrale renchérit le refinancement des banques, qui augmentent leurs taux et prêtent moins. Elle peut aussi jouer sur la réserve obligatoire.

</details>

### Exercice 3 — Quelle politique choisir ?

Pour chaque situation, proposez une politique monétaire et une politique budgétaire cohérentes : A) inflation de 7 %, croissance de 4 %, chômage stable ; B) inflation de 1 %, croissance de 0,5 %, chômage en forte hausse. Indiquez qui décide chaque mesure.

<details><summary>Voir le corrigé</summary>

**A — Surchauffe inflationniste.** Politique monétaire **restrictive** : hausse du taux directeur (Bank Al-Maghrib). Politique budgétaire de **rigueur** : maîtrise des dépenses, réduction du déficit (gouvernement, puis vote du Parlement en loi de finances).

**B — Ralentissement et chômage.** Politique monétaire **expansive** : baisse du taux directeur. Politique budgétaire de **relance** : hausse de l'investissement public ou baisse d'impôts, par la loi de finances ou une loi de finances rectificative, dans le respect de l'article 77 de la Constitution.

</details>
`,
    qcm: [
      { q: "La fonction de la monnaie qui permet de comparer la valeur des biens est celle :", choix: ["D'intermédiaire des échanges", "D'unité de compte", "De réserve de valeur", "De moyen de crédit"], bonne: 1, explication: "Tout s'exprime en dirhams." },
      { q: "La plus grande partie de la monnaie aujourd'hui est :", choix: ["Fiduciaire", "Scripturale", "Métallique", "Marchandise"], bonne: 1, explication: "Ce sont les soldes des comptes bancaires." },
      { q: "Les banques commerciales créent de la monnaie quand elles :", choix: ["Impriment des billets", "Accordent des crédits", "Paient des impôts", "Ferment des comptes"], bonne: 1, explication: "Les crédits font les dépôts." },
      { q: "Le statut actuel de Bank Al-Maghrib est fixé par la loi :", choix: ["40-17", "104-12", "9-88", "65-99"], bonne: 0, explication: "Loi de 2019 qui renforce son indépendance." },
      { q: "La mission principale de Bank Al-Maghrib est :", choix: ["Le plein emploi", "La stabilité des prix", "La collecte des impôts", "Le vote du budget"], bonne: 1, explication: "Elle conduit la politique monétaire à cette fin." },
      { q: "L'indice des prix passe de 120 à 126. L'inflation est de :", choix: ["4 %", "5 %", "6 %", "6,5 %"], bonne: 1, explication: "6 divisé par 120, fois 100." },
      { q: "L'inflation avantage surtout :", choix: ["Les épargnants", "Les emprunteurs à taux fixe", "Les retraités à pension fixe", "Les prêteurs"], bonne: 1, explication: "La valeur réelle de leur dette diminue." },
      { q: "Au sens du BIT, n'est pas chômeur :", choix: ["Une personne sans emploi qui cherche activement", "Un étudiant qui ne cherche pas d'emploi", "Une personne disponible qui envoie des candidatures", "Un licencié qui recherche un poste"], bonne: 1, explication: "Il est inactif." },
      { q: "Avec une propension marginale à consommer de 0,8, le multiplicateur simple vaut :", choix: ["0,2", "1,25", "5", "8"], bonne: 2, explication: "1 divisé par 0,2." },
      { q: "Selon l'article 39 de la Constitution, les charges publiques sont créées et réparties :", choix: ["Par décret", "Par la loi seulement", "Par Bank Al-Maghrib", "Par les communes"], bonne: 1, explication: "Principe de légalité de l'impôt." },
    ],
  },

  6: {
    titre: "L'entreprise : notion, classifications et formes juridiques",
    description: "L'entreprise pour juristes : entreprise et société (DOC art. 982), classifications, commerçant, auto-entrepreneur (loi 114-13), SNC, SARL, SA, SAS, PESTEL.",
    resume: md`
## L'essentiel — L'entreprise

- **Entreprise** : unité économique autonome qui combine des moyens pour produire et vendre ; elle crée et répartit la valeur ajoutée.
- Coase (1937) : l'entreprise existe parce que passer par le marché a un coût.
- **Société** (DOC, art. 982) : contrat de mise en commun de biens ou de travail pour partager le bénéfice ; personnalité morale.
- Classifications : secteur (primaire, secondaire, tertiaire), taille, propriété (privée, publique, mixte), statut, finalité.
- **Commerçant** : exercice habituel ou professionnel des activités de l'article 6 du Code de commerce ; présomption par l'immatriculation (art. 58).
- **Auto-entrepreneur** (loi 114-13) : 500 000 DH (commerce, industrie, artisanat) ou 200 000 DH (services) ; dispense de comptabilité et de registre du commerce.
- **SNC** : associés commerçants, responsabilité indéfinie et solidaire. **SARL** : 1 à 50 associés, responsabilité limitée, capital libre depuis 2011.
- **SA** (loi 17-95) : au moins 5 actionnaires ; 300 000 DH minimum, 3 000 000 DH avec appel public à l'épargne. **SAS** : statuts libres, pas d'appel public à l'épargne.
- Environnement : **PESTEL** ; parties prenantes ; RSE.
- Branches du droit concernées : commercial, sociétés, travail, fiscal, entreprises en difficulté (loi 73-17).
`,
    exercices: md`
### Exercice 2 — Entreprise ou société ?

Pour chaque situation, dites s'il y a une entreprise, une société, ou les deux : 1) Rachid tient seul une boulangerie à Taza ; 2) trois frères créent une SARL qui exploite un hôtel à Chefchaouen ; 3) deux sœurs créent une société civile pour gérer l'appartement hérité de leurs parents ; 4) une coopérative de femmes produit de l'huile d'argan.

<details><summary>Voir le corrigé</summary>

1) Une **entreprise individuelle**, sans société : Rachid est commerçant en personne physique. 2) **Les deux** : une société commerciale (personne morale) qui exploite une entreprise hôtelière. 3) Une **société** (contrat de l'article 982 du DOC), mais guère une entreprise au sens économique : elle gère un bien sans produire pour un marché. 4) Une **entreprise** à forme coopérative (loi 112-12) : elle produit et vend, sans but lucratif au sens d'une société commerciale.

</details>

### Exercice 3 — Responsabilité des associés

Une société a 400 000 DH de dettes impayées et ne possède plus que 100 000 DH d'actifs. Elle compte deux associés, Ali et Hind, qui ont chacun apporté 50 000 DH. Que risque le patrimoine personnel d'Ali si la société est : 1) une SNC ; 2) une SARL ? 3) Quel conseil auriez-vous donné à la création ?

<details><summary>Voir le corrigé</summary>

Il manque 400 000 − 100 000 = **300 000 DH** aux créanciers.

1) **SNC** : les associés répondent des dettes sociales **indéfiniment et solidairement**. Un créancier peut réclamer les 300 000 DH à Ali seul, sur ses biens personnels, à charge pour Ali de se retourner contre Hind pour sa part.

2) **SARL** : la responsabilité est **limitée aux apports**. Ali perd ses 50 000 DH d'apport, mais ses biens personnels sont protégés (sauf faute de gestion ou caution personnelle donnée à une banque).

3) Pour une activité risquée, la **SARL** protège mieux le patrimoine des associés. La SNC suppose une grande confiance entre associés et un risque maîtrisé.

</details>
`,
    qcm: [
      { q: "La définition de la société figure à l'article 982 :", choix: ["Du Code de commerce", "Du Dahir des obligations et des contrats", "De la Constitution", "Du Code du travail"], bonne: 1, explication: "C'est un contrat de mise en commun en vue de partager le bénéfice." },
      { q: "Une personne immatriculée au registre du commerce est :", choix: ["Toujours fonctionnaire", "Présumée commerçante, sauf preuve contraire", "Dispensée d'impôt", "Obligatoirement une société"], bonne: 1, explication: "Article 58 du Code de commerce." },
      { q: "Le plafond de chiffre d'affaires de l'auto-entrepreneur pour les prestations de services est de :", choix: ["100 000 DH", "200 000 DH", "500 000 DH", "1 000 000 DH"], bonne: 1, explication: "Loi 114-13, article 1 ; 500 000 DH pour le commerce, l'industrie et l'artisanat." },
      { q: "Dans une SNC, les associés sont responsables des dettes sociales :", choix: ["Dans la limite de leurs apports", "Indéfiniment et solidairement", "Seulement en cas de faute", "Jamais"], bonne: 1, explication: "Ils ont tous la qualité de commerçant." },
      { q: "Le nombre maximal d'associés d'une SARL est de :", choix: ["7", "20", "50", "100"], bonne: 2, explication: "Elle peut aussi n'avoir qu'un associé." },
      { q: "Une SA qui ne fait pas appel public à l'épargne doit avoir un capital d'au moins :", choix: ["10 000 DH", "100 000 DH", "300 000 DH", "3 000 000 DH"], bonne: 2, explication: "3 000 000 DH en cas d'appel public à l'épargne." },
      { q: "La SA exige au moins :", choix: ["Deux actionnaires", "Trois actionnaires", "Cinq actionnaires", "Sept actionnaires"], bonne: 2, explication: "Loi 17-95." },
      { q: "Une usine de montage automobile de Kénitra relève du secteur :", choix: ["Primaire", "Secondaire", "Tertiaire", "Public"], bonne: 1, explication: "Industrie de transformation." },
      { q: "Dans l'analyse PESTEL, une nouvelle loi sur la protection des données relève du facteur :", choix: ["Politique", "Économique", "Technologique", "Légal"], bonne: 3, explication: "Le L désigne l'environnement juridique." },
      { q: "La société par actions simplifiée ne peut pas :", choix: ["Avoir un seul associé", "Organiser librement sa direction", "Faire appel public à l'épargne", "Exercer une activité commerciale"], bonne: 2, explication: "D'où son choix pour des projets non cotés." },
    ],
  },

  7: {
    titre: "La gestion de l'entreprise : management et fonctions",
    description: "Management pour juristes : efficacité et efficience, Taylor, Fayol, Weber, Mayo, Maslow, décision, structures, fonctions de l'entreprise et matrice SWOT.",
    resume: md`
## L'essentiel — Management et fonctions

- **Gestion** : utiliser les ressources pour atteindre les objectifs ; **efficacité** (atteindre) et **efficience** (au moindre coût).
- **Taylor** (1911) : organisation scientifique du travail, séparation conception-exécution, *one best way*, salaire au rendement.
- **Fayol** (1916) : prévoir, organiser, commander, coordonner, contrôler ; unité de commandement.
- **Weber** : bureaucratie, règles écrites, hiérarchie, recrutement au mérite.
- **Mayo** (Hawthorne, 1924-1932) : relations humaines ; **Maslow** (1943) : pyramide des besoins ; **McGregor** (1960) : théories X et Y.
- Décisions stratégiques, tactiques, opérationnelles ; rationalité limitée (Simon).
- Structures : fonctionnelle, divisionnelle, matricielle ; organigramme.
- Fonctions : direction, approvisionnement, production, commerciale (4 P), ressources humaines, finances et comptabilité, R&D.
- **SWOT** : forces et faiblesses (internes), opportunités et menaces (externes).
- Productivité = production ÷ heures ; rentabilité commerciale = résultat net ÷ CA × 100 ; gestion publique par programmes (loi organique 130-13).
`,
    exercices: md`
### Exercice 2 — Quel auteur, quel outil ?

Rattachez chaque pratique à un auteur ou à une école : 1) un chef de service qui veut que chaque agent n'ait qu'un seul supérieur ; 2) une entreprise qui chronomètre les gestes sur une chaîne ; 3) un directeur qui organise des réunions pour écouter les salariés ; 4) une administration qui recrute par concours et applique des procédures écrites ; 5) une prime de reconnaissance pour satisfaire le besoin d'estime.

<details><summary>Voir le corrigé</summary>

1) Fayol, unité de commandement. 2) Taylor, organisation scientifique du travail. 3) École des relations humaines, Mayo. 4) Weber, bureaucratie. 5) Maslow, pyramide des besoins (niveau de l'estime).

</details>

### Exercice 3 — Choisir une structure

Une société de transport de voyageurs exploite trois activités : lignes urbaines à Marrakech, lignes interurbaines nationales et transport touristique. Chaque activité a ses clients, ses véhicules et ses contraintes réglementaires. 1) Quelle structure conseillez-vous ? 2) Donnez un avantage et un inconvénient. 3) Un projet de billettique commun aux trois activités est lancé : quelle structure temporaire utiliser ?

<details><summary>Voir le corrigé</summary>

1) Une **structure divisionnelle**, avec une division par activité, car les marchés et les contraintes diffèrent. 2) Avantage : chaque division est proche de ses clients et responsable de ses résultats. Inconvénient : des fonctions sont dupliquées (achats, ressources humaines), d'où des coûts plus élevés. 3) Une organisation **matricielle** par projet : une équipe réunit des membres des trois divisions sous l'autorité d'un chef de projet, tout en restant rattachés à leur division. Il faut alors bien répartir l'autorité, car l'unité de commandement n'est plus respectée.

</details>
`,
    qcm: [
      { q: "Une organisation qui atteint ses objectifs au moindre coût est :", choix: ["Efficace seulement", "Efficiente", "Bureaucratique", "Matricielle"], bonne: 1, explication: "L'efficience rapporte les résultats aux ressources consommées." },
      { q: "Chronométrer les gestes et séparer conception et exécution, c'est la méthode de :", choix: ["Fayol", "Taylor", "Mayo", "Maslow"], bonne: 1, explication: "Organisation scientifique du travail, 1911." },
      { q: "Les cinq fonctions de l'administration (prévoir, organiser, commander, coordonner, contrôler) ont été définies par :", choix: ["Taylor", "Fayol", "Weber", "Simon"], bonne: 1, explication: "Administration industrielle et générale, 1916." },
      { q: "À Hawthorne, l'équipe de Mayo découvre que la productivité dépend aussi :", choix: ["Du chronométrage", "De l'attention portée aux salariés et au groupe", "Des règles écrites", "Du seul salaire"], bonne: 1, explication: "Elton Mayo, 1924-1932." },
      { q: "Au sommet de la pyramide de Maslow se trouve le besoin :", choix: ["Physiologique", "De sécurité", "D'appartenance", "D'accomplissement"], bonne: 3, explication: "Pyramide présentée en 1943." },
      { q: "La décision d'entrer sur un marché étranger est une décision :", choix: ["Opérationnelle", "Tactique", "Stratégique", "Courante"], bonne: 2, explication: "Elle engage l'avenir de l'entreprise." },
      { q: "Dans une structure matricielle, chaque salarié :", choix: ["N'a aucun chef", "Relève de deux supérieurs", "Relève d'un seul supérieur", "Est indépendant"], bonne: 1, explication: "Un chef de fonction et un chef de projet." },
      { q: "Dans une matrice SWOT, l'arrivée d'un concurrent étranger est :", choix: ["Une force", "Une faiblesse", "Une opportunité", "Une menace"], bonne: 3, explication: "Élément externe et négatif." },
      { q: "Une équipe produit 3 600 pièces en 90 heures. Sa productivité horaire est de :", choix: ["30", "40", "45", "50"], bonne: 1, explication: "3 600 divisé par 90." },
      { q: "La gestion budgétaire par programmes, objectifs et indicateurs est introduite au Maroc par :", choix: ["La loi organique 130-13", "La loi 5-96", "Le DOC", "La loi 114-13"], bonne: 0, explication: "Loi organique relative à la loi de finances." },
    ],
  },
};

export default chapitres;
