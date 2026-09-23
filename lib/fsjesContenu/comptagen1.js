// Comptabilité Générale 1 (S1) — compléments par chapitre.
const md = String.raw;

export default {
  1: {
    titre: "Introduction à la comptabilité générale",
    resume: md`
## L'essentiel — Introduction à la comptabilité

- La **comptabilité générale** saisit, classe et enregistre les données chiffrées pour produire des **états de synthèse** donnant une **image fidèle**.
- Circuit : pièces justificatives → journal → grand-livre → balance → états de synthèse.
- Rôles : **juridique** (preuve), **fiscal** (base de l'IS, de l'IR, de la TVA), **financier** (information des tiers), **de gestion** (pilotage).
- Sources : **loi 9-88**, **CGNC** (avec le PCGE), Code de commerce, CGI, lois 17-95 et 5-96. Livres et pièces conservés **10 ans**.
- Principes : continuité, permanence des méthodes, coût historique, spécialisation des exercices, **prudence**, clarté, importance significative.
- États de synthèse : **bilan** (photo), **CPC** (film), **ESG**, **tableau de financement**, **ETIC**.
`,
    exercices: md`
### Exercice 2 — Rôles, principes et états

1. Quel rôle de la comptabilité est en jeu ? a) Un commerçant produit ses livres devant le tribunal dans un litige avec un client ; b) la banque demande les bilans avant d'accorder un crédit ; c) le dirigeant calcule la marge de chaque magasin ; d) la société calcule son IS.
2. Quel état de synthèse consulter pour connaître : a) le patrimoine au 31 décembre ; b) le bénéfice de l'année ; c) la valeur ajoutée ; d) les méthodes d'évaluation utilisées ?

<details><summary>Voir le corrigé</summary>

**1)** a) **juridique** ; b) **financier** ; c) **de gestion** ; d) **fiscal**.

**2)** a) le **bilan** ; b) le **CPC** ; c) l'**ESG** ; d) l'**ETIC**.

</details>
`,
    qcm: [
      { q: "Le texte qui fixe les obligations comptables des commerçants au Maroc est :", choix: ["La loi 9-88", "La loi 17-95", "Le DOC", "La loi 65-99"], bonne: 0, explication: "Complétée par le CGNC." },
      { q: "Les livres comptables doivent être conservés :", choix: ["3 ans", "5 ans", "10 ans", "30 ans"], bonne: 2, explication: "Avec les pièces justificatives." },
      { q: "Le bilan est comparable à :", choix: ["Un film de l'année", "Une photographie à une date", "Un budget", "Un journal"], bonne: 1, explication: "Le CPC, lui, est le film de l'exercice." },
      { q: "Un terrain qui a pris de la valeur n'est pas réévalué en vertu du principe :", choix: ["De clarté", "De prudence et du coût historique", "De permanence", "D'importance significative"], bonne: 1, explication: "Les plus-values latentes ne sont pas comptabilisées." },
      { q: "Le PCGE fait partie :", choix: ["Du Code de commerce", "Du CGNC", "Du CGI", "De la loi 5-96"], bonne: 1, explication: "Plan comptable général des entreprises." },
    ],
  },

  2: {
    titre: "Le patrimoine et le bilan",
    resume: md`
## L'essentiel — Patrimoine et bilan

- **Patrimoine** = biens + créances − dettes ; **actif** = emplois (ce que l'entreprise possède), **passif** = ressources (d'où viennent les fonds).
- Actif par **liquidité croissante** : immobilisations (non-valeurs, incorporelles, corporelles, financières) → actif circulant → trésorerie-actif.
- Passif par **exigibilité croissante** : financement permanent → passif circulant → trésorerie-passif.
- $\text{Actif} = \text{Passif}$ ; $\text{Situation nette} = \text{Actif} - \text{Dettes}$.
- Quatre variations : actif ↑ actif ↓ ; passif ↑ passif ↓ ; actif ↑ passif ↑ ; actif ↓ passif ↓.
- Le **résultat** figure au **passif** (perte en négatif, jamais à l'actif).
`,
    exercices: md`
### Exercice 2 — Établir un bilan et trouver le résultat

Éléments au 31/12 (en DH) : fonds commercial 80 000 ; matériel 120 000 ; mobilier 30 000 ; stock de marchandises 60 000 ; clients 45 000 ; banque 25 000 ; caisse 5 000 ; capital 230 000 ; emprunt bancaire (5 ans) 70 000 ; fournisseurs 38 000 ; État créditeur 7 000.

1. Présentez le bilan par masses et déterminez le résultat.
2. Qualifiez les variations : a) achat de mobilier payé par chèque ; b) achat de marchandises à crédit ; c) remboursement d'une échéance d'emprunt par banque.

<details><summary>Voir le corrigé</summary>

**1)**

| Actif | Montant | Passif | Montant |
|---|--:|---|--:|
| Immobilisations incorporelles | 80 000 | Capital | 230 000 |
| Immobilisations corporelles | 150 000 | Résultat (bénéfice) | **20 000** |
| Stocks | 60 000 | Dettes de financement | 70 000 |
| Clients | 45 000 | Fournisseurs | 38 000 |
| Trésorerie-actif | 30 000 | État | 7 000 |
| **Total** | **365 000** | **Total** | **365 000** |

Résultat $= 365\,000 - (230\,000 + 70\,000 + 38\,000 + 7\,000) = 20\,000$ DH (bénéfice).

**2)** a) actif ↑ / actif ↓ (total inchangé) ; b) actif ↑ / passif ↑ (total augmente) ; c) actif ↓ / passif ↓ (total diminue).

</details>
`,
    qcm: [
      { q: "L'actif est classé par ordre :", choix: ["D'exigibilité croissante", "De liquidité croissante", "Alphabétique", "De montant"], bonne: 1, explication: "Des immobilisations vers la trésorerie." },
      { q: "Un emprunt bancaire à 5 ans figure dans :", choix: ["Le passif circulant", "Le financement permanent", "La trésorerie-passif", "L'actif circulant"], bonne: 1, explication: "Dette de financement (classe 1)." },
      { q: "Une perte de l'exercice figure :", choix: ["À l'actif", "Au passif, en négatif", "Au CPC uniquement", "Nulle part"], bonne: 1, explication: "Elle réduit les capitaux propres." },
      { q: "L'achat de marchandises à crédit :", choix: ["Augmente l'actif et le passif", "Diminue l'actif et le passif", "Ne change pas le total", "Diminue le passif"], bonne: 0, explication: "Stock (ou charge) et dette fournisseur augmentent." },
      { q: "La situation nette est égale à :", choix: ["Actif + dettes", "Actif − dettes", "Capital − résultat", "Passif − actif"], bonne: 1, explication: "Ce sont les capitaux propres." },
    ],
  },

  3: {
    titre: "Le compte de produits et charges (CPC)",
    resume: md`
## L'essentiel — Le CPC

- $\text{Résultat} = \text{produits} - \text{charges}$.
- **Charge** ≠ décaissement ; **produit** ≠ encaissement : une facture non payée est déjà une charge.
- Pièges : l'achat d'une machine est une **immobilisation**, pas une charge ; le remboursement du capital d'un emprunt n'est pas une charge (seuls les **intérêts** le sont).
- Trois niveaux : **exploitation** (61/71), **financier** (63/73), **non courant** (65/75).
- $RC = REX + RFIN$ ; $RAI = RC + RNC$ ; $RN = RAI - IS$.
- $\text{Achats revendus} = \text{achats} + (SI - SF)$ ; $\text{Marge brute} = \text{ventes} - \text{achats revendus}$.
`,
    exercices: md`
### Exercice 2 — Charges et marge brute

1. Charge ou non ? a) achat d'un camion ; b) paiement du loyer du mois ; c) remboursement de 20 000 DH du capital d'un emprunt ; d) intérêts de 3 000 DH sur cet emprunt ; e) facture d'électricité reçue mais non payée.
2. Achats de marchandises : 400 000 DH ; stock initial : 50 000 DH ; stock final : 70 000 DH ; ventes de marchandises : 560 000 DH. Calculez la variation de stock, les achats revendus et la marge brute.

<details><summary>Voir le corrigé</summary>

**1)** a) **non** (immobilisation) ; b) **oui** ; c) **non** (diminution de dette) ; d) **oui** (charge financière) ; e) **oui** (spécialisation des exercices).

**2)** Variation $= 50\,000 - 70\,000 = -20\,000$ DH ; achats revendus $= 400\,000 - 20\,000 = 380\,000$ DH ; marge brute $= 560\,000 - 380\,000 = 180\,000$ DH.

</details>
`,
    qcm: [
      { q: "Le remboursement du capital d'un emprunt est :", choix: ["Une charge financière", "Une diminution de dette", "Un produit", "Une charge d'exploitation"], bonne: 1, explication: "Seuls les intérêts sont des charges." },
      { q: "Les charges financières sont en classe :", choix: ["61", "63", "65", "67"], bonne: 1, explication: "63 (produits financiers : 73)." },
      { q: "SI = 30 000, SF = 45 000, achats = 200 000 : les achats revendus valent :", choix: ["215 000", "185 000", "200 000", "245 000"], bonne: 1, explication: "200 000 + (30 000 − 45 000)." },
      { q: "Le résultat net est égal à :", choix: ["RAI − impôt sur les résultats", "RC + IS", "REX − RFIN", "Produits d'exploitation − charges financières"], bonne: 0, explication: "Compte 6701 pour l'impôt." },
      { q: "Une facture reçue non encore payée est :", choix: ["Ignorée jusqu'au paiement", "Déjà une charge de l'exercice", "Un produit", "Une immobilisation"], bonne: 1, explication: "Principe de spécialisation des exercices." },
    ],
  },

  4: {
    titre: "Le compte et la partie double",
    resume: md`
## L'essentiel — Compte et partie double

- Un **compte** a un **débit** (gauche) et un **crédit** (droite) ; solde débiteur, créditeur ou nul.
- **Actif et charges augmentent au débit ; passif et produits augmentent au crédit.**
- **Partie double** : toute opération a une origine (ressource, **crédit**) et une destination (emploi, **débit**) ; $\sum \text{débits} = \sum \text{crédits}$.
- Méthode en 4 étapes : identifier les comptes → leur nature → le sens de la variation → appliquer la règle et vérifier l'égalité.
- Le **virement comptable** transfère un montant entre deux comptes sans flux externe.
`,
    exercices: md`
### Exercice 2 — Six opérations au journal

(TVA ignorée.) Une entreprise démarre : 1) apport de 200 000 DH en banque ; 2) achat d'un matériel de 50 000 DH par chèque ; 3) achat de marchandises à crédit : 30 000 DH ; 4) vente de marchandises au comptant en espèces : 45 000 DH ; 5) paiement des salaires par banque : 8 000 DH ; 6) règlement du fournisseur par chèque.

1. Passez les écritures.
2. Calculez le solde du compte banque.

<details><summary>Voir le corrigé</summary>

**1)**

| N° | Débit | Crédit | Montant |
|---|---|---|--:|
| 1 | 5141 Banques | 1111 Capital | 200 000 |
| 2 | 2332 Matériel et outillage | 5141 Banques | 50 000 |
| 3 | 6111 Achats de marchandises | 4411 Fournisseurs | 30 000 |
| 4 | 5161 Caisses | 7111 Ventes de marchandises | 45 000 |
| 5 | 6171 Rémunérations du personnel | 5141 Banques | 8 000 |
| 6 | 4411 Fournisseurs | 5141 Banques | 30 000 |

**2)** Banque : $200\,000 - 50\,000 - 8\,000 - 30\,000 = 112\,000$ DH (solde débiteur).

</details>
`,
    qcm: [
      { q: "Un compte de charges augmente :", choix: ["Au crédit", "Au débit", "Des deux côtés", "Jamais"], bonne: 1, explication: "Comme les comptes d'actif." },
      { q: "Un compte de passif augmente :", choix: ["Au débit", "Au crédit", "Selon le montant", "Au solde"], bonne: 1, explication: "Comme les comptes de produits." },
      { q: "L'achat de marchandises à crédit se traduit par :", choix: ["Débit 4411 / crédit 6111", "Débit 6111 / crédit 4411", "Débit 6111 / crédit 5141", "Débit 3421 / crédit 7111"], bonne: 1, explication: "Charge au débit, dette au crédit." },
      { q: "Selon la partie double, la ressource est portée :", choix: ["Au débit", "Au crédit", "Hors bilan", "Au solde"], bonne: 1, explication: "L'emploi est au débit." },
      { q: "Un compte dont le total débit dépasse le total crédit a un solde :", choix: ["Créditeur", "Débiteur", "Nul", "Négatif"], bonne: 1, explication: "Solde = débit − crédit > 0." },
    ],
  },

  5: {
    titre: "Le plan comptable général des entreprises (PCGE)",
    resume: md`
## L'essentiel — Le PCGE

- Classes : **1** financement permanent ; **2** actif immobilisé ; **3** actif circulant ; **4** passif circulant ; **5** trésorerie ; **6** charges ; **7** produits ; **8** résultats ; **9** analytique ; **0** comptes spéciaux.
- Codification décimale : classe → rubrique → poste → compte → sous-compte (3 → 34 → 342 → 3421).
- Un **9** en 2ᵉ ou 3ᵉ position signale souvent un compte **soustractif** (1199, 3942, 2833 pour les amortissements…).
- Classe 5 dans les deux sens : **5141** banques (actif), **5541** banques soldes créditeurs (passif).
- Comptes clés : 1111, 1481, 2332, 3111, 3421, 34552, 4411, 4455, 5141, 5161, 6111, 6171, 7111.
`,
    exercices: md`
### Exercice 2 — Trouver et lire les comptes

1. Donnez le numéro du compte : a) Capital social ; b) Fournisseurs ; c) Clients ; d) Ventes de marchandises au Maroc ; e) Achats de marchandises ; f) État, TVA facturée ; g) Banques (soldes débiteurs) ; h) Rémunérations du personnel.
2. Indiquez la classe et la situation (bilan actif, bilan passif, CPC) de : 2340 ; 3425 ; 4441 ; 6311 ; 5520.
3. Que signifient les comptes 1199 et 3942 ?

<details><summary>Voir le corrigé</summary>

**1)** a) 1111 ; b) 4411 ; c) 3421 ; d) 7111 ; e) 6111 ; f) 4455 ; g) 5141 ; h) 6171.

**2)** 2340 (matériel de transport) : classe 2, **actif** ; 3425 (clients, effets à recevoir) : classe 3, **actif** ; 4441 (CNSS) : classe 4, **passif** ; 6311 (intérêts des emprunts) : classe 6, **CPC** ; 5520 (crédits d'escompte) : classe 5, **passif** (trésorerie-passif).

**3)** 1199 : résultat net de l'exercice **débiteur** (perte) ; 3942 : **provisions pour dépréciation des clients**, compte soustractif de l'actif.

</details>
`,
    qcm: [
      { q: "La classe 4 regroupe :", choix: ["Les charges", "Le passif circulant", "Les immobilisations", "La trésorerie"], bonne: 1, explication: "Fournisseurs, État, organismes sociaux…" },
      { q: "Le compte 3421 correspond à :", choix: ["Fournisseurs", "Clients", "Banques", "Capital"], bonne: 1, explication: "Classe 3, actif circulant." },
      { q: "La classe 7 regroupe :", choix: ["Les charges", "Les produits", "Les résultats", "Les stocks"], bonne: 1, explication: "Elle figure au CPC." },
      { q: "Le compte 5141 est :", choix: ["Un compte de passif", "Un compte de trésorerie-actif", "Un compte de charges", "Un compte de capitaux"], bonne: 1, explication: "Banques, soldes débiteurs." },
      { q: "Le compte 6111 enregistre :", choix: ["Les ventes de marchandises", "Les achats de marchandises", "Les salaires", "Les intérêts"], bonne: 1, explication: "Classe 6, charges d'exploitation." },
    ],
  },

  6: {
    titre: "L'organisation comptable",
    resume: md`
## L'essentiel — Journal, grand-livre, balance

- **Journal** : enregistrement **chronologique**, sans blanc ni rature (date, comptes, montants, libellé, pièce).
- **Grand-livre** : les mêmes écritures **classées par compte**, avec leur solde.
- **Balance** : liste de tous les comptes ; $\sum$ mouvements débit $= \sum$ mouvements crédit et $\sum$ soldes débiteurs $= \sum$ soldes créditeurs.
- Une balance équilibrée ne détecte pas une opération **omise**, **doublée** ou **mal imputée** (bon montant, mauvais compte).
- **Pas d'écriture sans pièce justificative** (facture, bon, chèque, relevé, bulletin de paie).
`,
    exercices: md`
### Exercice 2 — Grand-livre et balance

On reprend les six opérations de l'exercice 2 du chapitre 4 (apport 200 000 ; matériel 50 000 par chèque ; achats à crédit 30 000 ; ventes au comptant 45 000 ; salaires 8 000 ; règlement fournisseur 30 000).

1. Établissez la balance (mouvements et soldes).
2. Vérifiez les deux égalités.
3. Si le paiement des salaires avait été enregistré au débit du 6111 au lieu du 6171, la balance l'aurait-elle signalé ?

<details><summary>Voir le corrigé</summary>

**1)**

| Compte | Débit | Crédit | Solde débiteur | Solde créditeur |
|---|--:|--:|--:|--:|
| 1111 Capital | | 200 000 | | 200 000 |
| 2332 Matériel | 50 000 | | 50 000 | |
| 4411 Fournisseurs | 30 000 | 30 000 | | |
| 5141 Banques | 200 000 | 88 000 | 112 000 | |
| 5161 Caisses | 45 000 | | 45 000 | |
| 6111 Achats | 30 000 | | 30 000 | |
| 6171 Personnel | 8 000 | | 8 000 | |
| 7111 Ventes | | 45 000 | | 45 000 |
| **Totaux** | **363 000** | **363 000** | **245 000** | **245 000** |

**2)** Mouvements : 363 000 = 363 000 ✓ ; soldes : 245 000 = 245 000 ✓.

**3)** **Non** : c'est une erreur d'imputation ; les totaux restent égaux.

</details>
`,
    qcm: [
      { q: "Le journal enregistre les opérations :", choix: ["Par compte", "Par ordre chronologique", "Par montant", "Par client"], bonne: 1, explication: "Le grand-livre les classe par compte." },
      { q: "La balance sert principalement à :", choix: ["Calculer la TVA", "Contrôler l'égalité débit / crédit", "Payer les fournisseurs", "Établir les factures"], bonne: 1, explication: "C'est le document de contrôle." },
      { q: "Une balance équilibrée garantit :", choix: ["L'absence de toute erreur", "Seulement l'égalité des totaux", "La sincérité des comptes", "Le bon montant de TVA"], bonne: 1, explication: "Les omissions et erreurs d'imputation passent inaperçues." },
      { q: "La règle d'or de la comptabilité est :", choix: ["Pas d'écriture sans pièce justificative", "Toujours arrondir", "Ne jamais utiliser la classe 5", "Enregistrer en fin d'année"], bonne: 0, explication: "Premier point vérifié lors d'un contrôle." },
      { q: "Le grand-livre permet de connaître rapidement :", choix: ["La date de chaque opération", "Le solde de chaque compte", "Le résultat fiscal", "Les stocks physiques"], bonne: 1, explication: "Il regroupe les mouvements par compte." },
    ],
  },

  7: {
    titre: "La taxe sur la valeur ajoutée (TVA)",
    resume: md`
## L'essentiel — La TVA

- Impôt **indirect** supporté par le consommateur final ; l'entreprise est **collectrice** (TVA neutre pour elle).
- Taux : **20 %** (normal) et taux réduits (14 %, 10 %, 7 % selon le CGI en vigueur) ; exportations exonérées.
- $TVA = HT \times t$ ; $TTC = HT(1 + t)$ ; à 20 %, la TVA incluse dans un TTC vaut $TTC / 6$.
- Comptes : **4455** TVA facturée (passif) ; **34551** récupérable sur immobilisations ; **34552** récupérable sur charges ; **4456** TVA due ; **3456** crédit de TVA.
- $\text{TVA due} = \text{facturée} - \text{récupérable (charges et immobilisations)} - \text{crédit antérieur}$.
- Déclaration **mensuelle** ou **trimestrielle** selon le chiffre d'affaires.
`,
    exercices: md`
### Exercice 2 — Liquidation mensuelle de la TVA

Pour le mois de mars : ventes de marchandises 300 000 DH HT (TVA 20 %) ; achats de marchandises 150 000 DH HT (20 %) ; frais de transport 10 000 DH HT (14 %) ; achat d'un ordinateur 20 000 DH HT (20 %) ; crédit de TVA de février : 2 000 DH.

1. Calculez la TVA facturée et les TVA récupérables.
2. Calculez la TVA due.
3. Passez l'écriture de liquidation puis celle du paiement par banque.

<details><summary>Voir le corrigé</summary>

**1)** TVA facturée $= 60\,000$ ; récupérable sur charges $= 30\,000 + 1\,400 = 31\,400$ ; sur immobilisations $= 4\,000$.

**2)** $60\,000 - 31\,400 - 4\,000 - 2\,000 = 22\,600$ DH.

**3)**

| Compte | Débit | Crédit |
|---|--:|--:|
| 4455 État, TVA facturée | 60 000 | |
| 34552 État, TVA récupérable sur charges | | 31 400 |
| 34551 État, TVA récupérable sur immobilisations | | 4 000 |
| 3456 État, crédit de TVA | | 2 000 |
| 4456 État, TVA due | | 22 600 |
| 4456 État, TVA due | 22 600 | |
| 5141 Banques | | 22 600 |

</details>
`,
    qcm: [
      { q: "La TVA est supportée in fine par :", choix: ["L'entreprise", "Le consommateur final", "La banque", "Le fournisseur"], bonne: 1, explication: "L'entreprise n'est qu'un collecteur." },
      { q: "Un montant de 12 000 DH TTC à 20 % contient une TVA de :", choix: ["2 400", "2 000", "1 200", "10 000"], bonne: 1, explication: "12 000 / 6 = 2 000." },
      { q: "La TVA facturée aux clients s'enregistre au crédit du compte :", choix: ["34552", "4455", "4456", "3456"], bonne: 1, explication: "C'est une dette envers l'État." },
      { q: "La TVA payée sur l'achat d'un véhicule utilitaire va au compte :", choix: ["34551", "34552", "4455", "6111"], bonne: 0, explication: "TVA récupérable sur immobilisations." },
      { q: "Si la TVA récupérable dépasse la TVA facturée, l'entreprise a :", choix: ["Une TVA due", "Un crédit de TVA", "Une amende", "Un produit"], bonne: 1, explication: "Compte 3456, reportable." },
    ],
  },

  8: {
    titre: "La facturation « doit »",
    resume: md`
## L'essentiel — La facture de doit

- Calcul **en cascade** : brut → − rabais, remises, ristournes → **net commercial** → − escompte → **net financier** → + port → + emballages consignés → + TVA → **net à payer**.
- Chaque réduction se calcule sur le montant **précédent**.
- Les réductions commerciales **sur facture** ne sont pas comptabilisées séparément : on enregistre le **net commercial**.
- L'**escompte** est toujours comptabilisé à part : **6386** escomptes accordés (vendeur), **7386** escomptes obtenus (client).
- Port **facturé** : produit chez le vendeur (71276), charge chez le client (6142), soumis à TVA ; **franco** : charge du vendeur.
- Base de la TVA : net financier + port taxable.
`,
    exercices: md`
### Exercice 2 — Deux remises, un escompte et un port

Facture : marchandises brutes 50 000 DH ; remise de 10 % puis remise de 5 % ; escompte de 2 % ; port facturé 1 500 DH HT ; TVA 20 %.

1. Établissez la facture.
2. Passez l'écriture chez le client.

<details><summary>Voir le corrigé</summary>

**1)**

| Élément | Calcul | Montant |
|---|---|--:|
| Brut | | 50 000 |
| Remise 10 % | | −5 000 |
| Net | | 45 000 |
| Remise 5 % | $45\,000 \times 5\%$ | −2 250 |
| **Net commercial** | | **42 750** |
| Escompte 2 % | $42\,750 \times 2\%$ | −855 |
| **Net financier** | | **41 895** |
| Port | | +1 500 |
| Base TVA | | 43 395 |
| TVA 20 % | | +8 679 |
| **Net à payer** | | **52 074** |

**2)**

| Compte | Débit | Crédit |
|---|--:|--:|
| 6111 Achats de marchandises | 42 750 | |
| 6142 Transports | 1 500 | |
| 34552 État, TVA récupérable sur charges | 8 679 | |
| 7386 Escomptes obtenus | | 855 |
| 4411 Fournisseurs | | 52 074 |

</details>
`,
    qcm: [
      { q: "Les remises figurant sur la facture de doit sont :", choix: ["Comptabilisées au 6119", "Non comptabilisées séparément", "Comptabilisées au 7386", "Ajoutées au brut"], bonne: 1, explication: "On enregistre le net commercial." },
      { q: "Chez le vendeur, l'escompte accordé est :", choix: ["Un produit financier", "Une charge financière (6386)", "Une remise commerciale", "Une dette"], bonne: 1, explication: "Il relève du financement." },
      { q: "Brut 20 000, remises 10 % puis 5 % : le net commercial est :", choix: ["17 000", "17 100", "18 000", "19 000"], bonne: 1, explication: "20 000 × 0,9 × 0,95 = 17 100." },
      { q: "La TVA est calculée sur :", choix: ["Le montant brut", "Le net financier augmenté du port taxable", "Le net commercial seulement", "Le net à payer"], bonne: 1, explication: "Après escompte." },
      { q: "En « franco de port », le transport est supporté par :", choix: ["Le client", "Le vendeur", "La banque", "L'État"], bonne: 1, explication: "Aucune facturation au client." },
    ],
  },

  9: {
    titre: "La facture d'avoir et les emballages",
    resume: md`
## L'essentiel — Avoirs et emballages

- La **facture d'avoir** réduit la dette du client : retour de marchandises, réduction ou escompte **hors facture**. On passe les comptes **en sens inverse** de la facture de doit.
- Réduction commerciale hors facture : **7119** RRR accordés (vendeur), **6119** RRR obtenus (client), comptes soustractifs.
- Emballages **perdus** (vendus avec la marchandise), **récupérables** (immobilisations ou stocks), **consignés** (prêtés contre une consignation).
- **Consignation** : dette du vendeur (**4425**), créance du client (**3413**) — ce n'est pas une vente.
- Déconsignation à un prix inférieur : **boni** pour le vendeur (71278), **mali** pour le client (61317). Emballages gardés : **vente** soumise à TVA.
`,
    exercices: md`
### Exercice 2 — Ristourne de fin d'année et déconsignation

1. En fin d'année, un fournisseur accorde à son client une ristourne de 2 % sur un chiffre d'affaires annuel de 200 000 DH HT (TVA 20 %). Passez l'écriture de l'avoir chez le vendeur.
2. Le vendeur avait consigné 20 caisses à 50 DH (1 000 DH). Le client les rend toutes, reprises à 40 DH l'unité. Passez l'écriture chez le vendeur (TVA ignorée pour simplifier).

<details><summary>Voir le corrigé</summary>

**1)** Ristourne $= 4\,000$ DH HT ; TVA $= 800$ DH ; avoir $= 4\,800$ DH.

| Compte | Débit | Crédit |
|---|--:|--:|
| 7119 RRR accordés par l'entreprise | 4 000 | |
| 4455 État, TVA facturée | 800 | |
| 3421 Clients | | 4 800 |

**2)** Reprise $= 20 \times 40 = 800$ DH ; boni $= 1\,000 - 800 = 200$ DH.

| Compte | Débit | Crédit |
|---|--:|--:|
| 4425 Clients, dettes pour emballages consignés | 1 000 | |
| 3421 Clients | | 800 |
| 71278 Bonis sur reprises d'emballages consignés | | 200 |

</details>
`,
    qcm: [
      { q: "Une facture d'avoir :", choix: ["Augmente la dette du client", "Réduit la dette du client", "Constate une vente", "Crée un emballage"], bonne: 1, explication: "Retour, réduction ou escompte hors facture." },
      { q: "Un rabais accordé hors facture est enregistré chez le vendeur au compte :", choix: ["6119", "7119", "7386", "6386"], bonne: 1, explication: "RRR accordés, compte soustractif des ventes." },
      { q: "La consignation d'emballages constitue, chez le vendeur :", choix: ["Une vente", "Une dette envers le client", "Un produit financier", "Une charge"], bonne: 1, explication: "Compte 4425." },
      { q: "Emballages consignés 600, repris 450 : le vendeur réalise :", choix: ["Un mali de 150", "Un boni de 150", "Une vente de 600", "Rien"], bonne: 1, explication: "Il rembourse moins qu'il n'a reçu." },
      { q: "Si le client garde les emballages consignés, l'opération devient :", choix: ["Une vente d'emballages soumise à TVA", "Un boni", "Un avoir", "Une immobilisation du vendeur"], bonne: 0, explication: "Le client les achète." },
    ],
  },

  10: {
    titre: "Les règlements et les effets de commerce",
    resume: md`
## L'essentiel — Règlements et effets

- Moyens de règlement : espèces (5161), chèque et virement (5141), **effets de commerce** (3425 / 4415).
- **Lettre de change** : émise par le créancier (**tireur**) sur le débiteur (**tiré**) ; **billet à ordre** : émis par le débiteur (souscripteur).
- Création de l'effet : reclassement (3421 → 3425 chez le vendeur ; 4411 → 4415 chez le client), ni charge ni produit.
- **Escompte** : $\text{agio} = \text{escompte} + \text{commissions} + \text{TVA sur commissions}$ ; $\text{escompte} = V \times t \times n / 360$ ; net $= V - \text{agio}$ ; contrepartie **5520 Crédits d'escompte**.
- À l'échéance : si le tiré paie, on solde 5520 par 3425 ; en cas d'**impayé**, la banque débite l'entreprise (nominal + frais) qui se retourne contre son client.
`,
    exercices: md`
### Exercice 2 — Escompter une traite

Un client accepte une traite de 60 000 DH à 45 jours. L'entreprise la remet aussitôt à l'escompte : taux 12 %, commission 100 DH HT, TVA 10 % sur la commission.

1. Calculez l'agio et le net porté en compte.
2. Passez l'écriture d'acceptation, puis celle de l'escompte.
3. À l'échéance, le client paie. Passez l'écriture.

<details><summary>Voir le corrigé</summary>

**1)** Escompte $= 60\,000 \times 12\% \times 45 / 360 = 900$ DH ; TVA $= 10$ DH ; agio $= 900 + 100 + 10 = 1\,010$ DH ; net $= 58\,990$ DH.

**2)**

| Compte | Débit | Crédit |
|---|--:|--:|
| 3425 Clients, effets à recevoir | 60 000 | |
| 3421 Clients | | 60 000 |
| 5141 Banques | 58 990 | |
| 63115 Intérêts bancaires et sur opérations de financement | 900 | |
| 6147 Services bancaires | 100 | |
| 34552 État, TVA récupérable sur charges | 10 | |
| 5520 Crédits d'escompte | | 60 000 |

**3)**

| Compte | Débit | Crédit |
|---|--:|--:|
| 5520 Crédits d'escompte | 60 000 | |
| 3425 Clients, effets à recevoir | | 60 000 |

</details>
`,
    qcm: [
      { q: "Dans une lettre de change, le tireur est :", choix: ["Le débiteur", "Le créancier", "La banque", "L'endossataire"], bonne: 1, explication: "Il donne l'ordre au tiré de payer." },
      { q: "La création d'un effet à recevoir se traduit par :", choix: ["Un produit", "Un reclassement de la créance client", "Une charge", "Un encaissement"], bonne: 1, explication: "3425 débité, 3421 crédité." },
      { q: "Effet de 36 000 DH, taux 10 %, 30 jours : l'escompte vaut :", choix: ["300", "3 600", "30", "360"], bonne: 0, explication: "36 000 × 0,10 × 30/360 = 300." },
      { q: "Le compte 5520 Crédits d'escompte est un compte de :", choix: ["Trésorerie-actif", "Trésorerie-passif", "Charges", "Produits"], bonne: 1, explication: "L'entreprise reste engagée jusqu'à l'échéance." },
      { q: "Le billet à ordre est émis par :", choix: ["Le créancier", "Le débiteur", "La banque", "L'État"], bonne: 1, explication: "Il s'engage lui-même à payer." },
    ],
  },
};
