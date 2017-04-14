import React from 'react'
import { Route, IndexRoute} from 'react-router'
import App from './components/App'
import Login from './pages/Login'
import User from './components/User'

module.exports = (
  <Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/" component={App}>
      <IndexRoute component={Login}></IndexRoute>
      <Route path="/user" component={User}></Route>
    </Route>
  </Route>
)
