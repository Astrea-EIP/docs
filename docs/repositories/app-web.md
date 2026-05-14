---
title: app-web
sidebar_position: 1
description: Ownership, accepted changes, and documentation expectations for the Angular web frontend repository.
---

# `app-web`

## Purpose

`app-web` owns the Astrea web frontend implemented with Angular and `pnpm`.

## Rules

- Web UI, routing, state management, and browser-side integrations belong here.
- Backend business logic must not be implemented here.
- CI in this repository must validate linting, type checking, tests, and build.

## Accepted changes

- Angular pages and components
- Web-specific API integration
- Frontend tests
- Frontend build and CI adjustments
- Local repository documentation for web setup and architecture

## Forbidden changes

- Backend domain rules
- Deployment environment version state
- Engine-only business calculations that belong in `core-moteur`

## Local documentation expectations

`app-web` should maintain at least:

- `README.md`
- `CONTRIBUTING.md`
- `LICENSE`
- `docs/index.md`
- `docs/setup.md`
- `docs/architecture.md`

## Related workflows

- CI and pull request validation
- merge-triggered semantic tagging
- documentation sync on `docs/**`
