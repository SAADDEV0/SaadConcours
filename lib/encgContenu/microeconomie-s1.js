// Microéconomie (ENCG S1) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "L'objet de la microéconomie et la démarche de l'économiste",
    description: "ENCG S1 : rareté et choix, coût d'opportunité, frontière des possibilités de production, agents, hypothèses du modèle et raisonnement à la marge.",
    resume: md`
## L'essentiel — Objet et démarche de la microéconomie

- **Rareté** : besoins illimités, ressources limitées, donc des choix.
- Microéconomie : choix d'un agent ou d'un marché ; macroéconomie : agrégats nationaux (PIB, chômage, inflation).
- **Coût d'opportunité** : valeur de la meilleure option abandonnée ; coût économique = coût comptable + coûts d'opportunité.
- **FPP** : combinaisons maximales de deux biens ; point sur la frontière = efficace, à l'intérieur = inefficace, à l'extérieur = inaccessible.
- Coût d'opportunité croissant → FPP **concave** ; la croissance déplace la FPP vers l'extérieur.
- Agents : ménages (maximisent l'utilité), entreprises (maximisent le profit) ; ils se coordonnent par les **prix** sur les marchés.
- Hypothèses : rationalité, information, **toutes choses égales par ailleurs** ; analyse positive ≠ normative.
- Grandeur marginale = variation pour une unité de plus = dérivée.
- Règle : agir tant que l'avantage marginal dépasse le coût marginal ; ignorer les coûts déjà engagés.
`,
    exercices: md`
### Exercice 2 — Coût d'opportunité

Salma, étudiante à l'ENCG Settat, hésite entre trois options pour ses vacances d'été : un stage non rémunéré dans une banque, un emploi saisonnier dans un hôtel d'Agadir payé 6 000 DH, ou des cours particuliers qui lui rapporteraient 4 500 DH. Elle choisit le stage. Quel est le coût d'opportunité de ce choix ? Pourquoi peut-il quand même être rationnel ?

<details><summary>Voir le corrigé</summary>

Le coût d'opportunité est la valeur de la **meilleure** option abandonnée : l'emploi saisonnier, soit **6 000 DH** (et non $6\,000 + 4\,500$ : on ne peut faire qu'une seule option à la fois).

Le choix reste rationnel si Salma attend du stage des avantages supérieurs à 6 000 DH : expérience, réseau, chances d'embauche ou de sélection en master. Le coût d'opportunité ne dit pas qu'un choix est mauvais ; il rappelle ce qu'il coûte réellement.

</details>

### Exercice 3 — Décision à la marge

Une boulangerie de Rabat, qui paie un loyer mensuel de 12 000 DH, se demande si elle doit ouvrir de 20 h à 22 h. Ces deux heures rapporteraient 900 DH de ventes par jour ; elles coûteraient 350 DH de salaires, 120 DH d'électricité et 300 DH de matières premières. Doit-elle ouvrir ? Le loyer intervient-il ?

<details><summary>Voir le corrigé</summary>

Avantage marginal : 900 DH par jour. Coût marginal : $350 + 120 + 300 = 770$ DH. Gain net : **+130 DH par jour** : l'ouverture tardive est intéressante.

Le loyer de 12 000 DH est payé que la boulangerie ouvre ou non le soir : il ne change pas avec la décision et ne doit **pas** être pris en compte.

</details>
`,
    qcm: [
      { q: "Le coût d'opportunité d'un choix est :", choix: ["La somme de toutes les options abandonnées", "La valeur de la meilleure option abandonnée", "Le prix payé", "Le coût comptable"], bonne: 1, explication: "On ne peut réaliser qu'une seule option à la place du choix retenu." },
      { q: "Un point situé à l'intérieur de la FPP est :", choix: ["Inaccessible", "Efficace", "Inefficace", "Impossible à atteindre"], bonne: 2, explication: "Des ressources sont inutilisées ou mal employées." },
      { q: "Une FPP concave traduit :", choix: ["Un coût d'opportunité constant", "Un coût d'opportunité croissant", "Une absence de rareté", "Un progrès technique"], bonne: 1, explication: "Chaque unité supplémentaire coûte de plus en plus de l'autre bien." },
      { q: "Laquelle de ces questions relève de la microéconomie ?", choix: ["L'évolution du taux de chômage national", "Le prix de la sardine au port d'Agadir", "Le niveau de l'inflation", "Le solde de la balance commerciale"], bonne: 1, explication: "Elle porte sur un marché particulier." },
      { q: "L'expression toutes choses égales par ailleurs signifie :", choix: ["Que tous les prix sont égaux", "Qu'on fait varier une seule grandeur à la fois", "Que les agents sont identiques", "Que le marché est à l'équilibre"], bonne: 1, explication: "On isole l'effet d'une variable." },
      { q: "Une grandeur marginale correspond mathématiquement à :", choix: ["Une moyenne", "Une dérivée", "Une intégrale", "Un pourcentage fixe"], bonne: 1, explication: "C'est la variation pour une unité supplémentaire." },
      { q: "Dans une décision à la marge, un loyer déjà dû quoi qu'on fasse :", choix: ["Doit être ajouté au coût marginal", "Ne doit pas être pris en compte", "Doit être doublé", "Remplace la recette"], bonne: 1, explication: "Il ne varie pas avec la décision." },
      { q: "Selon le modèle de base, le consommateur cherche à maximiser :", choix: ["Son profit", "Son utilité", "Son revenu", "Ses dépenses"], bonne: 1, explication: "Sous la contrainte de son budget." },
      { q: "« Il faut subventionner le pain » est un énoncé :", choix: ["Positif", "Normatif", "Macroéconomique par nature", "Faux par définition"], bonne: 1, explication: "Il exprime ce qui devrait être." },
      { q: "La construction d'un barrage qui irrigue de nouvelles terres :", choix: ["Déplace la FPP vers l'intérieur", "Déplace la FPP vers l'extérieur", "Ne modifie pas la FPP", "Rend la FPP linéaire"], bonne: 1, explication: "Les ressources disponibles augmentent." },
    ],
  },

  2: {
    titre: "L'offre, la demande et l'équilibre du marché",
    description: "ENCG S1 : lois de l'offre et de la demande, déterminants, équilibre, statique comparative, surplus, prix plafond, prix plancher et incidence d'une taxe.",
    resume: md`
## L'essentiel — Offre, demande, équilibre

- **Loi de la demande** : la quantité demandée baisse quand le prix monte ; **loi de l'offre** : la quantité offerte monte avec le prix.
- Prix du bien → **mouvement le long** de la courbe ; autre déterminant (revenu, prix des substituts et compléments, goûts, coûts, technique, climat) → **déplacement** de la courbe.
- Équilibre : $Q_d(p^*) = Q_o(p^*)$ ; au-dessus, excédent d'offre ; en dessous, pénurie.
- Demande à droite : $p$ et $Q$ montent ; offre à droite : $p$ baisse et $Q$ monte.
- **Surplus du consommateur** : aire entre la demande et le prix ; **du producteur** : aire entre le prix et l'offre ; surplus total maximal à l'équilibre.
- **Prix plafond** sous l'équilibre → pénurie ; **prix plancher** au-dessus → excédent.
- **Taxe unitaire** sur les vendeurs : remplacer $p$ par $p - t$ dans l'offre ; prix payé monte, prix reçu baisse ; recette = $t \times Q$.
- La partie la moins sensible au prix supporte la plus grande part de la taxe.
`,
    exercices: md`
### Exercice 2 — Déplacement ou mouvement ?

Sur le marché de l'huile d'olive, indiquez quelle courbe se déplace (et dans quel sens), puis l'effet sur le prix et la quantité d'équilibre :
1. Une sécheresse réduit fortement la récolte d'olives.
2. Une campagne de santé publique vante les bienfaits de l'huile d'olive.
3. Le prix de l'huile de table (substitut) baisse.
4. Une nouvelle technique d'extraction réduit le coût de production.

<details><summary>Voir le corrigé</summary>

1. Offre vers la gauche : prix ↑, quantité ↓.
2. Demande vers la droite : prix ↑, quantité ↑.
3. Demande vers la gauche : prix ↓, quantité ↓.
4. Offre vers la droite : prix ↓, quantité ↑.

</details>

### Exercice 3 — Incidence d'une taxe

Sur un marché, $Q_d = 500 - 5p$ et $Q_o = 5p - 100$. L'État instaure une taxe de 4 DH par unité, versée par les vendeurs. Calculez l'équilibre avant et après la taxe, les prix payé et reçu, la recette fiscale et la répartition de la charge.

<details><summary>Voir le corrigé</summary>

Avant : $500 - 5p = 5p - 100 \Rightarrow p = 60$ ; $Q = 200$.

Après : $Q_o = 5(p - 4) - 100 = 5p - 120$ ; $500 - 5p = 5p - 120 \Rightarrow p = 62$ ; $Q = 190$.

Prix payé par les acheteurs : **62** (+2) ; prix reçu par les vendeurs : **58** (−2). Recette fiscale $= 4 \times 190 = \mathbf{760}$. Les pentes étant égales en valeur absolue, la charge se partage **à moitié**.

</details>
`,
    qcm: [
      { q: "Une hausse du prix du thé entraîne, sur le marché du thé :", choix: ["Un déplacement de la demande vers la gauche", "Une baisse de la quantité demandée le long de la courbe", "Une hausse de la demande", "Un déplacement de l'offre"], bonne: 1, explication: "Le prix du bien lui-même provoque un mouvement le long de la courbe." },
      { q: "Le sucre et le thé sont des biens complémentaires. Une hausse du prix du sucre :", choix: ["Augmente la demande de thé", "Diminue la demande de thé", "Ne change rien", "Augmente l'offre de thé"], bonne: 1, explication: "La courbe de demande de thé se déplace vers la gauche." },
      { q: "Qd = 100 − 2p et Qo = 3p − 50. Le prix d'équilibre est :", choix: ["20", "30", "40", "50"], bonne: 1, explication: "5p = 150 donc p = 30." },
      { q: "À un prix inférieur au prix d'équilibre, on observe :", choix: ["Un excédent d'offre", "Une pénurie", "L'équilibre", "Une baisse des prix"], bonne: 1, explication: "La quantité demandée dépasse la quantité offerte." },
      { q: "Une sécheresse sur le marché du blé :", choix: ["Déplace l'offre vers la gauche, le prix monte", "Déplace la demande vers la droite", "Déplace l'offre vers la droite", "N'a pas d'effet sur le prix"], bonne: 0, explication: "La quantité produite à chaque prix diminue." },
      { q: "Un prix plafond fixé au-dessus du prix d'équilibre :", choix: ["Crée une pénurie", "Crée un excédent", "N'a pas d'effet", "Fait baisser l'offre"], bonne: 2, explication: "Le prix d'équilibre respecte déjà le plafond." },
      { q: "Le surplus du consommateur mesure :", choix: ["Le profit des entreprises", "L'écart entre ce que les acheteurs étaient prêts à payer et ce qu'ils paient", "La recette fiscale", "La quantité échangée"], bonne: 1, explication: "C'est un gain des acheteurs." },
      { q: "Le salaire minimum est un exemple de :", choix: ["Prix plafond", "Prix plancher", "Taxe", "Subvention"], bonne: 1, explication: "C'est un prix minimum du travail." },
      { q: "Après une taxe unitaire de 5 DH, les acheteurs paient 3 DH de plus. Les vendeurs reçoivent :", choix: ["5 DH de moins", "2 DH de moins", "3 DH de moins", "Autant qu'avant"], bonne: 1, explication: "La taxe de 5 DH se partage 3 + 2." },
      { q: "Le progrès technique dans un secteur entraîne en général :", choix: ["Une hausse du prix et une baisse des quantités", "Une baisse du prix et une hausse des quantités", "Une baisse de la demande", "Aucun changement"], bonne: 1, explication: "L'offre se déplace vers la droite." },
    ],
  },

  3: {
    titre: "Les élasticités",
    description: "ENCG S1 : élasticité-prix de la demande ponctuelle et d'arc, lien avec la recette totale, élasticité-revenu, élasticité croisée et élasticité de l'offre.",
    resume: md`
## L'essentiel — Les élasticités

- Élasticité = variation relative de la quantité / variation relative de la cause ; sans unité.
- Ponctuelle : $e_p = \dfrac{dQ}{dp} \times \dfrac{p}{Q}$ ; d'arc : variations rapportées aux **moyennes**.
- $\lvert e_p \rvert > 1$ élastique ; $= 1$ unitaire ; $< 1$ inélastique.
- Demande élastique si substituts proches, part importante du budget, bien non indispensable, long terme.
- Demande linéaire : pente constante mais élasticité variable (élastique en haut, inélastique en bas).
- $\dfrac{dRT}{dp} = Q(1 + e_p)$ : demande inélastique → hausse du prix = hausse de la recette ; recette maximale quand $e_p = -1$.
- Élasticité-revenu : $< 0$ bien inférieur ; entre 0 et 1 nécessité ; $> 1$ luxe.
- Élasticité croisée : $> 0$ substituts ; $< 0$ compléments ; $0$ indépendants.
- Élasticité de l'offre $\geq 0$, plus forte à long terme.
`,
    exercices: md`
### Exercice 2 — Élasticité et politique de prix

Un transporteur interurbain vend 50 000 billets par mois à 120 DH. Une étude estime l'élasticité-prix de sa demande à −0,6. Il envisage une hausse de 10 %. Estimez la nouvelle quantité et la variation de la recette. Que se passerait-il avec une élasticité de −1,5 ?

<details><summary>Voir le corrigé</summary>

Avec $e = -0{,}6$ : quantité $-6\,\%$, soit $47\,000$ billets à $132$ DH ; recette $6\,204\,000$ DH contre $6\,000\,000$ : **+204 000 DH**. La demande est inélastique, la hausse est rentable.

Avec $e = -1{,}5$ : quantité $-15\,\%$, soit $42\,500$ billets ; recette $42\,500 \times 132 = 5\,610\,000$ DH : **−390 000 DH**. Demande élastique : la hausse fait perdre de la recette.

(Calcul approché : l'élasticité est supposée constante sur l'intervalle.)

</details>

### Exercice 3 — Élasticité croisée

Quand le prix du café augmente de 8 %, la demande de thé augmente de 2 % ; quand le prix des capsules de café augmente de 10 %, la demande de machines à capsules baisse de 5 %. Calculez et interprétez les élasticités croisées.

<details><summary>Voir le corrigé</summary>

Thé / café : $e = 2 / 8 = \mathbf{+0{,}25}$ : biens **substituables**, faiblement.

Machines / capsules : $e = -5 / 10 = \mathbf{-0{,}5}$ : biens **complémentaires**.

</details>
`,
    qcm: [
      { q: "Une élasticité-prix de la demande de −0,4 signifie qu'une hausse de 10 % du prix :", choix: ["Réduit la quantité de 40 %", "Réduit la quantité de 4 %", "Augmente la quantité de 4 %", "Ne change pas la quantité"], bonne: 1, explication: "−0,4 × 10 % = −4 %." },
      { q: "Si la demande est élastique, une baisse du prix :", choix: ["Diminue la recette totale", "Augmente la recette totale", "Laisse la recette inchangée", "Annule la demande"], bonne: 1, explication: "La quantité augmente plus que le prix ne baisse." },
      { q: "La recette totale est maximale lorsque l'élasticité-prix vaut :", choix: ["0", "−1", "−2", "+1"], bonne: 1, explication: "dRT/dp = Q(1 + e) s'annule pour e = −1." },
      { q: "Pour Q = 100 − 2p, l'élasticité au prix p = 20 vaut :", choix: ["−0,67", "−2", "−0,4", "−1"], bonne: 0, explication: "Q = 60 ; −2 × 20 / 60 ≈ −0,67." },
      { q: "Un bien dont l'élasticité-revenu est de 1,5 est :", choix: ["Inférieur", "De nécessité", "De luxe", "Indépendant"], bonne: 2, explication: "La consommation augmente plus vite que le revenu." },
      { q: "Une élasticité-prix croisée négative indique des biens :", choix: ["Substituables", "Complémentaires", "Inférieurs", "Indépendants"], bonne: 1, explication: "La hausse du prix de l'un réduit la demande de l'autre." },
      { q: "Quel facteur rend la demande d'un bien plus élastique ?", choix: ["L'absence de substituts", "Une faible part dans le budget", "L'existence de nombreux substituts proches", "Le caractère vital du bien"], bonne: 2, explication: "Les acheteurs peuvent se reporter ailleurs." },
      { q: "Pourquoi calcule-t-on l'élasticité d'arc avec des moyennes ?", choix: ["Pour obtenir un résultat positif", "Pour obtenir le même résultat quel que soit le sens du calcul", "Pour simplifier la dérivée", "Parce que la demande est linéaire"], bonne: 1, explication: "Sinon, la hausse et la baisse donnent deux valeurs différentes." },
      { q: "Le long d'une demande linéaire décroissante, l'élasticité :", choix: ["Est constante", "Varie selon le point", "Est toujours égale à la pente", "Est toujours égale à −1"], bonne: 1, explication: "Le rapport p/Q change le long de la droite." },
      { q: "L'offre d'un produit agricole est en général :", choix: ["Plus élastique à court terme qu'à long terme", "Moins élastique à court terme qu'à long terme", "Parfaitement élastique", "Négative"], bonne: 1, explication: "On ne peut pas augmenter une récolte rapidement." },
    ],
  },

  4: {
    titre: "Les préférences et l'utilité du consommateur",
    description: "ENCG S1 : hypothèses sur les préférences, utilité ordinale, utilité marginale décroissante, courbes d'indifférence, TMS, substituts et compléments parfaits.",
    resume: md`
## L'essentiel — Préférences et utilité

- Hypothèses : **complétude**, **transitivité**, **non-saturation** (plus vaut mieux), **convexité** (paniers équilibrés préférés).
- Fonction d'utilité $U(x, y)$ : seul le **classement** compte (utilité ordinale) ; toute transformation croissante représente les mêmes préférences.
- Utilité marginale $Um_x = \partial U / \partial x$ ; loi de l'utilité marginale **décroissante**.
- Courbe d'indifférence : paniers de même utilité ; décroissante, convexe, sans intersection ; plus loin de l'origine = mieux.
- $TMS_{x,y} = -dy/dx = Um_x / Um_y$ : quantité de $y$ cédée pour une unité de $x$ à utilité constante.
- TMS décroissant le long de la courbe = préférences convexes.
- $U = xy$ : $TMS = y/x$ ; $U = x^2 y$ : $TMS = 2y/x$.
- Substituts parfaits : $U = ax + by$, droites, TMS constant $a/b$.
- Compléments parfaits : $U = \min(ax ; by)$, courbes en L.
`,
    exercices: md`
### Exercice 2 — Utilité marginale

Pour $U(x, y) = 4\sqrt{x}\,\sqrt{y}$ :
1. Calculez $Um_x$ et $Um_y$. L'utilité marginale de $x$ est-elle décroissante ?
2. Calculez le TMS au panier (4 ; 16).

<details><summary>Voir le corrigé</summary>

1. $U = 4x^{1/2}y^{1/2}$ ; $Um_x = 2x^{-1/2}y^{1/2} = 2\sqrt{y/x}$ ; $Um_y = 2\sqrt{x/y}$. $\partial Um_x / \partial x = -x^{-3/2}y^{1/2} < 0$ : **décroissante**.
2. $TMS = Um_x / Um_y = y / x = 16 / 4 = \mathbf{4}$.

</details>

### Exercice 3 — Substituts ou compléments ?

Pour chaque situation, proposez une forme de fonction d'utilité et décrivez les courbes d'indifférence :
1. Un automobiliste indifférent entre deux stations-service qui vendent le même carburant au même prix.
2. Un client qui achète toujours un pantalon avec une ceinture.
3. Un étudiant qui partage son budget entre livres et sorties et apprécie la variété.

<details><summary>Voir le corrigé</summary>

1. Substituts parfaits : $U = x + y$ ; droites de pente −1, TMS constant égal à 1.
2. Compléments parfaits : $U = \min(x ; y)$ ; courbes en L, coins sur la droite $y = x$.
3. Préférences standard : $U = x^a y^b$ ; courbes convexes, TMS décroissant.

</details>
`,
    qcm: [
      { q: "L'hypothèse de transitivité signifie que :", choix: ["Le consommateur préfère toujours plus", "Si A est préféré à B et B à C, alors A est préféré à C", "Les courbes sont convexes", "Le consommateur est indifférent entre tous les paniers"], bonne: 1, explication: "Elle garantit la cohérence des choix." },
      { q: "Dans l'approche ordinale, U(A) = 40 et U(B) = 20 signifie :", choix: ["A apporte deux fois plus de satisfaction que B", "A est préféré à B", "B est préféré à A", "A et B sont équivalents"], bonne: 1, explication: "Seul l'ordre compte." },
      { q: "La loi de Gossen énonce que :", choix: ["L'utilité totale diminue", "L'utilité marginale diminue avec la quantité consommée", "Le prix diminue avec la quantité", "Le revenu est constant"], bonne: 1, explication: "Chaque unité supplémentaire satisfait moins que la précédente." },
      { q: "Deux courbes d'indifférence ne peuvent pas se couper car cela violerait :", choix: ["La transitivité", "La loi de la demande", "La contrainte budgétaire", "La rareté"], bonne: 0, explication: "Un même panier aurait deux niveaux d'utilité." },
      { q: "Pour U = xy, le TMS au panier (2 ; 8) vaut :", choix: ["0,25", "4", "16", "2"], bonne: 1, explication: "TMS = y/x = 8/2." },
      { q: "Le TMS est égal à :", choix: ["Umx / Umy", "Umy / Umx", "Px / Py toujours", "x / y"], bonne: 0, explication: "Rapport des utilités marginales, y cédé contre x." },
      { q: "Des courbes d'indifférence en forme de L correspondent à des biens :", choix: ["Parfaitement substituables", "Parfaitement complémentaires", "Inférieurs", "De luxe"], bonne: 1, explication: "Ils se consomment dans une proportion fixe." },
      { q: "Pour des substituts parfaits U = 3x + y, le TMS est :", choix: ["Décroissant", "Constant et égal à 3", "Nul", "Égal à y/x"], bonne: 1, explication: "Les courbes d'indifférence sont des droites." },
      { q: "Un TMS décroissant le long d'une courbe d'indifférence traduit :", choix: ["Des préférences convexes", "Des biens inférieurs", "Une utilité cardinale", "Une saturation"], bonne: 0, explication: "Le consommateur préfère les paniers équilibrés." },
      { q: "La fonction V = ln U, avec U une fonction d'utilité :", choix: ["Représente d'autres préférences", "Représente les mêmes préférences", "N'est pas une fonction d'utilité", "Inverse le classement"], bonne: 1, explication: "C'est une transformation croissante." },
    ],
  },

  5: {
    titre: "La contrainte budgétaire et le choix optimal",
    description: "ENCG S1 : droite de budget, effets du revenu et des prix, condition d'optimum TMS = prix relatif, méthode de Lagrange, Cobb-Douglas et solutions en coin.",
    resume: md`
## L'essentiel — Contrainte budgétaire et optimum

- Contrainte : $p_x x + p_y y = R$ ; intercepts $R/p_x$ et $R/p_y$ ; pente $-p_x/p_y$ (prix relatif).
- Revenu ↑ : déplacement **parallèle** ; prix d'un bien ↓ : **pivotement** vers l'extérieur.
- Optimum intérieur : tangence, $TMS = Um_x / Um_y = p_x / p_y$.
- Équivalent : $Um_x / p_x = Um_y / p_y$ (seconde loi de Gossen).
- Méthode : $y$ en fonction de $x$ par la tangence, puis remplacement dans la contrainte.
- Lagrange : $\mathcal{L} = U + \lambda(R - p_x x - p_y y)$ ; $\lambda$ = utilité marginale du revenu.
- Cobb-Douglas $x^a y^b$ : $x^* = \dfrac{a}{a+b}\dfrac{R}{p_x}$ ; parts budgétaires constantes.
- Substituts parfaits : tout sur le bien au meilleur $Um/p$ (solution en coin).
- Compléments parfaits $\min(x ; y)$ : $x^* = y^* = R / (p_x + p_y)$.
`,
    exercices: md`
### Exercice 2 — Le raccourci Cobb-Douglas

Un ménage a pour fonction d'utilité $U = x^{0{,}3}y^{0{,}7}$, un revenu de 1 000, et fait face aux prix $p_x = 5$ et $p_y = 14$. Calculez le panier optimal et les parts du budget consacrées à chaque bien.

<details><summary>Voir le corrigé</summary>

$x^* = 0{,}3 \times 1\,000 / 5 = \mathbf{60}$ ; $y^* = 0{,}7 \times 1\,000 / 14 = \mathbf{50}$.

Dépenses : $300$ en $x$ (30 %) et $700$ en $y$ (70 %) : les exposants donnent directement les parts budgétaires. Vérification par la tangence : $TMS = \dfrac{0{,}3\,y}{0{,}7\,x} = \dfrac{15}{42} = \dfrac{5}{14}$ ✓.

</details>

### Exercice 3 — Thé et sucre

Hamid ne boit son thé ($x$, en verres) qu'avec deux morceaux de sucre ($y$) : $U = \min(x ; y/2)$. Le verre coûte 3 et le morceau de sucre 0,5. Il dispose d'un budget de 80. Calculez son panier optimal.

<details><summary>Voir le corrigé</summary>

À l'optimum, aucun bien n'est gaspillé : $y = 2x$. Contrainte : $3x + 0{,}5 \times 2x = 4x = 80 \Rightarrow x^* = \mathbf{20}$ verres et $y^* = \mathbf{40}$ morceaux. La condition de tangence ne s'applique pas : les courbes en L n'ont pas de pente au coin.

</details>
`,
    qcm: [
      { q: "La pente de la droite de budget est :", choix: ["−px/py", "−py/px", "R/px", "px × py"], bonne: 0, explication: "Elle mesure le prix relatif du bien x." },
      { q: "Une hausse du revenu, les prix restant constants :", choix: ["Fait pivoter la droite de budget", "Déplace la droite parallèlement vers l'extérieur", "Ne change rien", "Modifie la pente"], bonne: 1, explication: "Le prix relatif est inchangé." },
      { q: "À l'optimum intérieur du consommateur :", choix: ["TMS = py/px", "TMS = px/py", "Umx = Umy", "x = y"], bonne: 1, explication: "La courbe d'indifférence est tangente à la droite de budget." },
      { q: "R = 100, px = 5, py = 10. L'ordonnée à l'origine de la droite de budget est :", choix: ["20", "10", "50", "100"], bonne: 1, explication: "R/py = 100/10." },
      { q: "Avec U = xy, R = 200, px = 4, py = 5, la quantité optimale de x est :", choix: ["20", "25", "40", "50"], bonne: 1, explication: "La moitié du budget en x : 100 / 4 = 25." },
      { q: "Le multiplicateur de Lagrange s'interprète comme :", choix: ["Le prix du bien x", "L'utilité marginale du revenu", "Le TMS", "Le revenu"], bonne: 1, explication: "Gain d'utilité pour une unité de budget en plus." },
      { q: "Avec une fonction Cobb-Douglas, une hausse du prix de x :", choix: ["Réduit x et laisse y inchangé", "Réduit x et y", "Augmente y", "Ne change rien"], bonne: 0, explication: "La dépense consacrée à y reste une part fixe du revenu." },
      { q: "Pour des substituts parfaits U = x + y avec px = 3 et py = 2, le consommateur achète :", choix: ["Autant de x que de y", "Uniquement x", "Uniquement y", "Rien"], bonne: 2, explication: "y donne plus d'utilité par dirham (1/2 > 1/3)." },
      { q: "La condition Umx/px = Umy/py signifie que :", choix: ["Les deux biens ont le même prix", "Le dernier dirham dépensé rapporte la même utilité dans les deux biens", "Les utilités totales sont égales", "Le budget n'est pas épuisé"], bonne: 1, explication: "C'est la seconde loi de Gossen." },
      { q: "Si tous les prix et le revenu doublent, la droite de budget :", choix: ["Se déplace vers l'extérieur", "Se déplace vers l'intérieur", "Reste la même", "Pivote"], bonne: 2, explication: "Le pouvoir d'achat réel est inchangé." },
    ],
  },

  6: {
    titre: "La demande individuelle et les effets d'un changement de prix",
    description: "ENCG S1 : fonctions de demande, courbe d'Engel, biens normaux, inférieurs et de Giffen, effet de substitution et de revenu (Slutsky, Hicks), demande de marché.",
    resume: md`
## L'essentiel — Demande et effets de prix

- La **fonction de demande** vient du choix optimal écrit avec des prix et un revenu littéraux ; pour $U = xy$ : $x^* = R / (2p_x)$.
- Courbe de consommation-prix → courbe de demande ; courbe de consommation-revenu → **courbe d'Engel**.
- Bien normal : Engel croissante (luxe si $e_R > 1$) ; bien inférieur : Engel décroissante.
- Effet total d'un prix = **effet de substitution** (toujours de sens contraire au prix) + **effet de revenu** (dépend de la nature du bien).
- **Slutsky** : revenu compensé $R' = p_x^{nouveau} x_A + p_y y_A$ (pouvoir d'achat constant).
- **Hicks** : panier intermédiaire à utilité constante, aux nouveaux prix.
- Bien de **Giffen** : bien inférieur dont l'effet de revenu l'emporte, demande croissante avec le prix (cas rare).
- Demande de marché = **somme horizontale** des quantités individuelles ; $n$ consommateurs identiques : $n \times q(p)$.
`,
    exercices: md`
### Exercice 2 — Demande de marché coudée

Deux catégories de clients achètent un produit : les étudiants, $q_1 = 40 - 4p$ (pour $p \leq 10$), et les salariés, $q_2 = 60 - 3p$ (pour $p \leq 20$). Écrivez la demande de marché selon le prix et calculez-la pour $p = 8$ et $p = 12$.

<details><summary>Voir le corrigé</summary>

Pour $p \leq 10$ : $Q = 100 - 7p$. Pour $10 < p \leq 20$ : seuls les salariés achètent, $Q = 60 - 3p$.

$p = 8$ : $Q = 100 - 56 = \mathbf{44}$. $p = 12$ : $Q = 60 - 36 = \mathbf{24}$.

</details>

### Exercice 3 — Bien inférieur

Lors d'une baisse du prix d'un bien, on mesure : effet de substitution $+6$ unités, effet total $+4$ unités. Calculez l'effet de revenu et qualifiez le bien. Qu'aurait-on conclu avec un effet total de $-2$ ?

<details><summary>Voir le corrigé</summary>

Effet de revenu $= 4 - 6 = \mathbf{-2}$ : la hausse du pouvoir d'achat réduit la consommation, le bien est **inférieur** (mais pas de Giffen, puisque la quantité augmente quand le prix baisse).

Avec un effet total de $-2$ : effet de revenu $= -8$, plus fort que l'effet de substitution ; la quantité baisse quand le prix baisse : **bien de Giffen**.

</details>
`,
    qcm: [
      { q: "Pour U = xy, la fonction de demande du bien x est :", choix: ["x = R / px", "x = R / (2px)", "x = 2R / px", "x = px / R"], bonne: 1, explication: "La moitié du revenu est consacrée à x." },
      { q: "La courbe d'Engel relie :", choix: ["La quantité demandée au prix", "La quantité demandée au revenu", "Le prix au revenu", "Deux biens substituables"], bonne: 1, explication: "Elle décrit l'effet du revenu, prix constants." },
      { q: "L'effet de substitution d'une baisse de prix :", choix: ["Est toujours positif sur la quantité du bien", "Est toujours négatif", "Dépend de la nature du bien", "Est nul pour un bien normal"], bonne: 0, explication: "Le bien devenu relativement moins cher est davantage acheté." },
      { q: "Pour un bien normal, l'effet de revenu d'une baisse de prix est :", choix: ["Positif", "Négatif", "Nul", "Indéterminé"], bonne: 0, explication: "Le consommateur, plus riche en termes réels, achète plus." },
      { q: "Un bien de Giffen est :", choix: ["Un bien de luxe", "Un bien inférieur dont l'effet de revenu l'emporte sur l'effet de substitution", "Un bien normal", "Un bien complémentaire"], bonne: 1, explication: "Sa demande augmente avec son prix." },
      { q: "Selon Slutsky, le revenu compensé permet :", choix: ["D'atteindre la même utilité", "D'acheter l'ancien panier aux nouveaux prix", "D'acheter le nouveau panier aux anciens prix", "De doubler la consommation"], bonne: 1, explication: "C'est le pouvoir d'achat constant." },
      { q: "Selon Hicks, le panier intermédiaire :", choix: ["Coûte le même prix que l'ancien panier", "Procure la même utilité que le panier initial, aux nouveaux prix", "Est le panier final", "Est toujours égal à celui de Slutsky"], bonne: 1, explication: "On raisonne à utilité constante." },
      { q: "La demande de marché s'obtient en additionnant :", choix: ["Les prix des consommateurs", "Les quantités demandées à chaque prix", "Les revenus", "Les utilités"], bonne: 1, explication: "C'est une somme horizontale." },
      { q: "100 consommateurs identiques ont chacun q = 10 − p. La demande de marché est :", choix: ["Q = 10 − 100p", "Q = 1 000 − 100p", "Q = 1 000 − p", "Q = 10 − p"], bonne: 1, explication: "On multiplie la quantité par 100." },
      { q: "Effet de substitution +3, effet de revenu +2 : l'effet total est :", choix: ["+1", "+5", "−1", "+6"], bonne: 1, explication: "Les deux effets s'additionnent." },
    ],
  },

  7: {
    titre: "La production",
    description: "ENCG S1 : fonction de production, productivités moyenne et marginale, rendements décroissants, isoquantes, TMST et rendements d'échelle, exercices corrigés.",
    resume: md`
## L'essentiel — La production

- Fonction de production $Q = f(K, L)$ : production **maximale** pour chaque combinaison de facteurs.
- Court terme : au moins un facteur fixe (souvent $K$) ; long terme : tous les facteurs varient.
- $PM_L = Q/L$ ; $Pm_L = dQ/dL$ (ou $\Delta Q / \Delta L$).
- **Loi des rendements décroissants** : à facteur fixe donné, la productivité marginale du facteur variable finit par baisser.
- $Pm_L$ coupe $PM_L$ en son maximum ; production maximale quand $Pm_L = 0$.
- **Zone rationnelle** : entre le maximum de $PM_L$ et $Pm_L = 0$.
- **Isoquante** : combinaisons donnant la même production ; décroissante et convexe.
- $TMST = -dK/dL = Pm_L / Pm_K$ ; pour $Q = AK^{\alpha}L^{\beta}$ : $TMST = \dfrac{\beta K}{\alpha L}$.
- Rendements d'échelle : $\alpha + \beta = 1$ constants, $> 1$ croissants, $< 1$ décroissants.
`,
    exercices: md`
### Exercice 2 — Productivités d'une fonction

À court terme, une entreprise a pour fonction de production $Q = 12L^2 - L^3$ (avec $L$ en dizaines d'ouvriers).
1. Calculez $PM_L$ et $Pm_L$.
2. Pour quelle valeur de $L$ la productivité moyenne est-elle maximale ? la production totale ?
3. Délimitez la zone de production rationnelle.

<details><summary>Voir le corrigé</summary>

1. $PM_L = 12L - L^2$ ; $Pm_L = 24L - 3L^2$.
2. $PM_L$ maximale : $12 - 2L = 0 \Rightarrow L = 6$ ($PM_L = 36$ ; on vérifie $Pm_L(6) = 144 - 108 = 36$). Production maximale : $Pm_L = 0 \Rightarrow 3L(8 - L) = 0 \Rightarrow L = 8$ ($Q = 768 - 512 = 256$).
3. Zone rationnelle : $6 \leq L \leq 8$.

</details>

### Exercice 3 — TMST d'une Cobb-Douglas

Pour $Q = 2K^{0{,}4}L^{0{,}6}$, exprimez le TMST en fonction de $K$ et $L$ et calculez-le pour $K = 30$ et $L = 20$. Quelle est la nature des rendements d'échelle ?

<details><summary>Voir le corrigé</summary>

$Pm_L = 1{,}2K^{0{,}4}L^{-0{,}4}$ ; $Pm_K = 0{,}8K^{-0{,}6}L^{0{,}6}$ ; $TMST = \dfrac{1{,}2}{0{,}8} \times \dfrac{K}{L} = 1{,}5\,\dfrac{K}{L}$.

Pour $K = 30$, $L = 20$ : $TMST = 1{,}5 \times 1{,}5 = \mathbf{2{,}25}$.

$0{,}4 + 0{,}6 = 1$ : rendements d'échelle **constants**.

</details>
`,
    qcm: [
      { q: "À court terme, l'entreprise :", choix: ["Peut faire varier tous ses facteurs", "Dispose d'au moins un facteur fixe", "Ne produit pas", "Choisit sa technologie librement"], bonne: 1, explication: "En général, le capital est fixe à court terme." },
      { q: "La productivité marginale du travail mesure :", choix: ["La production par travailleur", "La production apportée par le dernier travailleur", "Le salaire", "La production totale"], bonne: 1, explication: "C'est ΔQ / ΔL." },
      { q: "Quand la productivité marginale est supérieure à la productivité moyenne, la productivité moyenne :", choix: ["Diminue", "Augmente", "Est maximale", "Est nulle"], bonne: 1, explication: "Le nouveau venu relève la moyenne." },
      { q: "La production totale est maximale quand :", choix: ["PmL = PML", "PmL = 0", "PML = 0", "PmL est maximale"], bonne: 1, explication: "Un travailleur de plus n'ajoute plus rien." },
      { q: "La loi des rendements décroissants concerne :", choix: ["Le long terme, tous facteurs variables", "Le court terme, un facteur variable et les autres fixes", "La demande", "Les prix"], bonne: 1, explication: "Il ne faut pas la confondre avec les rendements d'échelle." },
      { q: "Le TMST est égal à :", choix: ["PmK / PmL", "PmL / PmK", "K × L", "Q / L"], bonne: 1, explication: "Capital économisé par unité de travail supplémentaire." },
      { q: "Pour Q = K^0,5 L^0,5, avec K = 9 et L = 4, le TMST vaut :", choix: ["0,44", "2,25", "1", "6"], bonne: 1, explication: "TMST = K/L = 9/4." },
      { q: "Q = K^0,7 L^0,5 présente des rendements d'échelle :", choix: ["Constants", "Croissants", "Décroissants", "Nuls"], bonne: 1, explication: "0,7 + 0,5 = 1,2 > 1." },
      { q: "Une isoquante représente :", choix: ["Des combinaisons de facteurs donnant la même production", "Des paniers de même utilité", "Des combinaisons de même coût", "Les prix des facteurs"], bonne: 0, explication: "C'est l'équivalent producteur de la courbe d'indifférence." },
      { q: "La zone de production rationnelle commence :", choix: ["À la première unité de travail", "Au maximum de la productivité moyenne", "Quand la production est maximale", "Quand PmL est négative"], bonne: 1, explication: "Elle s'étend jusqu'à PmL = 0." },
    ],
  },

  8: {
    titre: "Les coûts de production",
    description: "ENCG S1 : coûts fixes et variables, coût moyen, variable moyen et marginal, courbes en U, combinaison optimale des facteurs, isocoût et économies d'échelle.",
    resume: md`
## L'essentiel — Les coûts

- Coût économique = coût comptable + coûts d'opportunité ; profit économique nul = profit « normal ».
- $CT = CF + CV$ ; $CM = CT/Q$ ; $CVM = CV/Q$ ; $CFM = CF/Q$ (toujours décroissant).
- $Cm = dCT/dQ = dCV/dQ$ : le coût fixe n'y figure pas.
- Courbes en U, image inversée des productivités.
- Le $Cm$ coupe le $CVM$ et le $CM$ en leurs **minima** ; minimum du $CM$ = **optimum technique**.
- Long terme : isocoût $wL + rK$, pente $-w/r$.
- Moindre coût : $TMST = Pm_L / Pm_K = w / r$, soit $Pm_L / w = Pm_K / r$.
- Hausse du salaire → substitution du capital au travail.
- Rendements croissants → **économies d'échelle** (coût moyen de long terme décroissant) ; décroissants → déséconomies d'échelle.
`,
    exercices: md`
### Exercice 2 — Compléter un tableau de coûts

Une entreprise a un coût fixe de 60. Ses coûts variables sont : $Q = 1$ : 30 ; $Q = 2$ : 50 ; $Q = 3$ : 66 ; $Q = 4$ : 88 ; $Q = 5$ : 120. Calculez $CT$, $CM$, $CVM$ et $Cm$ pour chaque quantité. Où se situe l'optimum technique ?

<details><summary>Voir le corrigé</summary>

| $Q$ | 1 | 2 | 3 | 4 | 5 |
|---|--:|--:|--:|--:|--:|
| $CT$ | 90 | 110 | 126 | 148 | 180 |
| $CM$ | 90 | 55 | 42 | 37 | 36 |
| $CVM$ | 30 | 25 | 22 | 22 | 24 |
| $Cm$ | 30 | 20 | 16 | 22 | 32 |

Le $CM$ baisse encore entre 4 et 5 (de 37 à 36) parce que le $Cm$ de la 5ᵉ unité (32) reste inférieur au $CM$ : l'optimum technique est atteint à $Q = 5$ ou au-delà ; il faudrait connaître le coût de la 6ᵉ unité pour conclure. Le $CVM$ est minimal entre 3 et 4 (22), là où le $Cm$ le croise.

</details>

### Exercice 3 — Moindre coût

Une entreprise produit selon $Q = K^{0{,}5}L^{0{,}5}$. Le salaire vaut 10 et le coût du capital 40. Quelle combinaison permet de produire 100 au moindre coût ? Quel est le coût moyen de long terme ?

<details><summary>Voir le corrigé</summary>

$K / L = 10 / 40 \Rightarrow K = L / 4$. $\sqrt{L^2/4} = L/2 = 100 \Rightarrow L = 200$, $K = 50$.

Coût : $10 \times 200 + 40 \times 50 = 2\,000 + 2\,000 = 4\,000$ ; coût moyen $= 40$, constant puisque les rendements d'échelle sont constants.

</details>
`,
    qcm: [
      { q: "Lequel de ces coûts est fixe à court terme ?", choix: ["Les matières premières", "Le loyer de l'usine", "L'énergie consommée par les machines", "Les emballages"], bonne: 1, explication: "Il ne dépend pas de la quantité produite." },
      { q: "Le coût marginal est égal à :", choix: ["CT / Q", "dCT / dQ", "CF / Q", "CV / Q"], bonne: 1, explication: "C'est le coût de la dernière unité produite." },
      { q: "Pour CT = Q² + 10Q + 100, le coût marginal est :", choix: ["2Q + 10", "Q + 10 + 100/Q", "2Q + 110", "Q² + 10"], bonne: 0, explication: "Le coût fixe disparaît à la dérivation." },
      { q: "La courbe de coût marginal coupe la courbe de coût moyen :", choix: ["En son maximum", "En son minimum", "Jamais", "À l'origine"], bonne: 1, explication: "Tant que Cm < CM, le CM baisse." },
      { q: "L'optimum technique correspond au :", choix: ["Minimum du coût marginal", "Minimum du coût moyen", "Maximum du profit", "Minimum du coût fixe"], bonne: 1, explication: "C'est la quantité qui minimise le coût unitaire." },
      { q: "Le coût fixe moyen :", choix: ["Augmente avec la production", "Diminue toujours avec la production", "Est constant", "Est nul"], bonne: 1, explication: "Le même coût fixe est réparti sur plus d'unités." },
      { q: "À l'équilibre du producteur à long terme :", choix: ["TMST = r/w", "TMST = w/r", "PmL = PmK", "K = L"], bonne: 1, explication: "L'isoquante est tangente à l'isocoût." },
      { q: "Si le salaire augmente relativement au coût du capital, l'entreprise :", choix: ["Utilise plus de travail", "Substitue du capital au travail", "Ne change rien", "Arrête de produire"], bonne: 1, explication: "Le travail est devenu relativement plus cher." },
      { q: "Des économies d'échelle correspondent à :", choix: ["Un coût moyen de long terme décroissant", "Un coût fixe nul", "Un coût marginal constant", "Des rendements décroissants"], bonne: 0, explication: "Elles viennent de rendements d'échelle croissants." },
      { q: "Le profit économique d'une entreprise est nul. Cela signifie que :", choix: ["Elle est en faillite", "Elle rémunère ses facteurs à leur coût d'opportunité", "Elle ne vend rien", "Son profit comptable est négatif"], bonne: 1, explication: "C'est un profit normal." },
    ],
  },

  9: {
    titre: "L'entreprise en concurrence pure et parfaite",
    description: "ENCG S1 : hypothèses de la CPP, entreprise preneuse de prix, profit maximal p = Cm, seuils de rentabilité et de fermeture, courbe d'offre et long terme.",
    resume: md`
## L'essentiel — Concurrence pure et parfaite

- Cinq hypothèses : **atomicité**, **homogénéité**, **libre entrée et sortie** (pure) ; **transparence**, **mobilité des facteurs** (parfaite).
- Entreprise **preneuse de prix** : demande horizontale ; $RM = Rm = p$.
- Profit maximal : $p = Cm$, sur la branche **croissante** du coût marginal.
- Profit : $\pi = pQ - CT = (p - CM)\,Q$.
- **Seuil de rentabilité** : $p = \min CM$ ; **seuil de fermeture** : $p = \min CVM$.
- Entre les deux : on produit à perte, car la perte reste inférieure au coût fixe.
- Offre de l'entreprise : branche croissante du $Cm$ au-dessus du $\min CVM$ ; offre du marché = somme horizontale.
- Long terme : entrées et sorties jusqu'à $p = \min CM$ et profit économique nul.
- Nombre d'entreprises à long terme = quantité demandée au prix $\min CM$ / production de chaque entreprise.
`,
    exercices: md`
### Exercice 2 — Décision de court terme

Une entreprise en concurrence pure et parfaite a pour coûts : $CF = 100$ ; $CVM$ minimal = 15 ; $CM$ minimal = 22. Que fait-elle, et quel est le signe de son profit, si le prix est : a) 30 ; b) 22 ; c) 18 ; d) 12 ?

<details><summary>Voir le corrigé</summary>

a) 30 > 22 : elle produit là où $p = Cm$, **profit positif**.
b) 22 : elle produit à l'optimum technique, **profit nul**.
c) 15 < 18 < 22 : elle produit, **perte** inférieure à 100.
d) 12 < 15 : elle **ferme** ; perte égale au coût fixe, 100.

</details>

### Exercice 3 — Équilibre de long terme

Sur un marché concurrentiel, chaque entreprise a un coût moyen de long terme minimal de 50, atteint pour $Q = 20$. La demande du marché est $Q_d = 9\,000 - 60p$. Calculez le prix, la quantité échangée et le nombre d'entreprises à long terme. Que se passe-t-il si la demande augmente durablement ?

<details><summary>Voir le corrigé</summary>

$p = 50$ ; $Q_d = 9\,000 - 3\,000 = 6\,000$ ; nombre d'entreprises $= 6\,000 / 20 = \mathbf{300}$.

Si la demande augmente, le prix monte à court terme et les entreprises font des profits ; de nouvelles entreprises entrent jusqu'à ce que le prix revienne à 50 (si les coûts ne changent pas). Le nombre d'entreprises augmente, pas le prix de long terme.

</details>
`,
    qcm: [
      { q: "En concurrence pure et parfaite, la recette marginale de l'entreprise est égale :", choix: ["Au coût marginal toujours", "Au prix du marché", "À zéro", "Au coût moyen"], bonne: 1, explication: "Chaque unité supplémentaire se vend au prix du marché." },
      { q: "L'hypothèse d'homogénéité signifie que :", choix: ["Les entreprises ont la même taille", "Les produits des vendeurs sont identiques", "Les prix sont fixés par l'État", "Les acheteurs ont le même revenu"], bonne: 1, explication: "Rien ne distingue un vendeur d'un autre." },
      { q: "La condition de profit maximal en CPP est :", choix: ["p = CM", "p = Cm sur la branche croissante", "p = CVM", "Cm = 0"], bonne: 1, explication: "Recette marginale = coût marginal." },
      { q: "Le seuil de fermeture correspond au :", choix: ["Minimum du coût moyen", "Minimum du coût variable moyen", "Maximum du profit", "Minimum du coût marginal"], bonne: 1, explication: "En dessous, la recette ne couvre plus les coûts variables." },
      { q: "Un prix compris entre le minimum du CVM et le minimum du CM conduit l'entreprise à :", choix: ["Fermer immédiatement", "Produire à perte à court terme", "Faire un profit", "Doubler sa production"], bonne: 1, explication: "Sa perte est inférieure au coût fixe." },
      { q: "p = 50, Q = 10, CM = 40. Le profit vaut :", choix: ["500", "100", "400", "−100"], bonne: 1, explication: "(50 − 40) × 10." },
      { q: "À long terme en CPP, le profit économique est :", choix: ["Toujours positif", "Nul", "Toujours négatif", "Égal au coût fixe"], bonne: 1, explication: "La libre entrée fait disparaître les profits." },
      { q: "À l'équilibre de long terme, le prix est égal :", choix: ["Au minimum du coût moyen", "Au maximum du coût marginal", "Au coût fixe", "Au minimum du CVM"], bonne: 0, explication: "Chaque entreprise produit à son optimum technique." },
      { q: "La courbe d'offre de court terme de l'entreprise est :", choix: ["Toute la courbe de coût moyen", "La partie croissante du Cm au-dessus du minimum du CVM", "La courbe de demande", "Une droite horizontale"], bonne: 1, explication: "Elle indique la quantité produite à chaque prix." },
      { q: "Si les entreprises d'un marché concurrentiel font des profits, à long terme :", choix: ["Des entreprises sortent", "De nouvelles entreprises entrent et le prix baisse", "Le prix monte", "Rien ne change"], bonne: 1, explication: "L'offre augmente jusqu'à annuler les profits." },
    ],
  },
};

export default chapitres;
