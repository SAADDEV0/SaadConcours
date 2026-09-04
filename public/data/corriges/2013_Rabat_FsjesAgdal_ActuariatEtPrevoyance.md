> Corrigé avec calculs détaillés.

**Test en Mathématiques**

**Exercice 1**

$$A_m = \begin{pmatrix} m & 1 & 1 \\ 1 & m & 1 \\ 1 & 1 & m \end{pmatrix}$$

1) On calcule $\det(A_m)$ en développant :

$\det(A_m) = m(m^2-1) - 1(m-1) + 1(1-m) = m^3 - m - (m-1) + (1-m) = m^3 - m - m + 1 + 1 - m = m^3 - 3m + 2$

On factorise : $m^3 - 3m + 2 = (m-1)^2(m+2)$ (en vérifiant $m=1$ racine double et $m=-2$ racine simple).

Donc $A_m$ est inversible si et seulement si $(m-1)^2(m+2) \neq 0$, c'est-à-dire pour tout $m \neq 1$ et $m \neq -2$.

2) Pour $m=3$ : $A_3 = \begin{pmatrix} 3 & 1 & 1 \\ 1 & 3 & 1 \\ 1 & 1 & 3 \end{pmatrix}$, $\det(A_3) = 3^3-3(3)+2 = 27-9+2=20 \neq 0$, le système $A_3 X = b$ admet une solution unique.

On résout $3x+y+z=1$, $x+3y+z=2$, $x+y+3z=3$.

En sommant les trois équations : $5(x+y+z)=6 \Rightarrow x+y+z = 6/5$.

Équation 1 moins (x+y+z) : $2x = 1 - 6/5 = -1/5 \Rightarrow x = -1/10$.

Équation 2 moins (x+y+z) : $2y = 2 - 6/5 = 4/5 \Rightarrow y = 2/5$.

Équation 3 moins (x+y+z) : $2z = 3 - 6/5 = 9/5 \Rightarrow z = 9/10$.

Vérification : $x+y+z = -1/10+4/10+9/10 = 12/10 = 6/5$. ✓

**Solution : $X = (-1/10,\ 2/5,\ 9/10)$.**

**Exercice 2**

$$A = \begin{pmatrix} 1 & 3 & 2 \\ 4 & 2 & 3 \\ 2 & 1 & 1 \end{pmatrix}$$

1) Le polynôme caractéristique de $A$ est $\chi_A(\lambda) = -\lambda^3 + 4\lambda^2 + 12\lambda + 5$ (trace$(A)=4$, calcul des mineurs principaux et du déterminant confirment les coefficients). D'après le théorème de Cayley-Hamilton, $A$ annule son polynôme caractéristique, donc $-A^3 + 4A^2 + 12A + 5I_3 = O_3$.

2) De $-A^3+4A^2+12A+5I_3=O_3$ on tire $A(-A^2+4A+12I_3) = -5I_3$, soit $A \times \dfrac{1}{5}(A^2-4A-12I_3) = I_3$. Donc $A$ est inversible et :

$$A^{-1} = \frac{1}{5}(A^2 - 4A - 12I_3)$$

On calcule $A^2 = \begin{pmatrix} 17 & 11 & 13 \\ 18 & 19 & 17 \\ 8 & 9 & 8 \end{pmatrix}$, puis $A^2-4A-12I_3 = \begin{pmatrix} 17-4-12 & 11-12 & 13-8 \\ 18-16 & 19-8-12 & 17-12 \\ 8-8 & 9-4 & 8-4-12 \end{pmatrix} = \begin{pmatrix} 1 & -1 & 5 \\ 2 & -1 & 5 \\ 0 & 5 & -8 \end{pmatrix}$

$$A^{-1} = \frac{1}{5}\begin{pmatrix} 1 & -1 & 5 \\ 2 & -1 & 5 \\ 0 & 5 & -8 \end{pmatrix}$$

3) Par la méthode des cofacteurs, on retrouve le même résultat : $\det(A) = -5$ (à partir du polynôme caractéristique, $\chi_A(0) = 5 = -\det(A) \Rightarrow \det(A) = -5$), et la comatrice de $A$ divisée par $\det(A)$ redonne $A^{-1} = \frac{1}{5}\begin{pmatrix} 1 & -1 & 5 \\ 2 & -1 & 5 \\ 0 & 5 & -8 \end{pmatrix}$, ce qui confirme le résultat obtenu par Cayley-Hamilton.

