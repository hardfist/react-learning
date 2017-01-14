import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import createLogger from 'redux-logger'
const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'
function reducer(state = {}, action) {
    switch (action.type) {
        case REQUEST:
            return Object.assign({}, state, {
                loading: true
            })
        case SUCCESS:
            return Object.assign({}, state, {
                data: action.data,
                loading: false,
                error: null
            })
        case FAILURE:
            return Object.assign({}, state, {
                loading: false,
                error: action.error,
                data: null
            })
    }
}
const store = createStore(reducer,
    applyMiddleware(thunk, promise, createLogger())
)
function handleClick(e) {
    store.dispatch(getWeather(111))
}
function handleClick2(e){
    store.dispatch(getWeather(1))
}
async function fetchData(url) {
    const result = {}
    try {
        const data = await fetch(url).then(data => data.json());
        result.data = data
    } catch (err) {
        result.error = err
    }
    return result
}
async function getWeather(id) {
    store.dispatch({ type: REQUEST })
    const result = await fetchData(`api/post${id}.json`)
    if (result.error) {
        return {
            type: FAILURE,
            error: result.error
        }
    }
    return {
        type: SUCCESS,
        data: result.data
    }
}
ReactDOM.render(
    <div>
        <button onClick={handleClick}>
            FAILURE REQUEST 
    </button>
    <button onClick={handleClick2}>
        SUCCESS REQUEST
    </button>
    </div>,
    document.getElementById('root')
)
