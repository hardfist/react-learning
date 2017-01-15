const initialState = {
    loading: false,
    error: false,
    articleList : []
}
const LOAD_ARTICLES = 'LOAD_ARTICLES'
const LOAD_ARTICLES_SUCCESS = 'LOAD_ARTICLES_SUCCESS'
const LOAD_ARTICLES_FAILURE = 'LOAD_ARTICLES_FAILER'

export function loadArticles(){
    return {
        types: [LOAD_ARTICLES,LOAD_ARTICLES_SUCCESS,LOAD_ARTICLES_FAILURE],
        url: '/api/articles.json'
    }
}
function previewList(state =initialState,action){
    switch(action.type){
        case LOAD_ARTICLES:{
            return {
                ...state,
                loading: true,
                error: false 
            }
        }
        case LOAD_ARTICLES_SUCCESS:{
            return {
                ...state,
                loading:false,
                error: false,
                articleList : action.payload
            }
        }
        case LOAD_ARTICLES_FAILURE:{
            return {
                ...state,
                loading: false,
                error: true 
            }
        }
        default:
            return state 
    }
}
export default previewList