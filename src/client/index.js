
import React from 'react'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import ReactDom from 'react-dom'
import routes from '../Routes'
import { Provider } from 'react-redux'
import getStore from '../store/index'
const store = getStore()

const App = () => {
    return(
        <Provider store={store}>
            <Router>
            <Switch>
            {
                routes.map((route) => {
                    return <Route  {...route}></Route>
                })
            }
            </Switch>
        </Router>
        </Provider>
    )
}
ReactDom.hydrate(<App/>, document.getElementById('root'))