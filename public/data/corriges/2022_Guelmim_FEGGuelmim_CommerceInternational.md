> Corrigé rédigé à partir du programme standard du module (statistique/probabilités et recherche opérationnelle) et d'un calcul vérifié — aucune source officielle disponible pour ce sujet.

### Question 1

**1. Signification des variables $Y_1, \ldots, Y_n$**

$Y_k = \dfrac{X_1+X_2+\cdots+X_k}{k}$ est la **moyenne cumulée (moyenne mobile croissante)** des gains de l'entreprise sur les $k$ premières périodes : à chaque période $k$, $Y_k$ actualise le gain moyen par période observé depuis le début. C'est l'estimateur naturel du gain moyen "vrai" $m$ de l'entreprise, dont la précision s'améliore (variance décroissante, voir 3.) à mesure que le nombre de périodes observées augmente.

**2. Espérances mathématiques**

Par linéarité de l'espérance et indépendance (l'indépendance n'est même pas nécessaire ici) :

$$E(Y_k) = E\left(\frac{X_1+\cdots+X_k}{k}\right) = \frac{1}{k}\sum_{i=1}^{k} E(X_i) = \frac{k \cdot m}{k} = m$$

Donc **$E(Y_1) = E(Y_2) = \cdots = E(Y_n) = m$** : chaque $Y_k$ est un estimateur **sans biais** du gain moyen $m$, quel que soit $k$.

**3. Variances et écarts-types**

Les $X_i$ étant indépendantes et de même variance $\sigma^2$ :

$$V(Y_k) = V\left(\frac{X_1+\cdots+X_k}{k}\right) = \frac{1}{k^2}\sum_{i=1}^{k} V(X_i) = \frac{k \cdot \sigma^2}{k^2} = \frac{\sigma^2}{k}$$

Donc $V(Y_1) = \sigma^2$, $V(Y_2) = \dfrac{\sigma^2}{2}$, $V(Y_3) = \dfrac{\sigma^2}{3}$, …, $V(Y_n) = \dfrac{\sigma^2}{n}$.

Les écarts-types correspondants : $\sigma(Y_k) = \dfrac{\sigma}{\sqrt{k}}$, soit $\sigma(Y_1) = \sigma$, $\sigma(Y_2) = \dfrac{\sigma}{\sqrt2}$, $\sigma(Y_3) = \dfrac{\sigma}{\sqrt3}$, …

