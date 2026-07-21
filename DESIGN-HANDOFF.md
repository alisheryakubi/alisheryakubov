# 9255573a-41d3-43ea-b15b-0e6cd935b377 implementation handoff

This archive is the source of truth for turning the design into production code. Start from `index.html`, then preserve the visual system, responsive behavior, and interactions found in the exported files.

## Implementation target
- Build production UI from the exported design, not a loose reinterpretation.
- Preserve typography scale, spacing rhythm, color tokens, border radii, shadows, motion timing, and component states.
- Replace static placeholders only when the target app has real data or functional equivalents.
- Keep generated product UI free of Open Design chrome, preview labels, or design-process annotations.
- Treat this handoff as a visual contract: if implementation choices conflict, match the exported pixels and behavior first, then refactor internals.

## Source map
- Primary entry: `index.html`
- HTML screens detected: 58
- Stylesheets detected: 2
- Script/component files detected: 4
- Supporting assets detected: 99

## Responsive contract
Validate the implementation across this 2025–2026 viewport matrix:
- Mobile compact: 360×800
- Mobile standard: 390×844
- Mobile large: 430×932
- Foldable / small tablet: 600×960
- Tablet portrait: 820×1180
- Tablet landscape: 1024×768
- Laptop: 1366×768
- Desktop: 1440×900
- Wide desktop: 1920×1080

For responsive web exports, treat these as a modern breakpoint system for one adaptive web experience, not three fixed screenshots. Do not split responsive web into unrelated native app screens unless the project explicitly includes native targets. Use semantic layout thresholds, fluid `clamp()` type/spacing, and container queries where component width matters more than viewport width. Preserve any CSS media queries, container queries, fluid `clamp()` scales, and layout changes already present in the exported files.

## Design fidelity contract
- Extract reusable tokens before writing components: background, surface, foreground, muted text, border, accent, radius, shadow, spacing, type scale, and motion duration/easing.
- Map product screens, in-app modules/components, optional landing page, and optional OS widget surfaces before coding. Keep these surfaces separate in the target architecture.
- Match layout geometry: max-widths, gutters, grid columns, card proportions, sticky/fixed elements, and viewport-specific navigation.
- Preserve real copy, labels, and data shown in the export. Do not replace specific text with generic marketing filler.
- Preserve interactive affordances: hover, focus, pressed, disabled, loading, validation, copy/share, tab/accordion, modal/sheet, and keyboard states where present.
- Preserve accessibility semantics when converting: headings stay hierarchical, controls remain buttons/links/inputs, focus states stay visible.
- Do not keep prototype-only annotations, frame labels, or Open Design chrome in the production UI.

## CJX-ready UX contract
- Use `DESIGN-MANIFEST.json` as the machine-readable map for screens, app modules, OS widgets, landing pages, tokens, interactions, and viewport checks.
- Screen-file-first: when multiple user-facing surfaces exist, implement each HTML screen as its own route/file. Treat `index.html` as a launcher/overview when the manifest marks it that way, not as a combined final UI.
- If `landing.html`, app screens, platform screens, or OS widget files exist, preserve those boundaries in the target app instead of merging them into one page.
- A single self-contained `index.html` is acceptable only when the export truly contains one user-facing screen and its CSS/JS are structured enough to extract tokens, components, states, and behavior.
- If separate `css/` or `js/` files exist, treat them as source of truth for token/component/interactions before porting to React, Vue, SwiftUI, Compose, or another target stack.
- In-app modules/components are product UI blocks inside the app. OS widgets are home-screen/lock-screen/quick-access surfaces outside the app. Do not merge those concepts.

## Color and brand contract
- Use the exported design tokens and product/domain context as the color source of truth.
- Do not introduce warm beige / cream / peach / pink / orange-brown background washes unless they are already explicit brand/reference colors in the export.
- A stylesheet or design/token file was detected; inspect it for canonical color variables before choosing framework theme tokens.

