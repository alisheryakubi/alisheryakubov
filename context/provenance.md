# Provenance Notes

## Source project
- **Source project id**: 66630661-25ec-4a00-be98-361287d56e98
- **Source project name**: Alisher Yakubov
- **Design system id**: user:alisher-yakubov-design-system
- **Generated**: 2026-07-15

## Evidence files inspected

### Core CSS
- **styles.css** (867 lines) — the single shared stylesheet. Extracted: all `:root` tokens (OKLch palette, font stacks, radius, shadow), type scale, layout utilities (.container, .section, .split), header/nav (CSS-only hamburger via checkbox), buttons (primary/secondary), cards (.card/.card-flat), expertise cards, tags, blockquote, gallery grid, footer, search overlay styles, reduced-motion query.

### HTML pages
- **index.html** — homepage: hero split (eyebrow + H1 + lead + button group + portrait photo), logo-row tags, expertise card grid (8 cards with icon-spot SVGs), project link cards, article cards, CTA section (accent bg).
- **about.html** — long-form bio: hero heading, multiple `.split` sections with eyebrow + H2 left / paragraphs right, pillar cards, value cards, skill `.card-flat` grid, languages list, CTA.
- **experience.html** — timeline cards: `.card` with `.split` inside (job title/role left, responsibilities list right), `list-unstyled` for bullet lists.
- **projects.html** — alternating `.split` sections (surface/white bands), each with eyebrow + H2 + paragraphs + secondary button link.
- **gallery.html** — hero, tag categories row, `.gallery-grid` (12 square images), usage split, CTA.
- **contact.html** — contact method cards (icon-spot + H3 + p + link), location split, CTA.
- **articles.html** — featured article (full-width card), blog-card pattern (hover border + shadow + title color), blog-meta (category + date), article ItemList schema.
- **news.html** (630 lines) — most complex page: pinned-card, news-feed timeline (170px date + body grid), news-item with category/publication/h3/original-title/paragraph/news-link, related-coverage sub-card, credential-card, for-media grid, external-link SVG pattern.
- **articles/ai-workflows-hospitality-marketing.html** — article template: hero with back-link, max-width 720px body, H2/H3 hierarchy, blockquote, ordered/unordered lists, article schema with datePublished.

### JavaScript
- **search.js** (251 lines) — vanilla JS search overlay: lazy-loads search-index.json, builds overlay DOM, fuzzy term search with scoring, highlight with `<mark>`, keyboard nav (/ or Cmd+K to open, Esc to close, arrows, Enter to open first). Window export: `window.__odSearch`.

### Assets
- **assets/alisher-yakubov.jpg** (4.5 MB) — professional portrait, hero photo.
- **assets/gallery/*.jpg** (12 images, 45–51 KB each) — event, conference, networking, speaking, awards, behind-the-scenes.
- **assets/og-*.jpg** (8 OG images, 43–48 KB each) — one per page for social sharing.
- **Linkedin-Photos.JPEG** (4.5 MB) — duplicate of aisher-yakubov.jpg (LinkedIn source).

### Data
- **search-index.json** — array of {title, description, keywords, category, date, url} for client-side search.
- **sitemap.xml** — URL list.
- **robots.txt** — empty.

## Extraction method
- Read all CSS tokens directly from `:root` in styles.css — no hex invented.
- Read component shapes from the HTML structure (classes, DOM hierarchy, inline styles).
- Read interaction patterns from search.js (keyboard shortcuts, overlay behavior).
- Read content/voice rules from DESIGN.md (original) and schema.org JSON-LD across pages.
- Preserved real assets in `assets/` — referenced by relative path in previews and UI kit.

## Decisions / defaults
- Display face: Source Serif 4 (observed in Google Fonts link + CSS var). Not Inter for headings.
- Body weight 450 (not 400) — observed in styles.css `--font-body` weight and body declarations.
- Radius: 12px cards, 8px buttons/inputs, 999px tags — from `--radius`, `--radius-sm`, tag CSS.
- No framework: vanilla HTML/CSS/JS — confirmed by absence of any build tooling or framework imports.
- CTA section pattern: `--accent` bg, inverted buttons with `--accent-text` fill — observed on every page.