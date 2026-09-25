// Comptabilité approfondie (S5) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Les travaux d'inventaire : principes et chronologie",
    description: "Travaux d'inventaire selon le CGNC : principes comptables, chronologie, stocks, régularisations, écarts de conversion et incidence sur le résultat.",
    resume: md`
## L'essentiel — Les travaux d'inventaire

- Objectif : **image fidèle** ; inventaire obligatoire au moins une fois par exercice (loi 9-88).
- 7 principes du CGNC : continuité d'exploitation, permanence des méthodes, coût historique, **spécialisation des exercices**, **prudence**, clarté, importance significative.
- Chronologie : inventaire physique → balance avant inventaire → amortissements, provisions, stocks, régularisations, écarts de conversion, IS → balance après inventaire → états de synthèse (bilan, CPC, ESG, TF, ETIC) → déclaration et approbation.
- Stocks : D 6114 / C 3111 (SI) puis D 3111 / C 6114 (SF) ; hausse des stocks = hausse du résultat.
- Régularisations : charges à payer (4417, 4493), produits à recevoir (3427, 3493), **CCA** (3491), **PCA** (4491) ; extournes au 1ᵉʳ janvier.
- Devises : conversion au cours de clôture ; perte latente → 3701/3702 + **provision** (6393 / 4505) ; gain latent → 4701/4702, non constaté en résultat.
`,
    exercices: md`
### Exercice 2 — Régularisations

Au 31 décembre N, une entreprise relève : a) prime d'assurance de 12 000 DH payée le 1ᵉʳ octobre N pour un an ; b) intérêts de 3 000 DH sur un placement, courus en N mais encaissés en février N+1 ; c) facture de transport de décembre non reçue, 2 500 DH ; d) abonnements clients encaissés en décembre pour janvier N+1, 7 500 DH.

1. Passez les écritures de régularisation.
2. Calculez l'incidence sur le résultat.

<details><summary>Voir le corrigé</summary>

**1)** a) D 3491 / C 6134 Primes d'assurances : $12\,000 \times 9/12 = \mathbf{9\,000}$ ; b) D 3493 Intérêts courus et non échus à percevoir / C 7381 Intérêts et produits assimilés : **3 000** ; c) D 6142 Transports / C 4417 : **2 500** ; d) D 712.. (produit concerné) / C 4491 : **7 500**.

**2)** $+9\,000 + 3\,000 - 2\,500 - 7\,500 = \mathbf{+2\,000}$ DH.

</details>

### Exercice 3 — Dette en devises

Une entreprise doit 20 000 EUR à un fournisseur espagnol, enregistrés au cours de 10,80 DH. Au 31 décembre, l'euro vaut 11,05 DH.

1. Calculez l'écart et passez les écritures d'inventaire.
2. Que se passerait-il si l'euro valait 10,60 DH ?

<details><summary>Voir le corrigé</summary>

**1)** La dette augmente de $20\,000 \times (11{,}05 - 10{,}80) = \mathbf{5\,000}$ DH : perte latente. D 3702 Écarts de conversion – actif (augmentation des dettes) 5 000 / C 4411 Fournisseurs 5 000 ; D 6393 / C 4505 Provisions pour pertes de change 5 000.

**2)** La dette diminuerait de $20\,000 \times 0{,}20 = 4\,000$ DH : gain latent. D 4411 4 000 / C 4702 Écarts de conversion – passif (diminution des dettes) 4 000, **sans** produit au CPC (prudence).

</details>
`,
    qcm: [
      { q: "Le principe qui impose de rattacher les charges à l'exercice qu'elles concernent est :", choix: ["La prudence", "La spécialisation des exercices", "Le coût historique", "La clarté"], bonne: 1, explication: "D'où les régularisations de fin d'exercice." },
      { q: "Stock initial 50 000 DH, stock final 70 000 DH. L'incidence sur le résultat est :", choix: ["− 20 000", "+ 20 000", "+ 70 000", "0"], bonne: 1, explication: "Une hausse des stocks diminue les charges." },
      { q: "Un loyer payé en décembre pour janvier suivant donne lieu à :", choix: ["Une charge à payer", "Une charge constatée d'avance", "Un produit constaté d'avance", "Une provision"], bonne: 1, explication: "Compte 3491." },
      { q: "Une facture de décembre non reçue au 31 décembre se comptabilise au crédit de :", choix: ["3491", "4417 Fournisseurs – factures non parvenues", "4491", "3427"], bonne: 1, explication: "C'est une charge à payer." },
      { q: "Les intérêts courus d'un emprunt sont crédités au compte :", choix: ["4493", "3493", "4491", "5141"], bonne: 0, explication: "Intérêts courus et non échus à payer." },
      { q: "Une perte de change latente sur une créance est inscrite :", choix: ["En charge financière directement", "En écart de conversion – actif, avec une provision", "En écart de conversion – passif", "Nulle part"], bonne: 1, explication: "Par prudence, on provisionne la perte." },
      { q: "Un gain de change latent :", choix: ["Est un produit de l'exercice", "Reste en écart de conversion – passif, sans produit", "Est provisionné", "Augmente le capital"], bonne: 1, explication: "Les gains latents ne sont pas constatés." },
      { q: "Au 1er janvier suivant, les régularisations de charges et de produits sont :", choix: ["Conservées", "Extournées", "Doublées", "Supprimées sans écriture"], bonne: 1, explication: "Elles sont contre-passées." },
      { q: "Le principe interdisant de compenser un actif et une dette est :", choix: ["La prudence", "La clarté", "La permanence des méthodes", "La continuité d'exploitation"], bonne: 1, explication: "Pas de compensation entre postes." },
      { q: "Le document qui explique les méthodes et complète les autres états est :", choix: ["Le bilan", "L'ETIC", "Le CPC", "L'ESG"], bonne: 1, explication: "État des informations complémentaires." },
    ],
  },

  2: {
    titre: "Rappel : amortissements et provisions",
    description: "Amortissements linéaire et dégressif (coefficients 1,5, 2 et 3), amortissements dérogatoires, provisions pour dépréciation et pour risques selon le CGNC.",
    resume: md`
## L'essentiel — Amortissements et provisions

- Amortissement : dépréciation **irréversible** ; base = coût HT (frais accessoires compris) ; début à la mise en service, **prorata temporis**.
- **Linéaire** : base / durée ; écriture D 6193 / C 28...
- **Dégressif** : taux linéaire × coefficient (**1,5** pour 3-4 ans, **2** pour 5-6 ans, **3** au-delà), appliqué à la VNA ; **passage au linéaire** quand l'annuité dégressive ≤ linéaire sur la durée restante.
- **Dérogatoires** : fiscal > comptable → D 6594 / C 1351 ; inverse → D 1351 / C 7594 ; cumul nul en fin de plan.
- Provisions pour **dépréciation** (perte probable non définitive) : immobilisations (6194/29..), stocks et créances (6196/391.., 3942) ; créances : reclassement en 3424 et provision sur le **HT** ; ajustement et reprises (7196).
- Provisions pour **risques et charges** (passif probable) : D 6195 / C 1511 ou 4501.
`,
    exercices: md`
### Exercice 2 — Dégressif sur 4 ans

Un véhicule utilitaire de 120 000 DH est acquis le 1ᵉʳ avril N, durée 4 ans, amortissement dégressif.

1. Calculez le taux dégressif.
2. Calculez les annuités de N et N+1.

<details><summary>Voir le corrigé</summary>

**1)** Taux linéaire 25 % ; coefficient 1,5 : taux dégressif **37,5 %**.

**2)** N (9 mois) : $120\,000 \times 37{,}5\,\% \times 9/12 = \mathbf{33\,750}$ DH ; VNA 86 250. N+1 : $86\,250 \times 37{,}5\,\% \approx \mathbf{32\,344}$ DH (contre un linéaire sur la durée restante de $86\,250 / 3{,}25 \approx 26\,538$ DH : on reste en dégressif).

</details>

### Exercice 3 — Ajustement des provisions

Au 31/12/N−1, une créance douteuse de 24 000 DH TTC (TVA 20 %) était provisionnée à 30 % du HT. Au 31/12/N, le risque est estimé à 60 %. Au cours de N+1, le client est déclaré en liquidation : la créance est irrécouvrable.

1. Calculez la provision de N−1 et l'ajustement de N.
2. Passez les écritures de N+1.

<details><summary>Voir le corrigé</summary>

**1)** HT : 20 000 DH. Provision N−1 : **6 000** DH. Besoin N : 12 000 DH : **dotation complémentaire de 6 000** DH (D 6196 / C 3942).

**2)** Perte : D 6182 Pertes sur créances irrécouvrables 20 000 ; D 4455 État – TVA facturée 4 000 / C 3424 24 000. Reprise de la provision : D 3942 12 000 / C 7196 12 000. Incidence nette sur le résultat de N+1 : $-20\,000 + 12\,000 = -8\,000$ DH.

</details>
`,
    qcm: [
      { q: "Le coefficient dégressif pour une durée de 5 ans est :", choix: ["1,5", "2", "3", "2,5"], bonne: 1, explication: "5 ou 6 ans : coefficient 2." },
      { q: "Durée 10 ans en dégressif : le taux est :", choix: ["10 %", "20 %", "30 %", "15 %"], bonne: 2, explication: "10 % × 3." },
      { q: "En dégressif, le taux s'applique :", choix: ["Au coût d'origine chaque année", "À la valeur nette de début d'exercice", "Au prix de revente", "Au chiffre d'affaires"], bonne: 1, explication: "D'où des annuités décroissantes." },
      { q: "On passe au linéaire en dégressif lorsque :", choix: ["La moitié de la durée est écoulée", "L'annuité dégressive devient inférieure ou égale au linéaire sur la durée restante", "La VNA est nulle", "Le bien est cédé"], bonne: 1, explication: "Pour amortir entièrement le bien." },
      { q: "L'excédent de l'amortissement fiscal sur l'amortissement comptable est crédité au compte :", choix: ["28..", "1351", "6193", "7594"], bonne: 1, explication: "Provisions pour amortissements dérogatoires." },
      { q: "La provision sur une créance douteuse se calcule sur :", choix: ["Le montant TTC", "Le montant HT", "La TVA seule", "Le chiffre d'affaires"], bonne: 1, explication: "La TVA est récupérable en cas de perte." },
      { q: "Le reclassement d'une créance douteuse se fait au débit de :", choix: ["3421", "3424", "3942", "6182"], bonne: 1, explication: "Clients douteux ou litigieux." },
      { q: "Un terrain qui perd de la valeur fait l'objet :", choix: ["D'un amortissement", "D'une provision pour dépréciation", "D'une charge à payer", "D'aucune écriture"], bonne: 1, explication: "Il n'est pas amortissable." },
      { q: "Une provision pour litige est :", choix: ["Une provision pour dépréciation", "Une provision pour risques et charges", "Un amortissement", "Une réserve"], bonne: 1, explication: "Elle constate un passif probable." },
      { q: "Machine de 60 000 DH, 5 ans, linéaire, acquise le 1er octobre. Dotation de la première année :", choix: ["12 000", "3 000", "9 000", "6 000"], bonne: 1, explication: "60 000 / 5 × 3/12." },
    ],
  },

  3: {
    titre: "Rappel : cessions d'immobilisations et régularisations",
    description: "Cession d'immobilisations selon le CGNC : dotation complémentaire, sortie d'actif, VNA, prix de cession, dérogatoires, mise au rebut et extournes.",
    resume: md`
## L'essentiel — Cessions et régularisations

- Le CGNC sépare la **sortie** (VNA en charge non courante, 6513) et le **prix** (produit non courant, 7513) ; résultat de cession = prix − VNA.
- Étapes : **dotation complémentaire** jusqu'à la date de cession → sortie (D 28.. et D 6513 / C 23..) → prix (D 3481 ou 5141 / C 7513) → encaissement.
- Reprise des **amortissements dérogatoires** du bien (D 1351 / C 7594) et des provisions liées ; régularisation éventuelle de TVA si cession avant cinq ans.
- **Mise au rebut** : sortie sans prix ; **sinistre** : sortie + indemnité d'assurance en produit non courant.
- Régularisations (charges à payer, produits à recevoir, CCA, PCA) **extournées** au 1ᵉʳ janvier.
`,
    exercices: md`
### Exercice 2 — Cession d'un bien totalement amorti

Un ordinateur acquis 24 000 DH, entièrement amorti, est vendu 3 000 DH au comptant.

1. Passez les écritures.
2. Quel est le résultat de cession ?

<details><summary>Voir le corrigé</summary>

**1)** Sortie : D 28355 Amortissements du matériel informatique 24 000 / C 2355 Matériel informatique 24 000 (VNA nulle, pas de 6513). Prix : D 5141 3 000 / C 7513 3 000.

**2)** Plus-value de **3 000 DH** (prix − VNA nulle).

</details>

### Exercice 3 — Cession avec moins-value

Une machine acquise le 1ᵉʳ janvier N−3 pour 150 000 DH (linéaire, 10 ans) est cédée le 30 juin N pour 80 000 DH.

1. Calculez la VNA à la date de cession.
2. Déterminez le résultat de cession et passez l'écriture de sortie.

<details><summary>Voir le corrigé</summary>

**1)** Annuité : 15 000 DH. Cumul au 30/6/N : $3 \times 15\,000 + 7\,500 = 52\,500$ DH ; VNA $= 150\,000 - 52\,500 = \mathbf{97\,500}$ DH.

**2)** Moins-value : $80\,000 - 97\,500 = \mathbf{-17\,500}$ DH. Écritures : D 6193 / C 28332 7 500 (dotation complémentaire) ; D 28332 52 500 et D 6513 97 500 / C 2332 150 000 ; D 3481 (ou 5141) / C 7513 80 000.

</details>
`,
    qcm: [
      { q: "Selon le CGNC, la VNA d'une immobilisation corporelle cédée est débitée au compte :", choix: ["7513", "6513", "2340", "3481"], bonne: 1, explication: "Charge non courante." },
      { q: "Le prix de cession d'une immobilisation corporelle est crédité au compte :", choix: ["7111", "7513", "6513", "7594"], bonne: 1, explication: "Produit non courant." },
      { q: "Avant de sortir le bien, on doit :", choix: ["Annuler tous les amortissements", "Passer la dotation complémentaire jusqu'à la date de cession", "Réévaluer le bien", "Constater une provision"], bonne: 1, explication: "Prorata temporis de l'exercice de cession." },
      { q: "Valeur d'origine 100 000, amortissements cumulés 70 000, prix 25 000. Résultat de cession :", choix: ["+ 25 000", "− 5 000", "+ 5 000", "− 75 000"], bonne: 1, explication: "25 000 − 30 000." },
      { q: "Le prix non encore encaissé d'une cession est débité au compte :", choix: ["3421", "3481 Créances sur cessions d'immobilisations", "4411", "5141"], bonne: 1, explication: "Il ne s'agit pas d'un client ordinaire." },
      { q: "Lors de la cession, le solde des dérogatoires du bien est :", choix: ["Conservé", "Repris (D 1351 / C 7594)", "Transféré au capital", "Viré en 6513"], bonne: 1, explication: "Le décalage fiscal prend fin." },
      { q: "Pour un bien totalement amorti vendu 5 000 DH, la plus-value est :", choix: ["0", "5 000", "− 5 000", "Égale au coût"], bonne: 1, explication: "La VNA est nulle." },
      { q: "Une mise au rebut se traduit par :", choix: ["Un produit de cession", "Une charge égale à la VNA", "Une provision", "Une augmentation du capital"], bonne: 1, explication: "Sortie sans prix." },
      { q: "Au 1er janvier, une charge à payer du 31 décembre est :", choix: ["Payée", "Extournée", "Provisionnée", "Amortie"], bonne: 1, explication: "Pour enregistrer normalement la facture réelle." },
      { q: "Le résultat de cession figure au CPC dans :", choix: ["Le résultat d'exploitation", "Le résultat non courant", "Le résultat financier", "Les capitaux propres"], bonne: 1, explication: "Comptes 651 et 751." },
    ],
  },

  4: {
    titre: "Les immobilisations : opérations complexes",
    description: "Immobilisations complexes : coût d'entrée, acquisition en devises, production immobilisée, immobilisations en cours, échange, non-valeurs et réévaluation.",
    resume: md`
## L'essentiel — Immobilisations complexes

- **Coût d'acquisition** = prix net + frais accessoires (transport, douane non récupérable, installation) ; TVA récupérable exclue (34551).
- **Devises** : cours du jour de l'opération ; écart au paiement en **6331 / 7331**, sans modifier le coût.
- **Avances** et **immobilisations en cours** (238, 239) : non amorties ; transfert au compte définitif à l'achèvement.
- **Production immobilisée** : coût de production (matières, charges directes, quote-part des charges indirectes de production) ; D 23.. ou 239 / C **7223**.
- Dépense ultérieure immobilisée si elle accroît durée de vie, capacité ou performance ; sinon charge (6133).
- **Échange** = cession de l'ancien bien (6513 / 7513) + acquisition du nouveau ; soulte.
- Incorporelles (2210, 2220, 2230) ; **non-valeurs** (2111, 2128, 2130) amorties en 5 ans au plus ; **écart de réévaluation** (1130).
`,
    exercices: md`
### Exercice 2 — Coût d'entrée

Une entreprise achète un matériel : prix catalogue 400 000 DH HT, remise 5 %, transport 12 000 DH, installation 8 000 DH, formation du personnel à son utilisation 6 000 DH, TVA 20 %.

1. Calculez le coût d'entrée.
2. Comment traiter la formation et la TVA ?

<details><summary>Voir le corrigé</summary>

**1)** Prix net $400\,000 \times 0{,}95 = 380\,000$ ; coût $= 380\,000 + 12\,000 + 8\,000 = \mathbf{400\,000}$ DH.

**2)** La **formation** du personnel n'est pas nécessaire à la mise en état du bien : c'est une **charge** de l'exercice. La **TVA** récupérable est inscrite en 34551 État – TVA récupérable sur immobilisations.

</details>

### Exercice 3 — Immobiliser ou non ?

Classez en immobilisation ou en charge : 1) remplacement du moteur d'un camion, qui prolonge sa durée de vie de trois ans ; 2) vidange et changement des pneus ; 3) agrandissement d'un entrepôt ; 4) peinture annuelle des bureaux ; 5) achat d'un logiciel de gestion utilisé plusieurs années.

<details><summary>Voir le corrigé</summary>

- **Immobilisations** : 1 (durée de vie prolongée), 3 (capacité accrue), 5 (logiciel, immobilisation incorporelle).
- **Charges** : 2 et 4 (entretien courant, compte 6133).

</details>
`,
    qcm: [
      { q: "Le coût d'acquisition d'une immobilisation comprend :", choix: ["La TVA récupérable", "Les frais de transport et d'installation", "Les pertes de change", "Les frais de formation du personnel"], bonne: 1, explication: "Frais nécessaires à la mise en état d'utilisation." },
      { q: "Une machine achetée en devises est enregistrée :", choix: ["Au cours du jour du paiement", "Au cours du jour de l'opération", "Au cours de clôture", "Au cours moyen de l'année"], bonne: 1, explication: "Ce coût n'est plus modifié ensuite." },
      { q: "La perte de change lors du paiement d'une immobilisation est enregistrée :", choix: ["Dans le coût du bien", "En 6331 Pertes de change", "En 6513", "En écart de réévaluation"], bonne: 1, explication: "Charge financière." },
      { q: "Une immobilisation produite par l'entreprise pour elle-même est créditée au compte :", choix: ["7111", "7223", "7513", "7131"], bonne: 1, explication: "Immobilisations corporelles produites." },
      { q: "Les immobilisations en cours :", choix: ["Sont amorties", "Ne sont pas amorties", "Sont des charges", "Sont des stocks"], bonne: 1, explication: "Le bien n'est pas encore en service." },
      { q: "Le remplacement d'un moteur qui prolonge la durée de vie d'un engin est :", choix: ["Une charge d'entretien", "Une immobilisation", "Une provision", "Un stock"], bonne: 1, explication: "Il accroît la durée d'utilisation." },
      { q: "Dans un échange, l'ancien bien est traité comme :", choix: ["Une mise au rebut", "Une cession", "Un apport", "Une réévaluation"], bonne: 1, explication: "Sortie de l'actif et valeur de reprise." },
      { q: "Les frais de constitution sont des :", choix: ["Immobilisations corporelles", "Immobilisations en non-valeurs", "Charges financières", "Stocks"], bonne: 1, explication: "Compte 2111, amortis en 5 ans au plus." },
      { q: "L'écart de réévaluation figure :", choix: ["En produit", "En capitaux propres", "En dettes", "En charges"], bonne: 1, explication: "Compte 1130, non distribuable." },
      { q: "Le coût de production d'une immobilisation exclut :", choix: ["Les matières consommées", "La main-d'œuvre directe", "Les frais de commercialisation", "Les charges indirectes de production"], bonne: 2, explication: "Seuls les coûts de production sont retenus." },
    ],
  },

  5: {
    titre: "Le crédit-bail (leasing)",
    description: "Crédit-bail chez le preneur selon le CGNC : redevances, dépôt de garantie, levée d'option, ETIC et retraitement en immobilisation financée par emprunt.",
    resume: md`
## L'essentiel — Le crédit-bail

- Bailleur propriétaire ; preneur locataire avec **option d'achat** (valeur résiduelle) en fin de contrat.
- **CGNC** (approche juridique) : bien **hors bilan** du preneur ; redevances en charges (**6132**, TVA en 34552) ; dépôt de garantie en **2486** ; régularisation des redevances à cheval sur deux exercices (3491).
- **Levée d'option** : D 23.. (prix de levée) et 34551 / C 5141 (ou 2486) ; amortissement sur la durée résiduelle.
- **ETIC** : tableau des biens en crédit-bail (redevances payées, restant à payer, prix résiduel) ; engagement hors bilan.
- **Retraitement** (analyse financière, consolidation, IFRS 16) : bien à l'actif et amorti, dette financière ; redevance = intérêts (capital × taux implicite) + remboursement ; EBE en hausse, charges financières apparentes.
`,
    exercices: md`
### Exercice 2 — Redevance à cheval sur deux exercices

Le 1ᵉʳ octobre N, une entreprise paie une redevance trimestrielle d'avance de 45 000 DH HT couvrant octobre à décembre ; le 1ᵉʳ décembre N, elle paie une redevance semestrielle d'avance d'un autre contrat de 60 000 DH HT couvrant décembre N à mai N+1.

Quelles régularisations passer au 31 décembre N ?

<details><summary>Voir le corrigé</summary>

La première redevance concerne entièrement N : **aucune** régularisation. La seconde couvre 1 mois de N et 5 mois de N+1 : charge constatée d'avance de $60\,000 \times 5/6 = \mathbf{50\,000}$ DH : D 3491 / C 6132 50 000, extournée au 1ᵉʳ janvier N+1.

</details>

### Exercice 3 — Crédit-bail ou emprunt ?

Un matériel de 300 000 DH peut être financé : a) par emprunt au taux de 8 % ; b) par crédit-bail sur 3 ans, avec 3 redevances annuelles de fin d'année de 110 000 DH et une option d'achat de 15 000 DH. En négligeant la fiscalité, comparez la valeur actuelle au taux de 8 % des décaissements du crédit-bail avec le coût de l'achat.

<details><summary>Voir le corrigé</summary>

Valeur actuelle du crédit-bail : $110\,000 \times \frac{1 - 1{,}08^{-3}}{0{,}08} + 15\,000 \times 1{,}08^{-3} \approx 110\,000 \times 2{,}5771 + 15\,000 \times 0{,}7938 \approx 283\,481 + 11\,907 = \mathbf{295\,388}$ DH, inférieure aux 300 000 DH de l'achat financé à 8 % : le crédit-bail est ici légèrement **moins coûteux** (son taux implicite est inférieur à 8 %). L'analyse complète doit intégrer les économies d'impôt (redevances déductibles d'un côté, amortissements et intérêts de l'autre).

</details>
`,
    qcm: [
      { q: "Selon le CGNC, pendant le contrat de crédit-bail, le bien figure :", choix: ["À l'actif du preneur", "Hors du bilan du preneur", "Au passif du preneur", "En stock"], bonne: 1, explication: "Le preneur n'est pas propriétaire." },
      { q: "Les redevances de crédit-bail sont débitées au compte :", choix: ["2332", "6132", "6311", "1481"], bonne: 1, explication: "Charge d'exploitation." },
      { q: "Le dépôt de garantie versé au bailleur est débité au compte :", choix: ["2486 Dépôts et cautionnements versés", "3491", "6132", "4481"], bonne: 0, explication: "Immobilisation financière." },
      { q: "À la levée d'option, le bien est inscrit à l'actif pour :", choix: ["Sa valeur d'origine", "Le prix de levée", "Le total des redevances", "Zéro"], bonne: 1, explication: "C'est son coût d'acquisition pour le preneur." },
      { q: "Pendant le contrat, le bien est amorti par :", choix: ["Le preneur", "Le bailleur", "Les deux", "Personne"], bonne: 1, explication: "Le bailleur en est propriétaire." },
      { q: "Les redevances restant à payer figurent :", choix: ["Au passif du bilan", "Dans l'ETIC, en engagements hors bilan", "En charges de l'exercice", "Nulle part"], bonne: 1, explication: "Tableau des biens en crédit-bail." },
      { q: "Dans le retraitement, chaque redevance est décomposée en :", choix: ["TVA et HT", "Intérêts et remboursement du capital", "Charges fixes et variables", "Amortissement et provision"], bonne: 1, explication: "Comme une annuité d'emprunt." },
      { q: "Le retraitement du crédit-bail fait augmenter :", choix: ["Les charges externes", "L'excédent brut d'exploitation", "Les ventes", "Les stocks"], bonne: 1, explication: "La redevance disparaît des charges d'exploitation." },
      { q: "La norme internationale qui retient l'approche économique des locations est :", choix: ["IAS 2", "IFRS 16", "IAS 7", "IFRS 9"], bonne: 1, explication: "Le preneur inscrit un droit d'utilisation et une dette." },
      { q: "La TVA sur le prix de levée d'option est débitée au compte :", choix: ["34552", "34551", "4455", "6132"], bonne: 1, explication: "TVA récupérable sur immobilisations." },
    ],
  },

  6: {
    titre: "Les titres et valeurs mobilières",
    description: "Titres selon le CGNC : participation, titres immobilisés et TVP, acquisition, revenus, cession au CMUP, évaluation à l'inventaire et provisions.",
    resume: md`
## L'essentiel — Les titres

- Classement selon l'intention : **titres de participation** (2510, détention durable utile), autres titres immobilisés (258), **TVP** (3500, placement à court terme).
- Coût d'entrée = prix d'achat ; frais d'acquisition en charges (6147).
- Revenus : 7321 (participations), 7384 (TVP), 7381 (intérêts) ; intérêts courus en 3493.
- **CMUP** = coût total / nombre de titres ; cession de TVP : résultat **net** en **7385 / 6385** (financier) ; cession de participations : 6514 / 7514 (non courant).
- Inventaire : TVP cotés au **cours moyen du dernier mois** ; participations à la **valeur d'usage** ; provisions ligne par ligne : TVP 6394 / 3950 (reprise 7394), participations 6392 / 2951 (reprise 7392) ; plus-values latentes non constatées.
`,
    exercices: md`
### Exercice 2 — Cession avec moins-value

Une entreprise détient 400 obligations cotées (TVP) acquises à 1 020 DH et cède 150 d'entre elles à 990 DH.

1. Passez l'écriture de cession.
2. Au 31 décembre, le cours moyen de décembre est de 1 000 DH. Quelle provision constituer ?

<details><summary>Voir le corrigé</summary>

**1)** Prix $150 \times 990 = 148\,500$ ; coût $150 \times 1\,020 = 153\,000$ ; moins-value 4 500 DH : D 5141 148 500 ; D 6385 4 500 / C 3504 Obligations 153 000.

**2)** 250 obligations : $250 \times (1\,020 - 1\,000) = \mathbf{5\,000}$ DH : D 6394 / C 3950 5 000.

</details>

### Exercice 3 — Évaluation ligne par ligne

Au 31 décembre, un portefeuille de TVP comprend : 200 actions A (coût 300 DH, cours moyen de décembre 340 DH) et 500 actions B (coût 80 DH, cours 70 DH). Aucune provision n'existait.

1. Calculez les plus et moins-values latentes.
2. Quelle écriture passer ? Pourquoi ne pas compenser ?

<details><summary>Voir le corrigé</summary>

**1)** A : plus-value latente $200 \times 40 = 8\,000$ DH ; B : moins-value latente $500 \times 10 = 5\,000$ DH.

**2)** D 6394 / C 3950 **5 000** DH pour B uniquement. Le principe de **prudence** et l'évaluation **ligne par ligne** interdisent de compenser la moins-value de B par la plus-value latente de A, qui n'est pas réalisée.

</details>
`,
    qcm: [
      { q: "Des titres acquis pour placer une trésorerie disponible sont des :", choix: ["Titres de participation", "Titres et valeurs de placement", "Immobilisations corporelles", "Stocks"], bonne: 1, explication: "Compte 3500." },
      { q: "Les frais d'acquisition de titres sont, dans ce cours, enregistrés :", choix: ["Dans le coût des titres", "En charges (6147)", "En capitaux propres", "En produits"], bonne: 1, explication: "Services bancaires." },
      { q: "Achat de 100 titres à 50 DH puis de 300 titres à 70 DH. Le CMUP est :", choix: ["60 DH", "65 DH", "70 DH", "55 DH"], bonne: 1, explication: "(5 000 + 21 000) / 400." },
      { q: "La plus-value sur cession de TVP est créditée au compte :", choix: ["7513", "7385", "7514", "7321"], bonne: 1, explication: "Produits nets sur cessions de TVP." },
      { q: "La cession de titres de participation s'enregistre en :", choix: ["Résultat financier", "Résultat non courant (6514 / 7514)", "Résultat d'exploitation", "Capitaux propres"], bonne: 1, explication: "Comme une immobilisation." },
      { q: "Les TVP cotés sont évalués à l'inventaire au :", choix: ["Cours du 31 décembre uniquement", "Cours moyen du dernier mois", "Coût d'acquisition toujours", "Cours le plus haut de l'année"], bonne: 1, explication: "Règle du CGNC." },
      { q: "Une plus-value latente sur des titres :", choix: ["Est comptabilisée en produit", "N'est pas comptabilisée", "Réduit les provisions sur d'autres titres", "Augmente le capital"], bonne: 1, explication: "Prudence." },
      { q: "La provision pour dépréciation des TVP est créditée au compte :", choix: ["2951", "3950", "3942", "1351"], bonne: 1, explication: "Dotation en 6394." },
      { q: "Les dividendes reçus sur des titres de participation sont crédités au compte :", choix: ["7384", "7321", "7381", "7513"], bonne: 1, explication: "Produits des titres de participation." },
      { q: "Les titres de participation sont évalués à l'inventaire selon :", choix: ["Leur valeur nominale", "Leur valeur d'usage", "Leur prix de revente immédiat", "Le cours du premier jour de l'exercice"], bonne: 1, explication: "Actif net, rentabilité, perspectives, utilité." },
    ],
  },

  7: {
    titre: "Les contrats à long terme",
    description: "Contrats à long terme : méthode de l'achèvement, méthode de l'avancement, pourcentage d'avancement, en-cours, factures à établir et pertes à terminaison.",
    resume: md`
## L'essentiel — Les contrats à long terme

- Contrat dont l'exécution couvre **au moins deux exercices** (BTP, ingénierie, logiciels sur mesure).
- **Achèvement** : CA et marge à la livraison ; en-cours au **coût** (D 313 / C 7131) ; acomptes en 4421 ; résultat concentré en fin de contrat.
- **Avancement** : avancement = coûts engagés **cumulés** / coût total prévu ; CA cumulé = prix × avancement ; marge cumulée = (prix − coût total prévu) × avancement ; montants de l'exercice par différence ; CA non facturé en 3427.
- **Perte à terminaison** : constatée **immédiatement et en totalité** (provision pour pertes sur contrats, D 6195), quelle que soit la méthode.
- Les deux méthodes sont admises ; avancement préférable si les estimations sont fiables ; permanence des méthodes et information dans l'ETIC.
`,
    exercices: md`
### Exercice 2 — Calcul d'avancement

Un contrat de 6 000 000 DH a un coût total prévu de 5 000 000 DH. Coûts engagés cumulés : 1 500 000 DH fin N ; 4 000 000 DH fin N+1 (coût total prévu inchangé).

Calculez le CA et la marge de N et de N+1 selon l'avancement.

<details><summary>Voir le corrigé</summary>

N : avancement 30 % ; CA **1 800 000** ; marge $1\,000\,000 \times 30\,\% = $ **300 000**.
N+1 : avancement 80 % ; CA cumulé 4 800 000, CA de l'exercice **3 000 000** ; marge cumulée 800 000, marge de l'exercice **500 000**.

</details>

### Exercice 3 — Achèvement et perte

Un contrat de 3 000 000 DH, exécuté sur deux exercices selon la méthode de l'achèvement, a engagé 1 800 000 DH de coûts en N ; à la clôture, le coût total est estimé à 3 300 000 DH.

1. Quel est l'en-cours au 31/12/N ?
2. Quelle écriture complémentaire s'impose ?

<details><summary>Voir le corrigé</summary>

**1)** En-cours au coût : **1 800 000 DH** (D 313 / C 7131).

**2)** Perte à terminaison prévisible : $3\,000\,000 - 3\,300\,000 = -300\,000$ DH : provision de **300 000 DH** dès N (D 6195 / C provision pour pertes sur contrats), sans attendre l'achèvement.

</details>
`,
    qcm: [
      { q: "Un contrat à long terme s'exécute sur :", choix: ["Moins d'un mois", "Au moins deux exercices", "Un seul exercice", "Dix ans minimum"], bonne: 1, explication: "D'où le problème de répartition du résultat." },
      { q: "Selon la méthode de l'achèvement, la marge est constatée :", choix: ["Chaque année", "À la fin du contrat", "À la signature", "Jamais"], bonne: 1, explication: "Les en-cours sont au coût." },
      { q: "Selon la méthode de l'achèvement, les travaux en cours sont évalués :", choix: ["Au prix de vente", "Au coût de production", "À zéro", "À la valeur de marché"], bonne: 1, explication: "Le résultat intermédiaire est neutre." },
      { q: "Coûts engagés cumulés 2 MDH, coût total prévu 8 MDH. L'avancement est de :", choix: ["20 %", "25 %", "40 %", "80 %"], bonne: 1, explication: "2 / 8." },
      { q: "Prix 10 MDH, coût prévu 8 MDH, avancement 50 %. Marge cumulée :", choix: ["5 MDH", "1 MDH", "2 MDH", "4 MDH"], bonne: 1, explication: "(10 − 8) × 50 %." },
      { q: "Une perte à terminaison est constatée :", choix: ["À la fin du contrat", "Immédiatement et en totalité", "Au prorata de l'avancement seulement", "Jamais"], bonne: 1, explication: "Principe de prudence." },
      { q: "Le CA reconnu à l'avancement mais non facturé est inscrit en :", choix: ["4421", "3427 Clients – factures à établir", "4491", "313"], bonne: 1, explication: "Produit à recevoir." },
      { q: "Les acomptes reçus du client sont inscrits :", choix: ["En produit", "Au passif (4421)", "En stock", "En capital"], bonne: 1, explication: "Avances et acomptes reçus sur commandes." },
      { q: "La méthode retenue par les normes internationales est :", choix: ["L'achèvement", "L'avancement", "L'encaissement", "La facturation"], bonne: 1, explication: "Elle reflète mieux la performance." },
      { q: "La marge de l'exercice selon l'avancement se calcule :", choix: ["Directement sur les coûts de l'exercice", "Par différence entre marges cumulées", "Sur la facturation", "Sur les acomptes"], bonne: 1, explication: "Cumul à la clôture − cumul antérieur." },
    ],
  },

  8: {
    titre: "Les subventions",
    description: "Subventions selon le CGNC : subventions d'investissement, d'exploitation et d'équilibre, reprise au rythme des amortissements, cession du bien et présentation.",
    resume: md`
## L'essentiel — Les subventions

- **Investissement** (financer des immobilisations) : capitaux propres assimilés (**1311**), reprise progressive (**1319 / 7577**).
- **Exploitation** (compenser des produits insuffisants ou des charges) : produit d'exploitation (**716**) ; **équilibre** (compenser une perte) : produit non courant (**756**).
- Octroi : D 4458 / C 1311 ; encaissement : D 5141 / C 4458.
- Reprise d'un bien amortissable : subvention × dotation de l'exercice / coût du bien ; bien non amortissable : sur la durée d'**inaliénabilité** (à défaut, en général 10 ans).
- Cession du bien : reprise du **solde** en totalité ; remboursement : annulation de la subvention.
- Bilan : subvention **nette** (1311 − 1319) ; information dans l'ETIC ; fiscalité étalée selon les règles du CGI.
`,
    exercices: md`
### Exercice 2 — Reprise avec amortissement dégressif

Une subvention de 90 000 DH finance une machine de 300 000 DH acquise le 1ᵉʳ janvier N, amortie en dégressif sur 5 ans (taux 40 %).

Calculez les reprises de N et N+1.

<details><summary>Voir le corrigé</summary>

Dotations : N : $300\,000 \times 40\,\% = 120\,000$ ; N+1 : $180\,000 \times 40\,\% = 72\,000$.

Reprises : N : $90\,000 \times 120\,000 / 300\,000 = \mathbf{36\,000}$ DH ; N+1 : $90\,000 \times 72\,000 / 300\,000 = \mathbf{21\,600}$ DH. La reprise suit le rythme dégressif de l'amortissement (ratio constant de 30 %).

</details>

### Exercice 3 — Qualifier les aides

Qualifiez : 1) une aide de l'État compensant le prix réglementé d'un produit de base vendu par l'entreprise ; 2) une prime pour la construction d'une usine ; 3) une aide versée par la société mère pour combler la perte de sa filiale ; 4) une aide à la formation du personnel de l'année.

<details><summary>Voir le corrigé</summary>

1. **Exploitation** (compense l'insuffisance d'un prix) : 716.
2. **Investissement** : 1311, reprise au rythme de l'amortissement de l'usine.
3. **Équilibre** : 756, produit non courant.
4. **Exploitation** (compense des charges de l'exercice) : 716.

</details>
`,
    qcm: [
      { q: "Une subvention finançant l'achat d'une machine est :", choix: ["Une subvention d'exploitation", "Une subvention d'investissement", "Une subvention d'équilibre", "Un produit financier"], bonne: 1, explication: "Compte 1311." },
      { q: "La subvention d'investissement est inscrite initialement :", choix: ["En produit", "Dans les capitaux propres assimilés", "En dettes", "En stocks"], bonne: 1, explication: "Puis rapportée progressivement au résultat." },
      { q: "La reprise de la subvention d'investissement est créditée au compte :", choix: ["7161", "7577", "1311", "7513"], bonne: 1, explication: "Reprises sur subventions d'investissement." },
      { q: "Subvention 200 000 DH, bien de 800 000 DH amorti 160 000 DH par an. Reprise annuelle :", choix: ["20 000", "40 000", "160 000", "50 000"], bonne: 1, explication: "200 000 × 160 000 / 800 000." },
      { q: "Pour un terrain, la subvention est reprise :", choix: ["Jamais", "Sur la durée d'inaliénabilité (à défaut en général 10 ans)", "Immédiatement", "Au rythme de l'amortissement du terrain"], bonne: 1, explication: "Le terrain n'est pas amortissable." },
      { q: "Lors de la cession du bien subventionné, le solde de la subvention est :", choix: ["Conservé au bilan", "Repris en totalité au résultat", "Remboursé à l'État", "Transféré au capital"], bonne: 1, explication: "Le bien ne génère plus de charges." },
      { q: "Une aide compensant un prix de vente réglementé est une subvention :", choix: ["D'investissement", "D'exploitation", "D'équilibre", "De capital"], bonne: 1, explication: "Compte 716." },
      { q: "Une subvention destinée à combler une perte est :", choix: ["D'exploitation", "D'équilibre (non courante)", "D'investissement", "Un apport"], bonne: 1, explication: "Compte 756." },
      { q: "Au bilan, la subvention d'investissement figure pour :", choix: ["Son montant brut", "Son montant net des reprises (1311 − 1319)", "Zéro", "Le double"], bonne: 1, explication: "Capitaux propres assimilés." },
      { q: "Subvention 150 000, reprises cumulées 90 000 à la cession du bien. Montant à reprendre :", choix: ["150 000", "60 000", "90 000", "0"], bonne: 1, explication: "Le solde non repris." },
    ],
  },

  9: {
    titre: "Engagements hors bilan et événements postérieurs à la clôture",
    description: "Engagements hors bilan donnés et reçus, ETIC, escompte des effets selon le CGNC, événements postérieurs avec ou sans ajustement et continuité d'exploitation.",
    resume: md`
## L'essentiel — Engagements hors bilan et événements postérieurs

- **Engagement hors bilan** : droit ou obligation dépendant d'événements futurs ; **donnés** (cautions, avals, hypothèques, nantissements, commandes fermes, garanties de passif, retraites) ou **reçus** (cautions reçues, lignes de crédit).
- Information dans l'**ETIC** (tableau des engagements financiers, sûretés réelles, biens en crédit-bail) ; engagement devenu probable → **provision**.
- **Escompte** (CGNC) : l'effet reste en 3425 ; crédit d'escompte au passif (**5520**) ; agios en 6311 et 6147.
- **Événements postérieurs** (entre clôture et arrêté des comptes) : situation **existant à la clôture** → **ajustement** des comptes ; situation **née après** → **information** dans l'ETIC si significative.
- Vigilance sur la **continuité d'exploitation** ; dividendes décidés après la clôture non inscrits en dette au 31 décembre.
`,
    exercices: md`
### Exercice 2 — Escompte d'un effet

Le 10 novembre N, une entreprise remet à l'escompte un effet de 60 000 DH à échéance du 10 janvier N+1 ; agios 900 DH, commissions 150 DH. Le client paie à l'échéance.

1. Passez l'écriture de remise à l'escompte.
2. Comment l'effet apparaît-il au bilan du 31 décembre N ?
3. Passez l'écriture du 10 janvier N+1.

<details><summary>Voir le corrigé</summary>

**1)** D 5141 58 950 ; D 6311 900 ; D 6147 150 / C 5520 Crédits d'escompte 60 000.

**2)** L'effet reste à l'actif (**3425** : 60 000 DH) et le crédit d'escompte figure en **trésorerie-passif** (5520 : 60 000 DH).

**3)** D 5520 60 000 / C 3425 60 000.

</details>

### Exercice 3 — Ajustement ou information ?

Clôture au 31/12/N, arrêté des comptes le 20/03/N+1. Classez : 1) un contrôle fiscal notifié en février N+1 portant sur N−1, avec un redressement probable ; 2) le rachat d'un concurrent en mars N+1 ; 3) la vente en janvier N+1 d'un stock de fin N à un prix inférieur à son coût ; 4) une grève paralysant l'usine en février N+1.

<details><summary>Voir le corrigé</summary>

1. **Ajustement** : l'obligation fiscale existait à la clôture ; provision pour impôts.
2. **Information** : opération née après la clôture.
3. **Ajustement** : la vente révèle une dépréciation existant au 31/12 ; provision sur stock.
4. **Information** (et appréciation de la continuité si la grève est durable).

</details>
`,
    qcm: [
      { q: "Une caution donnée par une société pour le prêt de sa filiale est :", choix: ["Une dette au bilan", "Un engagement hors bilan donné", "Un produit", "Un engagement reçu"], bonne: 1, explication: "Mention dans l'ETIC." },
      { q: "Une hypothèque consentie sur un immeuble est :", choix: ["Une sûreté personnelle", "Une sûreté réelle", "Un engagement reçu", "Une charge"], bonne: 1, explication: "Elle porte sur un bien." },
      { q: "Les engagements hors bilan sont présentés dans :", choix: ["Le CPC", "L'ETIC", "L'ESG", "Le tableau de financement"], bonne: 1, explication: "Tableau des engagements." },
      { q: "Selon le CGNC, un effet escompté non échu :", choix: ["Sort de l'actif", "Reste à l'actif avec un crédit d'escompte au passif", "Devient une charge", "Est annulé"], bonne: 1, explication: "Comptes 3425 et 5520." },
      { q: "Quand l'appel d'une caution devient probable, on doit :", choix: ["Ne rien faire", "Constituer une provision pour risques", "Supprimer la mention", "Augmenter le capital"], bonne: 1, explication: "L'engagement devient un passif probable." },
      { q: "La faillite en février d'un client déjà en difficulté au 31 décembre :", choix: ["N'a aucun effet sur les comptes de N", "Conduit à ajuster les comptes de N", "Est mentionnée seulement l'année suivante", "Augmente le résultat"], bonne: 1, explication: "La situation existait à la clôture." },
      { q: "Un incendie survenu après la clôture :", choix: ["Modifie les comptes de l'exercice clos", "Fait l'objet d'une information dans l'ETIC s'il est significatif", "Est ignoré", "Est provisionné au 31 décembre"], bonne: 1, explication: "Événement né après la clôture." },
      { q: "Les événements postérieurs sont pris en compte jusqu'à :", choix: ["La clôture", "L'arrêté des comptes", "La fin de l'exercice suivant", "La date de l'AG suivante"], bonne: 1, explication: "Par l'organe de direction." },
      { q: "Une caution bancaire reçue d'un client est :", choix: ["Un engagement donné", "Un engagement reçu", "Une dette", "Une créance au bilan"], bonne: 1, explication: "Elle protège l'entreprise." },
      { q: "Les agios d'escompte sont débités au compte :", choix: ["6147", "6311", "7381", "5520"], bonne: 1, explication: "Intérêts ; les commissions en 6147." },
    ],
  },

  10: {
    titre: "Les fusions et opérations de restructuration",
    description: "Fusion-absorption, scission et apport partiel d'actif : actif net réel, parité d'échange, augmentation de capital, prime de fusion, boni et écritures.",
    resume: md`
## L'essentiel — Fusions et restructurations

- **Fusion-absorption** (absorbée dissoute sans liquidation), **fusion par création**, **scission**, **apport partiel d'actif** (l'apporteuse subsiste) ; régime fiscal particulier sous conditions.
- Évaluation : **actif net réel** = actifs réévalués − dettes ; valeur de l'action = ANR / nombre d'actions.
- **Parité** = valeur de l'action absorbée / valeur de l'action absorbante.
- Actions à créer = actions à rémunérer × parité ; augmentation de capital = actions créées × nominal ; **prime de fusion** = apports rémunérés − augmentation de capital (1122).
- Titres de l'absorbée détenus par l'absorbante : non rémunérés, **annulés** ; **boni** (quote-part > coût) ou **mali**.
- Écriture chez l'absorbante : actifs et dettes à leur **valeur d'apport**, crédit 1111, 1122, 2510 ; pas de reprise des amortissements de l'absorbée.
`,
    exercices: md`
### Exercice 2 — Parité et prime

L'absorbante A (nominal 100 DH, valeur 300 DH) absorbe B (20 000 actions, actif net réel 4 800 000 DH). A ne détient pas de titres B.

Calculez la parité, les actions à créer, l'augmentation de capital et la prime de fusion.

<details><summary>Voir le corrigé</summary>

Valeur de l'action B : $4\,800\,000 / 20\,000 = 240$ DH ; parité $240 / 300 = 0{,}8$, soit **4 actions A pour 5 actions B**. Actions à créer : $20\,000 \times 0{,}8 = \mathbf{16\,000}$ ; augmentation de capital : **1 600 000 DH** ; prime de fusion : $4\,800\,000 - 1\,600\,000 = \mathbf{3\,200\,000}$ DH.

</details>

### Exercice 3 — Apport partiel d'actif

La société M apporte sa branche « emballage » (actifs réels 9 000 000 DH, dettes 3 000 000 DH) à sa filiale F, qui émet en contrepartie des actions de nominal 100 DH valant 150 DH.

1. Combien d'actions F reçoit M ?
2. Quelle est l'augmentation de capital et la prime d'apport chez F ?
3. Comment M enregistre-t-elle l'opération ?

<details><summary>Voir le corrigé</summary>

**1)** Apport net : $9\,000\,000 - 3\,000\,000 = 6\,000\,000$ DH ; actions : $6\,000\,000 / 150 = \mathbf{40\,000}$.

**2)** Augmentation de capital : $40\,000 \times 100 = $ **4 000 000 DH** ; prime d'apport : **2 000 000 DH** (compte 1123 Primes d'apport).

**3)** M sort de son bilan les actifs et dettes de la branche et inscrit en contrepartie des **titres de participation** F (2510) pour 6 000 000 DH ; l'écart éventuel avec les valeurs comptables constitue un résultat d'apport. M **subsiste** et devient actionnaire de F.

</details>
`,
    qcm: [
      { q: "Dans une fusion-absorption, la société absorbée est :", choix: ["Liquidée", "Dissoute sans liquidation", "Maintenue", "Transformée"], bonne: 1, explication: "Transmission universelle de son patrimoine." },
      { q: "Dans un apport partiel d'actif, la société apporteuse :", choix: ["Disparaît", "Subsiste et reçoit des titres", "Est liquidée", "Rembourse ses actionnaires"], bonne: 1, explication: "Elle devient associée de la bénéficiaire." },
      { q: "La parité d'échange se calcule avec :", choix: ["Les valeurs nominales", "Les valeurs réelles des actions", "Les capitaux sociaux", "Les chiffres d'affaires"], bonne: 1, explication: "Valeur absorbée / valeur absorbante." },
      { q: "Valeur de l'action absorbée 120 DH, absorbante 200 DH. La parité est :", choix: ["5 pour 3", "3 actions absorbante pour 5 absorbée", "1 pour 1", "2 pour 1"], bonne: 1, explication: "120 / 200 = 0,6." },
      { q: "Apports rémunérés 5 MDH, augmentation de capital 2 MDH. La prime de fusion vaut :", choix: ["7 MDH", "3 MDH", "2 MDH", "5 MDH"], bonne: 1, explication: "5 − 2." },
      { q: "La prime de fusion est créditée au compte :", choix: ["1111", "1122", "1140", "7513"], bonne: 1, explication: "Primes de fusion." },
      { q: "Les actions de l'absorbée déjà détenues par l'absorbante sont :", choix: ["Rémunérées normalement", "Annulées, sans création d'actions", "Vendues en Bourse", "Transformées en obligations"], bonne: 1, explication: "L'absorbante ne peut se remettre ses propres actions." },
      { q: "Quote-part d'actif net 900 000 DH, coût des titres détenus 700 000 DH. Il apparaît :", choix: ["Un mali de 200 000", "Un boni de 200 000", "Aucun écart", "Une perte de 900 000"], bonne: 1, explication: "Quote-part supérieure au coût." },
      { q: "Chez l'absorbante, les biens apportés sont inscrits :", choix: ["À leur valeur comptable chez l'absorbée", "À leur valeur d'apport", "À zéro", "À leur valeur nominale"], bonne: 1, explication: "Valeur retenue dans le traité de fusion." },
      { q: "La prime liée à un apport partiel d'actif est inscrite en :", choix: ["1122", "1123 Primes d'apport", "7513", "2510"], bonne: 1, explication: "Primes d'apport." },
    ],
  },

  11: {
    titre: "Introduction à la consolidation des comptes",
    description: "Consolidation des comptes : périmètre, contrôle et intérêt, intégration globale, proportionnelle, mise en équivalence, écart d'acquisition et minoritaires.",
    resume: md`
## L'essentiel — La consolidation

- Comptes consolidés : le groupe présenté comme **une seule entité économique** ; méthodologie du CNC au Maroc, IFRS pour de nombreux groupes.
- **Contrôle exclusif** (> 50 %) → **intégration globale** ; **contrôle conjoint** → intégration proportionnelle (ou MEE selon le référentiel) ; **influence notable** (≥ 20 %) → **mise en équivalence**.
- **% de contrôle** (méthode) : droits de vote directs + ceux des sociétés contrôlées (en totalité) ; **% d'intérêt** (partage) : produit des pourcentages le long des chaînes, somme des chaînes.
- Étapes : homogénéisation, retraitements (crédit-bail, dérogatoires), cumul, élimination des opérations réciproques, élimination des titres et partage des capitaux propres.
- **Écart d'acquisition** = coût des titres − quote-part des capitaux propres acquis (amorti selon la méthodologie marocaine ; test de dépréciation en IFRS).
- Réserves consolidées = réserves de la mère + part du groupe dans les réserves **postérieures** à l'acquisition ; **intérêts minoritaires** en intégration globale.
`,
    exercices: md`
### Exercice 2 — Pourcentages de contrôle et d'intérêt

M détient 60 % de A et 15 % de B ; A détient 25 % de B et 40 % de C ; M détient 20 % de C.

Calculez, pour B et C, le pourcentage de contrôle, la méthode et le pourcentage d'intérêt de M.

<details><summary>Voir le corrigé</summary>

- **B** : contrôle $15\,\% + 25\,\% = 40\,\%$ (A contrôlée) : influence notable, **mise en équivalence** (sauf contrôle de fait) ; intérêt $15\,\% + 60\,\% \times 25\,\% = \mathbf{30\,\%}$.
- **C** : contrôle $20\,\% + 40\,\% = 60\,\%$ : **intégration globale** ; intérêt $20\,\% + 60\,\% \times 40\,\% = \mathbf{44\,\%}$.

</details>

### Exercice 3 — Mise en équivalence

M détient 30 % d'une société associée E, acquis pour 900 000 DH lorsque les capitaux propres de E valaient 2 500 000 DH. Au 31 décembre N, les capitaux propres de E s'élèvent à 3 200 000 DH, dont un résultat de 400 000 DH.

1. Calculez l'écart d'acquisition.
2. Calculez la valeur des titres mis en équivalence et la quote-part de résultat.

<details><summary>Voir le corrigé</summary>

**1)** $900\,000 - 30\,\% \times 2\,500\,000 = 900\,000 - 750\,000 = \mathbf{150\,000}$ DH.

**2)** Titres mis en équivalence : $30\,\% \times 3\,200\,000 = \mathbf{960\,000}$ DH (l'écart d'acquisition étant présenté séparément selon la méthodologie retenue) ; quote-part de résultat : $30\,\% \times 400\,000 = \mathbf{120\,000}$ DH, sur une ligne distincte du compte de résultat consolidé. La variation des titres ($960\,000 - 750\,000 = 210\,000$) correspond à la part de M dans la progression des capitaux propres de E depuis l'acquisition.

</details>
`,
    qcm: [
      { q: "Une société détenue à 70 % des droits de vote est consolidée par :", choix: ["Mise en équivalence", "Intégration globale", "Intégration proportionnelle", "Aucune méthode"], bonne: 1, explication: "Contrôle exclusif." },
      { q: "L'influence notable est présumée à partir de :", choix: ["10 %", "20 %", "33 %", "50 %"], bonne: 1, explication: "Des droits de vote." },
      { q: "Le pourcentage qui détermine la méthode de consolidation est :", choix: ["Le pourcentage d'intérêt", "Le pourcentage de contrôle", "Le pourcentage du chiffre d'affaires", "Le pourcentage de dividendes"], bonne: 1, explication: "L'intérêt sert au partage." },
      { q: "M détient 80 % de F, qui détient 50 % de G. L'intérêt de M dans G est :", choix: ["50 %", "40 %", "80 %", "130 %"], bonne: 1, explication: "80 % × 50 %." },
      { q: "Dans le même cas, le contrôle de M sur G est :", choix: ["40 %", "50 %", "80 %", "0 %"], bonne: 1, explication: "F étant contrôlée, on retient ses 50 %." },
      { q: "En intégration globale, la part des autres actionnaires apparaît en :", choix: ["Dettes", "Intérêts minoritaires", "Écart d'acquisition", "Réserves consolidées du groupe"], bonne: 1, explication: "Dans les capitaux propres et le résultat." },
      { q: "Coût des titres 500 000 DH, quote-part des capitaux propres acquis 420 000 DH. L'écart d'acquisition est :", choix: ["80 000", "920 000", "420 000", "− 80 000"], bonne: 0, explication: "500 000 − 420 000." },
      { q: "En mise en équivalence, on reprend dans les comptes consolidés :", choix: ["Tous les actifs et passifs de la société", "La quote-part de ses capitaux propres et de son résultat", "Uniquement ses ventes", "Rien"], bonne: 1, explication: "Ligne titres mis en équivalence." },
      { q: "Les créances et dettes entre sociétés du groupe sont :", choix: ["Additionnées", "Éliminées", "Provisionnées", "Doublées"], bonne: 1, explication: "Opérations réciproques." },
      { q: "Les réserves consolidées comprennent la part du groupe dans les réserves de la filiale :", choix: ["Antérieures à l'acquisition", "Postérieures à l'acquisition", "De toute l'histoire de la filiale", "Jamais"], bonne: 1, explication: "Les réserves antérieures ont été payées dans le prix des titres." },
    ],
  },
};

export default chapitres;
