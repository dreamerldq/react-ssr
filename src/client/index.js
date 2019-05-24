import Home from '../containers/Home'
import React from 'react'

import { BrowserRouter as Router  } from 'react-router-dom'
import ReactDom from 'react-dom'
import Routes from '../Routes'
const App = () => {
    return(
        <Router>
            {Routes}
        </Router>
    )
}
ReactDom.hydrate(<App/>, document.getElementById('root'))