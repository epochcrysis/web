import React from 'react'
import { IntlProvider } from 'react-intl'
import renderer from 'react-test-renderer'
import messages from '../../messages'
import NotFound from '../NotFound'

describe('NotFound page', () => {
  let intl

  beforeEach(() => {
    const intlProvider = new IntlProvider(
      {
        defaultLocale: 'ru',
        locale: 'ru',
        messages,
      },
      {}
    )

    intl = intlProvider.getChildContext().intl // eslint-disable-line prefer-destructuring
  })

  describe('snapshots', () => {
    it('should match latest render snapshot', () => {
      const notFound = renderer
        .create(<NotFound.WrappedComponent intl={intl} />)
        .toJSON()

      expect(notFound).toMatchSnapshot()
    })
  })
})
