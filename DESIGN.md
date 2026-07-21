# alisheryakubov.com Design System

A minimal, editorial personal brand website for Alisher Yakubov — hospitality marketing professional and digital creator based in the United Arab Emirates.

## Product Context

- **Site**: alisheryakubov.com — a single authoritative professional hub for a hospitality marketer.
- **Primary audience**: investors, recruiters, hospitality industry peers, journalists, and collaborators.
- **Tone**: restrained, specific, credible. Third-person biography voice. No marketing fluff.
- **Direction**: Apple + Notion + Google + Stripe — restrained typography, generous whitespace, dark navy accents, crisp edges, fast loading, no decorative flourishes.
- **Pages**: Home (index.html), About, Experience, Projects, News, Articles, Gallery, Contact, plus long-form article templates under `articles/`.

## Visual Foundations

- **Surface-first design**: white/near-white backgrounds with a single dark navy accent. Surface bands (`--surface`) create rhythm without heavy color.
- **Hairline borders**: 1px `--border` separates sections, cards, and list items. No drop shadows on cards by default — only on hover or elevated surfaces (search dialog).
- **Frosted glass header**: sticky, `backdrop-filter: blur(12px)`, semi-transparent white, hairline bottom border.
- **Editorial split**: two-column layout (label/heading left, body right) is the dominant content pattern. Asymmetric ratio (0.9fr / 1.1fr) at desktop.
- **CSS-only navigation**: hamburger menu via hidden checkbox + label — no JavaScript required for mobile nav.
- **No framework**: vanilla HTML + CSS. One `styles.css` shared across all pages. Minimal JS (search overlay only).

## Color Tokens (OKLch)

All colors are defined in OKLch for perceptual uniformity. Bind these tokens; never use raw hex.

| Token | Value | Usage |
|---|---|---|
| `--bg` | `oklch(99.2% 0.003 260)` | Page background |
| `--surface` | `oklch(97.5% 0.005 260)` | Cards, subtle section bands |
| `--surface-2` | `oklch(94% 0.008 260)` | Hover/focus states, dividers, gallery placeholders |
| `--fg` | `oklch(17% 0.02 260)` | Primary text, headings |
| `--muted` | `oklch(48% 0.03 260)` | Secondary text, captions, footer links |
| `--border` | `oklch(85% 0.02 260)` | Hairlines, card borders, dividers |
| `--accent` | `oklch(30% 0.09 255)` | Primary navy — buttons, links, eyebrows, CTA backgrounds |
| `--accent-hover` | `oklch(24% 0.08 255)` | Button hover state |
| `--accent-text` | `oklch(99% 0.005 260)` | Text on accent (CTA sections) |
| `--accent-soft` | `oklch(96% 0.02 255)` | Tinted surfaces, secondary button hover |

### Color usage rules
- One accent (navy) — used at most twice per screen as a fill (CTA section + primary button).
- Eyebrows and links use `--accent` as text color.
- CTA sections invert: `--accent` background, `--accent-text` foreground, secondary buttons with semi-transparent white borders.
- No gradients. No purple washes. No color accents beyond the navy.

## Typography

