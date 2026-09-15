---
title: Project Automation
sidebar_position: 3
description: Automatic GitHub Project card movement triggered by issue and pull request events.
---

# Project Automation

## Purpose

This page defines the workflow that keeps the org-level GitHub Project board in sync with issue and pull request state, without manual card moves.

## Triggers

| Event | Result |
| --- | --- |
| Issue opened | Card added to the project, `Status` set to `Todo` |
| Issue assigned | `Status` set to `In Progress` |
| Pull request review requested | The issue closed by the PR (via `Closes #...`) has its `Status` set to `In Review` |

## Scope

- Runs on `api-back`, `app-mobile`, `app-web`, and `core-moteur`.
- Not present on `deploy-orchestration` or `docs` — these repos don't track feature work on the board the same way.
- Uses the `PROJECT_TOKEN` secret (a PAT with project scope) to call `gh project` commands, since the default `GITHUB_TOKEN` cannot write to org-level Projects.

## Safeguards

- The pull request handler is a no-op when no linked issue is found (`Closes #...` absent).
- No custom `permissions:` block is declared — the workflow only uses `PROJECT_TOKEN`, not `GITHUB_TOKEN` write access.
