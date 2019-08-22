module.exports = {
    collectCoverage: true,
    coverageDirectory: "coverage",
    collectCoverageFrom: ["src/**/*.ts"],
    coverageThreshold: {
        global: {
            branches: 0,
            functions: 0,
            lines: 0,
            statements: -10
        },
        "./src/**/*.ts": {
            branches: 0
        }
    },
    moduleFileExtensions: ["ts", "js", "json", "node"],
    modulePaths: ["<rootDir>"],
    testEnvironment: "node",
    testMatch: ["**/?(*.)(test|spec).(j|t)s?(x)"],
    testPathIgnorePatterns: ["/node_modules/", "/dist/"],
    transform: { "^.+\\.tsx?$": "ts-jest" }
};
