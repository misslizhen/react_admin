import React, {Component} from 'react'
import {
        Form,
        Icon,
        Input,
        Button} from 'antd';

import './index.less'
import logo from '../../asset/images/logo.png'


const Item = Form.Item
//登录路由组件
export default class Login extends Component {
    render() {
        return (
            <div className="login">
             <div className="login-header">
                 <img src={logo} alt="logo"/>
                 React项目：后台管理系统
             </div>
                <div className="login-content">
                  <div className="login-box">
                      <div className="title">用户登录</div>
                      <LoginForm/>
                  </div>
                </div>
            </div>
        )
    }
}
//包含《form》被包装组件
class LoginForm extends React.Component {

    clickLogin = () => {
        //验证没有错误，输出信息
           this.props.form.validateFields((error, values) => {
               console.log('validateFields', error,values)
               if (!error) {
                   console.log('收集数据',values)
               }else {
                   this.props.form.resetFields() //重置所有输入框
               }
           })
        //得到输入的用户名
        const username = this.props.form.getFieldValue('username')
        alert (username)
    }

    checkPassword = (rule,value,callback) => {
        console.log('checkPassword',rule,value)

        if(!value) {
            callback('必须输入密码')
        }else if(value.length<4 || value.length>8) {
            callback('密码需要4到8位')
        }else {
            callback()
        }
    }

    render () {

        const { getFieldDecorator } = this.props.form

        return(
            <Form className="login-form">
                <Item>
                    {
                      getFieldDecorator('username', {
                          initialvalue: 'admin', //默认值
                          rules: [{type:"string", required: true, message: '请输入用户名' },
                                  {min: 4, message: '长度不少于4'},
                          ],
                      })(
                          <Input placeholder="请输入用户名" prefix={<Icon type="user"/>}/>
                      )
                    }
                </Item>
                <Item>
                    {
                        getFieldDecorator('password', {
                            rules: [{validator: this.checkPassword}]
                        })(
                            <Input  type="password" placeholder="请输入密码" prefix={<Icon type="lock"/>}/>
                        )
                    }
                </Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.clickLogin}>
                        登录
                    </Button>
                </Form.Item>

            </Form>
        )
    }
}
//包装包含《Form》的组件，生成一个新的组件
LoginForm = Form.create()(LoginForm)