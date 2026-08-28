## Corrigé indicatif

> Corrigé rédigé à partir de l'énoncé transcrit — pas de correction officielle publiée trouvée. Le détail chiffré de l'exercice de comptabilité analytique (Dossier N°2) n'a pas pu être retranscrit depuis la source (seule sa description figure dans l'énoncé) — voir note dédiée. Relecture humaine recommandée, notamment sur le barème IS/TPA supposés.

### Dossier N°1 — Gestion financière : effet de levier (société ABC)

- Résultat d'exploitation (REX) = CA − CV − CF = 6 000 000 − 2 000 000 − 1 000 000 = **3 000 000**
- Actif économique = Actif immobilisé + BFRE = 7 500 000 + 1 500 000 = **9 000 000**
- Rentabilité économique avant impôt (Re) = 3 000 000 / 9 000 000 = **33,33 %** ; après IS (30 %) = **23,33 %**

**Structure 1 (100 % capitaux propres) :** capitaux propres = 9 000 000 ; aucun frais financier.
Résultat net = 3 000 000 × 0,70 = 2 100 000 → **Rentabilité financière = 2 100 000 / 9 000 000 = 23,33 %** (égale à Re après impôt, logique en l'absence de dette).

**Structure 2 (30 % CP / 70 % emprunt à 10 %) :** Capitaux propres = 2 700 000 ; Emprunt = 6 300 000.
Frais financiers = 6 300 000 × 10 % = 630 000 ; Résultat avant impôt = 3 000 000 − 630 000 = 2 370 000 ; Résultat net = 2 370 000 × 0,70 = 1 659 000.
**Rentabilité financière = 1 659 000 / 2 700 000 = 61,44 %**
*(Vérification par la formule de l'effet de levier : Rf = [Re + (Re−i)×D/CP] × (1−IS) = [33,33 % + (33,33 %−10 %)×2,333] × 0,70 = 87,78 % × 0,70 ≈ 61,44 % ✓)*

**Interprétation :** la rentabilité économique (33,33 % avant impôt) est très supérieure au coût de la dette (10 %) : l'effet de levier joue pleinement en faveur des actionnaires dans la structure 2 (61,44 % contre 23,33 % en tout capitaux propres). Ce choix accroît toutefois le risque financier de l'entreprise (variabilité de la rentabilité financière, risque de ne pas honorer le remboursement in fine de l'emprunt) — un avantage à mettre en balance avec la capacité de l'entreprise à supporter ce risque.

### Dossier N°1 (suite) — Répartition des bénéfices et TPA (SA ALPHA)

Capital libéré = 900 000 × 3/4 = **675 000** ; bénéfice distribuable = Résultat net (700 000) + Report à nouveau débiteur (−80 000) = **620 000**.

**Tableau de répartition :**

| Affectation | Montant |
|---|---|
| Bénéfice distribuable | 620 000 |
| − Réserve légale (5 % × 700 000, résultat net de l'exercice) | 35 000 |
| − Intérêt statutaire (6 % × 675 000 capital libéré) | 40 500 |
| − Réserves facultatives | 30 000 |
| = Superdividende | 514 500 |

Dividende total par action = (Intérêt statutaire 40 500 + Superdividende 514 500) / 4 500 actions = 555 000 / 4 500 = 123,33 dh → **arrondi à 123 dh/action** (contrainte d'un nombre entier), soit un dividende total distribué de 123 × 4 500 = **553 500 dh**. L'écart (555 000 − 553 500 = 1 500 dh) est porté en **report à nouveau nouveau**.

*Vérification : 35 000 (RL) + 30 000 (RF) + 553 500 (dividendes) + 1 500 (RAN) = 620 000 ✓*

**TPA (taxe sur les produits des actions, taux de 15 %)** = 553 500 × 15 % = **83 025 dh**.

**Écritures :**
```
Répartition du résultat (décision d'affectation) :
12    Résultat net de l'exercice                 700 000
        1161  Report à nouveau (apurement du solde débiteur)      80 000
        1140  Réserves légales                                    35 000
        1152  Réserves facultatives                                30 000
        4465  Actionnaires, dividendes à payer                    553 500
        1161  Report à nouveau (nouveau solde créditeur)            1 500

Paiement des dividendes (15/05/2021), net de la retenue à la source :
4465  Actionnaires, dividendes à payer          553 500
        4453  État, TPA à payer                                    83 025
        5141  Banque                                              470 475

Règlement de la TPA au Trésor (30/06/2021) :
4453  État, TPA à payer                          83 025
        5141  Banque                                                83 025
```

### Dossier N°2 — TVA et comptabilité analytique

**1. Montant de la TVA due (janvier 2022)**

TVA déductible sur achats = 200 000 × 70 % (prorata) = 140 000
TVA déductible sur immobilisations = 50 000 × 70 % = 35 000
Total TVA déductible = **175 000**
**TVA due = TVA exigible (300 000) − TVA déductible (175 000) = 125 000 dh**

**2. Fait générateur vs exigibilité**

- Le **fait générateur** est l'événement (livraison du bien, achèvement de la prestation de service, encaissement pour certaines opérations) qui fait naître la dette fiscale — il détermine le principe même de l'imposition de l'opération.
- L'**exigibilité** est le moment à partir duquel le Trésor peut réclamer le paiement de la taxe. Au Maroc, elle dépend du régime choisi par le redevable : **régime de l'encaissement** (exigibilité lors du paiement, régime de droit commun) ou **régime des débits/facturation** (exigibilité dès la facturation, sur option — dans ce cas elle coïncide en général avec le fait générateur pour les livraisons de biens).

**Comptabilité analytique (coûts standards) :** *non chiffrable* — la source consultée ne donne qu'une description de l'exercice (fiche de coût standard matière M/composant C, centres Usinage et Assemblage, production réelle de 2 500 unités) sans les valeurs numériques elles-mêmes. Merci de transmettre le détail chiffré si tu l'as pour compléter cette partie.

### Dossier N°3 — Dissertation : accélération des changements et rôle du manager

Trame de réponse :
- **I. Un environnement caractérisé par l'accélération et le décloisonnement** : mutations technologiques, mais aussi organisationnelles, sociales et concurrentielles qui touchent tous les domaines de l'entreprise, pas seulement la technique.
- **II. Des impacts sur l'entreprise et sur le manager** : l'entreprise doit développer agilité et veille stratégique pour ne pas subir ces tendances ; le manager, acteur central, doit renouveler ses compétences (anticipation, gestion du changement, transversalité) et son mode de management (moins hiérarchique, plus collaboratif).
- **III. Les leviers d'adaptation** : formation continue, culture de l'innovation, structures organisationnelles plus flexibles (transversalité, mode projet), leadership orienté vers l'accompagnement du changement plutôt que le simple contrôle.
- **Conclusion attendue :** le manager contemporain n'est plus seulement un exécutant de procédures mais un acteur du changement, dont le rôle se déplace du contrôle vers l'anticipation et l'accompagnement des équipes face à un environnement mouvant et décloisonné.
