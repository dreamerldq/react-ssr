import express from 'express'
import React from 'react'
import Home from '../containers/Home'
import {StaticRouter, Router} from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import Routes from '../Routes'
const app = express()
app.use(express.static('public')) // 当请求静态文件的时候，就在跟目录下的public中去找

// 客户端渲染
// React代码在浏览器中执行，消耗的是用户浏览器的性能
// 客户端渲染
// React代码在服务器上执行，消耗的是服务器端的性能
app.get('/', (req,res) => {
    const content = renderToString(
        <StaticRouter location={req.path} context={{}}>
            {Routes}
        </StaticRouter>
    )
   res.send(`
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
   </html>
  `)
})
app.listen(3000)