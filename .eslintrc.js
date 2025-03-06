/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'next/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:tailwindcss/recommended',
    'prettier', // 'prettier' must always be last
  ],
  rules: {
    eqeqeq: ['warn', 'always'], // TODO: set this to 'error' when ready
    'no-console': 'warn',
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/no-var-requires': 'off', // todo: re-evaluate if this should be turned on in future
    '@typescript-eslint/member-ordering': [
      'error',
      {
        interfaces: {
          memberTypes: ['signature', 'method', 'constructor', 'field'],
          optionalityOrder: 'required-first',
        },
        typeLiterals: {
          memberTypes: ['signature', 'method', 'constructor', 'field'],
          optionalityOrder: 'required-first',
        },
      },
    ],
  },
  settings: {
    tailwindcss: {
      callees: ['cn', 'cva'],
      config: 'tailwind.config.ts',
    },
  },
};
