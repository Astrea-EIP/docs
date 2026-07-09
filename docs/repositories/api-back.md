---
title: api-back
sidebar_position: 3
description: Ownership, accepted changes, and documentation expectations for the main backend repository.
---

# `api-back`

## Purpose

`api-back` owns the main backend API and the service layer that exposes application capabilities.

## Rules

- API contracts, controllers, services, and persistence-facing components belong here.
- Frontend rendering concerns and deployment state must not be added here.
- Breaking API changes must be clearly documented and reflected in versioning.

## Accepted changes

- Controllers and services
- Authentication and authorization logic
- Persistence integration
- Backend tests and CI
- API and setup documentation

## Forbidden changes

- Angular or mobile UI logic
- deployed environment state
- engine logic that properly belongs in `core-moteur`

## Local documentation expectations

`api-back` should maintain at least:

- `README.md`
- `CONTRIBUTING.md`
- `LICENSE`
- `docs/index.md`
- `docs/setup.md`
- `docs/api.md`
- `docs/architecture.md`

## Engine dependency

`api-back` links against `AstreaEngine.dll`, built from `core-moteur`. The
exact version consumed is pinned in `engine-version.txt` at the repository
root, never a floating branch — this keeps CI, local builds, and the versions
declared in `deploy-orchestration` (`preprod`/`prod`) consistent with each
other. A scheduled workflow proposes a pull request whenever `core-moteur`
publishes a newer tag; bumping the pin is a reviewed merge, not an automatic
adoption. See `CONTRIBUTING.md` for the local build steps.

## Related workflows

- CI with lint, type checks, tests, and build
- semantic version tagging on merged `main`
- scheduled engine version check, proposing a pull request when `core-moteur` publishes a newer tag
- local documentation, linked from the handbook's Repositories section
