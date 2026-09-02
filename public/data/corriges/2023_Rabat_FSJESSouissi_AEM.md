> Corrigé rédigé à partir du programme standard des modules concernés (économie publique/microéconomie, statistique descriptive bivariée, économétrie de base, analyse mathématique) et d'un raisonnement/calcul vérifié — aucune grille de correction officielle n'est disponible pour ce sujet.

### Partie 1 : Analyse économique — Plan de réponse

**Introduction**
- Contexte : le modèle concurrentiel walrasien établit, sous certaines hypothèses (atomicité, homogénéité des produits, libre entrée/sortie, information parfaite, absence d'externalités), que le marché conduit à une allocation optimale des ressources au sens de Pareto (théorèmes de l'économie du bien-être).
- Problématique : dans la réalité, ces hypothèses sont rarement toutes vérifiées, ce qui donne lieu à des « défaillances de marché » (*market failures*) justifiant une intervention correctrice.
- Annonce du plan : on distinguera les principales sources de défaillance du marché (I) avant d'examiner comment la théorie économique conceptualise et propose d'y remédier (II).

**I. Les principales sources de défaillance du marché**

1. *Les externalités*
   - Effets d'une activité économique sur des tiers, non pris en compte par le prix de marché : externalités négatives (pollution industrielle, encombrement routier) ou positives (recherche-développement, éducation, vaccination).
   - Conséquence : le prix de marché ne reflète pas le coût ou le bénéfice social réel, ce qui conduit à une production sur-optimale (externalité négative) ou sous-optimale (externalité positive) par rapport à l'optimum collectif.

2. *Les biens publics*
   - Biens non-rivaux et non-exclusifs (éclairage public, défense nationale, phares) : le marché sous-produit ces biens en raison du problème du passager clandestin (*free-rider*), chaque agent ayant intérêt à ne pas révéler sa disposition à payer.

3. *L'information imparfaite et asymétrique*
   - Asymétries d'information entre vendeurs et acheteurs (exemple de l'« marché des voitures d'occasion » d'Akerlof, 1970) pouvant conduire à une sélection adverse (les mauvais produits chassent les bons du marché) ou à un aléa moral (assurance, relation employeur-employé).

4. *Le pouvoir de marché (concurrence imparfaite)*
   - Monopoles, oligopoles, ententes : la capacité de certains agents à influencer le prix conduit à une production inférieure à l'optimum concurrentiel et à un prix supérieur au coût marginal, générant une perte sèche de bien-être (*deadweight loss*).

5. *Les marchés incomplets*
   - Absence de marchés pour certains biens ou risques (assurance contre certains risques non assurables, marchés à terme incomplets), empêchant une allocation intertemporelle optimale des ressources.

**II. Les réponses apportées par la théorie économique**

1. *La correction des externalités*
   - Approche pigouvienne : taxes/subventions correctrices (taxe carbone, écotaxe) pour internaliser le coût ou le bénéfice externe dans le calcul privé des agents.
   - Théorème de Coase : en l'absence de coûts de transaction et avec des droits de propriété bien définis, les agents peuvent négocier eux-mêmes une solution efficace sans intervention publique.

2. *La fourniture publique de biens collectifs*
   - Financement par l'impôt et production publique (ou déléguée) des biens publics purs, faute de pouvoir en tarifer efficacement l'usage sur un marché.

3. *La régulation de l'information*
   - Obligations de transparence, labellisation, certification, garanties légales pour réduire l'asymétrie d'information (exemple : garantie automobile, notation financière, normes sanitaires).

4. *La régulation de la concurrence*
   - Droit de la concurrence, autorités de régulation sectorielles (télécoms, énergie), politiques anti-trust visant à limiter les abus de position dominante et à préserver une concurrence effective.

**Conclusion**
- Les défaillances de marché ne remettent pas en cause l'efficacité générale du mécanisme de marché, mais en délimitent le champ de validité.
- Elles justifient une intervention publique ciblée (réglementation, fiscalité corrective, production publique) dont l'ampleur et les modalités restent un objet de débat entre écoles de pensée économique (libérale vs. interventionniste), l'enjeu étant d'éviter que le remède (défaillances de l'État, coûts de la réglementation) ne soit pire que le mal.

### Partie 2 : Méthodes quantitatives

#### Exercice 1

**Q1. Covariance**

$$Cov(x,y) = \frac{1}{n}\sum_{i=1}^{n} x_i y_i - \bar x \bar y = \frac{2198}{18} - 6{,}388 \times 18{,}055$$

$$= 122{,}111 - 115{,}335 = 6{,}776 \approx \textbf{6,775}$$

