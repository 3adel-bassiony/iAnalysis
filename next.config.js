/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    pageExtensions: ['ts', 'tsx'],
    i18n: {
        locales: ['en', 'ar'],
        defaultLocale: 'en',
    },
};

module.exports = nextConfig;
