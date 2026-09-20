> Corrigé indicatif rédigé par SaadConcours : il n'émane pas de la FSJES Aïn Sebâa et n'a pas été relu par un enseignant. **L'épreuve pénalise chaque mauvaise réponse de −0,5 pt** : refais les calculs avant de t'y fier, et abstiens-toi plutôt que de cocher au hasard.
>
> Attention particulière aux **Q6, Q8 et Q9** : le sujet contient une erreur de calcul sur la variance de X, qui se propage à la droite de régression et au coefficient de corrélation. Les deux lectures sont détaillées ci-dessous.

## Mathématiques financières

**Q1 — D. 5 ans.** Intérêts simples : `I = C × t × n` → `5 500 = 11 000 × 0,10 × n` → `n = 5`.

**Q2 — A. 7 400 Dh.** Valeur acquise à intérêts simples sur 4 mois :
`C × (1 + 0,07 × 4/12) = 7 572,67` → `C = 7 572,67 / 1,023333 = 7 400,00 Dh`.

**Q3 — C. 6 %.** Intérêts composés : `2 500 × (1+i)³ = 2 977,54` → `(1+i)³ = 1,191016` → `1+i = 1,06` → `i = 6 %`.
*(Les propositions A et B affichent toutes deux « 8 % » dans le sujet — coquille de l'original.)*

**Q4 — B. 8 462,43.** `5 500 × 1,09⁵ = 5 500 × 1,538624 = 8 462,43 Dh`.

## Statistique descriptive

Données : `x = (−6 ; −4 ; 0 ; 5 ; 12)`, `y = (40 ; 36 ; 34 ; 23 ; 16)`, `n = 5`.
Sommes utiles : `Σx = 7`, `Σx² = 221`, `Σy = 149`, `Σy² = 4 837`, `Σxy = −77`.

**Q5 — A. 1,4.** `x̄ = 7/5 = 1,4`.

**Q6 — D. 43,2 *(réponse du barème)* — mais le calcul exact donne 42,24.**
`V(X) = Σx²/n − x̄² = 221/5 − 1,4² = 44,2 − 1,96 = 42,24`.
Aucune proposition ne vaut 42,24 : en toute rigueur il faudrait cocher **E**. La valeur 43,2 correspond à `44,2 − 1` (le sujet a oublié de mettre la moyenne au carré). Comme les Q8 et Q9 ci-dessous ne sont cohérentes qu'avec 43,2, c'est bien la valeur que l'auteur du sujet avait en tête.

**Q7 — C. −57,12.**
`Cov(X,Y) = Σxy/n − x̄ȳ = −77/5 − (1,4 × 29,8) = −15,4 − 41,72 = −57,12` (avec `ȳ = 149/5 = 29,8`).

**Q8 — B. Y = −1,32X + 31,65 *(réponse du barème)*.**
Avec la variance du sujet : `b = Cov/V(X) = −57,12/43,2 = −1,322` et `a = ȳ − b·x̄ = 29,8 + 1,322 × 1,4 = 31,65`.
Avec la variance exacte (42,24) : `b = −1,352` et `a = 31,69`, soit `Y = −1,352X + 31,69` — aucune proposition exacte, donc **E**. B reste la réponse la plus proche et la seule cohérente avec le barème.

**Q9 — C. −0,987 *(calcul exact)* / D. −0,975 *(cohérent avec la variance du sujet)*.**
`V(Y) = 4 837/5 − 29,8² = 967,4 − 888,04 = 79,36` → `σ_Y = 8,908`.
- Avec `σ_X = √42,24 = 6,499` : `r = −57,12 / (6,499 × 8,908) = −0,9866` → **C**.
- Avec `σ_X = √43,2 = 6,573` : `r = −57,12 / (6,573 × 8,908) = −0,9755` → **D**.

C'est la réponse mathématiquement juste ; D est celle qui suit la logique interne du sujet. Vu la pénalité de −0,5, c'est typiquement une question à laisser blanche si tu hésites.

*Dans tous les cas, `r ≈ −0,98` : la corrélation entre température extérieure et consommation de fuel est très forte et négative, ce qui est économiquement attendu.*

## Taux et variations

**Q10 — D. 20 %.** `(240 − 200)/200 = 0,20`.

**Q11 — C. 32 %.** Les taux se multiplient, ils ne s'additionnent pas : `1,10 × 1,20 = 1,32` → **+32 %** (et non 30 %).

**Q12 — A. 3,79 %.** Taux de croissance annuel moyen = moyenne **géométrique** :
`(1,025 × 1,051)^(1/2) − 1 = 1,0772775^0,5 − 1 = 3,792 %`.

**Q13 — D. 83,72.** `70 × 1,196 = 83,72 €`.

**Q14 — B. 560.** `1 000 × 0,70 × 0,80 = 560`.

**Q15 — A. 44 %.** `1 − (0,70 × 0,80) = 1 − 0,56 = 0,44` → **−44 %** (et non −50 %).

## Partie 2 — Comptabilité, finance et fiscalité

### 1. ALFA — VAN du projet : d) Autre (VAN ≈ 142 269 MAD)

Actualisation des flux à 8 % :

```
FNT 1 : 110 000 / 1,08    = 101 851,85
FNT 2 : 190 000 / 1,08²   = 162 894,38
FNT 3 : 360 000 / 1,08³   = 285 779,78
FNT 4 : 320 000 / 1,08⁴   = 235 208,65
FNT 5 : 230 000 / 1,08⁵   = 156 534,13
                            ----------
Valeur actuelle des flux  =  942 268,79
Coût initial              = −800 000,00
VAN                       =  142 268,79
```

La proposition **b) 942 270** correspond à la *valeur actuelle des flux d'exploitation*, pas à la VAN : c'est le piège de la question, puisque le tableau présente le coût initial comme un « FNT 0 » positif. Si l'énoncé demande bien la **VAN**, la réponse est **d) Autre**.

