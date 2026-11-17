// Recherche Opérationnelle Appliquée à la Logistique (S6) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Modéliser un problème logistique",
    description: "Variables, contraintes et objectif d'un modèle logistique : plan de production et de stockage, problème de chargement du sac à dos, variables binaires.",
    resume: md`
## L'essentiel — Modéliser

- Démarche : comprendre, **formuler**, résoudre, interpréter.
- Modèle = **variables de décision** + **contraintes** + **fonction objectif** (min coût ou max marge).
- Programme **linéaire** si tout est linéaire et continu ; **en nombres entiers** si des variables sont entières ou binaires.
- Plan multi-périodes : équilibre $S_{t-1} + \text{production}_t - S_t = D_t$, capacités, non-négativité.
- Coût d'une unité produite en $i$ pour $j$ = coût de production + coût de stockage × $(j - i)$ ; on sert chaque demande par la source la moins chère (structure de transport).
- **Sac à dos** : $\max \sum v_i x_i$ sous $\sum p_i x_i \le C$, $x_i \in \{0,1\}$.
- La règle du meilleur ratio valeur/poids n'est **pas toujours optimale** avec des objets indivisibles.
- Binaires : coût fixe $F_j y_j$, capacité $\sum_i x_{ij} \le K_j y_j$, exclusion $y_1 + y_2 \le 1$, dépendance $y_2 \le y_1$.
- Vérifier les unités et tester le modèle sur une solution simple.
`,
    exercices: md`
### Exercice 2 — Chargement avec deux contraintes

Un conteneur peut recevoir 30 m³ et 20 tonnes. Quatre lots sont proposés :

| Lot | P1 | P2 | P3 | P4 |
|---|---|---|---|---|
| Volume (m³) | 12 | 10 | 8 | 6 |
| Poids (t) | 8 | 9 | 6 | 7 |
| Marge (DH) | 5 000 | 4 600 | 3 900 | 3 000 |

1. Formulez le problème.
2. Trouvez la combinaison optimale. Quelle contrainte est saturée ou bloquante ?

<details><summary>Voir le corrigé</summary>

1. $\max Z = 5\,000x_1 + 4\,600x_2 + 3\,900x_3 + 3\,000x_4$ sous $12x_1 + 10x_2 + 8x_3 + 6x_4 \le 30$ ; $8x_1 + 9x_2 + 6x_3 + 7x_4 \le 20$ ; $x_i \in \{0,1\}$.
2. Les combinaisons de trois lots dépassent toutes 20 tonnes (P1 + P3 + P4 : 21 t ; P1 + P2 + P3 : 23 t…). Parmi les paires : **P1 + P2** (22 m³, 17 t, **9 600 DH**), puis P1 + P3 (8 900 DH). L'optimum est P1 + P2. C'est le **poids** qui bloque l'ajout d'un troisième lot, alors qu'il reste 8 m³ de volume.

</details>

### Exercice 3 — Contraintes logiques

Un logisticien étudie trois sites d'entrepôt : Tanger ($y_1$), Kénitra ($y_2$) et Casablanca ($y_3$), avec $y_j = 1$ si le site est ouvert. Traduisez :
a) on ouvre au moins un site ;
b) on ouvre au plus deux sites ;
c) Kénitra ne peut être ouvert que si Casablanca l'est ;
d) Tanger et Kénitra ne peuvent pas être ouverts ensemble ;
e) l'entrepôt de Casablanca, de capacité 50 000 palettes, ne reçoit des flux $x_{3k}$ que s'il est ouvert.

<details><summary>Voir le corrigé</summary>

a) $y_1 + y_2 + y_3 \ge 1$
b) $y_1 + y_2 + y_3 \le 2$
c) $y_2 \le y_3$
d) $y_1 + y_2 \le 1$
e) $\sum_k x_{3k} \le 50\,000\,y_3$ : si $y_3 = 0$, aucun flux n'est possible ; si $y_3 = 1$, la capacité s'applique.

</details>
`,
    qcm: [
      { q: "Dans un modèle d'optimisation, ce que le décideur choisit est représenté par :", choix: ["Les contraintes", "Les variables de décision", "Les paramètres", "La fonction objectif"], bonne: 1, explication: "Quantités, choix d'ouverture, etc." },
      { q: "L'équation d'équilibre d'un stock s'écrit :", choix: ["Stock initial + production − stock final = demande", "Production = demande × 2", "Stock final = production", "Demande − production = stock initial"], bonne: 0, explication: "Ce qui entre égale ce qui sort." },
      { q: "Un programme dont certaines variables ne peuvent valoir que 0 ou 1 est :", choix: ["Un programme linéaire continu", "Un programme en nombres entiers (binaires)", "Un problème de transport classique", "Un modèle de Wilson"], bonne: 1, explication: "Plus difficile à résoudre." },
      { q: "Dans le problème du sac à dos, un objet est :", choix: ["Divisible", "Pris entièrement ou pas du tout", "Toujours pris", "Pris à moitié"], bonne: 1, explication: "Variables binaires." },
      { q: "La règle du meilleur ratio valeur/poids pour un sac à dos :", choix: ["Est toujours optimale", "Peut laisser de la capacité inutilisée et ne pas être optimale", "Est interdite", "Donne toujours zéro"], bonne: 1, explication: "Il faut comparer les combinaisons." },
      { q: "Une tonne produite en mois 1 pour le mois 3, avec 50 DH de production et 4 DH de stockage par mois, coûte :", choix: ["50 DH", "54 DH", "58 DH", "62 DH"], bonne: 2, explication: "50 + 2 × 4." },
      { q: "La contrainte y2 ≤ y3 signifie :", choix: ["Le site 2 seulement si le site 3 est ouvert", "Les deux sites sont exclusifs", "Le site 3 est toujours ouvert", "Le site 2 est toujours fermé"], bonne: 0, explication: "Contrainte de dépendance." },
      { q: "Pour interdire tout flux vers un entrepôt fermé de capacité K, on écrit :", choix: ["Somme des flux ≥ K y", "Somme des flux ≤ K y", "Somme des flux = K", "y ≤ 0"], bonne: 1, explication: "Si y = 0, les flux sont nuls." },
      { q: "Le plan de production multi-périodes a la structure d'un :", choix: ["Problème de transport", "Problème de file d'attente", "Modèle de Wilson", "Sac à dos"], bonne: 0, explication: "Sources = périodes et modes, destinations = demandes." },
      { q: "La dernière étape de la démarche de modélisation est :", choix: ["Choisir les variables", "Interpréter la solution et la confronter à la réalité", "Écrire l'objectif", "Lister les contraintes"], bonne: 1, explication: "Un modèle simplifie toujours la réalité." },
    ],
  },
  2: {
    titre: "La gestion des stocks en avenir certain",
    description: "Coûts de passation et de possession, quantité économique de Wilson, point de commande, sensibilité, remises sur quantités et réapprovisionnement progressif.",
    resume: md`
## L'essentiel — Stocks en avenir certain

- Coût de **passation** $C_p$ (par commande) ; coût de **possession** $C_s = i \times P$ (par unité et par an) ; coût de rupture.
- Wilson : demande régulière, livraison en une fois, pas de rupture ; stock moyen $Q/2$.
- Coût de gestion $= \dfrac{D}{Q}C_p + \dfrac{Q}{2}C_s$ ; à l'optimum, passation = possession.
- $Q^* = \sqrt{\dfrac{2DC_p}{C_s}}$ ; $N^* = D/Q^*$ ; $T^* = 360/N^*$ ; $CG^* = \sqrt{2DC_pC_s}$.
- Point de commande = demande journalière × délai de livraison.
- Courbe de coût **plate** : on peut arrondir $Q^*$ à une quantité pratique.
- Remises : $CT = \dfrac{D}{Q}C_p + \dfrac{Q}{2}iP + DP$ ; $Q^*$ par tranche, relevé au seuil si besoin, puis comparer les coûts totaux.
- Réapprovisionnement progressif : $Q^* = \sqrt{\dfrac{2DC_p}{C_s(1 - D/p)}}$ ; stock maximal $Q(1 - D/p)$.
`,
    exercices: md`
### Exercice 2 — Production par lots

Un atelier de Kénitra fabrique des supports métalliques pour un équipementier automobile. Demande : 24 000 pièces par an ; cadence de production : 96 000 pièces par an ; coût de lancement d'une série : 1 800 DH ; coût de possession : 4 DH par pièce et par an.

1. Calculez la taille optimale de la série, le stock maximal et le coût de gestion annuel.
2. Combien de séries par an ? Combien de jours dure la production d'une série (année de 360 jours) ?

<details><summary>Voir le corrigé</summary>

1. $1 - D/p = 1 - 24\,000/96\,000 = 0{,}75$. $Q^* = \sqrt{2 \times 24\,000 \times 1\,800 / (4 \times 0{,}75)} = \sqrt{28\,800\,000}$ = **5 367 pièces**. Stock maximal = 5 367 × 0,75 = **4 025 pièces**. Coût de gestion = $\sqrt{2 \times 24\,000 \times 1\,800 \times 4 \times 0{,}75}$ = **16 099,69 DH**.
2. Nombre de séries = 24 000 / 5 367 = **4,5 séries** par an (une tous les 80 jours environ). Durée de production d'une série = 5 367 / 96 000 × 360 = **20 jours**.

</details>

### Exercice 3 — Arrondir à la palette

Le distributeur de lubrifiants du cours ($D$ = 36 000, $C_p$ = 600 DH, $C_s$ = 6 DH, $Q^*$ = 2 683) reçoit ses bidons par palettes de 400. Faut-il commander 6 ou 7 palettes ?

<details><summary>Voir le corrigé</summary>

- 6 palettes (2 400 bidons) : 36 000 / 2 400 × 600 + 2 400 / 2 × 6 = 9 000 + 7 200 = **16 200 DH**.
- 7 palettes (2 800 bidons) : 36 000 / 2 800 × 600 + 2 800 / 2 × 6 = 7 714,29 + 8 400 = **16 114,29 DH**.
On commande **7 palettes** : le coût ne dépasse l'optimum théorique (16 099,69 DH) que de 14,60 DH. La courbe est plate près de l'optimum.

</details>
`,
    qcm: [
      { q: "Dans le modèle de Wilson, le stock moyen vaut :", choix: ["Q", "Q / 2", "2Q", "D / Q"], bonne: 1, explication: "Le stock varie en dents de scie de Q à 0." },
      { q: "À l'optimum de Wilson :", choix: ["Le coût de passation est nul", "Le coût de passation annuel égale le coût de possession annuel", "Le stock est maximal", "On ne passe qu'une commande"], bonne: 1, explication: "C'est une propriété de la formule." },
      { q: "Si D = 7 200, Cp = 500 DH et Cs = 2 DH, la quantité économique vaut :", choix: ["600", "1 200", "1 897", "3 600"], bonne: 2, explication: "Racine de 3 600 000 = 1 897." },
      { q: "Le coût de possession par unité et par an d'un article à 200 DH avec un taux de 10 % est :", choix: ["2 DH", "10 DH", "20 DH", "200 DH"], bonne: 2, explication: "Cs = i × P." },
      { q: "Le point de commande avec une demande de 30 unités par jour et un délai de 8 jours est :", choix: ["38", "240", "30", "8"], bonne: 1, explication: "30 × 8 = 240." },
      { q: "La courbe du coût de gestion autour de la quantité économique est :", choix: ["Très pentue", "Plate", "Verticale", "Discontinue"], bonne: 1, explication: "Un arrondi modéré coûte peu." },
      { q: "En présence de remises, on compare :", choix: ["Les seuls coûts de passation", "Les coûts totaux, achats compris", "Les seuls prix unitaires", "Les délais"], bonne: 1, explication: "La remise réduit le coût des achats." },
      { q: "Si la quantité économique d'une tranche est inférieure au seuil de cette tranche, on retient :", choix: ["La quantité calculée", "Le seuil de la tranche", "Zéro", "Le double du seuil"], bonne: 1, explication: "Quantité minimale pour obtenir le prix." },
      { q: "En réapprovisionnement progressif, le stock maximal vaut :", choix: ["Q", "Q (1 − D/p)", "Q / 2", "p − D"], bonne: 1, explication: "La consommation se poursuit pendant la production." },
      { q: "Quand la cadence de production p devient très grande, la quantité économique du réapprovisionnement progressif :", choix: ["Tend vers zéro", "Se rapproche de la quantité de Wilson", "Devient infinie", "Ne change pas de formule"], bonne: 1, explication: "1 − D/p tend vers 1." },
    ],
  },
  3: {
    titre: "La gestion des stocks en avenir aléatoire",
    description: "Stock de sécurité et point de commande pour un taux de service, délai incertain, recomplètement périodique et modèle du vendeur de journaux.",
    resume: md`
## L'essentiel — Stocks en avenir aléatoire

- Demande ou délai incertains : sans **stock de sécurité**, rupture dans un cycle sur deux.
- **Taux de service** : probabilité de ne pas manquer pendant le délai d'un cycle ; arbitrage coût du stock / coût des ruptures.
- Demande sur le délai : moyenne $dL$, écart-type $\sigma_L = \sigma_d\sqrt{L}$ (on additionne les variances).
- $SS = z\,\sigma_L$ ; $PC = dL + SS$ ; $z$ = 1,282 (90 %), 1,645 (95 %), 1,960 (97,5 %), 2,326 (99 %).
- Délai incertain : $\sigma = \sqrt{L\sigma_d^2 + d^2\sigma_{\text{délai}}^2}$.
- Stock moyen = $Q/2 + SS$ ; coût du SS = SS × $C_s$ ; le coût croît vite près de 100 %.
- **Point de commande** : $Q$ fixe, date variable. **Recomplètement** : tous les $T$ jours, on remonte à $S = d(T + L) + z\sigma_d\sqrt{T + L}$.
- **Vendeur de journaux** : $C_u$ = prix − coût ; $C_o$ = coût − récupération ; $P(D \le Q^*) = \dfrac{C_u}{C_u + C_o}$.
- Si $C_u > C_o$, on commande plus que la demande moyenne.
`,
    exercices: md`
### Exercice 2 — Poisson frais

Un mareyeur d'Essaouira achète chaque matin du poisson 40 DH le kg et le revend 70 DH aux restaurants. Le soir, les invendus sont vendus 25 DH le kg à une conserverie. La demande quotidienne suit une loi normale de moyenne 300 kg et d'écart-type 60 kg.

1. Calculez le ratio critique.
2. Quelle quantité acheter chaque matin ? (Pour une probabilité de 0,667, $z$ = 0,431.)

<details><summary>Voir le corrigé</summary>

1. $C_u$ = 70 − 40 = 30 DH ; $C_o$ = 40 − 25 = 15 DH ; ratio = 30 / 45 = **0,667**.
2. $Q^* = 300 + 0{,}431 \times 60$ = **326 kg** environ. Une vente perdue coûte deux fois plus qu'un invendu : on achète un peu plus que la moyenne.

</details>

### Exercice 3 — Données hebdomadaires

Un distributeur de matériel électrique vend chaque semaine en moyenne 350 disjoncteurs (écart-type 70). Le fournisseur turc livre en 3 semaines. Coût de possession : 15 DH par disjoncteur et par an.

1. Calculez le stock de sécurité et le point de commande pour un taux de service de 90 %.
2. Quel est le coût annuel supplémentaire pour passer à 95 % ?

<details><summary>Voir le corrigé</summary>

1. $\sigma_L = 70\sqrt{3}$ = 121,2. SS = 1,282 × 121,2 = **155 disjoncteurs** ; PC = 350 × 3 + 155 = **1 205 disjoncteurs**.
2. À 95 % : SS = 1,645 × 121,2 = 199,4. Supplément ≈ 44 disjoncteurs, soit 44 × 15 ≈ **660 DH** par an.

</details>
`,
    qcm: [
      { q: "Le stock de sécurité sert à :", choix: ["Réduire le nombre de commandes", "Absorber les écarts de demande et de délai", "Obtenir une remise", "Remplacer la quantité économique"], bonne: 1, explication: "Il protège contre la rupture." },
      { q: "Si l'écart-type journalier est 10 et le délai 16 jours, l'écart-type sur le délai est :", choix: ["10", "40", "160", "26"], bonne: 1, explication: "10 × racine de 16 = 40." },
      { q: "Pour un taux de service de 95 %, z vaut environ :", choix: ["1,282", "1,645", "1,960", "2,326"], bonne: 1, explication: "Lu dans la table de la loi normale." },
      { q: "Avec d = 50, L = 6 et SS = 40, le point de commande est :", choix: ["90", "300", "340", "260"], bonne: 2, explication: "50 × 6 + 40." },
      { q: "En présence d'un stock de sécurité, le stock moyen vaut :", choix: ["Q / 2", "Q / 2 + SS", "Q + SS", "SS / 2"], bonne: 1, explication: "Le stock de sécurité s'ajoute au stock cyclique." },
      { q: "Passer d'un taux de service de 95 % à 99 % multiplie le stock de sécurité par environ :", choix: ["1,04", "1,41", "2", "4"], bonne: 1, explication: "2,326 / 1,645." },
      { q: "Dans la politique de recomplètement périodique, le stock de sécurité couvre :", choix: ["Le délai seul", "La période T et le délai L", "La période seule", "Aucune incertitude"], bonne: 1, explication: "D'où un SS plus élevé." },
      { q: "Dans le modèle du vendeur de journaux, Cu désigne :", choix: ["Le coût d'un invendu", "La marge perdue par unité manquante", "Le coût de passation", "Le coût de possession"], bonne: 1, explication: "Prix de vente − coût d'achat." },
      { q: "Si Cu = 12 et Co = 4, le ratio critique vaut :", choix: ["0,25", "0,33", "0,75", "3"], bonne: 2, explication: "12 / 16." },
      { q: "Un délai fournisseur plus irrégulier entraîne :", choix: ["Un stock de sécurité plus faible", "Un stock de sécurité plus élevé", "Aucun changement", "La suppression du point de commande"], bonne: 1, explication: "La variance du délai s'ajoute." },
    ],
  },
  4: {
    titre: "La prévision de la demande",
    description: "Prévoir la demande : moyenne mobile, lissage exponentiel, tendance par moindres carrés, coefficients saisonniers et mesures d'erreur MAD, MAPE et biais.",
    resume: md`
## L'essentiel — La prévision

- La chaîne logistique agit **avant** la demande ; une prévision est toujours fausse, on mesure et réduit l'erreur.
- Série chronologique = **tendance** + **saisonnalité** + **aléa** ; les prévisions agrégées sont plus fiables.
- Moyenne mobile : $F_{t+1}$ = moyenne des $n$ dernières valeurs ; $n$ grand = lissé mais lent.
- Lissage exponentiel : $F_{t+1} = F_t + \alpha(y_t - F_t)$ ; $\alpha$ élevé = réactif ; inadapté à une tendance.
- Tendance : $b = \dfrac{\sum ty - n\bar{t}\bar{y}}{\sum t^2 - n\bar{t}^2}$ ; $a = \bar{y} - b\bar{t}$.
- Saisonnalité : rapports $y_t/\hat{y}_t$, moyenne par saison, **normalisation** (somme = nombre de saisons) ; $F_t = \hat{y}_t \times CS$.
- Fêtes du calendrier lunaire : pics qui se déplacent d'environ 11 jours par an.
- Erreurs : **MAD** $= \frac{1}{n}\sum \lvert e_t \rvert$ ; **MAPE** en % ; **biais** $= \frac{1}{n}\sum e_t$ (positif = sous-estimation).
- L'écart-type des erreurs (≈ 1,25 × MAD) sert au stock de sécurité.
`,
    exercices: md`
### Exercice 2 — Choisir le coefficient de lissage

Ventes hebdomadaires d'un article : 500, 520, 480, 510, 530. Première prévision $F_1$ = 500.

1. Calculez les prévisions avec $\alpha$ = 0,1 et $\alpha$ = 0,5, puis la MAD sur les semaines 2 à 5.
2. Quel coefficient retenir ?

<details><summary>Voir le corrigé</summary>

1. $\alpha$ = 0,1 : $F_2$ = 500 ; $F_3$ = 502 ; $F_4$ = 499,80 ; $F_5$ = 500,82 ; $F_6$ = 503,74. Erreurs (semaines 2 à 5) : 20 ; −22 ; 10,20 ; 29,18 ; **MAD = 20,34**.
$\alpha$ = 0,5 : $F_2$ = 500 ; $F_3$ = 510 ; $F_4$ = 495 ; $F_5$ = 502,50 ; $F_6$ = 516,25. Erreurs : 20 ; −30 ; 15 ; 27,50 ; **MAD = 23,13**.
2. Sur cette série qui oscille sans tendance nette, le coefficient **0,1** donne une erreur plus faible : un $\alpha$ élevé fait suivre à la prévision les variations aléatoires. À confirmer sur un historique plus long.

</details>

### Exercice 3 — Biais et erreur relative

Ventes réelles de quatre mois : 400, 450, 500, 420 ; prévisions : 420, 430, 470, 450.

1. Calculez la MAD, la MAPE et le biais.
2. Interprétez.

<details><summary>Voir le corrigé</summary>

1. Erreurs (réel − prévision) : −20 ; 20 ; 30 ; −30. MAD = 100 / 4 = **25**. MAPE = (20/400 + 20/450 + 30/500 + 30/420) / 4 = **5,65 %**. Biais = 0 / 4 = **0**.
2. La prévision se trompe en moyenne de 25 unités (5,65 %), mais **sans biais** : elle ne surestime ni ne sous-estime systématiquement. Un biais nul ne signifie pas une prévision parfaite.

</details>
`,
    qcm: [
      { q: "Les trois composantes d'une série chronologique sont :", choix: ["Prix, quantité, coût", "Tendance, saisonnalité, aléa", "Moyenne, médiane, mode", "Offre, demande, stock"], bonne: 1, explication: "Modèle de décomposition." },
      { q: "La moyenne mobile sur 3 mois de 120, 150 et 180 donne une prévision de :", choix: ["120", "150", "180", "450"], bonne: 1, explication: "(120 + 150 + 180) / 3." },
      { q: "Avec F = 200, une vente réelle de 240 et α = 0,25, la nouvelle prévision est :", choix: ["200", "210", "220", "240"], bonne: 1, explication: "200 + 0,25 × 40." },
      { q: "Un coefficient de lissage élevé rend la prévision :", choix: ["Plus stable", "Plus réactive", "Toujours exacte", "Indépendante des ventes"], bonne: 1, explication: "Elle suit davantage les dernières valeurs." },
      { q: "Le lissage exponentiel simple appliqué à une demande en hausse régulière donne une prévision :", choix: ["En avance", "En retard sur la demande", "Exacte", "Négative"], bonne: 1, explication: "Il ne modélise pas la tendance." },
      { q: "Un coefficient saisonnier de 0,80 signifie que la saison vend :", choix: ["80 unités", "20 % de moins que la tendance", "20 % de plus que la tendance", "80 % de plus"], bonne: 1, explication: "Modèle multiplicatif." },
      { q: "Pour des trimestres, la somme des coefficients saisonniers normalisés vaut :", choix: ["1", "4", "12", "100"], bonne: 1, explication: "Le nombre de saisons." },
      { q: "Un biais positif (réel − prévision) indique que l'on :", choix: ["Surestime la demande", "Sous-estime la demande", "Prévoit parfaitement", "Utilise un mauvais α"], bonne: 1, explication: "Les ventes dépassent les prévisions." },
      { q: "La MAPE s'exprime :", choix: ["En unités", "En pourcentage", "En jours", "En dirhams"], bonne: 1, explication: "Erreur relative moyenne." },
      { q: "Avec une tendance y = 50 + 4t, la prévision de tendance pour t = 10 est :", choix: ["54", "90", "94", "540"], bonne: 1, explication: "50 + 40." },
    ],
  },
  5: {
    titre: "La localisation des entrepôts",
    description: "Localiser un entrepôt : critères d'implantation, centre de gravité, médiane en distance rectilinéaire, facteurs pondérés et choix de sites avec coûts fixes.",
    resume: md`
## L'essentiel — Localisation

- Décision **stratégique** : coûts de transport amont et aval, délais, foncier, main-d'œuvre, accès, zones logistiques.
- **Centre de gravité** : $x^* = \dfrac{\sum w_i x_i}{\sum w_i}$, $y^* = \dfrac{\sum w_i y_i}{\sum w_i}$ avec $w_i$ = volume × tarif.
- Il donne une zone de recherche mais ne minimise pas exactement la distance (problème de **Weber**, algorithme de Weiszfeld).
- Distance **rectilinéaire** : $\lvert x - x_i \rvert + \lvert y - y_i \rvert$ ; optimum = **médiane pondérée** de chaque coordonnée.
- Médiane : classer, cumuler les volumes, s'arrêter au premier cumul qui atteint la **moitié** du total.
- **Facteurs pondérés** : notes × poids, transparent mais subjectif.
- Plusieurs sites : $\min \sum F_j y_j + \sum c_{ij} x_{ij}$, $\sum_j x_{ij} = 1$, $x_{ij} \le y_j$, binaires.
- Ouvrir un site de plus seulement si l'économie de transport dépasse son **coût fixe**.
- Toujours confronter le résultat au terrain (terrains disponibles, accès, croissance).
`,
    exercices: md`
### Exercice 2 — Centre de gravité avec tarifs différents

Un entrepôt doit recevoir 2 000 t par an d'un port situé en (0 ; 0), transportées en camions complets à 0,5 DH par tonne et par km, et livrer trois clients au tarif de 1,2 DH par tonne et par km : C1 (40 ; 60) 500 t ; C2 (80 ; 20) 800 t ; C3 (100 ; 80) 700 t.

1. Calculez le centre de gravité en pondérant par volume × tarif.
2. Comparez avec un centre de gravité pondéré par les seuls volumes. Commentez.

<details><summary>Voir le corrigé</summary>

1. Poids : port 2 000 × 0,5 = 1 000 ; C1 600 ; C2 960 ; C3 840 ; total 3 400. $\sum w x$ = 0 + 24 000 + 76 800 + 84 000 = 184 800 ; $\sum w y$ = 0 + 36 000 + 19 200 + 67 200 = 122 400. $x^*$ = **54,4** ; $y^*$ = **36,0**.
2. Avec les seuls volumes (total 4 000 t) : $x^*$ = 38,5 ; $y^*$ = 25,5. Le centre est alors **attiré vers le port**, qui pèse 2 000 t. Mais le transport amont en camions complets est moins cher : en tenant compte des tarifs, l'entrepôt doit se rapprocher des **clients**, livrés en petits lots plus coûteux.

</details>

### Exercice 3 — Médiane pondérée

Cinq points de vente (coordonnées en km, volumes annuels) : A (5 ; 50) 100 ; B (15 ; 10) 250 ; C (25 ; 40) 130 ; D (35 ; 20) 300 ; E (45 ; 30) 220. Les déplacements suivent un quadrillage de rues.

1. Trouvez l'emplacement optimal.
2. Calculez le coût total en unités × km et comparez avec le point (25 ; 20).

<details><summary>Voir le corrigé</summary>

1. Total 1 000, moitié 500. En $x$ : 5 (100), 15 (350), 25 (480), 35 (780 ≥ 500) : $x^*$ = **35**. En $y$ : 10 (250), 20 (550 ≥ 500) : $y^*$ = **20**. Emplacement : **(35 ; 20)**, à l'endroit du point de vente D.
2. Coût en (35 ; 20) : A 100 × (30 + 30) = 6 000 ; B 250 × (20 + 10) = 7 500 ; C 130 × (10 + 20) = 3 900 ; D 0 ; E 220 × (10 + 10) = 4 400 ; total **21 800**. En (25 ; 20) : **22 200**, plus cher.

</details>
`,
    qcm: [
      { q: "Le centre de gravité pondère les coordonnées par :", choix: ["Les distances", "Les volumes (et tarifs) transportés", "Les coûts fixes", "Le nombre de clients seulement"], bonne: 1, explication: "Volume × tarif quand les tarifs diffèrent." },
      { q: "Trois clients en x = 0, 10, 20 avec des volumes 100, 100, 200 ont un centre de gravité en x égal à :", choix: ["10", "12,5", "15", "20"], bonne: 1, explication: "(0 + 1 000 + 4 000) / 400 = 12,5." },
      { q: "Le centre de gravité minimise exactement la somme des distances à vol d'oiseau :", choix: ["Toujours", "Non, c'est une approximation", "Seulement en ville", "Seulement avec deux clients"], bonne: 1, explication: "Le point optimal est celui de Weber." },
      { q: "En distance rectilinéaire, la localisation optimale est :", choix: ["La moyenne pondérée", "La médiane pondérée de chaque coordonnée", "Le point le plus éloigné", "Le centre du plan"], bonne: 1, explication: "On minimise séparément sur x et y." },
      { q: "Dans la méthode de la médiane, on s'arrête au premier cumul qui atteint :", choix: ["Le quart du volume", "La moitié du volume total", "Le volume total", "Le plus gros client"], bonne: 1, explication: "Définition de la médiane." },
      { q: "La méthode des facteurs pondérés est surtout :", choix: ["Objective et exacte", "Transparente mais subjective", "Réservée au transport aérien", "Interdite par la loi"], bonne: 1, explication: "Les poids et notes sont des jugements." },
      { q: "Ouvrir un entrepôt supplémentaire est intéressant si :", choix: ["Il est neuf", "L'économie de transport dépasse son coût fixe", "Il est plus grand", "Les clients le demandent"], bonne: 1, explication: "Arbitrage fixe / variable." },
      { q: "La contrainte x_ij ≤ y_j signifie :", choix: ["Un client ne peut être servi que par un site ouvert", "Un site sert un seul client", "Tous les sites sont ouverts", "Les coûts sont nuls"], bonne: 0, explication: "Lien entre affectation et ouverture." },
      { q: "Un transport amont en camions complets moins cher que la livraison aval tend à placer l'entrepôt :", choix: ["Près du port", "Près des clients", "Au hasard", "À égale distance de tout"], bonne: 1, explication: "Le poids aval (volume × tarif) est plus fort." },
      { q: "Avec deux sites possibles et sans capacité, le nombre de combinaisons non vides à comparer est :", choix: ["2", "3", "4", "8"], bonne: 1, explication: "Site 1, site 2, ou les deux." },
    ],
  },
  6: {
    titre: "Les tournées de véhicules",
    description: "Voyageur de commerce et tournées de véhicules : plus proche voisin, amélioration 2-opt et méthode des économies de Clarke et Wright sous capacité.",
    resume: md`
## L'essentiel — Tournées de véhicules

- **TSP** : circuit le plus court qui visite chaque client une fois et revient au dépôt ; **VRP** : plusieurs véhicules de capacité limitée (variantes : fenêtres horaires, plusieurs dépôts).
- Explosion combinatoire : $n!/2$ circuits avec un dépôt et $n$ clients ; on utilise des **heuristiques**.
- Le **distancier** se construit par plus courts chemins (Dijkstra).
- **Plus proche voisin** : toujours aller au client non visité le plus proche ; rapide mais myope.
- **2-opt** : retirer deux arêtes, reconnecter en inversant un segment ; gain $= d_{ij} + d_{kl} - d_{ik} - d_{jl}$ ; supprime les croisements ; optimum local.
- **Clarke et Wright** : économie $s_{ij} = d_{Di} + d_{Dj} - d_{ij}$, classée par ordre décroissant.
- Fusion si : tournées différentes, $i$ et $j$ en **extrémité**, charge totale ≤ capacité.
- Distance finale = distance des allers-retours − somme des économies retenues.
- Vérifier ensuite horaires, temps de conduite et accès.
`,
    exercices: md`
### Exercice 2 — Plus proche voisin et énumération

Un dépôt D et quatre clients P, Q, R, S. Distancier (km) : D-P 10 ; D-Q 14 ; D-R 8 ; D-S 12 ; P-Q 6 ; P-R 13 ; P-S 18 ; Q-R 11 ; Q-S 9 ; R-S 7.

1. Construisez la tournée du plus proche voisin et calculez sa longueur.
2. Combien de circuits différents existe-t-il ? Montrez que la tournée trouvée est optimale en comparant avec deux autres circuits.

<details><summary>Voir le corrigé</summary>

1. D → R (8) → S (7) → Q (9) → P (6) → D (10) : **D-R-S-Q-P-D = 40 km**.
2. 4! / 2 = **12 circuits**. Exemples : D-P-Q-R-S-D = 10 + 6 + 11 + 7 + 12 = 46 km ; D-R-P-Q-S-D = 8 + 13 + 6 + 9 + 12 = 48 km. L'énumération complète montre que 40 km est le minimum (atteint par D-R-S-Q-P-D et par son sens inverse D-P-Q-S-R-D) : ici le plus proche voisin trouve l'optimum, ce qui n'est pas garanti en général.

</details>

### Exercice 3 — Calculer un gain 2-opt

Une tournée D-A-B-C-E-D utilise les arêtes A-B (14 km) et C-E (12 km). On propose de les remplacer par A-C (9 km) et B-E (10 km).

1. Calculez le gain.
2. Écrivez la nouvelle tournée.

<details><summary>Voir le corrigé</summary>

1. Gain = 14 + 12 − 9 − 10 = **7 km** : l'échange est accepté.
2. Le segment B-C est inversé : **D-A-C-B-E-D**.

</details>
`,
    qcm: [
      { q: "Le problème du voyageur de commerce cherche :", choix: ["Le plus court chemin entre deux points", "Le circuit le plus court qui visite chaque client une fois et revient au dépôt", "Le flot maximal", "Le stock optimal"], bonne: 1, explication: "TSP." },
      { q: "On utilise des heuristiques pour les tournées parce que :", choix: ["Les distances sont inconnues", "Le nombre de circuits explose avec le nombre de clients", "Les solveurs sont interdits", "Les clients changent chaque jour"], bonne: 1, explication: "Problème combinatoire." },
      { q: "Avec un dépôt et 4 clients, le nombre de circuits différents (distances symétriques) est :", choix: ["4", "12", "24", "120"], bonne: 1, explication: "4! / 2 = 12." },
      { q: "L'heuristique du plus proche voisin :", choix: ["Garantit l'optimum", "Va toujours au client non visité le plus proche", "Fusionne des tournées", "Inverse des segments"], bonne: 1, explication: "Rapide mais myope." },
      { q: "L'échange 2-opt consiste à :", choix: ["Ajouter un camion", "Retirer deux arêtes et reconnecter en inversant un segment", "Supprimer un client", "Changer de dépôt"], bonne: 1, explication: "On l'accepte s'il raccourcit la tournée." },
      { q: "Une tournée qui se croise sur la carte (distances euclidiennes) :", choix: ["Est optimale", "Peut toujours être améliorée", "Est interdite par la loi", "Est plus courte"], bonne: 1, explication: "Un 2-opt supprime le croisement." },
      { q: "L'économie de Clarke et Wright vaut :", choix: ["d(D,i) + d(D,j) + d(i,j)", "d(D,i) + d(D,j) − d(i,j)", "d(i,j) − d(D,i)", "d(D,i) × d(D,j)"], bonne: 1, explication: "Gain d'une fusion par rapport à deux allers-retours." },
      { q: "Avec d(D,i) = 12, d(D,j) = 15 et d(i,j) = 8, l'économie est :", choix: ["19", "27", "35", "5"], bonne: 0, explication: "12 + 15 − 8." },
      { q: "Dans Clarke et Wright, on ne peut relier deux clients que s'ils sont :", choix: ["Au milieu de leurs tournées", "En extrémité de leurs tournées et sans dépasser la capacité", "Dans la même tournée", "Très éloignés"], bonne: 1, explication: "Ils doivent être reliés directement au dépôt." },
      { q: "Les économies sont traitées par ordre :", choix: ["Croissant", "Décroissant", "Alphabétique", "Aléatoire"], bonne: 1, explication: "On commence par les plus grandes." },
    ],
  },
  7: {
    titre: "Flots dans les réseaux et files d'attente",
    description: "Flot maximal par Ford-Fulkerson, coupe minimale et goulots d'étranglement, files d'attente M/M/1 et M/M/2, choix du nombre de quais par le coût total.",
    resume: md`
## L'essentiel — Flots et files d'attente

- Flot réalisable : capacités respectées, **conservation** en chaque nœud ; valeur = ce qui sort de S.
- **Ford-Fulkerson** : chercher un chemin augmentant, augmenter de la plus petite capacité libre, recommencer ; un arc déjà utilisé peut être parcouru à contresens.
- **Flot maximal = capacité de la coupe minimale** ; les arcs de la coupe sont les goulots à renforcer.
- File **M/M/s** : arrivées de Poisson ($\lambda$), services exponentiels ($\mu$), $s$ serveurs ; $\rho = \lambda/(s\mu) < 1$.
- M/M/1 : $L = \dfrac{\rho}{1-\rho}$ ; $L_q = \dfrac{\rho^2}{1-\rho}$ ; $W = \dfrac{1}{\mu-\lambda}$ ; $W_q = \dfrac{\rho}{\mu-\lambda}$.
- Little : $L = \lambda W$ ; $L_q = \lambda W_q$.
- M/M/2 : $P_0 = \dfrac{1-\rho}{1+\rho}$ ; $L_q = \dfrac{2\rho^3}{1-\rho^2}$ avec $\rho = \lambda/(2\mu)$.
- L'attente explose quand $\rho$ approche 1 (à 0,9 : $L_q$ = 8,1 en M/M/1).
- Coût total $CT(s) = s \times c_{\text{serveur}} + L_q \times c_{\text{attente}}$ ; on retient le $s$ de coût minimal.
`,
    exercices: md`
### Exercice 2 — Flot maximal

Réseau de pistes d'une zone portuaire (camions par heure) : S-A 7 ; S-B 5 ; A-B 3 ; A-T 4 ; B-T 9.

1. Calculez le flot maximal par la méthode des chemins augmentants.
2. Identifiez la coupe minimale. Quel arc faudrait-il renforcer ?

<details><summary>Voir le corrigé</summary>

1. S-A-T : min(7, 4) = **4** ; S-B-T : min(5, 9) = **5** ; S-A-B-T : libres S-A 3, A-B 3, B-T 4 : **3**. Plus de chemin (S-A et S-B sont saturés). **Flot maximal = 12 camions par heure.**
2. La coupe {S} | {A, B, T} a une capacité 7 + 5 = **12** = flot maximal : c'est la coupe minimale. Les goulots sont les **deux pistes de sortie S-A et S-B** ; renforcer A-T ou B-T ne servirait à rien.

</details>

### Exercice 3 — Le scanner de la douane

Au port, un scanner contrôle en moyenne 5 conteneurs par heure ; 4 conteneurs par heure lui sont envoyés (M/M/1).

1. Calculez le taux d'occupation, $L$, $L_q$, $W$ et $W_q$ (en minutes).
2. Les contrôles augmentent : 4,5 conteneurs par heure. Recalculez $L_q$ et $W_q$. Commentez.

<details><summary>Voir le corrigé</summary>

1. $\rho$ = 0,8 ; $L$ = 0,8 / 0,2 = **4** ; $L_q$ = 0,64 / 0,2 = **3,2** ; $W$ = 1 / (5 − 4) = **1 h** ; $W_q$ = 0,8 / 1 = 0,8 h = **48 minutes**.
2. $\rho$ = 0,9 ; $L_q$ = 0,81 / 0,1 = **8,1** ; $W_q$ = 0,9 / 0,5 = 1,8 h = **108 minutes**. Une hausse de 12,5 % des arrivées fait plus que doubler l'attente : près de la saturation, il faut un second scanner ou un ciblage plus fin des contrôles.

</details>
`,
    qcm: [
      { q: "Dans un flot réalisable, en chaque nœud intermédiaire :", choix: ["Le flot entrant est nul", "Le flot entrant égale le flot sortant", "Le flot sortant double", "Les capacités sont ignorées"], bonne: 1, explication: "Conservation du flot." },
      { q: "Un chemin augmentant de capacités libres 6, 4 et 9 permet d'augmenter le flot de :", choix: ["4", "6", "9", "19"], bonne: 0, explication: "La plus petite capacité libre." },
      { q: "Le théorème de Ford-Fulkerson dit que le flot maximal égale :", choix: ["La somme de toutes les capacités", "La capacité de la coupe minimale", "La plus grande capacité", "Le nombre d'arcs"], bonne: 1, explication: "Flot max = coupe min." },
      { q: "Pour augmenter le flot maximal d'un réseau, on renforce :", choix: ["N'importe quel arc", "Un arc de la coupe minimale", "L'arc le plus long", "Un arc qui sort du puits"], bonne: 1, explication: "C'est le goulot d'étranglement." },
      { q: "Dans la notation M/M/1, le chiffre 1 désigne :", choix: ["Une arrivée par heure", "Un serveur", "Une file", "Un client"], bonne: 1, explication: "Notation de Kendall." },
      { q: "Avec λ = 3 par heure et μ = 4 par heure (M/M/1), le taux d'occupation vaut :", choix: ["0,25", "0,75", "1,33", "7"], bonne: 1, explication: "3 / 4." },
      { q: "Avec λ = 3 et μ = 4 (M/M/1), le nombre moyen de clients dans le système est :", choix: ["0,75", "2,25", "3", "4"], bonne: 2, explication: "0,75 / 0,25 = 3." },
      { q: "La formule de Little s'écrit :", choix: ["L = λ W", "L = μ W", "W = λ L", "L = ρ / μ"], bonne: 0, explication: "Et Lq = λ Wq." },
      { q: "Quand le taux d'occupation se rapproche de 1 :", choix: ["L'attente diminue", "L'attente augmente très fortement", "L'attente est constante", "La file disparaît"], bonne: 1, explication: "Lq = ρ² / (1 − ρ) tend vers l'infini." },
      { q: "Le nombre optimal de quais est celui qui minimise :", choix: ["Le seul coût des quais", "Le seul temps d'attente", "La somme du coût des quais et du coût d'attente", "Le nombre de camions"], bonne: 2, explication: "Arbitrage capacité / attente." },
    ],
  },
};

export default chapitres;
