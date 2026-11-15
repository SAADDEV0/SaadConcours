> Corrigé indicatif rédigé par SaadConcours, pas une correction officielle du CNAEM. Les puissances de $A$ et les suites ont été vérifiées par calcul direct pour $n = 1, 2, 3$.

## Exercice 1

**1)** $T$ est triangulaire supérieure à coefficients diagonaux non nuls : elle est inversible. En résolvant $TX = Y$ :
$$T^{-1}=\begin{pmatrix}1&-1&1\\0&1&-2\\0&0&1\end{pmatrix}\qquad(\text{vérification : }TT^{-1}=I).$$

**2)** $T^2=\begin{pmatrix}1&2&4\\0&1&4\\0&0&1\end{pmatrix}$.

**3)** Pour $n = 0$ on obtient $I$. Si $T^n$ a la forme annoncée :
$$T^{n+1}=T^nT=\begin{pmatrix}1&n+1&1+2n+n^2\\0&1&2+2n\\0&0&1\end{pmatrix}=\begin{pmatrix}1&n+1&(n+1)^2\\0&1&2(n+1)\\0&0&1\end{pmatrix}.$$

**4)** Le calcul donne $PQ = I$ : $P$ est inversible et $P^{-1} = Q$.

**5)** $PTQ = A$ (calcul direct).

**6)** $A = PTP^{-1}$ est un produit de matrices inversibles, donc inversible, et $A^{-1}=\left(PTQ\right)^{-1}=PT^{-1}Q$. (Pour information : $A^{-1}=\begin{pmatrix}3&-1&2\\2&0&3\\-2&1&0\end{pmatrix}$.)

**7)** Par récurrence, $A^n = PT^nQ$.

**8)** $PT^n=\begin{pmatrix}1&n+1&n^2+2n-2\\2&2n+1&2n^2+2n-1\\0&-1&1-2n\end{pmatrix}$, puis :
$$A^n=\begin{pmatrix}-n^2-3n+1&\dfrac{n^2+3n}{2}&-\dfrac{n^2+5n}{2}\\[2mm]-2n^2-4n&(n+1)^2&-n^2-4n\\[1mm]2n&-n&n+1\end{pmatrix}.$$
Contrôles : $n = 0$ donne $I$, $n = 1$ donne $A$, $n = 2$ donne $\begin{pmatrix}-9&5&-7\\-16&9&-12\\4&-2&3\end{pmatrix}$, comme $A^2$.

**9.a)** $AX_n = X_{n+1}$, donc (récurrence) $X_n = A^nX_0$.

**9.b)** Avec $X_0 = (1, 2, 4)$ :
$$a_n=-2n^2-10n+1,\qquad b_n=-4n^2-16n+2,\qquad c_n=4n+4.$$
Contrôle : $X_1 = (-11, -18, 8)$ et $X_2 = (-27, -46, 12)$, comme le calcul direct.

---

## Exercice 2

**1.a)** $I_0=\displaystyle\int_0^1\frac{x}{1+x^2}dx=\Big[\tfrac12\ln(1+x^2)\Big]_0^1=\frac{\ln2}{2}$.

**1.b)** $I_0+I_1=\displaystyle\int_0^1\frac{x(1+x^2)}{1+x^2}dx=\int_0^1x\,dx=\frac12$, donc $I_1=\dfrac12-\dfrac{\ln2}{2}$.

**2.a)** Sur $[0,1]$, l'intégrande est positive : $I_n \ge 0$.

**2.b)** $I_n+I_{n+1}=\displaystyle\int_0^1\frac{x^{2n+1}(1+x^2)}{1+x^2}dx=\int_0^1x^{2n+1}dx=\frac{1}{2n+2}$.

**2.c)** $I_{n+1} \ge 0$, donc $I_n \le \dfrac{1}{2n+2}$.

**2.d)** $0 \le I_n \le \frac{1}{2n+2}$ : par encadrement, $(I_n)$ converge vers **0**.

