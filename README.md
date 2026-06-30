# Astrea Engineering Handbook

This repository hosts the central engineering handbook for the `Astrea-EIP` organization.
It is the official source of truth for cross-repository standards such as architecture, contribution workflow, CI, release tagging, deployment orchestration, and documentation governance.

## What belongs here

This repository owns:

- organization-wide engineering standards
- Docusaurus configuration and site navigation
- centralized handbook pages under `docs/`
- synchronized technical documentation imported from source repositories

This repository does not own:

- application source code
- business logic
- deployment runtime state
- repository-specific implementation details as the primary source of truth

## Local development

Use `pnpm` for local work.

```bash
pnpm install
pnpm start
```

Build the static site locally:

```bash
pnpm build
```

## Repository structure

```text
docs/
  architecture/
  repositories/
  contribution/
  workflows/
  operations/
  standards/
src/
static/
docusaurus.config.js
sidebars.js
```

## Documentation ownership model

- The `docs` repository defines shared engineering rules.
- Each source repository keeps its own local `README.md`, `CONTRIBUTING.md`, `LICENSE`, and technical `docs/` content.
- Technical documentation authored in source repositories may be synchronized into this portal through GitHub Actions.

## Updating the handbook

- Update this repository when a rule affects multiple repositories or teams.
- Update the source repository when the change is local to that repository.
- Keep handbook changes and workflow changes in the same pull request when they are directly related.

## Documentation synchronization

The long-term target model is an automated pull request into `docs` whenever synchronized content changes in a source repository.
Until then, any direct synchronization workflow must keep the source repository as the authoring source.
