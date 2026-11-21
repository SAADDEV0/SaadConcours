// Prépa ECT — Mathématiques : Analyse. Compléments par chapitre : description SEO, résumé,
// exercices 2 et 3, QCM. Écrit le 2026-11-21 pour l'exercice d'analyse de l'épreuve de mathématiques
// du CNAEM option ECT ; d'abord publié comme chapitres 9 à 12 de maths_cours (FSJES), puis séparé
// le même jour (les cours de prépa ne se mélangent pas aux cours de licence, lib/prepa.js).
const md = String.raw;

const chapitres = {
  1: {
    titre: "Primitives et calcul intégral",
    description: "Primitives usuelles, intégrale et aire, Chasles, intégration par parties, changement de variable, coût total, surplus et valeur actuelle : cours et exercices.",
    resume: md`
## L'essentiel — Primitives et calcul intégral

- $F$ est une primitive de $f$ si $F' = f$ ; les autres primitives sont $F + C$.
- Formes à reconnaître : $u'u^n \to \dfrac{u^{n+1}}{n+1}$ ; $\dfrac{u'}{u} \to \ln\lvert u\rvert$ ; $u'e^u \to e^u$ ; $e^{ax} \to \dfrac{1}{a}e^{ax}$.
- $\displaystyle\int_a^b f(x)\,dx = F(b) - F(a)$ ; si $f \ge 0$, c'est l'aire sous la courbe.
- Linéarité, Chasles $\int_a^c = \int_a^b + \int_b^c$, positivité et croissance (pour encadrer).
- Valeur moyenne : $\mu = \dfrac{1}{b - a}\displaystyle\int_a^b f$.
- IPP : $\displaystyle\int_a^b uv' = \big[uv\big]_a^b - \int_a^b u'v$ ; dériver $x^n$ ou $\ln x$, intégrer l'exponentielle.
- Primitive de $\ln x$ : $x\ln x - x$.
- Changement de variable : $\displaystyle\int_a^b g(u(x))\,u'(x)\,dx = \int_{u(a)}^{u(b)} g(t)\,dt$ (changer les bornes).
- $CT(Q) = CF + \displaystyle\int_0^Q C_m$ ; $SC = \displaystyle\int_0^{q_0} D - p_0q_0$ ; $SP = p_0q_0 - \displaystyle\int_0^{q_0} S$.
- Flux continu : $VA = \displaystyle\int_0^T Re^{-rt}\,dt = \frac{R}{r}\left(1 - e^{-rT}\right)$.
`,
    exercices: md`
### Exercice 2 — Trois intégrales types

Calculez :
1. $A = \displaystyle\int_0^2 \frac{2x + 1}{x^2 + x + 1}\,dx$ ;
2. $B = \displaystyle\int_0^1 x^2 e^{x}\,dx$ (deux intégrations par parties) ;
3. $C = \displaystyle\int_0^1 \frac{dx}{2x + 1}$.

<details><summary>Voir le corrigé</summary>

**1)** Le numérateur est la dérivée du dénominateur (qui est strictement positif) : $A = \big[\ln(x^2 + x + 1)\big]_0^2 = \ln 7 - \ln 1 = \mathbf{\ln 7} \approx 1{,}946$.

**2)** Première IPP avec $u = x^2$, $v' = e^x$ : $B = \big[x^2e^x\big]_0^1 - \displaystyle\int_0^1 2xe^x\,dx = e - 2\int_0^1 xe^x\,dx$. Le cours a établi $\int_0^1 xe^x\,dx = 1$ (seconde IPP avec $u = x$). Donc $B = \mathbf{e - 2} \approx 0{,}718$.

**3)** Forme $\dfrac{1}{2}\cdot\dfrac{u'}{u}$ avec $u = 2x + 1 > 0$ : $C = \dfrac{1}{2}\big[\ln(2x + 1)\big]_0^1 = \mathbf{\dfrac{\ln 3}{2}} \approx 0{,}549$.

</details>

### Exercice 3 — Surplus sur le marché de la tomate

Sur un marché de gros de la région du Souss, la demande inverse de tomates est $D(q) = 70 - 2q$ et l'offre inverse $S(q) = 10 + q$ ($q$ en centaines de tonnes, prix en centaines de DH la tonne ; chiffres d'illustration).

1. Déterminez l'équilibre.
2. Calculez le surplus des consommateurs et celui des producteurs.
3. Quel est le surplus total ? Que représente-t-il ?

<details><summary>Voir le corrigé</summary>

**1)** $70 - 2q = 10 + q$ donne $q_0 = \mathbf{20}$ et $p_0 = \mathbf{30}$.

**2)** $SC = \displaystyle\int_0^{20} (70 - 2q)\,dq - 30 \times 20 = \big[70q - q^2\big]_0^{20} - 600 = 1\,000 - 600 = \mathbf{400}$.
$SP = 30 \times 20 - \displaystyle\int_0^{20} (10 + q)\,dq = 600 - \left[10q + \frac{q^2}{2}\right]_0^{20} = 600 - 400 = \mathbf{200}$.

**3)** Surplus total : $400 + 200 = \mathbf{600}$ (en unités de prix × quantité, soit 600 × 100 × 100 = 6 millions de DH). C'est le gain que l'échange procure à l'ensemble des acheteurs et des vendeurs ; il est maximal à l'équilibre concurrentiel, ce qui permet de mesurer la perte sèche d'une taxe.

</details>
`,
    qcm: [
      { q: "Une primitive de 6x² est :", choix: ["12x", "2x³", "6x³", "3x²"], bonne: 1, explication: "La dérivée de 2x³ est 6x²." },
      { q: "Deux primitives d'une même fonction sur un intervalle :", choix: ["Sont égales", "Diffèrent d'une constante", "Sont opposées", "N'ont aucun lien"], bonne: 1, explication: "Leur différence a une dérivée nulle." },
      { q: "Une primitive de 2x/(x² + 1) est :", choix: ["ln(x² + 1)", "1/(x² + 1)", "2 ln x", "(x² + 1)²"], bonne: 0, explication: "Forme u'/u." },
      { q: "L'intégrale de 0 à 1 de x e^x vaut :", choix: ["e", "1", "e − 1", "1/2"], bonne: 1, explication: "IPP : [x e^x] − ∫ e^x = e − (e − 1)." },
      { q: "Une primitive de ln x sur ]0, +∞[ est :", choix: ["1/x", "x ln x", "x ln x − x", "ln² x"], bonne: 2, explication: "Sa dérivée vaut ln x + 1 − 1." },
      { q: "La relation de Chasles permet d'écrire l'intégrale de a à c comme :", choix: ["Le produit de deux intégrales", "La somme des intégrales de a à b et de b à c", "La différence des bornes", "L'intégrale de c à a"], bonne: 1, explication: "Additivité par rapport à l'intervalle." },
      { q: "La valeur moyenne de x² sur [0, 3] vaut :", choix: ["3", "4,5", "9", "1"], bonne: 0, explication: "(1/3) × 27/3 = 3." },
      { q: "Le coût total s'obtient à partir du coût marginal :", choix: ["En le dérivant", "En l'intégrant et en ajoutant le coût fixe", "En le multipliant par Q", "En le divisant par Q"], bonne: 1, explication: "CT est la primitive de Cm qui vaut CF en 0." },
      { q: "Avec D(q) = 100 − 2q et un prix de 40, le surplus du consommateur vaut :", choix: ["1 200", "900", "2 100", "600"], bonne: 1, explication: "Triangle de base 30 et de hauteur 60." },
      { q: "Lors d'un changement de variable t = u(x), il faut aussi :", choix: ["Dériver deux fois", "Changer les bornes", "Supprimer la constante", "Multiplier par x"], bonne: 1, explication: "Les bornes deviennent u(a) et u(b)." },
    ],
  },

  2: {
    titre: "Fonctions de deux variables : dérivées partielles et optimisation",
    description: "Dérivées partielles, élasticités, Cobb-Douglas et Euler, hessienne, critère rt − s², optimisation sous contrainte et lagrangien : exercices corrigés.",
    resume: md`
## L'essentiel — Fonctions de deux variables

- Courbe de niveau : $f(x, y) = c$ (isoquante, courbe d'indifférence).
- $f'_x$ : dériver par rapport à $x$, $y$ constant ; c'est une grandeur **marginale** (productivité marginale, utilité marginale).
- TMS ou TMST : $\dfrac{f'_x}{f'_y}$.
- Élasticité partielle : $e_{f/x} = \dfrac{x f'_x}{f}$ ; Cobb-Douglas $AK^\alpha L^\beta$ : élasticités $\alpha$ et $\beta$.
- Homogène de degré $k$ : $f(tx, ty) = t^kf(x, y)$ ; Euler : $xf'_x + yf'_y = kf$ ; rendements d'échelle selon $\alpha + \beta$ comparé à 1.
- Schwarz : $f''_{xy} = f''_{yx}$ ; notations $r = f''_{xx}$, $s = f''_{xy}$, $t = f''_{yy}$.
- Point critique : $f'_x = f'_y = 0$.
- $rt - s^2 > 0$ et $r < 0$ : maximum ; $r > 0$ : minimum ; $rt - s^2 < 0$ : point-selle ; $= 0$ : pas de conclusion.
- Sous contrainte $g = c$ : substitution, ou $\mathcal{L} = f + \lambda(c - g)$ et $\mathcal{L}'_x = \mathcal{L}'_y = \mathcal{L}'_\lambda = 0$.
- $\lambda$ = gain de l'optimum pour une unité de contrainte en plus (utilité marginale du revenu, coût marginal, valeur d'une unité de capacité).
`,
    exercices: md`
### Exercice 2 — Minimiser le coût d'une production donnée

Une conserverie de Safi produit selon $Q = K^{0{,}5}L^{0{,}5}$. Le prix d'une unité de capital est de 4 (milliers de DH) et celui d'une unité de travail de 9. Elle doit produire $Q = 60$.

1. Écrivez le lagrangien du problème de minimisation du coût $C = 4K + 9L$.
2. Déterminez la combinaison optimale et le coût minimal.
3. Calculez $\lambda$ et interprétez-le.

<details><summary>Voir le corrigé</summary>

**1)** $\mathcal{L} = 4K + 9L + \lambda\left(60 - K^{0{,}5}L^{0{,}5}\right)$.

**2)** $\mathcal{L}'_K = 4 - 0{,}5\lambda K^{-0{,}5}L^{0{,}5} = 0$ et $\mathcal{L}'_L = 9 - 0{,}5\lambda K^{0{,}5}L^{-0{,}5} = 0$. Le rapport des deux donne $\dfrac{L}{K} = \dfrac{4}{9}$, soit $K = \dfrac{9}{4}L$. Dans la contrainte : $\sqrt{\frac{9}{4}L^2} = 1{,}5L = 60$, d'où $L = \mathbf{40}$ et $K = \mathbf{90}$. Coût minimal : $4 \times 90 + 9 \times 40 = \mathbf{720}$ milliers de DH.

**3)** $4 = 0{,}5\lambda\sqrt{40/90} = 0{,}5\lambda \times \frac{2}{3} = \frac{\lambda}{3}$, donc $\lambda = \mathbf{12}$ : c'est le **coût marginal**. Une unité produite en plus coûte environ 12 milliers de DH. Les rendements étant constants, le coût est proportionnel : $C(Q) = 12Q$, et l'on retrouve $12 \times 60 = 720$.

</details>

### Exercice 3 — Minimum ou point-selle ?

Déterminez et classez les points critiques de :
1. $f(x, y) = x^2 + xy + y^2 - 3x - 6y$ ;
2. $g(x, y) = xy - x - y$.

<details><summary>Voir le corrigé</summary>

**1)** $f'_x = 2x + y - 3 = 0$ et $f'_y = x + 2y - 6 = 0$. On obtient $x = 0$ et $y = 3$. $r = 2$, $s = 1$, $t = 2$ : $rt - s^2 = 3 > 0$ et $r > 0$, **minimum** local, $f(0, 3) = 9 - 18 = \mathbf{-9}$.

**2)** $g'_x = y - 1 = 0$ et $g'_y = x - 1 = 0$ : point critique $(1, 1)$. $r = 0$, $s = 1$, $t = 0$ : $rt - s^2 = -1 < 0$, **point-selle**. En effet $g(1 + h, 1 + k) = -1 + hk$ est tantôt supérieur, tantôt inférieur à $g(1, 1) = -1$ selon le signe de $hk$.

</details>
`,
    qcm: [
      { q: "La dérivée partielle de x³y² par rapport à y est :", choix: ["3x²y²", "2x³y", "6x²y", "x³"], bonne: 1, explication: "x est traité comme une constante." },
      { q: "Pour Q = 4K^0,5 L^0,5 avec K = 25 et L = 16, la productivité marginale du travail vaut :", choix: ["1,6", "2,5", "80", "5"], bonne: 1, explication: "2 × 5 / 4." },
      { q: "Dans une Cobb-Douglas A K^α L^β, l'élasticité de la production au travail vaut :", choix: ["α", "β", "α + β", "A"], bonne: 1, explication: "Les exposants sont les élasticités." },
      { q: "Une Cobb-Douglas avec α + β = 1,2 présente des rendements d'échelle :", choix: ["Décroissants", "Constants", "Croissants", "Nuls"], bonne: 2, explication: "Homogène de degré supérieur à 1." },
      { q: "L'identité d'Euler pour une fonction homogène de degré k s'écrit :", choix: ["x f'x + y f'y = k f", "f'x = f'y", "f(tx, ty) = t f", "r t − s² = k"], bonne: 0, explication: "Somme des dérivées pondérées par les variables." },
      { q: "Au point critique, rt − s² > 0 et r < 0 : on a :", choix: ["Un minimum", "Un maximum", "Un point-selle", "Rien de certain"], bonne: 1, explication: "Critère de Monge." },
      { q: "Au point critique, rt − s² < 0 : on a :", choix: ["Un minimum", "Un maximum", "Un point-selle", "Un extremum global"], bonne: 2, explication: "Ni maximum ni minimum." },
      { q: "Le théorème de Schwarz affirme que :", choix: ["f''xx = f''yy", "f''xy = f''yx", "f'x = f'y", "rt = s²"], bonne: 1, explication: "Les dérivées croisées sont égales." },
      { q: "À l'optimum du consommateur, le TMS est égal :", choix: ["Au revenu", "Au rapport des prix", "À l'utilité", "À λ"], bonne: 1, explication: "Ux/Uy = px/py." },
      { q: "Dans une minimisation du coût sous contrainte de production, λ représente :", choix: ["Le coût fixe", "Le coût marginal", "Le prix du capital", "La production"], bonne: 1, explication: "Coût d'une unité produite en plus." },
    ],
  },

  3: {
    titre: "Intégrales généralisées et suites d'intégrales",
    description: "Intégrales généralisées, Riemann, critères de comparaison, densités, suites d'intégrales et récurrences par IPP : le niveau du CNAEM ECT, exercices corrigés.",
    resume: md`
## L'essentiel — Intégrales généralisées et suites d'intégrales

- $\displaystyle\int_a^{+\infty} f$ converge si $\displaystyle\lim_{A \to +\infty}\int_a^A f$ existe et est finie ; même idée en une borne où $f$ n'est pas définie.
- $\displaystyle\int_0^{+\infty}e^{-ax}dx = \frac{1}{a}$ ($a > 0$) ; $\displaystyle\int_0^{+\infty}x^ne^{-x}dx = n!$.
- Riemann : $\displaystyle\int_1^{+\infty}\frac{dx}{x^\alpha}$ converge ssi $\alpha > 1$ ; $\displaystyle\int_0^1\frac{dx}{x^\alpha}$ converge ssi $\alpha < 1$.
- Fonctions **positives** : comparaison ($0 \le f \le g$), négligeabilité ($f = o(g)$), équivalence ($f \sim g$ : même nature).
- Croissances comparées : $x^ne^{-ax} \to 0$ en $+\infty$, donc $x^ne^{-ax} = o(1/x^2)$.
- Densité : $f \ge 0$, continue sauf en un nombre fini de points, $\int_{\mathbb{R}} f = 1$ ; $E(X) = \int xf$, $V(X) = E(X^2) - E(X)^2$.
- Récurrence entre intégrales : IPP sur $[0, A]$, puis $A \to +\infty$.
- Monotonie de $(I_n)$ : signe de $I_{n+1} - I_n$ écrite comme **une** intégrale.
- Limite : encadrer l'intégrande, intégrer (croissance de l'intégrale), gendarmes.
- $I_n = \int_0^1 \frac{x^n}{1 + x}dx$ : $I_n + I_{n+1} = \frac{1}{n + 1}$, $I_n \to 0$, $\sum_{k=1}^n\frac{(-1)^{k-1}}{k} \to \ln 2$.
`,
    exercices: md`
### Exercice 2 — La suite $K_n = \int_0^1 x^ne^x\,dx$

1. Calculez $K_0$.
2. Montrez par une IPP que $K_{n+1} = e - (n + 1)K_n$ pour tout $n$. Calculez $K_1$ et $K_2$.
3. Montrez que $0 \le K_n \le \dfrac{e}{n + 1}$ et déduisez-en la limite de $(K_n)$.

<details><summary>Voir le corrigé</summary>

**1)** $K_0 = \big[e^x\big]_0^1 = \mathbf{e - 1}$.

**2)** Avec $u = x^{n+1}$, $v' = e^x$ : $K_{n+1} = \big[x^{n+1}e^x\big]_0^1 - (n + 1)\displaystyle\int_0^1 x^ne^x dx = e - (n + 1)K_n$. Donc $K_1 = e - (e - 1) = \mathbf{1}$ et $K_2 = e - 2 \approx \mathbf{0{,}718}$ (on retrouve l'exercice 2 du chapitre 1).

**3)** Sur $[0, 1]$, $0 \le x^ne^x \le ex^n$, donc $0 \le K_n \le e\displaystyle\int_0^1 x^ndx = \frac{e}{n + 1}$. Par le théorème des gendarmes, $\mathbf{K_n \to 0}$.

</details>

### Exercice 3 — Une densité sans variance

Soit $f(x) = \dfrac{2}{(1 + x)^3}$ pour $x \ge 0$ et $f(x) = 0$ pour $x < 0$.

1. Montrez que $f$ est une densité de probabilité.
2. Soit $X$ de densité $f$. Montrez que $E(X)$ existe et vaut 1 (on pourra écrire $\frac{x}{(1+x)^3} = \frac{1}{(1+x)^2} - \frac{1}{(1+x)^3}$).
3. $X$ admet-elle une variance ?

<details><summary>Voir le corrigé</summary>

**1)** $f$ est positive, continue sauf en 0. $\displaystyle\int_0^A \frac{2}{(1 + x)^3}dx = \left[-\frac{1}{(1 + x)^2}\right]_0^A = 1 - \frac{1}{(1 + A)^2} \to 1$. C'est une densité.

**2)** $\displaystyle\int_0^A \frac{2x}{(1 + x)^3}dx = \int_0^A \frac{2}{(1 + x)^2}dx - \int_0^A \frac{2}{(1 + x)^3}dx = \left(2 - \frac{2}{1 + A}\right) - \left(1 - \frac{1}{(1 + A)^2}\right) \to 2 - 1 = 1$. Donc $\mathbf{E(X) = 1}$.

**3)** $x^2f(x) = \dfrac{2x^2}{(1 + x)^3} \sim \dfrac{2}{x}$ en $+\infty$ ; ces fonctions sont positives et $\int_1^{+\infty}\frac{dx}{x}$ diverge : $E(X^2)$ n'existe pas, $X$ **n'a pas de variance**. Une espérance finie n'entraîne pas une variance finie.

</details>
`,
    qcm: [
      { q: "L'intégrale de 0 à +∞ de e^(−2x) vaut :", choix: ["2", "1/2", "1", "Elle diverge"], bonne: 1, explication: "1/a avec a = 2." },
      { q: "L'intégrale de 1 à +∞ de 1/x^α converge si et seulement si :", choix: ["α > 0", "α > 1", "α < 1", "α = 1"], bonne: 1, explication: "Intégrale de Riemann en +∞." },
      { q: "L'intégrale de 0 à 1 de 1/√x :", choix: ["Diverge", "Vaut 1", "Vaut 2", "Vaut 1/2"], bonne: 2, explication: "[2√x] de 0 à 1." },
      { q: "L'intégrale de 0 à +∞ de x³ e^(−x) vaut :", choix: ["3", "6", "9", "1"], bonne: 1, explication: "n! avec n = 3." },
      { q: "Les critères de comparaison s'appliquent à des fonctions :", choix: ["Quelconques", "Positives", "Croissantes", "Bornées"], bonne: 1, explication: "La positivité est indispensable." },
      { q: "Pour établir une relation de récurrence sur une intégrale jusqu'à +∞, on fait l'IPP :", choix: ["Directement sur [0, +∞[", "Sur [0, A] puis A tend vers +∞", "Sur [1, 2]", "On n'utilise jamais d'IPP"], bonne: 1, explication: "Rédaction attendue au concours." },
      { q: "Une fonction est une densité si elle est positive et si son intégrale sur R vaut :", choix: ["0", "1", "Son espérance", "+∞"], bonne: 1, explication: "Normalisation à 1." },
      { q: "Pour In = intégrale de 0 à 1 de x^n/(1 + x), In + I(n+1) vaut :", choix: ["ln 2", "1/(n + 1)", "1/n", "0"], bonne: 1, explication: "Intégrale de x^n sur [0, 1]." },
      { q: "Pour montrer qu'une suite d'intégrales est décroissante, on étudie le signe de :", choix: ["I0", "I(n+1) − In", "La primitive", "La borne supérieure"], bonne: 1, explication: "Écrite comme une seule intégrale." },
      { q: "Si 0 ≤ In ≤ 1/(n + 1) pour tout n, alors :", choix: ["In tend vers 1", "In tend vers 0", "In diverge", "On ne peut rien dire"], bonne: 1, explication: "Théorème des gendarmes." },
    ],
  },

  4: {
    titre: "Suites récurrentes et séries numériques",
    description: "Suites un+1 = f(un), point fixe, accroissements finis, séries géométriques et exponentielle, comparaison, espérance de la loi géométrique : exercices corrigés.",
    resume: md`
## L'essentiel — Suites récurrentes et séries numériques

- $u_{n+1} = f(u_n)$ : montrer que l'intervalle $I$ est **stable** ($f(I) \subset I$), par récurrence.
- Monotonie : $f$ croissante (comparer $u_0$ et $u_1$) ou signe de $f(x) - x$ sur $I$.
- Monotone et bornée : converge ; si $f$ continue, la limite vérifie $\ell = f(\ell)$ (point fixe compatible avec les bornes).
- Accroissements finis : $\lvert f'\rvert \le k$ sur $I$ donne $\lvert u_n - \ell\rvert \le k^n\lvert u_0 - \ell\rvert$.
- Série : suite des sommes partielles $S_n$ ; converge si $S_n$ a une limite finie.
- Si $\sum u_n$ converge, alors $u_n \to 0$ ; la réciproque est fausse (série harmonique).
- $\sum_{n \ge 0}q^n = \frac{1}{1 - q}$, $\sum_{n \ge 1}nq^{n-1} = \frac{1}{(1 - q)^2}$, $\sum_{n \ge 2}n(n - 1)q^{n-2} = \frac{2}{(1 - q)^3}$ pour $\lvert q\rvert < 1$.
- $\sum_{n \ge 0}\frac{x^n}{n!} = e^x$ ; Riemann $\sum\frac{1}{n^\alpha}$ converge ssi $\alpha > 1$.
- Termes positifs : comparaison, équivalents, négligeabilité.
- Loi géométrique : $E(X) = \frac{1}{p}$ ; rente perpétuelle : $\frac{C}{t}$.
`,
    exercices: md`
### Exercice 2 — Sommes et natures de séries

1. Calculez $A = \displaystyle\sum_{n \ge 0}\frac{n + 1}{3^n}$.
2. Calculez $B = \displaystyle\sum_{n \ge 0}\frac{n\,2^n}{n!}$.
3. Donnez la nature de $\displaystyle\sum_{n \ge 0}\frac{n + 1}{n^3 + 1}$ et de $\displaystyle\sum_{n \ge 0}\frac{n}{2n + 1}$.

<details><summary>Voir le corrigé</summary>

**1)** Avec $q = \frac{1}{3}$ et le changement d'indice $m = n + 1$ : $A = \displaystyle\sum_{m \ge 1}m\,q^{m-1} = \frac{1}{(1 - 1/3)^2} = \mathbf{\frac{9}{4}}$.

**2)** Le terme $n = 0$ est nul ; pour $n \ge 1$, $\frac{n}{n!} = \frac{1}{(n - 1)!}$. Donc $B = \displaystyle\sum_{n \ge 1}\frac{2^n}{(n - 1)!} = 2\sum_{m \ge 0}\frac{2^m}{m!} = \mathbf{2e^2} \approx 14{,}78$.

**3)** $\frac{n + 1}{n^3 + 1} \sim \frac{1}{n^2}$, termes positifs, Riemann avec $\alpha = 2 > 1$ : la première série **converge**. Pour la seconde, $\frac{n}{2n + 1} \to \frac{1}{2} \ne 0$ : elle **diverge grossièrement**.

</details>

### Exercice 3 — Une suite qui tend vers 0 et une somme télescopique

Soit $u_0 = \frac{1}{2}$ et $u_{n+1} = u_n - u_n^2$.

1. Montrez que $0 \le u_n \le \frac{1}{2}$ pour tout $n$ (on étudiera $f(x) = x - x^2$ sur $[0, \frac{1}{2}]$).
2. Montrez que $(u_n)$ est décroissante, qu'elle converge, et calculez sa limite.
3. Exprimez $u_n^2$ à l'aide de $u_n$ et $u_{n+1}$. En déduire que $\sum u_n^2$ converge et calculez sa somme.

<details><summary>Voir le corrigé</summary>

**1)** $f'(x) = 1 - 2x \ge 0$ sur $[0, \frac{1}{2}]$ : $f$ est croissante, $f(0) = 0$ et $f(\frac{1}{2}) = \frac{1}{4}$, donc $f([0, \frac{1}{2}]) \subset [0, \frac{1}{2}]$. Par récurrence, $\mathbf{0 \le u_n \le \frac{1}{2}}$.

**2)** $u_{n+1} - u_n = -u_n^2 \le 0$ : la suite est **décroissante** ; minorée par 0, elle converge vers $\ell \in [0, \frac{1}{2}]$ avec $\ell = \ell - \ell^2$, donc $\mathbf{\ell = 0}$.

**3)** $u_n^2 = u_n - u_{n+1}$ : la somme est télescopique, $\displaystyle\sum_{k=0}^{n}u_k^2 = u_0 - u_{n+1} \to \frac{1}{2} - 0$. La série converge et $\mathbf{\sum_{n \ge 0}u_n^2 = \frac{1}{2}}$.

</details>
`,
    qcm: [
      { q: "Pour une suite un+1 = f(un) avec f continue, une limite éventuelle ℓ vérifie :", choix: ["f(ℓ) = 0", "f(ℓ) = ℓ", "f'(ℓ) = 0", "ℓ = u0"], bonne: 1, explication: "La limite est un point fixe." },
      { q: "Si f(x) − x ≥ 0 sur l'intervalle stable, la suite un+1 = f(un) est :", choix: ["Décroissante", "Croissante", "Constante", "Alternée"], bonne: 1, explication: "un+1 − un = f(un) − un ≥ 0." },
      { q: "Si |f'| ≤ k < 1 sur I, l'écart |un − ℓ| est majoré par :", choix: ["k |u0 − ℓ|", "k^n |u0 − ℓ|", "n k", "1/k^n"], bonne: 1, explication: "Inégalité des accroissements finis itérée." },
      { q: "La série harmonique de terme 1/n :", choix: ["Converge vers 1", "Converge vers ln 2", "Diverge", "Converge vers e"], bonne: 2, explication: "Ses sommes partielles se comportent comme ln n." },
      { q: "Si le terme général d'une série ne tend pas vers 0, la série :", choix: ["Converge", "Diverge", "Peut converger", "Vaut 0"], bonne: 1, explication: "Divergence grossière." },
      { q: "La somme de la série géométrique de raison 1/3, à partir de n = 0, vaut :", choix: ["1/3", "3/2", "3", "2/3"], bonne: 1, explication: "1/(1 − 1/3)." },
      { q: "La somme pour n ≥ 0 de 1/n! vaut :", choix: ["1", "2", "e", "+∞"], bonne: 2, explication: "Série exponentielle en x = 1." },
      { q: "La série de terme 1/n^α converge si et seulement si :", choix: ["α > 0", "α ≥ 1", "α > 1", "α < 1"], bonne: 2, explication: "Série de Riemann." },
      { q: "L'espérance d'une loi géométrique de paramètre p vaut :", choix: ["p", "1/p", "1 − p", "p/(1 − p)"], bonne: 1, explication: "Par la série géométrique dérivée." },
      { q: "Un titre qui rapporte 6 000 DH par an sans fin, au taux de 4 %, vaut :", choix: ["24 000 DH", "150 000 DH", "240 000 DH", "60 000 DH"], bonne: 1, explication: "Rente perpétuelle C/t." },
    ],
  },
};

export default chapitres;
