---
title: docs
sidebar_position: 6
description: Ownership, accepted changes, and documentation expectations for the central documentation repository.
---

# `docs`

## Purpose

`docs` is the central engineering handbook and aggregated documentation portal for Astrea-EIP.

## Rules

- This repository is the official source of truth for organization-wide engineering standards.
- It also hosts synchronized documentation coming from other repositories.
- It must not contain application source code or deployment state.
- Navigation and governance consistency are the responsibility of this repository.

## Accepted changes

- handbook pages for architecture, contribution, workflows, and operations
- Docusaurus configuration and navigation
- synchronized documentation from source repositories
- documentation quality, consistency, and discoverability improvements

## Forbidden changes

- business logic from application repositories
- environment promotion state
- repository-local runtime implementation details as the primary source of truth

## Local documentation expectations

This repository must maintain:

- a project-specific `README.md`
- Docusaurus configuration and sidebar
- the central handbook under `docs/docs`
- contribution guidance for documentation maintainers

## Related workflows

- Docusaurus build and validation
- synchronized documentation integration
- handbook maintenance through pull requests
