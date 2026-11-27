// Économie Monétaire et Financière (S4, parcours Économie) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "La monnaie : nature, fonctions et formes",
    description: "La monnaie : limites du troc, fonctions d'intermédiaire des échanges, d'unité de compte et de réserve de valeur, formes, crypto-actifs et pouvoir d'achat.",
    resume: md`
## L'essentiel — Nature, fonctions et formes de la monnaie

- Le troc exige la **double coïncidence des besoins** (Jevons) et demande $\frac{n(n-1)}{2}$ prix relatifs ; une unité de compte ramène ce nombre à $n - 1$.
- La monnaie réduit les **coûts de transaction** : elle sépare la vente de l'achat.
- Trois fonctions (Aristote) : **intermédiaire des échanges**, **unité de compte**, **réserve de valeur**.
- La réserve de valeur est la plus fragile : l'inflation la détruit ; l'hyperinflation fait perdre les autres fonctions.
- Formes : monnaie marchandise, métallique, **fiduciaire** (billets, pièces), **scripturale** (dépôts à vue), **électronique**.
- Chèque, carte, virement = **instruments de paiement**, pas de la monnaie.
- Le dirham (depuis 1959) est émis par **Bank Al-Maghrib** ; il n'est convertible en aucun métal ; sa valeur repose sur le **cours légal** et la **confiance**.
- Crypto-actifs : pas d'émetteur central, valeur très instable, acceptation non obligatoire ; mises en garde de BAM, de l'Office des changes et de l'AMMC dès 2017.
- Pouvoir d'achat = $1 / P$ ; inflation cumulée = produit des coefficients ; perte de pouvoir d'achat = $1 - 1/(1 + \pi)$.
`,
    exercices: md`
### Exercice 2 — Monnaie ou pas ?

Pour chaque élément, dites s'il s'agit de monnaie, d'un instrument de paiement ou d'un actif non monétaire : a) un billet de 100 DH ; b) un chèque de 5 000 DH ; c) le solde créditeur d'un compte courant ; d) une carte bancaire ; e) un lingot d'or ; f) 0,1 bitcoin ; g) le solde d'un portefeuille de paiement mobile agréé.

<details><summary>Voir le corrigé</summary>

a) **Monnaie fiduciaire**. b) **Instrument de paiement** : il ordonne le transfert d'un dépôt. c) **Monnaie scripturale** (dépôt à vue). d) **Instrument de paiement**. e) **Actif non monétaire** : réserve de valeur, mais pas moyen de paiement courant. f) **Crypto-actif**, actif non monétaire : il ne remplit pas les trois fonctions et n'a pas cours légal. g) **Monnaie électronique** émise par un établissement de paiement agréé : elle est remboursable en dirhams à sa valeur nominale.

</details>

### Exercice 3 — Inflation et perte de pouvoir d'achat

L'indice des prix passe de 100 à 104 en un an, puis à 109,2 l'année suivante.

1. Calculez l'inflation de chaque année et l'inflation cumulée.
2. Quelle est la perte de pouvoir d'achat d'un dirham sur les deux ans ?

<details><summary>Voir le corrigé</summary>

1. Année 1 : 104 / 100 − 1 = **4 %** ; année 2 : 109,2 / 104 − 1 = **5 %** ; cumul : 109,2 / 100 − 1 = **9,2 %** ($1{,}04 \times 1{,}05 = 1{,}092$).
2. Perte : $1 - 1/1{,}092 \approx$ **8,4 %** : un dirham n'achète plus que 0,916 du panier de départ.

</details>
`,
    qcm: [
      { q: "La double coïncidence des besoins désigne :", choix: ["La nécessité, dans le troc, que chacun veuille exactement ce que l'autre offre", "L'égalité entre l'offre et la demande de monnaie", "La concordance entre deux prix", "L'accord entre la banque et son client"], bonne: 0, explication: "C'est la principale limite du troc selon Jevons." },
      { q: "Avec 30 biens échangés par troc, le nombre de prix relatifs est de :", choix: ["435", "30", "900", "29"], bonne: 0, explication: "30 × 29 / 2 = 435." },
      { q: "La fonction de la monnaie la plus menacée par l'inflation est :", choix: ["La réserve de valeur", "L'unité de compte", "L'intermédiaire des échanges", "Le cours légal"], bonne: 0, explication: "L'inflation réduit le pouvoir d'achat de la monnaie conservée." },
      { q: "Un chèque est :", choix: ["Un instrument de paiement", "De la monnaie fiduciaire", "De la monnaie scripturale", "Un actif financier non monétaire"], bonne: 0, explication: "Il ordonne le transfert d'un dépôt à vue, qui est la monnaie." },
      { q: "La monnaie scripturale correspond :", choix: ["Aux dépôts à vue inscrits dans les comptes bancaires", "Aux billets et pièces", "Aux dépôts à terme", "Aux titres d'OPCVM"], bonne: 0, explication: "Elle circule par chèque, virement ou carte." },
      { q: "Le mot fiduciaire vient du latin fiducia qui signifie :", choix: ["Confiance", "Papier", "Valeur", "Échange"], bonne: 0, explication: "La valeur du billet repose sur la confiance." },
      { q: "Au Maroc, le privilège d'émission des billets appartient à :", choix: ["Bank Al-Maghrib", "Le ministère de l'Économie et des Finances", "Les banques commerciales", "L'Office des changes"], bonne: 0, explication: "Bank Al-Maghrib émet les billets et les pièces." },
      { q: "Si l'indice des prix passe de 100 à 125, le pouvoir d'achat d'un dirham baisse de :", choix: ["20 %", "25 %", "12,5 %", "80 %"], bonne: 0, explication: "1 − 1/1,25 = 0,20." },
      { q: "Deux années d'inflation à 5 % donnent une inflation cumulée de :", choix: ["10,25 %", "10 %", "5 %", "25 %"], bonne: 0, explication: "1,05 × 1,05 = 1,1025." },
      { q: "Les crypto-actifs ne sont pas considérés comme une monnaie au sens économique surtout parce que :", choix: ["Ils remplissent mal les fonctions d'unité de compte et de réserve de valeur et n'ont pas cours légal", "Ils sont uniquement électroniques", "Ils sont émis par les banques centrales", "Ils sont convertibles en or"], bonne: 0, explication: "Leur valeur est très instable et personne n'est tenu de les accepter." },
    ],
  },
  2: {
    titre: "La mesure de la masse monétaire : agrégats et contreparties",
    description: "Agrégats monétaires M1, M2, M3 de Bank Al-Maghrib, placements liquides, contreparties de la masse monétaire, taux de liquidité et vitesse de circulation.",
    resume: md`
## L'essentiel — Agrégats et contreparties

- **Liquidité** d'un actif : rapidité, coût et certitude de sa conversion en moyen de paiement.
- Les agrégats regroupent les avoirs des **agents non financiers résidents**, par liquidité décroissante, et sont **emboîtés**.
- **M1** = monnaie fiduciaire en circulation dans le public + dépôts à vue.
- **M2** = M1 + placements à vue (comptes sur carnets).
- **M3** = M2 + autres actifs monétaires (dépôts à terme, OPCVM monétaires, dépôts en devises, pensions, certificats de dépôt courts) : agrégat de référence, plus de 2 000 milliards de DH fin 2025.
- Agrégats de **placements liquides** PL1, PL2 (OPCVM obligataires), PL3 (OPCVM actions et diversifiés) : hors masse monétaire.
- Contreparties : créances sur l'extérieur (avoirs officiels de réserve), créances nettes sur l'administration centrale, **créances sur l'économie**, moins les ressources non monétaires.
- Un transfert dépôt à vue → dépôt à terme fait baisser M1 sans changer M3.
- Taux de liquidité $= M3 / PIB$ ; vitesse de circulation $V = PIB / M3$.
`,
    exercices: md`
### Exercice 2 — Classer les actifs

Classez chaque élément dans M1, M2 (hors M1), M3 (hors M2) ou hors agrégats monétaires : a) dépôt à vue d'une PME ; b) compte sur carnet d'un étudiant ; c) titres d'un OPCVM monétaire ; d) actions de Maroc Telecom ; e) billets détenus par un commerçant ; f) dépôt à terme de 6 mois ; g) dépôt d'une banque chez une autre banque ; h) titres d'un OPCVM obligataire.

<details><summary>Voir le corrigé</summary>

M1 : a) et e). M2 hors M1 : b). M3 hors M2 : c) et f). Hors agrégats monétaires : d) (actif non monétaire), g) (dépôt interbancaire, non compté pour éviter les doubles comptes), h) (placement liquide, PL2).

</details>

### Exercice 3 — Expliquer une variation de M3

Sur un an, M3 passe de 1 850 à 1 980 milliards de DH. Les créances sur l'économie augmentent de 70, les avoirs de réserve de 60, les créances nettes sur l'administration centrale de 15 et les ressources non monétaires de 15.

1. Vérifiez la variation de M3 par les contreparties.
2. Calculez le taux de croissance de M3 et la part de la variation expliquée par les crédits.

<details><summary>Voir le corrigé</summary>

1. Variation : 70 + 60 + 15 − 15 = **130** = 1 980 − 1 850.
2. Croissance : 130 / 1 850 ≈ **7,0 %**. Part des créances sur l'économie : 70 / 130 ≈ **54 %** ; les réserves de change en expliquent 60 / 130 ≈ 46 %.

</details>
`,
    qcm: [
      { q: "L'agrégat de référence de la masse monétaire au Maroc est :", choix: ["M3", "M1", "M2", "PL3"], bonne: 0, explication: "Les communiqués de Bank Al-Maghrib commentent l'évolution de M3." },
      { q: "Les comptes sur carnets sont classés dans :", choix: ["M2, comme placements à vue", "M1", "M3 hors M2", "Les placements liquides"], bonne: 0, explication: "Ils sont convertibles à tout moment mais ne servent pas directement aux paiements." },
      { q: "Les titres d'OPCVM obligataires relèvent :", choix: ["Des agrégats de placements liquides", "De M3", "De M1", "De M2"], bonne: 0, explication: "Leur valeur fluctue avec les taux : ils sont hors masse monétaire (PL2)." },
      { q: "Les dépôts d'une banque auprès d'une autre banque :", choix: ["Ne sont pas comptés dans la masse monétaire", "Font partie de M1", "Font partie de M3", "Font partie de M2"], bonne: 0, explication: "On ne compte que les avoirs des agents non financiers." },
      { q: "Un ménage transfère 5 000 DH de son compte courant vers un dépôt à terme. Alors :", choix: ["M1 baisse et M3 est inchangé", "M1 et M3 baissent", "M3 augmente", "M1 augmente"], bonne: 0, explication: "Le montant change d'agrégat sans quitter M3." },
      { q: "Parmi les contreparties de la masse monétaire, on trouve :", choix: ["Les créances sur l'économie", "Les fonds propres des banques", "Les billets en caisse des banques", "Les dépôts interbancaires"], bonne: 0, explication: "Les crédits aux entreprises et aux ménages en sont la principale source." },
      { q: "M3 = 1 800 et PIB = 1 500 : le taux de liquidité de l'économie est de :", choix: ["120 %", "83 %", "1,2 %", "300 %"], bonne: 0, explication: "1 800 / 1 500 = 1,2." },
      { q: "Si le taux de liquidité de l'économie augmente durablement, la vitesse de circulation de la monnaie :", choix: ["Diminue", "Augmente", "Reste constante", "Devient négative"], bonne: 0, explication: "La vitesse est l'inverse du taux de liquidité." },
      { q: "Une entrée massive de devises cédées aux banques fait augmenter :", choix: ["Les avoirs de réserve et la masse monétaire", "Les ressources non monétaires", "Les créances sur l'État seulement", "Les placements liquides seulement"], bonne: 0, explication: "Les devises sont achetées contre des dirhams nouvellement créés." },
      { q: "La monnaie fiduciaire comptée dans M1 correspond :", choix: ["Aux billets et pièces en circulation dans le public", "À tous les billets imprimés", "Aux billets en caisse des banques", "Aux réserves des banques à Bank Al-Maghrib"], bonne: 0, explication: "Les encaisses des banques sont exclues." },
    ],
  },
  3: {
    titre: "La création monétaire et le multiplicateur de crédit",
    description: "Création monétaire : les crédits font les dépôts, destruction au remboursement, base monétaire, multiplicateur et diviseur de crédit, liquidité bancaire.",
    resume: md`
## L'essentiel — Création monétaire

- Créent la monnaie : la **banque centrale** (billets, monnaie centrale), les **banques** (monnaie scripturale), le **Trésor** (marginalement).
- **Les crédits font les dépôts** : en accordant un crédit, la banque inscrit un dépôt nouveau ; le remboursement **détruit** la monnaie.
- Il y a création chaque fois que le système bancaire acquiert un actif : crédit, devises, bons du Trésor (les trois contreparties).
- Limites : fuite en **billets**, **réserve monétaire**, paiements vers les autres banques réglés en monnaie centrale.
- **Base monétaire** : $B = C + R$ (billets en circulation + réserves des banques à la banque centrale).
- $c = C/D$, $r = R/D$ ; **multiplicateur** $m = \frac{1 + c}{c + r}$ ; $M = m \times B$.
- **Diviseur de crédit** : besoin de monnaie centrale $\Delta B = \Delta M / m$ ; approche de la monnaie **endogène** (les crédits déterminent la base).
- Liquidité bancaire resserrée par la hausse des billets en circulation et de la réserve, élargie par les achats de devises de BAM ; structurellement **déficitaire** au Maroc.
`,
    exercices: md`
### Exercice 2 — Écritures de création et de destruction

Passez dans le bilan de la banque : a) un crédit de 80 000 DH accordé à une coopérative ; b) l'achat par la banque de 10 000 euros à un Marocain résidant à l'étranger, au cours de 10,90 DH ; c) le remboursement de 20 000 DH du crédit par la coopérative. Dites à chaque fois si la masse monétaire varie.

<details><summary>Voir le corrigé</summary>

a) Actif : crédit + 80 000 ; passif : dépôt de la coopérative + 80 000. **Création** de 80 000 DH.
b) Actif : devises + 109 000 ; passif : dépôt du client + 109 000 (10 000 × 10,90). **Création** de 109 000 DH (contrepartie extérieure).
c) Actif : crédit − 20 000 ; passif : dépôt − 20 000. **Destruction** de 20 000 DH.

</details>

### Exercice 3 — Multiplicateur sans billets

Dans une économie où l'on paie presque tout par carte ($c = 0$), le taux de réserve est de 5 %.

1. Calculez le multiplicateur.
2. Avec $c = 0{,}10$, que devient-il ? Commentez.

<details><summary>Voir le corrigé</summary>

1. $m = \frac{1}{0{,}05} =$ **20**.
2. $m = \frac{1{,}10}{0{,}10 + 0{,}05} = \frac{1{,}10}{0{,}15} \approx$ **7,33**. La préférence pour les billets réduit fortement le multiplicateur : chaque crédit fuit en partie hors du circuit bancaire. C'est l'un des effets de l'usage élevé des espèces.

</details>
`,
    qcm: [
      { q: "Lorsqu'une banque accorde un crédit, elle :", choix: ["Crée un dépôt nouveau au profit de l'emprunteur", "Prête les dépôts d'autres clients", "Puise dans ses fonds propres", "Emprunte toujours d'abord à la banque centrale"], bonne: 0, explication: "Les crédits font les dépôts." },
      { q: "Le remboursement d'un crédit bancaire :", choix: ["Détruit de la monnaie", "Crée de la monnaie", "N'a aucun effet sur la masse monétaire", "Augmente la base monétaire"], bonne: 0, explication: "Le dépôt et la créance disparaissent ensemble." },
      { q: "La base monétaire est égale :", choix: ["Aux billets en circulation et aux réserves des banques à la banque centrale", "À M3", "Aux dépôts à vue", "Aux crédits à l'économie"], bonne: 0, explication: "B = C + R." },
      { q: "Avec c = 0,25 et r = 0,05, le multiplicateur vaut environ :", choix: ["4,17", "20", "5", "3,33"], bonne: 0, explication: "1,25 / 0,30 ≈ 4,17." },
      { q: "Une hausse de la préférence du public pour les billets :", choix: ["Réduit le multiplicateur", "Augmente le multiplicateur", "Ne change pas le multiplicateur", "Supprime la réserve obligatoire"], bonne: 0, explication: "La fuite en billets réduit la capacité de création des banques." },
      { q: "L'achat de devises par une banque à un exportateur :", choix: ["Crée de la monnaie", "Détruit de la monnaie", "N'a pas d'effet", "Réduit les avoirs de réserve"], bonne: 0, explication: "La banque paie en dirhams nouveaux : contrepartie extérieure." },
      { q: "Dans l'approche de la monnaie endogène :", choix: ["Les crédits déterminent le besoin de monnaie centrale", "La banque centrale fixe la quantité de crédits", "Le multiplicateur est toujours égal à 1", "Les dépôts précèdent toujours les crédits"], bonne: 0, explication: "La banque centrale fixe le prix (taux directeur) et fournit la quantité demandée." },
      { q: "Une hausse de la monnaie fiduciaire en circulation avant l'Aïd :", choix: ["Resserre la liquidité bancaire", "Élargit la liquidité bancaire", "N'a aucun effet sur les banques", "Augmente la réserve monétaire"], bonne: 0, explication: "Les banques doivent acheter les billets à BAM contre monnaie centrale." },
      { q: "Pour 100 de crédits nouveaux avec un multiplicateur de 4, le besoin de monnaie centrale est de :", choix: ["25", "400", "4", "100"], bonne: 0, explication: "Diviseur de crédit : 100 / 4." },
      { q: "La réserve monétaire au Maroc est :", choix: ["Un montant que les banques doivent conserver sur leur compte à Bank Al-Maghrib", "Les réserves de change du pays", "Les fonds propres des banques", "Le stock d'or de l'État"], bonne: 0, explication: "C'est la réserve obligatoire exprimée en pourcentage de certains dépôts." },
    ],
  },
  4: {
    titre: "La demande de monnaie",
    description: "Demande de monnaie : équation de Fisher et de Cambridge, motifs de Keynes et trappe à liquidité, modèle de Baumol-Tobin, Friedman et la règle monétariste.",
    resume: md`
## L'essentiel — La demande de monnaie

- Détenir de la monnaie a un **coût d'opportunité** : l'intérêt perdu.
- **Fisher** : $MV = PT$ (ou $MV = PY$) ; identité comptable, théorie si $V$ stable, $Y$ fixé et causalité $M \to P$ : **neutralité** de la monnaie.
- En taux de croissance : $g_M + g_V \approx \pi + g_Y$.
- **Cambridge** : $M^d = k\,PY$ avec $k = 1/V$ ; on raisonne en désir de détention.
- **Keynes** : motifs de **transaction** et de **précaution** (fonction de $Y$), de **spéculation** (fonction décroissante de $i$) ; $L = L_1(Y) + L_2(i)$ ; **trappe à liquidité** aux taux très bas.
- **Baumol-Tobin** : $CT = b\,Y/C + i\,C/2$ ; $C^* = \sqrt{2bY/i}$ ; demande $M^d = C^*/2 = \sqrt{bY/(2i)}$ ; élasticités + 1/2 au revenu et − 1/2 au taux.
- **Friedman** : demande d'encaisses réelles fonction du **revenu permanent** et des rendements des actifs ; demande stable ; « l'inflation est toujours et partout un phénomène monétaire ».
- Règle monétariste : croissance constante de la monnaie ; abandonnée car $V$ est devenue instable ; les banques centrales pilotent un taux.
`,
    exercices: md`
### Exercice 2 — Équation quantitative

Dans une économie, M3 = 1 200 milliards de DH et le PIB nominal = 1 500 milliards de DH.

1. Calculez la vitesse de circulation et le coefficient $k$ de Cambridge.
2. L'année suivante, M3 augmente de 6 %, la production réelle de 3 % et la vitesse baisse de 2 %. Quelle inflation obtient-on (approximation) ?

<details><summary>Voir le corrigé</summary>

1. $V = 1\,500 / 1\,200 =$ **1,25** ; $k = 1 / V =$ **0,8**.
2. $\pi \approx g_M + g_V - g_Y = 6 - 2 - 3 =$ **1 %**. La baisse de la vitesse (hausse de la demande de monnaie) absorbe une partie de la monnaie nouvelle.

</details>

### Exercice 3 — Trésorerie d'un commerçant

Un commerçant encaisse 600 000 DH par an qu'il place à 4 % et retire au fur et à mesure ; chaque opération de retrait lui coûte 30 DH.

1. Calculez le montant optimal de chaque retrait et l'encaisse moyenne.
2. Que devient l'encaisse moyenne si son chiffre d'affaires quadruple ?

<details><summary>Voir le corrigé</summary>

1. $C^* = \sqrt{2 \times 30 \times 600\,000 / 0{,}04} = \sqrt{900\,000\,000} =$ **30 000 DH** ; encaisse moyenne **15 000 DH** ; 20 retraits par an.
2. Le revenu est multiplié par 4, l'encaisse par $\sqrt{4} = 2$ : **30 000 DH**. Les économies d'échelle font que l'encaisse croît moins vite que l'activité.

</details>
`,
    qcm: [
      { q: "Dans l'équation de Fisher MV = PT, V représente :", choix: ["La vitesse de circulation de la monnaie", "La valeur de la production", "Le volume des transactions", "La valeur de la monnaie"], bonne: 0, explication: "Nombre moyen d'utilisations d'une unité de monnaie." },
      { q: "Pour les classiques, la monnaie est neutre signifie que :", choix: ["Elle n'affecte que les prix, pas les variables réelles", "Elle n'a pas de valeur", "Elle n'est pas créée par les banques", "Elle ne circule pas"], bonne: 0, explication: "C'est un voile sur les échanges." },
      { q: "Dans l'approche de Cambridge, k est égal à :", choix: ["L'inverse de la vitesse de circulation", "Le taux d'intérêt", "Le multiplicateur de crédit", "Le niveau des prix"], bonne: 0, explication: "M = kPY et MV = PY donnent k = 1/V." },
      { q: "Le motif de spéculation de Keynes dépend surtout :", choix: ["Du taux d'intérêt", "Du revenu", "Du niveau des prix", "Du nombre de retraits"], bonne: 0, explication: "La demande spéculative est décroissante avec le taux." },
      { q: "La trappe à liquidité correspond à une situation où :", choix: ["Le taux est si bas que la demande de monnaie devient infinie", "L'inflation est très forte", "Les banques manquent de billets", "La vitesse de circulation est maximale"], bonne: 0, explication: "Une expansion monétaire ne fait plus baisser le taux." },
      { q: "Dans le modèle de Baumol-Tobin, l'encaisse moyenne détenue est égale à :", choix: ["La moitié du montant de chaque retrait", "Le montant de chaque retrait", "Le revenu annuel divisé par 12", "Le coût d'un retrait"], bonne: 0, explication: "M = C/2 car l'encaisse décroît régulièrement entre deux retraits." },
      { q: "Selon Baumol-Tobin, si le taux d'intérêt est multiplié par 4, la demande de monnaie est :", choix: ["Divisée par 2", "Divisée par 4", "Multipliée par 2", "Inchangée"], bonne: 0, explication: "Elle est proportionnelle à la racine de 1/i." },
      { q: "Le revenu permanent est au cœur de la théorie de :", choix: ["Friedman", "Keynes", "Fisher", "Baumol"], bonne: 0, explication: "La nouvelle théorie quantitative (1956)." },
      { q: "Masse monétaire + 10 %, production réelle + 3 %, vitesse stable : l'inflation approchée est de :", choix: ["7 %", "13 %", "3 %", "10 %"], bonne: 0, explication: "10 − 3 = 7." },
      { q: "La règle monétariste recommande :", choix: ["Une croissance constante de la masse monétaire", "Un taux d'intérêt nul", "Une politique budgétaire active", "Un taux de change fixe"], bonne: 0, explication: "Une règle stable plutôt qu'une politique discrétionnaire." },
    ],
  },
  5: {
    titre: "Le système financier : finance directe et intermédiation",
    description: "Système financier : besoins de financement, finance directe et indirecte, rôle des banques, sélection adverse, aléa moral et rationnement du crédit.",
    resume: md`
## L'essentiel — Finance directe et intermédiation

- **Capacité de financement** : épargne > investissement (surtout les ménages) ; **besoin** : investissement > épargne (entreprises, État en déficit).
- **Finance directe** : émission de titres achetés par les épargnants ; **finance indirecte** : crédit d'un intermédiaire qui supporte le risque.
- **Taux d'intermédiation** = financements intermédiés / financements totaux.
- Hicks : **économie d'endettement** (crédit bancaire, Maroc) / **économie de marchés financiers** ; les « 3 D » : décloisonnement, déréglementation, désintermédiation.
- Raisons d'être des banques : **coûts de transaction** (Gurley et Shaw), **transformation** des échéances, **mutualisation** des risques, réduction des **asymétries d'information**.
- **Sélection adverse** (avant le contrat, Akerlof 1970) ; **aléa moral** (après le contrat).
- **Rationnement du crédit** (Stiglitz et Weiss, 1981) : au-delà d'un taux, le rendement attendu baisse ; la banque refuse des demandes au lieu de monter le taux.
- Maroc : loi bancaire **103-12** ; supervision **Bank Al-Maghrib** (crédit), **AMMC** (marché des capitaux), **ACAPS** (assurances) ; garanties **Tamwilcom**, bureaux de crédit.
`,
    exercices: md`
### Exercice 2 — Sélection adverse ou aléa moral ?

Qualifiez chaque situation : a) une banque qui augmente ses taux voit partir ses meilleurs clients ; b) un emprunteur utilise un crédit d'équipement pour acheter une voiture personnelle ; c) un assuré contre le vol ne ferme plus sa porte à clé ; d) seuls les conducteurs qui se savent imprudents souscrivent l'assurance la plus chère.

<details><summary>Voir le corrigé</summary>

a) **Sélection adverse** : le taux trie les emprunteurs avant le contrat. b) **Aléa moral** : comportement après le contrat. c) **Aléa moral**. d) **Sélection adverse**.

</details>

### Exercice 3 — Capacités et besoins de financement

Dans une économie, l'épargne des ménages est de 260 et leur investissement (logement) de 120 ; l'épargne des entreprises est de 180 et leur investissement de 300 ; l'État a une épargne de 20 et investit 90.

1. Calculez la capacité ou le besoin de financement de chaque secteur.
2. Quel est le solde vis-à-vis du reste du monde ?

<details><summary>Voir le corrigé</summary>

1. Ménages : 260 − 120 = **+ 140** (capacité) ; entreprises : 180 − 300 = **− 120** (besoin) ; État : 20 − 90 = **− 70** (besoin).
2. Solde national : 140 − 120 − 70 = **− 50** : l'économie a un besoin de financement de 50, couvert par le reste du monde (déficit courant).

</details>
`,
    qcm: [
      { q: "Un agent dont l'épargne dépasse l'investissement a :", choix: ["Une capacité de financement", "Un besoin de financement", "Un déficit courant", "Une dette nette"], bonne: 0, explication: "C'est le cas habituel des ménages." },
      { q: "L'émission d'obligations achetées par des particuliers relève de :", choix: ["La finance directe", "La finance indirecte", "La création monétaire", "Le rationnement du crédit"], bonne: 0, explication: "Le prêteur détient une créance sur l'émetteur." },
      { q: "Dans une économie d'endettement, le financement dominant est :", choix: ["Le crédit bancaire", "L'émission d'actions", "L'autofinancement", "L'émission d'obligations"], bonne: 0, explication: "Selon la distinction de Hicks." },
      { q: "La sélection adverse intervient :", choix: ["Avant la signature du contrat", "Après la signature du contrat", "Au remboursement", "Seulement sur le marché des actions"], bonne: 0, explication: "Le prêteur ne distingue pas les bons et les mauvais emprunteurs." },
      { q: "L'aléa moral désigne :", choix: ["Un changement de comportement de l'emprunteur après le contrat", "Le tri des emprunteurs par le taux", "Une erreur de la banque centrale", "Une baisse des taux"], bonne: 0, explication: "L'emprunteur prend plus de risques qu'annoncé." },
      { q: "Selon Stiglitz et Weiss, une hausse du taux d'intérêt peut :", choix: ["Réduire le rendement attendu de la banque", "Toujours augmenter les profits bancaires", "Supprimer le risque de défaut", "Augmenter la qualité des emprunteurs"], bonne: 0, explication: "Les bons emprunteurs renoncent : sélection adverse." },
      { q: "Le rationnement du crédit signifie que :", choix: ["La banque refuse des demandes au lieu de monter son taux", "Le crédit est interdit", "La banque centrale fixe les crédits par banque", "Les crédits sont gratuits"], bonne: 0, explication: "Un excès de demande durable à un taux modéré." },
      { q: "Les compagnies d'assurance au Maroc sont supervisées par :", choix: ["L'ACAPS", "Bank Al-Maghrib", "L'AMMC", "L'Office des changes"], bonne: 0, explication: "Autorité de contrôle des assurances et de la prévoyance sociale." },
      { q: "La transformation des échéances par les banques consiste à :", choix: ["Financer des crédits longs avec des dépôts courts", "Changer la devise des dépôts", "Transformer les crédits en actions", "Allonger la durée des dépôts"], bonne: 0, explication: "C'est un service et une source de risque de liquidité." },
      { q: "Crédits 800, titres 200 dont 50 détenus par des institutions financières : le taux d'intermédiation au sens large est de :", choix: ["85 %", "80 %", "20 %", "75 %"], bonne: 0, explication: "(800 + 50) / 1 000." },
    ],
  },
  6: {
    titre: "La banque centrale et la politique monétaire",
    description: "Bank Al-Maghrib et la politique monétaire : loi 40-17, taux directeur, avances à 7 jours, corridor, réserve monétaire, canaux de transmission, règle de Taylor.",
    resume: md`
## L'essentiel — Banque centrale et politique monétaire

- Bank Al-Maghrib (1959), **loi 40-17** (2019) : émission, politique monétaire (objectif principal : **stabilité des prix**), politique de change et réserves, supervision bancaire, stabilité financière, systèmes de paiement, **prêteur en dernier ressort**.
- **Indépendance** = crédibilité (Kydland et Prescott ; Barro et Gordon).
- Trois niveaux : objectif **final**, objectif **intermédiaire** ou indicateur, objectif **opérationnel** (taux interbancaire au jour le jour).
- Le Conseil fixe le **taux directeur** chaque trimestre : 3 % en mars 2023, 2,25 % depuis mars 2025 (maintenu le 22 septembre 2026).
- Instruments : **avances à 7 jours** sur appel d'offres, pensions livrées, prêts garantis, swaps de change, **réserve monétaire**.
- **Facilités permanentes** à 24 heures : taux directeur ± 100 points de base = **corridor** du taux interbancaire.
- Canaux de transmission : taux d'intérêt, crédit, prix d'actifs, taux de change, **anticipations** ; délais de plusieurs trimestres.
- **Règle de Taylor** : $i = r^* + \pi + 0{,}5(\pi - \pi^*) + 0{,}5(y - y^*)$ ; principe de Taylor : + 1,5 point de taux pour + 1 point d'inflation.
- Taux réel : $1 + r = (1 + i)/(1 + \pi)$, approximativement $r \approx i - \pi$.
`,
    exercices: md`
### Exercice 2 — Taux réel et principe de Taylor

L'inflation passe de 2 % à 6 %. La banque centrale relève son taux directeur de 2,5 % à 4 %.

1. Calculez le taux réel approché avant et après.
2. La politique monétaire est-elle devenue plus restrictive ? Que recommanderait le principe de Taylor ?

<details><summary>Voir le corrigé</summary>

1. Avant : 2,5 − 2 = **+ 0,5 %** ; après : 4 − 6 = **− 2 %**.
2. Non : malgré la hausse du taux nominal, le taux réel a baissé de 2,5 points : la politique est devenue **plus accommodante**. Le principe de Taylor recommande de relever le taux nominal de 1,5 × 4 = 6 points, à **8,5 %**, pour que le taux réel augmente.

</details>

### Exercice 3 — Le corridor

Le taux directeur est de 2,25 %.

1. Donnez le taux de la facilité de dépôt et celui des avances à 24 heures.
2. Une banque excédentaire se voit proposer un prêt interbancaire à 1 %. Que fait-elle ?

<details><summary>Voir le corrigé</summary>

1. Facilité de dépôt : 2,25 − 1 = **1,25 %** ; avances à 24 heures : 2,25 + 1 = **3,25 %**.
2. Elle refuse et dépose ses excédents à la banque centrale à **1,25 %** : le taux interbancaire ne peut pas descendre sous ce plancher.

</details>
`,
    qcm: [
      { q: "Le statut actuel de Bank Al-Maghrib résulte de :", choix: ["La loi 40-17", "La loi 103-12", "La loi 43-12", "La loi 31-08"], bonne: 0, explication: "Loi portant statut de Bank Al-Maghrib, 2019." },
      { q: "L'objectif principal de la politique monétaire de Bank Al-Maghrib est :", choix: ["La stabilité des prix", "Le plein emploi", "L'équilibre budgétaire", "La hausse de la Bourse"], bonne: 0, explication: "Fixé par son statut." },
      { q: "Le principal instrument d'injection de liquidité de Bank Al-Maghrib est :", choix: ["Les avances à 7 jours sur appel d'offres", "L'émission d'actions", "Les bons du Trésor", "La facilité de dépôt"], bonne: 0, explication: "Elles sont servies chaque semaine au taux directeur." },
      { q: "Avec un taux directeur de 2,25 %, le taux des avances à 24 heures est de :", choix: ["3,25 %", "1,25 %", "2,25 %", "4,25 %"], bonne: 0, explication: "Taux directeur + 100 points de base." },
      { q: "Le corridor des facilités permanentes sert à :", choix: ["Encadrer le taux interbancaire au jour le jour", "Fixer les taux des crédits immobiliers", "Limiter les réserves de change", "Fixer le cours du dirham"], bonne: 0, explication: "Le taux interbancaire reste entre les deux facilités." },
      { q: "Le Conseil de Bank Al-Maghrib se réunit en principe :", choix: ["Une fois par trimestre", "Chaque semaine", "Une fois par an", "Chaque mois"], bonne: 0, explication: "En mars, juin, septembre et décembre." },
      { q: "Selon la règle de Taylor, avec un taux réel neutre de 1 %, une inflation de 4 %, une cible de 2 % et un écart de production nul, le taux recommandé est :", choix: ["6 %", "5 %", "4 %", "7 %"], bonne: 0, explication: "1 + 4 + 0,5 × 2 + 0 = 6 %." },
      { q: "Le canal des anticipations fonctionne surtout si la banque centrale est :", choix: ["Crédible", "Endettée", "Dépendante du gouvernement", "Petite"], bonne: 0, explication: "Les agents croient alors qu'elle atteindra son objectif." },
      { q: "Taux nominal 3 %, inflation 5 % : le taux réel approché est de :", choix: ["− 2 %", "+ 2 %", "8 %", "+ 3 %"], bonne: 0, explication: "3 − 5." },
      { q: "Le rôle de prêteur en dernier ressort consiste à :", choix: ["Prêter à une banque solvable à court de liquidité pour éviter une panique", "Prêter au Trésor sans limite", "Racheter les actions des banques", "Garantir tous les dépôts"], bonne: 0, explication: "Selon la doctrine de Bagehot." },
    ],
  },
  7: {
    titre: "Les crises financières et la régulation bancaire",
    description: "Crises financières et régulation bancaire : paniques bancaires, crise de 2008, Bâle III, ratios de Bank Al-Maghrib, macroprudentiel et filet de sécurité.",
    resume: md`
## L'essentiel — Crises financières et régulation

- La **transformation** rend les banques fragiles : elles ne peuvent pas rembourser tous les dépôts en même temps.
- **Panique bancaire** autoréalisatrice (Diamond et Dybvig, 1983) : les ventes forcées transforment un problème de **liquidité** en problème de **solvabilité**.
- Risques bancaires : crédit, liquidité, taux, marché, opérationnel.
- **Minsky** : l'endettement croît pendant l'euphorie jusqu'au retournement ; crise de **2007-2009** : subprimes, titrisation, blocage interbancaire, Lehman Brothers (15 septembre 2008).
- **Bâle I** (1988, ratio Cooke 8 %), **Bâle II** (2004, trois piliers), **Bâle III** (2010 : fonds propres de qualité, levier ≥ 3 %, LCR ≥ 100 %, NSFR).
- Ratio de solvabilité = fonds propres / **actifs pondérés par les risques**.
- **Bank Al-Maghrib** : fonds propres de base ≥ **8 %**, catégorie 1 ≥ **9 %**, ratio global ≥ **12 %**.
- **Macroprudentiel** : coussins contracycliques, surcharges systémiques, plafonds de crédit, tests de résistance ; comité de coordination BAM-AMMC-ACAPS.
- **Filet de sécurité** : prêteur en dernier ressort (Bagehot), garantie des dépôts, résolution ; contrepartie : **aléa moral**.
`,
    exercices: md`
### Exercice 2 — Liquidité à court terme

Une banque détient 240 millions de DH d'actifs liquides de haute qualité. Sur 30 jours de stress, elle prévoit 400 de sorties de trésorerie et 160 d'entrées.

1. Calculez son LCR.
2. Respecte-t-elle la norme ? Proposez une mesure.

<details><summary>Voir le corrigé</summary>

1. Sorties nettes : 400 − 160 = 240 ; LCR = 240 / 240 = **100 %**.
2. Elle respecte tout juste la norme de 100 %. Pour se donner une marge, elle peut acheter davantage de bons du Trésor (actifs liquides) ou allonger la durée de ses ressources (dépôts à terme, emprunts à plus d'un mois), ce qui réduit les sorties prévues.

</details>

### Exercice 3 — Effet d'un nouveau crédit sur la solvabilité

Une banque a 120 de fonds propres totaux et 1 000 d'actifs pondérés. Elle envisage d'accorder 100 de crédits aux entreprises (pondération 100 %) ou d'acheter 100 de bons du Trésor (0 %).

1. Calculez le ratio actuel et le ratio après chaque opération.
2. Quel problème cette pondération pose-t-elle pour le financement des PME ?

<details><summary>Voir le corrigé</summary>

1. Actuel : 120 / 1 000 = **12 %**. Après le crédit : 120 / 1 100 ≈ **10,9 %** (sous 12 %) ; après les bons du Trésor : 120 / 1 000 = **12 %**.
2. La pondération pousse la banque à préférer les titres publics aux crédits aux entreprises (effet d'éviction) : c'est l'une des raisons des garanties publiques (Tamwilcom), qui réduisent la pondération des crédits garantis.

</details>
`,
    qcm: [
      { q: "Selon Diamond et Dybvig, une panique bancaire peut toucher :", choix: ["Même une banque saine, car elle est autoréalisatrice", "Seulement une banque insolvable", "Seulement la banque centrale", "Seulement les banques étrangères"], bonne: 0, explication: "Chacun retire parce qu'il craint que les autres retirent." },
      { q: "Le ratio de solvabilité rapporte les fonds propres :", choix: ["Aux actifs pondérés par les risques", "Au total du bilan non pondéré", "Aux dépôts", "Au résultat net"], bonne: 0, explication: "Le total non pondéré sert au ratio de levier." },
      { q: "Au Maroc, le ratio de solvabilité global minimum exigé par Bank Al-Maghrib est de :", choix: ["12 %", "8 %", "3 %", "100 %"], bonne: 0, explication: "Avec 9 % pour la catégorie 1 et 8 % pour les fonds propres de base." },
      { q: "Le ratio de levier de Bâle III doit être d'au moins :", choix: ["3 %", "8 %", "12 %", "100 %"], bonne: 0, explication: "Fonds propres de catégorie 1 / expositions totales." },
      { q: "Le LCR compare :", choix: ["Les actifs liquides de haute qualité aux sorties nettes de trésorerie sur 30 jours", "Les fonds propres aux crédits", "Les crédits aux dépôts", "Les dépôts à vue aux dépôts à terme"], bonne: 0, explication: "Il doit être d'au moins 100 %." },
      { q: "La faillite de Lehman Brothers a eu lieu en :", choix: ["Septembre 2008", "Octobre 1987", "Mars 2020", "Août 2011"], bonne: 0, explication: "Le 15 septembre 2008." },
      { q: "Un coussin contracyclique consiste à :", choix: ["Exiger plus de fonds propres en période d'euphorie du crédit", "Baisser le taux directeur en récession", "Interdire les crédits immobiliers", "Garantir tous les dépôts"], bonne: 0, explication: "C'est un outil macroprudentiel." },
      { q: "Selon la règle de Bagehot, le prêteur en dernier ressort prête :", choix: ["À des banques solvables, contre de bonnes garanties, à un taux pénalisant", "À toutes les banques, sans garantie, à taux nul", "Uniquement à l'État", "Uniquement aux banques insolvables"], bonne: 0, explication: "Il soutient la liquidité sans récompenser l'imprudence." },
      { q: "La garantie des dépôts a pour effet pervers :", choix: ["D'encourager l'aléa moral des banques", "De provoquer des paniques", "De réduire les dépôts", "D'augmenter l'inflation"], bonne: 0, explication: "Une banque protégée peut prendre plus de risques." },
      { q: "Avec 90 de fonds propres et 750 d'actifs pondérés, le ratio de solvabilité est de :", choix: ["12 %", "8,3 %", "9 %", "15 %"], bonne: 0, explication: "90 / 750 = 0,12." },
    ],
  },
};

export default chapitres;
