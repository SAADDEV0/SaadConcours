// Informatique de gestion — 2ème Bac : tableur Excel et logiciel comptable SAARI (Sage).
const md = String.raw;

export default {
  "prise-en-main-et-mise-en-forme": {
    cours: md`
## Introduction

Un **tableur** (Microsoft Excel, LibreOffice Calc) est un logiciel qui permet d'organiser des données dans des **tableaux**, d'effectuer des **calculs automatiques** et de produire des **graphiques**. En gestion, il sert à établir des factures, des états de paie, des budgets, des tableaux d'amortissement…

## I. L'environnement d'Excel

| Élément | Description |
|---|---|
| **Classeur** | Le fichier Excel (extension **.xlsx**) ; il contient plusieurs feuilles |
| **Feuille de calcul** | Un tableau de lignes et de colonnes ; onglets en bas de l'écran |
| **Colonnes** | Identifiées par des lettres (A, B, C… AA…) |
| **Lignes** | Identifiées par des numéros (1, 2, 3…) |
| **Cellule** | Intersection d'une colonne et d'une ligne, désignée par sa **référence** (ex. **B4**) |
| **Plage** | Ensemble de cellules contiguës (ex. **A1:D10**) |
| **Barre de formule** | Affiche le contenu réel de la cellule active (valeur ou formule) |
| **Ruban** | Onglets de commandes : Accueil, Insertion, Mise en page, Formules, Données… |

## II. La saisie des données

Une cellule peut contenir :

- du **texte** (aligné à gauche par défaut) ;
- un **nombre** ou une **date** (alignés à droite) ;
- une **formule**, qui commence toujours par le signe **=**.

Astuces : **Entrée** valide ; **Échap** annule ; **F2** modifie la cellule ; la **poignée de recopie** (petit carré en bas à droite de la cellule) permet de recopier une formule ou une série (janvier, février…).

## III. La mise en forme

| Mise en forme | Outils (onglet Accueil) |
|---|---|
| **Police** | Type, taille, gras, italique, couleur |
| **Alignement** | Gauche, centré, droite ; **fusionner et centrer** ; renvoyer à la ligne |
| **Format des nombres** | Nombre (séparateur de milliers, décimales), **monétaire** (DH), **pourcentage**, date |
| **Bordures et remplissage** | Encadrer le tableau, colorer les en-têtes |
| **Largeur / hauteur** | Ajuster les colonnes (double-clic sur la séparation) |
| **Mise en forme conditionnelle** | Colorer automatiquement les cellules selon une règle (ex. résultats négatifs en rouge) |

## IV. La gestion des feuilles et des fichiers

- **Renommer**, insérer, supprimer, déplacer une feuille (clic droit sur l'onglet) ;
- Insérer ou supprimer des **lignes** et des **colonnes** ;
- **Enregistrer** (Ctrl + S), **enregistrer sous** ;
- **Mise en page** : orientation, marges, en-tête et pied de page, **zone d'impression**, aperçu avant impression.
`,
    exercices: md`
### Exercice 1 — Références

1. Quelle est la référence de la cellule située à l'intersection de la colonne D et de la ligne 7 ?
2. Combien de cellules contient la plage B2:D5 ?
3. Que doit-on taper en premier pour saisir une formule ?

<details><summary>Voir le corrigé</summary>

1. **D7**.
2. 3 colonnes (B, C, D) × 4 lignes (2 à 5) = **12 cellules**.
3. Le signe **=**.

</details>

### Exercice 2 — Mise en forme d'une facture

Vous saisissez une facture dans Excel. Indiquez l'outil à utiliser pour : a) centrer le titre « FACTURE » sur les colonnes A à E ; b) afficher les montants avec 2 décimales et « DH » ; c) afficher le taux de TVA sous la forme 20 % ; d) encadrer le tableau.

<details><summary>Voir le corrigé</summary>

a) **Fusionner et centrer** ; b) format **Monétaire** (ou Nombre avec 2 décimales et le symbole DH) ; c) format **Pourcentage** ; d) **Bordures** (toutes les bordures).

</details>
`,
    resume: md`
## L'essentiel — Prise en main d'Excel

- **Classeur** (.xlsx) → **feuilles** → **cellules** (référence colonne + ligne : B4) ; **plage** A1:D10.
- Contenu : texte, nombre, date, **formule (commence par =)**.
- **Poignée de recopie** pour recopier formules et séries.
- **Mise en forme** : police, alignement, fusionner et centrer, formats (monétaire, %, date), bordures, **mise en forme conditionnelle**.
- **Mise en page** : orientation, marges, zone d'impression.
`,
    qcm: [
      { q: "Une formule Excel commence par :", choix: ["#", "=", "$", "@"], bonne: 1, explication: "Le signe égal indique un calcul." },
      { q: "La cellule à l'intersection de la colonne C et de la ligne 12 est :", choix: ["12C", "C12", "C:12", "L12C3"], bonne: 1, explication: "Lettre de colonne puis numéro de ligne." },
      { q: "La plage A1:A10 contient :", choix: ["2 cellules", "10 cellules", "11 cellules", "100 cellules"], bonne: 1, explication: "De la ligne 1 à la ligne 10 dans la colonne A." },
      { q: "Pour colorer automatiquement les valeurs négatives, on utilise :", choix: ["Le format Nombre", "La mise en forme conditionnelle", "Fusionner et centrer", "Le tri"], bonne: 1, explication: "La couleur dépend d'une règle." },
      { q: "L'extension d'un classeur Excel récent est :", choix: [".docx", ".xlsx", ".pptx", ".txt"], bonne: 1, explication: "Format de classeur Excel." },
    ],
  },

  "formules-et-fonctions-de-calcul": {
    cours: md`
## Introduction

La force du tableur est de **recalculer automatiquement** les résultats lorsqu'une donnée change. On utilise des **formules** et des **fonctions** prédéfinies.

## I. Les formules

Une formule combine des **références**, des **valeurs** et des **opérateurs** :

| Opérateur | Signification | Exemple |
|---|---|---|
| **+** **−** | Addition, soustraction | =B2+C2 |
| **\*** | Multiplication | =B2\*C2 |
| **/** | Division | =B2/C2 |
| **^** | Puissance | =B2^2 |
| **&** | Concaténation de textes | =A2&" "&B2 |

Les priorités mathématiques s'appliquent ; les **parenthèses** modifient l'ordre de calcul.

## II. Les références relatives et absolues

- **Référence relative** (ex. **B2**) : elle s'**adapte** lorsqu'on recopie la formule ;
- **Référence absolue** (ex. <code>&#36;B&#36;2</code>) : elle reste **fixe** lors de la recopie. On l'utilise pour une valeur unique comme un **taux de TVA** placé dans une cellule ;
- **Référence mixte** : <code>&#36;B2</code> (colonne fixe) ou <code>B&#36;2</code> (ligne fixe).

La touche **F4** permet de passer d'un type de référence à l'autre.

**Exemple** : le taux de TVA est en **F1** ; la TVA de la ligne 4 se calcule par <code>=D4\*&#36;F&#36;1</code> ; recopiée vers le bas, la formule devient <code>=D5\*&#36;F&#36;1</code>, <code>=D6\*&#36;F&#36;1</code>…

## III. Les fonctions de base

Syntaxe : **=NOM(arguments)**.

| Fonction | Rôle | Exemple |
|---|---|---|
| **SOMME** | Additionne | =SOMME(B2:B10) |
| **MOYENNE** | Moyenne arithmétique | =MOYENNE(C2:C20) |
| **MAX** / **MIN** | Plus grande / plus petite valeur | =MAX(D2:D30) |
| **NB** | Compte les cellules contenant des **nombres** | =NB(B2:B50) |
| **NBVAL** | Compte les cellules **non vides** | =NBVAL(A2:A50) |
| **ARRONDI** | Arrondit à n décimales | =ARRONDI(E2;2) |
| **AUJOURDHUI** | Date du jour | =AUJOURDHUI() |

Dans la version française, les arguments sont séparés par un **point-virgule (;)**.

## IV. Les messages d'erreur

| Erreur | Cause |
|---|---|
| **#DIV/0!** | Division par zéro |
| **#NOM?** | Nom de fonction mal écrit |
| **#VALEUR!** | Type de donnée incorrect (texte dans un calcul) |
| **#REF!** | Référence à une cellule supprimée |
| **######** | Colonne trop étroite pour afficher la valeur |

## V. Applications en gestion

- **Facture** : montant HT $=$ quantité × prix unitaire ; TVA $=$ HT × taux ; TTC $=$ HT + TVA ;
- **Tableau d'amortissement** : annuité $=$ VO × taux ; cumul ; VNA ;
- **État de paie** : salaire brut, cotisations, salaire net.
`,
    exercices: md`
### Exercice 1 — Facture

| | A | B | C | D | E | F |
|---|---|---|---|---|---|---|
| 1 | | | | | Taux TVA | 20 % |
| 3 | Article | Quantité | Prix unitaire | Montant HT | TVA | TTC |
| 4 | Chaises | 10 | 450 | | | |
| 5 | Tables | 4 | 1 200 | | | |
| 7 | Total | | | | | |

Écrivez les formules des cellules D4, E4, F4 (recopiables vers le bas) et D7.

<details><summary>Voir le corrigé</summary>

- **D4** : =B4\*C4
- **E4** : <code>=D4\*&#36;F&#36;1</code> (référence absolue au taux)
- **F4** : =D4+E4
- **D7** : =SOMME(D4:D5)

Résultats : D4 = 4 500 ; E4 = 900 ; F4 = 5 400 ; D5 = 4 800 ; D7 = 9 300.

</details>

### Exercice 2 — Statistiques d'une classe

Les notes de 30 élèves sont en C2:C31. Écrivez les formules pour obtenir : la moyenne, la note la plus haute, la note la plus basse, le nombre de notes saisies, la moyenne arrondie à 2 décimales.

<details><summary>Voir le corrigé</summary>

=MOYENNE(C2:C31) ; =MAX(C2:C31) ; =MIN(C2:C31) ; =NB(C2:C31) ; =ARRONDI(MOYENNE(C2:C31);2).

</details>
`,
    resume: md`
## L'essentiel — Formules et fonctions

- Opérateurs : + − \* / ^ & ; parenthèses pour les priorités.
- **Relative** (B2) s'adapte ; **absolue** (<code>&#36;B&#36;2</code>) reste fixe ; **mixte** (<code>&#36;B2</code>, <code>B&#36;2</code>) ; touche **F4**.
- Fonctions : **SOMME, MOYENNE, MAX, MIN, NB, NBVAL, ARRONDI, AUJOURDHUI** ; séparateur **;**.
- Erreurs : #DIV/0!, #NOM?, #VALEUR!, #REF!, ######.
- Applications : facture (HT, TVA, TTC), amortissements, paie.
`,
    qcm: [
      { q: "Pour qu'une référence ne change pas lors de la recopie, on écrit :", choix: ["B2", "$B$2", "B$", "#B2"], bonne: 1, explication: "Référence absolue." },
      { q: "La fonction qui compte les cellules non vides est :", choix: ["NB", "NBVAL", "SOMME", "COMPTE"], bonne: 1, explication: "NB ne compte que les nombres." },
      { q: "L'erreur #DIV/0! signifie :", choix: ["Nom de fonction inconnu", "Division par zéro", "Colonne trop étroite", "Référence supprimée"], bonne: 1, explication: "Le diviseur est nul ou vide." },
      { q: "=SOMME(A1:A4) avec A1=2, A2=5, A3=3, A4=10 donne :", choix: ["10", "20", "18", "4"], bonne: 1, explication: "2 + 5 + 3 + 10 = 20." },
      { q: "La touche qui change le type de référence est :", choix: ["F2", "F4", "F9", "Échap"], bonne: 1, explication: "F4 alterne relative, absolue et mixte." },
    ],
  },

  "fonctions-logiques-et-de-recherche": {
    cours: md`
## Introduction

Les fonctions **logiques** permettent au tableur de **prendre des décisions** (si… alors… sinon), et les fonctions de **recherche** vont chercher une information dans un tableau.

## I. La fonction SI

$$\text{=SI(condition ; valeur si vrai ; valeur si faux)}$$

**Opérateurs de comparaison** : = ; <> (différent) ; > ; < ; >= ; <=.

**Exemples** :

- =SI(C2>=10;"Admis";"Ajourné")
- Remise de 5 % si le montant dépasse 10 000 DH : =SI(D2>10000;D2\*5%;0)

Le texte est toujours placé entre **guillemets**.

### Les SI imbriqués

Pour plus de deux cas, on place un SI dans un autre :

=SI(C2>=16;"Très bien";SI(C2>=14;"Bien";SI(C2>=12;"Assez bien";SI(C2>=10;"Passable";"Ajourné"))))

## II. Les fonctions ET et OU

- **ET(cond1;cond2)** : vrai si **toutes** les conditions sont vraies ;
- **OU(cond1;cond2)** : vrai si **au moins une** condition est vraie.

**Exemple** : prime de 500 DH si l'ancienneté est d'au moins 5 ans **et** l'évaluation au moins égale à 3 :
=SI(ET(B2>=5;C2>=3);500;0)

## III. Les fonctions conditionnelles de calcul

| Fonction | Rôle | Exemple |
|---|---|---|
| **NB.SI** | Compte les cellules qui respectent un critère | =NB.SI(C2:C31;">=10") |
| **SOMME.SI** | Additionne les valeurs qui respectent un critère | =SOMME.SI(B2:B50;"Casablanca";D2:D50) |
| **MOYENNE.SI** | Moyenne des valeurs qui respectent un critère | =MOYENNE.SI(B2:B50;"Rabat";D2:D50) |

## IV. La fonction de recherche RECHERCHEV

Elle cherche une valeur dans la **première colonne** d'un tableau et renvoie la valeur d'une autre colonne de la même ligne :

$$\text{=RECHERCHEV(valeur cherchée ; table ; n° de colonne ; valeur proche)}$$

- **valeur proche** : **FAUX** (ou 0) pour une correspondance **exacte** (code article, matricule) ; **VRAI** (ou 1) pour une recherche par **tranches** (barème), la première colonne devant alors être triée par ordre croissant.

**Exemple** : un catalogue en A2:C100 (code, désignation, prix). Le prix de l'article dont le code est en F2 : <code>=RECHERCHEV(F2;&#36;A&#36;2:&#36;C&#36;100;3;FAUX)</code>.

Les versions récentes d'Excel proposent aussi **RECHERCHEX**, plus souple.
`,
    exercices: md`
### Exercice 1 — Commission des vendeurs

Le CA de chaque vendeur est en colonne C (à partir de C2). La commission est de 3 % si le CA est inférieur à 100 000 DH, de 5 % sinon.

1. Écrivez la formule de la commission en D2.
2. Écrivez la formule qui compte les vendeurs ayant dépassé 100 000 DH (plage C2:C21).

<details><summary>Voir le corrigé</summary>

1. =SI(C2<100000;C2\*3%;C2\*5%)
2. =NB.SI(C2:C21;">100000")

</details>

### Exercice 2 — RECHERCHEV et barème

Un barème de remise est placé en H2:I5 : 0 → 0 % ; 5 000 → 2 % ; 20 000 → 5 % ; 50 000 → 8 %. Le montant de la commande est en B2.

1. Écrivez la formule qui donne le taux de remise.
2. Quel taux obtient une commande de 27 500 DH ?

<details><summary>Voir le corrigé</summary>

1. <code>=RECHERCHEV(B2;&#36;H&#36;2:&#36;I&#36;5;2;VRAI)</code> (recherche par tranches, première colonne triée).
2. 27 500 est compris entre 20 000 et 50 000 → **5 %**.

</details>
`,
    resume: md`
## L'essentiel — Fonctions logiques et de recherche

- **SI(condition ; si vrai ; si faux)** ; texte entre guillemets ; SI **imbriqués** pour plusieurs cas.
- **ET** : toutes les conditions ; **OU** : au moins une.
- **NB.SI, SOMME.SI, MOYENNE.SI** : calculs selon un critère.
- **RECHERCHEV(valeur ; table ; n° colonne ; FAUX/VRAI)** : FAUX = exacte ; VRAI = par tranches (1ʳᵉ colonne triée).
- Table de recherche en **référence absolue** (<code>&#36;A&#36;2:&#36;C&#36;100</code>).
`,
    qcm: [
      { q: "=SI(A1>=10;\"Admis\";\"Ajourné\") avec A1 = 9,5 affiche :", choix: ["Admis", "Ajourné", "9,5", "Erreur"], bonne: 1, explication: "La condition est fausse." },
      { q: "ET(A1>0;B1>0) est vrai si :", choix: ["Une des deux cellules est positive", "Les deux cellules sont positives", "Aucune n'est positive", "A1 = B1"], bonne: 1, explication: "ET exige toutes les conditions." },
      { q: "Pour compter les notes supérieures ou égales à 10, on utilise :", choix: ["SOMME.SI", "NB.SI", "MOYENNE", "RECHERCHEV"], bonne: 1, explication: "=NB.SI(plage;\">=10\")." },
      { q: "Dans RECHERCHEV, l'argument FAUX signifie :", choix: ["Recherche par tranches", "Correspondance exacte", "Recherche dans la dernière colonne", "Tri décroissant"], bonne: 1, explication: "Utile pour un code article." },
      { q: "RECHERCHEV cherche la valeur dans :", choix: ["La dernière colonne", "La première colonne de la table", "Toutes les colonnes", "La première ligne"], bonne: 1, explication: "Puis renvoie la colonne indiquée." },
    ],
  },

  "graphiques-et-tableaux-de-synthese": {
    cours: md`
## Introduction

Un bon graphique permet de **visualiser** rapidement des données (évolution des ventes, répartition des charges). Les outils de **tri**, de **filtre** et les **tableaux croisés dynamiques** permettent de **synthétiser** de grandes quantités de données.

## I. Les graphiques

### 1. Création

Sélectionner les données (avec les en-têtes) → onglet **Insertion** → choisir le type de graphique.

### 2. Les principaux types

| Type | Usage | Exemple |
|---|---|---|
| **Histogramme** (colonnes) | Comparer des valeurs | CA par vendeur |
| **Barres** | Comparer avec des libellés longs | Ventes par produit |
| **Courbe** | Montrer une **évolution** dans le temps | CA mensuel sur un an |
| **Secteurs** (camembert) | Montrer une **répartition** (parts d'un total) | Structure des charges |
| **Nuage de points** | Relation entre deux variables | Publicité / ventes |

### 3. Les éléments d'un graphique

**Titre**, **axes** (abscisses et ordonnées) et leurs titres, **légende**, **étiquettes de données**, **quadrillage**. Ils se modifient depuis les onglets **Création de graphique** et **Format**.

## II. Le tri et le filtre

- **Trier** (onglet Données) : classer les lignes par ordre croissant ou décroissant selon une ou plusieurs colonnes (ex. par ville puis par CA) ;
- **Filtrer** : afficher uniquement les lignes qui respectent un critère (ex. les clients de Marrakech) grâce aux flèches de filtre ;
- **Sous-totaux** : calculer des totaux par groupe après un tri.

## III. Le tableau croisé dynamique (TCD)

Le **TCD** résume une liste de données en croisant plusieurs critères.

**Création** : cliquer dans la liste → **Insertion → Tableau croisé dynamique** → placer les champs dans les zones :

| Zone | Rôle | Exemple |
|---|---|---|
| **Lignes** | Critère affiché en lignes | Vendeur |
| **Colonnes** | Critère affiché en colonnes | Mois |
| **Valeurs** | Donnée calculée (somme, moyenne, nombre) | Somme du CA |
| **Filtres** | Critère de filtre global | Ville |

Le TCD se **met à jour** (Actualiser) lorsque les données sources changent.
`,
    exercices: md`
### Exercice 1 — Choisir le graphique

Quel type de graphique choisir pour représenter : a) l'évolution du CA mensuel d'une entreprise sur 12 mois ; b) la répartition des charges (personnel 45 %, achats 35 %, autres 20 %) ; c) la comparaison des ventes de 5 vendeurs ?

<details><summary>Voir le corrigé</summary>

a) **Courbe** ; b) **Secteurs** ; c) **Histogramme**.

</details>

### Exercice 2 — Tableau croisé dynamique

Une liste de ventes comporte les colonnes : Date, Vendeur, Ville, Produit, Montant. On veut obtenir le total des ventes par vendeur (en lignes) et par produit (en colonnes), avec la possibilité de choisir la ville.

Indiquez où placer chaque champ du TCD.

<details><summary>Voir le corrigé</summary>

- **Lignes** : Vendeur ;
- **Colonnes** : Produit ;
- **Valeurs** : Somme de Montant ;
- **Filtres** : Ville.

</details>
`,
    resume: md`
## L'essentiel — Graphiques et synthèse

- **Graphiques** (Insertion) : histogramme (comparer), courbe (évolution), secteurs (répartition), barres, nuage de points.
- Éléments : titre, axes, légende, étiquettes.
- **Trier**, **filtrer**, **sous-totaux** (onglet Données).
- **TCD** : zones Lignes, Colonnes, **Valeurs** (somme, moyenne…), Filtres ; **Actualiser** après modification.
`,
    qcm: [
      { q: "Pour montrer l'évolution des ventes sur 12 mois, on choisit :", choix: ["Un secteur", "Une courbe", "Un nuage de points", "Un tableau"], bonne: 1, explication: "La courbe représente une évolution dans le temps." },
      { q: "Un graphique en secteurs montre :", choix: ["Une évolution", "Une répartition d'un total", "Une corrélation", "Un classement alphabétique"], bonne: 1, explication: "Chaque part est une fraction du total." },
      { q: "Pour afficher uniquement les clients d'une ville, on utilise :", choix: ["Le tri", "Le filtre", "Un graphique", "La fusion"], bonne: 1, explication: "Le filtre masque les autres lignes." },
      { q: "Dans un TCD, la zone qui contient la donnée calculée est :", choix: ["Lignes", "Colonnes", "Valeurs", "Filtres"], bonne: 2, explication: "Par exemple la somme des montants." },
      { q: "Après modification des données sources, le TCD doit être :", choix: ["Supprimé", "Actualisé", "Imprimé", "Trié"], bonne: 1, explication: "Il ne se met pas toujours à jour automatiquement." },
    ],
  },

  "creation-et-parametrage-d-un-dossier": {
    cours: md`
## Introduction

Un **logiciel de comptabilité** automatise la tenue des comptes : on saisit les écritures une seule fois, et le logiciel produit automatiquement les journaux, le grand livre, la balance et les états de synthèse. Le programme étudie **Sage SAARI Comptabilité** (aujourd'hui Sage 100 Comptabilité), très utilisé au Maroc.

## I. Les avantages d'un logiciel comptable

- **Rapidité** et **fiabilité** des calculs (reports, totaux, soldes) ;
- **Contrôles automatiques** : une écriture déséquilibrée (débit ≠ crédit) est refusée ;
- **Éditions** instantanées : journaux, grand livre, balance, bilan, CPC ;
- **Recherche** et **lettrage** des comptes ;
- **Sauvegarde** et sécurité des données.

## II. Les menus principaux

| Menu | Contenu |
|---|---|
| **Fichier** | Nouveau dossier, ouvrir, paramètres de la société, sauvegarde, impression |
| **Édition** | Copier, coller, rechercher |
| **Structure** | **Plan comptable**, **plan tiers**, **codes journaux**, taux de taxes, banques |
| **Traitement** | **Saisie par pièce**, saisie des journaux, lettrage, rapprochement, clôture |
| **État** | **Journaux**, **grand livre**, **balance**, états de synthèse |

## III. La création d'un dossier

**Fichier → Nouveau** : l'assistant de création demande :

1. Le **nom** et l'emplacement du fichier comptable ;
2. Les **coordonnées de la société** : raison sociale, adresse, forme juridique, activité, identifiants fiscaux (identifiant fiscal, ICE, RC, CNSS…) ;
3. Les **dates de l'exercice** : début et fin (ex. du 01/01/2026 au 31/12/2026) ;
4. La **longueur des comptes** (nombre de caractères des comptes généraux, ex. 8) ;
5. La **monnaie** de tenue : le dirham (MAD).

## IV. Le paramétrage

**Fichier → À propos de…** (ou Paramètres société) permet de modifier les paramètres : identification, exercices, options de saisie, formats.

Après la création, on paramètre la **structure** : plan comptable, codes journaux et tiers (voir chapitre suivant).

## V. La sauvegarde

Il est indispensable de **sauvegarder régulièrement** le dossier (Fichier → Sauvegarde) sur un support externe ou un espace sécurisé, pour éviter la perte des données.
`,
    exercices: md`
### Exercice 1 — Informations de création

L'entreprise « Atlas Meubles SARL », Casablanca, commence son exercice le 1ᵉʳ janvier 2026. Listez les informations à saisir lors de la création du dossier.

<details><summary>Voir le corrigé</summary>

Nom du fichier (ex. ATLASMEUBLES) ; raison sociale : Atlas Meubles ; forme juridique : SARL ; adresse à Casablanca ; activité : fabrication et vente de meubles ; identifiants (IF, ICE, RC, CNSS) ; exercice du 01/01/2026 au 31/12/2026 ; longueur des comptes ; monnaie : dirham.

</details>

### Exercice 2 — Menus

Dans quel menu trouve-t-on : a) la création d'un compte fournisseur ; b) la saisie des factures d'achat ; c) l'impression de la balance ; d) la sauvegarde ?

<details><summary>Voir le corrigé</summary>

a) **Structure** (plan tiers) ; b) **Traitement** (saisie par pièce ou des journaux) ; c) **État** ; d) **Fichier**.

</details>
`,
    resume: md`
## L'essentiel — Création d'un dossier

- **Logiciel comptable** : rapidité, fiabilité, contrôles (débit = crédit), éditions automatiques.
- **Menus** : Fichier, Édition, **Structure** (plan comptable, tiers, journaux), **Traitement** (saisie, lettrage, clôture), **État** (journaux, grand livre, balance).
- **Création** (Fichier → Nouveau) : nom du fichier, société, identifiants, **dates d'exercice**, longueur des comptes, monnaie (MAD).
- **Sauvegarde** régulière indispensable.
`,
    qcm: [
      { q: "La saisie des écritures se trouve dans le menu :", choix: ["Fichier", "Structure", "Traitement", "État"], bonne: 2, explication: "Traitement → Saisie par pièce ou saisie des journaux." },
      { q: "Le plan comptable se paramètre dans le menu :", choix: ["Structure", "État", "Édition", "Fenêtre"], bonne: 0, explication: "Avec le plan tiers et les codes journaux." },
      { q: "Un logiciel comptable refuse une écriture si :", choix: ["Le libellé est long", "Le total débit est différent du total crédit", "La date est un lundi", "Le montant est rond"], bonne: 1, explication: "Principe de la partie double." },
      { q: "Lors de la création du dossier, on indique obligatoirement :", choix: ["Les dates de l'exercice", "Le nom des clients", "Le montant des ventes", "Le bilan"], bonne: 0, explication: "Le début et la fin de l'exercice comptable." },
      { q: "La balance s'imprime depuis le menu :", choix: ["Traitement", "État", "Structure", "Fichier"], bonne: 1, explication: "Menu des éditions comptables." },
    ],
  },

  "plan-comptable-journaux-et-tiers": {
    cours: md`
## Introduction

Avant de saisir les écritures, il faut créer la **structure** du dossier : le **plan comptable**, les **codes journaux** et le **plan tiers** (clients et fournisseurs).

## I. Le plan comptable

**Structure → Plan comptable**. Chaque compte général comporte :

- un **numéro** conforme au **CGNC** (ex. 61110000 Achats de marchandises, 71110000 Ventes de marchandises au Maroc, 51410000 Banques) ;
- un **intitulé** ;
- un **type** : **détail** (utilisable en saisie) ou **total** (regroupement) ;
- une **nature** (charge, produit, client, fournisseur, banque, caisse…) ;
- éventuellement l'option **lettrage** (pour les comptes de tiers).

On peut créer les comptes un par un ou **importer** un plan comptable standard.

## II. Les codes journaux

**Structure → Codes journaux**. On crée un journal par type d'opération :

| Code | Intitulé | Type | Compte de trésorerie |
|---|---|---|---|
| **AC** | Achats | Achats | — |
| **VT** | Ventes | Ventes | — |
| **BQ** | Banque | Trésorerie | 5141 Banques |
| **CA** | Caisse | Trésorerie | 5161 Caisse |
| **OD** | Opérations diverses | Général | — |
| **AN** | À-nouveaux | Situation | — |

Pour un journal de **trésorerie**, on associe le compte de trésorerie : le logiciel génère automatiquement la contrepartie.

## III. Le plan tiers

**Structure → Plan tiers**. Chaque **tiers** (client ou fournisseur) a :

- un **numéro de compte tiers** (ex. CLALAMI, FRSOTEX) ;
- un **intitulé** (nom) ;
- un **type** : client, fournisseur, salarié, autre ;
- un **compte collectif** de rattachement : **3421 Clients** ou **4411 Fournisseurs** ;
- les coordonnées : adresse, téléphone, ICE, conditions de règlement.

**Principe** : dans la comptabilité générale, tous les clients sont regroupés dans le compte **collectif 3421** ; le plan tiers permet de suivre **individuellement** chaque client (comptabilité auxiliaire).

## IV. Les taux de taxes

**Structure → Taux de taxes** : on crée les taux de TVA (20 % et 10 %) avec leurs comptes (4455 TVA facturée, 34552 TVA récupérable sur charges, 34551 sur immobilisations), pour que le logiciel calcule automatiquement la TVA lors de la saisie.
`,
    exercices: md`
### Exercice 1 — Créer la structure

L'entreprise vend des marchandises au client « Bennani » et achète auprès du fournisseur « Sotex ». Elle règle par banque et par caisse.

Indiquez : les comptes généraux à créer, les codes journaux et les comptes tiers.

<details><summary>Voir le corrigé</summary>

- **Comptes généraux** : 61110000 Achats de marchandises ; 71110000 Ventes de marchandises au Maroc ; 34210000 Clients ; 44110000 Fournisseurs ; 34552000 TVA récupérable sur charges ; 44550000 TVA facturée ; 51410000 Banques ; 51610000 Caisse.
- **Codes journaux** : AC (achats), VT (ventes), BQ (banque, compte 5141), CA (caisse, compte 5161), OD.
- **Tiers** : CLBENNANI (client, collectif 3421) ; FRSOTEX (fournisseur, collectif 4411).

</details>

### Exercice 2 — Compte collectif

Pourquoi utilise-t-on un compte collectif 3421 et un plan tiers au lieu de créer un compte général par client ?

<details><summary>Voir le corrigé</summary>

Pour garder un **plan comptable général court et lisible** (un seul compte Clients au bilan) tout en suivant le **détail** de chaque client dans la comptabilité auxiliaire : solde de chaque client, relances, lettrage des factures et des règlements.

</details>
`,
    resume: md`
## L'essentiel — Plan comptable, journaux et tiers

- **Plan comptable** (Structure) : numéro CGNC, intitulé, type (détail / total), nature.
- **Codes journaux** : AC, VT, BQ (5141), CA (5161), OD, AN ; journaux de trésorerie avec contrepartie automatique.
- **Plan tiers** : compte tiers, type, **compte collectif** (3421 clients, 4411 fournisseurs), coordonnées.
- **Taux de taxes** : 20 % et 10 %, comptes 4455, 34552, 34551.
`,
    qcm: [
      { q: "Le compte collectif des clients est :", choix: ["4411", "3421", "5141", "7111"], bonne: 1, explication: "Tous les comptes clients y sont rattachés." },
      { q: "Le journal de banque est de type :", choix: ["Achats", "Ventes", "Trésorerie", "Situation"], bonne: 2, explication: "Il est associé au compte 5141." },
      { q: "Le plan tiers permet :", choix: ["De calculer l'IS", "De suivre individuellement chaque client et fournisseur", "D'imprimer le bilan", "De créer les journaux"], bonne: 1, explication: "C'est la comptabilité auxiliaire." },
      { q: "Le code journal OD signifie :", choix: ["Ordre de débit", "Opérations diverses", "Opérations douanières", "Ouverture du dossier"], bonne: 1, explication: "Pour les écritures qui ne relèvent pas d'un autre journal." },
      { q: "Un compte de type « total » :", choix: ["Sert à la saisie", "Regroupe d'autres comptes", "Est un compte tiers", "Est un journal"], bonne: 1, explication: "Seuls les comptes de détail sont mouvementés en saisie." },
    ],
  },

  "saisie-des-ecritures-comptables": {
    cours: md`
## Introduction

Une fois la structure créée, on enregistre les opérations de l'entreprise à partir des **pièces justificatives** (factures, relevés bancaires, bons de caisse).

## I. Les modes de saisie

| Mode | Menu | Principe |
|---|---|---|
| **Saisie par pièce** | Traitement → Saisie par pièce | On saisit une pièce complète (une écriture équilibrée), quel que soit le journal |
| **Saisie des journaux** | Traitement → Saisie des journaux | On choisit un journal et une période (mois), puis on saisit les écritures de ce journal |

## II. Les zones d'une ligne d'écriture

| Zone | Contenu |
|---|---|
| **Jour / date** | Date de l'opération |
| **N° de pièce** | Numéro de la facture, du chèque… |
| **N° de compte général** | Compte du CGNC |
| **N° de compte tiers** | Pour les comptes collectifs (client, fournisseur) |
| **Libellé** | Description de l'opération |
| **Débit / Crédit** | Montants |

Le logiciel affiche en permanence le **solde** de l'écriture ; il n'accepte de passer à une nouvelle pièce que si l'écriture est **équilibrée**.

## III. Exemples d'écritures

**Facture d'achat n° F215** du fournisseur Sotex : 20 000 DH HT, TVA 20 % (journal AC) :

| Compte | Tiers | Libellé | Débit | Crédit |
|---|---|---|---|---|
| 61110000 | | Fact. F215 Sotex | 20 000 | |
| 34552000 | | Fact. F215 Sotex | 4 000 | |
| 44110000 | FRSOTEX | Fact. F215 Sotex | | 24 000 |

**Règlement par chèque** du fournisseur (journal BQ ; la contrepartie 5141 est générée automatiquement) :

| Compte | Tiers | Libellé | Débit | Crédit |
|---|---|---|---|---|
| 44110000 | FRSOTEX | Règlt F215 chq n° 0012 | 24 000 | |
| 51410000 | | Règlt F215 chq n° 0012 | | 24 000 |

## IV. La modification et la suppression

Tant que la période n'est pas **clôturée**, une écriture peut être **modifiée** ou **supprimée**. Après clôture, on corrige par une **écriture d'extourne** ou de régularisation.

## V. Le lettrage

Le **lettrage** consiste à **rapprocher** dans un compte de tiers les écritures qui se **compensent** (une facture et son règlement) en leur attribuant une même lettre (A, B…). Il permet de connaître les factures **non réglées**.

## VI. Le rapprochement bancaire

Il consiste à **comparer** le compte 5141 de l'entreprise avec le **relevé bancaire** pour expliquer les écarts (chèques non encore encaissés, frais bancaires non enregistrés…).
`,
    exercices: md`
### Exercice 1 — Saisie d'une vente (TVA 20 %)

Le 12/03/2026, facture de vente n° V089 au client Bennani : marchandises 35 000 DH HT, remise 5 %. Présentez la saisie dans le journal VT.

<details><summary>Voir le corrigé</summary>

Net HT $= 35\,000 \times 95\% = 33\,250$ DH ; TVA $= 6\,650$ DH ; TTC $= 39\,900$ DH.

| Compte | Tiers | Libellé | Débit | Crédit |
|---|---|---|---|---|
| 34210000 | CLBENNANI | Fact. V089 Bennani | 39 900 | |
| 71110000 | | Fact. V089 Bennani | | 33 250 |
| 44550000 | | Fact. V089 Bennani | | 6 650 |

(La remise figurant sur la facture de vente est directement déduite ; on enregistre le net commercial.)

</details>

### Exercice 2 — Lettrage

Le compte du client Bennani présente : facture V089 de 39 900 DH (débit), facture V102 de 12 000 DH (débit), règlement de 39 900 DH (crédit).

1. Quelles lignes lettrer ?
2. Quel est le solde non lettré ?

<details><summary>Voir le corrigé</summary>

1. La facture **V089** et le **règlement de 39 900 DH** (même lettre A).
2. Reste non lettré : la facture **V102**, soit **12 000 DH** encore dus par le client.

</details>
`,
    resume: md`
## L'essentiel — Saisie des écritures

- **Saisie par pièce** ou **saisie des journaux** (menu Traitement).
- Zones : date, n° de pièce, compte général, **compte tiers**, libellé, débit, crédit.
- Écriture **équilibrée** obligatoire ; journal de trésorerie → contrepartie automatique.
- Correction : modification avant clôture ; **extourne** après.
- **Lettrage** : rapprocher facture et règlement dans un compte de tiers.
- **Rapprochement bancaire** : compte 5141 / relevé de banque.
`,
    qcm: [
      { q: "Le numéro de compte tiers est obligatoire lorsqu'on utilise :", choix: ["Un compte de charges", "Un compte collectif client ou fournisseur", "Un compte de produits", "Le compte de TVA"], bonne: 1, explication: "Pour affecter l'opération au bon client ou fournisseur." },
      { q: "Le lettrage permet de :", choix: ["Rédiger des lettres aux clients", "Rapprocher les factures et leurs règlements", "Calculer la TVA", "Imprimer le bilan"], bonne: 1, explication: "Il fait apparaître ce qui reste à payer ou à encaisser." },
      { q: "Une facture d'achat se saisit dans le journal :", choix: ["VT", "AC", "BQ", "AN"], bonne: 1, explication: "Journal des achats." },
      { q: "Après la clôture d'une période, une erreur se corrige par :", choix: ["Suppression directe", "Une écriture d'extourne ou de régularisation", "Un nouveau dossier", "Rien"], bonne: 1, explication: "Les écritures clôturées ne sont plus modifiables." },
      { q: "Le rapprochement bancaire compare le compte 5141 avec :", choix: ["La balance", "Le relevé bancaire", "Le grand livre des clients", "Le bilan"], bonne: 1, explication: "Pour expliquer les écarts." },
    ],
  },

  "editions-grand-livre-et-balance": {
    cours: md`
## Introduction

Le principal intérêt d'un logiciel comptable est de produire **automatiquement** les documents comptables à partir des écritures saisies.

## I. Les journaux

**État → Journaux** : liste chronologique des écritures d'un journal (achats, ventes, banque…) pour une période, avec les totaux débit et crédit. Le **journal général** (ou centralisateur) récapitule les totaux de tous les journaux.

## II. Le grand livre

**État → Grand livre** : il présente, **compte par compte**, toutes les écritures qui ont mouvementé chaque compte, avec les totaux et le **solde**.

| Date | Journal | Pièce | Libellé | Débit | Crédit | Solde |
|---|---|---|---|---|---|---|

On distingue :

- le **grand livre général** (comptes généraux) ;
- le **grand livre des tiers** (détail par client et par fournisseur).

Il permet de **vérifier** et d'**analyser** les mouvements d'un compte.

## III. La balance

**État → Balance** : tableau récapitulatif de **tous les comptes** avec leurs totaux et leurs soldes.

| N° compte | Intitulé | Total débit | Total crédit | Solde débiteur | Solde créditeur |
|---|---|---|---|---|---|

**Contrôles** :

$$\sum \text{débits} = \sum \text{crédits} \qquad \sum \text{soldes débiteurs} = \sum \text{soldes créditeurs}$$

Types : **balance générale**, **balance des tiers** (clients, fournisseurs), **balance âgée** (créances classées selon leur ancienneté).

## IV. Les états de synthèse

À partir de la balance après inventaire, le logiciel produit le **bilan**, le **CPC** et l'**ESG** selon le modèle du CGNC.

## V. Les options d'édition

Pour chaque état, on choisit : la **période** (du… au…), les **comptes** (de… à…), le **format** (détaillé ou résumé), la sortie (**aperçu** à l'écran, **imprimante**, **fichier** PDF ou tableur).

## VI. La clôture

- **Clôture mensuelle** : elle **verrouille** les écritures d'une période ;
- **Clôture de l'exercice** : après les travaux d'inventaire, elle solde les comptes de gestion, génère les **à-nouveaux** (journal AN) de l'exercice suivant et interdit toute modification de l'exercice clôturé.
`,
    exercices: md`
### Exercice 1 — Lire une balance (données fictives)

| Compte | Total débit | Total crédit |
|---|---|---|
| 3421 Clients | 180 000 | 132 000 |
| 4411 Fournisseurs | 90 000 | 126 000 |
| 5141 Banques | 210 000 | 150 000 |
| 6111 Achats de marchandises | 105 000 | 0 |
| 7111 Ventes de marchandises | 0 | 177 000 |

Calculez le solde de chaque compte et vérifiez l'égalité des soldes.

<details><summary>Voir le corrigé</summary>

| Compte | Solde débiteur | Solde créditeur |
|---|---|---|
| 3421 | 48 000 | |
| 4411 | | 36 000 |
| 5141 | 60 000 | |
| 6111 | 105 000 | |
| 7111 | | 177 000 |
| **Total** | **213 000** | **213 000** |

Totaux des mouvements : débit $= 585\,000$ ; crédit $= 585\,000$. Les égalités sont vérifiées.

</details>

### Exercice 2 — Quel document ?

Quel état consulter pour : a) voir toutes les opérations du compte Banque en mars ; b) vérifier l'équilibre de la comptabilité ; c) connaître les factures d'un client non payées depuis plus de 90 jours ; d) voir toutes les ventes du mois dans l'ordre chronologique ?

<details><summary>Voir le corrigé</summary>

a) **Grand livre** (compte 5141) ; b) **Balance générale** ; c) **Balance âgée** des clients ; d) **Journal des ventes**.

</details>
`,
    resume: md`
## L'essentiel — Éditions

- **Journaux** : écritures par ordre chronologique ; journal centralisateur.
- **Grand livre** : toutes les écritures compte par compte, avec soldes (général et tiers).
- **Balance** : totaux et soldes de tous les comptes ; contrôles : Σ débits = Σ crédits ; Σ soldes débiteurs = Σ soldes créditeurs ; balance âgée.
- **États de synthèse** : bilan, CPC, ESG.
- Options : période, comptes, format, sortie (écran, imprimante, PDF).
- **Clôture** mensuelle et annuelle (à-nouveaux).
`,
    qcm: [
      { q: "Le document qui présente les écritures compte par compte est :", choix: ["Le journal", "Le grand livre", "La balance", "Le bilan"], bonne: 1, explication: "Chaque compte avec ses mouvements et son solde." },
      { q: "Dans une balance équilibrée :", choix: ["Σ débits = Σ crédits", "Σ débits > Σ crédits", "Le solde est toujours nul", "Les charges = les produits"], bonne: 0, explication: "Conséquence de la partie double." },
      { q: "La balance âgée classe les créances selon :", choix: ["Leur montant", "Leur ancienneté", "Leur ville", "Leur TVA"], bonne: 1, explication: "Utile pour les relances." },
      { q: "Le journal AN contient :", choix: ["Les achats", "Les à-nouveaux de l'exercice", "Les ventes annulées", "Les amortissements"], bonne: 1, explication: "Les soldes d'ouverture." },
      { q: "Un compte avec 50 000 au débit et 30 000 au crédit a un solde :", choix: ["Créditeur de 20 000", "Débiteur de 20 000", "Nul", "Débiteur de 80 000"], bonne: 1, explication: "50 000 − 30 000 = 20 000 débiteur." },
    ],
  },
};
