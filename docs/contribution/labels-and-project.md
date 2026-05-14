---
title: Labels and project
sidebar_position: 8
description: Shared labels and GitHub Project conventions.
---

# Labels and project

This page defines the shared GitHub labels and GitHub Project conventions used across the Astrea-EIP repositories.

The goal is to keep issues and pull requests consistent across:

- `app-web`
- `app-mobile`
- `api-back`
- `core-moteur`
- `deploy-orchestration`
- `docs`

Each issue should have at least:

- one `type:*` label
- one `area:*` label
- one `priority:*` label
- a matching `Priority` value in the GitHub Project when the issue is tracked there

## Labels

### Type labels

Type labels describe the nature of the work.

| Label | Usage |
|---|---|
| `type:feature` | New functionality or improvement to existing features. |
| `type:bug` | Something is broken or not working as expected. |
| `type:task` | Maintenance, configuration, CI/CD, or non-functional work. |
| `type:spike` | Research, exploration, or technical investigation. |
| `type:docs` | Documentation creation or updates. |

### Type label rules

`type:chore` is replaced by `type:task`.

`type:docs` is kept for documentation-specific work.

`type:refactor` is not part of the strict taxonomy. Use `type:task` for technical maintenance or `type:feature` when the refactor supports a functional change.

### Area labels

Area labels describe the affected product or technical domain.

| Label | Usage |
|---|---|
| `area:web` | Frontend web application. |
| `area:mobile` | Mobile application. |
| `area:backend` | Backend API and services. |
| `area:engine` | Core engine and business logic. |
| `area:devops` | Deployment, CI/CD, and orchestration. |
| `area:docs` | Project documentation and guides. |

`area:deploy` is replaced by `area:devops`.

### Priority labels

Priority labels must match the GitHub Project `Priority` field.

| Label | Project value | Usage |
|---|---|---|
| `priority:P0-critical` | `P0 - Critical` | Blocks production, CI/CD, or critical functionality. Must be fixed immediately. |
| `priority:P1-high` | `P1 - High` | Important issue that should be included in the current sprint. Impacts core features but is not blocking. |
| `priority:P2-medium` | `P2 - Medium` | Normal priority. Handled if time allows during the sprint. |
| `priority:P3-low` | `P3 - Low` | Low priority or long-term improvement. Can stay in backlog until scheduled. |

## GitHub Project fields

When an issue is tracked in the GitHub Project, the project fields should stay aligned with the repository labels.

Recommended fields:

| Field | Expected values |
|---|---|
| `Priority` | `P0 - Critical`, `P1 - High`, `P2 - Medium`, `P3 - Low` |
| `Status` | Project workflow status, for example `Backlog`, `Ready`, `In progress`, `In review`, `Done` |
| `Repository` | Source repository, for example `app-web`, `api-back`, or `docs` |
| `Area` | Web, Mobile, Backend, Engine, DevOps, or Docs |

The `Priority` project value and the `priority:*` label should describe the same level of urgency.

Example:

```txt
priority:P1-high
Priority: P1 - High
```

## Recommended label combinations

### Feature work

```txt
type:feature
area:web
priority:P2-medium
```

Use for planned product or technical improvements.

### Bug fix

```txt
type:bug
area:backend
priority:P1-high
```

Use for regressions, broken behavior, failing flows, or production-impacting issues.

### CI/CD or repository maintenance

```txt
type:task
area:devops
priority:P2-medium
```

Use for workflow changes, repository setup, automation, branch protection, or release tooling.

### Documentation update

```txt
type:docs
area:docs
priority:P3-low
```

Use for documentation pages, guides, onboarding notes, or repository documentation updates.

### Technical investigation

```txt
type:spike
area:engine
priority:P2-medium
```

Use when the expected output is research, validation, or a technical recommendation rather than direct implementation.

## Repository-specific areas

Each repository should use the shared area labels, but the default area depends on the repository.

| Repository | Default area |
|---|---|
| `app-web` | `area:web` |
| `app-mobile` | `area:mobile` |
| `api-back` | `area:backend` |
| `core-moteur` | `area:engine` |
| `deploy-orchestration` | `area:devops` |
| `docs` | `area:docs` |

Cross-repository issues may use several `area:*` labels when relevant.

## Label hygiene

Avoid creating near-duplicate labels.

Do not use:

```txt
type: chore
type:chore
type: refactor
type:refactor
area: deploy
area:deploy
priority:P0
priority:P1
priority:P2
```

Use instead:

```txt
type:task
area:devops
priority:P0-critical
priority:P1-high
priority:P2-medium
priority:P3-low
```

Labels should not contain spaces after the namespace separator.

Use:

```txt
type:bug
area:web
priority:P1-high
```

Do not use:

```txt
type: bug
area: web
priority: P1
```

## Issue template expectations

Issue templates should reference only labels from this taxonomy.

A feature issue should normally include:

```txt
type:feature
area:<area>
priority:<priority>
```

A bug issue should normally include:

```txt
type:bug
area:<area>
priority:<priority>
```

A task issue should normally include:

```txt
type:task
area:<area>
priority:<priority>
```

A documentation issue should normally include:

```txt
type:docs
area:docs
priority:<priority>
```

## Pull request expectations

Pull requests do not need to duplicate every issue label, but they should stay consistent with the linked issue.

When a PR closes an issue, the PR title, description, and linked issue should make the type and area of the change clear.

Examples:

```txt
feat(app-web): add onboarding page
fix(api-back): handle missing authentication token
chore(devops): add repository labels
docs: update contribution guide
```

## Automation expectations

Automation scripts may create or update labels, but they must preserve the taxonomy defined here.

Automation should:

- create missing labels
- update colors and descriptions when needed
- rename old labels when possible
- delete deprecated labels only when they are no longer needed

Deprecated labels should be removed or replaced before branch protection and strict project reporting are finalized.