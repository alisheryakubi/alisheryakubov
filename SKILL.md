---
name: alisheryakubov-design-system
description: Design system package for alisheryakubov.com — a minimal, editorial personal brand website for a hospitality marketing professional. Provides visual tokens, component shapes, layout patterns, and content rules extracted from the live site.
user-invocable: true
---

# alisheryakubov.com Design System Skill

## What is inside

This package contains a complete, reusable design system extracted from the live alisheryakubov.com website:

- **`colors_and_type.css`** — Copy-paste `:root` tokens (OKLch with hex fallbacks), base reset, type scale, and all component CSS (header, buttons, cards, tags, expertise cards, gallery, footer, blockquote, lists, tables, reduced motion).
- **`DESIGN.md`** — Full design system spec: product context, visual foundations, color tokens, type scale, spacing, layout, all components, motion, voice, SEO/schema, anti-patterns.
- **`preview/`** — 11 focused review cards (colors-primary, colors, typography-specimens, typography, spacing-tokens, spacing, radius-shadows, components-buttons, components, brand-assets, applied-ui) plus an index manifest.
- **`ui_kits/app/`** — 13 standalone component HTML files reflecting real source patterns, with a launcher index and README.
- **`context/`** — Source project handoff metadata (`source-context.md`, read-only) and evidence extraction notes (`provenance.md`).
- **`assets/`** — Preserved source assets: professional portrait, 8 OG images, 12 gallery thumbnails.
- **`styles.css`**, **`search.js`**, **`*.html`** — Original source files preserved as working examples.

## Source context

Extracted from source project "Alisher Yakubov" (id: `66630661-25ec-4a00-be98-361287d56e98`) — a personal brand website built with vanilla HTML/CSS/JS (no frameworks, no build tooling). The site has 8 pages: Home, About, Experience, Projects, News, Articles, Gallery, Contact. Visual language: Apple + Notion + Google + Stripe direction — cool near-white canvas, dark navy accent, Source Serif 4 display + Inter body, hairline borders, no card shadows by default, CSS-only interactions.

## When to use

Use this design system when:
- Building or editing pages for alisheryakubov.com
- Creating new pages that must match the existing visual language
- Generating components that need to use the site's token system
- Reviewing or auditing pages for visual consistency

## How to use

### Build a page

1. **Start with `colors_and_type.css`**: copy the `:root` block and base styles into the first `<style>`, or link the file directly. Include the Google Fonts link in `<head>`.
2. **Wrap content in `.container`**: `max-width: 1200px`, centered, `padding: 0 clamp(20px, 4vw, 48px)`.
3. **Use the header pattern**: sticky, frosted glass, `.logo` + CSS-only hamburger nav + search button. See `ui_kits/app/header.html`.
4. **Section rhythm**: alternate `background: var(--bg)` and `background: var(--surface)` between sections. Every section starts with `.eyebrow` + `<h2>`.
5. **Content pattern**: `.split` (eyebrow + H2 left, paragraphs/buttons right). This is the dominant layout.
6. **Cards**: `.card` (surface bg) or `.card-flat` (transparent). 1px border, 12px radius, 28px padding. No default shadow.
7. **CTA section**: `background: var(--accent)`, `color: var(--accent-text)`, inverted buttons.
8. **Footer**: 4-column grid (brand + 3 link columns), surface bg, hairline top border.
9. **Add schema**: Person (single worksFor with parentOrganization), BreadcrumbList, page-specific schema (Article, ItemList, ImageObject). No SearchAction.
10. **Add meta**: canonical URL, Open Graph, Twitter Card.

### Token binding rules

- Always use `var(--token)` — never raw hex or OKLch inline.
- One accent (navy) per screen as a fill. Eyebrows and links use it as text color.
- Surface bands create rhythm; don't add colored backgrounds beyond `--bg`, `--surface`, and `--accent` (CTA).
- Headings: `var(--font-display)`. Body/UI/buttons: `var(--font-body)`. Dates/credentials: `var(--font-mono)`.

### Content rules (enforced)

- Job title: "Cluster Assistant Marketing Communications Manager"
- Positioning: "Hospitality Marketing Professional & Digital Creator"
- Languages: list without proficiency labels
- No SEO-internal language on public pages
- No unverified claims
- worksFor: single Organization with parentOrganization
- Instagram: @alisheryakubi / Email: alisheryakubi@gmail.com / Domain: alisheryakubov.com
- Nav: Home, About, Experience, Projects, News, Articles, Gallery, Contact
- Third-person voice on biography pages

## Component reference

| Component | File | Usage |
|---|---|---|
| Header / Nav | `ui_kits/app/header.html` | Every page |
| Hero | `ui_kits/app/hero.html` | Page top — eyebrow + H1 + lead + buttons |
| Split section | `ui_kits/app/section-split.html` | Editorial two-column content |
| Card grid | `ui_kits/app/card-grid.html` | Expertise, projects, articles, values |
| Expertise card | `ui_kits/app/expertise-card.html` | Icon spot + title + description |
| Blog card | `ui_kits/app/blog-card.html` | Article list — hover border + shadow |
| News feed | `ui_kits/app/news-feed.html` | Timeline: date + body grid |
| Gallery | `ui_kits/app/gallery.html` | Square image grid, hover scale |
| CTA section | `ui_kits/app/cta-section.html` | Accent bg, inverted buttons |
| Footer | `ui_kits/app/footer.html` | Every page |
| Buttons | `ui_kits/app/buttons.html` | Primary, secondary, on-accent variants |
| Tags | `ui_kits/app/tags.html` | Pill chips for categories/labels |
| Search overlay | `ui_kits/app/search-overlay.html` | / or Cmd+K — vanilla JS |

## Design-system highlights (source evidence)

- **Palette**: 10 OKLch tokens extracted directly from `styles.css` `:root` — no hex invented, all values preserved with hex fallbacks for compatibility.
- **Typography**: Source Serif 4 (display, 400/600) + Inter (body, 400/500/600/700) + SF Mono. Body weight 450 (observed in source CSS declarations).
- **Radius**: 12px cards, 8px buttons, 999px tags — from `--radius`, `--radius-sm`, tag CSS.
- **No framework**: vanilla HTML/CSS/JS confirmed by absence of build tooling in source.
- **CTA pattern**: `--accent` bg, `--accent-text` fg, inverted buttons — observed on every source page.
- **Search**: vanilla JS command-palette overlay with keyboard shortcuts (/, Cmd+K, Esc, arrows, Enter).

## Preview cards

Inspect focused previews in `preview/`:
- `preview/index.html` — manifest linking all cards
- `preview/colors-primary.html` — primary palette swatches with OKLch + hex values
- `preview/colors.html` — full palette overview
- `preview/typography-specimens.html` — type scale specimens
- `preview/typography.html` — full type scale
- `preview/spacing-tokens.html` — spacing tokens with visual bars
- `preview/spacing.html` — spacing and layout grid
- `preview/radius-shadows.html` — radius and elevation
- `preview/components-buttons.html` — button variants
- `preview/components.html` — buttons, cards, tags, inputs, blockquote
- `preview/brand-assets.html` — logo, portrait, OG images, gallery
- `preview/applied-ui.html` — composed page surface (hero + split + card grid + CTA)

## Anti-patterns to avoid

- Gradients (purple washes or any gradient backgrounds)
- Emoji as icons
- Left color-border accent on cards
- Inter as display face
- Drop shadows on cards by default
- Invented metrics
- Raw hex colors
- SearchAction in schema
- Multiple homepage files
- "AI Innovator," "Strategist," "professional fluency"