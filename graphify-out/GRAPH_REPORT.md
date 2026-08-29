# Graph Report - SaadConcours  (2026-08-29)

## Corpus Check
- 192 files · ~330,975 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 437 nodes · 775 edges · 43 communities (26 shown, 17 thin omitted)
- Extraction: 93% EXTRACTED · 7% INFERRED · 0% AMBIGUOUS · INFERRED: 55 edges (avg confidence: 0.84)
- Token cost: 128,958 input · 0 output

## Community Hubs (Navigation)
- Back-office admin
- API CRUD par ressource
- Pages publiques Next.js
- API listes et exports
- Scraper almaster Python
- Analytics et rate limiting KV
- Dependances et scripts npm
- ESG, PME et politiques economiques
- UI catalogue concours
- Moteur d'evaluation QCM
- Fil d'actualites concours
- Fiscalite marocaine (IS, TVA)
- Comptabilite analytique et budgets
- Lecteur de cours et PDF
- Choix d'investissement (VAN, TRI)
- Middleware de protection API
- Workflow GitHub Actions news
- Audit legal et controle interne
- Layout racine et SEO
- Image OpenGraph
- Alias de chemins JS
- Amortissements et cessions
- Provisions et ecarts de conversion
- Layout section concours
- Page confidentialite
- Layout section cours
- Layout section evaluation
- Layout section actualites
- Page 404
- Capitaux propres et emprunt obligataire
- Configuration Next.js
- Amortissement degressif
- Taux d'amortissement deduits
- Marche monetaire et ratio Cooke
- Modele de Wilson
- Impot sur le revenu
- Principes comptables fondamentaux
- Factures et avoirs
- Module NTIC

## God Nodes (most connected - your core abstractions)
1. `downloadConcoursPdf()` - 17 edges
2. `ConcoursPage()` - 15 edges
3. `chromeScript()` - 14 edges
4. `CoursPage()` - 14 edges
5. `EvaluationPage()` - 14 edges
6. `getAllConcours()` - 14 edges
7. `ResourcePanel()` - 13 edges
8. `NewsPage()` - 12 edges
9. `checkRateLimit()` - 11 edges
10. `QuestionsEditor()` - 10 edges

## Surprising Connections (you probably didn't know these)
- `Page de redirection vers saadconcours.space` --conceptually_related_to--> `public/data/news.json (artefact des concours ouverts)`  [AMBIGUOUS]
  index.html → .github/workflows/update-news.yml
- `GET()` --calls--> `getSettings()`  [EXTRACTED]
  app/api/admin/export-content/route.js → lib/store.js
- `GET()` --calls--> `getStats()`  [EXTRACTED]
  app/api/admin/export/route.js → lib/analytics.js
- `GET()` --calls--> `getStats()`  [EXTRACTED]
  app/api/admin/stats/route.js → lib/analytics.js
- `GET()` --calls--> `getCorrigeFile()`  [EXTRACTED]
  app/api/concours/[id]/corrige/route.js → lib/store.js

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Corpus des exercices de choix d'investissement par la VAN et l'indice de profitabilité** — public_data_corriges_2011_rabat_fsjes_souissi_cca_van_fabriquer_acheter, public_data_corriges_2013_kenitra_fsjes_kenitra_financecomptabilite_van_choix_equipement, public_data_corriges_2017_tetouan_fp_tetouan_master_audit_megadeco_van_ip, public_data_corriges_2017_tetouan_fp_tetouan_master_audit_moda_cash_flows_van, public_data_corriges_2018_fes_encg_fes_cca_approche_incrementale [INFERRED 0.85]
- **Travaux d'inventaire : amortissements, cessions d'immobilisations et provisions** — public_data_corriges_2010_rabat_fsjes_souissi_cca_cession_camion, public_data_corriges_2011_rabat_fsjes_souissi_cca_provisions_clients_douteux, public_data_corriges_2012_mohammedia_fsjes_mohammedia_audit_cession_machine_xt, public_data_corriges_2017_tetouan_fp_tetouan_master_audit_megadeco_provisions_creances_douteuses, public_data_corriges_2017_tetouan_fp_tetouan_master_audit_moda_amortissement_degressif_mobilier [INFERRED 0.85]
- **Pipeline automatisé de mise à jour des concours ouverts (cron → scraper → news.json → alerte)** — _github_workflows_update_news_cron_schedule, _github_workflows_update_news_update_news_job, _github_workflows_update_news_fetch_almaster_step, _github_workflows_update_news_news_json_artifact, _github_workflows_update_news_scraper_failure_issue [EXTRACTED 1.00]

## Communities (43 total, 17 thin omitted)

