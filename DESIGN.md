---
name: Marco Lombardo
description: A dark, cinematic personal-portfolio system built around one disciplined signal-red accent.
colors:
  signal-red: "#e8112d"
  signal-red-bright: "#ff2237"
  signal-red-deep: "#b00b21"
  graphite-night: "#0a0a0c"
  graphite-night-deep: "#0f1013"
  graphite-panel: "#141519"
  graphite-panel-bright: "#1b1c21"
  bone-white: "#f4f4f6"
  fog-muted: "#a5a6b0"
  fog-dim: "#868791"
  hairline: "rgba(255, 255, 255, 0.09)"
  hairline-strong: "rgba(255, 255, 255, 0.16)"
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
    backgroundColor: "{colors.signal-red}"
    textColor: "{colors.bone-white}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-ghost:
    backgroundColor: "rgba(255, 255, 255, 0.04)"
    textColor: "{colors.bone-white}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  card:
    backgroundColor: "{colors.graphite-panel}"
    textColor: "{colors.bone-white}"
    rounded: "{rounded.lg}"
    padding: "32px 28px"
  chip:
    backgroundColor: "rgba(255, 255, 255, 0.04)"
    textColor: "{colors.fog-dim}"
    rounded: "{rounded.pill}"
    padding: "5px 12px"
  lang-pill-active:
    backgroundColor: "{colors.signal-red}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "5px 10px"
---

# Design System: Marco Lombardo

## Overview

**Creative North Star: "The Night Workshop"**

A maker's desk at night, lit like a film set rather than a cozy corner: graphite dark everywhere, one signal-red within arm's reach, used exactly when it matters and never as decoration. The system is confident and precise, with a touch of cinema in its lighting — the hero's radial vignette, the conic ring that circles the portrait like a spotlight, the vertical red bars borrowed straight from the owner's own LinkedIn banner. Nothing about it apologizes for the dark palette; it treats black and graphite as the workshop's natural light and lets the red do the only talking that needs doing.

The voice matches: direct, unhyped, a little dramatic where it counts (the gradient hero headline, the pulsing "on" dot in the eyebrow) but otherwise quiet. Bilingual IT/EN content is a structural constraint, not a visual one — every surface must hold its composition in both languages at the same density.

**Key Characteristics:**
- One accent color, used deliberately and rarely — never as a fill for a large surface at rest.
- Flat, dark surfaces by default; shadow is earned, not ambient, except on the one or two elements meant to command attention.
- Pill shapes for anything interactive or status-bearing; soft-large radius for content containers; a perfect circle only for the portrait.
- Uppercase, letter-spaced labels functioning as on-screen kickers/captions, the closest thing this system has to a second typographic voice despite using a single font family.

## Colors

Almost monochrome by design — graphite and bone white carry every surface and every word — so that Signal Red reads as a decision each time it appears, not a habit.

### Primary
- **Signal Red** (`#e8112d`): the one accent. Used on primary CTAs, the section-tag rule, the "on" pulse dot, the hero's vertical bars, active-state pills (language switch, lang-pill-active), hover borders, and icon-tile fills at low opacity. Never a full-bleed background.
- **Signal Red Bright** (`#ff2237`): the lit version of the accent — hover states, gradient headline highlight, "go" arrow on cards, myth-note captions. Reserved for text-on-dark and gradient stops, not fills.
- **Signal Red Deep** (`#b00b21`): the shadowed version — gradient partners for the primary button and the hero's vertical bars, never used alone.

### Neutral
- **Graphite Night** (`#0a0a0c`): the base page background — the workshop's ambient dark.
- **Graphite Night Deep** (`#0f1013`): the alternating-section and marquee background, one step lighter than the page base, used to separate bands of content without a hard line.
- **Graphite Panel** (`#141519`) / **Graphite Panel Bright** (`#1b1c21`): the two stops of the card surface gradient — panels sit slightly above the page in tone, never in shadow.
- **Bone White** (`#f4f4f6`): primary text and headline color.
- **Fog Muted** (`#a5a6b0`): body copy and secondary text (card paragraphs, nav links at rest).
- **Fog Dim** (`#868791`): tertiary text — marquee labels, footer copy, card metadata (the "handle" line under a project title).
- **Hairline** (`rgba(255,255,255,0.09)`) / **Hairline Strong** (`rgba(255,255,255,0.16)`): the only border language in the system — no colored borders except on hover/focus.

