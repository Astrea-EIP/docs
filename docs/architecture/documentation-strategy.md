---
title: Documentation Strategy
sidebar_position: 5
description: Separation of responsibilities between the central handbook and repository-local documentation.
---

# Documentation Strategy

## Purpose

This page defines where documentation must be written and how central and local documentation interact.

## Rules

- Cross-repository engineering rules belong in `docs`.
- Repository-specific technical and product documentation belongs in the owning repository.
- Synchronized documentation must originate from a local `docs/` directory in the source repository.
- Centralized content must not be manually edited in `docs` if it is generated from another repository.

## Documentation layers

### Central handbook in `docs`

Use the central handbook for:

- architecture and repository boundaries
- contribution rules
- CI, release, and orchestration standards
- organization-wide file requirements
- shared terminology and process definitions

### Local repository documentation

Use local repository documentation for:

- setup steps
- implementation details
- local architecture
- API or runtime specifics
- repository-specific runbooks

## Procedure

1. Write implementation details in the owning repository.
2. Write cross-cutting standards in the `docs` handbook.
3. Synchronize local documentation into the `docs` repository through the documented workflow.
4. Keep the handbook and local documentation aligned when standards evolve.

## Validation checklist

- A rule with organization-wide impact exists in `docs`.
- A technical detail with local scope exists in the owning repository.
- Synchronized content has a single authoring source.
