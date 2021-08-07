import React from 'react'
import withLocale, { WithLocaleProps } from '../withLocale'

const Locale = ({ locale, supported = [], onChange }: WithLocaleProps) => (
  <div>
    <div>{locale}</div>
    {supported.map(item => (
      <div key={item}>
        <a
          style={{ cursor: 'pointer' }}
          onClick={event => {
            event.preventDefault()
            onChange(item)
          }}
        >
          {item}
        </a>
      </div>
    ))}
  </div>
)

export default withLocale(Locale)
