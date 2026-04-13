# João Saraiva.data() — Portfolio

Personal portfolio site for **João Saraiva**, Data & Software Engineer specializing in scalable cloud-native architectures on AWS & GCP.

**Live:** [jsaraivx.github.io](https://jsaraivx.github.io)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Structure | HTML5 (Semantic) |
| Styling | Vanilla CSS (Custom Properties, Grid, Flexbox) |
| Logic | Vanilla JavaScript (ES6+) |
| Typography | Lay Grotesk (self-hosted, trial) |
| Icons | Phosphor Icons (CDN) |
| Animations | GSAP 3.12 + ScrollTrigger |
| Smooth Scroll | Lenis 1.1 |
| Hosting | GitHub Pages |

## Design

- **Aesthetic:** Engineering minimalism — monochrome black-and-white palette, dot-grid background, alternating light/dark sections
- **Typography:** Lay Grotesk across all weights (400–900), self-hosted `.otf` files
- **Animations:** GSAP ScrollTrigger-powered — hero parallax, word-by-word text reveal, horizontal pinned skills scroll (desktop), staggered card entrances, smooth anchor navigation via Lenis
- **Mobile:** Fully responsive with hamburger menu overlay, stacked layouts, and Lenis-powered smooth scroll on anchor links

## Sections

- **Hero** — positioning statement + CTAs (projects, contact)
- **About** — career philosophy, key differentiators, profile card with GitHub contribution graph
- **Experience** — 4 roles: Avdata Consulting (Data Engineer), Tropical Bud (Software Dev), Ultraform (Co-Founder), Independent Consulting (Software & Data Engineer)
- **Tech Stack** — 8 horizontal-scroll categories: Cloud (GCP + AWS), Orchestration & Streaming, Python & Data, AI Engineering, Visualization & BI, Software Engineering, Architecture & Modeling, Infrastructure
- **Projects** — 6 highlighted projects: VectorHire, AI Architecture & LLMops, Global Data Orchestration, Stream-Guard-Kafka, BQ Schema Migrator, What-Price
- **Certifications** — 10 items: Google Cloud, Databricks, dbt, Apache Kafka, HackerRank SQL, Claude Code, ML with Python (USP), and Software Engineering bachelor's
- **Footer** — contact links (LinkedIn, GitHub, email) + copyright

## Local Development

```bash
# Option A: Python
python3 -m http.server 8080

# Option B: npx serve
npx -y serve . -l 8080

# Open in browser
open http://localhost:8080
```

No build step, no `node_modules`. Just HTML, CSS, and JS + CDN libraries.

## File Structure

| File | Purpose |
|------|---------|
| `index.html` | All content and structure |
| `styles.css` | Design system, responsive breakpoints, card styles |
| `script.js` | GSAP animations, Lenis smooth scroll, mobile menu, anchor navigation |
| `fonts/` | Self-hosted Lay Grotesk `.otf` files (Regular, Medium, Semibold, Bold, Black) |

### Adding Projects

Copy an existing `.proj-card` block in the Projects section and update:
- Title, subtitle, description
- Tech tags (`.tag` spans)
- Repository link (optional)

### Adding Experience

Copy an existing `.exp-card` block in the Experience section. The GSAP animation will automatically pick it up.

## Deploy

Push to `main` branch — GitHub Pages deploys automatically.

## Author

**João Saraiva** — Data Engineer  
📍 Rio de Janeiro, Brazil  
📧 joaogabrielssaraiva@gmail.com  
🔗 [linkedin.com/in/jsaraivx](https://linkedin.com/in/jsaraivx) · [github.com/jsaraivx](https://github.com/jsaraivx)
