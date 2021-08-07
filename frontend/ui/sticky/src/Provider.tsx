import React, { Component } from 'react'
import { Provider } from './Context'
import { Sticky } from './Sticky'

export class StickyProvider extends Component {
  sticky: Sticky

  constructor(props) {
    super(props)

    this.sticky = new Sticky()
  }

  render() {
    return <Provider value={this.sticky}>{this.props.children}</Provider>
  }
}
