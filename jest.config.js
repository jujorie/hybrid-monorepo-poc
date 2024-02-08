//
//  Jest config for Root application
//

const ignoreFilesPattern = [
  '/dist/',
  '/node_modules/'
]

/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testEnvironment: 'jsdom',
  testMatch: [
    '**/__tests__/**/*.test.js'
  ],
  testPathIgnorePatterns: ignoreFilesPattern,
  coveragePathIgnorePatterns: ignoreFilesPattern
}

module.exports = config
