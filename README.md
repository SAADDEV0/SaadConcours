# Concours Masters Maroc

Base de données de sujets réels de concours d'accès aux Masters spécialisés (CCA, GFCF, Finance, Fiscalité, Audit) dans les universités marocaines (FSJES, ENCG, Facultés Polydisciplinaires...).

Application Next.js multi-pages :

- `/` — Concours (filtres, recherche, rendu Markdown/LaTeX, galerie d'images, export PDF)
- `/cours` — Fiches de cours par module
- `/evaluation` — QCM d'auto-évaluation par module
- `/news` — Concours ouverts (mis à jour automatiquement depuis almaster-maroc.com)
- `/admin` — Panneau d'administration (ajout/édition/suppression des concours), protégé par mot de passe

Données :
- `public/data/concours.json` — données structurées de chaque concours (seed initiale ; les modifications admin sont stockées dans Vercel KV)
- `public/data/cours/`, `public/data/quiz/`, `public/data/news.json` — cours, QCM, actualités
- `public/images/` — extraits réels scannés des sujets, organisés par ville puis par concours

Aucun corrigé n'est fourni — uniquement les énoncés transcrits fidèlement, avec la source d'origine citée pour chaque fiche.

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
