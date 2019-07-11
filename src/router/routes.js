/**
 * 场景循环
 */
import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import routesConfig from '@/router/config'

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                {
                    routesConfig.map(item => {
                        const route = r => {
                            return (
                                <Route
                                    key={r.path}
                                    exact
                                    path={r.path}
                                    component={r.component}
                                />
                            )
                        }
                        return item.component ? route(item) : item.list.map(r => route(r))
                    })
                }

                <Route render={() => <Redirect to='/404' />} />
            </Switch>
        )
    }
}
