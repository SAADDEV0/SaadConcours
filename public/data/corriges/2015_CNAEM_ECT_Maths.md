> Corrigé indicatif rédigé par SaadConcours, pas une correction officielle du CNAEM. Tous les résultats ont été recalculés (puissances de $A$, suites, intégrales, lois de probabilité).

## EXERCICE 1

### Partie I

**1.a)** On résout $PX = Y$ (ou l'on vérifie le produit) : $P$ est inversible et
$$P^{-1}=\begin{pmatrix}-\frac12&\frac12&1\\1&0&-1\\\frac12&-\frac12&0\end{pmatrix}.$$
Vérification : $PP^{-1} = I$. (On peut aussi calculer $\det P = -2 \ne 0$.)

**1.b)** $P^{-1}\begin{pmatrix}-\frac32\\0\\-2\end{pmatrix}=\begin{pmatrix}\frac34+0-2\\-\frac32+0+2\\-\frac34\end{pmatrix}=\begin{pmatrix}-\frac54\\\frac12\\-\frac34\end{pmatrix}$.

**2.a)** $PD=\begin{pmatrix}-1&2&2\\-1&2&-2\\-1&0&2\end{pmatrix}$, puis $PDP^{-1}=\begin{pmatrix}\frac72&-\frac32&-3\\\frac32&\frac12&-3\\\frac32&-\frac32&-1\end{pmatrix}=A$.

**2.b)** $A^0 = I = PD^0P^{-1}$ ; si $A^n = PD^nP^{-1}$, alors $A^{n+1}=PD^nP^{-1}PDP^{-1}=PD^{n+1}P^{-1}$.

**2.c)** $D^n=\mathrm{diag}\big((-1)^n,\,2^n,\,2^n\big)$.

**2.d)** En posant $\varepsilon = (-1)^n$ et $t = 2^n$ :
$$A^n=\begin{pmatrix}-\frac{\varepsilon}{2}+\frac{3t}{2}&\frac{\varepsilon}{2}-\frac t2&\varepsilon-t\\-\frac{\varepsilon}{2}+\frac t2&\frac{\varepsilon}{2}+\frac t2&\varepsilon-t\\-\frac{\varepsilon}{2}+\frac t2&\frac{\varepsilon}{2}-\frac t2&\varepsilon\end{pmatrix}.$$
Contrôle : $n = 1$ redonne $A$ ; pour $n = 3$, la formule donne la première ligne $(12{,}5\,;\,-4{,}5\,;\,-9)$, comme le calcul direct de $A^3$.

### Partie II

**1.** Les trois relations s'écrivent ligne par ligne $X_{n+1} = AX_n + B$.

**2.a)** $U = AU + B \iff U - AU = B \iff (I - A)U = B$.

**2.b)** Le calcul donne $A^2=\begin{pmatrix}\frac{11}{2}&-\frac32&-3\\\frac32&\frac52&-3\\\frac32&-\frac32&1\end{pmatrix}$ et $A^2 - A - 2I = 0$. Alors $\left(-\frac12A\right)(I-A)=-\frac12\left(A-A^2\right)=\frac12\left(A^2-A\right)=\frac12\cdot2I=I$.

**2.c)** $I - A$ est inversible et $(I-A)^{-1}=-\frac12A$.

**2.d)** $U=(I-A)^{-1}B=-\frac12AB$. Or $AB=\begin{pmatrix}\frac72-\frac32+6\\\frac32+\frac12+6\\\frac32-\frac32+2\end{pmatrix}=\begin{pmatrix}8\\8\\2\end{pmatrix}$, donc $U=\begin{pmatrix}-4\\-4\\-1\end{pmatrix}$.

**3.a)** $X_{n+1}-U=(AX_n+B)-(AU+B)=A(X_n-U)$.

**3.b)** Vrai pour $n = 0$ ; si $X_n - U = A^n(X_0 - U)$, alors $X_{n+1}-U=A\,A^n(X_0-U)=A^{n+1}(X_0-U)$.

**4.** $X_0 - U = (0, 2, 0)$ : $X_n = U + 2\times$(deuxième colonne de $A^n$), soit
$$x_n=-4+(-1)^n-2^n,\qquad y_n=-4+(-1)^n+2^n,\qquad z_n=-1+(-1)^n-2^n.$$
Contrôle : $n = 0$ redonne $(-4,-2,-1)$ ; $n = 1$ donne $(-7,-3,-4)$, comme le calcul direct de $AX_0 + B$.

**5.** On pose $x_n = \ln(a_n)$, $y_n = b_n$, $z_n = \ln(c_n)$ (possible car $a_n, c_n > 0$). On retrouve exactement le système de la partie II, avec $x_0 = \ln e^{-4} = -4$, $y_0 = -2$, $z_0 = \ln e^{-1} = -1$. D'où :
$$a_n=e^{-4+(-1)^n-2^n},\qquad b_n=-4+(-1)^n+2^n,\qquad c_n=e^{-1+(-1)^n-2^n}.$$

