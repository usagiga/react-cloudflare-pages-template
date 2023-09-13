module.exports = {
  customSyntax: 'postcss-scss',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-order', 'stylelint-scss'],
  ignoreFiles: ['**/node_modules/**'],
  rules: {
    'string-quotes': 'single',
    'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$',
    'keyframes-name-pattern': '^[a-z][a-zA-Z0-9]+$',
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind'],
      },
    ],
  },
};
