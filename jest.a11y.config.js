const baseConfig = require('./jest.config');

module.exports = {
  ...baseConfig,
  testMatch: ['<rootDir>/__tests__/a11y/**/*.test.{js,jsx,ts,tsx}'],
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js',
    '<rootDir>/jest.a11y.setup.js',
  ],
};