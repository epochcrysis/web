module.exports = {
  extends: [
    '@commitlint/config-lerna-scopes',
    '@commitlint/config-conventional',
  ],
  rules: {
    'scope-enum': [0, 'always', ['common', 'frontend', 'wordpress']],
  },
}
