module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': 0,
    'object-property-newline': ['error', { 
      'allowAllPropertiesOnSameLine': true 
    }],
    'lines-between-class-members': ['error', 'never']
  },
  parserOptions: {
    parser: 'typescript-eslint-parser',
  },
};
