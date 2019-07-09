import thunk from 'redux-thunk'
import { createStore, applyMiddleware,combineReducers } from 'redux'
import { reducer as homeReducer} from '../containers/Home/store'
const reducer = combineReducers({
    home: homeReducer
})
export const getStore = () => {
    return createStore(reducer,applyMiddleware(thunk));
}
export const getClientStore = () => {
    const initState = window.context.state
    return createStore(reducer, initState, applyMiddleware(thunk));
}