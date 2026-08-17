# Comptabilité Analytique

## 1. Objet et rôle

La comptabilité analytique (ou comptabilité de gestion) complète la comptabilité générale : elle **reclasse les charges par destination** (produit, activité, centre de responsabilité) pour :

- calculer le **coût de revient** de chaque produit/service,
- déterminer les **prix de vente** et la **rentabilité**,
- aider à la **prise de décision** (faire ou faire-faire, abandon d'un produit, etc.).

## 2. Charges incorporables vs non incorporables

| Type | Exemple | Traitement |
|---|---|---|
| Charges incorporables | Achats, salaires, amortissements d'exploitation | Reprises en comptabilité analytique |
| Charges non incorporables | Charges exceptionnelles, IS | Exclues du calcul des coûts |
| Charges supplétives | Rémunération théorique de l'exploitant, intérêts des capitaux propres | Ajoutées bien qu'absentes en CG |

## 3. La méthode des coûts complets

### 3.1 Charges directes et indirectes

- **Charges directes** : affectées sans calcul intermédiaire (matières premières, main d'œuvre directe).
- **Charges indirectes** : réparties via des **centres d'analyse** (centres auxiliaires puis centres principaux) à l'aide d'**unités d'œuvre**.

### 3.2 Enchaînement des coûts

```
Coût d'achat = Prix d'achat + Charges directes et indirectes d'approvisionnement
Coût de production = Coût d'achat des matières consommées + Charges de production
Coût de revient = Coût de production des produits vendus + Charges hors production (distribution, administration)
Résultat analytique = Prix de vente − Coût de revient
```

### 3.3 Valorisation des stocks

Méthode **CUMP** (Coût Unitaire Moyen Pondéré) après chaque entrée ou en fin de période, ou **FIFO** (premier entré, premier sorti).

## 4. L'imputation rationnelle des charges fixes

Objectif : neutraliser l'effet de la sous-activité ou de la suractivité sur le coût unitaire.

```
Coefficient d'imputation rationnelle = Activité réelle / Activité normale

Charges fixes imputées = Charges fixes réelles × Coefficient

Différence d'incorporation = Charges fixes réelles − Charges fixes imputées
  > 0 en cas de sous-activité (coût de chômage/boni de suractivité si < 0)
```

## 5. Le seuil de rentabilité (point mort)

```
Marge sur coût variable (MCV) = Chiffre d'affaires − Charges variables
Taux de MCV = MCV / CA

Seuil de rentabilité (CA critique) = Charges fixes / Taux de MCV
Point mort (date) = (Seuil de rentabilité / CA) × 360 jours
Indice de sécurité = (CA − Seuil de rentabilité) / CA
Levier opérationnel = MCV / Résultat
```

## 6. La méthode ABC (Activity Based Costing)

Au lieu de répartir les charges indirectes par centre d'analyse classique, l'ABC les affecte par **activité**, chacune ayant un **inducteur de coût** (cost driver) représentatif de sa consommation de ressources.

```
Coût unitaire de l'inducteur = Coût total de l'activité / Volume de l'inducteur
Coût imputé au produit = Coût unitaire de l'inducteur × Nombre d'inducteurs consommés par le produit
```

**Avantage** : meilleure traçabilité du coût des activités de support (logistique, qualité, SAV) souvent mal réparties par les clés volumiques classiques.

## 7. Coûts partiels : direct costing

- **Direct costing simple** : ne retient que les charges variables.
- **Direct costing évolué** : ajoute les charges fixes spécifiques à chaque produit avant d'imputer les charges fixes communes.

```
Marge sur coûts spécifiques = MCV − Charges fixes spécifiques
```
Utile pour décider de l'abandon d'un produit : on abandonne seulement si sa marge sur coûts spécifiques est négative.

## 8. Points clés à retenir pour un QCM

- Une charge **directe** ne nécessite **aucune clé de répartition**.
- La **sous-activité** génère un coût de chômage qui **dégrade** le coût de revient si on ne pratique pas l'imputation rationnelle.
- Le **seuil de rentabilité** baisse quand le taux de marge sur coût variable augmente ou que les charges fixes diminuent.
- La méthode **ABC** est particulièrement pertinente quand les charges indirectes sont **importantes et hétérogènes**.
