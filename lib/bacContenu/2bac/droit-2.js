// Droit — 2ème Bac, unité 2 : éléments du droit social (Code du travail, loi n° 65-99).
const md = String.raw;

export default {
  "le-contrat-de-travail": {
    cours: md`
## Introduction

Les relations entre un employeur et un salarié sont encadrées par le **Code du travail** (loi n° **65-99**, entré en vigueur en **2004**). Elles reposent sur un **contrat de travail**.

## I. Définition et éléments

> Le **contrat de travail** est une convention par laquelle une personne (le **salarié**) s'engage à fournir un **travail** au profit et **sous la direction** d'une autre personne (l'**employeur**), moyennant une **rémunération**.

Trois éléments caractérisent le contrat de travail :

1. **La prestation de travail** ;
2. **La rémunération** (salaire, au moins égal au salaire minimum légal) ;
3. **Le lien de subordination** : le salarié travaille sous l'autorité de l'employeur qui lui donne des ordres, contrôle et peut sanctionner. C'est l'élément **essentiel** qui distingue le contrat de travail d'autres contrats (entreprise, prestation de services).

## II. Les conditions de validité

- **Consentement** libre et éclairé des deux parties (sans erreur, dol ni violence) ;
- **Capacité** : l'âge minimum d'emploi est de **15 ans révolus** ;
- **Objet licite** : le travail ne doit pas être contraire à la loi ou aux bonnes mœurs ;
- **Cause licite**.

La **forme** est libre : le contrat peut être écrit ou verbal ; lorsqu'il est écrit, il est établi en deux exemplaires signés.

## III. Les types de contrats

### 1. Le contrat à durée indéterminée (CDI)

C'est le contrat **de droit commun** : il ne prévoit pas de date de fin.

### 2. Le contrat à durée déterminée (CDD)

Il ne peut être conclu que dans des **cas limités** :

- **remplacement** d'un salarié absent (sauf grève) ;
- **accroissement temporaire** de l'activité ;
- **travail saisonnier**.

Il peut aussi être conclu lors de l'ouverture d'une nouvelle entreprise ou d'un nouveau produit, pour une durée maximale d'**un an renouvelable une fois**. Un CDD conclu en dehors des cas prévus, ou dont les limites sont dépassées, devient un **CDI**.

### 3. Les autres formes

Contrat de travail temporaire (via une agence d'emploi privée), contrat d'insertion (programme Idmaj de l'ANAPEC), contrat d'apprentissage.

## IV. La période d'essai

C'est une période pendant laquelle chaque partie peut **rompre** le contrat **sans préavis ni indemnité** (sauf si l'essai a duré au moins une semaine : un préavis court est alors dû).

| CDI | Durée maximale |
|---|---|
| Cadres et assimilés | 3 mois |
| Employés | 1 mois et demi |
| Ouvriers | 15 jours |

Elle peut être **renouvelée une fois**. Pour un CDD : un jour par semaine de travail, dans la limite de 2 semaines (contrat de moins de 6 mois) ou d'un mois (plus de 6 mois).

## V. Les obligations des parties

| Employeur | Salarié |
|---|---|
| Fournir le travail convenu | Exécuter personnellement le travail |
| Payer le salaire | Respecter les ordres et le règlement intérieur |
| Respecter la santé et la sécurité | Obligation de loyauté et de discrétion (secret professionnel) |
| Déclarer le salarié à la CNSS | Prendre soin du matériel |
| Respecter la dignité du salarié, ne pas discriminer | |
`,
    exercices: md`
### Exercice 1 — Qualification

Karim est payé à la tâche par une société pour réparer des ordinateurs à domicile ; il fixe librement ses horaires, choisit ses clients et utilise son propre matériel. Samira travaille dans les bureaux de la même société, selon les horaires fixés par son chef, qui contrôle son travail.

Qui est lié par un contrat de travail ? Justifiez.

<details><summary>Voir le corrigé</summary>

**Samira** : elle fournit un travail, perçoit une rémunération et surtout se trouve dans un **lien de subordination** (horaires imposés, contrôle). **Karim** travaille de façon **indépendante** : pas de subordination, il s'agit d'un contrat de prestation de services.

</details>

### Exercice 2 — CDD

Une entreprise conclut un CDD avec un ouvrier pour « faire face à ses besoins permanents » et le renouvelle trois fois. Que dit la loi ?

<details><summary>Voir le corrigé</summary>

Le CDD n'est autorisé que dans les cas prévus par la loi (remplacement, accroissement temporaire, travail saisonnier, ou nouvelle activité pour un an renouvelable une fois). Un besoin **permanent** et des renouvellements multiples ne respectent pas ces règles : le contrat est **requalifié en CDI**.

</details>
`,
    resume: md`
## L'essentiel — Le contrat de travail

- **Code du travail** : loi n° 65-99 (2004).
- **Éléments** : prestation de travail, rémunération, **lien de subordination** (essentiel).
- **Validité** : consentement, capacité (âge minimum **15 ans**), objet et cause licites ; forme libre.
- **CDI** : droit commun ; **CDD** : cas limités (remplacement, accroissement temporaire, saisonnier) ; sinon requalifié en CDI.
- **Période d'essai (CDI)** : 3 mois (cadres), 1,5 mois (employés), 15 jours (ouvriers), renouvelable une fois.
- **Obligations** : employeur (travail, salaire, sécurité, CNSS) ; salarié (exécution, obéissance, loyauté).
`,
    qcm: [
      { q: "L'élément essentiel du contrat de travail est :", choix: ["Le contrat écrit", "Le lien de subordination", "Le lieu de travail", "La durée"], bonne: 1, explication: "Il le distingue du travail indépendant." },
      { q: "L'âge minimum d'emploi au Maroc est de :", choix: ["12 ans", "15 ans", "16 ans", "18 ans"], bonne: 1, explication: "15 ans révolus selon le Code du travail." },
      { q: "Le contrat de droit commun est :", choix: ["Le CDD", "Le CDI", "L'intérim", "L'apprentissage"], bonne: 1, explication: "Sans date de fin." },
      { q: "La période d'essai maximale d'un cadre en CDI est de :", choix: ["15 jours", "1 mois et demi", "3 mois", "6 mois"], bonne: 2, explication: "Renouvelable une fois." },
      { q: "Un CDD conclu hors des cas prévus par la loi :", choix: ["Est nul sans conséquence", "Devient un CDI", "Est prolongé automatiquement d'un an", "Doit être payé double"], bonne: 1, explication: "Il est requalifié en contrat à durée indéterminée." },
    ],
  },

  "les-conditions-de-travail": {
    cours: md`
## Introduction

Le Code du travail fixe des règles **d'ordre public** pour protéger la santé, la sécurité et la dignité des salariés : durée du travail, repos, congés, salaire minimum, hygiène et sécurité.

## I. La durée du travail

- **Activités non agricoles** : **2 288 heures par an**, soit **44 heures par semaine** ;
- **Activités agricoles** : **2 496 heures par an** ;
- Durée journalière : **10 heures maximum** en principe.

### Les heures supplémentaires

Heures effectuées au-delà de la durée normale. Elles sont **majorées** :

| Moment | Jours ouvrables | Jour de repos hebdomadaire |
|---|---|---|
| Entre 6 h et 21 h | **+25 %** | **+50 %** |
| Entre 21 h et 6 h | **+50 %** | **+100 %** |

(Pour les activités non agricoles.)

## II. Le repos et les congés

- **Repos hebdomadaire** : au moins **24 heures consécutives** (en principe le vendredi, le samedi ou le dimanche, ou le jour du souk) ;
- **Jours fériés** payés ;
- **Congé annuel payé** : **1,5 jour ouvrable par mois** de service (soit 18 jours par an), **2 jours** par mois pour les moins de 18 ans ; il augmente de **1,5 jour** par période de **5 ans** d'ancienneté (dans une limite de 30 jours) ;
- **Congés pour événements familiaux** : mariage du salarié (4 jours), naissance (3 jours pour le père), décès d'un proche…
- **Congé de maternité** : **14 semaines**, indemnisé par la CNSS.

## III. Le salaire

- Le salaire ne peut être **inférieur au salaire minimum légal** : **SMIG** (activités non agricoles, fixé à l'heure) et **SMAG** (activités agricoles, fixé à la journée), fixés par **décret** et revalorisés régulièrement à l'issue du dialogue social ;
- **Égalité** de salaire entre hommes et femmes pour un travail de valeur égale ;
- Paiement en monnaie, à intervalles réguliers (au moins deux fois par mois pour les ouvriers, une fois par mois pour les employés) ;
- Remise d'un **bulletin de paie**.

## IV. L'hygiène et la sécurité

L'employeur doit :

- assurer la **propreté**, l'éclairage, l'aération des locaux ;
- fournir les **équipements de protection** ;
- mettre en place un **service médical du travail** (entreprises d'au moins 50 salariés ou exposées à des risques particuliers) ;
- créer un **comité de sécurité et d'hygiène** dans les entreprises d'au moins **50 salariés** ;
- **assurer** ses salariés contre les **accidents du travail** et les maladies professionnelles (loi n° 18-12).

## V. Le contrôle : l'inspection du travail

Les **inspecteurs du travail** veillent à l'application de la législation : visites, conseils, procès-verbaux d'infraction et **conciliation** des conflits.

## VI. La protection de catégories particulières

- **Mineurs** : interdiction de travail de nuit et des travaux dangereux pour les moins de 18 ans ;
- **Femmes** : protection de la maternité, interdiction de licenciement pendant la grossesse et le congé de maternité ;
- **Personnes en situation de handicap** : aménagement des postes.
`,
    exercices: md`
### Exercice 1 — Heures supplémentaires (données fictives)

Un ouvrier payé 20 DH de l'heure a effectué dans la semaine 6 heures supplémentaires un jour ouvrable entre 17 h et 20 h, et 4 heures le jour de repos entre 22 h et 2 h.

Calculez le montant des heures supplémentaires.

<details><summary>Voir le corrigé</summary>

- 6 h en jour ouvrable, de jour : $6 \times 20 \times 1{,}25 = 150$ DH ;
- 4 h le jour de repos, de nuit : $4 \times 20 \times 2 = 160$ DH ;
- Total $= 310$ DH.

</details>

### Exercice 2 — Congé annuel

Un employé de 30 ans a travaillé 12 mois ; il a 11 ans d'ancienneté. Calculez la durée de son congé annuel.

<details><summary>Voir le corrigé</summary>

Base : $12 \times 1{,}5 = 18$ jours ouvrables. Ancienneté : 11 ans = **2 périodes complètes de 5 ans** → $2 \times 1{,}5 = 3$ jours. Total : **21 jours ouvrables**.

</details>
`,
    resume: md`
## L'essentiel — Conditions de travail

- **Durée légale** : 2 288 h/an (44 h/semaine) hors agriculture ; 2 496 h/an en agriculture.
- **Heures sup.** : +25 % (jour ouvrable, 6 h-21 h) ; +50 % (nuit) ; jour de repos : +50 % / +100 %.
- **Repos hebdomadaire** : 24 h consécutives au moins.
- **Congé annuel** : 1,5 jour ouvrable/mois (2 jours avant 18 ans) + 1,5 jour par 5 ans d'ancienneté (max 30 jours).
- **Maternité** : 14 semaines.
- **Salaire** ≥ SMIG / SMAG (fixés par décret) ; égalité hommes-femmes.
- **Sécurité** : comité de sécurité et d'hygiène (≥ 50 salariés), médecine du travail, assurance accidents du travail (loi 18-12).
- **Inspection du travail** : contrôle et conciliation.
`,
    qcm: [
      { q: "La durée légale annuelle du travail hors agriculture est de :", choix: ["2 080 h", "2 288 h", "2 496 h", "1 800 h"], bonne: 1, explication: "Soit 44 heures par semaine." },
      { q: "Une heure supplémentaire de jour, un jour ouvrable, est majorée de :", choix: ["10 %", "25 %", "50 %", "100 %"], bonne: 1, explication: "Entre 6 h et 21 h." },
      { q: "Le congé annuel de base est de :", choix: ["1 jour par mois", "1,5 jour ouvrable par mois", "2,5 jours par mois", "30 jours par an"], bonne: 1, explication: "18 jours ouvrables pour 12 mois." },
      { q: "Le congé de maternité dure :", choix: ["8 semaines", "10 semaines", "14 semaines", "6 mois"], bonne: 2, explication: "14 semaines indemnisées par la CNSS." },
      { q: "Le comité de sécurité et d'hygiène est obligatoire à partir de :", choix: ["10 salariés", "50 salariés", "100 salariés", "500 salariés"], bonne: 1, explication: "Dans les entreprises d'au moins 50 salariés." },
    ],
  },

  "la-suspension-et-la-rupture-du-contrat-de-travail": {
    cours: md`
## Introduction

Le contrat de travail peut être **interrompu temporairement** (suspension) ou **prendre fin** (rupture). La loi protège le salarié contre les ruptures abusives.

## I. La suspension du contrat

Le contrat est **suspendu** : le salarié ne travaille pas temporairement, mais le contrat **n'est pas rompu**, et il retrouve son poste à la fin de la suspension.

**Causes** : maladie ou accident (dûment constatés), congé de maternité, service militaire, grève, fermeture provisoire de l'entreprise, congés, détention préventive…

## II. La rupture du CDD

Le CDD prend fin **à son terme**. Une rupture anticipée sans faute grave ou force majeure oblige la partie responsable à verser des **dommages-intérêts** égaux aux salaires restant à courir.

## III. La rupture du CDI

### 1. La démission (initiative du salarié)

Le salarié peut démissionner en respectant un **préavis** ; la démission doit être écrite et signée (signature légalisée).

### 2. Le licenciement (initiative de l'employeur)

Il doit reposer sur un **motif valable** :

- **motif lié à la conduite** du salarié : **faute grave** ;
- **motif lié à ses aptitudes** ;
- **motifs technologiques, structurels ou économiques** (procédure spéciale, articles 66 à 71).

**Exemples de fautes graves** (article 39) : délit contre l'honneur ou la probité, divulgation du secret professionnel, vol, abus de confiance, ivresse publique, violence ou injure grave, absence non justifiée de plus de 4 jours (ou 8 demi-journées) dans une période de 12 mois, refus délibéré d'exécuter un travail relevant de ses compétences.

### 3. La procédure disciplinaire

Avant un licenciement pour faute grave, l'employeur doit **entendre le salarié** dans les **8 jours** suivant la découverte des faits, en présence d'un délégué du personnel ou du représentant syndical choisi par le salarié ; un **procès-verbal** est établi. La décision est notifiée par écrit.

**Sanctions disciplinaires graduées** (article 37) : avertissement, blâme, deuxième blâme ou mise à pied (8 jours maximum), troisième blâme ou transfert, puis licenciement.

## IV. Les droits du salarié licencié

| Droit | Contenu |
|---|---|
| **Préavis** | Durée fixée par décret selon la catégorie et l'ancienneté (de 8 jours à 3 mois) ; non dû en cas de faute grave |
| **Indemnité de licenciement** | Après au moins 6 mois d'ancienneté, sauf faute grave : **96 h** de salaire par année pour les 5 premières années, **144 h** de la 6ᵉ à la 10ᵉ, **192 h** de la 11ᵉ à la 15ᵉ, **240 h** au-delà |
| **Dommages-intérêts** (licenciement abusif) | **1,5 mois de salaire par année** d'ancienneté, dans la limite de **36 mois** |
| **Certificat de travail** | Remis obligatoirement |
| **Indemnité pour perte d'emploi (IPE)** | Versée par la CNSS sous conditions de cotisation |

## V. Les autres modes de rupture

- **Départ à la retraite** (en principe à **60 ans**) ;
- **Force majeure**, décès du salarié ;
- **Rupture d'un commun accord**.

## VI. Le règlement des litiges individuels

Tentative de **conciliation** devant l'inspecteur du travail (accord signé ayant force exécutoire), puis action devant le **tribunal** (chambre sociale).
`,
    exercices: md`
### Exercice 1 — Indemnité de licenciement (données fictives)

Un ouvrier licencié sans faute grave après 12 ans d'ancienneté percevait un salaire horaire moyen de 22 DH.

Calculez son indemnité de licenciement.

<details><summary>Voir le corrigé</summary>

- Années 1 à 5 : $5 \times 96 = 480$ h ;
- Années 6 à 10 : $5 \times 144 = 720$ h ;
- Années 11 et 12 : $2 \times 192 = 384$ h ;
- Total : $1\,584$ h ; indemnité $= 1\,584 \times 22 = 34\,848$ DH.

</details>

### Exercice 2 — Faute grave et procédure

Un salarié s'absente 6 jours sans justification. L'employeur le licencie par téléphone le lendemain de son retour.

1. S'agit-il d'une faute grave ?
2. La procédure est-elle régulière ?

<details><summary>Voir le corrigé</summary>

1. **Oui** : absence non justifiée de plus de 4 jours (article 39).
2. **Non** : l'employeur devait entendre le salarié dans les 8 jours, en présence d'un délégué, dresser un procès-verbal et notifier la décision **par écrit**. Le non-respect de la procédure rend le licenciement **abusif** : le salarié peut réclamer des dommages-intérêts.

</details>
`,
    resume: md`
## L'essentiel — Suspension et rupture

- **Suspension** : maladie, maternité, grève, service militaire… le contrat n'est pas rompu.
- **CDD** : fin au terme ; rupture anticipée → dommages-intérêts.
- **CDI** : démission (préavis, écrit) ; licenciement (motif valable : faute grave, aptitude, motif économique).
- **Faute grave (art. 39)** : vol, violence, divulgation du secret, absence injustifiée > 4 jours…
- **Procédure (art. 62)** : audition dans les 8 jours, délégué présent, PV, notification écrite.
- **Droits** : préavis ; indemnité (96 h, 144 h, 192 h, 240 h par année) ; dommages-intérêts si abusif (1,5 mois/an, max 36 mois) ; certificat de travail ; IPE.
- **Litiges** : conciliation (inspecteur) puis tribunal.
`,
    qcm: [
      { q: "Pendant la suspension du contrat de travail :", choix: ["Le contrat est rompu", "Le contrat continue d'exister", "Le salarié perd son poste", "L'employeur doit le licencier"], bonne: 1, explication: "Le salarié retrouve son poste à la fin de la suspension." },
      { q: "Une absence injustifiée de plus de 4 jours sur 12 mois est :", choix: ["Une faute légère", "Une faute grave", "Un motif économique", "Une suspension"], bonne: 1, explication: "Article 39 du Code du travail." },
      { q: "Pour les 5 premières années, l'indemnité de licenciement est de :", choix: ["48 h par année", "96 h par année", "144 h par année", "1 mois par année"], bonne: 1, explication: "Puis 144 h, 192 h, 240 h selon l'ancienneté." },
      { q: "Les dommages-intérêts pour licenciement abusif sont plafonnés à :", choix: ["12 mois", "24 mois", "36 mois", "Aucun plafond"], bonne: 2, explication: "1,5 mois de salaire par année d'ancienneté, dans la limite de 36 mois." },
      { q: "Le salarié doit être entendu avant un licenciement disciplinaire dans un délai de :", choix: ["48 heures", "8 jours", "1 mois", "3 mois"], bonne: 1, explication: "À compter de la constatation de la faute (article 62)." },
    ],
  },

  "la-representation-des-salaries-et-les-syndicats": {
    cours: md`
## Introduction

Les salariés ont le droit d'être **représentés** et de défendre collectivement leurs intérêts. Le Code du travail organise plusieurs institutions représentatives et garantit la **liberté syndicale**.

## I. Les délégués des salariés

- **Obligatoires** dans les établissements employant habituellement **au moins 10 salariés permanents** ;
- **Élus** par les salariés lors des élections professionnelles ;
- **Missions** : présenter à l'employeur les **réclamations individuelles** des salariés (salaires, conditions de travail, application de la législation) ; saisir l'inspecteur du travail en cas de désaccord ; assister le salarié lors de la procédure disciplinaire ;
- **Protection** : leur licenciement ou leur mutation nécessite l'**accord de l'inspecteur du travail**.

## II. Le comité d'entreprise

- **Obligatoire** dans les entreprises d'au moins **50 salariés** ;
- **Composition** : l'employeur (président), deux délégués des salariés, un ou deux représentants syndicaux ;
- **Rôle consultatif** : il est informé et consulté sur les **transformations structurelles et technologiques**, la stratégie de production, le bilan social, les projets de licenciement économique, les programmes de formation et d'apprentissage.

## III. Le comité de sécurité et d'hygiène

Obligatoire dans les entreprises d'au moins **50 salariés** ; il détecte les risques professionnels, veille à l'application des règles d'hygiène et de sécurité et propose des améliorations.

## IV. Les syndicats

### 1. Définition et liberté syndicale

> Un **syndicat professionnel** est un groupement de salariés (ou d'employeurs) ayant pour objet la **défense des intérêts** économiques, sociaux et moraux de ses membres.

- La **liberté syndicale** est garantie par la **Constitution** (article 8) et le Code du travail : chacun est libre d'adhérer ou non à un syndicat ;
- Il est interdit de discriminer un salarié en raison de son appartenance syndicale.

### 2. La constitution

Dépôt des **statuts** et de la liste des dirigeants auprès des autorités ; le syndicat acquiert la **personnalité morale** (il peut agir en justice, posséder des biens, conclure des conventions).

### 3. La représentativité

- **Syndicat le plus représentatif au niveau national** : ayant obtenu au moins **6 %** du total des délégués élus dans les secteurs public et privé ;
- **Représentant syndical dans l'entreprise** : dans les entreprises d'au moins **100 salariés**, le syndicat le plus représentatif ayant obtenu au moins **35 %** des voix aux élections des délégués désigne un représentant syndical.

### 4. Les missions

- **Négocier** avec l'employeur : la **négociation collective** peut aboutir à une **convention collective de travail**, plus favorable que la loi ;
- **Défendre** les salariés, individuellement et collectivement ;
- Participer au **dialogue social** national (accords sur les salaires, la protection sociale) ;
- **Appeler à la grève**, dans le cadre fixé par la loi organique n° 97-15.

## V. Le dialogue social

Il associe le gouvernement, les syndicats et le patronat (**CGEM**). Il a notamment abouti à des revalorisations du SMIG et des salaires, et à l'extension de la protection sociale.
`,
    exercices: md`
### Exercice 1 — Institutions représentatives

Une entreprise emploie 120 salariés. Quelles institutions représentatives doit-elle mettre en place ?

<details><summary>Voir le corrigé</summary>

- **Délégués des salariés** (au moins 10 salariés) ;
- **Comité d'entreprise** (au moins 50 salariés) ;
- **Comité de sécurité et d'hygiène** (au moins 50 salariés) ;
- **Représentant syndical** si un syndicat le plus représentatif a obtenu au moins 35 % des voix aux élections des délégués (entreprise d'au moins 100 salariés).

</details>

### Exercice 2 — Protection du délégué

L'employeur veut muter un délégué des salariés dans une autre ville sans son accord, à la suite de réclamations répétées. Est-ce possible ?

<details><summary>Voir le corrigé</summary>

**Non** : le délégué bénéficie d'une protection. Toute mesure disciplinaire, mutation ou licenciement le concernant nécessite l'**accord de l'inspecteur du travail**. De plus, la mesure semble liée à l'exercice de son mandat, ce qui est interdit.

</details>
`,
    resume: md`
## L'essentiel — Représentation et syndicats

- **Délégués des salariés** : ≥ 10 salariés ; réclamations individuelles ; protégés (accord de l'inspecteur).
- **Comité d'entreprise** : ≥ 50 salariés ; consultatif (restructurations, formation, licenciements économiques).
- **Comité de sécurité et d'hygiène** : ≥ 50 salariés.
- **Syndicat** : défense des intérêts ; liberté syndicale (Constitution, art. 8) ; personnalité morale.
- **Représentativité** : 6 % des délégués au niveau national ; représentant syndical dans l'entreprise (≥ 100 salariés, ≥ 35 % des voix).
- **Missions** : négociation collective (convention collective), défense, dialogue social, grève (loi organique 97-15).
`,
    qcm: [
      { q: "Les délégués des salariés sont obligatoires à partir de :", choix: ["5 salariés", "10 salariés", "50 salariés", "100 salariés"], bonne: 1, explication: "Dans les établissements d'au moins 10 salariés permanents." },
      { q: "Le comité d'entreprise a un rôle :", choix: ["Décisionnel", "Consultatif", "Judiciaire", "Disciplinaire"], bonne: 1, explication: "Il est informé et consulté." },
      { q: "La mutation d'un délégué nécessite l'accord :", choix: ["Du syndicat", "De l'inspecteur du travail", "Du gouverneur", "Du juge"], bonne: 1, explication: "C'est une protection de son mandat." },
      { q: "Un syndicat est le plus représentatif au niveau national s'il obtient au moins :", choix: ["3 % des délégués", "6 % des délégués", "35 % des voix", "50 % des voix"], bonne: 1, explication: "Du total des délégués élus des secteurs public et privé." },
      { q: "Une convention collective est issue de :", choix: ["Une décision du gouvernement", "Une négociation collective", "Un jugement", "Un décret"], bonne: 1, explication: "Accord entre employeurs et syndicats." },
    ],
  },

  "les-conflits-collectifs-de-travail": {
    cours: md`
## Introduction

Un **conflit collectif** oppose un **groupe de salariés** (souvent représenté par un syndicat) à l'employeur, sur une question d'**intérêt collectif** : salaires, conditions de travail, emploi. Il peut aboutir à une **grève**.

## I. Conflit individuel et conflit collectif

| Conflit individuel | Conflit collectif |
|---|---|
| Oppose un salarié à son employeur | Oppose un groupe de salariés à l'employeur |
| Porte sur un droit individuel (salaire non payé, licenciement) | Porte sur un intérêt collectif (hausse générale des salaires) |
| Réglé par conciliation puis par le tribunal | Réglé par la négociation, la conciliation et l'arbitrage |

## II. Les modes de règlement pacifique

Le Code du travail organise une procédure en plusieurs étapes :

### 1. La négociation

Discussion directe entre l'employeur et les représentants des salariés.

### 2. La conciliation

- Au niveau **local** : devant l'**agent de l'inspection du travail** puis la **commission provinciale d'enquête et de conciliation**, présidée par le gouverneur ou son représentant ;
- Au niveau **national** : devant la **commission nationale d'enquête et de conciliation**, lorsque le conflit concerne plusieurs provinces ou n'a pas été résolu localement.

Les parties sont **convoquées** et doivent se présenter. L'accord éventuel est consigné dans un **procès-verbal** qui s'impose aux parties.

### 3. L'arbitrage

En cas d'échec de la conciliation, le conflit peut être soumis, avec l'accord des parties, à un **arbitre** choisi sur une liste officielle. La **sentence arbitrale** s'impose aux parties ; un recours est possible devant la chambre sociale de la Cour de cassation pour excès de pouvoir ou violation de la loi.

## III. La grève

### 1. Définition

> La **grève** est la **cessation collective et concertée du travail** par les salariés, en vue de défendre leurs intérêts professionnels.

Le droit de grève est **garanti par la Constitution** (article 29). Ses conditions sont fixées par la **loi organique n° 97-15**, entrée en vigueur en **septembre 2025**.

### 2. Le cadre fixé par la loi organique 97-15

- L'appel à la grève revient en principe aux **syndicats les plus représentatifs** ; dans une entreprise sans représentation syndicale, un **comité de grève** élu par les salariés peut le faire ;
- Une **négociation préalable** doit être tentée ;
- Un **préavis** doit être notifié à l'employeur et aux autorités avant le déclenchement (en principe 7 jours dans le secteur privé) ;
- Un **service minimum** doit être assuré dans les services vitaux ;
- L'employeur ne peut ni **sanctionner** les grévistes pour fait de grève ni les **remplacer** ; le salaire n'est en principe pas dû pour les jours non travaillés ;
- Sont interdites : l'**entrave à la liberté du travail** des non-grévistes et l'**occupation** des lieux de travail.

### 3. Les effets

Le contrat de travail est **suspendu** pendant la grève (et non rompu).

## IV. Les autres formes d'action

- Pour les salariés : sit-in, manifestations, pétitions ;
- Pour l'employeur : le **lock-out** (fermeture de l'entreprise pour faire pression) est **encadré** et, en principe, interdit lorsqu'il vise à contrer une grève légale.
`,
    exercices: md`
### Exercice 1 — Individuel ou collectif ?

a) Un salarié réclame le paiement de ses heures supplémentaires ; b) le syndicat demande une hausse de 10 % des salaires de tous les ouvriers ; c) les salariés d'un atelier refusent un nouveau planning de travail de nuit.

<details><summary>Voir le corrigé</summary>

a) **Individuel** ; b) **Collectif** ; c) **Collectif** (intérêt commun aux salariés de l'atelier).

</details>

### Exercice 2 — Étude de cas

Les ouvriers d'une usine, sans prévenir ni négocier, cessent le travail, bloquent l'entrée de l'usine et empêchent les non-grévistes de travailler. L'employeur embauche des intérimaires pour les remplacer.

Analysez la situation au regard de la loi.

<details><summary>Voir le corrigé</summary>

- **Côté salariés** : absence de négociation préalable et de **préavis** → grève irrégulière ; le blocage de l'entrée constitue une **entrave à la liberté du travail**, interdite.
- **Côté employeur** : le **remplacement des grévistes** est interdit par la loi organique 97-15.
- **Solution** : recourir à la négociation, puis à la **conciliation** (inspection du travail, commission provinciale) et éventuellement à l'**arbitrage**.

</details>
`,
    resume: md`
## L'essentiel — Conflits collectifs

- **Conflit collectif** : groupe de salariés, intérêt collectif.
- **Règlement pacifique** : négociation → **conciliation** (inspecteur, commission provinciale, commission nationale) → **arbitrage** (sentence obligatoire).
- **Grève** : cessation collective et concertée du travail ; droit constitutionnel (art. 29) ; **loi organique 97-15** (en vigueur depuis septembre 2025).
- Conditions : appel syndical (ou comité de grève), négociation préalable, **préavis**, service minimum.
- Interdits : sanction ou remplacement des grévistes ; entrave à la liberté du travail ; occupation des locaux.
- La grève **suspend** le contrat ; pas de salaire pour les jours de grève.
`,
    qcm: [
      { q: "La grève est :", choix: ["Un arrêt individuel du travail", "Une cessation collective et concertée du travail", "Une démission collective", "Un licenciement"], bonne: 1, explication: "Elle vise à défendre des intérêts professionnels." },
      { q: "Au Maroc, le droit de grève est encadré par :", choix: ["La loi 65-99 seulement", "La loi organique 97-15", "Le décret sur le SMIG", "La loi 104-12"], bonne: 1, explication: "Entrée en vigueur en septembre 2025." },
      { q: "Pendant la grève, le contrat de travail est :", choix: ["Rompu", "Suspendu", "Transformé en CDD", "Annulé"], bonne: 1, explication: "Le salarié retrouve son poste à la fin de la grève." },
      { q: "Remplacer les grévistes par des intérimaires est :", choix: ["Autorisé", "Interdit", "Obligatoire", "Autorisé après 3 jours"], bonne: 1, explication: "C'est une entrave au droit de grève." },
      { q: "En cas d'échec de la conciliation, le conflit peut être soumis à :", choix: ["Un arbitre", "Un notaire", "La CNSS", "L'ANAPEC"], bonne: 0, explication: "La sentence arbitrale s'impose aux parties." },
    ],
  },

  "la-protection-sociale": {
    cours: md`
## Introduction

La **protection sociale** désigne l'ensemble des mécanismes qui protègent les individus contre les **risques sociaux** : maladie, maternité, accident du travail, vieillesse, invalidité, décès, charges familiales, perte d'emploi.

## I. La Caisse nationale de sécurité sociale (CNSS)

Organisme public qui gère le **régime de sécurité sociale** des salariés du **secteur privé**. L'employeur doit **déclarer** ses salariés et **payer les cotisations**.

### 1. Les cotisations (2026)

| Branche | Part employeur | Part salarié | Plafond |
|---|---|---|---|
| Allocations familiales | 6,40 % | — | Aucun |
| Prestations sociales (court et long terme) | 8,98 % | **4,48 %** | Salaire de **6 000 DH/mois** |
| Assurance maladie obligatoire (AMO) | 4,11 % | **2,26 %** | Aucun |
| Taxe de formation professionnelle | 1,60 % | — | Aucun |

### 2. Les prestations

| Prestation | Contenu |
|---|---|
| **Allocations familiales** | Versées pour les enfants à charge (dans une limite de 6 enfants) |
| **Indemnités journalières de maladie ou d'accident** (non professionnel) | Compensent une partie du salaire en cas d'arrêt de travail |
| **Indemnités de maternité** | Pendant le congé de maternité de 14 semaines |
| **Pension d'invalidité** | En cas d'incapacité de travail |
| **Pension de vieillesse (retraite)** | À partir de **60 ans**, sous condition d'un nombre minimum de jours de cotisation |
| **Pension de survivants**, allocation au décès | Pour la famille du défunt |
| **Indemnité pour perte d'emploi (IPE)** | En cas de perte involontaire d'emploi |

## II. L'assurance maladie obligatoire (AMO)

Instituée par la **loi n° 65-00** (Code de la couverture médicale de base), l'AMO rembourse une partie des frais de soins, de médicaments et d'hospitalisation. Pour les salariés du privé et les travailleurs non salariés, elle est gérée par la **CNSS**.

## III. La généralisation de la protection sociale

La **loi-cadre n° 09-21** (2021) a lancé un vaste chantier royal :

1. **Généralisation de l'AMO** à toute la population : salariés, **travailleurs non salariés** (commerçants, artisans, professions libérales, agriculteurs), et personnes vulnérables grâce à l'**AMO Tadamon** (qui a remplacé le RAMED fin 2022) ;
2. **Aides sociales directes** aux familles (versées depuis fin 2023) ;
3. Élargissement de la base des adhérents aux **régimes de retraite** ;
4. Généralisation de l'**indemnité pour perte d'emploi**.

## IV. Les autres régimes

| Régime | Bénéficiaires |
|---|---|
| **Accidents du travail et maladies professionnelles** (loi n° 18-12) | Tous les salariés : l'employeur doit souscrire une **assurance** obligatoire |
| **CMR** (Caisse marocaine des retraites) | Fonctionnaires civils et militaires |
| **RCAR** (Régime collectif d'allocation de retraite) | Agents contractuels de l'État, des collectivités et des établissements publics |
| **CIMR** (Caisse interprofessionnelle marocaine de retraite) | Retraite **complémentaire** facultative pour les salariés du privé |

## V. Les enjeux

Financement durable des caisses de retraite (vieillissement de la population), intégration du secteur informel, qualité de l'offre de soins.
`,
    exercices: md`
### Exercice 1 — Cotisations (données fictives, taux 2026)

Un salarié perçoit un salaire brut mensuel de 9 000 DH.

1. Calculez ses cotisations salariales CNSS et AMO.
2. Calculez les cotisations patronales (allocations familiales, prestations sociales, AMO, TFP).

<details><summary>Voir le corrigé</summary>

1. CNSS $= 6\,000 \times 4{,}48\% = 268{,}80$ DH (plafond) ; AMO $= 9\,000 \times 2{,}26\% = 203{,}40$ DH ; total salarié $= 472{,}20$ DH.
2. Allocations familiales $= 9\,000 \times 6{,}40\% = 576$ DH ; prestations sociales $= 6\,000 \times 8{,}98\% = 538{,}80$ DH ; AMO $= 9\,000 \times 4{,}11\% = 369{,}90$ DH ; TFP $= 9\,000 \times 1{,}60\% = 144$ DH ; total patronal $= 1\,628{,}70$ DH.

</details>

### Exercice 2 — Quel régime ?

Quel organisme ou régime intervient ? a) Un ouvrier se blesse sur une machine ; b) une institutrice de l'école publique part à la retraite ; c) une commerçante veut être couverte en cas de maladie ; d) une salariée du privé accouche.

<details><summary>Voir le corrigé</summary>

a) **Assurance accidents du travail** souscrite par l'employeur (loi 18-12) ; b) **CMR** ; c) **AMO des travailleurs non salariés** (gérée par la CNSS) ; d) **CNSS** : indemnités de maternité et AMO.

</details>
`,
    resume: md`
## L'essentiel — Protection sociale

- **Risques sociaux** : maladie, maternité, accident, vieillesse, invalidité, décès, famille, perte d'emploi.
- **CNSS** (secteur privé) : salarié **4,48 %** (plafond 6 000 DH/mois) + **AMO 2,26 %** ; employeur : AF 6,40 %, prestations 8,98 %, AMO 4,11 %, TFP 1,60 %.
- **Prestations** : allocations familiales, indemnités journalières, maternité (14 semaines), invalidité, retraite (60 ans), survivants, **IPE**.
- **AMO** : loi 65-00 ; **généralisation** : loi-cadre 09-21 (AMO pour tous, AMO Tadamon, aides sociales directes).
- **Autres** : accidents du travail (loi 18-12), CMR (fonctionnaires), RCAR, CIMR (complémentaire).
`,
    qcm: [
      { q: "La part salariale des prestations sociales CNSS est de :", choix: ["2,26 %", "4,48 %", "6,40 %", "8,98 %"], bonne: 1, explication: "Dans la limite d'un salaire de 6 000 DH par mois." },
      { q: "L'AMO a été instituée par la loi n° :", choix: ["65-99", "65-00", "18-12", "09-21"], bonne: 1, explication: "Code de la couverture médicale de base." },
      { q: "La généralisation de la protection sociale repose sur la loi-cadre n° :", choix: ["09-21", "97-15", "40-17", "104-12"], bonne: 0, explication: "Adoptée en 2021." },
      { q: "Les fonctionnaires relèvent pour leur retraite de :", choix: ["La CNSS", "La CMR", "La CIMR", "L'ANAPEC"], bonne: 1, explication: "Caisse marocaine des retraites." },
      { q: "Les allocations familiales sont financées par :", choix: ["Le salarié", "L'employeur", "L'État uniquement", "Les syndicats"], bonne: 1, explication: "6,40 % à la charge de l'employeur." },
    ],
  },
};
