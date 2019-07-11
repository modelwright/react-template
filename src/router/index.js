import React, { Component } from 'react'
import { HashRouter, Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { Provider } from 'mobx-react'

import store from '@/store'

import NotFound from '@/page/Error/404'
import Login from '@/page/Login'
import Layouts from '@/components/Layouts'

@withRouter
class Routers extends Component {
    render() {
        return (
            <HashRouter>
                <Provider { ...store }>
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to='/app/home' push />} />
                        <Route path='/app' component={Layouts} />
                        <Route path='/login' component={Login} />
                        <Route path='/404' component={NotFound} />
                        <Route component={NotFound} />
                    </Switch>
                </Provider>
            </HashRouter>
        )
    }
}

export default Routers
