import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import createLogger from 'redux-logger'
import { Provider } from 'react-redux'
import './index.css'
import reducers from './components/Posts/reducers'
import PostApp from './components/Posts'
const store = createStore(
    reducers,
    applyMiddleware(thunk,promise,createLogger())
)
ReactDOM.render(
    <Provider store={store}>
        <PostApp userId="1" />
    </Provider>,
    document.getElementById('root')
)
