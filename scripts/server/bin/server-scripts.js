#!/usr/bin/env node

process.on('unhandledRejection', err => {
  throw err
})

const path = require('path')
const spawn = require('cross-spawn')
const args = process.argv.slice(2)

const scriptIndex = args.findIndex(x => x === 'build' || x === 'start')

const script = scriptIndex === -1 ? args[0] : args[scriptIndex]
const nodeArgs = scriptIndex > 0 ? args.slice(0, scriptIndex) : []

switch (script) {
  case 'build':
  case 'start': {
    const result = spawn.sync(
      'node',
      nodeArgs
        .concat(['-r', path.join(__dirname, '../src/register.js')])
        .concat(require.resolve('../src/' + script + '.ts'))
        .concat(args.slice(scriptIndex + 1)),
      { stdio: 'inherit' }
    )

    if (result.signal) {
      if (result.signal === 'SIGKILL') {
        console.log(
          'The build failed because the process exited too early. ' +
            'This probably means the system ran out of memory or someone called ' +
            '`kill -9` on the process.'
        )
      } else if (result.signal === 'SIGTERM') {
        console.log(
          'The build failed because the process exited too early. ' +
            'Someone might have called `kill` or `killall`, or the system could ' +
            'be shutting down.'
        )
      }

      process.exit(1)
    }

    process.exit(result.status)
    break
  }
  default:
    console.log('Unknown script "' + script + '".')

    break
}
