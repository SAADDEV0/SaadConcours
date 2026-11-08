> Corrigé indicatif rédigé par SaadConcours, pas une correction officielle de la FSJES Fès. Il est rédigé à partir du programme standard du module (relations économiques internationales, statistique inférentielle) et d'un calcul vérifié — aucune grille de correction officielle disponible pour ce sujet.

### I. Portée et limites de la politique de flexibilité du taux de change au Maroc

**Introduction**
- Contexte : le Maroc a longtemps pratiqué un régime de change fixe (arrimage à un panier de devises, dominé par l'euro et le dollar), avant d'engager depuis 2018 une réforme progressive vers davantage de flexibilité (élargissement des bandes de fluctuation en janvier 2018 puis mars 2020).
- Problématique : dans quelle mesure l'assouplissement du régime de change constitue-t-il un outil pertinent d'ajustement macroéconomique pour le Maroc, et quelles en sont les limites ?

**I. La portée de la flexibilité du taux de change**
1. Un outil d'ajustement face aux chocs externes
   - Amortisseur automatique des chocs asymétriques (termes de l'échange, demande étrangère) sans recourir à des ajustements internes douloureux (prix, salaires).
   - Correction plus naturelle des déséquilibres du compte courant (dépréciation compétitive en cas de déficit).
2. Un gain d'autonomie de la politique monétaire
   - Sortie du « triangle d'incompatibilité » de Mundell : change fixe + mobilité des capitaux imposent une perte d'autonomie monétaire ; la flexibilité permet à Bank Al-Maghrib de calibrer sa politique de taux selon les besoins internes (inflation, croissance).
3. Une meilleure intégration financière internationale
   - Attractivité accrue pour les investisseurs à mesure que le risque de change est mieux valorisé par le marché plutôt que subventionné implicitement par l'État.

**II. Les limites de cette flexibilisation**
1. Un risque de change accru pour les agents économiques
   - Entreprises exportatrices/importatrices et emprunteurs en devises exposés à une volatilité nouvelle, nécessitant des instruments de couverture (marché à terme, options) encore peu développés au Maroc.
2. Des conditions préalables macroéconomiques strictes (enseignements du FMI)
   - Nécessité de réserves de change suffisantes, d'un système bancaire solide, d'une inflation maîtrisée et d'un marché des changes suffisamment profond et liquide avant d'aller plus loin dans la flexibilisation.
3. Un rythme volontairement progressif et prudent
   - Le Maroc a opté pour une transition graduelle (élargissement successif des bandes de fluctuation ±2,5% puis ±5%) plutôt qu'un flottement pur, afin d'éviter une déstabilisation brutale du dirham et de préserver la confiance des agents.

**Conclusion**
- La flexibilisation du taux de change offre au Maroc un outil supplémentaire d'ajustement macroéconomique et une autonomie monétaire accrue, mais son efficacité reste conditionnée par la solidité des fondamentaux macroéconomiques et par le développement des instruments de couverture de change.
- Ouverture : la trajectoire marocaine, prudente et séquencée, s'inspire des expériences internationales (Chili, Pologne, Singapour) où les transitions trop rapides ont parfois généré une instabilité financière.

### II. Exercice de statistique

**1) Estimation ponctuelle**
$\hat p = 75\% = 0{,}75$ (fréquence observée dans l'échantillon, meilleur estimateur ponctuel de la proportion dans la population).

**2) Intervalle de confiance à 95%**
$IC_{95\%} = \hat p \pm t\sqrt{\dfrac{\hat p(1-\hat p)}{n}} = 0{,}75 \pm 1{,}96\sqrt{\dfrac{0{,}75\times0{,}25}{400}}$

$= 0{,}75 \pm 1{,}96\sqrt{0{,}00046875} = 0{,}75 \pm 1{,}96\times0{,}02165 \approx 0{,}75\pm0{,}0424$

$IC_{95\%} \approx [\mathbf{70{,}76\%\ ;\ 79{,}24\%}]$ — soit une **précision (marge d'erreur) d'environ ±4,24 points**.

**3) Probabilité d'un échantillon de taille 400 issu d'une population de Bernoulli**
La question invite à justifier l'approximation normale utilisée en 2) : chaque ménage suit une loi de Bernoulli de paramètre $p$ (possède ou non l'appareil), et la proportion observée sur l'échantillon, $\hat p = \bar X_n$, est la moyenne de 400 variables de Bernoulli indépendantes.

Par le théorème central limite, pour $n$ grand, $\hat p$ suit approximativement une loi normale $N\big(p\, ;\, \tfrac{p(1-p)}{n}\big)$. Les conditions usuelles de validité de cette approximation sont vérifiées ici : $n\hat p = 400\times0{,}75 = 300 > 5$ et $n(1-\hat p) = 400\times0{,}25 = 100 > 5$, ce qui légitime le recours à la loi normale (et donc au coefficient $t=1{,}96$) plutôt qu'au calcul exact de la loi binomiale $\mathcal B(400\,;\,0{,}75)$ pour construire l'intervalle de confiance de la question 2).
