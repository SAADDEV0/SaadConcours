// Contrôle de Gestion (S5) — compléments par chapitre.
const md = String.raw;

export default {
  1: {
    titre: "Introduction au contrôle de gestion",
    resume: md`
## L'essentiel — Le contrôle de gestion

- Le **contrôle de gestion** vérifie que les ressources sont utilisées avec **efficacité** (objectifs atteints) et **efficience** (au moindre coût) : c'est un outil de **pilotage**, pas de sanction.
- Il se situe entre la **planification stratégique** (3 à 5 ans) et le **contrôle opérationnel** (jour, semaine) ; son horizon est d'environ **un an**.
- Missions du contrôleur : budgets, suivi des réalisations, **analyse des écarts**, tableaux de bord, conseil à la direction.
- **Centres de responsabilité** : de **coûts** (charges), de **recettes** (CA), de **profit** (charges et produits), d'**investissement** (charges, produits et capitaux investis, jugé sur le ROI).
`,
    exercices: md`
### Exercice 2 — Centres de responsabilité et performance

1. Identifiez le type de centre : a) le chef d'atelier, jugé sur le coût de production ; b) le directeur commercial, jugé sur le chiffre d'affaires ; c) le directeur d'une agence qui fixe ses prix et gère ses charges ; d) le directeur d'une filiale qui décide aussi de ses investissements.
2. Un atelier devait produire 1 000 unités avec 500 heures. Il en a produit 1 100 en 600 heures. Est-il efficace ? Est-il efficient ?

<details><summary>Voir le corrigé</summary>

**1)** a) centre de **coûts** ; b) centre de **recettes** ; c) centre de **profit** ; d) centre d'**investissement**.

**2)** Il est **efficace** : l'objectif de 1 000 unités est dépassé. Mais il est moins **efficient** : il a produit $1\,100 / 600 \approx 1{,}83$ unité par heure contre $1\,000 / 500 = 2$ prévues.

</details>
`,
    qcm: [
      { q: "L'efficience consiste à :", choix: ["Atteindre ses objectifs", "Atteindre ses objectifs avec le minimum de ressources", "Sanctionner les écarts", "Augmenter le chiffre d'affaires"], bonne: 1, explication: "L'efficacité, elle, mesure seulement l'atteinte des objectifs." },
      { q: "L'horizon du contrôle de gestion est en général :", choix: ["La journée", "L'année", "10 ans", "Illimité"], bonne: 1, explication: "C'est l'horizon du budget." },
      { q: "Un centre jugé sur son résultat est un centre :", choix: ["De coûts", "De recettes", "De profit", "De dépenses discrétionnaires"], bonne: 2, explication: "Il maîtrise charges et produits." },
      { q: "Un centre d'investissement est évalué sur :", choix: ["Le coût standard", "Le chiffre d'affaires", "La rentabilité des capitaux investis", "Le nombre d'employés"], bonne: 2, explication: "Par exemple le ROI." },
      { q: "Le contrôle de gestion est avant tout :", choix: ["Un contrôle-sanction", "Un outil de pilotage de la performance", "Un audit légal", "Une obligation fiscale"], bonne: 1, explication: "Il vise l'amélioration continue." },
    ],
  },

  2: {
    titre: "Les coûts préétablis et les standards",
    resume: md`
## L'essentiel — Coûts préétablis

- Un **coût préétabli** (standard) est calculé **avant** la production, dans des conditions normales : $\text{coût standard unitaire} = \sum (\text{quantité standard} \times \text{prix standard})$.
- La **fiche de coût standard** détaille matière, main-d'œuvre directe et charges indirectes (UO standard × coût standard de l'UO).
- **Budget flexible** : $BF(x) = CF + CV_u \times x$, avec $x$ le nombre d'UO.
- **Coût standard de l'UO** $= \dfrac{BF(\text{activité normale})}{\text{activité normale}}$.
- **CPPR** (coût préétabli de la production réelle) $= \text{production réelle} \times \text{coût standard unitaire}$ : c'est la référence de l'écart global.
`,
    exercices: md`
### Exercice 2 — Fiche de coût standard complète

Pour une unité : 2 kg de matière à 15 DH/kg ; 0,75 h de MOD à 40 DH/h ; 0,75 heure machine dans l'atelier. Budget de l'atelier : charges fixes 18 000 DH, charges variables 6 DH par heure machine ; activité normale 3 000 h.

1. Calculez le coût standard de l'heure machine.
2. Établissez la fiche de coût standard d'une unité.
3. Calculez le CPPR pour 3 600 unités, puis le budget flexible pour 2 800 heures.

<details><summary>Voir le corrigé</summary>

**1)** $BF(3\,000) = 18\,000 + 6 \times 3\,000 = 36\,000$ DH, donc $CS = 36\,000 / 3\,000 = 12$ DH/h.

**2)**

| Élément | Quantité | Prix | Montant |
|---|--:|--:|--:|
| Matière | 2 kg | 15 | 30 |
| MOD | 0,75 h | 40 | 30 |
| Atelier | 0,75 h | 12 | 9 |
| **Coût standard** | | | **69 DH** |

**3)** $CPPR = 3\,600 \times 69 = 248\,400$ DH ; $BF(2\,800) = 18\,000 + 6 \times 2\,800 = 34\,800$ DH.

</details>
`,
    qcm: [
      { q: "Un coût préétabli est calculé :", choix: ["Après la production", "Avant la production", "À la clôture de l'exercice", "Par le CAC"], bonne: 1, explication: "Il sert de référence pour mesurer les écarts." },
      { q: "3 kg à 10 DH + 2 h à 50 DH : le coût standard unitaire est de :", choix: ["65 DH", "130 DH", "80 DH", "100 DH"], bonne: 1, explication: "30 + 100 = 130 DH." },
      { q: "Le budget flexible s'écrit :", choix: ["CF × x", "CF + CVu × x", "CVu − CF", "CF / x"], bonne: 1, explication: "Il s'adapte au niveau d'activité." },
      { q: "Le CPPR est égal à :", choix: ["Coût réel − écarts", "Production réelle × coût standard unitaire", "Production normale × coût réel", "Budget flexible de l'activité réelle"], bonne: 1, explication: "C'est ce qu'aurait dû coûter la production réelle." },
      { q: "BF(x) = 20 000 + 4x, activité normale 2 000 h : le coût standard de l'heure est de :", choix: ["10 DH", "14 DH", "4 DH", "24 DH"], bonne: 1, explication: "(20 000 + 8 000) / 2 000 = 14 DH." },
    ],
  },

  3: {
    titre: "L'analyse des écarts sur charges directes",
    resume: md`
## L'essentiel — Écarts sur charges directes

- Écart global $= \text{coût réel} - \text{coût préétabli} = Q_r P_r - Q_s P_s$, avec $Q_s$ **adapté à la production réelle**.
- Écart **positif = défavorable** (coût réel plus élevé) ; **négatif = favorable**.
- Matières : **écart sur prix** $(P_r - P_s) \times Q_r$ et **écart sur quantité** $(Q_r - Q_s) \times P_s$.
- MOD : **écart sur taux** $(t_r - t_s) \times T_r$ et **écart sur temps** $(T_r - T_s) \times t_s$.
- Contrôle : la somme des sous-écarts égale l'écart global.
- Responsables : le prix relève des achats ; la quantité et le temps relèvent de la production.
`,
    exercices: md`
### Exercice 2 — Écarts sur main-d'œuvre directe

Standard : 1,5 h de MOD à 50 DH/h par unité. Production réelle : 800 unités, pour 1 300 heures payées 52 DH/h.

1. Calculez le temps standard adapté à la production réelle, le coût réel et le coût préétabli.
2. Calculez l'écart global et décomposez-le.
3. Commentez.

<details><summary>Voir le corrigé</summary>

**1)** $T_s = 800 \times 1{,}5 = 1\,200$ h ; coût réel $= 1\,300 \times 52 = 67\,600$ DH ; coût préétabli $= 1\,200 \times 50 = 60\,000$ DH.

**2)** Écart global $= +7\,600$ DH (défavorable).

- Écart sur taux $= (52 - 50) \times 1\,300 = +2\,600$ DH (défavorable)
- Écart sur temps $= (1\,300 - 1\,200) \times 50 = +5\,000$ DH (défavorable)

Vérification : $2\,600 + 5\,000 = 7\,600$ ✓

**3)** L'essentiel de l'écart vient du **temps** : 100 heures de trop (panne, manque de formation, désorganisation). L'écart sur taux peut s'expliquer par des heures supplémentaires ou une hausse de salaire.

</details>
`,
    qcm: [
      { q: "Un écart positif sur coût est :", choix: ["Favorable", "Défavorable", "Neutre", "Impossible"], bonne: 1, explication: "Le réel coûte plus que prévu." },
      { q: "L'écart sur prix matière se calcule par :", choix: ["(Pr − Ps) × Qr", "(Qr − Qs) × Ps", "(Pr − Ps) × Qs", "Qr × Pr − Qs"], bonne: 0, explication: "On valorise la différence de prix sur la quantité réelle." },
      { q: "L'écart sur temps de MOD se calcule par :", choix: ["(tr − ts) × Tr", "(Tr − Ts) × ts", "(Tr − Ts) × tr", "Tr × tr"], bonne: 1, explication: "La différence de temps est valorisée au taux standard." },
      { q: "Standard 2 kg/unité, production réelle 400 unités : la quantité standard adaptée est :", choix: ["2 kg", "200 kg", "400 kg", "800 kg"], bonne: 3, explication: "400 × 2 = 800 kg." },
      { q: "Un gaspillage de matière se traduit par un écart défavorable sur :", choix: ["Prix", "Quantité", "Taux", "Budget"], bonne: 1, explication: "On consomme plus que le standard." },
    ],
  },

  4: {
    titre: "L'analyse des écarts sur charges indirectes",
    resume: md`
## L'essentiel — Écarts sur charges indirectes

- Notations : $AN$ activité normale, $AR$ activité réelle, $AP$ activité préétablie (UO prévues pour la production réelle), $CS$ coût standard de l'UO.
- Écart global $= \text{coût réel} - CS \times AP$.
- **Écart sur budget** $= \text{coût réel} - BF(AR)$ : maîtrise des dépenses.
- **Écart sur activité** $= BF(AR) - CS \times AR = CF \times (1 - AR / AN)$ : défavorable en **sous-activité**, favorable en suractivité.
- **Écart sur rendement** $= CS \times (AR - AP)$ : productivité des unités d'œuvre.
- La somme des trois écarts égale l'écart global.
`,
    exercices: md`
### Exercice 2 — Un atelier en sous-activité

Budget de l'atelier : $BF(x) = 24\,000 + 8x$ (x en heures machine) ; activité normale 2 000 h. Ce mois : 1 800 heures réelles pour un coût réel de 40 000 DH ; la production réalisée correspondait à 1 700 heures standard.

1. Calculez le coût standard de l'heure et le CPPR.
2. Décomposez l'écart global en écarts sur budget, activité et rendement.

<details><summary>Voir le corrigé</summary>

**1)** $CS = \dfrac{24\,000 + 8 \times 2\,000}{2\,000} = 20$ DH/h ; $CPPR = 20 \times 1\,700 = 34\,000$ DH. Écart global $= 40\,000 - 34\,000 = +6\,000$ DH (défavorable).

**2)**

- $BF(1\,800) = 24\,000 + 14\,400 = 38\,400$ DH
- Écart sur budget $= 40\,000 - 38\,400 = +1\,600$ DH (défavorable)
- Écart sur activité $= 38\,400 - 20 \times 1\,800 = +2\,400$ DH (défavorable ; contrôle : $24\,000 \times (1 - 0{,}9)$)
- Écart sur rendement $= 20 \times (1\,800 - 1\,700) = +2\,000$ DH (défavorable)

Vérification : $1\,600 + 2\,400 + 2\,000 = 6\,000$ ✓

</details>
`,
    qcm: [
      { q: "L'écart sur budget se calcule par :", choix: ["Coût réel − BF(activité réelle)", "BF(AR) − CS × AR", "CS × (AR − AP)", "Coût réel − CPPR"], bonne: 0, explication: "Il mesure la maîtrise des dépenses du centre." },
      { q: "En sous-activité, l'écart sur activité est :", choix: ["Favorable", "Défavorable", "Nul", "Toujours égal à l'écart global"], bonne: 1, explication: "Les charges fixes sont mal absorbées." },
      { q: "L'écart sur rendement vaut :", choix: ["CS × (AR − AP)", "CF × (1 − AR/AN)", "Coût réel − BF(AR)", "CVu × AR"], bonne: 0, explication: "Il valorise les UO consommées en trop ou en moins." },
      { q: "CF = 30 000, AN = 1 000 h, AR = 900 h : l'écart sur activité vaut :", choix: ["−3 000", "+3 000", "+27 000", "0"], bonne: 1, explication: "30 000 × (1 − 0,9) = +3 000 (défavorable)." },
      { q: "Si AR = AP, l'écart sur rendement est :", choix: ["Positif", "Négatif", "Nul", "Égal à l'écart sur budget"], bonne: 2, explication: "L'atelier a consommé exactement les UO prévues." },
    ],
  },

  5: {
    titre: "La gestion budgétaire des ventes et de la production",
    resume: md`
## L'essentiel — Budgets des ventes et de la production

- Le **budget des ventes** est le point de départ de toute la gestion budgétaire.
- **Tendance** par les moindres carrés : $y = ax + b$ avec $a = \dfrac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sum (x_i - \bar{x})^2}$ et $b = \bar{y} - a\bar{x}$.
- **Coefficient saisonnier** $= \dfrac{\text{valeur de la période}}{\text{moyenne de l'année}}$ ; prévision $= \text{tendance} \times \text{coefficient}$.
- **Budget de production** : $\text{production} = \text{ventes prévues} + \text{stock final souhaité} - \text{stock initial}$.
- Capacités limitées : **programmation linéaire** pour maximiser la marge sous contraintes.
`,
    exercices: md`
### Exercice 2 — Tendance, saisonnalité et production

**Partie A** — Ventes annuelles (en milliers d'unités) : année 1 : 100 ; année 2 : 120 ; année 3 : 130 ; année 4 : 150. Ajustez une droite par les moindres carrés et prévoyez l'année 5.

**Partie B** — La tendance trimestrielle est $y = 50x + 1\,000$ (x = rang du trimestre). Coefficients saisonniers : T1 = 0,8 ; T2 = 1,1 ; T3 = 1,3 ; T4 = 0,8. Prévoyez les ventes des trimestres 9 à 12. Le stock au début du trimestre 9 est de 200 unités et l'entreprise veut un stock final égal à 20 % des ventes du trimestre suivant : combien produire au trimestre 9 ?

<details><summary>Voir le corrigé</summary>

**Partie A** — $\bar{x} = 2{,}5$ ; $\bar{y} = 125$ ; $\sum (x_i - \bar{x})(y_i - \bar{y}) = 37{,}5 + 2{,}5 + 2{,}5 + 37{,}5 = 80$ ; $\sum (x_i - \bar{x})^2 = 5$.

$a = 80 / 5 = 16$ ; $b = 125 - 16 \times 2{,}5 = 85$ ; prévision année 5 : $16 \times 5 + 85 = 165$ milliers.

**Partie B**

| Trimestre | Rang | Tendance | Coefficient | Prévision |
|---|--:|--:|--:|--:|
| T1 | 9 | 1 450 | 0,8 | 1 160 |
| T2 | 10 | 1 500 | 1,1 | 1 650 |
| T3 | 11 | 1 550 | 1,3 | 2 015 |
| T4 | 12 | 1 600 | 0,8 | 1 280 |

Stock final souhaité au T1 $= 20\% \times 1\,650 = 330$ ; production T1 $= 1\,160 + 330 - 200 = 1\,290$ unités.

</details>
`,
    qcm: [
      { q: "Le point de départ de la gestion budgétaire est :", choix: ["Le budget de trésorerie", "Le budget des ventes", "Le budget des investissements", "Le bilan"], bonne: 1, explication: "Tous les autres budgets en découlent." },
      { q: "Ventes 5 000, stock final souhaité 600, stock initial 400 : la production est de :", choix: ["5 000", "5 200", "4 800", "6 000"], bonne: 1, explication: "5 000 + 600 − 400 = 5 200." },
      { q: "Un coefficient saisonnier de 1,2 signifie que le trimestre est :", choix: ["20 % au-dessus de la moyenne", "20 % en dessous", "Égal à la moyenne", "Sans vente"], bonne: 0, explication: "Valeur de la période / moyenne = 1,2." },
      { q: "Dans y = ax + b, a représente :", choix: ["La valeur de départ", "L'accroissement moyen par période", "Le coefficient saisonnier", "Le stock final"], bonne: 1, explication: "C'est la pente de la tendance." },
      { q: "Quand une ressource limite la production, on utilise :", choix: ["La méthode ABC", "La programmation linéaire", "Le cut-off", "Le CMUP"], bonne: 1, explication: "Pour maximiser la marge sous contraintes." },
    ],
  },

  6: {
    titre: "Le budget de trésorerie",
    resume: md`
## L'essentiel — Le budget de trésorerie

- Il traduit tous les budgets en **encaissements** et **décaissements** mensuels pour anticiper les besoins ou excédents de trésorerie.
- Encaissements : règlements clients selon les délais (comptant, 30 jours…), créances du bilan d'ouverture, emprunts, cessions.
- Décaissements : fournisseurs, salaires, charges sociales, **TVA due** (payée le mois suivant), investissements, remboursements.
- $\text{Solde final} = \text{solde initial} + \text{encaissements} - \text{décaissements}$.
- Solde négatif : besoin de financement (découvert, escompte, emprunt si l'origine est un investissement). Solde très positif : placement.
- On raisonne en **TTC** pour les flux clients et fournisseurs.
`,
    exercices: md`
### Exercice 2 — Budget de trésorerie sur trois mois

Trésorerie au 1ᵉʳ janvier : 10 000 DH.

- Ventes TTC : janvier 120 000 ; février 150 000 ; mars 180 000. Les clients paient 50 % au comptant et 50 % à 30 jours. Créances clients au 1ᵉʳ janvier : 40 000 DH (encaissées en janvier).
- Achats TTC : janvier 60 000 ; février 72 000 ; mars 84 000, payés à 30 jours. Dette fournisseurs au 1ᵉʳ janvier : 50 000 DH (payée en janvier).
- Salaires : 30 000 DH par mois. TVA à payer : janvier 8 000 ; février 9 000 ; mars 11 000.
- Achat d'une machine payée comptant en mars : 150 000 DH.

Établissez le budget de trésorerie et commentez.

<details><summary>Voir le corrigé</summary>

| | Janvier | Février | Mars |
|---|--:|--:|--:|
| Clients comptant (50 %) | 60 000 | 75 000 | 90 000 |
| Clients à 30 jours | 40 000 | 60 000 | 75 000 |
| **Total encaissements** | **100 000** | **135 000** | **165 000** |
| Fournisseurs | 50 000 | 60 000 | 72 000 |
| Salaires | 30 000 | 30 000 | 30 000 |
| TVA | 8 000 | 9 000 | 11 000 |
| Investissement | | | 150 000 |
| **Total décaissements** | **88 000** | **99 000** | **263 000** |
| Solde initial | 10 000 | 22 000 | 58 000 |
| **Solde final** | **22 000** | **58 000** | **−40 000** |

Le déficit de mars vient de l'investissement : il vaut mieux le financer par un **emprunt à moyen terme** que par du découvert.

</details>
`,
    qcm: [
      { q: "Le solde final de trésorerie est égal à :", choix: ["Solde initial + encaissements − décaissements", "Encaissements − décaissements", "Ventes − achats", "Solde initial − encaissements"], bonne: 0, explication: "C'est l'équation de base du budget." },
      { q: "Les flux clients et fournisseurs sont pris :", choix: ["Hors taxes", "Toutes taxes comprises", "Hors TVA et hors remises", "En quantités"], bonne: 1, explication: "On encaisse et on paie les montants TTC." },
      { q: "Des ventes de 100 000 DH en mars, payées à 60 jours, sont encaissées en :", choix: ["Mars", "Avril", "Mai", "Juin"], bonne: 2, explication: "Mars + 2 mois = mai." },
      { q: "Un solde de trésorerie négatif signale :", choix: ["Un excédent à placer", "Un besoin de financement à court terme", "Un bénéfice", "Une erreur de calcul"], bonne: 1, explication: "Il faut prévoir un financement." },
      { q: "Les dotations aux amortissements figurent-elles dans le budget de trésorerie ?", choix: ["Oui, en décaissements", "Oui, en encaissements", "Non, ce ne sont pas des flux de trésorerie", "Seulement en décembre"], bonne: 2, explication: "Ce sont des charges calculées." },
    ],
  },

  7: {
    titre: "Les tableaux de bord de gestion",
    resume: md`
## L'essentiel — Tableaux de bord

- Le **tableau de bord** réunit quelques indicateurs clés, mis à jour souvent, pour suivre les objectifs et **réagir vite**.
- Un bon indicateur est **pertinent**, **rapide**, **simple** et associé à un **seuil d'alerte** (clignotant).
- La rapidité prime sur la précision : mieux vaut un indicateur approché disponible tout de suite.
- **Balanced Scorecard** (Kaplan et Norton) : quatre axes — **financier**, **clients**, **processus internes**, **apprentissage organisationnel**.
- Le tableau de bord compare le réalisé à l'objectif et met en évidence les écarts (vert, orange, rouge).
`,
    exercices: md`
### Exercice 2 — Lire un tableau de bord

Tableau de bord mensuel d'une usine :

| Indicateur | Objectif | Réalisé |
|---|--:|--:|
| Taux de rebut | ≤ 2 % | 150 pièces rebutées sur 5 000 |
| Satisfaction clients | ≥ 85 % | 88 % |
| Délai moyen de livraison | ≤ 4 jours | 4,5 jours |
| Heures de formation par salarié | ≥ 2 h | 1,5 h |

1. Calculez le taux de rebut et attribuez à chaque indicateur un feu (vert, orange, rouge), avec orange si l'écart est inférieur à 15 % de l'objectif.
2. Rattachez chaque indicateur à un axe du Balanced Scorecard.

<details><summary>Voir le corrigé</summary>

| Indicateur | Calcul / écart | Feu | Axe |
|---|---|---|---|
| Taux de rebut | $150 / 5\,000 = 3\%$, soit +50 % par rapport à l'objectif | Rouge | Processus internes |
| Satisfaction | 88 % ≥ 85 % | Vert | Clients |
| Délai de livraison | 4,5 j, soit +12,5 % | Orange | Processus internes (ou clients) |
| Formation | 1,5 h, soit −25 % | Rouge | Apprentissage organisationnel |

</details>
`,
    qcm: [
      { q: "La première qualité d'un indicateur de tableau de bord est :", choix: ["Sa précision comptable absolue", "Sa pertinence par rapport à un objectif", "Son nombre de décimales", "Sa longueur"], bonne: 1, explication: "Un indicateur doit servir une décision." },
      { q: "Le Balanced Scorecard comprend :", choix: ["2 axes", "3 axes", "4 axes", "6 axes"], bonne: 2, explication: "Financier, clients, processus internes, apprentissage." },
      { q: "Le taux de satisfaction des clients relève de l'axe :", choix: ["Financier", "Clients", "Processus internes", "Apprentissage"], bonne: 1, explication: "Il mesure la relation avec les clients." },
      { q: "Un « clignotant » sert à :", choix: ["Décorer le tableau", "Signaler un écart significatif", "Calculer le résultat", "Remplacer le budget"], bonne: 1, explication: "Il attire l'attention sur un dépassement de seuil." },
      { q: "Le taux de turn-over et les heures de formation relèvent de l'axe :", choix: ["Financier", "Clients", "Processus internes", "Apprentissage organisationnel"], bonne: 3, explication: "Ils concernent les compétences et les personnes." },
    ],
  },

  8: {
    titre: "Le seuil de rentabilité en contrôle de gestion",
    resume: md`
## L'essentiel — Seuil de rentabilité et décisions

- $MCV = CA - CV$ ; taux de MCV $= MCV / CA$ ; $SR = CF / \text{taux de MCV}$ ; en quantités $SR = CF / MCV_u$.
- **Levier opérationnel** $= MCV / \text{résultat}$ : plus il est élevé, plus le résultat est sensible à l'activité.
- Une structure à fortes **charges fixes** (automatisation) augmente le levier : gains plus forts en cas de hausse, risque accru en cas de baisse.
- **Point d'indifférence** entre deux structures de coûts : quantité pour laquelle les deux résultats sont égaux.
- Le contrôleur utilise ces outils pour simuler les décisions (prix, investissement, sous-traitance) avant de les engager.
`,
    exercices: md`
### Exercice 2 — Faut-il automatiser ?

Actuellement : prix de vente 100 DH, coût variable unitaire 60 DH, charges fixes 200 000 DH, ventes 8 000 unités. Projet d'automatisation : charges fixes 320 000 DH et coût variable unitaire 45 DH.

1. Calculez, pour chaque structure, le résultat, le seuil de rentabilité en quantités et le levier opérationnel.
2. Déterminez le point d'indifférence et concluez.

<details><summary>Voir le corrigé</summary>

**1)**

| | Actuelle | Automatisée |
|---|--:|--:|
| MCV unitaire | 40 | 55 |
| MCV totale (8 000 unités) | 320 000 | 440 000 |
| Résultat | 120 000 | 120 000 |
| SR en quantités | 5 000 | $320\,000 / 55 \approx 5\,818$ |
| Levier opérationnel | 2,67 | 3,67 |

**2)** $40Q - 200\,000 = 55Q - 320\,000$, donc $Q = 8\,000$ unités. Au-delà de 8 000 unités, l'automatisation est plus rentable ; en deçà, elle est moins rentable et plus risquée (seuil plus élevé, levier plus fort). La décision dépend donc des perspectives de ventes.

</details>
`,
    qcm: [
      { q: "CA 800 000, CV 480 000, CF 240 000 : le SR vaut :", choix: ["240 000", "400 000", "600 000", "320 000"], bonne: 2, explication: "Taux de MCV = 40 % ; 240 000 / 0,4 = 600 000." },
      { q: "Une hausse des charges fixes, toutes choses égales, fait :", choix: ["Baisser le seuil de rentabilité", "Monter le seuil de rentabilité", "Baisser le levier opérationnel", "Augmenter la MCV"], bonne: 1, explication: "Il faut plus de MCV pour couvrir les charges fixes." },
      { q: "Un levier opérationnel élevé signifie :", choix: ["Un résultat peu sensible à l'activité", "Un résultat très sensible à l'activité", "Aucune charge fixe", "Un SR nul"], bonne: 1, explication: "Une petite variation du CA provoque une forte variation du résultat." },
      { q: "Le point d'indifférence entre deux structures est la quantité pour laquelle :", choix: ["Les CA sont égaux", "Les résultats sont égaux", "Les charges fixes sont égales", "Le SR est nul"], bonne: 1, explication: "Au-delà, la structure à charges fixes élevées devient plus rentable." },
      { q: "MCV 300 000, résultat 60 000 : le levier opérationnel vaut :", choix: ["0,2", "5", "240 000", "3,6"], bonne: 1, explication: "300 000 / 60 000 = 5." },
    ],
  },
};
