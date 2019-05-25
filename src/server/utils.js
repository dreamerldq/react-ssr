import {StaticRouter, Router} from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import Routes from '../Routes'
import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk  from 'redux-thunk'
const reducer = (state={name: 'lidanqiu'},action) => {
    return state
}
const store = createStore(reducer,applyMiddleware(thunk));

export const render = (req) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
            {Routes}
        </StaticRouter>
        </Provider>
    )
    return `
    <html>
       <head>
           <title>
               SSR
           </title>
       </head>
       <body>
           <div id="root">${content}</div>
           <script src="./index.js"></script>
       </body>
   </html>`
}