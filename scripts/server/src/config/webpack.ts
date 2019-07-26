import StartServerPlugin from 'start-server-webpack-plugin'
import nodeExternals from 'webpack-node-externals'
import { getPackages } from '@lerna/project'
import glob from 'glob-promise'
import webpack from 'webpack'
import path from 'path'
import paths from './paths'

export const createWebpackConfig = async webpackEnv => {
  const isEnvDevelopment = webpackEnv === 'development'
  const isEnvProduction = webpackEnv === 'production'

  const packages = await getPackages(process.cwd())
  const workspaces = packages.map(({ name }) => new RegExp(name))

  const configs = await glob(path.join(paths.appConfigsPath, '**/*.ts'))

  const configEntries = configs.reduce(
    (result, config) => ({
      ...result,
      [path.relative(paths.appSrc, config).replace('.ts', '')]: [
        isEnvDevelopment && 'webpack/hot/poll?100',
        config,
      ].filter(Boolean),
    }),
    {}
  )

  return {
    mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',

    bail: isEnvProduction,

    target: 'node',

    entry: {
      index: [
        isEnvDevelopment && 'webpack/hot/poll?100',
        paths.appIndex,
      ].filter(Boolean),
      ...configEntries,
    },

    output: {
      path: paths.appBuild,
      pathinfo: isEnvDevelopment,
      libraryTarget: 'commonjs',
      filename: '[name].js',
      publicPath: '/',
    },

    module: {
      rules: [
        {
          test: /.tsx?$/,
          exclude: /node_modules/,
          loader: require.resolve('ts-loader'),
          options: {
            transpileOnly: true,
            experimentalWatchApi: true,
          },
        },
        {
          test: /node_modules\/datauri\/index\.js/,
          loader: require.resolve('shebang-loader'),
        },
      ],
    },

    externals: [
      nodeExternals({
        whitelist: [...workspaces, 'webpack/hot/poll?100'],
      }),
      nodeExternals({
        modulesDir: paths.rootNodeModules,
        whitelist: [...workspaces, 'webpack/hot/poll?100'],
      }),
    ],

    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },

    plugins: [
      isEnvDevelopment && new webpack.HotModuleReplacementPlugin(),
      isEnvDevelopment && new StartServerPlugin({ name: 'index.js' }),
    ].filter(Boolean),

    node: {
      __dirname: false,
    },
  }
}
