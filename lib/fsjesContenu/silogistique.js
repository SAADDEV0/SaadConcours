// Système d'Information Logistique (S6) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Le système d'information et la chaîne logistique",
    description: "Système d'information logistique : fonctions, flux d'information, architecture ERP, APS, WMS, TMS, effet coup de fouet et remèdes (GPA, CPFR).",
    resume: md`
## L'essentiel — SI et chaîne logistique

- **SI** : personnes, procédures, données, logiciels, matériels et réseaux pour collecter, stocker, traiter et diffuser l'information.
- Fonctions : **opérationnelle** (transactions), **coordination** (transmission), **pilotage** (indicateurs).
- L'information précède, accompagne et suit chaque flux physique ; la **qualité des données** est la première condition.
- Architecture : **ERP** (colonne vertébrale), **APS** (planification), **WMS** (entrepôt), **TMS** (transport), portails et EDI, décisionnel ; applications **interfacées**.
- **Effet coup de fouet** : amplification des variations des commandes en remontant la chaîne.
- Causes (Lee, Padmanabhan, Whang, 1997) : prévisions sur les commandes, lots, promotions, rationnement, délais.
- Remèdes : partage de la demande finale, **GPA/VMI**, **CPFR**, délais et lots réduits, prix stables, allocation sur les ventes passées.
- Mesure simple : amplitude ou variance des commandes à chaque étage comparée à celle de la demande finale.
`,
    exercices: md`
### Exercice 2 — Classer des informations

Classez chaque information selon le moment (avant, pendant, après le mouvement) et la fonction du SI (opérationnelle, coordination, pilotage) : a) le taux de service du mois ; b) l'avis d'expédition envoyé au client ; c) la prévision des ventes du trimestre ; d) l'enregistrement de la réception d'une palette ; e) la position GPS d'un camion transmise au client.

<details><summary>Voir le corrigé</summary>

a) **Après** ; **pilotage**.
b) **Pendant** (au départ) ; **coordination**.
c) **Avant** ; **pilotage** (et base de la planification).
d) **Après** la livraison, **pendant** le cycle de stock ; **opérationnelle** (transaction).
e) **Pendant** ; **coordination** (information du client).

</details>

### Exercice 3 — Mettre en place une GPA

Une enseigne de distribution confie à un fabricant de biscuits la gestion de ses stocks dans ses 3 entrepôts régionaux.

1. Quelles données l'enseigne doit-elle partager chaque jour ?
2. Quelles règles faut-il fixer dans le contrat ?
3. Quels avantages pour chacun ?

<details><summary>Voir le corrigé</summary>

1. Stock disponible par article et par entrepôt, sorties (ventes aux magasins), réceptions, commandes en cours, promotions prévues.
2. Stocks minimum et maximum (ou couverture en jours), délais de livraison, taille des livraisons, indicateurs (taux de service, couverture, ruptures), propriété du stock, sanctions et révision.
3. Enseigne : moins de ruptures, moins de stock, moins de travail d'approvisionnement. Fabricant : visibilité sur la demande réelle, production plus régulière, réduction de l'effet coup de fouet, relation renforcée.

</details>
`,
    qcm: [
      { q: "Un système d'information comprend :", choix: ["Seulement des ordinateurs", "Des personnes, procédures, données, logiciels et matériels", "Seulement des logiciels", "Seulement des documents papier"], bonne: 1, explication: "L'informatique n'en est qu'un outil." },
      { q: "La fonction de pilotage du SI consiste à :", choix: ["Enregistrer une facture", "Produire des indicateurs et des prévisions pour décider", "Imprimer des étiquettes", "Charger un camion"], bonne: 1, explication: "Elle s'appuie sur les données des transactions." },
      { q: "Le logiciel qui gère les emplacements et la préparation des commandes est :", choix: ["Le TMS", "Le WMS", "L'APS", "Le CRM"], bonne: 1, explication: "Warehouse management system." },
      { q: "Le logiciel qui planifie les chargements et suit les transporteurs est :", choix: ["Le WMS", "Le TMS", "L'ERP comptable", "Le tableur"], bonne: 1, explication: "Transport management system." },
      { q: "L'effet coup de fouet désigne :", choix: ["La baisse des prix", "L'amplification des variations de commandes en remontant la chaîne", "Un accident de transport", "La hausse du fret"], bonne: 1, explication: "Bullwhip effect." },
      { q: "Une cause de l'effet coup de fouet est :", choix: ["Le partage des ventes réelles", "Les commandes groupées en gros lots", "Les prix stables", "Les délais courts"], bonne: 1, explication: "Les lots créent des pics." },
      { q: "Dans une GPA (VMI) :", choix: ["Le client passe toutes les commandes seul", "Le fournisseur décide des réapprovisionnements à partir du stock du client", "Le transporteur fixe les prix", "Il n'y a plus de stock"], bonne: 1, explication: "Gestion partagée des approvisionnements." },
      { q: "Le CPFR consiste à :", choix: ["Construire une prévision commune entre client et fournisseur", "Supprimer les prévisions", "Augmenter les promotions", "Externaliser le transport"], bonne: 0, explication: "Collaboration sur la prévision et le réapprovisionnement." },
      { q: "Des ventes qui varient de 4 et des commandes qui varient de 20 indiquent :", choix: ["Une demande instable", "Un effet coup de fouet", "Un stock optimal", "Une absence de délai"], bonne: 1, explication: "Les commandes amplifient la demande." },
      { q: "La première condition d'un SI logistique efficace est :", choix: ["Le logiciel le plus cher", "La qualité des données", "Le nombre d'écrans", "La vitesse d'impression"], bonne: 1, explication: "Données exactes, complètes et à jour." },
    ],
  },
  2: {
    titre: "Identification et traçabilité",
    description: "Codification GS1 (GTIN, GLN, SSCC), clé de contrôle du code-barres, codes 2D et RFID, étiquette GS1-128, traçabilité ascendante et descendante.",
    resume: md`
## L'essentiel — Identification et traçabilité

- L'identification automatique relie l'objet physique à ses données, vite et sans erreur de saisie.
- **GS1** gère les standards ; préfixe de GS1 Morocco : **611**.
- **GTIN** : type d'article (13 chiffres pour l'unité, 14 pour le carton) ; **GLN** : lieu ; **SSCC** : une unité logistique précise (18 chiffres).
- Clé GTIN-13 : rangs pairs × 3, rangs impairs × 1, somme, complément au multiple de 10.
- **Code-barres** : bon marché, vue directe ; **2D** (DataMatrix, QR) : plus de données ; **RFID** : sans vue directe, lecture multiple, plus coûteuse.
- RFID **passive** (sans pile) ou **active** (avec pile, longue portée).
- **GS1-128** : identifiants de données (00) SSCC, (01) GTIN, (10) lot, (15) DDM, (17) DLC, (37) quantité.
- Traçabilité **ascendante** (vers l'origine), **descendante** (vers les clients), **interne** ; gestion par **lots**, plus petits = rappels ciblés.
- Maroc : **loi 28-07** (sécurité sanitaire des aliments), contrôle de l'**ONSSA** ; « un pas en amont, un pas en aval ».
`,
    exercices: md`
### Exercice 2 — Clé de contrôle

Calculez la clé de contrôle des GTIN-13 dont les 12 premiers chiffres sont : a) 6 1 1 1 2 3 4 5 6 7 8 9 ; b) 6 1 1 5 5 5 0 0 0 1 2 0.

<details><summary>Voir le corrigé</summary>

a) Rangs impairs : 6 + 1 + 2 + 4 + 6 + 8 = 27 ; rangs pairs : (1 + 1 + 3 + 5 + 7 + 9) × 3 = 26 × 3 = 78 ; somme 105 ; clé = **5** : 6111234567895.
b) Rangs impairs : 6 + 1 + 5 + 0 + 0 + 2 = 14 ; rangs pairs : (1 + 5 + 5 + 0 + 1 + 0) × 3 = 12 × 3 = 36 ; somme 50 ; multiple de 10 : clé = **0** : 6115550001200.

</details>

### Exercice 3 — Choisir un support d'identification

Pour chaque cas, proposez code-barres, code 2D ou RFID : a) bouteilles d'eau vendues en supermarché ; b) palettes de pièces automobiles passant sous un portique de réception à Tanger ; c) boîtes de médicaments qui doivent porter un numéro de série, un lot et une date de péremption sur une petite surface ; d) conteneurs suivis dans un grand parc portuaire.

<details><summary>Voir le corrigé</summary>

a) **Code-barres** EAN-13 : coût quasi nul, lu aux caisses du monde entier.
b) **RFID passive** : lecture de toute la palette d'un coup sans dépalettiser.
c) **Code 2D** (GS1 DataMatrix) : beaucoup de données sur une petite surface.
d) **RFID active** ou balises de géolocalisation : longue portée, suivi en continu.

</details>
`,
    qcm: [
      { q: "Le préfixe des codes attribués par GS1 Morocco est :", choix: ["300", "611", "212", "840"], bonne: 1, explication: "Il ne désigne pas forcément le pays de fabrication." },
      { q: "Le GTIN identifie :", choix: ["Une palette précise", "Un type d'article commercial", "Un entrepôt", "Un camion"], bonne: 1, explication: "Toutes les unités identiques ont le même GTIN." },
      { q: "Le SSCC identifie :", choix: ["Un type de produit", "Une unité logistique précise, unique au monde", "Un fournisseur", "Un pays"], bonne: 1, explication: "18 chiffres." },
      { q: "Le GLN sert à identifier :", choix: ["Un lot", "Un lieu ou une entité", "Une date", "Un prix"], bonne: 1, explication: "Global Location Number." },
      { q: "Si la somme pondérée des 12 premiers chiffres d'un GTIN-13 est 87, la clé vaut :", choix: ["7", "3", "8", "0"], bonne: 1, explication: "90 − 87 = 3." },
      { q: "Le principal avantage de la RFID sur le code-barres est :", choix: ["Son coût plus faible", "La lecture sans vue directe et de nombreuses étiquettes à la fois", "Sa normalisation plus ancienne", "Sa lecture par l'œil humain"], bonne: 1, explication: "Elle est plus coûteuse." },
      { q: "Dans une étiquette GS1-128, l'identifiant (10) précède :", choix: ["Le SSCC", "Le numéro de lot", "La quantité", "Le GTIN"], bonne: 1, explication: "(00) SSCC, (01) GTIN, (37) quantité." },
      { q: "La traçabilité descendante permet :", choix: ["De retrouver l'origine d'un composant", "De retrouver tous les clients qui ont reçu un lot", "De fixer un prix", "De calculer un stock de sécurité"], bonne: 1, explication: "Indispensable pour un rappel." },
      { q: "Au Maroc, la loi qui impose la traçabilité des produits alimentaires est :", choix: ["La loi 09-08", "La loi 28-07", "La loi 15-95", "La loi 17-99"], bonne: 1, explication: "Sous le contrôle de l'ONSSA." },
      { q: "Des lots de fabrication plus petits permettent :", choix: ["Des rappels plus ciblés", "De supprimer les codes-barres", "D'éviter toute traçabilité", "D'augmenter les rappels"], bonne: 0, explication: "Moins de produits concernés." },
    ],
  },
  3: {
    titre: "L'ERP et le calcul des besoins (MRP)",
    description: "ERP : intégration, modules, données de base, avantages et limites ; demande dépendante, nomenclature et calcul des besoins nets MRP décalés par les délais.",
    resume: md`
## L'essentiel — ERP et MRP

- **ERP** : progiciel paramétrable couvrant toutes les fonctions autour d'une **base de données unique** ; intégration, pas de ressaisie.
- Modules : ventes, achats, stocks, planification-production, finance.
- **Données de base** : articles, nomenclatures, gammes, clients, fournisseurs ; leur qualité conditionne tous les calculs.
- Avantages : cohérence, traçabilité, reporting ; limites : coût, durée, rigidité, dépendance, résistance au changement.
- Demande **indépendante** (marché) : on la prévoit ; demande **dépendante** (composants) : on la **calcule**.
- **Nomenclature** : composants et quantités par niveau.
- Besoin net = max(0 ; besoin brut − stock − réceptions programmées) ; **lancement** = besoin net décalé du délai.
- Besoins bruts des composants = **lancements du parent** × quantité de la nomenclature.
- **MRP II** : ajoute les capacités ; projet ERP : besoins, choix, paramétrage, reprise des données, tests, formation, démarrage.
`,
    exercices: md`
### Exercice 2 — Nomenclature à deux niveaux

Un vélo V se compose d'un cadre K (× 1) et de deux roues R (× 2) ; chaque roue comprend 36 rayons Y. On doit livrer 40 vélos en semaine 6. Stocks : V 0, K 5, R 10, Y 500. Délais : V 1, K 2, R 1, Y 1 semaine.

1. Calculez les besoins nets et les lancements de chaque article.
2. Combien de rayons faut-il commander et quand ?

<details><summary>Voir le corrigé</summary>

1. **V** : besoin net 40 en semaine 6 ; lancement **40 en semaine 5**. **K** : brut 40 en semaine 5 ; net 40 − 5 = **35** ; lancement (délai 2) **semaine 3**. **R** : brut 40 × 2 = 80 en semaine 5 ; net 80 − 10 = **70** ; lancement (délai 1) **semaine 4**. **Y** : brut 70 × 36 = 2 520 en semaine 4 ; net 2 520 − 500 = **2 020** ; lancement **semaine 3**.
2. Commander **2 020 rayons en semaine 3**.

</details>

### Exercice 3 — Choisir un ERP

Une PME marocaine de 120 salariés, qui fabrique et exporte des pièces plastiques, travaille avec un logiciel comptable, des tableurs pour les stocks et la planification, et des bons de commande papier.

1. Citez trois problèmes probables de cette organisation.
2. Proposez trois critères de choix d'un ERP et deux conditions de réussite du projet.

<details><summary>Voir le corrigé</summary>

1. Ressaisies et erreurs entre tableurs et comptabilité ; stocks informatiques faux et ruptures ; aucune vision des besoins en matières (pas de MRP) ; délais de réponse aux clients ; traçabilité des lots insuffisante pour les clients automobiles.
2. Critères : couverture de la **production** et du **MRP**, **localisation marocaine** (TVA, déclarations, paie), coût total sur 5 ans (licences, intégration, maintenance), références dans le secteur, qualité de l'intégrateur. Conditions : implication de la **direction** et d'un chef de projet interne ; **nettoyage des données** de base avant la reprise ; **formation** des utilisateurs ; revue des processus plutôt que reproduction des habitudes.

</details>
`,
    qcm: [
      { q: "La caractéristique principale d'un ERP est :", choix: ["Un logiciel par service", "Une base de données unique partagée par toutes les fonctions", "L'absence de paramétrage", "Le développement sur mesure complet"], bonne: 1, explication: "Intégration des fonctions." },
      { q: "Un ERP est un progiciel, c'est-à-dire :", choix: ["Un logiciel développé sur mesure", "Un logiciel du marché que l'on paramètre", "Un tableur", "Un service de transport"], bonne: 1, explication: "L'entreprise adapte souvent ses processus." },
      { q: "La demande de pièces de rechange vendues aux clients est :", choix: ["Dépendante", "Indépendante", "Nulle", "Calculée par la nomenclature"], bonne: 1, explication: "Elle vient du marché." },
      { q: "La demande de pieds pour fabriquer des tables est :", choix: ["Indépendante", "Dépendante", "Aléatoire", "Saisonnière"], bonne: 1, explication: "Elle se calcule." },
      { q: "Le besoin net d'une période est :", choix: ["Besoin brut + stock", "Max(0 ; besoin brut − stock − réceptions programmées)", "Stock − besoin brut", "Besoin brut × délai"], bonne: 1, explication: "On ne lance que ce qui manque." },
      { q: "Un besoin net de 60 en semaine 7 avec un délai de 2 semaines donne un lancement en :", choix: ["Semaine 5", "Semaine 7", "Semaine 9", "Semaine 2"], bonne: 0, explication: "On décale du délai d'obtention." },
      { q: "Les besoins bruts d'un composant se calculent à partir :", choix: ["Des besoins bruts du parent", "Des lancements du parent multipliés par la quantité de la nomenclature", "Des ventes du composant", "Du stock du parent"], bonne: 1, explication: "À la même période que le lancement." },
      { q: "Le MRP II ajoute au MRP :", choix: ["La paie", "La prise en compte des capacités", "La publicité", "La douane"], bonne: 1, explication: "Manufacturing resource planning." },
      { q: "Une cause fréquente d'échec d'un projet ERP est :", choix: ["Un serveur trop rapide", "Des données de base de mauvaise qualité et une formation négligée", "Trop d'utilisateurs formés", "Un cahier des charges précis"], bonne: 1, explication: "Les causes sont surtout organisationnelles." },
      { q: "La nomenclature d'un produit indique :", choix: ["Son prix de vente", "La liste structurée de ses composants et quantités", "Ses clients", "Son délai de paiement"], bonne: 1, explication: "Organisée par niveaux." },
    ],
  },
  4: {
    titre: "Les logiciels d'entrepôt et de transport (WMS, TMS)",
    description: "WMS : réception, adressage, préparation, inventaire tournant, analyse ABC et dimensionnement ; TMS : planification, suivi et contrôle des factures.",
    resume: md`
## L'essentiel — WMS et TMS

- **WMS** : gère en temps réel réception, rangement, stockage, préparation, expédition, inventaires ; il sait **où** est chaque unité (l'ERP sait **combien**).
- Terminaux portables, scan à chaque geste, commande vocale.
- Adressage **fixe** (simple, espace mal utilisé) ou **dynamique** (meilleur remplissage, exige un WMS fiable).
- Préparation **par commande**, **par lot**, **par zone**, **marchandise vers l'homme** ; les déplacements dominent le temps.
- **ABC** : classer par valeur (ou fréquence) décroissante, cumuler ; A ≈ 80 % de la valeur avec peu d'articles.
- A près des quais, suivis de près ; C gérés simplement.
- Préparateurs = lignes / (productivité × heures), arrondi à l'**entier supérieur** ; exactitude des stocks = emplacements exacts / contrôlés.
- **Inventaire tournant** : compter chaque jour une partie des emplacements, les A plus souvent.
- **TMS** : chargements, tournées, choix des transporteurs, ordres, suivi, preuve de livraison, **contrôle des factures**, analyse des coûts et du CO₂.
`,
    exercices: md`
### Exercice 2 — Choisir une méthode de préparation

Pour chaque entrepôt, proposez une méthode de préparation : a) un site de vente en ligne de cosmétiques qui expédie 3 000 colis par jour de 1 à 3 articles ; b) un grossiste en matériaux qui prépare 40 commandes par jour de 30 lignes chacune ; c) un entrepôt de pièces de rechange de 25 000 références réparties sur 4 bâtiments.

<details><summary>Voir le corrigé</summary>

a) **Par lot (vagues)** : on prélève ensemble les articles de dizaines de commandes, puis on trie ; éventuellement automatisation « marchandise vers l'homme » si les volumes croissent.
b) **Par commande** : peu de commandes, chacune assez grande pour remplir un parcours.
c) **Par zone** : chaque préparateur maîtrise sa zone ; les commandes sont consolidées au départ.

</details>

### Exercice 3 — Gains d'un TMS

Un chargeur dépense 6 000 000 DH par an en transport. Un audit montre que 2 % du montant facturé correspond à des erreurs (tarifs non contractuels, surcharges indues) et que le taux de remplissage moyen des camions est de 70 %. Le TMS coûte 250 000 DH par an et doit permettre de détecter toutes les erreurs et de porter le remplissage à 80 %.

1. Estimez l'économie liée au contrôle des factures.
2. Estimez l'économie liée au remplissage (on admet que le coût est proportionnel au nombre de camions).
3. Le TMS est-il rentable ?

<details><summary>Voir le corrigé</summary>

1. 6 000 000 × 2 % = **120 000 DH**.
2. Pour un même volume, le nombre de camions est divisé par 80 / 70 : coût = 6 000 000 × 70 / 80 = 5 250 000 DH, soit **750 000 DH** économisés.
3. Gain ≈ 870 000 DH pour un coût de 250 000 DH : **rentable**, si les hypothèses de remplissage sont réalistes (contraintes de délais des clients).

</details>
`,
    qcm: [
      { q: "La différence principale entre un ERP et un WMS est que le WMS :", choix: ["Gère la comptabilité", "Connaît l'emplacement exact de chaque unité dans l'entrepôt", "Gère la paie", "Remplace les transporteurs"], bonne: 1, explication: "L'ERP connaît surtout les quantités et valeurs." },
      { q: "L'adressage dynamique consiste à :", choix: ["Réserver un emplacement par article", "Ranger chaque unité dans un emplacement libre adapté mémorisé par le WMS", "Ne jamais ranger", "Ranger par ordre alphabétique"], bonne: 1, explication: "Meilleure utilisation de l'espace." },
      { q: "La préparation par lot convient surtout :", choix: ["À de nombreuses petites commandes", "À quelques très grosses commandes", "Au vrac", "Aux conteneurs"], bonne: 0, explication: "On prélève ensemble puis on trie." },
      { q: "Dans une analyse ABC, la classe A regroupe :", choix: ["La majorité des articles et peu de valeur", "Peu d'articles et la majorité de la valeur", "Les articles les moins chers", "Les articles en rupture"], bonne: 1, explication: "Loi de Pareto." },
      { q: "On classe les articles ABC selon :", choix: ["Leur prix unitaire", "Leur valeur consommée ou leur fréquence de sortie", "Leur couleur", "Leur fournisseur"], bonne: 1, explication: "Le prix seul ne dit rien de l'activité." },
      { q: "9 000 lignes par jour, 100 lignes par heure, 7 heures de préparation : il faut au minimum :", choix: ["12 préparateurs", "13 préparateurs", "90 préparateurs", "9 préparateurs"], bonne: 1, explication: "9 000 / 700 = 12,9, arrondi à 13." },
      { q: "L'exactitude des stocks se mesure par :", choix: ["Le nombre d'articles", "Les emplacements exacts / les emplacements contrôlés", "La valeur du stock", "Le nombre de quais"], bonne: 1, explication: "Elle conditionne l'adressage dynamique." },
      { q: "L'inventaire tournant consiste à :", choix: ["Fermer l'entrepôt une semaine par an", "Compter régulièrement une partie des emplacements", "Ne jamais compter", "Compter uniquement les C"], bonne: 1, explication: "Les A plus souvent que les C." },
      { q: "Une fonction typique du TMS est :", choix: ["Le calcul de la paie", "Le contrôle des factures des transporteurs", "La gestion des emplacements", "La comptabilité générale"], bonne: 1, explication: "Tarifs, surcharges, poids taxable." },
      { q: "Le temps de préparation des commandes est surtout consommé par :", choix: ["Les déplacements", "L'impression", "La comptabilité", "Les réunions"], bonne: 0, explication: "D'où l'optimisation des parcours." },
    ],
  },
  5: {
    titre: "Les échanges de données et la dématérialisation",
    description: "EDI et normes EDIFACT (ORDERS, DESADV, INVOIC…), API et portails, cycle commande-facture, PortNet et BADR, sécurité, lois 09-08, 05-20 et 43-20.",
    resume: md`
## L'essentiel — EDI et dématérialisation

- **EDI** : échange d'ordinateur à ordinateur de documents **structurés et normalisés**, intégrés sans ressaisie.
- Norme **UN/EDIFACT** ; sous-ensemble GS1 **EANCOM** ; aussi XML, **API** (temps réel), portails web.
- Messages : **ORDERS**, ORDRSP, **DESADV** (avis d'expédition avec SSCC), RECADV, **INVOIC**, IFTMIN, IFTSTA, CUSDEC.
- Cycle dématérialisé : commande → confirmation → avis d'expédition → scan du SSCC → avis de réception → facture → rapprochement à trois voies.
- **BADR** : dédouanement électronique de l'ADII ; **PortNet** : guichet unique du commerce extérieur (opérateurs, ports, banques, contrôles).
- Sécurité : confidentialité, intégrité, authentification, non-répudiation, disponibilité.
- Maroc : **loi 09-08** (données personnelles, CNDP), **loi 05-20** (cybersécurité), **loi 43-20** (services de confiance, signature électronique) ; accord d'interchange.
- Économie = $N(c_{\text{papier}} - c_{\text{EDI}})$ − abonnement ; délai de récupération = coût du projet / économie annuelle.
`,
    exercices: md`
### Exercice 2 — Associer messages et situations

Quel message EDIFACT correspond à chaque situation ? a) Le transporteur signale que la palette a été livrée à 14 h ; b) le fournisseur annonce que trois palettes partent avec leur contenu détaillé ; c) l'enseigne commande 200 cartons ; d) le chargeur demande au transporteur d'enlever une marchandise ; e) le client indique qu'il a reçu 198 cartons au lieu de 200.

<details><summary>Voir le corrigé</summary>

a) **IFTSTA** ; b) **DESADV** ; c) **ORDERS** ; d) **IFTMIN** ; e) **RECADV**. L'écart de 2 cartons sera rapproché de la facture (INVOIC) avant paiement.

</details>

### Exercice 3 — Rentabilité d'un portail fournisseurs

Une centrale d'achat reçoit 8 000 factures par an de petits fournisseurs qui n'ont pas d'EDI. Un portail web où ils déposent leurs factures structurées coûterait 90 000 DH de mise en place et 30 000 DH par an. Le traitement d'une facture passerait de 30 DH à 12 DH.

1. Calculez l'économie annuelle et le délai de récupération.
2. Quelle limite présente le portail par rapport à l'EDI ?

<details><summary>Voir le corrigé</summary>

1. Économie = 8 000 × 18 − 30 000 = **114 000 DH** par an ; délai = 90 000 / 114 000 = **0,79 an** (environ 9 mois et demi).
2. Le fournisseur **saisit** encore ses données sur le portail : la saisie est déplacée chez lui (risque d'erreurs, charge de travail), alors que l'EDI relie directement les deux systèmes.

</details>
`,
    qcm: [
      { q: "L'EDI se caractérise par :", choix: ["L'envoi de PDF par courriel", "L'échange de documents structurés et normalisés d'ordinateur à ordinateur", "La saisie manuelle", "Le fax"], bonne: 1, explication: "Pas de ressaisie." },
      { q: "La norme EDI internationale développée sous l'égide des Nations unies est :", choix: ["EDIFACT", "GS1-128", "RFID", "ISO 9001"], bonne: 0, explication: "UN/EDIFACT." },
      { q: "Le message qui décrit le contenu des palettes expédiées est :", choix: ["ORDERS", "DESADV", "INVOIC", "RECADV"], bonne: 1, explication: "Avis d'expédition avec les SSCC." },
      { q: "Le message de facture est :", choix: ["IFTSTA", "INVOIC", "ORDRSP", "CUSDEC"], bonne: 1, explication: "Envoyé par le fournisseur." },
      { q: "Le rapprochement à trois voies compare :", choix: ["Trois transporteurs", "Commande, réception et facture", "Trois prix", "Trois entrepôts"], bonne: 1, explication: "Avant de payer." },
      { q: "PortNet est :", choix: ["Le système de dédouanement de l'ADII", "Le guichet unique national des procédures du commerce extérieur", "Un transporteur", "Un ERP"], bonne: 1, explication: "BADR est le système de la douane." },
      { q: "La loi marocaine sur la protection des données personnelles est :", choix: ["La loi 09-08", "La loi 28-07", "La loi 15-02", "La loi 17-99"], bonne: 0, explication: "Contrôlée par la CNDP." },
      { q: "La non-répudiation garantit que :", choix: ["Le message est lisible par tous", "L'émetteur ne peut pas nier avoir envoyé le message", "Le message est gratuit", "Le message est en couleur"], bonne: 1, explication: "Signature électronique, journaux." },
      { q: "Un projet coûte 150 000 DH et fait économiser 300 000 DH par an. Son délai de récupération est :", choix: ["2 ans", "6 mois", "1 an", "3 mois"], bonne: 1, explication: "150 000 / 300 000 = 0,5 an." },
      { q: "Une API se distingue surtout par :", choix: ["L'échange de données en temps réel entre applications", "L'impression de documents", "L'usage du fax", "L'absence de format"], bonne: 0, explication: "Très utilisée par les transporteurs et places de marché." },
    ],
  },
  6: {
    titre: "Pilotage, tableaux de bord et transformation numérique",
    description: "Tableau de bord logistique (rotation, couverture, OTIF, coûts), tour de contrôle, IoT, IA et blockchain, coût total de possession et changement.",
    resume: md`
## L'essentiel — Pilotage et transformation numérique

- **Tableau de bord** : peu d'indicateurs liés aux **objectifs**, avec cibles, seuils d'alerte, source, fréquence, responsable.
- Rotation = consommation annuelle / stock moyen ; **couverture** = 360 / rotation (en jours).
- Service (OTIF, délai), coût (par commande, % du CA), productivité, qualité ; montrer service et stock **ensemble**.
- **Tour de contrôle** : vision en temps réel de bout en bout, alertes, coordination.
- **IoT** : capteurs de température, chocs, GPS ; chaîne du froid.
- **IA** : prévision, optimisation, anomalies ; dépend de la qualité des données.
- **Blockchain** : registre partagé ; l'arrêt de TradeLens (2023) montre que l'adhésion des acteurs et les standards comptent plus que la technologie.
- **TCO** = licences + mise en place + matériel + maintenance + exploitation + formation, sur la durée ; sur site ou **SaaS**.
- Conduite du changement : expliquer, associer, former, accompagner, mesurer.
`,
    exercices: md`
### Exercice 2 — Rotation et couverture

Un entrepôt de pièces détachées a consommé 18 000 000 DH de pièces dans l'année ; le stock moyen est de 4 500 000 DH.

1. Calculez la rotation et la couverture.
2. La direction veut ramener la couverture à 60 jours. Quel stock moyen viser et quelle trésorerie cela libère-t-il ?

<details><summary>Voir le corrigé</summary>

1. Rotation = 18 000 000 / 4 500 000 = **4** ; couverture = 360 / 4 = **90 jours**.
2. Couverture de 60 jours : stock = 18 000 000 × 60 / 360 = **3 000 000 DH** ; trésorerie libérée = 4 500 000 − 3 000 000 = **1 500 000 DH**, à condition de ne pas dégrader le taux de service (réduire d'abord les stocks dormants et les articles C).

</details>

### Exercice 3 — Sur site ou SaaS ?

Un TMS sur site coûte 600 000 DH de licence, 150 000 DH de mise en place et 20 % de la licence par an en maintenance ; un TMS en SaaS coûte 100 000 DH de mise en place et 18 000 DH par mois.

1. Comparez les coûts totaux sur 3 ans et sur 6 ans.
2. Quels critères non financiers faut-il examiner ?

<details><summary>Voir le corrigé</summary>

1. Sur site : 750 000 + 120 000 par an ; 3 ans : **1 110 000 DH** ; 6 ans : **1 470 000 DH**. SaaS : 100 000 + 216 000 par an ; 3 ans : **748 000 DH** ; 6 ans : **1 396 000 DH**. Le SaaS est moins cher sur les deux durées, mais l'écart se réduit avec le temps (sur une durée plus longue, le sur site pourrait l'emporter).
2. Dépendance envers l'éditeur et réversibilité (récupérer ses données), localisation et protection des données (loi 09-08), disponibilité et connexion internet, rapidité de déploiement, mises à jour, compétences informatiques internes.

</details>
`,
    qcm: [
      { q: "Un bon tableau de bord comporte :", choix: ["Le plus d'indicateurs possible", "Peu d'indicateurs liés aux objectifs, avec des cibles", "Uniquement des données brutes", "Aucun seuil d'alerte"], bonne: 1, explication: "Il sert à décider." },
      { q: "La rotation d'un stock se calcule par :", choix: ["Stock moyen / consommation", "Consommation annuelle / stock moyen", "Stock × 360", "Ventes − achats"], bonne: 1, explication: "Nombre de renouvellements par an." },
      { q: "Une rotation de 9 correspond à une couverture de :", choix: ["9 jours", "40 jours", "90 jours", "360 jours"], bonne: 1, explication: "360 / 9 = 40." },
      { q: "Réduire fortement les stocks sans précaution risque de dégrader :", choix: ["La rotation", "Le taux de service", "La couverture", "Le TCO"], bonne: 1, explication: "D'où l'intérêt de suivre les deux ensemble." },
      { q: "Une tour de contrôle sert à :", choix: ["Surveiller un aéroport", "Voir en temps réel l'état des flux de bout en bout et réagir aux incidents", "Stocker des palettes", "Calculer la paie"], bonne: 1, explication: "Visibilité et coordination." },
      { q: "Les capteurs de température connectés servent surtout :", choix: ["À la chaîne du froid", "Au calcul de la TVA", "À la publicité", "Au dédouanement"], bonne: 0, explication: "Alertes et preuves de conformité." },
      { q: "L'arrêt de la plateforme TradeLens en 2023 illustre que :", choix: ["La blockchain est interdite", "L'adhésion des acteurs compte autant que la technologie", "Le transport maritime a disparu", "L'EDI ne fonctionne pas"], bonne: 1, explication: "Faute d'adhésion suffisante." },
      { q: "Le coût total de possession d'un logiciel comprend :", choix: ["La seule licence", "Licence, mise en place, matériel, maintenance, exploitation et formation", "Le seul abonnement du premier mois", "Le prix du serveur"], bonne: 1, explication: "Sur toute la durée d'utilisation." },
      { q: "Le mode SaaS signifie que le logiciel est :", choix: ["Installé sur les serveurs de l'entreprise", "Hébergé par l'éditeur et payé par abonnement", "Gratuit", "Développé en interne"], bonne: 1, explication: "Logiciel en tant que service." },
      { q: "Un facteur clé de réussite d'un nouveau système est :", choix: ["Imposer sans expliquer", "Associer et former les utilisateurs", "Supprimer la formation", "Démarrer sans tests"], bonne: 1, explication: "Conduite du changement." },
    ],
  },
};

export default chapitres;
