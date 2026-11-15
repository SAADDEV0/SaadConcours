**Concours national d'accès aux écoles de management (CNAEM) — session 2014**
**Filière ECT — épreuve de mathématiques — durée : 4 heures**

---

## Exercice 1

On considère les matrices suivantes :
$$A=\begin{pmatrix}-3&2&-3\\-6&4&-5\\2&-1&2\end{pmatrix},\quad T=\begin{pmatrix}1&1&1\\0&1&2\\0&0&1\end{pmatrix},\quad Q=\frac12\begin{pmatrix}0&1&1\\-2&1&-3\\-2&1&-1\end{pmatrix},\quad P=\begin{pmatrix}1&1&-2\\2&1&-1\\0&-1&1\end{pmatrix}.$$

**1)** Montrer que la matrice $T$ est inversible et calculer sa matrice inverse $T^{-1}$.
**2)** Calculer $T^2$.
**3)** Vérifier par récurrence que, pour tout $n \in \mathbb{N}$, $T^n=\begin{pmatrix}1&n&n^2\\0&1&2n\\0&0&1\end{pmatrix}$.
**4)** Calculer le produit $PQ$. En déduire que $P$ est inversible et donner son inverse.
**5)** Calculer $PTQ$.
**6)** En déduire que $A$ est inversible et exprimer son inverse en fonction de $P$, $T^{-1}$ et $Q$ (on ne demande pas de donner l'expression de $A^{-1}$).
**7)** Donner l'expression de $A^n$ en fonction de $n$, $P$, $Q$ et $T^n$.
**8)** Pour tout entier naturel $n$, calculer les coefficients de la matrice $A^n$ en fonction de $n$ uniquement.
**9)** On considère trois suites $(a_n)$, $(b_n)$ et $(c_n)$ définies par leurs conditions initiales $a_0$, $b_0$ et $c_0$ et par les relations, pour tout $n \in \mathbb{N}$ :
$$\begin{cases}a_{n+1}=-3a_n+2b_n-3c_n\\ b_{n+1}=-6a_n+4b_n-5c_n\\ c_{n+1}=2a_n-b_n+2c_n\end{cases}$$
On introduit la matrice $X_n=\begin{pmatrix}a_n\\b_n\\c_n\end{pmatrix}$.
**9.a)** Reconnaître, pour tout entier naturel $n$, le produit $AX_n$. En déduire l'expression de $X_n$ en fonction des matrices $A^n$ et $X_0$.
**9.b)** En déduire l'expression des suites $(a_n)$, $(b_n)$ et $(c_n)$ en fonction de $n$ uniquement, dans le cas où $a_0 = 1$, $b_0 = 2$ et $c_0 = 4$.

---

## Exercice 2

Pour $n \in \mathbb{N}$, on pose $I_n=\displaystyle\int_0^1\frac{x^{2n+1}}{1+x^2}\,dx$.

**1.a)** Calculer $I_0$.
**1.b)** Calculer $I_0 + I_1$. En déduire $I_1$.
**2.a)** Quel est le signe de $I_n$ ?
**2.b)** Montrer que, pour tout $n \in \mathbb{N}$, $I_n + I_{n+1} = \dfrac{1}{2n+2}$.
**2.c)** En déduire que, pour tout $n \in \mathbb{N}$, $I_n \le \dfrac{1}{2n+2}$.
**2.d)** Montrer que la suite $(I_n)_{n\in\mathbb{N}}$ est convergente et calculer sa limite.
**2.e)** Montrer par récurrence que, pour tout $n \in \mathbb{N}^*$, $2(-1)^{n-1}I_n=\displaystyle\sum_{k=1}^{n}\frac{(-1)^{k-1}}{k}-\ln2$.
**2.f)** En déduire $\displaystyle\lim_{n\to+\infty}\sum_{k=1}^{n}\frac{(-1)^{k-1}}{k}$.
**3.a)** À l'aide d'une intégration par parties, montrer que $I_n=\dfrac{1}{4(n+1)}+\dfrac{1}{n+1}\displaystyle\int_0^1\frac{x^{2n+3}}{(1+x^2)^2}\,dx$.
**3.b)** Établir les inégalités : pour tout $n \in \mathbb{N}$, $0\le\displaystyle\int_0^1\frac{x^{2n+3}}{(1+x^2)^2}\,dx\le\frac{1}{2n+4}$.
**3.c)** En déduire $\displaystyle\lim_{n\to+\infty}nI_n$.
**4)** À l'aide des questions précédentes, donner un équivalent de $\displaystyle\sum_{k=1}^{n}\frac{(-1)^{k-1}}{k}-\ln2$ quand $n$ tend vers $+\infty$.

