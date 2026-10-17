---
name: Marco Lombardo
description: A light, illustrated personal-portfolio system: the cream, sage and charcoal of the hero banner, with the logo's vermilion red as its one accent.
colors:
  logo-red: "#e7311e"
  logo-red-lit: "#f2503a"
  logo-red-deep: "#a42b23"
  logo-red-text: "#b82a1b"
  cream-paper: "#f2f1e0"
  sage-band: "#e4e9d6"
  cream-panel: "#f6f6ea"
  cream-panel-bright: "#fcfcf6"
  charcoal: "#3c3939"
  ink: "#2b2929"
  slate-muted: "#484f4f"
  slate-dim: "#586262"
  hairline: "rgba(46, 44, 44, 0.14)"
  hairline-strong: "rgba(46, 44, 44, 0.26)"
typography:
  display:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2.9rem, 7vw, 5.1rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2rem, 4.2vw, 3.1rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.28rem"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "-0.01em"
  label:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "12.5px"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.18em"
rounded:
  pill: "999px"
  lg: "26px"
  md: "16px"
  sm: "12px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "56px"
  xl: "110px"
components:
  button-primary:
    backgroundColor: "{colors.logo-red}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-ghost:
    backgroundColor: "rgba(46, 44, 44, 0.045)"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  card:
    backgroundColor: "{colors.cream-panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "32px 28px"
  chip:
    backgroundColor: "rgba(46, 44, 44, 0.045)"
    textColor: "{colors.slate-dim}"
    rounded: "{rounded.pill}"
    padding: "5px 12px"
  lang-pill-active:
    backgroundColor: "{colors.logo-red}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "5px 10px"
---

# Design System: Marco Lombardo

## Overview

**Creative North Star: "The Illustrated Workshop"**

The hero banner is a hand-drawn comic of a maker's bench: gears, rockets, code windows, robots and a Raspberry Pi, all in warm greys, sage greens and cream, with the red "ML" of the logo bursting out of the middle. The whole site takes its palette from that picture, so the page and the banner read as one object: cream paper, sage bands, charcoal for the grounding bars, and one vermilion red, the exact red of the logo, for everything that matters.

The voice stays direct and unhyped, a little dramatic only where it counts (the gradient hero headline, the pulsing "on" dot in the eyebrow). Bilingual IT/EN content is a structural constraint, not a visual one — every surface must hold its composition in both languages at the same density.

**Key Characteristics:**
- One accent color, used deliberately and rarely — never as a fill for a large surface at rest.
- Flat, light surfaces by default; shadow is earned, not ambient, except on the one or two elements meant to command attention.
- Pill shapes for anything interactive or status-bearing; soft-large radius for content containers; a perfect circle only for the portrait.
- Uppercase, letter-spaced labels functioning as on-screen kickers/captions, the closest thing this system has to a second typographic voice despite using a single font family.

## Colors

Measured from `assets/img/header-bg.webp`: the banner is about 31% grey-green (`#687374`–`#839292`), 19% sage (`#A1B6AE`–`#BED3C4`), 13% cream (`#EBEACF`), 13% warm charcoal (`#3C3939`) and a vivid red (`#E7311E` on the logo face, `#A42B23` on its sides). The site uses those families, lightened where text sits on them so contrast holds.

### Primary
- **Logo Red** (`#e7311e`): the one accent, taken from the face of the logo. Primary CTAs (as a gradient into Logo Red Deep), the section-tag rule, the "on" pulse dot, active-state pills, icon-tile washes, hover borders. Never a full-bleed background.
- **Logo Red Text** (`#b82a1b`): the same hue deepened to 5.6:1 on cream, for small red text (section tags, card "go" links, fact keys, principle numbers).
- **Logo Red Lit** (`#f2503a`) / **Logo Red Deep** (`#a42b23`): the lit and shadowed tones of the logo, used as gradient stops (headline, button, portrait ring).

### Neutral
- **Cream Paper** (`#f2f1e0`): the page background, a lightened banner cream.
- **Sage Band** (`#e4e9d6`): alternating-section and contact bands, from the banner's sage.
- **Cream Panel** (`#f6f6ea`) / **Cream Panel Bright** (`#fcfcf6`): the two stops of the card gradient; cards sit slightly lighter than the page.
- **Charcoal** (`#3c3939`): the marquee band and the footer, the banner's darkest neutral; text inside them is cream.
- **Ink** (`#2b2929`): primary text and headlines.
- **Slate Muted** (`#484f4f`) / **Slate Dim** (`#586262`): secondary and tertiary text, both at least 5:1 on cream and 4.5:1 on sage.
- **Hairline** (`rgba(46,44,44,0.14)`) / **Hairline Strong** (`rgba(46,44,44,0.26)`): the only border language; colored borders appear only on hover and focus.

