# Immagini / Images

Le immagini che hai allegato in chat non possono essere scritte su disco da qui:
vanno caricate a mano in questa cartella. Il sito è già predisposto per usarle e
funziona anche senza (in assenza della foto compare il monogramma `ml`).

The images attached in chat cannot be written to disk from the agent session:
upload them into this folder. The site already points at these paths and degrades
gracefully if they are missing.

| File | Cosa metterci / What to put here | Formato consigliato |
|---|---|---|
| `logo-ml.png` | Il logo `ml` originale. Compare in header, badge dell'hero, footer e pagina di scelta lingua. | PNG con **sfondo trasparente**, ≥ 600 px di larghezza |
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
  del brand (`#e8112d`). **Non è il logo originale**: è un'approssimazione, e
  serve solo da ripiego finché `logo-ml.png` non è stato caricato. Se manca il
  PNG, le pagine mostrano questa versione vettoriale invece di un'immagine rotta.
- `favicon.svg` — favicon con lo stesso monogramma su fondo nero. Anche questa è
  la ricostruzione: per sostituirla serve una versione **quadrata** del logo,
  che il file `logo-ml.png` (largo e basso) non può fare bene.
