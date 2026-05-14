---
title: Architecture Overview
sidebar_position: 1
description: System-level overview of the Astrea-EIP repository architecture and core engineering constraints.
---

# Architecture Overview

## Purpose

This page defines the repository-level architecture of Astrea-EIP.
Its goal is to make repository ownership explicit and to prevent cross-repository drift.

## Rules

- `main` is a protected branch in every source repository.
- No direct push to `main` is allowed.
- All code changes must go through a pull request with mandatory CI.
- Each team works in the repository that owns its concern.
- `deploy-orchestration` stores deployment state and promotion logic only.
- Business logic must never be added to `deploy-orchestration`.

## Repository model

Astrea-EIP is organized as several public repositories inside the same GitHub organization.
Each repository has a narrow responsibility boundary and an independent delivery lifecycle.

| Repository | Primary role |
| --- | --- |
| `app-web` | Web frontend implemented with Angular and `pnpm` |
| `app-mobile` | Mobile application |
| `api-back` | Main backend API |
| `core-moteur` | Engine and business computation logic |
| `deploy-orchestration` | Environment state, validation, and promotion |
| `docs` | Central engineering handbook and aggregated documentation |
| Epitech mirror | Mirror only, never the source of truth |

## Engineering constraints

- Repository ownership must remain clear at all times.
- CI must block merges when required checks fail.
- `main` must remain stable and releasable.
- Documentation is authored locally in each repository and centralized through documented sync workflows.

## Examples

Valid repository placement:

- A new Angular route belongs in `app-web`.
- A new authentication endpoint belongs in `api-back`.
- A new routing heuristic belongs in `core-moteur`.
- A version promotion from preprod to prod belongs in `deploy-orchestration`.

Invalid repository placement:

- Adding API business rules in `deploy-orchestration`
- Defining frontend feature code in `docs`
- Treating the Epitech mirror as a delivery target or source of truth

## Validation checklist

- Every repository has one clear mission.
- No deployment repository contains business logic.
- `main` stability is protected by pull requests and CI.
- Documentation governance is centralized while technical details remain local.
