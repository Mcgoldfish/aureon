# Small Worlds

A playful collection of interactive economics, finance and data-science experiences. First release: a homepage and **The Mathematics of Ruin**, a five-chapter journey through compounding, Kelly growth and model uncertainty.

## Run locally
Requires Node.js 20.19+ or 22.12+.

```sh
npm ci
npm run dev
```

Use the local address printed by Vite. The browser needs no backend. All capital and outcomes are fictional. Simulations run locally and do not use market data.

## Validate
```sh
npm test
npm run build
```

The build performs strict TypeScript checks and writes static assets to `dist`. Tests cover analytical formulas, edge cases, reproducibility, common outcomes, threshold tracking and Monte Carlo expectations.

## Deploy
Serve `dist` through any static host with HTTPS. The app uses hash navigation, so it needs no server-side routing fallback beyond serving the root page. Sites hosting uses `.openai/hosting.json` and the Sites workflow; do not expose repository credentials. For a host under a subpath, configure Vite's `base` first.

## Project map
- PROJECT.md: vision, architecture and design
- EXPERIMENTS.md: current journey and future designs
- AGENTS.md: future development conventions
- src/models: pure computation, tests and model documentation
- src/content: educational stages
- src/experiments: interactions and SVG plots

The four planned experiments are concept cards, not unfinished simulations. Optional Google Fonts have system fallbacks; no external requests are needed for model execution.
