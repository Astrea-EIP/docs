---
title: Pull Requests
sidebar_position: 6
description: Required content, blocking conditions, and merge rules for Astrea-EIP pull requests.
---

# Pull Requests

## Purpose

This page defines what a pull request must contain before it can be reviewed and merged.

## Rules

- Every pull request must be linked to one issue.
- One pull request must deliver one issue.
- CI must pass before merge.
- Merge commits are mandatory; squash merges are not the default strategy.
- A pull request that changes behavior must include tests or an explicit explanation.

## Required pull request content

A pull request must include:

- the linked issue reference
- a short description of the delivered change
- the repository impact
- testing or validation evidence
- documentation impact

## Author checklist

- The branch name follows the standard.
- Commits follow Conventional Commits.
- CI is green.
- Documentation is updated when needed.
- The pull request closes exactly one issue.

## Blocking conditions

A pull request must not be merged when:

- CI is failing
- the issue link is missing
- the scope is larger than the linked issue
- required documentation is missing
- review feedback flagged as blocking is unresolved

## Examples

A compliant pull request should state:

- what changed
- why it changed
- how it was validated
- whether documentation changed

## Validation checklist

- The pull request is traceable to one issue.
- Reviewers can understand the change without reading the full branch history.
- Merge can happen without weakening `main` stability.
