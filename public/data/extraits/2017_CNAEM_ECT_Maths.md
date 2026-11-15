**Concours national d'accès aux écoles de management (CNAEM) — session 2017**
**Filière économique et commerciale, option technologique (ECT)**
**Épreuve de mathématiques**

*L'énoncé comporte 5 pages. L'usage de tout matériel électronique, y compris la calculatrice, est interdit. La qualité de la rédaction et de la présentation, la clarté et la précision des raisonnements constitueront des éléments importants pour l'appréciation des copies. Il convient en particulier de rappeler avec précision les références des questions abordées. Si, au cours de l'épreuve, un candidat repère ce qui lui semble être une erreur d'énoncé, il le signale sur sa copie et poursuit sa composition en expliquant les raisons des initiatives qu'il est amené à prendre.*

*Le sujet est composé de deux exercices et d'un problème, indépendants entre eux.*

---

## Exercice 1 — À propos de la loi exponentielle

Soit $X$ une variable aléatoire suivant une loi exponentielle de paramètre $\lambda > 0$ ; on rappelle que sa densité $f$ est définie par : $f(x) = \lambda e^{-\lambda x}$ si $x > 0$ et $f(x) = 0$ si $x \le 0$.

**1.** Calculer son espérance $E(X)$ et sa variance $V(X)$.
**2.** Déterminer sa fonction de répartition, notée $F$.
**3.** On considère la variable aléatoire $Y = 1 + \lfloor X \rfloor$, où $\lfloor a \rfloor$ désigne la partie entière du réel $a$. Montrer que $Y$ est presque sûrement à valeurs dans $\mathbb{N}^*$, c'est-à-dire $P(Y \le 0) = 0$, et que, pour tout $k \in \mathbb{N}^*$, $P(Y = k) = (1 - e^{-\lambda})e^{-\lambda(k-1)}$. Reconnaître la loi de $Y$.

*Dans la suite de l'exercice, on considère deux variables aléatoires $X_1$ et $X_2$ indépendantes et suivant la même loi que $X$, avec $\lambda = 1$.*

**4.** On considère la variable aléatoire $Z = \max(X_1, X_2)$.
**4.1.** Vérifier que, pour tout $x \in \mathbb{R}$, $\{Z \le x\} = \{X_1 \le x\} \cap \{X_2 \le x\}$.
**4.2.** Déterminer la fonction de répartition $F_Z$ de $Z$ ainsi qu'une densité de $Z$.
**4.3.** Calculer l'espérance $E(Z)$.
**5.** On considère la variable aléatoire $T = \min(X_1, X_2)$.
**5.1.** Exprimer la variable aléatoire $Z + T$ en fonction de $X_1$ et $X_2$.
**5.2.** En déduire l'espérance $E(T)$.

---

## Exercice 2 — Étude d'une suite récurrente

Dans cet exercice, $g$ désigne la fonction définie sur $\mathbb{R}$ par :
$$\forall x\in\mathbb{R},\quad g(x)=\frac14\Big(3x^2-2(c+d)x+cd+2(c+d)\Big).$$
On considère la suite réelle $(u_n)_{n\in\mathbb{N}}$ définie par $u_0 = \lambda \in \mathbb{R}$ et la relation de récurrence $u_{n+1} = g(u_n)$, $n \in \mathbb{N}$.

**1.** Dans cette question, on suppose que $c = d = 0$.
**1.1.** Que peut-on dire de la suite $(u_n)$ si $\lambda = 0$ ? *Dans la suite de cette question, on suppose que $\lambda \ne 0$.*
**1.2.** Montrer que $u_n > 0$ pour tout entier naturel $n \ge 1$. On pose $w_n = \ln u_n$ pour tout entier naturel $n \ge 1$, où $\ln$ désigne le logarithme népérien.
**1.3.** Pour tout entier naturel $n \ge 1$, exprimer $w_n$ en fonction de $n$ et de $\lambda$. On pourra commencer par exprimer $w_{n+1}$ en fonction de $w_n$.
**1.4.** En déduire une expression de $u_n$ en fonction de $n$ et de $\lambda$, pour tout entier naturel $n \ge 1$.
**1.5.** Discuter, selon les valeurs du réel $\lambda$, la convergence de la suite $(u_n)$ et préciser sa limite le cas échéant.

