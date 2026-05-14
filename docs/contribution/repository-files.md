---
title: Mandatory Repository Files
sidebar_position: 9
description: Required governance and onboarding files that must exist in every public Astrea-EIP repository.
---

# Mandatory Repository Files

## Purpose

This page defines the minimum file contract that every public Astrea-EIP repository must satisfy.

## Rules

Every public repository must contain:

- `README.md`
- `CONTRIBUTING.md`
- `LICENSE`
- `.github/CODEOWNERS`
- `.github/ISSUE_TEMPLATE/`
- `.github/pull_request_template.md`

Repositories that own technical or product documentation to be synchronized must also contain:

- `docs/`

## File roles

### `README.md`

Describes the repository purpose, local setup, and entry points.

### `CONTRIBUTING.md`

Provides repository-specific contribution notes and links back to the central handbook for shared rules.

### `LICENSE`

Defines the legal license for that public repository.
A license file in `docs` does not replace local license files.

### `CODEOWNERS`

Defines review ownership and ensures the right maintainers are requested.

### GitHub templates

Issue and pull request templates standardize intake quality.

## Centralized vs local ownership

- The central handbook defines the rule that these files are required.
- Each repository owns its own concrete file contents.

## Validation checklist

- The repository contains every mandatory governance file.
- `CONTRIBUTING.md` points to the handbook for global rules.
- `docs/` exists when documentation is expected to sync.
