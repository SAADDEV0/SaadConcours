// Comptabilité des sociétés (S4) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Introduction et types de sociétés",
    description: "Contrat de société, formes de sociétés au Maroc (SNC, SCS, SARL, SA, SAS), capitaux propres CGNC, capital souscrit, appelé et versé, valeurs d'une action.",
    resume: md`
## L'essentiel — Introduction et types de sociétés

- **Société** (art. 982 du DOC) : mise en commun de biens ou de travail en vue de partager le bénéfice ; éléments : **apports** (numéraire, nature, industrie), **affectio societatis**, participation aux résultats.
- Personnalité morale dès l'**immatriculation** au registre du commerce.
- **Sociétés de personnes** : SNC (responsabilité indéfinie et solidaire), SCS (commandités et commanditaires). **Sociétés de capitaux** : SA (5 actionnaires min., capital min. 300 000 DH, 3 000 000 DH en cas d'appel public à l'épargne), SAS, SCA. **SARL** (1 à 50 associés, capital fixé par les statuts) : forme hybride.
- Capitaux propres CGNC : capital (1111) **moins** capital souscrit non appelé (1119), primes (112), réserve légale (1140), autres réserves (115), report à nouveau (116), résultat (119).
- Capital souscrit = appelé + non appelé ; appelé = versé + appelé non versé (3462, actif).
- Valeurs : **nominale** (capital / titres), **mathématique** (capitaux propres / titres), **intrinsèque** (actif net réel / titres), boursière, de rendement.
`,
    exercices: md`
### Exercice 2 — Quelle forme de société ?

Proposez une forme de société adaptée à chaque projet et justifiez :
1. Deux frères commerçants de Fès veulent s'associer pour un commerce de tissus ; ils se font entièrement confiance et veulent éviter toute entrée d'un tiers.
2. Une jeune diplômée de Rabat veut créer seule une agence de communication, sans engager ses biens personnels.
3. Un groupe de 12 investisseurs veut créer une unité industrielle avec 50 millions de DH et envisage une introduction en Bourse.
4. Un investisseur apporte des capitaux sans vouloir gérer, un associé gère et accepte une responsabilité illimitée.

<details><summary>Voir le corrigé</summary>

1. **SNC** : société de personnes, parts cessibles seulement avec l'accord unanime, responsabilité indéfinie et solidaire acceptée par des associés qui se font confiance (une SARL resterait possible pour limiter la responsabilité).
2. **SARL à associé unique** (ou SAS) : responsabilité limitée aux apports, capital fixé librement.
3. **SA** : forme adaptée aux grands projets et à l'appel public à l'épargne (capital minimum de 3 000 000 DH dans ce cas), actions librement négociables.
4. **Société en commandite (SCS ou SCA)** : le gérant est commandité (responsabilité indéfinie), l'investisseur est commanditaire (responsabilité limitée à son apport, pas de gestion).

</details>

### Exercice 3 — Capital souscrit, appelé, versé

La SA « Oriental Logistique » est constituée avec un capital de 1 200 000 DH (12 000 actions de 100 DH), souscrit en numéraire. Le quart a été libéré à la constitution. Un an plus tard, un deuxième quart est appelé ; les actionnaires en versent 90 %.

1. Calculez le capital souscrit, appelé, versé, appelé non versé et non appelé.
2. Comment ces montants apparaissent-ils au bilan ?

<details><summary>Voir le corrigé</summary>

**1)**
- Capital souscrit : **1 200 000 DH** ;
- Capital appelé : $1\,200\,000 \times 50\,\% = \mathbf{600\,000\ DH}$ ;
- Capital versé : $300\,000 + 300\,000 \times 90\,\% = \mathbf{570\,000\ DH}$ ;
- Capital appelé non versé : $600\,000 - 570\,000 = \mathbf{30\,000\ DH}$ ;
- Capital non appelé : $1\,200\,000 - 600\,000 = \mathbf{600\,000\ DH}$.

**2)** Au passif : capital social 1 200 000 DH, moins capital souscrit non appelé (1119) 600 000 DH, soit un capital appelé de 600 000 DH. À l'actif circulant : actionnaires, capital souscrit et appelé non versé (3462) 30 000 DH, créance sur les actionnaires retardataires.

</details>
`,
    qcm: [
      { q: "Selon le DOC, la société est un contrat par lequel les associés mettent en commun des biens ou leur travail en vue :", choix: ["D'obtenir un prêt", "De partager le bénéfice qui pourra en résulter", "De payer moins d'impôts", "D'employer des salariés"], bonne: 1, explication: "Article 982 du DOC." },
      { q: "Dans une SNC, les associés sont responsables des dettes sociales :", choix: ["Dans la limite de leurs apports", "De manière indéfinie et solidaire", "Pas du tout", "Pour moitié"], bonne: 1, explication: "Ce sont des commerçants tenus sur leurs biens personnels." },
      { q: "Le capital minimum d'une SA qui ne fait pas appel public à l'épargne est de :", choix: ["10 000 DH", "100 000 DH", "300 000 DH", "3 000 000 DH"], bonne: 2, explication: "3 000 000 DH en cas d'appel public à l'épargne." },
      { q: "Une SARL peut compter :", choix: ["De 1 à 50 associés", "Au moins 5 associés", "Au plus 7 associés", "Au moins 100 associés"], bonne: 0, explication: "Y compris un associé unique." },
      { q: "Le compte 1119 « Actionnaires, capital souscrit non appelé » :", choix: ["Figure à l'actif circulant", "Vient en déduction du capital au passif", "Est un compte de charges", "Figure en trésorerie"], bonne: 1, explication: "Il réduit le capital pour faire apparaître le capital appelé." },
      { q: "Le capital appelé non versé est enregistré dans le compte :", choix: ["1111", "3462", "4465", "1119"], bonne: 1, explication: "Actionnaires, capital souscrit et appelé non versé (actif)." },
      { q: "Capitaux propres 3 600 000 DH, 30 000 actions. Valeur mathématique ?", choix: ["100 DH", "120 DH", "360 DH", "30 DH"], bonne: 1, explication: "3 600 000 / 30 000 = 120 DH." },
      { q: "La valeur intrinsèque d'une action tient compte :", choix: ["Du seul capital social", "Des plus-values latentes et de l'élimination des non-valeurs", "Du cours de bourse", "Du dividende"], bonne: 1, explication: "C'est l'actif net réel par action." },
      { q: "Un apport en industrie dans une SA :", choix: ["Augmente le capital", "Ne concourt pas à la formation du capital", "Est obligatoire", "Est enregistré en 1111"], bonne: 1, explication: "Seuls les apports en numéraire et en nature forment le capital." },
      { q: "La société acquiert la personnalité morale :", choix: ["À la signature des statuts", "À son immatriculation au registre du commerce", "Au premier bénéfice", "À la première assemblée"], bonne: 1, explication: "Elle devient alors sujet de droit." },
    ],
  },

  2: {
    titre: "La constitution des sociétés",
    description: "Constitution d'une société : souscription, libération, apports en nature, appels de fonds, actionnaires défaillants et frais, avec écritures CGNC.",
    resume: md`
## L'essentiel — La constitution des sociétés

- SA (loi 17-95) : numéraire libéré d'**au moins un quart** à la souscription, solde appelé dans les **3 ans** ; apports en **nature** libérés **intégralement**, évalués par un commissaire aux apports ; fonds sur compte bloqué jusqu'à l'immatriculation.
- **Souscription** : D **3461** (appelé) + D **1119** (non appelé) / C **1111** (souscrit total).
- **Libération** : D 5141 (numéraire) ou comptes d'actif (nature) / C 3461.
- Apport d'un fonds de commerce avec passif : actions pour l'**apport net** (actifs − dettes reprises).
- **Appel ultérieur** : D **3462** / C 1119 ; versement : D 5141 / C 3462 ; les **défaillants** restent en 3462.
- **Frais de constitution** : D 2111 (+ TVA récupérable) / C 5141 ; amortis sur 5 ans au plus (D 6191 / C 28111), ou en charges.
- Toujours vérifier : apport en nature = nombre d'actions × nominal ; bilan de départ équilibré.
`,
    exercices: md`
### Exercice 2 — Constitution d'une SARL

La SARL « Nour Informatique » (Tanger) est constituée par trois associés avec un capital de 300 000 DH (3 000 parts de 100 DH) :
- Amine apporte 150 000 DH en numéraire ;
- Salma apporte du matériel informatique évalué à 90 000 DH ;
- Karim apporte 60 000 DH en numéraire.

Les apports en numéraire sont libérés de moitié ; le solde est appelé et versé six mois plus tard.

1. Combien de parts reçoit chaque associé ?
2. Passez les écritures de souscription et de libération, puis de l'appel et du versement du solde.

<details><summary>Voir le corrigé</summary>

**1)** Amine : 1 500 parts ; Salma : 900 parts ; Karim : 600 parts.

**2)** Numéraire : 210 000 DH, dont 105 000 DH appelés.

| Opération | Débit | Crédit |
|---|---|---|
| Souscription | 3461 : 105 000 + 90 000 = 195 000 ; 1119 : 105 000 | 1111 : 300 000 |
| Libération du numéraire | 5141 : 105 000 | 3461 : 105 000 |
| Apport du matériel | 2355 Matériel informatique : 90 000 | 3461 : 90 000 |
| Appel du solde | 3462 : 105 000 | 1119 : 105 000 |
| Versement | 5141 : 105 000 | 3462 : 105 000 |

</details>

### Exercice 3 — Actionnaire défaillant et vente de ses actions

Dans une SA, un actionnaire détenant 1 000 actions de 100 DH (libérées du quart) ne verse pas le troisième quart appelé. Après mise en demeure, ses actions sont vendues 90 DH chacune (non libérées des deux derniers quarts restants pour l'acheteur, qui prend en charge les versements futurs). On admet, pour simplifier, que le prix de vente couvre d'abord la somme due, puis 1 500 DH d'intérêts de retard et 500 DH de frais, le solde étant rendu à l'actionnaire.

1. Quelle somme l'actionnaire devait-il verser ?
2. Comment le prix de vente est-il réparti ?

<details><summary>Voir le corrigé</summary>

**1)** Troisième quart : $1\,000 \times 25 = \mathbf{25\,000\ DH}$, resté au débit du compte 3462.

**2)** Prix de vente : $1\,000 \times 90 = 90\,000$ DH, réparti ainsi : somme due 25 000 DH (solde du compte 3462) ; intérêts de retard 1 500 DH (produit financier pour la société) ; frais de vente 500 DH (remboursement des frais engagés) ; solde restitué à l'actionnaire défaillant : $90\,000 - 25\,000 - 1\,500 - 500 = \mathbf{63\,000\ DH}$.

</details>
`,
    qcm: [
      { q: "Dans une SA, les actions de numéraire doivent être libérées à la souscription d'au moins :", choix: ["La totalité", "La moitié", "Le quart", "Le dixième"], bonne: 2, explication: "Le solde doit être appelé dans les trois ans." },
      { q: "Les apports en nature sont libérés :", choix: ["Du quart", "De moitié", "Intégralement dès l'émission", "Dans les trois ans"], bonne: 2, explication: "Ils sont évalués par un commissaire aux apports." },
      { q: "L'écriture de souscription crédite le compte :", choix: ["3461", "1111 Capital social", "5141", "1119"], bonne: 1, explication: "Le capital est crédité pour le total souscrit." },
      { q: "La partie du capital souscrit non appelée est débitée au compte :", choix: ["3462", "1119", "4465", "2111"], bonne: 1, explication: "Actionnaires, capital souscrit non appelé." },
      { q: "Lors d'un appel de fonds, on débite :", choix: ["3461 et on crédite 1111", "3462 et on crédite 1119", "5141 et on crédite 1111", "1119 et on crédite 3462"], bonne: 1, explication: "Le capital non appelé devient appelé non versé." },
      { q: "Fonds de commerce apporté : actifs 900 000, dettes reprises 200 000. Nombre d'actions de 100 DH à remettre ?", choix: ["9 000", "7 000", "11 000", "2 000"], bonne: 1, explication: "Apport net 700 000 / 100 = 7 000 actions." },
      { q: "Les frais de constitution sont comptabilisés au compte :", choix: ["6111", "2111 Frais de constitution", "1111", "4411"], bonne: 1, explication: "Immobilisation en non-valeur, ou charges de l'exercice." },
      { q: "Les frais de constitution sont amortis sur une durée maximale de :", choix: ["1 an", "3 ans", "5 ans", "10 ans"], bonne: 2, explication: "Comme les autres immobilisations en non-valeur." },
      { q: "Un actionnaire qui ne verse pas les fonds appelés reste débiteur au compte :", choix: ["1119", "3462", "4463", "1111"], bonne: 1, explication: "Créance de la société sur l'actionnaire." },
      { q: "Après la libération des apports appelés, le compte 3461 est :", choix: ["Créditeur", "Soldé", "Débiteur du capital non appelé", "Transféré en 1111"], bonne: 1, explication: "Il ne sert qu'au transit des apports." },
    ],
  },

  3: {
    titre: "L'affectation du résultat",
    description: "Affectation du résultat : réserve légale, bénéfice distribuable, premier dividende, superdividende, report à nouveau et retenue à la source.",
    resume: md`
## L'essentiel — L'affectation du résultat

- Décidée par l'**assemblée générale ordinaire** dans les 6 mois suivant la clôture.
- **Réserve légale** : 5 % du bénéfice diminué des pertes antérieures, jusqu'à **10 % du capital** (dotation limitée au besoin pour atteindre le plafond).
- **Bénéfice distribuable** = bénéfice − pertes antérieures − réserve légale − réserves statutaires + report à nouveau créditeur.
- **Premier dividende** : % du capital **libéré et non amorti**, **prorata temporis** pour les actions libérées en cours d'exercice.
- **Superdividende** : reste réparti également, arrondi ; reliquat en **report à nouveau**.
- Écriture : D 1191 (et 1161 ancien) / C 1169, 1140, 115, **4465**, 1161.
- Paiement : D 4465 / C 4452 (retenue à la source : 11,25 % en 2026 pour les personnes physiques) / C 5141.
- Perte : D 1169 ou réserves / C 1199 ; capitaux propres < **quart du capital** : l'AGE doit statuer sur la dissolution.
- Jetons de présence = charges ; tantièmes = prélèvement sur le bénéfice.
`,
    exercices: md`
### Exercice 2 — Plafond de la réserve légale

Une SA au capital de 1 000 000 DH a une réserve légale de 96 000 DH. Son bénéfice est de 200 000 DH ; aucun report à nouveau. Statuts : premier dividende de 6 % (capital entièrement libéré, 10 000 actions), superdividende arrondi au dirham inférieur.

1. Calculez la dotation à la réserve légale.
2. Calculez le bénéfice distribuable, les dividendes par action et le report à nouveau.

<details><summary>Voir le corrigé</summary>

**1)** 5 % × 200 000 = 10 000 DH, mais le plafond est de 100 000 DH : la dotation est limitée à **4 000 DH**.

**2)** Bénéfice distribuable : $200\,000 - 4\,000 = 196\,000$ DH. Premier dividende : $1\,000\,000 \times 6\,\% = 60\,000$ DH (6 DH par action). Reste : 136 000 DH, soit 13,60 DH par action : superdividende de **13 DH** (130 000 DH). Report à nouveau : **6 000 DH**. Dividende total : **19 DH** par action.

</details>

### Exercice 3 — Une perte importante

La SA « Rif Pêche » (Al Hoceima) a un capital de 2 000 000 DH et des réserves facultatives de 300 000 DH. L'exercice N se solde par une perte de 1 900 000 DH.

1. L'assemblée décide d'imputer la perte d'abord sur les réserves facultatives, le solde en report à nouveau. Passez l'écriture.
2. Calculez les capitaux propres après affectation. Quelle obligation légale s'impose ?

<details><summary>Voir le corrigé</summary>

**1)**

| Compte | Débit | Crédit |
|---|---:|---:|
| 1152 Réserves facultatives | 300 000 | |
| 1169 Report à nouveau (solde débiteur) | 1 600 000 | |
| 1199 Résultat net de l'exercice (solde débiteur) | | 1 900 000 |

**2)** Capitaux propres : $2\,000\,000 + 300\,000 - 1\,900\,000 = \mathbf{400\,000\ DH}$, inférieurs au quart du capital (500 000 DH). Les dirigeants doivent convoquer l'**assemblée générale extraordinaire** pour décider s'il y a lieu de **dissoudre** la société ; si elle ne la dissout pas, la société devra, dans les délais légaux, reconstituer ses capitaux propres ou **réduire son capital** du montant des pertes (chapitre 6).

</details>
`,
    qcm: [
      { q: "La dotation annuelle à la réserve légale est de :", choix: ["10 % du bénéfice", "5 % du bénéfice diminué des pertes antérieures", "5 % du capital", "20 % du bénéfice"], bonne: 1, explication: "Jusqu'à ce que la réserve atteigne 10 % du capital." },
      { q: "La réserve légale cesse d'être obligatoire lorsqu'elle atteint :", choix: ["5 % du capital", "10 % du capital", "25 % du capital", "100 % du capital"], bonne: 1, explication: "Elle redevient obligatoire si elle passe sous ce seuil." },
      { q: "Bénéfice 400 000, report à nouveau débiteur 40 000, réserve légale 18 000. Bénéfice distribuable ?", choix: ["342 000", "382 000", "400 000", "360 000"], bonne: 0, explication: "400 000 − 40 000 − 18 000 = 342 000." },
      { q: "Le premier dividende se calcule sur :", choix: ["Le nominal de toutes les actions", "Le capital libéré et non amorti", "Le bénéfice", "La valeur boursière"], bonne: 1, explication: "Une action libérée de moitié reçoit la moitié." },
      { q: "Action de 100 DH libérée de moitié le 1er juillet, premier dividende 6 %. Montant pour l'exercice civil ?", choix: ["6 DH", "3 DH", "1,50 DH", "0,75 DH"], bonne: 2, explication: "50 × 6 % × 6/12 = 1,50 DH." },
      { q: "Les dividendes votés s'enregistrent au crédit du compte :", choix: ["1161", "4465 Associés, dividendes à payer", "5141", "1140"], bonne: 1, explication: "C'est une dette envers les associés." },
      { q: "Les jetons de présence versés aux administrateurs sont :", choix: ["Une affectation du bénéfice", "Une charge de l'exercice", "Une réserve", "Un dividende"], bonne: 1, explication: "À la différence des tantièmes." },
      { q: "Le reliquat non distribué après superdividende est porté :", choix: ["En réserve légale", "En report à nouveau", "En capital", "En charges"], bonne: 1, explication: "Report à nouveau créditeur (1161)." },
      { q: "Une perte est affectée par :", choix: ["D 1199 / C 1169", "D 1169 (ou réserves) / C 1199", "D 4465 / C 1199", "D 1111 / C 5141"], bonne: 1, explication: "On solde le résultat débiteur." },
      { q: "Lorsque les capitaux propres deviennent inférieurs au quart du capital d'une SA :", choix: ["La société est automatiquement dissoute", "L'AGE doit décider s'il y a lieu de dissoudre la société", "Les dividendes sont doublés", "Rien ne se passe"], bonne: 1, explication: "Loi 17-95." },
    ],
  },

  4: {
    titre: "L'augmentation de capital par apports nouveaux",
    description: "Augmentation de capital en numéraire ou en nature : prix d'émission, prime, droit de souscription, parité et écritures, exercices corrigés.",
    resume: md`
## L'essentiel — Augmentation de capital par apports nouveaux

- Motifs : financer sans s'endetter, accueillir des associés, restructurer. Décision de l'**AGE**.
- **Prix d'émission** $E$ ≥ nominal ; **prime d'émission** = $E$ − nominal, libérée **intégralement** ; nominal libéré d'au moins le **quart**.
- $V_{après} = \dfrac{N V_{avant} + n E}{N + n}$ ; **droit de souscription** $DS = V_{avant} - V_{après} = \dfrac{n}{N+n}(V_{avant} - E)$ ; **parité** $N/n$ droits pour une action nouvelle.
- Le DS préserve la richesse de l'actionnaire ancien (souscrire ou vendre ses droits).
- Souscription : D 3461 (appelé + prime) + D 1119 (non appelé) / C 1111 (nominal) + C **1121** (prime) ; libération : D 5141 / C 3461.
- Frais : 2113 (non-valeur), imputation sur la prime (D 1121) ou charges. Versements anticipés : **4462**.
- Apports en nature : **prime d'apport** (1123), libération intégrale.
`,
    exercices: md`
### Exercice 2 — Augmentation par apport en nature

Une SA dont l'action (nominal 100 DH) vaut 160 DH augmente son capital en rémunérant l'apport d'un immeuble évalué à 480 000 DH par le commissaire aux apports.

1. Combien d'actions nouvelles faut-il émettre ? Quel est le montant de la prime d'apport ?
2. Passez les écritures.

<details><summary>Voir le corrigé</summary>

**1)** $480\,000 / 160 = \mathbf{3\,000}$ actions ; prime d'apport : $3\,000 \times (160 - 100) = \mathbf{180\,000\ DH}$.

**2)**

| Compte | Débit | Crédit |
|---|---:|---:|
| 3461 Associés, comptes d'apport en société | 480 000 | |
| 1111 Capital social | | 300 000 |
| 1123 Primes d'apport | | 180 000 |
| 2321 Bâtiments | 480 000 | |
| 3461 Associés, comptes d'apport en société | | 480 000 |

</details>

### Exercice 3 — Droit de souscription et conversion de dettes

1. Une action cotée vaut 250 DH. La société émet des actions nouvelles à 200 DH, à raison de 1 action nouvelle pour 3 anciennes. Calculez la valeur théorique après l'opération et la valeur du droit de souscription.
2. Pour se désendetter, une autre société convertit une dette fournisseur de 150 000 DH en 1 000 actions de nominal 100 DH. Passez l'écriture et commentez l'effet sur le fonds de roulement.

<details><summary>Voir le corrigé</summary>

**1)** Pour 3 anciennes et 1 nouvelle : $V_{après} = \dfrac{3 \times 250 + 1 \times 200}{4} = \mathbf{237{,}50\ DH}$ ; $DS = 250 - 237{,}50 = \mathbf{12{,}50\ DH}$ (ou $\dfrac{1}{4} \times (250 - 200)$).

**2)** Prix d'émission implicite : 150 DH, soit une prime de 50 DH par action.

| Compte | Débit | Crédit |
|---|---:|---:|
| 4411 Fournisseurs | 150 000 | |
| 1111 Capital social | | 100 000 |
| 1121 Primes d'émission | | 50 000 |

(On peut aussi transiter par le compte 3461.) Aucune trésorerie n'entre, mais une dette à court terme devient du capital : le **fonds de roulement augmente** de 150 000 DH et l'autonomie financière s'améliore.

</details>
`,
    qcm: [
      { q: "La prime d'émission est égale à :", choix: ["Prix d'émission − nominal", "Nominal − prix d'émission", "Valeur réelle − nominal", "Prix d'émission × nombre d'actions"], bonne: 0, explication: "Elle est créditée au compte 1121." },
      { q: "Lors d'une augmentation de capital d'une SA, la prime d'émission doit être libérée :", choix: ["Du quart", "De moitié", "Intégralement à la souscription", "Dans les trois ans"], bonne: 2, explication: "Seul le nominal peut être libéré partiellement." },
      { q: "N = 30 000 actions à 150 DH, n = 10 000 actions émises à 110 DH. Valeur après ?", choix: ["130 DH", "140 DH", "145 DH", "120 DH"], bonne: 1, explication: "(4 500 000 + 1 100 000) / 40 000 = 140 DH." },
      { q: "Dans l'exemple précédent, la valeur du droit de souscription est :", choix: ["10 DH", "40 DH", "30 DH", "5 DH"], bonne: 0, explication: "150 − 140 = 10 DH." },
      { q: "La parité de souscription pour 30 000 anciennes et 10 000 nouvelles est :", choix: ["1 pour 3", "3 droits pour 1 action nouvelle", "4 pour 1", "10 pour 3"], bonne: 1, explication: "Chaque action ancienne donne un droit." },
      { q: "Le rôle du droit préférentiel de souscription est :", choix: ["D'augmenter les dividendes", "De protéger la richesse des anciens actionnaires", "De réduire le capital", "De payer les frais"], bonne: 1, explication: "Il compense la baisse de valeur de l'action." },
      { q: "À la souscription, le capital social est crédité :", choix: ["Du prix d'émission", "Du nominal des actions nouvelles", "De la seule partie libérée", "De la prime"], bonne: 1, explication: "La prime va au compte 1121." },
      { q: "Les versements reçus avant la réalisation de l'augmentation sont enregistrés au compte :", choix: ["4462", "4465", "1119", "3462"], bonne: 0, explication: "Associés, versements reçus sur augmentation de capital." },
      { q: "Les frais d'augmentation de capital peuvent être :", choix: ["Uniquement portés en charges", "Imputés sur la prime d'émission, immobilisés (2113) ou portés en charges", "Ajoutés au capital", "Déduits du nominal"], bonne: 1, explication: "Trois traitements sont admis." },
      { q: "Pour un apport en nature, la prime s'appelle :", choix: ["Prime d'émission", "Prime d'apport", "Prime de fusion", "Prime de remboursement"], bonne: 1, explication: "Compte 1123." },
    ],
  },

  5: {
    titre: "L'augmentation de capital par incorporation de réserves",
    description: "Incorporation de réserves au capital : actions gratuites, élévation du nominal, droit d'attribution, parité, écritures et exercices corrigés.",
    resume: md`
## L'essentiel — Incorporation de réserves

- Opération **purement comptable** : réserves, primes, report à nouveau transférés au **capital** ; **capitaux propres inchangés**, aucune trésorerie.
- Réalisée par **actions gratuites** ou par **élévation du nominal**.
- Motifs : capital plus représentatif, garantie des créanciers, cours plus accessible, récompense sans décaissement.
- Comptes incorporables : primes (1121, 1123), réserves facultatives et statutaires, réserve légale, report à nouveau créditeur.
- $V_{après} = \dfrac{N V_{avant}}{N + n}$ ; **droit d'attribution** $DA = V_{avant} - V_{après} = V_{avant}\,\dfrac{n}{N+n}$ ; parité $N/n$.
- Écriture : D réserves (1121, 1152, 1161…) / C **1111**.
- La réserve légale se compare ensuite au **nouveau** capital.
- Élévation du nominal : pas d'actions nouvelles, donc pas de droit d'attribution.
`,
    exercices: md`
### Exercice 2 — Élévation du nominal

Une SA a 20 000 actions de 100 DH et 1 200 000 DH de réserves facultatives. Elle porte le nominal de ses actions à 125 DH par incorporation de réserves.

1. Quel montant de réserves est incorporé ? Passez l'écriture.
2. La valeur mathématique de l'action change-t-elle ? Y a-t-il un droit d'attribution ?

<details><summary>Voir le corrigé</summary>

**1)** $20\,000 \times (125 - 100) = \mathbf{500\,000\ DH}$. Écriture : D 1152 Réserves facultatives 500 000 / C 1111 Capital social 500 000.

**2)** Non : les capitaux propres ($2\,000\,000 + 1\,200\,000 = 3\,200\,000$ DH) et le nombre d'actions (20 000) sont inchangés : la valeur mathématique reste de **160 DH**. Aucune action nouvelle n'est créée : il n'y a **pas de droit d'attribution**.

</details>

### Exercice 3 — Droit d'attribution sur une valeur cotée

Une société cotée à la Bourse de Casablanca, dont l'action vaut 360 DH, attribue 1 action gratuite pour 3 anciennes.

1. Calculez le cours théorique après l'opération et la valeur du droit d'attribution.
2. Un actionnaire détient 100 actions. Combien d'actions gratuites reçoit-il ? Vérifiez que sa richesse est inchangée.

<details><summary>Voir le corrigé</summary>

**1)** $V_{après} = \dfrac{3 \times 360}{4} = \mathbf{270\ DH}$ ; $DA = 360 - 270 = \mathbf{90\ DH}$.

**2)** $\lfloor 100/3 \rfloor = 33$ actions gratuites (99 droits) ; 1 droit restant, vendu 90 DH. Richesse : $133 \times 270 + 90 = 35\,910 + 90 = 36\,000$ DH $= 100 \times 360$ ✔.

</details>
`,
    qcm: [
      { q: "Une augmentation de capital par incorporation de réserves :", choix: ["Apporte de la trésorerie", "Ne modifie pas le total des capitaux propres", "Augmente les dettes", "Diminue le capital"], bonne: 1, explication: "Seule la composition des capitaux propres change." },
      { q: "L'écriture d'incorporation de réserves est :", choix: ["D 5141 / C 1111", "D Réserves / C 1111 Capital social", "D 1111 / C Réserves", "D 3461 / C 1111"], bonne: 1, explication: "Transfert d'un compte de réserves au capital." },
      { q: "N = 40 000 actions valant 150 DH, 10 000 actions gratuites. Valeur après ?", choix: ["150 DH", "120 DH", "125 DH", "100 DH"], bonne: 1, explication: "40 000 × 150 / 50 000 = 120 DH." },
      { q: "Dans l'exemple précédent, le droit d'attribution vaut :", choix: ["30 DH", "25 DH", "50 DH", "0 DH"], bonne: 0, explication: "150 − 120 = 30 DH." },
      { q: "La parité pour 40 000 anciennes et 10 000 gratuites est :", choix: ["1 pour 4", "4 pour 1", "10 pour 4", "1 pour 1"], bonne: 0, explication: "1 action gratuite pour 4 anciennes (4 droits)." },
      { q: "Peut-on incorporer la prime d'émission au capital ?", choix: ["Non, jamais", "Oui", "Seulement dans une SNC", "Seulement si elle est négative"], bonne: 1, explication: "Les primes font partie des sommes incorporables." },
      { q: "Après incorporation, la réserve légale doit être comparée :", choix: ["À l'ancien capital", "Au nouveau capital", "Au résultat", "Aux dettes"], bonne: 1, explication: "La dotation peut redevenir obligatoire." },
      { q: "Une élévation du nominal par incorporation de réserves crée :", choix: ["Des droits d'attribution", "Aucun droit d'attribution", "Des droits de souscription", "Des obligations"], bonne: 1, explication: "Le nombre d'actions ne change pas." },
      { q: "L'effet sur la trésorerie et le fonds de roulement est :", choix: ["Positif", "Négatif", "Nul", "Variable"], bonne: 2, explication: "Aucun flux n'intervient." },
      { q: "Pour l'actionnaire, l'attribution d'actions gratuites :", choix: ["L'enrichit du montant incorporé", "Laisse sa richesse inchangée", "L'appauvrit", "Est soumise à la TVA"], bonne: 1, explication: "La baisse de valeur est compensée par les actions reçues." },
    ],
  },

  6: {
    titre: "La réduction de capital",
    description: "Réduction de capital : apurement des pertes, remboursement, rachat d'actions, amortissement du capital et coup d'accordéon, exercices corrigés.",
    resume: md`
## L'essentiel — La réduction de capital

- Décidée par l'**AGE**, dans le respect de l'égalité des actionnaires.
- **Motivée par des pertes** : pas de trésorerie, capitaux propres inchangés ; réserves utilisées d'abord ; D 1152 + D 1111 / C 1169 ; par baisse du nominal ou regroupement d'actions.
- **Non motivée par des pertes** (remboursement, rachat) : sortie de trésorerie, droit d'**opposition** des créanciers ; D 1111 / C **4461**, puis D 4461 / C 5141.
- **Rachat pour annulation** : D 1111 (nominal) + D réserves (excédent du prix) / C 5141.
- Capitaux propres < **quart du capital** : l'AGE statue sur la dissolution ; sinon reconstitution ou réduction dans les délais.
- Sous le **minimum légal** : réduction suivie d'une augmentation (**coup d'accordéon**), avec dilution des anciens actionnaires.
- **Amortissement du capital** : remboursement du nominal sur réserves sans réduire le capital (actions de jouissance).
`,
    exercices: md`
### Exercice 2 — Rembourser un capital excédentaire

Une SA dispose d'une trésorerie abondante et d'un capital de 3 000 000 DH (30 000 actions de 100 DH). L'AGE décide de rembourser 20 DH par action. Les créanciers ne forment pas opposition.

1. Calculez la réduction de capital et le nouveau nominal.
2. Passez les écritures de réduction et de remboursement.

<details><summary>Voir le corrigé</summary>

**1)** Réduction : $30\,000 \times 20 = \mathbf{600\,000\ DH}$ ; nouveau nominal : **80 DH** ; nouveau capital : 2 400 000 DH (au-dessus du minimum légal).

**2)**

| Compte | Débit | Crédit |
|---|---:|---:|
| 1111 Capital social | 600 000 | |
| 4461 Associés, capital à rembourser | | 600 000 |
| 4461 Associés, capital à rembourser | 600 000 | |
| 5141 Banques | | 600 000 |

</details>

### Exercice 3 — Racheter et annuler ses actions

Une SA (capital 5 000 000 DH, 50 000 actions de 100 DH ; réserves facultatives 900 000 DH) rachète 2 000 de ses actions à 130 DH pour les annuler.

1. Passez l'écriture de rachat et d'annulation.
2. Un actionnaire qui détenait 4 800 actions et n'a pas vendu : quelle part du capital détient-il avant et après ?

<details><summary>Voir le corrigé</summary>

**1)**

| Compte | Débit | Crédit |
|---|---:|---:|
| 1111 Capital social ($2\,000 \times 100$) | 200 000 | |
| 1152 Réserves facultatives ($2\,000 \times 30$) | 60 000 | |
| 5141 Banques ($2\,000 \times 130$) | | 260 000 |

**2)** Avant : $4\,800 / 50\,000 = 9{,}6\,\%$ ; après : $4\,800 / 48\,000 = \mathbf{10\,\%}$. Le rachat augmente mécaniquement la part des actionnaires restants (effet relutif).

</details>
`,
    qcm: [
      { q: "Une réduction de capital motivée par des pertes :", choix: ["Entraîne une sortie de trésorerie", "N'entraîne aucune sortie de trésorerie", "Augmente les capitaux propres", "Est décidée par l'AGO"], bonne: 1, explication: "On remplace une perte par une baisse du capital." },
      { q: "L'écriture d'apurement des pertes par réduction du capital est :", choix: ["D 1169 / C 1111", "D 1111 / C 1169", "D 1111 / C 5141", "D 4461 / C 1111"], bonne: 1, explication: "Le capital est débité, le report à nouveau débiteur crédité." },
      { q: "Avant de réduire le capital pour pertes, on utilise en priorité :", choix: ["Les dettes", "Les réserves disponibles", "La trésorerie", "Les provisions"], bonne: 1, explication: "Les réserves absorbent les pertes avant le capital." },
      { q: "Lors d'une réduction non motivée par des pertes, les créanciers peuvent :", choix: ["Voter à l'AGE", "Former opposition", "Exiger des dividendes", "Rien faire"], bonne: 1, explication: "Leur garantie diminue." },
      { q: "Le compte 4461 est intitulé :", choix: ["Associés, dividendes à payer", "Associés, capital à rembourser", "Comptes courants d'associés", "Capital souscrit non appelé"], bonne: 1, explication: "Dette envers les associés lors d'un remboursement." },
      { q: "Le coup d'accordéon consiste à :", choix: ["Distribuer des réserves", "Réduire le capital puis l'augmenter aussitôt", "Fusionner deux sociétés", "Émettre des obligations"], bonne: 1, explication: "Souvent pour apurer les pertes et accueillir un investisseur." },
      { q: "L'amortissement du capital :", choix: ["Réduit le capital", "Rembourse le nominal sur réserves sans réduire le capital", "Est une dotation aux amortissements", "Augmente le capital"], bonne: 1, explication: "Les actions deviennent des actions de jouissance." },
      { q: "Rachat de 1 000 actions (nominal 100) à 150 DH pour annulation. Montant imputé sur les réserves ?", choix: ["150 000", "100 000", "50 000", "0"], bonne: 2, explication: "1 000 × (150 − 100) = 50 000 DH." },
      { q: "Capital 1 000 000 DH, 10 000 actions ; pertes à apurer 300 000 DH, pas de réserves. Nouveau nominal ?", choix: ["30 DH", "70 DH", "100 DH", "130 DH"], bonne: 1, explication: "100 − 300 000 / 10 000 = 70 DH." },
      { q: "Une SA peut réduire son capital sous le minimum légal :", choix: ["Librement", "Seulement si la réduction est suivie d'une augmentation qui le ramène au minimum", "Jamais, même avec une augmentation", "Sur décision du directeur général"], bonne: 1, explication: "C'est le principe du coup d'accordéon." },
    ],
  },

  7: {
    titre: "Les emprunts obligataires",
    description: "Emprunt obligataire en comptabilité : émission, prime de remboursement, coupons, intérêts courus, conversion et remboursement, exercices corrigés.",
    resume: md`
## L'essentiel — Les emprunts obligataires en comptabilité

- $N$ obligations, nominal $C$, prix d'émission $E$, prix de remboursement $R$, coupon $C \times i$.
- **Émission** : D 5141 ($N \times E$) + D **2130** Primes de remboursement ($N(R - E)$) / C **1410** Emprunts obligataires ($N \times R$).
- **Frais d'émission** : 2125 (charges à répartir) ou charges ; amortis sur la durée (6191 / 2812).
- **Amortissement de la prime** : D **6391** / C **2813**, linéaire ou au prorata des intérêts, **prorata temporis** la 1re année.
- **Coupon** : D 6311 / C 5141 ; **intérêts courus** à la clôture : D 6311 / C **4493**, extournés à l'ouverture.
- **Remboursement** : D 1410 / C 5141 ($N \times R$ in fine, ou par séries tirées au sort).
- Bilan : 1410 en dettes de financement ; 2130 en non-valeurs (déduite des capitaux propres par l'analyste).
`,
    exercices: md`
### Exercice 2 — Remboursement par séries égales

Le 1ᵉʳ janvier N, une SA émet 4 000 obligations de nominal 500 DH, au prix de 490 DH, remboursables au pair (500 DH) par quarts égaux à la fin de chaque année pendant 4 ans ; taux 7 %.

1. Passez l'écriture d'émission.
2. Présentez, pour chaque année, le coupon, le remboursement et la dotation à l'amortissement de la prime (amortie au prorata des intérêts de chaque année).

<details><summary>Voir le corrigé</summary>

**1)** D 5141 1 960 000 ; D 2130 40 000 / C 1410 2 000 000.

**2)** Coupon : 35 DH par obligation vivante. Remboursement annuel : 1 000 obligations × 500 = 500 000 DH.

| Année | Obligations vivantes | Coupons | Remboursement | Part des intérêts | Dotation (prime) |
|:--:|---:|---:|---:|---:|---:|
| N | 4 000 | 140 000 | 500 000 | 4/10 | 16 000 |
| N+1 | 3 000 | 105 000 | 500 000 | 3/10 | 12 000 |
| N+2 | 2 000 | 70 000 | 500 000 | 2/10 | 8 000 |
| N+3 | 1 000 | 35 000 | 500 000 | 1/10 | 4 000 |
| **Total** | | **350 000** | **2 000 000** | | **40 000** |

Total des intérêts : 350 000 DH ; la prime est répartie au prorata : $40\,000 \times 140\,000 / 350\,000 = 16\,000$ DH la première année, etc.

</details>

### Exercice 3 — Coût réel de l'emprunt

Pour l'emprunt de Maghreb Énergie (cours : 10 000 obligations, E = 980 DH, R = 1 020 DH, taux 6 %, 5 ans, frais 50 000 DH), calculez :
1. le coût total de l'emprunt pour la société (intérêts, prime, frais) ;
2. le coût annuel moyen rapporté aux sommes reçues nettes de frais. Comparez au taux nominal.

<details><summary>Voir le corrigé</summary>

**1)** Intérêts : $5 \times 600\,000 = 3\,000\,000$ DH ; prime : 400 000 DH ; frais : 50 000 DH ; **coût total : 3 450 000 DH**.

**2)** Sommes nettes reçues : $9\,800\,000 - 50\,000 = 9\,750\,000$ DH. Coût annuel moyen : $3\,450\,000 / 5 / 9\,750\,000 \approx$ **7,08 %** (approximation simple), nettement au-dessus du taux nominal de 6 %. Le calcul exact se fait par le taux actuariel (mathématiques financières, chapitre 9).

</details>
`,
    qcm: [
      { q: "À l'émission, l'emprunt obligataire est crédité pour :", choix: ["N × E", "N × C", "N × R", "N × (R − E)"], bonne: 2, explication: "La dette est ce que la société devra rembourser." },
      { q: "La prime de remboursement est enregistrée au compte :", choix: ["1410", "2130", "6311", "4493"], bonne: 1, explication: "Primes de remboursement des obligations (non-valeur)." },
      { q: "10 000 obligations, E = 990, R = 1 010. Prime de remboursement totale ?", choix: ["100 000", "200 000", "10 000", "20 000"], bonne: 1, explication: "10 000 × (1 010 − 990) = 200 000 DH." },
      { q: "Le coupon annuel se calcule sur :", choix: ["Le prix d'émission", "Le nominal", "Le prix de remboursement", "La trésorerie reçue"], bonne: 1, explication: "Coupon = nominal × taux." },
      { q: "Les intérêts courus à la clôture sont crédités au compte :", choix: ["5141", "4493", "1410", "2130"], bonne: 1, explication: "Intérêts courus et non échus à payer." },
      { q: "L'écriture d'intérêts courus est, au début de l'exercice suivant :", choix: ["Conservée", "Extournée", "Doublée", "Transférée en capital"], bonne: 1, explication: "Pour que chaque exercice supporte ses propres intérêts." },
      { q: "La dotation aux amortissements de la prime de remboursement est une charge :", choix: ["D'exploitation", "Financière (6391)", "Non courante", "Supplétive"], bonne: 1, explication: "Elle fait partie du coût de l'emprunt." },
      { q: "Émission le 1er juillet, prime de 60 000 DH amortie linéairement sur 5 ans. Dotation de la 1re année (exercice civil) ?", choix: ["12 000", "6 000", "60 000", "3 000"], bonne: 1, explication: "60 000 / 5 × 6/12 = 6 000 DH." },
      { q: "Pour l'analyste financier, les primes de remboursement des obligations sont :", choix: ["Un actif réel", "Une non-valeur déduite des capitaux propres", "Une dette", "Une créance"], bonne: 1, explication: "Elles n'ont aucune valeur de revente." },
      { q: "Au remboursement in fine, on débite :", choix: ["5141", "1410 Emprunts obligataires", "2130", "6311"], bonne: 1, explication: "La dette s'éteint." },
    ],
  },

  8: {
    titre: "La dissolution et la liquidation des sociétés",
    description: "Dissolution et liquidation d'une société : causes, liquidateur, résultat et boni de liquidation, partage entre associés et écritures, exercices corrigés.",
    resume: md`
## L'essentiel — Dissolution et liquidation

- **Causes** : terme, objet réalisé, décision de l'AGE, pertes graves (capitaux propres < quart du capital), causes liées aux associés, décision judiciaire (justes motifs, liquidation judiciaire).
- Effets : fin de l'activité, **personnalité morale maintenue** pour la liquidation (« société en liquidation »), nomination d'un **liquidateur**, publicité.
- Étapes : inventaire → **réalisation de l'actif** → **règlement du passif** → frais → **partage** → comptes définitifs, quitus, radiation.
- **Résultat de liquidation** = plus-values − moins-values − frais ; **actif net à partager** = capitaux propres + résultat de liquidation.
- **Boni** = actif net − capital remboursé ; **mali** si l'actif net ne couvre pas le capital.
- Écritures : cessions (7513 / 6513), pertes sur créances, remboursement des dettes, frais ; partage : D capitaux propres / C **4461** ; paiement : D 4461 / C 5141.
- Résultat de liquidation soumis à l'IS ; boni imposé chez les associés comme un revenu de capitaux mobiliers.
- Associés de **SNC** : tenus indéfiniment si l'actif ne couvre pas le passif ; associés de SARL/SA : perte limitée aux apports.
`,
    exercices: md`
### Exercice 2 — Un mali de liquidation

Une SA (capital 1 000 000 DH, 10 000 actions de 100 DH ; réserves 50 000 DH) est liquidée. La réalisation de l'actif et le règlement du passif dégagent un résultat de liquidation de − 350 000 DH.

1. Calculez l'actif net à partager et la somme revenant à une action.
2. Les actionnaires doivent-ils combler la différence ?

<details><summary>Voir le corrigé</summary>

**1)** Actif net : $1\,000\,000 + 50\,000 - 350\,000 = \mathbf{700\,000\ DH}$, soit **70 DH** par action : **mali** de 300 000 DH (30 DH par action).

**2)** Non : dans une SA, la responsabilité est limitée aux apports ; les actionnaires perdent 30 % de leur mise, mais n'ont rien à verser (les dettes ayant été entièrement payées).

</details>

### Exercice 3 — Insuffisance d'actif dans une SNC

Une SNC de deux associés (A : 60 % des parts, B : 40 %) est liquidée. La réalisation de l'actif rapporte 400 000 DH ; les dettes s'élèvent à 520 000 DH.

1. Calculez l'insuffisance d'actif.
2. Qui la supporte ? Comparez avec une SARL dans la même situation.

<details><summary>Voir le corrigé</summary>

**1)** Insuffisance : $520\,000 - 400\,000 = \mathbf{120\,000\ DH}$.

**2)** Dans une SNC, les associés répondent **indéfiniment et solidairement** des dettes sociales : les créanciers peuvent réclamer les 120 000 DH à A ou à B, qui se répartissent ensuite la charge selon leurs droits (A : 72 000 DH ; B : 48 000 DH). Dans une SARL, la responsabilité est limitée aux apports : les créanciers ne sont payés qu'à hauteur de l'actif (sauf faute de gestion engageant la responsabilité des dirigeants) et supportent la perte.

</details>
`,
    qcm: [
      { q: "Après la dissolution, la personnalité morale de la société :", choix: ["Disparaît immédiatement", "Subsiste pour les besoins de la liquidation", "Est transférée aux associés", "Est transférée au liquidateur"], bonne: 1, explication: "Jusqu'à la clôture de la liquidation." },
      { q: "Pendant la liquidation, la société est représentée par :", choix: ["Le directeur général", "Le liquidateur", "Le commissaire aux comptes", "Le plus gros associé"], bonne: 1, explication: "Les pouvoirs des dirigeants cessent." },
      { q: "L'ordre correct des opérations de liquidation est :", choix: ["Partage, réalisation, règlement", "Réalisation de l'actif, règlement du passif, partage", "Règlement, partage, réalisation", "Partage puis règlement"], bonne: 1, explication: "Les créanciers passent avant les associés." },
      { q: "Le boni de liquidation est égal à :", choix: ["Actif net − capital remboursé", "Capital − actif net", "Résultat de liquidation − dettes", "Réserves"], bonne: 0, explication: "C'est l'excédent au-delà des apports." },
      { q: "Capitaux propres 900 000 DH, résultat de liquidation + 100 000 DH, capital 600 000 DH. Boni ?", choix: ["300 000", "400 000", "1 000 000", "100 000"], bonne: 1, explication: "Actif net 1 000 000 − capital 600 000 = 400 000 DH." },
      { q: "Lors du partage, les capitaux propres sont virés au crédit du compte :", choix: ["4465", "4461 Associés, capital à rembourser", "1119", "5141"], bonne: 1, explication: "Dette envers les associés, puis payée." },
      { q: "Une perte subie lors du recouvrement des créances :", choix: ["Augmente le boni", "Diminue le résultat de liquidation", "N'a pas d'effet", "Est payée par le liquidateur"], bonne: 1, explication: "C'est une charge de la liquidation." },
      { q: "Le résultat de liquidation est :", choix: ["Exonéré d'IS", "Soumis à l'IS", "Soumis à la seule TVA", "Soumis aux droits de douane"], bonne: 1, explication: "La société reste imposable jusqu'à la clôture." },
      { q: "Dans une SNC, si l'actif ne suffit pas à payer les dettes :", choix: ["Les créanciers perdent la différence", "Les associés sont tenus indéfiniment et solidairement", "L'État paie", "Le liquidateur paie"], bonne: 1, explication: "Responsabilité des associés de SNC." },
      { q: "Une cause de dissolution est :", choix: ["La distribution d'un dividende", "L'arrivée du terme fixé par les statuts", "Une augmentation de capital", "L'émission d'obligations"], bonne: 1, explication: "Durée maximale de 99 ans." },
    ],
  },
};

export default chapitres;
