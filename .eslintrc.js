module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  plugins: ['react'],
  rules: {
    'eslint linebreak-style': 'off',
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.base.js',
      },
    },
  },
};
