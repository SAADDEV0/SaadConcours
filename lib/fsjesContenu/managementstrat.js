// Management Stratégique (S6) — compléments par chapitre.
const md = String.raw;

export default {
  1: {
    titre: "Du management à la stratégie",
    resume: md`
## L'essentiel — Management et stratégie

- Le **management** combine les ressources (humaines, financières, matérielles, informationnelles) pour atteindre des objectifs.
- Fonctions **PODC** : **planifier**, **organiser**, **diriger**, **contrôler**.
- **Efficacité** (atteindre l'objectif), **efficience** (au moindre coût), **performance** (les deux).
- Niveaux de décision d'**Ansoff** : **stratégique** (long terme, irréversible), **tactique** (moyen terme), **opérationnel** (court terme, répétitif).
- La **stratégie** fixe les objectifs à long terme, choisit les activités et alloue les ressources pour un **avantage concurrentiel durable**.
- **DAS** : sous-ensemble homogène défini par un couple clientèle / technologie / besoin, avec ses propres concurrents et FCS.
`,
    exercices: md`
### Exercice 2 — Niveaux de décision et DAS

Le groupe fictif « ATLAS » produit de l'eau minérale, distribue des voitures et vend de l'assurance.

1. Classez ces décisions (stratégique, tactique, opérationnelle) : a) racheter une compagnie d'assurance au Sénégal ; b) fixer le planning des livreurs de la semaine ; c) lancer une campagne publicitaire nationale pour l'eau minérale ; d) abandonner la distribution automobile.
2. Combien de DAS compte le groupe ? Pourquoi ne peut-on pas les piloter avec la même stratégie ?

<details><summary>Voir le corrigé</summary>

**1)** a) **stratégique** ; b) **opérationnelle** ; c) **tactique** ; d) **stratégique**.

**2)** Au moins **trois DAS** (eau minérale, distribution automobile, assurance) : clients, technologies, concurrents et facteurs clés de succès sont différents, donc chaque DAS demande sa propre stratégie concurrentielle.

</details>
`,
    qcm: [
      { q: "PODC signifie :", choix: ["Produire, organiser, distribuer, communiquer", "Planifier, organiser, diriger, contrôler", "Prévoir, ordonner, décider, commander", "Piloter, observer, déléguer, corriger"], bonne: 1, explication: "Ce sont les quatre fonctions du management." },
      { q: "La performance réunit :", choix: ["Efficacité et efficience", "Chiffre d'affaires et bénéfice", "Qualité et prix", "Stratégie et tactique"], bonne: 0, explication: "Atteindre ses objectifs au moindre coût." },
      { q: "Une décision irréversible engageant l'avenir de l'entreprise est :", choix: ["Opérationnelle", "Tactique", "Stratégique", "Administrative courante"], bonne: 2, explication: "Selon la typologie d'Ansoff." },
      { q: "Un DAS se définit par :", choix: ["Un service de l'entreprise", "Une combinaison clientèle / technologie / besoin", "Un pays", "Un produit unique"], bonne: 1, explication: "Il a ses propres concurrents et FCS." },
      { q: "Le but de la stratégie est de construire :", choix: ["Un budget annuel", "Un avantage concurrentiel durable", "Un organigramme", "Un règlement intérieur"], bonne: 1, explication: "C'est ce qui permet de surperformer durablement." },
    ],
  },

  2: {
    titre: "Les théories des organisations",
    resume: md`
## L'essentiel — Théories des organisations

- **École classique** : **Taylor** (OST, one best way, salaire au rendement), **Fayol** (fonctions administratives, 14 principes, unité de commandement), **Weber** (bureaucratie rationnelle-légale), **Ford** (chaîne, standardisation). Limite : vision mécaniste de l'homme.
- **Relations humaines** : **Mayo** (Hawthorne), **Maslow** (pyramide des besoins), **Herzberg** (hygiène / motivation), **McGregor** (théories X et Y), **Lewin** (styles de commandement).
- **Approches modernes** : **contingence** (pas de structure idéale), **Simon** (rationalité limitée), **agence** (actionnaire/dirigeant), **coûts de transaction** (Coase, Williamson : faire ou faire faire), **approche systémique**.
`,
    exercices: md`
### Exercice 2 — Associer auteurs et idées

1. Associez : a) Weber ; b) McGregor ; c) Williamson ; d) Simon ; e) Fayol ; f) Jensen et Meckling — avec : 1) rationalité limitée ; 2) coûts de transaction ; 3) bureaucratie ; 4) théories X et Y ; 5) unité de commandement ; 6) théorie de l'agence.
2. Un dirigeant non actionnaire se verse des avantages luxueux aux dépens des actionnaires. Quelle théorie l'explique ? Quels mécanismes peuvent limiter ce comportement ?

<details><summary>Voir le corrigé</summary>

**1)** a-3 ; b-4 ; c-2 ; d-1 ; e-5 ; f-6.

**2)** La **théorie de l'agence** : l'agent (dirigeant) poursuit ses intérêts au détriment du principal (actionnaires). Mécanismes : rémunération liée à la performance (actions), contrôle par le conseil d'administration, audit, menace de rachat de l'entreprise.

</details>
`,
    qcm: [
      { q: "Le « one best way » est associé à :", choix: ["Mayo", "Taylor", "Simon", "Mintzberg"], bonne: 1, explication: "Organisation scientifique du travail." },
      { q: "Les expériences de Hawthorne ont été menées par :", choix: ["Fayol", "Mayo", "Weber", "Ford"], bonne: 1, explication: "Elles révèlent l'importance du facteur humain." },
      { q: "Selon la théorie Y de McGregor :", choix: ["L'homme fuit le travail", "L'homme s'implique si les conditions le permettent", "Seul le salaire motive", "Il faut contrôler étroitement"], bonne: 1, explication: "La théorie X suppose l'inverse." },
      { q: "La rationalité limitée signifie que le décideur choisit :", choix: ["La solution optimale", "Une solution satisfaisante", "Au hasard", "La solution la moins chère"], bonne: 1, explication: "Faute d'informations et de temps (H. Simon)." },
      { q: "La théorie des coûts de transaction explique :", choix: ["La motivation", "Le choix entre faire soi-même et acheter sur le marché", "La pyramide des besoins", "La bureaucratie"], bonne: 1, explication: "Coase et Williamson." },
    ],
  },

  3: {
    titre: "Le diagnostic externe",
    resume: md`
## L'essentiel — Diagnostic externe

- **PESTEL** (macro-environnement) : **P**olitique, **É**conomique, **S**ocioculturel, **T**echnologique, **É**cologique, **L**égal.
- **5 forces de Porter** (micro-environnement) : rivalité entre concurrents, menace des **nouveaux entrants**, menace des **substituts**, pouvoir des **fournisseurs**, pouvoir des **clients** (+ souvent l'**État**).
- Plus les forces sont intenses, plus la **rentabilité potentielle** du secteur est faible.
- **Barrières à l'entrée** : capital requis, brevets, réglementation, économies d'échelle, accès à la distribution.
- **Facteurs clés de succès** : ce qu'il faut maîtriser pour réussir dans le secteur.
`,
    exercices: md`
### Exercice 2 — PESTEL et 5 forces

Une entreprise marocaine fabrique des pièces pour l'automobile.

1. Classez dans le PESTEL : a) la croissance des exportations automobiles du Maroc ; b) les normes européennes sur les émissions de CO₂ ; c) la stabilité politique du pays ; d) l'automatisation par robots ; e) la réforme du Code du travail ; f) l'urbanisation et l'essor de la classe moyenne.
2. Les clients sont quelques grands constructeurs qui achètent d'énormes volumes et peuvent changer facilement de fournisseur. Quelle force est concernée ? Est-elle forte ou faible ? Conséquence ?

<details><summary>Voir le corrigé</summary>

**1)** a) **économique** ; b) **écologique** (et légal) ; c) **politique** ; d) **technologique** ; e) **légal** ; f) **socioculturel**.

**2)** Le **pouvoir de négociation des clients**, qui est **fort** (clients concentrés, gros volumes, faible coût de changement) : pression sur les prix et les délais, marges réduites. L'entreprise doit se différencier (qualité, innovation, proximité) ou diversifier sa clientèle.

</details>
`,
    qcm: [
      { q: "Dans PESTEL, la hausse des taux d'intérêt relève du facteur :", choix: ["Politique", "Économique", "Légal", "Technologique"], bonne: 1, explication: "Variable macroéconomique." },
      { q: "Parmi les 5 forces de Porter, on trouve :", choix: ["La menace des produits de substitution", "Le taux d'inflation", "La culture d'entreprise", "La structure matricielle"], bonne: 0, explication: "Les autres éléments ne font pas partie du modèle." },
      { q: "Des barrières à l'entrée élevées :", choix: ["Augmentent la menace des nouveaux entrants", "Réduisent la menace des nouveaux entrants", "N'ont aucun effet", "Augmentent le pouvoir des clients"], bonne: 1, explication: "Il devient difficile d'entrer dans le secteur." },
      { q: "Plus les forces concurrentielles sont intenses, plus la rentabilité du secteur est :", choix: ["Élevée", "Faible", "Stable", "Imprévisible"], bonne: 1, explication: "La pression réduit les marges." },
      { q: "Les facteurs clés de succès sont identifiés par :", choix: ["Le diagnostic externe", "L'organigramme", "Le bilan", "Le règlement intérieur"], bonne: 0, explication: "Le diagnostic interne vérifie ensuite si l'entreprise les maîtrise." },
    ],
  },

  4: {
    titre: "Le diagnostic interne",
    resume: md`
## L'essentiel — Diagnostic interne

- **Chaîne de valeur** (Porter) : activités **principales** (logistique interne, production, logistique externe, commercialisation, services) et de **soutien** (infrastructure, RH, R&D, approvisionnements).
- Objectif : repérer les activités **créatrices de valeur** (à renforcer) et celles à améliorer ou **externaliser**.
- **VRIO** : une ressource fonde un avantage durable si elle a de la **valeur**, est **rare**, **difficilement imitable** et si l'entreprise est **organisée** pour l'exploiter.
- **Compétences fondamentales** (Hamel et Prahalad) : savoir-faire distinctifs, difficiles à copier, ouvrant plusieurs marchés.
- Avantage concurrentiel : **coût inférieur** ou **valeur perçue supérieure**.
`,
    exercices: md`
### Exercice 2 — Appliquer le VRIO

Une coopérative d'huile d'argan dispose de : a) une machine d'embouteillage standard, disponible chez tous les fournisseurs ; b) une certification biologique et une IGP obtenues après des années ; c) le savoir-faire traditionnel des femmes de la coopérative, transmis depuis des générations ; d) un site web réalisé par une agence.

1. Évaluez chaque ressource selon les critères VRIO.
2. Laquelle fonde un avantage concurrentiel durable ?

<details><summary>Voir le corrigé</summary>

| Ressource | Valeur | Rare | Inimitable | Conclusion |
|---|---|---|---|---|
| a) Machine standard | Oui | Non | Non | Parité concurrentielle |
| b) Certification bio et IGP | Oui | Oui | Partiellement (longue à obtenir) | Avantage temporaire à durable |
| c) Savoir-faire traditionnel | Oui | Oui | Oui (ancré dans l'histoire et le groupe) | **Avantage durable** si la coopérative est organisée pour le valoriser |
| d) Site web | Oui | Non | Non | Parité concurrentielle |

**2)** Le **savoir-faire traditionnel** (c), renforcé par la certification (b), à condition de l'exploiter (marque, storytelling, contrôle qualité).

</details>
`,
    qcm: [
      { q: "Dans la chaîne de valeur, la gestion des ressources humaines est une activité :", choix: ["Principale", "De soutien", "Externe", "Financière"], bonne: 1, explication: "Elle soutient toutes les activités principales." },
      { q: "Dans VRIO, le « I » signifie :", choix: ["Innovation", "Inimitabilité", "Investissement", "Information"], bonne: 1, explication: "La ressource doit être difficile à copier." },
      { q: "Une ressource ayant de la valeur mais détenue par tous les concurrents procure :", choix: ["Un avantage durable", "Une parité concurrentielle", "Un désavantage", "Un monopole"], bonne: 1, explication: "Elle n'est pas rare." },
      { q: "Les « core competencies » sont définies par :", choix: ["Porter", "Hamel et Prahalad", "Taylor", "Mintzberg"], bonne: 1, explication: "Compétences fondamentales distinctives." },
      { q: "Une activité qui détruit de la valeur peut être :", choix: ["Renforcée à tout prix", "Externalisée ou améliorée", "Ignorée", "Transformée en DAS"], bonne: 1, explication: "C'est l'intérêt de l'analyse de la chaîne de valeur." },
    ],
  },

  5: {
    titre: "La synthèse du diagnostic : SWOT, BCG et McKinsey",
    resume: md`
## L'essentiel — Synthèse du diagnostic

- **SWOT** : forces et faiblesses (**internes**), opportunités et menaces (**externes**).
- Croisement : forces + opportunités (se développer), faiblesses + opportunités (corriger), forces + menaces (défendre), faiblesses + menaces (éviter, se retirer).
- **BCG** : croissance du marché × part de marché relative. **Vedette** (investir), **vache à lait** (rentabiliser, financer), **dilemme** (investir sélectivement ou abandonner), **poids mort** (désinvestir).
- Portefeuille **équilibré** : des vaches à lait qui financent des vedettes et quelques dilemmes.
- **McKinsey** (GE) : attrait du marché × position concurrentielle (grille 3 × 3) ; plus riche (multicritère) mais plus subjective.
`,
    exercices: md`
### Exercice 2 — Construire une SWOT

Une PME marocaine d'huile d'olive présente : une huile primée à des concours internationaux ; un faible budget marketing ; une demande mondiale croissante de produits méditerranéens sains ; la concurrence de l'huile espagnole à bas prix ; une dépendance aux pluies ; un réseau de distribution limité au Maroc ; des accords commerciaux avec l'Union européenne.

1. Classez ces éléments dans la SWOT.
2. Proposez une orientation stratégique « forces + opportunités » et une orientation « faiblesses + menaces ».

<details><summary>Voir le corrigé</summary>

**1)**

| | |
|---|---|
| **Forces** : huile primée (qualité reconnue) | **Faiblesses** : faible budget marketing, distribution limitée, dépendance aux pluies |
| **Opportunités** : demande mondiale croissante, accords avec l'UE | **Menaces** : concurrence espagnole à bas prix, sécheresse |

**2)** Forces + opportunités : exporter vers l'UE un produit **premium** mettant en avant les prix obtenus. Faiblesses + menaces : ne pas se battre sur les prix face à l'Espagne ; sécuriser l'approvisionnement (irrigation, contrats avec plusieurs producteurs).

</details>
`,
    qcm: [
      { q: "Dans la SWOT, les faiblesses sont :", choix: ["Externes et négatives", "Internes et négatives", "Externes et positives", "Internes et positives"], bonne: 1, explication: "Elles relèvent de l'entreprise elle-même." },
      { q: "Une vache à lait dégage :", choix: ["Des flux de trésorerie fortement positifs", "Des flux négatifs", "Aucun flux", "Une forte croissance"], bonne: 0, explication: "Elle finance les autres DAS." },
      { q: "Un dilemme se caractérise par :", choix: ["Croissance faible, part forte", "Croissance forte, part faible", "Croissance forte, part forte", "Croissance faible, part faible"], bonne: 1, explication: "Il consomme des liquidités." },
      { q: "La matrice McKinsey croise :", choix: ["Croissance et part de marché", "Attrait du marché et position concurrentielle", "Forces et faiblesses", "Produits et marchés"], bonne: 1, explication: "Grille 3 × 3 multicritère." },
      { q: "Un portefeuille équilibré contient notamment :", choix: ["Uniquement des poids morts", "Des vaches à lait qui financent des vedettes", "Uniquement des dilemmes", "Un seul DAS"], bonne: 1, explication: "Pour financer la croissance future." },
    ],
  },

  6: {
    titre: "Les stratégies génériques (niveau business)",
    resume: md`
## L'essentiel — Stratégies génériques

- **Domination par les coûts** : être le producteur le moins cher (volume, économies d'échelle, effet d'expérience) ; risque : guerre des prix.
- **Différenciation** : offrir une valeur perçue unique justifiant un prix plus élevé ; risque : surcoût refusé par le client, imitation.
- **Focalisation** (niche) : coûts ou différenciation sur un segment étroit.
- **Enlisement** (stuck in the middle) : ni le moins cher, ni le plus différencié.
- **Effet d'expérience** : le coût unitaire baisse d'un pourcentage constant à chaque **doublement** de la production cumulée ($C_n = C_1 n^{-b}$).
- **Océan bleu** : créer un nouvel espace de marché (exclure, atténuer, renforcer, créer) plutôt que combattre dans l'océan rouge.
`,
    exercices: md`
### Exercice 2 — Effet d'expérience et choix stratégiques

1. Une usine a une courbe d'expérience de 80 % : le coût unitaire baisse de 20 % à chaque doublement de la production cumulée. La 1ʳᵉ unité a coûté 1 000 DH. Quel est le coût de la 2ᵉ, de la 4ᵉ et de la 8ᵉ unité ?
2. Identifiez la stratégie générique : a) une compagnie aérienne low-cost ; b) une marque de montres de luxe ; c) une marque de cosmétiques halal pour peaux sensibles ; d) une entreprise qui vend « un peu moins cher que les leaders avec une qualité moyenne ».

<details><summary>Voir le corrigé</summary>

**1)** 2ᵉ unité : $1\,000 \times 0{,}8 = 800$ DH ; 4ᵉ : $640$ DH ; 8ᵉ : $512$ DH.

**2)** a) **domination par les coûts** ; b) **différenciation** ; c) **focalisation** (niche par la différenciation) ; d) risque d'**enlisement dans la voie médiane**.

</details>
`,
    qcm: [
      { q: "La stratégie de différenciation consiste à :", choix: ["Avoir le coût le plus bas", "Offrir une valeur perçue unique justifiant un prix supérieur", "Viser tout le monde au même prix", "Réduire la qualité"], bonne: 1, explication: "Qualité, image, service, innovation." },
      { q: "L'effet d'expérience fonde surtout une stratégie :", choix: ["De différenciation", "De domination par les coûts", "D'océan bleu", "De niche"], bonne: 1, explication: "Produire plus pour produire moins cher." },
      { q: "Avec une courbe d'expérience de 90 %, si le coût passe de la 100ᵉ à la 200ᵉ unité, il :", choix: ["Baisse de 90 %", "Baisse de 10 %", "Augmente de 10 %", "Ne change pas"], bonne: 1, explication: "Chaque doublement le multiplie par 0,9." },
      { q: "« Stuck in the middle » signifie :", choix: ["Être leader des coûts", "Ne choisir clairement aucune stratégie générique", "Être sur une niche", "Innover"], bonne: 1, explication: "Ni le moins cher, ni le plus différencié." },
      { q: "La stratégie océan bleu vise à :", choix: ["Baisser les prix", "Créer un espace de marché sans concurrence directe", "Copier le leader", "Se retirer du marché"], bonne: 1, explication: "Rendre la concurrence non pertinente." },
    ],
  },

  7: {
    titre: "Les stratégies de croissance (niveau corporate)",
    resume: md`
## L'essentiel — Stratégies de croissance

- **Spécialisation** (un seul métier : expertise, effet d'expérience, mais risque de dépendance) ou **diversification** (répartition des risques, synergies, mais dispersion).
- **Intégration verticale amont** (fournisseurs), **aval** (distribution), **horizontale** (concurrents).
- **Externalisation** : confier à un tiers les activités non stratégiques.
- Modalités : croissance **interne** (organique), **externe** (fusion, acquisition), **conjointe** (alliance, joint-venture, franchise).
- **Internationalisation** : export → licence, franchise, partenariat → filiales. Stratégies **globale** (standardiser), **multidomestique** (adapter), **transnationale** (« glocalisation »).
`,
    exercices: md`
### Exercice 2 — Classer des décisions de croissance

Une chaîne marocaine de boulangeries industrielles envisage : a) racheter un moulin à farine ; b) racheter une chaîne de boulangeries concurrente ; c) ouvrir ses propres points de vente ; d) confier le nettoyage de ses usines à une entreprise spécialisée ; e) créer avec un groupe ivoirien une filiale commune à Abidjan ; f) lancer une activité de transport de voyageurs.

Qualifiez chaque décision.

<details><summary>Voir le corrigé</summary>

a) **intégration verticale amont** ; b) **intégration horizontale** (croissance externe) ; c) **intégration verticale aval** ; d) **externalisation** ; e) **croissance conjointe** par **joint-venture** et internationalisation ; f) **diversification** (conglomérale, sans lien avec le métier).

</details>
`,
    qcm: [
      { q: "Racheter un fournisseur, c'est une intégration :", choix: ["Horizontale", "Verticale amont", "Verticale aval", "Conglomérale"], bonne: 1, explication: "On remonte la filière." },
      { q: "Racheter un concurrent, c'est une intégration :", choix: ["Horizontale", "Verticale amont", "Verticale aval", "Externalisation"], bonne: 0, explication: "Même stade de la filière." },
      { q: "Une joint-venture est une forme de croissance :", choix: ["Interne", "Externe", "Conjointe", "Organique"], bonne: 2, explication: "Deux entreprises créent une filiale commune." },
      { q: "La stratégie transnationale consiste à :", choix: ["Tout standardiser", "Tout adapter à chaque pays", "Standardiser ce qui peut l'être et adapter le reste", "Ne pas s'internationaliser"], bonne: 2, explication: "On parle de « glocalisation »." },
      { q: "Un avantage de la spécialisation est :", choix: ["La répartition des risques", "L'effet d'expérience et l'image d'expert", "Les synergies entre métiers", "La réduction de la dépendance"], bonne: 1, explication: "Son risque est la dépendance à un seul marché." },
    ],
  },

  8: {
    titre: "Structures, culture et conduite du changement",
    resume: md`
## L'essentiel — Structures, culture, changement

- Structures : **fonctionnelle** (par fonctions ; cloisonnement), **divisionnelle** (par produits, marchés, zones ; redondances), **matricielle** (double rattachement ; conflits d'autorité).
- **Mintzberg** : cinq parties (centre opérationnel, sommet stratégique, ligne hiérarchique, technostructure, support) et cinq configurations : **simple** (supervision directe), **bureaucratie mécaniste** (standardisation des procédés), **bureaucratie professionnelle** (des qualifications), **divisionnalisée** (des résultats), **adhocratie** (ajustement mutuel).
- **Culture d'entreprise** : valeurs, rites, mythes, symboles ; levier ou frein au changement.
- **Lewin** : **décristallisation → mouvement → recristallisation**.
- Résistances : peur, perte d'avantages, habitudes ; leviers : communication, participation, formation, relais, accompagnement.
`,
    exercices: md`
### Exercice 2 — Configurations et conduite du changement

1. Quelle configuration de Mintzberg pour : a) un CHU ; b) une start-up de jeux vidéo ; c) une épicerie familiale ; d) un groupe présent dans le ciment, la banque et l'immobilier ; e) une administration fiscale ?
2. Une entreprise remplace ses registres papier par un ERP. Les comptables expérimentés s'y opposent. Proposez une action pour chaque phase du modèle de Lewin.

<details><summary>Voir le corrigé</summary>

**1)** a) **bureaucratie professionnelle** ; b) **adhocratie** ; c) **structure simple** ; d) **structure divisionnalisée** ; e) **bureaucratie mécaniste**.

**2)**

- **Décristallisation** : expliquer pourquoi le changement est nécessaire (erreurs, délais, obligations de dématérialisation) et écouter les craintes.
- **Mouvement** : former les comptables, les associer au paramétrage, désigner des utilisateurs relais, accompagner au quotidien.
- **Recristallisation** : supprimer l'ancien système, valoriser les réussites, adapter les procédures et les fiches de poste pour ancrer les nouvelles pratiques.

</details>
`,
    qcm: [
      { q: "Une structure matricielle se caractérise par :", choix: ["Un seul chef pour chacun", "Un double rattachement", "L'absence de hiérarchie", "Un découpage géographique"], bonne: 1, explication: "D'où des conflits d'autorité possibles." },
      { q: "L'adhocratie repose sur :", choix: ["La supervision directe", "L'ajustement mutuel", "La standardisation des procédés", "La standardisation des résultats"], bonne: 1, explication: "Typique des organisations innovantes." },
      { q: "Un hôpital est typiquement une :", choix: ["Structure simple", "Bureaucratie professionnelle", "Adhocratie", "Structure divisionnalisée"], bonne: 1, explication: "Coordination par la standardisation des qualifications." },
      { q: "La première phase du changement selon Lewin est :", choix: ["Le mouvement", "La recristallisation", "La décristallisation", "L'évaluation"], bonne: 2, explication: "Il faut d'abord « dégeler » les habitudes." },
      { q: "Un levier efficace contre la résistance au changement est :", choix: ["Imposer sans explication", "La participation des acteurs", "Le secret", "La sanction immédiate"], bonne: 1, explication: "Les acteurs impliqués adhèrent davantage." },
    ],
  },
};
