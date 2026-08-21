# Concours Masters Maroc

Base de données de sujets réels de concours d'accès aux Masters spécialisés (CCA, GFCF, Finance, Fiscalité, Audit) dans les universités marocaines (FSJES, ENCG, Facultés Polydisciplinaires...).

Application Next.js multi-pages :

- `/` — Accueil (présentation, alerte mini-news, accès aux 4 sections)
- `/concours` — Concours (filtres, recherche, rendu Markdown/LaTeX, galerie d'images, export PDF, corrigé quand disponible)
- `/cours` — Fiches de cours par module
- `/evaluation` — QCM d'auto-évaluation par module
- `/news` — Concours ouverts (mis à jour automatiquement depuis almaster-maroc.com)
- `/admin` — Panneau d'administration (ajout/édition/suppression concours/cours/évaluation/news), protégé par mot de passe

Données — `public/data/concours.json`, `cours/`, `quiz/`, `news.json` sont la seed initiale ; les modifications admin (concours, cours, QCM, news manuelles) sont stockées dans Vercel KV, qui devient la source vivante après le premier chargement. En local sans KV configuré, l'API se rabat sur ces fichiers (lecture seule) :
- `public/data/concours.json` — un objet par concours, avec `enonce_md` (énoncé transcrit) et `corrige_md` (corrigé, optionnel)
- `public/data/extraits/<id>.md` et `public/data/corriges/<id>.md` — copies lisibles individuelles de `enonce_md`/`corrige_md` pour chaque concours qui en a un, pour naviguer facilement dans le dépôt GitHub sans ouvrir le JSON (miroir de `public/images/<ville>/<id>/`). Ce sont des copies de secours : la donnée de référence utilisée par le site reste `concours.json` (et KV en production) — après avoir édité `enonce_md`/`corrige_md` dans `concours.json`, régénérer ces fichiers `.md`.
- `public/images/` — extraits réels scannés des sujets, organisés par ville puis par concours

**Corrigés.** Un corrigé, quand il existe, est rédigé par IA (relecture croisée entre le scan réel et une transcription texte de la source citée dans `source`, avec vérification par recoupement des chiffres donnés dans l'énoncé) — pas une correction officielle. Il est marqué comme tel sur le site (bandeau d'avertissement dans l'onglet "Corrigé"). Toute donnée manquante ou illisible dans les sources disponibles est signalée explicitement dans le corrigé plutôt qu'inventée.

## Développement local

```bash
npm install
npm run dev
```

Puis ouvrir `http://localhost:3000`. Sans variables d'environnement Vercel KV, l'API `/api/concours` se rabat sur `public/data/concours.json` (lecture seule en local).

## Déploiement sur Vercel

1. Importer le repo sur [vercel.com/new](https://vercel.com/new) (Next.js est détecté automatiquement, aucune configuration nécessaire).
2. Dans l'onglet **Storage** du projet Vercel, ajouter une base **KV** (Redis) et la connecter au projet — les variables `KV_REST_API_URL` / `KV_REST_API_TOKEN` sont injectées automatiquement.
3. Dans **Settings → Environment Variables**, ajouter `ADMIN_PASSWORD` (le mot de passe pour accéder à `/admin`).
4. Redéployer. Le panneau `/admin` permet ensuite d'ajouter/modifier/supprimer des concours sans toucher au code.

## GitHub Pages

L'ancienne URL GitHub Pages (`index.html` à la racine) redirige automatiquement vers l'URL Vercel du site.
