> Corrigé rédigé à partir du programme standard du module (statistique inférentielle, probabilités et économétrie de base) et d'un raisonnement/calcul vérifié — aucune source officielle disponible pour ce sujet.

### Sujet d'ordre général

Il s'agit d'une question de culture économique générale sans réponse chiffrée unique. Une bonne copie doit structurer l'argumentation, par exemple :

1. **Un choc externe qui se surajoute à une économie déjà fragilisée** : la guerre en Ukraine intervient alors que les entreprises marocaines sortaient à peine des effets de la pandémie (trésorerie fragilisée, dettes accumulées, demande encore convalescente) — d'où le « mauvais timing ».
2. **Canaux de transmission du choc** : hausse des prix de l'énergie et des matières premières importées (blé, engrais, hydrocarbures), tensions sur les chaînes d'approvisionnement, inflation importée qui comprime les marges et le pouvoir d'achat.
3. **Capacités d'adaptation de l'entreprise marocaine** : diversification des fournisseurs, répercussion partielle des coûts sur les prix, recours aux dispositifs de soutien public (Fonds Mohammed VI, mécanismes de garantie), accélération de la digitalisation et de la sobriété énergétique.
4. **Conclusion nuancée** : la capacité de résilience dépend de la taille de l'entreprise (les PME sont plus vulnérables que les grands groupes), du secteur (agro-industrie et textile plus exposés) et de l'accompagnement de l'État — la réponse attendue est donc argumentée, pas binaire.

### Sujet de spécialité — Actuariat et Gestion des Risques

#### Questions

**1. Domaines d'activité de l'actuariat**

L'actuariat couvre principalement : l'assurance-vie et l'assurance non-vie (IARD), la réassurance, la gestion des fonds de pension et de la retraite (répartition et capitalisation), la finance et la gestion des risques financiers (ALM, solvabilité), ainsi que la prévoyance sociale et la santé.

**2. Intervalle de confiance de la moyenne à 99%**

Pour un échantillon de taille $n$, de moyenne $\bar x$ et d'écart-type $\sigma$ (ou $s$ estimé), l'intervalle de confiance de la moyenne de la population au niveau de confiance 99% s'écrit :

$$IC_{99\%} = \left[\bar x - z_{0,005} \frac{\sigma}{\sqrt n} \; ; \; \bar x + z_{0,005} \frac{\sigma}{\sqrt n}\right]$$

avec $z_{0,005} = 2,576$ (valeur de la loi normale centrée réduite laissant 0,5% dans chaque queue). Cela signifie que si l'on répétait l'échantillonnage un grand nombre de fois, 99% des intervalles ainsi construits contiendraient la vraie moyenne de la population.

**3. Formule de Bayes**

$$P(A|B) = \frac{P(B|A) \times P(A)}{P(B)}$$

Elle permet de « retourner » une probabilité conditionnelle : connaissant $P(B|A)$ (vraisemblance), la probabilité a priori $P(A)$ et la probabilité marginale $P(B)$, on obtient la probabilité a posteriori $P(A|B)$. En actuariat elle est utilisée par exemple pour réviser la probabilité qu'un assuré appartienne à une classe de risque donnée après observation d'un sinistre.

#### Exercice

**1. Conséquence de l'omission de τ**

Le taux d'imposition (τ) est très probablement corrélé avec le revenu (R) (la fiscalité dépend du niveau de revenu). En l'omettant, on est dans une situation de **biais de variable omise** : l'estimateur $\hat\beta_2$ du coefficient de R capte à la fois l'effet propre de R et une partie de l'effet de τ (via leur corrélation). L'estimateur devient donc **biaisé et non convergent**, et les tests de significativité basés dessus perdent leur validité.

**2. Signe positif des coefficients**

- Constante (59606,42) positive : niveau de consommation incompressible même si le revenu observé dans l'échantillon tendait vers 0 (consommation autonome, produits de première nécessité).
- Coefficient de R (2,88 par unité de revenu) positif : conforme à la théorie keynésienne de la fonction de consommation — la consommation des ménages augmente avec le revenu.

**3. Signification économique**

- 59 606,42 : consommation autonome (incompressible) des ménages, indépendante du revenu.
- 2,88 : propension marginale à consommer — chaque dirham supplémentaire de revenu se traduit par 2,88 unités monétaires (dans l'unité de CONS utilisée) de consommation supplémentaire en moyenne, toutes choses égales par ailleurs.

**4. Test de significativité du coefficient de R**

$$t_{calc} = \frac{\hat\beta_2}{\text{écart-type}} = \frac{2,882707}{0,060555} = 47,60$$

On compare $|t_{calc}| = 47,60$ au $t$ théorique $t_{0,025;35} = 1,96$ :

$$47,60 > 1,96 \Rightarrow \text{on rejette } H_0 : \beta_2 = 0$$

Le revenu a donc une influence **statistiquement très significative** sur la consommation au seuil de 5% (ce que confirme aussi la probabilité critique de 0,0000).

**5. Pouvoir explicatif**

$R^2 = 0,97$ signifie que le revenu (seul régresseur du modèle mal spécifié) explique 97% de la variance totale de la consommation des ménages dans l'échantillon. La probabilité critique du test de Fisher étant nulle (< 0,05), on rejette l'hypothèse de nullité globale du modèle : le pouvoir explicatif du revenu est statistiquement très significatif. Il faut cependant rappeler que ce très bon ajustement doit être relativisé compte tenu du biais de variable omise identifié en question 1.
