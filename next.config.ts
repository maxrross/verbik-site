import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    },
    async redirects() {
        return [
            {
                source: "/verbik",
                destination: "/",
                permanent: true,
            },
            {
                source: "/help/verbik",
                destination: "/help",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
