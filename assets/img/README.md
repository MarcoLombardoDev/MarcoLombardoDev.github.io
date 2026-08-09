# Immagini / Images

Le immagini in uso sono tutte qui e sono derivate da tre originali caricati a
mano (il logo, il ritratto e la versione tonda). Gli originali non sono rimasti
nella cartella — il sito non li usava e pesavano oltre 4 MB — ma restano nella
storia del repository, al commit che li ha introdotti.

The images in use are all here, derived from three originals uploaded by hand.
The originals are not kept in the folder — unused by the site and over 4 MB —
but they remain in the repository history.

| File | Dove compare / Where it appears | Formato |
|---|---|---|
| `logo-ml.png` | Header, badge dell'hero, footer, pagina di scelta lingua. | PNG 720×360, sfondo trasparente |
| `marco-portrait.jpg` | Il cerchio rosso dell'hero. | JPG 800×993 |
| `marco-avatar.png` | Icona iOS/Android (`apple-touch-icon`). | PNG 512×512, angoli riempiti di `#0a0a0c` |
| `og-cover.jpg` | Anteprima per LinkedIn/WhatsApp/X (`og:image`). | JPG 1200×630 |

## Se sostituisci un file / Replacing a file

Tieni lo stesso nome e non serve toccare il codice: i percorsi sono già
referenziati in `index.html`, `it/index.html` e `en/index.html`. Le dimensioni
sopra sono il doppio di quelle a cui i file vengono mostrati, così restano
nitidi sugli schermi retina senza pesare più del necessario.

`og-cover.jpg` è una composizione costruita a partire dal logo e dal ritratto,
volutamente senza testo oltre al nome, così lo stesso file serve sia `/it/` sia
`/en/`. Se ne vuoi una diversa, basta sovrascriverlo mantenendo 1200×630.

## Ricostruzioni ancora presenti / Reconstructions still in the repo

- `logo-ml.svg` — il monogramma `ml` ridisegnato in SVG. **Non è il logo
  originale**: è un'approssimazione che fa da ripiego. Se `logo-ml.png` sparisce,
  le pagine mostrano questa versione invece di un'immagine rotta.
- `favicon.svg` — favicon con lo stesso monogramma ridisegnato su fondo nero.
  Per sostituirla con il logo vero serve una versione **quadrata** del marchio:
  `logo-ml.png` è largo il doppio dell'altezza e ritagliato non si legge.
