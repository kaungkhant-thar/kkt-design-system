# @kkt Design System

A framework-agnostic design system published as scoped npm packages under `@kkt/*`.

## Packages

| Package | Description |
|---------|-------------|
| `@kkt/tokens` | Design tokens — CSS custom properties and TypeScript constants |
| `@kkt/core` | Framework-agnostic types, utilities, and style contracts |
| `@kkt/react` | Accessible React components styled with vanilla-extract |
| `@kkt/docs` | Shared Storybook (not published to npm) |

## Local Development

### Prerequisites

- Node.js ≥ 20
- pnpm ≥ 9

### Setup

```bash
pnpm install
```

### Common commands

```bash
# Build all packages
pnpm build

# Run linting across all packages
pnpm lint

# Run tests across all packages
pnpm test
```

Turborepo automatically resolves the correct build order based on workspace dependencies.
