// Microéconomie (S1) — compléments par chapitre.
const md = String.raw;

export default {
  1: {
    titre: "Introduction : objet, agents et marché",
    resume: md`
## L'essentiel — Objet, agents, offre et demande

- La **microéconomie** étudie les décisions des agents individuels et leur coordination sur les **marchés** ; problème central : la **rareté**, d'où le **coût d'opportunité**.
- Agents : **ménage** (maximise l'utilité sous contrainte de revenu), **entreprise** (maximise le profit sous contrainte technique), **État**.
- Hypothèses : individualisme méthodologique, **rationalité**, maximisation, information parfaite, raisonnement **à la marge**.
- **Demande** décroissante avec le prix ; **offre** croissante.
- Variation du prix du bien : déplacement **sur** la courbe ; revenu, prix des autres biens, goûts : déplacement **de** la courbe.
- Biens **substituables** (hausse du prix de Y → demande de X ↑) et **complémentaires** (→ demande de X ↓).
- Demande de marché = **somme horizontale** des demandes individuelles.
`,
    exercices: md`
### Exercice 2 — Déplacements et demande de marché

1. Déplacement sur la courbe de demande de thé ou déplacement de la courbe ? a) le prix du thé baisse ; b) le prix du café augmente ; c) le revenu des ménages augmente ; d) une campagne vante les bienfaits du thé.
2. Un marché compte deux consommateurs : $D_1 = 50 - p$ et $D_2 = 30 - p$. Déterminez la demande de marché.
3. Un étudiant renonce à un emploi payé 3 000 DH par mois pour suivre un master. Quel est le coût d'opportunité mensuel de ce choix (hors frais d'études) ?

<details><summary>Voir le corrigé</summary>

**1)** a) déplacement **sur** la courbe ; b), c) et d) déplacement **de** la courbe vers la droite (café substituable, bien normal, goûts).

**2)** Pour $p \leq 30$ : $D = 80 - 2p$ ; pour $30 < p \leq 50$ : $D = 50 - p$ (seul le consommateur 1 achète) ; pour $p > 50$ : $D = 0$.

**3)** **3 000 DH par mois** : le salaire sacrifié, meilleure option à laquelle il renonce.

</details>
`,
    qcm: [
      { q: "Le coût d'opportunité est :", choix: ["Le prix payé", "La valeur de la meilleure option à laquelle on renonce", "Le coût fixe", "La TVA"], bonne: 1, explication: "Conséquence directe de la rareté." },
      { q: "Une hausse du revenu (bien normal) provoque :", choix: ["Un déplacement sur la courbe de demande", "Un déplacement de la courbe de demande vers la droite", "Une baisse de la demande", "Une hausse de l'offre"], bonne: 1, explication: "À chaque prix, on demande plus." },
      { q: "Voiture et carburant sont des biens :", choix: ["Substituables", "Complémentaires", "Inférieurs", "De Giffen"], bonne: 1, explication: "Ils se consomment ensemble." },
      { q: "Le raisonnement à la marge porte sur :", choix: ["Le total des unités", "La dernière unité", "La première unité", "La moyenne"], bonne: 1, explication: "Hypothèse centrale du modèle standard." },
      { q: "La demande de marché s'obtient par :", choix: ["La moyenne des demandes individuelles", "La somme horizontale des demandes individuelles", "Le produit des demandes", "La demande du plus gros acheteur"], bonne: 1, explication: "On additionne les quantités à chaque prix." },
    ],
  },

  2: {
    titre: "L'équilibre du marché, les élasticités et l'intervention de l'État",
    resume: md`
## L'essentiel — Équilibre, élasticités, État

- **Équilibre** : $D(p^*) = O(p^*)$ ; au-dessus, excès d'offre ; en dessous, excès de demande.
- **Élasticité** : $e = \dfrac{dQ}{dP} \times \dfrac{P}{Q}$. Demande élastique si $|e_d| > 1$ (une hausse de prix fait **baisser** la recette), inélastique si $|e_d| < 1$ (la recette augmente).
- Élasticité-revenu : > 0 bien normal, < 0 bien inférieur, > 1 bien de luxe ; élasticité croisée > 0 substituts, < 0 compléments.
- **Prix plafond** (< $p^*$) : pénurie ; **prix plancher** (> $p^*$) : excédent.
- **Taxe unitaire** : le consommateur paie plus, le producteur reçoit moins, la quantité baisse ; part du consommateur $= \dfrac{e_o}{e_o + |e_d|}$ ; le moins élastique supporte l'essentiel.
- **Surplus** du consommateur et du producteur ; toute distorsion crée une **perte sèche**.
`,
    exercices: md`
### Exercice 2 — Équilibre, élasticité et taxe

Sur un marché : $D = 120 - 2p$ et $O = -30 + 3p$.

1. Calculez l'équilibre et l'élasticité-prix de la demande en ce point.
2. L'État instaure une taxe de 5 DH par unité payée par les producteurs. Calculez le nouvel équilibre, le prix payé par les consommateurs, le prix reçu par les producteurs, la recette fiscale et la perte sèche.
3. Au lieu de la taxe, l'État fixe un prix plafond de 25 DH. Que se passe-t-il ?

<details><summary>Voir le corrigé</summary>

**1)** $120 - 2p = -30 + 3p$, donc $p^* = 30$ et $q^* = 60$. $e_d = -2 \times \dfrac{30}{60} = -1$ : élasticité **unitaire**.

**2)** Nouvelle offre : $O = -30 + 3(p - 5) = -45 + 3p$ ; $120 - 2p = -45 + 3p$, donc $p = 33$ et $q = 54$. Les consommateurs paient **33** (+3) ; les producteurs reçoivent **28** (−2) : le consommateur supporte 60 % de la taxe (vérification : $e_o = 1{,}5$, $\dfrac{1{,}5}{1{,}5 + 1} = 60\%$). Recette fiscale $= 5 \times 54 = 270$ ; perte sèche $= \dfrac{1}{2} \times 5 \times (60 - 54) = 15$.

**3)** $D = 70$ et $O = 45$ : **pénurie** de 25 unités (files d'attente, marché parallèle).

</details>
`,
    qcm: [
      { q: "Si le prix est supérieur au prix d'équilibre, il y a :", choix: ["Une pénurie", "Un excès d'offre", "Un équilibre", "Une taxe"], bonne: 1, explication: "Le prix va alors baisser." },
      { q: "Une demande dont l'élasticité-prix vaut −0,4 est :", choix: ["Élastique", "Inélastique", "Unitaire", "Parfaitement élastique"], bonne: 1, explication: "|e| < 1." },
      { q: "Pour une demande inélastique, une hausse du prix fait :", choix: ["Baisser la recette", "Augmenter la recette", "Ne change pas la recette", "Annuler la demande"], bonne: 1, explication: "La quantité baisse moins que le prix n'augmente." },
      { q: "Un prix plancher fixé au-dessus du prix d'équilibre provoque :", choix: ["Une pénurie", "Un excédent", "Un équilibre", "Une hausse de la demande"], bonne: 1, explication: "Exemple : salaire minimum et chômage." },
      { q: "Une élasticité-revenu négative caractérise un bien :", choix: ["De luxe", "Normal", "Inférieur", "Complémentaire"], bonne: 2, explication: "On en consomme moins quand le revenu augmente." },
    ],
  },

  3: {
    titre: "La théorie du consommateur : utilité et préférences",
    resume: md`
## L'essentiel — Utilité et préférences

- Axiomes : **complétude**, **transitivité**, **non-saturation**, **convexité**.
- **Utilité marginale** $Um_x = \partial U / \partial x$, **décroissante** (loi de Gossen) ; l'utilité totale est maximale quand $Um = 0$.
- Approche **cardinale** (utilité mesurable) et **ordinale** (utilité seulement classable).
- **Courbes d'indifférence** : décroissantes, convexes, ne se coupent pas, plus éloignées = plus d'utilité.
- $TMS_{x/y} = -\dfrac{dy}{dx} = \dfrac{Um_x}{Um_y}$ : quantité de $y$ abandonnée pour une unité de $x$ en plus ; **décroissant** le long de la courbe.
- Biens parfaitement substituables : TMS constant ; parfaitement complémentaires : courbes en L.
`,
    exercices: md`
### Exercice 2 — TMS le long d'une courbe d'indifférence

La fonction d'utilité est $U = xy$.

1. Calculez les utilités marginales et le TMS.
2. Vérifiez que les paniers (4 ; 9), (6 ; 6) et (9 ; 4) sont sur la même courbe d'indifférence.
3. Calculez le TMS en chacun de ces points. Que constatez-vous ?

<details><summary>Voir le corrigé</summary>

**1)** $Um_x = y$ ; $Um_y = x$ ; $TMS_{x/y} = \dfrac{y}{x}$.

**2)** $4 \times 9 = 6 \times 6 = 9 \times 4 = 36$ : même niveau d'utilité.

**3)** (4 ; 9) : $TMS = 2{,}25$ ; (6 ; 6) : $TMS = 1$ ; (9 ; 4) : $TMS \approx 0{,}44$. Le TMS **diminue** à mesure que le consommateur a plus de $x$ : il est prêt à céder de moins en moins de $y$ pour une unité de $x$ supplémentaire (convexité).

</details>
`,
    qcm: [
      { q: "La loi de Gossen énonce que l'utilité marginale est :", choix: ["Croissante", "Décroissante", "Constante", "Négative"], bonne: 1, explication: "Chaque unité supplémentaire satisfait moins." },
      { q: "Deux courbes d'indifférence ne peuvent pas se couper, sinon on violerait :", choix: ["La complétude", "La transitivité", "La convexité", "La rareté"], bonne: 1, explication: "Cohérence des préférences." },
      { q: "Le TMS de x à y est égal à :", choix: ["Umx × Umy", "Umx / Umy", "px / R", "Umy / Umx"], bonne: 1, explication: "Rapport des utilités marginales." },
      { q: "Pour des biens parfaitement complémentaires, les courbes d'indifférence sont :", choix: ["Des droites", "En forme de L", "Concaves", "Verticales"], bonne: 1, explication: "Fonction de Leontief." },
      { q: "L'approche ordinale de l'utilité est associée à :", choix: ["Walras et Jevons", "Pareto et Hicks", "Keynes", "Smith"], bonne: 1, explication: "L'utilité est seulement classable." },
    ],
  },

  4: {
    titre: "La contrainte budgétaire et l'équilibre du consommateur",
    resume: md`
## L'essentiel — Budget et équilibre du consommateur

- Droite de budget : $p_x x + p_y y = R$ ; pente $-p_x / p_y$.
- Hausse du revenu : **translation** ; hausse de $p_x$ : **rotation** ; prix et revenu multipliés par $k$ : aucun changement (pas d'illusion monétaire).
- Équilibre : **tangence** $TMS = \dfrac{p_x}{p_y}$, soit $\dfrac{Um_x}{p_x} = \dfrac{Um_y}{p_y}$ (équimarginalité), avec la contrainte de budget.
- **Cobb-Douglas** $U = x^{\alpha}y^{\beta}$ : $x^* = \dfrac{\alpha}{\alpha + \beta}\dfrac{R}{p_x}$ et $y^* = \dfrac{\beta}{\alpha + \beta}\dfrac{R}{p_y}$ (part constante du revenu).
- Effet total d'une variation de prix = **effet de substitution** (toujours opposé au prix) + **effet de revenu** ; bien de **Giffen** : effet de revenu dominant, la demande augmente avec le prix.
`,
    exercices: md`
### Exercice 2 — Optimum Cobb-Douglas

$U = x^2 y$ ; $R = 300$ DH ; $p_x = 10$ DH ; $p_y = 5$ DH.

1. Calculez le panier optimal par la condition de tangence.
2. Vérifiez avec les formules de la Cobb-Douglas.
3. Le prix de $x$ passe à 20 DH. Nouveau panier ? Commentez.

<details><summary>Voir le corrigé</summary>

**1)** $Um_x = 2xy$ ; $Um_y = x^2$ ; $TMS = \dfrac{2y}{x} = \dfrac{10}{5} = 2$, donc $y = x$. Budget : $10x + 5x = 300$, soit $x^* = y^* = 20$.

**2)** $x^* = \dfrac{2}{3} \times \dfrac{300}{10} = 20$ ; $y^* = \dfrac{1}{3} \times \dfrac{300}{5} = 20$ ✓.

**3)** $x^* = \dfrac{2}{3} \times \dfrac{300}{20} = 10$ ; $y^* = 20$ inchangé. Le consommateur consacre toujours 2/3 de son revenu à $x$ : la demande de $y$ ne dépend pas du prix de $x$.

</details>
`,
    qcm: [
      { q: "La pente de la droite de budget est :", choix: ["−px / py", "−py / px", "R / px", "px × py"], bonne: 0, explication: "Coût d'opportunité de x en y." },
      { q: "Une hausse du revenu, prix constants, provoque :", choix: ["Une rotation de la droite de budget", "Une translation parallèle vers l'extérieur", "Aucun changement", "Une translation vers l'origine"], bonne: 1, explication: "La pente ne change pas." },
      { q: "À l'équilibre du consommateur :", choix: ["TMS = px / py", "TMS = R", "Umx = Umy", "x = y toujours"], bonne: 0, explication: "Tangence entre courbe d'indifférence et droite de budget." },
      { q: "L'effet de substitution d'une hausse du prix de x est :", choix: ["Toujours une hausse de la demande de x", "Toujours une baisse de la demande de x", "Nul", "Indéterminé"], bonne: 1, explication: "On se détourne du bien devenu relativement cher." },
      { q: "Un bien de Giffen voit sa demande :", choix: ["Baisser quand son prix augmente", "Augmenter quand son prix augmente", "Rester constante", "Disparaître"], bonne: 1, explication: "Exception à la loi de la demande." },
    ],
  },

  5: {
    titre: "La théorie du producteur : production et productivités",
    resume: md`
## L'essentiel — Production et productivités

- $Q = f(K, L)$ ; **court terme** : au moins un facteur fixe ; **long terme** : tout est variable.
- $PM_L = Q / L$ ; $Pm_L = \partial Q / \partial L$ ; $PM_L$ est maximale quand $Pm_L = PM_L$ ; $Q$ est maximale quand $Pm_L = 0$.
- **Rendements marginaux décroissants** à court terme ; zone rationnelle de production (phase II) : entre le maximum de $PM_L$ et $Pm_L = 0$.
- **Rendements d'échelle** : croissants, constants, décroissants ; Cobb-Douglas $AK^{\alpha}L^{\beta}$ selon que $\alpha + \beta > 1$, $= 1$ ou $< 1$.
- **Isoquante** : même production ; $TMST_{L/K} = Pm_L / Pm_K$.
- Combinaison optimale : $\dfrac{Pm_L}{w} = \dfrac{Pm_K}{r}$.
`,
    exercices: md`
### Exercice 2 — Productivités de court terme

À court terme, $Q = 12L^2 - L^3$.

1. Donnez $PM_L$ et $Pm_L$.
2. Pour quelle quantité de travail la productivité moyenne est-elle maximale ? Quelle est sa valeur ?
3. Pour quelle quantité la production est-elle maximale ? Déduisez la zone de production rationnelle.
4. La fonction de long terme d'une autre entreprise est $Q = K^{0{,}3}L^{0{,}5}$. Nature des rendements d'échelle ?

<details><summary>Voir le corrigé</summary>

**1)** $PM_L = 12L - L^2$ ; $Pm_L = 24L - 3L^2$.

**2)** $Pm_L = PM_L$ : $24L - 3L^2 = 12L - L^2$, soit $12L = 2L^2$ et $L = 6$ ; $PM_L = 72 - 36 = 36$.

**3)** $Pm_L = 0$ : $24L = 3L^2$, soit $L = 8$ ; $Q_{max} = 768 - 512 = 256$. Zone rationnelle : $6 \leq L \leq 8$.

**4)** $0{,}3 + 0{,}5 = 0{,}8 < 1$ : rendements d'échelle **décroissants**.

</details>
`,
    qcm: [
      { q: "La productivité moyenne est maximale lorsque :", choix: ["Pm = 0", "Pm = PM", "Pm > PM", "Q = 0"], bonne: 1, explication: "Pm coupe PM en son maximum." },
      { q: "La production totale est maximale lorsque :", choix: ["Pm = PM", "Pm = 0", "PM = 0", "L = 0"], bonne: 1, explication: "Embaucher davantage ne rapporte plus rien." },
      { q: "Q = K^0,5 L^0,5 présente des rendements d'échelle :", choix: ["Croissants", "Constants", "Décroissants", "Nuls"], bonne: 1, explication: "0,5 + 0,5 = 1." },
      { q: "Le TMST est égal à :", choix: ["PmL / PmK", "w × r", "Q / L", "PML / PMK"], bonne: 0, explication: "Pente de l'isoquante." },
      { q: "La combinaison optimale des facteurs vérifie :", choix: ["PmL = PmK", "PmL / w = PmK / r", "L = K", "w = r"], bonne: 1, explication: "Le dernier dirham dépensé rapporte autant dans chaque facteur." },
    ],
  },

  6: {
    titre: "Les coûts de production",
    resume: md`
## L'essentiel — Les coûts

- $CT = CF + CV(q)$ ; $CFM = CF / q$ (toujours décroissant) ; $CVM = CV / q$ ; $CM = CT / q$ ; $Cm = dCT / dq$.
- $CVM$, $CM$ et $Cm$ sont en **U**.
- Le **coût marginal coupe le CVM et le CM en leur minimum** : si $Cm < CM$, $CM$ baisse ; si $Cm > CM$, $CM$ monte.
- Lien avec la productivité : $Cm = w / Pm_L$.
- À long terme, pas de coûts fixes ; la **CMLT** enveloppe les courbes de court terme : économies d'échelle, **taille optimale**, déséconomies d'échelle.
`,
    exercices: md`
### Exercice 2 — Minimum du CVM et du CM

$CT(q) = q^3 - 6q^2 + 20q + 100$.

1. Identifiez CF et CV ; donnez CVM, CM et Cm.
2. Trouvez le minimum du CVM et vérifiez qu'il est atteint là où $Cm = CVM$.
3. Vérifiez que le CM est minimal pour $q = 5$ et calculez sa valeur.

<details><summary>Voir le corrigé</summary>

**1)** $CF = 100$ ; $CV = q^3 - 6q^2 + 20q$ ; $CVM = q^2 - 6q + 20$ ; $CM = q^2 - 6q + 20 + \dfrac{100}{q}$ ; $Cm = 3q^2 - 12q + 20$.

**2)** $CVM' = 2q - 6 = 0$ pour $q = 3$ : $CVM_{min} = 9 - 18 + 20 = 11$. $Cm(3) = 27 - 36 + 20 = 11$ ✓.

**3)** $CM(5) = 25 - 30 + 20 + 20 = 35$ et $Cm(5) = 75 - 60 + 20 = 35$ : $Cm = CM$, donc le CM est minimal en $q = 5$ ($CM_{min} = 35$).

</details>
`,
    qcm: [
      { q: "Le coût fixe moyen est toujours :", choix: ["Croissant", "Décroissant", "Constant", "En U"], bonne: 1, explication: "Le coût fixe se répartit sur plus d'unités." },
      { q: "Le coût marginal coupe le coût moyen :", choix: ["En son maximum", "En son minimum", "À l'origine", "Jamais"], bonne: 1, explication: "Idem pour le CVM." },
      { q: "Si Cm < CM, alors le CM :", choix: ["Augmente", "Diminue", "Est minimal", "Est nul"], bonne: 1, explication: "Comme une note inférieure à la moyenne fait baisser la moyenne." },
      { q: "CT = 50 + 4q : le coût marginal vaut :", choix: ["50", "4", "54", "4q"], bonne: 1, explication: "Dérivée de CT." },
      { q: "À long terme, les coûts fixes :", choix: ["Augmentent", "N'existent plus", "Sont maximaux", "Sont égaux aux coûts variables"], bonne: 1, explication: "Tous les facteurs deviennent variables." },
    ],
  },

  7: {
    titre: "L'équilibre de l'entreprise en concurrence pure et parfaite",
    resume: md`
## L'essentiel — La CPP

- Hypothèses : **atomicité**, **homogénéité**, **libre entrée et sortie**, **transparence**, **mobilité des facteurs** ; l'entreprise est **preneuse de prix** ($p = Rm = RM$).
- Maximisation du profit : $p = Cm$ sur la **branche croissante** du coût marginal.
- **Seuil de rentabilité** : $p = CM_{min}$ ; **seuil de fermeture** : $p = CVM_{min}$.
- Entre les deux, l'entreprise produit à perte à court terme car elle couvre une partie de ses coûts fixes.
- **Offre individuelle** : branche croissante de $Cm$ au-dessus de $CVM_{min}$.
- **Long terme** : libre entrée → $p = Cm = CM_{min}$, profit économique **nul**.
`,
    exercices: md`
### Exercice 2 — Produire ou fermer ?

Une entreprise en CPP a le coût $CT = q^3 - 6q^2 + 20q + 100$ (seuil de fermeture : $p = 11$ ; seuil de rentabilité : $p = 35$).

1. Le prix du marché est de 56 DH. Quelle quantité produire ? Quel profit ?
2. Le prix tombe à 20 DH. Quelle quantité produire ? Comparez le résultat avec celui d'un arrêt de la production.
3. Donnez la fonction d'offre de l'entreprise.

<details><summary>Voir le corrigé</summary>

**1)** $p = Cm$ : $3q^2 - 12q + 20 = 56$, soit $q^2 - 4q - 12 = 0$ et $q = 6$. $CT(6) = 216 - 216 + 120 + 100 = 220$ ; profit $= 56 \times 6 - 220 = 116$ DH.

**2)** $3q^2 - 12q + 20 = 20$, soit $q = 4$ (branche croissante). $CVM(4) = 12 < 20$ : on produit. $CT(4) = 148$ ; résultat $= 80 - 148 = -68$ DH, contre $-100$ DH (les coûts fixes) en cas d'arrêt : il vaut mieux produire.

**3)** $p = 3q^2 - 12q + 20$ pour $p \geq 11$ (et $q \geq 3$) ; $q = 0$ si $p < 11$.

</details>
`,
    qcm: [
      { q: "En CPP, l'entreprise est :", choix: ["Faiseuse de prix", "Preneuse de prix", "En monopole", "Protégée par des barrières"], bonne: 1, explication: "Le prix lui est imposé par le marché." },
      { q: "La condition de maximisation du profit en CPP est :", choix: ["p = CM", "p = Cm sur la branche croissante", "Rm = 0", "CT minimal"], bonne: 1, explication: "Condition du premier et du second ordre." },
      { q: "Le seuil de fermeture correspond à :", choix: ["p = CMmin", "p = CVMmin", "p = Cm max", "p = 0"], bonne: 1, explication: "En dessous, on ne couvre pas les coûts variables." },
      { q: "Si CVMmin < p < CMmin, l'entreprise à court terme :", choix: ["Ferme", "Produit à perte", "Fait un profit", "Double sa production"], bonne: 1, explication: "Elle couvre une partie de ses coûts fixes." },
      { q: "À l'équilibre de long terme en CPP, le profit économique est :", choix: ["Maximal", "Nul", "Négatif", "Égal aux coûts fixes"], bonne: 1, explication: "La libre entrée élimine les profits." },
    ],
  },

  8: {
    titre: "Le monopole et les structures de marché",
    resume: md`
## L'essentiel — Monopole et structures de marché

- Structures selon le nombre d'offreurs et de demandeurs : **monopole**, **oligopole**, **CPP**, monopsone…
- Sources du monopole : **naturel** (coûts fixes élevés), **légal** (brevet, concession), innovation, ressource rare.
- Le monopoleur est **faiseur de prix** ; avec $p = a - bq$ : $Rm = a - 2bq$ (même ordonnée, pente double).
- Équilibre : $Rm = Cm$, puis prix lu **sur la demande**.
- **Indice de Lerner** $L = \dfrac{p - Cm}{p} = \dfrac{1}{|e_d|}$ ; le monopoleur se place dans la zone **élastique**.
- Par rapport à la CPP : prix plus élevé, quantité plus faible, profit positif, **perte sèche**.
- Structures intermédiaires : concurrence monopolistique, oligopoles de Cournot, Bertrand, Stackelberg ; les **cartels** sont sanctionnés par le Conseil de la concurrence.
`,
    exercices: md`
### Exercice 2 — Équilibre du monopoleur

La demande est $p = 100 - 2q$ et le coût total $CT = 10q + 50$.

1. Calculez la recette marginale et l'équilibre du monopole (quantité, prix, profit).
2. Calculez l'indice de Lerner.
3. Quelle serait la quantité en CPP ($p = Cm$) ? Calculez la perte sèche due au monopole.

<details><summary>Voir le corrigé</summary>

**1)** $Rm = 100 - 4q$ ; $Cm = 10$ ; $100 - 4q = 10$, soit $q = 22{,}5$ et $p = 100 - 45 = 55$. Profit $= 55 \times 22{,}5 - (225 + 50) = 962{,}5$.

**2)** $L = \dfrac{55 - 10}{55} \approx 0{,}82$ : fort pouvoir de marché.

**3)** $100 - 2q = 10$, soit $q = 45$ (et $p = 10$). Perte sèche $= \dfrac{1}{2} \times (55 - 10) \times (45 - 22{,}5) = 506{,}25$.

</details>
`,
    qcm: [
      { q: "Le monopoleur fixe sa quantité là où :", choix: ["p = Cm", "Rm = Cm", "p = CM", "Rm = 0"], bonne: 1, explication: "Puis il lit le prix sur la demande." },
      { q: "Si p = 80 − 4q, la recette marginale est :", choix: ["80 − 4q", "80 − 8q", "40 − 2q", "80 − 2q"], bonne: 1, explication: "Même ordonnée, pente double." },
      { q: "L'indice de Lerner vaut 0 en :", choix: ["Monopole", "Concurrence pure et parfaite", "Oligopole", "Monopsone"], bonne: 1, explication: "p = Cm : aucun pouvoir de marché." },
      { q: "Par rapport à la CPP, le monopole produit :", choix: ["Plus, moins cher", "Moins, plus cher", "Autant", "Gratuitement"], bonne: 1, explication: "D'où une perte sèche." },
      { q: "Un réseau de distribution d'eau est typiquement un monopole :", choix: ["D'innovation", "Naturel", "Illégal", "Temporaire"], bonne: 1, explication: "Coûts fixes très élevés et rendements croissants." },
    ],
  },
};
