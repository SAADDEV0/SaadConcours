// Mathématiques (S1) — compléments par chapitre.
const md = String.raw;

export default {
  1: {
    titre: "Logique et raisonnement mathématique",
    resume: md`
## L'essentiel — Logique

- Connecteurs : $\neg P$, $P \wedge Q$, $P \vee Q$, $P \Rightarrow Q$ (fausse **seulement** si $P$ vraie et $Q$ fausse), $P \Leftrightarrow Q$.
- **De Morgan** : $\neg(P \wedge Q) \equiv \neg P \vee \neg Q$ ; $\neg(P \vee Q) \equiv \neg P \wedge \neg Q$.
- **Contraposée** : $(P \Rightarrow Q) \equiv (\neg Q \Rightarrow \neg P)$ ; la **réciproque** $Q \Rightarrow P$ n'est pas équivalente.
- $\neg(P \Rightarrow Q) \equiv P \wedge \neg Q$.
- Négation : $\neg(\forall x, P(x)) \equiv \exists x, \neg P(x)$ et $\neg(\exists x, P(x)) \equiv \forall x, \neg P(x)$ ; l'**ordre** des quantificateurs compte.
- Raisonnements : direct, contraposée, absurde, disjonction de cas, **contre-exemple**, **récurrence** (initialisation + hérédité).
`,
    exercices: md`
### Exercice 2 — Négations et récurrence

1. Écrivez la négation de : a) « $\forall x \in \mathbb{R},\; x^2 \geq 0$ » ; b) « $\exists n \in \mathbb{N},\; n > 100$ » ; c) « S'il pleut, alors je prends mon parapluie ».
2. Donnez la contraposée et la réciproque de : « Si un nombre est divisible par 4, alors il est pair ». Laquelle est vraie ?
3. Montrez par récurrence que, pour tout $n \geq 1$ : $1 + 2 + \dots + n = \dfrac{n(n+1)}{2}$.

<details><summary>Voir le corrigé</summary>

**1)** a) $\exists x \in \mathbb{R},\; x^2 < 0$ ; b) $\forall n \in \mathbb{N},\; n \leq 100$ ; c) « Il pleut **et** je ne prends pas mon parapluie ».

**2)** Contraposée : « Si un nombre n'est pas pair, il n'est pas divisible par 4 » (**vraie**). Réciproque : « Si un nombre est pair, il est divisible par 4 » (**fausse** : 6 est pair mais non divisible par 4).

**3)** **Initialisation** : pour $n = 1$, $1 = \dfrac{1 \times 2}{2}$ ✓. **Hérédité** : si $1 + \dots + n = \dfrac{n(n+1)}{2}$, alors $1 + \dots + n + (n+1) = \dfrac{n(n+1)}{2} + (n+1) = \dfrac{(n+1)(n+2)}{2}$ ✓. La propriété est vraie pour tout $n \geq 1$.

</details>
`,
    qcm: [
      { q: "L'implication P ⇒ Q est fausse lorsque :", choix: ["P et Q sont fausses", "P est vraie et Q fausse", "P est fausse et Q vraie", "P et Q sont vraies"], bonne: 1, explication: "C'est le seul cas." },
      { q: "La négation de « ∀x, P(x) » est :", choix: ["∀x, non P(x)", "∃x, non P(x)", "∃x, P(x)", "Non ∃x, P(x)"], bonne: 1, explication: "On change le quantificateur et on nie la propriété." },
      { q: "La contraposée de P ⇒ Q est :", choix: ["Q ⇒ P", "non Q ⇒ non P", "non P ⇒ non Q", "P et non Q"], bonne: 1, explication: "Elle lui est toujours équivalente." },
      { q: "Pour réfuter « tout nombre premier est impair », il suffit :", choix: ["D'une démonstration par récurrence", "D'un contre-exemple (2)", "D'une contraposée", "De rien"], bonne: 1, explication: "2 est premier et pair." },
      { q: "Selon De Morgan, non (P ou Q) équivaut à :", choix: ["non P ou non Q", "non P et non Q", "P et Q", "P ⇒ Q"], bonne: 1, explication: "Le « ou » devient « et »." },
    ],
  },

  2: {
    titre: "Ensembles, relations et applications",
    resume: md`
## L'essentiel — Ensembles et applications

- Appartenance $\in$, inclusion $\subset$, ensemble vide ; si $\text{card}(E) = n$, $\text{card}(\mathcal{P}(E)) = 2^n$.
- Opérations : réunion, intersection, différence, complémentaire, produit cartésien ; **De Morgan** : $\overline{A \cup B} = \bar{A} \cap \bar{B}$.
- $\text{card}(A \cup B) = \text{card}(A) + \text{card}(B) - \text{card}(A \cap B)$.
- Application **injective** (images distinctes), **surjective** (tout élément atteint), **bijective** (les deux : réciproque $f^{-1}$).
- Relation d'**équivalence** : réflexive, symétrique, transitive ; relation d'**ordre** : réflexive, antisymétrique, transitive.
`,
    exercices: md`
### Exercice 2 — Opérations et bijection

1. $A = \{1, 2, 3, 4\}$ et $B = \{3, 4, 5\}$. Déterminez $A \cup B$, $A \cap B$, $A \setminus B$ et vérifiez la formule du cardinal de la réunion. Combien $A$ a-t-il de parties ?
2. Dans une promotion de 120 étudiants, 70 suivent l'option finance, 50 l'option marketing et 20 les deux. Combien ne suivent aucune de ces options ?
3. Montrez que $f : \mathbb{R} \to \mathbb{R}$, $f(x) = 2x + 3$ est bijective et donnez sa réciproque. $g(x) = x^2$ est-elle injective sur $\mathbb{R}$ ?

<details><summary>Voir le corrigé</summary>

**1)** $A \cup B = \{1, 2, 3, 4, 5\}$ ; $A \cap B = \{3, 4\}$ ; $A \setminus B = \{1, 2\}$. $4 + 3 - 2 = 5$ ✓. $\text{card}(\mathcal{P}(A)) = 2^4 = 16$.

**2)** $70 + 50 - 20 = 100$ suivent au moins une option ; $120 - 100 = 20$ n'en suivent aucune.

**3)** Pour tout $y$, $2x + 3 = y$ a une unique solution $x = \dfrac{y - 3}{2}$ : $f$ est bijective et $f^{-1}(y) = \dfrac{y - 3}{2}$. $g$ n'est pas injective : $g(-2) = g(2) = 4$.

</details>
`,
    qcm: [
      { q: "Si E a 5 éléments, P(E) en a :", choix: ["10", "25", "32", "5"], bonne: 2, explication: "2⁵ = 32." },
      { q: "A ∩ B est l'ensemble des éléments :", choix: ["De A ou de B", "De A et de B", "De A mais pas de B", "Ni de A ni de B"], bonne: 1, explication: "Intersection." },
      { q: "Une application bijective est :", choix: ["Injective seulement", "Surjective seulement", "Injective et surjective", "Ni l'une ni l'autre"], bonne: 2, explication: "Chaque image a exactement un antécédent." },
      { q: "card(A) = 8, card(B) = 5, card(A ∩ B) = 3 : card(A ∪ B) =", choix: ["13", "10", "16", "5"], bonne: 1, explication: "8 + 5 − 3." },
      { q: "Une relation réflexive, antisymétrique et transitive est une relation :", choix: ["D'équivalence", "D'ordre", "Symétrique", "Vide"], bonne: 1, explication: "Exemple : ≤ sur ℝ." },
    ],
  },

  3: {
    titre: "Les suites numériques",
    resume: md`
## L'essentiel — Les suites

- Suite définie **explicitement** ($u_n = f(n)$) ou **par récurrence** ($u_{n+1} = f(u_n)$).
- **Arithmétique** : $u_{n+1} = u_n + r$ ; $u_n = u_0 + nr$ ; somme $= \text{nombre de termes} \times \dfrac{\text{premier} + \text{dernier}}{2}$.
- **Géométrique** : $u_{n+1} = q\,u_n$ ; $u_n = u_0 q^n$ ; somme de $n$ termes $= u_0 \dfrac{1 - q^n}{1 - q}$ ($q \neq 1$).
- Monotonie : signe de $u_{n+1} - u_n$ (ou rapport $u_{n+1} / u_n$ pour une suite positive).
- Convergence : $q^n \to 0$ si $|q| < 1$ ; une suite croissante et majorée converge.
- Applications : intérêts simples (arithmétique), intérêts composés (géométrique).
`,
    exercices: md`
### Exercice 2 — Salaire et épargne

1. Un salaire annuel est de 60 000 DH la première année ($u_0$) et augmente de 2 400 DH par an. Donnez $u_n$, le salaire de la 11ᵉ année ($u_{10}$) et le total perçu sur les 10 premières années.
2. Un capital de 10 000 DH est placé à 5 % par an (intérêts composés). Donnez $C_n$ et $C_{10}$.
3. Étudiez la limite de $v_n = \dfrac{2n + 1}{n + 3}$.

<details><summary>Voir le corrigé</summary>

**1)** Suite arithmétique de raison 2 400 : $u_n = 60\,000 + 2\,400n$ ; $u_{10} = 84\,000$ DH. Total des années 1 à 10 ($u_0$ à $u_9$) : $10 \times \dfrac{60\,000 + 81\,600}{2} = 708\,000$ DH.

**2)** Suite géométrique de raison 1,05 : $C_n = 10\,000 \times 1{,}05^n$ ; $C_{10} \approx 16\,289$ DH.

**3)** $v_n = \dfrac{n(2 + 1/n)}{n(1 + 3/n)} \to 2$.

</details>
`,
    qcm: [
      { q: "Une suite arithmétique de premier terme 5 et de raison 3 a pour 10ᵉ terme (u₉) :", choix: ["30", "32", "35", "27"], bonne: 1, explication: "5 + 9 × 3 = 32." },
      { q: "La suite uₙ = 3 × 2ⁿ est :", choix: ["Arithmétique de raison 2", "Géométrique de raison 2", "Constante", "Décroissante"], bonne: 1, explication: "Chaque terme est multiplié par 2." },
      { q: "La suite (0,5)ⁿ :", choix: ["Tend vers l'infini", "Tend vers 0", "Tend vers 1", "N'a pas de limite"], bonne: 1, explication: "|q| < 1." },
      { q: "Les intérêts composés correspondent à une suite :", choix: ["Arithmétique", "Géométrique", "Constante", "Alternée"], bonne: 1, explication: "Cₙ = C₀(1 + t)ⁿ." },
      { q: "1 + 2 + 4 + … + 2⁹ vaut :", choix: ["1 023", "512", "1 024", "2 047"], bonne: 0, explication: "(2¹⁰ − 1)/(2 − 1) = 1 023." },
    ],
  },

  4: {
    titre: "Fonctions d'une variable réelle : limites et continuité",
    resume: md`
## L'essentiel — Limites et continuité

- **Domaine de définition** : attention aux dénominateurs nuls, racines de nombres négatifs, logarithmes de nombres négatifs ou nuls.
- Limites usuelles : $\dfrac{1}{x} \to 0$ en $\pm\infty$ ; $e^x \to +\infty$ en $+\infty$ ; $\ln x \to -\infty$ en $0^+$.
- Formes indéterminées : $\dfrac{0}{0}$, $\dfrac{\infty}{\infty}$, $\infty - \infty$, $0 \times \infty$ ; on factorise ou on simplifie.
- Polynôme ou fraction rationnelle en $\pm\infty$ : on garde les termes de plus haut degré.
- **Croissances comparées** : l'exponentielle l'emporte sur les puissances, qui l'emportent sur le logarithme.
- **Continuité** en $a$ : $\lim_{x \to a} f(x) = f(a)$.
`,
    exercices: md`
### Exercice 2 — Lever les indéterminations

1. Calculez : a) $\lim_{x \to +\infty} \dfrac{3x^2 - x + 1}{x^2 + 2}$ ; b) $\lim_{x \to 2} \dfrac{x^2 - 4}{x - 2}$ ; c) $\lim_{x \to +\infty} \dfrac{e^x}{x^3}$.
2. Donnez le domaine de définition de $f(x) = \ln(x - 1)$ et de $g(x) = \dfrac{1}{x^2 - 9}$.
3. Soit $h(x) = \dfrac{x^2 - 1}{x - 1}$ pour $x \neq 1$ et $h(1) = a$. Quelle valeur donner à $a$ pour que $h$ soit continue en 1 ?

<details><summary>Voir le corrigé</summary>

**1)** a) Termes dominants : $\dfrac{3x^2}{x^2} \to 3$ ; b) $\dfrac{(x - 2)(x + 2)}{x - 2} = x + 2 \to 4$ ; c) croissances comparées : $+\infty$.

**2)** $D_f = \,]1 \;;\; +\infty[$ ; $D_g = \mathbb{R} \setminus \{-3 \;;\; 3\}$.

**3)** Pour $x \neq 1$, $h(x) = x + 1 \to 2$ : il faut $a = 2$.

</details>
`,
    qcm: [
      { q: "La limite de (5x³ + x)/(2x³ − 1) en +∞ est :", choix: ["0", "5/2", "+∞", "5"], bonne: 1, explication: "Rapport des termes de plus haut degré." },
      { q: "0/0 est :", choix: ["Égal à 0", "Égal à 1", "Une forme indéterminée", "Impossible"], bonne: 2, explication: "Il faut factoriser ou simplifier." },
      { q: "Le domaine de définition de ln(x) est :", choix: ["ℝ", "]0 ; +∞[", "[0 ; +∞[", "ℝ*"], bonne: 1, explication: "Le logarithme n'est défini que pour x > 0." },
      { q: "La limite de ln(x)/x en +∞ est :", choix: ["+∞", "0", "1", "−∞"], bonne: 1, explication: "La puissance l'emporte sur le logarithme." },
      { q: "f est continue en a si :", choix: ["f(a) existe seulement", "lim f(x) en a = f(a)", "f est dérivable ailleurs", "f(a) = 0"], bonne: 1, explication: "Pas de « saut » en a." },
    ],
  },

  5: {
    titre: "La dérivation et ses applications économiques",
    resume: md`
## L'essentiel — Dérivation

- $f'(a) = \lim_{h \to 0} \dfrac{f(a + h) - f(a)}{h}$ : pente de la tangente, taux de variation instantané.
- Règles : $(u + v)' = u' + v'$ ; $(uv)' = u'v + uv'$ ; $\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$ ; $(e^u)' = u'e^u$ ; $(\ln u)' = \dfrac{u'}{u}$ ; $(x^n)' = nx^{n-1}$.
- **Grandeurs marginales** : coût marginal $Cm = CT'(q)$, recette marginale $Rm = RT'(q)$, profit marginal.
- **Élasticité** : $e = f'(x) \times \dfrac{x}{f(x)}$ ; variation en % de $f$ pour 1 % de variation de $x$.
`,
    exercices: md`
### Exercice 2 — Dérivées, coût marginal et élasticité

1. Dérivez : a) $f(x) = (2x + 1)e^x$ ; b) $g(x) = \ln(x^2 + 1)$ ; c) $h(x) = \dfrac{x}{x + 1}$.
2. $CT(q) = q^3 - 3q^2 + 5q + 20$. Calculez le coût marginal et sa valeur pour $q = 10$.
3. La demande est $D(p) = 200 - 4p$. Calculez l'élasticité-prix pour $p = 30$ et interprétez.

<details><summary>Voir le corrigé</summary>

**1)** a) $f'(x) = 2e^x + (2x + 1)e^x = (2x + 3)e^x$ ; b) $g'(x) = \dfrac{2x}{x^2 + 1}$ ; c) $h'(x) = \dfrac{(x + 1) - x}{(x + 1)^2} = \dfrac{1}{(x + 1)^2}$.

**2)** $Cm(q) = 3q^2 - 6q + 5$ ; $Cm(10) = 300 - 60 + 5 = 245$ : la 11ᵉ unité coûte environ 245 DH.

**3)** $D(30) = 80$ ; $e = -4 \times \dfrac{30}{80} = -1{,}5$ : une hausse de 1 % du prix fait baisser la demande de 1,5 % (demande élastique).

</details>
`,
    qcm: [
      { q: "La dérivée de x⁴ est :", choix: ["x³", "4x³", "4x⁴", "x⁵/5"], bonne: 1, explication: "(xⁿ)' = nxⁿ⁻¹." },
      { q: "La dérivée de ln(3x) est :", choix: ["1/(3x)", "1/x", "3/x²", "3 ln x"], bonne: 1, explication: "u'/u = 3/(3x) = 1/x." },
      { q: "Le coût marginal est :", choix: ["CT / q", "La dérivée du coût total", "Le coût fixe", "CT − CV"], bonne: 1, explication: "Coût approximatif d'une unité supplémentaire." },
      { q: "La dérivée de e^(2x) est :", choix: ["e^(2x)", "2e^(2x)", "2x e^(2x)", "e^x"], bonne: 1, explication: "(e^u)' = u'e^u." },
      { q: "Une élasticité de −0,5 signifie qu'une hausse de 10 % du prix fait :", choix: ["Baisser la demande de 5 %", "Baisser la demande de 50 %", "Monter la demande de 5 %", "Baisser la demande de 0,5 %"], bonne: 0, explication: "−0,5 × 10 % = −5 %." },
    ],
  },

  6: {
    titre: "Étude de fonctions et optimisation",
    resume: md`
## L'essentiel — Étude de fonctions

- Sens de variation : $f' > 0$ croissante, $f' < 0$ décroissante.
- **Extremum** en $a$ : $f'(a) = 0$ avec changement de signe ; $f''(a) < 0$ maximum, $f''(a) > 0$ minimum.
- **Convexité** : $f'' > 0$ convexe, $f'' < 0$ concave ; **point d'inflexion** quand $f''$ change de signe.
- Asymptotes : verticale ($x = a$), horizontale ($y = b$), oblique.
- Plan type : domaine → limites → dérivée et variations → extremums → convexité → courbe.
- Économie : profit maximal quand $\pi'(q) = 0$, soit $Rm = Cm$.
`,
    exercices: md`
### Exercice 2 — Maximiser un profit, étudier une cubique

1. Le profit d'une entreprise est $\pi(q) = -2q^2 + 120q - 1\,000$. Déterminez la quantité qui maximise le profit et le profit maximal ; vérifiez qu'il s'agit bien d'un maximum.
2. Étudiez $f(x) = x^3 - 3x$ : dérivée, variations, extremums locaux et point d'inflexion.

<details><summary>Voir le corrigé</summary>

**1)** $\pi'(q) = -4q + 120 = 0$, donc $q = 30$ ; $\pi''(q) = -4 < 0$ : c'est un **maximum**. $\pi(30) = -1\,800 + 3\,600 - 1\,000 = 800$.

**2)** $f'(x) = 3x^2 - 3 = 3(x - 1)(x + 1)$ : $f$ croît sur $]-\infty ; -1]$, décroît sur $[-1 ; 1]$, croît sur $[1 ; +\infty[$. Maximum local $f(-1) = 2$ ; minimum local $f(1) = -2$. $f''(x) = 6x$ change de signe en 0 : point d'inflexion $(0 ; 0)$.

</details>
`,
    qcm: [
      { q: "Si f'(a) = 0 et f''(a) < 0, f admet en a :", choix: ["Un minimum local", "Un maximum local", "Un point d'inflexion", "Une asymptote"], bonne: 1, explication: "La fonction est concave en a." },
      { q: "Une fonction de dérivée seconde positive est :", choix: ["Concave", "Convexe", "Décroissante", "Constante"], bonne: 1, explication: "Sa courbe est au-dessus de ses tangentes." },
      { q: "Le profit est maximal lorsque :", choix: ["RT est maximale", "Rm = Cm", "CT est minimal", "p = 0"], bonne: 1, explication: "π'(q) = Rm − Cm = 0." },
      { q: "f(x) = 1/(x − 2) admet une asymptote verticale d'équation :", choix: ["y = 2", "x = 2", "x = 0", "y = 0"], bonne: 1, explication: "Le dénominateur s'annule en 2." },
      { q: "π(q) = −q² + 40q : la quantité optimale est :", choix: ["40", "20", "10", "400"], bonne: 1, explication: "π'(q) = −2q + 40 = 0." },
    ],
  },

  7: {
    titre: "Matrices et calcul matriciel",
    resume: md`
## L'essentiel — Matrices

- Matrice $n \times p$ : $n$ lignes, $p$ colonnes ; matrices carrée, identité $I$, diagonale, transposée $A^T$.
- Addition terme à terme (mêmes dimensions) ; produit $AB$ possible si le nombre de colonnes de $A$ = nombre de lignes de $B$ ; en général $AB \neq BA$.
- Déterminant $2 \times 2$ : $\det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$ ; en $3 \times 3$ : développement ou règle de Sarrus.
- $A$ inversible si et seulement si $\det A \neq 0$ ; en $2 \times 2$ : $A^{-1} = \dfrac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$.
- **Rang** : nombre maximal de lignes (ou colonnes) linéairement indépendantes.
`,
    exercices: md`
### Exercice 2 — Produit, déterminant et inverse

$A = \begin{pmatrix} 2 & 1 \\ 3 & 4 \end{pmatrix}$ et $B = \begin{pmatrix} 1 & 0 \\ -1 & 2 \end{pmatrix}$.

1. Calculez $A + B$ et $AB$.
2. Calculez $\det A$ et $A^{-1}$ ; vérifiez que $AA^{-1} = I$.
3. Une entreprise vend 2 produits dans 2 magasins. Les quantités sont $Q = \begin{pmatrix} 10 & 20 \\ 30 & 5 \end{pmatrix}$ (lignes : magasins ; colonnes : produits) et les prix $P = \begin{pmatrix} 50 \\ 80 \end{pmatrix}$. Calculez $QP$ et interprétez.

<details><summary>Voir le corrigé</summary>

**1)** $A + B = \begin{pmatrix} 3 & 1 \\ 2 & 6 \end{pmatrix}$ ; $AB = \begin{pmatrix} 2 - 1 & 0 + 2 \\ 3 - 4 & 0 + 8 \end{pmatrix} = \begin{pmatrix} 1 & 2 \\ -1 & 8 \end{pmatrix}$.

**2)** $\det A = 8 - 3 = 5$ ; $A^{-1} = \dfrac{1}{5}\begin{pmatrix} 4 & -1 \\ -3 & 2 \end{pmatrix}$ ; $AA^{-1} = \dfrac{1}{5}\begin{pmatrix} 5 & 0 \\ 0 & 5 \end{pmatrix} = I$ ✓.

**3)** $QP = \begin{pmatrix} 10 \times 50 + 20 \times 80 \\ 30 \times 50 + 5 \times 80 \end{pmatrix} = \begin{pmatrix} 2\,100 \\ 1\,900 \end{pmatrix}$ : chiffre d'affaires de chaque magasin.

</details>
`,
    qcm: [
      { q: "Le produit AB existe si :", choix: ["A et B ont la même taille", "Le nombre de colonnes de A égale le nombre de lignes de B", "A et B sont carrées", "Toujours"], bonne: 1, explication: "Condition de compatibilité." },
      { q: "Le déterminant de [[3, 2], [1, 4]] vaut :", choix: ["14", "10", "12", "−10"], bonne: 1, explication: "3 × 4 − 2 × 1 = 10." },
      { q: "Une matrice est inversible si et seulement si :", choix: ["Elle est carrée", "Son déterminant est non nul", "Elle est diagonale", "Elle contient des zéros"], bonne: 1, explication: "det A ≠ 0." },
      { q: "En général, le produit matriciel est :", choix: ["Commutatif", "Non commutatif", "Toujours nul", "Égal à la somme"], bonne: 1, explication: "AB ≠ BA le plus souvent." },
      { q: "Le produit d'une matrice 2 × 3 par une matrice 3 × 4 est une matrice :", choix: ["3 × 3", "2 × 4", "4 × 2", "2 × 3"], bonne: 1, explication: "Lignes de A, colonnes de B." },
    ],
  },

  8: {
    titre: "Les systèmes d'équations linéaires",
    resume: md`
## L'essentiel — Systèmes linéaires

- Écriture matricielle : $AX = B$ ; si $\det A \neq 0$, solution unique $X = A^{-1}B$.
- **Cramer** : $x_i = \dfrac{\det A_i}{\det A}$, où $A_i$ remplace la $i$-ème colonne par $B$.
- **Pivot de Gauss** : combinaisons de lignes pour obtenir un système triangulaire, puis remontée.
- Discussion : $\det A \neq 0$ → solution **unique** ; $\det A = 0$ → **aucune** ou une **infinité** de solutions.
- Applications : équilibre de plusieurs marchés, programmes de production, répartitions.
`,
    exercices: md`
### Exercice 2 — Cramer et Gauss

1. Résolvez par la méthode de Cramer : $\begin{cases} 2x + y = 7 \\ x - y = -1 \end{cases}$.
2. Résolvez par le pivot de Gauss : $\begin{cases} x + y + z = 6 \\ 2x - y + z = 3 \\ x + 2y - z = 2 \end{cases}$.
3. Le système $\begin{cases} x + 2y = 3 \\ 2x + 4y = 5 \end{cases}$ a-t-il des solutions ?

<details><summary>Voir le corrigé</summary>

**1)** $\det A = 2 \times (-1) - 1 \times 1 = -3$ ; $\det A_x = 7 \times (-1) - 1 \times (-1) = -6$ ; $\det A_y = 2 \times (-1) - 7 \times 1 = -9$. Donc $x = 2$, $y = 3$.

**2)** $L_2 \leftarrow L_2 - 2L_1$ : $-3y - z = -9$ ; $L_3 \leftarrow L_3 - L_1$ : $y - 2z = -4$. De la 3ᵉ : $y = 2z - 4$ ; dans la 2ᵉ : $-3(2z - 4) - z = -9$, soit $-7z = -21$ et $z = 3$ ; puis $y = 2$ et $x = 6 - 2 - 3 = 1$. Solution $(1 ; 2 ; 3)$.

**3)** $\det = 4 - 4 = 0$ ; la 2ᵉ équation donne $x + 2y = 2{,}5$, incompatible avec $x + 2y = 3$ : **aucune solution**.

</details>
`,
    qcm: [
      { q: "Si det A ≠ 0, le système AX = B admet :", choix: ["Aucune solution", "Une solution unique", "Une infinité de solutions", "Deux solutions"], bonne: 1, explication: "X = A⁻¹B." },
      { q: "Dans la méthode de Cramer, x = ", choix: ["det A / det Aₓ", "det Aₓ / det A", "det A × det Aₓ", "det B / det A"], bonne: 1, explication: "Aₓ : colonne de x remplacée par B." },
      { q: "Si det A = 0, le système a :", choix: ["Toujours une solution unique", "Aucune ou une infinité de solutions", "Exactement deux solutions", "Une solution nulle"], bonne: 1, explication: "Il faut étudier la compatibilité." },
      { q: "Le pivot de Gauss consiste à :", choix: ["Calculer le déterminant", "Transformer le système en système triangulaire", "Inverser la matrice", "Additionner les inconnues"], bonne: 1, explication: "Puis on remonte les équations." },
      { q: "Le système x + y = 2 et 2x + 2y = 4 a :", choix: ["Aucune solution", "Une infinité de solutions", "Une solution unique", "Deux solutions"], bonne: 1, explication: "Les deux équations sont proportionnelles." },
    ],
  },
};
