const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  reactStrictMode: true,
  experimental: {
    transpilePackages: ['ui', 'config', 'lib', 'tsconfig'],
    appDir: true,
  },
  webpack: (config, options) => {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'skeleton',
          filename: 'static/chunks/remoteEntry.js',
          remotes: {
            notes: 'notes@http://localhost:3000/_next/static/chunks/remoteEntry.js',
            skeleton: 'skeleton@http://localhost:3001/_next/static/chunks/remoteEntry.js',
          },
          exposes: {
            './Navbar': './src/components/Navbar.tsx',
          },
          shared: {},
        }),
      );
    }

    return config;
  },
};
