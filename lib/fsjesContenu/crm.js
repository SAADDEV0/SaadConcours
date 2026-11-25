// Gestion de la Relation Client — CRM (S5, filière MAC) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Du marketing transactionnel au marketing relationnel",
    description: "CRM et marketing relationnel : définitions, part de client, chaîne satisfaction-fidélité-rentabilité, matrice de Dick et Basu, taux de rétention et cohorte.",
    resume: md`
## L'essentiel — Du transactionnel au relationnel

- **Marketing relationnel** (Berry, 1983) : relation durable et mutuellement profitable avec chaque client, plutôt que la transaction isolée.
- **CRM** : stratégie + processus + outils pour connaître les clients, les distinguer selon leur valeur et adapter offres et contacts ; ce n'est pas d'abord un logiciel.
- Transactionnel : vente, part de marché, court terme, médias de masse ; relationnel : fidélité, **part de client**, long terme, contacts personnalisés.
- Leviers sur les clients existants : **vente croisée** et **montée en gamme**.
- Chaîne **satisfaction → fidélité → rentabilité** ; Reichheld et Sasser (1990) : − 5 points de départs → + 25 à 85 % de profits selon les secteurs étudiés.
- Matrice de **Dick et Basu** (1994) : fidélité véritable, **latente**, **de façade**, absence de fidélité.
- Ne pas confondre **rétention** (rester) et **attachement** (vouloir rester).
- Taux d'attrition = 1 − taux de rétention.
- Clients d'une cohorte au début de l'année t : $N_t = N_1 \times r^{t-1}$ ; marge cumulée = somme des clients restants × marge annuelle.
`,
    exercices: md`
### Exercice 2 — Part de client

Une enseigne de bricolage sait que ses 5 000 clients réguliers dépensent en moyenne 6 000 DH par an en bricolage, dont 1 800 DH chez elle. Une action de vente croisée (jardinage, peinture) permettrait de porter leur dépense chez elle à 2 400 DH. Taux de marge : 30 %.

1. Calculez la part de client avant et après.
2. Quel gain de marge annuel l'action apporterait-elle ?

<details><summary>Voir le corrigé</summary>

1. Avant : 1 800 / 6 000 = **30 %** ; après : 2 400 / 6 000 = **40 %**.
2. Dépense supplémentaire : 5 000 × 600 = 3 000 000 DH ; marge : 3 000 000 × 30 % = **900 000 DH par an**, à comparer au coût de l'action.

</details>

### Exercice 3 — Qualifier la fidélité

Classez chaque client dans la matrice de Dick et Basu : a) Karim achète toujours la même marque de café et la recommande à ses amis ; b) Salma adore une marque de vêtements mais ne l'achète qu'une fois par an, car il n'y a pas de magasin dans sa ville ; c) Youssef reste chez sa banque depuis 10 ans uniquement parce que le transfert de son crédit serait compliqué ; d) Nadia change de marque de lessive à chaque promotion.

<details><summary>Voir le corrigé</summary>

a) **Fidélité véritable**. b) **Fidélité latente** : attitude forte, achat faible pour une raison de distribution. c) **Fidélité de façade** : il reste par contrainte (coût de changement). d) **Absence de fidélité** : achat guidé par le prix.

</details>
`,
    qcm: [
      { q: "Le marketing relationnel vise d'abord :", choix: ["Une relation durable et mutuellement profitable avec chaque client", "La maximisation de chaque transaction", "La baisse des prix", "La conquête de nouveaux marchés"], bonne: 0, explication: "Il déplace l'attention de la vente vers la relation." },
      { q: "La part de client mesure :", choix: ["La part des dépenses d'un client dans une catégorie captée par l'entreprise", "La part des clients d'un marché", "La part des clients satisfaits", "La part des clients perdus"], bonne: 0, explication: "Share of wallet." },
      { q: "Le CRM est avant tout :", choix: ["Une stratégie centrée sur le client, avec des processus et des outils", "Un logiciel de comptabilité", "Une campagne publicitaire", "Un service juridique"], bonne: 0, explication: "Acheter l'outil sans changer les pratiques mène à l'échec." },
      { q: "Un client qui reste uniquement à cause d'une pénalité de résiliation a une fidélité :", choix: ["De façade", "Véritable", "Latente", "Nulle"], bonne: 0, explication: "Achat répété fort, attitude faible." },
      { q: "La fidélité latente correspond à :", choix: ["Une attitude favorable forte et un achat répété faible", "Un achat répété fort sans préférence", "Une absence d'achat et de préférence", "Une forte préférence et de nombreux achats"], bonne: 0, explication: "Le client préfère la marque mais achète peu." },
      { q: "Avec un taux de rétention de 75 %, une cohorte de 8 000 clients compte au début de l'année 3 :", choix: ["4 500 clients", "6 000 clients", "4 000 clients", "2 000 clients"], bonne: 0, explication: "8 000 × 0,75² = 4 500." },
      { q: "Le taux d'attrition est :", choix: ["Le complément à 1 du taux de rétention", "Le taux de satisfaction", "Le taux de marge", "Le taux de conversion"], bonne: 0, explication: "Churn = 1 − rétention." },
      { q: "Proposer une assurance habitation au titulaire d'un crédit immobilier est un exemple de :", choix: ["Vente croisée", "Montée en gamme", "Attrition", "Prospection de masse"], bonne: 0, explication: "Cross-selling." },
      { q: "Selon Reichheld et Sasser (1990), réduire le taux de départ des clients de 5 points peut :", choix: ["Augmenter fortement les profits selon les secteurs", "Diminuer le chiffre d'affaires", "N'avoir aucun effet", "Doubler le nombre de clients"], bonne: 0, explication: "De 25 à 85 % dans les secteurs étudiés." },
      { q: "Le marketing relationnel est particulièrement adapté :", choix: ["Aux services à abonnement comme la banque ou les télécoms", "Aux achats uniques et impulsifs", "Aux produits sans concurrence", "Aux ventes aux enchères"], bonne: 0, explication: "La valeur vient de la durée de la relation." },
    ],
  },
  2: {
    titre: "La connaissance client : données, base clients et conformité",
    description: "Connaissance client : données transactionnelles et déclaratives, vision 360°, entrepôt de données, qualité de la base (doublons, complétude), loi 09-08 et CNDP.",
    resume: md`
## L'essentiel — Données clients et conformité

- Familles de données : **identification**, socio-démographiques, **transactionnelles**, relationnelles, **déclaratives**, numériques.
- Le comportement observé (transactions) prédit mieux que les déclarations ; les déclarations expliquent.
- Sources : caisses et carte de fidélité, site et application, centre de relation client, commerciaux, enquêtes, réseaux sociaux.
- **Vision client unique (360°)** : toutes les informations d'un client dans un même référentiel, quel que soit le canal.
- Base clients → **entrepôt de données** (data warehouse) → data marts → **data mining**.
- Qualité : **taux de doublons**, **taux de complétude**, taux de validité, fraîcheur ; actions à la source et nettoyage régulier.
- **Loi 09-08** : finalité, **proportionnalité**, exactitude, durée limitée, consentement, information, droits d'accès, de rectification et d'opposition, sécurité.
- **CNDP** : déclaration préalable ; autorisation pour les données sensibles, certains transferts à l'étranger, interconnexions.
- Prospection par SMS, courrier électronique ou automate : **consentement préalable** (article 10), sanctions pénales.
- Contacts utilisables = clients uniques × coordonnée valide × consentement au canal.
`,
    exercices: md`
### Exercice 2 — Classer les données

Classez chaque donnée d'un client d'opérateur télécom : a) date de naissance ; b) consommation de données mobiles du mois ; c) appel au service client pour une panne ; d) intérêt déclaré pour la fibre optique ; e) numéro de téléphone ; f) pages consultées sur le site de l'opérateur.

<details><summary>Voir le corrigé</summary>

a) **Socio-démographique**. b) **Transactionnelle** (usage). c) **Relationnelle** (interaction). d) **Déclarative**. e) **Identification**. f) **Numérique**.

</details>

### Exercice 3 — Conforme ou non ?

Pour chaque pratique, dites si elle est conforme à la loi 09-08 : a) une pharmacie inscrit les maladies de ses clients dans le fichier de sa carte de fidélité pour leur envoyer des promotions ; b) une enseigne envoie des SMS promotionnels aux clients qui ont coché une case vide « J'accepte de recevoir les offres par SMS » ; c) un site garde indéfiniment les données de clients qui n'ont rien acheté depuis 10 ans ; d) une enseigne refuse à un client de lui communiquer les données qu'elle détient sur lui.

<details><summary>Voir le corrigé</summary>

a) **Non** : les données de santé sont des données sensibles, soumises à autorisation de la CNDP ; leur usage à des fins promotionnelles n'est pas justifiable. b) **Oui**, si le traitement est déclaré et que le client peut se désinscrire facilement. c) **Non** : la durée de conservation doit être limitée à la finalité. d) **Non** : le client dispose d'un **droit d'accès**.

</details>
`,
    qcm: [
      { q: "Les montants et les dates des achats d'un client sont des données :", choix: ["Transactionnelles", "Déclaratives", "D'identification", "Socio-démographiques"], bonne: 0, explication: "Elles décrivent le comportement réel." },
      { q: "La vision client unique désigne :", choix: ["Le regroupement de toutes les informations d'un client dans un même référentiel", "Un seul canal de vente", "Une campagne unique pour tous les clients", "Un client qui n'achète qu'une fois"], bonne: 0, explication: "Vision à 360°." },
      { q: "Une base de 20 000 fiches contient 1 600 doublons. Le taux de doublons est de :", choix: ["8 %", "1,6 %", "16 %", "12,5 %"], bonne: 0, explication: "1 600 / 20 000." },
      { q: "L'entrepôt de données (data warehouse) sert principalement à :", choix: ["Regrouper et historiser les données pour l'analyse", "Stocker les marchandises", "Envoyer les SMS", "Encaisser les paiements"], bonne: 0, explication: "Il alimente le data mining." },
      { q: "Le principe de proportionnalité de la loi 09-08 impose de :", choix: ["Ne collecter que les données nécessaires à la finalité", "Collecter le plus de données possible", "Conserver les données indéfiniment", "Vendre les données aux partenaires"], bonne: 0, explication: "Données adéquates, pertinentes et non excessives." },
      { q: "La prospection par SMS utilisant les coordonnées d'une personne exige :", choix: ["Son consentement préalable", "Une simple information après l'envoi", "L'accord d'un concurrent", "Une autorisation de Bank Al-Maghrib"], bonne: 0, explication: "Article 10 de la loi 09-08." },
      { q: "L'autorité de contrôle des données personnelles au Maroc est :", choix: ["La CNDP", "L'ANRT", "La DGI", "Le HCP"], bonne: 0, explication: "Commission nationale de contrôle de la protection des données à caractère personnel." },
      { q: "Le data mining permet notamment de :", choix: ["Repérer les clients qui risquent de partir", "Imprimer les factures", "Livrer les commandes", "Rédiger les contrats de travail"], bonne: 0, explication: "Il cherche des régularités dans les données." },
      { q: "Le droit d'accès permet au client de :", choix: ["Connaître les données que l'entreprise détient sur lui", "Accéder aux locaux de l'entreprise", "Obtenir une réduction", "Consulter les données des autres clients"], bonne: 0, explication: "Avec les droits de rectification et d'opposition." },
      { q: "30 000 clients, 85 % de téléphones valides, 60 % de consentement : on peut contacter par SMS :", choix: ["15 300 clients", "18 000 clients", "25 500 clients", "30 000 clients"], bonne: 0, explication: "30 000 × 0,85 × 0,60 = 15 300." },
    ],
  },
  3: {
    titre: "Segmenter et valoriser la clientèle : Pareto, RFM et valeur client",
    description: "Segmentation client : loi de Pareto et analyse ABC, scoring RFM (récence, fréquence, montant), valeur client actualisée (CLV) et coût d'acquisition maximal.",
    resume: md`
## L'essentiel — Pareto, RFM et valeur client

- Les clients sont **inégaux** : on segmente selon le comportement réel.
- **Pareto (20/80)** : ordre de grandeur, à mesurer par une **analyse ABC** (clients classés par CA décroissant, cumul, classes A, B, C).
- Forte concentration = clients A à soigner, mais aussi **risque** en cas de perte.
- **RFM** : **Récence** (moins de jours = meilleure note), **Fréquence**, **Montant** ; notes de 1 à 3 ou par quintiles.
- Segments : champions, fidèles, nouveaux, **à risque** (gros clients en sommeil, priorité de réactivation), perdus.
- **CLV actualisée** : $CLV = \sum_{t=1}^{T} m\,r^{t-1} / (1+i)^t - CAC$.
- Horizon illimité : $CLV = m / (1 + i - r) - CAC$ ; sans actualisation on retrouve $m / (1 - r)$.
- La CLV se calcule sur la **marge**, pas sur le chiffre d'affaires.
- CLV avant acquisition = **coût d'acquisition maximal** acceptable ; elle guide aussi le budget de rétention et le choix des canaux.
`,
    exercices: md`
### Exercice 2 — Valeur client sur trois ans

Un abonné à une salle de sport rapporte 1 500 DH de marge par an (encaissée en fin d'année). Le taux de rétention est de 80 %, le taux d'actualisation de 10 %, le coût d'acquisition de 900 DH. Calculez la CLV sur un horizon de 3 ans.

<details><summary>Voir le corrigé</summary>

| Année | Marge espérée | Facteur d'actualisation | Valeur actuelle |
|---|---|---|---|
| 1 | 1 500 × 1 = 1 500 | 1 / 1,10 | 1 363,64 |
| 2 | 1 500 × 0,80 = 1 200 | 1 / 1,21 | 991,74 |
| 3 | 1 500 × 0,64 = 960 | 1 / 1,331 | 721,26 |
| **Total** | | | **3 076,63** (calcul non arrondi) |

CLV = 3 076,63 − 900 = **2 176,63 DH**.

</details>

### Exercice 3 — Jusqu'où aller pour retenir un client ?

Un client d'assurance automobile menace de partir. Il rapporte 1 800 DH de marge par an ; s'il reste, son taux de rétention sera de 70 % ; taux d'actualisation 10 %. Le conseiller peut lui offrir une remise de 600 DH sur la prime de l'année. Est-ce justifié ?

<details><summary>Voir le corrigé</summary>

Valeur du client s'il reste (horizon illimité) : 1 800 / (1,10 − 0,70) = 1 800 / 0,40 = **4 500 DH**. Une remise de 600 DH est très inférieure à cette valeur : elle est justifiée **si** elle a de bonnes chances de le retenir. Si, par exemple, elle le retient avec une probabilité de 50 %, la valeur espérée préservée est de 2 250 DH, toujours supérieure à 600 DH. Il faut cependant éviter que la remise devienne un réflexe pour tous les clients qui menacent de partir : on la réserve aux clients de forte valeur.

</details>
`,
    qcm: [
      { q: "Dans un score RFM, le R désigne :", choix: ["La récence du dernier achat", "La rentabilité", "Le revenu du client", "Le rang dans la base"], bonne: 0, explication: "Récence, fréquence, montant." },
      { q: "Un client dont le dernier achat date de 8 jours reçoit, pour la récence :", choix: ["Une note élevée", "Une note faible", "Une note nulle", "Aucune note"], bonne: 0, explication: "Une récence courte est un bon signe." },
      { q: "Un client noté R = 1, F = 3, M = 3 est plutôt :", choix: ["Un gros client en sommeil à réactiver", "Un nouveau client", "Un champion actif", "Un client perdu sans valeur"], bonne: 0, explication: "Il achetait souvent et beaucoup, mais plus récemment." },
      { q: "La loi de Pareto appliquée aux clients indique que :", choix: ["Une petite part des clients fait une grande part du chiffre d'affaires", "Tous les clients rapportent autant", "80 % des clients sont fidèles", "20 % des clients sont perdus chaque année"], bonne: 0, explication: "20/80 est un ordre de grandeur, à mesurer." },
      { q: "Avec m = 1 000 DH, r = 0,70 et i = 10 %, la CLV avant acquisition (horizon illimité) est de :", choix: ["2 500 DH", "3 333 DH", "1 000 DH", "7 000 DH"], bonne: 0, explication: "1 000 / (1,10 − 0,70) = 2 500." },
      { q: "Sans actualisation, avec m = 600 DH et r = 0,80, la valeur avant acquisition est de :", choix: ["3 000 DH", "480 DH", "750 DH", "4 800 DH"], bonne: 0, explication: "600 / (1 − 0,80) = 3 000." },
      { q: "La CLV avant coût d'acquisition donne :", choix: ["Le coût d'acquisition maximal acceptable", "Le chiffre d'affaires annuel", "Le taux de rétention", "La part de client"], bonne: 0, explication: "Au-delà, chaque client conquis fait perdre de l'argent." },
      { q: "La valeur client se calcule sur :", choix: ["La marge", "Le chiffre d'affaires TTC", "Le nombre d'achats", "Le nombre de visites"], bonne: 0, explication: "Un gros acheteur de promotions peut être peu rentable." },
      { q: "Dans la formule actualisée, la marge de la première année est multipliée par :", choix: ["r⁰ = 1", "r", "r²", "1 − r"], bonne: 0, explication: "La première année est certaine." },
      { q: "Une hausse du taux de rétention fait augmenter la CLV :", choix: ["Fortement, car elle réduit le dénominateur 1 + i − r", "Faiblement et linéairement", "Pas du tout", "Seulement sans actualisation"], bonne: 0, explication: "C'est l'effet cumulatif de la fidélité." },
    ],
  },
  4: {
    titre: "Satisfaction, fidélité et attrition",
    description: "Satisfaction client : confirmation des attentes, modèle de Kano, CSAT, NPS et CES, taux d'attrition mensuel et annuel, durée de vie, réclamations.",
    resume: md`
## L'essentiel — Satisfaction, fidélité et attrition

- **Satisfaction** = performance perçue comparée aux attentes (Oliver, 1980) : promettre trop crée de l'insatisfaction.
- **Kano** (1984) : attributs **de base** (absence = forte insatisfaction), **de performance** (proportionnels), **d'enchantement** (surprise) ; assurer d'abord la base.
- **CSAT** : part de satisfaits (notes 4 et 5 sur 5).
- **NPS** = % promoteurs (9-10) − % détracteurs (0-6), en **points**, de − 100 à + 100 ; passifs (7-8) non comptés ; toujours avec une question ouverte.
- **CES** : effort fourni par le client ; le réduire fidélise.
- Taux d'attrition = clients perdus / clients en début de période.
- Rétention annuelle = $(1 - c)^{12}$ pour un taux mensuel $c$ (ne pas multiplier par 12).
- Durée de vie moyenne = $1 / c$ périodes.
- Attrition **volontaire** et **involontaire** ; prévention : détecter (score), comprendre, agir de façon ciblée.
- Réclamations : facilité, rapidité, résolution au premier contact, traçabilité ; **paradoxe de la réclamation**.
`,
    exercices: md`
### Exercice 2 — Calculer un NPS par agence

Une banque a interrogé 200 clients dans deux agences. Agence de Rabat : 60 promoteurs, 25 passifs, 15 détracteurs (100 répondants). Agence de Fès : 40 promoteurs, 30 passifs, 30 détracteurs (100 répondants).

Calculez le NPS de chaque agence et celui de l'ensemble.

<details><summary>Voir le corrigé</summary>

- Rabat : 60 % − 15 % = **+ 45 points** ;
- Fès : 40 % − 30 % = **+ 10 points** ;
- ensemble : promoteurs 100 / 200 = 50 %, détracteurs 45 / 200 = 22,5 % ; NPS = **+ 27,5 points**.

L'écart entre agences doit être expliqué (accueil, attente, conseiller) à partir des réponses à la question ouverte.

</details>

### Exercice 3 — Attrition d'une plateforme de streaming

Une plateforme compte 50 000 abonnés au 1er janvier et en perd 1 500 en janvier ; 2 000 nouveaux abonnés arrivent pendant le mois.

1. Calculez le taux d'attrition de janvier et le nombre d'abonnés au 31 janvier.
2. Si ce taux reste constant, quel est le taux d'attrition annuel et la durée de vie moyenne d'un abonné ?

<details><summary>Voir le corrigé</summary>

1. Attrition : 1 500 / 50 000 = **3 %** ; abonnés au 31 janvier : 50 000 − 1 500 + 2 000 = **50 500** (les nouveaux abonnés n'entrent pas dans le calcul du taux d'attrition du mois).
2. Rétention annuelle : $0{,}97^{12} \approx 0{,}694$ ; attrition annuelle ≈ **30,6 %** ; durée de vie moyenne : 1 / 0,03 ≈ **33,3 mois**.

</details>
`,
    qcm: [
      { q: "Selon le modèle de la confirmation des attentes, un client est satisfait quand :", choix: ["La performance perçue atteint ou dépasse ses attentes", "Le prix est le plus bas du marché", "Il a reçu une promotion", "Il a déposé une réclamation"], bonne: 0, explication: "La satisfaction dépend aussi des attentes." },
      { q: "Dans le modèle de Kano, la propreté d'une chambre d'hôtel est un attribut :", choix: ["De base", "D'enchantement", "Indifférent", "De performance uniquement"], bonne: 0, explication: "Son absence crée une forte insatisfaction." },
      { q: "Le NPS se calcule :", choix: ["% de promoteurs − % de détracteurs", "% de promoteurs + % de passifs", "Moyenne des notes de 0 à 10", "% de satisfaits"], bonne: 0, explication: "Les passifs (7-8) ne comptent pas." },
      { q: "Un client qui donne la note 8 à la question de recommandation est :", choix: ["Passif", "Promoteur", "Détracteur", "Exclu de l'enquête"], bonne: 0, explication: "Promoteurs : 9-10 ; détracteurs : 0-6." },
      { q: "40 % de promoteurs et 25 % de détracteurs donnent un NPS de :", choix: ["+ 15 points", "+ 65 points", "− 15 points", "+ 40 points"], bonne: 0, explication: "40 − 25 = 15." },
      { q: "Avec une attrition mensuelle de 2 %, la durée de vie moyenne d'un client est de :", choix: ["50 mois", "24 mois", "20 mois", "98 mois"], bonne: 0, explication: "1 / 0,02 = 50." },
      { q: "Avec 2 % d'attrition mensuelle, l'attrition annuelle est d'environ :", choix: ["21,5 %", "24 %", "2 %", "12 %"], bonne: 0, explication: "1 − 0,98¹² ≈ 0,215." },
      { q: "Le CES mesure :", choix: ["L'effort fourni par le client pour obtenir une solution", "Le coût d'acquisition", "Le chiffre d'affaires par client", "La part de marché"], bonne: 0, explication: "Customer Effort Score." },
      { q: "Le paradoxe de la réclamation désigne le fait que :", choix: ["Une réclamation bien traitée peut produire une satisfaction élevée", "Les clients ne se plaignent jamais", "Les réclamations augmentent toujours l'attrition", "Les réclamations sont interdites par la loi"], bonne: 0, explication: "Service recovery paradox, observé mais pas systématique." },
      { q: "Un impayé qui entraîne la résiliation d'un abonnement est une attrition :", choix: ["Involontaire", "Volontaire", "Positive", "Concurrentielle"], bonne: 0, explication: "Le client n'a pas choisi de partir." },
    ],
  },
  5: {
    titre: "Les programmes de fidélité et les campagnes ciblées",
    description: "Programmes de fidélité : points, paliers, cashback, coalition, taux de récompense, points non utilisés, rentabilité, campagnes ciblées, groupe témoin et uplift.",
    resume: md`
## L'essentiel — Programmes de fidélité et campagnes

- Objectifs d'un programme : **comportemental** (réachat, part de client), **informationnel** (identifier le client à chaque achat), **relationnel** (reconnaissance).
- Types : **à points**, **à paliers** (statuts), remise immédiate ou **cashback**, **coalition**, payant, communautaire.
- Un programme facile à copier devient un coût obligatoire sans avantage.
- **Taux de récompense** = valeur de la récompense / achats nécessaires.
- Coût effectif des récompenses = taux de récompense × (1 − taux de **points non utilisés**) × achats des membres ; + coûts fixes.
- Beaucoup de points non utilisés = programme peu motivant.
- Rentabilité = **CA incrémental** × taux de marge − coûts ; jamais toute la marge des membres.
- Campagne : taux de réponse, coût par réponse, marge, ROI = (marge incrémentale − coût) / coût.
- **Groupe témoin** tiré au hasard dans la même cible ; **uplift** = taux de réponse des contactés − taux d'achat du témoin.
- Réponses incrémentales = uplift × contactés ; le coût des réductions porte sur **tous** les répondants.
`,
    exercices: md`
### Exercice 2 — Comparer deux barèmes

Une parfumerie hésite entre deux barèmes : A) 1 point par 10 DH, un bon de 50 DH pour 1 000 points ; B) 1 point par 5 DH, un bon de 30 DH pour 1 000 points. Calculez le taux de récompense de chaque barème. Lequel est le plus généreux ? Lequel donne une récompense plus rapide ?

<details><summary>Voir le corrigé</summary>

A) 1 000 points = 10 000 DH d'achats ; taux = 50 / 10 000 = **0,5 %**. B) 1 000 points = 5 000 DH d'achats ; taux = 30 / 5 000 = **0,6 %**. Le barème **B** est plus généreux (0,6 %) et la première récompense arrive deux fois plus vite (5 000 DH d'achats au lieu de 10 000) : il motive davantage, mais coûte plus cher si les clients achètent autant.

</details>

### Exercice 3 — Une offre de bienvenue

Une boutique en ligne envoie à 10 000 nouveaux clients une offre de 15 % sur leur deuxième commande. Groupe témoin de 2 000 nouveaux clients sans offre. 18 % des clients contactés passent une deuxième commande dans le mois, contre 10 % du groupe témoin. Panier moyen 300 DH, taux de marge 40 %, coût d'envoi négligeable.

1. Calculez l'uplift et les commandes incrémentales.
2. Calculez le résultat de l'offre.

<details><summary>Voir le corrigé</summary>

1. Uplift : 18 % − 10 % = **8 points** ; commandes incrémentales : 8 % × 10 000 = **800** ; total des commandes avec réduction : 1 800.
2. Marge incrémentale : 800 × 300 × 40 % = 96 000 DH ; coût des réductions : 1 800 × 300 × 15 % = 81 000 DH ; résultat : **+ 15 000 DH**. L'offre est rentable de justesse ; une réduction de 20 % (108 000 DH de coût) la rendrait déficitaire, sauf si elle augmentait encore l'uplift. La valeur future des clients qui reviennent (chapitre 3) peut justifier l'offre au-delà de ce calcul.

</details>
`,
    qcm: [
      { q: "Le principal intérêt informationnel d'une carte de fidélité est :", choix: ["Relier les achats à l'identité du client", "Augmenter les prix", "Supprimer les caisses", "Réduire les stocks"], bonne: 0, explication: "Sans carte, l'enseigne connaît ses ventes mais pas ses clients." },
      { q: "1 point par 10 DH, un bon de 20 DH pour 400 points : le taux de récompense est de :", choix: ["0,5 %", "5 %", "2 %", "0,2 %"], bonne: 0, explication: "400 points = 4 000 DH ; 20 / 4 000 = 0,5 %." },
      { q: "Les points non utilisés (breakage) :", choix: ["Réduisent le coût effectif des récompenses", "Augmentent le coût des récompenses", "N'ont aucun effet sur le coût", "Sont interdits par la loi"], bonne: 0, explication: "Mais un taux élevé signale un programme peu motivant." },
      { q: "La rentabilité d'un programme se mesure sur :", choix: ["La marge des achats incrémentaux", "Toute la marge des membres", "Le nombre de cartes distribuées", "Le chiffre d'affaires total"], bonne: 0, explication: "Les membres auraient acheté en partie sans le programme." },
      { q: "Un programme à paliers récompense les clients :", choix: ["Par des statuts croissants selon leurs dépenses", "Par une remise identique pour tous", "Uniquement par tirage au sort", "Seulement à leur premier achat"], bonne: 0, explication: "Classique, argent, or…" },
      { q: "Un groupe témoin est :", choix: ["Un groupe tiré au hasard dans la cible qui ne reçoit pas l'offre", "Le groupe des meilleurs clients", "Les employés de l'entreprise", "Les clients qui ont répondu"], bonne: 0, explication: "Il montre ce qui se serait passé sans campagne." },
      { q: "Taux de réponse 7 %, taux d'achat du témoin 3 %, 10 000 contactés : les achats incrémentaux sont :", choix: ["400", "700", "300", "1 000"], bonne: 0, explication: "4 % × 10 000 = 400." },
      { q: "Le coût d'un bon de réduction se calcule sur :", choix: ["Tous les répondants qui l'utilisent", "Les seuls répondants incrémentaux", "Le groupe témoin", "Les clients qui n'ont pas répondu"], bonne: 0, explication: "Même ceux qui auraient acheté sans lui utilisent le bon." },
      { q: "Une campagne coûte 40 000 DH et génère 60 000 DH de marge incrémentale. Son ROI est de :", choix: ["50 %", "150 %", "20 %", "66,7 %"], bonne: 0, explication: "(60 000 − 40 000) / 40 000." },
      { q: "Mesurer une campagne sans groupe témoin conduit généralement à :", choix: ["Surestimer son effet", "Sous-estimer son effet", "Un résultat exact", "Un ROI nul"], bonne: 0, explication: "On attribue à la campagne des achats qui auraient eu lieu." },
    ],
  },
  6: {
    titre: "Les outils du CRM et la relation client omnicanale",
    description: "Outils du CRM : opérationnel, analytique et collaboratif, logiciels, centre de relation client (décroché, FCR, DMT), parcours client omnicanal et projet CRM.",
    resume: md`
## L'essentiel — Outils du CRM et omnicanal

- **CRM opérationnel** (force de vente, campagnes, marketing automation, service client), **analytique** (segmentation, scores, tableaux de bord), **collaboratif** (dossier client partagé entre services et canaux).
- **Marketing automation** : messages déclenchés par le comportement selon des scénarios.
- Logiciel en ligne (**SaaS**) ou installé (**on premise**) ; vérifier l'intégration, la langue, le coût total et les transferts de données (loi 09-08).
- Centre de relation client : appels **entrants** et **sortants**.
- Indicateurs : **taux de décroché** = décrochés / reçus ; délai d'attente ; **DMT** ; **FCR** = résolues au premier contact / traitées ; satisfaction après contact.
- Le FCR réduit les rappels et l'effort du client ; un chatbot doit laisser accéder à un conseiller.
- **Parcours client** : étapes et points de contact, frictions ; **moments de vérité** (Carlzon, 1987).
- **Omnicanal** : canaux reliés, le client reprend là où il s'était arrêté ; multicanal : canaux juxtaposés.
- Projet CRM : objectifs, processus, choix, données, intégration, **formation**, mesure ; échecs dus à l'approche purement informatique et au manque d'adhésion.
- Rentabilité : coûts initiaux et récurrents, gains annuels, **délai de récupération** = coûts initiaux / gain net annuel.
`,
    exercices: md`
### Exercice 2 — Indicateurs d'un centre d'appels

Un opérateur reçoit 50 000 appels par mois ; 42 500 sont décrochés ; 29 750 demandes sont résolues au premier contact ; le délai moyen d'attente est de 4 minutes. Calculez le taux de décroché et le FCR, et proposez deux actions.

<details><summary>Voir le corrigé</summary>

Taux de décroché : 42 500 / 50 000 = **85 %** ; FCR : 29 750 / 42 500 = **70 %**. Actions : dimensionner les équipes selon les heures de pointe et proposer un rappel automatique pour réduire les appels perdus ; donner aux conseillers l'historique du client et une base de réponses, et l'autonomie d'accorder un geste, pour résoudre davantage dès le premier contact (ce qui réduira aussi le nombre d'appels).

</details>

### Exercice 3 — Quelle composante du CRM ?

Pour chaque besoin, indiquez la composante du CRM (opérationnelle, analytique, collaborative) : a) envoyer automatiquement un message aux clients qui ont abandonné leur panier ; b) prédire quels abonnés risquent de résilier le mois prochain ; c) permettre au vendeur en agence de voir la réclamation faite la veille au centre d'appels ; d) suivre les opportunités et les devis des commerciaux.

<details><summary>Voir le corrigé</summary>

a) **Opérationnelle** (marketing automation). b) **Analytique** (score d'attrition). c) **Collaborative** (dossier client partagé). d) **Opérationnelle** (automatisation de la force de vente).

</details>
`,
    qcm: [
      { q: "Le CRM analytique sert à :", choix: ["Analyser les données clients pour décider (segments, scores)", "Envoyer les messages aux clients", "Répondre aux appels", "Livrer les commandes"], bonne: 0, explication: "Il s'appuie sur l'entrepôt de données." },
      { q: "Le CRM collaboratif permet :", choix: ["De partager le dossier client entre les services et les canaux", "De supprimer le centre d'appels", "De fixer les prix", "De recruter des commerciaux"], bonne: 0, explication: "Tout le monde dispose de la même information." },
      { q: "Le marketing automation consiste à :", choix: ["Déclencher des messages selon le comportement du client", "Fabriquer des produits automatiquement", "Calculer la TVA", "Remplacer tous les vendeurs"], bonne: 0, explication: "Panier abandonné, anniversaire, inactivité…" },
      { q: "20 000 appels reçus, 18 000 décrochés : le taux de décroché est de :", choix: ["90 %", "10 %", "80 %", "111 %"], bonne: 0, explication: "18 000 / 20 000." },
      { q: "Le taux de résolution au premier contact (FCR) se calcule :", choix: ["Demandes résolues dès le premier contact / demandes traitées", "Appels décrochés / appels reçus", "Durée totale / nombre d'appels", "Clients perdus / clients en début de période"], bonne: 0, explication: "C'est un indicateur clé de l'effort du client." },
      { q: "Piloter un centre d'appels par la seule durée des appels risque de :", choix: ["Faire baisser la résolution des demandes", "Augmenter la satisfaction", "Supprimer les rappels", "Réduire l'attrition"], bonne: 0, explication: "Les conseillers écourtent les échanges." },
      { q: "Les moments de vérité désignent :", choix: ["Les instants de contact où le client se forge une opinion", "Les dates de clôture comptable", "Les jours de soldes", "Les contrôles fiscaux"], bonne: 0, explication: "Notion popularisée par Jan Carlzon." },
      { q: "Dans une approche omnicanale :", choix: ["Le client reprend là où il s'était arrêté, quel que soit le canal", "Chaque canal est géré séparément", "Il n'y a qu'un seul canal", "Le client doit répéter son histoire"], bonne: 0, explication: "Les canaux partagent les données." },
      { q: "Coûts initiaux 500 000 DH, gain net annuel 250 000 DH : le délai de récupération est de :", choix: ["2 ans", "0,5 an", "4 ans", "1 an"], bonne: 0, explication: "500 000 / 250 000." },
      { q: "La première cause d'échec d'un projet CRM est souvent :", choix: ["Le traiter comme un projet purement informatique", "Former les utilisateurs", "Nettoyer les données", "Fixer des objectifs mesurables"], bonne: 0, explication: "Le CRM est d'abord un projet de changement." },
    ],
  },
};

export default chapitres;
