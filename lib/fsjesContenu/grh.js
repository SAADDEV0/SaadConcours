// Gestion des Ressources Humaines (S4) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Introduction à la GRH",
    description: "GRH : définition, évolution, rôles d'Ulrich, fonctions RH, Code du travail marocain, CNSS, indicateurs sociaux (turnover, absentéisme) et enjeux actuels.",
    resume: md`
## L'essentiel — Introduction à la GRH

- GRH : disposer des personnes et des compétences nécessaires (quantité, qualité, moment, coût), les mobiliser et les développer ; le personnel est une **ressource**, voire un **capital**.
- Évolution : administration du personnel → gestion du personnel → GRH → **GRH stratégique**.
- Rôles d'**Ulrich** : partenaire stratégique, expert administratif, champion des salariés, agent du changement.
- Fonctions : acquérir, développer, rémunérer, évaluer, dialoguer, motiver, administrer ; partagées entre DRH, direction, **managers de proximité** et prestataires.
- Cadre : **Code du travail** (loi 65-99 ; 2 288 h par an, 44 h par semaine ; 1,5 jour de congé par mois), salaire minimum par décret, **CNSS** et AMO, loi organique **97-15** sur la grève, inspection du travail.
- Indicateurs : effectif moyen, **turnover** = ((entrées + sorties) / 2) / effectif moyen, **absentéisme** = heures d'absence / heures théoriques, encadrement, salaire moyen, taux de formation.
- Enjeux : talents et marque employeur, numérique, compétences, qualité de vie au travail, égalité, conformité sociale.
`,
    exercices: md`
### Exercice 2 — Rôles de la fonction RH

Associez chaque activité à l'un des quatre rôles d'Ulrich :
1. Mettre en place un logiciel de paie et de gestion des congés.
2. Participer au comité de direction pour préparer l'ouverture d'une usine à Kénitra.
3. Organiser une enquête de climat social et un plan d'action.
4. Accompagner la fusion de deux services et la réorganisation des postes.

<details><summary>Voir le corrigé</summary>

1. **Expert administratif** (efficacité des processus).
2. **Partenaire stratégique** (traduire la stratégie en besoins humains).
3. **Champion des salariés** (écoute, engagement).
4. **Agent du changement** (conduite de la transformation).

</details>

### Exercice 3 — Absentéisme et coûts

Une entreprise de 150 salariés (2 288 heures théoriques chacun) a enregistré 17 160 heures d'absence. Le coût horaire moyen chargé est de 45 DH.

1. Calculez le taux d'absentéisme.
2. Estimez le coût direct de l'absentéisme (salaires versés pendant les absences, en supposant qu'ils le sont tous).
3. Citez trois causes possibles et trois actions de réduction.

<details><summary>Voir le corrigé</summary>

**1)** Heures théoriques : $150 \times 2\,288 = 343\,200$ ; taux $= 17\,160 / 343\,200 =$ **5 %**.

**2)** $17\,160 \times 45 =$ **772 200 DH** par an, sans compter les coûts indirects (remplacements, heures supplémentaires, retards de production).

**3)** Causes : conditions de travail pénibles, mauvais climat social, problèmes de santé ou de transport. Actions : amélioration de l'ergonomie et de la sécurité, entretiens de retour d'absence, organisation du transport du personnel, horaires aménagés, reconnaissance de l'assiduité.

</details>
`,
    qcm: [
      { q: "La GRH stratégique considère le personnel avant tout comme :", choix: ["Un coût à réduire", "Une ressource et un capital à développer", "Une contrainte juridique", "Une charge fixe"], bonne: 1, explication: "Les compétences sont une source d'avantage concurrentiel." },
      { q: "Selon Ulrich, le rôle qui consiste à accompagner les transformations est celui :", choix: ["D'expert administratif", "D'agent du changement", "De champion des salariés", "De contrôleur de gestion"], bonne: 1, explication: "Il conduit le changement organisationnel." },
      { q: "Au Maroc, le Code du travail est issu de la loi :", choix: ["17-95", "65-99", "31-08", "9-88"], bonne: 1, explication: "Entrée en vigueur en 2004." },
      { q: "La durée légale annuelle du travail dans les activités non agricoles est de :", choix: ["1 607 heures", "2 288 heures", "2 496 heures", "1 820 heures"], bonne: 1, explication: "Soit 44 heures par semaine." },
      { q: "Entrées 40, sorties 20, effectif moyen 200. Le taux de rotation vaut :", choix: ["30 %", "15 %", "10 %", "20 %"], bonne: 1, explication: "(40 + 20) / 2 / 200." },
      { q: "Le taux d'absentéisme rapporte les heures d'absence :", choix: ["À l'effectif", "Aux heures théoriques de travail", "À la masse salariale", "Aux heures supplémentaires"], bonne: 1, explication: "C'est un pourcentage du temps de travail prévu." },
      { q: "Le contrôle de l'application du droit du travail relève de :", choix: ["La CNSS", "L'inspection du travail", "L'ANAPEC", "L'OFPPT"], bonne: 1, explication: "Elle conseille aussi et concilie." },
      { q: "Les conditions d'exercice du droit de grève sont fixées par :", choix: ["La loi 65-99", "La loi organique 97-15", "Le règlement intérieur", "La convention collective"], bonne: 1, explication: "Entrée en vigueur en septembre 2025." },
      { q: "Dans une PME sans DRH, la GRH est souvent assurée par :", choix: ["L'inspection du travail", "Le dirigeant et les managers", "La CNSS", "Les syndicats"], bonne: 1, explication: "La fonction existe même sans service dédié." },
      { q: "Masse salariale 12 MDH, dépenses de formation 240 000 DH. Le taux de formation est de :", choix: ["0,2 %", "2 %", "20 %", "5 %"], bonne: 1, explication: "240 000 / 12 000 000." },
    ],
  },

  2: {
    titre: "Le recrutement",
    description: "Recrutement : analyse du besoin, fiche de poste, sourcing interne et externe, entretien, tests, grille pondérée, CDI, CDD, période d'essai et intégration.",
    resume: md`
## L'essentiel — Le recrutement

- Processus : besoin → poste et profil → sourcing → présélection → sélection → décision → **intégration**.
- Vérifier que le besoin est réel et durable ; alternatives : réorganisation, mobilité, intérim, sous-traitance.
- **Fiche de poste** (mission, activités, rattachement, conditions) et **profil** (savoirs, savoir-faire, savoir-être ; indispensable / souhaitable).
- **Interne** : motivation, coût et risque faibles, choix limité ; **externe** : nouvelles compétences, coût et délai plus élevés. Canaux : sites d'emploi, réseaux professionnels, cooptation, écoles, cabinets, **ANAPEC**.
- Sélection : tri, **entretien structuré** (méthode STAR), tests, mises en situation, références, **grille pondérée**.
- Droit : **non-discrimination** ; CDI de principe, CDD dans les cas légaux ; **période d'essai** : 3 mois (cadres), 1,5 mois (employés), 15 jours (ouvriers), renouvelable une fois ; déclaration CNSS.
- Indicateurs : coût par recrutement, délai, réussite en période d'essai, départs la première année.
`,
    exercices: md`
### Exercice 2 — Questions d'entretien licites ou non

Indiquez si chaque question est acceptable en entretien et justifiez :
1. « Êtes-vous mariée et prévoyez-vous d'avoir des enfants ? »
2. « Décrivez un projet que vous avez mené avec un budget serré. »
3. « Quelle est votre religion ? »
4. « Êtes-vous disponible pour travailler en équipes du matin et de l'après-midi ? »
5. « Êtes-vous membre d'un syndicat ? »

<details><summary>Voir le corrigé</summary>

1. **Non** : situation familiale, question discriminatoire (souvent posée aux femmes).
2. **Oui** : question comportementale liée aux compétences (méthode STAR).
3. **Non** : la religion est un motif de discrimination interdit.
4. **Oui** : la disponibilité est liée aux conditions objectives du poste.
5. **Non** : l'affiliation syndicale ne peut pas être prise en compte.

</details>

### Exercice 3 — Comparer les canaux de recrutement

Une entreprise a recruté 20 techniciens en un an :

| Canal | Recrutements | Coût total (DH) | Départs pendant la période d'essai |
|---|---:|---:|---:|
| Site d'emploi | 8 | 24 000 | 2 |
| Cooptation (prime de 2 000 DH) | 5 | 10 000 | 0 |
| Cabinet | 4 | 60 000 | 0 |
| ANAPEC | 3 | 3 000 | 1 |

1. Calculez le coût par recrutement et le taux de réussite de chaque canal.
2. Calculez le coût par recrutement réussi et concluez.

<details><summary>Voir le corrigé</summary>

| Canal | Coût par recrutement | Réussite | Coût par recrutement réussi |
|---|---:|---:|---:|
| Site d'emploi | 3 000 | 75 % | $24\,000 / 6 = 4\,000$ |
| Cooptation | 2 000 | 100 % | $10\,000 / 5 = 2\,000$ |
| Cabinet | 15 000 | 100 % | $60\,000 / 4 = 15\,000$ |
| ANAPEC | 1 000 | 66,7 % | $3\,000 / 2 = 1\,500$ |

La **cooptation** et l'**ANAPEC** sont les canaux les plus économiques ; la cooptation combine faible coût et réussite totale. Le cabinet est très coûteux et doit être réservé aux profils rares. Les petits effectifs invitent toutefois à la prudence dans l'interprétation.

</details>
`,
    qcm: [
      { q: "La première étape d'un recrutement est :", choix: ["La publication d'une annonce", "L'analyse du besoin", "L'entretien", "La signature du contrat"], bonne: 1, explication: "Il faut vérifier que le besoin est réel et durable." },
      { q: "Les savoir-être désignent :", choix: ["Les diplômes", "Les comportements attendus", "Les connaissances techniques", "L'expérience"], bonne: 1, explication: "Rigueur, sens du contact, leadership…" },
      { q: "Un avantage du recrutement interne est :", choix: ["L'apport d'idées nouvelles", "La motivation des salariés", "Un choix très large", "L'absence de poste à remplacer"], bonne: 1, explication: "Il offre des perspectives de promotion." },
      { q: "La recommandation d'un candidat par un salarié s'appelle :", choix: ["L'intérim", "La cooptation", "L'assessment center", "La mobilité"], bonne: 1, explication: "Souvent efficace et peu coûteuse." },
      { q: "La méthode STAR structure les réponses autour de :", choix: ["Salaire, Temps, Avantages, Retraite", "Situation, Tâche, Action, Résultat", "Savoir, Talent, Aptitude, Rigueur", "Sélection, Test, Accueil, Recrutement"], bonne: 1, explication: "Elle fait décrire des expériences réelles." },
      { q: "La période d'essai légale d'un cadre est de :", choix: ["15 jours", "1 mois et demi", "3 mois", "6 mois"], bonne: 2, explication: "Renouvelable une fois." },
      { q: "Un CDD peut être conclu notamment pour :", choix: ["Un poste permanent", "Le remplacement d'un salarié absent", "Éviter la période d'essai", "Réduire les cotisations"], bonne: 1, explication: "Les cas sont limités par la loi." },
      { q: "L'organisme public qui rapproche offres et demandes d'emploi est :", choix: ["La CNSS", "L'ANAPEC", "L'OFPPT", "La HACA"], bonne: 1, explication: "Il gère aussi des programmes d'insertion." },
      { q: "Candidat noté 8, 6 et 9 sur trois critères pondérés 50 %, 30 % et 20 %. Sa note est :", choix: ["7,6", "7,0", "7,8", "8,0"], bonne: 0, explication: "4 + 1,8 + 1,8." },
      { q: "L'intégration d'un nouveau salarié vise surtout à :", choix: ["Réduire son salaire", "Réussir sa prise de poste et le fidéliser", "Remplacer la période d'essai", "Éviter les formalités CNSS"], bonne: 1, explication: "Beaucoup de départs ont lieu dans les premiers mois." },
    ],
  },

  3: {
    titre: "La formation et le développement des compétences",
    description: "Formation continue : compétences, analyse des besoins, plan de formation, modalités, TFP et OFPPT, évaluation de Kirkpatrick, ROI et indicateurs.",
    resume: md`
## L'essentiel — Formation et compétences

- **Compétence** = mobiliser savoirs, savoir-faire et savoir-être en situation de travail.
- Objectifs : adapter, développer, reconvertir, sécurité et qualité, motivation, employabilité.
- Ingénierie : **analyse des besoins** (organisation, poste, individu) → **plan de formation** → conception (objectifs pédagogiques) → réalisation (présentiel, à distance, mixte, tutorat, alternance) → évaluation.
- Maroc : **TFP** de 1,6 % de la masse salariale brute (recouvrée par la CNSS, finance l'**OFPPT**) ; loi **60-17** sur la formation continue ; remboursements (contrats spéciaux de formation).
- Coût complet = pédagogie + **salaires des participants** + logistique.
- **Kirkpatrick** : réaction, apprentissage, comportement (transfert), résultats ; **ROI** = (gains − coût) / coût.
- Indicateurs : dépenses / masse salariale, taux d'accès, heures par salarié, coût de l'heure-stagiaire.
`,
    exercices: md`
### Exercice 2 — Rédiger des objectifs pédagogiques

Transformez ces intentions vagues en objectifs pédagogiques précis (verbe d'action, condition, critère) :
1. « Connaître Excel. »
2. « Être meilleur avec les clients. »
3. « Comprendre la sécurité. »

<details><summary>Voir le corrigé</summary>

1. « À l'issue de la formation, le participant sera capable de **construire** un tableau de suivi des ventes avec formules et graphique, sans erreur, en moins de 30 minutes. »
2. « Le participant sera capable de **traiter** une réclamation client au téléphone en appliquant les quatre étapes de la méthode enseignée (écouter, reformuler, proposer, conclure). »
3. « Le participant sera capable d'**identifier** les risques de son poste et d'**appliquer** la procédure de consignation d'une machine avant toute intervention. »

</details>

### Exercice 3 — Indicateurs de formation par catégorie

| Catégorie | Effectif | Salariés formés | Heures de formation |
|---|---:|---:|---:|
| Cadres | 20 | 18 | 540 |
| Employés | 60 | 30 | 600 |
| Ouvriers | 120 | 36 | 720 |

1. Calculez le taux d'accès et les heures par salarié de chaque catégorie et de l'ensemble.
2. Commentez et proposez deux actions.

<details><summary>Voir le corrigé</summary>

| Catégorie | Taux d'accès | Heures par salarié |
|---|---:|---:|
| Cadres | 90 % | 27 |
| Employés | 50 % | 10 |
| Ouvriers | 30 % | 6 |
| **Ensemble** (200) | **42 %** | **9,3** |

**2)** L'accès à la formation est très **inégal** : les cadres sont largement formés, les ouvriers très peu, alors qu'ils sont les plus nombreux et souvent les plus exposés aux évolutions techniques et aux risques. Actions : formations en situation de travail et tutorat pour les ouvriers, pendant le temps de travail ; parcours qualifiants avec l'OFPPT ; objectifs d'accès par catégorie suivis dans le tableau de bord RH.

</details>
`,
    qcm: [
      { q: "Une compétence combine :", choix: ["Diplôme et ancienneté", "Savoirs, savoir-faire et savoir-être mobilisés en situation", "Salaire et primes", "Âge et expérience"], bonne: 1, explication: "Elle se constate dans l'action." },
      { q: "L'analyse des besoins de formation au niveau du poste compare :", choix: ["Salaire et marché", "Compétences requises et compétences détenues", "Effectifs et besoins", "Coûts et budgets"], bonne: 1, explication: "C'est l'écart à combler." },
      { q: "La taxe de formation professionnelle au Maroc est égale à :", choix: ["0,5 % de la masse salariale", "1,6 % de la masse salariale brute", "4,48 % du salaire", "10 % du bénéfice"], bonne: 1, explication: "Elle finance notamment l'OFPPT." },
      { q: "Le niveau 3 du modèle de Kirkpatrick évalue :", choix: ["La satisfaction", "Les connaissances acquises", "L'application des acquis au travail", "Le chiffre d'affaires"], bonne: 2, explication: "C'est le transfert en situation de travail." },
      { q: "Un questionnaire de satisfaction en fin de stage correspond au niveau :", choix: ["Réaction", "Apprentissage", "Comportement", "Résultats"], bonne: 0, explication: "Évaluation « à chaud »." },
      { q: "Gains 300 000 DH, coût de la formation 200 000 DH. Le ROI vaut :", choix: ["150 %", "50 %", "66,7 %", "100 %"], bonne: 1, explication: "(300 000 − 200 000) / 200 000." },
      { q: "Le coût complet d'une formation comprend notamment :", choix: ["Uniquement le prix de l'organisme", "Le coût pédagogique, les salaires des participants et la logistique", "La TFP", "Les dividendes"], bonne: 1, explication: "Les salaires pèsent souvent lourd." },
      { q: "Le tutorat est une formation :", choix: ["En salle", "En situation de travail", "À distance uniquement", "Diplômante obligatoirement"], bonne: 1, explication: "Un salarié expérimenté accompagne un autre." },
      { q: "180 salariés formés sur 300. Le taux d'accès à la formation est de :", choix: ["40 %", "60 %", "180 %", "30 %"], bonne: 1, explication: "180 / 300." },
      { q: "Un objectif pédagogique bien formulé commence par :", choix: ["Un verbe d'action observable", "Le nom du formateur", "Le prix", "La date"], bonne: 0, explication: "Par exemple : régler, diagnostiquer, rédiger." },
    ],
  },

  4: {
    titre: "La gestion des carrières et la GPEC",
    description: "Gestion des carrières et GPEC : mobilités, entretien professionnel, plans de succession, pyramide des âges, écarts besoins-ressources et plan d'action RH.",
    resume: md`
## L'essentiel — Carrières et GPEC

- Carrière organisationnelle ou **nomade** ; mobilités **verticale**, **horizontale**, **géographique**, externe.
- Outils : référentiel des emplois et compétences, **entretien professionnel**, bilan de compétences, revues des talents (performance × potentiel), **plans de succession**, double échelle de carrière.
- **GPEC** : anticiper à 3-5 ans les écarts entre **besoins** (stratégie) et **ressources** (effectif − départs ± mobilités).
- Écart = besoins − ressources : positif = sous-effectif, négatif = sureffectif ; écarts **qualitatifs** de compétences.
- Plan d'action : recruter, former, reconvertir, mobilité interne, sous-traiter, transmettre les savoirs.
- **Pyramide des âges** : pyramide (jeune), **champignon** (vieillissement), cylindre (équilibre), sablier (creux au milieu) ; retraite à 60 ans dans le privé (CNSS).
`,
    exercices: md`
### Exercice 2 — Prévoir les départs

Un service de 60 techniciens a la structure d'âge suivante : 50 à 54 ans : 12 ; 55 à 59 ans : 9 ; moins de 50 ans : 39. Le taux de démission annuel est de 4 % de l'effectif. L'âge de départ en retraite est de 60 ans.

1. Combien de départs en retraite faut-il prévoir dans les 5 prochaines années ?
2. Estimez les démissions sur 5 ans (sur la base de l'effectif actuel).
3. Si le besoin reste de 60 techniciens, combien faudra-t-il recruter ou former ?

<details><summary>Voir le corrigé</summary>

**1)** Les 9 salariés de 55 à 59 ans atteindront 60 ans dans les 5 ans : **9 départs en retraite**.

**2)** $4\,\% \times 60 \times 5 = \mathbf{12}$ démissions environ.

**3)** Ressources prévues : $60 - 9 - 12 = 39$ ; il faut **21** techniciens supplémentaires sur 5 ans (recrutements ou reconversions), en organisant la transmission des savoirs des 9 futurs retraités.

</details>

### Exercice 3 — Revue des talents

Une DRH classe ses managers selon la performance (faible, moyenne, forte) et le potentiel (faible, moyen, fort). Proposez une action pour :
1. forte performance et fort potentiel ;
2. forte performance et faible potentiel ;
3. faible performance et fort potentiel ;
4. faible performance et faible potentiel.

<details><summary>Voir le corrigé</summary>

1. **Haut potentiel** : plan de développement accéléré, mobilité, inscription dans les plans de succession, rémunération attractive pour le fidéliser.
2. **Expert solide** : reconnaissance, développement dans son poste ou filière d'expertise (double échelle), rôle de tuteur.
3. **Potentiel mal exploité** : comprendre les causes (poste inadapté, manque de moyens, intégration), coaching, changement d'affectation.
4. **Situation à traiter** : objectifs précis et accompagnement, formation ; si la situation persiste, réaffectation.

</details>
`,
    qcm: [
      { q: "Passer de comptable à contrôleur de gestion au même niveau est une mobilité :", choix: ["Verticale", "Horizontale", "Géographique", "Externe"], bonne: 1, explication: "Changement de métier sans promotion." },
      { q: "L'entretien professionnel porte principalement sur :", choix: ["La performance de l'année", "Le projet et l'évolution professionnels", "Le salaire", "La discipline"], bonne: 1, explication: "L'évaluation de la performance fait l'objet d'un autre entretien." },
      { q: "La GPEC a pour objectif :", choix: ["De calculer la paie", "D'anticiper les écarts entre besoins et ressources humaines", "D'organiser les élections du personnel", "De fixer les prix"], bonne: 1, explication: "Démarche d'anticipation à moyen terme." },
      { q: "Effectif 100, départs prévus 20, besoins 90. L'écart besoins − ressources est de :", choix: ["− 10", "+ 10", "+ 30", "− 30"], bonne: 1, explication: "90 − 80 = + 10 : sous-effectif." },
      { q: "Un écart négatif besoins − ressources signifie :", choix: ["Un sous-effectif", "Un sureffectif", "Un équilibre", "Une erreur"], bonne: 1, explication: "Les ressources dépassent les besoins." },
      { q: "Une pyramide des âges en champignon indique :", choix: ["Un personnel jeune", "Un personnel vieillissant", "Un équilibre parfait", "Un creux au milieu"], bonne: 1, explication: "Départs à la retraite à anticiper." },
      { q: "Le plan de succession consiste à :", choix: ["Remplacer tous les salariés", "Identifier à l'avance des successeurs pour les postes clés", "Supprimer des postes", "Fixer les salaires"], bonne: 1, explication: "Il sécurise la continuité." },
      { q: "La double échelle de carrière permet :", choix: ["De cumuler deux emplois", "Aux experts de progresser sans devenir managers", "De doubler les salaires", "De changer de pays"], bonne: 1, explication: "Filière managériale et filière d'expertise." },
      { q: "Face à un sureffectif, la première solution à envisager est :", choix: ["Le licenciement", "La reconversion et la mobilité interne", "L'augmentation des salaires", "Le recrutement"], bonne: 1, explication: "Elle préserve les compétences et le climat social." },
      { q: "Dans le secteur privé au Maroc, l'âge normal de départ à la retraite est de :", choix: ["55 ans", "60 ans", "65 ans", "70 ans"], bonne: 1, explication: "Régime de la CNSS." },
    ],
  },

  5: {
    titre: "La rémunération",
    description: "Rémunération globale, prime d'ancienneté, heures supplémentaires, équité interne et externe, compa-ratio, bulletin de paie et effets sur la masse salariale.",
    resume: md`
## L'essentiel — La rémunération

- **Rémunération globale** : salaire de base, compléments légaux (ancienneté, heures supplémentaires), variable individuel et collectif, avantages en nature et sociaux, rétribution non financière.
- **Prime d'ancienneté** : 5 % (2 ans), 10 % (5 ans), 15 % (12 ans), 20 % (20 ans), 25 % (25 ans).
- **Heures supplémentaires** : + 25 % de jour, + 50 % de nuit ; + 50 % et + 100 % le jour de repos.
- Objectifs : attirer, retenir, motiver, équité, maîtrise des coûts, conformité (SMIG, SMAG, égalité femmes-hommes).
- **Équité interne** (pesée des postes, classes, fourchettes), **compétitivité externe** (enquêtes, **compa-ratio** = salaire / référence), **équité individuelle** (performance).
- Paie : CNSS 4,48 % plafonné à 6 000 DH ; AMO 2,26 % sans plafond ; frais professionnels (35 % ou 25 %) pour l'IR seulement ; net = brut − cotisations − IR.
- Masse salariale : effets **niveau**, **masse**, **report**, **GVT**, **noria**, effectif et structure.
`,
    exercices: md`
### Exercice 2 — Prime d'ancienneté et heures supplémentaires

Un ouvrier au salaire de base de 4 200 DH a 13 ans d'ancienneté. En mai, il a effectué 8 heures supplémentaires un jour ouvrable entre 22 h et 6 h, et 4 heures le jour de son repos hebdomadaire, de jour (191 heures mensuelles).

1. Calculez sa prime d'ancienneté.
2. Calculez le taux horaire et la rémunération des heures supplémentaires.
3. Calculez le salaire brut.

<details><summary>Voir le corrigé</summary>

**1)** 13 ans : taux de 15 % : $0{,}15 \times 4\,200 = \mathbf{630}$ DH.

**2)** Taux horaire : $4\,200 / 191 \approx 21{,}99$ DH. Heures de nuit (+ 50 %) : $8 \times 21{,}99 \times 1{,}5 \approx 263{,}87$ DH ; jour de repos, de jour (+ 50 %) : $4 \times 21{,}99 \times 1{,}5 \approx 131{,}94$ DH ; total **395,81 DH**.

**3)** Brut : $4\,200 + 630 + 395{,}81 = \mathbf{5\,225{,}81}$ DH.

</details>

### Exercice 3 — Équité interne et compa-ratio

Trois comptables occupent le même poste (fourchette de la classe : 8 000 à 12 000 DH, point médian 10 000 DH) :

| Salarié | Salaire | Performance | Ancienneté dans le poste |
|---|---:|---|---:|
| A | 11 500 | Moyenne | 4 ans |
| B | 8 400 | Excellente | 3 ans |
| C | 10 000 | Bonne | 5 ans |

1. Calculez le compa-ratio de chacun par rapport au point médian.
2. Relevez les problèmes d'équité et proposez une politique d'augmentation.

<details><summary>Voir le corrigé</summary>

**1)** A : **1,15** ; B : **0,84** ; C : **1,00**.

**2)** B, le plus performant, est le moins payé, 16 % sous le point médian : risque de démotivation et de départ (sentiment d'injustice). A est payé au-dessus du médian avec une performance moyenne. Politique : augmentations différenciées selon la performance **et** la position dans la fourchette (matrice d'augmentation) — forte augmentation pour B, augmentation normale pour C, faible ou nulle pour A, tant que sa performance ne progresse pas.

</details>
`,
    qcm: [
      { q: "Après 6 ans de service, la prime d'ancienneté légale est de :", choix: ["5 %", "10 %", "15 %", "20 %"], bonne: 1, explication: "10 % à partir de 5 ans de service." },
      { q: "Les heures supplémentaires de jour, un jour ouvrable, sont majorées de :", choix: ["10 %", "25 %", "50 %", "100 %"], bonne: 1, explication: "50 % la nuit ; 50 % et 100 % le jour de repos." },
      { q: "La cotisation salariale CNSS (4,48 %) est plafonnée à un salaire mensuel de :", choix: ["3 000 DH", "6 000 DH", "10 000 DH", "Aucun plafond"], bonne: 1, explication: "L'AMO, elle, n'est pas plafonnée." },
      { q: "Salaire brut 10 000 DH. La cotisation AMO salariale vaut :", choix: ["226 DH", "448 DH", "135,60 DH", "411 DH"], bonne: 0, explication: "2,26 % du salaire sans plafond." },
      { q: "Les frais professionnels servent à calculer :", choix: ["Le net à payer", "Le salaire net imposable pour l'IR", "Les cotisations CNSS", "La prime d'ancienneté"], bonne: 1, explication: "Ils ne réduisent pas le net versé." },
      { q: "Un compa-ratio de 1,10 signifie que le salaire est :", choix: ["10 % sous la référence", "10 % au-dessus de la référence", "Égal à la référence", "Égal au SMIG"], bonne: 1, explication: "Salaire / référence." },
      { q: "La pesée des postes sert à assurer :", choix: ["La compétitivité externe", "L'équité interne", "La conformité fiscale", "Le recrutement"], bonne: 1, explication: "Elle mesure la valeur relative des postes." },
      { q: "Une augmentation de 4 % au 1er juillet a un effet masse sur l'année d'environ :", choix: ["4 %", "2 %", "1 %", "8 %"], bonne: 1, explication: "Elle ne joue que sur 6 mois." },
      { q: "Le remplacement de salariés anciens par des débutants moins payés produit :", choix: ["Un effet report", "Un effet noria", "Un GVT positif", "Un effet niveau"], bonne: 1, explication: "Il réduit la masse salariale." },
      { q: "Le salaire minimum dans l'agriculture s'appelle :", choix: ["SMIG", "SMAG", "SNI", "AMO"], bonne: 1, explication: "Salaire minimum agricole garanti." },
    ],
  },

  6: {
    titre: "L'évaluation de la performance",
    description: "Évaluation de la performance : entretien annuel, objectifs SMART, taux d'atteinte pondéré, méthodes (360°, incidents critiques), biais et suites RH.",
    resume: md`
## L'essentiel — L'évaluation de la performance

- Évaluer les **résultats** et les **compétences** par rapport à des attentes connues ; objectifs : piloter, décider, développer, dialoguer, reconnaître.
- **Entretien annuel** : préparation (faits, auto-évaluation) → bilan → perspectives → compte rendu signé → suivi ; distinct de l'entretien professionnel.
- **SMART** : spécifique, mesurable, atteignable, réaliste, temporellement défini ; 3 à 5 objectifs pondérés.
- Taux global $= \sum \text{poids} \times \text{réalisé} / \text{objectif}$ (inverser pour les indicateurs à minimiser ; plafonnement).
- Méthodes : échelles (à ancrage comportemental), objectifs, incidents critiques, classement, **360°**.
- **Biais** : halo, indulgence ou sévérité, tendance centrale, **récence**, contraste, similarité, stéréotypes ; remèdes : critères définis, faits, formation, calibrage.
- Suites : rémunération, formation, carrière ; feedback continu ; données personnelles protégées.
`,
    exercices: md`
### Exercice 2 — Rendre des objectifs SMART

Reformulez de façon SMART :
1. Pour une assistante de direction : « Mieux organiser les réunions. »
2. Pour un technicien de maintenance : « Réduire les pannes. »
3. Pour un responsable RH : « Recruter plus vite. »

<details><summary>Voir le corrigé</summary>

1. « Envoyer l'ordre du jour et les documents de chaque comité de direction au moins 48 heures à l'avance et diffuser le compte rendu sous 24 heures, pour 100 % des comités de l'année. »
2. « Ramener le temps d'arrêt des lignes pour pannes de 60 à 40 heures par trimestre d'ici le 31 décembre, grâce au plan de maintenance préventive. »
3. « Réduire le délai moyen de recrutement des techniciens de 60 à 40 jours (de la publication de l'offre à la signature) sur les recrutements du second semestre. »

</details>

### Exercice 3 — Indicateur à minimiser

Une responsable du service clients a trois objectifs : délai moyen de réponse aux réclamations (objectif 48 h, réalisé 60 h, poids 50 %) ; taux de réclamations résolues au premier contact (objectif 70 %, réalisé 77 %, poids 30 %) ; formation de 6 nouveaux agents (réalisé 6, poids 20 %).

1. Calculez le taux d'atteinte de chaque objectif et le taux global.
2. Que révèle ce résultat ?

<details><summary>Voir le corrigé</summary>

**1)** Délai (à minimiser) : $48 / 60 = 80\,\%$ ; résolution : $77 / 70 = 110\,\%$ ; formation : $100\,\%$. Taux global : $0{,}5 \times 80 + 0{,}3 \times 110 + 0{,}2 \times 100 = 40 + 33 + 20 = \mathbf{93\,\%}$.

**2)** La qualité de résolution est très bonne mais les **délais** dérapent : il faut en analyser les causes (effectif insuffisant, pic d'activité, outils) avant de conclure à une insuffisance individuelle ; l'objectif principal (poids 50 %) n'est pas atteint.

</details>
`,
    qcm: [
      { q: "L'entretien annuel d'évaluation réunit en général :", choix: ["Le salarié et le DRH", "Le salarié et son supérieur hiérarchique direct", "Le salarié et un délégué du personnel", "Tous les salariés du service"], bonne: 1, explication: "Le manager direct connaît le travail." },
      { q: "Dans SMART, la lettre M signifie :", choix: ["Motivant", "Mesurable", "Modeste", "Mensuel"], bonne: 1, explication: "L'objectif doit être associé à un indicateur." },
      { q: "La direction par objectifs est associée à :", choix: ["Taylor", "Drucker", "Mayo", "Weber"], bonne: 1, explication: "Management by objectives." },
      { q: "Objectif 100, réalisé 90 (indicateur à maximiser). Le taux d'atteinte est de :", choix: ["111 %", "90 %", "10 %", "190 %"], bonne: 1, explication: "90 / 100." },
      { q: "Délai visé 10 jours, délai réalisé 12 jours. Le taux d'atteinte vaut :", choix: ["120 %", "83,3 %", "12 %", "100 %"], bonne: 1, explication: "Indicateur à minimiser : 10 / 12." },
      { q: "L'évaluation à 360° recueille l'avis :", choix: ["Du seul supérieur", "Du supérieur, des collègues, des collaborateurs et parfois des clients", "Des actionnaires", "De l'inspection du travail"], bonne: 1, explication: "Vision complète, surtout pour les managers." },
      { q: "Juger toute l'année sur un événement récent est :", choix: ["L'effet de halo", "L'effet de récence", "La tendance centrale", "L'effet de contraste"], bonne: 1, explication: "Il faut consigner les faits toute l'année." },
      { q: "Noter tout le monde « moyen » pour éviter de se justifier est :", choix: ["L'indulgence", "La tendance centrale", "La sévérité", "Le biais de similarité"], bonne: 1, explication: "L'évaluation ne différencie plus." },
      { q: "Une qualité marquante qui influence l'appréciation de tous les critères est :", choix: ["L'effet de halo", "L'effet noria", "L'effet report", "Le stéréotype"], bonne: 0, explication: "Il faut évaluer chaque critère séparément." },
      { q: "Poids 60 % et 40 %, taux d'atteinte 100 % et 80 %. Le taux global est :", choix: ["90 %", "92 %", "88 %", "180 %"], bonne: 1, explication: "60 + 32." },
    ],
  },

  7: {
    titre: "Les relations sociales",
    description: "Relations sociales au Maroc : délégués, comité d'entreprise, syndicats, négociation, dialogue social, conflits, grève (loi 97-15) et indemnités de licenciement.",
    resume: md`
## L'essentiel — Les relations sociales

- Acteurs : employeur, salariés et représentants, syndicats, **CGEM**, État (inspection du travail, tribunaux).
- **Délégués des salariés** (≥ 10 salariés, élus : réclamations individuelles) ; **comité d'entreprise** (≥ 50, consultatif) ; **comité de sécurité et d'hygiène** (≥ 50) ; **délégués syndicaux** (≥ 100, syndicat le plus représentatif : revendications et négociation) ; représentants protégés.
- Négociation d'entreprise, **convention collective** (améliore la loi), **dialogue social tripartite** national (accords de 2011, 2019, 2022, 2024).
- Conflits **individuels** (inspection du travail, tribunal) et **collectifs** (conciliation, arbitrage) ; **grève** : droit constitutionnel encadré par la **loi organique 97-15** (préavis, service minimum), salaire non dû.
- Règlement intérieur (≥ 10 salariés), sanctions graduées, droit de se défendre, faute grave.
- Indemnité de licenciement : 96 h par an (1-5 ans), 144 h (6-10), 192 h (11-15), 240 h (au-delà) ; licenciement abusif : 1,5 mois par an, plafond 36 mois.
`,
    exercices: md`
### Exercice 2 — Instances selon l'effectif

Indiquez les instances représentatives obligatoires et le nombre de délégués des salariés titulaires pour des entreprises de : 1) 8 salariés ; 2) 40 salariés ; 3) 75 salariés ; 4) 320 salariés.

<details><summary>Voir le corrigé</summary>

1. **8 salariés** : aucune instance élue obligatoire (seuil de 10) ; dialogue direct avec l'employeur.
2. **40 salariés** : délégués des salariés, **2 titulaires** (et 2 suppléants) ; règlement intérieur.
3. **75 salariés** : **3 délégués** titulaires ; comité d'entreprise ; comité de sécurité et d'hygiène (selon l'activité).
4. **320 salariés** : **7 délégués** titulaires ; comité d'entreprise ; comité de sécurité et d'hygiène ; délégués syndicaux.

</details>

### Exercice 3 — Indemnité de licenciement

Une employée, licenciée pour motif économique après 17 ans d'ancienneté, percevait un salaire horaire de 35 DH.

1. Calculez son indemnité de licenciement.
2. Pourquoi l'ancienneté est-elle aussi fortement récompensée ?

<details><summary>Voir le corrigé</summary>

**1)** $5 \times 96 + 5 \times 144 + 5 \times 192 + 2 \times 240 = 480 + 720 + 960 + 480 = 2\,640$ heures ; $2\,640 \times 35 = \mathbf{92\,400\ DH}$.

**2)** Le barème progressif compense la difficulté plus grande à retrouver un emploi après une longue carrière dans la même entreprise, et la perte des droits liés à l'ancienneté ; il incite aussi l'employeur à rechercher d'autres solutions (reclassement, formation) avant de licencier.

</details>
`,
    qcm: [
      { q: "Les délégués des salariés sont obligatoires à partir de :", choix: ["5 salariés", "10 salariés", "50 salariés", "100 salariés"], bonne: 1, explication: "Ils sont élus par le personnel." },
      { q: "Le comité d'entreprise est obligatoire à partir de :", choix: ["10 salariés", "50 salariés", "100 salariés", "250 salariés"], bonne: 1, explication: "C'est une instance consultative." },
      { q: "Le rôle principal des délégués des salariés est de :", choix: ["Négocier les conventions collectives", "Présenter les réclamations individuelles à l'employeur", "Diriger l'entreprise", "Fixer les salaires"], bonne: 1, explication: "La négociation relève surtout des syndicats." },
      { q: "Dans une entreprise de 150 salariés, le nombre de délégués titulaires est de :", choix: ["3", "5", "7", "9"], bonne: 1, explication: "Tranche de 101 à 250 salariés." },
      { q: "Une convention collective :", choix: ["Réduit les droits prévus par la loi", "Améliore les droits prévus par la loi", "Remplace le Code du travail", "Est un contrat individuel"], bonne: 1, explication: "Elle ne peut pas être moins favorable que la loi." },
      { q: "L'organisation patronale qui participe au dialogue social national est :", choix: ["La CNSS", "La CGEM", "L'ANAPEC", "La CNDP"], bonne: 1, explication: "Confédération générale des entreprises du Maroc." },
      { q: "Les conditions d'exercice du droit de grève sont fixées par :", choix: ["Le règlement intérieur", "La loi organique 97-15", "La loi 31-08", "Le contrat de travail"], bonne: 1, explication: "Entrée en vigueur en septembre 2025." },
      { q: "Pendant une grève, le contrat de travail est :", choix: ["Rompu", "Suspendu", "Transformé en CDD", "Maintenu avec salaire"], bonne: 1, explication: "Le salaire des jours de grève n'est pas dû." },
      { q: "8 ans d'ancienneté : combien d'heures d'indemnité de licenciement ?", choix: ["768", "912", "1 152", "480"], bonne: 1, explication: "5 × 96 + 3 × 144 = 480 + 432." },
      { q: "Les dommages-intérêts pour licenciement abusif sont plafonnés à :", choix: ["12 mois", "36 mois", "24 mois", "Aucun plafond"], bonne: 1, explication: "Un mois et demi par année d'ancienneté." },
    ],
  },

  8: {
    titre: "La motivation et les théories des organisations",
    description: "Théories des organisations et de la motivation : Taylor, Fayol, Weber, Mayo, McGregor, Maslow, Herzberg, Vroom, Adams, Locke, contingence et Crozier.",
    resume: md`
## L'essentiel — Motivation et théories des organisations

- **École classique** : Taylor (OST, division du travail, one best way, salaire au rendement), Fayol (prévoir, organiser, commander, coordonner, contrôler ; unité de commandement), Weber (bureaucratie) ; limites : homme réduit à un exécutant.
- **Relations humaines** : Mayo (Hawthorne : reconnaissance, groupe), McGregor (théories **X** et **Y**), Likert (management participatif).
- **Théories de contenu** : Maslow (5 niveaux de besoins), **Herzberg** (facteurs d'hygiène / facteurs moteurs, enrichissement des tâches), McClelland (accomplissement, pouvoir, affiliation).
- **Théories de processus** : **Vroom** (Motivation = E × I × V), **Adams** (équité), Locke (objectifs précis et difficiles), Deci et Ryan (motivation intrinsèque, autonomie).
- Approches modernes : systèmes, **contingence** (structures mécanistes ou organiques), Mintzberg (configurations), Crozier (pouvoir et zones d'incertitude).
- GRH : hygiène correcte, enrichissement, objectifs atteignables, équité, reconnaissance, participation.
`,
    exercices: md`
### Exercice 2 — Facteurs d'hygiène ou moteurs ?

Classez selon Herzberg : 1) salaire ; 2) confiance d'un projet important ; 3) climatisation des bureaux ; 4) félicitations de la direction ; 5) sécurité de l'emploi ; 6) promotion ; 7) relations avec le chef ; 8) travail intéressant.

<details><summary>Voir le corrigé</summary>

- **Facteurs d'hygiène** : 1 (salaire), 3 (conditions de travail), 5 (sécurité de l'emploi), 7 (relations avec la hiérarchie).
- **Facteurs moteurs** : 2 (responsabilité), 4 (reconnaissance), 6 (évolution), 8 (intérêt du travail).

</details>

### Exercice 3 — Vroom appliqué à un voyage de récompense

Une entreprise offre un voyage aux trois meilleurs vendeurs de l'année (sur 40). Pour Salma, vendeuse moyenne : probabilité d'être dans les trois premiers E = 0,1 ; I = 1 ; valence du voyage 8. Pour Youssef, meilleur vendeur l'an dernier : E = 0,6 ; I = 1 ; valence 3 (il voyage souvent).

1. Calculez la force motivationnelle de chacun.
2. Que proposer pour motiver l'ensemble de l'équipe ?

<details><summary>Voir le corrigé</summary>

**1)** Salma : $0{,}1 \times 1 \times 8 = \mathbf{0{,}8}$ ; Youssef : $0{,}6 \times 1 \times 3 = \mathbf{1{,}8}$. Aucun des deux n'est fortement motivé : l'une juge l'objectif inaccessible, l'autre accorde peu de valeur à la récompense.

**2)** Des objectifs **individualisés** et atteignables (progression par rapport à son propre niveau), des récompenses **au choix** (prime, formation, jours de congé) pour augmenter la valence, et une reconnaissance régulière plutôt qu'un seul concours annuel réservé à quelques-uns.

</details>
`,
    qcm: [
      { q: "L'organisation scientifique du travail est associée à :", choix: ["Fayol", "Taylor", "Mayo", "Herzberg"], bonne: 1, explication: "Division du travail et one best way." },
      { q: "Prévoir, organiser, commander, coordonner, contrôler sont les fonctions définies par :", choix: ["Taylor", "Fayol", "Weber", "Maslow"], bonne: 1, explication: "Administration industrielle et générale, 1916." },
      { q: "Les expériences de Hawthorne ont mis en évidence :", choix: ["Le rôle de l'éclairage", "L'importance des facteurs psychologiques et du groupe", "L'efficacité du chronométrage", "La supériorité de la bureaucratie"], bonne: 1, explication: "Les ouvrières se sentaient considérées." },
      { q: "Selon la théorie Y de McGregor, le salarié :", choix: ["Fuit les responsabilités", "Peut rechercher des responsabilités si on lui fait confiance", "Ne travaille que pour l'argent", "Doit être contrôlé en permanence"], bonne: 1, explication: "La théorie X suppose l'inverse." },
      { q: "Selon Herzberg, le salaire est principalement :", choix: ["Un facteur moteur", "Un facteur d'hygiène", "Un besoin d'accomplissement", "Sans effet"], bonne: 1, explication: "Son insuffisance crée de l'insatisfaction." },
      { q: "Au sommet de la pyramide de Maslow se trouve le besoin :", choix: ["De sécurité", "D'estime", "D'accomplissement", "D'appartenance"], bonne: 2, explication: "Réaliser son potentiel." },
      { q: "E = 0,5 ; I = 0,8 ; V = 5. La force motivationnelle selon Vroom vaut :", choix: ["6,3", "2", "0,4", "4"], bonne: 1, explication: "0,5 × 0,8 × 5." },
      { q: "La théorie de l'équité est due à :", choix: ["Adams", "Locke", "Vroom", "McClelland"], bonne: 0, explication: "Comparaison des ratios rétributions / contributions." },
      { q: "Selon la théorie de la contingence, la meilleure structure :", choix: ["Est toujours la bureaucratie", "Dépend de l'environnement, de la technologie et de la taille", "Est toujours décentralisée", "N'existe pas du tout"], bonne: 1, explication: "Il n'y a pas de modèle universel." },
      { q: "Pour Crozier, le pouvoir d'un acteur provient de la maîtrise :", choix: ["Du capital", "Des zones d'incertitude", "Du règlement intérieur", "De l'ancienneté"], bonne: 1, explication: "Expertise, information, relations, règles." },
    ],
  },
};

export default chapitres;
