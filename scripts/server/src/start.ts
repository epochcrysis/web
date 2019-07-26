process.env.BABEL_ENV = 'development'
process.env.NODE_ENV = 'development'

process.on('unhandledRejection', err => {
  throw err
})

import { createCompiler } from 'react-dev-utils/WebpackDevServerUtils'
import webpack from 'webpack'
import chalk from 'chalk'
import { paths, createWebpackConfig } from './config'

const bootstrap = async () => {
  const config = await createWebpackConfig('development')

  const appName = require(paths.appPackageJson).name

  const compiler = createCompiler({
    webpack,
    config,
    appName,
    useYarn: true,
    urls: {},
  })

  const watching = compiler.watch({}, error => {
    if (error) {
      return console.log(error) // tslint:disable-line no-console
    }

    console.log(chalk.cyan('Starting the development server...\n')) // tslint:disable-line no-console
  })

  return watching
}

const handleSignals = watching => {
  process.on('SIGINT', () => {
    watching.close()
    process.exit()
  })

  process.on('SIGTERM', () => {
    watching.close()
    process.exit()
  })
}

const handleErrors = err => {
  if (err && err.message) {
    console.log(err.message) // tslint:disable-line no-console
  }

  process.exit(1)
}

bootstrap()
  .then(handleSignals)
  .catch(handleErrors)
