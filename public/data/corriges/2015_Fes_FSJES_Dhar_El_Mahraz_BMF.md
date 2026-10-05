> Corrigé indicatif rédigé par SaadConcours, pas une correction officielle de la FSJES Fès. Le sujet de réflexion est corrigé sous forme de plan détaillé ; les calculs de l'exercice sont posés et vérifiés.

## Méthode

Deux heures pour un développement de 4 pages au plus et un exercice d'estimation statistique. L'exercice est rapide (25 minutes) si l'on calcule d'abord la moyenne et la variance de l'échantillon. Attention aux tables fournies : on utilise Student à **24** degrés de liberté (n − 1) et le khi-deux à 24 degrés de liberté ; les valeurs données pour 25 degrés de liberté sont des pièges.

## I. Le système financier et ses canaux de financement

**Introduction** : le système financier est l'ensemble des institutions, marchés et instruments qui assurent le transfert des ressources des agents à capacité de financement (ménages surtout) vers les agents à besoin de financement (entreprises, État). Problématique : quels canaux organisent ce transfert et quel est le rôle de chacun ?

**I. Présentation du système financier marocain**

- *Les acteurs* : Bank Al-Maghrib (autorité monétaire et de supervision bancaire, loi 40-17), banques (conventionnelles et participatives depuis la loi 103-12), sociétés de financement, compagnies d'assurance, OPCVM, caisses de retraite, CDG ; autorités de marché (AMMC, ACAPS).
- *Les marchés* : marché monétaire (interbancaire, titres de créances négociables), marché des capitaux (Bourse de Casablanca, marché obligataire, adjudications du Trésor), marché des changes.
- *Les fonctions* : collecter l'épargne, allouer les ressources, gérer les risques, assurer les paiements.

**II. Les canaux de financement et leurs rôles**

1. **Financement interne (autofinancement)** : ressources propres de l'entreprise (CAF) ; indépendance, mais montants limités.
2. **Financement indirect ou intermédié** : la banque collecte des dépôts et accorde des crédits, en transformant les échéances et en supportant le risque. Elle crée de la monnaie et domine au Maroc (économie d'endettement), notamment pour les PME.
3. **Financement direct ou désintermédié** : les agents émettent des titres (actions, obligations, TCN) achetés directement par les épargnants sur les marchés. Coût souvent plus faible, mais accessible surtout aux grandes entreprises et à l'État.
4. **Financement participatif et alternatif** : banques participatives (mourabaha, ijara, moucharaka), sukuk, crowdfunding (loi 15-18), capital-investissement.
5. **Financement public** : Trésor, garanties (Tamwilcom, ex-CCG).

**III. Évolution et enjeux**

- Désintermédiation, marchéisation et déréglementation (« 3 D » de H. Bourguinat) depuis les réformes des années 1990.
- Au Maroc, le crédit bancaire reste prépondérant ; le marché boursier est étroit (peu d'introductions, faible liquidité).
- Enjeux : inclusion financière, financement des TPME, approfondissement des marchés.

**Conclusion** : les canaux sont complémentaires ; l'efficacité du système financier se juge à sa capacité à financer l'investissement productif au moindre coût et au moindre risque.

## II. Exercice — Absentéisme

Statistiques de l'échantillon ($n = 25$) : $\sum x_i = 109$, $\bar{x} = 4{,}36$ absences par jour ; $\sum (x_i - \bar{x})^2 = 57{,}76$ ; variance corrigée $s^2 = 57{,}76/24 = 2{,}4067$, $s = 1{,}5513$.

### 1. Estimation ponctuelle et par intervalle

L'estimation **ponctuelle** donne une seule valeur au paramètre inconnu, calculée sur l'échantillon (par exemple $\bar{x}$ pour $\mu$) ; elle est presque toujours différente de la vraie valeur et ne dit rien de sa précision. L'estimation **par intervalle** donne une fourchette qui contient le paramètre avec une probabilité fixée à l'avance (le niveau de confiance $1 - \alpha$) : elle mesure la précision de l'estimation.

### 2. Proportion de jours avec 5 absences

Estimateur : la fréquence empirique $\hat{P} = \dfrac{K}{n}$, où $K$ est le nombre de jours de l'échantillon avec 5 absences. Ici $K = 5$ : $\hat{p} = 5/25 = \mathbf{0{,}20}$.

$\hat{P}$ est une variable aléatoire (sa valeur change d'un échantillon à l'autre) ; c'est un estimateur sans biais et convergent de $p$. On estime qu'environ **20 % des jours** comptent exactement 5 absents.

### 3.a Intervalle de confiance de μ à 95 %

$\sigma$ inconnue et petit échantillon issu d'une loi normale : on utilise la loi de Student à $n - 1 = 24$ degrés de liberté, $t = 2{,}064$.

$$IC_{95\%}(\mu) = \bar{x} \pm t \frac{s}{\sqrt{n}} = 4{,}36 \pm 2{,}064 \times \frac{1{,}5513}{5} = 4{,}36 \pm 0{,}640$$

$$\mathbf{IC_{95\%}(\mu) = [3{,}72 ; 5{,}00]}$$

### 3.b Intervalle de confiance de σ² à 98 %

$\dfrac{(n-1)S^2}{\sigma^2}$ suit une loi du $\chi^2$ à 24 degrés de liberté ; à 98 %, on prend les quantiles 0,01 et 0,99 : 10,86 et 42,98.

$$IC_{98\%}(\sigma^2) = \left[\frac{57{,}76}{42{,}98} ; \frac{57{,}76}{10{,}86}\right] = \mathbf{[1{,}34 ; 5{,}32]}$$

**Pièges :** utiliser $u = 1{,}96$ (loi normale) au lieu de Student, prendre 25 degrés de liberté, ou diviser par $n$ au lieu de $n - 1$ dans la variance.