**Exercice 3**

Soit $F = \text{Vect}(u,v)$ avec $u=(1,1,0)$, $v=(1,0,3)$.

1) Gram-Schmidt : $e_1 = u/\|u\| = (1,1,0)/\sqrt{2}$.

$w_2 = v - \langle v,e_1\rangle e_1$, avec $\langle v,e_1\rangle = (1\times1+0\times1+3\times0)/\sqrt2 = 1/\sqrt2$.

$w_2 = (1,0,3) - \frac{1}{2}(1,1,0) = (1/2,\,-1/2,\,3)$, de norme $\sqrt{1/4+1/4+9} = \sqrt{19/2}$.

$e_2 = w_2 / \|w_2\| = \dfrac{1}{\sqrt{19/2}}(1/2,-1/2,3)$.

$(e_1,e_2)$ est une base orthonormée de $F$.

2) $F^{\perp} = \{(x,y,z) \in \mathbb{R}^3 : x+y=0,\ x+3z=0\}$ (orthogonalité à $u$ et $v$). En résolvant, $y=-x$, $z=-x/3$, donc $F^{\perp} = \text{Vect}((3,-3,-1))$, une droite vectorielle.

3) Une base orthonormale de $F^{\perp}$ : $e_3 = \dfrac{1}{\sqrt{19}}(3,-3,-1)$ (car $\|(3,-3,-1)\| = \sqrt{9+9+1}=\sqrt{19}$).

**Test en Sciences économiques (sujet 1 — déficit des régimes de retraite)**

**Introduction :** le système de retraite marocain repose historiquement sur la répartition (CMR, RCAR, CNSS) ; le vieillissement démographique, la baisse du ratio cotisants/pensionnés et une gestion parfois défaillante des réserves menacent la soutenabilité financière de ces régimes.

**I. Diagnostic du déséquilibre**
- Déséquilibre démographique : allongement de l'espérance de vie et baisse de la natalité réduisent le ratio actifs/retraités.
- Déséquilibre paramétrique : cotisations insuffisantes par rapport aux prestations promises, taux de remplacement généreux hérités du passé.
- Fragmentation du système (plusieurs caisses non harmonisées) qui empêche la mutualisation des risques.

**II. Mesures urgentes à entreprendre**
1. Réforme paramétrique : relever progressivement l'âge de départ à la retraite, ajuster le taux de cotisation et le mode de calcul des pensions.
2. Réforme systémique : instaurer un régime unifié à deux (ou trois) pôles (public/privé) pour mutualiser les risques et harmoniser les droits.
3. Diversification et sécurisation des placements des réserves des caisses de retraite.
4. Développement de la retraite complémentaire par capitalisation (épargne retraite individuelle/collective) pour alléger la pression sur la répartition.
5. Élargissement de l'assiette de cotisation par la généralisation de la couverture sociale (secteur informel).

**Conclusion :** une réforme globale, progressive et concertée (partenaires sociaux, État, caisses) est indispensable pour garantir la pérennité financière des régimes et une retraite décente aux générations futures.

**Test en Sciences économiques (sujet 2 — missions de l'actuaire en assurance)**

**Missions de l'actuaire :**
1. Tarification des produits d'assurance (calcul des primes en fonction du risque assuré).
2. Évaluation des provisions techniques (provisions pour sinistres, provisions mathématiques en assurance-vie).
3. Analyse et modélisation des risques (mortalité, morbidité, risques catastrophiques) à l'aide d'outils statistiques et probabilistes.
4. Contrôle de la solvabilité de la compagnie (respect des marges de solvabilité réglementaires, ex. Solvabilité II / réglementation ACAPS au Maroc).
5. Conception de nouveaux produits d'assurance et de prévoyance.
6. Reporting réglementaire et prudentiel auprès des autorités de contrôle.

**Compétences requises :**
- Solides bases en mathématiques financières, probabilités et statistiques.
- Maîtrise des outils informatiques et de modélisation actuarielle.
- Connaissance du cadre juridique et réglementaire de l'assurance.
- Rigueur, esprit d'analyse, capacité à vulgariser des résultats techniques auprès de non-spécialistes.