import {GET_NEWSLIST} from './contents'
const defaultState  = {
    newsList: [],
    name: 'lidanqiu'
}
const reducer = (state = defaultState, action) => {
    switch(action.type){
        case GET_NEWSLIST:
            return {
                ...state,
                newsList: action.list
            }
        default:
            return state
    }
}
export default reducer