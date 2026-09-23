// Audit & Commissariat aux comptes (S6) — compléments par chapitre.
const md = String.raw;

export default {
  1: {
    titre: "Introduction à l'audit et cadre légal marocain",
    resume: md`
## L'essentiel — L'audit et le CAC

- L'**audit** est un examen critique, par une personne **indépendante et compétente**, qui aboutit à une **opinion motivée** sur la régularité, la sincérité et l'image fidèle des états de synthèse.
- Typologie : audit **externe** / **interne** ; audit **légal** (commissariat aux comptes, obligatoire) / **contractuel** (facultatif) ; audit comptable, opérationnel, social, informatique.
- Textes marocains : **loi 17-95** (SA), **loi 5-96** (SARL, SNC…), **loi 15-89** (profession d'expert-comptable), normes de l'**OEC**.
- Le CAC **certifie** les comptes ; il ne s'**immisce pas dans la gestion** et a une **obligation de moyens**, pas de résultat.
- **Indépendance** : pas d'intérêt financier, pas de lien de subordination, pas de liens familiaux avec les dirigeants, pas de missions de conseil incompatibles.
`,
    exercices: md`
### Exercice 2 — Situations d'incompatibilité

Pour chaque situation, dites si l'expert-comptable peut être commissaire aux comptes de la SA « ATLAS ». Justifiez.

1. Son épouse est présidente du conseil d'administration d'ATLAS.
2. Son cabinet tient la comptabilité d'ATLAS.
3. Il ne perçoit d'ATLAS que ses honoraires d'audit légal.
4. Il a obtenu d'ATLAS un prêt personnel à taux zéro.

<details><summary>Voir le corrigé</summary>

1. **Non** : un lien familial avec un dirigeant compromet l'indépendance.
2. **Non** : il contrôlerait son propre travail (autorévision).
3. **Oui** : c'est la seule rémunération compatible avec la mission.
4. **Non** : c'est un avantage qui crée une dépendance envers la société contrôlée.

</details>
`,
    qcm: [
      { q: "Le commissariat aux comptes est un audit :", choix: ["Contractuel", "Légal", "Interne", "Opérationnel"], bonne: 1, explication: "Il est imposé par la loi pour certaines sociétés." },
      { q: "Au Maroc, le CAC d'une SA est nommé pour :", choix: ["1 exercice", "3 exercices", "6 exercices", "Une durée illimitée"], bonne: 1, explication: "Mandat de trois exercices (loi 17-95)." },
      { q: "Le CAC a une obligation :", choix: ["De résultat", "De moyens", "De gestion", "De garantie de la pérennité"], bonne: 1, explication: "Il ne garantit pas l'absence totale de fraude." },
      { q: "Le CAC peut-il prendre des décisions de gestion dans la société ?", choix: ["Oui, s'il est actionnaire", "Oui, en cas d'urgence", "Non, jamais", "Oui, avec l'accord du conseil"], bonne: 2, explication: "Principe de non-immixtion dans la gestion." },
      { q: "La profession d'expert-comptable est organisée par la loi :", choix: ["17-95", "5-96", "15-89", "9-88"], bonne: 2, explication: "Seuls les experts-comptables inscrits à l'Ordre exercent le commissariat aux comptes." },
    ],
  },

  2: {
    titre: "La démarche générale d'audit",
    resume: md`
## L'essentiel — La démarche d'audit

- Quatre phases : **prise de connaissance → planification → exécution → conclusion**.
- **Prise de connaissance** : comprendre l'entreprise, son secteur, son organisation et son système d'information (entretiens, visite, statuts, PV, organigramme).
- **Planification** : seuil de signification, évaluation du risque, **plan de mission** (équipe, budget-temps, calendrier) et **programme de travail** par cycle.
- **Exécution** : tests de procédures et contrôles substantifs pour obtenir des **éléments probants**.
- **Conclusion** : synthèse des anomalies, **opinion**, rapport.
- Commencer directement par des contrôles détaillés, c'est contrôler « à l'aveugle ».
`,
    exercices: md`
### Exercice 2 — Classer les travaux par phase

Rattachez chaque tâche à sa phase (prise de connaissance, planification, exécution, conclusion) :

1. Circulariser les dix principaux clients.
2. Lire les statuts et les PV des dernières assemblées.
3. Fixer le seuil de signification.
4. Rédiger le rapport général.
5. Visiter l'usine et rencontrer le directeur financier.
6. Établir le budget-temps de la mission.
7. Assister à l'inventaire physique des stocks.
8. Récapituler les anomalies non corrigées et les comparer au seuil.

<details><summary>Voir le corrigé</summary>

| Phase | Tâches |
|---|---|
| Prise de connaissance | 2, 5 |
| Planification | 3, 6 |
| Exécution | 1, 7 |
| Conclusion | 4, 8 |

</details>
`,
    qcm: [
      { q: "La première phase d'une mission d'audit est :", choix: ["L'exécution", "La prise de connaissance", "Le rapport", "La circularisation"], bonne: 1, explication: "On comprend l'entreprise avant de la contrôler." },
      { q: "Le seuil de signification est fixé lors de :", choix: ["La prise de connaissance", "La planification", "La conclusion", "L'assemblée générale"], bonne: 1, explication: "Il oriente l'étendue des travaux." },
      { q: "Le programme de travail détaille :", choix: ["L'opinion du CAC", "Les contrôles à réaliser par cycle", "Les statuts de la société", "Les honoraires"], bonne: 1, explication: "C'est la feuille de route de l'exécution." },
      { q: "L'objectif de la phase d'exécution est :", choix: ["Rédiger le rapport", "Réunir des éléments probants", "Négocier les honoraires", "Désigner le CAC"], bonne: 1, explication: "Par des tests de procédures et des contrôles substantifs." },
      { q: "Le plan de mission comprend notamment :", choix: ["L'équipe, le budget-temps et le calendrier", "Le bilan de l'entreprise", "Les écritures de régularisation", "Le rapport spécial"], bonne: 0, explication: "Il organise la mission." },
    ],
  },

  3: {
    titre: "Le seuil de signification et le risque d'audit",
    resume: md`
## L'essentiel — Seuil et risque d'audit

- **Seuil de signification** : montant au-delà duquel une anomalie peut influencer le jugement d'un utilisateur des comptes.
- Bases usuelles : 5 à 10 % du **résultat avant impôt**, 0,5 à 1 % du **CA**, 1 à 5 % des **capitaux propres**, 0,5 à 2 % du **total bilan**. Une entreprise déficitaire utilise le CA ou le total bilan.
- **Seuil de planification** (50 à 75 % du seuil global) : plus prudent, il sert à dimensionner les travaux.
- $RA = RI \times RC \times RND$.
- **Risque inhérent** et **risque de contrôle** sont évalués ; seul le **risque de non-détection** est maîtrisé par l'auditeur : $RND = \dfrac{RA}{RI \times RC}$.
- RI et RC élevés → RND faible → **contrôles substantifs renforcés**.
`,
    exercices: md`
### Exercice 2 — Doser les contrôles

1. L'auditeur accepte un risque d'audit de 5 %. Sur le cycle Stocks, il évalue le risque inhérent à 80 % et le risque de contrôle à 50 %. Calculez le risque de non-détection acceptable.
2. Même question si le contrôle interne est jugé bon (RC = 25 %). Que peut faire l'auditeur ?
3. Une jeune société déficitaire réalise 12 M DH de CA pour un total bilan de 20 M DH. Proposez un seuil de signification (1 % du CA) et un seuil de planification (60 %).

<details><summary>Voir le corrigé</summary>

**1)** $RND = \dfrac{0{,}05}{0{,}8 \times 0{,}5} = 12{,}5\%$ : il faut des contrôles substantifs étendus.

**2)** $RND = \dfrac{0{,}05}{0{,}8 \times 0{,}25} = 25\%$ : l'auditeur peut **alléger** ses contrôles substantifs (échantillons plus petits).

**3)** Le résultat est négatif, donc on prend le CA : seuil $= 12\,000\,000 \times 1\% = 120\,000$ DH ; seuil de planification $= 120\,000 \times 60\% = 72\,000$ DH.

</details>
`,
    qcm: [
      { q: "Le risque d'audit se décompose en :", choix: ["RI × RC × RND", "RI + RC + RND", "RC × seuil", "RND / RI"], bonne: 0, explication: "Risque inhérent, de contrôle et de non-détection." },
      { q: "La seule composante du risque que l'auditeur maîtrise est :", choix: ["Le risque inhérent", "Le risque de contrôle", "Le risque de non-détection", "Aucune"], bonne: 2, explication: "Il l'ajuste par l'étendue de ses contrôles." },
      { q: "Pour une entreprise déficitaire, la base de calcul du seuil la plus pertinente est :", choix: ["Le résultat", "Le chiffre d'affaires ou le total bilan", "Le nombre de salariés", "Le capital social"], bonne: 1, explication: "Un résultat négatif n'est pas une base pertinente." },
      { q: "Un risque de contrôle élevé conduit l'auditeur à :", choix: ["Réduire ses contrôles substantifs", "Renforcer ses contrôles substantifs", "Refuser la mission", "Ignorer le cycle"], bonne: 1, explication: "Il doit réduire le risque de non-détection." },
      { q: "Résultat avant impôt de 3 M DH, taux de 5 % : le seuil vaut :", choix: ["15 000 DH", "150 000 DH", "300 000 DH", "1 500 000 DH"], bonne: 1, explication: "3 000 000 × 5 % = 150 000 DH." },
    ],
  },

  4: {
    titre: "L'évaluation du contrôle interne",
    resume: md`
## L'essentiel — Le contrôle interne

- Le **contrôle interne** regroupe les dispositifs qui permettent de maîtriser l'activité : **fiabilité** de l'information, **protection du patrimoine**, **efficacité** des opérations, **conformité** aux lois.
- Un contrôle interne fiable permet d'**alléger** les contrôles substantifs ; un contrôle faible oblige à les **renforcer**.
- Démarche : **description** des procédures → **tests de conformité** (la procédure décrite existe-t-elle ?) → forces et faiblesses → **tests de permanence** (s'applique-t-elle toute l'année ?).
- Outils : **narratif**, **diagramme de circulation**, **QCI** (questionnaire de contrôle interne).
- Principe cardinal : **séparation des tâches** (autorisation, exécution, enregistrement, conservation, contrôle).
`,
    exercices: md`
### Exercice 2 — Le cycle Achats d'une PME

Dans une PME, le magasinier passe lui-même les commandes aux fournisseurs par téléphone, sans bon de commande. À la livraison, il signe le bon du transporteur sans compter les colis. Le comptable règle chaque facture reçue dès son arrivée.

1. Relevez trois faiblesses de contrôle interne.
2. Pour chacune, indiquez le risque et une recommandation.

<details><summary>Voir le corrigé</summary>

| Faiblesse | Risque | Recommandation |
|---|---|---|
| Commande sans bon de commande autorisé | Achats inutiles ou fictifs, collusion avec un fournisseur | Bon de commande pré-numéroté, signé par un responsable distinct du magasinier |
| Réception sans comptage | Paiement de marchandises non reçues, écarts de stock | Bon de réception établi après comptage et contrôle qualité |
| Paiement sans rapprochement | Double paiement, paiement de factures erronées | Rapprochement bon de commande / bon de réception / facture avant tout règlement |

Le magasinier cumule en outre autorisation (commande) et conservation (stock) : les tâches doivent être séparées.

</details>
`,
    qcm: [
      { q: "Le principe fondamental du contrôle interne est :", choix: ["La centralisation des tâches", "La séparation des tâches", "La suppression des contrôles", "L'audit externe"], bonne: 1, explication: "Une même personne ne doit pas autoriser, exécuter et contrôler." },
      { q: "Un test de conformité vérifie que :", choix: ["Le solde d'un compte est exact", "La procédure décrite existe réellement", "Le CA a augmenté", "Les statuts sont à jour"], bonne: 1, explication: "La procédure décrite est-elle bien appliquée ?" },
      { q: "Le QCI est :", choix: ["Un questionnaire de contrôle interne", "Un rapport du CAC", "Un état de synthèse", "Un ratio financier"], bonne: 0, explication: "Questions fermées révélant forces et faiblesses." },
      { q: "Un contrôle interne jugé fiable permet à l'auditeur :", choix: ["De ne rien contrôler", "D'alléger ses contrôles substantifs", "De refuser de certifier", "D'augmenter le seuil de signification"], bonne: 1, explication: "Le risque de contrôle est faible." },
      { q: "Le diagramme de circulation représente :", choix: ["Les flux de documents et de tâches", "L'organigramme hiérarchique", "Le bilan", "Le budget-temps"], bonne: 0, explication: "C'est un outil de description des procédures." },
    ],
  },

  5: {
    titre: "Les procédures et techniques de contrôle",
    resume: md`
## L'essentiel — Techniques de contrôle

- **Tests de procédures** (conformité et permanence) : le contrôle interne fonctionne-t-il ?
- **Contrôles substantifs** : les soldes et opérations sont-ils réels, exhaustifs et bien évalués ?
- Techniques : **observation physique** (inventaire), **inspection** de documents, **confirmation directe** (circularisation des clients, fournisseurs, banques, avocats), **recalcul**, **procédures analytiques** (ratios, comparaisons N/N−1), **entretiens**.
- **Sondage** : l'auditeur contrôle un échantillon ; **statistique** (aléatoire, erreur mesurable) ou **non statistique** (éléments importants, atypiques ou risqués).
`,
    exercices: md`
### Exercice 2 — Tests de procédures ou contrôles substantifs

1. Classez chaque travail en test de procédures (P) ou contrôle substantif (S) : a) vérifier que 30 factures d'achat portent le visa du responsable ; b) recalculer les dotations aux amortissements ; c) circulariser les banques ; d) vérifier que les bons de sortie de stock sont pré-numérotés et utilisés dans l'ordre ; e) comparer la marge brute de N à celle de N−1.
2. La population compte 2 000 factures de vente pour 8 M DH. L'auditeur contrôle toutes les factures supérieures à 50 000 DH, puis 60 factures tirées au hasard parmi les autres. Comment qualifier ces deux sélections ?

<details><summary>Voir le corrigé</summary>

**1)** a) **P** ; b) **S** (recalcul) ; c) **S** (confirmation directe) ; d) **P** ; e) **S** (procédure analytique).

**2)** Le contrôle des factures de plus de 50 000 DH est une **sélection raisonnée** des éléments clés (sondage non statistique, orienté vers les montants significatifs). Le tirage de 60 factures au hasard relève d'un **sondage aléatoire**, dont les résultats peuvent être extrapolés au reste de la population.

</details>
`,
    qcm: [
      { q: "La circularisation consiste à :", choix: ["Recalculer un total", "Demander à un tiers de confirmer un solde", "Observer un inventaire", "Interroger le personnel"], bonne: 1, explication: "C'est une confirmation directe externe." },
      { q: "Pour vérifier l'existence des stocks, la technique la plus adaptée est :", choix: ["L'observation physique de l'inventaire", "La procédure analytique", "L'entretien", "Le rapport spécial"], bonne: 0, explication: "L'auditeur assiste au comptage." },
      { q: "Comparer les charges de N à celles de N−1 est :", choix: ["Un test de conformité", "Une procédure analytique", "Une circularisation", "Un inventaire"], bonne: 1, explication: "On recherche des variations inexpliquées." },
      { q: "Un sondage statistique repose sur :", choix: ["Une sélection au jugement", "Une sélection aléatoire", "Le contrôle de 100 % des éléments", "Les seuls éléments atypiques"], bonne: 1, explication: "Il permet de mesurer la marge d'erreur." },
      { q: "Les contrôles substantifs portent sur :", choix: ["Le fonctionnement des procédures", "La réalité, l'exhaustivité et l'évaluation des soldes", "Le recrutement du personnel", "La stratégie de l'entreprise"], bonne: 1, explication: "Ce sont des contrôles de validation des comptes." },
    ],
  },

  6: {
    titre: "Les éléments probants et la documentation",
    resume: md`
## L'essentiel — Assertions et éléments probants

- **Assertions** à vérifier : **existence/réalité**, **exhaustivité**, **évaluation/mesure**, **droits et obligations**, **présentation et information**.
- Les éléments probants doivent être **suffisants** (quantité) et **appropriés** (pertinence et fiabilité).
- Fiabilité décroissante : obtenu directement par l'auditeur ou reçu directement d'un tiers > document interne > déclaration orale.
- **Dossier permanent** (utile sur plusieurs exercices : statuts, contrats, organigramme) et **dossier annuel** (travaux et conclusions de l'exercice).
- Le dossier doit permettre à un auditeur expérimenté extérieur de comprendre les travaux et les conclusions.
`,
    exercices: md`
### Exercice 2 — Associer contrôles et assertions

1. Indiquez l'assertion principalement visée par chaque contrôle : a) circularisation des clients ; b) examen des factures fournisseurs reçues en janvier N+1 pour y trouver des charges de N ; c) examen du titre foncier d'un terrain ; d) recalcul des dotations aux amortissements ; e) lecture de l'annexe pour vérifier la mention d'une caution donnée.
2. Classez par fiabilité décroissante : une attestation bancaire reçue directement par l'auditeur ; l'affirmation orale du comptable ; une facture de vente émise par l'entreprise ; un recalcul fait par l'auditeur.

<details><summary>Voir le corrigé</summary>

**1)** a) **existence** ; b) **exhaustivité** ; c) **droits et obligations** (propriété) ; d) **évaluation** ; e) **présentation et information**.

**2)** Recalcul de l'auditeur ≈ attestation bancaire reçue directement (fiabilité forte) > facture émise par l'entreprise (document interne) > affirmation orale (à corroborer).

</details>
`,
    qcm: [
      { q: "Vérifier que toutes les ventes ont été comptabilisées concerne l'assertion :", choix: ["D'existence", "D'exhaustivité", "D'évaluation", "De présentation"], bonne: 1, explication: "Rien ne doit être omis." },
      { q: "L'élément probant le moins fiable est :", choix: ["Une circularisation reçue directement", "Une observation physique", "Une déclaration orale", "Un recalcul"], bonne: 2, explication: "Il doit être corroboré." },
      { q: "Les statuts de la société sont classés dans :", choix: ["Le dossier annuel", "Le dossier permanent", "Le rapport général", "Le programme de travail"], bonne: 1, explication: "Ils restent valables sur plusieurs exercices." },
      { q: "Un élément probant doit être :", choix: ["Suffisant et approprié", "Oral et rapide", "Interne et gratuit", "Signé par le dirigeant"], bonne: 0, explication: "Suffisant en quantité, approprié en qualité." },
      { q: "Vérifier que l'entreprise est bien propriétaire d'un bien concerne :", choix: ["L'existence", "Les droits et obligations", "L'exhaustivité", "L'évaluation"], bonne: 1, explication: "Un bien peut exister sans appartenir à l'entreprise." },
    ],
  },

  7: {
    titre: "Le contrôle des cycles significatifs",
    resume: md`
## L'essentiel — L'audit par cycles

- L'audit est découpé en **cycles** : achats-fournisseurs, ventes-clients, stocks, trésorerie, immobilisations, personnel.
- Risques typiques : achats fictifs ou non comptabilisés, ventes fictives, créances non provisionnées, stocks mal évalués, détournements de trésorerie, erreurs de paie.
- **Cut-off** (séparation des exercices) : chaque opération doit être rattachée à l'exercice de la **livraison** ou du **service rendu**.
- Régularisations : **FAE** (factures à établir) pour les ventes livrées non facturées, **FNP** (factures non parvenues) pour les achats reçus non facturés.
- Programme ventes-clients : circularisation (existence), rapprochement commandes / livraisons / factures (exhaustivité), test de cut-off, analyse de l'antériorité des créances (évaluation).
`,
    exercices: md`
### Exercice 2 — Cut-off sur les achats

Des marchandises ont été reçues le 29/12/N (bon de réception signé) et comptées dans l'inventaire du 31/12/N. La facture de 60 000 DH HT (TVA 20 %) n'est parvenue que le 8/01/N+1 et a été comptabilisée en N+1.

1. Quel est l'impact sur le résultat de N si rien n'est corrigé ?
2. Proposez l'écriture de régularisation au 31/12/N.

<details><summary>Voir le corrigé</summary>

**1)** Le stock final inclut ces marchandises mais l'achat n'est pas en charges : les **charges de N sont sous-évaluées** de 60 000 DH et le **résultat de N surévalué** d'autant. Les dettes fournisseurs sont aussi sous-évaluées de 72 000 DH.

**2)** Facture non parvenue (FNP) :

| Compte | Débit | Crédit |
|---|--:|--:|
| 6111 Achats de marchandises | 60 000 | |
| 3455 État, TVA récupérable (sur FNP) | 12 000 | |
| 4417 Fournisseurs, factures non parvenues | | 72 000 |

</details>
`,
    qcm: [
      { q: "Le cut-off vérifie :", choix: ["La réalité des stocks", "Le rattachement des opérations au bon exercice", "Le calcul de la TVA", "Les salaires"], bonne: 1, explication: "Séparation des exercices." },
      { q: "Une vente livrée le 30/12/N et facturée le 4/01/N+1 doit être rattachée à :", choix: ["L'exercice N", "L'exercice N+1", "Aucun exercice", "Au choix de l'entreprise"], bonne: 0, explication: "C'est la livraison qui compte : on constate une FAE." },
      { q: "Le risque principal du cycle Trésorerie est :", choix: ["L'obsolescence", "Le détournement de fonds", "L'erreur de durée d'amortissement", "Les ventes fictives"], bonne: 1, explication: "D'où l'importance des rapprochements bancaires." },
      { q: "L'analyse de l'antériorité des créances clients vise surtout l'assertion :", choix: ["D'existence", "D'évaluation", "D'exhaustivité", "De droits"], bonne: 1, explication: "Elle sert à juger du besoin de provision." },
      { q: "Un achat reçu avant la clôture mais facturé après se régularise par :", choix: ["Une FAE", "Une FNP", "Un avoir", "Une provision pour risques"], bonne: 1, explication: "Facture non parvenue, en charges de N." },
    ],
  },

  8: {
    titre: "Le rapport du commissaire aux comptes",
    resume: md`
## L'essentiel — L'opinion du CAC

- Rapport général : introduction, diligences, **opinion**.
- **Certification sans réserve** : pas d'anomalie significative.
- **Certification avec réserve** : anomalie significative mais **circonscrite**, ou limitation portant sur un point précis.
- **Refus de certifier** (opinion défavorable) : désaccord portant sur des anomalies **significatives et généralisées**.
- **Impossibilité de certifier** : limitation si importante que l'auditeur ne peut fonder aucune opinion.
- Deux causes de réserve ou de refus : **désaccord** (anomalie non corrigée) et **limitation** (diligences impossibles).
- Autres obligations : **rapport spécial** (conventions réglementées), **procédure d'alerte** (continuité d'exploitation), **révélation des faits délictueux** au procureur du Roi.
`,
    exercices: md`
### Exercice 2 — Quelle opinion ?

Le seuil de signification est de 100 000 DH. Quelle opinion le CAC doit-il exprimer dans chaque cas ?

1. Aucune anomalie significative n'a été relevée.
2. Un client dont le solde est de 150 000 DH n'a pas répondu à la circularisation et aucune procédure alternative n'est possible ; le reste des comptes est fiable.
3. L'auditeur n'a pas pu assister à l'inventaire ; les stocks représentent 60 % du total bilan et aucune procédure alternative n'est possible.
4. Les comptes sont présentés en continuité d'exploitation alors que la société est en cessation de paiements ; la direction refuse toute correction et l'impact touche l'ensemble des états.

<details><summary>Voir le corrigé</summary>

1. **Certification sans réserve.**
2. **Certification avec réserve pour limitation** : le montant dépasse le seuil, mais le problème est circonscrit.
3. **Impossibilité de certifier** : la limitation porte sur un poste majeur et empêche de fonder une opinion.
4. **Refus de certifier (opinion défavorable)** pour désaccord : anomalie significative et généralisée.

</details>
`,
    qcm: [
      { q: "Une anomalie significative mais circonscrite, non corrigée, conduit à :", choix: ["Une certification sans réserve", "Une certification avec réserve", "Une impossibilité de certifier", "Une démission du CAC"], bonne: 1, explication: "La réserve chiffre l'impact sur le poste concerné." },
      { q: "Une limitation majeure empêchant toute opinion conduit à :", choix: ["Une réserve", "Une impossibilité de certifier", "Une certification pure et simple", "Un rapport spécial"], bonne: 1, explication: "L'auditeur n'a pas assez d'éléments probants." },
      { q: "Le rapport spécial du CAC porte sur :", choix: ["Les états de synthèse", "Les conventions réglementées", "Le budget", "Les salaires des employés"], bonne: 1, explication: "Conventions entre la société et ses dirigeants ou gros actionnaires." },
      { q: "La procédure d'alerte est déclenchée lorsque :", choix: ["Le CA baisse de 5 %", "Des faits menacent la continuité d'exploitation", "Le CAC change", "Les comptes sont certifiés"], bonne: 1, explication: "Le CAC informe alors les dirigeants." },
      { q: "Le CAC qui découvre un fait délictueux doit :", choix: ["Le garder secret", "Le révéler au procureur du Roi", "Démissionner sans rien dire", "Le corriger lui-même"], bonne: 1, explication: "C'est une obligation légale." },
    ],
  },
};
