// Gestion des Ressources Humaines (S4) — compléments par chapitre.
const md = String.raw;

export default {
  1: {
    titre: "Introduction à la GRH",
    resume: md`
## L'essentiel — Introduction à la GRH

- La **GRH** regroupe les pratiques qui permettent d'**administrer**, de **mobiliser** et de **développer** les personnes au service de la performance.
- Évolution : **administration du personnel** (logique tayloriste) → prise en compte du facteur humain (relations humaines) → **GRH** (le personnel devient une ressource stratégique) → management stratégique des RH, digitalisation, marque employeur.
- Fonctions : administration du personnel, recrutement, formation, gestion des carrières, rémunération, relations sociales.
- Enjeux actuels : attirer et fidéliser les talents, diversité, **SIRH**, qualité de vie au travail, **RSE**.
- Indicateurs clés : effectif moyen, **taux de rotation** (turn-over), **taux d'absentéisme**.
`,
    exercices: md`
### Exercice 2 — Indicateurs sociaux de base

Une entreprise compte 200 salariés au 1ᵉʳ janvier et 220 au 31 décembre. Dans l'année : 38 embauches et 18 départs. Les absences représentent 8 400 heures ; la durée théorique annuelle de travail est de 1 900 heures par salarié.

1. Calculez l'effectif moyen.
2. Calculez le taux de rotation : $\dfrac{(\text{entrées} + \text{sorties}) / 2}{\text{effectif moyen}}$.
3. Calculez le taux d'absentéisme (heures d'absence / heures théoriques de l'effectif moyen).

<details><summary>Voir le corrigé</summary>

**1)** $(200 + 220) / 2 = 210$ salariés.

**2)** $\dfrac{(38 + 18) / 2}{210} = \dfrac{28}{210} \approx 13{,}3\%$.

**3)** Heures théoriques $= 210 \times 1\,900 = 399\,000$ h ; taux $= 8\,400 / 399\,000 \approx 2{,}1\%$.

</details>
`,
    qcm: [
      { q: "La GRH considère aujourd'hui le personnel comme :", choix: ["Un simple coût", "Une ressource stratégique", "Une charge fixe à réduire", "Un problème administratif"], bonne: 1, explication: "C'est le passage de l'administration du personnel à la GRH." },
      { q: "La paie et les contrats relèvent de :", choix: ["L'administration du personnel", "La formation", "Les relations sociales", "La GPEC"], bonne: 0, explication: "C'est la fonction la plus ancienne." },
      { q: "SIRH signifie :", choix: ["Service interne des ressources humaines", "Système d'information des ressources humaines", "Salaire indexé réel horaire", "Syndicat interprofessionnel RH"], bonne: 1, explication: "C'est la digitalisation des processus RH." },
      { q: "Un taux de rotation élevé traduit :", choix: ["Une grande stabilité du personnel", "De nombreuses entrées et sorties", "Une masse salariale faible", "Un faible absentéisme"], bonne: 1, explication: "Il peut signaler un problème de fidélisation." },
      { q: "La RSE, dans le champ RH, concerne notamment :", choix: ["La fixation des prix", "La qualité de vie au travail et la diversité", "Le calcul de l'IS", "La distribution"], bonne: 1, explication: "Responsabilité sociale envers les salariés." },
    ],
  },

  2: {
    titre: "Le recrutement",
    resume: md`
## L'essentiel — Le recrutement

- Processus : **besoin → définition du poste (fiche de poste, profil) → recherche → sélection → décision → intégration**.
- **Recrutement interne** (promotion, mobilité) : moins coûteux, motivant, connaissance de l'entreprise ; **externe** (annonces, cabinets, réseaux professionnels, candidatures spontanées) : sang neuf et compétences nouvelles.
- Outils de sélection : CV et lettre, **entretien**, **tests** (aptitudes, personnalité), **mises en situation** et assessment center.
- **Intégration (onboarding)** : accueil, tutorat, formation au poste ; elle réduit le turn-over précoce.
- Indicateur : **coût par recrutement** = coûts engagés / nombre de recrues.
`,
    exercices: md`
### Exercice 2 — Interne ou externe, et à quel coût ?

1. Recrutement interne ou externe ? a) Remplacer un chef d'équipe qui part à la retraite, alors qu'un technicien expérimenté est volontaire ; b) créer un poste de data analyst, compétence absente de l'entreprise ; c) pourvoir un poste de direction pour transformer la culture de l'entreprise.
2. Pour recruter 3 commerciaux, l'entreprise a dépensé 12 000 DH d'annonces, 45 000 DH d'honoraires de cabinet et 9 000 DH de temps passé par les managers. Calculez le coût par recrutement. Deux des recrues partent avant 6 mois : quelle étape faut-il améliorer ?

<details><summary>Voir le corrigé</summary>

**1)** a) **interne** : motivation et connaissance du terrain ; b) **externe** : la compétence n'existe pas en interne ; c) **externe** : un regard neuf est recherché.

**2)** $(12\,000 + 45\,000 + 9\,000) / 3 = 22\,000$ DH par recrue. Deux départs précoces montrent un problème de **sélection** (adéquation au poste) ou d'**intégration** : il faut renforcer l'accueil, le tutorat et le suivi des premiers mois.

</details>
`,
    qcm: [
      { q: "La première étape du recrutement est :", choix: ["L'entretien", "L'expression du besoin", "L'intégration", "Le test de personnalité"], bonne: 1, explication: "On vérifie d'abord que le poste est nécessaire." },
      { q: "Un avantage du recrutement interne est :", choix: ["L'apport de compétences nouvelles", "Un coût réduit et la motivation du personnel", "L'absence de formation nécessaire", "Un choix plus large"], bonne: 1, explication: "Il offre aussi des perspectives d'évolution." },
      { q: "Une mise en situation permet d'évaluer :", choix: ["Le diplôme", "Le comportement dans une situation proche du poste", "L'âge", "Le salaire souhaité"], bonne: 1, explication: "C'est plus prédictif qu'un simple entretien." },
      { q: "L'onboarding a pour but principal de :", choix: ["Rédiger l'annonce", "Faciliter l'intégration du nouveau salarié", "Négocier le salaire", "Licencier"], bonne: 1, explication: "Il réduit les départs précoces." },
      { q: "La fiche de poste décrit :", choix: ["Les missions et activités du poste", "Le bilan de l'entreprise", "La paie du mois", "Le règlement intérieur"], bonne: 0, explication: "Le profil décrit, lui, les compétences recherchées." },
    ],
  },

  3: {
    titre: "La formation et le développement des compétences",
    resume: md`
## L'essentiel — La formation

- Objectifs : adapter aux évolutions du poste, développer l'**employabilité**, accompagner le changement, préparer la relève.
- Ingénierie de formation : **analyse des besoins → plan de formation → mise en œuvre → évaluation** (à chaud et à froid).
- Types : formation initiale / **continue** ; présentiel / **e-learning** ; **en situation de travail**.
- **Kirkpatrick** : 1) **réaction** (satisfaction), 2) **apprentissage** (acquis), 3) **comportement** (application au poste), 4) **résultats** (impact sur la performance).
- Indicateurs : budget de formation / masse salariale, heures de formation par salarié, coût par stagiaire.
`,
    exercices: md`
### Exercice 2 — Budget et évaluation d'une formation

1. La masse salariale est de 20 000 000 DH et l'entreprise consacre 1,5 % de sa masse salariale à la formation. Calculez le budget. Une formation Excel coûte 36 000 DH pour 12 participants : quel est le coût par stagiaire ?
2. Rattachez chaque mesure à un niveau de Kirkpatrick : a) un quiz en fin de session ; b) un questionnaire de satisfaction distribué à la sortie ; c) la baisse de 30 % des erreurs de saisie trois mois après ; d) l'observation par le manager de l'utilisation des tableaux croisés dynamiques au poste.

<details><summary>Voir le corrigé</summary>

**1)** Budget $= 20\,000\,000 \times 1{,}5\% = 300\,000$ DH ; coût par stagiaire $= 36\,000 / 12 = 3\,000$ DH.

**2)** a) niveau 2 **apprentissage** ; b) niveau 1 **réaction** ; c) niveau 4 **résultats** ; d) niveau 3 **comportement**.

</details>
`,
    qcm: [
      { q: "La première étape de l'ingénierie de formation est :", choix: ["L'évaluation", "L'analyse des besoins", "Le choix du formateur", "Le paiement"], bonne: 1, explication: "On forme pour combler un écart de compétences." },
      { q: "Le niveau « réaction » de Kirkpatrick mesure :", choix: ["La satisfaction des participants", "L'impact sur le CA", "L'application au poste", "Les connaissances acquises"], bonne: 0, explication: "C'est l'évaluation à chaud." },
      { q: "L'e-learning a pour principal avantage :", choix: ["La présence physique du formateur", "La flexibilité", "L'absence de coût", "Le diplôme d'État"], bonne: 1, explication: "On se forme à son rythme." },
      { q: "Vérifier trois mois après que les salariés appliquent ce qu'ils ont appris, c'est une évaluation :", choix: ["À chaud", "À froid", "Préalable", "Financière"], bonne: 1, explication: "Elle porte sur le comportement au poste." },
      { q: "La formation continue a lieu :", choix: ["Avant l'entrée dans la vie active", "Tout au long de la carrière", "Uniquement à l'embauche", "Uniquement avant la retraite"], bonne: 1, explication: "Elle entretient les compétences." },
    ],
  },

  4: {
    titre: "La gestion des carrières et la GPEC",
    resume: md`
## L'essentiel — Carrières et GPEC

- **Gestion des carrières** : mobilité **horizontale** (autre poste de même niveau), **verticale** (promotion), **géographique**.
- **GPEC** : anticiper les besoins futurs en emplois et compétences pour réduire l'écart avec les ressources disponibles.
- $\text{Écart} = \text{besoins futurs} - \text{ressources actuelles projetées}$ (effectif actuel − départs prévus).
- Déficit → **formation**, mobilité interne, recrutement ; excédent → **reconversion**, redéploiement, départs volontaires.
- **Entretien professionnel** : perspectives d'évolution et besoins de formation, distinct de l'entretien d'évaluation.
`,
    exercices: md`
### Exercice 2 — Un tableau de GPEC

Prévisions à 3 ans d'une entreprise industrielle :

| Métier | Effectif actuel | Départs prévus (retraite, mobilité) | Besoin dans 3 ans |
|---|--:|--:|--:|
| Techniciens de maintenance | 35 | 8 | 40 |
| Comptables | 14 | 1 | 10 |
| Opérateurs sur machines anciennes | 60 | 5 | 40 |

1. Calculez les ressources projetées et l'écart pour chaque métier.
2. Proposez des actions RH.

<details><summary>Voir le corrigé</summary>

| Métier | Ressources projetées | Écart (besoin − ressources) |
|---|--:|--:|
| Techniciens | 27 | **+13** (déficit) |
| Comptables | 13 | **−3** (excédent) |
| Opérateurs | 55 | **−15** (excédent) |

**2)** Former une partie des 15 opérateurs en excédent au métier de technicien de maintenance (reconversion interne), compléter par du recrutement externe ; redéployer les 3 comptables vers le contrôle de gestion ou d'autres services ; anticiper les départs en retraite par le tutorat.

</details>
`,
    qcm: [
      { q: "Une promotion est une mobilité :", choix: ["Horizontale", "Verticale", "Géographique", "Externe"], bonne: 1, explication: "Le salarié monte en responsabilité." },
      { q: "La GPEC vise à :", choix: ["Calculer la paie", "Anticiper les besoins futurs en emplois et compétences", "Organiser les élections", "Sanctionner"], bonne: 1, explication: "C'est une démarche prévisionnelle." },
      { q: "Effectif 50, départs prévus 10, besoin futur 45 : l'écart est de :", choix: ["−5", "+5", "+15", "−15"], bonne: 1, explication: "45 − (50 − 10) = +5 : il manquera 5 personnes." },
      { q: "Face à un excédent prévisible dans un métier, l'entreprise peut :", choix: ["Recruter massivement", "Reconvertir les salariés vers d'autres métiers", "Augmenter les salaires", "Ignorer le problème"], bonne: 1, explication: "La formation permet le redéploiement." },
      { q: "L'entretien professionnel porte surtout sur :", choix: ["La performance de l'année", "Les perspectives d'évolution et la formation", "Le salaire", "Les sanctions"], bonne: 1, explication: "Il est distinct de l'entretien d'évaluation." },
    ],
  },

  5: {
    titre: "La rémunération",
    resume: md`
## L'essentiel — La rémunération

- Rémunération globale : **salaire de base** + **variable** (primes, commissions, intéressement, participation) + **avantages en nature** + **périphériques sociaux** (couverture médicale, retraite).
- Objectifs : **attirer**, **fidéliser**, **motiver**, tout en maîtrisant la masse salariale.
- **Équité interne** : cohérence entre postes de responsabilité comparable (classification des emplois).
- **Compétitivité externe** : comparaison avec le marché (enquêtes de salaires) ; **compa-ratio** $= \dfrac{\text{salaire pratiqué}}{\text{salaire médian du marché}}$.
- La part variable récompense la performance mais peut créer de l'instabilité ou de la concurrence entre salariés.
`,
    exercices: md`
### Exercice 2 — Fixe, variable et marché

Un commercial perçoit 8 000 DH de fixe mensuel et une commission de 5 % sur le chiffre d'affaires qui dépasse son objectif mensuel de 100 000 DH.

1. Calculez sa rémunération d'un mois où il réalise 160 000 DH de CA, puis d'un mois à 90 000 DH.
2. Le salaire fixe médian du marché pour ce poste est de 9 000 DH. Calculez le compa-ratio du fixe et commentez.

<details><summary>Voir le corrigé</summary>

**1)** Mois à 160 000 DH : commission $= 5\% \times 60\,000 = 3\,000$ DH, total **11 000 DH**. Mois à 90 000 DH : objectif non atteint, total **8 000 DH**.

**2)** Compa-ratio $= 8\,000 / 9\,000 \approx 0{,}89$ : le fixe est 11 % sous le marché. Le variable compense les bons mois, mais il y a un risque de départ vers des concurrents mieux-disants : l'entreprise peut revoir le fixe ou mettre en avant d'autres avantages.

</details>
`,
    qcm: [
      { q: "Une commission sur les ventes est une rémunération :", choix: ["Fixe", "Variable", "En nature", "Sociale"], bonne: 1, explication: "Elle dépend de la performance." },
      { q: "Une voiture de fonction est :", choix: ["Un salaire de base", "Un avantage en nature", "Une prime", "Une cotisation"], bonne: 1, explication: "Elle fait partie de la rémunération globale." },
      { q: "L'équité interne consiste à :", choix: ["Payer comme les concurrents", "Payer de façon cohérente des postes comparables dans l'entreprise", "Payer tout le monde pareil", "Supprimer le variable"], bonne: 1, explication: "La compétitivité externe compare au marché." },
      { q: "Un compa-ratio de 1,10 signifie que le salaire est :", choix: ["10 % sous le marché", "10 % au-dessus du marché", "Égal au marché", "Égal au SMIG"], bonne: 1, explication: "Salaire pratiqué / médiane du marché." },
      { q: "Un risque d'une part variable trop forte est :", choix: ["La baisse de motivation", "L'instabilité du revenu et la concurrence entre collègues", "La hausse des impôts", "La baisse du CA"], bonne: 1, explication: "Il faut équilibrer fixe et variable." },
    ],
  },

  6: {
    titre: "L'évaluation de la performance",
    resume: md`
## L'essentiel — Évaluer la performance

- **Entretien annuel d'évaluation** : bilan de l'année (objectifs atteints ou non) et fixation des objectifs suivants.
- Méthodes : **par objectifs**, **à 360°** (supérieur, pairs, subordonnés, clients), **grille de compétences**.
- Objectifs **SMART** : **S**pécifique, **M**esurable, **A**tteignable, **R**éaliste, **T**emporellement défini.
- Biais à éviter : effet de halo, indulgence ou sévérité, tendance centrale, effet de récence.
- L'évaluation alimente la rémunération, la formation et la gestion des carrières.
`,
    exercices: md`
### Exercice 2 — Rendre des objectifs SMART

1. Reformulez en objectifs SMART : a) « Améliorer les ventes » ; b) « Être plus réactif avec les clients » ; c) « Réduire les erreurs ».
2. Citez un avantage et un inconvénient de l'évaluation à 360°.

<details><summary>Voir le corrigé</summary>

**1)** Exemples : a) « Augmenter de 10 % le chiffre d'affaires de la région Nord entre janvier et décembre 2026. » b) « Répondre à 95 % des réclamations clients en moins de 48 heures d'ici la fin du trimestre. » c) « Ramener le taux d'erreurs de facturation de 4 % à 1 % d'ici le 30 juin. »

**2)** Avantage : une vision complète et plus objective du comportement, grâce à plusieurs sources. Inconvénient : lourde à organiser, et risque de règlements de comptes ou d'évaluations complaisantes entre collègues.

</details>
`,
    qcm: [
      { q: "Dans SMART, le « M » signifie :", choix: ["Motivant", "Mesurable", "Mensuel", "Majeur"], bonne: 1, explication: "On doit pouvoir constater l'atteinte de l'objectif." },
      { q: "L'évaluation à 360° recueille l'avis :", choix: ["Du seul supérieur", "Du supérieur, des pairs, des subordonnés, voire des clients", "Du seul salarié", "Des actionnaires"], bonne: 1, explication: "D'où son nom." },
      { q: "L'entretien annuel d'évaluation porte sur :", choix: ["Le seul salaire", "Le bilan de l'année et les objectifs à venir", "Le règlement intérieur", "La retraite"], bonne: 1, explication: "C'est un moment d'échange formalisé." },
      { q: "L'effet de halo consiste à :", choix: ["Juger tout le salarié à partir d'un seul trait marquant", "Noter tout le monde au milieu", "Ne retenir que les derniers mois", "Être trop sévère"], bonne: 0, explication: "Un point fort ou faible colore tout le jugement." },
      { q: "« Améliorer la qualité » n'est pas SMART car il n'est pas :", choix: ["Assez court", "Mesurable ni daté", "Écrit en français", "Validé par la DRH"], bonne: 1, explication: "Il manque un indicateur et une échéance." },
    ],
  },

  7: {
    titre: "Les relations sociales",
    resume: md`
## L'essentiel — Les relations sociales

- **Instances représentatives** : délégués du personnel, comité d'entreprise ou équivalent, représentants syndicaux (selon la taille et le Code du travail).
- Sources de conflits : salaires, conditions de travail, licenciements, réorganisations, application du droit du travail.
- Modes d'action et de résolution : **négociation collective**, **grève**, **médiation / conciliation** (tiers facilitateur), arbitrage.
- **Dialogue social** : information, consultation et négociation pour **prévenir** les conflits et aboutir à des accords durables (conventions collectives).
`,
    exercices: md`
### Exercice 2 — Gérer un conflit collectif

Une usine annonce une réorganisation des horaires (passage en 3 × 8) sans consulter les représentants du personnel. Les salariés menacent de faire grève.

1. Identifiez la source du conflit et l'erreur de la direction.
2. Quelles étapes de dialogue social auraient dû précéder l'annonce ?
3. Si la négociation échoue, quel mode de résolution proposer ?

<details><summary>Voir le corrigé</summary>

**1)** Source : les **conditions de travail** (horaires). Erreur : l'absence d'**information et de consultation** préalables des représentants du personnel.

**2)** Informer les représentants du projet et de ses raisons ; les **consulter** et recueillir leurs propositions ; **négocier** des contreparties (primes de nuit, transport, volontariat, calendrier progressif).

**3)** Une **médiation** ou une **conciliation** par un tiers (inspection du travail ou médiateur) pour rapprocher les positions avant tout arrêt de travail.

</details>
`,
    qcm: [
      { q: "Le dialogue social comprend :", choix: ["Uniquement la grève", "L'information, la consultation et la négociation", "Uniquement les sanctions", "Le recrutement"], bonne: 1, explication: "Il vise à prévenir les conflits." },
      { q: "La grève est :", choix: ["Une cessation collective et concertée du travail", "Un licenciement", "Une médiation", "Une sanction disciplinaire"], bonne: 0, explication: "Elle appuie des revendications professionnelles." },
      { q: "La médiation fait intervenir :", choix: ["Le seul employeur", "Un tiers qui aide les parties à trouver un accord", "Les actionnaires", "Les clients"], bonne: 1, explication: "Le médiateur facilite, il ne décide pas." },
      { q: "Les délégués du personnel ont pour rôle de :", choix: ["Diriger l'entreprise", "Porter les réclamations des salariés auprès de la direction", "Fixer les prix", "Recruter"], bonne: 1, explication: "Ce sont des représentants élus." },
      { q: "Un accord signé après une négociation collective peut prendre la forme :", choix: ["D'une convention collective", "D'un bilan", "D'une facture", "D'un contrat de vente"], bonne: 0, explication: "Elle fixe des règles pour les salariés concernés." },
    ],
  },

  8: {
    titre: "La motivation et les théories des organisations",
    resume: md`
## L'essentiel — Motivation et théories

- **Taylor** (organisation scientifique du travail) : division et spécialisation des tâches, salaire au rendement ; l'homme est vu comme un **homo economicus**.
- **Mayo** (effet Hawthorne) : l'attention portée aux salariés améliore leur productivité.
- **Maslow** : besoins **physiologiques → sécurité → appartenance → estime → accomplissement** ; un besoin satisfait ne motive plus.
- **Herzberg** : **facteurs d'hygiène** (salaire, conditions de travail : évitent l'insatisfaction) et **facteurs moteurs** (reconnaissance, responsabilité, réussite : motivent vraiment).
- Approches modernes : **contingence** (pas de modèle unique) et **management participatif**.
`,
    exercices: md`
### Exercice 2 — Maslow et Herzberg

1. Rattachez chaque élément à un niveau de Maslow : a) un contrat à durée indéterminée ; b) une promotion au titre de « responsable » ; c) une cantine et des pauses régulières ; d) un projet innovant confié à un salarié qui en rêvait ; e) une équipe soudée.
2. Selon Herzberg, classez en facteurs d'hygiène ou de motivation : a) salaire ; b) reconnaissance du travail accompli ; c) propreté des locaux ; d) responsabilités confiées ; e) relations avec le chef.

<details><summary>Voir le corrigé</summary>

**1)** a) **sécurité** ; b) **estime** ; c) **physiologiques** ; d) **accomplissement** ; e) **appartenance**.

**2)** Hygiène : a, c, e. Motivation : b, d.

</details>
`,
    qcm: [
      { q: "Selon Taylor, le salarié est motivé principalement par :", choix: ["La reconnaissance", "Le salaire", "L'accomplissement", "L'ambiance"], bonne: 1, explication: "Vision de l'homo economicus." },
      { q: "L'effet Hawthorne est associé à :", choix: ["Fayol", "Mayo", "Maslow", "Herzberg"], bonne: 1, explication: "Expériences de la Western Electric." },
      { q: "Au sommet de la pyramide de Maslow se trouve le besoin :", choix: ["De sécurité", "D'estime", "D'accomplissement de soi", "D'appartenance"], bonne: 2, explication: "Il vient après tous les autres." },
      { q: "Pour Herzberg, le salaire est un facteur :", choix: ["De motivation", "D'hygiène", "D'accomplissement", "Neutre"], bonne: 1, explication: "Il évite l'insatisfaction sans motiver durablement." },
      { q: "L'école de la contingence affirme que :", choix: ["Il existe une organisation idéale", "La bonne organisation dépend du contexte", "Le salaire suffit à motiver", "Les tâches doivent être parcellisées"], bonne: 1, explication: "Pas de « one best way »." },
    ],
  },
};
