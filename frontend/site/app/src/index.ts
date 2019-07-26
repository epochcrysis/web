import next from 'next'
import express from 'express'
import cookiesMiddleware from 'universal-cookie-express'

const bootstrap = async () => {
  const app = next({
    dev: process.env.NODE_ENV !== 'production',
    dir: __dirname,
  })

  const handle = app.getRequestHandler()

  await app.prepare()

  const server = express()

  server.use(cookiesMiddleware())

  server.get('*', (req, res) => handle(req, res))

  server.listen(3000)
}

bootstrap()
