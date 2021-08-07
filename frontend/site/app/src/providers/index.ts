import { compose } from 'recompose'
import { cookies } from './cookies'
import { emotion } from './emotion'
import { apollo } from './apollo'
import { helmet } from './helmet'
import { intl } from './intl'

export const withProviders = compose(
  apollo,
  cookies,
  intl,
  emotion,
  helmet
)
