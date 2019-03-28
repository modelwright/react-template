import React from 'React'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'

import '@/common/Global'
import '@a/styles/base.less'

class ShitMe extends React.Component {
    handleClick = (e) => {
        e.preventDefault()
        let param = {
            obj: 1,
            obj2: 2
        }

        // var formData = new URLSearchParams()
        // formData.append('username', 'Chris')
        // formData.append('password', '123')

        // var formData2 = new URLSearchParams()
        // formData2.append('username', 'Chris')
        // formData2.append('password', '123')

        // let str = JSON.stringify(param)

        // global.Sdk.login(param).then(res => {
        //     console.log(res)
        // }).catch(err => {
        //     throw err
        // })
        global.Sdk.loginget(param).then(res => {
            console.log(res)
        }).catch(err => {
            throw err
        })
    }
    render() {
        return (
            <HashRouter>
                <div onClick={this.handleClick}>5555123456555555</div>
            </HashRouter>
        )
    }
}

ReactDOM.render(<ShitMe />, document.getElementById('app'))

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
