# Immagini / Images

| File | Formato | Uso |
|---|---|---|
| `logo-ml.png` | PNG 720×360, sfondo trasparente | logo nell'header |
| `logo-ml.svg` | SVG | ripiego se `logo-ml.png` manca |
| `marco-portrait.jpg` | JPG 800×993 | ritratto |
| `marco-avatar.png` | PNG 512×512 | avatar |
| `og-cover.jpg` | JPG 1200×630 | anteprima social (Open Graph) |
| `favicon-16x16.png`, `favicon-32x32.png`, `favicon-48x48.png` | PNG trasparente | icone della scheda del browser |
| `favicon-180x180.png` | PNG trasparente | sorgente per l'icona Apple |
| `favicon-192x192.png`, `favicon-512x512.png` | PNG trasparente | icone Android / manifest |
| `apple-touch-icon.png` | PNG 180×180, sfondo scuro pieno | icona iOS (iOS riempie di nero la trasparenza) |
| `icon-maskable-512.png` | PNG 512×512, sfondo scuro, logo nella zona sicura | icona Android «maskable» |

In radice: `favicon.ico` (16/32/48, generata dai PNG) e `manifest.webmanifest`.
`apple-touch-icon.png`, `icon-maskable-512.png` e `favicon.ico` derivano dai
`favicon-*.png`: se li sostituisci, rigenerali.
