import {combineReducers} from 'redux'
import {LOAD_POSTS_FAILURE,LOAD_POSTS_REQUEST,LOAD_POSTS_SUCCESS,SELECT_POST} from './actionCreator'
function posts(state=[],action){
    switch(action.type){
        case LOAD_POSTS_SUCCESS:
            return [{
                id:action.userId,
                response : action.response
            }]
        default:
            return state 
    }
}
function isLoading(state=false,action){
    switch(action.type){
        case LOAD_POSTS_REQUEST:
            return true 
        case LOAD_POSTS_FAILURE:
            return false 
        case LOAD_POSTS_SUCCESS:
            return false
        default:
            return state
    }
}
function userId(state=1,action){
    switch(action.type){
        case SELECT_POST:
            return action.userId
        default: 
            return state 
    }
}
export default combineReducers({
    posts,
    isLoading,
    userId
})