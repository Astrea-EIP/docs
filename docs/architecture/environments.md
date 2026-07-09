---
title: Environments
sidebar_position: 3
description: Roles of preprod and prod, and how deployment state is represented in Astrea-EIP.
---

# Environments

## Purpose

This page defines how Astrea-EIP models deployment environments and where deployed state is tracked.

## Rules

- Environment state is defined in `deploy-orchestration`.
- `preprod` and `prod` must be represented by explicit configuration files.
- Deployed versions must be stored as Git tags under the `version` field.
- Environment files are configuration state, not application code.

## Environment model

Astrea-EIP currently uses two main environments:

- `preprod`: integration and validation environment before production promotion
- `prod`: stable production environment

The deployed state of each environment is described through service-to-version mappings.
This state is the operational source of truth for what is deployed.

## Procedure

1. Application repositories generate release tags after successful merges to `main`.
2. `deploy-orchestration` references those tags through the `version` field.
3. `preprod` is updated first.
4. `prod` is updated through a controlled promotion process.

## Examples

Example environment shape:

```yaml
environment: preprod
services:
  api-back:
    version: v1.4.2
  core-moteur:
    version: v0.9.1
  app-web:
    version: v2.1.0
```

Invalid shape:

```yaml
services:
  api-back:
    ref: main
```

## Local development

Local development is not a deployed environment and has no entry in
`deploy-orchestration`. There is a single reference branch, `main`; `preprod`
and `prod` are deployment targets pinned to tags, not branches.

Each developer runs their own disposable local data (for example a local
MongoDB, seeded from a repo-local `docker-compose.yml`) instead of sharing a
"dev" server. This gives realistic, prod-like data to develop against without
risking `preprod`, which must stay stable and always ready for promotion. See
the relevant repository's `CONTRIBUTING.md` for its local setup.

## Validation checklist

- Environment files use `version`, never `ref`.
- Every referenced version points to an existing Git tag.
- `prod` changes follow the promotion process.
