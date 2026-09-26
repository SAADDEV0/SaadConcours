# Banque de prompts — SaadConcours

Ce fichier transforme une commande courte (« ajoute 10 concours », « supprime le cours X »,
« corrige l'énoncé de Y »…) en procédure complète. **Claude : quand une demande correspond à une
ligne du tableau ci-dessous, lis la recette correspondante et exécute-la de bout en bout sans
redemander ce qui est déjà défini ici.** Ne pose une question que si la recette dit « demander ».

---

## 0. Sommaire des commandes

| Ce que je tape (exemples) | Recette |
|---|---|
| `ajoute 10 concours` · `ajoute 5 concours Marrakech` · `ajoute des concours MRH 2024` | [C1](#c1--ajouter-n-concours-depuis-internet) |
| `ajoute ce concours` + photo / PDF / lien | [C2](#c2--ajouter-un-concours-fourni-photo-pdf-lien) |
| `ajoute 10 concours licence d'excellence` · `ajoute des LE CCA` | [C9](#c9--concours-de-licence-dexcellence) |
| `corrige le concours X` · `ajoute les corrigés manquants` · `ajoute 10 corrigés` | [C3](#c3--rédiger-ou-refaire-un-corrigé) |
| `corrige l'énoncé de X` · `vérifie l'extrait de X` · `retranscris X` | [C4](#c4--corriger-un-énoncé--un-extrait) |
| `modifie le concours X : …` | [C5](#c5--modifier-un-concours) |
| `supprime le concours X` | [C6](#c6--supprimer-un-concours) |
| `crée un concours blanc <master> <fac>` | [C7](#c7--concours-blanc) |
| `nettoie la base concours` · `normalise les villes / établissements` | [C8](#c8--nettoyer--normaliser-la-base-concours) |
| `ajoute le cours <module>` · `ajoute les cours du S3` | [K1](#k1--ajouter-un-cours-licence-fsjes) |
| `complète le cours X par chapitres` · `ajoute QCM / résumés au cours X` | [K2](#k2--compléter-un-cours-par-chapitres) |
| `modifie / réécris le cours X` · `supprime le cours X` | [K3](#k3--modifier-ou-supprimer-un-cours) |
| `rédige les chapitres Bac de <matière> <niveau>` | [B1](#b1--rédiger-des-chapitres-bac) |
| `ajoute les nationaux (bac)` · `ajoute les nationaux 2026` | [B2](#b2--examens-nationaux-2ème-bac) |
| `ajoute une évaluation <module>` · `ajoute un QCM de 100 questions en X` | [E1](#e1--ajouter-une-évaluation-qcm) |
| `modifie / supprime l'évaluation X` · `corrige la question N de X` | [E2](#e2--modifier-ou-supprimer-une-évaluation) |
| `ajoute un article sur …` · `ajoute 3 articles blog` | [A1](#a1--ajouter-un-article-de-blog) |
| `mets à jour l'article X` · `supprime l'article X` | [A2](#a2--modifier-ou-supprimer-un-article) |
| `ajoute une news …` · `supprime la news X` · `lance le scraper news` | [N1](#n1--news-concours-ouverts) |
| `ajoute un cahier à la boutique` · `mets en promo le cahier X` · `retire le cahier X` | [V1](#v1--boutique-cahiers-gumroad) |
| `supprime X` (sans préciser le type) | [S1](#s1--suppression-générique) |
| `état des lieux` · `audit du contenu` · `qu'est-ce qui manque ?` | [M1](#m1--état-des-lieux-du-contenu) |
| `vérifie` · `publie` · `push` · `déploie` | [P1](#p1--vérifier-committer-publier) |

Un nombre dans la commande (« 10 concours », « 3 articles ») = quantité à livrer. Un filtre
(ville, faculté, filière, année, semestre) restreint la sélection. Sans filtre : appliquer les
**priorités par défaut** de la recette.

---

## 1. Règles communes (valent pour toutes les recettes)

### 1.1 Où vivent les données
**GitHub est la base de données.** Le site lit `public/data/*.json` en direct depuis le dépôt ;
`/admin` y écrit par commits. Il n'y a pas d'autre base.

| Contenu | Fichier(s) | Taxonomie / conventions |
|---|---|---|
| Concours | `public/data/concours.json` + miroirs `public/data/extraits/<id>.md`, `public/data/corriges/<id>.md` + scans `public/images/<Ville>/<id>/` | `lib/taxonomy.js` |
| Cours Licence FSJES | `public/data/cours.json` + compléments `lib/fsjesContenu/<module>.js` (déclarés dans `lib/fsjesContenu/index.js`) | `lib/coursTaxonomy.js`, découpage : `lib/fsjesChapitres.js` |
| Cours Bac | `lib/bacContenu/<niveau>/<fichier>.js` (déclarés dans `lib/bacContenu/index.js`) ; surcharges admin dans `public/data/bac.json` | `lib/bacProgramme.js` |
| Examens nationaux Bac | `lib/bacNationaux.json` (catalogue) + PDF `public/bac/nationaux/<se|sgc|commun>/<matière>/<année>-<session>-<sujet|corrige>.pdf` | `lib/bacNationaux.js` |
| Évaluations (QCM) | `public/data/quiz.json` | — |
| Blog | `public/data/blog.json` | `lib/blogTaxonomy.js`, FAQ : `app/_shared/faqSchema.js`, anti-doublon : `lib/blogDuplicates.js` |
| News | `public/data/news.json` (aussi écrit par `scripts/fetch_almaster.py`) | — |
| Boutique (cahiers Gumroad) | `public/data/boutique.json` + couvertures `public/images/boutique/<id>/` | `lib/boutique.js` |

### 1.2 Écrire dans les JSON
- Toujours via un petit script Node (dans le scratchpad), jamais à la main dans un fichier de 2,5 Mo :
  lire → `JSON.parse` → modifier → `fs.writeFileSync(f, JSON.stringify(data, null, 2) + "\n")`.
  C'est le format canonique du dépôt (LF, indentation 2 ; `core.autocrlf` gère le reste).
- Les longs Markdown (énoncé, corrigé, cours, article) : les rédiger d'abord dans des fichiers `.md`
  du scratchpad, puis les injecter par le script. Évite les erreurs d'échappement.
- Ajouter en **fin de tableau** (l'ordre = ordre d'ajout). Vérifier que l'`id` n'existe pas déjà.
- Après écriture : relire le JSON (`node -e "require('./public/data/X.json')"`) pour garantir qu'il parse.

### 1.3 Qualité du contenu
- Tout en **français** (sauf matières Bac en arabe / anglais), vouvoiement dans les corrigés,
  tutoiement autorisé dans le blog (c'est le ton existant).
- **Contexte marocain** systématique : CGNC/PCGE, CGI et loi de finances de l'année, DOC 1913,
  Constitution 2011, lois 17-95 / 5-96 / 15-89 / 09-08, Bank Al-Maghrib, AMMC, HCP, etc.
- Maths / formules en LaTeX `$...$` et `$$...$$` (rendu KaTeX), tableaux en Markdown.
- **Jamais de `$` pour une monnaie** : deux `$` dans un même paragraphe deviennent une formule KaTeX
  (« 500 000 $ (1 $ = 9 dh) » devient illisible). Écrire « USD » ou « dollars » (précédent : ACGSI Aïn Chock 2014).
- **Ne jamais inventer** un chiffre, une question ou une donnée illisible : écrire
  `[illisible sur le scan]` ou signaler l'hypothèse retenue. Si le sujet lui-même contient une
  erreur, la signaler et donner les deux lectures (précédent : CCAF 2019 Aïn Sebaâ).
- Vérifier chaque calcul d'un corrigé (refaire les calculs avec Node si besoin).

### 1.4 Ne pas casser le site
- Pas de page publique dynamique (`cookies()`, `headers()`, `searchParams`, `force-dynamic`,
  `revalidate` non nul) — voir README, section « une page publique n'invoque pas le Worker ».
- Ne pas toucher aux fichiers d'une autre tâche en cours (vérifier `git status` avant de commencer
  et ne committer **que** les fichiers de la recette).

### 1.5 Fin de recette (toujours)
1. Contrôles de la recette + `npm run lint` si du code JS a été touché.
2. **Commit** sur `main`, **uniquement les chemins de la recette** : `git commit -F msg.txt -- <chemins>`
   (et non `git add` + `git commit`), car l'index peut déjà contenir des fichiers indexés par une
   autre tâche en cours — ils partiraient dans le commit. Vérifier ensuite
   `git show --stat HEAD` : aucune ligne hors de la recette, aucune suppression inattendue.
   Message en français au style du dépôt :
   titre « Ajoute 10 concours d'accès aux masters de la FSJES Aïn Sebaâ », puis corps listant
   les éléments ajoutés et tout problème rencontré (sujet illisible, doublon évité…).
3. **Ne pas pousser** sauf si je dis « publie / push / déploie » (push sur `main` = déploiement
   en production sur Cloudflare) → recette [P1](#p1--vérifier-committer-publier).
4. Compte rendu court : ce qui a été ajouté (liste d'`id`), ce qui a été écarté et pourquoi.

### 1.6 AdSense : jamais de « low value content »
Le site a été refusé par AdSense pour « low value content ». Les causes, corrigées le 2026-09-24 :
289 pages d'examen réduites à un lien PDF, 172 pages de 1ère Bac « en préparation », des devoirs
« Bientôt », une boutique vide, une section news copiée automatiquement d'almaster-maroc.com.
**Un `noindex` ne suffit pas** : la relecture suit les liens du site, qu'ils soient indexés ou non.
- Aucune page vide et aucun lien vers une page vide : pas de badge « Bientôt », pas d'onglet
  « en préparation ». Un chapitre non rédigé n'a pas de page ; un niveau Bac ne passe à
  `available: true` (`lib/bacProgramme.js`) que quand ses matières ont des chapitres rédigés.
- Pas une page par fichier : un PDF ou une image se liste sur la page qui lui donne un contexte
  (ex. examens nationaux sur la page de la matière), jamais seul sur sa page.
- Pas de contenu copié ou récupéré automatiquement d'un autre site (scraping), sous aucune forme.
- Pas de gabarit recyclé d'une page à l'autre (voir A1 pour le blog).
- Contrôle : `npm run check` = lint + build + `scripts/audit-contenu.mjs` (aussi lancé en CI). Il
  parcourt le site construit depuis l'accueil et échoue sur une page « Bientôt / en préparation »,
  une page de moins de 120 mots ou un lien interne cassé. **Ne pas l'affaiblir pour le faire
  passer** : corriger la page, ou ne pas la générer et retirer les liens qui y mènent.

---

## C. CONCOURS

### Schéma d'une entrée `concours.json`
```json
{
  "id": "2024_Rabat_FSJES_Agdal_GFCF",
  "annee": "2024",
  "ville": "Rabat",
  "etablissement": "FSJES Agdal",
  "filiere": "Finance d'Entreprise & Ingénierie Financière",
  "master_reel": "Gestion Financière et Comptabilité Financière",
  "modules": ["Comptabilité Générale", "Mathématiques Financières"],
  "difficulte": "3/5",
  "notions_cles": "Résumé en 2-4 phrases : format de l'épreuve, durée, thèmes et notions testées.",
  "enonce_md": "…énoncé transcrit…",
  "corrige_md": "> Corrigé indicatif rédigé par SaadConcours …",
  "source": "- fsjesmaster.com — <titre de la page> : <url>",
  "images": ["images/Rabat/2024_Rabat_FSJES_Agdal_GFCF/2024_Rabat_FSJES_Agdal_GFCF_p1.webp"],
  "categorie": "FCA",
  "niveau": "licence_excellence",
  "date_ajout": "AAAA-MM-JJ"
}
```
Règles des champs :
- `id` : `<annee>_<Ville sans accent ni espace>_<Etab>_<Master abrégé>` (ex. `2019_Casablanca_FSJES_AinSebaa_CCAF`).
  Année inconnue → préfixe `SD_`. Doublon de même master/année → suffixe `2`.
- `annee` : année de la session (celle du concours, pas de l'année universitaire suivante).
- `ville` : **forme accentuée** (`Meknès`, `Kénitra`, `Tétouan`, `Béni Mellal`, `El Jadida`, `Fès`, `Salé`).
  Le dossier d'images, lui, suit la valeur exacte de `ville`.
- `etablissement` : réutiliser **l'orthographe déjà présente** en base pour cette faculté
  (`node` : lister les valeurs distinctes avant d'écrire). Ex. `FSJES Ain Chock`, `FSJES Ain Sebaâ`, `FSJES Agdal`.
- `filiere` : **exactement** une sous-filière de `lib/taxonomy.js` ; `categorie` = son code
  (FCA, MRH, MCL, EAPP, EDMQ).
- `master_reel` : intitulé officiel du master tel qu'écrit sur le sujet.
- `difficulte` : `"1/5"` à `"5/5"` (jugée sur la longueur, la technicité, le barème négatif).
- `source` : format `- <site> — <titre de la page> : <url>` ; sujet fourni par moi → `- Lien / origine du sujet : https://saadconcours.space`.
- `date_ajout` : date du jour.
- `niveau` : **absent pour un concours de Master** ; `"licence_excellence"` pour un concours d'accès à une
  licence d'excellence (voir [C9](#c9--concours-de-licence-dexcellence)). Source de vérité : `lib/concoursNiveaux.js`.

> **Brouillon** : `"statut": "brouillon"` masque un concours sur tout le site (liste, fiche, sitemap, accueil). Absence du champ = publié. Ne pas le poser sur un concours ajouté par recette, sauf demande explicite.

### Format de `enonce_md`
- En-tête en gras : université — faculté ; master + année universitaire ; date, durée, nature de l'épreuve.
- Consignes en italique, barème si présent, numérotation **identique au sujet**.
- QCM : `**Question N :** …` puis options `a)`, `b)`… sur des lignes séparées.
- Tableaux du sujet → tableaux Markdown. Pas de réponse dans l'énoncé.

### Format de `corrige_md`
- Toujours commencer par le bandeau :
  `> Corrigé indicatif rédigé par SaadConcours, pas une correction officielle de <établissement>. …`
- QCM : pour chaque question, la bonne lettre en gras + justification courte (calcul ou règle).
- Exercices : démarche → calculs posés → résultat encadré en gras → piège à éviter.
- Dissertation : plan détaillé (introduction avec accroche/définitions/problématique/annonce,
  parties, conclusion) avec exemples marocains, pas une copie rédigée.
- Barème négatif : le rappeler et conseiller la stratégie de réponse.

### Scans (images)
- Convertir en **webp** avec `sharp` (déjà dans `node_modules`) :
  largeur max 1600 px, qualité 80. Nom : `<id>_p1.webp`, `<id>_p2.webp`… dans
  `public/images/<ville>/<id>/`.
- Ne garder que les pages du sujet (pas les logos, pubs, bannières du site source).

### C1 — Ajouter N concours depuis internet
1. **Inventaire** : charger `concours.json`, lister les `source` (URLs) et les couples
   (établissement, master, année) déjà présents.
2. **Collecte** : sources par ordre de préférence : `fsjesmaster.com`, puis `economie-gestion.com`,
   `almaster-maroc.com`, autres. Méthode éprouvée pour fsjesmaster (Python absent de ce poste →
   tout en Node/curl, dans le scratchpad) :
   - index complet : `https://www.fsjesmaster.com/feeds/posts/default?alt=json&max-results=150&start-index=N`
     (N = 1, 151, 301… ≈ 855 articles) ; filtrer les titres « Concours / Exemple » + mots-clés de la filière ;
   - dans chaque page, le sujet est dans `<div class="pS post-body …">` ; ne garder que les `<img>`
     `blogger.googleusercontent.com` en **portrait** (`data-original-width/height` < 0,85 : les carrés
     sont des vignettes de couverture) et remplacer le segment de taille (`/s320-rw/`, `/w…-h…/`) par
     `/s0/` pour la pleine résolution ;
   - page qui répond par une redirection « google.com/sorry » (limitation de débit) : réessayer avec
     `?m=1` et un User-Agent de navigateur. Pour ces articles, le flux JSON ne donne qu'un résumé ;
   - certains articles n'ont que le texte du sujet (pas de scan) : acceptables, `images: []`, à
     défaut de mieux ;
   - écarter les sélections de **doctorat** et les pages « Correction du concours » sans énoncé.
3. **Priorités par défaut** si je ne filtre pas :
   1. **sous-filières** les moins couvertes : compter `filiere` par sous-filière de
      `lib/taxonomy.js` (beaucoup d'anciennes entrées ont un `filiere` hors taxonomie : les
      rattacher par leur `categorie` et leur intitulé) ;
   2. années récentes d'abord, en couvrant 2010 → 2025 si je le demande ;
   3. villes / facultés peu couvertes (Oujda, Fès, Tanger, Tétouan, Béni Mellal, El Jadida, Settat…).
   **Contrôle anti-doublon obligatoire, avant rédaction** : (a) URL source déjà présente dans un
   champ `source` ; (b) même `id` ; (c) même ville + même année + intitulé de master proche ;
   (d) recoupement du texte : 5-grammes d'une phrase caractéristique de l'énoncé comparés à tous les
   `enonce_md` (> 30 % = doublon). Un score élevé entre deux **sessions différentes** d'une même
   faculté peut venir d'une trame recyclée (même cas, autres montants) : comparer montants et questions
   avant de conclure. S'il s'agit bien de deux épreuves distinctes, garder les deux et le signaler dans
   la fiche (précédent : CCA Aïn Chock 2017 et 2019 formation initiale, 55 % de texte commun).
   Attention aux épreuves communes (Meknès, Kénitra) : le sujet
   général peut déjà exister dans une entrée d'un autre master — c'est l'épreuve de **spécialité**
   qui décide.
4. Écarter : sujets illisibles, simples annonces d'inscription, listes de résultats, doublons.
   Si moins de N sujets valides existent, livrer ce qui existe et le dire.
5. Pour **chaque** sujet retenu : télécharger les scans → webp → lire les images →
   transcrire `enonce_md` → rédiger `corrige_md` (§ formats ci-dessus) → remplir tous les champs.
6. Écrire les N entrées dans `concours.json` + les miroirs `extraits/<id>.md` et
   `corriges/<id>.md` (copie exacte de `enonce_md` / `corrige_md`, terminée par `\n`).
7. Contrôles : chaque `id` unique, `filiere` ∈ taxonomie, `categorie` cohérente, chaque image
   référencée existe sur disque, miroirs identiques au JSON, `git diff --numstat` de
   `concours.json` = ajouts seulement, JSON valide. Rendu : passer `enonce_md`/`corrige_md` dans
   `marked` (lignes `|…|` non converties en `<table>` = tableau cassé). **Avec `GITHUB_TOKEN`
   défini, `npm run dev` ne montre pas les nouvelles fiches** : le site lit alors les données sur
   `raw.githubusercontent.com`, et elles n'apparaissent qu'après le push. Sans jeton (cas de ce poste
   en septembre 2026), `dev` et `build` lisent le dépôt local : `npm run check` contrôle alors les
   nouvelles pages avant le push.
8. Fin de recette (§1.5). Message : « Ajoute N concours … » + liste (master, faculté, année, format d'épreuve).

### C2 — Ajouter un concours fourni (photo, PDF, lien)
Comme C1 étapes 5 → 8, à partir du fichier ou du lien que je donne. Si des infos manquent sur le
sujet (année, faculté), les déduire de l'en-tête ; à défaut, **demander**.

### C3 — Rédiger ou refaire un corrigé
- `corrige le concours X` : relire les scans **et** `enonce_md`, rédiger/refaire `corrige_md`,
  mettre à jour `corriges/<id>.md`.
- `ajoute les corrigés manquants` / `ajoute N corrigés` : lister les entrées sans `corrige_md`,
  traiter en priorité les plus récentes et les QCM/exercices chiffrés (les plus demandés).
- Tous les calculs vérifiés ; incohérences du sujet signalées dans le corrigé.

### C4 — Corriger un énoncé / un extrait
1. Rouvrir les scans de `images` et comparer ligne à ligne avec `enonce_md`.
2. Corriger fautes de transcription, chiffres, numérotation, tableaux, questions manquantes.
3. Mettre à jour `extraits/<id>.md` ; si un chiffre corrigé change une réponse, mettre aussi à jour
   `corrige_md` + `corriges/<id>.md`.
4. Commit : « Corrige l'énoncé du concours <master> <faculté> <année> » + liste des corrections.
- `vérifie tous les extraits` : contrôle mécanique d'abord (miroir `.md` ≠ JSON, énoncé vide,
  images manquantes), puis relecture des cas suspects.

### C5 — Modifier un concours
Appliquer la modification demandée à l'entrée ; si `enonce_md` ou `corrige_md` change, réécrire
le miroir correspondant ; si `id` ou `ville` change, déplacer le dossier d'images et mettre à jour
`images`.

### C6 — Supprimer un concours
1. Retrouver l'entrée (par `id`, ou par description → **montrer l'`id` trouvé avant de supprimer**
   s'il y a plusieurs candidats).
2. Retirer l'entrée de `concours.json`, supprimer `extraits/<id>.md`, `corriges/<id>.md` et
   `public/images/<ville>/<id>/`.
3. Chercher les liens vers `/concours/<id>` dans `blog.json` et les signaler/corriger.
4. L'URL était indexée : ajouter `/concours/<id> /concours/<id gardé ou page liste> 301` dans
   `public/_redirects` (redirection servie par Cloudflare avant le Worker, jamais un `redirect()` Next).
5. Commit : « Supprime le concours <id> » + raison.

**Doublons** (`supprime les doublons`) : ne jamais se fier au seul titre. Un doublon = même
épreuve publiée deux fois : scans identiques octet pour octet (hash), même URL source, énoncé
recouvert à > 75 % (bardeaux de 5 mots). Des masters d'une même faculté qui partagent **une**
page de tronc commun (Meknès 2022/2023) ne sont pas des doublons, ni deux sujets de même titre
dont les textes diffèrent (`SD_…AinChock_CCA` / `CCA2`). Garder la fiche au corrigé le plus
complet et à la source la plus précise ; montrer la liste avant de supprimer (précédent :
12 doublons supprimés le 2026-09-26).

### C7 — Concours blanc
- Construit à partir de l'**analyse de fréquence** des modules sur les sessions réelles du même
  master en base (précédent : `2026_Rabat_FSJESAgdal_GFCF_ConcoursBlancSaadConcours`).
- `id` : `<annee>_<Ville>_<Etab>_<Master>_ConcoursBlancSaadConcours`, `source` :
  `- Sujet original conçu par SaadConcours (pas un sujet officiel de la <fac>) : …`, `images: []`.
- Même format de questions que le vrai concours (QCM, barème, durée), corrigé complet.
- Mettre à jour l'article de blog de préparation du master s'il existe.

### C8 — Nettoyer / normaliser la base concours
Problèmes connus : villes en double (`Meknes`/`Meknès`, `Kenitra`/`Kénitra`, `Tetouan`/`Tétouan`,
`ElJadida`/`El Jadida`, `BeniMellal`/`Béni Mellal`), plusieurs orthographes d'un même établissement
(Aïn Sebaâ), `difficulte` vide.
1. Produire d'abord un **rapport** (valeurs distinctes + nombre d'entrées) et le montrer.
2. Après accord : normaliser `ville`/`etablissement` **sans changer les `id`** ni les chemins
   d'images (les chemins restent valides tels quels).

### C9 — Concours de licence d'excellence
Licences d'excellence (parcours sélectifs, accès en **S5 après le DEUG**) : même fichier
`concours.json`, même schéma, avec `"niveau": "licence_excellence"`. Le site les affiche sur
`/concours/licence-excellence` (et plus sur `/concours`, réservé au Master), avec un badge ⭐ sur
les cartes, le menu Concours → « Concours Licence d'excellence » et un pilier sur l'accueil.
1. Même déroulé que C1, avec ces spécificités :
   - **Source principale** : forum semistre.com, section « Concours d'accès aux licences d'excellences »
     (`https://semistre.com/forums/concours-dacces-aux-licences-dexcellences.31/page-N`). Chaque fil
     a des pièces jointes `/attachments/…-jpg.N/` et souvent un PDF dont les pages sont des JPEG
     **compressés en Flate** (`/FlateDecode /DCTDecode`) : extraire le flux puis `zlib.inflateSync`.
     fsjesmaster.com n'a **aucun** sujet de LE (vérifié en septembre 2026).
   - `filiere` : la sous-filière de `lib/taxonomy.js` la plus proche de la licence (LE CCA →
     CCA ; Ingénierie comptable, fiscale et financière → Fiscalité & Gestion Financière ; Marketing
     digital → Marketing Digital & E-Commerce ; Entrepreneuriat / management de projet →
     Entrepreneuriat & Management de Projets). `master_reel` porte l'**intitulé exact de la licence**.
   - `id` : `<annee>_<Ville>_<Etab>_LE_<Licence abrégée>` (ex. `2024_Agadir_FSJES_AitMelloul_LE_CCA`).
   - Les scans portent souvent les coches d'un candidat, fréquemment fausses : ne jamais les reprendre,
     le dire dans le bandeau du corrigé.
   - Faculté absente de l'en-tête : la déduire de l'intitulé exact + de l'année (appels à candidature),
     et l'écrire dans `notions_cles` et le bandeau du corrigé (précédent : FP Safi 2024).
   - Sujet seulement ressaisi (pas de scan) : `images: []` et le signaler (précédent : Commerce
     International Souissi 2023).
2. Le texte de `/concours/licence-excellence` (nombre de sujets, plage de questions, modules les plus
   fréquents, liste des établissements) est calculé depuis les données : rien à retoucher à la main.

---

## K. COURS (Licence FSJES)

### Schéma d'une entrée `cours.json`
```json
{
  "id": "controlegestion_cours",
  "module": "Contrôle de Gestion",
  "title": "Cours — Contrôle de Gestion (S5)",
  "description": "2-3 phrases : ce que couvre le cours, pour qui.",
  "available": true,
  "category": "compta",
  "parcours": "gestion",
  "filiere": "",
  "semestre": "S5",
  "content": "# 📊 CONTRÔLE DE GESTION — Cours Complet (S5)\n…"
}
```
- `id` : `<module_court>_cours`, minuscules, sans accents.
- `category` : un code de `COURS_CATEGORIES` (`compta`, `finance`, `economie`, `quant`,
  `management`, `marketing`, `droit`, `methodo`).
- `parcours` : `gestion`, `economie` ou `""` (commun) ; `semestre` : `S1`…`S6` ;
  `filiere` (S5-S6 seulement) : `mrh`, `gff`, `mac`, `tba`, `eco_appliquee`, `eil` ou `""`.

### Convention du Markdown `content` (obligatoire — `lib/fsjesChapitres.js` découpe dessus)
```
# <emoji> <MODULE> — Cours Complet (Sx)
> Licence Fondamentale Sciences Économiques et Gestion — Semestre Sx — Système universitaire marocain (LMD)

# PARTIE 1 — <TITRE>            (facultatif, regroupe des chapitres)
# CHAPITRE 1 — <TITRE EN CAPITALES>
…cours : définitions en citation, tableaux, exemples marocains chiffrés…
## ✏️ EXERCICE 1 — <Nom de l'entreprise / thème>
…énoncé…
## ✅ CORRECTION 1
…correction détaillée…

# 🧾 FORMULAIRE
# 📝 CONSEILS POUR L'EXAMEN
```
Chaque chapitre = cours → au moins un exercice → correction détaillée.

### K1 — Ajouter un cours (Licence FSJES)
1. Vérifier que le module n'existe pas déjà (`module` / `id`).
2. Plan calqué sur le programme national du module (chapitres réellement enseignés en FSJES).
3. Rédiger `content` selon la convention ci-dessus (cours complet, pas un résumé).
4. Si demandé ou si c'est un module prioritaire : faire aussi [K2](#k2--compléter-un-cours-par-chapitres).
5. `ajoute les cours du S3` : lister les modules du semestre manquants, les créer tous.
6. Contrôle : ouvrir `/cours/<id>` en local (`npm run dev`) et vérifier que les chapitres sont détectés.
7. Ajouter l'`id` du module dans `MOTIFS` (`lib/concoursParModule.js`) avec les mots-clés des épreuves
   de concours correspondantes : c'est ce qui affiche « Sujets de concours avec une épreuve de … »
   sur le module et ses chapitres — et ce qui donne aux pages concours les liens dont Google a besoin
   pour venir les explorer.
8. Fin de recette. Si un article de blog « valider le Sx » existe, y ajouter le lien.

### K2 — Compléter un cours par chapitres
Fichier `lib/fsjesContenu/<module>.js`, indexé par **numéro** de `# CHAPITRE N` :
```js
// <Module> (Sx) — compléments par chapitre.
const md = String.raw;

export default {
  1: {
    titre: "Titre du chapitre en casse normale",
    resume: md`## L'essentiel — …\n- points clés…`,
    exercices: md`### Exercice 2 — …\n…\n<details><summary>Voir le corrigé</summary>\n\n…\n\n</details>`,
    qcm: [{ q: "…", choix: ["…", "…", "…", "…"], bonne: 1, explication: "…" }],
  },
};
```
- `bonne` = index (0-based) dans `choix`. 8 à 10 questions de QCM par chapitre, 2 exercices
  supplémentaires corrigés (numérotés à partir de 2, l'exercice 1 est celui du Markdown).
- Attention : dans `String.raw`, échapper les backticks et `${`.
- **Déclarer** le fichier dans `SUPPLEMENTS` de `lib/fsjesContenu/index.js`
  (`<id du cours>: <import>`), sinon il n'est pas affiché.

### Norme « cours détaillé » (réécriture des cours FSJES, septembre 2026)
Tous les cours sont réécrits sur ce modèle ; tout nouveau cours doit le suivre.
- **Chapitre (Markdown de `cours.json`)** : bloc `> 🎯 **Objectifs du chapitre**`, sections
  `## N.1 …` expliquées en phrases (pas seulement des tableaux), définitions en citation
  `> **Définition — …**`, exemples chiffrés d'entreprises marocaines (DH, villes, CGNC, lois),
  une section `## N.x Méthode : …`, puis `## ⚠️ Les pièges à éviter`, puis l'exercice type
  examen (`## ✏️ EXERCICE` / `## ✅ CORRECTION`, plusieurs questions, correction détaillée).
  Cible : 1 100 mots et plus pour l'onglet Cours (900 pour les modules très formalisés).
  Rien après l'exercice : tout ce qui suit `## ✏️ EXERCICE` part dans l'onglet Exercices.
- **Compléments** : `titre` (**jamais modifié** sur un chapitre publié : il fixe l'URL),
  `description` (meta description propre au chapitre, 100 à 160 caractères), `resume`
  (8 à 10 puces avec les formules), `exercices` (2 exercices corrigés dans `<details>`),
  `qcm` (10 questions, texte brut : pas de LaTeX ni de gras, pas d'option « ci-dessus » car
  les choix sont mélangés).
- Les chapitres peuvent être réordonnés ou complétés (le slug vient du titre, pas du numéro) :
  on n'en supprime jamais un qui est publié.
- Procédure éprouvée : rédiger chaque chapitre dans le scratchpad (`k/<id>/cNN.md` +
  `k/<id>/sNN.js`, plus `head.md`, `annexe.md`, `meta.json`), assembler par script
  (content + fichier de compléments `const chapitres = {…}; export default chapitres;`),
  puis contrôler : toutes les anciennes URL présentes, 3 exercices et 10 QCM par chapitre,
  descriptions uniques, tableaux convertis par `marked`, `$` appariés. Recalculer chaque
  chiffre avec Node avant de l'écrire. Un commit par cours.

### K3 — Modifier ou supprimer un cours
- Modifier : éditer `content` (respecter la convention), ou le fichier de compléments.
- Supprimer : retirer l'entrée de `cours.json`, supprimer son fichier `lib/fsjesContenu/…` et sa
  ligne dans `index.js`, chercher les liens `/cours/<id>` dans `blog.json` et les corriger.

---

## B. BAC (Sciences Économiques & Gestion)

### B1 — Rédiger des chapitres Bac
1. La structure (niveaux, matières, unités, **slugs de chapitres**) est fixée par
   `lib/bacProgramme.js` : ne jamais inventer un slug, le reprendre de là.
2. Écrire dans `lib/bacContenu/<niveau>/<matiere-court>[-N].js` (découper en plusieurs fichiers
   par unité si la matière est longue, comme `egs-1.js`, `egs-2.js`…) :
   ```js
   const md = String.raw;
   export default {
     "<slug-du-chapitre>": {
       cours: md`…`, exercices: md`…`, resume: md`…`,
       qcm: [{ q: "…", choix: ["…"], bonne: 0, explication: "…" }],
     },
   };
   ```
3. Déclarer dans `CONTENU` de `lib/bacContenu/index.js` sous la clé `"<niveau>/<slug-matière>"`
   (fusion `{ ...a, ...b }` si plusieurs fichiers).
4. Niveau Bac marocain (programme officiel, manuels, exemples du national), barèmes fiscaux de
   l'année en cours ; matières en arabe rédigées en arabe.
5. Vérifier que `public/data/bac.json` ne contient pas déjà une surcharge admin du même chapitre
   (elle masquerait le nouveau contenu) — sinon le signaler.
6. `rédige toute la 1ère Bac` : procéder matière par matière, un commit par matière. La 1ère Bac est
   masquée (`available: false` dans `BAC_NIVEAUX`) : la repasser à `true` seulement quand chaque
   matière a ses chapitres rédigés (règle 1.6), puis vérifier `npm run check`.

### B2 — Examens nationaux 2ème Bac
Affichage : **pas de page par examen**. Les PDF sont listés en liens directs dans la section
« Examens nationaux » de la page matière (`/bac/2bac/<matière>#examens`), servis en assets
Cloudflare (aucun coût Worker). Les anciennes pages `/examens/<id>` ont été supprimées le
2026-09-24 : 289 pages de ~90 mots autour d'un PDF, cause du refus AdSense (règle 1.6).
1. **SE ≠ SGC** : économie générale & statistiques, EOAE et comptabilité ont des sujets
   différents par filière (`filiere: "se"` / `"sgc"`). Maths, philosophie et anglais ont un sujet
   commun (`filiere: "commun"`, un seul exemplaire). Droit et informatique de gestion ne sont pas
   au national. `id` = `se-2024-normale`, `sgc-2024-rattrapage`, ou `2024-normale` (commun).
2. Sources, dans l'ordre : AlloSchool (sections « Examens nationaux » des cours 2Bac SE et SGC ;
   la page élément contient le lien `assets/documents/…pdf`, parfois masqué en `index.ph%70/`),
   puis profelhamdaoui.com pour les trous (ses fichiers « EGS-SGC » de la page maths SGC sont en
   réalité des sujets de maths : ne pas les utiliser), fayssalmaths.com pour les maths.
3. Scripts dans le scratchpad (Node) : lister → télécharger (vérifier l'en-tête `%PDF-`) →
   dédoublonner par sha1 → **contrôler chaque PDF** avec `pdfjs-dist` : code d'épreuve de
   l'en-tête (`NS/RS` sujet, `NR/RR` corrigé ; N = normale, R = rattrapage ; 50 compta SE,
   51 compta SGC, 52 EGS SE, 53 EGS SGC, 54 EOAE SE, 55 EOAE SGC, 26/62 maths, 05 philo,
   12 anglais). Un code incohérent = document mal classé chez la source → l'écarter ou le
   remplacer. Les années d'en-tête sont souvent mal encodées (« 0202 », « 2102 ») : ne pas s'y fier.
4. Écrire `lib/bacNationaux.json` (champs : filiere, matiere, annee, session, docs[type, langue?,
   part?, file, size, src]) et copier les PDF sous `public/bac/nationaux/`. Ajouter toute nouvelle
   source dans `NATIONAL_SOURCES` (`lib/bacNationaux.js`).
5. `.gitattributes` déclare `*.pdf binary` : ne jamais l'enlever (sinon `core.autocrlf` corrompt
   les PDF). Vérifier après `git add` que la taille de chaque blob = taille du fichier.
6. Contrôles : `npm run check`, 200 sur chaque PDF listé (le garde-fou vérifie que chaque lien
   pointe vers un fichier existant de `public/`).
   Plafonds Cloudflare gratuits : 25 Mio par fichier, 20 000 fichiers d'assets.

---

## E. ÉVALUATIONS (QCM — `/evaluation`)

### Schéma d'une entrée `quiz.json`
```json
{
  "id": "controlegestion_100",
  "module": "Contrôle de Gestion",
  "title": "Concours Blanc — Contrôle de Gestion (100 Questions)",
  "description": "…",
  "chapters": ["Chapitre 1 — <Titre> (Q1-Q12)", "…"],
  "questions": [
    {
      "id": 1,
      "chapter": "Chapitre 1 — <Titre> (Q1-Q12)",
      "question": "*(Adapté Casablanca ENCG Finance 2022)* …",
      "options": [{ "letter": "a", "text": "…" }, { "letter": "b", "text": "…" }],
      "correct": ["a"],
      "justification": "…"
    }
  ]
}
```

### E1 — Ajouter une évaluation (QCM)
1. Par défaut **100 questions**, réparties en 6-8 chapitres ; la chaîne `chapter` de chaque
   question doit être **identique** à une entrée de `chapters` (plages `(Qx-Qy)` exactes).
2. Puiser d'abord dans les **vrais concours en base** du même module : les reprendre en les
   marquant `*(Adapté <Ville> <Établissement> <Filière> <Année>)*` ; compléter par des questions
   originales. `description` dit la part réel / généré.
3. 3 à 5 options, `correct` = tableau (plusieurs bonnes réponses possibles), `justification`
   courte avec le calcul. Vérifier chaque calcul.
4. `id` : `<module_court>_100` ; `id` des questions : 1 → N, sans trou.
5. Contrôles : chaque `correct` ⊂ lettres des options, numérotation continue, JSON valide.

### E2 — Modifier ou supprimer une évaluation
- `corrige la question N de X` : vérifier le calcul, corriger `options`/`correct`/`justification`.
- Supprimer : retirer l'entrée de `quiz.json` + liens `/evaluation/<id>` dans le blog.

---

## A. BLOG

### Schéma d'une entrée `blog.json`
```json
{
  "id": "preparer_master_cca_fsjes_agadir_2026_2027",
  "title": "…",
  "excerpt": "1-2 phrases (≈ 250 caractères) pour la carte et la meta description.",
  "publishedAt": "AAAA-MM-JJ",
  "available": true,
  "category": "facultes",
  "content": "…Markdown…"
}
```
`category` : `facultes` (guides de facultés), `matieres` (matières à préparer),
`comparatifs`, `methode` (méthode & conseils). `id` : slug en `snake_case` sans accents.

### A1 — Ajouter un article de blog
1. **Vérifier l'absence de doublon** : pas d'article existant sur le même sujet ; sinon proposer
   de le mettre à jour (A2). Le site désindexe automatiquement un article qui recopie > 30 % d'un
   autre (`lib/blogDuplicates.js`) : **pas de gabarit recyclé**, contenu écrit spécifiquement.
2. **Fondé sur les données du site** : analyser les concours en base (modules qui reviennent,
   format d'épreuve, difficulté, questions recyclées d'une année à l'autre) et donner des chiffres
   (« Comptabilité analytique : 8 sessions sur 8 »). C'est ce qui distingue l'article (AdSense).
3. Structure : intro sans titre → sections `##` → `## En résumé` → **`## FAQ`** avec des
   questions en `### …` (alimente le schema FAQPage automatiquement).
4. Maillage interne : liens relatifs vers `/concours/<id>`, `/cours/<id>`, `/evaluation/<id>`,
   `/blog/<id>` — uniquement vers des `id` qui existent.
5. 1 500 à 3 000 mots, noms réels des facultés et masters (ce que les étudiants recherchent).
6. `ajoute 3 articles` sans sujet : proposer les sujets en priorité sur les masters/facultés
   bien fournis en concours mais sans article, puis rédiger.

### A2 — Modifier ou supprimer un article
- Mettre à jour : réécrire les sections concernées, **ne pas changer l'`id`** (URL indexée),
  mettre à jour les chiffres avec l'état actuel de la base.
- Supprimer : retirer l'entrée ; chercher les liens `/blog/<id>` dans les autres articles et les corriger.
- **Avant de dépublier ou supprimer un article, vérifier ses clics dans Search Console**
  (Performances › Pages, propriété `https://www.saadconcours.space/`). Un article qui amène du trafic
  se **réécrit sous le même `id`**, il ne se supprime pas — précédent : les guides « FSJES Mohammedia »
  et « FSJES Tétouan », dépubliés comme quasi-doublons le 24/09/2026 alors qu'ils étaient parmi les
  pages les plus visitées, puis réécrits le jour même avec les vrais sujets de la faculté.

---

## N. NEWS (concours ouverts)

### N1 — News concours ouverts
**Section retirée du site public le 2026-09-24** (page `/news`, pages `/news/<id>`, bouton du
header, encarts de l'accueil) : c'était une copie automatique d'almaster-maroc.com, donc du contenu
« scrapé » refusé par AdSense (règle 1.6). `public/data/news.json`, le scraper et l'écran de la
console restent, mais rien n'est affiché. Une demande sur les news → rappeler ce retrait et
demander avant toute remise en ligne (elle exigerait un contenu rédigé, pas une copie).
- Schéma : `{ id (16 hex aléatoires), titre, etablissement, ville, filiere, date_limite (AAAA-MM-JJ|null), cloture, lien_inscription, source, date_publication }`.
- Ajouter : insérer en **tête** du tableau (le fichier est trié par `date_publication`
  décroissante, comme le fait le scraper), `date_publication` = aujourd'hui.
- Supprimer : par `id` ou par titre (confirmer si plusieurs correspondances).
- `lance le scraper news` : `scripts/fetch_almaster.py` (exécuté normalement par le workflow
  `.github/workflows/update-news.yml`) ; le scraper est désactivable dans `settings.json`
  (`newsScraperEnabled`).

---

## V. BOUTIQUE (cahiers vendus sur Gumroad)

### V1 — Boutique : cahiers Gumroad
- Pages publiques : `/boutique` (liste, recherche, filtre par niveau) et `/boutique/<id>` (fiche + bouton « Acheter sur Gumroad »). Le site n’encaisse rien : le paiement et la livraison du PDF se font sur Gumroad.
- Schéma : `{ id (slug du titre), titre, sousTitre, niveau (bac|licence|licence_excellence|master), matiere, description (Markdown), sommaire: [], pointsForts: [], prix, prixBarre (promo, facultatif), devise (MAD|EUR|USD), pages, format, couverture (images/boutique/<id>/…), apercu (lien d’extrait gratuit), gumroadUrl, paiementDirect (true = ouvre directement le paiement, ?wanted=true), badge (Nouveau|Best-seller|Promo|Édition 2026|Bientôt), vedette, available, dateAjout }`.
- **Ne jamais inventer** un prix ni un lien Gumroad : les demander s’ils ne sont pas fournis. Une fiche sans `gumroadUrl` valide s’affiche en « Bientôt disponible », sans bouton d’achat : ne pas la publier (`available: true`) dans cet état, le garde-fou de la règle 1.6 bloquerait.
- Tant qu’aucun cahier n’est publié, la boutique est absente du menu, du sitemap et de l’index (`BOUTIQUE_OUVERTE` dans `app/_shared/chrome.js`) : le premier cahier `available` la fait apparaître au déploiement suivant, sans toucher au code.
- Le plus simple pour Saad : Console › Contenu › Boutique › « Nouveau cahier ». Par script : mêmes règles que 1.2 (lecture, modification, `JSON.stringify(list, null, 2) + "
"`).
- Couverture : image portrait (3:4) en WebP, sous un **nouveau nom** à chaque remplacement (les images sont en cache immuable).
- Suivi : vues des fiches et clics sur « Acheter » dans la liste Boutique de la console (Gumroad compte les ventes).

---
## S. SUPPRESSION

### S1 — Suppression générique
`supprime X` sans type : chercher X dans tous les contenus (concours, cours, quiz, blog, news,
Bac), montrer ce qui correspond (type + `id` + titre), puis appliquer la recette de suppression
du type (C6, K3, E2, A2, N1). Toujours nettoyer les liens internes qui pointaient dessus.
Une suppression en masse (« supprime tous les … ») → **montrer la liste et attendre mon accord**.

---

## M. MAINTENANCE

### M1 — État des lieux du contenu
Produire un rapport chiffré :
- concours : total, par catégorie, par ville, par année, sans corrigé, sans image, `difficulte` vide,
  miroirs `extraits/`/`corriges/` manquants ou désynchronisés ;
- cours : modules présents par semestre/parcours, modules sans compléments par chapitres ;
- Bac : chapitres rédigés / total par matière et niveau ;
- évaluations : modules couverts vs modules de concours les plus fréquents ;
- blog : articles par catégorie, articles désindexés comme quasi-doublons.
Terminer par les **5 prochaines actions** les plus utiles, formulées comme commandes de ce fichier.

---

## P. PUBLICATION

### P1 — Vérifier, committer, publier
1. `npm run check` (lint + build + garde-fou contenu, règle 1.6) si du code a changé ou si des
   pages sont ajoutées ou retirées ; pour une simple correction de données, vérifier que les JSON parsent.
2. Commit (si pas déjà fait) avec le style du dépôt.
3. `git push origin main` → GitHub Actions déploie sur Cloudflare Workers.
4. Après déploiement, vérifier qu'une page publique touchée reste statique :
   `curl -sI https://www.saadconcours.space/<page> | grep -i x-opennext` → aucune sortie attendue.
