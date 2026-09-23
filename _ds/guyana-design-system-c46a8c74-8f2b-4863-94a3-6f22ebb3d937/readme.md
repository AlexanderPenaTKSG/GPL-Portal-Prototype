# Guyana Government Portal — Design System

A **modern, flat, light-mode** design system for the **Guyana Government Portal**: a whole-of-government *unified launcher dashboard* through which citizens and government staff reach every ministry and agency from one front door. The look is **clean, confident, and highly legible** — solid surfaces, generous rounding, one vivid accent per agency, and **motion as a first-class citizen** (snappy, spring-eased micro-interactions on every control).

**Front-end target: React Native** (Generic RN + Reanimated / Tamagui). The tokens in `colors_and_type.css` are the single source of truth and map 1:1 onto a React Native theme; there is no Salesforce/SLDS/LWC dependency.

> **Status:** v3 — flat & modern rework. Foundations, tokens, preview cards, and the Unified Launcher Dashboard UI kit. See **Caveats** at the bottom.

---

## What this is

- **Audience:** Citizens (public service access) **and** internal government staff (case handling). The system scales from open, accessible public pages to denser internal screens.
- **Surface:** A unified dashboard ("all agencies") that routes users to the desired application. Each agency carries **its own accent color** — there is intentionally **no single fixed palette**; the neutral flat shell is the constant, the accent is the variable.
- **Aesthetic:** **Modern, flat, light mode** — solid white surfaces, calm blue-grey neutral ink, soft diffuse elevation, and generous radii, over a *subtle* per-agency tint. Vivid but professional accents, soft-tinted icon chips, pill controls, and expressive motion.

---

## Key decisions

| Decision | Choice |
|---|---|
| Product | Guyana Government Portal — whole-of-government unified launcher |
| Users | Citizen-facing **and** internal/staff |
| Palette | **No single palette** — per-agency accent theming (8 agencies) |
| Aesthetic | **Flat & modern** — solid surfaces, no glassmorphism |
| Motion | **Micro-interactions everywhere** — snappy, spring-eased hover/press/focus |
| Mode | **Light mode** + subtle per-agency tint |
| Front-end | **React Native** (Generic RN + Reanimated / Tamagui) |
| Typeface | **Inter** (Google Fonts) |
| Icons | **Lucide** |
| Primary deliverable | **Unified Launcher Dashboard** UI kit + layout variations |

---

## Agencies & accents

Per-agency theming via `data-agency="…"`. Override six hooks on any scope to re-skin everything: `--agency-accent`, `--agency-accent-strong`, `--agency-accent-soft`, `--agency-accent-ring`, `--agency-tint`, `--agency-contrast`.

| Agency | `data-agency` | Accent |
|---|---|---|
| Ministry of Finance (default) | `finance` | Emerald `#0f7a52` |
| Guyana Revenue Authority (GRA) | `revenue` / `gra` | Royal blue `#2563c9` |
| Home Affairs — General Register Office (GRO) | `gro` | Plum `#8a3fa8` |
| Home Affairs — Central Immigration & Passport Office | `immigration` / `passport` | Indigo navy `#3a45b0` |
| Ministry of Human Services & Social Security | `human-services` / `social` | Rose `#c2365f` |
| National Insurance Scheme (NIS) | `nis` | Teal `#0e8d8a` |
| Ministry of Housing & Water (CH&PA) | `housing` / `chpa` | Amber-terracotta `#b45f16` |
| All Ministry — Appointments (cross-government) | `appointments` | Violet `#6d4bd8` |

Accents are **vivid but professional** — saturated enough to feel modern, controlled enough to read as official and stay legible as a fill (white text) or a soft tint.

---

## Substitutions (flag for review)

- **Font — Inter via Google Fonts CDN.** A highly legible neutral UI sans; clean, contemporary, excellent at small sizes. **Action:** if you need offline / self-hosted fonts, ask and I'll vendor the `.woff2` files into `fonts/`.
- **Icons — Lucide via CDN (jsdelivr).** A clean, consistent open-source line-icon set (inline SVG, `stroke="currentColor"`). **Action:** swap for an official icon set if one is mandated.

---

## Content Fundamentals

How copy is written across the portal. Government communication must be **clear, plain, and respectful** — citizens of every literacy level must understand it on the first read.

