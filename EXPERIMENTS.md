# Experiments

## 01 — The Mathematics of Ruin (reference implementation)
Question: why can positive expected returns still lead to depletion?

1. **A tempting coin.** Predict a result. Allocate fictional capital by dragging a boundary between safe and exposed units (with a keyboard range alternative). Reveal individual seeded coin flips.
2. **One player, many futures.** Run 200 paths over 100 rounds. Compare the average, median and threshold-crossing frequency. Change allocation while keeping the random seed constant.
3. **Find the sweet spot.** Compare all-in, a visitor-selected fraction and Kelly on identical outcomes. Explore the expected-log-growth curve by selecting a point. Reveal arithmetic versus geometric growth.
4. **The coin changes.** Introduce an explicit regime change halfway through the run. Compare the assumed 60% win probability with an actual 45% after the change. Test sensitivity to model error and partial Kelly.
5. **Build for uncertainty.** Choose a fraction and test on three disclosed scenarios: stable p=.60, stable p=.52, and p=.60→.45. Aim for at least 90% survival above 100 units in all three and a median above the initial 1,000 units in the stable .60 scenario. This is a finite seeded challenge, not an optimal investment policy.

Free exploration exposes probability, win payoff, fraction, rounds, seed, regime change and threshold. A comparison preserves matching random draws and labels all strategies. Optional model details explain limitations. See `src/models/README.md` for formulas.

## 02 — The Causal Detective (planned)
Before/after policy outcome → predict effect → inspect a control → reconstruct difference-in-differences → manipulate pre-trends and confounders → select donor weights for a synthetic counterfactual → solve an identification challenge. Pure data generator must retain ground-truth effects. Explain parallel trends, spillovers and non-identification; never equate a chart with causal proof.

## 03 — Design an Auction (planned)
Bid with a private value → compare first-price and second-price payoffs → control simulated strategic bidders → explore truthful bidding against deviations → vary reserve and bidder distributions → design and test a mechanism. Separate private independent values from correlated/common values; truth-telling conclusions require stated assumptions.

## 04 — When AI Changes Reality (planned)
Label points → fit a simple classifier → test held-out data → let agents move in response to the decision boundary → observe distribution shift → compare retraining policies → design a robust system. Visualize training and deployment distributions separately. Document agent costs and feedback assumptions.

## 05 — The Banking Domino Effect (planned)
Create nodes → draw lending relationships → shock a bank → propagate creditor losses → compare capital buffers and network concentration → stress-test a resilient network. Use balance-sheet-consistent exposures and a specified clearing rule. Distinguish solvency shocks, liquidity runs and real-world complexity.

Implement one complete journey at a time. Planned cards must not imply these experiences are playable.
