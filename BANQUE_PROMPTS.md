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
| `fais le design du QCM X` · `c'est un QCM` · `mets en forme tous les QCM` | [C10](#c10--mise-en-forme-des-qcm-options-en-cases) |
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
| `fais le même cahier PDF pour <master> <fac>` · `cahier de préparation + article` | [A3](#a3--cahier-de-préparation-pdf--article--fais-le-même-cahier-pour-master-fac-) |
| `ajoute une news …` · `supprime la news X` · `lance le scraper news` | [N1](#n1--news-concours-ouverts) |
| `ajoute un cahier à la boutique` · `mets en promo le cahier X` · `retire le cahier X` | [V1](#v1--boutique-cahiers-gumroad) |
| `poste les concours` · `prépare les posts Instagram / Facebook` · `carrousels de la semaine` | [R1](#r1--carrousels-instagram--facebook-des-concours) |
| `supprime X` (sans préciser le type) | [S1](#s1--suppression-générique) |
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

### 1.7 SEO : règles fixées par l'audit du 2026-09-26
- Titre ≤ 65 caractères, meta description ≤ 155 : passer par `fitTitle` / `clampDescription`
  (`app/_shared/seoText.js`) plutôt qu'une chaîne libre. Fiches concours : `app/_shared/concoursSeo.js`
  (titres et descriptions uniques, calculés sur toute la liste). Blog : champ `seoTitle` quand le
  titre de l'article dépasse 65 caractères (le H1 garde `title`).
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
  (FCA, MRH, MCL, EAPP, EDMQ).
- `master_reel` : intitulé officiel du master tel qu'écrit sur le sujet.
- `difficulte` : `"1/5"` à `"5/5"` (jugée sur la longueur, la technicité, le barème négatif).
- `source` : format `- <site> — <titre de la page> : <url>` ; sujet fourni par moi → `- Lien / origine du sujet : https://saadconcours.space`.
  **Donnée interne, jamais publiée** (depuis le 2026-09-26) : ni sur la fiche, ni dans le PDF, ni en
  JSON-LD. Même règle dans le texte : ne pas nommer le site d'origine dans `enonce_md` / `corrige_md`
  (écrire « une version publiée en ligne », « un corrigé publié en ligne »).
- `date_ajout` : date du jour.
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