---

## Exercice 3

On considère une urne $U$ contenant 4 boules numérotées 1, 2, 3, 4, indiscernables au toucher. On effectue une suite de tirages d'une boule avec remise de la boule dans l'urne. $[\![1\,;4]\!]$ désigne les entiers $i$ tels que $1 \le i \le 4$. $k$ désigne un entier supérieur ou égal à 1. Pour tout $i \in [\![1\,;4]\!]$, on note $X_i$ la variable aléatoire égale au nombre d'obtentions de la boule numéro $i$ au cours des $k$ premiers tirages.

**1)** Pour $i \in [\![1\,;4]\!]$, donner la loi de $X_i$, puis son espérance $E(X_i)$ et sa variance $V(X_i)$.
**2)** Les variables aléatoires $X_1$, $X_2$, $X_3$, $X_4$ sont-elles indépendantes ?
**3)** Soient $(i, j) \in [\![1\,;4]\!]^2$ tels que $i \ne j$.
**3.a)** Déterminer la loi de la variable aléatoire $X_i + X_j$. Rappeler la variance de $X_i + X_j$.
**3.b)** En déduire la covariance du couple $(X_i, X_j)$.

*Pour tout entier $k \ge 1$, on note $Z_k$ la variable aléatoire égale au nombre de numéros distincts obtenus au cours des $k$ premiers tirages, et $E(Z_k)$ son espérance.*

**4)** Déterminer la loi de $Z_1$ et la loi de $Z_2$. En déduire $E(Z_1)$ et $E(Z_2)$.
**5)** Soit $k$ un entier supérieur ou égal à 1.
**5.a)** Déterminer $P(Z_k = 1)$.
**5.b)** Déterminer $P(Z_k = k)$.
**5.c)** Montrer que, pour tout $j \in [\![1\,;4]\!]$, $P(Z_{k+1}=j)=\dfrac j4P(Z_k=j)+\dfrac{5-j}{4}P(Z_k=j-1)$.
**5.d)** En déduire que $E(Z_{k+1})=\dfrac34E(Z_k)+1$.
**6)** Montrer que la suite $(v_k)$ définie par $v_k = E(Z_k) - 4$ est une suite géométrique dont on déterminera la raison et le premier terme.
**7)** Déterminer $P(Z_k \ge 5)$.
**8)** Montrer que $P(Z_k = 2)=\dfrac{6\,(2^k-2)}{4^k}$.

---

## Exercice 4

Pour cet exercice, on donne $e^{-1} \approx 0{,}37$. On considère la fonction $f$ définie pour tout réel $x$ par : $f(x) = 0$ si $x < 0$ et $f(x) = xe^{-x}$ si $x \ge 0$.

**1)** Étudier les variations de $f$ sur $[0, +\infty[$.
**2)** Déterminer la limite de $f(x)$ quand $x$ tend vers $+\infty$.
**3)** Dresser le tableau de variations de $f$, puis construire sa courbe représentative.
**4.a)** Soit $a$ un réel strictement positif ; à l'aide d'une intégration par parties, calculer l'intégrale $\displaystyle\int_0^axe^{-x}\,dx$.
**4.b)** Déterminer $\displaystyle\lim_{a\to+\infty}\int_0^af(x)\,dx$.
**5)** Montrer que $f$ est la densité de probabilité d'une variable aléatoire $X$.
**6)** Calculer l'espérance $E(X)$ de $X$.

*Fin de l'épreuve.*

> Note de transcription : la version disponible du sujet est une ressaisie. À la question 8 de l'exercice 3, la formule y est illisible (« 6 2^{k−2} ») ; elle est rétablie ici d'après le calcul, $P(Z_k=2)=\frac{6(2^k-2)}{4^k}$.
