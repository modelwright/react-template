import React, { Component } from 'react'
class Home extends Component {
    constructor() {
        super()
        this.state = {
            
        }
    };

    componentWillMount() {
        // Fetch.get(api.user.login).then(res => {
        //     console.log(res);
        // })
        // console.log(this.props.Store)
    }

    render() {
        return (
            <div className='Home_'>
                主页哦
            </div>
        )
    }
}

export default Home
