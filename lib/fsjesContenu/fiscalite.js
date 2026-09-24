// Fiscalité des entreprises (S5) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM. Taux de la loi de finances 2026.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Introduction au système fiscal marocain",
    description: "Notion d'impôt, sources du droit fiscal marocain (Constitution, CGI, loi de finances), classification des impôts et obligations fiscales de l'entreprise.",
    resume: md`
## L'essentiel — Le système fiscal marocain

- **Impôt** : prélèvement obligatoire, par voie d'autorité, définitif, **sans contrepartie directe**. La **taxe** est liée à un service ; la **redevance** est le prix d'un service.
- Fonctions : financière, économique (incitations), sociale (redistribution).
- Sources : **Constitution 2011** (art. 39 facultés contributives, art. 71 légalité), **loi de finances** annuelle (LOF 130-13), **CGI** (depuis 2007), loi 47-06 (fiscalité locale), conventions fiscales, doctrine, jurisprudence.
- Classifications : direct / indirect ; revenu, dépense, capital ; **proportionnel** (IS) / **progressif** (IR) ; État / collectivités ; réel / personnel.
- Principaux impôts 2026 : **IS** 20 % (35 % si bénéfice ≥ 100 M DH, 40 % établissements de crédit) ; **CM** 0,25 % (min. 3 000 DH) ; **IR** 0 % à 37 % ; **TVA** 20 % et 10 % ; contribution sociale de solidarité 1,5 % à 5 % (bénéfice ≥ 1 M DH) ; taxe professionnelle.
- Administrations : **DGI**, **ADII** (douane), **TGR**, collectivités.
- Obligations : IF, ICE, comptabilité (conservation **10 ans**), factures conformes, déclarations et paiements dans les délais, retenues à la source.
- Principes : légalité, égalité, annualité, système **déclaratif**, prescription de **4 ans**.
`,
    exercices: md`
### Exercice 2 — Classer les prélèvements

Pour chacun des prélèvements suivants, indiquez s'il s'agit d'un impôt, d'une taxe ou d'une redevance, s'il est direct ou indirect, et s'il revient à l'État ou aux collectivités territoriales : a) IS ; b) TVA ; c) taxe professionnelle ; d) taxe de services communaux ; e) droits de douane ; f) IR retenu sur un salaire ; g) droits d'enregistrement sur la vente d'un terrain ; h) contribution sociale de solidarité sur les bénéfices.

<details><summary>Voir le corrigé</summary>

| Prélèvement | Nature | Direct / indirect | Bénéficiaire |
|---|---|---|---|
| a) IS | Impôt | Direct | État |
| b) TVA | Impôt | Indirect | État (et part transférée aux collectivités) |
| c) Taxe professionnelle | Impôt local (appelé « taxe ») | Direct | Collectivités |
| d) Taxe de services communaux | Taxe (liée aux services de la commune) | Direct | Collectivités |
| e) Droits de douane | Impôt | Indirect | État |
| f) IR sur salaire | Impôt | Direct | État |
| g) Droits d'enregistrement | Impôt sur le capital (mutation) | Classés parmi les impôts indirects | État |
| h) Contribution sociale de solidarité | Impôt (contribution) | Direct | État (affectée à la protection sociale) |

</details>

### Exercice 3 — Impôt progressif et impôt proportionnel

1. Un salarié a un revenu net imposable annuel de 120 000 DH. Avec le barème de l'IR (tranche de 100 001 à 180 000 DH : taux 34 %, somme à déduire 22 000 DH), calculez l'IR, le taux moyen et le taux marginal.
2. Deux sociétés réalisent des bénéfices de 99,9 et de 100 millions de DH. Calculez leur IS en 2026 (taux proportionnels). Que constatez-vous ?

<details><summary>Voir le corrigé</summary>

**1)** $IR = 120\,000 \times 34\,\% - 22\,000 = 40\,800 - 22\,000 = \mathbf{18\,800\ DH}$. Taux moyen : $18\,800 / 120\,000 \approx \mathbf{15{,}7\,\%}$ ; taux marginal : **34 %** (taux de la dernière tranche atteinte). Dans un impôt progressif, le taux moyen est toujours inférieur au taux marginal.

**2)** 99,9 M DH × 20 % = **19,98 M DH** ; 100 M DH × 35 % = **35 M DH**. Depuis la réforme de 2023, les taux de l'IS sont **proportionnels** et s'appliquent à la totalité du bénéfice : franchir le seuil de 100 M DH fait passer tout le bénéfice à 35 %. C'est un **effet de seuil** : 0,1 M DH de bénéfice supplémentaire coûte environ 15 M DH d'impôt en plus.

</details>
`,
    qcm: [
      { q: "L'impôt se distingue de la taxe parce que :", choix: ["Il est facultatif", "Il est prélevé sans contrepartie directe", "Il est toujours local", "Il est remboursable"], bonne: 1, explication: "La taxe est liée à un service rendu." },
      { q: "Le principe de légalité de l'impôt est posé par :", choix: ["Le Code de commerce", "La Constitution (article 71)", "La loi 9-88", "Le DOC"], bonne: 1, explication: "Le régime fiscal relève du domaine de la loi." },
      { q: "Depuis 2007, les règles de l'IS, de l'IR et de la TVA sont regroupées dans :", choix: ["Le Code de commerce", "Le Code général des impôts", "La loi 47-06", "Le CGNC"], bonne: 1, explication: "Le CGI, modifié chaque année par la loi de finances." },
      { q: "La TVA est un impôt :", choix: ["Direct", "Indirect", "Local", "Sur le capital"], bonne: 1, explication: "Elle est payée par l'entreprise mais supportée par le consommateur." },
      { q: "Le taux normal de l'IS en 2026, pour un bénéfice inférieur à 100 millions de DH, est de :", choix: ["10 %", "20 %", "31 %", "35 %"], bonne: 1, explication: "35 % au-delà de 100 M DH, 40 % pour les établissements de crédit." },
      { q: "L'IR est un impôt :", choix: ["Proportionnel", "Progressif", "Indirect", "Local"], bonne: 1, explication: "Son barème va de 0 % à 37 %." },
      { q: "La taxe professionnelle revient :", choix: ["À l'État", "Aux collectivités territoriales", "À la CNSS", "À Bank Al-Maghrib"], bonne: 1, explication: "Elle relève de la fiscalité locale (loi 47-06)." },
      { q: "Les documents comptables doivent être conservés :", choix: ["2 ans", "4 ans", "10 ans", "30 ans"], bonne: 2, explication: "Loi 9-88 et CGI." },
      { q: "La TVA à l'importation est perçue par :", choix: ["La DGI", "L'ADII (douane)", "La commune", "La CNSS"], bonne: 1, explication: "Administration des douanes et impôts indirects." },
      { q: "En principe, l'administration peut redresser :", choix: ["Le seul dernier exercice", "Les quatre derniers exercices", "Tous les exercices depuis la création", "Les dix derniers exercices"], bonne: 1, explication: "Délai de prescription de quatre ans." },
    ],
  },

  2: {
    titre: "La TVA : champ d'application et taux",
    description: "TVA au Maroc : mécanisme des paiements fractionnés, opérations imposables et exonérées, taux de 20 % et 10 % en 2026, fait générateur et base imposable.",
    resume: md`
## L'essentiel — TVA : champ d'application et taux

- **Impôt général sur la consommation**, collecté à chaque stade, supporté par le **consommateur final** ; chaque entreprise ne verse que la TVA sur sa **valeur ajoutée** (paiements fractionnés) : la TVA est **neutre** pour elle.
- **Opérations imposables** : ventes des industriels et grossistes, détaillants au-delà du seuil, prestations de services, travaux immobiliers, importations ; imposition **par option** possible.
- **Exonération sans droit à déduction** (produits de base, journaux…) : la TVA d'amont devient une **charge**. **Avec droit à déduction** (exportations…) : TVA d'amont récupérable ; achats possibles en **suspension**.
- **Taux 2026** : **20 %** (normal) et **10 %** (réduit : banque, hébergement et restauration, transport, certains produits) ; les taux de 7 % et 14 % ont disparu.
- **Fait générateur** : **encaissement** (droit commun) ou **débit** (option) ; dédouanement pour les importations.
- **Base** : prix HT − remises + frais accessoires facturés + droits et taxes (hors TVA) ; **débours** et emballages consignés exclus.
- $TTC = HT(1+t)$ ; $TVA = TTC \times \dfrac{t}{1+t}$.
`,
    exercices: md`
### Exercice 2 — Exonération sans ou avec droit à déduction

Une boulangerie industrielle de Salé (ventes de pain exonérées sans droit à déduction) et une entreprise exportatrice de textile de Tanger (exportations exonérées avec droit à déduction) achètent chacune un four ou une machine de 120 000 DH HT (TVA 20 %).

1. Quel est le coût de l'équipement pour chacune ?
2. Comment l'exportatrice récupère-t-elle la TVA ? Existe-t-il une solution pour ne pas l'avancer ?

<details><summary>Voir le corrigé</summary>

**1)** Boulangerie : elle ne peut pas déduire la TVA : l'équipement lui coûte **144 000 DH** (la TVA de 24 000 DH s'ajoute au coût de l'immobilisation). Exportatrice : la TVA est récupérable : coût **120 000 DH**.

**2)** L'exportatrice, n'ayant pas (ou peu) de TVA collectée sur des ventes locales, obtient le **remboursement** de son crédit de TVA selon la procédure prévue par le CGI. Elle peut aussi acheter **en suspension de TVA** (sur attestation délivrée par l'administration), dans la limite de son chiffre d'affaires à l'export, ce qui lui évite d'avancer la taxe.

</details>

### Exercice 3 — Base imposable à l'importation et conversions

1. Une entreprise de Casablanca importe des pièces détachées : valeur en douane 300 000 DH, droits de douane 2,5 %, taxe parafiscale à l'importation 0,25 % de la valeur en douane. Calculez la base de la TVA et la TVA à l'importation (20 %).
2. Une note de restaurant s'élève à 1 650 DH TTC (taux de 10 %). Calculez le HT et la TVA.
3. Un client paie 36 000 DH TTC pour une vente au taux de 20 % (régime de l'encaissement). Quelle TVA est exigible ?

<details><summary>Voir le corrigé</summary>

**1)** Droits de douane : $300\,000 \times 2{,}5\,\% = 7\,500$ DH ; taxe parafiscale : $300\,000 \times 0{,}25\,\% = 750$ DH. Base : $300\,000 + 7\,500 + 750 = \mathbf{308\,250\ DH}$ ; TVA : $308\,250 \times 20\,\% = \mathbf{61\,650\ DH}$, payée à la douane et déductible si les pièces servent à des opérations taxables.

**2)** HT $= 1\,650 / 1{,}1 = \mathbf{1\,500\ DH}$ ; TVA $= \mathbf{150\ DH}$.

**3)** $36\,000 \times 20/120 = \mathbf{6\,000\ DH}$.

</details>
`,
    qcm: [
      { q: "La TVA est finalement supportée par :", choix: ["Le fabricant", "Le grossiste", "Le consommateur final", "L'État"], bonne: 2, explication: "Les entreprises la collectent et la déduisent : elle est neutre pour elles." },
      { q: "Depuis le 1er janvier 2026, les taux de TVA au Maroc sont :", choix: ["7 %, 10 %, 14 % et 20 %", "10 % et 20 %", "Uniquement 20 %", "5 % et 20 %"], bonne: 1, explication: "La réforme lancée en 2024 a supprimé les taux de 7 % et 14 %." },
      { q: "Une exportation de biens est :", choix: ["Imposable à 20 %", "Exonérée avec droit à déduction", "Exonérée sans droit à déduction", "Hors champ sans effet"], bonne: 1, explication: "L'exportateur récupère la TVA sur ses achats." },
      { q: "Dans le régime de droit commun, le fait générateur de la TVA est :", choix: ["La commande", "L'encaissement", "La livraison", "La fin de l'exercice"], bonne: 1, explication: "L'option pour les débits reste possible." },
      { q: "TVA contenue dans un encaissement de 12 000 DH TTC au taux de 20 % :", choix: ["2 400 DH", "2 000 DH", "1 200 DH", "10 000 DH"], bonne: 1, explication: "12 000 × 20/120 = 2 000 DH." },
      { q: "Les débours refacturés à l'identique au client :", choix: ["Entrent dans la base de la TVA", "Sont exclus de la base", "Sont taxés à 10 %", "Sont une remise"], bonne: 1, explication: "Ce sont des sommes avancées pour le compte du client." },
      { q: "Une remise accordée sur facture :", choix: ["Augmente la base imposable", "Diminue la base imposable", "N'a pas d'effet", "Est taxée séparément"], bonne: 1, explication: "La TVA porte sur le prix net." },
      { q: "Pour une entreprise exonérée sans droit à déduction, la TVA payée sur ses achats :", choix: ["Est remboursée", "Devient une charge", "Est reportée", "Est déduite de l'IS"], bonne: 1, explication: "Elle ne peut pas être récupérée." },
      { q: "La base de la TVA à l'importation comprend :", choix: ["La seule valeur en douane", "La valeur en douane plus les droits et taxes perçus à l'importation", "Le prix de revente", "La marge de l'importateur"], bonne: 1, explication: "Tous les droits et taxes sauf la TVA elle-même." },
      { q: "HT de 2 200 DH TTC au taux de 10 % :", choix: ["1 980 DH", "2 000 DH", "1 833 DH", "2 420 DH"], bonne: 1, explication: "2 200 / 1,1 = 2 000 DH." },
    ],
  },

  3: {
    titre: "La TVA : déductions et déclaration",
    description: "TVA déductible : conditions, exclusions, prorata de déduction, régularisations, crédit de TVA, déclaration et écriture de liquidation, exercices corrigés.",
    resume: md`
## L'essentiel — TVA : déductions et déclaration

- **TVA due = TVA collectée − TVA déductible − crédit antérieur** ; si négatif : **crédit de TVA** reporté (remboursable dans certains cas : exportateurs…).
- Conditions : achats **nécessaires** à l'exploitation et affectés à des opérations taxables ou exportées ; **facture régulière** ; droit né au mois du **paiement**, à exercer dans l'**année** ; pas de paiement en espèces au-delà des plafonds.
- **Exclusions** : véhicules de transport de personnes (hors loueurs, transporteurs, auto-écoles), dépenses non liées à l'exploitation, achats affectés à des opérations exonérées sans droit. La TVA non déductible s'ajoute au coût.
- Immobilisations : déduction immédiate ; **régularisation** si cession ou changement d'affectation avant **5 ans** (par cinquièmes).
- **Prorata** $= \dfrac{CA_{taxable} + CA_{export}}{CA_{total}}$ (HT) : appliqué aux immobilisations et charges **communes** ; régularisé en fin d'année.
- Déclaration **mensuelle** (CA ≥ 1 000 000 DH) ou **trimestrielle**, télédéclarée avant la fin du mois suivant.
- Liquidation : débit 4455 ; crédit 34551, 34552, 3456 et **4456 État, TVA due**.
`,
    exercices: md`
### Exercice 2 — Régulariser le prorata et une cession

1. Une entreprise a déduit en cours d'année la TVA sur une machine (100 000 DH) avec un prorata provisoire de 80 %. En fin d'année, le prorata définitif est de 72 %. Calculez la régularisation.
2. Une camionnette acquise en 2024 (TVA déduite : 40 000 DH) est cédée en 2026 à un particulier dans le cadre d'une opération non soumise à TVA. Calculez le reversement (délai de 5 ans ; 3 années restant à courir).

<details><summary>Voir le corrigé</summary>

**1)** TVA déduite : $100\,000 \times 80\,\% = 80\,000$ DH ; TVA réellement déductible : $100\,000 \times 72\,\% = 72\,000$ DH ; **reversement de 8 000 DH** (TVA à payer en plus).

**2)** $40\,000 \times 3/5 = \mathbf{24\,000\ DH}$ à reverser : l'entreprise a déduit la TVA comme si le bien devait servir cinq ans à des opérations taxables.

</details>

### Exercice 3 — Trois mois de TVA et un crédit

Une PME d'Oujda relève (en DH) :

| | Janvier | Février | Mars |
|---|---:|---:|---:|
| TVA collectée | 45 000 | 50 000 | 55 000 |
| TVA déductible sur charges | 30 000 | 32 000 | 30 000 |
| TVA déductible sur immobilisations | 60 000 | — | — |

1. Établissez la liquidation de chaque mois.
2. Combien la PME versera-t-elle au Trésor au titre du trimestre ? Commentez.

<details><summary>Voir le corrigé</summary>

**1)**

| | Janvier | Février | Mars |
|---|---:|---:|---:|
| TVA collectée | 45 000 | 50 000 | 55 000 |
| − TVA déductible | 90 000 | 32 000 | 30 000 |
| − Crédit antérieur | — | 45 000 | 27 000 |
| **= TVA due / (crédit)** | **(45 000)** | **(27 000)** | **(2 000)** |

**2)** **Aucun versement** au titre du trimestre ; un crédit de 2 000 DH est reporté sur avril. L'investissement de janvier a généré un crédit de TVA qui s'est résorbé progressivement grâce à la TVA collectée : la TVA sur investissement est une avance de trésorerie temporaire, pas une charge.

</details>
`,
    qcm: [
      { q: "La TVA due est égale à :", choix: ["TVA déductible − TVA collectée", "TVA collectée − TVA déductible − crédit antérieur", "TVA collectée + TVA déductible", "20 % du résultat"], bonne: 1, explication: "L'entreprise ne verse que la différence." },
      { q: "Le droit à déduction de la TVA naît :", choix: ["À la commande", "Au mois du paiement de la facture", "À la fin de l'exercice", "À la livraison"], bonne: 1, explication: "Il doit être exercé dans un délai d'un an." },
      { q: "La TVA sur une voiture de tourisme achetée par une société commerciale est :", choix: ["Déductible à 100 %", "Non déductible", "Déductible à 50 %", "Remboursée"], bonne: 1, explication: "Sauf pour les loueurs, transporteurs et auto-écoles." },
      { q: "CA taxable 400 000, exportations 100 000, CA exonéré sans droit 500 000. Prorata ?", choix: ["40 %", "50 %", "80 %", "100 %"], bonne: 1, explication: "(400 000 + 100 000) / 1 000 000 = 50 %." },
      { q: "Le prorata s'applique à la TVA sur :", choix: ["Tous les achats sans exception", "Les immobilisations et charges communes", "Les seules ventes", "Les achats affectés exclusivement aux opérations taxables"], bonne: 1, explication: "Les achats exclusivement affectés suivent leur propre régime." },
      { q: "Un crédit de TVA apparaît lorsque :", choix: ["La TVA collectée dépasse la TVA déductible", "La TVA déductible dépasse la TVA collectée", "L'entreprise est bénéficiaire", "Les ventes sont exonérées sans droit"], bonne: 1, explication: "Il est reporté sur les déclarations suivantes." },
      { q: "Le compte « État, TVA due » est le :", choix: ["4455", "4456", "34552", "3456"], bonne: 1, explication: "4455 = TVA facturée ; 3456 = crédit de TVA." },
      { q: "Une entreprise dont le CA taxable dépasse 1 000 000 DH déclare la TVA :", choix: ["Annuellement", "Trimestriellement", "Mensuellement", "Jamais"], bonne: 2, explication: "Régime de la déclaration mensuelle." },
      { q: "La TVA non déductible :", choix: ["Est perdue et non comptabilisée", "S'ajoute au coût du bien ou de la charge", "Est déduite de l'IS", "Devient un crédit"], bonne: 1, explication: "On comptabilise le bien ou la charge TTC." },
      { q: "Une immobilisation cédée avant 5 ans dans une opération non taxable entraîne :", choix: ["Une déduction supplémentaire", "Un reversement d'une partie de la TVA déduite", "Aucun effet", "Un remboursement"], bonne: 1, explication: "Régularisation par cinquièmes pour les années restantes." },
    ],
  },

  4: {
    titre: "L'impôt sur les sociétés (IS) : champ d'application",
    description: "IS au Maroc : sociétés imposables de plein droit ou sur option, territorialité, exonérations, dividendes reçus et taux 2026 (20 %, 35 %, 40 %).",
    resume: md`
## L'essentiel — IS : champ d'application

- **IS** : impôt direct, annuel, déclaratif, sur les bénéfices des sociétés et personnes morales assujetties.
- **De plein droit** : SA, SARL (y compris à associé unique), SCA ; SNC et SCS dont un associé est une personne morale ; établissements publics et associations pour leurs opérations lucratives.
- **Sur option irrévocable** : SNC et SCS entre personnes physiques, sociétés en participation. Sinon **IR** chez les associés. Entreprise individuelle : **IR**.
- **Territorialité** : résidents imposés sur leurs activités au Maroc ; non-résidents avec établissement stable sur ses bénéfices ; sans établissement stable, **retenue à la source de 10 %** sur certains produits bruts (sous réserve des conventions).
- Dividendes reçus d'une société soumise à l'IS : **exclus** du résultat (abattement de 100 %).
- **Taux 2026 proportionnels** : **20 %** (bénéfice < 100 M DH), **35 %** (≥ 100 M DH), **40 %** (établissements de crédit, BAM, CDG, assurances).
- En plus : **cotisation minimale** (0,25 %, min. 3 000 DH, exonération 36 mois), **contribution sociale de solidarité** (bénéfice ≥ 1 M DH), **retenue sur dividendes** versés aux personnes physiques (11,25 % en 2026, 10 % en 2027).
- Déclaration du résultat fiscal dans les **3 mois** suivant la clôture.
`,
    exercices: md`
### Exercice 2 — Entreprise individuelle ou SARL ?

Un commerçant de Tanger hésite entre l'entreprise individuelle (IR) et la SARL (IS), pour un bénéfice annuel de 600 000 DH, puis de 200 000 DH. En SARL, il distribuerait tout le bénéfice après impôt en 2026. On ne tient compte ni des cotisations sociales ni d'un salaire de gérant. Barème IR : au-delà de 180 000 DH, taux de 37 % et somme à déduire de 27 400 DH.

1. Comparez l'impôt total dans les deux cas pour 600 000 DH de bénéfice.
2. Même question pour 200 000 DH. Conclusion ?

<details><summary>Voir le corrigé</summary>

**1)** Entreprise individuelle : $600\,000 \times 37\,\% - 27\,400 = \mathbf{194\,600\ DH}$.
SARL : IS $= 600\,000 \times 20\,\% = 120\,000$ DH ; dividende $= 480\,000$ DH ; retenue $= 480\,000 \times 11{,}25\,\% = 54\,000$ DH ; total **174 000 DH**. La SARL fait économiser 20 600 DH.

**2)** Entreprise individuelle : $200\,000 \times 37\,\% - 27\,400 = \mathbf{46\,600\ DH}$.
SARL : IS $= 40\,000$ DH ; retenue $= 160\,000 \times 11{,}25\,\% = 18\,000$ DH ; total **58 000 DH**. L'entreprise individuelle est ici plus avantageuse.

Conclusion : l'IS devient intéressant quand le bénéfice est élevé (le taux marginal de l'IR dépasse alors l'IS + la retenue) ; le choix dépend aussi de la responsabilité limitée, des formalités et de la politique de distribution (un bénéfice mis en réserve ne subit pas la retenue).

</details>

### Exercice 3 — Territorialité et conventions

Pour chaque situation, indiquez le mode d'imposition au Maroc :
1. Une société espagnole ouvre un chantier de construction d'un an à Tanger avec ses propres équipes.
2. Une société allemande, sans présence au Maroc, perçoit des redevances pour l'usage d'un logiciel par une société de Rabat.
3. Une filiale marocaine verse des dividendes à sa société mère marocaine soumise à l'IS.
4. Une SA marocaine réalise une partie de ses ventes à l'export.

<details><summary>Voir le corrigé</summary>

1. Le chantier constitue un **établissement stable** : les bénéfices qu'il réalise sont soumis à l'**IS** au Maroc (déclaration par l'établissement).
2. Non-résident sans établissement stable : **retenue à la source** sur le montant brut des redevances (10 % selon le CGI), opérée par la société de Rabat, sous réserve du taux prévu par la convention maroco-allemande.
3. Dividendes **exclus** du résultat fiscal de la société mère (abattement de 100 %) ; pas de retenue à la source entre sociétés soumises à l'IS dans les conditions prévues par le CGI.
4. La SA est résidente : **l'ensemble** de son bénéfice, y compris celui provenant de l'export, est soumis à l'IS au taux de droit commun (20 % si le bénéfice est inférieur à 100 M DH).

</details>
`,
    qcm: [
      { q: "Une SARL est soumise :", choix: ["À l'IR", "À l'IS de plein droit", "À l'IS sur option", "À aucun impôt sur le bénéfice"], bonne: 1, explication: "Société de capitaux." },
      { q: "Une SNC composée uniquement de personnes physiques est, sans option :", choix: ["Soumise à l'IS", "Soumise à l'IR chez les associés", "Exonérée", "Soumise à la TVA uniquement"], bonne: 1, explication: "Elle peut opter irrévocablement pour l'IS." },
      { q: "Taux de l'IS 2026 pour un bénéfice de 50 millions de DH :", choix: ["10 %", "20 %", "31 %", "35 %"], bonne: 1, explication: "Bénéfice inférieur à 100 M DH." },
      { q: "Taux de l'IS 2026 pour une banque :", choix: ["20 %", "35 %", "37 %", "40 %"], bonne: 3, explication: "Établissements de crédit et organismes assimilés." },
      { q: "Depuis la réforme, le taux de 35 % s'applique :", choix: ["À la fraction du bénéfice au-delà de 100 M DH", "À la totalité du bénéfice lorsqu'il atteint 100 M DH", "Aux seules sociétés exportatrices", "Aux associations"], bonne: 1, explication: "Les taux sont proportionnels." },
      { q: "Les dividendes reçus par une société soumise à l'IS d'une autre société soumise à l'IS sont :", choix: ["Taxés à 20 %", "Exclus du résultat fiscal", "Taxés à 11,25 %", "Soumis à la TVA"], bonne: 1, explication: "Abattement de 100 % pour éviter la double imposition." },
      { q: "Une entreprise individuelle est imposée :", choix: ["À l'IS", "À l'IR", "À la seule taxe professionnelle", "À la cotisation minimale uniquement"], bonne: 1, explication: "L'exploitant est imposé sur ses revenus professionnels." },
      { q: "Retenue à la source sur les dividendes versés à des personnes physiques en 2026 :", choix: ["15 %", "11,25 %", "10 %", "20 %"], bonne: 1, explication: "Baisse progressive vers 10 % en 2027." },
      { q: "La déclaration du résultat fiscal doit être déposée :", choix: ["Dans le mois suivant la clôture", "Dans les trois mois suivant la clôture", "Dans l'année", "Tous les mois"], bonne: 1, explication: "Par voie électronique, avec les états de synthèse." },
      { q: "Un non-résident sans établissement stable qui perçoit des redevances du Maroc est imposé :", choix: ["Par déclaration annuelle de bénéfice", "Par retenue à la source sur le montant brut", "À la TVA seulement", "Pas du tout"], bonne: 1, explication: "La société marocaine qui paie opère la retenue." },
    ],
  },

  5: {
    titre: "L'IS : détermination du résultat fiscal",
    description: "Résultat fiscal : déductibilité des charges, réintégrations et déductions, amortissements, provisions et déficits reportables, avec exercices corrigés.",
    resume: md`
## L'essentiel — Le résultat fiscal

- **Résultat fiscal = résultat net comptable + réintégrations − déductions** (extra-comptable, tableau de passage).
- Charge déductible : intérêt de l'exploitation, effective et justifiée, rattachée à l'exercice, diminution de l'actif net, non exclue par un texte ; espèces au-delà des plafonds : déduction partielle.
- **Réintégrations** : IS et CSS ; amendes et pénalités ; amortissement des véhicules de tourisme au-delà de **300 000 DH TTC** (sur 5 ans min.) ; dons au-delà des limites (ex. **2 ‰ du CA**) ; cadeaux de plus de **100 DH** l'unité ; intérêts de comptes courants au-delà des limites ; provisions et amortissements non conformes.
- **Déductions** : dividendes reçus de sociétés soumises à l'IS (100 %), reprises de provisions réintégrées, produits exonérés.
- **Amortissements** : comptabilisés, taux d'usage ; **dégressif** avec coefficients 1,5 / 2 / 3 ; différés en période déficitaire reportables sans limite.
- **Provisions** : risque précis, probable, comptabilisé ; créances douteuses : recours en justice dans les **12 mois**.
- **Déficits** : reportables **4 ans** ; la part due aux **amortissements** sans limite ; la CM reste due.
`,
    exercices: md`
### Exercice 2 — Amortissement dégressif fiscal

Une entreprise de Meknès acquiert le 1ᵉʳ janvier une machine de 200 000 DH HT, amortissable sur 5 ans selon le mode dégressif (coefficient 2).

1. Calculez le taux dégressif.
2. Présentez le plan d'amortissement (passage au linéaire lorsque l'annuité linéaire sur la durée restante devient supérieure).

<details><summary>Voir le corrigé</summary>

**1)** Taux linéaire : $1/5 = 20\,\%$ ; taux dégressif : $20\,\% \times 2 = \mathbf{40\,\%}$.

**2)**

| Année | Base (VNA début) | Dégressif 40 % | Linéaire sur durée restante | Annuité retenue | VNA fin |
|:--:|---:|---:|---:|---:|---:|
| 1 | 200 000 | 80 000 | 40 000 (÷ 5) | **80 000** | 120 000 |
| 2 | 120 000 | 48 000 | 30 000 (÷ 4) | **48 000** | 72 000 |
| 3 | 72 000 | 28 800 | 24 000 (÷ 3) | **28 800** | 43 200 |
| 4 | 43 200 | 17 280 | 21 600 (÷ 2) | **21 600** | 21 600 |
| 5 | 21 600 | — | 21 600 | **21 600** | 0 |

Total : 200 000 DH ✔. L'amortissement dégressif concentre la déduction sur les premières années : l'entreprise paie moins d'IS au début (avantage de trésorerie).

</details>

### Exercice 3 — Imputer des déficits antérieurs

Une SARL de Nador a subi un déficit fiscal de 400 000 DH en 2021 (dont 150 000 DH provenant d'amortissements) et de 100 000 DH en 2022 (dont 20 000 DH d'amortissements). Ses résultats fiscaux 2023, 2024 et 2025 ont été nuls. En 2026, son résultat fiscal avant imputation est de 380 000 DH et son chiffre d'affaires de 5 000 000 DH.

1. Quels déficits sont encore imputables en 2026 ?
2. Calculez le résultat imposable, l'IS (20 %) et comparez à la cotisation minimale.

<details><summary>Voir le corrigé</summary>

**1)**
- Déficit 2021 hors amortissements (250 000 DH) : reportable sur 2022 à 2025, **expiré** en 2026 ;
- Amortissements 2021 (150 000 DH) : **imputables sans limite** ;
- Déficit 2022 hors amortissements (80 000 DH) : reportable sur 2023 à 2026 : **encore imputable** ;
- Amortissements 2022 (20 000 DH) : imputables.

Total imputable : $150\,000 + 80\,000 + 20\,000 = \mathbf{250\,000\ DH}$.

**2)** Résultat imposable : $380\,000 - 250\,000 = \mathbf{130\,000\ DH}$ ; IS $= 26\,000$ DH ; CM $= 5\,000\,000 \times 0{,}25\,\% = 12\,500$ DH. La société paie **26 000 DH**.

</details>
`,
    qcm: [
      { q: "Le résultat fiscal est égal à :", choix: ["Résultat comptable − réintégrations + déductions", "Résultat comptable + réintégrations − déductions", "Chiffre d'affaires × 20 %", "Résultat d'exploitation"], bonne: 1, explication: "Retraitements extra-comptables." },
      { q: "L'IS comptabilisé en charge est, fiscalement :", choix: ["Déductible", "Réintégré", "Déduit deux fois", "Ignoré"], bonne: 1, explication: "L'impôt n'est pas déductible de sa propre base." },
      { q: "Voiture de tourisme de 400 000 DH TTC amortie à 20 %. Réintégration annuelle ?", choix: ["80 000 DH", "20 000 DH", "0 DH", "60 000 DH"], bonne: 1, explication: "Dotation 80 000 − déductible 300 000 × 20 % = 60 000 : réintégration de 20 000 DH." },
      { q: "Une amende pour infraction routière d'un camion de l'entreprise est :", choix: ["Déductible", "Non déductible", "Déductible à 50 %", "Un produit"], bonne: 1, explication: "Les amendes et pénalités sont toujours réintégrées." },
      { q: "Des cadeaux publicitaires de 80 DH l'unité portant le logo sont :", choix: ["Réintégrés", "Déductibles", "Déductibles à 50 %", "Soumis à la TVA uniquement"], bonne: 1, explication: "Valeur unitaire inférieure à 100 DH." },
      { q: "Des dividendes reçus d'une filiale marocaine soumise à l'IS sont :", choix: ["Réintégrés", "Déduits du résultat fiscal", "Taxés à 35 %", "Sans effet"], bonne: 1, explication: "Abattement de 100 %." },
      { q: "Un déficit fiscal ordinaire est reportable sur :", choix: ["2 exercices", "4 exercices", "10 exercices", "Sans limite"], bonne: 1, explication: "La part due aux amortissements est reportable sans limite." },
      { q: "Le coefficient dégressif d'un bien amortissable sur 8 ans est :", choix: ["1,5", "2", "3", "2,5"], bonne: 2, explication: "Durée supérieure à 6 ans." },
      { q: "Une provision « pour risques divers » sans risque précis est :", choix: ["Déductible", "Réintégrée", "Déductible à 50 %", "Obligatoire"], bonne: 1, explication: "Le risque doit être nettement précisé et probable." },
      { q: "La reprise d'une provision qui avait été réintégrée lors de sa constitution est :", choix: ["Imposable", "Déduite", "Réintégrée", "Soumise à la TVA"], bonne: 1, explication: "Sinon le même montant serait imposé deux fois." },
    ],
  },

  6: {
    titre: "L'IS : liquidation et paiement",
    description: "Liquidation de l'IS : cotisation minimale, contribution sociale de solidarité, acomptes provisionnels, régularisation et écritures, exercices corrigés.",
    resume: md`
## L'essentiel — Liquidation et paiement de l'IS

- **IS = résultat fiscal imposable × taux** (20 %, 35 % si bénéfice ≥ 100 M DH, 40 % établissements de crédit et assurances).
- **Cotisation minimale** : 0,25 % du CA HT + produits accessoires, financiers, subventions ; **minimum 3 000 DH** ; exonération les **36 premiers mois** ; impôt dû $= \max(IS ; CM)$ ; l'excédent de CM n'est pas reportable.
- **Contribution sociale de solidarité** (2026-2028), bénéfice ≥ 1 M DH : 1,5 % (1 à 5 M), 2,5 % (5 à 10 M), 3,5 % (10 à 40 M), 5 % (≥ 40 M) ; non déductible.
- **Acomptes** : 4 × 25 % de l'impôt de l'exercice de **référence** (N−1), avant la fin des 3ᵉ, 6ᵉ, 9ᵉ et 12ᵉ mois.
- **Régularisation** dans les **3 mois** suivant la clôture : complément si IS > acomptes ; excédent imputé sur les acomptes suivants.
- Sanctions de retard (pénalité, majorations) non déductibles.
- Écritures : acompte D 3453 / C 5141 ; IS D 6701 / C 4453 ; imputation D 4453 / C 3453.
`,
    exercices: md`
### Exercice 2 — IS ou cotisation minimale ?

Déterminez l'impôt dû par chacune des sociétés suivantes en 2026 :
1. Une SARL de Safi : bénéfice fiscal 80 000 DH ; chiffre d'affaires 20 000 000 DH.
2. Une SA de Rabat : déficit fiscal ; chiffre d'affaires 900 000 DH.
3. Une SARL créée il y a 18 mois : déficit fiscal ; chiffre d'affaires 2 000 000 DH.

<details><summary>Voir le corrigé</summary>

1. IS : $80\,000 \times 20\,\% = 16\,000$ DH ; CM : $20\,000\,000 \times 0{,}25\,\% = 50\,000$ DH. Impôt dû : **50 000 DH** (la CM, la marge étant très faible par rapport au CA).
2. Pas d'IS ; CM : $900\,000 \times 0{,}25\,\% = 2\,250$ DH, inférieure au minimum : **3 000 DH**.
3. Société de moins de 36 mois : **exonérée de CM** ; déficitaire : **aucun impôt** (elle reste tenue de déposer sa déclaration).

</details>

### Exercice 3 — Contribution sociale de solidarité et régularisation

1. Calculez l'IS et la contribution sociale de solidarité 2026 de trois sociétés dont les bénéfices nets sont de 4 500 000 DH, 12 000 000 DH et 45 000 000 DH.
2. Une société a payé 100 000 DH d'IS au titre de 2025. Son IS 2026 s'élève à 150 000 DH. Calculez ses acomptes 2026 et la régularisation.

<details><summary>Voir le corrigé</summary>

**1)**

| Bénéfice | IS (20 %) | CSS (taux) | Total |
|---:|---:|---:|---:|
| 4 500 000 | 900 000 | 67 500 (1,5 %) | 967 500 |
| 12 000 000 | 2 400 000 | 420 000 (3,5 %) | 2 820 000 |
| 45 000 000 | 9 000 000 | 2 250 000 (5 %) | 11 250 000 |

**2)** Acomptes 2026 : $100\,000 \times 25\,\% = 25\,000$ DH chacun, soit 100 000 DH. IS 2026 : 150 000 DH : **complément de 50 000 DH** à verser avec la déclaration, avant le 31 mars 2027. Les acomptes 2027 seront de $150\,000 \times 25\,\% = 37\,500$ DH.

</details>
`,
    qcm: [
      { q: "Le taux général de la cotisation minimale est de :", choix: ["0,5 %", "0,25 %", "1 %", "2 %"], bonne: 1, explication: "Avec un minimum de 3 000 DH." },
      { q: "Une société déficitaire depuis 5 ans :", choix: ["Ne paie aucun impôt", "Paie la cotisation minimale", "Paie l'IS à 20 %", "Paie la CSS"], bonne: 1, explication: "La CM est due même en cas de perte (hors 36 premiers mois)." },
      { q: "IS 12 000 DH, CM 20 000 DH. Impôt dû ?", choix: ["12 000 DH", "20 000 DH", "32 000 DH", "8 000 DH"], bonne: 1, explication: "On paie le plus élevé des deux." },
      { q: "Les acomptes provisionnels de l'IS sont égaux chacun à :", choix: ["25 % de l'IS de l'exercice en cours", "25 % de l'impôt de l'exercice de référence", "10 % du CA", "1/12 de l'IS"], bonne: 1, explication: "L'exercice de référence est le dernier exercice clos." },
      { q: "Le premier acompte d'une société à exercice calendaire est dû avant :", choix: ["Le 31 janvier", "Le 31 mars", "Le 30 juin", "Le 31 décembre"], bonne: 1, explication: "Avant la fin du 3e mois de l'exercice." },
      { q: "La contribution sociale de solidarité concerne les sociétés dont le bénéfice net est au moins de :", choix: ["100 000 DH", "1 000 000 DH", "5 000 000 DH", "100 000 000 DH"], bonne: 1, explication: "Taux de 1,5 % à 5 % selon le bénéfice." },
      { q: "Bénéfice net de 7 000 000 DH : taux de la CSS ?", choix: ["1,5 %", "2,5 %", "3,5 %", "5 %"], bonne: 1, explication: "Tranche de 5 à 10 millions de DH." },
      { q: "Des acomptes supérieurs à l'IS dû donnent lieu :", choix: ["À une perte définitive", "À un excédent imputé sur les acomptes suivants", "À une amende", "À une augmentation de la CM"], bonne: 1, explication: "Il est restitué s'il ne peut être imputé." },
      { q: "La régularisation de l'IS intervient :", choix: ["Dans le mois suivant la clôture", "Dans les trois mois suivant la clôture", "Un an après", "À chaque acompte"], bonne: 1, explication: "Avec le dépôt de la déclaration du résultat fiscal." },
      { q: "Le versement d'un acompte d'IS s'enregistre au débit du compte :", choix: ["6701", "3453", "4453", "4456"], bonne: 1, explication: "Acomptes sur impôts sur les résultats (actif)." },
    ],
  },

  7: {
    titre: "L'impôt sur le revenu (IR)",
    description: "IR des salariés au Maroc : salaire brut imposable, frais professionnels, CNSS et AMO, barème, charges de famille et bulletin de paie.",
    resume: md`
## L'essentiel — L'impôt sur le revenu

- IR : revenus des **personnes physiques** ; catégories : professionnels, agricoles, **salariaux**, fonciers, capitaux mobiliers.
- **SBI** = salaire brut global (base, primes, heures supplémentaires, avantages en nature) − éléments **exonérés** (indemnités de frais justifiées, allocations familiales…).
- **SNI** = SBI − **frais professionnels** (35 % si SBI annuel ≤ 78 000 DH ; 25 % au-delà, plafond **35 000 DH/an**) − **CNSS** 4,48 % (plafond 6 000 DH/mois) − **AMO** 2,26 % (sans plafond) − retraite complémentaire − intérêts du prêt logement (limites).
- **Barème annuel** : 0 % jusqu'à 40 000 ; 10 % (− 4 000) ; 20 % (− 10 000) ; 30 % (− 18 000) ; 34 % (− 22 000) ; **37 %** au-delà de 180 000 (− 27 400).
- **IR brut = SNI × taux − somme à déduire** ; **charges de famille** : 500 DH/an par personne (41,67 DH/mois), 6 au maximum.
- **Retenue à la source** par l'employeur, versée avant la fin du mois suivant ; déclaration annuelle des salaires.
- **Net à payer** = SBI + éléments exonérés − cotisations salariales − IR net (les frais professionnels ne sont pas retenus).
`,
    exercices: md`
### Exercice 2 — Un salaire qui ne supporte pas d'IR

Un employé d'une usine de Fès, marié avec un enfant à charge (2 personnes), perçoit 6 000 DH brut par mois.

1. Calculez le SNI (frais professionnels : SBI annuel inférieur à 78 000 DH).
2. Calculez l'IR brut, l'IR net et le net à payer.

<details><summary>Voir le corrigé</summary>

**1)** CNSS : $6\,000 \times 4{,}48\,\% = 268{,}80$ ; AMO : $6\,000 \times 2{,}26\,\% = 135{,}60$ ; frais professionnels : SBI annuel 72 000 DH ≤ 78 000 : $35\,\% \times 6\,000 = 2\,100$ DH. SNI $= 6\,000 - 268{,}80 - 135{,}60 - 2\,100 = \mathbf{3\,495{,}60\ DH}$.

**2)** Tranche de 3 333,34 à 5 000 DH : $IR\ brut = 3\,495{,}60 \times 10\,\% - 333{,}33 = \mathbf{16{,}23\ DH}$ ; charges de famille : $2 \times 41{,}67 = 83{,}33$ DH, supérieures à l'IR brut : **IR net = 0**. Net à payer : $6\,000 - 268{,}80 - 135{,}60 = \mathbf{5\,595{,}60\ DH}$.

</details>

### Exercice 3 — Calcul annuel

Une comptable de Rabat perçoit un salaire brut annuel de 90 000 DH (7 500 DH par mois). Elle a trois enfants à charge et son conjoint est à sa charge (4 personnes).

1. Calculez les cotisations salariales annuelles (CNSS plafonnée à 72 000 DH par an), les frais professionnels et le SNI annuel.
2. Calculez l'IR annuel net.

<details><summary>Voir le corrigé</summary>

**1)** CNSS : $72\,000 \times 4{,}48\,\% = 3\,225{,}60$ DH ; AMO : $90\,000 \times 2{,}26\,\% = 2\,034$ DH ; frais professionnels : SBI > 78 000 : $25\,\% \times 90\,000 = 22\,500$ DH (inférieur au plafond de 35 000). SNI $= 90\,000 - 3\,225{,}60 - 2\,034 - 22\,500 = \mathbf{62\,240{,}40\ DH}$.

**2)** Tranche de 60 001 à 80 000 DH : $IR\ brut = 62\,240{,}40 \times 20\,\% - 10\,000 = 2\,448{,}08$ DH ; charges de famille : $4 \times 500 = 2\,000$ DH ; **IR net = 448,08 DH** par an (environ 37,34 DH par mois).

</details>
`,
    qcm: [
      { q: "Les frais professionnels d'un salarié dont le SBI annuel est de 60 000 DH sont de :", choix: ["20 %", "25 %", "35 %", "0 %"], bonne: 2, explication: "35 % lorsque le SBI annuel ne dépasse pas 78 000 DH." },
      { q: "Le plafond annuel des frais professionnels au taux de 25 % est de :", choix: ["30 000 DH", "35 000 DH", "40 000 DH", "Sans plafond"], bonne: 1, explication: "Depuis la loi de finances 2023." },
      { q: "La cotisation CNSS salariale de 4,48 % est plafonnée à :", choix: ["6 000 DH de salaire mensuel", "10 000 DH", "Sans plafond", "3 000 DH"], bonne: 0, explication: "L'AMO de 2,26 %, elle, n'est pas plafonnée." },
      { q: "Le seuil annuel d'exonération de l'IR depuis 2025 est de :", choix: ["30 000 DH", "36 000 DH", "40 000 DH", "50 000 DH"], bonne: 2, explication: "Relevé de 30 000 à 40 000 DH par la loi de finances 2025." },
      { q: "Le taux marginal le plus élevé de l'IR depuis 2025 est de :", choix: ["38 %", "37 %", "35 %", "40 %"], bonne: 1, explication: "Au-delà de 180 000 DH de revenu net imposable." },
      { q: "SNI annuel de 150 000 DH. IR brut ?", choix: ["51 000 DH", "29 000 DH", "33 600 DH", "22 000 DH"], bonne: 1, explication: "150 000 × 34 % − 22 000 = 29 000 DH." },
      { q: "La réduction pour charges de famille est de :", choix: ["360 DH par personne et par an", "500 DH par personne et par an, 6 personnes au plus", "1 000 DH par enfant", "30 DH par mois"], bonne: 1, explication: "Soit 3 000 DH par an au maximum." },
      { q: "Une indemnité de déplacement justifiée par des frais réels est :", choix: ["Imposable", "Exonérée", "Soumise à la TVA", "Déduite du net à payer"], bonne: 1, explication: "Elle rembourse des frais engagés pour l'emploi." },
      { q: "Les frais professionnels sont :", choix: ["Retenus sur le net à payer", "Une déduction fiscale forfaitaire pour calculer le SNI", "Une cotisation sociale", "Versés à la CNSS"], bonne: 1, explication: "Ils ne réduisent pas le salaire versé." },
      { q: "L'IR sur salaires est versé au Trésor par :", choix: ["Le salarié", "L'employeur, par retenue à la source", "La CNSS", "La banque"], bonne: 1, explication: "Avant la fin du mois suivant le paiement du salaire." },
    ],
  },

  8: {
    titre: "Droits d'enregistrement, taxe professionnelle et contrôle fiscal",
    description: "Droits d'enregistrement (actes, délai de 30 jours, taux), taxe professionnelle, contrôle fiscal, procédure de rectification, recours et prescription au Maroc.",
    resume: md`
## L'essentiel — Enregistrement, fiscalité locale et contrôle

- **Droits d'enregistrement** : impôt sur certains actes (mutations d'immeubles, de fonds de commerce, de titres de certaines sociétés, apports, baux…) ; enregistrement dans les **30 jours** ; base = prix déclaré (rehaussable à la valeur vénale) ; taux proportionnels (ordre de grandeur : 4 % locaux construits, 6 % fonds de commerce), réduits ou fixes ; nombreuses exonérations récentes. **Taux à vérifier chaque année.**
- **Taxe professionnelle** (loi 47-06) : base = **valeur locative** des locaux professionnels ; taux de 10 %, 20 % ou 30 % selon la valeur locative ; **exonération 5 ans** pour les activités nouvelles ; déductible.
- **Taxe de services communaux** : sur la valeur locative, finance les services de la commune.
- **Contrôle** : sur pièces, droit de communication, **vérification de comptabilité** (avis 15 jours avant, charte du contribuable, durée limitée), examen de la situation fiscale des personnes physiques.
- **Procédure contradictoire** : 1re notification → réponse en **30 jours** → 2e notification → **CLT** ou **CNRF** → tribunal administratif. Taxation d'office en cas de défaut de déclaration.
- **Prescription** : **4 ans** (jusqu'à 10 ans dans certains cas graves). Sanctions non déductibles.
`,
    exercices: md`
### Exercice 2 — Taxe professionnelle de trois entreprises

Barème fourni : 10 % si la valeur locative annuelle ne dépasse pas 50 000 DH ; 20 % de 50 001 à 100 000 DH ; 30 % au-delà (le taux s'applique à toute la valeur locative).

1. Une pharmacie de Taza, ouverte il y a 10 ans : valeur locative 40 000 DH.
2. Un concessionnaire automobile de Rabat, installé depuis 15 ans : valeur locative 120 000 DH.
3. Une start-up de Casablanca créée il y a 3 ans : valeur locative 60 000 DH.

Calculez la taxe professionnelle de chacune.

<details><summary>Voir le corrigé</summary>

1. $40\,000 \times 10\,\% = \mathbf{4\,000\ DH}$.
2. $120\,000 \times 30\,\% = \mathbf{36\,000\ DH}$.
3. Activité créée depuis moins de 5 ans : **exonérée** (elle reste soumise aux obligations déclaratives et, le cas échéant, à la taxe de services communaux).

</details>

### Exercice 3 — Les délais d'un contrôle

La SA « Doukkala Emballages » reçoit le 10 mars 2026 la première notification d'un redressement portant sur l'exercice 2023 (charges jugées non déductibles : 400 000 DH ; taux de l'IS : 20 %).

1. Jusqu'à quelle date doit-elle répondre ?
2. Calculez l'IS supplémentaire envisagé (hors sanctions).
3. L'administration aurait-elle pu redresser l'exercice 2021 ?
4. Après la seconde notification, l'entreprise n'est toujours pas d'accord. Quels recours a-t-elle ?

<details><summary>Voir le corrigé</summary>

1. Elle dispose de **30 jours** à compter de la réception : jusqu'au **9 avril 2026**.
2. $400\,000 \times 20\,\% = \mathbf{80\,000\ DH}$.
3. Non en principe : en 2026, la prescription de **4 ans** couvre les exercices 2022 à 2025 ; 2021 est prescrit, sauf cas particuliers (absence de déclaration…).
4. Saisir la **commission locale de taxation** ou la **commission nationale de recours fiscal** (selon la nature et l'importance du dossier), puis, si nécessaire, le **tribunal administratif**.

</details>
`,
    qcm: [
      { q: "Le délai d'enregistrement d'un acte soumis aux droits d'enregistrement est de :", choix: ["8 jours", "30 jours", "3 mois", "1 an"], bonne: 1, explication: "Au-delà, pénalités et majorations." },
      { q: "La base de la taxe professionnelle est :", choix: ["Le chiffre d'affaires", "La valeur locative des locaux professionnels", "Le bénéfice", "La masse salariale"], bonne: 1, explication: "Loi 47-06 relative à la fiscalité locale." },
      { q: "Une activité nouvellement créée est exonérée de taxe professionnelle pendant :", choix: ["1 an", "3 ans", "5 ans", "10 ans"], bonne: 2, explication: "Exonération quinquennale." },
      { q: "La taxe professionnelle est, pour l'IS :", choix: ["Non déductible", "Déductible", "Réintégrée", "Imputée sur l'IS"], bonne: 1, explication: "C'est une charge d'exploitation (impôts et taxes)." },
      { q: "L'avis de vérification doit être adressé à l'entreprise au moins :", choix: ["2 jours avant", "15 jours avant", "3 mois avant", "Le jour même"], bonne: 1, explication: "Avec la charte du contribuable." },
      { q: "Après une première notification de redressement, l'entreprise dispose pour répondre de :", choix: ["8 jours", "15 jours", "30 jours", "90 jours"], bonne: 2, explication: "La procédure est contradictoire." },
      { q: "Le délai de prescription de droit commun en matière d'impôts est de :", choix: ["2 ans", "4 ans", "6 ans", "10 ans"], bonne: 1, explication: "Porté à 10 ans dans certains cas graves." },
      { q: "La commission locale de taxation est :", choix: ["Un tribunal pénal", "Une commission paritaire de recours", "Un service de la CNSS", "Un organe de la Bourse"], bonne: 1, explication: "Elle réunit administration et représentants des contribuables." },
      { q: "En cas de défaut de déclaration, l'administration peut procéder :", choix: ["À une vérification de comptabilité uniquement", "À une taxation d'office après mise en demeure", "À un remboursement", "À un abattement"], bonne: 1, explication: "Procédure prévue par le CGI." },
      { q: "Les pénalités et majorations fiscales sont :", choix: ["Déductibles du résultat fiscal", "Non déductibles", "Déductibles à 50 %", "Imputables sur l'IS"], bonne: 1, explication: "Elles sont réintégrées." },
    ],
  },
};

export default chapitres;
