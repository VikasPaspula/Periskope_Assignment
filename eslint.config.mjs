import eslintPlugin from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  eslintPlugin.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-unused-vars': 'warn',
    },
  },
];