- **Voice:** Official but human. Authoritative without being bureaucratic. Never chatty, never marketing-y.
- **Person:** Address the citizen directly as **"you."** The government refers to itself by name or as **"we"** sparingly (prefer the agency name: *"The Guyana Revenue Authority processes…"*). Avoid "I."
- **Tone:** Calm, reassuring, action-oriented. Lead with what the citizen can *do*. Example: *"Renew your driver's licence"* not *"Driver's Licence Renewal Module."*
- **Casing:** **Sentence case** for almost everything — headings, buttons, labels, menu items (*"Apply for a passport"*, not *"Apply For A Passport"*). Reserve Title Case for proper nouns and official agency names. ALL-CAPS only for tiny eyebrow/overline labels with letter-spacing.
- **Buttons & actions:** Verb-first, specific. *"Start application"*, *"Save and continue"*, *"Download receipt"* — never just *"Submit"* or *"OK"* where a specific verb fits.
- **Numbers, dates, money:** Currency in **Guyanese dollars** as `G$` or `GYD` (e.g. `G$ 12,500`). Dates as `DD Month YYYY` (e.g. `2 June 2026`) for citizen-facing copy.
- **Plain language:** Prefer short words. *"Use"* not *"utilise."* Explain any unavoidable official term inline.
- **Emoji:** **Never.** Status and meaning come from icons, color, and clear words.
- **Errors & empty states:** Be specific and reassuring — say what happened, why, and the next step.

**Vibe in one line:** *Trustworthy, plain-spoken, and modern — official enough to be authoritative, clear and lively enough to feel current.*

---

## Visual Foundations

The complete look-and-feel rulebook. When in doubt, defer to `colors_and_type.css` — it is the source of truth for every token named below.

### Color
- **No single brand palette.** A neutral, slightly-blue-grey institutional **ink + paper** scale (`--neutral-*`) is the constant. Each agency owns an **accent** injected through the `--agency-*` hooks (see the table above). Default theme is **Finance emerald**.
- **Semantic status** colors (success/warning/error/info) are agency-independent and live in their own tokens, each with a soft translucent background pair.

### Type
- **Inter** throughout (400/500/600/700/800). Display/hero in **800**, headings **700**, subheads **600**, body **400–500**.
- Type scale runs `--text-2xs` (13px) → `--text-4xl` (64px). **Body is 17px**. Sizes are in px so design-tool exports read as clean pixel values. Semantic roles: `.ds-display .ds-h1 .ds-h2 .ds-h3 .ds-lead .ds-body .ds-small .ds-caption .ds-eyebrow .ds-mono`.

### Spacing & layout
- **4px base grid** (`--space-1` … `--space-24`). Generous breathing room.
- Layouts are centered with comfortable margins, max content widths, and clear z-layering: canvas → nav/rails → content panels → cards.

### Surfaces (flat & solid — glassmorphism removed)
- Surfaces are **opaque** — solid white (`--surface-1`) cards and panels, `--surface-2`/`--surface-4` for insets and chips. No backdrop blur, no frosted sheen. (The legacy `--glass-*` names are kept as aliases that now resolve to solid fills; prefer `--surface-*` in new work.)
- Each surface gets a **calm neutral hairline** border (`--surface-border`) and a **soft diffuse ambient shadow**. Definition comes from the hairline + shadow, not translucency.

### Elevation & shadows
- **Soft, diffuse, never hard.** Five ambient steps (`--shadow-xs … --shadow-xl`), low-opacity blue-black, multi-layered. Cards sit flat at rest and **lift on interaction**. `--shadow-accent` gives an accent-tinted glow for active accent surfaces.

### Corner radii
- Soft and modern. `--radius-md` (12px) for inputs/chips, `--radius-lg` (16px) for cards, `--radius-xl`/`--radius-2xl` (20–28px) for large panels and launcher tiles, `--radius-pill` for buttons/badges/toggles.

### Cards & tiles
- A card = solid surface + `--radius-lg`/`--radius-xl` + soft shadow. **No** solid colored left-border accent stripes. Accent appears as a **soft tint wash**, a small **accent icon chip**, or a **thin accent underline**.
- Add `.interactive` to lift a card on hover; add `.press` to any pressable control.

### Motion — a first-class citizen
- **Snappy, spring-eased micro-interactions on every control.** Easings: `--ease-out` (moves), `--ease-spring` (selection/press pops with overshoot), `--ease-emphasis` (entrances). Durations: `--dur-snap` (120ms), `--dur-fast` (180ms), `--dur-base` (260ms), `--dur-slow` (420ms).
- Ready-made recipes: `--tr-control` (buttons/toggles/inputs) and `--tr-surface` (cards/panels). Utility classes `.interactive`, `.press`, `.focus-ring` wire the standard hover-lift / press-scale / animated focus behaviors.
- Hover = lift (`translateY(-3px)`) + shadow deepen. Press = scale-down pop. **No spins, no infinite decorative loops.**
- Respect `prefers-reduced-motion` — the token layer disables lifts/animation when set.

### States
- **Hover:** lift + shadow deepen; links/icons darken toward `--agency-accent-strong`.
- **Press/active:** scale-down pop (~0.96) + color deepens to `--agency-accent-strong`.
- **Focus:** a 3px `--agency-accent-ring` glow, always visible for keyboard accessibility — never removed (use `.focus-ring`).
- **Disabled:** drop to `--fg-4`, reduce opacity.
- **Selected:** `--agency-accent-soft` fill + accent text/icon.

---

## Iconography

