import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import routes from './routes.js'

render((
    <Router routes={ routes } history={ browserHistory }>
    </Router>
), document.getElementById('init'))