### Community 0 - "Back-office admin"
Cohesion: 0.05
Nodes (35): AdminLoginPage(), AdminPage(), CONCOURS_CONFIG, COURS_CONFIG, emptyFormFor(), emptyOption(), fileToBase64(), ImageListEditor() (+27 more)

### Community 1 - "API CRUD par ressource"
Cohesion: 0.08
Nodes (44): ALLOWED_EXT, POST(), safeSegment(), GET(), DELETE(), PUT(), DELETE(), PUT() (+36 more)

### Community 2 - "Pages publiques Next.js"
Cohesion: 0.12
Nodes (32): ConcoursDetailClient(), ConcoursDetailPage(), findConcours(), generateMetadata(), resolveCorrigeMd(), downloadEvalPDF(), ensureSpace(), wrapText() (+24 more)

### Community 3 - "API listes et exports"
Cohesion: 0.11
Nodes (30): dynamic, GET(), csvEscape(), dynamic, GET(), toCsv(), dynamic, GET() (+22 more)

### Community 4 - "Scraper almaster Python"
Cohesion: 0.16
Nodes (25): build_item(), extract_date_limite(), extract_focused(), extract_from_list(), extract_lien_inscription(), _fetch_article_page(), _fetch_feed(), is_real_posting() (+17 more)

### Community 5 - "Analytics et rate limiting KV"
Cohesion: 0.26
Nodes (18): POST(), POST(), ALLOWED_KINDS, POST(), checkRateLimit(), getClientIp(), getCount(), getKv() (+10 more)

### Community 6 - "Dependances et scripts npm"
Cohesion: 0.10
Nodes (19): marked, dependencies, marked, next, react, react-dom, @vercel/analytics, @vercel/kv (+11 more)

### Community 7 - "ESG, PME et politiques economiques"
Cohesion: 0.12
Nodes (19): Critères ESG et financement ISR, Développement durable comme levier stratégique gagnant-gagnant, Risque de greenwashing, Rapport Brundtland (1987), Caisse de compensation et pression budgétaire (2011-2012), L'« exception marocaine » (résilience et transition constitutionnelle 2011), Répercussions du printemps arabe sur l'économie marocaine, Analyse financière QUIRY : FDR, BFRE, BFRHE et trésorerie nette (+11 more)

### Community 8 - "UI catalogue concours"
Cohesion: 0.29
Nodes (13): ConcoursPage(), applyCorrige(), applyFilters(), closeLightbox(), closeModal(), escapeHtml(), fillSelect(), initFilters() (+5 more)

### Community 9 - "Moteur d'evaluation QCM"
Cohesion: 0.36
Nodes (11): EvaluationPage(), currentEvalQuestions(), escapeHtml(), loadEvalQuiz(), loadEvalRegistry(), mdLiteInline(), renderEvalChapterChips(), renderEvalModuleList() (+3 more)

### Community 10 - "Fil d'actualites concours"
Cohesion: 0.47
Nodes (11): NewsPage(), daysUntil(), escapeHtml(), etabColorClass(), etabGroup(), loadNews(), newsCard(), render() (+3 more)

### Community 11 - "Fiscalite marocaine (IS, TVA)"
Cohesion: 0.18
Nodes (11): Commissaire aux comptes, protecteur des actionnaires minoritaires, CGI marocain, article 11-I-B, Déductibilité des redevances de crédit-bail (plafond 300 000 DH TTC), Conditions de déductibilité des intérêts servis aux associés, IS : réintégrations, déductions et cotisation minimale, Taxes locales : taxe professionnelle et taxe de services communaux, IS 2012 et cotisation minimale (rôle de plancher), IS société TEXMA : réintégration des règlements en espèces ≥ 5 000 DH (+3 more)

### Community 12 - "Comptabilite analytique et budgets"
Cohesion: 0.18
Nodes (11): Seuil de rentabilité (portiques en bois, taux de MCV 25 %), Stratégie financière de l'entreprise (investissement, financement, trésorerie), Résultat analytique en coûts complets (montures et lunettes, FIFO), Coûts complets GUITT : répartition des charges indirectes et inventaire permanent, Méthode des équivalents-unités pour les encours de production, Méthode ABC (Activity Based Costing) et inducteurs d'activité, Prévisions par la méthode des moindres carrés (y = 45 + 22,14x), Seuil de rentabilité prévisionnel (CF 900 kDH, MCV 75 %) (+3 more)

### Community 13 - "Lecteur de cours et PDF"
Cohesion: 0.38
Nodes (10): CoursPage(), addTable(), addWrappedLine(), ensureSpace(), escapeHtml(), loadCours(), loadCoursRegistry(), renderCoursContent() (+2 more)