- **Display / Headings**: `"Source Serif 4", Georgia, "Times New Roman", serif` — tight leading, negative tracking.
- **Body / UI**: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`.
- **Monospace** (rare — dates, credentials): `"SF Mono", "Menlo", Consolas, monospace`.

| Role | Size | Line-height | Letter-spacing | Weight |
|---|---|---|---|---|
| Display H1 | `clamp(44px, 5.5vw, 72px)` | 1.05 | -0.03em | 600 |
| H1 | `clamp(36px, 4vw, 56px)` | 1.08 | -0.025em | 600 |
| H2 | `clamp(28px, 3vw, 40px)` | 1.12 | -0.02em | 600 |
| H3 | `clamp(22px, 2.2vw, 28px)` | 1.2 | -0.01em | 550 |
| Body | `17px` | 1.6 | 0 | 450 |
| Lead | `clamp(18px, 1.8vw, 22px)` | 1.55 | 0 | 450 |
| Small | `14px` | 1.5 | 0.01em | 450 |
| Caption | `12px` | 1.45 | 0.01em | 450 |
| UI Label | `13px` | 1.4 | 0.02em | 550 |
| ALL CAPS (eyebrow/label) | `12px` | 1.4 | 0.08em | 600 |

### Type rules
- Display face (Source Serif 4) for all headings H1–H4, blockquotes, logo, footer brand.
- Body face (Inter) for all body text, UI labels, buttons, nav links, expertise card titles.
- Expertise card titles use body face at 17px weight 600 — not the display face.
- Headings use negative letter-spacing; small text uses slight positive tracking.
- Body weight 450 (not 400) for slightly heavier reading text.
- Article body max-width: 720px. Hero text max-width: 780px. Lead max-width: 65ch.

## Spacing

| Token | Value | Usage |
|---|---|---|
| `--max-width` | `1200px` | Page container max-width |
| Section padding | `clamp(72px, 10vw, 140px)` | `.section` vertical padding |
| Section-sm padding | `clamp(40px, 6vw, 80px)` | `.section-sm` vertical padding |
| Container padding | `clamp(20px, 4vw, 48px)` | Horizontal page padding |
| Content grid gap | `clamp(24px, 4vw, 48px)` | `.split` gap |
| Card padding | `24px` to `32px` | `.card` internal padding (28px default) |
| Card grid gap | `16px` | Between cards in grids |
| Gallery gap | `12px` (mobile) / `16px` (desktop) | Between gallery items |
| Button group gap | `12px` | Between buttons |
| Tag gap | `10px` | Between tag chips |

## Layout

### Container
```css
.container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 clamp(20px, 4vw, 48px); }
```

### Split (two-column editorial)
- Mobile: single column, `gap: clamp(24px, 4vw, 48px)`.
- ≥768px: `1fr 1fr`, left column max-width 420px.
- ≥1024px: `0.9fr 1.1fr` — asymmetric, body gets more room.

### Card grids
- `.card-grid`: 1 column by default.
- `.card-grid-2`: 2 columns at ≥640px.
- `.card-grid-3`: 3 columns at ≥1024px.
- `.card-grid-4`: 4 columns at ≥1024px.
- Compose: `class="card-grid card-grid-2 card-grid-3"` — applies 2-col then upgrades to 3-col.

### Gallery grid
- 2 columns (mobile) → 3 (≥768px) → 4 (≥1024px).
- Square aspect ratio items, `object-fit: cover`, hover scale 1.03.

### News feed (timeline)
- Two-column row: 170px date column + flexible body.
- Collapses to single column on mobile.
- Hairline borders between items, no border on last.

### Responsive breakpoints
- `640px` — card grids go 2-up.
- `768px` — split layout, nav becomes inline, gallery 3-up.
- `1024px` — split asymmetric, card grids 3–4 up, gallery 4-up.
- Mobile-first: base styles are mobile; media queries upgrade.

## Components

### Header / Navigation
- Sticky, `z-index: 100`, height 72px.
- `background: rgba(255, 255, 255, 0.82)`, `backdrop-filter: blur(12px)`.
- Hairline bottom border.
- Logo: display font, 20px, `Alisher` in `--fg` + `Yakubov` in `--muted`.
- Nav links: 14px, weight 500, `--fg` color, `--radius-sm` pill on hover with `--surface` bg.
- Mobile: CSS-only hamburger (hidden checkbox + label with 3 span bars). Nav drops down below header.
- Search button: bordered pill, magnifier icon + "Search" + `/` kbd hint.

### Buttons
- **Primary**: `--accent` fill, `--accent-text` text, hover `--accent-hover`.
- **Secondary**: transparent bg, `--accent` text, 1px `--border`, hover `--accent-soft` bg.
- **On accent (CTA)**: `--accent-text` fill, `--accent` text. Secondary: `--accent-text` text, `rgba(255,255,255,0.3)` border.
- Min-height 44px, padding `12px 24px`, font 14px weight 550, `--radius-sm` (8px).
- Active: `translateY(1px)`. Transition: background/transform/box-shadow 0.15s.
- Button group: flex-wrap, gap 12px, margin-top 28px.

### Cards
- **`.card`**: `--surface` bg, 1px `--border`, `--radius` (12px), 28px padding.
- **`.card-flat`**: transparent bg, 1px `--border`, `--radius`, 24px padding.
- **`.blog-card`** (link card): hover → border `--muted`, `--shadow-md`, title → `--accent`.
- **`.pinned-card`**: `--surface` bg, `--radius`, 32px padding, star icon label.
- No default shadow — only on hover (blog cards) or elevated surfaces (search dialog).

### Expertise cards
- `.expertise-card`: card with icon spot + h3 (body font, 17px, 600) + p (14px, `--muted`).
- `.icon-spot`: 40×40, 1px `--border`, `--radius-sm`, `--accent` icon color, 22px SVG at 1.6px stroke.

### Tags
- Pill: `border-radius: 999px`, 1px `--border`, 12px, weight 550, 0.06em tracking, uppercase, `--muted` color.
- Padding: `6px 10px`.

### Eyebrow
- `12px`, uppercase, 0.08em tracking, weight 600, `--accent` color, margin-bottom 18px.
- Used above every section heading.

### Blockquote
- Display font, `clamp(22px, 2.5vw, 30px)`, 1.25 line-height, -0.02em tracking.
- Left border: 2px `--accent`, padding-left 24px.

### Gallery
- `.gallery-item`: square aspect, `overflow: hidden`, `--radius-sm`, `--surface-2` placeholder bg.
- Image: `object-fit: cover`, hover `scale(1.03)` over 0.3s.

### News feed
- `.news-item`: grid `170px 1fr`, gap 32px, padding 36px 0, hairline bottom border.
- `.news-date`: monospace, 13px, uppercase, `--muted`.
- `.news-body .category`: 11px, uppercase, 0.08em, `--accent`.
- `.news-body .publication`: 13px, weight 550, `--muted`.
- `.news-body h3`: display font, `clamp(22px, 2.2vw, 28px)`.
- `.news-body p`: 16px, `--muted`, max-width 62ch.
- `.original-title`: 14px, italic, `--fg`.
- `.news-link`: inline-flex, 14px, weight 550, 14px external-link SVG.
- `.related-coverage`: `--surface` bg, `--radius-sm`, 1px border, 18–20px padding.

### Footer
- `--surface` bg, top border, padding `clamp(48px, 6vw, 80px) 0`.
- 4-column grid at ≥768px: `2fr repeat(3, 1fr)`.
- Brand: display font, 18px, 600.
- Column headers: 12px, uppercase, 0.08em, 600, `--muted`.
- Links: 14px, `--muted`, hover `--fg`.
- Footer bottom: top border, 13px, `--muted`, flex space-between.

### Search overlay
- Fixed, `z-index: 9999`, backdrop `rgba(10,20,40,0.4)` + `blur(4px)`.
- Dialog: max-width 640px, `--bg` bg, `--radius`, `0 20px 60px rgba(0,0,0,0.2)` shadow.
- Input: 17px, no border, transparent bg.
- Results: max-height 60vh, scrollable, hover `--surface` bg.
- Keyboard: `/` or `Cmd/Ctrl+K` to open, `Esc` to close, arrow keys to navigate, `Enter` to open first result.

### Lists
- `.list-unstyled`: no bullets, hairline bottom borders between items, 15px text, 10px vertical padding.

### Tables
- `.table`: full width, `border-collapse`, 15px text, hairline bottom borders.
- `th`: 13px, uppercase, 0.04em tracking, 600, `--muted`.

## Motion

- **Gallery hover**: `transform: scale(1.03)`, 0.3s ease.
- **Button**: background 0.15s, transform 0.1s, box-shadow 0.15s. Active: `translateY(1px)`.
- **Blog card hover**: border-color 0.15s, box-shadow 0.15s.
- **Nav links**: background 0.15s (via `--surface` hover).
- **Search input**: 150ms debounce on typing.
- **Reduced motion**: `@media (prefers-reduced-motion: reduce)` — disables smooth scroll, gallery scale, button/nav transitions.
- No entrance animations, no scroll-triggered reveals, no parallax. Motion is functional, not decorative.

## Voice & Copy

- **Third person**: "Alisher Yakubov is…" not "I am…" on public biography pages.
- **Specific over generic**: "marketing communications for Fujairah Rotana Resort & Spa" not "luxury experience."
- **Restrained**: no exclamation marks, no hype words, no "unparalleled" or "nestled in the heart of."
- **Honest**: real organizations, real dates, real credentials. No invented metrics.
- **Content rules** (enforced):
  - Job title: "Cluster Assistant Marketing Communications Manager" (official Rotana wording).
  - Positioning: "Hospitality Marketing Professional & Digital Creator" — never "AI Innovator" or "Strategist."
  - Languages: list without proficiency labels (no "professional fluency").
  - No SEO-internal language on public pages ("search-ready biography," "entity SEO," "target length").
  - No unverified claims ("consulting offer," "built prompt libraries," "trained colleagues").
  - Instagram: @alisheryakubi. Email: alisheryakubi@gmail.com. Domain: alisheryakubov.com.
  - worksFor: single Organization "Fujairah Rotana Resort & Spa" with parentOrganization "Rotana Hotels & Resorts."

## SEO / Schema

Every page includes:
- Person schema (canonical entity, official job title, single worksFor with parentOrganization).
- BreadcrumbList (Home → current page).
- WebSite schema on home (NO SearchAction — site has no functioning search endpoint).
- Article schema on article pages (headline, author, publisher, datePublished, articleSection).
- ImageObject schema on gallery images.
- Open Graph + Twitter Card meta tags.
- Canonical URL.

## Anti-Patterns (do not ship)

- Purple gradient washes or gradients on every background.
- Emoji as feature icons.
- Rounded card with left color-border accent.
- Hand-drawn SVG humans/scenery.
- An icon beside every heading.
- Inter/Roboto/Arial/Fraunces as display face (body is fine).
- Invented metrics or filler copy.
- Warm beige/cream default canvas (this system uses cool near-white).
- Designer/demo controls inside product artifacts.
- Multiple homepage files (index.html is the only homepage).
- SearchAction in schema (no functioning site search endpoint).
- Flat array of three organizations for worksFor (use single org with parentOrganization).
- "AI Innovator," "Strategist," "professional fluency," or other unverified claims.
- Raw hex colors — always use OKLch tokens.