**2.e)** Pour $n = 1$ : $2I_1 = 1 - \ln2$, égal au membre de droite. Si la formule est vraie au rang $n$, alors avec $I_{n+1}=\frac{1}{2n+2}-I_n$ :
$$2(-1)^nI_{n+1}=\frac{(-1)^n}{n+1}-2(-1)^nI_n=\frac{(-1)^n}{n+1}+2(-1)^{n-1}I_n=\sum_{k=1}^{n+1}\frac{(-1)^{k-1}}{k}-\ln2.$$

**2.f)** $\big|2(-1)^{n-1}I_n\big| = 2I_n \to 0$ : $\displaystyle\lim_{n\to+\infty}\sum_{k=1}^{n}\frac{(-1)^{k-1}}{k}=\ln2$.

**3.a)** Intégration par parties avec $u = \frac{1}{1+x^2}$, $v' = x^{2n+1}$, $v = \frac{x^{2n+2}}{2n+2}$ :
$$I_n=\left[\frac{x^{2n+2}}{(2n+2)(1+x^2)}\right]_0^1+\int_0^1\frac{x^{2n+2}}{2n+2}\cdot\frac{2x}{(1+x^2)^2}dx=\frac{1}{4(n+1)}+\frac{1}{n+1}\int_0^1\frac{x^{2n+3}}{(1+x^2)^2}dx.$$

**3.b)** Sur $[0,1]$, $0 \le \frac{x^{2n+3}}{(1+x^2)^2} \le x^{2n+3}$ (car $(1+x^2)^2 \ge 1$), d'où $0 \le \int_0^1\frac{x^{2n+3}}{(1+x^2)^2}dx \le \frac{1}{2n+4}$.

**3.c)** $nI_n=\frac{n}{4(n+1)}+\frac{n}{n+1}J_n$, avec $0 \le J_n \le \frac{1}{2n+4} \to 0$ : $\displaystyle\lim_{n\to+\infty}nI_n=\frac14$.

**4)** D'après 2.e) et 3.c), $I_n \sim \frac{1}{4n}$, donc
$$\sum_{k=1}^{n}\frac{(-1)^{k-1}}{k}-\ln2=2(-1)^{n-1}I_n\ \underset{n\to+\infty}{\sim}\ \frac{(-1)^{n-1}}{2n}.$$

---

## Exercice 3

**1)** Chaque tirage donne la boule $i$ avec la probabilité $\frac14$, indépendamment des autres : $X_i \hookrightarrow \mathcal B\left(k, \frac14\right)$, $E(X_i)=\frac k4$, $V(X_i)=k\cdot\frac14\cdot\frac34=\frac{3k}{16}$.

**2)** Non : $X_1+X_2+X_3+X_4 = k$. Par exemple, $P(X_1 = k, X_2 = k) = 0$ alors que $P(X_1 = k)P(X_2 = k) = \frac{1}{4^{2k}} \ne 0$.

**3.a)** $X_i + X_j$ compte les tirages qui donnent la boule $i$ ou la boule $j$ (probabilité $\frac12$ à chaque tirage) : $X_i + X_j \hookrightarrow \mathcal B\left(k, \frac12\right)$, de variance $\frac k4$.

**3.b)** $V(X_i+X_j)=V(X_i)+V(X_j)+2\operatorname{Cov}(X_i,X_j)$, d'où $\operatorname{Cov}(X_i,X_j)=\frac12\left(\frac k4-\frac{3k}{8}\right)=-\frac{k}{16}$ (négative : plus une boule sort, moins les autres sortent).

**4)** $Z_1 = 1$ de façon certaine : $E(Z_1) = 1$. Pour deux tirages, $Z_2 = 1$ si la deuxième boule est la même que la première : $P(Z_2=1)=\frac14$, $P(Z_2=2)=\frac34$, $E(Z_2)=\frac14+\frac32=\frac74$.

