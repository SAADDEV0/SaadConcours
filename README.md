# Concours Masters Maroc

Base de données de sujets réels de concours d'accès aux Masters spécialisés (CCA, GFCF, Finance, Fiscalité, Audit) dans les universités marocaines (FSJES, ENCG, Facultés Polydisciplinaires...).

- `index.html` — application web complète (filtres, recherche, rendu Markdown/LaTeX, galerie d'images), sans dépendance de build.
- `data/concours.json` — données structurées de chaque concours (généré depuis les fiches Markdown).
- `images/` — extraits réels scannés des sujets, organisés par ville puis par concours.

Aucun corrigé n'est fourni — uniquement les énoncés transcrits fidèlement, avec la source d'origine citée pour chaque fiche.

## Développement local

```bash
python3 -m http.server 8000
```

Puis ouvrir `http://localhost:8000`.
