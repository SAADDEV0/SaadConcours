// Économie générale & Statistiques — 2ème Bac (chapitres 1 à 5).
const md = String.raw;

export default {
  "le-marche": {
    cours: md`
## Introduction

Dans une économie, les agents échangent en permanence des biens, des services, du travail ou des capitaux. Le lieu — réel ou virtuel — où se rencontrent ceux qui veulent vendre et ceux qui veulent acheter s'appelle le **marché**.

## I. La notion de marché

> **Définition :** le marché est le lieu de rencontre entre l'**offre** et la **demande** d'un bien ou d'un service, où se forme un **prix**.

Le marché n'est pas forcément un lieu physique (souk, grande surface) : il peut être abstrait (Bourse de Casablanca, vente en ligne, marché du travail).

### Les principaux types de marchés

| Marché | Ce qui s'échange | Prix |
|---|---|---|
| Marché des biens et services | Produits finis, services | Prix de vente |
| Marché du travail | Travail (emplois) | Salaire |
| Marché des capitaux | Capitaux à long terme (actions, obligations) | Cours, taux d'intérêt |
| Marché monétaire | Capitaux à court terme | Taux d'intérêt |
| Marché des changes | Devises | Taux de change |

## II. Le fonctionnement du marché

### 1. La demande

La **demande** est la quantité d'un bien que les acheteurs sont prêts à acheter à un prix donné.

- **Loi de la demande :** quand le prix augmente, la quantité demandée diminue (et inversement). La courbe de demande est **décroissante**.
- Autres déterminants : revenu, goûts, prix des autres biens, publicité, taille de la population.

### 2. L'offre

L'**offre** est la quantité d'un bien que les producteurs sont prêts à vendre à un prix donné.

- **Loi de l'offre :** quand le prix augmente, la quantité offerte augmente. La courbe d'offre est **croissante**.
- Autres déterminants : coûts de production, technologie, nombre de producteurs, climat (agriculture).

### 3. Le prix d'équilibre

Le **prix d'équilibre** est le prix pour lequel la quantité offerte est égale à la quantité demandée ($O = D$). Graphiquement, c'est le point d'intersection des deux courbes.

- Si le prix est **supérieur** au prix d'équilibre : **excédent d'offre** (surproduction) → le prix baisse.
- Si le prix est **inférieur** au prix d'équilibre : **excédent de demande** (pénurie) → le prix monte.

### 4. L'élasticité-prix de la demande

Elle mesure la sensibilité de la quantité demandée à une variation du prix :

$$e = \frac{\text{variation relative de la quantité demandée}}{\text{variation relative du prix}} = \frac{\Delta Q / Q_0}{\Delta P / P_0}$$

- $|e| > 1$ : demande **élastique** (biens de luxe, biens ayant des substituts) ;
- $|e| < 1$ : demande **inélastique** (biens de première nécessité : pain, médicaments) ;
- $e = 0$ : demande parfaitement rigide.

## III. Les structures du marché

### 1. La concurrence pure et parfaite (CPP)

Elle repose sur **cinq conditions** :

1. **Atomicité** : un grand nombre d'offreurs et de demandeurs, aucun ne peut influencer le prix ;
2. **Homogénéité** du produit : les produits sont identiques ;
3. **Libre entrée et sortie** du marché ;
4. **Transparence** : l'information est parfaite et gratuite ;
5. **Libre circulation (mobilité) des facteurs** de production.

Sur un tel marché, le prix s'impose à tous : les agents sont **preneurs de prix** (*price takers*). La CPP est un **modèle théorique** rarement observé.

### 2. Les situations de concurrence imparfaite

| Structure | Offreurs | Demandeurs | Exemple |
|---|---|---|---|
| Monopole | Un seul | Nombreux | Distribution d'eau dans une ville |
| Oligopole | Quelques-uns | Nombreux | Télécommunications, ciment |
| Monopsone | Nombreux | Un seul | Unique acheteur d'une production locale |
| Monopole bilatéral | Un seul | Un seul | Fournisseur unique face à un client unique |
| Concurrence monopolistique | Nombreux | Nombreux | Produits différenciés par la marque |

Le monopoleur est **faiseur de prix** (*price maker*) : il peut fixer un prix plus élevé et produire moins qu'en concurrence.

## Conclusion

Le marché coordonne les décisions des agents grâce aux prix. Mais son fonctionnement réel s'éloigne souvent du modèle de CPP, ce qui justifie l'intervention de l'État (Conseil de la concurrence au Maroc, régulation des prix de certains produits).
`,
    exercices: md`
### Exercice 1 — Prix d'équilibre (données fictives)

Sur le marché d'un produit, on observe :

| Prix (DH) | 10 | 12 | 14 | 16 | 18 |
|---|---|---|---|---|---|
| Quantité demandée | 500 | 440 | 380 | 320 | 260 |
| Quantité offerte | 200 | 280 | 380 | 460 | 520 |

1. Déterminez le prix et la quantité d'équilibre.
2. Que se passe-t-il si le prix est fixé à 12 DH ? à 18 DH ?

<details><summary>Voir le corrigé</summary>

1. L'équilibre est atteint quand $O = D$ : au prix de **14 DH**, la quantité offerte et demandée est de **380 unités**.
2. À 12 DH : $D = 440 > O = 280$ → **excédent de demande (pénurie)** de 160 unités, le prix va monter.
   À 18 DH : $O = 520 > D = 260$ → **excédent d'offre** de 260 unités, le prix va baisser.

</details>

### Exercice 2 — Élasticité-prix

Le prix d'un bien passe de 50 DH à 55 DH ; la quantité demandée passe de 1 000 à 850 unités.

1. Calculez l'élasticité-prix de la demande.
2. Interprétez le résultat.

<details><summary>Voir le corrigé</summary>

1. Variation relative de la quantité : $\frac{850 - 1000}{1000} = -0{,}15$ soit $-15\%$.
   Variation relative du prix : $\frac{55 - 50}{50} = 0{,}10$ soit $+10\%$.
   $$e = \frac{-15\%}{+10\%} = -1{,}5$$
2. $|e| = 1{,}5 > 1$ : la demande est **élastique**. Une hausse du prix de 1 % entraîne une baisse de la quantité demandée de 1,5 %. Le bien a probablement des substituts.

</details>

### Exercice 3 — Structures de marché

Identifiez la structure de marché dans chaque cas : a) trois opérateurs se partagent le marché national de la téléphonie mobile ; b) des milliers d'agriculteurs vendent un blé identique à des milliers d'acheteurs ; c) une seule société assure le transport ferroviaire.

<details><summary>Voir le corrigé</summary>

a) **Oligopole** (quelques offreurs, nombreux demandeurs).
b) Situation proche de la **concurrence pure et parfaite** (atomicité, homogénéité).
c) **Monopole** (un seul offreur).

</details>
`,
    resume: md`
## L'essentiel — Le marché

- **Marché** : lieu de rencontre entre offre et demande où se forme un prix.
- **Types** : biens et services, travail (salaire), capitaux, monétaire (taux d'intérêt), changes (taux de change).
- **Loi de la demande** : prix ↑ → quantité demandée ↓ (courbe décroissante).
- **Loi de l'offre** : prix ↑ → quantité offerte ↑ (courbe croissante).
- **Prix d'équilibre** : $O = D$. Prix trop haut → excédent d'offre ; prix trop bas → pénurie.
- **Élasticité-prix** : $e = \frac{\Delta Q/Q}{\Delta P/P}$ ; $|e|>1$ élastique, $|e|<1$ inélastique.
- **CPP — 5 conditions** : atomicité, homogénéité, libre entrée, transparence, mobilité des facteurs.
- **Concurrence imparfaite** : monopole (1 offreur), oligopole (quelques offreurs), monopsone (1 demandeur), monopole bilatéral, concurrence monopolistique.
`,
    qcm: [
      { q: "Le prix d'équilibre est le prix pour lequel :", choix: ["La demande est maximale", "L'offre est égale à la demande", "L'offre est maximale", "Le producteur réalise le profit maximum"], bonne: 1, explication: "À l'équilibre, la quantité offerte est égale à la quantité demandée." },
      { q: "Quelle condition n'appartient pas à la concurrence pure et parfaite ?", choix: ["Atomicité", "Transparence", "Différenciation des produits", "Libre entrée"], bonne: 2, explication: "La CPP suppose l'homogénéité des produits, pas leur différenciation." },
      { q: "Un marché avec quelques offreurs et de nombreux demandeurs est :", choix: ["Un monopole", "Un oligopole", "Un monopsone", "Une CPP"], bonne: 1, explication: "L'oligopole se caractérise par un petit nombre de vendeurs." },
      { q: "Si le prix est inférieur au prix d'équilibre, on observe :", choix: ["Un excédent d'offre", "Une pénurie (excédent de demande)", "Un équilibre", "Une baisse des prix"], bonne: 1, explication: "À un prix trop bas, la demande dépasse l'offre : il y a pénurie et le prix tend à monter." },
      { q: "Une élasticité-prix de -0,4 signifie que la demande est :", choix: ["Élastique", "Inélastique", "Parfaitement rigide", "Croissante avec le prix"], bonne: 1, explication: "|e| = 0,4 < 1 : la quantité demandée réagit peu au prix." },
    ],
  },

  "le-circuit-economique-elargi": {
    cours: md`
## Introduction

Le circuit économique représente de manière simplifiée les **flux** qui circulent entre les agents économiques. En 1ère Bac, on a étudié le circuit simplifié (ménages et entreprises). En 2ème Bac, on l'**élargit** à tous les secteurs institutionnels.

## I. Les agents économiques (secteurs institutionnels)

Les agents sont regroupés selon leur **fonction principale** et l'**origine de leurs ressources** :

| Secteur institutionnel | Fonction principale | Ressources principales |
|---|---|---|
| **Ménages** | Consommer (et produire pour les entrepreneurs individuels) | Salaires, revenus de la propriété, revenus mixtes, transferts |
| **Sociétés non financières (SNF)** | Produire des biens et services marchands | Ventes |
| **Sociétés financières (SF)** | Financer l'économie (banques) et assurer (assurances) | Intérêts, primes d'assurance |
| **Administrations publiques (APU)** | Produire des services non marchands, redistribuer | Impôts, cotisations sociales |
| **ISBLSM** (associations, ONG) | Produire des services non marchands pour les ménages | Dons, cotisations |
| **Reste du monde (RDM)** | Regroupe les agents **non-résidents** en relation avec l'économie nationale | — |

> Un agent est **résident** s'il a son centre d'intérêt économique sur le territoire national depuis au moins un an, quelle que soit sa nationalité.

## II. Les opérations économiques

1. **Opérations sur biens et services** : production, consommation (intermédiaire et finale), investissement (FBCF), variation de stocks, exportations et importations.
2. **Opérations de répartition** : distribution des revenus issus de la production (salaires, intérêts, dividendes, impôts) et **redistribution** (prestations sociales, subventions, transferts).
3. **Opérations financières** : mouvements de monnaie et de titres (crédits, dépôts, émission d'actions et d'obligations).

## III. Le circuit économique élargi

Chaque opération donne naissance à deux flux de sens opposé :

- un **flux réel** (biens, services, travail) ;
- un **flux monétaire** (paiement correspondant).

**Principaux flux :**

- Les **ménages** fournissent leur travail aux SNF et APU, reçoivent des salaires, consomment des biens (SNF), épargnent auprès des SF et paient des impôts aux APU.
- Les **SNF** produisent, versent des salaires, empruntent auprès des SF, paient des impôts, exportent vers le RDM et importent.
- Les **SF** collectent l'épargne et accordent des crédits.
- Les **APU** prélèvent des impôts et des cotisations, versent des salaires aux fonctionnaires, des prestations sociales et des subventions.
- Le **RDM** achète nos exportations, nous vend nos importations et échange des revenus (ex. transferts des Marocains résidant à l'étranger, MRE).

## IV. L'équilibre emplois-ressources

Au niveau national, ce qui est disponible (**ressources**) est égal à ce qui est utilisé (**emplois**) :

$$P + M = CI + CF + FBCF + \Delta S + X$$

avec $P$ production, $M$ importations, $CI$ consommation intermédiaire, $CF$ consommation finale, $FBCF$ formation brute de capital fixe, $\Delta S$ variation de stocks, $X$ exportations.

En retirant les consommations intermédiaires : $PIB + M = CF + FBCF + \Delta S + X$.

## Conclusion

Le circuit élargi montre l'**interdépendance** des agents : la dépense de l'un est la recette de l'autre. Il sert de base à la comptabilité nationale, qui mesure ces flux par des agrégats.
`,
    exercices: md`
### Exercice 1 — Identifier le secteur institutionnel

Classez chaque agent : a) Bank Al-Maghrib ; b) une famille de Salé ; c) la commune de Fès ; d) une association de quartier ; e) l'OCP ; f) une société d'assurance ; g) un touriste espagnol en vacances à Agadir.

<details><summary>Voir le corrigé</summary>

a) **Société financière** (banque centrale) ; b) **Ménage** ; c) **Administration publique** (collectivité territoriale) ; d) **ISBLSM** ; e) **Société non financière** (entreprise publique marchande) ; f) **Société financière** ; g) **Reste du monde** (non-résident).

</details>

### Exercice 2 — Équilibre emplois-ressources (données fictives, en milliards de DH)

On donne : production = 2 100 ; consommations intermédiaires = 1 000 ; importations = 520 ; consommation finale = 860 ; FBCF = 330 ; variation de stocks = 20.

1. Calculez le PIB (on suppose PIB = P − CI).
2. Déduisez le montant des exportations.
3. Calculez le solde commercial et interprétez-le.

<details><summary>Voir le corrigé</summary>

1. $PIB = 2\,100 - 1\,000 = 1\,100$ Mds DH.
2. $PIB + M = CF + FBCF + \Delta S + X$ donc
   $X = 1\,100 + 520 - 860 - 330 - 20 = 410$ Mds DH.
3. Solde $= X - M = 410 - 520 = -110$ Mds DH : la balance commerciale est **déficitaire** ; le pays importe plus qu'il n'exporte.

</details>
`,
    resume: md`
## L'essentiel — Le circuit économique élargi

- **6 secteurs** : ménages, SNF, SF, APU, ISBLSM, reste du monde.
- **Résident** : centre d'intérêt économique au Maroc depuis au moins 1 an (quelle que soit la nationalité).
- **3 types d'opérations** : sur biens et services, de répartition, financières.
- Chaque échange = **flux réel** + **flux monétaire** de sens opposé.
- **Équilibre emplois-ressources** : $P + M = CI + CF + FBCF + \Delta S + X$
- Version PIB : $PIB + M = CF + FBCF + \Delta S + X$
- Le circuit montre l'**interdépendance** des agents.
`,
    qcm: [
      { q: "Bank Al-Maghrib appartient au secteur :", choix: ["Des administrations publiques", "Des sociétés financières", "Des sociétés non financières", "Du reste du monde"], bonne: 1, explication: "La banque centrale est une institution financière." },
      { q: "La fonction principale des APU est de :", choix: ["Produire des biens marchands", "Financer l'économie", "Produire des services non marchands et redistribuer", "Consommer"], bonne: 2, explication: "Les administrations fournissent des services non marchands financés par les prélèvements obligatoires." },
      { q: "Un agent est résident s'il :", choix: ["Est de nationalité marocaine", "A son centre d'intérêt économique au Maroc depuis au moins un an", "Paie ses impôts au Maroc depuis 5 ans", "Est né au Maroc"], bonne: 1, explication: "La résidence dépend du centre d'intérêt économique, pas de la nationalité." },
      { q: "Le versement d'une pension de retraite est une opération :", choix: ["Sur biens et services", "De répartition", "Financière", "De production"], bonne: 1, explication: "C'est une opération de redistribution (répartition)." },
      { q: "L'équation d'équilibre emplois-ressources s'écrit :", choix: ["P + X = CI + CF + FBCF + ΔS + M", "P + M = CI + CF + FBCF + ΔS + X", "P = CF + X − M", "P − M = CI + X"], bonne: 1, explication: "Ressources (P + M) = Emplois (CI + CF + FBCF + ΔS + X)." },
    ],
  },

  "les-agregats-de-la-comptabilite-nationale": {
    cours: md`
## Introduction

La **comptabilité nationale** est une représentation chiffrée de l'activité économique d'un pays. Au Maroc, elle est établie par le **Haut-Commissariat au Plan (HCP)**. Elle résume l'économie grâce à des grandeurs synthétiques : les **agrégats**.

## I. Les agrégats de la production : le PIB

> Le **produit intérieur brut (PIB)** mesure la richesse créée pendant une année par les agents économiques **résidents** sur le territoire national.

### 1. Les trois optiques de calcul

| Optique | Formule |
|---|---|
| **Production** | $PIB = \sum VA + \text{impôts sur les produits nets de subventions}$ |
| **Dépense (demande)** | $PIB = DCF + FBCF + \Delta S + (X - M)$ |
| **Revenu** | $PIB = RS + \text{impôts nets de subventions} + EBE \text{ et revenus mixtes}$ |

- $VA = \text{production} - \text{consommations intermédiaires}$
- $\sum VA = VA_{\text{primaire}} + VA_{\text{secondaire}} + VA_{\text{tertiaire}}$
- $RS$ : rémunération des salariés ; $EBE$ : excédent brut d'exploitation.

### 2. Les composantes de la demande

| Notion | Composition |
|---|---|
| Demande intérieure | $DCF + FBCF + \Delta S$ |
| Demande extérieure | $X$ |
| Demande extérieure nette (solde commercial) | $X - M$ |
| Demande finale | $DCF + FBCF + \Delta S + X$ |
| Investissement national (FBC) | $FBCF + \Delta S$ |

### 3. PIB nominal et PIB réel

- **PIB nominal (en valeur, à prix courants)** : calculé avec les prix de l'année considérée.
- **PIB réel (en volume, à prix constants)** : calculé avec les prix d'une année de référence ; il élimine l'effet de l'inflation.
- **Déflateur du PIB** : $\frac{PIB\ \text{nominal}}{PIB\ \text{réel}} \times 100$

### 4. Les indicateurs tirés du PIB

- **Taux de croissance économique** : $\frac{PIB_1 - PIB_0}{PIB_0} \times 100$ (calculé sur le PIB réel)
- **PIB par habitant** : $\frac{PIB}{\text{population}}$

## II. Les agrégats du revenu

### 1. Le revenu national brut (RNB)

$$RNB = PIB + \text{revenus de la propriété nets reçus du reste du monde}$$

### 2. Le revenu national brut disponible (RNBD)

C'est le revenu dont dispose la nation pour **consommer** et **épargner** :

$$RNBD = PIB + RTNE \qquad RNBD = DCF + ENB$$

**RTNE** (revenus et transferts nets de l'extérieur) = revenus de la propriété nets + transferts courants nets (au Maroc, les transferts des MRE en sont une part importante).

### 3. L'épargne nationale brute (ENB)

$$ENB = RNBD - DCF$$

## III. Les principaux ratios

| Ratio | Formule | Lecture |
|---|---|---|
| Taux d'investissement | $\frac{FBC}{PIB} \times 100$ | Part de la richesse créée consacrée à l'investissement |
| Taux d'épargne nationale | $\frac{ENB}{RNBD} \times 100$ (ou $\frac{ENB}{PIB}$) | Part du revenu épargnée |
| Capacité (+) / besoin (−) de financement | $ENB + \text{transferts nets en capital} - FBC$ | $> 0$ : capacité ; $< 0$ : besoin |

## IV. Taux de variation et indice

- **Taux de variation** : $t = \frac{V_1 - V_0}{V_0} \times 100$
- **Indice d'évolution** (base 100) : $I = \frac{V_1}{V_0} \times 100$
- Relation : $I = t + 100$
- Retrouver une valeur : $V_1 = V_0 \left(1 + \frac{t}{100}\right)$ et $V_0 = \frac{V_1}{1 + \frac{t}{100}}$

## V. Savoir lire un résultat (méthodologie de l'examen)

- **PIB** : « Au Maroc, en 2024, la richesse créée par les agents économiques résidents s'élève à … milliards de DH. »
- **Taux de croissance** : « La richesse créée a augmenté de …% entre … et … »
- **Capacité de financement négative** : « L'économie a enregistré un besoin de financement de … »
- **Taux d'investissement** : « L'investissement brut représente …% de la richesse créée. »
`,
    exercices: md`
### Exercice 1 — Calcul des agrégats (données fictives, en milliards de DH)

| Élément | Montant |
|---|---|
| VA primaire | 150 |
| VA secondaire | 330 |
| VA tertiaire | 620 |
| Impôts sur les produits nets de subventions | 120 |
| DCF | 950 |
| FBCF | 330 |
| Variation de stocks | 30 |
| Exportations | 460 |
| Revenus de la propriété nets | −25 |
| Transferts courants nets | 105 |

1. Calculez le PIB selon l'optique production.
2. Déduisez les importations (optique dépense).
3. Calculez le RNB, le RNBD et l'ENB.
4. Calculez le taux d'investissement et la capacité ou le besoin de financement (transferts nets en capital nuls).

<details><summary>Voir le corrigé</summary>

1. $PIB = 150 + 330 + 620 + 120 = 1\,220$ Mds DH.
2. $PIB = DCF + FBCF + \Delta S + X - M$ donc $M = 950 + 330 + 30 + 460 - 1\,220 = 550$ Mds DH.
3. $RNB = 1\,220 - 25 = 1\,195$ Mds DH.
   $RTNE = -25 + 105 = 80$ ; $RNBD = 1\,220 + 80 = 1\,300$ Mds DH.
   $ENB = 1\,300 - 950 = 350$ Mds DH.
4. $FBC = 330 + 30 = 360$ ; taux d'investissement $= \frac{360}{1\,220} \times 100 \approx 29{,}5\%$.
   Capacité/besoin $= 350 + 0 - 360 = -10$ Mds DH : **besoin de financement** de 10 Mds DH, couvert par un recours à l'épargne étrangère.

</details>

### Exercice 2 — Croissance et indices

Le PIB réel était de 1 150 Mds DH en 2023 et de 1 190 Mds DH en 2024.

1. Calculez le taux de croissance.
2. Calculez l'indice d'évolution base 100 en 2023.
3. Si le taux de croissance prévu pour 2025 est de 3,5 %, quel serait le PIB réel en 2025 ?

<details><summary>Voir le corrigé</summary>

1. $t = \frac{1\,190 - 1\,150}{1\,150} \times 100 \approx 3{,}48\%$.
2. $I = \frac{1\,190}{1\,150} \times 100 \approx 103{,}48$.
3. $PIB_{2025} = 1\,190 \times 1{,}035 \approx 1\,231{,}65$ Mds DH.

**Lecture :** la richesse créée par les agents résidents a augmenté d'environ 3,48 % entre 2023 et 2024.

</details>
`,
    resume: md`
## L'essentiel — Les agrégats

- **PIB (production)** $= \sum VA + $ impôts sur les produits nets de subventions
- **PIB (dépense)** $= DCF + FBCF + \Delta S + X - M$
- **PIB (revenu)** $= RS +$ impôts nets $+ EBE$ et revenus mixtes
- **RNB** $= PIB +$ revenus de la propriété nets
- **RNBD** $= PIB + RTNE = DCF + ENB$
- **ENB** $= RNBD - DCF$
- **Taux de croissance** $= \frac{PIB_1 - PIB_0}{PIB_0} \times 100$
- **Taux d'investissement** $= \frac{FBC}{PIB} \times 100$ avec $FBC = FBCF + \Delta S$
- **Capacité/besoin de financement** $= ENB +$ transferts nets en capital $- FBC$
- **Indice** $= \frac{V_1}{V_0} \times 100 = t + 100$
- PIB **nominal** (prix courants) ≠ PIB **réel** (prix constants).
`,
    qcm: [
      { q: "Selon l'optique dépense, le PIB est égal à :", choix: ["ΣVA + impôts nets", "DCF + FBCF + ΔS + X − M", "RS + EBE", "RNBD − DCF"], bonne: 1, explication: "L'optique demande additionne les emplois finals intérieurs et la demande extérieure nette." },
      { q: "Le RNBD est égal à :", choix: ["PIB + RTNE", "PIB − M", "DCF − ENB", "FBCF + ΔS"], bonne: 0, explication: "RNBD = PIB + revenus et transferts nets de l'extérieur (ou DCF + ENB)." },
      { q: "Si ENB − FBC < 0 (transferts en capital nuls), l'économie a :", choix: ["Une capacité de financement", "Un besoin de financement", "Un excédent commercial", "Une inflation"], bonne: 1, explication: "L'épargne ne suffit pas à financer l'investissement." },
      { q: "Le PIB réel est calculé :", choix: ["Aux prix courants", "Aux prix d'une année de référence", "En devises", "Hors services"], bonne: 1, explication: "Le PIB en volume neutralise l'effet de la hausse des prix." },
      { q: "Un indice de 94 signifie une variation de :", choix: ["+94 %", "−6 %", "+6 %", "−94 %"], bonne: 1, explication: "t = I − 100 = 94 − 100 = −6 %." },
    ],
  },

  "les-limites-de-la-comptabilite-nationale": {
    cours: md`
## Introduction

Le PIB est l'indicateur le plus utilisé pour mesurer l'activité économique. Pourtant, il donne une image **incomplète** de la richesse et du bien-être d'un pays.

## I. Les limites liées à la mesure de la production

### 1. L'économie informelle (souterraine)

Le PIB ne prend pas (ou mal) en compte :

- l'**économie informelle** : activités légales non déclarées (vendeurs ambulants, petits ateliers, travail non déclaré). Au Maroc, le secteur informel occupe une place importante dans l'emploi ;
- l'**économie illégale** : contrebande, trafics.

Le HCP réalise des enquêtes pour estimer une partie de l'informel, mais cette estimation reste imparfaite.

### 2. Les activités non marchandes non comptabilisées

- **Travail domestique** (cuisine, ménage, garde des enfants) réalisé au sein des ménages ;
- **Bénévolat** et entraide familiale.

Ces activités créent une richesse réelle mais n'ont pas de prix de marché.

### 3. L'évaluation des services non marchands

Les services des administrations (éducation, santé publique) sont évalués à leur **coût de production** (salaires, fournitures), faute de prix de vente, ce qui ne reflète pas forcément leur qualité.

## II. Les limites liées au bien-être

### 1. Le PIB ne mesure pas la qualité de vie

- Il ignore la **répartition** des revenus : un PIB par habitant élevé peut cacher de fortes **inégalités** ;
- Il ne tient pas compte du **temps libre**, de la santé, de l'éducation, de la sécurité.

### 2. Le PIB ignore les dégâts environnementaux

- La destruction des ressources naturelles (surexploitation de l'eau, pollution, déforestation) n'est pas déduite du PIB ;
- Paradoxalement, **réparer** des dommages (dépolluer, soigner les victimes d'accidents) **augmente** le PIB.

## III. Les indicateurs complémentaires

| Indicateur | Ce qu'il mesure |
|---|---|
| **IDH** (Indice de développement humain, PNUD) | Santé (espérance de vie), éducation (durée de scolarisation), niveau de vie (RNB/hab. en PPA). Compris entre 0 et 1 |
| **Coefficient de Gini** | Inégalités de revenu (0 = égalité parfaite, 1 = inégalité maximale) |
| **Taux de pauvreté** | Part de la population vivant sous le seuil de pauvreté |
| **PIB vert / épargne nette ajustée** | Richesse corrigée de la dégradation de l'environnement |
| **IPM** (Indice de pauvreté multidimensionnelle) | Privations en santé, éducation, conditions de vie |

## Conclusion

Le PIB reste indispensable pour mesurer la **croissance**, mais il doit être complété par d'autres indicateurs pour apprécier le **développement** et le **bien-être** d'une population.
`,
    exercices: md`
### Exercice 1 — Comptabilisé ou non ?

Pour chaque activité, indiquez si elle est comptabilisée dans le PIB et justifiez : a) une femme de ménage déclarée ; b) une mère qui prépare les repas de sa famille ; c) un vendeur ambulant non déclaré ; d) un enseignant d'une école publique ; e) une entreprise qui dépollue une rivière.

<details><summary>Voir le corrigé</summary>

a) **Oui** : service marchand déclaré.
b) **Non** : travail domestique non marchand.
c) **Non** (ou mal estimé) : activité informelle.
d) **Oui** : service non marchand évalué à son coût (salaire).
e) **Oui** : la dépollution est une production marchande ; elle augmente le PIB alors qu'elle répare un dommage — c'est une limite du PIB.

</details>

### Exercice 2 — PIB par habitant et IDH (données fictives)

| Pays | PIB/hab. (dollars PPA) | IDH |
|---|---|---|
| A | 25 000 | 0,72 |
| B | 18 000 | 0,85 |

Quel pays a le niveau de développement le plus élevé ? Que montre cette comparaison ?

<details><summary>Voir le corrigé</summary>

Le pays **B** a un IDH plus élevé (0,85 > 0,72) malgré un PIB/hab. plus faible : il a un meilleur niveau de santé et d'éducation. Cela montre que la **richesse produite (PIB) ne garantit pas le développement humain** : tout dépend de la répartition et de l'utilisation des richesses.

</details>
`,
    resume: md`
## L'essentiel — Les limites du PIB

- **Oubli de l'informel et de l'illégal** (vendeurs ambulants, travail non déclaré, contrebande).
- **Oubli des activités non marchandes des ménages** : travail domestique, bénévolat.
- **Services non marchands évalués au coût** (salaires), pas à leur valeur réelle.
- **Ne mesure pas le bien-être** : inégalités, santé, éducation, temps libre.
- **Ignore l'environnement** ; réparer un dommage **augmente** le PIB.
- **Indicateurs complémentaires** : IDH (santé, éducation, niveau de vie), Gini, taux de pauvreté, IPM, PIB vert.
`,
    qcm: [
      { q: "Quelle activité n'est pas comptabilisée dans le PIB ?", choix: ["Un service de taxi déclaré", "Le travail domestique non rémunéré", "Les soins dans un hôpital public", "La production d'une usine"], bonne: 1, explication: "Le travail domestique n'est pas marchand et n'a pas de prix." },
      { q: "Les services des administrations publiques sont évalués :", choix: ["À leur prix de vente", "À leur coût de production", "À zéro", "En volume seulement"], bonne: 1, explication: "Faute de prix, ils sont valorisés par leurs coûts (salaires, fournitures)." },
      { q: "L'IDH combine :", choix: ["PIB, inflation, chômage", "Santé, éducation, niveau de vie", "Exportations, importations, change", "Épargne, investissement, dette"], bonne: 1, explication: "L'IDH du PNUD repose sur l'espérance de vie, l'éducation et le RNB/hab." },
      { q: "Le coefficient de Gini mesure :", choix: ["La croissance", "Les inégalités de revenu", "L'inflation", "La pollution"], bonne: 1, explication: "0 = égalité parfaite, 1 = inégalité maximale." },
      { q: "La réparation d'un dommage environnemental :", choix: ["Diminue le PIB", "Augmente le PIB", "N'a aucun effet", "Est déduite du RNBD"], bonne: 1, explication: "C'est une production supplémentaire, ce qui illustre une limite du PIB." },
    ],
  },

  "la-regulation-par-le-marche-et-ses-insuffisances": {
    cours: md`
## Introduction

Qui doit coordonner l'économie : le **marché** ou l'**État** ? Cette question oppose depuis longtemps les courants libéraux et interventionnistes.

## I. La régulation par le marché : la thèse libérale

### 1. Les fondements

Pour les **classiques** (Adam Smith, David Ricardo, Jean-Baptiste Say) puis les **néoclassiques** :

- chaque agent poursuit son **intérêt personnel** ; la somme des intérêts individuels conduit à l'**intérêt général** grâce à la « **main invisible** » (Smith) ;
- les **prix** transmettent l'information et ajustent l'offre et la demande ;
- **Loi des débouchés** (Say) : « l'offre crée sa propre demande », donc pas de crise durable de surproduction.

### 2. Le rôle limité de l'État : l'État-gendarme

L'État doit se limiter à ses **fonctions régaliennes** : justice, police, défense, diplomatie, et éventuellement quelques infrastructures. C'est la doctrine du **laisser-faire, laisser-passer**.

## II. Les insuffisances du marché

### 1. Les défaillances du marché

- **Biens collectifs (publics)** : non rivaux et non exclusifs (éclairage public, défense). Le marché ne les produit pas car personne ne veut les payer (comportement de « passager clandestin »).
- **Externalités** : effets d'une activité sur des tiers sans compensation monétaire.
  - négatives : pollution d'une usine ;
  - positives : recherche, éducation.
- **Concurrence imparfaite** : monopoles et ententes qui fixent des prix élevés.
- **Asymétrie d'information** : un agent en sait plus que l'autre (vendeur de voiture d'occasion).

### 2. L'instabilité et les crises

La crise de **1929** a montré que le marché peut connaître des déséquilibres durables : chômage massif, chute des prix, faillites. **Keynes** (1936) explique que le chômage vient d'une **insuffisance de la demande effective**, que le marché ne corrige pas spontanément.

### 3. Les inégalités

Le marché répartit les revenus selon la contribution productive, ce qui peut créer de fortes **inégalités** et exclure une partie de la population.

## III. La nécessité de l'intervention de l'État : l'État-providence

Face à ces insuffisances, l'État intervient pour assurer trois fonctions (classification de Musgrave) :

| Fonction | Objectif | Exemples au Maroc |
|---|---|---|
| **Allocation** | Produire les biens collectifs, corriger les externalités | Routes, écoles, taxe sur les produits polluants |
| **Redistribution** | Réduire les inégalités | Impôt progressif (IR), aides sociales directes, AMO |
| **Stabilisation (régulation)** | Assurer croissance, emploi, stabilité des prix | Politiques budgétaire et monétaire |

## Conclusion

Aujourd'hui, la plupart des économies sont **mixtes** : le marché reste le principal mécanisme d'allocation, mais l'État intervient pour corriger ses défaillances.
`,
    exercices: md`
### Exercice 1 — Défaillances du marché

Identifiez la défaillance du marché dans chaque situation : a) une cimenterie rejette des poussières dans un village voisin ; b) personne ne veut financer seul un phare maritime ; c) deux entreprises s'entendent pour fixer le prix d'un produit ; d) un assureur ne connaît pas l'état de santé réel de ses clients.

<details><summary>Voir le corrigé</summary>

a) **Externalité négative** ; b) **Bien collectif** (non rival, non exclusif) ; c) **Concurrence imparfaite** (entente) ; d) **Asymétrie d'information**.

</details>

### Exercice 2 — Question de synthèse

« Le marché est capable d'assurer seul l'équilibre économique. » Discutez cette affirmation en une vingtaine de lignes.

<details><summary>Voir le corrigé</summary>

**Plan proposé :**

- **Introduction** : définir le marché et la régulation ; annoncer le débat libéraux / interventionnistes.
- **I. Arguments en faveur** : main invisible (Smith), ajustement par les prix, loi de Say, efficacité de la concurrence.
- **II. Limites** : biens collectifs, externalités, concurrence imparfaite, crises (1929, analyse de Keynes), inégalités.
- **Conclusion** : l'économie mixte combine marché et intervention de l'État (fonctions d'allocation, de redistribution et de stabilisation).

</details>
`,
    resume: md`
## L'essentiel — Régulation par le marché

- **Thèse libérale** : main invisible (Smith), ajustement par les prix, loi des débouchés (Say) → **État-gendarme** (fonctions régaliennes).
- **Défaillances du marché** : biens collectifs, externalités (+/−), concurrence imparfaite, asymétrie d'information.
- **Crises** : 1929 ; Keynes → chômage dû à l'insuffisance de la **demande effective**.
- **Inégalités** produites par le marché.
- **État-providence — 3 fonctions (Musgrave)** : allocation, redistribution, stabilisation.
- Aujourd'hui : **économie mixte**.
`,
    qcm: [
      { q: "L'expression « main invisible » est due à :", choix: ["Keynes", "Adam Smith", "Karl Marx", "J.-B. Say"], bonne: 1, explication: "Adam Smith, La Richesse des nations (1776)." },
      { q: "Selon la loi de Say :", choix: ["La demande crée l'offre", "L'offre crée sa propre demande", "L'État doit intervenir", "Les prix sont rigides"], bonne: 1, explication: "Pour Say, les crises de surproduction générale sont impossibles." },
      { q: "Un bien collectif est :", choix: ["Rival et exclusif", "Non rival et non exclusif", "Produit par une entreprise privée", "Toujours gratuit à produire"], bonne: 1, explication: "Personne ne peut en être exclu et sa consommation par un agent ne réduit pas celle des autres." },
      { q: "Pour Keynes, le chômage s'explique par :", choix: ["Des salaires trop élevés", "L'insuffisance de la demande effective", "Le progrès technique", "La paresse des chômeurs"], bonne: 1, explication: "Les entreprises produisent selon la demande anticipée." },
      { q: "La fonction de redistribution de l'État vise à :", choix: ["Produire des routes", "Réduire les inégalités", "Stabiliser les prix", "Lutter contre la pollution"], bonne: 1, explication: "Impôt progressif, transferts et aides sociales." },
    ],
  },
};
