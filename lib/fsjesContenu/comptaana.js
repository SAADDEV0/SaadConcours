// Comptabilité Analytique (S3) — compléments par chapitre.
const md = String.raw;

export default {
  1: {
    titre: "Introduction à la comptabilité analytique",
    resume: md`
## L'essentiel — Introduction à la CAE

- La **comptabilité analytique** (ou de gestion) calcule les **coûts** des produits, services ou fonctions pour **expliquer les résultats** et **aider à décider**.
- Elle est **interne** et **facultative**, contrairement à la comptabilité générale (externe, légale, annuelle).
- La CG classe les charges **par nature** ; la CAE les classe **par destination** (produit, fonction, atelier).
- **Charge directe** : affectée sans calcul à un coût ; **charge indirecte** : commune à plusieurs coûts, elle doit être **répartie**.
- Objectifs : coûts de revient, prix de vente, résultats par produit, budgets, contrôle de gestion.
- Cascade des coûts : **coût d'achat → coût de production → coût de revient → résultat analytique** ($RA = CA - \text{coût de revient}$).
`,
    exercices: md`
### Exercice 2 — Menuiserie : classer les charges et lire un résultat

Une menuiserie fabrique des tables et des chaises dans le même atelier.

1. Classez en charges directes (D) ou indirectes (I) pour le coût des **tables** : a) le bois utilisé pour les tables ; b) le salaire de l'ouvrier qui ne fabrique que des tables ; c) le loyer de l'atelier ; d) l'électricité de l'atelier ; e) la commission versée au vendeur sur chaque table vendue ; f) le salaire du directeur.
2. Les tables ont rapporté un chiffre d'affaires de 500 000 DH pour un coût de revient de 430 000 DH. Calculez le résultat analytique et le taux de marge sur le chiffre d'affaires.

<details><summary>Voir le corrigé</summary>

**1)** a) **D** ; b) **D** ; c) **I** (commun aux tables et aux chaises) ; d) **I** ; e) **D** (charge directe de distribution) ; f) **I**.

**2)** $RA = 500\,000 - 430\,000 = 70\,000$ DH ; taux de marge $= 70\,000 / 500\,000 = 14\%$.

</details>
`,
    qcm: [
      { q: "La comptabilité analytique est :", choix: ["Obligatoire pour toutes les entreprises", "Un outil de gestion interne facultatif", "Destinée d'abord à l'administration fiscale", "Tenue uniquement en fin d'année"], bonne: 1, explication: "Elle sert d'abord les dirigeants et les gestionnaires." },
      { q: "La comptabilité analytique classe les charges :", choix: ["Par nature", "Par destination", "Par ordre alphabétique", "Par date de paiement"], bonne: 1, explication: "La CG classe par nature, la CAE par destination." },
      { q: "Le loyer d'une usine qui fabrique trois produits est une charge :", choix: ["Directe", "Indirecte", "Non incorporable", "Supplétive"], bonne: 1, explication: "Elle concerne plusieurs produits et doit être répartie." },
      { q: "Le résultat analytique est égal à :", choix: ["CA − coût de production", "CA − coût de revient", "Coût de revient − coût d'achat", "CA − charges fixes"], bonne: 1, explication: "RA = chiffre d'affaires − coût de revient." },
      { q: "Dans l'ordre, la cascade des coûts est :", choix: ["Revient → production → achat", "Achat → production → revient", "Production → achat → revient", "Achat → revient → production"], bonne: 1, explication: "On suit le cycle : acheter, produire, distribuer." },
    ],
  },

  2: {
    titre: "Les charges de la comptabilité analytique",
    resume: md`
## L'essentiel — Les charges incorporables

- Les charges de la CG doivent être **retraitées** avant d'entrer dans les coûts.
- $\text{Charges incorporables} = \text{Charges CG} - \text{CNI} + \text{CS} \pm \text{différences d'incorporation}$.
- **Charges non incorporables (CNI)** : charges non liées à l'exploitation normale — amendes, pénalités, dons, VNA des cessions, **IS**, amortissements excessifs.
- **Charges supplétives (CS)** : charges **fictives** absentes de la CG mais réelles économiquement — rémunération de l'exploitant individuel, rémunération des capitaux propres.
- **Charge d'usage** : remplace l'amortissement comptable, calculée sur la durée d'utilisation réelle ; **différence d'incorporation** = charge d'usage − dotation comptable.
- Les charges sont souvent **mensualisées** : penser à diviser les montants annuels par 12.
`,
    exercices: md`
### Exercice 2 — Calcul annuel des charges incorporables

Une entreprise individuelle présente pour l'année : charges de la CG 1 200 000 DH, dont impôt sur le résultat 45 000 DH, dons 5 000 DH et amende 3 000 DH. Les dotations aux amortissements s'élèvent à 90 000 DH alors que la charge d'usage est estimée à 72 000 DH. Les capitaux propres (800 000 DH) sont rémunérés au taux de 6 %.

Calculez les charges incorporables de l'année.

<details><summary>Voir le corrigé</summary>

| Élément | Montant |
|---|--:|
| Charges de la CG | 1 200 000 |
| − Impôt sur le résultat, dons, amende (CNI) | −53 000 |
| + Rémunération des capitaux propres : $800\,000 \times 6\%$ (CS) | +48 000 |
| ± Différence d'incorporation : $72\,000 - 90\,000$ | −18 000 |
| **Charges incorporables** | **1 177 000** |

</details>
`,
    qcm: [
      { q: "L'impôt sur les sociétés est, en comptabilité analytique :", choix: ["Une charge directe", "Une charge supplétive", "Une charge non incorporable", "Une charge d'usage"], bonne: 2, explication: "Ce n'est pas un coût d'exploitation." },
      { q: "La rémunération des capitaux propres est :", choix: ["Une charge non incorporable", "Une charge supplétive", "Un produit", "Une charge directe de production"], bonne: 1, explication: "Charge fictive, absente de la CG mais réelle économiquement." },
      { q: "Les charges incorporables se calculent par :", choix: ["Charges CG + CNI − CS", "Charges CG − CNI + CS ± différences", "Charges CG × taux de MCV", "CNI + CS"], bonne: 1, explication: "On retire ce qui ne concerne pas l'exploitation et on ajoute les charges fictives." },
      { q: "Une amende fiscale est :", choix: ["Incorporable", "Non incorporable", "Supplétive", "Une charge d'usage"], bonne: 1, explication: "Elle ne relève pas de l'exploitation normale." },
      { q: "La charge d'usage est calculée sur :", choix: ["La durée fiscale d'amortissement", "La durée d'utilisation économique réelle", "Une durée fixe de 5 ans", "La durée de l'emprunt"], bonne: 1, explication: "Elle traduit l'usure réelle du bien." },
    ],
  },

  3: {
    titre: "La méthode des centres d'analyse",
    resume: md`
## L'essentiel — Les centres d'analyse

- Les **charges indirectes** passent par des **centres d'analyse** avant d'être imputées aux coûts.
- **Centres auxiliaires** (administration, entretien, énergie…) : travaillent pour les autres centres ; **centres principaux** (approvisionnement, production, distribution) : travaillent pour les produits.
- **Répartition primaire** : charges indirectes réparties entre tous les centres selon des clés.
- **Répartition secondaire** : les centres auxiliaires sont vidés vers les centres principaux.
- **Prestations réciproques** : système d'équations, par exemple $E = a + x\,N$ et $N = b + y\,E$.
- **Coût de l'unité d'œuvre** = total du centre principal ÷ nombre d'UO ; charge imputée = UO consommées × coût de l'UO.
- UO classiques : kg acheté ou 100 DH d'achats (approvisionnement), heure machine ou de MOD (production), 100 DH de CA (distribution).
`,
    exercices: md`
### Exercice 2 — Répartition secondaire en cascade et prestations réciproques

**Partie A** — Après répartition primaire : Administration 20 000 ; Entretien 10 000 ; Approvisionnement 30 000 ; Atelier 80 000 ; Distribution 25 000.

- Administration se répartit : 10 % Entretien, 20 % Approvisionnement, 50 % Atelier, 20 % Distribution.
- Entretien se répartit : 20 % Approvisionnement, 60 % Atelier, 20 % Distribution.
- UO : kg acheté (18 200 kg) ; heure machine (3 240 h) ; 100 DH de CA (CA = 628 000 DH).

Effectuez la répartition secondaire et calculez le coût de chaque UO.

**Partie B** — Deux centres auxiliaires se rendent des services : $E = 17\,000 + 0{,}2\,N$ et $N = 10\,000 + 0{,}25\,E$. Calculez $E$ et $N$.

<details><summary>Voir le corrigé</summary>

**Partie A**

| | Administration | Entretien | Approvisionnement | Atelier | Distribution |
|---|--:|--:|--:|--:|--:|
| Primaire | 20 000 | 10 000 | 30 000 | 80 000 | 25 000 |
| Administration | −20 000 | +2 000 | +4 000 | +10 000 | +4 000 |
| Entretien | | −12 000 | +2 400 | +7 200 | +2 400 |
| **Total secondaire** | 0 | 0 | **36 400** | **97 200** | **31 400** |

Contrôle : $36\,400 + 97\,200 + 31\,400 = 165\,000$ = total primaire.

| Centre | Nombre d'UO | Coût de l'UO |
|---|--:|--:|
| Approvisionnement | 18 200 kg | 36 400 / 18 200 = **2 DH** |
| Atelier | 3 240 h | 97 200 / 3 240 = **30 DH** |
| Distribution | 628 000 / 100 = 6 280 | 31 400 / 6 280 = **5 DH** |

**Partie B** — $E = 17\,000 + 0{,}2(10\,000 + 0{,}25E) = 19\,000 + 0{,}05E$, donc $0{,}95E = 19\,000$ et $E = 20\,000$ DH ; $N = 10\,000 + 0{,}25 \times 20\,000 = 15\,000$ DH.

</details>
`,
    qcm: [
      { q: "La répartition secondaire consiste à :", choix: ["Répartir les charges directes", "Vider les centres auxiliaires dans les centres principaux", "Calculer le résultat analytique", "Répartir le CA entre les produits"], bonne: 1, explication: "Après elle, seuls les centres principaux ont un total." },
      { q: "Le coût de l'unité d'œuvre est égal à :", choix: ["Total du centre × nombre d'UO", "Total du centre ÷ nombre d'UO", "Nombre d'UO ÷ total du centre", "Total primaire ÷ CA"], bonne: 1, explication: "C'est le coût d'une unité d'activité du centre." },
      { q: "Un centre « Entretien » est généralement :", choix: ["Un centre principal", "Un centre auxiliaire", "Une charge supplétive", "Une unité d'œuvre"], bonne: 1, explication: "Il travaille pour les autres centres, pas pour les produits." },
      { q: "Les prestations réciproques se résolvent par :", choix: ["Une règle de trois", "Un système d'équations", "Le CMUP", "Le seuil de rentabilité"], bonne: 1, explication: "Chaque centre dépend du total de l'autre." },
      { q: "Unité d'œuvre fréquente du centre Distribution :", choix: ["Kg de matière achetée", "Heure machine", "100 DH de chiffre d'affaires", "Nombre de salariés"], bonne: 2, explication: "L'activité de distribution suit les ventes." },
    ],
  },

  4: {
    titre: "Le coût d'achat et la gestion des stocks",
    resume: md`
## L'essentiel — Coût d'achat et stocks

- $\text{Coût d'achat} = \text{prix d'achat net} + \text{frais d'achat directs} + \text{charges indirectes d'approvisionnement}$.
- Les stocks se suivent en **inventaire permanent** sur une **fiche de stock** : entrées, sorties, stock (quantité, coût unitaire, montant).
- **CMUP après chaque entrée** : $\dfrac{\text{valeur du stock} + \text{valeur de l'entrée}}{\text{quantité en stock} + \text{quantité entrée}}$ ; les sorties sont valorisées au dernier CMUP.
- **CMUP de fin de période** : un seul coût moyen (stock initial + toutes les entrées) pour toutes les sorties.
- **FIFO / PEPS** : les sorties sont valorisées au coût des lots **les plus anciens**.
- En période de hausse des prix, le FIFO donne un stock final plus élevé (et un coût des sorties plus faible) que le CMUP.
`,
    exercices: md`
### Exercice 2 — CMUP après chaque entrée ou FIFO

Stock initial : 100 kg à 20 DH. Le 05/03 : entrée de 300 kg à 24 DH. Le 12/03 : sortie de 250 kg. Le 20/03 : entrée de 150 kg à 26 DH. Le 28/03 : sortie de 200 kg.

1. Valorisez les sorties et le stock final au **CMUP après chaque entrée**.
2. Même travail en **FIFO**. Comparez.

<details><summary>Voir le corrigé</summary>

**1) CMUP après chaque entrée**

| Date | Entrées | Sorties | Stock |
|---|---|---|---|
| 01/03 | | | 100 × 20 = 2 000 |
| 05/03 | 300 × 24 = 7 200 | | 400 × **23** = 9 200 |
| 12/03 | | 250 × 23 = 5 750 | 150 × 23 = 3 450 |
| 20/03 | 150 × 26 = 3 900 | | 300 × **24,5** = 7 350 |
| 28/03 | | 200 × 24,5 = 4 900 | 100 × 24,5 = 2 450 |

**2) FIFO**

- Sortie du 12/03 : $100 \times 20 + 150 \times 24 = 5\,600$ DH ; il reste 150 kg à 24 DH.
- Sortie du 28/03 : $150 \times 24 + 50 \times 26 = 4\,900$ DH ; il reste **100 kg à 26 DH = 2 600 DH**.

Les prix montent : le FIFO sort d'abord les lots anciens (moins chers), donc son stock final (2 600 DH) est plus élevé que celui du CMUP (2 450 DH). Dans les deux cas, sorties + stock final = 13 100 DH.

</details>
`,
    qcm: [
      { q: "Les frais de transport sur achats font partie :", choix: ["Du coût de production", "Du coût d'achat", "Du coût de distribution", "Des charges non incorporables"], bonne: 1, explication: "Ce sont des frais accessoires d'achat." },
      { q: "Stock de 100 kg à 10 DH, entrée de 100 kg à 14 DH : le CMUP vaut :", choix: ["10 DH", "12 DH", "14 DH", "24 DH"], bonne: 1, explication: "(1 000 + 1 400) / 200 = 12 DH." },
      { q: "Avec la méthode FIFO, les sorties sont valorisées :", choix: ["Au coût des lots les plus récents", "Au coût des lots les plus anciens", "Au coût moyen", "Au prix de vente"], bonne: 1, explication: "Premier entré, premier sorti." },
      { q: "Le CMUP après chaque entrée est recalculé :", choix: ["À chaque sortie", "À chaque entrée", "Une fois par an", "Jamais"], bonne: 1, explication: "Les sorties prennent ensuite le dernier CMUP calculé." },
      { q: "En période de hausse des prix, le FIFO donne un stock final :", choix: ["Plus faible que le CMUP", "Plus élevé que le CMUP", "Égal au CMUP", "Nul"], bonne: 1, explication: "Le stock restant est composé des lots les plus récents, donc les plus chers." },
    ],
  },

  5: {
    titre: "Le coût de production",
    resume: md`
## L'essentiel — Le coût de production

- $\text{Coût de production} = \text{coût d'achat des matières consommées} + \text{charges directes de production} + \text{charges indirectes de production}$.
- Les matières consommées sont valorisées au coût de sortie du stock (CMUP ou FIFO).
- **En-cours** : $CP_{\text{produits finis}} = EC_{\text{initial}} + \text{charges de la période} - EC_{\text{final}}$.
- **Sous-produit** et **déchet vendable** : leur valeur nette est **déduite** du coût de production.
- **Déchet non vendable** : son coût d'évacuation est **ajouté** au coût de production.
- Coût unitaire = coût de production ÷ quantité produite ; les produits finis entrent ensuite en stock.
`,
    exercices: md`
### Exercice 2 — En-cours et déchets

Pour le mois : matières consommées 120 000 DH ; main-d'œuvre directe 45 000 DH ; charges du centre Production 35 000 DH. En-cours initial 12 000 DH, en-cours final 17 000 DH. La production est de 1 500 unités ; des déchets sont revendus pour une valeur nette de 4 500 DH.

Calculez le coût de production global et unitaire.

<details><summary>Voir le corrigé</summary>

Charges de la période $= 120\,000 + 45\,000 + 35\,000 = 200\,000$ DH.

$$CP = 12\,000 + 200\,000 - 17\,000 - 4\,500 = 190\,500 \text{ DH}$$

$$\text{Coût unitaire} = \frac{190\,500}{1\,500} = 127 \text{ DH}$$

</details>
`,
    qcm: [
      { q: "L'en-cours initial est, dans le calcul du coût de production :", choix: ["Retranché", "Ajouté", "Ignoré", "Multiplié par le CMUP"], bonne: 1, explication: "Il s'agit de travail commencé la période précédente et terminé maintenant." },
      { q: "L'en-cours final est :", choix: ["Ajouté", "Retranché", "Ignoré", "Compté en coût de distribution"], bonne: 1, explication: "Il n'est pas encore un produit fini." },
      { q: "La valeur nette d'un déchet vendable :", choix: ["S'ajoute au coût de production", "Se déduit du coût de production", "Est une charge supplétive", "Entre dans le coût de revient"], bonne: 1, explication: "Elle réduit le coût du produit principal." },
      { q: "Le coût d'évacuation d'un déchet non vendable :", choix: ["S'ajoute au coût de production", "Se déduit du coût de production", "Est non incorporable", "Est ignoré"], bonne: 0, explication: "C'est une charge supplémentaire liée à la production." },
      { q: "Les matières consommées sont valorisées :", choix: ["Au prix de vente", "Au coût de sortie du stock (CMUP ou FIFO)", "Au prix d'achat hors frais", "À la valeur de marché"], bonne: 1, explication: "On reprend la valorisation de la fiche de stock." },
    ],
  },

  6: {
    titre: "Le coût de revient et le résultat analytique",
    resume: md`
## L'essentiel — Coût de revient et concordance

- $\text{Coût de revient} = \text{coût de production des produits vendus} + \text{coût de distribution}$.
- On retient le coût de production des **quantités vendues** (valorisées au CMUP ou en FIFO), pas de toute la production.
- $\text{Résultat analytique} = CA - \text{coût de revient}$, calculé par produit.
- **Concordance** : $R_{CG} = R_{analytique} - CNI + CS \pm \text{différences d'incorporation}$.
- Une charge d'usage **supérieure** à la dotation comptable augmente le résultat CG par rapport au résultat analytique (et inversement).
- Le tableau de concordance doit retrouver **exactement** le résultat de la CG.
`,
    exercices: md`
### Exercice 2 — Du coût de revient au résultat de la CG

Une entreprise a produit 1 000 unités au coût de 150 DH l'unité. Elle en vend 800 à 220 DH. Distribution : charges directes 8 000 DH ; charges indirectes de 5 DH pour 100 DH de CA.

1. Calculez le coût de revient global et unitaire, puis le résultat analytique.
2. Le mois comporte 3 000 DH de charges non incorporables et 5 000 DH de charges supplétives ; la charge d'usage dépasse de 1 200 DH la dotation comptable. Retrouvez le résultat de la comptabilité générale.

<details><summary>Voir le corrigé</summary>

**1)** CA $= 800 \times 220 = 176\,000$ DH.

| Élément | Montant |
|---|--:|
| Coût de production des produits vendus : $800 \times 150$ | 120 000 |
| Distribution directe | 8 000 |
| Distribution indirecte : $1\,760 \times 5$ | 8 800 |
| **Coût de revient** | **136 800** |

Coût unitaire $= 136\,800 / 800 = 171$ DH ; résultat analytique $= 176\,000 - 136\,800 = 39\,200$ DH.

**2)** $R_{CG} = 39\,200 - 3\,000 + 5\,000 + 1\,200 = 42\,400$ DH (la CAE a compté 1 200 DH de charges de plus que la CG, donc le résultat CG est plus élevé).

</details>
`,
    qcm: [
      { q: "Le coût de revient comprend :", choix: ["Le coût de production de toute la production", "Le coût de production des produits vendus + le coût de distribution", "Le coût d'achat seulement", "Les charges fixes seulement"], bonne: 1, explication: "On s'intéresse aux seules quantités vendues." },
      { q: "Le résultat analytique d'un produit est :", choix: ["CA − coût de revient", "CA − coût de production", "MCV − charges fixes", "Coût de revient − CA"], bonne: 0, explication: "C'est la marge finale dégagée par le produit." },
      { q: "Dans la concordance, les charges non incorporables :", choix: ["S'ajoutent au résultat analytique", "Se retranchent du résultat analytique", "Sont ignorées", "Sont multipliées par le CIR"], bonne: 1, explication: "Elles ne pèsent que sur la CG, dont le résultat est donc plus faible." },
      { q: "Dans la concordance, les charges supplétives :", choix: ["S'ajoutent au résultat analytique", "Se retranchent du résultat analytique", "Sont ignorées", "Sont incluses dans les CNI"], bonne: 0, explication: "Elles réduisent le seul résultat analytique." },
      { q: "Si la charge d'usage est inférieure à l'amortissement comptable, le résultat CG est :", choix: ["Supérieur au résultat analytique (toutes choses égales)", "Inférieur au résultat analytique (toutes choses égales)", "Égal au résultat analytique", "Nul"], bonne: 1, explication: "La CG a compté plus de charges que la CAE." },
    ],
  },

  7: {
    titre: "Le seuil de rentabilité (méthode des coûts variables)",
    resume: md`
## L'essentiel — Le seuil de rentabilité

- **Charges variables** : proportionnelles à l'activité ; **charges fixes** : constantes à court terme.
- $MCV = CA - CV$ ; taux de MCV $= MCV / CA$ ; résultat $= MCV - CF$.
- **Seuil de rentabilité** (CA pour lequel le résultat est nul) : $SR = \dfrac{CF}{\text{taux de MCV}}$ ; en quantités : $\dfrac{CF}{MCV \text{ unitaire}}$.
- **Point mort** : $\dfrac{SR}{CA} \times 12$ mois (ou × 360 jours), si l'activité est régulière.
- **Marge de sécurité** $= CA - SR$ ; **indice de sécurité** $= \dfrac{CA - SR}{CA}$.
- **Levier opérationnel** $= \dfrac{MCV}{\text{Résultat}}$ : variation en % du résultat pour 1 % de variation du CA.
`,
    exercices: md`
### Exercice 2 — Seuil en quantités et objectif de résultat

Un produit est vendu 50 DH ; son coût variable unitaire est de 30 DH ; les charges fixes annuelles sont de 120 000 DH. L'entreprise a vendu 9 000 unités, régulièrement sur l'année.

1. Calculez la MCV unitaire, le résultat, et le seuil de rentabilité en quantités et en valeur.
2. Calculez la marge et l'indice de sécurité, puis la date du point mort.
3. Combien d'unités faut-il vendre pour obtenir un résultat de 100 000 DH ?

<details><summary>Voir le corrigé</summary>

**1)** MCV unitaire $= 50 - 30 = 20$ DH ; résultat $= 9\,000 \times 20 - 120\,000 = 60\,000$ DH.

$SR = 120\,000 / 20 = 6\,000$ unités, soit $6\,000 \times 50 = 300\,000$ DH.

**2)** CA $= 450\,000$ DH ; marge de sécurité $= 450\,000 - 300\,000 = 150\,000$ DH ; indice $= 33{,}3\%$.

Point mort $= \dfrac{300\,000}{450\,000} \times 12 = 8$ mois, soit **fin août**.

**3)** $Q = \dfrac{120\,000 + 100\,000}{20} = 11\,000$ unités.

</details>
`,
    qcm: [
      { q: "Le seuil de rentabilité est le CA pour lequel :", choix: ["La MCV est nulle", "Le résultat est nul", "Les charges fixes sont nulles", "Le CA est maximal"], bonne: 1, explication: "À ce niveau, la MCV couvre exactement les charges fixes." },
      { q: "CF = 200 000 DH et taux de MCV = 40 % : le SR vaut :", choix: ["80 000 DH", "200 000 DH", "500 000 DH", "800 000 DH"], bonne: 2, explication: "SR = 200 000 / 0,40 = 500 000 DH." },
      { q: "Si le CA est de 600 000 DH et le SR de 450 000 DH, l'indice de sécurité est :", choix: ["75 %", "25 %", "33 %", "150 000 DH"], bonne: 1, explication: "(600 000 − 450 000) / 600 000 = 25 %." },
      { q: "Un levier opérationnel de 4 signifie qu'une hausse de 5 % du CA entraîne :", choix: ["Une hausse de 4 % du résultat", "Une hausse de 20 % du résultat", "Une hausse de 1,25 % du résultat", "Une baisse du résultat"], bonne: 1, explication: "5 % × 4 = 20 %." },
      { q: "La marge sur coût variable est égale à :", choix: ["CA − charges fixes", "CA − coût variable", "Résultat + CV", "CF − CV"], bonne: 1, explication: "C'est ce qui reste pour couvrir les charges fixes." },
    ],
  },

  8: {
    titre: "L'imputation rationnelle des charges fixes et la méthode ABC",
    resume: md`
## L'essentiel — Imputation rationnelle et ABC

- En **sous-activité**, les charges fixes unitaires augmentent et faussent les coûts.
- $CIR = \dfrac{\text{activité réelle}}{\text{activité normale}}$ ; charges fixes imputées $= CF_{réelles} \times CIR$.
- $CIR < 1$ : **coût de sous-activité** $= CF \times (1 - CIR)$, isolé hors du coût des produits.
- $CIR > 1$ : **boni de sur-activité**.
- **Méthode ABC** : l'entreprise est découpée en **activités** ; chaque activité a un **inducteur** (nombre de lots, de commandes, de réglages…).
- Coût de l'inducteur $= \dfrac{\text{charges de l'activité}}{\text{volume de l'inducteur}}$ ; chaque produit supporte les inducteurs qu'il consomme.
- L'ABC corrige le biais des UO volumiques qui **sous-évaluent** les produits fabriqués en petites séries.
`,
    exercices: md`
### Exercice 2 — Méthode ABC contre unité d'œuvre volumique

Deux activités : **Réglages** (60 000 DH ; inducteur : nombre de lots, 300 lots) et **Contrôle qualité** (40 000 DH ; inducteur : nombre de contrôles, 800 contrôles).

| | Produit A | Produit B |
|---|--:|--:|
| Quantités produites | 10 000 | 2 000 |
| Lots | 200 | 100 |
| Contrôles | 300 | 500 |
| Heures machine | 8 000 | 2 000 |

1. Calculez le coût des inducteurs puis les charges indirectes par produit (global et unitaire) avec la méthode ABC.
2. Faites le même calcul en répartissant les 100 000 DH à l'heure machine. Commentez.

<details><summary>Voir le corrigé</summary>

**1)** Coût d'un lot $= 60\,000 / 300 = 200$ DH ; coût d'un contrôle $= 40\,000 / 800 = 50$ DH.

| | Produit A | Produit B |
|---|--:|--:|
| Réglages | 200 × 200 = 40 000 | 100 × 200 = 20 000 |
| Contrôles | 300 × 50 = 15 000 | 500 × 50 = 25 000 |
| **Total** | **55 000** | **45 000** |
| Par unité | **5,50 DH** | **22,50 DH** |

**2)** Coût de l'heure machine $= 100\,000 / 10\,000 = 10$ DH : A supporte 80 000 DH (8 DH/unité) et B 20 000 DH (10 DH/unité).

La méthode volumique **sous-évalue** fortement B, fabriqué en petites séries mais gros consommateur de réglages et de contrôles. L'ABC rattache les charges à leur vraie cause.

</details>
`,
    qcm: [
      { q: "Le coefficient d'imputation rationnelle est :", choix: ["Activité normale / activité réelle", "Activité réelle / activité normale", "Charges fixes / charges variables", "Résultat / CA"], bonne: 1, explication: "CIR = AR / AN." },
      { q: "Si CIR = 0,9 et CF = 100 000 DH, les charges fixes imputées sont :", choix: ["90 000 DH", "100 000 DH", "110 000 DH", "10 000 DH"], bonne: 0, explication: "100 000 × 0,9 = 90 000 DH ; le coût de sous-activité est de 10 000 DH." },
      { q: "Un CIR supérieur à 1 traduit :", choix: ["Une sous-activité", "Une sur-activité", "Une activité normale", "Une perte"], bonne: 1, explication: "On produit plus que l'activité normale : boni de sur-activité." },
      { q: "Dans la méthode ABC, un inducteur de coût est :", choix: ["Un centre auxiliaire", "La cause de la consommation de ressources par une activité", "Une charge supplétive", "Un prix de vente"], bonne: 1, explication: "Par exemple le nombre de lots ou de commandes." },
      { q: "Avec des UO volumiques, les produits fabriqués en petites séries sont souvent :", choix: ["Surévalués", "Sous-évalués", "Correctement évalués", "Exclus du calcul"], bonne: 1, explication: "C'est le principal défaut que l'ABC corrige." },
    ],
  },
};
