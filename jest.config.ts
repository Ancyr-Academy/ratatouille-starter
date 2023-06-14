export default {
  collectCoverage: true,
  preset: "ts-jest",
  testEnvironment: "node",
  testRegex: "^((?!int|e2e).)*.test.ts$",
  coverageDirectory: "../coverage",
  coverageProvider: "v8",
  moduleFileExtensions: ["js", "json", "ts", "tsx"],
  rootDir: "src",
  moduleNameMapper: {
    "^@ratatouille/(.*)$": "<rootDir>/$1",
  },
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/in-memory*",
    ".*\\.factory\\.ts$",
  ],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        diagnostics: false,
        isolatedModules: true,
        jsx: "react",
        target: "es2017",
        allowJs: true,
      },
    ],
  },
};
