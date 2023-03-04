/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    experimental: {
        appDir: true
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.schema.io',
                port: '',
                pathname: '/sativa-scents/**'
            },
            {
                protocol: 'https',
                hostname: 'cdn.schema.io',
                port: '',
                pathname: '/test-theme/**'
            }
        ]
    }
}
