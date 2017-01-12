import {createStore,applyMiddleware} from 'redux'
function reducers(state={},action){
    switch(action.type){
        case 'GET_WEATHER_SUCCESS':
            return Object.assign({},state,{
                result:action.payload 
            })
        case 'GET_WEATHER_ERROR':
            return Object.assign({},state,{
                error: action.error
            })
        default:
            return state 
    }
}
function getWeather(url,params){
    return (dispatch,getState)=>{
        fetch(url,params)
        .then(result => {
            dispatch({
                type:'GET_WEATHER_SUCCESS',
                payload: result 
            })
        })
        .catch(err =>{
            dispatch({
                type:'GET_WEATHER_ERROR',
                error: err
            })
        })
    }
}

const store = createStore(reducers)
store.subscribe(function(){
    console.log('state:',store.getState())
})
store.dispatch({
    type:'GET_WEATHER_SUCCESS',
    payload:'payload'
})