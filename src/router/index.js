import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import NotFound from '@/page/Error/404'
import Login from '@/page/Login'
import Layouts from '@/components/Layouts'

class Routers extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' render={() => <Redirect to='/app/home' push />} />
                    <Route path='/app' component={Layouts} />
                    <Route path='/login' component={Login} />
                    <Route path='/404' component={NotFound} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        )
    }
}

export default Routers