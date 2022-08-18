// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom/extend-expect';

process.env = {
    ...process.env,
};

const noop = () => {};

Object.defineProperty(window, 'scrollTo', { value: noop, writable: true });
