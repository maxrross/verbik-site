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
                source: "/snapsage-sweep",
                destination: "/snapsweep",
                permanent: true,
            },
            {
                source: "/help/snapsage-sweep",
                destination: "/help/snapsweep",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
