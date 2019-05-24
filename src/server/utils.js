import {StaticRouter, Router} from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import Routes from '../Routes'
import React from 'react'
export const render = (req) => {
    const content = renderToString(
        <StaticRouter location={req.path} context={{}}>
            {Routes}
        </StaticRouter>
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