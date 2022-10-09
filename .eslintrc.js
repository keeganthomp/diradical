module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.tsx', '.ts'],
      },
    ],
    'react/no-unstable-nested-components': [
      'warn',
      {
        allowAsProps: true,
      },
    ],
    'no-underscore-dangle': 'off',
    'no-restricted-syntax': 'off',
    'react/prop-types': 'off',
    'react/button-has-type': 'off',
    'import/prefer-default-export': 'off',
    'import/export': 'off',
    'react/require-default-props': 'off',
    'no-nested-ternary': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/semi': 'off',
    'no-unexpected-multiline': 'error',
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 2,
  },
};
