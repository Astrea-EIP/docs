---
title: Production
sidebar_position: 3
description: Rules for maintaining a stable production environment and restricting manual edits.
---

# Production

## Purpose

This page defines the stricter operational rules that apply to the production environment.

## Rules

- `prod` must remain stable and traceable.
- Free manual edits to production configuration are not allowed when a controlled promotion flow exists.
- Production versions must come from validated preprod state.

## Procedure

1. Validate candidate versions in `preprod`.
2. Run the production promotion flow.
3. Update `prod` only through the approved promotion mechanism.

## Validation checklist

- `prod` changes are traceable to validated preprod versions.
- Manual edits are avoided outside approved emergency procedures.
- The deployed state remains reproducible.
