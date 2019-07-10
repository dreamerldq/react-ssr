import express from 'express'
import { render } from './utils'
import proxy  from 'express-http-proxy'
import { getStore } from '../store/index'
import routes from '../Routes'
import { matchRoutes } from 'react-router-config'
import React from 'react'
import { StaticRouter, Router,Switch, Route } from 'react-router-dom'

import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'



const app = express()
app.use(express.static('public')) // 当请求静态文件的时候，就在跟目录下的public中去找
app.use('/api', proxy('http://localhost:4000', {
    proxyReqPathResolver:function(req){
        return `/api${req.url}`
    }
  }));
  

app.get('*', (req,res) => {
    const store = getStore()
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
        render(res,store,content)
    }
   
      )
    
  
})
app.listen(3000)