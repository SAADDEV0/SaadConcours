// Microéconomie (S1) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Introduction : objet, agents et marché",
    description: "Introduction à la microéconomie : rareté, coût d'opportunité, frontière des possibilités de production, agents, demande et offre, avec exercices corrigés.",
    resume: md`
## L'essentiel — Introduction à la microéconomie

- Microéconomie : choix des agents individuels et fonctionnement des marchés ; ressources rares, besoins illimités.
- **Coût d'opportunité** : valeur de la meilleure option sacrifiée.
- Méthode : modèles, ceteris paribus, raisonnement **à la marge**, analyse positive / normative.
- **FPP** : points efficaces sur la frontière ; intérieurs = gaspillage ; extérieurs = inaccessibles ; coût d'opportunité croissant (frontière concave).
- Demande décroissante, offre croissante ; demande de marché = somme **horizontale** des demandes individuelles.
- Prix du bien : mouvement le long de la courbe ; autres déterminants : déplacement de la courbe.
`,
    exercices: md`
### Exercice 2 — Offre de marché

Trois producteurs identiques ont chacun l'offre $q = 2P - 8$ pour $P \ge 4$ (0 sinon). Donnez l'offre de marché et la quantité offerte à $P = 10$.

<details><summary>Voir le corrigé</summary>

Pour $P \ge 4$ : $Q_o = 3(2P - 8) = 6P - 24$ ; pour $P < 4$ : $Q_o = 0$. À $P = 10$ : $Q_o = 60 - 24 = \mathbf{36}$.

</details>

### Exercice 3 — Coût d'opportunité

Une étudiante peut travailler 20 heures par semaine dans un café payé 25 DH de l'heure, ou suivre des cours de soutien gratuits pendant ces 20 heures. Quel est le coût d'opportunité des cours ? Et si le café payait 30 DH de l'heure ?

<details><summary>Voir le corrigé</summary>

Le coût d'opportunité est le salaire sacrifié : $20 \times 25 = \mathbf{500}$ DH par semaine, même si les cours sont gratuits. À 30 DH de l'heure : $\mathbf{600}$ DH. Le coût d'opportunité augmente avec la valeur de l'option abandonnée.

</details>
`,
    qcm: [
      { q: "Le coût d'opportunité d'un choix est :", choix: ["Son prix comptable", "La valeur de la meilleure option sacrifiée", "La somme de toutes les options", "Le coût marginal"], bonne: 1, explication: "Notion centrale liée à la rareté." },
      { q: "Un point situé à l'intérieur de la FPP est :", choix: ["Efficace", "Inaccessible", "Inefficace", "Optimal"], bonne: 2, explication: "Des ressources sont inemployées." },
      { q: "La demande de marché s'obtient en additionnant :", choix: ["Les prix des demandes individuelles", "Les quantités demandées à chaque prix", "Les revenus", "Les élasticités"], bonne: 1, explication: "Somme horizontale." },
      { q: "Une hausse du prix du bien entraîne :", choix: ["Un déplacement de la courbe de demande", "Un mouvement le long de la courbe de demande", "Aucun effet", "Un déplacement de l'offre"], bonne: 1, explication: "Le prix est sur l'axe." },
      { q: "Une hausse des revenus déplace la demande d'un bien normal :", choix: ["Vers la gauche", "Vers la droite", "Pas du tout", "Vers le bas uniquement"], bonne: 1, explication: "Plus de quantités demandées à chaque prix." },
      { q: "Avec Qd = 100 − 2P, la demande s'annule à :", choix: ["P = 100", "P = 50", "P = 20", "P = 2"], bonne: 1, explication: "100 − 2P = 0." },
      { q: "Une sécheresse déplace l'offre de blé :", choix: ["Vers la droite", "Vers la gauche", "Le long de la courbe", "Elle n'a pas d'effet"], bonne: 1, explication: "Moins de quantités offertes à chaque prix." },
      { q: "Raisonner à la marge, c'est comparer :", choix: ["Les totaux", "Le gain et le coût d'une unité supplémentaire", "Les moyennes", "Les prix de deux marchés"], bonne: 1, explication: "Base de la microéconomie." },
      { q: "La concavité de la FPP traduit :", choix: ["Un coût d'opportunité constant", "Un coût d'opportunité croissant", "L'absence de rareté", "Le progrès technique"], bonne: 1, explication: "Ressources non homogènes." },
      { q: "L'expression ceteris paribus signifie :", choix: ["Toutes choses égales par ailleurs", "À court terme", "À prix constant uniquement", "En concurrence parfaite"], bonne: 0, explication: "Une seule variable change." },
    ],
  },

  2: {
    titre: "L'équilibre du marché, les élasticités et l'intervention de l'État",
    description: "Équilibre du marché, surplus, élasticités prix, revenu et croisée, prix plafond et plancher, taxe unitaire, incidence et perte sèche, exercices corrigés.",
    resume: md`
## L'essentiel — Équilibre, élasticités, intervention

- Équilibre : $Q_d(P^*) = Q_o(P^*)$ ; excédent au-dessus, pénurie en dessous.
- Surplus du consommateur (sous la demande, au-dessus du prix) et du producteur (au-dessus de l'offre, sous le prix) ; l'équilibre concurrentiel maximise le surplus total.
- $e_P = \frac{dQ}{dP} \times \frac{P}{Q}$ ; $|e| > 1$ élastique (hausse de prix → recette baisse) ; $|e| < 1$ inélastique.
- Élasticité-revenu : < 0 bien inférieur, 0 à 1 nécessité, > 1 luxe ; croisée : > 0 substituts, < 0 compléments.
- Prix plafond sous l'équilibre → pénurie ; prix plancher au-dessus → excédent.
- Taxe $t$ sur les vendeurs : $Q_o(P - t)$ ; le côté le moins élastique supporte la plus grande part ; perte sèche = $t \times \Delta Q / 2$.
`,
    exercices: md`
### Exercice 2 — Élasticité de l'arc

Quand le prix d'un ticket de cinéma passe de 40 à 50 DH, les entrées passent de 1 000 à 800 par semaine. Calculez l'élasticité avec la formule des points milieux et l'effet sur la recette.

<details><summary>Voir le corrigé</summary>

$\Delta Q / \bar Q = -200 / 900 \approx -0{,}222$ ; $\Delta P / \bar P = 10 / 45 \approx 0{,}222$ ; $e \approx \mathbf{-1}$ : élasticité unitaire. Recette : $40 \times 1\,000 = 40\,000$ puis $50 \times 800 = 40\,000$ : **inchangée**, conformément à l'élasticité unitaire.

</details>

### Exercice 3 — Élasticités revenu et croisée

Quand le revenu augmente de 10 %, la consommation de pain baisse de 2 % et celle de voyages augmente de 25 %. Quand le prix du café augmente de 20 %, la demande de thé augmente de 6 %. Classez ces biens.

<details><summary>Voir le corrigé</summary>

Pain : $e_R = -0{,}2$ : bien **inférieur** (pour ce groupe de consommateurs). Voyages : $e_R = 2{,}5$ : bien **de luxe**. Thé et café : $e_{croisée} = 6 / 20 = 0{,}3 > 0$ : **substituts**.

</details>
`,
    qcm: [
      { q: "Qd = 100 − 2P et Qo = −20 + 4P. Le prix d'équilibre est :", choix: ["10", "20", "30", "60"], bonne: 1, explication: "6P = 120." },
      { q: "Un prix plafond fixé sous l'équilibre crée :", choix: ["Un excédent", "Une pénurie", "Aucun effet", "Une hausse de l'offre"], bonne: 1, explication: "Qd > Qo." },
      { q: "Si |e| < 1, une hausse du prix :", choix: ["Diminue la recette", "Augmente la recette", "Ne change pas la recette", "Annule la demande"], bonne: 1, explication: "Demande inélastique." },
      { q: "Une élasticité-revenu négative caractérise un bien :", choix: ["De luxe", "Normal", "Inférieur", "Complémentaire"], bonne: 2, explication: "Sa consommation baisse quand le revenu augmente." },
      { q: "Une élasticité croisée positive indique des biens :", choix: ["Compléments", "Substituts", "Indépendants", "Inférieurs"], bonne: 1, explication: "Thé et café." },
      { q: "Une taxe unitaire payée par les vendeurs déplace l'offre :", choix: ["Vers le bas de t", "Vers le haut de t", "Pas du tout", "Vers la droite de t"], bonne: 1, explication: "Le vendeur ne reçoit que P − t." },
      { q: "La perte sèche d'une taxe t qui réduit la quantité de ΔQ vaut :", choix: ["t × ΔQ", "t × ΔQ / 2", "t × Q", "ΔQ / t"], bonne: 1, explication: "Aire d'un triangle." },
      { q: "La charge d'une taxe pèse davantage sur :", choix: ["Le côté le plus élastique", "Le côté le moins élastique", "Toujours le vendeur", "Toujours l'acheteur"], bonne: 1, explication: "Il peut moins se dérober." },
      { q: "Le salaire minimum est un exemple de :", choix: ["Prix plafond", "Prix plancher", "Taxe", "Subvention"], bonne: 1, explication: "Prix minimal sur le marché du travail." },
      { q: "Le surplus du consommateur correspond à l'aire :", choix: ["Sous l'offre et au-dessus du prix", "Sous la demande et au-dessus du prix", "Sous le prix et au-dessus de l'offre", "Totale sous la demande"], bonne: 1, explication: "Consentement à payer moins prix payé." },
    ],
  },

  3: {
    titre: "La théorie du consommateur : utilité et préférences",
    description: "Théorie du consommateur : utilité cardinale et ordinale, utilité marginale décroissante, axiomes, courbes d'indifférence et TMS, avec exercices corrigés.",
    resume: md`
## L'essentiel — Utilité et préférences

- Utilité cardinale (mesurable) / ordinale (classement ; approche moderne).
- $Um = \partial U / \partial q$ ; loi de l'utilité marginale **décroissante** ; UT maximale quand Um = 0.
- Axiomes : complétude, transitivité, non-saturation, convexité.
- Courbes d'indifférence : décroissantes, convexes, ne se coupent pas, plus éloignées = préférées.
- $TMS_{X/Y} = -dy/dx = Um_X / Um_Y$, décroissant.
- Cobb-Douglas $U = x^a y^b$ : $TMS = a y / (b x)$ ; substituts parfaits : TMS constant ; compléments parfaits : courbes en L.
`,
    exercices: md`
### Exercice 2 — Utilité marginale

L'utilité totale d'Ahmed pour des parts de pizza est : 1 part : 12 ; 2 : 22 ; 3 : 29 ; 4 : 33 ; 5 : 33 ; 6 : 30. Calculez les utilités marginales et le point de saturation.

<details><summary>Voir le corrigé</summary>

Um : 12 ; 10 ; 7 ; 4 ; 0 ; −3. Décroissantes. Saturation à **5 parts** (Um = 0, UT maximale de 33) ; la 6e part diminue la satisfaction.

</details>

### Exercice 3 — Substituts parfaits

Karim considère que deux bouteilles d'eau de marque A (X) valent exactement une bouteille de marque B (Y) : $U = x + 2y$. Calculez son TMS. Tracez mentalement la courbe $U = 20$ : quels paniers la composent si l'on n'achète qu'une marque ?

<details><summary>Voir le corrigé</summary>

$Um_X = 1$, $Um_Y = 2$ : $TMS = 1/2$ **constant**. Courbe $U = 20$ : droite $y = 10 - x/2$ ; paniers extrêmes : (20 ; 0) ou (0 ; 10). Le TMS constant signifie qu'il échange toujours une demi-bouteille B contre une bouteille A.

</details>
`,
    qcm: [
      { q: "L'utilité marginale est :", choix: ["L'utilité totale divisée par la quantité", "L'utilité supplémentaire de la dernière unité", "Toujours négative", "Constante"], bonne: 1, explication: "Dérivée de l'utilité totale." },
      { q: "L'utilité totale est maximale lorsque :", choix: ["Um est maximale", "Um = 0", "Um est négative", "Um = UT"], bonne: 1, explication: "Point de saturation." },
      { q: "L'approche ordinale de l'utilité suppose :", choix: ["Que l'utilité est mesurable", "Que le consommateur peut classer les paniers", "Que l'utilité est constante", "L'absence de préférences"], bonne: 1, explication: "Pareto, Hicks." },
      { q: "Des courbes d'indifférence qui se coupent violeraient l'axiome de :", choix: ["Complétude", "Transitivité", "Convexité", "Divisibilité"], bonne: 1, explication: "Incohérence des préférences." },
      { q: "Le TMS de X à Y est égal à :", choix: ["Um_Y / Um_X", "Um_X / Um_Y", "Px / Py toujours", "x / y"], bonne: 1, explication: "Pente de la courbe d'indifférence en valeur absolue." },
      { q: "Pour U = xy, le TMS au panier (2 ; 8) vaut :", choix: ["4", "0,25", "16", "2"], bonne: 0, explication: "y / x = 8 / 2." },
      { q: "Pour des compléments parfaits, les courbes d'indifférence sont :", choix: ["Des droites", "En forme de L", "Concaves", "Verticales"], bonne: 1, explication: "U = min(x, y)." },
      { q: "Pour des substituts parfaits, le TMS est :", choix: ["Décroissant", "Constant", "Infini", "Nul"], bonne: 1, explication: "Courbes d'indifférence linéaires." },
      { q: "La convexité des courbes d'indifférence traduit :", choix: ["Une préférence pour la diversité", "Des biens inférieurs", "La saturation", "Un revenu nul"], bonne: 0, explication: "TMS décroissant." },
      { q: "Pour U = x²y, le TMS est :", choix: ["x / 2y", "2y / x", "2xy", "y / x"], bonne: 1, explication: "2xy / x²." },
    ],
  },

  4: {
    titre: "La contrainte budgétaire et l'équilibre du consommateur",
    description: "Équilibre du consommateur : droite de budget, TMS = Px/Py, lagrangien, demandes Cobb-Douglas, courbe d'Engel, effets de substitution et de revenu (Slutsky).",
    resume: md`
## L'essentiel — Budget et équilibre du consommateur

- Contrainte : $P_X x + P_Y y = R$ ; pente $-P_X / P_Y$ ; revenu → déplacement parallèle ; prix → rotation.
- Optimum : tangence ; $TMS = Um_X / Um_Y = P_X / P_Y$ ⇔ $Um_X / P_X = Um_Y / P_Y$ ; lagrangien ($\lambda$ = utilité marginale du revenu).
- Cobb-Douglas $U = x^a y^b$ : $x^* = \frac{a}{a+b}\frac{R}{P_X}$, $y^* = \frac{b}{a+b}\frac{R}{P_Y}$.
- Courbe de demande (x selon P_X), courbe d'Engel (x selon R) ; bien normal / inférieur.
- Slutsky : revenu compensé = ancien panier aux nouveaux prix ; effet de substitution (toujours opposé au prix) + effet de revenu ; bien de Giffen.
`,
    exercices: md`
### Exercice 2 — Optimum avec U = xy

$R = 200$, $P_X = 5$, $P_Y = 10$. Trouvez l'optimum. Puis $P_Y$ baisse à 5 : nouvel optimum ?

<details><summary>Voir le corrigé</summary>

$x^* = 200 / (2 \times 5) = \mathbf{20}$ ; $y^* = 200 / (2 \times 10) = \mathbf{10}$ ; $U = 200$. Avec $P_Y = 5$ : $x^* = 20$ (inchangé), $y^* = 200 / 10 = \mathbf{20}$ ; $U = 400$.

</details>

### Exercice 3 — Égalisation des utilités marginales pondérées

Au panier choisi, $Um_X = 12$, $Um_Y = 20$, $P_X = 3$, $P_Y = 4$. Le consommateur est-il à l'optimum ? Que doit-il faire ?

<details><summary>Voir le corrigé</summary>

$Um_X / P_X = 4$ et $Um_Y / P_Y = 5$ : le dernier dirham dépensé en Y rapporte plus. Il n'est **pas** à l'optimum : il doit acheter **plus de Y** et **moins de X** jusqu'à égalisation (l'Um de Y diminue, celle de X augmente).

</details>
`,
    qcm: [
      { q: "La pente de la droite de budget (X en abscisse) est :", choix: ["−Py / Px", "−Px / Py", "R / Px", "−R"], bonne: 1, explication: "Prix relatif de X." },
      { q: "Une hausse du revenu, les prix étant constants, provoque :", choix: ["Une rotation", "Un déplacement parallèle", "Aucun effet", "Une inversion de pente"], bonne: 1, explication: "Les intercepts augmentent proportionnellement." },
      { q: "À l'optimum du consommateur :", choix: ["TMS = Px / Py", "TMS = 0", "Um_X = Um_Y", "x = y"], bonne: 0, explication: "Tangence entre courbe d'indifférence et droite de budget." },
      { q: "Pour U = xy, R = 100, Px = 5 : la demande de X est :", choix: ["10", "20", "5", "50"], bonne: 0, explication: "R / (2Px)." },
      { q: "L'effet de substitution d'une hausse de prix est :", choix: ["Toujours positif", "Toujours de sens opposé à la variation de prix", "Nul", "Indéterminé"], bonne: 1, explication: "À pouvoir d'achat constant." },
      { q: "Selon Slutsky, le revenu compensé permet d'acheter :", choix: ["Le nouveau panier", "L'ancien panier aux nouveaux prix", "Tout le bien X", "Le panier de luxe"], bonne: 1, explication: "Pouvoir d'achat maintenu." },
      { q: "La courbe d'Engel relie :", choix: ["Quantité et prix", "Quantité et revenu", "Prix et revenu", "Utilité et prix"], bonne: 1, explication: "Croissante pour un bien normal." },
      { q: "Un bien de Giffen est un bien :", choix: ["De luxe", "Inférieur dont l'effet revenu l'emporte", "Normal ordinaire", "Complémentaire"], bonne: 1, explication: "Sa demande augmente avec son prix." },
      { q: "Pour U = x²y, la part du revenu dépensée en X est :", choix: ["1/3", "2/3", "1/2", "1"], bonne: 1, explication: "a / (a + b) = 2/3." },
      { q: "Le multiplicateur de Lagrange λ s'interprète comme :", choix: ["Le prix de X", "L'utilité marginale du revenu", "Le TMS", "L'élasticité-prix"], bonne: 1, explication: "Gain d'utilité d'un dirham supplémentaire." },
    ],
  },

  5: {
    titre: "La théorie du producteur : production et productivités",
    description: "Théorie du producteur : fonction de production, productivités moyenne et marginale, rendements décroissants, stades, isoquantes, TMST, combinaison optimale.",
    resume: md`
## L'essentiel — La production

- $Q = f(K, L)$ ; court terme : un facteur fixe ; long terme : tous variables.
- $PM = Q / L$ ; $Pm = dQ / dL$ ; Pm coupe PM à son maximum ; PT maximale quand Pm = 0.
- Loi des rendements factoriels décroissants.
- Stades : I (PM croissante), **II** (zone économique : PM décroissante, Pm ≥ 0), III (Pm < 0).
- Isoquantes ; $TMST = Pm_L / Pm_K$.
- Rendements d'échelle : Cobb-Douglas $\alpha + \beta$ > 1, = 1, < 1.
- Optimum : $TMST = w / r$ ⇔ $Pm_L / w = Pm_K / r$ ; sentier d'expansion.
`,
    exercices: md`
### Exercice 2 — Tableau de production

Avec un capital fixe, la production selon le nombre de travailleurs est : 1 : 10 ; 2 : 24 ; 3 : 36 ; 4 : 44 ; 5 : 50 ; 6 : 50 ; 7 : 47. Calculez PM et Pm et repérez le début des rendements décroissants.

<details><summary>Voir le corrigé</summary>

Pm : 10 ; 14 ; 12 ; 8 ; 6 ; 0 ; −3. PM : 10 ; 12 ; 12 ; 11 ; 10 ; 8,33 ; 6,71. Les rendements marginaux décroissent à partir du **3e travailleur** ; la PT est maximale avec 5 ou 6 travailleurs ; le 7e fait baisser la production (stade III).

</details>

### Exercice 3 — Rendements d'échelle

Qualifiez les rendements d'échelle : a) $Q = 2K^{0{,}3}L^{0{,}5}$ ; b) $Q = K^{0{,}6}L^{0{,}6}$ ; c) $Q = 5K^{0{,}4}L^{0{,}6}$. Que se passe-t-il si l'on double tous les facteurs dans le cas b ?

<details><summary>Voir le corrigé</summary>

a) $0{,}8 < 1$ : décroissants. b) $1{,}2 > 1$ : croissants. c) $1$ : constants. Cas b : la production est multipliée par $2^{1{,}2} \approx 2{,}30$, soit plus que doublée.

</details>
`,
    qcm: [
      { q: "À court terme :", choix: ["Tous les facteurs sont variables", "Au moins un facteur est fixe", "La production est constante", "Il n'y a pas de coûts"], bonne: 1, explication: "En général le capital." },
      { q: "La productivité marginale du travail est :", choix: ["Q / L", "dQ / dL", "L / Q", "Q × L"], bonne: 1, explication: "Production du dernier travailleur." },
      { q: "La Pm coupe la PM :", choix: ["À son minimum", "À son maximum", "Quand PT = 0", "Jamais"], bonne: 1, explication: "Propriété des grandeurs moyennes et marginales." },
      { q: "La production totale est maximale quand :", choix: ["PM est maximale", "Pm = 0", "Pm est maximale", "PM = 0"], bonne: 1, explication: "Au-delà, la Pm est négative." },
      { q: "Le producteur rationnel se situe :", choix: ["Au stade I", "Au stade II", "Au stade III", "Au point PT = 0"], bonne: 1, explication: "Zone économique." },
      { q: "Q = K^0,5 L^0,5 présente des rendements d'échelle :", choix: ["Croissants", "Constants", "Décroissants", "Nuls"], bonne: 1, explication: "0,5 + 0,5 = 1." },
      { q: "Le TMST est égal à :", choix: ["Pm_L / Pm_K", "w × r", "Q / L", "PM_L / PM_K"], bonne: 0, explication: "Pente de l'isoquante en valeur absolue." },
      { q: "À la combinaison optimale des facteurs :", choix: ["TMST = w / r", "TMST = r / w", "K = L", "Pm_L = 0"], bonne: 0, explication: "Tangence isoquante-isocoût." },
      { q: "La loi des rendements décroissants concerne :", choix: ["Tous les facteurs simultanément", "Un facteur variable ajouté à un facteur fixe", "Les prix", "La demande"], bonne: 1, explication: "Rendements factoriels." },
      { q: "Avec Q = 6L² − 0,2L³, la PM est maximale pour L égal à :", choix: ["10", "15", "20", "30"], bonne: 1, explication: "6 − 0,4L = 0." },
    ],
  },

  6: {
    titre: "Les coûts de production",
    description: "Coûts de production : coûts fixes et variables, coût moyen, coût marginal, seuils de fermeture et de rentabilité, coûts de long terme et économies d'échelle.",
    resume: md`
## L'essentiel — Les coûts

- Coût économique = coût comptable + coûts d'opportunité ; profit économique nul = rémunération normale.
- $CT = CF + CV$ ; $CM = CT / Q$ ; $CVM = CV / Q$ ; $CFM = CF / Q$ (décroissant) ; $Cm = dCT / dQ$ (sans CF).
- Le Cm coupe CVM et CM en leur **minimum** ; courbes en U.
- **Seuil de fermeture** = min CVM ; **seuil de rentabilité** = min CM ; entre les deux : produire à perte à court terme.
- Long terme : CMLT enveloppe ; économies puis déséconomies d'échelle ; taille minimale optimale ; monopole naturel.
`,
    exercices: md`
### Exercice 2 — Tableau de coûts

CF = 100. CV selon Q : 1 : 40 ; 2 : 70 ; 3 : 96 ; 4 : 132 ; 5 : 180. Calculez CT, CM, CVM et Cm.

<details><summary>Voir le corrigé</summary>

CT : 140 ; 170 ; 196 ; 232 ; 280. CM : 140 ; 85 ; 65,3 ; 58 ; 56. CVM : 40 ; 35 ; 32 ; 33 ; 36. Cm : 40 ; 30 ; 26 ; 36 ; 48. Le CVM est minimal à Q = 3 (32) ; le CM baisse encore jusqu'à Q = 5 car le CFM continue de diminuer.

</details>

### Exercice 3 — Produire ou fermer ?

Une entreprise a un CF de 500 ; à la quantité optimale, CV = 1 200 et la recette est de 1 400. Doit-elle produire à court terme ? Et si la recette tombait à 1 000 ?

<details><summary>Voir le corrigé</summary>

Recette 1 400 : profit $= 1\,400 - 1\,700 = -300$ ; fermer coûterait $-500$ : elle **produit** (perte réduite). Recette 1 000 : profit $= 1\,000 - 1\,700 = -700$, pire que $-500$ : elle doit **fermer** (la recette ne couvre pas le CV).

</details>
`,
    qcm: [
      { q: "Un loyer mensuel fixe est un coût :", choix: ["Variable", "Fixe", "Marginal", "D'opportunité seulement"], bonne: 1, explication: "Indépendant de la production." },
      { q: "Le coût marginal est :", choix: ["CT / Q", "dCT / dQ", "CF / Q", "CV / Q"], bonne: 1, explication: "Coût de la dernière unité." },
      { q: "La courbe de Cm coupe celle du CM :", choix: ["À son maximum", "À son minimum", "À l'origine", "Jamais"], bonne: 1, explication: "Relation moyen-marginal." },
      { q: "Le seuil de fermeture correspond :", choix: ["Au minimum du CM", "Au minimum du CVM", "Au maximum du Cm", "Au CF"], bonne: 1, explication: "En dessous, le CV n'est pas couvert." },
      { q: "Le seuil de rentabilité correspond :", choix: ["Au minimum du CM", "Au minimum du CVM", "Au minimum du CFM", "À CF = 0"], bonne: 0, explication: "Profit nul." },
      { q: "Le CFM :", choix: ["Augmente avec Q", "Diminue toujours avec Q", "Est constant", "Est égal au Cm"], bonne: 1, explication: "Le CF est réparti sur plus d'unités." },
      { q: "Pour CT = Q³ − 6Q² + 15Q + 32, le coût fixe est :", choix: ["15", "32", "6", "0"], bonne: 1, explication: "Terme constant." },
      { q: "Entre le seuil de fermeture et le seuil de rentabilité, l'entreprise :", choix: ["Ferme", "Produit à perte à court terme", "Fait un profit", "Double sa production"], bonne: 1, explication: "Elle couvre le CV et une partie du CF." },
      { q: "Des économies d'échelle se traduisent par :", choix: ["Un CMLT croissant", "Un CMLT décroissant", "Un CF nul", "Un Cm négatif"], bonne: 1, explication: "La taille réduit le coût unitaire." },
      { q: "Le coût économique ajoute au coût comptable :", choix: ["Les impôts", "Les coûts d'opportunité", "Les ventes", "La TVA"], bonne: 1, explication: "Ressources propres de l'entrepreneur." },
    ],
  },

  7: {
    titre: "L'équilibre de l'entreprise en concurrence pure et parfaite",
    description: "Concurrence pure et parfaite : hypothèses, preneur de prix, P = Cm, profit, courbe d'offre, équilibre de long terme et nombre d'entreprises, exercices.",
    resume: md`
## L'essentiel — Concurrence pure et parfaite

- Hypothèses : atomicité, homogénéité, libre entrée et sortie, transparence, mobilité des facteurs.
- Entreprise preneuse de prix : demande horizontale ; $RM = Rm = P$.
- Maximisation du profit : $P = Cm$ sur la branche croissante ; $\pi = (P - CM) \times Q$.
- Offre de la firme : partie croissante du Cm au-dessus du min CVM ; offre du marché : somme horizontale.
- Long terme : entrées et sorties jusqu'à $P = Cm = CM_{min}$, profit économique nul ; $n = Q_d / q$.
- Efficacité allocative (P = Cm, surplus maximal) et productive (CM minimal).
`,
    exercices: md`
### Exercice 2 — Coût marginal linéaire

Une entreprise a $CT = Q^2 + 4Q + 36$. Le prix est de 24. Quantité, profit ? Quel est le seuil de rentabilité ?

<details><summary>Voir le corrigé</summary>

$Cm = 2Q + 4 = 24 \Rightarrow Q = \mathbf{10}$ ; $RT = 240$ ; $CT = 100 + 40 + 36 = 176$ ; profit $= \mathbf{64}$. $CM = Q + 4 + 36/Q$ minimal quand $1 - 36/Q^2 = 0 \Rightarrow Q = 6$ ; $CM_{min} = 6 + 4 + 6 = \mathbf{16}$ : seuil de rentabilité $P = 16$.

</details>

### Exercice 3 — Offre du marché

Le marché compte 50 entreprises identiques dont l'offre est $q = (P - 4)/2$ pour $P \ge 8$. La demande est $Q_d = 400 - 10P$. Trouvez l'équilibre.

<details><summary>Voir le corrigé</summary>

$Q_o = 50 \times (P - 4)/2 = 25P - 100$. $400 - 10P = 25P - 100 \Rightarrow P = \mathbf{14{,}29}$ environ ; $Q \approx 257$ ; chaque entreprise produit environ 5,14. Le prix est supérieur à 8 : les entreprises produisent bien.

</details>
`,
    qcm: [
      { q: "En CPP, la recette marginale est égale :", choix: ["Au coût moyen", "Au prix", "À zéro", "À la recette totale"], bonne: 1, explication: "L'entreprise est preneuse de prix." },
      { q: "La condition de maximisation du profit en CPP est :", choix: ["P = CM", "P = Cm (Cm croissant)", "P = CVM", "RT = CT"], bonne: 1, explication: "Rm = Cm." },
      { q: "La courbe d'offre de court terme de l'entreprise est :", choix: ["Toute la courbe de Cm", "La partie croissante du Cm au-dessus du min CVM", "La courbe de CM", "Horizontale"], bonne: 1, explication: "En dessous, elle ferme." },
      { q: "À l'équilibre de long terme en CPP, le profit économique est :", choix: ["Maximal", "Nul", "Négatif", "Égal au CF"], bonne: 1, explication: "Libre entrée et sortie." },
      { q: "L'hypothèse d'homogénéité signifie que :", choix: ["Les entreprises sont de même taille", "Les produits sont identiques", "Les prix sont fixés par l'État", "Les coûts sont nuls"], bonne: 1, explication: "Seul le prix compte." },
      { q: "Si le prix est inférieur au minimum du CVM, l'entreprise :", choix: ["Produit plus", "Cesse de produire", "Augmente son prix", "Fait un profit"], bonne: 1, explication: "Seuil de fermeture." },
      { q: "Si P = 30, CM = 22 et Q = 10, le profit est :", choix: ["80", "300", "220", "8"], bonne: 0, explication: "(30 − 22) × 10." },
      { q: "À long terme, P = 15, chaque entreprise produit 4 et la demande est 700 : il y a :", choix: ["175 entreprises", "4 entreprises", "700 entreprises", "60 entreprises"], bonne: 0, explication: "700 / 4." },
      { q: "La demande adressée à une entreprise en CPP est :", choix: ["Décroissante", "Horizontale", "Verticale", "Croissante"], bonne: 1, explication: "Parfaitement élastique." },
      { q: "L'équilibre concurrentiel est efficace car :", choix: ["Le prix est maximal", "Le prix égale le coût marginal", "Le profit est maximal", "Il n'y a qu'un vendeur"], bonne: 1, explication: "Surplus total maximal." },
    ],
  },

  8: {
    titre: "Le monopole et les structures de marché",
    description: "Monopole et structures de marché : barrières, Rm = Cm, indice de Lerner, perte sèche, discrimination par les prix, oligopole de Cournot et loi 104-12.",
    resume: md`
## L'essentiel — Monopole et structures de marché

- Monopole : un vendeur, pas de substitut proche ; barrières légales, techniques (monopole naturel), ressources, stratégiques.
- Demande $P = a - bQ$ : $Rm = a - 2bQ$ < P.
- Optimum : $Rm = Cm$, prix lu sur la demande ; zone élastique ; pas de courbe d'offre.
- Lerner $L = (P - Cm)/P = 1/|e|$ ; monopole : moins de quantité, prix plus élevé, perte sèche.
- Discrimination : 1er, 2e, 3e degré ; $Rm_1 = Rm_2 = Cm$ ; prix plus élevé sur le marché le moins élastique.
- Concurrence monopolistique, oligopole, duopole de Cournot (résultat intermédiaire), cartel, monopsone.
- Maroc : loi 104-12, Conseil de la concurrence (ententes, abus de position dominante, concentrations).
`,
    exercices: md`
### Exercice 2 — Monopole à coût marginal constant

Demande $P = 200 - 4Q$ ; $Cm = CM = 40$. Trouvez l'optimum du monopole, son profit et l'équilibre concurrentiel.

<details><summary>Voir le corrigé</summary>

$Rm = 200 - 8Q = 40 \Rightarrow Q_m = \mathbf{20}$ ; $P_m = 200 - 80 = \mathbf{120}$ ; profit $= (120 - 40) \times 20 = \mathbf{1\,600}$. Concurrence : $200 - 4Q = 40 \Rightarrow Q = 40$, $P = 40$. Perte sèche $= 80 \times 20 / 2 = 800$.

</details>

### Exercice 3 — Cournot

Deux entreprises, demande $P = 130 - Q$, $Cm = 10$ chacune. Dans le duopole de Cournot, chacune produit $(a - c)/3$. Calculez quantités, prix et profit de chacune, puis comparez avec un cartel.

<details><summary>Voir le corrigé</summary>

$q = (130 - 10)/3 = 40$ chacune ; $Q = 80$ ; $P = 50$ ; profit de chacune $= (50 - 10) \times 40 = \mathbf{1\,600}$. Cartel (monopole) : $130 - 2Q = 10 \Rightarrow Q = 60$, $P = 70$, profit total $3\,600$, soit $1\,800$ chacune : l'entente est plus rentable pour les entreprises, mais instable et interdite par le droit de la concurrence.

</details>
`,
    qcm: [
      { q: "La condition de maximisation du profit du monopole est :", choix: ["P = Cm", "Rm = Cm", "P = CM", "Rm = 0"], bonne: 1, explication: "Puis le prix est lu sur la demande." },
      { q: "Avec P = 100 − Q, la recette marginale est :", choix: ["100 − Q", "100 − 2Q", "50 − Q", "100"], bonne: 1, explication: "Pente double." },
      { q: "Par rapport à la concurrence, le monopole :", choix: ["Produit plus et moins cher", "Produit moins et plus cher", "Produit autant", "Vend à perte"], bonne: 1, explication: "D'où une perte sèche." },
      { q: "L'indice de Lerner est égal à :", choix: ["(P − Cm) / P", "(Cm − P) / Cm", "P / Cm", "Q / P"], bonne: 0, explication: "Égal à 1 / |e| à l'optimum." },
      { q: "Le monopole se situe dans la partie de la demande où :", choix: ["|e| < 1", "|e| > 1", "|e| = 0", "La demande est croissante"], bonne: 1, explication: "La Rm y est positive." },
      { q: "Un réseau de distribution d'eau est souvent un :", choix: ["Marché de CPP", "Monopole naturel", "Oligopole de Cournot", "Monopsone"], bonne: 1, explication: "Fortes économies d'échelle." },
      { q: "Des tarifs réduits pour les étudiants relèvent d'une discrimination du :", choix: ["Premier degré", "Deuxième degré", "Troisième degré", "Quatrième degré"], bonne: 2, explication: "Prix différents selon des groupes." },
      { q: "La concurrence monopolistique se caractérise par :", choix: ["Un seul vendeur", "De nombreuses firmes aux produits différenciés", "Deux firmes", "Un seul acheteur"], bonne: 1, explication: "Chamberlin, 1933." },
      { q: "Dans le duopole de Cournot, les entreprises choisissent :", choix: ["Leur prix", "Leur quantité", "Leur coût", "Leur demande"], bonne: 1, explication: "Bertrand : concurrence en prix." },
      { q: "Au Maroc, la loi relative à la liberté des prix et de la concurrence est la loi :", choix: ["31-08", "104-12", "17-95", "9-88"], bonne: 1, explication: "Appliquée par le Conseil de la concurrence." },
    ],
  },
};

export default chapitres;
