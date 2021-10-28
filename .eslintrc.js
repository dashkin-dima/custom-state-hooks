module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parserOptions: {
    project: './tsconfig.eslint.json',
    createDefaultProgram: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src/'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-underscore-dangle': 'off',
    'operator-linebreak': 'off',
    'prefer-destructuring': 'off',
    'no-empty': 'off',
    'import/no-cycle': 'off',
    'import/no-named-as-default': 'off',
    'no-useless-escape': 'off',
    'react/destructuring-assignment': 'off',
    'react/no-unused-prop-types': 'off',
    'no-nested-ternary': 'off',
    'global-require': 'off',
    'no-await-in-loop': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    'import/no-extraneous-dependencies': 'off', // TODO: пересмотреть
    'guard-for-in': 'off', // TODO: пересмотреть
    'no-console': ['error', { allow: ['warn', 'error'] }],
  },
};
