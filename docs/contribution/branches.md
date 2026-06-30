---
title: Branch Naming
sidebar_position: 3
description: Mandatory branch naming patterns for Astrea-EIP work branches.
---

# Branch Naming

## Purpose

This page defines the mandatory naming convention for work branches.

## Rules

- Every branch name must start with a work type.
- Every branch name must include the issue identifier.
- The description must be short, lowercase, and hyphen-separated.

## Required patterns

- `feature/<issue-id>-<scope>-<desc>`
- `fix/<issue-id>-<scope>-<desc>`
- `chore/<issue-id>-<scope>-<desc>`

## Examples

Valid names:

- `feature/123-auth-login`
- `fix/248-api-timeout`
- `chore/301-ci-pnpm-cache`

Invalid names:

- `login-feature`
- `feature/auth-login`
- `bugfix-123`
- `feature/123`

## Validation checklist

- The branch starts with `feature`, `fix`, or `chore`.
- The issue identifier is present.
- The scope and description are readable and hyphenated.
