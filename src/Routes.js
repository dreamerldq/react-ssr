import { Route,Switch } from 'react-router-dom'
import React from 'react'
import Home from './containers/Home'
import Login from './containers/Login'
export default (
    <Switch>
         <Route path="/login"  component={Login}></Route>
        <Route path="/" exect component={Home}></Route>
       
    </Switch>
)