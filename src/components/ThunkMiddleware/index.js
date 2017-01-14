import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import createLogger from 'redux-logger'

const LOAD_REQUEST = 'LOAD_REQUEST'
const LOAD_SUCCESS = 'LOAD_SUCCESS'
const LOAD_FAILURE = 'LOAD_FAILURE'

const initState = {
    loading: false,
    error: null,
    data : null
}

function load(state=initState,action){
    switch(action.type){
        case LOAD_REQUEST:
            return Object.assign({},state,{
                loading: true
            })
        case LOAD_SUCCESS:
            return Object.assign({},state,{
                loading: false,
                data: action.data
            })
        case LOAD_FAILURE:
            return Object.assign({},state,{
                loading: false,
                error: action.error
            })
    }
}
function sendSuccess(resp){
    return {
        type:LOAD_SUCCESS,
        data: resp 
    }
}
function sendFailure(error){
    return{
        type:LOAD_FAILURE,
        error: error
    }
}
function sendRequest(){
    return {
        type:LOAD_REQUEST
    }
}
function request(){
    return function(dispatch,getState){
        dispatch(sendRequest())
        return fetch('api/data.json')
        .then(
            resp => dispatch(sendSuccess(resp)),
            error => dispatch(sendFailure(error))
        )
    }
}
const store = createStore(load,
    applyMiddleware(thunk, promise, createLogger()))
class App extends Component {
    constructor(props){
        super(props)
        this.onClick = this.onClick.bind(this)
    }
    onClick() {
        store.dispatch(request())
        .then(() => {
            console.log('Done')
        })
    }
    render() {
        return (
            <button onClick={this.onClick}>
            click me
            </button>
        )
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
)