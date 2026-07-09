---
title: app-mobile
sidebar_position: 2
description: Ownership, accepted changes, and documentation expectations for the mobile application repository.
---

# `app-mobile`

## Purpose

`app-mobile` owns the Astrea mobile application and platform-specific mobile delivery concerns.

## Rules

- Mobile UI, navigation, and platform integration belong here.
- Backend services and deployment state must not be implemented here.
- Mobile-specific setup and run instructions must remain local to the repository.

## Accepted changes

- Mobile features and screens
- Device-specific permissions and flows
- Mobile tests and build configuration
- Mobile documentation and onboarding notes

## Forbidden changes

- API business logic
- deployment environment mappings
- central contribution standards

## Local documentation expectations

`app-mobile` should maintain at least:

- `README.md`
- `CONTRIBUTING.md`
- `LICENSE`
- `docs/index.md`
- `docs/setup.md`
- `docs/architecture.md`

## Related workflows

- CI and review validation
- release tagging after merge to `main`
- local documentation, linked from the handbook's Repositories section
