# Immagini / Images

Le immagini che hai allegato in chat non possono essere scritte su disco da qui:
vanno caricate a mano in questa cartella. Il sito è già predisposto per usarle e
funziona anche senza (in assenza della foto compare il monogramma `ml`).

The images attached in chat cannot be written to disk from the agent session:
upload them into this folder. The site already points at these paths and degrades
gracefully if they are missing.

| File | Cosa metterci / What to put here | Formato consigliato |
|---|---|---|
| `marco-portrait.jpg` | Il ritratto (giacca grigia, dolcevita nero). Compare nel cerchio rosso dell'hero. | JPG quadrato, ≥ 760×760 px, < 300 KB |
| `marco-avatar.png` | La versione tonda con bordo rosso. Usata come icona iOS/Android. | PNG quadrato 512×512 px |
| `og-cover.jpg` | Anteprima per LinkedIn/WhatsApp/X. Puoi usare il banner con logo `ml`. | JPG 1200×630 px |
| `banner.jpg` *(opzionale)* | Il banner LinkedIn originale, se vuoi tenerlo nel repo. | JPG 2000×500 px |

## Dopo il caricamento / After uploading

Non serve toccare il codice: i percorsi sono già referenziati in
`en/index.html` e `it/index.html`. Se rinomini un file, aggiorna l'attributo
`src` corrispondente.

## Asset già inclusi / Assets already in the repo

- `logo-ml.svg` — il monogramma `ml` ricostruito in SVG vettoriale con il rosso
  del brand (`#e8112d`), usato in header, hero badge e footer.
- `favicon.svg` — favicon con lo stesso monogramma su fondo nero.

Se hai il file originale del logo (AI/SVG/PNG), sostituisci pure `logo-ml.svg`:
la ricostruzione è un'approssimazione fedele nei colori e nel tratto, non il
file originale.
