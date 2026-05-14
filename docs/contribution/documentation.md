---
title: Documentation Rules
sidebar_position: 10
description: When documentation updates are mandatory and how local repository docs sync into the central handbook.
---

# Documentation Rules

## Purpose

This page defines when documentation must be updated and how local documentation is synchronized into the central portal.

## Rules

- Documentation must be updated whenever a change affects usage, architecture, workflow, or operations.
- Cross-repository rules belong in the central handbook.
- Repository-specific technical content belongs in the owning repository.
- Synchronized content must be authored locally first.

## When documentation updates are mandatory

Documentation updates are required when a change modifies:

- setup steps
- architecture or ownership boundaries
- API or runtime behavior visible to another team
- CI, release, or deployment processes
- contribution expectations

## Local repository structure

A repository that syncs documentation should maintain at least:

```text
docs/
  index.md
  setup.md
  architecture.md
```

Additional files such as `api.md`, `runbooks/`, or `decisions/` may be added where relevant.

## Sync model

1. Contributors update local `docs/` content in the source repository.
2. A GitHub Actions workflow triggers on `docs/**` changes.
3. The workflow copies approved content into the mapped section of the `docs` repository.
4. The long-term target model is an automated pull request into `docs`, not direct push.

## Validation checklist

- Documentation changes are part of the same pull request as the behavior change when required.
- The source repository remains the authoring source for synced technical content.
- The central handbook remains the source of truth for shared engineering rules.
