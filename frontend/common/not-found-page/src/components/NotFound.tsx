import React from 'react'
import { injectIntl } from 'react-intl'
import messages from '../messages'

const NotFound = ({ intl }) => (
  <div>{intl.formatMessage(messages.pageNotFound)}</div>
)

export default injectIntl(NotFound)
