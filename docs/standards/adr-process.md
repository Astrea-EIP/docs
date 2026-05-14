---
title: ADR Process
sidebar_position: 2
description: Minimum process for documenting architecture decisions that affect multiple repositories or teams.
---

# ADR Process

## Purpose

This page defines when and how Astrea-EIP should record architecture decision records.

## Rules

- Create an ADR when a decision affects multiple repositories, teams, or long-term engineering standards.
- ADRs must be concise, dated, and immutable once accepted, aside from status updates.
- The central `docs` repository is the preferred home for organization-wide ADRs.

## Minimum ADR format

An ADR should contain:

- title
- date
- status
- context
- decision
- consequences

## When an ADR is required

Examples include:

- choosing Angular for the web frontend
- adopting `pnpm`
- defining merge commit as the standard merge strategy
- standardizing auto-tag rules
- introducing a new deployment orchestration model

## Validation checklist

- The decision has organization-wide impact.
- The rationale is explicit.
- The consequences are clear for future contributors.
