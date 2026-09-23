// Fiscalité des Entreprises (S5) — compléments par chapitre.
// Les taux et barèmes des exercices sont des hypothèses pédagogiques : ils
// changent avec les lois de finances.
const md = String.raw;

export default {
  1: {
    titre: "Introduction au système fiscal marocain",
    resume: md`
## L'essentiel — Le système fiscal marocain

- L'**impôt** est un prélèvement **pécuniaire**, **obligatoire**, **définitif** et **sans contrepartie directe**, destiné à couvrir les charges publiques.
- **Impôts directs** (IS, IR : supportés par celui qui les paie) et **indirects** (TVA, droits de douane : répercutés sur le consommateur).
- Selon l'assiette : impôts sur le **revenu**, sur la **dépense**, sur le **capital**.
- Sources : **Code général des impôts (CGI)**, **loi de finances** annuelle, notes circulaires de la **DGI**, conventions fiscales internationales.
- Principes : **légalité** (pas d'impôt sans loi), **annualité**, **territorialité**.
- Les taux changent avec les lois de finances : toujours vérifier la version en vigueur.
`,
    exercices: md`
### Exercice 2 — Principes et classifications

1. Quel principe fiscal est en cause dans chaque situation ? a) Une note interne de l'administration prétend créer une nouvelle taxe. b) Une société marocaine se demande si le bénéfice de sa succursale au Sénégal est imposable au Maroc. c) L'impôt doit être établi sur la base d'un exercice.
2. Classez selon l'assiette (revenu, dépense, capital) : IR, TVA, droits d'enregistrement sur la vente d'un immeuble, IS, droits de douane.

<details><summary>Voir le corrigé</summary>

**1)** a) **Légalité** : seule la loi peut créer un impôt ; b) **territorialité** (sous réserve de la convention fiscale entre les deux pays) ; c) **annualité**.

**2)** Revenu : IR, IS. Dépense : TVA, droits de douane. Capital : droits d'enregistrement sur la mutation d'immeuble.

</details>
`,
    qcm: [
      { q: "L'impôt est un prélèvement :", choix: ["Facultatif", "Avec contrepartie directe", "Obligatoire et sans contrepartie directe", "Remboursable"], bonne: 2, explication: "C'est ce qui le distingue d'une redevance." },
      { q: "La TVA est un impôt :", choix: ["Direct sur le revenu", "Indirect sur la dépense", "Direct sur le capital", "Local"], bonne: 1, explication: "Elle est supportée par le consommateur final." },
      { q: "Le texte fiscal de référence au Maroc est :", choix: ["Le Code de commerce", "Le Code général des impôts", "Le DOC", "La loi 17-95"], bonne: 1, explication: "Il regroupe IS, IR, TVA et droits d'enregistrement." },
      { q: "Le principe de légalité signifie que :", choix: ["L'impôt est payé chaque année", "Aucun impôt ne peut être prélevé sans loi", "L'impôt s'applique au territoire", "L'impôt est progressif"], bonne: 1, explication: "C'est un principe constitutionnel." },
      { q: "Qui modifie chaque année certaines dispositions du CGI ?", choix: ["La DGI par circulaire", "La loi de finances", "Les tribunaux", "Bank Al-Maghrib"], bonne: 1, explication: "Taux, exonérations et seuils y sont revus." },
    ],
  },

  2: {
    titre: "La TVA : champ d'application et taux",
    resume: md`
## L'essentiel — TVA : champ et taux

- La TVA est **collectée** à chaque stade par les entreprises mais **supportée** par le consommateur final.
- $\text{TVA due} = \text{TVA collectée} - \text{TVA déductible}$.
- Opérations imposables **par nature**, **par option**, **exonérées sans droit à déduction** (l'entreprise ne récupère pas la TVA d'amont) et **exonérées avec droit à déduction** (exportations : taux 0 %, TVA d'amont récupérable).
- Taux (à vérifier selon la loi de finances) : **20 %** taux normal et taux réduits (14 %, 10 %, 7 % dans le schéma classique).
- $TTC = HT \times (1 + t)$ ; $HT = \dfrac{TTC}{1 + t}$ ; $TVA = HT \times t$.
`,
    exercices: md`
### Exercice 2 — Calculs HT, TVA, TTC

1. Une facture d'hôtel s'élève à 5 000 DH HT au taux de 10 %. Calculez la TVA et le TTC.
2. Une facture d'électricité est de 11 400 DH TTC au taux de 14 %. Retrouvez le HT et la TVA.
3. Une vente de marchandises est de 24 000 DH TTC au taux normal de 20 %. Retrouvez le HT et la TVA.
4. Quelle différence pour l'entreprise entre une vente exonérée **sans** droit à déduction et une exportation exonérée **avec** droit à déduction ?

<details><summary>Voir le corrigé</summary>

1. $TVA = 5\,000 \times 10\% = 500$ DH ; $TTC = 5\,500$ DH.
2. $HT = 11\,400 / 1{,}14 = 10\,000$ DH ; $TVA = 1\,400$ DH.
3. $HT = 24\,000 / 1{,}2 = 20\,000$ DH ; $TVA = 4\,000$ DH.
4. Dans les deux cas, aucune TVA n'est facturée au client. Mais sans droit à déduction, la TVA payée sur les achats reste une **charge** pour l'entreprise ; avec droit à déduction (export), elle est **récupérée**.

</details>
`,
    qcm: [
      { q: "Qui supporte finalement la TVA ?", choix: ["Le producteur", "Le grossiste", "Le consommateur final", "L'État"], bonne: 2, explication: "Les entreprises ne font que la collecter." },
      { q: "Une vente de 10 000 DH HT au taux de 20 % donne un TTC de :", choix: ["10 200 DH", "12 000 DH", "8 000 DH", "12 500 DH"], bonne: 1, explication: "10 000 × 1,2 = 12 000 DH." },
      { q: "Les exportations sont :", choix: ["Taxées au taux normal", "Exonérées avec droit à déduction", "Exonérées sans droit à déduction", "Hors champ sans récupération"], bonne: 1, explication: "Taux 0 % et TVA d'amont récupérable." },
      { q: "Un montant de 6 000 DH TTC au taux de 20 % correspond à un HT de :", choix: ["4 800 DH", "5 000 DH", "7 200 DH", "5 200 DH"], bonne: 1, explication: "6 000 / 1,2 = 5 000 DH." },
      { q: "Une entreprise exonérée sans droit à déduction :", choix: ["Récupère toute la TVA sur ses achats", "Ne récupère pas la TVA sur ses achats", "Facture la TVA à 20 %", "Obtient un crédit de TVA remboursable"], bonne: 1, explication: "La TVA d'amont devient une charge." },
    ],
  },

  3: {
    titre: "La TVA : déductions et déclaration",
    resume: md`
## L'essentiel — Déductions et déclaration de TVA

- Conditions de déduction : **forme** (facture régulière mentionnant la TVA) et **fond** (dépense utile à l'exploitation, non exclue du droit à déduction).
- La règle du **décalage d'un mois** a été supprimée dans la plupart des cas : bien lire l'énoncé d'examen.
- **Prorata** pour une entreprise mixte : $\dfrac{CA_{\text{taxable TTC}} + CA_{\text{exonéré avec droit, TTC fictif}}}{\text{même numérateur} + CA_{\text{exonéré sans droit}}}$ ; il s'applique à la TVA sur les dépenses communes.
- $\text{TVA à payer} = \text{TVA facturée} - \text{TVA récupérable (charges + immobilisations)} - \text{crédit antérieur}$.
- Un résultat négatif est un **crédit de TVA**, reporté sur les déclarations suivantes.
- Déclaration **mensuelle** ou **trimestrielle** selon le chiffre d'affaires.
`,
    exercices: md`
### Exercice 2 — Le prorata de déduction

Une entreprise réalise : 800 000 DH HT de ventes taxables à 20 % ; 200 000 DH de ventes exonérées sans droit à déduction ; 300 000 DH HT d'exportations. La TVA sur ses achats communs s'élève à 50 000 DH.

1. Calculez le prorata de déduction.
2. Calculez la TVA déductible sur les achats communs.

<details><summary>Voir le corrigé</summary>

**1)** Numérateur : ventes taxables TTC $800\,000 \times 1{,}2 = 960\,000$ + exportations majorées fictivement de la TVA $300\,000 \times 1{,}2 = 360\,000$, soit $1\,320\,000$. Dénominateur : $1\,320\,000 + 200\,000 = 1\,520\,000$.

$$\text{Prorata} = \frac{1\,320\,000}{1\,520\,000} \approx 86{,}84\%$$

**2)** TVA déductible $= 50\,000 \times 86{,}84\% \approx 43\,421$ DH ; les 6 579 DH restants sont une charge.

</details>
`,
    qcm: [
      { q: "Pour être déductible, la TVA doit notamment figurer sur :", choix: ["Un bon de commande", "Une facture régulière", "Un devis", "Un contrat oral"], bonne: 1, explication: "C'est la condition de forme." },
      { q: "TVA facturée 30 000, TVA récupérable 22 000, crédit antérieur 3 000 : la TVA à payer est de :", choix: ["5 000", "8 000", "11 000", "−5 000"], bonne: 0, explication: "30 000 − 22 000 − 3 000 = 5 000." },
      { q: "Si la TVA récupérable dépasse la TVA facturée, l'entreprise a :", choix: ["Une TVA à payer", "Un crédit de TVA", "Une amende", "Une exonération"], bonne: 1, explication: "Il est reporté sur les déclarations suivantes." },
      { q: "Le prorata concerne les entreprises qui réalisent :", choix: ["Uniquement des ventes taxables", "Des opérations taxables et des opérations exonérées sans droit à déduction", "Uniquement des exportations", "Uniquement des prestations de services"], bonne: 1, explication: "Elles ne récupèrent qu'une fraction de la TVA commune." },
      { q: "Dans le prorata, les exportations sont retenues :", choix: ["Pour zéro", "Majorées fictivement de la TVA, au numérateur et au dénominateur", "Seulement au dénominateur", "Seulement en HT au numérateur"], bonne: 1, explication: "Elles ouvrent droit à déduction." },
    ],
  },

  4: {
    titre: "L'impôt sur les sociétés (IS) : champ d'application",
    resume: md`
## L'essentiel — IS : champ d'application

- Sont **passibles de plein droit** : SA, SARL, sociétés en commandite par actions, établissements publics industriels et commerciaux.
- Sont **exclues sauf option** : SNC et sociétés en commandite simple composées uniquement de personnes physiques, sociétés de fait (imposées à l'IR au nom des associés).
- **Territorialité** : l'IS frappe les bénéfices réalisés **au Maroc**, y compris par une société étrangère via un établissement stable, et ceux que les conventions attribuent au Maroc.
- **Exonérations** et taux réduits : exportateurs, zones d'accélération industrielle, coopératives… selon les conditions et la loi de finances en vigueur.
`,
    exercices: md`
### Exercice 2 — Qui paie l'IS au Maroc ?

Pour chaque entité, dites si elle est soumise à l'IS au Maroc et sur quels bénéfices :

1. Une SA marocaine qui a aussi une succursale au Sénégal.
2. Une société française qui exploite une succursale à Casablanca.
3. Une SNC de trois associés personnes physiques, sans option.
4. La même SNC après une option irrévocable pour l'IS.

<details><summary>Voir le corrigé</summary>

1. Oui, de plein droit, sur ses bénéfices réalisés au Maroc ; le sort des bénéfices de la succursale sénégalaise dépend de la territorialité et de la convention fiscale.
2. Oui, sur les bénéfices de sa succursale marocaine (établissement stable).
3. Non : chaque associé est imposé à l'**IR** sur sa quote-part.
4. Oui : l'option la fait entrer dans le champ de l'IS.

</details>
`,
    qcm: [
      { q: "Une SARL est soumise à l'IS :", choix: ["De plein droit", "Sur option seulement", "Jamais", "Seulement si elle exporte"], bonne: 0, explication: "C'est une société de capitaux." },
      { q: "Une SNC composée uniquement de personnes physiques est en principe soumise :", choix: ["À l'IS", "À l'IR au nom des associés", "À la TVA seulement", "À aucun impôt"], bonne: 1, explication: "Sauf option pour l'IS." },
      { q: "Le principe de territorialité de l'IS vise :", choix: ["Les bénéfices réalisés au Maroc", "Tous les bénéfices mondiaux sans exception", "Le seul chiffre d'affaires", "Les salaires des dirigeants"], bonne: 0, explication: "Sous réserve des conventions fiscales." },
      { q: "Une société étrangère ayant une succursale au Maroc :", choix: ["N'est jamais imposable au Maroc", "Est imposable au Maroc sur les bénéfices de cette succursale", "Paie seulement la TVA", "Est exonérée d'office"], bonne: 1, explication: "La succursale est un établissement stable." },
      { q: "Les exonérations et taux réduits d'IS sont fixés :", choix: ["Librement par l'entreprise", "Par le CGI et les lois de finances", "Par le commissaire aux comptes", "Par la banque"], bonne: 1, explication: "Ils varient selon les années." },
    ],
  },

  5: {
    titre: "L'IS : détermination du résultat fiscal",
    resume: md`
## L'essentiel — Du résultat comptable au résultat fiscal

- $\text{Résultat fiscal} = \text{résultat comptable avant IS} + \text{réintégrations} - \text{déductions}$.
- **Réintégrations** : amendes et pénalités, dons au-delà du plafond, charges non justifiées, amortissements excédentaires, IS lui-même.
- **Déductions** : produits exonérés (dividendes de filiales imposées à l'IS, sous conditions), abattements prévus par la loi, déficits antérieurs.
- **Report déficitaire** : le déficit d'exploitation est reportable sur les **4 exercices suivants** ; la part due aux **amortissements** est reportable **sans limite**.
- Le calcul se présente dans un tableau : résultat comptable, + réintégrations, − déductions, − déficits imputés.
`,
    exercices: md`
### Exercice 2 — Réintégrations, déductions et déficits

Pour l'exercice N, une société présente un résultat comptable avant IS de 300 000 DH. On relève : amortissements excédentaires 12 000 ; amendes 5 000 ; charges sans pièce justificative 3 000 ; dividendes reçus d'une filiale marocaine (exonérés) 10 000. Déficits antérieurs non encore imputés : exercice N−5 : 40 000 (hors amortissements) ; exercice N−2 : 60 000, dont 20 000 d'amortissements.

Déterminez le résultat fiscal de N.

<details><summary>Voir le corrigé</summary>

| Élément | Montant |
|---|--:|
| Résultat comptable | 300 000 |
| + Amortissements excédentaires | +12 000 |
| + Amendes | +5 000 |
| + Charges non justifiées | +3 000 |
| − Dividendes exonérés | −10 000 |
| Résultat avant imputation des déficits | 310 000 |
| − Déficit N−2 (dans le délai de 4 ans et amortissements sans limite) | −60 000 |
| **Résultat fiscal** | **250 000** |

Le déficit de N−5, hors amortissements, n'est plus reportable : le délai de 4 exercices est dépassé.

</details>
`,
    qcm: [
      { q: "Une amende fiscale comptabilisée en charge doit être :", choix: ["Déduite", "Réintégrée", "Ignorée", "Amortie"], bonne: 1, explication: "Elle n'est pas déductible fiscalement." },
      { q: "Les dividendes reçus d'une filiale marocaine soumise à l'IS sont en principe :", choix: ["Réintégrés", "Déduits (produits exonérés)", "Taxés deux fois", "Ajoutés au CA"], bonne: 1, explication: "Pour éviter la double imposition." },
      { q: "Le déficit d'exploitation est reportable sur :", choix: ["2 exercices", "4 exercices", "10 exercices", "Sans limite"], bonne: 1, explication: "La part liée aux amortissements est, elle, reportable sans limite." },
      { q: "Résultat comptable 100 000, réintégrations 20 000, déductions 5 000 : le résultat fiscal vaut :", choix: ["75 000", "115 000", "125 000", "95 000"], bonne: 1, explication: "100 000 + 20 000 − 5 000." },
      { q: "L'IS comptabilisé en charge est :", choix: ["Déductible de son propre calcul", "Réintégré", "Un produit", "Ignoré"], bonne: 1, explication: "L'IS n'est jamais déductible pour calculer l'IS." },
    ],
  },

  6: {
    titre: "L'IS : liquidation et paiement",
    resume: md`
## L'essentiel — Liquidation de l'IS

- $\text{IS calculé} = \text{résultat fiscal} \times \text{taux}$ (barème fixé par la loi de finances).
- La **cotisation minimale** (CM) est due même en cas de déficit ou de faible bénéfice ; base large (CA HT, produits financiers, subventions…).
- $\text{IS dû} = \max(\text{IS calculé} \;;\; CM)$.
- Les sociétés nouvelles sont exonérées de CM pendant leurs premiers exercices (selon le CGI).
- **Acomptes provisionnels** : en principe 4 acomptes de **25 %** de l'impôt de l'exercice précédent.
- **Liquidation** : IS dû − acomptes versés = reliquat à payer, ou excédent imputé sur les acomptes suivants.
`,
    exercices: md`
### Exercice 2 — IS ou cotisation minimale ?

Une société (qui n'est plus en période d'exonération) réalise en N un CA HT de 5 000 000 DH et 50 000 DH de produits financiers. Son résultat fiscal est de 60 000 DH. Elle a versé en N quatre acomptes de 5 000 DH. Hypothèses pédagogiques : taux d'IS 20 % ; taux de CM 0,25 %.

1. Calculez l'IS calculé et la cotisation minimale.
2. Déterminez l'IS dû et le montant à régulariser.

<details><summary>Voir le corrigé</summary>

**1)** IS calculé $= 60\,000 \times 20\% = 12\,000$ DH ; CM $= (5\,000\,000 + 50\,000) \times 0{,}25\% = 12\,625$ DH.

**2)** IS dû $= \max(12\,000 \;;\; 12\,625) = 12\,625$ DH. Acomptes versés $= 20\,000$ DH : l'excédent de $7\,375$ DH s'impute sur les acomptes suivants.

</details>
`,
    qcm: [
      { q: "La cotisation minimale est due :", choix: ["Seulement en cas de bénéfice élevé", "Même en cas de déficit", "Uniquement par les SNC", "Uniquement la première année"], bonne: 1, explication: "C'est un minimum d'imposition." },
      { q: "L'IS dû est égal à :", choix: ["IS calculé + CM", "Max(IS calculé ; CM)", "Min(IS calculé ; CM)", "CM − IS calculé"], bonne: 1, explication: "On retient le plus élevé des deux." },
      { q: "IS de l'exercice précédent 60 000 DH : chaque acompte vaut :", choix: ["60 000", "30 000", "15 000", "5 000"], bonne: 2, explication: "25 % × 60 000 = 15 000 DH." },
      { q: "Acomptes versés 80 000, IS dû 70 000 :", choix: ["Reliquat à payer de 10 000", "Excédent de 10 000 imputable", "Rien à régulariser", "Amende de 10 000"], bonne: 1, explication: "L'excédent s'impute sur les acomptes suivants." },
      { q: "Les taux d'IS applicables sont fixés par :", choix: ["L'entreprise", "La loi (CGI et lois de finances)", "Le commissaire aux comptes", "La chambre de commerce"], bonne: 1, explication: "D'où la nécessité de vérifier l'année en cours." },
    ],
  },

  7: {
    titre: "L'impôt sur le revenu (IR)",
    resume: md`
## L'essentiel — L'IR

- Catégories : revenus **professionnels**, **salariaux** et assimilés, **fonciers**, **de capitaux mobiliers**, **agricoles**.
- Revenu salarial net imposable $= \text{brut imposable} - \text{exonérations} - \text{frais professionnels forfaitaires} - \text{cotisations sociales et retraite}$.
- Barème **progressif par tranches** : chaque tranche est taxée à son propre taux (on ne taxe pas tout le revenu au taux le plus élevé).
- $\text{IR net} = \text{IR brut} - \text{réductions pour charges de famille}$.
- **Taux marginal** (taux de la dernière tranche) ≠ **taux moyen** (IR / revenu imposable).
- Sur les salaires, l'IR est **retenu à la source** par l'employeur chaque mois.
`,
    exercices: md`
### Exercice 2 — Calcul de l'IR avec un barème fictif

Un salarié perçoit un salaire brut imposable annuel de 120 000 DH. Frais professionnels forfaitaires : 20 % ; cotisations sociales et retraite : 6 000 DH. Il a 3 personnes à charge (réduction fictive de 500 DH par personne). Barème **fictif** : jusqu'à 40 000 : 0 % ; de 40 001 à 60 000 : 10 % ; de 60 001 à 80 000 : 20 % ; au-delà : 30 %.

1. Calculez le revenu net imposable.
2. Calculez l'IR brut, l'IR net annuel et mensuel.
3. Comparez le taux marginal et le taux moyen.

<details><summary>Voir le corrigé</summary>

**1)** $120\,000 - 24\,000 - 6\,000 = 90\,000$ DH.

**2)**

| Tranche | Montant taxé | Taux | Impôt |
|---|--:|--:|--:|
| 0 – 40 000 | 40 000 | 0 % | 0 |
| 40 001 – 60 000 | 20 000 | 10 % | 2 000 |
| 60 001 – 80 000 | 20 000 | 20 % | 4 000 |
| Au-delà de 80 000 | 10 000 | 30 % | 3 000 |
| **IR brut** | | | **9 000** |

IR net $= 9\,000 - 3 \times 500 = 7\,500$ DH par an, soit 625 DH retenus chaque mois.

**3)** Taux marginal : 30 % ; taux moyen $= 7\,500 / 90\,000 \approx 8{,}3\%$.

</details>
`,
    qcm: [
      { q: "Les loyers perçus relèvent des revenus :", choix: ["Salariaux", "Fonciers", "De capitaux mobiliers", "Agricoles"], bonne: 1, explication: "Revenus et profits fonciers." },
      { q: "Un barème progressif par tranches signifie que :", choix: ["Tout le revenu est taxé au taux le plus élevé", "Chaque tranche est taxée à son propre taux", "Le taux est unique", "Le taux baisse quand le revenu augmente"], bonne: 1, explication: "Le taux marginal ne s'applique qu'à la dernière tranche." },
      { q: "L'IR sur salaires est prélevé :", choix: ["Par le salarié en fin d'année", "À la source par l'employeur", "Par la banque", "Par la CNSS"], bonne: 1, explication: "L'employeur le reverse chaque mois." },
      { q: "Le taux moyen d'imposition est :", choix: ["Toujours égal au taux marginal", "IR / revenu imposable", "Le taux de la première tranche", "Fixé à 20 %"], bonne: 1, explication: "Il est inférieur au taux marginal dans un barème progressif." },
      { q: "Les dividendes perçus par un particulier relèvent des revenus :", choix: ["Fonciers", "Professionnels", "De capitaux mobiliers", "Salariaux"], bonne: 2, explication: "Avec les intérêts et plus-values sur titres." },
    ],
  },

  8: {
    titre: "Droits d'enregistrement, taxe professionnelle et contrôle fiscal",
    resume: md`
## L'essentiel — Enregistrement, taxe professionnelle, contrôle

- **Droits d'enregistrement** : dus sur certains actes (constitution de société, cession de fonds de commerce, mutation d'immeuble), à taux **proportionnel** ou **fixe**.
- **Taxe professionnelle** (ex-patente) : impôt **local** annuel, assis sur la **valeur locative** des locaux et équipements professionnels ; exonération temporaire des nouvelles entreprises.
- Obligations déclaratives : TVA (mensuelle ou trimestrielle), acomptes d'IS (trimestriels), déclaration du résultat fiscal (**dans les 3 mois** de la clôture), déclaration annuelle des salaires.
- **Contrôle fiscal** : procédure **contradictoire** — avis de vérification, vérification, notification des redressements, réponse du contribuable, recours devant les commissions puis les tribunaux.
`,
    exercices: md`
### Exercice 2 — Cession d'un fonds et calendrier fiscal

1. Un commerçant cède son fonds de commerce pour 800 000 DH. Avec un taux proportionnel **supposé** de 6 %, calculez les droits d'enregistrement.
2. Une société clôture son exercice le 31 décembre N. Avant quelle date doit-elle déposer sa déclaration du résultat fiscal ?
3. Remettez dans l'ordre les étapes d'un contrôle fiscal : a) notification des redressements ; b) avis de vérification ; c) recours devant la commission ; d) vérification de la comptabilité ; e) réponse du contribuable.

<details><summary>Voir le corrigé</summary>

1. $800\,000 \times 6\% = 48\,000$ DH.
2. Dans les **3 mois** suivant la clôture, soit avant le **31 mars N+1**.
3. b → d → a → e → c.

</details>
`,
    qcm: [
      { q: "Les droits d'enregistrement frappent :", choix: ["Les bénéfices", "Certains actes juridiques", "Les salaires", "Les exportations"], bonne: 1, explication: "Par exemple une cession de fonds de commerce." },
      { q: "La taxe professionnelle est calculée sur :", choix: ["Le bénéfice", "La valeur locative des locaux et équipements", "Le CA à l'export", "Le capital social"], bonne: 1, explication: "C'est un impôt local." },
      { q: "La déclaration du résultat fiscal se dépose :", choix: ["Chaque mois", "Dans les 3 mois suivant la clôture", "Tous les 5 ans", "Le jour de la clôture"], bonne: 1, explication: "Avec la liasse fiscale." },
      { q: "La procédure de vérification fiscale est :", choix: ["Secrète", "Contradictoire", "Sans recours possible", "Menée par le CAC"], bonne: 1, explication: "Le contribuable peut répondre et contester." },
      { q: "Les acomptes provisionnels d'IS sont versés :", choix: ["Chaque mois", "Chaque trimestre", "Une fois par an", "Tous les deux ans"], bonne: 1, explication: "Quatre acomptes par exercice." },
    ],
  },
};
