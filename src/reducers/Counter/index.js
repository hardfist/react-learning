import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'

export default function Counter(state=0,action){
    switch(action.type){
        case 'ADD':
            return state + 1
        case 'DEC':
            return state - 1
        default: 
            return state 
    }
}

