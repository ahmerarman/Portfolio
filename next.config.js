/** @type {import('next').NextConfig} */

const { hostname } = require('os')

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: 'cdn.sanity.io',
                port: '',
            },
        ],
    },
}

module.exports = nextConfig
