---
title: Commit Messages
sidebar_position: 4
description: Mandatory Conventional Commit rules used for quality, traceability, and semantic version tagging.
---

# Commit Messages

## Purpose

This page defines the mandatory commit format used across Astrea-EIP.

## Rules

- All commits merged into `main` must follow Conventional Commits.
- Commit headers are the only source used for release bump detection.
- The `!` marker in the header indicates a breaking change.
- Commit messages must be explicit and scoped when possible.

## Allowed types

- `feat`
- `fix`
- `docs`
- `refactor`
- `test`
- `chore`

## Format

```text
type(scope): short description
type!: short description
type(scope)!: short description
```

## Examples

Valid messages:

- `feat(auth): add refresh token endpoint`
- `fix(web): handle missing profile picture`
- `docs(handbook): clarify PR evidence requirements`
- `refactor(engine)!: replace route score contract`

Invalid messages:

- `update login`
- `bug fix`
- `WIP`
- `feat add auth`

## Link to auto-tagging

- `type!:` triggers a major bump.
- `feat:` triggers a minor bump.
- `fix:` triggers a patch bump.
- Commit bodies are ignored for bump detection.

## Validation checklist

- The commit uses an allowed type.
- The header is explicit.
- The scope is present when it improves clarity.
- Breaking changes use `!` in the header.
