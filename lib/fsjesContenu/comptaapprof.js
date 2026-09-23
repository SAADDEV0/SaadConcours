// Comptabilité Approfondie (S5) — compléments par chapitre.
const md = String.raw;

export default {
  1: {
    titre: "Les travaux d'inventaire : principes et chronologie",
    resume: md`
## L'essentiel — Travaux d'inventaire

- Les **travaux d'inventaire** régularisent les comptes à la clôture pour donner une **image fidèle** du patrimoine, de la situation financière et du résultat.
- Principes du CGNC : **continuité d'exploitation**, **permanence des méthodes**, **coût historique**, **spécialisation des exercices**, **prudence**, **clarté** (pas de compensation), **importance significative**.
- Chronologie : balance avant inventaire → régularisations → balance après inventaire → états de synthèse.
- Ordre des régularisations : **stocks → amortissements → provisions → cessions → charges et produits constatés d'avance → écarts de conversion**.
`,
    exercices: md`
### Exercice 1 — Quel principe comptable ?

Indiquez le principe du CGNC appliqué dans chaque cas :

1. Un terrain acheté 500 000 DH il y a dix ans reste inscrit pour 500 000 DH alors qu'il en vaut le double.
2. Une entreprise ne compense pas une créance sur un client avec la dette qu'elle a envers lui.
3. Un loyer payé en décembre pour janvier n'est pas une charge de l'exercice.
4. Une perte probable sur un litige est provisionnée, mais un gain probable sur un autre litige n'est pas comptabilisé.
5. L'entreprise garde chaque année la méthode du CMUP pour ses stocks.

<details><summary>Voir le corrigé</summary>

1. **Coût historique** ; 2. **clarté** (non-compensation) ; 3. **spécialisation des exercices** ; 4. **prudence** ; 5. **permanence des méthodes**.

</details>

### Exercice 2 — Remettre les travaux dans l'ordre

Remettez dans l'ordre chronologique : a) établissement du bilan et du CPC ; b) comptabilisation des provisions ; c) balance avant inventaire ; d) régularisation des stocks ; e) comptabilisation des charges constatées d'avance ; f) dotations aux amortissements ; g) balance après inventaire.

<details><summary>Voir le corrigé</summary>

c → d → f → b → e → g → a.

</details>
`,
    qcm: [
      { q: "Le principe de prudence impose de :", choix: ["Comptabiliser les gains probables", "Comptabiliser les pertes probables", "Réévaluer chaque année", "Compenser actifs et passifs"], bonne: 1, explication: "Les produits latents ne sont pas comptabilisés." },
      { q: "Le principe de clarté interdit notamment :", choix: ["Les amortissements", "La compensation entre comptes", "Les provisions", "La balance"], bonne: 1, explication: "Actif et passif, charges et produits restent distincts." },
      { q: "La première étape des travaux de fin d'exercice est :", choix: ["Les états de synthèse", "La balance avant inventaire", "Les écarts de conversion", "Le bilan"], bonne: 1, explication: "Puis viennent les régularisations." },
      { q: "Garder la même méthode d'une année à l'autre relève de :", choix: ["La prudence", "La permanence des méthodes", "Le coût historique", "L'importance significative"], bonne: 1, explication: "Pour que les comptes soient comparables." },
      { q: "Les travaux d'inventaire visent à obtenir :", choix: ["Un résultat maximal", "Une image fidèle", "Un impôt minimal", "Une trésorerie positive"], bonne: 1, explication: "Régularité, sincérité, image fidèle." },
    ],
  },

  2: {
    titre: "Rappel : amortissements et provisions",
    resume: md`
## L'essentiel — Amortissements et provisions

- **Linéaire** : annuité $= VO \times t$ avec $t = 100 / n$ % ; prorata temporis la 1ʳᵉ année : $VO \times t \times m / 12$.
- **Dégressif** (biens neufs, durée ≥ 3 ans) : $t_d = t \times c$ ($c = 1{,}5$ ; 2 ; 3) appliqué à la **VNA** ; on passe au linéaire du solde dès qu'il devient plus élevé.
- Écriture : débit **619x** (DEA), crédit **28xx**.
- **Provisions pour dépréciation** (créances, stocks, titres) : calculées sur le **HT** et **ajustées** chaque année (dotation complémentaire ou reprise).
- **Provisions pour risques et charges** : 15xx si plus de 12 mois, sinon 45xx.
- $VNA = VO - \sum \text{amortissements}$.
`,
    exercices: md`
### Exercice 2 — Plan d'amortissement dégressif et ajustement de provision

1. Une machine neuve de 100 000 DH, acquise le 1ᵉʳ janvier N, est amortie en dégressif sur 5 ans (coefficient 2). Établissez le plan d'amortissement.
2. La créance douteuse de 36 000 DH TTC (30 000 DH HT) provisionnée à 50 % en N est estimée irrécouvrable à 70 % en N+1. Passez l'écriture d'ajustement.

<details><summary>Voir le corrigé</summary>

**1)** Taux dégressif $= 20\% \times 2 = 40\%$.

| Année | VNA début | Dégressif 40 % | Linéaire du solde | Annuité retenue | VNA fin |
|---|--:|--:|--:|--:|--:|
| N | 100 000 | 40 000 | 20 000 | 40 000 | 60 000 |
| N+1 | 60 000 | 24 000 | 15 000 | 24 000 | 36 000 |
| N+2 | 36 000 | 14 400 | 12 000 | 14 400 | 21 600 |
| N+3 | 21 600 | 8 640 | 10 800 | **10 800** | 10 800 |
| N+4 | 10 800 | — | 10 800 | 10 800 | 0 |

**2)** Provision nécessaire $= 30\,000 \times 70\% = 21\,000$ DH ; provision existante 15 000 DH ; dotation complémentaire 6 000 DH.

| Compte | Débit | Crédit |
|---|--:|--:|
| 6196 DEP pour dépréciation de l'actif circulant | 6 000 | |
| 3942 Provisions pour dépréciation des clients | | 6 000 |

</details>
`,
    qcm: [
      { q: "Un bien de 50 000 DH amorti en linéaire sur 5 ans, acquis le 1ᵉʳ avril, a une annuité N de :", choix: ["10 000", "7 500", "2 500", "12 500"], bonne: 1, explication: "50 000 × 20 % × 9/12 = 7 500." },
      { q: "En dégressif, le taux s'applique :", choix: ["À la valeur d'origine", "À la valeur nette d'amortissement", "Au prix de vente", "À la valeur de marché"], bonne: 1, explication: "D'où des annuités décroissantes." },
      { q: "Pour une durée de 5 ans, le coefficient dégressif est :", choix: ["1,5", "2", "2,5", "3"], bonne: 1, explication: "1,5 pour 3-4 ans, 2 pour 5-6 ans, 3 au-delà." },
      { q: "La provision pour créance douteuse se calcule sur :", choix: ["Le montant TTC", "Le montant HT", "La TVA seule", "Le montant de la facture initiale majoré"], bonne: 1, explication: "La TVA sera récupérée en cas de perte définitive." },
      { q: "Si le risque diminue, on constate :", choix: ["Une dotation", "Une reprise", "Un amortissement", "Aucune écriture"], bonne: 1, explication: "Débit du compte de provision, crédit d'un compte de reprise." },
    ],
  },

  3: {
    titre: "Rappel : cessions d'immobilisations et régularisations",
    resume: md`
## L'essentiel — Cessions et régularisations

- Cession en trois écritures : **dotation complémentaire** jusqu'à la date de cession ; **prix** au crédit du 7513 (et TVA le cas échéant) ; **sortie du bien** (débit 28xx + 6513 VNA, crédit 2xxx).
- $\text{Résultat de cession} = \text{prix de cession HT} - VNA$.
- **Charge à payer** (44x7) : augmente la charge ; **charge constatée d'avance** (3491) : la diminue.
- **Produit à recevoir** (34x7) : augmente le produit ; **produit constaté d'avance** (4491) : le diminue.
- Ces régularisations sont **contre-passées** à l'ouverture de l'exercice suivant.
`,
    exercices: md`
### Exercice 2 — Quatre régularisations au 31/12/N

(Montants HT, TVA ignorée.)

1. Un loyer de 36 000 DH couvrant la période du 1ᵉʳ octobre N au 30 septembre N+1 a été payé et comptabilisé en charges le 1ᵉʳ octobre.
2. Un prêt de 100 000 DH accordé le 1ᵉʳ juillet N au taux de 6 % : les intérêts seront encaissés le 30 juin N+1.
3. La facture d'électricité de décembre (4 500 DH) n'est pas encore parvenue.
4. Un client a payé le 1ᵉʳ décembre N un abonnement de 12 000 DH couvrant 12 mois, comptabilisé en produits.

Calculez chaque régularisation et indiquez son effet sur le résultat de N.

<details><summary>Voir le corrigé</summary>

| Opération | Nature | Calcul | Écriture | Effet sur le résultat |
|---|---|---|---|---|
| 1. Loyer | Charge constatée d'avance | $36\,000 \times 9/12 = 27\,000$ | 3491 / 6131 | +27 000 |
| 2. Intérêts | Produit à recevoir | $100\,000 \times 6\% \times 6/12 = 3\,000$ | 34x7 / 7381 | +3 000 |
| 3. Électricité | Charge à payer (FNP) | 4 500 | 6125 / 4417 | −4 500 |
| 4. Abonnement | Produit constaté d'avance | $12\,000 \times 11/12 = 11\,000$ | 712x / 4491 | −11 000 |

Effet net sur le résultat de N : $27\,000 + 3\,000 - 4\,500 - 11\,000 = +14\,500$ DH.

</details>
`,
    qcm: [
      { q: "Le résultat de cession est égal à :", choix: ["Prix de cession − valeur d'origine", "Prix de cession − VNA", "VNA − amortissements", "Prix de cession + VNA"], bonne: 1, explication: "La VNA est la valeur comptable du bien au jour de la cession." },
      { q: "Une assurance payée d'avance pour l'exercice suivant donne lieu à :", choix: ["Une charge à payer", "Une charge constatée d'avance", "Un produit à recevoir", "Un produit constaté d'avance"], bonne: 1, explication: "La charge est retirée de l'exercice N." },
      { q: "Des intérêts courus non encore encaissés à la clôture constituent :", choix: ["Un produit constaté d'avance", "Un produit à recevoir", "Une charge à payer", "Une provision"], bonne: 1, explication: "Ils concernent l'exercice N." },
      { q: "Avant de sortir un bien cédé, il faut d'abord :", choix: ["Passer la dotation complémentaire jusqu'à la date de cession", "Annuler tous les amortissements", "Constater une provision", "Réévaluer le bien"], bonne: 0, explication: "Le bien s'est usé jusqu'à la cession." },
      { q: "Les écritures de régularisation sont, au début de l'exercice suivant :", choix: ["Supprimées", "Contre-passées", "Doublées", "Ignorées"], bonne: 1, explication: "Pour que les opérations soient rattachées au bon exercice." },
    ],
  },

  4: {
    titre: "Les immobilisations : opérations complexes",
    resume: md`
## L'essentiel — Immobilisations complexes

- **Production immobilisée** : coûts engagés débités en immobilisations en cours (2392), crédit **7142** ; à l'achèvement, transfert vers le compte définitif.
- **Échange** : cession de l'ancien bien (sortie à la VNA, résultat de cession) + acquisition du nouveau à sa **valeur vénale** ; la **soulte** règle la différence.
- **Réévaluation libre** : on remplace la VNC par la valeur actuelle ; l'écart est crédité au **1130 Écarts de réévaluation** (capitaux propres) ; les amortissements futurs sont calculés sur la nouvelle base.
- **Approche par composants** : un élément à durée de vie différente (toiture, moteur) est amorti **séparément** sur sa propre durée.
`,
    exercices: md`
### Exercice 2 — Réévaluation et composants

1. Un terrain inscrit pour 400 000 DH est réévalué à 650 000 DH. Passez l'écriture.
2. Un bâtiment de 2 000 000 DH comprend une toiture de 200 000 DH (durée 10 ans) et une structure de 1 800 000 DH (durée 30 ans). Calculez la dotation annuelle avec l'approche par composants, puis avec une durée unique de 30 ans. Commentez.

<details><summary>Voir le corrigé</summary>

**1)**

| Compte | Débit | Crédit |
|---|--:|--:|
| 2311 Terrains | 250 000 | |
| 1130 Écarts de réévaluation | | 250 000 |

**2)** Par composants : $200\,000 / 10 + 1\,800\,000 / 30 = 20\,000 + 60\,000 = 80\,000$ DH par an. Durée unique : $2\,000\,000 / 30 \approx 66\,667$ DH. L'approche par composants reflète mieux l'usure réelle : la toiture, qui devra être remplacée au bout de 10 ans, est amortie sur sa propre durée.

</details>
`,
    qcm: [
      { q: "Une immobilisation produite par l'entreprise est créditée au compte :", choix: ["7142 Immobilisations corporelles produites", "7111 Ventes de marchandises", "1111 Capital", "6193 DEA"], bonne: 0, explication: "Ce produit neutralise les charges engagées pour la fabriquer." },
      { q: "L'écart de réévaluation est inscrit :", choix: ["En produit de l'exercice", "Dans les capitaux propres", "En dette", "En charge"], bonne: 1, explication: "Compte 1130." },
      { q: "Après une réévaluation, les amortissements futurs sont calculés sur :", choix: ["La valeur d'origine", "La nouvelle valeur réévaluée", "La valeur fiscale", "Zéro"], bonne: 1, explication: "La base amortissable change." },
      { q: "Dans un échange, le nouveau bien est inscrit à :", choix: ["La VNA de l'ancien bien", "Sa valeur vénale", "Son prix catalogue", "Zéro"], bonne: 1, explication: "L'échange est traité comme une cession suivie d'un achat." },
      { q: "L'approche par composants consiste à :", choix: ["Amortir un bien sur une durée unique", "Amortir séparément les éléments de durées différentes", "Ne pas amortir les bâtiments", "Réévaluer chaque composant"], bonne: 1, explication: "Par exemple la toiture et la structure d'un bâtiment." },
    ],
  },

  5: {
    titre: "Le crédit-bail (leasing)",
    resume: md`
## L'essentiel — Le crédit-bail

- Selon le **CGNC**, le preneur traite le crédit-bail comme une **location** : le bien n'est pas inscrit à son bilan, les redevances sont des charges (**6132**).
- À la levée d'option : le bien est immobilisé pour sa **valeur résiduelle** et amorti sur sa durée restante.
- Le bien et l'engagement figurent dans l'**ETIC** (engagements hors bilan).
- En **analyse financière**, on retraite le crédit-bail comme un **emprunt** : bien à l'actif, dette au passif, redevance ventilée en **amortissement** et **intérêts**.
- Les IFRS (IFRS 16) inscrivent au contraire le bien et la dette au bilan.
`,
    exercices: md`
### Exercice 2 — Redevances, option et retraitement

Un matériel d'une valeur de 300 000 DH est pris en crédit-bail sur 5 ans ; redevance annuelle 80 000 DH HT (TVA 20 %) ; option d'achat en fin de contrat : 15 000 DH HT.

1. Quel est le montant total des charges comptabilisées sur 5 ans ? Passez l'écriture de levée d'option.
2. Pour l'analyse financière, on retraite chaque redevance en amortissement ($300\,000 / 5$) et intérêts. Quels effets sur l'EBE, le résultat d'exploitation et le résultat financier ?

<details><summary>Voir le corrigé</summary>

**1)** $5 \times 80\,000 = 400\,000$ DH de redevances en charges.

| Compte | Débit | Crédit |
|---|--:|--:|
| 2332 Matériel et outillage | 15 000 | |
| 34552 État, TVA récupérable | 3 000 | |
| 5141 Banque | | 18 000 |

**2)** Amortissement $= 60\,000$ DH ; intérêts $= 80\,000 - 60\,000 = 20\,000$ DH. La redevance (80 000) n'est plus une consommation : l'**EBE augmente de 80 000** ; le résultat d'exploitation augmente de $80\,000 - 60\,000 = 20\,000$ ; le **résultat financier diminue de 20 000**. Le résultat net est inchangé.

</details>
`,
    qcm: [
      { q: "Selon le CGNC, chez le preneur, la redevance de crédit-bail est :", choix: ["Une immobilisation", "Une charge", "Une dette financière", "Un produit"], bonne: 1, explication: "Compte 6132." },
      { q: "À la levée d'option, le bien est inscrit à :", choix: ["Sa valeur d'origine", "Sa valeur résiduelle", "Zéro", "Sa valeur de marché"], bonne: 1, explication: "C'est le prix payé pour l'option." },
      { q: "En analyse financière, le crédit-bail est retraité comme :", choix: ["Une location simple", "Un emprunt finançant une immobilisation", "Une subvention", "Un stock"], bonne: 1, explication: "Pour comparer avec une entreprise qui achète à crédit." },
      { q: "Le retraitement du crédit-bail augmente :", choix: ["L'EBE", "Les consommations externes", "Les stocks", "Le capital"], bonne: 0, explication: "La redevance quitte les consommations de l'exercice." },
      { q: "Les engagements de crédit-bail figurent :", choix: ["Au bilan du preneur", "Dans l'ETIC", "Nulle part", "Au CPC comme produit"], bonne: 1, explication: "Engagements hors bilan." },
    ],
  },

  6: {
    titre: "Les titres et valeurs mobilières",
    resume: md`
## L'essentiel — Les titres

- **Titres de participation** (251) : contrôle ou influence durable ; **TIAP** (258) : placement durable ; **TVP** (350) : placement de trésorerie.
- Cession de titres de participation : **non courante** (7514 prix de cession ; 6514 VNA).
- Cession de TVP : **financière** ; plus-value au **7385**, moins-value au **6385**.
- À la clôture, si la valeur d'inventaire est inférieure au coût d'achat : **provision** (TVP : 6394 / 3950 ; titres de participation : 6392 / 2951).
- Les plus-values latentes ne sont **pas** comptabilisées (prudence).
`,
    exercices: md`
### Exercice 2 — Provision puis cession de TVP

Le 10 novembre N, une entreprise achète 200 actions cotées à 150 DH (TVP). Au 31 décembre N, le cours est de 135 DH. Le 15 mars N+1, elle vend les 200 actions à 140 DH.

1. Passez l'écriture d'inventaire au 31/12/N.
2. Passez les écritures de N+1 (cession et sort de la provision).

<details><summary>Voir le corrigé</summary>

**1)** Provision $= 200 \times (150 - 135) = 3\,000$ DH.

| Compte | Débit | Crédit |
|---|--:|--:|
| 6394 DEP des titres et valeurs de placement | 3 000 | |
| 3950 Provisions pour dépréciation des TVP | | 3 000 |

**2)** Moins-value $= 200 \times (140 - 150) = -2\,000$ DH.

| Compte | Débit | Crédit |
|---|--:|--:|
| 5141 Banque | 28 000 | |
| 6385 Charges nettes sur cessions de TVP | 2 000 | |
| 350 Titres et valeurs de placement | | 30 000 |
| 3950 Provisions pour dépréciation des TVP | 3 000 | |
| 7394 Reprises sur provisions pour dépréciation des TVP | | 3 000 |

</details>
`,
    qcm: [
      { q: "Des actions achetées pour être revendues à court terme sont des :", choix: ["Titres de participation", "TIAP", "Titres et valeurs de placement", "Immobilisations corporelles"], bonne: 2, explication: "Compte 350." },
      { q: "La plus-value sur cession de TVP est portée au compte :", choix: ["7513", "7385", "7514", "7111"], bonne: 1, explication: "Produits nets sur cessions de TVP." },
      { q: "La cession de titres de participation relève du résultat :", choix: ["D'exploitation", "Financier", "Non courant", "Aucun"], bonne: 2, explication: "Comme toute cession d'immobilisation." },
      { q: "Une plus-value latente sur des titres à la clôture :", choix: ["Est comptabilisée en produit", "N'est pas comptabilisée", "Donne lieu à une provision", "Augmente le capital"], bonne: 1, explication: "Principe de prudence." },
      { q: "Titres achetés 50 000, valeur d'inventaire 42 000 : on constate :", choix: ["Une provision de 8 000", "Un produit de 8 000", "Rien", "Une cession"], bonne: 0, explication: "Moins-value latente = dépréciation probable." },
    ],
  },

  7: {
    titre: "Les contrats à long terme",
    resume: md`
## L'essentiel — Contrats à long terme

- **Méthode à l'achèvement** (référence du CGNC, prudente) : résultat constaté à la **livraison** ; entre-temps les coûts restent en **en-cours**.
- **Méthode à l'avancement** (admise si les estimations sont fiables) : CA et résultat constatés au fur et à mesure.
- $\text{Degré d'avancement} = \dfrac{\text{coûts engagés}}{\text{coûts totaux estimés}}$ ; CA de l'exercice $= \text{prix du contrat} \times \text{avancement cumulé} - \text{CA déjà constaté}$.
- Écriture à l'avancement : débit **3427** Clients, factures à établir ; crédit **712x**.
- Contrat **déficitaire** : **provision pour perte à terminaison** immédiate, quelle que soit la méthode.
`,
    exercices: md`
### Exercice 2 — Achèvement ou avancement sur deux exercices

Un contrat de 2 000 000 DH HT, pour un coût total estimé à 1 600 000 DH, s'étale sur N et N+1. Coûts engagés : 640 000 DH en N et 960 000 DH en N+1.

1. Calculez le CA et le résultat de chaque exercice selon la méthode à l'avancement.
2. Même question selon la méthode à l'achèvement.
3. Si le coût total estimé passait à 2 200 000 DH, que faudrait-il faire dès N ?

<details><summary>Voir le corrigé</summary>

**1)** Avancement N $= 640\,000 / 1\,600\,000 = 40\%$ ; CA N $= 800\,000$ ; résultat N $= 160\,000$. En N+1 : CA $= 1\,200\,000$ ; résultat $= 1\,200\,000 - 960\,000 = 240\,000$.

**2)** À l'achèvement : en N, CA nul, les 640 000 DH restent en en-cours, résultat nul ; en N+1, CA $= 2\,000\,000$, résultat $= 400\,000$.

**3)** Le contrat devient déficitaire de $2\,000\,000 - 2\,200\,000 = -200\,000$ DH : il faut constituer dès N une **provision pour perte à terminaison** de 200 000 DH (prudence).

</details>
`,
    qcm: [
      { q: "La méthode de référence du CGNC pour les contrats à long terme est :", choix: ["L'avancement", "L'achèvement", "La réévaluation", "Le FIFO"], bonne: 1, explication: "Elle applique le principe de prudence." },
      { q: "Coûts engagés 300 000 sur un total estimé de 1 200 000 : l'avancement est de :", choix: ["25 %", "30 %", "40 %", "75 %"], bonne: 0, explication: "300 000 / 1 200 000." },
      { q: "Un contrat qui s'annonce déficitaire impose :", choix: ["D'attendre la livraison", "Une provision pour perte à terminaison immédiate", "D'arrêter la comptabilité", "Une réévaluation"], bonne: 1, explication: "Quelle que soit la méthode retenue." },
      { q: "Avec la méthode à l'achèvement, les coûts engagés avant livraison figurent :", choix: ["En charges définitives", "En en-cours (stocks)", "En immobilisations", "En dettes"], bonne: 1, explication: "Aucun résultat n'est dégagé avant la livraison." },
      { q: "À l'avancement, le CA non encore facturé est débité au compte :", choix: ["3427 Clients, factures à établir", "4411 Fournisseurs", "5141 Banque", "1111 Capital"], bonne: 0, explication: "Par le crédit d'un compte de ventes." },
    ],
  },

  8: {
    titre: "Les subventions",
    resume: md`
## L'essentiel — Les subventions

- **Subvention d'investissement** (1311) : finance un bien ; elle est rapportée au résultat au **rythme de l'amortissement** du bien (débit 1319, crédit 756).
- **Subvention d'exploitation** (716) : produit d'exploitation de l'exercice.
- **Subvention d'équilibre** (758) : produit non courant de l'exercice.
- Au bilan, la subvention d'investissement figure dans les capitaux propres assimilés pour son **montant net** (1311 − 1319).
- L'étalement applique le principe de **spécialisation des exercices**.
`,
    exercices: md`
### Exercice 2 — Subvention d'un bien acquis en cours d'année

Le 1ᵉʳ juillet N, une entreprise acquiert une machine de 400 000 DH HT, amortie en linéaire sur 5 ans, financée en partie par une subvention d'investissement de 120 000 DH encaissée le même jour. Elle reçoit aussi une subvention d'exploitation de 50 000 DH.

1. Passez les écritures de réception des subventions.
2. Calculez la quote-part de subvention d'investissement virée au résultat en N et en N+1 ; passez l'écriture de N.
3. Quel montant net de subvention d'investissement figure au bilan fin N ?

<details><summary>Voir le corrigé</summary>

**1)**

| Compte | Débit | Crédit |
|---|--:|--:|
| 5141 Banque | 120 000 | |
| 1311 Subventions d'investissement reçues | | 120 000 |
| 5141 Banque | 50 000 | |
| 716 Subventions d'exploitation | | 50 000 |

**2)** Quote-part annuelle $= 120\,000 / 5 = 24\,000$ DH ; N (6 mois) : 12 000 DH ; N+1 : 24 000 DH.

| Compte | Débit | Crédit |
|---|--:|--:|
| 1319 Subventions d'investissement inscrites au CPC | 12 000 | |
| 756 Reprises sur subventions d'investissement | | 12 000 |

**3)** $120\,000 - 12\,000 = 108\,000$ DH.

</details>
`,
    qcm: [
      { q: "Une subvention d'investissement est rapportée au résultat :", choix: ["En totalité l'année de réception", "Au rythme de l'amortissement du bien financé", "Jamais", "À la cession du bien uniquement"], bonne: 1, explication: "Principe de spécialisation des exercices." },
      { q: "Une subvention d'exploitation est enregistrée au compte :", choix: ["1311", "716", "758", "1319"], bonne: 1, explication: "C'est un produit d'exploitation de l'exercice." },
      { q: "Une subvention d'équilibre est :", choix: ["Un produit d'exploitation", "Un produit non courant", "Une dette", "Un capital"], bonne: 1, explication: "Compte 758." },
      { q: "Subvention de 200 000 pour un bien amorti sur 10 ans : la quote-part annuelle est de :", choix: ["10 000", "20 000", "200 000", "2 000"], bonne: 1, explication: "200 000 / 10." },
      { q: "Au bilan, la subvention d'investissement apparaît :", choix: ["À l'actif", "Dans les capitaux propres assimilés, pour son montant net", "En dettes fournisseurs", "Au CPC"], bonne: 1, explication: "1311 diminué du 1319." },
    ],
  },

  9: {
    titre: "Engagements hors bilan et événements postérieurs à la clôture",
    resume: md`
## L'essentiel — Hors bilan et événements postérieurs

- **Engagements hors bilan** (cautions, avals, garanties, effets escomptés non échus, crédit-bail) : pas d'écriture, mais une mention dans l'**ETIC** ; si le risque devient probable, on constitue une **provision**.
- **Événement postérieur** dont l'origine existait **à la clôture** : on **ajuste** les comptes (provision, dépréciation).
- Événement **né après** la clôture : **pas d'ajustement**, simple **information** dans l'ETIC s'il est significatif.
- Le critère est l'**origine** de l'événement, pas la date à laquelle on l'apprend.
`,
    exercices: md`
### Exercice 2 — Ajuster ou informer ?

Comptes clos le 31/12/N, arrêtés le 20/03/N+1. Quel traitement pour chaque événement ?

1. En février N+1, le tribunal condamne l'entreprise à verser 90 000 DH pour un litige né en septembre N.
2. En janvier N+1, un stock de produits est vendu à un prix inférieur à son coût, car ces produits étaient déjà démodés au 31/12/N.
3. En février N+1, un client solvable au 31/12/N est ruiné par un incendie survenu le 5 février.
4. En mars N+1, le conseil décide d'une importante augmentation de capital.
5. L'entreprise s'est portée caution pour une filiale à hauteur de 500 000 DH ; aucun défaut n'est probable.

<details><summary>Voir le corrigé</summary>

1. **Ajustement** : provision pour risques de 90 000 DH dans les comptes de N.
2. **Ajustement** : dépréciation du stock (la perte de valeur existait à la clôture).
3. **Pas d'ajustement** (origine postérieure) ; information dans l'ETIC si significatif.
4. **Pas d'ajustement** ; information dans l'ETIC.
5. **Aucune écriture** ; mention de l'engagement donné dans l'ETIC.

</details>
`,
    qcm: [
      { q: "Une caution donnée sans risque probable donne lieu à :", choix: ["Une provision", "Une mention dans l'ETIC", "Une charge", "Une dette"], bonne: 1, explication: "C'est un engagement hors bilan." },
      { q: "Un litige né avant la clôture et tranché après la clôture entraîne :", choix: ["Un ajustement des comptes clos", "Une simple information", "Aucun traitement", "Une réévaluation"], bonne: 0, explication: "Sa cause existait à la clôture." },
      { q: "Un incendie survenu après la clôture :", choix: ["Est provisionné dans les comptes clos", "N'entraîne pas d'ajustement mais une information si significatif", "Est ignoré", "Modifie le capital"], bonne: 1, explication: "Son origine est postérieure à la clôture." },
      { q: "Le critère décisif pour un événement postérieur est :", choix: ["Sa date de connaissance", "Son origine avant ou après la clôture", "Son montant seulement", "L'avis du banquier"], bonne: 1, explication: "C'est l'origine qui compte." },
      { q: "L'ETIC est :", choix: ["Un journal", "L'état des informations complémentaires", "Un compte de charges", "Un tableau d'amortissement"], bonne: 1, explication: "Il complète le bilan et le CPC." },
    ],
  },

  10: {
    titre: "Les fusions et opérations de restructuration",
    resume: md`
## L'essentiel — Fusions et restructurations

- **Fusion-absorption** : A absorbe B, qui disparaît ; les actionnaires de B reçoivent des actions nouvelles de A.
- $\text{Parité} = \dfrac{\text{valeur d'une action B}}{\text{valeur d'une action A}}$ ; actions A créées $= \text{nombre d'actions B} \times \text{parité}$.
- Augmentation de capital $= \text{actions créées} \times \text{nominal de A}$ ; **prime de fusion** $= \text{actif net apporté} - \text{augmentation de capital}$.
- Chez A : débit des actifs reçus (valeurs d'apport), crédit des dettes reprises, du **capital** (1111) et de la **prime de fusion** (1121).
- **Apport partiel d'actif** : apport d'une branche autonome, la société apporteuse subsiste ; **scission** : le patrimoine est réparti entre plusieurs sociétés, la société scindée disparaît.
`,
    exercices: md`
### Exercice 2 — Fusion à partir des bilans

La société B (10 000 actions) apporte des actifs évalués à 3 000 000 DH et des dettes de 1 000 000 DH. La société A a 20 000 actions de nominal 100 DH valant 400 DH chacune.

1. Calculez la valeur de l'action B et la parité d'échange.
2. Calculez le nombre d'actions A à créer, l'augmentation de capital et la prime de fusion.
3. Passez l'écriture chez A.

<details><summary>Voir le corrigé</summary>

**1)** Actif net de B $= 3\,000\,000 - 1\,000\,000 = 2\,000\,000$ DH, soit 200 DH par action ; parité $= 200 / 400 = 1/2$ (1 action A pour 2 actions B).

**2)** $10\,000 / 2 = 5\,000$ actions A ; augmentation de capital $= 5\,000 \times 100 = 500\,000$ DH ; prime de fusion $= 2\,000\,000 - 500\,000 = 1\,500\,000$ DH.

**3)**

| Compte | Débit | Crédit |
|---|--:|--:|
| Comptes d'actifs reçus | 3 000 000 | |
| Comptes de dettes reprises | | 1 000 000 |
| 1111 Capital social | | 500 000 |
| 1121 Prime de fusion | | 1 500 000 |

</details>
`,
    qcm: [
      { q: "Dans une fusion-absorption, la société absorbée :", choix: ["Continue d'exister", "Disparaît", "Devient une filiale", "Double son capital"], bonne: 1, explication: "Son patrimoine est transmis à l'absorbante." },
      { q: "Action B = 300 DH, action A = 600 DH : la parité est :", choix: ["2 actions A pour 1 B", "1 action A pour 2 B", "1 pour 1", "3 pour 6 A"], bonne: 1, explication: "300 / 600 = 1/2." },
      { q: "La prime de fusion est égale à :", choix: ["Actif net apporté − augmentation de capital", "Capital de A − capital de B", "Nominal × nombre d'actions", "Dettes reprises"], bonne: 0, explication: "Elle est inscrite au compte 1121." },
      { q: "Dans un apport partiel d'actif, la société apporteuse :", choix: ["Disparaît", "Subsiste et reçoit des titres", "Est liquidée", "Rembourse ses actionnaires"], bonne: 1, explication: "Elle n'apporte qu'une branche d'activité." },
      { q: "Dans une scission :", choix: ["Le patrimoine est réparti entre plusieurs sociétés et la société scindée disparaît", "Deux sociétés fusionnent", "Une filiale est créée sans disparition", "Le capital est réduit"], bonne: 0, explication: "C'est l'inverse d'une fusion." },
    ],
  },

  11: {
    titre: "Introduction à la consolidation des comptes",
    resume: md`
## L'essentiel — La consolidation

- La **consolidation** présente le groupe comme une seule entité économique.
- **Contrôle exclusif** (majorité des droits de vote) → **intégration globale** : 100 % des postes repris, la part des autres actionnaires en **intérêts minoritaires**.
- **Contrôle conjoint** → **intégration proportionnelle** : quote-part de chaque poste.
- **Influence notable** (en général 20 à 50 %) → **mise en équivalence** : une seule ligne, quote-part des capitaux propres.
- En dessous de l'influence notable : titres non consolidés.
- **Écart d'acquisition** $= \text{coût des titres} - \text{quote-part de situation nette réévaluée}$.
- Les opérations **intragroupe** (créances, dettes, ventes, marges sur stocks) sont **éliminées**.
`,
    exercices: md`
### Exercice 2 — Périmètre et méthodes

La société M détient : 70 % de F1 ; 50 % de F2, contrôlée conjointement avec un autre groupe ; 30 % de F3 ; 10 % de F4.

1. Indiquez la méthode de consolidation de chaque société.
2. F1 a des capitaux propres de 1 000 000 DH dont un résultat de 200 000 DH. Calculez les intérêts minoritaires (dont la part dans le résultat).
3. F3 a des capitaux propres de 800 000 DH. Quel montant de titres mis en équivalence figure au bilan consolidé ?
4. F1 a vendu à M des marchandises avec une marge de 20 000 DH ; elles sont encore dans le stock de M. Que faut-il faire ?

<details><summary>Voir le corrigé</summary>

**1)** F1 : **intégration globale** ; F2 : **intégration proportionnelle** ; F3 : **mise en équivalence** ; F4 : non consolidée (titres de participation simples).

**2)** Intérêts minoritaires $= 30\% \times 1\,000\,000 = 300\,000$ DH, dont $30\% \times 200\,000 = 60\,000$ DH de résultat.

**3)** $30\% \times 800\,000 = 240\,000$ DH.

**4)** **Éliminer** la marge interne de 20 000 DH : on diminue le stock consolidé et le résultat consolidé de 20 000 DH (le groupe n'a rien vendu à l'extérieur).

</details>
`,
    qcm: [
      { q: "Une filiale détenue à 80 % est consolidée par :", choix: ["Mise en équivalence", "Intégration proportionnelle", "Intégration globale", "Aucune méthode"], bonne: 2, explication: "Contrôle exclusif." },
      { q: "L'influence notable correspond en général à une détention de :", choix: ["Moins de 5 %", "20 à 50 %", "Plus de 90 %", "Exactement 50 %"], bonne: 1, explication: "Méthode de la mise en équivalence." },
      { q: "Les intérêts minoritaires apparaissent avec :", choix: ["L'intégration globale", "La mise en équivalence", "L'intégration proportionnelle", "Aucune méthode"], bonne: 0, explication: "On reprend 100 % des postes puis on isole la part des tiers." },
      { q: "Titres achetés 900 000, quote-part de situation nette réévaluée 700 000 : l'écart d'acquisition est :", choix: ["200 000", "1 600 000", "700 000", "−200 000"], bonne: 0, explication: "900 000 − 700 000." },
      { q: "Une créance d'une filiale sur la société mère est, en consolidation :", choix: ["Conservée", "Éliminée avec la dette correspondante", "Doublée", "Transformée en capital"], bonne: 1, explication: "C'est une opération interne au groupe." },
    ],
  },
};
