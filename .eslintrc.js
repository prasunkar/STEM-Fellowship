module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'eslint-config-prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    // quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'react/prop-types': 0,
    // 'react/prop-types': [
    //   2,
    //   {
    //     ignore: ['children'],
    //   },
    // ],
    // 'react/jsx-curly-spacing': [
    //   2,
    //   'always',
    //   {
    //     spacing: { objectLiterals: 'never' },
    //   },
    // ],
    'prettier/prettier': 'error',
  },
}
