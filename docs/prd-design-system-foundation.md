# PRD: @kkt Design System — Foundation to CI/CD

**Status:** Ready for implementation  
**Date:** 2026-05-30  
**Scope:** v1 foundation — tokens, primitives, monorepo, Storybook, visual testing, CI/CD pipeline

---

## Problem Statement

Building UI across multiple projects without a shared foundation leads to inconsistent visuals, duplicated accessibility work, and brittle one-off components. There is no single source of truth for design tokens, no reusable component library with proper accessibility, and no automated process to catch visual regressions before they reach production. Every project reinvents the same primitives.

---

## Solution

A framework-agnostic design system published as scoped npm packages under `@kkt/*`. A `core` package contains framework-agnostic logic and style contracts, a `tokens` package defines the design token source of truth, and adapter packages (starting with `@kkt/react`) expose styled, accessible components for specific frameworks. Everything lives in a Turborepo monorepo, documented in a shared Storybook, visually tested with Chromatic on every PR, and published via Changesets from GitHub Actions CI.

---

## User Stories

1. As a developer, I want to install `@kkt/react` and get a Button component, so that I don't have to build one from scratch.
2. As a developer, I want all components to be accessible out of the box, so that I don't have to implement ARIA and keyboard navigation myself.
3. As a developer, I want design tokens available as CSS custom properties, so that I can use them in any styling context.
4. As a developer, I want design tokens available as TypeScript constants, so that I get autocomplete and type safety in JS/TS code.
5. As a developer, I want to install `@kkt/tokens` independently of any framework adapter, so that I can use tokens in non-React projects.
6. As a developer, I want a consistent API across all `@kkt/*` adapter packages, so that switching frameworks doesn't require relearning the component model.
7. As a designer, I want a Storybook with all components and their variants, so that I can review the visual state of the system without running code.
8. As a designer, I want Chromatic preview URLs on every PR, so that I can review visual changes before they are merged.
9. As a contributor, I want to add a changeset file to my PR, so that versioning and changelog generation is handled automatically on merge.
10. As a contributor, I want CI to run lint, build, and visual tests on every PR, so that I get fast feedback before requesting review.
11. As a maintainer, I want Chromatic to block merges when visual regressions are detected, so that unintended UI changes don't land silently.
12. As a maintainer, I want packages published to npm automatically when a Version Packages PR is merged, so that releases don't require manual intervention.
13. As a developer, I want to use the Button component in its default, hover, focus, disabled, and loading states, so that all interactive states are covered without custom state management.
14. As a developer, I want to use the Input component with error, placeholder, and helper text states, so that form feedback is handled consistently.
15. As a developer, I want to use the Badge component with semantic color variants, so that status indicators are visually consistent.
16. As a developer, I want to use the Card component as a composable container, so that I can group content with consistent spacing and elevation.
17. As a developer, I want to use the Modal component with focus trap and Escape key dismissal, so that accessibility is handled without extra code.
18. As a developer, I want typography tokens (font size, weight, line height) exposed as CSS custom properties, so that text styling is consistent across the system.
19. As a developer, I want spacing tokens as CSS custom properties, so that layout spacing is consistent without magic numbers.
20. As a developer, I want color tokens with semantic aliases (e.g. `--color-background-danger`), so that theme changes propagate without touching component code.
21. As a future maintainer, I want to add a `@kkt/vue` adapter package to the monorepo, so that the system can serve Vue projects without duplicating tokens or core logic.
22. As a developer, I want every component to be keyboard-navigable, so that the system meets WCAG 2.1 AA without additional work.
23. As a developer, I want every interactive component to have visible focus indicators, so that keyboard users can track their position.
24. As a developer, I want components to ship with correct ARIA roles and labels, so that screen reader users get meaningful announcements.
25. As a developer, I want vanilla-extract styles to produce zero-runtime CSS, so that components don't add JS bundle overhead at runtime.

---

## Implementation Decisions

### Monorepo Structure
- Turborepo manages the monorepo with shared `build`, `lint`, and `test` pipeline tasks.
- Package layout:
  ```
  packages/
    tokens/     → @kkt/tokens
    core/       → @kkt/core
    react/      → @kkt/react
  docs/         → shared Storybook (not published to npm)
  ```

