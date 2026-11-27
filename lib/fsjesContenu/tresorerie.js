// Gestion de Trésorerie (S6, filière Gestion financière et comptable) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "La trésorerie et la fonction trésorerie",
    description: "Trésorerie nette, missions du trésorier, délais clients, fournisseurs et stocks, cycle de conversion de la trésorerie et délais de paiement de la loi 69-21.",
    resume: md`
## L'essentiel — Trésorerie et fonction trésorerie

- **Trésorerie nette** : $TN = \text{Trésorerie-actif} - \text{Trésorerie-passif} = FR - BFR$.
- L'analyse financière lit la trésorerie au bilan ; la **gestion de trésorerie** la pilote au jour le jour.
- Missions du trésorier : liquidité, prévision, financement au moindre coût, placement, relation bancaire, maîtrise des risques.
- Arbitrage permanent **liquidité / rentabilité** ; idéal de la **trésorerie zéro**.
- Délai stocks $= \frac{\text{Stock moyen}}{\text{Coût d'achat consommé}} \times 360$ ; délai clients $= \frac{\text{Créances TTC}}{\text{Ventes TTC}} \times 360$ ; délai fournisseurs $= \frac{\text{Dettes TTC}}{\text{Achats TTC}} \times 360$.
- **Cycle de conversion** : $DRS + DCC - DCF$ ; négatif dans la grande distribution.
- Réduire le délai clients de $n$ jours libère $\frac{\text{Ventes TTC}}{360} \times n$.
- **Loi 69-21** : 60 jours à défaut d'accord, 120 jours au maximum en cas d'accord ; amende = taux directeur pour le premier mois de retard + 0,85 % par mois supplémentaire, sur le montant TTC.
`,
    exercices: md`
### Exercice 2 — Une grande surface à Marrakech

Une grande surface réalise 120 000 000 DH de ventes TTC, presque toutes au comptant (créances clients 1 000 000 DH). Ses achats TTC sont de 96 000 000 DH, ses dettes fournisseurs de 16 000 000 DH ; son stock moyen est de 6 000 000 DH pour un coût d'achat des marchandises vendues HT de 80 000 000 DH.

1. Calculez les trois délais et le cycle de conversion.
2. Commentez.

<details><summary>Voir le corrigé</summary>

1. Stocks : 6 / 80 × 360 = **27 jours** ; clients : 1 / 120 × 360 = **3 jours** ; fournisseurs : 16 / 96 × 360 = **60 jours**. Cycle : 27 + 3 − 60 = **− 30 jours**.
2. Le cycle est négatif : l'enseigne encaisse ses ventes environ 30 jours avant de payer ses fournisseurs. Son exploitation dégage de la trésorerie, qu'elle peut placer ou utiliser pour ouvrir de nouveaux magasins. Elle doit rester dans le plafond légal de 120 jours et ne pas fragiliser ses fournisseurs.

</details>

### Exercice 3 — Amende pour retard de paiement

Une entreprise paie une facture de 240 000 DH TTC avec 3 mois de retard sur le délai légal. On retient un taux directeur de 2,25 %.

1. Calculez le taux de l'amende et son montant.
2. Comparez au coût d'un découvert de 3 mois au taux de 7 %.

<details><summary>Voir le corrigé</summary>

1. Taux : 2,25 % (premier mois) + 2 × 0,85 % (deux mois supplémentaires) = **3,95 %** ; amende : 240 000 × 3,95 % = **9 480 DH**.
2. Découvert : 240 000 × 7 % × 3 / 12 = **4 200 DH**. Retarder le paiement coûte plus de deux fois plus cher que de le financer par découvert, sans compter la dégradation de la relation avec le fournisseur.

</details>
`,
    qcm: [
      { q: "La trésorerie nette est égale :", choix: ["Au fonds de roulement moins le besoin de financement global", "Au résultat net plus les amortissements", "Aux capitaux propres moins les immobilisations", "Au chiffre d'affaires moins les charges"], bonne: 0, explication: "TN = FR − BFR = trésorerie-actif − trésorerie-passif." },
      { q: "Une entreprise bénéficiaire peut manquer de trésorerie parce que :", choix: ["Ses encaissements arrivent après ses décaissements", "Son résultat est positif", "Elle n'a pas de clients", "Elle n'a pas de dettes"], bonne: 0, explication: "Le résultat et la trésorerie ne coïncident pas dans le temps." },
      { q: "Le délai de crédit clients se calcule avec :", choix: ["Les créances TTC rapportées aux ventes TTC", "Les créances TTC rapportées aux ventes HT", "Les créances HT rapportées aux achats", "Le stock rapporté aux ventes"], bonne: 0, explication: "Bases homogènes : TTC avec TTC." },
      { q: "Le cycle de conversion de la trésorerie est égal à :", choix: ["Délai stocks + délai clients − délai fournisseurs", "Délai clients − délai stocks", "Délai fournisseurs + délai clients", "Délai stocks − délai fournisseurs − délai clients"], bonne: 0, explication: "Durée entre le paiement des fournisseurs et l'encaissement des clients." },
      { q: "Ventes TTC de 72 000 000 DH : réduire le délai clients de 10 jours libère :", choix: ["2 000 000 DH", "7 200 000 DH", "720 000 DH", "200 000 DH"], bonne: 0, explication: "72 000 000 / 360 × 10." },
      { q: "À défaut d'accord entre les parties, la loi 69-21 fixe le délai de paiement à :", choix: ["60 jours", "30 jours", "90 jours", "120 jours"], bonne: 0, explication: "Le délai convenu ne peut pas dépasser 120 jours." },
      { q: "Le délai de paiement convenu entre professionnels ne peut pas dépasser, sauf dérogation :", choix: ["120 jours", "60 jours", "180 jours", "90 jours"], bonne: 0, explication: "Des dérogations sectorielles sont fixées par décret." },
      { q: "La trésorerie zéro signifie :", choix: ["Ni découvert coûteux ni excédent mal rémunéré", "Aucun compte bancaire", "Une trésorerie toujours négative", "Ne jamais emprunter à long terme"], bonne: 0, explication: "C'est un objectif d'optimisation." },
      { q: "Un cycle de conversion négatif signifie que l'entreprise :", choix: ["Encaisse ses clients avant de payer ses fournisseurs", "Est en cessation de paiements", "A des stocks négatifs", "Perd de l'argent"], bonne: 0, explication: "Cas fréquent dans la grande distribution." },
      { q: "Stock moyen 2 000 000 DH, coût d'achat des marchandises vendues 24 000 000 DH : le délai de rotation des stocks est de :", choix: ["30 jours", "12 jours", "60 jours", "45 jours"], bonne: 0, explication: "2 / 24 × 360 = 30." },
    ],
  },
  2: {
    titre: "La prévision de trésorerie : le budget de trésorerie",
    description: "Budget de trésorerie : horizons de prévision, budget des encaissements et des décaissements, TVA à payer selon le CGI marocain, déficits et ajustements.",
    resume: md`
## L'essentiel — Le budget de trésorerie

- Trois horizons : **plan de financement** (années), **budget de trésorerie** (mois), **prévisions glissantes** et fiche de position (jours).
- Le budget de trésorerie récapitule mois par mois tous les encaissements et décaissements et donne la trésorerie de fin de mois.
- Encaissements : créances de départ + ventes **TTC** selon les délais + cessions, emprunts, apports, subventions.
- Décaissements : dettes de départ, achats TTC, salaires, charges sociales, investissements TTC, emprunts, TVA due, acomptes d'IS (4 × 25 % de l'IS de l'exercice précédent), dividendes.
- Jamais d'**amortissements** ni de provisions : pas de sortie d'argent.
- TVA due = TVA collectée − TVA déductible ; négative = **crédit de TVA** reporté.
- Maroc : exigibilité à l'**encaissement** (option pour les débits), déduction au **paiement** ; déclaration mensuelle si CA ≥ 1 000 000 DH ; TVA de M payée en **M + 1**.
- TVA contenue dans un montant TTC à 20 % : TTC × 20/120.
- Déficit : décaler des décaissements, accélérer des encaissements, financer à court terme, ou revoir le financement stable s'il est durable.
`,
    exercices: md`
### Exercice 2 — Encaissements à 30 et 60 jours

Une entreprise prévoit des ventes HT de 100 000 DH en avril, 150 000 DH en mai et 200 000 DH en juin (TVA 20 %). Ses clients paient 20 % au comptant, 50 % à 30 jours et 30 % à 60 jours. Les créances au 31 mars sont de 90 000 DH (encaissées en avril) et 60 000 DH (encaissées en mai).

Établissez le budget des encaissements d'avril à juin.

<details><summary>Voir le corrigé</summary>

Ventes TTC : 120 000, 180 000, 240 000.

| | Avril | Mai | Juin |
|---|---|---|---|
| Créances au 31/03 | 90 000 | 60 000 | |
| Avril (120 000) | 24 000 | 60 000 | 36 000 |
| Mai (180 000) | | 36 000 | 90 000 |
| Juin (240 000) | | | 48 000 |
| **Total** | **114 000** | **156 000** | **174 000** |

Il reste à encaisser en juillet et août : 30 % de mai (54 000), 50 % + 30 % de juin (192 000).

</details>

### Exercice 3 — TVA à payer

Au régime de l'encaissement, une entreprise encaisse en mai 720 000 DH TTC de ses clients et paie 300 000 DH TTC à ses fournisseurs et 120 000 DH TTC pour un véhicule utilitaire (TVA déductible). Elle n'a pas de crédit de TVA antérieur.

1. Calculez la TVA due au titre de mai. Quand est-elle payée ?
2. Que se passerait-il si elle payait aussi en mai une machine de 600 000 DH TTC ?

<details><summary>Voir le corrigé</summary>

1. TVA collectée : 720 000 × 20/120 = 120 000 ; déductible : (300 000 + 120 000) × 20/120 = 70 000 ; TVA due : **50 000 DH**, payée en **juin**.
2. Déductible supplémentaire : 600 000 / 6 = 100 000 ; TVA du mois : 120 000 − 170 000 = **− 50 000** : crédit de TVA de 50 000 DH reporté sur juin ; rien n'est payé en juin au titre de mai.

</details>
`,
    qcm: [
      { q: "Le budget de trésorerie enregistre les ventes :", choix: ["TTC, au moment de leur encaissement", "HT, au moment de la facturation", "HT, au moment de l'encaissement", "TTC, au moment de la livraison"], bonne: 0, explication: "Le client paie la TVA à l'entreprise." },
      { q: "Les dotations aux amortissements figurent dans le budget de trésorerie :", choix: ["Jamais", "Dans les décaissements", "Dans les encaissements", "Seulement en fin d'année"], bonne: 0, explication: "Ce sont des charges calculées, sans sortie d'argent." },
      { q: "Au Maroc, la TVA due au titre d'un mois par une entreprise au régime mensuel est payée :", choix: ["Au cours du mois suivant", "Le jour de la vente", "En fin d'année", "Trois mois plus tard"], bonne: 0, explication: "Déclaration et paiement avant la fin du mois suivant." },
      { q: "Au régime de droit commun du CGI, la TVA est exigible :", choix: ["À l'encaissement du prix", "À la commande", "À la livraison dans tous les cas", "À la clôture de l'exercice"], bonne: 0, explication: "L'option pour le régime des débits est possible." },
      { q: "Le droit à déduction de la TVA payée à un fournisseur naît :", choix: ["Au paiement de la facture", "À la commande", "À la réception du bon de livraison", "À la clôture de l'exercice"], bonne: 0, explication: "Règle du CGI." },
      { q: "La TVA contenue dans un encaissement de 360 000 DH TTC au taux de 20 % est de :", choix: ["60 000 DH", "72 000 DH", "300 000 DH", "18 000 DH"], bonne: 0, explication: "360 000 × 20/120." },
      { q: "Quand la TVA déductible d'un mois dépasse la TVA collectée :", choix: ["Un crédit de TVA est reporté sur les mois suivants", "L'entreprise paie la différence", "La différence est perdue", "L'État verse immédiatement la différence dans tous les cas"], bonne: 0, explication: "Il s'impute sur la TVA des mois suivants." },
      { q: "Un déficit de trésorerie ponctuel d'un mois se finance de préférence par :", choix: ["Une facilité de caisse", "Un emprunt à 7 ans", "Une augmentation de capital", "Un crédit-bail"], bonne: 0, explication: "On adapte la durée du financement à celle du besoin." },
      { q: "Les acomptes d'IS au Maroc représentent chacun :", choix: ["25 % de l'IS de l'exercice précédent", "10 % du chiffre d'affaires", "50 % de l'IS de l'exercice en cours", "100 % de l'IS précédent"], bonne: 0, explication: "Quatre acomptes trimestriels." },
      { q: "Le document qui vérifie l'équilibre des emplois et ressources stables sur plusieurs années est :", choix: ["Le plan de financement", "Le budget de trésorerie", "La fiche de position", "L'échelle d'intérêts"], bonne: 0, explication: "Le budget de trésorerie détaille l'année mois par mois." },
    ],
  },
  3: {
    titre: "Les conditions bancaires : dates de valeur et échelle d'intérêts",
    description: "Conditions bancaires : dates d'opération et de valeur, jours de valeur, échelle d'intérêts, agios, commission de plus fort découvert et coût réel du découvert.",
    resume: md`
## L'essentiel — Dates de valeur et échelle d'intérêts

- Conditions de banque : taux, commissions, frais, **dates de valeur** ; elles se négocient avec le volume des flux.
- **Date de valeur** : date retenue pour les intérêts ; postérieure pour les crédits au compte, égale ou antérieure pour les débits.
- **Jours de valeur** : coût caché = montant × taux × jours / 360.
- Trois soldes : comptable, en date d'opération, **en date de valeur** (seul utile pour les intérêts).
- **Échelle d'intérêts** : classer par date de valeur, solde après chaque opération, jours, **nombres** = solde × jours.
- Intérêts débiteurs $= \sum \text{nombres débiteurs} \times t / 360$ ; soldes créditeurs généralement non rémunérés.
- Agios = intérêts + commissions (plus fort découvert, mouvement…) + **TVA 10 %**.
- Solde débiteur moyen = nombres débiteurs / jours de la période.
- Coût réel annuel HT $= \frac{\text{intérêts et commissions HT}}{\text{solde débiteur moyen}} \times \frac{360}{\text{jours}}$.
`,
    exercices: md`
### Exercice 2 — Le coût des jours de valeur

Une entreprise remet chaque mois 3 000 000 DH de chèques à sa banque, crédités à J + 3. Une banque concurrente propose J + 1. Le compte est en moyenne débiteur, au taux de 6,5 %.

1. Calculez le coût annuel des jours de valeur avec chaque banque.
2. Quelle économie représente le changement de banque ?

<details><summary>Voir le corrigé</summary>

1. Remises annuelles : 36 000 000 DH. Banque actuelle : 36 000 000 × 6,5 % × 3 / 360 = **19 500 DH** ; concurrente : 36 000 000 × 6,5 % × 1 / 360 = **6 500 DH**.
2. Économie : **13 000 DH par an**, à comparer aux autres conditions (taux, commissions) des deux banques.

</details>

### Exercice 3 — Échelle simple

Solde en valeur au 1er avril : 20 000 DH créditeur. Le 11 avril (valeur), un paiement de 100 000 DH ; le 21 avril (valeur), une remise de 50 000 DH. Arrêté au 30 avril, taux débiteur 8 %, soldes créditeurs non rémunérés.

1. Construisez l'échelle et calculez les intérêts débiteurs.
2. Calculez le solde débiteur moyen sur le mois.

<details><summary>Voir le corrigé</summary>

1. 1 → 11 avril : + 20 000, 10 jours ; 11 → 21 avril : − 80 000, 10 jours, nombres débiteurs 800 000 ; 21 → 30 avril : − 30 000, 9 jours, nombres débiteurs 270 000. Total des nombres débiteurs : 1 070 000. Intérêts : 1 070 000 × 8 % / 360 ≈ **237,78 DH**.
2. Solde débiteur moyen : 1 070 000 / 29 ≈ **36 897 DH**.

</details>
`,
    qcm: [
      { q: "Les intérêts d'un compte courant se calculent sur :", choix: ["Le solde en date de valeur", "Le solde comptable de l'entreprise", "Le solde en date d'opération", "Le solde de fin de mois seulement"], bonne: 0, explication: "Seul le solde en valeur sert au calcul." },
      { q: "Pour une remise de chèques, la date de valeur est en général :", choix: ["Postérieure à la date d'opération", "Antérieure à la date d'opération", "Égale à la date d'émission du chèque", "Fixée par le client"], bonne: 0, explication: "La banque attend l'encaissement du chèque." },
      { q: "Un nombre, dans une échelle d'intérêts, est :", choix: ["Le produit d'un solde par un nombre de jours", "Le nombre d'opérations du mois", "Le taux multiplié par le solde", "Le nombre de jours de valeur"], bonne: 0, explication: "Intérêts = somme des nombres × taux / 360." },
      { q: "Nombres débiteurs 3 600 000, taux 8 % : les intérêts débiteurs sont de :", choix: ["800 DH", "288 000 DH", "8 000 DH", "80 DH"], bonne: 0, explication: "3 600 000 × 0,08 / 360." },
      { q: "Les intérêts et commissions bancaires au Maroc supportent une TVA de :", choix: ["10 %", "20 %", "7 %", "14 %"], bonne: 0, explication: "Récupérable par l'entreprise assujettie." },
      { q: "Le solde débiteur moyen est égal :", choix: ["Aux nombres débiteurs divisés par le nombre de jours de la période", "Au plus fort découvert", "À la moyenne du premier et du dernier solde", "Aux intérêts divisés par le taux"], bonne: 0, explication: "C'est la moyenne pondérée par la durée." },
      { q: "La commission de plus fort découvert se calcule sur :", choix: ["Le solde débiteur le plus élevé de la période", "Le total des débits", "Le solde moyen", "Le chiffre d'affaires"], bonne: 0, explication: "Elle s'ajoute aux intérêts et renchérit le découvert." },
      { q: "Le coût réel d'un découvert dépasse son taux nominal surtout à cause :", choix: ["Des commissions et des jours de valeur", "De la TVA récupérable", "Des soldes créditeurs", "Du taux directeur"], bonne: 0, explication: "Ils ne sont pas inclus dans le taux affiché." },
      { q: "Pour réduire le coût des jours de valeur, le trésorier peut :", choix: ["Demander aux clients de payer par virement", "Multiplier les remises de chèques", "Payer ses fournisseurs plus tôt", "Laisser des excédents sur le compte"], bonne: 0, explication: "Le virement est crédité plus vite que le chèque." },
      { q: "500 000 DH crédités avec 3 jours de valeur sur un compte débiteur à 6 % coûtent environ :", choix: ["250 DH", "90 DH", "2 500 DH", "750 DH"], bonne: 0, explication: "500 000 × 0,06 × 3 / 360 = 250." },
    ],
  },
  4: {
    titre: "Les financements à court terme",
    description: "Financements à court terme : facilité de caisse, découvert, crédit de campagne, escompte, affacturage, billets de trésorerie de la loi 35-94 et coût réel.",
    resume: md`
## L'essentiel — Les financements à court terme

- Besoin **ponctuel ou saisonnier** → court terme ; besoin **permanent** → financement stable.
- **Crédits par caisse** : facilité de caisse (quelques jours), découvert (semaines, mois), **crédit de campagne** (activité saisonnière, plan de campagne), avance sur marchandises.
- Avantages des crédits par caisse : souplesse ; inconvénients : coût élevé et **précarité**.
- **Escompte** : la banque achète l'effet non échu ; agios = escompte (jours + jours de banque) + commissions + TVA 10 % ; **avec recours**.
- Coût réel $= \frac{\text{agios HT}}{\text{nominal} - \text{agios HT}} \times \frac{360}{n}$, supérieur au taux nominal.
- **Affacturage** : financement + recouvrement + garantie ; commission d'affacturage (0,5 % à 2 % du TTC) + commission de financement ; plus cher, mais transfère le risque.
- Mobilisation des créances nées sur l'étranger, préfinancement export, avances sur marchés publics.
- **Billets de trésorerie** (loi **35-94**, document d'information visé par l'AMMC) : grandes entreprises, taux souvent inférieur au découvert.
- Critères de choix : coût réel HT, souplesse, risque, services, disponibilité.
`,
    exercices: md`
### Exercice 2 — Coût de l'affacturage

Une PME cède au factor 500 000 DH TTC de factures à échéance moyenne de 45 jours. Le factor avance 80 % des factures, prend une commission d'affacturage de 1 % du TTC et une commission de financement de 7 % l'an sur les sommes avancées (TVA ignorée).

1. Calculez le coût total de l'opération.
2. Calculez son coût réel annuel rapporté aux fonds avancés. Commentez.

<details><summary>Voir le corrigé</summary>

1. Commission d'affacturage : 500 000 × 1 % = 5 000 DH ; financement : 400 000 × 7 % × 45 / 360 = 3 500 DH ; total : **8 500 DH**.
2. Coût réel : 8 500 / 400 000 × 360 / 45 = **17 %** l'an. L'affacturage est bien plus cher qu'un escompte ou un découvert comme simple financement ; la différence rémunère la gestion du poste clients et la garantie contre les impayés. Il se justifie si ces services évitent des coûts internes (relances, contentieux) ou des pertes sur créances.

</details>

### Exercice 3 — Crédit de campagne

Une coopérative de Taroudant achète sa récolte d'agrumes en décembre pour 6 000 000 DH et la revend de janvier à avril, en encaissant 1 500 000 DH à la fin de chaque mois. Elle finance l'achat par un crédit de campagne à 6 % remboursé au fur et à mesure des ventes.

1. Calculez l'encours du crédit au début de chaque mois de janvier à avril.
2. Calculez le coût total des intérêts (mois de 30 jours).

<details><summary>Voir le corrigé</summary>

1. Encours : janvier **6 000 000**, février **4 500 000**, mars **3 000 000**, avril **1 500 000** (remboursé fin avril).
2. Intérêts : (6 000 000 + 4 500 000 + 3 000 000 + 1 500 000) × 6 % × 30 / 360 = 15 000 000 × 0,005 = **75 000 DH**. Un emprunt de 6 000 000 DH sur 4 mois sans remboursement progressif coûterait 120 000 DH : le crédit de campagne suit le besoin réel.

</details>
`,
    qcm: [
      { q: "Un besoin de financement permanent de l'exploitation doit être financé par :", choix: ["Des ressources stables", "Une facilité de caisse", "Un découvert renouvelé", "L'escompte"], bonne: 0, explication: "Les concours bancaires courants sont précaires." },
      { q: "La facilité de caisse sert à financer :", choix: ["Des décalages de quelques jours entre encaissements et décaissements", "Un investissement", "Une activité saisonnière de plusieurs mois", "Un déficit permanent"], bonne: 0, explication: "Échéances de fin de mois, paie, TVA." },
      { q: "Le crédit de campagne finance :", choix: ["Un besoin saisonnier lié à la concentration des achats ou de la production", "L'achat d'une machine", "Le capital social", "Les dividendes"], bonne: 0, explication: "Il est remboursé au rythme des ventes." },
      { q: "L'escompte est un crédit :", choix: ["Avec recours contre l'entreprise en cas d'impayé", "Sans recours", "À long terme", "Sans intérêt"], bonne: 0, explication: "La banque débite l'effet impayé." },
      { q: "Le coût réel d'un escompte est supérieur au taux nominal car :", choix: ["Les intérêts sont précomptés et s'ajoutent jours de banque et commissions", "La TVA est récupérable", "Le taux directeur est bas", "L'effet est à long terme"], bonne: 0, explication: "L'entreprise reçoit moins que le nominal." },
      { q: "Les trois services de l'affacturage sont :", choix: ["Le financement, le recouvrement et la garantie", "Le placement, l'escompte et le change", "L'assurance, la comptabilité et l'audit", "Le crédit-bail, la caution et l'aval"], bonne: 0, explication: "C'est pourquoi il coûte plus cher que l'escompte." },
      { q: "Au Maroc, les billets de trésorerie sont régis par :", choix: ["La loi 35-94", "La loi 69-21", "La loi 40-17", "La loi 09-08"], bonne: 0, explication: "Loi relative à certains titres de créances négociables." },
      { q: "Les billets de trésorerie sont surtout accessibles :", choix: ["Aux grandes entreprises connues des investisseurs", "Aux auto-entrepreneurs", "Aux ménages", "Aux TPE nouvellement créées"], bonne: 0, explication: "Ils s'émettent sur des montants élevés." },
      { q: "Effet de 100 000 DH à 90 jours, agios HT 1 500 DH : le coût réel annuel est d'environ :", choix: ["6,09 %", "6 %", "1,5 %", "5,91 %"], bonne: 0, explication: "1 500 / 98 500 × 4 ≈ 6,09 %." },
      { q: "Le préfinancement à l'export finance :", choix: ["La fabrication de marchandises destinées à l'exportation avant leur expédition", "Les créances déjà facturées à l'étranger", "L'achat de devises au comptant", "Les importations de matières premières"], bonne: 0, explication: "La mobilisation des créances nées sur l'étranger intervient après l'expédition." },
    ],
  },
  5: {
    titre: "Le placement des excédents et l'équilibrage des comptes",
    description: "Placement des excédents de trésorerie : dépôts à terme, bons du Trésor, OPCVM monétaires, escompte de règlement, équilibrage des comptes et cash pooling.",
    resume: md`
## L'essentiel — Placer et équilibrer

- Un excédent non placé a un **coût d'opportunité** ; la durée du placement doit suivre le **budget de trésorerie**.
- Supports : **dépôt à terme** (bloqué), **bons du Trésor** 13, 26, 52 semaines, **certificats de dépôt** (loi 35-94), **pensions**, **OPCVM monétaires** (très liquides), OPCVM obligataires court terme ; jamais d'actions.
- Revenu = montant × taux × jours / 360, net des frais.
- **Retenue à la source de 20 %** sur les intérêts perçus par une société : imputable sur l'IS, ce n'est pas un coût définitif.
- Critères : durée, liquidité, rendement, risque (contrepartie, taux), fiscalité.
- Priorités : rembourser les découverts, saisir les escomptes de règlement rentables.
- Escompte de règlement : $t = \frac{e}{1 - e} \times \frac{360}{n}$ (1 % pour 60 jours ≈ 6,06 %).
- **Équilibrage** : virer les excédents vers les comptes débiteurs, en **dates de valeur**, si l'économie d'agios dépasse le coût du virement ; **fiche de position** quotidienne.
- **Cash pooling** : centralisation des soldes des filiales, placement ou financement du solde net.
`,
    exercices: md`
### Exercice 2 — Escompte de règlement financé par découvert

Un fournisseur propose 2 % d'escompte pour un paiement immédiat au lieu de 90 jours. L'entreprise n'a pas d'excédent et devrait payer par découvert à 7,5 %.

1. Calculez le taux annuel équivalent de l'escompte.
2. L'entreprise doit-elle en profiter ?

<details><summary>Voir le corrigé</summary>

1. $\frac{0{,}02}{0{,}98} \times \frac{360}{90} \approx$ **8,16 %**.
2. Oui : le gain (8,16 % l'an) dépasse le coût du découvert (7,5 %). Pour une facture de 100 000 DH : escompte 2 000 DH, intérêts du découvert sur 98 000 DH pendant 90 jours ≈ 1 837,50 DH, gain net ≈ **162,50 DH** (à vérifier en tenant compte d'éventuelles commissions de découvert).

</details>

### Exercice 3 — Fiche de position

Trois comptes en valeur pour demain : banque A + 420 000 DH, banque B − 180 000 DH (découvert à 6,5 %), banque C − 90 000 DH (découvert à 7,5 %). Les soldes créditeurs ne sont pas rémunérés.

1. Quels virements d'équilibrage proposez-vous ?
2. Que faire du solde restant ?

<details><summary>Voir le corrigé</summary>

1. Couvrir d'abord le découvert le plus cher : virer **90 000 DH** de A vers C, puis **180 000 DH** de A vers B. Les deux découverts sont supprimés.
2. Il reste 420 000 − 270 000 = **150 000 DH** en A : à placer (OPCVM monétaire si la durée est courte ou incertaine), en gardant la réserve de sécurité prévue par le budget.

</details>
`,
    qcm: [
      { q: "Le principal inconvénient d'un dépôt à terme est :", choix: ["Sa faible liquidité avant l'échéance", "Son risque élevé", "Son rendement négatif", "Son imposition à 100 %"], bonne: 0, explication: "Un retrait anticipé entraîne une pénalité." },
      { q: "Les OPCVM monétaires sont appréciés des trésoriers pour :", choix: ["Leur grande liquidité et leur faible risque", "Leur rendement garanti élevé", "Leur exonération totale d'impôt", "Leur investissement en actions"], bonne: 0, explication: "Les parts sont rachetables sous un ou deux jours." },
      { q: "La retenue à la source de 20 % sur les intérêts perçus par une société :", choix: ["S'impute sur l'impôt sur les sociétés", "Est une perte définitive", "Est remboursée par la banque", "N'existe pas au Maroc"], bonne: 0, explication: "Elle n'a qu'un effet de trésorerie." },
      { q: "Escompte de règlement de 1 % pour un paiement 30 jours plus tôt : le taux annuel équivalent est d'environ :", choix: ["12,12 %", "1 %", "6,06 %", "3 %"], bonne: 0, explication: "0,01 / 0,99 × 12." },
      { q: "Avant de placer un excédent, le trésorier doit d'abord :", choix: ["Rembourser les découverts coûteux", "Acheter des actions", "Augmenter le capital", "Allonger les délais clients"], bonne: 0, explication: "Supprimer un découvert rapporte son taux." },
      { q: "L'équilibrage des comptes se raisonne en :", choix: ["Soldes en date de valeur", "Soldes comptables", "Soldes de fin d'année", "Chiffre d'affaires"], bonne: 0, explication: "Seuls les soldes en valeur portent intérêts." },
      { q: "2 000 000 DH placés à 3 % pendant 90 jours rapportent :", choix: ["15 000 DH", "60 000 DH", "5 000 DH", "1 500 DH"], bonne: 0, explication: "2 000 000 × 0,03 × 90 / 360." },
      { q: "Le cash pooling consiste à :", choix: ["Centraliser les soldes des filiales d'un groupe sur un compte central", "Placer toute la trésorerie en Bourse", "Ouvrir un compte dans chaque banque", "Supprimer les découverts par des augmentations de capital"], bonne: 0, explication: "Le groupe ne gère que le solde net." },
      { q: "La fiche de position donne :", choix: ["Les soldes en valeur prévus de chaque compte pour les jours suivants", "Le bilan de l'année", "Les ventes du mois", "Les conditions de la banque"], bonne: 0, explication: "Elle sert aux décisions quotidiennes." },
      { q: "Les actions ne sont pas un placement de trésorerie adapté car :", choix: ["Leur valeur peut baisser fortement en peu de temps", "Elles ne sont pas négociables", "Elles sont interdites aux sociétés", "Elles ne versent jamais de dividendes"], bonne: 0, explication: "Le risque de perte en capital est trop élevé." },
    ],
  },
  6: {
    titre: "La gestion des risques de change et de taux",
    description: "Risques de change et de taux : position de change, techniques internes, cours à terme, option de change, avances en devises, swap de taux et FRA.",
    resume: md`
## L'essentiel — Risques de change et de taux

- **Risque de change** : un importateur craint la **hausse** de la devise, un exportateur sa **baisse** ; risques de transaction, de consolidation, économique.
- Dirham : panier 60 % euro, 40 % dollar, bande de ± 5 %.
- **Position de change** = avoirs − engagements par devise et échéance : longue, courte, fermée ; on couvre la position **nette**.
- Techniques internes : facturer en dirhams, compensation, atermoiement et anticipation, clauses d'indexation.
- **Cours à terme** : $F = S \times \frac{1 + i_{MAD}\,n/360}{1 + i_{dev}\,n/360}$ ; **report** si $F > S$, **déport** si $F < S$ ; ce n'est pas une prévision.
- Le terme **fixe** le cours (ni perte ni gain) ; il est ferme.
- **Option** : droit sans obligation contre une **prime** ; *call* pour l'importateur (coût plafonné = exercice + prime), *put* pour l'exportateur ; adaptée aux opérations incertaines.
- **Avance en devises** : l'exportateur emprunte la devise, la cède au comptant et rembourse avec le paiement du client.
- **Risque de taux** : emprunt variable → hausse des taux ; référence **MONIA** ; **swap** (échange de taux sur un notionnel, différentiels seuls) ; **FRA** (taux futur fixé aujourd'hui).
`,
    exercices: md`
### Exercice 2 — Un exportateur d'agrumes

Un exportateur doit recevoir 200 000 USD dans 60 jours. Cours au comptant : 1 USD = 9,90 MAD ; taux à 2 mois : dirham 2,4 %, dollar 4,2 %.

1. Quel est son risque ? Calculez le cours à terme. Report ou déport ?
2. Quelle somme en dirhams la couverture à terme lui garantit-elle ?

<details><summary>Voir le corrigé</summary>

1. Il est en **position longue** en dollars : il craint une baisse du dollar. $F = 9{,}90 \times \frac{1 + 0{,}024 \times 60/360}{1 + 0{,}042 \times 60/360} = 9{,}90 \times \frac{1{,}004}{1{,}007} \approx$ **9,8705 MAD** : **déport**, car le taux du dollar est supérieur à celui du dirham.
2. 200 000 × 9,8705 ≈ **1 974 101 DH**, quel que soit le cours dans 60 jours.

</details>

### Exercice 3 — Position nette

Une entreprise doit payer dans 3 mois 400 000 EUR à un fournisseur et recevoir à la même date 250 000 EUR d'un client espagnol.

1. Calculez sa position de change en euros à 3 mois.
2. Quel montant doit-elle couvrir et comment ?

<details><summary>Voir le corrigé</summary>

1. Position : 250 000 − 400 000 = **− 150 000 EUR** : position courte.
2. Elle utilise les 250 000 EUR reçus pour payer une partie du fournisseur (compensation) et ne couvre que **150 000 EUR**, par un achat à terme ou une option d'achat d'euros.

</details>
`,
    qcm: [
      { q: "Un importateur qui doit payer en euros dans 3 mois craint :", choix: ["Une appréciation de l'euro face au dirham", "Une dépréciation de l'euro", "Une baisse des taux du dirham", "Une hausse de ses ventes"], bonne: 0, explication: "Il lui faudrait plus de dirhams pour payer." },
      { q: "Une position de change courte signifie :", choix: ["Des engagements supérieurs aux avoirs dans la devise", "Des avoirs supérieurs aux engagements", "L'absence de risque", "Une échéance inférieure à un mois"], bonne: 0, explication: "L'entreprise perd si la devise monte." },
      { q: "Le cours à terme d'une devise dépend principalement :", choix: ["De l'écart de taux d'intérêt entre les deux monnaies", "Des prévisions des économistes", "Du solde commercial du mois", "Du taux de TVA"], bonne: 0, explication: "Parité des taux d'intérêt couverte." },
      { q: "Si le taux d'intérêt du dirham est inférieur à celui du dollar, le dollar cote à terme :", choix: ["Un déport", "Un report", "Au pair", "Une prime"], bonne: 0, explication: "F < S." },
      { q: "Le principal inconvénient de la couverture à terme est :", choix: ["Elle supprime aussi le gain en cas d'évolution favorable", "Elle ne couvre pas le risque", "Elle exige une prime élevée", "Elle n'est pas autorisée au Maroc"], bonne: 0, explication: "Le cours est fixé dans les deux sens." },
      { q: "L'acheteur d'une option de change paie :", choix: ["Une prime", "Un report", "Un déport", "Une commission de plus fort découvert"], bonne: 0, explication: "C'est le prix du droit sans obligation." },
      { q: "Pour une réponse à un appel d'offres international incertaine, la couverture la plus adaptée est :", choix: ["L'option de change", "Le change à terme", "L'absence de couverture", "L'escompte"], bonne: 0, explication: "Si l'opération n'a pas lieu, seule la prime est perdue." },
      { q: "Dans un swap de taux :", choix: ["Seuls les différentiels d'intérêts sont échangés", "Les capitaux sont échangés à l'échéance", "La banque centrale garantit l'opération", "L'entreprise vend des devises"], bonne: 0, explication: "Le capital reste notionnel." },
      { q: "Un emprunteur à taux variable qui craint une hausse des taux peut :", choix: ["Conclure un swap où il paie un taux fixe et reçoit le taux variable", "Acheter une option de vente de devises", "Allonger ses délais clients", "Placer en OPCVM monétaire"], bonne: 0, explication: "Son coût devient fixe." },
      { q: "Cours au comptant 10,00, taux dirham 3 %, taux devise 1 %, 180 jours : le cours à terme est d'environ :", choix: ["10,0995", "9,90", "10,30", "10,00"], bonne: 0, explication: "10 × 1,015 / 1,005 ≈ 10,0995." },
    ],
  },
};

export default chapitres;
