---
name: Marco Lombardo
description: A working star chart of real shipped projects, plotted on a deep-space ground with Signal Red kept rare.
colors:
  signal-red: "#e8112d"
  signal-red-bright: "#ff2237"
  signal-red-deep: "#b00b21"
  ink: "#07080d"
  ink-2: "#0b0d15"
  panel: "#10121b"
  panel-2: "#161927"
  starlight-text: "#f2f3fa"
  muted: "#a3a6bd"
  dim: "#7a7d95"
  hairline: "rgba(210, 216, 255, 0.1)"
  hairline-strong: "rgba(210, 216, 255, 0.2)"
  star-flagship: "#ff2237"
  star-stable: "#e7e9ff"
typography:
  display:
    fontFamily: "Space Grotesk, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2.4rem, 5.4vw, 3.6rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Space Grotesk, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.9rem, 3.8vw, 2.7rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "-0.01em"
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace"
    fontSize: "11.5px"
    fontWeight: 600
    letterSpacing: "0.08em"
rounded:
  none: "0px"
  hairline-tick: "0px (corner ticks only, see Shapes)"
  circular: "50%"
spacing:
  xs: "8px"
  sm: "14px"
  md: "24px"
  lg: "52px"
  xl: "104px"
components:
  button-primary:
    backgroundColor: "{colors.signal-red}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "13px 22px"
  button-primary-hover:
    backgroundColor: "{colors.signal-red-deep}"
  button-ghost:
    backgroundColor: "rgba(210, 216, 255, 0.04)"
    textColor: "{colors.starlight-text}"
    rounded: "{rounded.none}"
    padding: "13px 22px"
  button-ghost-hover:
    backgroundColor: "rgba(210, 216, 255, 0.09)"
  catalog-row:
    backgroundColor: "transparent"
    textColor: "{colors.starlight-text}"
    padding: "24px 6px"
  catalog-row-hover:
    backgroundColor: "{colors.panel}"
---

# Design System: Marco Lombardo

## Overview

**Creative North Star: "The Working Sky"**

