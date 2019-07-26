const { withWorkspaces } = require('@monstrs/next-config-with-workspaces')
const { withPathMap } = require('@monstrs/next-config-with-path-map')
const withTypescript = require('@zeit/next-typescript')
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')

module.exports = withPlugins([
  withPathMap,
  withTM,
  withWorkspaces,
  withTypescript,
])
