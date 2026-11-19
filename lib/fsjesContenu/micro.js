// Microéconomie 1 (S1) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
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
};

export default chapitres;
