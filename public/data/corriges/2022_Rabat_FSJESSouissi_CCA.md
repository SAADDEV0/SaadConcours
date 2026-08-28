## Corrigé indicatif

> Corrigé rédigé à partir de l'énoncé transcrit — pas de correction officielle publiée trouvée. Épreuve très dense (4 dossiers, 7 cas) : certains points comportent des hypothèses de convention (arrondi, prorata, traitement du différé d'intérêt) explicitement signalées — relecture humaine fortement recommandée avant usage en révision. Le taux/durée d'amortissement du matériel de transport et de bureau (Cas 2) n'étant pas donné dans l'énoncé transcrit, ce point précis reste non chiffrable.

## DOSSIER 1 — GESTION COMPTABLE

### Cas 1 — Principes comptables (CGNC)

| Événement | Principe concerné | Conséquence |
|---|---|---|
| 1. Redressement IS probable (contrôle fiscal) | **Prudence** | Constater une provision pour risques et charges (litige fiscal), même si le montant n'est qu'estimé. |
| 2. Crédit-bail, redevance trimestrielle | **Prééminence de la forme juridique** (le CGNC, à la différence des IFRS, ne retraite pas le crédit-bail au bilan) | La redevance est simplement comptabilisée en charge d'exploitation (compte 6132) au fur et à mesure de son échéance ; aucun bien ni dette de crédit-bail au bilan comptable. |
| 3. Provision pour investissement | **Provisions réglementées** | Dotation en charge non courante, sous conditions légales de constitution et d'utilisation ; réintégration en cas de non-utilisation dans le délai légal. |
| 4. Compte fournisseurs : solde global créditeur incluant des comptes débiteurs (avoirs non imputés) | **Non-compensation / clarté** | Reclasser les 45 000 DH en « Fournisseurs débiteurs, avances et acomptes » à l'actif, sans les compenser avec le solde créditeur des fournisseurs. |
| 5. Terrain : coût historique 1 200 000, valeur d'expertise 3 000 000 | **Coût historique** | Le terrain reste inscrit au bilan à 1 200 000 DH ; la plus-value latente n'est pas comptabilisée. |
| 6. Cautionnement d'un prêt accordé à un salarié | **Engagements hors bilan / image fidèle** | N'apparaît pas au bilan (pas une dette actuelle certaine) mais doit être mentionné dans l'ETIC au titre des engagements donnés. |
| 7. Créances en devises : profits et pertes de change latents simultanés | **Prudence + non-compensation** | Les pertes latentes (écarts de conversion-actif) sont provisionnées ; les gains latents (écarts de conversion-passif) ne sont pas comptabilisés en produit — les deux positions sont traitées séparément, sans compensation. |
| 8. Créances à terme à faible taux — actualisation ? | **Coût historique (non-actualisation)** | Le CGNC marocain ne prévoit pas, en règle générale, l'actualisation des créances dans les comptes individuels : la créance reste à sa valeur nominale. |

### Cas 2 — Régularisation des immobilisations corporelles

