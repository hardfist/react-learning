export const logger = store => next => action =>{
    //console.group(action.type)
    console.info('dispatching',action)
    let result = next(action)
    console.log('next state',store.getState())
  //  console.groupEnd(action.type)
    return result 
}
export const crashReport = store=>next=>action=>{
    console.log('crashReport:')
    try{
        return next(action)
    }catch(err){
        console.error('Caught an exception!',err)
       // throw err
    }
}
export const throwError = store => next => action =>{
    throw 'fuck'
}
export const timeoutScheduler =  store => next => action =>{
    if(!action.meta || !action.meta.delay){
        return next(action)
    }
    let timeoutId = setTimeout(
        () => next(action),
        action.meta.delay
    )
    return function cancel(){
        clearTimeout(timeoutId)
    }
}

export const rafScheduler = store => next =>{
    let queueActions = []
    let frame = null 
    
    function loop(){
        console.log('loop')
        frame = null 
        try{
            if(queueActions.length){
                next(queueActions.shift())
            }
        }finally{
            maybeRaf()
        }
    }
    function maybeRaf(){
        if(queueActions.length && !frame){
            frame = requestAnimationFrame(loop)
        }
    }
    return action => {
        console.log('raf:',action.meta.raf)
        if(!action.meta || !action.meta.raf){
            return next(action)
        }
        queueActions = [action,action,action]
        maybeRaf()

        return function cancel(){
            queueActions = queueActions.filter( a => a !== action)
        }
    }
}

export const vanillaPromise = store => next => action =>{
    if(typeof action.then !== 'function'){
        return next(action) 
    }
    return Promise.resolve(action).then(store.dispatch)
}