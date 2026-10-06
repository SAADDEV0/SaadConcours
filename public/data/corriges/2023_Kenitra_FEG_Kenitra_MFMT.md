> Corrigé indicatif rédigé par SaadConcours, pas une correction officielle de la FEG Kénitra. L'exercice 2 se prête à deux lectures : celle retenue est expliquée, et la seconde est donnée en fin de corrigé.

## Exercice 1 — Covariances, rendement et risque de portefeuilles

**Notations.** 1 = HPS, 2 = Colorado, 3 = Attijariwafa Bank.

| Titre | Rendement espéré $E(R_i)$ | Écart-type $\sigma_i$ | Variance $\sigma_i^2$ |
|---|---:|---:|---:|
| HPS | 15 % | 0,30 | 0,0900 |
| Colorado | 16 % | 0,31 | 0,0961 |
| Attijariwafa Bank | 17 % | 0,32 | 0,1024 |

### 1. Covariance de chaque couple

La covariance se déduit du coefficient de corrélation : $\text{Cov}(i,j) = \rho_{i,j} \times \sigma_i \times \sigma_j$.

- $\text{Cov}(1,2) = 0{,}7 \times 0{,}30 \times 0{,}31 =$ **0,0651**
- $\text{Cov}(2,3) = 0{,}5 \times 0{,}31 \times 0{,}32 =$ **0,0496**
- $\text{Cov}(1,3) = 0 \times 0{,}30 \times 0{,}32 =$ **0** (HPS et Attijariwafa Bank sont non corrélés)

### 2. Rendement et risque de chaque portefeuille

**Formules.** Pour des poids $w_1, w_2, w_3$ :

$$E(R_p) = w_1 E(R_1) + w_2 E(R_2) + w_3 E(R_3)$$

$$\sigma_p^2 = w_1^2\sigma_1^2 + w_2^2\sigma_2^2 + w_3^2\sigma_3^2 + 2w_1w_2\,\text{Cov}(1,2) + 2w_2w_3\,\text{Cov}(2,3) + 2w_1w_3\,\text{Cov}(1,3)$$

Le dernier terme est nul ici, puisque $\text{Cov}(1,3) = 0$.

**Portefeuille A (20 % ; 20 % ; 60 %)**

- Rendement : $0{,}2 \times 15 + 0{,}2 \times 16 + 0{,}6 \times 17 = 3 + 3{,}2 + 10{,}2 =$ **16,40 %**
- Variance : $0{,}04 \times 0{,}09 + 0{,}04 \times 0{,}0961 + 0{,}36 \times 0{,}1024 + 2 \times 0{,}2 \times 0{,}2 \times 0{,}0651 + 2 \times 0{,}2 \times 0{,}6 \times 0{,}0496$
  $= 0{,}003600 + 0{,}003844 + 0{,}036864 + 0{,}005208 + 0{,}011904 = 0{,}061420$
- Risque : $\sigma_A = \sqrt{0{,}061420} \approx$ **0,2478, soit 24,78 %**

**Portefeuille B (30 % ; 30 % ; 40 %)**

- Rendement : $0{,}3 \times 15 + 0{,}3 \times 16 + 0{,}4 \times 17 = 4{,}5 + 4{,}8 + 6{,}8 =$ **16,10 %**
- Variance : $0{,}09 \times 0{,}09 + 0{,}09 \times 0{,}0961 + 0{,}16 \times 0{,}1024 + 2 \times 0{,}3 \times 0{,}3 \times 0{,}0651 + 2 \times 0{,}3 \times 0{,}4 \times 0{,}0496$
  $= 0{,}008100 + 0{,}008649 + 0{,}016384 + 0{,}011718 + 0{,}011904 = 0{,}056755$
- Risque : $\sigma_B = \sqrt{0{,}056755} \approx$ **0,2382, soit 23,82 %**

**Portefeuille C (10 % ; 40 % ; 50 %)**

- Rendement : $0{,}1 \times 15 + 0{,}4 \times 16 + 0{,}5 \times 17 = 1{,}5 + 6{,}4 + 8{,}5 =$ **16,40 %**
- Variance : $0{,}01 \times 0{,}09 + 0{,}16 \times 0{,}0961 + 0{,}25 \times 0{,}1024 + 2 \times 0{,}1 \times 0{,}4 \times 0{,}0651 + 2 \times 0{,}4 \times 0{,}5 \times 0{,}0496$
  $= 0{,}000900 + 0{,}015376 + 0{,}025600 + 0{,}005208 + 0{,}019840 = 0{,}066924$
- Risque : $\sigma_C = \sqrt{0{,}066924} \approx$ **0,2587, soit 25,87 %**

**Synthèse**

| Portefeuille | Rendement | Variance | Risque (écart-type) |
|---|---:|---:|---:|
| A | 16,40 % | 0,061420 | 24,78 % |
| B | 16,10 % | 0,056755 | 23,82 % |
| C | 16,40 % | 0,066924 | 25,87 % |

