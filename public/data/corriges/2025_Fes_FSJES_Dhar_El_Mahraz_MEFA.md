> Corrigé indicatif rédigé par SaadConcours, pas une correction officielle de la FSJES Fès. Le sujet ne donne ni durée ni barème. Tous les calculs de l'exercice ont été refaits ; le sujet demande trois chiffres après la virgule, mais l'estimation des coefficients doit se faire avec la matrice inverse exacte (voir le piège de la question 3).

## Méthode

L'épreuve mélange trois exercices très différents. Répartissez votre temps selon leur poids probable : la dissertation demande un plan détaillé et soigné, l'exercice est entièrement calculable en 30 à 40 minutes si vous posez les sommes proprement, et les questions de cours se traitent en quelques lignes chacune, avec une définition, une formule et un exemple.

---

## Dissertation — Quelles fonctions de la politique économique ?

### Introduction

**Accroche.** Face à l'inflation de 2022 (6,6 % au Maroc selon le HCP), Bank Al-Maghrib a relevé son taux directeur de 1,5 % à 3 % entre septembre 2022 et mars 2023, tandis que l'État maintenait des subventions au gaz butane et aux transporteurs. Deux autorités, deux instruments, mais une même question : à quoi sert la politique économique ?

**Définitions.** La politique économique est l'ensemble des décisions prises par les pouvoirs publics (gouvernement, banque centrale) pour orienter l'activité économique vers des objectifs jugés souhaitables, à l'aide d'instruments (budget, monnaie, change, réglementation). Ses **fonctions** sont les grandes missions qu'elle remplit.

**Problématique.** La politique économique se limite-t-elle aux trois fonctions classiques décrites par Musgrave (allocation, redistribution, stabilisation), ou doit-elle aujourd'hui assumer des fonctions plus larges, de croissance et de transformation structurelle, au risque de rencontrer des limites ?

**Annonce du plan.** Nous verrons d'abord les fonctions classiques de la politique économique (I), puis leur élargissement et leurs limites (II).

### I. Les fonctions classiques de la politique économique

**A. La fonction d'allocation : corriger les défaillances du marché**
- Le marché ne produit pas, ou pas assez, les **biens publics** (non-rivalité, non-exclusion : défense, éclairage public) et ignore les **externalités** (pollution, éducation).
- L'État finance alors directement (infrastructures, écoles, hôpitaux) ou modifie les prix relatifs par la fiscalité et les subventions (taxe pigouvienne).
- Exemples marocains : port Tanger Med, ligne à grande vitesse Al Boraq, programme d'électrification rurale, complexe solaire Noor Ouarzazate.

**B. La fonction de redistribution : réduire les inégalités**
- Le marché répartit les revenus selon la productivité et la dotation en capital, ce qui ne garantit pas une répartition jugée juste.
- Instruments : impôt progressif sur le revenu, prélèvements sociaux, transferts (prestations, subventions), services publics gratuits.
- Exemples marocains : généralisation de la protection sociale (loi-cadre 09-21 : AMO pour tous, allocations familiales), aide sociale directe versée depuis fin 2023, Caisse de compensation, révision du barème de l'IR par la loi de finances 2025.

**C. La fonction de stabilisation : régulariser la conjoncture**
- Objectif : rapprocher l'économie de ses équilibres, résumés par le **carré magique de Kaldor** (croissance, plein-emploi, stabilité des prix, équilibre extérieur).
- Politique budgétaire contracyclique (logique keynésienne du multiplicateur) et politique monétaire (taux directeur, réserves obligatoires).
- Exemples marocains : Fonds spécial de gestion de la pandémie en 2020, hausse puis baisse du taux directeur de Bank Al-Maghrib (ramené à 2,25 % en 2025), passage progressif à un régime de change plus flexible depuis 2018.

*Transition : ces trois fonctions décrivent surtout une politique de court terme et de correction. Or l'État marocain cherche aussi à transformer l'économie, ce qui élargit ses fonctions mais en révèle les limites.*

### II. Des fonctions élargies, mais sous contraintes

