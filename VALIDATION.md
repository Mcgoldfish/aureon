# Validation — first release

- Nine model tests pass: Kelly optimality, arithmetic/geometric divergence, compounding and absorption, seeded reproducibility, threshold history, common draws, regime timing, analytical one-round expectation, invalid inputs and fractional underflow.
- Strict TypeScript check and Vite production build pass.
- Browser walkthrough completed all five guided chapters. Prediction gating, two coin flips, Monte Carlo metrics, matching-strategy comparisons, regime change and final challenge were exercised.
- Seed 42, 20% allocation, stable 60% coin, 100 rounds: median 7,489.87 units, mean 40,468.05, survival 94.5%. UI agrees with model output.
- Final challenge at 10%, seed 42 meets its finite-sample targets across all three scenarios.
- WebMCP action registered with expected schema and annotations. Valid input updated Free Exploration and returned matching results. Invalid fraction 2 was rejected with no state change.
- Phone-width check at 390px showed no horizontal document overflow. Keyboard allocation uses a labelled native range input; dragging has a touch-compatible pointer path. Reduced motion disables transitions.

Limits: this is a first reference implementation, not a cross-browser accessibility audit. The other four experiments remain planned. External fonts have local fallbacks. No empirical datasets, backend or real financial transactions are used.
