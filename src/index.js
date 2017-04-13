import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import routes from './routes.js';
import App from './components/App';

render((
    <Router history={ browserHistory }>
      <Route path="/" component={App}>
      </Route>
    </Router>
), document.getElementById('init'))