**A. Une fonction structurelle : croissance de long terme et transformation de l'économie**
- Au-delà de la conjoncture, la politique économique agit sur l'offre : capital humain, innovation, compétitivité, attractivité (politiques structurelles, théories de la croissance endogène de Romer et Lucas).
- Elle intègre aussi des objectifs de développement durable (transition énergétique, gestion de l'eau).
- Exemples marocains : Nouveau Modèle de Développement (2021), Charte de l'investissement (loi-cadre 03-22) et Fonds Mohammed VI pour l'Investissement, stratégie Génération Green, programmes d'accélération industrielle (automobile, aéronautique).

**B. Des fonctions qui se heurtent à des limites**
- **Conflits d'objectifs** : la courbe de Phillips oppose inflation et chômage ; la règle de **Tinbergen** impose au moins autant d'instruments indépendants que d'objectifs, d'où le *policy mix* (Mundell).
- **Contraintes financières** : déficit et dette publique limitent la relance (effet d'éviction, soutenabilité), d'où les objectifs de réduction du déficit budgétaire inscrits dans les lois de finances.
- **Critiques libérales** : anticipations rationnelles et critique de Lucas, incohérence temporelle (Kydland et Prescott), qui justifient l'indépendance des banques centrales (statut de Bank Al-Maghrib, loi 40-17).
- **Contrainte extérieure** : économie ouverte, dépendance énergétique et céréalière, sensibilité à la sécheresse et aux cours mondiaux.

### Conclusion

**Bilan.** La politique économique remplit trois fonctions classiques (allocation, redistribution, stabilisation), auxquelles s'ajoute une fonction structurelle de croissance et de transformation. Leur exercice reste contraint par les conflits d'objectifs, les finances publiques et l'ouverture.

**Ouverture.** Avec l'État social en construction et la transition climatique, la question n'est plus seulement « quelles fonctions ? », mais « avec quels moyens de financement et quelle coordination entre budget et monnaie ? ».

---

## Exercice — Régression linéaire multiple

Le modèle s'écrit $Y = Xa + \varepsilon$, avec $n = 5$ observations et $k = 2$ variables explicatives (3 paramètres).

$$X = \begin{pmatrix} 1 & 5 & 8 \\ 1 & 20 & 2 \\ 1 & 5 & 9 \\ 1 & 15 & 11 \\ 1 & 10 & 10 \end{pmatrix}, \qquad Y = \begin{pmatrix} 10 \\ 30 \\ 20 \\ 25 \\ 15 \end{pmatrix}$$

### 1. Matrices $X'X$ et $X'Y$

Sommes utiles :

| Somme | Calcul | Valeur |
|---|---|---|
| $\sum x_1$ | 5 + 20 + 5 + 15 + 10 | 55 |
| $\sum x_2$ | 8 + 2 + 9 + 11 + 10 | 40 |
| $\sum x_1^2$ | 25 + 400 + 25 + 225 + 100 | 775 |
| $\sum x_2^2$ | 64 + 4 + 81 + 121 + 100 | 370 |
| $\sum x_1 x_2$ | 40 + 40 + 45 + 165 + 100 | 390 |
| $\sum y$ | 10 + 30 + 20 + 25 + 15 | 100 |
| $\sum x_1 y$ | 50 + 600 + 100 + 375 + 150 | 1 275 |
| $\sum x_2 y$ | 80 + 60 + 180 + 275 + 150 | 745 |

$$X'X = \begin{pmatrix} n & \sum x_1 & \sum x_2 \\ \sum x_1 & \sum x_1^2 & \sum x_1 x_2 \\ \sum x_2 & \sum x_1 x_2 & \sum x_2^2 \end{pmatrix} = \begin{pmatrix} 5 & 55 & 40 \\ 55 & 775 & 390 \\ 40 & 390 & 370 \end{pmatrix}, \qquad X'Y = \begin{pmatrix} 100 \\ 1275 \\ 745 \end{pmatrix}$$

### 2. Vérification de $(X'X)^{-1}$

On calcule l'inverse par la comatrice : $(X'X)^{-1} = \dfrac{1}{\det(X'X)}\,{}^t\text{Com}(X'X)$.

Cofacteurs (la matrice est symétrique, sa comatrice aussi) :
- $C_{11} = 775 \times 370 - 390^2 = 286\,750 - 152\,100 = 134\,650$
- $C_{12} = -(55 \times 370 - 390 \times 40) = -(20\,350 - 15\,600) = -4\,750$
- $C_{13} = 55 \times 390 - 775 \times 40 = 21\,450 - 31\,000 = -9\,550$
- $C_{22} = 5 \times 370 - 40^2 = 1\,850 - 1\,600 = 250$
- $C_{23} = -(5 \times 390 - 55 \times 40) = -(1\,950 - 2\,200) = 250$
- $C_{33} = 5 \times 775 - 55^2 = 3\,875 - 3\,025 = 850$

Déterminant (développement selon la première ligne) : $\det = 5 \times 134\,650 + 55 \times (-4\,750) + 40 \times (-9\,550) = 673\,250 - 261\,250 - 382\,000 = 30\,000$.

$$(X'X)^{-1} = \frac{1}{30\,000}\begin{pmatrix} 134\,650 & -4\,750 & -9\,550 \\ -4\,750 & 250 & 250 \\ -9\,550 & 250 & 850 \end{pmatrix} = \begin{pmatrix} 4.488 & -0.158 & -0.318 \\ -0.158 & 0.008 & 0.008 \\ -0.318 & 0.008 & 0.028 \end{pmatrix}$$

**On retrouve bien la matrice de l'énoncé** (valeurs exactes : 4,48833 ; −0,15833 ; −0,31833 ; 0,00833 ; 0,02833).

### 3. Estimation des coefficients et valeurs prédites $\hat{y}_i$

Pour prédire $\hat{y}_i$, il faut d'abord estimer $\hat{a} = (X'X)^{-1}X'Y$, **avec les fractions exactes** :

$$\hat{a} = \frac{1}{30\,000}\begin{pmatrix} 134\,650 \times 100 - 4\,750 \times 1\,275 - 9\,550 \times 745 \\ -4\,750 \times 100 + 250 \times 1\,275 + 250 \times 745 \\ -9\,550 \times 100 + 250 \times 1\,275 + 850 \times 745 \end{pmatrix} = \frac{1}{30\,000}\begin{pmatrix} 294\,000 \\ 30\,000 \\ -3\,000 \end{pmatrix} = \begin{pmatrix} 9.800 \\ 1.000 \\ -0.100 \end{pmatrix}$$

**Modèle estimé : $\hat{y}_i = 9.800 + 1.000\,x_{1i} - 0.100\,x_{2i}$.**

**Piège à éviter.** Si vous multipliez la matrice **arrondie** de l'énoncé par $X'Y$, vous obtenez $\hat{a} = (10.440 ;\ 0.360 ;\ -0.740)$, ce qui est faux : l'écart de 0,00033 sur « 0.008 » est multiplié par des sommes de l'ordre de 1 000. Gardez les fractions sur 30 000 (ou résolvez le système centré ci-dessous), et n'arrondissez qu'à la fin.

**Contrôle par les écarts à la moyenne** ($\bar{y} = 20$, $\bar{x}_1 = 11$, $\bar{x}_2 = 8$) :
- $S_{11} = 775 - 5 \times 11^2 = 170$ ; $S_{22} = 370 - 5 \times 8^2 = 50$ ; $S_{12} = 390 - 5 \times 11 \times 8 = -50$
- $S_{1y} = 1\,275 - 5 \times 11 \times 20 = 175$ ; $S_{2y} = 745 - 5 \times 8 \times 20 = -55$
- Système : $170\,\hat{a}_1 - 50\,\hat{a}_2 = 175$ et $-50\,\hat{a}_1 + 50\,\hat{a}_2 = -55$. En additionnant : $120\,\hat{a}_1 = 120$, donc $\hat{a}_1 = 1$, puis $\hat{a}_2 = -0.1$ et $\hat{a}_0 = 20 - 11 + 0.8 = 9.8$.

Valeurs prédites et résidus $e_i = y_i - \hat{y}_i$ :

| $i$ | $y_i$ | $x_{1i}$ | $x_{2i}$ | $\hat{y}_i$ | $e_i$ | $e_i^2$ | $(y_i - \bar{y})^2$ |
|---|---|---|---|---|---|---|---|
| 1 | 10 | 5 | 8 | 14.000 | −4.000 | 16.000 | 100 |
| 2 | 30 | 20 | 2 | 29.600 | 0.400 | 0.160 | 100 |
| 3 | 20 | 5 | 9 | 13.900 | 6.100 | 37.210 | 0 |
| 4 | 25 | 15 | 11 | 23.700 | 1.300 | 1.690 | 25 |
| 5 | 15 | 10 | 10 | 18.800 | −3.800 | 14.440 | 25 |
| **Total** | **100** | | | **100.000** | **0.000** | **69.500** | **250** |

La somme des résidus est nulle et $\sum \hat{y}_i = \sum y_i$ : c'est le contrôle attendu quand le modèle a une constante.

### 4. $R^2$ et $\bar{R}^2$

- $SCT = \sum (y_i - \bar{y})^2 = 250$
- $SCR = \sum e_i^2 = 69.500$
- $SCE = SCT - SCR = 180.500$ (contrôle : $\hat{a}_1 S_{1y} + \hat{a}_2 S_{2y} = 175 + 5.5 = 180.5$)

$$R^2 = \frac{SCE}{SCT} = \frac{180.5}{250} = \mathbf{0.722}$$

$$\bar{R}^2 = 1 - (1 - R^2)\,\frac{n - 1}{n - k - 1} = 1 - 0.278 \times \frac{4}{2} = \mathbf{0.444}$$

Le modèle explique 72,2 % de la variance de $y$, mais une fois corrigé du nombre de variables, cette part tombe à 44,4 %.

### 5. Significativité globale (test de Fisher)

$H_0 : a_1 = a_2 = 0$ contre $H_1$ : au moins un des deux coefficients est non nul.

$$F^* = \frac{R^2 / k}{(1 - R^2)/(n - k - 1)} = \frac{0.722 / 2}{0.278 / 2} = \mathbf{2.597}$$

(même résultat avec $\dfrac{SCE/2}{SCR/2} = \dfrac{90.25}{34.75}$.)

$F^* = 2.597 < F_{\text{tabulée}}(2 ; 2) = 19$ : **on ne rejette pas $H_0$, le modèle n'est pas globalement significatif** au seuil de 5 %.

### 6. Degré de liberté et précision du modèle

- Le modèle n'a que $n - k - 1 = 5 - 3 = 2$ **degrés de liberté** : avec 5 observations pour 3 paramètres, l'estimation repose sur très peu d'information.
- Variance résiduelle : $\hat{\sigma}^2 = \dfrac{SCR}{n - k - 1} = \dfrac{69.5}{2} = 34.750$, soit $\hat{\sigma} = 5.895$, un écart type des erreurs élevé pour une variable de moyenne 20.
- Écarts types des coefficients ($\hat{\sigma}^2$ multiplié par la diagonale de $(X'X)^{-1}$) : $\hat{\sigma}_{\hat{a}_1} = \sqrt{34.75 \times 0.00833} = 0.538$ et $\hat{\sigma}_{\hat{a}_2} = \sqrt{34.75 \times 0.02833} = 0.992$, d'où $t_{\hat{a}_1} = 1.858$ et $t_{\hat{a}_2} = -0.101$. Pour information (valeur non donnée par le sujet), le $t$ de Student à 2 degrés de liberté vaut 4,303 au seuil de 5 % : aucun coefficient n'est significatif.
- L'écart important entre $R^2 = 0.722$ et $\bar{R}^2 = 0.444$ traduit la même pénalité liée au faible nombre de degrés de liberté.

**Conclusion : le modèle est peu précis.** Le $R^2$ apparemment correct est trompeur : le test de Fisher rejette la significativité globale, et la valeur critique très élevée ($F = 19$) vient justement des 2 degrés de liberté. Il faudrait davantage d'observations pour conclure.

---

## Questions de cours

### 1. Moyenne arithmétique, médiane et mode

| Indicateur | Définition | Propriété |
|---|---|---|
| **Moyenne arithmétique** | $\bar{x} = \dfrac{1}{n}\sum x_i$ (ou $\sum n_i x_i / n$ pour une série groupée) | Utilise toutes les valeurs ; sensible aux valeurs extrêmes |
| **Médiane** | Valeur qui partage la série ordonnée en deux effectifs égaux (50 % en dessous, 50 % au-dessus) | Insensible aux valeurs extrêmes ; adaptée aux revenus |
| **Mode** | Valeur (ou classe) la plus fréquente | Seul indicateur utilisable pour une variable qualitative ; il peut y en avoir plusieurs |

Exemple : pour la série 2, 3, 3, 4, 18, la moyenne vaut 6, la médiane 3 et le mode 3. La valeur extrême 18 tire la moyenne vers le haut, pas la médiane. Dans une distribution symétrique unimodale, les trois coïncident.

### 2. L'inférence statistique

L'inférence statistique consiste à **tirer des conclusions sur une population à partir d'un échantillon**, en mesurant le risque d'erreur grâce au calcul des probabilités. Elle comprend :
- l'**estimation** : ponctuelle (la moyenne de l'échantillon estime la moyenne de la population) ou par intervalle de confiance ;
- les **tests d'hypothèses** : accepter ou rejeter une hypothèse $H_0$ avec un risque de première espèce $\alpha$ fixé (5 % en général).

Les tests de Fisher et de Student de l'exercice en sont des applications. Exemple : le HCP estime le taux de chômage national à partir de l'enquête Emploi, menée sur un échantillon de ménages.

### 3. Variable quantitative et variable qualitative

- Une **variable quantitative** prend des valeurs numériques sur lesquelles les opérations arithmétiques ont un sens. Elle est **discrète** (valeurs isolées : nombre d'enfants) ou **continue** (toute valeur d'un intervalle : revenu, taille).
- Une **variable qualitative** décrit une catégorie (modalité), non mesurable. Elle est **nominale** (sans ordre : sexe, région, secteur d'activité) ou **ordinale** (modalités ordonnées : mention au baccalauréat, niveau de satisfaction).

Conséquence pratique : on calcule une moyenne et un écart type pour une variable quantitative ; pour une variable qualitative, on ne dispose que des effectifs, fréquences et du mode (et de la médiane si elle est ordinale).

### 4. La loi normale centrée réduite

Une variable $Z$ suit la loi normale centrée réduite, notée $\mathcal{N}(0 ; 1)$, si sa densité est :

$$\varphi(z) = \frac{1}{\sqrt{2\pi}}\,e^{-z^2/2}, \qquad z \in \mathbb{R}$$

- **Moments** : $E(Z) = 0$ (centrée) et $V(Z) = 1$ (réduite).
- **Forme** : courbe en cloche, symétrique autour de 0, d'où $\Phi(-z) = 1 - \Phi(z)$, où $\Phi$ est la fonction de répartition, lue dans la table.
- **Centrage-réduction** : si $X \sim \mathcal{N}(\mu ; \sigma^2)$, alors $Z = \dfrac{X - \mu}{\sigma} \sim \mathcal{N}(0 ; 1)$ ; une seule table suffit pour toutes les lois normales.
- **Valeurs à connaître** : $P(-1 \le Z \le 1) \approx 0{,}683$, $P(-1{,}96 \le Z \le 1{,}96) = 0{,}95$, $P(-2{,}58 \le Z \le 2{,}58) \approx 0{,}99$.
- **Rôle** : par le théorème central limite, la moyenne d'un grand échantillon suit approximativement une loi normale, ce qui fonde les intervalles de confiance et les tests de l'inférence statistique.
