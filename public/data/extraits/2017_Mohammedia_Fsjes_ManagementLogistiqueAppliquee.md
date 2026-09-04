**Concours d'accès au master Management Logistique Appliquée**

**Test écrit — Durée : 2H30**

**I- Traitez les sujets suivants :**

1. Logistique et politique d'entreprise.
2. Technologies de l'information et de la communication et productivité des entreprises.
3. Manager les ressources de l'entreprise pour innover.

**II- Traiter les deux exercices suivants :**

**Exercice 1 :**

Une entreprise fabrique 3 produits $P_1$, $P_2$ et $P_3$ à partir de 3 composants $C_1$, $C_2$ et $C_3$. Les composants sont acheminés vers l'usine par l'intermédiaire d'une société de transport qui facture le coût de transport à l'unité. Les données sont rassemblées dans les tableaux ci-dessous :

| Composant | $P_1$ | $P_2$ | $P_3$ |
|---|---|---|---|
| Nombre de composants $C_1$ | 1 | 2 | 4 |
| Nombre de composants $C_2$ | 2 | 1 | 2 |
| Nombre de composants $C_3$ | 3 | 2 | 2 |

Par exemple, pour fabriquer une unité de produit $P_3$, il faut 4 composants $C_1$, 2 composants $C_2$ et 2 composants $C_3$.

On se donne ensuite les coûts unitaires transport et hors transport en euros des différents composants :

| | $C_1$ | $C_2$ | $C_3$ |
|---|---|---|---|
| Coûts unitaires hors-transport (en euros) | 20 | 25 | 25 |
| Coûts unitaires transport (en euros) | 7 | 6 | 5 |

Les contraintes d'approvisionnement sont telles que l'entreprise dispose chaque semaine de 70 composants $C_1$, 80 composants $C_2$ et 60 composants $C_3$.

Les marges sur coûts variables unitaires sont de 3 euros pour $P_1$, 5 euros pour $P_2$ et 6 euros pour $P_3$. On note respectivement $x$, $y$ et $z$ les nombres d'unités de $P_1$, $P_2$ et $P_3$ fabriquées au cours d'une semaine.

1. Quels sont les coûts totaux hors-transport ainsi que les coûts totaux de transport pour chacun des composants utilisés ?
2. Présenter la forme canonique du programme linéaire permettant de maximiser la marge sur coûts variables hebdomadaires.
3. Présenter la forme standard du programme linéaire permettant de maximiser la marge sur coûts variables hebdomadaires.
4. Déterminer le programme optimal de production.

**Exercice 2 :**

Le tableau Excel ci-dessous regroupe des informations sur les vendeurs d'une société :

| | A Vendeur | B Sexe | C Région | D CA | E Prime | F COM | G Rev.TOT |
|---|---|---|---|---|---|---|---|
| 2 | AZIZA | F | Nord | 25000 | | | |
| 3 | LAILA | F | Est | 49500 | | | |
| 4 | SAMBIR | M | Nord | 22750 | | | |
| 5 | ADAM | M | Ouest | 18000 | | | |
| 6 | NADIA | F | Est | 120000 | | | |
| 7 | AZIZ | M | Ouest | 84300 | | | |
| 8 | MOUNIR | M | Sud | 21200 | | | |
| 9 | FOUAD | M | Nord | 98700 | | | |

| Région | Taux de la prime | Taux de la commission |
|---|---|---|
| Nord | 20% | 5% |
| Sud | 25% | 4% |
| Ouest | 15% | 3,50% |
| Est | 10% | 2,80% |

Pour chaque vendeur, la prime et la commission dépendent du chiffre d'affaires CA réalisé et de la région. Son revenu total (Rev.TOT) tient compte aussi du sexe du vendeur.

1. Donner les formules qu'il faut appliquer aux cellules E2, F2 et G2 pour calculer respectivement la Prime, la commission (COM) et le revenu total (Rev.TOT) sachant que :

Prime = CA x taux de la prime et Commission = CA x taux de la commission

Revenu Total (Rev.TOT) = Prime + Commission + Prime additionnelle

Si le sexe est Féminin, alors la prime additionnelle est égale à 2000 DHS

Si le sexe est Masculin, alors la prime additionnelle est égale à 1500 DHS

2. Donner les formules qui permettent de calculer le total des chiffres d'affaires des vendeurs de sexe Masculin (M) et de sexe Féminin (F).