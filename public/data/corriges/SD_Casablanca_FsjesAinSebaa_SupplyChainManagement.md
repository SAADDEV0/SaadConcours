> Corrigé avec calculs détaillés.

**I. Impact du système d'information sur la performance de l'activité logistique (plan de réponse)**

- Le système d'information logistique (SIL) assure la traçabilité et la visibilité en temps réel des flux physiques (stocks, transport, commandes), condition indispensable à une gestion en flux tendus/juste-à-temps.
- Il améliore la coordination entre les acteurs de la chaîne logistique (EDI, ERP, WMS, TMS) : réduction des ruptures de stock, optimisation des tournées de transport, meilleure prévision de la demande.
- Il réduit les coûts logistiques (moins de sur-stockage, optimisation des taux de remplissage des transports) et améliore le niveau de service (délais, fiabilité, taux de service).
- Il permet le pilotage par indicateurs (tableaux de bord logistiques : taux de service, coût logistique/CA, délai moyen de livraison) et la prise de décision rapide.
- Limites : coût d'implémentation, dépendance technologique, nécessité d'interopérabilité entre systèmes de partenaires différents (fournisseurs, transporteurs, clients).
- **Conclusion** : le SI est aujourd'hui un facteur clé de la performance logistique car il transforme la logistique d'une fonction d'exécution en une fonction de pilotage et d'anticipation.

**II. Séries chronologiques**

On numérote les 12 semaines t = 1…12 (valeurs : 85,55,45,150,86,56,47,155,86,57,48,165).

**1. Moyenne mobile d'ordre 3 et équation de la tendance**

$MM_3(t) = \dfrac{y(t-1)+y(t)+y(t+1)}{3}$, calculée pour t=2 à 11 :

| t | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 |
|---|---|---|---|---|---|---|---|---|---|---|
| MM3 | 61,7 | 83,3 | 93,7 | 97,3 | 63,0 | 86,0 | 96,0 | 99,3 | 63,7 | 90,0 |

Par régression linéaire de ces 10 points (méthode des moindres carrés, $\bar t=6,5$, $\bar y=83,4$) :
$$b=\dfrac{\sum(t-\bar t)(y-\bar y)}{\sum(t-\bar t)^2}\approx\dfrac{82,3}{82,5}\approx1,0 \qquad a=\bar y-b\bar t\approx83,4-6,5\approx76,9$$

**Equation de la tendance : $\hat y(t) = t + 76,9$**

**2. Qualité de l'ajustement**

Le coefficient de corrélation obtenu est $r\approx0,20$ (soit $r^2\approx0,04$) : la tendance linéaire n'explique qu'environ 4% de la variance totale de la série. **L'ajustement linéaire est donc de mauvaise qualité** : la série est en réalité dominée par une forte composante saisonnière (période 4, avec un pic marqué en semaine 4 de chaque mois) plutôt que par une tendance nette, ce qui est cohérent avec l'usage d'une moyenne mobile d'ordre 3 (mal adaptée à une saisonnalité de période 4).

**3. Coefficients saisonniers (modèle multiplicatif)**

Pour chaque semaine, on calcule le rapport $y(t)/\hat y(t)$, puis on moyenne par position dans le mois (semaine 1, 2, 3, 4) et on normalise pour que la somme des 4 coefficients soit égale à 4 :

| Semaine | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| Coefficient saisonnier | ≈ 1,02 | ≈ 0,66 | ≈ 0,54 | ≈ 1,79 |

(la semaine 4 de chaque mois supporte un surcoût de transport structurel, probablement lié à un pic d'expéditions de fin de mois).

**4. Désaisonnalisation (CVS = y(t) / coefficient saisonnier de la semaine)**

| t | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| CVS | 83,3 | 83,3 | 83,3 | 83,8 | 84,3 | 84,8 | 87,0 | 86,6 | 84,3 | 86,4 | 88,9 | 92,2 |

La série désaisonnalisée est nettement plus régulière et progresse légèrement, ce qui confirme une tendance haussière modeste masquée par la forte saisonnalité.

**5. Prévision des coûts pour le mois de juin (semaines t = 21 à 24)**

Valeurs de tendance : $\hat y(21)=97,9$; $\hat y(22)=98,9$; $\hat y(23)=99,9$; $\hat y(24)=100,9$

En appliquant les coefficients saisonniers (S1 à S4) :
- Semaine 1 : 97,9 × 1,02 ≈ 99,9
- Semaine 2 : 98,9 × 0,66 ≈ 65,3
- Semaine 3 : 99,9 × 0,54 ≈ 53,9
- Semaine 4 : 100,9 × 1,79 ≈ 180,6

**Coût total prévisionnel pour juin ≈ 399,7 milliers de DH, soit environ 400 000 DH.**

**III. Comptabilité analytique — Entreprise FOX**

**1. Compte de résultat différentiel**

- Chiffre d'affaires net = Ventes − RRR accordés = 1 320 700 − 66 035 = **1 254 665 DH**
- Achats nets = Achats − RRR obtenus = 645 000 − 32 250 = 612 750 DH
- Coût d'achat des marchandises vendues (CAMV) = Stock initial + Achats nets − Stock final = 31 300 + 612 750 − 18 000 = **626 050 DH**
- Charges variables totales = CAMV + Charges variables d'approvisionnement + Charges variables de distribution = 626 050 + 40 300 + 67 900 = **734 250 DH**
- **Marge sur coût variable (MCV)** = CA net − Charges variables = 1 254 665 − 734 250 = **520 415 DH**
- Taux de MCV = 520 415 / 1 254 665 ≈ **41,48%**
- **Résultat** = MCV − Charges fixes = 520 415 − 240 000 = **280 415 DH**

| Eléments | Montant |
|---|---|
| Chiffre d'affaires net | 1 254 665 |
| − Charges variables (CAMV + variables approv. + variables distrib.) | 734 250 |
| = Marge sur coût variable | 520 415 |
| − Charges fixes | 240 000 |
| = Résultat | 280 415 |

**2. Seuil de rentabilité (SR) et date d'obtention**

$$SR = \dfrac{\text{Charges fixes}}{\text{Taux de MCV}} = \dfrac{240\,000}{0,4148} \approx \textbf{578 600 DH}$$

Répartition des ventes annuelles (CA net = 1 254 665 DH) :
- 1er trimestre (janv-mars) : 1/5 des ventes annuelles = 250 933 DH
- Reste (avril à décembre, 9 mois) : 1 254 665 − 250 933 = 1 003 732 DH, réparti régulièrement → 111 526 DH/mois

Cumul des ventes :
- Fin mars : 250 933 (< SR)
- Fin avril : 362 459
- Fin mai : 473 985
- Fin juin : 585 511 (> SR = 578 600) → **le seuil est franchi au cours du mois de juin**

Calcul du jour exact : reste à couvrir fin mai = 578 600 − 473 985 = 104 615 DH ; 104 615 / 111 526 ≈ 0,94 mois ≈ 28 jours.

**Le seuil de rentabilité est atteint autour du 28 juin.**