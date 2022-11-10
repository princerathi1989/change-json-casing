module.exports = {
  collectCoverageFrom: [
    'src/**/*.ts*'
  ],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '/tests/.*\\.(test|spec)?\\.(ts|tsx|js)$',
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  }
};
