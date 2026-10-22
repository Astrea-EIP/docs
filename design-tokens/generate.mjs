import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const tokens = JSON.parse(await readFile(resolve(root, 'tokens.json'), 'utf8'));
const outputDirectory = resolve(root, 'generated');

const cssName = (name) => name.replace(/[^a-z0-9]+/gi, '-').toLowerCase();
const dartName = (name, numericPrefix = 'value') => {
  const identifier = name.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
  return /^[0-9]/.test(identifier) ? `${numericPrefix}${identifier}` : identifier;
};
const dartColor = (value) => `0xFF${value.slice(1)}`;

const css = `:root {
${Object.entries(tokens.color).map(([name, value]) => `  --color-${cssName(name)}: ${value.toLowerCase()};`).join('\n')}

  --font-family-heading: '${tokens.font.heading}', sans-serif;
  --font-family-body: '${tokens.font.body}', sans-serif;
${Object.entries(tokens.type).flatMap(([name, value]) => [
  `  --font-size-${cssName(name)}: ${value['font-size']}px;`,
  `  --line-height-${cssName(name)}: ${value['line-height']}px;`
]).join('\n')}
${Object.entries(tokens.spacing).map(([name, value]) => `  --spacing-${cssName(name)}: ${value}px;`).join('\n')}
}

.text-petit {
  font-family: var(--font-family-body);
  font-size: var(--font-size-petit);
  line-height: var(--line-height-petit);
}

.text-petit-gras {
  font-family: var(--font-family-body);
  font-size: var(--font-size-petit-gras);
  font-weight: 700;
  line-height: var(--line-height-petit-gras);
}

.text-titre {
  font-family: var(--font-family-heading);
  font-weight: 600;
}

.text-corps {
  font-family: var(--font-family-body);
}
`;

const dart = `import 'package:flutter/material.dart';

abstract final class AstreaColors {
${Object.entries(tokens.color).map(([name, value]) => `  static const ${dartName(name)} = Color(${dartColor(value)});`).join('\n')}
}

abstract final class AstreaTypography {
  static const heading = '${tokens.font.heading}';
  static const body = '${tokens.font.body}';
${Object.entries(tokens.type).map(([name, value]) => `  static const ${dartName(name)}FontSize = ${value['font-size']}.0;
  static const ${dartName(name)}LineHeight = ${value['line-height']}.0;`).join('\n')}
}

abstract final class AstreaSpacing {
${Object.entries(tokens.spacing).map(([name, value]) => `  static const ${dartName(name, 'spacing')} = ${value}.0;`).join('\n')}
}
`;

await mkdir(outputDirectory, { recursive: true });
await writeFile(resolve(outputDirectory, 'astrea.tokens.css'), css);
await writeFile(resolve(outputDirectory, 'astrea_tokens.dart'), dart);
