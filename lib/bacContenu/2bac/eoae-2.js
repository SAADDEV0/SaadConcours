// EOAE — 2ème Bac, unité 2 : la gestion des ressources humaines.
const md = String.raw;

export default {
  "les-enjeux-et-les-domaines-de-la-grh": {
    cours: md`
## Introduction

Le personnel n'est plus considéré seulement comme un **coût**, mais comme une **ressource** essentielle à la performance de l'entreprise. D'où le passage de la « fonction personnel » à la **gestion des ressources humaines (GRH)**.

> La **GRH** est l'ensemble des activités qui permettent à l'entreprise de disposer, au bon moment, des **effectifs** et des **compétences** nécessaires, et de **mobiliser** le personnel pour atteindre ses objectifs.

## I. L'évolution de la fonction

| Époque | Conception |
|---|---|
| Gestion du personnel (début du XXᵉ siècle) | Tâches **administratives** : paie, contrats, discipline |
| Gestion des ressources humaines | Fonction **stratégique** : compétences, motivation, développement du personnel |

## II. Les domaines de la GRH

| Domaine | Contenu |
|---|---|
| **Gestion administrative** | Contrats, paie, déclarations sociales (CNSS), dossiers du personnel, discipline |
| **Gestion des effectifs** | Prévision des besoins, **recrutement**, intégration, départs |
| **Développement des compétences** | **Formation**, gestion des **carrières**, évaluation |
| **Rémunération** | Politique salariale, primes, avantages |
| **Relations sociales** | Dialogue avec les délégués du personnel et les syndicats, négociations |
| **Conditions de travail** | Santé, sécurité, hygiène, horaires, climat social |
| **Communication interne** | Information et motivation du personnel |

## III. Les enjeux de la GRH

- **Enjeu économique** : la performance dépend des compétences et de la productivité du personnel ;
- **Enjeu social** : satisfaction, motivation, climat social apaisé, réduction des conflits ;
- **Enjeu stratégique** : disposer des compétences nécessaires aux projets futurs (nouvelles technologies, internationalisation) ;
- **Enjeu juridique** : respecter le **Code du travail** (loi n° 65-99) et la réglementation sociale.

## IV. Les indicateurs de la GRH (tableau de bord social)

$$\text{Effectif moyen} = \frac{\text{effectif début} + \text{effectif fin}}{2}$$

$$\text{Taux d'absentéisme} = \frac{\text{heures d'absence}}{\text{heures de travail théoriques}} \times 100$$

$$\text{Taux de rotation (turnover)} = \frac{(\text{départs} + \text{arrivées}) / 2}{\text{effectif moyen}} \times 100$$

$$\text{Taux d'accidents} = \frac{\text{nombre d'accidents}}{\text{effectif}} \times 100$$

Un taux d'**absentéisme** ou de **rotation** élevé révèle souvent un **mauvais climat social** ou des conditions de travail difficiles.
`,
    exercices: md`
### Exercice 1 — Indicateurs sociaux (données fictives)

Une entreprise comptait 180 salariés au 1ᵉʳ janvier et 200 au 31 décembre. Pendant l'année : 30 arrivées, 10 départs. Heures théoriques de travail : 380 000 ; heures d'absence : 22 800.

1. Calculez l'effectif moyen.
2. Calculez le taux d'absentéisme et le taux de rotation.
3. Commentez.

<details><summary>Voir le corrigé</summary>

1. $\frac{180 + 200}{2} = 190$ salariés.
2. Absentéisme $= \frac{22\,800}{380\,000} \times 100 = 6\%$ ; rotation $= \frac{(10 + 30)/2}{190} \times 100 \approx 10{,}53\%$.
3. Un absentéisme de 6 % est assez élevé : il faut en rechercher les causes (conditions de travail, motivation). La rotation de 10,5 % reste modérée.

</details>

### Exercice 2 — Domaines de la GRH

À quel domaine se rattache chaque tâche ? a) Établir les bulletins de paie ; b) organiser un stage de perfectionnement ; c) négocier avec les délégués du personnel ; d) installer des équipements de protection ; e) publier une offre d'emploi.

<details><summary>Voir le corrigé</summary>

a) **Gestion administrative** ; b) **Formation** ; c) **Relations sociales** ; d) **Conditions de travail (sécurité)** ; e) **Recrutement**.

</details>
`,
    resume: md`
## L'essentiel — Enjeux et domaines de la GRH

- **GRH** : disposer des effectifs et compétences nécessaires et mobiliser le personnel.
- Évolution : gestion administrative du personnel → fonction **stratégique**.
- **Domaines** : administration, effectifs (recrutement), compétences (formation, carrières), rémunération, relations sociales, conditions de travail, communication.
- **Enjeux** : économique, social, stratégique, juridique (Code du travail, loi 65-99).
- **Indicateurs** : effectif moyen $= \frac{\text{début} + \text{fin}}{2}$ ; absentéisme $= \frac{\text{h absence}}{\text{h théoriques}} \times 100$ ; rotation $= \frac{(\text{départs}+\text{arrivées})/2}{\text{effectif moyen}} \times 100$.
`,
    qcm: [
      { q: "La GRH considère le personnel comme :", choix: ["Un simple coût", "Une ressource stratégique", "Un actif financier", "Un fournisseur"], bonne: 1, explication: "Le personnel est source de performance." },
      { q: "Le Code du travail marocain est la loi n° :", choix: ["104-12", "65-99", "17-95", "40-17"], bonne: 1, explication: "Loi n° 65-99, entrée en vigueur en 2004." },
      { q: "Un taux de rotation élevé peut traduire :", choix: ["Un bon climat social", "Une insatisfaction du personnel", "Une hausse des ventes", "Une baisse des coûts"], bonne: 1, explication: "Les départs fréquents signalent souvent un malaise." },
      { q: "Avec 150 salariés en début et 170 en fin d'année, l'effectif moyen est :", choix: ["150", "160", "170", "320"], bonne: 1, explication: "(150 + 170) / 2 = 160." },
      { q: "La négociation avec les syndicats relève :", choix: ["De la gestion administrative", "Des relations sociales", "De la formation", "Du recrutement"], bonne: 1, explication: "C'est le dialogue social." },
    ],
  },

  "motivation-et-styles-de-commandement": {
    cours: md`
## Introduction

Un salarié **motivé** est plus productif, plus impliqué et moins absent. Comprendre ce qui motive les individus et adopter un **style de commandement** adapté sont donc essentiels pour le manager.

> La **motivation** est l'ensemble des forces qui poussent un individu à **agir** et à fournir des **efforts** pour atteindre un objectif.

## I. Les théories de la motivation

### 1. Frederick Taylor : la motivation par le salaire

Pour Taylor (organisation scientifique du travail), l'ouvrier est motivé essentiellement par l'**argent** : il propose un **salaire au rendement** (plus on produit, plus on gagne).

### 2. Elton Mayo : l'école des relations humaines

Les **expériences de Hawthorne** (1924-1932) montrent que la productivité augmente lorsque les ouvriers se sentent **considérés** et écoutés. Les **relations humaines** et l'appartenance au groupe motivent autant que le salaire.

### 3. Abraham Maslow : la pyramide des besoins

L'individu cherche à satisfaire ses besoins dans un **ordre hiérarchique** : un besoin supérieur n'apparaît que lorsque le besoin inférieur est satisfait.

| Niveau | Besoin | Réponse de l'entreprise |
|---|---|---|
| 5 | **Accomplissement** (réalisation de soi) | Responsabilités, autonomie, projets |
| 4 | **Estime** (reconnaissance) | Promotion, félicitations, titre |
| 3 | **Appartenance** (sociaux) | Travail en équipe, bonne ambiance |
| 2 | **Sécurité** | Contrat stable, sécurité au travail, protection sociale |
| 1 | **Physiologiques** | Salaire suffisant, conditions de travail décentes |

### 4. Frederick Herzberg : la théorie des deux facteurs

| Facteurs d'**hygiène** (extrinsèques) | Facteurs **moteurs** (intrinsèques) |
|---|---|
| Salaire, conditions de travail, sécurité, relations avec la hiérarchie, politique de l'entreprise | Accomplissement, reconnaissance, intérêt du travail, responsabilité, promotion |
| Leur absence crée de l'**insatisfaction**, mais leur présence ne motive pas durablement | Ils créent la **satisfaction** et la **motivation** |

### 5. Douglas McGregor : théories X et Y

- **Théorie X** : l'homme n'aime pas le travail, fuit les responsabilités → il faut le **contrôler** et le **contraindre**.
- **Théorie Y** : l'homme aime le travail s'il y trouve un sens, recherche les responsabilités → il faut lui faire **confiance** et le **responsabiliser**.

## II. Les styles de commandement (Rensis Likert)

| Style | Caractéristiques | Relation avec les subordonnés |
|---|---|---|
| **Autoritaire (exploiteur)** | Le chef décide seul, ordres, sanctions, contrôle strict | Peur, méfiance |
| **Paternaliste (autoritaire bienveillant)** | Le chef décide seul mais se montre protecteur ; récompenses | Dépendance |
| **Consultatif** | Le chef consulte ses collaborateurs avant de décider seul | Confiance partielle |
| **Participatif** | Les décisions sont prises en commun ; délégation, travail en équipe | Confiance, implication |

Il n'existe pas de style idéal : le style efficace dépend de la **situation** (urgence, compétence et autonomie des collaborateurs, nature de la tâche). Le style **participatif** favorise en général la motivation et l'implication.
`,
    exercices: md`
### Exercice 1 — Maslow

Associez chaque mesure au besoin satisfait : a) signature d'un CDI ; b) nomination au poste de chef d'équipe ; c) organisation d'une sortie d'équipe ; d) salaire supérieur au SMIG ; e) pilotage d'un projet innovant en autonomie.

<details><summary>Voir le corrigé</summary>

a) **Sécurité** ; b) **Estime** ; c) **Appartenance** ; d) **Physiologiques** ; e) **Accomplissement**.

</details>

### Exercice 2 — Style de commandement

Dans l'entreprise A, le directeur réunit son équipe, écoute les propositions puis décide seul. Dans l'entreprise B, les décisions sont prises en groupe après discussion. Dans l'entreprise C, le chef impose ses décisions et sanctionne toute erreur.

1. Identifiez le style de chaque dirigeant.
2. Lequel favorise le plus la motivation ? Justifiez avec Herzberg ou Maslow.

<details><summary>Voir le corrigé</summary>

1. A : **consultatif** ; B : **participatif** ; C : **autoritaire**.
2. Le style **participatif** : il répond aux besoins d'**estime** et d'**accomplissement** (Maslow) et agit sur les **facteurs moteurs** de Herzberg (responsabilité, reconnaissance, intérêt du travail).

</details>
`,
    resume: md`
## L'essentiel — Motivation et commandement

- **Taylor** : motivation par le salaire (au rendement).
- **Mayo** (Hawthorne) : relations humaines, considération.
- **Maslow** : physiologiques → sécurité → appartenance → estime → accomplissement.
- **Herzberg** : facteurs d'**hygiène** (évitent l'insatisfaction) / facteurs **moteurs** (motivent).
- **McGregor** : théorie **X** (contrôle) / théorie **Y** (confiance).
- **Likert** : autoritaire, paternaliste, consultatif, participatif.
- Pas de style idéal : il dépend de la situation.
`,
    qcm: [
      { q: "Le sommet de la pyramide de Maslow correspond au besoin :", choix: ["De sécurité", "D'estime", "D'accomplissement", "D'appartenance"], bonne: 2, explication: "La réalisation de soi." },
      { q: "Selon Herzberg, le salaire est :", choix: ["Un facteur moteur", "Un facteur d'hygiène", "Sans effet", "Le seul facteur de motivation"], bonne: 1, explication: "Son insuffisance crée de l'insatisfaction mais il ne motive pas durablement." },
      { q: "Les expériences de Hawthorne sont associées à :", choix: ["Taylor", "Elton Mayo", "Maslow", "Fayol"], bonne: 1, explication: "École des relations humaines." },
      { q: "Le chef qui consulte puis décide seul a un style :", choix: ["Autoritaire", "Consultatif", "Participatif", "Paternaliste"], bonne: 1, explication: "Il écoute mais garde la décision." },
      { q: "La théorie Y de McGregor suppose que l'homme :", choix: ["Fuit le travail", "Recherche les responsabilités", "Doit être contraint", "Est motivé uniquement par l'argent"], bonne: 1, explication: "Il faut lui faire confiance." },
    ],
  },

  "la-communication": {
    cours: md`
## Introduction

Une entreprise est un lieu d'échanges permanents d'informations. Une **communication** efficace améliore la coordination, la motivation et le climat social.

> La **communication** est l'action de **transmettre une information** (message) d'un **émetteur** vers un **récepteur**, en vue de produire un effet.

## I. Le processus de communication

| Élément | Rôle |
|---|---|
| **Émetteur** | Celui qui envoie le message |
| **Message** | Contenu de l'information |
| **Code** | Langage utilisé (langue, symboles, images) |
| **Canal** | Support de transmission (oral, écrit, téléphone, e-mail, intranet) |
| **Récepteur** | Celui qui reçoit et interprète le message |
| **Rétroaction (feedback)** | Réponse du récepteur, qui permet de vérifier la compréhension |
| **Bruit** | Tout ce qui perturbe la transmission |

La communication est réussie quand le message **reçu** correspond au message **émis**.

## II. La communication interne

### 1. Les flux de communication

| Flux | Sens | Exemples |
|---|---|---|
| **Descendante** | Direction → personnel | Notes de service, consignes, journal interne |
| **Ascendante** | Personnel → direction | Boîte à idées, rapports, enquêtes de satisfaction, entretiens |
| **Horizontale (latérale)** | Entre services de même niveau | Réunions de coordination, messagerie |

### 2. Formelle et informelle

- **Formelle** : suit les circuits officiels de l'organigramme ;
- **Informelle** : échanges spontanés entre collègues (discussions, rumeurs).

### 3. Les outils

- **Écrits** : note de service, compte rendu, journal d'entreprise, affichage, rapport ;
- **Oraux** : réunion, entretien, séminaire ;
- **Numériques** : messagerie électronique, intranet, visioconférence, réseaux sociaux d'entreprise.

### 4. Les objectifs

Informer, coordonner, motiver, créer un **sentiment d'appartenance** (culture d'entreprise), prévenir les conflits.

## III. La communication externe

Elle s'adresse aux partenaires extérieurs :

- **Communication commerciale** : promouvoir les produits (publicité, promotion) ;
- **Communication institutionnelle** : construire l'**image** de l'entreprise (mécénat, sponsoring, relations presse, rapport RSE) ;
- **Communication financière** : informer les actionnaires et les investisseurs.

## IV. Les obstacles à la communication

- **Obstacles techniques** : mauvais canal, panne, bruit ;
- **Obstacles humains** : différences de langage, de culture, préjugés, émotions, manque d'écoute ;
- **Obstacles organisationnels** : trop de niveaux hiérarchiques, rétention de l'information, surabondance d'informations.

**Remèdes** : choisir le bon canal, adapter le message, encourager le feedback, réduire les niveaux hiérarchiques, former à l'écoute.
`,
    exercices: md`
### Exercice 1 — Flux de communication

a) Le directeur annonce un nouvel horaire par note de service ; b) les ouvriers déposent des suggestions dans une boîte à idées ; c) le service commercial informe le service production d'une grosse commande.

<details><summary>Voir le corrigé</summary>

a) **Descendante** ; b) **Ascendante** ; c) **Horizontale**.

</details>

### Exercice 2 — Analyse d'un échec de communication

Le chef d'atelier envoie par e-mail, un vendredi soir, un changement important des horaires de travail applicable dès le lundi. Beaucoup d'ouvriers, qui n'ont pas d'adresse e-mail professionnelle, arrivent en retard.

1. Identifiez les éléments du schéma de communication.
2. Quels obstacles expliquent l'échec ?
3. Proposez des solutions.

<details><summary>Voir le corrigé</summary>

1. Émetteur : le chef d'atelier ; récepteurs : les ouvriers ; message : nouveaux horaires ; canal : e-mail ; pas de feedback.
2. **Canal inadapté** (les ouvriers n'ont pas d'e-mail), **délai trop court**, **absence de rétroaction**.
3. Afficher la note, réunir les équipes, prévenir à l'avance, vérifier la compréhension (feedback).

</details>
`,
    resume: md`
## L'essentiel — La communication

- **Schéma** : émetteur, message, code, canal, récepteur, feedback, bruit.
- **Interne** : descendante (direction → personnel), ascendante (personnel → direction), horizontale (entre services) ; formelle / informelle.
- **Outils** : note de service, réunion, journal interne, intranet, e-mail.
- **Externe** : commerciale, institutionnelle (image), financière.
- **Obstacles** : techniques, humains, organisationnels ; **remèdes** : bon canal, feedback, écoute.
`,
    qcm: [
      { q: "La boîte à idées est un outil de communication :", choix: ["Descendante", "Ascendante", "Horizontale", "Externe"], bonne: 1, explication: "Elle va du personnel vers la direction." },
      { q: "Le feedback permet :", choix: ["De choisir le canal", "De vérifier la compréhension du message", "D'éviter l'émetteur", "D'augmenter le bruit"], bonne: 1, explication: "C'est la réponse du récepteur." },
      { q: "Le mécénat relève de la communication :", choix: ["Commerciale", "Institutionnelle", "Interne", "Financière"], bonne: 1, explication: "Il vise à améliorer l'image de l'entreprise." },
      { q: "Une note de service est un outil :", choix: ["Oral", "Écrit", "Informel", "Externe"], bonne: 1, explication: "Document écrit de communication descendante." },
      { q: "Trop de niveaux hiérarchiques est un obstacle :", choix: ["Technique", "Humain", "Organisationnel", "Commercial"], bonne: 2, explication: "L'information se déforme en passant par de nombreux intermédiaires." },
    ],
  },

  "le-recrutement": {
    cours: md`
## Introduction

Recruter, c'est **pourvoir un poste** en choisissant le candidat qui correspond le mieux aux besoins de l'entreprise. Une erreur de recrutement coûte cher (coûts, temps perdu, démotivation).

> Le **recrutement** est l'ensemble des opérations qui permettent de **rechercher**, **sélectionner** et **intégrer** un nouveau salarié.

## I. Les étapes du recrutement

### 1. La définition du besoin

- Vérifier que le besoin est réel (départ, croissance, nouveau poste) ;
- Rédiger la **fiche de poste** (missions, tâches, responsabilités, conditions de travail) ;
- Définir le **profil du candidat** (diplômes, expérience, compétences, qualités personnelles).

### 2. La recherche des candidats

| Recrutement **interne** | Recrutement **externe** |
|---|---|
| Promotion, mutation d'un salarié déjà présent | Candidats extérieurs à l'entreprise |
| **+** moins coûteux, rapide, motivant, candidat connu | **+** apport de compétences et d'idées nouvelles, choix plus large |
| **−** choix limité, peu d'idées nouvelles, poste à remplacer | **−** coûteux, long, risque d'erreur, intégration nécessaire |

**Moyens du recrutement externe** : annonces (presse, sites d'emploi, réseaux sociaux professionnels), **ANAPEC**, cabinets de recrutement, candidatures spontanées, écoles et universités, salons de l'emploi.

### 3. La présélection

Tri des candidatures à partir du **CV** et de la **lettre de motivation** : on élimine les candidats qui ne correspondent pas au profil.

### 4. La sélection

- **Tests** : de connaissances, psychotechniques, de personnalité, mises en situation ;
- **Entretiens** : individuels ou collectifs, avec le service RH et le responsable opérationnel ;
- Vérification des références.

### 5. La décision et l'embauche

Choix du candidat, proposition d'**embauche**, signature du **contrat de travail** (CDI ou CDD).

### 6. L'intégration (accueil)

- **Accueil** : présentation de l'entreprise, des collègues, du poste ; remise d'un **livret d'accueil** ;
- **Période d'essai** : elle permet à l'employeur d'évaluer le salarié et au salarié d'évaluer le poste. Au Maroc, le Code du travail fixe sa durée maximale pour un CDI à **3 mois** pour les cadres, **1 mois et demi** pour les employés et **15 jours** pour les ouvriers (renouvelable une fois).

## II. Le coût du recrutement

$$\text{Coût du recrutement} = \text{coûts de recherche} + \text{coûts de sélection} + \text{coûts d'intégration}$$

Exemples : annonces, honoraires du cabinet, temps passé par les recruteurs, tests, formation d'intégration.

$$\text{Coût par recrutement} = \frac{\text{coût total}}{\text{nombre de personnes recrutées}}$$
`,
    exercices: md`
### Exercice 1 — Interne ou externe ?

Une entreprise doit remplacer son chef comptable qui part à la retraite. Un comptable de l'entreprise, présent depuis 8 ans, est intéressé.

1. Quels sont les avantages d'un recrutement interne ici ?
2. Quels en sont les risques ?

<details><summary>Voir le corrigé</summary>

1. Candidat **connu** et déjà intégré, connaît les procédures ; recrutement **rapide et peu coûteux** ; **motivation** du personnel (perspective de promotion).
2. Il faut **remplacer** le comptable promu ; il peut manquer de compétences managériales ; peu d'idées nouvelles ; risque de jalousie chez les collègues.

</details>

### Exercice 2 — Coût du recrutement (données fictives)

Pour recruter 4 commerciaux : annonces 6 000 DH ; cabinet 24 000 DH ; tests 3 200 DH ; temps des recruteurs 8 800 DH ; formation d'intégration 10 000 DH.

1. Calculez le coût total et le coût par recrutement.
2. Proposez un moyen de réduire ce coût.

<details><summary>Voir le corrigé</summary>

1. Total $= 6\,000 + 24\,000 + 3\,200 + 8\,800 + 10\,000 = 52\,000$ DH ; par recrutement $= \frac{52\,000}{4} = 13\,000$ DH.
2. Passer par l'**ANAPEC** ou les sites d'emploi plutôt que par un cabinet ; privilégier le recrutement interne ou la cooptation.

</details>
`,
    resume: md`
## L'essentiel — Le recrutement

- **Étapes** : définition du besoin (fiche de poste, profil) → recherche → présélection (CV, lettre) → sélection (tests, entretiens) → embauche → intégration.
- **Interne** : rapide, peu coûteux, motivant ; choix limité.
- **Externe** : sang neuf, choix large ; coûteux, long, risqué.
- **Moyens** : annonces, ANAPEC, cabinets, candidatures spontanées, écoles.
- **Période d'essai (CDI)** : 3 mois cadres, 1,5 mois employés, 15 jours ouvriers.
- **Coût par recrutement** $= \frac{\text{coût total}}{\text{nombre de recrutés}}$.
`,
    qcm: [
      { q: "La fiche de poste décrit :", choix: ["Le candidat idéal", "Les missions et tâches du poste", "Le salaire de l'entreprise", "Le règlement intérieur"], bonne: 1, explication: "Le profil décrit le candidat, la fiche décrit le poste." },
      { q: "Un avantage du recrutement externe est :", choix: ["Son faible coût", "L'apport de compétences nouvelles", "Sa rapidité", "La motivation interne"], bonne: 1, explication: "De nouvelles idées entrent dans l'entreprise." },
      { q: "L'ANAPEC est :", choix: ["Un cabinet privé", "L'agence publique de promotion de l'emploi", "Un syndicat", "Une banque"], bonne: 1, explication: "Agence nationale de promotion de l'emploi et des compétences." },
      { q: "La présélection se fait principalement à partir :", choix: ["Des entretiens", "Du CV et de la lettre de motivation", "De la période d'essai", "Du contrat"], bonne: 1, explication: "C'est le tri des dossiers." },
      { q: "La période d'essai maximale d'un ouvrier en CDI est de :", choix: ["15 jours", "1 mois", "3 mois", "6 mois"], bonne: 0, explication: "Selon le Code du travail (article 14)." },
    ],
  },

  "la-formation": {
    cours: md`
## Introduction

Les métiers évoluent vite (digitalisation, nouvelles technologies). Pour rester compétitive, l'entreprise doit **développer les compétences** de ses salariés : c'est le rôle de la **formation**.

> La **formation** est l'ensemble des actions qui permettent aux salariés d'**acquérir** ou d'**améliorer** des connaissances et des compétences.

## I. Les types de formation

| Type | Définition |
|---|---|
| **Formation initiale** | Avant l'entrée dans la vie active (école, université, OFPPT) |
| **Formation continue** | Pendant la vie professionnelle |
| **Formation interne** | Organisée par l'entreprise avec ses propres formateurs |
| **Formation externe** | Confiée à un organisme spécialisé |
| **Formation sur le tas** | Apprentissage au poste de travail, auprès d'un tuteur |
| **Formation qualifiante** | Aboutit à un diplôme ou une certification |

## II. Les objectifs de la formation

- **Pour l'entreprise** : adapter les compétences aux changements, améliorer la productivité et la qualité, préparer les promotions, renforcer la motivation et la fidélité ;
- **Pour le salarié** : développer ses compétences, évoluer dans sa carrière, garder son employabilité.

## III. Le plan de formation

Le **plan de formation** est le document qui prévoit les actions de formation de l'année. Étapes :

1. **Identifier les besoins** : écart entre les compétences **requises** et les compétences **détenues** (entretiens annuels, projets de l'entreprise) ;
2. **Définir les objectifs** de formation ;
3. **Choisir** les actions, les organismes, le calendrier et les participants ;
4. **Établir le budget** ;
5. **Réaliser** les formations ;
6. **Évaluer** les résultats.

### L'évaluation de la formation

On évalue à plusieurs niveaux : la **satisfaction** des participants, les **connaissances acquises**, le **changement de comportement** au travail, les **résultats** pour l'entreprise.

## IV. Le financement de la formation au Maroc

- Les employeurs paient la **taxe de formation professionnelle (TFP)**, fixée à **1,6 %** de la masse salariale brute et collectée par la **CNSS** au profit de l'**OFPPT** ;
- Les **contrats spéciaux de formation (CSF)** permettent aux entreprises de se faire **rembourser** une partie importante du coût de leurs formations continues planifiées.

## V. Les indicateurs de la formation

$$\text{Taux de participation financière} = \frac{\text{dépenses de formation}}{\text{masse salariale}} \times 100$$

$$\text{Taux d'accès à la formation} = \frac{\text{nombre de salariés formés}}{\text{effectif}} \times 100$$

$$\text{Coût de formation par salarié formé} = \frac{\text{dépenses de formation}}{\text{nombre de salariés formés}}$$
`,
    exercices: md`
### Exercice 1 — Indicateurs (données fictives)

Masse salariale : 12 500 000 DH ; dépenses de formation : 375 000 DH ; effectif : 250 ; salariés formés : 90.

1. Calculez le taux de participation financière et le taux d'accès.
2. Calculez le coût moyen par salarié formé.
3. Calculez la TFP due par l'entreprise.

<details><summary>Voir le corrigé</summary>

1. Participation $= \frac{375\,000}{12\,500\,000} \times 100 = 3\%$ ; accès $= \frac{90}{250} \times 100 = 36\%$.
2. $\frac{375\,000}{90} \approx 4\,166{,}67$ DH.
3. $TFP = 12\,500\,000 \times 1{,}6\% = 200\,000$ DH.

</details>

### Exercice 2 — Plan de formation

Une entreprise va installer un nouveau logiciel de gestion commerciale dans six mois. Décrivez la démarche pour former les commerciaux.

<details><summary>Voir le corrigé</summary>

1. **Besoins** : identifier les commerciaux concernés et évaluer leur niveau en informatique.
2. **Objectifs** : maîtriser le logiciel avant son lancement.
3. **Choix** : formation externe par l'éditeur du logiciel ou formation interne par un référent, calendrier sur les 5 mois.
4. **Budget** : coût des sessions, remboursement possible via les CSF.
5. **Réalisation** puis **évaluation** : tests de maîtrise, suivi de l'utilisation réelle du logiciel.

</details>
`,
    resume: md`
## L'essentiel — La formation

- **Types** : initiale / continue ; interne / externe ; sur le tas ; qualifiante.
- **Objectifs** : adapter les compétences, productivité, promotion, motivation, employabilité.
- **Plan de formation** : besoins (écart requis / détenu) → objectifs → choix → budget → réalisation → évaluation.
- **Maroc** : **TFP 1,6 %** de la masse salariale (collectée par la CNSS pour l'OFPPT) ; **CSF** (remboursement des formations).
- **Indicateurs** : participation financière $= \frac{\text{dépenses}}{\text{masse salariale}} \times 100$ ; accès $= \frac{\text{formés}}{\text{effectif}} \times 100$.
`,
    qcm: [
      { q: "La formation continue a lieu :", choix: ["Avant l'entrée dans la vie active", "Pendant la vie professionnelle", "Seulement à l'université", "Après la retraite"], bonne: 1, explication: "Elle concerne les salariés en activité." },
      { q: "Le taux de la TFP au Maroc est de :", choix: ["0,5 %", "1,6 %", "4,48 %", "6,4 %"], bonne: 1, explication: "1,6 % de la masse salariale, à la charge de l'employeur." },
      { q: "Le besoin de formation correspond à l'écart entre :", choix: ["Le salaire et la productivité", "Les compétences requises et les compétences détenues", "L'effectif et la masse salariale", "Le CA et les coûts"], bonne: 1, explication: "C'est le point de départ du plan de formation." },
      { q: "Les CSF permettent :", choix: ["De recruter", "Le remboursement d'une partie des frais de formation", "De licencier", "De payer les salaires"], bonne: 1, explication: "Contrats spéciaux de formation gérés au profit des entreprises." },
      { q: "60 salariés formés sur 240 donnent un taux d'accès de :", choix: ["20 %", "25 %", "40 %", "60 %"], bonne: 1, explication: "60 / 240 × 100 = 25 %." },
    ],
  },

  "la-remuneration": {
    cours: md`
## Introduction

La **rémunération** est la contrepartie du travail fourni par le salarié. Pour l'entreprise, elle représente un **coût** important ; pour le salarié, c'est un **revenu** et un facteur de motivation.

## I. Les composantes de la rémunération

| Composante | Contenu |
|---|---|
| **Salaire de base** | Fixé par le contrat selon le poste et la qualification (au moins égal au **SMIG** ou au **SMAG** dans l'agriculture) |
| **Heures supplémentaires** | Heures au-delà de la durée légale, majorées |
| **Primes et indemnités** | Ancienneté, rendement, responsabilité, transport, panier… |
| **Avantages en nature** | Logement, voiture de fonction, repas |
| **Intéressement / participation** | Part des résultats de l'entreprise |

## II. Du salaire brut au salaire net

$$\text{Salaire brut} = \text{salaire de base} + \text{heures supplémentaires} + \text{primes et indemnités imposables}$$

$$\text{Salaire net} = \text{salaire brut} - \text{retenues salariales}$$

Les **retenues** comprennent les **cotisations sociales** salariales (**CNSS** et **AMO**) et l'**impôt sur le revenu (IR)** retenu à la source.

Pour l'entreprise, le **coût du travail** est supérieur au salaire brut car elle paie aussi des **cotisations patronales** (CNSS, AMO, taxe de formation professionnelle).

$$\text{Masse salariale} = \sum \text{salaires bruts}$$

## III. Les modes de rémunération

| Mode | Principe | Avantages | Inconvénients |
|---|---|---|---|
| **Au temps** | Salaire fixe selon le temps de travail (heure, mois) | Sécurité pour le salarié, simplicité | Peu incitatif |
| **Au rendement** | Selon la quantité produite ou les ventes (commission) | Très incitatif | Stress, risque sur la qualité, revenu instable |
| **Mixte** | Fixe + variable (primes, commissions) | Sécurité et motivation | Plus complexe à gérer |

## IV. La politique de rémunération

Elle doit respecter trois principes d'**équité** :

- **Équité interne** : des salaires cohérents entre les postes de l'entreprise (à travail égal, salaire égal) ;
- **Équité externe** (compétitivité) : des salaires comparables à ceux du marché, pour attirer et retenir les talents ;
- **Équité individuelle** : reconnaître la performance et les compétences de chacun.

Elle doit aussi respecter la **législation** : salaire minimum légal, égalité hommes-femmes, paiement régulier. Elle combine souvent augmentations **générales** (pour tous) et **individualisées** (au mérite).

## V. Les indicateurs

$$\text{Salaire moyen} = \frac{\text{masse salariale}}{\text{effectif moyen}}$$

$$\text{Poids de la masse salariale} = \frac{\text{masse salariale}}{\text{chiffre d'affaires}} \times 100 \quad \text{ou} \quad \frac{\text{frais de personnel}}{\text{valeur ajoutée}} \times 100$$
`,
    exercices: md`
### Exercice 1 — Salaire brut (données fictives)

Un technicien a un salaire de base de 7 200 DH, une prime d'ancienneté de 5 % du salaire de base, une prime de rendement de 600 DH et 10 heures supplémentaires payées 56 DH l'heure.

1. Calculez le salaire brut.
2. Les retenues salariales (CNSS, AMO, IR) s'élèvent à 1 110 DH. Calculez le salaire net.

<details><summary>Voir le corrigé</summary>

1. Prime d'ancienneté $= 7\,200 \times 5\% = 360$ DH ; heures supplémentaires $= 10 \times 56 = 560$ DH.
   Salaire brut $= 7\,200 + 360 + 600 + 560 = 8\,720$ DH.
2. Salaire net $= 8\,720 - 1\,110 = 7\,610$ DH.

</details>

### Exercice 2 — Mode de rémunération

Une entreprise commerciale hésite entre payer ses vendeurs au temps ou à la commission.

1. Présentez les avantages et les limites de chaque mode.
2. Quelle solution proposez-vous ?

<details><summary>Voir le corrigé</summary>

1. **Au temps** : sécurité, simplicité, mais faible incitation à vendre. **À la commission** : forte motivation, mais revenu instable, stress et risque de ventes agressives.
2. Un **système mixte** : un fixe (sécurité) complété par une commission sur les ventes (motivation).

</details>
`,
    resume: md`
## L'essentiel — La rémunération

- **Composantes** : salaire de base (≥ SMIG/SMAG), heures supplémentaires, primes, avantages en nature, intéressement.
- **Brut** = base + heures sup. + primes ; **net** = brut − retenues (CNSS, AMO, IR).
- **Coût du travail** = brut + cotisations patronales.
- **Modes** : au temps (sécurité), au rendement (incitatif), mixte.
- **Équité** : interne, externe, individuelle ; respect de la loi.
- **Salaire moyen** $= \frac{\text{masse salariale}}{\text{effectif moyen}}$.
`,
    qcm: [
      { q: "Le salaire net est égal au :", choix: ["Salaire brut + retenues", "Salaire brut − retenues salariales", "Salaire de base seul", "Coût du travail"], bonne: 1, explication: "On déduit CNSS, AMO et IR du brut." },
      { q: "Le SMAG concerne :", choix: ["L'industrie", "L'agriculture", "Les services", "La fonction publique"], bonne: 1, explication: "Salaire minimum agricole garanti." },
      { q: "L'équité externe signifie des salaires :", choix: ["Identiques pour tous", "Comparables à ceux du marché", "Fixés par le salarié", "Liés à l'ancienneté"], bonne: 1, explication: "Pour attirer et fidéliser les compétences." },
      { q: "La rémunération à la commission est un mode :", choix: ["Au temps", "Au rendement", "Fixe", "En nature"], bonne: 1, explication: "Elle dépend des ventes réalisées." },
      { q: "Une masse salariale de 3 600 000 DH pour 120 salariés donne un salaire moyen annuel de :", choix: ["3 000 DH", "30 000 DH", "300 000 DH", "36 000 DH"], bonne: 1, explication: "3 600 000 / 120 = 30 000 DH." },
    ],
  },

  "gestion-des-carrieres-et-plan-social": {
    cours: md`
## Introduction

L'entreprise doit **anticiper** l'évolution de ses besoins en personnel et accompagner le parcours de ses salariés. Mais en cas de difficultés, elle peut aussi être amenée à **réduire ses effectifs** : c'est le **plan social**.

## I. La gestion des carrières

> La **carrière** est la succession des postes occupés par un salarié au cours de sa vie professionnelle. La **gestion des carrières** consiste à organiser ces parcours en fonction des besoins de l'entreprise et des aspirations des salariés.

### 1. La gestion prévisionnelle des emplois et des compétences (GPEC)

Elle compare :

- les **besoins futurs** de l'entreprise en emplois et en compétences (selon sa stratégie) ;
- les **ressources disponibles** (effectifs, départs à la retraite, compétences actuelles).

L'écart est comblé par le **recrutement**, la **formation**, la **mobilité** ou, en cas d'excédent, par des **mesures d'ajustement**.

### 2. Les outils

- **Entretien annuel d'évaluation** : bilan des résultats, fixation d'objectifs, besoins de formation, souhaits d'évolution ;
- **Référentiel des emplois et des compétences** ;
- **Plans de succession** pour les postes clés ;
- **Bilan de compétences**.

### 3. La mobilité

| Mobilité | Définition |
|---|---|
| **Verticale (promotion)** | Accès à un poste de niveau supérieur |
| **Horizontale** | Changement de poste au même niveau |
| **Géographique** | Changement de lieu de travail |

## II. Le plan social

> Le **plan social** est l'ensemble des **mesures** prises par une entreprise qui doit **réduire ses effectifs** pour des raisons économiques, afin d'**éviter** ou de **limiter** les licenciements et d'en **atténuer les conséquences**.

### 1. Les causes

Motifs **technologiques** (automatisation), **structurels** (réorganisation, fusion) ou **économiques** (baisse d'activité, difficultés financières).

### 2. Les mesures possibles

- **Mesures internes** : réduction du temps de travail, suppression des heures supplémentaires, reclassement interne, mutations, formation à de nouveaux métiers ;
- **Départs** : départs volontaires avec indemnités, préretraites, non-remplacement des départs à la retraite ;
- **Accompagnement** : aide au reclassement externe, aide à la création d'entreprise, indemnités.

### 3. La procédure au Maroc (Code du travail, articles 66 à 71)

Pour les entreprises employant habituellement **10 salariés ou plus** :

1. **Informer et consulter** les délégués des salariés et, le cas échéant, les représentants syndicaux, au moins **un mois** avant le licenciement ;
2. Établir un **procès-verbal** de concertation adressé au délégué provincial chargé du travail ;
3. Obtenir l'**autorisation du gouverneur** de la préfecture ou de la province, qui statue dans un délai maximum de **deux mois** ;
4. Respecter les **critères** d'ordre des licenciements (ancienneté, qualification, charges de famille) et verser les **indemnités** dues (préavis, licenciement).

Depuis 2014, l'**indemnité pour perte d'emploi (IPE)**, versée par la CNSS, aide les salariés ayant perdu leur emploi de façon involontaire.

## III. Les enjeux

Le plan social a des conséquences **humaines** (perte de revenu, démotivation des salariés restants) et d'**image**. Une bonne **GPEC** permet de l'éviter en anticipant les évolutions.
`,
    exercices: md`
### Exercice 1 — Mobilité

a) Un comptable devient chef comptable ; b) un vendeur de l'agence de Rabat est muté à l'agence d'Agadir au même poste ; c) une secrétaire devient assistante du service achats au même niveau.

<details><summary>Voir le corrigé</summary>

a) **Verticale (promotion)** ; b) **Géographique** ; c) **Horizontale**.

</details>

### Exercice 2 — Plan social

Une entreprise textile de 150 salariés perd son principal client et doit supprimer 30 postes.

1. Proposez des mesures pour limiter les licenciements.
2. Quelle procédure doit-elle respecter au Maroc ?

<details><summary>Voir le corrigé</summary>

1. Réduire le temps de travail, supprimer les heures supplémentaires, reclasser des salariés dans d'autres ateliers après formation, proposer des départs volontaires et des préretraites, ne pas remplacer les départs à la retraite.
2. Entreprise de plus de 10 salariés : **consulter** les délégués au moins un mois à l'avance, établir un **procès-verbal**, demander l'**autorisation du gouverneur** (réponse sous deux mois), respecter les critères de licenciement et verser les indemnités.

</details>
`,
    resume: md`
## L'essentiel — Carrières et plan social

- **Gestion des carrières** : organiser les parcours selon les besoins et les aspirations.
- **GPEC** : besoins futurs vs ressources disponibles → recrutement, formation, mobilité, ajustement.
- **Outils** : entretien annuel, référentiel des compétences, plans de succession, bilan de compétences.
- **Mobilité** : verticale (promotion), horizontale, géographique.
- **Plan social** : mesures pour éviter/limiter les licenciements (temps de travail, reclassement, départs volontaires, préretraites, accompagnement).
- **Procédure (art. 66 à 71)** : entreprises ≥ 10 salariés, consultation 1 mois avant, PV, **autorisation du gouverneur** (≤ 2 mois).
- **IPE** (CNSS) pour les salariés ayant perdu leur emploi.
`,
    qcm: [
      { q: "La GPEC consiste à :", choix: ["Licencier le personnel", "Anticiper les besoins en emplois et compétences", "Calculer les salaires", "Recruter uniquement en externe"], bonne: 1, explication: "Gestion prévisionnelle des emplois et des compétences." },
      { q: "Une promotion est une mobilité :", choix: ["Horizontale", "Verticale", "Géographique", "Externe"], bonne: 1, explication: "Accès à un poste de niveau supérieur." },
      { q: "Au Maroc, le licenciement pour motif économique dans une entreprise de 10 salariés ou plus nécessite :", choix: ["L'accord du syndicat", "L'autorisation du gouverneur", "L'accord de la CNSS", "Aucune formalité"], bonne: 1, explication: "Article 67 du Code du travail." },
      { q: "Le préavis de consultation des délégués est d'au moins :", choix: ["8 jours", "15 jours", "1 mois", "6 mois"], bonne: 2, explication: "Article 66 du Code du travail." },
      { q: "L'IPE est versée par :", choix: ["L'employeur", "La CNSS", "L'ANAPEC", "Le gouverneur"], bonne: 1, explication: "Indemnité pour perte d'emploi." },
    ],
  },
};
