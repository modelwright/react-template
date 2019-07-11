import React from 'React'
import ReactDOM from 'react-dom'

import { LocaleProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import Routers from '@/router'
import store from './store' // 路由放入口配合historyapi 结果：浏览器历史记录刷新之后可以与hash模式一样在当前页面

import '@/common/Global'
import '@a/styles/base.less'

class ShitMe extends React.Component {
    render() {
        return (
            <Routers />
        )
    }
}

ReactDOM.render(
    <BrowserRouter>
        <LocaleProvider locale={zh_CN}>
            <Provider {...store}>
                <ShitMe />
            </Provider>
        </LocaleProvider>
    </BrowserRouter>,
    document.getElementById('app'))

if (module.hot) {
    module.hot.accept()
    // module.hot.accept('./containers/Root', () => {
    //     const newConfigureStore = require('./store/configureStore');
    //     const newStore = newConfigureStore.configureStore();
    //     const newHistory = newConfigureStore.history;
    //     const NewRoot = require('./containers/Root').default;
    //     render(
    //         <AppContainer>
    //             <NewRoot store={newStore} history={newHistory} />
    //         </AppContainer>,
    //         document.getElementById('root')
    //     );
    // });
}
// handleClick = (e) => {
//     e.preventDefault()
//     let param = {
//         obj: 1,
//         obj2: 2
//     }

//     // var formData = new URLSearchParams()
//     // formData.append('username', 'Chris')
//     // formData.append('password', '123')

//     // var formData2 = new URLSearchParams()
//     // formData2.append('username', 'Chris')
//     // formData2.append('password', '123')

//     // let str = JSON.stringify(param)

//     // global.Sdk.login(param).then(res => {
//     //     console.log(res)
//     // }).catch(err => {
//     //     throw err
//     // })
//     global.Sdk.loginget(param).then(res => {
//         console.log(res)
//     }).catch(err => {
//         throw err
//     })
// }
