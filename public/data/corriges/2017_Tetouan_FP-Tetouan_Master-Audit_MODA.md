## I — Travaux de fin d'exercice 2016

### 1. La partie double (question de cours)

Tout événement comptable est enregistré dans **au moins deux comptes** : un compte débité et un ou plusieurs comptes crédités, pour des montants égaux. Le total débit est ainsi toujours égal au total crédit : chaque opération a une ressource et un emploi de même valeur, ce qui assure l'équilibre arithmétique permanent du système (principe fondateur de Luca Pacioli) et permet la vérification par la balance.

### 2. Écritures de régularisation au 31/12/2016

**a) Amortissements**

| Immobilisation | Calcul | Dotation |
|---|---|---|
| Construction (taux = 180 000 / (1 200 000 × 3 ans) = 5 %) | 1 200 000 × 5 % | 60 000 |
| Matériel de transport : 2 voitures restantes | 800 000 × 20 % | 160 000 |
| Voiture cédée le 30/09/2016 (complément janv.–sept.) | 400 000 × 20 % × 9/12 | 60 000 |
| Mobilier de bureau, dégressif (10 ans → coef 2,5 → taux lin. 10 % × 2,5 = 25 % ; base VNC = 120 000 − 15 000) | 105 000 × 25 % | 26 250 |

```
61932 DEA constructions ................. 60 000
        2832 Amort. constructions ................ 60 000
61934 DEA matériel de transport ......... 220 000
        2834 Amort. mat. transport .............. 220 000
61935/61938 DEA mobilier (dégressif) .... 26 250
        28352 Amort. mobilier ................... 26 250
```
*(Rappel cession déjà passée : cumul voiture cédée = 400 000 × 20 % × 2,75 ans = 220 000 ; VNA = 180 000 ; prix 115 000 → moins-value de 65 000.)*

**b) Titres**

- TVP X — cession de 40 % (1 000 titres) à 310 : produit brut 310 000 − commission TTC 1 100 = 308 900 ; coût d'achat 1 000 × 220 = 220 000 → **plus-value réalisée = 88 900** (compte 7381 – produits nets sur cession de TVP). Les 1 500 titres restants (coût 330 000 < cours 310 × 1 500 = 465 000) : plus-value latente → aucune provision.
- TP Z : coût 300 × 350 = 105 000 ; valeur 300 × 270 = 81 000 → **provision pour dépréciation = 24 000** :
```
6393 DFP pour dépréciation des TP ....... 24 000
        2951 Prov. dépréciation TP ............... 24 000
```

**c) Créances douteuses (TVA 20 %)**

- **HILALI** : créance HT = 106 560/1,2 = 88 800 ; provision 2015 = 25 % × 88 800 = 22 200 ; règlement 26 640 TTC (22 200 HT) ; solde TTC 79 920 → HT 66 600 ; provision à 30 % = 19 980 → **reprise de 2 220**.
- **ALAOUI** : HT = 78 000/1,2 = 65 000 ; provision 25 % = **16 250 (dotation)**.
```
71964 REP pour dépréciation créances .... 2 220
        3942 Prov. clients douteux ............... 2 220
61964 DEP dépréciation créances ......... 16 250
        3942 Prov. clients douteux ............... 16 250
```

**d) Autres régularisations**

- Stock de PF : 350 000 → 475 000 (variation +125 000 via les comptes de stocks et 7134).
- Facture SAIDI non établie (15/12) : net commercial 45 000 − 10 % = **40 500 HT**, TVA 8 100, TTC **48 600** (facture à établir) :
```
3421 Clients ............................ 48 600
        7121 Ventes de biens produits ............ 40 500
        4455 État TVA facturée ................... 8 100
```
- Prime d'assurance annuelle payée le 01/08/2016 : charges constatées d'avance = 24 000 × 7/12 = **14 000**.

---

## II — Investissement (3 600 000 DH, 3 ans)

### 1. Cash-flows nets (IS 30 %)

Amortissement annuel = 3 600 000/3 = 1 200 000.

| | Année 1 | Années 2 et 3 |
|---|---|---|
| CA | 1 500 000 | 2 500 000 |
| Charges variables (10 %) | 150 000 | 250 000 |
| Charges fixes hors amort. | 500 000 | 500 000 |
| Amortissements | 1 200 000 | 1 200 000 |
| Résultat avant impôt | − 350 000 | 550 000 |
| IS (30 %) *(économie d'impôt sur déficit imputable)* | + 105 000 | − 165 000 |
| Résultat net | − 245 000 | 385 000 |
| **CAF = RN + amortissement** | **955 000** | **1 585 000** |

Valeur résiduelle nette en fin d'année 3 : + 100 000.

### 2. VAN et IP (10 %)

VAN = 955 000/1,1 + 1 585 000/1,21 + 1 685 000/1,331 − 3 600 000
= 868 182 + 1 310 578 + 1 265 966 − 3 600 000 = **− 155 274 DH**
IP = 3 444 726 / 3 600 000 ≈ **0,96 < 1**

**Conclusion : le projet n'est pas rentable** (VAN négative, IP inférieur à 1) — à rejeter sous ces hypothèses. *(Si la perte de l'an 1 ne pouvait être imputée fiscalement, le CF1 tomberait à 850 000 et la VAN serait encore plus négative.)*

### 3. L'effet de levier financière

L'endettement permet d'investir avec des capitaux propres réduits : si la rentabilité économique (après impôt) du projet dépasse le coût après impôt de la dette (taux d'intérêt × (1−taux IS)), la différence revient aux actionnaires et amplifie la rentabilité financière — c'est l'effet de levier positif. Formule usuelle : RF = Re + (D/CP) × (Re − i×(1−t)). Si au contraire la rentabilité économique est inférieure au taux d'intérêt, l'endettement amplifie les pertes : effet de massue (levier négatif).
