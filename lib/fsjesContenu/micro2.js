// Microéconomie 2 (S2) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
// Chapitres 1, 3, 4 et 5 : anciens chapitres 5 à 8 de Microéconomie (micro_cours), déplacés le 2026-11-19.
const md = String.raw;

const chapitres = {
  1: {
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

  2: {
    titre: "L'équilibre du producteur à long terme et le sentier d'expansion",
    description: "Équilibre du producteur à long terme : isocoût, TMST = w/r, lagrangien, sentier d'expansion, fonction de coût et effet d'une hausse du salaire.",
    resume: md`
## L'essentiel — L'équilibre du producteur à long terme

- Isocoût : $wL + rK = C$ ; $K = C/r - (w/r)L$ ; pente $-w/r$ (prix relatif du travail).
- Hausse de $C$ : déplacement parallèle ; hausse de $w$ : pivot autour de $C/r$.
- Optimum : tangence isoquante-isocoût, $TMST = Pm_L / Pm_K = w / r$ ⇔ $Pm_L / w = Pm_K / r$.
- Lagrangien : $\mathcal{L} = f(K, L) + \lambda(C - wL - rK)$ ; $\lambda$ = productivité marginale du dirham.
- Cobb-Douglas $AK^\alpha L^\beta$ : $TMST = \frac{\beta}{\alpha}\frac{K}{L}$ ; part du budget au travail $\beta/(\alpha+\beta)$.
- Programme dual : demandes conditionnelles $L(Q)$, $K(Q)$ ; $CT_{LT}(Q) = wL(Q) + rK(Q)$.
- Sentier d'expansion : $K = \frac{\alpha}{\beta}\frac{w}{r}L$, droite passant par l'origine.
- Rendements croissants : CM de long terme décroissant ; constants : constant ; décroissants : croissant.
- Hausse de $w$ : substitution du capital au travail à production donnée.
`,
    exercices: md`
### Exercice 2 — Rendements décroissants et coût de long terme

Une entreprise a pour fonction de production $Q = K^{0{,}25}L^{0{,}25}$, avec $w = r = 4$. Déterminez le sentier d'expansion, la fonction de coût de long terme, le coût moyen et le coût marginal. Commentez.

<details><summary>Voir le corrigé</summary>

$TMST = K / L = w / r = 1$ : sentier d'expansion $K = L$. Alors $Q = L^{0{,}5}$, donc $L = K = Q^2$. $CT_{LT} = 4Q^2 + 4Q^2 = 8Q^2$ ; $CM = 8Q$ (croissant) ; $Cm = 16Q$. Les rendements d'échelle sont décroissants ($0{,}25 + 0{,}25 = 0{,}5 < 1$) : le coût moyen augmente avec la production (déséconomies d'échelle).

</details>

### Exercice 3 — Rendements croissants et économies d'échelle

Une entreprise produit selon $Q = KL$, avec $w = 2$ et $r = 8$. 1) Déterminez la combinaison qui produit 100 unités au moindre coût. 2) Établissez la fonction de coût de long terme et le coût moyen. Que se passe-t-il quand Q augmente ?

<details><summary>Voir le corrigé</summary>

1) $Pm_L = K$, $Pm_K = L$, $TMST = K / L = 2/8$, donc $K = L/4$. $L \times L/4 = 100 \Rightarrow L = 20$, $K = 5$ ; coût $= 2 \times 20 + 8 \times 5 = 80$.

2) $Q = L^2/4 \Rightarrow L = 2\sqrt{Q}$, $K = \sqrt{Q}/2$ ; $CT_{LT} = 4\sqrt{Q} + 4\sqrt{Q} = 8\sqrt{Q}$ (pour $Q = 100$ : 80 ✓). $CM = 8/\sqrt{Q}$ diminue quand Q augmente : rendements d'échelle croissants ($1 + 1 = 2$), donc économies d'échelle.

</details>
`,
    qcm: [
      { q: "La pente de la droite d'isocoût (K en ordonnée) est :", choix: ["-w / r", "-r / w", "C / r", "w × r"], bonne: 0, explication: "K = C/r - (w/r)L." },
      { q: "Une hausse du budget C, les prix des facteurs restant fixes :", choix: ["Fait pivoter l'isocoût", "Déplace l'isocoût parallèlement vers le haut", "Ne change rien", "Rend l'isocoût vertical"], bonne: 1, explication: "La pente -w/r est inchangée." },
      { q: "Une hausse du salaire w fait pivoter l'isocoût autour de :", choix: ["C / w", "C / r", "L'origine", "Le point optimal"], bonne: 1, explication: "La quantité maximale de capital C/r ne dépend pas de w." },
      { q: "À l'optimum du producteur :", choix: ["Pm_L = Pm_K", "Pm_L / w = Pm_K / r", "L = K", "w = r"], bonne: 1, explication: "Le dernier dirham rapporte autant dans les deux facteurs." },
      { q: "Le multiplicateur de Lagrange du programme primal mesure :", choix: ["Le salaire", "La production supplémentaire due à un dirham de budget en plus", "Le profit", "Le TMST"], bonne: 1, explication: "Productivité marginale du dirham." },
      { q: "Pour Q = K^0,5 L^0,5, le TMST vaut :", choix: ["L / K", "K / L", "K × L", "1"], bonne: 1, explication: "Pm_L / Pm_K = K / L." },
      { q: "Pour une Cobb-Douglas, le sentier d'expansion est :", choix: ["Une droite passant par l'origine", "Une hyperbole", "Une droite horizontale", "Une courbe en U"], bonne: 0, explication: "K = (α/β)(w/r)L." },
      { q: "Les demandes conditionnelles de facteurs expriment K et L en fonction :", choix: ["Du budget", "De la quantité produite et des prix des facteurs", "Du prix du produit", "Du profit"], bonne: 1, explication: "Programme de minimisation du coût." },
      { q: "Avec des rendements d'échelle croissants, le coût moyen de long terme est :", choix: ["Croissant", "Constant", "Décroissant", "Nul"], bonne: 2, explication: "Économies d'échelle." },
      { q: "À production constante, une hausse du salaire conduit l'entreprise à :", choix: ["Employer plus de travail", "Substituer du capital au travail", "Réduire les deux facteurs", "Ne rien changer"], bonne: 1, explication: "Le travail devient relativement plus cher." },
    ],
  },

  3: {
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

  4: {
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

  5: {
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

  6: {
    titre: "L'oligopole, la concurrence monopolistique et la théorie des jeux",
    description: "Oligopole et théorie des jeux : indice HHI, Cournot, Stackelberg, Bertrand, cartel et dilemme du prisonnier, concurrence monopolistique, avec exercices.",
    resume: md`
## L'essentiel — Oligopole, concurrence monopolistique et jeux

- Oligopole : petit nombre de firmes **interdépendantes** ; concentration : $CR_4$ et $HHI = \sum s_i^2$ (de 0 à 10 000).
- **Cournot** (quantités, choix simultanés) : fonctions de réaction ; avec $P = a - Q$ et $Cm = c$ : $q_i = (a - c)/3$ ; $n$ firmes : $(a - c)/(n + 1)$.
- Cournot se situe entre le monopole et la concurrence parfaite (quantité et prix).
- **Stackelberg** : le leader intègre la réaction du suiveur ; $q_L = (a - c)/2$, $q_S = (a - c)/4$ ; avantage au premier joueur.
- **Bertrand** (prix, produit homogène) : $P = Cm$ dès deux firmes (paradoxe), levé par les capacités et la différenciation.
- Jeux : stratégie dominante, équilibre de Nash ; cartel = dilemme du prisonnier, instable sauf jeu répété.
- Concurrence monopolistique : court terme $Rm = Cm$ ; long terme demande tangente au CM, $P = CM > Cm$, profit nul, capacité excédentaire.
- Monopsone : acheteur unique ; monopole bilatéral : prix fixé par la négociation.
- Maroc : loi 104-12 (modifiée par la loi 40-21), Conseil de la concurrence ; carburants : transaction de 1,84 milliard de DH (2023).
`,
    exercices: md`
### Exercice 2 — La guerre des promotions

Deux opérateurs télécoms décident chacun de lancer une baisse de prix ou de maintenir leurs tarifs. Profits annuels en millions de DH (opérateur A ; opérateur B) : les deux maintiennent : (50 ; 50) ; A baisse, B maintient : (65 ; 30) ; A maintient, B baisse : (30 ; 65) ; les deux baissent : (40 ; 40). 1) Chaque opérateur a-t-il une stratégie dominante ? 2) Quel est l'équilibre de Nash ? 3) Pourquoi parle-t-on de dilemme du prisonnier ?

<details><summary>Voir le corrigé</summary>

1) Pour A : si B maintient, baisser rapporte 65 > 50 ; si B baisse, baisser rapporte 40 > 30. **Baisser** est une stratégie dominante, et de même pour B par symétrie.

2) Équilibre de Nash : (baisser ; baisser), avec 40 chacun. Aucun opérateur ne gagne à changer seul (il obtiendrait 30).

3) Les deux opérateurs gagneraient 50 en maintenant leurs prix, mais la poursuite de l'intérêt individuel les conduit à 40 : le résultat est moins bon pour les deux joueurs (et meilleur pour les clients). Si le jeu se répète chaque année, la menace de représailles peut les inciter à maintenir leurs prix, ce que le droit de la concurrence surveille.

</details>

### Exercice 3 — Les salons de coiffure de Marrakech

Un salon a un coût fixe mensuel de 20 000 DH et un coût marginal constant de 40 DH par prestation. 1) Sa demande est $P = 100 - 0{,}02Q$ : calculez la quantité, le prix et le profit. 2) De nouveaux salons ouvrent et la demande devient $P = 80 - 0{,}02Q$. Montrez que l'on se trouve à l'équilibre de long terme de la concurrence monopolistique.

<details><summary>Voir le corrigé</summary>

1) $Rm = 100 - 0{,}04Q = 40 \Rightarrow Q = 1\,500$ ; $P = 100 - 30 = 70$ DH ; profit $= (70 - 40) \times 1\,500 - 20\,000 = 25\,000$ DH. Ce profit attire de nouveaux salons.

2) $Rm = 80 - 0{,}04Q = 40 \Rightarrow Q = 1\,000$ ; $P = 80 - 20 = 60$ DH. $CM = 40 + 20\,000 / 1\,000 = 60$ DH $= P$ : profit nul, plus d'incitation à entrer. Le prix (60) reste supérieur au coût marginal (40) et le coût moyen est encore décroissant : capacité excédentaire.

</details>
`,
    qcm: [
      { q: "Ce qui distingue l'oligopole des autres structures de marché est :", choix: ["Le produit différencié", "L'interdépendance stratégique entre les firmes", "L'absence de barrières à l'entrée", "Le prix égal au coût marginal"], bonne: 1, explication: "Chaque firme tient compte des réactions de ses rivales." },
      { q: "Quatre firmes ont 40 %, 30 %, 20 % et 10 % du marché. L'indice HHI vaut :", choix: ["100", "1 000", "3 000", "10 000"], bonne: 2, explication: "1 600 + 900 + 400 + 100." },
      { q: "Dans le modèle de Cournot, les firmes choisissent :", choix: ["Leurs prix simultanément", "Leurs quantités simultanément", "Leurs quantités l'une après l'autre", "Leurs prix l'une après l'autre"], bonne: 1, explication: "Concurrence en quantités, choix simultanés." },
      { q: "Avec P = 120 - Q et Cm = 30 pour deux firmes, chacune produit à l'équilibre de Cournot :", choix: ["22,5", "30", "45", "60"], bonne: 1, explication: "(120 - 30) / 3." },
      { q: "Une fonction de réaction est :", choix: ["Croissante", "Décroissante", "Constante", "Verticale"], bonne: 1, explication: "Plus la rivale produit, moins la firme produit." },
      { q: "Dans le modèle de Stackelberg, le leader :", choix: ["Produit moins que le suiveur", "Intègre la fonction de réaction du suiveur", "Fixe un prix égal au coût marginal", "Gagne moins qu'à l'équilibre de Cournot"], bonne: 1, explication: "Il décide en premier en anticipant la réaction du suiveur." },
      { q: "Le paradoxe de Bertrand conclut qu'avec deux firmes et un produit homogène :", choix: ["Le prix est celui du monopole", "Le prix est égal au coût marginal", "Les firmes s'entendent toujours", "La quantité est nulle"], bonne: 1, explication: "Chaque firme sous-cote l'autre jusqu'au coût marginal." },
      { q: "Un équilibre de Nash est une situation où :", choix: ["Les gains totaux sont maximaux", "Aucun joueur ne gagne à changer seul de stratégie", "Chaque joueur a une stratégie dominante", "Les joueurs coopèrent"], bonne: 1, explication: "Définition de l'équilibre de Nash." },
      { q: "Un cartel est instable parce que :", choix: ["Il est toujours découvert", "Chaque membre a intérêt à produire plus que son quota", "Les profits sont nuls", "Le prix est trop bas"], bonne: 1, explication: "Structure du dilemme du prisonnier." },
      { q: "À l'équilibre de long terme de la concurrence monopolistique :", choix: ["P = Cm et profit positif", "P = CM et P > Cm", "P = min CM", "P < CM"], bonne: 1, explication: "Demande tangente au coût moyen, profit nul, capacité excédentaire." },
    ],
  },
};

export default chapitres;
