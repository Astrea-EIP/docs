---
title: Documentation Synchronization
sidebar_position: 3
description: Source repository documentation sync contract, mapping, and long-term operating model.
---

# Documentation Synchronization

## Purpose

This page defines how repository-local documentation is synchronized into the central documentation portal.

## Rules

- Source repositories author their own technical documentation under `docs/`.
- Synchronization triggers on `docs/**` changes.
- The sync workflow requires a token with `contents: write` permission to update the central repository.
- The target operating model is an automated pull request into `docs`.

## Repository mapping

| Source repository | Destination section in `docs` |
| --- | --- |
| `api-back` | `backend` or repository-specific section |
| `app-web` | `web` or repository-specific section |
| `app-mobile` | `mobile` or repository-specific section |
| `core-moteur` | `engine` or repository-specific section |

## Procedure

1. Update documentation in the source repository.
2. Trigger the documentation sync workflow on `docs/**` changes.
3. Checkout the `docs` repository with the required credential.
4. Copy the source files into the mapped target location.
5. Commit only when content changed.
6. Prefer creating an automated pull request instead of pushing directly.

## Required secret

- `DOCS_TOKEN` in each source repository

## Validation checklist

- The source repository keeps the authoring source.
- The central portal stays aligned without manual copy and paste.
- Sync credentials are limited to the required scope.
