import React from 'React'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from '@/stores'

// 监听state变化
// store.subscribe(() => {
//   console.log('store发生了变化');
// });

console.log(store.getState())

store.dispatch({
    type: 'ADD_TODO',
    text: '1'
})
store.dispatch({
    type: 'INCREMENT',
    text: 3
})
console.log(store.getState())

class ShitMe extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>123</div>
            </Provider>
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
