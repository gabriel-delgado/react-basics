import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './app/components/login/Login';

import './index.scss';

const App = () => (
  <MuiThemeProvider>
    <Login/>
  </MuiThemeProvider>
);

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
  </Router>,
  document.getElementById('app')
);
