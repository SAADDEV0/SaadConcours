# Concours Masters Maroc

Base de données de sujets réels de concours d'accès aux Masters économie-gestion (Finance, Comptabilité & Audit, Management & RH, Marketing & Commerce, Économie Appliquée, Data & Économétrie) dans les universités marocaines (FSJES, ENCG, Facultés Polydisciplinaires...).

Application Next.js multi-pages :

- `/` — Accueil (présentation, alerte mini-news, accès aux 4 sections)
- `/concours` — Concours (filtres, recherche, rendu Markdown/LaTeX, galerie d'images, export PDF, corrigé quand disponible)
- `/cours` — Fiches de cours par module
- `/evaluation` — QCM d'auto-évaluation par module
- `/news` — Concours ouverts (mis à jour automatiquement depuis almaster-maroc.com)
- `/boutique` — Cahiers de préparation vendus sur Gumroad (le site présente, Gumroad encaisse et livre le PDF)
- `/admin` — Console d'administration v6 (voir « La console d'administration » plus bas), protégée par mot de passe

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

## La règle à ne pas casser : une page publique n'invoque pas le Worker

> Les sections « Vercel » ci-dessous datent d'avant la migration sur Cloudflare
> Workers (21/09/2026) et ne décrivent plus l'hébergement réel.

Le site tourne sur le **plan gratuit** de Cloudflare Workers, qui accorde
**10 ms de CPU par invocation**. Démarrer un isolate froid en consomme à lui
seul ~33 ms (chiffre affiché par wrangler au déploiement : `Worker Startup
Time`). Conséquence directe : **toute requête servie par le Worker rend une
`Error 1102` si elle tombe sur un isolate froid**, avant d'exécuter la moindre
ligne de code applicatif. Ce n'est pas un bug à corriger dans le code, c'est le
plafond du plan.

La parade est structurelle : **le site public ne passe pas par le Worker.**
`next build` prérend les pages en `.html`, et
`scripts/prerender-to-assets.mjs` les publie dans les assets Cloudflare, servis
au bord du réseau sans démarrer d'isolate — gratuit, illimité, et incapable par
construction de rendre une 1102. Le Worker ne garde que `/admin`, `/api/*`, le
sitemap et les 404.

En pratique, quand tu touches à une page publique :

- **Ne la rends pas dynamique.** `cookies()`, `headers()`, `searchParams`,
  `export const dynamic = "force-dynamic"` ou un `revalidate` non nul retirent
  la page du prérendu : elle repasse par le Worker et se remet à tomber en
  1102. Ce qui dépend du visiteur se fait **côté client**, après hydratation.
- **Vérifie d'un coup d'œil** qu'une page est bien servie en statique :

  ```bash
  curl -sI https://www.saadconcours.space/concours | grep -i x-opennext
  ```

  Une ligne `x-opennext: 1` signifie que le Worker a été invoqué, donc que la
  page peut rendre une 1102. Aucune sortie = servie depuis les assets, tout va
  bien.
- **Le CI le vérifie à chaque déploiement** (étape *Public pages must not
  invoke the Worker*) et refuse de laisser passer une régression. Le test
  existe parce que la panne est invisible en local — le runtime de `next dev`
  n'a aucune limite CPU — et ne frappe en production qu'une fraction des
  requêtes.

Le diagnostic quand une 1102 apparaît quand même :

```bash
npx wrangler tail saad-concours --format json --status error
```

`"outcome": "exceededCpu"` avec `"cpuTime": 10` confirme le plafond CPU. À ne
pas confondre avec la 1102 de l'espace admin causée par une `KV_REST_API_URL`
invalide, qui est systématique et non intermittente.

## Déploiement sur Vercel

1. Importer le repo sur [vercel.com/new](https://vercel.com/new) (Next.js est détecté automatiquement, aucune configuration nécessaire).
2. Créer un **GitHub Personal Access Token (fine-grained)** sur [github.com/settings/personal-access-tokens](https://github.com/settings/personal-access-tokens) : Repository access → ce repo uniquement, Permissions → **Contents: Read and write**.
3. Dans **Settings → Environment Variables** du projet Vercel, ajouter `GITHUB_TOKEN` (le token ci-dessus) et `ADMIN_PASSWORD` (le mot de passe pour accéder à `/admin`).
4. Redéployer. Le panneau `/admin` permet ensuite d'ajouter/modifier/supprimer des concours/cours/QCM/news — chaque action crée un commit sur `main`, visible sur GitHub quasi immédiatement (le site relit le fichier brut avec un cache de 10 secondes).

Sans `GITHUB_TOKEN` en production, l'API se rabat sur les fichiers embarqués dans le build (figés à la dernière compilation) et `/admin` ne peut pas écrire — définir `GITHUB_TOKEN` est donc nécessaire pour que le panneau d'administration fonctionne.

## Relation GitHub / Vercel

- **GitHub = source de vérité.** Le dépôt contient le code (déployé par Vercel à chaque push sur `main`) et les données (`public/data/*.json`, lues en direct par le site et écrites par `/admin` via des commits, voir ci-dessus).
- **Vercel = hébergement.** Chaque push sur `main` déclenche un build et un déploiement automatique sur `saadconcours.space` (projet Vercel `saad-concours`, domaine custom configuré dans Vercel → Settings → Domains).
- **GitHub Actions** exécute les jobs planifiés (`.github/workflows/`) : scraping almaster (`update-news.yml`). L'envoi d'emails aux abonnés a été retiré du site (septembre 2026) : la liste s'exporte en CSV depuis la console vers une plateforme d'emailing externe.
- **GitHub Pages est désactivé.** Le site n'est plus servi que par Vercel/saadconcours.space ; `index.html` à la racine est un reliquat de l'ancienne redirection et peut être supprimé.

## La console d'administration (`/admin`, v6)

Refaite en septembre 2026, au design du site public. Écrans : tableau de bord, concours (liste, éditeur, couverture & qualité, import groupé), cours Licence, cours Bac, évaluations, blog, concours ouverts, boutique, studio social, studio PDF, abonnés, statistiques, monétisation, activité & corbeille, réglages. Recherche globale : `Ctrl K`.

**Comment elle écrit dans le dépôt.** Le Worker n'a que 10 ms de CPU : il ne parse plus jamais les gros fichiers. Le navigateur lit `public/data/*.json` sur le CDN de GitHub (adressé par hash de commit), applique la modification lui-même, envoie le résultat en blob, et `/api/admin/repo/commit` crée **un seul commit** pour tous les fichiers touchés (JSON + miroirs Markdown + images), refusé (409) si le fichier a changé entre-temps — la console recharge et réessaie. Voir `lib/githubGit.js` et `app/admin/_lib/repo.js`.

- Un concours `"statut": "brouillon"` n'apparaît nulle part sur le site (`getPublicConcours` dans `lib/store.js`).
- Supprimer met l'élément dans une corbeille (KV) restaurable depuis Activité › Corbeille.
- L'indicateur « Mise en ligne » de la barre du haut suit le workflow `deploy-cloudflare.yml` : une modification est visible sur le site à la fin du déploiement (3 à 5 min).
- Toute route `/api/admin/*` exige une session (middleware), sauf login/logout.
