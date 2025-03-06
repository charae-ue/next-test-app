module.exports = {
  // Import sorting plugin and configuration
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '<BUILTIN_MODULES>',
    '<THIRD_PARTY_MODULES>',
    '',
    '^(@/.*)$', // @/ alias imports
    '^[.]', // relative imports
    '',
    '<TYPES>', // type imports
    '<TYPES>^(@/.*)$', // @/ alias type imports
    '<TYPES>^[.]', // relative type imports
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  
  // Settings from monorepo .editorconfig
  tabWidth: 2,
  useTabs: false,
  endOfLine: 'lf',
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100, // from max_line_length in .editorconfig
  semi: true,
  bracketSpacing: true,
  arrowParens: 'avoid',
};