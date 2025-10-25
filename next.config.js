
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: false,
    output: 'standalone',
    // experimental: {
    //   appDir: true,
    // },
    //transpilePackages: ['next-international', 'international-types'],
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      dangerouslyAllowSVG: true,
      contentDispositionType: 'attachment',
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**.google.com',
        },
      ],
    },
    // async redirects() {
    //   return [
    //     {
    //       source: '/',
    //       destination: '/setting-team',
    //       permanent: true,
    //     },
    //   ];
    // },
  };
  
  module.exports = nextConfig;