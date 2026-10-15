# Astrea design tokens

`tokens.json` est la représentation agnostique des fondations de la page `10 - Foundations` du fichier Figma Astrea.

Les fichiers `generated/astrea.tokens.css` et `generated/astrea_tokens.dart` sont produits par :

```bash
node design-tokens/generate.mjs
```

La validation des paires de contraste se lance avec :

```bash
node design-tokens/validate.mjs
```

Les applications consomment ces sorties dans leur propre dépôt :

- `app-web/src/styles/tokens.css`
- `app-mobile/lib/core/design_tokens.dart`

Une synchronisation doit régénérer les deux fichiers. Les valeurs ne doivent pas être modifiées directement dans les sorties générées.

## Procédure de mise à jour

Lorsqu'une fondation change dans Figma :

1. Mettre à jour `tokens.json` avec les valeurs validées de `10 - Foundations`.
2. Lancer `pnpm tokens:validate`.
3. Lancer `pnpm tokens:generate`.
4. Copier `generated/astrea.tokens.css` dans `app-web/src/styles/tokens.css`.
5. Copier `generated/astrea_tokens.dart` dans `app-mobile/lib/core/design_tokens.dart`.
6. Vérifier que les sorties sont identiques aux fichiers synchronisés.
7. Lancer les validations locales des trois dépôts.
8. Ouvrir les PR liées au même ticket.

Les PR `app-web` et `app-mobile` doivent indiquer la source utilisée dans leur description :

```text
Design tokens source: docs@<commit-or-tag>
```

Le commit ou tag correspond à la version de `tokens.json` utilisée pour générer les sorties.

## Règles d'usage

- `color/border` est réservé aux séparateurs et bordures décoratives.
- `color/border-strong` est utilisé pour les champs, focus et composants interactifs.
- `color/primary` et `color/accent` sont utilisés comme fonds.
- `color/primary-strong` et `color/accent-strong` sont utilisés pour le texte, les icônes et les marqueurs.
- Les textes exigent un contraste minimal de `4,5:1`.
- Les bordures et composants graphiques exigent un contraste minimal de `3:1`.

## Polices

Les applications embarquent localement les graisses suivantes :

- Montserrat : `400`, `600`, `700` ;
- Inter : `400`, `600`, `700`.

Les fichiers sont distribués sous la licence SIL Open Font License. Chaque dépôt applicatif conserve la notice `OFL.txt` avec ses fichiers de police.
