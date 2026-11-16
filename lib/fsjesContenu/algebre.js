// Algèbre Linéaire (S2, parcours Économie) — compléments par chapitre : description SEO,
// résumé, exercices 2 et 3, QCM. Module « Mathématiques 2 » de la maquette nationale (tronc commun
// Économie), ajouté le 2026-11-16 ; les chapitres 8 et 9 (réduction, puissances, suites) servent
// aussi la prépa ECT (épreuve de mathématiques du CNAEM). Le calcul matriciel de base reste dans maths.js.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Les modèles linéaires en économie",
    description: "Équilibre partiel et équilibre général de marchés liés écrits en AX = B, superposition des effets d'un choc de demande, exercices corrigés d'algèbre linéaire.",
    resume: md`
## L'essentiel — Les modèles linéaires en économie

- Un **modèle linéaire** relie ses variables par des équations du premier degré : il s'écrit $AX = B$.
- Équilibre partiel : $D(p) = S(p)$ donne un prix et une quantité ; une équation, une inconnue.
- Équilibre général : avec des biens liés, chaque prix apparaît dans plusieurs équations ; on résout le **système** en bloc.
- Coefficient diagonal $a_{ii}$ : réaction du marché $i$ à son propre prix ; coefficient $a_{ij}$ : effet du prix $j$ (signe selon substituts ou compléments).
- Si $\det A \neq 0$ : $P = A^{-1}B$, prix d'équilibre uniques.
- Un choc $\Delta B$ fait varier les prix de $\Delta P = A^{-1}\Delta B$, sans refaire tout le calcul.
- **Additivité** : l'effet de deux chocs est la somme des effets ; **homogénéité** : un choc $\lambda$ fois plus fort a un effet $\lambda$ fois plus fort.
- Ces deux propriétés définissent une application linéaire (chapitre 4).
- Même schéma : modèle de Leontief $(I - A)X = D$, prestations réciproques, portefeuilles.
`,
    exercices: md`
### Exercice 2 — Thé et sucre, deux biens complémentaires

Sur un marché local, le thé (bien 1) et le sucre (bien 2) ont les fonctions suivantes (quantités en tonnes, prix en DH/kg ; chiffres d'illustration) :

$$D_1 = 85 - 3p_1 - p_2 \quad S_1 = 6 + 2p_1 \qquad D_2 = 60 - p_1 - 2p_2 \quad S_2 = 10 + 2p_2$$

1. Pourquoi peut-on dire que les deux biens sont complémentaires ?
2. Écrivez l'équilibre sous la forme $AP = B$ et résolvez-le.
3. La demande de thé augmente de 19 tonnes à tous les prix. Calculez la variation des prix et commentez le signe de $\Delta p_2$.

<details><summary>Voir le corrigé</summary>

**1)** Dans $D_1$, le coefficient de $p_2$ est $-1$ : du sucre plus cher fait baisser la demande de thé, et réciproquement ($-p_1$ dans $D_2$). Les deux biens se consomment ensemble : ils sont **complémentaires**.

**2)** $85 - 3p_1 - p_2 = 6 + 2p_1 \iff 5p_1 + p_2 = 79$ et $60 - p_1 - 2p_2 = 10 + 2p_2 \iff p_1 + 4p_2 = 50$.

$$A = \begin{pmatrix} 5 & 1 \\ 1 & 4 \end{pmatrix}, \quad \det A = 19, \quad A^{-1} = \frac{1}{19}\begin{pmatrix} 4 & -1 \\ -1 & 5 \end{pmatrix}$$

$P = A^{-1}B = \frac{1}{19}\begin{pmatrix} 316 - 50 \\ -79 + 250 \end{pmatrix} = \frac{1}{19}\begin{pmatrix} 266 \\ 171 \end{pmatrix} = \begin{pmatrix} \mathbf{14} \\ \mathbf{9} \end{pmatrix}$. Quantités : $q_1 = 6 + 28 = 34$ (contrôle $85 - 42 - 9 = 34$ ✓), $q_2 = 10 + 18 = 28$ (contrôle $60 - 14 - 18 = 28$ ✓).

**3)** $\Delta B = \begin{pmatrix} 19 \\ 0 \end{pmatrix}$, donc $\Delta P = A^{-1}\Delta B = \frac{1}{19}\begin{pmatrix} 76 \\ -19 \end{pmatrix} = \begin{pmatrix} \mathbf{4} \\ \mathbf{-1} \end{pmatrix}$. Le thé monte de 4 DH ; le sucre **baisse** de 1 DH : le thé plus cher réduit la demande de sucre, son complément. Avec des substituts, les deux prix auraient monté.

</details>

### Exercice 3 — Retrouver un modèle à partir de ses réponses aux chocs

Dans un modèle linéaire de deux marchés, on a observé qu'un choc de demande $(10, 0)$ fait varier les prix de $(2, 1)$, et qu'un choc $(0, 10)$ les fait varier de $(1, 3)$.

1. Quel est l'effet d'un choc $(20, -10)$ ? d'un choc $(5, 5)$ ?
2. Déduisez-en la matrice $A^{-1}$, puis la matrice $A$ du modèle.

<details><summary>Voir le corrigé</summary>

**1)** Par linéarité : $(20, -10) = 2(10, 0) - (0, 10)$, donc $\Delta P = 2(2, 1) - (1, 3) = \mathbf{(3, -1)}$. De même $(5, 5) = \frac{1}{2}(10, 0) + \frac{1}{2}(0, 10)$, donc $\Delta P = \frac{1}{2}(2, 1) + \frac{1}{2}(1, 3) = \mathbf{(1{,}5 ;\ 2)}$.

**2)** Les colonnes de $A^{-1}$ sont les effets des chocs unitaires $(1, 0)$ et $(0, 1)$ : $A^{-1} = \frac{1}{10}\begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}$. En inversant (déterminant de $\begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}$ égal à 5) :

$$A = 10 \times \frac{1}{5}\begin{pmatrix} 3 & -1 \\ -1 & 2 \end{pmatrix} = \begin{pmatrix} 6 & -2 \\ -2 & 4 \end{pmatrix}$$

Contrôle : $A\begin{pmatrix} 2 \\ 1 \end{pmatrix} = \begin{pmatrix} 10 \\ 0 \end{pmatrix}$ ✓. Deux observations suffisent à connaître tout le modèle : c'est la force de la linéarité.

</details>
`,
    qcm: [
      { q: "Un modèle est linéaire quand ses équations :", choix: ["sont du premier degré en les inconnues, sans produit entre elles", "contiennent des carrés des inconnues", "ont toutes un second membre nul", "n'ont qu'une seule inconnue"], bonne: 0, explication: "Les inconnues n'apparaissent qu'au premier degré ; le second membre peut être non nul." },
      { q: "Sur un marché, D(p) = 120 - 2p et S(p) = -30 + 3p. Le prix d'équilibre vaut :", choix: ["20", "30", "60", "150"], bonne: 1, explication: "120 - 2p = -30 + 3p donne 5p = 150, soit p = 30." },
      { q: "Dans la demande D1 = 110 - 4p1 + p2, le coefficient +1 devant p2 indique que les biens sont :", choix: ["complémentaires", "substituables", "indépendants", "inférieurs"], bonne: 1, explication: "Un bien 2 plus cher reporte des acheteurs vers le bien 1." },
      { q: "Si AP = B avec A inversible, alors :", choix: ["P = BA^(-1)", "P = A^(-1)B", "P = AB", "P = B - A"], bonne: 1, explication: "On multiplie à gauche par A^(-1) ; le produit n'est pas commutatif." },
      { q: "Un choc de demande ΔB modifie les prix d'équilibre de :", choix: ["A ΔB", "A^(-1) ΔB", "ΔB / det A", "ΔB"], bonne: 1, explication: "A^(-1)(B + ΔB) = A^(-1)B + A^(-1)ΔB." },
      { q: "L'effet de deux chocs simultanés dans un modèle linéaire est :", choix: ["le produit des effets", "le plus grand des deux effets", "la somme des effets de chaque choc", "impossible à prévoir"], bonne: 2, explication: "C'est la propriété d'additivité (superposition des effets)." },
      { q: "Si un choc double, son effet sur les prix dans un modèle linéaire :", choix: ["double", "est multiplié par 4", "ne change pas", "est divisé par 2"], bonne: 0, explication: "Homogénéité : A^(-1)(2ΔB) = 2A^(-1)ΔB." },
      { q: "Dans un modèle à n biens, la matrice A de l'équilibre est de taille :", choix: ["n × 1", "n × n", "2 × n", "1 × n"], bonne: 1, explication: "n équations à n inconnues (les prix)." },
      { q: "Pour des biens complémentaires, une hausse de la demande du bien 1 fait en général :", choix: ["monter les deux prix", "monter p1 et baisser p2", "baisser les deux prix", "ne rien changer à p2"], bonne: 1, explication: "Le bien 1 plus cher réduit la demande de son complément." },
      { q: "La condition qui garantit des prix d'équilibre uniques dans AP = B est :", choix: ["B non nul", "det A non nul", "A symétrique", "tous les coefficients de A positifs"], bonne: 1, explication: "det A non nul : A est inversible et P = A^(-1)B est l'unique solution." },
    ],
  },
  2: {
    titre: "Espaces vectoriels et sous-espaces vectoriels",
    description: "Vecteurs de R^n, définition d'un espace vectoriel, combinaisons linéaires, sous-espaces et sous-espace engendré Vect, méthode et exercices corrigés pas à pas.",
    resume: md`
## L'essentiel — Espaces vectoriels

- Dans $\mathbb{R}^n$ : $u + v$ et $\lambda u$ se calculent composante par composante.
- Un **espace vectoriel** est un ensemble muni d'une addition et d'une multiplication par un réel qui suivent les règles du calcul usuel.
- Exemples : $\mathbb{R}^n$, $\mathcal{M}_{n,p}(\mathbb{R})$, $\mathbb{R}_n[X]$, suites réelles, fonctions.
- $w$ est **combinaison linéaire** de $u_1, \dots, u_p$ si $w = \lambda_1 u_1 + \dots + \lambda_p u_p$ : on le teste en résolvant un système.
- **Sous-espace** : contient $0$ et stable par $\lambda u + v$.
- Test éclair : si $0 \notin F$, ce n'est pas un sous-espace (équation avec constante non nulle).
- Les solutions d'un système **homogène** forment un sous-espace.
- $\text{Vect}(u_1, \dots, u_p)$ : ensemble des combinaisons linéaires, plus petit sous-espace contenant les $u_i$.
- On passe d'une description par générateurs à une description par équations en éliminant les paramètres.
- Intersection de sous-espaces : sous-espace ; réunion : en général non.
`,
    exercices: md`
### Exercice 2 — Matrices et polynômes

1. Montrez que l'ensemble $\mathcal{S}$ des matrices symétriques $\begin{pmatrix} a & b \\ b & c \end{pmatrix}$ est un sous-espace de $\mathcal{M}_2(\mathbb{R})$ et écrivez-le comme un $\text{Vect}$.
2. Dans $\mathbb{R}_2[X]$, on pose $F = \{P : P(1) = 0\}$ et $G = \{P : P(0) = 1\}$. Lequel est un sous-espace vectoriel ?
3. Montrez que $F = \text{Vect}(X - 1,\ X^2 - 1)$.

<details><summary>Voir le corrigé</summary>

**1)** $\begin{pmatrix} a & b \\ b & c \end{pmatrix} = a\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} + b\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} + c\begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$. Donc $\mathcal{S}$ est le $\text{Vect}$ de ces trois matrices : c'est un **sous-espace**.

**2)** Le polynôme nul vérifie $P(1) = 0$ mais pas $P(0) = 1$ : $G$ n'est pas un sous-espace. Pour $F$ : si $P(1) = Q(1) = 0$, alors $(\lambda P + Q)(1) = \lambda P(1) + Q(1) = 0$ ; $F$ est un **sous-espace**.

**3)** $P = a + bX + cX^2 \in F \iff a + b + c = 0 \iff a = -b - c$. Alors $P = -b - c + bX + cX^2 = b(X - 1) + c(X^2 - 1)$. Réciproquement, $X - 1$ et $X^2 - 1$ s'annulent en 1. Donc $\mathbf{F = \text{Vect}(X - 1, X^2 - 1)}$.

</details>

### Exercice 3 — Équation d'un plan engendré

Soit $u = (1, 0, 2)$ et $v = (0, 1, -1)$.

1. Déterminez une équation cartésienne de $\text{Vect}(u, v)$.
2. Les vecteurs $(3, 2, 4)$ et $(2, 1, 1)$ appartiennent-ils à $\text{Vect}(u, v)$ ? Si oui, donnez la combinaison.

<details><summary>Voir le corrigé</summary>

**1)** $(x, y, z) = au + bv = (a,\ b,\ 2a - b)$. Donc $a = x$, $b = y$ et $z = 2x - y$ : $\text{Vect}(u, v) = \{(x, y, z) : \mathbf{2x - y - z = 0}\}$. Contrôle : $u$ donne $2 - 0 - 2 = 0$ ✓, $v$ donne $0 - 1 + 1 = 0$ ✓.

**2)** $(3, 2, 4)$ : $6 - 2 - 4 = 0$, il appartient au plan, et $(3, 2, 4) = \mathbf{3u + 2v}$ (contrôle : $(3, 2, 6 - 2)$ ✓). $(2, 1, 1)$ : $4 - 1 - 1 = 2 \neq 0$, il **n'appartient pas** au plan.

</details>
`,
    qcm: [
      { q: "Lequel de ces ensembles est un espace vectoriel ?", choix: ["Les paniers à quantités positives", "Les polynômes de degré au plus 3", "Les vecteurs de R² de norme 1", "Les solutions de x + y = 1"], bonne: 1, explication: "R3[X] est stable par somme et multiplication par un réel ; les autres ne le sont pas." },
      { q: "La somme des vecteurs (1, 2, 3) et (4, -1, 0) vaut :", choix: ["(5, 1, 3)", "(4, -2, 0)", "(5, 3, 3)", "(3, -3, -3)"], bonne: 0, explication: "On additionne composante par composante." },
      { q: "Le vecteur (2, 7, 7) s'écrit avec u = (1, 2, -1) et v = (0, 1, 3) comme :", choix: ["u + 5v", "2u + 3v", "3u + 2v", "il n'est pas combinaison de u et v"], bonne: 1, explication: "2u + 3v = (2, 4 + 3, -2 + 9) = (2, 7, 7)." },
      { q: "Le test le plus rapide pour montrer qu'une partie n'est pas un sous-espace est de vérifier :", choix: ["qu'elle est finie", "qu'elle ne contient pas le vecteur nul", "qu'elle contient deux vecteurs", "qu'elle est définie par une équation"], bonne: 1, explication: "Tout sous-espace contient le vecteur nul." },
      { q: "L'ensemble des (x, y, z) tels que x + y - 2z = 0 est :", choix: ["un sous-espace (un plan)", "un sous-espace réduit à zéro", "pas un sous-espace", "une droite affine qui ne passe pas par 0"], bonne: 0, explication: "Équation linéaire homogène : c'est un plan passant par l'origine." },
      { q: "L'ensemble des (x, y) tels que x + y = 1 :", choix: ["est un sous-espace de dimension 1", "n'est pas un sous-espace", "est égal à R²", "est réduit au vecteur nul"], bonne: 1, explication: "(0, 0) ne vérifie pas l'équation." },
      { q: "La réunion des deux axes du plan (xy = 0) :", choix: ["est un sous-espace", "n'est pas stable par addition", "ne contient pas le vecteur nul", "est égale à R²"], bonne: 1, explication: "(1, 0) + (0, 1) = (1, 1) n'est sur aucun axe." },
      { q: "Vect(u, v) désigne :", choix: ["la famille formée de u et v", "l'ensemble de toutes les combinaisons linéaires de u et v", "le vecteur u + v", "le produit de u par v"], bonne: 1, explication: "C'est le plus petit sous-espace contenant u et v." },
      { q: "L'intersection de deux sous-espaces vectoriels est :", choix: ["toujours un sous-espace", "jamais un sous-espace", "un sous-espace seulement s'ils sont égaux", "toujours réduite au vecteur nul"], bonne: 0, explication: "Elle contient 0 et reste stable par combinaison linéaire." },
      { q: "L'ensemble des solutions d'un système linéaire homogène est :", choix: ["toujours vide", "un sous-espace vectoriel", "un ensemble fini", "jamais un sous-espace"], bonne: 1, explication: "C'est le noyau de la matrice du système." },
    ],
  },
  3: {
    titre: "Familles libres, génératrices et bases",
    description: "Famille libre ou liée, famille génératrice, base et coordonnées, dimension d'un espace vectoriel et rang d'une famille, avec méthode et exercices corrigés.",
    resume: md`
## L'essentiel — Familles libres, génératrices et bases

- **Libre** : $\lambda_1 u_1 + \dots + \lambda_p u_p = 0 \Rightarrow$ tous les $\lambda_i$ nuls ; sinon **liée** (relation de dépendance).
- Deux vecteurs : liée $\iff$ colinéaires. Une famille contenant $0$ est liée.
- Trois vecteurs deux à deux non colinéaires peuvent être liés : il faut résoudre le système.
- **Génératrice** de $E$ : $\text{Vect}(u_1, \dots, u_p) = E$.
- **Base** : libre et génératrice ; tout vecteur a des **coordonnées uniques**.
- **Dimension** : nombre de vecteurs de toute base ; $\dim \mathbb{R}^n = n$, $\dim \mathbb{R}_n[X] = n + 1$.
- En dimension $n$ : plus de $n$ vecteurs, liée ; moins de $n$, non génératrice ; exactement $n$ et libre, base.
- Sous-espace de $\mathbb{R}^n$ défini par $k$ équations indépendantes : dimension $n - k$.
- **Rang** d'une famille $= \dim \text{Vect}$ = nombre de pivots (Gauss).
- $n$ vecteurs de $\mathbb{R}^n$ forment une base $\iff$ rang $n$ $\iff$ déterminant non nul.
`,
    exercices: md`
### Exercice 2 — Une base de polynômes

1. Montrez que $\mathcal{B} = (1,\ X - 1,\ (X - 1)^2)$ est une base de $\mathbb{R}_2[X]$.
2. Calculez les coordonnées de $P = X^2 + 3X + 2$ dans $\mathcal{B}$.

<details><summary>Voir le corrigé</summary>

**1)** Les trois polynômes sont de degrés 0, 1 et 2 (degrés échelonnés). Si $a + b(X - 1) + c(X - 1)^2 = 0$, le coefficient de $X^2$ donne $c = 0$, puis celui de $X$ donne $b = 0$, puis $a = 0$ : la famille est **libre**. Elle a 3 éléments et $\dim \mathbb{R}_2[X] = 3$ : c'est une **base**.

**2)** On cherche $P = a + b(X - 1) + c(X - 1)^2$. Coefficient de $X^2$ : $c = 1$. En $X = 1$ : $a = P(1) = 1 + 3 + 2 = 6$. Coefficient de $X$ : $b - 2c = 3$, donc $b = 5$. Coordonnées : $\mathbf{(6, 5, 1)}$. Contrôle : $6 + 5X - 5 + X^2 - 2X + 1 = X^2 + 3X + 2$ ✓.

</details>

### Exercice 3 — Rang d'une famille de R⁴

Soit $u_1 = (1, 2, 0, 1)$, $u_2 = (2, 1, 1, 0)$, $u_3 = (0, 3, -1, 2)$, $u_4 = (1, -1, 1, -1)$.

1. Vérifiez que $u_3 = 2u_1 - u_2$ et $u_4 = u_2 - u_1$.
2. Déduisez-en le rang de la famille $(u_1, u_2, u_3, u_4)$ et une base de $\text{Vect}(u_1, u_2, u_3, u_4)$.
3. La famille est-elle génératrice de $\mathbb{R}^4$ ?

<details><summary>Voir le corrigé</summary>

**1)** $2u_1 - u_2 = (2 - 2,\ 4 - 1,\ 0 - 1,\ 2 - 0) = (0, 3, -1, 2) = u_3$ ✓ ; $u_2 - u_1 = (1, -1, 1, -1) = u_4$ ✓.

**2)** $u_3$ et $u_4$ sont combinaisons de $u_1$ et $u_2$, donc $\text{Vect}(u_1, u_2, u_3, u_4) = \text{Vect}(u_1, u_2)$. $u_1$ et $u_2$ ne sont pas colinéaires : $(u_1, u_2)$ est une **base** de ce sous-espace et le **rang vaut 2**.

**3)** Le sous-espace engendré est de dimension $2 < 4$ : la famille **n'est pas génératrice** de $\mathbb{R}^4$.

</details>
`,
    qcm: [
      { q: "Une famille qui contient le vecteur nul est :", choix: ["toujours libre", "toujours liée", "libre seulement si elle a un seul vecteur", "une base"], bonne: 1, explication: "1 × 0 = 0 est une combinaison nulle à coefficient non nul." },
      { q: "Deux vecteurs non nuls forment une famille liée si et seulement si :", choix: ["ils sont orthogonaux", "ils sont colinéaires", "leur somme est nulle", "ils sont distincts"], bonne: 1, explication: "L'un est alors multiple de l'autre." },
      { q: "Les vecteurs (1, 2, 1), (2, 1, 0) et (1, -1, -1) vérifient :", choix: ["u + v + w = 0", "u - v + w = 0", "2u = v + w", "aucune relation : la famille est libre"], bonne: 1, explication: "(1 - 2 + 1, 2 - 1 - 1, 1 - 0 - 1) = (0, 0, 0)." },
      { q: "Une famille de 4 vecteurs de R³ est :", choix: ["toujours libre", "toujours liée", "toujours une base", "jamais génératrice"], bonne: 1, explication: "En dimension 3, plus de 3 vecteurs forment une famille liée." },
      { q: "La dimension de R2[X] (polynômes de degré au plus 2) est :", choix: ["2", "3", "4", "infinie"], bonne: 1, explication: "Base (1, X, X²)." },
      { q: "Une famille de 3 vecteurs libres de R³ est :", choix: ["une base de R³", "génératrice d'un plan", "forcément la base canonique", "liée"], bonne: 0, explication: "En dimension 3, 3 vecteurs libres forment une base." },
      { q: "Les coordonnées de (2, 3, 5) dans la base (1, 1, 0), (0, 1, 1), (1, 0, 1) sont :", choix: ["(2, 3, 5)", "(0, 3, 2)", "(1, 2, 3)", "(3, 0, 2)"], bonne: 1, explication: "3(0, 1, 1) + 2(1, 0, 1) = (2, 3, 5)." },
      { q: "Le plan d'équation x + y - 2z = 0 dans R³ est de dimension :", choix: ["1", "2", "3", "0"], bonne: 1, explication: "3 inconnues moins 1 équation." },
      { q: "Le rang d'une famille de vecteurs est :", choix: ["le nombre de vecteurs de la famille", "la dimension du sous-espace qu'elle engendre", "le nombre de composantes de chaque vecteur", "le déterminant de la famille"], bonne: 1, explication: "C'est le nombre maximal de vecteurs libres extraits de la famille." },
      { q: "Pour la famille (1, 1, m), (1, m, 1), (m, 1, 1), avec m = 1, le rang vaut :", choix: ["0", "1", "2", "3"], bonne: 1, explication: "Les trois vecteurs sont égaux à (1, 1, 1)." },
    ],
  },
  4: {
    titre: "Les applications linéaires",
    description: "Application linéaire, noyau et image, injectivité et surjectivité, théorème du rang, lecture économique d'un plan de production, avec exercices corrigés.",
    resume: md`
## L'essentiel — Applications linéaires

- $f$ est **linéaire** si $f(\lambda u + v) = \lambda f(u) + f(v)$ ; alors $f(0) = 0$.
- Vocabulaire : endomorphisme ($E \to E$), forme linéaire ($E \to \mathbb{R}$), isomorphisme (linéaire bijective).
- Une application affine (avec constante, comme un coût fixe) n'est pas linéaire ; ses **variations** le sont.
- $f$ est connue dès qu'on connaît $f(e_1), \dots, f(e_n)$ pour une base.
- **Noyau** $\text{Ker} f = \{u : f(u) = 0\}$, sous-espace du départ ; $f$ injective $\iff \text{Ker} f = \{0\}$.
- **Image** $\text{Im} f = \text{Vect}(f(e_1), \dots, f(e_n))$, sous-espace de l'arrivée ; $\text{rg} f = \dim \text{Im} f$.
- **Théorème du rang** : $\dim E = \dim \text{Ker} f + \text{rg} f$.
- Si $\dim E = \dim F$ : injective $\iff$ surjective $\iff$ bijective.
- Les antécédents d'un vecteur : un antécédent particulier plus le noyau.
- Composée et réciproque d'applications linéaires : linéaires.
`,
    exercices: md`
### Exercice 2 — Réaménager un plan de production sans changer coûts ni heures

Une coopérative fabrique trois produits ; un plan $q = (q_1, q_2, q_3)$ coûte $12q_1 + 8q_2 + 5q_3$ DH et demande $2q_1 + q_2 + 3q_3$ heures. On pose $f(q) = (12q_1 + 8q_2 + 5q_3,\ 2q_1 + q_2 + 3q_3)$.

1. Justifiez que $f : \mathbb{R}^3 \to \mathbb{R}^2$ est linéaire et donnez son rang.
2. Déterminez $\text{Ker} f$ et interprétez-le.
3. $f$ est-elle surjective ? injective ?

<details><summary>Voir le corrigé</summary>

**1)** Les deux composantes sont des combinaisons linéaires de $q_1, q_2, q_3$ sans constante : $f$ est linéaire. $f(e_1) = (12, 2)$ et $f(e_2) = (8, 1)$ ne sont pas colinéaires ($12 \times 1 - 2 \times 8 = -4 \neq 0$) : $\text{rg} f = 2$.

**2)** On résout $12x + 8y + 5z = 0$ et $2x + y + 3z = 0$. La seconde donne $y = -2x - 3z$ ; dans la première : $12x - 16x - 24z + 5z = 0$, soit $x = -\frac{19}{4}z$. Avec $z = 4$ : $x = -19$, $y = 38 - 12 = 26$.

$$\text{Ker} f = \text{Vect}\big((-19, 26, 4)\big)$$

Contrôle : $-228 + 208 + 20 = 0$ ✓ et $-38 + 26 + 12 = 0$ ✓. Produire 19 unités de moins du produit 1, 26 de plus du produit 2 et 4 de plus du produit 3 **ne change ni le coût ni les heures**. Le théorème du rang l'annonçait : $\dim \text{Ker} f = 3 - 2 = 1$.

**3)** $\text{rg} f = 2 = \dim \mathbb{R}^2$ : $f$ est **surjective**. $\text{Ker} f \neq \{0\}$ : $f$ **n'est pas injective**.

</details>

### Exercice 3 — Dérivation et évaluation

1. Soit $D : \mathbb{R}_3[X] \to \mathbb{R}_3[X]$, $D(P) = P'$. Déterminez $\text{Ker} D$, $\text{Im} D$ et vérifiez le théorème du rang.
2. Soit $\varphi : \mathbb{R}_2[X] \to \mathbb{R}$, $\varphi(P) = P(1)$. Montrez que $\varphi$ est une forme linéaire et donnez la dimension de son noyau.

<details><summary>Voir le corrigé</summary>

**1)** $P' = 0 \iff P$ constant : $\text{Ker} D = \mathbb{R}_0[X]$ (constantes), de dimension 1. Les dérivées des polynômes de degré au plus 3 sont exactement les polynômes de degré au plus 2 : $\text{Im} D = \mathbb{R}_2[X]$, de dimension 3. Théorème du rang : $4 = 1 + 3$ ✓. $D$ n'est ni injective ni surjective (aucun polynôme de degré 3 n'est une dérivée d'un élément de $\mathbb{R}_3[X]$).

**2)** $\varphi(\lambda P + Q) = \lambda P(1) + Q(1) = \lambda\varphi(P) + \varphi(Q)$ : forme linéaire. $\varphi(1) = 1 \neq 0$, donc $\text{rg}\,\varphi = 1$ et $\dim \text{Ker}\,\varphi = 3 - 1 = \mathbf{2}$ (on retrouve $\text{Vect}(X - 1, X^2 - 1)$).

</details>
`,
    qcm: [
      { q: "Une application linéaire f vérifie toujours :", choix: ["f(0) = 0", "f(0) = 1", "f(x) = x", "f(x) supérieur à 0"], bonne: 0, explication: "f(0) = f(0 × 0) = 0 × f(0) = 0." },
      { q: "L'application g(x, y) = (x + 1, y) :", choix: ["est linéaire", "n'est pas linéaire car g(0, 0) n'est pas nul", "est un isomorphisme", "est une forme linéaire"], bonne: 1, explication: "g(0, 0) = (1, 0)." },
      { q: "Une fonction de coût C(q) = 5 000 + 12q est :", choix: ["linéaire", "affine mais pas linéaire", "une forme linéaire", "un endomorphisme"], bonne: 1, explication: "C(0) = 5 000 n'est pas nul ; seule la variation 12Δq est linéaire." },
      { q: "Le noyau de f est un sous-espace :", choix: ["de l'espace d'arrivée", "de l'espace de départ", "de R toujours", "réduit à zéro toujours"], bonne: 1, explication: "Il réunit les vecteurs du départ envoyés sur 0." },
      { q: "f est injective si et seulement si :", choix: ["son image est l'espace d'arrivée", "son noyau est réduit au vecteur nul", "son rang est nul", "elle est une forme linéaire"], bonne: 1, explication: "Ker f = {0} équivaut à l'injectivité." },
      { q: "Le théorème du rang s'écrit :", choix: ["dim E = dim Ker f + rg f", "dim F = dim Ker f + rg f", "rg f = dim Ker f", "dim E = rg f - dim Ker f"], bonne: 0, explication: "C'est la dimension de l'espace de départ E qui intervient." },
      { q: "Pour f(x, y, z) = (x - y, y - z, z - x), le noyau est :", choix: ["{0}", "la droite engendrée par (1, 1, 1)", "le plan x + y + z = 0", "R³"], bonne: 1, explication: "f(x, y, z) = 0 équivaut à x = y = z." },
      { q: "Une application linéaire de R³ dans R² ne peut pas être :", choix: ["surjective", "injective", "de rang 2", "de rang 1"], bonne: 1, explication: "Son noyau est de dimension au moins 3 - 2 = 1." },
      { q: "Un endomorphisme de R³ injectif est :", choix: ["forcément bijectif", "jamais surjectif", "de rang 2", "nul"], bonne: 0, explication: "Même dimension au départ et à l'arrivée : injectif équivaut à bijectif." },
      { q: "Si w a un antécédent particulier x0 par f, l'ensemble de ses antécédents est :", choix: ["x0 seul", "x0 + Ker f", "Im f", "Ker f"], bonne: 1, explication: "f(x) = f(x0) équivaut à x - x0 dans Ker f." },
    ],
  },
  5: {
    titre: "Matrice d'une application linéaire et changement de base",
    description: "Écrire la matrice d'une application linéaire, Y = AX, composition et produit, matrice de passage et formule A' = P^(-1)AP, avec exercices corrigés détaillés.",
    resume: md`
## L'essentiel — Matrices et changement de base

- Colonne $j$ de la matrice de $f$ : coordonnées de $f(e_j)$ dans la base d'arrivée.
- Taille : (dimension d'arrivée) lignes × (dimension de départ) colonnes.
- $y = f(x) \iff Y = AX$.
- Composée $g \circ f$ : matrice $BA$ ; $f^k$ : $A^k$ ; réciproque : $A^{-1}$.
- $\text{Ker} f$ : solutions de $AX = 0$ ; $\text{Im} f$ : engendrée par les colonnes ; $\text{rg} f = \text{rg} A$.
- **Matrice de passage** $P$ : nouveaux vecteurs de base en colonnes (coordonnées dans l'ancienne base).
- $X = PX'$ (nouvelles coordonnées vers anciennes) et $X' = P^{-1}X$.
- Endomorphisme : $A' = P^{-1}AP$ ; $A$ et $A'$ sont **semblables**.
- Matrices semblables : même rang, même déterminant, même trace.
- Une bonne base peut rendre la matrice **diagonale** (chapitre 8).
`,
    exercices: md`
### Exercice 2 — Composer deux applications linéaires

Soit $f : \mathbb{R}^3 \to \mathbb{R}^2$ telle que $f(e_1) = (1, 2)$, $f(e_2) = (0, 1)$, $f(e_3) = (-1, 3)$, et $g : \mathbb{R}^2 \to \mathbb{R}^2$, $g(x, y) = (x + y,\ x - y)$.

1. Écrivez les matrices $A$ de $f$ et $B$ de $g$ dans les bases canoniques.
2. Calculez la matrice de $g \circ f$.
3. Calculez $(g \circ f)(1, 1, 1)$ de deux façons.

<details><summary>Voir le corrigé</summary>

**1)** $A = \begin{pmatrix} 1 & 0 & -1 \\ 2 & 1 & 3 \end{pmatrix}$ (type $2 \times 3$) et $B = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$.

**2)** $g \circ f$ a pour matrice $BA = \begin{pmatrix} 1 + 2 & 0 + 1 & -1 + 3 \\ 1 - 2 & 0 - 1 & -1 - 3 \end{pmatrix} = \begin{pmatrix} 3 & 1 & 2 \\ -1 & -1 & -4 \end{pmatrix}$.

**3)** Directement : $f(1, 1, 1) = (1 + 0 - 1,\ 2 + 1 + 3) = (0, 6)$, puis $g(0, 6) = (6, -6)$. Avec $BA$ : $(3 + 1 + 2,\ -1 - 1 - 4) = (6, -6)$ ✓.

</details>

### Exercice 3 — Changement de base en dimension 2

Soit $f(x, y) = (5x - 6y,\ 3x - 4y)$, $u_1 = (2, 1)$ et $u_2 = (1, 1)$.

1. Calculez $f(u_1)$ et $f(u_2)$. Écrivez la matrice $A'$ de $f$ dans la base $(u_1, u_2)$.
2. Écrivez $P$, calculez $P^{-1}$ et vérifiez $P^{-1}AP = A'$.
3. Donnez les coordonnées de $x = (3, 1)$ dans la base $(u_1, u_2)$.

<details><summary>Voir le corrigé</summary>

**1)** $f(u_1) = (10 - 6,\ 6 - 4) = (4, 2) = 2u_1$ et $f(u_2) = (5 - 6,\ 3 - 4) = (-1, -1) = -u_2$. Donc $A' = \begin{pmatrix} 2 & 0 \\ 0 & -1 \end{pmatrix}$.

**2)** $P = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$, $\det P = 1$, $P^{-1} = \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}$. $AP = \begin{pmatrix} 4 & -1 \\ 2 & -1 \end{pmatrix}$, puis $P^{-1}AP = \begin{pmatrix} 4 - 2 & -1 + 1 \\ -4 + 4 & 1 - 2 \end{pmatrix} = \begin{pmatrix} 2 & 0 \\ 0 & -1 \end{pmatrix}$ ✓. Trace : $5 - 4 = 1 = 2 - 1$ ✓.

**3)** $X' = P^{-1}X = \begin{pmatrix} 3 - 1 \\ -3 + 2 \end{pmatrix} = \begin{pmatrix} 2 \\ -1 \end{pmatrix}$ : $x = 2u_1 - u_2$ (contrôle : $(4 - 1,\ 2 - 1) = (3, 1)$ ✓).

</details>
`,
    qcm: [
      { q: "La colonne j de la matrice de f contient :", choix: ["les coordonnées de e_j", "les coordonnées de f(e_j)", "la j-ième composante de tous les f(e_i)", "le noyau de f"], bonne: 1, explication: "On range les images des vecteurs de base en colonnes." },
      { q: "Une application linéaire de R³ dans R² a une matrice de type :", choix: ["3 lignes, 2 colonnes", "2 lignes, 3 colonnes", "3 lignes, 3 colonnes", "2 lignes, 2 colonnes"], bonne: 1, explication: "Lignes : dimension d'arrivée ; colonnes : dimension de départ." },
      { q: "La matrice de g ∘ f (f de matrice A, g de matrice B) est :", choix: ["AB", "BA", "A + B", "A^(-1)B"], bonne: 1, explication: "On applique f d'abord, sa matrice est à droite." },
      { q: "La matrice de la dérivation sur R2[X] dans la base (1, X, X²) a pour troisième colonne :", choix: ["(0, 0, 2)", "(0, 2, 0)", "(2, 0, 0)", "(0, 0, 0)"], bonne: 1, explication: "D(X²) = 2X, de coordonnées (0, 2, 0)." },
      { q: "La matrice de passage P de l'ancienne base vers la nouvelle a pour colonnes :", choix: ["les anciens vecteurs dans la nouvelle base", "les nouveaux vecteurs dans l'ancienne base", "les images des vecteurs par f", "les valeurs propres"], bonne: 1, explication: "C'est la définition de la matrice de passage." },
      { q: "Si X et X' sont les anciennes et nouvelles coordonnées d'un vecteur :", choix: ["X' = PX", "X = PX'", "X = P^(-1)X'", "X = X'"], bonne: 1, explication: "P transforme les nouvelles coordonnées en anciennes." },
      { q: "Pour un endomorphisme, la matrice dans la nouvelle base est :", choix: ["PAP^(-1)", "P^(-1)AP", "AP", "P^(-1)A"], bonne: 1, explication: "A' = P^(-1)AP." },
      { q: "Deux matrices semblables ont toujours :", choix: ["les mêmes coefficients", "le même déterminant et la même trace", "la même première colonne", "des inverses égaux"], bonne: 1, explication: "det(P^(-1)AP) = det A et la trace est aussi conservée." },
      { q: "Pour f(x, y) = (4x - 2y, x + y), le vecteur (1, 1) a pour image :", choix: ["(2, 2)", "(4, 1)", "(3, 3)", "(6, 3)"], bonne: 0, explication: "(4 - 2, 1 + 1) = (2, 2), soit 2 fois (1, 1)." },
      { q: "Le noyau d'une application linéaire de matrice A correspond :", choix: ["aux colonnes de A", "aux solutions du système AX = 0", "aux lignes non nulles de A", "à la diagonale de A"], bonne: 1, explication: "f(x) = 0 s'écrit AX = 0." },
    ],
  },
  6: {
    titre: "Les déterminants",
    description: "Déterminant d'une famille de vecteurs, d'une matrice carrée et d'un endomorphisme : propriétés, calcul par opérations sur les lignes, paramètres, corrigés.",
    resume: md`
## L'essentiel — Les déterminants

- Ordre 2 : $\det(u, v) = u_1 v_2 - u_2 v_1$ ; $|\det|$ = aire du parallélogramme (volume en dimension 3).
- Le déterminant est **multilinéaire**, **alterné** et vaut 1 sur la base canonique.
- $n$ vecteurs de $\mathbb{R}^n$ forment une base $\iff$ leur déterminant est non nul.
- $\det(A^T) = \det A$ ; $\det(AB) = \det A \det B$ ; $\det(A^{-1}) = 1/\det A$.
- $\det(\lambda A) = \lambda^n \det A$ (et non $\lambda \det A$) ; $\det(A + B) \neq \det A + \det B$.
- Matrice triangulaire : produit des coefficients diagonaux.
- $L_i \leftarrow L_i + \lambda L_j$ : inchangé ; échange de deux lignes : signe changé.
- Avec un paramètre : créer des zéros et garder une **forme factorisée**, par exemple $(m + 2)(m - 1)^2$.
- Déterminant d'un endomorphisme : celui de sa matrice dans n'importe quelle base ; $f$ bijectif $\iff \det f \neq 0$.
- Vandermonde : $(b - a)(c - a)(c - b)$.
`,
    exercices: md`
### Exercice 2 — Un déterminant à coefficients répétés

1. Montrez que $\begin{vmatrix} a & b & b \\ b & a & b \\ b & b & a \end{vmatrix} = (a + 2b)(a - b)^2$.
2. Déduisez-en le déterminant de $\begin{pmatrix} 3 & 1 & 1 \\ 1 & 3 & 1 \\ 1 & 1 & 3 \end{pmatrix}$, puis vérifiez par un développement.

<details><summary>Voir le corrigé</summary>

**1)** Chaque ligne a pour somme $a + 2b$. Avec $C_1 \leftarrow C_1 + C_2 + C_3$ puis mise en facteur :

$$(a + 2b)\begin{vmatrix} 1 & b & b \\ 1 & a & b \\ 1 & b & a \end{vmatrix} \underset{L_2 - L_1,\ L_3 - L_1}{=} (a + 2b)\begin{vmatrix} 1 & b & b \\ 0 & a - b & 0 \\ 0 & 0 & a - b \end{vmatrix} = (a + 2b)(a - b)^2$$

**2)** $a = 3$, $b = 1$ : $(3 + 2)(3 - 1)^2 = \mathbf{20}$. Développement selon la première ligne : $3(9 - 1) - 1(3 - 1) + 1(1 - 3) = 24 - 2 - 2 = 20$ ✓.

</details>

### Exercice 3 — Quand trois vecteurs forment-ils une base ?

Soit $u = (1, 2, 3)$, $v = (2, 3, 4)$ et $w = (3, 4, m)$.

1. Calculez $\det(u, v, w)$ en fonction de $m$.
2. Pour quelles valeurs de $m$ la famille est-elle une base de $\mathbb{R}^3$ ?
3. Dans le cas restant, trouvez une relation de dépendance.

<details><summary>Voir le corrigé</summary>

**1)** En développant selon la première ligne de $\begin{vmatrix} 1 & 2 & 3 \\ 2 & 3 & 4 \\ 3 & 4 & m \end{vmatrix}$ (même valeur que la matrice des colonnes, par transposition) : $1(3m - 16) - 2(2m - 12) + 3(8 - 9) = 3m - 16 - 4m + 24 - 3 = \mathbf{5 - m}$.

**2)** Base $\iff \det \neq 0 \iff \mathbf{m \neq 5}$.

**3)** Pour $m = 5$ : $2v - u = (4 - 1,\ 6 - 2,\ 8 - 3) = (3, 4, 5) = w$, soit $\mathbf{u - 2v + w = 0}$.

</details>
`,
    qcm: [
      { q: "Le déterminant des vecteurs (3, 1) et (1, 2) vaut :", choix: ["5", "7", "1", "-5"], bonne: 0, explication: "3 × 2 - 1 × 1 = 5." },
      { q: "Si deux vecteurs du plan sont colinéaires, leur déterminant est :", choix: ["égal à 1", "nul", "négatif", "égal à leur produit"], bonne: 1, explication: "Le parallélogramme est aplati, son aire est nulle." },
      { q: "Échanger deux lignes d'une matrice :", choix: ["ne change pas le déterminant", "change le signe du déterminant", "annule le déterminant", "double le déterminant"], bonne: 1, explication: "Le déterminant est alterné." },
      { q: "L'opération L2 ← L2 - 3L1 :", choix: ["multiplie le déterminant par -3", "ne change pas le déterminant", "change son signe", "l'annule"], bonne: 1, explication: "Ajouter un multiple d'une autre ligne ne change pas le déterminant." },
      { q: "Pour une matrice A d'ordre 3 avec det A = 4, det(2A) vaut :", choix: ["8", "32", "16", "6"], bonne: 1, explication: "det(2A) = 2³ × 4 = 32." },
      { q: "Si det A = 4, alors det(A^(-1)) vaut :", choix: ["-4", "1/4", "4", "16"], bonne: 1, explication: "det(A^(-1)) = 1 / det A." },
      { q: "Le déterminant d'une matrice triangulaire est :", choix: ["la somme des coefficients diagonaux", "le produit des coefficients diagonaux", "toujours nul", "toujours égal à 1"], bonne: 1, explication: "On développe successivement selon la première colonne." },
      { q: "Le déterminant d'un endomorphisme :", choix: ["dépend de la base choisie", "ne dépend pas de la base choisie", "n'existe qu'en dimension 2", "est toujours positif"], bonne: 1, explication: "det(P^(-1)AP) = det A." },
      { q: "Le déterminant de la matrice dont les lignes sont (m, 1, 1), (1, m, 1), (1, 1, m) vaut :", choix: ["(m + 2)(m - 1)²", "m³", "(m - 2)(m + 1)²", "m³ + 3m"], bonne: 0, explication: "On ajoute les colonnes puis on crée des zéros." },
      { q: "Un endomorphisme de déterminant nul est :", choix: ["bijectif", "non injectif", "l'identité", "surjectif"], bonne: 1, explication: "Son noyau n'est pas réduit à zéro." },
    ],
  },
  7: {
    titre: "Systèmes linéaires : structure des solutions et discussion",
    description: "Structure des solutions d'un système linéaire (solution particulière plus noyau), rang et compatibilité, systèmes de Cramer, discussion selon un paramètre.",
    resume: md`
## L'essentiel — Systèmes linéaires

- Quatre lectures de $AX = B$ : équations, matrice, combinaison des colonnes, antécédents par $f$.
- Système **homogène** : solutions $= \text{Ker} A$, de dimension $p - \text{rg} A$.
- **Solution générale = solution particulière + noyau** : $S = X_0 + \text{Ker} A$.
- Compatible $\iff \text{rg} A = \text{rg}(A \mid B)$.
- Compatible et $\text{rg} A = p$ : solution unique ; $\text{rg} A = r < p$ : infinité, $p - r$ paramètres.
- **Système de Cramer** : carré et $\det A \neq 0$ ; $x_i = \det A_i / \det A$.
- Pour une matrice carrée : $\det A \neq 0 \iff$ inversible $\iff$ rang $n$ $\iff$ noyau nul.
- Discussion : déterminant factorisé, cas général (Cramer), puis **chaque** valeur critique remplacée dans le système.
- Ne jamais diviser par une expression du paramètre sans avoir écarté ses zéros.
- L'ensemble des solutions d'un système non homogène n'est pas un sous-espace (il ne contient pas 0).
`,
    exercices: md`
### Exercice 2 — Un système à 3 équations et 4 inconnues

$$\begin{cases} x + y + z + t = 10 \\ x - y + 2z = 3 \\ 2x + 3z + t = 13 \end{cases}$$

1. Montrez que la troisième équation est la somme des deux premières. Quel est le rang du système ?
2. Résolvez-le en prenant $x$ et $z$ comme paramètres ; écrivez la solution sous la forme $X_0 + \text{Ker} A$.
3. Que se passe-t-il si le second membre de la troisième équation vaut 14 ?

<details><summary>Voir le corrigé</summary>

**1)** $L_1 + L_2$ : $2x + 0y + 3z + t = 13$, c'est $L_3$. Les deux premières lignes ne sont pas proportionnelles : **rang 2**, donc $4 - 2 = 2$ paramètres.

**2)** $L_2$ donne $y = x + 2z - 3$ ; $L_1$ donne $t = 10 - x - y - z = 13 - 2x - 3z$.

$$(x, y, z, t) = \underbrace{(0, -3, 0, 13)}_{X_0} + x\,(1, 1, 0, -2) + z\,(0, 2, 1, -3)$$

Contrôles : $X_0$ donne $-3 + 13 = 10$ et $3 = 3$ ✓ ; $(1, 1, 0, -2)$ donne $1 + 1 - 2 = 0$ et $1 - 1 = 0$ ✓ ; $(0, 2, 1, -3)$ donne $2 + 1 - 3 = 0$ et $-2 + 2 = 0$ ✓.

**3)** $L_1 + L_2 - L_3$ donnerait $0 = 13 - 14 = -1$ : le système devient **incompatible** ($\text{rg} A = 2$, $\text{rg}(A \mid B) = 3$).

</details>

### Exercice 3 — Discussion à deux paramètres

Discutez selon $m$ et $k$ le système $\begin{cases} x + 2y = 1 \\ 2x + my = k \end{cases}$.

<details><summary>Voir le corrigé</summary>

$\det A = m - 4$.

- **Si $m \neq 4$** : système de Cramer, solution unique
$$x = \frac{\begin{vmatrix} 1 & 2 \\ k & m \end{vmatrix}}{m - 4} = \frac{m - 2k}{m - 4} \qquad y = \frac{\begin{vmatrix} 1 & 1 \\ 2 & k \end{vmatrix}}{m - 4} = \frac{k - 2}{m - 4}$$
Contrôle avec $m = 6$, $k = 1$ : $x = 2$, $y = -\frac{1}{2}$ ; $2 - 1 = 1$ ✓ et $4 - 3 = 1$ ✓.
- **Si $m = 4$** : $L_2 - 2L_1$ donne $0 = k - 2$.
  - si $k = 2$ : la seconde équation est le double de la première, **infinité** de solutions $\{(1 - 2y, y) : y \in \mathbb{R}\}$ ;
  - si $k \neq 2$ : **aucune** solution.

</details>
`,
    qcm: [
      { q: "L'ensemble des solutions d'un système homogène AX = 0 est :", choix: ["toujours vide", "le noyau de A", "l'image de A", "toujours réduit à un point non nul"], bonne: 1, explication: "C'est la définition du noyau." },
      { q: "Si X0 est une solution de AX = B, toutes les solutions sont :", choix: ["X0 seul", "X0 + Ker A", "Ker A", "Im A"], bonne: 1, explication: "A(X - X0) = 0." },
      { q: "Un système AX = B est compatible si et seulement si :", choix: ["det A n'est pas nul", "rg A = rg(A | B)", "B est nul", "A est carrée"], bonne: 1, explication: "Théorème de compatibilité par les rangs." },
      { q: "Un système compatible à 4 inconnues de rang 2 a des solutions qui dépendent de :", choix: ["0 paramètre", "2 paramètres", "4 paramètres", "6 paramètres"], bonne: 1, explication: "Nombre de paramètres = nombre d'inconnues moins le rang." },
      { q: "Un système de Cramer est un système :", choix: ["carré de déterminant non nul", "homogène", "sans solution", "à infinité de solutions"], bonne: 0, explication: "Il a alors une unique solution." },
      { q: "Dans les formules de Cramer, A_i est la matrice A dont :", choix: ["la ligne i est remplacée par B", "la colonne i est remplacée par B", "la colonne i est supprimée", "la ligne i est multipliée par B"], bonne: 1, explication: "x_i = det A_i / det A." },
      { q: "Si det A = 0 pour un système carré, le système :", choix: ["n'a jamais de solution", "a une infinité de solutions ou aucune", "a une solution unique", "est homogène"], bonne: 1, explication: "Il faut étudier la compatibilité." },
      { q: "Pour le système mx + y = 2, x + my = 2, avec m = -1 :", choix: ["solution unique", "infinité de solutions", "aucune solution", "solution (1, 1)"], bonne: 2, explication: "En additionnant : 0 = 4." },
      { q: "La solution générale de x + 2y - z = 3, 2x + 5y + z = 9, x + 3y + 2z = 6 est une :", choix: ["solution unique", "droite de solutions", "absence de solution", "plan de solutions"], bonne: 1, explication: "Rang 2 pour 3 inconnues : un paramètre." },
      { q: "Dans une discussion, que faire pour une valeur critique du paramètre ?", choix: ["Appliquer les formules de Cramer", "Remplacer le paramètre par sa valeur et reprendre le système", "Conclure qu'il n'y a pas de solution", "Ignorer ce cas"], bonne: 1, explication: "Chaque valeur critique se traite à part, par exemple au pivot de Gauss." },
    ],
  },
  8: {
    titre: "Valeurs propres, vecteurs propres et diagonalisation",
    description: "Valeurs propres par le polynôme caractéristique ou un polynôme annulateur, sous-espaces propres, diagonalisation A = PDP^(-1), exercices type CNAEM corrigés.",
    resume: md`
## L'essentiel — Réduction des matrices

- $\lambda$ **valeur propre** de $A$ : il existe $X \neq 0$ avec $AX = \lambda X$ ; $X$ est un **vecteur propre**.
- $E_\lambda = \text{Ker}(A - \lambda I)$ : sous-espace propre.
- $\lambda$ valeur propre $\iff \det(A - \lambda I) = 0$ (polynôme caractéristique).
- Ordre 2 : $\lambda^2 - \text{tr}(A)\lambda + \det A$.
- Si $Q(A) = 0$, toute valeur propre est racine de $Q$ (à vérifier ensuite).
- Somme des valeurs propres = trace ; produit = déterminant.
- Matrice triangulaire : valeurs propres = coefficients diagonaux ; $0$ valeur propre $\iff$ $A$ non inversible.
- **Diagonalisable** : $A = PDP^{-1}$ ($AP = PD$), vecteurs propres en colonnes de $P$, valeurs propres dans $D$ dans le même ordre.
- $n$ valeurs propres distinctes $\Rightarrow$ diagonalisable ; en général : somme des $\dim E_\lambda = n$.
- $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ n'est pas diagonalisable ($\dim E_1 = 1$).
`,
    exercices: md`
### Exercice 2 — Polynôme annulateur

Soit $A = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$.

1. Vérifiez que $A^2 - 2A - 3I = 0$. Quelles sont les valeurs propres possibles de $A$ ?
2. Déterminez les sous-espaces propres et diagonalisez $A$.
3. Déduisez de la question 1 que $A$ est inversible et donnez $A^{-1}$.

<details><summary>Voir le corrigé</summary>

**1)** $A^2 = \begin{pmatrix} 5 & 4 \\ 4 & 5 \end{pmatrix}$ et $2A + 3I = \begin{pmatrix} 5 & 4 \\ 4 & 5 \end{pmatrix}$ : $A^2 - 2A - 3I = 0$ ✓. Les valeurs propres possibles sont les racines de $x^2 - 2x - 3 = (x - 3)(x + 1)$ : **3 et -1**.

**2)** $\lambda = 3$ : $-2x + 2y = 0$, $E_3 = \text{Vect}\big((1, 1)\big)$. $\lambda = -1$ : $2x + 2y = 0$, $E_{-1} = \text{Vect}\big((1, -1)\big)$. Les deux sont bien valeurs propres ; deux valeurs propres distinctes en dimension 2 : $A$ est diagonalisable, $P = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$, $D = \begin{pmatrix} 3 & 0 \\ 0 & -1 \end{pmatrix}$.

**3)** $A^2 - 2A = 3I$, soit $A \times \frac{1}{3}(A - 2I) = I$ : $A$ est inversible et $A^{-1} = \frac{1}{3}(A - 2I) = \frac{1}{3}\begin{pmatrix} -1 & 2 \\ 2 & -1 \end{pmatrix}$. Contrôle : $A \begin{pmatrix} -1 & 2 \\ 2 & -1 \end{pmatrix} = \begin{pmatrix} 3 & 0 \\ 0 & 3 \end{pmatrix}$ ✓.

</details>

### Exercice 3 — Valeur propre double : diagonalisable ou non ?

Soit $B = \begin{pmatrix} 2 & 1 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix}$ et $C = \begin{pmatrix} 2 & 0 & 1 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix}$.

1. Donnez les valeurs propres de $B$ et de $C$.
2. Calculez la dimension de $E_2$ pour chacune. Laquelle est diagonalisable ?
3. Pour celle qui l'est, donnez $P$ et $D$.

<details><summary>Voir le corrigé</summary>

**1)** Les deux matrices sont triangulaires : valeurs propres **2 (double) et 3** pour chacune.

**2)** $B - 2I = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}$ : $y = 0$, $z = 0$, donc $E_2 = \text{Vect}(e_1)$, **dimension 1**. Avec $\dim E_3 = 1$, la somme vaut $2 < 3$ : $B$ **n'est pas diagonalisable**.

$C - 2I = \begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}$ : seule condition $z = 0$, donc $E_2 = \text{Vect}(e_1, e_2)$, **dimension 2**. Avec $\dim E_3 = 1$ : $2 + 1 = 3$, $C$ **est diagonalisable**.

**3)** $E_3$ : $C - 3I = \begin{pmatrix} -1 & 0 & 1 \\ 0 & -1 & 0 \\ 0 & 0 & 0 \end{pmatrix}$ donne $x = z$, $y = 0$, vecteur $(1, 0, 1)$. $P = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$, $D = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix}$. Contrôle : $C(1, 0, 1) = (3, 0, 3)$ ✓.

</details>
`,
    qcm: [
      { q: "Un vecteur propre est, par définition :", choix: ["un vecteur quelconque", "un vecteur non nul X tel que AX = λX", "le vecteur nul", "une colonne de A"], bonne: 1, explication: "Le vecteur nul est exclu." },
      { q: "λ est valeur propre de A si et seulement si :", choix: ["det(A - λI) = 0", "det A = λ", "A = λI", "trace A = λ"], bonne: 0, explication: "A - λI n'est alors pas inversible." },
      { q: "Les valeurs propres de A = (4, -2 ; 1, 1) sont :", choix: ["1 et 4", "2 et 3", "-2 et 1", "5 et 6"], bonne: 1, explication: "λ² - 5λ + 6 = (λ - 2)(λ - 3)." },
      { q: "La somme des valeurs propres d'une matrice (avec multiplicité) est égale à :", choix: ["son déterminant", "sa trace", "son rang", "1"], bonne: 1, explication: "Le produit est égal au déterminant." },
      { q: "0 est valeur propre de A si et seulement si :", choix: ["A est inversible", "A n'est pas inversible", "A est diagonale", "A est nulle"], bonne: 1, explication: "AX = 0 a alors une solution non nulle." },
      { q: "Les valeurs propres d'une matrice triangulaire sont :", choix: ["ses coefficients diagonaux", "toujours 0 et 1", "les sommes de ses lignes", "ses coefficients hors diagonale"], bonne: 0, explication: "det(A - λI) est le produit des (a_ii - λ)." },
      { q: "Si Q(A) = 0 pour un polynôme Q, alors toute valeur propre de A :", choix: ["est racine de Q", "est égale à 0", "est le coefficient dominant de Q", "n'a aucun lien avec Q"], bonne: 0, explication: "AX = λX entraîne Q(A)X = Q(λ)X = 0." },
      { q: "Une matrice d'ordre 3 qui a 3 valeurs propres distinctes est :", choix: ["diagonalisable", "jamais diagonalisable", "nulle", "non inversible"], bonne: 0, explication: "Condition suffisante de diagonalisation." },
      { q: "La matrice (1, 1 ; 0, 1) est :", choix: ["diagonalisable", "non diagonalisable", "inversible et diagonale", "nulle"], bonne: 1, explication: "Son seul sous-espace propre est de dimension 1." },
      { q: "Si A = PDP^(-1), les colonnes de P sont :", choix: ["les valeurs propres", "des vecteurs propres, dans l'ordre des valeurs de D", "les lignes de A", "les colonnes de A"], bonne: 1, explication: "AP = PD se lit colonne par colonne." },
    ],
  },
  9: {
    titre: "Puissances de matrices et suites récurrentes",
    description: "Calcul de A^n par diagonalisation ou formule du binôme, suites récurrentes X(n+1) = AX(n) + B, parts de marché et état stationnaire, exercices corrigés.",
    resume: md`
## L'essentiel — Puissances de matrices et suites

- $X_{n+1} = AX_n \Rightarrow X_n = A^nX_0$ (récurrence).
- Matrice diagonale : $D^n$ s'obtient en élevant chaque coefficient diagonal à la puissance $n$.
- $A = PDP^{-1} \Rightarrow A^n = PD^nP^{-1}$, démontré par récurrence ($P^{-1}P$ se simplifie).
- Calcul pratique : $PD^n$ puis $(PD^n)P^{-1}$ ; contrôle pour $n = 0$ et $n = 1$.
- Binôme : $(\lambda I + N)^n = \sum_k \binom{n}{k}\lambda^{n-k}N^k$ si $N$ nilpotente ; valable car $I$ et $N$ commutent.
- Matrice de transition (colonnes de somme 1) : valeur propre 1, état stationnaire = vecteur propre associé normalisé.
- Décomposer $X_0$ sur les vecteurs propres : chaque composante est multipliée par $\lambda^n$.
- Cas affine $X_{n+1} = AX_n + B$ : point fixe $U = AU + B$, puis $X_n = U + A^n(X_0 - U)$.
- Long terme : $\lambda^n \to 0$ si $|\lambda| < 1$ ; la plus grande valeur propre en valeur absolue domine.
- Jamais $(PDP^{-1})^n = P^nD^nP^{-n}$, ni $X_n = X_0A^n$.
`,
    exercices: md`
### Exercice 2 — Emploi et chômage

Chaque année, 90 % des actifs occupés gardent leur emploi et 10 % le perdent ; 40 % des chômeurs retrouvent un emploi et 60 % restent au chômage. On note $e_n$ et $c_n$ les proportions d'actifs occupés et de chômeurs (avec $e_n + c_n = 1$), et $e_0 = 0{,}6$.

1. Écrivez $X_{n+1} = MX_n$ et donnez $M$.
2. Montrez que les valeurs propres de $M$ sont 1 et 0,5 et donnez des vecteurs propres.
3. Exprimez $e_n$ en fonction de $n$ et donnez le taux de chômage de long terme (dans ce modèle d'illustration).

<details><summary>Voir le corrigé</summary>

**1)** $e_{n+1} = 0{,}9e_n + 0{,}4c_n$ et $c_{n+1} = 0{,}1e_n + 0{,}6c_n$ : $M = \begin{pmatrix} 0{,}9 & 0{,}4 \\ 0{,}1 & 0{,}6 \end{pmatrix}$.

**2)** Trace $1{,}5$, déterminant $0{,}54 - 0{,}04 = 0{,}5$ : $\lambda^2 - 1{,}5\lambda + 0{,}5 = (\lambda - 1)(\lambda - 0{,}5)$. Pour $\lambda = 1$ : $-0{,}1e + 0{,}4c = 0$, vecteur $(4, 1)$, normalisé $(0{,}8 ;\ 0{,}2)$. Pour $\lambda = 0{,}5$ : $0{,}4e + 0{,}4c = 0$, vecteur $(1, -1)$.

**3)** $X_0 = (0{,}6 ;\ 0{,}4) = (0{,}8 ;\ 0{,}2) - 0{,}2\,(1, -1)$, donc $X_n = (0{,}8 ;\ 0{,}2) - 0{,}2 \times 0{,}5^n\,(1, -1)$ et $\mathbf{e_n = 0{,}8 - 0{,}2 \times 0{,}5^n}$. Contrôle : $e_1 = 0{,}54 + 0{,}16 = 0{,}7$ et $0{,}8 - 0{,}1 = 0{,}7$ ✓. À long terme, $e_n \to 0{,}8$ : **20 %** de chômeurs.

</details>

### Exercice 3 — Formule du binôme et suites

Soit $A = \begin{pmatrix} 3 & 1 \\ 0 & 3 \end{pmatrix}$.

1. Écrivez $A = 3I + N$, calculez $N^2$ et déduisez-en $A^n$.
2. On définit $u_{n+1} = 3u_n + v_n$ et $v_{n+1} = 3v_n$, avec $u_0 = 0$, $v_0 = 1$. Exprimez $u_n$ et $v_n$.

<details><summary>Voir le corrigé</summary>

**1)** $N = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$, $N^2 = 0$. Comme $3I$ et $N$ commutent : $A^n = 3^nI + n\,3^{n-1}N = \begin{pmatrix} 3^n & n\,3^{n-1} \\ 0 & 3^n \end{pmatrix}$ (vrai aussi pour $n = 0$). Contrôle : $A^2 = \begin{pmatrix} 9 & 6 \\ 0 & 9 \end{pmatrix}$ ✓.

**2)** $\begin{pmatrix} u_n \\ v_n \end{pmatrix} = A^n\begin{pmatrix} 0 \\ 1 \end{pmatrix} = \begin{pmatrix} n\,3^{n-1} \\ 3^n \end{pmatrix}$ : $\mathbf{u_n = n\,3^{n-1}}$ et $\mathbf{v_n = 3^n}$. Contrôle : $u_1 = 0 + 1 = 1$ ✓, $u_2 = 3 + 3 = 6 = 2 \times 3$ ✓.

</details>
`,
    qcm: [
      { q: "Si X(n+1) = AX(n) pour tout n, alors :", choix: ["X(n) = nAX(0)", "X(n) = A^n X(0)", "X(n) = X(0)A^n", "X(n) = A + X(0)"], bonne: 1, explication: "Récurrence immédiate ; le produit se fait à gauche." },
      { q: "Pour D diagonale de coefficients 2 et 3, D^n a pour coefficients :", choix: ["2n et 3n", "2^n et 3^n", "n² et n³", "2 + n et 3 + n"], bonne: 1, explication: "On élève chaque coefficient diagonal à la puissance n." },
      { q: "Si A = PDP^(-1), alors A^n est égal à :", choix: ["P^n D^n P^(-n)", "PD^nP^(-1)", "P^(-1)D^nP", "nPDP^(-1)"], bonne: 1, explication: "Les produits P^(-1)P intérieurs se simplifient." },
      { q: "Pour contrôler une formule de A^n, on vérifie d'abord :", choix: ["n = 0 et n = 1", "n = 10", "n = -1", "la limite"], bonne: 0, explication: "On doit retrouver I puis A." },
      { q: "La formule du binôme pour (λI + N)^n s'applique car :", choix: ["N est inversible", "I et N commutent", "N est diagonale", "λ est entier"], bonne: 1, explication: "Elle est fausse pour deux matrices qui ne commutent pas." },
      { q: "Une matrice N est nilpotente si :", choix: ["N est nulle", "une de ses puissances est nulle", "N² = N", "son déterminant vaut 1"], bonne: 1, explication: "Par exemple N³ = 0 ; la somme du binôme s'arrête alors." },
      { q: "Pour la matrice de transition (0,8 ; 0,3 / 0,2 ; 0,7), l'état stationnaire des parts de marché est :", choix: ["50 % et 50 %", "60 % et 40 %", "80 % et 20 %", "30 % et 70 %"], bonne: 1, explication: "Vecteur propre (3, 2) de valeur propre 1, normalisé." },
      { q: "Pour X(n+1) = AX(n) + B, on commence par chercher :", choix: ["le déterminant de B", "un point fixe U tel que U = AU + B", "la trace de A", "A^(-1)B"], bonne: 1, explication: "Puis Y(n) = X(n) - U vérifie Y(n+1) = AY(n)." },
      { q: "Si 0 < λ < 1, la suite λ^n :", choix: ["tend vers 0", "tend vers l'infini", "vaut toujours 1", "n'a pas de limite"], bonne: 0, explication: "Suite géométrique de raison strictement comprise entre -1 et 1." },
      { q: "Avec a(n) = 1 - 2^n + 3^n, la limite de a(n) / 3^n est :", choix: ["0", "1", "2/3", "l'infini"], bonne: 1, explication: "Les termes 1/3^n et (2/3)^n tendent vers 0." },
    ],
  },
};

export default chapitres;
