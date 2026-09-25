// Introduction aux sciences de gestion (S1) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Qu'est-ce que la gestion ?",
    description: "Gestion et management : définitions, organisation et ses caractéristiques, ressources, rôles du manager selon Mintzberg, compétences de Katz, cas corrigés.",
    resume: md`
## L'essentiel — Qu'est-ce que la gestion ?

- **Gestion** : combiner des ressources rares pour atteindre des objectifs dans un environnement incertain ; **management** : dimension humaine et stratégique.
- **Organisation** : buts communs, division du travail, coordination, permanence, frontière ; entreprises, établissements publics, associations, coopératives, administrations.
- Ressources : humaines, financières, matérielles, informationnelles, immatérielles.
- **Mintzberg** (1973) : 10 rôles en 3 familles : interpersonnels (symbole, leader, agent de liaison), informationnels (observateur actif, diffuseur, porte-parole), décisionnels (entrepreneur, régulateur, répartiteur de ressources, négociateur).
- **Katz** (1955) : compétences techniques, humaines, conceptuelles ; les conceptuelles pèsent plus au sommet.
- Discipline carrefour et science de l'action ; pas de solution universelle (contingence).
`,
    exercices: md`
### Exercice 2 — Organisation ou pas ?

Dites s'il s'agit d'une organisation et justifiez : 1) les supporters réunis dans un stade un soir de match ; 2) une coopérative laitière de 60 éleveurs ; 3) une commune rurale ; 4) un club de lecture qui se réunit chaque mois avec un bureau élu.

<details><summary>Voir le corrigé</summary>

1) Non : rassemblement ponctuel sans coordination ni permanence. 2) Oui : but commun (collecter et vendre le lait), division du travail, règles, permanence. 3) Oui : administration publique avec une mission de service public. 4) Oui : association avec un but, des règles, un bureau et une certaine permanence.

</details>

### Exercice 3 — Compétences selon le niveau

Classez par ordre d'importance les compétences de Katz pour : a) un chef d'équipe dans un centre d'appels ; b) le directeur général d'une banque. Justifiez.

<details><summary>Voir le corrigé</summary>

a) Techniques et humaines d'abord (maîtrise des outils et des scripts, animation de l'équipe), conceptuelles ensuite. b) Conceptuelles d'abord (stratégie, vision d'ensemble, environnement réglementaire), humaines ensuite (réseau, dirigeants), techniques en dernier. Plus le niveau est élevé, plus la vision d'ensemble compte.

</details>
`,
    qcm: [
      { q: "La gestion consiste principalement à :", choix: ["Produire des biens", "Combiner des ressources rares pour atteindre des objectifs", "Tenir la comptabilité", "Vendre"], bonne: 1, explication: "Dans un environnement incertain." },
      { q: "Le livre de Mintzberg sur le travail des managers date de :", choix: ["1916", "1973", "1911", "2001"], bonne: 1, explication: "The Nature of Managerial Work." },
      { q: "Négocier un contrat avec un grand client relève du rôle :", choix: ["Interpersonnel", "Informationnel", "Décisionnel", "Technique"], bonne: 2, explication: "Rôle de négociateur." },
      { q: "Le rôle de porte-parole appartient à la famille :", choix: ["Interpersonnelle", "Informationnelle", "Décisionnelle", "Conceptuelle"], bonne: 1, explication: "Il transmet l'information vers l'extérieur." },
      { q: "Selon Katz, au sommet de la hiérarchie dominent les compétences :", choix: ["Techniques", "Conceptuelles", "Manuelles", "Comptables"], bonne: 1, explication: "Vision d'ensemble de l'organisation." },
      { q: "Parmi ces éléments, lequel n'est pas une caractéristique d'une organisation ?", choix: ["Des buts communs", "La coordination", "La recherche obligatoire du profit", "La permanence"], bonne: 2, explication: "Associations et administrations ne recherchent pas le profit." },
      { q: "Une coopérative marocaine est régie par la loi :", choix: ["17-95", "112-12", "5-96", "9-88"], bonne: 1, explication: "Loi relative aux coopératives." },
      { q: "La marque et le savoir-faire sont des ressources :", choix: ["Financières", "Matérielles", "Immatérielles", "Humaines uniquement"], bonne: 2, explication: "Actifs incorporels." },
      { q: "Les sciences de gestion sont dites science de l'action car elles :", choix: ["Refusent la théorie", "Cherchent aussi à prescrire des méthodes", "Ne concernent que l'industrie", "Sont purement mathématiques"], bonne: 1, explication: "Elles visent l'amélioration du fonctionnement des organisations." },
      { q: "Arbitrer un budget entre deux services relève du rôle de :", choix: ["Symbole", "Répartiteur de ressources", "Diffuseur", "Agent de liaison"], bonne: 1, explication: "Rôle décisionnel." },
    ],
  },

  2: {
    titre: "L'entreprise : définition, finalités et classifications",
    description: "L'entreprise : approches économique, systémique et sociologique, finalités et objectifs SMART, classifications, formes juridiques au Maroc et cycle de vie.",
    resume: md`
## L'essentiel — L'entreprise

- Approche **économique** (unité de production), **systémique** (système ouvert et finalisé : pilotage, information, opérant), **sociologique** (groupe humain), **juridique** (la personnalité appartient au commerçant ou à la société).
- Finalité (raison d'être) → buts → **objectifs SMART** (chiffrés et datés) ; finalités économique, sociale, sociétale parfois contradictoires.
- Classifications : taille (TPE, PME, GE), secteur (primaire, secondaire, tertiaire), branche, filière, propriété (privée, publique, mixte, ESS).
- Formes marocaines : entreprise individuelle, auto-entrepreneur (114-13), SNC et SARL (5-96), SA (17-95), SAS (19-20), GIE (13-97), coopérative (112-12).
- Cycle de vie : création, croissance, maturité, déclin ou renouvellement ; croissance interne ou externe.
`,
    exercices: md`
### Exercice 2 — Secteur, branche, filière

Classez : 1) un producteur d'olives ; 2) une huilerie ; 3) un supermarché qui vend de l'huile ; 4) une banque. Puis expliquez ce que regroupe la « filière oléicole ».

<details><summary>Voir le corrigé</summary>

1) Primaire. 2) Secondaire. 3) Tertiaire. 4) Tertiaire. La filière oléicole regroupe toutes les étapes du produit : production d'olives, trituration, conditionnement, distribution, exportation, ainsi que les fournisseurs d'intrants et les services associés.

</details>

### Exercice 3 — Objectifs SMART

Transformez en objectifs SMART : a) « Nous voulons vendre plus » ; b) « Il faut réduire les accidents du travail » ; c) « Nous voulons être plus connus ».

<details><summary>Voir le corrigé</summary>

a) Augmenter le chiffre d'affaires de 8 % d'ici au 31 décembre de l'année prochaine. b) Diviser par deux le nombre d'accidents avec arrêt en 18 mois grâce à un plan de formation sécurité. c) Atteindre 30 % de notoriété assistée auprès des 18-35 ans de la région de Rabat en un an (mesurée par enquête).

</details>
`,
    qcm: [
      { q: "Dans l'approche systémique, l'entreprise est un système :", choix: ["Fermé et finalisé", "Ouvert et finalisé", "Fermé et aléatoire", "Ouvert sans but"], bonne: 1, explication: "Elle échange avec son environnement et poursuit des buts." },
      { q: "Juridiquement, la personnalité morale appartient :", choix: ["À l'entreprise en tant que telle", "À la société qui exploite l'entreprise", "Aux salariés", "Au directeur"], bonne: 1, explication: "L'entreprise est une réalité économique." },
      { q: "Un objectif SMART est notamment :", choix: ["Vague et ambitieux", "Mesurable et daté", "Secret", "Toujours financier"], bonne: 1, explication: "Spécifique, mesurable, atteignable, réaliste, temporellement défini." },
      { q: "Une huilerie appartient au secteur :", choix: ["Primaire", "Secondaire", "Tertiaire", "Quaternaire"], bonne: 1, explication: "Transformation." },
      { q: "La SARL est régie au Maroc par la loi :", choix: ["17-95", "5-96", "112-12", "13-97"], bonne: 1, explication: "Avec la SNC et les sociétés en commandite." },
      { q: "Le statut d'auto-entrepreneur est prévu par la loi :", choix: ["114-13", "19-20", "9-88", "31-08"], bonne: 0, explication: "Régime simplifié pour les très petites activités." },
      { q: "L'ensemble des étapes d'un produit, de la matière première au consommateur, est :", choix: ["Un secteur", "Une branche", "Une filière", "Un marché"], bonne: 2, explication: "Filière automobile, oléicole…" },
      { q: "La finalité sociétale de l'entreprise concerne :", choix: ["Le profit", "Les effets sur l'environnement et la société", "La trésorerie", "Le capital social"], bonne: 1, explication: "À distinguer de la finalité sociale (salariés)." },
      { q: "Une croissance par rachat d'un concurrent est une croissance :", choix: ["Interne", "Externe", "Organique", "Naturelle"], bonne: 1, explication: "Acquisition, fusion, alliance." },
      { q: "Dans le modèle de Le Moigne, le système qui décide est le système :", choix: ["Opérant", "D'information", "De pilotage", "Comptable"], bonne: 2, explication: "Il fixe les objectifs et régule." },
    ],
  },

  3: {
    titre: "L'environnement de l'entreprise",
    description: "L'environnement de l'entreprise : micro et macro-environnement, PESTEL avec exemples marocains, cinq forces de Porter, parties prenantes et matrice de Mendelow.",
    resume: md`
## L'essentiel — L'environnement

- Environnement : éléments extérieurs qui influencent l'entreprise ; source d'opportunités et de menaces.
- **Micro** (clients, fournisseurs, concurrents, banques) / **macro** (PESTEL : politique, économique, socioculturel, technologique, écologique, légal).
- **Porter** : rivalité, nouveaux entrants, substituts, pouvoir des clients, pouvoir des fournisseurs.
- **Parties prenantes** (Freeman, 1984) : internes, externes contractuelles, externes diffuses ; matrice pouvoir / intérêt de **Mendelow**.
- Réponses : s'adapter, anticiper (veille), influencer (lobbying, normes, innovation).
- Diagnostic externe + interne = **SWOT**.
`,
    exercices: md`
### Exercice 2 — Classer dans le PESTEL

Classez : 1) hausse du taux directeur ; 2) nouvelle loi sur la protection des données ; 3) vieillissement de la population ; 4) essor de l'intelligence artificielle ; 5) élections législatives ; 6) pénurie d'eau.

<details><summary>Voir le corrigé</summary>

1) Économique. 2) Légal. 3) Socioculturel (démographie). 4) Technologique. 5) Politique. 6) Écologique.

</details>

### Exercice 3 — Cinq forces dans la téléphonie mobile

Analysez rapidement les cinq forces pour le marché marocain de la téléphonie mobile.

<details><summary>Voir le corrigé</summary>

Rivalité : forte entre trois opérateurs, guerre des prix sur les forfaits. Nouveaux entrants : menace faible (licences, investissements lourds dans les réseaux). Substituts : applications d'appels et de messagerie sur Internet, qui réduisent les revenus de la voix. Clients : pouvoir modéré individuellement, mais portabilité du numéro et comparaison facile. Fournisseurs : équipementiers de réseau et fabricants de terminaux peu nombreux, pouvoir assez fort. Rôle de l'État : régulation par l'ANRT.

</details>
`,
    qcm: [
      { q: "Les fournisseurs appartiennent :", choix: ["Au macro-environnement", "Au micro-environnement", "À l'environnement interne", "À l'environnement légal"], bonne: 1, explication: "Relation directe avec l'entreprise." },
      { q: "Dans PESTEL, la lettre E finale désigne :", choix: ["Économique", "Écologique (environnemental)", "Éthique", "Européen"], bonne: 1, explication: "Le premier E est économique." },
      { q: "La loi 31-08 concerne :", choix: ["Les sociétés anonymes", "La protection du consommateur", "Les coopératives", "La comptabilité"], bonne: 1, explication: "Facteur légal." },
      { q: "Une partie prenante est, selon Freeman :", choix: ["Un actionnaire uniquement", "Tout acteur qui peut affecter ou être affecté par l'organisation", "Un salarié uniquement", "Un concurrent uniquement"], bonne: 1, explication: "Définition de 1984." },
      { q: "Une force de Porter n'est pas :", choix: ["La menace des substituts", "Le pouvoir des clients", "La motivation des salariés", "La rivalité"], bonne: 2, explication: "C'est un facteur interne." },
      { q: "Dans la matrice de Mendelow, un acteur à fort pouvoir et fort intérêt doit être :", choix: ["Ignoré", "Surveillé", "Associé (acteur clé)", "Seulement informé"], bonne: 2, explication: "Il peut bloquer ou soutenir le projet." },
      { q: "La veille technologique sert à :", choix: ["Influencer l'État", "Anticiper les évolutions techniques", "Calculer le résultat", "Recruter"], bonne: 1, explication: "Réponse d'anticipation." },
      { q: "Des barrières à l'entrée élevées rendent la menace des nouveaux entrants :", choix: ["Plus forte", "Plus faible", "Inchangée", "Nulle toujours"], bonne: 1, explication: "Capitaux, réglementation, marques." },
      { q: "Le stress hydrique relève du facteur :", choix: ["Politique", "Écologique", "Légal", "Technologique"], bonne: 1, explication: "Ressources naturelles et climat." },
      { q: "La matrice SWOT croise :", choix: ["Prix et quantités", "Forces-faiblesses et opportunités-menaces", "Pouvoir et intérêt", "Coûts et marges"], bonne: 1, explication: "Diagnostic interne et externe." },
    ],
  },

  4: {
    titre: "L'évolution de la pensée managériale",
    description: "Écoles de pensée en management : Taylor, Ford, Fayol, Weber, Mayo, Maslow, Herzberg, McGregor, Drucker, Simon, Crozier, contingence, avec cas corrigé.",
    resume: md`
## L'essentiel — La pensée managériale

- **Classiques** : Taylor (OST, 1911 : division verticale et horizontale, one best way, salaire au rendement) ; Ford (chaîne, standardisation) ; Fayol (1916 : 6 fonctions, POCCC, 14 principes, unité de commandement) ; Weber (bureaucratie, autorité rationnelle-légale).
- **Relations humaines** : Mayo (Hawthorne, groupe informel) ; Maslow (1943, pyramide) ; Herzberg (1959, hygiène / moteurs) ; McGregor (1960, X / Y) ; Likert (participation).
- **Néoclassiques** : Drucker (DPO, 1954), Sloan (décentralisation).
- **Décision et sociologie** : Simon (rationalité limitée, solution satisfaisante) ; Cyert et March (coalition) ; Crozier (zones d'incertitude, pouvoir).
- **Contingence** : pas de modèle unique ; Burns et Stalker (mécaniste / organique), Woodward (technologie), Lawrence et Lorsch (différenciation / intégration).
- Contemporain : toyotisme, lean, qualité totale, projets, agilité.
`,
    exercices: md`
### Exercice 2 — Qui a dit quoi ?

Attribuez chaque idée à un auteur : 1) un besoin satisfait cesse d'être motivant ; 2) prévoir, organiser, commander, coordonner, contrôler ; 3) le décideur se contente d'une solution satisfaisante ; 4) l'acteur tire son pouvoir des zones d'incertitude qu'il maîtrise ; 5) le salaire évite l'insatisfaction sans motiver ; 6) il faut séparer conception et exécution.

<details><summary>Voir le corrigé</summary>

1) Maslow. 2) Fayol. 3) Simon. 4) Crozier. 5) Herzberg. 6) Taylor.

</details>

### Exercice 3 — Structure mécaniste ou organique ?

Selon Burns et Stalker, quelle structure conseiller : a) une cimenterie sur un marché stable ; b) une start-up de logiciels ; c) une administration fiscale ; d) une agence de publicité ?

<details><summary>Voir le corrigé</summary>

a) Mécaniste (environnement stable, procédés standardisés). b) Organique (innovation, marché très changeant). c) Plutôt mécaniste (règles, égalité de traitement), avec des poches plus souples pour la transformation numérique. d) Organique (créativité, projets, clients variés).

</details>
`,
    qcm: [
      { q: "L'organisation scientifique du travail est due à :", choix: ["Fayol", "Taylor", "Mayo", "Weber"], bonne: 1, explication: "The Principles of Scientific Management, 1911." },
      { q: "Le principe d'unité de commandement est formulé par :", choix: ["Taylor", "Fayol", "Herzberg", "Drucker"], bonne: 1, explication: "Un agent ne reçoit d'ordres que d'un seul chef." },
      { q: "Les expériences de Hawthorne ont montré l'importance :", choix: ["Du salaire au rendement", "Du facteur humain et du groupe", "De la chaîne de montage", "Des règles écrites"], bonne: 1, explication: "École des relations humaines." },
      { q: "Selon Herzberg, le salaire est un facteur :", choix: ["Moteur", "D'hygiène", "D'accomplissement", "Sans effet"], bonne: 1, explication: "Il évite l'insatisfaction." },
      { q: "La théorie Y de McGregor considère que le salarié :", choix: ["Fuit le travail", "Peut s'impliquer et prendre des responsabilités", "Ne réagit qu'aux sanctions", "Doit être chronométré"], bonne: 1, explication: "À l'opposé de la théorie X." },
      { q: "La direction par objectifs est associée à :", choix: ["Drucker", "Weber", "Taylor", "Mayo"], bonne: 0, explication: "The Practice of Management, 1954." },
      { q: "La rationalité limitée est un concept de :", choix: ["Simon", "Ford", "Fayol", "Maslow"], bonne: 0, explication: "Administrative Behavior, 1947." },
      { q: "Pour Weber, la bureaucratie repose sur une autorité :", choix: ["Charismatique", "Traditionnelle", "Rationnelle-légale", "Familiale"], bonne: 2, explication: "Règles impersonnelles et compétence." },
      { q: "La théorie de la contingence affirme que :", choix: ["Il existe une structure idéale", "L'organisation efficace dépend de la situation", "Seul le salaire motive", "La hiérarchie est inutile"], bonne: 1, explication: "Pas de one best way organisationnel." },
      { q: "Selon Burns et Stalker, un environnement instable appelle une structure :", choix: ["Mécaniste", "Organique", "Bureaucratique", "Taylorienne"], bonne: 1, explication: "Souple et peu formalisée." },
    ],
  },

  5: {
    titre: "Les grandes fonctions de l'entreprise",
    description: "Fonctions de l'entreprise : approvisionnement, production, marketing, GRH, finance, chaîne de valeur de Porter, point de commande et externalisation, avec cas.",
    resume: md`
## L'essentiel — Les fonctions de l'entreprise

- Fayol : 6 fonctions (technique, commerciale, financière, sécurité, comptable, administrative) ; aujourd'hui : approvisionnement, production, marketing, RH, finance, R&D, SI.
- Approvisionnement : achats + stocks ; point de commande = consommation journalière × délai + stock de sécurité.
- Production : unitaire, par lots, de masse, en continu ; flux poussés / tirés (juste-à-temps) ; qualité, maintenance.
- Marketing : 4P ; RH : compétences, Code du travail ; finance : investir, financer, trésorerie.
- Fonctions interdépendantes et parfois en conflit : coordination par la direction, les budgets, l'ERP.
- **Chaîne de valeur** (Porter, 1985) : 5 activités principales + 4 de soutien ; marge.
- Externalisation : seuil Q* = CF / (p − cv) + critères stratégiques et qualitatifs.
`,
    exercices: md`
### Exercice 2 — Point de commande

Un supermarché vend 120 packs d'eau par jour ; le délai de livraison est de 3 jours ; le stock de sécurité correspond à 2 jours de ventes. Calculez le point de commande. Que se passe-t-il si le délai passe à 5 jours ?

<details><summary>Voir le corrigé</summary>

Stock de sécurité $= 240$ ; point de commande $= 120 \times 3 + 240 = \mathbf{600}$ packs. Avec 5 jours : $120 \times 5 + 240 = \mathbf{840}$ packs : il faut commander plus tôt, sinon rupture.

</details>

### Exercice 3 — Conflits entre fonctions

Pour chaque paire, indiquez le conflit typique : a) commercial et production ; b) finance et approvisionnement ; c) RH et finance.

<details><summary>Voir le corrigé</summary>

a) Le commercial veut des produits variés et livrés vite ; la production veut des séries longues et stables. b) La finance veut réduire les stocks et payer tard ; les acheteurs veulent des stocks de sécurité et profiter de remises sur quantités. c) Les RH veulent former et augmenter les salaires pour fidéliser ; la finance cherche à contenir la masse salariale.

</details>
`,
    qcm: [
      { q: "Le point de commande est égal à :", choix: ["Stock de sécurité seul", "Consommation journalière × délai + stock de sécurité", "Quantité annuelle / 12", "Stock maximal"], bonne: 1, explication: "Niveau qui déclenche la commande." },
      { q: "La production en flux tirés consiste à :", choix: ["Produire pour stocker", "Produire à la demande", "Produire en continu", "Externaliser"], bonne: 1, explication: "Juste-à-temps." },
      { q: "Une cimenterie pratique une production :", choix: ["Unitaire", "Par lots", "En continu", "Artisanale"], bonne: 2, explication: "Flux ininterrompu." },
      { q: "Dans la chaîne de valeur, les achats sont une activité :", choix: ["Principale", "De soutien", "Inutile", "Commerciale"], bonne: 1, explication: "Approvisionnements." },
      { q: "Le service après-vente est, selon Porter, une activité :", choix: ["Principale", "De soutien", "D'infrastructure", "Financière"], bonne: 0, explication: "Services." },
      { q: "Les 4P du marketing sont :", choix: ["Prix, produit, distribution, communication", "Plan, personnel, profit, pouvoir", "Production, prix, paie, publicité", "Prévoir, piloter, produire, payer"], bonne: 0, explication: "Product, price, place, promotion." },
      { q: "Coûts fixes 60 000, coût variable 10, prix d'achat 14. Le seuil de fabrication est :", choix: ["4 286", "15 000", "6 000", "10 000"], bonne: 1, explication: "60 000 / (14 − 10)." },
      { q: "La décision de financement relève de la fonction :", choix: ["Marketing", "Finance", "Production", "Approvisionnement"], bonne: 1, explication: "Capitaux propres, emprunts, crédit-bail." },
      { q: "Un risque de l'externalisation est :", choix: ["La baisse des coûts fixes", "La dépendance envers le prestataire", "La hausse de flexibilité", "L'accès à une expertise"], bonne: 1, explication: "Et la perte de savoir-faire." },
      { q: "La fonction qui prévoit les compétences et recrute est la fonction :", choix: ["Finance", "Ressources humaines", "Production", "Logistique"], bonne: 1, explication: "Elle applique aussi le Code du travail." },
    ],
  },

  6: {
    titre: "Le processus de management et la décision",
    description: "Processus de management PODC, styles de direction, niveaux de décision d'Ansoff, modèle IMC de Simon et critères de décision (Wald, Laplace, Savage, Hurwicz).",
    resume: md`
## L'essentiel — Management et décision

- **PODC** : planifier, organiser, diriger, contrôler ; une boucle héritée du POCCC de Fayol.
- Planification stratégique, tactique, opérationnelle ; objectifs SMART ; délégation.
- Styles de Lewin : autoritaire, démocratique, laisser-faire ; approche situationnelle.
- Contrôle : norme, mesure, écart, action corrective ; a priori, concomitant, a posteriori.
- Décisions : stratégiques, tactiques, opérationnelles (Ansoff) ; programmées / non programmées (Simon) ; avenir certain, risqué, incertain.
- **IMC** : intelligence, modélisation, choix, puis évaluation ; rationalité limitée.
- Critères : espérance, maximax, Wald (maximin), Laplace, Savage (regrets par colonne), Hurwicz.
`,
    exercices: md`
### Exercice 2 — Classer les décisions

Classez selon Ansoff : 1) ouvrir une filiale au Sénégal ; 2) fixer le planning des équipes de la semaine ; 3) choisir un nouveau logiciel de paie ; 4) réapprovisionner un article ; 5) racheter un concurrent.

<details><summary>Voir le corrigé</summary>

1) Stratégique. 2) Opérationnelle. 3) Tactique (organisation des ressources, horizon moyen). 4) Opérationnelle (et programmée). 5) Stratégique.

</details>

### Exercice 3 — Matrice de décision

Gains (kDH) : S1 : 200 ; 80 ; −40. S2 : 120 ; 100 ; 30. S3 : 60 ; 60 ; 60. Appliquez Wald, maximax, Laplace et Savage.

<details><summary>Voir le corrigé</summary>

Wald : minimums −40 ; 30 ; 60 : **S3**. Maximax : **S1** (200). Laplace : S1 80 ; S2 83,3 ; S3 60 : **S2**. Savage (meilleurs gains 200 ; 100 ; 60) : regrets S1 : 0, 20, 100 (max 100) ; S2 : 80, 0, 30 (max 80) ; S3 : 140, 40, 0 (max 140) : **S2**.

</details>
`,
    qcm: [
      { q: "Le sigle PODC signifie :", choix: ["Produire, organiser, décider, compter", "Planifier, organiser, diriger, contrôler", "Prévoir, ordonner, déléguer, coordonner", "Piloter, observer, décider, communiquer"], bonne: 1, explication: "Hérité du POCCC de Fayol." },
      { q: "Selon Ansoff, une décision d'entrée sur un nouveau marché est :", choix: ["Opérationnelle", "Tactique", "Stratégique", "Programmée"], bonne: 2, explication: "Relation avec l'environnement, long terme." },
      { q: "Dans le modèle IMC, la lettre I désigne :", choix: ["L'information", "L'intelligence (diagnostic)", "L'investissement", "L'innovation"], bonne: 1, explication: "Percevoir et analyser le problème." },
      { q: "Le critère de Wald conduit à choisir la stratégie :", choix: ["Au meilleur gain maximal", "Au meilleur gain minimal", "À la meilleure moyenne", "Au regret minimal"], bonne: 1, explication: "Critère prudent (maximin)." },
      { q: "Le regret de Savage se calcule :", choix: ["Par ligne", "Par rapport au meilleur gain de chaque colonne", "Avec les probabilités", "Sur le total"], bonne: 1, explication: "Manque à gagner par état de la nature." },
      { q: "Une situation où les probabilités sont connues est dite :", choix: ["Certaine", "Risquée", "Incertaine", "Aléatoire pure"], bonne: 1, explication: "On peut calculer une espérance." },
      { q: "Le style de direction qui consulte et associe l'équipe est :", choix: ["Autoritaire", "Démocratique", "Laisser-faire", "Bureaucratique"], bonne: 1, explication: "Lewin, 1939." },
      { q: "Une décision de réapprovisionnement automatique est :", choix: ["Non programmée", "Programmée", "Stratégique", "Incertaine"], bonne: 1, explication: "Répétitive, traitée par une règle." },
      { q: "Gains 100 et 0, probabilités 0,3 et 0,7. L'espérance est :", choix: ["50", "30", "70", "100"], bonne: 1, explication: "0,3 × 100." },
      { q: "Le contrôle consiste notamment à :", choix: ["Fixer seul les salaires", "Mesurer les écarts et corriger", "Recruter", "Choisir la forme juridique"], bonne: 1, explication: "Boucle de rétroaction." },
    ],
  },

  7: {
    titre: "Les structures organisationnelles",
    description: "Structures organisationnelles : hiérarchique, fonctionnelle, staff and line, divisionnelle, matricielle, composantes et configurations de Mintzberg.",
    resume: md`
## L'essentiel — Les structures

- Structure : répartition du travail + coordination (Mintzberg) ; organigramme.
- Paramètres : spécialisation, coordination, centralisation, formalisation, éventail de subordination (structure haute ou plate).
- Types : hiérarchique (Fayol), fonctionnelle (Taylor), staff and line, par fonctions, divisionnelle, matricielle, projet, réseau.
- **5 composantes** : sommet stratégique, ligne hiérarchique, centre opérationnel, technostructure, support logistique.
- **6 mécanismes** : ajustement mutuel, supervision directe, standardisation des procédés, des résultats, des qualifications, des normes.
- **Configurations** : entrepreneuriale, mécaniste, professionnelle, divisionnalisée, innovatrice, missionnaire.
- Contingence : âge, taille, technologie, environnement, pouvoir.
`,
    exercices: md`
### Exercice 2 — Identifier la configuration

Associez une configuration : 1) CHU ; 2) atelier de confection de 1 500 ouvrières ; 3) start-up de 12 ingénieurs travaillant par projets ; 4) conglomérat présent dans l'immobilier, l'agroalimentaire et l'assurance ; 5) boulangerie tenue par son fondateur avec 6 employés.

<details><summary>Voir le corrigé</summary>

1) Professionnelle. 2) Mécaniste. 3) Innovatrice (adhocratie). 4) Divisionnalisée. 5) Entrepreneuriale.

</details>

### Exercice 3 — Structure matricielle

Une société d'ingénierie mène des projets de construction pour plusieurs clients. Chaque ingénieur dépend d'un chef de département (génie civil, électricité) et d'un chef de projet. Présentez deux avantages, deux risques et un moyen de limiter ces risques.

<details><summary>Voir le corrigé</summary>

Avantages : mobilisation souple des compétences sur chaque projet ; maintien d'un haut niveau d'expertise dans les départements. Risques : ordres contradictoires (double hiérarchie), conflits de priorité entre projets. Moyen : définir clairement les rôles (le chef de projet fixe le quoi et le quand, le chef de département le comment et l'affectation des personnes) et prévoir un comité d'arbitrage.

</details>
`,
    qcm: [
      { q: "La structure où chaque salarié n'a qu'un seul chef est :", choix: ["Fonctionnelle", "Hiérarchique", "Matricielle", "En réseau"], bonne: 1, explication: "Principe d'unité de commandement." },
      { q: "Dans une structure staff and line, le staff :", choix: ["Commande les opérationnels", "Conseille sans pouvoir hiérarchique", "Produit les biens", "Représente les actionnaires"], bonne: 1, explication: "Services d'experts." },
      { q: "La structure matricielle se caractérise par :", choix: ["Un seul chef", "Un double rattachement", "L'absence de hiérarchie", "Des divisions autonomes seulement"], bonne: 1, explication: "Fonction et projet." },
      { q: "Chez Mintzberg, le contrôle de gestion appartient :", choix: ["Au support logistique", "À la technostructure", "Au centre opérationnel", "Au sommet stratégique"], bonne: 1, explication: "Il standardise les résultats." },
      { q: "Le mécanisme de coordination dominant d'un hôpital est :", choix: ["La supervision directe", "La standardisation des qualifications", "La standardisation des procédés", "L'ajustement mutuel seul"], bonne: 1, explication: "Configuration professionnelle." },
      { q: "Un éventail de subordination large donne une structure :", choix: ["Haute", "Plate", "Matricielle", "Divisionnelle"], bonne: 1, explication: "Peu de niveaux hiérarchiques." },
      { q: "La configuration divisionnalisée repose sur la standardisation :", choix: ["Des résultats", "Des normes", "Des qualifications", "Des procédés"], bonne: 0, explication: "Objectifs fixés à chaque division." },
      { q: "Un inconvénient de la structure divisionnelle est :", choix: ["L'absence de responsabilité", "Les doublons de fonctions", "L'impossibilité de mesurer les résultats", "L'unité de commandement"], bonne: 1, explication: "Chaque division a ses propres fonctions." },
      { q: "L'ajustement mutuel est typique :", choix: ["De la bureaucratie mécaniste", "De l'adhocratie", "De la chaîne de montage", "De l'administration fiscale"], bonne: 1, explication: "Communication directe entre experts." },
      { q: "Le service juridique d'une entreprise fait partie :", choix: ["Du centre opérationnel", "Du support logistique", "De la ligne hiérarchique", "De la technostructure"], bonne: 1, explication: "Service de soutien." },
    ],
  },

  8: {
    titre: "Performance, création de valeur et RSE",
    description: "Performance de l'entreprise : efficacité, efficience, productivité, valeur ajoutée et sa répartition, balanced scorecard, RSE et ISO 26000 au Maroc.",
    resume: md`
## L'essentiel — Performance et RSE

- **Efficacité** = résultat / objectif ; **efficience** = résultat / moyens ; économie des moyens.
- Productivité = production / facteur ; rentabilité économique = RE / capitaux investis ; financière = RN / capitaux propres.
- **VA** = production − consommations intermédiaires ; répartie entre personnel, État, prêteurs, associés, entreprise.
- Performance multidimensionnelle ; **balanced scorecard** (Kaplan et Norton, 1992) : apprentissage, processus, clients, finances.
- Valeur actionnariale / partenariale.
- **RSE** : effets sur la société et l'environnement ; triple performance ; **ISO 26000** (2010, 7 questions centrales, non certifiable) ; Maroc : Label RSE CGEM, loi-cadre 99-12, informations ESG des sociétés cotées ; risque de greenwashing.
`,
    exercices: md`
### Exercice 2 — Efficace ou efficient ?

Une agence visait 1 200 nouveaux clients avec un budget de 600 000 DH. Cas a) 1 200 clients pour 750 000 DH ; cas b) 1 000 clients pour 450 000 DH. Qualifiez chaque cas.

<details><summary>Voir le corrigé</summary>

Coût prévu par client : 500 DH. a) Efficacité 100 %, coût 625 DH par client : **efficace mais peu efficient**. b) Efficacité 83,3 %, coût 450 DH par client : **efficient mais pas efficace**.

</details>

### Exercice 3 — Valeur ajoutée

Une entreprise réalise une production de 5 000 000 DH ; elle achète pour 2 100 000 DH de matières, 300 000 DH d'énergie et 400 000 DH de services extérieurs ; elle verse 1 500 000 DH de salaires. Calculez la valeur ajoutée et la part du personnel.

<details><summary>Voir le corrigé</summary>

$VA = 5\,000\,000 - (2\,100\,000 + 300\,000 + 400\,000) = \mathbf{2\,200\,000}$ DH. Part du personnel $= 1\,500\,000 / 2\,200\,000 \approx \mathbf{68{,}2\,\%}$. Les salaires ne sont pas des consommations intermédiaires.

</details>
`,
    qcm: [
      { q: "L'efficacité rapporte le résultat :", choix: ["Aux moyens", "À l'objectif", "Au chiffre d'affaires", "Aux capitaux propres"], bonne: 1, explication: "Degré d'atteinte de l'objectif." },
      { q: "L'efficience rapporte le résultat :", choix: ["À l'objectif", "Aux moyens consommés", "Au marché", "Aux concurrents"], bonne: 1, explication: "Bonne utilisation des ressources." },
      { q: "La valeur ajoutée est égale à :", choix: ["Chiffre d'affaires − salaires", "Production − consommations intermédiaires", "Résultat net + impôts", "Ventes − achats de marchandises"], bonne: 1, explication: "Richesse créée par l'entreprise." },
      { q: "Les intérêts versés aux banques rémunèrent :", choix: ["Le personnel", "Les prêteurs", "L'État", "Les associés"], bonne: 1, explication: "Répartition de la VA." },
      { q: "La rentabilité financière rapporte le résultat net :", choix: ["Au chiffre d'affaires", "Aux capitaux propres", "À l'effectif", "Aux dettes"], bonne: 1, explication: "Point de vue des associés." },
      { q: "Le balanced scorecard comprend l'axe :", choix: ["Fiscal", "Clients", "Juridique", "Immobilier"], bonne: 1, explication: "Avec finances, processus internes, apprentissage." },
      { q: "La norme ISO 26000 est :", choix: ["Une norme de certification", "Un ensemble de lignes directrices sur la responsabilité sociétale", "Une norme comptable", "Une norme de qualité produit"], bonne: 1, explication: "Elle n'est pas certifiable." },
      { q: "Au Maroc, le Label RSE est décerné par :", choix: ["Bank Al-Maghrib", "La CGEM", "L'OMPIC", "La DGI"], bonne: 1, explication: "Confédération générale des entreprises du Maroc." },
      { q: "Le greenwashing consiste à :", choix: ["Réduire ses émissions", "Communiquer sur des engagements écologiques non tenus", "Recycler l'eau", "Publier un rapport ESG vérifié"], bonne: 1, explication: "Écoblanchiment." },
      { q: "Production 460 000 unités pour 23 000 heures. La productivité horaire est :", choix: ["20", "18", "23", "46"], bonne: 0, explication: "460 000 / 23 000." },
    ],
  },
};

export default chapitres;
