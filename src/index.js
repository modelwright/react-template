import React from 'react'
import ReactDOM from 'react-dom'

class ShitMe extends React.Component {
    render() {
        return (
            <div>123</div>
        )
    }
}

ReactDOM.render(<ShitMe />, document.getElementById('app'))

if (module.hot) {
    module.hot.accept()
}
