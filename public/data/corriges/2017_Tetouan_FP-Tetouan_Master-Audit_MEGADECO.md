## SUJET 1 — Entreprise MEGA-DECO

### I.1 — Les 7 principes comptables fondamentaux

Continuité d'exploitation — Permanence des méthodes — Coût historique — Spécialisation des exercices — Prudence — Clarté (transparence) — Importance significative.

### I.2 — Régularisations de fin d'exercice N

**a) Amortissements**

| Immobilisation | Calcul | Dotation |
|---|---|---|
| Matériel & outillage : taux = 421 875 / (750 000 × 45/12) = **15 %** | 750 000 × 15 % | 112 500 |
| Mobilier de bureau, dégressif 10 ans → 10 % × coef 2,5 = **25 %**, acquis 01/10/N → 3 mois | 300 000 × 25 % × 3/12 | 18 750 |
| Matériel de transport cédé le 25/03/N (cumul à la cession = 650 000 × 20 % × 21/12 = 227 500 ; complément janv.–mars = 32 500) | 650 000 × 20 % × 3/12 | 32 500 |

⚠️ Le prix de cession du matériel de transport n'est pas fourni dans la source : le résultat sur cession ne peut être calculé (VNA = 650 000 − 227 500 = 422 500).

**b) Titres**

- TP X : coût 146 000 < valeur 152 000 → plus-value latente ; reprise éventuelle de l'ancienne provision (base N-1 : (730−700) × 200 = **6 000**).
- TVP Z : coût 400 × 340 = 136 000 > valeur 400 × 280 = 112 000 → moins-value latente **24 000** ; ancienne provision (N-1) = (340−320) × 400 = 8 000 → **dotation complémentaire 16 000**.

**c) Créances douteuses (TVA 20 %)**

- **ALI** : HT 320 000 ; provision N-1 = 45 % × 320 000 = 144 000 ; règlement 84 000 TTC (70 000 HT) ; solde HT = 250 000 ; nouvelle provision 75 % = **187 500** → dotation complémentaire **43 500**.
- **BRAHIM** (« pour solde ») : HT 260 000 ; provision N-1 = 130 000 ; encaissé 120 000 TTC (100 000 HT) ; reliquat irrécouvrable = 192 000 TTC :
```
6182 Créances devenues irrécouvrables ... 160 000
4455 État TVA ............................ 32 000
        34213 Clients douteux ................... 192 000
71964 Reprise provision BRAHIM .......... 130 000
        3942 Prov. clients douteux .............. 130 000
```
- **SAID** : HT 100 000 × 25 % = **dotation 25 000**.

**d) Autres régularisations**

- Facture à établir (décembre) : 70 000 − 10 % = **63 000 HT**, TVA 12 600, TTC 75 600 (D3421 / C7121 + C4455).
- Stocks PF : SI 140 000 / SF 260 000 → variation positive +120 000 (entrée en stock SF via 3151/7134, sortie du SI inversement).

### II — Prévisions LP1 (moindres carrés)

x ∈ {1..6} ; Σx = 21 ; Σy = 735 ; Σxy = 2 960 ; Σx² = 91.
a = (6×2 960 − 21×735)/(6×91 − 21²) = 2 325/105 ≈ **22,14** ; b = (735 − 22,14×21)/6 = **45**
→ **y = 45 + 22,14 x**

Prévisions S2 N+1 : juillet 200,0 ; août 222,1 ; septembre 244,3 ; octobre 266,4 ; novembre 288,6 ; décembre 310,7 → **total ≈ 1 532 kDH**.

Seuil de rentabilité (CV 25 %, CF 900 kDH/an) : SR = 900/0,75 = **1 200 kDH de CA**. CA cumulé : S1 = 735 ; + juillet = 935 ; + août ≈ 1 157 ; atteint début septembre (~5 jours dans le mois).

Résultat prévisionnel N+1 : CA annuel = 735 + 1 532 = 2 267 ; MCV = 75 % × 2 267 = 1 700,4 ; résultat = 1 700,4 − 900 = **≈ 800 kDH**.

### III — Investissement (850 000 DH, CAF constants 250 000, 5 ans, 10 %)

Coefficient d'actualisation d'annuités constantes (10 %, 5 ans) = 3,7908.
VAN = 250 000 × 3,7908 − 850 000 = 947 695 − 850 000 = **+ 97 695 DH → projet rentable**.
IP = 947 695 / 850 000 = **1,12 > 1** ✓.

**Divergence VAN/TRI** : les deux critères peuvent classer différemment des projets **de tailles (capacités) différentes** ou présentant des **flux non conventionnels** (changements de signe), car la VAN suppose les flux intermédiaires réinvestis au taux d'actualisation alors que le TRI les suppose réinvestis au TRI lui-même.

### IV — Bénéfices de l'audit interne

L'audit interne est une fonction indépendante et objective d'assurance et de conseil créée pour améliorer la création de valeur. Elle apporte : une maîtrise systématique des risques opérationnels, financiers et de conformité ; la fiabilisation des informations de gestion destinées à la direction générale ; l'évaluation de l'efficacité des processus et du contrôle interne (détection des dysfonctionnements, fraudes et gaspillages) ; des recommandations d'amélioration continue qui renforcent la performance et la gouvernance. Pour MEGA-DECO, il préparerait aussi utilement le terrain aux travaux du commissaire aux comptes.

---

## SUJET 2 — Prévisions trimestrielles avec saisonnalité

*(La suite du sujet et ses annexes ne figurent pas dans la source consultée : seul le plan de réponse peut être donné.)*

Méthode attendue :
1. Tendance générale y = ax + b déjà obtenue par moindres carrés sur les données trimestrielles ;
2. Calcul des **coefficients saisonniers** : rapport de la valeur observée à la tendance (ou méthode des rapports à la moyenne mobile), puis moyenne par trimestre ;
3. Prévision = tendance estimée pour chaque trimestre N+1 × coefficient saisonnier correspondant.
