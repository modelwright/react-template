import React, { Component } from 'react'
import { Layout, Icon, Breadcrumb } from 'antd'
import Routes from '@/router/routes'

import LeftMenu from './LeftMenu'

const { Content, Footer, Header } = Layout

class Layouts extends Component {
    state = {
        collapsed: false
    };
    render() {
        const { auth } = this.props
        const { collapsed } = this.state
        return (
            <Layout>
                <LeftMenu collapsed={{ collapsed }} />
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} >
                        <Icon
                            className='trigger'
                            type={collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content className='MainContiner' style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: '24px', background: 'rgb(255, 255, 255)', height: '100%' }}>
                            <Routes auth={auth} />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        dingwei ©{new Date().getFullYear()} - {new Date().getFullYear() + 5} Created by uittle@163.com
                    </Footer>
                </Layout>
            </Layout>
        )
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }
}

export default Layouts