**Commentaire (à ajouter sur la copie).** A et C ont le même rendement, mais A est moins risqué : **C est dominé par A** au sens de Markowitz, et un investisseur rationnel ne le retient pas. Entre A et B, aucun ne domine l'autre (B est moins risqué mais rapporte moins) : le choix dépend de l'aversion au risque. Le portefeuille le moins risqué, B, est celui qui pèse le plus sur HPS, dont la corrélation nulle avec Attijariwafa Bank réduit la variance.

**Pièges à éviter.** Ne pas oublier le facteur 2 devant chaque covariance, ni d'élever les poids au carré dans les termes de variance. Le risque demandé est l'écart-type, pas la variance.

## Exercice 2 — Moucharaka dégressive (Moucharaka Moutanaqissa)

**Nature de l'opération.** Lily et Umnia Bank (banque participative) s'associent dans un projet immobilier : c'est une **Moucharaka Moutanaqissa** (participation dégressive), l'un des produits participatifs prévus par la loi 103-12 relative aux établissements de crédit. Les loyers (le bénéfice) se partagent selon les parts détenues, et le client rachète progressivement les parts de la banque, dont la participation diminue jusqu'à disparaître.

**Répartition du capital au départ.**

| Associé | Apport | Part du capital |
|---|---:|---:|
| Lily | 2 000 000 (terrain) + 5 000 000 (numéraire) = 7 000 000 | 70 % |
| Umnia Bank | 3 000 000 (numéraire) | 30 % |
| **Total** | **10 000 000** | **100 %** |

**Lecture retenue.** Le loyer de chaque année se partage selon les parts détenues **pendant** cette année ; à la fin de chaque exercice, Lily rachète des parts de la banque à leur valeur nominale. Les 2 000 000 dhs versés à la fin de l'exercice 1 ramènent la part de la banque à 1 000 000 dhs ; le rachat de l'exercice 2 ne peut donc porter que sur ce **solde de 1 000 000 dhs** (deux rachats de 2 000 000 dépasseraient l'apport de la banque).

| Exercice | Capital Umnia / Lily | Loyer : part Umnia | Loyer : part Lily | Rachat par Lily en fin d'exercice | Capital Umnia restant |
|---|---|---:|---:|---:|---:|
| 1 | 3 000 000 / 7 000 000 (30 % / 70 %) | 1 500 000 | 3 500 000 | 2 000 000 | 1 000 000 |
| 2 | 1 000 000 / 9 000 000 (10 % / 90 %) | 500 000 | 4 500 000 | 1 000 000 | 0 |

**Tableau demandé**

| Exercice | Part Umnia (dhs) | Justification | Part Lily (dhs) | Justification |
|---|---:|---|---:|---|
| 1 | 1 500 000 | 30 % × 5 000 000 (3 000 000 / 10 000 000) | 3 500 000 | 70 % × 5 000 000 (7 000 000 / 10 000 000) |
| 2 | 500 000 | 10 % × 5 000 000 (après le rachat de 2 000 000, la banque détient 1 000 000 / 10 000 000) | 4 500 000 | 90 % × 5 000 000 (Lily détient 9 000 000 / 10 000 000) |
| **Totaux reçus** | **2 000 000** | 1 500 000 + 500 000 | **8 000 000** | 3 500 000 + 4 500 000 |

**Vérification.** 2 000 000 + 8 000 000 = 10 000 000 = 2 × 5 000 000 de loyers. À la fin de l'exercice 2, Lily est propriétaire de 100 % de l'immeuble. Umnia Bank a récupéré ses 3 000 000 d'apport (2 000 000 + 1 000 000 de rachats) et perçu 2 000 000 de loyers, soit $2\,000\,000 / 3\,000\,000 \approx 66{,}7\,\%$ sur deux ans. Lily a reçu 8 000 000 de loyers, dont elle a reversé 3 000 000 pour racheter les parts : **flux net de 5 000 000** sur la période.

**Seconde lecture possible.** Si les 2 000 000 annuels désignent **tout** ce que la banque reçoit chaque année (sa part de loyer + le rachat de capital), le calcul devient :
- exercice 1 : part Umnia = 30 % × 5 000 000 = 1 500 000 ; rachat = 2 000 000 − 1 500 000 = 500 000, la banque garde 2 500 000 (25 %) ; part Lily = 3 500 000 ;
- exercice 2 : part Umnia = 25 % × 5 000 000 = 1 250 000 ; rachat = 750 000, la banque garde 1 750 000 (17,5 %) ; part Lily = 3 750 000 ;
- totaux : Umnia 2 750 000, Lily 7 250 000. La banque n'est alors pas sortie du capital au bout de deux ans, ce qui cadre mal avec une moucharaka dégressive : d'où la lecture retenue plus haut.

**Pièges à éviter.** Le terrain est un apport en nature : il compte dans la part de Lily au même titre que le numéraire. La part de chaque associé se recalcule après chaque rachat ; garder 30 % / 70 % sur les deux années est l'erreur la plus fréquente.
