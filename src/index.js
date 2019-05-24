import express from 'express'
import React from 'react'
import Home from './containers/Home'
import { renderToString } from 'react-dom/server'
const app = express()
const content = renderToString(<Home/>)
// 客户端渲染
// React代码在浏览器中执行，消耗的是用户浏览器的性能
// 客户端渲染
// React代码在服务器上执行，消耗的是服务器端的性能
app.get('/', (req,res) => {
   res.send(`
   <html>
       <head>
           <title>
               SSR
           </title>
       </head>
       <body>
           ${content}
       </body>
   </html>
  `)
})
app.listen(3000)