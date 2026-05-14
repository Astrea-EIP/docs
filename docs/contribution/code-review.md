---
title: Code Review
sidebar_position: 7
description: Reviewer responsibilities and minimum review checks for Astrea-EIP pull requests.
---

# Code Review

## Purpose

This page defines the minimum review quality bar for Astrea-EIP pull requests.

## Rules

- Review must focus on correctness, maintainability, and scope control.
- Blocking comments must identify a concrete defect, regression risk, or rule violation.
- Non-blocking comments should improve clarity or design without preventing merge.
- Reviewers must verify that repository boundaries are respected.

## Minimum review checks

Reviewers must verify:

- the change belongs in the repository
- the pull request matches the linked issue
- logic is correct and understandable
- tests and validation are sufficient
- documentation is updated when the change affects behavior or process
- no hidden breaking change is introduced without explicit versioning impact

## Blocking vs non-blocking feedback

Blocking feedback includes:

- incorrect behavior
- missing tests for a risky change
- violation of repository boundaries
- missing documentation required by the handbook
- CI failures

Non-blocking feedback includes:

- naming improvements
- optional refactors
- readability suggestions with no correctness impact

## Validation checklist

- At least one reviewer can explain why the change is safe to merge.
- Blocking comments are resolved before merge.
- Review history remains constructive and traceable.
