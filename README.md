# Marco Lombardo — sito personale / personal site

Sito statico bilingue, senza dipendenze e senza build: HTML, CSS e JavaScript
vanilla.

Static bilingual site, no dependencies, no build step.

```
.
├── index.html      # router lingua
├── it/index.html
├── en/index.html
├── assets/
└── .nojekyll
```

## Anteprima locale / Local preview

```bash
python3 -m http.server 8000
```

## Pubblicazione / Publishing

Repository *user site*: GitHub Pages lo serve dalla radice del dominio, senza
workflow di deploy — ogni push su `main` ripubblica.

User site repository — GitHub Pages serves it from the domain root, no deploy
workflow needed.
