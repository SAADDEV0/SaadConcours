> Corrigé rédigé à partir du programme standard du module (mathématiques financières, statistique inférentielle et économétrie de base) et d'un raisonnement/calcul vérifié — aucune source officielle disponible pour ce sujet.

### Sujet d'ordre général

Question de réflexion ouverte. Une réponse structurée peut aborder :

1. **Gains d'efficacité opérationnelle** : automatisation des processus (ERP, CRM), réduction des délais et des coûts de gestion, dématérialisation.
2. **Amélioration de la prise de décision** : Business Intelligence et data analytics permettant un pilotage en temps réel de la performance.
3. **Accès aux marchés et compétitivité** : e-commerce, marketing digital, ouverture à l'international sans les contraintes physiques classiques.
4. **Nouveaux modèles économiques** : plateformisation, économie de la donnée, personnalisation de l'offre.
5. **Limites** : coût de l'investissement initial, résistance au changement, fracture numérique entre grandes entreprises et PME, cybersécurité — la transformation digitale est un levier de performance mais suppose un accompagnement (formation, financement, infrastructure).

### Épreuve de spécialité — Actuariat et Gestion des Risques

#### Questions de réflexion

**1. Définition du risque**

Le risque est la possibilité qu'un événement futur, incertain, produise un dommage (perte financière, sinistre) affectant une personne ou une organisation. Il se caractérise par une probabilité d'occurrence et une gravité (ampleur des conséquences).

**2. Formule de Bayes et conditions d'application**

$$P(A|B) = \frac{P(B|A) \times P(A)}{P(B)}, \quad \text{avec } P(B) = \sum_i P(B|A_i)P(A_i)$$

Conditions d'application : les événements $A_i$ doivent former une partition de l'univers (exhaustifs et deux à deux incompatibles), et $P(B) \neq 0$. Elle nécessite de connaître les probabilités a priori $P(A_i)$ et les vraisemblances $P(B|A_i)$.

**3. Interprétation statistique de l'erreur standard à la moyenne**

L'erreur standard de la moyenne, $\sigma/\sqrt n$, mesure la dispersion de la distribution d'échantillonnage de la moyenne, c'est-à-dire la précision avec laquelle la moyenne d'un échantillon estime la vraie moyenne de la population. Plus $n$ est grand, plus l'erreur standard est faible, donc plus l'estimation de la moyenne est précise.

**4. Vitesse moyenne entre A et D**

En l'absence d'indication contraire, on suppose que les distances AB, BC et CD sont égales (à $d$). La vitesse moyenne sur l'ensemble du trajet est la **moyenne harmonique** des trois vitesses (car on additionne des temps, pas des vitesses) :

$$t_{total} = \frac{d}{100} + \frac{d}{120} + \frac{d}{105} = d\left(\frac{1}{100}+\frac{1}{120}+\frac{1}{105}\right)$$

En mettant au même dénominateur (4200) :
$$\frac{1}{100}+\frac{1}{120}+\frac{1}{105} = \frac{42}{4200}+\frac{35}{4200}+\frac{40}{4200} = \frac{117}{4200}$$

$$V_{moy} = \frac{3d}{t_{total}} = \frac{3}{117/4200} = \frac{3 \times 4200}{117} = \frac{12600}{117} \approx 107,69 \text{ km/h}$$

**5. Taux d'intérêt moyen sur 3 ans**

En capitalisation (taux successifs qui s'enchaînent), le taux moyen $\bar i$ vérifie :
$$(1+\bar i)^3 = (1+0,03)(1+0,032)(1+0,04)$$
$$(1,03)(1,032)(1,04) = 1,03 \times 1,032 = 1,06296 \; ; \; 1,06296 \times 1,04 = 1,105478$$
$$\bar i = (1,105478)^{1/3} - 1 \approx 1,03397 - 1 = 0,03397 \approx 3,40\%$$

(Cette moyenne géométrique, 3,397%, est très proche de la moyenne arithmétique simple $(3+3{,}2+4)/3 = 3,4\%$, ce qui est normal pour des taux voisins.)

**6. Somme future à intérêt simple**

$$FV = C(1 + n \times i) = 45000 \times (1 + 2 \times 0,045) = 45000 \times 1,09 = 49\,050 \text{ Dh}$$

#### Exercice

**1. Ordonnée à l'origine nulle sur variables centrées-réduites**

Pour une régression simple $Y=a+bX+u$, l'estimateur des MCO de la constante est $\hat a = \bar Y - \hat b \bar X$. Or centrer une variable signifie lui soustraire sa moyenne, donc pour des variables centrées-réduites $\bar Y = 0$ et $\bar X = 0$. Il vient immédiatement $\hat a = 0 - \hat b \times 0 = 0$ : l'ordonnée à l'origine estimée est toujours nulle.

**2. Pente toujours ≤ 1 en valeur absolue**

Pour des variables centrées-réduites (variance égale à 1), la pente estimée $\hat\beta = \dfrac{Cov(X,Y)}{Var(X)} = \dfrac{Cov(X,Y)}{\sigma_X \sigma_Y} = r_{XY}$, c'est-à-dire qu'elle est **égale au coefficient de corrélation linéaire** $r$ entre les deux variables. Or par l'inégalité de Cauchy-Schwarz, $|r_{XY}| \le 1$ toujours. Donc $|\hat\beta| \le 1$.

**3. Signification économique de β = 0,963**

Puisque les variables sont centrées-réduites, β = 0,963 est en réalité le coefficient de corrélation linéaire entre RENT et END (on vérifie d'ailleurs que $R^2 = \beta^2 = 0,963^2 = 0,927$, cohérent avec le tableau). Une augmentation d'un écart-type de la rentabilité économique est associée, en moyenne, à une augmentation de 0,963 écart-type de l'endettement : la relation entre rentabilité et endettement est **positive et très forte** (proche de la corrélation parfaite).

**4. Test de significativité globale et de la pente**

- $R^2 = 0,927$ : la rentabilité économique explique 92,7% de la variance de l'endettement (pouvoir explicatif très élevé).
- La probabilité critique associée au test F de Fisher est nulle (< 0,05) : on rejette $H_0: \beta = 0$, le modèle est globalement significatif.
- La pente est elle-même déclarée statistiquement significative au seuil de 5%.

On peut donc conclure, sur la base de ces résultats, qu'il existe une relation statistiquement significative entre la rentabilité économique (RENT) et le niveau d'endettement (END) des entreprises de l'échantillon : l'hypothèse d'absence de relation ($\beta=0$) est rejetée au seuil de 5%.
