> Corrigé indicatif rédigé par SaadConcours, pas une correction officielle de la FSJES Fès. La question 2 de l'exercice est ambiguë : nous la lisons comme « la proportion de consommateurs influencés atteint 35 % », seule lecture qui donne une taille minimale, et nous le signalons.

## Méthode

Deux épreuves : un sujet en 3 pages et un exercice de probabilités. Comptez environ 25 minutes pour l'exercice. L'énoncé insiste : « tout résultat non justifié ne sera pas considéré ». Écrivez la loi exacte, justifiez l'approximation, puis posez le calcul.

## I. Le financement de l'entreprise marocaine : modalités, limites et perspectives

**Introduction** : les entreprises marocaines, à plus de 90 % des TPME, doivent financer leurs investissements et leur cycle d'exploitation. Problématique : les modes de financement disponibles répondent-ils à leurs besoins, et comment les élargir ?

**I. Les modalités de financement**

1. *Financement interne* : autofinancement (capacité d'autofinancement, mise en réserve des bénéfices), cessions d'actifs.
2. *Fonds propres externes* : apports des associés, augmentation de capital, introduction en Bourse de Casablanca, capital-investissement.
3. *Endettement bancaire* : crédits d'investissement et de fonctionnement (découvert, escompte, facilités de caisse), crédit-bail ; c'est le mode dominant.
4. *Financement par le marché* : obligations et billets de trésorerie, réservés en pratique aux grandes entreprises.
5. *Dispositifs publics* : garanties et cofinancements de la Caisse centrale de garantie (devenue Tamwilcom), programmes de Maroc PME (Imtiaz, Moussanada).

**II. Les limites**

- Exigence de garanties et coût du crédit élevés pour les petites entreprises, rationnement du crédit et asymétrie d'information.
- Délais de paiement longs, qui alourdissent les besoins de trésorerie.
- Bourse étroite et peu accessible aux PME ; faible culture du capital-risque.
- Sous-capitalisation, structures familiales et informalité, qui découragent les investisseurs.
- En 2016, aucune offre bancaire conforme aux préceptes de la finance islamique, alors qu'une partie des épargnants et des entrepreneurs la demande.

**III. Les perspectives**

- **Finance participative** : loi 103-12 (2014) sur les établissements de crédit, banques participatives agréées en 2017 ; produits mourabaha, ijara, moucharaka, moudaraba et sukuk ; intérêt pour les entrepreneurs qui refusent le crédit à intérêt.
- Développement du capital-investissement, des compartiments boursiers dédiés aux PME et du financement collaboratif.
- Meilleure application des délais de paiement, renforcement des garanties publiques, éducation financière.

**Conclusion** : diversifier les sources de financement, notamment par la finance participative, est une condition de la croissance des PME marocaines.

## II. Exercice

Soit $X$ le nombre de consommateurs influencés parmi 100 : $X \sim \mathcal{B}(100 ; 0{,}25)$, avec $E(X) = 25$ et $V(X) = 100 \times 0{,}25 \times 0{,}75 = 18{,}75$, soit $\sigma = 4{,}33$.

Comme $np = 25 \geq 5$ et $n(1-p) = 75 \geq 5$, on approche $X$ par la loi normale $\mathcal{N}(25 ; 4{,}33^2)$, avec correction de continuité.

### 1.a Au moins 35 consommateurs influencés

$$P(X \geq 35) \approx P\left(U \geq \frac{34{,}5 - 25}{4{,}33}\right) = P(U \geq 2{,}19) = 1 - 0{,}9857 = \mathbf{0{,}0143}$$

Sans correction de continuité : $P(U \geq 2{,}31) = 0{,}0104$. Le calcul exact par la loi binomiale donne 0,0164.

### 1.b Entre 35 et 45

$$P(35 \leq X \leq 45) \approx P(2{,}19 \leq U \leq 4{,}73) \approx \mathbf{0{,}0143}$$

La probabilité de dépasser 45 est négligeable ($P(U > 4{,}73) \approx 0{,}000001$) : le résultat est pratiquement le même qu'à la question a.

### 2. Taille minimale de l'échantillon

On cherche $n$ tel que la proportion observée $F$ atteigne 35 % avec une probabilité d'au plus 1 %, avec $F \approx \mathcal{N}\left(0{,}25 ; \dfrac{0{,}25 \times 0{,}75}{n}\right)$ :

$$P(F \geq 0{,}35) \leq 0{,}01 \iff \frac{0{,}35 - 0{,}25}{\sqrt{0{,}1875/n}} \geq 2{,}33 \iff n \geq \frac{2{,}33^2 \times 0{,}1875}{0{,}10^2} = 101{,}8$$

**Taille minimale : $n = 102$ consommateurs.** Avec 100 personnes, la probabilité de la question 1.a (1,4 %) dépasse encore légèrement 1 %, ce qui est cohérent.

**Pièges :** appliquer la loi normale sans vérifier les conditions, oublier la correction de continuité, ou utiliser 1,645 (seuil unilatéral à 5 %) au lieu de 2,33.