On observe que la dispersion de l'estimateur $Y_k$ autour de $m$ diminue quand $k$ augmente : plus on cumule de périodes, plus l'estimation du gain moyen est précise (c'est la loi des grands nombres).

**4. Coefficients de corrélation linéaire entre $Y_i$ et $Y_j$**

Pour $i<j$, $Y_j$ contient les mêmes $i$ premières variables que $Y_i$ (plus $j-i$ variables supplémentaires indépendantes des précédentes). La covariance ne provient donc que de la partie commune :

$$\text{Cov}(Y_i,Y_j) = \frac{1}{ij}\,\text{Cov}\!\left(\sum_{k=1}^{i}X_k,\ \sum_{k=1}^{j}X_k\right) = \frac{1}{ij}\times i\sigma^2 = \frac{\sigma^2}{j} \quad (i<j)$$

D'où le coefficient de corrélation linéaire :

$$\rho(Y_i,Y_j) = \frac{\text{Cov}(Y_i,Y_j)}{\sigma(Y_i)\,\sigma(Y_j)} = \frac{\sigma^2/j}{(\sigma/\sqrt i)(\sigma/\sqrt j)} = \frac{\sqrt{ij}}{j} = \sqrt{\frac{i}{j}} \quad (i<j)$$

En appliquant cette formule à $i,j \in \{1,2,3\}$ :

- $\rho(Y_1,Y_2) = \sqrt{1/2} \approx 0,707$
- $\rho(Y_1,Y_3) = \sqrt{1/3} \approx 0,577$
- $\rho(Y_2,Y_3) = \sqrt{2/3} \approx 0,816$

(par symétrie, $\rho(Y_i,Y_j)=\rho(Y_j,Y_i)$, et $\rho(Y_i,Y_i)=1$). Ces corrélations positives et fortes s'expliquent par le fait que les $Y_k$ partagent une base commune de variables : plus deux moyennes cumulées ont d'observations en commun (rapport $i/j$ proche de 1), plus elles sont corrélées.

### Question 2

**1. Programmation linéaire — nombre de lots à acheter**

Soit $a$, $b$, $c$ les nombres de lots A, B et C achetés. Le programme s'écrit :

$$\text{Minimiser } Z = 3840a + 3960b + 2880c$$

sous contraintes :

$$
\begin{cases}
15a + 16b + 9c \ge 200 & \text{(chêne)}\\
15a + 8b + 24c \ge 160 & \text{(hêtre)}\\
20a + 24b + 12c \ge 300 & \text{(sapin)}\\
a,b,c \ge 0
\end{cases}
$$

En résolvant ce programme linéaire (recherche des sommets du polyèdre des contraintes, ou méthode du simplexe), l'optimum est atteint au sommet où les contraintes de hêtre et de sapin sont saturées (égalités) et où $a=0$ :

$$
\begin{cases}
16b + 9c = 200 \text{ (large, non saturée)}\\
8b + 24c = 160\\
24b + 12c = 300
\end{cases}
\;\Rightarrow\; b = 11,\ c = 3
$$

Vérification des trois contraintes avec $(a,b,c) = (0,\,11,\,3)$ :
- Chêne : $16(11) + 9(3) = 176 + 27 = 203 \ge 200$ ✓ (léger surplus de 3 m³)
- Hêtre : $8(11) + 24(3) = 88 + 72 = 160 \ge 160$ ✓ (exactement satisfait)
- Sapin : $24(11) + 12(3) = 264 + 36 = 300 \ge 300$ ✓ (exactement satisfait)

Coût correspondant : $Z = 3960(11) + 2880(3) = 43\,560 + 8\,640 = 52\,200$ dh.

Une vérification par balayage de toutes les combinaisons entières raisonnables confirme qu'aucune autre combinaison de lots entiers ne fait mieux : **la SSW doit acheter 0 lot A, 11 lots B et 3 lots C, pour un coût total minimal de 52 200 dh.**

**2. Rabais par rapport au marché traditionnel**

Sur le marché traditionnel, acheter exactement les quantités minimales requises (200 m³ de chêne, 160 m³ de hêtre, 300 m³ de sapin) coûterait :

$$200 \times 140 + 160 \times 90 + 300 \times 70 = 28\,000 + 14\,400 + 21\,000 = 63\,400 \text{ dh}$$

Le rabais obtenu grâce aux lots est donc :

$$\text{Rabais} = \frac{63\,400 - 52\,200}{63\,400} = \frac{11\,200}{63\,400} \approx 0,1767 \approx \mathbf{17,7\%}$$

L'achat groupé par lots permet donc à la SSW de réduire sa facture bois d'environ **17,7 %** par rapport à un achat au détail aux prix du marché traditionnel.

### Question 3 — Plan de réponse

**Introduction**
- La crise sanitaire de la Covid-19 (2020-2021) a constitué un choc mondial sans précédent pour les chaînes logistiques et le commerce international, révélant la fragilité des chaînes d'approvisionnement mondialisées et « juste-à-temps ».
- Problématique : comment la pandémie a-t-elle perturbé la logistique et les échanges internationaux, et quelles adaptations en ont résulté ?

**I. Des chaînes logistiques mondiales fortement perturbées**

1. *Rupture des flux physiques*
   - Fermetures de frontières, confinements et arrêts d'usines (notamment en Chine, « usine du monde ») ont provoqué des pénuries de composants (semi-conducteurs, matières premières) et des retards généralisés.
   - Congestion des grands ports (Los Angeles, Shanghai) et pénurie de conteneurs, avec une explosion des taux de fret maritime (multipliés par 5 à 10 sur certaines routes).

2. *Remise en cause du modèle "juste-à-temps"*
   - Les entreprises fonctionnant en flux tendus (stocks minimaux) se sont retrouvées incapables d'absorber le choc, contrairement à celles disposant de stocks de sécurité ou de fournisseurs diversifiés.

**II. Un coup d'arrêt puis une recomposition du commerce international**

1. *Effondrement puis reprise en dents de scie des échanges*
   - Chute brutale du commerce mondial de marchandises et surtout de services (tourisme, transport aérien) en 2020, suivie d'un rebond désynchronisé selon les secteurs (forte demande de biens durables et de matériel médical/numérique).

2. *Vers une reconfiguration des chaînes de valeur*
   - Réflexion stratégique sur la **relocalisation/nearshoring** de certaines productions jugées critiques (santé, technologie), et sur la diversification des fournisseurs (stratégie "China + 1") pour réduire la dépendance à un seul pôle de production.
   - Accélération de la digitalisation de la logistique (traçabilité, e-commerce, automatisation des entrepôts) comme réponse structurelle à la crise.

**Conclusion**
- La crise Covid-19 a agi comme un révélateur des vulnérabilités de la mondialisation logistique et a durablement modifié les pratiques (stocks de précaution, diversification des sources, digitalisation), tout en questionnant l'équilibre entre efficacité (coûts) et résilience des chaînes d'approvisionnement mondiales.
