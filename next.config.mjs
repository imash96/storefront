const store = {
    "features": {
        "search": false
    }
}

function withStoreConfig(nextConfig = {}) {
    const features = nextConfig.features || {}
    delete nextConfig.features

    nextConfig.env = nextConfig.env || {}

    Object.entries(features).forEach(([key, value]) => {
        value && (nextConfig.env[`FEATURE_${key.toUpperCase()}_ENABLED`] = true)
    })

    return nextConfig
}

/** @type {import('next').NextConfig} */
const nextConfig = withStoreConfig({
    features: store.features,
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
            },
            {
                protocol: "https",
                hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com",
            },
            {
                protocol: "https",
                hostname: "medusa-server-testing.s3.amazonaws.com",
            },
            {
                protocol: "https",
                hostname: "medusa-server-testing.s3.us-east-1.amazonaws.com",
            },
            {
                protocol: "https",
                hostname: "tailwindui.com",
            },
            {
                protocol: "https",
                hostname: "studio.swiperjs.com",
            },
            {
                protocol: "https",
                hostname: "dezign4fun.com",
            },
            {
                protocol: "https",
                hostname: "juliette.b-cdn.net",
            },
            {
                protocol: "https",
                hostname: "leatherlifestyle.files.wordpress.com",
            },
        ],
    },
})

export default nextConfig;
