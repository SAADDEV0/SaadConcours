> Corrigé avec calculs détaillés.

## Partie 1 — Sujets de réflexion (plans structurés)

**Sujet 1 — L'innovation, facteur clé de compétitivité :**
- Introduction : définir l'innovation (produit, process, organisationnelle, marketing) et la compétitivité.
- I. L'innovation comme moteur de différenciation : avantage concurrentiel durable, valorisation de la marque, réponse à des besoins non satisfaits.
- II. L'innovation comme levier de productivité : nouveaux procédés, réduction des coûts, gains d'efficience (digitalisation, automatisation).
- III. Limites et conditions de succès : investissement en R&D, gestion du risque, culture d'entreprise favorable, protection de la propriété intellectuelle.
- Conclusion : l'innovation, condition nécessaire mais non suffisante ; doit s'accompagner d'une stratégie globale cohérente.

**Sujet 2 — Les enjeux de la digitalisation pour la logistique :**
- Enjeux opérationnels : traçabilité en temps réel (RFID, IoT), optimisation des flux et des stocks, automatisation des entrepôts (WMS, robotique).
- Enjeux stratégiques : e-logistique et e-commerce, intégration de la chaîne logistique globale (SCM), agilité face à la demande.
- Enjeux économiques : réduction des coûts logistiques, amélioration du niveau de service client, avantage concurrentiel.
- Défis : investissement technologique, cybersécurité, formation du personnel, résistance au changement.

**Sujet 3 — La contribution du management dans la performance des entreprises :**
- Le management (planifier, organiser, diriger, contrôler) structure l'allocation des ressources humaines, financières et matérielles.
- Un management de qualité améliore la motivation et l'engagement des collaborateurs (théorie des relations humaines), la coordination des activités et la prise de décision stratégique.
- Un bon contrôle de gestion permet de mesurer les écarts et de corriger les trajectoires (pilotage par indicateurs, tableaux de bord).
- Conclusion : la performance globale (économique, sociale, environnementale) résulte directement de la qualité du management.

## Partie 2 — Exercices

### Exercice N°1 — Programmation linéaire

Soit x₁ = nombre d'imprimantes HB100, x₂ = nombre d'imprimantes HB110.

**1) Modélisation :**
Max Z = 600x₁ + 800x₂ (marge bénéficiaire)
Sous contraintes :
- Assemblage : 3x₁ + 4x₂ ≤ 5000
- Vérification : x₁ + 3x₂ ≤ 2100
- Empaquetage : 2x₁ + 2x₂ ≤ 2000  (⟺ x₁ + x₂ ≤ 1000)
- x₁, x₂ ≥ 0

**2) Résolution graphique :**
Les sommets du polygone des solutions réalisables sont : (0,0) ; (1000,0) [contrainte empaquetage] ; (0,700) [contrainte vérification] ; et l'intersection des contraintes vérification & empaquetage :
x₁+3x₂=2100 et x₁+x₂=1000 ⟹ en soustrayant : 2x₂=1100 ⟹ x₂=550, x₁=450. (Cette solution vérifie bien la contrainte d'assemblage : 3×450+4×550=3550 ≤ 5000 ✓)

Évaluation de Z aux sommets :
- (0,0) : Z=0
- (1000,0) : Z=600 000
- (450,550) : Z=600×450+800×550=270 000+440 000=**710 000**
- (0,700) : Z=560 000

**Solution optimale : x₁ = 450 (HB100), x₂ = 550 (HB110), marge bénéficiaire maximale = 710 000 DH.**
La contrainte de vérification et la contrainte d'empaquetage sont saturées (actives) à l'optimum ; la contrainte d'assemblage est excédentaire (3550 h utilisées sur 5000 h disponibles).

**3) Programme dual :**
Soit y₁, y₂, y₃ les variables duales associées respectivement aux contraintes d'assemblage, de vérification et d'empaquetage.

Min W = 5000y₁ + 2100y₂ + 2000y₃
Sous contraintes :
3y₁ + y₂ + 2y₃ ≥ 600
4y₁ + 3y₂ + 2y₃ ≥ 800
y₁, y₂, y₃ ≥ 0

### Exercice N°2 — Formules (tableur)

**1) Formules pour E2 (Prime) et F2 (Salaire Net) :**

```
E2 = D2 * RECHERCHEV(C2 ; TableTauxParVille ; 2 ; FAUX)
F2 = D2 + E2 + RECHERCHEV(B2 ; TableIndemniteParSexe ; 2 ; FAUX)
```

où `TableTauxParVille` est la plage contenant la correspondance Ville → Taux de prime (Casablanca 10 %, Rabat 20 %, Fès 30 %), et `TableIndemniteParSexe` la plage Sexe → Indemnité (M=600, F=400). Ces formules sont ensuite recopiées de E2:F2 jusqu'à la ligne 9.

**2) Total des salaires nets des vendeuses (sexe F) :**

```
=SOMME.SI(B2:B9 ; "F" ; F2:F9)
```

(fonction SUMIF : somme de la colonne Salaire Net F2:F9 pour les lignes où la colonne Sexe B2:B9 est égale à "F").
