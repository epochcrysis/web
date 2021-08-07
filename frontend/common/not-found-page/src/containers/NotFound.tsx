import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import NotFound from '../components/NotFound'

export default connect()(props => (
  <Route
    render={({ staticContext }) => {
      if (staticContext) {
        staticContext.statusCode = 404 // eslint-disable-line no-param-reassign
      }

      return <NotFound {...props} />
    }}
  />
))