**Correction de l'écriture erronée (cession du matériel de transport à 460 000, comptabilisée à tort en réduction directe du compte 2340) :**
```
2340  Matériel de transport                460 000
        7513  Produits de cession des immobilisations                460 000
```
Cette écriture restitue au compte 2340 sa valeur brute réelle et reclasse le produit de cession en résultat non courant, à sa juste place (à compléter par la sortie de la VNA du bien cédé et son cumul d'amortissement, non chiffrable ici — voir note ci-dessous).

**Machine B** (ITMO, 4 470 000 DH, acquise le 10/04/N, dégressif, durée 5 ans) : taux linéaire 20 % × coefficient 2 (durée 5-6 ans) = **40 %**. Prorata (acquisition avant le 16 du mois → avril compté entier) : 9 mois (avril→décembre).
Dotation N = 4 470 000 × 40 % × 9/12 = **1 341 000 DH**.

**Machine C** (780 000 DH, acquise le 05/10/N, linéaire, durée 5 ans → taux 20 %). Prorata : 3 mois (octobre→décembre).
Dotation N = 780 000 × 20 % × 3/12 = **39 000 DH**.

**Machine A et matériel de transport/bureau** : *non chiffrables* — l'énoncé transcrit ne précise pas leur taux/durée d'amortissement (seule l'information « amorti linéairement » est donnée, sans le taux). Méthode à appliquer une fois le taux connu : Dotation = Valeur d'origine × taux linéaire (prorata temporis si acquisition en cours d'exercice).

### Cas 3 — Amortissement dégressif/linéaire et cession (société ABC)

Matériel 960 000 DH TTC → base HT (TVA 20 %) = **800 000 DH**, durée 5 ans (taux linéaire 20 %, coefficient dégressif 2 → taux dégressif 40 %). Acquis le 15/10/N-3 (prorata : 3 mois la 1ère année).

**1. Tableau d'amortissement dégressif :**

| Exercice | Base | Taux | Dotation | Cumul | VNC |
|---|---|---|---|---|---|
| N-3 (3 mois) | 800 000 | 40 % × 3/12 | 80 000 | 80 000 | 720 000 |
| N-2 | 720 000 | 40 % | 288 000 | 368 000 | 432 000 |
| N-1 | 432 000 | 40 % | 172 800 | 540 800 | 259 200 |
| N (9 mois, cession le 20/10) | 259 200 | 40 % (dégressif > linéaire résiduel : 103 680 > 86 400) | 77 760 *(103 680 × 9/12)* | 618 560 | 181 440 |

**2. Combinaison dégressif/linéaire :** à partir de N, on compare chaque année la dotation dégressive à la dotation linéaire sur la durée résiduelle (VNC/nombre d'exercices restants) et on retient la plus élevée — au 01/01/N, dégressif (103 680) > linéaire résiduel (259 200/3 = 86 400), le dégressif reste donc appliqué.

**3. Écritures N-3 et N :** dotation annuelle classique (Débit 6193 / Crédit 2833) pour chaque exercice ci-dessus.

**4. Cession le 20/10/N pour 400 000 DH à crédit** (VNC à la cession : 181 440) :
```
Sortie du bien :
2833  Amortissements ITMO (cumul)         618 560
6513  VNA des immobilisations cédées       181 440
        2332  ITMO (valeur d'origine)                       800 000

Constatation du prix de cession :
3481  Créances sur cessions d'immob.      400 000
        7513  Produits des cessions d'immob.                400 000
```
Plus-value nette de cession = 400 000 − 181 440 = **218 560 DH** (résultat non courant).

## DOSSIER 2 — GESTION FINANCIÈRE

### Cas 4 — Analyse fonctionnelle (société ALPHA)

FR = (500 000+550 000) − 1 000 000 = **50 000** ; BFR = (200 000+450 000) − 500 000 = **150 000** ; TN = 100 000−200 000 = **−100 000** *(vérification : FR−BFR = TN ✓)*.
Ratio de financement propre = 500 000/1 050 000 ≈ 47,6 % ; ratio d'endettement = 550 000/500 000 = 1,1.

**Commentaire :** le FR est positif mais très insuffisant pour couvrir le BFR : la trésorerie nette est déficitaire et financée par découvert bancaire. L'endettement (1,1×les capitaux propres) est légèrement élevé — structure financière fragile, marge de manœuvre réduite.

### Cas 5 — Analyse patrimoniale (bilan financier)

Dettes à + d'un an = 550 000 ; Dettes à − d'un an = 500 000+200 000 = 700 000 ; Actif à + d'un an = 1 000 000 ; Actif à − d'un an = 200 000+450 000+100 000 = 750 000.

- Ratio de liquidité générale = 750 000/700 000 ≈ **1,07**
- Ratio de solvabilité générale = Total actif/Total dettes = 1 750 000/1 250 000 = **1,4**
- Ratio d'autonomie financière = CP/Total dettes = 500 000/1 250 000 = **0,4**

**Commentaire :** solvabilité générale correcte (>1), mais liquidité à court terme tout juste satisfaisante et autonomie financière limitée (dettes largement supérieures aux capitaux propres).

### Cas 6 — Make or buy (société BETA)

Coût annuel d'approvisionnement actuel = 2 000 × 1 000 = **2 000 000 DH/an**.
Coût annuel de production propre = Amortissement (2 000 000/5 = 400 000) + Coût de production (800×1 000 = 800 000) + Coût du capital immobilisé (10 %×2 000 000 = 200 000) = **1 400 000 DH/an**.

**1.** Production (1 400 000) < Achat (2 000 000) → **oui, substituer l'approvisionnement par la production propre** (économie de 600 000 DH/an).
**2.** Fournisseur turc à 1 350 DH/pièce → coût annuel = 1 350 000 DH < 1 400 000 (production) → **maintenir l'approvisionnement** (chez le fournisseur turc), ne pas produire (économie de 50 000 DH/an).
**3.** Seuil de bascule : prix p tel que 1 000×p = 1 400 000 → **p = 1 400 DH/pièce** — la production ne redevient avantageuse qu'au-delà de ce prix d'achat.

### Cas 7 — Choix de financement (emprunt vs crédit-bail, taux 7 %)

> Hypothèse retenue pour le « différé d'intérêt des deux premières années » : ni intérêts ni capital ne sont payés pendant les années 1 et 2, les intérêts courus étant capitalisés (ajoutés au principal) ; le remboursement (amortissement constant) reprend sur les 3 années restantes. Une convention différente (intérêts payés dès l'année 1, seul le capital étant différé) donnerait un résultat chiffré différent — à vérifier avec ton cours.

**Emprunt (800 000 à 11 %, différé 2 ans, frais de dossier 30 000 sur 5 ans) :** intérêts capitalisés années 1-2 → dette = 800 000×1,11² ≈ 985 680, remboursée par amortissement constant sur 3 ans (328 560/an de capital).
Coût actualisé (7 %) ≈ 30 000 (frais, à t=0) + 436 985/1,07³ + 400 843/1,07⁴ + 364 702/1,07⁵ ≈ **952 531 DH**.

**Crédit-bail (4 loyers de 300 000 en début de période, dépôt de garantie 80 000 récupérable, rachat 100 000 en fin de contrat) :**
Coût actualisé (7 %) ≈ 380 000 (à t=0) + 300 000/1,07 + 300 000/1,07² + 300 000/1,07³ + 20 000/1,07⁴ ≈ **1 182 555 DH**.

**Conclusion :** le coût actualisé de l'**emprunt bancaire** (≈952 531 DH) est inférieur à celui du **crédit-bail** (≈1 182 555 DH) — l'emprunt est le mode de financement le plus avantageux sous les hypothèses retenues.

## DOSSIER 3 — Fiscalité (essai, 15 lignes max)

Trame : la Contribution Professionnelle Unique (CPU, régime remplaçant la taxe professionnelle/patente et simplifiant les obligations des auto-entrepreneurs et petits contribuables) vise à **élargir l'assiette fiscale en intégrant le secteur informel** (I), tout en offrant une **fiscalité allégée et simplifiée** comme contrepartie incitative à la formalisation (II). Limites : risque de sous-déclaration persistante si les avantages perçus (accès au financement, marchés publics, couverture sociale) restent insuffisamment visibles pour les redevables ciblés (III). Conclusion attendue : la CPU peut améliorer les recettes fiscales et l'inclusion sociale à condition d'être accompagnée d'un effort de sensibilisation et d'un accès réel aux contreparties sociales (assurance maladie, retraite).

## DOSSIER 4 — Système d'information comptable des PME (exposé structuré, 1,5 page max)

Trame :
- **I. Contraintes opérationnelles** : coût d'acquisition et de maintenance des systèmes (ERP/logiciels comptables), manque de compétences internes en systèmes d'information, résistance au changement, informalité partielle des processus dans les petites structures.
- **II. Déterminants de performance** : qualité et fiabilité des données saisies, intégration du SI comptable avec les autres fonctions (achats, ventes, paie), formation des utilisateurs, adéquation de l'outil à la taille réelle de l'entreprise (éviter le surdimensionnement).
- **III. Conclusion attendue** : la performance du SI comptable des PME marocaines dépend moins de la sophistication technologique que de son adéquation aux besoins réels de l'entreprise et de l'appropriation par les utilisateurs — un SI simple mais bien utilisé vaut souvent mieux qu'un système complexe sous-exploité.
