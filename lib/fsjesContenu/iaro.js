// Intelligence artificielle et recherche opérationnelle (S5) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Recherche opérationnelle, intelligence artificielle et modélisation",
    description: "Introduction à la recherche opérationnelle et à l'IA : démarche, modélisation en programme linéaire, hypothèses, PLNE, forme canonique et standard.",
    resume: md`
## L'essentiel — RO, IA et modélisation

- **Recherche opérationnelle** : méthodes mathématiques pour la meilleure décision sous contraintes (Dantzig, simplexe, 1947).
- **IA** : recherche approchée (heuristiques, métaheuristiques) et apprentissage à partir de données.
- Démarche : analyser → modéliser → collecter les données → résoudre → valider (sensibilité) → mettre en œuvre.
- Programme linéaire : **variables** de décision, **fonction objectif** linéaire, **contraintes** linéaires, positivité.
- Hypothèses : proportionnalité, additivité, **divisibilité**, certitude.
- Variables entières → **PLNE** (branch and bound) ; variables 0-1 → décisions oui/non.
- Familles : production, mélange, transport-affectation, flux et chemins, ordonnancement, combinatoire.
- Forme standard : contraintes en égalités grâce aux variables d'**écart** ($\le$) ou d'**excédent** ($\ge$) ; $\min Z = -\max(-Z)$.
`,
    exercices: md`
### Exercice 2 — Résoudre le plan média

On reprend le plan média de l'exercice 1 : $\max Z = 40\,x_1 + 250\,x_2$ sous $6\,x_1 + 30\,x_2 \le 360$, $x_2 \le 8$, $x_1 \ge 10$, $x_1, x_2$ entiers positifs.

1. Calculez l'audience obtenue par millier de DH pour chaque média.
2. Déduisez la solution optimale et l'audience totale.
3. La régie supprime la limite de 8 spots télévisés. Que devient la solution ?

<details><summary>Voir le corrigé</summary>

**1)** Radio : $40/6 \approx 6{,}67$ milliers d'auditeurs par millier de DH ; télévision : $250/30 \approx 8{,}33$. La télévision est plus « rentable » en audience.

**2)** On achète le maximum de spots télévisés : $x_2 = 8$ (240 000 DH). Le reste du budget (120 000 DH) finance $120/6 = 20$ spots radio, ce qui respecte $x_1 \ge 10$. Audience : $40 \times 20 + 250 \times 8 = 800 + 2\,000 = \mathbf{2\,800}$ milliers de contacts. Remplacer un spot télévisé par 5 spots radio (même coût) ferait perdre $250 - 200 = 50$ milliers de contacts : la solution est optimale.

**3)** Il faut garder 10 spots radio (60 000 DH) ; les 300 000 DH restants financent $300/30 = 10$ spots télévisés. Audience : $400 + 2\,500 = \mathbf{2\,900}$ milliers. La contrainte de la régie « coûtait » 100 milliers de contacts.

</details>

### Exercice 3 — Mettre un programme sous forme standard

Écrivez sous forme standard le programme : $\min Z = 4\,x_1 + 3\,x_2$ sous $2x_1 + x_2 \ge 10$, $x_1 + 3x_2 \ge 12$, $x_1 + x_2 \le 9$, $x_1, x_2 \ge 0$. Interprétez chaque nouvelle variable.

<details><summary>Voir le corrigé</summary>

On maximise $-Z$ et on transforme les inégalités :

$$\max\,(-Z) = -4\,x_1 - 3\,x_2 \quad \text{s.c.} \quad \begin{cases} 2x_1 + x_2 - e_1 = 10 \\ x_1 + 3x_2 - e_2 = 12 \\ x_1 + x_2 + s_3 = 9 \\ x_1, x_2, e_1, e_2, s_3 \ge 0 \end{cases}$$

- $e_1$, $e_2$ sont des variables d'**excédent** : de combien on dépasse le minimum exigé ;
- $s_3$ est une variable d'**écart** : capacité non utilisée.

Les variables d'excédent ont un coefficient $-1$ : elles ne fournissent pas de solution de base de départ évidente, d'où le recours, dans le simplexe, à des variables **artificielles** (méthode du grand M ou en deux phases).

</details>
`,
    qcm: [
      { q: "La méthode du simplexe a été inventée par :", choix: ["John Nash", "George Dantzig", "Alan Turing", "Léon Walras"], bonne: 1, explication: "En 1947." },
      { q: "Dans un programme linéaire, les variables de décision représentent :", choix: ["Les données du problème", "Ce que le décideur choisit", "Les prix de marché", "Les contraintes"], bonne: 1, explication: "Par exemple, les quantités à produire." },
      { q: "L'hypothèse de divisibilité signifie que :", choix: ["Les coûts sont proportionnels", "Les variables peuvent prendre des valeurs non entières", "Les contraintes sont des égalités", "Les données sont certaines"], bonne: 1, explication: "Sinon, on passe à la PLNE." },
      { q: "Une variable d'écart dans une contrainte de type inférieur ou égal mesure :", choix: ["Le profit", "La ressource non utilisée", "L'excédent de demande", "Le coût marginal"], bonne: 1, explication: "Elle transforme l'inégalité en égalité." },
      { q: "Une remise sur quantité viole l'hypothèse de :", choix: ["Certitude", "Proportionnalité", "Divisibilité", "Positivité"], bonne: 1, explication: "Le coût unitaire n'est plus constant." },
      { q: "Choisir d'ouvrir ou non un entrepôt se modélise par :", choix: ["Une variable continue", "Une variable binaire", "Une contrainte d'égalité", "Une variable d'écart"], bonne: 1, explication: "Elle vaut 0 ou 1." },
      { q: "Minimiser Z revient à :", choix: ["Minimiser -Z", "Maximiser -Z", "Maximiser Z²", "Annuler Z"], bonne: 1, explication: "On change le signe de l'objectif." },
      { q: "La contrainte « le maïs représente au moins 30 % du mélange » s'écrit linéairement :", choix: ["x1 / (x1 + x2) ≥ 0,3", "x1 ≥ 0,3 (x1 + x2)", "x1 ≥ 30", "x1 + x2 ≥ 0,3"], bonne: 1, explication: "On multiplie par le total, positif." },
      { q: "Le problème de mélange consiste généralement à :", choix: ["Maximiser une audience", "Minimiser le coût d'un mélange respectant des teneurs", "Planifier un projet", "Affecter des personnes à des tâches"], bonne: 1, explication: "Alimentation animale, raffinage, diététique." },
      { q: "L'apprentissage automatique se distingue de la RO classique car il :", choix: ["N'utilise pas de mathématiques", "Construit des règles de décision à partir de données", "Ne traite que des problèmes linéaires", "Garantit toujours l'optimum"], bonne: 1, explication: "Les règles sont apprises plutôt qu'écrites." },
    ],
  },

  2: {
    titre: "La résolution graphique d'un programme linéaire",
    description: "Résolution graphique d'un programme linéaire : domaine réalisable, sommets, droites d'iso-objectif, contraintes saturées, cas particuliers et sensibilité.",
    resume: md`
## L'essentiel — Méthode graphique

- Chaque contrainte = demi-plan ; domaine réalisable = intersection = polygone **convexe**.
- **Théorème fondamental** : si un optimum existe, il est atteint en (au moins) un **sommet**.
- Droites d'iso-objectif $c_1 x_1 + c_2 x_2 = k$ parallèles, de pente $-c_1/c_2$ ; on les déplace dans le sens d'amélioration.
- Méthode des sommets : coordonnées (systèmes 2 × 2) et valeur de $Z$ en chaque sommet.
- Contrainte **saturée** : utilisée à 100 % (ressource rare) ; non saturée : écart positif.
- Cas particuliers : optimum **multiple** (objectif parallèle à un côté), **non borné**, **impossible** (domaine vide), **dégénérescence**.
- Sensibilité : le sommet reste optimal tant que la pente de l'objectif reste entre celles des contraintes saturées.
- Fil rouge : 20 tables, 60 chaises, $Z = 18\,000$ DH ; $c_1 \in [200 ; 400]$.
`,
    exercices: md`
### Exercice 2 — Une huilerie de Taounate

Une huilerie produit de l'huile d'olive vierge extra ($x_1$, en centaines de litres) et de l'huile vierge ($x_2$). Marges : 50 et 40 (centaines de DH). Contraintes hebdomadaires : pressoir $3x_1 + 5x_2 \le 150$ heures, filtration $8x_1 + 5x_2 \le 300$ heures, demande d'huile vierge $x_2 \le 20$.

1. Déterminez les sommets du domaine réalisable.
2. Trouvez la production optimale et la marge maximale.
3. Quelles contraintes sont saturées ? Interprétez l'écart de la contrainte de demande.

<details><summary>Voir le corrigé</summary>

**1)** Sommets : $O(0 ; 0)$ ; $(37{,}5 ; 0)$ sur la filtration ; intersection pressoir-filtration : $8x_1 - 3x_1 = 300 - 150$, d'où $x_1 = 30$ et $x_2 = (150 - 90)/5 = 12$ ; intersection pressoir-demande : $x_2 = 20$, $x_1 = (150 - 100)/3 \approx 16{,}67$ ; $(0 ; 20)$.

**2)** $Z(37{,}5 ; 0) = 1\,875$ ; $Z(30 ; 12) = 1\,500 + 480 = \mathbf{1\,980}$ ; $Z(16{,}67 ; 20) \approx 833 + 800 = 1\,633$ ; $Z(0 ; 20) = 800$. Optimum : **3 000 litres d'extra et 1 200 litres de vierge**, marge de 198 000 DH.

**3)** Pressoir ($90 + 60 = 150$) et filtration ($240 + 60 = 300$) sont **saturés**. La demande d'huile vierge n'est pas saturée ($12 < 20$) : l'huilerie pourrait vendre 800 litres de plus, mais ce n'est pas rentable compte tenu des capacités.

</details>

### Exercice 3 — Reconnaître les cas particuliers

Pour chaque programme, dites s'il a une solution optimale, et laquelle :
1. $\max Z = 3x_1 + 2x_2$ sous $x_1 - x_2 \le 2$, $x_1 \ge 1$, $x_1, x_2 \ge 0$.
2. $\max Z = x_1 + x_2$ sous $x_1 + 2x_2 \le 4$, $x_1 + 2x_2 \ge 6$, $x_1, x_2 \ge 0$.
3. $\min Z = 3x_1 + 2x_2$ sous les mêmes contraintes qu'au 1).

<details><summary>Voir le corrigé</summary>

**1) Non borné.** Les points $(1 ; t)$ vérifient les contraintes pour tout $t \ge 0$ et $Z = 3 + 2t$ croît sans limite : une contrainte de capacité a sans doute été oubliée.

**2) Impossible.** On ne peut avoir à la fois $x_1 + 2x_2 \le 4$ et $x_1 + 2x_2 \ge 6$ : le domaine est vide.

**3)** Le domaine est le même (non borné), mais on minimise un objectif à coefficients positifs : on cherche le point le plus proche de l'origine. Avec $x_1 \ge 1$ et $x_2 \ge 0$, le minimum est en $(1 ; 0)$, qui vérifie $1 - 0 \le 2$ : $Z = \mathbf{3}$. Un domaine non borné n'empêche pas l'existence d'un optimum.

</details>
`,
    qcm: [
      { q: "Le domaine réalisable d'un programme linéaire est toujours :", choix: ["Un cercle", "Un ensemble convexe", "Un segment", "Un point unique"], bonne: 1, explication: "Intersection de demi-plans." },
      { q: "Selon le théorème fondamental, si un optimum existe, il est atteint :", choix: ["Au centre du domaine", "En au moins un sommet du domaine", "À l'origine", "Sur un axe"], bonne: 1, explication: "D'où la méthode des sommets." },
      { q: "La pente des droites d'iso-objectif de Z = 300 x1 + 200 x2 (x2 en ordonnée) est :", choix: ["-2/3", "-1,5", "1,5", "-200"], bonne: 1, explication: "Pente = -c1 / c2." },
      { q: "Une contrainte saturée à l'optimum signifie que :", choix: ["La ressource est inutilisée", "La ressource est entièrement utilisée", "La contrainte est fausse", "La variable est nulle"], bonne: 1, explication: "Son écart est nul." },
      { q: "Un optimum multiple apparaît quand :", choix: ["Le domaine est vide", "La droite d'iso-objectif est parallèle à un côté du domaine", "Le domaine est non borné", "Deux variables sont nulles"], bonne: 1, explication: "Tout un segment est optimal." },
      { q: "Un programme impossible a :", choix: ["Une infinité de solutions", "Un domaine réalisable vide", "Un objectif nul", "Un optimum à l'origine"], bonne: 1, explication: "Les contraintes sont incompatibles." },
      { q: "Pour une contrainte 2x1 + x2 ≥ 10, l'origine :", choix: ["Est dans le demi-plan valide", "N'est pas dans le demi-plan valide", "Est sur la droite", "Rend le programme impossible"], bonne: 1, explication: "0 n'est pas supérieur ou égal à 10." },
      { q: "Un domaine non borné en minimisation avec coûts positifs :", choix: ["N'a jamais d'optimum", "A en général un optimum", "Est impossible", "Rend l'objectif nul"], bonne: 1, explication: "On cherche le point le plus proche de l'origine." },
      { q: "Dans l'exemple de l'atelier, le sommet C (20 ; 60) est l'intersection :", choix: ["Du bois et de la finition", "De la menuiserie et de la finition", "Des deux axes", "Du bois et de la menuiserie"], bonne: 1, explication: "2x1 + x2 = 100 et x1 + x2 = 80." },
      { q: "Un programme non borné signale le plus souvent :", choix: ["Un profit réel infini", "Une contrainte oubliée dans le modèle", "Une erreur de calcul des sommets", "Un optimum multiple"], bonne: 1, explication: "Toute ressource réelle est limitée." },
    ],
  },

  3: {
    titre: "La méthode du simplexe",
    description: "Méthode du simplexe pas à pas : solution de base, tableau initial, variable entrante et sortante, pivotage, critère d'optimalité, grand M et cas particuliers.",
    resume: md`
## L'essentiel — Le simplexe

- Solution de base : $n - m$ variables hors base nulles, $m$ variables de base calculées ; réalisable si toutes $\ge 0$ ; base réalisable = **sommet**.
- Tableau initial : variables d'écart en base ; ligne $Z$ = coefficients de l'objectif **changés de signe**.
- **Entrante** : coefficient le plus négatif de la ligne $Z$ (maximisation).
- **Sortante** : plus petit ratio second membre / coefficient, sur les coefficients **strictement positifs**.
- Pivotage : diviser la ligne pivot par le pivot, annuler le reste de la colonne (ligne $Z$ comprise).
- **Optimalité** : plus aucun coefficient négatif dans la ligne $Z$.
- Coûts réduits des variables d'écart à l'optimum = **prix fictifs** des ressources ; coût réduit nul hors base → optimum multiple.
- Contraintes $\ge$ : variables d'excédent + **artificielles** (grand M ou deux phases) ; artificielle positive à l'optimum → programme impossible.
- Colonne entrante sans coefficient positif → **non borné** ; ratios égaux → dégénérescence.
`,
    exercices: md`
### Exercice 2 — Trois coffrets de pâtisserie

Une pâtisserie de Tétouan prépare trois coffrets de gâteaux traditionnels, $x_1$, $x_2$ et $x_3$ (en dizaines par semaine), de marges 20, 30 et 25 (centaines de DH). Ressources : 40 heures de main-d'œuvre ($x_1 + x_2 + x_3 \le 40$), 60 kg d'amandes ($x_1 + 2x_2 + x_3 \le 60$) et 90 unités d'emballage ($2x_1 + x_2 + 3x_3 \le 90$).

Résolvez par le simplexe et interprétez.

<details><summary>Voir le corrigé</summary>

**Tableau 1** : $x_2$ entre (− 30). Ratios : $40/1 = 40$, $60/2 = 30$, $90/1 = 90$ : $s_2$ sort.

**Tableau 2** (après pivotage sur le 2) :

| Base | $x_1$ | $x_2$ | $x_3$ | $s_1$ | $s_2$ | $s_3$ | Second membre |
|---|---:|---:|---:|---:|---:|---:|---:|
| $s_1$ | 1/2 | 0 | 1/2 | 1 | − 1/2 | 0 | 10 |
| $x_2$ | 1/2 | 1 | 1/2 | 0 | 1/2 | 0 | 30 |
| $s_3$ | 3/2 | 0 | 5/2 | 0 | − 1/2 | 1 | 60 |
| $Z$ | − 5 | 0 | − 10 | 0 | 15 | 0 | 900 |

$x_3$ entre (− 10). Ratios : $10/(1/2) = 20$, $30/(1/2) = 60$, $60/(5/2) = 24$ : $s_1$ sort.

**Tableau 3** :

| Base | $x_1$ | $x_2$ | $x_3$ | $s_1$ | $s_2$ | $s_3$ | Second membre |
|---|---:|---:|---:|---:|---:|---:|---:|
| $x_3$ | 1 | 0 | 1 | 2 | − 1 | 0 | 20 |
| $x_2$ | 0 | 1 | 0 | − 1 | 1 | 0 | 20 |
| $s_3$ | − 1 | 0 | 0 | − 5 | 2 | 1 | 10 |
| $Z$ | 5 | 0 | 0 | 20 | 5 | 0 | **1 100** |

Optimal : $x_1 = 0$, $x_2 = 20$, $x_3 = 20$ (200 coffrets de chaque type 2 et 3), marge de 110 000 DH. Main-d'œuvre et amandes sont saturées ; il reste 10 unités d'emballage. Le coffret 1 n'est pas produit : son coût réduit (5) indique qu'en imposer une dizaine ferait perdre 500 DH. Une heure de travail vaut 2 000 DH, un kg d'amandes 500 DH (prix fictifs 20 et 5).

</details>

### Exercice 3 — Lire un tableau

Au cours d'un simplexe de maximisation, on obtient la ligne $Z$ suivante et la colonne de $x_2$ :

| Base | $x_2$ | Second membre |
|---|---:|---:|
| $x_1$ | − 2 | 12 |
| $s_2$ | 0 | 5 |
| $Z$ | − 3 | 60 |

1. Le tableau est-il optimal ? Quelle variable doit entrer ?
2. Quelle variable sort ? Concluez.

<details><summary>Voir le corrigé</summary>

**1)** Non : le coefficient de $x_2$ dans la ligne $Z$ est négatif (− 3). Faire entrer $x_2$ augmente $Z$ de 3 par unité.

**2)** Aucun coefficient de la colonne $x_2$ n'est strictement positif (− 2 et 0) : aucun ratio n'est calculable. Quand $x_2$ augmente, $x_1 = 12 + 2x_2$ augmente aussi et $s_2$ reste à 5 : aucune contrainte ne se sature. Le programme est **non borné** ; dans un problème réel, une contrainte a été oubliée.

</details>
`,
    qcm: [
      { q: "Une solution de base réalisable correspond géométriquement à :", choix: ["Un point intérieur du domaine", "Un sommet du domaine", "Le centre du domaine", "Une droite d'iso-objectif"], bonne: 1, explication: "Le simplexe se déplace de sommet en sommet." },
      { q: "Dans le tableau initial d'une maximisation, la ligne Z contient :", choix: ["Les coefficients de l'objectif", "Les coefficients de l'objectif changés de signe", "Les seconds membres", "Les ratios"], bonne: 1, explication: "On écrit Z - c1 x1 - c2 x2 = 0." },
      { q: "La variable entrante est celle qui a, dans la ligne Z :", choix: ["Le coefficient le plus positif", "Le coefficient le plus négatif", "Un coefficient nul", "Le plus grand second membre"], bonne: 1, explication: "C'est elle qui améliore le plus Z par unité." },
      { q: "La variable sortante est déterminée par :", choix: ["Le plus grand ratio", "Le plus petit ratio sur les coefficients strictement positifs", "Le plus petit coefficient de la ligne Z", "Le hasard"], bonne: 1, explication: "C'est la première contrainte saturée." },
      { q: "Le tableau d'une maximisation est optimal quand :", choix: ["Tous les seconds membres sont nuls", "Aucun coefficient de la ligne Z n'est négatif", "Toutes les variables sont en base", "Le pivot vaut 1"], bonne: 1, explication: "Aucune variable ne peut plus améliorer Z." },
      { q: "Si la colonne de la variable entrante n'a aucun coefficient positif, le programme est :", choix: ["Impossible", "Non borné", "Dégénéré", "Optimal"], bonne: 1, explication: "Aucune contrainte ne limite la hausse." },
      { q: "Une variable artificielle est nécessaire pour une contrainte :", choix: ["De type inférieur ou égal avec second membre positif", "De type supérieur ou égal ou d'égalité", "De positivité", "Non saturée"], bonne: 1, explication: "Elle fournit une base de départ." },
      { q: "Si une variable artificielle reste positive à l'optimum (grand M), le programme est :", choix: ["Non borné", "Impossible", "Optimal multiple", "Dégénéré"], bonne: 1, explication: "On ne peut pas satisfaire les contraintes d'origine." },
      { q: "Un coût réduit nul pour une variable hors base dans le tableau optimal indique :", choix: ["Un programme impossible", "Un optimum multiple", "Une erreur de calcul", "Une variable artificielle"], bonne: 1, explication: "La faire entrer donne un autre optimum de même valeur." },
      { q: "Dans le tableau optimal, une variable hors base vaut :", choix: ["Son coût réduit", "Zéro", "Le second membre de sa colonne", "1"], bonne: 1, explication: "Les variables hors base sont nulles." },
    ],
  },

  4: {
    titre: "La dualité et l'analyse de sensibilité",
    description: "Dualité en programmation linéaire : écriture du dual, dualité forte, écarts complémentaires, prix fictifs et intervalles de stabilité, exercices corrigés.",
    resume: md`
## L'essentiel — Dualité et sensibilité

- Primal $\max c^T x$, $Ax \le b$, $x \ge 0$ ⇔ dual $\min b^T y$, $A^T y \ge c$, $y \ge 0$ (transposition ; objectif ↔ seconds membres).
- Contrainte d'égalité dans le primal → variable duale de signe quelconque ; le dual du dual est le primal.
- **Dualité faible** : $Z(x) \le W(y)$ ; **forte** : $Z^* = W^*$ ; primal non borné ⇒ dual impossible.
- **Écarts complémentaires** : $y_i\,s_i = 0$ et $x_j\,e_j = 0$.
- **Prix fictif** $y_i = \partial Z^* / \partial b_i$ : prix maximal à payer pour une unité de ressource en plus ; nul si la ressource est abondante.
- Solution duale = coûts réduits des variables d'écart dans la ligne $Z$ du tableau optimal.
- Intervalle d'un second membre : variables de base $+ \Delta \times$ colonne de $s_i$ $\ge 0$.
- Intervalle d'un coefficient de l'objectif : coûts réduits $\ge 0$ (en 2D : pente entre les contraintes saturées).
- Fil rouge : $y = (100 ; 100 ; 0)$, $W^* = 18\,000$ ; $b_1 \in [80 ; 120]$, $b_2 \in [60 ; 100]$.
`,
    exercices: md`
### Exercice 2 — Dual d'un problème de ration

On reprend la ration de Béni Mellal (chapitre 2) : $\min Z = 4x_1 + 3x_2$ sous $2x_1 + x_2 \ge 10$ (protéines), $x_1 + x_2 \ge 7$ (énergie), $x_1 + 3x_2 \ge 12$ (minéraux), dont l'optimum est $x_1 = 3$, $x_2 = 4$, $Z = 24$.

1. Écrivez le dual et interprétez-le.
2. Calculez la solution duale par les écarts complémentaires.
3. L'éleveur veut porter l'exigence d'énergie à 8 unités. Estimez le surcoût.

<details><summary>Voir le corrigé</summary>

**1)** $\max W = 10y_1 + 7y_2 + 12y_3$ sous $2y_1 + y_2 + y_3 \le 4$ (aliment 1), $y_1 + y_2 + 3y_3 \le 3$ (aliment 2), $y \ge 0$. Un fabricant de compléments vend les nutriments à l'unité ($y_1$, $y_2$, $y_3$) : il maximise sa recette en restant moins cher que chaque aliment.

**2)** Minéraux : $3 + 12 = 15 > 12$, contrainte non saturée, donc $y_3 = 0$. $x_1, x_2 > 0$ : contraintes duales saturées, $2y_1 + y_2 = 4$ et $y_1 + y_2 = 3$, d'où $y_1 = \mathbf{1}$, $y_2 = \mathbf{2}$. $W = 10 + 14 = 24 = Z^*$ ✔.

**3)** Une unité d'énergie en plus coûte $y_2 = 2$ DH (dans l'intervalle de stabilité) : le coût passe à environ **26 DH**. Vérification : avec $2x_1 + x_2 = 10$ et $x_1 + x_2 = 8$, on obtient $x_1 = 2$, $x_2 = 6$ (minéraux $2 + 18 = 20 \ge 12$ ✔), coût $8 + 18 = 26$ ✔.

</details>

### Exercice 3 — Faut-il payer des heures supplémentaires ?

Dans le problème des coffrets de Tétouan (exercice 2 du chapitre 3), le tableau optimal donne $x_3 = 20$, $x_2 = 20$, $s_3 = 10$ et, dans la colonne de $s_1$ (main-d'œuvre), les coefficients $2$, $-1$ et $-5$ pour ces trois lignes ; le coût réduit de $s_1$ est 20 (centaines de DH).

1. Que vaut une heure de main-d'œuvre supplémentaire ?
2. Dans quel intervalle cette valeur est-elle valable ?
3. Un intérimaire propose 2 heures à 1 500 DH l'heure. Faut-il accepter ?

<details><summary>Voir le corrigé</summary>

**1)** Le prix fictif de la main-d'œuvre est $y_1 = 20$ centaines de DH, soit **2 000 DH** par heure.

**2)** Avec $40 + \Delta$ heures : $x_3 = 20 + 2\Delta \ge 0$ ($\Delta \ge -10$), $x_2 = 20 - \Delta \ge 0$ ($\Delta \le 20$), $s_3 = 10 - 5\Delta \ge 0$ ($\Delta \le 2$). Intervalle : **de 30 à 42 heures**. Au-delà de 42 heures, l'emballage devient saturé.

**3)** 2 heures restent dans l'intervalle ; chacune rapporte 2 000 DH et coûte 1 500 DH : il faut **accepter**, pour un gain net de $2 \times 500 = $ **1 000 DH**. Une troisième heure ne serait plus valorisée à 2 000 DH.

</details>
`,
    qcm: [
      { q: "Le dual d'un programme de maximisation avec contraintes inférieur ou égal est :", choix: ["Une maximisation avec contraintes supérieur ou égal", "Une minimisation avec contraintes supérieur ou égal", "Une minimisation avec contraintes d'égalité", "Identique au primal"], bonne: 1, explication: "On inverse le sens de l'optimisation et des inégalités." },
      { q: "Les seconds membres des contraintes du primal deviennent dans le dual :", choix: ["Les seconds membres", "Les coefficients de la fonction objectif", "Les variables", "La matrice"], bonne: 1, explication: "W = b^T y." },
      { q: "Selon la dualité forte, à l'optimum :", choix: ["Z* < W*", "Z* = W*", "Z* > W*", "W* = 0"], bonne: 1, explication: "Les valeurs optimales sont égales." },
      { q: "Si une contrainte du primal n'est pas saturée à l'optimum, la variable duale associée est :", choix: ["Positive", "Nulle", "Négative", "Égale au second membre"], bonne: 1, explication: "Écarts complémentaires : ressource abondante, valeur nulle." },
      { q: "Le prix fictif d'une ressource représente :", choix: ["Son prix d'achat sur le marché", "L'augmentation de l'objectif optimal pour une unité de ressource en plus", "Son coût fixe", "Sa quantité disponible"], bonne: 1, explication: "C'est une valeur marginale interne." },
      { q: "Dans le tableau optimal du simplexe, les variables duales se lisent :", choix: ["Dans la colonne du second membre", "Dans la ligne Z, sous les variables d'écart", "Dans la colonne de la variable entrante", "Sur la diagonale"], bonne: 1, explication: "Ce sont les coûts réduits des variables d'écart." },
      { q: "Si le primal est non borné, le dual est :", choix: ["Non borné", "Impossible", "Optimal", "Dégénéré"], bonne: 1, explication: "Par la dualité faible." },
      { q: "Une contrainte d'égalité dans le primal donne dans le dual :", choix: ["Une variable positive", "Une variable de signe quelconque", "Une contrainte d'égalité", "Rien"], bonne: 1, explication: "Règle de passage." },
      { q: "Le prix fictif d'une ressource reste valable :", choix: ["Pour toute quantité", "Dans l'intervalle de stabilité de son second membre", "Seulement à l'origine", "Jamais"], bonne: 1, explication: "Au-delà, la base optimale change." },
      { q: "Une entreprise doit acheter une unité de ressource supplémentaire si :", choix: ["Son prix fictif est nul", "Son prix fictif dépasse son prix d'achat", "Son prix d'achat est élevé", "La contrainte n'est pas saturée"], bonne: 1, explication: "Le gain marginal dépasse le coût." },
    ],
  },

  5: {
    titre: "Les problèmes de transport et d'affectation",
    description: "Transport et affectation : coin nord-ouest, moindre coût, méthode de Vogel, test des potentiels (MODI), cycles, méthode hongroise, exercices corrigés.",
    resume: md`
## L'essentiel — Transport et affectation

- Transport : $\min \sum c_{ij} x_{ij}$, offres $\sum_j x_{ij} = a_i$, demandes $\sum_i x_{ij} = b_j$ ; équilibrer avec une origine ou destination **fictive** à coût nul.
- Solution de base : $m + n - 1$ cases occupées.
- Solutions initiales : **coin nord-ouest** (ignore les coûts), **moindre coût**, **Vogel** (pénalité = écart entre les deux plus petits coûts ; souvent optimale).
- **MODI** : $u_i + v_j = c_{ij}$ sur les cases occupées ($u_1 = 0$) ; coût réduit $\delta_{ij} = c_{ij} - u_i - v_j$ sur les cases vides.
- Optimal si tous les $\delta_{ij} \ge 0$ ; sinon, cycle avec $\theta$ = plus petite quantité à retrancher ; gain $= |\delta| \times \theta$.
- Affectation : $x_{ij} \in \{0 ; 1\}$, une personne par tâche ; $n!$ possibilités.
- **Méthode hongroise** : réduire lignes puis colonnes ; chercher $n$ zéros indépendants ; sinon couvrir les zéros par un minimum de traits, retrancher le plus petit non couvert, l'ajouter aux intersections.
- Maximisation : remplacer chaque valeur par (maximum − valeur).
`,
    exercices: md`
### Exercice 2 — Affecter quatre commerciaux

Une entreprise affecte quatre commerciaux (A, B, C, D) à quatre régions (R1 à R4). Le tableau donne les frais annuels estimés (en milliers de DH) :

| | R1 | R2 | R3 | R4 |
|---|---:|---:|---:|---:|
| A | 82 | 83 | 69 | 92 |
| B | 77 | 37 | 49 | 92 |
| C | 11 | 69 | 5 | 86 |
| D | 8 | 9 | 98 | 23 |

Trouvez l'affectation de coût minimal par la méthode hongroise.

<details><summary>Voir le corrigé</summary>

**Réduction des lignes** (minimums 69, 37, 5, 8) : A (13 ; 14 ; 0 ; 23), B (40 ; 0 ; 12 ; 55), C (6 ; 64 ; 0 ; 81), D (0 ; 1 ; 90 ; 15).

**Réduction des colonnes** (minimums 0, 0, 0, 15) : la colonne R4 devient (8 ; 40 ; 66 ; 0).

**Zéros** : A-R3, B-R2, C-R3, D-R1, D-R4. A et C ne peuvent pas tous deux prendre R3 : seulement 3 zéros indépendants. On couvre tous les zéros avec 3 traits : colonne R3, ligne B, ligne D. Plus petit élément non couvert : 6 (C-R1). On le retranche aux éléments non couverts (lignes A et C hors R3) et on l'ajoute aux intersections (B-R3, D-R3) :

| | R1 | R2 | R3 | R4 |
|---|---:|---:|---:|---:|
| A | 7 | 8 | 0 | 2 |
| B | 40 | 0 | 18 | 40 |
| C | 0 | 58 | 0 | 60 |
| D | 0 | 1 | 96 | 0 |

**Affectation** : A → R3, B → R2, C → R1, D → R4 (quatre zéros indépendants). Coût : $69 + 37 + 11 + 23 = \mathbf{140}$ milliers de DH.

</details>

### Exercice 3 — Améliorer la solution du coin nord-ouest

Dans l'exercice du cours, la solution du coin nord-ouest est : Casablanca-Rabat 40, Casablanca-Fès 10, Tanger-Fès 25, Tanger-Marrakech 5, Agadir-Marrakech 20 (coût 2 190 DH).

1. Calculez les potentiels et les coûts réduits des cases vides.
2. Améliorez la solution par un cycle. Quel est le nouveau coût ?

<details><summary>Voir le corrigé</summary>

**1)** $u_{Casa} = 0$ ; $v_{Rabat} = 9$, $v_{Fès} = 29$ ; Tanger-Fès : $u_{Tanger} = 1$ ; Tanger-Marrakech : $v_{Marrakech} = 57$ ; Agadir-Marrakech : $u_{Agadir} = 25 - 57 = -32$.
Coûts réduits : Casablanca-Marrakech $24 - 0 - 57 = \mathbf{-33}$ ; Tanger-Rabat $25 - 1 - 9 = 15$ ; Agadir-Rabat $55 + 32 - 9 = 78$ ; Agadir-Fès $78 + 32 - 29 = 81$. La solution n'est pas optimale.

**2)** Cycle : Casablanca-Marrakech (+), Tanger-Marrakech (−), Tanger-Fès (+), Casablanca-Fès (−). $\theta = \min(5 ; 10) = 5$. Nouvelle solution : Casablanca-Marrakech 5, Tanger-Marrakech 0 (sort de la base), Tanger-Fès 30, Casablanca-Fès 5. Coût : $2\,190 - 33 \times 5 = \mathbf{2\,025}$ DH : c'est la solution optimale trouvée par Vogel.

</details>
`,
    qcm: [
      { q: "Un problème de transport est équilibré lorsque :", choix: ["Tous les coûts sont égaux", "L'offre totale est égale à la demande totale", "Il y a autant d'origines que de destinations", "Toutes les cases sont occupées"], bonne: 1, explication: "Sinon, on ajoute une origine ou une destination fictive." },
      { q: "Une solution de base d'un problème à 3 origines et 4 destinations compte :", choix: ["12 cases occupées", "6 cases occupées", "7 cases occupées", "4 cases occupées"], bonne: 1, explication: "m + n - 1 = 6." },
      { q: "La méthode du coin nord-ouest a pour défaut de :", choix: ["Être trop longue", "Ne pas tenir compte des coûts", "Donner une solution non réalisable", "Exiger un problème déséquilibré"], bonne: 1, explication: "Elle suit seulement la position des cases." },
      { q: "Dans la méthode de Vogel, la pénalité d'une ligne est :", choix: ["Son coût maximal", "La différence entre ses deux plus petits coûts disponibles", "La somme de ses coûts", "Son offre"], bonne: 1, explication: "On traite d'abord la plus forte pénalité." },
      { q: "Dans la méthode MODI, les potentiels se calculent sur :", choix: ["Les cases vides", "Les cases occupées", "La diagonale", "Les cases de coût nul"], bonne: 1, explication: "u_i + v_j = c_ij pour chaque case occupée." },
      { q: "Une solution de transport est optimale quand les coûts réduits des cases vides sont :", choix: ["Tous négatifs", "Tous positifs ou nuls", "Tous nuls", "Égaux aux coûts"], bonne: 1, explication: "Aucune case ne permet de réduire le coût." },
      { q: "Dans un cycle d'amélioration, la quantité déplacée θ est :", choix: ["La plus grande quantité du cycle", "La plus petite quantité des cases où l'on retranche", "L'offre totale", "Le coût réduit"], bonne: 1, explication: "Pour qu'aucune quantité ne devienne négative." },
      { q: "Le problème d'affectation est un cas particulier du problème de transport où :", choix: ["Les coûts sont nuls", "Toutes les offres et demandes valent 1", "Il n'y a qu'une origine", "Les variables sont continues"], bonne: 1, explication: "Une personne par tâche." },
      { q: "La première étape de la méthode hongroise consiste à :", choix: ["Couvrir les zéros", "Retrancher à chaque ligne son plus petit élément", "Additionner les colonnes", "Choisir la plus grande valeur"], bonne: 1, explication: "Puis on réduit les colonnes." },
      { q: "Pour traiter un problème d'affectation de maximisation par la méthode hongroise, on :", choix: ["Change le signe des contraintes", "Remplace chaque valeur par le maximum moins la valeur", "Divise par n", "Ajoute une ligne fictive"], bonne: 1, explication: "On se ramène à une minimisation de regrets." },
    ],
  },

  6: {
    titre: "Graphes, plus court chemin et ordonnancement de projets",
    description: "Graphes et ordonnancement : algorithme de Dijkstra, arbre couvrant de Kruskal, méthode PERT, dates au plus tôt et au plus tard, marges, chemin critique.",
    resume: md`
## L'essentiel — Graphes et ordonnancement

- Graphe : sommets + arêtes (non orientées) ou arcs (orientés), éventuellement valués ; arbre à $n$ sommets = $n - 1$ arêtes, connexe, sans cycle.
- **Dijkstra** (valuations positives) : fixer le sommet non définitif de plus petite étiquette, mettre à jour ses voisins, noter les prédécesseurs.
- **Kruskal** : arêtes par valuation croissante, retenir celles qui ne créent pas de cycle, jusqu'à $n - 1$ arêtes.
- **PERT/CPM** : $ES$ = **max** des fins au plus tôt des prédécesseurs ; $LF$ = **min** des débuts au plus tard des successeurs.
- Marge totale $= LS - ES$ ; marge libre $= \min ES_{succ} - EF$.
- **Chemin critique** : tâches de marge totale nulle ; sa durée = durée minimale du projet.
- Réduire un projet = accélérer une tâche **critique** (un autre chemin peut devenir critique).
- PERT probabiliste : durée $(a + 4m + b)/6$, variance $((b - a)/6)^2$.
`,
    exercices: md`
### Exercice 2 — Plus court chemin d'un réseau de livraison

Un réseau relie un entrepôt S à un client T. Longueurs des tronçons (km) : S-A 4, S-B 2, B-A 1, A-C 5, B-C 8, B-D 10, C-D 2, C-T 6, D-T 2.

Appliquez l'algorithme de Dijkstra depuis S et donnez le plus court chemin vers T.

<details><summary>Voir le corrigé</summary>

| Étape | Fixé | S | A | B | C | D | T |
|---|---|---:|---:|---:|---:|---:|---:|
| 1 | S | **0** | 4 (S) | 2 (S) | ∞ | ∞ | ∞ |
| 2 | B | | 3 (B) | **2** | 10 (B) | 12 (B) | ∞ |
| 3 | A | | **3** | | 8 (A) | 12 | ∞ |
| 4 | C | | | | **8** | 10 (C) | 14 (C) |
| 5 | D | | | | | **10** | 12 (D) |
| 6 | T | | | | | | **12** |

Plus court chemin : **S → B → A → C → D → T**, longueur **12 km**. Passer par B pour rejoindre A (3 km) est plus court que la liaison directe S-A (4 km).

</details>

### Exercice 3 — Raccorder cinq agences

Une banque veut relier cinq agences par fibre optique au moindre coût. Coûts des liaisons possibles (en dizaines de milliers de DH) : A-B 4, A-C 3, B-C 2, B-D 5, C-D 7, C-E 6, D-E 4.

1. Appliquez l'algorithme de Kruskal.
2. Quel est le coût total ? Combien de liaisons ?

<details><summary>Voir le corrigé</summary>

**1)** Ordre croissant : B-C 2, A-C 3, A-B 4, D-E 4, B-D 5, C-E 6, C-D 7.
- B-C (2) : retenue ; A-C (3) : retenue ;
- A-B (4) : **rejetée**, elle fermerait le cycle A-B-C ;
- D-E (4) : retenue ; B-D (5) : retenue, elle relie le groupe {A, B, C} au groupe {D, E}.
Quatre arêtes pour cinq sommets : l'arbre est complet.

**2)** Coût : $2 + 3 + 4 + 5 = \mathbf{14}$, soit 140 000 DH, avec **4 liaisons** ($n - 1$).

</details>
`,
    qcm: [
      { q: "Un arbre comportant 8 sommets possède :", choix: ["8 arêtes", "7 arêtes", "9 arêtes", "16 arêtes"], bonne: 1, explication: "n - 1 arêtes." },
      { q: "L'algorithme de Dijkstra exige que les valuations soient :", choix: ["Entières", "Positives ou nulles", "Toutes égales", "Négatives"], bonne: 1, explication: "Une valuation négative peut fausser les étiquettes définitives." },
      { q: "À chaque étape de Dijkstra, on rend définitif le sommet :", choix: ["De plus grande étiquette", "Non définitif de plus petite étiquette", "Le plus éloigné", "Choisi au hasard"], bonne: 1, explication: "Son étiquette ne peut plus diminuer." },
      { q: "L'algorithme de Kruskal rejette une arête si :", choix: ["Elle est trop courte", "Elle crée un cycle", "Elle relie deux groupes", "Elle est la dernière"], bonne: 1, explication: "Un arbre est sans cycle." },
      { q: "La date de début au plus tôt d'une tâche est :", choix: ["Le minimum des fins au plus tôt des prédécesseurs", "Le maximum des fins au plus tôt des prédécesseurs", "La durée du projet", "Sa date au plus tard"], bonne: 1, explication: "Il faut attendre la fin du dernier prédécesseur." },
      { q: "La marge totale d'une tâche est :", choix: ["EF - ES", "LS - ES", "LF - EF du successeur", "La durée de la tâche"], bonne: 1, explication: "Retard possible sans retarder le projet." },
      { q: "Le chemin critique est formé des tâches :", choix: ["Les plus longues", "De marge totale nulle", "Sans prédécesseur", "De marge libre positive"], bonne: 1, explication: "Tout retard sur elles retarde le projet." },
      { q: "Pour raccourcir la durée d'un projet, il faut accélérer :", choix: ["N'importe quelle tâche", "Une tâche du chemin critique", "La tâche la plus courte", "Une tâche à forte marge"], bonne: 1, explication: "Seul le chemin critique détermine la durée." },
      { q: "Dans le PERT probabiliste, la durée moyenne d'une tâche est :", choix: ["(a + m + b) / 3", "(a + 4m + b) / 6", "m", "(b - a) / 6"], bonne: 1, explication: "Moyenne pondérée de la loi bêta." },
      { q: "Dans la méthode potentiel-tâches (MPM), les tâches sont représentées par :", choix: ["Des arcs", "Des sommets", "Des cycles", "Des tâches fictives"], bonne: 1, explication: "Contrairement à la convention PERT." },
    ],
  },

  7: {
    titre: "Heuristiques et métaheuristiques : l'IA au service de l'optimisation",
    description: "Heuristiques et métaheuristiques : explosion combinatoire, glouton, plus proche voisin, 2-opt, recuit simulé, tabou, algorithmes génétiques et A*.",
    resume: md`
## L'essentiel — Heuristiques et métaheuristiques

- **Explosion combinatoire** : voyageur de commerce $(n - 1)!/2$ tournées ; sac à dos $2^n$ sélections ; problèmes **NP-difficiles**.
- **Heuristique** : méthode rapide et approchée, sans garantie d'optimum.
- Constructives : **glouton** (rapport valeur/coût décroissant), **plus proche voisin**.
- Recherche locale : améliorer par petits mouvements (échange, **2-opt**) jusqu'à un **optimum local**.
- **Recuit simulé** : dégradation $\Delta$ acceptée avec $P = e^{-\Delta/T}$ ; température décroissante.
- **Tabou** : meilleur voisin même moins bon, mouvements récents interdits.
- **Algorithme génétique** : population, sélection, **croisement**, **mutation**.
- IA : **A*** minimise $f = g + h$ ; heuristique admissible ⇒ chemin optimal ; $h = 0$ ⇒ Dijkstra.
`,
    exercices: md`
### Exercice 2 — Tournée d'un livreur

Un livreur part d'un dépôt D et doit visiter quatre clients A, B, C, E avant de revenir. Distances (km) : D-A 10, D-B 15, D-C 20, D-E 12, A-B 8, A-C 25, A-E 9, B-C 6, B-E 9, C-E 30.

1. Combien de tournées distinctes existe-t-il ?
2. Construisez la tournée du plus proche voisin depuis D et calculez sa longueur.
3. Améliorez-la par des mouvements 2-opt.

<details><summary>Voir le corrigé</summary>

**1)** $(5 - 1)!/2 = \mathbf{12}$ tournées.

**2)** Depuis D : A (10) ; depuis A : B (8) ; depuis B : C (6) ; depuis C : E (30, seule ville restante) ; retour E-D (12). Tournée D-A-B-C-E-D : $10 + 8 + 6 + 30 + 12 = \mathbf{66}$ km. Les bons choix du début imposent l'arête C-E, très longue.

**3)** On supprime D-A et C-E, et l'on reconnecte D-C et A-E (on parcourt A-B-C à l'envers) : D-C-B-A-E-D $= 20 + 6 + 8 + 9 + 12 = \mathbf{55}$ km. Puis on supprime B-A et E-D, et l'on reconnecte B-E et A-D : D-C-B-E-A-D $= 20 + 6 + 9 + 9 + 10 = \mathbf{54}$ km. L'énumération des 12 tournées confirme que **54 km** est l'optimum (tournée D-A-E-B-C-D, la même dans l'autre sens).

</details>

### Exercice 3 — Un croisement génétique

On code une sélection de projets de l'exercice 7 (P1 à P5) par cinq gènes (1 = projet retenu). Deux parents : $A = 01001$ et $B = 00110$.

1. Décodez les parents (coût et valeur).
2. Effectuez un croisement en un point, après le troisième gène. Évaluez les enfants.
3. On applique une mutation au premier gène du second enfant. Évaluez le résultat.
4. Comment traiter un enfant qui dépasse le budget ?

<details><summary>Voir le corrigé</summary>

**1)** $A$ = {P2, P5} : coût 6, valeur 11,5. $B$ = {P3, P4} : coût 9, valeur 17.

**2)** Enfant 1 = début de $A$ + fin de $B$ $= 010\,|\,10$ = {P2, P4} : coût 10, valeur **19,5** (c'est l'optimum). Enfant 2 = début de $B$ + fin de $A$ $= 001\,|\,01$ = {P3, P5} : coût 5, valeur 9.

**3)** $10101$ = {P1, P3, P5} : coût 10, valeur **19** : la mutation a fortement amélioré l'enfant 2.

**4)** On peut le **réparer** (retirer des projets jusqu'à respecter le budget), le **pénaliser** dans la fonction d'évaluation (valeur moins une pénalité proportionnelle au dépassement) ou l'éliminer de la population.

</details>
`,
    qcm: [
      { q: "Le nombre de tournées distinctes d'un voyageur de commerce à 6 villes est :", choix: ["720", "60", "120", "36"], bonne: 1, explication: "(6 - 1)!/2 = 60." },
      { q: "Une heuristique est une méthode :", choix: ["Qui garantit l'optimum", "Rapide qui fournit une bonne solution sans garantie d'optimalité", "Réservée aux programmes linéaires", "Toujours plus lente que l'énumération"], bonne: 1, explication: "Elle repose sur une règle de bon sens." },
      { q: "L'heuristique gloutonne pour le sac à dos classe les objets selon :", choix: ["Leur poids croissant", "Le rapport valeur / poids décroissant", "Leur valeur croissante", "L'ordre alphabétique"], bonne: 1, explication: "On prend d'abord les plus « rentables »." },
      { q: "Un optimum local est une solution :", choix: ["Meilleure que toutes les autres", "Meilleure que ses voisines seulement", "Non réalisable", "Toujours égale à l'optimum global"], bonne: 1, explication: "La recherche locale s'y arrête." },
      { q: "Dans le recuit simulé, une dégradation Δ est acceptée avec la probabilité :", choix: ["Δ / T", "exp(-Δ / T)", "1 - Δ", "T / Δ"], bonne: 1, explication: "Probabilité élevée à haute température." },
      { q: "Quand la température du recuit simulé diminue, l'algorithme :", choix: ["Explore davantage", "Accepte de moins en moins les dégradations", "S'arrête immédiatement", "Accepte toutes les dégradations"], bonne: 1, explication: "Il se stabilise près d'une bonne solution." },
      { q: "La recherche tabou évite de revenir en arrière en :", choix: ["Acceptant toutes les améliorations", "Interdisant temporairement les mouvements récents", "Augmentant la température", "Croisant des solutions"], bonne: 1, explication: "La liste tabou mémorise les derniers mouvements." },
      { q: "Dans un algorithme génétique, la mutation sert à :", choix: ["Sélectionner les meilleurs", "Maintenir la diversité de la population", "Calculer la valeur", "Arrêter l'algorithme"], bonne: 1, explication: "Un gène change au hasard." },
      { q: "L'algorithme A* développe en priorité le nœud qui minimise :", choix: ["g(n)", "g(n) + h(n)", "h(n) seulement", "Le nombre de voisins"], bonne: 1, explication: "Coût parcouru plus estimation du coût restant." },
      { q: "Une heuristique admissible dans A* :", choix: ["Surestime toujours le coût restant", "Ne surestime jamais le coût restant", "Vaut toujours zéro", "Est aléatoire"], bonne: 1, explication: "Elle garantit l'optimalité du chemin trouvé." },
    ],
  },

  8: {
    titre: "Apprentissage automatique et aide à la décision",
    description: "Apprentissage automatique : supervisé et non supervisé, k plus proches voisins, arbres de décision, k-moyennes, matrice de confusion, précision et rappel.",
    resume: md`
## L'essentiel — Apprentissage automatique

- Apprentissage automatique : la règle de décision est **apprise à partir de données**.
- **Supervisé** (données étiquetées : régression, classification), **non supervisé** (regroupement), **par renforcement** (récompenses).
- **k-NN** : classe majoritaire parmi les $k$ voisins les plus proches ; **normaliser** les variables.
- **Arbre de décision** : questions successives ; impureté de Gini $1 - \sum p_c^2$ ; lisible mais instable (forêts aléatoires).
- **k-moyennes** : affecter au centre le plus proche, recalculer les centres, répéter.
- Évaluer sur une base de **test** ; matrice de confusion VP, FN, FP, VN.
- Exactitude $(VP + VN)/n$ ; précision $VP/(VP + FP)$ ; rappel $VP/(VP + FN)$ ; $F_1$ = moyenne harmonique.
- Classes déséquilibrées : l'exactitude est trompeuse ; comparer au modèle naïf.
- **Surapprentissage** : bon en apprentissage, mauvais en test ; validation croisée ; données personnelles : loi 09-08, CNDP.
`,
    exercices: md`
### Exercice 2 — Segmenter des clients par k-moyennes

Six clients d'une enseigne sont décrits par (nombre de visites par mois ; panier moyen en centaines de DH) : P1 (2 ; 3), P2 (2 ; 4), P3 (4 ; 3), P4 (9 ; 8), P5 (10 ; 10), P6 (11 ; 9). On cherche deux groupes, avec P1 et P3 comme centres initiaux.

1. Effectuez la première affectation et recalculez les centres.
2. Poursuivez jusqu'à la stabilité. Décrivez les deux segments.

<details><summary>Voir le corrigé</summary>

**1)** P1 et P2 sont plus proches de P1 ; P3, P4, P5, P6 sont plus proches de P3 (par exemple P4 : distance $\sqrt{49 + 25} \approx 8{,}6$ à P1 contre $\sqrt{25 + 25} \approx 7{,}1$ à P3). Centres : $c_1 = (2 ; 3{,}5)$ ; $c_2 = ((4 + 9 + 10 + 11)/4 ; (3 + 8 + 10 + 9)/4) = (8{,}5 ; 7{,}5)$.

**2)** Nouvelle affectation : P3 est à $\sqrt{2^2 + 0{,}5^2} \approx 2{,}06$ de $c_1$ et à $\sqrt{4{,}5^2 + 4{,}5^2} \approx 6{,}36$ de $c_2$ : il change de groupe. Groupes {P1, P2, P3} et {P4, P5, P6} ; centres $(2{,}67 ; 3{,}33)$ et $(10 ; 9)$. Une nouvelle affectation ne change rien : l'algorithme est **stable**. Segment 1 : clients occasionnels à petit panier ; segment 2 : clients fidèles à gros panier (cible d'un programme de fidélité).

</details>

### Exercice 3 — Choisir la première question d'un arbre

Sur 10 anciens emprunteurs, 4 ont fait défaut. Deux questions sont possibles :
- « Salarié ? » : oui pour 6 clients (1 défaut), non pour 4 clients (3 défauts) ;
- « Propriétaire de son logement ? » : oui pour 5 clients (2 défauts), non pour 5 clients (2 défauts).

1. Calculez l'indice de Gini de l'ensemble.
2. Calculez l'impureté pondérée après chaque question. Laquelle choisir ?

<details><summary>Voir le corrigé</summary>

**1)** $Gini = 1 - 0{,}4^2 - 0{,}6^2 = \mathbf{0{,}48}$.

**2)** « Salarié » : oui : $1 - (1/6)^2 - (5/6)^2 = 10/36 \approx 0{,}278$ ; non : $1 - (3/4)^2 - (1/4)^2 = 0{,}375$. Pondéré : $0{,}6 \times 0{,}278 + 0{,}4 \times 0{,}375 \approx \mathbf{0{,}317}$, soit un gain de $0{,}48 - 0{,}317 \approx 0{,}163$.
« Propriétaire » : chaque groupe a 40 % de défauts, Gini $= 0{,}48$ dans chacun : gain **nul**. On choisit la question « **Salarié ?** », qui sépare le mieux les bons et les mauvais payeurs.

</details>
`,
    qcm: [
      { q: "L'apprentissage supervisé utilise :", choix: ["Des données sans étiquette", "Des exemples dont on connaît la bonne réponse", "Uniquement des récompenses", "Aucune donnée"], bonne: 1, explication: "On apprend à prédire l'étiquette." },
      { q: "La segmentation d'une clientèle sans variable cible relève de :", choix: ["L'apprentissage supervisé", "L'apprentissage non supervisé", "L'apprentissage par renforcement", "La régression linéaire"], bonne: 1, explication: "Par exemple les k-moyennes." },
      { q: "Prédire le prix d'un appartement est un problème de :", choix: ["Classification", "Régression", "Regroupement", "Renforcement"], bonne: 1, explication: "La variable à prédire est quantitative." },
      { q: "Avant d'appliquer les k plus proches voisins, il faut généralement :", choix: ["Supprimer la variable cible", "Normaliser les variables", "Trier les données par date", "Choisir k pair"], bonne: 1, explication: "Sinon la variable aux grandes valeurs domine la distance." },
      { q: "L'indice de Gini d'un groupe parfaitement pur vaut :", choix: ["0,5", "0", "1", "0,25"], bonne: 1, explication: "Une seule classe : 1 - 1² = 0." },
      { q: "Dans l'algorithme des k-moyennes, après l'affectation des points :", choix: ["On change k", "On recalcule chaque centre comme la moyenne de son groupe", "On supprime les points éloignés", "On s'arrête toujours"], bonne: 1, explication: "On alterne affectation et mise à jour des centres." },
      { q: "Le rappel d'un modèle de détection de fraude mesure :", choix: ["La part des alertes qui sont de vraies fraudes", "La part des vraies fraudes détectées", "La part des transactions bien classées", "Le nombre de fausses alertes"], bonne: 1, explication: "Rappel = VP / (VP + FN)." },
      { q: "Avec 98 % de transactions normales, un modèle qui déclare tout normal a une exactitude de :", choix: ["2 %", "98 %", "50 %", "0 %"], bonne: 1, explication: "Mais un rappel nul : l'exactitude est trompeuse." },
      { q: "Le surapprentissage se manifeste par :", choix: ["De mauvaises performances partout", "De très bonnes performances en apprentissage et médiocres en test", "Un modèle trop simple", "Une absence de données"], bonne: 1, explication: "Le modèle a appris le bruit par cœur." },
      { q: "Au Maroc, la protection des données personnelles est régie par :", choix: ["La loi 17-95", "La loi 09-08, sous le contrôle de la CNDP", "Le Code de commerce", "La loi 104-12"], bonne: 1, explication: "Elle encadre la collecte et le traitement des données." },
    ],
  },
};

export default chapitres;
