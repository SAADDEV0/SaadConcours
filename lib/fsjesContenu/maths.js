// Mathématiques (S1) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
// Chapitres 9 et 10 (intégrales, deux variables) ajoutés le 2026-11-21 ; 11 et 12 (intégrales généralisées,
// suites récurrentes, séries) approfondissent pour la prépa ECT (épreuve de mathématiques du CNAEM).
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

  9: {
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

**3)** Surplus total : $400 + 200 = \mathbf{600}$ (en unités de prix × quantité, soit 600 × 100 × 100 = 6 millions de DH). C'est le gain que l'échange procure à l'ensemble des acheteurs et des vendeurs ; il est maximal à l'équilibre concurrentiel, ce que le cours de Microéconomie utilise pour mesurer la perte sèche d'une taxe.

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

  10: {
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

  11: {
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

**2)** Avec $u = x^{n+1}$, $v' = e^x$ : $K_{n+1} = \big[x^{n+1}e^x\big]_0^1 - (n + 1)\displaystyle\int_0^1 x^ne^x dx = e - (n + 1)K_n$. Donc $K_1 = e - (e - 1) = \mathbf{1}$ et $K_2 = e - 2 \approx \mathbf{0{,}718}$ (on retrouve l'exercice 2 du chapitre 9).

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

  12: {
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