### Named Rules
**The Rare Red Rule.** Signal Red never fills a large surface at rest. It appears as a rule, a dot, a badge fill, a gradient stop, or a hover/active response — always small, always earned.

## Typography

**Display / Body / Label Font:** Inter (with the system sans-serif stack as fallback).

**Character:** One typeface for everything; hierarchy is built entirely from size, weight, and letter-spacing rather than a second family. Headlines run tight and heavy (800 weight, −0.035em tracking); body copy relaxes to a normal weight with generous line-height (1.65) for long-form reading; labels invert the logic entirely — small, bold, and tracked wide in uppercase, functioning as captions rather than prose.

### Hierarchy
- **Display** (800, `clamp(2.9rem, 7vw, 5.1rem)`, 1.08): the hero H1 only — two lines, the second one rendered in the Signal Red gradient.
- **Headline** (800, `clamp(2rem, 4.2vw, 3.1rem)`, 1.08): section and project-page H1/H2s.
- **Title** (800, `1.28rem`, 1.08): card and principle H3s.
- **Body** (400, `17px`/`16px` on mobile, 1.65, −0.01em tracking): paragraphs; hero lead and about-body copy cap at 54–65ch.
- **Label** (800, `12.5–14px`, uppercase, `0.14–0.22em` tracking): eyebrow chips, section tags, project badges, nav pills, footer/marquee captions.

### Named Rules
**The One Voice Rule.** Every text role is Inter. Hierarchy is a function of scale, weight, and tracking — never a second typeface, not even for labels or code-like content.

## Layout

A single centered column (`max-width: 1180px`, 24px side gutter, 20px under 980px) holds every section; `.hero-grid` and `.about-grid` are the only two-column layouts (roughly 55/45 and 60/40 splits), both collapsing to one column under 980px with the portrait or fact-list reordered above the copy. Section rhythm is generous and consistent: 110px of vertical padding per section (78px under 980px), alternating between the base Graphite Night and the slightly lighter Graphite Night Deep band to separate content without hairlines. Card grids (`auto-fit, minmax(240–280px, 1fr)`) reflow from 3–4 columns down to 1 as the viewport narrows, with link-card grids pairing to 2 columns above 821px specifically so a 2×2 block never orphans a lone fourth card.

Content reveals on scroll: elements carry `.reveal` (opacity 0, translateY(26px)) and gain `.is-visible` via JavaScript intersection observation, staggered by a `data-delay` attribute in milliseconds — this is progressive enhancement only (scoped to `.js`), so content is fully visible with JavaScript disabled or `prefers-reduced-motion` set.

## Elevation & Depth

Flat by default; shadow is a signal, not ambient decoration. Exactly two elements carry a permanent soft glow at rest — the primary button and the hero-portrait ring — because they are the two things on any page most worth noticing. Everything else (cards, link-cards, the header) stays flat until it responds to something: a hover lifts a card and adds a neutral shadow, a scroll position adds a blurred backdrop to the header, a focus ring appears only on `:focus-visible`. Nothing floats without a reason.

### Shadow Vocabulary
- **Ambient signal** (`box-shadow: 0 18px 50px rgba(232,17,45,0.28)`): the primary CTA and the hero-portrait ring at rest — the only permanent shadows in the system.
- **Structural lift** (`box-shadow: 0 24px 60px rgba(0,0,0,0.55)`): cards and badges on hover, or floating chrome (the hero name-badge, a stuck header) — always a response, never a resting state.

### Named Rules
**The Earned Shadow Rule.** A shadow either marks the one primary action on a screen, or answers a hover/focus/scroll event. Nothing else casts one at rest.

## Shapes

Two vocabularies, deliberately not blended. Anything interactive or status-bearing — buttons, chips, badges, nav pills, the language switch, project-category dividers — is either a full pill (`999px`) or, for the portrait, a perfect circle. Content containers — cards, link-cards, the myth-note box — take a soft, large radius (`26px`) that reads as considered rather than sharp or default-bootstrap. A small `16px`/`12px` radius appears only on compact chrome (icon tiles, the nav-toggle button, fact-list rows). The one deliberately hard edge in the system is the pair of red vertical bars flanking the hero — a flat-edged graphic accent that contrasts on purpose with the roundness everywhere else, quoting the owner's own LinkedIn banner.

