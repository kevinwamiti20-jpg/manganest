---
name: MangaNest
description: Cinematic manga discovery with fast, task-focused navigation.
colors:
  panel-ink: "#0d141d"
  deep-shelf: "#151c25"
  stack-shadow: "#232a34"
  frame-steel: "#2e353f"
  paper-moon: "#dce3f0"
  quiet-caption: "#9ca6b8"
  moonglass-lilac: "#d0bcff"
  arc-light-violet: "#a078ff"
  ember-note: "#ffb3ad"
  aurora-cyan: "#2fd9f4"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, Inter, sans-serif"
    fontSize: "clamp(1.875rem, 6vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Plus Jakarta Sans, Inter, sans-serif"
    fontSize: "clamp(1.5rem, 3.2vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.08em"
rounded:
  card: "16px"
  soft: "12px"
  menu: "12.8px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  section: "48px"
components:
  button-primary:
    backgroundColor: "{colors.moonglass-lilac}"
    textColor: "#23113d"
    rounded: "{rounded.pill}"
    padding: "9.6px 16px"
  button-primary-hover:
    backgroundColor: "{colors.moonglass-lilac}"
    textColor: "#23113d"
  button-ghost:
    backgroundColor: "rgba(255,255,255,0.03)"
    textColor: "{colors.paper-moon}"
    rounded: "{rounded.pill}"
    padding: "8.8px 15.2px"
  nav-link-active:
    backgroundColor: "rgba(208,188,255,0.15)"
    textColor: "{colors.moonglass-lilac}"
    rounded: "{rounded.soft}"
    padding: "10px 12px"
  card-surface:
    backgroundColor: "{colors.deep-shelf}"
    textColor: "{colors.paper-moon}"
    rounded: "{rounded.card}"
    padding: "16px"
---

# Design System: MangaNest

## 1. Overview

**Creative North Star: "Midnight Manga Theater"**

MangaNest should feel like entering a late-night screening room for serialized stories, cinematic in atmosphere but efficient in interaction. The visual language favors dark layered surfaces, luminous accent moments, and clear reading hierarchy so users can make quick decisions without losing immersion.

This is a product-first system, and clarity wins whenever style and speed conflict. Navigation, cards, chips, and reading controls should remain predictable and reusable across pages, while motion and highlights provide orientation rather than spectacle.

The system explicitly rejects decorative frosted UI and generic enterprise dashboard language. It should feel curated and story-forward, never corporate and never glassy for its own sake.

**Key Characteristics:**
- Cinematic, low-light surfaces with restrained luminous accents.
- Strong content hierarchy with short decision loops.
- Consistent component vocabulary across discovery, detail, and reader surfaces.
- Interaction cues that preserve orientation between routes and sections.

## 2. Colors

The palette is a night-tuned neutral stack with one luminous lilac accent and two secondary sparks for context highlights.

### Primary

- **Moonglass Lilac** (`#d0bcff`): Primary action color for CTA buttons, current navigation state, and high-value interaction targets.
- **Arc-light Violet** (`#a078ff`): Focus and emphasis companion color for outlines, active hints, and accent-strong moments.

### Secondary

- **Ember Note** (`#ffb3ad`): Warm contrast accent reserved for occasional metadata accents and emotional counterpoints.

### Tertiary

- **Aurora Cyan** (`#2fd9f4`): Cool signal accent used for ongoing status tones, atmospheric glows, and selective supportive highlights.

### Neutral

- **Panel Ink** (`#0d141d`): Primary app backdrop and deepest surface anchor.
- **Deep Shelf** (`#151c25`): Primary card and panel background.
- **Stack Shadow** (`#232a34`): Elevated secondary surface and chip/container fill.
- **Frame Steel** (`#2e353f`): Structural neutral for deeper layer transitions and subtle framing.
- **Paper Moon** (`#dce3f0`): Main text color for high readability on dark surfaces.
- **Quiet Caption** (`#9ca6b8`): Secondary text, labels, and low-priority metadata.

**The Focused Accent Rule.** The lilac primary should stay purpose-driven, and tied to current state, primary action, and explicit interaction feedback instead of broad decorative fills.

## 3. Typography

**Display Font:** Plus Jakarta Sans (fallback: Inter, sans-serif)
**Body Font:** Inter (fallback: sans-serif)
**Label Font:** Inter (fallback: sans-serif)

