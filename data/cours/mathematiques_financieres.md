# Mathématiques Financières

## 1. Intérêts simples

Utilisés pour les opérations à **court terme** (≤ 1 an) : l'intérêt ne produit pas lui-même d'intérêt.

```
I = C × t × n
```
avec **C** = capital, **t** = taux annuel, **n** = durée en années (ou n = j/360 en jours, base exact ou commerciale selon convention).

```
Valeur acquise : Cn = C0 × (1 + t × n)
Valeur actuelle : C0 = Cn / (1 + t × n)
```

### 1.1 Escompte commercial

```
Escompte = Valeur nominale × t × n
Valeur actuelle (nette) = Valeur nominale − Escompte − Agios éventuels
Taux réel de l'escompte (coût réel) > taux nominal (car calculé sur la valeur actuelle, pas la valeur nominale)
```

## 2. Intérêts composés

Utilisés pour les opérations à **long terme** : l'intérêt de chaque période est réinvesti et produit à son tour des intérêts.

```
Valeur acquise : Cn = C0 × (1 + t)^n
Valeur actuelle : C0 = Cn / (1 + t)^n = Cn × (1 + t)^(−n)
```

### 2.1 Taux équivalents et taux proportionnels

```
Taux équivalent : (1 + tp)^p = (1 + t)   →  même capitalisation, périodes différentes
Taux proportionnel : tp = t / p           →  intérêts simples intra-période
```
En intérêts composés on utilise le **taux équivalent** ; en intérêts simples, le **taux proportionnel**.

## 3. Les annuités

### 3.1 Annuités constantes de fin de période

```
Valeur acquise : Vn = a × [(1 + t)^n − 1] / t
Valeur actuelle : V0 = a × [1 − (1 + t)^(−n)] / t
```

### 3.2 Annuités de début de période

```
V0 (début) = V0 (fin) × (1 + t)
Vn (début) = Vn (fin) × (1 + t)
```

## 4. Les emprunts indivis

Un seul prêteur ; annuité = amortissement du capital + intérêts.

```
Intérêt de la période k = Capital restant dû (début période k) × t
Annuité constante : a = C0 × t / [1 − (1 + t)^(−n)]
Amortissement (annuités constantes) : Mk = M1 × (1 + t)^(k−1), avec M1 = a − C0×t
```

**Tableau d'amortissement (principe) :**

| Période | Capital début | Intérêt | Amortissement | Annuité | Capital fin |
|---|---|---|---|---|---|
| k | CRDk-1 | CRDk-1 × t | Mk | a | CRDk-1 − Mk |

- **Amortissements constants** : Mk = C0 / n (identique chaque période) → l'annuité **décroît** dans le temps.
- **Annuités constantes** : l'amortissement **croît** géométriquement (raison 1+t), l'intérêt décroît.

## 5. Actualisation et choix d'investissement

```
VAN (Valeur Actuelle Nette) = − I0 + Σ [CFk × (1 + t)^(−k)]
TRI (Taux de Rentabilité Interne) : taux t* qui annule la VAN
Indice de profitabilité (IP) = (Σ CFk actualisés) / I0
Délai de récupération (DRCI) : durée nécessaire pour que les CF actualisés cumulés couvrent I0
```

- Un projet est **acceptable** si VAN > 0, ou si TRI > taux d'actualisation exigé.
- Entre deux projets exclusifs, on retient en priorité celui avec la **VAN la plus élevée** (le TRI peut être trompeur en cas de CF non conventionnels ou de tailles d'investissement différentes).

## 6. Points clés à retenir pour un QCM

- Intérêts **simples** → capital constant qui sert de base ; intérêts **composés** → capital qui croît chaque période.
- **(1+t)^n** est le facteur de capitalisation, **(1+t)^(−n)** le facteur d'actualisation.
- Taux **proportionnel** ≠ taux **équivalent** sauf en intérêts simples.
- Dans un emprunt à annuités constantes, la part d'intérêt **diminue** et la part de capital **augmente** au fil du temps.
