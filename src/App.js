/**
 * Created by Administrator on 2019/1/14 0014.
 */
import React from 'react'
import {Button,message} from 'antd'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from './pages/login/login'
import Admin from './pages/admin/admin'
/*
* 应用根组件
* */
 export default class App extends React.Component {

     handleClick = () => {
         message.error('响应点击')
     }

    render () {
        return (
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/' component={Admin}/>
            </Switch>
        </BrowserRouter>
        )
    }
}