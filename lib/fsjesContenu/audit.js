// Audit (S6) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Introduction à l'audit et cadre légal marocain",
    description: "Audit et commissariat aux comptes au Maroc : types d'audit, lois 15-89, 17-95 et 5-96, nomination, mission, limites, indépendance et incompatibilités du CAC.",
    resume: md`
## L'essentiel — Audit et cadre légal

- Audit : examen par un professionnel **indépendant** pour exprimer une **opinion** ; **assurance raisonnable** d'absence d'anomalies significatives.
- Formes : externe / interne ; **légal** / contractuel ; financier, opérationnel, de conformité… ; public (Cour des comptes).
- **Loi 15-89** : Ordre des experts-comptables ; seuls les experts-comptables inscrits sont commissaires aux comptes ; normes de l'Ordre et ISA.
- CAC obligatoire : **SA** (au moins 1, 2 si appel public à l'épargne) ; **SARL**, SNC, SCS si CA HT > **50 MDH** (sinon désignation en justice à la demande d'associés détenant ¼ du capital).
- Nomination par l'AGO pour **3 exercices** ; révocation seulement par le juge.
- Mission : **certification** (régularité, sincérité, image fidèle), vérifications spécifiques, **rapport spécial** (conventions réglementées), révélation des **faits délictueux** au procureur du Roi, **alerte**.
- Limites : non-immixtion dans la gestion, sondages, secret professionnel.
- **Incompatibilités** : dirigeants, parents et alliés jusqu'au 4ᵉ degré, salariés ; délai de 5 ans avant de devenir dirigeant ; ne pas auditer son propre travail.
`,
    exercices: md`
### Exercice 2 — Audit interne ou externe ?

Pour chaque situation, précisez s'il s'agit d'audit interne ou externe, légal ou contractuel :
1. Le commissaire aux comptes d'une SA certifie les comptes annuels.
2. Le service d'audit d'une banque vérifie les procédures d'octroi des crédits dans les agences.
3. Un fonds d'investissement fait examiner les comptes d'une PME qu'il envisage de racheter.
4. Une coopérative bénéficiaire d'un financement international fait vérifier l'utilisation des fonds, comme l'exige le bailleur.

<details><summary>Voir le corrigé</summary>

1. Audit **externe légal** (commissariat aux comptes).
2. Audit **interne** (au service de la direction, sur les procédures).
3. Audit **externe contractuel** (audit d'acquisition).
4. Audit **externe contractuel** (exigé par un contrat de financement).

</details>

### Exercice 3 — Les limites de la mission

Un actionnaire reproche au commissaire aux comptes d'une SA : a) de ne pas avoir vérifié chacune des 50 000 factures de l'année ; b) de ne pas avoir conseillé la direction sur le choix d'un nouveau fournisseur ; c) de ne pas avoir détecté une fraude sophistiquée portant sur un montant non significatif.

Ces reproches sont-ils fondés ?

<details><summary>Voir le corrigé</summary>

a) **Non** : l'audit repose sur des **sondages** et donne une assurance raisonnable, pas absolue.
b) **Non** : le commissaire aux comptes ne doit pas **s'immiscer dans la gestion** ; ce serait contraire à son indépendance.
c) **En principe non** : la recherche systématique des fraudes n'est pas l'objet de la mission ; il doit toutefois concevoir ses travaux pour détecter les anomalies **significatives**, y compris celles résultant de fraudes. S'il avait eu connaissance de faits délictueux, il aurait dû les révéler au procureur du Roi.

</details>
`,
    qcm: [
      { q: "L'audit financier donne une assurance :", choix: ["Absolue", "Raisonnable", "Nulle", "Totale sur chaque opération"], bonne: 1, explication: "L'auditeur travaille par sondages." },
      { q: "La loi qui organise la profession d'expert-comptable au Maroc est :", choix: ["La loi 17-95", "La loi 15-89", "La loi 5-96", "La loi 9-88"], bonne: 1, explication: "Elle institue l'Ordre des experts-comptables." },
      { q: "Une SA marocaine doit nommer un commissaire aux comptes :", choix: ["Seulement si elle est cotée", "Toujours", "Si son CA dépasse 50 MDH", "Jamais"], bonne: 1, explication: "Deux si elle fait appel public à l'épargne." },
      { q: "Une SARL doit nommer un CAC lorsque son chiffre d'affaires HT dépasse :", choix: ["10 MDH", "50 MDH", "100 MDH", "5 MDH"], bonne: 1, explication: "Loi 5-96." },
      { q: "Dans une SA, le CAC est nommé pour :", choix: ["Un exercice", "Trois exercices", "Six exercices", "Une durée indéterminée"], bonne: 1, explication: "Par l'assemblée générale ordinaire." },
      { q: "Les conventions réglementées font l'objet d'un :", choix: ["Rapport général", "Rapport spécial", "Rapport de gestion", "Procès-verbal de caisse"], bonne: 1, explication: "Établi par le commissaire aux comptes." },
      { q: "Le CAC qui découvre un fait délictueux doit :", choix: ["Le garder secret", "Le révéler au procureur du Roi", "Démissionner immédiatement", "En informer la presse"], bonne: 1, explication: "Le secret professionnel ne lui est pas opposable." },
      { q: "Un cousin germain d'un administrateur :", choix: ["Peut être CAC sans restriction", "Est frappé d'incompatibilité (4ᵉ degré)", "Doit avoir l'accord du conseil", "Peut être CAC s'il est bénévole"], bonne: 1, explication: "Parents et alliés jusqu'au quatrième degré." },
      { q: "Le CAC peut-il tenir la comptabilité de la société qu'il contrôle ?", choix: ["Oui", "Non, il auditerait son propre travail", "Oui si la société est petite", "Oui avec l'accord de l'AG"], bonne: 1, explication: "Atteinte à l'indépendance." },
      { q: "Le contrôle de la gestion publique relève notamment de :", choix: ["L'OEC", "La Cour des comptes", "L'AMMC", "La CNSS"], bonne: 1, explication: "Ainsi que des cours régionales des comptes." },
    ],
  },

  2: {
    titre: "La démarche générale d'audit",
    description: "Démarche d'audit : acceptation, lettre de mission, prise de connaissance, examen analytique, plan de mission, programme de travail, exécution et conclusion.",
    resume: md`
## L'essentiel — La démarche d'audit

- **Approche par les risques** : concentrer les travaux sur les zones à risque d'anomalies significatives.
- **Acceptation** : indépendance, compétence, intégrité du client, contact avec le prédécesseur ; **lettre de mission** (objet, normes, responsabilités, calendrier, honoraires).
- **Prise de connaissance** : secteur, activité, organisation, système comptable, situation financière ; **examen analytique préliminaire** (ratios, variations inexpliquées).
- **Planification** : seuil de signification, zones de risques, évaluation du contrôle interne, stratégie (contrôles ou substantive) ; **plan de mission** et **programmes de travail**.
- **Exécution** : tests de procédures et contrôles de substance ; feuille de synthèse des anomalies.
- **Conclusion** : événements postérieurs, continuité d'exploitation, revue analytique finale, lettre d'affirmation, note de synthèse, rapports.
- Calendrier : intérim, inventaire, final ; AGO dans les **6 mois** suivant la clôture.
`,
    exercices: md`
### Exercice 2 — Plan de mission ou programme de travail ?

Classez chaque élément : 1) liste des contrôles à réaliser sur les stocks ; 2) seuil de signification retenu ; 3) répartition des 400 heures de la mission par cycle ; 4) « circulariser les 20 principaux clients » ; 5) zones de risques identifiées ; 6) dates d'intervention de l'équipe.

<details><summary>Voir le corrigé</summary>

- **Plan de mission** (stratégie d'ensemble) : 2, 3, 5, 6.
- **Programme de travail** (contrôles détaillés par cycle) : 1, 4.

</details>

### Exercice 3 — Examen analytique

Une entreprise commerciale présente : CA 40 MDH (N−1 : 38) ; achats revendus 30 MDH (N−1 : 26,6) ; dettes fournisseurs 9 MDH (N−1 : 4,4).

1. Calculez le taux de marge commerciale et le délai de paiement des fournisseurs (360 jours) sur les deux exercices.
2. Quelles hypothèses l'auditeur doit-il vérifier ?

<details><summary>Voir le corrigé</summary>

**1)** Taux de marge : N−1 : $(38 - 26{,}6)/38 = \mathbf{30\,\%}$ ; N : $(40 - 30)/40 = \mathbf{25\,\%}$. Délai fournisseurs : N−1 : $4{,}4 / 26{,}6 \times 360 \approx \mathbf{60}$ jours ; N : $9 / 30 \times 360 = \mathbf{108}$ jours.

**2)** Baisse de marge : hausse des prix d'achat non répercutée, erreurs de cut-off (achats de N+1 enregistrés en N), vols de marchandises, stocks sous-évalués. Doublement du délai fournisseurs : difficultés de trésorerie (risque de continuité), dettes enregistrées deux fois, litiges avec des fournisseurs. Il faut confirmer les soldes fournisseurs, tester la séparation des exercices et analyser la trésorerie.

</details>
`,
    qcm: [
      { q: "L'approche d'audit moderne est fondée sur :", choix: ["La vérification exhaustive", "Les risques", "Le hasard", "Le seul examen du bilan"], bonne: 1, explication: "Les travaux sont concentrés sur les zones à risque." },
      { q: "La lettre de mission précise notamment :", choix: ["Le prix de vente des produits", "Les responsabilités respectives de la direction et de l'auditeur", "Les salaires des employés", "Le plan de trésorerie"], bonne: 1, explication: "Elle évite les malentendus." },
      { q: "La responsabilité de l'établissement des comptes appartient à :", choix: ["L'auditeur", "La direction de l'entité", "L'administration fiscale", "Les actionnaires minoritaires"], bonne: 1, explication: "L'auditeur exprime une opinion." },
      { q: "L'examen analytique préliminaire sert à :", choix: ["Certifier les comptes", "Identifier des zones de risque", "Calculer l'impôt", "Remplacer l'inventaire"], bonne: 1, explication: "Les variations inexpliquées sont des signaux." },
      { q: "Le document qui liste les contrôles détaillés par cycle est :", choix: ["La lettre de mission", "Le programme de travail", "Le rapport général", "La lettre d'affirmation"], bonne: 1, explication: "Le plan de mission fixe la stratégie d'ensemble." },
      { q: "Vérifier que les contrôles internes fonctionnent toute l'année relève des :", choix: ["Contrôles de substance", "Tests de procédures", "Événements postérieurs", "Rapports spéciaux"], bonne: 1, explication: "Réalisés souvent en intérim." },
      { q: "L'examen des événements postérieurs à la clôture intervient lors de la phase :", choix: ["D'acceptation", "De prise de connaissance", "De conclusion", "De planification"], bonne: 2, explication: "Juste avant l'émission du rapport." },
      { q: "Dans une SA, l'AGO statuant sur les comptes se tient dans les :", choix: ["3 mois", "6 mois", "9 mois", "12 mois"], bonne: 1, explication: "Suivant la clôture de l'exercice." },
      { q: "Créances clients 15 MDH, CA HT 90 MDH. Le délai moyen (360 jours) est de :", choix: ["45 jours", "60 jours", "90 jours", "30 jours"], bonne: 1, explication: "15 / 90 × 360." },
      { q: "Avant d'accepter une mission succédant à un confrère, l'auditeur :", choix: ["Ignore son prédécesseur", "Prend contact avec lui", "Refuse systématiquement", "Demande l'avis des salariés"], bonne: 1, explication: "Pour connaître les raisons du changement." },
    ],
  },

  3: {
    titre: "Le seuil de signification et le risque d'audit",
    description: "Seuil de signification, seuil de planification, anomalies insignifiantes, risque inhérent, risque lié au contrôle, risque de non-détection et fraude.",
    resume: md`
## L'essentiel — Seuil et risque d'audit

- **Significatif** : susceptible d'influencer les décisions des utilisateurs ; appréciation **quantitative** et **qualitative** (fraude de la direction, clause de prêt, bénéfice transformé en perte).
- Bases usuelles : 5 à 10 % du **résultat avant impôt**, 0,5 à 1 % du CA, 1 à 2 % du total du bilan, 1 à 5 % des capitaux propres.
- **Seuil de planification** : 50 à 75 % du seuil ; **anomalies insignifiantes** : 3 à 5 % ; seuils spécifiques pour les postes sensibles.
- Les anomalies non corrigées se **cumulent** et se comparent au seuil.
- $RA = RI \times RC \times RND$ ; l'auditeur évalue RI et RC et agit sur le **RND** : $RND = RA / (RI \times RC)$.
- RND faible → contrôles de substance plus étendus et plus probants.
- **Triangle de la fraude** : pression, opportunité, rationalisation ; esprit critique, contrôles imprévisibles.
`,
    exercices: md`
### Exercice 2 — Choisir la base du seuil

Pour chaque entité, indiquez la base de calcul la plus pertinente et justifiez :
1. Une start-up en forte croissance, déficitaire.
2. Une holding dont l'actif est composé de participations.
3. Une société industrielle rentable depuis dix ans.
4. Une entreprise dont le résultat est proche de zéro.

<details><summary>Voir le corrigé</summary>

1. **Chiffre d'affaires** (ou total des charges) : le résultat négatif n'est pas une base stable.
2. **Total du bilan** ou **capitaux propres** : c'est le patrimoine qui intéresse les utilisateurs.
3. **Résultat avant impôt** : agrégat stable, le plus suivi par les actionnaires.
4. **Chiffre d'affaires** ou résultat moyen des exercices antérieurs : un pourcentage d'un résultat quasi nul donnerait un seuil absurde.

</details>

### Exercice 3 — Modèle du risque

L'auditeur vise un risque d'audit de 5 %.

1. Pour le cycle ventes, RI = 70 % et RC = 50 %. Calculez le RND acceptable.
2. Après tests, le contrôle interne des ventes se révèle défaillant : RC = 100 %. Recalculez le RND et indiquez les conséquences.

<details><summary>Voir le corrigé</summary>

**1)** $RND = 0{,}05 / (0{,}7 \times 0{,}5) \approx \mathbf{14{,}3\,\%}$.

**2)** $RND = 0{,}05 / (0{,}7 \times 1) \approx \mathbf{7{,}1\,\%}$ : le risque de non-détection acceptable est divisé par deux ; l'auditeur ne peut plus s'appuyer sur le contrôle interne et doit renforcer fortement ses contrôles de substance (confirmations plus nombreuses, cut-off étendu, examen des avoirs postérieurs à la clôture).

</details>
`,
    qcm: [
      { q: "Une information est significative si :", choix: ["Son montant dépasse 1 MDH", "Son omission peut influencer les décisions des utilisateurs", "Elle concerne la trésorerie", "Elle est chiffrée"], bonne: 1, explication: "Définition du caractère significatif." },
      { q: "Pour une entreprise bénéficiaire au résultat stable, la base usuelle du seuil est :", choix: ["Le total du bilan", "Le résultat avant impôt", "Le capital social", "L'effectif"], bonne: 1, explication: "5 à 10 % du résultat." },
      { q: "Résultat avant impôt 8 MDH, taux de 5 %. Le seuil vaut :", choix: ["80 000 DH", "400 000 DH", "800 000 DH", "40 000 DH"], bonne: 1, explication: "8 000 000 × 5 %." },
      { q: "Le seuil de planification est :", choix: ["Supérieur au seuil de signification", "Inférieur au seuil de signification", "Égal au résultat", "Nul"], bonne: 1, explication: "Souvent 50 à 75 % du seuil." },
      { q: "Les anomalies non corrigées doivent être :", choix: ["Examinées isolément", "Cumulées et comparées au seuil", "Ignorées", "Transmises à la presse"], bonne: 1, explication: "Leur cumul peut être significatif." },
      { q: "Le risque sur lequel l'auditeur peut agir directement est :", choix: ["Le risque inhérent", "Le risque de non-détection", "Le risque lié au contrôle", "Le risque de marché"], bonne: 1, explication: "Par la nature et l'étendue de ses contrôles." },
      { q: "RA = 5 %, RI = 50 %, RC = 50 %. Le RND acceptable est :", choix: ["5 %", "20 %", "25 %", "10 %"], bonne: 1, explication: "0,05 / 0,25." },
      { q: "Un risque inhérent élevé et un contrôle interne faible imposent :", choix: ["Moins de contrôles", "Des contrôles de substance plus étendus", "L'abandon de la mission", "Un seuil plus élevé"], bonne: 1, explication: "Le RND acceptable diminue." },
      { q: "Les trois conditions du triangle de la fraude sont :", choix: ["Coût, qualité, délai", "Pression, opportunité, rationalisation", "Risque, seuil, preuve", "Actif, passif, résultat"], bonne: 1, explication: "Modèle de Cressey." },
      { q: "Une petite anomalie liée à une fraude de la direction est :", choix: ["Toujours insignifiante", "Qualitativement significative", "À ignorer si elle est sous le seuil", "Une simple erreur"], bonne: 1, explication: "La nature compte autant que le montant." },
    ],
  },

  4: {
    titre: "L'évaluation du contrôle interne",
    description: "Contrôle interne : objectifs, cinq composantes du COSO, séparation des tâches, questionnaire, tests de cheminement et de permanence, lettre de recommandations.",
    resume: md`
## L'essentiel — Le contrôle interne

- Dispositifs de la **direction** pour une assurance raisonnable : efficacité des opérations, fiabilité de l'information financière, conformité, protection des actifs.
- **COSO** : environnement de contrôle, évaluation des risques, activités de contrôle, information et communication, pilotage.
- **Séparation des tâches** : autorisation, détention, enregistrement, contrôle ; compensée par la supervision dans les petites entités.
- Contrôles clés : autorisations, prénumérotation, rapprochements, protection physique, inventaires, contrôles informatiques.
- Démarche : description (narratif, diagramme) → **test de cheminement** → **QCI** (points forts / faibles) → **tests de permanence** (taux d'écart vs taux tolérable) → évaluation définitive → **lettre de recommandations**.
- Contrôle interne fiable → risque lié au contrôle faible → contrôles de substance réduits.
- Limites : erreur humaine, collusion, contournement par la direction, coût.
`,
    exercices: md`
### Exercice 2 — Fonctions incompatibles

Indiquez si le cumul est acceptable et pourquoi :
1. La même personne enregistre les factures clients et encaisse les règlements en espèces.
2. Le directeur financier approuve les paiements et effectue les rapprochements bancaires.
3. Le magasinier réceptionne les marchandises et les range dans l'entrepôt.
4. Le responsable de la paie saisit les nouveaux salariés dans le logiciel et prépare les virements de salaires.

<details><summary>Voir le corrigé</summary>

1. **Non** : enregistrement et détention ; risque de détournement d'espèces dissimulé par des écritures (avoirs fictifs).
2. **Non** : autorisation et contrôle ; les rapprochements doivent être faits par une personne indépendante des paiements.
3. **Oui** : il s'agit de la même fonction de détention ; il faut en revanche que la commande et l'enregistrement soient faits par d'autres.
4. **Non** : risque de **salariés fictifs** ; la création des salariés doit être autorisée par les RH et les virements contrôlés par une autre personne.

</details>

### Exercice 3 — Test de permanence

Pour tester le visa de contrôle sur les factures fournisseurs, l'auditeur examine 80 factures : 2 ne portent pas le visa. Le taux d'écart tolérable est de 5 %.

1. Calculez le taux d'écart et concluez.
2. Que faire si l'on avait trouvé 6 factures sans visa ?

<details><summary>Voir le corrigé</summary>

**1)** $2 / 80 = \mathbf{2{,}5\,\%} < 5\,\%$ : le contrôle fonctionne de façon satisfaisante ; l'auditeur peut s'appuyer sur lui et réduire ses contrôles de substance sur les achats (en analysant quand même les deux écarts).

**2)** $6 / 80 = 7{,}5\,\% > 5\,\%$ : le contrôle n'est pas fiable ; le risque lié au contrôle est élevé ; l'auditeur étend ses contrôles de substance et le mentionne dans la lettre de recommandations.

</details>
`,
    qcm: [
      { q: "La responsabilité de mettre en place le contrôle interne appartient :", choix: ["À l'auditeur externe", "À la direction de l'entité", "À l'État", "Aux clients"], bonne: 1, explication: "L'auditeur l'évalue." },
      { q: "Le référentiel COSO comprend :", choix: ["Trois composantes", "Cinq composantes", "Sept composantes", "Dix composantes"], bonne: 1, explication: "Environnement, risques, activités, information, pilotage." },
      { q: "La culture d'intégrité de la direction relève de :", choix: ["L'environnement de contrôle", "Des activités de contrôle", "Du pilotage", "De l'information"], bonne: 0, explication: "C'est le socle du dispositif." },
      { q: "La séparation des tâches vise à séparer notamment :", choix: ["Les ventes et les achats", "L'autorisation, la détention, l'enregistrement et le contrôle", "Les services et les usines", "Les cadres et les ouvriers"], bonne: 1, explication: "Pour éviter qu'une personne commette et dissimule une fraude." },
      { q: "La prénumérotation des factures permet surtout de vérifier :", choix: ["L'évaluation", "L'exhaustivité", "La présentation", "Les droits"], bonne: 1, explication: "Aucune facture ne doit manquer." },
      { q: "Suivre une opération de bout en bout pour valider la description est :", choix: ["Un test de permanence", "Un test de cheminement", "Une confirmation", "Un examen analytique"], bonne: 1, explication: "Il vérifie la compréhension de la procédure." },
      { q: "Le test de permanence vérifie :", choix: ["La description d'une procédure", "Le fonctionnement d'un contrôle sur toute la période", "Le solde d'un compte", "La présentation des comptes"], bonne: 1, explication: "Sur un échantillon d'opérations." },
      { q: "Un contrôle interne fiable permet à l'auditeur de :", choix: ["Supprimer tout contrôle", "Réduire l'étendue des contrôles de substance", "Augmenter le seuil", "Émettre une réserve"], bonne: 1, explication: "Le risque lié au contrôle est faible." },
      { q: "Une limite du contrôle interne est :", choix: ["La prénumérotation", "La collusion entre plusieurs personnes", "Les rapprochements", "Les inventaires"], bonne: 1, explication: "Deux complices peuvent contourner la séparation des tâches." },
      { q: "Les faiblesses relevées sont communiquées à la direction par :", choix: ["Le rapport général", "Une lettre de recommandations", "Une plainte", "La lettre de mission"], bonne: 1, explication: "Avec le risque et la recommandation." },
    ],
  },

  5: {
    titre: "Les procédures et techniques de contrôle",
    description: "Techniques d'audit : tests de procédures et de substance, circularisation, inventaire, examen analytique, sondage monétaire et projection des anomalies.",
    resume: md`
## L'essentiel — Techniques de contrôle

- **Tests de procédures** (fonctionnement des contrôles) et **contrôles de substance** (tests de détail et procédures analytiques) ; étendue fixée par le RND.
- Techniques : inspection des documents, **observation physique**, **confirmation externe**, recalcul, réexécution, **procédures analytiques**, demandes d'informations.
- **Circularisation** : sélection par l'auditeur, envoi et réception directs, demande **positive** (plus probante) ou négative, relances, procédures alternatives (encaissements postérieurs, bons de livraison), analyse des écarts.
- **Examen analytique substantif** : estimation indépendante, comparaison, explication des écarts avec pièces.
- **Sondages** par jugement ou statistiques (aléatoire, systématique, **unités monétaires**) ; SUM : $n = V \times$ facteur / erreur tolérable ; intervalle $= V / n$ ; éléments > intervalle contrôlés en totalité.
- Projection : taux d'erreur × intervalle (éléments < intervalle) ; erreur réelle (éléments > intervalle).
`,
    exercices: md`
### Exercice 2 — Quelle technique ?

Proposez la technique la plus probante pour vérifier :
1. l'existence des stocks de produits finis ;
2. le solde d'un emprunt bancaire ;
3. le calcul des dotations aux amortissements ;
4. l'existence d'un litige avec un ancien salarié ;
5. la vraisemblance des intérêts d'emprunt comptabilisés.

<details><summary>Voir le corrigé</summary>

1. **Observation physique** : présence à l'inventaire et comptages par sondage.
2. **Confirmation externe** auprès de la banque.
3. **Recalcul** à partir du tableau des immobilisations.
4. **Confirmation** auprès de l'avocat de l'entreprise et examen des courriers ; entretien avec la direction.
5. **Examen analytique** : capital moyen restant dû × taux d'intérêt, comparé au montant comptabilisé.

</details>

### Exercice 3 — Sondage en unités monétaires

Une population de dettes fournisseurs de 6 000 000 DH est testée avec une erreur tolérable de 200 000 DH et un facteur de confiance de 3.

1. Calculez la taille de l'échantillon et l'intervalle.
2. Une dette de 25 000 DH est enregistrée pour 20 000 DH. Quelle erreur projetée retenir ?

<details><summary>Voir le corrigé</summary>

**1)** $n = 6\,000\,000 \times 3 / 200\,000 = \mathbf{90}$ ; intervalle $= 6\,000\,000 / 90 \approx \mathbf{66\,667}$ DH.

**2)** Taux d'erreur $5\,000 / 25\,000 = 20\,\%$ ; erreur projetée $20\,\% \times 66\,667 \approx \mathbf{13\,333}$ DH (sous-évaluation d'une dette). Pour les dettes, le principal risque est la sous-évaluation (dettes omises) : le sondage monétaire, qui favorise les gros soldes enregistrés, doit être complété par la **recherche de dettes non comptabilisées** (factures reçues et paiements effectués après la clôture).

</details>
`,
    qcm: [
      { q: "Vérifier la présence du visa de contrôle sur les factures est :", choix: ["Un contrôle de substance", "Un test de procédures", "Une confirmation", "Un recalcul"], bonne: 1, explication: "On teste le fonctionnement d'un contrôle." },
      { q: "La technique la plus probante pour l'existence d'une créance est :", choix: ["L'explication du comptable", "La confirmation directe du client", "Le recalcul de la TVA", "L'examen du grand livre"], bonne: 1, explication: "Preuve externe obtenue directement." },
      { q: "Dans une circularisation, les réponses doivent être reçues :", choix: ["Par la comptabilité de l'entité", "Directement par l'auditeur", "Par le directeur commercial", "Par courrier interne"], bonne: 1, explication: "Pour éviter toute manipulation." },
      { q: "Une demande de confirmation positive demande au tiers :", choix: ["De répondre seulement en cas de désaccord", "De répondre dans tous les cas", "De payer sa dette", "De ne pas répondre"], bonne: 1, explication: "Elle est plus probante que la demande négative." },
      { q: "En l'absence de réponse d'un client, l'auditeur :", choix: ["Considère la créance comme confirmée", "Met en œuvre des procédures alternatives", "Émet un refus de certifier", "Supprime la créance"], bonne: 1, explication: "Encaissements postérieurs, bons de livraison." },
      { q: "L'examen analytique substantif consiste à :", choix: ["Compter les stocks", "Comparer une estimation indépendante au montant comptabilisé", "Envoyer des lettres aux banques", "Tester le contrôle interne"], bonne: 1, explication: "Efficace pour les postes prévisibles." },
      { q: "Population 10 MDH, facteur 3, erreur tolérable 250 000 DH. La taille de l'échantillon SUM est :", choix: ["40", "120", "300", "12"], bonne: 1, explication: "10 000 000 × 3 / 250 000." },
      { q: "En sondage monétaire, un élément supérieur à l'intervalle :", choix: ["N'est jamais contrôlé", "Est contrôlé à coup sûr", "Est exclu de la population", "Est projeté au double"], bonne: 1, explication: "Il contient forcément un dirham tiré." },
      { q: "Une sélection par jugement permet de :", choix: ["Extrapoler à toute la population", "Conclure seulement sur les éléments examinés", "Calculer un niveau de confiance", "Éviter tout contrôle"], bonne: 1, explication: "Seul un sondage statistique permet l'extrapolation." },
      { q: "Refaire le rapprochement bancaire de l'entité est :", choix: ["Une réexécution", "Une confirmation", "Une observation", "Une demande d'informations"], bonne: 0, explication: "L'auditeur refait un contrôle de l'entité." },
    ],
  },

  6: {
    titre: "Les éléments probants et la documentation",
    description: "Assertions d'audit (existence, exhaustivité, droits, évaluation, cut-off, présentation), éléments probants, dossiers de travail et lettre d'affirmation.",
    resume: md`
## L'essentiel — Éléments probants et documentation

- **Assertions** : existence, **exhaustivité**, droits et obligations, évaluation, **séparation des exercices**, classification et présentation.
- Actifs et produits : risque de **surévaluation** (existence, évaluation) ; passifs et charges : risque de **sous-évaluation** (exhaustivité).
- Sens du test : existence = des comptes vers les pièces ; exhaustivité = des pièces vers les comptes.
- Éléments probants **suffisants** et **appropriés** (pertinents, fiables) ; externe > interne ; direct > indirect ; écrit > oral ; original > copie.
- **Dossier permanent** (statuts, contrats longs, contrôle interne) et **dossier de l'exercice** (programmes, feuilles de travail, confirmations, synthèse).
- **Feuille de travail** : référence, objectif, source, travaux, anomalies, conclusion, revue.
- **Lettre d'affirmation** : complète les preuves, ne les remplace pas.
`,
    exercices: md`
### Exercice 2 — Sens du test

Pour chaque objectif, indiquez le point de départ du test :
1. S'assurer que les ventes enregistrées correspondent à des livraisons réelles.
2. S'assurer que toutes les livraisons ont été facturées et enregistrées.
3. S'assurer que toutes les dettes fournisseurs sont enregistrées.

<details><summary>Voir le corrigé</summary>

1. **Existence** : partir des **factures enregistrées** (journal des ventes) et remonter aux bons de livraison signés.
2. **Exhaustivité** : partir des **bons de livraison** (prénumérotés) et vérifier qu'ils ont donné lieu à une facture enregistrée.
3. **Exhaustivité** : partir des **factures reçues et des paiements effectués après la clôture**, des bons de réception non facturés et des confirmations fournisseurs, pour vérifier que les dettes de N sont comptabilisées.

</details>

### Exercice 3 — Qualité des preuves

Commentez la force probante de chaque élément :
1. Un relevé bancaire remis par le comptable, sur papier à en-tête de la banque.
2. Une confirmation bancaire adressée directement à l'auditeur.
3. Une attestation du directeur général sur l'absence de litige.
4. Le recalcul par l'auditeur des amortissements.

<details><summary>Voir le corrigé</summary>

1. Document **externe** mais transmis par l'entité : fiabilité bonne, sous réserve d'un risque de falsification ; à rapprocher de la confirmation.
2. Preuve **externe obtenue directement** : très fiable.
3. Déclaration de la direction : **faible** à elle seule ; à corroborer (lettres aux avocats, procès-verbaux, correspondance).
4. Preuve obtenue **directement** par l'auditeur : très fiable pour l'**exactitude** du calcul, mais elle ne prouve pas l'existence des immobilisations.

</details>
`,
    qcm: [
      { q: "La présence à l'inventaire vise principalement l'assertion :", choix: ["Exhaustivité", "Existence", "Présentation", "Droits"], bonne: 1, explication: "Les stocks existent-ils réellement ?" },
      { q: "La recherche de factures fournisseurs reçues après la clôture vise :", choix: ["L'existence", "L'exhaustivité des dettes", "L'évaluation des stocks", "La présentation"], bonne: 1, explication: "Charges et dettes omises." },
      { q: "Pour les actifs, le risque principal est :", choix: ["La sous-évaluation", "La surévaluation", "L'absence de risque", "La mauvaise présentation seulement"], bonne: 1, explication: "On vérifie surtout existence et évaluation." },
      { q: "Vérifier qu'une vente de janvier N+1 n'est pas enregistrée en N concerne :", choix: ["La séparation des exercices", "Les droits et obligations", "L'exhaustivité", "La classification"], bonne: 0, explication: "Test de cut-off." },
      { q: "La preuve la plus fiable est en général :", choix: ["Une explication orale", "Une confirmation externe reçue directement", "Une copie de document interne", "Une note manuscrite du comptable"], bonne: 1, explication: "Externe, écrite, directe." },
      { q: "Les éléments probants doivent être :", choix: ["Nombreux et oraux", "Suffisants et appropriés", "Internes et gratuits", "Toujours exhaustifs"], bonne: 1, explication: "Quantité et qualité." },
      { q: "Les statuts de la société sont classés dans :", choix: ["Le dossier de l'exercice", "Le dossier permanent", "Le rapport général", "La lettre de mission"], bonne: 1, explication: "Utiles plusieurs années." },
      { q: "Une feuille de travail doit obligatoirement comporter :", choix: ["Le salaire de l'auditeur", "Un objectif et une conclusion", "Les statuts", "Le bilan complet"], bonne: 1, explication: "Ainsi que la référence, les travaux et la revue." },
      { q: "La lettre d'affirmation est signée par :", choix: ["L'auditeur", "La direction de l'entité", "Le procureur du Roi", "Les salariés"], bonne: 1, explication: "Elle confirme ses déclarations." },
      { q: "La lettre d'affirmation :", choix: ["Remplace les contrôles", "Complète les éléments probants sans les remplacer", "N'a aucune utilité", "Est publiée avec les comptes"], bonne: 1, explication: "Une affirmation n'est pas une preuve suffisante." },
    ],
  },

  7: {
    titre: "Le contrôle des cycles significatifs",
    description: "Audit par cycles : ventes-clients, achats-fournisseurs, stocks, immobilisations, trésorerie, personnel, séparation des exercices et écritures de correction.",
    resume: md`
## L'essentiel — Le contrôle des cycles

- Cycles : ventes-clients, achats-fournisseurs, stocks, immobilisations, trésorerie, personnel, capitaux propres et impôts.
- **Ventes-clients** : circularisation, bons de livraison, suite numérique, cut-off, **balance âgée** et dépréciations.
- **Achats-fournisseurs** : risque de **sous-évaluation** ; confirmations (y compris soldes nuls), recherche de dettes non comptabilisées, factures non parvenues (4417).
- **Stocks** : présence à l'inventaire, comptages dans les deux sens, valorisation, **dépréciation** si valeur actuelle < coût.
- **Immobilisations** : acquisitions, cessions, recalcul des amortissements ; **trésorerie** : confirmation de toutes les banques, rapprochements ; **personnel** : effectifs, paie, CNSS, dettes sociales.
- **Cut-off** : livraison avant clôture facturée après → factures à établir (3427) ; facture avant clôture, livraison après → annuler la vente et réintégrer le stock ; réception avant clôture, facture après → charge à payer.
- Chiffrer chaque anomalie, proposer l'écriture, cumuler et comparer au seuil.
`,
    exercices: md`
### Exercice 2 — Contrôle de la trésorerie

Au 31 décembre N, le solde comptable du compte bancaire d'une entreprise est de 350 000 DH (débiteur) ; le relevé bancaire indique 410 000 DH (créditeur pour la banque). Suspens : chèques émis non encore débités par la banque 90 000 DH ; remise de chèques du 31 décembre non encore créditée par la banque 40 000 DH ; frais bancaires de décembre non comptabilisés 2 000 DH ; virement reçu d'un client le 30 décembre non comptabilisé 12 000 DH.

1. Établissez le rapprochement bancaire.
2. Quelles écritures l'entreprise doit-elle passer ?

<details><summary>Voir le corrigé</summary>

**1)** Solde banque rectifié : $410\,000 - 90\,000 + 40\,000 = \mathbf{360\,000}$ DH. Solde comptable rectifié : $350\,000 - 2\,000 + 12\,000 = \mathbf{360\,000}$ DH. Les deux soldes concordent ✔.

**2)** D 6147 Services bancaires 2 000 / C 5141 Banques 2 000 ; D 5141 Banques 12 000 / C 3421 Clients 12 000. Les chèques émis et la remise en cours sont des décalages qui se résorberont en janvier : aucune écriture. L'auditeur vérifie sur le relevé de janvier que ces suspens ont bien été dénoués.

</details>

### Exercice 3 — Dépréciation des créances

La balance âgée des créances d'une entreprise au 31 décembre N présente : créances non échues 800 000 DH ; échues depuis moins de 90 jours 150 000 DH ; échues depuis plus de 180 jours 60 000 DH (dont un client en liquidation judiciaire pour 40 000 DH). La dépréciation comptabilisée est de 10 000 DH.

1. Quelles créances présentent un risque ?
2. L'auditeur estime la perte probable à 100 % pour le client en liquidation et à 50 % pour les autres créances de plus de 180 jours. Calculez la dépréciation nécessaire et l'anomalie.

<details><summary>Voir le corrigé</summary>

**1)** Les créances échues depuis **plus de 180 jours**, surtout celle du client en **liquidation judiciaire** ; les créances de moins de 90 jours sont à surveiller.

**2)** Dépréciation nécessaire : $40\,000 \times 100\,\% + 20\,000 \times 50\,\% = \mathbf{50\,000}$ DH (montants hors taxes). Anomalie : $50\,000 - 10\,000 = \mathbf{40\,000}$ DH de dépréciation insuffisante, qui surévalue le résultat et l'actif.

</details>
`,
    qcm: [
      { q: "Pour le cycle achats-fournisseurs, le risque principal est :", choix: ["La surévaluation des dettes", "La sous-évaluation des dettes", "L'excès de trésorerie", "La surévaluation des ventes"], bonne: 1, explication: "Des dettes et charges peuvent être omises." },
      { q: "Il est utile de circulariser des fournisseurs dont le solde est nul car :", choix: ["C'est obligatoire", "Des dettes peuvent avoir été omises", "Ils sont les plus nombreux", "Cela coûte moins cher"], bonne: 1, explication: "Test d'exhaustivité." },
      { q: "Une livraison du 30/12 facturée le 5/01 doit être enregistrée en N au compte :", choix: ["4417", "3427 Clients – factures à établir", "4491", "3911"], bonne: 1, explication: "Principe de séparation des exercices." },
      { q: "Une marchandise reçue le 31/12 et facturée en janvier donne lieu en N à :", choix: ["Un produit à recevoir", "Une charge à payer (factures non parvenues)", "Aucune écriture", "Une provision pour risques"], bonne: 1, explication: "Compte 4417." },
      { q: "Lors de l'inventaire, compter de la liste vers le physique permet de vérifier :", choix: ["L'exhaustivité", "L'existence", "La présentation", "Les droits"], bonne: 1, explication: "Les articles listés existent-ils ?" },
      { q: "Un stock coûtant 50 000 DH, vendable 35 000 DH net de frais, doit être déprécié de :", choix: ["35 000 DH", "15 000 DH", "50 000 DH", "0 DH"], bonne: 1, explication: "Coût − valeur actuelle." },
      { q: "La balance âgée des créances sert surtout à vérifier :", choix: ["L'existence", "L'évaluation", "La présentation", "Le cut-off"], bonne: 1, explication: "Elle révèle les créances douteuses." },
      { q: "Pour la trésorerie, l'auditeur confirme :", choix: ["Seulement le compte principal", "Toutes les banques, y compris les comptes clôturés", "Uniquement la caisse", "Les clients"], bonne: 1, explication: "Pour détecter comptes et engagements non déclarés." },
      { q: "Rapprocher les effectifs de la paie avec les déclarations CNSS permet de détecter :", choix: ["Des stocks obsolètes", "Des salariés fictifs ou non déclarés", "Des ventes fictives", "Des erreurs de TVA"], bonne: 1, explication: "Cycle personnel." },
      { q: "Une vente facturée en décembre pour une livraison de janvier suivant surévalue :", choix: ["Les dettes", "Le chiffre d'affaires de l'exercice", "Les stocks", "La trésorerie"], bonne: 1, explication: "Erreur de séparation des exercices." },
    ],
  },

  8: {
    titre: "Le rapport du commissaire aux comptes",
    description: "Rapport du CAC : structure, opinion sans réserve, avec réserve, défavorable, impossibilité, observation, continuité d'exploitation, rapport spécial et alerte.",
    resume: md`
## L'essentiel — Le rapport du commissaire aux comptes

- **Rapport général** à l'AGO : opinion, fondement, observations, responsabilités de la direction et de l'auditeur, vérifications spécifiques (rapport de gestion), date, signature.
- Opinion **sans réserve** si aucun problème significatif.
- **Désaccord** significatif : réserve (non généralisé) ou **opinion défavorable** (généralisé).
- **Limitation** significative : réserve (non généralisée) ou **impossibilité d'exprimer une opinion** (généralisée).
- **Paragraphe d'observation** : information correctement présentée, opinion inchangée ; **incertitude sur la continuité d'exploitation** bien décrite : sans réserve + paragraphe spécifique.
- **Rapport spécial** : conventions réglementées (autorisation du conseil, approbation de l'AG, intéressé exclu du vote).
- Autres obligations : révélation des **faits délictueux**, **alerte**, signalement des irrégularités, interventions particulières ; responsabilités civile, pénale, disciplinaire.
`,
    exercices: md`
### Exercice 2 — Réserve ou observation ?

Pour chaque situation (seuil de signification 200 000 DH), indiquez l'opinion ou le paragraphe approprié :
1. La société a changé de méthode d'évaluation des stocks et l'explique correctement dans l'ETIC, avec l'incidence chiffrée.
2. Les engagements de crédit-bail importants ne sont pas mentionnés dans l'ETIC.
3. Un incendie a détruit un entrepôt en février N+1 ; l'ETIC le mentionne.
4. La direction refuse la circularisation de ses clients (créances : 15 % du total du bilan), sans autre procédure possible.

<details><summary>Voir le corrigé</summary>

1. **Sans réserve** avec **paragraphe d'observation** sur le changement de méthode (information correcte).
2. **Désaccord** (information obligatoire omise, significative) : **réserve**.
3. **Sans réserve** avec **observation** sur l'événement postérieur correctement décrit.
4. **Limitation** significative, limitée aux créances : **réserve** pour limitation (voire impossibilité si les créances étaient déterminantes pour l'ensemble des comptes).

</details>

### Exercice 3 — Cumul des anomalies et opinion

Seuil de signification : 250 000 DH. Anomalies non corrigées : charges à payer omises 120 000 DH ; dépréciation de stocks insuffisante 90 000 DH ; produit enregistré par erreur en N au lieu de N+1 : 70 000 DH. Le résultat est de 3 000 000 DH.

1. Calculez l'incidence totale.
2. Quelle opinion exprimer si la direction refuse toute correction ? Et si elle corrige l'anomalie de 120 000 DH ?

<details><summary>Voir le corrigé</summary>

**1)** $120\,000 + 90\,000 + 70\,000 = \mathbf{280\,000}$ DH de surévaluation du résultat.

**2)** Sans correction : $280\,000 > 250\,000$ : désaccord significatif mais non généralisé (moins de 10 % du résultat) : **opinion avec réserve**. Après correction de 120 000 DH : reste $160\,000 < 250\,000$ : **opinion sans réserve**.

</details>
`,
    qcm: [
      { q: "Le rapport général du CAC est destiné :", choix: ["Au directeur financier", "À l'assemblée générale des actionnaires", "À l'administration fiscale uniquement", "Aux salariés"], bonne: 1, explication: "Elle statue sur les comptes." },
      { q: "Un désaccord significatif mais limité à un poste conduit à :", choix: ["Une opinion sans réserve", "Une opinion avec réserve", "Une opinion défavorable", "Une impossibilité d'exprimer une opinion"], bonne: 1, explication: "L'incidence n'est pas généralisée." },
      { q: "Un désaccord significatif et généralisé conduit à :", choix: ["Une réserve", "Une opinion défavorable", "Une observation", "Une opinion sans réserve"], bonne: 1, explication: "Refus de certifier pour désaccord." },
      { q: "Une limitation significative et généralisée conduit à :", choix: ["Une opinion défavorable", "Une impossibilité d'exprimer une opinion", "Une réserve", "Une observation"], bonne: 1, explication: "Refus de certifier pour limitation." },
      { q: "Le paragraphe d'observation :", choix: ["Modifie l'opinion", "Attire l'attention sans modifier l'opinion", "Remplace la réserve", "Est interdit"], bonne: 1, explication: "L'information est correctement présentée." },
      { q: "Une incertitude sur la continuité d'exploitation correctement décrite entraîne :", choix: ["Un refus de certifier", "Une opinion sans réserve avec paragraphe spécifique", "Une réserve obligatoire", "La démission du CAC"], bonne: 1, explication: "L'information est adéquate." },
      { q: "Une convention entre la société et son directeur général fait l'objet :", choix: ["Du rapport général seulement", "Du rapport spécial", "D'aucune procédure", "D'un avis de l'AMMC"], bonne: 1, explication: "Convention réglementée." },
      { q: "Ne pas avoir assisté à l'inventaire sans procédure alternative constitue :", choix: ["Un désaccord", "Une limitation", "Une observation", "Un fait délictueux"], bonne: 1, explication: "Les éléments probants sont insuffisants." },
      { q: "Anomalies non corrigées 150 000 DH, seuil 200 000 DH. L'opinion est :", choix: ["Avec réserve", "Sans réserve", "Défavorable", "Impossibilité"], bonne: 1, explication: "Le cumul n'est pas significatif." },
      { q: "La procédure d'alerte est déclenchée en cas de :", choix: ["Faits compromettant la continuité de l'exploitation", "Hausse du chiffre d'affaires", "Changement de logiciel", "Distribution de dividendes"], bonne: 0, explication: "Livre V du Code de commerce." },
    ],
  },
};

export default chapitres;
