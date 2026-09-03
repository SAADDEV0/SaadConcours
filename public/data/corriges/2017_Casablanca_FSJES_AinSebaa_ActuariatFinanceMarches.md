> Corrigé avec calculs détaillés pour les questions calculables. Les questions 11-15 (statistique descriptive) et 26-30 (programmation linéaire) reposent sur un tableau de données partiellement coupé sur le scan source — la méthode est donnée, les valeurs numériques exactes sont à vérifier sur l'énoncé original complet.

**Mathématiques financières**

Q1. I=168, C=5630, j=94j (base 360) → t=168×360/(5630×94)≈**11,43%** (réponse A).
Q2. I=7035-6700=335 → j=335×360/(6700×0,075)=240 jours=**8 mois** (réponse D).
Q3. Taux mensuel équivalent à 5,3% trimestriel : (1+iₘ)³=1,053 → iₘ=(1,053)^(1/3)-1≈**1,736%** (réponse A).
Q4. 11243×(1,04)⁷≈**14 795,02** (réponse A).
Q5. PV des deux effets à 7,5% : 13000/(1,075)²+17000/(1,075)⁴≈11249,9+12730,9=23980,8. Résolution 32023,13/(1,075)ⁿ=23980,8 → n≈**4 ans** (réponse C).

**Algèbre linéaire**

Q6. AB=[[5,5,22],[2,16,34],[-11,15,-9]]. Deuxième ligne de (AB)ᵗ = deuxième colonne de AB = **(5, 16, 15)** (réponse A).
Q7. Polynôme caractéristique de C : det(C-xI) = **-(x+1)(x-1)²** (réponse B).
Q8. D est de **rang 2** (L3-L1 = -3×(L2-L1), lignes liées mais L1 et L2-L1 indépendantes) (réponse C).
Q9. R=diag(1,-1,-1) → R¹²=diag(1,1,1)=I₃, donc E¹²=P·I₃·P⁻¹=**I₃** (réponse D).
Q10. Résolution paramétrique : le système se ramène à m=11 indépendamment de z ⇒ infinité de solutions si **m=11** (réponse C).

**Statistique descriptive (Q11-Q15)**

Méthode : moyenne X̄=ΣXᵢYᵢ/ΣYᵢ (moyenne pondérée par les effectifs Y), variance=ΣYᵢ(Xᵢ-X̄)²/ΣYᵢ, droite de régression Y=aX+b avec a=Cov(X,Y)/Var(X), coefficient de corrélation r=Cov(X,Y)/(σX·σY). *Le tableau de données étant partiellement tronqué sur le scan source, les valeurs numériques finales ne peuvent pas être vérifiées ici avec certitude — reportez-vous à l'énoncé complet pour appliquer ces formules.*

**Probabilités**

Q16. P(A∪B)=P(A)+P(B) ⇒ P(A∩B)=0 ⇒ A et B sont **incompatibles** (réponse B).
Q17. Densité de la loi exponentielle de paramètre 2 : f(x)=**2e⁻²ˣ sur R⁺** (réponse B).
Q18. Le théorème central limite approche les lois par la loi **Normale** (réponse A).
Q19. X~B(30 ; 0,1) → E(X)=np=**3** (réponse B).
Q20. P(X<4 | X>2) = P(X=3)/P(X>2) pour X entier (réponse A).

**Échantillonnage**

Q21. p̂=88/120≈**0,73** (réponse D).
Q22. Fractile z à 99% : **2,58**.
Q23. n≥(z²p(1-p))/E²=(2,58²×0,73×0,27)/0,03²≈**1458** (réponse C).
Q24. Pour estimer p, il faut au minimum connaître la taille n de l'échantillon (et la proportion observée) — la taille N de la population n'est en principe pas requise pour une grande population.
Q25. Plus n est grand, plus l'amplitude de l'intervalle de confiance est **petite** (réponse A).

**Programmation linéaire (Q26-Q30)**

Modèle : Max Z=3x₁+4x₂+12x₃ sous x₁+2x₂+3x₃≤300 (contrainte temps de travail), x₁≤40, x₃≤80, xᵢ≥0. *Les valeurs optimales exactes (Q28-Q30) dépendent du tableau simplexe final fourni dans l'énoncé, partiellement tronqué sur le scan — appliquer la lecture standard du tableau optimal (colonne « sm » = second membre = valeurs des variables de base) et la théorie de la dualité (Q29) et de l'analyse de sensibilité (Q30) à partir du tableau complet.*
