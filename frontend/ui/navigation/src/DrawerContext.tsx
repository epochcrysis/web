import React, { createContext, Component } from 'react'

export interface DrawerState {
  show: boolean
  setShow: (show: boolean) => void
}

export const DrawerContext = createContext<DrawerState>({
  show: false,
  setShow: f => f,
})
export const { Provider, Consumer } = DrawerContext

export class DrawerProvider extends Component {
  state = {
    show: false,
  }

  setShow = value => {
    this.setState({ show: value })
  }

  render() {
    const { children } = this.props

    return (
      <Provider value={{ show: this.state.show, setShow: this.setShow }}>
        {children}
      </Provider>
    )
  }
}
