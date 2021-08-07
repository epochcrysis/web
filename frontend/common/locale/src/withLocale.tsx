import React from 'react'
import { withCookies } from 'react-cookie'
import hoistStatics from 'hoist-non-react-statics'
import { SUPPPORTED_LOCALES, DEFAULT_LOCALE } from './config'
import { getLocale, setLocale } from './utils'

export interface WithLocaleProps {
  locale?: string
  supported?: string[]
  defaultLocale?: string
  children?: any
  ref?: React.RefObject<{}>
  onChange?: (locale: string) => void
}

export default function withLocale(WrapperComponent) {
  const name = WrapperComponent.displayName || WrapperComponent.name

  class LocaleWrapper extends React.Component<any, any> {
    static displayName = `withLocale(${name})`
    static WrapperComponent = WrapperComponent

    constructor(props) {
      super(props)

      this.state = {
        locale: getLocale(props.cookies),
      }
    }

    componentDidUpdate(prevProps) {
      const { cookies } = this.props
      const { locale } = this.state

      const changedLocale = getLocale(cookies)

      if (locale !== changedLocale) {
        this.setState({ locale: changedLocale })
      }
    }

    onChange = locale => {
      this.setState({ locale })
      setLocale(this.props.cookies, locale)
    }

    render() {
      const { ref, ...restProps } = this.props
      const { locale } = this.state

      return (
        <WrapperComponent
          ref={ref}
          locale={locale}
          supported={SUPPPORTED_LOCALES}
          defaultLocale={DEFAULT_LOCALE}
          onChange={this.onChange}
          {...restProps}
        />
      )
    }
  }

  return hoistStatics(withCookies(LocaleWrapper), WrapperComponent, {
    WrappedComponent: true,
  })
}
