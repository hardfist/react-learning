export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS'
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE'
export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST'
export const SELECT_POST = 'SELECT_POST'

export function selectPost(userId){
    return {
        type: SELECT_POST,
        userId
    }
}

export function loadPostsSuccess(userId,response){
    return{
        type: LOAD_POSTS_SUCCESS,
        userId,
        response
    }
}

export function loadPostsFailure(userId,error){
    return {
        type: LOAD_POSTS_FAILURE,
        userId,
        error
    }
}
export function loadPostsRequest(userId){
    return {
        type: LOAD_POSTS_REQUEST,
        userId
    }
}