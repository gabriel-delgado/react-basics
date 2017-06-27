import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './app/components/MyAwesomeReactComponent';

// import {Hello} from './app/hello';

import './index.scss';

const App = () => (
  <MuiThemeProvider>
    <MyAwesomeReactComponent/>
  </MuiThemeProvider>
);

/* ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Hello}/>
  </Router>,
  document.getElementById('root')
); */

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
  </Router>,
  document.getElementById('app')
);
