/**
 * 场景单个
 */

import Home from '@/page/Home'
import Order from '@/page/Order'
import Personnel from '@/page/SystemManager/Personnel'
import Role from '@/page/SystemManager/Role'

export default
[{
    path: '/app/home',
    title: '首页',
    component: Home
}, {
    path: '/app/order',
    title: '约拍',
    component: Order
}, {
    path: '/app/systemManager',
    title: '系统管理',
    list: [{
        path: '/app/systemManager/personnel',
        title: '人员管理',
        component: Personnel
    }, {
        path: '/app/systemManager/role',
        title: '权限管理',
        component: Role
    }]
}]
