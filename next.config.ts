import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/momarinho',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/momarinho94/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
