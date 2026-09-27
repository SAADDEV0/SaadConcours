// Probabilités (S3) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
// Les chapitres 2, 3 et 7 viennent de l'ancien module « Statistiques et Probabilités » (S2).
const md = String.raw;

const chapitres = {
  1: {
    titre: "L'analyse combinatoire",
    description: "Dénombrement : principes additif et multiplicatif, p-listes, arrangements, permutations, combinaisons, triangle de Pascal et binôme de Newton, corrigés.",
    resume: md`
## L'essentiel — Analyse combinatoire

- **Principe additif** : cas disjoints, on additionne ; $|E \cup F| = |E| + |F| - |E \cap F|$.
- **Principe multiplicatif** : choix en étapes successives, on multiplie $n_1 \times n_2 \times \dots \times n_k$.
- **p-listes** (ordre, répétition) : $n^p$ ; tirage successif **avec remise**.
- **Arrangements** (ordre, sans répétition) : $A_n^p = n!/(n - p)!$ ; tirage successif **sans remise**.
- **Permutations** : $n!$ rangements de $n$ objets distincts ; avec objets identiques : $n!/(n_1!\,n_2!\cdots n_k!)$ ; $0! = 1$.
- **Combinaisons** (sans ordre, sans répétition) : $C_n^p = n!/(p!\,(n - p)!) = A_n^p / p!$ ; tirage **simultané**.
- Propriétés : $C_n^p = C_n^{n-p}$ ; Pascal $C_n^p = C_{n-1}^{p-1} + C_{n-1}^p$ ; $\sum_p C_n^p = 2^n$.
- **Binôme de Newton** : $(a + b)^n = \sum_k C_n^k\,a^k\,b^{n-k}$.
- Combinaisons avec répétition : $C_{n+p-1}^p$ (objets indiscernables répartis entre $n$ types).
- « Au moins un » : total moins « aucun » ; composition imposée : produit de combinaisons.
`,
    exercices: md`
### Exercice 2 — Loterie et probabilités

Une loterie consiste à cocher 6 numéros sur une grille de 49. Le tirage désigne 6 numéros gagnants, sans ordre.

1. Combien de grilles différentes peut-on remplir ?
2. Quelle est la probabilité de trouver les 6 bons numéros avec une seule grille ?
3. Quelle est la probabilité d'avoir exactement 3 bons numéros ?

<details><summary>Voir le corrigé</summary>

**1)** Une grille est un ensemble de 6 numéros parmi 49 : $C_{49}^6 = \mathbf{13\,983\,816}$ grilles.

**2)** Une seule grille est gagnante : $P = 1 / 13\,983\,816 \approx \mathbf{7{,}2 \times 10^{-8}}$, soit environ une chance sur 14 millions.

**3)** On choisit 3 numéros parmi les 6 gagnants et 3 parmi les 43 perdants :

$$P = \frac{C_6^3 \times C_{43}^3}{C_{49}^6} = \frac{20 \times 12\,341}{13\,983\,816} = \frac{246\,820}{13\,983\,816} \approx \mathbf{0{,}0177}$$

Environ une grille sur 57 obtient exactement 3 bons numéros.

</details>

### Exercice 3 — Un championnat de football

Un championnat national compte 16 clubs.

1. Chaque club rencontre chaque autre club une fois à domicile et une fois à l'extérieur. Combien de matchs se jouent dans la saison ?
2. Combien de matchs faudrait-il si chaque paire de clubs ne se rencontrait qu'une fois ?
3. Combien de podiums (champion, deuxième, troisième) sont possibles ?
4. En fin de saison, 10 joueurs sélectionnés sont répartis en trois ateliers de 5, 3 et 2 joueurs. Combien de répartitions sont possibles ?
5. Développez $(a + b)^5$ à l'aide du triangle de Pascal.

<details><summary>Voir le corrigé</summary>

**1)** Un match est un couple ordonné (club qui reçoit, club visiteur) de deux clubs distincts : $A_{16}^2 = 16 \times 15 = \mathbf{240}$ matchs.

**2)** Sans ordre : $C_{16}^2 = 240 / 2 = \mathbf{120}$ matchs.

**3)** L'ordre compte et un club ne peut occuper deux places : $A_{16}^3 = 16 \times 15 \times 14 = \mathbf{3\,360}$ podiums.

**4)** On choisit les 5 joueurs du premier atelier ($C_{10}^5 = 252$), puis les 3 du deuxième parmi les 5 restants ($C_5^3 = 10$) ; les 2 derniers forment le troisième : $252 \times 10 = \mathbf{2\,520}$, ce qui est bien $10!/(5!\,3!\,2!)$.

**5)** Ligne 5 du triangle : 1, 5, 10, 10, 5, 1.

$$(a + b)^5 = a^5 + 5a^4 b + 10a^3 b^2 + 10a^2 b^3 + 5a b^4 + b^5$$

</details>
`,
    qcm: [
      { q: "Un menu propose 3 entrées, 4 plats et 2 desserts. Le nombre de menus complets est :", choix: ["9", "24", "12", "36"], bonne: 1, explication: "Principe multiplicatif : 3 × 4 × 2." },
      { q: "Le nombre de codes de 3 lettres (26 lettres, répétition permise) est :", choix: ["78", "15 600", "17 576", "2 600"], bonne: 2, explication: "26 puissance 3." },
      { q: "A(8, 3) vaut :", choix: ["56", "336", "512", "24"], bonne: 1, explication: "8 × 7 × 6 = 336." },
      { q: "C(10, 4) vaut :", choix: ["210", "5 040", "40", "151 200"], bonne: 0, explication: "5 040 / 4! = 210." },
      { q: "Choisir un président et un secrétaire parmi 20 membres se dénombre par :", choix: ["C(20, 2) = 190", "A(20, 2) = 380", "20² = 400", "2 × 20 = 40"], bonne: 1, explication: "L'ordre compte car les fonctions sont différentes." },
      { q: "Le nombre d'anagrammes du mot ANANAS est :", choix: ["720", "120", "60", "36"], bonne: 2, explication: "6! / (3! × 2!) : trois A et deux N." },
      { q: "C(n, p) est égal à :", choix: ["C(n, n − p)", "A(n, p)", "n × p", "C(n − p, p)"], bonne: 0, explication: "Choisir les retenus revient à choisir les exclus." },
      { q: "Un ensemble de 5 éléments possède combien de sous-ensembles ?", choix: ["25", "32", "10", "120"], bonne: 1, explication: "2 puissance 5." },
      { q: "Un tirage simultané de p boules parmi n se dénombre avec :", choix: ["Des p-listes", "Des arrangements", "Des combinaisons", "Des permutations"], bonne: 2, explication: "Ni ordre, ni répétition." },
      { q: "Dans le développement de (a + b)⁴, le coefficient de a²b² est :", choix: ["4", "6", "2", "8"], bonne: 1, explication: "C(4, 2) = 6." },
    ],
  },

  2: {
    titre: "Les fondements du calcul des probabilités",
    description: "Univers, événements, axiomes, formule de Poincaré, probabilité conditionnelle, indépendance, arbre pondéré, probabilités totales et formule de Bayes.",
    resume: md`
## L'essentiel — Calcul des probabilités

- **Univers** $\Omega$, événements, contraire $\bar{A}$, réunion, intersection, incompatibilité, système complet.
- Dénombrement (chapitre 1) : compter cas favorables et cas possibles avec le **même modèle** de tirage ($n^p$, $A_n^p$ ou $C_n^p$).
- Équiprobabilité : $P(A) = $ cas favorables / cas possibles.
- $P(\bar{A}) = 1 - P(A)$ ; $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ ; De Morgan : $\overline{A \cup B} = \bar{A} \cap \bar{B}$ ; formule de Poincaré pour trois événements.
- $P(A \mid B) = P(A \cap B) / P(B)$ ; indépendance : $P(A \cap B) = P(A)\,P(B)$ (à ne pas confondre avec incompatibilité).
- **Probabilités totales** : $P(A) = \sum P(B_i)\,P(A \mid B_i)$ ; **Bayes** : $P(B_j \mid A) = P(B_j)\,P(A \mid B_j) / P(A)$.
- Outil clé : l'**arbre pondéré** ; « au moins un » se calcule par le contraire.
`,
    exercices: md`
### Exercice 2 — Tirages dans une urne

Une urne contient 5 boules rouges et 3 boules vertes. On tire 2 boules.

1. Tirage simultané (sans remise) : calculez la probabilité d'obtenir 2 boules rouges, puis une boule de chaque couleur.
2. Tirage successif avec remise : calculez la probabilité d'obtenir 2 boules rouges.
3. Expliquez la différence.

<details><summary>Voir le corrigé</summary>

**1)** $C_8^2 = 28$ tirages. Deux rouges : $C_5^2 / 28 = 10 / 28 \approx \mathbf{0{,}357}$. Une de chaque : $(5 \times 3) / 28 = 15 / 28 \approx \mathbf{0{,}536}$.

**2)** Tirages indépendants : $(5/8)^2 = 25 / 64 \approx \mathbf{0{,}391}$.

**3)** Sans remise, le premier tirage d'une boule rouge réduit la proportion de rouges pour le second ($4/7$ au lieu de $5/8$) : les tirages ne sont pas indépendants. Avec remise, la composition de l'urne est la même à chaque tirage.

</details>

### Exercice 3 — Détection de fraude

Une banque estime que 1 % des transactions par carte sont frauduleuses. Son système d'alerte détecte 95 % des fraudes, mais déclenche aussi une alerte pour 3 % des transactions normales.

1. Calculez la probabilité qu'une transaction déclenche une alerte.
2. Une alerte est déclenchée : quelle est la probabilité que la transaction soit réellement frauduleuse ?
3. Commentez ce résultat.

<details><summary>Voir le corrigé</summary>

**1)** $P(A) = 0{,}01 \times 0{,}95 + 0{,}99 \times 0{,}03 = 0{,}0095 + 0{,}0297 = \mathbf{0{,}0392}$.

**2)** Bayes : $P(F \mid A) = 0{,}0095 / 0{,}0392 \approx \mathbf{0{,}242}$.

**3)** Moins d'une alerte sur quatre correspond à une vraie fraude, alors que le système semble performant : comme la fraude est **rare**, les fausses alertes sur les nombreuses transactions normales sont plus nombreuses que les vraies. C'est l'erreur classique qui consiste à confondre $P(A \mid F)$ et $P(F \mid A)$.

</details>
`,
    qcm: [
      { q: "Un lot de 10 pièces contient 3 défectueuses. On en tire 2 simultanément. La probabilité que les deux soient défectueuses est :", choix: ["1/15", "9/100", "3/10", "1/5"], bonne: 0, explication: "C(3, 2) / C(10, 2) = 3 / 45." },
      { q: "Le contraire de l'événement « A ou B » est :", choix: ["« non A et non B »", "« non A ou non B »", "« A et B »", "« A et non B »"], bonne: 0, explication: "Loi de De Morgan." },
      { q: "A et B sont indépendants, avec P(A) = 0,5 et P(B) = 0,3. P(A et B) vaut :", choix: ["0,8", "0,15", "0,2", "0,65"], bonne: 1, explication: "Produit des probabilités : 0,5 × 0,3." },
      { q: "P(A) = 0,5 ; P(B) = 0,4 ; P(A et B) = 0,2. P(A ou B) vaut :", choix: ["0,9", "0,7", "0,2", "0,1"], bonne: 1, explication: "0,5 + 0,4 − 0,2." },
      { q: "Deux événements A et B sont indépendants si :", choix: ["P(A et B) = 0", "P(A et B) = P(A) × P(B)", "P(A) = P(B)", "P(A ou B) = 1"], bonne: 1, explication: "La réalisation de l'un n'informe pas sur l'autre." },
      { q: "Deux événements incompatibles de probabilités non nulles sont :", choix: ["Indépendants", "Dépendants", "Certains", "Complémentaires toujours"], bonne: 1, explication: "Si l'un se réalise, l'autre ne peut pas se réaliser." },
      { q: "P(A et B) = 0,12 et P(B) = 0,4. P(A sachant B) vaut :", choix: ["0,048", "0,3", "0,52", "0,28"], bonne: 1, explication: "0,12 / 0,4." },
      { q: "La formule de Bayes permet de calculer :", choix: ["La probabilité d'une cause sachant l'effet observé", "Le nombre de combinaisons", "La moyenne d'une série", "Une probabilité de réunion"], bonne: 0, explication: "Elle inverse le conditionnement." },
      { q: "La probabilité d'obtenir au moins un 6 en lançant deux dés est :", choix: ["1/3", "11/36", "1/36", "25/36"], bonne: 1, explication: "1 − (5/6)² = 11/36." },
      { q: "Une urne contient 4 boules rouges sur 10. Avec remise, la probabilité de tirer deux fois une rouge est :", choix: ["0,16", "0,4", "0,133", "0,8"], bonne: 0, explication: "Tirages indépendants : 0,4 × 0,4." },
    ],
  },

  3: {
    titre: "Variables aléatoires et lois usuelles",
    description: "Variables aléatoires discrètes, espérance, variance, lois de Bernoulli, binomiale, hypergéométrique, géométrique, de Poisson et normale, exercices corrigés.",
    resume: md`
## L'essentiel — Variables aléatoires et lois usuelles

- Discrète : $P(X = x_i) = p_i$ ; continue : densité, $P(X = a) = 0$ ; fonction de répartition $F(x) = P(X \le x)$.
- $E(X) = \sum x_i p_i$ ; $V(X) = E(X^2) - E(X)^2$ ; $E(aX + b) = aE(X) + b$ ; $V(aX + b) = a^2 V(X)$ ; variances additives si indépendance.
- **Binomiale** $\mathcal{B}(n, p)$ : $C_n^k p^k (1 - p)^{n - k}$, $E = np$, $V = np(1 - p)$.
- **Hypergéométrique** (tirage sans remise) : $E = np$, $V = np(1 - p)(N - n)/(N - 1)$ ; **géométrique** (rang du premier succès) : $(1 - p)^{k-1}p$, $E = 1/p$.
- **Poisson** $\mathcal{P}(\lambda)$ : $e^{-\lambda} \lambda^k / k!$, $E = V = \lambda$ (événements rares).
- **Normale** : $Z = (X - \mu)/\sigma \sim \mathcal{N}(0, 1)$ ; $\Phi(-z) = 1 - \Phi(z)$ ; 68 % à $\pm\sigma$, 95 % à $\pm 1{,}96\sigma$.
- Approximations : binomiale par Poisson ($p$ petit) ou par la normale ($np \ge 5$ et $n(1 - p) \ge 5$), avec **correction de continuité**.
`,
    exercices: md`
### Exercice 2 — Contrôle qualité et loi de Poisson

Une usine de Kénitra produit des pièces dont 2 % sont défectueuses. On prélève un lot de 150 pièces.

1. Quelle est la loi exacte du nombre $X$ de pièces défectueuses ?
2. Justifiez une approximation par une loi de Poisson et calculez $P(X = 0)$ et $P(X \le 2)$.
3. Comparez avec la valeur exacte de $P(X = 0)$.

<details><summary>Voir le corrigé</summary>

**1)** $X \sim \mathcal{B}(150 ; 0{,}02)$.

**2)** $n$ est grand, $p$ petit et $np = 3$ : $X \approx \mathcal{P}(3)$. $P(X = 0) \approx e^{-3} \approx \mathbf{0{,}050}$ ; $P(X \le 2) \approx e^{-3}(1 + 3 + 4{,}5) \approx \mathbf{0{,}423}$.

**3)** Valeur exacte : $0{,}98^{150} \approx 0{,}048$ ; l'approximation est très bonne (de même, $P(X \le 2)$ exact vaut environ 0,421).

</details>

### Exercice 3 — Conditionnement et loi normale

Le poids des paquets de thé remplis par une machine suit la loi $\mathcal{N}(250 ; 4)$ en grammes.

1. Quelle proportion de paquets pèse moins de 245 g ?
2. Quelle proportion pèse entre 246 et 254 g ?
3. Le règlement impose qu'au plus 2 % des paquets pèsent moins de 245 g. Sans changer l'écart-type, sur quelle moyenne faut-il régler la machine ? (On donne $\Phi(2{,}054) = 0{,}98$.)

<details><summary>Voir le corrigé</summary>

**1)** $P(X < 245) = \Phi(-1{,}25) = 1 - \Phi(1{,}25) \approx 1 - 0{,}8944 = \mathbf{0{,}106}$, soit environ 10,6 % des paquets.

**2)** $P(246 < X < 254) = 2\,\Phi(1) - 1 \approx \mathbf{0{,}683}$.

**3)** On veut $(245 - \mu) / 4 = -2{,}054$, soit $\mu = 245 + 2{,}054 \times 4 \approx \mathbf{253{,}2}$ g. Réduire l'écart-type (machine plus précise) permettrait de viser une moyenne plus proche de 250 g.

</details>
`,
    qcm: [
      { q: "X prend 0, 1, 2 avec les probabilités 0,2 ; 0,5 ; 0,3. E(X) vaut :", choix: ["1", "1,1", "0,5", "1,5"], bonne: 1, explication: "0 + 0,5 + 0,6 = 1,1." },
      { q: "Si E(X) = 10 et V(X) = 4, alors V(3X + 5) vaut :", choix: ["12", "36", "17", "41"], bonne: 1, explication: "V(aX + b) = a² V(X) = 9 × 4." },
      { q: "Le nombre de succès en n épreuves indépendantes de même probabilité suit une loi :", choix: ["De Poisson", "Binomiale", "Normale", "Uniforme"], bonne: 1, explication: "C'est la définition de la loi binomiale." },
      { q: "L'espérance de la loi binomiale B(20 ; 0,4) vaut :", choix: ["4,8", "8", "12", "0,4"], bonne: 1, explication: "np = 20 × 0,4." },
      { q: "Pour une loi de Poisson de paramètre 4, la variance vaut :", choix: ["2", "4", "16", "0,25"], bonne: 1, explication: "Espérance et variance sont égales à λ." },
      { q: "X suit N(100 ; 20). P(X < 120) vaut environ :", choix: ["0,5", "0,8413", "0,9772", "0,1587"], bonne: 1, explication: "Φ(1)." },
      { q: "Pour Z suivant N(0 ; 1), P(Z > 1,96) vaut :", choix: ["0,975", "0,025", "0,05", "0,95"], bonne: 1, explication: "1 − 0,975." },
      { q: "Pour une variable continue, P(X = a) vaut :", choix: ["f(a)", "0", "F(a)", "1"], bonne: 1, explication: "Seuls les intervalles ont une probabilité non nulle." },
      { q: "B(200 ; 0,5) peut être approchée par :", choix: ["P(100)", "N(100 ; 7,07)", "N(200 ; 0,5)", "B(100 ; 0,5)"], bonne: 1, explication: "np = 100 et racine de npq ≈ 7,07." },
      { q: "La correction de continuité consiste à remplacer P(X ≤ k) par :", choix: ["P(Y ≤ k − 1)", "P(Y ≤ k + 0,5)", "P(Y ≥ k)", "P(Y ≤ 2k)"], bonne: 1, explication: "On passe d'une loi discrète à une loi continue." },
    ],
  },

  4: {
    titre: "Les variables aléatoires continues",
    description: "Densité, fonction de répartition, espérance, médiane, lois uniforme, exponentielle et normale, khi-deux, Student et Fisher : cours et exercices corrigés.",
    resume: md`
## L'essentiel — Variables aléatoires continues

- **Densité** : $f \ge 0$ et $\int f = 1$ ; $P(a \le X \le b) = \int_a^b f(x)\,dx$ ; $P(X = a) = 0$ ; $f(x)$ n'est pas une probabilité.
- **Fonction de répartition** : $F(x) = \int_{-\infty}^x f$ ; $P(a < X \le b) = F(b) - F(a)$ ; $f = F'$.
- $E(X) = \int x f(x)\,dx$ ; $V(X) = \int x^2 f(x)\,dx - E(X)^2$ ; **médiane** : $F(m) = 0{,}5$ ; quantile : $F(x_\alpha) = \alpha$.
- **Uniforme** $\mathcal{U}[a ; b]$ : $f = 1/(b - a)$, $E = (a + b)/2$, $V = (b - a)^2/12$.
- **Exponentielle** $\mathcal{E}(\lambda)$ : $F(x) = 1 - e^{-\lambda x}$, $P(X > x) = e^{-\lambda x}$, $E = 1/\lambda$, $V = 1/\lambda^2$, **absence de mémoire**.
- **Normale** : $aX + b \sim \mathcal{N}(a\mu + b ; |a|\sigma)$ ; somme de normales indépendantes : moyennes et **variances** s'additionnent.
- Seuils : $\mu + 1{,}645\,\sigma$ (5 % au-dessus), $\mu \pm 1{,}96\,\sigma$ (95 % au centre).
- **Khi-deux** $\chi^2(n)$ : somme de $n$ carrés de $\mathcal{N}(0 ; 1)$, $E = n$, $V = 2n$.
- **Student** $T(n) = Z / \sqrt{\chi^2(n)/n}$ : symétrique, plus étalée que la normale ; **Fisher** : rapport de deux khi-deux divisés par leurs ddl.
`,
    exercices: md`
### Exercice 2 — Attente au tramway et au guichet

**A.** Un tramway passe toutes les 10 minutes. Le temps d'attente $X$ d'un voyageur arrivant au hasard suit la loi $\mathcal{U}[0 ; 10]$.
1. Calculez $E(X)$, $V(X)$ et $\sigma(X)$.
2. Calculez $P(X > 7)$ et $P(2 \le X \le 5)$.

**B.** Au guichet d'une agence, le temps $T$ (en minutes) entre deux arrivées de clients suit une loi exponentielle de moyenne 2 minutes.
3. Calculez $P(T < 1)$ et la durée médiane entre deux arrivées.

<details><summary>Voir le corrigé</summary>

**1)** $E(X) = (0 + 10)/2 = \mathbf{5}$ min ; $V(X) = 10^2 / 12 \approx \mathbf{8{,}33}$ ; $\sigma(X) \approx \mathbf{2{,}89}$ min.

**2)** $P(X > 7) = (10 - 7)/10 = \mathbf{0{,}3}$ ; $P(2 \le X \le 5) = 3/10 = \mathbf{0{,}3}$ : pour une loi uniforme, seule la longueur de l'intervalle compte.

**3)** $\lambda = 1/2 = 0{,}5$ par minute. $P(T < 1) = 1 - e^{-0{,}5} \approx \mathbf{0{,}393}$. Médiane : $1 - e^{-0{,}5\,m} = 0{,}5$, soit $m = \ln 2 / 0{,}5 \approx \mathbf{1{,}39}$ min. La médiane est inférieure à la moyenne (2 min) : la loi exponentielle est étalée à droite.

</details>

### Exercice 3 — Ventes hebdomadaires et lecture des tables

Les ventes journalières d'une boutique de Tétouan, ouverte 5 jours par semaine, suivent chacune la loi $\mathcal{N}(20\,000 ; 3\,000)$ en DH, et sont indépendantes d'un jour à l'autre.

1. Quelle est la loi des ventes hebdomadaires $S$ ?
2. Calculez $P(S > 110\,000)$.
3. Quel montant hebdomadaire n'est dépassé que dans 5 % des semaines ?
4. Lecture de tables : donnez le quantile d'ordre 0,975 de la loi de Student à 15 ddl ($2{,}131$ dans la table) et comparez-le à celui de la loi normale. Pourquoi est-il plus grand ?

<details><summary>Voir le corrigé</summary>

**1)** Somme de 5 lois normales indépendantes : $E(S) = 5 \times 20\,000 = 100\,000$ DH ; $V(S) = 5 \times 3\,000^2$, d'où $\sigma(S) = 3\,000\sqrt{5} \approx 6\,708$ DH. Donc $S \sim \mathcal{N}(100\,000 ; 6\,708)$. (Et non $5 \times 3\,000 = 15\,000$ DH.)

**2)** $P(S > 110\,000) = 1 - \Phi\left(\frac{10\,000}{6\,708}\right) = 1 - \Phi(1{,}49) \approx 1 - 0{,}9319 = \mathbf{0{,}068}$.

**3)** $s = 100\,000 + 1{,}645 \times 6\,708 \approx \mathbf{111\,035}$ DH.

**4)** $t_{15 ;\, 0{,}975} = 2{,}131$ contre $z_{0{,}975} = 1{,}96$ pour la loi normale. La loi de Student est plus étalée, car elle intègre l'incertitude supplémentaire due à l'estimation de l'écart-type sur un petit échantillon ; l'écart disparaît quand le nombre de ddl devient grand.

</details>
`,
    qcm: [
      { q: "Pour une variable continue X, P(X = 3) vaut :", choix: ["f(3)", "F(3)", "0", "1/3"], bonne: 2, explication: "Une valeur isolée a une probabilité nulle ; seuls les intervalles comptent." },
      { q: "Une densité de probabilité doit vérifier :", choix: ["f(x) ≤ 1 partout", "Une intégrale totale égale à 1 et f positive", "f(0) = 0", "f croissante"], bonne: 1, explication: "Une densité peut dépasser 1 sur un intervalle court." },
      { q: "La densité f d'une variable continue se déduit de sa fonction de répartition F par :", choix: ["f = 1 − F", "f = F'", "f = F²", "f = 1 / F"], bonne: 1, explication: "La densité est la dérivée de la fonction de répartition." },
      { q: "X suit la loi uniforme sur [2 ; 8]. E(X) vaut :", choix: ["4", "5", "6", "3"], bonne: 1, explication: "(2 + 8) / 2 = 5." },
      { q: "X suit la loi uniforme sur [0 ; 12]. V(X) vaut :", choix: ["6", "12", "36", "144"], bonne: 1, explication: "(12 − 0)² / 12 = 12." },
      { q: "Une loi exponentielle de moyenne 5 ans a pour paramètre :", choix: ["5", "0,2", "25", "0,5"], bonne: 1, explication: "E(X) = 1 / λ, donc λ = 1 / 5." },
      { q: "La propriété d'absence de mémoire caractérise la loi :", choix: ["Normale", "Uniforme", "Exponentielle", "De Student"], bonne: 2, explication: "P(X > s + t sachant X > s) = P(X > t)." },
      { q: "X et Y indépendantes, d'écarts-types 3 et 4. L'écart-type de X + Y vaut :", choix: ["7", "5", "12", "1"], bonne: 1, explication: "Les variances s'additionnent : racine de 9 + 16." },
      { q: "La somme de n carrés de lois normales centrées réduites indépendantes suit une loi :", choix: ["De Student", "Du khi-deux à n ddl", "De Fisher", "Normale"], bonne: 1, explication: "Son espérance vaut n et sa variance 2n." },
      { q: "Par rapport à la loi normale centrée réduite, la loi de Student à peu de ddl est :", choix: ["Plus concentrée", "Plus étalée", "Asymétrique", "Identique"], bonne: 1, explication: "Ses quantiles sont plus grands ; elle tend vers la normale quand les ddl augmentent." },
    ],
  },

  5: {
    titre: "Les couples de variables aléatoires",
    description: "Loi conjointe, lois marginales et conditionnelles, indépendance, covariance, corrélation, variance d'une somme et portefeuille de deux titres, corrigés.",
    resume: md`
## L'essentiel — Couples de variables aléatoires

- **Loi conjointe** : $p_{ij} = P(X = x_i \text{ et } Y = y_j)$, présentée en tableau à double entrée, $\sum p_{ij} = 1$.
- **Lois marginales** : totaux des lignes $p_{i\cdot}$ et des colonnes $p_{\cdot j}$.
- **Loi conditionnelle** : $P(X = x_i \mid Y = y_j) = p_{ij} / p_{\cdot j}$ ; espérance conditionnelle $E(X \mid Y = y_j)$.
- **Indépendance** : $p_{ij} = p_{i\cdot}\,p_{\cdot j}$ pour **toutes** les cases ; une case différente suffit à conclure à la dépendance.
- $cov(X, Y) = E(XY) - E(X)E(Y)$, avec $E(XY) = \sum \sum x_i y_j p_{ij}$ ; $\rho = cov / (\sigma_X \sigma_Y) \in [-1 ; 1]$.
- Indépendance $\Rightarrow$ covariance nulle ; la réciproque est **fausse** (exemple : $Y = X^2$ avec $X$ symétrique).
- $E(aX + bY) = aE(X) + bE(Y)$ ; $V(aX + bY) = a^2V(X) + b^2V(Y) + 2ab\,cov(X, Y)$.
- Portefeuille : $\sigma_P^2 = w^2\sigma_A^2 + (1 - w)^2\sigma_B^2 + 2w(1 - w)\rho\,\sigma_A\sigma_B$ ; diversification dès que $\rho < 1$.
- Sommes indépendantes : binomiales de même $p$, Poisson ($\lambda_1 + \lambda_2$), normales (variances additives).
`,
    exercices: md`
### Exercice 2 — Le portefeuille de deux actions

Un investisseur hésite entre deux actions cotées à la Bourse de Casablanca. L'action A a un rendement annuel espéré de 8 % et un écart-type de 12 % ; l'action B, un rendement espéré de 5 % et un écart-type de 6 %. Le coefficient de corrélation de leurs rendements vaut $- 0{,}2$.

1. Calculez le rendement espéré et le risque (écart-type) d'un portefeuille investi à 60 % en A et 40 % en B.
2. Comparez ce risque à la moyenne pondérée des écarts-types. Expliquez.
3. Quelle proportion $w$ investie en A minimise le risque ? Donnez le rendement et le risque de ce portefeuille. (On admet $w^* = \dfrac{\sigma_B^2 - cov}{\sigma_A^2 + \sigma_B^2 - 2\,cov}$.)

<details><summary>Voir le corrigé</summary>

**1)** $E(R_P) = 0{,}6 \times 8 + 0{,}4 \times 5 = \mathbf{6{,}8\,\%}$. La covariance vaut $- 0{,}2 \times 12 \times 6 = - 14{,}4$ (en %²).

$$\sigma_P^2 = 0{,}36 \times 144 + 0{,}16 \times 36 + 2 \times 0{,}6 \times 0{,}4 \times (-14{,}4) = 51{,}84 + 5{,}76 - 6{,}912 = 50{,}688$$

$\sigma_P \approx \mathbf{7{,}12\,\%}$.

**2)** Moyenne pondérée des écarts-types : $0{,}6 \times 12 + 0{,}4 \times 6 = 9{,}6\,\%$. Le risque du portefeuille (7,12 %) est bien plus faible : les deux titres ne varient pas ensemble (corrélation négative), leurs fluctuations se compensent en partie. C'est l'effet de **diversification**.

**3)** $w^* = (36 + 14{,}4) / (144 + 36 + 28{,}8) = 50{,}4 / 208{,}8 \approx \mathbf{0{,}241}$ : 24,1 % en A et 75,9 % en B. Rendement : $0{,}241 \times 8 + 0{,}759 \times 5 \approx \mathbf{5{,}72\,\%}$ ; variance $\approx 23{,}83$, soit un risque $\approx \mathbf{4{,}88\,\%}$, **inférieur** à celui de B seul (6 %) avec un rendement supérieur.

</details>

### Exercice 3 — Indépendance et lois conditionnelles

Une enquête auprès des clients d'un hypermarché de Casablanca relève $X$ = nombre d'enfants du ménage (0, 1 ou 2) et $Y$ = mode de paiement (0 : espèces, 1 : carte). Les probabilités sont :

| | $Y = 0$ | $Y = 1$ |
|---|:--:|:--:|
| $X = 0$ | 0,12 | 0,18 |
| $X = 1$ | 0,16 | 0,24 |
| $X = 2$ | 0,12 | 0,18 |

1. Calculez les lois marginales.
2. Montrez que $X$ et $Y$ sont indépendantes.
3. Que vaut $cov(X, Y)$ ? Donnez $E(X \mid Y = 1)$ sans calcul supplémentaire.

<details><summary>Voir le corrigé</summary>

**1)** Loi de $X$ : $P(X = 0) = 0{,}30$ ; $P(X = 1) = 0{,}40$ ; $P(X = 2) = 0{,}30$. Loi de $Y$ : $P(Y = 0) = 0{,}40$ ; $P(Y = 1) = 0{,}60$.

**2)** On vérifie les six cases : $0{,}30 \times 0{,}40 = 0{,}12$ ✔ ; $0{,}30 \times 0{,}60 = 0{,}18$ ✔ ; $0{,}40 \times 0{,}40 = 0{,}16$ ✔ ; $0{,}40 \times 0{,}60 = 0{,}24$ ✔ ; et de même pour $X = 2$ ✔. Toutes les cases vérifient $p_{ij} = p_{i\cdot}\,p_{\cdot j}$ : les variables sont **indépendantes**.

**3)** L'indépendance entraîne $cov(X, Y) = \mathbf{0}$. La loi conditionnelle de $X$ sachant $Y = 1$ est égale à sa loi marginale, donc $E(X \mid Y = 1) = E(X) = 0{,}40 + 2 \times 0{,}30 = \mathbf{1}$ enfant : le mode de paiement n'apprend rien sur la taille du ménage.

</details>
`,
    qcm: [
      { q: "Dans le tableau de la loi conjointe d'un couple (X, Y), la somme de toutes les cases vaut :", choix: ["0", "1", "Le nombre de cases", "E(X) + E(Y)"], bonne: 1, explication: "C'est une loi de probabilité." },
      { q: "La loi marginale de X s'obtient en :", choix: ["Additionnant les probabilités de chaque ligne", "Multipliant les cases", "Divisant par le total de colonne", "Prenant la diagonale"], bonne: 0, explication: "P(X = xi) est la somme des pij sur j." },
      { q: "P(X = 1 et Y = 0) = 0,15 et P(Y = 0) = 0,5. P(X = 1 sachant Y = 0) vaut :", choix: ["0,075", "0,3", "0,65", "0,15"], bonne: 1, explication: "0,15 / 0,5 = 0,3." },
      { q: "Pour montrer que X et Y ne sont pas indépendantes, il suffit :", choix: ["De vérifier toutes les cases", "De trouver une case où pij est différent de pi. × p.j", "De calculer E(X)", "Que la covariance soit positive ou nulle"], bonne: 1, explication: "L'indépendance exige l'égalité dans toutes les cases." },
      { q: "E(XY) = 2, E(X) = 1 et E(Y) = 1,5. La covariance vaut :", choix: ["0,5", "3,5", "− 0,5", "2"], bonne: 0, explication: "2 − 1 × 1,5 = 0,5." },
      { q: "Si cov(X, Y) = 0, alors :", choix: ["X et Y sont forcément indépendantes", "Il n'y a pas de liaison linéaire, mais une autre liaison est possible", "X = Y", "V(X) = 0"], bonne: 1, explication: "Contre-exemple classique : Y = X² avec X symétrique autour de 0." },
      { q: "V(X) = 4, V(Y) = 9, cov(X, Y) = 2. V(X + Y) vaut :", choix: ["13", "17", "15", "9"], bonne: 1, explication: "4 + 9 + 2 × 2 = 17." },
      { q: "V(X) = 4, V(Y) = 9, X et Y indépendantes. V(X − Y) vaut :", choix: ["− 5", "5", "13", "36"], bonne: 2, explication: "V(X − Y) = V(X) + V(Y) : les variances s'ajoutent toujours." },
      { q: "X suit P(2) et Y suit P(3), indépendantes. X + Y suit :", choix: ["P(6)", "P(5)", "B(5 ; 0,5)", "N(5 ; 5)"], bonne: 1, explication: "Les paramètres des lois de Poisson indépendantes s'additionnent." },
      { q: "Dans un portefeuille de deux titres, la diversification réduit le risque dès que :", choix: ["La corrélation est égale à 1", "La corrélation est inférieure à 1", "Les rendements sont égaux", "Les écarts-types sont nuls"], bonne: 1, explication: "Le risque est alors inférieur à la moyenne pondérée des écarts-types." },
    ],
  },

  6: {
    titre: "Théorème central limite et approximations de lois",
    description: "Inégalité de Bienaymé-Tchebychev, loi des grands nombres, théorème central limite, approximations binomiale, Poisson, normale et correction de continuité.",
    resume: md`
## L'essentiel — Théorèmes limites et approximations

- **Markov** ($X \ge 0$) : $P(X \ge a) \le E(X)/a$. **Bienaymé-Tchebychev** : $P(|X - \mu| \ge t) \le \sigma^2 / t^2$, valable pour **toute** loi, mais grossière.
- **Loi des grands nombres** : la fréquence $F_n$ converge en probabilité vers $p$, la moyenne $\bar{X}_n$ vers $\mu$ ; fondement de l'assurance et de l'approche fréquentiste.
- **TCL** : pour $n \ge 30$ variables indépendantes de même loi, $S_n \approx \mathcal{N}(n\mu ; \sigma\sqrt{n})$ et $\bar{X}_n \approx \mathcal{N}(\mu ; \sigma/\sqrt{n})$, quelle que soit la loi de départ.
- Hypergéométrique $\to$ binomiale si $n/N \le 0{,}1$.
- Binomiale $\to$ Poisson $\mathcal{P}(np)$ si $n \ge 30$, $p \le 0{,}1$, $np < 15$.
- Binomiale $\to$ normale $\mathcal{N}(np ; \sqrt{np(1 - p)})$ si $np \ge 5$ et $n(1 - p) \ge 5$.
- Poisson $\to$ normale $\mathcal{N}(\lambda ; \sqrt{\lambda})$ si $\lambda \ge 20$.
- **Correction de continuité** : $P(X \le k) \approx P(Y < k + 0{,}5)$ ; $P(X \ge k) \approx P(Y > k - 0{,}5)$ ; $P(X = k) \approx P(k - 0{,}5 < Y < k + 0{,}5)$.
- Toujours écrire les conditions vérifiées et garder la même espérance et la même variance que la loi exacte.
`,
    exercices: md`
### Exercice 2 — Loi des grands nombres et taille d'un sondage

Un institut veut estimer la proportion $p$ de ménages équipés d'une connexion internet fixe, avec une erreur inférieure à 3 points, et une probabilité d'au plus 5 % de dépasser cette erreur. On ne sait rien de $p$.

1. Quelle taille d'échantillon garantit ce résultat d'après l'inégalité de Bienaymé-Tchebychev ? (On utilisera $p(1 - p) \le 0{,}25$.)
2. Quelle taille suffit d'après le théorème central limite ?
3. Commentez l'écart entre les deux résultats.

<details><summary>Voir le corrigé</summary>

**1)** $P(|F_n - p| \ge 0{,}03) \le \dfrac{p(1 - p)}{n \times 0{,}03^2} \le \dfrac{0{,}25}{0{,}0009\,n}$. On veut $\dfrac{0{,}25}{0{,}0009\,n} \le 0{,}05$, soit $n \ge 5\,555{,}6$ : **5 556 ménages**.

**2)** Par le TCL, $F_n \approx \mathcal{N}(p ; \sqrt{p(1 - p)/n})$ ; on veut $1{,}96\sqrt{0{,}25/n} \le 0{,}03$, soit $n \ge 1{,}96^2 \times 0{,}25 / 0{,}0009 \approx 1\,067{,}1$ : **1 068 ménages**.

**3)** Tchebychev demande cinq fois plus d'observations, car il ne suppose rien sur la loi de $F_n$. Le TCL, qui exploite la forme normale de la loi de la fréquence, donne la taille réellement suffisante : c'est lui qu'utilisent les instituts de sondage.

</details>

### Exercice 3 — Choisir la bonne approximation

Pour chaque situation, donnez la loi exacte, l'approximation justifiée et la probabilité demandée.

1. Un lot de 5 000 pièces contient 4 % de pièces défectueuses. On en prélève 50 sans remise. Probabilité d'avoir au plus une pièce défectueuse ?
2. Un centre d'appels passe 900 appels par jour ; chacun aboutit à une vente avec la probabilité 0,1, indépendamment. Probabilité de réaliser au moins 100 ventes ?
3. Le nombre d'accidents du travail déclarés chaque mois dans une zone industrielle suit une loi de Poisson de paramètre 36. Probabilité d'en compter plus de 45 ?

<details><summary>Voir le corrigé</summary>

**1)** Loi exacte : hypergéométrique. Comme $50/5\,000 = 1\,\% \le 10\,\%$, on l'approche par $\mathcal{B}(50 ; 0{,}04)$ ; puis, $n \ge 30$, $p \le 0{,}1$ et $np = 2$, par $\mathcal{P}(2)$ : $P(X \le 1) \approx e^{-2}(1 + 2) \approx \mathbf{0{,}406}$ (la binomiale donne 0,400).

**2)** $X \sim \mathcal{B}(900 ; 0{,}1)$, avec $np = 90$ et $n(1 - p) = 810$ : $X \approx \mathcal{N}(90 ; \sqrt{81} = 9)$. $P(X \ge 100) \approx P(Y > 99{,}5) = 1 - \Phi(1{,}06) \approx \mathbf{0{,}145}$ (valeur exacte 0,146).

**3)** $X \sim \mathcal{P}(36)$ avec $\lambda \ge 20$ : $X \approx \mathcal{N}(36 ; 6)$. « Plus de 45 » signifie $X \ge 46$ : $P(Y > 45{,}5) = 1 - \Phi(1{,}58) \approx \mathbf{0{,}057}$ (valeur exacte 0,061 : pour une loi de Poisson, l'approximation reste un peu optimiste dans la queue droite, qui est asymétrique).

</details>
`,
    qcm: [
      { q: "L'inégalité de Bienaymé-Tchebychev donne P(|X − μ| ≥ 2σ) au plus égale à :", choix: ["0,05", "0,25", "0,5", "0,75"], bonne: 1, explication: "1 / k² avec k = 2." },
      { q: "L'intérêt principal de l'inégalité de Bienaymé-Tchebychev est :", choix: ["Elle donne une probabilité exacte", "Elle vaut quelle que soit la loi de X", "Elle ne s'applique qu'à la loi normale", "Elle remplace le TCL"], bonne: 1, explication: "Elle ne demande que l'espérance et la variance." },
      { q: "La loi des grands nombres affirme que la fréquence observée d'un événement :", choix: ["Est toujours égale à p", "Converge vers p quand n augmente", "Suit une loi de Poisson", "Diminue avec n"], bonne: 1, explication: "C'est une convergence en probabilité." },
      { q: "D'après le TCL, la moyenne de n variables indépendantes de même loi (μ, σ) suit approximativement :", choix: ["N(μ ; σ)", "N(μ ; σ / racine de n)", "N(nμ ; σ)", "P(μ)"], bonne: 1, explication: "Pour n ≥ 30, quelle que soit la loi de départ." },
      { q: "La somme de 100 variables indépendantes d'espérance 5 et d'écart-type 2 suit approximativement :", choix: ["N(500 ; 20)", "N(500 ; 200)", "N(5 ; 0,2)", "N(500 ; 2)"], bonne: 0, explication: "Espérance 100 × 5 ; écart-type 2 × racine de 100." },
      { q: "B(200 ; 0,01) peut être approchée par :", choix: ["P(2)", "N(2 ; 1,41)", "P(200)", "N(200 ; 0,01)"], bonne: 0, explication: "n grand, p petit, np = 2 : loi de Poisson." },
      { q: "B(400 ; 0,5) peut être approchée par :", choix: ["P(200)", "N(200 ; 10)", "N(200 ; 100)", "N(400 ; 0,5)"], bonne: 1, explication: "np = 200 et racine de npq = racine de 100 = 10." },
      { q: "Avec la correction de continuité, P(X ≥ 30) pour X binomiale devient P(Y > …) avec :", choix: ["29,5", "30,5", "30", "31"], bonne: 0, explication: "La valeur 30 occupe l'intervalle de 29,5 à 30,5." },
      { q: "Une loi hypergéométrique peut être approchée par une binomiale lorsque :", choix: ["n / N ≤ 10 %", "n > N", "p > 0,5", "N < 30"], bonne: 0, explication: "Le tirage sans remise se comporte alors comme un tirage avec remise." },
      { q: "Le théorème central limite rend normale :", choix: ["Chaque variable Xi", "La somme ou la moyenne des Xi", "La plus grande des Xi", "La variance des Xi"], bonne: 1, explication: "Les Xi gardent leur loi ; c'est leur somme qui se normalise." },
    ],
  },

  7: {
    titre: "Échantillonnage et estimation",
    description: "Échantillonnage, théorème central limite, estimateurs sans biais, intervalles de confiance d'une moyenne et d'une proportion, taille d'échantillon.",
    resume: md`
## L'essentiel — Échantillonnage et estimation

- Paramètres de la population ($\mu$, $\sigma$, $p$) estimés par les statistiques de l'échantillon ($\bar{x}$, $s$, $f$) ; tirage aléatoire pour la représentativité.
- $E(\bar{X}) = \mu$, $\sigma(\bar{X}) = \sigma / \sqrt{n}$ ; **théorème central limite** : $\bar{X} \approx \mathcal{N}(\mu ; \sigma/\sqrt{n})$ pour $n \ge 30$.
- $F \approx \mathcal{N}(p ; \sqrt{p(1 - p)/n})$.
- Estimateurs sans biais : $\bar{x}$, $f$, $s^2 = \frac{n}{n - 1} V_{éch}$.
- IC d'une moyenne : $\bar{x} \pm z\,\sigma/\sqrt{n}$ (ou $s$ si $n \ge 30$) ; petit échantillon : Student $t_{n-1}$.
- IC d'une proportion : $f \pm z \sqrt{f(1 - f)/n}$ ; $z = 1{,}645$ (90 %), $1{,}96$ (95 %), $2{,}576$ (99 %).
- Taille : $n = (z\sigma/E)^2$ ou $z^2 p(1 - p)/E^2$ ; avec $p = 0{,}5$ et $E = 3$ points : 1 068 personnes.
`,
    exercices: md`
### Exercice 2 — Petit échantillon et loi de Student

Un transporteur mesure le délai de livraison (en jours) de 10 colis choisis au hasard : moyenne 5,2 jours, écart-type corrigé 1,1 jour. On suppose les délais distribués normalement.

1. Pourquoi faut-il utiliser la loi de Student ?
2. Construisez l'intervalle de confiance à 95 % du délai moyen ($t_{9 ;\, 0{,}025} = 2{,}262$).
3. Le transporteur annonce un délai moyen de 4 jours. Qu'en pensez-vous ?

<details><summary>Voir le corrigé</summary>

**1)** L'échantillon est petit ($n = 10 < 30$) et l'écart-type de la population est inconnu : on utilise la loi de Student à $n - 1 = 9$ degrés de liberté.

**2)** $5{,}2 \pm 2{,}262 \times 1{,}1 / \sqrt{10} = 5{,}2 \pm 0{,}787$, soit **[4,41 ; 5,99] jours**.

**3)** La valeur 4 n'appartient pas à l'intervalle : au risque de 5 %, l'annonce du transporteur n'est pas compatible avec les observations (le délai réel semble plus long).

</details>

### Exercice 3 — Sondage et marge d'erreur

Un institut interroge 1 200 étudiants : 540 déclarent utiliser quotidiennement une application de paiement mobile.

1. Estimez la proportion d'utilisateurs quotidiens et construisez son intervalle de confiance à 95 %.
2. Quelle serait la marge d'erreur avec 300 étudiants seulement (même fréquence) ?
3. Combien d'étudiants faudrait-il interroger pour une marge de ± 2 points (95 %), sans information préalable ?

<details><summary>Voir le corrigé</summary>

**1)** $f = 540 / 1\,200 = 0{,}45$ ; erreur type $\sqrt{0{,}45 \times 0{,}55 / 1\,200} \approx 0{,}0144$ ; marge $1{,}96 \times 0{,}0144 \approx 0{,}028$ ; intervalle **[42,2 % ; 47,8 %]**.

**2)** Erreur type $\sqrt{0{,}2475 / 300} \approx 0{,}0287$ ; marge $\approx$ **5,6 points** : diviser l'échantillon par 4 double la marge d'erreur.

**3)** $n = 1{,}96^2 \times 0{,}25 / 0{,}02^2 = 2\,401$ étudiants.

</details>
`,
    qcm: [
      { q: "L'écart-type de la moyenne d'un échantillon de taille n vaut :", choix: ["σ", "σ / n", "σ / racine de n", "σ × n"], bonne: 2, explication: "La précision augmente avec la racine de n." },
      { q: "Le théorème central limite permet d'approcher la loi de la moyenne par une loi normale si :", choix: ["n ≥ 30 environ", "n = 1", "La population est petite", "σ est nul"], bonne: 0, explication: "Quelle que soit la loi de la population." },
      { q: "L'estimateur sans biais de la variance divise la somme des carrés des écarts par :", choix: ["n", "n − 1", "n + 1", "racine de n"], bonne: 1, explication: "La variance empirique sous-estime la variance de la population." },
      { q: "Au niveau de confiance 95 %, on utilise z égal à :", choix: ["1,645", "1,96", "2,576", "1"], bonne: 1, explication: "P(− 1,96 < Z < 1,96) = 0,95." },
      { q: "Moyenne 50, σ = 10, n = 100. L'intervalle de confiance à 95 % est :", choix: ["[48,04 ; 51,96]", "[30,4 ; 69,6]", "[49,8 ; 50,2]", "[40 ; 60]"], bonne: 0, explication: "50 ± 1,96 × 10 / 10." },
      { q: "Pour diviser par 2 la marge d'erreur, il faut multiplier la taille de l'échantillon par :", choix: ["2", "4", "8", "1,41"], bonne: 1, explication: "La marge est proportionnelle à 1 / racine de n." },
      { q: "Quand le niveau de confiance augmente, l'intervalle de confiance :", choix: ["Se rétrécit", "S'élargit", "Ne change pas", "Disparaît"], bonne: 1, explication: "Plus de sécurité, moins de précision." },
      { q: "f = 0,3 et n = 100. L'erreur type de la fréquence vaut environ :", choix: ["0,003", "0,046", "0,21", "0,3"], bonne: 1, explication: "Racine de 0,21 / 100." },
      { q: "Pour un petit échantillon issu d'une population normale d'écart-type inconnu, on utilise :", choix: ["La loi de Poisson", "La loi de Student", "La loi binomiale", "La loi uniforme"], bonne: 1, explication: "Avec n − 1 degrés de liberté." },
      { q: "Sans information sur p, on calcule la taille d'échantillon avec :", choix: ["p = 0", "p = 0,5", "p = 1", "p = 0,1"], bonne: 1, explication: "C'est le cas le plus défavorable : p(1 − p) est maximal." },
    ],
  },

  8: {
    titre: "Les tests d'hypothèses",
    description: "Hypothèse nulle, risques alpha et bêta, p-valeur, tests sur une moyenne (Z et Student), une proportion, deux échantillons, khi-deux d'indépendance, corrigés.",
    resume: md`
## L'essentiel — Tests d'hypothèses

- $H_0$ : l'affirmation testée, sur un **paramètre** ($\mu = \mu_0$, $p = p_0$, indépendance) ; $H_1$ : bilatérale ($\neq$) ou unilatérale ($<$ ou $>$), fixée **avant** de voir les données.
- Risque $\alpha$ (1ʳᵉ espèce) : rejeter $H_0$ vraie ; risque $\beta$ (2ᵉ espèce) : garder $H_0$ fausse ; **puissance** $1 - \beta$. Seul un $n$ plus grand réduit les deux.
- Cinq étapes : hypothèses et $\alpha$ ; statistique et loi sous $H_0$ ; région critique ; calcul ; conclusion dans les termes du problème.
- **p-valeur** : probabilité, sous $H_0$, d'un écart au moins aussi grand ; rejet si p-valeur $< \alpha$.
- Moyenne : $Z = (\bar{x} - \mu_0) / (\sigma/\sqrt{n})$ ; petit échantillon, $\sigma$ inconnu : $T$ de Student à $n - 1$ ddl.
- Seuils à 5 % : bilatéral $\lvert Z \rvert > 1{,}96$ ; unilatéral $1{,}645$. À 1 % : $2{,}576$ et $2{,}326$.
- Proportion : $Z = (f - p_0) / \sqrt{p_0(1 - p_0)/n}$, avec $p_0$ sous la racine.
- Deux moyennes : $Z = (\bar{x}_1 - \bar{x}_2) / \sqrt{s_1^2/n_1 + s_2^2/n_2}$ ; deux proportions : proportion commune $\hat{p}$.
- **Khi-deux** : $T_{ij} = n_{i\cdot}\,n_{\cdot j} / N$, $\chi^2 = \sum (O - T)^2 / T$, $(r - 1)(c - 1)$ ddl, effectifs théoriques $\ge 5$ ; seuils à 5 % : 3,841 (1 ddl), 5,991 (2 ddl).
- Ne pas rejeter $H_0$ ne prouve pas qu'elle est vraie.
`,
    exercices: md`
### Exercice 2 — Comparer deux campagnes publicitaires

Une banque en ligne teste deux messages publicitaires. Le message A, envoyé à 500 prospects, obtient 60 ouvertures de compte ; le message B, envoyé à 400 prospects, en obtient 32.

1. Calculez les taux de conversion et la proportion commune.
2. Testez au seuil de 5 % l'hypothèse d'égalité des taux (test bilatéral). Donnez la p-valeur.
3. Le service marketing voulait savoir si A est **plus efficace** que B. Quelle conclusion ?

<details><summary>Voir le corrigé</summary>

**1)** $f_A = 60/500 = 0{,}12$ ; $f_B = 32/400 = 0{,}08$ ; $\hat{p} = 92/900 \approx 0{,}1022$.

**2)** $H_0 : p_A = p_B$ contre $H_1 : p_A \neq p_B$.

$$Z = \frac{0{,}12 - 0{,}08}{\sqrt{0{,}1022 \times 0{,}8978 \times \left(\frac{1}{500} + \frac{1}{400}\right)}} = \frac{0{,}04}{0{,}0203} \approx \mathbf{1{,}97}$$

$1{,}97 > 1{,}96$ : on rejette $H_0$ au seuil de 5 %, de justesse. La p-valeur vaut $2\,(1 - \Phi(1{,}97)) \approx \mathbf{0{,}049}$, à peine inférieure à 5 %.

**3)** Test unilatéral $H_1 : p_A > p_B$ : $Z = 1{,}97 > 1{,}645$, p-valeur $\approx 0{,}025$. On conclut que le message A est plus efficace. Le résultat bilatéral étant limite, il serait prudent de confirmer sur un nouvel envoi avant de généraliser le message A.

</details>

### Exercice 3 — Test d'ajustement : les réclamations sont-elles uniformes ?

Un service client a reçu 200 réclamations en un mois, réparties ainsi selon le jour ouvrable :

| Jour | Lundi | Mardi | Mercredi | Jeudi | Vendredi |
|---|---:|---:|---:|---:|---:|
| Réclamations | 48 | 35 | 38 | 36 | 43 |

1. Formulez l'hypothèse d'une répartition uniforme et calculez les effectifs théoriques.
2. Calculez la statistique du khi-deux et concluez au seuil de 5 % (valeur critique 9,488 pour 4 ddl).
3. Le responsable affirme : « le test prouve que les réclamations sont uniformes ». Qu'en pensez-vous ?

<details><summary>Voir le corrigé</summary>

**1)** $H_0$ : chaque jour reçoit 20 % des réclamations. Effectif théorique : $200 \times 0{,}2 = 40$ par jour (tous $\ge 5$).

**2)** $\chi^2 = \dfrac{8^2 + 5^2 + 2^2 + 4^2 + 3^2}{40} = \dfrac{118}{40} = \mathbf{2{,}95}$, avec $5 - 1 = 4$ ddl. $2{,}95 < 9{,}488$ : on **ne rejette pas** $H_0$. L'excès du lundi (48) reste compatible avec le hasard.

**3)** L'affirmation est incorrecte : un test ne **prouve** jamais $H_0$. Il indique seulement que les données ne permettent pas de la rejeter. Avec plus de mois d'observation, un léger « effet lundi » pourrait devenir significatif (le risque $\beta$ est ici élevé).

</details>
`,
    qcm: [
      { q: "L'hypothèse nulle d'un test porte sur :", choix: ["Les valeurs de l'échantillon", "Un paramètre de la population", "La taille de l'échantillon", "Le seuil alpha"], bonne: 1, explication: "Par exemple μ = μ0 ou p = p0." },
      { q: "Le risque de première espèce est la probabilité de :", choix: ["Rejeter H0 alors qu'elle est vraie", "Garder H0 alors qu'elle est fausse", "Rejeter H1", "Se tromper de calcul"], bonne: 0, explication: "C'est le seuil alpha, fixé à l'avance." },
      { q: "La puissance d'un test est égale à :", choix: ["alpha", "1 − alpha", "bêta", "1 − bêta"], bonne: 3, explication: "La probabilité de rejeter H0 lorsqu'elle est fausse." },
      { q: "Pour un test unilatéral au seuil de 5 % avec la loi normale, la valeur critique est :", choix: ["1,96", "1,645", "2,576", "1,282"], bonne: 1, explication: "Tout le risque de 5 % est placé d'un seul côté." },
      { q: "On rejette H0 lorsque la p-valeur est :", choix: ["Supérieure à alpha", "Inférieure à alpha", "Égale à 1", "Négative"], bonne: 1, explication: "L'écart observé est alors trop improbable sous H0." },
      { q: "Moyenne observée 52, μ0 = 50, σ = 8, n = 64. La statistique Z vaut :", choix: ["0,25", "2", "16", "0,5"], bonne: 1, explication: "(52 − 50) / (8 / 8) = 2." },
      { q: "Dans un test sur une proportion, l'erreur type utilise :", choix: ["La fréquence observée f", "La proportion p0 de l'hypothèse nulle", "La moyenne des deux", "Toujours 0,5"], bonne: 1, explication: "Le calcul se fait en supposant H0 vraie." },
      { q: "Un tableau de contingence à 3 lignes et 4 colonnes donne un khi-deux à :", choix: ["12 ddl", "6 ddl", "7 ddl", "11 ddl"], bonne: 1, explication: "(3 − 1) × (4 − 1) = 6." },
      { q: "Dans le test du khi-deux d'indépendance, l'effectif théorique d'une case vaut :", choix: ["N / nombre de cases", "Total ligne × total colonne / N", "L'effectif observé", "Total ligne + total colonne"], bonne: 1, explication: "C'est l'effectif attendu si les caractères sont indépendants." },
      { q: "Ne pas rejeter H0 signifie que :", choix: ["H0 est démontrée", "Les données ne permettent pas de contredire H0", "H1 est vraie", "Le test est faux"], bonne: 1, explication: "Un test ne prouve jamais l'hypothèse nulle." },
    ],
  },
};

export default chapitres;
