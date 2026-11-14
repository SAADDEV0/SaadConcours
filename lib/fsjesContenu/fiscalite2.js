// Fiscalité des Entreprises 2 (S6, filière Gestion financière et fiscale) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "L'impôt sur le revenu : champ d'application et revenu global",
    description: "IR au Maroc (CGI 2026) : domicile fiscal, six catégories de revenus, taux libératoires, revenu global imposable, déductions, barème et charges de famille.",
    resume: md`
## L'essentiel — L'IR et le revenu global

- L'IR frappe les **personnes physiques** et les sociétés de personnes n'ayant pas opté pour l'IS ; il est **annuel**, catégoriel puis global, et **progressif**.
- **Domicile fiscal** au Maroc si l'un des trois critères est rempli : foyer permanent, centre des intérêts économiques, plus de **183 jours** de séjour sur 365 jours.
- Résident : revenus marocains **et** étrangers ; non-résident : revenus de **source marocaine**.
- Six catégories : professionnels, agricoles, salariaux, fonciers, capitaux mobiliers, autres revenus et gains.
- **RGI** = somme des revenus nets catégoriels, **hors** revenus à taux libératoire (dividendes 11,25 %, intérêts d'un particulier 30 %, profits fonciers 20 %…).
- Déductions : dons sans plafond ; intérêts du prêt de l'**habitation principale** et primes de retraite, chacun dans la limite de **10 % du RGI**.
- $IR = \text{revenu net imposable} \times \text{taux} - \text{somme à déduire}$ (0 % jusqu'à 40 000 DH ; 37 % au-delà de 180 000 DH, somme à déduire 27 400 DH).
- Charges de famille 2026 : **600 DH** par personne, plafond **3 600 DH** (500 DH et 3 000 DH jusqu'en 2025).
- Déclaration : avant le **1ᵉʳ mars** (revenus non professionnels), avant le **1ᵉʳ mai** (RNR et RNS).
- Dispense : salarié d'un seul employeur, revenus uniquement libératoires, loyers soumis à l'option de 20 %.
`,
    exercices: md`
### Exercice 2 — Résident ou non-résident ?

Pour chaque personne, dites si elle a son domicile fiscal au Maroc en 2026 et sur quels revenus elle y est imposable :
1. Mme Hind, cadre à Paris, a passé 200 jours au Maroc en 2026 pour s'occuper de ses parents ; elle loue un appartement à Paris.
2. M. Karim travaille 10 mois par an sur des chantiers au Qatar ; son épouse et ses enfants vivent dans leur maison d'Oujda.
3. M. Pierre, retraité français, possède un appartement loué à Agadir mais vit toute l'année à Lyon.
4. Mme Salma, informaticienne, vit et travaille à Tanger et détient des actions d'une société espagnole.

<details><summary>Voir le corrigé</summary>

1. Plus de **183 jours** de séjour : domicile fiscal au Maroc ; imposable sur l'ensemble de ses revenus, marocains et étrangers, sous réserve de la convention franco-marocaine.
2. Son **foyer d'habitation permanent** est à Oujda : domicile fiscal au Maroc, même s'il séjourne peu au Maroc ; imposable sur ses revenus mondiaux, sous réserve de la convention avec le Qatar.
3. Aucun critère n'est rempli : non-résident. Il est imposable au Maroc sur ses seuls revenus de source marocaine, ici les loyers de l'appartement d'Agadir.
4. Domicile fiscal au Maroc : imposable sur tous ses revenus, y compris les dividendes de source étrangère (taux spécifique de 15 % sur les revenus bruts de capitaux mobiliers de source étrangère).

</details>

### Exercice 3 — Le plafond des charges de famille

M. Driss, commerçant à Béni Mellal, a un revenu net imposable de 95 000 DH en 2026. Il est marié, son épouse est sans revenus, et ils ont six enfants âgés de 3 à 20 ans, tous sans revenus.

Calculez son IR net de 2026. Combien aurait-il obtenu de réduction avec les règles de 2025 ?

<details><summary>Voir le corrigé</summary>

IR brut : 95 000 DH est dans la tranche de 80 001 à 100 000 DH (30 %, somme à déduire 18 000 DH).

$$95\,000 \times 30\,\% - 18\,000 = 28\,500 - 18\,000 = 10\,500\ \text{DH}$$

Personnes à charge : l'épouse et six enfants, soit 7 personnes ; $7 \times 600 = 4\,200$ DH, ramenés au **plafond de 3 600 DH**.

$$IR\ \text{net} = 10\,500 - 3\,600 = \mathbf{6\,900\ DH}$$

Avec les règles de 2025 : $7 \times 500 = 3\,500$ DH, plafonnés à 3 000 DH ; la réduction aurait été de 3 000 DH, soit 600 DH de moins.

</details>
`,
    qcm: [
      { q: "Une personne a son domicile fiscal au Maroc lorsque ses séjours y dépassent :", choix: ["90 jours sur 365", "183 jours sur 365", "200 jours par année civile", "6 mois consécutifs"], bonne: 1, explication: "Article 23 du CGI ; ce critère est alternatif avec le foyer permanent et le centre des intérêts économiques." },
      { q: "Un non-résident est imposable au Maroc :", choix: ["Sur tous ses revenus mondiaux", "Sur ses seuls revenus de source marocaine", "Uniquement sur ses salaires", "Jamais"], bonne: 1, explication: "Seul le résident est imposé sur ses revenus de source étrangère." },
      { q: "Les dividendes perçus par un particulier en 2026 :", choix: ["Entrent dans le revenu global", "Subissent une retenue libératoire de 11,25 %", "Sont exonérés", "Sont taxés à 30 %"], bonne: 1, explication: "Le taux est de 11,25 % pour les montants distribués en 2026 et 10 % à partir de 2027." },
      { q: "Les intérêts du prêt de l'habitation principale sont déductibles dans la limite de :", choix: ["5 % du revenu global imposable", "10 % du revenu global imposable", "20 % du revenu global imposable", "30 000 DH par an"], bonne: 1, explication: "Article 28-II du CGI." },
      { q: "Pour les revenus de 2026, la réduction pour charges de famille est de :", choix: ["360 DH par personne", "500 DH par personne", "600 DH par personne", "1 000 DH par personne"], bonne: 2, explication: "Loi de finances 2026, avec un plafond de 3 600 DH." },
      { q: "Le plafond annuel de la réduction pour charges de famille en 2026 est de :", choix: ["2 160 DH", "3 000 DH", "3 600 DH", "6 000 DH"], bonne: 2, explication: "Soit six personnes à 600 DH." },
      { q: "Un enfant reste à charge pour l'IR jusqu'à l'âge de :", choix: ["18 ans", "21 ans", "25 ans", "27 ans"], bonne: 3, explication: "Sauf enfant infirme, pour qui la limite d'âge ne s'applique pas." },
      { q: "Un médecin soumis au résultat net réel dépose sa déclaration du revenu global avant le :", choix: ["1er février", "1er mars", "1er avril", "1er mai"], bonne: 3, explication: "Le 1er mars vaut pour les revenus autres que professionnels." },
      { q: "Est dispensé de la déclaration annuelle du revenu global :", choix: ["Le salarié payé par un seul employeur qui retient l'IR", "Le commerçant au résultat net simplifié", "Le propriétaire qui loue à des particuliers", "L'avocat au résultat net réel"], bonne: 0, explication: "Article 86 du CGI, sauf s'il demande des déductions." },
      { q: "Un revenu net imposable de 184 000 DH supporte un IR brut de :", choix: ["40 680 DH", "68 080 DH", "39 200 DH", "42 160 DH"], bonne: 0, explication: "184 000 x 37 % - 27 400 = 40 680 DH." },
    ],
},
  2: {
    titre: "Les revenus professionnels : résultat net réel et simplifié",
    description: "Revenus professionnels à l'IR : quatre régimes, seuils 2026, résultat net réel, résultat net simplifié, abattement CGA de 15 %, options et cotisation minimale.",
    resume: md`
## L'essentiel — RNR et RNS

- Revenus professionnels : commerce, industrie, artisanat, promoteur, lotisseur, marchand de biens, professions libérales, revenus répétitifs non classés.
- Quatre régimes : **RNR** (droit commun), **RNS**, **CPU**, **auto-entrepreneur** (sur option).
- Seuils du RNS et de la CPU : **2 000 000 DH** (commerce, industrie, artisanat) ; **500 000 DH** (services, professions libérales).
- **RNR** = résultat fiscal calculé comme à l'IS : réintégrations, déductions, amortissements, provisions, déficit reportable **4 ans** (amortissements sans limite).
- **RNS** = mêmes règles, mais **sans provisions** ni **déficit reportable**, exercice clos au **31 décembre**.
- Adhésion à un **centre de gestion agréé** : abattement de **15 %** sur la base au RNS.
- Option conservée tant que le seuil n'est pas dépassé **deux exercices consécutifs**.
- Passage du RNR à un régime simplifié : chiffre d'affaires sous le seuil pendant **trois exercices consécutifs**.
- Cotisation minimale : **0,25 %** (0,15 % ou 4 % selon l'activité), minimum **1 500 DH**, exonération des **trois premiers exercices**.
- $CM = \max(\text{base} \times \text{taux}\,;\,1\,500)$, imputable sur l'IR ; l'excédent reste acquis au Trésor.
`,
    exercices: md`
### Exercice 2 — Quel régime possible ?

Indiquez, pour chaque contribuable individuel (chiffres d'affaires HT de 2026, stables depuis cinq ans), les régimes qu'il peut choisir :
1. Un grossiste en matériaux de construction à Settat : 2 600 000 DH.
2. Un bureau d'études en informatique à Rabat : 420 000 DH.
3. Une épicerie à Taza : 350 000 DH encaissés.
4. Un cabinet de conseil fiscal à Marrakech : 900 000 DH.
5. Un photographe à Essaouira : 150 000 DH encaissés.

<details><summary>Voir le corrigé</summary>

| N° | Activité | Régimes possibles |
|:--:|---|---|
| 1 | Commerce, 2 600 000 > 2 000 000 | RNR seulement |
| 2 | Services, 420 000 ≤ 500 000 | RNR, RNS, CPU (si AMO) ; pas l'auto-entrepreneur (> 200 000) |
| 3 | Commerce, 350 000 | RNR, RNS, CPU, auto-entrepreneur (≤ 500 000) |
| 4 | Services, 900 000 > 500 000 | RNR seulement |
| 5 | Services, 150 000 | RNR, RNS, CPU, auto-entrepreneur (≤ 200 000) |

Les régimes simplifiés supposent une option écrite et, pour la CPU et l'auto-entrepreneur, l'adhésion à la couverture sociale prévue.

</details>

### Exercice 3 — La cotisation minimale d'une quincaillerie déficitaire

M. Ali Chraibi tient une quincaillerie à Larache depuis 2021, au RNR. En 2026 : chiffre d'affaires HT 520 000 DH, autres produits d'exploitation 4 000 DH, résultat fiscal déficitaire de 20 000 DH.

1. Doit-il un IR au titre de son revenu professionnel ?
2. Calculez sa cotisation minimale.
3. Aurait-il dû une cotisation minimale s'il avait commencé son activité en 2025 ?

<details><summary>Voir le corrigé</summary>

1. Son revenu professionnel est déficitaire : aucun IR n'est dû sur ce revenu ; le déficit est reportable sur les quatre exercices suivants.
2. Base : $520\,000 + 4\,000 = 524\,000$ DH ; $524\,000 \times 0{,}25\,\% = 1\,310$ DH, inférieur au minimum : il doit **1 500 DH**.
3. Non : les contribuables à l'IR sont exonérés de cotisation minimale pendant les **trois premiers exercices** suivant le début de leur activité (2025, 2026 et 2027).

</details>
`,
    qcm: [
      { q: "Le régime de droit commun des revenus professionnels est :", choix: ["Le résultat net simplifié", "La contribution professionnelle unique", "Le résultat net réel", "L'auto-entrepreneur"], bonne: 2, explication: "Les autres régimes ne s'appliquent que sur option." },
      { q: "Le seuil du RNS pour un commerçant est de :", choix: ["500 000 DH", "1 000 000 DH", "2 000 000 DH", "10 000 000 DH"], bonne: 2, explication: "500 000 DH pour les prestataires de services." },
      { q: "Le seuil du RNS pour un prestataire de services est de :", choix: ["200 000 DH", "500 000 DH", "2 000 000 DH", "5 000 000 DH"], bonne: 1, explication: "Article 39 du CGI." },
      { q: "Au RNS, les provisions :", choix: ["Sont déductibles", "Ne sont pas déductibles", "Sont déductibles à 50 %", "Sont obligatoires"], bonne: 1, explication: "Le RNS exclut les provisions et le déficit reportable." },
      { q: "L'adhésion à un centre de gestion de comptabilité agréé donne au RNS un abattement de :", choix: ["10 %", "15 %", "25 %", "40 %"], bonne: 1, explication: "Article 38-III du CGI." },
      { q: "L'option pour le RNS est perdue lorsque le seuil est dépassé pendant :", choix: ["Un exercice", "Deux exercices consécutifs", "Trois exercices consécutifs", "Quatre exercices"], bonne: 1, explication: "Le contribuable passe alors au RNR." },
      { q: "Un contribuable au RNR peut opter pour le RNS si son chiffre d'affaires est resté sous le seuil pendant :", choix: ["Un exercice", "Deux exercices consécutifs", "Trois exercices consécutifs", "Cinq exercices"], bonne: 2, explication: "Article 43-3° du CGI." },
      { q: "Le minimum de la cotisation minimale pour un contribuable à l'IR au RNR est de :", choix: ["1 000 DH", "1 500 DH", "3 000 DH", "5 000 DH"], bonne: 1, explication: "Il est de 3 000 DH pour les sociétés à l'IS." },
      { q: "Un contribuable à l'IR est exonéré de cotisation minimale pendant :", choix: ["Les 12 premiers mois", "Les trois premiers exercices", "Les cinq premiers exercices", "Jamais"], bonne: 1, explication: "Article 144-I-C-2° du CGI." },
      { q: "Au RNR, le déficit hors amortissements est reportable sur :", choix: ["2 exercices", "4 exercices", "5 exercices", "10 exercices"], bonne: 1, explication: "La part due aux amortissements est reportable sans limite." },
    ],
},
  3: {
    titre: "Contribution professionnelle unique, auto-entrepreneur et revenus agricoles",
    description: "CPU (coefficient, taux de 10 %), auto-entrepreneur (0,5 % et 1 %), retenue de 30 % au-delà de 80 000 DH par client et exonération des revenus agricoles.",
    resume: md`
## L'essentiel — Les régimes forfaitaires et agricoles

- **CPU** : option, CA ≤ **2 000 000 DH** (commerce, industrie, artisanat) ou ≤ **500 000 DH** (services), adhésion à l'**AMO**.
- $IR_{CPU} = CA \times \text{coefficient} \times 10\,\% + \text{droit complémentaire}$ ; le coefficient dépend de la profession.
- Plus-values CPU (hors terrains et constructions) : **20 %** libératoire ; amortissements réputés pratiqués : 10 % (matériel, mobilier), 20 % (véhicules).
- 2026 : abattement de **50 %** sur la plus-value des éléments incorporels du fonds, pour un contribuable CPU de **65 ans** et plus sans retraite qui cesse son activité (limite 1 000 000 DH).
- **Auto-entrepreneur** : CA **encaissé** ≤ **500 000 DH** (commerce) à **0,5 %** ; ≤ **200 000 DH** (services) à **1 %** ; taux libératoires + droit complémentaire.
- Déclaration et paiement de l'auto-entrepreneur : **mensuels ou trimestriels**, avant la fin du mois suivant.
- Plafond dépassé **deux années consécutives** : perte du régime, passage au RNR (sauf option RNS ou CPU) au 1ᵉʳ janvier suivant.
- Prestations à un **même client** au-delà de **80 000 DH** (CPU ou auto-entrepreneur) : retenue de **30 %** sur le surplus, opérée par le client.
- Revenus agricoles : **exonérés** si CA < **5 000 000 DH** ; sinon forfait ou RNR (obligatoire au-delà de 2 000 000 DH).
`,
    exercices: md`
### Exercice 2 — Exploitants agricoles du Souss et du Gharb

Pour chaque exploitant individuel, dites s'il est imposable à l'IR au titre de ses revenus agricoles de 2026 :
1. Un producteur d'agrumes de Berkane : CA 3 200 000 DH en 2024, 2025 et 2026.
2. Un éleveur de volailles du Gharb : CA 6 500 000 DH en 2026.
3. Un maraîcher de Chtouka : CA 5 400 000 DH en 2024, 4 600 000 DH en 2025 et 4 700 000 DH en 2026.
4. Une coopérative laitière qui transforme le lait en yaourts dans une usine moderne.

<details><summary>Voir le corrigé</summary>

1. CA < 5 000 000 DH depuis au moins trois exercices : **exonéré**.
2. CA ≥ 5 000 000 DH : **imposable**, et comme son CA dépasse 2 000 000 DH, il relève obligatoirement du **résultat net réel**.
3. Son CA est repassé sous 5 000 000 DH en 2025, mais l'exonération n'est accordée que si le CA est resté inférieur à ce montant pendant **trois exercices consécutifs** (2025, 2026, 2027) : imposable en 2026, exonéré à partir de 2027 si le CA reste sous le seuil.
4. La transformation par des **moyens industriels** n'est pas une activité agricole au sens de l'article 46 : ces bénéfices ne sont pas des revenus agricoles (les coopératives ont par ailleurs un régime propre).

</details>

### Exercice 3 — La plus-value d'un artisan à la CPU

M. Saïd, menuisier à Safi imposé à la CPU depuis 2021, vend en janvier 2026 une machine achetée 60 000 DH en janvier 2022, pour 45 000 DH. Il n'a jamais tenu de comptabilité.

Calculez la plus-value imposable et l'impôt correspondant.

<details><summary>Voir le corrigé</summary>

Sous la CPU, on retient des amortissements **réputés pratiqués** de 10 % par an pour le matériel, de 2022 à 2025, soit 4 années : $60\,000 \times 10\,\% \times 4 = 24\,000$ DH.

Valeur nette : $60\,000 - 24\,000 = 36\,000$ DH. Plus-value : $45\,000 - 36\,000 = 9\,000$ DH.

$$\text{Impôt} = 9\,000 \times 20\,\% = \mathbf{1\,800\ DH}$$

Ce taux de 20 % est libératoire ; la plus-value n'entre pas dans la base CPU.

</details>
`,
    qcm: [
      { q: "Sous la CPU, l'IR est calculé en appliquant le taux de 10 % :", choix: ["Au chiffre d'affaires", "Au chiffre d'affaires multiplié par le coefficient de la profession", "Au bénéfice comptable", "À la valeur locative"], bonne: 1, explication: "Le coefficient représente la marge nette moyenne de la profession." },
      { q: "L'option pour la CPU est subordonnée à l'adhésion :", choix: ["À un centre de gestion agréé", "À l'assurance maladie obligatoire de base", "À une chambre de commerce", "À l'ordre des experts-comptables"], bonne: 1, explication: "Article 41-II-B du CGI." },
      { q: "Le plafond de chiffre d'affaires d'un auto-entrepreneur prestataire de services est de :", choix: ["80 000 DH", "200 000 DH", "500 000 DH", "2 000 000 DH"], bonne: 1, explication: "500 000 DH pour les activités commerciales, industrielles et artisanales." },
      { q: "Le taux de l'IR d'un auto-entrepreneur commerçant est de :", choix: ["0,25 %", "0,5 %", "1 %", "10 %"], bonne: 1, explication: "1 % pour les prestataires de services." },
      { q: "L'auto-entrepreneur est imposé sur son chiffre d'affaires :", choix: ["Facturé", "Encaissé", "Prévisionnel", "Multiplié par un coefficient"], bonne: 1, explication: "Article 42 bis du CGI." },
      { q: "Un prestataire à la CPU facture 110 000 DH à un même client. La retenue opérée par le client est de :", choix: ["33 000 DH", "9 000 DH", "11 000 DH", "3 000 DH"], bonne: 1, explication: "30 % du surplus de 30 000 DH." },
      { q: "Un auto-entrepreneur perd son régime lorsque son plafond est dépassé :", choix: ["Une seule année", "Deux années consécutives", "Trois années consécutives", "Quatre années"], bonne: 1, explication: "Il ne peut plus ensuite revenir à ce régime." },
      { q: "Les plus-values de cession du matériel d'un contribuable à la CPU sont taxées à :", choix: ["10 %", "15 %", "20 %", "Au barème"], bonne: 2, explication: "Article 73-II-F-11°, taux libératoire." },
      { q: "Un exploitant agricole est exonéré de manière permanente lorsque son chiffre d'affaires agricole est inférieur à :", choix: ["2 000 000 DH", "3 000 000 DH", "5 000 000 DH", "10 000 000 DH"], bonne: 2, explication: "Article 47 du CGI." },
      { q: "L'auto-entrepreneur qui a opté pour la déclaration trimestrielle déclare et paie :", choix: ["Avant la fin du mois qui suit le trimestre", "Avant le 1er mars de l'année suivante", "Dans les 15 jours du trimestre", "Une fois par an"], bonne: 0, explication: "Article 82 bis du CGI." },
    ],
},
  4: {
    titre: "Les revenus fonciers",
    description: "Revenus fonciers au Maroc : loyers imposables, abattement de 40 %, retenue à la source de 10 % ou 15 %, option libératoire de 20 % et déclaration annuelle.",
    resume: md`
## L'essentiel — Les revenus fonciers

- Imposables : loyers **encaissés** d'immeubles bâtis ou non, de propriétés agricoles, valeur locative des biens prêtés gratuitement, indemnités d'éviction, distributions d'OPCI.
- Exclue : la valeur locative d'un logement prêté à ses **ascendants ou descendants**, à l'État, aux hôpitaux publics, aux œuvres de bienfaisance.
- $\text{Brut} = \text{loyers} + \text{charges du propriétaire payées par le locataire} - \text{charges du locataire payées par le propriétaire}$.
- $\text{Net} = \text{Brut} \times 60\,\%$ : abattement forfaitaire de **40 %**, aucune charge réelle en plus.
- Droit commun : revenu net ajouté au **revenu global**, barème, déclaration avant le **1ᵉʳ mars**.
- Retenue à la source par les **personnes morales** et les professionnels au **RNR/RNS** : **10 %** (brut < 120 000 DH), **15 %** (≥ 120 000 DH) ; dispense si ≤ **40 000 DH** par an et par propriétaire.
- Cette retenue est **imputable** sur l'IR du barème, pas libératoire.
- **Option** électronique pour un taux libératoire de **20 % du brut** sur les loyers soumis à la retenue ; plus de déclaration pour ces loyers.
- L'option est intéressante si le taux marginal dépasse environ **33 %** ($20\,\% / 60\,\%$), donc dans les tranches de 34 % et 37 %.
`,
    exercices: md`
### Exercice 2 — Le revenu brut d'une villa à Ifrane

M. Mounir loue une villa à Ifrane 6 000 DH par mois. Le bail met à la charge du locataire la réfection de la toiture (grosse réparation), payée 8 000 DH en 2026. Le loyer comprend la consommation d'eau, que M. Mounir paie lui-même : 2 400 DH pour l'année.

Calculez le revenu foncier brut et le revenu foncier net de 2026.

<details><summary>Voir le corrigé</summary>

Loyers : $6\,000 \times 12 = 72\,000$ DH.

$$\text{Brut} = 72\,000 + 8\,000 - 2\,400 = \mathbf{77\,600\ DH}$$

La grosse réparation incombe normalement au propriétaire : payée par le locataire, elle s'ajoute au loyer. L'eau est une charge du locataire payée par le propriétaire : elle se retranche.

$$\text{Net} = 77\,600 \times 60\,\% = \mathbf{46\,560\ DH}$$

</details>

### Exercice 3 — Qui doit retenir ?

Pour chaque location de 2026, indiquez la retenue à la source à opérer par le locataire :
1. Un cabinet dentaire (RNR) loue un local 3 000 DH par mois à M. Jamal.
2. Une SA loue un entrepôt 15 000 DH par mois à Mme Rim.
3. Un étudiant loue un studio 2 500 DH par mois à Mme Rim.
4. Une association loue des bureaux 9 000 DH par mois à M. Ahmed, qui a opté pour le taux libératoire.

<details><summary>Voir le corrigé</summary>

| N° | Brut annuel | Retenue |
|:--:|---:|---|
| 1 | 36 000 DH | Aucune : brut annuel ≤ 40 000 DH, dispense |
| 2 | 180 000 DH | 15 % (≥ 120 000 DH) : 27 000 DH |
| 3 | 30 000 DH | Aucune : le locataire est un particulier |
| 4 | 108 000 DH | Option : 20 % du brut, soit 21 600 DH, libératoire |

Pour le cas 4, l'association est une personne morale de droit privé, tenue à la retenue ; sans l'option, le taux aurait été de 10 % (brut < 120 000 DH).

</details>
`,
    qcm: [
      { q: "L'abattement forfaitaire applicable aux revenus fonciers des immeubles est de :", choix: ["20 %", "30 %", "40 %", "60 %"], bonne: 2, explication: "Article 64-II du CGI ; il couvre toutes les charges." },
      { q: "La valeur locative d'un appartement prêté gratuitement à sa mère pour y habiter :", choix: ["Est imposable", "Est exclue du champ de l'impôt", "Est taxée à 10 %", "Est imposable à 50 %"], bonne: 1, explication: "Article 62-I : exclusion pour les ascendants et descendants." },
      { q: "Une SARL qui paie 150 000 DH de loyers par an à un particulier retient :", choix: ["10 %", "15 %", "20 %", "Rien"], bonne: 1, explication: "Le brut annuel atteint 120 000 DH." },
      { q: "Le locataire est dispensé de retenue lorsque le loyer brut annuel versé à un propriétaire ne dépasse pas :", choix: ["30 000 DH", "40 000 DH", "60 000 DH", "120 000 DH"], bonne: 1, explication: "Article 160 bis du CGI." },
      { q: "La retenue de 10 % ou 15 % sur les loyers est :", choix: ["Libératoire", "Imputable sur l'IR calculé au barème", "Remboursée au locataire", "Une taxe locale"], bonne: 1, explication: "Seule l'option de 20 % est libératoire." },
      { q: "Le taux libératoire sur option s'applique :", choix: ["Au revenu net après 40 %", "Au revenu brut", "Au revenu global", "À la valeur locative cadastrale"], bonne: 1, explication: "20 % du brut, sans abattement." },
      { q: "Un propriétaire sans option déclare ses revenus fonciers avant le :", choix: ["1er février", "1er mars", "1er avril", "1er mai"], bonne: 1, explication: "Ce sont des revenus autres que professionnels." },
      { q: "Qui ne doit jamais opérer de retenue sur les loyers ?", choix: ["Une société anonyme", "Un commerçant au RNS", "Un particulier qui loue son logement", "Une administration publique"], bonne: 2, explication: "La retenue vise les personnes morales et les professionnels au RNR ou au RNS." },
      { q: "L'option pour le taux de 20 % est en général avantageuse pour un contribuable dont le taux marginal est de :", choix: ["10 %", "20 %", "30 %", "37 %"], bonne: 3, explication: "37 % x 60 % = 22,2 % du brut, plus que 20 %." },
      { q: "Des loyers de 90 000 DH bruts donnent un revenu foncier net de :", choix: ["36 000 DH", "54 000 DH", "72 000 DH", "90 000 DH"], bonne: 1, explication: "90 000 x 60 % = 54 000 DH." },
    ],
},
  5: {
    titre: "Les revenus et profits de capitaux mobiliers",
    description: "Dividendes à 11,25 % en 2026, intérêts à 20 % ou 30 %, profits de cession d'actions à 15 % ou 20 %, coût moyen pondéré, moins-values et plans d'épargne.",
    resume: md`
## L'essentiel — Capitaux mobiliers

- **Revenus** : dividendes et assimilés, intérêts, revenus de Sukuk ; **profits** : plus-values de cession de titres.
- Dividendes distribués en 2026 : retenue **libératoire** de **11,25 %** (12,5 % en 2025, 10 % à partir de 2027).
- Intérêts : **30 %** libératoire pour un particulier ; **20 %** imputable (avec restitution) pour un professionnel au RNR/RNS.
- Revenus de source étrangère : **15 %** du brut ; profits de source étrangère : **20 %**.
- $\text{Profit} = (\text{prix de cession} - \text{frais}) - (\text{prix d'acquisition} + \text{frais})$, avec le **coût moyen pondéré**.
- Taux sur les profits : **15 %** (actions cotées, OPCVM actions ≥ 60 %) ; **20 %** (non cotées, obligations, autres OPCVM).
- Moins-values imputables sur les plus-values de **même nature**, reportables jusqu'à la fin de la **4ᵉ année** suivante.
- Exonération si le total des cessions de l'année ≤ **30 000 DH** ; donations familiales exonérées.
- **PEA et PEE** : exonérés si versements ≤ **2 000 000 DH** conservés **5 ans** ; retrait anticipé taxé à 15 %.
- Épargne logement (≤ 400 000 DH, 3 ans) et éducation (≤ 300 000 DH par enfant, 5 ans) : intérêts exonérés.
`,
    exercices: md`
### Exercice 2 — Coût moyen pondéré et report de moins-value

Mme Imane, pharmacienne salariée à Oujda, a acheté des actions cotées d'une même société : 200 actions à 150 DH en 2023, 300 actions à 180 DH en 2024. En 2025, elle a vendu 300 actions à 140 DH (moins-value). En 2026, elle vend les 200 actions restantes à 230 DH. Elle n'a réalisé aucune autre cession. Frais négligés.

1. Calculez la moins-value de 2025.
2. Calculez le profit imposable de 2026 et l'impôt.

<details><summary>Voir le corrigé</summary>

$$CMP = \frac{200 \times 150 + 300 \times 180}{500} = \frac{30\,000 + 54\,000}{500} = 168\ \text{DH}$$

1. 2025 : $300 \times (140 - 168) = -8\,400$ DH. Moins-value de **8 400 DH**, sans plus-value à compenser en 2025 : reportable jusqu'à la fin de 2029.
2. 2026 : les titres restants gardent le CMP de 168 DH. Profit : $200 \times (230 - 168) = 12\,400$ DH ; après imputation de la moins-value : $12\,400 - 8\,400 = 4\,000$ DH. Cessions de l'année : $200 \times 230 = 46\,000$ DH > 30 000 DH : imposable.

$$\text{Impôt} = 4\,000 \times 15\,\% = \mathbf{600\ DH}$$

</details>

### Exercice 3 — Le plan d'épargne en actions

M. Anas a ouvert un PEA en 2023 et y a versé au total 300 000 DH. En 2026, il retire tout ; la valeur liquidative du plan est de 360 000 DH.

1. Calculez l'impôt dû sur ce retrait.
2. Que se serait-il passé s'il avait attendu 2028 pour retirer ?

<details><summary>Voir le corrigé</summary>

1. Retrait **avant 5 ans** : le plan est clos et le profit net est taxé à 15 %. Profit : $360\,000 - 300\,000 = 60\,000$ DH ; impôt : $60\,000 \times 15\,\% = \mathbf{9\,000\ DH}$.
2. En 2028, le plan aurait 5 ans et les versements (300 000 DH) restent sous le plafond de 2 000 000 DH : revenus et profits **exonérés**.

</details>
`,
    qcm: [
      { q: "Le taux de la retenue sur les dividendes distribués en 2026 à une personne physique est de :", choix: ["10 %", "11,25 %", "12,5 %", "15 %"], bonne: 1, explication: "Article 247-XXXVII-C du CGI ; 10 % à partir de 2027." },
      { q: "Un retraité perçoit des intérêts sur un dépôt à terme. Le taux applicable est de :", choix: ["15 % libératoire", "20 % imputable", "30 % libératoire", "Le barème"], bonne: 2, explication: "Taux des personnes physiques hors RNR et RNS." },
      { q: "Pour un commerçant au RNR, la retenue sur les intérêts est de :", choix: ["10 % libératoire", "20 % imputable", "30 % libératoire", "11,25 %"], bonne: 1, explication: "Elle s'impute sur l'IR avec droit à restitution." },
      { q: "Le profit de cession d'actions cotées en bourse est taxé à :", choix: ["10 %", "15 %", "20 %", "30 %"], bonne: 1, explication: "20 % pour les actions non cotées." },
      { q: "Le profit de cession d'obligations est taxé à :", choix: ["15 %", "20 %", "30 %", "Au barème"], bonne: 1, explication: "Article 73-II-F-2° du CGI." },
      { q: "Des titres de même nature achetés à des prix différents sont évalués :", choix: ["Au prix du dernier achat", "Au premier entré premier sorti", "Au coût moyen pondéré", "Au cours du jour de la cession"], bonne: 2, explication: "Article 70 du CGI." },
      { q: "Une moins-value sur titres non imputée est reportable jusqu'à la fin de la :", choix: ["Deuxième année suivante", "Quatrième année suivante", "Cinquième année suivante", "Dixième année suivante"], bonne: 1, explication: "Elle s'impute sur les plus-values de même nature." },
      { q: "Le profit de cession est exonéré lorsque le total des cessions de l'année ne dépasse pas :", choix: ["20 000 DH", "30 000 DH", "40 000 DH", "140 000 DH"], bonne: 1, explication: "Article 68-II du CGI." },
      { q: "Les profits d'un PEA sont exonérés si les versements sont conservés au moins :", choix: ["2 ans", "3 ans", "5 ans", "8 ans"], bonne: 2, explication: "Et si les versements ne dépassent pas 2 000 000 DH." },
      { q: "La cession d'actions d'une société à prépondérance immobilière non cotée relève :", choix: ["Des profits de capitaux mobiliers", "Des profits fonciers", "Des revenus professionnels", "Des droits de timbre seulement"], bonne: 1, explication: "Article 61-II et 66-II du CGI." },
    ],
},
  6: {
    titre: "Les profits fonciers",
    description: "Profits fonciers au Maroc : cessions imposables, exonération de l'habitation principale, prix d'acquisition réévalué, taux de 20 % et minimum de 3 % du prix.",
    resume: md`
## L'essentiel — Les profits fonciers

- Imposables : ventes d'immeubles et de droits réels, expropriations, apports en société, cessions de parts de sociétés immobilières transparentes ou à **prépondérance immobilière** non cotées, échanges, partages avec soulte, donations non exonérées.
- Non imposés : annulation judiciaire, résiliation dans les **24 heures**, réméré exercé dans les **3 ans**, profits compris dans les revenus professionnels.
- Exonérés : cessions annuelles ≤ **140 000 DH** ; **habitation principale** depuis **5 ans** (non louée) ; logement social depuis **4 ans** ; donations entre ascendants, descendants, époux, frères et sœurs.
- $\text{Profit} = (\text{PC} - \text{frais de cession}) - (\text{PA} + \text{frais} + \text{investissements} + \text{intérêts}) \times \text{coefficient}$.
- Frais d'acquisition : **forfait de 15 %** du prix d'acquisition, sauf justification supérieure.
- Héritage : valeur vénale au décès ; taxation d'office sans information : prix de cession − 20 %.
- Taux : **20 %** libératoire.
- Minimum : **3 % du prix de cession**, même sans profit ; il l'emporte si le profit est inférieur à 15 % du prix.
- Habitation principale vendue plus de **4 000 000 DH** : 3 % sur la fraction au-delà de 4 000 000 DH.
- Déclaration et paiement dans les **30 jours** suivant la cession.
`,
    exercices: md`
### Exercice 2 — Une villa reçue en héritage à Meknès

M. Hamza a hérité en 2018 d'une villa à Meknès ; sa valeur vénale au jour du décès, inscrite à l'inventaire, était de 2 000 000 DH. Il la vend en 2026 au prix de 2 600 000 DH, frais de cession justifiés 50 000 DH. Coefficient de réévaluation donné : 1,05. On ne retient pas de frais d'acquisition.

Calculez l'impôt dû.

<details><summary>Voir le corrigé</summary>

Prix d'acquisition : la valeur vénale au jour du décès, 2 000 000 DH, réévaluée : $2\,000\,000 \times 1{,}05 = 2\,100\,000$ DH.

$$\text{Profit} = (2\,600\,000 - 50\,000) - 2\,100\,000 = 450\,000\ \text{DH}$$

- Impôt à 20 % : $450\,000 \times 20\,\% = 90\,000$ DH ;
- Minimum : $2\,600\,000 \times 3\,\% = 78\,000$ DH.

L'impôt à 20 % est plus élevé : **90 000 DH**.

</details>

### Exercice 3 — Exonéré ou imposable ?

Dites si chaque opération de 2026 est exonérée :
1. Mme Kawtar vend un terrain de 120 m² à Khénifra pour 110 000 DH ; c'est sa seule cession de l'année.
2. M. Ilyas donne un appartement à son frère.
3. M. Rachid vend l'appartement qu'il habite depuis 4 ans et demi (logement non social).
4. Mme Sanaa vend le logement social qu'elle habite depuis 4 ans.
5. M. Tarik vend la maison qu'il habitait depuis 10 ans mais qu'il loue depuis 2024.

<details><summary>Voir le corrigé</summary>

1. **Exonérée** : total des cessions de l'année ≤ 140 000 DH.
2. **Exonérée** : donation entre frères (elle reste soumise aux droits d'enregistrement, chapitre 7).
3. **Imposable** : l'exonération exige **5 ans** d'occupation ; le minimum de 3 % s'applique si le profit est faible.
4. **Exonérée** : logement social occupé à titre d'habitation principale depuis au moins 4 ans.
5. **Imposable** : un logement **loué** n'est plus considéré comme habitation principale.

</details>
`,
    qcm: [
      { q: "Le taux de l'IR sur les profits fonciers est de :", choix: ["15 %", "20 %", "30 %", "Le barème"], bonne: 1, explication: "Article 73-II-F-6° du CGI, libératoire." },
      { q: "Le minimum d'imposition sur un profit foncier est égal à :", choix: ["1 % du prix de cession", "3 % du prix de cession", "3 % du profit", "5 % du prix d'acquisition"], bonne: 1, explication: "Il est dû même en l'absence de profit." },
      { q: "L'habitation principale est exonérée si elle est occupée depuis au moins :", choix: ["2 ans", "4 ans", "5 ans", "8 ans"], bonne: 2, explication: "4 ans pour le logement social." },
      { q: "Les frais d'acquisition non justifiés sont retenus forfaitairement à :", choix: ["10 %", "15 %", "20 %", "40 %"], bonne: 1, explication: "Article 65-II du CGI." },
      { q: "Le coefficient de réévaluation s'applique :", choix: ["Au prix de cession", "Au prix d'acquisition augmenté des frais et investissements", "Au profit net", "À l'impôt"], bonne: 1, explication: "Il neutralise l'inflation sur le coût du bien." },
      { q: "Sont exonérées les cessions d'immeubles dont le total annuel ne dépasse pas :", choix: ["30 000 DH", "100 000 DH", "140 000 DH", "300 000 DH"], bonne: 2, explication: "Article 63-II-A du CGI." },
      { q: "Le cédant déclare et paie l'impôt sur le profit foncier dans un délai de :", choix: ["15 jours", "30 jours", "60 jours", "3 mois"], bonne: 1, explication: "Article 83 du CGI." },
      { q: "Une habitation principale exonérée vendue 5 000 000 DH supporte un minimum de :", choix: ["0 DH", "30 000 DH", "150 000 DH", "120 000 DH"], bonne: 1, explication: "3 % de la fraction au-delà de 4 000 000 DH, soit 1 000 000 DH." },
      { q: "Pour un immeuble reçu par héritage, le prix d'acquisition est :", choix: ["Nul", "La valeur vénale au jour du décès", "Le prix payé par le défunt", "La valeur cadastrale"], bonne: 1, explication: "Valeur inscrite à l'inventaire ou déclarée." },
      { q: "La vente d'un immeuble par un promoteur immobilier dans le cadre de son activité relève :", choix: ["Des profits fonciers", "Des revenus professionnels", "Des revenus fonciers", "Des capitaux mobiliers"], bonne: 1, explication: "Article 62-II du CGI." },
    ],
},
  7: {
    titre: "Les droits d'enregistrement : actes, base et tarif",
    description: "Droits d'enregistrement 2026 : actes obligatoires, délai de 30 jours, base imposable, taux de 0,1 % à 6 %, droits fixes et exonération des cessions de parts.",
    resume: md`
## L'essentiel — Les droits d'enregistrement

- L'enregistrement donne **date certaine** à un acte ; obligatoire pour les mutations d'immeubles, de fonds de commerce, de parts non cotées, les baux, les actes de société, les hypothèques, les partages.
- Délai : **30 jours** à compter de l'acte ; **3 mois** pour les testaments et jugements.
- Base : prix + charges ; fonds de commerce = achalandage + droit au bail + mobilier + marchandises ; donation sans déduction des charges.
- Usufruit et nue-propriété selon l'âge de l'usufruitier : de 7/10 - 3/10 (moins de 20 ans) à 1/10 - 9/10 (70 ans et plus).
- Baux : 10 à 20 ans, total des loyers ; 20 ans et plus, **20 fois** le loyer annuel.
- Taux : **6 %** fonds de commerce, droit au bail, baux de plus de 10 ans ; **5 %** terrains nus et titres de sociétés immobilières ; **4 %** locaux construits ; **3 %** meubles, premier logement social ; **1,5 %** donations familiales, partages, reconnaissances de dettes, marchandises du fonds ; **1 %** obligations, cautionnements ; **0,1 %** marchés publics.
- Droits fixes : **1 000 DH** (capital ≤ 500 000 DH non exonéré, restructurations) ; **200 DH** (baux ordinaires, crédit-bail).
- Minimum : **100 DH** (1 000 DH pour les actes de capital) ; droit supplémentaire de **2 %** sur la partie payée en espèces d'un immeuble de plus de 300 000 DH ou d'un fonds.
- Exonérés : capital en **numéraire** ou par incorporation ; depuis **2026**, cessions de parts et d'actions de sociétés **non immobilières** (attestation).
- Plusieurs conventions dépendantes : le seul droit le plus élevé ; meubles + immeubles sans prix distinct : taux des immeubles.
`,
    exercices: md`
### Exercice 2 — La donation de la nue-propriété

M. Abdelkader, 63 ans, donne à son fils la nue-propriété d'un immeuble de rapport à Kénitra, dont la valeur vénale en pleine propriété est de 1 800 000 DH ; il en garde l'usufruit.

Calculez les droits d'enregistrement.

<details><summary>Voir le corrigé</summary>

L'usufruitier a 63 ans : tranche « moins de 70 ans », la nue-propriété vaut **8/10** de la pleine propriété.

Base : $1\,800\,000 \times 8/10 = 1\,440\,000$ DH. Donation en ligne directe : taux de 1,5 %.

$$\text{Droits} = 1\,440\,000 \times 1{,}5\,\% = \mathbf{21\,600\ DH}$$

La donation entre ascendant et descendant est par ailleurs exonérée d'IR sur les profits fonciers.

</details>

### Exercice 3 — Trois baux commerciaux

Calculez les droits d'enregistrement de chacun de ces baux conclus en 2026 :
1. Un bail de 15 ans pour une usine à Tanger, loyer annuel 120 000 DH.
2. Un bail de 25 ans pour un hôtel à Marrakech, loyer annuel 50 000 DH.
3. Un bail de 6 ans pour une boutique à Salé, loyer annuel 36 000 DH.

<details><summary>Voir le corrigé</summary>

1. Plus de 10 ans et moins de 20 ans : base = total des loyers, $120\,000 \times 15 = 1\,800\,000$ DH ; taux de 6 % : **108 000 DH**.
2. 20 ans et plus : base = 20 fois le loyer annuel, $20 \times 50\,000 = 1\,000\,000$ DH ; taux de 6 % : **60 000 DH**.
3. Bail de 10 ans au plus : droit fixe de **200 DH**.

</details>
`,
    qcm: [
      { q: "Un acte de vente d'immeuble doit être enregistré dans un délai de :", choix: ["15 jours", "30 jours", "60 jours", "3 mois"], bonne: 1, explication: "Article 128 du CGI." },
      { q: "L'acquisition d'un appartement construit supporte un droit de :", choix: ["3 %", "4 %", "5 %", "6 %"], bonne: 1, explication: "Locaux construits, avec le terrain dans la limite de 5 fois la superficie couverte." },
      { q: "L'acquisition d'un terrain nu supporte un droit de :", choix: ["4 %", "5 %", "6 %", "1,5 %"], bonne: 1, explication: "Article 133-I-G du CGI." },
      { q: "La cession d'un fonds de commerce (hors marchandises inventoriées) supporte :", choix: ["4 %", "5 %", "6 %", "1 %"], bonne: 2, explication: "Les marchandises estimées à part supportent 1,5 %." },
      { q: "Une donation d'un père à sa fille supporte un droit de :", choix: ["0,5 %", "1 %", "1,5 %", "4 %"], bonne: 2, explication: "Ligne directe, époux, frères et sœurs." },
      { q: "Une augmentation de capital en numéraire d'une SARL est en 2026 :", choix: ["Taxée à 0,5 %", "Taxée au droit fixe de 1 000 DH", "Exonérée", "Taxée à 1 %"], bonne: 2, explication: "Article 129-IV-23° du CGI." },
      { q: "Depuis 2026, la cession de parts d'une SARL commerciale non immobilière est :", choix: ["Taxée à 4 %", "Taxée à 6 %", "Exonérée sur attestation", "Taxée à 3 %"], bonne: 2, explication: "Article 129-IV-25° du CGI, loi de finances 2026." },
      { q: "Un bail commercial de 3 ans est enregistré :", choix: ["Au taux de 1 %", "Au droit fixe de 200 DH", "Au taux de 6 %", "Gratuitement"], bonne: 1, explication: "Article 135-II-8° du CGI." },
      { q: "Pour un usufruitier de 45 ans, la nue-propriété vaut :", choix: ["4/10", "5/10", "6/10", "7/10"], bonne: 2, explication: "Tranche « moins de 50 ans » : usufruit 4/10, nue-propriété 6/10." },
      { q: "Le droit supplémentaire de 2 % frappe la vente d'un immeuble de plus de 300 000 DH lorsque :", choix: ["L'acheteur est étranger", "Le prix est payé en espèces, pour la partie concernée", "L'acte est notarié", "L'immeuble est un terrain"], bonne: 1, explication: "Article 133-III du CGI." },
    ],
},
  8: {
    titre: "La fiscalité des collectivités territoriales",
    description: "Loi 47-06 : taxe professionnelle par classe (10, 20, 30 %), exonération de 5 ans, taxe d'habitation et abattement de 75 %, TSC de 10,5 % et TNB au mètre carré.",
    resume: md`
## L'essentiel — Les taxes locales

- Cadre : **loi 47-06**, modifiée par les lois **07-20** (2020) et **14-25** (2025) ; taxes des communes, des préfectures et provinces, des régions.
- **TP** : toute activité professionnelle ; base = **valeur locative** des locaux et équipements (minimum **3 % du prix de revient** pour un établissement).
- Taux de la TP selon la **classe** : C3 **10 %**, C2 **20 %**, C1 **30 %** ; droit minimum de 300, 600 ou 1 200 DH (communes urbaines) pour les redevables sans local.
- Exonération de **5 ans** pour une activité nouvellement créée (pas pour un changement d'exploitant ni pour les banques, assurances, agences immobilières).
- TP due pour l'année entière d'après la situation de **janvier** ; inscription dans les **30 jours** ; charge déductible.
- **TH** : logements occupés par leur propriétaire ou prêtés à la famille ; abattement de **75 %** pour l'habitation principale seulement.
- Barème TH par tranches : 0 % jusqu'à 5 000 DH ; 10 % (− 500) ; 20 % (− 2 500) à partir de 20 001 DH ; 30 % (− 6 500) au-delà de 40 000 DH.
- Constructions neuves d'habitation principale : exonérées de TH **5 ans** ; taxe < 200 DH non émise.
- **TSC** : **10,5 %** (périmètres urbains) ou **6,5 %** de la valeur locative, **même en cas d'exonération temporaire** de TP.
- **TNB** : tarif **au m²** selon l'équipement de la zone (15 à 30, 5 à 15, 0,5 à 2 DH) ; déclaration et paiement avant le **1ᵉʳ mars**.
`,
    exercices: md`
### Exercice 2 — Quatre calculs de taxe d'habitation

Calculez la TH de 2026 de chaque logement :
1. Habitation principale à Casablanca, valeur locative 36 000 DH.
2. Résidence secondaire à Martil, valeur locative 30 000 DH.
3. Villa secondaire à Ifrane, valeur locative 50 000 DH.
4. Habitation principale à Agadir, valeur locative 48 000 DH, achevée en 2024 par son propriétaire.

<details><summary>Voir le corrigé</summary>

1. $36\,000 \times 25\,\% = 9\,000$ DH ; $9\,000 \times 10\,\% - 500 = \mathbf{400\ DH}$.
2. Pas d'abattement : $30\,000 \times 20\,\% - 2\,500 = \mathbf{3\,500\ DH}$ (soit $15\,000 \times 10\,\% + 10\,000 \times 20\,\%$).
3. $50\,000 \times 30\,\% - 6\,500 = \mathbf{8\,500\ DH}$ (soit $1\,500 + 4\,000 + 10\,000 \times 30\,\%$).
4. Construction neuve affectée à l'habitation principale : **exonérée** pendant les 5 années qui suivent son achèvement (2025 à 2029). Sans cette exonération : $48\,000 \times 25\,\% = 12\,000$ DH, $12\,000 \times 10\,\% - 500 = 700$ DH.

</details>

### Exercice 3 — Exonération et droit minimum de la TP

1. M. Badr rachète en 2026 la boulangerie de M. Larbi, ouverte en 2010 à Meknès. Bénéficie-t-il de l'exonération de 5 ans ?
2. Mme Hasna crée en janvier 2026 une agence immobilière à Tanger. Est-elle exonérée ?
3. M. Zakaria, marchand ambulant de fruits à Salé (classe C3), n'a pas de local. Que paie-t-il ?
4. Une usine de Kénitra déclare une valeur locative de 40 000 DH ; ses terrains, constructions et matériels ont un prix de revient de 2 000 000 DH. Quelle base retenir ?

<details><summary>Voir le corrigé</summary>

1. **Non** : le changement d'exploitant n'est pas une création d'activité.
2. **Non** : les agences immobilières sont exclues de l'exonération temporaire.
3. Le **droit minimum** de la classe C3 dans une commune qui inclut un périmètre urbain : **300 DH**, payé par anticipation.
4. La valeur locative ne peut être inférieure à $3\,\% \times 2\,000\,000 = 60\,000$ DH : on retient **60 000 DH**.

</details>
`,
    qcm: [
      { q: "Le taux de la taxe professionnelle dépend :", choix: ["Du montant de la valeur locative", "De la classe de l'activité", "Du chiffre d'affaires", "Du nombre de salariés"], bonne: 1, explication: "C3 10 %, C2 20 %, C1 30 %." },
      { q: "Une activité nouvellement créée est exonérée de taxe professionnelle pendant :", choix: ["2 ans", "3 ans", "5 ans", "10 ans"], bonne: 2, explication: "Article 6-II-1° de la loi 47-06." },
      { q: "La valeur locative d'un établissement soumis à la TP ne peut être inférieure à :", choix: ["1 % du prix de revient", "3 % du prix de revient", "5 % du prix de revient", "10 % du chiffre d'affaires"], bonne: 1, explication: "Prix de revient des terrains, constructions, agencements, matériel et outillages." },
      { q: "L'abattement de la taxe d'habitation pour l'habitation principale est de :", choix: ["40 %", "50 %", "75 %", "100 %"], bonne: 2, explication: "Il ne s'applique pas aux résidences secondaires." },
      { q: "Dans le barème de la TH, la valeur locative jusqu'à 5 000 DH est :", choix: ["Taxée à 10 %", "Exonérée", "Taxée à 5 %", "Taxée à 20 %"], bonne: 1, explication: "Le barème est progressif par tranches." },
      { q: "Le taux de la taxe de services communaux dans un périmètre urbain est de :", choix: ["6,5 %", "10 %", "10,5 %", "20 %"], bonne: 2, explication: "6,5 % dans les autres zones couvertes par un plan d'aménagement." },
      { q: "Une entreprise exonérée temporairement de TP pendant ses 5 premières années :", choix: ["Ne paie pas la TSC", "Paie la TSC sur la même valeur locative", "Paie la TSC à demi-taux", "Paie la TH à la place"], bonne: 1, explication: "Seule une exonération permanente dispense de la TSC." },
      { q: "La taxe sur les terrains urbains non bâtis est calculée :", choix: ["En pourcentage de la valeur vénale", "Au mètre carré selon la zone", "Sur la valeur locative", "Sur le prix d'achat"], bonne: 1, explication: "Tarifs fixés par la commune dans des fourchettes légales (loi 14-25)." },
      { q: "La taxe professionnelle est due pour l'année entière d'après la situation au mois de :", choix: ["Janvier", "Mars", "Juin", "Décembre"], bonne: 0, explication: "Article 8 de la loi 47-06." },
      { q: "Le produit de la taxe professionnelle revient aux communes à hauteur de :", choix: ["50 %", "80 %", "90 %", "100 %"], bonne: 1, explication: "10 % aux chambres professionnelles et 10 % au budget général." },
    ],
},
  9: {
    titre: "Contrôle fiscal, contentieux et recouvrement",
    description: "Contrôle fiscal au Maroc : avis de vérification, rectification en 30 et 60 jours, CLT, CRRF et CNRF, prescription de 4 ans, sanctions et réclamation.",
    resume: md`
## L'essentiel — Contrôle et contentieux

- Système **déclaratif** ; documents conservés **10 ans**.
- Moyens : contrôle sur pièces, droit de communication, vérification de comptabilité, **examen de l'ensemble de la situation fiscale**, contrôle des prix.
- Vérification : avis + charte **15 jours** avant ; début dans les **5 jours ouvrables** ; durée **3 mois** (CA ≤ 50 MDH) ou **6 mois** ; échange oral contradictoire.
- Procédure normale : 1ʳᵉ notification dans les **3 mois** ; réponse **30 jours** ; 2ᵉ notification **60 jours** ; recours à la commission **30 jours** ; tribunal **60 jours**.
- Procédure **accélérée** (cession, cessation, départ, décès, cessions de titres) : impositions émises immédiatement.
- **CLT** : CPU, fonciers, droits d'enregistrement ; **CRRF** : capitaux mobiliers, vérifications avec CA < **10 MDH** chaque exercice ; **CNRF** : ESFP, CA ≥ 10 MDH, abus de droit.
- Prescription : jusqu'au **31 décembre de la 4ᵉ année** suivante ; interrompue par la notification, suspendue pendant les recours.
- Dépôt tardif : **5 %** / **15 %** / **20 %** (office) ; rectification : **20 %**, **30 %** (TVA, retenues), 100 % (fraude).
- Paiement tardif : pénalité **10 %** (5 % si ≤ 30 jours, 20 % TVA et retenues) + **5 %** le 1er mois + **0,5 %** par mois suivant.
- Réclamation dans les **6 mois** ; sans réponse en 3 mois, tribunal ; recouvrement forcé par la loi **15-97**.
`,
    exercices: md`
### Exercice 2 — Le calendrier d'une rectification

La SARL « Ifrane Bois » reçoit le 2 octobre 2026 une première notification de redressements. Elle répond le 25 octobre. L'administration lui adresse sa seconde notification, reçue le 5 janvier 2027.

1. La réponse de la SARL est-elle dans les délais ?
2. La seconde notification est-elle régulière ? Quelle conséquence ?

<details><summary>Voir le corrigé</summary>

1. Délai de 30 jours à compter du 2 octobre, soit jusqu'au 1ᵉʳ novembre 2026 : la réponse du **25 octobre** est dans les délais.
2. L'administration disposait de **60 jours** à compter de la réception de la réponse (supposée reçue le 25 octobre), soit jusqu'au **24 décembre 2026**. Reçue le 5 janvier 2027, la seconde notification est **hors délai** : la procédure de rectification est **frappée de nullité** (article 220-VIII). La SARL doit le soulever dès cette étape, et non pour la première fois devant la commission.

</details>

### Exercice 3 — Sanctions de retard

La SARL « Rif Logistique » devait verser un IS de 50 000 DH au plus tard le 31 mars 2026. Elle le paie le 14 juin 2026 (2 mois et 14 jours de retard). Par ailleurs, elle a déposé sa déclaration de résultat fiscal avec 20 jours de retard.

1. Calculez la pénalité et les majorations de retard de paiement.
2. Quelle majoration frappe le dépôt tardif de la déclaration ?

<details><summary>Voir le corrigé</summary>

1. Retard de plus de 30 jours : pénalité de **10 %**, soit 5 000 DH. Majorations : 5 % pour le premier mois, puis 0,5 % pour le deuxième mois et 0,5 % pour la fraction du troisième, soit $5\,\% + 2 \times 0{,}5\,\% = 6\,\%$, c'est-à-dire 3 000 DH. Total : **8 000 DH**.
2. Dépôt avec un retard ne dépassant pas 30 jours : majoration de **5 %** des droits correspondants, soit $50\,000 \times 5\,\% = 2\,500$ DH (minimum 500 DH).

</details>
`,
    qcm: [
      { q: "L'avis de vérification doit parvenir au contribuable au moins :", choix: ["8 jours avant le contrôle", "15 jours avant le contrôle", "30 jours avant le contrôle", "60 jours avant le contrôle"], bonne: 1, explication: "Avec la charte du contribuable, sous peine de nullité." },
      { q: "La vérification sur place d'une entreprise dont le chiffre d'affaires est de 30 millions de DH dure au plus :", choix: ["1 mois", "3 mois", "6 mois", "12 mois"], bonne: 1, explication: "6 mois au-delà de 50 millions de DH." },
      { q: "Le contribuable dispose, pour répondre à la première notification, de :", choix: ["15 jours", "30 jours", "60 jours", "3 mois"], bonne: 1, explication: "Sans réponse, les droits sont mis en recouvrement." },
      { q: "L'administration doit adresser sa seconde notification dans un délai de :", choix: ["30 jours", "45 jours", "60 jours", "90 jours"], bonne: 2, explication: "À défaut, la procédure est nulle." },
      { q: "Un litige sur un profit foncier relève de :", choix: ["La commission locale de taxation", "La commission régionale du recours fiscal", "La commission nationale du recours fiscal", "Directement du tribunal"], bonne: 0, explication: "Article 225 du CGI." },
      { q: "La vérification d'une société dont un exercice dépasse 10 millions de DH de chiffre d'affaires relève de :", choix: ["La CLT", "La CRRF", "La CNRF", "Du ministre"], bonne: 2, explication: "La CRRF exige un chiffre d'affaires inférieur à 10 MDH pour chaque exercice." },
      { q: "En 2026, le droit de reprise sur l'exercice 2022 d'une société clôturant au 31 décembre expire le :", choix: ["31 décembre 2025", "31 décembre 2026", "31 décembre 2027", "31 décembre 2032"], bonne: 1, explication: "31 décembre de la quatrième année suivant la clôture." },
      { q: "La majoration pour rectification d'un rappel de TVA est de :", choix: ["10 %", "15 %", "20 %", "30 %"], bonne: 3, explication: "20 % pour l'IS et l'IR, 30 % pour la TVA et les retenues à la source." },
      { q: "La pénalité pour un paiement effectué avec 20 jours de retard est de :", choix: ["5 %", "10 %", "15 %", "20 %"], bonne: 0, explication: "Elle est ramenée à 5 % si le retard ne dépasse pas 30 jours, plus la majoration de 5 % du premier mois." },
      { q: "Une réclamation contre un impôt émis par voie de rôle doit être présentée dans les :", choix: ["30 jours", "3 mois", "6 mois suivant le mois de la mise en recouvrement", "4 ans"], bonne: 2, explication: "Article 235 du CGI." },
    ],
},
};

export default chapitres;
