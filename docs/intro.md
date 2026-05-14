---
title: Astrea Engineering Handbook
sidebar_position: 1
description: Official source of truth for Astrea-EIP engineering standards, contribution rules, and delivery workflows.
---

# Astrea Engineering Handbook

## Purpose

This repository is the official source of truth for Astrea-EIP engineering standards.
It defines how repositories are structured, how contributions are delivered, how releases are produced, and how documentation is maintained.

## Rules

- The `docs` repository defines organization-wide engineering rules.
- Application repositories keep their own technical and product documentation under their local `docs/` directory.
- Every public repository must contain its own `README.md`, `CONTRIBUTING.md`, and `LICENSE` files.
- No repository may define contribution or release rules that contradict this handbook.

## Scope

This handbook covers:

- repository responsibilities and ownership boundaries
- contribution workflow from issue to merge
- commit, branch, and pull request standards
- CI, tagging, and release rules
- deployment orchestration responsibilities
- documentation governance and synchronization

## How to use this handbook

- Read the architecture section first to understand repository boundaries.
- Read the contribution section before opening an issue or a pull request.
- Read the workflows and operations sections before changing CI, releases, or deployment orchestration.
- Update the handbook whenever a cross-repository engineering rule changes.

## Validation checklist

A contributor should be able to answer all of the following after reading this handbook:

- Which repository owns the change I want to make?
- What branch name and commit format must I use?
- What is required for a pull request to be accepted?
- Which CI checks are blocking?
- When must I update documentation?
- How do tags, environments, and promotions work?
