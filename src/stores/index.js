import { createStore, combineReducers, applyMiddleware } from 'redux'

import home from './modules/home'
import mine from './modules/mine'
import thunk from 'redux-thunk'

let store = createStore(
    combineReducers({ home, mine }),
    applyMiddleware(thunk)
)

export default store
