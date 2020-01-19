const { defaults: tsjPreset } = require('ts-jest/presets') // eslint-disable-line
const { pathsToModuleNameMapper } = require('ts-jest/utils') // eslint-disable-line
const { compilerOptions } = require('./tsconfig') // eslint-disable-line

module.exports = {
  ...tsjPreset,
  preset: '@testing-library/react-native',
  transform: tsjPreset.transform,
  testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/', '<rootDir>/e2e/', '<rootDir>/migrations/'],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!((jest-)?@react-native-community|react-native|@react-navigation|react-native-gesture-handler|rn-secure-storage.*))',
  ],
  setupFilesAfterEnv: ['./node_modules/react-native-gesture-handler/jestSetup.js', './jest.setup.js'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
}
