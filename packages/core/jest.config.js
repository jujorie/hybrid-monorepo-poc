/** @type {import("jest").Config} */
module.exports = {
  verbose: true,
  testPathIgnorePatterns: [
    '\\.d\\.ts$',
    'dist/'
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
}
