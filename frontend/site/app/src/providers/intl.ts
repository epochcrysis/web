import { withIntl } from '@monstrs/next-app-with-intl'
import { IntlProvider, getLocale, DEFAULT_LOCALE } from '@common/locale'

export const intl = withIntl({
  Provider: IntlProvider,
  getFromCookies: getLocale,
  defaultLocale: DEFAULT_LOCALE,
  load: async locale => (await import(`../../locales/${locale}.json`)).default,
})
