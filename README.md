# Concours Masters Maroc

Base de données de sujets réels de concours d'accès aux Masters spécialisés (CCA, GFCF, Finance, Fiscalité, Audit) dans les universités marocaines (FSJES, ENCG, Facultés Polydisciplinaires...).

Application Next.js multi-pages :

- `/` — Accueil (présentation, alerte mini-news, accès aux 4 sections)
- `/concours` — Concours (filtres, recherche, rendu Markdown/LaTeX, galerie d'images, export PDF, corrigé quand disponible)
- `/cours` — Fiches de cours par module
- `/evaluation` — QCM d'auto-évaluation par module
- `/news` — Concours ouverts (mis à jour automatiquement depuis almaster-maroc.com)
- `/admin` — Panneau d'administration (ajout/édition/suppression concours/cours/évaluation/news), protégé par mot de passe

**GitHub est la base de données.** `public/data/concours.json`, `cours.json`, `quiz.json` et `news.json` ne sont pas une simple seed : ce sont les fichiers que le site lit à chaque requête (via le contenu brut du dépôt) et dans lesquels `/admin` écrit directement à chaque ajout/modification/suppression (un commit Git par écriture, sur `main`). Il n'y a pas de base de données séparée qui pourrait diverger du dépôt — GitHub est la source unique, toujours à jour.
- `public/data/concours.json` — un objet par concours, avec `enonce_md` (énoncé transcrit) et `corrige_md` (corrigé, optionnel)
- `public/data/extraits/<id>.md` et `public/data/corriges/<id>.md` — une copie lisible par concours de `enonce_md`/`corrige_md`, régénérée automatiquement à chaque écriture admin sur un concours, pour naviguer facilement dans le dépôt GitHub sans ouvrir le JSON — même logique que `public/images/<ville>/<id>/`. Ce sont des copies dérivées (lecture seule) : les éditer directement sur GitHub n'a pas d'effet sur le site, seul `concours.json` est réellement lu.
- `public/data/cours.json`, `public/data/quiz.json` — mêmes principes que `concours.json`, pour les fiches de cours et les QCM d'évaluation.
- `public/data/news.json` — mis à jour à la fois par `scripts/fetch_almaster.py` (cron, scraping) et par `/admin` (ajout/suppression manuelle) : les deux écrivent dans le même fichier.
- `public/images/` — extraits réels scannés des sujets, organisés par ville puis par concours

**Corrigés.** Un corrigé, quand il existe, est rédigé par IA (relecture croisée entre le scan réel et une transcription texte de la source citée dans `source`, avec vérification par recoupement des chiffres donnés dans l'énoncé) — pas une correction officielle. Il est marqué comme tel sur le site (bandeau d'avertissement dans l'onglet "Corrigé"). Toute donnée manquante ou illisible dans les sources disponibles est signalée explicitement dans le corrigé plutôt qu'inventée.

## Développement local

```bash
npm install
npm run dev
```

Puis ouvrir `http://localhost:3000`. Sans `GITHUB_TOKEN` configuré, l'API lit les fichiers `public/data/*.json` du checkout local (lecture seule : les écritures admin restent en mémoire pour la durée du process, sans toucher au disque ni à GitHub).

## Déploiement sur Vercel

1. Importer le repo sur [vercel.com/new](https://vercel.com/new) (Next.js est détecté automatiquement, aucune configuration nécessaire).
2. Créer un **GitHub Personal Access Token (fine-grained)** sur [github.com/settings/personal-access-tokens](https://github.com/settings/personal-access-tokens) : Repository access → ce repo uniquement, Permissions → **Contents: Read and write**.
3. Dans **Settings → Environment Variables** du projet Vercel, ajouter `GITHUB_TOKEN` (le token ci-dessus) et `ADMIN_PASSWORD` (le mot de passe pour accéder à `/admin`).
4. Redéployer. Le panneau `/admin` permet ensuite d'ajouter/modifier/supprimer des concours/cours/QCM/news — chaque action crée un commit sur `main`, visible sur GitHub quasi immédiatement (le site relit le fichier brut avec un cache de 10 secondes).

Sans `GITHUB_TOKEN` en production, l'API se rabat sur les fichiers embarqués dans le build (figés à la dernière compilation) et `/admin` ne peut pas écrire — définir `GITHUB_TOKEN` est donc nécessaire pour que le panneau d'administration fonctionne.

## GitHub Pages

L'ancienne URL GitHub Pages (`index.html` à la racine) redirige automatiquement vers l'URL Vercel du site.
