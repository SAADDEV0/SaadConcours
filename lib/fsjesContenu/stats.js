// Statistiques et Probabilités (S2) — compléments par chapitre.
const md = String.raw;

export default {
  1: {
    titre: "Vocabulaire et tableaux statistiques",
    resume: md`
## L'essentiel — Vocabulaire statistique

- **Population** (ensemble étudié), **individu**, **échantillon**, **caractère** (variable), **modalité**.
- Caractère **qualitatif** (nominal ou ordinal) ou **quantitatif** (discret ou continu).
- **Fréquence** : $f_i = n_i / N$, avec $\sum n_i = N$ et $\sum f_i = 1$.
- **Effectif cumulé croissant** $N_i$ : utile pour la médiane et les quartiles.
- Variable continue en classes : **amplitude** $a_i = e_i - e_{i-1}$, **centre** $c_i$, **densité** $d_i = n_i / a_i$.
- Histogramme à **amplitudes inégales** : on porte la densité en ordonnée.
`,
    exercices: md`
### Exercice 2 — Série discrète

On a relevé le nombre d'enfants de 50 familles :

| Nombre d'enfants | 0 | 1 | 2 | 3 | 4 |
|---|--:|--:|--:|--:|--:|
| Effectif | 5 | 12 | 18 | 10 | 5 |

1. Précisez la population, le caractère et sa nature.
2. Calculez les fréquences et les effectifs cumulés croissants.
3. Quelle proportion de familles a au plus 2 enfants ?

<details><summary>Voir le corrigé</summary>

**1)** Population : les 50 familles ; caractère : le nombre d'enfants ; **quantitatif discret**.

**2)**

| $x_i$ | 0 | 1 | 2 | 3 | 4 |
|---|--:|--:|--:|--:|--:|
| $f_i$ | 10 % | 24 % | 36 % | 20 % | 10 % |
| $N_i$ | 5 | 17 | 35 | 45 | 50 |

**3)** $35 / 50 = 70\%$.

</details>
`,
    qcm: [
      { q: "Le secteur d'activité d'une entreprise est un caractère :", choix: ["Quantitatif discret", "Quantitatif continu", "Qualitatif nominal", "Qualitatif ordinal"], bonne: 2, explication: "Ses modalités ne sont pas ordonnées." },
      { q: "Le niveau de satisfaction (faible, moyen, élevé) est un caractère :", choix: ["Qualitatif ordinal", "Qualitatif nominal", "Quantitatif discret", "Quantitatif continu"], bonne: 0, explication: "Les modalités sont ordonnées." },
      { q: "Une modalité d'effectif 15 dans une population de 60 a une fréquence de :", choix: ["15 %", "25 %", "4 %", "0,4"], bonne: 1, explication: "15 / 60 = 0,25." },
      { q: "Le centre de la classe [20 ; 30[ est :", choix: ["20", "25", "30", "10"], bonne: 1, explication: "(20 + 30) / 2 = 25." },
      { q: "Quand les amplitudes sont inégales, l'histogramme utilise :", choix: ["Les effectifs", "Les densités", "Les fréquences cumulées", "Les centres"], bonne: 1, explication: "Pour que l'aire reste proportionnelle à l'effectif." },
    ],
  },

  2: {
    titre: "Les caractéristiques de tendance centrale",
    resume: md`
## L'essentiel — Tendance centrale

- **Mode** : modalité (ou classe) de plus grand effectif ; en classes inégales, classe de plus forte **densité**.
- **Médiane** : partage la population en deux moitiés ; en classes : $M_e = e_{i-1} + a_i \times \dfrac{N/2 - N_{i-1}}{n_i}$.
- **Moyenne** : $\bar{x} = \dfrac{1}{N}\sum n_i x_i$ (centres de classes pour une variable continue).
- **Quartiles** : même interpolation avec $N/4$ et $3N/4$.
- La médiane résiste aux valeurs extrêmes ; la moyenne y est sensible.
- $\bar{x} > M_e$ : distribution étalée à droite.
`,
    exercices: md`
### Exercice 2 — Mode, médiane, moyenne et quartiles d'une série discrète

Reprenez la série du nombre d'enfants : 0 (5 familles), 1 (12), 2 (18), 3 (10), 4 (5).

Calculez le mode, la médiane, la moyenne, le premier et le troisième quartile.

<details><summary>Voir le corrigé</summary>

- **Mode** : 2 enfants (effectif 18).
- **Médiane** : $N/2 = 25$ ; effectifs cumulés 5, 17, **35** : la 25ᵉ famille a 2 enfants, donc $M_e = 2$.
- **Moyenne** : $\bar{x} = \dfrac{0 + 12 + 36 + 30 + 20}{50} = \dfrac{98}{50} = 1{,}96$ enfant.
- $Q_1$ : $N/4 = 12{,}5$ → cumul 17 → $Q_1 = 1$ ; $Q_3$ : $3N/4 = 37{,}5$ → cumul 45 → $Q_3 = 3$.

</details>
`,
    qcm: [
      { q: "La médiane de la série 3, 5, 7, 9, 100 est :", choix: ["7", "24,8", "9", "5"], bonne: 0, explication: "Valeur centrale de la série ordonnée." },
      { q: "La moyenne de la série 3, 5, 7, 9, 100 est :", choix: ["7", "24,8", "25", "22"], bonne: 1, explication: "124 / 5 = 24,8 : la valeur 100 tire la moyenne vers le haut." },
      { q: "Le seul indicateur de tendance centrale utilisable pour un caractère qualitatif nominal est :", choix: ["La moyenne", "La médiane", "Le mode", "Le quartile"], bonne: 2, explication: "On ne peut ni ordonner ni additionner les modalités." },
      { q: "Pour une variable continue, la moyenne se calcule avec :", choix: ["Les bornes inférieures", "Les centres de classes", "Les amplitudes", "Les densités"], bonne: 1, explication: "Chaque classe est représentée par son centre." },
      { q: "Le troisième quartile est la valeur en dessous de laquelle se trouvent :", choix: ["25 % des observations", "50 % des observations", "75 % des observations", "100 % des observations"], bonne: 2, explication: "On utilise 3N/4." },
    ],
  },

  3: {
    titre: "Les caractéristiques de dispersion et de forme",
    resume: md`
## L'essentiel — Dispersion et forme

- **Étendue** $= x_{max} - x_{min}$ ; **intervalle interquartile** $= Q_3 - Q_1$ (50 % centraux).
- **Variance** $V = \dfrac{1}{N}\sum n_i x_i^2 - \bar{x}^2$ ; **écart-type** $\sigma = \sqrt{V}$.
- **Coefficient de variation** $CV = \dfrac{\sigma}{\bar{x}} \times 100$ : sans unité, il compare des séries différentes ; une série est homogène si $CV$ est faible (moins de 15 % environ).
- Forme : $\bar{x} = M_e = M_o$ symétrique ; $\bar{x} > M_e > M_o$ étalée à droite ; $\bar{x} < M_e < M_o$ étalée à gauche.
- **Courbe de Lorenz** et **indice de Gini** ($0 \leq G \leq 1$) : mesure de la concentration (inégalités).
`,
    exercices: md`
### Exercice 2 — Variance et coefficient de variation

Reprenez la série du nombre d'enfants : 0 (5 familles), 1 (12), 2 (18), 3 (10), 4 (5), de moyenne 1,96.

1. Calculez la variance et l'écart-type.
2. Calculez le coefficient de variation et l'intervalle interquartile ($Q_1 = 1$, $Q_3 = 3$). Commentez.

<details><summary>Voir le corrigé</summary>

**1)** $\sum n_i x_i^2 = 0 + 12 + 72 + 90 + 80 = 254$ ; $V = \dfrac{254}{50} - 1{,}96^2 = 5{,}08 - 3{,}8416 = 1{,}2384$ ; $\sigma \approx 1{,}11$ enfant.

**2)** $CV = 1{,}11 / 1{,}96 \approx 56{,}8\%$ : la série est **hétérogène** (les familles sont très différentes). $IQ = 3 - 1 = 2$ : la moitié centrale des familles a entre 1 et 3 enfants.

</details>
`,
    qcm: [
      { q: "La formule développée de la variance est :", choix: ["(1/N) Σ nᵢxᵢ² − x̄²", "(1/N) Σ nᵢxᵢ − x̄", "Σ nᵢ(xᵢ − x̄)", "σ / x̄"], bonne: 0, explication: "Moyenne des carrés moins carré de la moyenne." },
      { q: "Une variance de 25 correspond à un écart-type de :", choix: ["625", "5", "12,5", "2,5"], bonne: 1, explication: "σ = √25." },
      { q: "Le coefficient de variation sert surtout à :", choix: ["Calculer la moyenne", "Comparer la dispersion de séries différentes", "Trouver la médiane", "Tracer un histogramme"], bonne: 1, explication: "Il est sans unité." },
      { q: "Si x̄ > Mₑ > Mₒ, la distribution est :", choix: ["Symétrique", "Étalée à droite", "Étalée à gauche", "Uniforme"], bonne: 1, explication: "Quelques grandes valeurs tirent la moyenne vers le haut." },
      { q: "Un indice de Gini proche de 0 signifie :", choix: ["Une forte concentration", "Une répartition presque égalitaire", "Une moyenne nulle", "Une variance élevée"], bonne: 1, explication: "La courbe de Lorenz est proche de la diagonale." },
    ],
  },

  4: {
    titre: "Les indices statistiques",
    resume: md`
## L'essentiel — Les indices

- **Indice élémentaire** : $I_{t/0} = \dfrac{x_t}{x_0} \times 100$ ; un indice de 112 = hausse de 12 %.
- **Réversibilité** : $I_{t/0} \times I_{0/t} = 100^2$ ; **transitivité** : $I_{2/0} = \dfrac{I_{2/1} \times I_{1/0}}{100}$.
- **Laspeyres** : $L = \dfrac{\sum p_t q_0}{\sum p_0 q_0} \times 100$ (quantités de base) ; l'IPC du HCP est de type Laspeyres.
- **Paasche** : $P = \dfrac{\sum p_t q_t}{\sum p_0 q_t} \times 100$ (quantités courantes) ; **Fisher** $= \sqrt{L \times P}$.
- **TCAM** $= \left(\dfrac{x_n}{x_0}\right)^{1/n} - 1$ : ne jamais diviser la hausse totale par le nombre d'années.
`,
    exercices: md`
### Exercice 2 — Laspeyres, Paasche, Fisher

| Produit | $p_0$ | $q_0$ | $p_t$ | $q_t$ |
|---|--:|--:|--:|--:|
| A | 10 | 100 | 12 | 90 |
| B | 20 | 50 | 22 | 60 |

1. Calculez les indices de prix de Laspeyres, de Paasche et de Fisher.
2. Un indice passe de 100 à 105 la première année, puis augmente de 8 % la deuxième. Quel est l'indice de l'année 2 (base 100 à l'année 0) ?

<details><summary>Voir le corrigé</summary>

**1)** $\sum p_0 q_0 = 1\,000 + 1\,000 = 2\,000$ ; $\sum p_t q_0 = 1\,200 + 1\,100 = 2\,300$ ; $L = 115$.

$\sum p_t q_t = 1\,080 + 1\,320 = 2\,400$ ; $\sum p_0 q_t = 900 + 1\,200 = 2\,100$ ; $P \approx 114{,}29$.

$F = \sqrt{115 \times 114{,}29} \approx 114{,}64$.

**2)** Transitivité : $I_{2/0} = \dfrac{108 \times 105}{100} = 113{,}4$ (hausse de 13,4 %, et non 13 %).

</details>
`,
    qcm: [
      { q: "Un indice de 95 signifie :", choix: ["Une hausse de 95 %", "Une baisse de 5 %", "Une hausse de 5 %", "Une baisse de 95 %"], bonne: 1, explication: "95 − 100 = −5 %." },
      { q: "L'indice de Laspeyres est pondéré par :", choix: ["Les quantités de la période de base", "Les quantités de la période courante", "Les prix courants", "Aucune pondération"], bonne: 0, explication: "Paasche utilise les quantités courantes." },
      { q: "L'indice de Fisher est :", choix: ["La somme de Laspeyres et Paasche", "La moyenne géométrique de Laspeyres et Paasche", "Le rapport des deux", "Toujours égal à 100"], bonne: 1, explication: "F = √(L × P)." },
      { q: "Un CA qui double en 5 ans correspond à un TCAM d'environ :", choix: ["20 %", "14,9 %", "10 %", "40 %"], bonne: 1, explication: "2^(1/5) − 1 ≈ 0,149." },
      { q: "L'IPC publié par le HCP est un indice de type :", choix: ["Paasche", "Laspeyres", "Fisher", "Gini"], bonne: 1, explication: "Le panier de référence est celui de la base." },
    ],
  },

  5: {
    titre: "La statistique bivariée : corrélation et régression",
    resume: md`
## L'essentiel — Corrélation et régression

- **Covariance** : $\text{Cov}(x, y) = \dfrac{1}{N}\sum x_i y_i - \bar{x}\bar{y}$.
- **Corrélation** : $r = \dfrac{\text{Cov}(x, y)}{\sigma_x \sigma_y}$, avec $-1 \leq r \leq 1$ ; $|r|$ proche de 1 = liaison linéaire forte.
- **Corrélation n'est pas causalité.**
- Droite des moindres carrés de $y$ en $x$ : $a = \dfrac{\text{Cov}(x, y)}{V(x)}$ et $b = \bar{y} - a\bar{x}$ ; elle passe par le **point moyen**.
- **Coefficient de détermination** $R^2 = r^2$ : part de la variance de $y$ expliquée par $x$.
`,
    exercices: md`
### Exercice 2 — Régression à partir des données brutes

| x | 1 | 2 | 3 | 4 | 5 |
|---|--:|--:|--:|--:|--:|
| y | 3 | 5 | 4 | 7 | 8 |

1. Calculez $\bar{x}$, $\bar{y}$, $V(x)$, $V(y)$ et $\text{Cov}(x, y)$.
2. Calculez $r$ et $R^2$.
3. Déterminez la droite de régression de $y$ en $x$ et prévoyez $y$ pour $x = 6$.

<details><summary>Voir le corrigé</summary>

**1)** $\bar{x} = 3$ ; $\bar{y} = 5{,}4$ ; $V(x) = \dfrac{55}{5} - 9 = 2$ ; $V(y) = \dfrac{163}{5} - 29{,}16 = 3{,}44$ ; $\sum x_i y_i = 93$, donc $\text{Cov} = 18{,}6 - 16{,}2 = 2{,}4$.

**2)** $r = \dfrac{2{,}4}{\sqrt{2 \times 3{,}44}} \approx 0{,}915$ ; $R^2 \approx 0{,}837$ : 83,7 % de la variance de $y$ est expliquée par $x$.

**3)** $a = 2{,}4 / 2 = 1{,}2$ ; $b = 5{,}4 - 1{,}2 \times 3 = 1{,}8$ ; $y = 1{,}2x + 1{,}8$ ; pour $x = 6$ : $y = 9$.

</details>
`,
    qcm: [
      { q: "Un coefficient de corrélation de −0,95 indique :", choix: ["Aucune liaison", "Une forte liaison linéaire négative", "Une faible liaison positive", "Une erreur de calcul"], bonne: 1, explication: "|r| proche de 1, signe négatif." },
      { q: "La pente de la droite de régression de y en x est :", choix: ["Cov(x, y) / V(y)", "Cov(x, y) / V(x)", "r × V(x)", "ȳ − x̄"], bonne: 1, explication: "a = Cov / V(x)." },
      { q: "La droite de régression passe toujours par :", choix: ["L'origine", "Le point moyen (x̄ ; ȳ)", "Le premier point", "Le point (1 ; 1)"], bonne: 1, explication: "Car b = ȳ − a x̄." },
      { q: "Si r = 0,8, alors R² vaut :", choix: ["0,8", "0,64", "0,4", "1,6"], bonne: 1, explication: "R² = r²." },
      { q: "Un r proche de 0 signifie :", choix: ["Aucune liaison d'aucune sorte", "Absence de liaison linéaire", "Une causalité parfaite", "Une erreur"], bonne: 1, explication: "Une liaison non linéaire reste possible." },
    ],
  },

  6: {
    titre: "Les fondements du calcul des probabilités",
    resume: md`
## L'essentiel — Probabilités

- Univers $\Omega$, événement, événements **incompatibles** ($A \cap B = \varnothing$).
- $0 \leq P(A) \leq 1$ ; $P(\bar{A}) = 1 - P(A)$ ; $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.
- Équiprobabilité : $P(A) = \dfrac{\text{cas favorables}}{\text{cas possibles}}$.
- **Conditionnelle** : $P(A / B) = \dfrac{P(A \cap B)}{P(B)}$.
- **Indépendance** : $P(A \cap B) = P(A) \times P(B)$.
- **Probabilités totales** : $P(A) = \sum P(A / B_i) P(B_i)$ ; **Bayes** : $P(B_i / A) = \dfrac{P(A / B_i) P(B_i)}{P(A)}$.
`,
    exercices: md`
### Exercice 2 — Indépendance et tirages sans remise

1. $P(A) = 0{,}4$, $P(B) = 0{,}5$ et $P(A \cap B) = 0{,}2$. A et B sont-ils indépendants ? Calculez $P(A \cup B)$ et $P(A / B)$.
2. Une urne contient 5 boules rouges et 3 noires. On tire successivement 2 boules sans remise. Calculez la probabilité d'obtenir 2 rouges, puis celle d'obtenir au moins une noire.

<details><summary>Voir le corrigé</summary>

**1)** $P(A) \times P(B) = 0{,}2 = P(A \cap B)$ : **indépendants**. $P(A \cup B) = 0{,}4 + 0{,}5 - 0{,}2 = 0{,}7$ ; $P(A / B) = 0{,}2 / 0{,}5 = 0{,}4 = P(A)$.

**2)** $P(RR) = \dfrac{5}{8} \times \dfrac{4}{7} = \dfrac{20}{56} = \dfrac{5}{14} \approx 0{,}357$ ; $P(\text{au moins une noire}) = 1 - \dfrac{5}{14} = \dfrac{9}{14} \approx 0{,}643$.

</details>
`,
    qcm: [
      { q: "Si P(A) = 0,3, alors P(non A) vaut :", choix: ["0,3", "0,7", "1,3", "0"], bonne: 1, explication: "1 − 0,3." },
      { q: "Deux événements incompatibles vérifient :", choix: ["P(A ∩ B) = 0", "P(A ∩ B) = P(A) × P(B)", "P(A) = P(B)", "P(A ∪ B) = 0"], bonne: 0, explication: "Ils ne peuvent pas se produire ensemble." },
      { q: "P(A) = 0,5, P(B) = 0,4, P(A ∩ B) = 0,1 : P(A ∪ B) =", choix: ["0,9", "0,8", "0,2", "1"], bonne: 1, explication: "0,5 + 0,4 − 0,1 = 0,8." },
      { q: "A et B sont indépendants si :", choix: ["P(A ∩ B) = 0", "P(A ∩ B) = P(A) × P(B)", "P(A) + P(B) = 1", "P(A/B) = P(B)"], bonne: 1, explication: "Équivaut à P(A/B) = P(A)." },
      { q: "La formule de Bayes permet de calculer :", choix: ["Une moyenne", "La probabilité d'une cause sachant l'effet observé", "Une variance", "Un indice"], bonne: 1, explication: "On « remonte » de l'effet vers la cause." },
    ],
  },

  7: {
    titre: "Variables aléatoires et lois usuelles",
    resume: md`
## L'essentiel — Variables aléatoires et lois

- $E(X) = \sum x_i P(X = x_i)$ ; $V(X) = E(X^2) - E(X)^2$ ; $E(aX + b) = aE(X) + b$ ; $V(aX + b) = a^2 V(X)$.
- **Bernoulli** : $E = p$, $V = p(1 - p)$.
- **Binomiale** $\mathcal{B}(n, p)$ : $P(X = k) = C_n^k p^k (1 - p)^{n - k}$ ; $E = np$ ; $V = np(1 - p)$.
- **Poisson** $\mathcal{P}(\lambda)$ : $P(X = k) = e^{-\lambda} \dfrac{\lambda^k}{k!}$ ; $E = V = \lambda$.
- **Normale** : on centre-réduit $T = \dfrac{X - \mu}{\sigma}$ ; $\pm 1\sigma$ : 68 % ; $\pm 2\sigma$ : 95 % ; $\pm 3\sigma$ : 99,7 %.
- Approximations : binomiale → Poisson ($p$ petit) ou → normale ($np \geq 5$ et $n(1 - p) \geq 5$).
`,
    exercices: md`
### Exercice 2 — Binomiale et normale

1. 20 % des clients d'une agence achètent une assurance. On observe 10 clients indépendants. Calculez la probabilité que exactement 2 achètent, puis l'espérance et la variance du nombre d'acheteurs.
2. Le poids d'un paquet suit une loi normale $\mathcal{N}(500 ; 10)$ (en grammes). Calculez $P(X < 490)$ et $P(480 < X < 520)$ sachant que $P(T < 1) = 0{,}8413$ et $P(T < 2) = 0{,}9772$.

<details><summary>Voir le corrigé</summary>

**1)** $P(X = 2) = C_{10}^2 \times 0{,}2^2 \times 0{,}8^8 = 45 \times 0{,}04 \times 0{,}1678 \approx 0{,}302$ ; $E = 10 \times 0{,}2 = 2$ ; $V = 10 \times 0{,}2 \times 0{,}8 = 1{,}6$.

**2)** $P(X < 490) = P(T < -1) = 1 - 0{,}8413 = 0{,}1587$.

$P(480 < X < 520) = P(-2 < T < 2) = 2 \times 0{,}9772 - 1 = 0{,}9544$.

</details>
`,
    qcm: [
      { q: "L'espérance d'une loi binomiale B(n, p) est :", choix: ["np(1 − p)", "np", "n/p", "p"], bonne: 1, explication: "Nombre moyen de succès." },
      { q: "Pour une loi de Poisson de paramètre 4, la variance vaut :", choix: ["2", "4", "16", "0,25"], bonne: 1, explication: "E = V = λ." },
      { q: "Si X suit N(100 ; 20), la variable centrée réduite de x = 140 vaut :", choix: ["2", "40", "0,5", "7"], bonne: 0, explication: "(140 − 100) / 20 = 2." },
      { q: "Pour une loi normale, environ 95 % des valeurs sont comprises dans :", choix: ["μ ± σ", "μ ± 2σ", "μ ± 3σ", "μ ± 0,5σ"], bonne: 1, explication: "Plus précisément μ ± 1,96σ." },
      { q: "V(3X + 2) est égal à :", choix: ["3V(X) + 2", "9V(X)", "9V(X) + 2", "3V(X)"], bonne: 1, explication: "V(aX + b) = a²V(X)." },
    ],
  },

  8: {
    titre: "Échantillonnage et estimation",
    resume: md`
## L'essentiel — Échantillonnage et estimation

- $E(\bar{X}) = \mu$ ; **erreur-type** $\sigma_{\bar{X}} = \dfrac{\sigma}{\sqrt{n}}$ : quadrupler $n$ divise l'erreur par 2.
- **Théorème central limite** : pour $n \geq 30$, $\bar{X}$ suit approximativement une loi normale.
- Estimateurs sans biais : $\bar{x}$ pour $\mu$, $f$ pour $p$, $s^2 = \dfrac{n}{n - 1}\sigma_e^2$ pour $\sigma^2$.
- IC d'une moyenne : $\bar{x} \pm t \dfrac{s}{\sqrt{n}}$ ; IC d'une proportion : $f \pm t\sqrt{\dfrac{f(1 - f)}{n}}$ ; $t = 1{,}96$ (95 %) ou 2,58 (99 %).
- Taille d'échantillon pour une marge $e$ : $n = \left(\dfrac{t\,s}{e}\right)^2$ (moyenne) ou $n = \dfrac{t^2 f(1 - f)}{e^2}$ (proportion).
`,
    exercices: md`
### Exercice 2 — Intervalle de confiance et taille d'échantillon

1. Sur 100 clients, le panier moyen est de 250 DH, avec un écart-type estimé $s = 40$ DH. Donnez l'intervalle de confiance du panier moyen à 95 %.
2. Quelle taille d'échantillon faudrait-il pour une marge d'erreur de ±2 DH ?
3. Pour un sondage sur une proportion, sans information préalable ($f = 0{,}5$), combien de personnes interroger pour une marge de ±3 points à 95 % ?

<details><summary>Voir le corrigé</summary>

**1)** Erreur-type $= 40 / \sqrt{100} = 4$ ; $IC = [250 - 1{,}96 \times 4 \;;\; 250 + 1{,}96 \times 4] = [242{,}16 \;;\; 257{,}84]$ DH.

**2)** $n = \left(\dfrac{1{,}96 \times 40}{2}\right)^2 = 39{,}2^2 \approx 1\,536{,}6$, soit **1 537 clients**.

**3)** $n = \dfrac{1{,}96^2 \times 0{,}5 \times 0{,}5}{0{,}03^2} \approx 1\,067{,}1$, soit **1 068 personnes**.

</details>
`,
    qcm: [
      { q: "L'erreur-type de la moyenne est égale à :", choix: ["σ × n", "σ / √n", "σ / n", "√σ / n"], bonne: 1, explication: "Elle diminue quand l'échantillon grandit." },
      { q: "Pour diviser par 2 la marge d'erreur, il faut multiplier la taille de l'échantillon par :", choix: ["2", "4", "√2", "8"], bonne: 1, explication: "La précision évolue comme √n." },
      { q: "Au seuil de confiance de 95 %, on utilise t =", choix: ["1,64", "1,96", "2,58", "3"], bonne: 1, explication: "2,58 correspond à 99 %." },
      { q: "L'estimateur sans biais de la variance divise la somme des carrés des écarts par :", choix: ["n", "n − 1", "n + 1", "√n"], bonne: 1, explication: "C'est la correction de biais." },
      { q: "Le théorème central limite s'applique en pratique dès que :", choix: ["n ≥ 5", "n ≥ 30", "n ≥ 1 000", "La population est normale"], bonne: 1, explication: "Quelle que soit la loi de la population." },
    ],
  },
};
