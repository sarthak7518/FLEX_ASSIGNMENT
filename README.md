# FlexPrice Frontend — Storybook

A small React component library themed for **FlexPrice** (usage-based billing /
pricing surface), authored as a frontend-intern take-home assignment.

## What's inside (16 components, 50+ stories)

**Foundations** — Button, Badge, Avatar, Input, Toggle, Spinner, ProgressBar,
Alert, Tooltip
**Pricing** — PriceTag, PlanCard, FeatureList, MetricCard
**Layout** — Card, Tabs, Modal, Pagination

Each component lives in `src/components/<Name>.jsx` paired with its `<Name>.css`,
and is documented with `src/stories/<Name>.stories.jsx`. An `Introduction.mdx`
welcome page ships as the landing route in Storybook.

## Local development

```bash
yarn install
yarn storybook       # http://localhost:6006
yarn build-storybook # static site → ./storybook-static
```

## Deployment in this environment

The container's existing supervisor `frontend` program serves a static build of
this Storybook on port 3000, so it is reachable at the public preview URL of
the container (`REACT_APP_BACKEND_URL`).

Build flow:

1. `yarn --cwd /app/flexprice-front build-storybook`
2. The `/app/frontend` package serves `/app/flexprice-front/storybook-static`
   via `serve -s … -l 3000`.

## Design tokens

Defined in `src/styles/theme.css`:

| Token            | Value     |
|------------------|-----------|
| `--flex-bg`      | `#f7f7f5` |
| `--flex-ink`     | `#0b0c0f` |
| `--flex-accent`  | `#ff5b1f` |
| `--flex-mint`    | `#c9f27a` |
| `--flex-violet`  | `#5b3df5` |

Display: **Fraunces** · UI: **Inter Tight** · Mono: **DM Mono**
