import React, { Component } from 'react'
import { Form } from 'antd'

class Loginzi extends Component {
    render() {
        return (
            <div className='loginback'>
                <div>登录页面</div>
            </div>
        )
    }
}
const Login = Form.create()(Loginzi)

export default Login
