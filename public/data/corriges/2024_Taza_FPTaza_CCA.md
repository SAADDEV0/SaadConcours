## Sujet général — Le rôle du contrôle interne dans l'amélioration de la performance de l'entreprise

**Définition.** Le contrôle interne est l'ensemble des dispositifs mis en place par une entreprise (organisation, procédures, méthodes) pour maîtriser ses activités, sécuriser ses actifs, fiabiliser l'information financière et assurer la conformité aux lois et règlements.

**Contribution à la performance :**

1. **Fiabilisation de l'information de gestion.** Un contrôle interne solide garantit que les données comptables et analytiques (coûts, marges, résultats) sont exactes et disponibles à temps, ce qui permet des décisions de gestion mieux informées (fixation des prix, arbitrages entre produits, etc.).
2. **Maîtrise des risques opérationnels.** La séparation des tâches, les procédures d'autorisation et les rapprochements réguliers (stocks, trésorerie) réduisent les erreurs, les fraudes et les pertes — un impact direct sur la rentabilité.
3. **Optimisation des ressources.** En structurant les processus (achats, production, ventes), le contrôle interne limite les gaspillages et les inefficacités, ce qui améliore la productivité et réduit les coûts.
4. **Conformité et image de l'entreprise.** Le respect des obligations légales et fiscales évite les sanctions et pénalités, et renforce la confiance des partenaires (banques, actionnaires, clients).
5. **Aide à la prise de décision stratégique.** En fournissant une vision fiable de la performance par activité ou par produit (via la comptabilité analytique notamment), le contrôle interne éclaire les choix d'investissement et de développement.

**Limites à mentionner :** le contrôle interne a un coût (temps, procédures, personnel dédié) et ne peut offrir qu'une assurance raisonnable, jamais absolue, contre les risques — d'où l'intérêt de le compléter par un audit interne/externe périodique.

---

## Épreuve pratique — SKYGLAS (comptabilité analytique)

> ⚠️ **Le tableau des clés de répartition des charges indirectes, tel que disponible dans le scan source, contient une incohérence qui empêche un calcul fiable.** Par exemple, la ligne « Fournitures consommables » (55 000 DH) affiche des clés de répartition qui, additionnées telles quelles (4 % + 60 % + 16 % + 50 % + 20 % = 150 %), dépassent 100 % — ce qui est impossible pour une répartition directe d'une charge. Cela indique une erreur de transcription/lecture du tableau original (colonnes mal alignées sur la photo disponible) que je ne peux pas corriger avec certitude sans le document source net. **Je préfère te donner la méthode complète plutôt que des chiffres qui pourraient être faux** — reprends les calculs ci-dessous avec le tableau de ta propre copie du sujet.

### Méthode à suivre (question par question)

**1. Tableau de répartition des charges indirectes**
- Reporter chaque charge par nature dans les centres selon les clés données (pourcentages ou nombre de parts selon la ligne).
- Pour les centres auxiliaires **Prestations connexes** et **Gestion des moyens**, qui se cèdent mutuellement des charges (répartition croisée, comme un système à deux équations — même principe que dans les corrigés Kénitra/Mohammedia de ce site), poser :
  `PC = Total primaire PC + part reçue de GM`
  `GM = Total primaire GM + part reçue de PC`
  et résoudre le système à deux inconnues.
- Répartir ensuite PC et GM vers les centres principaux (Approvisionnement, Atelier fusion, Atelier finition, Distribution, Administration générale) selon les clés données.
- Diviser chaque total de centre principal par son unité d'œuvre (donnée dans le sujet : kg de mélange acheté pour Approvisionnement, m² de verre coulé pour Atelier fusion, heure MOD pour Atelier finition, coût de production des glaces vendues pour Distribution) pour obtenir le coût unitaire — à arrondir au DH inférieur comme demandé.

**2. Coût d'achat des matières premières (CUMP)**
- Coût d'achat = prix d'achat (25 000 kg × 26,8 DH = 670 000 DH) + charges indirectes du centre Approvisionnement (calculées en 1).
- CUMP = (Stock initial en valeur + coût d'achat total) / (Stock initial en quantité + quantité achetée), avec SI = 35 000 kg à 30 DH = 1 050 000 DH.

**3. Coût de production du verre coulé (atelier fusion)**
- Matière consommée : 36 000 kg de mélange, valorisée au CUMP de la question 2.
- + Main d'œuvre directe fusion : 120 000 DH.
- + Charges indirectes de l'atelier fusion (coût unitaire × 1 000 m² produits).
- Diviser par 1 000 m² pour le coût unitaire du verre coulé.

**4. Coûts de production des glaces terminées (types D et E)**
- Pour chaque type : verre coulé consommé (450 m² pour D, 550 m² pour E) valorisé au coût unitaire trouvé en 3, + MOD finition (1 550 h × taux horaire pour D, 4 450 h pour E — le taux horaire n'est pas donné explicitement dans le texte disponible, à reprendre depuis l'énoncé complet) + charges indirectes de l'atelier finition (coût unitaire × heures).
- Tenir compte des en-cours (production en cours de début et fin de période, méthode de l'inventaire permanent) pour isoler le coût de la production **terminée** du mois (460 m² pour D, 500 m² pour E).

**5. Coûts de revient et résultats**
- Coût de revient = coût de production des glaces vendues (sorties de stock au CUMP, stock initial de produits finis donné : D 600 m² à 1 587,5 DH, E 200 m² à 1 977,5 DH) + charges indirectes de Distribution (assiette = coût de production des glaces vendues).
- Résultat analytique par type = Prix de vente (700 m² × 1 540 DH pour D, 600 m² × 1 710 DH pour E) − Coût de revient correspondant.

**3 (rapprochement).** Résultat de la comptabilité analytique = Σ résultats élémentaires. Résultat de la comptabilité générale = résultat analytique **corrigé** des différences d'incorporation mentionnées dans l'énoncé : retirer les charges non incorporables (21 000 DH de dotations non incorporables), retirer les charges supplétives (rémunération du chef d'entreprise 385 200 DH/an → 32 100 DH/mois ; rémunération des capitaux 10 000 DH/mois), et réintégrer les éléments non courants (produits non courants 6 800 DH, charges non courantes 4 560 DH, perte client 3 577,5 DH classée en charge de distribution).

**4. Interprétation.** À comparer une fois les chiffres obtenus : marge par type de glace, part de chaque centre dans le coût de revient, écart éventuel entre résultat analytique et résultat comptable (qui doit se limiter aux différences d'incorporation identifiées).

**5. Conformité au CGNC.** Le CGNC (Code Général de Normalisation Comptable marocain) n'impose pas de méthode de calcul des coûts particulière pour la comptabilité analytique (elle reste un outil de gestion interne, non obligatoire dans sa forme). Le point à discuter est la cohérence de la méthode des coûts complets utilisée par SKYGLAS avec les principes de rattachement des charges à l'exercice et de distinction charges incorporables/non incorporables, que le CGNC encadre au niveau de la comptabilité générale — la méthode utilisée ici (coûts complets avec centres d'analyse) est une pratique reconnue et compatible, à condition que les retraitements (charges supplétives, non incorporables) soient bien opérés pour le rapprochement avec la comptabilité générale, comme fait en question 3.
