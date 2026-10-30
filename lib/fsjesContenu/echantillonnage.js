// Échantillonnage et Estimation (S4) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
// Les chapitres 5 (exercices) et 6 viennent des chapitres 7 et 8 de Probabilités (S3).
const md = String.raw;

const chapitres = {
  1: {
    titre: "Les lois de probabilité utiles à l'inférence",
    description: "Lois binomiale, de Poisson et normale, lois du khi-deux, de Student et de Fisher, degrés de liberté et lecture des tables, avec exercices corrigés.",
    resume: md`
## L'essentiel — Les lois utiles à l'inférence

- **Inférence** : conclure sur une population à partir d'un échantillon, avec un risque d'erreur chiffré.
- Binomiale : $E(X) = np$, $V(X) = np(1 - p)$ ; Poisson : $E(X) = V(X) = \lambda$.
- Normale : on centre et on réduit avec $Z = (X - \mu)/\sigma$, puis on lit la table de $\Phi$.
- Valeur critique : l'indice donne la probabilité laissée **à droite** : $z_{0{,}025} = 1{,}96$, $z_{0{,}05} = 1{,}645$, $z_{0{,}005} = 2{,}576$.
- **Khi-deux** à $\nu$ ddl : somme de $\nu$ carrés de normales centrées réduites ; $E = \nu$, $V = 2\nu$ ; non symétrique.
- **Student** : $T = Z / \sqrt{Q/\nu}$ ; cloche à queues épaisses, proche de la normale au-delà de 30 ddl.
- **Fisher** : rapport de deux khi-deux divisés par leurs ddl ; $F_{\nu_1, \nu_2 ;\, 1 - \alpha} = 1 / F_{\nu_2, \nu_1 ;\, \alpha}$.
- Student : $-t$ et $+t$ suffisent ; khi-deux et Fisher : il faut lire deux valeurs.
`,
    exercices: md`
### Exercice 2 — Lire la table de la loi normale dans les deux sens

Le montant des retraits à un guichet automatique suit une loi normale de moyenne 1 200 DH et d'écart-type 400 DH.

1. Calculez la probabilité qu'un retrait dépasse 2 000 DH.
2. Calculez la probabilité qu'un retrait soit compris entre 800 et 1 600 DH.
3. Quel montant n'est dépassé que par 2,5 % des retraits ?
4. Quel intervalle centré sur 1 200 DH contient 99 % des retraits ?

<details><summary>Voir le corrigé</summary>

**1)** $P(X > 2\,000) = P(Z > 2) = 1 - \Phi(2) \approx$ **0,0228**.

**2)** $P(-1 < Z < 1) = 2\,\Phi(1) - 1 \approx$ **0,6826**.

**3)** $1\,200 + 1{,}96 \times 400 =$ **1 984 DH**.

**4)** $1\,200 \pm 2{,}576 \times 400 = 1\,200 \pm 1\,030{,}4$, soit **[169,6 ; 2 230,4] DH**.

</details>

### Exercice 3 — Construire une loi de Student

On dispose de $Z$ de loi $\mathcal{N}(0 ; 1)$ et de $Q$ de loi du khi-deux à 9 ddl, indépendantes.

1. Quelles sont l'espérance et la variance de $Q$ ?
2. Quelle est la loi de $T = 3Z / \sqrt{Q}$ ?
3. Trouvez $c$ tel que $P(T > c) = 0{,}025$, puis $P(\lvert T \rvert < c)$.
4. Quelle valeur la loi normale aurait-elle donnée pour $c$ ? Pourquoi la valeur de Student est-elle plus grande ?

<details><summary>Voir le corrigé</summary>

**1)** $E(Q) = 9$ et $V(Q) = 18$.

**2)** $T = Z / \sqrt{Q / 9}$, car $\sqrt{Q/9} = \sqrt{Q} / 3$. C'est la définition d'une **loi de Student à 9 ddl**.

**3)** $c = t_{9 ;\, 0{,}025} =$ **2,262** et $P(\lvert T \rvert < c) =$ **0,95**.

**4)** La loi normale aurait donné 1,96. La loi de Student est plus étalée, car elle intègre l'incertitude due à $Q$ : ses queues sont plus épaisses, et il faut aller plus loin pour laisser 2,5 % à droite.

</details>
`,
    qcm: [
      { q: "L'inférence statistique consiste à :", choix: ["Résumer les données observées", "Conclure sur une population à partir d'un échantillon", "Interroger toute la population", "Supprimer les valeurs extrêmes"], bonne: 1, explication: "Avec un risque d'erreur que l'on sait chiffrer." },
      { q: "Pour une loi de Poisson de paramètre 3, la variance vaut :", choix: ["1", "3", "9", "racine de 3"], bonne: 1, explication: "Espérance et variance sont égales à lambda." },
      { q: "Dans ce cours, z(0,025) = 1,96 signifie que :", choix: ["P(Z > 1,96) = 0,025", "P(Z < 1,96) = 0,025", "P(Z = 1,96) = 0,025", "P(Z > 0,025) = 1,96"], bonne: 0, explication: "L'indice donne la probabilité laissée à droite." },
      { q: "Une loi du khi-deux à 10 ddl a pour espérance :", choix: ["0", "5", "10", "20"], bonne: 2, explication: "L'espérance vaut le nombre de degrés de liberté, la variance le double." },
      { q: "La loi du khi-deux est :", choix: ["Symétrique autour de 0", "Définie sur les valeurs positives et non symétrique", "Identique à la loi normale", "Discrète"], bonne: 1, explication: "C'est une somme de carrés." },
      { q: "Par rapport à la loi normale, la loi de Student a :", choix: ["Des queues plus épaisses", "Des queues plus fines", "Une moyenne plus grande", "Des valeurs seulement positives"], bonne: 0, explication: "Elle intègre l'incertitude sur l'écart-type." },
      { q: "Au-delà de 30 ddl, la loi de Student :", choix: ["Devient une loi de Poisson", "Se confond presque avec la loi normale", "N'existe plus", "Devient asymétrique"], bonne: 1, explication: "2,042 pour 30 ddl contre 1,96." },
      { q: "La loi de Fisher est la loi :", choix: ["D'une somme de normales", "D'un rapport de deux variances", "D'une proportion", "D'un comptage"], bonne: 1, explication: "Deux khi-deux divisés par leurs ddl, rapportés l'un à l'autre." },
      { q: "Sachant que F(10, 5 ; 0,05) = 4,74, F(5, 10 ; 0,95) vaut environ :", choix: ["4,74", "0,211", "3,33", "0,05"], bonne: 1, explication: "L'inverse de la valeur obtenue en permutant les ddl." },
      { q: "Un seuil bilatéral de 5 % avec Student se lit dans la colonne :", choix: ["0,05", "0,025", "0,10", "0,005"], bonne: 1, explication: "Les 5 % se partagent entre les deux queues." },
    ],
  },

  2: {
    titre: "Les techniques d'échantillonnage",
    description: "Base de sondage, sondage aléatoire simple, systématique, stratifié et en grappes, méthode des quotas, erreurs d'enquête, avec exercices corrigés.",
    resume: md`
## L'essentiel — Techniques d'échantillonnage

- Sonder coûte moins cher et va plus vite qu'un recensement ; c'est le seul moyen pour un contrôle destructif.
- **Base de sondage** : liste des unités ; **taux de sondage** : $n / N$.
- **Aléatoire simple** : chaque échantillon a la même probabilité ; chaque unité a la probabilité $n / N$.
- **Systématique** : pas $K = N / n$ ; danger : une périodicité cachée dans la liste.
- **Stratifié** : strates homogènes, tirage dans chacune ; $\bar{x}_{st} = \sum w_h \bar{x}_h$ ; la variabilité entre strates sort de l'erreur.
- Répartition proportionnelle : $n_h = n N_h / N$ ; optimale de Neyman : $n_h$ proportionnel à $N_h \sigma_h$.
- **Grappes** : on tire des groupes entiers ; moins cher, mais moins précis.
- **Quotas** : méthode empirique qui reproduit la structure de la population, sans vraie marge d'erreur.
- Erreur d'échantillonnage, réduite par $n$ ; erreurs de couverture, de non-réponse et de mesure, que $n$ ne corrige pas.
`,
    exercices: md`
### Exercice 2 — Identifier la méthode

Pour chaque situation, nommez la méthode et donnez sa principale limite.

1. Une marque interroge 300 personnes à la sortie d'un centre commercial de Rabat, jusqu'à obtenir 150 femmes et 150 hommes, dont 40 % de moins de 30 ans.
2. Un auditeur prend une facture sur 50 dans un fichier chronologique, à partir d'un numéro tiré au hasard.
3. Une enquête tire 30 communes, puis 20 ménages dans chacune.
4. Un ministère tire au hasard 200 lycées et interroge tous leurs élèves de terminale.

<details><summary>Voir le corrigé</summary>

**1)** **Quotas**. Le choix des personnes est laissé à l'enquêteur et le lieu est sélectif ; la marge d'erreur n'a qu'une valeur indicative.

**2)** **Systématique**, avec un pas de 50. Limite : une périodicité du fichier, comme des factures de fin de mois, fausserait l'échantillon.

**3)** **Sondage à plusieurs degrés** (deux degrés). Limite : les ménages d'une même commune se ressemblent, ce qui réduit la précision.

**4)** **Sondage en grappes**, chaque lycée étant une grappe. Limite : les élèves d'un même lycée se ressemblent.

</details>

### Exercice 3 — Répartir un échantillon et prévoir la non-réponse

Une fédération professionnelle compte 2 000 petites entreprises, 1 500 moyennes et 500 grandes, avec des écarts-types de chiffre d'affaires de 1, 2 et 8 millions de DH. Elle veut 400 réponses.

1. Calculez la répartition proportionnelle.
2. Calculez la répartition optimale. Commentez.
3. Le taux de réponse attendu est de 80 %. Combien d'entreprises faut-il contacter ?

<details><summary>Voir le corrigé</summary>

**1)** Taux de sondage $400 / 4\,000 = 10\,\%$ : **200, 150 et 50**.

**2)** $N_h \sigma_h$ : 2 000, 3 000 et 4 000, soit 9 000 au total. Répartition : $400 \times 2/9 \approx$ **89**, $400 \times 3/9 \approx$ **133** et $400 \times 4/9 \approx$ **178**. Les grandes entreprises, très dispersées, sont fortement surreprésentées : il faudra pondérer les résultats par $w_h$.

**3)** $400 / 0{,}8 =$ **500 entreprises**.

</details>
`,
    qcm: [
      { q: "La base de sondage est :", choix: ["La taille de l'échantillon", "La liste qui permet d'identifier les unités", "La moyenne de la population", "Le questionnaire"], bonne: 1, explication: "Une base incomplète exclut une partie de la population." },
      { q: "Pour N = 5 000 et n = 200, le pas de sondage vaut :", choix: ["4", "25", "200", "1 000"], bonne: 1, explication: "5 000 / 200 = 25." },
      { q: "Le taux de sondage est égal à :", choix: ["N / n", "n / N", "n × N", "n − N"], bonne: 1, explication: "La part de la population observée." },
      { q: "La stratification gagne en précision parce que :", choix: ["La variabilité entre strates sort de l'erreur", "L'échantillon est plus petit", "Elle supprime la non-réponse", "Elle évite tout tirage"], bonne: 0, explication: "Seule la variabilité à l'intérieur des strates reste." },
      { q: "Les strates doivent être :", choix: ["Hétérogènes à l'intérieur", "Homogènes à l'intérieur", "De même taille", "Tirées au hasard"], bonne: 1, explication: "On tire ensuite dans toutes les strates." },
      { q: "La répartition de Neyman donne plus d'interviews aux strates :", choix: ["Les plus grandes et les plus dispersées", "Les plus petites", "Les moins dispersées", "Les moins chères seulement"], bonne: 0, explication: "n(h) est proportionnel à N(h) × σ(h)." },
      { q: "Dans un sondage en grappes, on :", choix: ["Interroge une unité de chaque grappe", "Tire quelques grappes et observe leurs unités", "Observe toutes les grappes", "Supprime les grappes homogènes"], bonne: 1, explication: "C'est moins cher, mais moins précis." },
      { q: "La méthode des quotas est :", choix: ["Une méthode aléatoire", "Une méthode empirique", "Un recensement", "Un test statistique"], bonne: 1, explication: "L'enquêteur choisit lui-même les personnes." },
      { q: "Augmenter la taille de l'échantillon réduit :", choix: ["L'erreur d'échantillonnage", "Le biais de non-réponse", "L'erreur de couverture", "Les questions mal posées"], bonne: 0, explication: "Les autres erreurs ne dépendent pas de n." },
      { q: "Si 75 % des personnes répondent et qu'il faut 300 réponses, on en contacte :", choix: ["225", "300", "375", "400"], bonne: 3, explication: "300 / 0,75 = 400." },
    ],
  },

  3: {
    titre: "Les distributions d'échantillonnage",
    description: "Loi de la moyenne et de la fréquence d'un échantillon, facteur d'exhaustivité, loi de la variance, différence de deux échantillons, avec exercices corrigés.",
    resume: md`
## L'essentiel — Distributions d'échantillonnage

- Une statistique varie d'un échantillon à l'autre : c'est une variable aléatoire ; un paramètre est fixe.
- Moyenne : $E(\bar{X}) = \mu$ ; **erreur type** $\sigma / \sqrt{n}$ ; quadrupler $n$ divise l'erreur par 2.
- Loi de $\bar{X}$ : normale si la population l'est ; sinon, approximativement normale pour $n \ge 30$ (théorème central limite).
- Sans remise, si $n / N \ge 10\,\%$ : facteur d'exhaustivité $\sqrt{(N - n)/(N - 1)}$.
- $\sigma$ inconnu : $(\bar{X} - \mu)/(S/\sqrt{n})$ suit Student à $n - 1$ ddl (population normale).
- Fréquence : $E(F) = p$, $\sigma(F) = \sqrt{p(1 - p)/n}$, normale si $np \ge 5$ et $n(1 - p) \ge 5$.
- Variance : $(n - 1) S^2 / \sigma^2$ suit un $\chi^2$ à $n - 1$ ddl, pour une population normale.
- Différence de deux échantillons indépendants : les variances s'**additionnent**.
- Rapport de variances : loi de Fisher à $(n_1 - 1 ; n_2 - 1)$ ddl.
`,
    exercices: md`
### Exercice 2 — Contrôle des bouteilles et petite population

Une usine remplit des bouteilles avec $\mu = 1\,000$ ml et $\sigma = 8$ ml, selon une loi normale. Un lot compte 400 bouteilles, et l'on en contrôle 100 sans remise.

1. Le facteur d'exhaustivité est-il nécessaire ? Calculez l'erreur type.
2. Calculez la probabilité que la moyenne du contrôle soit inférieure à 998,5 ml.
3. Le contrôleur décide d'alerter si la moyenne sort de l'intervalle $[1\,000 - a ; 1\,000 + a]$. Trouvez $a$ pour que la fausse alerte ait 5 % de chances de se produire.

<details><summary>Voir le corrigé</summary>

**1)** $n / N = 25\,\% \ge 10\,\%$ : le facteur est **nécessaire**. $\sqrt{300 / 399} \approx 0{,}8671$, d'où une erreur type de $(8 / 10) \times 0{,}8671 \approx$ **0,694 ml**.

**2)** $P(Z < -1{,}5 / 0{,}694) = P(Z < -2{,}16) \approx$ **0,015**.

**3)** $a = 1{,}96 \times 0{,}694 \approx$ **1,36 ml**.

</details>

### Exercice 3 — Deux agences, deux taux de défaut

Le taux de défaut vaut $p_1 = 8\,\%$ à l'agence A et $p_2 = 5\,\%$ à l'agence B. On tire 400 dossiers dans chaque agence.

1. Donnez la loi approchée de $F_1 - F_2$.
2. Calculez la probabilité que l'échantillon montre un taux plus élevé en B qu'en A.
3. Quelle serait cette probabilité avec 1 600 dossiers par agence ? Commentez.

<details><summary>Voir le corrigé</summary>

**1)** Espérance $0{,}03$ ; variance $0{,}0736 / 400 + 0{,}0475 / 400 = 0{,}00030275$ ; écart-type $\approx 0{,}0174$. Donc $F_1 - F_2 \approx \mathcal{N}(0{,}03 ; 0{,}0174)$.

**2)** $P(F_1 - F_2 < 0) = P(Z < -0{,}03 / 0{,}0174) = P(Z < -1{,}72) \approx$ **0,043**.

**3)** L'écart-type est divisé par 2 : $0{,}0087$. $P(Z < -3{,}45) \approx$ **0,0003**. Quadrupler les échantillons rend une inversion du classement presque impossible.

</details>
`,
    qcm: [
      { q: "L'écart-type de la moyenne d'un échantillon de taille n vaut :", choix: ["σ", "σ / n", "σ / racine de n", "σ × n"], bonne: 2, explication: "La précision augmente avec la racine de n." },
      { q: "Le théorème central limite permet d'approcher la loi de la moyenne par une loi normale si :", choix: ["n ≥ 30 environ", "n = 1", "La population est petite", "σ est nul"], bonne: 0, explication: "Quelle que soit la loi de la population." },
      { q: "Pour diviser l'erreur type par 3, il faut multiplier n par :", choix: ["3", "6", "9", "27"], bonne: 2, explication: "L'erreur type dépend de 1 / racine de n." },
      { q: "Le facteur d'exhaustivité s'applique surtout :", choix: ["Avec remise", "Sans remise avec n / N ≥ 10 %", "Pour n = 1", "Dans un recensement seulement"], bonne: 1, explication: "Il est négligeable sous 10 %." },
      { q: "Pour p = 0,3 et n = 400, l'erreur type de la fréquence vaut environ :", choix: ["0,0052", "0,0229", "0,21", "0,3"], bonne: 1, explication: "Racine de 0,21 / 400." },
      { q: "La fréquence suit approximativement une loi normale si :", choix: ["np ≥ 5 et n(1 − p) ≥ 5", "n < 10", "p = 0", "n = N"], bonne: 0, explication: "Les deux conditions doivent être vérifiées." },
      { q: "Pour une population normale, (n − 1) S² / σ² suit :", choix: ["Une loi normale", "Une loi de Student", "Un khi-deux à n − 1 ddl", "Une loi de Fisher"], bonne: 2, explication: "C'est une somme de carrés avec un ddl perdu." },
      { q: "La variance de la différence de deux moyennes indépendantes est :", choix: ["La différence des variances", "La somme des variances de chaque moyenne", "Toujours nulle", "Le produit des variances"], bonne: 1, explication: "Les incertitudes s'ajoutent." },
      { q: "Lorsque σ est remplacé par S pour une population normale, la moyenne centrée réduite suit :", choix: ["Une loi de Student à n − 1 ddl", "Une loi du khi-deux", "Une loi de Poisson", "Une loi binomiale"], bonne: 0, explication: "On a ajouté une incertitude sur l'écart-type." },
      { q: "Un paramètre de la population est :", choix: ["Une variable aléatoire", "Un nombre fixe, en général inconnu", "Calculé sur l'échantillon", "Différent à chaque tirage"], bonne: 1, explication: "C'est la statistique qui varie." },
    ],
  },

  4: {
    titre: "L'estimation ponctuelle",
    description: "Estimateur et estimation, biais, convergence, efficacité, erreur quadratique moyenne, méthode des moments et maximum de vraisemblance, avec corrigés.",
    resume: md`
## L'essentiel — Estimation ponctuelle

- **Estimateur** $T$ : variable aléatoire, fonction de l'échantillon ; **estimation** : sa valeur observée.
- **Biais** : $B(T) = E(T) - \theta$ ; sans biais si $E(T) = \theta$.
- $\bar{X}$ et $F$ sont sans biais ; la variance empirique est biaisée : $E(V) = \frac{n - 1}{n}\sigma^2$.
- Estimateur sans biais de la variance : $S^2 = \frac{1}{n - 1} \sum (X_i - \bar{X})^2$.
- **Convergent** : biais et variance tendent vers 0 quand $n$ augmente.
- **Efficacité** : à biais nul, on préfère la plus petite variance.
- **EQM** : $V(T) + B(T)^2$, pour comparer des estimateurs biaisés.
- **Moments** : égaler moments théoriques et observés ; exponentielle : $\hat{\lambda} = 1 / \bar{x}$ ; uniforme sur $[0 ; \theta]$ : $\hat{\theta} = 2\bar{x}$.
- **Maximum de vraisemblance** : maximiser $\ln L(\theta)$ ; Bernoulli : $\hat{p} = k / n$ ; Poisson : $\hat{\lambda} = \bar{x}$.
- Invariance : $g(\hat{\theta})$ estime $g(\theta)$.
`,
    exercices: md`
### Exercice 2 — Estimer une durée de traitement

Les durées de traitement d'un dossier, en jours, suivent une loi exponentielle de paramètre $\lambda$. On observe 5 dossiers : 2, 4, 1, 6 et 2 jours.

1. Écrivez $\ln L(\lambda)$ pour un échantillon de taille $n$, sachant que la densité vaut $\lambda e^{-\lambda x}$.
2. Déduisez-en l'estimateur du maximum de vraisemblance, et comparez-le à celui de la méthode des moments.
3. Estimez $\lambda$, puis la durée moyenne, puis la probabilité qu'un dossier dure plus de 5 jours.

<details><summary>Voir le corrigé</summary>

**1)** $L = \lambda^n e^{-\lambda \sum x_i}$, donc $\ln L = n \ln \lambda - \lambda \sum x_i$.

**2)** La dérivée $n / \lambda - \sum x_i$ s'annule pour $\hat{\lambda} = n / \sum x_i = 1 / \bar{x}$. La dérivée seconde $-n / \lambda^2$ est négative : c'est un maximum. La méthode des moments donne le **même** estimateur.

**3)** $\bar{x} = 15 / 5 = 3$ jours, donc $\hat{\lambda} = 1/3 \approx$ **0,333**. La durée moyenne estimée vaut **3 jours**. Par invariance, $\hat{P}(X > 5) = e^{-5/3} \approx$ **0,189**.

</details>

### Exercice 3 — Corriger un estimateur biaisé

Soit $X$ de loi uniforme sur $[0 ; \theta]$, avec $E(X) = \theta / 2$ et $V(X) = \theta^2 / 12$. On pose $T = 2\bar{X}$.

1. Montrez que $T$ est sans biais.
2. Calculez $V(T)$ et étudiez la convergence.
3. Sur 4 relevés, on observe 3, 7, 2 et 8. Donnez l'estimation de $\theta$. Que remarquez-vous en la comparant à la plus grande valeur observée ?

<details><summary>Voir le corrigé</summary>

**1)** $E(T) = 2 E(\bar{X}) = 2 \times \theta / 2 = \theta$ : **sans biais**.

**2)** $V(T) = 4\,V(\bar{X}) = 4 \times \theta^2 / (12 n) = \theta^2 / (3n)$, qui tend vers 0. Comme le biais est nul, $T$ est **convergent**.

**3)** $\bar{x} = 5$, donc $\hat{\theta} =$ **10**. La plus grande valeur vaut 8, donc l'estimation reste cohérente ici. Mais avec d'autres données, $2\bar{x}$ pourrait être inférieur à la plus grande valeur, ce qui serait absurde : la méthode des moments ne donne pas toujours le meilleur estimateur.

</details>
`,
    qcm: [
      { q: "Un estimateur est :", choix: ["Un nombre fixe", "Une variable aléatoire fonction de l'échantillon", "Un paramètre de la population", "Une table statistique"], bonne: 1, explication: "L'estimation est sa valeur observée." },
      { q: "Un estimateur est sans biais si :", choix: ["E(T) = θ", "V(T) = 0", "T = θ", "T est positif"], bonne: 0, explication: "Il ne se trompe pas systématiquement dans un sens." },
      { q: "L'estimateur sans biais de la variance divise la somme des carrés des écarts par :", choix: ["n", "n − 1", "n + 1", "racine de n"], bonne: 1, explication: "La variance empirique sous-estime la variance de la population." },
      { q: "Pour 12, 15, 9, 14, 10, 12, l'estimation sans biais de la variance vaut :", choix: ["4,33", "5,2", "12", "26"], bonne: 1, explication: "26 / 5." },
      { q: "Un estimateur sans biais est convergent si :", choix: ["Sa variance tend vers 0", "Sa variance augmente", "Il vaut toujours 0", "n est petit"], bonne: 0, explication: "Il se concentre autour du paramètre." },
      { q: "L'erreur quadratique moyenne est égale à :", choix: ["V(T) + B(T)²", "V(T) − B(T)", "B(T) seul", "E(T)²"], bonne: 0, explication: "Elle additionne dispersion et décalage." },
      { q: "Entre deux estimateurs sans biais, on préfère celui qui a :", choix: ["La plus grande variance", "La plus petite variance", "Le plus grand n", "La plus grande moyenne"], bonne: 1, explication: "C'est le plus efficace." },
      { q: "L'estimateur du maximum de vraisemblance de p pour k succès sur n est :", choix: ["k × n", "k / n", "n / k", "k − n"], bonne: 1, explication: "On retrouve la fréquence." },
      { q: "Pour une loi de Poisson, le maximum de vraisemblance donne :", choix: ["La médiane", "La moyenne de l'échantillon", "La plus grande valeur", "L'écart-type"], bonne: 1, explication: "λ estimé = moyenne observée." },
      { q: "La méthode des moments consiste à :", choix: ["Égaler moments théoriques et moments observés", "Maximiser une probabilité", "Tirer un échantillon stratifié", "Rejeter une hypothèse"], bonne: 0, explication: "Puis à résoudre l'équation obtenue." },
    ],
  },

  5: {
    titre: "L'estimation par intervalle de confiance",
    description: "Intervalles de confiance d'une moyenne, d'une proportion, d'une variance et d'une différence, loi de Student, taille d'échantillon, avec exercices corrigés.",
    resume: md`
## L'essentiel — Intervalle de confiance

- Structure : estimation $\pm$ valeur critique $\times$ erreur type.
- Le « 95 % » qualifie la **méthode** : 95 % des intervalles possibles contiennent le paramètre.
- $z = 1{,}645$ (90 %), $1{,}96$ (95 %), $2{,}576$ (99 %) ; plus de confiance donne un intervalle plus large.
- Moyenne : $\bar{x} \pm z\,\sigma/\sqrt{n}$ (ou $s$ si $n \ge 30$) ; petit échantillon normal : Student $t_{n-1}$.
- Proportion : $f \pm z \sqrt{f(1 - f)/n}$.
- Variance (population normale) : $\left[(n - 1)s^2 / \chi^2_{\alpha/2} ; (n - 1)s^2 / \chi^2_{1 - \alpha/2}\right]$, non centré sur $s^2$.
- Différence : les variances s'additionnent ; si l'intervalle contient 0, on ne peut pas conclure à un écart.
- Taille : $n = (z\sigma/E)^2$ ou $z^2 p(1 - p)/E^2$ ; avec $p = 0{,}5$ et $E = 3$ points : 1 068 personnes.
- On arrondit $n$ à l'entier supérieur.
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
      { q: "Au niveau de confiance 95 %, on utilise z égal à :", choix: ["1,645", "1,96", "2,576", "1"], bonne: 1, explication: "P(− 1,96 < Z < 1,96) = 0,95." },
      { q: "Moyenne 50, σ = 10, n = 100. L'intervalle de confiance à 95 % est :", choix: ["[48,04 ; 51,96]", "[30,4 ; 69,6]", "[49,8 ; 50,2]", "[40 ; 60]"], bonne: 0, explication: "50 ± 1,96 × 10 / 10." },
      { q: "Pour diviser par 2 la marge d'erreur, il faut multiplier la taille de l'échantillon par :", choix: ["2", "4", "8", "1,41"], bonne: 1, explication: "La marge est proportionnelle à 1 / racine de n." },
      { q: "Quand le niveau de confiance augmente, l'intervalle de confiance :", choix: ["Se rétrécit", "S'élargit", "Ne change pas", "Disparaît"], bonne: 1, explication: "Plus de sécurité, moins de précision." },
      { q: "f = 0,3 et n = 100. L'erreur type de la fréquence vaut environ :", choix: ["0,003", "0,046", "0,21", "0,3"], bonne: 1, explication: "Racine de 0,21 / 100." },
      { q: "Pour un petit échantillon issu d'une population normale d'écart-type inconnu, on utilise :", choix: ["La loi de Poisson", "La loi de Student", "La loi binomiale", "La loi uniforme"], bonne: 1, explication: "Avec n − 1 degrés de liberté." },
      { q: "Sans information sur p, on calcule la taille d'échantillon avec :", choix: ["p = 0", "p = 0,5", "p = 1", "p = 0,1"], bonne: 1, explication: "C'est le cas le plus défavorable : p(1 − p) est maximal." },
      { q: "L'intervalle de confiance d'une variance utilise la loi :", choix: ["Normale", "De Student", "Du khi-deux", "De Poisson"], bonne: 2, explication: "Pour une population normale." },
      { q: "L'interprétation correcte d'un intervalle à 95 % est :", choix: ["95 % des individus sont dans l'intervalle", "La méthode réussit dans 95 % des échantillons", "Le paramètre change 5 fois sur 100", "L'échantillon est faux à 5 %"], bonne: 1, explication: "Le paramètre est fixe, l'intervalle varie." },
      { q: "Si l'intervalle de μ1 − μ2 ne contient pas 0, on peut penser que :", choix: ["Les deux moyennes sont égales", "Les deux moyennes diffèrent", "Les variances sont égales", "L'échantillon est trop grand"], bonne: 1, explication: "L'écart n'est pas dû au seul hasard, au risque choisi." },
    ],
  },

  6: {
    titre: "Les tests d'hypothèses",
    description: "Hypothèse nulle, risques alpha et bêta, p-valeur, tests sur une moyenne (Z et Student), une proportion, deux échantillons, khi-deux d'indépendance, corrigés.",
    resume: md`
## L'essentiel — Tests d'hypothèses

- $H_0$ : l'affirmation testée, sur un **paramètre** ($\mu = \mu_0$, $p = p_0$, indépendance) ; $H_1$ : bilatérale ($\neq$) ou unilatérale ($<$ ou $>$), fixée **avant** de voir les données.
- Risque $\alpha$ (1ʳᵉ espèce) : rejeter $H_0$ vraie ; risque $\beta$ (2ᵉ espèce) : garder $H_0$ fausse ; **puissance** $1 - \beta$. Seul un $n$ plus grand réduit les deux.
- Cinq étapes : hypothèses et $\alpha$ ; statistique et loi sous $H_0$ ; région critique ; calcul ; conclusion dans les termes du problème.
- **p-valeur** : probabilité, sous $H_0$, d'un écart au moins aussi grand ; rejet si p-valeur $< \alpha$. Ne pas rejeter $H_0$ ne prouve pas qu'elle est vraie.
- Moyenne : $Z = (\bar{x} - \mu_0) / (\sigma/\sqrt{n})$ ; petit échantillon, $\sigma$ inconnu : $T$ de Student à $n - 1$ ddl.
- Seuils à 5 % : bilatéral $\lvert Z \rvert > 1{,}96$ ; unilatéral $1{,}645$. À 1 % : $2{,}576$ et $2{,}326$.
- Proportion : $Z = (f - p_0) / \sqrt{p_0(1 - p_0)/n}$, avec $p_0$ sous la racine.
- Deux moyennes : $Z = (\bar{x}_1 - \bar{x}_2) / \sqrt{s_1^2/n_1 + s_2^2/n_2}$ ; deux proportions : proportion commune $\hat{p}$.
- **Khi-deux** : $T_{ij} = n_{i\cdot}\,n_{\cdot j} / N$, $\chi^2 = \sum (O - T)^2 / T$, $(r - 1)(c - 1)$ ddl, effectifs théoriques $\ge 5$ ; seuils à 5 % : 3,841 (1 ddl), 5,991 (2 ddl).
- Variance : $\chi^2 = (n - 1)s^2 / \sigma_0^2$ à $n - 1$ ddl ; deux variances : $F = s_1^2 / s_2^2$, plus grande variance au numérateur.
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
