// Marketing (S4) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Introduction au marketing",
    description: "Définition du marketing, besoin, désir, valeur et satisfaction, optiques de gestion, démarche marketing, marketing stratégique et opérationnel, cas corrigé.",
    resume: md`
## L'essentiel — Introduction au marketing

- Le marketing crée de la **valeur** pour les clients et construit des **relations** durables, afin d'obtenir de la valeur en retour ; il ne se réduit ni à la publicité ni à la vente.
- **Besoin** (manque) → **désir** (forme culturelle) → **demande** (désir solvable) ; **valeur perçue** = bénéfices − coûts ; **satisfaction** = performance perçue comparée aux attentes.
- Optiques : production → produit (**myopie marketing**) → vente → **marketing** → marketing sociétal et responsable.
- Champs : B2C, B2B, services (**7P** : + personnel, processus, preuve physique), public, international.
- Démarche : **analyser** → **choisir** (cibles, positionnement) → **agir** (4P : produit, prix, place, promotion) → **contrôler**.
- **Stratégique** (long terme : marchés, cibles, positionnement) / **opérationnel** (court terme : mix).
- Maroc : commerce de proximité, grande distribution et e-commerce ; saisonnalité (Ramadan, Aïd, été) ; lois 31-08, 104-12, 09-08, 17-97.
`,
    exercices: md`
### Exercice 2 — Besoins, désirs et demande

Pour chaque situation, identifiez le besoin, le désir et dites s'il y a demande :
1. Un étudiant de Kénitra veut se rendre à la faculté ; il rêve d'une moto électrique mais n'a que 300 DH d'économies.
2. Une famille de Tanger veut partir en vacances et réserve un séjour de 4 000 DH à Agadir.
3. Une PME veut sécuriser ses données et compare des offres de stockage en ligne.

<details><summary>Voir le corrigé</summary>

1. Besoin : **se déplacer** ; désir : une moto électrique ; **pas de demande** (pouvoir d'achat insuffisant) : une offre de location, de crédit ou d'abonnement de transport pourrait transformer le désir en demande.
2. Besoin : **détente, loisir** ; désir : un séjour balnéaire à Agadir ; **demande** effective (réservation payée).
3. Besoin : **sécurité** (continuité de l'activité) ; désir : une solution de stockage en ligne ; demande **B2B** en cours de formation (phase de comparaison des offres).

</details>

### Exercice 3 — Les 7P d'une banque

Une banque marocaine veut améliorer l'expérience de ses clients jeunes. Proposez une action pour chacun des 7P du marketing des services.

<details><summary>Voir le corrigé</summary>

| Variable | Action proposée |
|---|---|
| Produit | Compte jeune sans frais avec carte de paiement en ligne |
| Prix | Gratuité jusqu'à 25 ans, puis tarif réduit |
| Place (distribution) | Ouverture de compte 100 % sur application mobile, agences près des universités |
| Promotion | Campagne sur les réseaux sociaux, partenariats avec des associations étudiantes |
| Personnel | Conseillers formés aux besoins des jeunes, disponibles par messagerie |
| Processus | Ouverture de compte en moins de 15 minutes, signature électronique |
| Preuve physique | Application claire et moderne, espaces d'agence conviviaux, confirmation écrite de chaque opération |

</details>
`,
    qcm: [
      { q: "Le marketing consiste avant tout à :", choix: ["Faire de la publicité", "Partir des besoins des clients pour créer de la valeur", "Vendre le plus possible", "Réduire les coûts"], bonne: 1, explication: "La publicité et la vente ne sont que des outils." },
      { q: "Un désir soutenu par un pouvoir d'achat est :", choix: ["Un besoin", "Une demande", "Une offre", "Une valeur"], bonne: 1, explication: "La demande est solvable." },
      { q: "La « myopie marketing » caractérise l'optique :", choix: ["Marketing", "Produit", "Sociétale", "Relationnelle"], bonne: 1, explication: "L'entreprise aime son produit plus que ses clients." },
      { q: "L'optique vente consiste à :", choix: ["Adapter l'offre aux besoins", "Pousser les produits existants par des techniques de vente", "Produire au moindre coût", "Protéger l'environnement"], bonne: 1, explication: "Elle apparaît quand l'offre dépasse la demande." },
      { q: "Les 4P sont :", choix: ["Produit, prix, place, promotion", "Prix, personnel, processus, preuve", "Plan, projet, produit, prix", "Publicité, presse, promotion, prix"], bonne: 0, explication: "Le marketing mix de McCarthy." },
      { q: "Le marketing des services ajoute aux 4P :", choix: ["Le personnel, le processus et la preuve physique", "La publicité, la presse et le packaging", "Le profit, la productivité et la performance", "Le partenariat, le pays et la politique"], bonne: 0, explication: "On parle des 7P." },
      { q: "Le choix des segments cibles relève du marketing :", choix: ["Opérationnel", "Stratégique", "Direct", "Événementiel"], bonne: 1, explication: "C'est une décision de moyen et long terme." },
      { q: "La valeur perçue par le client est :", choix: ["Le prix de vente", "La différence entre bénéfices perçus et coûts supportés", "Le coût de revient", "La marge du distributeur"], bonne: 1, explication: "Les coûts incluent prix, temps et effort." },
      { q: "Au Maroc, la protection des données personnelles des clients est contrôlée par :", choix: ["L'OMPIC", "La CNDP", "Le Conseil de la concurrence", "La HACA"], bonne: 1, explication: "Loi 09-08." },
      { q: "La loi 31-08 porte sur :", choix: ["La propriété industrielle", "La protection du consommateur", "La fiscalité des entreprises", "Le droit du travail"], bonne: 1, explication: "Information, publicité trompeuse, clauses abusives." },
    ],
  },

  2: {
    titre: "L'étude de marché et le comportement du consommateur",
    description: "Marché, parts de marché, pénétration, études documentaires, qualitatives et quantitatives, questionnaire, processus d'achat et influences, cas corrigés.",
    resume: md`
## L'essentiel — Étude de marché et comportement du consommateur

- Niveaux de marché : **principal**, **environnant**, **générique**, **support**.
- $PDM = $ ventes de l'entreprise / ventes du marché (volume ou valeur) ; **PDM relative** = PDM / PDM du principal concurrent (> 1 pour le leader seul).
- Pénétration ; consommateurs actuels, **non-consommateurs relatifs** (cible de la demande primaire) et absolus ; demande **primaire** et **sélective**.
- Études **documentaires**, **qualitatives** (comprendre : entretiens, focus groups), **quantitatives** (mesurer : questionnaire, échantillon représentatif), panels, tests.
- Étapes : problème → méthodologie → outils → collecte → analyse → recommandations ; questionnaire court, neutre, testé.
- Processus d'achat : besoin → information → évaluation → décision → post-achat (**dissonance cognitive**).
- Influences : culturelles, sociales (influenceurs), personnelles, psychologiques (Maslow) ; motivations et freins.
- Rôles : initiateur, prescripteur, influenceur, décideur, acheteur, utilisateur ; centre d'achat en B2B.
`,
    exercices: md`
### Exercice 2 — Parts de marché en volume et en valeur

Sur un marché de l'huile d'olive conditionnée, on relève :

| Marque | Volume (millions de litres) | Prix moyen (DH/litre) |
|---|---:|---:|
| A | 12 | 60 |
| B | 8 | 80 |
| C | 5 | 50 |

1. Calculez les parts de marché en volume et en valeur de chaque marque.
2. Qui est leader ? Commentez.

<details><summary>Voir le corrigé</summary>

**1)** Volume total : 25 millions de litres ; valeur totale : $720 + 640 + 250 = 1\,610$ millions de DH.

| Marque | PDM volume | Valeur (MDH) | PDM valeur |
|---|---:|---:|---:|
| A | 48 % | 720 | 44,7 % |
| B | 32 % | 640 | 39,8 % |
| C | 20 % | 250 | 15,5 % |

**2)** A est leader en volume et en valeur. B, positionnée plus haut de gamme (80 DH/litre), a une part en valeur nettement supérieure à sa part en volume : son chiffre d'affaires est proche de celui de A avec un tiers de litres en moins.

</details>

### Exercice 3 — Processus d'achat d'un smartphone

Une étudiante de Rabat veut acheter un smartphone d'environ 3 000 DH.

1. Décrivez les cinq étapes de son processus de décision.
2. Pour chaque étape, proposez une action à une marque de smartphones.
3. Quels facteurs d'influence risquent de peser le plus ?

<details><summary>Voir le corrigé</summary>

| Étape | Comportement probable | Action de la marque |
|---|---|---|
| Besoin | Téléphone lent, batterie usée | Publicité sur l'autonomie et la rapidité |
| Information | Vidéos de tests, avis en ligne, amies | Tests par des influenceurs technologiques, fiches comparatives |
| Évaluation | Critères : appareil photo, batterie, prix, stockage | Mettre en avant un avantage distinctif (photo de nuit) |
| Décision | Achat en ligne ou en boutique, paiement en plusieurs fois | Paiement échelonné, livraison rapide |
| Post-achat | Doute éventuel (dissonance) | Garantie, tutoriels, service client réactif |

**3)** Facteurs **sociaux** (amies, influenceurs), **personnels** (budget d'étudiante, style de vie connecté) et **psychologiques** (image de soi, attitude envers les marques).

</details>
`,
    qcm: [
      { q: "Les sodas font partie, pour une marque de jus d'orange, du marché :", choix: ["Principal", "Environnant", "Support", "Générique uniquement"], bonne: 1, explication: "Produits différents répondant au même besoin." },
      { q: "Ventes de l'entreprise 30 MDH, marché 200 MDH. La PDM vaut :", choix: ["30 %", "15 %", "6,7 %", "20 %"], bonne: 1, explication: "30 / 200." },
      { q: "Une PDM relative supérieure à 1 signifie que l'entreprise est :", choix: ["Challenger", "Leader", "Suiveuse", "Absente du marché"], bonne: 1, explication: "Sa part dépasse celle de son principal concurrent." },
      { q: "Les non-consommateurs relatifs sont des personnes qui :", choix: ["Ne consommeront jamais le produit", "Pourraient consommer le produit", "Consomment déjà la marque", "Sont des concurrents"], bonne: 1, explication: "Ils constituent un potentiel de croissance." },
      { q: "Une réunion de groupe (focus group) relève d'une étude :", choix: ["Quantitative", "Qualitative", "Documentaire", "Comptable"], bonne: 1, explication: "Elle sert à comprendre les motivations et les freins." },
      { q: "Pour mesurer la proportion de clients satisfaits, on utilise une étude :", choix: ["Qualitative", "Quantitative", "Projective", "Documentaire interne seulement"], bonne: 1, explication: "Questionnaire sur un échantillon représentatif." },
      { q: "Le doute ressenti après un achat important s'appelle :", choix: ["La dissonance cognitive", "L'effet de démonstration", "La myopie marketing", "La cannibalisation"], bonne: 0, explication: "Le service après-vente aide à le réduire." },
      { q: "Selon Maslow, le besoin d'estime se situe :", choix: ["À la base de la pyramide", "Au-dessus du besoin d'appartenance", "Au sommet", "Au même niveau que la sécurité"], bonne: 1, explication: "Physiologique, sécurité, appartenance, estime, accomplissement." },
      { q: "Le médecin qui recommande un médicament joue le rôle de :", choix: ["Acheteur", "Prescripteur", "Utilisateur", "Décideur final"], bonne: 1, explication: "Il oriente fortement le choix." },
      { q: "Une question orientée dans un questionnaire provoque :", choix: ["Une meilleure représentativité", "Un biais de réponse", "Une réduction des coûts", "Une étude qualitative"], bonne: 1, explication: "Elle suggère la réponse attendue." },
    ],
  },

  3: {
    titre: "Segmentation, ciblage et positionnement",
    description: "Démarche STP : critères de segmentation, qualités d'un segment, grille d'attractivité, stratégies de ciblage, positionnement et carte perceptuelle.",
    resume: md`
## L'essentiel — Segmentation, ciblage, positionnement

- **STP** : segmenter → cibler → positionner.
- Segment : groupe **homogène** à l'intérieur, **différent** des autres.
- Critères B2C : **géographiques**, **sociodémographiques**, **psychographiques** (styles de vie), **comportementaux** (avantages recherchés, usage, fidélité, occasions) ; B2B : secteur, taille, mode d'achat.
- Bon segment : mesurable, accessible, substantiel, différencié, opérationnel.
- Ciblage par **grille pondérée** (attractivité et adéquation aux ressources) ; stratégies **indifférenciée**, **différenciée**, **concentrée** (niche), **personnalisée**.
- **Positionnement** = identification (univers de référence) + différenciation ; simple, pertinent, crédible, distinctif, durable.
- **Carte perceptuelle** construite à partir des perceptions des clients ; repositionnement long et coûteux.
- Le positionnement impose la **cohérence** du marketing mix.
`,
    exercices: md`
### Exercice 2 — Choisir les critères de segmentation

Proposez deux critères de segmentation pertinents pour chaque marché et justifiez :
1. Les forfaits de téléphonie mobile.
2. Les voitures neuves.
3. Les logiciels de comptabilité (B2B).
4. Les séjours touristiques à Marrakech.

<details><summary>Voir le corrigé</summary>

1. **Âge** (jeunes gros consommateurs de données) et **intensité d'usage** (appels, internet, international).
2. **Revenu** et **étape du cycle de vie** (jeune actif, famille avec enfants), éventuellement avantages recherchés (économie, prestige, sécurité).
3. **Taille de l'entreprise** (TPE, PME, grande entreprise) et **secteur** (commerce, industrie, cabinets comptables), qui déterminent les fonctionnalités nécessaires.
4. **Origine géographique** (marocains, européens, pays du Golfe) et **motif du séjour** (culture, détente, affaires, événement familial).

</details>

### Exercice 3 — Positionnement de deux banques en ligne

Deux banques lancent une offre 100 % mobile. La banque X communique sur « le compte le moins cher du Maroc » ; la banque Y sur « votre conseiller disponible 7 jours sur 7 par messagerie ».

1. Identifiez l'univers de référence et l'élément de différenciation de chacune.
2. Quels risques présente le positionnement de X ?
3. Quels éléments du mix de Y doivent être cohérents avec sa promesse ?

<details><summary>Voir le corrigé</summary>

**1)** Univers commun : **banque mobile**. Différenciation : X sur le **prix**, Y sur le **service et l'accompagnement**.

**2)** Un positionnement prix est facilement **imitable** (un concurrent peut baisser ses tarifs), il pèse sur la **rentabilité** et peut associer la marque à une moindre qualité de service.

**3)** Le **personnel** (conseillers formés et nombreux), le **processus** (délai de réponse court, outils de messagerie), la **preuve physique** (application ergonomique, historique des échanges) et la **communication** (témoignages, engagement sur les délais) ; le prix peut être plus élevé que celui de X.

</details>
`,
    qcm: [
      { q: "La segmentation consiste à :", choix: ["Choisir un prix", "Découper le marché en groupes homogènes de clients", "Choisir un distributeur", "Lancer une publicité"], bonne: 1, explication: "C'est la première étape de la démarche STP." },
      { q: "Le style de vie est un critère de segmentation :", choix: ["Géographique", "Sociodémographique", "Psychographique", "Comportemental"], bonne: 2, explication: "Il concerne les valeurs et les centres d'intérêt." },
      { q: "Les avantages recherchés sont un critère :", choix: ["Comportemental", "Géographique", "Démographique", "Juridique"], bonne: 0, explication: "Ils décrivent ce que le client attend du produit." },
      { q: "Un segment trop petit pour être rentable n'est pas :", choix: ["Mesurable", "Substantiel", "Accessible", "Différencié"], bonne: 1, explication: "Il doit être assez grand pour justifier une offre." },
      { q: "Concentrer tous ses efforts sur un seul segment correspond au marketing :", choix: ["Indifférencié", "Différencié", "Concentré", "De masse"], bonne: 2, explication: "C'est une stratégie de niche." },
      { q: "Une offre adaptée à chacun des segments retenus correspond au marketing :", choix: ["Indifférencié", "Différencié", "Concentré", "Viral"], bonne: 1, explication: "Plusieurs mix pour plusieurs segments." },
      { q: "Le positionnement se définit comme :", choix: ["La place du produit en rayon", "La place de l'offre dans l'esprit des clients par rapport aux concurrents", "Le prix de vente", "La zone géographique de vente"], bonne: 1, explication: "Identification et différenciation." },
      { q: "Une carte perceptuelle doit être construite à partir :", choix: ["De l'avis de la direction", "Des perceptions des clients", "Des coûts de production", "Des prix de revient"], bonne: 1, explication: "Ce sont les perceptions qui comptent." },
      { q: "Une marque positionnée haut de gamme doit en général adopter une distribution :", choix: ["Intensive", "Sélective ou exclusive", "Au hasard", "Uniquement en grande surface discount"], bonne: 1, explication: "Pour rester cohérente avec son image." },
      { q: "Le principal inconvénient du marketing différencié est :", choix: ["Une faible satisfaction", "Des coûts plus élevés", "L'absence de segments", "L'impossibilité de communiquer"], bonne: 1, explication: "Plusieurs produits et campagnes à financer." },
    ],
  },

  4: {
    titre: "La politique de produit",
    description: "Politique de produit : niveaux du produit, services, cycle de vie, gamme, marque et OMPIC, packaging, lancement d'un nouveau produit, cas corrigés.",
    resume: md`
## L'essentiel — La politique de produit

- Le produit est un **ensemble de bénéfices** ; niveaux : avantage central, générique, attendu, **augmenté**, potentiel.
- Classification : courant, réfléchi, de spécialité, non recherché ; biens industriels ; **services** (intangibles, inséparables, variables, périssables).
- **Cycle de vie** : lancement, croissance, maturité, déclin ; le mix s'adapte à chaque phase ; un produit peut être relancé.
- **Gamme** : largeur (lignes), profondeur (références par ligne), longueur (total) ; extension vers le haut ou le bas ; **cannibalisation** ; loi des 20/80 ; produits leaders, d'appel, tactiques, d'avenir.
- **Marque** : fonctions (repérage, garantie, personnalisation), types (produit, gamme, ombrelle, caution, MDD), notoriété et image ; dépôt à l'**OMPIC** (10 ans renouvelables).
- **Packaging** : fonctions techniques, commerciales, réglementaires, environnementales.
- Nouveau produit : idées → filtrage → concept → analyse économique → développement → test → lancement ; courbe d'adoption de Rogers.
`,
    exercices: md`
### Exercice 2 — Les niveaux du produit

Décrivez les cinq niveaux du produit pour :
1. un compte bancaire ;
2. une voiture citadine.

<details><summary>Voir le corrigé</summary>

| Niveau | Compte bancaire | Voiture citadine |
|---|---|---|
| Avantage central | Sécuriser son argent et payer | Se déplacer en ville |
| Produit générique | Compte, carte, chéquier | Moteur, carrosserie, quatre places |
| Produit attendu | Relevés, application mobile, virements | Fiabilité, consommation raisonnable, climatisation |
| Produit augmenté | Conseiller dédié, alertes, assurance incluse | Garantie longue, entretien offert, connectivité |
| Produit potentiel | Paiement biométrique, conseil automatisé | Version électrique, conduite assistée |

</details>

### Exercice 3 — Dimensions et extension d'une gamme

Une marque de cosmétiques propose trois lignes : soins du visage (6 références), soins des cheveux (4 références) et soins du corps (5 références).

1. Calculez la largeur, la longueur et la profondeur moyenne de la gamme.
2. La marque envisage d'ajouter une ligne « maquillage » ou d'ajouter 3 références à la ligne visage. Qualifiez chaque option.
3. Quels risques présente une extension vers le bas (produits à petit prix) pour une marque premium ?

<details><summary>Voir le corrigé</summary>

**1)** Largeur : **3** lignes ; longueur : **15** références ; profondeur moyenne : $15 / 3 =$ **5** références par ligne.

**2)** Ajouter une ligne augmente la **largeur** (diversification de la gamme, nouveaux clients, mais nouvelles compétences nécessaires) ; ajouter des références augmente la **profondeur** de la ligne visage (meilleure couverture des besoins, risque de cannibalisation et de stocks plus lourds).

**3)** **Dévalorisation** de l'image premium, **cannibalisation** des produits plus chers, conflit avec les distributeurs sélectifs. On peut limiter ces risques par une marque distincte ou une marque caution.

</details>
`,
    qcm: [
      { q: "Le produit augmenté correspond :", choix: ["Au bénéfice fondamental", "Aux éléments qui dépassent les attentes du client", "Au prix", "Au packaging uniquement"], bonne: 1, explication: "Services associés, garanties, personnalisation." },
      { q: "Une chambre d'hôtel non louée ce soir est perdue : c'est la caractéristique de :", choix: ["Intangibilité", "Périssabilité", "Variabilité", "Inséparabilité"], bonne: 1, explication: "Un service ne se stocke pas." },
      { q: "Pendant la phase de lancement, les profits sont en général :", choix: ["Maximaux", "Négatifs ou faibles", "Stables", "En déclin"], bonne: 1, explication: "Les coûts de lancement sont élevés." },
      { q: "La phase où la concurrence est la plus forte et les ventes stables est :", choix: ["Le lancement", "La croissance", "La maturité", "Le déclin"], bonne: 2, explication: "Il faut défendre sa part de marché." },
      { q: "La profondeur d'une gamme est :", choix: ["Le nombre de lignes", "Le nombre de références dans une ligne", "Le prix moyen", "Le nombre de marques"], bonne: 1, explication: "La largeur est le nombre de lignes." },
      { q: "Un nouveau produit qui prend des ventes à un produit de la même entreprise provoque :", choix: ["Une diversification", "Une cannibalisation", "Une intégration", "Une innovation de rupture"], bonne: 1, explication: "Le gain global est alors réduit." },
      { q: "Une marque commune à des produits très variés d'une entreprise est une marque :", choix: ["Produit", "Ombrelle", "De distributeur", "Caution"], bonne: 1, explication: "Elle couvre plusieurs catégories." },
      { q: "Au Maroc, une marque se dépose auprès de :", choix: ["La CNDP", "L'OMPIC", "La HACA", "Bank Al-Maghrib"], bonne: 1, explication: "Office marocain de la propriété industrielle et commerciale." },
      { q: "Le pourcentage de personnes qui citent une marque sans aide mesure :", choix: ["La notoriété assistée", "La notoriété spontanée", "L'image", "La fidélité"], bonne: 1, explication: "La première citée est le top of mind." },
      { q: "Selon Rogers, les premiers à adopter une innovation sont :", choix: ["La majorité précoce", "Les innovateurs", "Les retardataires", "La majorité tardive"], bonne: 1, explication: "Environ 2,5 % de la population." },
    ],
  },

  5: {
    titre: "La politique de prix",
    description: "Politique de prix : objectifs, contraintes, taux de marge et de marque, seuil de rentabilité, élasticité, prix psychologique, écrémage et pénétration.",
    resume: md`
## L'essentiel — La politique de prix

- Le prix est la seule variable du mix qui rapporte ; c'est aussi un **signal de qualité**.
- Objectifs : rentabilité, volume, image, survie.
- Contraintes : coûts, demande, concurrence, distribution, réglementation (loi 104-12, Conseil de la concurrence, affichage des prix).
- **Taux de marge** = marge / coût ; **taux de marque** = marge / prix de vente HT = taux de marge / (1 + taux de marge) ; coefficient multiplicateur = PV TTC / coût d'achat HT.
- **Seuil de rentabilité** = charges fixes / (prix − coût variable unitaire).
- **Élasticité** $e = (\Delta Q / Q) / (\Delta P / P)$ : si $|e| > 1$, une hausse de prix réduit le CA.
- **Prix psychologique** : maximise la proportion d'acceptants (ni trop cher, ni qualité douteuse) ; vérifier aussi la marge.
- Stratégies : **écrémage**, **pénétration**, alignement, prix psychologiques, prix d'appel, prix différenciés (yield management), lots, freemium ; rabais, remises, ristournes, escompte.
`,
    exercices: md`
### Exercice 2 — Chaîne des prix

Un fabricant vend un produit 50 DH HT à un distributeur. Le distributeur applique un taux de marque de 30 % sur son prix de vente HT ; la TVA est de 20 %.

1. Calculez le prix de vente HT et TTC du distributeur.
2. Calculez le taux de marge du distributeur.
3. Le fabricant veut que le prix TTC ne dépasse pas 79 DH. Quel prix doit-il accorder au distributeur (même taux de marque) ?

<details><summary>Voir le corrigé</summary>

**1)** $PV_{HT} = 50 / (1 - 0{,}3) \approx \mathbf{71{,}43}$ DH ; $PV_{TTC} = 71{,}43 \times 1{,}2 \approx \mathbf{85{,}71}$ DH.

**2)** Marge : $71{,}43 - 50 = 21{,}43$ DH ; taux de marge $= 21{,}43 / 50 \approx$ **42,9 %** (on vérifie : $0{,}3 / 0{,}7 \approx 0{,}429$).

**3)** $PV_{HT} = 79 / 1{,}2 \approx 65{,}83$ DH ; prix fabricant $= 65{,}83 \times 0{,}7 \approx \mathbf{46{,}08}$ DH HT.

</details>

### Exercice 3 — Élasticité et décision de prix

Un opérateur vend 200 000 abonnements à 100 DH par mois. Une étude estime l'élasticité-prix à − 0,6 pour les abonnés actuels.

1. L'opérateur envisage une hausse de 10 %. Estimez les abonnements et le chiffre d'affaires mensuel après la hausse.
2. Que se passerait-il avec une élasticité de − 1,8 ?
3. Quels facteurs expliquent qu'une demande soit peu élastique ?

<details><summary>Voir le corrigé</summary>

**1)** Abonnements : $-0{,}6 \times 10\,\% = -6\,\%$, soit **188 000** ; CA : $188\,000 \times 110 = \mathbf{20\,680\,000}$ DH contre 20 000 000 DH : **hausse** de 3,4 %.

**2)** Baisse de 18 % : 164 000 abonnés ; CA $= 164\,000 \times 110 = 18\,040\,000$ DH : **baisse** de 9,8 %. La hausse serait alors une erreur.

**3)** Peu de substituts, produit de nécessité, coût de changement élevé (engagement, changement de numéro), faible part du budget, forte fidélité à la marque.

</details>
`,
    qcm: [
      { q: "La seule variable du mix qui rapporte directement de l'argent est :", choix: ["Le produit", "Le prix", "La distribution", "La communication"], bonne: 1, explication: "Les autres variables génèrent des coûts." },
      { q: "Coût d'achat 80 DH, prix de vente HT 100 DH. Le taux de marque vaut :", choix: ["25 %", "20 %", "80 %", "12,5 %"], bonne: 1, explication: "Marge 20 / prix de vente 100." },
      { q: "Avec les mêmes chiffres, le taux de marge vaut :", choix: ["20 %", "25 %", "125 %", "80 %"], bonne: 1, explication: "Marge 20 / coût 80." },
      { q: "Charges fixes 100 000 DH, prix 50 DH, coût variable 30 DH. Le seuil de rentabilité est de :", choix: ["2 000 unités", "5 000 unités", "3 333 unités", "10 000 unités"], bonne: 1, explication: "100 000 / 20." },
      { q: "Si la demande est élastique (e = − 2), une hausse de prix :", choix: ["Augmente le chiffre d'affaires", "Réduit le chiffre d'affaires", "Ne change rien", "Augmente les quantités"], bonne: 1, explication: "Les quantités baissent plus que le prix n'augmente." },
      { q: "Le prix psychologique optimal est le prix qui :", choix: ["Maximise la marge unitaire", "Maximise la proportion de clients qui l'acceptent", "Est le plus bas", "Est égal au coût"], bonne: 1, explication: "Il faut ensuite vérifier la rentabilité." },
      { q: "Un prix élevé au lancement, abaissé ensuite, correspond à :", choix: ["La pénétration", "L'écrémage", "L'alignement", "Le prix d'appel"], bonne: 1, explication: "Adapté aux produits innovants." },
      { q: "La stratégie de pénétration convient surtout si :", choix: ["La demande est peu sensible au prix", "La demande est élastique et les économies d'échelle importantes", "Le produit est un luxe", "Le produit est protégé par un brevet"], bonne: 1, explication: "Elle vise un volume élevé." },
      { q: "Une réduction accordée pour un paiement anticipé s'appelle :", choix: ["Un rabais", "Un escompte", "Une ristourne", "Une remise"], bonne: 1, explication: "C'est une réduction financière." },
      { q: "Au Maroc, le principe de la liberté des prix est posé par :", choix: ["La loi 09-08", "La loi 104-12", "La loi 17-97", "La loi 5-96"], bonne: 1, explication: "Loi sur la liberté des prix et de la concurrence." },
    ],
  },

  6: {
    titre: "La politique de distribution",
    description: "Distribution : fonctions, canaux et circuits, formes de commerce, choix d'un canal, distribution intensive, sélective ou exclusive, franchise et merchandising.",
    resume: md`
## L'essentiel — La politique de distribution

- Fonctions : spatiale, temporelle, quantitative, assortiment, commerciale, financière ; supprimer un intermédiaire ne supprime pas ses fonctions.
- Circuits **direct**, **court** (un intermédiaire), **long** (grossiste + détaillant).
- Formes de commerce : indépendant (commerce de proximité), associé (coopératives, franchise), intégré (grande distribution), électronique.
- Choix du canal : produit, clients, entreprise (contrôle), concurrence, réglementation ; coûts fixes et variables : $CA^* = CF_A / (t_B - t_A)$.
- Couverture **intensive**, **sélective**, **exclusive** ; stratégies **push** et **pull** ; multicanal et **omnicanal**.
- **Franchise** : marque + savoir-faire + assistance contre droit d'entrée et redevances.
- Grande distribution : référencement, trade marketing ; **merchandising** : facings, emplacement ; indice de rendement = part du CA / part du linéaire.
`,
    exercices: md`
### Exercice 2 — Quelle couverture pour quel produit ?

Proposez une stratégie de couverture et un circuit adaptés pour :
1. une eau minérale ;
2. une marque de montres de luxe ;
3. un logiciel de gestion pour PME ;
4. des tomates cerises biologiques d'une coopérative.

<details><summary>Voir le corrigé</summary>

1. **Intensive**, circuit long et court (grossistes, épiceries, grande distribution, cafés, stations) : achat courant, disponibilité essentielle.
2. **Exclusive** ou très **sélective** (bijouteries agréées, boutiques en propre) : contrôle de l'image et du prix.
3. **Directe** (site, commerciaux) ou **sélective** via des revendeurs et des cabinets comptables partenaires : produit technique nécessitant conseil et installation.
4. Circuit **court** (paniers livrés, magasins bio, marchés, vente en ligne) et export via un importateur : produit périssable, positionnement qualité.

</details>

### Exercice 3 — Le calcul d'une franchise

Un franchisé ouvre une boutique d'une enseigne de prêt-à-porter. Droit d'entrée : 150 000 DH ; redevance : 5 % du chiffre d'affaires ; redevance publicitaire : 1 %. Il prévoit un chiffre d'affaires annuel de 2 400 000 DH avec un taux de marge brute (après achats) de 45 % et 600 000 DH d'autres charges.

1. Calculez les redevances annuelles.
2. Calculez le résultat annuel avant impôt (on amortit le droit d'entrée sur 5 ans).
3. Quels avantages le franchisé retire-t-il en contrepartie de ces coûts ?

<details><summary>Voir le corrigé</summary>

**1)** $6\,\% \times 2\,400\,000 = \mathbf{144\,000}$ DH.

**2)** Marge brute : $0{,}45 \times 2\,400\,000 = 1\,080\,000$ DH ; résultat $= 1\,080\,000 - 600\,000 - 144\,000 - 30\,000 = \mathbf{306\,000}$ DH.

**3)** Une **marque** connue qui attire les clients dès l'ouverture, un **concept** éprouvé (aménagement, assortiment), des **conditions d'achat** négociées, la **formation** et l'assistance du franchiseur, et la communication nationale financée par la redevance publicitaire.

</details>
`,
    qcm: [
      { q: "Fractionner des palettes en unités vendues au détail relève de la fonction :", choix: ["Spatiale", "Quantitative", "Temporelle", "Financière"], bonne: 1, explication: "Le fractionnement des lots." },
      { q: "Un circuit court comprend :", choix: ["Aucun intermédiaire", "Un seul intermédiaire", "Deux intermédiaires ou plus", "Uniquement internet"], bonne: 1, explication: "Producteur, détaillant, consommateur." },
      { q: "Les hypermarchés appartiennent au commerce :", choix: ["Indépendant", "Associé", "Intégré", "Ambulant"], bonne: 2, explication: "Ils assurent les fonctions de gros et de détail." },
      { q: "Une distribution intensive convient surtout :", choix: ["Aux produits de luxe", "Aux produits de consommation courante", "Aux automobiles", "Aux logiciels spécialisés"], bonne: 1, explication: "Le client achète là où il trouve le produit." },
      { q: "Un seul distributeur par zone géographique correspond à une distribution :", choix: ["Intensive", "Sélective", "Exclusive", "Multicanale"], bonne: 2, explication: "Souvent avec engagement réciproque." },
      { q: "La stratégie pull consiste à :", choix: ["Accorder des remises aux distributeurs", "Créer la demande chez le consommateur final", "Réduire le nombre de points de vente", "Supprimer la publicité"], bonne: 1, explication: "Le consommateur tire le produit." },
      { q: "Charges fixes de la force de vente 400 000 DH, commission 2 % ; agents 10 %. Le CA d'indifférence est :", choix: ["4 000 000 DH", "5 000 000 DH", "3 333 333 DH", "40 000 000 DH"], bonne: 1, explication: "400 000 / 0,08." },
      { q: "Dans la franchise, le franchisé verse au franchiseur :", choix: ["Un salaire", "Un droit d'entrée et des redevances", "Des dividendes", "Rien"], bonne: 1, explication: "En contrepartie de la marque et du savoir-faire." },
      { q: "Un produit qui réalise 15 % du CA du rayon sur 10 % du linéaire a un indice de rendement de :", choix: ["0,67", "1,5", "25", "5"], bonne: 1, explication: "15 / 10." },
      { q: "Commander en ligne et retirer en magasin illustre une stratégie :", choix: ["Exclusive", "Omnicanale", "Push", "De pénétration"], bonne: 1, explication: "Les canaux sont articulés entre eux." },
    ],
  },

  7: {
    titre: "La politique de communication",
    description: "Communication marketing : objectifs AIDA, mix médias et hors médias, digital, copy strategy, budget, plan média, GRP, CPM, CTR et cadre juridique.",
    resume: md`
## L'essentiel — La politique de communication

- Processus : émetteur → message codé → canal → récepteur (bruits, retour) ; communication produit, de marque, institutionnelle.
- Objectifs **cognitifs** (connaître), **affectifs** (aimer), **conatifs** (agir) ; modèle **AIDA**.
- Outils : publicité médias, promotion des ventes, relations publiques, marketing direct, force de vente, parrainage, **digital** (SEO, SEA, réseaux sociaux, influence) ; médias payants, propres, gagnés.
- Plan : situation → cible → objectifs chiffrés → **copy strategy** (promesse, preuve, bénéfice, ton) → budget (% CA, alignement, **objectifs et moyens**) → médias → contrôle.
- **GRP** = couverture × répétition ; **CPM** = coût / contacts × 1 000 ; CTR, CPC, conversion, ROAS.
- Maroc : publicité trompeuse interdite (loi 31-08), contrôle audiovisuel par la **HACA**, consentement pour la prospection (loi 09-08).
`,
    exercices: md`
### Exercice 2 — Comparer deux supports

Une marque hésite entre deux supports pour toucher une cible de 2 millions de personnes :
- radio : 20 messages à 8 000 DH, chacun touchant 5 % de la cible ;
- affichage urbain : 150 panneaux pendant deux semaines pour 200 000 DH, générant 3 000 000 de contacts dans la cible.

1. Calculez le GRP et le CPM de la radio.
2. Calculez le GRP et le CPM de l'affichage.
3. Quel support est le plus efficient ? Quels autres critères faut-il considérer ?

<details><summary>Voir le corrigé</summary>

**1)** GRP $= 20 \times 5 = \mathbf{100}$ ; contacts $= 2\,000\,000 \times 1 = 2\,000\,000$ ; coût $160\,000$ DH ; $CPM = \mathbf{80}$ DH.

**2)** GRP $= 3\,000\,000 / 2\,000\,000 \times 100 = \mathbf{150}$ ; $CPM = 200\,000 / 3\,000 \approx \mathbf{66{,}7}$ DH.

**3)** L'affichage offre le coût par contact le plus faible. Il faut aussi considérer l'**affinité** du support avec la cible, la **qualité** du contact (attention, durée), la **couverture** (nombre de personnes différentes touchées), la possibilité de transmettre un message détaillé et la complémentarité des médias.

</details>

### Exercice 3 — Choisir le bon outil

Pour chaque objectif, proposez l'outil de communication le plus adapté :
1. Faire essayer une nouvelle biscotte.
2. Réparer l'image d'une entreprise après un rappel de produits.
3. Faire connaître une application bancaire aux 18-25 ans.
4. Convaincre des acheteurs de la grande distribution de référencer un produit.
5. Relancer les clients inactifs d'une boutique en ligne.

<details><summary>Voir le corrigé</summary>

1. **Promotion des ventes** : échantillons, dégustations en magasin, offre de lancement.
2. **Relations publiques et presse** : communiqués transparents, explications des mesures prises.
3. **Communication digitale** : réseaux sociaux, influenceurs, publicité ciblée sur mobile.
4. **Force de vente** et promotions commerciales (stratégie push).
5. **Marketing direct** : courriel personnalisé avec code de réduction, aux clients ayant donné leur consentement.

</details>
`,
    qcm: [
      { q: "Un objectif de notoriété est un objectif :", choix: ["Conatif", "Cognitif", "Affectif", "Financier"], bonne: 1, explication: "Faire connaître." },
      { q: "Dans le modèle AIDA, la dernière étape est :", choix: ["L'attention", "L'intérêt", "Le désir", "L'action"], bonne: 3, explication: "Attention, intérêt, désir, action." },
      { q: "Une réduction temporaire pour déclencher l'achat relève de :", choix: ["La publicité", "La promotion des ventes", "Les relations publiques", "Le mécénat"], bonne: 1, explication: "Avantage limité dans le temps." },
      { q: "Dans une copy strategy, la preuve sert à :", choix: ["Fixer le prix", "Rendre la promesse crédible", "Choisir les médias", "Calculer le budget"], bonne: 1, explication: "Elle justifie le bénéfice annoncé." },
      { q: "La méthode de budget la plus rigoureuse est :", choix: ["Le pourcentage du CA", "L'alignement sur les concurrents", "Objectifs et moyens", "Le budget de l'année précédente"], bonne: 2, explication: "Le budget découle des actions nécessaires." },
      { q: "Couverture 40 %, répétition moyenne 3. Le GRP vaut :", choix: ["43", "120", "13,3", "7,5"], bonne: 1, explication: "40 × 3." },
      { q: "Coût 300 000 DH pour 2 000 000 de contacts. Le CPM vaut :", choix: ["150 DH", "15 DH", "1 500 DH", "0,15 DH"], bonne: 0, explication: "300 000 / 2 000 000 × 1 000." },
      { q: "100 000 impressions et 1 500 clics donnent un taux de clic de :", choix: ["15 %", "1,5 %", "0,15 %", "66,7 %"], bonne: 1, explication: "1 500 / 100 000." },
      { q: "Les avis clients et les partages spontanés sont des médias :", choix: ["Payants", "Propres", "Gagnés", "Hors médias"], bonne: 2, explication: "La marque ne les achète pas." },
      { q: "Au Maroc, le contrôle de la publicité à la radio et à la télévision relève de :", choix: ["La CNDP", "La HACA", "L'OMPIC", "L'AMMC"], bonne: 1, explication: "Haute Autorité de la Communication Audiovisuelle." },
    ],
  },

  8: {
    titre: "Le diagnostic stratégique marketing",
    description: "Diagnostic marketing : PESTEL, cinq forces de Porter, diagnostic interne, SWOT et TOWS, matrice BCG, matrice d'Ansoff et plan marketing, cas corrigé.",
    resume: md`
## L'essentiel — Diagnostic stratégique marketing

- **Externe** : PESTEL (politique, économique, socioculturel, technologique, écologique, légal) ; **cinq forces de Porter** (rivalité, entrants, substituts, clients, fournisseurs) ; analyse des concurrents → opportunités et menaces.
- **Interne** : ressources, compétences, performance marketing, chaîne de valeur → forces et faiblesses (valorisées par les clients, difficiles à imiter).
- **SWOT** puis **TOWS** (SO, WO, ST, WT) pour dégager des options.
- **BCG** : croissance du marché × **PDM relative** (PDM / PDM du principal concurrent) ; vedettes, vaches à lait, dilemmes, poids morts ; portefeuille équilibré.
- **Ansoff** : pénétration, développement de produits, développement de marchés, diversification (risque croissant).
- Positions (Kotler) : leader, challenger, suiveur, spécialiste ; stratégies génériques de Porter.
- **Plan marketing** : diagnostic, objectifs, stratégie, mix, budget, contrôle.
`,
    exercices: md`
### Exercice 2 — Forces, faiblesses, opportunités ou menaces ?

Classez chaque élément dans la SWOT d'une chaîne marocaine de cafés :
1. Hausse du prix mondial du café.
2. Personnel bien formé et fidèle.
3. Développement du travail à distance dans les cafés.
4. Absence d'application de commande en ligne.
5. Arrivée d'une chaîne internationale.
6. Emplacements situés dans les meilleurs quartiers.

<details><summary>Voir le corrigé</summary>

- **Forces** : 2 (personnel formé), 6 (emplacements).
- **Faiblesses** : 4 (pas d'application).
- **Opportunités** : 3 (nouveaux usages : travail à distance).
- **Menaces** : 1 (coût des matières premières), 5 (nouveau concurrent).

</details>

### Exercice 3 — Calculs BCG

Une entreprise est leader sur un marché avec 40 % de part de marché ; le deuxième a 25 %. Sur un second marché, elle a 10 % contre 30 % pour le leader.

1. Calculez les parts de marché relatives.
2. Le premier marché croît de 4 %, le second de 18 %. Placez les activités dans la matrice.
3. Quelle erreur fréquente faut-il éviter pour calculer la PDM relative d'un leader ?

<details><summary>Voir le corrigé</summary>

**1)** Premier marché : $40 / 25 = \mathbf{1{,}6}$ ; second : $10 / 30 \approx \mathbf{0{,}33}$.

**2)** Premier : **vache à lait** (croissance faible, PDM relative > 1) ; second : **dilemme** (croissance forte, PDM relative < 1).

**3)** Pour un leader, le principal concurrent est le **deuxième** du marché : on divise sa PDM par celle du deuxième, et non par la sienne ou par la taille du marché.

</details>
`,
    qcm: [
      { q: "L'analyse PESTEL porte sur :", choix: ["Les forces internes de l'entreprise", "L'environnement général de l'entreprise", "Le portefeuille d'activités", "Le prix des produits"], bonne: 1, explication: "Elle identifie opportunités et menaces." },
      { q: "Une équipe commerciale performante est, dans la SWOT :", choix: ["Une opportunité", "Une force", "Une menace", "Une faiblesse"], bonne: 1, explication: "C'est un élément interne positif." },
      { q: "La stratégie SO de la matrice TOWS consiste à :", choix: ["Utiliser ses forces pour saisir les opportunités", "Corriger ses faiblesses", "Fuir les menaces", "Abandonner une activité"], bonne: 0, explication: "C'est une stratégie offensive." },
      { q: "Dans la matrice BCG, la part de marché relative se calcule par rapport :", choix: ["À la taille du marché", "Au principal concurrent", "Au plus petit concurrent", "À la moyenne du secteur"], bonne: 1, explication: "PDM de l'activité / PDM du principal concurrent." },
      { q: "Une activité à forte croissance et PDM relative supérieure à 1 est :", choix: ["Un dilemme", "Une vedette", "Une vache à lait", "Un poids mort"], bonne: 1, explication: "Elle est rentable mais consomme des liquidités." },
      { q: "Une vache à lait :", choix: ["Consomme beaucoup de liquidités", "Génère des liquidités pour financer les autres activités", "Doit être abandonnée", "Est sur un marché en forte croissance"], bonne: 1, explication: "Marché mature, position dominante." },
      { q: "Vendre des produits actuels dans un nouveau pays correspond, chez Ansoff, au :", choix: ["Développement de produits", "Développement de marchés", "Diversification", "Pénétration"], bonne: 1, explication: "Nouveau marché, produit actuel." },
      { q: "L'option la plus risquée de la matrice d'Ansoff est :", choix: ["La pénétration", "Le développement de produits", "Le développement de marchés", "La diversification"], bonne: 3, explication: "Nouveaux produits et nouveaux marchés." },
      { q: "Le pouvoir de négociation de la grande distribution est l'une des :", choix: ["Forces de Porter", "Variables du mix", "Cases de la BCG", "Étapes AIDA"], bonne: 0, explication: "Pouvoir de négociation des clients." },
      { q: "Selon Kotler, l'entreprise qui attaque le leader est :", choix: ["Le suiveur", "Le challenger", "Le spécialiste", "Le nicheur"], bonne: 1, explication: "Elle cherche à prendre la première place." },
    ],
  },
};

export default chapitres;
