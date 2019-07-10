import thunk from 'redux-thunk'
import { createStore, applyMiddleware,combineReducers } from 'redux'
import { reducer as homeReducer} from '../containers/Home/store'
import clientAxios from '../client/request'
import serverAxios from '../server/request'
const reducer = combineReducers({
    home: homeReducer
})
export const getStore = () => {
    return createStore(reducer,applyMiddleware(thunk.withExtraArgument(serverAxios)));
}
export const getClientStore = () => {
    // const initState = window.context.state
    const hydratedEl = document.getElementById('SSR_HYDRATED_DATA')
    const hydrateData = JSON.parse(hydratedEl.textContent)
    return createStore(reducer, hydrateData, applyMiddleware(thunk.withExtraArgument(clientAxios)));
}