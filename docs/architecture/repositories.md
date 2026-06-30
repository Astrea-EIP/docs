---
title: Repository Boundaries
sidebar_position: 2
description: Ownership rules, allowed changes, and boundary examples for each Astrea-EIP repository.
---

# Repository Boundaries

## Purpose

This page defines what belongs in each repository and what must stay out of it.
It is the reference to use before creating an issue, branch, or pull request.

## Rules

- Open work in the repository that owns the concern.
- Do not spread one change across multiple repositories unless the change is inherently cross-repository.
- Use repository-local documentation for implementation details and this handbook for shared rules.
- If a change affects multiple repositories, split it into one issue and one pull request per repository.

## Ownership matrix

| Repository | Owns | Must not contain |
| --- | --- | --- |
| `app-web` | Web UI, Angular views, web-specific integration | Backend business logic, deployment orchestration |
| `app-mobile` | Mobile UI and device-specific flows | Backend logic, environment state |
| `api-back` | API contracts, controllers, services, persistence access | Frontend code, deployment state |
| `core-moteur` | Domain engine, calculations, core business rules | UI code, release orchestration |
| `deploy-orchestration` | Environment files, validation scripts, promotion flow | Business logic, application feature code |
| `docs` | Handbook, aggregated docs, governance standards | Product code, deployment state |

## Procedure

When deciding where to work:

1. Identify the primary runtime responsibility of the change.
2. Check whether the change modifies user-facing behavior, API behavior, engine rules, environment state, or documentation governance.
3. Create the issue in the owning repository.
4. If more than one repository is involved, split the work into linked issues and pull requests.

## Examples

Correct scoping:

- Add JWT validation rules in `api-back`.
- Add a new mobile settings screen in `app-mobile`.
- Update release tags in `deploy-orchestration`.
- Add contribution standards in `docs`.

Incorrect scoping:

- Put `README` governance rules only in `app-web`.
- Change production environment versions in `api-back`.
- Store domain computation logic in deployment scripts.

## Validation checklist

- The issue is opened in the owning repository.
- The pull request modifies only the repository that owns the concern.
- Cross-repository work is explicitly split and linked.
