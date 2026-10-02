// Choix d'investissement et modes de financement (S5, GFF) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM. IS de la loi de finances 2026.
const md = String.raw;

const chapitres = {
  1: {
    titre: "L'investissement et la décision d'investir",
    description: "Investissement au sens comptable, économique et financier, typologie des projets, processus de décision et cadre marocain (IS, Charte de l'investissement).",
    resume: md`
## L'essentiel — L'investissement et la décision d'investir

- **Sens comptable** : immobilisation (classe 2 du CGNC) ; **sens économique** : accroissement du capital productif ; **sens financier** : dépense certaine aujourd'hui contre des flux futurs.
- Le sens financier inclut des **charges** comptables : formation, publicité, recherche.
- Décision lourde : **montants élevés**, **longue durée**, souvent **irréversible**, fondée sur des **prévisions incertaines**.
- Par nature : **corporels**, **incorporels**, **financiers**.
- Par objectif : **remplacement**, **modernisation**, **expansion**, **diversification**, **stratégique**, **obligatoire** (le risque croît du remplacement à la diversification).
- Par relation : projets **indépendants** (tous les rentables), **mutuellement exclusifs** (à classer), **complémentaires** (à évaluer ensemble).
- Processus : identification → études (technique, commerciale, juridique et fiscale) → évaluation financière → décision → financement → contrôle a posteriori.
- **Séparer investissement et financement** : pas d'intérêts d'emprunt dans les flux ; le coût du financement est dans le **taux d'actualisation**.
- Environnement marocain : taux directeur de **Bank Al-Maghrib**, **IS 20 %** (35 % au-delà de 100 M DH), économie d'impôt des amortissements, **Charte de l'investissement** (loi-cadre 03-22, primes plafonnées à 30 %), **CRI**.
- Trois dimensions : **rentabilité** (VAN, TRI), **liquidité** (délai de récupération), **risque**.
`,
    exercices: md`
### Exercice 2 — Investissement ou non ?

Pour la SARL Rabat Print (imprimerie), dites si chaque dépense est un investissement au sens comptable, au sens financier, ou aux deux :
a) Achat d'une presse numérique de 900 000 DH.
b) Campagne publicitaire de lancement d'un service d'impression en ligne : 120 000 DH.
c) Achat de papier pour les commandes du mois : 60 000 DH.
d) Prise de participation de 30 % dans une société de distribution : 500 000 DH.
e) Formation de six techniciens au nouveau logiciel de mise en page : 45 000 DH.
f) Développement d'un site de commande en ligne : 150 000 DH.

<details><summary>Voir le corrigé</summary>

| Dépense | Sens comptable | Sens financier | Justification |
|---|:--:|:--:|---|
| a) Presse numérique | Oui | Oui | Immobilisation corporelle, flux futurs attendus |
| b) Publicité de lancement | Non | Oui | Charge comptable, mais dépense destinée à créer des ventes futures |
| c) Papier du mois | Non | Non | Consommation courante d'exploitation |
| d) Participation de 30 % | Oui | Oui | Immobilisation financière (titres de participation) |
| e) Formation | Non | Oui | Charge comptable, avantage futur (productivité) |
| f) Site de commande | Oui | Oui | Immobilisation incorporelle si les conditions du CGNC sont réunies |

</details>

### Exercice 3 — Pourquoi séparer investissement et financement ?

Un projet coûte 100 000 DH aujourd'hui et rapporte un flux unique de 112 000 DH dans un an. Il est financé par un emprunt de 100 000 DH au taux de 8 %. Le taux d'actualisation retenu, égal au coût du financement, est de 8 %.
1. Calculez la VAN du projet en actualisant ses seuls flux d'exploitation.
2. Un stagiaire retire des flux les 8 000 DH d'intérêts et actualise à 8 %, sans tenir compte de l'emprunt. Quelle VAN obtient-il ? Quelle erreur commet-il ?

<details><summary>Voir le corrigé</summary>

**1)** $VAN = -100\,000 + \frac{112\,000}{1{,}08} = -100\,000 + 103\,703{,}70 = \mathbf{3\,703{,}70\ DH}$ : le projet est rentable.

**2)** $VAN = -100\,000 + \frac{104\,000}{1{,}08} = -100\,000 + 96\,296{,}30 = \mathbf{-3\,703{,}70\ DH}$ : le projet serait rejeté à tort. Le stagiaire compte **deux fois** le coût du financement : une fois en retirant les intérêts des flux, une seconde fois en actualisant au taux de 8 %, qui représente déjà ce coût. C'est pourquoi on évalue le projet **sans les flux de financement** et on intègre le coût des ressources dans le **taux d'actualisation**.

</details>
`,
    qcm: [
      { q: "Au sens financier, un investissement est :", choix: ["Uniquement une immobilisation inscrite au bilan", "Une dépense certaine aujourd'hui en vue de flux futurs", "Un placement en bourse uniquement", "Une charge courante d'exploitation"], bonne: 1, explication: "Le sens financier est plus large que le sens comptable." },
      { q: "Une campagne publicitaire de lancement est, au sens comptable :", choix: ["Une immobilisation corporelle", "Une charge", "Un investissement financier", "Une dette"], bonne: 1, explication: "Elle est en revanche un investissement au sens financier." },
      { q: "Le remplacement d'un four usé par un four identique est un investissement :", choix: ["De diversification", "De remplacement", "Stratégique", "Financier"], bonne: 1, explication: "C'est le type d'investissement le moins risqué." },
      { q: "Deux projets qui ne peuvent pas être réalisés ensemble sont :", choix: ["Indépendants", "Mutuellement exclusifs", "Complémentaires", "Obligatoires"], bonne: 1, explication: "Il faut les classer et ne retenir que le meilleur." },
      { q: "Un projet qui n'a de sens qu'avec un autre est :", choix: ["Indépendant", "Exclusif", "Complémentaire", "De remplacement"], bonne: 2, explication: "On évalue alors les deux projets ensemble." },
      { q: "Les intérêts de l'emprunt qui finance un projet :", choix: ["Sont retirés des flux du projet", "Ne figurent pas dans les flux du projet", "Sont ajoutés à la dépense initiale", "Sont actualisés à part au taux zéro"], bonne: 1, explication: "Le coût du financement est pris en compte par le taux d'actualisation." },
      { q: "Un investissement imposé par une norme environnementale doit être choisi selon :", choix: ["Sa VAN la plus élevée", "Le coût actualisé le plus faible parmi les solutions conformes", "Son délai de récupération", "Son TRI"], bonne: 1, explication: "Il s'impose : seule sa solution technique se choisit." },
      { q: "En 2026, le taux de l'IS pour un bénéfice inférieur à 100 millions de DH est de :", choix: ["10 %", "20 %", "31 %", "35 %"], bonne: 1, explication: "35 % au-delà de 100 millions de DH, 40 % pour les établissements de crédit." },
      { q: "La Charte de l'investissement en vigueur résulte de :", choix: ["La loi 15-95", "La loi-cadre 03-22", "La loi 9-88", "La loi 17-95"], bonne: 1, explication: "Elle prévoit notamment des primes à l'investissement." },
      { q: "Le délai de récupération mesure surtout :", choix: ["La rentabilité", "La liquidité du projet", "Le risque de change", "Le coût du capital"], bonne: 1, explication: "Il indique en combien de temps la mise est récupérée." },
    ],
  },

  2: {
    titre: "Les flux de trésorerie d'un projet",
    description: "Flux d'un projet : capital investi hors TVA, BFR et ses variations, cash-flows nets, économie d'impôt des amortissements et valeur résiduelle nette.",
    resume: md`
## L'essentiel — Les flux de trésorerie d'un projet

- On juge un projet sur ses **flux de trésorerie différentiels**, pas sur son résultat comptable ; on ignore les **coûts passés**.
- **Capital investi** = prix **HT** + frais accessoires (transport, installation, douane) + **BFR initial** − primes éventuelles ; la TVA récupérable n'est pas un coût.
- **BFR** = stocks + créances clients − dettes fournisseurs ; chaque **augmentation** est un décaissement en début d'année ; le BFR cumulé est **récupéré** en fin de projet.
- **EBE** = CA − charges décaissables ; **CF** = (EBE − DAP)(1 − t) + DAP.
- **Méthode additive** : $CF = EBE(1-t) + t \times DAP$ ; $t \times DAP$ = **économie d'impôt** des amortissements.
- Amortissement fiscal linéaire ou **dégressif** (coefficients 1,5 ; 2 ; 3) : le dégressif avance l'économie d'impôt.
- Une perte du projet procure une **économie d'IS** si l'entreprise est bénéficiaire par ailleurs.
- **Pas d'intérêts d'emprunt** dans les flux ; flux placés en **fin d'année**.
- **Valeur résiduelle nette** = prix de cession − t × (prix − VNC) ; si VNC = 0 : prix × (1 − t).
- Échéancier : date 0 = − investissement − BFR ; années 1 à n = CF − ΔBFR ; année n = + VR nette + BFR récupéré.
`,
    exercices: md`
### Exercice 2 — Amortissement linéaire ou dégressif ?

Une machine de 400 000 DH HT, amortissable sur 5 ans, peut être amortie linéairement ou selon le mode dégressif (coefficient 2, taux de 40 %). IS : 20 % ; taux d'actualisation : 10 %.
1. Établissez le plan d'amortissement dégressif (passage au linéaire quand l'annuité linéaire sur la durée restante devient supérieure).
2. Calculez l'économie d'impôt annuelle dans les deux cas.
3. Comparez la valeur actuelle des économies d'impôt. Conclusion ?

<details><summary>Voir le corrigé</summary>

**1)** Plan dégressif au taux de 40 % :

| Année | VNC début | Annuité dégressive (40 %) | Annuité linéaire sur durée restante | Dotation retenue | VNC fin |
|---|---:|---:|---:|---:|---:|
| 1 | 400 000 | 160 000 | 80 000 | 160 000 | 240 000 |
| 2 | 240 000 | 96 000 | 60 000 | 96 000 | 144 000 |
| 3 | 144 000 | 57 600 | 48 000 | 57 600 | 86 400 |
| 4 | 86 400 | 34 560 | 43 200 | **43 200** | 43 200 |
| 5 | 43 200 | 17 280 | 43 200 | **43 200** | 0 |

**2)** Linéaire : $80\,000 \times 20\,\% = 16\,000$ DH chaque année. Dégressif : 32 000 ; 19 200 ; 11 520 ; 8 640 ; 8 640 DH. Le total est le même (**80 000 DH**), seul le calendrier change.

**3)** Valeur actuelle à 10 % :
- linéaire : $16\,000 \times \frac{1 - 1{,}1^{-5}}{0{,}1} = 16\,000 \times 3{,}790787 = \mathbf{60\,652{,}59\ DH}$ ;
- dégressif : $\frac{32\,000}{1{,}1} + \frac{19\,200}{1{,}1^2} + \frac{11\,520}{1{,}1^3} + \frac{8\,640}{1{,}1^4} + \frac{8\,640}{1{,}1^5} = \mathbf{64\,879{,}82\ DH}$.

Le mode dégressif fait gagner environ **4 227 DH** de valeur actuelle : l'économie d'impôt arrive plus tôt. Il améliore la VAN du projet sans changer le total des impôts payés.

</details>

### Exercice 3 — Valeur résiduelle et BFR en jours

La SARL Oujda Froid exploite pendant 4 ans un camion frigorifique acheté 500 000 DH HT et amorti linéairement sur 5 ans. Son chiffre d'affaires annuel est de 1 800 000 DH HT ; le BFR représente 36 jours de chiffre d'affaires (année de 360 jours). IS : 20 %.
1. Calculez le BFR du projet.
2. Calculez la valeur résiduelle nette d'impôt si le camion est revendu à la fin de l'année 4 : a) 150 000 DH ; b) 60 000 DH.
3. Quel est le flux de fin de projet dans le cas a), hors CF d'exploitation ?

<details><summary>Voir le corrigé</summary>

**1)** $BFR = 1\,800\,000 \times \frac{36}{360} = \mathbf{180\,000\ DH}$.

**2)** VNC à la fin de l'année 4 : $500\,000 - 4 \times 100\,000 = 100\,000$ DH.
- a) Plus-value : $150\,000 - 100\,000 = 50\,000$ DH ; IS : 10 000 DH ; $VR_{nette} = 150\,000 - 10\,000 = \mathbf{140\,000\ DH}$.
- b) Moins-value : $60\,000 - 100\,000 = -40\,000$ DH ; économie d'IS : 8 000 DH ; $VR_{nette} = 60\,000 + 8\,000 = \mathbf{68\,000\ DH}$.

**3)** Flux de fin de projet : $140\,000 + 180\,000 = \mathbf{320\,000\ DH}$ (valeur résiduelle nette + récupération du BFR, qui n'est pas imposée).

</details>
`,
    qcm: [
      { q: "Pour évaluer un projet, on retient :", choix: ["Son résultat comptable", "Ses flux de trésorerie différentiels", "Son chiffre d'affaires", "Ses charges fixes"], bonne: 1, explication: "Seuls comptent les flux que l'entreprise n'aurait pas sans le projet." },
      { q: "La TVA payée sur l'achat d'une machine :", choix: ["Fait partie du capital investi", "N'en fait pas partie si elle est récupérable", "Est amortie avec la machine", "Est un flux d'exploitation"], bonne: 1, explication: "Le capital investi se calcule hors TVA récupérable." },
      { q: "Le BFR d'un projet est :", choix: ["Une charge déductible", "Un décaissement récupéré en fin de projet", "Un produit imposable", "Ignoré dans les calculs"], bonne: 1, explication: "Il est immobilisé pendant la vie du projet, puis récupéré." },
      { q: "Avec un EBE de 300 000 DH, des DAP de 100 000 DH et un IS de 20 %, le flux net est de :", choix: ["160 000 DH", "200 000 DH", "260 000 DH", "300 000 DH"], bonne: 2, explication: "300 000 × 0,8 + 0,2 × 100 000 = 240 000 + 20 000." },
      { q: "L'économie d'impôt due aux amortissements est égale à :", choix: ["DAP × (1 − t)", "t × DAP", "EBE × t", "DAP / t"], bonne: 1, explication: "La dotation réduit l'impôt sans être décaissée." },
      { q: "Les intérêts de l'emprunt finançant le projet :", choix: ["Sont déduits des flux d'exploitation", "Ne figurent pas dans les flux du projet", "Augmentent le capital investi", "Sont ajoutés à la valeur résiduelle"], bonne: 1, explication: "Le financement est traité séparément." },
      { q: "Une étude de marché déjà payée avant la décision doit être :", choix: ["Ajoutée au capital investi", "Ignorée, car c'est un coût passé", "Amortie sur la durée du projet", "Déduite de la valeur résiduelle"], bonne: 1, explication: "Elle ne dépend pas de la décision d'investir." },
      { q: "Un bien totalement amorti revendu 100 000 DH, avec un IS de 20 %, a une valeur résiduelle nette de :", choix: ["20 000 DH", "80 000 DH", "100 000 DH", "120 000 DH"], bonne: 1, explication: "La plus-value de 100 000 DH est imposée à 20 %." },
      { q: "Le BFR récupéré en fin de projet est :", choix: ["Imposé à l'IS", "Non imposé", "Imposé à moitié", "Soumis à la TVA"], bonne: 1, explication: "Ce n'est pas un produit, mais la libération d'un capital immobilisé." },
      { q: "Par rapport au linéaire, l'amortissement dégressif :", choix: ["Augmente le total des impôts payés", "Avance l'économie d'impôt dans le temps", "Supprime l'IS", "Réduit le capital investi"], bonne: 1, explication: "Le total est identique, mais il est obtenu plus tôt : la VAN augmente." },
    ],
  },

  3: {
    titre: "Les critères de choix en avenir certain",
    description: "VAN, indice de profitabilité, TRI par interpolation et délai de récupération simple et actualisé : formules, règles de décision et exemples chiffrés.",
    resume: md`
## L'essentiel — Critères de choix en avenir certain

- **Actualiser** : $F_t (1+k)^{-t}$ ; $k$ = taux de rentabilité minimal exigé, en général le **coût du capital**, majoré d'une prime si le projet est risqué.
- Flux constants : $V_0 = a \times \frac{1-(1+k)^{-n}}{k}$.
- **VAN** = $-I_0 + \sum CF_t (1+k)^{-t}$ ; projet acceptable si **VAN > 0** ; mesure la **création de valeur** en DH.
- **IP** = $\frac{\sum CF_t (1+k)^{-t}}{I_0} = 1 + \frac{VAN}{I_0}$ ; acceptable si **IP > 1** ; compare des projets de tailles différentes.
- **TRI** : taux qui annule la VAN ; acceptable si **TRI > k** ; c'est le taux maximal d'un financement sans perte.
- Interpolation : $TRI \approx r_1 + (r_2 - r_1) \frac{VAN(r_1)}{VAN(r_1) - VAN(r_2)}$, avec deux taux proches.
- **DRCI** simple (flux bruts) et **actualisé** (flux actualisés) : cumul des flux et interpolation dans l'année de récupération.
- Le DRCI mesure la **liquidité** et le risque, pas la rentabilité : il ignore les flux postérieurs.
- Pour un projet isolé, VAN > 0, IP > 1 et TRI > k vont **ensemble**.
- Convertir les décimales d'années en mois : $0{,}74 \times 12 \approx 9$ mois.
`,
    exercices: md`
### Exercice 2 — Un projet à flux variables

La SARL Tétouan Plast étudie un moule d'injection de 800 000 DH qui procurera des flux nets de 250 000, 300 000, 350 000 et 200 000 DH sur 4 ans. Taux d'actualisation : 9 %.
1. Calculez la VAN et l'IP.
2. Sachant que la VAN est de 4 794,59 DH à 14 % et de − 11 284,26 DH à 15 %, calculez le TRI.
3. Calculez le délai de récupération simple et actualisé.

<details><summary>Voir le corrigé</summary>

**1)**

| Date | Flux | Coefficient $1{,}09^{-t}$ | Flux actualisé | Cumul actualisé |
|---|---:|---:|---:|---:|
| 0 | −800 000 | 1 | −800 000,00 | −800 000,00 |
| 1 | 250 000 | 0,917431 | 229 357,80 | −570 642,20 |
| 2 | 300 000 | 0,841680 | 252 504,00 | −318 138,20 |
| 3 | 350 000 | 0,772183 | 270 264,22 | −47 873,99 |
| 4 | 200 000 | 0,708425 | 141 685,04 | **93 811,06** |

$VAN = \mathbf{93\,811{,}06\ DH}$ ; $IP = 1 + \frac{93\,811{,}06}{800\,000} = \mathbf{1{,}117}$.

**2)** $TRI \approx 14\,\% + 1\,\% \times \frac{4\,794{,}59}{4\,794{,}59 + 11\,284{,}26} = 14\,\% + 0{,}30\,\% = \mathbf{14{,}30\,\%}$, supérieur à 9 %.

**3)** Délai simple : cumul −550 000, −250 000, puis +100 000 en année 3 : $2 + \frac{250\,000}{350\,000} = 2{,}71$ ans, soit **2 ans et environ 9 mois**. Délai actualisé : $3 + \frac{47\,873{,}99}{141\,685{,}04} = 3{,}34$ ans, soit **3 ans et environ 4 mois**.

</details>

### Exercice 3 — Flux minimal et prix maximal

1. La SA Atlas Logistique veut investir 1 000 000 DH dans un entrepôt automatisé d'une durée de 6 ans, sans valeur résiduelle. Son taux exigé est de 12 %. Quel flux net annuel constant minimal doit procurer le projet ?
2. Une machine procurerait 180 000 DH de flux nets par an pendant 7 ans, plus une valeur résiduelle nette de 50 000 DH à la fin de l'année 7. Au taux de 11 %, quel prix maximal l'entreprise peut-elle payer ?

<details><summary>Voir le corrigé</summary>

**1)** Le flux minimal annule la VAN : $1\,000\,000 = CF \times \frac{1 - 1{,}12^{-6}}{0{,}12} = CF \times 4{,}111407$, d'où $CF = \frac{1\,000\,000}{4{,}111407} = \mathbf{243\,225{,}72\ DH}$ par an. En dessous, la VAN serait négative.

**2)** Le prix maximal est la valeur actuelle des flux :
$180\,000 \times \frac{1 - 1{,}11^{-7}}{0{,}11} + 50\,000 \times 1{,}11^{-7} = 180\,000 \times 4{,}712196 + 50\,000 \times 0{,}481658 = 848\,195{,}33 + 24\,082{,}92 = \mathbf{872\,278{,}25\ DH}$.
À ce prix, la VAN est nulle et le TRI est exactement de 11 %.

</details>
`,
    qcm: [
      { q: "Le taux d'actualisation d'un projet représente :", choix: ["Le taux de TVA", "Le taux de rentabilité minimal exigé par l'entreprise", "Le taux de l'IS", "Le taux de croissance des ventes"], bonne: 1, explication: "On retient en général le coût du capital." },
      { q: "Un projet dont la VAN est positive :", choix: ["Doit être rejeté", "Rapporte plus que le taux exigé et crée de la valeur", "A un TRI inférieur au taux exigé", "A un IP inférieur à 1"], bonne: 1, explication: "VAN > 0, IP > 1 et TRI > k vont ensemble." },
      { q: "Pour un capital de 500 000 DH et une VAN de 50 000 DH, l'IP est de :", choix: ["0,10", "1,10", "10", "1,50"], bonne: 1, explication: "IP = 1 + VAN / I0 = 1 + 0,10." },
      { q: "Le TRI est le taux pour lequel :", choix: ["La VAN est maximale", "La VAN est nulle", "Le délai de récupération est nul", "L'IP est égal à 2"], bonne: 1, explication: "C'est le taux de rentabilité propre du projet." },
      { q: "Un projet est acceptable selon le TRI si :", choix: ["TRI < taux exigé", "TRI > taux exigé", "TRI = 0", "TRI > taux de l'IS"], bonne: 1, explication: "Il rapporte alors plus que le coût des fonds." },
      { q: "Si la VAN vaut + 6 000 DH à 10 % et − 4 000 DH à 11 %, le TRI est d'environ :", choix: ["10,4 %", "10,6 %", "10,9 %", "11,5 %"], bonne: 1, explication: "10 % + 1 % × 6 000 / 10 000 = 10,6 %." },
      { q: "Le délai de récupération actualisé est en général :", choix: ["Plus court que le délai simple", "Plus long que le délai simple", "Égal au délai simple", "Toujours de 5 ans"], bonne: 1, explication: "Les flux actualisés sont plus petits, il faut plus de temps pour récupérer la mise." },
      { q: "La principale limite du délai de récupération est qu'il :", choix: ["Exige un taux d'actualisation", "Ignore les flux postérieurs au délai", "Ne s'applique qu'aux grands projets", "Surestime la VAN"], bonne: 1, explication: "C'est un critère de liquidité, pas de rentabilité." },
      { q: "Une machine de 300 000 DH procure 100 000 DH par an. Son délai de récupération simple est de :", choix: ["2 ans", "3 ans", "4 ans", "30 mois"], bonne: 1, explication: "300 000 / 100 000 = 3 ans." },
      { q: "Quand le taux d'actualisation augmente, la VAN d'un projet classique :", choix: ["Augmente", "Diminue", "Ne change pas", "Devient toujours négative"], bonne: 1, explication: "Les flux futurs sont davantage réduits." },
    ],
  },

  4: {
    titre: "Comparer des projets d'investissement",
    description: "Projets exclusifs : conflit entre VAN et TRI, taux de Fisher, VAN et TRI globaux, annuité équivalente pour des durées différentes et rationnement du capital.",
    resume: md`
## L'essentiel — Comparer des projets

- Pour un projet **isolé**, VAN, IP et TRI concordent ; pour **classer** des projets exclusifs, ils peuvent se contredire.
- Causes de conflit : **taille**, **profil** des flux (tôt ou tard), **durée**.
- Hypothèse implicite : la VAN réinvestit les flux au **taux k**, le TRI au **TRI** (souvent irréaliste).
- **Taux de Fisher** : taux qui égalise les VAN ; c'est le **TRI du projet différentiel** (B − A) ; si k < taux de Fisher, on retient le projet à la plus forte VAN à k.
- En cas de conflit, la **VAN** est le critère de référence.
- **Critères globaux** : valeur acquise $A = \sum CF_t (1+i)^{n-t}$ ; $VAN_G = A(1+k)^{-n} - I_0$ ; $TRI_G = (A/I_0)^{1/n} - 1$.
- **Taille** : on teste la rentabilité de l'investissement supplémentaire (projet différentiel) ; à budget limité, on compare les **IP**.
- **Durées différentes** : renouvellement jusqu'au PPCM des durées ou **annuité équivalente** $AE = VAN \times \frac{k}{1-(1+k)^{-n}}$ ; même classement.
- **Rationnement** : maximiser la VAN totale sous le budget ; classer par **IP décroissant** puis vérifier les combinaisons si les projets sont indivisibles.
- Le classement par IP vaut pour des projets **indépendants**, pas pour des projets exclusifs.
`,
    exercices: md`
### Exercice 2 — Critères globaux avec réinvestissement à 6 %

Deux projets exclusifs de 500 000 DH, sur 3 ans, ont les flux suivants : E : 300 000, 250 000, 100 000 ; F : 50 000, 200 000, 500 000. Taux d'actualisation : 9 %. Les flux intermédiaires ne peuvent être replacés qu'au taux de 6 %.
On donne : VAN à 9 % : E = 62 867,70 DH ; F = 100 299,30 DH. VAN à 17 % : E = 1 475,70 ; F = 1 023,03. VAN à 18 % : E = − 5 353,52 ; F = − 9 674,80.
1. Calculez le TRI de chaque projet. Les critères concordent-ils ?
2. Calculez la valeur acquise des flux au taux de 6 %, puis le TRI global et la VAN globale.
3. Concluez.

<details><summary>Voir le corrigé</summary>

**1)** $TRI_E \approx 17\,\% + 1\,\% \times \frac{1\,475{,}70}{6\,829{,}22} = \mathbf{17{,}22\,\%}$ ; $TRI_F \approx 17\,\% + 1\,\% \times \frac{1\,023{,}03}{10\,697{,}83} = \mathbf{17{,}10\,\%}$. Le TRI préfère légèrement E, la VAN préfère nettement F : **conflit** dû au profil des flux.

**2)**
- $A_E = 300\,000 \times 1{,}06^2 + 250\,000 \times 1{,}06 + 100\,000 = 337\,080 + 265\,000 + 100\,000 = 702\,080$ DH ; $TRI_G = (702\,080 / 500\,000)^{1/3} - 1 = \mathbf{11{,}98\,\%}$ ; $VAN_G = 702\,080 \times 1{,}09^{-3} - 500\,000 = \mathbf{42\,134{,}58\ DH}$.
- $A_F = 50\,000 \times 1{,}06^2 + 200\,000 \times 1{,}06 + 500\,000 = 56\,180 + 212\,000 + 500\,000 = 768\,180$ DH ; $TRI_G = (768\,180 / 500\,000)^{1/3} - 1 = \mathbf{15{,}39\,\%}$ ; $VAN_G = 768\,180 \times 1{,}09^{-3} - 500\,000 = \mathbf{93\,175{,}91\ DH}$.

**3)** Avec une hypothèse de réinvestissement réaliste (6 %), **F** l'emporte sur tous les critères globaux. Le TRI simple favorisait E parce qu'il supposait que ses flux, reçus tôt, seraient replacés à plus de 17 %, ce qui est impossible ici.

</details>

### Exercice 3 — Annuité équivalente

La SA Meknès Agro compare deux équipements exclusifs et renouvelables ; taux : 11 %.
- G : 900 000 DH, durée 4 ans, flux nets de 320 000 DH par an ;
- H : 1 300 000 DH, durée 7 ans, flux nets de 300 000 DH par an.

On donne : $\frac{1-1{,}11^{-4}}{0{,}11} = 3{,}102446$ et $\frac{1-1{,}11^{-7}}{0{,}11} = 4{,}712196$.
1. Calculez la VAN de chaque équipement.
2. Calculez leur annuité équivalente et concluez.

<details><summary>Voir le corrigé</summary>

**1)** $VAN_G = -900\,000 + 320\,000 \times 3{,}102446 = \mathbf{92\,782{,}62\ DH}$ ; $VAN_H = -1\,300\,000 + 300\,000 \times 4{,}712196 = \mathbf{113\,658{,}88\ DH}$.

**2)** $AE_G = 92\,782{,}62 / 3{,}102446 = \mathbf{29\,906{,}28\ DH}$ par an ; $AE_H = 113\,658{,}88 / 4{,}712196 = \mathbf{24\,120{,}15\ DH}$ par an. La VAN brute favorise H, mais elle compare des durées différentes. Ramenée à l'année, la création de valeur de **G** est supérieure : si l'équipement est renouvelable, G est préférable.

</details>
`,
    qcm: [
      { q: "Pour classer deux projets exclusifs, la VAN et le TRI :", choix: ["Concordent toujours", "Peuvent se contredire", "Ne s'appliquent pas", "Donnent toujours le même chiffre"], bonne: 1, explication: "Le conflit peut venir de la taille, du profil des flux ou de la durée." },
      { q: "La VAN suppose implicitement que les flux intermédiaires sont réinvestis :", choix: ["Au TRI", "Au taux d'actualisation", "À taux nul", "Au taux de l'IS"], bonne: 1, explication: "Le TRI, lui, suppose un réinvestissement au TRI." },
      { q: "Le taux de Fisher est :", choix: ["Le TRI du projet le plus rentable", "Le taux qui égalise les VAN de deux projets", "Le taux directeur de Bank Al-Maghrib", "Le taux de réinvestissement"], bonne: 1, explication: "On l'obtient comme le TRI du projet différentiel." },
      { q: "Si le taux d'actualisation est inférieur au taux de Fisher, on retient :", choix: ["Le projet au TRI le plus élevé", "Le projet dont la VAN au taux k est la plus élevée", "Le projet le moins cher", "Aucun des deux"], bonne: 1, explication: "En cas de conflit, la VAN est le critère de référence." },
      { q: "Le TRI global se calcule par :", choix: ["(A / I0) puissance 1/n moins 1", "A moins I0", "VAN / I0", "I0 / A"], bonne: 0, explication: "A est la valeur acquise des flux au taux de réinvestissement." },
      { q: "Lorsque le taux de réinvestissement est égal au taux d'actualisation, la VAN globale :", choix: ["Est nulle", "Est égale à la VAN classique", "Est toujours supérieure", "Ne peut pas être calculée"], bonne: 1, explication: "Les deux calculs reposent alors sur la même hypothèse." },
      { q: "Pour comparer des projets de durées différentes, on utilise :", choix: ["Le délai de récupération", "L'annuité équivalente ou le renouvellement", "Le TRI simple", "Le taux de marge"], bonne: 1, explication: "Les deux méthodes donnent le même classement." },
      { q: "L'annuité équivalente est égale à :", choix: ["VAN × k / (1 − (1 + k) puissance −n)", "VAN / n", "VAN × n", "I0 × k"], bonne: 0, explication: "C'est la VAN transformée en annuité constante." },
      { q: "En situation de rationnement du capital, on classe des projets indépendants selon :", choix: ["Leur TRI", "Leur indice de profitabilité", "Leur durée", "Leur délai de récupération"], bonne: 1, explication: "On maximise ainsi la VAN par dirham investi." },
      { q: "Si le TRI du projet différentiel (gros moins petit) dépasse le taux exigé :", choix: ["Le petit projet est préférable", "Le gros projet est préférable si les fonds sont disponibles", "Les deux sont rejetés", "Il faut choisir au hasard"], bonne: 1, explication: "L'investissement supplémentaire est alors lui-même rentable." },
    ],
  },

  5: {
    titre: "Le choix en avenir risqué et incertain",
    description: "Investir face au risque : analyse de sensibilité, espérance et écart-type de la VAN, arbre de décision, critères de Laplace, Wald, maximax, Hurwicz et Savage.",
    resume: md`
## L'essentiel — Avenir risqué et incertain

- **Risque** : scénarios et **probabilités** connus ; **incertitude** : probabilités inconnues.
- **Sensibilité** : faire varier une hypothèse ; **point mort** du projet (flux qui annule la VAN) et **marge de sécurité**.
- $E(VAN) = \sum p_j VAN_j$ ; $\sigma(VAN) = \sqrt{\sum p_j (VAN_j - E)^2}$ ; $CV = \sigma / E$.
- Un projet **domine** s'il a une espérance plus forte **et** un écart-type plus faible ; sinon le choix dépend de l'aversion au risque.
- Flux indépendants : $V(VAN) = \sum V(CF_t) (1+k)^{-2t}$ ; si la VAN est normale, $P(VAN<0) = P(Z < -E/\sigma)$.
- **Arbre de décision** : nœuds de décision (carrés) et d'événement (ronds) ; résolution **de droite à gauche** ; met en évidence la valeur de la **flexibilité** et de l'**information**.
- **Laplace** : moyenne des résultats ; **Wald** : meilleur des minima (prudence) ; **maximax** : meilleur des maxima (audace).
- **Hurwicz** : $\alpha \times \max + (1-\alpha) \times \min$, $\alpha$ = coefficient d'optimisme.
- **Savage** : regrets par **état** (meilleur résultat de la colonne − résultat), puis plus petit regret maximal.
- **Taux ajusté au risque** : prime ajoutée au taux d'actualisation pour les projets plus risqués.
`,
    exercices: md`
### Exercice 2 — Des flux annuels indépendants

Un projet de 500 000 DH procure pendant 3 ans des flux annuels indépendants d'espérance 220 000 DH et d'écart-type 40 000 DH. Taux d'actualisation : 8 % ; on admet que la VAN suit une loi normale. On donne : $\frac{1-1{,}08^{-3}}{0{,}08} = 2{,}577097$ ; $1{,}08^{-2} = 0{,}857339$ ; $1{,}08^{-4} = 0{,}735030$ ; $1{,}08^{-6} = 0{,}630170$.
1. Calculez l'espérance de la VAN.
2. Calculez sa variance et son écart-type.
3. Quelle est la probabilité que le projet ne soit pas rentable ?

<details><summary>Voir le corrigé</summary>

**1)** $E(VAN) = -500\,000 + 220\,000 \times 2{,}577097 = \mathbf{66\,961{,}34\ DH}$.

**2)** $V(VAN) = 40\,000^2 \times (0{,}857339 + 0{,}735030 + 0{,}630170) = 1{,}6 \times 10^9 \times 2{,}222539 \approx 3{,}556 \times 10^9$ ; $\sigma(VAN) \approx \mathbf{59\,632{,}72\ DH}$.

**3)** $P(VAN < 0) = P\left(Z < \frac{-66\,961{,}34}{59\,632{,}72}\right) = P(Z < -1{,}12) = 1 - \Phi(1{,}12) = 1 - 0{,}8686 \approx \mathbf{13\,\%}$. Le projet a environ 87 % de chances d'être rentable.

</details>

### Exercice 3 — Faut-il tester le marché ?

La SA Atlas Cosmétiques peut lancer directement un nouveau produit : succès (probabilité 0,5, VAN de 800 milliers de DH) ou échec (probabilité 0,5, VAN de − 400). Elle peut aussi réaliser d'abord un **test de marché** coûtant 50 milliers de DH :
- le test est favorable avec une probabilité de 0,5 ; la probabilité de succès devient alors 0,8 ;
- il est défavorable avec une probabilité de 0,5 ; la probabilité de succès devient alors 0,2, et l'entreprise peut renoncer (VAN nulle).
1. Calculez l'espérance du lancement direct.
2. Résolvez l'arbre de décision avec test.
3. Quelle est la valeur de l'information apportée par le test ? Faut-il le faire ?

<details><summary>Voir le corrigé</summary>

**1)** $E(\text{lancement direct}) = 0{,}5 \times 800 + 0{,}5 \times (-400) = \mathbf{200}$ milliers de DH.

**2)** De droite à gauche :
- test favorable, lancement : $0{,}8 \times 800 + 0{,}2 \times (-400) = 560$ ; on lance ;
- test défavorable, lancement : $0{,}2 \times 800 + 0{,}8 \times (-400) = -160$, inférieur à 0 : on **renonce** (0) ;
- $E(\text{test}) = 0{,}5 \times 560 + 0{,}5 \times 0 - 50 = \mathbf{230}$ milliers de DH.

**3)** Sans tenir compte de son coût, le test porte l'espérance à $0{,}5 \times 560 = 280$ : sa valeur est de $280 - 200 = 80$ milliers de DH, supérieure à son coût de 50. Il faut **faire le test** : il permet d'éviter les lancements voués à l'échec.

</details>
`,
    qcm: [
      { q: "On parle d'avenir risqué lorsque :", choix: ["Les flux sont certains", "Les scénarios et leurs probabilités sont connus", "Les probabilités sont inconnues", "Le projet a une VAN négative"], bonne: 1, explication: "Sans probabilités, on parle d'avenir incertain." },
      { q: "L'écart-type de la VAN mesure :", choix: ["La rentabilité moyenne", "Le risque du projet", "Le délai de récupération", "Le coût du capital"], bonne: 1, explication: "C'est la dispersion des VAN possibles autour de l'espérance." },
      { q: "Un projet A domine un projet B si :", choix: ["A a une espérance plus forte et un écart-type plus faible", "A coûte plus cher", "A dure plus longtemps", "A a un écart-type plus élevé"], bonne: 0, explication: "Il est alors meilleur en rentabilité et en risque." },
      { q: "Le coefficient de variation est égal à :", choix: ["E / σ", "σ / E", "σ × E", "E − σ"], bonne: 1, explication: "Il mesure le risque par dirham de VAN espérée." },
      { q: "Le critère de Wald consiste à retenir le projet :", choix: ["Au meilleur maximum", "Au meilleur minimum", "À la meilleure moyenne", "Au plus faible regret maximal"], bonne: 1, explication: "C'est le critère prudent (maximin)." },
      { q: "Le critère de Laplace suppose que les états de la nature sont :", choix: ["Équiprobables", "Certains", "Impossibles", "Indépendants du projet"], bonne: 0, explication: "On retient la plus forte moyenne arithmétique." },
      { q: "Dans le critère de Hurwicz, le coefficient α s'applique :", choix: ["Au résultat minimal", "Au résultat maximal", "À la moyenne", "Au regret"], bonne: 1, explication: "Valeur = α × max + (1 − α) × min." },
      { q: "Pour le critère de Savage, le regret se calcule :", choix: ["Par projet, par rapport à son meilleur résultat", "Par état de la nature, par rapport au meilleur résultat de cet état", "Par rapport à la moyenne générale", "Par rapport au capital investi"], bonne: 1, explication: "On retient ensuite le plus petit regret maximal." },
      { q: "Un arbre de décision se résout :", choix: ["De gauche à droite", "De droite à gauche", "Au hasard", "Par le TRI"], bonne: 1, explication: "On part des branches finales en calculant les espérances." },
      { q: "Majorer le taux d'actualisation d'une prime de risque :", choix: ["Augmente la VAN", "Pénalise davantage les flux lointains", "Supprime le risque", "Ne change rien"], bonne: 1, explication: "Les flux éloignés sont plus fortement réduits." },
    ],
  },

  6: {
    titre: "Le financement par fonds propres",
    description: "Fonds propres : autofinancement, augmentation de capital, droit préférentiel de souscription, dilution, Bourse de Casablanca et capital-investissement.",
    resume: md`
## L'essentiel — Le financement par fonds propres

- Ressources : **internes** (autofinancement, cessions) ou **externes** (augmentation de capital, quasi-fonds propres, dettes).
- Les **fonds propres** sont la ressource la plus **sûre** (pas de remboursement) mais la plus **chère** (risque de l'actionnaire).
- **Autofinancement** = CAF − dividendes ; taux d'autofinancement = autofinancement / investissements ; indépendance, mais montant limité et **coût d'opportunité**.
- **Cession d'actifs** non stratégiques et **cession-bail** (lease-back) procurent de la trésorerie.
- **Augmentation en numéraire** décidée par l'**AGE** ; prix d'émission ≥ nominal ; écart = **prime d'émission**.
- $C' = \frac{NC + nE}{N + n}$ ; $DPS = C - C' = (C - E)\frac{n}{N+n}$ ; **parité** = N / n.
- Théoriquement **neutre** pour l'ancien actionnaire (souscrire ou vendre ses DPS) ; mais **dilution** du contrôle et du bénéfice par action.
- Incorporation de réserves (actions gratuites, pas d'argent frais), conversion de dettes, apport en nature.
- **Bourse de Casablanca** : visa de l'**AMMC**, levée de fonds et notoriété, contre information publique et coûts.
- **Capital-investissement** (risque, développement, transmission), business angels ; **quasi-fonds propres** : comptes courants bloqués, prêts participatifs, titres subordonnés, obligations convertibles ; subventions d'investissement.
`,
    exercices: md`
### Exercice 2 — L'augmentation de capital par incorporation de réserves

La SA Fès Textile a 50 000 actions cotées 240 DH. Elle incorpore des réserves au capital et attribue **une action gratuite pour cinq anciennes**.
1. Combien d'actions nouvelles sont créées ? L'entreprise reçoit-elle de l'argent ?
2. Calculez le cours théorique après l'opération et la valeur du droit d'attribution.
3. Un actionnaire détient 500 actions. Vérifiez que sa richesse est inchangée.

<details><summary>Voir le corrigé</summary>

**1)** $50\,000 / 5 = \mathbf{10\,000}$ actions gratuites. **Aucune ressource nouvelle** : les réserves sont transférées au poste capital ; les capitaux propres totaux ne changent pas.

**2)** Le prix d'émission est nul : $C' = \frac{50\,000 \times 240}{60\,000} = \mathbf{200\ DH}$. Droit d'attribution : $240 - 200 = \mathbf{40\ DH}$ par action ancienne.

**3)** Avant : $500 \times 240 = 120\,000$ DH. Après : il reçoit $500 / 5 = 100$ actions gratuites et détient 600 actions à 200 DH, soit **120 000 DH**. L'opération est neutre ; elle signale toutefois la solidité de l'entreprise et augmente la liquidité du titre.

</details>

### Exercice 3 — De la CAF à l'autofinancement

Données 2026 de la SA Oriental Matériaux (en DH) : résultat net 1 800 000 ; dotations aux amortissements 900 000 ; dotations aux provisions 150 000 ; reprises sur provisions 50 000 ; produits de cession d'immobilisations 300 000 ; valeur nette comptable des immobilisations cédées 200 000. L'assemblée distribue 40 % du résultat net. Les investissements de l'année s'élèvent à 3 300 000 DH.
1. Calculez la CAF par la méthode additive.
2. Calculez l'autofinancement et le taux d'autofinancement.
3. Comment financer le solde des investissements ?

<details><summary>Voir le corrigé</summary>

**1)** $CAF = 1\,800\,000 + 900\,000 + 150\,000 - 50\,000 - 300\,000 + 200\,000 = \mathbf{2\,700\,000\ DH}$. Les produits de cession sont retirés (ce ne sont pas des flux d'exploitation) et la VNC des éléments cédés, charge non décaissée, est rajoutée.

**2)** Dividendes : $40\,\% \times 1\,800\,000 = 720\,000$ DH. Autofinancement : $2\,700\,000 - 720\,000 = \mathbf{1\,980\,000\ DH}$. Taux d'autofinancement : $1\,980\,000 / 3\,300\,000 = \mathbf{60\,\%}$.

**3)** Le produit de cession (300 000 DH) est une ressource de l'exercice ; il reste $3\,300\,000 - 1\,980\,000 - 300\,000 = 1\,020\,000$ DH à financer par une ressource externe : emprunt bancaire, crédit-bail ou apport des associés, selon le coût et la capacité d'endettement de l'entreprise (chapitres 7 à 9).

</details>
`,
    qcm: [
      { q: "L'autofinancement est égal à :", choix: ["La CAF", "La CAF moins les dividendes distribués", "Le résultat net", "Le chiffre d'affaires moins les charges"], bonne: 1, explication: "C'est la part de la CAF conservée par l'entreprise." },
      { q: "L'autofinancement :", choix: ["Est gratuit", "A un coût d'opportunité pour les actionnaires", "Doit être remboursé", "Est imposé à la TVA"], bonne: 1, explication: "Il s'agit des fonds des actionnaires, qui en attendent une rentabilité." },
      { q: "L'augmentation de capital d'une SA est décidée par :", choix: ["Le directeur financier", "L'assemblée générale extraordinaire", "Bank Al-Maghrib", "Le commissaire aux comptes"], bonne: 1, explication: "Loi 17-95 relative aux sociétés anonymes." },
      { q: "La prime d'émission correspond à :", choix: ["Le nominal des actions nouvelles", "L'excédent du prix d'émission sur le nominal", "Le dividende versé", "La valeur du DPS"], bonne: 1, explication: "Elle est inscrite dans les capitaux propres, distincte du capital." },
      { q: "Avec 100 000 actions à 180 DH et 25 000 actions nouvelles à 150 DH, le cours théorique après l'opération est de :", choix: ["165 DH", "174 DH", "176 DH", "180 DH"], bonne: 1, explication: "(18 000 000 + 3 750 000) / 125 000 = 174 DH." },
      { q: "Dans l'exemple précédent, la valeur théorique du DPS est de :", choix: ["4 DH", "6 DH", "30 DH", "150 DH"], bonne: 1, explication: "DPS = 180 − 174." },
      { q: "L'actionnaire qui ne souscrit pas à une augmentation de capital et vend ses DPS subit :", choix: ["Une perte de richesse théorique", "Une dilution de son contrôle", "Une hausse de sa part du capital", "Une obligation de rembourser"], bonne: 1, explication: "Sa richesse est théoriquement préservée, mais sa part diminue." },
      { q: "Une augmentation de capital par incorporation de réserves :", choix: ["Apporte de l'argent frais", "N'apporte aucune ressource nouvelle", "Augmente les dettes", "Supprime le capital"], bonne: 1, explication: "Elle transfère des réserves vers le capital." },
      { q: "L'introduction en Bourse de Casablanca exige le visa :", choix: ["De la DGI", "De l'AMMC", "De l'OMPIC", "Du tribunal de commerce"], bonne: 1, explication: "L'Autorité marocaine du marché des capitaux vise le prospectus." },
      { q: "Un compte courant d'associé bloqué est :", choix: ["Une dette fournisseur", "Un quasi-fonds propre", "Une subvention", "Un produit d'exploitation"], bonne: 1, explication: "Les associés s'engagent à ne pas retirer les fonds pendant une durée donnée." },
    ],
  },

  7: {
    titre: "Le financement par endettement et les financements alternatifs",
    description: "Emprunt indivis (annuités constantes, amortissements constants, in fine), coût actuariel après impôt, obligations, crédit-bail et finance participative.",
    resume: md`
## L'essentiel — Endettement et financements alternatifs

- Avantages de la dette : **intérêts déductibles** (coût net ≈ $i(1-t)$) et **effet de levier** ; inconvénient : remboursement obligatoire, **risque financier**.
- **Annuités constantes** : $a = C_0 \frac{i}{1-(1+i)^{-n}}$ ; **amortissements constants** : $C_0 / n$ par an, annuités décroissantes ; **in fine** : intérêts seuls, capital à la fin.
- Contrôle du tableau : dernier amortissement = capital restant dû en début de dernière année.
- Intérêts totaux : amortissements constants < annuités constantes < in fine, mais même **coût actuariel** (le taux nominal) sans frais.
- **Coût actuariel** : taux qui égalise la somme reçue nette et les décaissements actualisés ; les **frais** l'augmentent.
- Après impôt : décaissement net = annuité − t × intérêts ; sans frais, coût = $i(1-t)$.
- **Obligations** : nominal, prix d'émission, prix de remboursement, taux facial ; primes d'émission et de remboursement augmentent le coût ; visa de l'**AMMC** pour l'appel public.
- **Crédit-bail** : financement à 100 %, redevances déductibles, mais perte de l'économie d'impôt sur les amortissements ; option d'achat finale.
- **Finance participative** (loi 103-12, depuis 2017) : **mourabaha** (marge fixe connue), **ijara** (location, ijara wa iqtina), **moucharaka**, **moudaraba**, salam, istisna'a ; **sukuk**.
- **Tamwilcom** garantit une partie des crédits aux TPE et PME.
`,
    exercices: md`
### Exercice 2 — Le coût d'un emprunt obligataire

La SA Maroc Énergies Vertes émet 20 000 obligations de nominal 1 000 DH, au prix de 980 DH, taux facial 5 %, remboursables in fine dans 5 ans à 1 010 DH.
1. Calculez les fonds levés, le coupon annuel par obligation et les deux primes.
2. Le coût actuariel $r$ vérifie $980 = 50 \times \frac{1-(1+r)^{-5}}{r} + 1\,010 \times (1+r)^{-5}$. On donne : $f(r) = -980 + 50 \times \frac{1-(1+r)^{-5}}{r} + 1\,010 \times (1+r)^{-5}$ vaut 27,8353 à 5 % et − 14,6511 à 6 %. Calculez $r$.
3. Pourquoi ce coût dépasse-t-il le taux facial ?

<details><summary>Voir le corrigé</summary>

**1)** Fonds levés : $20\,000 \times 980 = \mathbf{19\,600\,000\ DH}$. Coupon : $1\,000 \times 5\,\% = \mathbf{50\ DH}$ par an. Prime d'émission : $1\,000 - 980 = 20$ DH ; prime de remboursement : $1\,010 - 1\,000 = 10$ DH par obligation.

**2)** $r \approx 5\,\% + 1\,\% \times \frac{27{,}8353}{27{,}8353 + 14{,}6511} = 5\,\% + 0{,}66\,\% = \mathbf{5{,}66\,\%}$ avant impôt (la valeur exacte, 5,65 %, est très proche : l'interpolation linéaire surestime légèrement le taux).

**3)** L'émetteur reçoit moins que le nominal (980 au lieu de 1 000) et rembourse plus (1 010) : ces deux primes s'ajoutent aux coupons et élèvent le coût au-dessus du taux facial de 5 %.

</details>

### Exercice 3 — Mourabaha ou crédit classique ?

Une PME de Fès doit financer une chaîne d'embouteillage de 500 000 DH. Deux offres :
- une banque participative achète la chaîne et la lui revend **560 000 DH**, payables en 4 versements annuels égaux ;
- une banque classique lui prête 500 000 DH à 6 % sur 4 ans, par annuités constantes.
On donne : la VAN des flux de la mourabaha pour l'entreprise ($-500\,000 + 140\,000 \times \frac{1-(1+r)^{-4}}{r}$) vaut 8 185,33 DH à 4 % et − 3 566,93 DH à 5 %.
1. Calculez le versement annuel de la mourabaha et la marge de la banque.
2. Calculez le taux implicite de la mourabaha.
3. Calculez l'annuité et le total remboursé du crédit classique. Quelle offre est la moins chère avant impôt ?

<details><summary>Voir le corrigé</summary>

**1)** Versement : $560\,000 / 4 = \mathbf{140\,000\ DH}$ par an. Marge : $560\,000 - 500\,000 = \mathbf{60\,000\ DH}$, fixée dès la signature.

**2)** Taux implicite : $4\,\% + 1\,\% \times \frac{8\,185{,}33}{8\,185{,}33 + 3\,566{,}93} = \mathbf{4{,}70\,\%}$.

**3)** Annuité du crédit : $500\,000 \times \frac{0{,}06}{1 - 1{,}06^{-4}} = 144\,295{,}75$ DH ; total remboursé : **577 182,98 DH**. Avant impôt, la **mourabaha** est ici moins chère (taux implicite de 4,70 % contre 6 %). La comparaison complète doit aussi intégrer les frais, les garanties exigées et le traitement fiscal de chaque formule.

</details>
`,
    qcm: [
      { q: "Avec un taux de 8 % et un IS de 20 %, le coût après impôt d'un emprunt sans frais est de :", choix: ["8 %", "6,4 %", "1,6 %", "10 %"], bonne: 1, explication: "8 % × (1 − 0,20) = 6,4 %, car les intérêts sont déductibles." },
      { q: "Dans un emprunt à annuités constantes, la part d'amortissement du capital :", choix: ["Diminue chaque année", "Augmente chaque année", "Reste constante", "Est nulle"], bonne: 1, explication: "Les intérêts diminuent avec le capital restant dû." },
      { q: "Le mode de remboursement qui génère le total d'intérêts le plus élevé est :", choix: ["L'amortissement constant", "L'annuité constante", "L'in fine", "Ils sont tous égaux"], bonne: 2, explication: "Le capital reste dû en totalité jusqu'à la fin." },
      { q: "L'annuité constante d'un emprunt de C0 au taux i sur n ans est égale à :", choix: ["C0 / n", "C0 × i", "C0 × i / (1 − (1 + i) puissance −n)", "C0 × (1 + i) puissance n"], bonne: 2, explication: "Formule de l'annuité constante." },
      { q: "Des frais de dossier sur un emprunt :", choix: ["Réduisent son coût actuariel", "Augmentent son coût actuariel", "N'ont aucun effet", "Sont remboursés par la banque"], bonne: 1, explication: "La somme effectivement reçue diminue." },
      { q: "Après impôt, le décaissement net d'une échéance d'emprunt est égal à :", choix: ["L'annuité", "L'annuité moins l'IS sur les intérêts", "L'annuité moins l'IS sur le capital remboursé", "Les seuls intérêts"], bonne: 1, explication: "Seuls les intérêts sont déductibles, pas le remboursement du capital." },
      { q: "Une obligation émise à 980 DH pour un nominal de 1 000 DH comporte :", choix: ["Une prime de remboursement de 20 DH", "Une prime d'émission de 20 DH", "Un coupon de 20 DH", "Une décote fiscale"], bonne: 1, explication: "Elle augmente le coût de l'emprunt pour l'émetteur." },
      { q: "En crédit-bail, l'entreprise locataire :", choix: ["Amortit le bien dès la signature", "Déduit les redevances mais perd l'économie d'impôt sur les amortissements", "Est propriétaire du bien", "Ne paie aucun impôt"], bonne: 1, explication: "Elle ne devient propriétaire qu'en levant l'option d'achat." },
      { q: "La mourabaha est :", choix: ["Un prêt à taux variable", "Une vente par la banque avec une marge connue à l'avance", "Une location simple", "Une prise de participation"], bonne: 1, explication: "La banque achète le bien et le revend à terme à l'entreprise." },
      { q: "L'équivalent participatif du crédit-bail est :", choix: ["La moucharaka", "L'ijara", "Le salam", "La moudaraba"], bonne: 1, explication: "L'ijara wa iqtina se termine par un transfert de propriété." },
    ],
  },

  8: {
    titre: "Le coût du capital et la structure financière",
    description: "Coût des fonds propres (Gordon-Shapiro, MEDAF), coût de la dette après impôt, CMPC, effet de levier et théories de la structure financière (Modigliani-Miller).",
    resume: md`
## L'essentiel — Coût du capital et structure financière

- **Coût du capital** : rentabilité minimale exigée par l'ensemble des apporteurs de fonds ; sert de **taux d'actualisation** et de taux plancher.
- **Gordon-Shapiro** : $k_e = \frac{D_1}{P_0} + g$, avec $D_1 = D_0(1+g)$.
- **MEDAF** : $k_e = r_f + \beta \times (E(R_m) - r_f)$ ; $r_f$ approché par les bons du Trésor ; $\beta$ = risque systématique.
- **Coût de la dette** : coût actuariel $k_d$, et après impôt $k_d(1-t)$ ; les dividendes, eux, ne sont pas déductibles.
- **CMPC** = $\frac{E}{E+D} k_e + \frac{D}{E+D} k_d (1-t)$, en **valeurs de marché** et selon la structure cible.
- Un projet de même risque est retenu si son **TRI > CMPC** ; un projet plus risqué exige une prime.
- **Effet de levier** : $R_f = [R_e + (R_e - i)\frac{D}{CP}](1-t)$ ; positif si $R_e > i$, **effet massue** si $R_e < i$.
- L'endettement augmente la rentabilité attendue **et** le risque des actionnaires.
- **MM 1958** : structure neutre sans impôt ; **MM 1963** : $V_L = V_U + tD$ ; **compromis** : avantage fiscal contre coûts de faillite, d'où un endettement optimal.
- **Hiérarchie des financements** (Myers) : autofinancement, puis dette, puis augmentation de capital ; règles bancaires : dettes financières ≤ capitaux propres, dettes / CAF ≈ 3 à 4 ans.
`,
    exercices: md`
### Exercice 2 — L'effet de levier de la SA Gharb Conserves

L'actif économique de la SA Gharb Conserves s'élève à 20 millions de DH. IS : 20 %. Trois structures sont envisagées :
- A : 20 millions de capitaux propres, aucune dette ;
- B : 12 millions de capitaux propres et 8 millions de dettes à 8 % ;
- C : 8 millions de capitaux propres et 12 millions de dettes à 9 % (taux plus élevé, risque accru).
1. Calculez la rentabilité financière de chaque structure si la rentabilité économique est de 12 %.
2. Même question si la rentabilité économique tombe à 6 %.
3. Commentez.

<details><summary>Voir le corrigé</summary>

**1)** $R_e = 12\,\%$ :
- A : $12\,\% \times 0{,}8 = \mathbf{9{,}60\,\%}$ ;
- B : $[12\,\% + (12\,\% - 8\,\%) \times \frac{8}{12}] \times 0{,}8 = [12\,\% + 2{,}67\,\%] \times 0{,}8 = \mathbf{11{,}73\,\%}$ ;
- C : $[12\,\% + (12\,\% - 9\,\%) \times \frac{12}{8}] \times 0{,}8 = [12\,\% + 4{,}5\,\%] \times 0{,}8 = \mathbf{13{,}20\,\%}$.

**2)** $R_e = 6\,\%$ :
- A : $\mathbf{4{,}80\,\%}$ ;
- B : $[6\,\% - 2\,\% \times 0{,}667] \times 0{,}8 = \mathbf{3{,}73\,\%}$ ;
- C : $[6\,\% - 3\,\% \times 1{,}5] \times 0{,}8 = \mathbf{1{,}20\,\%}$.

**3)** Quand la rentabilité économique dépasse le coût de la dette, l'endettement **amplifie** la rentabilité des actionnaires (effet de levier). Quand elle devient inférieure, il la **détruit** (effet massue) : la structure C, la plus endettée, passe de la meilleure à la pire. Le choix dépend de la **stabilité** attendue de la rentabilité économique.

</details>

### Exercice 3 — Gordon-Shapiro dans les deux sens

1. Le dernier dividende versé par une action est de 8 DH ; il croît de 5 % par an. Les actionnaires exigent 11 %. Quelle est la valeur théorique de l'action ?
2. Cette action cote en réalité 120 DH. Quel taux de rentabilité les investisseurs exigent-ils implicitement ?
3. Pourquoi faut-il utiliser $D_1$ et non $D_0$ ?

<details><summary>Voir le corrigé</summary>

**1)** $D_1 = 8 \times 1{,}05 = 8{,}40$ DH ; $P_0 = \frac{8{,}40}{0{,}11 - 0{,}05} = \frac{8{,}40}{0{,}06} = \mathbf{140\ DH}$.

**2)** $k_e = \frac{8{,}40}{120} + 5\,\% = 7\,\% + 5\,\% = \mathbf{12\,\%}$ : le marché exige plus que 11 %, d'où un cours inférieur à 140 DH.

**3)** Le modèle actualise les dividendes **futurs** : le premier dividende que touchera l'acheteur d'aujourd'hui est celui de l'année prochaine, $D_1$ ; le dividende $D_0$ a déjà été versé à l'ancien propriétaire.

</details>
`,
    qcm: [
      { q: "Le coût du capital sert principalement de :", choix: ["Taux de TVA", "Taux d'actualisation des projets de même risque", "Taux de change", "Taux de marge commerciale"], bonne: 1, explication: "C'est aussi la rentabilité minimale exigée." },
      { q: "Selon Gordon-Shapiro, avec D1 = 6 DH, P0 = 100 DH et g = 4 %, le coût des fonds propres est de :", choix: ["6 %", "10 %", "4 %", "24 %"], bonne: 1, explication: "6 / 100 + 4 % = 10 %." },
      { q: "Dans le MEDAF, le bêta mesure :", choix: ["Le risque total de l'entreprise", "Le risque systématique de l'action par rapport au marché", "Le taux sans risque", "Le taux de croissance du dividende"], bonne: 1, explication: "Un bêta supérieur à 1 signale une action plus risquée que le marché." },
      { q: "Avec rf = 3 %, une prime de marché de 6 % et un bêta de 1,5, le MEDAF donne :", choix: ["9 %", "12 %", "10,5 %", "6 %"], bonne: 1, explication: "3 % + 1,5 × 6 % = 12 %." },
      { q: "Le coût après impôt d'une dette à 7 % avec un IS de 20 % est de :", choix: ["7 %", "5,6 %", "1,4 %", "8,4 %"], bonne: 1, explication: "7 % × 0,8." },
      { q: "Les dividendes versés aux actionnaires sont :", choix: ["Déductibles du résultat fiscal", "Non déductibles", "Déductibles à moitié", "Exonérés de toute imposition"], bonne: 1, explication: "C'est pourquoi l'impôt ne réduit pas le coût des fonds propres." },
      { q: "Pour pondérer le CMPC, on retient de préférence :", choix: ["Les valeurs nominales", "Les valeurs de marché", "Les montants des dividendes", "Le chiffre d'affaires"], bonne: 1, explication: "Capitalisation boursière et valeur de marché de la dette." },
      { q: "L'effet de levier est positif lorsque :", choix: ["La rentabilité économique est supérieure au coût de la dette", "Le coût de la dette est supérieur à la rentabilité économique", "L'entreprise n'a pas de dettes", "Les capitaux propres sont négatifs"], bonne: 0, explication: "Dans le cas contraire, on parle d'effet massue." },
      { q: "Selon Modigliani et Miller (1963), avec impôt, l'endettement :", choix: ["Ne change rien à la valeur", "Augmente la valeur grâce à l'économie d'impôt sur les intérêts", "Diminue toujours la valeur", "Supprime le risque"], bonne: 1, explication: "V endettée = V non endettée + t × D." },
      { q: "Selon la théorie de la hiérarchie des financements, l'entreprise préfère d'abord :", choix: ["L'augmentation de capital", "L'autofinancement", "L'emprunt obligataire", "Le capital-risque"], bonne: 1, explication: "Puis la dette, et en dernier recours l'augmentation de capital." },
    ],
  },

  9: {
    titre: "Le choix du mode de financement et le plan de financement",
    description: "Choisir entre emprunt et crédit-bail (coût actuariel après impôt, VAN du financement), capacité d'endettement et construction du plan de financement.",
    resume: md`
## L'essentiel — Choix du financement et plan de financement

- Critères : **coût** après impôt, **risque** financier, **contrôle**, **flexibilité**, **disponibilité**, adéquation des durées.
- **Équilibre financier** : emplois stables financés par des ressources stables.
- Flux du **crédit-bail** vus par l'entreprise : + prix du bien à la date 0 ; − redevance × (1 − t) ; − **t × DAP** (économie d'impôt perdue) ; − option d'achat.
- **Coût actuariel** du crédit-bail : taux qui égalise le prix du bien et ces décaissements ; à comparer à $k_d(1-t)$ de l'emprunt.
- **VAN du financement** : flux du crédit-bail actualisés au coût après impôt de l'emprunt ; positive → crédit-bail plus avantageux.
- **Capacité d'endettement** : dettes financières / capitaux propres **≤ 1** ; dettes financières / CAF **≤ 3 à 4 ans** ; ressources stables / emplois stables ≥ 1.
- **Plan de financement** : prévisionnel sur 3 à 5 ans ; exigé par les banques ; à distinguer du tableau de financement (historique).
- **Emplois** : investissements, augmentation du BFR, remboursements d'emprunts (capital), dividendes. **Ressources** : CAF, cessions nettes, augmentations de capital, emprunts, subventions.
- Les **intérêts** ne sont pas des emplois : ils sont déjà déduits de la CAF.
- **Équilibrage** : nouvel emprunt, crédit-bail, apport, différé, étalement des investissements, baisse des dividendes ; garder une **marge de sécurité** de trésorerie.
`,
    exercices: md`
### Exercice 2 — Le plan de financement de la SARL Ifrane Hôtellerie

Données prévisionnelles (en milliers de DH) ; trésorerie initiale : 100.

| Éléments | Année 1 | Année 2 | Année 3 |
|---|---:|---:|---:|
| Investissements | 2 400 | 0 | 300 |
| Augmentation du BFR | 100 | 20 | 20 |
| Remboursement des emprunts existants | 200 | 200 | 200 |
| Dividendes | 0 | 100 | 150 |
| CAF prévisionnelle (avant nouvel emprunt) | 600 | 900 | 1 000 |
| Apport des associés | 800 | 0 | 0 |
| Prime à l'investissement | 240 | 0 | 0 |

1. Établissez le plan de financement et la trésorerie de fin d'année. Conclusion ?
2. La banque propose un emprunt de 1 200 en début d'année 1, au taux de 7 %, remboursable par amortissements constants de 240 à partir de la fin de l'année 2. Les intérêts nets d'IS réduisent la CAF de 67,2 en années 1 et 2 et de 53,76 en année 3. Établissez le nouveau plan.

<details><summary>Voir le corrigé</summary>

**1)**

| Éléments | Année 1 | Année 2 | Année 3 |
|---|---:|---:|---:|
| Total des emplois | 2 700 | 320 | 670 |
| Total des ressources | 1 640 | 900 | 1 000 |
| Solde | −1 060 | +580 | +330 |
| Trésorerie fin d'année | **−960** | **−380** | **−50** |

Le plan est **déséquilibré** : la trésorerie est négative pendant trois ans. L'investissement de l'année 1 ne peut pas être financé par les seuls apports et la CAF.

**2)**

| Éléments | Année 1 | Année 2 | Année 3 |
|---|---:|---:|---:|
| Emplois initiaux | 2 700 | 320 | 670 |
| Remboursement du nouvel emprunt | 0 | 240 | 240 |
| **Total des emplois** | **2 700** | **560** | **910** |
| CAF après intérêts | 532,8 | 832,8 | 946,24 |
| Apport et prime | 1 040 | 0 | 0 |
| Nouvel emprunt | 1 200 | 0 | 0 |
| **Total des ressources** | **2 772,8** | **832,8** | **946,24** |
| Solde | +72,8 | +272,8 | +36,24 |
| **Trésorerie fin d'année** | **172,8** | **445,6** | **481,84** |

Le plan est désormais **équilibré**, avec une trésorerie positive chaque année. L'excédent qui s'accumule (481,84 en année 3) permettrait éventuellement d'emprunter un peu moins ou de prévoir le remboursement anticipé d'un emprunt existant.

</details>

### Exercice 3 — Combien peut-on encore emprunter ?

La SA Settat Matériaux présente : capitaux propres 6 000 milliers de DH ; dettes financières 4 200 ; CAF annuelle 1 200. Sa banque applique deux règles : dettes financières ≤ capitaux propres et dettes financières ≤ 4 années de CAF.
1. Calculez le montant maximal de dette supplémentaire selon chaque règle.
2. Quelle est la contrainte déterminante ? Que conseillez-vous pour un projet de 1 500 ?

<details><summary>Voir le corrigé</summary>

**1)** Autonomie financière : $6\,000 - 4\,200 = \mathbf{1\,800}$. Capacité de remboursement : $4 \times 1\,200 - 4\,200 = 4\,800 - 4\,200 = \mathbf{600}$.

**2)** C'est la **capacité de remboursement** qui limite l'endettement : 600 seulement. Pour un projet de 1 500, il faut compléter la dette par des **fonds propres** (augmentation de capital, apports en comptes courants bloqués), par un **crédit-bail** ou par une prime à l'investissement, et vérifier que le projet augmentera la CAF, ce qui relèvera la capacité d'emprunt future.

</details>
`,
    qcm: [
      { q: "Selon la règle de l'équilibre financier, un investissement durable doit être financé par :", choix: ["Un découvert bancaire", "Des ressources stables", "Les dettes fournisseurs", "Les avances clients"], bonne: 1, explication: "Fonds propres et dettes à moyen et long terme." },
      { q: "Dans les flux du crédit-bail vus par l'entreprise, la date 0 comporte :", choix: ["Un décaissement égal au prix du bien", "Une ressource égale au prix du bien évité", "Le paiement de l'option", "Aucun flux"], bonne: 1, explication: "L'entreprise n'a pas à payer le bien elle-même." },
      { q: "En choisissant le crédit-bail plutôt que l'achat, l'entreprise perd :", choix: ["La déduction des redevances", "L'économie d'impôt sur les amortissements", "La TVA récupérable", "Le droit d'utiliser le bien"], bonne: 1, explication: "Elle n'est pas propriétaire, donc ne peut pas amortir le bien." },
      { q: "Pour comparer emprunt et crédit-bail, on compare :", choix: ["Leurs coûts actuariels après impôt", "Le coût avant impôt de l'un et après impôt de l'autre", "Leurs montants nominaux", "Leurs durées uniquement"], bonne: 0, explication: "Il faut une base homogène." },
      { q: "Si les flux du crédit-bail actualisés au coût après impôt de l'emprunt ont une VAN positive :", choix: ["L'emprunt est plus avantageux", "Le crédit-bail est plus avantageux", "Les deux sont équivalents", "Aucun n'est possible"], bonne: 1, explication: "C'est la méthode de la VAN du financement." },
      { q: "La norme bancaire usuelle d'autonomie financière est :", choix: ["Dettes financières ≤ capitaux propres", "Dettes financières ≤ 10 % du chiffre d'affaires", "Capitaux propres ≤ dettes", "Dettes ≤ 1 an de CAF"], bonne: 0, explication: "Le ratio dettes financières / capitaux propres doit rester inférieur ou égal à 1." },
      { q: "La capacité de remboursement d'une entreprise s'apprécie souvent par :", choix: ["Dettes financières / CAF", "Chiffre d'affaires / stocks", "Résultat / capital", "Dividendes / CAF"], bonne: 0, explication: "On vise en général 3 à 4 années de CAF au plus." },
      { q: "Le plan de financement est :", choix: ["Un document historique", "Un document prévisionnel sur plusieurs années", "Un tableau de trésorerie mensuel", "Un état de synthèse obligatoire du CGNC"], bonne: 1, explication: "Le tableau de financement, lui, décrit le passé." },
      { q: "Dans un plan de financement, les intérêts d'emprunt :", choix: ["Figurent dans les emplois", "Sont déjà pris en compte dans la CAF", "Figurent dans les ressources", "Sont ignorés"], bonne: 1, explication: "Seul le remboursement du capital est un emploi." },
      { q: "Pour équilibrer un plan déficitaire, on peut notamment :", choix: ["Augmenter les dividendes", "Obtenir un différé d'amortissement de l'emprunt", "Accélérer tous les investissements", "Réduire la CAF"], bonne: 1, explication: "On peut aussi emprunter, recourir au crédit-bail ou réduire les dividendes." },
    ],
  },
};

export default chapitres;
