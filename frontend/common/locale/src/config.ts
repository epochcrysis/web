import { addLocaleData } from 'react-intl'
import ruLocaleData from 'react-intl/locale-data/ru'
import enLocaleData from 'react-intl/locale-data/en'

addLocaleData(ruLocaleData)
addLocaleData(enLocaleData)

export const DEFAULT_LOCALE = 'ru'
export const SUPPPORTED_LOCALES: string[] = ['ru', 'en']
export const LOCALE_COOKIE_NAME = 'STARTER_LOCALE'
export const LOCALE_COOKIE_DOMAIN = '.local.project-starter.dev'
export const SUPPORTED_WITHOUTH_DEFAULT_LOCALES: string[] = SUPPPORTED_LOCALES.filter(
  supported => supported !== DEFAULT_LOCALE
)