---

## EXERCICE 2

### Partie I

**1.** Par croissances comparées, $x^3e^{-x/2} \to 0$ et $x^2e^{-x/2} \to 0$ : $\displaystyle\lim_{+\infty}f = 0$.

**2.** Pour $x \ge 0$ : $f'(x)=\frac18\Big[(3x^2+4x)-\frac12(x^3+2x^2)\Big]e^{-\frac x2}=\frac18\Big(-\frac{x^3}{2}+2x^2+4x\Big)e^{-\frac x2}=-\frac{1}{16}x\left(x^2-4x-8\right)e^{-\frac x2}$.

**3.** $x^2 - 4x - 8$ a pour discriminant $48$ : $x_1 = 2 - 2\sqrt3$ et $x_2 = 2 + 2\sqrt3$.

**4.** Sur $\mathbb{R}_+$, $x \ge 0$, $x - x_1 > 0$ : $f'(x)$ a le signe de $-(x - x_2)$.

| $x$ | $0$ | | $x_2 = 2+2\sqrt3$ | | $+\infty$ |
|---|---|---|---|---|---|
| $f'(x)$ | $0$ | $+$ | $0$ | $-$ | |
| $f$ | $0$ | croissante | $f(x_2)$ | décroissante | $0$ |

avec $f(x_2)=(14+8\sqrt3)\,e^{-(1+\sqrt3)}\approx1{,}81$.

### Partie II

**1.a)** $\displaystyle\int_0^Ae^{-\frac x2}dx=2\left(1-e^{-\frac A2}\right)\to2$ : $I_0$ converge et vaut 2.

**1.b)** Intégration par parties avec $u = x^{n+1}$, $v' = e^{-x/2}$, $v = -2e^{-x/2}$ :
$$\int_0^Ax^{n+1}e^{-\frac x2}dx=\Big[-2x^{n+1}e^{-\frac x2}\Big]_0^A+2(n+1)\int_0^Ax^ne^{-\frac x2}dx=-2A^{n+1}e^{-\frac A2}+2(n+1)\int_0^Ax^ne^{-\frac x2}dx.$$

**1.c)** Avec $A = 2(n+1)t$ : $A^{n+1}e^{-\frac A2}=\big(2(n+1)\big)^{n+1}\big(te^{-t}\big)^{n+1}$, et $te^{-t} \to 0$ quand $t \to +\infty$ : la limite est 0.

**1.d)** Par récurrence : $I_0$ converge ; si $I_n$ converge, le membre de droite de 1.b) tend vers $0 + 2(n+1)I_n$, donc $I_{n+1}$ converge et $I_{n+1} = 2(n+1)I_n$.

**1.e)** $I_0 = 2 = 2^1\cdot0!$ ; si $I_n = 2^{n+1}n!$, alors $I_{n+1}=2(n+1)2^{n+1}n!=2^{n+2}(n+1)!$.

**2.a)** $g \ge 0$, continue sauf éventuellement en 0, et
$$\int_{-\infty}^{+\infty}g=\frac{1}{128}\left(I_3+2I_2\right)=\frac{1}{128}\left(96+32\right)=1.$$
$g$ est une densité de probabilité.

**2.b)** $E(S)=\frac{1}{128}(I_4+2I_3)=\frac{768+192}{128}=\frac{15}{2}$ ; $E(S^2)=\frac{1}{128}(I_5+2I_4)=\frac{7\,680+1\,536}{128}=72$ ; $V(S)=72-\frac{225}{4}=\frac{63}{4}$.

### Partie III

**1.a)** $\frac1k-\frac{1}{k+1}=\frac{(k+1)-k}{k(k+1)}=\frac{1}{k(k+1)}$.

**1.b)** $\dfrac{I_{k-1}}{(k+1)!\,2^k}=\dfrac{2^k(k-1)!}{(k+1)!\,2^k}=\dfrac{1}{k(k+1)}$. La somme est télescopique : $S_N=\sum_{k=1}^N\left(\frac1k-\frac1{k+1}\right)=1-\frac{1}{N+1}$.

**2.** $S_N \to 1$ : la série converge et sa somme vaut **1**.

---

## EXERCICE 3

**1.a)** Dé équilibré : $X$ suit la loi uniforme sur $\{1,\dots,6\}$.

**1.b)** $E(X) = \frac72$ et $V(X) = \frac{35}{12}$.

**2.a)** Pour $k$ impair, un seul lancer : $P_{(X=k)}(Y=0)=P(\text{Face})=\frac12$.

**2.b)** Pour $k$ pair, deux lancers indépendants : $P_{(X=k)}(Y=0)=\left(\frac12\right)^2=\frac14$.

**2.c)** Probabilités totales : $P(Y=0)=\frac36\cdot\frac12+\frac36\cdot\frac14=\frac38$.

**3.** $Y = 2$ exige deux lancers, donc un résultat pair : $P(Y=2)=3\times\frac16\times\frac14=\frac18$.

