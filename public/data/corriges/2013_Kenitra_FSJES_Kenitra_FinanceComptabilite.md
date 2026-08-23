## I.1 — Résultat analytique (comptabilité des coûts)

**Coûts d'achat des matières** (frais d'approvisionnement répartis au prorata des quantités achetées : 1 000/1 400 pour le plastique, 400/1 400 pour le verre) :

| | Plastique | Verre |
|---|---|---|
| Prix d'achat | 1 000 × 120 = 120 000 | 400 × 300 = 120 000 |
| Frais d'approvisionnement | 60 000 × 10/14 = 42 857,14 | 60 000 × 4/14 = 17 142,86 |
| **Coût d'achat / CU** | **162 857,14 → 162,86 DH/kg** | **137 142,86 → 342,86 DH/kg** |

**Consommations (FIFO)** :
- Plastique : sorties 1 500 kg = SI 510 kg × 284,31 (145 000) + 990 kg × 162,86 (161 228,57) = **306 228,57**
- Verre : sorties 300 kg × 342,86 = **102 857,14**

**Atelier Moulage** : 306 228,57 + MOD (200 h × 60 = 12 000) + frais 100 000 = 418 228,57
Coût de production des montures = (encours initial 1 800 + 418 228,57) / 2 500 = **168,01 DH/monture**

**Atelier Montage** : montures consommées 2 500 × 168,01 = 420 028,57 + verre 102 857,14 + MOD (250 h × 164 = 41 000) + frais 160 500 = **724 385,71**
Coût de production des lunettes = 724 385,71 / 2 800 = **258,71 DH/lunette**

**Coût de revient des ventes (FIFO)** : sorties 3 000 lunettes = 400 × 65 + 2 600 × 258,71 = 26 000 + 672 646 = 698 646 ; distribution 120 000 → **818 646 DH**

**Résultat analytique** = CA (3 000 × 150 = 450 000) − coût de revient = **− 368 646 DH**

⚠️ **Incohérence majeure des données source (signalée)** : ce résultat analytique est incompatible avec le résultat comptable annoncé (+455 000 DH) et avec un prix de vente (150 DH) inférieur de moitié au coût de production unitaire calculé. Une ou plusieurs données sont vraisemblablement mal transcrites dans la source (prix de vente, quantités ou valeur du stock initial de plastique). La démarche et les formules ci-dessus constituent l'essentiel de la réponse attendue.

## I.2 — Quantité économique de commande (modèle de Wilson)

Q* = √(2 × C × P / t·u) avec C = consommation annuelle 250 000 kg ; P = passation 100 DH/commande ; taux de possession 15 % ; valeur unitaire du stock 22 DH.

**Q* = √(2 × 250 000 × 100 / (0,15 × 22)) = √15 151 515 ≈ 3 893 kg par commande**

Nombre de commandes N = 250 000 / 3 893 ≈ 64 commandes/an ; intervalle ≈ 360/64 ≈ **5,6 jours**.

---

## II.1 — Impôt sur les sociétés

**Réintégrations et déductions :**

| Opération | Traitement | Effet |
|---|---|---|
| Achat en espèces 50 000 | déductible si appuyé d'une facture régulière (règlement en espèces ≥ 5 000 DH admis sur justification) | 0 |
| Frais divers sans justificatifs | non déductibles | + 9 000 |
| Produits de participation 50 000 | exonérés à 99 % | + 49 500 |
| Dégrèvement d'IS 72 500 | produit imposable (pas d'ajustement) | 0 |
| Dotation amortissement d'un matériel loué (non propriétaire) | non déductible | + 3 500 |
| Cadeaux clients 20 100 TTC (150 unités → 134 TTC/u) | plafond 100 DH TTC/unité si marque gravée ; excédent = 34 × 150 = 5 100 TTC → HT | + 4 250 |

Résultat brut = 455 000 + 66 250 = 521 250
Déficit reporté de N-1 : − 25 000 → **Résultat fiscal = 496 250 DH**

**IS dû** (barème alors en vigueur : 30 % jusqu'à 300 000 ; 31 % au-delà) :
= 300 000 × 30 % + 196 250 × 31% = 90 000 + 60 837,50 = **150 837,50 DH**

Cotisation minimale : base = CA HT (450 000) → CM = 0,25 % = 1 125 < IS → c'est bien l'IS qui est dû.

**Modalités de paiement** : acomptes provisionnels de 25 % chacun versés avant le 31/03, 30/06, 30/09 et 31/12 (ici 225 000 versés > IS dû), puis régularisation avec la déclaration du résultat fiscal **avant le 31 mars N+1** : excédent de **74 162,50 DH** imputable sur les prochains acomptes ou restituable.

## II.2 — Taxes locales

- **Taxe professionnelle** = valeur locative × taux selon nature d'activité (13 % industrie, 20 % commerce/services). Pour une activité mixte production/vente : TP ≈ 950 000 × 20 % = **190 000 DH** *(ou 123 500 DH au taux industriel de 13 %)*.
- **Taxe de services communaux** = 10,5 % × valeur locative = 950 000 × 10,5 % = **99 750 DH**.

---

## III — Choix de l'équipement (VAN à 10 %)

| | Année 1 | Année 2 | Année 3 |
|---|---|---|---|
| Facteurs 1,1⁻ⁿ | 0,9091 | 0,8264 | 0,7513 |
| Projet A | 454 545 | 500 000 | 375 660 |
| Projet B | 814 545 | 330 579 | 375 660 |

- **Projet A** : PV des flux = 1 330 205 → VAN = 1 330 205 − 1 200 000 = **+ 130 205 DH** ; IP = 1,109
- **Projet B** : PV des flux = 1 520 784 → VAN = 1 520 784 − 1 500 000 = **+ 20 784 DH** ; IP = 1,014

Les deux projets créent de la valeur mais **l'équipement A doit être retenu** (VAN supérieure et meilleur indice de profitabilité).

---

## IV — Bilan financier (au 31/12/N)

⚠️ **Le bilan comptable fourni n'est pas équilibré** (Actif = 982 700 ≠ Passif = 1 063 700, écart de 81 000 DH) : incohérence signalée dans la source. Les masses ci-dessous suivent les données telles quelles.

**Retraitements** : incorporation de la machine en crédit-bail (VO 60 000, cumul 2 × 11 600 = 23 200, net 36 800 → emplois stables ; dette résiduelle ≈ 36 000 en dettes de financement) ; résultat porté en réserves ; clients à plus d'un an (2 000) reclassés en emplois stables ; non-valeurs (9 000) déduites des capitaux propres.

| EMPLOIS | | RESSOURCES | |
|---|---|---|---|
| Actif immobilisé (hors non-valeurs, CB incluse) | 853 244 | Capitaux propres (après RA, résultat, − non-valeurs) | 943 000 |
| Créances > 1 an | 2 000 | Dettes de financement (23 000 + crédit-bail 36 000) | 59 000 |
| Stocks + créances CT | 26 256 | Passif circulant | 20 700 |
| Trésorerie active | 129 000 | Trésorerie passive | 68 000 |

- **FR financier** = (943 000 + 59 000) − 855 244 = **146 756**
- **BFR** = 26 256 − 20 700 = **5 556**
- **TN** = FR − BFR = **141 200** — mais TN = TA − TP = 129 000 − 68 000 = **61 000** ; l'écart entre les deux lectures (80 200) provient du déséquilibre du bilan source signalé plus haut.
