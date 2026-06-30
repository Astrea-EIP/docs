---
title: Continuous Integration
sidebar_position: 1
description: Required CI checks, branch protection expectations, and failure handling rules.
---

# Continuous Integration

## Purpose

This page defines the minimum CI requirements that protect `main` and maintain delivery quality.

## Rules

- CI is mandatory for every pull request.
- Required checks must block merges when they fail.
- `main` must never accept changes that fail required validation.
- CI must remain focused, reliable, and fast enough for normal team usage.

## Required checks

Application repositories should require:

- lint
- type check
- tests
- build

Additional checks may be added when they provide concrete value, such as dependency review or targeted integration tests.

## Branch protection expectations

- direct push to `main` is disabled
- required status checks must pass before merge
- at least one review is required
- the branch should be up to date before merge when protection rules require it

## Failure handling

- Fix the pull request before merge when a required check fails.
- Do not bypass CI for normal development work.
- Treat flaky required checks as infrastructure defects that must be corrected.

## Validation checklist

- Every source repository has a blocking CI workflow.
- Required checks are documented and enforceable.
- `main` remains stable because CI gates merges.
