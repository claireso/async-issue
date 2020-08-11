import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { createStore, createStoreWithSaga } from './store'
import Demo from './apps/Demo'
import DemoWithAbortController from './apps/DemoWithAbortController'
import DemoWithSaga from './apps/DemoWithSaga'

const withStore = (App, { middleware } = {}) => {
  const store = middleware === 'saga' ? createStoreWithSaga() : createStore()

  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

ReactDOM.render(withStore(Demo), document.querySelector('#js-root-demo'))
ReactDOM.render(withStore(DemoWithAbortController), document.querySelector('#js-root-demo-abort-controller'))
ReactDOM.render(withStore(DemoWithSaga, { middleware: 'saga' }), document.querySelector('#js-root-demo-saga'))


