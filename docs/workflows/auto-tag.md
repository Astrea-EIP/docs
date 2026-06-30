---
title: Auto-Tagging
sidebar_position: 2
description: Semantic version bump rules, first tag handling, and safeguards for merge-triggered tag generation.
---

# Auto-Tagging

## Purpose

This page defines the standard semantic tagging workflow used after pull requests are merged.

## Rules

- Auto-tagging runs only on pushes to `main` after a merge.
- The workflow reads commit subjects only.
- Commit bodies are ignored to avoid false positives.
- The first tag is `v0.0.0` when no release tag exists.
- The workflow must check for existing tags before creating a new one.

## Bump rules

| Commit subject match | Result |
| --- | --- |
| `type!:` | Major bump |
| `feat(...)` or `feat:` | Minor bump |
| `fix(...)` or `fix:` | Patch bump |
| otherwise | No version bump |

## Procedure

1. Fetch all tags.
2. Determine the latest release tag, or default to `v0.0.0` when none exists.
3. Read commit subjects since the latest tag.
4. Compute the highest required bump.
5. Calculate the next semantic version.
6. Abort if the computed tag already exists.
7. Create the new tag.

## Safeguards

- Avoid verbose logs; print only the computed decision and key context.
- Ignore commit bodies entirely.
- Use full tag fetch to avoid stale calculations.
- Fail explicitly on collision rather than attempting unsafe recovery.

## Validation checklist

- The first release works without manual tag bootstrapping.
- Breaking changes are detected only through the commit header `!` marker.
- The workflow does not create duplicate tags.
