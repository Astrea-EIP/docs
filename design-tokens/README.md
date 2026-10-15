# Astrea design tokens

`tokens.json` is the platform-agnostic representation of the foundations from the `10 - Foundations` page in the Astrea Figma file.

The `generated/astrea.tokens.css` and `generated/astrea_tokens.dart` files are produced by:

```bash
node design-tokens/generate.mjs
```

Contrast-pair validation is run with:

```bash
node design-tokens/validate.mjs
```

The applications consume these outputs in their own repositories:

- `app-web/src/styles/tokens.css`
- `app-mobile/lib/core/design_tokens.dart`

Synchronization must regenerate both files. Values must not be edited directly in generated outputs.

## Update procedure

When a foundation changes in Figma:

1. Update `tokens.json` with the approved values from `10 - Foundations`.
2. Run `pnpm tokens:validate`.
3. Run `pnpm tokens:generate`.
4. Copy `generated/astrea.tokens.css` to `app-web/src/styles/tokens.css`.
5. Copy `generated/astrea_tokens.dart` to `app-mobile/lib/core/design_tokens.dart`.
6. Verify that the outputs match the synchronized files.
7. Run the local validations for all three repositories.
8. Open the pull requests linked to the same issue.

The `app-web` and `app-mobile` pull requests must state the source used in their description:

```text
Design tokens source: docs@<commit-or-tag>
```

The commit or tag identifies the version of `tokens.json` used to generate the outputs.

## Usage rules

- `color/border` is reserved for separators and decorative borders.
- `color/border-strong` is used for fields, focus states, and interactive components.
- `color/primary` and `color/accent` are used as backgrounds.
- `color/primary-strong` and `color/accent-strong` are used for text, icons, and markers.
- Text must meet a minimum contrast ratio of `4.5:1`.
- Borders and graphical components must meet a minimum contrast ratio of `3:1`.

## Fonts

The applications bundle the following weights locally:

- Montserrat: `400`, `600`, `700`
- Inter: `400`, `600`, `700`

The files are distributed under the SIL Open Font License. Each application repository keeps the `OFL.txt` notice with its font files.
