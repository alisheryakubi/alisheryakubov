# alisheryakubov.com Design System

A reusable design system package extracted from the live alisheryakubov.com personal brand website — a minimal, editorial site for a hospitality marketing professional based in the UAE.

## Product overview

**Source product**: alisheryakubov.com — a personal brand website for Alisher Yakubov, a Cluster Assistant Marketing Communications Manager at Fujairah Rotana Resort &amp; Spa and Nour Arjaan by Rotana in the United Arab Emirates.

**Primary surfaces**: 8 pages — Home, About, Experience, Projects, News, Articles, Gallery, Contact. Built with vanilla HTML/CSS/JS (no frameworks, no build tooling).

**Core capabilities**: Professional biography, work experience, project showcase, article publishing, news timeline, event gallery, contact — with AI-assisted workflow experimentation as a secondary theme.

**Visual language**: Apple + Notion + Google + Stripe direction — cool near-white canvas, dark navy accent, Source Serif 4 display + Inter body, hairline borders, no card shadows by default, CSS-only interactions.

## Package contents

| Path | Description |
|---|---|
| `DESIGN.md` | Full design system spec — product context, tokens, components, motion, voice, anti-patterns |
| `SKILL.md` | Claude-style skill with YAML frontmatter, workflow guide, component reference, content rules |
| `colors_and_type.css` | Copy-paste `:root` tokens (OKLch + hex fallbacks) + base reset + all component CSS |
| `context/source-context.md` | Source project handoff metadata (read-only) |
| `context/provenance.md` | Evidence extraction notes from all inspected source files |
| `preview/` | 11 focused review cards + index manifest |
| `ui_kits/app/` | 13 standalone component HTML files + launcher index + README |
| `assets/` | Preserved source assets: portrait, 8 OG images, 12 gallery thumbnails |
| `styles.css` | Original source stylesheet (preserved, 14 KB) |
| `search.js` | Original source search JS (preserved, 8 KB) |
| `*.html` | Original source pages (preserved as working examples) |

## Source/context references

- Source project id: `66630661-25ec-4a00-be98-361287d56e98`
- `context/source-context.md` — handoff metadata from source extraction
- `context/provenance.md` — evidence notes: which source files were inspected, what tokens/patterns were extracted from each
- `styles.css` — the original 867-line stylesheet from which all tokens were derived
- `search.js` — the original search overlay implementation (8 KB)

## Preview cards

Generated preview cards in `preview/`:

| File | Focus |
|---|---|
| `preview/index.html` | Manifest linking all preview cards |
| `preview/colors-primary.html` | Primary palette swatches with OKLch + hex values |
| `preview/colors.html` | Full palette overview |
| `preview/typography-specimens.html` | Type scale specimens |
| `preview/typography.html` | Full type scale with sizes, weights, tracking |
| `preview/spacing-tokens.html` | Spacing tokens with visual bars |
| `preview/spacing.html` | Spacing, breakpoints, layout grid demos |
| `preview/radius-shadows.html` | 4 radius levels + 2 shadow levels |
| `preview/components-buttons.html` | Button variants (primary, secondary, on-accent) |
| `preview/components.html` | Buttons, cards, tags, expertise cards, blockquote, lists, tables |
| `preview/brand-assets.html` | Logo, portrait, OG images, gallery thumbnails |
| `preview/applied-ui.html` | Composed page surface (header + hero + split + card grid + CTA + footer) |

## Preserved assets, fonts, and build artifacts

- `assets/alisher-yakubov.jpg` — Professional portrait (4.5 MB, 4:5 aspect, used in hero)
- `assets/og-*.jpg` — 8 Open Graph images (one per page, 1.91:1 ratio, 43–48 KB each)
- `assets/gallery/*.jpg` — 12 gallery images (events, conferences, networking, speaking, awards, behind-the-scenes)
- **Fonts**: Google Fonts (Source Serif 4 + Inter) loaded via CDN — no local font files. SF Mono / Menlo used as system mono stack.
- **Build artifacts**: No build tooling — vanilla HTML/CSS/JS. `styles.css` (14 KB) and `search.js` (8 KB) are the original source assets, preserved in place.

