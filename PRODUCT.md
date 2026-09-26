# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: people who land on the site out of curiosity about a specific project — the two startups (Repetita, Okkupa), one of the open-source desktop tools (Argus, Orion, Iris, Proteus, P7M Manager, Tyche), or the Studio Urbani client site — and want to try it, download it, or look at the code.

Secondary, served by the same content without a dedicated funnel: companies or collaborators evaluating Marco for work, and readers/buyers of his books and toolkits on Gumroad. No single audience is optimized for at the expense of the others; the site is one bilingual hub the different audiences self-select from.

## Product Purpose

A personal site that joins Marco Lombardo's identity and working philosophy to a live portfolio of things he has actually shipped — two startups, five AGPL desktop tools, one client website, and a shop of books/guides/toolkits — so a visitor moves in one step from "who is this" to "here's something real of his to open."

## Positioning

A serial builder who ships, not just one who talks: the claim is backed by the portfolio itself — real running apps (Repetita, Okkupa), real downloadable software under an actual open-source license with a commercial tier (Argus, Orion, Iris, Proteus, P7M Manager, Tyche), a real client site in production (studiourbani.it), and real products for sale (Gumroad). A neighboring "innovation strategist" profile could not point at the same density of finished, usable artifacts.

## Operating Context

- Bilingual IT/EN static site (no framework, no build step): `it/` and `en/` mirror each other page for page, with a root `index.html` language router (URL param → saved choice → browser language → Italian default).
- Hosted on GitHub Pages, served from `main` only; no other long-lived branches.
- Each project gets a generated detail page (`it/progetti/<slug>/`, `en/projects/<slug>/`) produced by a Python generator kept outside the repo; every page cross-links to the other projects. Five tool projects (Argus, Orion, Iris, Proteus, Tyche) are named after Greek myth figures and carry a short "the name, in myth" note explaining the reference.
- `books.html` is a separate surface: its content is the source Gumroad publishes to `marcolombardo.gumroad.com` via a GitHub Actions workflow on every push. Gumroad's publish sanitizer strips every `<meta>` tag on that page, so it cannot host its own SEO/verification tags and is excluded from this site's own search indexing (`robots.txt`).

## Capabilities and Constraints

- No backend, no CMS, no analytics evidenced anywhere in the repo. Content is hand-authored HTML/CSS/vanilla JS plus the external project-page generator; there is no in-repo build step.
- GitHub Pages constrains deploys to `main`; there is no staging environment.
- The Gumroad-published page is a content fragment, not a full document — assume any `<head>`-level tag added to `books.html` will be silently stripped on publish (confirmed via the CLI's own sanitization report), so SEO/verification work belongs on the GitHub Pages pages, never on that file.

## Brand Commitments

- Name/wordmark: "Marco Lombardo", with a logo mark (`assets/img/logo-ml.png`, plus an inline SVG fallback when the image is absent).
- Dark theme with a red accent (`#e8112d`); the red-gradient hero headline is a deliberate, already-reviewed brand treatment, not an artifact to "fix."
- Circular portrait treatment on the hero.
- Bilingual parity is a hard rule: no content change ships in only one language — this was an explicit correction from the user earlier and must not regress.
- Social handles: LinkedIn `/in/mlombardo`, Instagram/X `@mrram` (lowercase).

## Evidence on Hand

Real, currently-live projects, each with its own detail page: **Repetita** (startup, AI exam-prep app), **Okkupa** (startup, workplace booking), **Argus** (AGPL desktop crypto-forecasting tool), **Orion** (AGPL desktop PDF editor), **Iris** (AGPL desktop mail-merge tool), **Proteus** (AGPL desktop bulk asset-replacement tool), **P7M Manager** (AGPL desktop `.p7m` signature tool), **Tyche** (AGPL SuperEnalotto backtest tool), **Studio Urbani** (client institutional website, live at studiourbani.it), and a Gumroad shop of books, guides and AI toolkits.

No testimonials, press mentions, customer logos, or case-study metrics exist anywhere in the current content. Future work must not invent them.

## Product Principles

1. Every project claim on the site must link to something a visitor can actually open, download, or buy today — no vaporware framing.
2. Bilingual parity is non-negotiable: a new string, section, or fix ships in Italian and English together, never one first.
3. Domain diversity is the point, not noise to hide: AI, startups, open-source desktop tools, institutional web, and publishing sit side by side under one coherent voice.
4. Direct, unembellished tone throughout — clarity over hype, and explicit honesty about a name or claim being "just a name" rather than oversold ("Il nome è preso in prestito... non per un parallelo diretto con quello che il programma fa" on the Orion page).
5. Never fabricate proof. No testimonial, benchmark, or case study appears until a real one exists.
