---
title: core-moteur
sidebar_position: 4
description: Ownership, accepted changes, and documentation expectations for the engine and business logic repository.
---

# `core-moteur`

## Purpose

`core-moteur` owns the engine and core business computation logic of Astrea-EIP.

## Rules

- Domain computation and business logic belong here.
- UI code and deployment orchestration must not be implemented here.
- Engine changes must be tested and documented because they can affect multiple consumers.

## Accepted changes

- Calculation and decision logic
- domain services and shared computation rules
- engine tests and validation datasets
- engine architecture and setup documentation

## Forbidden changes

- frontend screens
- deployment state files
- handbook governance rules

## Local documentation expectations

`core-moteur` should maintain at least:

- `README.md`
- `CONTRIBUTING.md`
- `LICENSE`
- `docs/index.md`
- `docs/setup.md`
- `docs/architecture.md`

## Related workflows

- CI and review validation
- semantic release tagging
- local documentation, linked from the handbook's Repositories section
