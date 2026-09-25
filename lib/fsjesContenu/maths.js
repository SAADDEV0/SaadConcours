// Mathématiques (S1) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Logique et raisonnement mathématique",
    description: "Logique mathématique : connecteurs, tables de vérité, négation, quantificateurs, contraposée, raisonnement par l'absurde et par récurrence, exercices corrigés.",
    resume: md`
## L'essentiel — Logique et raisonnement

- Connecteurs : non, et, ou (inclusif), $\Rightarrow$ (fausse seulement si V ⇒ F), $\Leftrightarrow$.
- De Morgan : non(P et Q) = non P ou non Q ; non(P ou Q) = non P et non Q ; non(P ⇒ Q) = P et non Q.
- Contraposée (non Q ⇒ non P) équivalente à l'implication ; la réciproque ne l'est pas.
- Négation des quantificateurs : on échange $\forall$ et $\exists$ et on nie la propriété ; l'ordre des quantificateurs compte.
- Raisonnements : direct, contraposée, absurde, disjonction de cas, contre-exemple, **récurrence** (initialisation, hérédité, conclusion).
`,
    exercices: md`
### Exercice 2 — Par l'absurde

Montrez par l'absurde que $\sqrt{2}$ est irrationnel.

<details><summary>Voir le corrigé</summary>

Supposons $\sqrt{2} = p/q$ avec $p, q$ entiers sans diviseur commun. Alors $p^2 = 2q^2$ : $p^2$ est pair, donc $p$ est pair (chapitre 1.5), $p = 2k$. D'où $4k^2 = 2q^2$, $q^2 = 2k^2$ : $q$ est pair aussi. $p$ et $q$ auraient 2 comme diviseur commun : **contradiction**. Donc $\sqrt{2}$ est irrationnel.

</details>

### Exercice 3 — Récurrence et inégalité

Montrez que $\forall n \ge 1,\ 2^n \ge n + 1$.

<details><summary>Voir le corrigé</summary>

Initialisation : $2^1 = 2 \ge 2$ ✓. Hérédité : si $2^n \ge n + 1$, alors $2^{n+1} = 2 \times 2^n \ge 2(n + 1) = 2n + 2 \ge n + 2$ (car $n \ge 0$) ✓. Conclusion : vraie pour tout $n \ge 1$.

</details>
`,
    qcm: [
      { q: "L'implication P ⇒ Q est fausse lorsque :", choix: ["P et Q sont fausses", "P est vraie et Q fausse", "P est fausse et Q vraie", "P et Q sont vraies"], bonne: 1, explication: "C'est le seul cas." },
      { q: "La contraposée de P ⇒ Q est :", choix: ["Q ⇒ P", "non Q ⇒ non P", "non P ⇒ non Q", "P et non Q"], bonne: 1, explication: "Elle est équivalente à l'implication." },
      { q: "La négation de « P et Q » est :", choix: ["non P et non Q", "non P ou non Q", "P ou Q", "non P ⇒ Q"], bonne: 1, explication: "Loi de De Morgan." },
      { q: "La négation de « pour tout x, x > 0 » est :", choix: ["Pour tout x, x < 0", "Il existe x tel que x ≤ 0", "Il existe x tel que x > 0", "Pour tout x, x ≤ 0"], bonne: 1, explication: "On échange les quantificateurs et on nie." },
      { q: "Pour réfuter une propriété universelle, il suffit :", choix: ["D'une récurrence", "D'un contre-exemple", "D'un exemple qui la vérifie", "D'une contraposée"], bonne: 1, explication: "Un seul cas suffit." },
      { q: "Dans une récurrence, l'hérédité consiste à montrer :", choix: ["P(0)", "P(n) ⇒ P(n+1)", "P(n+1) ⇒ P(n)", "P(n) pour tout n directement"], bonne: 1, explication: "Après l'initialisation." },
      { q: "Le « ou » mathématique est :", choix: ["Exclusif", "Inclusif", "Toujours faux", "Une implication"], bonne: 1, explication: "Au moins une des deux est vraie." },
      { q: "La réciproque de « si x = 2 alors x² = 4 » est :", choix: ["Vraie", "Fausse", "Équivalente à la contraposée", "Indécidable"], bonne: 1, explication: "x = −2 est un contre-exemple." },
      { q: "Dire que P est une condition nécessaire pour Q signifie :", choix: ["P ⇒ Q", "Q ⇒ P", "P ⇔ Q", "non P ⇒ Q"], bonne: 1, explication: "Q ne peut être vraie sans P." },
      { q: "La somme 1 + 2 + … + 10 vaut :", choix: ["50", "55", "100", "45"], bonne: 1, explication: "10 × 11 / 2." },
    ],
  },

  2: {
    titre: "Ensembles, relations et applications",
    description: "Ensembles et applications : opérations, cardinal, diagrammes de Venn, relations d'équivalence et d'ordre, injection, surjection, bijection et réciproque.",
    resume: md`
## L'essentiel — Ensembles et applications

- Notations : $\in$, $\subset$, $\emptyset$ ; $\mathcal{P}(E)$ a $2^n$ éléments.
- Opérations : réunion, intersection, complémentaire, différence, produit cartésien ; De Morgan.
- Cardinal : $|A \cup B| = |A| + |B| - |A \cap B|$ ; $|A \times B| = |A| \times |B|$.
- Relation d'équivalence (réflexive, symétrique, transitive) ; d'ordre (réflexive, antisymétrique, transitive), totale ou partielle.
- Application : chaque $x$ a une unique image ; injective (au plus un antécédent), surjective (au moins un), bijective (exactement un) ; dépend des ensembles de départ et d'arrivée.
- Composée $g \circ f$ non commutative ; réciproque $f^{-1}$ (demande inverse).
`,
    exercices: md`
### Exercice 2 — Opérations

$E = \{1, 2, \dots, 10\}$, $A = \{1, 2, 3, 4, 5\}$, $B = \{2, 4, 6, 8, 10\}$. Déterminez $A \cup B$, $A \cap B$, $A \setminus B$, $\bar A$ et vérifiez $|A \cup B| = |A| + |B| - |A \cap B|$.

<details><summary>Voir le corrigé</summary>

$A \cup B = \{1, 2, 3, 4, 5, 6, 8, 10\}$ ; $A \cap B = \{2, 4\}$ ; $A \setminus B = \{1, 3, 5\}$ ; $\bar A = \{6, 7, 8, 9, 10\}$. $8 = 5 + 5 - 2$ ✓.

</details>

### Exercice 3 — Bijection affine

Montrez que $f : \mathbb{R} \to \mathbb{R}$, $f(x) = 5 - 4x$ est bijective et calculez $f^{-1}$. Application : la demande est $Q = 5 - 4P$ ; écrivez la demande inverse.

<details><summary>Voir le corrigé</summary>

$y = 5 - 4x \Leftrightarrow x = (5 - y)/4$ : pour tout $y$ réel, une unique solution : $f$ est bijective, $f^{-1}(y) = (5 - y)/4$. Demande inverse : $P = (5 - Q)/4$.

</details>
`,
    qcm: [
      { q: "Un ensemble à 4 éléments possède combien de parties ?", choix: ["4", "8", "16", "24"], bonne: 2, explication: "2 puissance 4." },
      { q: "|A| = 30, |B| = 20, |A ∩ B| = 5. |A ∪ B| vaut :", choix: ["50", "45", "55", "25"], bonne: 1, explication: "30 + 20 − 5." },
      { q: "Le complémentaire de A ∪ B est :", choix: ["Ā ∪ B̄", "Ā ∩ B̄", "A ∩ B", "A \\ B"], bonne: 1, explication: "Loi de De Morgan." },
      { q: "Une relation d'équivalence est :", choix: ["Réflexive, antisymétrique, transitive", "Réflexive, symétrique, transitive", "Symétrique seulement", "Transitive seulement"], bonne: 1, explication: "Elle crée des classes d'équivalence." },
      { q: "La relation ≤ sur les réels est une relation :", choix: ["D'équivalence", "D'ordre total", "D'ordre partiel", "Symétrique"], bonne: 1, explication: "Deux réels sont toujours comparables." },
      { q: "f(x) = x² de R dans R est :", choix: ["Injective", "Surjective", "Bijective", "Ni injective ni surjective"], bonne: 3, explication: "f(−1) = f(1) et −1 n'a pas d'antécédent." },
      { q: "Une application bijective est :", choix: ["Injective seulement", "Surjective seulement", "Injective et surjective", "Constante"], bonne: 2, explication: "Chaque image a exactement un antécédent." },
      { q: "Si f(x) = 2x + 3, alors f⁻¹(y) vaut :", choix: ["(y − 3) / 2", "2y + 3", "1 / (2y + 3)", "(y + 3) / 2"], bonne: 0, explication: "On résout y = 2x + 3." },
      { q: "Avec f(x) = x + 1 et g(x) = 2x, g ∘ f (x) vaut :", choix: ["2x + 1", "2x + 2", "x + 2", "2x"], bonne: 1, explication: "g(f(x)) = 2(x + 1)." },
      { q: "|A| = 3 et |B| = 4. |A × B| vaut :", choix: ["7", "12", "1", "64"], bonne: 1, explication: "Produit des cardinaux." },
    ],
  },

  3: {
    titre: "Les suites numériques",
    description: "Suites numériques : arithmétiques et géométriques, terme général, sommes, convergence, suites arithmético-géométriques et applications économiques corrigées.",
    resume: md`
## L'essentiel — Les suites

- Suite explicite ou récurrente ; croissance : signe de $u_{n+1} - u_n$.
- **Arithmétique** : $u_n = u_0 + nr$ ; somme = nombre de termes × (premier + dernier) / 2 ; intérêts simples.
- **Géométrique** : $u_n = u_0 q^n$ ; somme $u_0 (1 - q^{n+1})/(1 - q)$ ; hausse de t % : $q = 1 + t$ ; intérêts composés.
- $q^n \to 0$ si $|q| < 1$, $\to +\infty$ si $q > 1$ ; suite croissante majorée ⇒ convergente.
- **Arithmético-géométrique** $u_{n+1} = a u_n + b$ : $\ell = b / (1 - a)$ ; $u_n = \ell + (u_0 - \ell) a^n$ ; converge vers $\ell$ si $|a| < 1$.
`,
    exercices: md`
### Exercice 2 — Arithmétique

Une entreprise produit 500 unités le premier mois et augmente sa production de 40 unités par mois. Quelle production au 12e mois ? Production totale sur l'année ?

<details><summary>Voir le corrigé</summary>

$u_1 = 500$, $u_{12} = 500 + 11 \times 40 = \mathbf{940}$. Total $= 12 \times (500 + 940)/2 = \mathbf{8\,640}$ unités.

</details>

### Exercice 3 — Géométrique

La population d'une ville est de 250 000 habitants et croît de 2 % par an. Quelle sera-t-elle dans 10 ans ? Au bout de combien d'années dépassera-t-elle 300 000 habitants ?

<details><summary>Voir le corrigé</summary>

$250\,000 \times 1{,}02^{10} \approx \mathbf{304\,749}$ habitants. On cherche $n$ tel que $1{,}02^n > 1{,}2$ : $n > \ln 1{,}2 / \ln 1{,}02 \approx 9{,}2$, soit **10 ans**.

</details>
`,
    qcm: [
      { q: "Une suite où l'on ajoute toujours 5 est :", choix: ["Géométrique de raison 5", "Arithmétique de raison 5", "Constante", "Arithmético-géométrique"], bonne: 1, explication: "u(n+1) = u(n) + 5." },
      { q: "u0 = 3 et raison géométrique q = 2 : u4 vaut :", choix: ["24", "48", "11", "16"], bonne: 1, explication: "3 × 2 puissance 4." },
      { q: "La somme 2 + 4 + 6 + … + 20 vaut :", choix: ["110", "100", "120", "220"], bonne: 0, explication: "10 termes × (2 + 20) / 2." },
      { q: "Une hausse de 4 % par an correspond à une suite géométrique de raison :", choix: ["0,04", "1,04", "4", "0,96"], bonne: 1, explication: "q = 1 + t." },
      { q: "La suite 0,5 puissance n :", choix: ["Tend vers +∞", "Tend vers 0", "Tend vers 1", "N'a pas de limite"], bonne: 1, explication: "Car |q| < 1." },
      { q: "Les intérêts composés correspondent à une suite :", choix: ["Arithmétique", "Géométrique", "Constante", "Décroissante"], bonne: 1, explication: "Le capital est multiplié par (1 + t)." },
      { q: "Pour u(n+1) = 0,5 u(n) + 10, le point fixe est :", choix: ["10", "20", "5", "0"], bonne: 1, explication: "10 / (1 − 0,5)." },
      { q: "De u0 à u9, combien y a-t-il de termes ?", choix: ["9", "10", "11", "8"], bonne: 1, explication: "n + 1 termes." },
      { q: "Une suite croissante et majorée :", choix: ["Diverge toujours", "Converge", "Tend vers +∞", "Est constante"], bonne: 1, explication: "Théorème de convergence monotone." },
      { q: "10 000 DH à 10 % d'intérêts composés pendant 2 ans donnent :", choix: ["12 000", "12 100", "11 000", "12 210"], bonne: 1, explication: "10 000 × 1,1²." },
    ],
  },

  4: {
    titre: "Fonctions d'une variable réelle : limites et continuité",
    description: "Limites et continuité : ensemble de définition, formes indéterminées, croissances comparées, asymptotes, continuité et théorème des valeurs intermédiaires.",
    resume: md`
## L'essentiel — Limites et continuité

- $D_f$ : dénominateur non nul, racine d'un nombre positif, logarithme d'un nombre strictement positif.
- Formes indéterminées : $\infty - \infty$, $0 \times \infty$, $\infty/\infty$, $0/0$.
- Techniques : plus haut degré, factorisation, conjuguée, croissances comparées ($e^x$ > puissances > $\ln x$).
- Asymptotes : verticale (limite infinie en a), horizontale (limite finie en l'infini), oblique ($f - (ax + b) \to 0$).
- Continuité : $\lim_a f = f(a)$ ; prolongement par continuité.
- **TVI** : f continue sur [a, b], f(a) f(b) < 0 ⇒ au moins une racine ; unique si f strictement monotone ; dichotomie.
`,
    exercices: md`
### Exercice 2 — Formes indéterminées

Calculez : a) $\lim_{x \to 3} \frac{x^2 - 9}{x - 3}$ ; b) $\lim_{x \to +\infty} \frac{5x^3 - x}{2x^3 + 7}$ ; c) $\lim_{x \to +\infty} \frac{e^x}{x^3}$ ; d) $\lim_{x \to 0^+} x \ln x$.

<details><summary>Voir le corrigé</summary>

a) $(x - 3)(x + 3)/(x - 3) = x + 3 \to \mathbf{6}$. b) $5x^3 / 2x^3 \to \mathbf{5/2}$. c) Croissances comparées : $\mathbf{+\infty}$. d) Croissances comparées : $\mathbf{0}$.

</details>

### Exercice 3 — Coût moyen

$CT(Q) = 2Q + 400$. Écrivez le coût moyen, ses limites en $0^+$ et en $+\infty$ et interprétez les asymptotes.

<details><summary>Voir le corrigé</summary>

$CM(Q) = 2 + 400/Q$. En $0^+$ : $+\infty$ (asymptote verticale $Q = 0$ : le coût fixe pèse sur très peu d'unités). En $+\infty$ : $2$ (asymptote horizontale $y = 2$ : le coût moyen se rapproche du coût variable unitaire).

</details>
`,
    qcm: [
      { q: "L'ensemble de définition de ln(x − 2) est :", choix: ["x > 0", "x > 2", "x ≥ 2", "Tous les réels"], bonne: 1, explication: "Argument strictement positif." },
      { q: "Parmi ces formes, laquelle est indéterminée ?", choix: ["∞ + ∞", "0 / 0", "1 / ∞", "∞ × ∞"], bonne: 1, explication: "Il faut transformer l'expression." },
      { q: "La limite de (4x² + 1) / (2x² − 3) en +∞ est :", choix: ["0", "2", "+∞", "4"], bonne: 1, explication: "Rapport des termes de plus haut degré." },
      { q: "La limite de (ln x) / x en +∞ est :", choix: ["+∞", "0", "1", "−∞"], bonne: 1, explication: "Croissances comparées." },
      { q: "f(x) = 1 / (x − 5) admet une asymptote :", choix: ["Verticale x = 5", "Horizontale y = 5", "Oblique y = x", "Aucune"], bonne: 0, explication: "Limite infinie en 5." },
      { q: "Une fonction continue sur [a, b] avec f(a) < 0 < f(b) :", choix: ["N'a pas de racine", "S'annule au moins une fois sur ]a, b[", "Est croissante", "Est constante"], bonne: 1, explication: "Théorème des valeurs intermédiaires." },
      { q: "Pour garantir l'unicité de la racine, il faut en plus :", choix: ["f dérivable", "f strictement monotone", "f positive", "f paire"], bonne: 1, explication: "Corollaire du TVI." },
      { q: "La limite de (x² − 1) / (x − 1) quand x tend vers 1 vaut :", choix: ["0", "1", "2", "+∞"], bonne: 2, explication: "Factorisation : x + 1." },
      { q: "La limite de e^x en −∞ est :", choix: ["−∞", "0", "1", "+∞"], bonne: 1, explication: "Asymptote horizontale y = 0." },
      { q: "Le coût moyen 5 + 100/Q tend, quand Q tend vers +∞, vers :", choix: ["0", "5", "100", "+∞"], bonne: 1, explication: "Le coût fixe par unité devient négligeable." },
    ],
  },

  5: {
    titre: "La dérivation et ses applications économiques",
    description: "Dérivation : nombre dérivé, dérivées usuelles, règles produit, quotient et composée, tangente, coût marginal, élasticité et taux de croissance, exercices.",
    resume: md`
## L'essentiel — La dérivation

- $f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}$ : pente de la tangente ; dérivable ⇒ continue.
- Usuelles : $(x^n)' = n x^{n-1}$, $(e^x)' = e^x$, $(\ln x)' = 1/x$, $(\sqrt{x})' = 1/(2\sqrt{x})$.
- Règles : $(uv)' = u'v + uv'$ ; $(u/v)' = (u'v - uv')/v^2$ ; $(e^u)' = u'e^u$ ; $(\ln u)' = u'/u$ ; $(u^n)' = n u' u^{n-1}$.
- Tangente : $y = f'(a)(x - a) + f(a)$ ; approximation $\Delta f \approx f'(x)\Delta x$.
- Marginal = dérivée du total (Cm, Rm, Pm, Um).
- Élasticité $e = f'(x)\,x / f(x)$ (en %) ; recette maximale quand |e| = 1 ; taux de croissance $y'/y$.
`,
    exercices: md`
### Exercice 2 — Dérivées

Dérivez : a) $f(x) = 4x^3 - 5x + 7$ ; b) $g(x) = e^{2x + 1}$ ; c) $h(x) = x \ln x$ ; d) $k(x) = \sqrt{3x + 4}$.

<details><summary>Voir le corrigé</summary>

a) $12x^2 - 5$. b) $2e^{2x + 1}$. c) $\ln x + x \times \frac{1}{x} = \ln x + 1$. d) $\frac{3}{2\sqrt{3x + 4}}$.

</details>

### Exercice 3 — Élasticité d'une fonction puissance

La demande est $Q = 500\,P^{-1{,}5}$. Calculez l'élasticité-prix. Si le prix augmente de 2 %, de combien varie la quantité ?

<details><summary>Voir le corrigé</summary>

$Q' = -750\,P^{-2{,}5}$ ; $e = Q' \times P / Q = -750 P^{-1{,}5} / (500 P^{-1{,}5}) = \mathbf{-1{,}5}$, constante. Une hausse de 2 % du prix réduit la quantité d'environ $1{,}5 \times 2 = \mathbf{3\,\%}$.

</details>
`,
    qcm: [
      { q: "La dérivée de x⁵ est :", choix: ["5x⁴", "x⁴", "5x⁵", "4x⁵"], bonne: 0, explication: "n x puissance (n − 1)." },
      { q: "La dérivée de ln(x) est :", choix: ["ln x", "1 / x", "x", "e^x"], bonne: 1, explication: "Pour x > 0." },
      { q: "La dérivée de e^(3x) est :", choix: ["e^(3x)", "3e^(3x)", "3x e^(3x)", "e^3"], bonne: 1, explication: "Dérivée de la fonction intérieure." },
      { q: "La dérivée d'un produit uv est :", choix: ["u'v'", "u'v + uv'", "u'v − uv'", "(u'v − uv') / v²"], bonne: 1, explication: "Règle du produit." },
      { q: "Le coût marginal est :", choix: ["CT / Q", "La dérivée du coût total", "Le coût fixe", "Le coût moyen minimal"], bonne: 1, explication: "Coût approché d'une unité supplémentaire." },
      { q: "L'élasticité de f par rapport à x vaut :", choix: ["f'(x)", "f'(x) × x / f(x)", "f(x) / x", "x / f'(x)"], bonne: 1, explication: "Variation relative en %." },
      { q: "Pour Q = 120 − 3P, l'élasticité-prix à P = 20 vaut :", choix: ["−3", "−1", "−0,33", "0"], bonne: 1, explication: "−60 / 60." },
      { q: "La tangente à f en a a pour équation :", choix: ["y = f(a)x + f'(a)", "y = f'(a)(x − a) + f(a)", "y = f'(x)", "y = a x + f(a)"], bonne: 1, explication: "Pente f'(a), passe par (a, f(a))." },
      { q: "Pour Q = k P puissance α, l'élasticité-prix est :", choix: ["k", "α", "α − 1", "1 / α"], bonne: 1, explication: "Élasticité constante." },
      { q: "La dérivée de 1 / x est :", choix: ["1 / x²", "−1 / x²", "ln x", "−1 / x"], bonne: 1, explication: "Fonction inverse." },
    ],
  },

  6: {
    titre: "Étude de fonctions et optimisation",
    description: "Étude de fonctions : variations, extremums, dérivée seconde, convexité, inflexion, profit maximal, coût moyen minimal, fonctions de deux variables.",
    resume: md`
## L'essentiel — Étude de fonctions et optimisation

- $f' > 0$ : croissante ; $f' < 0$ : décroissante ; tableau de variations.
- Extremum : $f'(a) = 0$ (nécessaire) + changement de signe de $f'$ ou $f''(a) < 0$ (max) / $> 0$ (min) ; comparer aux bornes.
- Convexe si $f'' \ge 0$, concave si $f'' \le 0$ ; inflexion : $f''$ change de signe.
- Économie : profit max ($Rm = Cm$, $\pi'' < 0$) ; coût moyen min ($Cm = CM$) ; recette max (|e| = 1).
- Deux variables : dérivées partielles nulles ; $rt - s^2 > 0$ et $r < 0$ : maximum ; $r > 0$ : minimum ; $rt - s^2 < 0$ : point-selle.
`,
    exercices: md`
### Exercice 2 — Profit cubique

$\pi(Q) = -Q^3 + 12Q^2 + 60Q - 100$ pour $Q \ge 0$. Trouvez la production optimale, le profit maximal et le point d'inflexion.

<details><summary>Voir le corrigé</summary>

$\pi'(Q) = -3(Q - 10)(Q + 2)$ : $Q = \mathbf{10}$ ; $\pi''(10) = -36 < 0$ : maximum ; $\pi(10) = \mathbf{700}$. $\pi''(Q) = -6Q + 24 = 0 \Rightarrow Q = 4$ : inflexion, $\pi(4) = -64 + 192 + 240 - 100 = 268$.

</details>

### Exercice 3 — Deux variables

Trouvez et caractérisez le point critique de $f(x, y) = x^2 + y^2 - 4x - 6y + 20$.

<details><summary>Voir le corrigé</summary>

$f'_x = 2x - 4 = 0 \Rightarrow x = 2$ ; $f'_y = 2y - 6 = 0 \Rightarrow y = 3$. $r = 2$, $s = 0$, $t = 2$ : $rt - s^2 = 4 > 0$ et $r > 0$ : **minimum**, $f(2, 3) = 4 + 9 - 8 - 18 + 20 = \mathbf{7}$.

</details>
`,
    qcm: [
      { q: "Si f'(x) > 0 sur un intervalle, f y est :", choix: ["Décroissante", "Croissante", "Constante", "Convexe"], bonne: 1, explication: "Signe de la dérivée." },
      { q: "f'(a) = 0 et f''(a) < 0 : en a, f admet :", choix: ["Un minimum local", "Un maximum local", "Un point d'inflexion", "Rien"], bonne: 1, explication: "Condition du second ordre." },
      { q: "La fonction x³ en 0 :", choix: ["A un maximum", "A un minimum", "A une dérivée nulle sans extremum", "N'est pas dérivable"], bonne: 2, explication: "La dérivée ne change pas de signe." },
      { q: "Une fonction est convexe si :", choix: ["f'' ≥ 0", "f'' ≤ 0", "f' ≥ 0", "f ≥ 0"], bonne: 0, explication: "Courbe au-dessus de ses tangentes." },
      { q: "Un point d'inflexion correspond à :", choix: ["f' = 0", "Un changement de signe de f''", "Un maximum", "Une asymptote"], bonne: 1, explication: "Changement de convexité." },
      { q: "Le coût moyen est minimal lorsque :", choix: ["Cm = 0", "Cm = CM", "CT = 0", "CM = 0"], bonne: 1, explication: "CM' = 0." },
      { q: "Le profit est maximal lorsque :", choix: ["Rm = Cm et π'' < 0", "RT = CT", "Cm = 0", "Rm = 0"], bonne: 0, explication: "Condition du premier et du second ordre." },
      { q: "Pour CT = Q² + 4Q + 64, le coût moyen minimal est atteint en Q égal à :", choix: ["4", "8", "16", "64"], bonne: 1, explication: "1 − 64/Q² = 0." },
      { q: "Pour une fonction de deux variables, rt − s² < 0 indique :", choix: ["Un maximum", "Un minimum", "Un point-selle", "Une asymptote"], bonne: 2, explication: "Ni maximum ni minimum." },
      { q: "La dérivée partielle de x²y par rapport à x est :", choix: ["x²", "2xy", "2x", "y"], bonne: 1, explication: "y est traité comme une constante." },
    ],
  },

  7: {
    titre: "Matrices et calcul matriciel",
    description: "Matrices : types, transposée, somme, produit matriciel, déterminant d'ordre 2 et 3, inverse par la comatrice, rang et modèle de Leontief, exercices corrigés.",
    resume: md`
## L'essentiel — Matrices

- Types : carrée, identité, diagonale, triangulaire, vecteur ; transposée $A^T$.
- Produit $AB$ : colonnes de A = lignes de B ; $(AB)_{ij} = \sum_k a_{ik} b_{kj}$ ; **non commutatif**.
- Déterminant : ordre 2 : $ad - bc$ ; ordre 3 : développement avec signes $(-1)^{i+j}$ ; $\det(AB) = \det A \det B$.
- Inversible ⇔ $\det A \neq 0$ ; ordre 2 : $\frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$ ; ordre 3 : transposée de la comatrice divisée par le déterminant.
- Rang : nombre de lignes indépendantes.
- Leontief : $x = (I - A)^{-1} d$.
`,
    exercices: md`
### Exercice 2 — Produit et transposée

$M = \begin{pmatrix} 1 & -1 \\ 2 & 0 \\ 3 & 1 \end{pmatrix}$ et $N = \begin{pmatrix} 2 & 1 & 0 \\ 1 & 3 & -1 \end{pmatrix}$. Calculez $MN$ (type ?) et $M^T$.

<details><summary>Voir le corrigé</summary>

$MN$ est de type $(3, 3)$ : $\begin{pmatrix} 1 & -2 & 1 \\ 4 & 2 & 0 \\ 7 & 6 & -1 \end{pmatrix}$. $M^T = \begin{pmatrix} 1 & 2 & 3 \\ -1 & 0 & 1 \end{pmatrix}$.

</details>

### Exercice 3 — Inversibilité

Pour quelles valeurs de $k$ la matrice $\begin{pmatrix} k & 2 \\ 3 & k - 1 \end{pmatrix}$ est-elle inversible ?

<details><summary>Voir le corrigé</summary>

$\det = k(k - 1) - 6 = k^2 - k - 6 = (k - 3)(k + 2)$. Inversible si et seulement si $k \neq 3$ et $k \neq -2$.

</details>
`,
    qcm: [
      { q: "Le produit AB est défini si :", choix: ["A et B sont carrées", "Le nombre de colonnes de A égale le nombre de lignes de B", "A et B ont le même type", "Toujours"], bonne: 1, explication: "Ligne × colonne." },
      { q: "Le déterminant de la matrice (3, 2 ; 1, 4) vaut :", choix: ["10", "14", "12", "5"], bonne: 0, explication: "3 × 4 − 2 × 1." },
      { q: "Une matrice carrée est inversible si et seulement si :", choix: ["Elle est diagonale", "Son déterminant est non nul", "Elle est symétrique", "Ses termes sont positifs"], bonne: 1, explication: "Critère du déterminant." },
      { q: "Le produit matriciel est en général :", choix: ["Commutatif", "Non commutatif", "Impossible", "Égal à la somme"], bonne: 1, explication: "AB diffère de BA." },
      { q: "Une matrice (2, 3) multipliée par une matrice (3, 4) donne une matrice :", choix: ["(2, 4)", "(3, 3)", "(4, 2)", "(2, 3)"], bonne: 0, explication: "Lignes de A, colonnes de B." },
      { q: "Si deux lignes d'une matrice sont égales, son déterminant est :", choix: ["1", "Nul", "Négatif", "Infini"], bonne: 1, explication: "Lignes dépendantes." },
      { q: "L'inverse de (2, 0 ; 0, 4) est :", choix: ["(0,5 ; 0 ; 0 ; 0,25)", "(2, 0 ; 0, 4)", "(−2, 0 ; 0, −4)", "Elle n'existe pas"], bonne: 0, explication: "Inverse des termes diagonaux." },
      { q: "Dans le modèle de Leontief, la production vaut :", choix: ["A d", "(I − A)⁻¹ d", "(I + A) d", "d − A"], bonne: 1, explication: "x = A x + d." },
      { q: "det(AB) est égal à :", choix: ["det A + det B", "det A × det B", "det A − det B", "0"], bonne: 1, explication: "Propriété multiplicative." },
      { q: "Le cofacteur C12 d'une matrice 3 × 3 porte le signe :", choix: ["+", "−", "Celui de a12", "Aucun"], bonne: 1, explication: "(−1) puissance (1 + 2)." },
    ],
  },

  8: {
    titre: "Les systèmes d'équations linéaires",
    description: "Systèmes linéaires : écriture matricielle, méthode de Cramer, pivot de Gauss, méthode de l'inverse, discussion et applications économiques corrigées.",
    resume: md`
## L'essentiel — Systèmes linéaires

- Forme matricielle $AX = B$ ; système de Cramer si $\det A \neq 0$ : solution unique $X = A^{-1}B$.
- **Cramer** : $x_i = \det A_i / \det A$ ($A_i$ : colonne i remplacée par B).
- **Gauss** : opérations élémentaires sur les lignes (second membre compris) → système triangulaire → remontée.
- $\det A = 0$ : infinité de solutions (équations compatibles) ou aucune (on obtient $0 = c$, $c \neq 0$).
- Applications : équilibre de marchés liés, plan de production, répartition de charges, Leontief.
- Toujours vérifier la solution dans toutes les équations.
`,
    exercices: md`
### Exercice 2 — Cramer

Résolvez par Cramer : $3x + 2y = 16$ et $x - 4y = -4$.

<details><summary>Voir le corrigé</summary>

$\det = -12 - 2 = -14$. $x = \frac{16 \times (-4) - 2 \times (-4)}{-14} = \frac{-64 + 8}{-14} = \mathbf{4}$ ; $y = \frac{3 \times (-4) - 16 \times 1}{-14} = \frac{-28}{-14} = \mathbf{2}$. Vérification : $12 + 4 = 16$ ✓ ; $4 - 8 = -4$ ✓.

</details>

### Exercice 3 — Marchés liés

$Q_{d1} = 60 - 2P_1 + P_2$, $Q_{o1} = 3P_1 - 10$ ; $Q_{d2} = 50 + P_1 - 3P_2$, $Q_{o2} = 2P_2 - 5$. Trouvez les prix d'équilibre.

<details><summary>Voir le corrigé</summary>

Système : $5P_1 - P_2 = 70$ et $-P_1 + 5P_2 = 55$. $\det = 24$. $P_1 = (70 \times 5 + 55)/24 = 405/24 = \mathbf{16{,}875}$ ; $P_2 = (5 \times 55 + 70)/24 = 345/24 = \mathbf{14{,}375}$. Quantités : $Q_1 = 3 \times 16{,}875 - 10 = 40{,}625$ ; $Q_2 = 2 \times 14{,}375 - 5 = 23{,}75$.

</details>
`,
    qcm: [
      { q: "Un système est de Cramer si :", choix: ["det A = 0", "det A ≠ 0", "B = 0", "A est diagonale"], bonne: 1, explication: "Solution unique." },
      { q: "Dans la méthode de Cramer, x vaut :", choix: ["det A / det Ax", "det Ax / det A", "det A × det Ax", "B / A"], bonne: 1, explication: "Colonne de x remplacée par B." },
      { q: "Le système x + y = 3 et x − y = 1 a pour solution :", choix: ["(2 ; 1)", "(1 ; 2)", "(3 ; 0)", "(0 ; 3)"], bonne: 0, explication: "Addition des deux équations : 2x = 4." },
      { q: "Si det A = 0, le système :", choix: ["A toujours une solution unique", "A une infinité de solutions ou aucune", "N'a jamais de solution", "A deux solutions"], bonne: 1, explication: "À discuter par Gauss." },
      { q: "Le pivot de Gauss vise à obtenir un système :", choix: ["Diagonal par colonnes", "Triangulaire", "Sans second membre", "Symétrique"], bonne: 1, explication: "Puis remontée." },
      { q: "Une opération élémentaire autorisée est :", choix: ["Multiplier une ligne par 0", "Ajouter à une ligne un multiple d'une autre", "Supprimer une inconnue", "Changer le second membre seul"], bonne: 1, explication: "Elle conserve les solutions." },
      { q: "x + 2y = 4 et 2x + 4y = 9 :", choix: ["Solution unique", "Infinité de solutions", "Aucune solution", "x = 0"], bonne: 2, explication: "Droites parallèles distinctes." },
      { q: "Si A est inversible, la solution de AX = B est :", choix: ["X = BA⁻¹", "X = A⁻¹B", "X = AB", "X = B − A"], bonne: 1, explication: "L'ordre des facteurs compte." },
      { q: "Pour le système 2x + 3y = 12 et x − y = 1, det A vaut :", choix: ["5", "−5", "1", "−1"], bonne: 1, explication: "2 × (−1) − 3 × 1." },
      { q: "Après résolution, il faut toujours :", choix: ["Arrondir", "Vérifier la solution dans toutes les équations", "Calculer l'inverse", "Changer de méthode"], bonne: 1, explication: "Contrôle indispensable." },
    ],
  },
};

export default chapitres;