## Implementation sequence for AI coding tools
1. Open `index.html` and `DESIGN-MANIFEST.json`; identify every screen file, launcher/overview file, app module, and interaction before coding.
2. If multiple HTML screens exist, map them to separate routes/surfaces first; do not merge `landing.html`, product app screens, platform screens, or OS widgets into one route.
3. Extract a token table from CSS/root styles and inline styles before building framework components.
4. Build product screens and domain-specific in-app modules from largest layout regions down to controls; avoid starting with isolated atoms that lose spatial intent.
5. Port responsive behavior across the modern viewport matrix and test each semantic breakpoint before cleanup.
6. Port interactions and states, then replace static placeholders only with real app data or functional equivalents.
7. Keep optional landing page and OS widget surfaces as separate surfaces if present.
8. Compare final screenshots against the export at 360×800, 390×844, 430×932, 820×1180, 1024×768, 1366×768, 1440×900, and 1920×1080 before declaring done.

## Entry points
- `about.html`
- `ai-powered-marketing.html`
- `articles.html`
- `articles/agentic-commerce.html`
- `articles/ai-agents-one-person-business.html`
- `articles/ai-automation-what-worked.html`
- `articles/ai-changing-real-estate.html`
- `articles/ai-workflows-hospitality-marketing.html`
- `articles/analyse-dubai-property-ai.html`
- `articles/build-digital-product-ai.html`
- `articles/dubai-real-estate-tokenization.html`
- `articles/future-search-marketing-hospitality.html`
- `articles/google-knowledge-graph-hospitality.html`
- `articles/local-ai-vs-cloud-ai.html`
- `articles/luxury-hotel-content-strategy.html`
- `articles/multi-page-website-aed-40.html`
- `articles/off-plan-vs-ready-property-dubai.html`
- `articles/search-visible-personal-brand.html`
- `articles/why-ai-automation-fails.html`
- `book-preview.html`
- `books.html`
- `contact.html`
- `custom-books.html`
- `experience.html`
- `gallery.html`
- `hospitality-campaigns.html`
- `index.html`
- `insights/search-is-not-dead-hotel-marketing.html`
- `news.html`
- `photography-for-brands.html`
- `preview/applied-ui.html`
- `preview/brand-assets.html`
- `preview/colors-primary.html`
- `preview/colors.html`
- `preview/components-buttons.html`
- `preview/components.html`
- `preview/index.html`
- `preview/radius-shadows.html`
- `preview/spacing-tokens.html`
- `preview/spacing.html`
- `preview/typography-specimens.html`
- `preview/typography.html`
- `projects.html`
- `ui_kits/app/blog-card.html`
- `ui_kits/app/buttons.html`
- `ui_kits/app/card-grid.html`
- `ui_kits/app/cta-section.html`
- `ui_kits/app/expertise-card.html`
- `ui_kits/app/footer.html`
- `ui_kits/app/gallery.html`
- `ui_kits/app/header.html`
- `ui_kits/app/hero.html`
- `ui_kits/app/index.html`
- `ui_kits/app/news-feed.html`
- `ui_kits/app/search-overlay.html`
- `ui_kits/app/section-split.html`
- `ui_kits/app/tags.html`
- `video-content.html`

## Styles
- `colors_and_type.css`
- `styles.css`

## Scripts/components
- `assets/lib/jquery.min.js`
- `assets/lib/turn.js`
- `search.js`
- `theme.js`

