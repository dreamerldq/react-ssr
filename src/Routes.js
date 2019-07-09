import { Route,Switch } from 'react-router-dom'
import React from 'react'
import Home from './containers/Home'
import Login from './containers/Login'
export default [
    
    {
        path:'/login',
        component:Login,
        key:"Login"
    },
    {
        path:'/',
        component:Home,
        exect: true,
        loadData: Home.loadData ,
        key:"Home"
       
    }

]