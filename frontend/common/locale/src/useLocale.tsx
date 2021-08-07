import { useState } from 'react'
import { useCookies } from 'react-cookie'
import {
  SUPPPORTED_LOCALES,
  DEFAULT_LOCALE,
  LOCALE_COOKIE_NAME,
} from './config'

export const useLocale = () => {
  const [cookies, setCookie] = useCookies([LOCALE_COOKIE_NAME])
  const [active, setActive] = useState(
    cookies[LOCALE_COOKIE_NAME] || DEFAULT_LOCALE
  )

  const onChange = locale => {
    setActive(locale)
    setCookie(LOCALE_COOKIE_NAME, locale)
  }

  return {
    locale: active,
    supported: SUPPPORTED_LOCALES,
    onChange,
  }
}