**5.a)** $Z_k = 1$ : les $k$ tirages donnent le même numéro, $P(Z_k=1)=4\times\left(\frac14\right)^k=\frac{1}{4^{k-1}}$.

**5.b)** $Z_k = k$ : les $k$ numéros sont tous différents. Si $k \le 4$ : $P(Z_k=k)=\frac{4\times3\times\dots\times(4-k+1)}{4^k}=\frac{4!}{(4-k)!\,4^k}$ ; si $k \ge 5$ : $P(Z_k = k) = 0$.

**5.c)** $Z_{k+1} = j$ se produit de deux façons incompatibles : soit $Z_k = j$ et le $(k+1)$-ième tirage redonne l'un des $j$ numéros déjà vus (probabilité $\frac j4$) ; soit $Z_k = j - 1$ et le tirage donne l'un des $4 - (j-1) = 5 - j$ numéros nouveaux (probabilité $\frac{5-j}{4}$). D'où la formule (probabilités totales).

**5.d)** $E(Z_{k+1})=\sum_jj\,P(Z_{k+1}=j)$. En regroupant les termes en $P(Z_k = i)$, le coefficient vaut $\frac{i\cdot i+(i+1)(4-i)}{4}=\frac{3i+4}{4}$. Donc $E(Z_{k+1})=\frac34\sum_iiP(Z_k=i)+\sum_iP(Z_k=i)=\frac34E(Z_k)+1$.

**6)** $v_{k+1}=E(Z_{k+1})-4=\frac34E(Z_k)-3=\frac34v_k$ : suite géométrique de raison $\frac34$ et de premier terme $v_1 = 1 - 4 = -3$. Donc $E(Z_k)=4-3\left(\frac34\right)^{k-1}=4\left(1-\left(\frac34\right)^k\right)$ (contrôle : $E(Z_2) = \frac74$).

**7)** Il n'y a que 4 numéros : $P(Z_k \ge 5) = 0$.

**8)** On choisit les deux numéros obtenus ($\binom42 = 6$ choix), puis une suite de $k$ tirages qui n'utilise que ces deux numéros, et les deux : $2^k - 2$ suites (on retire les deux suites constantes). Sur $4^k$ suites équiprobables :
$$P(Z_k=2)=\frac{6\,(2^k-2)}{4^k}.$$
(Contrôle : $k = 2$ donne $\frac{6\times2}{16}=\frac34$.)

---

## Exercice 4

**1)** Sur $[0,+\infty[$, $f'(x)=(1-x)e^{-x}$ : $f$ est croissante sur $[0,1]$ et décroissante sur $[1,+\infty[$.

**2)** Par croissances comparées, $\displaystyle\lim_{x\to+\infty}xe^{-x}=0$.

**3)**

| $x$ | $0$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | |
| $f$ | $0$ | croissante | $e^{-1}\approx0{,}37$ | décroissante | $0$ |

La courbe part de l'origine (tangente de pente 1), atteint son maximum $(1\,;\,0{,}37)$, puis se rapproche de l'axe des abscisses (asymptote $y = 0$) ; elle est confondue avec l'axe pour $x < 0$.

**4.a)** Avec $u = x$, $v' = e^{-x}$ : $\displaystyle\int_0^axe^{-x}dx=\Big[-xe^{-x}\Big]_0^a+\int_0^ae^{-x}dx=1-(a+1)e^{-a}$.

**4.b)** $(a+1)e^{-a} \to 0$ : la limite vaut **1**.

**5)** $f \ge 0$, continue sur $\mathbb{R}$, et $\int_{-\infty}^{+\infty}f=1$ : $f$ est une densité de probabilité.

**6)** Par intégration par parties, $\int_0^ax^2e^{-x}dx=-a^2e^{-a}+2\int_0^axe^{-x}dx \to 2$ : **$E(X) = 2$**. ($X$ suit la loi gamma de paramètre 2.)