### Community 14 - "Choix d'investissement (VAN, TRI)"
Cohesion: 0.20
Nodes (10): Choix de financement : emprunt vs leasing (coûts actualisés), VAN du choix fabriquer ou acheter (12,5 %, 6 ans), Choix d'équipement par la VAN et l'indice de profitabilité (10 %), Divergence entre VAN et TRI (hypothèse de réinvestissement des flux), VAN et indice de profitabilité d'un investissement (850 000 DH, 10 %), Cash-flows nets après IS et VAN négative (projet à rejeter), Effet de levier financier (RF = Re + D/CP × (Re − i(1−t))), Effet de levier et rentabilité financière (QCM Q14-Q18) (+2 more)

### Community 15 - "Middleware de protection API"
Cohesion: 0.38
Nodes (6): config, isProtectedApiAlways(), isProtectedApiWrite(), middleware(), PROTECTED_API_ALWAYS, PROTECTED_API_PREFIXES

### Community 16 - "Workflow GitHub Actions news"
Cohesion: 0.33
Nodes (6): Déclenchement cron toutes les 6 heures, Étape « Récupérer les nouveautés almaster » (scripts/fetch_almaster.py), public/data/news.json (artefact des concours ouverts), Mécanisme d'alerte par issue scraper-failure, Job update-news (mise à jour des concours ouverts), Page de redirection vers saadconcours.space

### Community 17 - "Audit legal et controle interne"
Cohesion: 0.40
Nodes (5): QCM audit et contrôle interne (audit légal, éléments probants, exhaustivité), QCM audit : audit légal, sondages, fraude vs erreur, audit social, Bilan social et indicateurs sociaux (absentéisme, masse salariale), Ordonnancement de la démarche d'audit (accepter, planifier, apprécier le CI, contrôler, opinion), Seuil de signification en audit (≈ 5 % du résultat avant impôt)

### Community 20 - "Alias de chemins JS"
Cohesion: 0.50
Nodes (3): compilerOptions, baseUrl, paths

### Community 21 - "Amortissements et cessions"
Cohesion: 0.50
Nodes (4): Cas Alumaroc — taux et dotations d'amortissement, Régularisation de la cession du camion (VNA et perte sur cession), Résultat sur cession de la machine XT (moins-value), Détermination du taux d'amortissement à partir de la plus-value de cession

### Community 22 - "Provisions et ecarts de conversion"
Cohesion: 0.50
Nodes (4): Provision sur titres et valeurs de placement (comparaison coût/cours par lot), Provisions pour clients douteux (INFO, ELEC, TREX, SOFAX, GTT, KLM), Provisions sur créances douteuses MEGA-DECO (ALI, BRAHIM, SAID), Écarts de conversion actif / passif sur créances et dettes en devises

### Community 29 - "Capitaux propres et emprunt obligataire"
Cohesion: 0.67
Nodes (3): Reconstruction des capitaux propres de la SA KOGIMA, Emprunt obligataire et prime de remboursement (non-valeur amortie sur 10 ans), Affectation du bénéfice de la SA SGB (réserve légale, superdividende, RAN)

## Ambiguous Edges - Review These
- `public/data/news.json (artefact des concours ouverts)` → `Page de redirection vers saadconcours.space`  [AMBIGUOUS]
  index.html · relation: conceptually_related_to

## Knowledge Gaps
- **82 isolated node(s):** `SOCIAL_NETWORKS`, `CONCOURS_CONFIG`, `COURS_CONFIG`, `QUIZ_CONFIG`, `NEWS_CONFIG` (+77 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **17 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `public/data/news.json (artefact des concours ouverts)` and `Page de redirection vers saadconcours.space`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `pub()` connect `Pages publiques Next.js` to `Back-office admin`, `UI catalogue concours`?**
  _High betweenness centrality (0.060) - this node is a cross-community bridge._
- **Why does `chromeScript()` connect `Pages publiques Next.js` to `UI catalogue concours`, `Moteur d'evaluation QCM`, `Fil d'actualites concours`, `Lecteur de cours et PDF`?**
  _High betweenness centrality (0.053) - this node is a cross-community bridge._
- **Why does `getAllConcours()` connect `API listes et exports` to `API CRUD par ressource`, `Pages publiques Next.js`?**
  _High betweenness centrality (0.038) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ConcoursPage()` (e.g. with `closeLightbox()` and `closeModal()`) actually correct?**
  _`ConcoursPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `EvaluationPage()` (e.g. with `renderEvalModuleList()` and `submitEval()`) actually correct?**
  _`EvaluationPage()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `SOCIAL_NETWORKS`, `CONCOURS_CONFIG`, `COURS_CONFIG` to the rest of the system?**
  _82 weakly-connected nodes found - possible documentation gaps or missing edges._