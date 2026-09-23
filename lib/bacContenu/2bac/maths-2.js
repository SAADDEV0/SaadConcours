// Mathématiques — 2ème Bac Sciences Économiques et SGC (semestre 2).
const md = String.raw;

export default {
  "fonctions-exponentielles": {
    cours: md`
## I. La fonction exponentielle népérienne

### 1. Définition

La fonction **exponentielle**, notée $x \mapsto e^x$ (ou $\exp$), est la **fonction réciproque** de $\ln$ :

$$y = e^x \iff x = \ln y \quad (y > 0)$$

- Définie sur $\mathbb{R}$, **strictement positive** : $e^x > 0$ ;
- $e^0 = 1$ ; $e^1 = e \approx 2{,}718$ ;
- $\ln(e^x) = x$ pour tout $x \in \mathbb{R}$ ; $e^{\ln x} = x$ pour tout $x > 0$.

### 2. Propriétés algébriques

$$e^{a+b} = e^a e^b \qquad e^{a-b} = \frac{e^a}{e^b} \qquad e^{-a} = \frac{1}{e^a} \qquad (e^a)^n = e^{na}$$

### 3. Équations et inéquations

$$e^a = e^b \iff a = b \qquad e^a < e^b \iff a < b \qquad e^x = k \iff x = \ln k \ (k > 0)$$

L'équation $e^x = k$ n'a **pas de solution** si $k \leq 0$.

## II. Étude de la fonction exp

- $(e^x)' = e^x$ ; donc $\exp$ est **strictement croissante** sur $\mathbb{R}$ ;
- **Limites** :

$$\lim_{x \to -\infty} e^x = 0 \qquad \lim_{x \to +\infty} e^x = +\infty$$

- La droite $y = 0$ est **asymptote horizontale** en $-\infty$ ; branche parabolique de direction l'axe des ordonnées en $+\infty$.

### Limites importantes

$$\lim_{x \to +\infty} \frac{e^x}{x} = +\infty \qquad \lim_{x \to -\infty} x e^x = 0 \qquad \lim_{x \to 0} \frac{e^x - 1}{x} = 1$$

Plus généralement : $\lim_{x \to +\infty} \frac{e^x}{x^n} = +\infty$ et $\lim_{x \to -\infty} x^n e^x = 0$.

## III. Dérivée de $e^{u}$

Si $u$ est dérivable sur $I$ :

$$\left(e^{u}\right)' = u' e^{u}$$

**Exemples** : $(e^{3x})' = 3e^{3x}$ ; $(e^{-x^2})' = -2x e^{-x^2}$.

## IV. La fonction $x \mapsto a^x$

Pour $a > 0$ : $a^x = e^{x \ln a}$, de dérivée $(\ln a) \, a^x$.
`,
    exercices: md`
### Exercice 1 — Équations

Résolvez dans $\mathbb{R}$ :

1. $e^{2x - 1} = e^{x + 3}$
2. $e^{2x} - 3e^x + 2 = 0$ (poser $X = e^x$)
3. $e^x > 5$

<details><summary>Voir le corrigé</summary>

1. $2x - 1 = x + 3 \iff x = 4$ : $S = \{4\}$.
2. $X^2 - 3X + 2 = 0 \iff (X - 1)(X - 2) = 0 \iff X = 1$ ou $X = 2$. Donc $e^x = 1 \iff x = 0$ et $e^x = 2 \iff x = \ln 2$ : $S = \{0 ; \ln 2\}$.
3. $x > \ln 5$ : $S = ]\ln 5 ; +\infty[$.

</details>

### Exercice 2 — Étude de fonction (type examen)

Soit $f(x) = (x - 1)e^x$ sur $\mathbb{R}$.

1. Calculez $\lim_{x \to -\infty} f(x)$ et $\lim_{x \to +\infty} f(x)$.
2. Calculez $f'(x)$ et dressez le tableau de variations.
3. Donnez l'équation de la tangente au point d'abscisse 1.

<details><summary>Voir le corrigé</summary>

1. En $-\infty$ : $f(x) = xe^x - e^x$ ; $\lim xe^x = 0$ et $\lim e^x = 0$, donc $\lim f(x) = 0$ (asymptote horizontale $y = 0$).
   En $+\infty$ : $(x - 1) \to +\infty$ et $e^x \to +\infty$, donc $\lim f(x) = +\infty$.
2. $f'(x) = 1 \times e^x + (x - 1)e^x = x e^x$ ; du signe de $x$ (car $e^x > 0$) : décroissante sur $]-\infty ; 0]$, croissante sur $[0 ; +\infty[$. Minimum : $f(0) = -1$.
3. $f(1) = 0$ et $f'(1) = e$ : $y = e(x - 1)$.

</details>

### Exercice 3 — Dérivées

Dérivez : 1) $g(x) = e^{x^2 + 1}$ ; 2) $h(x) = \frac{e^x}{x}$ sur $]0 ; +\infty[$.

<details><summary>Voir le corrigé</summary>

1. $g'(x) = 2x e^{x^2 + 1}$.
2. $h'(x) = \frac{e^x \times x - e^x \times 1}{x^2} = \frac{(x - 1)e^x}{x^2}$.

</details>
`,
    resume: md`
## L'essentiel — Exponentielle

- $e^x > 0$ ; $e^0 = 1$ ; $\ln(e^x) = x$ ; $e^{\ln x} = x$ ($x > 0$).
- $e^{a+b} = e^a e^b$ ; $e^{-a} = \frac{1}{e^a}$ ; $(e^a)^n = e^{na}$.
- $e^x = k \iff x = \ln k$ ($k > 0$) ; pas de solution si $k \leq 0$.
- $(e^x)' = e^x$ ; strictement croissante.
- $\lim_{-\infty} e^x = 0$ ; $\lim_{+\infty} e^x = +\infty$ ; $\lim_{+\infty} \frac{e^x}{x} = +\infty$ ; $\lim_{-\infty} xe^x = 0$ ; $\lim_0 \frac{e^x - 1}{x} = 1$.
- $(e^u)' = u'e^u$.
`,
    qcm: [
      { q: "e^a × e^b est égal à :", choix: ["e^(ab)", "e^(a+b)", "e^(a−b)", "(e^a)^b"], bonne: 1, explication: "Propriété fondamentale de l'exponentielle." },
      { q: "L'équation e^x = −2 :", choix: ["A pour solution ln 2", "N'a pas de solution", "A pour solution −ln 2", "A deux solutions"], bonne: 1, explication: "e^x est toujours strictement positif." },
      { q: "La dérivée de e^(5x) est :", choix: ["e^(5x)", "5e^(5x)", "5x e^(5x)", "e^5"], bonne: 1, explication: "(e^u)' = u' e^u." },
      { q: "lim (x→−∞) e^x vaut :", choix: ["−∞", "0", "1", "+∞"], bonne: 1, explication: "Asymptote horizontale y = 0." },
      { q: "ln(e^(2x)) vaut :", choix: ["2x", "e^(2x)", "2", "x²"], bonne: 0, explication: "ln et exp sont réciproques." },
    ],
  },

  "fonctions-primitives": {
    cours: md`
## I. Définition

Soit $f$ une fonction définie sur un intervalle $I$. Une fonction $F$ est une **primitive** de $f$ sur $I$ si $F$ est dérivable sur $I$ et :

$$F'(x) = f(x) \quad \text{pour tout } x \in I$$

**Propriétés** :

- Toute fonction **continue** sur $I$ admet des primitives sur $I$ ;
- Si $F$ est une primitive de $f$, les primitives de $f$ sont les fonctions $x \mapsto F(x) + C$, avec $C \in \mathbb{R}$ ;
- Il existe une **unique** primitive $F$ qui vérifie une condition $F(x_0) = y_0$.

## II. Primitives des fonctions usuelles

| $f(x)$ | Une primitive $F(x)$ | Intervalle |
|---|---|---|
| $k$ | $kx$ | $\mathbb{R}$ |
| $x^n$ ($n \neq -1$) | $\frac{x^{n+1}}{n+1}$ | $\mathbb{R}$ (ou $]0;+\infty[$ si $n < 0$) |
| $\frac{1}{x}$ | $\ln x$ | $]0 ; +\infty[$ |
| $\frac{1}{x^2}$ | $-\frac{1}{x}$ | $]0 ; +\infty[$ ou $]-\infty ; 0[$ |
| $\frac{1}{\sqrt{x}}$ | $2\sqrt{x}$ | $]0 ; +\infty[$ |
| $e^x$ | $e^x$ | $\mathbb{R}$ |

## III. Primitives et opérations (formes composées)

| Forme de $f$ | Une primitive | Condition |
|---|---|---|
| $u' u^n$ ($n \neq -1$) | $\frac{u^{n+1}}{n+1}$ | |
| $\frac{u'}{u}$ | $\ln|u|$ | $u$ ne s'annule pas |
| $\frac{u'}{u^2}$ | $-\frac{1}{u}$ | $u$ ne s'annule pas |
| $\frac{u'}{\sqrt{u}}$ | $2\sqrt{u}$ | $u > 0$ |
| $u' e^{u}$ | $e^{u}$ | |

**Linéarité** : une primitive de $af + bg$ est $aF + bG$.

**Méthode** : reconnaître la forme, puis ajuster la constante multiplicative.

**Exemple** : $f(x) = x(x^2 + 1)^3$. On reconnaît $\frac{1}{2} \times 2x (x^2 + 1)^3 = \frac{1}{2} u' u^3$ avec $u = x^2 + 1$, donc $F(x) = \frac{1}{2} \times \frac{(x^2 + 1)^4}{4} = \frac{(x^2 + 1)^4}{8}$.
`,
    exercices: md`
### Exercice 1 — Primitives usuelles

Déterminez une primitive de : 1) $f(x) = 3x^2 - 4x + 5$ ; 2) $g(x) = \frac{2}{x} + e^x$ sur $]0 ; +\infty[$ ; 3) $h(x) = \frac{1}{x^2} - \sqrt{x}$ sur $]0 ; +\infty[$ (on écrira $\sqrt{x} = x^{1/2}$).

<details><summary>Voir le corrigé</summary>

1. $F(x) = x^3 - 2x^2 + 5x$.
2. $G(x) = 2\ln x + e^x$.
3. $H(x) = -\frac{1}{x} - \frac{x^{3/2}}{3/2} = -\frac{1}{x} - \frac{2}{3}x\sqrt{x}$.

</details>

### Exercice 2 — Formes composées

Déterminez une primitive de : 1) $f(x) = \frac{2x}{x^2 + 1}$ ; 2) $g(x) = 3e^{3x - 2}$ ; 3) $h(x) = (2x + 1)^4$ ; 4) $k(x) = x e^{x^2}$.

<details><summary>Voir le corrigé</summary>

1. Forme $\frac{u'}{u}$ avec $u = x^2 + 1 > 0$ : $F(x) = \ln(x^2 + 1)$.
2. Forme $u'e^u$ : $G(x) = e^{3x - 2}$.
3. $h(x) = \frac{1}{2} \times 2(2x + 1)^4$ : $H(x) = \frac{1}{2} \times \frac{(2x + 1)^5}{5} = \frac{(2x + 1)^5}{10}$.
4. $k(x) = \frac{1}{2} \times 2x e^{x^2}$ : $K(x) = \frac{1}{2} e^{x^2}$.

</details>

### Exercice 3 — Condition initiale

Déterminez la primitive $F$ de $f(x) = 2x + 1$ qui vérifie $F(1) = 5$.

<details><summary>Voir le corrigé</summary>

$F(x) = x^2 + x + C$ ; $F(1) = 2 + C = 5$, donc $C = 3$ : $F(x) = x^2 + x + 3$.

</details>
`,
    resume: md`
## L'essentiel — Primitives

- $F$ primitive de $f$ : $F' = f$ ; les primitives sont $F + C$.
- **Usuelles** : $x^n \to \frac{x^{n+1}}{n+1}$ ; $\frac{1}{x} \to \ln x$ ; $\frac{1}{x^2} \to -\frac{1}{x}$ ; $\frac{1}{\sqrt{x}} \to 2\sqrt{x}$ ; $e^x \to e^x$.
- **Composées** : $u'u^n \to \frac{u^{n+1}}{n+1}$ ; $\frac{u'}{u} \to \ln|u|$ ; $\frac{u'}{u^2} \to -\frac{1}{u}$ ; $\frac{u'}{\sqrt{u}} \to 2\sqrt{u}$ ; $u'e^u \to e^u$.
- Ajuster la constante multiplicative ; condition initiale → valeur de $C$.
`,
    qcm: [
      { q: "Une primitive de x³ est :", choix: ["3x²", "x⁴/4", "x⁴", "4x⁴"], bonne: 1, explication: "xⁿ⁺¹/(n+1)." },
      { q: "Une primitive de 1/x sur ]0 ; +∞[ est :", choix: ["−1/x²", "ln x", "e^x", "x"], bonne: 1, explication: "(ln x)' = 1/x." },
      { q: "Une primitive de 2x e^(x²) est :", choix: ["e^(x²)", "x² e^(x²)", "2e^(x²)", "e^(2x)"], bonne: 0, explication: "Forme u'e^u avec u = x²." },
      { q: "Deux primitives d'une même fonction diffèrent :", choix: ["D'un facteur", "D'une constante", "D'une fonction affine", "De rien"], bonne: 1, explication: "F + C." },
      { q: "Une primitive de 3/(3x + 1) sur ]−1/3 ; +∞[ est :", choix: ["ln(3x + 1)", "3 ln(3x + 1)", "1/(3x + 1)²", "3x + 1"], bonne: 0, explication: "Forme u'/u." },
    ],
  },

  "calcul-integral": {
    cours: md`
## I. Définition

Soit $f$ continue sur un intervalle $I$, $F$ une primitive de $f$, et $a, b \in I$. L'**intégrale** de $a$ à $b$ de $f$ est :

$$\int_a^b f(x)\,dx = \Big[F(x)\Big]_a^b = F(b) - F(a)$$

Le résultat ne dépend pas de la primitive choisie.

## II. Propriétés

| Propriété | Formule |
|---|---|
| Bornes égales | $\int_a^a f(x)\,dx = 0$ |
| Inversion des bornes | $\int_b^a f(x)\,dx = -\int_a^b f(x)\,dx$ |
| **Relation de Chasles** | $\int_a^c f + \int_c^b f = \int_a^b f$ |
| **Linéarité** | $\int_a^b (\alpha f + \beta g) = \alpha \int_a^b f + \beta \int_a^b g$ |
| **Positivité** | Si $a \leq b$ et $f \geq 0$ sur $[a;b]$, alors $\int_a^b f \geq 0$ |
| **Ordre** | Si $a \leq b$ et $f \leq g$ sur $[a;b]$, alors $\int_a^b f \leq \int_a^b g$ |

## III. Valeur moyenne

La **valeur moyenne** de $f$ sur $[a ; b]$ ($a < b$) est :

$$\mu = \frac{1}{b - a} \int_a^b f(x)\,dx$$

## IV. Intégrale et aire

Dans un repère orthogonal, l'unité d'aire (u.a.) est l'aire du rectangle construit sur les unités des axes.

- Si $f \geq 0$ sur $[a ; b]$ : l'**aire** du domaine limité par $(C_f)$, l'axe des abscisses et les droites $x = a$, $x = b$ est $\int_a^b f(x)\,dx$ u.a. ;
- Si $f \leq 0$ : l'aire est $-\int_a^b f(x)\,dx$ ;
- Aire entre deux courbes ($f \geq g$ sur $[a ; b]$) : $\int_a^b (f(x) - g(x))\,dx$.

**Aire en cm²** : aire en u.a. × (unité de l'axe des abscisses en cm) × (unité de l'axe des ordonnées en cm).

## V. L'intégration par parties

Si $u$ et $v$ sont dérivables à dérivées continues sur $[a ; b]$ :

$$\int_a^b u'(x) v(x)\,dx = \Big[u(x) v(x)\Big]_a^b - \int_a^b u(x) v'(x)\,dx$$

On l'utilise pour des produits comme $x e^x$ ou $x \ln x$, en choisissant $v$ de façon que $v'$ soit plus simple.
`,
    exercices: md`
### Exercice 1 — Calculs directs

Calculez : 1) $I = \int_0^2 (3x^2 - 2x + 1)\,dx$ ; 2) $J = \int_1^e \frac{1}{x}\,dx$ ; 3) $K = \int_0^1 e^{2x}\,dx$.

<details><summary>Voir le corrigé</summary>

1. $I = \Big[x^3 - x^2 + x\Big]_0^2 = (8 - 4 + 2) - 0 = 6$.
2. $J = \Big[\ln x\Big]_1^e = \ln e - \ln 1 = 1$.
3. $K = \Big[\frac{1}{2}e^{2x}\Big]_0^1 = \frac{1}{2}(e^2 - 1)$.

</details>

### Exercice 2 — Intégration par parties

Calculez $L = \int_0^1 x e^x\,dx$.

<details><summary>Voir le corrigé</summary>

On pose $u'(x) = e^x$, $u(x) = e^x$ et $v(x) = x$, $v'(x) = 1$ :

$$L = \Big[x e^x\Big]_0^1 - \int_0^1 e^x\,dx = (e - 0) - \Big[e^x\Big]_0^1 = e - (e - 1) = 1$$

</details>

### Exercice 3 — Aire

Calculez l'aire du domaine limité par la courbe de $f(x) = x^2$, l'axe des abscisses et les droites $x = 1$ et $x = 3$ (unité : 2 cm sur chaque axe).

<details><summary>Voir le corrigé</summary>

$f \geq 0$ sur $[1 ; 3]$ : $A = \int_1^3 x^2\,dx = \Big[\frac{x^3}{3}\Big]_1^3 = 9 - \frac{1}{3} = \frac{26}{3}$ u.a.
Une u.a. $= 2 \times 2 = 4$ cm², donc $A = \frac{104}{3} \approx 34{,}67$ cm².

</details>
`,
    resume: md`
## L'essentiel — Calcul intégral

- $\int_a^b f(x)\,dx = F(b) - F(a)$.
- **Chasles** : $\int_a^c f + \int_c^b f = \int_a^b f$ ; **linéarité** ; positivité ; ordre.
- **Valeur moyenne** : $\mu = \frac{1}{b-a}\int_a^b f$.
- **Aire** : $\int_a^b f$ si $f \geq 0$ ; $-\int_a^b f$ si $f \leq 0$ ; entre deux courbes : $\int_a^b (f - g)$.
- **Par parties** : $\int_a^b u'v = [uv]_a^b - \int_a^b uv'$.
- Aire en cm² = u.a. × unités des axes.
`,
    qcm: [
      { q: "∫₀¹ 2x dx vaut :", choix: ["0", "1", "2", "1/2"], bonne: 1, explication: "[x²]₀¹ = 1." },
      { q: "∫ₐᵃ f(x) dx vaut :", choix: ["f(a)", "0", "1", "F(a)"], bonne: 1, explication: "Bornes égales." },
      { q: "La relation de Chasles s'écrit :", choix: ["∫ₐᶜ f + ∫ᶜᵇ f = ∫ₐᵇ f", "∫ₐᵇ f × g = ∫ f × ∫ g", "∫ₐᵇ f = f(b) − f(a)", "∫ₐᵇ f = −∫ₐᵇ f"], bonne: 0, explication: "Additivité par rapport à l'intervalle." },
      { q: "La valeur moyenne de f sur [a ; b] est :", choix: ["∫ₐᵇ f", "(1/(b − a)) ∫ₐᵇ f", "(f(a) + f(b))/2", "f((a + b)/2)"], bonne: 1, explication: "Définition de la valeur moyenne." },
      { q: "∫₁ᵉ (1/x) dx vaut :", choix: ["0", "1", "e", "e − 1"], bonne: 1, explication: "ln e − ln 1 = 1." },
    ],
  },

  "denombrement": {
    cours: md`
## I. Ensembles finis et cardinal

Le **cardinal** d'un ensemble fini $E$, noté $\text{card}(E)$, est le nombre de ses éléments.

- $\text{card}(A \cup B) = \text{card}(A) + \text{card}(B) - \text{card}(A \cap B)$ ;
- Complémentaire : $\text{card}(\overline{A}) = \text{card}(E) - \text{card}(A)$.

## II. Le principe multiplicatif (principe fondamental)

Si une expérience se déroule en $p$ étapes, avec $n_1$ possibilités pour la 1ʳᵉ, $n_2$ pour la 2ᵉ, …, $n_p$ pour la $p$-ième, le nombre total de possibilités est :

$$n_1 \times n_2 \times \dots \times n_p$$

## III. Les outils de dénombrement

### 1. Factorielle

$$n! = n \times (n-1) \times \dots \times 2 \times 1 \qquad 0! = 1$$

### 2. Arrangements (l'ordre compte, sans répétition)

Nombre de façons de choisir **et ordonner** $p$ éléments parmi $n$ ($p \leq n$) :

$$A_n^p = \frac{n!}{(n - p)!} = n(n-1)\cdots(n-p+1)$$

### 3. Permutations

Un **arrangement** des $n$ éléments : $A_n^n = n!$.

### 4. Combinaisons (l'ordre ne compte pas)

Nombre de façons de choisir $p$ éléments parmi $n$ **sans tenir compte de l'ordre** :

$$C_n^p = \frac{n!}{p!(n - p)!} = \frac{A_n^p}{p!}$$

**Propriétés** : $C_n^0 = C_n^n = 1$ ; $C_n^1 = n$ ; $C_n^p = C_n^{n-p}$ ; $C_n^p + C_n^{p+1} = C_{n+1}^{p+1}$.

### 5. p-listes (l'ordre compte, avec répétition)

Nombre de suites de $p$ éléments d'un ensemble à $n$ éléments, répétitions permises : $n^p$.

## IV. Les tirages

| Type de tirage | Ordre | Répétition | Nombre de résultats |
|---|---|---|---|
| **Successif avec remise** | Oui | Oui | $n^p$ |
| **Successif sans remise** | Oui | Non | $A_n^p$ |
| **Simultané** | Non | Non | $C_n^p$ |

**Méthode** : se demander si l'**ordre** compte et si les **répétitions** sont possibles.
`,
    exercices: md`
### Exercice 1 — Calculs

Calculez : $5!$ ; $A_6^3$ ; $C_8^3$ ; $C_{10}^{8}$.

<details><summary>Voir le corrigé</summary>

$5! = 120$ ; $A_6^3 = 6 \times 5 \times 4 = 120$ ; $C_8^3 = \frac{8 \times 7 \times 6}{3!} = 56$ ; $C_{10}^8 = C_{10}^2 = \frac{10 \times 9}{2} = 45$.

</details>

### Exercice 2 — Tirages dans une urne

Une urne contient 5 boules rouges et 3 boules vertes. On tire 3 boules.

Pour chaque mode de tirage (simultané, successif sans remise, successif avec remise), calculez le nombre total de tirages et le nombre de tirages contenant exactement 2 boules rouges.

<details><summary>Voir le corrigé</summary>

**Simultané** : total $C_8^3 = 56$ ; exactement 2 rouges : $C_5^2 \times C_3^1 = 10 \times 3 = 30$.

**Successif sans remise** : total $A_8^3 = 336$ ; exactement 2 rouges : $A_5^2 \times A_3^1 \times 3 = 20 \times 3 \times 3 = 180$ (3 positions possibles pour la verte).

**Successif avec remise** : total $8^3 = 512$ ; exactement 2 rouges : $5^2 \times 3 \times 3 = 225$.

</details>

### Exercice 3 — Comité

Dans une classe de 20 élèves (12 filles, 8 garçons), on forme un comité de 4 élèves. Combien de comités comprennent au moins un garçon ?

<details><summary>Voir le corrigé</summary>

Total : $C_{20}^4 = 4\,845$. Comités sans garçon (4 filles) : $C_{12}^4 = 495$. Au moins un garçon : $4\,845 - 495 = 4\,350$.

</details>
`,
    resume: md`
## L'essentiel — Dénombrement

- **Principe multiplicatif** : $n_1 \times n_2 \times \dots$
- $n! = n(n-1)\cdots 1$ ; $0! = 1$.
- **Arrangements** (ordre, sans répétition) : $A_n^p = \frac{n!}{(n-p)!}$.
- **Combinaisons** (sans ordre) : $C_n^p = \frac{n!}{p!(n-p)!}$ ; $C_n^p = C_n^{n-p}$.
- **p-listes** (ordre, avec répétition) : $n^p$.
- Tirages : avec remise → $n^p$ ; sans remise → $A_n^p$ ; simultané → $C_n^p$.
- « Au moins un » → passer par le **complémentaire**.
`,
    qcm: [
      { q: "4! vaut :", choix: ["4", "16", "24", "10"], bonne: 2, explication: "4 × 3 × 2 × 1 = 24." },
      { q: "C₅² vaut :", choix: ["10", "20", "25", "5"], bonne: 0, explication: "(5 × 4)/2 = 10." },
      { q: "Un tirage simultané se dénombre avec :", choix: ["Les arrangements", "Les combinaisons", "Les p-listes", "Les factorielles seules"], bonne: 1, explication: "L'ordre ne compte pas." },
      { q: "Le nombre de codes de 4 chiffres (0 à 9, répétitions permises) est :", choix: ["10 000", "5 040", "210", "40"], bonne: 0, explication: "10⁴ = 10 000." },
      { q: "A₇² vaut :", choix: ["14", "21", "42", "49"], bonne: 2, explication: "7 × 6 = 42." },
    ],
  },

  "probabilites": {
    cours: md`
## I. Vocabulaire

| Terme | Définition |
|---|---|
| **Expérience aléatoire** | Expérience dont on connaît les résultats possibles mais pas celui qui se produira |
| **Univers** $\Omega$ | Ensemble de tous les résultats possibles (**éventualités**) |
| **Événement** | Partie de $\Omega$ |
| **Événement élémentaire** | Événement formé d'un seul résultat |
| **Événement impossible** / **certain** | $\emptyset$ / $\Omega$ |
| **Événement contraire** $\overline{A}$ | Se réalise quand $A$ ne se réalise pas |
| **Incompatibles** | $A \cap B = \emptyset$ |

## II. Probabilité

- $0 \leq p(A) \leq 1$ ; $p(\Omega) = 1$ ; $p(\emptyset) = 0$ ;
- $p(\overline{A}) = 1 - p(A)$ ;
- $p(A \cup B) = p(A) + p(B) - p(A \cap B)$.

**Équiprobabilité** : si tous les résultats ont la même probabilité,

$$p(A) = \frac{\text{card}(A)}{\text{card}(\Omega)} = \frac{\text{nombre de cas favorables}}{\text{nombre de cas possibles}}$$

## III. Probabilité conditionnelle et indépendance

**Probabilité de $A$ sachant $B$** ($p(B) \neq 0$), notée $p(A/B)$ ou $p_B(A)$ :

$$p(A/B) = \frac{p(A \cap B)}{p(B)} \qquad \text{donc} \qquad p(A \cap B) = p(B) \times p(A/B)$$

**Formule des probabilités totales** : si $B_1, \dots, B_n$ forment une partition de $\Omega$ :

$$p(A) = p(B_1) \, p(A/B_1) + \dots + p(B_n) \, p(A/B_n)$$

Un **arbre pondéré** permet de représenter ces situations.

**Indépendance** : $A$ et $B$ sont indépendants si $p(A \cap B) = p(A) \times p(B)$.

## IV. Variable aléatoire

Une **variable aléatoire** $X$ associe un nombre réel à chaque résultat de l'expérience.

- **Loi de probabilité** : tableau des valeurs $x_i$ et des probabilités $p(X = x_i)$, avec $\sum p_i = 1$ ;
- **Espérance** : $E(X) = \sum x_i \, p(X = x_i)$ (valeur moyenne) ;
- **Variance** : $V(X) = E(X^2) - [E(X)]^2 = \sum x_i^2 p_i - [E(X)]^2$ ;
- **Écart-type** : $\sigma(X) = \sqrt{V(X)}$.

## V. La loi binomiale

On répète $n$ fois, de façon **indépendante**, une épreuve à deux issues : **succès** (probabilité $p$) et **échec** ($1 - p$). $X$ = nombre de succès suit la **loi binomiale** $\mathcal{B}(n ; p)$ :

$$p(X = k) = C_n^k \, p^k \, (1 - p)^{n-k} \qquad k = 0, 1, \dots, n$$

$$E(X) = np \qquad V(X) = np(1 - p)$$
`,
    exercices: md`
### Exercice 1 — Tirage simultané (type examen)

Une urne contient 4 boules blanches et 6 boules noires. On tire simultanément 3 boules.

1. Calculez la probabilité des événements : $A$ « obtenir 3 boules noires » ; $B$ « obtenir exactement 2 blanches » ; $C$ « obtenir au moins une blanche ».
2. Soit $X$ le nombre de boules blanches tirées. Donnez la loi de $X$ et calculez $E(X)$.

<details><summary>Voir le corrigé</summary>

$\text{card}(\Omega) = C_{10}^3 = 120$.

1. $p(A) = \frac{C_6^3}{120} = \frac{20}{120} = \frac{1}{6}$ ; $p(B) = \frac{C_4^2 \times C_6^1}{120} = \frac{36}{120} = \frac{3}{10}$ ; $p(C) = 1 - p(A) = \frac{5}{6}$.
2. Loi de $X$ :

| $x_i$ | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| $p(X = x_i)$ | $\frac{20}{120}$ | $\frac{60}{120}$ | $\frac{36}{120}$ | $\frac{4}{120}$ |

($C_4^1 C_6^2 = 4 \times 15 = 60$ ; $C_4^3 = 4$ ; total $= 120$.)

$E(X) = \frac{0 \times 20 + 1 \times 60 + 2 \times 36 + 3 \times 4}{120} = \frac{144}{120} = 1{,}2$.

</details>

### Exercice 2 — Probabilités conditionnelles

Dans une entreprise, 60 % des salariés sont des hommes. 30 % des hommes et 50 % des femmes suivent une formation. On choisit un salarié au hasard.

1. Calculez la probabilité qu'il suive une formation.
2. Sachant qu'il suit une formation, quelle est la probabilité que ce soit une femme ?

<details><summary>Voir le corrigé</summary>

Notons $H$ « homme », $F$ « femme », $T$ « suit une formation ».

1. $p(T) = p(H) \, p(T/H) + p(F) \, p(T/F) = 0{,}6 \times 0{,}3 + 0{,}4 \times 0{,}5 = 0{,}18 + 0{,}2 = 0{,}38$.
2. $p(F/T) = \frac{p(F \cap T)}{p(T)} = \frac{0{,}2}{0{,}38} = \frac{10}{19} \approx 0{,}526$.

</details>

### Exercice 3 — Loi binomiale

Un QCM comporte 5 questions indépendantes à 4 propositions dont une seule est juste. Un élève répond au hasard. $X$ est le nombre de bonnes réponses.

1. Quelle est la loi de $X$ ?
2. Calculez $p(X = 2)$ et $p(X \geq 1)$.
3. Calculez $E(X)$.

<details><summary>Voir le corrigé</summary>

1. $X$ suit $\mathcal{B}(5 ; 0{,}25)$.
2. $p(X = 2) = C_5^2 (0{,}25)^2 (0{,}75)^3 = 10 \times 0{,}0625 \times 0{,}421875 \approx 0{,}264$.
   $p(X \geq 1) = 1 - p(X = 0) = 1 - 0{,}75^5 \approx 1 - 0{,}237 = 0{,}763$.
3. $E(X) = 5 \times 0{,}25 = 1{,}25$.

</details>
`,
    resume: md`
## L'essentiel — Probabilités

- $p(\overline{A}) = 1 - p(A)$ ; $p(A \cup B) = p(A) + p(B) - p(A \cap B)$.
- **Équiprobabilité** : $p(A) = \frac{\text{card}(A)}{\text{card}(\Omega)}$.
- **Conditionnelle** : $p(A/B) = \frac{p(A \cap B)}{p(B)}$ ; arbre pondéré ; **probabilités totales**.
- **Indépendance** : $p(A \cap B) = p(A)p(B)$.
- **Variable aléatoire** : loi ($\sum p_i = 1$) ; $E(X) = \sum x_i p_i$ ; $V(X) = E(X^2) - E(X)^2$ ; $\sigma = \sqrt{V}$.
- **Binomiale** $\mathcal{B}(n;p)$ : $p(X = k) = C_n^k p^k (1-p)^{n-k}$ ; $E = np$ ; $V = np(1-p)$.
`,
    qcm: [
      { q: "Si p(A) = 0,3, alors p(Ā) vaut :", choix: ["0,3", "0,7", "1,3", "0"], bonne: 1, explication: "1 − 0,3 = 0,7." },
      { q: "p(A/B) est égale à :", choix: ["p(A) × p(B)", "p(A ∩ B) / p(B)", "p(A) + p(B)", "p(B) / p(A)"], bonne: 1, explication: "Définition de la probabilité conditionnelle." },
      { q: "A et B sont indépendants si :", choix: ["A ∩ B = ∅", "p(A ∩ B) = p(A) × p(B)", "p(A) = p(B)", "p(A ∪ B) = 1"], bonne: 1, explication: "Définition de l'indépendance." },
      { q: "Pour X suivant B(10 ; 0,4), E(X) vaut :", choix: ["0,4", "2,4", "4", "6"], bonne: 2, explication: "E(X) = np = 10 × 0,4 = 4." },
      { q: "On lance un dé équilibré ; la probabilité d'obtenir un nombre pair est :", choix: ["1/6", "1/3", "1/2", "2/3"], bonne: 2, explication: "3 cas favorables sur 6." },
    ],
  },
};