### Design Tokens (`@kkt/tokens`)
- Tokens are defined in JSON/YAML and processed by **Style Dictionary**.
- Outputs: CSS custom properties (for runtime use), TypeScript constants (for type-safe JS use).
- Token categories: color (with semantic aliases), spacing, typography (size, weight, line-height), border radius, shadow, z-index.
- All adapter packages consume tokens from `@kkt/tokens` — no hardcoded values in components.

### Core Package (`@kkt/core`)
- Framework-agnostic TypeScript: shared types, utility functions, and style contracts.
- Does not depend on any rendering framework.
- Exports style contracts that adapter packages implement with vanilla-extract.

### React Adapter (`@kkt/react`)
- Components built from scratch — no headless library wrapping — to develop deep accessibility knowledge.
- Styled with **vanilla-extract** (zero-runtime CSS-in-JS, TypeScript-typed).
- Each component implements its own ARIA roles, keyboard handling, and focus management manually.
- v1 primitive components: Button, Input, Badge, Card, Modal, Typography.

### Storybook (`docs/`)
- Single shared Storybook at monorepo root imports from all adapter packages.
- One deployment URL for stakeholders; one Chromatic target for visual testing.
- Every component has stories for all variants and interactive states.
- Interaction tests written with Storybook `play()` functions for dynamic behavior (hover, focus, error, disabled).

### Visual Testing
- **Chromatic** runs on every PR: snapshot all component stories + run interaction tests.
- PR preview URL generated per PR for async design review.
- Main branch build acts as the accepted baseline.
- Visual regressions block merge until approved in Chromatic.

### CI/CD Pipeline (GitHub Actions)
- **PR pipeline:** lint → build tokens → build packages → build Storybook → Chromatic visual tests.
- **Main pipeline:** same steps + Changesets version check.
- **Release pipeline:** triggered by merging a Changesets "Version Packages" PR → publishes all changed packages to npm.

### Versioning and Publishing
- **Changesets** manages versioning across all packages.
- Contributors add a `.changeset/*.md` file per PR describing the change type (patch/minor/major).
- CI accumulates changesets and opens a "Version Packages" PR.
- Merging that PR triggers automated npm publish via GitHub Actions.
- All packages published under the `@kkt` npm scope.

### Accessibility Approach
- All components implement ARIA roles, labels, and properties manually (learning-oriented, no Radix/Ark).
- Keyboard navigation implemented per WAI-ARIA Authoring Practices (e.g. roving tabindex for groups, focus trap for Modal).
- Focus indicators styled via vanilla-extract using `:focus-visible`.
- Accessibility tested via Storybook interaction tests and manual keyboard testing during development.

---

## Testing Decisions

**What makes a good test:**  
Test external behavior — what a consumer observes — not implementation details. For components, test rendered output, keyboard interaction, and ARIA attribute correctness. Do not test internal state or CSS class names.

**Modules to test:**

| Module | Test type | What to cover |
|--------|-----------|---------------|
| `@kkt/tokens` | Unit | Style Dictionary output matches expected CSS custom properties and TS constants |
| `@kkt/core` | Unit | Utility functions, type contracts |
| `@kkt/react` components | Storybook interaction (`play()`) | Render all variants, keyboard navigation, focus management, ARIA attributes, error states |
| Visual regression | Chromatic snapshots | All story states across all components |

**No prior art** — this is a greenfield repo. The first tests written establish the patterns.

---

## Out of Scope

- Vue, Angular, or other framework adapters (deferred to post-v1).
- Figma token sync or Figma plugin integration.
- Theming / dark mode (tokens will be structured to support it, but switching is not v1).
- Data-heavy components: data tables, date pickers, rich text editors, charts.
- Icon library.
- RTL (right-to-left) language support.
- Server-side rendering optimizations beyond what vanilla-extract provides by default.
- A documentation site beyond Storybook (no dedicated marketing/docs site in v1).

---

## Further Notes

- The core-agnostic architecture (tokens → core → adapters) is the primary long-term bet. Keep the React adapter thin — logic and contracts belong in `core` or `tokens`.
- Building a11y from scratch is intentional for learning. Expect iteration — WAI-ARIA patterns are well-documented in the ARIA Authoring Practices Guide.
- Chromatic requires a project token stored as a GitHub Actions secret (`CHROMATIC_PROJECT_TOKEN`).
- npm publishing requires an `NPM_TOKEN` secret with publish rights to the `@kkt` scope.
- Turborepo remote caching (Vercel) can be added later to speed up CI builds.
