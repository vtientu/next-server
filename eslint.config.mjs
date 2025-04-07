const eslintConfig = [{ files: ['**/*.{js,mjs,cjs,ts}'] },
{ languageOptions: { globals: globals.node } },
pluginJs.configs.recommended,
...tseslint.configs.recommended,
{
  plugins: {
    prettier: eslintPluginPrettier
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': false,
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        semi: false,
        trailingComma: 'none',
        tabWidth: 2,
        endOfLine: 'auto',
        useTabs: false,
        singleQuote: true,
        printWidth: 120,
        jsxSingleQuote: true
      }
    ]
  },
  ignores: ['**/node_modules/', '**/dist/', 'eslint.config.js', 'tsconfig.json']
}
];

export default eslintConfig;