- **Set:** **Lucide** (CDN: `cdn.jsdelivr.net/npm/lucide`). Rendered as **inline SVG** — in static HTML via `<i data-lucide="{name}"></i>` + `lucide.createIcons()`; in React/React Native via an `Icon` component. SVGs inherit color from `currentColor` and take a configurable stroke width.
- **Usage rules:**
  - Default **stroke width 2** (1.75 acceptable for large icons) and a consistent weight across a screen.
  - Service/agency tiles use a single representative line icon inside an **accent-tinted chip**.
  - Status badges may use the filled-style status glyphs (`circle-check`, `triangle-alert`, `circle-x`, `clock`) colored by the semantic token.
  - Icon size steps: 16 / 20 / 24 / 32 / 48px. Always pair an icon with a text label in navigation and tiles (accessibility).
- **Emoji:** never used. The Guyana coat-of-arms / national mark, when supplied, should live in `assets/` and be used only as an official seal, not as a UI icon.

---

## Components

32 React primitives live under `components/<group>/` — each one is a `<Name>.jsx` with a sibling `<Name>.d.ts` (props contract) and `<Name>.prompt.md` (what & when). They are self-contained: React only, all styling through the CSS custom properties in `colors_and_type.css`, no CSS-in-JS and no npm dependencies. Every group has a `*.card.html` preview registered in the Design System tab.

| Group | Components |
|---|---|
| `components/core/` | **Icon**, **Button**, **IconButton**, **Chip**, **Badge**, **Card**, **Avatar**, **Tile** |
| `components/forms/` | **FieldLabel**, **Input**, **Textarea**, **Select**, **Checkbox**, **Radio**, **Toggle**, **SearchField** |
| `components/feedback/` | **Alert**, **Banner**, **Toast**, **Tooltip**, **Progress**, **Modal** |
| `components/navigation/` | **TopBar**, **Tabs**, **Breadcrumb**, **Stepper**, **Pagination**, **VerticalNav** |
| `components/data-display/` | **DataTable**, **ScoreBar**, **Timeline**, **Accordion** |

Every component reads the `--agency-*` hooks, so wrapping any subtree in `data-agency="revenue"` re-skins it.

### Intentional additions

The source specimen set is HTML-only, so the React inventory is a 1:1 translation of the specimen cards with three pragmatic additions:

- **Icon** — a thin Lucide wrapper, so no screen hand-rolls SVG.
- **FieldLabel** — pulls the label / required marker / hint / error line out of every form control instead of repeating it.
- **Tile** — promotes the launcher tile (the portal's defining element, present in the UI kit and the Experience Cloud card) to a primitive.

Specimen cards with no React counterpart yet (combobox, dueling picklist, tree grid, rich text editor, date picker, file selection, record panel, path, charts) remain HTML-only — see Caveats.

---

## Index / file manifest

Root files:
- **`README.md`** — this file.
- **`colors_and_type.css`** — the single source of truth for all tokens: type scale, neutral palette, **flat surface system**, elevation, radii, spacing, **motion + micro-interaction utilities**, status colors, and the **per-agency theme hooks**. Includes `.ds-*` text roles and the `.surface`/`.interactive`/`.press`/`.focus-ring` utilities.
- **`styles.css`** — the root entry point; `@import`s `colors_and_type.css`.
- **`SKILL.md`** — Agent-Skill manifest.

Folders:
- **`fonts/`** — (reserved) self-hosted Inter `.woff2` if/when vendored. Currently CDN-linked.
- **`assets/`** — (reserved) logos, agency marks, the national coat-of-arms, imagery, when supplied.
- **`preview/`** — HTML specimen cards that populate the **Design System** tab (colors, type, spacing, components).
- **`standalone/`** — self-contained export copies of each specimen card.
- **`ui_kits/launcher-dashboard/`** — the **Unified Launcher Dashboard** UI kit: `index.html` prototype + `*.jsx` components.
- **`figma/`** — Figma-import package: `tokens.json`, page boards, and `IMPORT-GUIDE.md`.
- **`components/`** — the React primitives (see the Components table above), grouped `core` / `forms` / `feedback` / `navigation` / `data-display`.
- **`assets/`** — `gog-seal.webp` (Government of Guyana seal, supplied by the user) and `GOG-Logo.webp`.
- **`templates/`** — starting folders a consuming project can copy: `agency-service-page/`.

---

## Caveats

- Agency colors and structure are informed choices for Guyana's ministries/agencies, **not** confirmed official brand colors — review against any real brand standards.
- **Inter** and **Lucide** are substitutions pending official font/icon direction.
- A **formal WCAG AA audit** is recommended before production, especially for citizen-facing forms and agency accent fills.
- Only the supplied **Government of Guyana seal** (`assets/gog-seal.webp`, `assets/GOG-Logo.webp`) is included. No per-agency marks exist yet; wherever one would go, the agency name is set in plain type. Nothing here was drawn or approximated.
- Nine specimen cards (combobox, dueling picklist, tree grid, rich text editor, date picker, file selection, record panel, path, charts) are documented as HTML but **not yet built as React components**.
