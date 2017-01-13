import React from 'react'
import ReactDOM, { render } from 'react-dom'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

const store = createStore(reducer,
applyMiddleware(thunk,promise,createLogger()))
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)