// Comptabilité générale 1 (S1) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Introduction à la comptabilité générale",
    description: "Introduction à la comptabilité générale au Maroc : rôles, utilisateurs, loi 9-88, CGNC, états de synthèse et principes comptables fondamentaux.",
    resume: md`
## L'essentiel — Introduction à la comptabilité générale

- Comptabilité générale : saisir, classer, enregistrer les opérations à partir de **pièces justificatives** ; présenter le **bilan** (patrimoine) et le **CPC** (résultat) ; ≠ comptabilité analytique (coûts, facultative).
- Rôles : outil de gestion, moyen de preuve, information des tiers, base fiscale, source statistique.
- Utilisateurs : dirigeants, associés, banques, fournisseurs, clients, salariés, fisc.
- **Loi 9-88** : comptabilité obligatoire pour les commerçants ; livre-journal, grand livre, livre d'inventaire ; inventaire annuel ; états de synthèse ; conservation **10 ans**.
- **CGNC** (CNC) : principes, évaluation, plan comptable, 5 états de synthèse (bilan, CPC, ESG, TF, ETIC) ; modèle simplifié pour les petites entreprises.
- 7 principes : continuité, permanence des méthodes, coût historique, spécialisation des exercices, prudence, clarté, importance significative.
`,
    exercices: md`
### Exercice 2 — Quel principe ?

Identifiez le principe comptable en jeu :
1. Une entreprise constate une provision pour un litige probable.
2. Elle n'enregistre pas la hausse de valeur de son terrain.
3. Elle rattache à N les intérêts courus d'un emprunt payés en N+1.
4. Elle ne compense pas sa dette envers un fournisseur avec la créance qu'elle a sur lui.
5. Elle évalue ses stocks comme l'an dernier.

<details><summary>Voir le corrigé</summary>

1. **Prudence**. 2. **Coût historique** (et prudence). 3. **Spécialisation des exercices**. 4. **Clarté** (non-compensation). 5. **Permanence des méthodes**.

</details>

### Exercice 3 — Utilisateurs et informations

Associez chaque utilisateur à l'information qu'il recherche en priorité : 1) une banque ; 2) un actionnaire ; 3) la DGI ; 4) un fournisseur ; 5) le dirigeant.
Informations : a) résultat fiscal ; b) capacité de remboursement ; c) coût et marge par produit ; d) dividendes et valeur de l'entreprise ; e) délai de paiement et solvabilité à court terme.

<details><summary>Voir le corrigé</summary>

1-b ; 2-d ; 3-a ; 4-e ; 5-c.

</details>
`,
    qcm: [
      { q: "Le document qui présente le patrimoine de l'entreprise à une date donnée est :", choix: ["Le CPC", "Le bilan", "Le grand livre", "La balance"], bonne: 1, explication: "Le CPC présente l'activité d'une période." },
      { q: "La loi relative aux obligations comptables des commerçants au Maroc est la loi :", choix: ["17-95", "9-88", "5-96", "15-89"], bonne: 1, explication: "Elle rend le CGNC obligatoire." },
      { q: "Les documents comptables doivent être conservés :", choix: ["3 ans", "5 ans", "10 ans", "20 ans"], bonne: 2, explication: "Ainsi que les pièces justificatives." },
      { q: "Les états de synthèse du CGNC sont au nombre de :", choix: ["3", "5", "7", "2"], bonne: 1, explication: "Bilan, CPC, ESG, TF, ETIC." },
      { q: "Le principe qui interdit de réévaluer librement un terrain est :", choix: ["La prudence seule", "Le coût historique", "La clarté", "La continuité"], bonne: 1, explication: "Les biens restent à leur coût d'entrée." },
      { q: "Constater une provision pour une perte probable applique le principe :", choix: ["De prudence", "De clarté", "De permanence", "D'importance significative"], bonne: 0, explication: "Les pertes probables sont constatées." },
      { q: "La comptabilité analytique :", choix: ["Est obligatoire", "Sert au calcul des coûts pour la gestion interne", "Remplace la comptabilité générale", "Est tenue par la DGI"], bonne: 1, explication: "Elle est facultative." },
      { q: "Au Maroc, la normalisation comptable relève du :", choix: ["Conseil national de la comptabilité", "Bank Al-Maghrib", "Conseil de la concurrence", "HCP"], bonne: 0, explication: "Il a élaboré le CGNC." },
      { q: "Une assurance annuelle payée en décembre : la part de l'exercice est :", choix: ["La totalité", "Un douzième", "Rien", "La moitié"], bonne: 1, explication: "Spécialisation des exercices." },
      { q: "L'exercice comptable dure en général :", choix: ["Un mois", "Douze mois", "Deux ans", "Trois mois"], bonne: 1, explication: "Souvent du 1er janvier au 31 décembre." },
    ],
  },

  2: {
    titre: "Le patrimoine et le bilan",
    description: "Le patrimoine et le bilan selon le CGNC : actif, passif, masses du bilan, équilibre, incidence des opérations et résultat par différence, exercices corrigés.",
    resume: md`
## L'essentiel — Le patrimoine et le bilan

- Patrimoine : biens et créances − dettes = **situation nette** (capitaux propres).
- Bilan : photographie à une **date** ; actif = **emplois**, passif = **ressources** ; toujours équilibré.
- Masses CGNC : actif immobilisé (classe 2), actif circulant (classe 3), trésorerie-actif (classe 5) / financement permanent (classe 1), passif circulant (classe 4), trésorerie-passif (classe 5).
- Capitaux propres : capital, réserves, report à nouveau, résultat (négatif si perte).
- Toute opération touche au moins deux postes ; quatre cas : A+/P+, A−/P−, A+/A−, P+/P−.
- Résultat = SN fin − SN début − apports + prélèvements.
`,
    exercices: md`
### Exercice 2 — Classer les éléments

Indiquez la masse du bilan de chaque élément : 1) brevet ; 2) prêt accordé à un salarié pour 3 ans ; 3) stock de matières premières ; 4) avances reçues des clients ; 5) découvert bancaire ; 6) emprunt obligataire ; 7) chèques à encaisser ; 8) dépôts et cautionnements versés.

<details><summary>Voir le corrigé</summary>

1) Actif immobilisé (incorporelle). 2) Actif immobilisé (financière : prêt immobilisé). 3) Actif circulant (stocks). 4) Passif circulant (clients créditeurs, avances reçues). 5) Trésorerie-passif. 6) Financement permanent (dettes de financement). 7) Trésorerie-actif. 8) Actif immobilisé (financière).

</details>

### Exercice 3 — Résultat par différence

Situation nette au 01/01/N : 420 000 DH ; au 31/12/N : 505 000 DH. Pendant N, l'associé a apporté un véhicule de 60 000 DH et prélevé 18 000 DH pour ses besoins personnels.

1. Calculez le résultat de N.
2. Quel serait le résultat sans apport ni prélèvement ?

<details><summary>Voir le corrigé</summary>

**1)** $R = 505\,000 - 420\,000 - 60\,000 + 18\,000 = \mathbf{43\,000}$ DH (bénéfice).

**2)** $505\,000 - 420\,000 = 85\,000$ DH : ce chiffre surestimerait le résultat, car l'augmentation de 85 000 DH vient en partie de l'apport (+60 000) et a été réduite par le prélèvement (−18 000).

</details>
`,
    qcm: [
      { q: "La situation nette est égale à :", choix: ["Actif + dettes", "Biens et créances moins dettes", "Total du passif", "Chiffre d'affaires moins charges"], bonne: 1, explication: "Elle correspond aux capitaux propres." },
      { q: "L'actif du bilan représente :", choix: ["Les ressources", "Les emplois", "Les charges", "Les produits"], bonne: 1, explication: "L'utilisation des fonds." },
      { q: "Un emprunt bancaire à 5 ans figure dans :", choix: ["La trésorerie-passif", "Le financement permanent", "Le passif circulant", "L'actif circulant"], bonne: 1, explication: "Dettes de financement." },
      { q: "Les créances clients figurent dans :", choix: ["L'actif circulant", "Le passif circulant", "L'actif immobilisé", "Les capitaux propres"], bonne: 0, explication: "L'entreprise attend un encaissement." },
      { q: "Un découvert bancaire figure dans :", choix: ["La trésorerie-actif", "La trésorerie-passif", "Les dettes de financement", "L'actif circulant"], bonne: 1, explication: "Banque solde créditeur." },
      { q: "Achat d'un ordinateur au comptant : effet sur le total du bilan :", choix: ["Augmentation", "Diminution", "Aucun effet", "Doublement"], bonne: 2, explication: "Actif + et actif −." },
      { q: "Paiement d'un fournisseur par chèque : effet sur le total du bilan :", choix: ["Augmentation", "Diminution", "Aucun effet", "Impossible à dire"], bonne: 1, explication: "Actif − et passif −." },
      { q: "Une perte de l'exercice apparaît :", choix: ["À l'actif", "Au passif en négatif dans les capitaux propres", "En trésorerie", "Nulle part"], bonne: 1, explication: "Elle diminue les capitaux propres." },
      { q: "SN début 200 000, SN fin 260 000, apport 30 000. Le résultat est :", choix: ["60 000", "30 000", "90 000", "−30 000"], bonne: 1, explication: "260 000 − 200 000 − 30 000." },
      { q: "Le bilan est établi :", choix: ["Pour une période", "À une date donnée", "Chaque jour", "Seulement à la création"], bonne: 1, explication: "C'est une photographie du patrimoine." },
    ],
  },

  3: {
    titre: "Le compte de produits et charges (CPC)",
    description: "Le CPC selon le CGNC : charges et produits d'exploitation, financiers et non courants, achats revendus, variation de stocks et résultats intermédiaires.",
    resume: md`
## L'essentiel — Le CPC

- CPC : flux de l'exercice ; résultat = produits − charges (bénéfice ou perte), identique au résultat du bilan.
- Comptabilité d'**engagement** : une charge n'est pas une dépense ; l'achat d'immobilisation et le remboursement d'emprunt ne sont pas des charges.
- Trois niveaux : **exploitation** (61/71), **financier** (63/73), **non courant** (65/75) ; puis impôts sur les résultats (67).
- Achats revendus = achats + SI − SF ; variation de stocks de produits = SF − SI (en produits).
- Cascade : RE = I − II ; RF = IV − V ; RC = RE + RF ; RNC = VIII − IX ; RAI = RC + RNC ; RN = RAI − IS.
- Marge brute = ventes de marchandises − achats revendus.
`,
    exercices: md`
### Exercice 2 — Trier les opérations

Indiquez si chaque élément est une charge, un produit ou une opération de bilan, et précisez le niveau : 1) intérêts d'un emprunt ; 2) achat d'un camion ; 3) loyer du local ; 4) dividendes reçus ; 5) prix de cession d'un vieux matériel ; 6) remboursement d'un emprunt ; 7) amende pour infraction ; 8) vente de marchandises à crédit.

<details><summary>Voir le corrigé</summary>

1) Charge financière. 2) Bilan (immobilisation). 3) Charge d'exploitation (autres charges externes). 4) Produit financier. 5) Produit non courant. 6) Bilan (diminution de dette). 7) Charge non courante. 8) Produit d'exploitation (ventes).

</details>

### Exercice 3 — Marge et stocks

Une entreprise commerciale : ventes de marchandises 480 000 DH ; achats 300 000 DH ; SI 45 000 DH ; SF 60 000 DH ; autres charges d'exploitation 110 000 DH.

1. Calculez les achats revendus, la marge brute et le taux de marge (marge / achats revendus).
2. Calculez le résultat d'exploitation.
3. Que devient la marge si le stock final est surévalué de 10 000 DH par erreur ?

<details><summary>Voir le corrigé</summary>

**1)** Achats revendus $= 300\,000 + 45\,000 - 60\,000 = 285\,000$ ; marge $= 480\,000 - 285\,000 = \mathbf{195\,000}$ ; taux $= 195\,000 / 285\,000 \approx \mathbf{68{,}4\,\%}$.

**2)** $RE = 195\,000 - 110\,000 = \mathbf{85\,000}$ DH.

**3)** Un SF trop élevé réduit les achats revendus de 10 000 DH : la marge et le résultat sont **surévalués** de 10 000 DH. D'où l'importance de l'inventaire physique.

</details>
`,
    qcm: [
      { q: "Le CPC présente :", choix: ["Le patrimoine à une date", "Les charges et produits d'un exercice", "Les seuls encaissements", "La liste des comptes"], bonne: 1, explication: "C'est un document de flux." },
      { q: "Achats 200 000, SI 30 000, SF 50 000. Les achats revendus valent :", choix: ["180 000", "220 000", "200 000", "280 000"], bonne: 0, explication: "200 000 + 30 000 − 50 000." },
      { q: "Les intérêts d'un emprunt sont des charges :", choix: ["D'exploitation", "Financières", "Non courantes", "Hors CPC"], bonne: 1, explication: "Rubrique 63." },
      { q: "Le remboursement du capital d'un emprunt :", choix: ["Est une charge financière", "N'est pas une charge", "Est une charge non courante", "Est un produit"], bonne: 1, explication: "Il diminue une dette." },
      { q: "Le prix de cession d'une immobilisation est un produit :", choix: ["D'exploitation", "Financier", "Non courant", "Exceptionnel hors CPC"], bonne: 2, explication: "Compte 7513 par exemple." },
      { q: "Le résultat courant est égal à :", choix: ["RE + RF", "RE + RNC", "RAI − IS", "RF + RNC"], bonne: 0, explication: "Exploitation plus financier." },
      { q: "Une hausse du stock de produits finis :", choix: ["Est une charge", "Est un produit", "N'a pas d'effet", "Diminue le chiffre d'affaires"], bonne: 1, explication: "Variation de stocks de produits positive." },
      { q: "L'achat d'une machine au comptant :", choix: ["Est une charge d'exploitation", "Est une immobilisation inscrite au bilan", "Est une charge non courante", "Est un produit"], bonne: 1, explication: "Seul l'amortissement sera une charge." },
      { q: "Une vente à crédit est un produit :", choix: ["Au moment de l'encaissement", "Au moment de la facture", "À la fin de l'exercice seulement", "Jamais"], bonne: 1, explication: "Comptabilité d'engagement." },
      { q: "RC 100 000, RNC −10 000, IS 18 000. Le résultat net est :", choix: ["72 000", "90 000", "128 000", "82 000"], bonne: 0, explication: "100 000 − 10 000 − 18 000." },
    ],
  },

  4: {
    titre: "Le compte et la partie double",
    description: "Le compte et la partie double : compte en T, débit et crédit, solde, règles de fonctionnement des comptes, analyse d'opérations et exercices corrigés.",
    resume: md`
## L'essentiel — Le compte et la partie double

- Compte : débit à gauche, crédit à droite ; solde = débits − crédits (débiteur, créditeur ou nul).
- Actif et charges : augmentent au **débit** ; passif et produits : augmentent au **crédit**.
- Partie double : chaque opération débite au moins un compte et en crédite au moins un autre ; total débits = total crédits.
- Analyse en 4 questions : quels comptes ? augmentation ou diminution ? nature ? débit ou crédit ?
- Encaissement : débit 5141 ; paiement : crédit 5141 ; vente : crédit 7111 ; achat : débit 6111.
- Contrôle : somme des soldes débiteurs = somme des soldes créditeurs.
`,
    exercices: md`
### Exercice 2 — Débit ou crédit ?

Pour chaque opération, indiquez le compte débité et le compte crédité : 1) paiement de l'électricité par chèque 1 800 DH ; 2) un client règle en espèces 5 000 DH ; 3) achat d'un ordinateur à crédit 9 000 DH ; 4) remboursement d'une partie de l'emprunt par banque 10 000 DH ; 5) retrait d'espèces de la banque pour la caisse 3 000 DH.

<details><summary>Voir le corrigé</summary>

1) D 6125 Achats non stockés de matières et fournitures / C 5141. 2) D 5161 / C 3421. 3) D 2355 Matériel informatique / C 4481 Dettes sur acquisitions d'immobilisations. 4) D 1481 / C 5141. 5) D 5161 / C 5141.

</details>

### Exercice 3 — Retrouver l'opération

Retrouvez l'opération qui correspond à chaque écriture : a) D 4411 / C 5141 ; b) D 3421 / C 7111 ; c) D 5141 / C 1111 ; d) D 6171 / C 5161 ; e) D 2340 / C 1481.

<details><summary>Voir le corrigé</summary>

a) Règlement d'un fournisseur par banque. b) Vente de marchandises à crédit. c) Apport en capital en banque. d) Paiement de salaires en espèces. e) Acquisition d'un véhicule financée directement par un emprunt (le prêteur paie le vendeur).

</details>
`,
    qcm: [
      { q: "Un compte d'actif augmente :", choix: ["Au débit", "Au crédit", "Des deux côtés", "Jamais"], bonne: 0, explication: "L'actif est à gauche du bilan." },
      { q: "Un compte de produits augmente :", choix: ["Au débit", "Au crédit", "Au solde", "Au bilan"], bonne: 1, explication: "Les produits sont assimilés à des ressources." },
      { q: "Débits 80 000, crédits 95 000. Le solde est :", choix: ["Débiteur de 15 000", "Créditeur de 15 000", "Nul", "Débiteur de 175 000"], bonne: 1, explication: "Crédits supérieurs aux débits." },
      { q: "L'encaissement d'un chèque client se traduit par :", choix: ["Un crédit de 5141", "Un débit de 5141 et un crédit de 3421", "Un débit de 3421", "Un crédit de 7111"], bonne: 1, explication: "La banque augmente, la créance diminue." },
      { q: "Le principe de la partie double signifie que :", choix: ["Chaque opération est enregistrée deux fois dans le même compte", "Total des débits = total des crédits", "Chaque compte a deux soldes", "On tient deux comptabilités"], bonne: 1, explication: "Au moins un compte débité et un crédité." },
      { q: "Un compte banque à solde créditeur représente :", choix: ["Un excédent de trésorerie", "Un découvert", "Un produit", "Une erreur obligatoirement"], bonne: 1, explication: "Dette envers la banque." },
      { q: "Paiement du loyer par chèque : compte débité :", choix: ["5141", "6131", "4411", "7111"], bonne: 1, explication: "Charge qui augmente." },
      { q: "Le versement d'espèces de la caisse à la banque :", choix: ["Est un produit", "Débite 5141 et crédite 5161", "Débite 5161 et crédite 5141", "N'est pas enregistré"], bonne: 1, explication: "Virement de fonds interne." },
      { q: "Un compte de charges a normalement un solde :", choix: ["Débiteur", "Créditeur", "Nul", "Variable"], bonne: 0, explication: "Les charges augmentent au débit." },
      { q: "Achat de marchandises payé moitié chèque, moitié à crédit : l'écriture comporte :", choix: ["Deux comptes", "Trois comptes", "Quatre comptes", "Un compte"], bonne: 1, explication: "6111 au débit, 5141 et 4411 au crédit." },
    ],
  },

  5: {
    titre: "Le plan comptable général des entreprises (PCGE)",
    description: "Le plan comptable marocain (PCGE) : classes 0 à 9, codification décimale, comptes soustractifs, principaux comptes utilisés en S1 et exercices corrigés.",
    resume: md`
## L'essentiel — Le PCGE

- Classes : 1 financement permanent, 2 actif immobilisé, 3 actif circulant, 4 passif circulant, 5 trésorerie, 6 charges, 7 produits, 8 résultats, 9 analytique, 0 comptes spéciaux.
- Classes 1 à 5 : bilan ; 6 et 7 : CPC.
- Codification : classe (1 chiffre), rubrique (2), poste (3), compte (4), sous-compte (5 et plus).
- Soustractifs : 28.. amortissements ; 29.. et 39.. provisions pour dépréciation ; 6119 / 7119 RRR (9 en 4ᵉ position).
- Miroir charges / produits : 61/71, 63/73, 65/75 ; 6386 escomptes accordés / 7386 escomptes obtenus.
- Immobilisation à crédit : 4481 (et non 4411) ; TVA : 34551 immobilisations, 34552 charges.
`,
    exercices: md`
### Exercice 2 — Décoder les numéros

Donnez l'intitulé et la place dans les états de synthèse : 2332 ; 3111 ; 4432 ; 5161 ; 6174 ; 7381.

<details><summary>Voir le corrigé</summary>

2332 Matériel et outillage (actif immobilisé). 3111 Marchandises (actif circulant, stocks). 4432 Rémunérations dues au personnel (passif circulant). 5161 Caisses (trésorerie-actif). 6174 Charges sociales (charges d'exploitation, CPC). 7381 Intérêts et produits assimilés (produits financiers, CPC).

</details>

### Exercice 3 — Corriger les erreurs de compte

Un stagiaire a enregistré : a) l'achat à crédit d'un ordinateur en D 6111 / C 4411 ; b) une ristourne hors facture reçue d'un fournisseur en C 7119 ; c) les intérêts d'emprunt en D 1481. Corrigez.

<details><summary>Voir le corrigé</summary>

a) C'est une immobilisation : D 2355 Matériel informatique (et 34551 pour la TVA) / C 4481 Dettes sur acquisitions d'immobilisations.
b) Chez l'acheteur, la ristourne obtenue se crédite en **6119** RRR obtenus sur achats de marchandises (7119 est le compte du vendeur).
c) Les intérêts sont une charge : D **6311** Intérêts des emprunts et dettes ; 1481 ne se débite que pour le remboursement du capital.

</details>
`,
    qcm: [
      { q: "La classe 4 regroupe les comptes :", choix: ["D'actif circulant", "De passif circulant", "De trésorerie", "De charges"], bonne: 1, explication: "Fournisseurs, État, personnel…" },
      { q: "Dans le numéro 6111, le poste est :", choix: ["6", "61", "611", "6111"], bonne: 2, explication: "Trois chiffres : achats revendus de marchandises." },
      { q: "Le compte 2834 est :", choix: ["Un compte d'immobilisation", "Un compte d'amortissement", "Un compte de provision", "Un compte de charges"], bonne: 1, explication: "8 en deuxième position." },
      { q: "Le compte des RRR obtenus sur achats de marchandises est :", choix: ["7119", "6119", "6111", "7386"], bonne: 1, explication: "9 en quatrième position." },
      { q: "Les comptes de gestion sont ceux des classes :", choix: ["1 et 2", "3 et 4", "6 et 7", "8 et 9"], bonne: 2, explication: "Charges et produits." },
      { q: "L'achat à crédit d'un camion se crédite au compte :", choix: ["4411", "4481", "3421", "5141"], bonne: 1, explication: "Dettes sur acquisitions d'immobilisations." },
      { q: "Le compte 5520 Crédits d'escompte figure :", choix: ["À l'actif circulant", "En trésorerie-passif", "Au financement permanent", "Au CPC"], bonne: 1, explication: "Classe 5, rubrique 55." },
      { q: "La TVA sur l'achat d'une machine se débite au compte :", choix: ["34552", "34551", "4455", "4456"], bonne: 1, explication: "TVA récupérable sur immobilisations." },
      { q: "Le compte 3942 correspond à :", choix: ["Clients", "Provisions pour dépréciation des clients", "Clients, effets à recevoir", "Clients douteux"], bonne: 1, explication: "9 en deuxième position dans la classe 3." },
      { q: "La classe 0 concerne :", choix: ["Les charges", "Les comptes spéciaux (engagements hors bilan)", "Les stocks", "Le capital"], bonne: 1, explication: "Informations données dans l'ETIC." },
    ],
  },

  6: {
    titre: "L'organisation comptable",
    description: "L'organisation comptable : pièces justificatives, livre-journal, grand livre, balance et ses limites, journaux auxiliaires et centralisation, exercice corrigé.",
    resume: md`
## L'essentiel — L'organisation comptable

- Pas d'écriture sans **pièce justificative** (facture, avoir, relevé bancaire, bulletin de paie…), conservée 10 ans.
- **Journal** : ordre chronologique ; date, comptes, libellé, montants ; pas de rature, corrections par contre-passation ; coté et paraphé.
- **Grand livre** : ensemble des comptes ; report de chaque montant du journal.
- **Balance** : mouvements et soldes de chaque compte ; total mvts D = total mvts C ; total SD = total SC.
- Limites : omissions, doublons, erreurs d'imputation, inversions et erreurs compensées ne sont pas détectées.
- Journaux auxiliaires (achats, ventes, banque, caisse, OD) centralisés chaque mois ; comptes individuels clients et fournisseurs ; virements internes (5115).
`,
    exercices: md`
### Exercice 2 — Erreurs et balance

Pour chaque erreur, dites si la balance reste équilibrée : 1) une facture d'achat de 12 000 DH oubliée ; 2) un loyer de 3 000 DH enregistré en 6134 au lieu de 6131 ; 3) une vente de 8 000 DH reportée au grand livre pour 8 000 au débit de 3421 mais 800 au crédit de 7111 ; 4) un chèque fournisseur saisi deux fois.

<details><summary>Voir le corrigé</summary>

1) Équilibrée (omission complète). 2) Équilibrée (erreur d'imputation). 3) **Déséquilibrée** : les débits dépassent les crédits de 7 200 DH, la balance révèle l'erreur. 4) Équilibrée (doublon). Seule l'erreur 3 est détectée par la balance.

</details>

### Exercice 3 — Centralisation du journal des ventes

En mai, le journal auxiliaire des ventes totalise : clients 312 000 DH ; ventes de marchandises 260 000 DH ; TVA facturée 52 000 DH. Passez l'écriture de centralisation au journal général.

<details><summary>Voir le corrigé</summary>

D 3421 Clients 312 000 / C 7111 Ventes de marchandises 260 000 ; C 4455 État, TVA facturée 52 000. Libellé : « Centralisation du journal des ventes de mai ». Contrôle : $260\,000 + 52\,000 = 312\,000$.

</details>
`,
    qcm: [
      { q: "Le journal enregistre les opérations :", choix: ["Par compte", "Par ordre chronologique", "Par montant", "Par client"], bonne: 1, explication: "Jour par jour." },
      { q: "Le grand livre regroupe :", choix: ["Les pièces justificatives", "L'ensemble des comptes", "Les états de synthèse", "Les déclarations fiscales"], bonne: 1, explication: "Classement par compte." },
      { q: "Une erreur au journal se corrige :", choix: ["En raturant", "Par une écriture de contre-passation ou de correction", "Au crayon", "En arrachant la page"], bonne: 1, explication: "Pas de rature ni de surcharge." },
      { q: "La balance vérifie que :", choix: ["Les comptes sont justes", "Total des débits = total des crédits", "Le bénéfice est positif", "La TVA est payée"], bonne: 1, explication: "Et total SD = total SC." },
      { q: "L'omission d'une écriture :", choix: ["Déséquilibre la balance", "N'est pas détectée par la balance", "Est détectée par le CPC", "Est impossible"], bonne: 1, explication: "Débits et crédits manquent du même montant." },
      { q: "Le journal auxiliaire des ventes enregistre :", choix: ["Les factures et avoirs clients", "Les paiements aux fournisseurs", "Les salaires", "Les amortissements"], bonne: 0, explication: "Il est centralisé périodiquement." },
      { q: "Le compte 5115 Virements de fonds sert à :", choix: ["Payer les fournisseurs", "Éviter d'enregistrer deux fois un transfert entre trésoreries", "Enregistrer les ventes", "Calculer la TVA"], bonne: 1, explication: "Transit entre caisse et banque par exemple." },
      { q: "Les pièces justificatives doivent être conservées :", choix: ["1 an", "5 ans", "10 ans", "Jusqu'à la clôture"], bonne: 2, explication: "Loi 9-88." },
      { q: "Le lettrage d'un compte client consiste à :", choix: ["Le renommer", "Rapprocher factures et règlements correspondants", "Le solder par un produit", "Le supprimer"], bonne: 1, explication: "Il fait apparaître les factures non réglées." },
      { q: "Une balance comprend pour chaque compte :", choix: ["Uniquement le solde", "Les mouvements débit et crédit et le solde", "La date de chaque opération", "Les pièces justificatives"], bonne: 1, explication: "Deux contrôles d'égalité." },
    ],
  },

  7: {
    titre: "La taxe sur la valeur ajoutée (TVA)",
    description: "La TVA au Maroc en 2026 : mécanisme, taux de 20 % et 10 %, calculs HT/TTC, comptes 4455, 34551, 34552, 4456, 3456, liquidation, crédit de TVA et déclaration.",
    resume: md`
## L'essentiel — La TVA

- Impôt indirect supporté par le consommateur final ; **neutre** pour l'entreprise (comptes de tiers, jamais au CPC).
- Taux 2026 : **20 %** (normal), **10 %** (réduit) ; appliquer le taux de l'énoncé.
- HT = TTC / (1 + t) ; TVA d'un TTC = TTC / 6 à 20 %, TTC / 11 à 10 %.
- Comptes : 4455 facturée ; 34551 récupérable sur immobilisations ; 34552 sur charges ; 4456 due ; 3456 crédit.
- TVA due = facturée − récupérable (charges + immobilisations) − crédit antérieur ; si négatif : crédit de TVA (D 3456).
- Déduction : facture régulière, dépense liée à l'activité, paiement ; exclusions (voitures de tourisme…).
- Déclaration mensuelle (CA ≥ 1 000 000 DH) ou trimestrielle, avant la fin du mois suivant.
`,
    exercices: md`
### Exercice 2 — HT, TVA, TTC

Complétez : a) HT 45 000, taux 20 % : TVA ? TTC ? b) TTC 26 400, taux 10 % : HT ? TVA ? c) TTC 74 400, taux 20 % : HT ? TVA ? d) TVA 3 600 au taux de 20 % : HT ? TTC ?

<details><summary>Voir le corrigé</summary>

a) TVA 9 000 ; TTC 54 000. b) HT $26\,400 / 1{,}10 = 24\,000$ ; TVA 2 400. c) HT $74\,400 / 1{,}20 = 62\,000$ ; TVA 12 400. d) HT $3\,600 / 0{,}20 = 18\,000$ ; TTC 21 600.

</details>

### Exercice 3 — Liquidation avec TVA non récupérable

En juin : ventes HT 500 000 (20 %) ; achats de marchandises HT 300 000 (20 %) ; achat d'une voiture de tourisme pour le directeur commercial 240 000 HT (20 %) ; achat d'un ordinateur 20 000 HT (20 %) ; pas de crédit antérieur.

1. Calculez la TVA due.
2. Comment enregistrer la voiture ?

<details><summary>Voir le corrigé</summary>

**1)** TVA facturée 100 000 ; récupérable sur charges 60 000 ; sur immobilisations : ordinateur seulement 4 000 (la TVA de la voiture de tourisme est exclue). TVA due $= 100\,000 - 60\,000 - 4\,000 = \mathbf{36\,000}$ DH.

**2)** La voiture est inscrite **TTC** : D 2340 Matériel de transport 288 000 / C 4481 Dettes sur acquisitions d'immobilisations 288 000. La TVA non récupérable fait partie du coût (et sera amortie).

</details>
`,
    qcm: [
      { q: "La TVA est supportée en définitive par :", choix: ["L'entreprise productrice", "Le consommateur final", "Le fournisseur", "La banque"], bonne: 1, explication: "L'entreprise ne fait que la collecter." },
      { q: "Le taux normal de TVA au Maroc en 2026 est :", choix: ["14 %", "20 %", "10 %", "7 %"], bonne: 1, explication: "Le taux réduit est de 10 %." },
      { q: "La TVA contenue dans 12 000 DH TTC au taux de 20 % est :", choix: ["2 400", "2 000", "1 200", "2 200"], bonne: 1, explication: "12 000 divisé par 6." },
      { q: "La TVA sur une vente est créditée au compte :", choix: ["34552", "4455", "4456", "3456"], bonne: 1, explication: "État, TVA facturée." },
      { q: "La TVA sur l'achat d'un matériel est débitée au compte :", choix: ["34552", "34551", "4455", "6111"], bonne: 1, explication: "TVA récupérable sur immobilisations." },
      { q: "TVA facturée 40 000, récupérable 46 000. Il en résulte :", choix: ["Une TVA due de 6 000", "Un crédit de TVA de 6 000", "Une TVA due de 86 000", "Rien"], bonne: 1, explication: "Débit du compte 3456." },
      { q: "Le compte 4456 État, TVA due est soldé :", choix: ["Lors de la vente", "Lors du paiement à l'État", "Lors de l'achat", "À la clôture seulement"], bonne: 1, explication: "D 4456 / C 5141." },
      { q: "Une entreprise dont le CA taxable dépasse 1 000 000 DH déclare la TVA :", choix: ["Chaque année", "Chaque trimestre", "Chaque mois", "Tous les deux ans"], bonne: 2, explication: "Régime mensuel." },
      { q: "La TVA sur une voiture de tourisme d'une entreprise commerciale ordinaire :", choix: ["Est récupérable", "N'est pas récupérable et s'ajoute au coût", "Est un produit", "Est remboursée par l'État"], bonne: 1, explication: "Exclusion du droit à déduction." },
      { q: "Pour l'entreprise assujettie, la TVA est :", choix: ["Une charge", "Un produit", "Neutre", "Une immobilisation"], bonne: 2, explication: "Elle transite par des comptes de tiers." },
    ],
  },

  8: {
    titre: "La facturation « doit »",
    description: "La facture doit : rabais, remises, ristournes, escompte, port, cascade jusqu'au net à payer, écritures chez le vendeur et l'acheteur, exercices corrigés.",
    resume: md`
## L'essentiel — La facturation « doit »

- Réductions commerciales : **rabais** (défaut), **remise** (volume, qualité du client), **ristourne** (chiffre d'affaires de la période) ; en cascade.
- Taux global = 1 − (1 − t1)(1 − t2) ; ne jamais additionner.
- **Escompte** (réduction financière) sur le **net commercial** : 6386 chez le vendeur, 7386 chez l'acheteur.
- Cascade : brut → RRR → net commercial → escompte → net financier → port → HT → TVA → TTC (+ consignation).
- Sur facture, les RRR ne sont pas comptabilisés : on enregistre le net commercial (7111 / 6111).
- Port facturé : 71276 (vendeur) / 6142 (acheteur), soumis à TVA.
- Remonter la cascade : diviser par (1 + t), (1 − e), (1 − r).
`,
    exercices: md`
### Exercice 2 — Facture avec deux remises

Brut 120 000 DH ; remises 8 % et 5 % ; escompte 1 % ; franco de port ; TVA 20 %. Établissez la facture et l'écriture chez l'acheteur (paiement par chèque).

<details><summary>Voir le corrigé</summary>

Net 1 $= 110\,400$ ; net commercial $= 110\,400 \times 0{,}95 = 104\,880$ ; escompte $1\,048{,}80$ ; net financier = HT $= 103\,831{,}20$ ; TVA $20\,766{,}24$ ; TTC $124\,597{,}44$.

Acheteur : D 6111 104 880,00 ; D 34552 20 766,24 / C 7386 1 048,80 ; C 5141 124 597,44. Contrôle : $125\,646{,}24$ de part et d'autre.

</details>

### Exercice 3 — Remonter la cascade

Une facture indique un net à payer de 29 400 DH TTC (TVA 20 %) dont un port de 500 DH HT. Les conditions sont : remise 4 %, escompte 2 %. Retrouvez le brut.

<details><summary>Voir le corrigé</summary>

HT $= 29\,400 / 1{,}20 = 24\,500$ ; net financier $= 24\,500 - 500 = 24\,000$ ; net commercial $= 24\,000 / 0{,}98 \approx 24\,489{,}80$ ; brut $= 24\,489{,}80 / 0{,}96 \approx \mathbf{25\,510{,}20}$ DH.

</details>
`,
    qcm: [
      { q: "Une réduction pour défaut de qualité est :", choix: ["Une remise", "Un rabais", "Une ristourne", "Un escompte"], bonne: 1, explication: "Réduction exceptionnelle." },
      { q: "L'escompte est calculé sur :", choix: ["Le brut", "Le net commercial", "Le TTC", "Le net financier"], bonne: 1, explication: "Après les réductions commerciales." },
      { q: "Remises successives de 10 % et 10 % : taux global :", choix: ["20 %", "19 %", "21 %", "10 %"], bonne: 1, explication: "1 − 0,9 × 0,9 = 0,19." },
      { q: "Chez le vendeur, l'escompte accordé est débité au compte :", choix: ["7386", "6386", "7119", "6119"], bonne: 1, explication: "Charge financière." },
      { q: "Sur la facture doit, une remise :", choix: ["Est enregistrée en 7119", "N'est pas comptabilisée séparément", "Est enregistrée en 6386", "Est un produit"], bonne: 1, explication: "On enregistre le net commercial." },
      { q: "La TVA est calculée sur :", choix: ["Le brut", "Le net commercial", "Le net financier augmenté du port", "Le TTC"], bonne: 2, explication: "Base HT de la facture." },
      { q: "Le port facturé est, chez l'acheteur, débité au compte :", choix: ["6111", "6142", "71276", "4411"], bonne: 1, explication: "Transports." },
      { q: "Net commercial 20 000, escompte 2 %, TVA 20 %, pas de port. Le TTC est :", choix: ["24 000", "23 520", "23 600", "19 600"], bonne: 1, explication: "19 600 × 1,2." },
      { q: "Chez l'acheteur, l'escompte obtenu est :", choix: ["Une charge financière", "Un produit financier", "Un produit d'exploitation", "Une diminution des achats"], bonne: 1, explication: "Compte 7386." },
      { q: "Le brut correspondant à un net commercial de 19 000 après une remise de 5 % est :", choix: ["19 950", "20 000", "18 050", "19 500"], bonne: 1, explication: "19 000 / 0,95." },
    ],
  },

  9: {
    titre: "La facture d'avoir et les emballages",
    description: "Facture d'avoir et emballages : retours, RRR hors facture (7119/6119), escompte hors facture, consignation, déconsignation, boni et mali, avec exercices.",
    resume: md`
## L'essentiel — Avoirs et emballages

- Avoir : diminue la dette du client après la facture ; réduit aussi la TVA.
- Retour : écriture inverse sur 7111 / 6111. Réduction commerciale hors facture : **7119** (vendeur) / **6119** (acheteur). Escompte hors facture : 6386 / 7386.
- Emballages : perdus (dans le prix), récupérables non identifiables (stocks), identifiables (immobilisations), **consignés**.
- Consignation : non soumise à TVA ; ajoutée au TTC ; **4425** chez le vendeur, **3413** chez le client.
- Déconsignation : retour au prix de consigne (annulation) ; reprise inférieure : **boni** 71278 + TVA (vendeur), **mali** 61317 (client) ; emballages conservés : vente 7127 + TVA.
- Le compte 4425 est toujours soldé à la déconsignation.
`,
    exercices: md`
### Exercice 2 — Avoir mixte

Un avoir comprend : retour de marchandises 5 000 DH HT et rabais hors facture 1 500 DH HT, TVA 20 %. Passez l'écriture chez le vendeur et chez l'acheteur.

<details><summary>Voir le corrigé</summary>

TVA $= 6\,500 \times 20\,\% = 1\,300$ ; avoir $7\,800$.

Vendeur : D 7111 5 000 ; D 7119 1 500 ; D 4455 1 300 / C 3421 7 800.
Acheteur : D 4411 7 800 / C 6111 5 000 ; C 6119 1 500 ; C 34552 1 300.

</details>

### Exercice 3 — Déconsignation

300 bouteilles consignées à 20 DH. Le client rend 240 bouteilles reprises à 16 DH et garde les autres, facturées 20 DH HT (TVA 20 %). Passez les écritures chez le vendeur.

<details><summary>Voir le corrigé</summary>

Rendues : consignation $4\,800$ ; reprise $3\,840$ ; boni $960$ ; TVA $192$ ; D 4425 4 800 / C 71278 960 ; C 4455 192 ; C 3421 3 648.

Conservées : 60 bouteilles, $1\,200$ HT, TVA $240$ : D 4425 1 200 ; D 3421 240 / C 7127 1 200 ; C 4455 240.

</details>
`,
    qcm: [
      { q: "Une facture d'avoir :", choix: ["Augmente la dette du client", "Diminue la dette du client", "Est une facture de vente", "N'a pas d'effet sur la TVA"], bonne: 1, explication: "Elle réduit aussi la TVA." },
      { q: "Un rabais accordé après la facture est enregistré chez le vendeur au débit du compte :", choix: ["7111", "7119", "6386", "6119"], bonne: 1, explication: "RRR accordés par l'entreprise." },
      { q: "Chez l'acheteur, une ristourne obtenue hors facture est créditée au compte :", choix: ["6111", "6119", "7386", "7119"], bonne: 1, explication: "Compte soustractif des achats." },
      { q: "La consignation d'emballages est :", choix: ["Soumise à TVA", "Non soumise à TVA", "Un produit", "Une charge"], bonne: 1, explication: "C'est un dépôt de garantie." },
      { q: "Chez le vendeur, la consignation est créditée au compte :", choix: ["3413", "4425", "7127", "4411"], bonne: 1, explication: "Dette envers le client." },
      { q: "Chez le client, la consignation versée est débitée au compte :", choix: ["4425", "3413", "6123", "3421"], bonne: 1, explication: "Créance sur le fournisseur." },
      { q: "Emballages consignés 40 DH, repris 35 DH : pour le vendeur, la différence est :", choix: ["Un mali", "Un boni", "Une remise", "Un escompte"], bonne: 1, explication: "Produit soumis à TVA (71278)." },
      { q: "Les emballages conservés par le client deviennent :", choix: ["Une consignation", "Une vente soumise à TVA", "Un escompte", "Une immobilisation du vendeur"], bonne: 1, explication: "Compte 7127." },
      { q: "Un retour de marchandises chez le vendeur se débite au compte :", choix: ["7119", "7111", "6111", "6119"], bonne: 1, explication: "Il annule la vente." },
      { q: "Le mali sur emballages rendus est, chez le client :", choix: ["Un produit", "Une charge (61317)", "Une créance", "Une dette"], bonne: 1, explication: "Il récupère moins que la consignation versée." },
    ],
  },

  10: {
    titre: "Les règlements et les effets de commerce",
    description: "Règlements et effets de commerce : chèque, virement, lettre de change, billet à ordre, encaissement, endossement, escompte, agio et effets impayés.",
    resume: md`
## L'essentiel — Règlements et effets de commerce

- Règlements : espèces (5161, plafonnées), chèque (5111 puis 5141), virement et carte (5141).
- Lettre de change : tireur (créancier), tiré (débiteur), bénéficiaire ; acceptation ; billet à ordre : souscripteur (débiteur).
- Création : D 3425 / C 3421 (tireur) ; D 4411 / C 4415 (tiré) : simple reclassement.
- Encaissement : D 5113 / C 3425, puis D 5141 + 6147 + 34552 / C 5113. Endossement : D 4411 / C 3425.
- Escompte = VN × t × n / 360 ; agio = escompte + commissions + TVA 10 % ; net = VN − agio ; D 5141, 63115, 6147, 34552 / C 5520.
- À l'échéance : D 5520 / C 3425 ; impayé : D 5520 / C 5141 puis D 3424 / C 3425 et C 5141 (frais).
`,
    exercices: md`
### Exercice 2 — Calcul d'agio

Un effet de 45 000 DH, échéance le 30/09, est remis à l'escompte le 16/08. Taux 10 % ; commission 90 DH HT ; TVA 10 %. Calculez le net et passez l'écriture.

<details><summary>Voir le corrigé</summary>

Jours : du 16/08 au 30/09 = $15 + 30 = 45$ jours. Escompte $= 45\,000 \times 0{,}10 \times 45 / 360 = 562{,}50$. Agio TTC $= 562{,}50 + 90 + 9 = 661{,}50$ ; net $= 44\,338{,}50$ DH.

D 5141 44 338,50 ; D 63115 562,50 ; D 6147 90 ; D 34552 9 / C 5520 45 000.

</details>

### Exercice 3 — Chez le tiré

L'entreprise Z a accepté le 10/05 une traite de 32 400 DH tirée par son fournisseur, échéance 10/07. Passez les écritures du 10/05 et du 10/07 (paiement par la banque). Que se passe-t-il si Z ne peut pas payer ?

<details><summary>Voir le corrigé</summary>

10/05 : D 4411 Fournisseurs / C 4415 Fournisseurs, effets à payer 32 400. 10/07 : D 4415 / C 5141 32 400.

En cas de défaut, l'effet est protesté ou revient impayé ; la dette redevient une dette fournisseur ordinaire (D 4415 / C 4411), augmentée des frais que le fournisseur refacture. Z peut négocier un **renouvellement** (nouvel effet à échéance plus lointaine, avec intérêts de retard).

</details>
`,
    qcm: [
      { q: "Dans une lettre de change, le tireur est :", choix: ["Le débiteur", "Le créancier", "La banque", "L'État"], bonne: 1, explication: "Il donne l'ordre de payer au tiré." },
      { q: "Le billet à ordre est émis par :", choix: ["Le créancier", "Le débiteur (souscripteur)", "La banque", "Le notaire"], bonne: 1, explication: "Il promet de payer." },
      { q: "La création d'un effet chez le tireur se traduit par :", choix: ["D 3425 / C 3421", "D 3421 / C 3425", "D 4415 / C 4411", "D 5141 / C 7111"], bonne: 0, explication: "Reclassement de la créance." },
      { q: "Chez le tiré, l'acceptation se traduit par :", choix: ["D 4411 / C 4415", "D 4415 / C 4411", "D 3425 / C 3421", "D 6111 / C 4415"], bonne: 0, explication: "La dette devient un effet à payer." },
      { q: "Escompte d'un effet de 36 000 DH, taux 10 %, 30 jours :", choix: ["300 DH", "360 DH", "3 600 DH", "30 DH"], bonne: 0, explication: "36 000 × 0,10 × 30 / 360." },
      { q: "La TVA sur les commissions bancaires est au taux de :", choix: ["20 %", "10 %", "7 %", "0 %"], bonne: 1, explication: "Opérations bancaires." },
      { q: "Le compte 5520 Crédits d'escompte est :", choix: ["Un compte d'actif", "Un compte de trésorerie-passif", "Un compte de produit", "Un compte de charge"], bonne: 1, explication: "Engagement envers la banque." },
      { q: "L'endossement d'un effet au profit d'un fournisseur :", choix: ["D 4411 / C 3425", "D 3425 / C 4411", "D 5141 / C 3425", "D 4415 / C 3425"], bonne: 0, explication: "La dette fournisseur est réglée par l'effet." },
      { q: "Un effet escompté revient impayé : l'entreprise :", choix: ["N'a rien à faire", "Rembourse la banque et se retourne contre le client", "Enregistre un produit", "Annule la vente"], bonne: 1, explication: "Le risque reste chez le porteur." },
      { q: "Un chèque client reçu mais pas encore remis en banque est débité au compte :", choix: ["5141", "5111", "3425", "5161"], bonne: 1, explication: "Chèques à encaisser." },
    ],
  },
};

export default chapitres;
