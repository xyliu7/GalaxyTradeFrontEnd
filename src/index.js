import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import galaxyApp from './reducers/index'
import thunk from 'redux-thunk'

const middleware = [thunk]
const store = createStore(
  galaxyApp,
  compose(
		applyMiddleware(...middleware),
		process.env.NODE_ENV !== 'production' && window.devToolsExtension ? window.devToolsExtension() : f => f
	)
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
