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
| `ajoute 10 concours de droit` · `ajoute des concours master droit` · `ajoute ce sujet de droit` | [C11](#c11--concours-de-master-en-droit) |
| `corrige le concours X` · `ajoute les corrigés manquants` · `ajoute 10 corrigés` | [C3](#c3--rédiger-ou-refaire-un-corrigé) |
| `corrige l'énoncé de X` · `vérifie l'extrait de X` · `retranscris X` | [C4](#c4--corriger-un-énoncé--un-extrait) |
| `modifie le concours X : …` | [C5](#c5--modifier-un-concours) |
| `supprime le concours X` | [C6](#c6--supprimer-un-concours) |
| `crée un concours blanc <master> <fac>` | [C7](#c7--concours-blanc) |
| `fais le design du QCM X` · `c'est un QCM` · `mets en forme tous les QCM` | [C10](#c10--mise-en-forme-des-qcm-options-en-cases) |
| `nettoie la base concours` · `normalise les villes / établissements` | [C8](#c8--nettoyer--normaliser-la-base-concours) |
| `ajoute le cours <module>` · `ajoute les cours du S3` | [K1](#k1--ajouter-un-cours-licence-fsjes) |
| `complète le cours X par chapitres` · `ajoute QCM / résumés au cours X` | [K2](#k2--compléter-un-cours-par-chapitres) |
| `modifie / réécris le cours X` · `supprime le cours X` | [K3](#k3--modifier-ou-supprimer-un-cours) |
| `ajoute le cours de droit <module>` · `ajoute les cours du tronc commun droit` · `ajoute les cours S2 de droit` | [K5](#k5--cours-de-droit-fsjp-ex-fsjes) |
| `rédige les chapitres Bac de <matière> <niveau>` | [B1](#b1--rédiger-des-chapitres-bac) |
| `ajoute les nationaux (bac)` · `ajoute les nationaux 2026` | [B2](#b2--examens-nationaux-2ème-bac) |
| `ajoute une évaluation <module>` · `ajoute un QCM de 100 questions en X` | [E1](#e1--ajouter-une-évaluation-qcm) |
| `modifie / supprime l'évaluation X` · `corrige la question N de X` | [E2](#e2--modifier-ou-supprimer-une-évaluation) |
| `ajoute un article sur …` · `ajoute 3 articles blog` | [A1](#a1--ajouter-un-article-de-blog) |
| `mets à jour l'article X` · `supprime l'article X` | [A2](#a2--modifier-ou-supprimer-un-article) |
| `fais le même cahier PDF pour <master> <fac>` · `cahier de préparation + article` | [A3](#a3--cahier-de-préparation-pdf--article--fais-le-même-cahier-pour-master-fac-) |
| `ajoute une news …` · `supprime la news X` · `lance le scraper news` | [N1](#n1--news-concours-ouverts) |
| `ajoute un cahier à la boutique` · `mets en promo le cahier X` · `retire le cahier X` | [V1](#v1--boutique-cahiers-commandés-sur-whatsapp) |
| `fais un cahier de préparation de <module>` · `cahier à vendre` · `exemplaire au nom de X` | [V2](#v2--cahier-payant-en-pdf) |
| `fais le poster du cahier X` · `change le poster` | [V3](#v3--posters-dun-cahier) |
| `poste les concours` · `prépare les posts Instagram / Facebook` · `carrousels de la semaine` | [R1](#r1--carrousels-instagram--facebook-des-concours) |
| `supprime X` (sans préciser le type) | [S1](#s1--suppression-générique) |
| `ajoute une section <public>` | [X1](#x1--ajouter-une-section-un-espace) |
| `ajoute un emplacement de pub` · `déplace la pub de X` | [X3](#x3--emplacements-publicitaires-adsense) |
| `état des lieux` · `audit du contenu` · `qu'est-ce qui manque ?` | [M1](#m1--état-des-lieux-du-contenu) |
| `check GEO` · `audit GEO` · `visibilité IA` | [M2](#m2--audit-geo-moteurs-de-réponse-ia) |
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
| Cours de Droit (S1 → S6, FR/AR) | `public/data/droit.json` + compléments `lib/droitContenu/<id>.js` (déclarés dans `lib/droitContenu/index.js`) | `lib/droitTaxonomy.js`, découpage : `lib/droit.js` (même convention que FSJES) |
| Cours Licence FSJES | `public/data/cours.json` + compléments `lib/fsjesContenu/<module>.js` (déclarés dans `lib/fsjesContenu/index.js`) | `lib/coursTaxonomy.js`, découpage : `lib/fsjesChapitres.js` |
| Cours Bac | `lib/bacContenu/<niveau>/<fichier>.js` (déclarés dans `lib/bacContenu/index.js`) ; surcharges admin dans `public/data/bac.json` | `lib/bacProgramme.js` |
| Examens nationaux Bac | `lib/bacNationaux.json` (catalogue) + PDF `public/bac/nationaux/<se|sgc|commun>/<matière>/<année>-<session>-<sujet|corrige>.pdf` | `lib/bacNationaux.js` |
| Évaluations (QCM) | `public/data/quiz.json` | — |
| Blog | `public/data/blog.json` | `lib/blogTaxonomy.js`, anti-doublon : `lib/blogDuplicates.js` |
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
- PDF : les formules des cours et des concours sont composées par MathJax (`app/_shared/pdfMath.js`) ;
  seules les cellules de tableau, les lignes en arabe et le PDF des évaluations passent en texte lisible
  (`latexToPlainText`). Une commande LaTeX nouvelle dans ce cas : l'ajouter à `COMMANDS` dans `latexPlainText.js`.
- **Jamais de `$` pour une monnaie** : deux `$` dans un même paragraphe deviennent une formule KaTeX
  (« 500 000 $ (1 $ = 9 dh) » devient illisible). Écrire « USD » ou « dollars » (précédent : ACGSI Aïn Chock 2014).
- **Ne jamais inventer** un chiffre, une question ou une donnée illisible : écrire
  `[illisible sur le scan]` ou signaler l'hypothèse retenue. Si le sujet lui-même contient une
  erreur, la signaler et donner les deux lectures (précédent : CCAF 2019 Aïn Sebaâ).
- Vérifier chaque calcul d'un corrigé (refaire les calculs avec Node si besoin).
- **Ne jamais écrire que quelque chose est fait par l'IA** sur le site public : ni « rédigé par IA »,
  ni « avec l'aide d'une intelligence artificielle », ni « relecture humaine recommandée / non
  garantie » (décision du 2026-10-10). Un corrigé est « proposé par SaadConcours », non officiel ;
  pour signaler un doute, écrire « À vérifier, notamment … ». L'IA reste un sujet normal dans les
  énoncés et les cours (marketing, GRH, numérique). Ne pas non plus prétendre à une relecture
  qui n'a pas eu lieu (« relu par un professeur », etc.).

### 1.4 Ne pas casser le site
- Pas de page publique dynamique (`cookies()`, `headers()`, `searchParams`, `force-dynamic`,
  `revalidate` non nul) — voir README, section « une page publique n'invoque pas le Worker ».
- **Jamais une modification qui augmente l'usage Cloudflare** (consigne de Saad, 2026-10-28) : le
  site reste sur le plan gratuit. Avant tout changement, se demander s'il ajoute des invocations du
  Worker (un `fetch("/api/…")` depuis une page publique, une route Next servie à chaque visite, un
  `<Link>` qui précharge le RSC), des fichiers d'assets (limite de 20 000 par déploiement, 7 167
  le 2026-10-27), du poids au Worker (5,3 Mo compressés) ou des écritures KV. Si oui : ne pas le
  faire et le dire. Une page publique lit ce dont elle a besoin au build ou dans `/data/*` (statique).
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
- **Un seul cours par matière sur tout le site** (décision du 2026-10-15) : une matière déjà
  traitée dans un espace (Licence FSJES, Droit, Bac) n'est jamais réécrite dans un autre,
  même avec d'autres exemples. Deux cours proches sur le même programme = contenu en double aux
  yeux d'AdSense. L'espace qui arrive en second **renvoie** au cours existant (Droit : champ
  `renvoi`, recette K5) ; seul un module propre à l'espace se rédige. Mesuré le 2026-10-15 sur
  les deux cours ENCG du S1 récrits « à part » : même plan chapitre par chapitre que le cours
  FSJES et 3 à 7 % de passages identiques (tableaux du CPC, classes du PCGE, formules) — retirés.
- Contrôle : `npm run check` = lint + build + `scripts/audit-contenu.mjs` (aussi lancé en CI). Il
  parcourt le site construit depuis l'accueil et échoue sur une page « Bientôt / en préparation »,
  une page de moins de 120 mots ou un lien interne cassé. **Ne pas l'affaiblir pour le faire
  passer** : corriger la page, ou ne pas la générer et retirer les liens qui y mènent.

### 1.7 SEO : règles fixées par l'audit du 2026-09-26
- Titre ≤ 65 caractères, meta description ≤ 155 : passer par `fitTitle` / `clampDescription`
  (`app/_shared/seoText.js`) plutôt qu'une chaîne libre. Fiches concours : `app/_shared/concoursSeo.js`
  (titres et descriptions uniques, calculés sur toute la liste). Blog : champ `seoTitle` quand le
  titre de l'article dépasse 65 caractères (le H1 garde `title`). Une description de fiche concours
  garde toujours le nom du master (ou son sigle) : la phrase se raccourcit d'abord (« énoncé, corrigé
  et PDF gratuits », « Concours … » sans « Sujet réel du ») ; un doublon ne retouche que le champ en
  double, jamais le titre (2026-10-24). Titre en arabe : 72 caractères (≈ 600 px mesurés, une lettre
  arabe est plus étroite qu'une latine).
- Page d'entrée d'un espace : la requête que tapent les élèves, telle quelle, ouvre le titre **et**
  le H1 (`/cours` → « Cours FSJES … », 2026-10-14), et un bloc `sp-about` en bas de page explique
  l'organisation (semestres, parcours, filières) à partir des données, pas d'un texte figé.
- Chapitres de Droit (2026-10-18) : un titre de chapitre > 65 caractères garde sa tête (avant
  « : ») dans la balise `<title>` ; écrire donc les titres longs en « Tête : détails ». Un module FR
  et son équivalent AR se lient l'un à l'autre (`droitEquivalent`, `lib/droit.js`) : si l'id arabe
  n'est pas l'id français avec `-ar-` avant le semestre, l'ajouter à `EQUIVALENT_AR`.
- Pas de balisage `FAQPage` ni `SearchAction` : Google ne les affiche plus pour ce site. Une FAQ
  reste une section visible normale.
- Une page de liste n'envoie au navigateur que les données de ses cartes (`concoursListItem`,
  `blogListItem`) ; le texte intégral se charge à la demande depuis `/data/*.json`.
- Une redirection publique va dans `public/_redirects` (301 servi avant le Worker), jamais dans un
  `redirect()` Next. Le sitemap est publié en fichier statique par `scripts/prerender-to-assets.mjs`.
  Une règle exacte s'ajoute **au-dessus** de la section « Règles à motif » (fin du fichier) : wrangler
  compte comme dynamique (100 au plus) toute règle placée après la première règle à `*` ou `:nom`.
  Cloudflare n'accepte que 301/302/303/307/308 (pas de 410) : une URL retirée dont le contenu vit
  ailleurs se redirige vers cette page, plutôt que de laisser le Worker servir des 404.
- Toute route d'image (`opengraph-image`, icône) porte `dynamic = "force-static"` (+ `generateStaticParams`
  sous un `[id]`), comme les pages : rendue à la demande, elle dépasse les 10 ms de CPU du Worker (5XX).
  Pas de `generateImageMetadata` sous un `[id]` : depuis Next 16, Next ignore alors le
  `generateStaticParams` du fichier et plus aucune image n'est prérendue. Un `alt` propre à la page se
  déclare dans `generateMetadata` (`openGraph.images` et `twitter.images`, voir `app/blog/[id]/page.js`).
- Image de partage : un layout ou une page qui définit `openGraph` sans `images` remplace l'`openGraph`
  du parent et perd l'image du site (`app/opengraph-image.js`) — 5 pages de liste l'ont perdue au
  passage à Next 16. Toujours écrire `images: ["/opengraph-image"]` (ou l'image propre à la page).
- Pages de confiance : `/a-propos` (éditeur : Saad), `/contact`, `/confidentialite`,
  `/mentions-legales`, toutes liées depuis le pied de page. Les tenir exactes quand le site change.

### 1.8 GEO (moteurs de réponse IA) : règles fixées par l'audit du 2026-10-02
- Chaque type de fiche publique a son JSON-LD + `BreadcrumbList` (concours, chapitres FSJES et Bac,
  matières, blog, QCM). Un nouveau type de page en reçoit un sur le même modèle.
- `public/llms.txt` est écrit à la main : ses chiffres sont des planchers (« plus de 270 sujets »).
  Le mettre à jour quand un module ou une matière s'ajoute, ou quand un plancher est largement dépassé.
- IndexNow part tout seul à chaque déploiement (`scripts/indexnow.mjs`, étape du workflow de
  déploiement) : ne pas supprimer la clé `public/e657fda819c595e0829622889594962d.txt`.
- `robots.txt` autorise les crawlers IA : ne jamais les bloquer.

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
  (FCA, MRH, MCL, EAPP, EDMQ, DRT). Elle range le sujet dans son hub de master
  (`/concours/master/<slug>`, `lib/concoursHubs.js`) : jamais l'intitulé du master ici, il va dans
  `master_reel` (45 sujets corrigés le 2026-10-29).
- `master_reel` : intitulé officiel du master tel qu'écrit sur le sujet.
- `difficulte` : `"1/5"` à `"5/5"` (jugée sur la longueur, la technicité, le barème négatif).
- `source` : format `- <site> — <titre de la page> : <url>` ; sujet fourni par moi → `- Lien / origine du sujet : https://saadconcours.space`.
  **Donnée interne, jamais publiée** (depuis le 2026-09-26) : ni sur la fiche, ni dans le PDF, ni en
  JSON-LD. Même règle dans le texte : ne pas nommer le site d'origine dans `enonce_md` / `corrige_md`
  (écrire « une version publiée en ligne », « un corrigé publié en ligne »).
- `date_ajout` : date du jour.
- `date_maj` : date du jour quand une fiche existante change de façon visible (titre, énoncé, corrigé,
  scans ; recettes C3, C4, C5). Sert de `lastmod` au sitemap et de `dateModified` au JSON-LD : sans elle,
  Google ne sait pas qu'une page a changé. La console la pose seule (`updateConcours`, `lib/store.js`) ;
  un script qui modifie `concours.json` doit la poser lui-même.
- `niveau` : **absent pour un concours de Master** ; `"licence_excellence"` pour un concours d'accès à une
  licence d'excellence (voir [C9](#c9--concours-de-licence-dexcellence)). Source de vérité : `lib/concoursNiveaux.js`.

> **Brouillon** : `"statut": "brouillon"` masque un concours sur tout le site (liste, fiche, sitemap, accueil). Absence du champ = publié. Ne pas le poser sur un concours ajouté par recette, sauf demande explicite.

### Format de `enonce_md`
- En-tête en gras : université — faculté ; master + année universitaire ; date, durée, nature de l'épreuve.
- Consignes en italique, barème si présent, numérotation **identique au sujet**.
- QCM : `**Question N :** …` (ou `**N.** …`) puis options `a)`, `b)`… (ou `A)`, `a.`) **une par ligne,
  chacune avec sa lettre**. C'est ce qui les affiche en cases sur la fiche (voir [C10](#c10--mise-en-forme-des-qcm-options-en-cases)) :
  jamais d'options séparées par « / », de cases ☐ ou de tirets sans lettre, jamais deux options sur
  une même ligne, et une proposition illisible s'écrit `c) *[absente du scan]*` plutôt que d'être sautée.
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
- **Règle absolue (à ma demande, 2026-10-06)** : un scan publié ne porte **que mon filigrane**
  saadconcours.space. Tout autre filigrane, logo ou adresse de site est effacé avant publication,
  **en priorité ceux de fsjesmaster** (« www.fsjesmaster.com », « masterfsjes.blogspot.com », en
  noir, gris, blanc, rose ou en diagonale), puis ceux des autres sites, profs ou groupes WhatsApp.
  Méthodes ci-dessous (`nettoyer-scans.mjs`, effacement sur la photo d'origine,
  `recomposer-scan.mjs`). Chaque page est relue à l'œil après traitement ; un scan dont la marque
  d'un tiers reste visible n'est pas publié en l'état : reprendre le nettoyage, et à défaut le
  signaler dans le compte rendu.
  **Seule exception, à ma demande (2026-10-06)** : `2025_Rabat_FSJESAgdal_MSRH` garde le filigrane
  « LAGRANE SAID » (et sa ligne WhatsApp en bas de la page 4) sous le mien. Ne pas le nettoyer lors
  d'un passage sur toute la base ; l'exception ne vaut pour aucun autre sujet.
- **Lisibilité d'abord (à ma demande, 2026-10-07) : je veux voir le scan, jamais un scan blanchi.**
  Le texte publié doit être **au moins aussi noir et lisible que sur la photo d'origine**, sur
  chaque ligne. Une page où des mots pâlissent ou disparaissent ne part pas, même sans filigrane
  tiers. Avant d'écrire dans `public/images`, faire un aperçu (`--sortie=` ou le scratchpad), le
  comparer à la photo page par page, et en cas de doute garder le texte, quitte à laisser des
  traces pâles du filigrane (à signaler dans le compte rendu). Si l'effacement du filigrane et
  la lisibilité s'opposent, **la lisibilité gagne**.
  Précédent : EMS Aït Melloul 2024. Avec `nettoyer-scans.mjs` et `"seuil": 200`, la page 1 (photo
  grise, impression pâle, surligneur jaune, stylo bleu) ressortait illisible. Ce type de photo
  passe par `node scripts/nettoyer-photo.mjs <photo> <scratchpad>/<id>_pN.png "<zones>" [blanc]
  [noir]`, puis `filigrane-scans.mjs`. Ce script ne prend pas de seuil fixe : canal max (le jaune
  disparaît), fond égalisé, stylo bleu effacé, encre foncée par une courbe. La ligne
  « www.fsjesmaster.com » du bas s'efface par les rectangles `zones`. Réglage 200 / 130 par défaut
  (le filigrane gris en diagonale disparaît) ; 212 / 165 pour une impression pâle.
- Convertir **et filigraner** en une étape (depuis le 2026-10-04, à ma demande) :
  `node scripts/filigrane-scans.mjs <photo> public/images/<ville>/<id>/<id>_p1.webp [<photo2> …_p2.webp]`
  (webp, largeur max 1600 px, qualité 80, « saadconcours.space » en diagonale discrète + étiquette
  en bas à droite, posée sur une bande blanche ajoutée sous la feuille pour ne jamais masquer le
  sujet — précédent : MRH Aïn Sebaâ 2022, options de la Q26 cachées). Toujours partir de la photo
  d'origine, jamais d'un webp déjà filigrané. `--recadrer` ne rogne pas le côté où la feuille sort
  déjà du cadre (le texte y touche le bord).
  Photo d'une feuille posée sur une table ou prise de travers : ajouter `--rotation=90` (ou 180,
  270, sens horaire) et `--recadrer` (ne garde que la feuille). Vérifier le résultat sur un aperçu :
  une colonne coupée = feuille trop ombrée, ajuster le seuil « papier » du script
  (précédent : AIF Aïn Chock 2026).
  Nom : `<id>_p1.webp`, `<id>_p2.webp`… dans `public/images/<ville>/<id>/`.
- Ne garder que les pages du sujet (pas les logos, pubs, bannières du site source).
- Scans repris d'un autre site (avec son accord), qui portent son filigrane : depuis le 2026-10-04,
  `node scripts/nettoyer-scans.mjs public/images/<ville>/<id>/<id>_p1.webp […]` écrase le fichier
  par une version nettoyée puis filigranée : fond égalisé en niveaux de gris, filigranes clairs ou
  colorés effacés, ligne « www.fsjesmaster.com » repérée par comparaison au modèle
  `scripts/nettoyer-scans.fsjesmaster.png` puis blanchie, recadrage, puis `filigraner()`.
  Les images qui portent déjà l'étiquette saadconcours.space sont ignorées (pas de double filigrane).
  Relire les zones effacées (le script les affiche) : une ligne du sujet effacée → `"bande": false`
  dans `scripts/nettoyer-scans.exceptions.json` ; une marque floue ratée et vérifiée à l'œil →
  `"seuilBande": 0.33`. Limites : un filigrane en diagonale aussi foncé que le texte reste visible
  en gris clair (seuil 238 ; plus bas, le texte fin des QCM disparaît, précédent CCA Agadir 2019).
  **Texte trop clair** (photo grise, petite ou agrandie, et surtout avec un `seuil` abaissé) : le script
  ne rend noir que ce qui est plus sombre que `noir` (60 par défaut), le reste sort gris pâle. Monter
  `"noir": 170` dans les exceptions fonce l'encre sans faire revenir le filigrane (au-dessus de `seuil`,
  tout reste blanc). Toujours comparer l'aperçu à la photo : le texte doit être aussi noir que l'original
  (précédent : EICSU FEG Marrakech 2026, jugé « très éclairé » après publication).
  Passage de 2026-10-04 : 684 scans traités, environ 460 marques fsjesmaster effacées, et une
  centaine encore visible (marque collée au texte, petite ou très floue).
  **Ne pas passer `nettoyer-scans.mjs` sur mes propres photos sans filigrane tiers** : son seuil dur
  (238) blanchit le texte fin et les zones ombrées (précédent : GFC Aïn Sebaâ 2026, Q25–Q26 effacées,
  refait le 2026-10-06). Pour une photo de téléphone (ombre, fond de tissu, petite résolution) :
  niveaux de gris, fond égalisé (division par le fond médian/flou à 1/8), courbe douce
  (papier ≥ 0,95 → blanc, ≤ 0,50 → noir, gamma 1,2), netteté σ 1 ; bords sombres reliés au cadre
  effacés ; tissu ou feuille voisine blanchis par un polygone tracé à la main autour de la feuille ;
  redresser l'inclinaison (`rotate` sur fond blanc) ; puis `filigrane-scans.mjs`.
- Photos qui portent le filigrane d'un tiers (ex. « Prof … whatsapp ») **et** des annotations au
  stylo bleu d'un ancien lecteur (soulignements, ratures, chiffres en marge) : même script, avec
  `"encre": true` (efface le stylo bleu) et, sur une photo nette, `"seuil": 200` (filigrane gris plus
  foncé que d'habitude) dans `nettoyer-scans.exceptions.json`. Photo collée dans le chat : la copier
  dans le scratchpad sous le nom `<id>_pN.webp`, puis
  `node scripts/nettoyer-scans.mjs --source=<scratchpad> public/images/<ville>/<id>/<id>_pN.webp`
  (`--sortie=<dossier>` pour un aperçu avant d'écrire). Limites : un stylo qui raye une ligne du sujet
  emporte le haut des lettres, et un stylo noir ne se distingue pas de l'encre imprimée. Reconstituer
  ces passages sur la copie, avant nettoyage, avec les glyphes intacts du même scan (même date ou même
  mot ailleurs sur la page, recalés sur la ligne de base). Un trait de tableau coupé se redessine à
  partir de sa partie intacte ; blanchir les cellules vides où le lecteur a écrit (précédent : AIFF
  Kénitra 2025).

- Filigranes que `nettoyer-scans.mjs` ne voit pas (précédent : 23 concours de Fès, 2026-10-05) :
  « masterfsjes.blogspot.com » **rose** avec un liseré sombre, « www.fsjesmaster.com » en lettres
  **blanches** au milieu de la page, ou en noir gras posé dans un blanc du sujet. Les effacer sur la
  photo d'origine **avant** `nettoyer-scans.mjs --source=…` : pixels roses (r > 120, r − g > 45) ou
  lettres plus claires que le papier, plus leur liseré à 3 px, remplacés par la couleur du papier
  voisin (70e centile, jamais du blanc pur : la photo est grise et un aplat blanc laisse un cadre).
  Seuil du liseré **relatif au papier** (0,72 × papier) : un seuil fixe rate les photos sombres.
  Ne jamais élargir le masque au-delà de 3 px : sur une ligne du sujet, il emporte les mots.
  Marque noire dans un blanc : rectangle serré, rempli de la couleur du papier. Diagonale grise
  restante : `"seuil": 200` dans les exceptions.
- Filigrane en lettres **blanches opaques** posé sur le texte (« Prof … », « whatsapp : 06… ») et logo
  dans un cadre blanc (« L'Agrégé ») : le texte dessous est perdu. `node scripts/recomposer-scan.mjs
  <photo> <scratchpad>/<id>_pN.webp scripts/recomposer-scan/<id>_pN.json` efface les lettres (seuil
  relatif au papier mesuré au-dessus et au-dessous, **jamais** `papier + 10` seul : le fond d'un tableau,
  plus clair que la page, part avec), vide les cellules et lignes touchées, redessine les traits de
  tableau, puis **recompose le texte caché en Times New Roman** (police des sujets FSJES) : ligne de base,
  longueur et inclinaison mesurées sur la photo (`largeur`, `angle`). Ne recomposer qu'un texte lisible en
  partie ou certain (titre, consigne) ; sinon `[illisible sur le scan]` dans l'énoncé. Logo sur un
  encadré tramé : `trame` (répète un morceau de fond sans texte), pas un aplat. Ensuite
  `nettoyer-scans.mjs --source=<scratchpad>`. Précédent : CCA FSJES Fès 2024 (titre du tableau A,
  « Soldes Débiteurs », lignes 1 du T.A.F).

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
   Autres sources (précédent : recherche CCA Aïn Chock, 2026-10-03) :
   - **Studocu** : curl et WebFetch ne voient qu'une page anti-robot. Ouvrir le document dans le
     navigateur intégré : le texte de chaque page est dans `div.pf` > `div.t` (le lire par
     `textContent`, `innerText` est vide). Les fonds `bg*.png` ne contiennent que les filets, pas
     de scan → `images: []`. Le titre Studocu peut se tromper d'année : se fier à l'en-tête ;
   - blog disparu (ex. fsjesmaroc.info) : passer par `archive.org/wayback/available?url=…` ;
   - **mesconcours.ma** ressaisit des sujets sans scan et mélange des reconstitutions : son
     « CCA Aïn Chock 2022/2023 » est la reconstitution non officielle déjà en base
     (`…_CCA_Entrainement`). Ne rien en tirer sans scan ou autre source qui le confirme.
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
5. Pour **chaque** sujet retenu : télécharger les scans → effacer les filigranes d'autres sites
   (fsjesmaster surtout) et filigraner saadconcours.space (§ Scans, règle absolue) → lire les images →
   transcrire `enonce_md` → rédiger `corrige_md` (§ formats ci-dessus) → remplir tous les champs.
6. Écrire les N entrées dans `concours.json` + les miroirs `extraits/<id>.md` et
   `corriges/<id>.md` (copie exacte de `enonce_md` / `corrige_md`, terminée par `\n`).
7. Contrôles : chaque `id` unique, `filiere` ∈ taxonomie, `categorie` cohérente, chaque image
   référencée existe sur disque et ne montre aucun filigrane autre que saadconcours.space (vérifié
   à l'œil, page par page), miroirs identiques au JSON, `git diff --numstat` de
   `concours.json` = ajouts seulement, JSON valide. Rendu : passer `enonce_md`/`corrige_md` dans
   `marked` (lignes `|…|` non converties en `<table>` = tableau cassé). QCM : `node scripts/audit-qcm.mjs <id>`
   ne doit lister le sujet nulle part (règle de [C10](#c10--mise-en-forme-des-qcm-options-en-cases)). **Avec `GITHUB_TOKEN`
   défini, `npm run dev` ne montre pas les nouvelles fiches** : le site lit alors les données sur
   `raw.githubusercontent.com`, et elles n'apparaissent qu'après le push. Sans jeton (cas de ce poste
   en septembre 2026), `dev` et `build` lisent le dépôt local : `npm run check` contrôle alors les
   nouvelles pages avant le push.
8. Fin de recette (§1.5). Message : « Ajoute N concours … » + liste (master, faculté, année, format d'épreuve).

### C2 — Ajouter un concours fourni (photo, PDF, lien)
Comme C1 étapes 5 → 8, à partir du fichier ou du lien que je donne. Si des infos manquent sur le
sujet (année, faculté), les déduire de l'en-tête ; à défaut, **demander**.
- Photos collées dans le chat : seules celles du **premier message** sont enregistrées sur disque
  (dossier `images/` de la session). Celles envoyées en cours de tâche ne sont lisibles qu'à l'écran :
  transcrire quand même, `images: []`, et le signaler dans `notions_cles` et le compte rendu
  (précédent : AIF Aïn Chock 2025, questionnaires B et C). Pour publier les scans, me demander
  de déposer les fichiers (ex. dans `C:\Users\saad\Downloads`) puis les filigraner.
- **PDF scanné** : sur ce poste, `Read` ne lit pas les pages d'un PDF (pdftoppm absent), et un chemin
  accentué du Bureau (« Document numérisé 23.pdf ») peut être introuvable pour lui. Copier le PDF dans
  le scratchpad avec un joker Bash (`cp ~/Desktop/Document\ num*23.pdf …`), puis extraire en Node les
  flux `/Subtype /Image` en `DCTDecode` (un JPEG par page, `/Length` donne la taille) et les lire.
  Scan à plat sans filigrane tiers : `filigrane-scans.mjs --recadrer` directement sur ces JPEG
  (précédent : LCI FP Larache 2025).
- **Sujet déjà en base** (même faculté, master, année, mêmes questions) : ne pas créer de doublon.
  Compléter la fiche existante : remplacer ses scans par les photos fournies (filigranées, recadrées ;
  surtout si les anciens portent le filigrane d'un autre site), relire l'énoncé, rédiger le corrigé
  s'il manque. Vérifier aussi le miroir `corriges/<id>.md` : il peut contenir un brouillon absent
  du JSON (précédent : MRH Aïn Sebaâ 2022).
- Faculté absente de l'en-tête : la déduire des questions reprises d'une session déjà en base
  (précédent : MRH Aïn Sebaâ 2025, Q41 à Q50 identiques à 2018 et 2023) ou du master déjà rattaché
  (AIF → Aïn Chock), et le dire dans le bandeau du corrigé.
- Ne pas mentionner le questionnaire (A, B…) quand une seule version de la session est en base,
  sauf demande.
- Plusieurs questionnaires (A, B, C…) d'une même session = textes différents → une fiche chacun
  (`…_AIF`, `…_AIF2`), chacune renvoyant à l'autre dans `notions_cles`.

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
   **Ses scans aussi** : une règle par image, `/images/<Ville>/<id>/<id>_pN.webp` vers la même page
   de la fiche gardée (ou vers la fiche si elle a moins de pages), chemin encodé (`Mekn%C3%A8s`) —
   Googlebot-Image redemandait encore les scans des 12 doublons un mois après (404, 2026-10-22).
5. Commit : « Supprime le concours <id> » + raison.

**Doublons** (`supprime les doublons`) : ne jamais se fier au seul titre. Un doublon = même
épreuve publiée deux fois : scans identiques octet pour octet (hash), même URL source, énoncé
recouvert à > 75 % (bardeaux de 5 mots). Des masters d'une même faculté qui partagent **une**
page de tronc commun (Meknès 2022/2023) ne sont pas des doublons, ni deux sujets de même titre
dont les textes diffèrent (`SD_…AinChock_CCA` / `CCA2`). Une session qui reprend une partie des
questions d'une autre année n'est pas un doublon non plus : on la garde (décision du 2026-10-11). Garder la fiche au corrigé le plus
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
`/concours/licence-excellence` (et plus sur `/concours`, réservé au Master). Depuis le 2026-10-10
c'est un **espace à part** (`lib/espaces.js`, clé `excellence`, couleur or) : entrée du header,
de « Je prépare… », sa section sur l'accueil (derniers sujets) et sa colonne de pied de page.
1. Même déroulé que C1, avec ces spécificités :
   - **Source principale** : forum semistre.com, section « Concours d'accès aux licences d'excellences »
     (`https://semistre.com/forums/concours-dacces-aux-licences-dexcellences.31/page-N`). Chaque fil
     a des pièces jointes `/attachments/…-jpg.N/` et souvent un PDF dont les pages sont des JPEG
     **compressés en Flate** (`/FlateDecode /DCTDecode`) : extraire le flux puis `zlib.inflateSync`.
     fsjesmaster.com n'a **aucun** sujet de LE (vérifié en septembre 2026).
     **semistre est épuisé depuis le 2026-10-10** : ses 13 fils sont en base ou écartés (le fil
     « Information et Communication » n'a pas de faculté identifiable ; le fil `.162` renvoie vers
     les fils `.161` et `.166`). Ses « quiz » LE Finance Agdal sont des ressaisies sans année.
   - **Sources suivantes : Studocu, puis Scribd** (précédent : 10 sujets 2023-2024 ajoutés le
     2026-10-10). Recherche dans le navigateur intégré : `studocu.com/row/search/<mots>` (requêtes
     utiles : « licence d'excellence concours », « councour d'excellence ») et
     `scribd.com/search?query=…`, puis lire les `a[href*="/document/"]`.
     - Studocu : les pages sont des images `doc-assets.studocu.com/<hash>/html/bgN.png?Policy=…` ;
       l'URL signée de `bg1.png` vaut pour toutes les pages du document (`bg2.png`, `bg3.png`… avec
       la même requête), même celles affichées floutées. Elles sont entourées de bandes blanches
       (les rogner) et d'un filet noir en bas.
     - Scribd : `curl` de la page `scribd.com/document/<id>/x` donne les `…/pages/N-xxx.jsonp`
       (gzip) ; chacun contient l'URL `html.scribd.com/…/images/N-xxx.jpg` (remplacer l'hôte par
       `html.scribdassets.com`, en-tête `Referer: https://www.scribd.com/`). Beaucoup de documents
       Scribd sont des annonces, des listes de candidats ou des « sujets types » inventés : à écarter.
     - Toujours vérifier la faculté par l'en-tête ou, à défaut, par la liste officielle des
       licences d'excellence de la faculté (précédent : Meknès, archive Wayback de
       `fsjes-umi.ac.ma/wp-content/uploads/2024/08/Licence-PE-Master.pdf`). Un titre Studocu se
       trompe souvent d'école (« ENCG Tanger » pour un sujet de la FSJES Meknès).
     - Même faculté, même session, plusieurs licences : une fiche par licence. Sujet recyclé d'une
       année sur l'autre (CCA Souissi 2023 et 2024, 38 questions sur 40 identiques) : deux fiches,
       qui renvoient l'une à l'autre.
   - Marques à effacer sur ces photos : texte rouge « Pr … / rejoindre groupe whatsapp » posé sur
     le sujet, encart blanc « Le petit économiste », pied « Scanné avec CamScanner ». Le rouge
     s'efface par couleur (r > 140, r − g > 70, r − b > 60, plus le liseré rose et le halo cyan
     de la compression JPEG), remplacé par le papier voisin (60e centile par bloc de 12 px, lissé),
     **pas** par diffusion depuis les bords (elle étale le noir du texte voisin). Les mots du sujet
     masqués par le rouge se recomposent en Times New Roman (même méthode que `recomposer-scan.mjs`).
     Ne pas effacer les pastilles vertes ou coches d'un candidat quand elles touchent les lettres.
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

### C10 — Mise en forme des QCM (options en cases)
**Le design de référence** : `/concours/2026_Rabat_FSJESAgdal_GFCF_ConcoursBlancSaadConcours`, où
chaque proposition est une case encadrée avec sa lettre (`li.qcm-opt`, styles `.enonce-content
li.qcm-opt` dans `app/globals.css`). Ce n'est pas une mise en page à écrire à la main : la fiche
(`app/concours/[id]/page.js`) passe l'énoncé dans `formatQCM(md, { tagChoices: true })` puis
`markQcmOptions` (`app/_shared/concoursFormat.js`), qui encadrent automatiquement les options d'un
sujet reconnu comme QCM. **Le travail consiste donc à écrire l'énoncé dans un format que le
formateur reconnaît** (règle « QCM » du § Format de `enonce_md`), jamais à ajouter du HTML.

Ce que le formateur reconnaît (depuis le 2026-10-06) :
- options lettrées `a)` `A)` `a.` `a:` `a -`, une par ligne, ou plusieurs sur une ligne quand il y en a
  au moins trois (« a) … b) … c) … ») ; lignes vides entre options acceptées (précédent : GFC Aïn
  Sebaâ 2025, options séparées par des lignes vides, **0 case** sur la fiche avant correction) ;
- un sujet est un QCM s'il a au moins 5 jeux de 3 options ou plus ; ses questions à deux
  propositions (Vrai / Faux, a/b) sont alors encadrées aussi, sauf en retrait (sous-questions
  d'exercice) ;
- lettres dans le désordre (« c, e, d, b, a ») ou suite d'une question précédente (« e, f, g, h »)
  acceptées. Une lettre qui se répète ouvre un nouveau jeu (précédent : MRH Aïn Sebaâ 2025 Q43,
  « a, A, B, C » imprimé ainsi, la première option reste hors case).

Recette `fais le design du QCM X` / `c'est un QCM` (souvent avec l'en-tête d'un sujet collé) :
1. Retrouver la fiche (établissement, master, année), `node scripts/audit-qcm.mjs <id>`.
2. Fiche listée en « QCM sans cases » : réécrire les options au bon format. Cas déjà rencontrés :
   options séparées par « / » sur la ligne de la question (CCA Souissi 2020), cases ☐ (Marketing
   ENCG El Jadida 2023), tirets sans lettre et options en tableau `| a. … | b. … |` (Actuariat ENCG
   Casablanca 2022 ; attention aux puces qui ne sont pas des options, ex. « aux conditions
   suivantes : - 12 % … »), **options absentes de l'énoncé** (Actuariat Aïn Sebaâ 2017 : les relire
   sur les scans, recette C4). Garder les lettres du sujet. Numéros de question en `**N.**` plutôt
   qu'en `N.` en début de ligne (sinon Markdown en fait une liste numérotée).
3. Fiche listée en « options hors case » : regarder chaque ligne affichée. Deux options collées
   sur une ligne (« a) Oui  b) Non ») → une par ligne. Sous-questions d'exercice en retrait, sujet
   tronqué (une seule option) : normal, ne rien faire.
4. Si des lettres apparaissent ou changent, relire le corrigé (JSON **et** `corriges/<id>.md`, qui
   peut porter un corrigé absent du JSON) : il doit citer les bonnes lettres. Un corrigé rédigé
   sans les options peut citer des lettres fausses (précédent : Actuariat Aïn Sebaâ 2017, refait).
5. Contrôle de rendu sans serveur : `formatQCM` + `marked` + `markQcmOptions` sur l'énoncé, compter
   `class="qcm-opt"`. Le `npm run dev` d'une autre conversation qui tourne dans le même dossier
   partage `.next` : un second serveur y renvoie des 404/500 sur les fiches ; ne pas l'arrêter, faire
   le contrôle en Node (bundle `esbuild --loader:.js=jsx`, les modules de `app/_shared` importent du JSX).
6. Fin de recette (§1.5). Commit : « Met en forme le QCM <master> <faculté> <année> » + ce qui a
   été réécrit.

`mets en forme tous les QCM` : `node scripts/audit-qcm.mjs` sur toute la base, traiter chaque fiche
listée comme ci-dessus. Restent normalement listées (vérifié le 2026-10-06) : 5 études de cas
(Finance et Banque Marrakech 2019, Économétrie Aïn Chock 2023, DEIP Mohammedia 2018, Management
Logistique Tétouan 2019, Finance ENCG Settat, dont le QCM final n'a que 2 questions retrouvées).
Si une règle du formateur change, la mesurer avant/après sur toute la base (nombre de cases par
fiche) : aucune étude de cas ne doit passer en QCM.

### C11 — Concours de Master en droit
Section créée le 2026-10-22 (« add section pour droit concours et ajoute 10 concours de fsjes ») :
même fichier `concours.json`, même schéma et même déroulé que C1/C2, avec `"niveau": "master_droit"`
(`lib/concoursNiveaux.js`). Ces fiches ne sont pas sur `/concours` (Master économie-gestion) mais sur
`/concours/droit`, onglet « Masters de droit » de l'espace Master (`lib/espaces.js`, ouvert par le
contenu `concours-droit` de `lib/contenusPublies.mjs`). Les derniers sujets s'affichent aussi en bas de
`/droit` (« Après la licence ») et dans la section Master de l'accueil. Textes de la page calculés sur les
sujets en base (formats, langues, matières, facultés) : rien à retoucher quand un sujet s'ajoute.
1. **Champs propres** : `categorie: "DRT"` et `filiere` = une sous-filière DRT de `lib/taxonomy.js`
   (affaires et entreprise ; contentieux, justice et modes alternatifs ; civil, famille et immobilier ;
   droit public et science politique). `id` : `<annee>_<Ville>_<Etab>_<Master abrégé>` comme en C1.
   `etablissement` : le nom de la faculté qui a organisé l'épreuve (« FSJP Ait Melloul (Ibn Zohr) » pour
   une faculté de droit issue de la FSJES : pas de renommage). **Sujet en arabe : `master_reel` en arabe**
   (à ma demande, 2026-10-24), sans « ماستر » devant (la fiche l'ajoute), et le nom français dans
   `master_fr`, placé juste après. La fiche titre en arabe (H1 et `<title>` « ماستر … — FSJES … 2024 :
   الموضوع والتصحيح », `concoursSeo.js`), la carte isole l'arabe dans un `<bdi>`, `master_fr` sert à la
   description, à la recherche et à l'image de partage (satori ne sait pas dessiner l'arabe : le build
   plante). Sujet en français : `master_reel` en français, pas de `master_fr`. `modules` en **français** : ils
   relient la fiche aux cours de Droit (`MOTIFS_DROIT`, `lib/concoursParModule.js`) et aux cours FSJES.
   Sujet en français qui cite de l'arabe (épreuve bilingue, traduction) : pas de `langue`, la fiche passe
   ses blocs commençant par l'arabe en `dir="rtl"` (`marquerBlocsArabes`) et le PDF prend la police arabe.
2. **Sujet en arabe** : `"langue": "ar"`. La fiche passe l'énoncé et le corrigé en `dir="rtl"`, les blocs
   sans lettre arabe repassent en écriture latine (`marquerBlocsLatins`, `concoursFormat.js`) ; le PDF
   charge la police arabe (`concoursPdf.js`). Énoncé transcrit en arabe, options `A)` `B)`… une par ligne,
   questions en `**1)**`, `**1-**` ou `**Question 1 -**` comme sur le sujet. **Corrigé rédigé en arabe**
   (langue de la copie attendue), précédé du bandeau en français puis d'une ligne en arabe, séparés par
   une ligne `>` vide (sinon le bandeau prend la direction de l'arabe). Pas d'arabe dans la phrase du
   bandeau français. Sujet en français : pas de champ `langue`.
3. **Sources** (précédent du 2026-10-22) : `wadifa-info.com/fr/modeles-concours/acces-master-doctorat`
   (tableau par année, scans `content/modeles/<n>/page_NN.jpg`), puis fsjesmaster (articles « نموذج امتحان
   القبول في ماستر… » et « Exemple Concours Master Droit… »). Bandeau vert « wadifa-info.com » en bas de
   chaque scan : le couper (première ligne verte détectée), puis effacer « Scanné avec CamScanner »,
   « Scanned with » et les marques de profs (« Cours de français Ali Lmghari ») avant `filigrane-scans.mjs`.
   Logo CamScanner posé sur le texte : blanchir seulement le gris clair du logo (180-220) loin de l'encre,
   jamais par seuil global (les lettres floues partent). fsjesmaster récent : la ligne noire
   « www.fsjesmaster.com » n'est pas reconnue par `nettoyer-scans.mjs` → `effacer` + `seuil: 200` dans
   les exceptions. Écarté : scans trop flous pour être transcrits sans deviner (FSJP Aït Melloul, gestion
   publique territoriale et professions juridiques 2026), facultés hors FSJES quand on demande « FSJES »
   (FP Taza, faculté de Charia de Fès).
   **Se fier à l'en-tête du sujet, pas au titre wadifa** (précédent du 2026-10-23) : la page « Gouvernance »
   de Kelâa des Sraghna porte le sujet du master Contentieux civil et immobilier, et celle « FSJES Salé » du
   master Droit civil économique est un sujet de Souissi. Annotations d'un candidat (coche, cercle, cadre,
   chiffres) **de la même couleur que l'encre** (`encre: true` ne les voit pas) : effacer par zones les seuls
   pixels plus sombres que le fond local (médiane 21 px), en protégeant les lignes du sujet, puis comparer
   à la photo ; un aplat blanc laisse un rectangle visible sur une photo grise.
   Coches et lettres entourées restées sur un scan publié (audit du 2026-10-28) : scan fsjesmaster
   repris par `nettoyer-scans.mjs` → re-télécharger la photo et ajouter chaque coche aux zones `effacer`
   des exceptions (Meknès, Famille et droit 2024). Scan sans procédé reproductible (wadifa, Settat DRA
   2023) → sur le webp publié : pixels plus sombres que le papier de la zone remis à la couleur du papier,
   puis la lettre (« b- », « a. ») redessinée avec une lettre intacte de la même page, placée par
   corrélation sur la lettre d'origine. Relever les zones sur une grille fine (×3, repère tous les 20 px) :
   lues sur une bande réduite, elles tombent sur la mauvaise ligne. Planche avant/après de chaque zone
   avant d'écrire, et mettre à jour le bandeau du corrigé (« effacées du scan », plus « visibles »).
4. Depuis la décision ministérielle de juillet 2025, beaucoup de masters sélectionnent sur dossier : peu
   de sujets 2025 existent. Les plus récents en base sont ceux de la session 2026-2027 (Aïn Chock, Aït Melloul).
   Au 2026-10-23, wadifa-info n'a plus de sujet de droit en arabe daté de 2025 ou 2026 hors de la base, à part
   ceux écartés ci-dessus. **Sources épuisées au 2026-10-23** (après trois passes, 60 sujets de droit en
   base) : wadifa-info (`acces-master-doctorat`, 196 modèles) et fsjesmaster n'ont plus de sujet de master
   de droit hors base (constat revu le 2026-10-30, voir plus bas), en arabe comme en français ; restent seulement des concours de recrutement (ANCFCC),
   des doctorats, la Faculté de Charia de Fès et un master de la FP de l'Université Moulay Ismaïl (ville
   non indiquée). Recherche élargie du 2026-10-23 (3 sujets en français trouvés) : **Studocu** n'a aucun
   sujet de master de droit marocain (le recueil « FSJES-Meknès 2008-2017 » est verrouillé après 6 pages
   et porte sur l'économie) ; **mesconcours.ma** (47 sessions de droit) n'a que des sujets en arabe
   ressaisis sans scan, et son contenu est protégé : ne rien en reprendre ; almaster.ma, economie-gestion.com,
   9rayti, orientation-chabab : annonces seulement ; concoursmaster.blogspot.com : listes de questions sans
   faculté ni année. Ce qui a servi : archive.org de **fsjesmaroc.info** (CDX
   `web.archive.org/cdx/search/cdx?url=fsjesmaroc.info*`, images encore servies par blogspot), un ancien
   modèle wadifa hors filtre « droit » (Gouvernance publique 2014) et un article fsjesmaster classé en
   science politique (Communication politique 2022). Pour aller plus loin : demander des sujets.
   **Nouvelle source du 2026-10-30 (30 sujets ajoutés, 90 en base) : fsjesouissi.com**, blog de droit en
   arabe : flux `feeds/posts/default?alt=json&max-results=150&start-index=N` (≈ 1 050 articles), filtrer
   « ماستر » + « نماذج / امتحان ». Photos de 480-600 px datées surtout de 2016 à 2020, avec cadres, ellipses
   et titres rouges, jaunes ou bleus ajoutés par le blog ; une même page mélange des facultés : se fier à
   l'en-tête du scan, pas au titre (la page « مكناس » contient Mohammedia). Elle est épuisée pour les sujets
   datés et lisibles ; restent des listes de questions sans faculté ni année, 2016 et avant (Nador,
   Tétouan, Meknès) et un QCM de 10 pages à l'en-tête non identifié. Autres ajouts possibles dans la
   sélection : fsjesmaster classé en science politique ou en affaires (Études diplomatiques,
   Études internationales, Affaires internationales). Faculté de Charia de Fès acceptée quand la commande
   dit « droit » sans dire « FSJES ». Toujours écartés : Aït Melloul 2026 (flou confirmé au zoom), Aïn Chock
   réf. 3282 (scan détruit).
   Nettoyage de ces photos teintées : ne pas utiliser `nettoyer-photo.mjs`, dont la détection du stylo
   bleu efface aussi l'encre sur une photo bleutée. D'abord une balance des blancs par canal (division
   par le fond de chaque canal), puis canal max et courbe noir → blanc ; les titres et cadres de couleur
   disparaissent. Titre coloré qui laisse un fantôme : masque de saturation (max − min > 60 après balance),
   jamais sur un sujet manuscrit à l'encre bleue. Titre jaune à ombre noire : rectangle. Marque fsjesmaster
   en diagonale sur photo sombre : seuil blanc 178, à vérifier page par page ; sur un sujet manuscrit,
   elle reste visible → texte seul, `images: []`.
   Anciens scans wadifa (2017-2023, ≈ 350 px de large) : filigrane « wadifa-info.com » gris en diagonale.
   `nettoyer-scans.mjs` les blanchit (Meknès 2023, Famille et droit, illisible) : égaliser le fond à la place
   (niveaux de gris, fond = médiane 25 px puis flou, rapport pixel/fond ramené entre 0,50 et 0,86, agrandi
   ×2), puis `filigrane-scans.mjs`. Avec le canal max au lieu du gris, la même méthode efface aussi le
   surligneur jaune et le filigrane rose de fsjesmaster ; la ligne noire « www.fsjesmaster.com » se
   blanchit par un rectangle. Une photo de moins de 500 px trop dégradée : texte seul, `images: []`.
5. Contrôles et fin de recette comme C1 (`audit-qcm.mjs`, miroirs, rendu, `npm run check`).
   Commit : « Ajoute N concours de Masters de droit … ».

### C12 — Concours de l'enseignement (Taalim) — supprimé
**Espaces ENCG et Taalim supprimés le 2026-10-29** (« delete ENCG and Taalim section, they are unused,
keep Droit — la FSJES, c'est l'économie-gestion et le droit »). Pages, console, données (`encg.json`, les
4 sujets Taalim et leurs scans), niveaux `post_bac` / `taalim` et catégorie ENS retirés ; anciennes adresses en
301 (`public/_redirects`). Les sujets de **Master** passés dans une ENCG restent des concours de Master (C1).
Une demande « ajoute un cours ENCG », « ajoute un concours TAFEM » ou « ajoute un sujet Taalim » : **ne pas
recréer l'espace**, le signaler et demander. Un sujet de Master d'une ENCG suit C1/C2.

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
1. Vérifier que le module n'existe pas déjà (`module` / `id`), y compris sous un autre intitulé
   dans une autre filière : ne jamais le dupliquer. Mettre `filiere` à `""` (commun au parcours)
   et ajouter une ligne d'en-tête qui donne les deux intitulés. Précédent : « Introduction à
   l'économétrie » (S5 EIL) = `econometrie_cours`, octobre 2026.
   Vérifier aussi `droit.json` : si la matière y a déjà un cours rédigé, ne pas
   en écrire un second (règle 1.6) — me le signaler et proposer de faire de l'un un renvoi.
   Un intitulé peut être couvert par deux modules existants : « Économie internationale » (S5
   Économétrie appliquée) = `introecoint_cours` + `theoriescomint_cours`, passés à `filiere: ""`,
   chacun avec la ligne d'en-tête qui renvoie à l'autre. Filière Économétrie appliquée (S5) publiée
   le 2026-10-14 : `microapprof_cours`, `iaro_cours`, `comptanat_cours` + ces modules communs.
   Une matière déjà traitée comme chapitre d'un autre module : créer le module et y **déplacer** ces
   chapitres (K3, « Séparer un module »), jamais une deuxième version. Le programme national en ligne
   (`tcn_*.pdf` de l'UMI) peut être injoignable : les descriptifs des facultés donnent alors le plan.
2. Plan calqué sur le programme national du module (chapitres réellement enseignés en FSJES).
3. Rédiger `content` selon la convention ci-dessus (cours complet, pas un résumé).
4. Si demandé ou si c'est un module prioritaire : faire aussi [K2](#k2--compléter-un-cours-par-chapitres).
5. `ajoute les cours du S3` : lister les modules du semestre manquants, les créer tous.
6. Contrôle : ouvrir `/cours/<id>` en local (`npm run dev`) et vérifier que les chapitres sont détectés.
7. Ajouter l'`id` du module dans `MOTIFS` (`lib/concoursParModule.js`) avec les mots-clés des épreuves
   de concours correspondantes : c'est ce qui affiche « Sujets de concours avec une épreuve de … »
   sur le module et ses chapitres, et « Réviser les matières de ce sujet » sur les fiches concours
   concernées. Ces liens dans les deux sens sont ce qui amène Google à explorer les pages concours
   et les pages de cours. Sans cette étape, le nouveau module n'a aucun lien depuis les concours.
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
- À l'assemblage, n'indenter que le code JS : le Markdown des gabarits md`…` reste en
  colonne 0, sinon `### Exercice` et les puces `- ` ne sont plus reconnus (exercices et
  résumé comptés à zéro). KaTeX est rendu dans le navigateur : contrôler les formules sur
  la page (`.katex-error`, `$` restés bruts), pas avec curl.
- Droit marocain : vérifier les articles sur le texte du Code de commerce (loi 15-95), en
  tenant compte des réformes : livre V remplacé par la loi 73-17 (2018), régime pénal du
  chèque revu par la loi 71-24 (2026). Ne reprendre que ce sur quoi les sources concordent.

### K3 — Modifier ou supprimer un cours
- Modifier : éditer `content` (respecter la convention), ou le fichier de compléments.
- Supprimer : retirer l'entrée de `cours.json`, supprimer son fichier `lib/fsjesContenu/…` et sa
  ligne dans `index.js`, chercher les liens `/cours/<id>` dans `blog.json` et les corriger.
- Séparer un module en deux (`le cours X doit être séparé en Y (Sx) et Z (Sy)`, précédent :
  Statistiques et Probabilités → `stats_cours` S2 + `probas_cours` S3, 2026-09-27) : le module
  d'origine garde son `id` (ses URL et les liens du blog restent valides) ; les chapitres déplacés
  gardent leur `titre`, donc leur slug, et chaque ancienne URL `/cours/<ancien>/<slug>` reçoit une
  301 vers `/cours/<nouveau>/<slug>` dans `public/_redirects`. Découper les compléments par script
  (blocs de l'ancien fichier renumérotés), compléter chaque nouveau module jusqu'à un programme
  complet (norme « cours détaillé »), séparer `MOTIFS` et relier les deux modules entre eux
  (liens dans les chapitres et l'annexe).
  Deuxième précédent : `ajoute macroéconomie 1 dans S1 gestion` (2026-10-28). L'ancien
  « Macroéconomie » (S2) contenait le programme des deux modules : ses chapitres 1 à 4
  (comptabilité nationale, agrégats, ERE, consommation et investissement) sont passés dans
  `macro1_cours` (S1, parcours gestion) + un chapitre « Classiques et keynésiens » ;
  `macro_cours` est devenu « Macroéconomie 2 » (S2, commun) avec deux chapitres ajoutés
  (marché du travail et offre globale, modèle OG-DG). Le programme officiel est celui du
  **tronc commun national** du réseau des doyens (maquettes publiées par l'UMI, mars 2026 :
  `umi.ac.ma/wp-content/uploads/2026/03/tcn_gestion.pdf` et `tcn_economie.pdf`, texte extrait
  avec `pdftotext`). Gestion : Macro 1 en S1, Macro 2 en S2 ; Économie : Macro 1 en S2,
  Macro 2 en S3. Le S1 Gestion y compte 7 modules (Macroéconomie 1 incluse) : le guide
  `comment_valider_le_s1_gestion_fsjes_maroc` a été mis à jour en conséquence.
  Troisième précédent : `ajoute cours estimation et echantillonnage s4 economie` (2026-10-30). Les chapitres 7
  et 8 de `probas_cours` ont rejoint `echantillonnage_cours` (S4, parcours économie), qui compte 6 chapitres :
  lois utiles, techniques d'échantillonnage, distributions, estimation ponctuelle, intervalle de confiance,
  tests. Quand un chapitre publié est réparti sur plusieurs chapitres, il ne garde pas son titre : son ancienne
  URL part en 301 vers le chapitre qui en reprend l'essentiel (ici `l-estimation-par-intervalle-de-confiance`).
  Mettre à jour aussi la 301 plus ancienne qui visait cette URL, pour éviter une redirection en deux temps.

---

### K4 — Cours ENCG — supprimé
**Espaces ENCG et Taalim supprimés le 2026-10-29** (« delete ENCG and Taalim section, they are unused,
keep Droit — la FSJES, c'est l'économie-gestion et le droit »). Pages, console, données (`encg.json`, les
4 sujets Taalim et leurs scans), niveaux `post_bac` / `taalim` et catégorie ENS retirés ; anciennes adresses en
301 (`public/_redirects`). Les sujets de **Master** passés dans une ENCG restent des concours de Master (C1).
Une demande « ajoute un cours ENCG », « ajoute un concours TAFEM » ou « ajoute un sujet Taalim » : **ne pas
recréer l'espace**, le signaler et demander. Un sujet de Master d'une ENCG suit C1/C2.

### K5 — Cours de Droit (FSJES)
Espace Droit (`lib/espaces.js`, clé `droit`, couleur violet), créé le 2026-10-15 : pages `/droit`,
`/droit/<id>`, `/droit/<id>/<chapitre>`, console Contenu › Cours Droit. **Lancé le 2026-10-17**
(`DROIT_LANCE = true`, `lib/contenusPublies.mjs`, avec le S1 rédigé en français et en arabe) : un
module publié est en ligne au déploiement suivant (pages, sitemap, recherche, accueil). Le titre et
le H1 de `/droit` se calculent sur les semestres publiés (« Cours de Droit FSJES S1 à S4 (FR et
arabe) ») : rien à retoucher quand un semestre s'ajoute. Une page de module ou de chapitre en arabe a
son titre et sa description en arabe. Relire en `npm run dev` avant de committer.
- **Noms des facultés** (2026-10-18, Saad n'a pas aimé la séparation FEG / FSJP) : partout
  **« FSJES »** — « Licence FSJES » (`/cours`), « Licence de Droit (FSJES) » (`/droit`). Pas de
  « FEG », « FSJP », « ex-FSJES » ni « Éco-Gestion » dans les textes du site. Les concours et news
  gardent le nom de l'établissement qui les a organisés (FEG Taza, FSJP Safi… : pas de renommage).
- **Droit = onglet de la Licence** (2026-10-18, Saad n'a pas aimé la séparation Licence / Droit) :
  plus d'espace `droit` dans `lib/espaces.js`. L'espace `licence` (« Licence FSJES », teal) a les
  onglets « Économie et gestion » (`/cours`), « Droit » (`/droit`) et « QCM par module » ; sur
  l'accueil, une seule carte et une seule section Licence (chiffres additionnés, sous-titres
  « Économie et gestion » puis « Droit »). Ne jamais recréer d'entrée « Droit » dans le menu.
- **Présentation de `/droit`** (2026-10-18) : comme `/cours`, **une section par semestre**
  (« Semestre 1 »…) ; la filière ou le tronc commun s'affiche sur la carte, la langue et la filière
  sont des filtres. Jamais de sections « Tronc commun · S1 », « Droit privé · S1 », par langue ou
  par parcours. Sur l'accueil : un lien par semestre, pas par semestre et langue.
- **Structure** (`lib/droitTaxonomy.js`) : d'abord le **tronc commun** (`filiere: ""`), puis la
  filière et son parcours. Deux langues, chacune ses filières :
  français — Droit privé (Droit financier et des affaires ; Métiers du droit et de la justice),
  Droit public (Études politiques et internationales ; Science politique et droit
  constitutionnel ; Géopolitique et veille stratégique) ; arabe — القانون الخاص (العلوم الجنائية
  والأمنية ; المهن القانونية والقضائية ; قانون المال والأعمال), القانون العام (المنازعات العمومية
  والتدقيق المالي والهندسة الضريبية ; الإدارة والتنمية). Intitulés de la FSJES Aïn Chock.
- **Schéma** (`droit.json`) : `id` (`<module-en-tirets>-s<N>`, fixe l'URL), `module`, `title`,
  `description` (120-160 caractères), `langue` (`fr`/`ar`), `semestre` (`S1`…`S6`), `filiere`
  (`""`, `prive`, `public`, `prive-ar`, `public-ar`), `parcours` (`""` = commun à la filière, sinon
  un code de la taxonomie), `content`, `available`.
- **Markdown** : convention FSJES et norme « cours détaillé » (section K), `## ⚡ RÉSUMÉ` possible,
  QCM et exercices en plus dans `lib/droitContenu/<id>.js` (format K2), déclaré dans `SUPPLEMENTS`.
  Un cours en arabe garde les marqueurs français (`# CHAPITRE N — <titre arabe>`, `## ✏️ EXERCICE`,
  `## ✅ CORRECTION`) : la page passe en RTL ; l'adresse d'un chapitre au titre arabe est
  `chapitre-N`.
- **Programme déjà saisi** (2026-10-16, noms seuls : `available: false`, `content` vide), S1 → S4
  en français. Un module au même intitulé en droit privé et en droit public est au **tronc commun**
  (`filiere: ""`, un seul cours) ; seuls les autres portent leur filière. Langues, soft skills,
  digital skills et culture & art skills ne sont pas saisis (demande du 2026-10-16).
  - Tronc commun — S1 : Introduction à l'étude du droit (renvoi), Introduction à l'étude du droit
    musulman, Théorie générale du droit constitutionnel, Introduction à la science politique.
    S2 : Théorie générale des obligations (en droit public : « Théorie des obligations et des
    contrats », le cours couvre les deux), Droit pénal général, Introduction aux relations
    internationales, L'organisation administrative. S3 : Droit de la famille, Droit social,
    Finances publiques, L'action administrative. S4 : Organisation judiciaire, Droit foncier,
    Contentieux administratif (en droit public : « … et financier », le cours traite aussi le
    contentieux financier), Droits de l'homme et libertés publiques.
  - Droit privé : Sociologie du droit (S1), Droit commercial fondamental (S2, renvoi), Droit pénal
    spécial (S3), Droit des sociétés (S4, renvoi).
  - Droit public : Introduction à l'économie et à la gestion (S1, renvoi), Les grands systèmes
    constitutionnels (S2), Droit international public (S3), Histoire des idées politiques (S4).
  - En arabe (`langue: "ar"`, id `<module-en-français>-ar-s<N>`), saisi le 2026-10-16 sans
    langues ni مهارات. Même règle : intitulé commun aux deux filières = tronc commun arabe
    (`filiere: ""`). Tronc commun — S1 مدخل لدراسة القانون، مدخل لدراسة الشريعة، النظرية العامة
    للقانون الدستوري، مدخل إلى علم السياسة ؛ S2 النظرية العامة للالتزامات والعقود، القانون الجنائي
    العام، مدخل للعلاقات الدولية، مدخل إلى القانون الإداري والتنظيم الإداري ؛ S3 قانون الأسرة،
    القانون الاجتماعي، المالية العامة، النشاط الإداري ؛ S4 التنظيم القضائي، المنازعات الإدارية، حقوق
    الإنسان والحريات العامة (« حقوق الإنسان والحريات » en droit public).
    القانون الخاص (`prive-ar`) : علم الاجتماع القانوني (S1)، القانون التجاري الأساسي (S2)، القانون
    الجنائي الخاص (S3)، قانون الشركات والقانون العقاري (S4).
    القانون العام (`public-ar`) : مدخل لدراسة الاقتصاد والتدبير (S1)، الأنظمة الدستورية الكبرى (S2)،
    القانون الدولي العام (S3)، تاريخ الفكر السياسي وقانون المساطر (S4).
    Pas de renvoi vers la Licence FSJES (cours en arabe, pas un doublon de texte).
  « ajoute le cours X » remplit la fiche existante (même `id`) au lieu d'en créer une.
- **Rédigés** (2026-10-17, « ajoute les cours S1 de droit privé ») : tout le S1 de droit privé en
  français. Théorie générale du droit constitutionnel, Introduction à la science politique,
  Introduction à l'étude du droit musulman (tronc commun) et Sociologie du droit (`prive`), 7 chapitres
  chacun avec compléments (résumé, exercices 2 et 3, 10 QCM). Un module qui relève du tronc commun sert
  aux deux filières : le S1 de droit public est donc aussi complet depuis l'activation, le même jour,
  du renvoi Introduction à l'économie et à la gestion → `introeco_cours`. Pour un autre semestre, ne
  rédiger que les modules propres à la filière demandée et ceux du tronc commun encore vides. Procédure : celle de la norme
  « cours détaillé » (scratchpad `k/<id>/head.md`, `cNN.md`, `sNN.js`, `annexe.md`), assemblée par un
  script qui écrit `content`, `description`, `available`, le fichier `lib/droitContenu/<id>.js` et sa
  ligne dans `index.js`, puis contrôle chapitres, mots, exercices, QCM et descriptions. Les chiffres
  d'enquête sans source publique vérifiée sont présentés comme « données fictives ».
- **Rédigés en arabe** (2026-10-17, « ajoute les cours de القانون الخاص s1 ») : tout le S1 de
  القانون الخاص — مدخل لدراسة القانون، مدخل لدراسة الشريعة، النظرية العامة للقانون الدستوري، مدخل إلى
  علم السياسة (tronc commun arabe) et علم الاجتماع القانوني (`prive-ar`). Le S1 de القانون العام ne
  demande plus que مدخل لدراسة الاقتصاد والتدبير (cours en arabe à rédiger : pas de renvoi possible).
  Règles pour l'arabe : rédiger directement en arabe (plan et cas pratiques propres, pas une traduction
  du cours français) ; marqueurs du Markdown en français (`# CHAPITRE N — <titre arabe>`,
  `## ✏️ EXERCICE`, `### Exercice N` dans les compléments, `Voir le corrigé` dans `<details>`) ;
  chiffres occidentaux ; « الأسدس » pour le semestre, « الفصل » pour le chapitre. Seuil de longueur :
  **1 000 mots arabes** par chapitre (l'arabe compte environ 20 % de mots de moins que le français pour
  le même contenu) ; viser 1 100 dès le premier jet, sinon il faut rallonger chaque chapitre.
- **Programme arabe complet** (2026-10-18, « continue les cours de droit ») : S3 (القانون الدولي العام)
  et tout le S4 arabe rédigés — التنظيم القضائي، المنازعات الإدارية، حقوق الإنسان والحريات العامة (tronc
  commun), قانون الشركات et القانون العقاري (`prive-ar`), تاريخ الفكر السياسي et قانون المساطر
  (`public-ar`). Toutes les fiches de `droit.json` (S1 → S4, FR et AR) sont `available`. « قانون
  المساطر » est traité comme les **deux** procédures (civile puis pénale, chapitres 1-4 et 5-7).
  Méthode qui marche : un dossier scratchpad par cours (`head.md`, `c01.md`…`c07.md`, `annexe.md`),
  le fichier `lib/droitContenu/<id>.js` écrit à la main, puis un script d'assemblage qui remplit la
  fiche, ajoute l'import et la ligne `SUPPLEMENTS`, et contrôle mots/exercices/QCM/descriptions.
  `next dev` ne voit une nouvelle page `/droit/<id>/<chapitre>` qu'après **redémarrage** du serveur
  (`dynamicParams = false`). Étape suivante possible : S5-S6 (programme à saisir d'abord).
  Quand un semestre s'ajoute, mettre à jour la ligne Droit de `public/llms.txt` (faite le 2026-10-18 pour S1 → S4).
- **Un seul cours par matière** (règle 1.6) : une matière qui a déjà un cours dans `cours.json` ne
  se rédige pas une 2ᵉ fois. La fiche porte `renvoi` (id du cours FSJES), `content` vide,
  `available: true` et une description qui le dit ; sa carte sur `/droit` (et la recherche) mène au
  cours FSJES, sans page `/droit/<id>` (`droitRenvois`, `lib/droit.js`). En place
  depuis le 2026-10-16 : Introduction à l'étude du droit → `introdroit_cours`, Droit commercial
  fondamental → `droitaffaires_cours`, Droit des sociétés → `droitsocietes_cours`, Introduction à
  l'économie et à la gestion → `introeco_cours` (la partie gestion est dans `introgestion_cours`). Organisation
  judiciaire (S4) reste à rédiger : `introdroit_cours` n'en a qu'un chapitre. Un cours en arabe
  sur la même matière n'est pas un doublon de texte.
- Droit marocain : textes en vigueur (Constitution 2011, DOC, Code de commerce et réformes, Code
  pénal, procédure civile et pénale, lois organiques) ; vérifier chaque article cité.
- **Fait au lancement** (2026-10-17) : `RESUME` + `SECTIONS` de l'accueil (un lien par semestre,
  quatre premiers modules), chapitres et QCM de Droit dans les chiffres de l'accueil, `/a-propos`,
  `/faq`, titre et description du site, manifeste, image de partage, `llms.txt`.
  Quand un semestre s'ajoute : mettre à jour la liste des modules dans `public/llms.txt` (règle 1.8).
  Concours de droit : entrés dans la base le 2026-10-22 (recette C11) ; une fiche `master_droit` mène aux
  cours de Droit de ses matières (`MOTIFS_DROIT`, `lib/concoursParModule.js`), dans la langue du sujet.

## B. BAC (Sciences Économiques & Gestion)

### B1 — Rédiger des chapitres Bac
1. La structure (niveaux, matières, unités, **slugs de chapitres**) est fixée par
   `lib/bacProgramme.js` : ne jamais inventer un slug, le reprendre de là. Un chapitre absent du
   programme se déduit des dossiers des sujets nationaux et de leurs corrigés (`pdftotext -enc UTF-8`
   sur `public/bac/nationaux/`), filière par filière : SE et SGC n'ont pas les mêmes dossiers. L'ajouter
   en fin de matière pour ne pas décaler la numérotation (précédent : statistiques EGS, 2026-10-30).
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

> **Section cachée depuis le 2026-10-28** (`QCM_LANCE = false`, `lib/contenusPublies.mjs`) : ni
> pages, ni liens, ni sitemap ; `/evaluation` et ses fiches redirigent en 302 vers `/concours`
> (`public/_redirects`) et `quiz.json` n'est pas déployé. Les QCM des chapitres de cours ne sont
> pas concernés. **Relancer** : `QCM_LANCE = true`, retirer le bloc « Section QCM cachée » de
> `public/_redirects`, puis rétablir les liens du blog vers `/evaluation` (retirés dans le même
> commit : `git show <commit> -- public/data/blog.json`). Ajouter une évaluation reste possible
> en attendant : elle n'apparaîtra qu'au relancement.

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
  "seoTitle": "(facultatif) titre Google ≤ 65 caractères si title est plus long",
  "excerpt": "1-2 phrases (≈ 250 caractères) pour la carte ; la meta description en garde 155.",
  "publishedAt": "AAAA-MM-JJ",
  "updatedAt": "(facultatif) AAAA-MM-JJ de la dernière révision : dateModified, sitemap, « Mis à jour le »",
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
   **Comparatifs** : un seul article par domaine, jamais de « Master X vs Master Y » deux à deux
   (fusion du 2026-10-11) : finance et comptabilité → `master_cca_vs_master_finance_lequel_choisir`,
   management → `master_grh_vs_entrepreneuriat_lequel_choisir`, type d'établissement (FSJES, ENCG,
   Master Spécialisé, public ou privé) → `master_public_vs_master_prive_au_maroc_que_choisir`. Un
   nouveau master s'ajoute à l'article de son domaine. Les guides par faculté (« préparer le master X
   de la faculté Y », avec ou sans cahier PDF) sont voulus : on les enrichit, on ne les supprime pas.
   **Hubs (2026-10-29)** : « les matières à préparer pour le master X » et « FSJES <ville> : concours
   Master » ne s'écrivent plus en article. Ces questions ont leur page calculée sur la base,
   `/concours/master/<slug>` et `/concours/ville/<slug>` (`lib/concoursHubs.js`, à partir de 5 sujets
   publiés) : liste à jour des sujets, établissements, cours à réviser. Les 23 articles de ces deux
   familles y ont été fusionnés (`available: false`, champ `fusion` = adresse du hub, texte repris en
   fin de hub sous « Guide », 301 dans `public/_redirects`). Un nouveau type de master : une entrée
   dans `MASTER_HUBS` (sous-filière de `lib/taxonomy.js`), jamais un article de plus. Un lien vers ces
   sujets dans un article : vers le hub, pas vers `/concours?q=`.
2. **Fondé sur les données du site** : analyser les concours en base (modules qui reviennent,
   format d'épreuve, difficulté, questions recyclées d'une année à l'autre) et donner des chiffres
   (« Comptabilité analytique : 8 sessions sur 8 »). C'est ce qui distingue l'article (AdSense).
3. Structure : intro sans titre → sections `##` → `## En résumé` → **`## FAQ`** avec des
   questions en `### …` (section visible ; plus de balisage FAQPage, voir 1.7).
4. Maillage interne : liens relatifs vers `/concours/<id>`, `/cours/<id>`, `/evaluation/<id>`,
   `/blog/<id>` — uniquement vers des `id` qui existent.
5. 1 500 à 3 000 mots, noms réels des facultés et masters (ce que les étudiants recherchent).
6. `ajoute 3 articles` sans sujet : proposer les sujets en priorité sur les masters/facultés
   bien fournis en concours mais sans article, puis rédiger.

### A2 — Modifier ou supprimer un article
- Mettre à jour : réécrire les sections concernées, **ne pas changer l'`id`** (URL indexée),
  mettre à jour les chiffres avec l'état actuel de la base, et poser `updatedAt` à la date du jour.
- Article qui offre un PDF (cahier, fiche) : le PDF est **hébergé sur le site**, dans
  `public/cahiers/<slug>.pdf`, et le bouton « Télécharger » pointe dessus. Jamais un bouton
  « Télécharger le PDF » qui mène à un post Facebook ou à une autre page : promesse non tenue =
  retour immédiat vers Google (SEO) et navigation trompeuse (AdSense). Facebook reste un lien
  secondaire (« pose ta question sous la publication »). Indiquer le nombre de pages et le poids.
  Précédent : cahier Master GFC FSJES Aïn Sebaâ, 2026-10-02.
- Supprimer : retirer l'entrée ; chercher les liens `/blog/<id>` dans les autres articles et les corriger.
- Supprimer **ou dépublier** (`available: false`) : ajouter `/blog/<id> <page qui reprend le sujet> 301`
  dans `public/_redirects` — un article dépublié répond 404 et Googlebot le redemande pendant des
  semaines (guide « FSJES Fès », 404 quotidiennes un mois après, 2026-10-22). Un guide de ville peut
  renvoyer vers `/concours?q=<Ville>`, la liste filtrée des sujets de la ville.
- **Avant de dépublier ou supprimer un article, vérifier ses clics dans Search Console**
  (Performances › Pages, propriété `https://www.saadconcours.space/`). Un article qui amène du trafic
  se **réécrit sous le même `id`**, il ne se supprime pas — précédent : les guides « FSJES Mohammedia »
  et « FSJES Tétouan », dépubliés comme quasi-doublons le 24/09/2026 alors qu'ils étaient parmi les
  pages les plus visitées, puis réécrits le jour même avec les vrais sujets de la faculté.

### A3 — Cahier de préparation PDF + article (« fais le même cahier pour <master> <fac> »)
Modèle : cahier GFC Aïn Sebaâ et cahier AIF Aïn Chock (article
`cahier_preparation_master_aif_fsjes_ain_chock_pdf_gratuit`, 2026-10-02).
1. **Annales** : partir des concours du master en base (énoncé + corrigé). S'il y en a peu, ajouter
   les sujets d'un master voisin de la même faculté dont le jury recycle les questions (AIF ← ACGSI),
   en le disant dans le cahier. Chaque réponse est revérifiée (les vieux corrigés en base peuvent
   être faux) et porte un niveau : réponse sûre / probable / à vérifier. Une question écrite par nous
   est marquée « Entraînement » et n'est jamais présentée comme une annale.
2. **PDF** : copier `scripts/cahier-pdf/aif-ain-chock/` dans un nouveau dossier, réécrire `qcm.mjs`
   (QCM par partie) et `fiches.mjs` (mémo, 12 pièges, fiches avec formules LaTeX), adapter les
   textes de `build.mjs`, puis `node scripts/cahier-pdf/<dossier>/build.mjs public/cahiers/<slug>.pdf`.
   Outils : Edge headless + `pdftotext` (pas de Python sur le poste). Relire des pages avec
   `snap.mjs` (couverture, sommaire, une fiche, une page de QCM, la fin).
3. Le cahier est un **document officiel de saadconcours.space** (couverture et encadré). Préciser
   seulement que la faculté ne publie pas de corrigé : les réponses sont rédigées par SaadConcours.
4. **Article** (recette A1) : chiffres tirés des annales (questions par thème, questions recyclées,
   « aucune réponse » justes…), bouton de téléchargement vers `/cahiers/<slug>.pdf` avec pages et
   poids, liens vers les fiches concours. Pas de lien Facebook tant qu'aucune publication n'existe.
5. Précédent CCA Aïn Chock (`scripts/cahier-pdf/cca-ain-chock/`, 2026-10-03) :
   - concours passé du rédigé au QCM : les exercices des épreuves rédigées sont **mis en QCM**
     (source « … · adapté en QCM » : énoncé du sujet, propositions écrites par nous) ;
   - **seulement des questions des sujets du master** (demande du 2026-10-03) : pas de QCM
     d'entraînement dans le PDF (`AVEC_ENTRAINEMENT = false` dans `build.mjs`) ; un module sans
     annales (IFRS) n'a qu'une fiche de cours ;
   - sujets nommés en toutes lettres partout (« CCA 2019 (formation initiale) », « CCA non daté 1 »,
     « CCA 2022/23 (reconstitution) ») : jamais d'abréviation (A, B, Rec.) ; chaque trame qui
     retombe liste les sujets où elle apparaît, vérifiés dans les énoncés ;
   - une question reprise dans « Les trames qui retombent » doit être unique : champ `key` si sa
     source est partagée ;
   - une fiche en brouillon (sujet incomplet) peut servir de source au cahier, mais l'article ne
     la lie pas (pas de page publique) ; une reconstitution non officielle est nommée comme telle.
6. Précédent LCI FP Larache (`scripts/cahier-pdf/lci-larache/`, 2026-10-08) : partir du dossier
   **CCA** (le plus récent), pas de l'AIF.
   - master jeune (2 sessions, 140 QCM) : le cahier reprend **toutes** les questions ; contrôle
     automatique avant le rendu : chaque `Qn` des deux sujets présent une fois, et la lettre de
     `qcm.mjs` comparée à celle des corrigés en base (motif `**Qn — X.**`) ;
   - « notions qui retombent » entre sessions : indiquer la bonne lettre de chaque session (le jury
     change la lettre : argument fort de l'article) ;
   - formule LaTeX trop large (plusieurs égalités en `\qquad`) : elle déborde à droite sans erreur
     KaTeX. La couper avec `\begin{gathered} … \\ … \end{gathered}` et relire la page au `snap.mjs` ;
   - `.page.fin { break-inside: avoid; }` dans `style.css`, sinon la ligne © part seule sur une page ;
   - **dédicace** demandée (amis qui passent le concours) : pleine page en grand juste après la
     couverture (`section.page.dedicace`, styles en fin de `style.css`) + un mot sur la page de fin.
     Le nombre de pages change : mettre à jour l'article (bouton et lien de téléchargement).

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
- `lance le scraper news` : `scripts/fetch_almaster.py` (workflow
  `.github/workflows/update-news.yml`, sans cron depuis le 04/10/2026 : lancement à la main) ; le scraper est désactivable dans `settings.json`
  (`newsScraperEnabled`).

---

## V. BOUTIQUE (cahiers commandés sur WhatsApp)

### V1 — Boutique : cahiers commandés sur WhatsApp
- **Plus de Gumroad** (décision du 2026-10-30) : le bouton « Commander sur WhatsApp » de `/boutique/<id>` ouvre `wa.me/212713875327` avec un message qui nomme le cahier et son prix (`commandeHref`, `lib/boutique.js` ; le préfixe « Cahier de préparation — » du titre est retiré du message). Saad répond, encaisse et **envoie le PDF à la main sur WhatsApp**. Le site n’encaisse rien et **ne contient jamais le PDF d’un cahier vendu** (ni `public/`, ni lien, ni extrait complet) : il est fabriqué hors site (ex. `docs/cahier-intro-droit-s1/`, ignoré par git).
- Pages publiques : `/boutique` (liste, recherche, filtre par niveau) et `/boutique/<id>` (fiche, bouton de commande, bouton « Partager » : WhatsApp, Facebook, Telegram, copier le lien).
- Schéma : `{ id (slug du titre), titre, sousTitre, niveau (bac|licence|licence_excellence|master), matiere, description (Markdown), sommaire: [], pointsForts: [], prix, prixBarre (promo, facultatif), devise (MAD|EUR|USD), pages, format, couverture (images/boutique/<id>/…), apercu (lien d’extrait gratuit, facultatif), badge (Nouveau|Best-seller|Promo|Édition 2026|Bientôt), vedette, available, dateAjout }`.
- **Ne jamais inventer** un prix : le demander s’il n’est pas fourni. Une fiche sans prix s’affiche en « Bientôt disponible », sans bouton de commande : ne pas la publier (`available: true`) dans cet état, le garde-fou de la règle 1.6 bloquerait.
- La boutique n’entre dans le menu, le sitemap et l’index qu’avec un cahier `available` (`BOUTIQUE_OUVERTE`, `app/_shared/chrome.js`). Ouverte le 2026-10-30 avec le cahier « Introduction à l’étude du droit (S1) », 50 DH.
- Le plus simple pour Saad : Console › Contenu › Boutique › « Nouveau cahier ». Par script : mêmes règles que 1.2 (lecture, modification, `JSON.stringify(list, null, 2) + "\n"`).
- Couverture : image portrait (3:4) en WebP, sous un **nouveau nom** à chaque remplacement (les images sont en cache immuable). Le même fichier `poster.html` produit les posters carré et story pour les réseaux.
- **Couverture = le poster du cahier** (demande du 2026-10-30) : même design que le poster story (indigo, pages du cahier en éventail, pastille de prix, bandeau « Commande sur WhatsApp » + numéro + QR), recadré en 3:4 (1080 × 1440) : bloc `#couv` de `docs/cahier-intro-droit-s1/marketing/poster.html`, export `node render.mjs public/images/boutique/<id>/couverture-vN.webp`. Pas de section « affiche » séparée sur la fiche (retirée à la demande de Saad) ; pas de nouveau design sans demande.
- Suivi : vues des fiches et clics sur « Commander » dans la liste Boutique de la console ; les ventes se comptent dans WhatsApp.

### V2 — Cahier payant en PDF
Commande : « fais un cahier de préparation de <module> », « cahier à vendre ». Précédent : `docs/cahier-intro-droit-s1/` (Introduction à l’étude du droit S1, 97 pages, 2026-10-29 et 30), à copier comme point de départ.
1. **Avant d’écrire** : proposer à Saad le sommaire et la méthode, et attendre son accord. Annoncer les choix par défaut : lexique français-arabe, exercices en QCM et en rédigé, PDF remis à Saad seulement.
2. **Dossier** : `docs/cahier-<module>/` (`docs/` est dans `.gitignore` : jamais commité, jamais déployé, pas sauvegardé sur GitHub — le dire à Saad). Jamais dans `public/`, `scripts/` ni ailleurs sur le site : le PDF vendu ne doit pas devenir gratuit.
3. **Structure fixe** : couverture ; bienvenue ; sommaire ; plan de révision en 14 et en 7 jours ; partie 0 lexique (~80 mots : mot, explication simple, terme arabe utilisé au Maroc) ; un chapitre par partie avec 9 blocs (l’essentiel, définitions à réciter, textes à citer, schéma, pièges, 15 QCM + corrigé en rouge, 5 questions de cours + réponse modèle, 1 ou 2 cas pratiques corrigés en syllogisme, bilan à cocher) ; méthodologie (question de cours, cas pratique, dissertation, commentaire d’article, QCM) ; 3 examens blancs avec barème (40 QCM nouveaux, sujet mixte, dissertation avec copie modèle) ; mémo de la veille ; page « le jour de l’examen » + mentions (usage personnel, reproduction interdite).
4. **Fond** : suivre l’ordre et les notions du cours du site (`cours.json` / `droit.json`), mais réécrire (pas de copie). Les exercices écrits par nous ne sont jamais présentés comme des annales.
5. **Langue B1** : phrases courtes (≈ 10 mots en moyenne, mesuré), tutoiement, chaque mot juridique expliqué à sa première apparition (encadré « Mot du droit »), exemples marocains, pas de latin sans traduction.
6. **Écriture** : un fichier par partie dans `contenu/` (`chNN.mjs` : `objectifs, essentiel, definitions, textes, schema, pieges, qcm [{q, o[4], ok, ex}], questions [{q, pts, r}], cas [{titre, enonce, corrige}]` ; plus `lexique`, `methode`, `examens`, `memo`, `intro`). Outils de `h.mjs` : `blocks`, `mot`, `ex`, `retiens`, `attention`, `tab`, `syl`, `flow` ; dans le texte `**gras**`, `*italique*`, `==surligné==`. QCM : jamais de lettre dans l’explication ; le build mélange les propositions (graine = texte de la question), `fixe: true` garde l’ordre.
7. **Build** : `node build.mjs cahier.pdf` (Edge headless + `pdftotext`, sommaire en deux passes) ; `--acheteur "Nom"` pour un exemplaire nominatif (nom en couverture et en pied de page). Le build pose la typographie française, met « 1er » en exposant et remplace Creator/Producer du PDF par « SaadConcours » (aucune trace du navigateur). Charte : indigo, teal, rouge = corrigé, vert = bonne réponse, pas de dégradé ; polices Literata, Plus Jakarta Sans, Noto Naskh Arabic.
8. **Audit obligatoire avant de remettre le PDF** :
   - chaque article cité vérifié sur le texte officiel : PDF d’adala.justice.gov.ma récupéré par WebFetch (le fichier est enregistré), puis `pdftotext`. Erreurs trouvées la première fois : capacité de jouissance = art. 207 et d’exercice = art. 208 du Code de la famille (pas 206/207) ; acte mixte = preuve libre **contre le commerçant** (Code de commerce, art. 4) ; Code pénal art. 111 = classement selon la peine. En cas de doute : citer le texte sans numéro ;
   - script de contrôle : 4 propositions distinctes par QCM, lettre valide, pas de question en double, répartition des bonnes lettres, longueur des phrases, restes de balisage (`**`, `==`, `ZZ`, `undefined`), aucune mention de l’IA (règle 1.3), métadonnées du PDF ;
   - relecture visuelle avec `snap.mjs` : couverture, sommaire, lexique arabe, un schéma, QCM, corrigé, cas pratique, examen blanc, mémo, fin.
9. **Remise** : envoyer le PDF à Saad, avec le compte rendu de l’audit. Ne rien changer au site sans demande ; pour le vendre : V1 (fiche boutique) et V3 (posters).
10. **Module chiffré** (compta, micro, 2026-10-30) : copier `docs/cahier-compta-generale-1/` (écritures) ou `docs/cahier-microeconomie/` (formules, graphiques), pas le cahier de droit. Le moteur est commun : seul `config.mjs` change (`katex: true` pour les formules ; nom des rubriques ; « Exercice » au lieu de « Cas pratique »).
    - Les blocs de droit deviennent : « Les règles à citer » ou « Les formules à retenir » ; exercices corrigés pas à pas au lieu du syllogisme ; pas de dissertation : 40 QCM, sujet mixte, sujet d’exercices.
    - `h.mjs` vérifie à la construction : `J`, `JJ` (écriture équilibrée), `BIL` (bilan équilibré), `casc` (cascade recalculée), `T` (compte en T), `G`, `GG` (graphique SVG). Une écriture fausse arrête le build.
    - Formules : `$...$` dans le texte, **toujours deux barres** dans les sources (`\\times`, `\\,`), sinon `\t` devient une tabulation sans erreur. Sous-texte : pas de `*` hors formule, le build met les formules à l’abri avant le gras et l’italique.
    - Une réponse de QCM chiffrée porte `v:` (le calcul en JavaScript) : l’audit le compare à la réponse.
    - **Audit n° 1** : recalcul de toutes les opérations écrites, QCM `v:`, recalcul indépendant des exercices depuis les fonctions de l’énoncé (avec force brute pour les optimums), comptes comparés un par un au plan comptable, articles vérifiés sur le CGI de l’année (PDF finances.gov.ma) et la loi 9-88. **Audit n° 2** : sur le PDF fini : restes de balisage, pages presque vides, texte superposé, puis relecture à l’image de chaque graphique. Ne pas réutiliser `columns` en CSS sur une liste : à l’impression, deux lignes se superposent en haut de page.
    - Pièges de fond : la TVA de 2026 n’a que 20 % et 10 % (CGI, art. 99) ; banque à 10 %, intérêts compris : le cahier dit de suivre l’énoncé ; bonis sur emballages = 71275 (71278 = autres ventes et produits accessoires) ; 5113 = Effets à encaisser ou à l’encaissement ; « normalisation comptable » = التطبيع المحاسبي. Pour un examen blanc, vérifier la fonction de coût **avant** d’écrire le sujet : pour imposer le minimum du CM en `Q`, prendre `CF = 2Q³ − aQ²` si `CVM = Q² − aQ + c`.

11. **Module sans calcul lourd ou à tableaux** (Compta analytique S3 et Sciences de Gestion S1, 2026-10-30) : copier `docs/cahier-compta-analytique/` (tableaux de coûts) ou `docs/cahier-sciences-gestion/` (auteurs, cas). `config.mjs` porte maintenant `sem` (semestre du titre) ; `casNom: "Cas"` pour un module de cas ; l'en-tête de page se change dans `style.css`.
    - `h.mjs` du cahier analytique ajoute des outils qui recalculent et arrêtent le build si un total est faux : `TC` (tableau de coût), `REP` (répartition, prestations réciproques comprises), `STK` (stock au CMUP, mali, boni), `CONC` (concordance). Un exercice long enchaîne leurs résultats au lieu de recopier les chiffres.
    - Pour un cahier de gestion, l'examen n° 3 est un sujet de réflexion avec barème et copie modèle.
    - **Audit** : recalcul à part depuis les énoncés, sans importer le cahier (les résultats sont cherchés dans le texte du PDF) ; contrôle du résultat analytique par la voie de la CG ; recherche des suites de 10 mots communes avec le cours du site. Relire à l'image : les graphiques (`yt` trop long coupé à gauche : passer en milliers de DH ; étiquette `xl` sur le dernier repère : agrandir `xmax`) et la numérotation des examens.
    - `blocks` garde désormais le premier numéro d'une liste (`<ol start>`) : sans cela, les questions 5 à 8 d'un sujet s'affichent 1 à 4 alors que le corrigé garde 5 à 8.
    - Piège de fond : la SAS relève de la loi 19-20, insérée dans la loi 5-96. Pour l'huile d'olive, le sous-produit s'appelle les grignons, pas le tourteau.

12. **Une couleur par semestre** (demande de Saad, 2026-10-30) : S1 indigo `#312e81`, S2 prune `#701a4f`, S3 pétrole `#134e4a` ; réservé : S4 brique `#7c2d12`, S5 bleu nuit `#0c4a6e`, S6 anthracite `#1f2937`. La couleur s'applique à la couverture, à l'intérieur du PDF (`style.css`), aux graphiques (`h.mjs`), au poster et à la couverture boutique. Bandeau teal, pastille jaune et reste du poster inchangés. Jamais de rouge vif ni de vert vif : ils restent au corrigé et à la bonne réponse. Vérifier le semestre dans `cours.json` avant de commencer (Management Fondamental = S2).
    - Probabilités S3 (`docs/cahier-probabilites/`, 2026-10-30) : **sans échantillonnage, estimation ni tests** (module de S4, précision de Saad), même si le cours du site les contient. Le cahier garde 8 chapitres en séparant conditionnelles, lois discrètes et loi normale. `calc.mjs` porte les calculs (combinaisons, binomiale, Poisson, Φ) : un chiffre d'un chapitre ne se tape pas à la main. La table de Φ est calculée.
    - `build.mjs` protège les formules : dans `$...$`, `0,8944` devient `0{,}8944` et `1 320` devient `1\\,320`, sinon KaTeX espace la virgule et colle les milliers. À reprendre pour tout nouveau cahier chiffré (les cinq premiers ne l'ont pas).
    - `G` accepte `xticks: [...]` (repères de l'axe) et `nodot: true` sur un point (étiquette sans point noir).
    - Audit : recalcul à part (convolution pour la binomiale, série de Taylor pour Φ, intégrales numériques), résultats cherchés dans le texte du PDF.

13. **Série de cahiers** (« fais le maximum de modules, un par un, tu push », 2026-10-30) : le plan n'est pas soumis à Saad et le prix reste 50 DH. Ordre tiré au sort. Gabarit commun `docs/_gabarit/` (hors git) : écrire `docs/cahier-<module>/config.mjs` (modèle : `docs/cahier-controle-gestion/config.mjs`), puis, depuis ce dossier, `node ../_gabarit/nouveau.mjs` (moteur, couleur du semestre, en-tête), écrire `contenu/`, `node build.mjs cahier.pdf`, `node ../_gabarit/audit.mjs`, relire à l'image, `node ../_gabarit/finir.mjs` (posters, couverture, fiche boutique, copie dans Desktop\pdf).
    - `intro.mjs` est commun : le plan de révision se calcule depuis les chapitres (`court` = nom court du chapitre) et le texte vient de `config.mjs`. `contenu/outils.mjs` porte les calculs propres au module : `ECD` et `ECI` recalculent les écarts et arrêtent le build si la somme est fausse.
    - **Les textes d'interprétation ne sont pas vérifiés par le script** : ils se relisent à l'image. Erreur trouvée ainsi : « perd −3 200 DH » sur un écart favorable, et une synthèse qui nommait le mauvais poste.
    - Un `QCM` ne prend pas les lettres A, B, C, D comme noms de produits : les propositions sont mélangées.
    - Fiscalité S5 (`docs/cahier-fiscalite/`) : vérifié sur le CGI 2026 complet. Le cours gratuit `fiscalite_cours` s'en écarte sur trois points, et le cahier suit le CGI : voiture de tourisme plafonnée à **400 000 DH** TTC depuis la LF 2025 (art. 10-I-F-1°-b), prorata en montants **taxe comprise** (art. 104-I), reversement en **1/60 par mois** pour un meuble et **1/10 par an** pour un immeuble (art. 102 et 104-II-2°). Ne pas reprendre ces trois points du cours sans revérifier.
    - Droit des Sociétés S3 (`docs/cahier-droit-societes/`) : vérifié sur les textes consolidés d'adala (loi 17-95, loi 5-96 au 19 août 2021) et la loi 96-21. Le cours `droitsocietes_cours` s'en écarte : nomination et révocation du gérant de SARL aux **3/4** (art. 62, 69, 75), SAS dans la **loi 5-96**, titre III bis (art. 43-1 et s.), régularisation sous le quart au **2e exercice suivant** pour la SA (art. 357). Point non tranché : le consolidé d'adala garde à l'art. 51 « intégralement libérées », alors que la loi 24-10 a modifié cet article et que les guides disent 1/4 et 5 ans : le cahier suit 1/4 et 5 ans.
    - `syl` et `CAS` (`contenu/outils.mjs`) rédigent un corrigé en faits, problème, règle, solution. `audit.mjs` signale aussi les nombres bruts (`55.00000000000001`).
    - Mathématiques S1 (`docs/cahier-mathematiques/`, 2026-10-31), commun à l'Économie et à la Gestion : modèle pour un module de maths. `contenu/outils.mjs` porte `memeDerivee` (compare chaque dérivée écrite à une dérivée numérique), `solve`, `det3`, `com3`, `Mx`, `Dt`, `TV` (tableau de variations) et `Venn`. Intervalles écrits `[a ; b]`, jamais `[a, b]` : la virgule entre deux chiffres devient une décimale. `build.mjs` écrit `]{-}` pour garder `]-3 ; 2[` sans espace de soustraction. Dans `${ex("...")}`, un `${...}` n'est pas remplacé : prendre des accents graves. `audit.mjs` lit « IA » dans `AI = IA` : ne pas écrire ce produit. Audit à part : optimums par force brute, systèmes et Leontief par substitution directe dans les énoncés.

### V3 — Posters d’un cahier
Commande : « fais le poster du cahier X », « change le poster ». Fichier : `docs/cahier-<module>/marketing/poster.html` ; aperçus des pages : `node snap.mjs cahier.pdf marketing/_pages 1,31,55` (couverture + deux pages parlantes) ; export : `node marketing/render.mjs` (+ chemin `.webp` pour la couverture boutique, bloc `#couv`).
- Trois formats : carré 1080 × 1080 (publications Instagram, Facebook, groupes WhatsApp), story 1080 × 1920 (statuts, stories), couverture boutique 3:4 (1080 × 1440, voir V1).
- **Design validé à réutiliser tel quel** (2026-10-29 et 30) : fond plein à la couleur du semestre (V2, point 12 ; indigo pour le S1), bande teal en haut, étiquette jaune du niveau, titre avec le dernier mot en jaune, éventail de trois pages du cahier, pastille jaune « 50 DH seulement », chiffres en cases, puces menthe, bandeau teal « Commande sur WhatsApp » avec le numéro +212 7 13 87 53 27 et un QR (`wa.me` + message court qui nomme le cahier). Saad a refusé un nouveau design (« cahier d’écolier ») : ne changer que les textes, sauf demande explicite ; si la demande est floue, poser une question à choix.
- Textes : livraison « PDF envoyé sur WhatsApp » (jamais « par e-mail »), pas d’emoji, pas de mention de l’IA.
- Relire chaque image (chevauchement, texte coupé, QR qui touche le bord) ; Saad doit scanner le QR avec son téléphone avant de publier (non testable ici).

---
## R. RÉSEAUX SOCIAUX

### R1 — Carrousels Instagram / Facebook des concours
Format validé le 2026-10-04 : **l'extrait est donné dans le post, le corrigé reste sur le site.**
- Outil : `/admin/social` → rail « Sujet » → type « Concours », post « Carrousel » (code :
  `app/admin/_features/social/carousel.js`). Toutes les images en portrait 1080×1350.
- Carrousel : 1) l'affiche du studio ; 2) le sujet, **au choix « Scans » (par défaut depuis le
  2026-10-06 : les pages scannées `images` du sujet original, entières sur une feuille) ou
  « Énoncé »** (`enonce_md` remis en page sur des feuilles blanches) — bascule en haut de
  l'aperçu, gardée dans le style (`style.source`) et suivie par le robot ; sans scan on retombe
  sur l'énoncé et inversement ; **8 pages au maximum** ; 3) une image finale « Cherche sur
  Google : saadconcours <sigle> <fac> <ville> <année> » (`googleQuery()` dans `captions.js`).
- Sujet trop long : **pas de découpage en plusieurs posts.** Énoncé : on coupe au dernier début
  de partie (exercice, dossier, question numérotée…) qui tient dans les 8 pages ; scans : les
  N premières pages. L'image finale dit alors « La suite du sujet et le corrigé détaillé ».
- Texte du post : pas de lien. Instagram ne le rend pas cliquable (« lien dans la bio »), et
  Facebook montre moins les posts qui sortent de Facebook : le lien suivi (UTM) va **en premier
  commentaire** (`facebook-premier-commentaire.txt`).
- **Publication sur clic, jamais sans permission** (ajoutée le 2026-10-04) : l'admin coche
  des concours dans la liste (20 max par envoi), clique « Relire et publier N » : la fenêtre
  de relecture montre le texte Instagram et Facebook de chacun, **modifiable un par un**, avec
  le ton et la fin de texte communs, puis « Maintenant » ou « En série » (un toutes les N
  heures). Un texte retouché part tel quel ; les autres sont écrits par le robot. Aussi « Publier sur Instagram +
  Facebook » et « Programmer » pour le concours affiché. **Rien ne choisit ni ne publie de
  concours sans ce clic** : pas de lot automatique. Ces boutons ne font que mettre des entrées
  `auto: true` dans la file KV (`/api/admin/social/publish`, une seule requête Worker).
- **Suivi** : dans la liste, filtre « À publier / Publiés / Tous », compteur « X / Y
  publiés », et une pastille par concours : ✓ IG FB (avec les dates), ⏳ en cours, ⚠ échec.
  La confirmation prévient si un concours coché a déjà été publié. Le travail est fait par `.github/workflows/social-publish.yml`
  (toutes les 15 min, gratuit, dépôt public) avec `scripts/social/publier.mjs` : dessin des
  JPEG sur le runner, hébergement sur la branche `social-media` (réécrite à chaque passage),
  envoi à l'API Meta, puis statut `published` ou `failed` + motif dans la file (onglet
  « Planning & historique », bouton « Réessayer »).
- **Règle : zéro charge Cloudflare.** Rien de lourd dans le Worker. Pas d'images servies par
  le site, pas de boucle de requêtes depuis l'admin (une requête par clic, même pour un lot).
- Secrets GitHub requis : `META_PAGE_ID`, `META_PAGE_TOKEN` (jeton de Page longue durée,
  permissions `pages_manage_posts`, `pages_read_engagement`, `instagram_basic`,
  `instagram_content_publish`), `KV_REST_API_URL`, `KV_REST_API_TOKEN` (les mêmes que pour le
  Worker), `META_IG_USER_ID` facultatif. Sans eux, le workflow s'arrête en quelques secondes.
- Tester le dessin en local : `npm i --no-save --no-package-lock --prefix .social @napi-rs/canvas@0`,
  empaqueter avec esbuild comme dans le workflow, puis `node .social/publier.mjs render <id>`.
- ZIP (publication à la main via Meta Business Suite) : toujours possible, un dossier par
  concours : `01.png…`, `instagram.txt`, `facebook.txt`, `facebook-premier-commentaire.txt`.
- Les nouveaux concours n'exigent rien de plus : ils entrent dans le prochain lot programmé.

---

## S. SUPPRESSION

### S1 — Suppression générique
`supprime X` sans type : chercher X dans tous les contenus (concours, cours, quiz, blog, news,
Bac), montrer ce qui correspond (type + `id` + titre), puis appliquer la recette de suppression
du type (C6, K3, E2, A2, N1). Toujours nettoyer les liens internes qui pointaient dessus.
Une suppression en masse (« supprime tous les … ») → **montrer la liste et attendre mon accord**.

---

## X. SECTIONS DU SITE (espaces, publicité)

Le site est rangé par **espaces** (un public = un espace : Bac, Licence FSJES — économie-gestion et
droit —, Licence d'excellence, Master), décrits dans un seul fichier, `lib/espaces.js`. Le header, le menu du
téléphone, la barre d'espace sous le header, le pied de page et « Je prépare… » + les sections
de l'accueil se construisent depuis ce registre. Aucun composant
ne nomme un espace : en ajouter un ne demande **aucune retouche du chrome**.

### X1 — Ajouter une section (un espace)
1. **Contenu d'abord.** Un espace ne s'allume qu'avec du contenu publié (règle AdSense §1.6 :
   jamais de rubrique « bientôt »). Préparer les fiches en brouillon si besoin.
2. **Registre** `lib/espaces.js` : une entrée. Un onglet qui porte `contenu: "<clé>"` ne s'affiche
   qu'avec ce contenu publié (clé calculée au build par `lib/contenusPublies.mjs`, inscrite dans
   `SC_CONTENUS` par `next.config.mjs`) ; un espace sans onglet visible disparaît. C'est ce qui
   permet de construire une section avant son contenu (précédent : ENCG, 2026-10-10). Pour la garder
   fermée même avec du contenu publié, un drapeau de lancement dans `lib/contenusPublies.mjs`
   (précédent : Droit, `DROIT_LANCE`, 2026-10-15, recette K5). Champs : `key`, `label` (header, court), `long`, `audience` (« Après le Bac »),
   `couleur` (indigo, orange, teal, gold, rose, sky — jamais rouge ni vert), `desc` (une phrase,
   sans répéter l'audience), `hub`, `tabs` (`keys` = valeurs de `active` passées à `chromeHtml`
   par les pages de l'onglet), `cours` / `sujets` / `entrainement` (destinations de la barre du bas).
   L'ordre du tableau = l'ordre du parcours, repris partout.
3. **Pages** : la page hub et ses pages filles, prérendues (`force-static`, voir README « une page
   publique n'invoque pas le Worker »), avec `chromeHtml({ active: "<clé d'onglet>" })`.
   S'inspirer de la page la plus proche : liste de concours → `app/concours/licence-excellence/page.js`
   (+ `ConcoursListing`) ; cours par module → `app/cours/`.
4. **Accueil** (`app/page.js`) : sans rien faire, l'espace a une section générique (ses onglets).
   Pour un vrai contenu, ajouter son entrée dans `RESUME` (ligne de « Je prépare… » + 3 chiffres)
   et dans `SECTIONS` (liens ou derniers éléments).
5. **Console** : si l'espace a un nouveau fichier de données, ajouter sa collection dans
   `app/admin/_lib/collections.js` et son entrée dans `app/admin/_lib/nav.js` (le formulaire, la
   liste, la recherche Ctrl K et la corbeille suivent).
6. **Sitemap** (`app/sitemap.js`), **recherche** (`app/recherche/page.js`) et rubrique ciblable
   des bannières partenaires (`PARTNER_SECTIONS`, `app/_shared/partnerAds.js`).
7. `npm run check` (l'audit de contenu suit les liens du nouvel espace), puis P1.

### X2 — Concours post-bac (TAFEM, ENCG) — supprimé
**Espaces ENCG et Taalim supprimés le 2026-10-29** (« delete ENCG and Taalim section, they are unused,
keep Droit — la FSJES, c'est l'économie-gestion et le droit »). Pages, console, données (`encg.json`, les
4 sujets Taalim et leurs scans), niveaux `post_bac` / `taalim` et catégorie ENS retirés ; anciennes adresses en
301 (`public/_redirects`). Les sujets de **Master** passés dans une ENCG restent des concours de Master (C1).
Une demande « ajoute un cours ENCG », « ajoute un concours TAFEM » ou « ajoute un sujet Taalim » : **ne pas
recréer l'espace**, le signaler et demander. Un sujet de Master d'une ENCG suit C1/C2.

### X3 — Emplacements publicitaires (AdSense)
Les emplacements sont listés dans `app/_shared/adPlacements.js` (clé, page, format, hauteur
réservée, champs de settings). Une page pose `<AdSlot settings={settings} placement="…" />` ; la
console (Monétisation › Google AdSense) construit son formulaire depuis la même liste.
- **Ajouter** : une entrée dans `AD_PLACEMENTS` (nouveaux champs `ads<Nom>Enabled` / `ads<Nom>Slot`),
  puis le `<AdSlot>` dans la page. Rien d'autre.
- **Règles** : jamais au-dessus du H1 ; entre deux parties naturelles, jamais au milieu d'un QCM ;
  au plus 3 blocs par page (colonne latérale comprise) ; colonne latérale = grand écran seulement.
- Un bloc réserve sa hauteur (pas de saut de page) et se replie si Google n'a rien à servir.

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

### M2 — Audit GEO (moteurs de réponse IA)
Vérifier que ChatGPT, Claude, Perplexity, Gemini et Copilot peuvent trouver, lire et citer le site,
**en production**. Rapport seulement, corrections sur demande.
1. **Accès** : `robots.txt` en ligne identique à `public/robots.txt` (`diff --strip-trailing-cr`) ;
   `/`, `/concours`, `/blog`, `/llms.txt` en 200 avec les user-agents GPTBot, OAI-SearchBot,
   ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, Googlebot, bingbot. Un 200 avec un
   user-agent imité ne prouve pas que Cloudflare laisse passer les vrais robots (il les reconnaît
   par IP) : me rappeler de vérifier Security → Bots / AI Crawl Control.
2. **Lecture** : une ou deux pages de chaque type (accueil, concours, chapitre FSJES, chapitre Bac,
   article, QCM) : texte présent dans le HTML sans JavaScript, JSON-LD qui parse et types attendus
   (règle 1.8), titre ≤ 65 et description ≤ 155 (règle 1.7).
3. **Index Bing** (ChatGPT Search, Copilot, DuckDuckGo) : nombre de résultats `site:saadconcours.space`
   sur bing.com comparé au nombre d'URL du sitemap ; étape IndexNow du dernier déploiement réussie.
4. **llms.txt** : chiffres et liens à jour avec les données (règle 1.8).
5. **Mesure** : sources ChatGPT, Perplexity, Gemini, Claude, Copilot dans /admin → Statistiques.
Terminer par ce qui va bien, puis ce qu'il faut corriger, le plus important d'abord.

---

## P. PUBLICATION

### P1 — Vérifier, committer, publier
1. `npm run check` (lint + build + garde-fou contenu, règle 1.6) si du code a changé ou si des
   pages sont ajoutées ou retirées ; pour une simple correction de données, vérifier que les JSON parsent.
2. Commit (si pas déjà fait) avec le style du dépôt.
3. `git push origin main` → GitHub Actions déploie sur Cloudflare Workers.
4. Après déploiement, vérifier qu'une page publique touchée reste statique :
   `curl -sI https://www.saadconcours.space/<page> | grep -i x-opennext` → aucune sortie attendue.
