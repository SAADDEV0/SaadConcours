// Microéconomie approfondie (S5) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "La théorie du consommateur et la dualité",
    description: "Consommateur en microéconomie approfondie : lagrangien, demandes marshalliennes et hicksiennes, fonction de dépense, Roy, Shephard et équation de Slutsky.",
    resume: md`
## L'essentiel — Consommateur et dualité

- Préférences complètes, transitives, continues, monotones, convexes ; utilité **ordinale**.
- $TMS_{x,y} = U_x / U_y$ ; à l'optimum $TMS = p_x / p_y$ et $p_x x + p_y y = R$.
- Demandes **marshalliennes** $x^M(p, R)$ ; utilité indirecte $V(p, R)$ ; **identité de Roy** : $x^M = -V_{p_x} / V_R$.
- Problème dual : minimiser la dépense sous $U = \bar{U}$ ; demandes **hicksiennes** $x^H(p, \bar{U})$ ; fonction de dépense $e(p, \bar{U})$.
- **Lemme de Shephard** : $x^H = \partial e / \partial p_x$ ; dualité : $e(p, V(p, R)) = R$.
- Cobb-Douglas $x^{\alpha} y^{1-\alpha}$ : $x^M = \alpha R / p_x$ (part de budget constante).
- **Slutsky** : $\partial x^M / \partial p_x = \partial x^H / \partial p_x - x\,\partial x^M / \partial R$ ; effet de substitution toujours négatif.
- Bien inférieur : effet revenu inverse ; bien **Giffen** si l'effet revenu domine.
- $VC = e(p^1, U^0) - R$ ; $VE = R - e(p^0, U^1)$ ; bien normal : $VE < \Delta SC < VC$.
`,
    exercices: md`
### Exercice 2 — Demandes et utilité indirecte

Un consommateur a pour utilité $U = x^{0,25} y^{0,75}$, un revenu $R = 2\,400$ DH et fait face aux prix $p_x = 30$ DH et $p_y = 45$ DH.

1. Calculez les demandes marshalliennes et les parts de budget.
2. Le revenu augmente de 10 %. Calculez l'élasticité-revenu de la demande de $x$.
3. Le prix de $y$ baisse. Que devient la demande de $x$ ? Commentez.

<details><summary>Voir le corrigé</summary>

**1)** Fonction Cobb-Douglas : $x = 0{,}25 \times 2\,400 / 30 = \mathbf{20}$ ; $y = 0{,}75 \times 2\,400 / 45 = \mathbf{40}$. Parts de budget : 25 % pour $x$ ($20 \times 30 = 600$ DH) et 75 % pour $y$ ($40 \times 45 = 1\,800$ DH).

**2)** Avec $R = 2\,640$ : $x = 0{,}25 \times 2\,640 / 30 = 22$, soit + 10 %. L'élasticité-revenu vaut $\mathbf{1}$ : avec une Cobb-Douglas, la demande est proportionnelle au revenu.

**3)** $x^M = 0{,}25 R / p_x$ ne dépend pas de $p_y$ : l'élasticité-prix croisée est **nulle**. Les effets de substitution et de revenu croisés se compensent exactement, ce qui est une propriété (restrictive) de la Cobb-Douglas.

</details>

### Exercice 3 — Biens complémentaires parfaits

Un automobiliste consomme toujours 1 litre d'huile ($y$) pour 50 litres de carburant ($x$) : $U = \min(x / 50 ;\, y)$. Prix : $p_x = 14$ DH, $p_y = 80$ DH, budget $R = 3\,000$ DH.

1. Déterminez le panier optimal.
2. Calculez la fonction de dépense et la demande hicksienne de carburant. Que vaut l'effet de substitution ?
3. Le prix du carburant passe à 15 DH. Calculez la variation compensatrice.

<details><summary>Voir le corrigé</summary>

**1)** À l'optimum, $x = 50 y$. Budget : $14 \times 50 y + 80 y = 780 y = 3\,000$, d'où $y \approx \mathbf{3{,}85}$ litres d'huile et $x \approx \mathbf{192{,}3}$ litres de carburant ; $U \approx 3{,}85$.

**2)** Pour atteindre $\bar{U}$, il faut $x = 50 \bar{U}$ et $y = \bar{U}$ : $e = (50 p_x + p_y)\,\bar{U}$. La demande hicksienne $x^H = 50 \bar{U}$ ne dépend pas des prix : l'effet de substitution est **nul** (pas de substitution possible), toute la variation passe par l'effet revenu.

**3)** $U^0 = 3\,000 / 780 \approx 3{,}846$. $e(15, 80, U^0) = (750 + 80) \times 3{,}846 \approx 3\,192{,}3$ DH. $VC \approx 3\,192{,}3 - 3\,000 = \mathbf{192{,}3}$ DH, soit exactement 1 DH par litre de carburant consommé initialement : sans substitution, la compensation est égale à la hausse de prix multipliée par la quantité initiale.

</details>
`,
    qcm: [
      { q: "Une fonction d'utilité est dite ordinale car :", choix: ["Elle mesure la satisfaction en dirhams", "Toute transformation croissante représente les mêmes préférences", "Elle est toujours linéaire", "Elle dépend du revenu"], bonne: 1, explication: "Seul l'ordre des paniers compte." },
      { q: "À l'optimum du consommateur, le TMS de x en y est égal à :", choix: ["py / px", "px / py", "R / px", "1"], bonne: 1, explication: "Pente de la courbe d'indifférence = pente de la droite de budget." },
      { q: "La demande hicksienne dépend :", choix: ["Des prix et du revenu", "Des prix et du niveau d'utilité", "Du revenu seulement", "De l'utilité seulement"], bonne: 1, explication: "Elle résout le problème de minimisation de la dépense." },
      { q: "Le lemme de Shephard permet d'obtenir la demande hicksienne en dérivant :", choix: ["La fonction d'utilité", "La fonction de dépense par rapport au prix", "L'utilité indirecte par rapport au revenu", "Le lagrangien par rapport à lambda"], bonne: 1, explication: "La dérivée de e par rapport à px vaut x hicksien." },
      { q: "L'identité de Roy relie la demande marshallienne à :", choix: ["La fonction de dépense", "La fonction d'utilité indirecte", "La fonction de production", "Le surplus du producteur"], bonne: 1, explication: "x = - (dV/dpx) / (dV/dR)." },
      { q: "L'effet de substitution d'une hausse du prix de x sur la demande de x est :", choix: ["Toujours positif", "Toujours négatif ou nul", "Positif pour un bien inférieur", "Égal à l'effet revenu"], bonne: 1, explication: "La demande compensée est décroissante en son prix." },
      { q: "Un bien Giffen est :", choix: ["Un bien de luxe", "Un bien inférieur dont l'effet revenu domine l'effet de substitution", "Un bien sans substitut", "Un bien public"], bonne: 1, explication: "Sa demande augmente avec son prix." },
      { q: "Avec U = x^a y^(1-a), la part du revenu dépensée pour x est :", choix: ["Variable avec le prix", "Constante et égale à a", "Égale à 1 - a", "Égale à px / py"], bonne: 1, explication: "x = aR / px, donc px x / R = a." },
      { q: "La variation compensatrice d'une hausse de prix est :", choix: ["R - e(p0, U1)", "e(p1, U0) - R", "Le surplus du producteur", "La perte sèche"], bonne: 1, explication: "Somme à verser aux nouveaux prix pour retrouver U0." },
      { q: "Pour un bien normal, on a :", choix: ["VC < VE", "VE < variation du surplus < VC", "VE = VC toujours", "La variation du surplus est supérieure à VC"], bonne: 1, explication: "Les deux mesures encadrent la variation du surplus marshallien." },
    ],
  },

  2: {
    titre: "Choix intertemporels et choix en situation d'incertitude",
    description: "Choix intertemporels (modèle de Fisher, équation d'Euler) et choix risqués : espérance d'utilité, aversion au risque, équivalent certain, assurance.",
    resume: md`
## L'essentiel — Temps et incertitude

- Contrainte intertemporelle : $c_1 + c_2/(1 + r) = y_1 + y_2/(1 + r) = W$ ; prix de la consommation présente $= 1 + r$.
- Équation d'Euler : $u'(c_1) = \beta(1 + r)\,u'(c_2)$ ; avec $\ln c_1 + \beta \ln c_2$ : $c_1 = W/(1 + \beta)$.
- Hausse de $r$ : effet de substitution → plus d'épargne ; effet revenu → ambigu pour un prêteur, même sens pour un emprunteur.
- Loterie : $E(L) = \sum \pi_i x_i$ ; critère de von Neumann-Morgenstern : $EU = \sum \pi_i u(x_i)$.
- Aversion pour le risque ⇔ $u$ concave ⇔ $u(E(L)) > EU(L)$.
- Équivalent certain : $u(EC) = EU$ ; prime de risque : $PR = E(L) - EC$.
- Arrow-Pratt : $A(x) = -u''/u'$ ; petit risque : $PR \approx \tfrac{1}{2} A\,\sigma^2$.
- Assurance complète : prime maximale $= W - EC = \pi D + PR$ ; prime pure $= \pi D$.
`,
    exercices: md`
### Exercice 2 — Un pari pour un investisseur

Un investisseur de richesse $W = 50\,000$ DH, d'utilité $u = \ln W$, se voit proposer un pari : gagner ou perdre 20 000 DH avec une chance sur deux.

1. Calculez l'espérance du pari et l'équivalent certain de sa richesse.
2. Déduisez la prime de risque. Accepte-t-il le pari gratuitement ?
3. Comparez avec l'approximation d'Arrow-Pratt.

<details><summary>Voir le corrigé</summary>

**1)** $E(W) = 0{,}5 \times 70\,000 + 0{,}5 \times 30\,000 = 50\,000$ DH : le pari est équitable. $EU = 0{,}5 \ln 70\,000 + 0{,}5 \ln 30\,000 = \ln\sqrt{70\,000 \times 30\,000}$, donc $EC = \sqrt{2{,}1 \times 10^9} \approx \mathbf{45\,826}$ DH.

**2)** $PR = 50\,000 - 45\,826 \approx \mathbf{4\,174}$ DH. Comme $EC < 50\,000$, il **refuse** le pari même gratuit : il paierait jusqu'à 4 174 DH pour ne pas le subir.

**3)** $A(W) = 1/W = 1/50\,000$ et $\sigma^2 = 20\,000^2 = 4 \times 10^8$ : $PR \approx 0{,}5 \times 4 \times 10^8 / 50\,000 = 4\,000$ DH. L'approximation est correcte à 4 % près ; elle se dégrade quand le risque est grand par rapport à la richesse.

</details>

### Exercice 3 — Un étudiant emprunteur

Un étudiant gagne $y_1 = 20\,000$ DH cette année et $y_2 = 88\,000$ DH l'an prochain. Utilité : $U = \ln c_1 + \ln c_2$.

1. Avec $r = 10\,\%$, calculez sa consommation et son endettement.
2. Le taux passe à 20 %. Recalculez. Commentez à l'aide des effets de substitution et de revenu.

<details><summary>Voir le corrigé</summary>

**1)** $W = 20\,000 + 88\,000 / 1{,}1 = 100\,000$ DH ; $c_1 = W/2 = \mathbf{50\,000}$ DH ; il emprunte $50\,000 - 20\,000 = \mathbf{30\,000}$ DH ; $c_2 = 88\,000 - 1{,}1 \times 30\,000 = \mathbf{55\,000}$ DH.

**2)** $W = 20\,000 + 88\,000 / 1{,}2 \approx 93\,333$ DH ; $c_1 \approx \mathbf{46\,667}$ DH ; emprunt $\approx 26\,667$ DH ; $c_2 = 88\,000 - 1{,}2 \times 26\,667 = \mathbf{56\,000}$ DH. L'étudiant **emprunte moins** : pour un emprunteur, l'effet de substitution (le présent devient plus cher) et l'effet revenu (sa richesse diminue) réduisent tous deux $c_1$.

</details>
`,
    qcm: [
      { q: "Dans la contrainte intertemporelle, le revenu de la période 2 est :", choix: ["Ajouté sans modification", "Actualisé en divisant par (1 + r)", "Multiplié par (1 + r)", "Ignoré"], bonne: 1, explication: "On raisonne en valeur actuelle." },
      { q: "Le prix relatif de la consommation présente en termes de consommation future est :", choix: ["r", "1 + r", "1 / (1 + r)", "β"], bonne: 1, explication: "1 DH consommé aujourd'hui coûte 1 + r DH demain." },
      { q: "Pour un emprunteur, une hausse du taux d'intérêt :", choix: ["Augmente toujours son emprunt", "Réduit sa consommation présente par les deux effets", "N'a aucun effet", "Augmente sa richesse"], bonne: 1, explication: "Substitution et revenu vont dans le même sens." },
      { q: "Le critère de von Neumann-Morgenstern consiste à maximiser :", choix: ["L'espérance de gain", "L'espérance d'utilité", "Le gain maximal", "La variance"], bonne: 1, explication: "EU = somme des pi u(xi)." },
      { q: "Un individu averse au risque a une fonction d'utilité :", choix: ["Convexe", "Concave", "Linéaire", "Décroissante"], bonne: 1, explication: "L'utilité marginale de la richesse décroît." },
      { q: "L'équivalent certain d'une loterie est :", choix: ["Son espérance", "La somme certaine donnant la même utilité que la loterie", "Le gain le plus probable", "La prime d'assurance pure"], bonne: 1, explication: "u(EC) = EU(L)." },
      { q: "La prime de risque est égale à :", choix: ["EC - E(L)", "E(L) - EC", "Variance de la loterie", "Prime pure"], bonne: 1, explication: "Positive pour un individu averse au risque." },
      { q: "Avec u(W) = W, l'individu est :", choix: ["Averse au risque", "Neutre au risque", "Amateur de risque", "Indifférent à la richesse"], bonne: 1, explication: "Utilité linéaire : seule l'espérance compte." },
      { q: "La prime d'assurance maximale qu'accepte un individu averse au risque est :", choix: ["La perte espérée seulement", "La perte espérée plus la prime de risque", "La perte totale", "Nulle"], bonne: 1, explication: "Pmax = W - EC = πD + PR." },
      { q: "Le coefficient d'aversion absolue d'Arrow-Pratt vaut :", choix: ["u' / u''", "- u'' / u'", "u'' × u'", "u / u'"], bonne: 1, explication: "Il mesure la courbure de u." },
    ],
  },

  3: {
    titre: "La théorie du producteur : technologie, coûts et offre",
    description: "Producteur en microéconomie approfondie : TMST, rendements d'échelle, élasticité de substitution, minimisation du coût, Shephard et offre concurrentielle.",
    resume: md`
## L'essentiel — Producteur, coûts et offre

- $TMST_{L,K} = f_L / f_K$ ; homogénéité de degré $h$ : rendements croissants ($h > 1$), constants ($h = 1$), décroissants ($h < 1$).
- Élasticité de substitution : Leontief 0, Cobb-Douglas 1, CES $1/(1 + \rho)$, linéaire $\infty$.
- Minimisation du coût : $f_L / f_K = w / r$ ⇔ $f_L / w = f_K / r$ ; sentier d'expansion.
- Demandes **conditionnelles** $K^*(r, w, Q)$, $L^*(r, w, Q)$ ; coût $C(r, w, Q)$ ; Shephard : $L^* = \partial C / \partial w$.
- Cobb-Douglas $\sqrt{KL}$ : $C = 2Q\sqrt{rw}$.
- Long terme = enveloppe des coûts de court terme ; économies d'échelle ⇔ $CM$ décroissant.
- Concurrence : $p = Cm$, $Cm$ croissant ; fermeture si $p < \min CVM$ ; rentabilité si $p \ge \min CM$.
- Demandes inconditionnelles : $p f_L = w$, $p f_K = r$ ; Hotelling : $\partial \Pi / \partial p = Q^*$.
`,
    exercices: md`
### Exercice 2 — Rendements décroissants et offre de long terme

Une entreprise produit selon $Q = K^{0,25} L^{0,25}$, avec $w = r = 16$.

1. Déterminez le degré d'homogénéité de la fonction.
2. Calculez les demandes conditionnelles et la fonction de coût.
3. Déterminez la fonction d'offre et la production pour $p = 128$. Calculez le profit.

<details><summary>Voir le corrigé</summary>

**1)** $0{,}25 + 0{,}25 = 0{,}5 < 1$ : rendements d'échelle **décroissants**.

**2)** $TMST = K/L = w/r = 1$, donc $K = L$ et $Q = L^{0,5}$ : $L^* = K^* = Q^2$. $C(Q) = 16Q^2 + 16Q^2 = \mathbf{32\,Q^2}$.

**3)** $Cm = 64\,Q$ (croissant, et $CM = 32\,Q$ est toujours inférieur) : l'offre est $Q = p/64$. Pour $p = 128$ : $Q = \mathbf{2}$, recette $256$, coût $32 \times 4 = 128$, profit $\mathbf{128}$. Avec des rendements décroissants, l'offre de long terme est bien définie et croissante.

</details>

### Exercice 3 — Technologie à facteurs complémentaires

Un atelier de confection de Casablanca combine une machine ($K$) et deux ouvrières ($L$) pour un lot : $Q = \min(2K ;\, L)$. Loyer d'une machine : $r = 50$ DH par jour ; salaire : $w = 30$ DH par demi-journée de travail.

1. Quelles quantités de facteurs utilise-t-il pour produire $Q$ lots ?
2. Calculez la fonction de coût et vérifiez le lemme de Shephard.
3. Le salaire augmente de 10 %. L'atelier modifie-t-il sa combinaison de facteurs ?

<details><summary>Voir le corrigé</summary>

**1)** Sans gaspillage, $2K = L = Q$ : $K^* = Q/2$, $L^* = Q$.

**2)** $C = 50 \times Q/2 + 30\,Q = \mathbf{55\,Q}$ ; en général $C = (r/2 + w)\,Q$. $\partial C / \partial w = Q = L^*$ ✔ et $\partial C / \partial r = Q/2 = K^*$ ✔.

**3)** Non : l'élasticité de substitution est **nulle**, les proportions sont fixes. Seul le coût augmente : $C = (25 + 33)\,Q = 58\,Q$, soit + 5,5 %.

</details>
`,
    qcm: [
      { q: "La fonction Q = 5 K^0,4 L^0,7 présente des rendements d'échelle :", choix: ["Décroissants", "Croissants", "Constants", "Nuls"], bonne: 1, explication: "0,4 + 0,7 = 1,1 > 1." },
      { q: "À l'optimum du producteur qui minimise son coût :", choix: ["fL / fK = r / w", "fL / fK = w / r", "fL = fK", "w = r"], bonne: 1, explication: "TMST égal au rapport des prix des facteurs." },
      { q: "L'élasticité de substitution d'une fonction Cobb-Douglas vaut :", choix: ["0", "1", "L'infini", "La somme des exposants"], bonne: 1, explication: "C'est une propriété de la Cobb-Douglas." },
      { q: "Une technologie de Leontief se caractérise par :", choix: ["Des facteurs substituables parfaits", "Des facteurs complémentaires en proportions fixes", "Des rendements croissants", "Un coût marginal croissant"], bonne: 1, explication: "σ = 0." },
      { q: "Les demandes conditionnelles de facteurs dépendent :", choix: ["Du prix du produit", "Des prix des facteurs et du niveau de production", "Du profit", "Du revenu des consommateurs"], bonne: 1, explication: "Elles résolvent la minimisation du coût pour un Q donné." },
      { q: "Selon le lemme de Shephard, la dérivée du coût par rapport au salaire donne :", choix: ["Le coût marginal", "La demande conditionnelle de travail", "L'offre", "Le profit"], bonne: 1, explication: "∂C/∂w = L*." },
      { q: "Avec des rendements d'échelle constants, le coût moyen de long terme est :", choix: ["Décroissant", "Constant", "Croissant", "En U"], bonne: 1, explication: "Il est égal au coût marginal." },
      { q: "À court terme, une firme concurrentielle cesse de produire si le prix est inférieur :", choix: ["Au minimum du coût moyen", "Au minimum du coût variable moyen", "Au coût fixe", "Au coût marginal en zéro"], bonne: 1, explication: "C'est le seuil de fermeture." },
      { q: "La courbe de coût de long terme est :", choix: ["La somme des coûts de court terme", "L'enveloppe inférieure des courbes de coût de court terme", "Toujours au-dessus du court terme", "Indépendante de la technologie"], bonne: 1, explication: "À long terme, le capital est choisi de façon optimale." },
      { q: "Le lemme de Hotelling stipule que la dérivée de la fonction de profit par rapport au prix du produit est :", choix: ["La demande de travail", "L'offre optimale", "Le coût marginal", "Nulle"], bonne: 1, explication: "∂Π/∂p = Q*." },
    ],
  },

  4: {
    titre: "L'équilibre général d'une économie d'échange",
    description: "Équilibre général d'échange pur : boîte d'Edgeworth, optimum de Pareto, courbe des contrats, équilibre walrasien et loi de Walras, exercices corrigés.",
    resume: md`
## L'essentiel — Équilibre général d'échange

- Équilibre partiel (un marché) ≠ équilibre général (tous les marchés simultanément, Walras 1874 ; existence : Arrow-Debreu 1954).
- Boîte d'Edgeworth : dimensions = quantités totales ; chaque point = allocation réalisable.
- **Optimum de Pareto** : impossible d'améliorer un agent sans en détériorer un autre ⇔ $TMS^A = TMS^B$.
- **Courbe des contrats** : ensemble des optima ; **noyau** : partie acceptée par les deux agents par rapport à la dotation.
- Revenu = valeur de la dotation : $R^i = p_x \omega_x^i + p_y \omega_y^i$.
- Seul le **prix relatif** est déterminé ; on fixe un numéraire.
- **Loi de Walras** : $p_x z_x + p_y z_y = 0$ ; avec 2 biens, un seul marché à résoudre.
- À l'équilibre, $TMS^A = TMS^B = p_x / p_y$ : l'équilibre est Pareto-optimal.
- Pareto = efficacité, pas équité.
`,
    exercices: md`
### Exercice 2 — Préférences différentes

A a pour utilité $U^A = (x^A)^2 y^A$ et une dotation $(6 ; 0)$ ; B a pour utilité $U^B = x^B (y^B)^2$ et une dotation $(0 ; 6)$. On pose $p_y = 1$.

1. Calculez les demandes de chaque agent en fonction de $p = p_x$.
2. Déterminez l'équilibre walrasien.
3. Vérifiez l'égalité des TMS.

<details><summary>Voir le corrigé</summary>

**1)** A consacre 2/3 de son revenu $6p$ à $x$ : $x^A = (2/3)(6p)/p = 4$ et $y^A = (1/3)(6p) = 2p$. B consacre 1/3 de son revenu $6$ à $x$ : $x^B = 2/p$ et $y^B = 4$.

**2)** Marché de $x$ : $4 + 2/p = 6 \Rightarrow p = \mathbf{1}$. Allocations : A $(4 ; 2)$, B $(2 ; 4)$. Marché de $y$ : $2 + 4 = 6$ ✔.

**3)** $TMS^A = 2y^A / x^A = 4/4 = 1$ ; $TMS^B = y^B / (2x^B) = 4/4 = 1$ ; égaux au prix relatif ✔. Chaque agent consomme davantage du bien qu'il préfère.

</details>

### Exercice 3 — Demandes nettes et tâtonnement

Dans l'économie de l'exercice du cours (blé et viande, $p_y = 1$), la demande nette de blé est $z_x(p) = \dfrac{12p + 6}{2p} - 12$.

1. Simplifiez $z_x(p)$ et déduisez $z_y(p)$ de la loi de Walras.
2. Le commissaire-priseur annonce $p = 1$. Quels sont les déséquilibres ? Comment doit-il ajuster le prix ?
3. Même question pour $p = 0{,}25$.

<details><summary>Voir le corrigé</summary>

**1)** $z_x(p) = 6 + 3/p - 12 = \mathbf{3/p - 6}$. Loi de Walras : $p\,z_x + z_y = 0$, d'où $z_y = -p\,z_x = \mathbf{6p - 3}$.

**2)** $z_x(1) = -3$ : **excès d'offre** de blé ; $z_y(1) = +3$ : excès de demande de viande. Le prix relatif du blé est trop élevé : il faut le **baisser**.

**3)** $z_x(0{,}25) = 12 - 6 = +6$ : excès de demande de blé ; $z_y = -1{,}5$. Il faut **augmenter** $p$. Le tâtonnement converge vers $p = 0{,}5$, où $z_x = z_y = 0$.

</details>
`,
    qcm: [
      { q: "L'équilibre général étudie :", choix: ["Un seul marché toutes choses égales par ailleurs", "La détermination simultanée de tous les prix et quantités", "Le seul marché du travail", "L'équilibre de la balance des paiements"], bonne: 1, explication: "Approche de Walras, par opposition à l'équilibre partiel de Marshall." },
      { q: "Dans la boîte d'Edgeworth, la largeur représente :", choix: ["Le revenu de A", "La quantité totale du bien x", "Le prix de x", "L'utilité de B"], bonne: 1, explication: "Les dimensions sont les dotations totales." },
      { q: "Une allocation est un optimum de Pareto si :", choix: ["Elle est égalitaire", "On ne peut améliorer un agent sans en détériorer un autre", "Elle maximise l'utilité de A", "Les prix sont nuls"], bonne: 1, explication: "C'est un critère d'efficacité." },
      { q: "En un optimum de Pareto intérieur d'une économie d'échange :", choix: ["TMS de A = 0", "TMS de A = TMS de B", "Les dotations sont égales", "Les utilités sont égales"], bonne: 1, explication: "Les courbes d'indifférence sont tangentes." },
      { q: "La courbe des contrats est :", choix: ["La droite de budget commune", "L'ensemble des optima de Pareto", "La frontière des possibilités de production", "La courbe de demande de marché"], bonne: 1, explication: "Elle relie les deux origines de la boîte." },
      { q: "Dans une économie d'échange, le revenu d'un agent est :", choix: ["Fixe et exogène", "La valeur de sa dotation aux prix du marché", "Égal à son utilité", "Égal au prix du numéraire"], bonne: 1, explication: "Il dépend des prix." },
      { q: "La loi de Walras affirme que :", choix: ["Tous les marchés sont toujours équilibrés", "La somme des valeurs des demandes nettes est nulle", "Les prix sont toujours positifs", "L'offre crée sa propre demande"], bonne: 1, explication: "Si n - 1 marchés sont équilibrés, le n-ième l'est aussi." },
      { q: "L'équilibre walrasien détermine :", choix: ["Les prix absolus", "Les prix relatifs", "Le niveau général des prix", "Le taux d'intérêt nominal"], bonne: 1, explication: "Les demandes sont homogènes de degré 0 en prix." },
      { q: "Le noyau d'une économie d'échange est :", choix: ["Toute la boîte d'Edgeworth", "La partie de la courbe des contrats préférée à la dotation par les deux agents", "Le point de dotation", "L'origine de A"], bonne: 1, explication: "Allocations efficaces et acceptées volontairement." },
      { q: "Lors du tâtonnement walrasien, si un bien est en excès de demande, son prix :", choix: ["Baisse", "Augmente", "Reste inchangé", "Devient nul"], bonne: 1, explication: "Le commissaire-priseur augmente le prix des biens demandés en excès." },
    ],
  },

  5: {
    titre: "Équilibre général avec production et économie du bien-être",
    description: "Économie du bien-être : conditions de Pareto avec production, TMT = TMS, deux théorèmes du bien-être, critères utilitariste, rawlsien, Arrow, second rang.",
    resume: md`
## L'essentiel — Production et bien-être

- Trois conditions de Pareto : $TMS^A = TMS^B$ (échange), $TMST^x = TMST^y$ (production), $TMT = TMS$ (combinaison des produits).
- $TMT = -dy/dx$ sur la FPP $= Cm_x / Cm_y$ ; FPP concave ⇔ coûts d'opportunité croissants.
- **1er théorème** : tout équilibre concurrentiel est Pareto-optimal (hypothèses : concurrence, marchés complets, pas d'externalités ni de biens publics, information parfaite).
- **2e théorème** : avec convexité, tout optimum est un équilibre concurrentiel après **transferts forfaitaires**.
- Efficacité ≠ équité ; fonctions de bien-être : utilitariste $U^A + U^B$, rawlsienne $\min(U^A, U^B)$, Nash $U^A U^B$.
- Optimum social = tangence entre la frontière des possibilités d'utilité et la plus haute courbe d'iso-bien-être.
- **Arrow** : pas de règle d'agrégation satisfaisant à la fois universalité, Pareto, indépendance et non-dictature ; paradoxe de Condorcet.
- **Second rang** : si une condition d'optimalité est violée, satisfaire les autres n'est pas forcément souhaitable.
`,
    exercices: md`
### Exercice 2 — Efficacité de la production

Deux branches utilisent 100 unités de capital et 100 unités de travail : $Q_x = K_x^{0,5} L_x^{0,5}$ et $Q_y = K_y^{0,25} L_y^{0,75}$. Actuellement, chaque branche dispose de 50 unités de chaque facteur.

1. Calculez les productions et les TMST des deux branches. L'allocation est-elle efficace ?
2. On transfère des facteurs : la branche $x$ reçoit $K_x = 62$ et $L_x = 40{,}5$. Calculez les nouvelles productions. Commentez.
3. Écrivez l'équation de la courbe des contrats de production.

<details><summary>Voir le corrigé</summary>

**1)** $Q_x = Q_y = 50$. $TMST^x = K_x / L_x = 1$ ; $TMST^y = (0{,}75/0{,}25)\,K_y / L_y = 3$. Les TMST diffèrent : l'allocation est **inefficace**. La branche $y$ valorise davantage le travail (en termes de capital) : elle doit recevoir du travail et céder du capital.

**2)** $Q_x = \sqrt{62 \times 40{,}5} \approx \mathbf{50{,}11}$ ; $Q_y = 38^{0,25} \times 59{,}5^{0,75} \approx \mathbf{53{,}19}$. Les **deux** productions augmentent avec les mêmes ressources : c'est une amélioration au sens de Pareto. Les TMST (1,53 et 1,92) restent différents : on peut encore améliorer.

**3)** $TMST^x = TMST^y$ : $\dfrac{K_x}{L_x} = \dfrac{3\,(100 - K_x)}{100 - L_x}$. Par exemple, pour $L_x = 50$ : $K_x = 75$ (TMST communs égaux à 1,5).

</details>

### Exercice 3 — Le paradoxe de Condorcet

Trois conseillers municipaux classent trois projets (école $E$, route $R$, hôpital $H$) :
- conseiller 1 : $E \succ R \succ H$ ;
- conseiller 2 : $R \succ H \succ E$ ;
- conseiller 3 : $H \succ E \succ R$.

1. Organisez les trois votes à la majorité deux à deux. Que constatez-vous ?
2. Quel lien avec le théorème d'Arrow ? Quel est le rôle de l'ordre du jour ?

<details><summary>Voir le corrigé</summary>

**1)** $E$ contre $R$ : $E$ gagne (conseillers 1 et 3). $R$ contre $H$ : $R$ gagne (1 et 2). $H$ contre $E$ : $H$ gagne (2 et 3). La préférence collective est $E \succ R \succ H \succ E$ : elle est **intransitive**, aucun projet ne bat tous les autres.

**2)** La majorité simple respecte Pareto, l'indépendance et l'absence de dictateur, mais viole l'universalité (elle ne donne pas toujours un classement transitif) : c'est une illustration du théorème d'impossibilité d'Arrow. Celui qui fixe l'**ordre des votes** détermine le résultat : en votant d'abord $R$ contre $H$, puis le gagnant contre $E$, c'est $E$ qui l'emporte.

</details>
`,
    qcm: [
      { q: "Dans une économie avec production, l'optimum de Pareto exige notamment :", choix: ["TMT = 0", "TMT = TMS", "TMS = 1", "TMST = TMS"], bonne: 1, explication: "Le taux de transformation doit égaler le taux de substitution des consommateurs." },
      { q: "Le taux marginal de transformation est égal :", choix: ["Au rapport des utilités marginales", "Au rapport des coûts marginaux des deux biens", "Au rapport des salaires", "Au taux d'intérêt"], bonne: 1, explication: "TMT = Cm_x / Cm_y." },
      { q: "Le premier théorème du bien-être énonce que :", choix: ["Tout optimum est juste", "Tout équilibre concurrentiel est un optimum de Pareto", "L'État doit fixer les prix", "Le monopole est efficace"], bonne: 1, explication: "C'est la main invisible formalisée." },
      { q: "Le second théorème du bien-être nécessite :", choix: ["Des rendements croissants", "Des transferts forfaitaires et des hypothèses de convexité", "Un monopole public", "L'absence de prix"], bonne: 1, explication: "On redistribue les dotations puis on laisse jouer le marché." },
      { q: "Une FPP concave signifie que :", choix: ["Les coûts d'opportunité sont constants", "Les coûts d'opportunité sont croissants", "La production est inefficace", "Les biens sont complémentaires"], bonne: 1, explication: "Produire plus de x coûte de plus en plus de y." },
      { q: "La fonction de bien-être rawlsienne est :", choix: ["La somme des utilités", "Le minimum des utilités", "Le produit des utilités", "L'utilité du plus riche"], bonne: 1, explication: "Critère du maximin." },
      { q: "Le critère utilitariste :", choix: ["Se soucie de la répartition", "Maximise la somme des utilités sans tenir compte de leur répartition", "Égalise toujours les utilités", "Rejette le critère de Pareto"], bonne: 1, explication: "Seul le total compte." },
      { q: "Le paradoxe de Condorcet montre que le vote à la majorité peut produire :", choix: ["Un dictateur", "Des préférences collectives intransitives", "Un optimum unique", "Des transferts forfaitaires"], bonne: 1, explication: "A bat B, B bat C, C bat A." },
      { q: "La théorie du second rang affirme que :", choix: ["Il faut toujours supprimer chaque distorsion", "Supprimer une seule distorsion peut réduire le bien-être s'il en reste d'autres", "Le marché est toujours de second rang", "Les taxes sont toujours inefficaces"], bonne: 1, explication: "Lipsey et Lancaster, 1956." },
      { q: "Le premier théorème du bien-être ne s'applique pas en présence :", choix: ["De prix concurrentiels", "D'externalités ou de biens publics", "De consommateurs rationnels", "D'entreprises maximisant le profit"], bonne: 1, explication: "Ce sont des défaillances du marché (chapitre 8)." },
    ],
  },

  6: {
    titre: "La théorie des jeux",
    description: "Théorie des jeux : stratégies dominantes, dilemme du prisonnier, équilibre de Nash pur et mixte, induction à rebours, menaces crédibles et jeux répétés.",
    resume: md`
## L'essentiel — Théorie des jeux

- Jeu = joueurs, stratégies, gains, information ; simultané (matrice) ou séquentiel (arbre).
- **Stratégie dominante** : meilleure quelle que soit la stratégie des autres ; une stratégie dominée n'est jamais jouée.
- **Dilemme du prisonnier** : équilibre en stratégies dominantes Pareto-dominé par la coopération.
- **Équilibre de Nash** : aucun joueur ne gagne à dévier seul ; méthode des meilleures réponses soulignées.
- Un jeu peut avoir 0, 1 ou plusieurs équilibres en stratégies pures ; toujours au moins un en stratégies mixtes (jeu fini).
- Stratégies mixtes : chaque joueur rend **l'autre** indifférent ; la probabilité d'un joueur dépend des gains de l'adversaire.
- Jeu séquentiel : **induction à rebours** → équilibre parfait en sous-jeux ; élimine les menaces non crédibles ; l'**engagement** rend une menace crédible.
- Jeu répété indéfiniment : coopération possible si $\delta$ est assez élevé (stratégie de déclenchement, donnant-donnant).
`,
    exercices: md`
### Exercice 2 — Entrée sur le marché du ciment

Une entreprise E envisage d'entrer sur un marché régional occupé par une entreprise en place I. Si E n'entre pas, les gains sont (E : 0 ; I : 100). Si E entre, I choisit entre une guerre des prix, qui donne (E : − 20 ; I : 30), et l'accommodation, qui donne (E : 40 ; I : 60).

1. Représentez l'arbre du jeu et résolvez-le par induction à rebours.
2. I annonce qu'il déclenchera une guerre des prix en cas d'entrée. Cette menace est-elle crédible ?
3. Avant le jeu, I peut construire une capacité excédentaire qui coûte 15 mais augmente son gain de 40 en cas de guerre des prix. Refaites l'analyse.

<details><summary>Voir le corrigé</summary>

**1)** Dernier nœud : si E entre, I compare $30$ (guerre) et $60$ (accommodation) : il **accommode**. E anticipe et compare $40$ (entrer) et $0$ : il **entre**. Équilibre parfait en sous-jeux : (Entrer ; Accommoder), gains (40 ; 60).

**2)** Non : une fois E entré, la guerre des prix réduit le gain de I (30 < 60). La menace n'est **pas crédible**. Le couple (Ne pas entrer ; Guerre) est un équilibre de Nash, mais il repose sur une menace que I n'exécuterait pas : il n'est pas parfait en sous-jeux.

**3)** Avec la capacité : si E n'entre pas, I gagne $100 - 15 = 85$ ; si E entre, guerre $30 + 40 - 15 = 55$, accommodation $60 - 15 = 45$. I préfère maintenant la **guerre** : la menace devient crédible. E anticipe un gain de − 20 et **n'entre pas**. I obtient 85, contre 60 sans investissement : l'investissement est rentable car il sert d'**engagement**.

</details>

### Exercice 3 — Faire durer une entente

On reprend le jeu de publicité des laiteries Atlas et Saïss (coopération : 6 chacune ; déviation : 7 pour celle qui dévie ; guerre publicitaire : 4 chacune). Le jeu est répété indéfiniment, avec un facteur d'actualisation $\delta$. Chaque laiterie suit la stratégie : « ne pas faire de publicité tant que l'autre n'en fait pas ; sinon, faire de la publicité pour toujours ».

1. Écrivez la condition pour qu'aucune laiterie n'ait intérêt à dévier.
2. Déterminez la valeur minimale de $\delta$.
3. Que se passe-t-il si le jeu est répété exactement 10 fois ?

<details><summary>Voir le corrigé</summary>

**1)** Coopérer pour toujours rapporte $6/(1 - \delta)$. Dévier rapporte 7 une fois, puis 4 pour toujours : $7 + 4\delta/(1 - \delta)$. Condition : $\dfrac{6}{1 - \delta} \ge 7 + \dfrac{4\delta}{1 - \delta}$.

**2)** En multipliant par $(1 - \delta)$ : $6 \ge 7(1 - \delta) + 4\delta = 7 - 3\delta$, d'où $\delta \ge \mathbf{1/3}$. Si les laiteries accordent assez de poids à l'avenir, l'entente tacite est stable.

**3)** Au 10e tour, il n'y a plus d'avenir : chacune fait de la publicité (stratégie dominante). Au 9e tour, le comportement du 10e étant connu, la menace de punition ne pèse plus : chacune dévie aussi, et ainsi de suite par **induction à rebours**. La coopération s'effondre dès le premier tour.

</details>
`,
    qcm: [
      { q: "Un équilibre de Nash est une situation où :", choix: ["Les gains totaux sont maximaux", "Aucun joueur n'a intérêt à changer seul de stratégie", "Chaque joueur a une stratégie dominante", "Les joueurs coopèrent"], bonne: 1, explication: "Chaque stratégie est une meilleure réponse aux autres." },
      { q: "Dans le dilemme du prisonnier, l'équilibre est :", choix: ["Pareto-optimal", "Pareto-dominé par la coopération", "Inexistant", "En stratégies mixtes"], bonne: 1, explication: "La rationalité individuelle conduit à un résultat collectivement inefficace." },
      { q: "Une stratégie dominante est :", choix: ["La stratégie la plus fréquente", "Meilleure que toute autre quelle que soit la stratégie de l'adversaire", "La stratégie de coopération", "Une stratégie mixte"], bonne: 1, explication: "Elle ne dépend pas du choix de l'autre." },
      { q: "Selon Nash, tout jeu fini admet au moins un équilibre :", choix: ["En stratégies dominantes", "En stratégies mixtes (éventuellement dégénérées)", "Coopératif", "Unique"], bonne: 1, explication: "Théorème d'existence de 1950." },
      { q: "À l'équilibre en stratégies mixtes, la probabilité choisie par un joueur sert à :", choix: ["Maximiser son propre gain espéré directement", "Rendre l'adversaire indifférent entre ses stratégies pures", "Minimiser les gains totaux", "Imiter l'adversaire"], bonne: 1, explication: "Elle dépend donc des gains de l'adversaire." },
      { q: "L'induction à rebours consiste à :", choix: ["Résoudre le jeu depuis la première décision", "Résoudre le jeu depuis les dernières décisions en remontant", "Tirer les stratégies au hasard", "Éliminer les joueurs dominés"], bonne: 1, explication: "On obtient l'équilibre parfait en sous-jeux." },
      { q: "Une menace est non crédible lorsque :", choix: ["Elle est annoncée publiquement", "Son auteur n'aurait pas intérêt à l'exécuter le moment venu", "Elle coûte de l'argent à l'adversaire", "Elle est répétée"], bonne: 1, explication: "L'équilibre parfait en sous-jeux l'élimine." },
      { q: "Le jeu de pile ou face (matching pennies) possède :", choix: ["Deux équilibres en stratégies pures", "Un seul équilibre, en stratégies mixtes", "Une stratégie dominante pour chaque joueur", "Aucun équilibre"], bonne: 1, explication: "Chacun joue pile et face avec probabilité 1/2." },
      { q: "Dans un jeu répété indéfiniment, la coopération est d'autant plus facile que :", choix: ["Le facteur d'actualisation est faible", "Le facteur d'actualisation est élevé", "Le gain de déviation est élevé", "La punition est faible"], bonne: 1, explication: "Les joueurs valorisent l'avenir." },
      { q: "Un jeu de coordination (choix d'une norme commune) a typiquement :", choix: ["Aucun équilibre", "Plusieurs équilibres de Nash", "Une stratégie dominante", "Un équilibre Pareto-dominé unique"], bonne: 1, explication: "Toute norme commune est un équilibre." },
    ],
  },

  7: {
    titre: "L'oligopole et la concurrence imparfaite",
    description: "Oligopole : indice HHI et de Lerner, duopole de Cournot, Stackelberg, paradoxe de Bertrand, cartel et instabilité de la collusion, exercices corrigés.",
    resume: md`
## L'essentiel — Oligopole

- Oligopole : peu d'entreprises, décisions **interdépendantes**.
- $HHI = \sum s_i^2$ (en %) : 10 000 en monopole, > 2 500 très concentré ; Lerner $L = (P - Cm)/P$, monopole : $L = 1/|\varepsilon|$.
- **Cournot** (quantités, simultané) : fonction de réaction $q_1 = (a - c_1 - b q_2)/(2b)$ ; coûts égaux : $q^* = (a - c)/(3b)$, $P^* = (a + 2c)/3$.
- $n$ firmes de Cournot : $Q = \frac{n}{n + 1} \cdot \frac{a - c}{b}$ → concurrence quand $n \to \infty$.
- **Stackelberg** (séquentiel) : le meneur intègre la réaction du suiveur ; il produit et gagne plus qu'en Cournot.
- **Bertrand** (prix, bien homogène) : $P = Cm$ ; paradoxe levé par la différenciation, les capacités limitées ou la répétition.
- **Cartel** : profit joint maximal (monopole) mais instable : chaque membre gagne à dévier (dilemme du prisonnier).
- Classement de la quantité : cartel < Cournot < Stackelberg < Bertrand.
`,
    exercices: md`
### Exercice 2 — Cournot à n entreprises

La demande est $P = 120 - Q$ et chaque entreprise a un coût marginal constant de 20.

1. Montrez qu'avec $n$ entreprises identiques, chacune produit $q = 100/(n + 1)$.
2. Calculez la quantité totale, le prix, le profit unitaire et l'indice de Lerner pour $n = 3$ et $n = 9$.
3. Que se passe-t-il quand $n$ devient très grand ?

<details><summary>Voir le corrigé</summary>

**1)** L'entreprise $i$ maximise $(120 - q_i - Q_{-i} - 20)\,q_i$ : $100 - 2q_i - Q_{-i} = 0$. À l'équilibre symétrique, $Q_{-i} = (n - 1)\,q$, d'où $100 - (n + 1)\,q = 0$ et $q = 100/(n + 1)$.

**2)**
- $n = 3$ : $q = 25$, $Q = 75$, $P = 45$, profit par entreprise $25 \times 25 = 625$, $L = 25/45 \approx 0{,}56$ ;
- $n = 9$ : $q = 10$, $Q = 90$, $P = 30$, profit $10 \times 10 = 100$, $L = 10/30 \approx 0{,}33$.

**3)** $Q = 100\,n/(n + 1) \to 100$ et $P \to 20 = Cm$ : on retrouve l'équilibre de **concurrence parfaite**, le pouvoir de marché disparaît.

</details>

### Exercice 3 — Bertrand avec produits différenciés

Deux marques d'eau minérale ont des demandes $q_1 = 100 - 2p_1 + p_2$ et $q_2 = 100 - 2p_2 + p_1$, et un coût marginal de 10 DH (prix en DH le pack, quantités en milliers).

1. Déterminez la fonction de réaction en prix de la marque 1.
2. Calculez l'équilibre de Nash en prix, les quantités et les profits.
3. Pourquoi le paradoxe de Bertrand ne s'applique-t-il pas ?

<details><summary>Voir le corrigé</summary>

**1)** $\pi_1 = (p_1 - 10)(100 - 2p_1 + p_2)$ ; $\partial \pi_1 / \partial p_1 = 100 - 4p_1 + p_2 + 20 = 0$, d'où $p_1 = (120 + p_2)/4$. La fonction est croissante : les prix sont des **compléments stratégiques**.

**2)** Par symétrie, $4p = 120 + p$, soit $p_1 = p_2 = \mathbf{40}$ DH ; $q = 100 - 80 + 40 = \mathbf{60}$ ; profit $= 30 \times 60 = \mathbf{1\,800}$ milliers de DH par marque.

**3)** Les produits ne sont pas parfaitement substituables : une marque qui baisse légèrement son prix ne capte pas toute la demande de l'autre. Chacune garde un **pouvoir de marché** et fixe un prix supérieur au coût marginal.

</details>
`,
    qcm: [
      { q: "Un marché dont les parts sont 50 %, 30 % et 20 % a un indice HHI de :", choix: ["100", "3 800", "5 000", "10 000"], bonne: 1, explication: "2 500 + 900 + 400 = 3 800." },
      { q: "L'indice de Lerner d'une entreprise en concurrence parfaite vaut :", choix: ["1", "0", "L'élasticité de la demande", "Le prix"], bonne: 1, explication: "P = Cm." },
      { q: "Dans le modèle de Cournot, la variable stratégique est :", choix: ["Le prix", "La quantité", "La publicité", "La qualité"], bonne: 1, explication: "Les quantités sont choisies simultanément." },
      { q: "Avec P = 120 - Q et c = 20, chaque duopoleur de Cournot produit :", choix: ["25", "33,3", "50", "100"], bonne: 1, explication: "(a - c)/3b = 100/3." },
      { q: "Le meneur de Stackelberg :", choix: ["Produit moins qu'en Cournot", "Produit plus et gagne plus qu'en Cournot", "Fixe le prix au coût marginal", "Fait un profit nul"], bonne: 1, explication: "Avantage du premier joueur." },
      { q: "Le paradoxe de Bertrand énonce que deux entreprises en concurrence en prix sur un bien homogène :", choix: ["Forment un cartel", "Fixent un prix égal au coût marginal", "Fixent le prix de monopole", "Se partagent le marché à moitié au prix de Cournot"], bonne: 1, explication: "Deux entreprises suffisent pour le résultat concurrentiel." },
      { q: "Un cartel est instable car :", choix: ["Les profits sont nuls", "Chaque membre a intérêt à produire plus que son quota", "La demande est trop élastique", "Les prix sont trop bas"], bonne: 1, explication: "C'est un dilemme du prisonnier." },
      { q: "Quand le nombre d'entreprises de Cournot tend vers l'infini, le prix tend vers :", choix: ["Le prix de monopole", "Le coût marginal", "Zéro", "Le prix de Stackelberg"], bonne: 1, explication: "On retrouve la concurrence parfaite." },
      { q: "Au Maroc, les ententes sont interdites par :", choix: ["La loi 17-95", "La loi 104-12 sur la liberté des prix et de la concurrence", "Le Code des douanes", "La loi 9-88"], bonne: 1, explication: "Le Conseil de la concurrence veille à son application." },
      { q: "Classez les modèles par quantité totale croissante :", choix: ["Bertrand, Cournot, cartel", "Cartel, Cournot, Stackelberg, Bertrand", "Stackelberg, cartel, Bertrand", "Cournot, cartel, Bertrand"], bonne: 1, explication: "Avec coûts identiques : 50 < 66,7 < 75 < 100 dans l'exemple du cours." },
    ],
  },

  8: {
    titre: "Les défaillances du marché : externalités, biens publics et information",
    description: "Défaillances du marché : externalités et taxe pigouvienne, théorème de Coase, biens publics et condition de Samuelson, sélection adverse et aléa moral.",
    resume: md`
## L'essentiel — Défaillances du marché

- Défaillances : pouvoir de marché, **externalités**, **biens publics**, **asymétries d'information**.
- Externalité négative : $Cm_s = Cm_p + Dm$ ; le marché surproduit ; perte sèche = triangle entre $Cm_s$ et la demande.
- **Taxe pigouvienne** $t = Dm(Q^*)$ ; autres outils : normes, marché de droits, subventions.
- **Coase** : droits bien définis + coûts de transaction nuls ⇒ négociation efficace quelle que soit l'attribution des droits.
- Bien public pur : non rival, non excluable ; **Samuelson** : $\sum Bm_i = Cm$ (addition **verticale**) ; passager clandestin → sous-provision.
- Ressource commune (rivale, non excluable) : tragédie des communs.
- **Sélection adverse** (avant le contrat, caractéristique cachée) : Akerlof, marché des « tacots ».
- **Aléa moral** (après le contrat, action cachée) : relation principal-agent.
- Réponses : signal (Spence), filtrage (menu de contrats), incitations (franchise, bonus-malus, rémunération variable), obligation d'assurance.
`,
    exercices: md`
### Exercice 2 — Le théorème de Coase sur un oued

Une usine de textile rejette ses effluents dans un oued en amont d'une pisciculture. Sans filtre, l'usine gagne 300 (milliers de DH par an) ; avec un filtre, 220. La pollution fait perdre 120 à la pisciculture.

1. Quelle est la solution efficace ?
2. L'usine a le droit de polluer. Que se passe-t-il si les deux parties négocient sans coût ?
3. La pisciculture a droit à une eau propre. Même question.
4. Que deviennent ces conclusions si l'oued borde 200 petits pêcheurs ?

<details><summary>Voir le corrigé</summary>

**1)** Le filtre coûte $300 - 220 = 80$, moins que le dommage évité (120) : il est efficace d'**installer le filtre** (gain social de 40).

**2)** La pisciculture propose à l'usine un paiement compris entre **80 et 120** pour qu'elle installe le filtre : les deux y gagnent, le filtre est installé.

**3)** L'usine doit soit installer le filtre (coût 80), soit indemniser la pisciculture (120) : elle installe le filtre. Dans les deux cas, l'issue est **efficace** ; seule la répartition des gains change.

**4)** Avec 200 pêcheurs, les coûts de transaction (se coordonner, négocier, contrôler) sont élevés et chaque pêcheur est tenté de laisser les autres payer : la négociation échoue. Une intervention publique (norme de rejet, taxe) devient nécessaire.

</details>

### Exercice 3 — Le marché des voitures d'occasion

Sur un marché d'occasion, la moitié des voitures sont bonnes et la moitié sont des « tacots ». Les vendeurs acceptent de céder une bonne voiture à partir de 80 000 DH et un tacot à partir de 40 000 DH. Les acheteurs sont prêts à payer 100 000 DH pour une bonne voiture et 50 000 DH pour un tacot, mais ne peuvent pas distinguer la qualité avant l'achat.

1. Quel prix maximal un acheteur neutre au risque propose-t-il ?
2. Quelles voitures sont mises en vente à ce prix ? Que se passe-t-il ensuite ?
3. Proposez deux solutions.

<details><summary>Voir le corrigé</summary>

**1)** Il paie la valeur espérée : $0{,}5 \times 100\,000 + 0{,}5 \times 50\,000 = \mathbf{75\,000}$ DH.

**2)** À 75 000 DH, les propriétaires de bonnes voitures (prix de réserve 80 000) se **retirent** ; seuls les tacots restent. Les acheteurs l'anticipent et ne paient plus que 50 000 DH au maximum : seuls les tacots s'échangent, entre 40 000 et 50 000 DH. Les échanges mutuellement avantageux de bonnes voitures (entre 80 000 et 100 000) disparaissent : c'est la **sélection adverse**.

**3)** Une **garantie** offerte par le vendeur (signal crédible : elle coûte cher à un vendeur de tacot), un **contrôle technique** ou une expertise indépendante, la **réputation** d'un garage professionnel.

</details>
`,
    qcm: [
      { q: "Une externalité négative de production conduit le marché à :", choix: ["Sous-produire", "Surproduire par rapport à l'optimum social", "Produire l'optimum", "Fixer un prix trop élevé"], bonne: 1, explication: "Le producteur ignore le coût qu'il impose aux autres." },
      { q: "La taxe pigouvienne optimale est égale :", choix: ["Au prix de marché", "Au dommage marginal évalué à la quantité optimale", "Au coût fixe", "Au dommage total"], bonne: 1, explication: "Elle internalise l'externalité." },
      { q: "Selon le théorème de Coase, l'attribution initiale des droits de propriété :", choix: ["Détermine l'efficacité", "N'affecte que la répartition des gains si les coûts de transaction sont nuls", "Est sans importance pour la répartition", "Empêche toute négociation"], bonne: 1, explication: "L'issue négociée est efficace dans les deux cas." },
      { q: "Un bien public pur est :", choix: ["Rival et excluable", "Non rival et non excluable", "Rival et non excluable", "Non rival et excluable"], bonne: 1, explication: "Exemple : la défense nationale." },
      { q: "La condition de Samuelson pour un bien public est :", choix: ["Bm de chaque individu = Cm", "Somme des Bm individuels = Cm", "Prix = Cm", "Somme des quantités = offre"], bonne: 1, explication: "Addition verticale des bénéfices marginaux." },
      { q: "Le passager clandestin est un agent qui :", choix: ["Paie plus que sa part", "Profite d'un bien public sans contribuer à son financement", "Pollue volontairement", "Vend des tacots"], bonne: 1, explication: "D'où la sous-provision par le marché." },
      { q: "La tragédie des communs concerne :", choix: ["Les biens de club", "Les ressources communes, rivales et non excluables", "Les biens privés", "Les monopoles naturels"], bonne: 1, explication: "Exemple : surpêche." },
      { q: "La sélection adverse est une asymétrie d'information :", choix: ["Sur une action cachée après le contrat", "Sur une caractéristique cachée avant le contrat", "Sur les prix", "Entre deux entreprises en concurrence"], bonne: 1, explication: "Exemple : le marché des tacots d'Akerlof." },
      { q: "L'aléa moral en assurance se combat notamment par :", choix: ["Une baisse des primes", "Une franchise ou un bonus-malus", "La suppression des contrats", "Une hausse des indemnités"], bonne: 1, explication: "L'assuré supporte une partie du sinistre." },
      { q: "Selon Spence, un diplôme peut servir de signal parce que :", choix: ["Il est gratuit", "Il coûte plus cher à obtenir pour les moins productifs", "Il est obligatoire", "Il augmente toujours la productivité"], bonne: 1, explication: "Un signal n'est crédible que s'il est coûteux pour les mauvais types." },
    ],
  },
};

export default chapitres;
