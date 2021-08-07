module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '/(__tests__|e2e)/.*\\.(test|spec)\\.(ts|tsx|js)$',
  testPathIgnorePatterns: ['/node_modules/', '/.c9/'],
  collectCoverageFrom: [
    'frontend/account/*/src/**/*.(js|ts|tsx)',
    'frontend/common/*/src/**/*.(js|ts|tsx)',
    'frontend/mailer/*/src/**/*.(js|ts|tsx)',
    'frontend/admin/*/src/**/*.(js|ts|tsx)',
    'frontend/sso/*/src/**/*.(js|ts|tsx)',
    'frontend/ui/*/src/**/*.(js|ts|tsx)',
    'scripts/*/src/**/*.(js|ts|tsx)',
  ],
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['json', 'lcov', 'html', 'text', 'text-summary'],
  roots: [
    'frontend/account/',
    'frontend/common/',
    'frontend/mailer/',
    'frontend/admin/',
    'frontend/sso/',
    'frontend/ui/',
    'scripts/',
  ],
}
