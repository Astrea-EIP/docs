---
title: Design tokens
sidebar_position: 1
description: Source et synchronisation des fondations visuelles partagées par Astrea.
---

# Design tokens partagés

Les fondations visuelles Astrea sont définies dans le fichier Figma `10 - Foundations`, puis représentées dans [`design-tokens/tokens.json`](https://github.com/Astrea-EIP/docs/blob/main/design-tokens/tokens.json).

Le JSON est la source consommée par les sorties générées :

- CSS pour `app-web` ;
- Dart pour `app-mobile`.

Les sorties ne doivent pas être modifiées manuellement. Une mise à jour commence par Figma, puis met à jour `tokens.json`, régénère les sorties et synchronise les deux dépôts applicatifs.

## Procédure de synchronisation

Après une modification validée dans Figma :

1. Mettre à jour `design-tokens/tokens.json`.
2. Exécuter `pnpm tokens:validate`.
3. Exécuter `pnpm tokens:generate`.
4. Synchroniser `design-tokens/generated/astrea.tokens.css` avec `app-web/src/styles/tokens.css`.
5. Synchroniser `design-tokens/generated/astrea_tokens.dart` avec `app-mobile/lib/core/design_tokens.dart`.
6. Vérifier les trois dépôts avec leurs commandes locales habituelles.
7. Ouvrir une PR par dépôt, toutes liées au même ticket.

Les PR Web et Mobile doivent indiquer le commit ou tag de la source utilisée :

```text
Design tokens source: docs@<commit-or-tag>
```

La CI du dépôt `docs` vérifie les contrastes et échoue si la génération modifie les sorties versionnées.

## Accessibilité

- Le texte doit atteindre `4,5:1`.
- Les composants et bordures doivent atteindre `3:1`.
- `color/border` est réservé aux séparateurs et bordures décoratives.
- `color/border-strong` est réservé aux champs, états de focus et composants interactifs.

Les valeurs Figma qui échouent lorsqu'elles sont utilisées hors de leur contexte restent disponibles, mais leur usage doit respecter ces règles.

## Polices

`app-web` et `app-mobile` embarquent localement Montserrat et Inter, avec les graisses `400`, `600` et `700`. Les fichiers sont distribués sous la licence SIL Open Font License ; les notices `OFL.txt` sont conservées dans chaque dépôt applicatif.