Réponse : **a. 6,775** (petit écart de rond avec le calcul direct dû aux données déjà arrondies à 3 décimales dans l'énoncé).

**Q2. Coefficient de corrélation linéaire**

$$r = \frac{Cov(x,y)}{\sqrt{Var(x) \times Var(y)}} = \frac{6{,}776}{\sqrt{6{,}793 \times 13{,}941}} = \frac{6{,}776}{\sqrt{94{,}702}} = \frac{6{,}776}{9{,}731} \approx \textbf{0,696}$$

Réponse : **b. 0,696**.

**Q3. Pente de la droite de régression**

$$a = \frac{Cov(x,y)}{Var(x)} = \frac{6{,}776}{6{,}793} \approx \textbf{0,997}$$

Réponse : **c. 0,997**.

**Q4. Constante de la droite de régression**

$$b = \bar y - a \bar x = 18{,}055 - 0{,}997 \times 6{,}388 \approx 18{,}055 - 6{,}369 \approx \textbf{11,686}$$

Réponse : **c. 11,686**.

**Q5. Pouvoir explicatif du modèle (R²)**

$$R^2 = r^2 = 0{,}696^2 \approx 0{,}485 \; (\approx 48{,}5\%)$$

Cette valeur ne correspond ni à 75%, ni à 63% : le pouvoir explicatif réel du modèle (environ 48,5%) est **modéré**, sensiblement inférieur aux deux valeurs proposées.

Réponse : **c. Autres** (la valeur exacte étant environ 48,5%).

#### Exercice 2

**Q6.** L'absence d'autocorrélation des erreurs (hypothèse de Gauss-Markov) signifie que les erreurs successives ne sont pas corrélées entre elles : la connaissance de l'erreur à l'instant *t* n'apporte aucune information sur l'erreur à l'instant *t+1*. Les propositions (a) et (b) décrivent plutôt l'homoscédasticité (variance constante/faible de l'erreur), qui est une hypothèse distincte.

Réponse : **c**.

**Q7.** Le coefficient de détermination R² mesure la part de la variance de Y expliquée par le modèle de régression, et sert donc à juger son pouvoir explicatif. (b) est faux : R² est meilleur quand la variance résiduelle est **faible**, pas forte. (c) est une définition inversée : R² est le rapport entre la variance **expliquée** (ou 1 moins le rapport variance résiduelle/variance totale) et la variance totale, non l'inverse.

Réponse : **a**.

**Q8.** Par convention, le résidu d'estimation se définit comme :

$$\hat\varepsilon_i = Y_i - \hat Y_i$$

c'est-à-dire la valeur **observée** de Y moins la valeur **estimée** (ajustée) par le modèle. Les propositions (b) et (c) inversent ce signe.

Réponse : **a**.

#### Exercice 3

**Q9. Limite de $f(x) = \dfrac{-\sqrt2+\sqrt x}{x-2}$ en 2**

Forme indéterminée 0/0. On multiplie numérateur et dénominateur par la quantité conjuguée $(\sqrt x + \sqrt2)$ :

$$f(x) = \frac{(\sqrt x - \sqrt2)(\sqrt x + \sqrt2)}{(x-2)(\sqrt x + \sqrt2)} = \frac{x - 2}{(x-2)(\sqrt x + \sqrt2)} = \frac{1}{\sqrt x + \sqrt2} \quad (x \neq 2)$$

$$\lim_{x \to 2} f(x) = \frac{1}{\sqrt2 + \sqrt2} = \frac{1}{2\sqrt2} = \frac{\sqrt2}{4}$$

Ce résultat correspond en fait à la dérivée de la fonction $\sqrt{x}$ au point $x=2$ (taux d'accroissement $\frac{\sqrt x - \sqrt 2}{x - 2}$), soit $\left(\sqrt{x}\right)'(2) = \frac{1}{2\sqrt 2} = \frac{\sqrt2}{4} \approx 0{,}354$.

**Remarque :** cette valeur exacte ($\sqrt2/4 \approx 0{,}354$) ne figure pas exactement parmi les quatre choix proposés sur la copie (0 ; $-\sqrt2/2$ ; $\sqrt2/2$ ; 1) — il s'agit très probablement d'une coquille dans l'énoncé ou la liste de choix imprimée sur le sujet original. La valeur la plus proche est $\sqrt2/2 \approx 0{,}707$, mais elle n'est pas mathématiquement exacte (elle vaut le double du résultat correct). Nous documentons ici le calcul rigoureux plutôt que de cocher arbitrairement l'option la plus proche.

**Q10. Point selle de $f(x,y) = x^3 + 2x^2y + y^2$**

Recherche des points critiques :

$$\frac{\partial f}{\partial x} = 3x^2 + 4xy = 0 \qquad \frac{\partial f}{\partial y} = 2x^2 + 2y = 0$$

De la deuxième équation : $y = -x^2$. En substituant dans la première :

$$3x^2 + 4x(-x^2) = 3x^2 - 4x^3 = x^2(3 - 4x) = 0 \Rightarrow x = 0 \text{ ou } x = \frac{3}{4}$$

- $x=0 \Rightarrow y=0$ : point critique $(0,0)$.
- $x=\frac34 \Rightarrow y = -\left(\frac34\right)^2 = -\frac{9}{16}$ : point critique $\left(\frac34,-\frac{9}{16}\right)$.

(Le point $\left(\frac34,\frac{9}{16}\right)$ proposé n'est même pas un point critique, puisque $y$ devrait être négatif pour $x=3/4$.)

Nature des points critiques par le test de la matrice hessienne : $f_{xx}=6x+4y$, $f_{yy}=2$, $f_{xy}=4x$, $D = f_{xx}f_{yy} - f_{xy}^2$.

- En $\left(\frac34,-\frac{9}{16}\right)$ : $f_{xx} = 6\times\frac34 + 4\times\left(-\frac{9}{16}\right) = 4{,}5 - 2{,}25 = 2{,}25$ ; $f_{xy} = 4\times\frac34 = 3$.
  $$D = 2{,}25 \times 2 - 3^2 = 4{,}5 - 9 = -4{,}5 < 0$$
  $D<0$ : il s'agit bien d'un **point selle**.

- En $(0,0)$ : $f_{xx}=0$, $f_{xy}=0$, donc $D = 0\times2-0^2=0$ : le test de la hessienne est **inconclusif** pour ce point (il nécessiterait une étude directe du signe de $f$ au voisinage de l'origine).

Réponse : **b. $\left(\dfrac34,-\dfrac{9}{16}\right)$**, seul point où le critère de la hessienne établit sans ambiguïté la présence d'un point selle.
