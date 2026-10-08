# Small Worlds

An original creative-computing portfolio exploring economics, finance, data science, statistics and causal inference. Inspired by the approachable experimentation of Neal.fun, with an independent visual identity and no connection to Elixir Quant.

## Product philosophy
Entertainment first; understanding emerges through choices, predictions and consequences. Each experience follows intuition → experiment → complication → advanced model → final challenge. Guided journeys reveal complexity gradually. Free exploration exposes all parameters and optional mathematics.

## First release
A responsive homepage, four honestly marked future concepts, and one substantial experience: The Mathematics of Ruin. All stakes are fictional units. No backend or real financial data is required.

## Architecture
React + TypeScript + Vite. `src/models` contains pure mathematical functions and seeded simulation; `src/content` contains journey copy; `src/experiments` owns experience components and SVG visualizations; `App.tsx` owns global navigation. CSS defines shared typography, color and responsive rules. SVG is sufficient for the first experience; add D3 only when a later visualization benefits from it.

Future experiences should expose a self-contained component and pure model, then register with homepage navigation. Do not turn the homepage into a course catalogue or trading dashboard. Avoid backend infrastructure until a concrete requirement needs it.

## Visual direction
Warm paper, forest ink, citrus accents, generous space and diagrammatic illustrations. Each future experiment may introduce its own accent palette and visual mechanics. Keyboard, touch and reduced-motion support are part of the design.

## Integrity
State assumptions and limitations near technical explanations. Separate empirical evidence from toy simulations. Use common random numbers when comparing strategies, label finite-sample results, and test model calculations independently of rendering.
