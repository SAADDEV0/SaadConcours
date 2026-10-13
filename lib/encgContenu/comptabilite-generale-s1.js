// Comptabilité générale (ENCG S1) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "L'information comptable et son cadre au Maroc",
    description: "ENCG S1 : rôle de la comptabilité générale, flux de l'entreprise, loi 9-88, CGNC, cinq états de synthèse et sept principes comptables, avec cas corrigés.",
    resume: md`
## L'essentiel — L'information comptable et son cadre

- L'entreprise est traversée par des **flux réels** (biens, services) et des **flux financiers** (argent, dettes, créances) ; la comptabilité générale les enregistre tous, en dirhams.
- Sorties principales : le **bilan** (patrimoine à une date) et le **CPC** (activité d'un exercice, résultat).
- Rôles : outil de gestion, preuve, base fiscale, information des partenaires, source statistique.
- Comptabilité générale **obligatoire** ; comptabilité analytique **facultative** et interne (coûts, marges).
- **Loi 9-88** : enregistrement chronologique sur pièces justificatives ; livre-journal, grand livre, livre d'inventaire ; inventaire annuel ; états de synthèse ; conservation **10 ans**.
- **CGNC** : principes, évaluation, plan de comptes ; 5 états de synthèse (bilan, CPC, ESG, TF, ETIC) ; modèle simplifié pour les petites entreprises.
- 7 principes : continuité d'exploitation, permanence des méthodes, coût historique, spécialisation des exercices, prudence, clarté, importance significative.
- Objectif d'ensemble : l'**image fidèle**.
- Prudence : on constate les pertes probables, jamais les gains latents.
`,
    exercices: md`
### Exercice 2 — Flux réels ou financiers ?

Pour la société « Draa Dattes » (Errachidia), classez chaque opération : flux réel, flux financier, ou les deux.
1. Achat à crédit de 5 tonnes de dattes.
2. Obtention d'un emprunt bancaire de 200 000 DH.
3. Paiement d'une facture d'électricité par virement.
4. Apport en numéraire d'un associé.
5. Vente au comptant de dattes conditionnées.

<details><summary>Voir le corrigé</summary>

1. Les deux : entrée de marchandises (réel) et naissance d'une dette fournisseur (financier).
2. Financier uniquement : entrée d'argent et dette envers la banque.
3. Les deux : service d'électricité consommé (réel) et sortie d'argent (financier).
4. Financier uniquement : entrée d'argent contre des droits de l'associé.
5. Les deux : sortie de marchandises (réel) et entrée d'argent (financier).

</details>

### Exercice 3 — Les principes en situation

Indiquez le principe comptable concerné :
1. L'entreprise change chaque année de méthode d'évaluation des stocks pour afficher le meilleur résultat.
2. Un loyer de janvier N+1 payé en décembre N n'est pas une charge de N.
3. Un procès dont l'enjeu dépasse le résultat de l'année est décrit en annexe.
4. Les comptes sont établis en supposant que l'entreprise ne va pas être liquidée.
5. Un stock de téléphones acheté 80 000 DH ne vaut plus que 60 000 DH : la perte est constatée.

<details><summary>Voir le corrigé</summary>

1. Violation de la **permanence des méthodes**.
2. **Spécialisation des exercices**.
3. **Importance significative** (et clarté).
4. **Continuité d'exploitation**.
5. **Prudence** : la perte probable de 20 000 DH est constatée.

</details>
`,
    qcm: [
      { q: "Le bilan présente :", choix: ["L'activité d'une année", "Le patrimoine de l'entreprise à une date donnée", "Les coûts par produit", "Le budget de l'année suivante"], bonne: 1, explication: "Le CPC présente l'activité d'un exercice, le bilan une situation à une date." },
      { q: "Au Maroc, les obligations comptables des commerçants sont fixées par la loi :", choix: ["15-95", "9-88", "17-95", "5-96"], bonne: 1, explication: "La loi 9-88 rend aussi le CGNC obligatoire." },
      { q: "Combien de temps faut-il conserver les documents comptables ?", choix: ["Cinq ans", "Sept ans", "Dix ans", "Quinze ans"], bonne: 2, explication: "Documents comptables et pièces justificatives se conservent dix ans." },
      { q: "Lequel de ces livres n'est pas obligatoire selon la loi 9-88 ?", choix: ["Le livre-journal", "Le grand livre", "Le livre d'inventaire", "Le livre des achats par produit"], bonne: 3, explication: "Les trois livres obligatoires sont le journal, le grand livre et le livre d'inventaire." },
      { q: "Combien d'états de synthèse comporte le modèle normal du CGNC ?", choix: ["Deux", "Trois", "Cinq", "Sept"], bonne: 2, explication: "Bilan, CPC, ESG, tableau de financement et ETIC." },
      { q: "La comptabilité analytique est :", choix: ["Obligatoire pour toutes les sociétés", "Facultative et destinée à la gestion interne", "Tenue par la DGI", "Une partie du bilan"], bonne: 1, explication: "Elle calcule des coûts et des marges pour les dirigeants." },
      { q: "Un terrain acheté 300 000 DH vaut aujourd'hui 380 000 DH. Au bilan, il figure pour :", choix: ["380 000 DH", "300 000 DH", "340 000 DH", "80 000 DH"], bonne: 1, explication: "Coût historique : le gain latent n'est pas enregistré." },
      { q: "Ne pas compenser une dette et une créance envers le même tiers applique le principe :", choix: ["De prudence", "De clarté", "De continuité", "De permanence des méthodes"], bonne: 1, explication: "La clarté interdit les compensations." },
      { q: "Un emprunt bancaire obtenu est :", choix: ["Un flux réel", "Un flux financier", "Un produit", "Une charge"], bonne: 1, explication: "Il n'y a ni bien ni service échangé, seulement de l'argent et une dette." },
      { q: "Le Code général de normalisation comptable a été élaboré par :", choix: ["Bank Al-Maghrib", "Le Conseil national de la comptabilité", "Le HCP", "L'AMMC"], bonne: 1, explication: "Le CNC est l'organe de normalisation comptable." },
    ],
  },

  2: {
    titre: "Le bilan, image du patrimoine",
    description: "ENCG S1 : patrimoine et situation nette, structure du bilan CGNC par masses, bilan de constitution, effet des opérations et résultat par comparaison des bilans.",
    resume: md`
## L'essentiel — Le bilan

- Patrimoine = biens + créances − dettes ; **situation nette** = actif − dettes envers les tiers.
- Actif = **emplois** (ce que l'entreprise possède) ; passif = **ressources** (d'où viennent les fonds). Total actif = total passif.
- Actif CGNC : **actif immobilisé** (classe 2), **actif circulant** hors trésorerie (classe 3), **trésorerie-actif** (classe 5).
- Passif CGNC : **financement permanent** (classe 1 : capitaux propres, dettes de financement, provisions durables), **passif circulant** (classe 4), **trésorerie-passif** (classe 5 : découverts, crédits d'escompte).
- Le résultat net figure au passif dans les capitaux propres (perte avec le signe moins).
- Quatre types de variation : échange entre actifs, échange entre passifs, augmentation simultanée, diminution simultanée ; aucune ne change la situation nette.
- Résultat = $SN_{fin} - SN_{début} - \text{apports} + \text{retraits}$.
- Un poste manquant (capital) se trouve **par différence**.
`,
    exercices: md`
### Exercice 2 — Classer les postes

Indiquez la masse du bilan de chaque élément : 1) logiciel de gestion ; 2) avance reçue d'un client ; 3) découvert bancaire ; 4) titres de participation ; 5) TVA récupérable ; 6) emprunt obligataire ; 7) dettes envers la CNSS ; 8) frais de constitution.

<details><summary>Voir le corrigé</summary>

1. Actif immobilisé (incorporel). 2. Passif circulant (dette envers le client). 3. Trésorerie-passif. 4. Actif immobilisé (financier). 5. Actif circulant (créance sur l'État). 6. Financement permanent (dette de financement). 7. Passif circulant. 8. Actif immobilisé (immobilisations en non-valeurs).

</details>

### Exercice 3 — Résultat par comparaison

L'entreprise individuelle de M. Bennani (Meknès) présente au 1ᵉʳ janvier N : actif 860 000 DH, dettes 310 000 DH. Au 31 décembre N : actif 935 000 DH, dettes 290 000 DH. Pendant l'année, M. Bennani a apporté 40 000 DH et prélevé 25 000 DH pour ses besoins personnels. Calculez le résultat de N.

<details><summary>Voir le corrigé</summary>

$SN_{début} = 860\,000 - 310\,000 = 550\,000$ ; $SN_{fin} = 935\,000 - 290\,000 = 645\,000$.

Résultat $= 645\,000 - 550\,000 - 40\,000 + 25\,000 = \mathbf{80\,000}$ DH de bénéfice.

</details>
`,
    qcm: [
      { q: "La situation nette est égale à :", choix: ["Actif + dettes", "Actif − dettes envers les tiers", "Capital − résultat", "Passif − capital"], bonne: 1, explication: "C'est ce qui revient aux propriétaires." },
      { q: "Le côté actif du bilan représente :", choix: ["Les ressources", "Les emplois", "Les charges", "Les produits"], bonne: 1, explication: "L'actif montre ce que l'entreprise a fait des fonds." },
      { q: "Un emprunt bancaire sur sept ans figure dans :", choix: ["Le passif circulant", "La trésorerie-passif", "Le financement permanent", "L'actif immobilisé"], bonne: 2, explication: "C'est une dette de financement, classe 1." },
      { q: "Un découvert bancaire figure dans :", choix: ["La trésorerie-actif", "La trésorerie-passif", "Les dettes de financement", "L'actif circulant"], bonne: 1, explication: "C'est un concours bancaire à court terme." },
      { q: "Les créances clients appartiennent à :", choix: ["L'actif circulant", "Le passif circulant", "L'actif immobilisé", "La trésorerie-actif"], bonne: 0, explication: "Elles naissent du cycle d'exploitation." },
      { q: "L'achat d'un camion à crédit :", choix: ["Diminue la situation nette", "Augmente le total du bilan sans changer la situation nette", "Ne change pas le total du bilan", "Augmente le résultat"], bonne: 1, explication: "Actif et dettes augmentent du même montant." },
      { q: "Le paiement d'une dette fournisseur par chèque est :", choix: ["Un échange entre actifs", "Un échange entre passifs", "Une diminution simultanée de l'actif et du passif", "Une augmentation simultanée"], bonne: 2, explication: "La banque et la dette diminuent ensemble." },
      { q: "SN début 200 000, SN fin 260 000, apport nouveau 20 000, aucun retrait. Le résultat vaut :", choix: ["60 000", "80 000", "40 000", "20 000"], bonne: 2, explication: "260 000 − 200 000 − 20 000 = 40 000." },
      { q: "Une perte de l'exercice s'inscrit :", choix: ["À l'actif", "Au passif avec le signe moins", "En trésorerie-passif", "Elle n'apparaît pas au bilan"], bonne: 1, explication: "Elle diminue les capitaux propres." },
      { q: "Le fonds commercial est classé en :", choix: ["Immobilisation incorporelle", "Immobilisation corporelle", "Actif circulant", "Immobilisation financière"], bonne: 0, explication: "C'est un élément sans substance physique." },
    ],
  },

  3: {
    titre: "Le CPC et la formation du résultat",
    description: "ENCG S1 : charges et produits, distinction charge et emploi, achats revendus, CPC du CGNC à trois niveaux et lien avec le bilan, avec un CPC corrigé.",
    resume: md`
## L'essentiel — Le CPC

- **Charge** : consommation ou perte de valeur de l'exercice (classe 6) ; **produit** : enrichissement issu de l'activité (classe 7). Résultat = produits − charges.
- Ne sont **pas** des charges : achat d'immobilisation (emploi), remboursement d'emprunt ; ne sont pas des produits : emprunt obtenu, apport.
- Trois niveaux : **exploitation** (61/71), **financier** (63/73), **non courant** (65/75), puis l'impôt (67).
- Achats revendus = achats + ($SI - SF$) ; même logique pour les achats consommés de matières et fournitures.
- III = I − II ; VI = IV − V ; VII = III + VI ; X = VIII − IX ; XI = VII + X ; XIII = XI − XII.
- Escomptes accordés = charge **financière** ; prix de cession = produit **non courant**, valeur nette = charge non courante.
- Le résultat net du CPC = le résultat inscrit au passif du bilan.
- CPC = flux de l'exercice (remis à zéro) ; bilan = stock à la clôture.
`,
    exercices: md`
### Exercice 2 — Charge, emploi ou rien ?

Pour l'agence de voyages « Sahara Trips » (Ouarzazate), classez : charge (et niveau), produit (et niveau), ou opération de bilan.
1. Loyer de l'agence. 2. Achat d'un minibus. 3. Commissions perçues sur les billets vendus. 4. Intérêts d'un prêt bancaire. 5. Encaissement d'une facture client. 6. Pénalité de la CNSS pour retard. 7. Dividendes reçus d'une filiale.

<details><summary>Voir le corrigé</summary>

1. Charge d'exploitation (autres charges externes). 2. Opération de bilan : immobilisation. 3. Produit d'exploitation (ventes de services). 4. Charge financière. 5. Opération de bilan : la banque augmente, la créance client diminue. 6. Charge non courante. 7. Produit financier.

</details>

### Exercice 3 — Retrouver un élément manquant

Une entreprise réalise des ventes de 540 000 DH. Ses achats de marchandises s'élèvent à 330 000 DH, son stock passe de 40 000 DH à 55 000 DH. Les autres charges d'exploitation totalisent 150 000 DH. Le résultat financier est de −6 000 DH, il n'y a pas d'opération non courante et l'impôt est de 9 800 DH. Calculez le résultat d'exploitation et le résultat net.

<details><summary>Voir le corrigé</summary>

Achats revendus $= 330\,000 + (40\,000 - 55\,000) = 315\,000$.

Résultat d'exploitation $= 540\,000 - 315\,000 - 150\,000 = \mathbf{75\,000}$ DH.

Résultat courant $= 75\,000 - 6\,000 = 69\,000$ ; résultat net $= 69\,000 - 9\,800 = \mathbf{59\,200}$ DH.

</details>
`,
    qcm: [
      { q: "Le remboursement d'une partie d'un emprunt est :", choix: ["Une charge financière", "Une charge d'exploitation", "Une opération de bilan sans effet sur le résultat", "Un produit non courant"], bonne: 2, explication: "Seuls les intérêts sont une charge." },
      { q: "Achats 400 000, stock initial 50 000, stock final 70 000. Les achats revendus valent :", choix: ["420 000", "380 000", "400 000", "450 000"], bonne: 1, explication: "400 000 + (50 000 − 70 000) = 380 000." },
      { q: "Les escomptes accordés aux clients sont des :", choix: ["Charges d'exploitation", "Charges financières", "Charges non courantes", "Produits financiers"], bonne: 1, explication: "C'est une réduction pour paiement anticipé, de nature financière." },
      { q: "Le prix de cession d'une machine est classé en :", choix: ["Produits d'exploitation", "Produits financiers", "Produits non courants", "Capitaux propres"], bonne: 2, explication: "Les cessions d'immobilisations sont non courantes." },
      { q: "Le résultat courant est égal à :", choix: ["Résultat d'exploitation + résultat financier", "Résultat d'exploitation + résultat non courant", "Résultat net + impôt", "Produits − charges d'exploitation"], bonne: 0, explication: "Il exclut les opérations non courantes." },
      { q: "Les salaires et les charges sociales figurent dans :", choix: ["Les autres charges externes", "Les charges de personnel", "Les charges non courantes", "Les impôts et taxes"], bonne: 1, explication: "Rubrique propre du CPC." },
      { q: "Un emprunt bancaire obtenu est :", choix: ["Un produit financier", "Un produit d'exploitation", "Une ressource du bilan", "Une charge"], bonne: 2, explication: "Il crée une dette, il n'enrichit pas l'entreprise." },
      { q: "Résultat avant impôts 80 000 et impôt 16 000. Le résultat net vaut :", choix: ["96 000", "64 000", "80 000", "16 000"], bonne: 1, explication: "80 000 − 16 000." },
      { q: "La taxe professionnelle est classée en :", choix: ["Impôts et taxes", "Impôts sur les résultats", "Charges non courantes", "Autres charges externes"], bonne: 0, explication: "C'est un impôt d'exploitation, distinct de l'impôt sur le bénéfice." },
      { q: "Si le stock final est supérieur au stock initial, la variation de stock :", choix: ["Augmente les achats revendus", "Diminue les achats revendus", "N'a aucun effet", "Est un produit financier"], bonne: 1, explication: "SI − SF est négatif : une partie des achats n'a pas été vendue." },
    ],
  },

  4: {
    titre: "Le compte, la partie double et le plan comptable",
    description: "ENCG S1 : fonctionnement des comptes, solde débiteur ou créditeur, partie double, classes et codification du PCGE marocain, comptes soustractifs, cas corrigé.",
    resume: md`
## L'essentiel — Compte, partie double, PCGE

- Un **compte** a deux côtés : **débit** (gauche) et **crédit** (droite). Solde = total débit − total crédit (débiteur, créditeur ou nul).
- Actif et charges augmentent au **débit** ; passif et produits augmentent au **crédit**.
- **Partie double** : chaque opération touche au moins deux comptes ; total des débits = total des crédits.
- Analyse en 4 questions : quels comptes, quelle nature, augmentation ou diminution, débit ou crédit.
- PCGE : classes 1 à 5 (bilan), 6 et 7 (CPC), 8 (résultats), 0 (comptes spéciaux) ; la classe 9 est analytique.
- Codification décimale : classe (6), rubrique (61), poste (611), compte (6111), sous-compte (61119).
- Parallélisme 61/71, 63/73, 65/75 ; 6111/7111 ; 6386/7386.
- Comptes **soustractifs** (souvent terminés par 9) : amortissements 28, provisions 29 et 39, RRR obtenus 6119, RRR accordés 7119.
- Immobilisation achetée à crédit : **4481**, pas 4411.
`,
    exercices: md`
### Exercice 2 — Débit ou crédit ?

Pour chaque opération de la société « Rabat Print », indiquez le compte débité et le compte crédité (sans TVA) :
1. Vente de prestations d'impression au comptant, en espèces, 4 500 DH.
2. Achat de papier (marchandises) à crédit, 12 000 DH.
3. Paiement du fournisseur de papier par chèque, 12 000 DH.
4. Obtention d'un emprunt bancaire de 100 000 DH.
5. Paiement des intérêts de l'emprunt par la banque, 1 200 DH.

<details><summary>Voir le corrigé</summary>

1. D 5161 Caisses / C 7124 Ventes de services produits au Maroc : 4 500.
2. D 6111 Achats de marchandises / C 4411 Fournisseurs : 12 000.
3. D 4411 Fournisseurs / C 5141 Banques : 12 000.
4. D 5141 Banques / C 1481 Emprunts auprès des établissements de crédit : 100 000.
5. D 6311 Intérêts des emprunts et dettes / C 5141 Banques : 1 200.

</details>

### Exercice 3 — Lire un compte

Le compte 3421 Clients de la société « Oujda Agro » présente au débit : 48 000 ; 26 000 ; 15 500. Au crédit : 30 000 ; 26 000 ; 4 000. Calculez son solde, donnez son sens et interprétez-le. Quel serait le sens du solde du compte 7119 ?

<details><summary>Voir le corrigé</summary>

Total débit $= 89\,500$ ; total crédit $= 60\,000$ ; solde **débiteur de 29 500 DH** : c'est ce que les clients doivent encore à l'entreprise (créance à l'actif).

Le compte 7119 Rabais, remises et ristournes accordés est un compte de produits **soustractif** : son solde est **débiteur**, il diminue les ventes.

</details>
`,
    qcm: [
      { q: "Un compte d'actif augmente :", choix: ["Au débit", "Au crédit", "Indifféremment", "Seulement en fin d'exercice"], bonne: 0, explication: "L'actif est à gauche, comme le débit." },
      { q: "Une vente de marchandises s'enregistre :", choix: ["Au débit de 7111", "Au crédit de 7111", "Au débit de 6111", "Au crédit de 3421"], bonne: 1, explication: "Un produit augmente au crédit." },
      { q: "Total débit 85 000, total crédit 97 000. Le solde est :", choix: ["Débiteur de 12 000", "Créditeur de 12 000", "Nul", "Débiteur de 182 000"], bonne: 1, explication: "Le crédit l'emporte de 12 000." },
      { q: "Selon la partie double :", choix: ["Chaque opération touche un seul compte", "Le total des débits égale le total des crédits", "Les débits sont toujours des charges", "Le crédit représente l'argent reçu"], bonne: 1, explication: "C'est l'égalité fondamentale de l'écriture." },
      { q: "La classe 4 du PCGE regroupe :", choix: ["Les comptes de passif circulant", "Les comptes de trésorerie", "Les comptes de charges", "Les comptes d'actif immobilisé"], bonne: 0, explication: "Fournisseurs, personnel, État, organismes sociaux." },
      { q: "Le compte 6111 correspond à :", choix: ["Ventes de marchandises", "Achats de marchandises", "Marchandises en stock", "Fournisseurs"], bonne: 1, explication: "6 = charges, 61 = exploitation, 611 = achats revendus." },
      { q: "L'achat d'un véhicule utilitaire payable dans trois mois se crédite au compte :", choix: ["4411 Fournisseurs", "4481 Dettes sur acquisitions d'immobilisations", "1481 Emprunts", "5141 Banques"], bonne: 1, explication: "Le fournisseur d'immobilisations est distingué du fournisseur de marchandises." },
      { q: "Le compte 6119 a normalement un solde :", choix: ["Débiteur", "Créditeur", "Toujours nul", "Variable selon l'entreprise"], bonne: 1, explication: "C'est un compte de charges soustractif." },
      { q: "Un compte Banques à solde créditeur signifie :", choix: ["Que l'entreprise a beaucoup d'argent", "Que l'entreprise est à découvert", "Une erreur obligatoire", "Un placement"], bonne: 1, explication: "Il passe alors en trésorerie-passif." },
      { q: "La classe réservée à la comptabilité analytique est la classe :", choix: ["0", "8", "9", "5"], bonne: 2, explication: "Les classes 1 à 8 et 0 relèvent de la comptabilité générale." },
    ],
  },

  5: {
    titre: "Le circuit comptable, du justificatif à la balance",
    description: "ENCG S1 : pièces justificatives, livre-journal, grand livre, balance et ses limites, journaux auxiliaires et correction des erreurs, avec une balance corrigée.",
    resume: md`
## L'essentiel — Le circuit comptable

- Chemin d'une opération : **pièce justificative → journal → grand livre → balance → états de synthèse**.
- Aucune écriture sans pièce ; le libellé cite la pièce.
- **Journal** : ordre chronologique ; date, comptes débités puis crédités, libellé, montants ; ni blanc, ni rature.
- **Grand livre** : un compte par élément ; report de chaque montant du journal du même côté ; calcul des soldes.
- **Balance** : totaux et soldes de tous les comptes ; mouvements débit = mouvements crédit = total du journal ; soldes débiteurs = soldes créditeurs.
- La balance ne détecte ni les omissions, ni les doubles saisies, ni les erreurs d'imputation, ni les erreurs compensées.
- **Journaux auxiliaires** (achats, ventes, banque, caisse, OD) centralisés chaque mois ; grand livre auxiliaire des clients et des fournisseurs.
- Correction : **contre-passation** puis bonne écriture, ou **écriture rectificative** ; jamais de rature.
- Point de départ : écriture de **réouverture** à partir du bilan d'ouverture.
`,
    exercices: md`
### Exercice 2 — L'erreur que la balance ne voit pas

Pour chaque erreur, dites si la balance reste équilibrée et proposez la correction :
1. Une facture de transport de 2 300 DH a été débitée au compte 6131 au lieu de 6142.
2. Un règlement client de 8 000 DH a été porté au grand livre au débit de 3421 au lieu du crédit.
3. Une facture de vente de 5 600 DH n'a jamais été saisie.

<details><summary>Voir le corrigé</summary>

1. Balance **équilibrée** (erreur d'imputation). Correction : D 6142 Transports / C 6131 Locations et charges locatives 2 300.
2. Balance **déséquilibrée** : le total débit est majoré de 8 000 et le total crédit minoré de 8 000 (écart de 16 000). Correction du report au grand livre (erreur de report, pas d'écriture au journal).
3. Balance **équilibrée** (omission). Correction : passer l'écriture D 3421 Clients / C 7111 Ventes de marchandises 5 600.

</details>

### Exercice 3 — Compléter une balance

Une balance présente les soldes suivants : Capital 300 000 (C) ; Matériel 180 000 (D) ; Clients 64 000 (D) ; Fournisseurs 52 000 (C) ; Banques ? ; Achats 140 000 (D) ; Ventes 210 000 (C) ; Charges externes 26 000 (D). Calculez le solde de Banques et indiquez son sens.

<details><summary>Voir le corrigé</summary>

Soldes créditeurs : $300\,000 + 52\,000 + 210\,000 = 562\,000$.

Soldes débiteurs connus : $180\,000 + 64\,000 + 140\,000 + 26\,000 = 410\,000$.

Banques : $562\,000 - 410\,000 = \mathbf{152\,000}$ DH, **solde débiteur** (disponibilités).

</details>
`,
    qcm: [
      { q: "Le livre qui enregistre les opérations dans l'ordre chronologique est :", choix: ["Le grand livre", "Le livre-journal", "La balance", "Le livre d'inventaire"], bonne: 1, explication: "Le grand livre classe par compte, le journal par date." },
      { q: "Le grand livre regroupe :", choix: ["Les opérations par date", "Les opérations par compte", "Les seuls comptes de bilan", "Les factures"], bonne: 1, explication: "Un compte par élément, avec ses débits et crédits." },
      { q: "Dans une balance juste, le total des mouvements débit est égal :", choix: ["Au total des soldes débiteurs", "Au total du journal", "Au total du bilan", "Au résultat"], bonne: 1, explication: "Chaque montant du journal est reporté une fois au débit et une fois au crédit." },
      { q: "Quelle erreur la balance détecte-t-elle ?", choix: ["L'omission d'une facture", "Un montant reporté d'un seul côté", "Une double saisie", "Une erreur d'imputation"], bonne: 1, explication: "Seules les erreurs qui rompent l'égalité débit-crédit apparaissent." },
      { q: "Pour corriger une écriture fausse au journal, on :", choix: ["Rature le montant", "Utilise du correcteur", "Passe une contre-passation ou une écriture rectificative", "Arrache la page"], bonne: 2, explication: "La loi interdit ratures et effacements." },
      { q: "La première écriture d'un exercice est :", choix: ["L'écriture de réouverture des comptes", "La première vente", "La balance", "L'inventaire"], bonne: 0, explication: "Elle reprend le bilan d'ouverture." },
      { q: "Les journaux auxiliaires sont :", choix: ["Interdits", "Centralisés périodiquement dans le journal général", "Réservés aux banques", "Remplacés par la balance"], bonne: 1, explication: "On y reporte les totaux, souvent chaque mois." },
      { q: "Le grand livre auxiliaire des fournisseurs permet :", choix: ["De suivre la dette envers chaque fournisseur", "De calculer la TVA", "D'établir le CPC", "De remplacer le compte 4411"], bonne: 0, explication: "Le compte collectif 4411 est détaillé par fournisseur." },
      { q: "Le libellé d'une écriture doit notamment citer :", choix: ["Le nom du comptable", "La pièce justificative", "Le solde du compte", "Le résultat"], bonne: 1, explication: "Il permet de remonter au document d'origine." },
      { q: "Les soldes des comptes de classes 6 et 7 servent à établir :", choix: ["Le bilan", "Le CPC", "Le journal", "Le tableau de financement uniquement"], bonne: 1, explication: "Charges et produits forment le CPC." },
    ],
  },

  6: {
    titre: "La TVA dans les opérations courantes",
    description: "ENCG S1 : mécanisme de la TVA au Maroc, taux de 20 % et 10 %, comptes 4455, 34551, 34552, 4456 et 3456, droit à déduction, liquidation et déclaration.",
    resume: md`
## L'essentiel — La TVA

- Impôt indirect payé par le consommateur, collecté par les entreprises ; **neutre** pour l'assujetti (comptes de tiers, jamais de charges ni de produits).
- TVA versée = TVA facturée − TVA récupérable ; chaque entreprise paie sur sa valeur ajoutée.
- Taux 2026 : **20 %** (normal) et **10 %** (réduit : banque, hébergement, restauration…) ; à l'examen, le taux de l'énoncé.
- $TTC = HT \times (1+t)$ ; TVA contenue dans un TTC : $TTC/6$ à 20 %, $TTC/11$ à 10 %.
- Comptes : **4455** TVA facturée ; **34551** récupérable sur immobilisations ; **34552** récupérable sur charges ; **4456** TVA due ; **3456** crédit de TVA.
- Déduction : facture régulière (ICE), dépense liée à des opérations taxables, facture payée ; exclusions (voitures de tourisme…) → TVA ajoutée au coût.
- TVA due = facturée − récupérable sur charges − récupérable sur immobilisations − crédit antérieur.
- Résultat négatif = crédit de TVA (débit 3456), reporté.
- Régime mensuel si CA ≥ 1 000 000 DH, sinon trimestriel ; dépôt avant la fin du mois suivant.
`,
    exercices: md`
### Exercice 2 — Trouver le HT, la TVA et le TTC

Complétez : 1) 15 000 HT à 20 % ; 2) 46 200 TTC à 10 % ; 3) TVA de 3 450 à 20 % ; 4) 102 600 TTC à 20 %.

<details><summary>Voir le corrigé</summary>

1. TVA $3\,000$ ; TTC $18\,000$.
2. HT $= 46\,200 / 1{,}10 = 42\,000$ ; TVA $4\,200$.
3. HT $= 3\,450 / 0{,}20 = 17\,250$ ; TTC $20\,700$.
4. HT $= 102\,600 / 1{,}20 = 85\,500$ ; TVA $17\,100$.

</details>

### Exercice 3 — Liquidation trimestrielle

La société « Dakhla Pêche Services », au régime trimestriel, relève pour le 1ᵉʳ trimestre : TVA facturée 58 000 DH ; TVA récupérable sur charges 31 500 DH ; achat d'un groupe frigorifique 120 000 DH HT (TVA 20 %) ; crédit de TVA du trimestre précédent 2 000 DH. Liquidez la TVA et passez l'écriture.

<details><summary>Voir le corrigé</summary>

TVA récupérable sur immobilisations $= 120\,000 \times 20\,\% = 24\,000$.

$58\,000 - 31\,500 - 24\,000 - 2\,000 = \mathbf{500}$ DH de TVA due.

Écriture : D 4455 58 000 / C 34552 31 500 ; C 34551 24 000 ; C 3456 2 000 ; C 4456 500.

</details>
`,
    qcm: [
      { q: "Pour l'entreprise assujettie, la TVA est :", choix: ["Une charge d'exploitation", "Un produit", "Neutre, enregistrée en comptes de tiers", "Une charge financière"], bonne: 2, explication: "Elle est collectée pour l'État et récupérée sur les achats." },
      { q: "La TVA contenue dans 12 000 DH TTC au taux de 20 % est de :", choix: ["2 400", "2 000", "1 200", "10 000"], bonne: 1, explication: "12 000 / 6 = 2 000." },
      { q: "La TVA facturée sur les ventes s'enregistre :", choix: ["Au débit de 34552", "Au crédit de 4455", "Au crédit de 7111", "Au débit de 4456"], bonne: 1, explication: "C'est une dette envers l'État." },
      { q: "La TVA sur l'achat d'une machine se débite au compte :", choix: ["34552", "34551", "4455", "2332"], bonne: 1, explication: "TVA récupérable sur immobilisations." },
      { q: "TVA facturée 30 000, récupérable 36 000, pas de crédit antérieur. On constate :", choix: ["Une TVA due de 6 000", "Un crédit de TVA de 6 000", "Une charge de 6 000", "Un produit de 6 000"], bonne: 1, explication: "La récupérable dépasse la facturée." },
      { q: "La TVA sur une voiture de tourisme achetée par une société commerciale ordinaire :", choix: ["Est récupérable", "S'ajoute au coût du véhicule", "Est une charge financière", "N'existe pas"], bonne: 1, explication: "Elle est exclue du droit à déduction." },
      { q: "Les commissions bancaires sont soumises à la TVA au taux de :", choix: ["20 %", "10 %", "7 %", "0 %"], bonne: 1, explication: "Les opérations de banque relèvent du taux réduit." },
      { q: "Le paiement de la TVA due s'enregistre :", choix: ["D 4456 / C 5141", "D 5141 / C 4456", "D 4455 / C 5141", "D 3456 / C 5141"], bonne: 0, explication: "La dette envers l'État est soldée par la banque." },
      { q: "Une entreprise dont le chiffre d'affaires de l'an dernier est de 2 millions de DH déclare la TVA :", choix: ["Chaque mois", "Chaque trimestre", "Chaque année", "Jamais"], bonne: 0, explication: "Seuil du régime mensuel : 1 000 000 DH." },
      { q: "Le crédit de TVA d'un mois :", choix: ["Est remboursé chaque mois en espèces", "S'impute sur la déclaration suivante", "Est une charge", "Est un produit financier"], bonne: 1, explication: "Il est porté au débit du compte 3456 puis imputé." },
    ],
  },

  7: {
    titre: "Les achats et les ventes : la facture",
    description: "ENCG S1 : cycle commercial, mentions de la facture, rabais, remises, ristournes, escompte, port, cascade du brut au net à payer et écritures des deux côtés.",
    resume: md`
## L'essentiel — La facture

- Cycle : devis → bon de commande → bon de livraison → **facture** (seule pièce comptabilisée) → règlement.
- Mentions : identités, identifiant fiscal et **ICE**, date, numéro, quantités, prix, réductions, HT, taux et montant de TVA, TTC, conditions de règlement.
- Réductions commerciales : **rabais** (défaut), **remise** (volume, statut), **ristourne** (chiffre d'affaires de la période) ; calcul en cascade, taux global $1 - (1-r_1)(1-r_2)$.
- **Escompte** : réduction financière sur le net commercial ; **6386** chez le vendeur, **7386** chez l'acheteur.
- Port facturé : ajouté après le net financier, soumis à TVA ; **71276** chez le vendeur, **6142** chez l'acheteur.
- Cascade : brut → net commercial → net financier → + port → HT → + TVA → TTC.
- On enregistre le **net commercial** en 6111 / 7111 ; escompte et port à part.
- Remonter : diviser par $(1+t)$, retirer le port, diviser par $(1-e)$, puis par $(1-r)$.
`,
    exercices: md`
### Exercice 2 — Facture sans escompte, franco de port

La société « Rif Céramique » vend au « Bazar Chaouen » de la vaisselle pour 24 000 DH bruts. Un rabais de 5 % est accordé pour quelques pièces de teinte irrégulière, puis une remise de 10 %. Franco de port, pas d'escompte, TVA 20 %, paiement à 30 jours. Établissez la facture et passez l'écriture chez les deux parties.

<details><summary>Voir le corrigé</summary>

Brut 24 000 ; rabais 5 % : −1 200 → 22 800 ; remise 10 % : −2 280 → **net commercial = HT = 20 520** ; TVA 4 104 ; **TTC 24 624**.

Vendeur : D 3421 Clients 24 624 / C 7111 Ventes de marchandises 20 520 ; C 4455 État, TVA facturée 4 104.

Acheteur : D 6111 Achats de marchandises 20 520 ; D 34552 État, TVA récupérable sur charges 4 104 / C 4411 Fournisseurs 24 624.

Franco de port : le transport reste à la charge du vendeur et n'apparaît pas sur la facture.

</details>

### Exercice 3 — Retrouver le montant brut

Une facture indique un net à payer de 27 600 DH. Conditions : remise 8 %, escompte 1 %, port facturé 230 DH, TVA 20 %. Retrouvez le montant brut.

<details><summary>Voir le corrigé</summary>

HT $= 27\,600 / 1{,}20 = 23\,000$ ; net financier $= 23\,000 - 230 = 22\,770$ ; net commercial $= 22\,770 / 0{,}99 = 23\,000$ ; brut $= 23\,000 / 0{,}92 = \mathbf{25\,000}$ DH.

Vérification : $25\,000 \times 0{,}92 = 23\,000$ ; escompte $230$ ; net financier $22\,770$ ; + port $230$ = $23\,000$ HT ; TTC $27\,600$ ✓.

</details>
`,
    qcm: [
      { q: "Le document qui donne lieu à une écriture comptable chez le vendeur et chez l'acheteur est :", choix: ["Le bon de commande", "Le bon de livraison", "La facture", "Le devis"], bonne: 2, explication: "Elle constate la créance et la dette." },
      { q: "Une réduction accordée pour un défaut de qualité est :", choix: ["Une remise", "Un rabais", "Une ristourne", "Un escompte"], bonne: 1, explication: "Le rabais compense un défaut ou un retard." },
      { q: "Deux remises successives de 10 % et 10 % équivalent à une remise globale de :", choix: ["20 %", "19 %", "21 %", "10 %"], bonne: 1, explication: "1 − 0,9 × 0,9 = 0,19." },
      { q: "L'escompte se calcule sur :", choix: ["Le montant brut", "Le net commercial", "Le TTC", "Le port"], bonne: 1, explication: "Après toutes les réductions commerciales." },
      { q: "Chez l'acheteur, l'escompte obtenu s'enregistre au :", choix: ["Débit de 6386", "Crédit de 7386", "Crédit de 6111", "Débit de 7111"], bonne: 1, explication: "C'est un produit financier." },
      { q: "Le port facturé par le vendeur est :", choix: ["Hors du champ de la TVA", "Soumis à la TVA", "Une charge du vendeur", "Déduit du brut"], bonne: 1, explication: "Il s'ajoute au net financier pour former la base de la TVA." },
      { q: "Sur la facture d'origine, les remises sont :", choix: ["Enregistrées au compte 6119", "Déduites : on enregistre le net commercial", "Enregistrées en produits", "Ignorées et la vente enregistrée au brut"], bonne: 1, explication: "Les comptes 6119 et 7119 servent aux réductions accordées après la facture." },
      { q: "Net commercial 40 000, escompte 2 %, port 500, TVA 20 %. Le TTC vaut :", choix: ["47 640", "48 000", "47 040", "48 600"], bonne: 0, explication: "40 000 − 800 + 500 = 39 700 HT ; × 1,2 = 47 640." },
      { q: "« Franco de port » signifie que :", choix: ["Le client paie le transport", "Le transport est à la charge du vendeur", "Le port est exonéré de TVA", "Le port est payé en espèces"], bonne: 1, explication: "Rien n'apparaît sur la facture." },
      { q: "Une ristourne est accordée :", choix: ["Pour un défaut de qualité", "Sur le chiffre d'affaires réalisé pendant une période", "Pour un paiement comptant", "Sur le port"], bonne: 1, explication: "Elle est périodique." },
    ],
  },

  8: {
    titre: "Les avoirs et les emballages consignés",
    description: "ENCG S1 : facture d'avoir (retour, rabais, ristourne, escompte après facture), catégories d'emballages, consignation, boni, mali et emballages conservés.",
    resume: md`
## L'essentiel — Avoirs et emballages

- La **facture d'avoir** réduit la dette du client après une facture : retour, réduction commerciale ou escompte accordés après coup ; elle est établie TTC et réduit la TVA.
- Retour : écriture inverse de la vente (**7111** / **6111**).
- Réduction commerciale après facture : **7119** chez le vendeur, **6119** chez l'acheteur (comptes soustractifs).
- Escompte après facture : **6386** / **7386**.
- Emballages : perdus (vendus avec le produit), récupérables non identifiables (stocks), identifiables (immobilisations), **consignés** (à rendre contre garantie).
- Consignation : ni vente ni TVA ; vendeur **4425**, acheteur **3413** ; ajoutée au TTC.
- Retour au prix de consignation : D 4425 / C 3421 ; retour moins cher : **boni** (71278, avec TVA) chez le vendeur, **mali** (61317) chez l'acheteur.
- Emballages conservés : vente au prix de consignation, TVA due ; vendeur 7127, acheteur 6123.
- Contrôle : le compte 4425 est soldé quand tous les emballages ont un sort.
`,
    exercices: md`
### Exercice 2 — Trois avoirs

La société « Kénitra Peintures » a vendu au « Droguerie Sebou » 50 000 DH HT (TVA 20 %). Passez chez le vendeur les écritures des avoirs suivants :
1. Retour de pots endommagés : 2 000 DH HT.
2. Rabais de 4 % sur le reste, pour une teinte non conforme.
3. Escompte de 1 % sur le net restant, le client payant aussitôt.

<details><summary>Voir le corrigé</summary>

1. Retour : D 7111 2 000 ; D 4455 400 / C 3421 2 400.
2. Rabais : $48\,000 \times 4\,\% = 1\,920$ HT ; TVA 384 : D 7119 1 920 ; D 4455 384 / C 3421 2 304.
3. Escompte : $(48\,000 - 1\,920) \times 1\,\% = 46\,080 \times 1\,\% = 460{,}80$ HT ; TVA 92,16 : D 6386 460,80 ; D 4455 92,16 / C 3421 552,96.

Règlement : $60\,000 - 2\,400 - 2\,304 - 552{,}96 = 54\,743{,}04$ DH.

</details>

### Exercice 3 — Consignation de bidons

Une huilerie consigne 200 bidons à 40 DH lors d'une vente. Le client rend 150 bidons repris à 35 DH et garde les autres. Calculez le boni, la TVA (20 %) et le montant rendu au client, puis la somme due pour les bidons conservés.

<details><summary>Voir le corrigé</summary>

Retour : consignation $150 \times 40 = 6\,000$ ; reprise $150 \times 35 = 5\,250$ ; boni $750$ HT ; TVA $150$ ; montant rendu $6\,000 - 900 = 5\,100$ DH.

Conservés : $50 \times 40 = 2\,000$ HT ; TVA $400$ : la consignation de 2 000 DH couvre le prix HT, le client doit encore **400 DH** de TVA.

</details>
`,
    qcm: [
      { q: "La facture d'avoir est établie par :", choix: ["L'acheteur", "Le vendeur", "La banque", "La DGI"], bonne: 1, explication: "Elle réduit la créance du vendeur sur son client." },
      { q: "Un retour de marchandises chez le vendeur se débite au compte :", choix: ["7119", "7111", "6111", "6386"], bonne: 1, explication: "Le retour annule directement la vente." },
      { q: "Une ristourne accordée après la facture s'enregistre chez le vendeur au :", choix: ["Débit de 7119", "Crédit de 7119", "Débit de 6119", "Crédit de 4455"], bonne: 0, explication: "7119 est un compte de produits soustractif, à solde débiteur." },
      { q: "La consignation d'emballages est :", choix: ["Une vente soumise à TVA", "Une garantie non soumise à TVA", "Un produit accessoire", "Une charge du vendeur"], bonne: 1, explication: "Elle est remboursable au retour des emballages." },
      { q: "Chez le vendeur, la consignation se crédite au compte :", choix: ["3413", "4425", "7127", "4411"], bonne: 1, explication: "Clients, dettes pour emballages et matériel consignés." },
      { q: "Un emballage consigné 30 DH est repris 22 DH. Le vendeur constate :", choix: ["Un mali de 8 DH", "Un boni de 8 DH", "Une perte de 22 DH", "Rien"], bonne: 1, explication: "Il rembourse moins que la consignation." },
      { q: "Le boni sur reprise d'emballages est :", choix: ["Exonéré de TVA", "Soumis à TVA", "Une charge du vendeur", "Enregistré en 3413"], bonne: 1, explication: "C'est un produit accessoire taxable." },
      { q: "Si le client conserve les emballages consignés :", choix: ["La consignation est remboursée", "La consignation devient une vente soumise à TVA", "Rien ne se passe", "Le vendeur constate un mali"], bonne: 1, explication: "Le client doit en plus la TVA." },
      { q: "Le mali sur emballages chez l'acheteur est :", choix: ["Un produit", "Une charge", "Une dette", "Une créance"], bonne: 1, explication: "Il reçoit moins que ce qu'il a versé." },
      { q: "Un avoir d'escompte de 2 000 DH HT, TVA 20 %, réduit la créance client de :", choix: ["2 000", "2 400", "1 600", "400"], bonne: 1, explication: "L'avoir est TTC." },
    ],
  },

  9: {
    titre: "Les règlements et les effets de commerce",
    description: "ENCG S1 : chèques, virements et carte, lettre de change et billet à ordre, création, endossement, escompte, agio avec TVA à 10 % et effet impayé.",
    resume: md`
## L'essentiel — Règlements et effets

- Espèces **5161** ; chèque reçu **5111** puis **5141** au dépôt ; virement et carte **5141** (commissions en **6147**).
- **Lettre de change** : émise par le créancier (tireur) sur le débiteur (tiré) ; **billet à ordre** : émis par le débiteur (souscripteur). Régis par le Code de commerce (loi 15-95).
- Acceptation (le tiré s'engage), endossement (transmission), aval (garantie d'un tiers).
- Création : tireur D **3425** / C 3421 ; tiré D 4411 / C **4415** ; ni charge ni produit.
- Encaissement : D 5113 / C 3425, puis D 5141 + 6147 + 34552 / C 5113.
- Endossement : D 4411 / C 3425.
- Escompte $= VN \times t \times n/360$ ; agio HT = escompte + commissions ; TVA **10 %** ; net = VN − agio TTC.
- Remise à l'escompte : D 5141, 6311, 6147, 34552 / C **5520** ; à l'échéance payée : D 5520 / C 3425.
- Impayé : créance en **3424** Clients douteux ; remboursement de la banque ; frais en 6147.
`,
    exercices: md`
### Exercice 2 — Bordereau d'escompte

Le 12 avril, une entreprise remet à l'escompte un effet de 45 000 DH à échéance du 30 juin. Taux 7,2 %, commissions 90 DH HT, TVA 10 % sur l'agio. Calculez le nombre de jours, l'escompte, l'agio TTC et le net, puis passez l'écriture.

<details><summary>Voir le corrigé</summary>

Jours : 18 (avril) + 31 (mai) + 30 (juin) = **79 jours**.

Escompte $= 45\,000 \times 0{,}072 \times 79 / 360 = 711$ DH.

Agio HT $= 711 + 90 = 801$ ; TVA $80{,}10$ ; agio TTC $881{,}10$ ; net $= 45\,000 - 881{,}10 = 44\,118{,}90$ DH.

Écriture : D 5141 44 118,90 ; D 6311 711 ; D 6147 90 ; D 34552 80,10 / C 5520 45 000.

</details>

### Exercice 3 — Billet à ordre

La société « Errachidia Matériaux » doit 36 000 DH à son fournisseur. Elle souscrit à son profit un billet à ordre à 60 jours. À l'échéance, elle le paie par virement. Passez les écritures chez le souscripteur et chez le bénéficiaire, qui avait conservé l'effet et l'a remis à l'encaissement (commission 30 DH HT, TVA 10 %).

<details><summary>Voir le corrigé</summary>

Souscripteur : D 4411 / C 4415 : 36 000 ; à l'échéance D 4415 / C 5141 : 36 000.

Bénéficiaire : D 3425 / C 3421 : 36 000 ; remise à l'encaissement D 5113 / C 3425 : 36 000 ; avis de crédit D 5141 35 967 ; D 6147 30 ; D 34552 3 / C 5113 36 000.

</details>
`,
    qcm: [
      { q: "Dans une lettre de change, le tireur est :", choix: ["Le débiteur", "Le créancier qui émet l'effet", "La banque", "Le notaire"], bonne: 1, explication: "Il donne l'ordre au tiré de payer." },
      { q: "Le billet à ordre est établi par :", choix: ["Le créancier", "Le débiteur", "La banque", "Le tribunal"], bonne: 1, explication: "Le souscripteur promet de payer." },
      { q: "Chez le tireur, la création d'une lettre de change s'enregistre :", choix: ["D 3425 / C 3421", "D 3421 / C 7111", "D 4411 / C 4415", "D 5141 / C 3425"], bonne: 0, explication: "La créance ordinaire devient une créance matérialisée par un effet." },
      { q: "L'endossement d'un effet à un fournisseur s'enregistre :", choix: ["D 4411 / C 3425", "D 3425 / C 4411", "D 4415 / C 5141", "D 5520 / C 3425"], bonne: 0, explication: "La dette fournisseur est réglée par transmission de l'effet." },
      { q: "Effet de 36 000 DH, taux 8 %, 50 jours. L'escompte vaut :", choix: ["400", "4 000", "288", "480"], bonne: 0, explication: "36 000 × 0,08 × 50 / 360 = 400." },
      { q: "La TVA sur les agios bancaires est au taux de :", choix: ["20 %", "10 %", "14 %", "0 %"], bonne: 1, explication: "Taux des opérations de banque." },
      { q: "Le compte 5520 Crédits d'escompte appartient à :", choix: ["La trésorerie-actif", "La trésorerie-passif", "L'actif circulant", "Les capitaux propres"], bonne: 1, explication: "L'escompte est un crédit de la banque." },
      { q: "Un chèque reçu d'un client mais pas encore déposé s'enregistre au débit de :", choix: ["5141", "5111", "5161", "3425"], bonne: 1, explication: "Chèques à encaisser." },
      { q: "En cas d'effet impayé, la créance est reclassée en :", choix: ["3421", "3424 Clients douteux ou litigieux", "4415", "5520"], bonne: 1, explication: "Le recouvrement devient incertain." },
      { q: "Pour un effet escompté, le risque d'impayé pèse sur :", choix: ["La banque seule", "Le porteur qui l'a remis à l'escompte", "La DGI", "Personne"], bonne: 1, explication: "La banque se retourne contre le remettant." },
    ],
  },

  10: {
    titre: "L'acquisition des immobilisations",
    description: "ENCG S1 : immobilisation ou charge, classification CGNC, coût d'acquisition, frais d'acquisition, TVA sur immobilisations, compte 4481 et dépôts de garantie.",
    resume: md`
## L'essentiel — Acquisition des immobilisations

- **Immobilisation** : bien ou droit destiné à servir durablement (au-delà d'un exercice) ; c'est la **destination** du bien qui compte, pas sa nature.
- Une immobilisation pèse sur le résultat par l'**amortissement** (S2), pas en une fois ; les biens de faible valeur peuvent aller en charges.
- Classes : non-valeurs (21), incorporelles (22), corporelles (23), financières (24/25).
- Coût d'acquisition = prix net de rabais et remises + frais accessoires (transport, installation, douane) + TVA non récupérable.
- Exclus du coût : escompte (7386), TVA récupérable (**34551**), formation, entretien.
- Frais d'acte (enregistrement, conservation foncière, notaire) : le plus souvent **2121**, ou inclus dans le coût selon l'énoncé.
- Dette envers le fournisseur d'immobilisations : **4481**, jamais 4411.
- Voiture de tourisme : TVA non récupérable, ajoutée au coût.
- Immobilisation produite : D 23.. / C **7143** ; dépôt de garantie : D **2486** / C 5141 ; apport en nature : D 23.. / C 1111.
`,
    exercices: md`
### Exercice 2 — Charge ou immobilisation ?

Pour un cabinet comptable de Rabat, classez : 1) un serveur informatique de 45 000 DH ; 2) l'abonnement annuel à un logiciel en ligne ; 3) la peinture des bureaux (entretien) ; 4) un bureau en bois massif de 9 000 DH ; 5) une agrafeuse de 60 DH ; 6) la caution du local loué.

<details><summary>Voir le corrigé</summary>

1. Immobilisation corporelle (2355 Matériel informatique).
2. Charge (service consommé sur l'année).
3. Charge d'entretien (le bien n'est pas amélioré).
4. Immobilisation corporelle (2351 Mobilier de bureau).
5. Charge : faible valeur (importance significative).
6. Immobilisation financière (2486 Dépôts et cautionnements versés).

</details>

### Exercice 3 — Coût d'une machine importée

Une conserverie d'Agadir importe une sertisseuse : prix d'achat 250 000 DH, droits de douane 6 250 DH, transport du port à l'usine 3 750 DH, installation 5 000 DH, formation des opérateurs 4 000 DH. On ignore la TVA. Calculez le coût d'acquisition et passez l'écriture (paiement à 30 jours).

<details><summary>Voir le corrigé</summary>

Coût $= 250\,000 + 6\,250 + 3\,750 + 5\,000 = \mathbf{265\,000}$ DH. La formation (4 000 DH) n'est pas nécessaire à la mise en état de la machine : c'est une charge de l'exercice.

Écriture : D 2332 Matériel et outillage 265 000 / C 4481 Dettes sur acquisitions d'immobilisations 265 000. La formation est enregistrée à part, au débit d'un compte de charges externes.

</details>
`,
    qcm: [
      { q: "Ce qui fait d'un bien une immobilisation, c'est :", choix: ["Son prix élevé", "Sa destination durable dans l'entreprise", "Sa nature physique", "Son mode de paiement"], bonne: 1, explication: "Un camion peut être un stock pour un concessionnaire." },
      { q: "L'achat d'une machine à crédit se crédite au compte :", choix: ["4411", "4481", "1481", "3421"], bonne: 1, explication: "Dettes sur acquisitions d'immobilisations." },
      { q: "La TVA récupérable sur une machine se débite en :", choix: ["34552", "34551", "4455", "2332"], bonne: 1, explication: "Compte distinct de la TVA sur charges." },
      { q: "Prix 100 000, remise 10 %, transport 2 000, escompte 1 %. Le coût d'acquisition HT est :", choix: ["92 000", "91 100", "102 000", "90 000"], bonne: 0, explication: "90 000 + 2 000 ; l'escompte est un produit financier." },
      { q: "Le fonds commercial est une immobilisation :", choix: ["Corporelle", "Incorporelle", "Financière", "En non-valeurs"], bonne: 1, explication: "Compte 2230." },
      { q: "Les frais de constitution d'une société sont classés en :", choix: ["Immobilisations en non-valeurs", "Charges financières", "Immobilisations financières", "Capitaux propres"], bonne: 0, explication: "Compte 2111." },
      { q: "Une voiture de tourisme de 150 000 HT (TVA 20 % non récupérable) entre à l'actif pour :", choix: ["150 000", "180 000", "120 000", "30 000"], bonne: 1, explication: "La TVA non récupérable s'ajoute au coût." },
      { q: "Le dépôt de garantie versé au bailleur est :", choix: ["Une charge de loyer", "Une immobilisation financière", "Un produit", "Une dette"], bonne: 1, explication: "C'est une créance récupérable en fin de bail." },
      { q: "Une immobilisation produite par l'entreprise pour elle-même se crédite au compte :", choix: ["7111", "7143", "4481", "1111"], bonne: 1, explication: "Immobilisations corporelles produites." },
      { q: "Lequel de ces biens ne s'amortit pas ?", choix: ["Un camion", "Un terrain", "Un ordinateur", "Un logiciel"], bonne: 1, explication: "Le terrain ne perd pas de valeur par l'usage." },
    ],
  },
};

export default chapitres;
