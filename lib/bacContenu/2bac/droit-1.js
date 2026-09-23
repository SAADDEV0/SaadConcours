// Droit — 2ème Bac, unité 1 : éléments de la fiscalité marocaine.
// Barèmes vérifiés pour 2026 (TVA à deux taux, barème IR, taux IS).
const md = String.raw;

export default {
  "generalites-sur-l-impot": {
    cours: md`
## Introduction

Pour financer les services publics (éducation, santé, sécurité, infrastructures), l'État a besoin de ressources. L'**impôt** en est la principale.

## I. Définition et caractères de l'impôt

> L'**impôt** est un **prélèvement pécuniaire**, **obligatoire**, **définitif** et **sans contrepartie directe**, effectué par voie d'autorité par l'État ou les collectivités territoriales, pour couvrir les charges publiques.

| Caractère | Signification |
|---|---|
| **Pécuniaire** | Payé en argent |
| **Obligatoire** | Imposé par la loi, par voie d'autorité |
| **Définitif** | Il n'est pas remboursé |
| **Sans contrepartie directe** | Le contribuable ne reçoit pas un service proportionnel à ce qu'il paie |
| **Destiné aux charges publiques** | Il finance les dépenses de l'État et des collectivités |

À distinguer de la **taxe** (payée à l'occasion d'un service rendu, ex. taxe de services communaux) et de la **cotisation** (payée en vue d'un avantage, ex. cotisation sociale CNSS).

## II. Le fondement juridique

- **Constitution de 2011** : tous supportent, en proportion de leurs facultés contributives, les charges publiques (article 39) ; seule la **loi** peut créer un impôt (principe de **légalité**).
- **Code général des impôts (CGI)** : regroupe les règles relatives à l'IS, l'IR, la TVA et aux droits d'enregistrement et de timbre ; il est modifié chaque année par la **loi de finances**.
- **Direction générale des impôts (DGI)** : administration chargée de l'assiette, du contrôle et du recouvrement de la plupart des impôts de l'État.

## III. Les fonctions de l'impôt

| Fonction | Contenu |
|---|---|
| **Financière** | Procurer des ressources au budget |
| **Économique** | Orienter l'activité : encourager l'investissement ou l'exportation par des exonérations, freiner la consommation de certains produits (tabac, alcool) |
| **Sociale** | Réduire les inégalités (impôt progressif, exonération des produits de première nécessité) |

## IV. La classification des impôts

| Critère | Catégories | Exemples |
|---|---|---|
| **Incidence** | **Direct** : payé et supporté par la même personne | IR, IS |
| | **Indirect** : payé par une personne mais supporté par une autre (le consommateur) | TVA, droits de douane, TIC |
| **Taux** | **Proportionnel** : taux constant | TVA |
| | **Progressif** : le taux augmente avec la base | IR |
| **Objet** | **Réel** : frappe un bien sans tenir compte de la situation du contribuable | Taxe professionnelle |
| | **Personnel** : tient compte de la situation personnelle (famille) | IR |

## V. La technique de l'impôt

1. **Assiette** : détermination de la **matière imposable** (revenu, bénéfice, chiffre d'affaires) et de la **base** ;
2. **Fait générateur** : événement qui fait naître la dette fiscale (réalisation du bénéfice, encaissement du prix) ;
3. **Liquidation** : calcul du montant de l'impôt (base × taux) ;
4. **Recouvrement** : paiement de l'impôt (spontané, par voie de rôle ou par **retenue à la source**).

## VI. Le système fiscal marocain

| Impôts de l'État | Impôts des collectivités territoriales |
|---|---|
| Impôt sur les sociétés (IS) | Taxe professionnelle |
| Impôt sur le revenu (IR) | Taxe d'habitation |
| Taxe sur la valeur ajoutée (TVA) | Taxe de services communaux |
| Droits d'enregistrement et de timbre | |
| Droits de douane, taxes intérieures de consommation | |
`,
    exercices: md`
### Exercice 1 — Classification

Classez chaque impôt (direct/indirect ; proportionnel/progressif) : a) TVA ; b) IR sur salaires ; c) IS au taux de 20 % ; d) droits de douane.

<details><summary>Voir le corrigé</summary>

a) **Indirect, proportionnel** ; b) **Direct, progressif** ; c) **Direct, proportionnel** (dans la tranche) ; d) **Indirect, proportionnel**.

</details>

### Exercice 2 — Fonctions de l'impôt

Pour chaque mesure, indiquez la fonction de l'impôt concernée : a) exonération de TVA sur les médicaments ; b) hausse des taxes sur les cigarettes ; c) exonération temporaire d'IS pour les exportateurs ; d) hausse du taux de l'IS pour augmenter les recettes.

<details><summary>Voir le corrigé</summary>

a) **Sociale** ; b) **Économique** (et de santé publique : décourager la consommation) ; c) **Économique** (encourager l'exportation) ; d) **Financière**.

</details>
`,
    resume: md`
## L'essentiel — Généralités sur l'impôt

- **Impôt** : prélèvement pécuniaire, obligatoire, définitif, sans contrepartie directe, pour les charges publiques.
- Taxe (service rendu) ≠ cotisation (avantage).
- **Fondement** : Constitution (art. 39, légalité), CGI, loi de finances ; **DGI**.
- **Fonctions** : financière, économique, sociale.
- **Classification** : direct / indirect ; proportionnel / progressif ; réel / personnel.
- **Technique** : assiette → fait générateur → liquidation → recouvrement.
- **Système** : IS, IR, TVA, enregistrement (État) ; taxe professionnelle, taxe d'habitation, taxe de services communaux (collectivités).
`,
    qcm: [
      { q: "L'impôt est sans contrepartie directe, cela signifie que :", choix: ["Il est remboursé", "Le contribuable ne reçoit pas un service proportionnel à ce qu'il paie", "Il est facultatif", "Il est payé en nature"], bonne: 1, explication: "C'est ce qui le distingue de la taxe." },
      { q: "La TVA est un impôt :", choix: ["Direct et progressif", "Indirect et proportionnel", "Direct et proportionnel", "Indirect et progressif"], bonne: 1, explication: "Payée par l'entreprise, supportée par le consommateur." },
      { q: "Le calcul du montant de l'impôt s'appelle :", choix: ["L'assiette", "La liquidation", "Le recouvrement", "Le fait générateur"], bonne: 1, explication: "Base × taux." },
      { q: "La taxe professionnelle est un impôt :", choix: ["De l'État", "Des collectivités territoriales", "Douanier", "Sur le revenu"], bonne: 1, explication: "Elle relève de la fiscalité locale." },
      { q: "Le principe de légalité signifie que l'impôt est créé par :", choix: ["Le ministre", "La loi", "La DGI", "Les entreprises"], bonne: 1, explication: "Seule la loi peut créer un impôt." },
    ],
  },

  "la-taxe-sur-la-valeur-ajoutee-tva": {
    cours: md`
## Introduction

La **taxe sur la valeur ajoutée (TVA)** est un impôt **indirect** sur la **consommation**. C'est la **première recette fiscale** de l'État marocain.

## I. Le principe de la TVA

La TVA est collectée par les entreprises à chaque étape de la production et de la distribution, mais elle est **supportée** en définitive par le **consommateur final**.

Chaque entreprise :

- **facture** la TVA sur ses ventes (**TVA facturée** ou collectée) ;
- **récupère** la TVA payée sur ses achats (**TVA récupérable** ou déductible) ;
- verse à l'État la différence :

$$\text{TVA due} = \text{TVA facturée} - \text{TVA récupérable}$$

Si le résultat est négatif, on parle de **crédit de TVA**, reportable sur les périodes suivantes.

## II. Le champ d'application

| Catégorie | Exemples |
|---|---|
| **Opérations imposables obligatoirement** | Ventes et livraisons des commerçants et industriels, prestations de services, importations |
| **Opérations imposables sur option** | Certaines activités exonérées peuvent choisir d'être assujetties (ex. exportateurs) |
| **Opérations exonérées** | Exportations ; produits de première nécessité (pain, lait, farine, médicaments, fournitures scolaires, eau à usage domestique…) |

**Exonération avec droit à déduction** : l'entreprise ne facture pas la TVA mais récupère celle de ses achats (cas des **exportations**). **Sans droit à déduction** : pas de TVA facturée et pas de récupération.

## III. Les taux de la TVA

À la suite de la réforme engagée par la **loi de finances 2024**, le Maroc applique depuis le **1ᵉʳ janvier 2026** **deux taux** :

| Taux | Application |
|---|---|
| **20 %** (taux normal) | La plupart des biens et services, électricité |
| **10 %** (taux réduit) | Notamment restauration et hébergement touristique, opérations de banque, transport de voyageurs et de marchandises, certains produits alimentaires, énergies renouvelables |

Les anciens taux de 7 % et 14 % ont été supprimés.

## IV. Le fait générateur et les régimes de déclaration

- **Fait générateur** : en principe l'**encaissement** du prix ; l'entreprise peut opter pour le régime des **débits** (facturation).
- **Régimes de déclaration** :
  - **mensuel** : entreprises dont le chiffre d'affaires taxable de l'année précédente atteint **1 000 000 DH** ;
  - **trimestriel** : entreprises en dessous de ce seuil.

## V. Les calculs

$$\text{Prix TTC} = \text{prix HT} \times (1 + t) \qquad \text{TVA} = \text{prix HT} \times t \qquad \text{prix HT} = \frac{\text{prix TTC}}{1 + t}$$

**En comptabilité** : TVA facturée : **4455** ; TVA récupérable sur charges : **34552** ; sur immobilisations : **34551** ; TVA due : **4456** ; crédit de TVA : **3456**.
`,
    exercices: md`
### Exercice 1 — TVA due (données fictives, taux 20 %)

Au cours du mois de mars, une entreprise soumise au régime mensuel a réalisé des ventes de 480 000 DH HT, des achats de marchandises de 300 000 DH HT, des achats de services (transport de marchandises à 10 %) de 20 000 DH HT et a acquis une machine de 60 000 DH HT (TVA 20 %). Elle avait un crédit de TVA de 4 000 DH le mois précédent.

Calculez la TVA due du mois de mars.

<details><summary>Voir le corrigé</summary>

- TVA facturée $= 480\,000 \times 20\% = 96\,000$ DH ;
- TVA récupérable sur charges $= 300\,000 \times 20\% + 20\,000 \times 10\% = 60\,000 + 2\,000 = 62\,000$ DH ;
- TVA récupérable sur immobilisations $= 60\,000 \times 20\% = 12\,000$ DH ;
- TVA due $= 96\,000 - 62\,000 - 12\,000 - 4\,000 = 18\,000$ DH.

</details>

### Exercice 2 — Chaîne de production

Une scierie vend du bois 16 000 DH HT à un fabricant de meubles, qui vend les meubles 25 000 DH HT à un magasin, qui les revend 32 000 DH HT à un consommateur. Taux de TVA : 20 % à chaque étape (on suppose que la scierie n'a rien acheté soumis à TVA).

Montrez que la TVA totale encaissée par l'État correspond à la TVA payée par le consommateur.

<details><summary>Voir le corrigé</summary>

| Étape | TVA facturée | TVA récupérable | TVA versée |
|---|---|---|---|
| Scierie | $16\,000 \times 20\% = 3\,200$ | 0 | 3 200 |
| Fabricant de meubles | $25\,000 \times 20\% = 5\,000$ | 3 200 | 1 800 |
| Magasin | $32\,000 \times 20\% = 6\,400$ | 5 000 | 1 400 |
| **Total** | | | **6 400** |

Le consommateur paie $32\,000 \times 20\% = 6\,400$ DH de TVA, exactement ce qu'ont versé au total les entreprises : chaque entreprise ne verse que la TVA sur **sa** valeur ajoutée.

</details>
`,
    resume: md`
## L'essentiel — La TVA

- Impôt **indirect** sur la consommation, **première recette fiscale**, supporté par le consommateur final.
- **TVA due** = TVA facturée − TVA récupérable (sinon crédit de TVA).
- **Champ** : imposables obligatoirement / sur option / exonérées (exportations avec droit à déduction ; produits de première nécessité).
- **Taux depuis 2026** : **20 %** (normal) et **10 %** (réduit) ; 7 % et 14 % supprimés.
- **Fait générateur** : encaissement (ou débits sur option).
- **Déclaration** : mensuelle (CA ≥ 1 MDH) ou trimestrielle.
- TTC $=$ HT $\times (1 + t)$ ; comptes 4455, 34552, 34551, 4456.
`,
    qcm: [
      { q: "La TVA est supportée en définitive par :", choix: ["Le producteur", "Le consommateur final", "Le distributeur", "L'État"], bonne: 1, explication: "Les entreprises la collectent et la reversent." },
      { q: "Depuis 2026, les taux de TVA au Maroc sont :", choix: ["7 %, 10 %, 14 %, 20 %", "10 % et 20 %", "14 % et 20 %", "20 % seulement"], bonne: 1, explication: "Réforme engagée par la LF 2024 et achevée en 2026." },
      { q: "TVA facturée 50 000, TVA récupérable 38 000 : la TVA due est :", choix: ["88 000", "12 000", "38 000", "−12 000"], bonne: 1, explication: "50 000 − 38 000 = 12 000." },
      { q: "Une exportation est :", choix: ["Taxée à 20 %", "Exonérée avec droit à déduction", "Exonérée sans droit à déduction", "Taxée à 10 %"], bonne: 1, explication: "L'exportateur récupère la TVA sur ses achats." },
      { q: "Un prix TTC de 2 400 DH (TVA 20 %) correspond à un prix HT de :", choix: ["1 920", "2 000", "2 280", "2 880"], bonne: 1, explication: "2 400 / 1,2 = 2 000." },
    ],
  },

  "l-impot-sur-les-societes-is": {
    cours: md`
## Introduction

L'**impôt sur les sociétés (IS)** frappe les **bénéfices** réalisés par les sociétés et certaines personnes morales exerçant au Maroc.

## I. Le champ d'application

| Personnes | Régime |
|---|---|
| **Sociétés de capitaux** : SA, SARL, SCA | Soumises **obligatoirement** à l'IS |
| **Sociétés de personnes** : SNC, SCS | En principe à l'IR ; **sur option** à l'IS |
| **Établissements publics** et autres personnes morales réalisant des bénéfices | Soumis à l'IS |

**Territorialité** : l'IS s'applique aux bénéfices réalisés **au Maroc**.

Certaines activités bénéficient d'**exonérations** ou de **taux spécifiques** (encouragement de l'investissement, de l'exportation, des zones d'accélération industrielle), conformément au CGI.

## II. La base imposable : le résultat fiscal

$$\text{Résultat fiscal} = \text{résultat comptable} + \text{réintégrations} - \text{déductions}$$

- **Réintégrations** : charges non déductibles (amendes et pénalités, IS lui-même, amortissements excédentaires des voitures de tourisme, dons non autorisés…) ;
- **Déductions** : produits non imposables (dividendes reçus de sociétés soumises à l'IS…).

Le **déficit** d'un exercice peut être **reporté** sur les bénéfices des exercices suivants (en principe dans la limite de 4 ans ; sans limite pour la part correspondant aux amortissements).

## III. Le taux de l'IS

La loi de finances 2023 a engagé une réforme progressive (2023-2026). **À partir de 2026** :

| Bénéfice net fiscal | Taux |
|---|---|
| Inférieur à 100 millions de DH | **20 %** |
| Égal ou supérieur à 100 millions de DH | **35 %** |
| Établissements de crédit, entreprises d'assurances et de réassurance | **40 %** |

L'IS est **proportionnel** : tout le bénéfice est taxé au taux correspondant à sa tranche.

## IV. La cotisation minimale (CM)

C'est un **impôt minimum** dû même en cas de déficit :

$$CM = 0{,}25\% \times \text{(chiffre d'affaires HT et certains autres produits)}$$

$$\text{Impôt dû} = \max(IS \ ; \ CM)$$

Les entreprises nouvelles en sont exonérées pendant leurs premiers exercices, dans les conditions fixées par le CGI.

## V. Les obligations de la société

- **Déclaration du résultat fiscal** dans les **3 mois** suivant la clôture de l'exercice (en ligne, sur le portail de la DGI) ;
- **Paiement spontané** par **4 acomptes provisionnels** de 25 % de l'impôt de l'exercice précédent, avant la fin du 3ᵉ, 6ᵉ, 9ᵉ et 12ᵉ mois ;
- **Régularisation** du solde dans le délai de déclaration ;
- **Sanctions** en cas de retard ou d'insuffisance : majorations et pénalités.
`,
    exercices: md`
### Exercice 1 — Calcul de l'IS (données fictives, exercice 2026)

Une SARL présente un résultat comptable de 820 000 DH. Charges non déductibles : amende de 15 000 DH ; produits non imposables : dividendes de 35 000 DH. CA HT : 9 000 000 DH (seul élément de la base de la CM). IS de l'exercice précédent : 150 000 DH.

1. Calculez le résultat fiscal, l'IS et la CM.
2. Calculez les acomptes et le reliquat.

<details><summary>Voir le corrigé</summary>

1. Résultat fiscal $= 820\,000 + 15\,000 - 35\,000 = 800\,000$ DH ; $IS = 800\,000 \times 20\% = 160\,000$ DH ; $CM = 9\,000\,000 \times 0{,}25\% = 22\,500$ DH. Impôt dû $= 160\,000$ DH.
2. Acompte $= 150\,000 \times 25\% = 37\,500$ DH (4 acomptes = 150 000) ; reliquat $= 160\,000 - 150\,000 = 10\,000$ DH à payer lors de la déclaration.

</details>

### Exercice 2 — Champ d'application

Indiquez si chaque entité est soumise à l'IS : a) une SA industrielle ; b) une SNC n'ayant pas opté ; c) une SARL de services ; d) un commerçant individuel.

<details><summary>Voir le corrigé</summary>

a) **Oui** (obligatoire) ; b) **Non** : soumise à l'IR (sauf option) ; c) **Oui** ; d) **Non** : le commerçant individuel relève de l'**IR** (revenus professionnels).

</details>
`,
    resume: md`
## L'essentiel — L'IS

- **Champ** : sociétés de capitaux (obligatoire), sociétés de personnes (sur option), établissements publics.
- **Résultat fiscal** = résultat comptable + réintégrations − déductions ; déficit reportable.
- **Taux (2026)** : 20 % (< 100 MDH), 35 % (≥ 100 MDH), 40 % (banques, assurances).
- **CM** $= 0{,}25\%$ du CA HT (et certains produits) ; impôt dû = max(IS ; CM).
- **Obligations** : déclaration dans les 3 mois, 4 acomptes de 25 %, régularisation.
`,
    qcm: [
      { q: "Une SARL est soumise à l'IS :", choix: ["Sur option", "Obligatoirement", "Jamais", "Seulement si elle exporte"], bonne: 1, explication: "C'est une société de capitaux." },
      { q: "La déclaration du résultat fiscal doit être déposée dans les :", choix: ["30 jours", "3 mois", "6 mois", "12 mois"], bonne: 1, explication: "Dans les 3 mois suivant la clôture." },
      { q: "Le taux de la cotisation minimale de droit commun est de :", choix: ["0,25 %", "1 %", "2,5 %", "10 %"], bonne: 0, explication: "Appliqué au chiffre d'affaires HT et à certains produits." },
      { q: "À partir de 2026, une banque est imposée à l'IS au taux de :", choix: ["20 %", "35 %", "40 %", "31 %"], bonne: 2, explication: "Taux spécifique aux établissements de crédit et assurances." },
      { q: "Un commerçant individuel est soumis :", choix: ["À l'IS", "À l'IR", "À la TVA seulement", "À aucun impôt"], bonne: 1, explication: "Ses bénéfices sont des revenus professionnels soumis à l'IR." },
    ],
  },

  "l-impot-sur-le-revenu-ir": {
    cours: md`
## Introduction

L'**impôt sur le revenu (IR)** frappe les revenus des **personnes physiques** (et des sociétés de personnes n'ayant pas opté pour l'IS). C'est un impôt **direct**, **personnel** et **progressif**.

## I. Les catégories de revenus imposables

1. **Revenus professionnels** (commerçants, artisans, professions libérales) ;
2. **Revenus agricoles** ;
3. **Revenus salariaux et assimilés** (salaires, pensions) ;
4. **Revenus et profits fonciers** (loyers, plus-values immobilières) ;
5. **Revenus et profits de capitaux mobiliers** (dividendes, intérêts, plus-values sur titres).

## II. L'IR sur les salaires

### 1. Du salaire brut au salaire net imposable

$$\text{SBI} = \text{salaire brut} - \text{éléments exonérés (certaines indemnités)}$$

$$\text{SNI} = \text{SBI} - \text{frais professionnels} - \text{cotisations sociales (CNSS, AMO)} - \text{autres déductions}$$

**Frais professionnels** (déduction forfaitaire) :

| SBI annuel | Taux | Plafond annuel |
|---|---|---|
| Jusqu'à 78 000 DH | 35 % | 30 000 DH |
| Plus de 78 000 DH | 25 % | 35 000 DH |

**Cotisations salariales** (2026) : CNSS (prestations sociales) **4,48 %** d'un salaire plafonné à **6 000 DH par mois** ; AMO **2,26 %** du salaire brut, sans plafond.

### 2. Le barème de l'IR (en vigueur depuis 2025)

| Revenu net imposable annuel | Taux | Somme à déduire |
|---|---|---|
| 0 à 40 000 DH | 0 % | 0 |
| 40 001 à 60 000 DH | 10 % | 4 000 |
| 60 001 à 80 000 DH | 20 % | 10 000 |
| 80 001 à 100 000 DH | 30 % | 18 000 |
| 100 001 à 180 000 DH | 34 % | 22 000 |
| Plus de 180 000 DH | 37 % | 27 400 |

$$\text{IR brut} = \text{SNI} \times \text{taux} - \text{somme à déduire}$$

La « somme à déduire » permet d'appliquer rapidement le barème **progressif par tranches**.

### 3. Les charges de famille

$$\text{IR net} = \text{IR brut} - \text{déduction pour charges de famille}$$

La déduction est accordée pour le conjoint et chaque enfant à charge, dans la **limite de 6 personnes** ; son montant annuel par personne a été porté à **600 DH** par la loi de finances 2026 (500 DH en 2025).

### 4. Le recouvrement

L'IR sur salaires est prélevé par l'employeur par **retenue à la source** chaque mois, puis versé à l'État.

## III. Les autres revenus (aperçu)

- **Revenus professionnels** : régime du **résultat net réel**, du **résultat net simplifié**, ou de la **contribution professionnelle unique (CPU)** pour les petits contribuables ; statut de l'**auto-entrepreneur** (imposition libératoire sur le chiffre d'affaires) ;
- **Revenus fonciers** et **capitaux mobiliers** : taux spécifiques, souvent libératoires.
`,
    exercices: md`
### Exercice 1 — IR d'un salarié (données fictives, barème et déductions 2026)

Un salarié marié avec 2 enfants à charge perçoit un salaire brut imposable de 8 000 DH par mois (96 000 DH par an).

1. Calculez les frais professionnels et les cotisations CNSS et AMO annuelles.
2. Calculez le SNI annuel.
3. Calculez l'IR brut, l'IR net annuel et l'IR mensuel.

<details><summary>Voir le corrigé</summary>

1. SBI $= 96\,000 > 78\,000$ → frais professionnels $= 25\% \times 96\,000 = 24\,000$ DH (< plafond de 35 000).
   CNSS $= 4{,}48\% \times 6\,000 \times 12 = 3\,225{,}60$ DH ; AMO $= 2{,}26\% \times 96\,000 = 2\,169{,}60$ DH.
2. $SNI = 96\,000 - 24\,000 - 3\,225{,}60 - 2\,169{,}60 = 66\,604{,}80$ DH.
3. Tranche de 60 001 à 80 000 : IR brut $= 66\,604{,}80 \times 20\% - 10\,000 = 3\,320{,}96$ DH.
   Charges de famille : 3 personnes (conjoint + 2 enfants) $\times 600 = 1\,800$ DH.
   IR net annuel $= 3\,320{,}96 - 1\,800 = 1\,520{,}96$ DH ; IR mensuel $\approx 126{,}75$ DH.

</details>

### Exercice 2 — Lecture du barème

Calculez l'IR brut pour des SNI annuels de 38 000 DH, 55 000 DH et 150 000 DH.

<details><summary>Voir le corrigé</summary>

- 38 000 : tranche exonérée → **0 DH** ;
- 55 000 : $55\,000 \times 10\% - 4\,000 = 1\,500$ DH ;
- 150 000 : $150\,000 \times 34\% - 22\,000 = 29\,000$ DH.

</details>
`,
    resume: md`
## L'essentiel — L'IR

- Impôt **direct, personnel, progressif** sur les revenus des personnes physiques.
- **5 catégories** : professionnels, agricoles, salariaux, fonciers, capitaux mobiliers.
- **SNI** = SBI − frais professionnels (35 % plafonné à 30 000 si SBI ≤ 78 000 ; sinon 25 % plafonné à 35 000) − CNSS (4,48 % plafonné à 6 000/mois) − AMO (2,26 %).
- **Barème** : 0 % jusqu'à 40 000 ; 10 % ; 20 % ; 30 % ; 34 % ; 37 % au-delà de 180 000.
- IR brut = SNI × taux − somme à déduire ; **IR net** = IR brut − charges de famille (600 DH/personne en 2026, 6 personnes max).
- **Retenue à la source** par l'employeur.
`,
    qcm: [
      { q: "L'IR est un impôt :", choix: ["Indirect et proportionnel", "Direct et progressif", "Local", "Sur la consommation"], bonne: 1, explication: "Son taux augmente avec le revenu." },
      { q: "Depuis 2025, la tranche exonérée de l'IR va jusqu'à :", choix: ["30 000 DH", "40 000 DH", "60 000 DH", "80 000 DH"], bonne: 1, explication: "Seuil relevé par la loi de finances 2025." },
      { q: "La cotisation CNSS salariale est plafonnée à un salaire mensuel de :", choix: ["4 000 DH", "6 000 DH", "10 000 DH", "Aucun plafond"], bonne: 1, explication: "4,48 % dans la limite de 6 000 DH par mois." },
      { q: "SNI de 90 000 DH : IR brut =", choix: ["9 000", "27 000", "12 000", "18 000"], bonne: 0, explication: "90 000 × 30 % − 18 000 = 9 000." },
      { q: "L'IR sur salaires est recouvré par :", choix: ["Voie de rôle", "Retenue à la source", "Paiement annuel du salarié", "La CNSS"], bonne: 1, explication: "L'employeur le prélève chaque mois." },
    ],
  },
};
