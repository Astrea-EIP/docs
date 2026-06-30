---
title: Deploy Orchestration
sidebar_position: 1
description: Structure, validation model, and repository responsibility for deployment orchestration.
---

# Deploy Orchestration

## Purpose

This page defines the operational contract of the `deploy-orchestration` repository.

## Rules

- `deploy-orchestration` contains environment state, validation logic, and promotion logic only.
- The supported environment reference field is `version`.
- `ref` is deprecated and unsupported.
- Validation must confirm that referenced versions exist as Git tags.

## Repository structure

The repository should contain at least:

```text
environments/
  preprod.yml
  prod.yml
scripts/
  validate_env.py
  promote.py
```

## Environment contract

Each environment file should declare services and their Git tag versions.

```yaml
environment: prod
services:
  api-back:
    version: v1.4.2
```

## Validation checklist

- `version` is used consistently.
- Referenced tags exist.
- No business logic has been added to the repository.
