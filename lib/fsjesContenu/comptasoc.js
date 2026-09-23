// Comptabilité des Sociétés (S4) — compléments par chapitre.
const md = String.raw;

export default {
  1: {
    titre: "Introduction et types de sociétés",
    resume: md`
## L'essentiel — Sociétés et apports

- La **société** est un contrat par lequel deux ou plusieurs personnes mettent des biens en commun pour partager les bénéfices (ou l'économie) et supporter les pertes.
- **SA** (société de capitaux) et **SARL** (hybride) : responsabilité **limitée aux apports**.
- **SNC** (société de personnes) : responsabilité **indéfinie et solidaire** des associés.
- **Commandite** : commandités (responsabilité indéfinie) et commanditaires (limitée aux apports).
- Apports : **numéraire** (argent), **nature** (biens, évalués par un **commissaire aux apports**), **industrie** (savoir-faire : n'entre pas dans le capital).
`,
    exercices: md`
### Exercice 2 — Apports et responsabilité

1. Qualifiez chaque apport et dites s'il entre dans le capital social : a) 200 000 DH versés en banque ; b) un camion ; c) les compétences informatiques d'un associé ; d) un fonds de commerce.
2. Une société doit 500 000 DH à un fournisseur et ne peut pas payer. Associé A a apporté 50 000 DH. Que risque-t-il si la société est : a) une SARL ; b) une SNC ?

<details><summary>Voir le corrigé</summary>

**1)** a) numéraire, dans le capital ; b) nature, dans le capital (après évaluation) ; c) **industrie**, hors capital (droit aux bénéfices seulement) ; d) nature, dans le capital.

**2)** a) SARL : il ne perd au maximum que ses **50 000 DH** d'apport. b) SNC : il peut être poursuivi sur **son patrimoine personnel** pour toute la dette (responsabilité indéfinie et solidaire).

</details>
`,
    qcm: [
      { q: "Dans une SNC, la responsabilité des associés est :", choix: ["Limitée aux apports", "Indéfinie et solidaire", "Nulle", "Limitée au double des apports"], bonne: 1, explication: "Ils répondent des dettes sur leurs biens personnels." },
      { q: "L'apport d'un savoir-faire est un apport :", choix: ["En numéraire", "En nature", "En industrie", "En capital"], bonne: 2, explication: "Il ne donne pas de titres du capital." },
      { q: "Un apport en nature est évalué par :", choix: ["Le comptable de la société", "Un commissaire aux apports", "La banque", "L'associé lui-même"], bonne: 1, explication: "Pour éviter une surévaluation du capital." },
      { q: "La SA est une société :", choix: ["De personnes", "De capitaux", "De fait", "En participation"], bonne: 1, explication: "L'intuitu personae y est faible." },
      { q: "Dans une commandite, les commanditaires ont une responsabilité :", choix: ["Indéfinie", "Limitée à leurs apports", "Solidaire", "Illimitée"], bonne: 1, explication: "Les commandités, eux, sont indéfiniment responsables." },
    ],
  },

  2: {
    titre: "La constitution des sociétés",
    resume: md`
## L'essentiel — Constitution

- Trois temps : **promesse d'apport** (souscription) → **libération** (versement effectif) → constatation définitive du capital.
- Souscription : débit **3461** Associés, comptes d'apport (et **1119** capital souscrit non appelé pour la part non appelée), crédit **1111** Capital social.
- Libération : débit banque ou comptes de biens apportés, crédit **3461**.
- Dans une **SA**, les actions de numéraire doivent être libérées d'**au moins un quart** à la constitution ; le reste est appelé plus tard.
- $\text{Capital souscrit} = \text{capital appelé} + \text{capital non appelé}$.
- **Frais de constitution** : immobilisation en non-valeurs (**2111**), amortie sur une courte durée.
`,
    exercices: md`
### Exercice 2 — SA avec apports en nature et libération partielle

Une SA est constituée au capital de 2 000 000 DH : apports en nature (fonds commercial 200 000 DH ; matériel 400 000 DH) et apports en numéraire pour le reste, libérés du quart. Les frais de constitution, 20 000 DH, sont payés par banque.

Passez les écritures de constitution.

<details><summary>Voir le corrigé</summary>

Numéraire $= 2\,000\,000 - 600\,000 = 1\,400\,000$ DH, dont appelé $= 1\,400\,000 / 4 = 350\,000$ DH et non appelé $= 1\,050\,000$ DH.

**Souscription**

| Compte | Débit | Crédit |
|---|--:|--:|
| 3461 Associés, comptes d'apport en société | 950 000 | |
| 1119 Actionnaires, capital souscrit non appelé | 1 050 000 | |
| 1111 Capital social | | 2 000 000 |

**Libération**

| Compte | Débit | Crédit |
|---|--:|--:|
| 2230 Fonds commercial | 200 000 | |
| 2332 Matériel et outillage | 400 000 | |
| 5141 Banque | 350 000 | |
| 3461 Associés, comptes d'apport en société | | 950 000 |

**Frais de constitution**

| Compte | Débit | Crédit |
|---|--:|--:|
| 2111 Frais de constitution | 20 000 | |
| 5141 Banque | | 20 000 |

</details>
`,
    qcm: [
      { q: "À la souscription, le capital social est :", choix: ["Débité", "Crédité", "Soldé", "Ignoré"], bonne: 1, explication: "C'est une ressource propre de la société." },
      { q: "Dans une SA, les actions de numéraire doivent être libérées à la constitution d'au moins :", choix: ["La moitié", "Le quart", "La totalité", "Le dixième"], bonne: 1, explication: "Le reste est appelé ultérieurement." },
      { q: "Capital souscrit 800 000, dont 200 000 non appelés : le capital appelé est :", choix: ["1 000 000", "600 000", "200 000", "800 000"], bonne: 1, explication: "800 000 − 200 000 = 600 000." },
      { q: "Les frais de constitution sont comptabilisés en :", choix: ["Charges de l'exercice uniquement", "Immobilisations en non-valeurs", "Stocks", "Dettes"], bonne: 1, explication: "Compte 2111, amorti sur une courte durée." },
      { q: "La libération d'un apport en numéraire se traduit par un débit :", choix: ["Du capital social", "De la banque", "Des réserves", "Du fournisseur"], bonne: 1, explication: "Les fonds entrent en banque." },
    ],
  },

  3: {
    titre: "L'affectation du résultat",
    resume: md`
## L'essentiel — Affectation du résultat

- L'**assemblée générale** approuve les comptes et décide de l'affectation du bénéfice.
- **Réserve légale** : 5 % du bénéfice net, jusqu'à ce qu'elle atteigne 10 % du capital ; on s'arrête au plafond.
- $\text{Bénéfice distribuable} = \text{bénéfice net} - \text{réserve légale} + \text{report à nouveau créditeur}$ (ou − report débiteur).
- Ordre habituel : réserve légale → réserves statutaires → **premier dividende** (statutaire) → réserves facultatives → **superdividende** (souvent arrondi par action) → **report à nouveau**.
- Écriture : débit **1191** Résultat (et 1161 RAN antérieur), crédit **1140** réserve légale, **115x** autres réserves, **4465** associés dividendes à payer, **1161** RAN nouveau.
`,
    exercices: md`
### Exercice 2 — Répartition complète avec superdividende

SA au capital de 1 000 000 DH (10 000 actions de 100 DH), réserve légale existante 95 000 DH, report à nouveau créditeur 12 000 DH, bénéfice net 180 000 DH. Statuts : premier dividende de 6 % du capital ; réserve facultative de 50 000 DH ; superdividende arrondi au dirham inférieur par action ; le reliquat en report à nouveau.

1. Établissez le tableau de répartition.
2. Passez l'écriture d'affectation.

<details><summary>Voir le corrigé</summary>

**1)** Réserve légale : $5\% \times 180\,000 = 9\,000$, mais plafond restant $= 100\,000 - 95\,000 = 5\,000$ DH.

| Élément | Montant |
|---|--:|
| Bénéfice net | 180 000 |
| − Réserve légale | −5 000 |
| + Report à nouveau antérieur | +12 000 |
| = Bénéfice distribuable | 187 000 |
| − Premier dividende ($6\% \times 1\,000\,000$) | −60 000 |
| − Réserve facultative | −50 000 |
| = Solde | 77 000 |
| − Superdividende ($7{,}70$ arrondi à 7 DH × 10 000) | −70 000 |
| = **Report à nouveau** | **7 000** |

Dividende total par action : $6 + 7 = 13$ DH, soit 130 000 DH.

**2)**

| Compte | Débit | Crédit |
|---|--:|--:|
| 1191 Résultat net de l'exercice | 180 000 | |
| 1161 Report à nouveau | 12 000 | |
| 1140 Réserve légale | | 5 000 |
| 1152 Réserves facultatives | | 50 000 |
| 4465 Associés, dividendes à payer | | 130 000 |
| 1161 Report à nouveau | | 7 000 |

</details>
`,
    qcm: [
      { q: "La dotation à la réserve légale est de :", choix: ["10 % du bénéfice", "5 % du bénéfice net, jusqu'à 10 % du capital", "5 % du capital", "Libre"], bonne: 1, explication: "On arrête la dotation une fois le plafond atteint." },
      { q: "Capital 500 000, réserve légale 48 000, bénéfice 100 000 : la dotation est de :", choix: ["5 000", "2 000", "10 000", "0"], bonne: 1, explication: "Plafond 50 000 − 48 000 = 2 000 < 5 000." },
      { q: "Un report à nouveau créditeur antérieur :", choix: ["Diminue le bénéfice distribuable", "Augmente le bénéfice distribuable", "Est versé à l'État", "Est une dette"], bonne: 1, explication: "C'est un bénéfice non distribué précédemment." },
      { q: "Les dividendes votés et non encore payés sont portés au crédit du compte :", choix: ["1111", "4465", "1140", "5141"], bonne: 1, explication: "Associés, dividendes à payer." },
      { q: "Qui décide de l'affectation du résultat ?", choix: ["Le comptable", "L'assemblée générale des associés", "Le commissaire aux comptes", "L'administration fiscale"], bonne: 1, explication: "Après approbation des comptes." },
    ],
  },

  4: {
    titre: "L'augmentation de capital par apports nouveaux",
    resume: md`
## L'essentiel — Augmentation par apports nouveaux

- La société émet des **actions nouvelles** contre des apports en numéraire ou en nature.
- **Prime d'émission** $= \text{prix d'émission} - \text{valeur nominale}$ : elle protège les anciens actionnaires (réserves accumulées).
- **DPS** : chaque ancien actionnaire a priorité pour souscrire ; $DPS = V_{avant} - V_{après}$ avec $V_{après} = \dfrac{N \times V_{avant} + n \times P_{émission}}{N + n}$.
- Autre formule : $DPS = (V_{avant} - P_{émission}) \times \dfrac{n}{N + n}$.
- Écriture : débit banque (ou 3462 actionnaires souscrit-appelé), crédit **1111** (nominal) et **1121** prime d'émission.
`,
    exercices: md`
### Exercice 2 — Valeur du DPS

Une SA a 10 000 actions de nominal 100 DH, d'une valeur réelle de 150 DH. Elle émet 2 500 actions nouvelles au prix de 120 DH, libérées en numéraire.

1. Calculez la valeur de l'action après l'augmentation et la valeur du DPS.
2. Un investisseur qui n'a aucune action veut souscrire 10 actions nouvelles. Combien lui coûte l'opération ?
3. Passez l'écriture de souscription-libération.

<details><summary>Voir le corrigé</summary>

**1)** $V_{après} = \dfrac{10\,000 \times 150 + 2\,500 \times 120}{12\,500} = \dfrac{1\,800\,000}{12\,500} = 144$ DH ; $DPS = 150 - 144 = 6$ DH.

**2)** Parité : 4 anciennes pour 1 nouvelle, donc 40 DPS : $40 \times 6 + 10 \times 120 = 1\,440$ DH (soit $10 \times 144$ : il paie la valeur après augmentation).

**3)**

| Compte | Débit | Crédit |
|---|--:|--:|
| 5141 Banque ($2\,500 \times 120$) | 300 000 | |
| 1111 Capital social ($2\,500 \times 100$) | | 250 000 |
| 1121 Prime d'émission ($2\,500 \times 20$) | | 50 000 |

</details>
`,
    qcm: [
      { q: "La prime d'émission est égale à :", choix: ["Prix d'émission − valeur nominale", "Valeur nominale − prix d'émission", "Valeur réelle − valeur nominale", "Prix de remboursement − prix d'émission"], bonne: 0, explication: "Elle est inscrite au compte 1121." },
      { q: "Le DPS a pour but :", choix: ["De payer des dividendes", "De protéger les anciens actionnaires contre la dilution", "De rembourser le capital", "De réduire les impôts"], bonne: 1, explication: "Ils peuvent souscrire en priorité ou vendre leur droit." },
      { q: "1 000 actions nouvelles de nominal 100 émises à 130 : le capital augmente de :", choix: ["130 000", "100 000", "30 000", "230 000"], bonne: 1, explication: "Seul le nominal va au capital ; la prime va au 1121." },
      { q: "Valeur avant 200, valeur après 190 : le DPS vaut :", choix: ["10", "190", "390", "20"], bonne: 0, explication: "DPS = V avant − V après." },
      { q: "La prime d'émission figure :", choix: ["À l'actif", "Dans les capitaux propres", "Dans les dettes", "Au CPC"], bonne: 1, explication: "C'est une ressource propre." },
    ],
  },

  5: {
    titre: "L'augmentation de capital par incorporation de réserves",
    resume: md`
## L'essentiel — Incorporation de réserves

- Les **réserves** deviennent du **capital** sans apport nouveau : émission d'**actions gratuites** ou hausse du nominal.
- Opération **neutre** : les capitaux propres totaux et la trésorerie ne changent pas ; seule leur composition change.
- **Droit d'attribution (DA)** : droit de recevoir gratuitement les actions nouvelles ; $DA = V_{avant} - V_{après}$ avec $V_{après} = \dfrac{N \times V_{avant}}{N + n}$.
- Écriture : débit **115x** réserves (ou 1121 prime), crédit **1111** capital social.
- Intérêts : rendre le capital plus conforme aux fonds réellement investis, rassurer les créanciers, rendre le titre plus accessible.
`,
    exercices: md`
### Exercice 2 — Actions gratuites et droit d'attribution

Une SA a 20 000 actions de nominal 100 DH, valant 180 DH. Elle incorpore 500 000 DH de réserves facultatives en créant des actions gratuites de 100 DH.

1. Combien d'actions gratuites sont créées ? Quelle est la parité ?
2. Calculez la valeur de l'action après l'opération et le DA.
3. Passez l'écriture.

<details><summary>Voir le corrigé</summary>

**1)** $500\,000 / 100 = 5\,000$ actions gratuites : 1 nouvelle pour 4 anciennes.

**2)** $V_{après} = \dfrac{20\,000 \times 180}{25\,000} = 144$ DH ; $DA = 180 - 144 = 36$ DH. L'actionnaire qui avait 4 actions (720 DH) en a 5 (5 × 144 = 720 DH) : sa richesse ne change pas.

**3)**

| Compte | Débit | Crédit |
|---|--:|--:|
| 1152 Réserves facultatives | 500 000 | |
| 1111 Capital social | | 500 000 |

</details>
`,
    qcm: [
      { q: "L'incorporation de réserves modifie :", choix: ["La trésorerie", "Le total des capitaux propres", "La composition des capitaux propres", "Les dettes"], bonne: 2, explication: "C'est un simple virement interne." },
      { q: "L'actionnaire reçoit des actions gratuites grâce à :", choix: ["Un DPS", "Un droit d'attribution", "Un coupon", "Une obligation"], bonne: 1, explication: "Aucun versement n'est demandé." },
      { q: "Après une attribution gratuite, la valeur de chaque action :", choix: ["Augmente", "Diminue", "Ne change pas", "Double"], bonne: 1, explication: "La même valeur est répartie sur plus d'actions." },
      { q: "L'écriture d'incorporation débite :", choix: ["La banque", "Les réserves", "Le capital", "Les associés"], bonne: 1, explication: "Et crédite le capital social." },
      { q: "1 000 actions à 120 DH, 250 actions gratuites créées : la valeur après est de :", choix: ["120", "96", "100", "150"], bonne: 1, explication: "1 000 × 120 / 1 250 = 96 DH." },
    ],
  },

  6: {
    titre: "La réduction de capital",
    resume: md`
## L'essentiel — Réduction de capital

- **Motivée par des pertes** : on impute les pertes sur le capital (débit 1111, crédit **1169** report à nouveau débiteur) ; aucun flux de trésorerie.
- **Non motivée par des pertes** : on rembourse une partie des apports aux associés (débit 1111, crédit **4462** associés capital à rembourser, puis règlement par banque).
- **Coup d'accordéon** : réduction pour apurer les pertes suivie d'une augmentation de capital pour recapitaliser la société.
- La réduction doit respecter le **capital minimum** légal de la forme sociale et les droits des créanciers.
`,
    exercices: md`
### Exercice 2 — Le coup d'accordéon

Une SA au capital de 600 000 DH (6 000 actions de 100 DH) présente un report à nouveau débiteur de 400 000 DH. L'assemblée décide : 1) de réduire le capital de 400 000 DH pour apurer les pertes, en ramenant le nombre d'actions à 2 000 ; 2) d'augmenter aussitôt le capital de 400 000 DH par émission de 4 000 actions de 100 DH, libérées en numéraire.

1. Passez les écritures.
2. Quel est le capital final ? Un actionnaire qui avait 60 actions et ne souscrit pas : quel pourcentage du capital détient-il avant et après ?

<details><summary>Voir le corrigé</summary>

**1)**

| Compte | Débit | Crédit |
|---|--:|--:|
| 1111 Capital social | 400 000 | |
| 1169 Report à nouveau débiteur | | 400 000 |
| 5141 Banque | 400 000 | |
| 1111 Capital social | | 400 000 |

**2)** Capital final : 600 000 DH (6 000 actions). L'actionnaire détenait $60 / 6\,000 = 1\%$ ; après réduction il a 20 actions sur 2 000 (toujours 1 %), mais après l'augmentation il n'a plus que $20 / 6\,000 \approx 0{,}33\%$ : il est **dilué**.

</details>
`,
    qcm: [
      { q: "Une réduction de capital pour pertes entraîne :", choix: ["Une sortie de trésorerie", "Aucune sortie de trésorerie", "Un remboursement aux associés", "Une hausse des dettes bancaires"], bonne: 1, explication: "On impute simplement les pertes sur le capital." },
      { q: "Pour apurer des pertes, on crédite le compte :", choix: ["1111 Capital social", "1169 Report à nouveau débiteur", "5141 Banque", "4462"], bonne: 1, explication: "On solde le report à nouveau débiteur." },
      { q: "Une réduction avec remboursement aux associés crédite d'abord :", choix: ["La banque", "4462 Associés, capital à rembourser", "Les réserves", "Le report à nouveau"], bonne: 1, explication: "Puis le 4462 est soldé lors du paiement." },
      { q: "Le « coup d'accordéon » associe :", choix: ["Deux augmentations", "Une réduction puis une augmentation de capital", "Une fusion et une scission", "Deux réductions"], bonne: 1, explication: "Il sert à recapitaliser une société en pertes." },
      { q: "Après un coup d'accordéon, un ancien actionnaire qui ne souscrit pas est :", choix: ["Enrichi", "Dilué", "Remboursé", "Exclu d'office"], bonne: 1, explication: "Sa part du capital diminue." },
    ],
  },

  7: {
    titre: "Les emprunts obligataires",
    resume: md`
## L'essentiel — Emprunts obligataires

- Emprunt divisé en **obligations**, souscrites par de nombreux prêteurs ; surtout réservé aux SA.
- Paramètres : **valeur nominale** (base du coupon), **prix d'émission**, **prix de remboursement**, **taux nominal**.
- $\text{Prime de remboursement} = N \times (\text{prix de remboursement} - \text{prix d'émission})$ : immobilisation en non-valeurs (**2130**), amortie sur la durée de l'emprunt.
- Émission : débit **5141** (prix d'émission total) et **2130** (prime), crédit **1410** emprunts obligataires (valeur de remboursement).
- $\text{Coupon} = \text{valeur nominale totale} \times \text{taux nominal}$ (débit 6311).
- Coût annuel pour la société = coupon + dotation à l'amortissement de la prime.
`,
    exercices: md`
### Exercice 2 — Émission, coupon et amortissement de la prime

Une SA émet 10 000 obligations de nominal 500 DH, au prix de 490 DH, remboursables à 510 DH dans 5 ans (in fine), au taux nominal de 7 %. La prime est amortie linéairement.

1. Calculez la prime de remboursement, le coupon annuel et la dotation annuelle.
2. Passez l'écriture d'émission et les écritures de fin de première année.

<details><summary>Voir le corrigé</summary>

**1)** Prime $= 10\,000 \times (510 - 490) = 200\,000$ DH ; coupon $= 10\,000 \times 500 \times 7\% = 350\,000$ DH ; dotation $= 200\,000 / 5 = 40\,000$ DH par an.

**2)**

| Compte | Débit | Crédit |
|---|--:|--:|
| 5141 Banque ($10\,000 \times 490$) | 4 900 000 | |
| 2130 Primes de remboursement des obligations | 200 000 | |
| 1410 Emprunts obligataires ($10\,000 \times 510$) | | 5 100 000 |
| 6311 Intérêts des emprunts et dettes | 350 000 | |
| 5141 Banque | | 350 000 |
| 6391 Dotations aux amortissements des primes de remboursement | 40 000 | |
| 2813 Amortissements des primes de remboursement | | 40 000 |

Coût annuel : $350\,000 + 40\,000 = 390\,000$ DH.

</details>
`,
    qcm: [
      { q: "Le coupon d'une obligation se calcule sur :", choix: ["Le prix d'émission", "La valeur nominale", "Le prix de remboursement", "La valeur de marché"], bonne: 1, explication: "Coupon = nominal × taux nominal." },
      { q: "1 000 obligations émises à 95 et remboursables à 105 : la prime de remboursement est de :", choix: ["5 000", "10 000", "100 000", "95 000"], bonne: 1, explication: "1 000 × (105 − 95) = 10 000." },
      { q: "L'emprunt obligataire est inscrit au passif pour :", choix: ["Le prix d'émission", "La valeur nominale", "La valeur de remboursement", "Le coupon"], bonne: 2, explication: "C'est ce que la société devra rembourser." },
      { q: "La prime de remboursement est :", choix: ["Un produit", "Une immobilisation en non-valeurs amortie", "Une réserve", "Une dette fiscale"], bonne: 1, explication: "Compte 2130." },
      { q: "Qui peut en principe émettre des obligations ?", choix: ["Toute SNC", "Principalement les SA", "Les entreprises individuelles", "Les associations"], bonne: 1, explication: "Sous conditions légales." },
    ],
  },

  8: {
    titre: "La dissolution et la liquidation des sociétés",
    resume: md`
## L'essentiel — Dissolution et liquidation

- Causes de dissolution : terme statutaire, réalisation ou extinction de l'objet, décision des associés, pertes importantes, décision judiciaire.
- Liquidation : **réalisation de l'actif → paiement du passif et des frais → partage**.
- $\text{Actif net à répartir} = \text{actif réalisé} - \text{passif réglé} - \text{frais de liquidation}$.
- $\text{Boni (ou mali)} = \text{actif net} - \text{capital (apports)}$ ; le boni comprend les réserves et le résultat de liquidation.
- Le partage se fait au prorata des droits de chaque associé.
- Fiscalement, le boni distribué est en principe traité comme un **revenu de capitaux mobiliers**.
`,
    exercices: md`
### Exercice 2 — Partage d'une SARL liquidée

Bilan avant liquidation (en DH) : immobilisations nettes 500 000 ; stocks 150 000 ; clients 90 000 ; banque 40 000. Capital 600 000 ; réserves 60 000 ; dettes 120 000. Pendant la liquidation : les immobilisations sont vendues 620 000, les stocks 130 000, les clients paient 85 000 ; les frais de liquidation sont de 15 000. Associés : A (60 %) et B (40 %).

1. Calculez l'actif net à répartir, le résultat de liquidation et le boni.
2. Calculez la somme revenant à chaque associé.

<details><summary>Voir le corrigé</summary>

**1)** Actif réalisé $= 620\,000 + 130\,000 + 85\,000 + 40\,000 = 875\,000$ DH ; actif net $= 875\,000 - 120\,000 - 15\,000 = 740\,000$ DH.

Résultat de liquidation $= +120\,000 - 20\,000 - 5\,000 - 15\,000 = 80\,000$ DH.

Boni $= 740\,000 - 600\,000 = 140\,000$ DH (réserves 60 000 + résultat de liquidation 80 000).

**2)** A : $360\,000 + 60\% \times 140\,000 = 444\,000$ DH ; B : $240\,000 + 40\% \times 140\,000 = 296\,000$ DH. Total : 740 000 DH ✓.

</details>
`,
    qcm: [
      { q: "L'ordre de la liquidation est :", choix: ["Partage, paiement des dettes, vente des actifs", "Vente des actifs, paiement des dettes, partage", "Paiement des dettes, partage, vente des actifs", "Partage puis vente"], bonne: 1, explication: "Les créanciers passent avant les associés." },
      { q: "Actif net 900 000, capital 1 000 000 : il y a :", choix: ["Un boni de 100 000", "Un mali de 100 000", "Ni boni ni mali", "Un boni de 900 000"], bonne: 1, explication: "L'actif net ne couvre pas les apports." },
      { q: "Le boni de liquidation revient :", choix: ["Aux créanciers", "Aux associés", "À l'État uniquement", "Au liquidateur"], bonne: 1, explication: "Au prorata de leurs droits." },
      { q: "Les frais de liquidation :", choix: ["Augmentent l'actif net", "Diminuent l'actif net à répartir", "Sont payés par les associés à part", "Sont ignorés"], bonne: 1, explication: "Ils sont prélevés avant le partage." },
      { q: "Fiscalement, le boni distribué aux associés est en principe traité comme :", choix: ["Un salaire", "Un revenu de capitaux mobiliers", "Une plus-value immobilière", "Une subvention"], bonne: 1, explication: "Il est assimilé à une distribution." },
    ],
  },
};
