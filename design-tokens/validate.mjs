import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const tokens = JSON.parse(await readFile(resolve(root, 'tokens.json'), 'utf8'));

const luminance = (hex) => {
  const channels = [1, 3, 5].map((offset) => parseInt(hex.slice(offset, offset + 2), 16) / 255);
  const [r, g, b] = channels.map((channel) =>
    channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4,
  );
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const contrast = (foreground, background) => {
  const values = [luminance(foreground), luminance(background)].sort((a, b) => b - a);
  return (values[0] + 0.05) / (values[1] + 0.05);
};

const color = (name) => tokens.color[name];
const checks = [
  ['ink', 'page', 4.5],
  ['ink', 'surface', 4.5],
  ['muted', 'page', 4.5],
  ['muted', 'surface', 4.5],
  ['primary-strong', 'page', 4.5],
  ['accent-strong', 'page', 4.5],
  ['error', 'error-bg', 4.5],
  ['on-error', 'error', 4.5],
  ['border-strong', 'surface', 3],
  ['border-strong', 'page', 3],
  ['border-strong', 'error-bg', 3],
];

for (const [foreground, background, threshold] of checks) {
  const ratio = contrast(color(foreground), color(background));
  if (ratio < threshold) {
    throw new Error(
      `${foreground}/${background}: ${ratio.toFixed(2)}:1 < ${threshold.toFixed(1)}:1`,
    );
  }
}

console.log(`Validated ${checks.length} WCAG token pairs.`);
