import {StaticRouter, Router} from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import Routes from '../Routes'
import React from 'react'
import { Provider } from 'react-redux'
import getStore from '../store/index'


export const render = (req) => {
    const store = getStore()
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