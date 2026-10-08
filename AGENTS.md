# Development conventions

- Preserve the entertainment-first product intent and original Small Worlds identity.
- Use React, strict TypeScript and Vite. Keep mathematical functions pure and separate from UI and copy.
- Add one complete experience at a time. Never present a planned concept as working.
- Use seeded randomness; compare strategies using common random draws.
- Every displayed metric must derive from the actual model. Document formulas, assumptions, units, thresholds and limitations.
- Add meaningful analytical/model tests for mathematical changes. Run `npm test` and `npm run build` before delivery.
- Support keyboard, touch, accessible labels, responsive layouts and reduced motion.
- Keep equations optional and initial copy short. Interactions must change model inputs or decisions.
- Preserve package-lock.json. Do not add financial APIs, authentication or backend infrastructure without a requirement.
- Maintain PROJECT.md, EXPERIMENTS.md and model notes with scope changes.
- Never commit credentials, generated archives or node_modules. `.openai/hosting.json` contains the Site identity and public static-output configuration only.
