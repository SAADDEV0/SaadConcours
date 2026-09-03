> Corrigé indicatif rédigé à partir du programme standard de probabilités, statistiques et économétrie — aucune grille de correction officielle disponible.

**Sujet d'ordre général**

La transformation digitale améliore la performance des entreprises marocaines à plusieurs niveaux : optimisation des processus internes (ERP, automatisation), meilleure connaissance du marché et des clients grâce à la donnée, réduction des coûts de transaction et de coordination, accès facilité aux marchés internationaux via le commerce électronique, et gain de réactivité face à la concurrence. Ses limites au Maroc tiennent au retard d'équipement et de compétences numériques de nombreuses PME, à la fracture territoriale d'accès aux infrastructures numériques, et à la nécessaire adaptation du cadre réglementaire (cybersécurité, protection des données).

**Questions de réflexion**

**1.** Le risque se définit comme la possibilité qu'un événement incertain, dont les conséquences peuvent être mesurées, affecte défavorablement (ou favorablement) l'atteinte d'un objectif ; il combine une probabilité d'occurrence et une ampleur d'impact.

**2.** Formule de Bayes : P(A|B) = [P(B|A) × P(A)] / P(B). Elle permet de réviser la probabilité d'un événement A à la lumière d'une information nouvelle B (probabilité a posteriori). Ses conditions d'application : les événements doivent être mesurables, P(B) doit être strictement positif, et l'on doit disposer (ou pouvoir estimer) les probabilités conditionnelles inverses P(B|A) et la probabilité a priori P(A).

**3.** L'erreur standard à la moyenne (erreur-type de la moyenne, σ/√n) mesure la précision avec laquelle la moyenne d'un échantillon estime la vraie moyenne de la population : plus elle est faible, plus l'estimation de la moyenne est fiable ; elle diminue lorsque la taille de l'échantillon n augmente.

**4.** Vitesse moyenne harmonique pondérée par les distances (à défaut de connaître les distances exactes, en supposant des distances égales sur chaque tronçon AB, BC, CD) :
v̄ = 3 / (1/100 + 1/120 + 1/105) = 3 / (0,01 + 0,00833 + 0,00952) = 3 / 0,02786 ≈ **107,7 km/h**.
(La moyenne harmonique s'impose ici car on additionne des temps de parcours sur des distances comparables, non des vitesses directement.)

**5.** Taux d'intérêt moyen géométrique sur trois ans :
(1+r̄)³ = (1,03)×(1,032)×(1,04) = 1,10537 → r̄ = (1,10537)^(1/3) − 1 ≈ **3,39%**.

**6.** Intérêt simple : Vf = C×(1 + n×t) = 45 000 × (1 + 2×0,045) = 45 000 × 1,09 = **49 050 Dh**.

**Exercice — Régression END = a + b·RENT + u**

**1.** Sur des variables centrées-réduites (moyenne nulle, écart-type unitaire), la droite de régression des moindres carrés passe nécessairement par le point moyen (0,0) puisque X̄ = Ȳ = 0 ; l'ordonnée à l'origine â = Ȳ − b̂X̄ = 0 − b̂×0 = 0 est donc toujours nulle.

**2.** Sur variables centrées-réduites, le coefficient de pente estimé est égal au coefficient de corrélation linéaire r entre END et RENT (b̂ = r × σ_Y/σ_X = r puisque les écarts-types valent 1). Or un coefficient de corrélation est toujours compris entre −1 et 1 en valeur absolue, donc la pente estimée l'est également.

**3.** Avec β = 0,963 (proche de 1), la rentabilité économique explique très fortement et positivement le niveau d'endettement des entreprises de l'échantillon : une hausse d'un écart-type de la rentabilité est associée à une hausse de 0,963 écart-type de l'endettement — une relation quasi-proportionnelle et de sens positif entre les deux variables centrées-réduites.

**4.** Avec R² = 0,927, le modèle explique 92,7% de la variance de l'endettement par la rentabilité économique, un pouvoir explicatif très élevé (R² ajusté = 0,919 confirmant la robustesse malgré le faible nombre d'observations, n=10). La P-critique nulle du test F de Fisher indique que la relation globale du modèle est hautement significative, et la significativité de la pente au seuil de 5% confirme que l'effet de la rentabilité sur l'endettement n'est pas dû au hasard. On peut donc conclure à une influence statistiquement significative et économiquement forte de la rentabilité sur l'endettement des entreprises de cet échantillon (en gardant à l'esprit la prudence nécessaire compte tenu de la petite taille de l'échantillon, n=10, qui limite la généralisation des résultats).
