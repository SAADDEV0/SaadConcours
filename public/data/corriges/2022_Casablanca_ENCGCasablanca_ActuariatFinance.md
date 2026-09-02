> Corrigé rédigé à partir du programme standard des modules concernés (mathématiques financières, analyse mathématique, probabilités et statistique descriptive, techniques d'échantillonnage) et d'un raisonnement/calcul vérifié — aucune grille de correction officielle n'est disponible pour ce sujet.

### Mathématiques Financières

**1. Une obligation est : un titre de créance**
Une obligation représente une créance sur l'émetteur (l'obligataire est un prêteur qui a droit au remboursement et aux intérêts), à la différence d'une action qui est un titre de propriété (part du capital).

**2. Obligation toujours émise en dessous de son pair : une obligation zéro coupon**
Une obligation zéro coupon ne verse aucun coupon périodique : sa rémunération provient uniquement de la différence entre son prix d'émission (décote) et sa valeur de remboursement au pair. Elle est donc structurellement émise en dessous du pair, contrairement au bon du Trésor classique ou à une OAT, qui peuvent être émis proches du pair.

**3. Durée du placement à intérêts simples**

Formule des intérêts simples : $V_{acquise} = C(1 + i \times t)$, avec $C = 4\,616$€, $i = 10{,}5\% = 0{,}105$, $V_{acquise} = 4\,737{,}17$€.

$$4\,737{,}17 = 4\,616 \times (1 + 0{,}105 \times t)$$
$$\frac{4\,737{,}17}{4\,616} = 1{,}026271 \Rightarrow 0{,}105 \times t = 0{,}026271 \Rightarrow t \approx 0{,}25 \text{ an}$$

t = 0,25 an = **un quart d'année** (3 mois).

**4. Valeur acquise après 9 ans et 9 mois à taux variables**

Découpage du placement (capitalisation composée, taux annuels) :
- Phase 1 : 5 ans à 12%
- Phase 2 : 7 semestres = 3,5 ans, au taux annuel de 14%
- Phase 3 : durée résiduelle = 9,75 - 5 - 3,5 = 1,25 an (15 mois), à 9%

$$V = 10\,000 \times (1{,}12)^5 \times (1{,}14)^{3{,}5} \times (1{,}09)^{1{,}25}$$

Calcul étape par étape :
- $(1{,}12)^5 \approx 1{,}762342 \Rightarrow 10\,000 \times 1{,}762342 = 17\,623{,}42$€
- $(1{,}14)^{3{,}5} \approx 1{,}581859 \Rightarrow 17\,623{,}42 \times 1{,}581859 \approx 27\,877{,}76$€
- $(1{,}09)^{1{,}25} \approx 1{,}113732 \Rightarrow 27\,877{,}76 \times 1{,}113732 \approx 31\,048{,}5$€

$$V \approx 31\,048{,}47€$$

Réponse : **31 048,47€**.

**5. Nominal d'un effet escompté**

Escompte commercial : $V_{actuelle} = N \times \left(1 - i \times \dfrac{n}{360}\right)$

Nombre de jours entre le 27 juillet (date d'escompte) et le 25 octobre (échéance) :
- Du 27 au 31 juillet : 4 jours
- Août : 31 jours
- Septembre : 30 jours
- Du 1er au 25 octobre : 25 jours

$$n = 4 + 31 + 30 + 25 = 90 \text{ jours}$$

$$1\,884 = N \times \left(1 - 0{,}12 \times \frac{90}{360}\right) = N \times (1 - 0{,}03) = N \times 0{,}97$$

$$N = \frac{1\,884}{0{,}97} \approx 1\,942{,}27€$$

Réponse : **1 942,27€**.

### Analyse Mathématiques

**Question 1**

D'après le graphique (courbe positive sur [-4 ; +∞[, touchant l'axe des abscisses en x = -4 et en x = 1, avec un maximum local vers x = -2 puis un second vers x ∈ [4 ; 6], et une asymptote horizontale y = 0 en +∞) :

a. **Faux** — seuls deux zéros sont visibles sur le graphique (x = -4 et x = 1) ; la courbe se rapproche de 0 en +∞ sans jamais l'atteindre (asymptote), ce qui ne constitue pas une troisième solution.

b. **Vrai** — en x = 1, f admet un minimum local (f décroît puis croît autour de x = 1, en touchant 0). f' est donc négative avant x = 1 et positive après : elle change bien de signe en x = 1.

c. **Faux** — entre -4 et -2, la courbe est concave (elle s'incurve vers le bas en s'approchant du maximum local situé en x = -2) : f'' y est négative, pas positive.

