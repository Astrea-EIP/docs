---
title: Git Workflow
sidebar_position: 2
description: Official workflow from issue creation to merge into a stable protected main branch.
---

# Git Workflow

## Purpose

This page defines the official Astrea-EIP delivery flow from issue creation to merge.

## Rules

- The workflow is `Issue -> Branch -> Pull Request -> Review -> Merge`.
- Direct pushes to `main` are forbidden.
- `main` must remain stable at all times.
- CI must pass before a pull request can be merged.
- Merge commits are the standard merge strategy.

## Procedure

1. Create or select an issue.
2. Create a dedicated branch from the current target base.
3. Implement only the work described by the issue.
4. Open a pull request linked to the issue.
5. Address review feedback.
6. Merge with a merge commit after approval and green CI.

## Examples

Valid flow:

- Issue `#123` describes a backend timeout bug.
- Branch `fix/123-api-timeout` is created.
- The pull request references `Closes #123`.
- CI passes.
- The pull request is reviewed and merged.

Invalid flow:

- Working directly on `main`
- Opening one pull request for multiple unrelated issues
- Merging with failing CI

## Validation checklist

- The pull request is linked to one issue.
- The branch is dedicated to one change.
- CI is green before merge.
- Merge history remains readable through merge commits.
