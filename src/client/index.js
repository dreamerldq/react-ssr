
import React from 'react'
import { BrowserRouter as Router  } from 'react-router-dom'
import ReactDom from 'react-dom'
import Routes from '../Routes'
import { Provider } from 'react-redux'
import getStore from '../store/index'
const store = getStore()

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