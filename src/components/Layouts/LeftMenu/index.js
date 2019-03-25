import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
import routerConfig from '@/router/config'
const {
    Sider
} = Layout
const SubMenu = Menu.SubMenu

@withRouter
class LeftMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            keys: []
        }
    }
    onSelect = ({ key }) => {
        this.props.history.push(key)
    }
    render() {
        return (
            <Sider
                // collapsedWidth='0'
                onBreakpoint={ broken => { console.log(broken) }}
                onCollapse={(collapsed, type) => { console.log(collapsed, type) }}
                trigger={null}
                collapsible
                collapsed={this.props.collapsed.collapsed}
            >
                <div className='logo' />
                <Menu theme='dark' mode='inline' defaultSelectedKeys={['/app/home']} onClick={this.onSelect}>
                    {
                        routerConfig.map(item => {
                            if (item.list && item.list.length > 0) {
                                return (
                                    <SubMenu key={ item.path } title={<span><Icon type='user' /><span>{ item.title }</span></span>} >
                                        {
                                            item.list.map(boo => {
                                                return <Menu.Item key={boo.path}>{ boo.title }</Menu.Item>
                                            })
                                        }
                                    </SubMenu>
                                )
                            } else {
                                return (
                                    <Menu.Item key={ item.path }>
                                        <Icon type='user' />
                                        <span className='nav-text'>{item.title}</span>
                                    </Menu.Item>
                                )
                            }
                        })
                    }
                </Menu>
            </Sider>
        )
    }
}

export default LeftMenu