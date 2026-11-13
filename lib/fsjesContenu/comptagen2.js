// Comptabilité générale 2 (S2, tronc commun Gestion et Économie) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Les travaux d'inventaire : principes et démarche",
    description: "Travaux d'inventaire en comptabilité générale 2 : inventaire physique et comptable, principes du CGNC, balances avant et après inventaire, extournes.",
    resume: md`
## L'essentiel — Les travaux d'inventaire

- La balance du 31/12 ne donne qu'un **résultat provisoire** : elle ignore l'usure des biens, les risques et le décalage entre paiement et consommation.
- **Travaux d'inventaire** : contrôles + écritures de clôture, pour une **image fidèle** (CGNC).
- Loi 9-88 : inventaire au moins **une fois par exercice**, livre d'inventaire, états de synthèse.
- Inventaire **physique** (comptages, constats) ≠ inventaire **comptable** (écritures d'ajustement).
- **Prudence** → provisions (pertes probables) ; **spécialisation des exercices** → amortissements et régularisations ; **coût historique** → pas de plus-value latente.
- Ordre : amortissements, cessions, provisions sur immobilisations et titres, stocks, créances, risques et charges, régularisations, IS.
- Balance avant inventaire → écritures d'inventaire → balance après inventaire → bilan et CPC.
- $\text{Résultat définitif} = \text{Résultat provisoire} + \sum \text{incidences}$.
- **Extournées** au 1ᵉʳ janvier : charges et produits constatés d'avance, charges à payer, produits à recevoir. **Non extournés** : amortissements, provisions, stocks.
`,
    exercices: md`
### Exercice 2 — Sens de l'incidence

Pour chaque écriture d'inventaire, indiquez si elle augmente (+) ou diminue (−) le résultat, et si elle sera extournée le 1ᵉʳ janvier :
1. Dotation aux amortissements d'un camion.
2. Stock final de marchandises supérieur au stock initial.
3. Loyer payé en décembre pour janvier.
4. Intérêts d'emprunt courus non échus.
5. Reprise d'une provision sur un client qui a finalement payé.
6. Commission due par un partenaire, non encore facturée.

<details><summary>Voir le corrigé</summary>

| N° | Incidence | Extourne |
|:--:|:--:|:--:|
| 1 | − | Non |
| 2 | + | Non (le stock final devient le stock initial) |
| 3 | + (charge constatée d'avance) | Oui |
| 4 | − (charge à payer) | Oui |
| 5 | + | Non |
| 6 | + (produit à recevoir) | Oui |

</details>

### Exercice 3 — Du résultat provisoire au résultat définitif

L'« Atelier Zellige de Fès » a un résultat provisoire de 80 000 DH. Informations d'inventaire : a) dotations aux amortissements 14 000 DH ; b) stock initial de marchandises 50 000 DH, stock final 42 000 DH ; c) loyer payé d'avance, part de N+1 : 4 500 DH ; d) intérêts courus à payer : 1 800 DH ; e) provision de 3 000 DH devenue sans objet.

Calculez le résultat définitif.

<details><summary>Voir le corrigé</summary>

| Élément | Incidence |
|---|---:|
| a) Dotations | − 14 000 |
| b) Variation de stock : $SI - SF = 8\,000$ de charge en plus | − 8 000 |
| c) Charge constatée d'avance | + 4 500 |
| d) Charge à payer | − 1 800 |
| e) Reprise de provision | + 3 000 |
| **Total** | **− 16 300** |

Résultat définitif : $80\,000 - 16\,300 = \mathbf{63\,700}$ DH. La baisse du stock pèse sur le résultat : une partie des marchandises en stock au début a été vendue, son coût devient une charge de l'exercice.

</details>
`,
    qcm: [
      { q: "La balance établie au 31 décembre avant les écritures d'inventaire donne :", choix: ["Le résultat définitif", "Un résultat provisoire", "Le résultat fiscal", "Le bilan d'ouverture"], bonne: 1, explication: "Les écritures d'inventaire modifient encore les charges et les produits." },
      { q: "La loi marocaine qui impose un inventaire au moins une fois par exercice est la loi :", choix: ["9-88", "17-95", "5-96", "15-95"], bonne: 0, explication: "Loi relative aux obligations comptables des commerçants." },
      { q: "Le comptage des marchandises dans l'entrepôt relève de :", choix: ["L'inventaire comptable", "L'inventaire physique", "La balance après inventaire", "L'extourne"], bonne: 1, explication: "C'est un constat extracomptable." },
      { q: "Constater une provision pour un client en difficulté applique le principe :", choix: ["De prudence", "De coût historique", "De permanence des méthodes", "De continuité"], bonne: 0, explication: "Une perte probable est constatée dès qu'elle est connue." },
      { q: "Rattacher à N les intérêts courus d'un emprunt payés en N+1 applique le principe :", choix: ["De prudence", "De spécialisation des exercices", "De clarté", "De coût historique"], bonne: 1, explication: "Chaque exercice supporte ses propres charges." },
      { q: "Un terrain acheté 500 000 DH vaut 650 000 DH à la clôture. On :", choix: ["Constate un produit de 150 000 DH", "Ne constate rien", "Constate une provision", "Amortit le terrain"], bonne: 1, explication: "Coût historique et prudence : pas de gain latent." },
      { q: "Quelle écriture n'est pas extournée le 1er janvier ?", choix: ["Une charge à payer", "Un produit constaté d'avance", "Une dotation aux amortissements", "Une charge constatée d'avance"], bonne: 2, explication: "Les amortissements sont définitifs." },
      { q: "Le stock final de marchandises de N devient :", choix: ["Une charge de N+1", "Le stock initial de N+1", "Une provision", "Un produit de N+1"], bonne: 1, explication: "Il sera annulé à l'inventaire de N+1." },
      { q: "Un stock final supérieur au stock initial :", choix: ["Diminue le résultat", "Augmente le résultat", "Est sans effet", "Augmente les achats"], bonne: 1, explication: "La variation 6114 devient créditrice et réduit les charges." },
      { q: "Dans la balance avant inventaire, le compte 3111 Marchandises indique en général :", choix: ["Le stock final", "Le stock initial", "Les achats de l'année", "Les ventes"], bonne: 1, explication: "En inventaire intermittent, les achats vont en charges." },
    ],
  },

  2: {
    titre: "L'amortissement des immobilisations : notion et mode linéaire",
    description: "Amortissement linéaire selon le CGNC : coût d'acquisition, taux, prorata temporis, plan d'amortissement, dotation 6193 / 28, non-valeurs et bilan.",
    resume: md`
## L'essentiel — L'amortissement linéaire

- Coût d'acquisition = prix d'achat net **HT** + frais accessoires (transport, installation) ; la TVA récupérable va en **34551**.
- Acquisition : D 23.. et D 34551 / C **4481** Dettes sur acquisitions d'immobilisations (ou 5141).
- **Amortissement** : dépréciation **irréversible** (usage, temps, obsolescence), répartie sur la durée d'utilisation.
- Non amortissables : terrains, fonds commercial (en règle générale), titres, prêts.
- $t = 100/n$ ; $\text{Annuité} = VO \times t$ ; **prorata temporis** à partir de la **mise en service**.
- Première annuité : $VO \times t \times \text{mois}/12$ ; le plan s'étend alors sur $n+1$ exercices.
- $VNA = VO - \text{amortissements cumulés}$.
- Écriture : D **6193** (corporelles), 6192 (incorporelles), 6191 (non-valeurs) / C **28..** (2340 → 28340).
- Non-valeurs (frais de constitution…) : annuités égales sur **5 ans au plus**.
- Bilan : Brut − Amortissements = Net.
`,
    exercices: md`
### Exercice 2 — Acquisition et première dotation

Le 15 mars N, la société « Souss Primeurs » acquiert un véhicule utilitaire : prix catalogue 200 000 DH HT, remise de 5 %, transport 2 000 DH HT, TVA 20 %, paiement par virement. Durée d'utilisation : 5 ans ; mise en service immédiate.

1. Calculez le coût d'acquisition et enregistrez l'acquisition.
2. Calculez la dotation de N (prorata en mois et demi-mois).
3. Calculez la VNA au 31 décembre N+1.

<details><summary>Voir le corrigé</summary>

**1)** Prix net : $200\,000 \times 0{,}95 = 190\,000$ ; VO $= 190\,000 + 2\,000 = \mathbf{192\,000}$ DH ; TVA $= 192\,000 \times 20\,\% = 38\,400$ DH.

D 2340 Matériel de transport 192 000 ; D 34551 État – TVA récupérable sur les immobilisations 38 400 / C 5141 Banques 230 400.

**2)** Annuité complète : $192\,000 / 5 = 38\,400$ DH. Du 15 mars au 31 décembre : 9,5 mois. Dotation N : $38\,400 \times 9{,}5/12 = \mathbf{30\,400}$ DH (D 6193 / C 28340).

**3)** Cumul au 31/12/N+1 : $30\,400 + 38\,400 = 68\,800$ ; VNA $= 192\,000 - 68\,800 = \mathbf{123\,200}$ DH.

</details>

### Exercice 3 — Retrouver la date de mise en service

Au 31 décembre N, une machine (VO 120 000 DH, taux linéaire 10 %) présente des amortissements cumulés de 39 000 DH. Déterminez sa date de mise en service, puis l'année de la dernière dotation.

<details><summary>Voir le corrigé</summary>

Annuité complète : $120\,000 \times 10\,\% = 12\,000$ DH. Durée d'amortissement écoulée : $39\,000 / 12\,000 = 3{,}25$ ans, soit 3 ans et 3 mois. Les trois exercices N−2, N−1 et N sont complets (36 000 DH) ; la première annuité de N−3 vaut 3 000 DH, soit 3 mois : mise en service le **1ᵉʳ octobre N−3**.

Le bien sera totalement amorti 10 ans plus tard, le 30 septembre N+7 : la dernière dotation, en N+7, sera de $12\,000 \times 9/12 = 9\,000$ DH.

</details>
`,
    qcm: [
      { q: "Le coût d'acquisition d'une machine comprend :", choix: ["Le prix TTC", "Le prix HT et les frais d'installation", "Le prix HT seulement, jamais les frais", "Le prix HT et la TVA récupérable"], bonne: 1, explication: "Les frais accessoires font partie du coût ; la TVA récupérable non." },
      { q: "La dette envers le fournisseur d'une immobilisation s'enregistre au compte :", choix: ["4411", "4481", "3421", "1481"], bonne: 1, explication: "Dettes sur acquisitions d'immobilisations." },
      { q: "Lequel de ces biens n'est pas amortissable ?", choix: ["Un camion", "Un terrain", "Un logiciel", "Des frais de constitution"], bonne: 1, explication: "Un terrain ne s'use pas." },
      { q: "Un matériel amorti sur 8 ans a un taux linéaire de :", choix: ["8 %", "12,5 %", "15 %", "10 %"], bonne: 1, explication: "100 / 8 = 12,5 %." },
      { q: "Une machine de 60 000 DH (taux 10 %) mise en service le 1er septembre N : dotation de N ?", choix: ["6 000 DH", "2 000 DH", "4 000 DH", "1 500 DH"], bonne: 1, explication: "6 000 × 4/12 = 2 000 DH." },
      { q: "La dotation aux amortissements d'un véhicule se passe au débit du compte :", choix: ["28340", "6193", "2340", "6191"], bonne: 1, explication: "Le compte 28340 est crédité." },
      { q: "Le compte d'amortissement du mobilier de bureau 2351 est :", choix: ["23518", "28351", "29351", "6351"], bonne: 1, explication: "On insère un 8 après le 2." },
      { q: "Les frais de constitution s'amortissent sur une durée maximale de :", choix: ["3 ans", "5 ans", "10 ans", "20 ans"], bonne: 1, explication: "Immobilisations en non-valeurs : 5 ans au plus." },
      { q: "Un bien de 50 000 DH a 32 000 DH d'amortissements cumulés : sa VNA est de :", choix: ["82 000 DH", "18 000 DH", "32 000 DH", "50 000 DH"], bonne: 1, explication: "VNA = VO − cumul." },
      { q: "Au bilan, la colonne « Net » d'une immobilisation correspond à :", choix: ["Sa valeur de marché", "Sa VNA", "Son prix TTC", "Son annuité"], bonne: 1, explication: "Brut − amortissements et provisions." },
    ],
  },

  3: {
    titre: "L'amortissement dégressif",
    description: "Amortissement dégressif au Maroc : coefficients 1,5, 2 et 3, taux, annuités sur la valeur résiduelle, prorata du mois d'acquisition, passage au linéaire.",
    resume: md`
## L'essentiel — L'amortissement dégressif

- Annuités **décroissantes** : forte usure au début, avantage de **trésorerie** (moins d'impôt les premières années).
- Réservé aux **biens d'équipement** ; exclus : **immeubles** et **véhicules de transport de personnes**.
- $\text{Taux dégressif} = (100/n) \times \text{coefficient}$.
- Coefficients : **1,5** (3-4 ans), **2** (5-6 ans), **3** (plus de 6 ans).
- $\text{Annuité} = VNA_{\text{début}} \times \text{taux dégressif}$ (jamais sur la VO après la 1ʳᵉ année).
- 1ʳᵉ annuité : prorata en mois **depuis le 1ᵉʳ jour du mois d'acquisition**.
- Contrôle : $VNA_{\text{début}} / \text{années restantes}$ ; dès que le dégressif est inférieur → **passage au linéaire** jusqu'à la fin.
- Même écriture qu'en linéaire : D 6193 / C 28...
- Total amorti identique au linéaire ; seule la répartition change. Écart fiscal/comptable → dérogatoires (S5).
`,
    exercices: md`
### Exercice 2 — Première année avec prorata

Le 15 septembre N, une entreprise acquiert un matériel de 96 000 DH HT, durée 4 ans, amorti en dégressif.

1. Calculez le taux dégressif et l'annuité de N.
2. Calculez l'annuité de N+1.
3. Quelle aurait été la dotation de N en linéaire ?

<details><summary>Voir le corrigé</summary>

**1)** Taux : $25\,\% \times 1{,}5 = 37{,}5\,\%$. Prorata depuis le **1ᵉʳ septembre** : 4 mois. Annuité N : $96\,000 \times 37{,}5\,\% \times 4/12 = \mathbf{12\,000}$ DH.

**2)** VNA début N+1 : $96\,000 - 12\,000 = 84\,000$ ; annuité N+1 : $84\,000 \times 37{,}5\,\% = \mathbf{31\,500}$ DH.

**3)** En linéaire, le prorata part de la date de mise en service (15 septembre), soit 3,5 mois : $96\,000 / 4 \times 3{,}5/12 = \mathbf{7\,000}$ DH.

</details>

### Exercice 3 — Retrouver les données d'un plan

Un matériel amorti en dégressif présente une première annuité complète de 45 000 DH et une deuxième annuité de 31 500 DH.

1. Retrouvez le taux dégressif, la valeur d'origine et la durée d'utilisation.
2. Calculez la troisième annuité et vérifiez s'il faut passer au linéaire.

<details><summary>Voir le corrigé</summary>

**1)** La deuxième annuité est calculée sur $VO - 45\,000$ au même taux que la première, calculée sur $VO$ : $31\,500 / 45\,000 = 0{,}7 = 1 - \text{taux}$, donc taux $= \mathbf{30\,\%}$. $VO = 45\,000 / 0{,}30 = \mathbf{150\,000}$ DH. Un taux de 30 % correspond au coefficient 3 et à un taux linéaire de 10 % : durée **10 ans**.

**2)** VNA début de la 3ᵉ année : $150\,000 - 45\,000 - 31\,500 = 73\,500$ ; annuité dégressive $73\,500 \times 30\,\% = 22\,050$ DH ; contrôle linéaire $73\,500 / 8 = 9\,187{,}50$ DH. On reste en **dégressif** : 22 050 DH.

</details>
`,
    qcm: [
      { q: "Le coefficient fiscal applicable à un bien amorti sur 5 ans est :", choix: ["1,5", "2", "2,5", "3"], bonne: 1, explication: "5 ou 6 ans : coefficient 2." },
      { q: "Le taux dégressif d'un bien amorti sur 10 ans est :", choix: ["10 %", "20 %", "30 %", "25 %"], bonne: 2, explication: "10 % × 3 = 30 %." },
      { q: "Lequel de ces biens ne peut pas être amorti en dégressif ?", choix: ["Une machine-outil", "Un bâtiment industriel", "Un camion de livraison", "Un serveur informatique"], bonne: 1, explication: "Les immeubles sont exclus." },
      { q: "L'annuité dégressive se calcule sur :", choix: ["La valeur d'origine chaque année", "La VNA de début d'exercice", "La valeur de marché", "Le prix TTC"], bonne: 1, explication: "C'est ce qui rend les annuités décroissantes." },
      { q: "Un bien acquis le 20 juin N en dégressif : nombre de mois retenus pour N :", choix: ["6 mois et 10 jours", "7 mois", "6 mois", "12 mois"], bonne: 1, explication: "On part du 1er juin : juin à décembre." },
      { q: "On passe au linéaire lorsque :", choix: ["La VNA devient nulle", "L'annuité dégressive devient inférieure à la VNA divisée par les années restantes", "On arrive à la moitié de la durée", "Le bien est cédé"], bonne: 1, explication: "On garde ensuite cette annuité jusqu'à la fin." },
      { q: "Un bien de 100 000 DH, taux dégressif 40 % : annuité de la 2e année (1re année complète) ?", choix: ["40 000 DH", "24 000 DH", "20 000 DH", "16 000 DH"], bonne: 1, explication: "(100 000 − 40 000) × 40 %." },
      { q: "Par rapport au linéaire, le dégressif les premières années :", choix: ["Augmente le résultat", "Diminue le résultat et l'impôt", "Est sans effet", "Augmente l'impôt"], bonne: 1, explication: "Les dotations sont plus fortes au début." },
      { q: "Sur toute la durée du plan, le total amorti en dégressif est :", choix: ["Supérieur à la VO", "Égal à la VO", "Inférieur à la VO", "Égal à la VO multipliée par le coefficient"], bonne: 1, explication: "Seule la répartition change." },
      { q: "L'écriture de dotation d'un bien amorti en dégressif est :", choix: ["D 6193 / C 28..", "D 28.. / C 6193", "D 6594 / C 1351", "D 2332 / C 6193"], bonne: 0, explication: "Même écriture qu'en linéaire." },
    ],
  },

  4: {
    titre: "Les cessions d'immobilisations",
    description: "Cession d'immobilisation selon le CGNC : dotation complémentaire, sortie 6513, prix 7513 et 3481, VNA, plus ou moins-value, mise au rebut, exercices corrigés.",
    resume: md`
## L'essentiel — Les cessions d'immobilisations

- Sorties : **cession**, **mise au rebut**, **destruction** ; toujours en **non courant** (651 / 751).
- $VNA = VO - \text{amortissements cumulés à la date de cession}$.
- $\text{Résultat de cession} = \text{Prix} - VNA$ (plus-value si positif, moins-value si négatif).
- Écriture 1 : **dotation complémentaire** du 1ᵉʳ janvier à la date de cession (D 6193 / C 28..).
- Écriture 2 : D **28..** (cumul) + D **6513** (VNA) / C **23..** (VO totale).
- Écriture 3 : D **3481** (ou 5141) / C **7513** (prix) ; à l'encaissement D 5141 / C 3481.
- Bien totalement amorti mis au rebut : D 28.. / C 23.., sans effet sur le résultat.
- Incidence totale = − dotation complémentaire − VNA + prix.
- Prix toujours **HT** dans les exercices ; TVA sur cession : cours de fiscalité.
`,
    exercices: md`
### Exercice 2 — Cession avec plus-value

Un camion acquis le 1ᵉʳ avril N−3 pour 240 000 DH HT (linéaire, 5 ans) est cédé le 30 septembre N pour 120 000 DH, payables le 31 janvier N+1.

1. Calculez la VNA à la date de cession.
2. Passez les écritures de N.
3. Calculez le résultat de cession et l'incidence totale sur le résultat de N. Que figure-t-il au bilan du 31/12/N ?

<details><summary>Voir le corrigé</summary>

**1)** Annuité : 48 000 DH. N−3 (9 mois) : 36 000 ; N−2 et N−1 : 96 000 ; N (9 mois) : 36 000. Cumul : **168 000** DH ; VNA : $240\,000 - 168\,000 = \mathbf{72\,000}$ DH.

**2)** D 6193 / C 28340 : 36 000 ; D 28340 168 000 et D 6513 72 000 / C 2340 240 000 ; D 3481 / C 7513 : 120 000.

**3)** Plus-value : $120\,000 - 72\,000 = \mathbf{+48\,000}$ DH. Incidence totale : $-36\,000 - 72\,000 + 120\,000 = \mathbf{+12\,000}$ DH. Au bilan du 31/12/N, la créance de 120 000 DH (3481) figure à l'actif circulant, parmi les autres débiteurs.

</details>

### Exercice 3 — Retrouver la valeur d'origine

Une machine acquise le 1ᵉʳ janvier N−6 et amortie en linéaire au taux de 10 % est cédée le 31 décembre N pour 30 000 DH. La plus-value est de 6 000 DH. Retrouvez la VNA, la valeur d'origine et les amortissements cumulés.

<details><summary>Voir le corrigé</summary>

VNA $=$ prix $-$ plus-value $= 30\,000 - 6\,000 = \mathbf{24\,000}$ DH. De N−6 à N, la machine a été amortie 7 ans à 10 % : cumul $= 0{,}7 \times VO$, donc $VNA = 0{,}3 \times VO = 24\,000$ et $VO = \mathbf{80\,000}$ DH. Amortissements cumulés : $0{,}7 \times 80\,000 = \mathbf{56\,000}$ DH.

</details>
`,
    qcm: [
      { q: "La VNA d'une immobilisation cédée est enregistrée au débit du compte :", choix: ["7513", "6513", "2340", "3481"], bonne: 1, explication: "VNA des immobilisations corporelles cédées." },
      { q: "Le prix de cession d'une machine est crédité au compte :", choix: ["7111", "7513", "6513", "7121"], bonne: 1, explication: "Produits des cessions des immobilisations corporelles." },
      { q: "Le prix de cession payable à 60 jours est débité au compte :", choix: ["3421", "3481", "4481", "5141"], bonne: 1, explication: "Créances sur cessions d'immobilisations." },
      { q: "Avant de sortir un bien cédé le 30 avril, il faut :", choix: ["Annuler tous ses amortissements", "Passer la dotation du 1er janvier au 30 avril", "Constater une provision", "Passer une dotation pour l'année entière"], bonne: 1, explication: "Dotation complémentaire au prorata." },
      { q: "VO 100 000, amortissements cumulés 70 000, prix 25 000 : résultat de cession ?", choix: ["+ 25 000", "− 5 000", "+ 5 000", "− 45 000"], bonne: 1, explication: "25 000 − 30 000." },
      { q: "À la sortie du bien, le compte d'immobilisation est crédité pour :", choix: ["La VNA", "La valeur d'origine", "Le prix de cession", "Les amortissements"], bonne: 1, explication: "Il doit être soldé." },
      { q: "Dans le CPC, la VNA et le prix de cession figurent dans le :", choix: ["Résultat d'exploitation", "Résultat financier", "Résultat non courant", "Résultat net seulement"], bonne: 2, explication: "Comptes 651 et 751." },
      { q: "La mise au rebut d'un bien totalement amorti :", choix: ["Diminue le résultat", "Est sans effet sur le résultat", "Augmente le résultat", "Exige une provision"], bonne: 1, explication: "VNA nulle : D 28.. / C 23.." },
      { q: "La dotation complémentaire de l'année de cession est une charge :", choix: ["Non courante", "D'exploitation", "Financière", "Hors CPC"], bonne: 1, explication: "Compte 6193." },
      { q: "Si le prix de cession est inférieur à la VNA, on a :", choix: ["Une plus-value", "Une moins-value", "Une provision", "Un produit à recevoir"], bonne: 1, explication: "Résultat de cession négatif." },
    ],
  },

  5: {
    titre: "Les provisions pour dépréciation des immobilisations et des titres",
    description: "Provisions pour dépréciation des terrains, du fonds commercial, des titres de participation et des TVP : calcul, dotation, reprise, cession, exercices corrigés.",
    resume: md`
## L'essentiel — Provisions sur immobilisations et titres

- **Amortissement** = perte irréversible, plan fixé ; **provision** = perte **probable et réversible**, revue à chaque inventaire (prudence).
- Provision nécessaire = valeur comptable − valeur actuelle (si positif).
- Nécessaire > existante → **dotation** du complément ; nécessaire < existante → **reprise** de l'excédent.
- Terrain : D **6194** / C **2931** ; reprise D 2931 / C **7194**. Fonds commercial : 6194 / 2920.
- Titres de participation : D **6392** / C **2951** ; reprise **7392** (financier).
- TVP : D **6394** / C **3950** ; reprise **7394** ; cours d'inventaire = **cours moyen du dernier mois**.
- Calcul **ligne par ligne** : pas de compensation entre plus et moins-values latentes.
- Plus-value latente : jamais comptabilisée (coût historique).
- Cession d'un bien provisionné : reprise de la provision (D 29.. / C 7596).
- Bilan : Brut − Provisions = Net.
`,
    exercices: md`
### Exercice 2 — Des actions sur trois inventaires

Une entreprise détient 1 000 actions C, achetées 85 DH l'action (TVP). Cours moyen du dernier mois : 78 DH fin N ; 81 DH fin N+1 ; 90 DH fin N+2.

Passez les écritures d'inventaire de chaque exercice et indiquez la valeur nette au bilan.

<details><summary>Voir le corrigé</summary>

| Exercice | Provision nécessaire | Existante | Écriture | Net au bilan |
|---|---:|---:|---|---:|
| N | $1\,000 \times 7 = 7\,000$ | 0 | D 6394 / C 3950 : 7 000 | 78 000 |
| N+1 | $1\,000 \times 4 = 4\,000$ | 7 000 | D 3950 / C 7394 : 3 000 | 81 000 |
| N+2 | 0 (cours > coût) | 4 000 | D 3950 / C 7394 : 4 000 | 85 000 |

En N+2, les titres restent à leur coût de 85 000 DH : la plus-value latente de 5 000 DH n'est pas constatée.

</details>

### Exercice 3 — Titres de participation et lecture du bilan

Une société détient 1 500 titres de participation acquis 200 DH l'un. Valeur d'usage : 170 DH fin N, 185 DH fin N+1, 210 DH fin N+2.

1. Calculez la provision nécessaire et l'ajustement de chaque exercice.
2. Dans quel résultat du CPC figurent ces écritures ?

<details><summary>Voir le corrigé</summary>

**1)**

| Exercice | Provision nécessaire | Ajustement |
|---|---:|---|
| N | $1\,500 \times 30 = 45\,000$ | Dotation 45 000 (D 6392 / C 2951) |
| N+1 | $1\,500 \times 15 = 22\,500$ | Reprise 22 500 (D 2951 / C 7392) |
| N+2 | 0 | Reprise 22 500 (D 2951 / C 7392) |

**2)** Dans le **résultat financier** : dotations 639 et reprises 739. Valeur nette au bilan : 255 000 DH fin N, 277 500 DH fin N+1, 300 000 DH fin N+2.

</details>
`,
    qcm: [
      { q: "Un terrain qui perd de la valeur fait l'objet :", choix: ["D'un amortissement", "D'une provision pour dépréciation", "D'une cession", "D'une régularisation"], bonne: 1, explication: "Il n'est pas amortissable." },
      { q: "La provision pour dépréciation d'un terrain est créditée au compte :", choix: ["2831", "2931", "3911", "1511"], bonne: 1, explication: "Provisions pour dépréciation des terrains." },
      { q: "Provision nécessaire 25 000 DH, provision existante 40 000 DH : on passe :", choix: ["Une dotation de 25 000", "Une reprise de 15 000", "Une dotation de 15 000", "Une reprise de 40 000"], bonne: 1, explication: "On ajuste à la baisse." },
      { q: "Les TVP cotés sont évalués à l'inventaire au :", choix: ["Cours du 1er janvier", "Cours moyen du dernier mois", "Coût d'acquisition seulement", "Cours le plus haut de l'année"], bonne: 1, explication: "Règle du CGNC pour les titres cotés." },
      { q: "La dotation aux provisions sur TVP se passe au compte :", choix: ["6194", "6394", "6196", "6392"], bonne: 1, explication: "Charge financière." },
      { q: "Actions A : moins-value latente 8 000 ; actions B : plus-value latente 10 000. On provisionne :", choix: ["0", "8 000", "2 000", "18 000"], bonne: 1, explication: "Pas de compensation entre lignes." },
      { q: "La reprise d'une provision sur titres de participation se passe au compte :", choix: ["7194", "7392", "7394", "7196"], bonne: 1, explication: "Reprises sur provisions pour dépréciation des immobilisations financières." },
      { q: "La différence essentielle entre amortissement et provision est que la provision :", choix: ["Est définitive", "Peut être reprise", "Ne touche pas le résultat", "Concerne seulement les stocks"], bonne: 1, explication: "La perte est probable et réversible." },
      { q: "Un terrain provisionné est vendu ; la provision :", choix: ["Reste au bilan", "Est reprise", "Devient un amortissement", "Est transférée en capital"], bonne: 1, explication: "Elle devient sans objet." },
      { q: "Terrain coût 500 000, valeur actuelle 560 000, provision existante 20 000 :", choix: ["Produit de 60 000", "Reprise de 20 000", "Dotation de 60 000", "Rien"], bonne: 1, explication: "La provision devient inutile ; aucun gain au-delà." },
    ],
  },

  6: {
    titre: "L'inventaire des stocks et leur dépréciation",
    description: "Inventaire des stocks selon le CGNC : annulation du stock initial, stock final, comptes 6114, 6124 et 7132, provisions 391 sur stocks, exercice corrigé.",
    resume: md`
## L'essentiel — Les stocks à l'inventaire

- **Inventaire intermittent** : achats en charges (6111, 6121) ; le compte de stock garde le **SI** jusqu'au 31/12.
- Annulation du SI : D **6114** (ou 6124) / C 3111 (ou 3121) ; constatation du SF : D 3111 / C 6114.
- $\text{Achats revendus} = \text{Achats} + SI - SF$ ; une hausse du stock **augmente** le résultat.
- Produits fabriqués : D **7132** / C 3151 (SI) ; D 3151 / C 7132 (SF) ; 7132 est un **produit**.
- Évaluation au **coût** (acquisition ou production) ; CMUP ou premier entré-premier sorti ; permanence des méthodes.
- Valeur actuelle = prix de vente probable − frais de vente.
- Provision = coût − valeur actuelle : D **6196** / C **391..** (3911 marchandises, 3912 matières, 3915 produits finis).
- Pratique : reprise totale de l'ancienne provision (D 391.. / C **7196**) puis nouvelle dotation.
- Bilan : stock brut − provisions = stock net.
`,
    exercices: md`
### Exercice 2 — Achats revendus et marge

Une entreprise commerciale a acheté pour 600 000 DH de marchandises en N ; SI 70 000 DH, SF 85 000 DH ; ventes 900 000 DH.

1. Passez les écritures de stocks.
2. Calculez les achats revendus et la marge brute.

<details><summary>Voir le corrigé</summary>

**1)** D 6114 / C 3111 : 70 000 ; D 3111 / C 6114 : 85 000.

**2)** Achats revendus : $600\,000 + 70\,000 - 85\,000 = \mathbf{585\,000}$ DH. Marge brute : $900\,000 - 585\,000 = \mathbf{315\,000}$ DH.

</details>

### Exercice 3 — Provisions sur deux inventaires

Fin N−1, une provision de 9 000 DH a été constituée sur des marchandises. Fin N, les articles dépréciés du stock final sont les suivants : article X, coût 12 000 DH, prix de vente probable 10 000 DH, frais de vente 500 DH ; article Y, coût 7 000 DH, prix de vente probable 8 000 DH, frais de vente 400 DH.

1. Calculez la provision nécessaire fin N.
2. Passez les écritures selon la pratique « reprise totale puis nouvelle dotation », puis indiquez l'écriture unique d'ajustement.

<details><summary>Voir le corrigé</summary>

**1)** X : valeur actuelle $10\,000 - 500 = 9\,500$ ; provision $12\,000 - 9\,500 = 2\,500$. Y : valeur actuelle $8\,000 - 400 = 7\,600$ > coût : pas de provision. Provision nécessaire : **2 500 DH**.

**2)** D 3911 / C 7196 : 9 000 ; D 6196 / C 3911 : 2 500. Écriture unique équivalente : reprise nette D 3911 / C 7196 : **6 500** DH. Dans les deux cas, le résultat augmente de 6 500 DH.

</details>
`,
    qcm: [
      { q: "En inventaire intermittent, les achats de marchandises de l'année sont enregistrés :", choix: ["Au compte 3111", "Au compte 6111", "Au compte 7111", "Au compte 4411 seulement"], bonne: 1, explication: "Le stock n'est mis à jour qu'à l'inventaire." },
      { q: "L'annulation du stock initial de marchandises se fait par :", choix: ["D 3111 / C 6114", "D 6114 / C 3111", "D 7132 / C 3111", "D 6111 / C 3111"], bonne: 1, explication: "Le SI devient une charge de l'exercice." },
      { q: "SI 50 000, SF 65 000 de marchandises : la variation 6114 est :", choix: ["Débitrice de 15 000", "Créditrice de 15 000", "Débitrice de 65 000", "Nulle"], bonne: 1, explication: "SI − SF = − 15 000." },
      { q: "Achats 400 000, SI 30 000, SF 45 000 : achats revendus ?", choix: ["415 000", "385 000", "400 000", "475 000"], bonne: 1, explication: "400 000 + 30 000 − 45 000." },
      { q: "La variation des stocks de produits finis s'enregistre au compte :", choix: ["6114", "6124", "7132", "7111"], bonne: 2, explication: "C'est un compte de produit." },
      { q: "Produits finis : SI 100 000, SF 80 000. Effet sur le résultat ?", choix: ["+ 20 000", "− 20 000", "Aucun", "+ 80 000"], bonne: 1, explication: "La production stockée est négative." },
      { q: "La valeur actuelle d'un stock destiné à la vente est en général :", choix: ["Son coût d'achat", "Son prix de vente probable moins les frais de vente", "Son prix de vente TTC", "Son prix de vente sans déduction"], bonne: 1, explication: "C'est ce que l'entreprise en retirera." },
      { q: "La dotation aux provisions pour dépréciation des stocks se passe au compte :", choix: ["6194", "6196", "6195", "6394"], bonne: 1, explication: "Actif circulant." },
      { q: "La provision sur produits finis est créditée au compte :", choix: ["3911", "3915", "2931", "3942"], bonne: 1, explication: "Provisions pour dépréciation des produits finis." },
      { q: "Une hausse du stock final de marchandises :", choix: ["Diminue le résultat", "Augmente le résultat", "N'a pas d'effet", "Augmente les achats"], bonne: 1, explication: "Les achats revendus diminuent." },
    ],
  },

  7: {
    titre: "Les créances douteuses et irrécouvrables",
    description: "Créances douteuses selon le CGNC : reclassement en 3424, provision sur le HT, ajustement, perte 6182 et TVA, tableau de suivi des clients, exercices corrigés.",
    resume: md`
## L'essentiel — Créances douteuses et irrécouvrables

- Créance **saine** (rien), **douteuse** (paiement incertain → provision), **irrécouvrable** (perte certaine → solde).
- Reclassement au **TTC** : D **3424** Clients douteux ou litigieux / C 3421 Clients.
- $\text{Provision} = \dfrac{\text{TTC}}{1+t} \times \%\ \text{de perte}$ : toujours sur le **HT** (la TVA n'est pas perdue).
- Dotation : D **6196** / C **3942** ; reprise : D 3942 / C **7196**.
- Chaque année : provision nécessaire sur le **solde restant** ; ajustement = nécessaire − existante.
- Encaissement partiel : D 5141 / C 3424 (TTC).
- Perte définitive : D **6182** (HT) + D **4455** (TVA) / C 3424 (TTC), puis reprise de **toute** la provision.
- Perte exceptionnelle : 6585 Créances devenues irrécouvrables (non courant).
- Fiscal : provision maintenue si recours en justice dans les **12 mois** suivant la clôture.
`,
    exercices: md`
### Exercice 2 — Un client suivi sur trois exercices

Fin N, le client Tazi doit 54 000 DH TTC (TVA 20 %) ; il devient douteux, perte probable 30 %. En N+1, il verse 18 000 DH ; fin N+1, la perte probable est estimée à 60 % du solde. En N+2, il verse 6 000 DH puis le solde est déclaré irrécouvrable.

1. Passez les écritures de N, N+1 et N+2.
2. Calculez l'incidence sur le résultat de chaque exercice et le total. Commentez.

<details><summary>Voir le corrigé</summary>

**N** : D 3424 / C 3421 : 54 000 ; provision $45\,000 \times 30\,\% = 13\,500$ : D 6196 / C 3942 13 500. Incidence : − 13 500.

**N+1** : D 5141 / C 3424 : 18 000 ; solde 36 000 TTC, soit 30 000 HT ; provision nécessaire $30\,000 \times 60\,\% = 18\,000$ ; dotation 4 500 : D 6196 / C 3942. Incidence : − 4 500.

**N+2** : D 5141 / C 3424 : 6 000 ; solde 30 000 TTC irrécouvrable : D 6182 25 000 et D 4455 5 000 / C 3424 30 000 ; reprise D 3942 / C 7196 : 18 000. Incidence : $-25\,000 + 18\,000 = -7\,000$.

Total sur trois ans : $-13\,500 - 4\,500 - 7\,000 = \mathbf{-25\,000}$ DH, exactement la perte hors taxes définitive. Les provisions ont seulement **anticipé** la perte sur les exercices où le risque est apparu.

</details>

### Exercice 3 — Perte sans provision et perte totale probable

1. Un client sain, qui doit 13 200 DH TTC, disparaît sans laisser d'adresse ; la créance est jugée irrécouvrable. Passez l'écriture.
2. Un autre client, qui doit 9 600 DH TTC, est en liquidation ; le liquidateur annonce qu'aucun paiement n'est à espérer, mais la procédure n'est pas close. Que faites-vous ?

<details><summary>Voir le corrigé</summary>

**1)** HT $= 13\,200 / 1{,}2 = 11\,000$ ; TVA 2 200. D 6182 11 000 et D 4455 2 200 / C 3421 13 200.

**2)** La perte est quasi certaine mais pas encore définitive : reclassement D 3424 / C 3421 9 600, puis provision à **100 % du HT** : D 6196 / C 3942 **8 000** DH. La perte sera constatée, avec la reprise de la provision, à la clôture de la liquidation.

</details>
`,
    qcm: [
      { q: "Une créance douteuse est reclassée au compte :", choix: ["3421", "3424", "3942", "6182"], bonne: 1, explication: "Clients douteux ou litigieux." },
      { q: "Le reclassement en créance douteuse se fait pour le montant :", choix: ["HT", "TTC", "De la provision", "De la TVA"], bonne: 1, explication: "C'est la somme due par le client." },
      { q: "Créance 24 000 TTC (TVA 20 %), perte probable 25 % : provision ?", choix: ["6 000", "5 000", "4 800", "4 000"], bonne: 1, explication: "20 000 × 25 %." },
      { q: "La provision se calcule sur le HT parce que :", choix: ["La loi l'impose sans raison", "La TVA non encaissée vient en diminution de la TVA due", "La TVA est une charge", "Le client paie toujours la TVA"], bonne: 1, explication: "La seule vraie perte est le HT." },
      { q: "Provision existante 12 000, provision nécessaire 7 000 :", choix: ["Dotation 7 000", "Reprise 5 000", "Dotation 5 000", "Reprise 12 000"], bonne: 1, explication: "On ajuste à la baisse." },
      { q: "La reprise de provision sur clients se passe au crédit du compte :", choix: ["7196", "7194", "7394", "7195"], bonne: 0, explication: "Reprises sur provisions pour dépréciation de l'actif circulant." },
      { q: "La perte définitive sur une créance se débite (HT) au compte :", choix: ["6196", "6182", "3942", "6513"], bonne: 1, explication: "Pertes sur créances irrécouvrables." },
      { q: "Lors d'une perte définitive, la TVA correspondante est débitée au compte :", choix: ["34552", "4455", "4456", "3458"], bonne: 1, explication: "Elle diminue la TVA facturée." },
      { q: "Quand une créance provisionnée devient irrécouvrable, la provision :", choix: ["Reste au bilan", "Est reprise en totalité", "Est augmentée", "Devient une dette"], bonne: 1, explication: "Elle est devenue sans objet." },
      { q: "Le reclassement d'une créance en douteuse :", choix: ["Diminue le résultat", "Est sans effet sur le résultat", "Augmente le résultat", "Diminue la TVA"], bonne: 1, explication: "C'est un mouvement entre deux comptes de bilan." },
    ],
  },

  8: {
    titre: "Les provisions pour risques et charges",
    description: "Provisions pour risques et charges selon le CGNC : litiges, garanties, amendes, grosses réparations, comptes 15 et 450, dotations 6195 et 6595, reprises.",
    resume: md`
## L'essentiel — Provisions pour risques et charges

- **Passif** probable : objet **précis**, montant ou échéance **incertain**, événement déjà survenu.
- ≠ dette (certaine), ≠ charge à payer (prestation reçue, montant quasi certain), ≠ provision pour dépréciation (actif).
- Cas : **litiges**, **garanties** données aux clients, **amendes et pénalités**, pertes de change, **grosses réparations**.
- Plus d'un an : **15..** (1511 litiges, 1512 garanties, 1555 charges à répartir) ; un an au plus : **450..** (4501, 4502, 4508).
- Dotation : **6195** (exploitation), **6393** (financier), **6595** (non courant) ; reprises 7195, 7393, 7595.
- Risque réalisé : charge réelle (6581, 6583, 6133…) + **reprise** totale de la provision.
- Risque disparu : reprise totale ; risque modifié : dotation ou reprise de l'écart.
- Grosses réparations : coût réparti sur les exercices qui précèdent la dépense (D 6195 / C 1555).
- Pas de provision pour un risque **général** ou pour des pertes futures d'exploitation.
`,
    exercices: md`
### Exercice 2 — Un procès sur trois ans

Fin N, un ancien salarié poursuit l'entreprise ; jugement attendu dans deux ans ; condamnation probable : 60 000 DH. Fin N+1, l'avocat relève l'estimation à 70 000 DH. En N+2, l'entreprise gagne le procès.

Passez les écritures de N, N+1 et N+2 et indiquez l'incidence sur chaque résultat.

<details><summary>Voir le corrigé</summary>

- **N** : échéance supérieure à un an : D 6195 / C 1511 Provisions pour litiges 60 000. Incidence : − 60 000.
- **N+1** : dotation complémentaire D 6195 / C 1511 10 000. Incidence : − 10 000. (Le jugement étant désormais attendu dans l'année, la provision peut être reclassée en 4501 : D 1511 / C 4501 70 000, sans effet sur le résultat.)
- **N+2** : procès gagné, la provision est sans objet : D 4501 (ou 1511) / C 7195 70 000. Incidence : + 70 000.

Sur les trois ans, l'incidence totale est nulle : aucune charge réelle n'a été supportée.

</details>

### Exercice 3 — Provision ou pas ?

Pour chaque situation, indiquez s'il faut constituer une provision pour risques et charges et, si oui, avec quels comptes :
1. Le dirigeant craint une baisse générale des ventes l'an prochain.
2. Une entreprise de BTP accorde une garantie décennale sur ses ouvrages ; les sinistres probables sur les chantiers livrés sont estimés à 80 000 DH, à régler sur plusieurs années.
3. La facture de l'expert-comptable pour la mission de décembre n'est pas encore reçue (6 000 DH HT).
4. Un redressement douanier de 25 000 DH est contesté ; l'issue défavorable est probable dans l'année.

<details><summary>Voir le corrigé</summary>

1. **Non** : risque général, sans objet précis.
2. **Oui** : D 6195 / C 1512 Provisions pour garanties données aux clients 80 000 (plus d'un an).
3. **Non** : c'est une **charge à payer** (prestation reçue) : D 6136 Rémunérations d'intermédiaires et honoraires et D 3458 (TVA) / C 4417 (chapitre 9).
4. **Oui** : charge non courante : D 6595 / C 4508 Autres provisions pour risques et charges 25 000.

</details>
`,
    qcm: [
      { q: "Une provision pour risques et charges figure :", choix: ["À l'actif", "Au passif", "Hors bilan", "Au CPC seulement"], bonne: 1, explication: "C'est une dette probable." },
      { q: "Un litige dont le jugement est attendu dans trois ans se provisionne au compte :", choix: ["4501", "1511", "3942", "2931"], bonne: 1, explication: "Provision durable pour litiges." },
      { q: "La dotation pour un litige commercial se passe au compte :", choix: ["6196", "6195", "6595", "6393"], bonne: 1, explication: "Risque d'exploitation." },
      { q: "Une amende fiscale contestée se provisionne par une dotation :", choix: ["D'exploitation", "Financière", "Non courante", "Aucune"], bonne: 2, explication: "Compte 6595." },
      { q: "On ne peut pas provisionner :", choix: ["Une garantie donnée aux clients", "Un procès en cours", "Un risque général de baisse d'activité", "Des grosses réparations prévues"], bonne: 2, explication: "Pas d'objet précis." },
      { q: "Le risque se réalise pour 30 000 DH, provision existante 36 000 DH. Incidence nette ?", choix: ["− 30 000", "+ 6 000", "− 36 000", "− 6 000"], bonne: 1, explication: "Charge 30 000, reprise 36 000." },
      { q: "La provision pour grosses réparations est créditée au compte :", choix: ["1555", "6133", "2832", "4417"], bonne: 0, explication: "Provisions pour charges à répartir sur plusieurs exercices." },
      { q: "La reprise d'une provision pour risques d'exploitation se passe au compte :", choix: ["7196", "7195", "7595", "7194"], bonne: 1, explication: "Reprises sur provisions pour risques et charges." },
      { q: "La facture de décembre non reçue d'un fournisseur d'électricité est :", choix: ["Une provision pour risques", "Une charge à payer", "Une charge constatée d'avance", "Une créance douteuse"], bonne: 1, explication: "La prestation a eu lieu, le montant est quasi certain." },
      { q: "Garantie estimée à 2 % de 1 500 000 DH de ventes, provision existante 25 000 DH :", choix: ["Dotation 30 000", "Dotation 5 000", "Reprise 5 000", "Reprise 25 000"], bonne: 1, explication: "Besoin 30 000 − existant 25 000." },
    ],
  },

  9: {
    titre: "La régularisation des charges",
    description: "Régularisation des charges selon le CGNC : charges constatées d'avance 3491, charges à payer 4417, 4437, 4493, TVA 3458, avoirs à recevoir 3417, extournes.",
    resume: md`
## L'essentiel — La régularisation des charges

- **Spécialisation des exercices** : N supporte exactement les charges consommées en N.
- **CCA** (payée pour N+1) : D **3491** / C charge ; montant **HT** au prorata de N+1.
- **Charge à payer** (consommée en N, sans pièce) : D charge / C dette spécifique.
- Facture non parvenue : D 61.. (HT) + D **3458** (TVA) / C **4417** (TTC).
- Personnel : 6171 / **4437** ; charges sociales : 6174 / **4447** ; impôts et taxes : 6167 / **4457**.
- Intérêts courus : 6311 / **4493** ; $C \times t \times \text{mois depuis la dernière échéance}/12$.
- Avoir à recevoir : D **3417** (TTC) / C 6119 (HT) + C **4458** (TVA).
- **Extourne** de toutes ces écritures au 1ᵉʳ janvier N+1.
- Effet : CCA et avoirs à recevoir **augmentent** le résultat ; charges à payer le **diminuent**.
`,
    exercices: md`
### Exercice 2 — Intérêts courus d'un emprunt remboursé par annuités

Un emprunt de 500 000 DH à 6 % a été contracté le 1ᵉʳ avril N−1 ; il est remboursé par amortissements constants de 100 000 DH, avec les intérêts, chaque 31 mars.

1. Quel est le capital restant dû après l'échéance du 31 mars N ?
2. Calculez et comptabilisez les intérêts courus au 31 décembre N.

<details><summary>Voir le corrigé</summary>

**1)** $500\,000 - 100\,000 = \mathbf{400\,000}$ DH (une échéance payée, le 31/03/N).

**2)** Intérêts du 1ᵉʳ avril au 31 décembre N : $400\,000 \times 6\,\% \times 9/12 = \mathbf{18\,000}$ DH. D 6311 Intérêts des emprunts et dettes / C 4493 Intérêts courus et non échus à payer 18 000. Les intérêts ne supportent pas de TVA dans cette écriture : ils seront payés avec l'échéance du 31 mars N+1.

</details>

### Exercice 3 — Deux charges payées d'avance

1. Le 1ᵉʳ septembre N, une entreprise paie un contrat annuel de maintenance informatique (septembre N à août N+1), enregistré en 6133 Entretien et réparations : 9 600 DH HT, soit 11 520 DH TTC.
2. Le 1ᵉʳ décembre N, elle paie le loyer du trimestre (décembre à février) : 15 000 DH.

Calculez et comptabilisez les régularisations ; indiquez l'incidence sur le résultat.

<details><summary>Voir le corrigé</summary>

**1)** Part de N+1 (janvier à août) : $9\,600 \times 8/12 = 6\,400$ DH, calculée sur le **HT** (la TVA a été récupérée au paiement) : D 3491 / C 6133 Entretien et réparations 6 400.

**2)** Part de N+1 (janvier et février) : $15\,000 \times 2/3 = 10\,000$ DH : D 3491 / C 6131 Locations et charges locatives 10 000.

Incidence : $+6\,400 + 10\,000 = \mathbf{+16\,400}$ DH ; les deux écritures seront extournées le 1ᵉʳ janvier N+1.

</details>
`,
    qcm: [
      { q: "Une charge payée en N pour une période de N+1 est :", choix: ["Une charge à payer", "Une charge constatée d'avance", "Un produit constaté d'avance", "Une provision"], bonne: 1, explication: "On la retire des charges de N." },
      { q: "Le compte des charges constatées d'avance est :", choix: ["4491", "3491", "4417", "3427"], bonne: 1, explication: "Actif de régularisation." },
      { q: "Assurance de 12 000 DH payée le 1er juillet N pour un an : CCA ?", choix: ["12 000", "6 000", "3 000", "0"], bonne: 1, explication: "Six mois de N+1." },
      { q: "Facture non parvenue de 4 000 DH HT (TVA 20 %) : la TVA est débitée au compte :", choix: ["34552", "3458", "4455", "4458"], bonne: 1, explication: "Sans facture, la TVA n'est pas encore récupérable." },
      { q: "Le compte crédité pour une facture non parvenue est :", choix: ["4411", "4417", "3417", "4427"], bonne: 1, explication: "Fournisseurs – factures non parvenues." },
      { q: "Emprunt 240 000 DH à 5 %, échéance annuelle le 30 juin : intérêts courus au 31/12 ?", choix: ["12 000", "6 000", "1 000", "3 000"], bonne: 1, explication: "240 000 × 5 % × 6/12." },
      { q: "Les intérêts courus non échus à payer sont crédités au compte :", choix: ["3493", "4493", "4491", "6311"], bonne: 1, explication: "Dette de régularisation." },
      { q: "Un avoir à recevoir d'un fournisseur se débite au compte :", choix: ["3417", "4427", "4417", "3427"], bonne: 0, explication: "Rabais, remises et ristournes à obtenir." },
      { q: "Une charge à payer :", choix: ["Augmente le résultat", "Diminue le résultat", "Est sans effet", "Augmente l'actif"], bonne: 1, explication: "On ajoute une charge à N." },
      { q: "Au 1er janvier N+1, une charge constatée d'avance est :", choix: ["Conservée telle quelle", "Extournée", "Transformée en provision", "Soldée par la banque"], bonne: 1, explication: "Elle redevient une charge de N+1." },
    ],
  },

  10: {
    titre: "La régularisation des produits",
    description: "Régularisation des produits selon le CGNC : produits constatés d'avance 4491, factures à établir 3427, TVA 4458, intérêts courus 3493, avoirs à établir 4427.",
    resume: md`
## L'essentiel — La régularisation des produits

- N n'enregistre que les produits **acquis** en N (livraison faite, service rendu, intérêts courus).
- **PCA** (produit enregistré en N pour N+1) : D produit / C **4491** ; montant **HT** au prorata de N+1.
- **Facture à établir** : D **3427** (TTC) / C produit (HT) + C **4458** (TVA).
- **Intérêts courus à percevoir** : D **3493** / C **7381** ; depuis la dernière échéance.
- **Avoir à établir** : D 7119 (HT) + D **3458** (TVA) / C **4427** (TTC).
- **Avance reçue** d'un client (4421) ≠ PCA : rien à régulariser.
- PCA et avoirs à établir **diminuent** le résultat ; produits à recevoir l'**augmentent**.
- Bilan : 3491, 3493 en régularisation-actif ; 4491, 4493 en régularisation-passif.
- Toutes ces écritures sont **extournées** au 1ᵉʳ janvier N+1.
`,
    exercices: md`
### Exercice 2 — Un dépôt à terme

Le 1ᵉʳ octobre N, une entreprise place 500 000 DH sur un dépôt à terme d'un an au taux de 3,5 % ; les intérêts seront versés à l'échéance, le 30 septembre N+1.

1. Calculez et comptabilisez les intérêts courus au 31 décembre N.
2. Quelle écriture passe-t-on le 1ᵉʳ janvier N+1 ? Quel produit d'intérêts figurera finalement dans le CPC de N+1 ?

<details><summary>Voir le corrigé</summary>

**1)** $500\,000 \times 3{,}5\,\% \times 3/12 = \mathbf{4\,375}$ DH : D 3493 Intérêts courus et non échus à percevoir / C 7381 Intérêts et produits assimilés 4 375.

**2)** Extourne : D 7381 / C 3493 4 375. Le 30 septembre N+1, l'entreprise encaisse $500\,000 \times 3{,}5\,\% = 17\,500$ DH (D 5141 / C 7381). Produit net de N+1 : $17\,500 - 4\,375 = \mathbf{13\,125}$ DH, soit les neuf mois de N+1.

</details>

### Exercice 3 — Les frais de scolarité d'une école privée

Une école privée de Casablanca encaisse en septembre N les frais de scolarité de l'année scolaire (septembre N à juin N+1) : 1 200 000 DH HT, enregistrés en 7124. Elle a aussi reçu en décembre N des avances de 60 000 DH pour l'année scolaire N+1/N+2, enregistrées en 4421.

1. Calculez et comptabilisez la régularisation au 31 décembre N.
2. Faut-il régulariser les avances de 60 000 DH ?

<details><summary>Voir le corrigé</summary>

**1)** L'année scolaire compte 10 mois, dont 6 en N+1 (janvier à juin) : $1\,200\,000 \times 6/10 = \mathbf{720\,000}$ DH. D 7124 / C 4491 Produits constatés d'avance 720 000. Le chiffre d'affaires de N ne retient que septembre à décembre : 480 000 DH.

**2)** **Non** : ces avances n'ont jamais été enregistrées en produit ; elles restent en 4421 Clients – avances et acomptes reçus jusqu'à la rentrée concernée.

</details>
`,
    qcm: [
      { q: "Un loyer encaissé en N pour une période de N+1 donne lieu à :", choix: ["Un produit à recevoir", "Un produit constaté d'avance", "Une charge constatée d'avance", "Une avance client"], bonne: 1, explication: "On retire ce produit de N." },
      { q: "Le compte des produits constatés d'avance est :", choix: ["3491", "4491", "3427", "4427"], bonne: 1, explication: "Passif de régularisation." },
      { q: "Une prestation réalisée en décembre et facturée en janvier se débite au 31/12 au compte :", choix: ["3421", "3427", "4491", "3493"], bonne: 1, explication: "Clients – factures à établir." },
      { q: "La TVA d'une facture à établir est créditée au compte :", choix: ["4455", "4458", "3458", "34552"], bonne: 1, explication: "Elle n'est pas encore facturée." },
      { q: "Prêt de 120 000 DH à 5 % accordé le 1er novembre N : intérêts courus au 31/12 ?", choix: ["6 000", "1 000", "500", "2 000"], bonne: 1, explication: "120 000 × 5 % × 2/12." },
      { q: "Les intérêts courus à percevoir se débitent au compte :", choix: ["4493", "3493", "7381", "3427"], bonne: 1, explication: "Intérêts courus et non échus à percevoir." },
      { q: "Une ristourne promise à un client mais non encore facturée se crédite (TTC) au compte :", choix: ["3417", "4427", "7119", "4417"], bonne: 1, explication: "Rabais, remises et ristournes à accorder." },
      { q: "Un produit constaté d'avance :", choix: ["Augmente le résultat de N", "Diminue le résultat de N", "Est sans effet", "Augmente l'actif"], bonne: 1, explication: "On débite le produit." },
      { q: "Une avance reçue d'un client sur une commande non livrée :", choix: ["Est un produit constaté d'avance", "Reste au compte 4421 sans régularisation", "Est un produit à recevoir", "Est un produit de l'exercice"], bonne: 1, explication: "Elle n'a jamais été passée en produit." },
      { q: "Au bilan CGNC, le compte 4491 figure :", choix: ["À l'actif circulant", "Au passif circulant", "Au financement permanent", "En trésorerie"], bonne: 1, explication: "Comptes de régularisation – passif." },
    ],
  },

  11: {
    titre: "De la balance après inventaire aux états de synthèse",
    description: "Clôture de l'exercice : balance après inventaire, IS et cotisation minimale 2026, CPC du CGNC, bilan brut-net et cas de synthèse corrigé.",
    resume: md`
## L'essentiel — Balance après inventaire et états de synthèse

- **Balance après inventaire** = balance avant inventaire + écritures d'inventaire ; toujours équilibrée.
- Classes 1 à 5 → **bilan** ; classes 6 et 7 → **CPC**.
- IS 2026 : **20 %** (bénéfice < 100 MDH), 35 % au-delà, 40 % établissements de crédit et assurances.
- **Cotisation minimale** : 0,25 % du CA, minimum **3 000 DH** ; on paie le plus élevé, même en cas de perte.
- IS : D **6701** / C **4453** ; acomptes : D **3453** / C 5141, imputés D 4453 / C 3453.
- CPC : exploitation (RE), financier (RF), non courant (RNC) ; $RC = RE + RF$, $RAI = RC + RNC$, $RN = RAI - IS$.
- Achats revendus = 6111 + 6114 ; dotations d'exploitation = comptes 619.
- Bilan actif : **Brut − Amortissements et provisions = Net** ; régularisations en postes distincts.
- Contrôles : actif = passif ; RN du bilan = RN du CPC ; résultat provisoire + incidences = RAI.
`,
    exercices: md`
### Exercice 2 — IS ou cotisation minimale ?

Calculez l'impôt dû (IS au taux de 20 %, cotisation minimale 0,25 % du chiffre d'affaires, minimum 3 000 DH) :
1. Chiffre d'affaires 4 000 000 DH ; résultat fiscal 300 000 DH.
2. Chiffre d'affaires 2 000 000 DH ; résultat fiscal 20 000 DH.
3. Chiffre d'affaires 800 000 DH ; perte fiscale 50 000 DH.

<details><summary>Voir le corrigé</summary>

| Cas | IS théorique | Cotisation minimale | Impôt dû |
|:--:|---:|---:|---:|
| 1 | $300\,000 \times 20\,\% = 60\,000$ | $4\,000\,000 \times 0{,}25\,\% = 10\,000$ | **60 000** |
| 2 | $20\,000 \times 20\,\% = 4\,000$ | $2\,000\,000 \times 0{,}25\,\% = 5\,000$ | **5 000** |
| 3 | 0 (perte) | $800\,000 \times 0{,}25\,\% = 2\,000$, porté à 3 000 | **3 000** |

Dans les cas 2 et 3, l'entreprise paie la cotisation minimale, même avec un faible bénéfice ou une perte.

</details>

### Exercice 3 — Établir un CPC

Soldes des comptes de gestion après inventaire : ventes de marchandises 1 200 000 ; achats de marchandises 700 000 ; variation des stocks de marchandises (débitrice) 20 000 ; autres charges externes 90 000 ; impôts et taxes 10 000 ; charges de personnel 200 000 ; dotations d'exploitation 60 000 ; reprises d'exploitation 8 000 ; intérêts des emprunts 15 000 ; produits financiers 5 000 ; VNA des immobilisations cédées 40 000 ; produits des cessions 55 000. IS au taux de 20 %.

Calculez RE, RF, RC, RNC, RAI, l'IS et le RN.

<details><summary>Voir le corrigé</summary>

- Produits d'exploitation : $1\,200\,000 + 8\,000 = 1\,208\,000$ ; charges d'exploitation : $700\,000 + 20\,000 + 90\,000 + 10\,000 + 200\,000 + 60\,000 = 1\,080\,000$ ; **RE = 128 000**.
- **RF** $= 5\,000 - 15\,000 = $ **− 10 000** ; **RC = 118 000**.
- **RNC** $= 55\,000 - 40\,000 = $ **15 000** (plus-value de cession).
- **RAI = 133 000** ; IS $= 133\,000 \times 20\,\% = 26\,600$ (supérieur à la cotisation minimale de 3 000) ; **RN = 106 400** DH.

</details>
`,
    qcm: [
      { q: "La balance après inventaire :", choix: ["N'a pas besoin d'être équilibrée", "Intègre les écritures d'inventaire et reste équilibrée", "Ne contient que les comptes de bilan", "Remplace le CPC"], bonne: 1, explication: "Chaque écriture d'inventaire est équilibrée." },
      { q: "Le taux normal de l'IS en 2026 pour un bénéfice de 2 millions de DH est :", choix: ["10 %", "20 %", "31 %", "35 %"], bonne: 1, explication: "Bénéfice inférieur à 100 millions de DH." },
      { q: "La cotisation minimale est égale à :", choix: ["0,25 % du CA, minimum 3 000 DH", "1 % du résultat", "20 % du CA", "3 000 DH fixes"], bonne: 0, explication: "Elle est due même en cas de perte." },
      { q: "L'écriture de l'IS de l'exercice est :", choix: ["D 4453 / C 6701", "D 6701 / C 4453", "D 3453 / C 6701", "D 6701 / C 5141"], bonne: 1, explication: "Charge d'impôt et dette envers l'État." },
      { q: "Les acomptes d'IS versés en cours d'année sont débités au compte :", choix: ["4453", "3453", "6701", "4457"], bonne: 1, explication: "Acomptes sur impôts sur les résultats." },
      { q: "RE 80 000, RF − 15 000, RNC 5 000 : le RAI est de :", choix: ["70 000", "90 000", "100 000", "60 000"], bonne: 0, explication: "80 000 − 15 000 + 5 000." },
      { q: "Les achats revendus de marchandises sont égaux à :", choix: ["6111 seul", "6111 + 6114", "6111 − 7111", "6114 seul"], bonne: 1, explication: "Achats corrigés de la variation de stock." },
      { q: "Au bilan, la colonne « Brut » d'un camion indique :", choix: ["Sa VNA", "Sa valeur d'origine", "Son prix de revente", "Ses amortissements"], bonne: 1, explication: "Les amortissements sont dans la colonne suivante." },
      { q: "Le résultat net figure au bilan :", choix: ["À l'actif circulant", "Dans les capitaux propres", "Dans les dettes de financement", "En trésorerie"], bonne: 1, explication: "Pour le même montant qu'au CPC." },
      { q: "Les intérêts courus non échus à payer figurent au bilan dans :", choix: ["Les dettes de financement", "Les comptes de régularisation – passif", "Les capitaux propres", "L'actif circulant"], bonne: 1, explication: "Compte 4493." },
    ],
  },
};

export default chapitres;
