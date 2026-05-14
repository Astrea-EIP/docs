---
title: Issues
sidebar_position: 5
description: Issue types, scoping rules, and splitting guidance for Astrea-EIP work items.
---

# Issues

## Purpose

This page defines how work must be represented in GitHub issues.

## Rules

- Every pull request must be linked to exactly one issue.
- Every issue must represent one clear unit of work.
- Large features must be split into smaller technical tasks when implementation spans multiple steps.

## Issue types

### Feature

A user-facing or product-facing capability.

### Bug

A defect that causes incorrect behavior.

### Task

A concrete technical unit of work required to deliver or support a feature.

### Spike

A short investigation used to reduce uncertainty before implementation.

## Procedure

1. Define the outcome.
2. Decide whether it is a feature, bug, task, or spike.
3. Scope the issue so that one pull request can deliver it.
4. Link related issues when a larger initiative is split.

## Examples

Good split:

- Feature: authentication system
- Task: create login API
- Task: implement login form
- Task: add JWT validation

Bad split:

- Feature: everything related to authentication and deployment

## Validation checklist

- The issue has one clear objective.
- The issue type is correct.
- The issue is small enough for one focused pull request.