### Hero
The banner itself is the hero background (full width, 16:9, anchored to the top, fading into Cream Paper at its bottom edge); the copy sits in a frosted cream panel so it stays legible. The hero's own logo stays visible above the panel. On screens narrower than 900px a 1280px-wide copy of the banner is used.

### Named Rules
**The Rare Red Rule.** Logo Red never fills a large surface at rest. It appears as a rule, a dot, a badge fill, a gradient stop, or a hover/active response — always small, always earned.

## Typography

**Display / Body / Label Font:** Inter (with the system sans-serif stack as fallback).

**Character:** One typeface for everything; hierarchy is built entirely from size, weight, and letter-spacing rather than a second family. Headlines run tight and heavy (800 weight, −0.035em tracking); body copy relaxes to a normal weight with generous line-height (1.65) for long-form reading; labels invert the logic entirely — small, bold, and tracked wide in uppercase, functioning as captions rather than prose.

### Hierarchy
- **Display** (800, `clamp(2.9rem, 7vw, 5.1rem)`, 1.08): the hero H1 only — two lines, the second one rendered in the Logo Red gradient.
- **Headline** (800, `clamp(2rem, 4.2vw, 3.1rem)`, 1.08): section and project-page H1/H2s.
- **Title** (800, `1.28rem`, 1.08): card and principle H3s.
- **Body** (400, `17px`/`16px` on mobile, 1.65, −0.01em tracking): paragraphs; hero lead and about-body copy cap at 54–65ch.
- **Label** (800, `12.5–14px`, uppercase, `0.14–0.22em` tracking): eyebrow chips, section tags, project badges, nav pills, footer/marquee captions.

### Named Rules
**The One Voice Rule.** Every text role is Inter. Hierarchy is a function of scale, weight, and tracking — never a second typeface, not even for labels or code-like content.

## Layout

A single centered column (`max-width: 1180px`, 24px side gutter, 20px under 980px) holds every section; `.hero-grid` and `.about-grid` are the only two-column layouts (roughly 55/45 and 60/40 splits), both collapsing to one column under 980px with the portrait or fact-list reordered above the copy. Section rhythm is generous and consistent: 110px of vertical padding per section (78px under 980px), alternating between the base Cream Paper and the slightly lighter Sage Band band to separate content without hairlines. Card grids (`auto-fit, minmax(240–280px, 1fr)`) reflow from 3–4 columns down to 1 as the viewport narrows, with link-card grids pairing to 2 columns above 821px specifically so a 2×2 block never orphans a lone fourth card.

Content reveals on scroll: elements carry `.reveal` (opacity 0, translateY(26px)) and gain `.is-visible` via JavaScript intersection observation, staggered by a `data-delay` attribute in milliseconds — this is progressive enhancement only (scoped to `.js`), so content is fully visible with JavaScript disabled or `prefers-reduced-motion` set.

## Elevation & Depth

Flat by default; shadow is a signal, not ambient decoration. Three elements carry a permanent soft shadow at rest — the primary button, the hero-portrait ring and the hero copy panel that floats over the banner — because they are the two things on any page most worth noticing. Everything else (cards, link-cards, the header) stays flat until it responds to something: a hover lifts a card and adds a neutral shadow, a scroll position adds a blurred backdrop to the header, a focus ring appears only on `:focus-visible`. Nothing floats without a reason.

### Shadow Vocabulary
- **Ambient signal** (`box-shadow: 0 16px 40px rgba(231,49,30,0.3)`): the primary CTA and the hero-portrait ring at rest — the only permanent shadows in the system.
- **Structural lift** (`box-shadow: 0 22px 50px rgba(60,57,57,0.18)`): cards and badges on hover, or floating chrome (the hero name-badge, a stuck header) — always a response, never a resting state.

### Named Rules
**The Earned Shadow Rule.** A shadow either marks the one primary action on a screen, or answers a hover/focus/scroll event. Nothing else casts one at rest.