**Character:** The typography combines cinematic headlines with practical UI legibility. Display moments are compact and assertive, while body and labels prioritize scan speed and reading comfort.

### Hierarchy

- **Display** (800, `clamp(1.875rem, 6vw, 3.75rem)`, 1.1): Hero titles and key story-led landing moments.
- **Headline** (700, `clamp(1.5rem, 3.2vw, 2rem)`, 1.2): Section headings and major content blocks.
- **Title** (600-700, `1rem-1.125rem`, 1.3): Card titles and list-item anchors.
- **Body** (400, `1rem`, 1.6): Descriptions and primary paragraph content, ideally capped near 65-75ch for long-form text.
- **Label** (600, `0.75rem`, letter-spacing `0.08em`): Status, pills, and micro UI context.

**The Two-Lens Rule.** One typographic lens for story emphasis (display/headline), one for operational speed (title/body/label), and do not blur their roles.

## 4. Elevation

MangaNest uses layered ambient lift: tonal surface stacking is the default depth system, with shadows reinforcing interactive affordance on cards and floating containers. Depth should read as calm atmospheric separation, not aggressive levitation.

### Shadow Vocabulary

- **Surface Lift** (`0 16px 32px rgb(0 0 0 / 0.28)`): Default card elevation for featured content containers.
- **Surface Lift Hover** (`0 20px 34px rgb(0 0 0 / 0.34)`): Hover-state lift for card interactivity.
- **Backdrop Scrim** (`rgba(0, 0, 0, 0.60)`): Drawer/modal backdrop depth for mobile navigation and temporary overlays.

**The State-Lift Rule.** Elevation increases should communicate interactivity and focus transition, not idle decoration.

## 5. Components

Component posture is **confident and cinematic**: soft geometry, clear active states, and deliberate contrast between action controls and surrounding surfaces.

### Buttons

- **Shape:** Pill-forward (`999px`) for primary and ghost actions.
- **Primary:** Lilac fill with deep text (`#23113d`), medium-weight copy, compact CTA padding.
- **Hover / Focus:** Slight lift and brightness change on hover; strong violet focus outline via global focus-visible treatment.
- **Ghost:** Transparent/low-opacity fill with subtle border and stronger border tint on hover.

### Chips

- **Style:** Rounded-full chips with neutral dark fill (`surface-2`) and muted text.
- **State:** Status pills use semantic color tints (cyan/emerald/amber) while preserving compact rounded geometry.

### Cards / Containers

- **Corner Style:** Soft-large radius (`16px`) with clipping for media-heavy cards.
- **Background:** Dark gradient or layered neutral panel treatment.
- **Shadow Strategy:** Ambient lift at rest, stronger lift on hover.
- **Border:** Thin translucent border for low-contrast edge definition.
- **Internal Padding:** Commonly `16px`, with denser metadata regions in list cards.

### Inputs / Fields

- **Style:** Rounded pill search fields on nav surfaces with low-contrast border and translucent panel fill.
- **Focus:** Border and focus-visible ring are primary indicators; avoid heavy glow effects.
- **Error / Disabled:** Keep tonal contrast strategy consistent with muted text and border-state differentiation.

### Navigation

- **Primary nav:** Inline top links with underline reveal for hover/current state.
- **Drawer nav:** Row links with horizontal movement and lilac-tinted active background.
- **Mobile treatment:** Slide-in drawer with scrim backdrop and explicit open/close controls.

## 6. Do's and Don'ts

### Do:

- **Do** keep primary actions in `#d0bcff` and reserve this accent for current state and explicit action targets.
- **Do** maintain dark layered neutrals (`#0d141d`, `#151c25`, `#232a34`) to preserve cinematic atmosphere without sacrificing readability.
- **Do** use consistent rounded geometry (`16px` cards, `999px` actions/chips) so components feel systemized.
- **Do** keep transitions concise and purposeful, especially for navigation and state changes.

### Don't:

- **Don't** use glassmorphism-heavy cards and over-decorated frosted UI patterns.
- **Don't** use generic SaaS dashboard aesthetics that flatten personality or make manga discovery feel corporate.
- **Don't** over-apply accent colors to passive UI surfaces, accent saturation should signal intent.
- **Don't** introduce decorative motion that does not improve orientation, feedback, or hierarchy.
