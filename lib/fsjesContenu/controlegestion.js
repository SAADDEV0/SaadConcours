// Contrôle de gestion (S5) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Introduction au contrôle de gestion",
    description: "Définition du contrôle de gestion, efficacité et efficience, processus de pilotage, centres de responsabilité, ROI et résultat résiduel, exercices corrigés.",
    resume: md`
## L'essentiel — Introduction au contrôle de gestion

- **Contrôle de gestion** (Anthony) : processus par lequel les dirigeants s'assurent que les ressources sont obtenues et utilisées avec **efficacité** et **efficience** pour réaliser les objectifs.
- **Efficacité** = résultats / objectifs ; **efficience** = résultats / moyens ; **pertinence** = adéquation moyens / objectifs.
- **Processus** en boucle : prévoir (plans, budgets, standards) → piloter (tableaux de bord) → analyser les écarts → corriger.
- Trois niveaux : contrôle **stratégique**, contrôle **de gestion**, contrôle **opérationnel**.
- **Centres de responsabilité** : de coûts (standard ou discrétionnaires), de recettes, de profit, d'investissement ; on juge un responsable sur ce qu'il **maîtrise**.
- Centres d'investissement : $ROI = \dfrac{\text{résultat}}{\text{capitaux investis}}$ ; **résultat résiduel** $=$ résultat $-$ coût du capital × capitaux investis (évite le refus de projets rentables).
- **Prix de cession interne** : au coût standard, au prix du marché ou négocié ; il répartit le profit entre centres sans changer le total.
- Outils : comptabilité de gestion, budgets, analyse des écarts, tableaux de bord, reporting, ERP. Ne pas confondre avec le **contrôle interne** et l'**audit**.
`,
    exercices: md`
### Exercice 2 — Efficacité et efficience d'une agence bancaire

Une agence bancaire d'Oujda s'était fixé l'objectif d'ouvrir 1 200 nouveaux comptes dans l'année avec un budget de campagne de 900 000 DH. Elle a ouvert 1 080 comptes et dépensé 972 000 DH.

1. Calculez le taux d'efficacité.
2. Calculez le coût prévu et le coût réel par compte ouvert. Qu'en déduire sur l'efficience ?
3. Donnez un exemple de question de pertinence que la direction devrait se poser.

<details><summary>Voir le corrigé</summary>

**1)** Efficacité $= 1\,080 / 1\,200 = \mathbf{90\,\%}$ : l'objectif n'est pas atteint.

**2)** Coût prévu : $900\,000 / 1\,200 = 750$ DH par compte ; coût réel : $972\,000 / 1\,080 = 900$ DH par compte. L'**efficience** se dégrade de 20 % : l'agence a dépensé plus pour obtenir moins.

**3)** Pertinence : la campagne (affichage, événements) était-elle le bon moyen pour atteindre des clients jeunes, qui ouvrent aujourd'hui leurs comptes en ligne ? Un budget consacré à une offre mobile aurait-il été plus adapté à l'objectif ?

</details>

### Exercice 3 — Le prix de cession interne

L'atelier A (centre de profit) d'une entreprise de Tanger fabrique 10 000 pièces par an qu'il livre à la division B. Le coût standard d'une pièce est de 80 DH (60 DH variables, 20 DH fixes) ; la même pièce vaut 110 DH sur le marché. La division B transforme la pièce (coût propre : 70 DH) et vend le produit fini 200 DH.

1. Calculez le résultat de A, de B et du groupe si le prix de cession interne est le coût standard (80 DH).
2. Même question avec le prix du marché (110 DH).
3. Quel prix vous paraît le plus juste pour évaluer les deux responsables ?

<details><summary>Voir le corrigé</summary>

**1)** A : $10\,000 \times (80 - 80) = 0$ DH ; B : $10\,000 \times (200 - 70 - 80) = 500\,000$ DH ; groupe : **500 000 DH**.

**2)** A : $10\,000 \times (110 - 80) = 300\,000$ DH ; B : $10\,000 \times (200 - 70 - 110) = 200\,000$ DH ; groupe : **500 000 DH**.

**3)** Le prix de cession **ne change pas le résultat du groupe**, il ne fait que le **partager**. Au coût standard, l'atelier A, centre de profit, ne peut jamais gagner d'argent : il n'est pas incité à produire mieux. Au prix du marché, chacun est jugé comme s'il travaillait avec l'extérieur : c'est la solution la plus juste quand un marché existe. On retient le **coût standard** (et non réel) quand il n'y a pas de marché, pour que B ne supporte pas les inefficiences de A.

</details>
`,
    qcm: [
      { q: "L'efficience mesure :", choix: ["L'atteinte des objectifs", "Le rapport entre les résultats obtenus et les moyens utilisés", "L'adéquation des objectifs à la stratégie", "Le respect des procédures"], bonne: 1, explication: "Obtenir le résultat au moindre coût." },
      { q: "Selon Anthony, le contrôle de gestion vise à s'assurer que les ressources sont utilisées :", choix: ["Conformément aux lois fiscales", "Avec efficacité et efficience pour atteindre les objectifs", "Au moindre prix d'achat uniquement", "Selon les normes comptables"], bonne: 1, explication: "C'est la définition de référence." },
      { q: "Un atelier qui produit les volumes imposés par la direction est en général :", choix: ["Un centre de profit", "Un centre de coûts", "Un centre d'investissement", "Un centre de recettes"], bonne: 1, explication: "Son responsable ne maîtrise que ses coûts." },
      { q: "Le principe de contrôlabilité signifie :", choix: ["Qu'on contrôle tout le monde", "Qu'on ne juge un responsable que sur ce qu'il maîtrise", "Que l'audit est permanent", "Que les budgets sont annuels"], bonne: 1, explication: "Sinon l'évaluation est injuste et démotivante." },
      { q: "Résultat 3 M DH, capitaux investis 25 M DH, coût du capital 10 %. Résultat résiduel ?", choix: ["12 %", "0,5 M DH", "2,5 M DH", "- 0,5 M DH"], bonne: 1, explication: "3 − 10 % × 25 = 0,5 M DH." },
      { q: "Le ROI d'un centre d'investissement présente le risque :", choix: ["De surévaluer les coûts", "De faire refuser des projets rentables qui diluent le ratio", "D'ignorer le résultat", "De ne pas pouvoir être calculé"], bonne: 1, explication: "D'où l'usage du résultat résiduel." },
      { q: "Le prix de cession interne :", choix: ["Modifie le résultat du groupe", "Partage le résultat entre centres sans changer le total", "Est toujours égal au coût réel", "Est fixé par l'administration fiscale"], bonne: 1, explication: "C'est une convention de répartition interne." },
      { q: "Les tableaux de bord interviennent surtout :", choix: ["Avant l'action", "Pendant l'action, pour piloter", "Uniquement en fin d'exercice", "Jamais en contrôle de gestion"], bonne: 1, explication: "Ils donnent des informations rapides pour réagir." },
      { q: "Un service juridique est typiquement un :", choix: ["Centre de profit", "Centre de coûts discrétionnaires", "Centre de recettes", "Centre d'investissement"], bonne: 1, explication: "Ses dépenses n'ont pas de lien mesurable avec un volume produit." },
      { q: "Au Maroc, la budgétisation par programmes avec indicateurs de performance a été introduite par :", choix: ["La loi 17-95", "La loi organique 130-13 relative à la loi de finances", "Le Code de commerce", "La loi 9-88"], bonne: 1, explication: "Elle applique la logique du contrôle de gestion à l'État." },
    ],
  },

  2: {
    titre: "Les coûts préétablis et les standards",
    description: "Coûts préétablis : types de standards, fiche de coût unitaire standard, budget flexible, coût de l'unité d'œuvre et écart global, avec exercices corrigés.",
    resume: md`
## L'essentiel — Coûts préétablis et standards

- **Coût préétabli** : calculé a priori ; **coût standard** (analyse technique et économique précise), coût budgété, devis.
- Types de standards : **idéal** (inatteignable), **normal** (conditions normales, à privilégier), historique, prévisionnel.
- Coût standard d'un élément = **quantité standard × prix standard** (méthodes, achats, RH).
- **Fiche de coût unitaire standard** : matières, MOD, charges indirectes (UO × coût standard de l'UO).
- **Budget flexible** : $BF(A) = CV_u \times A + CF$ ; coût standard de l'UO à l'activité **normale** : $C_s = CV_u + CF / A_n$.
- On compare toujours le coût réel au **coût préétabli de la production réelle** (standard unitaire × quantités réellement produites).
- **Écart global** = coût réel − coût préétabli de la production réelle ; positif = **défavorable** pour une charge.
- Somme des écarts par élément = écart global.
`,
    exercices: md`
### Exercice 2 — Établir une fiche de coût standard

La « Biscuiterie de l'Oriental » (Oujda) fabrique des paquets de biscuits. Pour un paquet, le bureau des méthodes prévoit 0,25 kg de farine à 5 DH le kg, 0,08 kg de sucre à 7 DH le kg et 0,02 heure de main-d'œuvre directe à 40 DH l'heure. Le paquet passe 0,01 heure-machine dans le centre Cuisson, dont le budget mensuel comporte 60 000 DH de charges fixes et 50 DH de charges variables par heure-machine, pour une activité normale de 1 200 heures-machine.

1. Calculez le coût standard de l'heure-machine de cuisson.
2. Présentez la fiche de coût unitaire standard d'un paquet.
3. Quel est le coût préétabli d'une production réelle de 110 000 paquets ?

<details><summary>Voir le corrigé</summary>

**1)** $C_s = 50 + 60\,000 / 1\,200 = 50 + 50 = \mathbf{100\ DH}$ l'heure-machine.

**2)**

| Élément | Quantité | Prix | Montant (DH) |
|---|---:|---:|---:|
| Farine | 0,25 kg | 5 | 1,25 |
| Sucre | 0,08 kg | 7 | 0,56 |
| MOD | 0,02 h | 40 | 0,80 |
| Centre Cuisson | 0,01 HM | 100 | 1,00 |
| **Coût standard** | | | **3,61** |

**3)** $110\,000 \times 3{,}61 = \mathbf{397\,100\ DH}$.

</details>

### Exercice 3 — Construire un budget flexible à partir de deux mois observés

Le centre Conditionnement d'une laiterie a supporté 118 800 DH de charges pour 3 600 heures en janvier et 131 600 DH pour 4 400 heures en février. Son activité normale est de 4 000 heures.

1. Déterminez les charges variables par heure et les charges fixes du centre.
2. Écrivez l'équation du budget flexible et calculez le budget pour l'activité normale.
3. Calculez le coût standard de l'heure.

<details><summary>Voir le corrigé</summary>

**1)** $CV_u = \dfrac{131\,600 - 118\,800}{4\,400 - 3\,600} = \dfrac{12\,800}{800} = \mathbf{16\ DH}$ par heure ; $CF = 118\,800 - 16 \times 3\,600 = \mathbf{61\,200\ DH}$.

**2)** $BF(A) = 16\,A + 61\,200$ ; $BF(4\,000) = 64\,000 + 61\,200 = \mathbf{125\,200\ DH}$.

**3)** $C_s = 125\,200 / 4\,000 = \mathbf{31{,}30\ DH}$ l'heure ($16 + 61\,200/4\,000 = 16 + 15{,}30$).

</details>
`,
    qcm: [
      { q: "Un coût standard est :", choix: ["Un coût réel constaté", "Un coût préétabli par une analyse technique et économique", "Le prix de vente", "Le coût historique moyen"], bonne: 1, explication: "Il sert de référence pour le contrôle." },
      { q: "Le type de standard le plus recommandé est :", choix: ["Le standard idéal", "Le standard normal", "Le standard historique", "Aucun standard"], bonne: 1, explication: "Exigeant mais atteignable, donc motivant." },
      { q: "Le coût standard d'un élément est égal à :", choix: ["Quantité réelle × prix réel", "Quantité standard × prix standard", "Quantité réelle × prix standard", "Prix standard / quantité standard"], bonne: 1, explication: "C'est la base de la fiche de coût standard." },
      { q: "Le budget flexible d'un centre est :", choix: ["Un budget fixe quel que soit le volume", "Le montant prévu des charges pour différents niveaux d'activité", "Le budget des ventes", "Le coût réel du centre"], bonne: 1, explication: "BF(A) = CVu × A + CF." },
      { q: "CF 80 000 DH, CVu 20 DH, activité normale 4 000 h. Coût standard de l'heure ?", choix: ["20 DH", "40 DH", "25 DH", "60 DH"], bonne: 1, explication: "20 + 80 000 / 4 000 = 40 DH." },
      { q: "Le coût standard de l'unité d'œuvre est calculé à :", choix: ["L'activité réelle", "L'activité normale", "L'activité maximale", "L'activité nulle"], bonne: 1, explication: "Pour neutraliser les variations d'activité." },
      { q: "Pour contrôler un atelier, on compare le coût réel :", choix: ["Au budget de la production prévue", "Au coût préétabli de la production réelle", "Au chiffre d'affaires", "Au coût de l'année précédente"], bonne: 1, explication: "On compare ce qui est comparable : la même production." },
      { q: "Coût standard unitaire 50 DH, production réelle 2 000 unités, coût réel 104 000 DH. Écart global ?", choix: ["4 000 DH favorable", "4 000 DH défavorable", "104 000 DH", "0"], bonne: 1, explication: "104 000 − 100 000 = + 4 000 DH : défavorable." },
      { q: "Pour une charge, un écart réel − prévu positif est :", choix: ["Favorable", "Défavorable", "Neutre", "Impossible"], bonne: 1, explication: "On a dépensé plus que prévu." },
      { q: "Les quantités standards de main-d'œuvre sont en général fixées par :", choix: ["Le service achats", "Des études de temps du bureau des méthodes", "Le commissaire aux comptes", "Les clients"], bonne: 1, explication: "Chronométrage, temps de référence." },
    ],
  },

  3: {
    titre: "L'analyse des écarts sur charges directes",
    description: "Écarts sur charges directes : quantité et prix des matières, temps et taux de main-d'œuvre, écart mixte, interprétation et exercices corrigés.",
    resume: md`
## L'essentiel — Écarts sur charges directes

- **Écart global** $= Q_r P_r - Q_p P_p$, avec $Q_p$ = quantité préétablie pour la **production réelle**.
- Matières : **E/Q** $= (Q_r - Q_p) \times P_p$ (production) ; **E/P** $= (P_r - P_p) \times Q_r$ (achats). $E/Q + E/P = E_G$.
- Main-d'œuvre : **écart sur temps (rendement)** $= (H_r - H_p) \times T_p$ ; **écart sur taux** $= (T_r - T_p) \times H_r$.
- Pour une charge : écart **positif = défavorable**, négatif = favorable.
- Décomposition en trois : quantité pur $(Q_r - Q_p)P_p$, prix pur $(P_r - P_p)Q_p$, **mixte** $(Q_r - Q_p)(P_r - P_p)$ ; la méthode usuelle rattache le mixte à l'écart sur prix.
- Avec des stocks, l'écart sur prix peut être calculé **à l'achat** (quantités achetées).
- Responsables : quantités et rendement → **production** ; prix → **achats** ; taux → **RH/direction**.
- Les écarts sont **liés** (matière bon marché mais de mauvaise qualité, ouvriers moins payés mais moins productifs) : les analyser ensemble.
`,
    exercices: md`
### Exercice 2 — Écart sur prix calculé à l'achat

Une entreprise de Kénitra fabrique un produit qui demande 5 kg de matière M au prix standard de 12 DH le kg. En juin, elle achète 5 000 kg de M à 11,40 DH, en consomme 4 600 kg et fabrique 900 unités. Le stock est tenu au prix standard.

1. Calculez l'écart sur prix à l'achat et l'écart sur quantité.
2. Quel aurait été l'écart sur prix calculé sur les quantités consommées ? Quel est l'intérêt de le calculer à l'achat ?

<details><summary>Voir le corrigé</summary>

**1)** $Q_p = 900 \times 5 = 4\,500$ kg.
- Écart sur prix à l'achat : $(11{,}40 - 12) \times 5\,000 = \mathbf{-\,3\,000\ DH}$ (favorable) ;
- Écart sur quantité : $(4\,600 - 4\,500) \times 12 = \mathbf{+\,1\,200\ DH}$ (défavorable).

**2)** Sur les quantités consommées : $(11{,}40 - 12) \times 4\,600 = -\,2\,760$ DH. Le calcul à l'achat mesure la performance de l'acheteur **dès l'achat**, sur tout ce qu'il a acheté, sans attendre la consommation ; les 400 kg restants entrent en stock au prix standard (4 800 DH), ce qui simplifie la valorisation des sorties.

</details>

### Exercice 3 — Revalorisation salariale et écarts sur main-d'œuvre

Standard : 2 heures de MOD à 30 DH par unité. Production réelle : 1 500 unités, pour 3 150 heures payées 31,50 DH, après une revalorisation des salaires décidée par la direction en début d'année.

1. Calculez l'écart global, l'écart sur temps et l'écart sur taux.
2. Présentez la décomposition en trois écarts (temps pur, taux pur, mixte).
3. Le chef d'atelier doit-il être tenu responsable de l'écart sur taux ? Que faut-il faire du standard ?

<details><summary>Voir le corrigé</summary>

**1)** $H_p = 1\,500 \times 2 = 3\,000$ h. Coût réel $3\,150 \times 31{,}50 = 99\,225$ DH ; préétabli $3\,000 \times 30 = 90\,000$ DH ; écart global **+ 9 225 DH (D)**.
- Écart sur temps : $(3\,150 - 3\,000) \times 30 = \mathbf{+\,4\,500}$ (D) ;
- Écart sur taux : $(31{,}50 - 30) \times 3\,150 = \mathbf{+\,4\,725}$ (D) ; total 9 225 ✔.

**2)** Temps pur $= 150 \times 30 = 4\,500$ ; taux pur $= 1{,}50 \times 3\,000 = 4\,500$ ; mixte $= 150 \times 1{,}50 = 225$ ; total 9 225 ✔.

**3)** Non : l'écart sur taux résulte d'une **décision de la direction** (revalorisation), que le chef d'atelier ne maîtrise pas (principe de contrôlabilité). Il ne répond que de l'écart sur temps (150 heures en trop). Le standard de taux doit être **révisé** (31,50 DH) pour que les écarts futurs aient un sens.

</details>
`,
    qcm: [
      { q: "L'écart sur quantité de matières se calcule par :", choix: ["(Qr − Qp) × Pr", "(Qr − Qp) × Pp", "(Pr − Pp) × Qp", "Qr × Pr − Qp × Pp"], bonne: 1, explication: "Il est valorisé au prix standard." },
      { q: "L'écart sur prix se calcule par :", choix: ["(Pr − Pp) × Qr", "(Pr − Pp) × Qp", "(Qr − Qp) × Pp", "Pr × Qr"], bonne: 0, explication: "Sur les quantités réelles (méthode usuelle)." },
      { q: "Qp désigne :", choix: ["La quantité prévue au budget initial", "La quantité standard pour la production réelle", "La quantité achetée", "La quantité en stock"], bonne: 1, explication: "Quantité standard unitaire × production réelle." },
      { q: "Heures réelles 2 100, heures préétablies 2 000, taux standard 40 DH. Écart sur temps ?", choix: ["4 000 DH favorable", "4 000 DH défavorable", "100 DH", "84 000 DH"], bonne: 1, explication: "(2 100 − 2 000) × 40 = + 4 000 DH : défavorable." },
      { q: "Un écart sur taux horaire de − 1 200 DH est :", choix: ["Défavorable", "Favorable", "Nul", "Un écart sur quantité"], bonne: 1, explication: "Pour une charge, un écart négatif est favorable." },
      { q: "L'écart mixte est égal à :", choix: ["(Qr − Qp) × Pp", "(Qr − Qp) × (Pr − Pp)", "(Pr − Pp) × Qp", "Qp × Pp"], bonne: 1, explication: "C'est l'effet combiné des deux variations." },
      { q: "Le principal responsable d'un écart sur prix des matières est :", choix: ["Le chef d'atelier", "Le service achats", "Le service commercial", "Le contrôleur de gestion"], bonne: 1, explication: "Il négocie les prix d'achat." },
      { q: "Une matière achetée moins cher mais de moindre qualité peut entraîner :", choix: ["Un écart sur quantité favorable", "Un écart sur quantité défavorable", "Aucun écart", "Un écart sur taux"], bonne: 1, explication: "Plus de gaspillage ou un moindre rendement." },
      { q: "La somme E/Q + E/P est égale :", choix: ["À l'écart mixte", "À l'écart global", "Au coût réel", "Au coût standard"], bonne: 1, explication: "C'est la vérification obligatoire." },
      { q: "Production 500 unités, standard 3 kg par unité, consommation réelle 1 450 kg. L'écart sur quantité (prix standard 10 DH) est :", choix: ["+ 500 DH défavorable", "− 500 DH favorable", "− 50 DH", "+ 14 500 DH"], bonne: 1, explication: "Qp = 1 500 ; (1 450 − 1 500) × 10 = − 500 DH : favorable." },
    ],
  },

  4: {
    titre: "L'analyse des écarts sur charges indirectes",
    description: "Écarts sur charges indirectes d'un centre : budget flexible, écart sur budget, écart sur activité (sous-activité) et écart sur rendement, exercices corrigés.",
    resume: md`
## L'essentiel — Écarts sur charges indirectes

- Trois activités : **réelle** $A_R$ (UO consommées), **préétablie** $A_P$ (UO standard × production réelle), **normale** $A_N$ (base du coût standard).
- Coût standard de l'UO : $C_s = CV_u + CF / A_N$ ; budget flexible $BF(A) = CV_u A + CF$.
- **Écart global** $= C_R - C_s \times A_P$.
- **Écart sur budget** $= C_R - BF(A_R)$ : maîtrise des dépenses (chef de centre, achats).
- **Écart sur activité** $= BF(A_R) - C_s A_R = CF\,(1 - A_R/A_N)$ : coût de sous-activité (D) ou boni de suractivité (F) ; lié au volume de commandes.
- **Écart sur rendement** $= C_s\,(A_R - A_P)$ : efficience du centre (production).
- Vérification : budget + activité + rendement = écart global.
- Méthode sûre : tableau à 4 lignes (coût réel, $BF(A_R)$, $C_s A_R$, $C_s A_P$), chaque écart = différence de deux lignes successives.
`,
    exercices: md`
### Exercice 2 — Un centre en suractivité

Le centre Assemblage d'une entreprise de Mohammedia a pour unité d'œuvre l'heure de main-d'œuvre directe. Budget mensuel : charges fixes 120 000 DH, charges variables 18 DH par heure, activité normale 8 000 heures. Standard : 2 heures par produit.

En octobre : 4 200 produits fabriqués, 8 600 heures effectuées, coût réel du centre 282 000 DH.

1. Calculez le coût standard de l'heure, l'activité préétablie et l'écart global.
2. Décomposez l'écart global et interprétez.

<details><summary>Voir le corrigé</summary>

**1)** $C_s = 18 + 120\,000 / 8\,000 = \mathbf{33\ DH}$ ; $A_P = 4\,200 \times 2 = \mathbf{8\,400\ h}$ ; $E_G = 282\,000 - 33 \times 8\,400 = 282\,000 - 277\,200 = \mathbf{+\,4\,800\ DH}$ (D).

**2)** $BF(8\,600) = 18 \times 8\,600 + 120\,000 = 274\,800$ ; $C_s A_R = 33 \times 8\,600 = 283\,800$.

| Écart | Calcul | Montant | Sens |
|---|---|---:|---|
| Sur budget | $282\,000 - 274\,800$ | + 7 200 | D |
| Sur activité | $274\,800 - 283\,800$ | − 9 000 | F (suractivité) |
| Sur rendement | $33 \times (8\,600 - 8\,400)$ | + 6 600 | D |
| **Total** | | **+ 4 800** | **D** ✔ |

Le centre a travaillé au-delà de son activité normale (boni de suractivité de 9 000 DH : $120\,000 \times (1 - 8\,600/8\,000)$), mais il a dépensé plus que son budget flexible (+ 7 200 DH) et a manqué de rendement : 200 heures de trop pour la production obtenue. La suractivité (heures supplémentaires, fatigue) peut d'ailleurs expliquer la baisse de rendement.

</details>

### Exercice 3 — Retrouver les données à partir des écarts

Un centre a un coût standard de 40 DH par unité d'œuvre, dont 16 DH de charges fixes, calculé pour une activité normale de 5 000 UO. Le standard est de 2 UO par produit. Pour le mois, on connaît : écart sur activité + 3 200 DH ; écart sur rendement − 4 000 DH ; écart sur budget + 1 500 DH.

1. Calculez les charges fixes et la charge variable par UO.
2. Retrouvez l'activité réelle, l'activité préétablie, la production réelle et le coût réel du centre.
3. Calculez l'écart global et vérifiez.

<details><summary>Voir le corrigé</summary>

**1)** $CF = 16 \times 5\,000 = \mathbf{80\,000\ DH}$ ; $CV_u = 40 - 16 = \mathbf{24\ DH}$.

**2)**
- Écart sur activité : $80\,000 \times (1 - A_R/5\,000) = 3\,200$, donc $A_R / 5\,000 = 0{,}96$ et $A_R = \mathbf{4\,800\ UO}$ ;
- Écart sur rendement : $40 \times (4\,800 - A_P) = -\,4\,000$, donc $A_P = \mathbf{4\,900\ UO}$ ; production réelle $= 4\,900 / 2 = \mathbf{2\,450}$ produits ;
- Coût réel : $C_R = BF(4\,800) + 1\,500 = 24 \times 4\,800 + 80\,000 + 1\,500 = \mathbf{196\,700\ DH}$.

**3)** $E_G = 196\,700 - 40 \times 4\,900 = 196\,700 - 196\,000 = \mathbf{+\,700\ DH}$ ; et $1\,500 + 3\,200 - 4\,000 = 700$ ✔.

</details>
`,
    qcm: [
      { q: "L'activité préétablie est égale à :", choix: ["L'activité normale", "Les UO standard par produit × production réelle", "Les UO réellement consommées", "La capacité maximale"], bonne: 1, explication: "C'est l'activité qui aurait dû être nécessaire pour la production obtenue." },
      { q: "L'écart sur budget compare le coût réel :", choix: ["Au coût standard de l'activité préétablie", "Au budget flexible de l'activité réelle", "Au budget de l'activité normale", "Au coût de l'année précédente"], bonne: 1, explication: "Il mesure la maîtrise des dépenses pour l'activité réalisée." },
      { q: "L'écart sur activité est égal à :", choix: ["CV × (AR − AP)", "CF × (1 − AR / AN)", "Cs × (AR − AP)", "CR − BF(AR)"], bonne: 1, explication: "Il ne concerne que les charges fixes." },
      { q: "CF 60 000 DH, AN 3 000 h, AR 2 700 h. Écart sur activité ?", choix: ["6 000 DH favorable", "6 000 DH défavorable", "600 DH défavorable", "54 000 DH"], bonne: 1, explication: "60 000 × (1 − 0,9) = + 6 000 DH : coût de sous-activité." },
      { q: "L'écart sur rendement est égal à :", choix: ["Cs × (AR − AP)", "Cs × (AN − AR)", "CR − Cs × AR", "CF × AR / AN"], bonne: 0, explication: "Il mesure l'efficience du centre." },
      { q: "Le principal responsable d'un écart sur activité défavorable est souvent :", choix: ["Le chef d'atelier", "La direction commerciale ou générale (manque de commandes)", "Le service achats", "Le comptable"], bonne: 1, explication: "La sous-activité vient d'un volume insuffisant." },
      { q: "Si l'activité réelle dépasse l'activité normale, l'écart sur activité est :", choix: ["Défavorable", "Favorable (boni de suractivité)", "Nul", "Égal à l'écart global"], bonne: 1, explication: "Les charges fixes sont absorbées par plus d'unités." },
      { q: "Cs = 50 DH, AR = 1 900 UO, AP = 2 000 UO. Écart sur rendement ?", choix: ["+ 5 000 DH D", "− 5 000 DH F", "− 100 DH", "95 000 DH"], bonne: 1, explication: "50 × (1 900 − 2 000) = − 5 000 DH : favorable." },
      { q: "La somme des trois écarts sur charges indirectes est égale :", choix: ["Au coût réel", "À l'écart global", "Au budget flexible", "À l'écart sur activité"], bonne: 1, explication: "C'est la vérification obligatoire." },
      { q: "Les charges variables d'un centre créent-elles un écart sur activité ?", choix: ["Oui, toujours", "Non, seules les charges fixes en créent", "Seulement en suractivité", "Seulement si AR = AN"], bonne: 1, explication: "Le budget flexible ajuste déjà les charges variables à l'activité." },
    ],
  },

  5: {
    titre: "La gestion budgétaire des ventes et de la production",
    description: "Hiérarchie des budgets, prévision des ventes par moindres carrés et coefficients saisonniers, programme de production, facteur rare et approvisionnements.",
    resume: md`
## L'essentiel — Budgets des ventes et de la production

- **Budget** : plan d'action chiffré à court terme, confié à un responsable. Gestion budgétaire = budgétisation + suivi + contrôle budgétaire.
- **Hiérarchie** : ventes → production → approvisionnements → charges → investissements → trésorerie → documents prévisionnels. Procédure : lettre de cadrage, projets, négociation, validation, mensualisation.
- **Moindres carrés** : $a = \dfrac{\sum (x_i - \bar x)(y_i - \bar y)}{\sum (x_i - \bar x)^2}$, $b = \bar y - a\bar x$, prévision $\hat y = a x + b$.
- **Coefficients saisonniers** (somme = nombre de périodes) : prévision trimestrielle = prévision annuelle / 4 × coefficient.
- **Production = ventes + stock final souhaité − stock initial** ; vérifier les **capacités** (lissage, stock anticipé, heures supplémentaires, sous-traitance).
- **Facteur rare** : priorité au produit qui a la plus forte **marge sur coût variable par unité de facteur rare**.
- **Approvisionnements** : achats = consommations + stock final − stock initial ; stock d'alerte ; Wilson $Q^* = \sqrt{2DC_p / C_s}$.
`,
    exercices: md`
### Exercice 2 — Calculer des coefficients saisonniers

Une entreprise de fournitures scolaires de Casablanca a vendu (en milliers d'unités) :

| | T1 | T2 | T3 | T4 | Total |
|---|---:|---:|---:|---:|---:|
| Année 1 | 80 | 120 | 150 | 90 | 440 |
| Année 2 | 88 | 132 | 162 | 98 | 480 |

1. Calculez les coefficients saisonniers par la méthode des moyennes (moyenne du trimestre / moyenne générale).
2. La prévision de l'année 3 est de 520 milliers d'unités. Répartissez-la par trimestre.

<details><summary>Voir le corrigé</summary>

**1)** Moyennes par trimestre : T1 84 ; T2 126 ; T3 156 ; T4 94. Moyenne générale : $920 / 8 = 115$.

Coefficients : T1 $84/115 \approx \mathbf{0{,}730}$ ; T2 $126/115 \approx \mathbf{1{,}096}$ ; T3 $156/115 \approx \mathbf{1{,}357}$ ; T4 $94/115 \approx \mathbf{0{,}817}$ ; somme = 4 ✔.

**2)** Moyenne trimestrielle : $520 / 4 = 130$. T1 ≈ **94,96** ; T2 ≈ **142,43** ; T3 ≈ **176,35** ; T4 ≈ **106,26** milliers d'unités (total 520 ✔). Le troisième trimestre (rentrée scolaire) représente plus du tiers des ventes.

</details>

### Exercice 3 — Choisir la production avec un facteur rare

Un atelier de Fès dispose de 10 000 heures-machine par trimestre. Il fabrique deux produits :

| | A | B |
|---|---:|---:|
| Marge sur coût variable unitaire | 60 DH | 90 DH |
| Heures-machine par unité | 2 | 4 |
| Demande maximale du trimestre | 3 000 | 2 000 |

1. Les heures disponibles suffisent-elles à satisfaire toute la demande ?
2. Quel programme maximise la marge ? Comparez avec un programme qui privilégierait B.

<details><summary>Voir le corrigé</summary>

**1)** Besoin : $3\,000 \times 2 + 2\,000 \times 4 = 14\,000$ h > 10 000 h : la capacité est un **facteur rare**.

**2)** Marge par heure-machine : A $= 60/2 = 30$ DH ; B $= 90/4 = 22{,}50$ DH. Priorité à **A** : 3 000 unités (6 000 h), puis B avec les 4 000 h restantes : 1 000 unités.
- Marge : $3\,000 \times 60 + 1\,000 \times 90 = \mathbf{270\,000\ DH}$.
- En privilégiant B (marge unitaire plus forte) : 2 000 B (8 000 h) + 1 000 A (2 000 h) = $180\,000 + 60\,000 = 240\,000$ DH, soit 30 000 DH de moins.

</details>
`,
    qcm: [
      { q: "Le premier budget établi dans la hiérarchie budgétaire est en général :", choix: ["Le budget de trésorerie", "Le budget des ventes", "Le budget des investissements", "Le bilan prévisionnel"], bonne: 1, explication: "Les ventes sont la contrainte principale." },
      { q: "Production = ", choix: ["Ventes − stock final + stock initial", "Ventes + stock final − stock initial", "Ventes + stock initial", "Stock final − ventes"], bonne: 1, explication: "On produit ce qu'on vend, plus ce qu'on veut garder en stock, moins ce qu'on a déjà." },
      { q: "Dans la méthode des moindres carrés, b est égal à :", choix: ["ȳ − a x̄", "ȳ + a x̄", "a / x̄", "Σy / n"], bonne: 0, explication: "La droite passe par le point moyen." },
      { q: "La somme des coefficients saisonniers trimestriels doit être égale à :", choix: ["1", "4", "12", "100"], bonne: 1, explication: "Leur moyenne vaut 1." },
      { q: "Prévision annuelle 200 000, coefficient du T3 = 1,2. Prévision du T3 ?", choix: ["240 000", "60 000", "50 000", "166 667"], bonne: 1, explication: "200 000 / 4 × 1,2 = 60 000." },
      { q: "En présence d'un facteur rare, on privilégie le produit qui a :", choix: ["La plus forte marge unitaire", "La plus forte marge par unité de facteur rare", "Le prix le plus élevé", "La plus forte demande"], bonne: 1, explication: "C'est l'unité de facteur rare qui limite la production." },
      { q: "La lettre de cadrage budgétaire est émise par :", choix: ["Les chefs d'atelier", "La direction générale", "Les clients", "Le commissaire aux comptes"], bonne: 1, explication: "Elle fixe les hypothèses et les objectifs." },
      { q: "Achats = ", choix: ["Consommations + stock final − stock initial", "Consommations − stock final", "Production × prix", "Ventes − stocks"], bonne: 0, explication: "Même logique que pour la production." },
      { q: "D = 12 000 unités, Cp = 500 DH, Cs = 3 DH. Quantité économique ?", choix: ["2 000", "4 000", "1 000", "6 000"], bonne: 0, explication: "√(2 × 12 000 × 500 / 3) = √4 000 000 = 2 000." },
      { q: "Lisser la production d'une activité saisonnière implique :", choix: ["Aucun stock", "Des stocks constitués en basse saison", "Des capacités doublées", "L'arrêt des ventes"], bonne: 1, explication: "On produit régulièrement et on stocke pour la haute saison." },
    ],
  },

  6: {
    titre: "Le budget de trésorerie",
    description: "Budget de trésorerie mensuel : encaissements, décaissements, budget de TVA, crédit de TVA, trésorerie prévisionnelle et ajustements, exercices corrigés.",
    resume: md`
## L'essentiel — Le budget de trésorerie

- Dernier maillon de la chaîne budgétaire : il traduit les autres budgets en **encaissements** et **décaissements**, mois par mois.
- Objectifs : **anticiper** les besoins, **placer** les excédents, **vérifier** la cohérence des budgets.
- Ordre : budget des encaissements → **budget de TVA** → budget des décaissements → budget de trésorerie.
- **Trésorerie fin = trésorerie début + encaissements − décaissements.**
- Tout en **TTC** pour les opérations soumises à TVA ; **jamais** d'amortissements ni de provisions ; ne pas oublier les créances et dettes du **bilan d'ouverture**.
- **TVA due** = collectée − déductible (y compris sur immobilisations) − crédit reporté ; payée le **mois suivant** (déclaration mensuelle). Taux normal : 20 %.
- Au Maroc, TVA en principe exigible à l'**encaissement**, option possible pour les **débits** (hypothèse à préciser).
- Trésorerie négative : découvert, crédit de campagne, escompte, affacturage (ponctuel) ; réduction du BFR, emprunt, crédit-bail, capital (durable).
- Les soldes non encaissés ou non payés (créances, dettes, TVA due) passent au **bilan prévisionnel**.
`,
    exercices: md`
### Exercice 2 — Budget de TVA avec crédit de TVA

Une entreprise de Salé prévoit (en DH) :

| | Mois 1 | Mois 2 | Mois 3 |
|---|---:|---:|---:|
| TVA collectée | 60 000 | 70 000 | 80 000 |
| TVA déductible sur achats et charges | 40 000 | 45 000 | 48 000 |
| TVA déductible sur immobilisations | 50 000 | — | — |

1. Établissez le budget de TVA et indiquez les montants à payer et leur mois de paiement (paiement le mois suivant).
2. Pourquoi un investissement peut-il améliorer temporairement la trésorerie liée à la TVA ?

<details><summary>Voir le corrigé</summary>

**1)**

| | Mois 1 | Mois 2 | Mois 3 |
|---|---:|---:|---:|
| TVA collectée | 60 000 | 70 000 | 80 000 |
| − TVA déductible (achats, charges) | 40 000 | 45 000 | 48 000 |
| − TVA déductible (immobilisations) | 50 000 | — | — |
| − Crédit de TVA reporté | — | 30 000 | 5 000 |
| **= TVA due (crédit si négatif)** | **crédit 30 000** | **crédit 5 000** | **27 000** |

Aucun paiement aux mois 2 et 3 ; **27 000 DH** payés au mois 4.

**2)** La TVA payée au fournisseur de l'équipement est **récupérée** par imputation sur la TVA collectée des mois suivants : l'entreprise n'en supporte le coût que pendant quelques semaines. Mais elle doit d'abord décaisser le prix TTC : c'est un besoin de trésorerie temporaire, qui se résorbe au fil des déclarations.

</details>

### Exercice 3 — Encaissements avec plusieurs délais

Une entreprise de Tétouan encaisse ses ventes à 30 % au comptant, 50 % à 30 jours et 20 % à 60 jours. Ventes TTC prévues : janvier 360 000 DH ; février 420 000 DH ; mars 480 000 DH. Au 31 décembre, les créances clients s'élèvent à 291 000 DH : 60 000 DH sur les ventes de novembre (encaissables en janvier) et 231 000 DH sur les ventes de décembre (165 000 DH en janvier, 66 000 DH en février).

1. Établissez le budget des encaissements de janvier à mars.
2. Calculez les créances clients au 31 mars et vérifiez.

<details><summary>Voir le corrigé</summary>

**1)**

| | Janvier | Février | Mars |
|---|---:|---:|---:|
| Créances de novembre | 60 000 | | |
| Créances de décembre | 165 000 | 66 000 | |
| Ventes de janvier (360 000) | 108 000 | 180 000 | 72 000 |
| Ventes de février (420 000) | | 126 000 | 210 000 |
| Ventes de mars (480 000) | | | 144 000 |
| **Total** | **333 000** | **372 000** | **426 000** |

**2)** Créances au 31 mars : 20 % des ventes de février ($84\,000$) + 70 % des ventes de mars ($336\,000$) $= \mathbf{420\,000\ DH}$.
Vérification : $291\,000 + (360\,000 + 420\,000 + 480\,000) - (333\,000 + 372\,000 + 426\,000) = 291\,000 + 1\,260\,000 - 1\,131\,000 = 420\,000$ ✔.

</details>
`,
    qcm: [
      { q: "Le budget de trésorerie est établi :", choix: ["En premier dans la hiérarchie budgétaire", "En dernier, à partir des autres budgets", "Uniquement en fin d'année", "Sans tenir compte des ventes"], bonne: 1, explication: "Il traduit tous les budgets en flux monétaires." },
      { q: "Dans le budget de trésorerie, les ventes sont retenues :", choix: ["HT", "TTC", "Au coût de revient", "Hors délais"], bonne: 1, explication: "Le client paie le prix TTC." },
      { q: "Les dotations aux amortissements figurent dans le budget de trésorerie :", choix: ["En décaissements", "En encaissements", "Jamais", "Seulement en décembre"], bonne: 2, explication: "Ce sont des charges calculées, sans flux de trésorerie." },
      { q: "TVA collectée 50 000, TVA déductible 35 000. TVA due :", choix: ["85 000", "15 000", "35 000", "− 15 000"], bonne: 1, explication: "50 000 − 35 000 = 15 000, payée le mois suivant." },
      { q: "Un crédit de TVA apparaît lorsque :", choix: ["La TVA collectée dépasse la TVA déductible", "La TVA déductible dépasse la TVA collectée", "Les ventes augmentent", "L'entreprise ne vend rien à crédit"], bonne: 1, explication: "Il est reporté sur les mois suivants." },
      { q: "Ventes TTC de mars 600 000 DH, 40 % au comptant et 60 % à 30 jours. Encaissement de mars sur ces ventes ?", choix: ["600 000", "240 000", "360 000", "0"], bonne: 1, explication: "40 % × 600 000 = 240 000 ; le reste en avril." },
      { q: "Une trésorerie négative ponctuelle se finance plutôt par :", choix: ["Une augmentation de capital", "Un découvert ou un crédit de campagne", "Un emprunt à 15 ans", "La vente de l'usine"], bonne: 1, explication: "Un besoin court appelle un financement court." },
      { q: "Les créances clients du bilan d'ouverture :", choix: ["Sont ignorées", "Sont encaissées pendant la période budgétée", "Sont des décaissements", "Vont en capitaux propres"], bonne: 1, explication: "Elles alimentent les premiers encaissements." },
      { q: "Au Maroc, sauf option, la TVA est exigible :", choix: ["À la commande", "À l'encaissement", "À la livraison uniquement", "En fin d'année"], bonne: 1, explication: "L'option pour les débits est possible." },
      { q: "La trésorerie de fin de mois est égale à :", choix: ["Encaissements − décaissements", "Trésorerie de début + encaissements − décaissements", "Résultat du mois", "Ventes − achats"], bonne: 1, explication: "On part de la trésorerie disponible en début de mois." },
    ],
  },

  7: {
    titre: "Les tableaux de bord de gestion",
    description: "Tableaux de bord de gestion : indicateurs financiers et non financiers, démarche OVAR, présentation, balanced scorecard de Kaplan et Norton, exercices corrigés.",
    resume: md`
## L'essentiel — Les tableaux de bord

- **Tableau de bord** : quelques indicateurs (5 à 10), financiers **et** non financiers, **rapides**, **personnalisés**, orientés vers l'**action**.
- Différences : le budget contrôle en valeurs après clôture ; le **reporting** rend compte à la hiérarchie ; le tableau de bord sert à **piloter**.
- Indicateurs de **résultat** (après coup) et de **pilotage** (avancés, pour agir avant).
- Qualités : pertinent, mesurable, fiable, compréhensible, rapide, peu coûteux, **maîtrisable** par le responsable.
- Démarche **OVAR** : Objectifs → Variables d'action (facteurs clés de succès) → Responsables → indicateurs et cibles.
- Présentation : réalisé, objectif, écart, **feux tricolores**, tendances, commentaires et actions.
- **Balanced scorecard** (Kaplan et Norton) : axes **financier**, **clients**, **processus internes**, **apprentissage organisationnel**, reliés par des relations de cause à effet (carte stratégique).
- Exemples : RevPAR = taux d'occupation × prix moyen ; TRS = disponibilité × performance × qualité.
- Limites : trop d'indicateurs, indicateurs non maîtrisables, effets pervers.
`,
    exercices: md`
### Exercice 2 — Choisir les indicateurs d'un directeur d'usine

Le directeur d'une usine de câblage automobile de Kénitra a trois objectifs : respecter les délais de livraison du constructeur, réduire les coûts de production de 5 %, garantir un niveau de qualité « zéro défaut ».

1. Proposez deux indicateurs par objectif, en distinguant indicateurs de résultat et de pilotage.
2. Proposez un indicateur par axe du balanced scorecard.

<details><summary>Voir le corrigé</summary>

**1)**

| Objectif | Indicateur de résultat | Indicateur de pilotage |
|---|---|---|
| Délais | Taux de livraisons à l'heure (%) | Retard du planning de production (heures), taux de disponibilité des composants |
| Coûts | Coût de production par faisceau (DH) | Taux de rebut, heures supplémentaires, TRS des machines |
| Qualité | Nombre de pièces défectueuses par million (ppm) chez le client | Taux de défauts détectés en contrôle interne, heures de formation qualité |

**2)** Financier : coût par faisceau ou marge par contrat. Clients : taux de service (livraisons à l'heure), ppm client. Processus internes : TRS, taux de rebut. Apprentissage : heures de formation par opérateur, taux de rotation du personnel (élevé dans ce secteur, il dégrade la qualité).

</details>

### Exercice 3 — Calculer un taux de rendement synthétique (TRS)

Une machine de découpe est ouverte 480 minutes par jour. Elle a subi 60 minutes d'arrêts (pannes, changements de série). Sa cadence nominale est d'une pièce par minute. Elle a produit 378 pièces, dont 360 bonnes.

1. Calculez le taux de disponibilité, le taux de performance et le taux de qualité.
2. Calculez le TRS et vérifiez-le par un calcul direct.
3. Quel levier d'amélioration est prioritaire ?

<details><summary>Voir le corrigé</summary>

**1)** Temps de fonctionnement : $480 - 60 = 420$ min.
- Disponibilité : $420 / 480 = \mathbf{87{,}5\,\%}$ ;
- Performance : $378 / 420 = \mathbf{90\,\%}$ (la machine aurait pu produire 420 pièces en 420 minutes) ;
- Qualité : $360 / 378 \approx \mathbf{95{,}2\,\%}$.

**2)** $TRS = 0{,}875 \times 0{,}90 \times 0{,}952 \approx \mathbf{75\,\%}$. Calcul direct : pièces bonnes / pièces possibles sur le temps d'ouverture $= 360 / 480 = 75\,\%$ ✔.

**3)** La plus grosse perte vient de la **disponibilité** (60 minutes d'arrêt, soit 12,5 %) : réduire les temps de changement de série (méthode SMED) et la maintenance préventive sont les leviers prioritaires.

</details>
`,
    qcm: [
      { q: "Un tableau de bord se caractérise d'abord par :", choix: ["L'exhaustivité des informations", "Un petit nombre d'indicateurs rapides, orientés action", "Des données uniquement financières", "Une publication annuelle"], bonne: 1, explication: "Il doit se lire en quelques secondes." },
      { q: "Un indicateur de pilotage (avancé) :", choix: ["Constate le résultat après coup", "Mesure un facteur qui prépare le résultat, pour agir à temps", "Est toujours financier", "Remplace le budget"], bonne: 1, explication: "Par exemple le taux de panne avant le coût de production." },
      { q: "Le reporting est destiné principalement :", choix: ["Au responsable lui-même", "À la hiérarchie ou à la maison mère", "Aux clients", "Aux fournisseurs"], bonne: 1, explication: "Il rend compte des résultats." },
      { q: "Les quatre axes du balanced scorecard sont :", choix: ["Ventes, achats, production, stocks", "Financier, clients, processus internes, apprentissage organisationnel", "Coûts, délais, qualité, prix", "Court, moyen, long terme, stratégie"], bonne: 1, explication: "Kaplan et Norton, 1992." },
      { q: "La démarche OVAR signifie :", choix: ["Objectifs, Variables d'Action, Responsables", "Organisation, Valeur, Analyse, Résultat", "Objectifs, Ventes, Achats, Rentabilité", "Opérations, Volumes, Actifs, Ratios"], bonne: 0, explication: "Elle relie les objectifs aux leviers d'action et aux responsables." },
      { q: "Hôtel de 100 chambres, 30 jours, 2 400 nuitées vendues à 800 DH. RevPAR ?", choix: ["800 DH", "640 DH", "2 400 DH", "80 %"], bonne: 1, explication: "Taux d'occupation 80 % × 800 = 640 DH." },
      { q: "Un bon indicateur doit être maîtrisable par le responsable car :", choix: ["C'est plus joli", "On ne peut juger quelqu'un que sur ce qu'il peut influencer", "Cela réduit les coûts", "La loi l'impose"], bonne: 1, explication: "Principe de contrôlabilité." },
      { q: "Un effet pervers d'indicateur est illustré par :", choix: ["Un indicateur de satisfaction", "Un centre d'appels jugé sur la durée des appels qui raccroche trop vite", "Un indicateur de ventes", "Un feu vert"], bonne: 1, explication: "L'indicateur dégrade la qualité qu'il devait servir." },
      { q: "Le taux de rendement synthétique (TRS) est :", choix: ["Disponibilité + performance + qualité", "Disponibilité × performance × qualité", "Pièces produites / pièces bonnes", "Temps d'arrêt / temps d'ouverture"], bonne: 1, explication: "Il combine les trois sources de pertes." },
      { q: "Dans le balanced scorecard, les heures de formation relèvent de l'axe :", choix: ["Financier", "Clients", "Processus internes", "Apprentissage organisationnel"], bonne: 3, explication: "Elles préparent la performance future." },
    ],
  },

  8: {
    titre: "Le seuil de rentabilité en contrôle de gestion",
    description: "Analyse coût-volume-profit pour le budget : résultat cible, simulations, volume d'indifférence, seuil multiproduit et mix, avec exercices corrigés.",
    resume: md`
## L'essentiel — Seuil de rentabilité et budget

- Modèle CVP : $R = Q \times m - CF$, avec $m = p - v$ ; $Q_{SR} = CF/m$ ; $SR = CF/t$.
- **Volume pour un résultat cible** : $Q^* = \dfrac{CF + R^*}{m}$ ; pour un résultat **net** : $R^* = RN^* / (1 - \tau)$.
- **Simulations** : baisse de prix ($m$ baisse), publicité ($CF$ monte : $\Delta Q = \Delta CF / m$), automatisation ($CF$ monte, $v$ baisse), hausse d'un coût ($v$ monte), commande spéciale (prix > $v$ ?).
- Volume d'équilibre après baisse de prix : $Q' = (CF + R)/m'$ ; **volume d'indifférence** entre deux structures : $Q = \dfrac{CF_2 - CF_1}{m_2 - m_1}$.
- **Multiproduit** : $t_{moyen} = \sum (\text{part du CA}) \times t_k$ ; un mix qui se dégrade relève le seuil.
- Risque : **marge et indice de sécurité**, **levier opérationnel** ($MCV/R$), analyse de sensibilité, scénarios.
- Limites : charges semi-variables, prix constant, mix constant, pas de stocks, zone de pertinence.
`,
    exercices: md`
### Exercice 2 — Trois décisions à tester

On reprend Oriental Céramique ($p = 250$ DH, $v = 150$ DH, $CF = 1\,200\,000$ DH, ventes 15 000 m², capacité 20 000 m²).

1. Une campagne publicitaire coûterait 150 000 DH. Combien de m² supplémentaires doit-elle faire vendre pour être rentable ?
2. Un promoteur immobilier propose d'acheter 2 000 m² à 180 DH, sans effet sur les autres ventes. Faut-il accepter ?
3. Le prix de l'argile augmente : le coût variable passe à 160 DH. Calculez le nouveau seuil et le résultat. Quel prix de vente permettrait de garder un résultat de 300 000 DH ?

<details><summary>Voir le corrigé</summary>

**1)** $150\,000 / 100 = \mathbf{1\,500\ m^2}$ supplémentaires au minimum (+ 10 % de ventes).

**2)** Marge par m² : $180 - 150 = 30$ DH ; gain : $2\,000 \times 30 = \mathbf{+\,60\,000\ DH}$. La capacité est disponible (15 000 + 2 000 < 20 000) et les charges fixes sont déjà couvertes : **accepter**, à condition que ce prix ne soit pas connu des clients habituels.

**3)** $m = 90$ DH ; seuil $= 1\,200\,000 / 90 \approx \mathbf{13\,333\ m^2}$ ; résultat $= 15\,000 \times 90 - 1\,200\,000 = \mathbf{150\,000\ DH}$. Pour 300 000 DH : $m = 1\,500\,000 / 15\,000 = 100$, donc $p = 160 + 100 = \mathbf{260\ DH}$ (hausse de 4 % à répercuter).

</details>

### Exercice 3 — Quand le mix de ventes se dégrade

Une entreprise vend deux produits : A (taux de MCV 40 %) et B (taux de MCV 25 %). Ses charges fixes s'élèvent à 850 000 DH et son CA budgété à 3 000 000 DH, réparti à 60 % pour A et 40 % pour B.

1. Calculez le taux de MCV moyen, le seuil de rentabilité et le résultat budgétés.
2. En fin d'année, le CA est bien de 3 000 000 DH, mais réparti à 40 % pour A et 60 % pour B. Recalculez. Commentez.

<details><summary>Voir le corrigé</summary>

**1)** $t = 0{,}6 \times 40\,\% + 0{,}4 \times 25\,\% = \mathbf{34\,\%}$ ; $SR = 850\,000 / 0{,}34 = \mathbf{2\,500\,000\ DH}$ ; résultat $= 0{,}34 \times 3\,000\,000 - 850\,000 = \mathbf{170\,000\ DH}$.

**2)** $t = 0{,}4 \times 40\,\% + 0{,}6 \times 25\,\% = \mathbf{31\,\%}$ ; $SR = 850\,000 / 0{,}31 \approx \mathbf{2\,741\,935\ DH}$ ; résultat $= 0{,}31 \times 3\,000\,000 - 850\,000 = \mathbf{80\,000\ DH}$.

À chiffre d'affaires identique, le résultat est divisé par plus de deux, parce que les ventes se sont déplacées vers le produit le moins rentable. C'est un **écart de composition** (chapitre 9) : le suivi du seul CA ne suffit pas, il faut suivre le mix.

</details>
`,
    qcm: [
      { q: "Pour atteindre un résultat avant impôt R*, il faut vendre :", choix: ["CF / m", "(CF + R*) / m", "R* / m", "(CF − R*) / m"], bonne: 1, explication: "La marge doit couvrir les charges fixes et le résultat visé." },
      { q: "Résultat net visé 160 000 DH, IS 20 %. Résultat avant impôt nécessaire ?", choix: ["128 000 DH", "200 000 DH", "192 000 DH", "160 000 DH"], bonne: 1, explication: "160 000 / 0,8 = 200 000 DH." },
      { q: "p = 100, v = 60, CF = 200 000. Une publicité de 40 000 DH doit faire vendre au moins :", choix: ["400 unités", "1 000 unités", "667 unités", "5 000 unités"], bonne: 1, explication: "40 000 / 40 = 1 000 unités." },
      { q: "Une baisse de prix est intéressante si :", choix: ["Le volume augmente, quelle que soit l'ampleur", "La hausse de volume compense la baisse de marge unitaire", "Les charges fixes baissent", "Le seuil baisse"], bonne: 1, explication: "Il faut comparer les MCV totales avant et après." },
      { q: "Structure 1 : m = 50, CF = 100 000 ; structure 2 : m = 70, CF = 160 000. Volume d'indifférence ?", choix: ["2 000", "3 000", "2 286", "1 000"], bonne: 1, explication: "(160 000 − 100 000) / (70 − 50) = 3 000." },
      { q: "Dans le cas multiproduit, le seuil se calcule avec :", choix: ["La moyenne simple des taux de marge", "Le taux de marge moyen pondéré par le mix des ventes", "Le taux du produit le plus rentable", "Le prix moyen"], bonne: 1, explication: "La pondération suit la part de chaque produit dans le CA." },
      { q: "Si la part du produit le moins rentable augmente, le seuil de rentabilité :", choix: ["Baisse", "Augmente", "Ne change pas", "Devient nul"], bonne: 1, explication: "Le taux de marge moyen diminue." },
      { q: "Un levier opérationnel de 4 signifie qu'une baisse de 5 % du CA entraîne :", choix: ["Une baisse de 5 % du résultat", "Une baisse de 20 % du résultat", "Une hausse de 20 %", "Une baisse de 4 %"], bonne: 1, explication: "4 × 5 % = 20 %." },
      { q: "Une limite du modèle CVP est qu'il suppose :", choix: ["Des charges toutes variables", "Un prix de vente constant quel que soit le volume", "Un résultat toujours positif", "L'absence de charges fixes"], bonne: 1, explication: "En réalité, vendre plus exige souvent des remises." },
      { q: "Une commande spéciale doit être acceptée (capacité libre, sans effet sur les autres ventes) si son prix est :", choix: ["Supérieur au coût complet", "Supérieur au coût variable", "Égal au prix habituel", "Inférieur au coût variable"], bonne: 1, explication: "Toute marge positive augmente le résultat." },
    ],
  },

  9: {
    titre: "L'analyse des écarts sur ventes et sur marge",
    description: "Écarts sur chiffre d'affaires (prix, volume), écart sur marge au coût standard, écarts de volume global et de composition des ventes, tableau de passage.",
    resume: md`
## L'essentiel — Écarts sur ventes et sur marge

- Résultat réel − résultat budgété = **écart sur marge** (commercial) + **écarts sur coûts** (production, structure).
- **Écart sur CA** : $E/\text{prix} = (P_r - P_b) Q_r$ ; $E/\text{volume} = (Q_r - Q_b) P_b$. Pour un produit, positif = **favorable**.
- **Écart sur marge** au **coût standard** : $m_p = P_b - C_s$, $m_r = P_r - C_s$ ; $E/\text{marge} = Q_r m_r - Q_b m_p$.
- $E/\text{marge unitaire} = (m_r - m_p) Q_r$ (= écart sur prix) ; $E/\text{quantité} = (Q_r - Q_b) m_p$.
- Plusieurs produits : marge moyenne préétablie $\bar m_p = \sum Q_b m_p / \sum Q_b$ ; $E/\text{volume global} = (\sum Q_r - \sum Q_b)\,\bar m_p$ ; $E/\text{composition} = \sum Q_r m_p - (\sum Q_r)\,\bar m_p$.
- Un écart de composition défavorable = ventes déplacées vers les produits **les moins rentables**.
- **Tableau de passage** : résultat budgété ± écarts commerciaux ± écarts sur coûts (signe inversé) = résultat réel.
`,
    exercices: md`
### Exercice 2 — Le tableau de passage

Pour le mois de mai, une entreprise de Meknès avait budgété un résultat de 400 000 DH. L'analyse des écarts a donné (en DH) : écart sur marge unitaire − 42 000 ; écart sur quantité + 20 000 ; écarts sur matières + 15 000 (défavorable) ; écarts sur main-d'œuvre − 6 000 (favorable) ; écarts sur charges indirectes de production + 9 000 (défavorable) ; écart sur charges fixes administratives + 4 000 (défavorable).

1. Présentez le tableau de passage du résultat budgété au résultat réel.
2. Quelle part de l'écart relève de la direction commerciale ?

<details><summary>Voir le corrigé</summary>

**1)**

| Élément | Effet sur le résultat |
|---|---:|
| Résultat budgété | 400 000 |
| Écart sur marge unitaire | − 42 000 |
| Écart sur quantité | + 20 000 |
| Écarts sur matières (charge défavorable) | − 15 000 |
| Écarts sur main-d'œuvre (charge favorable) | + 6 000 |
| Écarts sur charges indirectes (défavorable) | − 9 000 |
| Écart sur charges administratives (défavorable) | − 4 000 |
| **Résultat réel** | **356 000** |

**2)** Écarts commerciaux : $-42\,000 + 20\,000 = -\,22\,000$ DH, soit la moitié de l'écart total ($-44\,000$ DH). L'autre moitié relève de la production (− 18 000 DH nets) et de l'administration (− 4 000 DH).

</details>

### Exercice 3 — Un effet de composition qui annule l'effet volume

Une entreprise vend trois produits aux prix budgétés (aucun écart de prix). Marges unitaires préétablies : A 100 DH, B 60 DH, C 20 DH. Quantités budgétées : A 1 000, B 2 000, C 2 000. Quantités réelles : A 900, B 1 900, C 2 700.

1. Calculez la marge budgétée, la marge réelle et l'écart sur quantité.
2. Décomposez-le en écart sur volume global et écart sur composition. Commentez.

<details><summary>Voir le corrigé</summary>

**1)** Marge budgétée : $100\,000 + 120\,000 + 40\,000 = 260\,000$ DH. Marge réelle : $90\,000 + 114\,000 + 54\,000 = 258\,000$ DH. Écart sur quantité : **− 2 000 DH**.

**2)** $\bar m_p = 260\,000 / 5\,000 = 52$ DH.
- Volume global : $(5\,500 - 5\,000) \times 52 = \mathbf{+\,26\,000\ DH}$ (F) ;
- Composition : $258\,000 - 5\,500 \times 52 = 258\,000 - 286\,000 = \mathbf{-\,28\,000\ DH}$ (D).

L'entreprise a vendu 10 % d'unités en plus, mais la hausse porte entièrement sur C, le produit le moins rentable, au détriment de A et B : la marge baisse légèrement malgré la croissance des volumes.

</details>
`,
    qcm: [
      { q: "L'écart sur volume du chiffre d'affaires se calcule par :", choix: ["(Pr − Pb) × Qr", "(Qr − Qb) × Pb", "(Qr − Qb) × Pr", "Qr × Pr − Qb × Pb"], bonne: 1, explication: "Le volume est valorisé au prix budgété." },
      { q: "Pour analyser la marge commerciale, les coûts sont valorisés :", choix: ["Au coût réel", "Au coût standard", "Au prix de vente", "Au coût marginal"], bonne: 1, explication: "Pour ne pas imputer aux commerciaux les écarts de production." },
      { q: "L'écart sur quantité de la marge est valorisé :", choix: ["Au prix budgété", "À la marge unitaire préétablie", "À la marge réelle", "Au coût standard"], bonne: 1, explication: "(Qr − Qb) × mp." },
      { q: "Pour une marge, un écart positif est :", choix: ["Défavorable", "Favorable", "Toujours nul", "Une charge"], bonne: 1, explication: "On a gagné plus que prévu." },
      { q: "L'écart sur marge unitaire est égal :", choix: ["À l'écart sur volume", "À l'écart sur prix de vente", "À l'écart sur coût", "À zéro"], bonne: 1, explication: "Le coût standard est le même dans mr et mp." },
      { q: "Un écart sur composition défavorable signifie :", choix: ["Moins d'unités vendues au total", "Des ventes déplacées vers les produits les moins rentables", "Des prix plus bas", "Des coûts plus élevés"], bonne: 1, explication: "C'est l'effet mix." },
      { q: "mp moyen = 50, Qr total = 4 200, Qb total = 4 000. Écart sur volume global ?", choix: ["+ 10 000", "− 10 000", "+ 200", "210 000"], bonne: 0, explication: "(4 200 − 4 000) × 50 = + 10 000 : favorable." },
      { q: "Dans un tableau de passage, un écart défavorable sur matières :", choix: ["Augmente le résultat", "Diminue le résultat", "N'a pas d'effet", "Relève de la direction commerciale"], bonne: 1, explication: "Une charge plus élevée réduit le résultat." },
      { q: "Commissionner les vendeurs sur le chiffre d'affaires peut provoquer :", choix: ["Un meilleur mix", "Un écart de composition défavorable", "Une baisse des volumes", "Des écarts sur matières"], bonne: 1, explication: "Ils poussent les produits faciles à vendre, pas les plus rentables." },
      { q: "Écart sur volume global + écart sur composition = ", choix: ["Écart sur prix", "Écart sur quantité", "Écart sur CA", "Écart sur coûts"], bonne: 1, explication: "C'est la décomposition de l'écart sur quantité." },
    ],
  },
};

export default chapitres;
