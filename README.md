# jsaraivx.data() — Portfolio

Personal portfolio site for **João Saraiva**, Data Engineer based in Rio de Janeiro, Brazil.

**Live:** [jsaraivx.github.io](https://jsaraivx.github.io)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Structure | HTML5 (Semantic) |
| Styling | Vanilla CSS (Custom Properties, CSS Variables) |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | Playfair Display, Cormorant Garamond, Inter (Google Fonts) |
| Icons | Phosphor Icons |
| Hosting | GitHub Pages |

## Design System

- **Aesthetic:** Editorial minimalism — serif typography, muted gold accent (`#c9a96e`), noise texture overlay
- **Themes:** Dark (default) + Light mode with `localStorage` persistence and OS preference detection
- **Typography:** Serif for display/body (Playfair Display, Cormorant Garamond), Sans-serif for UI (Inter)
- **Animations:** Staggered hero entrance, scroll-reveal via Intersection Observer
- **Mobile:** iOS Safe Area support (Dynamic Island / notch), responsive breakpoints at 900px and 768px

## Sections

- **Hero** — positioning statement + CTAs (projects, CV download)
- **About** — career context and differentiators
- **Experience** — professional timeline (Avdata Consulting, Freelance)
- **Tech Stack** — 6 categories (GCP, Orchestration, Python & Data, AI Engineering, Software Engineering, Architecture)
- **Projects** — 4 highlighted projects with tech tags (VectorHire, Stream-Guard-Kafka, BQ Schema Migrator, What-Price)
- **Certifications** — Google Cloud, Databricks, dbt, Kafka, HackerRank + academic background
- **Footer** — contact links (LinkedIn, GitHub, email)

## Local Development

```bash
# Serve locally
python3 -m http.server 8080

# Open in browser
open http://localhost:8080
```

No build step, no dependencies, no `node_modules`. Just HTML, CSS, and JS.

## Customization

All content is in `index.html` — edit directly. Key files:

| File | Purpose |
|------|---------|
| `index.html` | All content and structure |
| `styles.css` | Design system, themes, responsive rules |
| `script.js` | Theme toggle, scroll animations, mobile menu |

### Theme Colors

Edit CSS variables in `:root` (dark) and `[data-theme="light"]` (light) blocks in `styles.css`.

### Adding Projects

Copy an existing `.project-card` block in the Projects section and update:
- Icon class (`ph ph-*`)
- Title, subtitle, description
- Tech tags
- Repository link

## Deploy

Push to `main` branch — GitHub Pages deploys automatically.

## Author

**João Saraiva**
- Email: joaogabrielssaraiva@gmail.com
- Location: Rio de Janeiro, Brasil
