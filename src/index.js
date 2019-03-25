import React from 'React'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '@/stores'

// 创建store
const store = createStore(reducer)

class ShitMe extends React.Component {
    componentWillMount() {
        console.log(store.getState())
    }
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
}
