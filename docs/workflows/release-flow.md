---
title: Release Flow
sidebar_position: 4
description: End-to-end relationship between pull request merges, tags, and environment version selection.
---

# Release Flow

## Purpose

This page explains how code moves from merged pull requests to tagged versions and then into environment configuration.

## Rules

- A repository becomes releasable only after a reviewed pull request is merged into `main`.
- Tags are generated from the merge result, not from feature branches.
- Environment files consume release tags, not branches or raw commit references.
- `deploy-orchestration` records which tagged versions are deployed.

## Procedure

1. Merge a pull request into `main`.
2. Run the merge-triggered CI workflow.
3. Generate the next semantic tag when the commit subjects require a release.
4. Update `preprod` in `deploy-orchestration` to point to the selected versions.
5. Validate environment configuration.
6. Promote validated versions to `prod` through the promotion flow.

## Validation checklist

- Releases are traceable from issue to pull request to tag.
- Environment files always reference valid repository tags.
- Production promotion happens from validated preprod state.
