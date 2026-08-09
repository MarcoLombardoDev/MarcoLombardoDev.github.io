# Marco Lombardo — sito personale / personal site

Sito statico bilingue (🇮🇹 / 🇬🇧), senza dipendenze e senza build: solo HTML, CSS
e JavaScript vanilla. Pronto per GitHub Pages.

Static bilingual site, zero dependencies, no build step — plain HTML, CSS and
vanilla JavaScript. Ready for GitHub Pages.

---

## Struttura / Structure

```
.
├── index.html              # router lingua: rileva il browser e reindirizza
├── it/index.html           # pagina italiana
├── en/index.html           # pagina inglese
├── assets/
│   ├── css/style.css       # tema unico condiviso dalle due lingue
│   ├── js/main.js          # nav, reveal on scroll, scroll spy, memoria lingua
│   └── img/                # logo + favicon SVG, foto da caricare (vedi README)
├── robots.txt
├── sitemap.xml
└── .nojekyll               # serve i file così come sono su GitHub Pages
```

## Come funziona la lingua / Language handling

`index.html` (la radice) sceglie la lingua in quest'ordine:

1. **`?lang=it` / `?lang=en`** nell'URL — override esplicito, utile per i link;
2. **la lingua scelta in precedenza**, salvata in `localStorage` (`ml-lang`);
3. **la lingua del browser**: `it*` → `/it/`, qualsiasi altra → `/en/`;
4. **inglese** come fallback.

Il redirect usa `location.replace()`, quindi il tasto "indietro" non entra in loop.
Senza JavaScript un `<noscript>` porta comunque alla versione inglese, e la
pagina mostra i due link in chiaro.

Il **selettore IT/EN** è sempre presente in header e footer di entrambe le
pagine: cliccarlo cambia pagina *e* memorizza la scelta, che viene rispettata
alla visita successiva.

## Grafica / Design

- Rosso brand `#e8112d`, gradienti grafite/nero, barre rosse verticali nell'hero
  che riprendono il banner LinkedIn.
- Monogramma `ml` ricostruito in **SVG vettoriale** (nessuna immagine raster
  necessaria) in header, badge dell'hero e footer.
- Ritratto in un anello rosso animato; se il file foto manca compare un
  monogramma di riserva, quindi la pagina non si rompe mai.
- Animazioni discrete (reveal allo scroll, marquee, hover) tutte disattivate
  automaticamente con `prefers-reduced-motion`.
- Responsive fino a mobile, menu a scomparsa, skip-link e focus visibile.

## Immagini / Images

Logo, ritratto, icona e anteprima social sono in `assets/img/` — dimensioni e
provenienza in [`assets/img/README.md`](assets/img/README.md). Restano
ricostruite solo `logo-ml.svg` (ripiego se il PNG manca) e `favicon.svg`, che
per essere sostituita vuole una versione quadrata del marchio.

## Testi da rivedere / Copy to review

I testi sono scritti volutamente su ruolo e interessi generali (innovazione,
AI e automazione, prodotti digitali, fotografia, condivisione) e **non citano
azienda, ruolo o città**: rileggili e personalizzali dove vuoi essere più
specifico. Le sezioni da guardare sono `#about`, `#focus` e `#approach` nei due
file HTML.

Nella sezione contatti c'è un pulsante email già pronto ma commentato: togli il
commento e inserisci l'indirizzo che vuoi rendere pubblico (non è stato inserito
nessun indirizzo di default).

## Anteprima in locale / Local preview

```bash
python3 -m http.server 8000
# poi apri http://localhost:8000/
```

## Pubblicazione / Publishing

Questo è il repository *user site* (`marcolombardodev.github.io`): GitHub Pages
lo serve dalla radice del dominio, quindi il sito vive su
`https://marcolombardodev.github.io/` senza sottocartelle.

Se Pages non fosse già attivo: Settings → Pages → *Deploy from a branch* →
branch `main`, cartella `/ (root)`. Non serve nessun workflow di deploy: ogni
push su `main` viene ripubblicato automaticamente.

This is the *user site* repository, so GitHub Pages serves it from the domain
root. No deploy workflow is needed — every push to `main` republishes the site.

Se in futuro colleghi un dominio personalizzato, aggiorna gli URL assoluti in
`<link rel="canonical">`, negli `hreflang`, nei meta `og:` e in `sitemap.xml`.
