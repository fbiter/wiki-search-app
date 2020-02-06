module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    'space-before-function-paren': ["error", "never"],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/prop-types': 'off'
  },
  overrides: [
    {
      files: [
        'webpack.config.js', 'webpack.config.dev.js', 'webpack.config.prod.js'
      ],
      rules: {
        "no-undef": "off",
        '@typescript-eslint/no-var-requires': 'off'
      }
    }
  ]
}
