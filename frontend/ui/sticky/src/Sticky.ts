import raf from 'raf'

export class Sticky {
  node: HTMLElement
  rafHandle: any
  framePending: boolean = false

  events = [
    'resize',
    'scroll',
    'touchstart',
    'touchmove',
    'touchend',
    'pageshow',
    'load',
  ]

  subscribers = []

  subscribe = handler => {
    this.subscribers = this.subscribers.concat(handler)
  }

  unsubscribe = handler => {
    this.subscribers = this.subscribers.filter(current => current !== handler)
  }

  getParent() {
    return this.node
  }

  mount(node) {
    this.node = node

    this.events.forEach(event =>
      window.addEventListener(event, this.notifySubscribers)
    )
  }

  unmount() {
    if (this.rafHandle) {
      raf.cancel(this.rafHandle)
      this.rafHandle = null
    }

    this.events.forEach(event =>
      window.removeEventListener(event, this.notifySubscribers)
    )
  }

  notifySubscribers = evt => {
    if (!this.framePending) {
      const { currentTarget } = evt

      this.rafHandle = raf(() => {
        this.framePending = false

        const { top, bottom } = this.node.getBoundingClientRect()

        this.subscribers.forEach(handler =>
          handler({
            distanceFromTop: top,
            distanceFromBottom: bottom,
            eventSource: currentTarget === window ? document.body : this.node,
          })
        )
      })

      this.framePending = true
    }
  }
}