**4.** $P(Y=1)=1-\frac38-\frac18=\frac12$. Loi de $Y$ : $P(Y=0)=\frac38$, $P(Y=1)=\frac12$, $P(Y=2)=\frac18$.
$E(Y)=\frac12+\frac28=\frac34$ ; $E(Y^2)=\frac12+\frac48=1$ ; $V(Y)=1-\frac{9}{16}=\frac{7}{16}$.

**5.a)**

| | $Y = 0$ | $Y = 1$ | $Y = 2$ |
|---|---|---|---|
| $X = k$ impair (1, 3, 5) | $\frac{1}{12}$ | $\frac{1}{12}$ | $0$ |
| $X = k$ pair (2, 4, 6) | $\frac{1}{24}$ | $\frac{1}{12}$ | $\frac{1}{24}$ |

**5.b)** $P(X=1,\,Y=2)=0 \ne P(X=1)P(Y=2)=\frac{1}{48}$ : $X$ et $Y$ ne sont **pas indépendantes**.

**5.c)** $E(XY)=\sum_{k\text{ impair}}k\cdot\frac{1}{12}+\sum_{k\text{ pair}}k\Big(\frac{1}{12}+2\cdot\frac{1}{24}\Big)=\frac{9}{12}+\frac{12}{6}=\frac{11}{4}$, donc $\operatorname{Cov}(X,Y)=\frac{11}{4}-\frac72\cdot\frac34=\frac{22-21}{8}=\frac18$.

**5.d)** $\rho(X,Y)=\dfrac{1/8}{\sqrt{\frac{35}{12}\cdot\frac{7}{16}}}=\dfrac{1/8}{\sqrt{\frac{245}{192}}}\approx0{,}111$ : faible corrélation positive.

---

## EXERCICE 4

**1.a)** $f$ est continue sur $]-\infty,0[$ et sur $]0,+\infty[$ ; en 0, la limite à droite vaut $1 - 1 = 0 = f(0)$ : $f$ est continue sur $\mathbb{R}$.

**1.b)** $\theta^3-\theta^4=\theta^3(1-\theta)>0$ pour $\theta \in\, ]0,1[$.

**1.c)** Si $t > 0$, $-\frac{t}{12} < 0$, donc $0 < e^{-t/12} < 1$.

**1.d)** Avec $\theta = e^{-t/12}$ : $e^{-t/4}=\theta^3$ et $e^{-t/3}=\theta^4$, donc $f(t)=\theta^3-\theta^4>0$ pour $t > 0$ ; et $f(t) = 0$ pour $t \le 0$.

**2.a)** Si $x \le 0$, $F(x) = 0$. Si $x > 0$, $F(x)=\int_{-\infty}^0 0\,dt+\int_0^xf(t)dt=\int_0^xf(t)dt$.

**2.b)** $\int_0^xe^{-at}dt=\left[-\frac1ae^{-at}\right]_0^x=\frac1a\left(1-e^{-ax}\right)$.

**2.c)** $F(x)=4\left(1-e^{-x/4}\right)-3\left(1-e^{-x/3}\right)=1-4e^{-\frac x4}+3e^{-\frac x3}$.

**2.d)** $\displaystyle\lim_{x\to+\infty}F(x)=1$ (donc $f$ est bien une densité).

**3.** $P(3<X\le4)=F(4)-F(3)=\left(1-4e^{-1}+3e^{-\frac43}\right)-\left(1-4e^{-\frac34}+3e^{-1}\right)=-7e^{-1}+3e^{-\frac43}+4e^{-\frac34}$.

**4.a)** *i)* $\{X > x\}$ est l'événement contraire de $\{X \le x\}$. *ii)* $(E)$ s'écrit $P(X \le \mu) = 1 - P(X \le \mu)$, soit $P(X \le \mu) = \frac12$. *iii)* Pour $\mu > 0$ : $1-4e^{-\mu/4}+3e^{-\mu/3}=\frac12 \iff 2-8e^{-\mu/4}+6e^{-\mu/3}=1 \iff 1-8e^{-\frac14\mu}+6e^{-\frac13\mu}=0$.

**4.b)** $g'(\theta)=-24\theta^2+24\theta^3=24\theta^2(\theta-1)<0$ sur $]0,1[$ : $g$ est continue et strictement décroissante, avec $g(0^+) = 1$ et $g(1^-) = -1$. Elle réalise donc une bijection de $]0,1[$ sur $]-1,1[$.

**4.c)** $0 \in\, ]-1,1[$ : il existe un unique $\theta_0 \in\, ]0,1[$ tel que $g(\theta_0) = 0$. Or $(E'')$ s'écrit $g\left(e^{-\mu/12}\right)=0$, et $\mu \mapsto e^{-\mu/12}$ est une bijection de $]0,+\infty[$ sur $]0,1[$ : $(E)$ a une unique solution, $\mu = -12\ln\theta_0$ (la médiane de $X$, environ 5,85).
