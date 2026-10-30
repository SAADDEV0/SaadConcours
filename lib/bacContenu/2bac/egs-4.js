// Économie générale & Statistiques — 2ème Bac (chapitres 18 et 19 : outils statistiques).
// Formules et présentation alignées sur les sujets et corrigés du national.
const md = String.raw;

export default {
  "les-indices-statistiques": {
    cours: md`
## Introduction

Dire que le PIB est passé de 1 150 à 1 190 milliards de DH ou que le panier d'un ménage coûte plus cher ne suffit pas : il faut **comparer** des grandeurs dans le temps, parfois exprimées dans des unités différentes. L'**indice statistique** ramène cette comparaison à une base simple : **100**. C'est aussi l'outil qui permet de mesurer l'inflation et de suivre les prix d'un panier de biens.

## I. L'indice élémentaire

> Un **indice élémentaire** mesure l'évolution d'**une seule grandeur** (un prix, une quantité, un salaire) entre une période de **base** et une période **courante**.

$$I_{t/0} = \frac{V_t}{V_0} \times 100$$

avec $V_0$ la valeur à la date de base et $V_t$ la valeur à la date courante.

**Lien avec le taux de variation** :

$$t = I_{t/0} - 100$$

**Exemple** : un prix passe de 40 à 46 DH. $I = \frac{46}{40} \times 100 = 115$ : le prix a **augmenté de 15 %** entre les deux dates.

**Lecture** : un indice de 115 ne signifie pas « 115 % de hausse » ; un indice de 92 signifie une **baisse de 8 %**.

## II. Les propriétés utiles

### 1. Enchaîner deux indices (circularité)

$$I_{2/0} = \frac{I_{2/1} \times I_{1/0}}{100}$$

Si les prix augmentent de 10 % puis de 5 % : $\frac{105 \times 110}{100} = 115{,}5$. La hausse totale est de **15,5 %**, et non de 15 % : les hausses se cumulent.

### 2. Changer de base

Pour passer d'une base 0 à une nouvelle base $b$, on divise chaque indice par l'indice de la nouvelle année de base :

$$I_{t/b} = \frac{I_{t/0}}{I_{b/0}} \times 100$$

**Exemple** : l'indice vaut 120 en 2024 et 125 en 2025, en base 100 en 2017. En base 100 en 2024, l'année 2025 vaut $\frac{125}{120} \times 100 \approx 104{,}17$ : le prix a augmenté d'environ 4,17 % entre 2024 et 2025.

## III. Les indices synthétiques

Un **panier** contient plusieurs biens qui n'ont ni le même prix ni la même importance. On ne peut pas additionner des kilos de farine et des litres de lait : on raisonne donc en **valeur** ($P \times Q$), en gardant fixe soit les prix, soit les quantités.

**Notations** : $P_0$ et $Q_0$ sont les prix et quantités de l'année de base ; $P_t$ et $Q_t$ ceux de l'année courante.

| Indice | Ce qu'il mesure | Pondération | Formule |
|---|---|---|---|
| **Laspeyres-prix** ($L_P$) | Évolution des prix | Quantités de l'année de **base** | $\frac{\sum P_t Q_0}{\sum P_0 Q_0} \times 100$ |
| **Paasche-prix** ($P_P$) | Évolution des prix | Quantités de l'année **courante** | $\frac{\sum P_t Q_t}{\sum P_0 Q_t} \times 100$ |
| **Laspeyres-quantités** ($L_Q$) | Évolution des quantités | Prix de l'année de **base** | $\frac{\sum Q_t P_0}{\sum Q_0 P_0} \times 100$ |
| **Paasche-quantités** ($P_Q$) | Évolution des quantités | Prix de l'année **courante** | $\frac{\sum Q_t P_t}{\sum Q_0 P_t} \times 100$ |

### Comment retenir les formules

- **Laspeyres** pondère par l'année de **base** ; **Paasche** pondère par l'année **courante** ;
- dans un indice de **prix**, seuls les prix changent entre le numérateur et le dénominateur ; les quantités restent les mêmes ;
- dans un indice de **quantités**, seules les quantités changent ; les prix restent les mêmes.

### L'indice de valeur

Il mesure l'évolution de la dépense totale, due à la fois aux prix et aux quantités :

$$V = \frac{\sum P_t Q_t}{\sum P_0 Q_0} \times 100$$

Il se décompose ainsi :

$$V = \frac{L_P \times P_Q}{100} = \frac{P_P \times L_Q}{100}$$

## IV. Les indices dans l'analyse économique

### 1. L'indice des prix à la consommation

L'**IPC**, publié par le **HCP**, suit les prix d'un panier représentatif de la consommation des ménages. Le panier étant fixé à l'année de base, il repose sur le principe de **Laspeyres**. Les sujets récents le présentent en base 100 en 2017. Il sert à calculer l'**inflation**.

### 2. Passer de la valeur nominale à la valeur réelle

Pour retirer l'effet de la hausse des prix, on **déflate** une grandeur nominale :

$$\text{Valeur réelle} = \frac{\text{valeur nominale}}{\text{indice des prix}} \times 100$$

### 3. L'indice du pouvoir d'achat

$$\text{Indice du pouvoir d'achat} = \frac{\text{indice du revenu nominal}}{\text{indice des prix}} \times 100$$

## V. Ce qui tombe à l'examen

Au national, ces indices apparaissent surtout de trois façons :

1. un **QCM** demande de reconnaître la bonne formule (par exemple Laspeyres-prix entre 2022 et 2023) ;
2. un **QCM** demande ce qu'exprime un indice (quelle grandeur évolue, quelle pondération) ;
3. un **document** donne des indices, et il faut les **lire** ou en déduire un taux de variation.

**Méthode de lecture** : « Entre [année de base] et [année courante], [la grandeur] a augmenté (ou baissé) de …% ».
`,
    exercices: md`
### Exercice 1 — Indices élémentaires et changement de base (données fictives)

La production d'une entreprise évolue ainsi :

| Année | 2020 | 2022 | 2024 |
|---|---|---|---|
| Production (milliers d'unités) | 400 | 460 | 506 |

1. Calculez les indices en base 100 en 2020 et lisez celui de 2024.
2. Calculez l'indice de 2024 en base 100 en 2022, de deux façons.

<details><summary>Voir le corrigé</summary>

1. $I_{2022/2020} = \frac{460}{400} \times 100 = 115$ ; $I_{2024/2020} = \frac{506}{400} \times 100 = 126{,}5$.
   **Lecture** : entre 2020 et 2024, la production a augmenté de 26,5 %.
2. À partir des valeurs : $\frac{506}{460} \times 100 = 110$. À partir des indices : $\frac{126{,}5}{115} \times 100 = 110$. La production a augmenté de 10 % entre 2022 et 2024.

</details>

### Exercice 2 — Indices synthétiques (données fictives)

Un panier contient trois biens :

| Bien | $P_0$ (2023) | $Q_0$ (2023) | $P_t$ (2024) | $Q_t$ (2024) |
|---|---|---|---|---|
| A | 10 | 100 | 12 | 90 |
| B | 20 | 50 | 22 | 60 |
| C | 5 | 200 | 5,5 | 220 |

1. Calculez $\sum P_0 Q_0$, $\sum P_t Q_0$, $\sum P_0 Q_t$ et $\sum P_t Q_t$.
2. Calculez les indices de Laspeyres et de Paasche, des prix et des quantités.
3. Calculez l'indice de valeur et vérifiez sa décomposition.

<details><summary>Voir le corrigé</summary>

1. Calcul des sommes :

| Bien | $P_0 Q_0$ | $P_t Q_0$ | $P_0 Q_t$ | $P_t Q_t$ |
|---|---|---|---|---|
| A | 1 000 | 1 200 | 900 | 1 080 |
| B | 1 000 | 1 100 | 1 200 | 1 320 |
| C | 1 000 | 1 100 | 1 100 | 1 210 |
| **Total** | **3 000** | **3 400** | **3 200** | **3 610** |

2. Indices :

- $L_P = \frac{3\,400}{3\,000} \times 100 \approx 113{,}33$ ;
- $P_P = \frac{3\,610}{3\,200} \times 100 \approx 112{,}81$ ;
- $L_Q = \frac{3\,200}{3\,000} \times 100 \approx 106{,}67$ ;
- $P_Q = \frac{3\,610}{3\,400} \times 100 \approx 106{,}18$.

3. $V = \frac{3\,610}{3\,000} \times 100 \approx 120{,}33$. Vérification : $\frac{113{,}33 \times 106{,}18}{100} \approx 120{,}33$ et $\frac{112{,}81 \times 106{,}67}{100} \approx 120{,}33$.

**Lecture** : avec le panier de 2023, les prix ont augmenté d'environ 13,33 % entre 2023 et 2024.

</details>

### Exercice 3 — Salaire réel et pouvoir d'achat (données fictives)

Le salaire mensuel d'un employé passe de 5 000 DH en 2023 à 5 600 DH en 2024. L'indice des prix passe de 100 à 108.

1. Calculez le salaire de 2024 exprimé en DH de 2023.
2. Calculez l'indice du pouvoir d'achat et interprétez-le.

<details><summary>Voir le corrigé</summary>

1. Salaire réel $= \frac{5\,600}{108} \times 100 \approx 5\,185{,}19$ DH.
2. Indice du salaire $= \frac{5\,600}{5\,000} \times 100 = 112$ ; indice du pouvoir d'achat $= \frac{112}{108} \times 100 \approx 103{,}70$.
   Le pouvoir d'achat a **augmenté** d'environ 3,70 % : le salaire a progressé plus vite que les prix.

</details>
`,
    resume: md`
## L'essentiel — Les indices statistiques

- **Indice élémentaire** : $I_{t/0} = \frac{V_t}{V_0} \times 100$ ; **taux de variation** : $t = I - 100$.
- **Enchaînement** : $I_{2/0} = \frac{I_{2/1} \times I_{1/0}}{100}$.
- **Changement de base** : $I_{t/b} = \frac{I_{t/0}}{I_{b/0}} \times 100$.
- **Laspeyres** : pondération par l'année de **base** ; **Paasche** : pondération par l'année **courante**.
- **Prix** : $L_P = \frac{\sum P_t Q_0}{\sum P_0 Q_0} \times 100$ ; $P_P = \frac{\sum P_t Q_t}{\sum P_0 Q_t} \times 100$.
- **Quantités** : $L_Q = \frac{\sum Q_t P_0}{\sum Q_0 P_0} \times 100$ ; $P_Q = \frac{\sum Q_t P_t}{\sum Q_0 P_t} \times 100$.
- **Valeur** : $V = \frac{\sum P_t Q_t}{\sum P_0 Q_0} \times 100 = \frac{L_P \times P_Q}{100}$.
- **Valeur réelle** $= \frac{\text{valeur nominale}}{\text{indice des prix}} \times 100$.
`,
    qcm: [
      { q: "Un indice de 92 (base 100) signifie une variation de :", choix: ["+92 %", "−8 %", "+8 %", "−92 %"], bonne: 1, explication: "t = I − 100 = 92 − 100 = −8 %." },
      { q: "L'indice de Laspeyres-prix entre 2022 et 2023 se calcule par :", choix: ["ΣP23Q23 / ΣP22Q23 × 100", "ΣP23Q22 / ΣP22Q22 × 100", "ΣP22Q23 / ΣP22Q22 × 100", "ΣP23Q23 / ΣP23Q22 × 100"], bonne: 1, explication: "Seuls les prix changent, et les quantités restent celles de l'année de base (2022)." },
      { q: "L'indice de Paasche-prix exprime l'évolution :", choix: ["Des prix, pondérés par les quantités de l'année de base", "Des prix, pondérés par les quantités de l'année courante", "Des quantités, pondérées par les prix de l'année de base", "Des quantités, pondérées par les prix de l'année courante"], bonne: 1, explication: "Paasche pondère par l'année courante, et un indice de prix fait varier les prix." },
      { q: "Des prix augmentent de 10 % puis de 20 %. L'indice sur les deux périodes vaut :", choix: ["130", "132", "120", "110"], bonne: 1, explication: "110 × 120 / 100 = 132, soit une hausse totale de 32 %." },
      { q: "Un indice vaut 150 en 2024 et 165 en 2025 (base 100 en 2017). En base 100 en 2024, l'année 2025 vaut :", choix: ["110", "115", "247,5", "90,9"], bonne: 0, explication: "165 / 150 × 100 = 110." },
    ],
  },

  "l-ajustement-lineaire": {
    cours: md`
## Introduction

L'épargne nationale augmente-t-elle avec le revenu ? Le chômage recule-t-il quand la croissance s'accélère ? Pour étudier le lien entre deux grandeurs économiques et faire des **prévisions**, on résume leur évolution par une **droite** : c'est l'**ajustement linéaire**. Cette question revient très souvent dans les sujets nationaux d'économie générale et statistiques.

## I. La série statistique à deux variables

On observe deux variables sur $n$ périodes : les couples $(x_i ; y_i)$.

- $x$ est la **variable explicative** (par exemple le revenu) ;
- $y$ est la **variable expliquée** (par exemple l'épargne).

Représentés dans un repère, ces couples forment un **nuage de points**. Si les points sont presque alignés, on peut remplacer le nuage par une droite d'ajustement.

Les **moyennes** donnent le **point moyen** $G(\bar{x} ; \bar{y})$ :

$$\bar{x} = \frac{\sum x_i}{n} \qquad \bar{y} = \frac{\sum y_i}{n}$$

## II. La droite d'ajustement

$$y = ax + b$$

- $a$ est le **coefficient directeur** : la variation de $y$ quand $x$ augmente d'une unité ;
- $b$ est l'**ordonnée à l'origine** : la valeur de $y$ quand $x = 0$.

## III. La méthode des moindres carrés (méthode développée)

La **méthode des moindres carrés** retient la droite qui rend **la plus petite possible** la somme des carrés des écarts entre les valeurs observées et les valeurs de la droite.

$$a = \frac{\sum x_i y_i - n\,\bar{x}\,\bar{y}}{\sum x_i^2 - n\,\bar{x}^2} \qquad\qquad b = \bar{y} - a\,\bar{x}$$

La droite obtenue **passe par le point moyen** $G$ : c'est ce qui donne la formule de $b$.

### Les étapes

1. Repérer $x$, $y$ et le nombre d'observations $n$ ;
2. Calculer (ou relever) $\bar{x}$, $\bar{y}$, $\sum x_i y_i$ et $\sum x_i^2$ ;
3. Calculer $a$ ;
4. Calculer $b$ ;
5. Écrire l'équation $y = ax + b$ ;
6. Interpréter le résultat, puis faire la prévision demandée.

## IV. La présentation attendue à l'examen

Le sujet donne le plus souvent les sommes et les moyennes, et il demande de remplir un tableau :

| Élément | Formule | Application numérique | Résultat |
|---|---|---|---|
| $a$ | $\frac{\sum x_i y_i - n\bar{x}\bar{y}}{\sum x_i^2 - n\bar{x}^2}$ | Valeurs remplacées | Valeur de $a$ |
| $b$ | $\bar{y} - a\bar{x}$ | Valeurs remplacées | Valeur de $b$ |
| Équation | $y = ax + b$ | | Équation avec les valeurs |

**Attention aux pièges** :

- le $n$ n'est pas toujours écrit : comptez les années du document ;
- $n\,\bar{x}^2$ se calcule en élevant d'abord $\bar{x}$ au carré ;
- avec des valeurs négatives, gardez les parenthèses : $-8\,874{,}66 - [6 \times 240{,}03 \times (-6{,}53)]$ ;
- arrondissez $a$ comme le demande le sujet, en général à deux décimales.

## V. Interpréter et prévoir

### 1. L'interprétation

Elle repose sur le **signe de** $a$ :

| Signe | Sens de la relation | Exemple de rédaction |
|---|---|---|
| $a > 0$ | Les deux variables évoluent dans le **même sens** | « L'épargne augmente lorsque le revenu augmente, et inversement. » |
| $a < 0$ | Les deux variables évoluent en **sens inverse** | « Le chômage recule lorsque la croissance augmente, et inversement. » |

On peut préciser l'ampleur : si $a = 0{,}25$, une hausse d'une unité de $x$ s'accompagne en moyenne d'une hausse de 0,25 unité de $y$.

### 2. La prévision

On remplace $x$ par la valeur donnée dans l'équation. Pour $y = 0{,}25x + 12$ et $x = 1\,600$ :

$$y = 0{,}25 \times 1\,600 + 12 = 412$$

### 3. Les limites

- Une droite n'est qu'un **résumé** : elle n'explique pas tout ;
- Un lien statistique ne prouve pas à lui seul une **cause** ;
- Une prévision est moins fiable quand $x$ s'éloigne beaucoup des valeurs observées ;
- Avec peu d'années d'observation, le résultat reste fragile.
`,
    exercices: md`
### Exercice 1 — Calcul complet (données fictives, en milliers de DH)

Une entreprise observe ses dépenses de publicité $x$ et son chiffre d'affaires $y$ :

| Année | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| $x_i$ | 10 | 20 | 30 | 40 |
| $y_i$ | 340 | 400 | 520 | 580 |

1. Calculez $\bar{x}$, $\bar{y}$, $\sum x_i y_i$ et $\sum x_i^2$.
2. Déterminez la droite d'ajustement par la méthode des moindres carrés.
3. Interprétez le signe de $a$.
4. Prévoyez le chiffre d'affaires pour 50 milliers de DH de publicité.

<details><summary>Voir le corrigé</summary>

1. Tableau de calcul :

| $x_i$ | $y_i$ | $x_i y_i$ | $x_i^2$ |
|---|---|---|---|
| 10 | 340 | 3 400 | 100 |
| 20 | 400 | 8 000 | 400 |
| 30 | 520 | 15 600 | 900 |
| 40 | 580 | 23 200 | 1 600 |
| **100** | **1 840** | **50 200** | **3 000** |

$\bar{x} = \frac{100}{4} = 25$ ; $\bar{y} = \frac{1\,840}{4} = 460$.

2. Droite d'ajustement :

| Élément | Application numérique | Résultat |
|---|---|---|
| $a$ | $\frac{50\,200 - 4 \times 25 \times 460}{3\,000 - 4 \times 25^2} = \frac{4\,200}{500}$ | 8,4 |
| $b$ | $460 - 8{,}4 \times 25$ | 250 |

**Équation** : $y = 8{,}4x + 250$.

3. $a > 0$ : le chiffre d'affaires et les dépenses de publicité évoluent dans le **même sens**.
4. $y = 8{,}4 \times 50 + 250 = 670$ milliers de DH.

</details>

### Exercice 2 — Présentation du national (données fictives, en milliards de DH)

Sur 5 années : $x$ est le revenu national brut disponible et $y$ l'épargne nationale brute. On donne :

$$\sum x_i y_i = 1\,812\,000 \quad ; \quad \sum x_i^2 = 7\,250\,000 \quad ; \quad \bar{x} = 1\,200 \quad ; \quad \bar{y} = 300$$

1. Déterminez l'équation de la droite d'ajustement (méthode développée).
2. Interprétez le lien entre les deux variables.
3. Calculez l'épargne prévisionnelle si le revenu atteint 1 500 milliards de DH.

<details><summary>Voir le corrigé</summary>

1. Équation :

| Élément | Formule | Application numérique | Résultat |
|---|---|---|---|
| $a$ | $\frac{\sum x_i y_i - n\bar{x}\bar{y}}{\sum x_i^2 - n\bar{x}^2}$ | $\frac{1\,812\,000 - 5 \times 1\,200 \times 300}{7\,250\,000 - 5 \times 1\,200^2} = \frac{12\,000}{50\,000}$ | 0,24 |
| $b$ | $\bar{y} - a\bar{x}$ | $300 - 0{,}24 \times 1\,200$ | 12 |

**Équation** : $y = 0{,}24x + 12$.

2. $a$ est positif : l'épargne nationale brute augmente lorsque le revenu national brut disponible augmente, et inversement.
3. $y = 0{,}24 \times 1\,500 + 12 = 372$ milliards de DH.

</details>

### Exercice 3 — Relation négative (données fictives)

Sur 4 années : $x$ est le taux de croissance (en %) et $y$ le taux de chômage (en %). On donne :

$$\sum x_i y_i = 94 \quad ; \quad \sum x_i^2 = 40 \quad ; \quad \bar{x} = 3 \quad ; \quad \bar{y} = 8$$

1. Déterminez l'équation de la droite d'ajustement.
2. Interprétez le signe de $a$.
3. Quel taux de chômage peut-on prévoir pour une croissance de 6 % ?

<details><summary>Voir le corrigé</summary>

1. $a = \frac{94 - 4 \times 3 \times 8}{40 - 4 \times 3^2} = \frac{-2}{4} = -0{,}5$ ; $b = 8 - (-0{,}5) \times 3 = 9{,}5$.
   **Équation** : $y = -0{,}5x + 9{,}5$.
2. $a < 0$ : les deux variables évoluent en **sens inverse**. Le chômage recule lorsque la croissance augmente, et inversement.
3. $y = -0{,}5 \times 6 + 9{,}5 = 6{,}5$ : un taux de chômage prévisionnel de **6,5 %**. Cette valeur reste indicative : 6 % est le double de la croissance moyenne observée.

</details>
`,
    resume: md`
## L'essentiel — L'ajustement linéaire

- **But** : résumer le lien entre deux variables par une droite $y = ax + b$ et faire des prévisions.
- $x$ : variable explicative ; $y$ : variable expliquée ; **point moyen** $G(\bar{x} ; \bar{y})$.
- **Méthode des moindres carrés (développée)** : $a = \frac{\sum x_i y_i - n\bar{x}\bar{y}}{\sum x_i^2 - n\bar{x}^2}$ et $b = \bar{y} - a\bar{x}$.
- La droite passe par $G$.
- $a > 0$ : les variables évoluent dans le **même sens** ; $a < 0$ : en **sens inverse**.
- **Prévision** : remplacer $x$ par sa valeur dans l'équation.
- **Limites** : un lien statistique n'est pas une preuve de cause ; prudence loin des valeurs observées.
`,
    qcm: [
      { q: "Dans la méthode développée, a est égal à :", choix: ["(Σxiyi − n x̄ ȳ) / (Σxi² − n x̄²)", "(Σxi² − n x̄²) / (Σxiyi − n x̄ ȳ)", "ȳ − a x̄", "Σxiyi / Σxi²"], bonne: 0, explication: "C'est la formule utilisée dans les corrigés du national." },
      { q: "Une fois a connu, b se calcule par :", choix: ["x̄ − a ȳ", "ȳ − a x̄", "ȳ + a x̄", "a × x̄ × ȳ"], bonne: 1, explication: "La droite passe par le point moyen : ȳ = a x̄ + b." },
      { q: "Si a est négatif, les deux variables évoluent :", choix: ["Dans le même sens", "En sens inverse", "De façon identique", "Sans aucun lien"], bonne: 1, explication: "Quand x augmente, y tend à diminuer." },
      { q: "Pour y = 0,5x + 4, la prévision pour x = 20 est :", choix: ["10", "14", "24", "18"], bonne: 1, explication: "0,5 × 20 + 4 = 14." },
      { q: "n = 4 ; x̄ = 5 ; ȳ = 10 ; Σxiyi = 212 ; Σxi² = 106. La valeur de a est :", choix: ["2", "1", "0,5", "2,5"], bonne: 0, explication: "(212 − 200) / (106 − 100) = 12 / 6 = 2." },
    ],
  },
};
