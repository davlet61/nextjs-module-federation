import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: ['ui', 'lib'],
  webpack: (config, options) => {
    const location = options.isServer ? 'ssr' : 'chunks';

    config.plugins.push(
      new NextFederationPlugin({
        name: 'skeleton',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          notes: `notes@http://localhost:3000/_next/static/${location}/remoteEntry.js`,
          skeleton: `skeleton@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
        },
        exposes: {
          './Navbar': './src/components/Navbar.tsx',
        },
        extraOptions: {
          automaticAsyncBoundary: true,
        },
      }),
    );

    return config;
  },
};

export default config;
