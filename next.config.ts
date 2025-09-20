import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  
  // SEO optimizations
  experimental: {
    optimizePackageImports: ['@/components', '@/utils'],
  },
  
  // Improve static generation for better SEO
  generateEtags: false,
  
  // Note: headers() doesn't work with static export, but they're good for reference
  // When deploying to a server instead of static hosting, uncomment the headers section
  
  /*
  // Headers for better SEO and security (use when not doing static export)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  */
};

export default nextConfig;
