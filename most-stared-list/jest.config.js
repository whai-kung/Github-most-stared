module.exports = {
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  automock: false, // [boolean]
  browser: true, // [boolean]
  bail: false, // [boolean]
  collectCoverageFrom: [
    'src/**/*.js',
    'src/components/**/*.js',
    '!**/node_modules/**',
  ],
  coverageDirectory: '<rootDir>/coverage', // [string]
  globals: {
    __DEV__: true,
  },
  moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
  moduleNameMapper: {
    '\\.(css|less|scss|sss)$': 'identity-obj-proxy',
  },
  moduleDirectories: [
    '<rootDir>/src',
    'node_modules',
  ],
  setupFiles: [
    'raf/polyfill',
    './jest.setup.js',
  ],
  verbose: true, // [boolean]
}