## UI Kit (`ui_kits/app/`)

Applied component kit with 13 standalone HTML files:

| File | Component |
|---|---|
| `index.html` | Launcher — links to all component files |
| `README.md` | Kit overview, component index, usage workflow, source basis |
| `header.html` | Sticky frosted-glass nav with CSS-only hamburger |
| `hero.html` | Eyebrow + H1 + lead + buttons + portrait |
| `section-split.html` | Two-column editorial layout |
| `card-grid.html` | Card grids (2, 3, 4 columns) |
| `expertise-card.html` | Icon spot + title + description |
| `blog-card.html` | Link card with hover states |
| `news-feed.html` | Timeline: date + body grid |
| `gallery.html` | Square image grid with hover scale |
| `cta-section.html` | Accent background, inverted buttons |
| `footer.html` | 4-column footer |
| `buttons.html` | Primary, secondary, on-accent variants |
| `tags.html` | Pill chips |
| `search-overlay.html` | Vanilla JS search overlay (/ or Cmd+K) |

## Design tokens

### Colors (OKLch with hex fallback)
| Token | OKLch | Hex | Usage |
|---|---|---|---|
| `--bg` | `oklch(99.2% 0.003 260)` | `#fcfcfd` | Page background |
| `--surface` | `oklch(97.5% 0.005 260)` | `#f6f7f9` | Cards, subtle bands |
| `--surface-2` | `oklch(94% 0.008 260)` | `#ebedf2` | Hover, dividers |
| `--fg` | `oklch(17% 0.02 260)` | `#2a2d33` | Primary text |
| `--muted` | `oklch(48% 0.03 260)` | `#6b7280` | Secondary text |
| `--border` | `oklch(85% 0.02 260)` | `#d4d7dd` | Hairlines |
| `--accent` | `oklch(30% 0.09 255)` | `#1e3a5f` | Navy — buttons, links, CTA |
| `--accent-hover` | `oklch(24% 0.08 255)` | `#16314d` | Button hover |
| `--accent-text` | `oklch(99% 0.005 260)` | `#fcfdfe` | Text on accent |
| `--accent-soft` | `oklch(96% 0.02 255)` | `#eef2f6` | Tinted surfaces |

### Typography
- **Display**: Source Serif 4 (headings H1–H4, blockquote, logo)
- **Body**: Inter (paragraphs, UI, buttons, nav) — body weight 450
- **Mono**: SF Mono / Menlo (dates, credentials — rare)

### Spacing
- Page max-width: 1200px
- Section padding: `clamp(72px, 10vw, 140px)`
- Split gap: `clamp(24px, 4vw, 48px)`
- Card padding: 28px
- Radius: 12px (cards), 8px (buttons/inputs), 999px (tags)

## Reuse and review workflow

1. **Read `DESIGN.md`** for the full spec — product context, tokens, components, motion, voice, anti-patterns.
2. **Read `SKILL.md`** for the workflow guide — how to build a page, token binding rules, content rules, component reference.
3. **Open `preview/index.html`** to inspect all tokens and component patterns in focused review cards.
4. **Open `ui_kits/app/index.html`** to browse standalone component implementations with live tokens.
5. **Copy `colors_and_type.css`** `:root` block into your page's first `<style>`, or link the file.
6. **Include the Google Fonts link** in `<head>`:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap" rel="stylesheet">
   ```
7. **Reference `context/provenance.md`** to verify which source files informed each token and pattern.

## Source

Extracted from source project "Alisher Yakubov" (id: `66630661-25ec-4a00-be98-361287d56e98`). See `context/provenance.md` for extraction notes.