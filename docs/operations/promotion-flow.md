---
title: Promotion Flow
sidebar_position: 4
description: Controlled promotion process from preprod to prod with validation and traceability requirements.
---

# Promotion Flow

## Purpose

This page defines the standard flow used to promote validated versions from preproduction to production.

## Rules

- Production promotion must be controlled and repeatable.
- Promotion must copy validated versions from `preprod` to `prod`.
- Production must not diverge from approved promotion history without explicit incident handling.

## Procedure

1. Confirm the desired versions are stable in `preprod`.
2. Open a pull request that copies the selected `version` values from `preprod` to `prod`.
3. Validate the resulting production configuration.
4. Merge the promotion change with full traceability.

## Validation checklist

- `prod` reflects a known good `preprod` state.
- Promotion is auditable through repository history.
- The process does not introduce manual version drift.
