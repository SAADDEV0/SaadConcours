> Corrigé rédigé à partir du programme standard du module (mathématiques financières, statistique inférentielle et économétrie) et d'un calcul vérifié — aucune grille de correction officielle disponible pour ce sujet.

### 1er Exercice

**a)** Trois types de risques d'entreprise couvrables par assurance : les **risques de dommages aux biens** (incendie, dégât des eaux, bris de matériel), les **risques de responsabilité civile** (dommages causés à des tiers), et les **risques liés aux personnes** (accidents du travail, santé, prévoyance).

**b)** $FV = C(1+i)^n \Rightarrow 17958{,}5633 = 10\,000\times1{,}05^n \Rightarrow 1{,}05^n = 1{,}79585633$.
$n = \dfrac{\ln(1{,}79585633)}{\ln(1{,}05)} \approx \dfrac{0{,}5857}{0{,}04879} \approx \mathbf{12 \text{ ans}}$.

### 2ème Exercice

**1)** Estimation ponctuelle de la moyenne : $\bar X = \dfrac{\sum X_i}{n} = \dfrac{420}{10} = \mathbf{42\text{ cm}}$. En l'absence d'information supplémentaire sur la population, cette moyenne d'échantillon est le meilleur estimateur ponctuel disponible de la taille moyenne des bébés à la naissance dans la population.

**2)** L'estimateur $\bar X$ suit une loi **normale** $N(\mu, \sigma^2/n)$ (ou, puisque $\sigma$ est inconnu et estimé, $\dfrac{\bar X - \mu}{S/\sqrt n}$ suit une loi de **Student à $n-1=9$ degrés de liberté**).
Variance estimée (corrigée) : $S^2 = \dfrac{\sum X_i^2 - n\bar X^2}{n-1} = \dfrac{18600 - 10\times42^2}{9} = \dfrac{18600-17640}{9} = \dfrac{960}{9} \approx 106{,}67$.
Paramètres de l'estimateur : espérance $=\mu$ (estimée par 42), variance $= S^2/n \approx 10{,}67$, soit un écart-type $\approx 3{,}27$.

**3)** $IC_{95\%} = \bar X \pm t_{(9;0,975)}\times\dfrac{S}{\sqrt n} = 42 \pm 2{,}262\times\dfrac{\sqrt{106{,}67}}{\sqrt{10}} = 42 \pm 2{,}262\times3{,}267 \approx 42\pm7{,}39$.
$IC_{95\%} \approx [\mathbf{34{,}61\ ;\ 49{,}39}]$ cm.

### 3ème Exercice

**1)** Omettre une variable explicative pertinente (RISK) corrélée avec les variables retenues est un **biais de variable omise**. Son effet est de **biaiser** l'estimateur du coefficient restant (RN) : ce dernier capte alors, en plus de son propre effet, une partie de l'effet de la variable omise (via leur corrélation), rendant l'estimation non fiable même asymptotiquement.

**2.1)** Le signe négatif de RN (-2,5623) indique qu'une entreprise plus rentable **s'endette moins** — cohérent avec la théorie du financement hiérarchique (« pecking order ») : les entreprises rentables préfèrent l'autofinancement à l'endettement. Le signe négatif de RISK (-0,159) indique qu'une entreprise plus risquée **s'endette moins** — cohérent avec une aversion au risque des prêteurs, qui rationnent le crédit aux entreprises les plus risquées (ou une prudence des dirigeants face au risque de défaut).

**2.2)** Toutes choses égales par ailleurs, une augmentation d'une unité de la rentabilité économique (RN) est associée à une baisse de 2,5623 point de l'endettement (END) ; une augmentation d'une unité du risque d'activité (RISK) est associée à une baisse de 0,159 point de l'endettement.

**3)** Les deux coefficients sont statistiquement significatifs : $|t_{RN}|=6{,}76$ et $|t_{RISK}|=3{,}25$, tous deux très supérieurs au seuil théorique $t_{(0,05;27)}=1{,}703$ (et P-critiques < 5%). Le modèle est également globalement significatif ($R^2=0{,}66$, test de Fisher significatif à 0,000). **Conclusion** : on peut accepter, au seuil de 5%, l'influence significative et négative à la fois de la rentabilité et du risque d'activité sur le niveau d'endettement des entreprises de l'échantillon.