## Components

### Buttons
- **Shape:** full pill (`999px`).
- **Primary:** Signal Red → Signal Red Deep diagonal gradient, white text, permanent ambient red shadow; hover lifts 3px and deepens the shadow. This is the only button that carries weight at rest.
- **Ghost/Secondary:** near-transparent white fill (`rgba(255,255,255,0.04)`), a Hairline Strong border, bone-white text; hover lifts the same 3px and brightens the fill/border, no color shift.
- Both: 700 weight, 15px label, 14px gap between icon and text, icon always 18×18 inline SVG.

### Chips / Labels
- **Eyebrow / section-tag:** uppercase, wide-tracked, Fog Muted or Signal Red Bright text on a near-transparent or bare background; the eyebrow additionally carries a pulsing Signal Red dot (2.6s cycle) as a literal "live" indicator.
- **Project badge / tag:** pill, Hairline border, Fog Dim text, no fill beyond the base near-transparent white.
- **Active state (language switch):** the only chip that inverts to a solid Signal Red fill with white text and its own small red-tinted shadow.

### Cards / Containers
- **Corner style:** 26px radius, flat at rest.
- **Background:** Graphite Panel → Graphite Panel Bright vertical gradient, one hairline border.
- **Shadow strategy:** none at rest; hover adds Structural Lift plus a soft radial red glow bleeding from the top-right corner and an 8px upward translate.
- **Icon tile (card icon):** 52×52px, 15px radius, Signal Red at 14% fill with a 32%-opacity Signal Red border — the same "accent as a quiet wash, not a fill" logic as the palette rule.
- **Fact-list row:** same graphite-panel background at 16px radius, hairline border, icon + small uppercase Signal-Red-Bright key label + bone-white value; hover nudges the row 6px sideways rather than up.

### Navigation
- Desktop: inline pill links, Fog Muted at rest, bone-white on a faint white fill when hovered or active; the language switch is a two-pill segmented control with the active language solid-red.
- Mobile (< 980px): the nav becomes a full-width dropdown sheet (blurred near-black background) that slides down from behind the header on a hamburger toggle; the header itself gains a permanent blurred backdrop while the sheet is open so it never looks transparent mid-interaction.
- The header is transparent over the hero and gains a blurred, semi-opaque backdrop (`.is-stuck`) once the page scrolls, via a hairline bottom border.

### Myth Note (signature component)
A bordered, graphite-panel callout used only on project pages whose name is a Greek myth figure (Argus, Orion, Iris, Proteus, Tyche): a landmark/temple icon, a Signal-Red-Bright uppercase "the name, in myth" label, and one explanatory paragraph in Fog Muted. Same visual family as the fact-list, repurposed for a narrative aside rather than a data point.

## Do's and Don'ts

### Do:
- **Do** keep Signal Red to accents, rules, dots, gradient stops, and the single primary action per screen — never a background fill.
- **Do** ship every new string in Italian and English together; a surface that only reads correctly in one language is incomplete.
- **Do** use the pill shape for anything the visitor acts on or that reports status; use the 26px soft radius for anything that just contains content.
- **Do** let shadows answer an interaction (hover, focus, scroll, "this is the primary action") rather than sit under something at rest by default.
- **Do** keep labels/eyebrows uppercase and wide-tracked — they are the system's only substitute for a second typeface.

### Don't:
- **Don't** introduce a second font family for emphasis or "personality" — hierarchy is size, weight, and tracking only.
- **Don't** add a testimonial, press logo, benchmark, or case-study metric — none exist in the real content, and PRODUCT.md records that absence deliberately.
- **Don't** give a card, chip, or nav item a resting shadow; only the primary button and the hero-portrait ring are allowed to glow without being touched.
- **Don't** treat `books.html` as a normal page when designing — it is a headless Gumroad content fragment with no `<head>`, and any `<meta>` tag added to it is silently stripped on publish.