## Assets and supporting files
- `assets/alisher-yakubov.jpg`
- `assets/apple-touch-icon.png`
- `assets/articles/agentic-commerce.jpg`
- `assets/articles/ai-agents-one-person-business.jpg`
- `assets/articles/ai-automation-what-worked.jpg`
- `assets/articles/ai-changing-real-estate.jpg`
- `assets/articles/analyse-dubai-property-ai.jpg`
- `assets/articles/build-digital-product-ai.jpg`
- `assets/articles/dubai-real-estate-tokenization.jpg`
- `assets/articles/off-plan-vs-ready-property.jpg`
- `assets/articles/why-ai-automation-fails.jpg`
- `assets/book-preview/page-01.jpg`
- `assets/book-preview/page-01.png`
- `assets/book-preview/page-02.jpg`
- `assets/book-preview/page-02.png`
- `assets/book-preview/page-03.jpg`
- `assets/book-preview/page-03.png`
- `assets/book-preview/page-04.jpg`
- `assets/book-preview/page-04.png`
- `assets/book-preview/page-05.jpg`
- `assets/book-preview/page-05.png`
- `assets/book-preview/page-06.jpg`
- `assets/book-preview/page-06.png`
- `assets/book-preview/page-07.jpg`
- `assets/book-preview/page-07.png`
- `assets/book-preview/page-08.jpg`
- `assets/book-preview/page-08.png`
- `assets/book-preview/page-09.jpg`
- `assets/book-preview/page-09.png`
- `assets/book-preview/page-10.jpg`
- `assets/book-preview/page-10.png`
- `assets/book-preview/page-11.jpg`
- `assets/book-preview/page-11.png`
- `assets/book-preview/page-12.jpg`
- `assets/book-preview/page-12.png`
- `assets/book-preview/page-13.jpg`
- `assets/book-preview/page-13.png`
- `assets/book-preview/page-14.jpg`
- `assets/book-preview/page-14.png`
- `assets/book-preview/page-15.jpg`
- `assets/book-preview/page-15.png`
- `assets/book-preview/page-16.jpg`
- `assets/book-preview/page-16.png`
- `assets/book-preview/page-17.jpg`
- `assets/book-preview/page-18.jpg`
- `assets/book-preview/page-19.jpg`
- `assets/book-preview/page-20.jpg`
- `assets/book-preview/page-21.jpg`
- `assets/book-preview/page-22.jpg`
- `assets/book-preview/page-23.jpg`
- `assets/book-preview/page-24.jpg`
- `assets/book-preview/page-25.jpg`
- `assets/book-preview/page-26.jpg`
- `assets/book-preview/page-27.jpg`
- `assets/book-preview/page-28.jpg`
- `assets/book-preview/page-29.jpg`
- `assets/book-preview/page-30.jpg`
- `assets/book-preview/page-31.jpg`
- `assets/book-preview/page-32.jpg`
- `assets/book-preview/page-33.jpg`
- `assets/book-preview/page-34.jpg`
- `assets/book-preview/page-35.jpg`
- `assets/book-preview/page-36.jpg`
- `assets/book-preview/page-37.jpg`
- `assets/book-preview/page-38.jpg`
- `assets/book-preview/page-39.jpg`
- `assets/book-preview/page-40.jpg`
- `assets/book-preview/page-41.jpg`
- `assets/book-preview/page-42.jpg`
- `assets/book-preview/page-43.jpg`
- `assets/book-preview/page-44.jpg`
- `assets/book-preview/page-45.jpg`
- `assets/book-preview/page-46.jpg`
- `assets/book-preview/page-47.jpg`
- `assets/favicon-192x192.png`
- `assets/favicon-48x48.png`
- `assets/favicon-512x512.png`
- `assets/favicon-96x96.png`
- `assets/favicon.svg`
- `assets/insights/search-is-not-dead.jpg`
- `assets/og-about.jpg`
- `assets/og-articles.jpg`
- `assets/og-contact.jpg`
- `assets/og-gallery.jpg`
- `assets/og-home.jpg`
- `assets/og-media.jpg`
- `assets/og-projects.jpg`
- `assets/og-work.jpg`
- `context/provenance.md`
- `context/source-context.md`
- `DESIGN.md`
- `favicon.ico`
- `README.md`
- `robots.txt`
- `search-index.json`
- `sitemap.xml`
- `SKILL.md`
- `ui_kits/app/README.md`
- `vercel.json`

## Coding checklist for AI tools
1. Inspect `index.html` and `DESIGN-MANIFEST.json` first and identify reusable components before coding.
2. Implement each user-facing screen file as its own route/surface; keep launcher, landing, app, platform, and OS widget files separate.
3. Extract design tokens into the target stack: colors, type scale, spacing, radius, shadows, and motion.
4. Implement layout with real 2025–2026 responsive breakpoints, fluid type/spacing, and container-query-aware component behavior; test with no horizontal overflow.
5. Preserve interactive controls, hover/focus/pressed states, form behavior, validation, and copy actions where present.
6. Implement domain-specific in-app modules with real states; do not flatten them into generic cards.
7. Keep landing page, product screens, and OS widget/quick-access surfaces separate when present.
8. Confirm the production result visually matches the exported design before refactoring internals.
9. Reject implementation shortcuts that flatten the design into generic cards, generic gradients, placeholder stats, or framework-default typography.
10. If a detail is ambiguous, keep the exported HTML/CSS/JS behavior rather than inventing a new pattern.
