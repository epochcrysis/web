import normalize from 'normalize-path'
import {
  DEFAULT_LOCALE,
  SUPPPORTED_LOCALES,
  LOCALE_COOKIE_NAME,
  LOCALE_COOKIE_DOMAIN,
} from './config'

export const getLocale = cookies => {
  return cookies.get(LOCALE_COOKIE_NAME) || DEFAULT_LOCALE
}

export const setLocale = (cookies, locale) => {
  cookies.set(LOCALE_COOKIE_NAME, locale, {
    domain: LOCALE_COOKIE_DOMAIN,
    path: '/',
  })
}

export const getHref = (locale, href) => {
  if (locale === DEFAULT_LOCALE) {
    return href
  }

  return `/${locale}${href}`
}

export const getLocaleRedirect = (locale, pathname = '') => {
  if (locale === DEFAULT_LOCALE) {
    const [maybeLocale, ...restPath] = pathname.substr(1).split('/')

    if (SUPPPORTED_LOCALES.includes(maybeLocale)) {
      const normalized = normalize(['/'].concat(restPath).join('/'))

      return normalized.length === 0 ? '/' : normalized
    }
  } else if (SUPPPORTED_LOCALES.includes(locale)) {
    const [maybeLocale, ...restPath] = pathname.substr(1).split('/')

    if (maybeLocale !== locale) {
      const path = ['/', locale]

      if (!SUPPPORTED_LOCALES.includes(maybeLocale) && maybeLocale) {
        path.push(maybeLocale)
      }

      return normalize(path.concat(restPath).join('/'))
    }
  }

  return
}
