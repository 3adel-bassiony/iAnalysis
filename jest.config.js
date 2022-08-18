const nextJest = require('next/jest');

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
    // Add more setup options before each test is run
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
    clearMocks: true,
    coverageDirectory: 'coverage',
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    coverageProvider: 'v8',
    // testEnvironment: 'jsdom',
    // setupFiles: ['<rootDir>/jest.env.ts'],
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    },
    moduleNameMapper: {
        '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
        '@components/(.*)': '<rootDir>/app/components/$1',
        '@context/(.*)': '<rootDir>/app/context/$1',
        '@features/(.*)': '<rootDir>/app/features/$1',
        '@hooks/(.*)': '<rootDir>/app/hooks/$1',
        '@layouts/(.*)': '<rootDir>/app/layouts/$1',
        '@testing/(.*)': '<rootDir>/app/testing/$1',
        '@translations/(.*)': '<rootDir>/app/translations/$1',
        '@utils/(.*)': '<rootDir>/app/utils/$1',
    },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
