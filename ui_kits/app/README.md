# UI Kit — alisheryakubov.com

An applied interface kit reflecting the source project's real components, layout patterns, and interactions. Each file is a standalone HTML page demonstrating one component with live tokens from `../../colors_and_type.css`.

## Applied kit structure

13 standalone component HTML files plus a launcher index and this README. Each file links `../../colors_and_type.css` and includes the Google Fonts link — open any file directly in a browser to inspect the pattern with live tokens.

## Source basis

All components are extracted from the live alisheryakubov.com source project (id: `66630661-25ec-4a00-be98-361287d56e98`). The original source files (`styles.css`, `search.js`, `*.html`) are preserved in the package root as working examples. See `../../context/provenance.md` for evidence extraction notes.

## Component index

| File | Component | Source evidence |
|---|---|---|
| `header.html` | Sticky frosted-glass header with CSS-only hamburger nav | Every page |
| `hero.html` | Eyebrow + H1 + lead + button group + portrait photo | index.html |
| `section-split.html` | Two-column editorial layout (label left, body right) | about.html, projects.html |
| `card-grid.html` | Responsive card grids (2, 3, 4 columns) | index.html, about.html |
| `expertise-card.html` | Icon spot + title + description card | index.html, about.html |
| `blog-card.html` | Link card with hover border + shadow + title color | articles.html |
| `news-feed.html` | Timeline item: 170px date + body grid | news.html |
| `gallery.html` | Square image grid with hover scale | gallery.html |
| `cta-section.html` | Accent background section with inverted buttons | Every page |
| `footer.html` | 4-column footer with brand + link columns | Every page |
| `buttons.html` | Primary, secondary, and on-accent button variants | styles.css |
| `tags.html` | Pill chips for categories and labels | index.html, gallery.html, articles.html |
| `search-overlay.html` | Vanilla JS search overlay (/ or Cmd+K) | search.js |

## Usage workflow

1. **Browse**: Open `index.html` to see all components listed with descriptions.
2. **Inspect**: Click any component card to open its standalone page with live tokens.
3. **Copy**: Copy the HTML structure from the component file into your page.
4. **Adapt**: Replace placeholder content with real content, following the content rules in `../../SKILL.md`.
5. **Link tokens**: Ensure your page links `../../colors_and_type.css` (or copy the `:root` block inline).

## Design notes

- All components use `var(--token)` — never raw hex or OKLch inline.
- Cards have 1px hairline borders, 12px radius, 28px padding, no default shadow.
- Buttons: 44px min-height, 8px radius, 550 font-weight, 0.02em tracking.
- Tags: 999px radius, 12px font, uppercase, surface background.
- Section rhythm: alternate `--bg` and `--surface` backgrounds.
- CTA sections use `--accent` background with inverted (`--accent-text` on `--accent`) buttons.
- Mobile nav is CSS-only (checkbox toggle), no JavaScript required.
- Search overlay is vanilla JS — no dependencies.

## Design system

- See `../../DESIGN.md` for the full spec (product context, tokens, components, motion, voice, anti-patterns).
- See `../../SKILL.md` for the workflow guide (how to build a page, token binding rules, content rules).
- See `../../preview/index.html` for focused token and component review cards.