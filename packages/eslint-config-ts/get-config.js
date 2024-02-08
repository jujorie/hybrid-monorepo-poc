/* eslint-env: node */

/**
 * Get Eslint config for TS
 *
 * @param {*} path
 * @returns {import("eslint").Linter.Config}
 */
module.exports.getConfig = (tsconfigRootDir = process.cwd()) => {
  return {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      tsconfigRootDir,
      project: ['./tsconfig.json'],
      sourceType: 'module'
    },
    env: {
      es2021: true,
      node: true,
      jest: true
    },
    extends: ['standard-with-typescript']
  }
}