## Shapes

Two vocabularies, deliberately not blended. Anything interactive or status-bearing — buttons, chips, badges, nav pills, the language switch, project-category dividers — is either a full pill (`999px`) or, for the portrait, a perfect circle. Content containers — cards, link-cards, the myth-note box — take a soft, large radius (`26px`) that reads as considered rather than sharp or default-bootstrap. A small `16px`/`12px` radius appears only on compact chrome (icon tiles, the nav-toggle button, fact-list rows).

## Components

### Buttons
- **Shape:** full pill (`999px`).
- **Primary:** Logo Red → Logo Red Deep diagonal gradient, white text, permanent ambient red shadow; hover lifts 3px and deepens the shadow. This is the only button that carries weight at rest.
- **Ghost/Secondary:** near-transparent ink wash (`rgba(46,44,44,0.045)`), a Hairline Strong border, ink text; hover lifts the same 3px and brightens the fill/border, no color shift.
- Both: 700 weight, 15px label, 14px gap between icon and text, icon always 18×18 inline SVG.

### Chips / Labels
- **Eyebrow / section-tag:** uppercase, wide-tracked, Slate Muted or Logo Red Text text on a near-transparent or bare background; the eyebrow additionally carries a pulsing Logo Red dot (2.6s cycle) as a literal "live" indicator.
- **Project badge / tag:** pill, Hairline border, Slate Dim text, no fill beyond the base near-transparent white.
- **Active state (language switch):** the only chip that inverts to a solid Logo Red fill with white text and its own small red-tinted shadow.

### Cards / Containers
- **Corner style:** 26px radius, flat at rest.
- **Background:** Cream Panel → Cream Panel Bright vertical gradient, one hairline border.
- **Shadow strategy:** none at rest; hover adds Structural Lift plus a soft radial red glow bleeding from the top-right corner and an 8px upward translate.
- **Icon tile (card icon):** 52×52px, 15px radius, Logo Red at 14% fill with a 32%-opacity Logo Red border — the same "accent as a quiet wash, not a fill" logic as the palette rule.
- **Fact-list row:** same cream-panel background at 16px radius, hairline border, icon + small uppercase Logo-Red-Text key label + ink value; hover nudges the row 6px sideways rather than up.

### Navigation
- Desktop: inline pill links, Slate Muted at rest, ink on a faint white fill when hovered or active; the language switch is a two-pill segmented control with the active language solid-red.
- Mobile (< 980px): the nav becomes a full-width dropdown sheet (blurred cream background) that slides down from behind the header on a hamburger toggle; the header itself gains a permanent blurred backdrop while the sheet is open so it never looks transparent mid-interaction.
- The header is a light frosted bar over the hero banner and gains a blurred, semi-opaque backdrop (`.is-stuck`) once the page scrolls, via a hairline bottom border.

### Myth Note (signature component)
A bordered, cream-panel callout used only on project pages whose name is a Greek myth figure (Argus, Orion, Iris, Proteus, Tyche): a landmark/temple icon, a Logo-Red-Text uppercase "the name, in myth" label, and one explanatory paragraph in Slate Muted. Same visual family as the fact-list, repurposed for a narrative aside rather than a data point.

## Do's and Don'ts

### Do:
- **Do** keep Logo Red to accents, rules, dots, gradient stops, and the single primary action per screen — never a background fill.
- **Do** ship every new string in Italian and English together; a surface that only reads correctly in one language is incomplete.
- **Do** use the pill shape for anything the visitor acts on or that reports status; use the 26px soft radius for anything that just contains content.
- **Do** let shadows answer an interaction (hover, focus, scroll, "this is the primary action") rather than sit under something at rest by default.
- **Do** keep labels/eyebrows uppercase and wide-tracked — they are the system's only substitute for a second typeface.

### Don't:
- **Don't** introduce a second font family for emphasis or "personality" — hierarchy is size, weight, and tracking only.
- **Don't** add a testimonial, press logo, benchmark, or case-study metric — none exist in the real content, and PRODUCT.md records that absence deliberately.
- **Don't** give a card, chip, or nav item a resting shadow; only the primary button and the hero-portrait ring are allowed to glow without being touched.
- **Don't** treat `books.html` as a normal page when designing — it is a headless Gumroad content fragment with no `<head>`, and any `<meta>` tag added to it is silently stripped on publish.