Le projet est rentable : VAN > 0 → à retenir.

### 2. BETA — Dotation 2019 : e) Autre (≈ 1 750 MAD)

Annuité pleine : `35 000 / 10 = 3 500 MAD`.
Mais le matériel est mis en service le **05/07/2019** : l'amortissement se calcule *prorata temporis* à compter de cette date.

```
Prorata (juillet → décembre, 6 mois) : 3 500 × 6/12   = 1 750,00
Prorata en jours (177/360)           : 3 500 × 177/360 = 1 720,83
```

Aucune proposition ne correspond → **e) Autre**. La réponse **d) 3 500** est le piège : elle ignore le prorata temporis.

### 3. KHOUBZ SA — Valeur de l'action après augmentation : c) 128,57 MAD

Le capital passe de 500 000 à 700 000 MAD par création de 2 000 actions nouvelles, soit une valeur nominale de `200 000 / 2 000 = 100 MAD` — émission au pair.

```
Valeur des anciennes actions : 5 000 × 140 = 700 000
Apport des nouvelles         : 2 000 × 100 = 200 000
                                             -------
Valeur totale après          =              900 000
Nombre d'actions après       =                7 000
Valeur théorique de l'action = 900 000 / 7 000 = 128,57 MAD
```

**Droit préférentiel de souscription (DS)** = `140 − 128,57 = 11,43 MAD` par action ancienne : c'est la perte de valeur que le DS compense pour l'ancien actionnaire.
*(Les 5 000 MAD de frais d'augmentation de capital sont des frais préliminaires — compte 2111 — et n'entrent pas dans ce calcul.)*

### 4. BORJ TRAVAUX SA

**a) Résultat fiscal : b) 440 000 MAD**

```
Résultat comptable avant impôt      420 000
+ Réintégrations                   + 32 000
− Déductions                       − 12 000
                                   --------
Résultat fiscal                     440 000
```

**b) Cotisation minimale : a) 40 000 MAD**

`CM = 0,50 % × 8 000 000 = 40 000 MAD` (taux de droit commun applicable à l'exercice 2018 ; la LF 2022 l'a porté à 0,75 %).

*Pour aller plus loin :* l'IS théorique sur 440 000 MAD étant supérieur à 40 000 MAD, c'est l'IS et non la CM qui serait dû — la CM ne joue que comme plancher.

### 5. ATLAS SA — Commande supplémentaire : a) elle doit être acceptée

**Coût variable unitaire de la production actuelle (8 000 articles) :**

```
Matières premières              1 800 000
Charges variables               3 650 000
Main d'œuvre directe            4 400 000
                                ---------
Total charges variables         9 850 000
Coût variable unitaire = 9 850 000 / 8 000 = 1 231,25 MAD
```

**Analyse marginale de la commande (2 000 articles à −30 %) :**

```
Prix de vente préférentiel : 2 000 × 0,70        = 1 400,00 MAD
Coût marginal unitaire (charges fixes inchangées) = 1 231,25 MAD
Marge sur coût marginal unitaire                  =   168,75 MAD
Marge totale : 168,75 × 2 000                     = 337 500,00 MAD
```

Les charges fixes ne varient pas dans le même palier d'activité : elles sont déjà absorbées par la production régulière et ne doivent pas être imputées à la commande marginale. La marge sur coût marginal étant **positive (+337 500 MAD)**, la commande **améliore le résultat** et doit être **acceptée**.

*Réserves à mentionner dans une copie rédigée :* risque de cannibalisation des ventes au prix normal, risque de voir le client exiger ce tarif de façon récurrente, et vérification que la capacité de production disponible couvre bien les 2 000 unités sans investissement supplémentaire.
