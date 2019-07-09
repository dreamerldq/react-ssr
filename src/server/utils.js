import { StaticRouter, Router,Switch, Route } from 'react-router-dom'
import { matchRoutes } from 'react-router-config'
import { renderToString } from 'react-dom/server'
import React from 'react'
import { Provider } from 'react-redux'
import { getStore } from '../store/index'
import routes from '../Routes'


export const render = (req,res) => {
    // store里面到底填充什么，我们需要结合用户请求地址和路由来做判断，如果用户访问/路径，我们就拿Home组件的数据
    const store = getStore()
//    routes.some((route) => {
//        const match = matchRoutes(req.path, route)
//        if(match){
//         matched.push(route)
//        }
//    }) 
    const matched = matchRoutes(routes, req.path)
    const promises = []
    matched.forEach(item => {
        if(item.route.loadData)
        promises.push(item.route.loadData(store))
    });
    Promise.all(promises).then(() =>{
        const content = renderToString(
            <Provider store={store}>
                <StaticRouter location={req.path} context={{}}>
                <Switch>
                    {
                        routes.map((route) =>{
                           return <Route {...route}></Route>
                        })
                    }
                </Switch>
            </StaticRouter>
            </Provider>
        )
        res.send(`
        <html>
           <head>
               <title>
                   SSR
               </title>
               <meta name="keywords" content="SSR Demo">
               <meta name="description" content="SSR">
           </head>
           <body>
               <div id="root">${content}</div>
               <script>
                    window.context = {
                        state: ${JSON.stringify(store.getState())}
                    }
               </script>
               <script src="./index.js"></script>
           </body>
       </html>`
    )
    })
 
   
}