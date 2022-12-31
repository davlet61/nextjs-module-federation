import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: ['ui', 'lib'],
  webpack: (config, options) => {
    const location = options.isServer ? 'ssr' : 'chunks';
    config.output.publicPath = 'auto';
    config.plugins.push(
      new NextFederationPlugin({
        name: 'notes',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          notes: `notes@http://localhost:3000/_next/static/${location}/remoteEntry.js`,
          skeleton: `skeleton@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
        },
        exposes: {
          './Modal': './src/components/Modal.tsx',
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