d. **Vrai** — il suffit de prendre a = -4 et b = 1 : f(-4) = f(1) = 0, avec a ≠ b. La propriété est donc vérifiée (et se vérifie aussi entre les deux « pics » de même forme).

**Question 2**

D'après le tableau de variations : f est strictement croissante de 0 à +∞ sur ]-∞ ; 1[, strictement croissante de -∞ à 4 sur ]1 ; 3], puis strictement décroissante de 4 à 1 sur [3 ; +∞[.

a. **Faux** — l'équation f(x) = 2 admet une solution sur chacune des trois branches monotones (2 appartient à (0 ; +∞), à (-∞ ; 4) et à (1 ; 4]), soit **trois** solutions, et non deux.

b. **Faux** — contre-exemple : pour a > 4 (par exemple a = 5), seule la première branche (image (0 ; +∞)) atteint cette valeur ; les deux autres branches sont bornées par 4. L'équation f(x) = a n'admet alors qu'**une seule** solution, ce qui contredit l'affirmation « au moins deux solutions pour tout a ∈ R* ».

c. **Vrai** — le tableau donne $\lim_{x\to-\infty} f(x) = 0$ (asymptote horizontale y = 0) et $\lim_{x\to+\infty} f(x) = 1$ (asymptote horizontale y = 1) : il y a bien deux asymptotes horizontales distinctes.

d. **Vrai** — en x = 3, f passe d'une phase croissante à une phase décroissante : x = 3 est un extremum local intérieur où f est dérivable, donc par le théorème de Fermat, f'(3) = 0. L'équation f'(x) = 0 admet donc au moins cette solution.

### Probabilités et Statistique Descriptive

**1.** Taux d'accroissement $= \dfrac{262\,500 - 150\,000}{150\,000} = \dfrac{112\,500}{150\,000} = 0{,}75 = 75\%$. Réponse : **c. 75%**.

**2.** Total d'animaux = 5 lapins + 4 vaches = 9. Animaux blancs = 2 lapins blancs + 2 vaches blanches = 4. $P(\text{blanc}) = \dfrac{4}{9}$. Réponse : **d. 4/9**. (L'option c, 2/5 + 2/4, mélange à tort deux probabilités conditionnelles calculées séparément par espèce, ce qui n'a pas de sens ici puisqu'on tire parmi tous les animaux de la cage.)

**3.** Total = 120. Hommes = 10 + 30 = 40 ; Mer = 60 + 10 = 70 ; Hommes ET mer = 10.

$$P(\text{homme ou mer}) = P(\text{homme}) + P(\text{mer}) - P(\text{homme et mer}) = \frac{40}{120} + \frac{70}{120} - \frac{10}{120} = \frac{100}{120} = \frac{5}{6}$$

Réponse : **c. 5/6**.

**4.** $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ en général. L'égalité $P(A \cup B) = P(A) + P(B)$ impose donc $P(A \cap B) = 0$ : A et B sont **incompatibles** (mutuellement exclusifs).

**5.** Pour une loi binomiale $B(n, p)$, $Var(X) = n \times p \times (1-p) = 30 \times 0{,}1 \times 0{,}9 = 2{,}7$. Réponse : **2,7**.

### Echantiollonnage

**Q1.** Comme seuls 88 enfants sur 2200 sont interrogés (une partie seulement de la population), il s'agit d'une étude par échantillon, c'est-à-dire **un sondage** (par opposition au recensement, qui interroge l'ensemble de la population).

**Q2.** La population de référence (ou population mère) est l'ensemble des individus concernés par l'étude, dont on extrait l'échantillon : ici, ce sont les **2200 enfants** de la commune (identifiés par des numéros de 1 à 2200), et non les 850 ménages ni les 88 enfants effectivement interrogés (qui constituent l'échantillon).

**Q3.** Un questionnaire s'élabore à partir de différents types de questions : **les questions ouvertes, les questions fermées et les questions à échelle** sont les trois grandes catégories reconnues en méthodologie d'enquête ; « les questions triviales » n'est pas une catégorie méthodologique.

**Q4.** Dans les enquêtes en sciences sociales et économiques, la **méthode des quotas** est la méthode d'échantillonnage non probabiliste la plus utilisée en pratique, car elle ne nécessite pas de base de sondage exhaustive et permet de reconstituer un échantillon représentatif de la population selon des critères connus (âge, sexe, etc.), à moindre coût.

**Q5.** Taux de sondage $= \dfrac{\text{taille de l'échantillon}}{\text{taille de la population}} = \dfrac{88}{2200} = 0{,}04$ (soit 4%). Réponse : **0,04**.
