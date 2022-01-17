const withPlugins = require('next-compose-plugins')
const { withWorkspaces } = require('@atls/next-config-with-pnp-workspaces')

const nextConfig = {
  experimental: {
    esmExternals: 'loose',
  },
}

module.exports = withPlugins([withWorkspaces], nextConfig)
