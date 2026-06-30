---
title: deploy-orchestration
sidebar_position: 5
description: Ownership, accepted changes, and documentation expectations for the deployment orchestration repository.
---

# `deploy-orchestration`

## Purpose

`deploy-orchestration` owns environment state, configuration validation, and promotion workflows for Astrea-EIP.

## Rules

- This repository does not contain business logic.
- Environment mappings and release references belong here.
- The only supported deployment version field is `version`.
- Validation scripts must verify referenced tags through the GitHub API.

## Accepted changes

- `preprod` and `prod` environment files
- validation scripts
- promotion scripts and workflows
- orchestration documentation

## Forbidden changes

- API, frontend, mobile, or engine feature code
- local business rules unrelated to environment state
- alternative environment reference models such as `ref`

## Local documentation expectations

`deploy-orchestration` should maintain at least:

- `README.md`
- `CONTRIBUTING.md`
- `LICENSE`
- `docs/index.md`
- `docs/environment-format.md`
- `docs/promotion.md`

## Related workflows

- environment validation on pull requests
- controlled preprod to prod promotion
- release version selection from application tags
