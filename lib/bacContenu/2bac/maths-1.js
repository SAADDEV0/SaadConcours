// Mathématiques — 2ème Bac Sciences Économiques et SGC (analyse, semestre 1).
const md = String.raw;

export default {
  "limites-et-continuite": {
    cours: md`
## I. Rappels sur les limites

### 1. Limites usuelles

Pour $n \in \mathbb{N}^*$ :

$$\lim_{x \to +\infty} x^n = +\infty \qquad \lim_{x \to +\infty} \frac{1}{x^n} = 0 \qquad \lim_{x \to +\infty} \sqrt{x} = +\infty \qquad \lim_{x \to 0^+} \frac{1}{x} = +\infty \qquad \lim_{x \to 0^-} \frac{1}{x} = -\infty$$

### 2. Polynômes et fonctions rationnelles en l'infini

- La limite d'un **polynôme** en $\pm\infty$ est celle de son **terme de plus haut degré**.
- La limite d'une **fonction rationnelle** en $\pm\infty$ est celle du **quotient des termes de plus haut degré**.

**Exemple** : $\lim_{x \to +\infty} \frac{3x^2 - x + 1}{2x^2 + 5} = \lim_{x \to +\infty} \frac{3x^2}{2x^2} = \frac{3}{2}$.

### 3. Formes indéterminées

$$+\infty - \infty \qquad 0 \times \infty \qquad \frac{\infty}{\infty} \qquad \frac{0}{0}$$

Pour les lever : factoriser, simplifier, utiliser l'expression conjuguée (avec les racines carrées), ou le terme de plus haut degré.

### 4. Opérations sur les limites

Somme, produit et quotient suivent des règles connues ; la limite d'une **composée** : si $\lim_{x \to a} u(x) = b$ et $\lim_{X \to b} f(X) = \ell$, alors $\lim_{x \to a} f(u(x)) = \ell$.

### 5. Limites et ordre

Si $f(x) \geq g(x)$ au voisinage de $+\infty$ et $\lim_{x \to +\infty} g(x) = +\infty$, alors $\lim_{x \to +\infty} f(x) = +\infty$.

**Théorème des gendarmes** : si $g(x) \leq f(x) \leq h(x)$ et si $g$ et $h$ ont la même limite $\ell$, alors $\lim f(x) = \ell$.

## II. La continuité

### 1. Définition

$f$ est **continue en $a$** si $f$ est définie en $a$ et $\lim_{x \to a} f(x) = f(a)$.

$f$ est **continue sur un intervalle $I$** si elle est continue en tout point de $I$ (sa courbe se trace « sans lever le crayon »).

**Continuité à droite et à gauche** : $f$ est continue en $a$ si et seulement si $\lim_{x \to a^+} f(x) = \lim_{x \to a^-} f(x) = f(a)$.

### 2. Fonctions continues usuelles

Les polynômes, les fonctions rationnelles (sur leur domaine), $\sqrt{x}$ sur $[0 ; +\infty[$, $|x|$, et les sommes, produits, quotients et composées de fonctions continues.

### 3. Le théorème des valeurs intermédiaires (TVI)

Si $f$ est **continue** sur $[a ; b]$, alors pour tout réel $k$ compris entre $f(a)$ et $f(b)$, l'équation $f(x) = k$ admet **au moins une** solution dans $[a ; b]$.

**Cas particulier** : si $f$ est continue sur $[a ; b]$ et $f(a) \times f(b) < 0$, alors l'équation $f(x) = 0$ admet au moins une solution dans $]a ; b[$.

Si de plus $f$ est **strictement monotone** sur $[a ; b]$, la solution est **unique**.

### 4. Image d'un intervalle

Si $f$ est continue et strictement croissante sur $[a ; b]$ : $f([a ; b]) = [f(a) ; f(b)]$.
Si elle est continue et strictement décroissante : $f([a ; b]) = [f(b) ; f(a)]$.

### 5. La méthode de dichotomie

Pour encadrer une solution $\alpha$ de $f(x) = 0$ : on coupe l'intervalle en deux, on garde la moitié où $f$ change de signe, et on recommence.
`,
    exercices: md`
### Exercice 1 — Calculs de limites

Calculez :

1. $\lim_{x \to +\infty} (-2x^3 + 5x^2 - 7)$
2. $\lim_{x \to -\infty} \frac{4x^2 + 1}{x - 3}$
3. $\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$
4. $\lim_{x \to +\infty} (\sqrt{x + 1} - \sqrt{x})$

<details><summary>Voir le corrigé</summary>

1. Terme de plus haut degré : $\lim_{x \to +\infty} -2x^3 = -\infty$.
2. $\lim_{x \to -\infty} \frac{4x^2}{x} = \lim_{x \to -\infty} 4x = -\infty$.
3. Forme $\frac{0}{0}$ : $\frac{x^2 - 4}{x - 2} = \frac{(x-2)(x+2)}{x - 2} = x + 2$ pour $x \neq 2$, donc la limite vaut $4$.
4. Forme $\infty - \infty$ : on multiplie par l'expression conjuguée :
   $\sqrt{x+1} - \sqrt{x} = \frac{(x+1) - x}{\sqrt{x+1} + \sqrt{x}} = \frac{1}{\sqrt{x+1} + \sqrt{x}}$, donc la limite vaut $0$.

</details>

### Exercice 2 — TVI

Soit $f(x) = x^3 + x - 1$.

1. Montrez que l'équation $f(x) = 0$ admet une unique solution $\alpha$ dans $[0 ; 1]$.
2. Vérifiez que $0{,}5 < \alpha < 0{,}75$.

<details><summary>Voir le corrigé</summary>

1. $f$ est un polynôme, donc **continue** sur $[0 ; 1]$ ; $f'(x) = 3x^2 + 1 > 0$, donc $f$ est **strictement croissante**. $f(0) = -1 < 0$ et $f(1) = 1 > 0$. D'après le TVI, l'équation $f(x) = 0$ admet une **unique** solution $\alpha \in ]0 ; 1[$.
2. $f(0{,}5) = 0{,}125 + 0{,}5 - 1 = -0{,}375 < 0$ et $f(0{,}75) = 0{,}421875 + 0{,}75 - 1 = 0{,}171875 > 0$, donc $0{,}5 < \alpha < 0{,}75$.

</details>

### Exercice 3 — Continuité en un point

Soit $f(x) = \frac{x^2 - 1}{x - 1}$ si $x \neq 1$ et $f(1) = m$. Déterminez $m$ pour que $f$ soit continue en 1.

<details><summary>Voir le corrigé</summary>

Pour $x \neq 1$, $f(x) = x + 1$, donc $\lim_{x \to 1} f(x) = 2$. $f$ est continue en 1 si et seulement si $f(1) = 2$, soit $m = 2$.

</details>
`,
    resume: md`
## L'essentiel — Limites et continuité

- En $\pm\infty$ : polynôme → terme de plus haut degré ; rationnelle → quotient des termes de plus haut degré.
- **Formes indéterminées** : $\infty - \infty$, $0 \times \infty$, $\frac{\infty}{\infty}$, $\frac{0}{0}$ → factoriser, conjuguée.
- **Gendarmes** et comparaison.
- **Continuité en $a$** : $\lim_{x \to a} f(x) = f(a)$.
- **TVI** : $f$ continue sur $[a;b]$ et $f(a) f(b) < 0$ → au moins une solution de $f(x) = 0$ ; unique si $f$ strictement monotone.
- Image : $f([a;b]) = [f(a);f(b)]$ si $f$ continue strictement croissante.
`,
    qcm: [
      { q: "lim (x→+∞) (5x² − 3x) / (2x² + 1) vaut :", choix: ["0", "5/2", "+∞", "−3"], bonne: 1, explication: "Quotient des termes de plus haut degré : 5x²/2x²." },
      { q: "Laquelle est une forme indéterminée ?", choix: ["+∞ + ∞", "0 × ∞", "1/+∞", "+∞ × 2"], bonne: 1, explication: "Il faut transformer l'expression pour conclure." },
      { q: "Si f est continue sur [a ; b] et f(a) × f(b) < 0, alors :", choix: ["f(x) = 0 n'a pas de solution", "f(x) = 0 a au moins une solution dans ]a ; b[", "f est croissante", "f(a) = f(b)"], bonne: 1, explication: "C'est le théorème des valeurs intermédiaires." },
      { q: "f est continue en a si :", choix: ["f(a) existe seulement", "lim (x→a) f(x) = f(a)", "f est dérivable en a", "f(a) = 0"], bonne: 1, explication: "Définition de la continuité." },
      { q: "lim (x→3) (x² − 9)/(x − 3) vaut :", choix: ["0", "3", "6", "9"], bonne: 2, explication: "On simplifie par (x − 3) : x + 3 → 6." },
    ],
  },

  "derivation-et-etude-des-fonctions": {
    cours: md`
## I. Le nombre dérivé

$f$ est **dérivable en $a$** si $\lim_{h \to 0} \frac{f(a + h) - f(a)}{h}$ existe et est finie. Cette limite est le **nombre dérivé** $f'(a)$.

**Tangente** à la courbe $(C_f)$ au point d'abscisse $a$ :

$$y = f'(a)(x - a) + f(a)$$

## II. Les dérivées usuelles

| $f(x)$ | $f'(x)$ |
|---|---|
| $k$ (constante) | $0$ |
| $x$ | $1$ |
| $x^n$ | $n x^{n-1}$ |
| $\frac{1}{x}$ | $-\frac{1}{x^2}$ |
| $\sqrt{x}$ | $\frac{1}{2\sqrt{x}}$ ($x > 0$) |

## III. Les opérations

| Fonction | Dérivée |
|---|---|
| $u + v$ | $u' + v'$ |
| $k u$ | $k u'$ |
| $u v$ | $u'v + uv'$ |
| $\frac{1}{v}$ | $-\frac{v'}{v^2}$ |
| $\frac{u}{v}$ | $\frac{u'v - uv'}{v^2}$ |
| $u^n$ | $n u' u^{n-1}$ |
| $\sqrt{u}$ | $\frac{u'}{2\sqrt{u}}$ |

## IV. Dérivée et variations

Sur un intervalle $I$ :

- $f'(x) > 0$ (sauf en des points isolés où elle s'annule) → $f$ **strictement croissante** ;
- $f'(x) < 0$ → $f$ **strictement décroissante** ;
- $f'(x) = 0$ → $f$ **constante**.

**Extremum** : si $f'$ s'annule en $a$ **en changeant de signe**, $f$ admet un **extremum** local en $a$ (maximum si $f'$ passe de $+$ à $-$, minimum sinon).

## V. Convexité et point d'inflexion

- $f''(x) \geq 0$ sur $I$ : $(C_f)$ est **convexe** (au-dessus de ses tangentes) ;
- $f''(x) \leq 0$ : $(C_f)$ est **concave** ;
- si $f''$ s'annule en changeant de signe en $a$, le point $A(a ; f(a))$ est un **point d'inflexion**.

## VI. Asymptotes et branches infinies

| Situation | Conclusion |
|---|---|
| $\lim_{x \to a} f(x) = \pm\infty$ | Asymptote **verticale** d'équation $x = a$ |
| $\lim_{x \to \pm\infty} f(x) = b$ | Asymptote **horizontale** d'équation $y = b$ |
| $\lim_{x \to \pm\infty} [f(x) - (ax + b)] = 0$ | Asymptote **oblique** d'équation $y = ax + b$ |

Si $\lim_{x \to \pm\infty} f(x) = \pm\infty$ sans asymptote connue, on étudie $\lim \frac{f(x)}{x}$ :

- $= \pm\infty$ : **branche parabolique** de direction l'axe des ordonnées ;
- $= 0$ : branche parabolique de direction l'axe des abscisses ;
- $= a \neq 0$ puis $\lim [f(x) - ax] = b$ : asymptote oblique $y = ax + b$ ; si cette limite est infinie : branche parabolique de direction $y = ax$.

**Position relative** courbe / asymptote : étudier le signe de $f(x) - (ax + b)$.

## VII. Plan d'étude d'une fonction

1. Domaine de définition ;
2. Limites aux bornes et asymptotes ;
3. Dérivée, signe, **tableau de variations** ;
4. Éventuellement $f''$, convexité, points d'inflexion ;
5. Points particuliers (intersections avec les axes), tangentes ;
6. **Représentation graphique**.
`,
    exercices: md`
### Exercice 1 — Dérivées

Calculez la dérivée de : 1) $f(x) = 2x^3 - 5x^2 + 4x - 1$ ; 2) $g(x) = \frac{2x + 1}{x - 3}$ ; 3) $h(x) = (x^2 + 1)^4$ ; 4) $k(x) = \sqrt{3x + 1}$.

<details><summary>Voir le corrigé</summary>

1. $f'(x) = 6x^2 - 10x + 4$.
2. $g'(x) = \frac{2(x - 3) - (2x + 1) \times 1}{(x - 3)^2} = \frac{-7}{(x - 3)^2}$.
3. $h'(x) = 4 \times 2x \times (x^2 + 1)^3 = 8x(x^2 + 1)^3$.
4. $k'(x) = \frac{3}{2\sqrt{3x + 1}}$.

</details>

### Exercice 2 — Étude complète

Soit $f(x) = x^3 - 3x + 1$ définie sur $\mathbb{R}$.

1. Calculez les limites en $\pm\infty$.
2. Étudiez les variations de $f$ et dressez son tableau de variations.
3. Donnez l'équation de la tangente au point d'abscisse 0.
4. Étudiez la convexité et déterminez le point d'inflexion.

<details><summary>Voir le corrigé</summary>

1. $\lim_{x \to +\infty} f(x) = +\infty$ ; $\lim_{x \to -\infty} f(x) = -\infty$ (terme $x^3$).
2. $f'(x) = 3x^2 - 3 = 3(x - 1)(x + 1)$ : positive sur $]-\infty ; -1]$ et $[1 ; +\infty[$, négative sur $[-1 ; 1]$.
   $f(-1) = -1 + 3 + 1 = 3$ (maximum local) ; $f(1) = 1 - 3 + 1 = -1$ (minimum local).

| $x$ | $-\infty$ | | $-1$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
| $f$ | $-\infty$ | ↗ | $3$ | ↘ | $-1$ | ↗ | $+\infty$ |

3. $f'(0) = -3$ et $f(0) = 1$ : $y = -3x + 1$.
4. $f''(x) = 6x$ : négative sur $]-\infty ; 0]$ (concave), positive sur $[0 ; +\infty[$ (convexe). Point d'inflexion : $I(0 ; 1)$.

</details>

### Exercice 3 — Asymptote oblique

Soit $g(x) = x + 2 + \frac{1}{x - 1}$ sur $]1 ; +\infty[$. Montrez que la droite $(D) : y = x + 2$ est asymptote à la courbe en $+\infty$ et étudiez leur position relative.

<details><summary>Voir le corrigé</summary>

$g(x) - (x + 2) = \frac{1}{x - 1} \to 0$ quand $x \to +\infty$ : $(D)$ est **asymptote oblique**. Sur $]1 ; +\infty[$, $\frac{1}{x - 1} > 0$ : la courbe est **au-dessus** de $(D)$.

</details>
`,
    resume: md`
## L'essentiel — Dérivation

- **Tangente** : $y = f'(a)(x - a) + f(a)$.
- **Dérivées** : $(x^n)' = nx^{n-1}$ ; $\left(\frac{1}{x}\right)' = -\frac{1}{x^2}$ ; $(\sqrt{x})' = \frac{1}{2\sqrt{x}}$.
- **Opérations** : $(uv)' = u'v + uv'$ ; $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$ ; $(u^n)' = nu'u^{n-1}$ ; $(\sqrt{u})' = \frac{u'}{2\sqrt{u}}$.
- $f' > 0$ → croissante ; $f' < 0$ → décroissante ; $f'$ s'annule en changeant de signe → extremum.
- $f'' \geq 0$ → convexe ; $f'' \leq 0$ → concave ; changement de signe → point d'inflexion.
- **Asymptotes** : verticale $x = a$ ; horizontale $y = b$ ; oblique $y = ax + b$ si $f(x) - (ax + b) \to 0$.
`,
    qcm: [
      { q: "La dérivée de f(x) = x⁴ est :", choix: ["4x", "x³", "4x³", "4x⁵"], bonne: 2, explication: "(xⁿ)' = n xⁿ⁻¹." },
      { q: "La dérivée de u/v est :", choix: ["u'/v'", "(u'v − uv')/v²", "(u'v + uv')/v²", "u'v − uv'"], bonne: 1, explication: "Formule de la dérivée d'un quotient." },
      { q: "Si f'(x) < 0 sur I, alors f est :", choix: ["Croissante sur I", "Décroissante sur I", "Constante", "Convexe"], bonne: 1, explication: "Le signe de la dérivée donne le sens de variation." },
      { q: "Si lim (x→+∞) f(x) = 3, la courbe admet :", choix: ["Une asymptote verticale x = 3", "Une asymptote horizontale y = 3", "Une asymptote oblique", "Un point d'inflexion"], bonne: 1, explication: "Limite finie en l'infini." },
      { q: "L'équation de la tangente en a = 1 à f(x) = x² est :", choix: ["y = 2x − 1", "y = 2x + 1", "y = x + 1", "y = 2x"], bonne: 0, explication: "f(1) = 1, f'(1) = 2 : y = 2(x − 1) + 1." },
    ],
  },

  "suites-numeriques": {
    cours: md`
## I. Généralités

Une **suite numérique** $(u_n)$ associe à chaque entier naturel $n$ un réel $u_n$.

- **Définition explicite** : $u_n = f(n)$ (ex. $u_n = 3n + 1$) ;
- **Définition par récurrence** : $u_0$ donné et $u_{n+1} = f(u_n)$.

### Sens de variation

- $(u_n)$ **croissante** si $u_{n+1} - u_n \geq 0$ pour tout $n$ ;
- $(u_n)$ **décroissante** si $u_{n+1} - u_n \leq 0$ ;
- pour une suite à termes positifs, on peut comparer $\frac{u_{n+1}}{u_n}$ à 1.

### Suites majorées, minorées, bornées

$(u_n)$ est **majorée** s'il existe $M$ tel que $u_n \leq M$ pour tout $n$ ; **minorée** si $u_n \geq m$ ; **bornée** si elle est les deux.

### Le raisonnement par récurrence

Pour démontrer qu'une propriété $P(n)$ est vraie pour tout $n \geq n_0$ :

1. **Initialisation** : vérifier $P(n_0)$ ;
2. **Hérédité** : supposer $P(n)$ vraie et démontrer $P(n + 1)$ ;
3. **Conclusion**.

## II. Les suites arithmétiques

$(u_n)$ est **arithmétique** de raison $r$ si $u_{n+1} = u_n + r$.

| Propriété | Formule |
|---|---|
| Terme général | $u_n = u_0 + nr = u_p + (n - p)r$ |
| Somme de termes consécutifs | $S = \frac{\text{nombre de termes} \times (\text{premier} + \text{dernier})}{2}$ |
| Exemple | $u_0 + u_1 + \dots + u_n = \frac{(n+1)(u_0 + u_n)}{2}$ |

Variation : croissante si $r > 0$, décroissante si $r < 0$.

## III. Les suites géométriques

$(u_n)$ est **géométrique** de raison $q$ si $u_{n+1} = q \, u_n$.

| Propriété | Formule |
|---|---|
| Terme général | $u_n = u_0 \, q^n = u_p \, q^{n-p}$ |
| Somme (pour $q \neq 1$) | $S = \text{premier terme} \times \frac{1 - q^{\text{nombre de termes}}}{1 - q}$ |
| Exemple | $u_0 + u_1 + \dots + u_n = u_0 \frac{1 - q^{n+1}}{1 - q}$ |

## IV. La convergence

$(u_n)$ **converge** vers $\ell$ si $\lim_{n \to +\infty} u_n = \ell$ (réel) ; sinon elle **diverge**.

**Limite de $q^n$** :

| $q$ | $\lim q^n$ |
|---|---|
| $q > 1$ | $+\infty$ |
| $q = 1$ | $1$ |
| $-1 < q < 1$ | $0$ |
| $q \leq -1$ | pas de limite |

**Théorèmes** :

- Toute suite **croissante et majorée** converge ; toute suite **décroissante et minorée** converge.
- **Gendarmes** : si $v_n \leq u_n \leq w_n$ et $\lim v_n = \lim w_n = \ell$, alors $\lim u_n = \ell$.
- Si $u_{n+1} = f(u_n)$ avec $f$ continue et $(u_n)$ converge vers $\ell$, alors $\ell = f(\ell)$.

## V. Application économique

Un capital $C_0$ placé à intérêts composés au taux annuel $t$ devient après $n$ années : $C_n = C_0 (1 + t)^n$ (suite géométrique de raison $1 + t$).
`,
    exercices: md`
### Exercice 1 — Suite arithmétique

$(u_n)$ est arithmétique avec $u_3 = 11$ et $u_7 = 23$.

1. Calculez la raison et $u_0$.
2. Calculez $S = u_0 + u_1 + \dots + u_{20}$.

<details><summary>Voir le corrigé</summary>

1. $u_7 = u_3 + 4r$ donc $23 = 11 + 4r$, soit $r = 3$ ; $u_0 = u_3 - 3r = 11 - 9 = 2$.
2. $u_{20} = 2 + 20 \times 3 = 62$ ; $S = \frac{21 \times (2 + 62)}{2} = 672$.

</details>

### Exercice 2 — Suite récurrente (type examen)

On considère $u_0 = 2$ et $u_{n+1} = \frac{1}{2} u_n + 3$. On pose $v_n = u_n - 6$.

1. Montrez que $(v_n)$ est géométrique ; précisez sa raison et son premier terme.
2. Exprimez $v_n$ puis $u_n$ en fonction de $n$.
3. Calculez $\lim u_n$.
4. Calculez $S_n = v_0 + v_1 + \dots + v_{n-1}$.

<details><summary>Voir le corrigé</summary>

1. $v_{n+1} = u_{n+1} - 6 = \frac{1}{2} u_n + 3 - 6 = \frac{1}{2} u_n - 3 = \frac{1}{2}(u_n - 6) = \frac{1}{2} v_n$.
   $(v_n)$ est géométrique de raison $q = \frac{1}{2}$ et de premier terme $v_0 = 2 - 6 = -4$.
2. $v_n = -4 \left(\frac{1}{2}\right)^n$ et $u_n = 6 - 4\left(\frac{1}{2}\right)^n$.
3. $-1 < \frac{1}{2} < 1$ donc $\lim \left(\frac{1}{2}\right)^n = 0$ et $\lim u_n = 6$.
4. $S_n = -4 \times \frac{1 - \left(\frac{1}{2}\right)^n}{1 - \frac{1}{2}} = -8\left(1 - \left(\frac{1}{2}\right)^n\right)$.

</details>

### Exercice 3 — Intérêts composés

Un capital de 50 000 DH est placé à 4 % par an, intérêts composés.

1. Quel est le capital après 5 ans ?
2. Au bout de combien d'années dépasse-t-il 70 000 DH ?

<details><summary>Voir le corrigé</summary>

1. $C_5 = 50\,000 \times 1{,}04^5 \approx 60\,832{,}65$ DH.
2. On cherche $n$ tel que $1{,}04^n > 1{,}4$ : $n > \frac{\ln 1{,}4}{\ln 1{,}04} \approx 8{,}58$, donc **9 ans**.

</details>
`,
    resume: md`
## L'essentiel — Suites

- **Arithmétique** : $u_{n+1} = u_n + r$ ; $u_n = u_0 + nr$ ; $S = \frac{\text{nb termes} \times (\text{1er} + \text{dernier})}{2}$.
- **Géométrique** : $u_{n+1} = q u_n$ ; $u_n = u_0 q^n$ ; $S = \text{1er} \times \frac{1 - q^{\text{nb termes}}}{1 - q}$.
- **Limite de $q^n$** : $+\infty$ si $q > 1$ ; $0$ si $-1 < q < 1$.
- Croissante et majorée → converge ; décroissante et minorée → converge.
- **Récurrence** : initialisation, hérédité, conclusion.
- **Méthode** : suite auxiliaire $v_n = u_n - \ell$ souvent géométrique.
- Intérêts composés : $C_n = C_0(1 + t)^n$.
`,
    qcm: [
      { q: "Si u₀ = 5 et r = 2 (arithmétique), u₁₀ vaut :", choix: ["20", "25", "15", "52"], bonne: 1, explication: "u₁₀ = 5 + 10 × 2 = 25." },
      { q: "Si u₀ = 3 et q = 2 (géométrique), u₄ vaut :", choix: ["24", "48", "11", "96"], bonne: 1, explication: "u₄ = 3 × 2⁴ = 48." },
      { q: "lim (0,8)ⁿ quand n → +∞ vaut :", choix: ["+∞", "1", "0", "0,8"], bonne: 2, explication: "−1 < 0,8 < 1." },
      { q: "Une suite croissante et majorée est :", choix: ["Divergente", "Convergente", "Constante", "Géométrique"], bonne: 1, explication: "C'est un théorème du cours." },
      { q: "1 + 2 + 4 + … + 2⁹ vaut :", choix: ["512", "1 023", "1 024", "2 047"], bonne: 1, explication: "(1 − 2¹⁰)/(1 − 2) = 1 023." },
    ],
  },

  "fonctions-logarithmiques": {
    cours: md`
## I. La fonction logarithme népérien

### 1. Définition

La fonction **logarithme népérien**, notée $\ln$, est l'**unique primitive** de la fonction $x \mapsto \frac{1}{x}$ sur $]0 ; +\infty[$ qui s'annule en 1.

- Domaine : $]0 ; +\infty[$ ;
- $\ln 1 = 0$ ; $\ln e = 1$ avec $e \approx 2{,}718$ ;
- $(\ln x)' = \frac{1}{x}$.

### 2. Propriétés algébriques

Pour $a > 0$, $b > 0$ et $n \in \mathbb{Z}$ :

$$\ln(ab) = \ln a + \ln b \qquad \ln\frac{a}{b} = \ln a - \ln b \qquad \ln\frac{1}{b} = -\ln b \qquad \ln(a^n) = n \ln a \qquad \ln\sqrt{a} = \frac{1}{2}\ln a$$

### 3. Équations et inéquations

Pour $a > 0$ et $b > 0$ :

$$\ln a = \ln b \iff a = b \qquad \ln a < \ln b \iff a < b$$

$$\ln x = k \iff x = e^k \qquad \ln x > 0 \iff x > 1 \qquad \ln x < 0 \iff 0 < x < 1$$

**Toujours commencer par déterminer le domaine** (les expressions sous ln doivent être strictement positives).

## II. Étude de la fonction ln

- $\ln$ est **strictement croissante** sur $]0 ; +\infty[$ (car $\frac{1}{x} > 0$) ;
- **Limites** :

$$\lim_{x \to 0^+} \ln x = -\infty \qquad \lim_{x \to +\infty} \ln x = +\infty$$

- La droite $x = 0$ est **asymptote verticale** ; branche parabolique de direction l'axe des abscisses en $+\infty$.

### Limites importantes (croissances comparées)

$$\lim_{x \to +\infty} \frac{\ln x}{x} = 0 \qquad \lim_{x \to 0^+} x \ln x = 0 \qquad \lim_{x \to 1} \frac{\ln x}{x - 1} = 1 \qquad \lim_{x \to 0} \frac{\ln(1 + x)}{x} = 1$$

Plus généralement, pour $n \geq 1$ : $\lim_{x \to +\infty} \frac{\ln x}{x^n} = 0$ et $\lim_{x \to 0^+} x^n \ln x = 0$.

## III. Dérivée de $\ln(u)$

Si $u$ est dérivable et **strictement positive** sur $I$ :

$$(\ln u)' = \frac{u'}{u}$$

Si $u$ ne s'annule pas : $(\ln|u|)' = \frac{u'}{u}$.

## IV. Le logarithme décimal

$$\log x = \frac{\ln x}{\ln 10} \qquad \log 10 = 1 \qquad \log 10^n = n$$

Il a les mêmes propriétés algébriques que $\ln$ ; il est utile pour calculer le nombre de chiffres d'un entier ou résoudre $a^n > b$.
`,
    exercices: md`
### Exercice 1 — Simplifications et équations

1. Simplifiez $A = \ln 12 - \ln 3 + 2\ln 2$ et $B = \ln\sqrt{e} + \ln\frac{1}{e^2}$.
2. Résolvez $\ln(2x - 1) = \ln(x + 3)$.
3. Résolvez $\ln(x - 1) + \ln(x + 1) = \ln 3$.

<details><summary>Voir le corrigé</summary>

1. $A = \ln\frac{12}{3} + \ln 4 = \ln 4 + \ln 4 = \ln 16 = 4\ln 2$ ; $B = \frac{1}{2} - 2 = -\frac{3}{2}$.
2. Domaine : $2x - 1 > 0$ et $x + 3 > 0$, soit $x > \frac{1}{2}$. Alors $2x - 1 = x + 3 \iff x = 4$, qui convient : $S = \{4\}$.
3. Domaine : $x > 1$. $\ln((x-1)(x+1)) = \ln 3 \iff x^2 - 1 = 3 \iff x^2 = 4$ ; $x = 2$ (seule solution du domaine) : $S = \{2\}$.

</details>

### Exercice 2 — Étude de fonction (type examen)

Soit $f(x) = x - 1 - \ln x$ sur $]0 ; +\infty[$.

1. Calculez $\lim_{x \to 0^+} f(x)$ et $\lim_{x \to +\infty} f(x)$ (on écrira $f(x) = x\left(1 - \frac{1}{x} - \frac{\ln x}{x}\right)$).
2. Étudiez les variations de $f$.
3. Déduisez-en que pour tout $x > 0$, $\ln x \leq x - 1$.

<details><summary>Voir le corrigé</summary>

1. En $0^+$ : $\ln x \to -\infty$ donc $-\ln x \to +\infty$ et $\lim f(x) = +\infty$.
   En $+\infty$ : $\frac{1}{x} \to 0$ et $\frac{\ln x}{x} \to 0$, donc $f(x) = x(1 - \dots) \to +\infty$.
2. $f'(x) = 1 - \frac{1}{x} = \frac{x - 1}{x}$ : négative sur $]0 ; 1]$, positive sur $[1 ; +\infty[$. Minimum : $f(1) = 0$.
3. Le minimum de $f$ est $0$, donc $f(x) \geq 0$ pour tout $x > 0$, c'est-à-dire $\ln x \leq x - 1$.

</details>

### Exercice 3 — Dérivées

Calculez la dérivée de : 1) $g(x) = \ln(x^2 + 1)$ ; 2) $h(x) = x \ln x$ ; 3) $k(x) = \frac{\ln x}{x}$.

<details><summary>Voir le corrigé</summary>

1. $g'(x) = \frac{2x}{x^2 + 1}$.
2. $h'(x) = \ln x + x \times \frac{1}{x} = \ln x + 1$.
3. $k'(x) = \frac{\frac{1}{x} \times x - \ln x}{x^2} = \frac{1 - \ln x}{x^2}$.

</details>
`,
    resume: md`
## L'essentiel — Logarithme

- $\ln$ défini sur $]0 ; +\infty[$ ; $\ln 1 = 0$ ; $\ln e = 1$ ; $(\ln x)' = \frac{1}{x}$ ; strictement croissante.
- $\ln(ab) = \ln a + \ln b$ ; $\ln\frac{a}{b} = \ln a - \ln b$ ; $\ln a^n = n\ln a$.
- $\ln x = k \iff x = e^k$ ; $\ln x > 0 \iff x > 1$.
- Limites : $\lim_{0^+} \ln x = -\infty$ ; $\lim_{+\infty} \ln x = +\infty$ ; $\lim_{+\infty} \frac{\ln x}{x} = 0$ ; $\lim_{0^+} x\ln x = 0$ ; $\lim_{0} \frac{\ln(1+x)}{x} = 1$.
- $(\ln u)' = \frac{u'}{u}$ ($u > 0$).
- $\log x = \frac{\ln x}{\ln 10}$.
- **Toujours déterminer le domaine** avant de résoudre.
`,
    qcm: [
      { q: "ln(a) + ln(b) est égal à :", choix: ["ln(a + b)", "ln(ab)", "ln(a/b)", "ln(a) × ln(b)"], bonne: 1, explication: "Propriété fondamentale du logarithme." },
      { q: "La dérivée de ln(x² + 3) est :", choix: ["1/(x² + 3)", "2x/(x² + 3)", "2x ln(x² + 3)", "x/(x² + 3)"], bonne: 1, explication: "(ln u)' = u'/u." },
      { q: "lim (x→+∞) ln(x)/x vaut :", choix: ["+∞", "1", "0", "−∞"], bonne: 2, explication: "Croissances comparées." },
      { q: "ln x < 0 équivaut à :", choix: ["x < 0", "0 < x < 1", "x > 1", "x < e"], bonne: 1, explication: "ln est négatif entre 0 et 1." },
      { q: "ln(e³) vaut :", choix: ["e", "3", "3e", "1/3"], bonne: 1, explication: "ln(eⁿ) = n." },
    ],
  },
};
