import { configureAxe } from 'jest-axe';

expect.extend(configureAxe({
  rules: {
    // Add custom rules or override existing ones
    'color-contrast': { enabled: true },
    'html-has-lang': { enabled: true },
    'valid-aria-role': { enabled: true },
  },
}));