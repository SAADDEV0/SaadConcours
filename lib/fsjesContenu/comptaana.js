// Comptabilité analytique (S3) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Introduction à la comptabilité analytique",
    description: "Rôle de la comptabilité analytique, différences avec la comptabilité générale, notion de coût et schéma des coûts en cascade, avec exercices corrigés (S3).",
    resume: md`
## L'essentiel — Introduction à la comptabilité analytique

- La **comptabilité analytique d'exploitation (CAE)**, ou comptabilité de gestion, retraite les charges de la comptabilité générale pour calculer des **coûts**, expliquer le **résultat** par produit et **aider à la décision**.
- Elle est **facultative** (outil interne), alors que la comptabilité générale est **obligatoire** (loi 9-88, CGNC).
- Différence clé : la CG classe les charges **par nature** (achats, personnel…), la CA les classe **par destination** (à quel produit, atelier ou fonction servent-elles ?).
- Un résultat global positif peut **masquer un produit déficitaire** : c'est la raison d'être de la CA.
- Un **coût** = somme de charges relatives à un objet. Il se caractérise par son **objet** (produit, commande, fonction, activité), son **contenu** (complet ou partiel) et son **moment de calcul** (constaté ou préétabli).
- Ne pas confondre **charge** (classe 6), **coût** (interne), **prix** (échange avec un tiers) et **marge** (prix − coût).
- Cascade industrielle : **coût d'achat → coût de production → coût de revient → résultat analytique** (résultat = CA − coût de revient).
- Directe / indirecte (affectation) et fixe / variable (volume d'activité) sont **deux classements indépendants**.
- Le coût de revient porte sur les quantités **vendues** ; les produits non vendus restent en stock au **coût de production**.
`,
    exercices: md`
### Exercice 2 — Oasis Conserves : passer de la nature à la destination

La société « Oasis Conserves » (Agadir) relève dans sa comptabilité générale les charges suivantes pour le trimestre (en DH) : achats consommés de matières 520 000 ; charges de personnel 240 000 ; autres charges externes 90 000 ; dotations d'exploitation 60 000.

Le contrôleur de gestion propose les clés de répartition suivantes :

| Charge | Production | Distribution | Administration |
|---|---:|---:|---:|
| Achats consommés de matières | 100 % | — | — |
| Charges de personnel | 60 % | 25 % | 15 % |
| Autres charges externes | 50 % | 30 % | 20 % |
| Dotations d'exploitation | 70 % | 10 % | 20 % |

1. Présentez les charges classées par destination (par fonction).
2. Vérifiez que le total est inchangé et expliquez pourquoi.
3. Quelle information nouvelle ce reclassement apporte-t-il au dirigeant ?

<details><summary>Voir le corrigé</summary>

**1) Charges par fonction**

| Charge | Production | Distribution | Administration | Total |
|---|---:|---:|---:|---:|
| Matières | 520 000 | 0 | 0 | 520 000 |
| Personnel | 144 000 | 60 000 | 36 000 | 240 000 |
| Autres charges externes | 45 000 | 27 000 | 18 000 | 90 000 |
| Dotations | 42 000 | 6 000 | 12 000 | 60 000 |
| **Total** | **751 000** | **93 000** | **66 000** | **910 000** |

Calculs : personnel $240\,000 \times 60\,\% = 144\,000$ ; autres charges externes $90\,000 \times 50\,\% = 45\,000$ ; dotations $60\,000 \times 70\,\% = 42\,000$, etc.

**2)** Le total reste **910 000 DH** : le reclassement ne crée ni ne supprime aucune charge, il change seulement l'angle de lecture (destination au lieu de nature).

**3)** Le dirigeant voit que la fonction production absorbe $751\,000 / 910\,000 \approx 82{,}5\,\%$ des charges, la distribution 10,2 % et l'administration 7,3 %. Il peut suivre chaque fonction, la comparer à un budget et en désigner le responsable, ce que le CPC par nature ne permet pas.

</details>

### Exercice 3 — Dar Tanger Distribution : coût de revient d'une entreprise commerciale

L'entreprise commerciale « Dar Tanger Distribution » revend deux marchandises. Pour le mois de mai :

| Élément | Marchandise A | Marchandise B |
|---|---:|---:|
| Quantités achetées et vendues | 2 000 unités | 1 000 unités |
| Prix d'achat unitaire | 150 DH | 240 DH |
| Frais d'achat directs | 9 000 DH | 6 000 DH |
| Prix de vente unitaire | 190 DH | 290 DH |

Les frais de distribution, communs aux deux marchandises, s'élèvent à 33 500 DH ; ils sont répartis proportionnellement au chiffre d'affaires.

1. Calculez le coût d'achat total et unitaire de chaque marchandise.
2. Répartissez les frais de distribution.
3. Calculez le coût de revient et le résultat analytique de chaque marchandise.
4. Quelle marchandise est la plus rentable en taux de marge sur chiffre d'affaires ?

<details><summary>Voir le corrigé</summary>

**1) Coûts d'achat**
- A : $2\,000 \times 150 + 9\,000 = 309\,000$ DH, soit $154{,}50$ DH l'unité.
- B : $1\,000 \times 240 + 6\,000 = 246\,000$ DH, soit $246$ DH l'unité.

**2) Frais de distribution** — chiffres d'affaires : A $= 2\,000 \times 190 = 380\,000$ DH ; B $= 1\,000 \times 290 = 290\,000$ DH ; total $670\,000$ DH.
- A : $33\,500 \times \dfrac{380\,000}{670\,000} = 19\,000$ DH ;
- B : $33\,500 \times \dfrac{290\,000}{670\,000} = 14\,500$ DH.

**3) Coûts de revient et résultats**

| | A | B | Total |
|---|---:|---:|---:|
| Coût d'achat des marchandises vendues | 309 000 | 246 000 | 555 000 |
| Frais de distribution | 19 000 | 14 500 | 33 500 |
| **Coût de revient** | **328 000** | **260 500** | **588 500** |
| Chiffre d'affaires | 380 000 | 290 000 | 670 000 |
| **Résultat analytique** | **+ 52 000** | **+ 29 500** | **+ 81 500** |

**4)** Taux de résultat : A $= 52\,000 / 380\,000 \approx 13{,}7\,\%$ ; B $= 29\,500 / 290\,000 \approx 10{,}2\,\%$. **A est la plus rentable**, alors que B dégage la plus forte marge unitaire en dirhams ($29{,}50$ DH contre $26$ DH) : il faut toujours préciser le critère de comparaison.

</details>
`,
    qcm: [
      { q: "La comptabilité analytique au Maroc est :", choix: ["Obligatoire pour toutes les sociétés", "Facultative, c'est un outil de gestion interne", "Obligatoire pour les seules SA", "Imposée par le Code général des impôts"], bonne: 1, explication: "Seule la comptabilité générale est obligatoire (loi 9-88) ; la CA est organisée librement." },
      { q: "La comptabilité analytique classe les charges :", choix: ["Par nature", "Par destination", "Par ordre chronologique", "Par fournisseur"], bonne: 1, explication: "Elle cherche à quel produit, atelier ou fonction sert chaque charge." },
      { q: "Le principal destinataire de la comptabilité analytique est :", choix: ["L'administration fiscale", "Les banques", "Les dirigeants et responsables internes", "Les clients"], bonne: 2, explication: "C'est un outil interne d'aide à la décision et de contrôle." },
      { q: "Un coût est :", choix: ["Un montant payé à un fournisseur", "Une somme de charges relatives à un objet (produit, fonction…)", "La différence entre un prix de vente et un prix d'achat", "Un produit de la classe 7"], bonne: 1, explication: "Le coût est un regroupement interne de charges ; le prix résulte d'un échange avec un tiers." },
      { q: "Un coût calculé à l'avance pour servir de norme est un coût :", choix: ["Constaté", "Historique", "Préétabli", "Complet réel"], bonne: 2, explication: "Coût standard ou budgété, comparé ensuite au coût réel." },
      { q: "Dans l'ordre de la cascade industrielle, le coût de production vient :", choix: ["Avant le coût d'achat", "Entre le coût d'achat et le coût de revient", "Après le coût de revient", "Après le résultat analytique"], bonne: 1, explication: "Coût d'achat → coût de production → coût de revient → résultat." },
      { q: "Le loyer d'une usine qui fabrique trois produits est une charge :", choix: ["Directe et variable", "Indirecte et fixe", "Directe et fixe", "Non incorporable"], bonne: 1, explication: "Commune à plusieurs produits (indirecte), indépendante du volume (fixe)." },
      { q: "Le coût de revient se calcule sur :", choix: ["Les quantités produites", "Les quantités vendues", "Les quantités achetées", "Les quantités en stock"], bonne: 1, explication: "Les produits non vendus restent en stock au coût de production." },
      { q: "Une entreprise réalise 120 000 DH de bénéfice global. On peut en conclure que :", choix: ["Tous ses produits sont rentables", "Au moins un produit est rentable, mais un autre peut être déficitaire", "Aucun produit n'est déficitaire", "Son coût de revient est nul"], bonne: 1, explication: "Le résultat global peut masquer un produit en perte, compensé par un autre." },
      { q: "Les stocks de produits finis sont évalués au bilan :", choix: ["Au prix de vente", "Au coût de production", "Au coût de revient", "Au prix d'achat des matières"], bonne: 1, explication: "Coût de production calculé par la comptabilité analytique." },
    ],
  },

  2: {
    titre: "Les charges de la comptabilité analytique",
    description: "Charges non incorporables, charges supplétives, différences d'incorporation, charges directes et indirectes, fixes et variables : cours et exercices corrigés.",
    resume: md`
## L'essentiel — Les charges de la comptabilité analytique

- **Charges incorporées = charges de la CG − charges non incorporables + charges supplétives ± différences d'incorporation.**
- **Charges non incorporables (CNI)** : étrangères à l'exploitation normale — charges non courantes (classe 65 : VNA des immobilisations cédées, pénalités, dons, dotations non courantes), dotations aux amortissements des immobilisations en non-valeur, **impôt sur les résultats**.
- **Charges supplétives (CS)** : coûts économiques absents de la CG — **rémunération des capitaux propres** (capitaux propres × taux) et **rémunération de l'exploitant** d'une entreprise individuelle. Ramener le taux annuel à la période (÷ 12 pour un mois).
- **Différences d'incorporation** = charge incorporée − charge comptabilisée : **charges d'usage** (amortissement économique au lieu de l'amortissement comptable) et **charges abonnées** (charge annuelle étalée par douzièmes).
- **Charges directes** : affectées sans calcul à un seul coût. **Charges indirectes** : réparties entre centres d'analyse puis imputées par unités d'œuvre.
- **Charges variables** (proportionnelles à l'activité, coût unitaire constant), **fixes** (constantes dans une structure donnée, coût unitaire décroissant), **semi-variables** ($Y = aX + b$).
- Méthode des points extrêmes : $a = \dfrac{Y_2 - Y_1}{X_2 - X_1}$ et $b = Y_1 - aX_1$.
- Concordance : **Résultat CG = résultat analytique − CNI + CS + produits non incorporables + différences d'incorporation** (prises avec leur signe).
`,
    exercices: md`
### Exercice 2 — Trier les charges et calculer les charges incorporées

Une entreprise de Kénitra relève, pour le mois de février, les charges suivantes (en DH) :

| Élément | Montant |
|---|---:|
| a) Intérêts d'un emprunt bancaire | 18 000 |
| b) Impôt sur les résultats (acompte du mois) | 64 000 |
| c) Salaires des ouvriers de production | 210 000 |
| d) VNA des immobilisations cédées | 25 000 |
| e) Amende pour infraction routière d'un camion | 1 500 |
| f) Dotations d'exploitation aux amortissements linéaires des machines | 42 000 |
| g) Dotation aux amortissements des frais d'augmentation de capital | 6 000 |
| h) Don à une association locale | 5 000 |
| i) Autres charges d'exploitation courantes | 380 000 |

Par ailleurs, les capitaux propres s'élèvent à 900 000 DH (taux de rémunération : 8 % l'an) et le travail de l'exploitant est estimé à 9 000 DH par mois.

1. Classez chaque élément : incorporable, non incorporable ou supplétif.
2. Calculez le total des charges de la comptabilité générale, les CNI et les CS du mois.
3. Calculez les charges incorporées et vérifiez par un calcul direct.

<details><summary>Voir le corrigé</summary>

**1) Classement**
- **Incorporables** : a) intérêts d'emprunt (charge financière courante, liée au financement de l'exploitation) ; c) salaires ; f) amortissements d'exploitation ; i) autres charges courantes.
- **Non incorporables** : b) IS ; d) VNA des immobilisations cédées ; e) amende ; g) amortissement d'une immobilisation en non-valeur ; h) don.
- **Supplétifs** : rémunération des capitaux propres et du travail de l'exploitant.

**2) Totaux**
- Charges CG : $18\,000 + 64\,000 + 210\,000 + 25\,000 + 1\,500 + 42\,000 + 6\,000 + 5\,000 + 380\,000 = 751\,500$ DH.
- CNI : $64\,000 + 25\,000 + 1\,500 + 6\,000 + 5\,000 = 101\,500$ DH.
- CS : $\dfrac{900\,000 \times 8\,\%}{12} + 9\,000 = 6\,000 + 9\,000 = 15\,000$ DH.

**3) Charges incorporées**

$$751\,500 - 101\,500 + 15\,000 = \mathbf{665\,000\ DH}$$

Vérification : charges incorporables $18\,000 + 210\,000 + 42\,000 + 380\,000 = 650\,000$ DH, plus 15 000 DH de charges supplétives $= 665\,000$ DH ✔.

</details>

### Exercice 3 — Rif Aluminium : décomposer une charge semi-variable

Les charges de l'atelier de découpe de la société « Rif Aluminium » (Nador) ont été les suivantes :

| Mois | Heures-machine | Charges de l'atelier (DH) |
|---|---:|---:|
| Janvier | 6 000 | 97 000 |
| Mars | 9 000 | 127 000 |

1. Décomposez ces charges en partie fixe et partie variable par la méthode des points extrêmes.
2. Prévoyez les charges pour 8 000 heures-machine.
3. Calculez le coût de l'heure-machine à 6 000 h et à 9 000 h. Expliquez l'écart.
4. Au-delà de 10 000 heures, l'entreprise doit louer une machine supplémentaire pour 9 000 DH par mois. Calculez les charges pour 11 000 heures.

<details><summary>Voir le corrigé</summary>

**1)** $a = \dfrac{127\,000 - 97\,000}{9\,000 - 6\,000} = \dfrac{30\,000}{3\,000} = 10$ DH par heure ; $b = 97\,000 - 10 \times 6\,000 = 37\,000$ DH. Les charges s'écrivent $Y = 10X + 37\,000$.

**2)** $Y = 10 \times 8\,000 + 37\,000 = \mathbf{117\,000\ DH}$.

**3)** À 6 000 h : $97\,000 / 6\,000 \approx 16{,}17$ DH ; à 9 000 h : $127\,000 / 9\,000 \approx 14{,}11$ DH. La part variable reste de 10 DH par heure, mais les 37 000 DH de charges fixes sont répartis sur plus d'heures : c'est l'**effet des économies d'échelle** sur les charges fixes.

**4)** La location crée un **palier** de charges fixes : $Y = 10 \times 11\,000 + 37\,000 + 9\,000 = \mathbf{156\,000\ DH}$. Les charges fixes ne sont fixes que dans une structure donnée.

</details>
`,
    qcm: [
      { q: "Les charges incorporées sont égales à :", choix: ["Charges CG + CNI − CS", "Charges CG − CNI + CS ± différences d'incorporation", "Charges CG − CS", "Charges CG + CNI + CS"], bonne: 1, explication: "On retire les charges non incorporables, on ajoute les supplétives et on corrige les différences d'incorporation." },
      { q: "L'impôt sur les résultats est :", choix: ["Une charge incorporable", "Une charge supplétive", "Une charge non incorporable", "Une différence d'incorporation"], bonne: 2, explication: "C'est une répartition du bénéfice, jamais un coût de production." },
      { q: "La rémunération conventionnelle des capitaux propres est une charge :", choix: ["Non incorporable", "Supplétive", "Directe", "Exceptionnelle"], bonne: 1, explication: "Elle n'existe pas en CG ; la CA l'ajoute." },
      { q: "Capitaux propres 1 200 000 DH, taux annuel 10 % : charge supplétive mensuelle ?", choix: ["120 000 DH", "10 000 DH", "12 000 DH", "1 000 DH"], bonne: 1, explication: "1 200 000 × 10 % = 120 000 par an, soit 10 000 par mois." },
      { q: "Une prime d'assurance annuelle de 24 000 DH comptabilisée en janvier est incorporée chaque mois pour :", choix: ["24 000 DH", "0 DH", "2 000 DH", "12 000 DH"], bonne: 2, explication: "Abonnement : 24 000 / 12 = 2 000 DH par mois." },
      { q: "Amortissement comptable 50 000 DH, amortissement économique 40 000 DH : la différence d'incorporation vaut :", choix: ["+ 10 000 DH", "− 10 000 DH", "90 000 DH", "0 DH"], bonne: 1, explication: "Incorporé − comptabilisé = 40 000 − 50 000 = − 10 000 DH." },
      { q: "Une charge indirecte :", choix: ["N'entre pas dans les coûts", "Est répartie entre centres puis imputée aux coûts", "Est affectée directement à un produit", "Est toujours fixe"], bonne: 1, explication: "Elle entre dans les coûts, mais par l'intermédiaire des centres d'analyse." },
      { q: "Quand l'activité augmente, le coût unitaire d'une charge fixe :", choix: ["Augmente", "Reste constant", "Diminue", "Devient variable"], bonne: 2, explication: "Le même total est réparti sur plus d'unités." },
      { q: "Charges : 50 000 DH pour 2 000 h et 62 000 DH pour 3 000 h. Charge variable par heure ?", choix: ["25 DH", "12 DH", "20,67 DH", "6 DH"], bonne: 1, explication: "(62 000 − 50 000) / (3 000 − 2 000) = 12 DH par heure." },
      { q: "Résultat analytique 50 000 DH, CNI 8 000 DH, CS 5 000 DH, pas d'autre écart. Résultat CG ?", choix: ["63 000 DH", "47 000 DH", "53 000 DH", "37 000 DH"], bonne: 1, explication: "50 000 − 8 000 + 5 000 = 47 000 DH." },
    ],
  },

  3: {
    titre: "La méthode des centres d'analyse",
    description: "Tableau de répartition des charges indirectes : répartition primaire et secondaire, prestations réciproques, unités d'œuvre et exercices corrigés.",
    resume: md`
## L'essentiel — La méthode des centres d'analyse

- Les **charges indirectes** transitent par des **centres d'analyse** avant d'être imputées aux coûts : **répartition primaire → répartition secondaire → imputation par unités d'œuvre**.
- **Centres principaux** (approvisionnement, ateliers, distribution) : leurs charges vont aux coûts. **Centres auxiliaires** (administration, entretien, énergie, transport, gestion du personnel) : ils sont vidés dans les autres centres.
- **Répartition primaire** : chaque charge est répartie par une **clé** (surface, effectif, puissance…). Contrôle : somme des totaux primaires = charges indirectes.
- **Répartition en escalier** : chaque centre auxiliaire ne donne qu'aux centres suivants, pas de calcul particulier.
- **Prestations réciproques** : système $A = A_0 + p_E E$ et $E = E_0 + p_A A$ ; on répartit les totaux **après** prestations ($A$, $E$), jamais les totaux primaires.
- **Coût de l'unité d'œuvre = total du centre après répartition secondaire / nombre d'unités d'œuvre.**
- UO usuelles : kg acheté (approvisionnement), heure-machine, heure de MOD, unité produite (ateliers), unité vendue ou 100 DH de CA (distribution). Unité monétaire = **taux de frais**.
- Contrôles : centres auxiliaires à **zéro**, total des centres principaux = total des charges indirectes. Toute **différence d'arrondi** part dans la concordance des résultats.
`,
    exercices: md`
### Exercice 2 — Répartition en escalier chez Doukkala Plast

L'entreprise « Doukkala Plast » (El Jadida) présente les totaux primaires suivants (en DH) : Énergie 40 000 ; Entretien 26 000 ; Atelier Moulage 110 000 ; Atelier Finition 85 000 ; Distribution 39 000.

- L'Énergie se répartit : 10 % à l'Entretien, 40 % au Moulage, 40 % à la Finition, 10 % à la Distribution.
- L'Entretien se répartit : 50 % au Moulage, 40 % à la Finition, 10 % à la Distribution.

Unités d'œuvre : Moulage, heure-machine (4 700 h) ; Finition, unité produite (5 650 unités) ; Distribution, 100 DH de chiffre d'affaires (CA : 920 000 DH).

1. Pourquoi n'est-il pas nécessaire de poser un système d'équations ?
2. Présentez la répartition secondaire.
3. Calculez le coût des unités d'œuvre.

<details><summary>Voir le corrigé</summary>

**1)** L'Énergie donne à l'Entretien, mais l'Entretien ne donne rien à l'Énergie : il n'y a **pas de réciprocité**. On vide l'Énergie en premier, puis l'Entretien augmenté de sa part d'énergie : c'est une **répartition en escalier**.

**2) Répartition secondaire**

| (DH) | Énergie | Entretien | Moulage | Finition | Distribution |
|---|---:|---:|---:|---:|---:|
| Totaux primaires | 40 000 | 26 000 | 110 000 | 85 000 | 39 000 |
| Énergie | − 40 000 | 4 000 | 16 000 | 16 000 | 4 000 |
| Entretien (26 000 + 4 000) | | − 30 000 | 15 000 | 12 000 | 3 000 |
| **Totaux secondaires** | **0** | **0** | **141 000** | **113 000** | **46 000** |

Contrôle : $141\,000 + 113\,000 + 46\,000 = 300\,000$ DH $= 40\,000 + 26\,000 + 110\,000 + 85\,000 + 39\,000$ ✔.

**3) Coût des unités d'œuvre**
- Moulage : $141\,000 / 4\,700 = \mathbf{30}$ DH l'heure-machine ;
- Finition : $113\,000 / 5\,650 = \mathbf{20}$ DH l'unité produite ;
- Distribution : $46\,000 / 9\,200 = \mathbf{5}$ DH pour 100 DH de CA.

</details>

### Exercice 3 — Prestations réciproques et différences d'arrondi

Une PME de Settat présente les totaux primaires suivants : Administration 36 000 DH ; Entretien 18 000 DH ; Atelier 120 000 DH ; Distribution 30 000 DH.

- Administration : 20 % à l'Entretien, 50 % à l'Atelier, 30 % à la Distribution.
- Entretien : 25 % à l'Administration, 60 % à l'Atelier, 15 % à la Distribution.

Unités d'œuvre : Atelier, heure-machine (4 600 h) ; Distribution, 100 DH de CA (CA : 1 169 200 DH). Les coûts d'UO sont arrondis au centime.

1. Calculez les totaux de l'Administration et de l'Entretien après prestations réciproques.
2. Calculez les totaux secondaires de l'Atelier et de la Distribution.
3. Calculez le coût des unités d'œuvre arrondi, puis les différences d'arrondi.

<details><summary>Voir le corrigé</summary>

**1)** $A = 36\,000 + 0{,}25\,E$ et $E = 18\,000 + 0{,}20\,A$.

$$A = 36\,000 + 0{,}25\,(18\,000 + 0{,}20\,A) = 40\,500 + 0{,}05\,A \;\Rightarrow\; A = \frac{40\,500}{0{,}95} \approx \mathbf{42\,631{,}58\ DH}$$

$$E = 18\,000 + 0{,}20 \times 42\,631{,}58 \approx \mathbf{26\,526{,}32\ DH}$$

**2)**
- Atelier : $120\,000 + 0{,}50 \times 42\,631{,}58 + 0{,}60 \times 26\,526{,}32 = 120\,000 + 21\,315{,}79 + 15\,915{,}79 = \mathbf{157\,231{,}58\ DH}$ ;
- Distribution : $30\,000 + 0{,}30 \times 42\,631{,}58 + 0{,}15 \times 26\,526{,}32 = 30\,000 + 12\,789{,}47 + 3\,978{,}95 = \mathbf{46\,768{,}42\ DH}$.

Contrôle : $157\,231{,}58 + 46\,768{,}42 = 204\,000$ DH $= 36\,000 + 18\,000 + 120\,000 + 30\,000$ ✔.

**3)**
- Atelier : $157\,231{,}58 / 4\,600 = 34{,}1808…$ arrondi à **34,18 DH** ; imputé : $4\,600 \times 34{,}18 = 157\,228$ DH ; différence d'arrondi : $157\,231{,}58 - 157\,228 = 3{,}58$ DH non imputés.
- Distribution : $46\,768{,}42 / 11\,692 = 4{,}00003…$ arrondi à **4,00 DH** ; imputé : $11\,692 \times 4 = 46\,768$ DH ; différence : $0{,}42$ DH non imputés.

Au total, **4 DH de charges n'ont pas été imputés** aux coûts : le résultat analytique est surévalué de 4 DH. Cette différence apparaîtra dans le tableau de concordance (chapitre 6).

</details>
`,
    qcm: [
      { q: "Les charges qui transitent par les centres d'analyse sont :", choix: ["Les charges directes", "Les charges indirectes", "Les charges non incorporables", "Les charges supplétives uniquement"], bonne: 1, explication: "Les charges directes sont affectées sans passer par les centres." },
      { q: "Un centre auxiliaire :", choix: ["Impute ses charges aux produits par unité d'œuvre", "Fournit des prestations aux autres centres", "Est toujours le centre distribution", "N'a jamais de charges"], bonne: 1, explication: "Ses charges sont réparties entre les autres centres." },
      { q: "Il y a prestations réciproques lorsque :", choix: ["Un centre principal donne à un auxiliaire", "Deux centres auxiliaires se rendent mutuellement des services", "Un centre se donne à lui-même", "Il y a plus de deux centres principaux"], bonne: 1, explication: "Il faut alors poser un système d'équations." },
      { q: "A = 50 000 + 0,1 E et E = 20 000 + 0,2 A. La valeur de A est environ :", choix: ["52 000 DH", "53 061 DH", "50 000 DH", "54 000 DH"], bonne: 1, explication: "A = 50 000 + 0,1 (20 000 + 0,2 A) = 52 000 + 0,02 A, donc A = 52 000 / 0,98 ≈ 53 061 DH." },
      { q: "Après la répartition secondaire, un centre auxiliaire doit présenter un total :", choix: ["Égal à son total primaire", "Nul", "Négatif", "Égal au total de l'entreprise"], bonne: 1, explication: "Il est entièrement vidé dans les autres centres." },
      { q: "Le coût de l'unité d'œuvre est égal à :", choix: ["Total primaire / nombre d'UO", "Total après répartition secondaire / nombre d'UO", "Nombre d'UO / total du centre", "Charges directes / nombre d'UO"], bonne: 1, explication: "On divise le total définitif du centre par son activité." },
      { q: "Une unité d'œuvre adaptée à un atelier très mécanisé est :", choix: ["L'heure de main-d'œuvre directe", "L'heure-machine", "Le kilo acheté", "100 DH de chiffre d'affaires"], bonne: 1, explication: "Dans un atelier mécanisé, les charges suivent le temps de fonctionnement des machines." },
      { q: "Centre distribution 36 000 DH, chiffre d'affaires 900 000 DH. Taux de frais pour 100 DH de CA ?", choix: ["0,04 DH", "4 DH", "40 DH", "25 DH"], bonne: 1, explication: "900 000 / 100 = 9 000 unités ; 36 000 / 9 000 = 4 DH par 100 DH de CA." },
      { q: "La clé de répartition la plus logique pour un loyer est :", choix: ["Le nombre de salariés", "La surface occupée", "Le chiffre d'affaires", "La puissance électrique"], bonne: 1, explication: "Le loyer est proportionnel aux mètres carrés occupés." },
      { q: "Une différence d'arrondi sur le coût des unités d'œuvre :", choix: ["Est ignorée", "Est reprise dans le tableau de concordance des résultats", "Est ajoutée aux charges non incorporables", "Modifie le total primaire"], bonne: 1, explication: "Elle explique un petit écart entre le résultat analytique et le résultat comptable." },
    ],
  },

  4: {
    titre: "Le coût d'achat et la gestion des stocks",
    description: "Coût d'achat, fiche de stock en inventaire permanent, CMUP, FIFO, différences d'inventaire et modèle de Wilson : cours et exercices corrigés.",
    resume: md`
## L'essentiel — Coût d'achat et stocks

- **Coût d'achat = prix d'achat net HT + frais accessoires directs (transport, douane, transitaire) + charges du centre approvisionnement.** La TVA récupérable et l'escompte de règlement n'y entrent pas.
- Le centre approvisionnement s'impute sur les quantités **achetées**.
- Inventaire permanent : **stock initial + entrées = sorties + stock final**, en quantités et en valeurs.
- Entrées au **coût d'achat** (matières, marchandises) ou au **coût de production** (produits finis). Le CGNC admet le **CMUP** et le **FIFO** pour évaluer les sorties.
- **CMUP de fin de période** $= \dfrac{\text{valeur SI} + \text{valeur des entrées}}{\text{quantité SI} + \text{quantités entrées}}$ : un calcul unique, stock initial compris.
- **CMUP après chaque entrée** : nouveau coût moyen à chaque entrée ; coûts connus en temps réel.
- **FIFO** : on épuise d'abord les lots les plus anciens ; le stock final est composé des lots récents.
- Prix en **hausse** : FIFO donne les sorties les plus faibles et le résultat le plus élevé ; en **baisse**, l'inverse. La méthode ne change pas le total SI + entrées.
- **Mali** (stock réel < théorique) et **boni** d'inventaire : évalués au CMUP, repris dans le tableau de concordance.
`,
    exercices: md`
### Exercice 2 — Coût d'achat d'un tissu importé

La société « Casablanca Confection » importe 10 000 mètres de tissu. Les éléments de l'opération sont les suivants :
- prix catalogue : 50 DH le mètre ; remise de 10 % ; escompte de 2 % pour règlement comptant ;
- droits de douane : 11 250 DH ; honoraires du transitaire : 3 750 DH ; transport du port à l'usine : 5 000 DH ;
- TVA à l'importation : 20 %, récupérable ;
- centre approvisionnement : 0,80 DH par mètre acheté.

1. Calculez le prix d'achat net.
2. Calculez le coût d'achat total et unitaire.
3. Justifiez le traitement de l'escompte et de la TVA.

<details><summary>Voir le corrigé</summary>

**1)** Prix brut : $10\,000 \times 50 = 500\,000$ DH ; remise : $500\,000 \times 10\,\% = 50\,000$ DH ; **prix d'achat net : 450 000 DH**.

**2) Coût d'achat**

| Élément | Montant (DH) |
|---|---:|
| Prix d'achat net | 450 000 |
| Droits de douane | 11 250 |
| Transitaire | 3 750 |
| Transport | 5 000 |
| Centre approvisionnement ($10\,000 \times 0{,}80$) | 8 000 |
| **Coût d'achat** | **478 000** |

Coût unitaire : $478\,000 / 10\,000 = \mathbf{47{,}80\ DH}$ le mètre.

**3)** L'escompte (2 % de 450 000 = 9 000 DH) récompense un paiement rapide : c'est un **produit financier**, il ne réduit pas le coût d'achat. La TVA est **récupérable** : elle sera déduite de la TVA collectée, ce n'est pas un coût pour l'entreprise.

</details>

### Exercice 3 — Dar Smartphones : CMUP ou FIFO en période de baisse des prix

L'entreprise commerciale « Dar Smartphones » (Casablanca) revend un modèle de téléphone. En janvier :

| Date | Opération |
|---|---|
| 01/01 | Stock initial : 50 unités à 3 000 DH |
| 10/01 | Achat : 100 unités au coût d'achat de 2 850 DH |
| 20/01 | Vente : 120 unités à 3 600 DH |
| 25/01 | Achat : 50 unités au coût d'achat de 2 700 DH |
| 30/01 | Vente : 60 unités à 3 500 DH |

1. Calculez le coût d'achat des téléphones vendus et le stock final au CMUP de fin de période.
2. Même question selon FIFO.
3. Calculez la marge dégagée selon chaque méthode et expliquez l'écart.

<details><summary>Voir le corrigé</summary>

**1) CMUP de fin de période**

$$\text{CMUP} = \frac{50 \times 3\,000 + 100 \times 2\,850 + 50 \times 2\,700}{50 + 100 + 50} = \frac{150\,000 + 285\,000 + 135\,000}{200} = \frac{570\,000}{200} = 2\,850\ DH$$

Unités vendues : $120 + 60 = 180$. Coût d'achat des ventes : $180 \times 2\,850 = \mathbf{513\,000\ DH}$ ; stock final : $20 \times 2\,850 = \mathbf{57\,000\ DH}$.

**2) FIFO**
- Vente du 20/01 : $50 \times 3\,000 + 70 \times 2\,850 = 150\,000 + 199\,500 = 349\,500$ DH ; reste 30 unités à 2 850 DH.
- Vente du 30/01 : $30 \times 2\,850 + 30 \times 2\,700 = 85\,500 + 81\,000 = 166\,500$ DH ; reste 20 unités à 2 700 DH.
- Coût d'achat des ventes : $\mathbf{516\,000\ DH}$ ; stock final : $20 \times 2\,700 = \mathbf{54\,000\ DH}$.

**3) Marges**

Chiffre d'affaires : $120 \times 3\,600 + 60 \times 3\,500 = 432\,000 + 210\,000 = 642\,000$ DH.

| Méthode | Coût des ventes | Marge |
|---|---:|---:|
| CMUP | 513 000 | **129 000** |
| FIFO | 516 000 | **126 000** |

Les prix d'achat **baissent** (3 000 → 2 850 → 2 700 DH). FIFO fait sortir d'abord les lots anciens, les plus chers : le coût des ventes est plus élevé et la marge plus faible de 3 000 DH, alors que le stock final est évalué plus bas (54 000 contre 57 000 DH). La somme coût des ventes + stock final reste égale à 570 000 DH dans les deux cas.

</details>
`,
    qcm: [
      { q: "Le coût d'achat comprend :", choix: ["Le prix d'achat TTC", "Le prix d'achat net HT, les frais accessoires et les charges d'approvisionnement", "Le prix de vente diminué de la marge", "Uniquement le prix du fournisseur"], bonne: 1, explication: "La TVA récupérable n'est pas un coût ; les frais d'approche s'ajoutent au prix net." },
      { q: "L'escompte de règlement obtenu d'un fournisseur :", choix: ["Diminue le coût d'achat", "Est un produit financier", "Augmente le coût d'achat", "Est une charge non incorporable"], bonne: 1, explication: "Il récompense un paiement rapide, il ne modifie pas le prix d'achat." },
      { q: "Le centre approvisionnement est généralement imputé sur :", choix: ["Les quantités consommées", "Les quantités achetées", "Les quantités vendues", "Le chiffre d'affaires"], bonne: 1, explication: "Son activité porte sur les achats reçus." },
      { q: "SI 1 000 kg à 10 DH, entrée 3 000 kg à 12 DH. CMUP de fin de période ?", choix: ["11 DH", "11,50 DH", "12 DH", "10,50 DH"], bonne: 1, explication: "(10 000 + 36 000) / 4 000 = 11,50 DH." },
      { q: "L'égalité fondamentale d'une fiche de stock est :", choix: ["SI + sorties = entrées + SF", "SI + entrées = sorties + SF", "SF = SI − entrées", "Entrées = sorties"], bonne: 1, explication: "Elle se vérifie en quantités et en valeurs." },
      { q: "Selon FIFO, le stock final est constitué :", choix: ["Des lots les plus anciens", "Des lots les plus récents", "D'une moyenne des lots", "Des lots les moins chers"], bonne: 1, explication: "Les lots anciens sortent en premier." },
      { q: "En période de hausse des prix, la méthode FIFO donne :", choix: ["Un coût des sorties plus élevé que le CMUP", "Un coût des sorties plus faible et un résultat plus élevé", "Le même résultat que le CMUP", "Un stock final plus faible"], bonne: 1, explication: "Les lots anciens, moins chers, sortent en premier." },
      { q: "Un stock réel inférieur au stock théorique est :", choix: ["Un boni d'inventaire", "Un mali d'inventaire", "Une charge supplétive", "Un en-cours"], bonne: 1, explication: "Le mali traduit une perte (casse, vol, erreur)." },
      { q: "Les entrées en stock de produits finis sont évaluées :", choix: ["Au coût d'achat", "Au coût de production", "Au prix de vente", "Au coût de revient"], bonne: 1, explication: "Le produit fini entre en stock à son coût de production." },
      { q: "La méthode LIFO (dernier entré, premier sorti) :", choix: ["Est la méthode de référence du CGNC", "N'est pas retenue par le CGNC, qui admet le CMUP et le FIFO", "Est obligatoire pour les stocks de matières", "Est identique au CMUP"], bonne: 1, explication: "Le CGNC retient le coût moyen pondéré et le premier entré, premier sorti." },
    ],
  },

  5: {
    titre: "Le coût de production",
    description: "Coût de production : matières consommées, main-d'œuvre directe, charges d'atelier, en-cours, sous-produits et déchets, avec exercices corrigés.",
    resume: md`
## L'essentiel — Le coût de production

- **Coût de production = matières consommées + MOD + charges indirectes de production + ECI − ECF − valeur des sous-produits et déchets vendables (+ coût d'évacuation des déchets sans valeur).**
- Matières consommées : quantités sorties × **CMUP** (ou FIFO) de la fiche de stock.
- **MOD** : heures directes × **taux horaire chargé** (salaire brut + charges patronales). Les heures improductives vont en charges indirectes.
- Production en plusieurs stades : le **produit semi-fini** a sa propre fiche de stock et entre dans l'atelier suivant à son CMUP.
- **En-cours** : l'ECI s'**ajoute**, l'ECF se **retranche**. À défaut de valeur donnée, on raisonne en **équivalents produits finis**.
- **Sous-produit** (méthode du prix de vente) : valeur = prix de vente − frais de distribution − traitement propre − marge éventuelle, **déduite** du coût du produit principal.
- **Déchets** : sans valeur → coût d'évacuation **ajouté** ; vendables → valeur nette **déduite**.
- **Produits conjoints** : coût commun réparti selon les quantités ou, mieux, selon la valeur de marché.
- Le coût unitaire se calcule sur les quantités **produites** ; les produits finis entrent en stock à ce coût puis sortent au CMUP.
`,
    exercices: md`
### Exercice 2 — Tanger Auto Câblage : évaluer un en-cours en équivalents

L'atelier de l'équipementier « Tanger Auto Câblage » a lancé 5 000 faisceaux électriques en juin (aucun en-cours initial). À la fin du mois, 4 200 faisceaux sont terminés ; les 800 autres sont en cours : les matières y sont intégralement incorporées, mais ils ne sont achevés qu'à 50 % pour la main-d'œuvre et les charges d'atelier.

Charges du mois : matières 150 000 DH ; MOD 92 000 DH ; charges indirectes de l'atelier 69 000 DH.

1. Calculez le nombre d'équivalents produits finis pour les matières, puis pour la MOD et les charges indirectes.
2. Calculez le coût unitaire de chaque élément.
3. Calculez le coût de production des faisceaux terminés et la valeur de l'en-cours final.

<details><summary>Voir le corrigé</summary>

**1) Équivalents produits finis**
- Matières : $4\,200 + 800 \times 100\,\% = 5\,000$ équivalents ;
- MOD et charges indirectes : $4\,200 + 800 \times 50\,\% = 4\,600$ équivalents.

**2) Coûts unitaires**
- Matières : $150\,000 / 5\,000 = 30$ DH ;
- MOD : $92\,000 / 4\,600 = 20$ DH ;
- Charges indirectes : $69\,000 / 4\,600 = 15$ DH.

**3)**
- Faisceaux terminés : $4\,200 \times (30 + 20 + 15) = 4\,200 \times 65 = \mathbf{273\,000\ DH}$ ;
- En-cours final : $800 \times 30 + 400 \times (20 + 15) = 24\,000 + 14\,000 = \mathbf{38\,000\ DH}$.

Contrôle : $273\,000 + 38\,000 = 311\,000$ DH $= 150\,000 + 92\,000 + 69\,000$ ✔.

</details>

### Exercice 3 — Biscuiterie du Saïss : deux ateliers et un produit semi-fini

La « Biscuiterie du Saïss » (Fès) fabrique ses biscuits en deux stades.

- **Atelier Pétrissage** : il consomme 48 000 kg de farine à 4,50 DH le kg, 2 000 heures de MOD à 30 DH et 2 000 heures-machine à 20 DH. Il produit 20 000 kg de pâte, stockée avant cuisson. Stock initial de pâte : 5 000 kg valant 81 000 DH.
- **Atelier Cuisson-Emballage** : il consomme 22 000 kg de pâte, des emballages pour 0,12 DH par paquet, 1 500 heures de MOD à 30 DH ; son centre coûte 0,25 DH par paquet. Il produit 200 000 paquets. Les biscuits cassés (2 120 kg) sont revendus 3 DH le kg, sans frais.

1. Calculez le coût de production de la pâte et son CMUP.
2. Calculez le coût de production total et unitaire des paquets.

<details><summary>Voir le corrigé</summary>

**1) Pâte (produit semi-fini)**

| Élément | Montant (DH) |
|---|---:|
| Farine : $48\,000 \times 4{,}50$ | 216 000 |
| MOD : $2\,000 \times 30$ | 60 000 |
| Centre Pétrissage : $2\,000 \times 20$ | 40 000 |
| **Coût de production de 20 000 kg** | **316 000** (15,80 DH le kg) |

$$\text{CMUP de la pâte} = \frac{81\,000 + 316\,000}{5\,000 + 20\,000} = \frac{397\,000}{25\,000} = 15{,}88\ DH\ le\ kg$$

**2) Paquets de biscuits**

| Élément | Montant (DH) |
|---|---:|
| Pâte consommée : $22\,000 \times 15{,}88$ | 349 360 |
| Emballages : $200\,000 \times 0{,}12$ | 24 000 |
| MOD : $1\,500 \times 30$ | 45 000 |
| Centre Cuisson-Emballage : $200\,000 \times 0{,}25$ | 50 000 |
| − Biscuits cassés vendus : $2\,120 \times 3$ | − 6 360 |
| **Coût de production de 200 000 paquets** | **462 000** |

Coût unitaire : $462\,000 / 200\,000 = \mathbf{2{,}31\ DH}$ le paquet. La pâte entre dans le second atelier à son **CMUP** (15,88 DH), pas à son coût du mois (15,80 DH).

</details>
`,
    qcm: [
      { q: "L'en-cours initial :", choix: ["Se retranche du coût de production", "S'ajoute au coût de production", "Est ignoré", "Entre dans le coût de revient"], bonne: 1, explication: "Ses charges ont été engagées le mois précédent pour des produits terminés ce mois-ci." },
      { q: "L'en-cours final :", choix: ["S'ajoute au coût de production", "Se retranche du coût de production", "Est un sous-produit", "Est un produit fini"], bonne: 1, explication: "Il a consommé des charges du mois sans être terminé." },
      { q: "La valeur d'un sous-produit évalué par la méthode du prix de vente :", choix: ["S'ajoute au coût du produit principal", "Se déduit du coût du produit principal", "Est une charge non incorporable", "Entre dans le coût de distribution"], bonne: 1, explication: "Le produit principal bénéficie de ce qui est récupéré." },
      { q: "Le coût d'évacuation de déchets sans valeur :", choix: ["Se déduit du coût de production", "S'ajoute au coût de production", "Est une charge supplétive", "Est ignoré"], bonne: 1, explication: "C'est une charge supplémentaire supportée par les produits bons." },
      { q: "Charges du mois 300 000 DH, ECI 20 000 DH, ECF 35 000 DH. Coût de production des produits terminés ?", choix: ["315 000 DH", "285 000 DH", "355 000 DH", "300 000 DH"], bonne: 1, explication: "20 000 + 300 000 − 35 000 = 285 000 DH." },
      { q: "600 unités en cours achevées à 40 % pour la MOD représentent, pour la MOD :", choix: ["600 équivalents", "240 équivalents", "360 équivalents", "40 équivalents"], bonne: 1, explication: "600 × 40 % = 240 équivalents produits finis." },
      { q: "Le coût unitaire de production se calcule en divisant par :", choix: ["Les quantités vendues", "Les quantités produites", "Les quantités achetées", "Le stock final"], bonne: 1, explication: "Le coût de production porte sur la production terminée." },
      { q: "Les frais de distribution :", choix: ["Entrent dans le coût de production", "N'entrent pas dans le coût de production mais dans le coût de revient", "Sont des charges non incorporables", "Se déduisent du coût d'achat"], bonne: 1, explication: "Ils interviennent au stade du coût de revient." },
      { q: "Salaire brut horaire 32 DH, charges patronales 25 %. Taux horaire chargé ?", choix: ["32 DH", "40 DH", "25,60 DH", "57 DH"], bonne: 1, explication: "32 × 1,25 = 40 DH." },
      { q: "Des produits conjoints sont :", choix: ["Des produits défectueux", "Plusieurs produits principaux issus simultanément d'une même fabrication", "Des produits achetés et revendus en l'état", "Des en-cours"], bonne: 1, explication: "Leur coût commun doit être réparti jusqu'au point de séparation." },
    ],
  },

  6: {
    titre: "Le coût de revient et le résultat analytique",
    description: "Coût de revient des produits vendus, résultat analytique par produit et tableau de concordance avec la comptabilité générale : exercices corrigés.",
    resume: md`
## L'essentiel — Coût de revient et résultat analytique

- **Coût de revient = coût de production des produits vendus + coûts hors production** (distribution, administration, financement imputés). Toujours sur les quantités **vendues**.
- Coût de production des produits vendus = quantités vendues × **CMUP** du stock de produits finis.
- Commissions en % du CA : charges **directes et variables**, calculées produit par produit.
- **Résultat analytique = chiffre d'affaires − coût de revient**, par produit puis global ; résultat unitaire et taux de rentabilité (résultat / CA).
- **Tableau de concordance** : résultat analytique global **+ charges supplétives − charges non incorporables + produits non incorporables ± différences d'incorporation + boni − mali ± différences d'arrondi = résultat de la CG**.
- Règle des signes : si l'élément a rendu le résultat analytique **trop élevé**, on le **retranche** ; **trop faible**, on l'**ajoute**. Sous-imputation (coûts trop faibles) → on retranche ; sur-imputation → on ajoute.
- Un produit déficitaire en coût complet n'est pas forcément à abandonner : il faut regarder sa **marge sur coût variable** (chapitre 7).
`,
    exercices: md`
### Exercice 2 — Remonter la concordance à l'envers

Une entreprise de Oujda communique, pour le trimestre, un résultat de la comptabilité générale de **84 300 DH**. Vous disposez des informations suivantes :
- charges non incorporables : 5 200 DH ;
- charges supplétives : 7 500 DH ;
- produits non incorporables (produits financiers sur placements) : 3 000 DH ;
- différence d'incorporation : la CA a incorporé 1 200 DH de charges de **plus** que la CG (abonnement d'une charge annuelle) ;
- mali d'inventaire : 900 DH ;
- les arrondis des coûts d'unités d'œuvre ont conduit à imputer 40 DH de plus que les charges réelles.

Le calcul des coûts a donné les résultats suivants : produit X, CA 420 000 DH et coût de revient 371 340 DH ; produit Y, CA 260 000 DH et coût de revient 230 000 DH.

1. Retrouvez le résultat analytique global à partir du résultat de la CG.
2. Vérifiez-le à partir des résultats par produit.

<details><summary>Voir le corrigé</summary>

**1)** On part de l'égalité : Résultat CG = Résultat analytique + CS − CNI + PNI + différences d'incorporation − mali + sur-imputation. On l'inverse :

$$\text{Résultat analytique} = 84\,300 - 7\,500 + 5\,200 - 3\,000 - 1\,200 + 900 - 40 = \mathbf{78\,660\ DH}$$

Signes : la CA a incorporé plus de charges (+ 1 200) et a sur-imputé 40 DH, son résultat est donc plus **faible** que celui de la CG ; en remontant de la CG vers la CA, on retranche ces montants. Le mali (perte supportée par la CG seule) se rajoute.

**2)** X : $420\,000 - 371\,340 = 48\,660$ DH ; Y : $260\,000 - 230\,000 = 30\,000$ DH ; total : $78\,660$ DH ✔.

</details>

### Exercice 3 — Agadir Cycles : coût de revient et prix plancher

L'entreprise commerciale « Agadir Cycles » vend deux modèles de vélos. Pour le trimestre :

| | City | VTT |
|---|---:|---:|
| Quantités vendues | 400 | 150 |
| Prix de vente unitaire | 1 450 DH | 2 900 DH |
| Coût d'achat unitaire des vélos vendus (CMUP) | 1 100 DH | 2 300 DH |

Coûts hors production : commissions de 4 % du CA ; centre distribution de 38 500 DH (unité d'œuvre : vélo vendu) ; centre administration de 23 550 DH (par 100 DH de coût d'achat des vélos vendus).

1. Calculez le coût de l'unité d'œuvre de la distribution et le taux de frais de l'administration.
2. Présentez le coût de revient et le résultat analytique de chaque modèle.
3. Quel prix de vente minimum du VTT couvrirait son coût de revient complet (la commission restant de 4 % du prix) ?

<details><summary>Voir le corrigé</summary>

**1)** Distribution : $38\,500 / (400 + 150) = 70$ DH par vélo vendu. Administration : coût d'achat des ventes $= 400 \times 1\,100 + 150 \times 2\,300 = 440\,000 + 345\,000 = 785\,000$ DH, soit 7 850 centaines ; taux $= 23\,550 / 7\,850 = 3$ DH pour 100 DH.

**2)**

| (DH) | City | VTT |
|---|---:|---:|
| Coût d'achat des vélos vendus | 440 000 | 345 000 |
| Commissions (4 % du CA) | 23 200 | 17 400 |
| Distribution (70 DH par vélo) | 28 000 | 10 500 |
| Administration (3 DH pour 100 DH) | 13 200 | 10 350 |
| **Coût de revient** | **504 400** | **383 250** |
| Chiffre d'affaires | 580 000 | 435 000 |
| **Résultat analytique** | **75 600** | **51 750** |
| Résultat par vélo | 189 | 345 |

**3)** Hors commission, un VTT coûte $(345\,000 + 10\,500 + 10\,350) / 150 = 2\,439$ DH. La commission étant de 4 % du prix $P$, il faut $P - 0{,}04\,P = 2\,439$, soit $P = 2\,439 / 0{,}96 \approx \mathbf{2\,540{,}63\ DH}$. En dessous de ce prix, le VTT serait vendu à perte en coût complet.

</details>
`,
    qcm: [
      { q: "Le coût de revient se calcule sur :", choix: ["Les quantités produites", "Les quantités vendues", "Les quantités achetées", "Le stock final"], bonne: 1, explication: "Il rattache au chiffre d'affaires les coûts des seuls produits vendus." },
      { q: "Le coût de revient d'un produit fabriqué comprend :", choix: ["Le coût de production des produits vendus et les coûts hors production", "Le seul coût d'achat des matières", "Le coût de production de toute la production", "Le prix de vente"], bonne: 0, explication: "Coût de production des ventes + distribution + administration imputée." },
      { q: "Une commission de 3 % du CA versée aux représentants est une charge :", choix: ["Indirecte et fixe", "Directe et variable", "Non incorporable", "Supplétive"], bonne: 1, explication: "Elle se calcule par produit et varie avec les ventes." },
      { q: "CA 500 000 DH, coût de revient 440 000 DH. Taux de rentabilité ?", choix: ["60 %", "12 %", "13,6 %", "88 %"], bonne: 1, explication: "60 000 / 500 000 = 12 %." },
      { q: "Dans la concordance, les charges supplétives sont :", choix: ["Retranchées du résultat analytique", "Ajoutées au résultat analytique", "Ignorées", "Ajoutées au CA"], bonne: 1, explication: "Elles ont diminué le résultat analytique sans exister en CG." },
      { q: "Dans la concordance, un produit de cession d'immobilisation est :", choix: ["Retranché", "Ajouté", "Ignoré", "Déduit du coût de revient"], bonne: 1, explication: "Produit non incorporable : présent en CG, absent du résultat analytique." },
      { q: "Un mali d'inventaire se traite dans la concordance :", choix: ["En addition", "En soustraction", "Il n'y figure pas", "Dans le coût d'achat"], bonne: 1, explication: "La CG supporte la perte, la CA ne l'a pas comptée." },
      { q: "Des charges sous-imputées aux coûts à cause des arrondis rendent le résultat analytique :", choix: ["Trop faible, on ajoute l'écart", "Trop élevé, on retranche l'écart", "Exact", "Nul"], bonne: 1, explication: "Les coûts sont trop faibles, donc le résultat trop élevé." },
      { q: "Résultat analytique 100 000 DH ; CNI 6 000 ; CS 9 000 ; aucun autre écart. Résultat CG ?", choix: ["115 000 DH", "103 000 DH", "97 000 DH", "85 000 DH"], bonne: 1, explication: "100 000 − 6 000 + 9 000 = 103 000 DH." },
      { q: "Un produit déficitaire en coût complet :", choix: ["Doit toujours être abandonné", "Doit être analysé en coût variable avant toute décision", "Est forcément mal géré", "N'a pas de charges fixes"], bonne: 1, explication: "S'il dégage une marge sur coût variable positive, il couvre une partie des charges fixes." },
    ],
  },

  7: {
    titre: "Le seuil de rentabilité (méthode des coûts variables)",
    description: "Marge sur coût variable, seuil de rentabilité, point mort, marge de sécurité et levier opérationnel : cours, méthode et exercices corrigés.",
    resume: md`
## L'essentiel — Seuil de rentabilité et coûts variables

- Méthode des **coûts variables** : on n'impute aux produits que les charges **variables** ; les charges fixes sont couvertes globalement par les marges.
- **Compte de résultat différentiel** : $CA - CV = MCV$ ; $MCV - CF = \text{Résultat}$ ; taux de MCV $= MCV / CA$.
- **Seuil de rentabilité** : $SR = \dfrac{CF}{\text{taux de MCV}}$ en valeur, $Q_{SR} = \dfrac{CF}{p - v}$ en quantité. Au seuil : $MCV = CF$ et résultat nul.
- **Point mort** $= \dfrac{SR}{CA} \times 12$ mois (activité régulière). Fermeture d'un mois : raisonner sur 11 mois et sauter le mois fermé. Activité saisonnière : cumuler le CA mois par mois.
- **Marge de sécurité** $= CA - SR$ ; **indice de sécurité** $= MS / CA$ ; **levier opérationnel** $= MCV / \text{Résultat} = CA / MS$.
- Charges fixes élevées → seuil élevé, levier fort, **risque d'exploitation** élevé.
- Décisions : accepter une commande si **prix > coût variable** (capacité disponible) ; ne pas abandonner un produit dont la **MCV est positive** ; comparer deux structures au **volume d'indifférence**.
- Multiproduit : seuil global avec le **taux de MCV moyen**, à composition des ventes constante.
`,
    exercices: md`
### Exercice 2 — Point mort avec fermeture annuelle puis avec saisonnalité

**Partie A.** Une entreprise de Kénitra réalise un CA annuel de 4 400 000 DH, réparti régulièrement sur 11 mois : elle ferme en août. Son taux de MCV est de 30 % et ses charges fixes s'élèvent à 990 000 DH. Calculez le seuil de rentabilité et la date du point mort.

**Partie B.** Un glacier d'Ifrane a des charges fixes annuelles de 360 000 DH et un taux de MCV de 40 %. Son chiffre d'affaires mensuel (en milliers de DH) est le suivant :

| Jan. | Fév. | Mars | Avr. | Mai | Juin | Juil. | Août | Sept. | Oct. | Nov. | Déc. |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 40 | 40 | 60 | 80 | 120 | 180 | 240 | 260 | 120 | 60 | 40 | 40 |

Calculez le seuil de rentabilité, la date du point mort et le résultat annuel.

<details><summary>Voir le corrigé</summary>

**Partie A.** $SR = 990\,000 / 0{,}30 = 3\,300\,000$ DH. Délai : $\dfrac{3\,300\,000}{4\,400\,000} \times 11 = 8{,}25$ mois d'activité. Les mois d'activité se comptent janvier (1) → juillet (7), puis septembre (8) : il faut encore $0{,}25$ mois d'octobre, soit environ 7,5 jours. Point mort : **vers le 8 octobre**. Sans tenir compte de la fermeture, on aurait trouvé à tort $8{,}25$ mois, soit le 8 septembre.

**Partie B.** $SR = 360\,000 / 0{,}40 = 900\,000$ DH.

| Mois | Juin | Juillet | Août |
|---|---:|---:|---:|
| CA cumulé (milliers DH) | 520 | 760 | 1 020 |

Le seuil est atteint en **août** : il manque $900 - 760 = 140$ milliers de DH au 31 juillet, sur un CA d'août de 260. Date : $\dfrac{140}{260} \times 31 \approx 16{,}7$ jours, soit **vers le 17 août**.

CA annuel : 1 280 000 DH ; résultat $= 1\,280\,000 \times 40\,\% - 360\,000 = \mathbf{152\,000\ DH}$.

</details>

### Exercice 3 — Tensift Électro : seuil global et abandon d'un produit

La société « Tensift Électro » (Marrakech) vend des ventilateurs (V) et des climatiseurs (C) :

| (DH) | Ventilateurs | Climatiseurs |
|---|---:|---:|
| Chiffre d'affaires | 600 000 | 1 400 000 |
| Charges variables | 420 000 | 840 000 |

Les charges fixes totales s'élèvent à 555 000 DH, dont 40 000 DH propres aux ventilateurs (publicité et stockage spécifiques), le reste étant commun. En coût complet, les charges fixes sont réparties à parts égales entre les deux produits.

1. Calculez la MCV et le taux de MCV de chaque produit, puis le taux moyen.
2. Calculez le résultat global et le seuil de rentabilité global.
3. Calculez le résultat des ventilateurs en coût complet. Faut-il les abandonner ?

<details><summary>Voir le corrigé</summary>

**1)** V : $MCV = 180\,000$ DH, taux 30 % ; C : $MCV = 560\,000$ DH, taux 40 %. Taux moyen : $740\,000 / 2\,000\,000 = 37\,\%$.

**2)** Résultat $= 740\,000 - 555\,000 = \mathbf{185\,000\ DH}$ ; $SR = 555\,000 / 0{,}37 = \mathbf{1\,500\,000\ DH}$ (si la composition des ventes reste de 30 % de ventilateurs et 70 % de climatiseurs).

**3)** En coût complet, les ventilateurs supportent $555\,000 / 2 = 277\,500$ DH de charges fixes : résultat $= 180\,000 - 277\,500 = -\,97\,500$ DH. Ils semblent déficitaires.

Mais si on les abandonne, seules leurs charges fixes propres (40 000 DH) disparaissent :

$$\text{Nouveau résultat} = 560\,000 - (555\,000 - 40\,000) = \mathbf{45\,000\ DH}$$

soit une **baisse de 140 000 DH**, exactement la marge sur coûts spécifiques des ventilateurs ($180\,000 - 40\,000$). **Il faut garder les ventilateurs** : ils contribuent à couvrir les charges fixes communes.

</details>
`,
    qcm: [
      { q: "La marge sur coût variable est égale à :", choix: ["CA − charges fixes", "CA − charges variables", "Résultat + charges variables", "CA − coût de revient"], bonne: 1, explication: "MCV = CA − CV ; elle sert à couvrir les charges fixes." },
      { q: "Au seuil de rentabilité :", choix: ["La MCV est nulle", "La MCV est égale aux charges fixes", "Le CA est égal aux charges fixes", "Les charges variables sont nulles"], bonne: 1, explication: "Le résultat est nul : MCV − CF = 0." },
      { q: "CF 300 000 DH, taux de MCV 25 %. Seuil de rentabilité ?", choix: ["75 000 DH", "1 200 000 DH", "400 000 DH", "225 000 DH"], bonne: 1, explication: "300 000 / 0,25 = 1 200 000 DH." },
      { q: "Prix 80 DH, coût variable 50 DH, CF 150 000 DH. Seuil en quantité ?", choix: ["1 875 unités", "5 000 unités", "3 000 unités", "1 154 unités"], bonne: 1, explication: "150 000 / (80 − 50) = 5 000 unités." },
      { q: "SR 1 800 000 DH, CA 2 400 000 DH, activité régulière. Point mort ?", choix: ["Fin juin", "Fin septembre", "Fin août", "Fin octobre"], bonne: 1, explication: "1 800 000 / 2 400 000 × 12 = 9 mois : fin septembre." },
      { q: "La marge de sécurité est égale à :", choix: ["CA − SR", "SR − CF", "MCV − CF", "CA − CV"], bonne: 0, explication: "C'est la baisse de CA supportable avant la perte." },
      { q: "MCV 600 000 DH, résultat 150 000 DH. Levier opérationnel ?", choix: ["0,25", "4", "450 000", "1,5"], bonne: 1, explication: "600 000 / 150 000 = 4 : +1 % de CA donne +4 % de résultat." },
      { q: "Une commande à prix réduit doit être acceptée (capacité disponible, sans effet sur les autres ventes) si le prix est supérieur :", choix: ["Au coût complet", "Au coût variable unitaire", "Au prix habituel", "Aux charges fixes"], bonne: 1, explication: "Les charges fixes étant déjà couvertes, toute marge positive augmente le résultat." },
      { q: "Un produit a une MCV positive mais un résultat négatif en coût complet. Son abandon :", choix: ["Améliore toujours le résultat", "Peut dégrader le résultat global", "Est sans effet", "Supprime toutes les charges fixes"], bonne: 1, explication: "Les charges fixes communes restent à couvrir par les autres produits." },
      { q: "Plus une entreprise est proche de son seuil de rentabilité :", choix: ["Plus son levier opérationnel est faible", "Plus son levier opérationnel est élevé", "Plus son indice de sécurité est élevé", "Moins son risque est grand"], bonne: 1, explication: "LO = CA / MS : une petite marge de sécurité donne un levier élevé." },
    ],
  },

  8: {
    titre: "L'imputation rationnelle des charges fixes et la méthode ABC",
    description: "Imputation rationnelle des charges fixes (CIR, sous-activité, suractivité) et méthode ABC par activités et inducteurs : exercices corrigés.",
    resume: md`
## L'essentiel — Imputation rationnelle et méthode ABC

- En coût complet réel, le coût unitaire **varie avec l'activité** à cause des charges fixes : il augmente quand l'activité baisse.
- **Imputation rationnelle** : $CIR = \dfrac{\text{activité réelle}}{\text{activité normale}}$ ; charges fixes imputées $= CF \times CIR$ ; les charges variables restent imputées en totalité.
- Le coût de l'unité d'œuvre devient **constant**, égal au coût à l'activité normale.
- $CIR < 1$ : **coût de sous-activité** $= CF \times (1 - CIR)$ ; $CIR > 1$ : **boni de suractivité** $= CF \times (CIR - 1)$.
- Concordance : sous-activité **retranchée** du résultat analytique, boni de suractivité **ajouté**.
- Chaque centre a **sa propre** activité normale et son propre CIR.
- **Méthode ABC** : les produits consomment des **activités**, les activités consomment des **ressources**. Démarche : activités → **inducteurs** → coût unitaire de l'inducteur → imputation aux produits.
- Inducteurs typiques : nombre de lots, de commandes d'achat, de commandes clients, de contrôles, de références.
- La méthode traditionnelle à unités d'œuvre volumiques **surcharge les grandes séries** et **sous-évalue les produits complexes en petites séries** (subventionnement croisé).
`,
    exercices: md`
### Exercice 2 — Centre Montage : deux mois, un seul coût d'unité d'œuvre

Le centre Montage d'une usine de Mohammedia a une capacité de 7 500 heures par mois ; les arrêts normaux (maintenance, congés) en représentent 20 %. Ses charges fixes s'élèvent à 150 000 DH par mois et ses charges variables à 35 DH par heure. Il a fonctionné 5 400 heures en avril et 6 600 heures en mai.

1. Déterminez l'activité normale du centre.
2. Pour chaque mois, calculez le CIR, le coût imputé, le coût de l'heure et l'écart d'imputation rationnelle.
3. Quel aurait été le coût de l'heure sans imputation rationnelle ?

<details><summary>Voir le corrigé</summary>

**1)** Activité normale $= 7\,500 \times (1 - 20\,\%) = \mathbf{6\,000\ heures}$.

**2)**

| | Avril | Mai |
|---|---:|---:|
| CIR | $5\,400 / 6\,000 = 0{,}90$ | $6\,600 / 6\,000 = 1{,}10$ |
| Charges variables | $5\,400 \times 35 = 189\,000$ | $6\,600 \times 35 = 231\,000$ |
| Charges fixes imputées | $150\,000 \times 0{,}90 = 135\,000$ | $150\,000 \times 1{,}10 = 165\,000$ |
| **Coût imputé** | **324 000** | **396 000** |
| **Coût de l'heure** | $324\,000 / 5\,400 = \mathbf{60}$ | $396\,000 / 6\,600 = \mathbf{60}$ |
| Écart | Coût de sous-activité : **15 000** | Boni de suractivité : **15 000** |

Le coût de l'heure est stable à 60 DH $= 150\,000 / 6\,000 + 35$.

**3)** Sans imputation rationnelle : avril $(150\,000 + 189\,000) / 5\,400 \approx 62{,}78$ DH ; mai $(150\,000 + 231\,000) / 6\,600 \approx 57{,}73$ DH. Le coût varierait de plus de 5 DH d'un mois à l'autre sans aucun changement d'efficacité.

</details>

### Exercice 3 — Rabat Cosmétiques : la méthode ABC révèle un produit déficitaire

La société « Rabat Cosmétiques » fabrique une crème (C, 50 000 unités) et un parfum (P, 10 000 unités). Ses charges indirectes (480 000 DH) sont analysées par activité :

| Activité | Coût (DH) | Inducteur | Crème | Parfum |
|---|---:|---|---:|---:|
| Approvisionnement | 96 000 | Commandes d'achat | 40 | 80 |
| Lancement des lots | 144 000 | Nombre de lots | 30 | 60 |
| Conditionnement | 120 000 | Unités conditionnées | 50 000 | 10 000 |
| Administration des ventes | 120 000 | Commandes clients | 150 | 250 |

Coûts directs unitaires : crème 12 DH, parfum 30 DH. Prix de vente : crème 22 DH, parfum 50 DH. Jusqu'ici, l'entreprise imputait toutes les charges indirectes au nombre d'unités produites.

1. Calculez le coût indirect unitaire de chaque produit selon la méthode traditionnelle.
2. Calculez le coût de chaque inducteur, puis le coût indirect unitaire de chaque produit selon ABC.
3. Comparez les résultats unitaires et totaux obtenus par les deux méthodes. Que doit faire l'entreprise ?

<details><summary>Voir le corrigé</summary>

**1) Méthode traditionnelle** : $480\,000 / 60\,000 = 8$ DH par unité, pour les deux produits.

**2) Méthode ABC**

| Activité | Coût de l'inducteur | Crème | Parfum |
|---|---:|---:|---:|
| Approvisionnement | $96\,000 / 120 = 800$ | 32 000 | 64 000 |
| Lancement des lots | $144\,000 / 90 = 1\,600$ | 48 000 | 96 000 |
| Conditionnement | $120\,000 / 60\,000 = 2$ | 100 000 | 20 000 |
| Administration des ventes | $120\,000 / 400 = 300$ | 45 000 | 75 000 |
| **Total** | | **225 000** | **255 000** |
| **Par unité** | | **4,50 DH** | **25,50 DH** |

**3) Comparaison**

| Résultat unitaire | Crème | Parfum |
|---|---:|---:|
| Méthode traditionnelle | $22 - 12 - 8 = 2$ DH | $50 - 30 - 8 = 12$ DH |
| Méthode ABC | $22 - 12 - 4{,}50 = 5{,}50$ DH | $50 - 30 - 25{,}50 = -\,5{,}50$ DH |

Résultat total : traditionnel $100\,000 + 120\,000 = 220\,000$ DH ; ABC $275\,000 - 55\,000 = 220\,000$ DH. Le **total est identique** : seule la répartition change.

Le parfum, fabriqué en petits lots avec beaucoup de commandes, consomme bien plus d'activités que son volume ne le laisse croire. Il semblait le plus rentable ; il est en réalité **déficitaire**. L'entreprise doit agir sur ses **inducteurs** (lots plus grands, regroupement des commandes d'achat, commande minimum pour les clients) ou sur son **prix**, plutôt que d'abandonner le produit sans analyse de sa marge sur coût variable.

</details>
`,
    qcm: [
      { q: "Le coefficient d'imputation rationnelle est égal à :", choix: ["Activité normale / activité réelle", "Activité réelle / activité normale", "Charges fixes / charges variables", "Activité réelle / capacité maximale"], bonne: 1, explication: "CIR = activité réelle / activité normale." },
      { q: "L'imputation rationnelle s'applique :", choix: ["Aux charges variables", "Aux charges fixes", "Aux charges directes uniquement", "Au chiffre d'affaires"], bonne: 1, explication: "Seules les charges fixes sont imputées en fonction du CIR." },
      { q: "CF 200 000 DH, CIR 0,85. Coût de sous-activité ?", choix: ["170 000 DH", "30 000 DH", "0 DH", "235 000 DH"], bonne: 1, explication: "200 000 × (1 − 0,85) = 30 000 DH." },
      { q: "Un CIR supérieur à 1 traduit :", choix: ["Un coût de sous-activité", "Un boni de suractivité", "Une perte", "Une activité nulle"], bonne: 1, explication: "L'activité réelle dépasse l'activité normale." },
      { q: "Avec l'imputation rationnelle, le coût de l'unité d'œuvre :", choix: ["Varie fortement avec l'activité", "Reste égal au coût à l'activité normale", "Est toujours nul", "Est égal au coût variable seul"], bonne: 1, explication: "Les fluctuations d'activité sont neutralisées." },
      { q: "Dans la concordance, un coût de sous-activité est :", choix: ["Ajouté au résultat analytique", "Retranché du résultat analytique", "Ignoré", "Ajouté aux charges supplétives"], bonne: 1, explication: "Ces charges fixes n'ont pas été imputées : le résultat analytique est trop élevé." },
      { q: "Dans la méthode ABC, un inducteur de coût est :", choix: ["Une charge directe", "Le facteur qui explique la consommation de ressources par une activité", "Un centre auxiliaire", "Un taux de marge"], bonne: 1, explication: "Nombre de lots, de commandes, de contrôles…" },
      { q: "La méthode traditionnelle à unités d'œuvre volumiques tend à :", choix: ["Sous-évaluer le coût des produits en grandes séries", "Surévaluer le coût des grandes séries et sous-évaluer celui des petites séries complexes", "Donner le même résultat que l'ABC dans tous les cas", "Ignorer les charges indirectes"], bonne: 1, explication: "C'est le subventionnement croisé que l'ABC corrige." },
      { q: "Activité « réglages » : 90 000 DH pour 45 lots. Un produit lancé en 10 lots reçoit :", choix: ["2 000 DH", "20 000 DH", "9 000 DH", "4 500 DH"], bonne: 1, explication: "90 000 / 45 = 2 000 DH par lot ; 10 × 2 000 = 20 000 DH." },
      { q: "Par rapport à la méthode des centres, la méthode ABC modifie :", choix: ["Le total des charges indirectes", "La répartition des charges indirectes entre produits", "Le chiffre d'affaires", "Les charges directes"], bonne: 1, explication: "Le total reste le même ; seule sa répartition change." },
    ],
  },
};

export default chapitres;