**2.** Dans cette question, on suppose que $c = d = 2$.
**2.1.** Montrer que, si la suite $(u_n)$ converge, sa limite est égale à 2.
**2.2.** On suppose que $\lambda > 2$. Montrer que la suite $(u_n)$ est strictement croissante et qu'elle diverge vers $+\infty$.
**2.3.** Montrer qu'il existe deux réels $\lambda_1$ et $\lambda_2$, avec $\lambda_1 < \lambda_2$, tels que $u_1 = 2$ si, et seulement si, $\lambda \in \{\lambda_1, \lambda_2\}$.
**2.4.** On suppose que $\lambda \in \left]\lambda_1, \lambda_2\right[$. Montrer que la suite $(u_n)$ converge et préciser sa limite.
**2.5.** On suppose que $\lambda < \lambda_1$. Montrer que la suite $(u_n)$ diverge vers $+\infty$.
**2.6.** *Un premier calcul avec Scilab.* On prend ici $\lambda = 1$. Recopier et compléter le programme Scilab ci-dessous pour qu'il calcule et affiche le terme $u_n$ pour une valeur de $n$ entrée au clavier.

```
n=input('entrer la valeur de n')
u= ...
for k=1:n
    u= ...
end
disp(u)
```

**2.7.** *Un deuxième calcul avec Scilab.* On prend $\lambda = 1$ et on saisit le code suivant :

```
n=0
u=1
while u<=1,9999
    u=(3*u*u-8*u+12)/4
    n=n+1
end
disp(n)
```

Après exécution, quelle est la signification du résultat affiché par ce programme ?

**3.** Dans cette question, on suppose que $c < d < 2$.
**3.1.** Soit $P$ l'application polynomiale définie par $P(x) = 3x^2 - 2(2+c+d)x + cd + 2(c+d)$, $x \in \mathbb{R}$. Préciser les valeurs de $P(c)$, $P(d)$ et $P(2)$, puis déterminer leur signe.
**3.2.** On suppose que la suite $(u_n)$ converge vers une limite $\ell$. Montrer que $c < \ell < d$ ou bien $d < \ell < 2$.

---

## Problème

On considère les matrices réelles carrées d'ordre 3 suivantes :
$$A=\begin{pmatrix}0&\frac12&\frac12\\0&0&\frac12\\1&\frac12&0\end{pmatrix},\quad P=\begin{pmatrix}3&0&1\\2&1&1\\4&-1&-2\end{pmatrix},\quad Q=\frac19\begin{pmatrix}1&1&1\\-8&10&1\\6&-3&-3\end{pmatrix}\quad\text{et}\quad T=\begin{pmatrix}1&0&0\\0&-\frac12&-\frac12\\0&0&-\frac12\end{pmatrix}.$$

### 1ère partie : détermination d'un polynôme annulateur de la matrice A

**1.1.** *Recherche d'un polynôme annulateur de la matrice A.*
**1.1.1.** Calculer $A^2$ puis $A^3$.
**1.1.2.** Vérifier que $4A^3 = 3A + I$, où $I$ est la matrice identité d'ordre 3.
**1.1.3.** En déduire un polynôme de degré 3 annulateur de la matrice $A$.

**1.2.** *Étude des racines d'un polynôme.* On considère l'application polynomiale $R$ définie par $R(x) = 4x^3 - 3x - 1$, $x \in \mathbb{R}$.
**1.2.1.** Vérifier que 1 est racine de $R$.
**1.2.2.** Montrer que, pour tout réel $x$, $R(x) = (x-1)(2x+1)^2$.
**1.2.3.** En déduire que $-\frac12$ est racine de $R$.

**1.3.** Quelles sont les valeurs propres possibles de la matrice $A$ ? Justifier votre réponse.

### 2ème partie : réduction de la matrice A et calcul de ses puissances

**2.1.** *Valeurs propres de la matrice A.*
**2.1.1.** Vérifier que les vecteurs $V_1=\begin{pmatrix}3\\2\\4\end{pmatrix}$ et $V_2=\begin{pmatrix}0\\1\\-1\end{pmatrix}$ sont des vecteurs propres de la matrice $A$ et préciser les valeurs propres auxquelles ils sont respectivement associés.
**2.1.2.** Préciser alors les valeurs propres de la matrice $A$.

**2.2.** *Inversibilité et inverse de P.*
**2.2.1.** Calculer le produit matriciel $PQ$.
**2.2.2.** En déduire que la matrice $P$ est inversible et préciser son inverse $P^{-1}$.

**2.3.** *Relation entre les puissances des matrices A et T.*
**2.3.1.** Calculer les produits matriciels $PT$ et $AP$.
**2.3.2.** Montrer, pour tout entier naturel $k \ge 1$, l'égalité $A^k = PT^kP^{-1}$.

**2.4.** *Calcul des puissances des matrices A et T.*
**2.4.1.** En faisant un raisonnement par récurrence, montrer que, pour tout entier naturel $k \ge 1$ :
$$T^k=\begin{pmatrix}1&0&0\\0&\left(-\frac12\right)^k&k\left(-\frac12\right)^k\\0&0&\left(-\frac12\right)^k\end{pmatrix}.$$
**2.4.2.** En déduire que, pour tout entier naturel $k \ge 1$ :
$$A^k=\frac19\begin{pmatrix}3+6\left(-\frac12\right)^k & 3-3\left(-\frac12\right)^k & 3-3\left(-\frac12\right)^k\\ 2+(-2+6k)\left(-\frac12\right)^k & 2+(7-3k)\left(-\frac12\right)^k & 2-(2+3k)\left(-\frac12\right)^k\\ 4+(12-18k)\left(-\frac12\right)^k & 4+(-24+9k)\left(-\frac12\right)^k & 4+(3+9k)\left(-\frac12\right)^k\end{pmatrix}.$$

### 3ème partie : application à l'étude d'une marche aléatoire sur le net

On considère un graphe qui modélise un internet simplifié constitué de trois pages (ou sites) placées en ses sommets, numérotées 1, 2 et 3. Les arêtes du graphe représentent les liens entre ces trois pages. L'algorithme du « PageRank » consiste à surfer au hasard sur internet et à compter le nombre de fois qu'on passe sur chacune des pages en fonction du temps.

Dans ce graphe, la page 1 possède un lien vers la page 3 mais aucun vers la page 2 ; la page 2 possède un lien vers la page 1 et un vers la page 3 ; la page 3 possède un lien vers la page 1 et un vers la page 2.

Dans la suite, on adopte les notations et hypothèses suivantes, où $n$ désigne un entier naturel et $i$, $j$ des éléments de $\{1,2,3\}$ :
- $p_n(j)$ désigne la probabilité que l'internaute soit sur la page $j$ à l'instant $t = n$ ;
- $p_{i,j}$ désigne la probabilité de se trouver sur la page $i$ à l'instant $t = n+1$ sachant qu'on était sur la page $j$ à l'instant $t = n$ ;
- $A_n(j)$ désigne l'événement « être sur la page $j$ à l'instant $t = n$ » ; on suppose que $A_n(1)$, $A_n(2)$ et $A_n(3)$ ont chacun une probabilité non nulle ;
- une page a une probabilité nulle de pointer sur elle-même : $p_{i,i} = 0$ pour tout $i$ ;
- il y a équiprobabilité entre les liens d'une page ; ainsi, comme la page 2 pointe sur deux pages, la probabilité $p_{1,2}$ d'aller de la page 2 vers la page 1 vaut $\frac12$, de même $p_{3,2} = \frac12$ ;
- on considère la matrice de transition $B=\begin{pmatrix}0&\frac12&p_{1,3}\\p_{2,1}&0&p_{2,3}\\p_{3,1}&\frac12&0\end{pmatrix}$, dont le schéma ci-dessus s'appelle le graphe.

**3.1.** Compléter la matrice $B$ en précisant les valeurs des réels $p_{1,3}$, $p_{2,1}$, $p_{2,3}$ et $p_{3,1}$.
**3.2.** Pour $j \in \{1,2,3\}$, calculer la somme $p_{1,j} + p_{2,j} + p_{3,j}$ en justifiant votre réponse.
**3.3.** Montrer que, pour tout entier naturel $n$, $p_{n+1}(1) = p_{1,1}p_n(1) + p_{1,2}p_n(2) + p_{1,3}p_n(3)$, en précisant le théorème utilisé.
**3.4.** Donner, sans démonstration, les expressions de $p_{n+1}(2)$ et de $p_{n+1}(3)$ en fonction de $p_n(1)$, $p_n(2)$ et $p_n(3)$.
**3.5.** Pour tout entier naturel $n$, on note $X_n$ la matrice colonne $X_n=\begin{pmatrix}p_n(1)\\p_n(2)\\p_n(3)\end{pmatrix}$.
**3.5.1.** Vérifier que, pour tout entier naturel $n$, $X_{n+1} = AX_n$.
**3.5.2.** Montrer que, pour tout entier naturel $n \ge 1$, $X_n = A^nX_0$.
**3.5.3.** En déduire, pour tout entier naturel $n \ge 1$, les valeurs des probabilités $p_n(1)$, $p_n(2)$ et $p_n(3)$ en fonction de $n$ et des probabilités $p_0(1)$, $p_0(2)$ et $p_0(3)$.
**3.6.** *Étude des suites $(p_n(j))_{n\in\mathbb{N}}$ pour $j \in \{1,2,3\}$.*
**3.6.1.** Préciser les limites des suites $\left(\left(-\frac12\right)^n\right)_{n\in\mathbb{N}}$ et $\left(n\left(-\frac12\right)^n\right)_{n\in\mathbb{N}}$.
**3.6.2.** Préciser la valeur de la somme $p_0(1) + p_0(2) + p_0(3)$ en justifiant votre réponse.
**3.6.3.** Déterminer les limites des suites $(p_n(1))$, $(p_n(2))$ et $(p_n(3))$, qu'on notera respectivement $\ell_1$, $\ell_2$ et $\ell_3$.
**3.7.** *Comparaison de la popularité des trois sites.*
**3.7.1.** Déduire de ce qui précède l'ordre des trois sites, du plus visité au moins visité, au fil du temps.
**3.7.2.** Que représente le vecteur $\begin{pmatrix}\ell_1\\\ell_2\\\ell_3\end{pmatrix}$ pour la matrice de transition ?

*Fin de l'épreuve.*

> Note de transcription : la version disponible précise que sa mise en page a été légèrement modifiée par rapport à l'original ; le schéma du graphe n'est pas reproduit (les liens sont décrits dans le texte). La troisième ligne de $A^k$ en 2.4.2 est recopiée telle qu'elle figure dans cette version : elle est erronée (voir le corrigé).
