
import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router  } from 'react-router-dom'
import ReactDom from 'react-dom'
import Routes from '../Routes'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
const reducer = (state={name: 'lidanqiu'},action) => {
    return state
}
const store = createStore(reducer,applyMiddleware(thunk));
const App = () => {
    return(
        <Provider store={store}>
            <Router>
            {Routes}
        </Router>
        </Provider>
    )
}
ReactDom.hydrate(<App/>, document.getElementById('root'))