The site reads as a personal star chart, not a portfolio grid: real shipped work — two startups, six open-source desktop tools, one client site, one publishing shop — is plotted as catalogued celestial bodies on a hairline coordinate grid over a deep space-black ground, instead of stacked into equal-sized cards. Signal Red (#e8112d and its brighter/deeper steps) is the chart's magnitude marker: it is reserved for exactly the two flagship bodies (the two startups, Repetita and Okkupa) plus the primary call-to-action and the hero-portrait ring, and appears nowhere else as a fill color. Every other project — the six tools, the client site, the books shop — renders in a cool, dim "stable" starlight-white (#e7e9ff), so rarity of red is structural, not incidental.

Panels are cartouches: gradient-filled rectangular blocks with a small L-shaped corner-tick bracket (`.ticked`) at two opposite corners, standing in for the rounded-card idiom this category defaults to. Three type families do distinct jobs — Space Grotesk carries display/heading weight, IBM Plex Mono carries every coordinate, catalog tag, and label, Inter carries body copy — and headings lead their sections directly; nothing sits above an H1 as a kicker or eyebrow anywhere in the build.

**Key Characteristics:**
- Deep space-black/indigo ground with a faint scattered-star texture behind all content, not a flat "dark mode" fill.
- Signal Red rationed to exactly two flagship data-points, the CTA, and the portrait ring — everything else in the chart is cool starlight-white.
- Corner-tick cartouche frames replace rounded cards and pill shapes site-wide.
- Real hand-authored coordinates (`--x`/`--y`) plot actual shipped projects — never decorative filler points.
- No kicker/eyebrow above any heading; catalog/byline metadata follows a heading, never precedes it.

## Colors

Cool, near-black space tones dominate; the one warm color is red, and it is deliberately scarce.

### Primary
- **Signal Red** (#e8112d): the primary CTA fill (`.btn-primary`), the hero-portrait ring/shadow, `::selection`, focus outlines, and the flagship star-glow filter. Its brighter step, **Signal Red Bright** (#ff2237), is the actual flagship star-dot fill, the hero headline's gradient, nav-link underlines, section-tag rules, and every mono label/tag color (catalog tags, coordinates, "go" arrows). **Signal Red Deep** (#b00b21) is the `:hover` state of the primary button only.

### Neutral
- **Void Ink** (#07080d): the page's base background, under a faint radial scattered-star texture.
- **Ink Layer Two** (#0b0d15): the marquee band and alternating-section wash.
- **Panel** (#10121b) / **Panel Two** (#161927): cartouche and card fills, a two-step gradient from `panel-2` to `panel` top-to-bottom; `panel-2` is also the hover state for cards, catalog rows, and fact-list items.
- **Starlight Text** (#f2f3fa): primary text color.
- **Muted** (#a3a6bd): secondary copy (leads, card body text).
- **Dim** (#7a7d95): tertiary/least-emphasis text (cluster labels, footer copy).
- **Hairline** (rgba(210,216,255,0.1)) / **Hairline Strong** (rgba(210,216,255,0.2)): every border in the system — cartouche outlines, catalog-row dividers, the chart's own coordinate grid lines.
- **Star Stable** (#e7e9ff): the fill for every non-flagship star-dot in the chart (six tools, client site, shop) — this is the "everything else" color the rare-red rule exists to protect.

### Named Rules
**The Rare Signal Rule.** Signal Red (in any of its three steps) marks exactly the two flagship project-points, the primary CTA, and the hero-portrait ring — nothing else. Every other project renders in Star Stable off-white. If a new element wants red for emphasis alone, that is the rule failing, not a new use case.

## Typography

**Display Font:** Space Grotesk (self-hosted woff2, weights 500/700), with Inter as fallback
**Body Font:** Inter (system stack fallback), carried over from the prior system for continuity
**Label/Mono Font:** IBM Plex Mono (self-hosted woff2, weights 400/600)

**Character:** A technical-but-warm pairing — Space Grotesk's geometric display weight gives headings a chart-title authority, IBM Plex Mono gives every coordinate and catalog tag the feel of instrument-panel data, and Inter keeps body paragraphs plainly readable underneath both.

### Hierarchy
- **Display** (700, `clamp(2.4rem, 5.4vw, 3.6rem)`, line-height 1.08): the hero H1 only, inside the identity cartouche; its second line is Signal-Red-gradient text (`linear-gradient(100deg, #ff2237, #e8112d 45%, #ff8f9b)`, clipped to text).
- **Headline** (700, `clamp(1.9rem, 3.8vw, 2.7rem)`, line-height 1.08): section H2s (About, Focus, Approach, Elsewhere, the sky chart intro, Contact) and project-detail H1s inside their cartouche — always leading the section, never preceded by a kicker.
- **Body** (400, 17px, line-height 1.65, max ~65–75ch): all paragraph copy; letter-spacing -0.01em site-wide.
- **Label** (600, 11–12.5px, letter-spacing 0.06–0.18em, uppercase where noted): catalog tags (`F-01`, `TL-06`), coordinate rows, section labels, nav, cluster labels, sky-legend text. Always IBM Plex Mono.

### Named Rules
**The No-Kicker Rule.** No heading anywhere in the build is preceded by an all-caps label line above it. Metadata (catalog code, coordinate row, project type) is placed directly below an H1/H2, never above it.

## Layout

Content sits inside a `.wrap` container capped at 1220px, with 24px inline padding (20px under 980px). Sections use a consistent vertical rhythm of 104px top/bottom padding (72px under 980px). The homepage is a single-page scroll through fixed sections (hero, marquee, about, focus, approach, elsewhere, the sky chart, contact) anchored by in-page nav links; project detail pages are separate generated pages sharing the same header/footer chrome.

The hero is a full-bleed composition, not a 50/50 split: a decorative preview star chart (`.sky-preview`) fills the entire hero as an absolutely-positioned background layer, masked with a left-to-right gradient so it fades in from the left and resolves at full opacity behind the identity cartouche, which sits as a corner-anchored overlay (`.hero-copy .cartouche`, max-width 460px) rather than a competing half-width column. Below 980px the preview chart drops to a static 150px-tall band below the copy instead of filling the frame.

The signature interactive chart (`.sky`) is a fixed-aspect (16/7.4) bordered panel with projects positioned by hand-authored CSS custom properties (`--x`, `--y` as percentages, `--r` as dot radius), grouped into three labeled clusters (Startup, Tool, Sito & materiale). Below 780px it is replaced outright by `.sky-index`, a grouped list reading the same data in DOM order — a designed alternate state, not hidden overflow.

## Elevation & Depth

Flat by default: cartouches, cards, and catalog rows carry no resting shadow, only a background gradient or flat fill and hairline borders. Depth appears only for two floating/interactive states: the star chart's hover info card (`.star-card`, `box-shadow: 0 24px 60px rgba(0,0,0,0.6)`) and the hero portrait ring / primary button, which carry a colored glow rather than a neutral drop shadow.

### Shadow Vocabulary
- **Ambient panel lift** (`box-shadow: 0 24px 60px rgba(0, 0, 0, 0.6)`, token `--shadow`): used only on the `.star-card` popover and the hero-portrait inset ring — floating elements that need to read above the chart.
- **Signal glow** (`box-shadow: 0 0 0 1px rgba(232,17,45,0.5), 0 0 32px rgba(232,17,45,0.45)`, token `--shadow-red`): the primary button's resting shadow — the one place a shadow itself carries the accent color.

### Named Rules
**The Flat-Chart Rule.** Surfaces are flat at rest; a shadow only appears on something that must visually float above the coordinate grid (a hover card) or that needs to announce itself as the rare-red interactive element (the primary CTA).

## Shapes

No rounded pills or cards anywhere in the build. The signature device is the corner tick (`.ticked`): a 1px hairline-strong border around a panel, with two 10px L-shaped brackets in Signal Red Bright at two opposite corners (top-left and bottom-right) standing in for a card's rounded corners. Radius is otherwise near-zero (`--radius: 3px`, `--radius-lg: 4px`, used only on small incidental UI like the focus-outline corners) and is reserved entirely for two things: the circular portrait treatment (hero inset and its fallback) and the chart's circular star-dots/legend-dots. Borders throughout are 1px hairlines (`--line` / `--line-strong`); catalog rows, fact-list items, and card grids use a shared 1px background as the divider between cells instead of individual borders or gaps.

## Components

### Buttons
- **Shape:** rectangular, no radius (0px); a 1px transparent or hairline-strong border depending on variant.
- **Primary:** Signal Red fill (#e8112d), white text, Space Grotesk 700 15px label, 13px/22px padding, resting Signal Glow shadow.
- **Hover / Focus:** primary lifts 2px (`translateY(-2px)`) and deepens to Signal Red Deep (#b00b21); focus-visible everywhere gets a 2px Signal Red Bright outline, 3px offset.
- **Ghost:** hairline-strong border, translucent starlight fill (rgba(210,216,255,0.04)), same lift-on-hover behavior, border brightening to hairline-strong at higher opacity.

### Cards / Containers
- **Corner Style:** none (0px radius) — corner ticks on cartouches only; plain rectangles on `.card` / `.link-card`.
- **Background:** Panel (#10121b), Panel Two (#161927) on hover.
- **Shadow Strategy:** flat at rest (see Elevation & Depth); no card carries a resting shadow.
- **Border:** cards in a grid (`.cards`, `.principles`) share a 1px hairline background as their inter-cell divider rather than individual borders.
- **Internal Padding:** 30px/26px (cards), 34px/32px (cartouches).

### Catalog List (signature)
The bordered index-row component (`.catalog-list` / `.catalog-row` / `.catalog-mark` / `.catalog-tag`) that replaced a same-size icon/heading/text card grid for the Focus, Approach, and Elsewhere sections — a chart-index reading, not a feature grid. Each row: a mono catalog tag (`F-01`, `R-03`) in Signal Red Bright, an optional 40×40px square icon mark with a hairline border, and body copy; rows are separated by 1px hairline dividers and highlight to Panel on hover.

### Navigation
Fixed header, transparent until scrolled (`.is-stuck` adds a blurred dark background and hairline bottom border). Nav links are Inter 600 14.5px, muted by default, brightening to Starlight Text on hover/active with a Signal-Red-Bright underline that scales in from the left. The language switch is two square mono tabs sharing a hairline border, not a pill toggle; the active language gets a solid Signal Red fill.

### The Sky Chart (signature)
The site's defining component: an interactive project chart (`.sky`) plotting every real shipped project at hand-authored `--x`/`--y` coordinates inside a bordered, hairline-gridded panel, grouped into three clustered/labeled categories. Each project is a `.star`: a circular `.star-dot` (radius set per-project via `--r`, flagship dots larger and red-glowing, stable dots plain starlight-white) plus a mono tag, revealing a `.star-card` detail popover on hover/focus. Below 780px the whole chart is replaced by `.sky-index`, a fully accessible grouped list reading the identical project data — not a fallback afterthought but a designed alternate state in its own right. The hero repeats this exact chart full-bleed and masked as `.sky-preview`, decorative and link-free, behind the identity cartouche.

## Do's and Don'ts

### Do:
- **Do** keep Signal Red (any of its three steps) to the two flagship star-points, the primary CTA, and the hero-portrait ring — nowhere else.
- **Do** use corner-tick cartouches (`.ticked`) for any panel that would otherwise default to a rounded card.
- **Do** put catalog/byline metadata (tag, coordinate row, category) directly below a heading, never above it.
- **Do** use IBM Plex Mono for every coordinate, tag, and label; reserve Space Grotesk for headings and Inter for body copy.
- **Do** design a real alternate state for any component that hides on narrow viewports (as `.sky-index` does for `.sky`), not just a media-query display:none.

### Don't:
- **Don't** introduce a kicker or eyebrow label above any heading — this build removed them site-wide and none should return.
- **Don't** use rounded pills, cards, or badges; the form language is rectangular hairline panels with circular treatment reserved for portraits and star-dots only.
- **Don't** add a drop shadow to a surface at rest; shadows appear only on floating/interactive elements (the star-card popover, the primary CTA's signal glow).
- **Don't** plot a decorative or placeholder point in the sky chart — every star corresponds to a real, currently shipped project with a real catalog code.
