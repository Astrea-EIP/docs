---
title: Design tokens
sidebar_position: 1
description: Source and synchronization of Astrea's shared visual foundations.
---

# Shared design tokens

Astrea's visual foundations are defined in the `10 - Foundations` Figma page and represented in [`design-tokens/tokens.json`](https://github.com/Astrea-EIP/docs/blob/main/design-tokens/tokens.json).

The JSON is the source consumed by the generated outputs:

- CSS for `app-web`
- Dart for `app-mobile`

Generated outputs must not be edited manually. An update starts in Figma, then updates `tokens.json`, regenerates the outputs, and synchronizes both application repositories.

## Synchronization procedure

After an approved change in Figma:

1. Update `design-tokens/tokens.json`.
2. Run `pnpm tokens:validate`.
3. Run `pnpm tokens:generate`.
4. Synchronize `design-tokens/generated/astrea.tokens.css` with `app-web/src/styles/tokens.css`.
5. Synchronize `design-tokens/generated/astrea_tokens.dart` with `app-mobile/lib/core/design_tokens.dart`.
6. Validate all three repositories with their usual local commands.
7. Open one pull request per repository, all linked to the same issue.

The Web and Mobile pull requests must state the commit or tag of the source used:

```text
Design tokens source: docs@<commit-or-tag>
```

The `docs` repository CI validates contrast ratios and fails if generation modifies the versioned outputs.

## Accessibility

- Text must reach `4.5:1`.
- Components and borders must reach `3:1`.
- `color/border` is reserved for separators and decorative borders.
- `color/border-strong` is reserved for fields, focus states, and interactive components.

Figma values that fail when used outside their intended context remain available, but their usage must follow these rules.

## Fonts

`app-web` and `app-mobile` bundle Montserrat and Inter locally, with weights `400`, `600`, and `700`. The files are distributed under the SIL Open Font License; `OFL.txt` notices are kept in each application repository.
