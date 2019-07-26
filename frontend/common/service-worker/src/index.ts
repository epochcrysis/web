if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').catch(
        registrationError =>
          console.log('SW registration failed: ', registrationError) // tslint:disable-line no-console
      )
    })
  }
}
