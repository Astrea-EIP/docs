---
title: Versioning and Releases
sidebar_position: 4
description: Semantic versioning, merge-triggered tags, and release responsibilities across repositories.
---

# Versioning and Releases

## Purpose

This page defines how Astrea-EIP versions repositories and when tags are created.

## Rules

- Every application repository uses independent semantic versioning.
- Tags are created only after a pull request is merged into `main`.
- The first release tag is `v0.0.0` when no previous tag exists.
- Breaking changes are detected from the commit header only through the `type!:` convention.
- Commit bodies are not parsed for version bumps.

## Version bump policy

| Commit header pattern | Version bump |
| --- | --- |
| `type!:` | Major |
| `feat(...)` or `feat:` | Minor |
| `fix(...)` or `fix:` | Patch |
| Any other type | No tag by default |

## Procedure

1. Merge a pull request into `main`.
2. Run CI on the merged commit.
3. Fetch the latest existing tag.
4. Collect commit subjects since the latest tag.
5. Compute the next semantic version.
6. Create the new tag if it does not already exist.

## Examples

Valid headers:

- `feat(auth): add session refresh`
- `fix(api): handle timeout on token validation`
- `refactor(engine)!: simplify route cost model`

Non-bumping headers by default:

- `docs(handbook): update branch naming`
- `chore(ci): adjust cache settings`

## Validation checklist

- Tags are created only on merged `main` commits.
- The algorithm handles the initial `v0.0.0` case.
- The workflow prevents collisions by checking whether the computed tag already exists.
- No commit body parsing is used for bump detection.
