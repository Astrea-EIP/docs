---
title: Preprod
sidebar_position: 2
description: Rules for introducing and validating versions in the preproduction environment.
---

# Preprod

## Purpose

This page defines how versions are introduced into the preproduction environment.

## Rules

- `preprod` is the first environment to receive new validated tags.
- Changes to `preprod` must go through pull requests.
- Every version referenced in `preprod` must already exist as a Git tag.

## Procedure

1. Select the application versions to validate.
2. Update `environments/preprod.yml` in `deploy-orchestration`.
3. Run validation checks.
4. Merge the pull request only after validation passes.

## Validation checklist

- `preprod` references only existing tags.
- The configuration matches the environment contract.
- The change remains traceable through pull request review.
