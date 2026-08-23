## Questions diverses

1. **MASI vs MADEX** : le MASI (Moroccan All Shares Index) couvre toutes les actions cotées à la Bourse de Casablanca ; le MADEX ne retient que les valeurs les plus liquides en flottant (~20 titres). Le MASI est aujourd'hui l'indice de référence national.
2. **Interprétation du BFR** : le BFR mesure le besoin né du décalage entre les emplois et ressources d'exploitation (stocks + créances clients − dettes fournisseurs). Un BFR positif signifie que le cycle d'exploitation absorbe des ressources (financement nécessaire) ; sa variation traduit la croissance ou la dérive de l'activité ; il s'apprécie relativement au secteur et aux jours de CA.
3. **La banque, une entreprise comme les autres ?** Non : c'est une entreprise particulière — intermédiaire financier réglementé dont le « produit » est la monnaie et le risque de crédit. Son bilan est dominé par les opérations financières (pas de stocks ni de cycle physique), elle est soumise à une surveillance prudentielle spécifique (Bank Al-Maghrib, ratios de solvabilité), et ses défaillances ont des effets systémiques sur toute l'économie.

## Exercice 1 — Taux dégressif

VNC avant inventaire 31/12/N+2 = 19 200 → cumul amorti arrêté au 31/12/N+1 = 48 000 − 19 200 = **28 800** *(lecture cohérente : la balance « avant inventaire » ne contient pas encore la dotation N+2)*.

Essai avec durée 5 ans → taux linéaire 20 % × coefficient 2 = **40 %**, annuités calculées par mois entiers à compter du mois d'acquisition :
- N (mars→déc., 10 mois) : 48 000 × 40 % × 10/12 = 16 000
- N+1 : 32 000 × 40 % = 12 800
- Cumul = 16 000 + 12 800 = **28 800 ✓**

**Taux dégressif utilisé = 40 %.**

## Exercice 2 — Durée d'accumulation

120 000 × (1,08)ⁿ ≥ 150 000 → (1,08)ⁿ ≥ 1,25 → n = ln(1,25)/ln(1,08) ≈ **2,9 ans**
Il faut donc attendre **3 ans** (120 000 × 1,08³ ≈ 151 165 > 150 000).

## Exercice 3 — Choix sous risque

| Situation | Averse au risque | Preneur de risque |
|---|---|---|
| 1 : σA > σB ; EA = EB | **B** (même rendement, moins risqué) | **A** (plus risqué pour le même rendement) |
| 2 : σA = σB ; EA > EB | **A** | **A** (risque égal → rendement supérieur) |
| 3 : σA < σB ; EA < EB | **A** (moins risqué ; sauf si la prime de risque compense) | **B** (recherche du risque, accepte un rendement moindre) |

## Exercice 4 — IAS/IFRS (machine)

**1. Valeur de comptabilisation initiale** (coût d'entrée IAS 16) :
- Prix net de remise commerciale : 435 500 − 15 000 = 420 500
- Frais directement attribuables : acquisition 24 000 + livraison 1 750 = 25 750
- TVA non récupérable (20 %) sur le tout : 446 250 × 20 % = 89 250
- Exclus : formation (4 000) et réorganisation (7 500) — charges de la période.

**Coût d'entrée = 535 500 DH**

**2. Amortissement et dépréciation :**
Valeur résiduelle = 12 % × prix d'acquisition TTC machine (420 500×1,2 = 504 600) − frais de sortie
= 60 552 − 1 200 = **59 352 DH**
Valeur amortissable = 535 500 − 59 352 = **476 148 DH** ; durée d'utilité 5 ans → dotation annuelle = **95 229,60**

- Fin N : VNC = 535 500 − 95 229,60 = 440 270,40 > valeur recouvrable (325 500)
→ **dépréciation = 114 770,40 DH**
- Fin N+1 : VNC théorique = 345 040,80 ; dépréciation nécessaire = 535 500 − 190 459,20 − 325 500 = 19 540,80
→ **reprise de dépréciation = 114 770,40 − 19 540,80 = 95 229,60** (plafonnée à ce qu'aurait été la dotation sans dépréciation ✓).

## Exercice 5 — Soldes de gestion retraités

Retraitements : crédit-bail (redevance 4 400 remplacée par dotation 15 000/5 = 3 000 + intérêts financiers pour le complément, soit 1 400) ; intérimaire (610 reclassé en charges de personnel) ; participation (90 assimilée charges de personnel, déduite de l'EBE).

**1. Soldes affectés** : VA, EBE, RE (le résultat courant et le résultat net restent inchangés, la redevance étant globalement remplacée à due concurrence).

**2. Soldes retraités :**

| Solde | PCG | Retraitement | Retraité |
|---|---|---|---|
| Marge commerciale | 12 840 | — | 12 840 |
| Production | 28 500 | — | 28 500 |
| VA (+ redevance CB sort des consommations externes) | 18 710 | +4 400 | **23 110** |
| EBE (+610 intérimaire passe en personnel, −90 participation) | 9 220 | +4 400 −610 −90 | **12 920** |
| Résultat d'exploitation (+4 400 redevance, −3 000 dotation CB) | 4 980 | +1 400 | **6 380** |
| Résultat courant / net | 3 550 / 2 410 | compensés | 3 550 / 2 410 |

## Exercice 6 — Placement financier vs immobilier

Flux immobiliers : loyer Lₜ = 9 000 × 1,02^(t−1) perçu **en début d'année t** (t = 1..10) ; revente 210 000 fin année 10. Investissement 200 000.

### 1. VAN à 6 %

PV(loyers) = Σ 9 000×1,02^(t−1)/1,06^(t−1) = 9 000 × Σ (0,962264)^(t-1), t=1..10
= 9 000 × (1 − 0,96226⁹⁰... ) — calcul : facteur q = 1,02/1,06 = 0,962264 ; somme des 10 termes = (1−q¹⁰)/(1−q) = (1 − 0,68198)/(0,037736) ≈ 8,4308
PV(loyers) ≈ 75 877 ; PV(revente) = 210 000/1,06¹⁰ = 210 000 × 0,55839 = 117 263
VAN = 75 877 + 117 263 − 200 000 ≈ **− 6 860 DH**

L'immobilier détruit de la valeur à 6 % → **préférer le placement financier à 6 %**.

### TRI

Le TRI vérifie : PV(loyers) + PV(revente) = 200 000. Par itérations, TRI ≈ **5,5 %** (< 6 %) → confirme le classement.

### 2. Prix d'équivalence

Prix P tel que la VAN immobilière soit nulle à 6 % :
P = 75 877 + 117 263 ≈ **193 140 DH**

À ce prix (≈ 193 100 DH), l'immeuble offre exactement un taux actuariel de 6 %, identique au placement financier.
