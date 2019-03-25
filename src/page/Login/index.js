import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd'

const FormItem = Form.Item

class Loginzi extends Component {
    constructor(prop) {
        super(prop)
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let obj = {}
                obj.mobile = values.username
                obj.password = values.password
                
                global.Fetch.postForm(global.api.user.login, obj).then(res => {
                    if (!window.localStorage) {
                        message.warn('浏览器不支持localstorage')
                        return false
                    } else {
                        message.warn('浏览器支持localstorage')
                        localStorage.setItem('userinfo', JSON.stringify(res.data))
                        this.props.history.push('/')
                    }
                })
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div className='loginback'>
                <Form onSubmit={this.handleSubmit} className='login-form'>
                    <img className='login-bg' src={require('@/assets/Images/jpg/img2.jpg')} alt=':Banner' />
                    <div className='pt30'>
                        <FormItem>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: '请输入帐号!' }]
                            })(
                                <Input prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='帐号' />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码!' }]
                            })(
                                <Input prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />} type='password' placeholder='密码' />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true
                            })(
                                <Checkbox>记住我</Checkbox>
                            )}
                            <a className='login-form-forgot fr' href=''>忘记密码</a>
                            <Button type='primary' htmlType='submit' className='login-form-button wp100'>登录</Button>
                        </FormItem>
                    </div>
                </Form>
            </div>
        )
    }
}
const Login = Form.create()(Loginzi)

export default Login