// Contrôle de Gestion Sociale (S5, filière MRH) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Le contrôle de gestion sociale : missions et système d'information",
    description: "Contrôle de gestion sociale : missions (mesurer, prévoir, analyser, conseiller), place du contrôleur, sources de données RH et ratios du poids social.",
    resume: md`
## L'essentiel — Missions et système d'information

- **Contrôle de gestion sociale** : mesurer, prévoir, analyser et piloter les données du personnel (effectifs, temps, rémunérations, coûts) pour des décisions efficaces et efficientes.
- Il **éclaire** les décisions de la GRH et en mesure les effets ; l'**audit social** est un examen ponctuel, le contrôle de gestion sociale un suivi permanent.
- Quatre missions : **mesurer**, **prévoir**, **analyser**, **conseiller et alerter**.
- Fonction d'**interface** entre la DRH et la direction financière (souvent double rattachement).
- Sources marocaines : paie, déclarations CNSS (Damancom), déclaration des traitements et salaires (article 79 du CGI), registre d'employeur, gestion des temps, compte **617** du CGNC.
- Rapprocher la paie, la CNSS et la comptabilité ; protéger les données personnelles (**loi 09-08**, CNDP).
- Ratios : charges de personnel / CA ; charges de personnel / **VA** ; productivité apparente = VA / effectif moyen ; coût moyen = charges / effectif moyen.
- **Effet ciseaux** : le coût moyen progresse plus vite que la productivité, la part de la VA revenant au personnel augmente.
- Variation des charges de personnel ≈ (1 + variation de l'effectif) × (1 + variation du coût moyen) − 1.
`,
    exercices: md`
### Exercice 2 — Mission ou outil ?

Associez chaque demande à l'une des quatre missions du contrôle de gestion sociale (mesurer, prévoir, analyser, conseiller) : a) calculer le nombre d'ETP de chaque agence au 30 juin ; b) estimer la masse salariale de l'année prochaine après la revalorisation du SMIG ; c) expliquer pourquoi la masse salariale du premier semestre dépasse le budget de 3 % ; d) recommander de remplacer ou non les départs à la retraite dans un atelier automatisé.

<details><summary>Voir le corrigé</summary>

a) **Mesurer** : un indicateur d'effectif à une date, avec une définition précise de l'ETP.
b) **Prévoir** : construction d'une hypothèse budgétaire (chapitre 6).
c) **Analyser** : décomposition de l'écart (effectif, structure, salaire moyen) et des effets d'augmentation (chapitres 5 et 6).
d) **Conseiller** : le contrôleur compare le coût d'un remplacement aux besoins de production et aux gains de l'automatisation, puis propose une décision à la direction.

</details>

### Exercice 3 — Comparer deux sites

Un groupe de distribution compare deux entrepôts : à Casablanca, 9 600 000 DH de charges de personnel pour 160 salariés en moyenne et 16 000 000 DH de valeur ajoutée ; à Agadir, 4 200 000 DH pour 75 salariés et 6 300 000 DH de valeur ajoutée.

1. Calculez pour chaque site le coût moyen, la productivité apparente et la part de la VA absorbée par le personnel.
2. Quel site est le plus performant socialement ? Nuancez.

<details><summary>Voir le corrigé</summary>

1. Casablanca : coût moyen 9 600 000 / 160 = **60 000 DH** ; productivité 16 000 000 / 160 = **100 000 DH** ; part de la VA 9,6 / 16 = **60 %**. Agadir : coût moyen 4 200 000 / 75 = **56 000 DH** ; productivité 6 300 000 / 75 = **84 000 DH** ; part de la VA 4,2 / 6,3 = **66,67 %**.
2. Agadir paie moins cher ses salariés, mais chacun crée moins de valeur ajoutée : le personnel y absorbe les deux tiers de la VA, contre 60 % à Casablanca, qui est le plus efficient. Avant de conclure, il faut vérifier que les activités sont comparables (volume traité, automatisation, part de l'intérim non comptée dans l'effectif, saisonnalité).

</details>
`,
    qcm: [
      { q: "Le contrôle de gestion sociale a pour objet principal :", choix: ["De recruter les salariés", "De mesurer, prévoir, analyser et piloter les données relatives au personnel", "De négocier les conventions collectives", "De calculer l'impôt sur les sociétés"], bonne: 1, explication: "Il éclaire les décisions RH et en mesure les effets." },
      { q: "Ce qui distingue l'audit social du contrôle de gestion sociale :", choix: ["L'audit social est un examen ponctuel, le contrôle de gestion sociale un suivi permanent", "L'audit social ne concerne que la paie", "Le contrôle de gestion sociale est réalisé par l'État", "Il n'y a aucune différence"], bonne: 0, explication: "Les deux sont complémentaires (chapitre 8)." },
      { q: "Dans le CGNC, les charges de personnel sont enregistrées au compte :", choix: ["611", "613", "617", "619"], bonne: 2, explication: "6171 Rémunérations du personnel, 6174 Charges sociales." },
      { q: "La productivité apparente du travail se calcule par :", choix: ["Chiffre d'affaires / masse salariale", "Valeur ajoutée / effectif moyen", "Effectif / valeur ajoutée", "Charges de personnel / effectif de fin d'année"], bonne: 1, explication: "Richesse créée par salarié." },
      { q: "Pour calculer un coût moyen par salarié sur l'année, on utilise :", choix: ["L'effectif au 31 décembre", "L'effectif au 1er janvier", "L'effectif moyen de l'année", "Le nombre d'embauches"], bonne: 2, explication: "Le coût annuel correspond au volume de travail de toute l'année." },
      { q: "On parle d'effet ciseaux quand :", choix: ["Le coût moyen par salarié progresse plus vite que la productivité", "L'effectif baisse", "Les ventes augmentent plus vite que les charges", "La masse salariale est stable"], bonne: 0, explication: "La part de la VA revenant au personnel augmente." },
      { q: "Les données sociales personnelles sont protégées au Maroc par :", choix: ["La loi 09-08", "La loi 15-95", "La loi 17-95", "La loi 114-13"], bonne: 0, explication: "Sous le contrôle de la CNDP." },
      { q: "La télédéclaration des salaires auprès de la CNSS se fait par :", choix: ["Simpl-TVA", "Damancom", "BADR", "PortNet"], bonne: 1, explication: "Elle donne les salariés déclarés et les salaires soumis à cotisation." },
      { q: "Un double rattachement du contrôleur de gestion sociale signifie souvent :", choix: ["Hiérarchique à la DRH et fonctionnel au contrôle de gestion", "Rattachement au syndicat et à la direction", "Deux contrats de travail", "Rattachement à la CNSS"], bonne: 0, explication: "Il garantit la connaissance du social et la cohérence avec le budget." },
      { q: "Les charges de personnel diffèrent de la masse salariale parce qu'elles comprennent en plus :", choix: ["Les achats de matières", "Les charges sociales patronales et les autres charges liées au personnel", "Les impôts sur les bénéfices", "Les dotations aux amortissements"], bonne: 1, explication: "Toujours préciser le périmètre du chiffre." },
    ],
  },
  2: {
    titre: "Les effectifs et leur structure",
    description: "Effectif inscrit, moyen et ETP, traitement des CDD et de l'intérim, taux d'encadrement et de féminisation, âge moyen et lecture d'une pyramide des âges.",
    resume: md`
## L'essentiel — Effectifs et structure

- **Effectif inscrit** : salariés sous contrat à une date (stock) ; **effectif présent** : inscrits moins absents de longue durée.
- **Effectif moyen** : salariés comptés au prorata de leur temps de présence ; **ETP** : en plus, au prorata du temps de travail (mi-temps = 0,5).
- Coûts moyens et productivité se calculent sur l'effectif moyen ou l'ETP, jamais sur un effectif à une date.
- CDD inclus au prorata ; **intérimaires** exclus (salariés de l'entreprise de travail temporaire) mais suivis à part ; stagiaires exclus.
- **Taux d'encadrement** = cadres / effectif ; **taux de féminisation** = femmes / effectif, à décliner par catégorie ; **taux de précarité** = CDD / effectif.
- Âge moyen par tranches : $\bar{a} = \sum n_i c_i / \sum n_i$ avec les **centres** de classes.
- Formes de pyramide : pyramide (jeunes), **champignon** (vieillissement, départs à 60 ans), cylindre (équilibre), poire (renflement au milieu), sablier (milieu creux).
- Une ancienneté élevée alourdit la masse salariale par la **prime d'ancienneté** (article 350).
- Projeter la pyramide permet de prévoir les départs à la retraite et d'alimenter la GPEC.
`,
    exercices: md`
### Exercice 2 — Effectif moyen d'une agence

Une agence bancaire de Tétouan compte au 1er janvier 24 salariés à temps plein. Un salarié part le 31 mars ; deux salariés sont embauchés le 1er juillet ; une salariée passe à 80 % le 1er octobre ; un CDD à temps plein travaille du 1er juin au 30 novembre.

1. Calculez l'effectif inscrit au 31 décembre.
2. Calculez l'effectif moyen (personnes) et l'ETP moyen de l'année.

<details><summary>Voir le corrigé</summary>

1. 24 − 1 + 2 = **25** (le CDD est terminé).
2. Effectif moyen : 23 salariés toute l'année (dont la salariée à 80 %) = 23 ; partant : 1 × 3/12 = 0,25 ; embauchés : 2 × 6/12 = 1 ; CDD : 1 × 6/12 = 0,5. Total : **24,75**. ETP : on retire à la salariée à 80 % 20 % de 3 mois, soit 0,2 × 3/12 = 0,05 ; ETP = 24,75 − 0,05 = **24,70**.

</details>

### Exercice 3 — Lire une pyramide

Une entreprise de transport de Settat compte 120 salariés : 8 de moins de 30 ans, 22 de 30 à 39 ans, 38 de 40 à 49 ans et 52 de 50 à 59 ans, dont 30 de 55 ans ou plus. 92 % des chauffeurs sont des hommes.

1. Calculez l'âge moyen (centres : 25, 35, 45, 55) et la part des départs à la retraite dans les cinq ans.
2. Qualifiez la pyramide et indiquez deux conséquences pour la gestion.

<details><summary>Voir le corrigé</summary>

1. Âge moyen : (8 × 25 + 22 × 35 + 38 × 45 + 52 × 55) / 120 = (200 + 770 + 1 710 + 2 860) / 120 = 5 540 / 120 ≈ **46,2 ans**. Départs dans les cinq ans : 30 / 120 = **25 %**.
2. Pyramide en **champignon** : un salarié sur quatre partira dans les cinq ans. Conséquences : un plan de recrutement et de formation de chauffeurs à préparer dès maintenant (permis, formation sécurité), avec une transmission des savoir-faire par les anciens ; une masse salariale actuellement alourdie par l'ancienneté, qui baissera avec les remplacements (effet noria, chapitre 5) mais avec un coût d'intégration. La faible féminisation peut aussi être un axe de recrutement.

</details>
`,
    qcm: [
      { q: "L'effectif inscrit est :", choix: ["Le nombre de salariés sous contrat à une date donnée", "La moyenne des effectifs sur l'année", "Le nombre d'heures travaillées", "Le nombre d'embauches de l'année"], bonne: 0, explication: "C'est un stock, présents ou absents." },
      { q: "Un salarié à mi-temps présent toute l'année compte pour :", choix: ["1 ETP", "0,5 ETP", "2 ETP", "0 ETP"], bonne: 1, explication: "L'ETP pondère par le temps de travail." },
      { q: "Un salarié à temps plein embauché le 1er octobre compte dans l'effectif moyen de l'année pour :", choix: ["1", "0,75", "0,25", "0"], bonne: 2, explication: "3 mois sur 12." },
      { q: "Les intérimaires d'une entreprise utilisatrice :", choix: ["Sont comptés dans son effectif inscrit", "Ne sont pas comptés dans son effectif mais leur coût est suivi à part", "Sont comptés comme cadres", "Sont assimilés à des stagiaires"], bonne: 1, explication: "Ils sont salariés de l'entreprise de travail temporaire." },
      { q: "Le taux d'encadrement rapporte :", choix: ["Les cadres à l'effectif total", "Les femmes à l'effectif", "Les CDD aux CDI", "Les départs à l'effectif"], bonne: 0, explication: "Il peut aussi inclure la maîtrise." },
      { q: "Pour calculer un âge moyen à partir de tranches d'âge, on utilise :", choix: ["La borne inférieure de chaque tranche", "Le centre de chaque tranche", "La borne supérieure", "L'âge du plus jeune salarié"], bonne: 1, explication: "Moyenne pondérée des centres de classes." },
      { q: "Une pyramide des âges en champignon annonce surtout :", choix: ["Une forte croissance des embauches", "Une vague de départs à la retraite", "Un effectif très jeune", "Une absence totale de risque"], bonne: 1, explication: "Beaucoup de salariés âgés." },
      { q: "Une pyramide en sablier se caractérise par :", choix: ["Un milieu de pyramide peu fourni", "Une base très large uniquement", "Une répartition équilibrée", "Un renflement au milieu"], bonne: 0, explication: "Jeunes et anciens nombreux, relève intermédiaire faible." },
      { q: "La prime d'ancienneté du Code du travail passe à 10 % après :", choix: ["2 ans", "5 ans", "12 ans", "20 ans"], bonne: 1, explication: "5 % après 2 ans, 10 % après 5 ans (article 350)." },
      { q: "Le taux de féminisation doit être analysé par catégorie parce que :", choix: ["Le taux global peut cacher une faible présence des femmes dans l'encadrement", "La loi interdit de le calculer globalement", "Il est toujours de 50 %", "Il ne concerne que les cadres"], bonne: 0, explication: "C'est l'égalité d'accès aux responsabilités qui est en jeu." },
    ],
  },
  3: {
    titre: "Les mouvements du personnel et l'absentéisme",
    description: "Entrées, sorties et motifs, taux de rotation, de démission et de stabilité, taux d'absentéisme, fréquence et gravité des accidents du travail, avec cas corrigé.",
    resume: md`
## L'essentiel — Mouvements et absentéisme

- Effectif final = effectif initial + entrées − sorties ; classer les sorties par **motif** (démission, licenciement, fin de CDD, retraite).
- Taux d'entrée = entrées / effectif moyen ; taux de sortie = sorties / effectif moyen.
- **Taux de rotation** = ((entrées + sorties) / 2) / effectif moyen ; taux de démission = démissions / effectif moyen.
- **Taux de stabilité** = salariés présents au début et à la fin / effectif initial.
- Rotation trop forte : coûts et perte de savoir-faire ; trop faible : sclérose et masse salariale alourdie.
- **Absentéisme** : absences non programmées (maladie, accident, injustifiées) ; les congés payés et la maternité n'en font pas partie.
- Taux d'absentéisme = heures d'absence / heures théoriques ; indice de fréquence = arrêts / effectif ; durée moyenne = jours / arrêts.
- Heures théoriques : 2 288 heures par an (article 184) moins congés et jours fériés chômés.
- **Taux de fréquence** = accidents avec arrêt × 1 000 000 / heures travaillées ; **taux de gravité** = jours perdus × 1 000 / heures travaillées (loi 18-12).
`,
    exercices: md`
### Exercice 2 — Rotation trimestrielle

Une enseigne de restauration rapide de Casablanca comptait 220 salariés au 1er juillet et 240 au 30 septembre. Au troisième trimestre, elle a enregistré 50 entrées et 30 sorties, dont 24 démissions.

1. Calculez l'effectif moyen du trimestre et le taux de rotation trimestriel.
2. Annualisez le taux de rotation et commentez.

<details><summary>Voir le corrigé</summary>

1. Effectif moyen : (220 + 240) / 2 = **230** ; rotation : ((50 + 30) / 2) / 230 = 40 / 230 = **17,39 %** sur le trimestre.
2. En rythme annuel : 17,39 % × 4 ≈ **69,6 %**. Un tel niveau est fréquent dans la restauration rapide (emplois étudiants, horaires décalés), mais 24 démissions sur 30 sorties en un trimestre montrent que l'enseigne retient mal ses équipes : à chaque départ, il faut recruter et former, au détriment de la qualité de service. Un suivi par restaurant et des entretiens de départ s'imposent.

</details>

### Exercice 3 — Absentéisme et accidents d'un atelier

Un atelier de câblage automobile de Kénitra emploie 150 opérateurs, chacun devant 1 900 heures dans l'année. Il a enregistré 14 250 heures d'absence (dont 3 200 pour accidents du travail), 210 arrêts et 6 accidents avec arrêt. La journée compte 8 heures.

1. Calculez le taux d'absentéisme, l'indice de fréquence des absences et la durée moyenne d'un arrêt (en jours).
2. Calculez les taux de fréquence et de gravité des accidents.

<details><summary>Voir le corrigé</summary>

1. Heures théoriques : 150 × 1 900 = 285 000 ; taux d'absentéisme : 14 250 / 285 000 = **5 %**. Indice de fréquence : 210 / 150 = **1,4 arrêt** par salarié. Durée moyenne : 14 250 / 8 = 1 781,25 jours / 210 ≈ **8,5 jours** par arrêt.
2. Heures travaillées : 285 000 − 14 250 = 270 750. Taux de fréquence : 6 × 1 000 000 / 270 750 ≈ **22,16**. Jours perdus : 3 200 / 8 = 400 ; taux de gravité : 400 × 1 000 / 270 750 ≈ **1,48**. Les accidents sont à la fois fréquents et graves : un plan de prévention sur les postes concernés est prioritaire.

</details>
`,
    qcm: [
      { q: "Le taux de rotation du personnel se calcule par :", choix: ["Sorties / effectif de fin d'année", "((Entrées + sorties) / 2) / effectif moyen", "Entrées - sorties", "Démissions / embauches"], bonne: 1, explication: "Moyenne des entrées et des sorties rapportée à l'effectif moyen." },
      { q: "Le motif de sortie qui mesure le mieux la capacité de l'entreprise à retenir ses salariés est :", choix: ["La fin de CDD", "La démission", "Le départ à la retraite", "Le décès"], bonne: 1, explication: "C'est le départ choisi par le salarié." },
      { q: "Le taux de stabilité rapporte :", choix: ["Les salariés présents au début et à la fin de la période à l'effectif initial", "Les entrées à l'effectif final", "Les CDI aux CDD", "Les heures travaillées aux heures payées"], bonne: 0, explication: "Il complète le taux de rotation." },
      { q: "Les congés payés annuels :", choix: ["Font partie de l'absentéisme", "Sont des absences prévues, déduites des heures théoriques", "Sont comptés comme accidents du travail", "Ne sont jamais payés"], bonne: 1, explication: "Seules les absences non programmées constituent l'absentéisme." },
      { q: "Le taux d'absentéisme se calcule par :", choix: ["Heures d'absence / heures théoriques de travail", "Nombre d'arrêts / heures travaillées", "Jours de congé / effectif", "Heures supplémentaires / heures payées"], bonne: 0, explication: "Part du temps de travail perdue." },
      { q: "Des absences courtes et répétées signalent plutôt :", choix: ["Un problème de motivation ou de management", "Une maladie grave", "Un accident de trajet", "Un congé de maternité"], bonne: 0, explication: "Les absences longues renvoient plutôt à la santé." },
      { q: "Le taux de fréquence des accidents du travail rapporte le nombre d'accidents avec arrêt à :", choix: ["Mille heures travaillées", "Un million d'heures travaillées", "L'effectif inscrit", "La masse salariale"], bonne: 1, explication: "Accidents × 1 000 000 / heures réellement travaillées." },
      { q: "Le taux de gravité mesure :", choix: ["Les jours perdus pour mille heures travaillées", "Le nombre d'accidents par salarié", "Le coût de l'assurance", "Le nombre de décès"], bonne: 0, explication: "Jours perdus × 1 000 / heures travaillées." },
      { q: "La durée légale annuelle du travail dans les activités non agricoles est de :", choix: ["1 600 heures", "2 080 heures", "2 288 heures", "2 496 heures"], bonne: 2, explication: "44 heures par semaine, article 184 du Code du travail." },
      { q: "Un taux de rotation trimestriel de 6 % correspond environ, en rythme annuel, à :", choix: ["6 %", "12 %", "18 %", "24 %"], bonne: 3, explication: "On multiplie par quatre." },
    ],
  },
  4: {
    titre: "La masse salariale et le coût du travail",
    description: "Masse salariale et charges de personnel, éléments du brut, charges patronales 2026 (CNSS, allocations familiales, AMO, TFP), coût employeur et coût horaire.",
    resume: md`
## L'essentiel — Masse salariale et coût du travail

- **Masse salariale** : rémunérations brutes ; **charges de personnel** (compte 617) : masse salariale + charges patronales + autres charges sociales.
- Brut : salaire de base (au moins le **SMIG** : 17,92 DH de l'heure en 2026), **prime d'ancienneté** (5 % à 25 %), heures supplémentaires (+ 25 %, + 50 %, + 100 %), primes, avantages.
- Cotisations **salariales** (CNSS 4,48 % plafonnée, AMO 2,26 %) : retenues sur le salarié, sans effet sur le coût employeur.
- Charges **patronales** 2026 : CNSS 8,98 % plafonnée à 6 000 DH ; allocations familiales 6,40 % ; AMO 4,11 % ; TFP 1,60 %.
- Charges patronales = 8,98 % × min(brut ; 6 000) + 12,11 % × brut : **21,09 %** jusqu'à 6 000 DH.
- Le **taux effectif** baisse quand le salaire dépasse le plafond (16,60 % pour 12 000 DH).
- **Coût horaire** = coût annuel employeur / heures **effectivement travaillées**.
- Mesures : salaire moyen, médian, **éventail** (D9 / D1), écart femmes-hommes à poste comparable (article 346).
- Un salaire moyen qui monte peut venir d'un **effet de structure**, pas d'augmentations.
`,
    exercices: md`
### Exercice 2 — Coût d'un ingénieur

Une société d'ingénierie de Rabat embauche un ingénieur au salaire de base de 20 000 DH par mois, versé sur treize mois (un treizième mois en décembre). Il travaillera effectivement 1 900 heures par an.

1. Calculez les charges patronales et le coût employeur d'un mois ordinaire.
2. Calculez le coût annuel et le coût horaire, sachant que le plafond de 6 000 DH s'apprécie sur le brut total du mois (décembre compris).

<details><summary>Voir le corrigé</summary>

1. Charges : 8,98 % × 6 000 + 12,11 % × 20 000 = 538,80 + 2 422 = **2 960,80 DH** ; coût mensuel : **22 960,80 DH** (taux effectif 14,80 %).
2. En décembre, le brut atteint 40 000 DH, mais la part plafonnée reste de 6 000 DH : le treizième mois ne supporte que 12,11 %, soit 2 422 DH. Coût annuel : 12 × 22 960,80 + 20 000 + 2 422 = 275 529,60 + 22 422 = **297 951,60 DH** ; coût horaire : 297 951,60 / 1 900 ≈ **156,82 DH**.

</details>

### Exercice 3 — Heures supplémentaires

Un technicien au salaire brut de 6 685 DH pour 191 heures effectue en mars 10 heures supplémentaires entre 18 heures et 21 heures un jour ouvrable et 4 heures de nuit le jour de son repos hebdomadaire.

1. Calculez le taux horaire et le montant des heures supplémentaires.
2. Calculez le supplément de charges patronales dû à ces heures.

<details><summary>Voir le corrigé</summary>

1. Taux horaire : 6 685 / 191 = **35 DH**. Heures de jour, jour ouvrable : 10 × 35 × 1,25 = 437,50 DH ; heures de nuit le jour du repos : 4 × 35 × 2 = 280 DH. Total : **717,50 DH**.
2. Le brut passe de 6 685 à 7 402,50 DH ; le salaire dépasse déjà le plafond de 6 000 DH, donc seul le taux de 12,11 % s'applique au supplément : 717,50 × 12,11 % ≈ **86,89 DH**. Le coût total des heures supplémentaires est de 804,39 DH.

</details>
`,
    qcm: [
      { q: "La masse salariale correspond :", choix: ["Aux rémunérations brutes versées", "Au salaire net à payer", "Au chiffre d'affaires", "Aux seules cotisations patronales"], bonne: 0, explication: "Les charges de personnel y ajoutent les charges patronales." },
      { q: "Le SMIG horaire des activités non agricoles depuis le 1er janvier 2026 est de :", choix: ["14,81 DH", "16,29 DH", "17,92 DH", "19,50 DH"], bonne: 2, explication: "Environ 3 423 DH pour 191 heures." },
      { q: "La part patronale CNSS (court et long terme) est de 8,98 % :", choix: ["Sur la totalité du salaire", "Sur le salaire plafonné à 6 000 DH par mois", "Sur le salaire net", "Sur la seule prime d'ancienneté"], bonne: 1, explication: "1,05 % + 7,93 %, plafonnés." },
      { q: "Le taux patronal des allocations familiales est de :", choix: ["1,60 %", "4,11 %", "6,40 %", "8,98 %"], bonne: 2, explication: "Sans plafond." },
      { q: "Pour un salaire brut de 5 000 DH, les charges patronales s'élèvent à :", choix: ["605,50 DH", "1 054,50 DH", "1 500 DH", "224 DH"], bonne: 1, explication: "21,09 % × 5 000." },
      { q: "Le taux effectif de charges patronales d'un salaire de 12 000 DH est d'environ :", choix: ["21,09 %", "16,60 %", "12,11 %", "8,98 %"], bonne: 1, explication: "1 992 / 12 000, à cause du plafond." },
      { q: "Le coût horaire d'un salarié se calcule sur :", choix: ["Les heures payées", "Les heures effectivement travaillées", "Les heures supplémentaires seules", "La durée légale seule"], bonne: 1, explication: "Congés et fériés sont payés sans être travaillés." },
      { q: "Une heure supplémentaire effectuée à 23 heures un jour ouvrable est majorée de :", choix: ["25 %", "50 %", "100 %", "0 %"], bonne: 1, explication: "50 % entre 21 heures et 6 heures (article 201)." },
      { q: "Les cotisations salariales CNSS et AMO :", choix: ["Augmentent le coût employeur", "Sont retenues sur le salaire brut du salarié", "Sont payées par l'État", "Sont incluses dans la TFP"], bonne: 1, explication: "Elles réduisent le net, pas le coût employeur." },
      { q: "Le principe d'égalité salariale entre les femmes et les hommes s'apprécie :", choix: ["Sur les salaires moyens globaux", "Pour un travail de valeur égale", "Uniquement chez les cadres", "Uniquement au SMIG"], bonne: 1, explication: "Article 346 du Code du travail." },
    ],
  },
  5: {
    titre: "Expliquer l'évolution de la masse salariale",
    description: "Augmentations générales et individuelles, effets niveau, masse et report, glissement vieillesse technicité (GVT), effet noria, effets effectif et structure.",
    resume: md`
## L'essentiel — Évolution de la masse salariale

- Masse salariale = effectif moyen × salaire moyen : elle varie par le **volume** et par le **prix**.
- Sources : augmentations **générales** (AG) et **individuelles** (AI), ancienneté, promotions, entrées et sorties, effectif et structure.
- **Effet niveau** : salaire de décembre N / salaire de décembre N − 1 − 1.
- **Effet masse** : masse annuelle N avec augmentations / masse sans augmentation − 1 ; il dépend des **dates**.
- **Effet report** : hausse de la masse de N + 1 due aux augmentations de N, sans nouvelle augmentation.
- Relation : (1 + effet masse) × (1 + effet report) = 1 + effet niveau.
- Masse N / masse N − 1 = (1 + report de N − 1) × (1 + effet masse de N), à effectif constant.
- **GVT positif** : ancienneté et promotions ; **effet noria** (GVT négatif) : remplacement d'anciens par des recrues moins payées ; GVT solde = somme des deux.
- **Effet structure** : une hausse de la part des catégories bien payées fait monter le salaire moyen sans augmentation individuelle.
`,
    exercices: md`
### Exercice 2 — Choisir la date d'une augmentation

Une entreprise de 80 salariés au salaire moyen de 7 500 DH (décembre N − 1) veut accorder 4 % d'augmentation générale en N. Elle hésite entre le 1er janvier et le 1er juillet.

1. Calculez pour chaque option l'effet niveau, l'effet masse et l'effet report.
2. Calculez le coût de chaque option sur N et sur N + 1 (masse brute).

<details><summary>Voir le corrigé</summary>

1. **1er janvier** : effet niveau 4 % ; effet masse 4 % ; effet report 0 %. **1er juillet** : effet niveau 4 % ; effet masse (6 + 6 × 1,04) / 12 − 1 = **2 %** ; effet report 1,04 / 1,02 − 1 ≈ **1,96 %**.
2. Masse sans augmentation : 80 × 7 500 × 12 = 7 200 000 DH. Au 1er janvier : coût N = 288 000 DH, coût N + 1 = 288 000 DH. Au 1er juillet : coût N = 144 000 DH, coût N + 1 = 288 000 DH. Le report ne fait que décaler la dépense : dès N + 1, le salaire de base est le même dans les deux options.

</details>

### Exercice 3 — Effet de structure

Un cabinet comptable d'Oujda employait en N − 1 10 experts à 25 000 DH et 30 assistants à 6 000 DH par mois. En N, sans aucune augmentation, il emploie 14 experts et 26 assistants aux mêmes salaires.

1. Calculez le salaire moyen mensuel de N − 1 et de N.
2. Expliquez la variation.

<details><summary>Voir le corrigé</summary>

1. N − 1 : (10 × 25 000 + 30 × 6 000) / 40 = 430 000 / 40 = **10 750 DH**. N : (14 × 25 000 + 26 × 6 000) / 40 = 506 000 / 40 = **12 650 DH**.
2. Le salaire moyen augmente de **17,67 %** alors que personne n'a été augmenté et que l'effectif est stable : c'est un pur **effet de structure**, dû au remplacement de 4 assistants par 4 experts. La masse salariale mensuelle passe de 430 000 à 506 000 DH.

</details>
`,
    qcm: [
      { q: "L'effet niveau mesure :", choix: ["La hausse des salaires entre décembre N - 1 et décembre N", "La hausse de la masse annuelle", "L'incidence sur l'année suivante", "La variation de l'effectif"], bonne: 0, explication: "Cumul des augmentations de l'année." },
      { q: "Une augmentation de 4 % au 1er juillet donne un effet masse sur l'année d'environ :", choix: ["4 %", "2 %", "1 %", "0 %"], bonne: 1, explication: "Six mois à 1, six mois à 1,04." },
      { q: "L'effet report correspond :", choix: ["À la hausse de la masse de N + 1 due aux augmentations accordées en N", "Aux heures supplémentaires reportées", "Aux congés non pris", "À l'augmentation du SMIG"], bonne: 0, explication: "Il existe même sans nouvelle augmentation." },
      { q: "La relation entre les trois effets est :", choix: ["Niveau = masse + report", "(1 + masse) x (1 + report) = 1 + niveau", "Masse = niveau x report", "Report = niveau - 1"], bonne: 1, explication: "Les taux se multiplient." },
      { q: "Plus une augmentation est accordée tard dans l'année :", choix: ["Plus son effet masse est faible et son effet report élevé", "Plus son effet niveau est faible", "Plus son coût de l'année est élevé", "Moins elle pèse l'année suivante"], bonne: 0, explication: "La date est un levier de pilotage." },
      { q: "Le GVT positif est dû :", choix: ["À l'ancienneté et aux promotions", "Aux augmentations générales", "Aux départs à la retraite", "Aux cotisations patronales"], bonne: 0, explication: "Glissement vieillesse technicité." },
      { q: "L'effet noria désigne :", choix: ["La hausse due aux promotions", "La baisse due au remplacement de salariés anciens par des recrues moins payées", "L'effet des heures supplémentaires", "L'effet d'une grève"], bonne: 1, explication: "On l'appelle aussi GVT négatif." },
      { q: "Le GVT solde est :", choix: ["La somme du GVT positif et de l'effet noria", "L'effet niveau moins l'effet masse", "Le total des augmentations générales", "Le salaire moyen de fin d'année"], bonne: 0, explication: "Il peut être faible si les remplacements compensent l'ancienneté." },
      { q: "Le salaire moyen d'une entreprise peut augmenter sans aucune augmentation individuelle à cause :", choix: ["D'un effet de structure", "D'un effet report négatif", "D'une baisse de l'effectif des cadres", "De la TFP"], bonne: 0, explication: "La part des catégories bien payées augmente." },
      { q: "Si l'effet report de N - 1 sur N est de 1 % et l'effet masse de N de 2 %, la masse augmente, à effectif constant, d'environ :", choix: ["1 %", "2 %", "3,02 %", "4 %"], bonne: 2, explication: "1,01 x 1,02 = 1,0302." },
    ],
  },
  6: {
    titre: "Le budget de la masse salariale et l'analyse des écarts",
    description: "Budget de masse salariale mensualisé (effectifs, entrées, sorties, augmentations) et décomposition de l'écart en écarts sur effectif, structure et salaire.",
    resume: md`
## L'essentiel — Budget social et écarts

- Le **budget de la masse salariale** découle des budgets d'activité et alimente le résultat prévisionnel et la trésorerie.
- Trois fonctions : **prévoir**, **autoriser** (budget de postes par manager), **contrôler** (réel contre budget chaque mois).
- Hypothèses : effectif de départ, sorties (retraites à 60 ans, fins de CDD, démissions), entrées **datées**, augmentations datées, GVT, éléments variables, taux de charges.
- Budget **mensualisé** : une embauche en septembre coûte 4 mois en N et 12 en N + 1.
- Écart total = masse réelle − masse budgétée ; positif = **défavorable**.
- Une catégorie : écart sur effectif $(E_r - E_b) S_b$ + écart sur salaire $E_r (S_r - S_b)$.
- Plusieurs catégories : écart sur **effectif** $(E_r - E_b)\bar{S}_b$ ; sur **structure** $\sum E_{r,i} S_{b,i} - E_r \bar{S}_b$ ; sur **salaire moyen** $\sum E_{r,i}(S_{r,i} - S_{b,i})$.
- Contrôle : la somme des trois écarts égale l'écart total.
- Un écart favorable peut cacher des postes vacants, des heures supplémentaires et une baisse de qualité.
`,
    exercices: md`
### Exercice 2 — Budget d'un service

Le service après-vente d'une société d'électroménager de Casablanca compte au 1er janvier 12 techniciens à 7 500 DH par mois. Hypothèses pour N : augmentation générale de 2,5 % au 1er avril ; départ d'un technicien au 31 mai, remplacé le 1er août par une recrue à 7 000 DH ; charges patronales estimées à 19 %.

1. Calculez la masse brute budgétée de N, période par période.
2. Calculez la masse chargée.

<details><summary>Voir le corrigé</summary>

1. Janvier à mars : 12 × 7 500 × 3 = 270 000 DH. Avril et mai : 12 × 7 687,50 × 2 = 184 500 DH. Juin et juillet : 11 × 7 687,50 × 2 = 169 125 DH. Août à décembre : (11 × 7 687,50 + 7 000) × 5 = (84 562,50 + 7 000) × 5 = 457 812,50 DH. Total : **1 081 437,50 DH**.
2. Masse chargée : 1 081 437,50 × 1,19 ≈ **1 286 910,63 DH**.

</details>

### Exercice 3 — Écart d'une seule catégorie

Une usine de Tanger avait budgété 180 opérateurs à un salaire moyen annuel de 54 000 DH. Elle en a employé en moyenne 172, à un salaire moyen de 57 000 DH (nombreuses heures supplémentaires).

1. Calculez l'écart total et décomposez-le.
2. Commentez.

<details><summary>Voir le corrigé</summary>

1. Masse budgétée : 180 × 54 000 = 9 720 000 DH ; réelle : 172 × 57 000 = 9 804 000 DH ; écart total : **+ 84 000 DH** (D). Écart sur effectif : (172 − 180) × 54 000 = **− 432 000 DH** (F) ; écart sur salaire : 172 × 3 000 = **+ 516 000 DH** (D). Total : − 432 000 + 516 000 = + 84 000 ✓.
2. L'écart total, faible, cache deux écarts importants de sens contraire : 8 postes non pourvus ont été compensés par des heures supplémentaires qui ont fait monter le salaire moyen de 5,6 %. L'usine paie presque le budget pour moins de salariés, avec un risque de fatigue, d'accidents et d'absentéisme : il faut pourvoir les postes vacants.

</details>
`,
    qcm: [
      { q: "Le budget de la masse salariale se construit de préférence :", choix: ["En divisant la masse de l'année précédente par douze", "Mois par mois, avec les dates d'entrée, de sortie et d'augmentation", "Uniquement à partir du chiffre d'affaires", "Sans tenir compte des départs"], bonne: 1, explication: "Les dates changent le coût de l'année." },
      { q: "Une embauche prévue le 1er septembre coûte dans le budget de l'année :", choix: ["12 mois de salaire", "8 mois", "4 mois", "Rien"], bonne: 2, explication: "Septembre à décembre ; 12 mois l'année suivante." },
      { q: "Un écart sur masse salariale positif (réel supérieur au budget) est :", choix: ["Favorable", "Défavorable", "Neutre", "Impossible"], bonne: 1, explication: "La dépense dépasse la prévision." },
      { q: "L'écart sur effectif se calcule avec :", choix: ["Le salaire moyen réel", "Le salaire moyen budgété", "Le SMIG", "Le salaire du dirigeant"], bonne: 1, explication: "(Effectif réel - effectif budgété) x salaire moyen budgété." },
      { q: "L'écart sur structure apparaît :", choix: ["Quand l'effectif comporte plusieurs catégories de salaires différents", "Uniquement en cas de grève", "Quand il n'y a qu'une catégorie", "Quand les salaires baissent"], bonne: 0, explication: "Il mesure l'effet de la composition de l'effectif." },
      { q: "La masse intermédiaire utilisée pour l'écart de structure est :", choix: ["L'effectif réel payé aux salaires budgétés de chaque catégorie", "L'effectif budgété payé aux salaires réels", "La masse de l'année précédente", "La masse nette"], bonne: 0, explication: "Somme des effectifs réels par catégorie x salaires budgétés." },
      { q: "Des heures supplémentaires plus nombreuses que prévu apparaissent surtout dans :", choix: ["L'écart sur effectif", "L'écart sur salaire moyen", "L'écart sur structure", "Aucun écart"], bonne: 1, explication: "Elles font monter le salaire moyen réel." },
      { q: "Recruter des cadres au lieu des employés prévus crée surtout :", choix: ["Un écart sur structure défavorable", "Un écart sur effectif favorable", "Un effet noria", "Un écart nul"], bonne: 0, explication: "La part des salaires élevés augmente." },
      { q: "La somme des écarts sur effectif, structure et salaire moyen doit être égale :", choix: ["À la masse réelle", "À l'écart total", "À zéro", "À la masse budgétée"], bonne: 1, explication: "C'est un contrôle de calcul." },
      { q: "Un écart favorable sur effectif peut être un mauvais signe s'il révèle :", choix: ["Des postes vacants qui dégradent la qualité de service", "Une baisse des cotisations", "Une hausse de la productivité mesurée", "Un budget trop prudent seulement"], bonne: 0, explication: "Il faut toujours en chercher la cause." },
    ],
  },
  7: {
    titre: "Les coûts cachés et la rentabilité des actions RH",
    description: "Coûts cachés des dysfonctionnements (méthode ISEOR de Savall), coût de l'absentéisme et de la rotation, ROI d'une formation et d'un plan d'action RH.",
    resume: md`
## L'essentiel — Coûts cachés et rentabilité

- **Coûts cachés** : coûts des dysfonctionnements non identifiés comme tels par la comptabilité (dispersés dans d'autres comptes ou produits non réalisés).
- Méthode **ISEOR** (Henri Savall) : 5 indicateurs (absentéisme, accidents, rotation, non-qualité, écarts de productivité directe).
- 5 composantes : **sursalaires**, **surtemps**, **surconsommations**, **non-production**, **non-création de potentiel**.
- Une heure perdue se valorise à la **marge sur coût variable** horaire, pas au chiffre d'affaires horaire.
- Coût de l'absentéisme : salaire maintenu, remplacement (heures supplémentaires, intérim), production perdue, temps de régulation.
- Coût d'un départ : départ, vacance, recrutement, formation initiale, apprentissage (productivité réduite).
- Formation : **TFP** de 1,6 %, loi 60-17 ; évaluation de **Kirkpatrick** (réactions, apprentissages, comportements, résultats) et **ROI** de Phillips.
- ROI = (gains attribuables − coût) / coût ; isoler l'effet par un groupe témoin ou une comparaison avant-après.
- Toujours expliciter les hypothèses et tester leur **sensibilité**.
`,
    exercices: md`
### Exercice 2 — Coût d'un accident du travail

Dans une usine d'emballage de Berrechid, un cariste (coût horaire employeur : 48 DH) est arrêté 30 jours de 8 heures après un accident. L'assureur prend en charge l'indemnisation pendant l'arrêt. L'usine le remplace par un intérimaire facturé 62 DH de l'heure ; l'encadrement passe 10 heures (coût horaire 120 DH) à l'enquête et à la réorganisation ; une palette endommagée coûte 4 500 DH.

1. Calculez le coût de l'accident pour l'usine, hors prime d'assurance.
2. Classez chaque élément selon les composantes de l'ISEOR.

<details><summary>Voir le corrigé</summary>

1. Intérim : 30 × 8 × 62 = 14 880 DH ; temps de l'encadrement : 10 × 120 = 1 200 DH ; dégâts : 4 500 DH. Total : **20 580 DH**, sans compter la hausse future de la prime d'assurance.
2. Intérim : **surconsommation** (et sursalaire, l'heure d'intérimaire coûtant plus cher que l'heure du cariste) ; temps de l'encadrement : **surtemps** ; palette endommagée : **surconsommation**. Si la production avait ralenti faute de remplaçant formé, il faudrait ajouter une **non-production**.

</details>

### Exercice 3 — ROI d'une formation

Une banque de Rabat forme 25 conseillers à la vente de produits d'épargne. Coût : formateur 60 000 DH, salaires des participants pendant la formation 45 000 DH, frais 15 000 DH. Les conseillers formés ont augmenté leur marge de 210 000 DH sur l'année ; un groupe témoin de conseillers non formés a progressé de 4 %, ce qui représente 50 000 DH sur la même base.

1. Calculez le coût de la formation et le gain attribuable.
2. Calculez le ROI.

<details><summary>Voir le corrigé</summary>

1. Coût : 60 000 + 45 000 + 15 000 = **120 000 DH**. Gain attribuable : 210 000 − 50 000 = **160 000 DH** (on retire la progression qui aurait eu lieu sans formation).
2. ROI = (160 000 − 120 000) / 120 000 ≈ **33,3 %**. Sans le groupe témoin, on aurait annoncé un ROI de 75 %, surestimé.

</details>
`,
    qcm: [
      { q: "Les coûts cachés sont :", choix: ["Des coûts volontairement dissimulés par la comptabilité", "Des coûts de dysfonctionnements non identifiés comme tels dans le système comptable", "Des impôts différés", "Des charges exceptionnelles"], bonne: 1, explication: "Ils sont dispersés dans d'autres comptes ou correspondent à des produits non réalisés." },
      { q: "La méthode des coûts cachés a été développée par :", choix: ["Henri Savall et l'ISEOR", "Kaplan et Norton", "Frederick Taylor", "Henri Fayol"], bonne: 0, explication: "Lyon, années 1970." },
      { q: "Parmi les cinq indicateurs de dysfonctionnement de l'ISEOR figure :", choix: ["Le chiffre d'affaires", "La rotation du personnel", "Le capital social", "Le taux d'intérêt"], bonne: 1, explication: "Avec l'absentéisme, les accidents, la non-qualité et les écarts de productivité." },
      { q: "Le temps passé par un manager à réorganiser le planning après une absence est :", choix: ["Un sursalaire", "Un surtemps", "Une non-production", "Une surconsommation"], bonne: 1, explication: "Temps consacré à réguler le dysfonctionnement." },
      { q: "Une heure de production perdue se valorise de préférence :", choix: ["Au chiffre d'affaires horaire", "À la marge sur coût variable horaire", "Au SMIG", "À zéro"], bonne: 1, explication: "C'est ce que rapporte réellement une heure de travail." },
      { q: "Le coût d'un départ comprend notamment :", choix: ["Le recrutement, l'intégration et la productivité réduite du remplaçant", "Uniquement l'indemnité de départ", "Uniquement le salaire du remplaçant", "Les dividendes"], bonne: 0, explication: "Le coût réel dépasse souvent plusieurs mois de salaire." },
      { q: "Le cinquième niveau d'évaluation de la formation ajouté par Phillips est :", choix: ["Les réactions", "Les apprentissages", "Le retour sur investissement", "Les comportements"], bonne: 2, explication: "Après les quatre niveaux de Kirkpatrick." },
      { q: "Le ROI d'une action RH se calcule par :", choix: ["(Gains - coût) / coût", "Coût / gains", "Gains x coût", "Gains / effectif"], bonne: 0, explication: "Gains nets attribuables à l'action." },
      { q: "Un groupe témoin sert à :", choix: ["Isoler l'effet propre d'une action", "Réduire la TFP", "Calculer l'effet noria", "Remplacer les absents"], bonne: 0, explication: "On retire la progression qui aurait eu lieu sans l'action." },
      { q: "Compter une heure d'absence à la fois comme heure supplémentaire de remplacement et comme production perdue revient à :", choix: ["Un double comptage", "Une méthode correcte", "Un effet de structure", "Un écart favorable"], bonne: 0, explication: "Une heure remplacée n'est pas perdue en production." },
    ],
  },
  8: {
    titre: "Tableaux de bord sociaux, bilan social et audit social",
    description: "Construire et lire un tableau de bord social (indicateurs, cibles, feux), climat social, bilan social, rapport ESG de l'AMMC et trois niveaux d'audit social.",
    resume: md`
## L'essentiel — Tableaux de bord, bilan et audit sociaux

- **Tableau de bord social** : peu d'indicateurs, comparés à des cibles, avec alertes, produits vite et adaptés au destinataire.
- Familles : emploi, rémunérations et coûts, temps et santé, compétences, **climat social**, diversité et équité.
- Indicateurs **avancés** (enquête de climat, formation) et indicateurs **de résultat** (démissions, absentéisme, accidents).
- Taux de grève = journées de grève / journées théoriques ; grève encadrée par la **loi organique 97-15**.
- Cible d'un indicateur cumulé **proratisée** (9/12 à fin septembre) ; taux trimestriel **annualisé** (× 4).
- Chaque feu rouge : cause, action, responsable, échéance.
- **Bilan social** : synthèse annuelle chiffrée ; obligatoire en France dès 300 salariés, **volontaire** au Maroc.
- **Rapport ESG** des émetteurs : circulaire **AMMC 03/19**, publié depuis 2020 (effectifs par genre, formation, santé et sécurité).
- **Audit social** : conformité, efficacité, stratégique ; ponctuel et complémentaire du contrôle de gestion sociale.
`,
    exercices: md`
### Exercice 2 — Choisir les indicateurs

La direction d'une chaîne de pharmacies de Marrakech fixe trois objectifs pour l'année : réduire les départs des préparateurs, maîtriser la masse salariale et améliorer l'accueil des clients.

Proposez deux indicateurs par objectif, avec leur formule et leur périodicité.

<details><summary>Voir le corrigé</summary>

- **Départs** : taux de démission des préparateurs = démissions / effectif moyen des préparateurs (trimestriel, annualisé) ; part des recrues encore présentes après un an (taux de stabilité d'une cohorte, annuel).
- **Masse salariale** : écart de la masse cumulée au budget cumulé, en valeur et en pourcentage (mensuel) ; heures supplémentaires / heures travaillées (mensuel).
- **Accueil** : heures de formation à l'accueil par salarié, comparées à l'objectif proratisé (trimestriel) ; note moyenne de satisfaction des clients ou nombre de réclamations pour 1 000 clients (mensuel). Le premier est un indicateur avancé, le second un indicateur de résultat.

</details>

### Exercice 3 — Conformité ou efficacité ?

Classez chaque constat d'un auditeur social selon le niveau d'audit (conformité, efficacité, stratégique) : a) trois salariés ayant plus de cinq ans d'ancienneté perçoivent une prime d'ancienneté de 5 % ; b) le coût par recrutement a doublé sans amélioration de la tenue des postes ; c) l'entreprise veut se développer à l'export mais aucun recrutement ni aucune formation en langues n'est prévu ; d) le registre d'employeur n'est pas à jour.

<details><summary>Voir le corrigé</summary>

a) **Conformité** : le taux de la prime d'ancienneté est de 10 % après cinq ans (article 350).
b) **Efficacité** : la politique de recrutement coûte plus sans meilleurs résultats.
c) **Stratégique** : la politique RH n'est pas cohérente avec la stratégie de l'entreprise.
d) **Conformité** : obligation du Code du travail.

</details>
`,
    qcm: [
      { q: "Un bon tableau de bord social comporte :", choix: ["Le plus grand nombre possible d'indicateurs", "Un nombre restreint d'indicateurs comparés à des cibles", "Uniquement des données individuelles", "Uniquement des chiffres annuels"], bonne: 1, explication: "Un tableau qui suit tout ne pilote rien." },
      { q: "À fin septembre, un objectif annuel de 16 heures de formation par salarié se compare à :", choix: ["16 heures", "12 heures", "8 heures", "4 heures"], bonne: 1, explication: "16 x 9/12." },
      { q: "Un taux de rotation de 5 % sur un trimestre correspond, en rythme annuel, à :", choix: ["5 %", "10 %", "15 %", "20 %"], bonne: 3, explication: "On multiplie par quatre." },
      { q: "Parmi les indicateurs suivants, un indicateur avancé du climat social est :", choix: ["Le nombre de démissions de l'année", "Le résultat d'une enquête de satisfaction", "Le nombre de jours de grève passés", "Le taux de gravité"], bonne: 1, explication: "Il annonce les résultats futurs." },
      { q: "Au Maroc, le bilan social des entreprises privées est :", choix: ["Obligatoire dès 50 salariés", "Obligatoire dès 300 salariés", "Volontaire, le Code du travail ne l'imposant pas", "Interdit"], bonne: 2, explication: "Il est obligatoire en France dès 300 salariés." },
      { q: "Le rapport ESG des sociétés faisant appel public à l'épargne est imposé par :", choix: ["La circulaire AMMC 03/19", "La loi 18-12", "Le dahir de 1972 sur la CNSS", "La loi 60-17"], bonne: 0, explication: "Première publication en 2020." },
      { q: "L'audit social de conformité vérifie notamment :", choix: ["Le respect du Code du travail et des déclarations sociales", "La rentabilité des actions de formation", "La cohérence entre la stratégie et la politique RH", "Le cours de Bourse"], bonne: 0, explication: "Comparaison avec les règles applicables." },
      { q: "L'exercice du droit de grève est encadré par :", choix: ["La loi organique 97-15", "La loi 09-08", "La loi 114-13", "La loi 15-18"], bonne: 0, explication: "Adoptée en 2025." },
      { q: "Le tableau de bord social se distingue du bilan social parce qu'il est :", choix: ["Un outil de pilotage régulier et restreint", "Un document annuel exhaustif", "Obligatoire pour toutes les entreprises", "Publié par l'AMMC"], bonne: 0, explication: "Le bilan social est une synthèse annuelle." },
      { q: "Le HR scorecard, qui relie pratiques RH et performance, est associé à :", choix: ["Becker, Huselid et Ulrich", "Savall et Zardet", "Kirkpatrick", "Herzberg"], bonne: 0, explication: "Publié en 2001." },
    ],
  },
};

export default chapitres;
