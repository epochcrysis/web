import { compose } from 'recompose'
import { cookies } from './cookies'
import { emotion } from './emotion'
import { apollo } from './apollo'
import { intl } from './intl'

export const withProviders = compose(
  cookies,
  apollo,
  intl,
  emotion
)
