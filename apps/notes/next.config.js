const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    notes: `notes@http://localhost:3000/_next/static/${location}/remoteEntry.js`,
    skeleton: `skeleton@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
  };
};

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    // appDir: true,
  },
  transpilePackages: ['ui', 'config', 'lib', 'tsconfig'],
  webpack: (config, options) => {
    // if (!options.isServer) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'notes',
        filename: 'static/chunks/remoteEntry.js',
        remotes: remotes(options.isServer),
        shared: {},
        extraOptions: {
          automaticAsyncBoundary: true,
        },
      }),
    );
    // }

    return config;
  },
};
